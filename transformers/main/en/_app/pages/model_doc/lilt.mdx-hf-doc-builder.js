import{S as Ra,i as Ba,s as Ha,e as r,k as m,w,t as n,M as Ja,c as a,d as o,m as f,a as i,x as T,h as s,b as c,N as Ga,G as e,g as _,y,q as L,o as k,B as $,v as Xa,L as yo}from"../../chunks/vendor-hf-doc-builder.js";import{T as an}from"../../chunks/Tip-hf-doc-builder.js";import{D as ae}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Vt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ft}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as To}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ka(x){let d,v,g,u,b;return u=new Vt({props:{code:`from transformers import LiltConfig, LiltModel

# Initializing a LiLT SCUT-DLVCLab/lilt-roberta-en-base style configuration
configuration = LiltConfig()
# Randomly initializing a model from the SCUT-DLVCLab/lilt-roberta-en-base style configuration
model = LiltModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LiltConfig, LiltModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LiLT SCUT-DLVCLab/lilt-roberta-en-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LiltConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Randomly initializing a model from the SCUT-DLVCLab/lilt-roberta-en-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LiltModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,g,p),y(u,l,p),b=!0},p:yo,i(l){b||(L(u.$$.fragment,l),b=!0)},o(l){k(u.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function Ya(x){let d,v,g,u,b;return{c(){d=r("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var C=i(g);u=s(C,"Module"),C.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,v),e(d,g),e(g,u),e(d,b)},d(l){l&&o(d)}}}function Za(x){let d,v,g,u,b;return u=new Vt({props:{code:`from transformers import AutoTokenizer, AutoModel
from datasets import load_dataset

tokenizer = AutoTokenizer.from_pretrained("SCUT-DLVCLab/lilt-roberta-en-base")
model = AutoModel.from_pretrained("SCUT-DLVCLab/lilt-roberta-en-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
words = example["tokens"]
boxes = example["bboxes"]

encoding = tokenizer(words, boxes=boxes, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,g,p),y(u,l,p),b=!0},p:yo,i(l){b||(L(u.$$.fragment,l),b=!0)},o(l){k(u.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function ei(x){let d,v,g,u,b;return{c(){d=r("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var C=i(g);u=s(C,"Module"),C.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,v),e(d,g),e(g,u),e(d,b)},d(l){l&&o(d)}}}function ti(x){let d,v,g,u,b;return u=new Vt({props:{code:`from transformers import AutoTokenizer, AutoModelForSequenceClassification
from datasets import load_dataset

tokenizer = AutoTokenizer.from_pretrained("SCUT-DLVCLab/lilt-roberta-en-base")
model = AutoModelForSequenceClassification.from_pretrained("SCUT-DLVCLab/lilt-roberta-en-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
words = example["tokens"]
boxes = example["bboxes"]

encoding = tokenizer(words, boxes=boxes, return_tensors="pt")

outputs = model(**encoding)
predicted_class_idx = outputs.logits.argmax(-1).item()
predicted_class = model.config.id2label[predicted_class_idx]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = outputs.logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class = model.config.id2label[predicted_class_idx]`}}),{c(){d=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,g,p),y(u,l,p),b=!0},p:yo,i(l){b||(L(u.$$.fragment,l),b=!0)},o(l){k(u.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function oi(x){let d,v,g,u,b;return{c(){d=r("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var C=i(g);u=s(C,"Module"),C.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,v),e(d,g),e(g,u),e(d,b)},d(l){l&&o(d)}}}function ni(x){let d,v,g,u,b;return u=new Vt({props:{code:`from transformers import AutoTokenizer, AutoModelForTokenClassification
from datasets import load_dataset

tokenizer = AutoTokenizer.from_pretrained("SCUT-DLVCLab/lilt-roberta-en-base")
model = AutoModelForTokenClassification.from_pretrained("SCUT-DLVCLab/lilt-roberta-en-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
words = example["tokens"]
boxes = example["bboxes"]

encoding = tokenizer(words, boxes=boxes, return_tensors="pt")

outputs = model(**encoding)
predicted_class_indices = outputs.logits.argmax(-1)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_indices = outputs.logits.argmax(-<span class="hljs-number">1</span>)`}}),{c(){d=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,g,p),y(u,l,p),b=!0},p:yo,i(l){b||(L(u.$$.fragment,l),b=!0)},o(l){k(u.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function si(x){let d,v,g,u,b;return{c(){d=r("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);v=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var C=i(g);u=s(C,"Module"),C.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,d,p),e(d,v),e(d,g),e(g,u),e(d,b)},d(l){l&&o(d)}}}function ri(x){let d,v,g,u,b;return u=new Vt({props:{code:`from transformers import AutoTokenizer, AutoModelForQuestionAnswering
from datasets import load_dataset

tokenizer = AutoTokenizer.from_pretrained("SCUT-DLVCLab/lilt-roberta-en-base")
model = AutoModelForQuestionAnswering.from_pretrained("SCUT-DLVCLab/lilt-roberta-en-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
words = example["tokens"]
boxes = example["bboxes"]

encoding = tokenizer(words, boxes=boxes, return_tensors="pt")

outputs = model(**encoding)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = encoding.input_ids[0, answer_start_index : answer_end_index + 1]
predicted_answer = tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;SCUT-DLVCLab/lilt-roberta-en-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = encoding.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = tokenizer.decode(predict_answer_tokens)`}}),{c(){d=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,v),_(l,g,p),y(u,l,p),b=!0},p:yo,i(l){b||(L(u.$$.fragment,l),b=!0)},o(l){k(u.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(g),$(u,l)}}}function ai(x){let d,v,g,u,b,l,p,C,ln,Lo,J,ie,Qt,Fe,dn,Rt,cn,ko,I,pn,Ee,hn,mn,ut,fn,un,$o,gt,gn,xo,_t,Bt,_n,Co,bt,bn,qo,vt,E,vn,Me,wn,Tn,Ae,yn,Ln,Ht,kn,$n,Jt,xn,Cn,zo,je,Fo,U,Gt,qn,zn,D,Fn,wt,En,Mn,Tt,An,jn,yt,Sn,Pn,On,Se,Dn,Pe,Nn,In,Eo,le,Ir,Mo,de,Un,Lt,Wn,Vn,Ao,W,Qn,Oe,Rn,Bn,De,Hn,Jn,jo,G,ce,Xt,Ne,Gn,Kt,Xn,So,N,Ie,Kn,M,Yn,kt,Zn,es,Ue,ts,os,$t,ns,ss,xt,rs,as,is,pe,Po,X,he,Yt,We,ls,Zt,ds,Oo,A,Ve,cs,Qe,ps,Ct,hs,ms,fs,Re,us,Be,gs,_s,bs,j,He,vs,K,ws,qt,Ts,ys,eo,Ls,ks,$s,me,xs,fe,Do,Y,ue,to,Je,Cs,oo,qs,No,q,Ge,zs,no,Fs,Es,Xe,Ms,zt,As,js,Ss,Ke,Ps,Ye,Os,Ds,Ns,S,Ze,Is,Z,Us,Ft,Ws,Vs,so,Qs,Rs,Bs,ge,Hs,_e,Io,ee,be,ro,et,Js,ao,Gs,Uo,z,tt,Xs,io,Ks,Ys,ot,Zs,Et,er,tr,or,nt,nr,st,sr,rr,ar,P,rt,ir,te,lr,Mt,dr,cr,lo,pr,hr,mr,ve,fr,we,Wo,oe,Te,co,at,ur,po,gr,Vo,F,it,_r,ne,br,ho,vr,wr,mo,Tr,yr,Lr,lt,kr,At,$r,xr,Cr,dt,qr,ct,zr,Fr,Er,O,pt,Mr,se,Ar,jt,jr,Sr,fo,Pr,Or,Dr,ye,Nr,Le,Qo;return l=new ft({}),Fe=new ft({}),je=new Vt({props:{code:`from transformers import LiltModel

model = LiltModel.from_pretrained("path_to_your_files")
model.push_to_hub("name_of_repo_on_the_hub")`,highlighted:`from transformers import LiltModel

model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">LiltModel</span>.</span></span>from<span class="hljs-constructor">_pretrained(<span class="hljs-string">&quot;path_to_your_files&quot;</span>)</span>
model.push<span class="hljs-constructor">_to_hub(<span class="hljs-string">&quot;name_of_repo_on_the_hub&quot;</span>)</span>`}}),Ne=new ft({}),Ie=new ae({props:{name:"class transformers.LiltConfig",anchor:"transformers.LiltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"channel_shrink_ratio",val:" = 4"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LiltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LiLT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel">LiltModel</a>.`,name:"vocab_size"},{anchor:"transformers.LiltConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer. Should be a multiple of 24.`,name:"hidden_size"},{anchor:"transformers.LiltConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LiltConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LiltConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LiltConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LiltConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LiltConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LiltConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LiltConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel">LiltModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LiltConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LiltConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LiltConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.LiltConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.LiltConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.LiltConfig.channel_shrink_ratio",description:`<strong>channel_shrink_ratio</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The shrink ratio compared to the <code>hidden_size</code> for the channel dimension of the layout embeddings.`,name:"channel_shrink_ratio"},{anchor:"transformers.LiltConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/configuration_lilt.py#L30"}}),pe=new To({props:{anchor:"transformers.LiltConfig.example",$$slots:{default:[Ka]},$$scope:{ctx:x}}}),We=new ft({}),Ve=new ae({props:{name:"class transformers.LiltModel",anchor:"transformers.LiltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LiltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L699"}}),He=new ae({props:{name:"forward",anchor:"transformers.LiltModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"bbox",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LiltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LiltModel.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LiltModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LiltModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LiltModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LiltModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LiltModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LiltModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LiltModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LiltModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L729",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig"
>LiltConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new an({props:{$$slots:{default:[Ya]},$$scope:{ctx:x}}}),fe=new To({props:{anchor:"transformers.LiltModel.forward.example",$$slots:{default:[Za]},$$scope:{ctx:x}}}),Je=new ft({}),Ge=new ae({props:{name:"class transformers.LiltForSequenceClassification",anchor:"transformers.LiltForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LiltForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L849"}}),Ze=new ae({props:{name:"forward",anchor:"transformers.LiltForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LiltForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LiltForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LiltForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LiltForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LiltForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LiltForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LiltForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LiltForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LiltForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LiltForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LiltForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L864",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig"
>LiltConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ge=new an({props:{$$slots:{default:[ei]},$$scope:{ctx:x}}}),_e=new To({props:{anchor:"transformers.LiltForSequenceClassification.forward.example",$$slots:{default:[ti]},$$scope:{ctx:x}}}),et=new ft({}),tt=new ae({props:{name:"class transformers.LiltForTokenClassification",anchor:"transformers.LiltForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LiltForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L967"}}),rt=new ae({props:{name:"forward",anchor:"transformers.LiltForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LiltForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LiltForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LiltForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LiltForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LiltForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LiltForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LiltForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LiltForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LiltForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LiltForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LiltForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L986",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig"
>LiltConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new an({props:{$$slots:{default:[oi]},$$scope:{ctx:x}}}),we=new To({props:{anchor:"transformers.LiltForTokenClassification.forward.example",$$slots:{default:[ni]},$$scope:{ctx:x}}}),at=new ft({}),it=new ae({props:{name:"class transformers.LiltForQuestionAnswering",anchor:"transformers.LiltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LiltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L1094"}}),pt=new ae({props:{name:"forward",anchor:"transformers.LiltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LiltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LiltForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LiltForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LiltForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LiltForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LiltForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LiltForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LiltForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LiltForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LiltForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LiltForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LiltForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L1109",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig"
>LiltConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new an({props:{$$slots:{default:[si]},$$scope:{ctx:x}}}),Le=new To({props:{anchor:"transformers.LiltForQuestionAnswering.forward.example",$$slots:{default:[ri]},$$scope:{ctx:x}}}),{c(){d=r("meta"),v=m(),g=r("h1"),u=r("a"),b=r("span"),w(l.$$.fragment),p=m(),C=r("span"),ln=n("LiLT"),Lo=m(),J=r("h2"),ie=r("a"),Qt=r("span"),w(Fe.$$.fragment),dn=m(),Rt=r("span"),cn=n("Overview"),ko=m(),I=r("p"),pn=n("The LiLT model was proposed in "),Ee=r("a"),hn=n("LiLT: A Simple yet Effective Language-Independent Layout Transformer for Structured Document Understanding"),mn=n(` by Jiapeng Wang, Lianwen Jin, Kai Ding.
LiLT allows to combine any pre-trained RoBERTa text encoder with a lightweight Layout Transformer, to enable `),ut=r("a"),fn=n("LayoutLM"),un=n(`-like document understanding for many
languages.`),$o=m(),gt=r("p"),gn=n("The abstract from the paper is the following:"),xo=m(),_t=r("p"),Bt=r("em"),_n=n("Structured document understanding has attracted considerable attention and made significant progress recently, owing to its crucial role in intelligent document processing. However, most existing related models can only deal with the document data of specific language(s) (typically English) included in the pre-training collection, which is extremely limited. To address this issue, we propose a simple yet effective Language-independent Layout Transformer (LiLT) for structured document understanding. LiLT can be pre-trained on the structured documents of a single language and then directly fine-tuned on other languages with the corresponding off-the-shelf monolingual/multilingual pre-trained textual models. Experimental results on eight languages have shown that LiLT can achieve competitive or even superior performance on diverse widely-used downstream benchmarks, which enables language-independent benefit from the pre-training of document layout structure."),Co=m(),bt=r("p"),bn=n("Tips:"),qo=m(),vt=r("ul"),E=r("li"),vn=n("To combine the Language-Independent Layout Transformer with a new RoBERTa checkpoint from the "),Me=r("a"),wn=n("hub"),Tn=n(", refer to "),Ae=r("a"),yn=n("this guide"),Ln=n(`.
The script will result in `),Ht=r("code"),kn=n("config.json"),$n=n(" and "),Jt=r("code"),xn=n("pytorch_model.bin"),Cn=n(" files being stored locally. After doing this, one can do the following (assuming you\u2019re logged in with your HuggingFace account):"),zo=m(),w(je.$$.fragment),Fo=m(),U=r("ul"),Gt=r("li"),qn=n("When preparing data for the model, make sure to use the token vocabulary that corresponds to the RoBERTa checkpoint you combined with the Layout Transformer."),zn=m(),D=r("li"),Fn=n("As (lilt-roberta-en-base)[https://huggingface.co/SCUT-DLVCLab/lilt-roberta-en-base] uses the same vocabulary as "),wt=r("a"),En=n("LayoutLMv3"),Mn=n(", one can use "),Tt=r("a"),An=n("LayoutLMv3TokenizerFast"),jn=n(` to prepare data for the model.
The same is true for (lilt-roberta-en-base)[https://huggingface.co/SCUT-DLVCLab/lilt-infoxlm-base]: one can use `),yt=r("a"),Sn=n("LayoutXLMTokenizerFast"),Pn=n(" for that model."),On=m(),Se=r("li"),Dn=n("Demo notebooks for LiLT can be found "),Pe=r("a"),Nn=n("here"),In=n("."),Eo=m(),le=r("img"),Mo=m(),de=r("small"),Un=n("LiLT architecture. Taken from the "),Lt=r("a"),Wn=n("original paper"),Vn=n("."),Ao=m(),W=r("p"),Qn=n("This model was contributed by "),Oe=r("a"),Rn=n("nielsr"),Bn=n(`.
The original code can be found `),De=r("a"),Hn=n("here"),Jn=n("."),jo=m(),G=r("h2"),ce=r("a"),Xt=r("span"),w(Ne.$$.fragment),Gn=m(),Kt=r("span"),Xn=n("LiltConfig"),So=m(),N=r("div"),w(Ie.$$.fragment),Kn=m(),M=r("p"),Yn=n("This is the configuration class to store the configuration of a "),kt=r("a"),Zn=n("LiltModel"),es=n(`. It is used to instantiate a LiLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LiLT
`),Ue=r("a"),ts=n("SCUT-DLVCLab/lilt-roberta-en-base"),os=n(` architecture.
Configuration objects inherit from `),$t=r("a"),ns=n("PretrainedConfig"),ss=n(` and can be used to control the model outputs. Read the
documentation from `),xt=r("a"),rs=n("PretrainedConfig"),as=n(" for more information."),is=m(),w(pe.$$.fragment),Po=m(),X=r("h2"),he=r("a"),Yt=r("span"),w(We.$$.fragment),ls=m(),Zt=r("span"),ds=n("LiltModel"),Oo=m(),A=r("div"),w(Ve.$$.fragment),cs=m(),Qe=r("p"),ps=n(`The bare LiLT Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ct=r("a"),hs=n("PreTrainedModel"),ms=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fs=m(),Re=r("p"),us=n("This model is also a PyTorch "),Be=r("a"),gs=n("torch.nn.Module"),_s=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bs=m(),j=r("div"),w(He.$$.fragment),vs=m(),K=r("p"),ws=n("The "),qt=r("a"),Ts=n("LiltModel"),ys=n(" forward method, overrides the "),eo=r("code"),Ls=n("__call__"),ks=n(" special method."),$s=m(),w(me.$$.fragment),xs=m(),w(fe.$$.fragment),Do=m(),Y=r("h2"),ue=r("a"),to=r("span"),w(Je.$$.fragment),Cs=m(),oo=r("span"),qs=n("LiltForSequenceClassification"),No=m(),q=r("div"),w(Ge.$$.fragment),zs=m(),no=r("p"),Fs=n(`LiLT Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Es=m(),Xe=r("p"),Ms=n("This model inherits from "),zt=r("a"),As=n("PreTrainedModel"),js=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ss=m(),Ke=r("p"),Ps=n("This model is also a PyTorch "),Ye=r("a"),Os=n("torch.nn.Module"),Ds=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ns=m(),S=r("div"),w(Ze.$$.fragment),Is=m(),Z=r("p"),Us=n("The "),Ft=r("a"),Ws=n("LiltForSequenceClassification"),Vs=n(" forward method, overrides the "),so=r("code"),Qs=n("__call__"),Rs=n(" special method."),Bs=m(),w(ge.$$.fragment),Hs=m(),w(_e.$$.fragment),Io=m(),ee=r("h2"),be=r("a"),ro=r("span"),w(et.$$.fragment),Js=m(),ao=r("span"),Gs=n("LiltForTokenClassification"),Uo=m(),z=r("div"),w(tt.$$.fragment),Xs=m(),io=r("p"),Ks=n(`Lilt Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ys=m(),ot=r("p"),Zs=n("This model inherits from "),Et=r("a"),er=n("PreTrainedModel"),tr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),or=m(),nt=r("p"),nr=n("This model is also a PyTorch "),st=r("a"),sr=n("torch.nn.Module"),rr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ar=m(),P=r("div"),w(rt.$$.fragment),ir=m(),te=r("p"),lr=n("The "),Mt=r("a"),dr=n("LiltForTokenClassification"),cr=n(" forward method, overrides the "),lo=r("code"),pr=n("__call__"),hr=n(" special method."),mr=m(),w(ve.$$.fragment),fr=m(),w(we.$$.fragment),Wo=m(),oe=r("h2"),Te=r("a"),co=r("span"),w(at.$$.fragment),ur=m(),po=r("span"),gr=n("LiltForQuestionAnswering"),Vo=m(),F=r("div"),w(it.$$.fragment),_r=m(),ne=r("p"),br=n(`Lilt Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ho=r("code"),vr=n("span start logits"),wr=n(" and "),mo=r("code"),Tr=n("span end logits"),yr=n(")."),Lr=m(),lt=r("p"),kr=n("This model inherits from "),At=r("a"),$r=n("PreTrainedModel"),xr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cr=m(),dt=r("p"),qr=n("This model is also a PyTorch "),ct=r("a"),zr=n("torch.nn.Module"),Fr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Er=m(),O=r("div"),w(pt.$$.fragment),Mr=m(),se=r("p"),Ar=n("The "),jt=r("a"),jr=n("LiltForQuestionAnswering"),Sr=n(" forward method, overrides the "),fo=r("code"),Pr=n("__call__"),Or=n(" special method."),Dr=m(),w(ye.$$.fragment),Nr=m(),w(Le.$$.fragment),this.h()},l(t){const h=Ja('[data-svelte="svelte-1phssyn"]',document.head);d=a(h,"META",{name:!0,content:!0}),h.forEach(o),v=f(t),g=a(t,"H1",{class:!0});var ht=i(g);u=a(ht,"A",{id:!0,class:!0,href:!0});var uo=i(u);b=a(uo,"SPAN",{});var go=i(b);T(l.$$.fragment,go),go.forEach(o),uo.forEach(o),p=f(ht),C=a(ht,"SPAN",{});var _o=i(C);ln=s(_o,"LiLT"),_o.forEach(o),ht.forEach(o),Lo=f(t),J=a(t,"H2",{class:!0});var mt=i(J);ie=a(mt,"A",{id:!0,class:!0,href:!0});var bo=i(ie);Qt=a(bo,"SPAN",{});var vo=i(Qt);T(Fe.$$.fragment,vo),vo.forEach(o),bo.forEach(o),dn=f(mt),Rt=a(mt,"SPAN",{});var wo=i(Rt);cn=s(wo,"Overview"),wo.forEach(o),mt.forEach(o),ko=f(t),I=a(t,"P",{});var re=i(I);pn=s(re,"The LiLT model was proposed in "),Ee=a(re,"A",{href:!0,rel:!0});var Ur=i(Ee);hn=s(Ur,"LiLT: A Simple yet Effective Language-Independent Layout Transformer for Structured Document Understanding"),Ur.forEach(o),mn=s(re,` by Jiapeng Wang, Lianwen Jin, Kai Ding.
LiLT allows to combine any pre-trained RoBERTa text encoder with a lightweight Layout Transformer, to enable `),ut=a(re,"A",{href:!0});var Wr=i(ut);fn=s(Wr,"LayoutLM"),Wr.forEach(o),un=s(re,`-like document understanding for many
languages.`),re.forEach(o),$o=f(t),gt=a(t,"P",{});var Vr=i(gt);gn=s(Vr,"The abstract from the paper is the following:"),Vr.forEach(o),xo=f(t),_t=a(t,"P",{});var Qr=i(_t);Bt=a(Qr,"EM",{});var Rr=i(Bt);_n=s(Rr,"Structured document understanding has attracted considerable attention and made significant progress recently, owing to its crucial role in intelligent document processing. However, most existing related models can only deal with the document data of specific language(s) (typically English) included in the pre-training collection, which is extremely limited. To address this issue, we propose a simple yet effective Language-independent Layout Transformer (LiLT) for structured document understanding. LiLT can be pre-trained on the structured documents of a single language and then directly fine-tuned on other languages with the corresponding off-the-shelf monolingual/multilingual pre-trained textual models. Experimental results on eight languages have shown that LiLT can achieve competitive or even superior performance on diverse widely-used downstream benchmarks, which enables language-independent benefit from the pre-training of document layout structure."),Rr.forEach(o),Qr.forEach(o),Co=f(t),bt=a(t,"P",{});var Br=i(bt);bn=s(Br,"Tips:"),Br.forEach(o),qo=f(t),vt=a(t,"UL",{});var Hr=i(vt);E=a(Hr,"LI",{});var V=i(E);vn=s(V,"To combine the Language-Independent Layout Transformer with a new RoBERTa checkpoint from the "),Me=a(V,"A",{href:!0,rel:!0});var Jr=i(Me);wn=s(Jr,"hub"),Jr.forEach(o),Tn=s(V,", refer to "),Ae=a(V,"A",{href:!0,rel:!0});var Gr=i(Ae);yn=s(Gr,"this guide"),Gr.forEach(o),Ln=s(V,`.
The script will result in `),Ht=a(V,"CODE",{});var Xr=i(Ht);kn=s(Xr,"config.json"),Xr.forEach(o),$n=s(V," and "),Jt=a(V,"CODE",{});var Kr=i(Jt);xn=s(Kr,"pytorch_model.bin"),Kr.forEach(o),Cn=s(V," files being stored locally. After doing this, one can do the following (assuming you\u2019re logged in with your HuggingFace account):"),V.forEach(o),Hr.forEach(o),zo=f(t),T(je.$$.fragment,t),Fo=f(t),U=a(t,"UL",{});var St=i(U);Gt=a(St,"LI",{});var Yr=i(Gt);qn=s(Yr,"When preparing data for the model, make sure to use the token vocabulary that corresponds to the RoBERTa checkpoint you combined with the Layout Transformer."),Yr.forEach(o),zn=f(St),D=a(St,"LI",{});var ke=i(D);Fn=s(ke,"As (lilt-roberta-en-base)[https://huggingface.co/SCUT-DLVCLab/lilt-roberta-en-base] uses the same vocabulary as "),wt=a(ke,"A",{href:!0});var Zr=i(wt);En=s(Zr,"LayoutLMv3"),Zr.forEach(o),Mn=s(ke,", one can use "),Tt=a(ke,"A",{href:!0});var ea=i(Tt);An=s(ea,"LayoutLMv3TokenizerFast"),ea.forEach(o),jn=s(ke,` to prepare data for the model.
The same is true for (lilt-roberta-en-base)[https://huggingface.co/SCUT-DLVCLab/lilt-infoxlm-base]: one can use `),yt=a(ke,"A",{href:!0});var ta=i(yt);Sn=s(ta,"LayoutXLMTokenizerFast"),ta.forEach(o),Pn=s(ke," for that model."),ke.forEach(o),On=f(St),Se=a(St,"LI",{});var Ro=i(Se);Dn=s(Ro,"Demo notebooks for LiLT can be found "),Pe=a(Ro,"A",{href:!0,rel:!0});var oa=i(Pe);Nn=s(oa,"here"),oa.forEach(o),In=s(Ro,"."),Ro.forEach(o),St.forEach(o),Eo=f(t),le=a(t,"IMG",{src:!0,alt:!0,width:!0}),Mo=f(t),de=a(t,"SMALL",{});var Bo=i(de);Un=s(Bo,"LiLT architecture. Taken from the "),Lt=a(Bo,"A",{href:!0});var na=i(Lt);Wn=s(na,"original paper"),na.forEach(o),Vn=s(Bo,"."),Bo.forEach(o),Ao=f(t),W=a(t,"P",{});var Pt=i(W);Qn=s(Pt,"This model was contributed by "),Oe=a(Pt,"A",{href:!0,rel:!0});var sa=i(Oe);Rn=s(sa,"nielsr"),sa.forEach(o),Bn=s(Pt,`.
The original code can be found `),De=a(Pt,"A",{href:!0,rel:!0});var ra=i(De);Hn=s(ra,"here"),ra.forEach(o),Jn=s(Pt,"."),Pt.forEach(o),jo=f(t),G=a(t,"H2",{class:!0});var Ho=i(G);ce=a(Ho,"A",{id:!0,class:!0,href:!0});var aa=i(ce);Xt=a(aa,"SPAN",{});var ia=i(Xt);T(Ne.$$.fragment,ia),ia.forEach(o),aa.forEach(o),Gn=f(Ho),Kt=a(Ho,"SPAN",{});var la=i(Kt);Xn=s(la,"LiltConfig"),la.forEach(o),Ho.forEach(o),So=f(t),N=a(t,"DIV",{class:!0});var Ot=i(N);T(Ie.$$.fragment,Ot),Kn=f(Ot),M=a(Ot,"P",{});var Q=i(M);Yn=s(Q,"This is the configuration class to store the configuration of a "),kt=a(Q,"A",{href:!0});var da=i(kt);Zn=s(da,"LiltModel"),da.forEach(o),es=s(Q,`. It is used to instantiate a LiLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LiLT
`),Ue=a(Q,"A",{href:!0,rel:!0});var ca=i(Ue);ts=s(ca,"SCUT-DLVCLab/lilt-roberta-en-base"),ca.forEach(o),os=s(Q,` architecture.
Configuration objects inherit from `),$t=a(Q,"A",{href:!0});var pa=i($t);ns=s(pa,"PretrainedConfig"),pa.forEach(o),ss=s(Q,` and can be used to control the model outputs. Read the
documentation from `),xt=a(Q,"A",{href:!0});var ha=i(xt);rs=s(ha,"PretrainedConfig"),ha.forEach(o),as=s(Q," for more information."),Q.forEach(o),is=f(Ot),T(pe.$$.fragment,Ot),Ot.forEach(o),Po=f(t),X=a(t,"H2",{class:!0});var Jo=i(X);he=a(Jo,"A",{id:!0,class:!0,href:!0});var ma=i(he);Yt=a(ma,"SPAN",{});var fa=i(Yt);T(We.$$.fragment,fa),fa.forEach(o),ma.forEach(o),ls=f(Jo),Zt=a(Jo,"SPAN",{});var ua=i(Zt);ds=s(ua,"LiltModel"),ua.forEach(o),Jo.forEach(o),Oo=f(t),A=a(t,"DIV",{class:!0});var $e=i(A);T(Ve.$$.fragment,$e),cs=f($e),Qe=a($e,"P",{});var Go=i(Qe);ps=s(Go,`The bare LiLT Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ct=a(Go,"A",{href:!0});var ga=i(Ct);hs=s(ga,"PreTrainedModel"),ga.forEach(o),ms=s(Go,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Go.forEach(o),fs=f($e),Re=a($e,"P",{});var Xo=i(Re);us=s(Xo,"This model is also a PyTorch "),Be=a(Xo,"A",{href:!0,rel:!0});var _a=i(Be);gs=s(_a,"torch.nn.Module"),_a.forEach(o),_s=s(Xo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xo.forEach(o),bs=f($e),j=a($e,"DIV",{class:!0});var xe=i(j);T(He.$$.fragment,xe),vs=f(xe),K=a(xe,"P",{});var Dt=i(K);ws=s(Dt,"The "),qt=a(Dt,"A",{href:!0});var ba=i(qt);Ts=s(ba,"LiltModel"),ba.forEach(o),ys=s(Dt," forward method, overrides the "),eo=a(Dt,"CODE",{});var va=i(eo);Ls=s(va,"__call__"),va.forEach(o),ks=s(Dt," special method."),Dt.forEach(o),$s=f(xe),T(me.$$.fragment,xe),xs=f(xe),T(fe.$$.fragment,xe),xe.forEach(o),$e.forEach(o),Do=f(t),Y=a(t,"H2",{class:!0});var Ko=i(Y);ue=a(Ko,"A",{id:!0,class:!0,href:!0});var wa=i(ue);to=a(wa,"SPAN",{});var Ta=i(to);T(Je.$$.fragment,Ta),Ta.forEach(o),wa.forEach(o),Cs=f(Ko),oo=a(Ko,"SPAN",{});var ya=i(oo);qs=s(ya,"LiltForSequenceClassification"),ya.forEach(o),Ko.forEach(o),No=f(t),q=a(t,"DIV",{class:!0});var R=i(q);T(Ge.$$.fragment,R),zs=f(R),no=a(R,"P",{});var La=i(no);Fs=s(La,`LiLT Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),La.forEach(o),Es=f(R),Xe=a(R,"P",{});var Yo=i(Xe);Ms=s(Yo,"This model inherits from "),zt=a(Yo,"A",{href:!0});var ka=i(zt);As=s(ka,"PreTrainedModel"),ka.forEach(o),js=s(Yo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yo.forEach(o),Ss=f(R),Ke=a(R,"P",{});var Zo=i(Ke);Ps=s(Zo,"This model is also a PyTorch "),Ye=a(Zo,"A",{href:!0,rel:!0});var $a=i(Ye);Os=s($a,"torch.nn.Module"),$a.forEach(o),Ds=s(Zo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zo.forEach(o),Ns=f(R),S=a(R,"DIV",{class:!0});var Ce=i(S);T(Ze.$$.fragment,Ce),Is=f(Ce),Z=a(Ce,"P",{});var Nt=i(Z);Us=s(Nt,"The "),Ft=a(Nt,"A",{href:!0});var xa=i(Ft);Ws=s(xa,"LiltForSequenceClassification"),xa.forEach(o),Vs=s(Nt," forward method, overrides the "),so=a(Nt,"CODE",{});var Ca=i(so);Qs=s(Ca,"__call__"),Ca.forEach(o),Rs=s(Nt," special method."),Nt.forEach(o),Bs=f(Ce),T(ge.$$.fragment,Ce),Hs=f(Ce),T(_e.$$.fragment,Ce),Ce.forEach(o),R.forEach(o),Io=f(t),ee=a(t,"H2",{class:!0});var en=i(ee);be=a(en,"A",{id:!0,class:!0,href:!0});var qa=i(be);ro=a(qa,"SPAN",{});var za=i(ro);T(et.$$.fragment,za),za.forEach(o),qa.forEach(o),Js=f(en),ao=a(en,"SPAN",{});var Fa=i(ao);Gs=s(Fa,"LiltForTokenClassification"),Fa.forEach(o),en.forEach(o),Uo=f(t),z=a(t,"DIV",{class:!0});var B=i(z);T(tt.$$.fragment,B),Xs=f(B),io=a(B,"P",{});var Ea=i(io);Ks=s(Ea,`Lilt Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ea.forEach(o),Ys=f(B),ot=a(B,"P",{});var tn=i(ot);Zs=s(tn,"This model inherits from "),Et=a(tn,"A",{href:!0});var Ma=i(Et);er=s(Ma,"PreTrainedModel"),Ma.forEach(o),tr=s(tn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tn.forEach(o),or=f(B),nt=a(B,"P",{});var on=i(nt);nr=s(on,"This model is also a PyTorch "),st=a(on,"A",{href:!0,rel:!0});var Aa=i(st);sr=s(Aa,"torch.nn.Module"),Aa.forEach(o),rr=s(on,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),on.forEach(o),ar=f(B),P=a(B,"DIV",{class:!0});var qe=i(P);T(rt.$$.fragment,qe),ir=f(qe),te=a(qe,"P",{});var It=i(te);lr=s(It,"The "),Mt=a(It,"A",{href:!0});var ja=i(Mt);dr=s(ja,"LiltForTokenClassification"),ja.forEach(o),cr=s(It," forward method, overrides the "),lo=a(It,"CODE",{});var Sa=i(lo);pr=s(Sa,"__call__"),Sa.forEach(o),hr=s(It," special method."),It.forEach(o),mr=f(qe),T(ve.$$.fragment,qe),fr=f(qe),T(we.$$.fragment,qe),qe.forEach(o),B.forEach(o),Wo=f(t),oe=a(t,"H2",{class:!0});var nn=i(oe);Te=a(nn,"A",{id:!0,class:!0,href:!0});var Pa=i(Te);co=a(Pa,"SPAN",{});var Oa=i(co);T(at.$$.fragment,Oa),Oa.forEach(o),Pa.forEach(o),ur=f(nn),po=a(nn,"SPAN",{});var Da=i(po);gr=s(Da,"LiltForQuestionAnswering"),Da.forEach(o),nn.forEach(o),Vo=f(t),F=a(t,"DIV",{class:!0});var H=i(F);T(it.$$.fragment,H),_r=f(H),ne=a(H,"P",{});var Ut=i(ne);br=s(Ut,`Lilt Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ho=a(Ut,"CODE",{});var Na=i(ho);vr=s(Na,"span start logits"),Na.forEach(o),wr=s(Ut," and "),mo=a(Ut,"CODE",{});var Ia=i(mo);Tr=s(Ia,"span end logits"),Ia.forEach(o),yr=s(Ut,")."),Ut.forEach(o),Lr=f(H),lt=a(H,"P",{});var sn=i(lt);kr=s(sn,"This model inherits from "),At=a(sn,"A",{href:!0});var Ua=i(At);$r=s(Ua,"PreTrainedModel"),Ua.forEach(o),xr=s(sn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sn.forEach(o),Cr=f(H),dt=a(H,"P",{});var rn=i(dt);qr=s(rn,"This model is also a PyTorch "),ct=a(rn,"A",{href:!0,rel:!0});var Wa=i(ct);zr=s(Wa,"torch.nn.Module"),Wa.forEach(o),Fr=s(rn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rn.forEach(o),Er=f(H),O=a(H,"DIV",{class:!0});var ze=i(O);T(pt.$$.fragment,ze),Mr=f(ze),se=a(ze,"P",{});var Wt=i(se);Ar=s(Wt,"The "),jt=a(Wt,"A",{href:!0});var Va=i(jt);jr=s(Va,"LiltForQuestionAnswering"),Va.forEach(o),Sr=s(Wt," forward method, overrides the "),fo=a(Wt,"CODE",{});var Qa=i(fo);Pr=s(Qa,"__call__"),Qa.forEach(o),Or=s(Wt," special method."),Wt.forEach(o),Dr=f(ze),T(ye.$$.fragment,ze),Nr=f(ze),T(Le.$$.fragment,ze),ze.forEach(o),H.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(ii)),c(u,"id","lilt"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#lilt"),c(g,"class","relative group"),c(ie,"id","overview"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#overview"),c(J,"class","relative group"),c(Ee,"href","https://arxiv.org/abs/2202.13669"),c(Ee,"rel","nofollow"),c(ut,"href","layoutlm"),c(Me,"href","https://huggingface.co/models?search=roberta"),c(Me,"rel","nofollow"),c(Ae,"href","https://github.com/jpWang/LiLT#or-generate-your-own-checkpoint-optional"),c(Ae,"rel","nofollow"),c(wt,"href","layoutlmv3"),c(Tt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),c(yt,"href","/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast"),c(Pe,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LiLT"),c(Pe,"rel","nofollow"),Ga(le.src,Ir="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/lilt_architecture.jpg")||c(le,"src",Ir),c(le,"alt","drawing"),c(le,"width","600"),c(Lt,"href","https://arxiv.org/abs/2202.13669"),c(Oe,"href","https://huggingface.co/nielsr"),c(Oe,"rel","nofollow"),c(De,"href","https://github.com/jpwang/lilt"),c(De,"rel","nofollow"),c(ce,"id","transformers.LiltConfig"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#transformers.LiltConfig"),c(G,"class","relative group"),c(kt,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel"),c(Ue,"href","https://huggingface.co/SCUT-DLVCLab/lilt-roberta-en-base"),c(Ue,"rel","nofollow"),c($t,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(xt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"id","transformers.LiltModel"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#transformers.LiltModel"),c(X,"class","relative group"),c(Ct,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Be,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Be,"rel","nofollow"),c(qt,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ue,"id","transformers.LiltForSequenceClassification"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#transformers.LiltForSequenceClassification"),c(Y,"class","relative group"),c(zt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ye,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ye,"rel","nofollow"),c(Ft,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltForSequenceClassification"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(be,"id","transformers.LiltForTokenClassification"),c(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(be,"href","#transformers.LiltForTokenClassification"),c(ee,"class","relative group"),c(Et,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(st,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(st,"rel","nofollow"),c(Mt,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltForTokenClassification"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.LiltForQuestionAnswering"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.LiltForQuestionAnswering"),c(oe,"class","relative group"),c(At,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(ct,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ct,"rel","nofollow"),c(jt,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltForQuestionAnswering"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,d),_(t,v,h),_(t,g,h),e(g,u),e(u,b),y(l,b,null),e(g,p),e(g,C),e(C,ln),_(t,Lo,h),_(t,J,h),e(J,ie),e(ie,Qt),y(Fe,Qt,null),e(J,dn),e(J,Rt),e(Rt,cn),_(t,ko,h),_(t,I,h),e(I,pn),e(I,Ee),e(Ee,hn),e(I,mn),e(I,ut),e(ut,fn),e(I,un),_(t,$o,h),_(t,gt,h),e(gt,gn),_(t,xo,h),_(t,_t,h),e(_t,Bt),e(Bt,_n),_(t,Co,h),_(t,bt,h),e(bt,bn),_(t,qo,h),_(t,vt,h),e(vt,E),e(E,vn),e(E,Me),e(Me,wn),e(E,Tn),e(E,Ae),e(Ae,yn),e(E,Ln),e(E,Ht),e(Ht,kn),e(E,$n),e(E,Jt),e(Jt,xn),e(E,Cn),_(t,zo,h),y(je,t,h),_(t,Fo,h),_(t,U,h),e(U,Gt),e(Gt,qn),e(U,zn),e(U,D),e(D,Fn),e(D,wt),e(wt,En),e(D,Mn),e(D,Tt),e(Tt,An),e(D,jn),e(D,yt),e(yt,Sn),e(D,Pn),e(U,On),e(U,Se),e(Se,Dn),e(Se,Pe),e(Pe,Nn),e(Se,In),_(t,Eo,h),_(t,le,h),_(t,Mo,h),_(t,de,h),e(de,Un),e(de,Lt),e(Lt,Wn),e(de,Vn),_(t,Ao,h),_(t,W,h),e(W,Qn),e(W,Oe),e(Oe,Rn),e(W,Bn),e(W,De),e(De,Hn),e(W,Jn),_(t,jo,h),_(t,G,h),e(G,ce),e(ce,Xt),y(Ne,Xt,null),e(G,Gn),e(G,Kt),e(Kt,Xn),_(t,So,h),_(t,N,h),y(Ie,N,null),e(N,Kn),e(N,M),e(M,Yn),e(M,kt),e(kt,Zn),e(M,es),e(M,Ue),e(Ue,ts),e(M,os),e(M,$t),e($t,ns),e(M,ss),e(M,xt),e(xt,rs),e(M,as),e(N,is),y(pe,N,null),_(t,Po,h),_(t,X,h),e(X,he),e(he,Yt),y(We,Yt,null),e(X,ls),e(X,Zt),e(Zt,ds),_(t,Oo,h),_(t,A,h),y(Ve,A,null),e(A,cs),e(A,Qe),e(Qe,ps),e(Qe,Ct),e(Ct,hs),e(Qe,ms),e(A,fs),e(A,Re),e(Re,us),e(Re,Be),e(Be,gs),e(Re,_s),e(A,bs),e(A,j),y(He,j,null),e(j,vs),e(j,K),e(K,ws),e(K,qt),e(qt,Ts),e(K,ys),e(K,eo),e(eo,Ls),e(K,ks),e(j,$s),y(me,j,null),e(j,xs),y(fe,j,null),_(t,Do,h),_(t,Y,h),e(Y,ue),e(ue,to),y(Je,to,null),e(Y,Cs),e(Y,oo),e(oo,qs),_(t,No,h),_(t,q,h),y(Ge,q,null),e(q,zs),e(q,no),e(no,Fs),e(q,Es),e(q,Xe),e(Xe,Ms),e(Xe,zt),e(zt,As),e(Xe,js),e(q,Ss),e(q,Ke),e(Ke,Ps),e(Ke,Ye),e(Ye,Os),e(Ke,Ds),e(q,Ns),e(q,S),y(Ze,S,null),e(S,Is),e(S,Z),e(Z,Us),e(Z,Ft),e(Ft,Ws),e(Z,Vs),e(Z,so),e(so,Qs),e(Z,Rs),e(S,Bs),y(ge,S,null),e(S,Hs),y(_e,S,null),_(t,Io,h),_(t,ee,h),e(ee,be),e(be,ro),y(et,ro,null),e(ee,Js),e(ee,ao),e(ao,Gs),_(t,Uo,h),_(t,z,h),y(tt,z,null),e(z,Xs),e(z,io),e(io,Ks),e(z,Ys),e(z,ot),e(ot,Zs),e(ot,Et),e(Et,er),e(ot,tr),e(z,or),e(z,nt),e(nt,nr),e(nt,st),e(st,sr),e(nt,rr),e(z,ar),e(z,P),y(rt,P,null),e(P,ir),e(P,te),e(te,lr),e(te,Mt),e(Mt,dr),e(te,cr),e(te,lo),e(lo,pr),e(te,hr),e(P,mr),y(ve,P,null),e(P,fr),y(we,P,null),_(t,Wo,h),_(t,oe,h),e(oe,Te),e(Te,co),y(at,co,null),e(oe,ur),e(oe,po),e(po,gr),_(t,Vo,h),_(t,F,h),y(it,F,null),e(F,_r),e(F,ne),e(ne,br),e(ne,ho),e(ho,vr),e(ne,wr),e(ne,mo),e(mo,Tr),e(ne,yr),e(F,Lr),e(F,lt),e(lt,kr),e(lt,At),e(At,$r),e(lt,xr),e(F,Cr),e(F,dt),e(dt,qr),e(dt,ct),e(ct,zr),e(dt,Fr),e(F,Er),e(F,O),y(pt,O,null),e(O,Mr),e(O,se),e(se,Ar),e(se,jt),e(jt,jr),e(se,Sr),e(se,fo),e(fo,Pr),e(se,Or),e(O,Dr),y(ye,O,null),e(O,Nr),y(Le,O,null),Qo=!0},p(t,[h]){const ht={};h&2&&(ht.$$scope={dirty:h,ctx:t}),pe.$set(ht);const uo={};h&2&&(uo.$$scope={dirty:h,ctx:t}),me.$set(uo);const go={};h&2&&(go.$$scope={dirty:h,ctx:t}),fe.$set(go);const _o={};h&2&&(_o.$$scope={dirty:h,ctx:t}),ge.$set(_o);const mt={};h&2&&(mt.$$scope={dirty:h,ctx:t}),_e.$set(mt);const bo={};h&2&&(bo.$$scope={dirty:h,ctx:t}),ve.$set(bo);const vo={};h&2&&(vo.$$scope={dirty:h,ctx:t}),we.$set(vo);const wo={};h&2&&(wo.$$scope={dirty:h,ctx:t}),ye.$set(wo);const re={};h&2&&(re.$$scope={dirty:h,ctx:t}),Le.$set(re)},i(t){Qo||(L(l.$$.fragment,t),L(Fe.$$.fragment,t),L(je.$$.fragment,t),L(Ne.$$.fragment,t),L(Ie.$$.fragment,t),L(pe.$$.fragment,t),L(We.$$.fragment,t),L(Ve.$$.fragment,t),L(He.$$.fragment,t),L(me.$$.fragment,t),L(fe.$$.fragment,t),L(Je.$$.fragment,t),L(Ge.$$.fragment,t),L(Ze.$$.fragment,t),L(ge.$$.fragment,t),L(_e.$$.fragment,t),L(et.$$.fragment,t),L(tt.$$.fragment,t),L(rt.$$.fragment,t),L(ve.$$.fragment,t),L(we.$$.fragment,t),L(at.$$.fragment,t),L(it.$$.fragment,t),L(pt.$$.fragment,t),L(ye.$$.fragment,t),L(Le.$$.fragment,t),Qo=!0)},o(t){k(l.$$.fragment,t),k(Fe.$$.fragment,t),k(je.$$.fragment,t),k(Ne.$$.fragment,t),k(Ie.$$.fragment,t),k(pe.$$.fragment,t),k(We.$$.fragment,t),k(Ve.$$.fragment,t),k(He.$$.fragment,t),k(me.$$.fragment,t),k(fe.$$.fragment,t),k(Je.$$.fragment,t),k(Ge.$$.fragment,t),k(Ze.$$.fragment,t),k(ge.$$.fragment,t),k(_e.$$.fragment,t),k(et.$$.fragment,t),k(tt.$$.fragment,t),k(rt.$$.fragment,t),k(ve.$$.fragment,t),k(we.$$.fragment,t),k(at.$$.fragment,t),k(it.$$.fragment,t),k(pt.$$.fragment,t),k(ye.$$.fragment,t),k(Le.$$.fragment,t),Qo=!1},d(t){o(d),t&&o(v),t&&o(g),$(l),t&&o(Lo),t&&o(J),$(Fe),t&&o(ko),t&&o(I),t&&o($o),t&&o(gt),t&&o(xo),t&&o(_t),t&&o(Co),t&&o(bt),t&&o(qo),t&&o(vt),t&&o(zo),$(je,t),t&&o(Fo),t&&o(U),t&&o(Eo),t&&o(le),t&&o(Mo),t&&o(de),t&&o(Ao),t&&o(W),t&&o(jo),t&&o(G),$(Ne),t&&o(So),t&&o(N),$(Ie),$(pe),t&&o(Po),t&&o(X),$(We),t&&o(Oo),t&&o(A),$(Ve),$(He),$(me),$(fe),t&&o(Do),t&&o(Y),$(Je),t&&o(No),t&&o(q),$(Ge),$(Ze),$(ge),$(_e),t&&o(Io),t&&o(ee),$(et),t&&o(Uo),t&&o(z),$(tt),$(rt),$(ve),$(we),t&&o(Wo),t&&o(oe),$(at),t&&o(Vo),t&&o(F),$(it),$(pt),$(ye),$(Le)}}}const ii={local:"lilt",sections:[{local:"overview",title:"Overview"},{local:"transformers.LiltConfig",title:"LiltConfig"},{local:"transformers.LiltModel",title:"LiltModel"},{local:"transformers.LiltForSequenceClassification",title:"LiltForSequenceClassification"},{local:"transformers.LiltForTokenClassification",title:"LiltForTokenClassification"},{local:"transformers.LiltForQuestionAnswering",title:"LiltForQuestionAnswering"}],title:"LiLT"};function li(x){return Xa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ui extends Ra{constructor(d){super();Ba(this,d,li,ai,Ha,{})}}export{ui as default,ii as metadata};
