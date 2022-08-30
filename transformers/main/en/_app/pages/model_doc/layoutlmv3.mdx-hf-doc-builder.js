import{S as P_,i as j_,s as N_,e as a,k as u,w as L,t as n,M as S_,c as r,d as t,m,a as i,x as k,h as s,b as d,N as I_,G as e,g as _,y as w,q as T,o as x,B as M,v as O_,L as Be}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ee}from"../../chunks/Tip-hf-doc-builder.js";import{D as S}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Re}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function D_(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import LayoutLMv3Model, LayoutLMv3Config

# Initializing a LayoutLMv3 microsoft/layoutlmv3-base style configuration
configuration = LayoutLMv3Config()

# Initializing a model from the microsoft/layoutlmv3-base style configuration
model = LayoutLMv3Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv3Model, LayoutLMv3Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv3 microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv3Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/layoutlmv3-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv3Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),y=n("Example:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Example:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function W_(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import LayoutLMv3FeatureExtractor
from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

# option 1: with apply_ocr=True (default)
feature_extractor = LayoutLMv3FeatureExtractor()
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values', 'words', 'boxes'])

# option 2: with apply_ocr=False
feature_extractor = LayoutLMv3FeatureExtractor(apply_ocr=False)
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values'])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv3FeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 1: with apply_ocr=True (default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv3FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;, &#x27;words&#x27;, &#x27;boxes&#x27;])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 2: with apply_ocr=False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv3FeatureExtractor(apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){c=a("p"),y=n("Examples:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Examples:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function Q_(F){let c,y,f,p,v;return{c(){c=a("p"),y=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var $=i(f);p=s($,"Module"),$.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,y),e(c,f),e(f,p),e(c,v)},d(l){l&&t(c)}}}function R_(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import AutoProcessor, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),y=n("Examples:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Examples:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function B_(F){let c,y,f,p,v;return{c(){c=a("p"),y=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var $=i(f);p=s($,"Module"),$.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,y),e(c,f),e(f,p),e(c,v)},d(l){l&&t(c)}}}function U_(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),y=n("Examples:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Examples:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function V_(F){let c,y,f,p,v;return{c(){c=a("p"),y=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var $=i(f);p=s($,"Module"),$.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,y),e(c,f),e(f,p),e(c,v)},d(l){l&&t(c)}}}function H_(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),y=n("Examples:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Examples:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function G_(F){let c,y,f,p,v;return{c(){c=a("p"),y=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var $=i(f);p=s($,"Module"),$.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,y),e(c,f),e(f,p),e(c,v)},d(l){l&&t(c)}}}function K_(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){c=a("p"),y=n("Examples:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Examples:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function X_(F){let c,y,f,p,v,l,h,$,B,I,q,O,P,D,U,j,V,Q;return{c(){c=a("p"),y=n("TF 2.0 models accepts two formats as inputs:"),f=u(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),$=a("li"),B=n("having all inputs as a list, tuple or dict in the first positional arguments."),I=u(),q=a("p"),O=n("This second option is useful when using "),P=a("code"),D=n("tf.keras.Model.fit"),U=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),j=a("code"),V=n("model(inputs)"),Q=n(".")},l(b){c=r(b,"P",{});var z=i(c);y=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),f=m(b),p=r(b,"UL",{});var N=i(p);v=r(N,"LI",{});var ee=i(v);l=s(ee,"having all inputs as keyword arguments (like PyTorch models), or"),ee.forEach(t),h=m(N),$=r(N,"LI",{});var te=i($);B=s(te,"having all inputs as a list, tuple or dict in the first positional arguments."),te.forEach(t),N.forEach(t),I=m(b),q=r(b,"P",{});var C=i(q);O=s(C,"This second option is useful when using "),P=r(C,"CODE",{});var oe=i(P);D=s(oe,"tf.keras.Model.fit"),oe.forEach(t),U=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),j=r(C,"CODE",{});var ne=i(j);V=s(ne,"model(inputs)"),ne.forEach(t),Q=s(C,"."),C.forEach(t)},m(b,z){_(b,c,z),e(c,y),_(b,f,z),_(b,p,z),e(p,v),e(v,l),e(p,h),e(p,$),e($,B),_(b,I,z),_(b,q,z),e(q,O),e(q,P),e(P,D),e(q,U),e(q,j),e(j,V),e(q,Q)},d(b){b&&t(c),b&&t(f),b&&t(p),b&&t(I),b&&t(q)}}}function Y_(F){let c,y,f,p,v;return{c(){c=a("p"),y=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var $=i(f);p=s($,"Module"),$.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,y),e(c,f),e(f,p),e(c,v)},d(l){l&&t(c)}}}function J_(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import AutoProcessor, TFAutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),y=n("Examples:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Examples:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function Z_(F){let c,y,f,p,v,l,h,$,B,I,q,O,P,D,U,j,V,Q;return{c(){c=a("p"),y=n("TF 2.0 models accepts two formats as inputs:"),f=u(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),$=a("li"),B=n("having all inputs as a list, tuple or dict in the first positional arguments."),I=u(),q=a("p"),O=n("This second option is useful when using "),P=a("code"),D=n("tf.keras.Model.fit"),U=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),j=a("code"),V=n("model(inputs)"),Q=n(".")},l(b){c=r(b,"P",{});var z=i(c);y=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),f=m(b),p=r(b,"UL",{});var N=i(p);v=r(N,"LI",{});var ee=i(v);l=s(ee,"having all inputs as keyword arguments (like PyTorch models), or"),ee.forEach(t),h=m(N),$=r(N,"LI",{});var te=i($);B=s(te,"having all inputs as a list, tuple or dict in the first positional arguments."),te.forEach(t),N.forEach(t),I=m(b),q=r(b,"P",{});var C=i(q);O=s(C,"This second option is useful when using "),P=r(C,"CODE",{});var oe=i(P);D=s(oe,"tf.keras.Model.fit"),oe.forEach(t),U=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),j=r(C,"CODE",{});var ne=i(j);V=s(ne,"model(inputs)"),ne.forEach(t),Q=s(C,"."),C.forEach(t)},m(b,z){_(b,c,z),e(c,y),_(b,f,z),_(b,p,z),e(p,v),e(v,l),e(p,h),e(p,$),e($,B),_(b,I,z),_(b,q,z),e(q,O),e(q,P),e(P,D),e(q,U),e(q,j),e(j,V),e(q,Q)},d(b){b&&t(c),b&&t(f),b&&t(p),b&&t(I),b&&t(q)}}}function ev(F){let c,y,f,p,v;return{c(){c=a("p"),y=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var $=i(f);p=s($,"Module"),$.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,y),e(c,f),e(f,p),e(c,v)},d(l){l&&t(c)}}}function tv(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import AutoProcessor, TFAutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),y=n("Examples:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Examples:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function ov(F){let c,y,f,p,v,l,h,$,B,I,q,O,P,D,U,j,V,Q;return{c(){c=a("p"),y=n("TF 2.0 models accepts two formats as inputs:"),f=u(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),$=a("li"),B=n("having all inputs as a list, tuple or dict in the first positional arguments."),I=u(),q=a("p"),O=n("This second option is useful when using "),P=a("code"),D=n("tf.keras.Model.fit"),U=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),j=a("code"),V=n("model(inputs)"),Q=n(".")},l(b){c=r(b,"P",{});var z=i(c);y=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),f=m(b),p=r(b,"UL",{});var N=i(p);v=r(N,"LI",{});var ee=i(v);l=s(ee,"having all inputs as keyword arguments (like PyTorch models), or"),ee.forEach(t),h=m(N),$=r(N,"LI",{});var te=i($);B=s(te,"having all inputs as a list, tuple or dict in the first positional arguments."),te.forEach(t),N.forEach(t),I=m(b),q=r(b,"P",{});var C=i(q);O=s(C,"This second option is useful when using "),P=r(C,"CODE",{});var oe=i(P);D=s(oe,"tf.keras.Model.fit"),oe.forEach(t),U=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),j=r(C,"CODE",{});var ne=i(j);V=s(ne,"model(inputs)"),ne.forEach(t),Q=s(C,"."),C.forEach(t)},m(b,z){_(b,c,z),e(c,y),_(b,f,z),_(b,p,z),e(p,v),e(v,l),e(p,h),e(p,$),e($,B),_(b,I,z),_(b,q,z),e(q,O),e(q,P),e(P,D),e(q,U),e(q,j),e(j,V),e(q,Q)},d(b){b&&t(c),b&&t(f),b&&t(p),b&&t(I),b&&t(q)}}}function nv(F){let c,y,f,p,v;return{c(){c=a("p"),y=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var $=i(f);p=s($,"Module"),$.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,y),e(c,f),e(f,p),e(c,v)},d(l){l&&t(c)}}}function sv(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import AutoProcessor, TFAutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),y=n("Examples:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Examples:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function av(F){let c,y,f,p,v,l,h,$,B,I,q,O,P,D,U,j,V,Q;return{c(){c=a("p"),y=n("TF 2.0 models accepts two formats as inputs:"),f=u(),p=a("ul"),v=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),h=u(),$=a("li"),B=n("having all inputs as a list, tuple or dict in the first positional arguments."),I=u(),q=a("p"),O=n("This second option is useful when using "),P=a("code"),D=n("tf.keras.Model.fit"),U=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),j=a("code"),V=n("model(inputs)"),Q=n(".")},l(b){c=r(b,"P",{});var z=i(c);y=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),f=m(b),p=r(b,"UL",{});var N=i(p);v=r(N,"LI",{});var ee=i(v);l=s(ee,"having all inputs as keyword arguments (like PyTorch models), or"),ee.forEach(t),h=m(N),$=r(N,"LI",{});var te=i($);B=s(te,"having all inputs as a list, tuple or dict in the first positional arguments."),te.forEach(t),N.forEach(t),I=m(b),q=r(b,"P",{});var C=i(q);O=s(C,"This second option is useful when using "),P=r(C,"CODE",{});var oe=i(P);D=s(oe,"tf.keras.Model.fit"),oe.forEach(t),U=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),j=r(C,"CODE",{});var ne=i(j);V=s(ne,"model(inputs)"),ne.forEach(t),Q=s(C,"."),C.forEach(t)},m(b,z){_(b,c,z),e(c,y),_(b,f,z),_(b,p,z),e(p,v),e(v,l),e(p,h),e(p,$),e($,B),_(b,I,z),_(b,q,z),e(q,O),e(q,P),e(P,D),e(q,U),e(q,j),e(j,V),e(q,Q)},d(b){b&&t(c),b&&t(f),b&&t(p),b&&t(I),b&&t(q)}}}function rv(F){let c,y,f,p,v;return{c(){c=a("p"),y=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var $=i(f);p=s($,"Module"),$.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,y),e(c,f),e(f,p),e(c,v)},d(l){l&&t(c)}}}function iv(F){let c,y,f,p,v;return p=new Ue({props:{code:`from transformers import AutoProcessor, TFAutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){c=a("p"),y=n("Examples:"),f=u(),L(p.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);y=s(h,"Examples:"),h.forEach(t),f=m(l),k(p.$$.fragment,l)},m(l,h){_(l,c,h),e(c,y),_(l,f,h),w(p,l,h),v=!0},p:Be,i(l){v||(T(p.$$.fragment,l),v=!0)},o(l){x(p.$$.fragment,l),v=!1},d(l){l&&t(c),l&&t(f),M(p,l)}}}function lv(F){let c,y,f,p,v,l,h,$,B,I,q,O,P,D,U,j,V,Q,b,z,N,ee,te,C,oe,ne,is,nl,sl,Wr,ls,al,Qr,ds,ia,rl,Rr,cs,il,Br,_e,gt,ll,ps,dl,cl,bo,la,pl,ul,ie,ml,us,hl,fl,ms,gl,_l,hs,vl,yl,fs,bl,Ll,kl,Ve,wl,gs,Tl,xl,_s,Ml,$l,ql,Lo,Fl,ko,zl,El,Cl,wo,Al,To,Pl,jl,Ur,_t,Kh,Vr,vt,Nl,vs,Sl,Il,Hr,J,Ol,xo,Dl,Wl,Mo,Ql,Rl,$o,Bl,Ul,qo,Vl,Hl,Fo,Gl,Kl,Gr,He,yt,da,zo,Xl,ca,Yl,Kr,le,Eo,Jl,Ge,Zl,ys,ed,td,Co,od,nd,sd,Ke,ad,bs,rd,id,Ls,ld,dd,cd,bt,Xr,Xe,Lt,pa,Ao,pd,ua,ud,Yr,de,Po,md,ma,hd,fd,jo,gd,ha,_d,vd,yd,Se,No,bd,fa,Ld,kd,kt,Jr,Ye,wt,ga,So,wd,_a,Td,Zr,G,Io,xd,H,Md,va,$d,qd,ks,Fd,zd,ya,Ed,Cd,ba,Ad,Pd,La,jd,Nd,ka,Sd,Id,wa,Od,Dd,Wd,Oo,Qd,ws,Rd,Bd,Ud,Ts,xs,Vd,Hd,Gd,Tt,Do,Kd,Ta,Xd,Yd,Ms,Wo,ei,Je,xt,xa,Qo,Jd,Ma,Zd,ti,ce,Ro,ec,Bo,tc,$a,oc,nc,sc,Uo,ac,$s,rc,ic,lc,Mt,Vo,dc,qa,cc,oi,Ze,$t,Fa,Ho,pc,za,uc,ni,se,Go,mc,Ea,hc,fc,qs,Fs,gc,_c,vc,W,yc,zs,bc,Lc,Es,kc,wc,Cs,Tc,xc,Ca,Mc,$c,Aa,qc,Fc,Pa,zc,Ec,ja,Cc,Ac,Na,Pc,jc,Sa,Nc,Sc,Ic,Ie,Ko,Oc,E,Dc,Ia,Wc,Qc,Xo,Oa,Rc,Bc,Uc,As,Vc,Hc,Da,Gc,Kc,Wa,Xc,Yc,Yo,Qa,Jc,Zc,ep,Ra,tp,op,Ps,np,sp,Ba,ap,rp,Ua,ip,lp,Va,dp,cp,Ha,pp,up,Ga,mp,hp,Jo,Ka,fp,gp,_p,Xa,vp,yp,bp,Ya,Lp,si,et,qt,Ja,Zo,kp,Za,wp,ai,Ce,en,Tp,tn,xp,on,Mp,$p,qp,ve,nn,Fp,tt,zp,js,Ep,Cp,er,Ap,Pp,jp,Ft,Np,zt,ri,ot,Et,tr,sn,Sp,or,Ip,ii,pe,an,Op,rn,Dp,ln,Wp,Qp,Rp,dn,Bp,cn,Up,Vp,Hp,ye,pn,Gp,nt,Kp,Ns,Xp,Yp,nr,Jp,Zp,eu,Ct,tu,At,li,st,Pt,sr,un,ou,ar,nu,di,ue,mn,su,me,au,hn,ru,iu,fn,lu,du,gn,cu,pu,_n,uu,mu,hu,vn,fu,yn,gu,_u,vu,be,bn,yu,at,bu,Ss,Lu,ku,rr,wu,Tu,xu,jt,Mu,Nt,ci,rt,St,ir,Ln,$u,lr,qu,pi,he,kn,Fu,Ae,zu,wn,Eu,Cu,dr,Au,Pu,cr,ju,Nu,Su,Tn,Iu,xn,Ou,Du,Wu,Le,Mn,Qu,it,Ru,Is,Bu,Uu,pr,Vu,Hu,Gu,It,Ku,Ot,ui,lt,Dt,ur,$n,Xu,mr,Yu,mi,ae,qn,Ju,Fn,Zu,Os,em,tm,om,zn,nm,En,sm,am,rm,Wt,im,ke,Cn,lm,dt,dm,Ds,cm,pm,hr,um,mm,hm,Qt,fm,Rt,hi,ct,Bt,fr,An,gm,gr,_m,fi,K,Pn,vm,jn,ym,Nn,bm,Lm,km,Sn,wm,Ws,Tm,xm,Mm,In,$m,On,qm,Fm,zm,Ut,Em,we,Dn,Cm,pt,Am,Qs,Pm,jm,_r,Nm,Sm,Im,Vt,Om,Ht,gi,ut,Gt,vr,Wn,Dm,yr,Wm,_i,X,Qn,Qm,fe,Rm,Rn,Bm,Um,Bn,Vm,Hm,Un,Gm,Km,Vn,Xm,Ym,Jm,Hn,Zm,Rs,eh,th,oh,Gn,nh,Kn,sh,ah,rh,Kt,ih,Te,Xn,lh,mt,dh,Bs,ch,ph,br,uh,mh,hh,Xt,fh,Yt,vi,ht,Jt,Lr,Yn,gh,kr,_h,yi,Y,Jn,vh,Pe,yh,Zn,bh,Lh,wr,kh,wh,Tr,Th,xh,Mh,es,$h,Us,qh,Fh,zh,ts,Eh,os,Ch,Ah,Ph,Zt,jh,xe,ns,Nh,ft,Sh,Vs,Ih,Oh,xr,Dh,Wh,Qh,eo,Rh,to,bi;return l=new re({}),D=new re({}),zo=new re({}),Eo=new S({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L40"}}),bt=new Re({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[D_]},$$scope:{ctx:F}}}),Ao=new re({}),Po=new S({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"tesseract_config",val:" = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv3FeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.LayoutLMv3FeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv3FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.LayoutLMv3FeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.LayoutLMv3FeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"},{anchor:"transformers.LayoutLMv3FeatureExtractor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv3FeatureExtractor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv3FeatureExtractor.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract. For example: &#x2018;&#x2014;psm 6&#x2019;.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>LayoutLMv3FeatureExtractor uses Google&#x2019;s Tesseract OCR engine under the hood.</p>

					</div>`,name:"tesseract_config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L81"}}),No=new S({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L147",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),kt=new Re({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[W_]},$$scope:{ctx:F}}}),So=new re({}),Io=new S({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),Do=new S({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),Wo=new S({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),Qo=new re({}),Ro=new S({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),Vo=new S({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),Ho=new re({}),Go=new S({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),Ko=new S({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),Zo=new re({}),en=new S({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L753"}}),nn=new S({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L844",returnDescription:`
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
`}}),Ft=new Ee({props:{$$slots:{default:[Q_]},$$scope:{ctx:F}}}),zt=new Re({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[R_]},$$scope:{ctx:F}}}),sn=new re({}),an=new S({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1289"}}),pn=new S({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1301",returnDescription:`
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
`}}),Ct=new Ee({props:{$$slots:{default:[B_]},$$scope:{ctx:F}}}),At=new Re({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[U_]},$$scope:{ctx:F}}}),un=new re({}),mn=new S({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1041"}}),bn=new S({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1058",returnDescription:`
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
`}}),jt=new Ee({props:{$$slots:{default:[V_]},$$scope:{ctx:F}}}),Nt=new Re({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[H_]},$$scope:{ctx:F}}}),Ln=new re({}),kn=new S({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1156"}}),Mn=new S({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1169",returnDescription:`
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
`}}),It=new Ee({props:{$$slots:{default:[G_]},$$scope:{ctx:F}}}),Ot=new Re({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[K_]},$$scope:{ctx:F}}}),$n=new re({}),qn=new S({props:{name:"class transformers.TFLayoutLMv3Model",anchor:"transformers.TFLayoutLMv3Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1119"}}),Wt=new Ee({props:{$$slots:{default:[X_]},$$scope:{ctx:F}}}),Cn=new S({props:{name:"call",anchor:"transformers.TFLayoutLMv3Model.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1127",returnDescription:`
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
`}}),Qt=new Ee({props:{$$slots:{default:[Y_]},$$scope:{ctx:F}}}),Rt=new Re({props:{anchor:"transformers.TFLayoutLMv3Model.call.example",$$slots:{default:[J_]},$$scope:{ctx:F}}}),An=new re({}),Pn=new S({props:{name:"class transformers.TFLayoutLMv3ForSequenceClassification",anchor:"transformers.TFLayoutLMv3ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1244"}}),Ut=new Ee({props:{$$slots:{default:[Z_]},$$scope:{ctx:F}}}),Dn=new S({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1254",returnDescription:`
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
`}}),Vt=new Ee({props:{$$slots:{default:[ev]},$$scope:{ctx:F}}}),Ht=new Re({props:{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.example",$$slots:{default:[tv]},$$scope:{ctx:F}}}),Wn=new re({}),Qn=new S({props:{name:"class transformers.TFLayoutLMv3ForTokenClassification",anchor:"transformers.TFLayoutLMv3ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1355"}}),Kt=new Ee({props:{$$slots:{default:[ov]},$$scope:{ctx:F}}}),Xn=new S({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1374",returnDescription:`
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
`}}),Xt=new Ee({props:{$$slots:{default:[nv]},$$scope:{ctx:F}}}),Yt=new Re({props:{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.example",$$slots:{default:[sv]},$$scope:{ctx:F}}}),Yn=new re({}),Jn=new S({props:{name:"class transformers.TFLayoutLMv3ForQuestionAnswering",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1484"}}),Zt=new Ee({props:{$$slots:{default:[av]},$$scope:{ctx:F}}}),ns=new S({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1496",returnDescription:`
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
`}}),eo=new Ee({props:{$$slots:{default:[rv]},$$scope:{ctx:F}}}),to=new Re({props:{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.example",$$slots:{default:[iv]},$$scope:{ctx:F}}}),{c(){c=a("meta"),y=u(),f=a("h1"),p=a("a"),v=a("span"),L(l.$$.fragment),h=u(),$=a("span"),B=n("LayoutLMv3"),I=u(),q=a("h2"),O=a("a"),P=a("span"),L(D.$$.fragment),U=u(),j=a("span"),V=n("Overview"),Q=u(),b=a("p"),z=n("The LayoutLMv3 model was proposed in "),N=a("a"),ee=n("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),te=n(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),C=a("a"),oe=n("LayoutLMv2"),ne=n(" by using patch embeddings (as in "),is=a("a"),nl=n("ViT"),sl=n(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),Wr=u(),ls=a("p"),al=n("The abstract from the paper is the following:"),Qr=u(),ds=a("p"),ia=a("em"),rl=n("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),Rr=u(),cs=a("p"),il=n("Tips:"),Br=u(),_e=a("ul"),gt=a("li"),ll=n("In terms of data processing, LayoutLMv3 is identical to its predecessor "),ps=a("a"),dl=n("LayoutLMv2"),cl=n(", except that:"),bo=a("ul"),la=a("li"),pl=n("images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),ul=u(),ie=a("li"),ml=n(`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),us=a("a"),hl=n("LayoutLMv3Processor"),fl=n(" which internally combines a "),ms=a("a"),gl=n("LayoutLMv3FeatureExtractor"),_l=n(" (for the image modality) and a "),hs=a("a"),vl=n("LayoutLMv3Tokenizer"),yl=n("/"),fs=a("a"),bl=n("LayoutLMv3TokenizerFast"),Ll=n(" (for the text modality) to prepare all data for the model."),kl=u(),Ve=a("li"),wl=n("Regarding usage of "),gs=a("a"),Tl=n("LayoutLMv3Processor"),xl=n(", we refer to the "),_s=a("a"),Ml=n("usage guide"),$l=n(" of its predecessor."),ql=u(),Lo=a("li"),Fl=n("Demo notebooks for LayoutLMv3 can be found "),ko=a("a"),zl=n("here"),El=n("."),Cl=u(),wo=a("li"),Al=n("Demo scripts can be found "),To=a("a"),Pl=n("here"),jl=n("."),Ur=u(),_t=a("img"),Vr=u(),vt=a("small"),Nl=n("LayoutLMv3 architecture. Taken from the "),vs=a("a"),Sl=n("original paper"),Il=n("."),Hr=u(),J=a("p"),Ol=n("This model was contributed by "),xo=a("a"),Dl=n("nielsr"),Wl=n(". The TensorFlow version of this model was added by "),Mo=a("a"),Ql=n("chriskoo"),Rl=n(", "),$o=a("a"),Bl=n("tokec"),Ul=n(", and "),qo=a("a"),Vl=n("lre"),Hl=n(". The original code can be found "),Fo=a("a"),Gl=n("here"),Kl=n("."),Gr=u(),He=a("h2"),yt=a("a"),da=a("span"),L(zo.$$.fragment),Xl=u(),ca=a("span"),Yl=n("LayoutLMv3Config"),Kr=u(),le=a("div"),L(Eo.$$.fragment),Jl=u(),Ge=a("p"),Zl=n("This is the configuration class to store the configuration of a "),ys=a("a"),ed=n("LayoutLMv3Model"),td=n(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),Co=a("a"),od=n("microsoft/layoutlmv3-base"),nd=n(" architecture."),sd=u(),Ke=a("p"),ad=n("Configuration objects inherit from "),bs=a("a"),rd=n("PretrainedConfig"),id=n(` and can be used to control the model outputs. Read the
documentation from `),Ls=a("a"),ld=n("PretrainedConfig"),dd=n(" for more information."),cd=u(),L(bt.$$.fragment),Xr=u(),Xe=a("h2"),Lt=a("a"),pa=a("span"),L(Ao.$$.fragment),pd=u(),ua=a("span"),ud=n("LayoutLMv3FeatureExtractor"),Yr=u(),de=a("div"),L(Po.$$.fragment),md=u(),ma=a("p"),hd=n(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),fd=u(),jo=a("p"),gd=n("This feature extractor inherits from "),ha=a("code"),_d=n("PreTrainedFeatureExtractor()"),vd=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),yd=u(),Se=a("div"),L(No.$$.fragment),bd=u(),fa=a("p"),Ld=n("Main method to prepare for the model one or several image(s)."),kd=u(),L(kt.$$.fragment),Jr=u(),Ye=a("h2"),wt=a("a"),ga=a("span"),L(So.$$.fragment),wd=u(),_a=a("span"),Td=n("LayoutLMv3Tokenizer"),Zr=u(),G=a("div"),L(Io.$$.fragment),xd=u(),H=a("p"),Md=n("Construct a LayoutLMv3 tokenizer. Based on "),va=a("code"),$d=n("RoBERTatokenizer"),qd=n(` (Byte Pair Encoding or BPE).
`),ks=a("a"),Fd=n("LayoutLMv3Tokenizer"),zd=n(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),ya=a("code"),Ed=n("input_ids"),Cd=n(", "),ba=a("code"),Ad=n("attention_mask"),Pd=n(", "),La=a("code"),jd=n("token_type_ids"),Nd=n(", "),ka=a("code"),Sd=n("bbox"),Id=n(", and optional "),wa=a("code"),Od=n("labels"),Dd=n(` (for token
classification).`),Wd=u(),Oo=a("p"),Qd=n("This tokenizer inherits from "),ws=a("a"),Rd=n("PreTrainedTokenizer"),Bd=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ud=u(),Ts=a("p"),xs=a("a"),Vd=n("LayoutLMv3Tokenizer"),Hd=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Gd=u(),Tt=a("div"),L(Do.$$.fragment),Kd=u(),Ta=a("p"),Xd=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Yd=u(),Ms=a("div"),L(Wo.$$.fragment),ei=u(),Je=a("h2"),xt=a("a"),xa=a("span"),L(Qo.$$.fragment),Jd=u(),Ma=a("span"),Zd=n("LayoutLMv3TokenizerFast"),ti=u(),ce=a("div"),L(Ro.$$.fragment),ec=u(),Bo=a("p"),tc=n("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),$a=a("em"),oc=n("tokenizers"),nc=n(" library). Based on BPE."),sc=u(),Uo=a("p"),ac=n("This tokenizer inherits from "),$s=a("a"),rc=n("PreTrainedTokenizerFast"),ic=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),lc=u(),Mt=a("div"),L(Vo.$$.fragment),dc=u(),qa=a("p"),cc=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),oi=u(),Ze=a("h2"),$t=a("a"),Fa=a("span"),L(Ho.$$.fragment),pc=u(),za=a("span"),uc=n("LayoutLMv3Processor"),ni=u(),se=a("div"),L(Go.$$.fragment),mc=u(),Ea=a("p"),hc=n(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),fc=u(),qs=a("p"),Fs=a("a"),gc=n("LayoutLMv3Processor"),_c=n(" offers all the functionalities you need to prepare data for the model."),vc=u(),W=a("p"),yc=n("It first uses "),zs=a("a"),bc=n("LayoutLMv3FeatureExtractor"),Lc=n(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Es=a("a"),kc=n("LayoutLMv3Tokenizer"),wc=n(` or
`),Cs=a("a"),Tc=n("LayoutLMv3TokenizerFast"),xc=n(", which turns the words and bounding boxes into token-level "),Ca=a("code"),Mc=n("input_ids"),$c=n(`,
`),Aa=a("code"),qc=n("attention_mask"),Fc=n(", "),Pa=a("code"),zc=n("token_type_ids"),Ec=n(", "),ja=a("code"),Cc=n("bbox"),Ac=n(". Optionally, one can provide integer "),Na=a("code"),Pc=n("word_labels"),jc=n(`, which are turned
into token-level `),Sa=a("code"),Nc=n("labels"),Sc=n(" for token classification tasks (such as FUNSD, CORD)."),Ic=u(),Ie=a("div"),L(Ko.$$.fragment),Oc=u(),E=a("p"),Dc=n("This method first forwards the "),Ia=a("code"),Wc=n("images"),Qc=n(" argument to "),Xo=a("a"),Oa=a("strong"),Rc=n("call"),Bc=n("()"),Uc=n(`. In case
`),As=a("a"),Vc=n("LayoutLMv3FeatureExtractor"),Hc=n(" was initialized with "),Da=a("code"),Gc=n("apply_ocr"),Kc=n(" set to "),Wa=a("code"),Xc=n("True"),Yc=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Yo=a("a"),Qa=a("strong"),Jc=n("call"),Zc=n("()"),ep=n(` and returns the output,
together with resized and normalized `),Ra=a("code"),tp=n("pixel_values"),op=n(". In case "),Ps=a("a"),np=n("LayoutLMv3FeatureExtractor"),sp=n(` was initialized
with `),Ba=a("code"),ap=n("apply_ocr"),rp=n(" set to "),Ua=a("code"),ip=n("False"),lp=n(", it passes the words ("),Va=a("code"),dp=n("text"),cp=n("/`"),Ha=a("code"),pp=n("text_pair"),up=n(") and "),Ga=a("code"),mp=n("boxes"),hp=n(` specified by the user
along with the additional arguments to `),Jo=a("a"),Ka=a("strong"),fp=n("call"),gp=n("()"),_p=n(` and returns the output, together with
resized and normalized `),Xa=a("code"),vp=n("pixel_values"),yp=n("."),bp=u(),Ya=a("p"),Lp=n("Please refer to the docstring of the above two methods for more information."),si=u(),et=a("h2"),qt=a("a"),Ja=a("span"),L(Zo.$$.fragment),kp=u(),Za=a("span"),wp=n("LayoutLMv3Model"),ai=u(),Ce=a("div"),L(en.$$.fragment),Tp=u(),tn=a("p"),xp=n(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),on=a("a"),Mp=n("torch.nn.Module"),$p=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qp=u(),ve=a("div"),L(nn.$$.fragment),Fp=u(),tt=a("p"),zp=n("The "),js=a("a"),Ep=n("LayoutLMv3Model"),Cp=n(" forward method, overrides the "),er=a("code"),Ap=n("__call__"),Pp=n(" special method."),jp=u(),L(Ft.$$.fragment),Np=u(),L(zt.$$.fragment),ri=u(),ot=a("h2"),Et=a("a"),tr=a("span"),L(sn.$$.fragment),Sp=u(),or=a("span"),Ip=n("LayoutLMv3ForSequenceClassification"),ii=u(),pe=a("div"),L(an.$$.fragment),Op=u(),rn=a("p"),Dp=n(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),ln=a("a"),Wp=n("RVL-CDIP"),Qp=n(" dataset."),Rp=u(),dn=a("p"),Bp=n("This model is a PyTorch "),cn=a("a"),Up=n("torch.nn.Module"),Vp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hp=u(),ye=a("div"),L(pn.$$.fragment),Gp=u(),nt=a("p"),Kp=n("The "),Ns=a("a"),Xp=n("LayoutLMv3ForSequenceClassification"),Yp=n(" forward method, overrides the "),nr=a("code"),Jp=n("__call__"),Zp=n(" special method."),eu=u(),L(Ct.$$.fragment),tu=u(),L(At.$$.fragment),li=u(),st=a("h2"),Pt=a("a"),sr=a("span"),L(un.$$.fragment),ou=u(),ar=a("span"),nu=n("LayoutLMv3ForTokenClassification"),di=u(),ue=a("div"),L(mn.$$.fragment),su=u(),me=a("p"),au=n(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),hn=a("a"),ru=n("FUNSD"),iu=n(`,
`),fn=a("a"),lu=n("SROIE"),du=n(", "),gn=a("a"),cu=n("CORD"),pu=n(` and
`),_n=a("a"),uu=n("Kleister-NDA"),mu=n("."),hu=u(),vn=a("p"),fu=n("This model is a PyTorch "),yn=a("a"),gu=n("torch.nn.Module"),_u=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vu=u(),be=a("div"),L(bn.$$.fragment),yu=u(),at=a("p"),bu=n("The "),Ss=a("a"),Lu=n("LayoutLMv3ForTokenClassification"),ku=n(" forward method, overrides the "),rr=a("code"),wu=n("__call__"),Tu=n(" special method."),xu=u(),L(jt.$$.fragment),Mu=u(),L(Nt.$$.fragment),ci=u(),rt=a("h2"),St=a("a"),ir=a("span"),L(Ln.$$.fragment),$u=u(),lr=a("span"),qu=n("LayoutLMv3ForQuestionAnswering"),pi=u(),he=a("div"),L(kn.$$.fragment),Fu=u(),Ae=a("p"),zu=n(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),wn=a("a"),Eu=n("DocVQA"),Cu=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),dr=a("code"),Au=n("span start logits"),Pu=n(" and "),cr=a("code"),ju=n("span end logits"),Nu=n(")."),Su=u(),Tn=a("p"),Iu=n("This model is a PyTorch "),xn=a("a"),Ou=n("torch.nn.Module"),Du=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wu=u(),Le=a("div"),L(Mn.$$.fragment),Qu=u(),it=a("p"),Ru=n("The "),Is=a("a"),Bu=n("LayoutLMv3ForQuestionAnswering"),Uu=n(" forward method, overrides the "),pr=a("code"),Vu=n("__call__"),Hu=n(" special method."),Gu=u(),L(It.$$.fragment),Ku=u(),L(Ot.$$.fragment),ui=u(),lt=a("h2"),Dt=a("a"),ur=a("span"),L($n.$$.fragment),Xu=u(),mr=a("span"),Yu=n("TFLayoutLMv3Model"),mi=u(),ae=a("div"),L(qn.$$.fragment),Ju=u(),Fn=a("p"),Zu=n(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Os=a("a"),em=n("TFPreTrainedModel"),tm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),om=u(),zn=a("p"),nm=n("This model is also a "),En=a("a"),sm=n("tf.keras.Model"),am=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rm=u(),L(Wt.$$.fragment),im=u(),ke=a("div"),L(Cn.$$.fragment),lm=u(),dt=a("p"),dm=n("The "),Ds=a("a"),cm=n("TFLayoutLMv3Model"),pm=n(" forward method, overrides the "),hr=a("code"),um=n("__call__"),mm=n(" special method."),hm=u(),L(Qt.$$.fragment),fm=u(),L(Rt.$$.fragment),hi=u(),ct=a("h2"),Bt=a("a"),fr=a("span"),L(An.$$.fragment),gm=u(),gr=a("span"),_m=n("TFLayoutLMv3ForSequenceClassification"),fi=u(),K=a("div"),L(Pn.$$.fragment),vm=u(),jn=a("p"),ym=n(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Nn=a("a"),bm=n("RVL-CDIP"),Lm=n(" dataset."),km=u(),Sn=a("p"),wm=n("This model inherits from "),Ws=a("a"),Tm=n("TFPreTrainedModel"),xm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mm=u(),In=a("p"),$m=n("This model is also a "),On=a("a"),qm=n("tf.keras.Model"),Fm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zm=u(),L(Ut.$$.fragment),Em=u(),we=a("div"),L(Dn.$$.fragment),Cm=u(),pt=a("p"),Am=n("The "),Qs=a("a"),Pm=n("TFLayoutLMv3ForSequenceClassification"),jm=n(" forward method, overrides the "),_r=a("code"),Nm=n("__call__"),Sm=n(" special method."),Im=u(),L(Vt.$$.fragment),Om=u(),L(Ht.$$.fragment),gi=u(),ut=a("h2"),Gt=a("a"),vr=a("span"),L(Wn.$$.fragment),Dm=u(),yr=a("span"),Wm=n("TFLayoutLMv3ForTokenClassification"),_i=u(),X=a("div"),L(Qn.$$.fragment),Qm=u(),fe=a("p"),Rm=n(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Rn=a("a"),Bm=n("FUNSD"),Um=n(`,
`),Bn=a("a"),Vm=n("SROIE"),Hm=n(", "),Un=a("a"),Gm=n("CORD"),Km=n(` and
`),Vn=a("a"),Xm=n("Kleister-NDA"),Ym=n("."),Jm=u(),Hn=a("p"),Zm=n("This model inherits from "),Rs=a("a"),eh=n("TFPreTrainedModel"),th=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oh=u(),Gn=a("p"),nh=n("This model is also a "),Kn=a("a"),sh=n("tf.keras.Model"),ah=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rh=u(),L(Kt.$$.fragment),ih=u(),Te=a("div"),L(Xn.$$.fragment),lh=u(),mt=a("p"),dh=n("The "),Bs=a("a"),ch=n("TFLayoutLMv3ForTokenClassification"),ph=n(" forward method, overrides the "),br=a("code"),uh=n("__call__"),mh=n(" special method."),hh=u(),L(Xt.$$.fragment),fh=u(),L(Yt.$$.fragment),vi=u(),ht=a("h2"),Jt=a("a"),Lr=a("span"),L(Yn.$$.fragment),gh=u(),kr=a("span"),_h=n("TFLayoutLMv3ForQuestionAnswering"),yi=u(),Y=a("div"),L(Jn.$$.fragment),vh=u(),Pe=a("p"),yh=n(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),Zn=a("a"),bh=n("DocVQA"),Lh=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),wr=a("code"),kh=n("span start logits"),wh=n(" and "),Tr=a("code"),Th=n("span end logits"),xh=n(")."),Mh=u(),es=a("p"),$h=n("This model inherits from "),Us=a("a"),qh=n("TFPreTrainedModel"),Fh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh=u(),ts=a("p"),Eh=n("This model is also a "),os=a("a"),Ch=n("tf.keras.Model"),Ah=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ph=u(),L(Zt.$$.fragment),jh=u(),xe=a("div"),L(ns.$$.fragment),Nh=u(),ft=a("p"),Sh=n("The "),Vs=a("a"),Ih=n("TFLayoutLMv3ForQuestionAnswering"),Oh=n(" forward method, overrides the "),xr=a("code"),Dh=n("__call__"),Wh=n(" special method."),Qh=u(),L(eo.$$.fragment),Rh=u(),L(to.$$.fragment),this.h()},l(o){const g=S_('[data-svelte="svelte-1phssyn"]',document.head);c=r(g,"META",{name:!0,content:!0}),g.forEach(t),y=m(o),f=r(o,"H1",{class:!0});var ss=i(f);p=r(ss,"A",{id:!0,class:!0,href:!0});var Mr=i(p);v=r(Mr,"SPAN",{});var $r=i(v);k(l.$$.fragment,$r),$r.forEach(t),Mr.forEach(t),h=m(ss),$=r(ss,"SPAN",{});var qr=i($);B=s(qr,"LayoutLMv3"),qr.forEach(t),ss.forEach(t),I=m(o),q=r(o,"H2",{class:!0});var as=i(q);O=r(as,"A",{id:!0,class:!0,href:!0});var Fr=i(O);P=r(Fr,"SPAN",{});var zr=i(P);k(D.$$.fragment,zr),zr.forEach(t),Fr.forEach(t),U=m(as),j=r(as,"SPAN",{});var Er=i(j);V=s(Er,"Overview"),Er.forEach(t),as.forEach(t),Q=m(o),b=r(o,"P",{});var je=i(b);z=s(je,"The LayoutLMv3 model was proposed in "),N=r(je,"A",{href:!0,rel:!0});var Cr=i(N);ee=s(Cr,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),Cr.forEach(t),te=s(je,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),C=r(je,"A",{href:!0});var Ar=i(C);oe=s(Ar,"LayoutLMv2"),Ar.forEach(t),ne=s(je," by using patch embeddings (as in "),is=r(je,"A",{href:!0});var Pr=i(is);nl=s(Pr,"ViT"),Pr.forEach(t),sl=s(je,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),je.forEach(t),Wr=m(o),ls=r(o,"P",{});var jr=i(ls);al=s(jr,"The abstract from the paper is the following:"),jr.forEach(t),Qr=m(o),ds=r(o,"P",{});var Nr=i(ds);ia=r(Nr,"EM",{});var Sr=i(ia);rl=s(Sr,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),Sr.forEach(t),Nr.forEach(t),Rr=m(o),cs=r(o,"P",{});var Ir=i(cs);il=s(Ir,"Tips:"),Ir.forEach(t),Br=m(o),_e=r(o,"UL",{});var Ne=i(_e);gt=r(Ne,"LI",{});var oo=i(gt);ll=s(oo,"In terms of data processing, LayoutLMv3 is identical to its predecessor "),ps=r(oo,"A",{href:!0});var Or=i(ps);dl=s(Or,"LayoutLMv2"),Or.forEach(t),cl=s(oo,", except that:"),bo=r(oo,"UL",{});var rs=i(bo);la=r(rs,"LI",{});var Dr=i(la);pl=s(Dr,"images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Dr.forEach(t),ul=m(rs),ie=r(rs,"LI",{});var ge=i(ie);ml=s(ge,`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),us=r(ge,"A",{href:!0});var Xh=i(us);hl=s(Xh,"LayoutLMv3Processor"),Xh.forEach(t),fl=s(ge," which internally combines a "),ms=r(ge,"A",{href:!0});var Yh=i(ms);gl=s(Yh,"LayoutLMv3FeatureExtractor"),Yh.forEach(t),_l=s(ge," (for the image modality) and a "),hs=r(ge,"A",{href:!0});var Jh=i(hs);vl=s(Jh,"LayoutLMv3Tokenizer"),Jh.forEach(t),yl=s(ge,"/"),fs=r(ge,"A",{href:!0});var Zh=i(fs);bl=s(Zh,"LayoutLMv3TokenizerFast"),Zh.forEach(t),Ll=s(ge," (for the text modality) to prepare all data for the model."),ge.forEach(t),rs.forEach(t),oo.forEach(t),kl=m(Ne),Ve=r(Ne,"LI",{});var Hs=i(Ve);wl=s(Hs,"Regarding usage of "),gs=r(Hs,"A",{href:!0});var ef=i(gs);Tl=s(ef,"LayoutLMv3Processor"),ef.forEach(t),xl=s(Hs,", we refer to the "),_s=r(Hs,"A",{href:!0});var tf=i(_s);Ml=s(tf,"usage guide"),tf.forEach(t),$l=s(Hs," of its predecessor."),Hs.forEach(t),ql=m(Ne),Lo=r(Ne,"LI",{});var Li=i(Lo);Fl=s(Li,"Demo notebooks for LayoutLMv3 can be found "),ko=r(Li,"A",{href:!0,rel:!0});var of=i(ko);zl=s(of,"here"),of.forEach(t),El=s(Li,"."),Li.forEach(t),Cl=m(Ne),wo=r(Ne,"LI",{});var ki=i(wo);Al=s(ki,"Demo scripts can be found "),To=r(ki,"A",{href:!0,rel:!0});var nf=i(To);Pl=s(nf,"here"),nf.forEach(t),jl=s(ki,"."),ki.forEach(t),Ne.forEach(t),Ur=m(o),_t=r(o,"IMG",{src:!0,alt:!0,width:!0}),Vr=m(o),vt=r(o,"SMALL",{});var wi=i(vt);Nl=s(wi,"LayoutLMv3 architecture. Taken from the "),vs=r(wi,"A",{href:!0});var sf=i(vs);Sl=s(sf,"original paper"),sf.forEach(t),Il=s(wi,"."),wi.forEach(t),Hr=m(o),J=r(o,"P",{});var Me=i(J);Ol=s(Me,"This model was contributed by "),xo=r(Me,"A",{href:!0,rel:!0});var af=i(xo);Dl=s(af,"nielsr"),af.forEach(t),Wl=s(Me,". The TensorFlow version of this model was added by "),Mo=r(Me,"A",{href:!0,rel:!0});var rf=i(Mo);Ql=s(rf,"chriskoo"),rf.forEach(t),Rl=s(Me,", "),$o=r(Me,"A",{href:!0,rel:!0});var lf=i($o);Bl=s(lf,"tokec"),lf.forEach(t),Ul=s(Me,", and "),qo=r(Me,"A",{href:!0,rel:!0});var df=i(qo);Vl=s(df,"lre"),df.forEach(t),Hl=s(Me,". The original code can be found "),Fo=r(Me,"A",{href:!0,rel:!0});var cf=i(Fo);Gl=s(cf,"here"),cf.forEach(t),Kl=s(Me,"."),Me.forEach(t),Gr=m(o),He=r(o,"H2",{class:!0});var Ti=i(He);yt=r(Ti,"A",{id:!0,class:!0,href:!0});var pf=i(yt);da=r(pf,"SPAN",{});var uf=i(da);k(zo.$$.fragment,uf),uf.forEach(t),pf.forEach(t),Xl=m(Ti),ca=r(Ti,"SPAN",{});var mf=i(ca);Yl=s(mf,"LayoutLMv3Config"),mf.forEach(t),Ti.forEach(t),Kr=m(o),le=r(o,"DIV",{class:!0});var no=i(le);k(Eo.$$.fragment,no),Jl=m(no),Ge=r(no,"P",{});var Gs=i(Ge);Zl=s(Gs,"This is the configuration class to store the configuration of a "),ys=r(Gs,"A",{href:!0});var hf=i(ys);ed=s(hf,"LayoutLMv3Model"),hf.forEach(t),td=s(Gs,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),Co=r(Gs,"A",{href:!0,rel:!0});var ff=i(Co);od=s(ff,"microsoft/layoutlmv3-base"),ff.forEach(t),nd=s(Gs," architecture."),Gs.forEach(t),sd=m(no),Ke=r(no,"P",{});var Ks=i(Ke);ad=s(Ks,"Configuration objects inherit from "),bs=r(Ks,"A",{href:!0});var gf=i(bs);rd=s(gf,"PretrainedConfig"),gf.forEach(t),id=s(Ks,` and can be used to control the model outputs. Read the
documentation from `),Ls=r(Ks,"A",{href:!0});var _f=i(Ls);ld=s(_f,"PretrainedConfig"),_f.forEach(t),dd=s(Ks," for more information."),Ks.forEach(t),cd=m(no),k(bt.$$.fragment,no),no.forEach(t),Xr=m(o),Xe=r(o,"H2",{class:!0});var xi=i(Xe);Lt=r(xi,"A",{id:!0,class:!0,href:!0});var vf=i(Lt);pa=r(vf,"SPAN",{});var yf=i(pa);k(Ao.$$.fragment,yf),yf.forEach(t),vf.forEach(t),pd=m(xi),ua=r(xi,"SPAN",{});var bf=i(ua);ud=s(bf,"LayoutLMv3FeatureExtractor"),bf.forEach(t),xi.forEach(t),Yr=m(o),de=r(o,"DIV",{class:!0});var so=i(de);k(Po.$$.fragment,so),md=m(so),ma=r(so,"P",{});var Lf=i(ma);hd=s(Lf,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Lf.forEach(t),fd=m(so),jo=r(so,"P",{});var Mi=i(jo);gd=s(Mi,"This feature extractor inherits from "),ha=r(Mi,"CODE",{});var kf=i(ha);_d=s(kf,"PreTrainedFeatureExtractor()"),kf.forEach(t),vd=s(Mi,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Mi.forEach(t),yd=m(so),Se=r(so,"DIV",{class:!0});var Xs=i(Se);k(No.$$.fragment,Xs),bd=m(Xs),fa=r(Xs,"P",{});var wf=i(fa);Ld=s(wf,"Main method to prepare for the model one or several image(s)."),wf.forEach(t),kd=m(Xs),k(kt.$$.fragment,Xs),Xs.forEach(t),so.forEach(t),Jr=m(o),Ye=r(o,"H2",{class:!0});var $i=i(Ye);wt=r($i,"A",{id:!0,class:!0,href:!0});var Tf=i(wt);ga=r(Tf,"SPAN",{});var xf=i(ga);k(So.$$.fragment,xf),xf.forEach(t),Tf.forEach(t),wd=m($i),_a=r($i,"SPAN",{});var Mf=i(_a);Td=s(Mf,"LayoutLMv3Tokenizer"),Mf.forEach(t),$i.forEach(t),Zr=m(o),G=r(o,"DIV",{class:!0});var $e=i(G);k(Io.$$.fragment,$e),xd=m($e),H=r($e,"P",{});var Z=i(H);Md=s(Z,"Construct a LayoutLMv3 tokenizer. Based on "),va=r(Z,"CODE",{});var $f=i(va);$d=s($f,"RoBERTatokenizer"),$f.forEach(t),qd=s(Z,` (Byte Pair Encoding or BPE).
`),ks=r(Z,"A",{href:!0});var qf=i(ks);Fd=s(qf,"LayoutLMv3Tokenizer"),qf.forEach(t),zd=s(Z,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),ya=r(Z,"CODE",{});var Ff=i(ya);Ed=s(Ff,"input_ids"),Ff.forEach(t),Cd=s(Z,", "),ba=r(Z,"CODE",{});var zf=i(ba);Ad=s(zf,"attention_mask"),zf.forEach(t),Pd=s(Z,", "),La=r(Z,"CODE",{});var Ef=i(La);jd=s(Ef,"token_type_ids"),Ef.forEach(t),Nd=s(Z,", "),ka=r(Z,"CODE",{});var Cf=i(ka);Sd=s(Cf,"bbox"),Cf.forEach(t),Id=s(Z,", and optional "),wa=r(Z,"CODE",{});var Af=i(wa);Od=s(Af,"labels"),Af.forEach(t),Dd=s(Z,` (for token
classification).`),Z.forEach(t),Wd=m($e),Oo=r($e,"P",{});var qi=i(Oo);Qd=s(qi,"This tokenizer inherits from "),ws=r(qi,"A",{href:!0});var Pf=i(ws);Rd=s(Pf,"PreTrainedTokenizer"),Pf.forEach(t),Bd=s(qi,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),qi.forEach(t),Ud=m($e),Ts=r($e,"P",{});var Bh=i(Ts);xs=r(Bh,"A",{href:!0});var jf=i(xs);Vd=s(jf,"LayoutLMv3Tokenizer"),jf.forEach(t),Hd=s(Bh,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Bh.forEach(t),Gd=m($e),Tt=r($e,"DIV",{class:!0});var Fi=i(Tt);k(Do.$$.fragment,Fi),Kd=m(Fi),Ta=r(Fi,"P",{});var Nf=i(Ta);Xd=s(Nf,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Nf.forEach(t),Fi.forEach(t),Yd=m($e),Ms=r($e,"DIV",{class:!0});var Sf=i(Ms);k(Wo.$$.fragment,Sf),Sf.forEach(t),$e.forEach(t),ei=m(o),Je=r(o,"H2",{class:!0});var zi=i(Je);xt=r(zi,"A",{id:!0,class:!0,href:!0});var If=i(xt);xa=r(If,"SPAN",{});var Of=i(xa);k(Qo.$$.fragment,Of),Of.forEach(t),If.forEach(t),Jd=m(zi),Ma=r(zi,"SPAN",{});var Df=i(Ma);Zd=s(Df,"LayoutLMv3TokenizerFast"),Df.forEach(t),zi.forEach(t),ti=m(o),ce=r(o,"DIV",{class:!0});var ao=i(ce);k(Ro.$$.fragment,ao),ec=m(ao),Bo=r(ao,"P",{});var Ei=i(Bo);tc=s(Ei,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),$a=r(Ei,"EM",{});var Wf=i($a);oc=s(Wf,"tokenizers"),Wf.forEach(t),nc=s(Ei," library). Based on BPE."),Ei.forEach(t),sc=m(ao),Uo=r(ao,"P",{});var Ci=i(Uo);ac=s(Ci,"This tokenizer inherits from "),$s=r(Ci,"A",{href:!0});var Qf=i($s);rc=s(Qf,"PreTrainedTokenizerFast"),Qf.forEach(t),ic=s(Ci,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ci.forEach(t),lc=m(ao),Mt=r(ao,"DIV",{class:!0});var Ai=i(Mt);k(Vo.$$.fragment,Ai),dc=m(Ai),qa=r(Ai,"P",{});var Rf=i(qa);cc=s(Rf,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Rf.forEach(t),Ai.forEach(t),ao.forEach(t),oi=m(o),Ze=r(o,"H2",{class:!0});var Pi=i(Ze);$t=r(Pi,"A",{id:!0,class:!0,href:!0});var Bf=i($t);Fa=r(Bf,"SPAN",{});var Uf=i(Fa);k(Ho.$$.fragment,Uf),Uf.forEach(t),Bf.forEach(t),pc=m(Pi),za=r(Pi,"SPAN",{});var Vf=i(za);uc=s(Vf,"LayoutLMv3Processor"),Vf.forEach(t),Pi.forEach(t),ni=m(o),se=r(o,"DIV",{class:!0});var Oe=i(se);k(Go.$$.fragment,Oe),mc=m(Oe),Ea=r(Oe,"P",{});var Hf=i(Ea);hc=s(Hf,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Hf.forEach(t),fc=m(Oe),qs=r(Oe,"P",{});var Uh=i(qs);Fs=r(Uh,"A",{href:!0});var Gf=i(Fs);gc=s(Gf,"LayoutLMv3Processor"),Gf.forEach(t),_c=s(Uh," offers all the functionalities you need to prepare data for the model."),Uh.forEach(t),vc=m(Oe),W=r(Oe,"P",{});var R=i(W);yc=s(R,"It first uses "),zs=r(R,"A",{href:!0});var Kf=i(zs);bc=s(Kf,"LayoutLMv3FeatureExtractor"),Kf.forEach(t),Lc=s(R,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Es=r(R,"A",{href:!0});var Xf=i(Es);kc=s(Xf,"LayoutLMv3Tokenizer"),Xf.forEach(t),wc=s(R,` or
`),Cs=r(R,"A",{href:!0});var Yf=i(Cs);Tc=s(Yf,"LayoutLMv3TokenizerFast"),Yf.forEach(t),xc=s(R,", which turns the words and bounding boxes into token-level "),Ca=r(R,"CODE",{});var Jf=i(Ca);Mc=s(Jf,"input_ids"),Jf.forEach(t),$c=s(R,`,
`),Aa=r(R,"CODE",{});var Zf=i(Aa);qc=s(Zf,"attention_mask"),Zf.forEach(t),Fc=s(R,", "),Pa=r(R,"CODE",{});var eg=i(Pa);zc=s(eg,"token_type_ids"),eg.forEach(t),Ec=s(R,", "),ja=r(R,"CODE",{});var tg=i(ja);Cc=s(tg,"bbox"),tg.forEach(t),Ac=s(R,". Optionally, one can provide integer "),Na=r(R,"CODE",{});var og=i(Na);Pc=s(og,"word_labels"),og.forEach(t),jc=s(R,`, which are turned
into token-level `),Sa=r(R,"CODE",{});var ng=i(Sa);Nc=s(ng,"labels"),ng.forEach(t),Sc=s(R," for token classification tasks (such as FUNSD, CORD)."),R.forEach(t),Ic=m(Oe),Ie=r(Oe,"DIV",{class:!0});var Ys=i(Ie);k(Ko.$$.fragment,Ys),Oc=m(Ys),E=r(Ys,"P",{});var A=i(E);Dc=s(A,"This method first forwards the "),Ia=r(A,"CODE",{});var sg=i(Ia);Wc=s(sg,"images"),sg.forEach(t),Qc=s(A," argument to "),Xo=r(A,"A",{href:!0});var Vh=i(Xo);Oa=r(Vh,"STRONG",{});var ag=i(Oa);Rc=s(ag,"call"),ag.forEach(t),Bc=s(Vh,"()"),Vh.forEach(t),Uc=s(A,`. In case
`),As=r(A,"A",{href:!0});var rg=i(As);Vc=s(rg,"LayoutLMv3FeatureExtractor"),rg.forEach(t),Hc=s(A," was initialized with "),Da=r(A,"CODE",{});var ig=i(Da);Gc=s(ig,"apply_ocr"),ig.forEach(t),Kc=s(A," set to "),Wa=r(A,"CODE",{});var lg=i(Wa);Xc=s(lg,"True"),lg.forEach(t),Yc=s(A,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Yo=r(A,"A",{href:!0});var Hh=i(Yo);Qa=r(Hh,"STRONG",{});var dg=i(Qa);Jc=s(dg,"call"),dg.forEach(t),Zc=s(Hh,"()"),Hh.forEach(t),ep=s(A,` and returns the output,
together with resized and normalized `),Ra=r(A,"CODE",{});var cg=i(Ra);tp=s(cg,"pixel_values"),cg.forEach(t),op=s(A,". In case "),Ps=r(A,"A",{href:!0});var pg=i(Ps);np=s(pg,"LayoutLMv3FeatureExtractor"),pg.forEach(t),sp=s(A,` was initialized
with `),Ba=r(A,"CODE",{});var ug=i(Ba);ap=s(ug,"apply_ocr"),ug.forEach(t),rp=s(A," set to "),Ua=r(A,"CODE",{});var mg=i(Ua);ip=s(mg,"False"),mg.forEach(t),lp=s(A,", it passes the words ("),Va=r(A,"CODE",{});var hg=i(Va);dp=s(hg,"text"),hg.forEach(t),cp=s(A,"/`"),Ha=r(A,"CODE",{});var fg=i(Ha);pp=s(fg,"text_pair"),fg.forEach(t),up=s(A,") and "),Ga=r(A,"CODE",{});var gg=i(Ga);mp=s(gg,"boxes"),gg.forEach(t),hp=s(A,` specified by the user
along with the additional arguments to `),Jo=r(A,"A",{href:!0});var Gh=i(Jo);Ka=r(Gh,"STRONG",{});var _g=i(Ka);fp=s(_g,"call"),_g.forEach(t),gp=s(Gh,"()"),Gh.forEach(t),_p=s(A,` and returns the output, together with
resized and normalized `),Xa=r(A,"CODE",{});var vg=i(Xa);vp=s(vg,"pixel_values"),vg.forEach(t),yp=s(A,"."),A.forEach(t),bp=m(Ys),Ya=r(Ys,"P",{});var yg=i(Ya);Lp=s(yg,"Please refer to the docstring of the above two methods for more information."),yg.forEach(t),Ys.forEach(t),Oe.forEach(t),si=m(o),et=r(o,"H2",{class:!0});var ji=i(et);qt=r(ji,"A",{id:!0,class:!0,href:!0});var bg=i(qt);Ja=r(bg,"SPAN",{});var Lg=i(Ja);k(Zo.$$.fragment,Lg),Lg.forEach(t),bg.forEach(t),kp=m(ji),Za=r(ji,"SPAN",{});var kg=i(Za);wp=s(kg,"LayoutLMv3Model"),kg.forEach(t),ji.forEach(t),ai=m(o),Ce=r(o,"DIV",{class:!0});var Js=i(Ce);k(en.$$.fragment,Js),Tp=m(Js),tn=r(Js,"P",{});var Ni=i(tn);xp=s(Ni,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),on=r(Ni,"A",{href:!0,rel:!0});var wg=i(on);Mp=s(wg,"torch.nn.Module"),wg.forEach(t),$p=s(Ni,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ni.forEach(t),qp=m(Js),ve=r(Js,"DIV",{class:!0});var ro=i(ve);k(nn.$$.fragment,ro),Fp=m(ro),tt=r(ro,"P",{});var Zs=i(tt);zp=s(Zs,"The "),js=r(Zs,"A",{href:!0});var Tg=i(js);Ep=s(Tg,"LayoutLMv3Model"),Tg.forEach(t),Cp=s(Zs," forward method, overrides the "),er=r(Zs,"CODE",{});var xg=i(er);Ap=s(xg,"__call__"),xg.forEach(t),Pp=s(Zs," special method."),Zs.forEach(t),jp=m(ro),k(Ft.$$.fragment,ro),Np=m(ro),k(zt.$$.fragment,ro),ro.forEach(t),Js.forEach(t),ri=m(o),ot=r(o,"H2",{class:!0});var Si=i(ot);Et=r(Si,"A",{id:!0,class:!0,href:!0});var Mg=i(Et);tr=r(Mg,"SPAN",{});var $g=i(tr);k(sn.$$.fragment,$g),$g.forEach(t),Mg.forEach(t),Sp=m(Si),or=r(Si,"SPAN",{});var qg=i(or);Ip=s(qg,"LayoutLMv3ForSequenceClassification"),qg.forEach(t),Si.forEach(t),ii=m(o),pe=r(o,"DIV",{class:!0});var io=i(pe);k(an.$$.fragment,io),Op=m(io),rn=r(io,"P",{});var Ii=i(rn);Dp=s(Ii,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),ln=r(Ii,"A",{href:!0,rel:!0});var Fg=i(ln);Wp=s(Fg,"RVL-CDIP"),Fg.forEach(t),Qp=s(Ii," dataset."),Ii.forEach(t),Rp=m(io),dn=r(io,"P",{});var Oi=i(dn);Bp=s(Oi,"This model is a PyTorch "),cn=r(Oi,"A",{href:!0,rel:!0});var zg=i(cn);Up=s(zg,"torch.nn.Module"),zg.forEach(t),Vp=s(Oi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Oi.forEach(t),Hp=m(io),ye=r(io,"DIV",{class:!0});var lo=i(ye);k(pn.$$.fragment,lo),Gp=m(lo),nt=r(lo,"P",{});var ea=i(nt);Kp=s(ea,"The "),Ns=r(ea,"A",{href:!0});var Eg=i(Ns);Xp=s(Eg,"LayoutLMv3ForSequenceClassification"),Eg.forEach(t),Yp=s(ea," forward method, overrides the "),nr=r(ea,"CODE",{});var Cg=i(nr);Jp=s(Cg,"__call__"),Cg.forEach(t),Zp=s(ea," special method."),ea.forEach(t),eu=m(lo),k(Ct.$$.fragment,lo),tu=m(lo),k(At.$$.fragment,lo),lo.forEach(t),io.forEach(t),li=m(o),st=r(o,"H2",{class:!0});var Di=i(st);Pt=r(Di,"A",{id:!0,class:!0,href:!0});var Ag=i(Pt);sr=r(Ag,"SPAN",{});var Pg=i(sr);k(un.$$.fragment,Pg),Pg.forEach(t),Ag.forEach(t),ou=m(Di),ar=r(Di,"SPAN",{});var jg=i(ar);nu=s(jg,"LayoutLMv3ForTokenClassification"),jg.forEach(t),Di.forEach(t),di=m(o),ue=r(o,"DIV",{class:!0});var co=i(ue);k(mn.$$.fragment,co),su=m(co),me=r(co,"P",{});var De=i(me);au=s(De,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),hn=r(De,"A",{href:!0,rel:!0});var Ng=i(hn);ru=s(Ng,"FUNSD"),Ng.forEach(t),iu=s(De,`,
`),fn=r(De,"A",{href:!0,rel:!0});var Sg=i(fn);lu=s(Sg,"SROIE"),Sg.forEach(t),du=s(De,", "),gn=r(De,"A",{href:!0,rel:!0});var Ig=i(gn);cu=s(Ig,"CORD"),Ig.forEach(t),pu=s(De,` and
`),_n=r(De,"A",{href:!0,rel:!0});var Og=i(_n);uu=s(Og,"Kleister-NDA"),Og.forEach(t),mu=s(De,"."),De.forEach(t),hu=m(co),vn=r(co,"P",{});var Wi=i(vn);fu=s(Wi,"This model is a PyTorch "),yn=r(Wi,"A",{href:!0,rel:!0});var Dg=i(yn);gu=s(Dg,"torch.nn.Module"),Dg.forEach(t),_u=s(Wi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi.forEach(t),vu=m(co),be=r(co,"DIV",{class:!0});var po=i(be);k(bn.$$.fragment,po),yu=m(po),at=r(po,"P",{});var ta=i(at);bu=s(ta,"The "),Ss=r(ta,"A",{href:!0});var Wg=i(Ss);Lu=s(Wg,"LayoutLMv3ForTokenClassification"),Wg.forEach(t),ku=s(ta," forward method, overrides the "),rr=r(ta,"CODE",{});var Qg=i(rr);wu=s(Qg,"__call__"),Qg.forEach(t),Tu=s(ta," special method."),ta.forEach(t),xu=m(po),k(jt.$$.fragment,po),Mu=m(po),k(Nt.$$.fragment,po),po.forEach(t),co.forEach(t),ci=m(o),rt=r(o,"H2",{class:!0});var Qi=i(rt);St=r(Qi,"A",{id:!0,class:!0,href:!0});var Rg=i(St);ir=r(Rg,"SPAN",{});var Bg=i(ir);k(Ln.$$.fragment,Bg),Bg.forEach(t),Rg.forEach(t),$u=m(Qi),lr=r(Qi,"SPAN",{});var Ug=i(lr);qu=s(Ug,"LayoutLMv3ForQuestionAnswering"),Ug.forEach(t),Qi.forEach(t),pi=m(o),he=r(o,"DIV",{class:!0});var uo=i(he);k(kn.$$.fragment,uo),Fu=m(uo),Ae=r(uo,"P",{});var mo=i(Ae);zu=s(mo,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),wn=r(mo,"A",{href:!0,rel:!0});var Vg=i(wn);Eu=s(Vg,"DocVQA"),Vg.forEach(t),Cu=s(mo,` (a linear layer on top of the text part of the hidden-states output to
compute `),dr=r(mo,"CODE",{});var Hg=i(dr);Au=s(Hg,"span start logits"),Hg.forEach(t),Pu=s(mo," and "),cr=r(mo,"CODE",{});var Gg=i(cr);ju=s(Gg,"span end logits"),Gg.forEach(t),Nu=s(mo,")."),mo.forEach(t),Su=m(uo),Tn=r(uo,"P",{});var Ri=i(Tn);Iu=s(Ri,"This model is a PyTorch "),xn=r(Ri,"A",{href:!0,rel:!0});var Kg=i(xn);Ou=s(Kg,"torch.nn.Module"),Kg.forEach(t),Du=s(Ri,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ri.forEach(t),Wu=m(uo),Le=r(uo,"DIV",{class:!0});var ho=i(Le);k(Mn.$$.fragment,ho),Qu=m(ho),it=r(ho,"P",{});var oa=i(it);Ru=s(oa,"The "),Is=r(oa,"A",{href:!0});var Xg=i(Is);Bu=s(Xg,"LayoutLMv3ForQuestionAnswering"),Xg.forEach(t),Uu=s(oa," forward method, overrides the "),pr=r(oa,"CODE",{});var Yg=i(pr);Vu=s(Yg,"__call__"),Yg.forEach(t),Hu=s(oa," special method."),oa.forEach(t),Gu=m(ho),k(It.$$.fragment,ho),Ku=m(ho),k(Ot.$$.fragment,ho),ho.forEach(t),uo.forEach(t),ui=m(o),lt=r(o,"H2",{class:!0});var Bi=i(lt);Dt=r(Bi,"A",{id:!0,class:!0,href:!0});var Jg=i(Dt);ur=r(Jg,"SPAN",{});var Zg=i(ur);k($n.$$.fragment,Zg),Zg.forEach(t),Jg.forEach(t),Xu=m(Bi),mr=r(Bi,"SPAN",{});var e_=i(mr);Yu=s(e_,"TFLayoutLMv3Model"),e_.forEach(t),Bi.forEach(t),mi=m(o),ae=r(o,"DIV",{class:!0});var We=i(ae);k(qn.$$.fragment,We),Ju=m(We),Fn=r(We,"P",{});var Ui=i(Fn);Zu=s(Ui,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Os=r(Ui,"A",{href:!0});var t_=i(Os);em=s(t_,"TFPreTrainedModel"),t_.forEach(t),tm=s(Ui,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ui.forEach(t),om=m(We),zn=r(We,"P",{});var Vi=i(zn);nm=s(Vi,"This model is also a "),En=r(Vi,"A",{href:!0,rel:!0});var o_=i(En);sm=s(o_,"tf.keras.Model"),o_.forEach(t),am=s(Vi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vi.forEach(t),rm=m(We),k(Wt.$$.fragment,We),im=m(We),ke=r(We,"DIV",{class:!0});var fo=i(ke);k(Cn.$$.fragment,fo),lm=m(fo),dt=r(fo,"P",{});var na=i(dt);dm=s(na,"The "),Ds=r(na,"A",{href:!0});var n_=i(Ds);cm=s(n_,"TFLayoutLMv3Model"),n_.forEach(t),pm=s(na," forward method, overrides the "),hr=r(na,"CODE",{});var s_=i(hr);um=s(s_,"__call__"),s_.forEach(t),mm=s(na," special method."),na.forEach(t),hm=m(fo),k(Qt.$$.fragment,fo),fm=m(fo),k(Rt.$$.fragment,fo),fo.forEach(t),We.forEach(t),hi=m(o),ct=r(o,"H2",{class:!0});var Hi=i(ct);Bt=r(Hi,"A",{id:!0,class:!0,href:!0});var a_=i(Bt);fr=r(a_,"SPAN",{});var r_=i(fr);k(An.$$.fragment,r_),r_.forEach(t),a_.forEach(t),gm=m(Hi),gr=r(Hi,"SPAN",{});var i_=i(gr);_m=s(i_,"TFLayoutLMv3ForSequenceClassification"),i_.forEach(t),Hi.forEach(t),fi=m(o),K=r(o,"DIV",{class:!0});var qe=i(K);k(Pn.$$.fragment,qe),vm=m(qe),jn=r(qe,"P",{});var Gi=i(jn);ym=s(Gi,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Nn=r(Gi,"A",{href:!0,rel:!0});var l_=i(Nn);bm=s(l_,"RVL-CDIP"),l_.forEach(t),Lm=s(Gi," dataset."),Gi.forEach(t),km=m(qe),Sn=r(qe,"P",{});var Ki=i(Sn);wm=s(Ki,"This model inherits from "),Ws=r(Ki,"A",{href:!0});var d_=i(Ws);Tm=s(d_,"TFPreTrainedModel"),d_.forEach(t),xm=s(Ki,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ki.forEach(t),Mm=m(qe),In=r(qe,"P",{});var Xi=i(In);$m=s(Xi,"This model is also a "),On=r(Xi,"A",{href:!0,rel:!0});var c_=i(On);qm=s(c_,"tf.keras.Model"),c_.forEach(t),Fm=s(Xi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xi.forEach(t),zm=m(qe),k(Ut.$$.fragment,qe),Em=m(qe),we=r(qe,"DIV",{class:!0});var go=i(we);k(Dn.$$.fragment,go),Cm=m(go),pt=r(go,"P",{});var sa=i(pt);Am=s(sa,"The "),Qs=r(sa,"A",{href:!0});var p_=i(Qs);Pm=s(p_,"TFLayoutLMv3ForSequenceClassification"),p_.forEach(t),jm=s(sa," forward method, overrides the "),_r=r(sa,"CODE",{});var u_=i(_r);Nm=s(u_,"__call__"),u_.forEach(t),Sm=s(sa," special method."),sa.forEach(t),Im=m(go),k(Vt.$$.fragment,go),Om=m(go),k(Ht.$$.fragment,go),go.forEach(t),qe.forEach(t),gi=m(o),ut=r(o,"H2",{class:!0});var Yi=i(ut);Gt=r(Yi,"A",{id:!0,class:!0,href:!0});var m_=i(Gt);vr=r(m_,"SPAN",{});var h_=i(vr);k(Wn.$$.fragment,h_),h_.forEach(t),m_.forEach(t),Dm=m(Yi),yr=r(Yi,"SPAN",{});var f_=i(yr);Wm=s(f_,"TFLayoutLMv3ForTokenClassification"),f_.forEach(t),Yi.forEach(t),_i=m(o),X=r(o,"DIV",{class:!0});var Fe=i(X);k(Qn.$$.fragment,Fe),Qm=m(Fe),fe=r(Fe,"P",{});var Qe=i(fe);Rm=s(Qe,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Rn=r(Qe,"A",{href:!0,rel:!0});var g_=i(Rn);Bm=s(g_,"FUNSD"),g_.forEach(t),Um=s(Qe,`,
`),Bn=r(Qe,"A",{href:!0,rel:!0});var __=i(Bn);Vm=s(__,"SROIE"),__.forEach(t),Hm=s(Qe,", "),Un=r(Qe,"A",{href:!0,rel:!0});var v_=i(Un);Gm=s(v_,"CORD"),v_.forEach(t),Km=s(Qe,` and
`),Vn=r(Qe,"A",{href:!0,rel:!0});var y_=i(Vn);Xm=s(y_,"Kleister-NDA"),y_.forEach(t),Ym=s(Qe,"."),Qe.forEach(t),Jm=m(Fe),Hn=r(Fe,"P",{});var Ji=i(Hn);Zm=s(Ji,"This model inherits from "),Rs=r(Ji,"A",{href:!0});var b_=i(Rs);eh=s(b_,"TFPreTrainedModel"),b_.forEach(t),th=s(Ji,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ji.forEach(t),oh=m(Fe),Gn=r(Fe,"P",{});var Zi=i(Gn);nh=s(Zi,"This model is also a "),Kn=r(Zi,"A",{href:!0,rel:!0});var L_=i(Kn);sh=s(L_,"tf.keras.Model"),L_.forEach(t),ah=s(Zi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zi.forEach(t),rh=m(Fe),k(Kt.$$.fragment,Fe),ih=m(Fe),Te=r(Fe,"DIV",{class:!0});var _o=i(Te);k(Xn.$$.fragment,_o),lh=m(_o),mt=r(_o,"P",{});var aa=i(mt);dh=s(aa,"The "),Bs=r(aa,"A",{href:!0});var k_=i(Bs);ch=s(k_,"TFLayoutLMv3ForTokenClassification"),k_.forEach(t),ph=s(aa," forward method, overrides the "),br=r(aa,"CODE",{});var w_=i(br);uh=s(w_,"__call__"),w_.forEach(t),mh=s(aa," special method."),aa.forEach(t),hh=m(_o),k(Xt.$$.fragment,_o),fh=m(_o),k(Yt.$$.fragment,_o),_o.forEach(t),Fe.forEach(t),vi=m(o),ht=r(o,"H2",{class:!0});var el=i(ht);Jt=r(el,"A",{id:!0,class:!0,href:!0});var T_=i(Jt);Lr=r(T_,"SPAN",{});var x_=i(Lr);k(Yn.$$.fragment,x_),x_.forEach(t),T_.forEach(t),gh=m(el),kr=r(el,"SPAN",{});var M_=i(kr);_h=s(M_,"TFLayoutLMv3ForQuestionAnswering"),M_.forEach(t),el.forEach(t),yi=m(o),Y=r(o,"DIV",{class:!0});var ze=i(Y);k(Jn.$$.fragment,ze),vh=m(ze),Pe=r(ze,"P",{});var vo=i(Pe);yh=s(vo,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),Zn=r(vo,"A",{href:!0,rel:!0});var $_=i(Zn);bh=s($_,"DocVQA"),$_.forEach(t),Lh=s(vo,` (a linear layer on top of the text part of the hidden-states output to
compute `),wr=r(vo,"CODE",{});var q_=i(wr);kh=s(q_,"span start logits"),q_.forEach(t),wh=s(vo," and "),Tr=r(vo,"CODE",{});var F_=i(Tr);Th=s(F_,"span end logits"),F_.forEach(t),xh=s(vo,")."),vo.forEach(t),Mh=m(ze),es=r(ze,"P",{});var tl=i(es);$h=s(tl,"This model inherits from "),Us=r(tl,"A",{href:!0});var z_=i(Us);qh=s(z_,"TFPreTrainedModel"),z_.forEach(t),Fh=s(tl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tl.forEach(t),zh=m(ze),ts=r(ze,"P",{});var ol=i(ts);Eh=s(ol,"This model is also a "),os=r(ol,"A",{href:!0,rel:!0});var E_=i(os);Ch=s(E_,"tf.keras.Model"),E_.forEach(t),Ah=s(ol,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ol.forEach(t),Ph=m(ze),k(Zt.$$.fragment,ze),jh=m(ze),xe=r(ze,"DIV",{class:!0});var yo=i(xe);k(ns.$$.fragment,yo),Nh=m(yo),ft=r(yo,"P",{});var ra=i(ft);Sh=s(ra,"The "),Vs=r(ra,"A",{href:!0});var C_=i(Vs);Ih=s(C_,"TFLayoutLMv3ForQuestionAnswering"),C_.forEach(t),Oh=s(ra," forward method, overrides the "),xr=r(ra,"CODE",{});var A_=i(xr);Dh=s(A_,"__call__"),A_.forEach(t),Wh=s(ra," special method."),ra.forEach(t),Qh=m(yo),k(eo.$$.fragment,yo),Rh=m(yo),k(to.$$.fragment,yo),yo.forEach(t),ze.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(dv)),d(p,"id","layoutlmv3"),d(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(p,"href","#layoutlmv3"),d(f,"class","relative group"),d(O,"id","overview"),d(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(O,"href","#overview"),d(q,"class","relative group"),d(N,"href","https://arxiv.org/abs/2204.08387"),d(N,"rel","nofollow"),d(C,"href","layoutlmv2"),d(is,"href","vit"),d(ps,"href","layoutlmv2"),d(us,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(ms,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(hs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(fs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(gs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(_s,"href","layoutlmv2#usage-layoutlmv2processor"),d(ko,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3"),d(ko,"rel","nofollow"),d(To,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/layoutlmv3"),d(To,"rel","nofollow"),I_(_t.src,Kh="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||d(_t,"src",Kh),d(_t,"alt","drawing"),d(_t,"width","600"),d(vs,"href","https://arxiv.org/abs/2204.08387"),d(xo,"href","https://huggingface.co/nielsr"),d(xo,"rel","nofollow"),d(Mo,"href","https://huggingface.co/chriskoo"),d(Mo,"rel","nofollow"),d($o,"href","https://huggingface.co/tokec"),d($o,"rel","nofollow"),d(qo,"href","https://huggingface.co/lre"),d(qo,"rel","nofollow"),d(Fo,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),d(Fo,"rel","nofollow"),d(yt,"id","transformers.LayoutLMv3Config"),d(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(yt,"href","#transformers.LayoutLMv3Config"),d(He,"class","relative group"),d(ys,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(Co,"href","https://huggingface.co/microsoft/layoutlmv3-base"),d(Co,"rel","nofollow"),d(bs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(Ls,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Lt,"id","transformers.LayoutLMv3FeatureExtractor"),d(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Lt,"href","#transformers.LayoutLMv3FeatureExtractor"),d(Xe,"class","relative group"),d(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(wt,"id","transformers.LayoutLMv3Tokenizer"),d(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(wt,"href","#transformers.LayoutLMv3Tokenizer"),d(Ye,"class","relative group"),d(ks,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(ws,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(xs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ms,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(xt,"id","transformers.LayoutLMv3TokenizerFast"),d(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(xt,"href","#transformers.LayoutLMv3TokenizerFast"),d(Je,"class","relative group"),d($s,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d($t,"id","transformers.LayoutLMv3Processor"),d($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($t,"href","#transformers.LayoutLMv3Processor"),d(Ze,"class","relative group"),d(Fs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(zs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Es,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Cs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(Xo,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),d(As,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Yo,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(Ps,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Jo,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qt,"id","transformers.LayoutLMv3Model"),d(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qt,"href","#transformers.LayoutLMv3Model"),d(et,"class","relative group"),d(on,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(on,"rel","nofollow"),d(js,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Et,"id","transformers.LayoutLMv3ForSequenceClassification"),d(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Et,"href","#transformers.LayoutLMv3ForSequenceClassification"),d(ot,"class","relative group"),d(ln,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(ln,"rel","nofollow"),d(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(cn,"rel","nofollow"),d(Ns,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),d(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pt,"id","transformers.LayoutLMv3ForTokenClassification"),d(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pt,"href","#transformers.LayoutLMv3ForTokenClassification"),d(st,"class","relative group"),d(hn,"href","https://guillaumejaume.github.io/FUNSD/"),d(hn,"rel","nofollow"),d(fn,"href","https://rrc.cvc.uab.es/?ch=13"),d(fn,"rel","nofollow"),d(gn,"href","https://github.com/clovaai/cord"),d(gn,"rel","nofollow"),d(_n,"href","https://github.com/applicaai/kleister-nda"),d(_n,"rel","nofollow"),d(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(yn,"rel","nofollow"),d(Ss,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(St,"id","transformers.LayoutLMv3ForQuestionAnswering"),d(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(St,"href","#transformers.LayoutLMv3ForQuestionAnswering"),d(rt,"class","relative group"),d(wn,"href","https://rrc.cvc.uab.es/?ch=17"),d(wn,"rel","nofollow"),d(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(xn,"rel","nofollow"),d(Is,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),d(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Dt,"id","transformers.TFLayoutLMv3Model"),d(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Dt,"href","#transformers.TFLayoutLMv3Model"),d(lt,"class","relative group"),d(Os,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(En,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(En,"rel","nofollow"),d(Ds,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3Model"),d(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Bt,"id","transformers.TFLayoutLMv3ForSequenceClassification"),d(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Bt,"href","#transformers.TFLayoutLMv3ForSequenceClassification"),d(ct,"class","relative group"),d(Nn,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(Nn,"rel","nofollow"),d(Ws,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(On,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(On,"rel","nofollow"),d(Qs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForSequenceClassification"),d(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Gt,"id","transformers.TFLayoutLMv3ForTokenClassification"),d(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Gt,"href","#transformers.TFLayoutLMv3ForTokenClassification"),d(ut,"class","relative group"),d(Rn,"href","https://guillaumejaume.github.io/FUNSD/"),d(Rn,"rel","nofollow"),d(Bn,"href","https://rrc.cvc.uab.es/?ch=13"),d(Bn,"rel","nofollow"),d(Un,"href","https://github.com/clovaai/cord"),d(Un,"rel","nofollow"),d(Vn,"href","https://github.com/applicaai/kleister-nda"),d(Vn,"rel","nofollow"),d(Rs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(Kn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Kn,"rel","nofollow"),d(Bs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForTokenClassification"),d(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Jt,"id","transformers.TFLayoutLMv3ForQuestionAnswering"),d(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Jt,"href","#transformers.TFLayoutLMv3ForQuestionAnswering"),d(ht,"class","relative group"),d(Zn,"href","https://rrc.cvc.uab.es/?ch=17"),d(Zn,"rel","nofollow"),d(Us,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(os,"rel","nofollow"),d(Vs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForQuestionAnswering"),d(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,y,g),_(o,f,g),e(f,p),e(p,v),w(l,v,null),e(f,h),e(f,$),e($,B),_(o,I,g),_(o,q,g),e(q,O),e(O,P),w(D,P,null),e(q,U),e(q,j),e(j,V),_(o,Q,g),_(o,b,g),e(b,z),e(b,N),e(N,ee),e(b,te),e(b,C),e(C,oe),e(b,ne),e(b,is),e(is,nl),e(b,sl),_(o,Wr,g),_(o,ls,g),e(ls,al),_(o,Qr,g),_(o,ds,g),e(ds,ia),e(ia,rl),_(o,Rr,g),_(o,cs,g),e(cs,il),_(o,Br,g),_(o,_e,g),e(_e,gt),e(gt,ll),e(gt,ps),e(ps,dl),e(gt,cl),e(gt,bo),e(bo,la),e(la,pl),e(bo,ul),e(bo,ie),e(ie,ml),e(ie,us),e(us,hl),e(ie,fl),e(ie,ms),e(ms,gl),e(ie,_l),e(ie,hs),e(hs,vl),e(ie,yl),e(ie,fs),e(fs,bl),e(ie,Ll),e(_e,kl),e(_e,Ve),e(Ve,wl),e(Ve,gs),e(gs,Tl),e(Ve,xl),e(Ve,_s),e(_s,Ml),e(Ve,$l),e(_e,ql),e(_e,Lo),e(Lo,Fl),e(Lo,ko),e(ko,zl),e(Lo,El),e(_e,Cl),e(_e,wo),e(wo,Al),e(wo,To),e(To,Pl),e(wo,jl),_(o,Ur,g),_(o,_t,g),_(o,Vr,g),_(o,vt,g),e(vt,Nl),e(vt,vs),e(vs,Sl),e(vt,Il),_(o,Hr,g),_(o,J,g),e(J,Ol),e(J,xo),e(xo,Dl),e(J,Wl),e(J,Mo),e(Mo,Ql),e(J,Rl),e(J,$o),e($o,Bl),e(J,Ul),e(J,qo),e(qo,Vl),e(J,Hl),e(J,Fo),e(Fo,Gl),e(J,Kl),_(o,Gr,g),_(o,He,g),e(He,yt),e(yt,da),w(zo,da,null),e(He,Xl),e(He,ca),e(ca,Yl),_(o,Kr,g),_(o,le,g),w(Eo,le,null),e(le,Jl),e(le,Ge),e(Ge,Zl),e(Ge,ys),e(ys,ed),e(Ge,td),e(Ge,Co),e(Co,od),e(Ge,nd),e(le,sd),e(le,Ke),e(Ke,ad),e(Ke,bs),e(bs,rd),e(Ke,id),e(Ke,Ls),e(Ls,ld),e(Ke,dd),e(le,cd),w(bt,le,null),_(o,Xr,g),_(o,Xe,g),e(Xe,Lt),e(Lt,pa),w(Ao,pa,null),e(Xe,pd),e(Xe,ua),e(ua,ud),_(o,Yr,g),_(o,de,g),w(Po,de,null),e(de,md),e(de,ma),e(ma,hd),e(de,fd),e(de,jo),e(jo,gd),e(jo,ha),e(ha,_d),e(jo,vd),e(de,yd),e(de,Se),w(No,Se,null),e(Se,bd),e(Se,fa),e(fa,Ld),e(Se,kd),w(kt,Se,null),_(o,Jr,g),_(o,Ye,g),e(Ye,wt),e(wt,ga),w(So,ga,null),e(Ye,wd),e(Ye,_a),e(_a,Td),_(o,Zr,g),_(o,G,g),w(Io,G,null),e(G,xd),e(G,H),e(H,Md),e(H,va),e(va,$d),e(H,qd),e(H,ks),e(ks,Fd),e(H,zd),e(H,ya),e(ya,Ed),e(H,Cd),e(H,ba),e(ba,Ad),e(H,Pd),e(H,La),e(La,jd),e(H,Nd),e(H,ka),e(ka,Sd),e(H,Id),e(H,wa),e(wa,Od),e(H,Dd),e(G,Wd),e(G,Oo),e(Oo,Qd),e(Oo,ws),e(ws,Rd),e(Oo,Bd),e(G,Ud),e(G,Ts),e(Ts,xs),e(xs,Vd),e(Ts,Hd),e(G,Gd),e(G,Tt),w(Do,Tt,null),e(Tt,Kd),e(Tt,Ta),e(Ta,Xd),e(G,Yd),e(G,Ms),w(Wo,Ms,null),_(o,ei,g),_(o,Je,g),e(Je,xt),e(xt,xa),w(Qo,xa,null),e(Je,Jd),e(Je,Ma),e(Ma,Zd),_(o,ti,g),_(o,ce,g),w(Ro,ce,null),e(ce,ec),e(ce,Bo),e(Bo,tc),e(Bo,$a),e($a,oc),e(Bo,nc),e(ce,sc),e(ce,Uo),e(Uo,ac),e(Uo,$s),e($s,rc),e(Uo,ic),e(ce,lc),e(ce,Mt),w(Vo,Mt,null),e(Mt,dc),e(Mt,qa),e(qa,cc),_(o,oi,g),_(o,Ze,g),e(Ze,$t),e($t,Fa),w(Ho,Fa,null),e(Ze,pc),e(Ze,za),e(za,uc),_(o,ni,g),_(o,se,g),w(Go,se,null),e(se,mc),e(se,Ea),e(Ea,hc),e(se,fc),e(se,qs),e(qs,Fs),e(Fs,gc),e(qs,_c),e(se,vc),e(se,W),e(W,yc),e(W,zs),e(zs,bc),e(W,Lc),e(W,Es),e(Es,kc),e(W,wc),e(W,Cs),e(Cs,Tc),e(W,xc),e(W,Ca),e(Ca,Mc),e(W,$c),e(W,Aa),e(Aa,qc),e(W,Fc),e(W,Pa),e(Pa,zc),e(W,Ec),e(W,ja),e(ja,Cc),e(W,Ac),e(W,Na),e(Na,Pc),e(W,jc),e(W,Sa),e(Sa,Nc),e(W,Sc),e(se,Ic),e(se,Ie),w(Ko,Ie,null),e(Ie,Oc),e(Ie,E),e(E,Dc),e(E,Ia),e(Ia,Wc),e(E,Qc),e(E,Xo),e(Xo,Oa),e(Oa,Rc),e(Xo,Bc),e(E,Uc),e(E,As),e(As,Vc),e(E,Hc),e(E,Da),e(Da,Gc),e(E,Kc),e(E,Wa),e(Wa,Xc),e(E,Yc),e(E,Yo),e(Yo,Qa),e(Qa,Jc),e(Yo,Zc),e(E,ep),e(E,Ra),e(Ra,tp),e(E,op),e(E,Ps),e(Ps,np),e(E,sp),e(E,Ba),e(Ba,ap),e(E,rp),e(E,Ua),e(Ua,ip),e(E,lp),e(E,Va),e(Va,dp),e(E,cp),e(E,Ha),e(Ha,pp),e(E,up),e(E,Ga),e(Ga,mp),e(E,hp),e(E,Jo),e(Jo,Ka),e(Ka,fp),e(Jo,gp),e(E,_p),e(E,Xa),e(Xa,vp),e(E,yp),e(Ie,bp),e(Ie,Ya),e(Ya,Lp),_(o,si,g),_(o,et,g),e(et,qt),e(qt,Ja),w(Zo,Ja,null),e(et,kp),e(et,Za),e(Za,wp),_(o,ai,g),_(o,Ce,g),w(en,Ce,null),e(Ce,Tp),e(Ce,tn),e(tn,xp),e(tn,on),e(on,Mp),e(tn,$p),e(Ce,qp),e(Ce,ve),w(nn,ve,null),e(ve,Fp),e(ve,tt),e(tt,zp),e(tt,js),e(js,Ep),e(tt,Cp),e(tt,er),e(er,Ap),e(tt,Pp),e(ve,jp),w(Ft,ve,null),e(ve,Np),w(zt,ve,null),_(o,ri,g),_(o,ot,g),e(ot,Et),e(Et,tr),w(sn,tr,null),e(ot,Sp),e(ot,or),e(or,Ip),_(o,ii,g),_(o,pe,g),w(an,pe,null),e(pe,Op),e(pe,rn),e(rn,Dp),e(rn,ln),e(ln,Wp),e(rn,Qp),e(pe,Rp),e(pe,dn),e(dn,Bp),e(dn,cn),e(cn,Up),e(dn,Vp),e(pe,Hp),e(pe,ye),w(pn,ye,null),e(ye,Gp),e(ye,nt),e(nt,Kp),e(nt,Ns),e(Ns,Xp),e(nt,Yp),e(nt,nr),e(nr,Jp),e(nt,Zp),e(ye,eu),w(Ct,ye,null),e(ye,tu),w(At,ye,null),_(o,li,g),_(o,st,g),e(st,Pt),e(Pt,sr),w(un,sr,null),e(st,ou),e(st,ar),e(ar,nu),_(o,di,g),_(o,ue,g),w(mn,ue,null),e(ue,su),e(ue,me),e(me,au),e(me,hn),e(hn,ru),e(me,iu),e(me,fn),e(fn,lu),e(me,du),e(me,gn),e(gn,cu),e(me,pu),e(me,_n),e(_n,uu),e(me,mu),e(ue,hu),e(ue,vn),e(vn,fu),e(vn,yn),e(yn,gu),e(vn,_u),e(ue,vu),e(ue,be),w(bn,be,null),e(be,yu),e(be,at),e(at,bu),e(at,Ss),e(Ss,Lu),e(at,ku),e(at,rr),e(rr,wu),e(at,Tu),e(be,xu),w(jt,be,null),e(be,Mu),w(Nt,be,null),_(o,ci,g),_(o,rt,g),e(rt,St),e(St,ir),w(Ln,ir,null),e(rt,$u),e(rt,lr),e(lr,qu),_(o,pi,g),_(o,he,g),w(kn,he,null),e(he,Fu),e(he,Ae),e(Ae,zu),e(Ae,wn),e(wn,Eu),e(Ae,Cu),e(Ae,dr),e(dr,Au),e(Ae,Pu),e(Ae,cr),e(cr,ju),e(Ae,Nu),e(he,Su),e(he,Tn),e(Tn,Iu),e(Tn,xn),e(xn,Ou),e(Tn,Du),e(he,Wu),e(he,Le),w(Mn,Le,null),e(Le,Qu),e(Le,it),e(it,Ru),e(it,Is),e(Is,Bu),e(it,Uu),e(it,pr),e(pr,Vu),e(it,Hu),e(Le,Gu),w(It,Le,null),e(Le,Ku),w(Ot,Le,null),_(o,ui,g),_(o,lt,g),e(lt,Dt),e(Dt,ur),w($n,ur,null),e(lt,Xu),e(lt,mr),e(mr,Yu),_(o,mi,g),_(o,ae,g),w(qn,ae,null),e(ae,Ju),e(ae,Fn),e(Fn,Zu),e(Fn,Os),e(Os,em),e(Fn,tm),e(ae,om),e(ae,zn),e(zn,nm),e(zn,En),e(En,sm),e(zn,am),e(ae,rm),w(Wt,ae,null),e(ae,im),e(ae,ke),w(Cn,ke,null),e(ke,lm),e(ke,dt),e(dt,dm),e(dt,Ds),e(Ds,cm),e(dt,pm),e(dt,hr),e(hr,um),e(dt,mm),e(ke,hm),w(Qt,ke,null),e(ke,fm),w(Rt,ke,null),_(o,hi,g),_(o,ct,g),e(ct,Bt),e(Bt,fr),w(An,fr,null),e(ct,gm),e(ct,gr),e(gr,_m),_(o,fi,g),_(o,K,g),w(Pn,K,null),e(K,vm),e(K,jn),e(jn,ym),e(jn,Nn),e(Nn,bm),e(jn,Lm),e(K,km),e(K,Sn),e(Sn,wm),e(Sn,Ws),e(Ws,Tm),e(Sn,xm),e(K,Mm),e(K,In),e(In,$m),e(In,On),e(On,qm),e(In,Fm),e(K,zm),w(Ut,K,null),e(K,Em),e(K,we),w(Dn,we,null),e(we,Cm),e(we,pt),e(pt,Am),e(pt,Qs),e(Qs,Pm),e(pt,jm),e(pt,_r),e(_r,Nm),e(pt,Sm),e(we,Im),w(Vt,we,null),e(we,Om),w(Ht,we,null),_(o,gi,g),_(o,ut,g),e(ut,Gt),e(Gt,vr),w(Wn,vr,null),e(ut,Dm),e(ut,yr),e(yr,Wm),_(o,_i,g),_(o,X,g),w(Qn,X,null),e(X,Qm),e(X,fe),e(fe,Rm),e(fe,Rn),e(Rn,Bm),e(fe,Um),e(fe,Bn),e(Bn,Vm),e(fe,Hm),e(fe,Un),e(Un,Gm),e(fe,Km),e(fe,Vn),e(Vn,Xm),e(fe,Ym),e(X,Jm),e(X,Hn),e(Hn,Zm),e(Hn,Rs),e(Rs,eh),e(Hn,th),e(X,oh),e(X,Gn),e(Gn,nh),e(Gn,Kn),e(Kn,sh),e(Gn,ah),e(X,rh),w(Kt,X,null),e(X,ih),e(X,Te),w(Xn,Te,null),e(Te,lh),e(Te,mt),e(mt,dh),e(mt,Bs),e(Bs,ch),e(mt,ph),e(mt,br),e(br,uh),e(mt,mh),e(Te,hh),w(Xt,Te,null),e(Te,fh),w(Yt,Te,null),_(o,vi,g),_(o,ht,g),e(ht,Jt),e(Jt,Lr),w(Yn,Lr,null),e(ht,gh),e(ht,kr),e(kr,_h),_(o,yi,g),_(o,Y,g),w(Jn,Y,null),e(Y,vh),e(Y,Pe),e(Pe,yh),e(Pe,Zn),e(Zn,bh),e(Pe,Lh),e(Pe,wr),e(wr,kh),e(Pe,wh),e(Pe,Tr),e(Tr,Th),e(Pe,xh),e(Y,Mh),e(Y,es),e(es,$h),e(es,Us),e(Us,qh),e(es,Fh),e(Y,zh),e(Y,ts),e(ts,Eh),e(ts,os),e(os,Ch),e(ts,Ah),e(Y,Ph),w(Zt,Y,null),e(Y,jh),e(Y,xe),w(ns,xe,null),e(xe,Nh),e(xe,ft),e(ft,Sh),e(ft,Vs),e(Vs,Ih),e(ft,Oh),e(ft,xr),e(xr,Dh),e(ft,Wh),e(xe,Qh),w(eo,xe,null),e(xe,Rh),w(to,xe,null),bi=!0},p(o,[g]){const ss={};g&2&&(ss.$$scope={dirty:g,ctx:o}),bt.$set(ss);const Mr={};g&2&&(Mr.$$scope={dirty:g,ctx:o}),kt.$set(Mr);const $r={};g&2&&($r.$$scope={dirty:g,ctx:o}),Ft.$set($r);const qr={};g&2&&(qr.$$scope={dirty:g,ctx:o}),zt.$set(qr);const as={};g&2&&(as.$$scope={dirty:g,ctx:o}),Ct.$set(as);const Fr={};g&2&&(Fr.$$scope={dirty:g,ctx:o}),At.$set(Fr);const zr={};g&2&&(zr.$$scope={dirty:g,ctx:o}),jt.$set(zr);const Er={};g&2&&(Er.$$scope={dirty:g,ctx:o}),Nt.$set(Er);const je={};g&2&&(je.$$scope={dirty:g,ctx:o}),It.$set(je);const Cr={};g&2&&(Cr.$$scope={dirty:g,ctx:o}),Ot.$set(Cr);const Ar={};g&2&&(Ar.$$scope={dirty:g,ctx:o}),Wt.$set(Ar);const Pr={};g&2&&(Pr.$$scope={dirty:g,ctx:o}),Qt.$set(Pr);const jr={};g&2&&(jr.$$scope={dirty:g,ctx:o}),Rt.$set(jr);const Nr={};g&2&&(Nr.$$scope={dirty:g,ctx:o}),Ut.$set(Nr);const Sr={};g&2&&(Sr.$$scope={dirty:g,ctx:o}),Vt.$set(Sr);const Ir={};g&2&&(Ir.$$scope={dirty:g,ctx:o}),Ht.$set(Ir);const Ne={};g&2&&(Ne.$$scope={dirty:g,ctx:o}),Kt.$set(Ne);const oo={};g&2&&(oo.$$scope={dirty:g,ctx:o}),Xt.$set(oo);const Or={};g&2&&(Or.$$scope={dirty:g,ctx:o}),Yt.$set(Or);const rs={};g&2&&(rs.$$scope={dirty:g,ctx:o}),Zt.$set(rs);const Dr={};g&2&&(Dr.$$scope={dirty:g,ctx:o}),eo.$set(Dr);const ge={};g&2&&(ge.$$scope={dirty:g,ctx:o}),to.$set(ge)},i(o){bi||(T(l.$$.fragment,o),T(D.$$.fragment,o),T(zo.$$.fragment,o),T(Eo.$$.fragment,o),T(bt.$$.fragment,o),T(Ao.$$.fragment,o),T(Po.$$.fragment,o),T(No.$$.fragment,o),T(kt.$$.fragment,o),T(So.$$.fragment,o),T(Io.$$.fragment,o),T(Do.$$.fragment,o),T(Wo.$$.fragment,o),T(Qo.$$.fragment,o),T(Ro.$$.fragment,o),T(Vo.$$.fragment,o),T(Ho.$$.fragment,o),T(Go.$$.fragment,o),T(Ko.$$.fragment,o),T(Zo.$$.fragment,o),T(en.$$.fragment,o),T(nn.$$.fragment,o),T(Ft.$$.fragment,o),T(zt.$$.fragment,o),T(sn.$$.fragment,o),T(an.$$.fragment,o),T(pn.$$.fragment,o),T(Ct.$$.fragment,o),T(At.$$.fragment,o),T(un.$$.fragment,o),T(mn.$$.fragment,o),T(bn.$$.fragment,o),T(jt.$$.fragment,o),T(Nt.$$.fragment,o),T(Ln.$$.fragment,o),T(kn.$$.fragment,o),T(Mn.$$.fragment,o),T(It.$$.fragment,o),T(Ot.$$.fragment,o),T($n.$$.fragment,o),T(qn.$$.fragment,o),T(Wt.$$.fragment,o),T(Cn.$$.fragment,o),T(Qt.$$.fragment,o),T(Rt.$$.fragment,o),T(An.$$.fragment,o),T(Pn.$$.fragment,o),T(Ut.$$.fragment,o),T(Dn.$$.fragment,o),T(Vt.$$.fragment,o),T(Ht.$$.fragment,o),T(Wn.$$.fragment,o),T(Qn.$$.fragment,o),T(Kt.$$.fragment,o),T(Xn.$$.fragment,o),T(Xt.$$.fragment,o),T(Yt.$$.fragment,o),T(Yn.$$.fragment,o),T(Jn.$$.fragment,o),T(Zt.$$.fragment,o),T(ns.$$.fragment,o),T(eo.$$.fragment,o),T(to.$$.fragment,o),bi=!0)},o(o){x(l.$$.fragment,o),x(D.$$.fragment,o),x(zo.$$.fragment,o),x(Eo.$$.fragment,o),x(bt.$$.fragment,o),x(Ao.$$.fragment,o),x(Po.$$.fragment,o),x(No.$$.fragment,o),x(kt.$$.fragment,o),x(So.$$.fragment,o),x(Io.$$.fragment,o),x(Do.$$.fragment,o),x(Wo.$$.fragment,o),x(Qo.$$.fragment,o),x(Ro.$$.fragment,o),x(Vo.$$.fragment,o),x(Ho.$$.fragment,o),x(Go.$$.fragment,o),x(Ko.$$.fragment,o),x(Zo.$$.fragment,o),x(en.$$.fragment,o),x(nn.$$.fragment,o),x(Ft.$$.fragment,o),x(zt.$$.fragment,o),x(sn.$$.fragment,o),x(an.$$.fragment,o),x(pn.$$.fragment,o),x(Ct.$$.fragment,o),x(At.$$.fragment,o),x(un.$$.fragment,o),x(mn.$$.fragment,o),x(bn.$$.fragment,o),x(jt.$$.fragment,o),x(Nt.$$.fragment,o),x(Ln.$$.fragment,o),x(kn.$$.fragment,o),x(Mn.$$.fragment,o),x(It.$$.fragment,o),x(Ot.$$.fragment,o),x($n.$$.fragment,o),x(qn.$$.fragment,o),x(Wt.$$.fragment,o),x(Cn.$$.fragment,o),x(Qt.$$.fragment,o),x(Rt.$$.fragment,o),x(An.$$.fragment,o),x(Pn.$$.fragment,o),x(Ut.$$.fragment,o),x(Dn.$$.fragment,o),x(Vt.$$.fragment,o),x(Ht.$$.fragment,o),x(Wn.$$.fragment,o),x(Qn.$$.fragment,o),x(Kt.$$.fragment,o),x(Xn.$$.fragment,o),x(Xt.$$.fragment,o),x(Yt.$$.fragment,o),x(Yn.$$.fragment,o),x(Jn.$$.fragment,o),x(Zt.$$.fragment,o),x(ns.$$.fragment,o),x(eo.$$.fragment,o),x(to.$$.fragment,o),bi=!1},d(o){t(c),o&&t(y),o&&t(f),M(l),o&&t(I),o&&t(q),M(D),o&&t(Q),o&&t(b),o&&t(Wr),o&&t(ls),o&&t(Qr),o&&t(ds),o&&t(Rr),o&&t(cs),o&&t(Br),o&&t(_e),o&&t(Ur),o&&t(_t),o&&t(Vr),o&&t(vt),o&&t(Hr),o&&t(J),o&&t(Gr),o&&t(He),M(zo),o&&t(Kr),o&&t(le),M(Eo),M(bt),o&&t(Xr),o&&t(Xe),M(Ao),o&&t(Yr),o&&t(de),M(Po),M(No),M(kt),o&&t(Jr),o&&t(Ye),M(So),o&&t(Zr),o&&t(G),M(Io),M(Do),M(Wo),o&&t(ei),o&&t(Je),M(Qo),o&&t(ti),o&&t(ce),M(Ro),M(Vo),o&&t(oi),o&&t(Ze),M(Ho),o&&t(ni),o&&t(se),M(Go),M(Ko),o&&t(si),o&&t(et),M(Zo),o&&t(ai),o&&t(Ce),M(en),M(nn),M(Ft),M(zt),o&&t(ri),o&&t(ot),M(sn),o&&t(ii),o&&t(pe),M(an),M(pn),M(Ct),M(At),o&&t(li),o&&t(st),M(un),o&&t(di),o&&t(ue),M(mn),M(bn),M(jt),M(Nt),o&&t(ci),o&&t(rt),M(Ln),o&&t(pi),o&&t(he),M(kn),M(Mn),M(It),M(Ot),o&&t(ui),o&&t(lt),M($n),o&&t(mi),o&&t(ae),M(qn),M(Wt),M(Cn),M(Qt),M(Rt),o&&t(hi),o&&t(ct),M(An),o&&t(fi),o&&t(K),M(Pn),M(Ut),M(Dn),M(Vt),M(Ht),o&&t(gi),o&&t(ut),M(Wn),o&&t(_i),o&&t(X),M(Qn),M(Kt),M(Xn),M(Xt),M(Yt),o&&t(vi),o&&t(ht),M(Yn),o&&t(yi),o&&t(Y),M(Jn),M(Zt),M(ns),M(eo),M(to)}}}const dv={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"},{local:"transformers.TFLayoutLMv3Model",title:"TFLayoutLMv3Model"},{local:"transformers.TFLayoutLMv3ForSequenceClassification",title:"TFLayoutLMv3ForSequenceClassification"},{local:"transformers.TFLayoutLMv3ForTokenClassification",title:"TFLayoutLMv3ForTokenClassification"},{local:"transformers.TFLayoutLMv3ForQuestionAnswering",title:"TFLayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function cv(F){return O_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _v extends P_{constructor(c){super();j_(this,c,cv,lv,N_,{})}}export{_v as default,dv as metadata};
