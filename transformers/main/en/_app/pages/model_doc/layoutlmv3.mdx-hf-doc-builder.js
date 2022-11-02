import{S as gy,i as _y,s as vy,e as a,k as p,w as L,t,M as yy,c as r,d as o,m as u,a as i,x as k,h as n,b as d,N as by,G as e,g as h,y as w,q as T,o as x,B as M,v as Ly,L as vt}from"../../chunks/vendor-hf-doc-builder.js";import{T as vo}from"../../chunks/Tip-hf-doc-builder.js";import{D as ne}from"../../chunks/Docstring-hf-doc-builder.js";import{C as yt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ge}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as _t}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as mg}from"../../chunks/PipelineTag-hf-doc-builder.js";function ky(A){let c,b,g,_,y;return{c(){c=a("p"),b=t("LayoutLMv3 is nearly identical to LayoutLMv2, so we\u2019ve also included LayoutLMv2 resources you can adapt for LayoutLMv3 tasks. For these notebooks, take care to use "),g=a("a"),_=t("LayoutLMv2Processor"),y=t(" instead when preparing data for the model!"),this.h()},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"LayoutLMv3 is nearly identical to LayoutLMv2, so we\u2019ve also included LayoutLMv2 resources you can adapt for LayoutLMv3 tasks. For these notebooks, take care to use "),g=r(m,"A",{href:!0});var F=i(g);_=n(F,"LayoutLMv2Processor"),F.forEach(o),y=n(m," instead when preparing data for the model!"),m.forEach(o),this.h()},h(){d(g,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor")},m(l,m){h(l,c,m),e(c,b),e(c,g),e(g,_),e(c,y)},d(l){l&&o(c)}}}function wy(A){let c,b,g,_,y;return _=new yt({props:{code:`from transformers import LayoutLMv3Config, LayoutLMv3Model

# Initializing a LayoutLMv3 microsoft/layoutlmv3-base style configuration
configuration = LayoutLMv3Config()

# Initializing a model (with random weights) from the microsoft/layoutlmv3-base style configuration
model = LayoutLMv3Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv3Config, LayoutLMv3Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv3 microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv3Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv3Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),b=t("Example:"),g=p(),L(_.$$.fragment)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Example:"),m.forEach(o),g=u(l),k(_.$$.fragment,l)},m(l,m){h(l,c,m),e(c,b),h(l,g,m),w(_,l,m),y=!0},p:vt,i(l){y||(T(_.$$.fragment,l),y=!0)},o(l){x(_.$$.fragment,l),y=!1},d(l){l&&o(c),l&&o(g),M(_,l)}}}function Ty(A){let c,b,g,_,y;return{c(){c=a("p"),b=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=t("Module"),y=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var F=i(g);_=n(F,"Module"),F.forEach(o),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){h(l,c,m),e(c,b),e(c,g),e(g,_),e(c,y)},d(l){l&&o(c)}}}function xy(A){let c,b,g,_,y;return _=new yt({props:{code:`from transformers import AutoProcessor, AutoModel
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModel.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, words, boxes=boxes, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),b=t("Examples:"),g=p(),L(_.$$.fragment)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Examples:"),m.forEach(o),g=u(l),k(_.$$.fragment,l)},m(l,m){h(l,c,m),e(c,b),h(l,g,m),w(_,l,m),y=!0},p:vt,i(l){y||(T(_.$$.fragment,l),y=!0)},o(l){x(_.$$.fragment,l),y=!1},d(l){l&&o(c),l&&o(g),M(_,l)}}}function My(A){let c,b,g,_,y;return{c(){c=a("p"),b=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=t("Module"),y=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var F=i(g);_=n(F,"Module"),F.forEach(o),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){h(l,c,m),e(c,b),e(c,g),e(g,_),e(c,y)},d(l){l&&o(c)}}}function $y(A){let c,b,g,_,y;return _=new yt({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
from datasets import load_dataset
import torch

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModelForSequenceClassification.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, words, boxes=boxes, return_tensors="pt")
sequence_label = torch.tensor([1])

outputs = model(**encoding, labels=sequence_label)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=t("Examples:"),g=p(),L(_.$$.fragment)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Examples:"),m.forEach(o),g=u(l),k(_.$$.fragment,l)},m(l,m){h(l,c,m),e(c,b),h(l,g,m),w(_,l,m),y=!0},p:vt,i(l){y||(T(_.$$.fragment,l),y=!0)},o(l){x(_.$$.fragment,l),y=!1},d(l){l&&o(c),l&&o(g),M(_,l)}}}function qy(A){let c,b,g,_,y;return{c(){c=a("p"),b=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=t("Module"),y=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var F=i(g);_=n(F,"Module"),F.forEach(o),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){h(l,c,m),e(c,b),e(c,g),e(g,_),e(c,y)},d(l){l&&o(c)}}}function Fy(A){let c,b,g,_,y;return _=new yt({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModelForTokenClassification.from_pretrained("microsoft/layoutlmv3-base", num_labels=7)

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]
word_labels = example["ner_tags"]

encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")

outputs = model(**encoding)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, num_labels=<span class="hljs-number">7</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = example[<span class="hljs-string">&quot;ner_tags&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=t("Examples:"),g=p(),L(_.$$.fragment)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Examples:"),m.forEach(o),g=u(l),k(_.$$.fragment,l)},m(l,m){h(l,c,m),e(c,b),h(l,g,m),w(_,l,m),y=!0},p:vt,i(l){y||(T(_.$$.fragment,l),y=!0)},o(l){x(_.$$.fragment,l),y=!1},d(l){l&&o(c),l&&o(g),M(_,l)}}}function Ey(A){let c,b,g,_,y;return{c(){c=a("p"),b=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=t("Module"),y=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var F=i(g);_=n(F,"Module"),F.forEach(o),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){h(l,c,m),e(c,b),e(c,g),e(g,_),e(c,y)},d(l){l&&o(c)}}}function zy(A){let c,b,g,_,y;return _=new yt({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
from datasets import load_dataset
import torch

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = AutoModelForQuestionAnswering.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
question = "what's his name?"
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, question, words, boxes=boxes, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){c=a("p"),b=t("Examples:"),g=p(),L(_.$$.fragment)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Examples:"),m.forEach(o),g=u(l),k(_.$$.fragment,l)},m(l,m){h(l,c,m),e(c,b),h(l,g,m),w(_,l,m),y=!0},p:vt,i(l){y||(T(_.$$.fragment,l),y=!0)},o(l){x(_.$$.fragment,l),y=!1},d(l){l&&o(c),l&&o(g),M(_,l)}}}function Cy(A){let c,b,g,_,y,l,m,F,we,_e,R,ae,se,$,Te,V,xe,ve,O,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,me,H,Ee,be,U,ze,Le,z,re,Y,he,Ce,J,le,fe,B,Ae,S,Pe,oe,j,je,N,Ne,Se;return{c(){c=a("p"),b=t("TensorFlow models and layers in "),g=a("code"),_=t("transformers"),y=t(" accept two formats as input:"),l=p(),m=a("ul"),F=a("li"),we=t("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),R=a("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),$=a("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=t("model.fit()"),ve=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a("code"),Me=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=t("fit()"),pe=t(" and "),G=a("code"),qe=t("predict()"),ue=t(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),C=a("ul"),P=a("li"),me=t("a single Tensor with "),H=a("code"),Ee=t("input_ids"),be=t(" only and nothing else: "),U=a("code"),ze=t("model(input_ids)"),Le=p(),z=a("li"),re=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),he=t("model([input_ids, attention_mask])"),Ce=t(" or "),J=a("code"),le=t("model([input_ids, attention_mask, token_type_ids])"),fe=p(),B=a("li"),Ae=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=p(),j=a("p"),je=t(`Note that when creating models and layers with
`),N=a("a"),Ne=t("subclassing"),Se=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){c=r(v,"P",{});var q=i(c);b=n(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var Xe=i(g);_=n(Xe,"transformers"),Xe.forEach(o),y=n(q," accept two formats as input:"),q.forEach(o),l=u(v),m=r(v,"UL",{});var te=i(m);F=r(te,"LI",{});var Ye=i(F);we=n(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(o),_e=u(te),R=r(te,"LI",{});var Je=i(R);ae=n(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(o),te.forEach(o),se=u(v),$=r(v,"P",{});var E=i($);Te=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(o),ve=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r(E,"CODE",{});var Ze=i(O);Me=n(Ze,"model.fit()"),Ze.forEach(o),ie=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(E,"CODE",{});var We=i(K);$e=n(We,"fit()"),We.forEach(o),pe=n(E," and "),G=r(E,"CODE",{});var eo=i(G);qe=n(eo,"predict()"),eo.forEach(o),ue=n(E,`, such as when creating your own layers or models with
the Keras `),X=r(E,"CODE",{});var oo=i(X);Fe=n(oo,"Functional"),oo.forEach(o),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(o),ee=u(v),C=r(v,"UL",{});var D=i(C);P=r(D,"LI",{});var Z=i(P);me=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var to=i(H);Ee=n(to,"input_ids"),to.forEach(o),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var no=i(U);ze=n(no,"model(input_ids)"),no.forEach(o),Z.forEach(o),Le=u(D),z=r(D,"LI",{});var Q=i(z);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var so=i(Y);he=n(so,"model([input_ids, attention_mask])"),so.forEach(o),Ce=n(Q," or "),J=r(Q,"CODE",{});var Oe=i(J);le=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(o),Q.forEach(o),fe=u(D),B=r(D,"LI",{});var Ie=i(B);Ae=n(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ie,"CODE",{});var ao=i(S);Pe=n(ao,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ao.forEach(o),Ie.forEach(o),D.forEach(o),oe=u(v),j=r(v,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(o),Se=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(o),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(v,q){h(v,c,q),e(c,b),e(c,g),e(g,_),e(c,y),h(v,l,q),h(v,m,q),e(m,F),e(F,we),e(m,_e),e(m,R),e(R,ae),h(v,se,q),h(v,$,q),e($,Te),e($,V),e(V,xe),e($,ve),e($,O),e(O,Me),e($,ie),e($,K),e(K,$e),e($,pe),e($,G),e(G,qe),e($,ue),e($,X),e(X,Fe),e($,ye),h(v,ee,q),h(v,C,q),e(C,P),e(P,me),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(C,Le),e(C,z),e(z,re),e(z,Y),e(Y,he),e(z,Ce),e(z,J),e(J,le),e(C,fe),e(C,B),e(B,Ae),e(B,S),e(S,Pe),h(v,oe,q),h(v,j,q),e(j,je),e(j,N),e(N,Ne),e(j,Se)},d(v){v&&o(c),v&&o(l),v&&o(m),v&&o(se),v&&o($),v&&o(ee),v&&o(C),v&&o(oe),v&&o(j)}}}function Ay(A){let c,b,g,_,y;return{c(){c=a("p"),b=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=t("Module"),y=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var F=i(g);_=n(F,"Module"),F.forEach(o),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){h(l,c,m),e(c,b),e(c,g),e(g,_),e(c,y)},d(l){l&&o(c)}}}function Py(A){let c,b,g,_,y;return _=new yt({props:{code:`from transformers import AutoProcessor, TFAutoModel
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = TFAutoModel.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, words, boxes=boxes, return_tensors="tf")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFAutoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),b=t("Examples:"),g=p(),L(_.$$.fragment)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Examples:"),m.forEach(o),g=u(l),k(_.$$.fragment,l)},m(l,m){h(l,c,m),e(c,b),h(l,g,m),w(_,l,m),y=!0},p:vt,i(l){y||(T(_.$$.fragment,l),y=!0)},o(l){x(_.$$.fragment,l),y=!1},d(l){l&&o(c),l&&o(g),M(_,l)}}}function jy(A){let c,b,g,_,y,l,m,F,we,_e,R,ae,se,$,Te,V,xe,ve,O,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,me,H,Ee,be,U,ze,Le,z,re,Y,he,Ce,J,le,fe,B,Ae,S,Pe,oe,j,je,N,Ne,Se;return{c(){c=a("p"),b=t("TensorFlow models and layers in "),g=a("code"),_=t("transformers"),y=t(" accept two formats as input:"),l=p(),m=a("ul"),F=a("li"),we=t("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),R=a("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),$=a("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=t("model.fit()"),ve=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a("code"),Me=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=t("fit()"),pe=t(" and "),G=a("code"),qe=t("predict()"),ue=t(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),C=a("ul"),P=a("li"),me=t("a single Tensor with "),H=a("code"),Ee=t("input_ids"),be=t(" only and nothing else: "),U=a("code"),ze=t("model(input_ids)"),Le=p(),z=a("li"),re=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),he=t("model([input_ids, attention_mask])"),Ce=t(" or "),J=a("code"),le=t("model([input_ids, attention_mask, token_type_ids])"),fe=p(),B=a("li"),Ae=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=p(),j=a("p"),je=t(`Note that when creating models and layers with
`),N=a("a"),Ne=t("subclassing"),Se=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){c=r(v,"P",{});var q=i(c);b=n(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var Xe=i(g);_=n(Xe,"transformers"),Xe.forEach(o),y=n(q," accept two formats as input:"),q.forEach(o),l=u(v),m=r(v,"UL",{});var te=i(m);F=r(te,"LI",{});var Ye=i(F);we=n(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(o),_e=u(te),R=r(te,"LI",{});var Je=i(R);ae=n(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(o),te.forEach(o),se=u(v),$=r(v,"P",{});var E=i($);Te=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(o),ve=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r(E,"CODE",{});var Ze=i(O);Me=n(Ze,"model.fit()"),Ze.forEach(o),ie=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(E,"CODE",{});var We=i(K);$e=n(We,"fit()"),We.forEach(o),pe=n(E," and "),G=r(E,"CODE",{});var eo=i(G);qe=n(eo,"predict()"),eo.forEach(o),ue=n(E,`, such as when creating your own layers or models with
the Keras `),X=r(E,"CODE",{});var oo=i(X);Fe=n(oo,"Functional"),oo.forEach(o),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(o),ee=u(v),C=r(v,"UL",{});var D=i(C);P=r(D,"LI",{});var Z=i(P);me=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var to=i(H);Ee=n(to,"input_ids"),to.forEach(o),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var no=i(U);ze=n(no,"model(input_ids)"),no.forEach(o),Z.forEach(o),Le=u(D),z=r(D,"LI",{});var Q=i(z);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var so=i(Y);he=n(so,"model([input_ids, attention_mask])"),so.forEach(o),Ce=n(Q," or "),J=r(Q,"CODE",{});var Oe=i(J);le=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(o),Q.forEach(o),fe=u(D),B=r(D,"LI",{});var Ie=i(B);Ae=n(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ie,"CODE",{});var ao=i(S);Pe=n(ao,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ao.forEach(o),Ie.forEach(o),D.forEach(o),oe=u(v),j=r(v,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(o),Se=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(o),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(v,q){h(v,c,q),e(c,b),e(c,g),e(g,_),e(c,y),h(v,l,q),h(v,m,q),e(m,F),e(F,we),e(m,_e),e(m,R),e(R,ae),h(v,se,q),h(v,$,q),e($,Te),e($,V),e(V,xe),e($,ve),e($,O),e(O,Me),e($,ie),e($,K),e(K,$e),e($,pe),e($,G),e(G,qe),e($,ue),e($,X),e(X,Fe),e($,ye),h(v,ee,q),h(v,C,q),e(C,P),e(P,me),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(C,Le),e(C,z),e(z,re),e(z,Y),e(Y,he),e(z,Ce),e(z,J),e(J,le),e(C,fe),e(C,B),e(B,Ae),e(B,S),e(S,Pe),h(v,oe,q),h(v,j,q),e(j,je),e(j,N),e(N,Ne),e(j,Se)},d(v){v&&o(c),v&&o(l),v&&o(m),v&&o(se),v&&o($),v&&o(ee),v&&o(C),v&&o(oe),v&&o(j)}}}function Ny(A){let c,b,g,_,y;return{c(){c=a("p"),b=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=t("Module"),y=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var F=i(g);_=n(F,"Module"),F.forEach(o),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){h(l,c,m),e(c,b),e(c,g),e(g,_),e(c,y)},d(l){l&&o(c)}}}function Sy(A){let c,b,g,_,y;return _=new yt({props:{code:`from transformers import AutoProcessor, TFAutoModelForSequenceClassification
from datasets import load_dataset
import tensorflow as tf

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = TFAutoModelForSequenceClassification.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, words, boxes=boxes, return_tensors="tf")
sequence_label = tf.convert_to_tensor([1])

outputs = model(**encoding, labels=sequence_label)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFAutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = tf.convert_to_tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=t("Examples:"),g=p(),L(_.$$.fragment)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Examples:"),m.forEach(o),g=u(l),k(_.$$.fragment,l)},m(l,m){h(l,c,m),e(c,b),h(l,g,m),w(_,l,m),y=!0},p:vt,i(l){y||(T(_.$$.fragment,l),y=!0)},o(l){x(_.$$.fragment,l),y=!1},d(l){l&&o(c),l&&o(g),M(_,l)}}}function Oy(A){let c,b,g,_,y,l,m,F,we,_e,R,ae,se,$,Te,V,xe,ve,O,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,me,H,Ee,be,U,ze,Le,z,re,Y,he,Ce,J,le,fe,B,Ae,S,Pe,oe,j,je,N,Ne,Se;return{c(){c=a("p"),b=t("TensorFlow models and layers in "),g=a("code"),_=t("transformers"),y=t(" accept two formats as input:"),l=p(),m=a("ul"),F=a("li"),we=t("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),R=a("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),$=a("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=t("model.fit()"),ve=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a("code"),Me=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=t("fit()"),pe=t(" and "),G=a("code"),qe=t("predict()"),ue=t(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),C=a("ul"),P=a("li"),me=t("a single Tensor with "),H=a("code"),Ee=t("input_ids"),be=t(" only and nothing else: "),U=a("code"),ze=t("model(input_ids)"),Le=p(),z=a("li"),re=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),he=t("model([input_ids, attention_mask])"),Ce=t(" or "),J=a("code"),le=t("model([input_ids, attention_mask, token_type_ids])"),fe=p(),B=a("li"),Ae=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=p(),j=a("p"),je=t(`Note that when creating models and layers with
`),N=a("a"),Ne=t("subclassing"),Se=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){c=r(v,"P",{});var q=i(c);b=n(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var Xe=i(g);_=n(Xe,"transformers"),Xe.forEach(o),y=n(q," accept two formats as input:"),q.forEach(o),l=u(v),m=r(v,"UL",{});var te=i(m);F=r(te,"LI",{});var Ye=i(F);we=n(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(o),_e=u(te),R=r(te,"LI",{});var Je=i(R);ae=n(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(o),te.forEach(o),se=u(v),$=r(v,"P",{});var E=i($);Te=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(o),ve=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r(E,"CODE",{});var Ze=i(O);Me=n(Ze,"model.fit()"),Ze.forEach(o),ie=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(E,"CODE",{});var We=i(K);$e=n(We,"fit()"),We.forEach(o),pe=n(E," and "),G=r(E,"CODE",{});var eo=i(G);qe=n(eo,"predict()"),eo.forEach(o),ue=n(E,`, such as when creating your own layers or models with
the Keras `),X=r(E,"CODE",{});var oo=i(X);Fe=n(oo,"Functional"),oo.forEach(o),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(o),ee=u(v),C=r(v,"UL",{});var D=i(C);P=r(D,"LI",{});var Z=i(P);me=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var to=i(H);Ee=n(to,"input_ids"),to.forEach(o),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var no=i(U);ze=n(no,"model(input_ids)"),no.forEach(o),Z.forEach(o),Le=u(D),z=r(D,"LI",{});var Q=i(z);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var so=i(Y);he=n(so,"model([input_ids, attention_mask])"),so.forEach(o),Ce=n(Q," or "),J=r(Q,"CODE",{});var Oe=i(J);le=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(o),Q.forEach(o),fe=u(D),B=r(D,"LI",{});var Ie=i(B);Ae=n(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ie,"CODE",{});var ao=i(S);Pe=n(ao,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ao.forEach(o),Ie.forEach(o),D.forEach(o),oe=u(v),j=r(v,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(o),Se=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(o),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(v,q){h(v,c,q),e(c,b),e(c,g),e(g,_),e(c,y),h(v,l,q),h(v,m,q),e(m,F),e(F,we),e(m,_e),e(m,R),e(R,ae),h(v,se,q),h(v,$,q),e($,Te),e($,V),e(V,xe),e($,ve),e($,O),e(O,Me),e($,ie),e($,K),e(K,$e),e($,pe),e($,G),e(G,qe),e($,ue),e($,X),e(X,Fe),e($,ye),h(v,ee,q),h(v,C,q),e(C,P),e(P,me),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(C,Le),e(C,z),e(z,re),e(z,Y),e(Y,he),e(z,Ce),e(z,J),e(J,le),e(C,fe),e(C,B),e(B,Ae),e(B,S),e(S,Pe),h(v,oe,q),h(v,j,q),e(j,je),e(j,N),e(N,Ne),e(j,Se)},d(v){v&&o(c),v&&o(l),v&&o(m),v&&o(se),v&&o($),v&&o(ee),v&&o(C),v&&o(oe),v&&o(j)}}}function Iy(A){let c,b,g,_,y;return{c(){c=a("p"),b=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=t("Module"),y=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var F=i(g);_=n(F,"Module"),F.forEach(o),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){h(l,c,m),e(c,b),e(c,g),e(g,_),e(c,y)},d(l){l&&o(c)}}}function Dy(A){let c,b,g,_,y;return _=new yt({props:{code:`from transformers import AutoProcessor, TFAutoModelForTokenClassification
from datasets import load_dataset

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = TFAutoModelForTokenClassification.from_pretrained("microsoft/layoutlmv3-base", num_labels=7)

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
words = example["tokens"]
boxes = example["bboxes"]
word_labels = example["ner_tags"]

encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="tf")

outputs = model(**encoding)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFAutoModelForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, num_labels=<span class="hljs-number">7</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = example[<span class="hljs-string">&quot;ner_tags&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=t("Examples:"),g=p(),L(_.$$.fragment)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Examples:"),m.forEach(o),g=u(l),k(_.$$.fragment,l)},m(l,m){h(l,c,m),e(c,b),h(l,g,m),w(_,l,m),y=!0},p:vt,i(l){y||(T(_.$$.fragment,l),y=!0)},o(l){x(_.$$.fragment,l),y=!1},d(l){l&&o(c),l&&o(g),M(_,l)}}}function Ry(A){let c,b,g,_,y,l,m,F,we,_e,R,ae,se,$,Te,V,xe,ve,O,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,me,H,Ee,be,U,ze,Le,z,re,Y,he,Ce,J,le,fe,B,Ae,S,Pe,oe,j,je,N,Ne,Se;return{c(){c=a("p"),b=t("TensorFlow models and layers in "),g=a("code"),_=t("transformers"),y=t(" accept two formats as input:"),l=p(),m=a("ul"),F=a("li"),we=t("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),R=a("li"),ae=t("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),$=a("p"),Te=t(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=t("model.fit()"),ve=t(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=a("code"),Me=t("model.fit()"),ie=t(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=t("fit()"),pe=t(" and "),G=a("code"),qe=t("predict()"),ue=t(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=t("Functional"),ye=t(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),C=a("ul"),P=a("li"),me=t("a single Tensor with "),H=a("code"),Ee=t("input_ids"),be=t(" only and nothing else: "),U=a("code"),ze=t("model(input_ids)"),Le=p(),z=a("li"),re=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),he=t("model([input_ids, attention_mask])"),Ce=t(" or "),J=a("code"),le=t("model([input_ids, attention_mask, token_type_ids])"),fe=p(),B=a("li"),Ae=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),Pe=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=p(),j=a("p"),je=t(`Note that when creating models and layers with
`),N=a("a"),Ne=t("subclassing"),Se=t(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){c=r(v,"P",{});var q=i(c);b=n(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var Xe=i(g);_=n(Xe,"transformers"),Xe.forEach(o),y=n(q," accept two formats as input:"),q.forEach(o),l=u(v),m=r(v,"UL",{});var te=i(m);F=r(te,"LI",{});var Ye=i(F);we=n(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(o),_e=u(te),R=r(te,"LI",{});var Je=i(R);ae=n(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(o),te.forEach(o),se=u(v),$=r(v,"P",{});var E=i($);Te=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(o),ve=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),O=r(E,"CODE",{});var Ze=i(O);Me=n(Ze,"model.fit()"),Ze.forEach(o),ie=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(E,"CODE",{});var We=i(K);$e=n(We,"fit()"),We.forEach(o),pe=n(E," and "),G=r(E,"CODE",{});var eo=i(G);qe=n(eo,"predict()"),eo.forEach(o),ue=n(E,`, such as when creating your own layers or models with
the Keras `),X=r(E,"CODE",{});var oo=i(X);Fe=n(oo,"Functional"),oo.forEach(o),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(o),ee=u(v),C=r(v,"UL",{});var D=i(C);P=r(D,"LI",{});var Z=i(P);me=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var to=i(H);Ee=n(to,"input_ids"),to.forEach(o),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var no=i(U);ze=n(no,"model(input_ids)"),no.forEach(o),Z.forEach(o),Le=u(D),z=r(D,"LI",{});var Q=i(z);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var so=i(Y);he=n(so,"model([input_ids, attention_mask])"),so.forEach(o),Ce=n(Q," or "),J=r(Q,"CODE",{});var Oe=i(J);le=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(o),Q.forEach(o),fe=u(D),B=r(D,"LI",{});var Ie=i(B);Ae=n(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ie,"CODE",{});var ao=i(S);Pe=n(ao,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ao.forEach(o),Ie.forEach(o),D.forEach(o),oe=u(v),j=r(v,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(o),Se=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(o),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(v,q){h(v,c,q),e(c,b),e(c,g),e(g,_),e(c,y),h(v,l,q),h(v,m,q),e(m,F),e(F,we),e(m,_e),e(m,R),e(R,ae),h(v,se,q),h(v,$,q),e($,Te),e($,V),e(V,xe),e($,ve),e($,O),e(O,Me),e($,ie),e($,K),e(K,$e),e($,pe),e($,G),e(G,qe),e($,ue),e($,X),e(X,Fe),e($,ye),h(v,ee,q),h(v,C,q),e(C,P),e(P,me),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(C,Le),e(C,z),e(z,re),e(z,Y),e(Y,he),e(z,Ce),e(z,J),e(J,le),e(C,fe),e(C,B),e(B,Ae),e(B,S),e(S,Pe),h(v,oe,q),h(v,j,q),e(j,je),e(j,N),e(N,Ne),e(j,Se)},d(v){v&&o(c),v&&o(l),v&&o(m),v&&o(se),v&&o($),v&&o(ee),v&&o(C),v&&o(oe),v&&o(j)}}}function Wy(A){let c,b,g,_,y;return{c(){c=a("p"),b=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=t("Module"),y=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(m,"CODE",{});var F=i(g);_=n(F,"Module"),F.forEach(o),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){h(l,c,m),e(c,b),e(c,g),e(g,_),e(c,y)},d(l){l&&o(c)}}}function By(A){let c,b,g,_,y;return _=new yt({props:{code:`from transformers import AutoProcessor, TFAutoModelForQuestionAnswering
from datasets import load_dataset
import tensorflow as tf

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv3-base", apply_ocr=False)
model = TFAutoModelForQuestionAnswering.from_pretrained("microsoft/layoutlmv3-base")

dataset = load_dataset("nielsr/funsd-layoutlmv3", split="train")
example = dataset[0]
image = example["image"]
question = "what's his name?"
words = example["tokens"]
boxes = example["bboxes"]

encoding = processor(image, question, words, boxes=boxes, return_tensors="tf")
start_positions = tf.convert_to_tensor([1])
end_positions = tf.convert_to_tensor([3])

outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFAutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>, apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv3-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd-layoutlmv3&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = example[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;tokens&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = tf.convert_to_tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = tf.convert_to_tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){c=a("p"),b=t("Examples:"),g=p(),L(_.$$.fragment)},l(l){c=r(l,"P",{});var m=i(c);b=n(m,"Examples:"),m.forEach(o),g=u(l),k(_.$$.fragment,l)},m(l,m){h(l,c,m),e(c,b),h(l,g,m),w(_,l,m),y=!0},p:vt,i(l){y||(T(_.$$.fragment,l),y=!0)},o(l){x(_.$$.fragment,l),y=!1},d(l){l&&o(c),l&&o(g),M(_,l)}}}function Qy(A){let c,b,g,_,y,l,m,F,we,_e,R,ae,se,$,Te,V,xe,ve,O,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,me,H,Ee,be,U,ze,Le,z,re,Y,he,Ce,J,le,fe,B,Ae,S,Pe,oe,j,je,N,Ne,Se,v,q,Xe,te,Ye,Je,E,ge,Ze,We,eo,oo,D,Z,to,no,Q,so,Oe,Ie,ao,de,De,kd,Mn,wd,Td,el,bt,hg,ol,Lt,xd,ya,Md,$d,tl,He,qd,$n,Fd,Ed,qn,zd,Cd,Fn,Ad,Pd,En,jd,Nd,zn,Sd,Od,nl,Vo,kt,yr,Cn,Id,br,Dd,sl,ba,Rd,al,wt,rl,An,il,La,Tt,ka,Wd,Bd,Pn,Qd,Ud,ll,jn,dl,Oo,Io,wa,Vd,Hd,Nn,Kd,Gd,Sn,Xd,Yd,Jd,lo,Zd,On,ec,oc,Ta,tc,nc,In,sc,ac,xa,rc,ic,lc,Ho,dc,Dn,cc,pc,Ma,uc,mc,cl,Rn,pl,$a,xt,qa,hc,fc,Wn,gc,_c,ul,Ko,Mt,Lr,Bn,vc,kr,yc,ml,co,Qn,bc,Go,Lc,Fa,kc,wc,Un,Tc,xc,Mc,Xo,$c,Ea,qc,Fc,za,Ec,zc,Cc,$t,hl,Yo,qt,wr,Vn,Ac,Tr,Pc,fl,Co,Hn,jc,xr,Nc,Sc,Ft,Kn,Oc,Mr,Ic,gl,Jo,Et,$r,Gn,Dc,qr,Rc,_l,Be,Xn,Wc,Re,Bc,Fr,Qc,Uc,Ca,Vc,Hc,Er,Kc,Gc,zr,Xc,Yc,Cr,Jc,Zc,Ar,ep,op,Pr,tp,np,sp,Yn,ap,Aa,rp,ip,lp,Pa,ja,dp,cp,pp,zt,Jn,up,jr,mp,hp,Na,Zn,vl,Zo,Ct,Nr,es,fp,Sr,gp,yl,po,os,_p,ts,vp,Or,yp,bp,Lp,ns,kp,Sa,wp,Tp,xp,At,ss,Mp,Ir,$p,bl,et,Pt,Dr,as,qp,Rr,Fp,Ll,ro,rs,Ep,Wr,zp,Cp,Oa,Ia,Ap,Pp,jp,ce,Np,Da,Sp,Op,Ra,Ip,Dp,Wa,Rp,Wp,Br,Bp,Qp,Qr,Up,Vp,Ur,Hp,Kp,Vr,Gp,Xp,Hr,Yp,Jp,Kr,Zp,eu,ou,Do,is,tu,I,nu,Gr,su,au,ls,Xr,ru,iu,lu,Ba,du,cu,Yr,pu,uu,Jr,mu,hu,ds,Zr,fu,gu,_u,ei,vu,yu,Qa,bu,Lu,oi,ku,wu,ti,Tu,xu,ni,Mu,$u,si,qu,Fu,ai,Eu,zu,cs,ri,Cu,Au,Pu,ii,ju,Nu,Su,li,Ou,kl,ot,jt,di,ps,Iu,ci,Du,wl,Ao,us,Ru,ms,Wu,hs,Bu,Qu,Uu,yo,fs,Vu,tt,Hu,Ua,Ku,Gu,pi,Xu,Yu,Ju,Nt,Zu,St,Tl,nt,Ot,ui,gs,em,mi,om,xl,uo,_s,tm,vs,nm,ys,sm,am,rm,bs,im,Ls,lm,dm,cm,bo,ks,pm,st,um,Va,mm,hm,hi,fm,gm,_m,It,vm,Dt,Ml,at,Rt,fi,ws,ym,gi,bm,$l,mo,Ts,Lm,ho,km,xs,wm,Tm,Ms,xm,Mm,$s,$m,qm,qs,Fm,Em,zm,Fs,Cm,Es,Am,Pm,jm,Lo,zs,Nm,rt,Sm,Ha,Om,Im,_i,Dm,Rm,Wm,Wt,Bm,Bt,ql,it,Qt,vi,Cs,Qm,yi,Um,Fl,fo,As,Vm,Po,Hm,Ps,Km,Gm,bi,Xm,Ym,Li,Jm,Zm,eh,js,oh,Ns,th,nh,sh,ko,Ss,ah,lt,rh,Ka,ih,lh,ki,dh,ch,ph,Ut,uh,Vt,El,dt,Ht,wi,Os,mh,Ti,hh,zl,io,Is,fh,Ds,gh,Ga,_h,vh,yh,Rs,bh,Ws,Lh,kh,wh,Kt,Th,wo,Bs,xh,ct,Mh,Xa,$h,qh,xi,Fh,Eh,zh,Gt,Ch,Xt,Cl,pt,Yt,Mi,Qs,Ah,$i,Ph,Al,Qe,Us,jh,Vs,Nh,Hs,Sh,Oh,Ih,Ks,Dh,Ya,Rh,Wh,Bh,Gs,Qh,Xs,Uh,Vh,Hh,Jt,Kh,To,Ys,Gh,ut,Xh,Ja,Yh,Jh,qi,Zh,ef,of,Zt,tf,en,Pl,mt,on,Fi,Js,nf,Ei,sf,jl,Ue,Zs,af,go,rf,ea,lf,df,oa,cf,pf,ta,uf,mf,na,hf,ff,gf,sa,_f,Za,vf,yf,bf,aa,Lf,ra,kf,wf,Tf,tn,xf,xo,ia,Mf,ht,$f,er,qf,Ff,zi,Ef,zf,Cf,nn,Af,sn,Nl,ft,an,Ci,la,Pf,Ai,jf,Sl,Ve,da,Nf,jo,Sf,ca,Of,If,Pi,Df,Rf,ji,Wf,Bf,Qf,pa,Uf,or,Vf,Hf,Kf,ua,Gf,ma,Xf,Yf,Jf,rn,Zf,Mo,ha,eg,gt,og,tr,tg,ng,Ni,sg,ag,rg,ln,ig,dn,Ol;return l=new Ge({}),$=new Ge({}),Cn=new Ge({}),wt=new vo({props:{$$slots:{default:[ky]},$$scope:{ctx:A}}}),An=new mg({props:{pipeline:"text-classification"}}),jn=new mg({props:{pipeline:"token-classification"}}),Rn=new mg({props:{pipeline:"question-answering"}}),Bn=new Ge({}),Qn=new ne({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LayoutLMv3 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv3Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMv3Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMv3Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMv3Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMv3Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMv3Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMv3Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMv3Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMv3Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv3Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMv3Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMv3Config.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"},{anchor:"transformers.LayoutLMv3Config.coordinate_size",description:`<strong>coordinate_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>128</code>) &#x2014;
Dimension of the coordinate embeddings.`,name:"coordinate_size"},{anchor:"transformers.LayoutLMv3Config.shape_size",description:`<strong>shape_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>128</code>) &#x2014;
Dimension of the width and height embeddings.`,name:"shape_size"},{anchor:"transformers.LayoutLMv3Config.has_relative_attention_bias",description:`<strong>has_relative_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a relative attention bias in the self-attention mechanism.`,name:"has_relative_attention_bias"},{anchor:"transformers.LayoutLMv3Config.rel_pos_bins",description:`<strong>rel_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of relative position bins to be used in the self-attention mechanism.`,name:"rel_pos_bins"},{anchor:"transformers.LayoutLMv3Config.max_rel_pos",description:`<strong>max_rel_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum number of relative positions to be used in the self-attention mechanism.`,name:"max_rel_pos"},{anchor:"transformers.LayoutLMv3Config.max_rel_2d_pos",description:`<strong>max_rel_2d_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum number of relative 2D positions in the self-attention mechanism.`,name:"max_rel_2d_pos"},{anchor:"transformers.LayoutLMv3Config.rel_2d_pos_bins",description:`<strong>rel_2d_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of 2D relative position bins in the self-attention mechanism.`,name:"rel_2d_pos_bins"},{anchor:"transformers.LayoutLMv3Config.has_spatial_attention_bias",description:`<strong>has_spatial_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a spatial attention bias in the self-attention mechanism.`,name:"has_spatial_attention_bias"},{anchor:"transformers.LayoutLMv3Config.visual_embed",description:`<strong>visual_embed</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add patch embeddings.`,name:"visual_embed"},{anchor:"transformers.LayoutLMv3Config.input_size",description:`<strong>input_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of the images.`,name:"input_size"},{anchor:"transformers.LayoutLMv3Config.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of channels of the images.`,name:"num_channels"},{anchor:"transformers.LayoutLMv3Config.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of the patches.`,name:"patch_size"},{anchor:"transformers.LayoutLMv3Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L40"}}),$t=new _t({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[wy]},$$scope:{ctx:A}}}),Vn=new Ge({}),Hn=new ne({props:{name:"class transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor",anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_rescale",val:": bool = True"},{name:"rescale_value",val:": float = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.Iterable[float]] = None"},{name:"image_std",val:": typing.Union[float, typing.Iterable[float]] = None"},{name:"apply_ocr",val:": bool = True"},{name:"ocr_lang",val:": typing.Optional[str] = None"},{name:"tesseract_config",val:": typing.Optional[str] = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be
overridden by <code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after resizing. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in <code>preprocess</code>.`,name:"resample"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image&#x2019;s pixel values by the specified <code>rescale_value</code>. Can be overridden by
<code>do_rescale</code> in <code>preprocess</code>.`,name:"do_rescale"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1 / 255) &#x2014;
Value by which the image&#x2019;s pixel values are rescaled. Can be overridden by <code>rescale_factor</code> in
<code>preprocess</code>.`,name:"rescale_factor"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>Iterable[float]</code> or <code>float</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.image_std",description:`<strong>image_std</strong> (<code>Iterable[float]</code> or <code>float</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes. Can be overridden by
the <code>apply_ocr</code> parameter in the <code>preprocess</code> method.`,name:"apply_ocr"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used. Can be overridden by the <code>ocr_lang</code> parameter in the <code>preprocess</code> method.`,name:"ocr_lang"},{anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract. For example: &#x2018;&#x2014;psm 6&#x2019;. Can be overridden by the <code>tesseract_config</code> parameter in the
<code>preprocess</code> method.`,name:"tesseract_config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/image_processing_layoutlmv3.py#L106"}}),Kn=new ne({props:{name:"__call__",anchor:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L52"}}),Gn=new Ge({}),Xn=new ne({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv3Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LayoutLMv3Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LayoutLMv3Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutLMv3Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutLMv3Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv3Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv3Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv3Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv3Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LayoutLMv3Tokenizer.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv3Tokenizer.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv3Tokenizer.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),Jn=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),Zn=new ne({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),es=new Ge({}),os=new ne({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv3TokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LayoutLMv3TokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LayoutLMv3TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv3TokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LayoutLMv3TokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"},{anchor:"transformers.LayoutLMv3TokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv3TokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv3TokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),ss=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),as=new Ge({}),rs=new ne({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),is=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),ps=new Ge({}),us=new ne({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L754"}}),fs=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.LayoutLMv3Model.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, token_sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, token_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L845",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nt=new vo({props:{$$slots:{default:[Ty]},$$scope:{ctx:A}}}),St=new _t({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[xy]},$$scope:{ctx:A}}}),gs=new Ge({}),_s=new ne({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1290"}}),ks=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1302",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),It=new vo({props:{$$slots:{default:[My]},$$scope:{ctx:A}}}),Dt=new _t({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[$y]},$$scope:{ctx:A}}}),ws=new Ge({}),Ts=new ne({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1042"}}),zs=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"pixel_values",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1059",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),Wt=new vo({props:{$$slots:{default:[qy]},$$scope:{ctx:A}}}),Bt=new _t({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[Fy]},$$scope:{ctx:A}}}),Cs=new Ge({}),As=new ne({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1157"}}),Ss=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1170",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
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
`}}),Ut=new vo({props:{$$slots:{default:[Ey]},$$scope:{ctx:A}}}),Vt=new _t({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[zy]},$$scope:{ctx:A}}}),Os=new Ge({}),Is=new ne({props:{name:"class transformers.TFLayoutLMv3Model",anchor:"transformers.TFLayoutLMv3Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1143"}}),Kt=new vo({props:{$$slots:{default:[Cy]},$$scope:{ctx:A}}}),Bs=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3Model.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMv3Model.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMv3Model.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.TFLayoutLMv3Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMv3Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMv3Model.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMv3Model.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMv3Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMv3Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMv3Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMv3Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gt=new vo({props:{$$slots:{default:[Ay]},$$scope:{ctx:A}}}),Xt=new _t({props:{anchor:"transformers.TFLayoutLMv3Model.call.example",$$slots:{default:[Py]},$$scope:{ctx:A}}}),Qs=new Ge({}),Us=new ne({props:{name:"class transformers.TFLayoutLMv3ForSequenceClassification",anchor:"transformers.TFLayoutLMv3ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1268"}}),Jt=new vo({props:{$$slots:{default:[jy]},$$scope:{ctx:A}}}),Ys=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1278",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zt=new vo({props:{$$slots:{default:[Ny]},$$scope:{ctx:A}}}),en=new _t({props:{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.example",$$slots:{default:[Sy]},$$scope:{ctx:A}}}),Js=new Ge({}),Zs=new ne({props:{name:"class transformers.TFLayoutLMv3ForTokenClassification",anchor:"transformers.TFLayoutLMv3ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1379"}}),tn=new vo({props:{$$slots:{default:[Oy]},$$scope:{ctx:A}}}),ia=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1398",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nn=new vo({props:{$$slots:{default:[Iy]},$$scope:{ctx:A}}}),sn=new _t({props:{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.example",$$slots:{default:[Dy]},$$scope:{ctx:A}}}),la=new Ge({}),da=new ne({props:{name:"class transformers.TFLayoutLMv3ForQuestionAnswering",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1508"}}),rn=new vo({props:{$$slots:{default:[Ry]},$$scope:{ctx:A}}}),ha=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images. Each image is divided into patches of shape <code>(num_channels, config.patch_size, config.patch_size)</code> and the total number of patches (=<code>patch_sequence_length</code>) equals to <code>((height / config.patch_size) * (width / config.patch_size))</code>.`,name:"pixel_values"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1520",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
>LayoutLMv3Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new vo({props:{$$slots:{default:[Wy]},$$scope:{ctx:A}}}),dn=new _t({props:{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.example",$$slots:{default:[By]},$$scope:{ctx:A}}}),{c(){c=a("meta"),b=p(),g=a("h1"),_=a("a"),y=a("span"),L(l.$$.fragment),m=p(),F=a("span"),we=t("LayoutLMv3"),_e=p(),R=a("h2"),ae=a("a"),se=a("span"),L($.$$.fragment),Te=p(),V=a("span"),xe=t("Overview"),ve=p(),O=a("p"),Me=t("The LayoutLMv3 model was proposed in "),ie=a("a"),K=t("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),$e=t(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),pe=a("a"),G=t("LayoutLMv2"),qe=t(" by using patch embeddings (as in "),ue=a("a"),X=t("ViT"),Fe=t(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),ye=p(),ee=a("p"),C=t("The abstract from the paper is the following:"),P=p(),me=a("p"),H=a("em"),Ee=t("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),be=p(),U=a("p"),ze=t("Tips:"),Le=p(),z=a("ul"),re=a("li"),Y=t("In terms of data processing, LayoutLMv3 is identical to its predecessor "),he=a("a"),Ce=t("LayoutLMv2"),J=t(", except that:"),le=a("ul"),fe=a("li"),B=t("images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Ae=p(),S=a("li"),Pe=t(`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),oe=a("a"),j=t("LayoutLMv3Processor"),je=t(" which internally combines a "),N=a("a"),Ne=t("LayoutLMv3FeatureExtractor"),Se=t(" (for the image modality) and a "),v=a("a"),q=t("LayoutLMv3Tokenizer"),Xe=t("/"),te=a("a"),Ye=t("LayoutLMv3TokenizerFast"),Je=t(" (for the text modality) to prepare all data for the model."),E=p(),ge=a("li"),Ze=t("Regarding usage of "),We=a("a"),eo=t("LayoutLMv3Processor"),oo=t(", we refer to the "),D=a("a"),Z=t("usage guide"),to=t(" of its predecessor."),no=p(),Q=a("li"),so=t("Demo notebooks for LayoutLMv3 can be found "),Oe=a("a"),Ie=t("here"),ao=t("."),de=p(),De=a("li"),kd=t("Demo scripts can be found "),Mn=a("a"),wd=t("here"),Td=t("."),el=p(),bt=a("img"),ol=p(),Lt=a("small"),xd=t("LayoutLMv3 architecture. Taken from the "),ya=a("a"),Md=t("original paper"),$d=t("."),tl=p(),He=a("p"),qd=t("This model was contributed by "),$n=a("a"),Fd=t("nielsr"),Ed=t(". The TensorFlow version of this model was added by "),qn=a("a"),zd=t("chriskoo"),Cd=t(", "),Fn=a("a"),Ad=t("tokec"),Pd=t(", and "),En=a("a"),jd=t("lre"),Nd=t(". The original code can be found "),zn=a("a"),Sd=t("here"),Od=t("."),nl=p(),Vo=a("h2"),kt=a("a"),yr=a("span"),L(Cn.$$.fragment),Id=p(),br=a("span"),Dd=t("Resources"),sl=p(),ba=a("p"),Rd=t("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with LayoutLMv3. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),al=p(),L(wt.$$.fragment),rl=p(),L(An.$$.fragment),il=p(),La=a("ul"),Tt=a("li"),ka=a("a"),Wd=t("LayoutLMv2ForSequenceClassification"),Bd=t(" is supported by this "),Pn=a("a"),Qd=t("notebook"),Ud=t("."),ll=p(),L(jn.$$.fragment),dl=p(),Oo=a("ul"),Io=a("li"),wa=a("a"),Vd=t("LayoutLMv3ForTokenClassification"),Hd=t(" is supported by this "),Nn=a("a"),Kd=t("example script"),Gd=t(" and "),Sn=a("a"),Xd=t("notebook"),Yd=t("."),Jd=p(),lo=a("li"),Zd=t("A "),On=a("a"),ec=t("notebook"),oc=t(" for how to perform inference with "),Ta=a("a"),tc=t("LayoutLMv2ForTokenClassification"),nc=t(" and a "),In=a("a"),sc=t("notebook"),ac=t(" for how to perform inference when no labels are available with "),xa=a("a"),rc=t("LayoutLMv2ForTokenClassification"),ic=t("."),lc=p(),Ho=a("li"),dc=t("A "),Dn=a("a"),cc=t("notebook"),pc=t(" for how to finetune "),Ma=a("a"),uc=t("LayoutLMv2ForTokenClassification"),mc=t(" with the \u{1F917} Trainer."),cl=p(),L(Rn.$$.fragment),pl=p(),$a=a("ul"),xt=a("li"),qa=a("a"),hc=t("LayoutLMv2ForQuestionAnswering"),fc=t(" is supported by this "),Wn=a("a"),gc=t("notebook"),_c=t("."),ul=p(),Ko=a("h2"),Mt=a("a"),Lr=a("span"),L(Bn.$$.fragment),vc=p(),kr=a("span"),yc=t("LayoutLMv3Config"),ml=p(),co=a("div"),L(Qn.$$.fragment),bc=p(),Go=a("p"),Lc=t("This is the configuration class to store the configuration of a "),Fa=a("a"),kc=t("LayoutLMv3Model"),wc=t(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),Un=a("a"),Tc=t("microsoft/layoutlmv3-base"),xc=t(" architecture."),Mc=p(),Xo=a("p"),$c=t("Configuration objects inherit from "),Ea=a("a"),qc=t("PretrainedConfig"),Fc=t(` and can be used to control the model outputs. Read the
documentation from `),za=a("a"),Ec=t("PretrainedConfig"),zc=t(" for more information."),Cc=p(),L($t.$$.fragment),hl=p(),Yo=a("h2"),qt=a("a"),wr=a("span"),L(Vn.$$.fragment),Ac=p(),Tr=a("span"),Pc=t("LayoutLMv3FeatureExtractor"),fl=p(),Co=a("div"),L(Hn.$$.fragment),jc=p(),xr=a("p"),Nc=t("Constructs a LayoutLMv3 image processor."),Sc=p(),Ft=a("div"),L(Kn.$$.fragment),Oc=p(),Mr=a("p"),Ic=t("Preprocess an image or a batch of images."),gl=p(),Jo=a("h2"),Et=a("a"),$r=a("span"),L(Gn.$$.fragment),Dc=p(),qr=a("span"),Rc=t("LayoutLMv3Tokenizer"),_l=p(),Be=a("div"),L(Xn.$$.fragment),Wc=p(),Re=a("p"),Bc=t("Construct a LayoutLMv3 tokenizer. Based on "),Fr=a("code"),Qc=t("RoBERTatokenizer"),Uc=t(` (Byte Pair Encoding or BPE).
`),Ca=a("a"),Vc=t("LayoutLMv3Tokenizer"),Hc=t(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),Er=a("code"),Kc=t("input_ids"),Gc=t(", "),zr=a("code"),Xc=t("attention_mask"),Yc=t(", "),Cr=a("code"),Jc=t("token_type_ids"),Zc=t(", "),Ar=a("code"),ep=t("bbox"),op=t(", and optional "),Pr=a("code"),tp=t("labels"),np=t(` (for token
classification).`),sp=p(),Yn=a("p"),ap=t("This tokenizer inherits from "),Aa=a("a"),rp=t("PreTrainedTokenizer"),ip=t(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),lp=p(),Pa=a("p"),ja=a("a"),dp=t("LayoutLMv3Tokenizer"),cp=t(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),pp=p(),zt=a("div"),L(Jn.$$.fragment),up=p(),jr=a("p"),mp=t(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),hp=p(),Na=a("div"),L(Zn.$$.fragment),vl=p(),Zo=a("h2"),Ct=a("a"),Nr=a("span"),L(es.$$.fragment),fp=p(),Sr=a("span"),gp=t("LayoutLMv3TokenizerFast"),yl=p(),po=a("div"),L(os.$$.fragment),_p=p(),ts=a("p"),vp=t("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),Or=a("em"),yp=t("tokenizers"),bp=t(" library). Based on BPE."),Lp=p(),ns=a("p"),kp=t("This tokenizer inherits from "),Sa=a("a"),wp=t("PreTrainedTokenizerFast"),Tp=t(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xp=p(),At=a("div"),L(ss.$$.fragment),Mp=p(),Ir=a("p"),$p=t(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),bl=p(),et=a("h2"),Pt=a("a"),Dr=a("span"),L(as.$$.fragment),qp=p(),Rr=a("span"),Fp=t("LayoutLMv3Processor"),Ll=p(),ro=a("div"),L(rs.$$.fragment),Ep=p(),Wr=a("p"),zp=t(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Cp=p(),Oa=a("p"),Ia=a("a"),Ap=t("LayoutLMv3Processor"),Pp=t(" offers all the functionalities you need to prepare data for the model."),jp=p(),ce=a("p"),Np=t("It first uses "),Da=a("a"),Sp=t("LayoutLMv3FeatureExtractor"),Op=t(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Ra=a("a"),Ip=t("LayoutLMv3Tokenizer"),Dp=t(` or
`),Wa=a("a"),Rp=t("LayoutLMv3TokenizerFast"),Wp=t(", which turns the words and bounding boxes into token-level "),Br=a("code"),Bp=t("input_ids"),Qp=t(`,
`),Qr=a("code"),Up=t("attention_mask"),Vp=t(", "),Ur=a("code"),Hp=t("token_type_ids"),Kp=t(", "),Vr=a("code"),Gp=t("bbox"),Xp=t(". Optionally, one can provide integer "),Hr=a("code"),Yp=t("word_labels"),Jp=t(`, which are turned
into token-level `),Kr=a("code"),Zp=t("labels"),eu=t(" for token classification tasks (such as FUNSD, CORD)."),ou=p(),Do=a("div"),L(is.$$.fragment),tu=p(),I=a("p"),nu=t("This method first forwards the "),Gr=a("code"),su=t("images"),au=t(" argument to "),ls=a("a"),Xr=a("strong"),ru=t("call"),iu=t("()"),lu=t(`. In case
`),Ba=a("a"),du=t("LayoutLMv3FeatureExtractor"),cu=t(" was initialized with "),Yr=a("code"),pu=t("apply_ocr"),uu=t(" set to "),Jr=a("code"),mu=t("True"),hu=t(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),ds=a("a"),Zr=a("strong"),fu=t("call"),gu=t("()"),_u=t(` and returns the output,
together with resized and normalized `),ei=a("code"),vu=t("pixel_values"),yu=t(". In case "),Qa=a("a"),bu=t("LayoutLMv3FeatureExtractor"),Lu=t(` was initialized
with `),oi=a("code"),ku=t("apply_ocr"),wu=t(" set to "),ti=a("code"),Tu=t("False"),xu=t(", it passes the words ("),ni=a("code"),Mu=t("text"),$u=t("/`"),si=a("code"),qu=t("text_pair"),Fu=t(") and "),ai=a("code"),Eu=t("boxes"),zu=t(` specified by the user
along with the additional arguments to `),cs=a("a"),ri=a("strong"),Cu=t("call"),Au=t("()"),Pu=t(` and returns the output, together with
resized and normalized `),ii=a("code"),ju=t("pixel_values"),Nu=t("."),Su=p(),li=a("p"),Ou=t("Please refer to the docstring of the above two methods for more information."),kl=p(),ot=a("h2"),jt=a("a"),di=a("span"),L(ps.$$.fragment),Iu=p(),ci=a("span"),Du=t("LayoutLMv3Model"),wl=p(),Ao=a("div"),L(us.$$.fragment),Ru=p(),ms=a("p"),Wu=t(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),hs=a("a"),Bu=t("torch.nn.Module"),Qu=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uu=p(),yo=a("div"),L(fs.$$.fragment),Vu=p(),tt=a("p"),Hu=t("The "),Ua=a("a"),Ku=t("LayoutLMv3Model"),Gu=t(" forward method, overrides the "),pi=a("code"),Xu=t("__call__"),Yu=t(" special method."),Ju=p(),L(Nt.$$.fragment),Zu=p(),L(St.$$.fragment),Tl=p(),nt=a("h2"),Ot=a("a"),ui=a("span"),L(gs.$$.fragment),em=p(),mi=a("span"),om=t("LayoutLMv3ForSequenceClassification"),xl=p(),uo=a("div"),L(_s.$$.fragment),tm=p(),vs=a("p"),nm=t(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),ys=a("a"),sm=t("RVL-CDIP"),am=t(" dataset."),rm=p(),bs=a("p"),im=t("This model is a PyTorch "),Ls=a("a"),lm=t("torch.nn.Module"),dm=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cm=p(),bo=a("div"),L(ks.$$.fragment),pm=p(),st=a("p"),um=t("The "),Va=a("a"),mm=t("LayoutLMv3ForSequenceClassification"),hm=t(" forward method, overrides the "),hi=a("code"),fm=t("__call__"),gm=t(" special method."),_m=p(),L(It.$$.fragment),vm=p(),L(Dt.$$.fragment),Ml=p(),at=a("h2"),Rt=a("a"),fi=a("span"),L(ws.$$.fragment),ym=p(),gi=a("span"),bm=t("LayoutLMv3ForTokenClassification"),$l=p(),mo=a("div"),L(Ts.$$.fragment),Lm=p(),ho=a("p"),km=t(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),xs=a("a"),wm=t("FUNSD"),Tm=t(`,
`),Ms=a("a"),xm=t("SROIE"),Mm=t(", "),$s=a("a"),$m=t("CORD"),qm=t(` and
`),qs=a("a"),Fm=t("Kleister-NDA"),Em=t("."),zm=p(),Fs=a("p"),Cm=t("This model is a PyTorch "),Es=a("a"),Am=t("torch.nn.Module"),Pm=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jm=p(),Lo=a("div"),L(zs.$$.fragment),Nm=p(),rt=a("p"),Sm=t("The "),Ha=a("a"),Om=t("LayoutLMv3ForTokenClassification"),Im=t(" forward method, overrides the "),_i=a("code"),Dm=t("__call__"),Rm=t(" special method."),Wm=p(),L(Wt.$$.fragment),Bm=p(),L(Bt.$$.fragment),ql=p(),it=a("h2"),Qt=a("a"),vi=a("span"),L(Cs.$$.fragment),Qm=p(),yi=a("span"),Um=t("LayoutLMv3ForQuestionAnswering"),Fl=p(),fo=a("div"),L(As.$$.fragment),Vm=p(),Po=a("p"),Hm=t(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),Ps=a("a"),Km=t("DocVQA"),Gm=t(` (a linear layer on top of the text part of the hidden-states output to
compute `),bi=a("code"),Xm=t("span start logits"),Ym=t(" and "),Li=a("code"),Jm=t("span end logits"),Zm=t(")."),eh=p(),js=a("p"),oh=t("This model is a PyTorch "),Ns=a("a"),th=t("torch.nn.Module"),nh=t(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sh=p(),ko=a("div"),L(Ss.$$.fragment),ah=p(),lt=a("p"),rh=t("The "),Ka=a("a"),ih=t("LayoutLMv3ForQuestionAnswering"),lh=t(" forward method, overrides the "),ki=a("code"),dh=t("__call__"),ch=t(" special method."),ph=p(),L(Ut.$$.fragment),uh=p(),L(Vt.$$.fragment),El=p(),dt=a("h2"),Ht=a("a"),wi=a("span"),L(Os.$$.fragment),mh=p(),Ti=a("span"),hh=t("TFLayoutLMv3Model"),zl=p(),io=a("div"),L(Is.$$.fragment),fh=p(),Ds=a("p"),gh=t(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ga=a("a"),_h=t("TFPreTrainedModel"),vh=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh=p(),Rs=a("p"),bh=t("This model is also a "),Ws=a("a"),Lh=t("tf.keras.Model"),kh=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wh=p(),L(Kt.$$.fragment),Th=p(),wo=a("div"),L(Bs.$$.fragment),xh=p(),ct=a("p"),Mh=t("The "),Xa=a("a"),$h=t("TFLayoutLMv3Model"),qh=t(" forward method, overrides the "),xi=a("code"),Fh=t("__call__"),Eh=t(" special method."),zh=p(),L(Gt.$$.fragment),Ch=p(),L(Xt.$$.fragment),Cl=p(),pt=a("h2"),Yt=a("a"),Mi=a("span"),L(Qs.$$.fragment),Ah=p(),$i=a("span"),Ph=t("TFLayoutLMv3ForSequenceClassification"),Al=p(),Qe=a("div"),L(Us.$$.fragment),jh=p(),Vs=a("p"),Nh=t(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Hs=a("a"),Sh=t("RVL-CDIP"),Oh=t(" dataset."),Ih=p(),Ks=a("p"),Dh=t("This model inherits from "),Ya=a("a"),Rh=t("TFPreTrainedModel"),Wh=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bh=p(),Gs=a("p"),Qh=t("This model is also a "),Xs=a("a"),Uh=t("tf.keras.Model"),Vh=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hh=p(),L(Jt.$$.fragment),Kh=p(),To=a("div"),L(Ys.$$.fragment),Gh=p(),ut=a("p"),Xh=t("The "),Ja=a("a"),Yh=t("TFLayoutLMv3ForSequenceClassification"),Jh=t(" forward method, overrides the "),qi=a("code"),Zh=t("__call__"),ef=t(" special method."),of=p(),L(Zt.$$.fragment),tf=p(),L(en.$$.fragment),Pl=p(),mt=a("h2"),on=a("a"),Fi=a("span"),L(Js.$$.fragment),nf=p(),Ei=a("span"),sf=t("TFLayoutLMv3ForTokenClassification"),jl=p(),Ue=a("div"),L(Zs.$$.fragment),af=p(),go=a("p"),rf=t(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),ea=a("a"),lf=t("FUNSD"),df=t(`,
`),oa=a("a"),cf=t("SROIE"),pf=t(", "),ta=a("a"),uf=t("CORD"),mf=t(` and
`),na=a("a"),hf=t("Kleister-NDA"),ff=t("."),gf=p(),sa=a("p"),_f=t("This model inherits from "),Za=a("a"),vf=t("TFPreTrainedModel"),yf=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bf=p(),aa=a("p"),Lf=t("This model is also a "),ra=a("a"),kf=t("tf.keras.Model"),wf=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tf=p(),L(tn.$$.fragment),xf=p(),xo=a("div"),L(ia.$$.fragment),Mf=p(),ht=a("p"),$f=t("The "),er=a("a"),qf=t("TFLayoutLMv3ForTokenClassification"),Ff=t(" forward method, overrides the "),zi=a("code"),Ef=t("__call__"),zf=t(" special method."),Cf=p(),L(nn.$$.fragment),Af=p(),L(sn.$$.fragment),Nl=p(),ft=a("h2"),an=a("a"),Ci=a("span"),L(la.$$.fragment),Pf=p(),Ai=a("span"),jf=t("TFLayoutLMv3ForQuestionAnswering"),Sl=p(),Ve=a("div"),L(da.$$.fragment),Nf=p(),jo=a("p"),Sf=t(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ca=a("a"),Of=t("DocVQA"),If=t(` (a linear layer on top of the text part of the hidden-states output to
compute `),Pi=a("code"),Df=t("span start logits"),Rf=t(" and "),ji=a("code"),Wf=t("span end logits"),Bf=t(")."),Qf=p(),pa=a("p"),Uf=t("This model inherits from "),or=a("a"),Vf=t("TFPreTrainedModel"),Hf=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kf=p(),ua=a("p"),Gf=t("This model is also a "),ma=a("a"),Xf=t("tf.keras.Model"),Yf=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jf=p(),L(rn.$$.fragment),Zf=p(),Mo=a("div"),L(ha.$$.fragment),eg=p(),gt=a("p"),og=t("The "),tr=a("a"),tg=t("TFLayoutLMv3ForQuestionAnswering"),ng=t(" forward method, overrides the "),Ni=a("code"),sg=t("__call__"),ag=t(" special method."),rg=p(),L(ln.$$.fragment),ig=p(),L(dn.$$.fragment),this.h()},l(s){const f=yy('[data-svelte="svelte-1phssyn"]',document.head);c=r(f,"META",{name:!0,content:!0}),f.forEach(o),b=u(s),g=r(s,"H1",{class:!0});var fa=i(g);_=r(fa,"A",{id:!0,class:!0,href:!0});var Si=i(_);y=r(Si,"SPAN",{});var Oi=i(y);k(l.$$.fragment,Oi),Oi.forEach(o),Si.forEach(o),m=u(fa),F=r(fa,"SPAN",{});var Ii=i(F);we=n(Ii,"LayoutLMv3"),Ii.forEach(o),fa.forEach(o),_e=u(s),R=r(s,"H2",{class:!0});var ga=i(R);ae=r(ga,"A",{id:!0,class:!0,href:!0});var Di=i(ae);se=r(Di,"SPAN",{});var Ri=i(se);k($.$$.fragment,Ri),Ri.forEach(o),Di.forEach(o),Te=u(ga),V=r(ga,"SPAN",{});var Wi=i(V);xe=n(Wi,"Overview"),Wi.forEach(o),ga.forEach(o),ve=u(s),O=r(s,"P",{});var No=i(O);Me=n(No,"The LayoutLMv3 model was proposed in "),ie=r(No,"A",{href:!0,rel:!0});var Bi=i(ie);K=n(Bi,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),Bi.forEach(o),$e=n(No,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),pe=r(No,"A",{href:!0});var Qi=i(pe);G=n(Qi,"LayoutLMv2"),Qi.forEach(o),qe=n(No," by using patch embeddings (as in "),ue=r(No,"A",{href:!0});var Ui=i(ue);X=n(Ui,"ViT"),Ui.forEach(o),Fe=n(No,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),No.forEach(o),ye=u(s),ee=r(s,"P",{});var Vi=i(ee);C=n(Vi,"The abstract from the paper is the following:"),Vi.forEach(o),P=u(s),me=r(s,"P",{});var Hi=i(me);H=r(Hi,"EM",{});var Ki=i(H);Ee=n(Ki,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),Ki.forEach(o),Hi.forEach(o),be=u(s),U=r(s,"P",{});var Gi=i(U);ze=n(Gi,"Tips:"),Gi.forEach(o),Le=u(s),z=r(s,"UL",{});var So=i(z);re=r(So,"LI",{});var cn=i(re);Y=n(cn,"In terms of data processing, LayoutLMv3 is identical to its predecessor "),he=r(cn,"A",{href:!0});var Xi=i(he);Ce=n(Xi,"LayoutLMv2"),Xi.forEach(o),J=n(cn,", except that:"),le=r(cn,"UL",{});var _a=i(le);fe=r(_a,"LI",{});var Yi=i(fe);B=n(Yi,"images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Yi.forEach(o),Ae=u(_a),S=r(_a,"LI",{});var _o=i(S);Pe=n(_o,`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),oe=r(_o,"A",{href:!0});var fg=i(oe);j=n(fg,"LayoutLMv3Processor"),fg.forEach(o),je=n(_o," which internally combines a "),N=r(_o,"A",{href:!0});var gg=i(N);Ne=n(gg,"LayoutLMv3FeatureExtractor"),gg.forEach(o),Se=n(_o," (for the image modality) and a "),v=r(_o,"A",{href:!0});var _g=i(v);q=n(_g,"LayoutLMv3Tokenizer"),_g.forEach(o),Xe=n(_o,"/"),te=r(_o,"A",{href:!0});var vg=i(te);Ye=n(vg,"LayoutLMv3TokenizerFast"),vg.forEach(o),Je=n(_o," (for the text modality) to prepare all data for the model."),_o.forEach(o),_a.forEach(o),cn.forEach(o),E=u(So),ge=r(So,"LI",{});var nr=i(ge);Ze=n(nr,"Regarding usage of "),We=r(nr,"A",{href:!0});var yg=i(We);eo=n(yg,"LayoutLMv3Processor"),yg.forEach(o),oo=n(nr,", we refer to the "),D=r(nr,"A",{href:!0});var bg=i(D);Z=n(bg,"usage guide"),bg.forEach(o),to=n(nr," of its predecessor."),nr.forEach(o),no=u(So),Q=r(So,"LI",{});var Il=i(Q);so=n(Il,"Demo notebooks for LayoutLMv3 can be found "),Oe=r(Il,"A",{href:!0,rel:!0});var Lg=i(Oe);Ie=n(Lg,"here"),Lg.forEach(o),ao=n(Il,"."),Il.forEach(o),de=u(So),De=r(So,"LI",{});var Dl=i(De);kd=n(Dl,"Demo scripts can be found "),Mn=r(Dl,"A",{href:!0,rel:!0});var kg=i(Mn);wd=n(kg,"here"),kg.forEach(o),Td=n(Dl,"."),Dl.forEach(o),So.forEach(o),el=u(s),bt=r(s,"IMG",{src:!0,alt:!0,width:!0}),ol=u(s),Lt=r(s,"SMALL",{});var Rl=i(Lt);xd=n(Rl,"LayoutLMv3 architecture. Taken from the "),ya=r(Rl,"A",{href:!0});var wg=i(ya);Md=n(wg,"original paper"),wg.forEach(o),$d=n(Rl,"."),Rl.forEach(o),tl=u(s),He=r(s,"P",{});var $o=i(He);qd=n($o,"This model was contributed by "),$n=r($o,"A",{href:!0,rel:!0});var Tg=i($n);Fd=n(Tg,"nielsr"),Tg.forEach(o),Ed=n($o,". The TensorFlow version of this model was added by "),qn=r($o,"A",{href:!0,rel:!0});var xg=i(qn);zd=n(xg,"chriskoo"),xg.forEach(o),Cd=n($o,", "),Fn=r($o,"A",{href:!0,rel:!0});var Mg=i(Fn);Ad=n(Mg,"tokec"),Mg.forEach(o),Pd=n($o,", and "),En=r($o,"A",{href:!0,rel:!0});var $g=i(En);jd=n($g,"lre"),$g.forEach(o),Nd=n($o,". The original code can be found "),zn=r($o,"A",{href:!0,rel:!0});var qg=i(zn);Sd=n(qg,"here"),qg.forEach(o),Od=n($o,"."),$o.forEach(o),nl=u(s),Vo=r(s,"H2",{class:!0});var Wl=i(Vo);kt=r(Wl,"A",{id:!0,class:!0,href:!0});var Fg=i(kt);yr=r(Fg,"SPAN",{});var Eg=i(yr);k(Cn.$$.fragment,Eg),Eg.forEach(o),Fg.forEach(o),Id=u(Wl),br=r(Wl,"SPAN",{});var zg=i(br);Dd=n(zg,"Resources"),zg.forEach(o),Wl.forEach(o),sl=u(s),ba=r(s,"P",{});var Cg=i(ba);Rd=n(Cg,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with LayoutLMv3. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Cg.forEach(o),al=u(s),k(wt.$$.fragment,s),rl=u(s),k(An.$$.fragment,s),il=u(s),La=r(s,"UL",{});var Ag=i(La);Tt=r(Ag,"LI",{});var Ji=i(Tt);ka=r(Ji,"A",{href:!0});var Pg=i(ka);Wd=n(Pg,"LayoutLMv2ForSequenceClassification"),Pg.forEach(o),Bd=n(Ji," is supported by this "),Pn=r(Ji,"A",{href:!0,rel:!0});var jg=i(Pn);Qd=n(jg,"notebook"),jg.forEach(o),Ud=n(Ji,"."),Ji.forEach(o),Ag.forEach(o),ll=u(s),k(jn.$$.fragment,s),dl=u(s),Oo=r(s,"UL",{});var sr=i(Oo);Io=r(sr,"LI",{});var va=i(Io);wa=r(va,"A",{href:!0});var Ng=i(wa);Vd=n(Ng,"LayoutLMv3ForTokenClassification"),Ng.forEach(o),Hd=n(va," is supported by this "),Nn=r(va,"A",{href:!0,rel:!0});var Sg=i(Nn);Kd=n(Sg,"example script"),Sg.forEach(o),Gd=n(va," and "),Sn=r(va,"A",{href:!0,rel:!0});var Og=i(Sn);Xd=n(Og,"notebook"),Og.forEach(o),Yd=n(va,"."),va.forEach(o),Jd=u(sr),lo=r(sr,"LI",{});var Ro=i(lo);Zd=n(Ro,"A "),On=r(Ro,"A",{href:!0,rel:!0});var Ig=i(On);ec=n(Ig,"notebook"),Ig.forEach(o),oc=n(Ro," for how to perform inference with "),Ta=r(Ro,"A",{href:!0});var Dg=i(Ta);tc=n(Dg,"LayoutLMv2ForTokenClassification"),Dg.forEach(o),nc=n(Ro," and a "),In=r(Ro,"A",{href:!0,rel:!0});var Rg=i(In);sc=n(Rg,"notebook"),Rg.forEach(o),ac=n(Ro," for how to perform inference when no labels are available with "),xa=r(Ro,"A",{href:!0});var Wg=i(xa);rc=n(Wg,"LayoutLMv2ForTokenClassification"),Wg.forEach(o),ic=n(Ro,"."),Ro.forEach(o),lc=u(sr),Ho=r(sr,"LI",{});var ar=i(Ho);dc=n(ar,"A "),Dn=r(ar,"A",{href:!0,rel:!0});var Bg=i(Dn);cc=n(Bg,"notebook"),Bg.forEach(o),pc=n(ar," for how to finetune "),Ma=r(ar,"A",{href:!0});var Qg=i(Ma);uc=n(Qg,"LayoutLMv2ForTokenClassification"),Qg.forEach(o),mc=n(ar," with the \u{1F917} Trainer."),ar.forEach(o),sr.forEach(o),cl=u(s),k(Rn.$$.fragment,s),pl=u(s),$a=r(s,"UL",{});var Ug=i($a);xt=r(Ug,"LI",{});var Zi=i(xt);qa=r(Zi,"A",{href:!0});var Vg=i(qa);hc=n(Vg,"LayoutLMv2ForQuestionAnswering"),Vg.forEach(o),fc=n(Zi," is supported by this "),Wn=r(Zi,"A",{href:!0,rel:!0});var Hg=i(Wn);gc=n(Hg,"notebook"),Hg.forEach(o),_c=n(Zi,"."),Zi.forEach(o),Ug.forEach(o),ul=u(s),Ko=r(s,"H2",{class:!0});var Bl=i(Ko);Mt=r(Bl,"A",{id:!0,class:!0,href:!0});var Kg=i(Mt);Lr=r(Kg,"SPAN",{});var Gg=i(Lr);k(Bn.$$.fragment,Gg),Gg.forEach(o),Kg.forEach(o),vc=u(Bl),kr=r(Bl,"SPAN",{});var Xg=i(kr);yc=n(Xg,"LayoutLMv3Config"),Xg.forEach(o),Bl.forEach(o),ml=u(s),co=r(s,"DIV",{class:!0});var pn=i(co);k(Qn.$$.fragment,pn),bc=u(pn),Go=r(pn,"P",{});var rr=i(Go);Lc=n(rr,"This is the configuration class to store the configuration of a "),Fa=r(rr,"A",{href:!0});var Yg=i(Fa);kc=n(Yg,"LayoutLMv3Model"),Yg.forEach(o),wc=n(rr,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),Un=r(rr,"A",{href:!0,rel:!0});var Jg=i(Un);Tc=n(Jg,"microsoft/layoutlmv3-base"),Jg.forEach(o),xc=n(rr," architecture."),rr.forEach(o),Mc=u(pn),Xo=r(pn,"P",{});var ir=i(Xo);$c=n(ir,"Configuration objects inherit from "),Ea=r(ir,"A",{href:!0});var Zg=i(Ea);qc=n(Zg,"PretrainedConfig"),Zg.forEach(o),Fc=n(ir,` and can be used to control the model outputs. Read the
documentation from `),za=r(ir,"A",{href:!0});var e_=i(za);Ec=n(e_,"PretrainedConfig"),e_.forEach(o),zc=n(ir," for more information."),ir.forEach(o),Cc=u(pn),k($t.$$.fragment,pn),pn.forEach(o),hl=u(s),Yo=r(s,"H2",{class:!0});var Ql=i(Yo);qt=r(Ql,"A",{id:!0,class:!0,href:!0});var o_=i(qt);wr=r(o_,"SPAN",{});var t_=i(wr);k(Vn.$$.fragment,t_),t_.forEach(o),o_.forEach(o),Ac=u(Ql),Tr=r(Ql,"SPAN",{});var n_=i(Tr);Pc=n(n_,"LayoutLMv3FeatureExtractor"),n_.forEach(o),Ql.forEach(o),fl=u(s),Co=r(s,"DIV",{class:!0});var lr=i(Co);k(Hn.$$.fragment,lr),jc=u(lr),xr=r(lr,"P",{});var s_=i(xr);Nc=n(s_,"Constructs a LayoutLMv3 image processor."),s_.forEach(o),Sc=u(lr),Ft=r(lr,"DIV",{class:!0});var Ul=i(Ft);k(Kn.$$.fragment,Ul),Oc=u(Ul),Mr=r(Ul,"P",{});var a_=i(Mr);Ic=n(a_,"Preprocess an image or a batch of images."),a_.forEach(o),Ul.forEach(o),lr.forEach(o),gl=u(s),Jo=r(s,"H2",{class:!0});var Vl=i(Jo);Et=r(Vl,"A",{id:!0,class:!0,href:!0});var r_=i(Et);$r=r(r_,"SPAN",{});var i_=i($r);k(Gn.$$.fragment,i_),i_.forEach(o),r_.forEach(o),Dc=u(Vl),qr=r(Vl,"SPAN",{});var l_=i(qr);Rc=n(l_,"LayoutLMv3Tokenizer"),l_.forEach(o),Vl.forEach(o),_l=u(s),Be=r(s,"DIV",{class:!0});var qo=i(Be);k(Xn.$$.fragment,qo),Wc=u(qo),Re=r(qo,"P",{});var Ke=i(Re);Bc=n(Ke,"Construct a LayoutLMv3 tokenizer. Based on "),Fr=r(Ke,"CODE",{});var d_=i(Fr);Qc=n(d_,"RoBERTatokenizer"),d_.forEach(o),Uc=n(Ke,` (Byte Pair Encoding or BPE).
`),Ca=r(Ke,"A",{href:!0});var c_=i(Ca);Vc=n(c_,"LayoutLMv3Tokenizer"),c_.forEach(o),Hc=n(Ke,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),Er=r(Ke,"CODE",{});var p_=i(Er);Kc=n(p_,"input_ids"),p_.forEach(o),Gc=n(Ke,", "),zr=r(Ke,"CODE",{});var u_=i(zr);Xc=n(u_,"attention_mask"),u_.forEach(o),Yc=n(Ke,", "),Cr=r(Ke,"CODE",{});var m_=i(Cr);Jc=n(m_,"token_type_ids"),m_.forEach(o),Zc=n(Ke,", "),Ar=r(Ke,"CODE",{});var h_=i(Ar);ep=n(h_,"bbox"),h_.forEach(o),op=n(Ke,", and optional "),Pr=r(Ke,"CODE",{});var f_=i(Pr);tp=n(f_,"labels"),f_.forEach(o),np=n(Ke,` (for token
classification).`),Ke.forEach(o),sp=u(qo),Yn=r(qo,"P",{});var Hl=i(Yn);ap=n(Hl,"This tokenizer inherits from "),Aa=r(Hl,"A",{href:!0});var g_=i(Aa);rp=n(g_,"PreTrainedTokenizer"),g_.forEach(o),ip=n(Hl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Hl.forEach(o),lp=u(qo),Pa=r(qo,"P",{});var lg=i(Pa);ja=r(lg,"A",{href:!0});var __=i(ja);dp=n(__,"LayoutLMv3Tokenizer"),__.forEach(o),cp=n(lg,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),lg.forEach(o),pp=u(qo),zt=r(qo,"DIV",{class:!0});var Kl=i(zt);k(Jn.$$.fragment,Kl),up=u(Kl),jr=r(Kl,"P",{});var v_=i(jr);mp=n(v_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),v_.forEach(o),Kl.forEach(o),hp=u(qo),Na=r(qo,"DIV",{class:!0});var y_=i(Na);k(Zn.$$.fragment,y_),y_.forEach(o),qo.forEach(o),vl=u(s),Zo=r(s,"H2",{class:!0});var Gl=i(Zo);Ct=r(Gl,"A",{id:!0,class:!0,href:!0});var b_=i(Ct);Nr=r(b_,"SPAN",{});var L_=i(Nr);k(es.$$.fragment,L_),L_.forEach(o),b_.forEach(o),fp=u(Gl),Sr=r(Gl,"SPAN",{});var k_=i(Sr);gp=n(k_,"LayoutLMv3TokenizerFast"),k_.forEach(o),Gl.forEach(o),yl=u(s),po=r(s,"DIV",{class:!0});var un=i(po);k(os.$$.fragment,un),_p=u(un),ts=r(un,"P",{});var Xl=i(ts);vp=n(Xl,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),Or=r(Xl,"EM",{});var w_=i(Or);yp=n(w_,"tokenizers"),w_.forEach(o),bp=n(Xl," library). Based on BPE."),Xl.forEach(o),Lp=u(un),ns=r(un,"P",{});var Yl=i(ns);kp=n(Yl,"This tokenizer inherits from "),Sa=r(Yl,"A",{href:!0});var T_=i(Sa);wp=n(T_,"PreTrainedTokenizerFast"),T_.forEach(o),Tp=n(Yl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yl.forEach(o),xp=u(un),At=r(un,"DIV",{class:!0});var Jl=i(At);k(ss.$$.fragment,Jl),Mp=u(Jl),Ir=r(Jl,"P",{});var x_=i(Ir);$p=n(x_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),x_.forEach(o),Jl.forEach(o),un.forEach(o),bl=u(s),et=r(s,"H2",{class:!0});var Zl=i(et);Pt=r(Zl,"A",{id:!0,class:!0,href:!0});var M_=i(Pt);Dr=r(M_,"SPAN",{});var $_=i(Dr);k(as.$$.fragment,$_),$_.forEach(o),M_.forEach(o),qp=u(Zl),Rr=r(Zl,"SPAN",{});var q_=i(Rr);Fp=n(q_,"LayoutLMv3Processor"),q_.forEach(o),Zl.forEach(o),Ll=u(s),ro=r(s,"DIV",{class:!0});var Wo=i(ro);k(rs.$$.fragment,Wo),Ep=u(Wo),Wr=r(Wo,"P",{});var F_=i(Wr);zp=n(F_,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),F_.forEach(o),Cp=u(Wo),Oa=r(Wo,"P",{});var dg=i(Oa);Ia=r(dg,"A",{href:!0});var E_=i(Ia);Ap=n(E_,"LayoutLMv3Processor"),E_.forEach(o),Pp=n(dg," offers all the functionalities you need to prepare data for the model."),dg.forEach(o),jp=u(Wo),ce=r(Wo,"P",{});var ke=i(ce);Np=n(ke,"It first uses "),Da=r(ke,"A",{href:!0});var z_=i(Da);Sp=n(z_,"LayoutLMv3FeatureExtractor"),z_.forEach(o),Op=n(ke,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Ra=r(ke,"A",{href:!0});var C_=i(Ra);Ip=n(C_,"LayoutLMv3Tokenizer"),C_.forEach(o),Dp=n(ke,` or
`),Wa=r(ke,"A",{href:!0});var A_=i(Wa);Rp=n(A_,"LayoutLMv3TokenizerFast"),A_.forEach(o),Wp=n(ke,", which turns the words and bounding boxes into token-level "),Br=r(ke,"CODE",{});var P_=i(Br);Bp=n(P_,"input_ids"),P_.forEach(o),Qp=n(ke,`,
`),Qr=r(ke,"CODE",{});var j_=i(Qr);Up=n(j_,"attention_mask"),j_.forEach(o),Vp=n(ke,", "),Ur=r(ke,"CODE",{});var N_=i(Ur);Hp=n(N_,"token_type_ids"),N_.forEach(o),Kp=n(ke,", "),Vr=r(ke,"CODE",{});var S_=i(Vr);Gp=n(S_,"bbox"),S_.forEach(o),Xp=n(ke,". Optionally, one can provide integer "),Hr=r(ke,"CODE",{});var O_=i(Hr);Yp=n(O_,"word_labels"),O_.forEach(o),Jp=n(ke,`, which are turned
into token-level `),Kr=r(ke,"CODE",{});var I_=i(Kr);Zp=n(I_,"labels"),I_.forEach(o),eu=n(ke," for token classification tasks (such as FUNSD, CORD)."),ke.forEach(o),ou=u(Wo),Do=r(Wo,"DIV",{class:!0});var dr=i(Do);k(is.$$.fragment,dr),tu=u(dr),I=r(dr,"P",{});var W=i(I);nu=n(W,"This method first forwards the "),Gr=r(W,"CODE",{});var D_=i(Gr);su=n(D_,"images"),D_.forEach(o),au=n(W," argument to "),ls=r(W,"A",{href:!0});var cg=i(ls);Xr=r(cg,"STRONG",{});var R_=i(Xr);ru=n(R_,"call"),R_.forEach(o),iu=n(cg,"()"),cg.forEach(o),lu=n(W,`. In case
`),Ba=r(W,"A",{href:!0});var W_=i(Ba);du=n(W_,"LayoutLMv3FeatureExtractor"),W_.forEach(o),cu=n(W," was initialized with "),Yr=r(W,"CODE",{});var B_=i(Yr);pu=n(B_,"apply_ocr"),B_.forEach(o),uu=n(W," set to "),Jr=r(W,"CODE",{});var Q_=i(Jr);mu=n(Q_,"True"),Q_.forEach(o),hu=n(W,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),ds=r(W,"A",{href:!0});var pg=i(ds);Zr=r(pg,"STRONG",{});var U_=i(Zr);fu=n(U_,"call"),U_.forEach(o),gu=n(pg,"()"),pg.forEach(o),_u=n(W,` and returns the output,
together with resized and normalized `),ei=r(W,"CODE",{});var V_=i(ei);vu=n(V_,"pixel_values"),V_.forEach(o),yu=n(W,". In case "),Qa=r(W,"A",{href:!0});var H_=i(Qa);bu=n(H_,"LayoutLMv3FeatureExtractor"),H_.forEach(o),Lu=n(W,` was initialized
with `),oi=r(W,"CODE",{});var K_=i(oi);ku=n(K_,"apply_ocr"),K_.forEach(o),wu=n(W," set to "),ti=r(W,"CODE",{});var G_=i(ti);Tu=n(G_,"False"),G_.forEach(o),xu=n(W,", it passes the words ("),ni=r(W,"CODE",{});var X_=i(ni);Mu=n(X_,"text"),X_.forEach(o),$u=n(W,"/`"),si=r(W,"CODE",{});var Y_=i(si);qu=n(Y_,"text_pair"),Y_.forEach(o),Fu=n(W,") and "),ai=r(W,"CODE",{});var J_=i(ai);Eu=n(J_,"boxes"),J_.forEach(o),zu=n(W,` specified by the user
along with the additional arguments to `),cs=r(W,"A",{href:!0});var ug=i(cs);ri=r(ug,"STRONG",{});var Z_=i(ri);Cu=n(Z_,"call"),Z_.forEach(o),Au=n(ug,"()"),ug.forEach(o),Pu=n(W,` and returns the output, together with
resized and normalized `),ii=r(W,"CODE",{});var ev=i(ii);ju=n(ev,"pixel_values"),ev.forEach(o),Nu=n(W,"."),W.forEach(o),Su=u(dr),li=r(dr,"P",{});var ov=i(li);Ou=n(ov,"Please refer to the docstring of the above two methods for more information."),ov.forEach(o),dr.forEach(o),Wo.forEach(o),kl=u(s),ot=r(s,"H2",{class:!0});var ed=i(ot);jt=r(ed,"A",{id:!0,class:!0,href:!0});var tv=i(jt);di=r(tv,"SPAN",{});var nv=i(di);k(ps.$$.fragment,nv),nv.forEach(o),tv.forEach(o),Iu=u(ed),ci=r(ed,"SPAN",{});var sv=i(ci);Du=n(sv,"LayoutLMv3Model"),sv.forEach(o),ed.forEach(o),wl=u(s),Ao=r(s,"DIV",{class:!0});var cr=i(Ao);k(us.$$.fragment,cr),Ru=u(cr),ms=r(cr,"P",{});var od=i(ms);Wu=n(od,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),hs=r(od,"A",{href:!0,rel:!0});var av=i(hs);Bu=n(av,"torch.nn.Module"),av.forEach(o),Qu=n(od,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),od.forEach(o),Uu=u(cr),yo=r(cr,"DIV",{class:!0});var mn=i(yo);k(fs.$$.fragment,mn),Vu=u(mn),tt=r(mn,"P",{});var pr=i(tt);Hu=n(pr,"The "),Ua=r(pr,"A",{href:!0});var rv=i(Ua);Ku=n(rv,"LayoutLMv3Model"),rv.forEach(o),Gu=n(pr," forward method, overrides the "),pi=r(pr,"CODE",{});var iv=i(pi);Xu=n(iv,"__call__"),iv.forEach(o),Yu=n(pr," special method."),pr.forEach(o),Ju=u(mn),k(Nt.$$.fragment,mn),Zu=u(mn),k(St.$$.fragment,mn),mn.forEach(o),cr.forEach(o),Tl=u(s),nt=r(s,"H2",{class:!0});var td=i(nt);Ot=r(td,"A",{id:!0,class:!0,href:!0});var lv=i(Ot);ui=r(lv,"SPAN",{});var dv=i(ui);k(gs.$$.fragment,dv),dv.forEach(o),lv.forEach(o),em=u(td),mi=r(td,"SPAN",{});var cv=i(mi);om=n(cv,"LayoutLMv3ForSequenceClassification"),cv.forEach(o),td.forEach(o),xl=u(s),uo=r(s,"DIV",{class:!0});var hn=i(uo);k(_s.$$.fragment,hn),tm=u(hn),vs=r(hn,"P",{});var nd=i(vs);nm=n(nd,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),ys=r(nd,"A",{href:!0,rel:!0});var pv=i(ys);sm=n(pv,"RVL-CDIP"),pv.forEach(o),am=n(nd," dataset."),nd.forEach(o),rm=u(hn),bs=r(hn,"P",{});var sd=i(bs);im=n(sd,"This model is a PyTorch "),Ls=r(sd,"A",{href:!0,rel:!0});var uv=i(Ls);lm=n(uv,"torch.nn.Module"),uv.forEach(o),dm=n(sd,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sd.forEach(o),cm=u(hn),bo=r(hn,"DIV",{class:!0});var fn=i(bo);k(ks.$$.fragment,fn),pm=u(fn),st=r(fn,"P",{});var ur=i(st);um=n(ur,"The "),Va=r(ur,"A",{href:!0});var mv=i(Va);mm=n(mv,"LayoutLMv3ForSequenceClassification"),mv.forEach(o),hm=n(ur," forward method, overrides the "),hi=r(ur,"CODE",{});var hv=i(hi);fm=n(hv,"__call__"),hv.forEach(o),gm=n(ur," special method."),ur.forEach(o),_m=u(fn),k(It.$$.fragment,fn),vm=u(fn),k(Dt.$$.fragment,fn),fn.forEach(o),hn.forEach(o),Ml=u(s),at=r(s,"H2",{class:!0});var ad=i(at);Rt=r(ad,"A",{id:!0,class:!0,href:!0});var fv=i(Rt);fi=r(fv,"SPAN",{});var gv=i(fi);k(ws.$$.fragment,gv),gv.forEach(o),fv.forEach(o),ym=u(ad),gi=r(ad,"SPAN",{});var _v=i(gi);bm=n(_v,"LayoutLMv3ForTokenClassification"),_v.forEach(o),ad.forEach(o),$l=u(s),mo=r(s,"DIV",{class:!0});var gn=i(mo);k(Ts.$$.fragment,gn),Lm=u(gn),ho=r(gn,"P",{});var Bo=i(ho);km=n(Bo,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),xs=r(Bo,"A",{href:!0,rel:!0});var vv=i(xs);wm=n(vv,"FUNSD"),vv.forEach(o),Tm=n(Bo,`,
`),Ms=r(Bo,"A",{href:!0,rel:!0});var yv=i(Ms);xm=n(yv,"SROIE"),yv.forEach(o),Mm=n(Bo,", "),$s=r(Bo,"A",{href:!0,rel:!0});var bv=i($s);$m=n(bv,"CORD"),bv.forEach(o),qm=n(Bo,` and
`),qs=r(Bo,"A",{href:!0,rel:!0});var Lv=i(qs);Fm=n(Lv,"Kleister-NDA"),Lv.forEach(o),Em=n(Bo,"."),Bo.forEach(o),zm=u(gn),Fs=r(gn,"P",{});var rd=i(Fs);Cm=n(rd,"This model is a PyTorch "),Es=r(rd,"A",{href:!0,rel:!0});var kv=i(Es);Am=n(kv,"torch.nn.Module"),kv.forEach(o),Pm=n(rd,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rd.forEach(o),jm=u(gn),Lo=r(gn,"DIV",{class:!0});var _n=i(Lo);k(zs.$$.fragment,_n),Nm=u(_n),rt=r(_n,"P",{});var mr=i(rt);Sm=n(mr,"The "),Ha=r(mr,"A",{href:!0});var wv=i(Ha);Om=n(wv,"LayoutLMv3ForTokenClassification"),wv.forEach(o),Im=n(mr," forward method, overrides the "),_i=r(mr,"CODE",{});var Tv=i(_i);Dm=n(Tv,"__call__"),Tv.forEach(o),Rm=n(mr," special method."),mr.forEach(o),Wm=u(_n),k(Wt.$$.fragment,_n),Bm=u(_n),k(Bt.$$.fragment,_n),_n.forEach(o),gn.forEach(o),ql=u(s),it=r(s,"H2",{class:!0});var id=i(it);Qt=r(id,"A",{id:!0,class:!0,href:!0});var xv=i(Qt);vi=r(xv,"SPAN",{});var Mv=i(vi);k(Cs.$$.fragment,Mv),Mv.forEach(o),xv.forEach(o),Qm=u(id),yi=r(id,"SPAN",{});var $v=i(yi);Um=n($v,"LayoutLMv3ForQuestionAnswering"),$v.forEach(o),id.forEach(o),Fl=u(s),fo=r(s,"DIV",{class:!0});var vn=i(fo);k(As.$$.fragment,vn),Vm=u(vn),Po=r(vn,"P",{});var yn=i(Po);Hm=n(yn,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),Ps=r(yn,"A",{href:!0,rel:!0});var qv=i(Ps);Km=n(qv,"DocVQA"),qv.forEach(o),Gm=n(yn,` (a linear layer on top of the text part of the hidden-states output to
compute `),bi=r(yn,"CODE",{});var Fv=i(bi);Xm=n(Fv,"span start logits"),Fv.forEach(o),Ym=n(yn," and "),Li=r(yn,"CODE",{});var Ev=i(Li);Jm=n(Ev,"span end logits"),Ev.forEach(o),Zm=n(yn,")."),yn.forEach(o),eh=u(vn),js=r(vn,"P",{});var ld=i(js);oh=n(ld,"This model is a PyTorch "),Ns=r(ld,"A",{href:!0,rel:!0});var zv=i(Ns);th=n(zv,"torch.nn.Module"),zv.forEach(o),nh=n(ld,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ld.forEach(o),sh=u(vn),ko=r(vn,"DIV",{class:!0});var bn=i(ko);k(Ss.$$.fragment,bn),ah=u(bn),lt=r(bn,"P",{});var hr=i(lt);rh=n(hr,"The "),Ka=r(hr,"A",{href:!0});var Cv=i(Ka);ih=n(Cv,"LayoutLMv3ForQuestionAnswering"),Cv.forEach(o),lh=n(hr," forward method, overrides the "),ki=r(hr,"CODE",{});var Av=i(ki);dh=n(Av,"__call__"),Av.forEach(o),ch=n(hr," special method."),hr.forEach(o),ph=u(bn),k(Ut.$$.fragment,bn),uh=u(bn),k(Vt.$$.fragment,bn),bn.forEach(o),vn.forEach(o),El=u(s),dt=r(s,"H2",{class:!0});var dd=i(dt);Ht=r(dd,"A",{id:!0,class:!0,href:!0});var Pv=i(Ht);wi=r(Pv,"SPAN",{});var jv=i(wi);k(Os.$$.fragment,jv),jv.forEach(o),Pv.forEach(o),mh=u(dd),Ti=r(dd,"SPAN",{});var Nv=i(Ti);hh=n(Nv,"TFLayoutLMv3Model"),Nv.forEach(o),dd.forEach(o),zl=u(s),io=r(s,"DIV",{class:!0});var Qo=i(io);k(Is.$$.fragment,Qo),fh=u(Qo),Ds=r(Qo,"P",{});var cd=i(Ds);gh=n(cd,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ga=r(cd,"A",{href:!0});var Sv=i(Ga);_h=n(Sv,"TFPreTrainedModel"),Sv.forEach(o),vh=n(cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cd.forEach(o),yh=u(Qo),Rs=r(Qo,"P",{});var pd=i(Rs);bh=n(pd,"This model is also a "),Ws=r(pd,"A",{href:!0,rel:!0});var Ov=i(Ws);Lh=n(Ov,"tf.keras.Model"),Ov.forEach(o),kh=n(pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pd.forEach(o),wh=u(Qo),k(Kt.$$.fragment,Qo),Th=u(Qo),wo=r(Qo,"DIV",{class:!0});var Ln=i(wo);k(Bs.$$.fragment,Ln),xh=u(Ln),ct=r(Ln,"P",{});var fr=i(ct);Mh=n(fr,"The "),Xa=r(fr,"A",{href:!0});var Iv=i(Xa);$h=n(Iv,"TFLayoutLMv3Model"),Iv.forEach(o),qh=n(fr," forward method, overrides the "),xi=r(fr,"CODE",{});var Dv=i(xi);Fh=n(Dv,"__call__"),Dv.forEach(o),Eh=n(fr," special method."),fr.forEach(o),zh=u(Ln),k(Gt.$$.fragment,Ln),Ch=u(Ln),k(Xt.$$.fragment,Ln),Ln.forEach(o),Qo.forEach(o),Cl=u(s),pt=r(s,"H2",{class:!0});var ud=i(pt);Yt=r(ud,"A",{id:!0,class:!0,href:!0});var Rv=i(Yt);Mi=r(Rv,"SPAN",{});var Wv=i(Mi);k(Qs.$$.fragment,Wv),Wv.forEach(o),Rv.forEach(o),Ah=u(ud),$i=r(ud,"SPAN",{});var Bv=i($i);Ph=n(Bv,"TFLayoutLMv3ForSequenceClassification"),Bv.forEach(o),ud.forEach(o),Al=u(s),Qe=r(s,"DIV",{class:!0});var Fo=i(Qe);k(Us.$$.fragment,Fo),jh=u(Fo),Vs=r(Fo,"P",{});var md=i(Vs);Nh=n(md,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Hs=r(md,"A",{href:!0,rel:!0});var Qv=i(Hs);Sh=n(Qv,"RVL-CDIP"),Qv.forEach(o),Oh=n(md," dataset."),md.forEach(o),Ih=u(Fo),Ks=r(Fo,"P",{});var hd=i(Ks);Dh=n(hd,"This model inherits from "),Ya=r(hd,"A",{href:!0});var Uv=i(Ya);Rh=n(Uv,"TFPreTrainedModel"),Uv.forEach(o),Wh=n(hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hd.forEach(o),Bh=u(Fo),Gs=r(Fo,"P",{});var fd=i(Gs);Qh=n(fd,"This model is also a "),Xs=r(fd,"A",{href:!0,rel:!0});var Vv=i(Xs);Uh=n(Vv,"tf.keras.Model"),Vv.forEach(o),Vh=n(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(o),Hh=u(Fo),k(Jt.$$.fragment,Fo),Kh=u(Fo),To=r(Fo,"DIV",{class:!0});var kn=i(To);k(Ys.$$.fragment,kn),Gh=u(kn),ut=r(kn,"P",{});var gr=i(ut);Xh=n(gr,"The "),Ja=r(gr,"A",{href:!0});var Hv=i(Ja);Yh=n(Hv,"TFLayoutLMv3ForSequenceClassification"),Hv.forEach(o),Jh=n(gr," forward method, overrides the "),qi=r(gr,"CODE",{});var Kv=i(qi);Zh=n(Kv,"__call__"),Kv.forEach(o),ef=n(gr," special method."),gr.forEach(o),of=u(kn),k(Zt.$$.fragment,kn),tf=u(kn),k(en.$$.fragment,kn),kn.forEach(o),Fo.forEach(o),Pl=u(s),mt=r(s,"H2",{class:!0});var gd=i(mt);on=r(gd,"A",{id:!0,class:!0,href:!0});var Gv=i(on);Fi=r(Gv,"SPAN",{});var Xv=i(Fi);k(Js.$$.fragment,Xv),Xv.forEach(o),Gv.forEach(o),nf=u(gd),Ei=r(gd,"SPAN",{});var Yv=i(Ei);sf=n(Yv,"TFLayoutLMv3ForTokenClassification"),Yv.forEach(o),gd.forEach(o),jl=u(s),Ue=r(s,"DIV",{class:!0});var Eo=i(Ue);k(Zs.$$.fragment,Eo),af=u(Eo),go=r(Eo,"P",{});var Uo=i(go);rf=n(Uo,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),ea=r(Uo,"A",{href:!0,rel:!0});var Jv=i(ea);lf=n(Jv,"FUNSD"),Jv.forEach(o),df=n(Uo,`,
`),oa=r(Uo,"A",{href:!0,rel:!0});var Zv=i(oa);cf=n(Zv,"SROIE"),Zv.forEach(o),pf=n(Uo,", "),ta=r(Uo,"A",{href:!0,rel:!0});var ey=i(ta);uf=n(ey,"CORD"),ey.forEach(o),mf=n(Uo,` and
`),na=r(Uo,"A",{href:!0,rel:!0});var oy=i(na);hf=n(oy,"Kleister-NDA"),oy.forEach(o),ff=n(Uo,"."),Uo.forEach(o),gf=u(Eo),sa=r(Eo,"P",{});var _d=i(sa);_f=n(_d,"This model inherits from "),Za=r(_d,"A",{href:!0});var ty=i(Za);vf=n(ty,"TFPreTrainedModel"),ty.forEach(o),yf=n(_d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_d.forEach(o),bf=u(Eo),aa=r(Eo,"P",{});var vd=i(aa);Lf=n(vd,"This model is also a "),ra=r(vd,"A",{href:!0,rel:!0});var ny=i(ra);kf=n(ny,"tf.keras.Model"),ny.forEach(o),wf=n(vd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vd.forEach(o),Tf=u(Eo),k(tn.$$.fragment,Eo),xf=u(Eo),xo=r(Eo,"DIV",{class:!0});var wn=i(xo);k(ia.$$.fragment,wn),Mf=u(wn),ht=r(wn,"P",{});var _r=i(ht);$f=n(_r,"The "),er=r(_r,"A",{href:!0});var sy=i(er);qf=n(sy,"TFLayoutLMv3ForTokenClassification"),sy.forEach(o),Ff=n(_r," forward method, overrides the "),zi=r(_r,"CODE",{});var ay=i(zi);Ef=n(ay,"__call__"),ay.forEach(o),zf=n(_r," special method."),_r.forEach(o),Cf=u(wn),k(nn.$$.fragment,wn),Af=u(wn),k(sn.$$.fragment,wn),wn.forEach(o),Eo.forEach(o),Nl=u(s),ft=r(s,"H2",{class:!0});var yd=i(ft);an=r(yd,"A",{id:!0,class:!0,href:!0});var ry=i(an);Ci=r(ry,"SPAN",{});var iy=i(Ci);k(la.$$.fragment,iy),iy.forEach(o),ry.forEach(o),Pf=u(yd),Ai=r(yd,"SPAN",{});var ly=i(Ai);jf=n(ly,"TFLayoutLMv3ForQuestionAnswering"),ly.forEach(o),yd.forEach(o),Sl=u(s),Ve=r(s,"DIV",{class:!0});var zo=i(Ve);k(da.$$.fragment,zo),Nf=u(zo),jo=r(zo,"P",{});var Tn=i(jo);Sf=n(Tn,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ca=r(Tn,"A",{href:!0,rel:!0});var dy=i(ca);Of=n(dy,"DocVQA"),dy.forEach(o),If=n(Tn,` (a linear layer on top of the text part of the hidden-states output to
compute `),Pi=r(Tn,"CODE",{});var cy=i(Pi);Df=n(cy,"span start logits"),cy.forEach(o),Rf=n(Tn," and "),ji=r(Tn,"CODE",{});var py=i(ji);Wf=n(py,"span end logits"),py.forEach(o),Bf=n(Tn,")."),Tn.forEach(o),Qf=u(zo),pa=r(zo,"P",{});var bd=i(pa);Uf=n(bd,"This model inherits from "),or=r(bd,"A",{href:!0});var uy=i(or);Vf=n(uy,"TFPreTrainedModel"),uy.forEach(o),Hf=n(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bd.forEach(o),Kf=u(zo),ua=r(zo,"P",{});var Ld=i(ua);Gf=n(Ld,"This model is also a "),ma=r(Ld,"A",{href:!0,rel:!0});var my=i(ma);Xf=n(my,"tf.keras.Model"),my.forEach(o),Yf=n(Ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ld.forEach(o),Jf=u(zo),k(rn.$$.fragment,zo),Zf=u(zo),Mo=r(zo,"DIV",{class:!0});var xn=i(Mo);k(ha.$$.fragment,xn),eg=u(xn),gt=r(xn,"P",{});var vr=i(gt);og=n(vr,"The "),tr=r(vr,"A",{href:!0});var hy=i(tr);tg=n(hy,"TFLayoutLMv3ForQuestionAnswering"),hy.forEach(o),ng=n(vr," forward method, overrides the "),Ni=r(vr,"CODE",{});var fy=i(Ni);sg=n(fy,"__call__"),fy.forEach(o),ag=n(vr," special method."),vr.forEach(o),rg=u(xn),k(ln.$$.fragment,xn),ig=u(xn),k(dn.$$.fragment,xn),xn.forEach(o),zo.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Uy)),d(_,"id","layoutlmv3"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#layoutlmv3"),d(g,"class","relative group"),d(ae,"id","overview"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#overview"),d(R,"class","relative group"),d(ie,"href","https://arxiv.org/abs/2204.08387"),d(ie,"rel","nofollow"),d(pe,"href","layoutlmv2"),d(ue,"href","vit"),d(he,"href","layoutlmv2"),d(oe,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(N,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor"),d(v,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(te,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(We,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(D,"href","layoutlmv2#usage-layoutlmv2processor"),d(Oe,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3"),d(Oe,"rel","nofollow"),d(Mn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/layoutlmv3"),d(Mn,"rel","nofollow"),by(bt.src,hg="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||d(bt,"src",hg),d(bt,"alt","drawing"),d(bt,"width","600"),d(ya,"href","https://arxiv.org/abs/2204.08387"),d($n,"href","https://huggingface.co/nielsr"),d($n,"rel","nofollow"),d(qn,"href","https://huggingface.co/chriskoo"),d(qn,"rel","nofollow"),d(Fn,"href","https://huggingface.co/tokec"),d(Fn,"rel","nofollow"),d(En,"href","https://huggingface.co/lre"),d(En,"rel","nofollow"),d(zn,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),d(zn,"rel","nofollow"),d(kt,"id","resources"),d(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(kt,"href","#resources"),d(Vo,"class","relative group"),d(ka,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),d(Pn,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/RVL-CDIP/Fine_tuning_LayoutLMv2ForSequenceClassification_on_RVL_CDIP.ipynb"),d(Pn,"rel","nofollow"),d(wa,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(Nn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/layoutlmv3"),d(Nn,"rel","nofollow"),d(Sn,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv3/Fine_tune_LayoutLMv3_on_FUNSD_(HuggingFace_Trainer).ipynb"),d(Sn,"rel","nofollow"),d(On,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/Inference_with_LayoutLMv2ForTokenClassification.ipynb"),d(On,"rel","nofollow"),d(Ta,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),d(In,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/True_inference_with_LayoutLMv2ForTokenClassification_%2B_Gradio_demo.ipynb"),d(In,"rel","nofollow"),d(xa,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),d(Dn,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/Fine_tuning_LayoutLMv2ForTokenClassification_on_FUNSD_using_HuggingFace_Trainer.ipynb"),d(Dn,"rel","nofollow"),d(Ma,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),d(qa,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),d(Wn,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/DocVQA/Fine_tuning_LayoutLMv2ForQuestionAnswering_on_DocVQA.ipynb"),d(Wn,"rel","nofollow"),d(Mt,"id","transformers.LayoutLMv3Config"),d(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Mt,"href","#transformers.LayoutLMv3Config"),d(Ko,"class","relative group"),d(Fa,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(Un,"href","https://huggingface.co/microsoft/layoutlmv3-base"),d(Un,"rel","nofollow"),d(Ea,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(za,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qt,"id","transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor"),d(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qt,"href","#transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor"),d(Yo,"class","relative group"),d(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Et,"id","transformers.LayoutLMv3Tokenizer"),d(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Et,"href","#transformers.LayoutLMv3Tokenizer"),d(Jo,"class","relative group"),d(Ca,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Aa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(ja,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Na,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ct,"id","transformers.LayoutLMv3TokenizerFast"),d(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ct,"href","#transformers.LayoutLMv3TokenizerFast"),d(Zo,"class","relative group"),d(Sa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pt,"id","transformers.LayoutLMv3Processor"),d(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pt,"href","#transformers.LayoutLMv3Processor"),d(et,"class","relative group"),d(Ia,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(Da,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor"),d(Ra,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Wa,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(ls,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__"),d(Ba,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor"),d(ds,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(Qa,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor"),d(cs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(jt,"id","transformers.LayoutLMv3Model"),d(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(jt,"href","#transformers.LayoutLMv3Model"),d(ot,"class","relative group"),d(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(hs,"rel","nofollow"),d(Ua,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ot,"id","transformers.LayoutLMv3ForSequenceClassification"),d(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ot,"href","#transformers.LayoutLMv3ForSequenceClassification"),d(nt,"class","relative group"),d(ys,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(ys,"rel","nofollow"),d(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ls,"rel","nofollow"),d(Va,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),d(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Rt,"id","transformers.LayoutLMv3ForTokenClassification"),d(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Rt,"href","#transformers.LayoutLMv3ForTokenClassification"),d(at,"class","relative group"),d(xs,"href","https://guillaumejaume.github.io/FUNSD/"),d(xs,"rel","nofollow"),d(Ms,"href","https://rrc.cvc.uab.es/?ch=13"),d(Ms,"rel","nofollow"),d($s,"href","https://github.com/clovaai/cord"),d($s,"rel","nofollow"),d(qs,"href","https://github.com/applicaai/kleister-nda"),d(qs,"rel","nofollow"),d(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Es,"rel","nofollow"),d(Ha,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qt,"id","transformers.LayoutLMv3ForQuestionAnswering"),d(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Qt,"href","#transformers.LayoutLMv3ForQuestionAnswering"),d(it,"class","relative group"),d(Ps,"href","https://rrc.cvc.uab.es/?ch=17"),d(Ps,"rel","nofollow"),d(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ns,"rel","nofollow"),d(Ka,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),d(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ht,"id","transformers.TFLayoutLMv3Model"),d(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ht,"href","#transformers.TFLayoutLMv3Model"),d(dt,"class","relative group"),d(Ga,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(Ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Ws,"rel","nofollow"),d(Xa,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3Model"),d(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Yt,"id","transformers.TFLayoutLMv3ForSequenceClassification"),d(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Yt,"href","#transformers.TFLayoutLMv3ForSequenceClassification"),d(pt,"class","relative group"),d(Hs,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(Hs,"rel","nofollow"),d(Ya,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(Xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Xs,"rel","nofollow"),d(Ja,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForSequenceClassification"),d(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(on,"id","transformers.TFLayoutLMv3ForTokenClassification"),d(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(on,"href","#transformers.TFLayoutLMv3ForTokenClassification"),d(mt,"class","relative group"),d(ea,"href","https://guillaumejaume.github.io/FUNSD/"),d(ea,"rel","nofollow"),d(oa,"href","https://rrc.cvc.uab.es/?ch=13"),d(oa,"rel","nofollow"),d(ta,"href","https://github.com/clovaai/cord"),d(ta,"rel","nofollow"),d(na,"href","https://github.com/applicaai/kleister-nda"),d(na,"rel","nofollow"),d(Za,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(ra,"rel","nofollow"),d(er,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForTokenClassification"),d(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(an,"id","transformers.TFLayoutLMv3ForQuestionAnswering"),d(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(an,"href","#transformers.TFLayoutLMv3ForQuestionAnswering"),d(ft,"class","relative group"),d(ca,"href","https://rrc.cvc.uab.es/?ch=17"),d(ca,"rel","nofollow"),d(or,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(ma,"rel","nofollow"),d(tr,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForQuestionAnswering"),d(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,f){e(document.head,c),h(s,b,f),h(s,g,f),e(g,_),e(_,y),w(l,y,null),e(g,m),e(g,F),e(F,we),h(s,_e,f),h(s,R,f),e(R,ae),e(ae,se),w($,se,null),e(R,Te),e(R,V),e(V,xe),h(s,ve,f),h(s,O,f),e(O,Me),e(O,ie),e(ie,K),e(O,$e),e(O,pe),e(pe,G),e(O,qe),e(O,ue),e(ue,X),e(O,Fe),h(s,ye,f),h(s,ee,f),e(ee,C),h(s,P,f),h(s,me,f),e(me,H),e(H,Ee),h(s,be,f),h(s,U,f),e(U,ze),h(s,Le,f),h(s,z,f),e(z,re),e(re,Y),e(re,he),e(he,Ce),e(re,J),e(re,le),e(le,fe),e(fe,B),e(le,Ae),e(le,S),e(S,Pe),e(S,oe),e(oe,j),e(S,je),e(S,N),e(N,Ne),e(S,Se),e(S,v),e(v,q),e(S,Xe),e(S,te),e(te,Ye),e(S,Je),e(z,E),e(z,ge),e(ge,Ze),e(ge,We),e(We,eo),e(ge,oo),e(ge,D),e(D,Z),e(ge,to),e(z,no),e(z,Q),e(Q,so),e(Q,Oe),e(Oe,Ie),e(Q,ao),e(z,de),e(z,De),e(De,kd),e(De,Mn),e(Mn,wd),e(De,Td),h(s,el,f),h(s,bt,f),h(s,ol,f),h(s,Lt,f),e(Lt,xd),e(Lt,ya),e(ya,Md),e(Lt,$d),h(s,tl,f),h(s,He,f),e(He,qd),e(He,$n),e($n,Fd),e(He,Ed),e(He,qn),e(qn,zd),e(He,Cd),e(He,Fn),e(Fn,Ad),e(He,Pd),e(He,En),e(En,jd),e(He,Nd),e(He,zn),e(zn,Sd),e(He,Od),h(s,nl,f),h(s,Vo,f),e(Vo,kt),e(kt,yr),w(Cn,yr,null),e(Vo,Id),e(Vo,br),e(br,Dd),h(s,sl,f),h(s,ba,f),e(ba,Rd),h(s,al,f),w(wt,s,f),h(s,rl,f),w(An,s,f),h(s,il,f),h(s,La,f),e(La,Tt),e(Tt,ka),e(ka,Wd),e(Tt,Bd),e(Tt,Pn),e(Pn,Qd),e(Tt,Ud),h(s,ll,f),w(jn,s,f),h(s,dl,f),h(s,Oo,f),e(Oo,Io),e(Io,wa),e(wa,Vd),e(Io,Hd),e(Io,Nn),e(Nn,Kd),e(Io,Gd),e(Io,Sn),e(Sn,Xd),e(Io,Yd),e(Oo,Jd),e(Oo,lo),e(lo,Zd),e(lo,On),e(On,ec),e(lo,oc),e(lo,Ta),e(Ta,tc),e(lo,nc),e(lo,In),e(In,sc),e(lo,ac),e(lo,xa),e(xa,rc),e(lo,ic),e(Oo,lc),e(Oo,Ho),e(Ho,dc),e(Ho,Dn),e(Dn,cc),e(Ho,pc),e(Ho,Ma),e(Ma,uc),e(Ho,mc),h(s,cl,f),w(Rn,s,f),h(s,pl,f),h(s,$a,f),e($a,xt),e(xt,qa),e(qa,hc),e(xt,fc),e(xt,Wn),e(Wn,gc),e(xt,_c),h(s,ul,f),h(s,Ko,f),e(Ko,Mt),e(Mt,Lr),w(Bn,Lr,null),e(Ko,vc),e(Ko,kr),e(kr,yc),h(s,ml,f),h(s,co,f),w(Qn,co,null),e(co,bc),e(co,Go),e(Go,Lc),e(Go,Fa),e(Fa,kc),e(Go,wc),e(Go,Un),e(Un,Tc),e(Go,xc),e(co,Mc),e(co,Xo),e(Xo,$c),e(Xo,Ea),e(Ea,qc),e(Xo,Fc),e(Xo,za),e(za,Ec),e(Xo,zc),e(co,Cc),w($t,co,null),h(s,hl,f),h(s,Yo,f),e(Yo,qt),e(qt,wr),w(Vn,wr,null),e(Yo,Ac),e(Yo,Tr),e(Tr,Pc),h(s,fl,f),h(s,Co,f),w(Hn,Co,null),e(Co,jc),e(Co,xr),e(xr,Nc),e(Co,Sc),e(Co,Ft),w(Kn,Ft,null),e(Ft,Oc),e(Ft,Mr),e(Mr,Ic),h(s,gl,f),h(s,Jo,f),e(Jo,Et),e(Et,$r),w(Gn,$r,null),e(Jo,Dc),e(Jo,qr),e(qr,Rc),h(s,_l,f),h(s,Be,f),w(Xn,Be,null),e(Be,Wc),e(Be,Re),e(Re,Bc),e(Re,Fr),e(Fr,Qc),e(Re,Uc),e(Re,Ca),e(Ca,Vc),e(Re,Hc),e(Re,Er),e(Er,Kc),e(Re,Gc),e(Re,zr),e(zr,Xc),e(Re,Yc),e(Re,Cr),e(Cr,Jc),e(Re,Zc),e(Re,Ar),e(Ar,ep),e(Re,op),e(Re,Pr),e(Pr,tp),e(Re,np),e(Be,sp),e(Be,Yn),e(Yn,ap),e(Yn,Aa),e(Aa,rp),e(Yn,ip),e(Be,lp),e(Be,Pa),e(Pa,ja),e(ja,dp),e(Pa,cp),e(Be,pp),e(Be,zt),w(Jn,zt,null),e(zt,up),e(zt,jr),e(jr,mp),e(Be,hp),e(Be,Na),w(Zn,Na,null),h(s,vl,f),h(s,Zo,f),e(Zo,Ct),e(Ct,Nr),w(es,Nr,null),e(Zo,fp),e(Zo,Sr),e(Sr,gp),h(s,yl,f),h(s,po,f),w(os,po,null),e(po,_p),e(po,ts),e(ts,vp),e(ts,Or),e(Or,yp),e(ts,bp),e(po,Lp),e(po,ns),e(ns,kp),e(ns,Sa),e(Sa,wp),e(ns,Tp),e(po,xp),e(po,At),w(ss,At,null),e(At,Mp),e(At,Ir),e(Ir,$p),h(s,bl,f),h(s,et,f),e(et,Pt),e(Pt,Dr),w(as,Dr,null),e(et,qp),e(et,Rr),e(Rr,Fp),h(s,Ll,f),h(s,ro,f),w(rs,ro,null),e(ro,Ep),e(ro,Wr),e(Wr,zp),e(ro,Cp),e(ro,Oa),e(Oa,Ia),e(Ia,Ap),e(Oa,Pp),e(ro,jp),e(ro,ce),e(ce,Np),e(ce,Da),e(Da,Sp),e(ce,Op),e(ce,Ra),e(Ra,Ip),e(ce,Dp),e(ce,Wa),e(Wa,Rp),e(ce,Wp),e(ce,Br),e(Br,Bp),e(ce,Qp),e(ce,Qr),e(Qr,Up),e(ce,Vp),e(ce,Ur),e(Ur,Hp),e(ce,Kp),e(ce,Vr),e(Vr,Gp),e(ce,Xp),e(ce,Hr),e(Hr,Yp),e(ce,Jp),e(ce,Kr),e(Kr,Zp),e(ce,eu),e(ro,ou),e(ro,Do),w(is,Do,null),e(Do,tu),e(Do,I),e(I,nu),e(I,Gr),e(Gr,su),e(I,au),e(I,ls),e(ls,Xr),e(Xr,ru),e(ls,iu),e(I,lu),e(I,Ba),e(Ba,du),e(I,cu),e(I,Yr),e(Yr,pu),e(I,uu),e(I,Jr),e(Jr,mu),e(I,hu),e(I,ds),e(ds,Zr),e(Zr,fu),e(ds,gu),e(I,_u),e(I,ei),e(ei,vu),e(I,yu),e(I,Qa),e(Qa,bu),e(I,Lu),e(I,oi),e(oi,ku),e(I,wu),e(I,ti),e(ti,Tu),e(I,xu),e(I,ni),e(ni,Mu),e(I,$u),e(I,si),e(si,qu),e(I,Fu),e(I,ai),e(ai,Eu),e(I,zu),e(I,cs),e(cs,ri),e(ri,Cu),e(cs,Au),e(I,Pu),e(I,ii),e(ii,ju),e(I,Nu),e(Do,Su),e(Do,li),e(li,Ou),h(s,kl,f),h(s,ot,f),e(ot,jt),e(jt,di),w(ps,di,null),e(ot,Iu),e(ot,ci),e(ci,Du),h(s,wl,f),h(s,Ao,f),w(us,Ao,null),e(Ao,Ru),e(Ao,ms),e(ms,Wu),e(ms,hs),e(hs,Bu),e(ms,Qu),e(Ao,Uu),e(Ao,yo),w(fs,yo,null),e(yo,Vu),e(yo,tt),e(tt,Hu),e(tt,Ua),e(Ua,Ku),e(tt,Gu),e(tt,pi),e(pi,Xu),e(tt,Yu),e(yo,Ju),w(Nt,yo,null),e(yo,Zu),w(St,yo,null),h(s,Tl,f),h(s,nt,f),e(nt,Ot),e(Ot,ui),w(gs,ui,null),e(nt,em),e(nt,mi),e(mi,om),h(s,xl,f),h(s,uo,f),w(_s,uo,null),e(uo,tm),e(uo,vs),e(vs,nm),e(vs,ys),e(ys,sm),e(vs,am),e(uo,rm),e(uo,bs),e(bs,im),e(bs,Ls),e(Ls,lm),e(bs,dm),e(uo,cm),e(uo,bo),w(ks,bo,null),e(bo,pm),e(bo,st),e(st,um),e(st,Va),e(Va,mm),e(st,hm),e(st,hi),e(hi,fm),e(st,gm),e(bo,_m),w(It,bo,null),e(bo,vm),w(Dt,bo,null),h(s,Ml,f),h(s,at,f),e(at,Rt),e(Rt,fi),w(ws,fi,null),e(at,ym),e(at,gi),e(gi,bm),h(s,$l,f),h(s,mo,f),w(Ts,mo,null),e(mo,Lm),e(mo,ho),e(ho,km),e(ho,xs),e(xs,wm),e(ho,Tm),e(ho,Ms),e(Ms,xm),e(ho,Mm),e(ho,$s),e($s,$m),e(ho,qm),e(ho,qs),e(qs,Fm),e(ho,Em),e(mo,zm),e(mo,Fs),e(Fs,Cm),e(Fs,Es),e(Es,Am),e(Fs,Pm),e(mo,jm),e(mo,Lo),w(zs,Lo,null),e(Lo,Nm),e(Lo,rt),e(rt,Sm),e(rt,Ha),e(Ha,Om),e(rt,Im),e(rt,_i),e(_i,Dm),e(rt,Rm),e(Lo,Wm),w(Wt,Lo,null),e(Lo,Bm),w(Bt,Lo,null),h(s,ql,f),h(s,it,f),e(it,Qt),e(Qt,vi),w(Cs,vi,null),e(it,Qm),e(it,yi),e(yi,Um),h(s,Fl,f),h(s,fo,f),w(As,fo,null),e(fo,Vm),e(fo,Po),e(Po,Hm),e(Po,Ps),e(Ps,Km),e(Po,Gm),e(Po,bi),e(bi,Xm),e(Po,Ym),e(Po,Li),e(Li,Jm),e(Po,Zm),e(fo,eh),e(fo,js),e(js,oh),e(js,Ns),e(Ns,th),e(js,nh),e(fo,sh),e(fo,ko),w(Ss,ko,null),e(ko,ah),e(ko,lt),e(lt,rh),e(lt,Ka),e(Ka,ih),e(lt,lh),e(lt,ki),e(ki,dh),e(lt,ch),e(ko,ph),w(Ut,ko,null),e(ko,uh),w(Vt,ko,null),h(s,El,f),h(s,dt,f),e(dt,Ht),e(Ht,wi),w(Os,wi,null),e(dt,mh),e(dt,Ti),e(Ti,hh),h(s,zl,f),h(s,io,f),w(Is,io,null),e(io,fh),e(io,Ds),e(Ds,gh),e(Ds,Ga),e(Ga,_h),e(Ds,vh),e(io,yh),e(io,Rs),e(Rs,bh),e(Rs,Ws),e(Ws,Lh),e(Rs,kh),e(io,wh),w(Kt,io,null),e(io,Th),e(io,wo),w(Bs,wo,null),e(wo,xh),e(wo,ct),e(ct,Mh),e(ct,Xa),e(Xa,$h),e(ct,qh),e(ct,xi),e(xi,Fh),e(ct,Eh),e(wo,zh),w(Gt,wo,null),e(wo,Ch),w(Xt,wo,null),h(s,Cl,f),h(s,pt,f),e(pt,Yt),e(Yt,Mi),w(Qs,Mi,null),e(pt,Ah),e(pt,$i),e($i,Ph),h(s,Al,f),h(s,Qe,f),w(Us,Qe,null),e(Qe,jh),e(Qe,Vs),e(Vs,Nh),e(Vs,Hs),e(Hs,Sh),e(Vs,Oh),e(Qe,Ih),e(Qe,Ks),e(Ks,Dh),e(Ks,Ya),e(Ya,Rh),e(Ks,Wh),e(Qe,Bh),e(Qe,Gs),e(Gs,Qh),e(Gs,Xs),e(Xs,Uh),e(Gs,Vh),e(Qe,Hh),w(Jt,Qe,null),e(Qe,Kh),e(Qe,To),w(Ys,To,null),e(To,Gh),e(To,ut),e(ut,Xh),e(ut,Ja),e(Ja,Yh),e(ut,Jh),e(ut,qi),e(qi,Zh),e(ut,ef),e(To,of),w(Zt,To,null),e(To,tf),w(en,To,null),h(s,Pl,f),h(s,mt,f),e(mt,on),e(on,Fi),w(Js,Fi,null),e(mt,nf),e(mt,Ei),e(Ei,sf),h(s,jl,f),h(s,Ue,f),w(Zs,Ue,null),e(Ue,af),e(Ue,go),e(go,rf),e(go,ea),e(ea,lf),e(go,df),e(go,oa),e(oa,cf),e(go,pf),e(go,ta),e(ta,uf),e(go,mf),e(go,na),e(na,hf),e(go,ff),e(Ue,gf),e(Ue,sa),e(sa,_f),e(sa,Za),e(Za,vf),e(sa,yf),e(Ue,bf),e(Ue,aa),e(aa,Lf),e(aa,ra),e(ra,kf),e(aa,wf),e(Ue,Tf),w(tn,Ue,null),e(Ue,xf),e(Ue,xo),w(ia,xo,null),e(xo,Mf),e(xo,ht),e(ht,$f),e(ht,er),e(er,qf),e(ht,Ff),e(ht,zi),e(zi,Ef),e(ht,zf),e(xo,Cf),w(nn,xo,null),e(xo,Af),w(sn,xo,null),h(s,Nl,f),h(s,ft,f),e(ft,an),e(an,Ci),w(la,Ci,null),e(ft,Pf),e(ft,Ai),e(Ai,jf),h(s,Sl,f),h(s,Ve,f),w(da,Ve,null),e(Ve,Nf),e(Ve,jo),e(jo,Sf),e(jo,ca),e(ca,Of),e(jo,If),e(jo,Pi),e(Pi,Df),e(jo,Rf),e(jo,ji),e(ji,Wf),e(jo,Bf),e(Ve,Qf),e(Ve,pa),e(pa,Uf),e(pa,or),e(or,Vf),e(pa,Hf),e(Ve,Kf),e(Ve,ua),e(ua,Gf),e(ua,ma),e(ma,Xf),e(ua,Yf),e(Ve,Jf),w(rn,Ve,null),e(Ve,Zf),e(Ve,Mo),w(ha,Mo,null),e(Mo,eg),e(Mo,gt),e(gt,og),e(gt,tr),e(tr,tg),e(gt,ng),e(gt,Ni),e(Ni,sg),e(gt,ag),e(Mo,rg),w(ln,Mo,null),e(Mo,ig),w(dn,Mo,null),Ol=!0},p(s,[f]){const fa={};f&2&&(fa.$$scope={dirty:f,ctx:s}),wt.$set(fa);const Si={};f&2&&(Si.$$scope={dirty:f,ctx:s}),$t.$set(Si);const Oi={};f&2&&(Oi.$$scope={dirty:f,ctx:s}),Nt.$set(Oi);const Ii={};f&2&&(Ii.$$scope={dirty:f,ctx:s}),St.$set(Ii);const ga={};f&2&&(ga.$$scope={dirty:f,ctx:s}),It.$set(ga);const Di={};f&2&&(Di.$$scope={dirty:f,ctx:s}),Dt.$set(Di);const Ri={};f&2&&(Ri.$$scope={dirty:f,ctx:s}),Wt.$set(Ri);const Wi={};f&2&&(Wi.$$scope={dirty:f,ctx:s}),Bt.$set(Wi);const No={};f&2&&(No.$$scope={dirty:f,ctx:s}),Ut.$set(No);const Bi={};f&2&&(Bi.$$scope={dirty:f,ctx:s}),Vt.$set(Bi);const Qi={};f&2&&(Qi.$$scope={dirty:f,ctx:s}),Kt.$set(Qi);const Ui={};f&2&&(Ui.$$scope={dirty:f,ctx:s}),Gt.$set(Ui);const Vi={};f&2&&(Vi.$$scope={dirty:f,ctx:s}),Xt.$set(Vi);const Hi={};f&2&&(Hi.$$scope={dirty:f,ctx:s}),Jt.$set(Hi);const Ki={};f&2&&(Ki.$$scope={dirty:f,ctx:s}),Zt.$set(Ki);const Gi={};f&2&&(Gi.$$scope={dirty:f,ctx:s}),en.$set(Gi);const So={};f&2&&(So.$$scope={dirty:f,ctx:s}),tn.$set(So);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:s}),nn.$set(cn);const Xi={};f&2&&(Xi.$$scope={dirty:f,ctx:s}),sn.$set(Xi);const _a={};f&2&&(_a.$$scope={dirty:f,ctx:s}),rn.$set(_a);const Yi={};f&2&&(Yi.$$scope={dirty:f,ctx:s}),ln.$set(Yi);const _o={};f&2&&(_o.$$scope={dirty:f,ctx:s}),dn.$set(_o)},i(s){Ol||(T(l.$$.fragment,s),T($.$$.fragment,s),T(Cn.$$.fragment,s),T(wt.$$.fragment,s),T(An.$$.fragment,s),T(jn.$$.fragment,s),T(Rn.$$.fragment,s),T(Bn.$$.fragment,s),T(Qn.$$.fragment,s),T($t.$$.fragment,s),T(Vn.$$.fragment,s),T(Hn.$$.fragment,s),T(Kn.$$.fragment,s),T(Gn.$$.fragment,s),T(Xn.$$.fragment,s),T(Jn.$$.fragment,s),T(Zn.$$.fragment,s),T(es.$$.fragment,s),T(os.$$.fragment,s),T(ss.$$.fragment,s),T(as.$$.fragment,s),T(rs.$$.fragment,s),T(is.$$.fragment,s),T(ps.$$.fragment,s),T(us.$$.fragment,s),T(fs.$$.fragment,s),T(Nt.$$.fragment,s),T(St.$$.fragment,s),T(gs.$$.fragment,s),T(_s.$$.fragment,s),T(ks.$$.fragment,s),T(It.$$.fragment,s),T(Dt.$$.fragment,s),T(ws.$$.fragment,s),T(Ts.$$.fragment,s),T(zs.$$.fragment,s),T(Wt.$$.fragment,s),T(Bt.$$.fragment,s),T(Cs.$$.fragment,s),T(As.$$.fragment,s),T(Ss.$$.fragment,s),T(Ut.$$.fragment,s),T(Vt.$$.fragment,s),T(Os.$$.fragment,s),T(Is.$$.fragment,s),T(Kt.$$.fragment,s),T(Bs.$$.fragment,s),T(Gt.$$.fragment,s),T(Xt.$$.fragment,s),T(Qs.$$.fragment,s),T(Us.$$.fragment,s),T(Jt.$$.fragment,s),T(Ys.$$.fragment,s),T(Zt.$$.fragment,s),T(en.$$.fragment,s),T(Js.$$.fragment,s),T(Zs.$$.fragment,s),T(tn.$$.fragment,s),T(ia.$$.fragment,s),T(nn.$$.fragment,s),T(sn.$$.fragment,s),T(la.$$.fragment,s),T(da.$$.fragment,s),T(rn.$$.fragment,s),T(ha.$$.fragment,s),T(ln.$$.fragment,s),T(dn.$$.fragment,s),Ol=!0)},o(s){x(l.$$.fragment,s),x($.$$.fragment,s),x(Cn.$$.fragment,s),x(wt.$$.fragment,s),x(An.$$.fragment,s),x(jn.$$.fragment,s),x(Rn.$$.fragment,s),x(Bn.$$.fragment,s),x(Qn.$$.fragment,s),x($t.$$.fragment,s),x(Vn.$$.fragment,s),x(Hn.$$.fragment,s),x(Kn.$$.fragment,s),x(Gn.$$.fragment,s),x(Xn.$$.fragment,s),x(Jn.$$.fragment,s),x(Zn.$$.fragment,s),x(es.$$.fragment,s),x(os.$$.fragment,s),x(ss.$$.fragment,s),x(as.$$.fragment,s),x(rs.$$.fragment,s),x(is.$$.fragment,s),x(ps.$$.fragment,s),x(us.$$.fragment,s),x(fs.$$.fragment,s),x(Nt.$$.fragment,s),x(St.$$.fragment,s),x(gs.$$.fragment,s),x(_s.$$.fragment,s),x(ks.$$.fragment,s),x(It.$$.fragment,s),x(Dt.$$.fragment,s),x(ws.$$.fragment,s),x(Ts.$$.fragment,s),x(zs.$$.fragment,s),x(Wt.$$.fragment,s),x(Bt.$$.fragment,s),x(Cs.$$.fragment,s),x(As.$$.fragment,s),x(Ss.$$.fragment,s),x(Ut.$$.fragment,s),x(Vt.$$.fragment,s),x(Os.$$.fragment,s),x(Is.$$.fragment,s),x(Kt.$$.fragment,s),x(Bs.$$.fragment,s),x(Gt.$$.fragment,s),x(Xt.$$.fragment,s),x(Qs.$$.fragment,s),x(Us.$$.fragment,s),x(Jt.$$.fragment,s),x(Ys.$$.fragment,s),x(Zt.$$.fragment,s),x(en.$$.fragment,s),x(Js.$$.fragment,s),x(Zs.$$.fragment,s),x(tn.$$.fragment,s),x(ia.$$.fragment,s),x(nn.$$.fragment,s),x(sn.$$.fragment,s),x(la.$$.fragment,s),x(da.$$.fragment,s),x(rn.$$.fragment,s),x(ha.$$.fragment,s),x(ln.$$.fragment,s),x(dn.$$.fragment,s),Ol=!1},d(s){o(c),s&&o(b),s&&o(g),M(l),s&&o(_e),s&&o(R),M($),s&&o(ve),s&&o(O),s&&o(ye),s&&o(ee),s&&o(P),s&&o(me),s&&o(be),s&&o(U),s&&o(Le),s&&o(z),s&&o(el),s&&o(bt),s&&o(ol),s&&o(Lt),s&&o(tl),s&&o(He),s&&o(nl),s&&o(Vo),M(Cn),s&&o(sl),s&&o(ba),s&&o(al),M(wt,s),s&&o(rl),M(An,s),s&&o(il),s&&o(La),s&&o(ll),M(jn,s),s&&o(dl),s&&o(Oo),s&&o(cl),M(Rn,s),s&&o(pl),s&&o($a),s&&o(ul),s&&o(Ko),M(Bn),s&&o(ml),s&&o(co),M(Qn),M($t),s&&o(hl),s&&o(Yo),M(Vn),s&&o(fl),s&&o(Co),M(Hn),M(Kn),s&&o(gl),s&&o(Jo),M(Gn),s&&o(_l),s&&o(Be),M(Xn),M(Jn),M(Zn),s&&o(vl),s&&o(Zo),M(es),s&&o(yl),s&&o(po),M(os),M(ss),s&&o(bl),s&&o(et),M(as),s&&o(Ll),s&&o(ro),M(rs),M(is),s&&o(kl),s&&o(ot),M(ps),s&&o(wl),s&&o(Ao),M(us),M(fs),M(Nt),M(St),s&&o(Tl),s&&o(nt),M(gs),s&&o(xl),s&&o(uo),M(_s),M(ks),M(It),M(Dt),s&&o(Ml),s&&o(at),M(ws),s&&o($l),s&&o(mo),M(Ts),M(zs),M(Wt),M(Bt),s&&o(ql),s&&o(it),M(Cs),s&&o(Fl),s&&o(fo),M(As),M(Ss),M(Ut),M(Vt),s&&o(El),s&&o(dt),M(Os),s&&o(zl),s&&o(io),M(Is),M(Kt),M(Bs),M(Gt),M(Xt),s&&o(Cl),s&&o(pt),M(Qs),s&&o(Al),s&&o(Qe),M(Us),M(Jt),M(Ys),M(Zt),M(en),s&&o(Pl),s&&o(mt),M(Js),s&&o(jl),s&&o(Ue),M(Zs),M(tn),M(ia),M(nn),M(sn),s&&o(Nl),s&&o(ft),M(la),s&&o(Sl),s&&o(Ve),M(da),M(rn),M(ha),M(ln),M(dn)}}}const Uy={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"resources",title:"Resources"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.models.layoutlmv3.image_processing_layoutlmv3.LayoutLMv3ImageProcessor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"},{local:"transformers.TFLayoutLMv3Model",title:"TFLayoutLMv3Model"},{local:"transformers.TFLayoutLMv3ForSequenceClassification",title:"TFLayoutLMv3ForSequenceClassification"},{local:"transformers.TFLayoutLMv3ForTokenClassification",title:"TFLayoutLMv3ForTokenClassification"},{local:"transformers.TFLayoutLMv3ForQuestionAnswering",title:"TFLayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function Vy(A){return Ly(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class eb extends gy{constructor(c){super();_y(this,c,Vy,Qy,vy,{})}}export{eb as default,Uy as metadata};
