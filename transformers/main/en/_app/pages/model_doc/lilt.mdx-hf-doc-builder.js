import{S as Za,i as ei,s as ti,e as r,k as m,w,t as n,M as oi,c as a,d as o,m as f,a as i,x as T,h as s,b as d,N as ni,G as e,g as _,y,q as k,o as L,B as $,v as si,L as Lo}from"../../chunks/vendor-hf-doc-builder.js";import{T as dn}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Rt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as gt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ko}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ri(x){let c,v,g,u,b;return u=new Rt({props:{code:`from transformers import LiltConfig, LiltModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var p=i(c);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,c,p),e(c,v),_(l,g,p),y(u,l,p),b=!0},p:Lo,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){L(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(g),$(u,l)}}}function ai(x){let c,v,g,u,b;return{c(){c=r("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var p=i(c);v=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var C=i(g);u=s(C,"Module"),C.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,c,p),e(c,v),e(c,g),e(g,u),e(c,b)},d(l){l&&o(c)}}}function ii(x){let c,v,g,u,b;return u=new Rt({props:{code:`from transformers import AutoTokenizer, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var p=i(c);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,c,p),e(c,v),_(l,g,p),y(u,l,p),b=!0},p:Lo,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){L(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(g),$(u,l)}}}function li(x){let c,v,g,u,b;return{c(){c=r("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var p=i(c);v=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var C=i(g);u=s(C,"Module"),C.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,c,p),e(c,v),e(c,g),e(g,u),e(c,b)},d(l){l&&o(c)}}}function di(x){let c,v,g,u,b;return u=new Rt({props:{code:`from transformers import AutoTokenizer, AutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class = model.config.id2label[predicted_class_idx]`}}),{c(){c=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var p=i(c);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,c,p),e(c,v),_(l,g,p),y(u,l,p),b=!0},p:Lo,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){L(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(g),$(u,l)}}}function ci(x){let c,v,g,u,b;return{c(){c=r("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var p=i(c);v=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var C=i(g);u=s(C,"Module"),C.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,c,p),e(c,v),e(c,g),e(g,u),e(c,b)},d(l){l&&o(c)}}}function pi(x){let c,v,g,u,b;return u=new Rt({props:{code:`from transformers import AutoTokenizer, AutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_indices = outputs.logits.argmax(-<span class="hljs-number">1</span>)`}}),{c(){c=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var p=i(c);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,c,p),e(c,v),_(l,g,p),y(u,l,p),b=!0},p:Lo,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){L(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(g),$(u,l)}}}function hi(x){let c,v,g,u,b;return{c(){c=r("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var p=i(c);v=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(p,"CODE",{});var C=i(g);u=s(C,"Module"),C.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(l,p){_(l,c,p),e(c,v),e(c,g),e(g,u),e(c,b)},d(l){l&&o(c)}}}function mi(x){let c,v,g,u,b;return u=new Rt({props:{code:`from transformers import AutoTokenizer, AutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = tokenizer.decode(predict_answer_tokens)`}}),{c(){c=r("p"),v=n("Examples:"),g=m(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var p=i(c);v=s(p,"Examples:"),p.forEach(o),g=f(l),T(u.$$.fragment,l)},m(l,p){_(l,c,p),e(c,v),_(l,g,p),y(u,l,p),b=!0},p:Lo,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){L(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(g),$(u,l)}}}function fi(x){let c,v,g,u,b,l,p,C,cn,$o,G,le,Bt,Ee,pn,Ht,hn,xo,U,mn,Fe,fn,un,_t,gn,_n,Co,bt,bn,qo,vt,Jt,vn,zo,wt,wn,Eo,Tt,M,Tn,Me,yn,kn,Ae,Ln,$n,Gt,xn,Cn,Xt,qn,zn,Fo,je,Mo,W,Kt,En,Fn,q,Mn,Se,An,jn,yt,Sn,Pn,kt,On,Dn,Pe,Nn,In,Lt,Un,Wn,Qn,Oe,Vn,De,Rn,Bn,Ao,de,Br,jo,ce,Hn,$t,Jn,Gn,So,Q,Xn,Ne,Kn,Yn,Ie,Zn,es,Po,X,pe,Yt,Ue,ts,Zt,os,Oo,I,We,ns,A,ss,xt,rs,as,Qe,is,ls,Ct,ds,cs,qt,ps,hs,ms,he,Do,K,me,eo,Ve,fs,to,us,No,j,Re,gs,Be,_s,zt,bs,vs,ws,He,Ts,Je,ys,ks,Ls,S,Ge,$s,Y,xs,Et,Cs,qs,oo,zs,Es,Fs,fe,Ms,ue,Io,Z,ge,no,Xe,As,so,js,Uo,z,Ke,Ss,ro,Ps,Os,Ye,Ds,Ft,Ns,Is,Us,Ze,Ws,et,Qs,Vs,Rs,P,tt,Bs,ee,Hs,Mt,Js,Gs,ao,Xs,Ks,Ys,_e,Zs,be,Wo,te,ve,io,ot,er,lo,tr,Qo,E,nt,or,co,nr,sr,st,rr,At,ar,ir,lr,rt,dr,at,cr,pr,hr,O,it,mr,oe,fr,jt,ur,gr,po,_r,br,vr,we,wr,Te,Vo,ne,ye,ho,lt,Tr,mo,yr,Ro,F,dt,kr,se,Lr,fo,$r,xr,uo,Cr,qr,zr,ct,Er,St,Fr,Mr,Ar,pt,jr,ht,Sr,Pr,Or,D,mt,Dr,re,Nr,Pt,Ir,Ur,go,Wr,Qr,Vr,ke,Rr,Le,Bo;return l=new gt({}),Ee=new gt({}),je=new Rt({props:{code:`from transformers import LiltModel

model = LiltModel.from_pretrained("path_to_your_files")
model.push_to_hub("name_of_repo_on_the_hub")`,highlighted:`from transformers import LiltModel

model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">LiltModel</span>.</span></span>from<span class="hljs-constructor">_pretrained(<span class="hljs-string">&quot;path_to_your_files&quot;</span>)</span>
model.push<span class="hljs-constructor">_to_hub(<span class="hljs-string">&quot;name_of_repo_on_the_hub&quot;</span>)</span>`}}),Ue=new gt({}),We=new ie({props:{name:"class transformers.LiltConfig",anchor:"transformers.LiltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"channel_shrink_ratio",val:" = 4"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LiltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/configuration_lilt.py#L30"}}),he=new ko({props:{anchor:"transformers.LiltConfig.example",$$slots:{default:[ri]},$$scope:{ctx:x}}}),Ve=new gt({}),Re=new ie({props:{name:"class transformers.LiltModel",anchor:"transformers.LiltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LiltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L699"}}),Ge=new ie({props:{name:"forward",anchor:"transformers.LiltModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"bbox",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LiltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),fe=new dn({props:{$$slots:{default:[ai]},$$scope:{ctx:x}}}),ue=new ko({props:{anchor:"transformers.LiltModel.forward.example",$$slots:{default:[ii]},$$scope:{ctx:x}}}),Xe=new gt({}),Ke=new ie({props:{name:"class transformers.LiltForSequenceClassification",anchor:"transformers.LiltForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LiltForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L849"}}),tt=new ie({props:{name:"forward",anchor:"transformers.LiltForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LiltForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),_e=new dn({props:{$$slots:{default:[li]},$$scope:{ctx:x}}}),be=new ko({props:{anchor:"transformers.LiltForSequenceClassification.forward.example",$$slots:{default:[di]},$$scope:{ctx:x}}}),ot=new gt({}),nt=new ie({props:{name:"class transformers.LiltForTokenClassification",anchor:"transformers.LiltForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LiltForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L967"}}),it=new ie({props:{name:"forward",anchor:"transformers.LiltForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LiltForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),we=new dn({props:{$$slots:{default:[ci]},$$scope:{ctx:x}}}),Te=new ko({props:{anchor:"transformers.LiltForTokenClassification.forward.example",$$slots:{default:[pi]},$$scope:{ctx:x}}}),lt=new gt({}),dt=new ie({props:{name:"class transformers.LiltForQuestionAnswering",anchor:"transformers.LiltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LiltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/lilt#transformers.LiltConfig">LiltConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/lilt/modeling_lilt.py#L1094"}}),mt=new ie({props:{name:"forward",anchor:"transformers.LiltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LiltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ke=new dn({props:{$$slots:{default:[hi]},$$scope:{ctx:x}}}),Le=new ko({props:{anchor:"transformers.LiltForQuestionAnswering.forward.example",$$slots:{default:[mi]},$$scope:{ctx:x}}}),{c(){c=r("meta"),v=m(),g=r("h1"),u=r("a"),b=r("span"),w(l.$$.fragment),p=m(),C=r("span"),cn=n("LiLT"),$o=m(),G=r("h2"),le=r("a"),Bt=r("span"),w(Ee.$$.fragment),pn=m(),Ht=r("span"),hn=n("Overview"),xo=m(),U=r("p"),mn=n("The LiLT model was proposed in "),Fe=r("a"),fn=n("LiLT: A Simple yet Effective Language-Independent Layout Transformer for Structured Document Understanding"),un=n(` by Jiapeng Wang, Lianwen Jin, Kai Ding.
LiLT allows to combine any pre-trained RoBERTa text encoder with a lightweight Layout Transformer, to enable `),_t=r("a"),gn=n("LayoutLM"),_n=n(`-like document understanding for many
languages.`),Co=m(),bt=r("p"),bn=n("The abstract from the paper is the following:"),qo=m(),vt=r("p"),Jt=r("em"),vn=n("Structured document understanding has attracted considerable attention and made significant progress recently, owing to its crucial role in intelligent document processing. However, most existing related models can only deal with the document data of specific language(s) (typically English) included in the pre-training collection, which is extremely limited. To address this issue, we propose a simple yet effective Language-independent Layout Transformer (LiLT) for structured document understanding. LiLT can be pre-trained on the structured documents of a single language and then directly fine-tuned on other languages with the corresponding off-the-shelf monolingual/multilingual pre-trained textual models. Experimental results on eight languages have shown that LiLT can achieve competitive or even superior performance on diverse widely-used downstream benchmarks, which enables language-independent benefit from the pre-training of document layout structure."),zo=m(),wt=r("p"),wn=n("Tips:"),Eo=m(),Tt=r("ul"),M=r("li"),Tn=n("To combine the Language-Independent Layout Transformer with a new RoBERTa checkpoint from the "),Me=r("a"),yn=n("hub"),kn=n(", refer to "),Ae=r("a"),Ln=n("this guide"),$n=n(`.
The script will result in `),Gt=r("code"),xn=n("config.json"),Cn=n(" and "),Xt=r("code"),qn=n("pytorch_model.bin"),zn=n(" files being stored locally. After doing this, one can do the following (assuming you\u2019re logged in with your HuggingFace account):"),Fo=m(),w(je.$$.fragment),Mo=m(),W=r("ul"),Kt=r("li"),En=n("When preparing data for the model, make sure to use the token vocabulary that corresponds to the RoBERTa checkpoint you combined with the Layout Transformer."),Fn=m(),q=r("li"),Mn=n("As "),Se=r("a"),An=n("lilt-roberta-en-base"),jn=n(" uses the same vocabulary as "),yt=r("a"),Sn=n("LayoutLMv3"),Pn=n(", one can use "),kt=r("a"),On=n("LayoutLMv3TokenizerFast"),Dn=n(` to prepare data for the model.
The same is true for `),Pe=r("a"),Nn=n("lilt-roberta-en-base"),In=n(": one can use "),Lt=r("a"),Un=n("LayoutXLMTokenizerFast"),Wn=n(" for that model."),Qn=m(),Oe=r("li"),Vn=n("Demo notebooks for LiLT can be found "),De=r("a"),Rn=n("here"),Bn=n("."),Ao=m(),de=r("img"),jo=m(),ce=r("small"),Hn=n("LiLT architecture. Taken from the "),$t=r("a"),Jn=n("original paper"),Gn=n("."),So=m(),Q=r("p"),Xn=n("This model was contributed by "),Ne=r("a"),Kn=n("nielsr"),Yn=n(`.
The original code can be found `),Ie=r("a"),Zn=n("here"),es=n("."),Po=m(),X=r("h2"),pe=r("a"),Yt=r("span"),w(Ue.$$.fragment),ts=m(),Zt=r("span"),os=n("LiltConfig"),Oo=m(),I=r("div"),w(We.$$.fragment),ns=m(),A=r("p"),ss=n("This is the configuration class to store the configuration of a "),xt=r("a"),rs=n("LiltModel"),as=n(`. It is used to instantiate a LiLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LiLT
`),Qe=r("a"),is=n("SCUT-DLVCLab/lilt-roberta-en-base"),ls=n(` architecture.
Configuration objects inherit from `),Ct=r("a"),ds=n("PretrainedConfig"),cs=n(` and can be used to control the model outputs. Read the
documentation from `),qt=r("a"),ps=n("PretrainedConfig"),hs=n(" for more information."),ms=m(),w(he.$$.fragment),Do=m(),K=r("h2"),me=r("a"),eo=r("span"),w(Ve.$$.fragment),fs=m(),to=r("span"),us=n("LiltModel"),No=m(),j=r("div"),w(Re.$$.fragment),gs=m(),Be=r("p"),_s=n(`The bare LiLT Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),zt=r("a"),bs=n("PreTrainedModel"),vs=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ws=m(),He=r("p"),Ts=n("This model is also a PyTorch "),Je=r("a"),ys=n("torch.nn.Module"),ks=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ls=m(),S=r("div"),w(Ge.$$.fragment),$s=m(),Y=r("p"),xs=n("The "),Et=r("a"),Cs=n("LiltModel"),qs=n(" forward method, overrides the "),oo=r("code"),zs=n("__call__"),Es=n(" special method."),Fs=m(),w(fe.$$.fragment),Ms=m(),w(ue.$$.fragment),Io=m(),Z=r("h2"),ge=r("a"),no=r("span"),w(Xe.$$.fragment),As=m(),so=r("span"),js=n("LiltForSequenceClassification"),Uo=m(),z=r("div"),w(Ke.$$.fragment),Ss=m(),ro=r("p"),Ps=n(`LiLT Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Os=m(),Ye=r("p"),Ds=n("This model inherits from "),Ft=r("a"),Ns=n("PreTrainedModel"),Is=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Us=m(),Ze=r("p"),Ws=n("This model is also a PyTorch "),et=r("a"),Qs=n("torch.nn.Module"),Vs=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rs=m(),P=r("div"),w(tt.$$.fragment),Bs=m(),ee=r("p"),Hs=n("The "),Mt=r("a"),Js=n("LiltForSequenceClassification"),Gs=n(" forward method, overrides the "),ao=r("code"),Xs=n("__call__"),Ks=n(" special method."),Ys=m(),w(_e.$$.fragment),Zs=m(),w(be.$$.fragment),Wo=m(),te=r("h2"),ve=r("a"),io=r("span"),w(ot.$$.fragment),er=m(),lo=r("span"),tr=n("LiltForTokenClassification"),Qo=m(),E=r("div"),w(nt.$$.fragment),or=m(),co=r("p"),nr=n(`Lilt Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sr=m(),st=r("p"),rr=n("This model inherits from "),At=r("a"),ar=n("PreTrainedModel"),ir=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lr=m(),rt=r("p"),dr=n("This model is also a PyTorch "),at=r("a"),cr=n("torch.nn.Module"),pr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hr=m(),O=r("div"),w(it.$$.fragment),mr=m(),oe=r("p"),fr=n("The "),jt=r("a"),ur=n("LiltForTokenClassification"),gr=n(" forward method, overrides the "),po=r("code"),_r=n("__call__"),br=n(" special method."),vr=m(),w(we.$$.fragment),wr=m(),w(Te.$$.fragment),Vo=m(),ne=r("h2"),ye=r("a"),ho=r("span"),w(lt.$$.fragment),Tr=m(),mo=r("span"),yr=n("LiltForQuestionAnswering"),Ro=m(),F=r("div"),w(dt.$$.fragment),kr=m(),se=r("p"),Lr=n(`Lilt Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),fo=r("code"),$r=n("span start logits"),xr=n(" and "),uo=r("code"),Cr=n("span end logits"),qr=n(")."),zr=m(),ct=r("p"),Er=n("This model inherits from "),St=r("a"),Fr=n("PreTrainedModel"),Mr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ar=m(),pt=r("p"),jr=n("This model is also a PyTorch "),ht=r("a"),Sr=n("torch.nn.Module"),Pr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Or=m(),D=r("div"),w(mt.$$.fragment),Dr=m(),re=r("p"),Nr=n("The "),Pt=r("a"),Ir=n("LiltForQuestionAnswering"),Ur=n(" forward method, overrides the "),go=r("code"),Wr=n("__call__"),Qr=n(" special method."),Vr=m(),w(ke.$$.fragment),Rr=m(),w(Le.$$.fragment),this.h()},l(t){const h=oi('[data-svelte="svelte-1phssyn"]',document.head);c=a(h,"META",{name:!0,content:!0}),h.forEach(o),v=f(t),g=a(t,"H1",{class:!0});var ft=i(g);u=a(ft,"A",{id:!0,class:!0,href:!0});var _o=i(u);b=a(_o,"SPAN",{});var bo=i(b);T(l.$$.fragment,bo),bo.forEach(o),_o.forEach(o),p=f(ft),C=a(ft,"SPAN",{});var vo=i(C);cn=s(vo,"LiLT"),vo.forEach(o),ft.forEach(o),$o=f(t),G=a(t,"H2",{class:!0});var ut=i(G);le=a(ut,"A",{id:!0,class:!0,href:!0});var wo=i(le);Bt=a(wo,"SPAN",{});var To=i(Bt);T(Ee.$$.fragment,To),To.forEach(o),wo.forEach(o),pn=f(ut),Ht=a(ut,"SPAN",{});var yo=i(Ht);hn=s(yo,"Overview"),yo.forEach(o),ut.forEach(o),xo=f(t),U=a(t,"P",{});var ae=i(U);mn=s(ae,"The LiLT model was proposed in "),Fe=a(ae,"A",{href:!0,rel:!0});var Hr=i(Fe);fn=s(Hr,"LiLT: A Simple yet Effective Language-Independent Layout Transformer for Structured Document Understanding"),Hr.forEach(o),un=s(ae,` by Jiapeng Wang, Lianwen Jin, Kai Ding.
LiLT allows to combine any pre-trained RoBERTa text encoder with a lightweight Layout Transformer, to enable `),_t=a(ae,"A",{href:!0});var Jr=i(_t);gn=s(Jr,"LayoutLM"),Jr.forEach(o),_n=s(ae,`-like document understanding for many
languages.`),ae.forEach(o),Co=f(t),bt=a(t,"P",{});var Gr=i(bt);bn=s(Gr,"The abstract from the paper is the following:"),Gr.forEach(o),qo=f(t),vt=a(t,"P",{});var Xr=i(vt);Jt=a(Xr,"EM",{});var Kr=i(Jt);vn=s(Kr,"Structured document understanding has attracted considerable attention and made significant progress recently, owing to its crucial role in intelligent document processing. However, most existing related models can only deal with the document data of specific language(s) (typically English) included in the pre-training collection, which is extremely limited. To address this issue, we propose a simple yet effective Language-independent Layout Transformer (LiLT) for structured document understanding. LiLT can be pre-trained on the structured documents of a single language and then directly fine-tuned on other languages with the corresponding off-the-shelf monolingual/multilingual pre-trained textual models. Experimental results on eight languages have shown that LiLT can achieve competitive or even superior performance on diverse widely-used downstream benchmarks, which enables language-independent benefit from the pre-training of document layout structure."),Kr.forEach(o),Xr.forEach(o),zo=f(t),wt=a(t,"P",{});var Yr=i(wt);wn=s(Yr,"Tips:"),Yr.forEach(o),Eo=f(t),Tt=a(t,"UL",{});var Zr=i(Tt);M=a(Zr,"LI",{});var V=i(M);Tn=s(V,"To combine the Language-Independent Layout Transformer with a new RoBERTa checkpoint from the "),Me=a(V,"A",{href:!0,rel:!0});var ea=i(Me);yn=s(ea,"hub"),ea.forEach(o),kn=s(V,", refer to "),Ae=a(V,"A",{href:!0,rel:!0});var ta=i(Ae);Ln=s(ta,"this guide"),ta.forEach(o),$n=s(V,`.
The script will result in `),Gt=a(V,"CODE",{});var oa=i(Gt);xn=s(oa,"config.json"),oa.forEach(o),Cn=s(V," and "),Xt=a(V,"CODE",{});var na=i(Xt);qn=s(na,"pytorch_model.bin"),na.forEach(o),zn=s(V," files being stored locally. After doing this, one can do the following (assuming you\u2019re logged in with your HuggingFace account):"),V.forEach(o),Zr.forEach(o),Fo=f(t),T(je.$$.fragment,t),Mo=f(t),W=a(t,"UL",{});var Ot=i(W);Kt=a(Ot,"LI",{});var sa=i(Kt);En=s(sa,"When preparing data for the model, make sure to use the token vocabulary that corresponds to the RoBERTa checkpoint you combined with the Layout Transformer."),sa.forEach(o),Fn=f(Ot),q=a(Ot,"LI",{});var N=i(q);Mn=s(N,"As "),Se=a(N,"A",{href:!0,rel:!0});var ra=i(Se);An=s(ra,"lilt-roberta-en-base"),ra.forEach(o),jn=s(N," uses the same vocabulary as "),yt=a(N,"A",{href:!0});var aa=i(yt);Sn=s(aa,"LayoutLMv3"),aa.forEach(o),Pn=s(N,", one can use "),kt=a(N,"A",{href:!0});var ia=i(kt);On=s(ia,"LayoutLMv3TokenizerFast"),ia.forEach(o),Dn=s(N,` to prepare data for the model.
The same is true for `),Pe=a(N,"A",{href:!0,rel:!0});var la=i(Pe);Nn=s(la,"lilt-roberta-en-base"),la.forEach(o),In=s(N,": one can use "),Lt=a(N,"A",{href:!0});var da=i(Lt);Un=s(da,"LayoutXLMTokenizerFast"),da.forEach(o),Wn=s(N," for that model."),N.forEach(o),Qn=f(Ot),Oe=a(Ot,"LI",{});var Ho=i(Oe);Vn=s(Ho,"Demo notebooks for LiLT can be found "),De=a(Ho,"A",{href:!0,rel:!0});var ca=i(De);Rn=s(ca,"here"),ca.forEach(o),Bn=s(Ho,"."),Ho.forEach(o),Ot.forEach(o),Ao=f(t),de=a(t,"IMG",{src:!0,alt:!0,width:!0}),jo=f(t),ce=a(t,"SMALL",{});var Jo=i(ce);Hn=s(Jo,"LiLT architecture. Taken from the "),$t=a(Jo,"A",{href:!0});var pa=i($t);Jn=s(pa,"original paper"),pa.forEach(o),Gn=s(Jo,"."),Jo.forEach(o),So=f(t),Q=a(t,"P",{});var Dt=i(Q);Xn=s(Dt,"This model was contributed by "),Ne=a(Dt,"A",{href:!0,rel:!0});var ha=i(Ne);Kn=s(ha,"nielsr"),ha.forEach(o),Yn=s(Dt,`.
The original code can be found `),Ie=a(Dt,"A",{href:!0,rel:!0});var ma=i(Ie);Zn=s(ma,"here"),ma.forEach(o),es=s(Dt,"."),Dt.forEach(o),Po=f(t),X=a(t,"H2",{class:!0});var Go=i(X);pe=a(Go,"A",{id:!0,class:!0,href:!0});var fa=i(pe);Yt=a(fa,"SPAN",{});var ua=i(Yt);T(Ue.$$.fragment,ua),ua.forEach(o),fa.forEach(o),ts=f(Go),Zt=a(Go,"SPAN",{});var ga=i(Zt);os=s(ga,"LiltConfig"),ga.forEach(o),Go.forEach(o),Oo=f(t),I=a(t,"DIV",{class:!0});var Nt=i(I);T(We.$$.fragment,Nt),ns=f(Nt),A=a(Nt,"P",{});var R=i(A);ss=s(R,"This is the configuration class to store the configuration of a "),xt=a(R,"A",{href:!0});var _a=i(xt);rs=s(_a,"LiltModel"),_a.forEach(o),as=s(R,`. It is used to instantiate a LiLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LiLT
`),Qe=a(R,"A",{href:!0,rel:!0});var ba=i(Qe);is=s(ba,"SCUT-DLVCLab/lilt-roberta-en-base"),ba.forEach(o),ls=s(R,` architecture.
Configuration objects inherit from `),Ct=a(R,"A",{href:!0});var va=i(Ct);ds=s(va,"PretrainedConfig"),va.forEach(o),cs=s(R,` and can be used to control the model outputs. Read the
documentation from `),qt=a(R,"A",{href:!0});var wa=i(qt);ps=s(wa,"PretrainedConfig"),wa.forEach(o),hs=s(R," for more information."),R.forEach(o),ms=f(Nt),T(he.$$.fragment,Nt),Nt.forEach(o),Do=f(t),K=a(t,"H2",{class:!0});var Xo=i(K);me=a(Xo,"A",{id:!0,class:!0,href:!0});var Ta=i(me);eo=a(Ta,"SPAN",{});var ya=i(eo);T(Ve.$$.fragment,ya),ya.forEach(o),Ta.forEach(o),fs=f(Xo),to=a(Xo,"SPAN",{});var ka=i(to);us=s(ka,"LiltModel"),ka.forEach(o),Xo.forEach(o),No=f(t),j=a(t,"DIV",{class:!0});var $e=i(j);T(Re.$$.fragment,$e),gs=f($e),Be=a($e,"P",{});var Ko=i(Be);_s=s(Ko,`The bare LiLT Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),zt=a(Ko,"A",{href:!0});var La=i(zt);bs=s(La,"PreTrainedModel"),La.forEach(o),vs=s(Ko,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ko.forEach(o),ws=f($e),He=a($e,"P",{});var Yo=i(He);Ts=s(Yo,"This model is also a PyTorch "),Je=a(Yo,"A",{href:!0,rel:!0});var $a=i(Je);ys=s($a,"torch.nn.Module"),$a.forEach(o),ks=s(Yo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yo.forEach(o),Ls=f($e),S=a($e,"DIV",{class:!0});var xe=i(S);T(Ge.$$.fragment,xe),$s=f(xe),Y=a(xe,"P",{});var It=i(Y);xs=s(It,"The "),Et=a(It,"A",{href:!0});var xa=i(Et);Cs=s(xa,"LiltModel"),xa.forEach(o),qs=s(It," forward method, overrides the "),oo=a(It,"CODE",{});var Ca=i(oo);zs=s(Ca,"__call__"),Ca.forEach(o),Es=s(It," special method."),It.forEach(o),Fs=f(xe),T(fe.$$.fragment,xe),Ms=f(xe),T(ue.$$.fragment,xe),xe.forEach(o),$e.forEach(o),Io=f(t),Z=a(t,"H2",{class:!0});var Zo=i(Z);ge=a(Zo,"A",{id:!0,class:!0,href:!0});var qa=i(ge);no=a(qa,"SPAN",{});var za=i(no);T(Xe.$$.fragment,za),za.forEach(o),qa.forEach(o),As=f(Zo),so=a(Zo,"SPAN",{});var Ea=i(so);js=s(Ea,"LiltForSequenceClassification"),Ea.forEach(o),Zo.forEach(o),Uo=f(t),z=a(t,"DIV",{class:!0});var B=i(z);T(Ke.$$.fragment,B),Ss=f(B),ro=a(B,"P",{});var Fa=i(ro);Ps=s(Fa,`LiLT Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Fa.forEach(o),Os=f(B),Ye=a(B,"P",{});var en=i(Ye);Ds=s(en,"This model inherits from "),Ft=a(en,"A",{href:!0});var Ma=i(Ft);Ns=s(Ma,"PreTrainedModel"),Ma.forEach(o),Is=s(en,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),en.forEach(o),Us=f(B),Ze=a(B,"P",{});var tn=i(Ze);Ws=s(tn,"This model is also a PyTorch "),et=a(tn,"A",{href:!0,rel:!0});var Aa=i(et);Qs=s(Aa,"torch.nn.Module"),Aa.forEach(o),Vs=s(tn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tn.forEach(o),Rs=f(B),P=a(B,"DIV",{class:!0});var Ce=i(P);T(tt.$$.fragment,Ce),Bs=f(Ce),ee=a(Ce,"P",{});var Ut=i(ee);Hs=s(Ut,"The "),Mt=a(Ut,"A",{href:!0});var ja=i(Mt);Js=s(ja,"LiltForSequenceClassification"),ja.forEach(o),Gs=s(Ut," forward method, overrides the "),ao=a(Ut,"CODE",{});var Sa=i(ao);Xs=s(Sa,"__call__"),Sa.forEach(o),Ks=s(Ut," special method."),Ut.forEach(o),Ys=f(Ce),T(_e.$$.fragment,Ce),Zs=f(Ce),T(be.$$.fragment,Ce),Ce.forEach(o),B.forEach(o),Wo=f(t),te=a(t,"H2",{class:!0});var on=i(te);ve=a(on,"A",{id:!0,class:!0,href:!0});var Pa=i(ve);io=a(Pa,"SPAN",{});var Oa=i(io);T(ot.$$.fragment,Oa),Oa.forEach(o),Pa.forEach(o),er=f(on),lo=a(on,"SPAN",{});var Da=i(lo);tr=s(Da,"LiltForTokenClassification"),Da.forEach(o),on.forEach(o),Qo=f(t),E=a(t,"DIV",{class:!0});var H=i(E);T(nt.$$.fragment,H),or=f(H),co=a(H,"P",{});var Na=i(co);nr=s(Na,`Lilt Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Na.forEach(o),sr=f(H),st=a(H,"P",{});var nn=i(st);rr=s(nn,"This model inherits from "),At=a(nn,"A",{href:!0});var Ia=i(At);ar=s(Ia,"PreTrainedModel"),Ia.forEach(o),ir=s(nn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nn.forEach(o),lr=f(H),rt=a(H,"P",{});var sn=i(rt);dr=s(sn,"This model is also a PyTorch "),at=a(sn,"A",{href:!0,rel:!0});var Ua=i(at);cr=s(Ua,"torch.nn.Module"),Ua.forEach(o),pr=s(sn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sn.forEach(o),hr=f(H),O=a(H,"DIV",{class:!0});var qe=i(O);T(it.$$.fragment,qe),mr=f(qe),oe=a(qe,"P",{});var Wt=i(oe);fr=s(Wt,"The "),jt=a(Wt,"A",{href:!0});var Wa=i(jt);ur=s(Wa,"LiltForTokenClassification"),Wa.forEach(o),gr=s(Wt," forward method, overrides the "),po=a(Wt,"CODE",{});var Qa=i(po);_r=s(Qa,"__call__"),Qa.forEach(o),br=s(Wt," special method."),Wt.forEach(o),vr=f(qe),T(we.$$.fragment,qe),wr=f(qe),T(Te.$$.fragment,qe),qe.forEach(o),H.forEach(o),Vo=f(t),ne=a(t,"H2",{class:!0});var rn=i(ne);ye=a(rn,"A",{id:!0,class:!0,href:!0});var Va=i(ye);ho=a(Va,"SPAN",{});var Ra=i(ho);T(lt.$$.fragment,Ra),Ra.forEach(o),Va.forEach(o),Tr=f(rn),mo=a(rn,"SPAN",{});var Ba=i(mo);yr=s(Ba,"LiltForQuestionAnswering"),Ba.forEach(o),rn.forEach(o),Ro=f(t),F=a(t,"DIV",{class:!0});var J=i(F);T(dt.$$.fragment,J),kr=f(J),se=a(J,"P",{});var Qt=i(se);Lr=s(Qt,`Lilt Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),fo=a(Qt,"CODE",{});var Ha=i(fo);$r=s(Ha,"span start logits"),Ha.forEach(o),xr=s(Qt," and "),uo=a(Qt,"CODE",{});var Ja=i(uo);Cr=s(Ja,"span end logits"),Ja.forEach(o),qr=s(Qt,")."),Qt.forEach(o),zr=f(J),ct=a(J,"P",{});var an=i(ct);Er=s(an,"This model inherits from "),St=a(an,"A",{href:!0});var Ga=i(St);Fr=s(Ga,"PreTrainedModel"),Ga.forEach(o),Mr=s(an,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),an.forEach(o),Ar=f(J),pt=a(J,"P",{});var ln=i(pt);jr=s(ln,"This model is also a PyTorch "),ht=a(ln,"A",{href:!0,rel:!0});var Xa=i(ht);Sr=s(Xa,"torch.nn.Module"),Xa.forEach(o),Pr=s(ln,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ln.forEach(o),Or=f(J),D=a(J,"DIV",{class:!0});var ze=i(D);T(mt.$$.fragment,ze),Dr=f(ze),re=a(ze,"P",{});var Vt=i(re);Nr=s(Vt,"The "),Pt=a(Vt,"A",{href:!0});var Ka=i(Pt);Ir=s(Ka,"LiltForQuestionAnswering"),Ka.forEach(o),Ur=s(Vt," forward method, overrides the "),go=a(Vt,"CODE",{});var Ya=i(go);Wr=s(Ya,"__call__"),Ya.forEach(o),Qr=s(Vt," special method."),Vt.forEach(o),Vr=f(ze),T(ke.$$.fragment,ze),Rr=f(ze),T(Le.$$.fragment,ze),ze.forEach(o),J.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(ui)),d(u,"id","lilt"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#lilt"),d(g,"class","relative group"),d(le,"id","overview"),d(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(le,"href","#overview"),d(G,"class","relative group"),d(Fe,"href","https://arxiv.org/abs/2202.13669"),d(Fe,"rel","nofollow"),d(_t,"href","layoutlm"),d(Me,"href","https://huggingface.co/models?search=roberta"),d(Me,"rel","nofollow"),d(Ae,"href","https://github.com/jpWang/LiLT#or-generate-your-own-checkpoint-optional"),d(Ae,"rel","nofollow"),d(Se,"href","https://huggingface.co/SCUT-DLVCLab/lilt-roberta-en-base"),d(Se,"rel","nofollow"),d(yt,"href","layoutlmv3"),d(kt,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(Pe,"href","https://huggingface.co/SCUT-DLVCLab/lilt-infoxlm-base"),d(Pe,"rel","nofollow"),d(Lt,"href","/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast"),d(De,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LiLT"),d(De,"rel","nofollow"),ni(de.src,Br="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/lilt_architecture.jpg")||d(de,"src",Br),d(de,"alt","drawing"),d(de,"width","600"),d($t,"href","https://arxiv.org/abs/2202.13669"),d(Ne,"href","https://huggingface.co/nielsr"),d(Ne,"rel","nofollow"),d(Ie,"href","https://github.com/jpwang/lilt"),d(Ie,"rel","nofollow"),d(pe,"id","transformers.LiltConfig"),d(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(pe,"href","#transformers.LiltConfig"),d(X,"class","relative group"),d(xt,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel"),d(Qe,"href","https://huggingface.co/SCUT-DLVCLab/lilt-roberta-en-base"),d(Qe,"rel","nofollow"),d(Ct,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(qt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(me,"id","transformers.LiltModel"),d(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(me,"href","#transformers.LiltModel"),d(K,"class","relative group"),d(zt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Je,"rel","nofollow"),d(Et,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltModel"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ge,"id","transformers.LiltForSequenceClassification"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#transformers.LiltForSequenceClassification"),d(Z,"class","relative group"),d(Ft,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(et,"rel","nofollow"),d(Mt,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltForSequenceClassification"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ve,"id","transformers.LiltForTokenClassification"),d(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ve,"href","#transformers.LiltForTokenClassification"),d(te,"class","relative group"),d(At,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(at,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(at,"rel","nofollow"),d(jt,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltForTokenClassification"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ye,"id","transformers.LiltForQuestionAnswering"),d(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ye,"href","#transformers.LiltForQuestionAnswering"),d(ne,"class","relative group"),d(St,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ht,"rel","nofollow"),d(Pt,"href","/docs/transformers/main/en/model_doc/lilt#transformers.LiltForQuestionAnswering"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,c),_(t,v,h),_(t,g,h),e(g,u),e(u,b),y(l,b,null),e(g,p),e(g,C),e(C,cn),_(t,$o,h),_(t,G,h),e(G,le),e(le,Bt),y(Ee,Bt,null),e(G,pn),e(G,Ht),e(Ht,hn),_(t,xo,h),_(t,U,h),e(U,mn),e(U,Fe),e(Fe,fn),e(U,un),e(U,_t),e(_t,gn),e(U,_n),_(t,Co,h),_(t,bt,h),e(bt,bn),_(t,qo,h),_(t,vt,h),e(vt,Jt),e(Jt,vn),_(t,zo,h),_(t,wt,h),e(wt,wn),_(t,Eo,h),_(t,Tt,h),e(Tt,M),e(M,Tn),e(M,Me),e(Me,yn),e(M,kn),e(M,Ae),e(Ae,Ln),e(M,$n),e(M,Gt),e(Gt,xn),e(M,Cn),e(M,Xt),e(Xt,qn),e(M,zn),_(t,Fo,h),y(je,t,h),_(t,Mo,h),_(t,W,h),e(W,Kt),e(Kt,En),e(W,Fn),e(W,q),e(q,Mn),e(q,Se),e(Se,An),e(q,jn),e(q,yt),e(yt,Sn),e(q,Pn),e(q,kt),e(kt,On),e(q,Dn),e(q,Pe),e(Pe,Nn),e(q,In),e(q,Lt),e(Lt,Un),e(q,Wn),e(W,Qn),e(W,Oe),e(Oe,Vn),e(Oe,De),e(De,Rn),e(Oe,Bn),_(t,Ao,h),_(t,de,h),_(t,jo,h),_(t,ce,h),e(ce,Hn),e(ce,$t),e($t,Jn),e(ce,Gn),_(t,So,h),_(t,Q,h),e(Q,Xn),e(Q,Ne),e(Ne,Kn),e(Q,Yn),e(Q,Ie),e(Ie,Zn),e(Q,es),_(t,Po,h),_(t,X,h),e(X,pe),e(pe,Yt),y(Ue,Yt,null),e(X,ts),e(X,Zt),e(Zt,os),_(t,Oo,h),_(t,I,h),y(We,I,null),e(I,ns),e(I,A),e(A,ss),e(A,xt),e(xt,rs),e(A,as),e(A,Qe),e(Qe,is),e(A,ls),e(A,Ct),e(Ct,ds),e(A,cs),e(A,qt),e(qt,ps),e(A,hs),e(I,ms),y(he,I,null),_(t,Do,h),_(t,K,h),e(K,me),e(me,eo),y(Ve,eo,null),e(K,fs),e(K,to),e(to,us),_(t,No,h),_(t,j,h),y(Re,j,null),e(j,gs),e(j,Be),e(Be,_s),e(Be,zt),e(zt,bs),e(Be,vs),e(j,ws),e(j,He),e(He,Ts),e(He,Je),e(Je,ys),e(He,ks),e(j,Ls),e(j,S),y(Ge,S,null),e(S,$s),e(S,Y),e(Y,xs),e(Y,Et),e(Et,Cs),e(Y,qs),e(Y,oo),e(oo,zs),e(Y,Es),e(S,Fs),y(fe,S,null),e(S,Ms),y(ue,S,null),_(t,Io,h),_(t,Z,h),e(Z,ge),e(ge,no),y(Xe,no,null),e(Z,As),e(Z,so),e(so,js),_(t,Uo,h),_(t,z,h),y(Ke,z,null),e(z,Ss),e(z,ro),e(ro,Ps),e(z,Os),e(z,Ye),e(Ye,Ds),e(Ye,Ft),e(Ft,Ns),e(Ye,Is),e(z,Us),e(z,Ze),e(Ze,Ws),e(Ze,et),e(et,Qs),e(Ze,Vs),e(z,Rs),e(z,P),y(tt,P,null),e(P,Bs),e(P,ee),e(ee,Hs),e(ee,Mt),e(Mt,Js),e(ee,Gs),e(ee,ao),e(ao,Xs),e(ee,Ks),e(P,Ys),y(_e,P,null),e(P,Zs),y(be,P,null),_(t,Wo,h),_(t,te,h),e(te,ve),e(ve,io),y(ot,io,null),e(te,er),e(te,lo),e(lo,tr),_(t,Qo,h),_(t,E,h),y(nt,E,null),e(E,or),e(E,co),e(co,nr),e(E,sr),e(E,st),e(st,rr),e(st,At),e(At,ar),e(st,ir),e(E,lr),e(E,rt),e(rt,dr),e(rt,at),e(at,cr),e(rt,pr),e(E,hr),e(E,O),y(it,O,null),e(O,mr),e(O,oe),e(oe,fr),e(oe,jt),e(jt,ur),e(oe,gr),e(oe,po),e(po,_r),e(oe,br),e(O,vr),y(we,O,null),e(O,wr),y(Te,O,null),_(t,Vo,h),_(t,ne,h),e(ne,ye),e(ye,ho),y(lt,ho,null),e(ne,Tr),e(ne,mo),e(mo,yr),_(t,Ro,h),_(t,F,h),y(dt,F,null),e(F,kr),e(F,se),e(se,Lr),e(se,fo),e(fo,$r),e(se,xr),e(se,uo),e(uo,Cr),e(se,qr),e(F,zr),e(F,ct),e(ct,Er),e(ct,St),e(St,Fr),e(ct,Mr),e(F,Ar),e(F,pt),e(pt,jr),e(pt,ht),e(ht,Sr),e(pt,Pr),e(F,Or),e(F,D),y(mt,D,null),e(D,Dr),e(D,re),e(re,Nr),e(re,Pt),e(Pt,Ir),e(re,Ur),e(re,go),e(go,Wr),e(re,Qr),e(D,Vr),y(ke,D,null),e(D,Rr),y(Le,D,null),Bo=!0},p(t,[h]){const ft={};h&2&&(ft.$$scope={dirty:h,ctx:t}),he.$set(ft);const _o={};h&2&&(_o.$$scope={dirty:h,ctx:t}),fe.$set(_o);const bo={};h&2&&(bo.$$scope={dirty:h,ctx:t}),ue.$set(bo);const vo={};h&2&&(vo.$$scope={dirty:h,ctx:t}),_e.$set(vo);const ut={};h&2&&(ut.$$scope={dirty:h,ctx:t}),be.$set(ut);const wo={};h&2&&(wo.$$scope={dirty:h,ctx:t}),we.$set(wo);const To={};h&2&&(To.$$scope={dirty:h,ctx:t}),Te.$set(To);const yo={};h&2&&(yo.$$scope={dirty:h,ctx:t}),ke.$set(yo);const ae={};h&2&&(ae.$$scope={dirty:h,ctx:t}),Le.$set(ae)},i(t){Bo||(k(l.$$.fragment,t),k(Ee.$$.fragment,t),k(je.$$.fragment,t),k(Ue.$$.fragment,t),k(We.$$.fragment,t),k(he.$$.fragment,t),k(Ve.$$.fragment,t),k(Re.$$.fragment,t),k(Ge.$$.fragment,t),k(fe.$$.fragment,t),k(ue.$$.fragment,t),k(Xe.$$.fragment,t),k(Ke.$$.fragment,t),k(tt.$$.fragment,t),k(_e.$$.fragment,t),k(be.$$.fragment,t),k(ot.$$.fragment,t),k(nt.$$.fragment,t),k(it.$$.fragment,t),k(we.$$.fragment,t),k(Te.$$.fragment,t),k(lt.$$.fragment,t),k(dt.$$.fragment,t),k(mt.$$.fragment,t),k(ke.$$.fragment,t),k(Le.$$.fragment,t),Bo=!0)},o(t){L(l.$$.fragment,t),L(Ee.$$.fragment,t),L(je.$$.fragment,t),L(Ue.$$.fragment,t),L(We.$$.fragment,t),L(he.$$.fragment,t),L(Ve.$$.fragment,t),L(Re.$$.fragment,t),L(Ge.$$.fragment,t),L(fe.$$.fragment,t),L(ue.$$.fragment,t),L(Xe.$$.fragment,t),L(Ke.$$.fragment,t),L(tt.$$.fragment,t),L(_e.$$.fragment,t),L(be.$$.fragment,t),L(ot.$$.fragment,t),L(nt.$$.fragment,t),L(it.$$.fragment,t),L(we.$$.fragment,t),L(Te.$$.fragment,t),L(lt.$$.fragment,t),L(dt.$$.fragment,t),L(mt.$$.fragment,t),L(ke.$$.fragment,t),L(Le.$$.fragment,t),Bo=!1},d(t){o(c),t&&o(v),t&&o(g),$(l),t&&o($o),t&&o(G),$(Ee),t&&o(xo),t&&o(U),t&&o(Co),t&&o(bt),t&&o(qo),t&&o(vt),t&&o(zo),t&&o(wt),t&&o(Eo),t&&o(Tt),t&&o(Fo),$(je,t),t&&o(Mo),t&&o(W),t&&o(Ao),t&&o(de),t&&o(jo),t&&o(ce),t&&o(So),t&&o(Q),t&&o(Po),t&&o(X),$(Ue),t&&o(Oo),t&&o(I),$(We),$(he),t&&o(Do),t&&o(K),$(Ve),t&&o(No),t&&o(j),$(Re),$(Ge),$(fe),$(ue),t&&o(Io),t&&o(Z),$(Xe),t&&o(Uo),t&&o(z),$(Ke),$(tt),$(_e),$(be),t&&o(Wo),t&&o(te),$(ot),t&&o(Qo),t&&o(E),$(nt),$(it),$(we),$(Te),t&&o(Vo),t&&o(ne),$(lt),t&&o(Ro),t&&o(F),$(dt),$(mt),$(ke),$(Le)}}}const ui={local:"lilt",sections:[{local:"overview",title:"Overview"},{local:"transformers.LiltConfig",title:"LiltConfig"},{local:"transformers.LiltModel",title:"LiltModel"},{local:"transformers.LiltForSequenceClassification",title:"LiltForSequenceClassification"},{local:"transformers.LiltForTokenClassification",title:"LiltForTokenClassification"},{local:"transformers.LiltForQuestionAnswering",title:"LiltForQuestionAnswering"}],title:"LiLT"};function gi(x){return si(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ki extends Za{constructor(c){super();ei(this,c,gi,fi,ti,{})}}export{ki as default,ui as metadata};
