import{S as My,i as $y,s as Fy,e as a,k as p,w as L,t as o,M as qy,c as r,d as t,m as u,a as i,x as k,h as n,b as d,N as Ey,G as e,g as m,y as w,q as T,o as x,B as M,v as zy,L as Ht}from"../../chunks/vendor-hf-doc-builder.js";import{T as vt}from"../../chunks/Tip-hf-doc-builder.js";import{D as ne}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Kt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ge}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Vt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as wg}from"../../chunks/PipelineTag-hf-doc-builder.js";function Cy(z){let c,b,_,f,y;return{c(){c=a("p"),b=o("LayoutLMv3 is nearly identical to LayoutLMv2, so we\u2019ve also included LayoutLMv2 resources you can adapt for LayoutLMv3 tasks. For these notebooks, take care to use "),_=a("a"),f=o("LayoutLMv2Processor"),y=o(" instead when preparing data for the model!"),this.h()},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"LayoutLMv3 is nearly identical to LayoutLMv2, so we\u2019ve also included LayoutLMv2 resources you can adapt for LayoutLMv3 tasks. For these notebooks, take care to use "),_=r(h,"A",{href:!0});var q=i(_);f=n(q,"LayoutLMv2Processor"),q.forEach(t),y=n(h," instead when preparing data for the model!"),h.forEach(t),this.h()},h(){d(_,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor")},m(l,h){m(l,c,h),e(c,b),e(c,_),e(_,f),e(c,y)},d(l){l&&t(c)}}}function Ay(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import LayoutLMv3Config, LayoutLMv3Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),b=o("Example:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Example:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function Py(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import LayoutLMv3FeatureExtractor
from PIL import Image

# Document can be a png, jpg, etc. PDFs must be converted to images.
image = Image.open(name_of_your_document).convert("RGB")

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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Document can be a png, jpg, etc. PDFs must be converted to images.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(name_of_your_document).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 1: with apply_ocr=True (default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv3FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;, &#x27;words&#x27;, &#x27;boxes&#x27;])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 2: with apply_ocr=False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv3FeatureExtractor(apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){c=a("p"),b=o("Examples:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function jy(z){let c,b,_,f,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var q=i(_);f=n(q,"Module"),q.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){m(l,c,h),e(c,b),e(c,_),e(_,f),e(c,y)},d(l){l&&t(c)}}}function Ny(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import AutoProcessor, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),b=o("Examples:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function Oy(z){let c,b,_,f,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var q=i(_);f=n(q,"Module"),q.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){m(l,c,h),e(c,b),e(c,_),e(_,f),e(c,y)},d(l){l&&t(c)}}}function Sy(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=o("Examples:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function Iy(z){let c,b,_,f,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var q=i(_);f=n(q,"Module"),q.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){m(l,c,h),e(c,b),e(c,_),e(_,f),e(c,y)},d(l){l&&t(c)}}}function Dy(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=o("Examples:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function Ry(z){let c,b,_,f,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var q=i(_);f=n(q,"Module"),q.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){m(l,c,h),e(c,b),e(c,_),e(_,f),e(c,y)},d(l){l&&t(c)}}}function By(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){c=a("p"),b=o("Examples:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function Wy(z){let c,b,_,f,y,l,h,q,we,_e,R,ae,se,$,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,Fe,ue,X,qe,ye,ee,A,P,he,H,Ee,be,U,ze,Le,C,re,Y,me,Ce,J,le,fe,W,Ae,O,Pe,te,j,je,N,Ne,Oe;return{c(){c=a("p"),b=o("TensorFlow models and layers in "),_=a("code"),f=o("transformers"),y=o(" accept two formats as input:"),l=p(),h=a("ul"),q=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),R=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),$=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),Me=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=o("fit()"),pe=o(" and "),G=a("code"),Fe=o("predict()"),ue=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),qe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),A=a("ul"),P=a("li"),he=o("a single Tensor with "),H=a("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),U=a("code"),ze=o("model(input_ids)"),Le=p(),C=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),me=o("model([input_ids, attention_mask])"),Ce=o(" or "),J=a("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),fe=p(),W=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),j=a("p"),je=o(`Note that when creating models and layers with
`),N=a("a"),Ne=o("subclassing"),Oe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){c=r(v,"P",{});var F=i(c);b=n(F,"TensorFlow models and layers in "),_=r(F,"CODE",{});var Xe=i(_);f=n(Xe,"transformers"),Xe.forEach(t),y=n(F," accept two formats as input:"),F.forEach(t),l=u(v),h=r(v,"UL",{});var oe=i(h);q=r(oe,"LI",{});var Ye=i(q);we=n(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(t),_e=u(oe),R=r(oe,"LI",{});var Je=i(R);ae=n(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),oe.forEach(t),se=u(v),$=r(v,"P",{});var E=i($);Te=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(t),ve=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Ze=i(S);Me=n(Ze,"model.fit()"),Ze.forEach(t),ie=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(E,"CODE",{});var Be=i(K);$e=n(Be,"fit()"),Be.forEach(t),pe=n(E," and "),G=r(E,"CODE",{});var et=i(G);Fe=n(et,"predict()"),et.forEach(t),ue=n(E,`, such as when creating your own layers or models with
the Keras `),X=r(E,"CODE",{});var tt=i(X);qe=n(tt,"Functional"),tt.forEach(t),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=u(v),A=r(v,"UL",{});var D=i(A);P=r(D,"LI",{});var Z=i(P);he=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var ot=i(H);Ee=n(ot,"input_ids"),ot.forEach(t),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var nt=i(U);ze=n(nt,"model(input_ids)"),nt.forEach(t),Z.forEach(t),Le=u(D),C=r(D,"LI",{});var Q=i(C);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var st=i(Y);me=n(st,"model([input_ids, attention_mask])"),st.forEach(t),Ce=n(Q," or "),J=r(Q,"CODE",{});var Se=i(J);le=n(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),Q.forEach(t),fe=u(D),W=r(D,"LI",{});var Ie=i(W);Ae=n(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(Ie,"CODE",{});var at=i(O);Pe=n(at,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),at.forEach(t),Ie.forEach(t),D.forEach(t),te=u(v),j=r(v,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(t),Oe=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(v,F){m(v,c,F),e(c,b),e(c,_),e(_,f),e(c,y),m(v,l,F),m(v,h,F),e(h,q),e(q,we),e(h,_e),e(h,R),e(R,ae),m(v,se,F),m(v,$,F),e($,Te),e($,V),e(V,xe),e($,ve),e($,S),e(S,Me),e($,ie),e($,K),e(K,$e),e($,pe),e($,G),e(G,Fe),e($,ue),e($,X),e(X,qe),e($,ye),m(v,ee,F),m(v,A,F),e(A,P),e(P,he),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(A,Le),e(A,C),e(C,re),e(C,Y),e(Y,me),e(C,Ce),e(C,J),e(J,le),e(A,fe),e(A,W),e(W,Ae),e(W,O),e(O,Pe),m(v,te,F),m(v,j,F),e(j,je),e(j,N),e(N,Ne),e(j,Oe)},d(v){v&&t(c),v&&t(l),v&&t(h),v&&t(se),v&&t($),v&&t(ee),v&&t(A),v&&t(te),v&&t(j)}}}function Qy(z){let c,b,_,f,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var q=i(_);f=n(q,"Module"),q.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){m(l,c,h),e(c,b),e(c,_),e(_,f),e(c,y)},d(l){l&&t(c)}}}function Uy(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import AutoProcessor, TFAutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),b=o("Examples:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function Vy(z){let c,b,_,f,y,l,h,q,we,_e,R,ae,se,$,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,Fe,ue,X,qe,ye,ee,A,P,he,H,Ee,be,U,ze,Le,C,re,Y,me,Ce,J,le,fe,W,Ae,O,Pe,te,j,je,N,Ne,Oe;return{c(){c=a("p"),b=o("TensorFlow models and layers in "),_=a("code"),f=o("transformers"),y=o(" accept two formats as input:"),l=p(),h=a("ul"),q=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),R=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),$=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),Me=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=o("fit()"),pe=o(" and "),G=a("code"),Fe=o("predict()"),ue=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),qe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),A=a("ul"),P=a("li"),he=o("a single Tensor with "),H=a("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),U=a("code"),ze=o("model(input_ids)"),Le=p(),C=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),me=o("model([input_ids, attention_mask])"),Ce=o(" or "),J=a("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),fe=p(),W=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),j=a("p"),je=o(`Note that when creating models and layers with
`),N=a("a"),Ne=o("subclassing"),Oe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){c=r(v,"P",{});var F=i(c);b=n(F,"TensorFlow models and layers in "),_=r(F,"CODE",{});var Xe=i(_);f=n(Xe,"transformers"),Xe.forEach(t),y=n(F," accept two formats as input:"),F.forEach(t),l=u(v),h=r(v,"UL",{});var oe=i(h);q=r(oe,"LI",{});var Ye=i(q);we=n(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(t),_e=u(oe),R=r(oe,"LI",{});var Je=i(R);ae=n(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),oe.forEach(t),se=u(v),$=r(v,"P",{});var E=i($);Te=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(t),ve=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Ze=i(S);Me=n(Ze,"model.fit()"),Ze.forEach(t),ie=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(E,"CODE",{});var Be=i(K);$e=n(Be,"fit()"),Be.forEach(t),pe=n(E," and "),G=r(E,"CODE",{});var et=i(G);Fe=n(et,"predict()"),et.forEach(t),ue=n(E,`, such as when creating your own layers or models with
the Keras `),X=r(E,"CODE",{});var tt=i(X);qe=n(tt,"Functional"),tt.forEach(t),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=u(v),A=r(v,"UL",{});var D=i(A);P=r(D,"LI",{});var Z=i(P);he=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var ot=i(H);Ee=n(ot,"input_ids"),ot.forEach(t),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var nt=i(U);ze=n(nt,"model(input_ids)"),nt.forEach(t),Z.forEach(t),Le=u(D),C=r(D,"LI",{});var Q=i(C);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var st=i(Y);me=n(st,"model([input_ids, attention_mask])"),st.forEach(t),Ce=n(Q," or "),J=r(Q,"CODE",{});var Se=i(J);le=n(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),Q.forEach(t),fe=u(D),W=r(D,"LI",{});var Ie=i(W);Ae=n(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(Ie,"CODE",{});var at=i(O);Pe=n(at,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),at.forEach(t),Ie.forEach(t),D.forEach(t),te=u(v),j=r(v,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(t),Oe=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(v,F){m(v,c,F),e(c,b),e(c,_),e(_,f),e(c,y),m(v,l,F),m(v,h,F),e(h,q),e(q,we),e(h,_e),e(h,R),e(R,ae),m(v,se,F),m(v,$,F),e($,Te),e($,V),e(V,xe),e($,ve),e($,S),e(S,Me),e($,ie),e($,K),e(K,$e),e($,pe),e($,G),e(G,Fe),e($,ue),e($,X),e(X,qe),e($,ye),m(v,ee,F),m(v,A,F),e(A,P),e(P,he),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(A,Le),e(A,C),e(C,re),e(C,Y),e(Y,me),e(C,Ce),e(C,J),e(J,le),e(A,fe),e(A,W),e(W,Ae),e(W,O),e(O,Pe),m(v,te,F),m(v,j,F),e(j,je),e(j,N),e(N,Ne),e(j,Oe)},d(v){v&&t(c),v&&t(l),v&&t(h),v&&t(se),v&&t($),v&&t(ee),v&&t(A),v&&t(te),v&&t(j)}}}function Hy(z){let c,b,_,f,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var q=i(_);f=n(q,"Module"),q.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){m(l,c,h),e(c,b),e(c,_),e(_,f),e(c,y)},d(l){l&&t(c)}}}function Ky(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import AutoProcessor, TFAutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=o("Examples:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function Gy(z){let c,b,_,f,y,l,h,q,we,_e,R,ae,se,$,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,Fe,ue,X,qe,ye,ee,A,P,he,H,Ee,be,U,ze,Le,C,re,Y,me,Ce,J,le,fe,W,Ae,O,Pe,te,j,je,N,Ne,Oe;return{c(){c=a("p"),b=o("TensorFlow models and layers in "),_=a("code"),f=o("transformers"),y=o(" accept two formats as input:"),l=p(),h=a("ul"),q=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),R=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),$=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),Me=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=o("fit()"),pe=o(" and "),G=a("code"),Fe=o("predict()"),ue=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),qe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),A=a("ul"),P=a("li"),he=o("a single Tensor with "),H=a("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),U=a("code"),ze=o("model(input_ids)"),Le=p(),C=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),me=o("model([input_ids, attention_mask])"),Ce=o(" or "),J=a("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),fe=p(),W=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),j=a("p"),je=o(`Note that when creating models and layers with
`),N=a("a"),Ne=o("subclassing"),Oe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){c=r(v,"P",{});var F=i(c);b=n(F,"TensorFlow models and layers in "),_=r(F,"CODE",{});var Xe=i(_);f=n(Xe,"transformers"),Xe.forEach(t),y=n(F," accept two formats as input:"),F.forEach(t),l=u(v),h=r(v,"UL",{});var oe=i(h);q=r(oe,"LI",{});var Ye=i(q);we=n(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(t),_e=u(oe),R=r(oe,"LI",{});var Je=i(R);ae=n(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),oe.forEach(t),se=u(v),$=r(v,"P",{});var E=i($);Te=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(t),ve=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Ze=i(S);Me=n(Ze,"model.fit()"),Ze.forEach(t),ie=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(E,"CODE",{});var Be=i(K);$e=n(Be,"fit()"),Be.forEach(t),pe=n(E," and "),G=r(E,"CODE",{});var et=i(G);Fe=n(et,"predict()"),et.forEach(t),ue=n(E,`, such as when creating your own layers or models with
the Keras `),X=r(E,"CODE",{});var tt=i(X);qe=n(tt,"Functional"),tt.forEach(t),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=u(v),A=r(v,"UL",{});var D=i(A);P=r(D,"LI",{});var Z=i(P);he=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var ot=i(H);Ee=n(ot,"input_ids"),ot.forEach(t),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var nt=i(U);ze=n(nt,"model(input_ids)"),nt.forEach(t),Z.forEach(t),Le=u(D),C=r(D,"LI",{});var Q=i(C);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var st=i(Y);me=n(st,"model([input_ids, attention_mask])"),st.forEach(t),Ce=n(Q," or "),J=r(Q,"CODE",{});var Se=i(J);le=n(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),Q.forEach(t),fe=u(D),W=r(D,"LI",{});var Ie=i(W);Ae=n(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(Ie,"CODE",{});var at=i(O);Pe=n(at,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),at.forEach(t),Ie.forEach(t),D.forEach(t),te=u(v),j=r(v,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(t),Oe=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(v,F){m(v,c,F),e(c,b),e(c,_),e(_,f),e(c,y),m(v,l,F),m(v,h,F),e(h,q),e(q,we),e(h,_e),e(h,R),e(R,ae),m(v,se,F),m(v,$,F),e($,Te),e($,V),e(V,xe),e($,ve),e($,S),e(S,Me),e($,ie),e($,K),e(K,$e),e($,pe),e($,G),e(G,Fe),e($,ue),e($,X),e(X,qe),e($,ye),m(v,ee,F),m(v,A,F),e(A,P),e(P,he),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(A,Le),e(A,C),e(C,re),e(C,Y),e(Y,me),e(C,Ce),e(C,J),e(J,le),e(A,fe),e(A,W),e(W,Ae),e(W,O),e(O,Pe),m(v,te,F),m(v,j,F),e(j,je),e(j,N),e(N,Ne),e(j,Oe)},d(v){v&&t(c),v&&t(l),v&&t(h),v&&t(se),v&&t($),v&&t(ee),v&&t(A),v&&t(te),v&&t(j)}}}function Xy(z){let c,b,_,f,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var q=i(_);f=n(q,"Module"),q.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){m(l,c,h),e(c,b),e(c,_),e(_,f),e(c,y)},d(l){l&&t(c)}}}function Yy(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import AutoProcessor, TFAutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=o("Examples:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function Jy(z){let c,b,_,f,y,l,h,q,we,_e,R,ae,se,$,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,Fe,ue,X,qe,ye,ee,A,P,he,H,Ee,be,U,ze,Le,C,re,Y,me,Ce,J,le,fe,W,Ae,O,Pe,te,j,je,N,Ne,Oe;return{c(){c=a("p"),b=o("TensorFlow models and layers in "),_=a("code"),f=o("transformers"),y=o(" accept two formats as input:"),l=p(),h=a("ul"),q=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),R=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),$=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),Me=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=o("fit()"),pe=o(" and "),G=a("code"),Fe=o("predict()"),ue=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),qe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),A=a("ul"),P=a("li"),he=o("a single Tensor with "),H=a("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),U=a("code"),ze=o("model(input_ids)"),Le=p(),C=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),me=o("model([input_ids, attention_mask])"),Ce=o(" or "),J=a("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),fe=p(),W=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),j=a("p"),je=o(`Note that when creating models and layers with
`),N=a("a"),Ne=o("subclassing"),Oe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){c=r(v,"P",{});var F=i(c);b=n(F,"TensorFlow models and layers in "),_=r(F,"CODE",{});var Xe=i(_);f=n(Xe,"transformers"),Xe.forEach(t),y=n(F," accept two formats as input:"),F.forEach(t),l=u(v),h=r(v,"UL",{});var oe=i(h);q=r(oe,"LI",{});var Ye=i(q);we=n(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(t),_e=u(oe),R=r(oe,"LI",{});var Je=i(R);ae=n(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),oe.forEach(t),se=u(v),$=r(v,"P",{});var E=i($);Te=n(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(E,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(t),ve=n(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Ze=i(S);Me=n(Ze,"model.fit()"),Ze.forEach(t),ie=n(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(E,"CODE",{});var Be=i(K);$e=n(Be,"fit()"),Be.forEach(t),pe=n(E," and "),G=r(E,"CODE",{});var et=i(G);Fe=n(et,"predict()"),et.forEach(t),ue=n(E,`, such as when creating your own layers or models with
the Keras `),X=r(E,"CODE",{});var tt=i(X);qe=n(tt,"Functional"),tt.forEach(t),ye=n(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=u(v),A=r(v,"UL",{});var D=i(A);P=r(D,"LI",{});var Z=i(P);he=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var ot=i(H);Ee=n(ot,"input_ids"),ot.forEach(t),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var nt=i(U);ze=n(nt,"model(input_ids)"),nt.forEach(t),Z.forEach(t),Le=u(D),C=r(D,"LI",{});var Q=i(C);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var st=i(Y);me=n(st,"model([input_ids, attention_mask])"),st.forEach(t),Ce=n(Q," or "),J=r(Q,"CODE",{});var Se=i(J);le=n(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),Q.forEach(t),fe=u(D),W=r(D,"LI",{});var Ie=i(W);Ae=n(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r(Ie,"CODE",{});var at=i(O);Pe=n(at,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),at.forEach(t),Ie.forEach(t),D.forEach(t),te=u(v),j=r(v,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(t),Oe=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(v,F){m(v,c,F),e(c,b),e(c,_),e(_,f),e(c,y),m(v,l,F),m(v,h,F),e(h,q),e(q,we),e(h,_e),e(h,R),e(R,ae),m(v,se,F),m(v,$,F),e($,Te),e($,V),e(V,xe),e($,ve),e($,S),e(S,Me),e($,ie),e($,K),e(K,$e),e($,pe),e($,G),e(G,Fe),e($,ue),e($,X),e(X,qe),e($,ye),m(v,ee,F),m(v,A,F),e(A,P),e(P,he),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(A,Le),e(A,C),e(C,re),e(C,Y),e(Y,me),e(C,Ce),e(C,J),e(J,le),e(A,fe),e(A,W),e(W,Ae),e(W,O),e(O,Pe),m(v,te,F),m(v,j,F),e(j,je),e(j,N),e(N,Ne),e(j,Oe)},d(v){v&&t(c),v&&t(l),v&&t(h),v&&t(se),v&&t($),v&&t(ee),v&&t(A),v&&t(te),v&&t(j)}}}function Zy(z){let c,b,_,f,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(h,"CODE",{});var q=i(_);f=n(q,"Module"),q.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){m(l,c,h),e(c,b),e(c,_),e(_,f),e(c,y)},d(l){l&&t(c)}}}function eb(z){let c,b,_,f,y;return f=new Kt({props:{code:`from transformers import AutoProcessor, TFAutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){c=a("p"),b=o("Examples:"),_=p(),L(f.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),_=u(l),k(f.$$.fragment,l)},m(l,h){m(l,c,h),e(c,b),m(l,_,h),w(f,l,h),y=!0},p:Ht,i(l){y||(T(f.$$.fragment,l),y=!0)},o(l){x(f.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(_),M(f,l)}}}function tb(z){let c,b,_,f,y,l,h,q,we,_e,R,ae,se,$,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,Fe,ue,X,qe,ye,ee,A,P,he,H,Ee,be,U,ze,Le,C,re,Y,me,Ce,J,le,fe,W,Ae,O,Pe,te,j,je,N,Ne,Oe,v,F,Xe,oe,Ye,Je,E,ge,Ze,Be,et,tt,D,Z,ot,nt,Q,st,Se,Ie,at,de,De,$d,Fn,Fd,qd,al,Lo,Tg,rl,ko,Ed,ka,zd,Cd,il,He,Ad,qn,Pd,jd,En,Nd,Od,zn,Sd,Id,Cn,Dd,Rd,An,Bd,Wd,ll,Gt,wo,kr,Pn,Qd,wr,Ud,dl,wa,Vd,cl,To,pl,jn,ul,Ta,xo,xa,Hd,Kd,Nn,Gd,Xd,hl,On,ml,Ot,St,Ma,Yd,Jd,Sn,Zd,ec,In,tc,oc,nc,lt,sc,Dn,ac,rc,$a,ic,lc,Rn,dc,cc,Fa,pc,uc,hc,Xt,mc,Bn,fc,gc,qa,_c,vc,fl,Wn,gl,Ea,Mo,za,yc,bc,Qn,Lc,kc,_l,Yt,$o,Tr,Un,wc,xr,Tc,vl,dt,Vn,xc,Jt,Mc,Ca,$c,Fc,Hn,qc,Ec,zc,Zt,Cc,Aa,Ac,Pc,Pa,jc,Nc,Oc,Fo,yl,eo,qo,Mr,Kn,Sc,$r,Ic,bl,ct,Gn,Dc,Fr,Rc,Bc,Xn,Wc,qr,Qc,Uc,Vc,It,Yn,Hc,Er,Kc,Gc,Eo,Ll,to,zo,zr,Jn,Xc,Cr,Yc,kl,We,Zn,Jc,Re,Zc,Ar,ep,tp,ja,op,np,Pr,sp,ap,jr,rp,ip,Nr,lp,dp,Or,cp,pp,Sr,up,hp,mp,es,fp,Na,gp,_p,vp,Oa,Sa,yp,bp,Lp,Co,ts,kp,Ir,wp,Tp,Ia,os,wl,oo,Ao,Dr,ns,xp,Rr,Mp,Tl,pt,ss,$p,as,Fp,Br,qp,Ep,zp,rs,Cp,Da,Ap,Pp,jp,Po,is,Np,Wr,Op,xl,no,jo,Qr,ls,Sp,Ur,Ip,Ml,rt,ds,Dp,Vr,Rp,Bp,Ra,Ba,Wp,Qp,Up,ce,Vp,Wa,Hp,Kp,Qa,Gp,Xp,Ua,Yp,Jp,Hr,Zp,eu,Kr,tu,ou,Gr,nu,su,Xr,au,ru,Yr,iu,lu,Jr,du,cu,pu,Dt,cs,uu,I,hu,Zr,mu,fu,ps,ei,gu,_u,vu,Va,yu,bu,ti,Lu,ku,oi,wu,Tu,us,ni,xu,Mu,$u,si,Fu,qu,Ha,Eu,zu,ai,Cu,Au,ri,Pu,ju,ii,Nu,Ou,li,Su,Iu,di,Du,Ru,hs,ci,Bu,Wu,Qu,pi,Uu,Vu,Hu,ui,Ku,$l,so,No,hi,ms,Gu,mi,Xu,Fl,Ct,fs,Yu,gs,Ju,_s,Zu,eh,th,yt,vs,oh,ao,nh,Ka,sh,ah,fi,rh,ih,lh,Oo,dh,So,ql,ro,Io,gi,ys,ch,_i,ph,El,ut,bs,uh,Ls,hh,ks,mh,fh,gh,ws,_h,Ts,vh,yh,bh,bt,xs,Lh,io,kh,Ga,wh,Th,vi,xh,Mh,$h,Do,Fh,Ro,zl,lo,Bo,yi,Ms,qh,bi,Eh,Cl,ht,$s,zh,mt,Ch,Fs,Ah,Ph,qs,jh,Nh,Es,Oh,Sh,zs,Ih,Dh,Rh,Cs,Bh,As,Wh,Qh,Uh,Lt,Ps,Vh,co,Hh,Xa,Kh,Gh,Li,Xh,Yh,Jh,Wo,Zh,Qo,Al,po,Uo,ki,js,em,wi,tm,Pl,ft,Ns,om,At,nm,Os,sm,am,Ti,rm,im,xi,lm,dm,cm,Ss,pm,Is,um,hm,mm,kt,Ds,fm,uo,gm,Ya,_m,vm,Mi,ym,bm,Lm,Vo,km,Ho,jl,ho,Ko,$i,Rs,wm,Fi,Tm,Nl,it,Bs,xm,Ws,Mm,Ja,$m,Fm,qm,Qs,Em,Us,zm,Cm,Am,Go,Pm,wt,Vs,jm,mo,Nm,Za,Om,Sm,qi,Im,Dm,Rm,Xo,Bm,Yo,Ol,fo,Jo,Ei,Hs,Wm,zi,Qm,Sl,Qe,Ks,Um,Gs,Vm,Xs,Hm,Km,Gm,Ys,Xm,er,Ym,Jm,Zm,Js,ef,Zs,tf,of,nf,Zo,sf,Tt,ea,af,go,rf,tr,lf,df,Ci,cf,pf,uf,en,hf,tn,Il,_o,on,Ai,ta,mf,Pi,ff,Dl,Ue,oa,gf,gt,_f,na,vf,yf,sa,bf,Lf,aa,kf,wf,ra,Tf,xf,Mf,ia,$f,or,Ff,qf,Ef,la,zf,da,Cf,Af,Pf,nn,jf,xt,ca,Nf,vo,Of,nr,Sf,If,ji,Df,Rf,Bf,sn,Wf,an,Rl,yo,rn,Ni,pa,Qf,Oi,Uf,Bl,Ve,ua,Vf,Pt,Hf,ha,Kf,Gf,Si,Xf,Yf,Ii,Jf,Zf,eg,ma,tg,sr,og,ng,sg,fa,ag,ga,rg,ig,lg,ln,dg,Mt,_a,cg,bo,pg,ar,ug,hg,Di,mg,fg,gg,dn,_g,cn,Wl;return l=new Ge({}),$=new Ge({}),Pn=new Ge({}),To=new vt({props:{$$slots:{default:[Cy]},$$scope:{ctx:z}}}),jn=new wg({props:{pipeline:"text-classification"}}),On=new wg({props:{pipeline:"token-classification"}}),Wn=new wg({props:{pipeline:"question-answering"}}),Un=new Ge({}),Vn=new ne({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L40"}}),Fo=new Vt({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[Ay]},$$scope:{ctx:z}}}),Kn=new Ge({}),Gn=new ne({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"tesseract_config",val:" = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv3FeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.LayoutLMv3FeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.Resampling.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.Resampling.NEAREST</code>,
<code>PIL.Image.Resampling.BOX</code>, <code>PIL.Image.Resampling.BILINEAR</code>, <code>PIL.Image.Resampling.HAMMING</code>,
<code>PIL.Image.Resampling.BICUBIC</code> or <code>PIL.Image.Resampling.LANCZOS</code>. Only has an effect if <code>do_resize</code> is set
to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv3FeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"tesseract_config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L83"}}),Yn=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L150",returnDescription:`
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
`}}),Eo=new Vt({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[Py]},$$scope:{ctx:z}}}),Jn=new Ge({}),Zn=new ne({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),ts=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),os=new ne({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),ns=new Ge({}),ss=new ne({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),is=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),ls=new Ge({}),ds=new ne({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),cs=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),ms=new Ge({}),fs=new ne({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L754"}}),vs=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>) &#x2014;
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
`}}),Oo=new vt({props:{$$slots:{default:[jy]},$$scope:{ctx:z}}}),So=new Vt({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[Ny]},$$scope:{ctx:z}}}),ys=new Ge({}),bs=new ne({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1290"}}),xs=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Do=new vt({props:{$$slots:{default:[Oy]},$$scope:{ctx:z}}}),Ro=new Vt({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[Sy]},$$scope:{ctx:z}}}),Ms=new Ge({}),$s=new ne({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1042"}}),Ps=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"pixel_values",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Wo=new vt({props:{$$slots:{default:[Iy]},$$scope:{ctx:z}}}),Qo=new Vt({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[Dy]},$$scope:{ctx:z}}}),js=new Ge({}),Ns=new ne({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1157"}}),Ds=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.LongTensor] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Vo=new vt({props:{$$slots:{default:[Ry]},$$scope:{ctx:z}}}),Ho=new Vt({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[By]},$$scope:{ctx:z}}}),Rs=new Ge({}),Bs=new ne({props:{name:"class transformers.TFLayoutLMv3Model",anchor:"transformers.TFLayoutLMv3Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1143"}}),Go=new vt({props:{$$slots:{default:[Wy]},$$scope:{ctx:z}}}),Vs=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3Model.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Xo=new vt({props:{$$slots:{default:[Qy]},$$scope:{ctx:z}}}),Yo=new Vt({props:{anchor:"transformers.TFLayoutLMv3Model.call.example",$$slots:{default:[Uy]},$$scope:{ctx:z}}}),Hs=new Ge({}),Ks=new ne({props:{name:"class transformers.TFLayoutLMv3ForSequenceClassification",anchor:"transformers.TFLayoutLMv3ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1268"}}),Zo=new vt({props:{$$slots:{default:[Vy]},$$scope:{ctx:z}}}),ea=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),en=new vt({props:{$$slots:{default:[Hy]},$$scope:{ctx:z}}}),tn=new Vt({props:{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.example",$$slots:{default:[Ky]},$$scope:{ctx:z}}}),ta=new Ge({}),oa=new ne({props:{name:"class transformers.TFLayoutLMv3ForTokenClassification",anchor:"transformers.TFLayoutLMv3ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1379"}}),nn=new vt({props:{$$slots:{default:[Gy]},$$scope:{ctx:z}}}),ca=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),sn=new vt({props:{$$slots:{default:[Xy]},$$scope:{ctx:z}}}),an=new Vt({props:{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.example",$$slots:{default:[Yy]},$$scope:{ctx:z}}}),pa=new Ge({}),ua=new ne({props:{name:"class transformers.TFLayoutLMv3ForQuestionAnswering",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1508"}}),ln=new vt({props:{$$slots:{default:[Jy]},$$scope:{ctx:z}}}),_a=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),dn=new vt({props:{$$slots:{default:[Zy]},$$scope:{ctx:z}}}),cn=new Vt({props:{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.example",$$slots:{default:[eb]},$$scope:{ctx:z}}}),{c(){c=a("meta"),b=p(),_=a("h1"),f=a("a"),y=a("span"),L(l.$$.fragment),h=p(),q=a("span"),we=o("LayoutLMv3"),_e=p(),R=a("h2"),ae=a("a"),se=a("span"),L($.$$.fragment),Te=p(),V=a("span"),xe=o("Overview"),ve=p(),S=a("p"),Me=o("The LayoutLMv3 model was proposed in "),ie=a("a"),K=o("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),$e=o(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),pe=a("a"),G=o("LayoutLMv2"),Fe=o(" by using patch embeddings (as in "),ue=a("a"),X=o("ViT"),qe=o(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),ye=p(),ee=a("p"),A=o("The abstract from the paper is the following:"),P=p(),he=a("p"),H=a("em"),Ee=o("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),be=p(),U=a("p"),ze=o("Tips:"),Le=p(),C=a("ul"),re=a("li"),Y=o("In terms of data processing, LayoutLMv3 is identical to its predecessor "),me=a("a"),Ce=o("LayoutLMv2"),J=o(", except that:"),le=a("ul"),fe=a("li"),W=o("images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Ae=p(),O=a("li"),Pe=o(`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),te=a("a"),j=o("LayoutLMv3Processor"),je=o(" which internally combines a "),N=a("a"),Ne=o("LayoutLMv3FeatureExtractor"),Oe=o(" (for the image modality) and a "),v=a("a"),F=o("LayoutLMv3Tokenizer"),Xe=o("/"),oe=a("a"),Ye=o("LayoutLMv3TokenizerFast"),Je=o(" (for the text modality) to prepare all data for the model."),E=p(),ge=a("li"),Ze=o("Regarding usage of "),Be=a("a"),et=o("LayoutLMv3Processor"),tt=o(", we refer to the "),D=a("a"),Z=o("usage guide"),ot=o(" of its predecessor."),nt=p(),Q=a("li"),st=o("Demo notebooks for LayoutLMv3 can be found "),Se=a("a"),Ie=o("here"),at=o("."),de=p(),De=a("li"),$d=o("Demo scripts can be found "),Fn=a("a"),Fd=o("here"),qd=o("."),al=p(),Lo=a("img"),rl=p(),ko=a("small"),Ed=o("LayoutLMv3 architecture. Taken from the "),ka=a("a"),zd=o("original paper"),Cd=o("."),il=p(),He=a("p"),Ad=o("This model was contributed by "),qn=a("a"),Pd=o("nielsr"),jd=o(". The TensorFlow version of this model was added by "),En=a("a"),Nd=o("chriskoo"),Od=o(", "),zn=a("a"),Sd=o("tokec"),Id=o(", and "),Cn=a("a"),Dd=o("lre"),Rd=o(". The original code can be found "),An=a("a"),Bd=o("here"),Wd=o("."),ll=p(),Gt=a("h2"),wo=a("a"),kr=a("span"),L(Pn.$$.fragment),Qd=p(),wr=a("span"),Ud=o("Resources"),dl=p(),wa=a("p"),Vd=o("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with LayoutLMv3. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),cl=p(),L(To.$$.fragment),pl=p(),L(jn.$$.fragment),ul=p(),Ta=a("ul"),xo=a("li"),xa=a("a"),Hd=o("LayoutLMv2ForSequenceClassification"),Kd=o(" is supported by this "),Nn=a("a"),Gd=o("notebook"),Xd=o("."),hl=p(),L(On.$$.fragment),ml=p(),Ot=a("ul"),St=a("li"),Ma=a("a"),Yd=o("LayoutLMv3ForTokenClassification"),Jd=o(" is supported by this "),Sn=a("a"),Zd=o("example script"),ec=o(" and "),In=a("a"),tc=o("notebook"),oc=o("."),nc=p(),lt=a("li"),sc=o("A "),Dn=a("a"),ac=o("notebook"),rc=o(" for how to perform inference with "),$a=a("a"),ic=o("LayoutLMv2ForTokenClassification"),lc=o(" and a "),Rn=a("a"),dc=o("notebook"),cc=o(" for how to perform inference when no labels are available with "),Fa=a("a"),pc=o("LayoutLMv2ForTokenClassification"),uc=o("."),hc=p(),Xt=a("li"),mc=o("A "),Bn=a("a"),fc=o("notebook"),gc=o(" for how to finetune "),qa=a("a"),_c=o("LayoutLMv2ForTokenClassification"),vc=o(" with the \u{1F917} Trainer."),fl=p(),L(Wn.$$.fragment),gl=p(),Ea=a("ul"),Mo=a("li"),za=a("a"),yc=o("LayoutLMv2ForQuestionAnswering"),bc=o(" is supported by this "),Qn=a("a"),Lc=o("notebook"),kc=o("."),_l=p(),Yt=a("h2"),$o=a("a"),Tr=a("span"),L(Un.$$.fragment),wc=p(),xr=a("span"),Tc=o("LayoutLMv3Config"),vl=p(),dt=a("div"),L(Vn.$$.fragment),xc=p(),Jt=a("p"),Mc=o("This is the configuration class to store the configuration of a "),Ca=a("a"),$c=o("LayoutLMv3Model"),Fc=o(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),Hn=a("a"),qc=o("microsoft/layoutlmv3-base"),Ec=o(" architecture."),zc=p(),Zt=a("p"),Cc=o("Configuration objects inherit from "),Aa=a("a"),Ac=o("PretrainedConfig"),Pc=o(` and can be used to control the model outputs. Read the
documentation from `),Pa=a("a"),jc=o("PretrainedConfig"),Nc=o(" for more information."),Oc=p(),L(Fo.$$.fragment),yl=p(),eo=a("h2"),qo=a("a"),Mr=a("span"),L(Kn.$$.fragment),Sc=p(),$r=a("span"),Ic=o("LayoutLMv3FeatureExtractor"),bl=p(),ct=a("div"),L(Gn.$$.fragment),Dc=p(),Fr=a("p"),Rc=o(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Bc=p(),Xn=a("p"),Wc=o("This feature extractor inherits from "),qr=a("code"),Qc=o("PreTrainedFeatureExtractor()"),Uc=o(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Vc=p(),It=a("div"),L(Yn.$$.fragment),Hc=p(),Er=a("p"),Kc=o("Main method to prepare for the model one or several image(s)."),Gc=p(),L(Eo.$$.fragment),Ll=p(),to=a("h2"),zo=a("a"),zr=a("span"),L(Jn.$$.fragment),Xc=p(),Cr=a("span"),Yc=o("LayoutLMv3Tokenizer"),kl=p(),We=a("div"),L(Zn.$$.fragment),Jc=p(),Re=a("p"),Zc=o("Construct a LayoutLMv3 tokenizer. Based on "),Ar=a("code"),ep=o("RoBERTatokenizer"),tp=o(` (Byte Pair Encoding or BPE).
`),ja=a("a"),op=o("LayoutLMv3Tokenizer"),np=o(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),Pr=a("code"),sp=o("input_ids"),ap=o(", "),jr=a("code"),rp=o("attention_mask"),ip=o(", "),Nr=a("code"),lp=o("token_type_ids"),dp=o(", "),Or=a("code"),cp=o("bbox"),pp=o(", and optional "),Sr=a("code"),up=o("labels"),hp=o(` (for token
classification).`),mp=p(),es=a("p"),fp=o("This tokenizer inherits from "),Na=a("a"),gp=o("PreTrainedTokenizer"),_p=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vp=p(),Oa=a("p"),Sa=a("a"),yp=o("LayoutLMv3Tokenizer"),bp=o(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Lp=p(),Co=a("div"),L(ts.$$.fragment),kp=p(),Ir=a("p"),wp=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Tp=p(),Ia=a("div"),L(os.$$.fragment),wl=p(),oo=a("h2"),Ao=a("a"),Dr=a("span"),L(ns.$$.fragment),xp=p(),Rr=a("span"),Mp=o("LayoutLMv3TokenizerFast"),Tl=p(),pt=a("div"),L(ss.$$.fragment),$p=p(),as=a("p"),Fp=o("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),Br=a("em"),qp=o("tokenizers"),Ep=o(" library). Based on BPE."),zp=p(),rs=a("p"),Cp=o("This tokenizer inherits from "),Da=a("a"),Ap=o("PreTrainedTokenizerFast"),Pp=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),jp=p(),Po=a("div"),L(is.$$.fragment),Np=p(),Wr=a("p"),Op=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),xl=p(),no=a("h2"),jo=a("a"),Qr=a("span"),L(ls.$$.fragment),Sp=p(),Ur=a("span"),Ip=o("LayoutLMv3Processor"),Ml=p(),rt=a("div"),L(ds.$$.fragment),Dp=p(),Vr=a("p"),Rp=o(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Bp=p(),Ra=a("p"),Ba=a("a"),Wp=o("LayoutLMv3Processor"),Qp=o(" offers all the functionalities you need to prepare data for the model."),Up=p(),ce=a("p"),Vp=o("It first uses "),Wa=a("a"),Hp=o("LayoutLMv3FeatureExtractor"),Kp=o(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Qa=a("a"),Gp=o("LayoutLMv3Tokenizer"),Xp=o(` or
`),Ua=a("a"),Yp=o("LayoutLMv3TokenizerFast"),Jp=o(", which turns the words and bounding boxes into token-level "),Hr=a("code"),Zp=o("input_ids"),eu=o(`,
`),Kr=a("code"),tu=o("attention_mask"),ou=o(", "),Gr=a("code"),nu=o("token_type_ids"),su=o(", "),Xr=a("code"),au=o("bbox"),ru=o(". Optionally, one can provide integer "),Yr=a("code"),iu=o("word_labels"),lu=o(`, which are turned
into token-level `),Jr=a("code"),du=o("labels"),cu=o(" for token classification tasks (such as FUNSD, CORD)."),pu=p(),Dt=a("div"),L(cs.$$.fragment),uu=p(),I=a("p"),hu=o("This method first forwards the "),Zr=a("code"),mu=o("images"),fu=o(" argument to "),ps=a("a"),ei=a("strong"),gu=o("call"),_u=o("()"),vu=o(`. In case
`),Va=a("a"),yu=o("LayoutLMv3FeatureExtractor"),bu=o(" was initialized with "),ti=a("code"),Lu=o("apply_ocr"),ku=o(" set to "),oi=a("code"),wu=o("True"),Tu=o(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),us=a("a"),ni=a("strong"),xu=o("call"),Mu=o("()"),$u=o(` and returns the output,
together with resized and normalized `),si=a("code"),Fu=o("pixel_values"),qu=o(". In case "),Ha=a("a"),Eu=o("LayoutLMv3FeatureExtractor"),zu=o(` was initialized
with `),ai=a("code"),Cu=o("apply_ocr"),Au=o(" set to "),ri=a("code"),Pu=o("False"),ju=o(", it passes the words ("),ii=a("code"),Nu=o("text"),Ou=o("/`"),li=a("code"),Su=o("text_pair"),Iu=o(") and "),di=a("code"),Du=o("boxes"),Ru=o(` specified by the user
along with the additional arguments to `),hs=a("a"),ci=a("strong"),Bu=o("call"),Wu=o("()"),Qu=o(` and returns the output, together with
resized and normalized `),pi=a("code"),Uu=o("pixel_values"),Vu=o("."),Hu=p(),ui=a("p"),Ku=o("Please refer to the docstring of the above two methods for more information."),$l=p(),so=a("h2"),No=a("a"),hi=a("span"),L(ms.$$.fragment),Gu=p(),mi=a("span"),Xu=o("LayoutLMv3Model"),Fl=p(),Ct=a("div"),L(fs.$$.fragment),Yu=p(),gs=a("p"),Ju=o(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),_s=a("a"),Zu=o("torch.nn.Module"),eh=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),th=p(),yt=a("div"),L(vs.$$.fragment),oh=p(),ao=a("p"),nh=o("The "),Ka=a("a"),sh=o("LayoutLMv3Model"),ah=o(" forward method, overrides the "),fi=a("code"),rh=o("__call__"),ih=o(" special method."),lh=p(),L(Oo.$$.fragment),dh=p(),L(So.$$.fragment),ql=p(),ro=a("h2"),Io=a("a"),gi=a("span"),L(ys.$$.fragment),ch=p(),_i=a("span"),ph=o("LayoutLMv3ForSequenceClassification"),El=p(),ut=a("div"),L(bs.$$.fragment),uh=p(),Ls=a("p"),hh=o(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),ks=a("a"),mh=o("RVL-CDIP"),fh=o(" dataset."),gh=p(),ws=a("p"),_h=o("This model is a PyTorch "),Ts=a("a"),vh=o("torch.nn.Module"),yh=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bh=p(),bt=a("div"),L(xs.$$.fragment),Lh=p(),io=a("p"),kh=o("The "),Ga=a("a"),wh=o("LayoutLMv3ForSequenceClassification"),Th=o(" forward method, overrides the "),vi=a("code"),xh=o("__call__"),Mh=o(" special method."),$h=p(),L(Do.$$.fragment),Fh=p(),L(Ro.$$.fragment),zl=p(),lo=a("h2"),Bo=a("a"),yi=a("span"),L(Ms.$$.fragment),qh=p(),bi=a("span"),Eh=o("LayoutLMv3ForTokenClassification"),Cl=p(),ht=a("div"),L($s.$$.fragment),zh=p(),mt=a("p"),Ch=o(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Fs=a("a"),Ah=o("FUNSD"),Ph=o(`,
`),qs=a("a"),jh=o("SROIE"),Nh=o(", "),Es=a("a"),Oh=o("CORD"),Sh=o(` and
`),zs=a("a"),Ih=o("Kleister-NDA"),Dh=o("."),Rh=p(),Cs=a("p"),Bh=o("This model is a PyTorch "),As=a("a"),Wh=o("torch.nn.Module"),Qh=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uh=p(),Lt=a("div"),L(Ps.$$.fragment),Vh=p(),co=a("p"),Hh=o("The "),Xa=a("a"),Kh=o("LayoutLMv3ForTokenClassification"),Gh=o(" forward method, overrides the "),Li=a("code"),Xh=o("__call__"),Yh=o(" special method."),Jh=p(),L(Wo.$$.fragment),Zh=p(),L(Qo.$$.fragment),Al=p(),po=a("h2"),Uo=a("a"),ki=a("span"),L(js.$$.fragment),em=p(),wi=a("span"),tm=o("LayoutLMv3ForQuestionAnswering"),Pl=p(),ft=a("div"),L(Ns.$$.fragment),om=p(),At=a("p"),nm=o(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),Os=a("a"),sm=o("DocVQA"),am=o(` (a linear layer on top of the text part of the hidden-states output to
compute `),Ti=a("code"),rm=o("span start logits"),im=o(" and "),xi=a("code"),lm=o("span end logits"),dm=o(")."),cm=p(),Ss=a("p"),pm=o("This model is a PyTorch "),Is=a("a"),um=o("torch.nn.Module"),hm=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mm=p(),kt=a("div"),L(Ds.$$.fragment),fm=p(),uo=a("p"),gm=o("The "),Ya=a("a"),_m=o("LayoutLMv3ForQuestionAnswering"),vm=o(" forward method, overrides the "),Mi=a("code"),ym=o("__call__"),bm=o(" special method."),Lm=p(),L(Vo.$$.fragment),km=p(),L(Ho.$$.fragment),jl=p(),ho=a("h2"),Ko=a("a"),$i=a("span"),L(Rs.$$.fragment),wm=p(),Fi=a("span"),Tm=o("TFLayoutLMv3Model"),Nl=p(),it=a("div"),L(Bs.$$.fragment),xm=p(),Ws=a("p"),Mm=o(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ja=a("a"),$m=o("TFPreTrainedModel"),Fm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qm=p(),Qs=a("p"),Em=o("This model is also a "),Us=a("a"),zm=o("tf.keras.Model"),Cm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Am=p(),L(Go.$$.fragment),Pm=p(),wt=a("div"),L(Vs.$$.fragment),jm=p(),mo=a("p"),Nm=o("The "),Za=a("a"),Om=o("TFLayoutLMv3Model"),Sm=o(" forward method, overrides the "),qi=a("code"),Im=o("__call__"),Dm=o(" special method."),Rm=p(),L(Xo.$$.fragment),Bm=p(),L(Yo.$$.fragment),Ol=p(),fo=a("h2"),Jo=a("a"),Ei=a("span"),L(Hs.$$.fragment),Wm=p(),zi=a("span"),Qm=o("TFLayoutLMv3ForSequenceClassification"),Sl=p(),Qe=a("div"),L(Ks.$$.fragment),Um=p(),Gs=a("p"),Vm=o(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Xs=a("a"),Hm=o("RVL-CDIP"),Km=o(" dataset."),Gm=p(),Ys=a("p"),Xm=o("This model inherits from "),er=a("a"),Ym=o("TFPreTrainedModel"),Jm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm=p(),Js=a("p"),ef=o("This model is also a "),Zs=a("a"),tf=o("tf.keras.Model"),of=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf=p(),L(Zo.$$.fragment),sf=p(),Tt=a("div"),L(ea.$$.fragment),af=p(),go=a("p"),rf=o("The "),tr=a("a"),lf=o("TFLayoutLMv3ForSequenceClassification"),df=o(" forward method, overrides the "),Ci=a("code"),cf=o("__call__"),pf=o(" special method."),uf=p(),L(en.$$.fragment),hf=p(),L(tn.$$.fragment),Il=p(),_o=a("h2"),on=a("a"),Ai=a("span"),L(ta.$$.fragment),mf=p(),Pi=a("span"),ff=o("TFLayoutLMv3ForTokenClassification"),Dl=p(),Ue=a("div"),L(oa.$$.fragment),gf=p(),gt=a("p"),_f=o(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),na=a("a"),vf=o("FUNSD"),yf=o(`,
`),sa=a("a"),bf=o("SROIE"),Lf=o(", "),aa=a("a"),kf=o("CORD"),wf=o(` and
`),ra=a("a"),Tf=o("Kleister-NDA"),xf=o("."),Mf=p(),ia=a("p"),$f=o("This model inherits from "),or=a("a"),Ff=o("TFPreTrainedModel"),qf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ef=p(),la=a("p"),zf=o("This model is also a "),da=a("a"),Cf=o("tf.keras.Model"),Af=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pf=p(),L(nn.$$.fragment),jf=p(),xt=a("div"),L(ca.$$.fragment),Nf=p(),vo=a("p"),Of=o("The "),nr=a("a"),Sf=o("TFLayoutLMv3ForTokenClassification"),If=o(" forward method, overrides the "),ji=a("code"),Df=o("__call__"),Rf=o(" special method."),Bf=p(),L(sn.$$.fragment),Wf=p(),L(an.$$.fragment),Rl=p(),yo=a("h2"),rn=a("a"),Ni=a("span"),L(pa.$$.fragment),Qf=p(),Oi=a("span"),Uf=o("TFLayoutLMv3ForQuestionAnswering"),Bl=p(),Ve=a("div"),L(ua.$$.fragment),Vf=p(),Pt=a("p"),Hf=o(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ha=a("a"),Kf=o("DocVQA"),Gf=o(` (a linear layer on top of the text part of the hidden-states output to
compute `),Si=a("code"),Xf=o("span start logits"),Yf=o(" and "),Ii=a("code"),Jf=o("span end logits"),Zf=o(")."),eg=p(),ma=a("p"),tg=o("This model inherits from "),sr=a("a"),og=o("TFPreTrainedModel"),ng=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sg=p(),fa=a("p"),ag=o("This model is also a "),ga=a("a"),rg=o("tf.keras.Model"),ig=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lg=p(),L(ln.$$.fragment),dg=p(),Mt=a("div"),L(_a.$$.fragment),cg=p(),bo=a("p"),pg=o("The "),ar=a("a"),ug=o("TFLayoutLMv3ForQuestionAnswering"),hg=o(" forward method, overrides the "),Di=a("code"),mg=o("__call__"),fg=o(" special method."),gg=p(),L(dn.$$.fragment),_g=p(),L(cn.$$.fragment),this.h()},l(s){const g=qy('[data-svelte="svelte-1phssyn"]',document.head);c=r(g,"META",{name:!0,content:!0}),g.forEach(t),b=u(s),_=r(s,"H1",{class:!0});var va=i(_);f=r(va,"A",{id:!0,class:!0,href:!0});var Ri=i(f);y=r(Ri,"SPAN",{});var Bi=i(y);k(l.$$.fragment,Bi),Bi.forEach(t),Ri.forEach(t),h=u(va),q=r(va,"SPAN",{});var Wi=i(q);we=n(Wi,"LayoutLMv3"),Wi.forEach(t),va.forEach(t),_e=u(s),R=r(s,"H2",{class:!0});var ya=i(R);ae=r(ya,"A",{id:!0,class:!0,href:!0});var Qi=i(ae);se=r(Qi,"SPAN",{});var Ui=i(se);k($.$$.fragment,Ui),Ui.forEach(t),Qi.forEach(t),Te=u(ya),V=r(ya,"SPAN",{});var Vi=i(V);xe=n(Vi,"Overview"),Vi.forEach(t),ya.forEach(t),ve=u(s),S=r(s,"P",{});var jt=i(S);Me=n(jt,"The LayoutLMv3 model was proposed in "),ie=r(jt,"A",{href:!0,rel:!0});var Hi=i(ie);K=n(Hi,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),Hi.forEach(t),$e=n(jt,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),pe=r(jt,"A",{href:!0});var Ki=i(pe);G=n(Ki,"LayoutLMv2"),Ki.forEach(t),Fe=n(jt," by using patch embeddings (as in "),ue=r(jt,"A",{href:!0});var Gi=i(ue);X=n(Gi,"ViT"),Gi.forEach(t),qe=n(jt,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),jt.forEach(t),ye=u(s),ee=r(s,"P",{});var Xi=i(ee);A=n(Xi,"The abstract from the paper is the following:"),Xi.forEach(t),P=u(s),he=r(s,"P",{});var Yi=i(he);H=r(Yi,"EM",{});var Ji=i(H);Ee=n(Ji,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),Ji.forEach(t),Yi.forEach(t),be=u(s),U=r(s,"P",{});var Zi=i(U);ze=n(Zi,"Tips:"),Zi.forEach(t),Le=u(s),C=r(s,"UL",{});var Nt=i(C);re=r(Nt,"LI",{});var pn=i(re);Y=n(pn,"In terms of data processing, LayoutLMv3 is identical to its predecessor "),me=r(pn,"A",{href:!0});var el=i(me);Ce=n(el,"LayoutLMv2"),el.forEach(t),J=n(pn,", except that:"),le=r(pn,"UL",{});var ba=i(le);fe=r(ba,"LI",{});var tl=i(fe);W=n(tl,"images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),tl.forEach(t),Ae=u(ba),O=r(ba,"LI",{});var _t=i(O);Pe=n(_t,`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),te=r(_t,"A",{href:!0});var ol=i(te);j=n(ol,"LayoutLMv3Processor"),ol.forEach(t),je=n(_t," which internally combines a "),N=r(_t,"A",{href:!0});var xg=i(N);Ne=n(xg,"LayoutLMv3FeatureExtractor"),xg.forEach(t),Oe=n(_t," (for the image modality) and a "),v=r(_t,"A",{href:!0});var Mg=i(v);F=n(Mg,"LayoutLMv3Tokenizer"),Mg.forEach(t),Xe=n(_t,"/"),oe=r(_t,"A",{href:!0});var $g=i(oe);Ye=n($g,"LayoutLMv3TokenizerFast"),$g.forEach(t),Je=n(_t," (for the text modality) to prepare all data for the model."),_t.forEach(t),ba.forEach(t),pn.forEach(t),E=u(Nt),ge=r(Nt,"LI",{});var rr=i(ge);Ze=n(rr,"Regarding usage of "),Be=r(rr,"A",{href:!0});var Fg=i(Be);et=n(Fg,"LayoutLMv3Processor"),Fg.forEach(t),tt=n(rr,", we refer to the "),D=r(rr,"A",{href:!0});var qg=i(D);Z=n(qg,"usage guide"),qg.forEach(t),ot=n(rr," of its predecessor."),rr.forEach(t),nt=u(Nt),Q=r(Nt,"LI",{});var Ql=i(Q);st=n(Ql,"Demo notebooks for LayoutLMv3 can be found "),Se=r(Ql,"A",{href:!0,rel:!0});var Eg=i(Se);Ie=n(Eg,"here"),Eg.forEach(t),at=n(Ql,"."),Ql.forEach(t),de=u(Nt),De=r(Nt,"LI",{});var Ul=i(De);$d=n(Ul,"Demo scripts can be found "),Fn=r(Ul,"A",{href:!0,rel:!0});var zg=i(Fn);Fd=n(zg,"here"),zg.forEach(t),qd=n(Ul,"."),Ul.forEach(t),Nt.forEach(t),al=u(s),Lo=r(s,"IMG",{src:!0,alt:!0,width:!0}),rl=u(s),ko=r(s,"SMALL",{});var Vl=i(ko);Ed=n(Vl,"LayoutLMv3 architecture. Taken from the "),ka=r(Vl,"A",{href:!0});var Cg=i(ka);zd=n(Cg,"original paper"),Cg.forEach(t),Cd=n(Vl,"."),Vl.forEach(t),il=u(s),He=r(s,"P",{});var $t=i(He);Ad=n($t,"This model was contributed by "),qn=r($t,"A",{href:!0,rel:!0});var Ag=i(qn);Pd=n(Ag,"nielsr"),Ag.forEach(t),jd=n($t,". The TensorFlow version of this model was added by "),En=r($t,"A",{href:!0,rel:!0});var Pg=i(En);Nd=n(Pg,"chriskoo"),Pg.forEach(t),Od=n($t,", "),zn=r($t,"A",{href:!0,rel:!0});var jg=i(zn);Sd=n(jg,"tokec"),jg.forEach(t),Id=n($t,", and "),Cn=r($t,"A",{href:!0,rel:!0});var Ng=i(Cn);Dd=n(Ng,"lre"),Ng.forEach(t),Rd=n($t,". The original code can be found "),An=r($t,"A",{href:!0,rel:!0});var Og=i(An);Bd=n(Og,"here"),Og.forEach(t),Wd=n($t,"."),$t.forEach(t),ll=u(s),Gt=r(s,"H2",{class:!0});var Hl=i(Gt);wo=r(Hl,"A",{id:!0,class:!0,href:!0});var Sg=i(wo);kr=r(Sg,"SPAN",{});var Ig=i(kr);k(Pn.$$.fragment,Ig),Ig.forEach(t),Sg.forEach(t),Qd=u(Hl),wr=r(Hl,"SPAN",{});var Dg=i(wr);Ud=n(Dg,"Resources"),Dg.forEach(t),Hl.forEach(t),dl=u(s),wa=r(s,"P",{});var Rg=i(wa);Vd=n(Rg,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with LayoutLMv3. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Rg.forEach(t),cl=u(s),k(To.$$.fragment,s),pl=u(s),k(jn.$$.fragment,s),ul=u(s),Ta=r(s,"UL",{});var Bg=i(Ta);xo=r(Bg,"LI",{});var nl=i(xo);xa=r(nl,"A",{href:!0});var Wg=i(xa);Hd=n(Wg,"LayoutLMv2ForSequenceClassification"),Wg.forEach(t),Kd=n(nl," is supported by this "),Nn=r(nl,"A",{href:!0,rel:!0});var Qg=i(Nn);Gd=n(Qg,"notebook"),Qg.forEach(t),Xd=n(nl,"."),nl.forEach(t),Bg.forEach(t),hl=u(s),k(On.$$.fragment,s),ml=u(s),Ot=r(s,"UL",{});var ir=i(Ot);St=r(ir,"LI",{});var La=i(St);Ma=r(La,"A",{href:!0});var Ug=i(Ma);Yd=n(Ug,"LayoutLMv3ForTokenClassification"),Ug.forEach(t),Jd=n(La," is supported by this "),Sn=r(La,"A",{href:!0,rel:!0});var Vg=i(Sn);Zd=n(Vg,"example script"),Vg.forEach(t),ec=n(La," and "),In=r(La,"A",{href:!0,rel:!0});var Hg=i(In);tc=n(Hg,"notebook"),Hg.forEach(t),oc=n(La,"."),La.forEach(t),nc=u(ir),lt=r(ir,"LI",{});var Rt=i(lt);sc=n(Rt,"A "),Dn=r(Rt,"A",{href:!0,rel:!0});var Kg=i(Dn);ac=n(Kg,"notebook"),Kg.forEach(t),rc=n(Rt," for how to perform inference with "),$a=r(Rt,"A",{href:!0});var Gg=i($a);ic=n(Gg,"LayoutLMv2ForTokenClassification"),Gg.forEach(t),lc=n(Rt," and a "),Rn=r(Rt,"A",{href:!0,rel:!0});var Xg=i(Rn);dc=n(Xg,"notebook"),Xg.forEach(t),cc=n(Rt," for how to perform inference when no labels are available with "),Fa=r(Rt,"A",{href:!0});var Yg=i(Fa);pc=n(Yg,"LayoutLMv2ForTokenClassification"),Yg.forEach(t),uc=n(Rt,"."),Rt.forEach(t),hc=u(ir),Xt=r(ir,"LI",{});var lr=i(Xt);mc=n(lr,"A "),Bn=r(lr,"A",{href:!0,rel:!0});var Jg=i(Bn);fc=n(Jg,"notebook"),Jg.forEach(t),gc=n(lr," for how to finetune "),qa=r(lr,"A",{href:!0});var Zg=i(qa);_c=n(Zg,"LayoutLMv2ForTokenClassification"),Zg.forEach(t),vc=n(lr," with the \u{1F917} Trainer."),lr.forEach(t),ir.forEach(t),fl=u(s),k(Wn.$$.fragment,s),gl=u(s),Ea=r(s,"UL",{});var e_=i(Ea);Mo=r(e_,"LI",{});var sl=i(Mo);za=r(sl,"A",{href:!0});var t_=i(za);yc=n(t_,"LayoutLMv2ForQuestionAnswering"),t_.forEach(t),bc=n(sl," is supported by this "),Qn=r(sl,"A",{href:!0,rel:!0});var o_=i(Qn);Lc=n(o_,"notebook"),o_.forEach(t),kc=n(sl,"."),sl.forEach(t),e_.forEach(t),_l=u(s),Yt=r(s,"H2",{class:!0});var Kl=i(Yt);$o=r(Kl,"A",{id:!0,class:!0,href:!0});var n_=i($o);Tr=r(n_,"SPAN",{});var s_=i(Tr);k(Un.$$.fragment,s_),s_.forEach(t),n_.forEach(t),wc=u(Kl),xr=r(Kl,"SPAN",{});var a_=i(xr);Tc=n(a_,"LayoutLMv3Config"),a_.forEach(t),Kl.forEach(t),vl=u(s),dt=r(s,"DIV",{class:!0});var un=i(dt);k(Vn.$$.fragment,un),xc=u(un),Jt=r(un,"P",{});var dr=i(Jt);Mc=n(dr,"This is the configuration class to store the configuration of a "),Ca=r(dr,"A",{href:!0});var r_=i(Ca);$c=n(r_,"LayoutLMv3Model"),r_.forEach(t),Fc=n(dr,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),Hn=r(dr,"A",{href:!0,rel:!0});var i_=i(Hn);qc=n(i_,"microsoft/layoutlmv3-base"),i_.forEach(t),Ec=n(dr," architecture."),dr.forEach(t),zc=u(un),Zt=r(un,"P",{});var cr=i(Zt);Cc=n(cr,"Configuration objects inherit from "),Aa=r(cr,"A",{href:!0});var l_=i(Aa);Ac=n(l_,"PretrainedConfig"),l_.forEach(t),Pc=n(cr,` and can be used to control the model outputs. Read the
documentation from `),Pa=r(cr,"A",{href:!0});var d_=i(Pa);jc=n(d_,"PretrainedConfig"),d_.forEach(t),Nc=n(cr," for more information."),cr.forEach(t),Oc=u(un),k(Fo.$$.fragment,un),un.forEach(t),yl=u(s),eo=r(s,"H2",{class:!0});var Gl=i(eo);qo=r(Gl,"A",{id:!0,class:!0,href:!0});var c_=i(qo);Mr=r(c_,"SPAN",{});var p_=i(Mr);k(Kn.$$.fragment,p_),p_.forEach(t),c_.forEach(t),Sc=u(Gl),$r=r(Gl,"SPAN",{});var u_=i($r);Ic=n(u_,"LayoutLMv3FeatureExtractor"),u_.forEach(t),Gl.forEach(t),bl=u(s),ct=r(s,"DIV",{class:!0});var hn=i(ct);k(Gn.$$.fragment,hn),Dc=u(hn),Fr=r(hn,"P",{});var h_=i(Fr);Rc=n(h_,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),h_.forEach(t),Bc=u(hn),Xn=r(hn,"P",{});var Xl=i(Xn);Wc=n(Xl,"This feature extractor inherits from "),qr=r(Xl,"CODE",{});var m_=i(qr);Qc=n(m_,"PreTrainedFeatureExtractor()"),m_.forEach(t),Uc=n(Xl,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Xl.forEach(t),Vc=u(hn),It=r(hn,"DIV",{class:!0});var pr=i(It);k(Yn.$$.fragment,pr),Hc=u(pr),Er=r(pr,"P",{});var f_=i(Er);Kc=n(f_,"Main method to prepare for the model one or several image(s)."),f_.forEach(t),Gc=u(pr),k(Eo.$$.fragment,pr),pr.forEach(t),hn.forEach(t),Ll=u(s),to=r(s,"H2",{class:!0});var Yl=i(to);zo=r(Yl,"A",{id:!0,class:!0,href:!0});var g_=i(zo);zr=r(g_,"SPAN",{});var __=i(zr);k(Jn.$$.fragment,__),__.forEach(t),g_.forEach(t),Xc=u(Yl),Cr=r(Yl,"SPAN",{});var v_=i(Cr);Yc=n(v_,"LayoutLMv3Tokenizer"),v_.forEach(t),Yl.forEach(t),kl=u(s),We=r(s,"DIV",{class:!0});var Ft=i(We);k(Zn.$$.fragment,Ft),Jc=u(Ft),Re=r(Ft,"P",{});var Ke=i(Re);Zc=n(Ke,"Construct a LayoutLMv3 tokenizer. Based on "),Ar=r(Ke,"CODE",{});var y_=i(Ar);ep=n(y_,"RoBERTatokenizer"),y_.forEach(t),tp=n(Ke,` (Byte Pair Encoding or BPE).
`),ja=r(Ke,"A",{href:!0});var b_=i(ja);op=n(b_,"LayoutLMv3Tokenizer"),b_.forEach(t),np=n(Ke,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),Pr=r(Ke,"CODE",{});var L_=i(Pr);sp=n(L_,"input_ids"),L_.forEach(t),ap=n(Ke,", "),jr=r(Ke,"CODE",{});var k_=i(jr);rp=n(k_,"attention_mask"),k_.forEach(t),ip=n(Ke,", "),Nr=r(Ke,"CODE",{});var w_=i(Nr);lp=n(w_,"token_type_ids"),w_.forEach(t),dp=n(Ke,", "),Or=r(Ke,"CODE",{});var T_=i(Or);cp=n(T_,"bbox"),T_.forEach(t),pp=n(Ke,", and optional "),Sr=r(Ke,"CODE",{});var x_=i(Sr);up=n(x_,"labels"),x_.forEach(t),hp=n(Ke,` (for token
classification).`),Ke.forEach(t),mp=u(Ft),es=r(Ft,"P",{});var Jl=i(es);fp=n(Jl,"This tokenizer inherits from "),Na=r(Jl,"A",{href:!0});var M_=i(Na);gp=n(M_,"PreTrainedTokenizer"),M_.forEach(t),_p=n(Jl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Jl.forEach(t),vp=u(Ft),Oa=r(Ft,"P",{});var vg=i(Oa);Sa=r(vg,"A",{href:!0});var $_=i(Sa);yp=n($_,"LayoutLMv3Tokenizer"),$_.forEach(t),bp=n(vg,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),vg.forEach(t),Lp=u(Ft),Co=r(Ft,"DIV",{class:!0});var Zl=i(Co);k(ts.$$.fragment,Zl),kp=u(Zl),Ir=r(Zl,"P",{});var F_=i(Ir);wp=n(F_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),F_.forEach(t),Zl.forEach(t),Tp=u(Ft),Ia=r(Ft,"DIV",{class:!0});var q_=i(Ia);k(os.$$.fragment,q_),q_.forEach(t),Ft.forEach(t),wl=u(s),oo=r(s,"H2",{class:!0});var ed=i(oo);Ao=r(ed,"A",{id:!0,class:!0,href:!0});var E_=i(Ao);Dr=r(E_,"SPAN",{});var z_=i(Dr);k(ns.$$.fragment,z_),z_.forEach(t),E_.forEach(t),xp=u(ed),Rr=r(ed,"SPAN",{});var C_=i(Rr);Mp=n(C_,"LayoutLMv3TokenizerFast"),C_.forEach(t),ed.forEach(t),Tl=u(s),pt=r(s,"DIV",{class:!0});var mn=i(pt);k(ss.$$.fragment,mn),$p=u(mn),as=r(mn,"P",{});var td=i(as);Fp=n(td,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),Br=r(td,"EM",{});var A_=i(Br);qp=n(A_,"tokenizers"),A_.forEach(t),Ep=n(td," library). Based on BPE."),td.forEach(t),zp=u(mn),rs=r(mn,"P",{});var od=i(rs);Cp=n(od,"This tokenizer inherits from "),Da=r(od,"A",{href:!0});var P_=i(Da);Ap=n(P_,"PreTrainedTokenizerFast"),P_.forEach(t),Pp=n(od,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),od.forEach(t),jp=u(mn),Po=r(mn,"DIV",{class:!0});var nd=i(Po);k(is.$$.fragment,nd),Np=u(nd),Wr=r(nd,"P",{});var j_=i(Wr);Op=n(j_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),j_.forEach(t),nd.forEach(t),mn.forEach(t),xl=u(s),no=r(s,"H2",{class:!0});var sd=i(no);jo=r(sd,"A",{id:!0,class:!0,href:!0});var N_=i(jo);Qr=r(N_,"SPAN",{});var O_=i(Qr);k(ls.$$.fragment,O_),O_.forEach(t),N_.forEach(t),Sp=u(sd),Ur=r(sd,"SPAN",{});var S_=i(Ur);Ip=n(S_,"LayoutLMv3Processor"),S_.forEach(t),sd.forEach(t),Ml=u(s),rt=r(s,"DIV",{class:!0});var Bt=i(rt);k(ds.$$.fragment,Bt),Dp=u(Bt),Vr=r(Bt,"P",{});var I_=i(Vr);Rp=n(I_,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),I_.forEach(t),Bp=u(Bt),Ra=r(Bt,"P",{});var yg=i(Ra);Ba=r(yg,"A",{href:!0});var D_=i(Ba);Wp=n(D_,"LayoutLMv3Processor"),D_.forEach(t),Qp=n(yg," offers all the functionalities you need to prepare data for the model."),yg.forEach(t),Up=u(Bt),ce=r(Bt,"P",{});var ke=i(ce);Vp=n(ke,"It first uses "),Wa=r(ke,"A",{href:!0});var R_=i(Wa);Hp=n(R_,"LayoutLMv3FeatureExtractor"),R_.forEach(t),Kp=n(ke,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),Qa=r(ke,"A",{href:!0});var B_=i(Qa);Gp=n(B_,"LayoutLMv3Tokenizer"),B_.forEach(t),Xp=n(ke,` or
`),Ua=r(ke,"A",{href:!0});var W_=i(Ua);Yp=n(W_,"LayoutLMv3TokenizerFast"),W_.forEach(t),Jp=n(ke,", which turns the words and bounding boxes into token-level "),Hr=r(ke,"CODE",{});var Q_=i(Hr);Zp=n(Q_,"input_ids"),Q_.forEach(t),eu=n(ke,`,
`),Kr=r(ke,"CODE",{});var U_=i(Kr);tu=n(U_,"attention_mask"),U_.forEach(t),ou=n(ke,", "),Gr=r(ke,"CODE",{});var V_=i(Gr);nu=n(V_,"token_type_ids"),V_.forEach(t),su=n(ke,", "),Xr=r(ke,"CODE",{});var H_=i(Xr);au=n(H_,"bbox"),H_.forEach(t),ru=n(ke,". Optionally, one can provide integer "),Yr=r(ke,"CODE",{});var K_=i(Yr);iu=n(K_,"word_labels"),K_.forEach(t),lu=n(ke,`, which are turned
into token-level `),Jr=r(ke,"CODE",{});var G_=i(Jr);du=n(G_,"labels"),G_.forEach(t),cu=n(ke," for token classification tasks (such as FUNSD, CORD)."),ke.forEach(t),pu=u(Bt),Dt=r(Bt,"DIV",{class:!0});var ur=i(Dt);k(cs.$$.fragment,ur),uu=u(ur),I=r(ur,"P",{});var B=i(I);hu=n(B,"This method first forwards the "),Zr=r(B,"CODE",{});var X_=i(Zr);mu=n(X_,"images"),X_.forEach(t),fu=n(B," argument to "),ps=r(B,"A",{href:!0});var bg=i(ps);ei=r(bg,"STRONG",{});var Y_=i(ei);gu=n(Y_,"call"),Y_.forEach(t),_u=n(bg,"()"),bg.forEach(t),vu=n(B,`. In case
`),Va=r(B,"A",{href:!0});var J_=i(Va);yu=n(J_,"LayoutLMv3FeatureExtractor"),J_.forEach(t),bu=n(B," was initialized with "),ti=r(B,"CODE",{});var Z_=i(ti);Lu=n(Z_,"apply_ocr"),Z_.forEach(t),ku=n(B," set to "),oi=r(B,"CODE",{});var ev=i(oi);wu=n(ev,"True"),ev.forEach(t),Tu=n(B,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),us=r(B,"A",{href:!0});var Lg=i(us);ni=r(Lg,"STRONG",{});var tv=i(ni);xu=n(tv,"call"),tv.forEach(t),Mu=n(Lg,"()"),Lg.forEach(t),$u=n(B,` and returns the output,
together with resized and normalized `),si=r(B,"CODE",{});var ov=i(si);Fu=n(ov,"pixel_values"),ov.forEach(t),qu=n(B,". In case "),Ha=r(B,"A",{href:!0});var nv=i(Ha);Eu=n(nv,"LayoutLMv3FeatureExtractor"),nv.forEach(t),zu=n(B,` was initialized
with `),ai=r(B,"CODE",{});var sv=i(ai);Cu=n(sv,"apply_ocr"),sv.forEach(t),Au=n(B," set to "),ri=r(B,"CODE",{});var av=i(ri);Pu=n(av,"False"),av.forEach(t),ju=n(B,", it passes the words ("),ii=r(B,"CODE",{});var rv=i(ii);Nu=n(rv,"text"),rv.forEach(t),Ou=n(B,"/`"),li=r(B,"CODE",{});var iv=i(li);Su=n(iv,"text_pair"),iv.forEach(t),Iu=n(B,") and "),di=r(B,"CODE",{});var lv=i(di);Du=n(lv,"boxes"),lv.forEach(t),Ru=n(B,` specified by the user
along with the additional arguments to `),hs=r(B,"A",{href:!0});var kg=i(hs);ci=r(kg,"STRONG",{});var dv=i(ci);Bu=n(dv,"call"),dv.forEach(t),Wu=n(kg,"()"),kg.forEach(t),Qu=n(B,` and returns the output, together with
resized and normalized `),pi=r(B,"CODE",{});var cv=i(pi);Uu=n(cv,"pixel_values"),cv.forEach(t),Vu=n(B,"."),B.forEach(t),Hu=u(ur),ui=r(ur,"P",{});var pv=i(ui);Ku=n(pv,"Please refer to the docstring of the above two methods for more information."),pv.forEach(t),ur.forEach(t),Bt.forEach(t),$l=u(s),so=r(s,"H2",{class:!0});var ad=i(so);No=r(ad,"A",{id:!0,class:!0,href:!0});var uv=i(No);hi=r(uv,"SPAN",{});var hv=i(hi);k(ms.$$.fragment,hv),hv.forEach(t),uv.forEach(t),Gu=u(ad),mi=r(ad,"SPAN",{});var mv=i(mi);Xu=n(mv,"LayoutLMv3Model"),mv.forEach(t),ad.forEach(t),Fl=u(s),Ct=r(s,"DIV",{class:!0});var hr=i(Ct);k(fs.$$.fragment,hr),Yu=u(hr),gs=r(hr,"P",{});var rd=i(gs);Ju=n(rd,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),_s=r(rd,"A",{href:!0,rel:!0});var fv=i(_s);Zu=n(fv,"torch.nn.Module"),fv.forEach(t),eh=n(rd,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rd.forEach(t),th=u(hr),yt=r(hr,"DIV",{class:!0});var fn=i(yt);k(vs.$$.fragment,fn),oh=u(fn),ao=r(fn,"P",{});var mr=i(ao);nh=n(mr,"The "),Ka=r(mr,"A",{href:!0});var gv=i(Ka);sh=n(gv,"LayoutLMv3Model"),gv.forEach(t),ah=n(mr," forward method, overrides the "),fi=r(mr,"CODE",{});var _v=i(fi);rh=n(_v,"__call__"),_v.forEach(t),ih=n(mr," special method."),mr.forEach(t),lh=u(fn),k(Oo.$$.fragment,fn),dh=u(fn),k(So.$$.fragment,fn),fn.forEach(t),hr.forEach(t),ql=u(s),ro=r(s,"H2",{class:!0});var id=i(ro);Io=r(id,"A",{id:!0,class:!0,href:!0});var vv=i(Io);gi=r(vv,"SPAN",{});var yv=i(gi);k(ys.$$.fragment,yv),yv.forEach(t),vv.forEach(t),ch=u(id),_i=r(id,"SPAN",{});var bv=i(_i);ph=n(bv,"LayoutLMv3ForSequenceClassification"),bv.forEach(t),id.forEach(t),El=u(s),ut=r(s,"DIV",{class:!0});var gn=i(ut);k(bs.$$.fragment,gn),uh=u(gn),Ls=r(gn,"P",{});var ld=i(Ls);hh=n(ld,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),ks=r(ld,"A",{href:!0,rel:!0});var Lv=i(ks);mh=n(Lv,"RVL-CDIP"),Lv.forEach(t),fh=n(ld," dataset."),ld.forEach(t),gh=u(gn),ws=r(gn,"P",{});var dd=i(ws);_h=n(dd,"This model is a PyTorch "),Ts=r(dd,"A",{href:!0,rel:!0});var kv=i(Ts);vh=n(kv,"torch.nn.Module"),kv.forEach(t),yh=n(dd,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dd.forEach(t),bh=u(gn),bt=r(gn,"DIV",{class:!0});var _n=i(bt);k(xs.$$.fragment,_n),Lh=u(_n),io=r(_n,"P",{});var fr=i(io);kh=n(fr,"The "),Ga=r(fr,"A",{href:!0});var wv=i(Ga);wh=n(wv,"LayoutLMv3ForSequenceClassification"),wv.forEach(t),Th=n(fr," forward method, overrides the "),vi=r(fr,"CODE",{});var Tv=i(vi);xh=n(Tv,"__call__"),Tv.forEach(t),Mh=n(fr," special method."),fr.forEach(t),$h=u(_n),k(Do.$$.fragment,_n),Fh=u(_n),k(Ro.$$.fragment,_n),_n.forEach(t),gn.forEach(t),zl=u(s),lo=r(s,"H2",{class:!0});var cd=i(lo);Bo=r(cd,"A",{id:!0,class:!0,href:!0});var xv=i(Bo);yi=r(xv,"SPAN",{});var Mv=i(yi);k(Ms.$$.fragment,Mv),Mv.forEach(t),xv.forEach(t),qh=u(cd),bi=r(cd,"SPAN",{});var $v=i(bi);Eh=n($v,"LayoutLMv3ForTokenClassification"),$v.forEach(t),cd.forEach(t),Cl=u(s),ht=r(s,"DIV",{class:!0});var vn=i(ht);k($s.$$.fragment,vn),zh=u(vn),mt=r(vn,"P",{});var Wt=i(mt);Ch=n(Wt,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Fs=r(Wt,"A",{href:!0,rel:!0});var Fv=i(Fs);Ah=n(Fv,"FUNSD"),Fv.forEach(t),Ph=n(Wt,`,
`),qs=r(Wt,"A",{href:!0,rel:!0});var qv=i(qs);jh=n(qv,"SROIE"),qv.forEach(t),Nh=n(Wt,", "),Es=r(Wt,"A",{href:!0,rel:!0});var Ev=i(Es);Oh=n(Ev,"CORD"),Ev.forEach(t),Sh=n(Wt,` and
`),zs=r(Wt,"A",{href:!0,rel:!0});var zv=i(zs);Ih=n(zv,"Kleister-NDA"),zv.forEach(t),Dh=n(Wt,"."),Wt.forEach(t),Rh=u(vn),Cs=r(vn,"P",{});var pd=i(Cs);Bh=n(pd,"This model is a PyTorch "),As=r(pd,"A",{href:!0,rel:!0});var Cv=i(As);Wh=n(Cv,"torch.nn.Module"),Cv.forEach(t),Qh=n(pd,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pd.forEach(t),Uh=u(vn),Lt=r(vn,"DIV",{class:!0});var yn=i(Lt);k(Ps.$$.fragment,yn),Vh=u(yn),co=r(yn,"P",{});var gr=i(co);Hh=n(gr,"The "),Xa=r(gr,"A",{href:!0});var Av=i(Xa);Kh=n(Av,"LayoutLMv3ForTokenClassification"),Av.forEach(t),Gh=n(gr," forward method, overrides the "),Li=r(gr,"CODE",{});var Pv=i(Li);Xh=n(Pv,"__call__"),Pv.forEach(t),Yh=n(gr," special method."),gr.forEach(t),Jh=u(yn),k(Wo.$$.fragment,yn),Zh=u(yn),k(Qo.$$.fragment,yn),yn.forEach(t),vn.forEach(t),Al=u(s),po=r(s,"H2",{class:!0});var ud=i(po);Uo=r(ud,"A",{id:!0,class:!0,href:!0});var jv=i(Uo);ki=r(jv,"SPAN",{});var Nv=i(ki);k(js.$$.fragment,Nv),Nv.forEach(t),jv.forEach(t),em=u(ud),wi=r(ud,"SPAN",{});var Ov=i(wi);tm=n(Ov,"LayoutLMv3ForQuestionAnswering"),Ov.forEach(t),ud.forEach(t),Pl=u(s),ft=r(s,"DIV",{class:!0});var bn=i(ft);k(Ns.$$.fragment,bn),om=u(bn),At=r(bn,"P",{});var Ln=i(At);nm=n(Ln,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),Os=r(Ln,"A",{href:!0,rel:!0});var Sv=i(Os);sm=n(Sv,"DocVQA"),Sv.forEach(t),am=n(Ln,` (a linear layer on top of the text part of the hidden-states output to
compute `),Ti=r(Ln,"CODE",{});var Iv=i(Ti);rm=n(Iv,"span start logits"),Iv.forEach(t),im=n(Ln," and "),xi=r(Ln,"CODE",{});var Dv=i(xi);lm=n(Dv,"span end logits"),Dv.forEach(t),dm=n(Ln,")."),Ln.forEach(t),cm=u(bn),Ss=r(bn,"P",{});var hd=i(Ss);pm=n(hd,"This model is a PyTorch "),Is=r(hd,"A",{href:!0,rel:!0});var Rv=i(Is);um=n(Rv,"torch.nn.Module"),Rv.forEach(t),hm=n(hd,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hd.forEach(t),mm=u(bn),kt=r(bn,"DIV",{class:!0});var kn=i(kt);k(Ds.$$.fragment,kn),fm=u(kn),uo=r(kn,"P",{});var _r=i(uo);gm=n(_r,"The "),Ya=r(_r,"A",{href:!0});var Bv=i(Ya);_m=n(Bv,"LayoutLMv3ForQuestionAnswering"),Bv.forEach(t),vm=n(_r," forward method, overrides the "),Mi=r(_r,"CODE",{});var Wv=i(Mi);ym=n(Wv,"__call__"),Wv.forEach(t),bm=n(_r," special method."),_r.forEach(t),Lm=u(kn),k(Vo.$$.fragment,kn),km=u(kn),k(Ho.$$.fragment,kn),kn.forEach(t),bn.forEach(t),jl=u(s),ho=r(s,"H2",{class:!0});var md=i(ho);Ko=r(md,"A",{id:!0,class:!0,href:!0});var Qv=i(Ko);$i=r(Qv,"SPAN",{});var Uv=i($i);k(Rs.$$.fragment,Uv),Uv.forEach(t),Qv.forEach(t),wm=u(md),Fi=r(md,"SPAN",{});var Vv=i(Fi);Tm=n(Vv,"TFLayoutLMv3Model"),Vv.forEach(t),md.forEach(t),Nl=u(s),it=r(s,"DIV",{class:!0});var Qt=i(it);k(Bs.$$.fragment,Qt),xm=u(Qt),Ws=r(Qt,"P",{});var fd=i(Ws);Mm=n(fd,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ja=r(fd,"A",{href:!0});var Hv=i(Ja);$m=n(Hv,"TFPreTrainedModel"),Hv.forEach(t),Fm=n(fd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd.forEach(t),qm=u(Qt),Qs=r(Qt,"P",{});var gd=i(Qs);Em=n(gd,"This model is also a "),Us=r(gd,"A",{href:!0,rel:!0});var Kv=i(Us);zm=n(Kv,"tf.keras.Model"),Kv.forEach(t),Cm=n(gd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gd.forEach(t),Am=u(Qt),k(Go.$$.fragment,Qt),Pm=u(Qt),wt=r(Qt,"DIV",{class:!0});var wn=i(wt);k(Vs.$$.fragment,wn),jm=u(wn),mo=r(wn,"P",{});var vr=i(mo);Nm=n(vr,"The "),Za=r(vr,"A",{href:!0});var Gv=i(Za);Om=n(Gv,"TFLayoutLMv3Model"),Gv.forEach(t),Sm=n(vr," forward method, overrides the "),qi=r(vr,"CODE",{});var Xv=i(qi);Im=n(Xv,"__call__"),Xv.forEach(t),Dm=n(vr," special method."),vr.forEach(t),Rm=u(wn),k(Xo.$$.fragment,wn),Bm=u(wn),k(Yo.$$.fragment,wn),wn.forEach(t),Qt.forEach(t),Ol=u(s),fo=r(s,"H2",{class:!0});var _d=i(fo);Jo=r(_d,"A",{id:!0,class:!0,href:!0});var Yv=i(Jo);Ei=r(Yv,"SPAN",{});var Jv=i(Ei);k(Hs.$$.fragment,Jv),Jv.forEach(t),Yv.forEach(t),Wm=u(_d),zi=r(_d,"SPAN",{});var Zv=i(zi);Qm=n(Zv,"TFLayoutLMv3ForSequenceClassification"),Zv.forEach(t),_d.forEach(t),Sl=u(s),Qe=r(s,"DIV",{class:!0});var qt=i(Qe);k(Ks.$$.fragment,qt),Um=u(qt),Gs=r(qt,"P",{});var vd=i(Gs);Vm=n(vd,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Xs=r(vd,"A",{href:!0,rel:!0});var ey=i(Xs);Hm=n(ey,"RVL-CDIP"),ey.forEach(t),Km=n(vd," dataset."),vd.forEach(t),Gm=u(qt),Ys=r(qt,"P",{});var yd=i(Ys);Xm=n(yd,"This model inherits from "),er=r(yd,"A",{href:!0});var ty=i(er);Ym=n(ty,"TFPreTrainedModel"),ty.forEach(t),Jm=n(yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd.forEach(t),Zm=u(qt),Js=r(qt,"P",{});var bd=i(Js);ef=n(bd,"This model is also a "),Zs=r(bd,"A",{href:!0,rel:!0});var oy=i(Zs);tf=n(oy,"tf.keras.Model"),oy.forEach(t),of=n(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),nf=u(qt),k(Zo.$$.fragment,qt),sf=u(qt),Tt=r(qt,"DIV",{class:!0});var Tn=i(Tt);k(ea.$$.fragment,Tn),af=u(Tn),go=r(Tn,"P",{});var yr=i(go);rf=n(yr,"The "),tr=r(yr,"A",{href:!0});var ny=i(tr);lf=n(ny,"TFLayoutLMv3ForSequenceClassification"),ny.forEach(t),df=n(yr," forward method, overrides the "),Ci=r(yr,"CODE",{});var sy=i(Ci);cf=n(sy,"__call__"),sy.forEach(t),pf=n(yr," special method."),yr.forEach(t),uf=u(Tn),k(en.$$.fragment,Tn),hf=u(Tn),k(tn.$$.fragment,Tn),Tn.forEach(t),qt.forEach(t),Il=u(s),_o=r(s,"H2",{class:!0});var Ld=i(_o);on=r(Ld,"A",{id:!0,class:!0,href:!0});var ay=i(on);Ai=r(ay,"SPAN",{});var ry=i(Ai);k(ta.$$.fragment,ry),ry.forEach(t),ay.forEach(t),mf=u(Ld),Pi=r(Ld,"SPAN",{});var iy=i(Pi);ff=n(iy,"TFLayoutLMv3ForTokenClassification"),iy.forEach(t),Ld.forEach(t),Dl=u(s),Ue=r(s,"DIV",{class:!0});var Et=i(Ue);k(oa.$$.fragment,Et),gf=u(Et),gt=r(Et,"P",{});var Ut=i(gt);_f=n(Ut,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),na=r(Ut,"A",{href:!0,rel:!0});var ly=i(na);vf=n(ly,"FUNSD"),ly.forEach(t),yf=n(Ut,`,
`),sa=r(Ut,"A",{href:!0,rel:!0});var dy=i(sa);bf=n(dy,"SROIE"),dy.forEach(t),Lf=n(Ut,", "),aa=r(Ut,"A",{href:!0,rel:!0});var cy=i(aa);kf=n(cy,"CORD"),cy.forEach(t),wf=n(Ut,` and
`),ra=r(Ut,"A",{href:!0,rel:!0});var py=i(ra);Tf=n(py,"Kleister-NDA"),py.forEach(t),xf=n(Ut,"."),Ut.forEach(t),Mf=u(Et),ia=r(Et,"P",{});var kd=i(ia);$f=n(kd,"This model inherits from "),or=r(kd,"A",{href:!0});var uy=i(or);Ff=n(uy,"TFPreTrainedModel"),uy.forEach(t),qf=n(kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kd.forEach(t),Ef=u(Et),la=r(Et,"P",{});var wd=i(la);zf=n(wd,"This model is also a "),da=r(wd,"A",{href:!0,rel:!0});var hy=i(da);Cf=n(hy,"tf.keras.Model"),hy.forEach(t),Af=n(wd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wd.forEach(t),Pf=u(Et),k(nn.$$.fragment,Et),jf=u(Et),xt=r(Et,"DIV",{class:!0});var xn=i(xt);k(ca.$$.fragment,xn),Nf=u(xn),vo=r(xn,"P",{});var br=i(vo);Of=n(br,"The "),nr=r(br,"A",{href:!0});var my=i(nr);Sf=n(my,"TFLayoutLMv3ForTokenClassification"),my.forEach(t),If=n(br," forward method, overrides the "),ji=r(br,"CODE",{});var fy=i(ji);Df=n(fy,"__call__"),fy.forEach(t),Rf=n(br," special method."),br.forEach(t),Bf=u(xn),k(sn.$$.fragment,xn),Wf=u(xn),k(an.$$.fragment,xn),xn.forEach(t),Et.forEach(t),Rl=u(s),yo=r(s,"H2",{class:!0});var Td=i(yo);rn=r(Td,"A",{id:!0,class:!0,href:!0});var gy=i(rn);Ni=r(gy,"SPAN",{});var _y=i(Ni);k(pa.$$.fragment,_y),_y.forEach(t),gy.forEach(t),Qf=u(Td),Oi=r(Td,"SPAN",{});var vy=i(Oi);Uf=n(vy,"TFLayoutLMv3ForQuestionAnswering"),vy.forEach(t),Td.forEach(t),Bl=u(s),Ve=r(s,"DIV",{class:!0});var zt=i(Ve);k(ua.$$.fragment,zt),Vf=u(zt),Pt=r(zt,"P",{});var Mn=i(Pt);Hf=n(Mn,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),ha=r(Mn,"A",{href:!0,rel:!0});var yy=i(ha);Kf=n(yy,"DocVQA"),yy.forEach(t),Gf=n(Mn,` (a linear layer on top of the text part of the hidden-states output to
compute `),Si=r(Mn,"CODE",{});var by=i(Si);Xf=n(by,"span start logits"),by.forEach(t),Yf=n(Mn," and "),Ii=r(Mn,"CODE",{});var Ly=i(Ii);Jf=n(Ly,"span end logits"),Ly.forEach(t),Zf=n(Mn,")."),Mn.forEach(t),eg=u(zt),ma=r(zt,"P",{});var xd=i(ma);tg=n(xd,"This model inherits from "),sr=r(xd,"A",{href:!0});var ky=i(sr);og=n(ky,"TFPreTrainedModel"),ky.forEach(t),ng=n(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),sg=u(zt),fa=r(zt,"P",{});var Md=i(fa);ag=n(Md,"This model is also a "),ga=r(Md,"A",{href:!0,rel:!0});var wy=i(ga);rg=n(wy,"tf.keras.Model"),wy.forEach(t),ig=n(Md,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Md.forEach(t),lg=u(zt),k(ln.$$.fragment,zt),dg=u(zt),Mt=r(zt,"DIV",{class:!0});var $n=i(Mt);k(_a.$$.fragment,$n),cg=u($n),bo=r($n,"P",{});var Lr=i(bo);pg=n(Lr,"The "),ar=r(Lr,"A",{href:!0});var Ty=i(ar);ug=n(Ty,"TFLayoutLMv3ForQuestionAnswering"),Ty.forEach(t),hg=n(Lr," forward method, overrides the "),Di=r(Lr,"CODE",{});var xy=i(Di);mg=n(xy,"__call__"),xy.forEach(t),fg=n(Lr," special method."),Lr.forEach(t),gg=u($n),k(dn.$$.fragment,$n),_g=u($n),k(cn.$$.fragment,$n),$n.forEach(t),zt.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(ob)),d(f,"id","layoutlmv3"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#layoutlmv3"),d(_,"class","relative group"),d(ae,"id","overview"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#overview"),d(R,"class","relative group"),d(ie,"href","https://arxiv.org/abs/2204.08387"),d(ie,"rel","nofollow"),d(pe,"href","layoutlmv2"),d(ue,"href","vit"),d(me,"href","layoutlmv2"),d(te,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(N,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(v,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(oe,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(Be,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(D,"href","layoutlmv2#usage-layoutlmv2processor"),d(Se,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3"),d(Se,"rel","nofollow"),d(Fn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/layoutlmv3"),d(Fn,"rel","nofollow"),Ey(Lo.src,Tg="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||d(Lo,"src",Tg),d(Lo,"alt","drawing"),d(Lo,"width","600"),d(ka,"href","https://arxiv.org/abs/2204.08387"),d(qn,"href","https://huggingface.co/nielsr"),d(qn,"rel","nofollow"),d(En,"href","https://huggingface.co/chriskoo"),d(En,"rel","nofollow"),d(zn,"href","https://huggingface.co/tokec"),d(zn,"rel","nofollow"),d(Cn,"href","https://huggingface.co/lre"),d(Cn,"rel","nofollow"),d(An,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),d(An,"rel","nofollow"),d(wo,"id","resources"),d(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(wo,"href","#resources"),d(Gt,"class","relative group"),d(xa,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),d(Nn,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/RVL-CDIP/Fine_tuning_LayoutLMv2ForSequenceClassification_on_RVL_CDIP.ipynb"),d(Nn,"rel","nofollow"),d(Ma,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(Sn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/layoutlmv3"),d(Sn,"rel","nofollow"),d(In,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv3/Fine_tune_LayoutLMv3_on_FUNSD_(HuggingFace_Trainer).ipynb"),d(In,"rel","nofollow"),d(Dn,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/Inference_with_LayoutLMv2ForTokenClassification.ipynb"),d(Dn,"rel","nofollow"),d($a,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),d(Rn,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/True_inference_with_LayoutLMv2ForTokenClassification_%2B_Gradio_demo.ipynb"),d(Rn,"rel","nofollow"),d(Fa,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),d(Bn,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/Fine_tuning_LayoutLMv2ForTokenClassification_on_FUNSD_using_HuggingFace_Trainer.ipynb"),d(Bn,"rel","nofollow"),d(qa,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),d(za,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),d(Qn,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/DocVQA/Fine_tuning_LayoutLMv2ForQuestionAnswering_on_DocVQA.ipynb"),d(Qn,"rel","nofollow"),d($o,"id","transformers.LayoutLMv3Config"),d($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($o,"href","#transformers.LayoutLMv3Config"),d(Yt,"class","relative group"),d(Ca,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(Hn,"href","https://huggingface.co/microsoft/layoutlmv3-base"),d(Hn,"rel","nofollow"),d(Aa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(Pa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(qo,"id","transformers.LayoutLMv3FeatureExtractor"),d(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(qo,"href","#transformers.LayoutLMv3FeatureExtractor"),d(eo,"class","relative group"),d(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(zo,"id","transformers.LayoutLMv3Tokenizer"),d(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(zo,"href","#transformers.LayoutLMv3Tokenizer"),d(to,"class","relative group"),d(ja,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Na,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(Sa,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ia,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ao,"id","transformers.LayoutLMv3TokenizerFast"),d(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ao,"href","#transformers.LayoutLMv3TokenizerFast"),d(oo,"class","relative group"),d(Da,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(jo,"id","transformers.LayoutLMv3Processor"),d(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(jo,"href","#transformers.LayoutLMv3Processor"),d(no,"class","relative group"),d(Ba,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(Wa,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Qa,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(Ua,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(ps,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),d(Va,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(us,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(Ha,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(hs,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(No,"id","transformers.LayoutLMv3Model"),d(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(No,"href","#transformers.LayoutLMv3Model"),d(so,"class","relative group"),d(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(_s,"rel","nofollow"),d(Ka,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Io,"id","transformers.LayoutLMv3ForSequenceClassification"),d(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Io,"href","#transformers.LayoutLMv3ForSequenceClassification"),d(ro,"class","relative group"),d(ks,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(ks,"rel","nofollow"),d(Ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ts,"rel","nofollow"),d(Ga,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),d(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Bo,"id","transformers.LayoutLMv3ForTokenClassification"),d(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Bo,"href","#transformers.LayoutLMv3ForTokenClassification"),d(lo,"class","relative group"),d(Fs,"href","https://guillaumejaume.github.io/FUNSD/"),d(Fs,"rel","nofollow"),d(qs,"href","https://rrc.cvc.uab.es/?ch=13"),d(qs,"rel","nofollow"),d(Es,"href","https://github.com/clovaai/cord"),d(Es,"rel","nofollow"),d(zs,"href","https://github.com/applicaai/kleister-nda"),d(zs,"rel","nofollow"),d(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(As,"rel","nofollow"),d(Xa,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Uo,"id","transformers.LayoutLMv3ForQuestionAnswering"),d(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Uo,"href","#transformers.LayoutLMv3ForQuestionAnswering"),d(po,"class","relative group"),d(Os,"href","https://rrc.cvc.uab.es/?ch=17"),d(Os,"rel","nofollow"),d(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Is,"rel","nofollow"),d(Ya,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),d(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ko,"id","transformers.TFLayoutLMv3Model"),d(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ko,"href","#transformers.TFLayoutLMv3Model"),d(ho,"class","relative group"),d(Ja,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Us,"rel","nofollow"),d(Za,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3Model"),d(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Jo,"id","transformers.TFLayoutLMv3ForSequenceClassification"),d(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Jo,"href","#transformers.TFLayoutLMv3ForSequenceClassification"),d(fo,"class","relative group"),d(Xs,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(Xs,"rel","nofollow"),d(er,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Zs,"rel","nofollow"),d(tr,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForSequenceClassification"),d(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(on,"id","transformers.TFLayoutLMv3ForTokenClassification"),d(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(on,"href","#transformers.TFLayoutLMv3ForTokenClassification"),d(_o,"class","relative group"),d(na,"href","https://guillaumejaume.github.io/FUNSD/"),d(na,"rel","nofollow"),d(sa,"href","https://rrc.cvc.uab.es/?ch=13"),d(sa,"rel","nofollow"),d(aa,"href","https://github.com/clovaai/cord"),d(aa,"rel","nofollow"),d(ra,"href","https://github.com/applicaai/kleister-nda"),d(ra,"rel","nofollow"),d(or,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(da,"rel","nofollow"),d(nr,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForTokenClassification"),d(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(rn,"id","transformers.TFLayoutLMv3ForQuestionAnswering"),d(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(rn,"href","#transformers.TFLayoutLMv3ForQuestionAnswering"),d(yo,"class","relative group"),d(ha,"href","https://rrc.cvc.uab.es/?ch=17"),d(ha,"rel","nofollow"),d(sr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),d(ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(ga,"rel","nofollow"),d(ar,"href","/docs/transformers/main/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForQuestionAnswering"),d(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,g){e(document.head,c),m(s,b,g),m(s,_,g),e(_,f),e(f,y),w(l,y,null),e(_,h),e(_,q),e(q,we),m(s,_e,g),m(s,R,g),e(R,ae),e(ae,se),w($,se,null),e(R,Te),e(R,V),e(V,xe),m(s,ve,g),m(s,S,g),e(S,Me),e(S,ie),e(ie,K),e(S,$e),e(S,pe),e(pe,G),e(S,Fe),e(S,ue),e(ue,X),e(S,qe),m(s,ye,g),m(s,ee,g),e(ee,A),m(s,P,g),m(s,he,g),e(he,H),e(H,Ee),m(s,be,g),m(s,U,g),e(U,ze),m(s,Le,g),m(s,C,g),e(C,re),e(re,Y),e(re,me),e(me,Ce),e(re,J),e(re,le),e(le,fe),e(fe,W),e(le,Ae),e(le,O),e(O,Pe),e(O,te),e(te,j),e(O,je),e(O,N),e(N,Ne),e(O,Oe),e(O,v),e(v,F),e(O,Xe),e(O,oe),e(oe,Ye),e(O,Je),e(C,E),e(C,ge),e(ge,Ze),e(ge,Be),e(Be,et),e(ge,tt),e(ge,D),e(D,Z),e(ge,ot),e(C,nt),e(C,Q),e(Q,st),e(Q,Se),e(Se,Ie),e(Q,at),e(C,de),e(C,De),e(De,$d),e(De,Fn),e(Fn,Fd),e(De,qd),m(s,al,g),m(s,Lo,g),m(s,rl,g),m(s,ko,g),e(ko,Ed),e(ko,ka),e(ka,zd),e(ko,Cd),m(s,il,g),m(s,He,g),e(He,Ad),e(He,qn),e(qn,Pd),e(He,jd),e(He,En),e(En,Nd),e(He,Od),e(He,zn),e(zn,Sd),e(He,Id),e(He,Cn),e(Cn,Dd),e(He,Rd),e(He,An),e(An,Bd),e(He,Wd),m(s,ll,g),m(s,Gt,g),e(Gt,wo),e(wo,kr),w(Pn,kr,null),e(Gt,Qd),e(Gt,wr),e(wr,Ud),m(s,dl,g),m(s,wa,g),e(wa,Vd),m(s,cl,g),w(To,s,g),m(s,pl,g),w(jn,s,g),m(s,ul,g),m(s,Ta,g),e(Ta,xo),e(xo,xa),e(xa,Hd),e(xo,Kd),e(xo,Nn),e(Nn,Gd),e(xo,Xd),m(s,hl,g),w(On,s,g),m(s,ml,g),m(s,Ot,g),e(Ot,St),e(St,Ma),e(Ma,Yd),e(St,Jd),e(St,Sn),e(Sn,Zd),e(St,ec),e(St,In),e(In,tc),e(St,oc),e(Ot,nc),e(Ot,lt),e(lt,sc),e(lt,Dn),e(Dn,ac),e(lt,rc),e(lt,$a),e($a,ic),e(lt,lc),e(lt,Rn),e(Rn,dc),e(lt,cc),e(lt,Fa),e(Fa,pc),e(lt,uc),e(Ot,hc),e(Ot,Xt),e(Xt,mc),e(Xt,Bn),e(Bn,fc),e(Xt,gc),e(Xt,qa),e(qa,_c),e(Xt,vc),m(s,fl,g),w(Wn,s,g),m(s,gl,g),m(s,Ea,g),e(Ea,Mo),e(Mo,za),e(za,yc),e(Mo,bc),e(Mo,Qn),e(Qn,Lc),e(Mo,kc),m(s,_l,g),m(s,Yt,g),e(Yt,$o),e($o,Tr),w(Un,Tr,null),e(Yt,wc),e(Yt,xr),e(xr,Tc),m(s,vl,g),m(s,dt,g),w(Vn,dt,null),e(dt,xc),e(dt,Jt),e(Jt,Mc),e(Jt,Ca),e(Ca,$c),e(Jt,Fc),e(Jt,Hn),e(Hn,qc),e(Jt,Ec),e(dt,zc),e(dt,Zt),e(Zt,Cc),e(Zt,Aa),e(Aa,Ac),e(Zt,Pc),e(Zt,Pa),e(Pa,jc),e(Zt,Nc),e(dt,Oc),w(Fo,dt,null),m(s,yl,g),m(s,eo,g),e(eo,qo),e(qo,Mr),w(Kn,Mr,null),e(eo,Sc),e(eo,$r),e($r,Ic),m(s,bl,g),m(s,ct,g),w(Gn,ct,null),e(ct,Dc),e(ct,Fr),e(Fr,Rc),e(ct,Bc),e(ct,Xn),e(Xn,Wc),e(Xn,qr),e(qr,Qc),e(Xn,Uc),e(ct,Vc),e(ct,It),w(Yn,It,null),e(It,Hc),e(It,Er),e(Er,Kc),e(It,Gc),w(Eo,It,null),m(s,Ll,g),m(s,to,g),e(to,zo),e(zo,zr),w(Jn,zr,null),e(to,Xc),e(to,Cr),e(Cr,Yc),m(s,kl,g),m(s,We,g),w(Zn,We,null),e(We,Jc),e(We,Re),e(Re,Zc),e(Re,Ar),e(Ar,ep),e(Re,tp),e(Re,ja),e(ja,op),e(Re,np),e(Re,Pr),e(Pr,sp),e(Re,ap),e(Re,jr),e(jr,rp),e(Re,ip),e(Re,Nr),e(Nr,lp),e(Re,dp),e(Re,Or),e(Or,cp),e(Re,pp),e(Re,Sr),e(Sr,up),e(Re,hp),e(We,mp),e(We,es),e(es,fp),e(es,Na),e(Na,gp),e(es,_p),e(We,vp),e(We,Oa),e(Oa,Sa),e(Sa,yp),e(Oa,bp),e(We,Lp),e(We,Co),w(ts,Co,null),e(Co,kp),e(Co,Ir),e(Ir,wp),e(We,Tp),e(We,Ia),w(os,Ia,null),m(s,wl,g),m(s,oo,g),e(oo,Ao),e(Ao,Dr),w(ns,Dr,null),e(oo,xp),e(oo,Rr),e(Rr,Mp),m(s,Tl,g),m(s,pt,g),w(ss,pt,null),e(pt,$p),e(pt,as),e(as,Fp),e(as,Br),e(Br,qp),e(as,Ep),e(pt,zp),e(pt,rs),e(rs,Cp),e(rs,Da),e(Da,Ap),e(rs,Pp),e(pt,jp),e(pt,Po),w(is,Po,null),e(Po,Np),e(Po,Wr),e(Wr,Op),m(s,xl,g),m(s,no,g),e(no,jo),e(jo,Qr),w(ls,Qr,null),e(no,Sp),e(no,Ur),e(Ur,Ip),m(s,Ml,g),m(s,rt,g),w(ds,rt,null),e(rt,Dp),e(rt,Vr),e(Vr,Rp),e(rt,Bp),e(rt,Ra),e(Ra,Ba),e(Ba,Wp),e(Ra,Qp),e(rt,Up),e(rt,ce),e(ce,Vp),e(ce,Wa),e(Wa,Hp),e(ce,Kp),e(ce,Qa),e(Qa,Gp),e(ce,Xp),e(ce,Ua),e(Ua,Yp),e(ce,Jp),e(ce,Hr),e(Hr,Zp),e(ce,eu),e(ce,Kr),e(Kr,tu),e(ce,ou),e(ce,Gr),e(Gr,nu),e(ce,su),e(ce,Xr),e(Xr,au),e(ce,ru),e(ce,Yr),e(Yr,iu),e(ce,lu),e(ce,Jr),e(Jr,du),e(ce,cu),e(rt,pu),e(rt,Dt),w(cs,Dt,null),e(Dt,uu),e(Dt,I),e(I,hu),e(I,Zr),e(Zr,mu),e(I,fu),e(I,ps),e(ps,ei),e(ei,gu),e(ps,_u),e(I,vu),e(I,Va),e(Va,yu),e(I,bu),e(I,ti),e(ti,Lu),e(I,ku),e(I,oi),e(oi,wu),e(I,Tu),e(I,us),e(us,ni),e(ni,xu),e(us,Mu),e(I,$u),e(I,si),e(si,Fu),e(I,qu),e(I,Ha),e(Ha,Eu),e(I,zu),e(I,ai),e(ai,Cu),e(I,Au),e(I,ri),e(ri,Pu),e(I,ju),e(I,ii),e(ii,Nu),e(I,Ou),e(I,li),e(li,Su),e(I,Iu),e(I,di),e(di,Du),e(I,Ru),e(I,hs),e(hs,ci),e(ci,Bu),e(hs,Wu),e(I,Qu),e(I,pi),e(pi,Uu),e(I,Vu),e(Dt,Hu),e(Dt,ui),e(ui,Ku),m(s,$l,g),m(s,so,g),e(so,No),e(No,hi),w(ms,hi,null),e(so,Gu),e(so,mi),e(mi,Xu),m(s,Fl,g),m(s,Ct,g),w(fs,Ct,null),e(Ct,Yu),e(Ct,gs),e(gs,Ju),e(gs,_s),e(_s,Zu),e(gs,eh),e(Ct,th),e(Ct,yt),w(vs,yt,null),e(yt,oh),e(yt,ao),e(ao,nh),e(ao,Ka),e(Ka,sh),e(ao,ah),e(ao,fi),e(fi,rh),e(ao,ih),e(yt,lh),w(Oo,yt,null),e(yt,dh),w(So,yt,null),m(s,ql,g),m(s,ro,g),e(ro,Io),e(Io,gi),w(ys,gi,null),e(ro,ch),e(ro,_i),e(_i,ph),m(s,El,g),m(s,ut,g),w(bs,ut,null),e(ut,uh),e(ut,Ls),e(Ls,hh),e(Ls,ks),e(ks,mh),e(Ls,fh),e(ut,gh),e(ut,ws),e(ws,_h),e(ws,Ts),e(Ts,vh),e(ws,yh),e(ut,bh),e(ut,bt),w(xs,bt,null),e(bt,Lh),e(bt,io),e(io,kh),e(io,Ga),e(Ga,wh),e(io,Th),e(io,vi),e(vi,xh),e(io,Mh),e(bt,$h),w(Do,bt,null),e(bt,Fh),w(Ro,bt,null),m(s,zl,g),m(s,lo,g),e(lo,Bo),e(Bo,yi),w(Ms,yi,null),e(lo,qh),e(lo,bi),e(bi,Eh),m(s,Cl,g),m(s,ht,g),w($s,ht,null),e(ht,zh),e(ht,mt),e(mt,Ch),e(mt,Fs),e(Fs,Ah),e(mt,Ph),e(mt,qs),e(qs,jh),e(mt,Nh),e(mt,Es),e(Es,Oh),e(mt,Sh),e(mt,zs),e(zs,Ih),e(mt,Dh),e(ht,Rh),e(ht,Cs),e(Cs,Bh),e(Cs,As),e(As,Wh),e(Cs,Qh),e(ht,Uh),e(ht,Lt),w(Ps,Lt,null),e(Lt,Vh),e(Lt,co),e(co,Hh),e(co,Xa),e(Xa,Kh),e(co,Gh),e(co,Li),e(Li,Xh),e(co,Yh),e(Lt,Jh),w(Wo,Lt,null),e(Lt,Zh),w(Qo,Lt,null),m(s,Al,g),m(s,po,g),e(po,Uo),e(Uo,ki),w(js,ki,null),e(po,em),e(po,wi),e(wi,tm),m(s,Pl,g),m(s,ft,g),w(Ns,ft,null),e(ft,om),e(ft,At),e(At,nm),e(At,Os),e(Os,sm),e(At,am),e(At,Ti),e(Ti,rm),e(At,im),e(At,xi),e(xi,lm),e(At,dm),e(ft,cm),e(ft,Ss),e(Ss,pm),e(Ss,Is),e(Is,um),e(Ss,hm),e(ft,mm),e(ft,kt),w(Ds,kt,null),e(kt,fm),e(kt,uo),e(uo,gm),e(uo,Ya),e(Ya,_m),e(uo,vm),e(uo,Mi),e(Mi,ym),e(uo,bm),e(kt,Lm),w(Vo,kt,null),e(kt,km),w(Ho,kt,null),m(s,jl,g),m(s,ho,g),e(ho,Ko),e(Ko,$i),w(Rs,$i,null),e(ho,wm),e(ho,Fi),e(Fi,Tm),m(s,Nl,g),m(s,it,g),w(Bs,it,null),e(it,xm),e(it,Ws),e(Ws,Mm),e(Ws,Ja),e(Ja,$m),e(Ws,Fm),e(it,qm),e(it,Qs),e(Qs,Em),e(Qs,Us),e(Us,zm),e(Qs,Cm),e(it,Am),w(Go,it,null),e(it,Pm),e(it,wt),w(Vs,wt,null),e(wt,jm),e(wt,mo),e(mo,Nm),e(mo,Za),e(Za,Om),e(mo,Sm),e(mo,qi),e(qi,Im),e(mo,Dm),e(wt,Rm),w(Xo,wt,null),e(wt,Bm),w(Yo,wt,null),m(s,Ol,g),m(s,fo,g),e(fo,Jo),e(Jo,Ei),w(Hs,Ei,null),e(fo,Wm),e(fo,zi),e(zi,Qm),m(s,Sl,g),m(s,Qe,g),w(Ks,Qe,null),e(Qe,Um),e(Qe,Gs),e(Gs,Vm),e(Gs,Xs),e(Xs,Hm),e(Gs,Km),e(Qe,Gm),e(Qe,Ys),e(Ys,Xm),e(Ys,er),e(er,Ym),e(Ys,Jm),e(Qe,Zm),e(Qe,Js),e(Js,ef),e(Js,Zs),e(Zs,tf),e(Js,of),e(Qe,nf),w(Zo,Qe,null),e(Qe,sf),e(Qe,Tt),w(ea,Tt,null),e(Tt,af),e(Tt,go),e(go,rf),e(go,tr),e(tr,lf),e(go,df),e(go,Ci),e(Ci,cf),e(go,pf),e(Tt,uf),w(en,Tt,null),e(Tt,hf),w(tn,Tt,null),m(s,Il,g),m(s,_o,g),e(_o,on),e(on,Ai),w(ta,Ai,null),e(_o,mf),e(_o,Pi),e(Pi,ff),m(s,Dl,g),m(s,Ue,g),w(oa,Ue,null),e(Ue,gf),e(Ue,gt),e(gt,_f),e(gt,na),e(na,vf),e(gt,yf),e(gt,sa),e(sa,bf),e(gt,Lf),e(gt,aa),e(aa,kf),e(gt,wf),e(gt,ra),e(ra,Tf),e(gt,xf),e(Ue,Mf),e(Ue,ia),e(ia,$f),e(ia,or),e(or,Ff),e(ia,qf),e(Ue,Ef),e(Ue,la),e(la,zf),e(la,da),e(da,Cf),e(la,Af),e(Ue,Pf),w(nn,Ue,null),e(Ue,jf),e(Ue,xt),w(ca,xt,null),e(xt,Nf),e(xt,vo),e(vo,Of),e(vo,nr),e(nr,Sf),e(vo,If),e(vo,ji),e(ji,Df),e(vo,Rf),e(xt,Bf),w(sn,xt,null),e(xt,Wf),w(an,xt,null),m(s,Rl,g),m(s,yo,g),e(yo,rn),e(rn,Ni),w(pa,Ni,null),e(yo,Qf),e(yo,Oi),e(Oi,Uf),m(s,Bl,g),m(s,Ve,g),w(ua,Ve,null),e(Ve,Vf),e(Ve,Pt),e(Pt,Hf),e(Pt,ha),e(ha,Kf),e(Pt,Gf),e(Pt,Si),e(Si,Xf),e(Pt,Yf),e(Pt,Ii),e(Ii,Jf),e(Pt,Zf),e(Ve,eg),e(Ve,ma),e(ma,tg),e(ma,sr),e(sr,og),e(ma,ng),e(Ve,sg),e(Ve,fa),e(fa,ag),e(fa,ga),e(ga,rg),e(fa,ig),e(Ve,lg),w(ln,Ve,null),e(Ve,dg),e(Ve,Mt),w(_a,Mt,null),e(Mt,cg),e(Mt,bo),e(bo,pg),e(bo,ar),e(ar,ug),e(bo,hg),e(bo,Di),e(Di,mg),e(bo,fg),e(Mt,gg),w(dn,Mt,null),e(Mt,_g),w(cn,Mt,null),Wl=!0},p(s,[g]){const va={};g&2&&(va.$$scope={dirty:g,ctx:s}),To.$set(va);const Ri={};g&2&&(Ri.$$scope={dirty:g,ctx:s}),Fo.$set(Ri);const Bi={};g&2&&(Bi.$$scope={dirty:g,ctx:s}),Eo.$set(Bi);const Wi={};g&2&&(Wi.$$scope={dirty:g,ctx:s}),Oo.$set(Wi);const ya={};g&2&&(ya.$$scope={dirty:g,ctx:s}),So.$set(ya);const Qi={};g&2&&(Qi.$$scope={dirty:g,ctx:s}),Do.$set(Qi);const Ui={};g&2&&(Ui.$$scope={dirty:g,ctx:s}),Ro.$set(Ui);const Vi={};g&2&&(Vi.$$scope={dirty:g,ctx:s}),Wo.$set(Vi);const jt={};g&2&&(jt.$$scope={dirty:g,ctx:s}),Qo.$set(jt);const Hi={};g&2&&(Hi.$$scope={dirty:g,ctx:s}),Vo.$set(Hi);const Ki={};g&2&&(Ki.$$scope={dirty:g,ctx:s}),Ho.$set(Ki);const Gi={};g&2&&(Gi.$$scope={dirty:g,ctx:s}),Go.$set(Gi);const Xi={};g&2&&(Xi.$$scope={dirty:g,ctx:s}),Xo.$set(Xi);const Yi={};g&2&&(Yi.$$scope={dirty:g,ctx:s}),Yo.$set(Yi);const Ji={};g&2&&(Ji.$$scope={dirty:g,ctx:s}),Zo.$set(Ji);const Zi={};g&2&&(Zi.$$scope={dirty:g,ctx:s}),en.$set(Zi);const Nt={};g&2&&(Nt.$$scope={dirty:g,ctx:s}),tn.$set(Nt);const pn={};g&2&&(pn.$$scope={dirty:g,ctx:s}),nn.$set(pn);const el={};g&2&&(el.$$scope={dirty:g,ctx:s}),sn.$set(el);const ba={};g&2&&(ba.$$scope={dirty:g,ctx:s}),an.$set(ba);const tl={};g&2&&(tl.$$scope={dirty:g,ctx:s}),ln.$set(tl);const _t={};g&2&&(_t.$$scope={dirty:g,ctx:s}),dn.$set(_t);const ol={};g&2&&(ol.$$scope={dirty:g,ctx:s}),cn.$set(ol)},i(s){Wl||(T(l.$$.fragment,s),T($.$$.fragment,s),T(Pn.$$.fragment,s),T(To.$$.fragment,s),T(jn.$$.fragment,s),T(On.$$.fragment,s),T(Wn.$$.fragment,s),T(Un.$$.fragment,s),T(Vn.$$.fragment,s),T(Fo.$$.fragment,s),T(Kn.$$.fragment,s),T(Gn.$$.fragment,s),T(Yn.$$.fragment,s),T(Eo.$$.fragment,s),T(Jn.$$.fragment,s),T(Zn.$$.fragment,s),T(ts.$$.fragment,s),T(os.$$.fragment,s),T(ns.$$.fragment,s),T(ss.$$.fragment,s),T(is.$$.fragment,s),T(ls.$$.fragment,s),T(ds.$$.fragment,s),T(cs.$$.fragment,s),T(ms.$$.fragment,s),T(fs.$$.fragment,s),T(vs.$$.fragment,s),T(Oo.$$.fragment,s),T(So.$$.fragment,s),T(ys.$$.fragment,s),T(bs.$$.fragment,s),T(xs.$$.fragment,s),T(Do.$$.fragment,s),T(Ro.$$.fragment,s),T(Ms.$$.fragment,s),T($s.$$.fragment,s),T(Ps.$$.fragment,s),T(Wo.$$.fragment,s),T(Qo.$$.fragment,s),T(js.$$.fragment,s),T(Ns.$$.fragment,s),T(Ds.$$.fragment,s),T(Vo.$$.fragment,s),T(Ho.$$.fragment,s),T(Rs.$$.fragment,s),T(Bs.$$.fragment,s),T(Go.$$.fragment,s),T(Vs.$$.fragment,s),T(Xo.$$.fragment,s),T(Yo.$$.fragment,s),T(Hs.$$.fragment,s),T(Ks.$$.fragment,s),T(Zo.$$.fragment,s),T(ea.$$.fragment,s),T(en.$$.fragment,s),T(tn.$$.fragment,s),T(ta.$$.fragment,s),T(oa.$$.fragment,s),T(nn.$$.fragment,s),T(ca.$$.fragment,s),T(sn.$$.fragment,s),T(an.$$.fragment,s),T(pa.$$.fragment,s),T(ua.$$.fragment,s),T(ln.$$.fragment,s),T(_a.$$.fragment,s),T(dn.$$.fragment,s),T(cn.$$.fragment,s),Wl=!0)},o(s){x(l.$$.fragment,s),x($.$$.fragment,s),x(Pn.$$.fragment,s),x(To.$$.fragment,s),x(jn.$$.fragment,s),x(On.$$.fragment,s),x(Wn.$$.fragment,s),x(Un.$$.fragment,s),x(Vn.$$.fragment,s),x(Fo.$$.fragment,s),x(Kn.$$.fragment,s),x(Gn.$$.fragment,s),x(Yn.$$.fragment,s),x(Eo.$$.fragment,s),x(Jn.$$.fragment,s),x(Zn.$$.fragment,s),x(ts.$$.fragment,s),x(os.$$.fragment,s),x(ns.$$.fragment,s),x(ss.$$.fragment,s),x(is.$$.fragment,s),x(ls.$$.fragment,s),x(ds.$$.fragment,s),x(cs.$$.fragment,s),x(ms.$$.fragment,s),x(fs.$$.fragment,s),x(vs.$$.fragment,s),x(Oo.$$.fragment,s),x(So.$$.fragment,s),x(ys.$$.fragment,s),x(bs.$$.fragment,s),x(xs.$$.fragment,s),x(Do.$$.fragment,s),x(Ro.$$.fragment,s),x(Ms.$$.fragment,s),x($s.$$.fragment,s),x(Ps.$$.fragment,s),x(Wo.$$.fragment,s),x(Qo.$$.fragment,s),x(js.$$.fragment,s),x(Ns.$$.fragment,s),x(Ds.$$.fragment,s),x(Vo.$$.fragment,s),x(Ho.$$.fragment,s),x(Rs.$$.fragment,s),x(Bs.$$.fragment,s),x(Go.$$.fragment,s),x(Vs.$$.fragment,s),x(Xo.$$.fragment,s),x(Yo.$$.fragment,s),x(Hs.$$.fragment,s),x(Ks.$$.fragment,s),x(Zo.$$.fragment,s),x(ea.$$.fragment,s),x(en.$$.fragment,s),x(tn.$$.fragment,s),x(ta.$$.fragment,s),x(oa.$$.fragment,s),x(nn.$$.fragment,s),x(ca.$$.fragment,s),x(sn.$$.fragment,s),x(an.$$.fragment,s),x(pa.$$.fragment,s),x(ua.$$.fragment,s),x(ln.$$.fragment,s),x(_a.$$.fragment,s),x(dn.$$.fragment,s),x(cn.$$.fragment,s),Wl=!1},d(s){t(c),s&&t(b),s&&t(_),M(l),s&&t(_e),s&&t(R),M($),s&&t(ve),s&&t(S),s&&t(ye),s&&t(ee),s&&t(P),s&&t(he),s&&t(be),s&&t(U),s&&t(Le),s&&t(C),s&&t(al),s&&t(Lo),s&&t(rl),s&&t(ko),s&&t(il),s&&t(He),s&&t(ll),s&&t(Gt),M(Pn),s&&t(dl),s&&t(wa),s&&t(cl),M(To,s),s&&t(pl),M(jn,s),s&&t(ul),s&&t(Ta),s&&t(hl),M(On,s),s&&t(ml),s&&t(Ot),s&&t(fl),M(Wn,s),s&&t(gl),s&&t(Ea),s&&t(_l),s&&t(Yt),M(Un),s&&t(vl),s&&t(dt),M(Vn),M(Fo),s&&t(yl),s&&t(eo),M(Kn),s&&t(bl),s&&t(ct),M(Gn),M(Yn),M(Eo),s&&t(Ll),s&&t(to),M(Jn),s&&t(kl),s&&t(We),M(Zn),M(ts),M(os),s&&t(wl),s&&t(oo),M(ns),s&&t(Tl),s&&t(pt),M(ss),M(is),s&&t(xl),s&&t(no),M(ls),s&&t(Ml),s&&t(rt),M(ds),M(cs),s&&t($l),s&&t(so),M(ms),s&&t(Fl),s&&t(Ct),M(fs),M(vs),M(Oo),M(So),s&&t(ql),s&&t(ro),M(ys),s&&t(El),s&&t(ut),M(bs),M(xs),M(Do),M(Ro),s&&t(zl),s&&t(lo),M(Ms),s&&t(Cl),s&&t(ht),M($s),M(Ps),M(Wo),M(Qo),s&&t(Al),s&&t(po),M(js),s&&t(Pl),s&&t(ft),M(Ns),M(Ds),M(Vo),M(Ho),s&&t(jl),s&&t(ho),M(Rs),s&&t(Nl),s&&t(it),M(Bs),M(Go),M(Vs),M(Xo),M(Yo),s&&t(Ol),s&&t(fo),M(Hs),s&&t(Sl),s&&t(Qe),M(Ks),M(Zo),M(ea),M(en),M(tn),s&&t(Il),s&&t(_o),M(ta),s&&t(Dl),s&&t(Ue),M(oa),M(nn),M(ca),M(sn),M(an),s&&t(Rl),s&&t(yo),M(pa),s&&t(Bl),s&&t(Ve),M(ua),M(ln),M(_a),M(dn),M(cn)}}}const ob={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"resources",title:"Resources"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"},{local:"transformers.TFLayoutLMv3Model",title:"TFLayoutLMv3Model"},{local:"transformers.TFLayoutLMv3ForSequenceClassification",title:"TFLayoutLMv3ForSequenceClassification"},{local:"transformers.TFLayoutLMv3ForTokenClassification",title:"TFLayoutLMv3ForTokenClassification"},{local:"transformers.TFLayoutLMv3ForQuestionAnswering",title:"TFLayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function nb(z){return zy(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pb extends My{constructor(c){super();$y(this,c,nb,tb,Fy,{})}}export{pb as default,ob as metadata};
