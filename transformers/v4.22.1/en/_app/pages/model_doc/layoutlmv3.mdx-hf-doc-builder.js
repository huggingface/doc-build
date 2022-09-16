import{S as P_,i as j_,s as N_,e as a,k as p,w as k,t as o,M as I_,c as r,d as t,m as u,a as i,x as w,h as n,b as d,N as S_,G as e,g as f,y as T,q as x,o as M,B as $,v as O_,L as Bt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Et}from"../../chunks/Tip-hf-doc-builder.js";import{D as ne}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Qt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as it}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Rt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function D_(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import LayoutLMv3Model, LayoutLMv3Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),b=o("Example:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Example:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function W_(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import LayoutLMv3FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){c=a("p"),b=o("Examples:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function R_(A){let c,b,g,m,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(h,"CODE",{});var E=i(g);m=n(E,"Module"),E.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){f(l,c,h),e(c,b),e(c,g),e(g,m),e(c,y)},d(l){l&&t(c)}}}function B_(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import AutoProcessor, AutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),b=o("Examples:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function Q_(A){let c,b,g,m,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(h,"CODE",{});var E=i(g);m=n(E,"Module"),E.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){f(l,c,h),e(c,b),e(c,g),e(g,m),e(c,y)},d(l){l&&t(c)}}}function U_(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import AutoProcessor, AutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=o("Examples:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function V_(A){let c,b,g,m,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(h,"CODE",{});var E=i(g);m=n(E,"Module"),E.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){f(l,c,h),e(c,b),e(c,g),e(g,m),e(c,y)},d(l){l&&t(c)}}}function H_(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import AutoProcessor, AutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=o("Examples:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function K_(A){let c,b,g,m,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(h,"CODE",{});var E=i(g);m=n(E,"Module"),E.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){f(l,c,h),e(c,b),e(c,g),e(g,m),e(c,y)},d(l){l&&t(c)}}}function G_(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import AutoProcessor, AutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){c=a("p"),b=o("Examples:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function X_(A){let c,b,g,m,y,l,h,E,we,_e,W,ae,se,L,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,he,H,Ee,be,U,ze,Le,z,re,Y,me,Ce,J,le,fe,B,Ae,I,Pe,te,j,je,N,Ne,Ie;return{c(){c=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=p(),h=a("ul"),E=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),W=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),L=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),Me=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=o("fit()"),pe=o(" and "),G=a("code"),qe=o("predict()"),ue=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),C=a("ul"),P=a("li"),he=o("a single Tensor with "),H=a("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),U=a("code"),ze=o("model(input_ids)"),Le=p(),z=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),me=o("model([input_ids, attention_mask])"),Ce=o(" or "),J=a("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),fe=p(),B=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),j=a("p"),je=o(`Note that when creating models and layers with
`),N=a("a"),Ne=o("subclassing"),Ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){c=r(_,"P",{});var q=i(c);b=n(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var Ge=i(g);m=n(Ge,"transformers"),Ge.forEach(t),y=n(q," accept two formats as input:"),q.forEach(t),l=u(_),h=r(_,"UL",{});var oe=i(h);E=r(oe,"LI",{});var Xe=i(E);we=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),_e=u(oe),W=r(oe,"LI",{});var Ye=i(W);ae=n(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),oe.forEach(t),se=u(_),L=r(_,"P",{});var F=i(L);Te=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(F,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(t),ve=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(F,"CODE",{});var Je=i(S);Me=n(Je,"model.fit()"),Je.forEach(t),ie=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(F,"CODE",{});var Re=i(K);$e=n(Re,"fit()"),Re.forEach(t),pe=n(F," and "),G=r(F,"CODE",{});var Ze=i(G);qe=n(Ze,"predict()"),Ze.forEach(t),ue=n(F,`, such as when creating your own layers or models with
the Keras `),X=r(F,"CODE",{});var et=i(X);Fe=n(et,"Functional"),et.forEach(t),ye=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),ee=u(_),C=r(_,"UL",{});var D=i(C);P=r(D,"LI",{});var Z=i(P);he=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var tt=i(H);Ee=n(tt,"input_ids"),tt.forEach(t),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var ot=i(U);ze=n(ot,"model(input_ids)"),ot.forEach(t),Z.forEach(t),Le=u(D),z=r(D,"LI",{});var Q=i(z);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var nt=i(Y);me=n(nt,"model([input_ids, attention_mask])"),nt.forEach(t),Ce=n(Q," or "),J=r(Q,"CODE",{});var Se=i(J);le=n(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),Q.forEach(t),fe=u(D),B=r(D,"LI",{});var Oe=i(B);Ae=n(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Oe,"CODE",{});var st=i(I);Pe=n(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Oe.forEach(t),D.forEach(t),te=u(_),j=r(_,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(t),Ie=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(_,q){f(_,c,q),e(c,b),e(c,g),e(g,m),e(c,y),f(_,l,q),f(_,h,q),e(h,E),e(E,we),e(h,_e),e(h,W),e(W,ae),f(_,se,q),f(_,L,q),e(L,Te),e(L,V),e(V,xe),e(L,ve),e(L,S),e(S,Me),e(L,ie),e(L,K),e(K,$e),e(L,pe),e(L,G),e(G,qe),e(L,ue),e(L,X),e(X,Fe),e(L,ye),f(_,ee,q),f(_,C,q),e(C,P),e(P,he),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(C,Le),e(C,z),e(z,re),e(z,Y),e(Y,me),e(z,Ce),e(z,J),e(J,le),e(C,fe),e(C,B),e(B,Ae),e(B,I),e(I,Pe),f(_,te,q),f(_,j,q),e(j,je),e(j,N),e(N,Ne),e(j,Ie)},d(_){_&&t(c),_&&t(l),_&&t(h),_&&t(se),_&&t(L),_&&t(ee),_&&t(C),_&&t(te),_&&t(j)}}}function Y_(A){let c,b,g,m,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(h,"CODE",{});var E=i(g);m=n(E,"Module"),E.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){f(l,c,h),e(c,b),e(c,g),e(g,m),e(c,y)},d(l){l&&t(c)}}}function J_(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import AutoProcessor, TFAutoModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),b=o("Examples:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function Z_(A){let c,b,g,m,y,l,h,E,we,_e,W,ae,se,L,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,he,H,Ee,be,U,ze,Le,z,re,Y,me,Ce,J,le,fe,B,Ae,I,Pe,te,j,je,N,Ne,Ie;return{c(){c=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=p(),h=a("ul"),E=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),W=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),L=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),Me=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=o("fit()"),pe=o(" and "),G=a("code"),qe=o("predict()"),ue=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),C=a("ul"),P=a("li"),he=o("a single Tensor with "),H=a("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),U=a("code"),ze=o("model(input_ids)"),Le=p(),z=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),me=o("model([input_ids, attention_mask])"),Ce=o(" or "),J=a("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),fe=p(),B=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),j=a("p"),je=o(`Note that when creating models and layers with
`),N=a("a"),Ne=o("subclassing"),Ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){c=r(_,"P",{});var q=i(c);b=n(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var Ge=i(g);m=n(Ge,"transformers"),Ge.forEach(t),y=n(q," accept two formats as input:"),q.forEach(t),l=u(_),h=r(_,"UL",{});var oe=i(h);E=r(oe,"LI",{});var Xe=i(E);we=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),_e=u(oe),W=r(oe,"LI",{});var Ye=i(W);ae=n(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),oe.forEach(t),se=u(_),L=r(_,"P",{});var F=i(L);Te=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(F,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(t),ve=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(F,"CODE",{});var Je=i(S);Me=n(Je,"model.fit()"),Je.forEach(t),ie=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(F,"CODE",{});var Re=i(K);$e=n(Re,"fit()"),Re.forEach(t),pe=n(F," and "),G=r(F,"CODE",{});var Ze=i(G);qe=n(Ze,"predict()"),Ze.forEach(t),ue=n(F,`, such as when creating your own layers or models with
the Keras `),X=r(F,"CODE",{});var et=i(X);Fe=n(et,"Functional"),et.forEach(t),ye=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),ee=u(_),C=r(_,"UL",{});var D=i(C);P=r(D,"LI",{});var Z=i(P);he=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var tt=i(H);Ee=n(tt,"input_ids"),tt.forEach(t),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var ot=i(U);ze=n(ot,"model(input_ids)"),ot.forEach(t),Z.forEach(t),Le=u(D),z=r(D,"LI",{});var Q=i(z);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var nt=i(Y);me=n(nt,"model([input_ids, attention_mask])"),nt.forEach(t),Ce=n(Q," or "),J=r(Q,"CODE",{});var Se=i(J);le=n(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),Q.forEach(t),fe=u(D),B=r(D,"LI",{});var Oe=i(B);Ae=n(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Oe,"CODE",{});var st=i(I);Pe=n(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Oe.forEach(t),D.forEach(t),te=u(_),j=r(_,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(t),Ie=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(_,q){f(_,c,q),e(c,b),e(c,g),e(g,m),e(c,y),f(_,l,q),f(_,h,q),e(h,E),e(E,we),e(h,_e),e(h,W),e(W,ae),f(_,se,q),f(_,L,q),e(L,Te),e(L,V),e(V,xe),e(L,ve),e(L,S),e(S,Me),e(L,ie),e(L,K),e(K,$e),e(L,pe),e(L,G),e(G,qe),e(L,ue),e(L,X),e(X,Fe),e(L,ye),f(_,ee,q),f(_,C,q),e(C,P),e(P,he),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(C,Le),e(C,z),e(z,re),e(z,Y),e(Y,me),e(z,Ce),e(z,J),e(J,le),e(C,fe),e(C,B),e(B,Ae),e(B,I),e(I,Pe),f(_,te,q),f(_,j,q),e(j,je),e(j,N),e(N,Ne),e(j,Ie)},d(_){_&&t(c),_&&t(l),_&&t(h),_&&t(se),_&&t(L),_&&t(ee),_&&t(C),_&&t(te),_&&t(j)}}}function ev(A){let c,b,g,m,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(h,"CODE",{});var E=i(g);m=n(E,"Module"),E.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){f(l,c,h),e(c,b),e(c,g),e(g,m),e(c,y)},d(l){l&&t(c)}}}function tv(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import AutoProcessor, TFAutoModelForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=o("Examples:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function ov(A){let c,b,g,m,y,l,h,E,we,_e,W,ae,se,L,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,he,H,Ee,be,U,ze,Le,z,re,Y,me,Ce,J,le,fe,B,Ae,I,Pe,te,j,je,N,Ne,Ie;return{c(){c=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=p(),h=a("ul"),E=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),W=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),L=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),Me=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=o("fit()"),pe=o(" and "),G=a("code"),qe=o("predict()"),ue=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),C=a("ul"),P=a("li"),he=o("a single Tensor with "),H=a("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),U=a("code"),ze=o("model(input_ids)"),Le=p(),z=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),me=o("model([input_ids, attention_mask])"),Ce=o(" or "),J=a("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),fe=p(),B=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),j=a("p"),je=o(`Note that when creating models and layers with
`),N=a("a"),Ne=o("subclassing"),Ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){c=r(_,"P",{});var q=i(c);b=n(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var Ge=i(g);m=n(Ge,"transformers"),Ge.forEach(t),y=n(q," accept two formats as input:"),q.forEach(t),l=u(_),h=r(_,"UL",{});var oe=i(h);E=r(oe,"LI",{});var Xe=i(E);we=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),_e=u(oe),W=r(oe,"LI",{});var Ye=i(W);ae=n(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),oe.forEach(t),se=u(_),L=r(_,"P",{});var F=i(L);Te=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(F,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(t),ve=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(F,"CODE",{});var Je=i(S);Me=n(Je,"model.fit()"),Je.forEach(t),ie=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(F,"CODE",{});var Re=i(K);$e=n(Re,"fit()"),Re.forEach(t),pe=n(F," and "),G=r(F,"CODE",{});var Ze=i(G);qe=n(Ze,"predict()"),Ze.forEach(t),ue=n(F,`, such as when creating your own layers or models with
the Keras `),X=r(F,"CODE",{});var et=i(X);Fe=n(et,"Functional"),et.forEach(t),ye=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),ee=u(_),C=r(_,"UL",{});var D=i(C);P=r(D,"LI",{});var Z=i(P);he=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var tt=i(H);Ee=n(tt,"input_ids"),tt.forEach(t),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var ot=i(U);ze=n(ot,"model(input_ids)"),ot.forEach(t),Z.forEach(t),Le=u(D),z=r(D,"LI",{});var Q=i(z);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var nt=i(Y);me=n(nt,"model([input_ids, attention_mask])"),nt.forEach(t),Ce=n(Q," or "),J=r(Q,"CODE",{});var Se=i(J);le=n(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),Q.forEach(t),fe=u(D),B=r(D,"LI",{});var Oe=i(B);Ae=n(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Oe,"CODE",{});var st=i(I);Pe=n(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Oe.forEach(t),D.forEach(t),te=u(_),j=r(_,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(t),Ie=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(_,q){f(_,c,q),e(c,b),e(c,g),e(g,m),e(c,y),f(_,l,q),f(_,h,q),e(h,E),e(E,we),e(h,_e),e(h,W),e(W,ae),f(_,se,q),f(_,L,q),e(L,Te),e(L,V),e(V,xe),e(L,ve),e(L,S),e(S,Me),e(L,ie),e(L,K),e(K,$e),e(L,pe),e(L,G),e(G,qe),e(L,ue),e(L,X),e(X,Fe),e(L,ye),f(_,ee,q),f(_,C,q),e(C,P),e(P,he),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(C,Le),e(C,z),e(z,re),e(z,Y),e(Y,me),e(z,Ce),e(z,J),e(J,le),e(C,fe),e(C,B),e(B,Ae),e(B,I),e(I,Pe),f(_,te,q),f(_,j,q),e(j,je),e(j,N),e(N,Ne),e(j,Ie)},d(_){_&&t(c),_&&t(l),_&&t(h),_&&t(se),_&&t(L),_&&t(ee),_&&t(C),_&&t(te),_&&t(j)}}}function nv(A){let c,b,g,m,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(h,"CODE",{});var E=i(g);m=n(E,"Module"),E.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){f(l,c,h),e(c,b),e(c,g),e(g,m),e(c,y)},d(l){l&&t(c)}}}function sv(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import AutoProcessor, TFAutoModelForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){c=a("p"),b=o("Examples:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function av(A){let c,b,g,m,y,l,h,E,we,_e,W,ae,se,L,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,he,H,Ee,be,U,ze,Le,z,re,Y,me,Ce,J,le,fe,B,Ae,I,Pe,te,j,je,N,Ne,Ie;return{c(){c=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=p(),h=a("ul"),E=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=p(),W=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),se=p(),L=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),xe=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),Me=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),$e=o("fit()"),pe=o(" and "),G=a("code"),qe=o("predict()"),ue=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),Fe=o("Functional"),ye=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=p(),C=a("ul"),P=a("li"),he=o("a single Tensor with "),H=a("code"),Ee=o("input_ids"),be=o(" only and nothing else: "),U=a("code"),ze=o("model(input_ids)"),Le=p(),z=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a("code"),me=o("model([input_ids, attention_mask])"),Ce=o(" or "),J=a("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),fe=p(),B=a("li"),Ae=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Pe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),j=a("p"),je=o(`Note that when creating models and layers with
`),N=a("a"),Ne=o("subclassing"),Ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){c=r(_,"P",{});var q=i(c);b=n(q,"TensorFlow models and layers in "),g=r(q,"CODE",{});var Ge=i(g);m=n(Ge,"transformers"),Ge.forEach(t),y=n(q," accept two formats as input:"),q.forEach(t),l=u(_),h=r(_,"UL",{});var oe=i(h);E=r(oe,"LI",{});var Xe=i(E);we=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),_e=u(oe),W=r(oe,"LI",{});var Ye=i(W);ae=n(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),oe.forEach(t),se=u(_),L=r(_,"P",{});var F=i(L);Te=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(F,"CODE",{});var ge=i(V);xe=n(ge,"model.fit()"),ge.forEach(t),ve=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(F,"CODE",{});var Je=i(S);Me=n(Je,"model.fit()"),Je.forEach(t),ie=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(F,"CODE",{});var Re=i(K);$e=n(Re,"fit()"),Re.forEach(t),pe=n(F," and "),G=r(F,"CODE",{});var Ze=i(G);qe=n(Ze,"predict()"),Ze.forEach(t),ue=n(F,`, such as when creating your own layers or models with
the Keras `),X=r(F,"CODE",{});var et=i(X);Fe=n(et,"Functional"),et.forEach(t),ye=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),ee=u(_),C=r(_,"UL",{});var D=i(C);P=r(D,"LI",{});var Z=i(P);he=n(Z,"a single Tensor with "),H=r(Z,"CODE",{});var tt=i(H);Ee=n(tt,"input_ids"),tt.forEach(t),be=n(Z," only and nothing else: "),U=r(Z,"CODE",{});var ot=i(U);ze=n(ot,"model(input_ids)"),ot.forEach(t),Z.forEach(t),Le=u(D),z=r(D,"LI",{});var Q=i(z);re=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(Q,"CODE",{});var nt=i(Y);me=n(nt,"model([input_ids, attention_mask])"),nt.forEach(t),Ce=n(Q," or "),J=r(Q,"CODE",{});var Se=i(J);le=n(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),Q.forEach(t),fe=u(D),B=r(D,"LI",{});var Oe=i(B);Ae=n(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Oe,"CODE",{});var st=i(I);Pe=n(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Oe.forEach(t),D.forEach(t),te=u(_),j=r(_,"P",{});var de=i(j);je=n(de,`Note that when creating models and layers with
`),N=r(de,"A",{href:!0,rel:!0});var De=i(N);Ne=n(De,"subclassing"),De.forEach(t),Ie=n(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){d(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),d(N,"rel","nofollow")},m(_,q){f(_,c,q),e(c,b),e(c,g),e(g,m),e(c,y),f(_,l,q),f(_,h,q),e(h,E),e(E,we),e(h,_e),e(h,W),e(W,ae),f(_,se,q),f(_,L,q),e(L,Te),e(L,V),e(V,xe),e(L,ve),e(L,S),e(S,Me),e(L,ie),e(L,K),e(K,$e),e(L,pe),e(L,G),e(G,qe),e(L,ue),e(L,X),e(X,Fe),e(L,ye),f(_,ee,q),f(_,C,q),e(C,P),e(P,he),e(P,H),e(H,Ee),e(P,be),e(P,U),e(U,ze),e(C,Le),e(C,z),e(z,re),e(z,Y),e(Y,me),e(z,Ce),e(z,J),e(J,le),e(C,fe),e(C,B),e(B,Ae),e(B,I),e(I,Pe),f(_,te,q),f(_,j,q),e(j,je),e(j,N),e(N,Ne),e(j,Ie)},d(_){_&&t(c),_&&t(l),_&&t(h),_&&t(se),_&&t(L),_&&t(ee),_&&t(C),_&&t(te),_&&t(j)}}}function rv(A){let c,b,g,m,y;return{c(){c=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(h,"CODE",{});var E=i(g);m=n(E,"Module"),E.forEach(t),y=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){f(l,c,h),e(c,b),e(c,g),e(g,m),e(c,y)},d(l){l&&t(c)}}}function iv(A){let c,b,g,m,y;return m=new Qt({props:{code:`from transformers import AutoProcessor, TFAutoModelForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){c=a("p"),b=o("Examples:"),g=p(),k(m.$$.fragment)},l(l){c=r(l,"P",{});var h=i(c);b=n(h,"Examples:"),h.forEach(t),g=u(l),w(m.$$.fragment,l)},m(l,h){f(l,c,h),e(c,b),f(l,g,h),T(m,l,h),y=!0},p:Bt,i(l){y||(x(m.$$.fragment,l),y=!0)},o(l){M(m.$$.fragment,l),y=!1},d(l){l&&t(c),l&&t(g),$(m,l)}}}function lv(A){let c,b,g,m,y,l,h,E,we,_e,W,ae,se,L,Te,V,xe,ve,S,Me,ie,K,$e,pe,G,qe,ue,X,Fe,ye,ee,C,P,he,H,Ee,be,U,ze,Le,z,re,Y,me,Ce,J,le,fe,B,Ae,I,Pe,te,j,je,N,Ne,Ie,_,q,Ge,oe,Xe,Ye,F,ge,Je,Re,Ze,et,D,Z,tt,ot,Q,nt,Se,Oe,st,de,De,Al,vn,Pl,jl,Li,fo,Gm,ki,go,Nl,ea,Il,Sl,wi,He,Ol,yn,Dl,Wl,bn,Rl,Bl,Ln,Ql,Ul,kn,Vl,Hl,wn,Kl,Gl,Ti,Ut,_o,Ba,Tn,Xl,Qa,Yl,xi,lt,xn,Jl,Vt,Zl,ta,ed,td,Mn,od,nd,sd,Ht,ad,oa,rd,id,na,ld,dd,cd,vo,Mi,Kt,yo,Ua,$n,pd,Va,ud,$i,dt,qn,hd,Ha,md,fd,Fn,gd,Ka,_d,vd,yd,Nt,En,bd,Ga,Ld,kd,bo,qi,Gt,Lo,Xa,zn,wd,Ya,Td,Fi,Be,Cn,xd,We,Md,Ja,$d,qd,sa,Fd,Ed,Za,zd,Cd,er,Ad,Pd,tr,jd,Nd,or,Id,Sd,nr,Od,Dd,Wd,An,Rd,aa,Bd,Qd,Ud,ra,ia,Vd,Hd,Kd,ko,Pn,Gd,sr,Xd,Yd,la,jn,Ei,Xt,wo,ar,Nn,Jd,rr,Zd,zi,ct,In,ec,Sn,tc,ir,oc,nc,sc,On,ac,da,rc,ic,lc,To,Dn,dc,lr,cc,Ci,Yt,xo,dr,Wn,pc,cr,uc,Ai,at,Rn,hc,pr,mc,fc,ca,pa,gc,_c,vc,ce,yc,ua,bc,Lc,ha,kc,wc,ma,Tc,xc,ur,Mc,$c,hr,qc,Fc,mr,Ec,zc,fr,Cc,Ac,gr,Pc,jc,_r,Nc,Ic,Sc,It,Bn,Oc,O,Dc,vr,Wc,Rc,Qn,yr,Bc,Qc,Uc,fa,Vc,Hc,br,Kc,Gc,Lr,Xc,Yc,Un,kr,Jc,Zc,ep,wr,tp,op,ga,np,sp,Tr,ap,rp,xr,ip,lp,Mr,dp,cp,$r,pp,up,qr,hp,mp,Vn,Fr,fp,gp,_p,Er,vp,yp,bp,zr,Lp,Pi,Jt,Mo,Cr,Hn,kp,Ar,wp,ji,zt,Kn,Tp,Gn,xp,Xn,Mp,$p,qp,_t,Yn,Fp,Zt,Ep,_a,zp,Cp,Pr,Ap,Pp,jp,$o,Np,qo,Ni,eo,Fo,jr,Jn,Ip,Nr,Sp,Ii,pt,Zn,Op,es,Dp,ts,Wp,Rp,Bp,os,Qp,ns,Up,Vp,Hp,vt,ss,Kp,to,Gp,va,Xp,Yp,Ir,Jp,Zp,eu,Eo,tu,zo,Si,oo,Co,Sr,as,ou,Or,nu,Oi,ut,rs,su,ht,au,is,ru,iu,ls,lu,du,ds,cu,pu,cs,uu,hu,mu,ps,fu,us,gu,_u,vu,yt,hs,yu,no,bu,ya,Lu,ku,Dr,wu,Tu,xu,Ao,Mu,Po,Di,so,jo,Wr,ms,$u,Rr,qu,Wi,mt,fs,Fu,Ct,Eu,gs,zu,Cu,Br,Au,Pu,Qr,ju,Nu,Iu,_s,Su,vs,Ou,Du,Wu,bt,ys,Ru,ao,Bu,ba,Qu,Uu,Ur,Vu,Hu,Ku,No,Gu,Io,Ri,ro,So,Vr,bs,Xu,Hr,Yu,Bi,rt,Ls,Ju,ks,Zu,La,eh,th,oh,ws,nh,Ts,sh,ah,rh,Oo,ih,Lt,xs,lh,io,dh,ka,ch,ph,Kr,uh,hh,mh,Do,fh,Wo,Qi,lo,Ro,Gr,Ms,gh,Xr,_h,Ui,Qe,$s,vh,qs,yh,Fs,bh,Lh,kh,Es,wh,wa,Th,xh,Mh,zs,$h,Cs,qh,Fh,Eh,Bo,zh,kt,As,Ch,co,Ah,Ta,Ph,jh,Yr,Nh,Ih,Sh,Qo,Oh,Uo,Vi,po,Vo,Jr,Ps,Dh,Zr,Wh,Hi,Ue,js,Rh,ft,Bh,Ns,Qh,Uh,Is,Vh,Hh,Ss,Kh,Gh,Os,Xh,Yh,Jh,Ds,Zh,xa,em,tm,om,Ws,nm,Rs,sm,am,rm,Ho,im,wt,Bs,lm,uo,dm,Ma,cm,pm,ei,um,hm,mm,Ko,fm,Go,Ki,ho,Xo,ti,Qs,gm,oi,_m,Gi,Ve,Us,vm,At,ym,Vs,bm,Lm,ni,km,wm,si,Tm,xm,Mm,Hs,$m,$a,qm,Fm,Em,Ks,zm,Gs,Cm,Am,Pm,Yo,jm,Tt,Xs,Nm,mo,Im,qa,Sm,Om,ai,Dm,Wm,Rm,Jo,Bm,Zo,Xi;return l=new it({}),L=new it({}),Tn=new it({}),xn=new ne({props:{name:"class transformers.LayoutLMv3Config",anchor:"transformers.LayoutLMv3Config",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"rel_pos_bins",val:" = 32"},{name:"max_rel_pos",val:" = 128"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"max_rel_2d_pos",val:" = 256"},{name:"has_spatial_attention_bias",val:" = True"},{name:"text_embed",val:" = True"},{name:"visual_embed",val:" = True"},{name:"input_size",val:" = 224"},{name:"num_channels",val:" = 3"},{name:"patch_size",val:" = 16"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LayoutLMv3 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv3Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model">LayoutLMv3Model</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv3Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/configuration_layoutlmv3.py#L40"}}),vo=new Rt({props:{anchor:"transformers.LayoutLMv3Config.example",$$slots:{default:[D_]},$$scope:{ctx:A}}}),$n=new it({}),qn=new ne({props:{name:"class transformers.LayoutLMv3FeatureExtractor",anchor:"transformers.LayoutLMv3FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"tesseract_config",val:" = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"tesseract_config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L81"}}),En=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/feature_extraction_layoutlmv3.py#L147",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"
>LayoutLMv3FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),bo=new Rt({props:{anchor:"transformers.LayoutLMv3FeatureExtractor.__call__.example",$$slots:{default:[W_]},$$scope:{ctx:A}}}),zn=new it({}),Cn=new ne({props:{name:"class transformers.LayoutLMv3Tokenizer",anchor:"transformers.LayoutLMv3Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L200"}}),Pn=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L547"}}),jn=new ne({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv3Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3.py#L428"}}),Nn=new it({}),In=new ne({props:{name:"class transformers.LayoutLMv3TokenizerFast",anchor:"transformers.LayoutLMv3TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = True"},{name:"trim_offsets",val:" = True"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L65"}}),Dn=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv3TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/tokenization_layoutlmv3_fast.py#L224"}}),Wn=new it({}),Rn=new ne({props:{name:"class transformers.LayoutLMv3Processor",anchor:"transformers.LayoutLMv3Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv3FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor">LayoutLMv3FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv3Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv3Tokenizer</code> or <code>LayoutLMv3TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a> or <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast">LayoutLMv3TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L25"}}),Bn=new ne({props:{name:"__call__",anchor:"transformers.LayoutLMv3Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/processing_layoutlmv3.py#L47"}}),Hn=new it({}),Kn=new ne({props:{name:"class transformers.LayoutLMv3Model",anchor:"transformers.LayoutLMv3Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L753"}}),Yn=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"pixel_values",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, token_sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L844",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$o=new Et({props:{$$slots:{default:[R_]},$$scope:{ctx:A}}}),qo=new Rt({props:{anchor:"transformers.LayoutLMv3Model.forward.example",$$slots:{default:[B_]},$$scope:{ctx:A}}}),Jn=new it({}),Zn=new ne({props:{name:"class transformers.LayoutLMv3ForSequenceClassification",anchor:"transformers.LayoutLMv3ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1289"}}),ss=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1301",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Eo=new Et({props:{$$slots:{default:[Q_]},$$scope:{ctx:A}}}),zo=new Rt({props:{anchor:"transformers.LayoutLMv3ForSequenceClassification.forward.example",$$slots:{default:[U_]},$$scope:{ctx:A}}}),as=new it({}),rs=new ne({props:{name:"class transformers.LayoutLMv3ForTokenClassification",anchor:"transformers.LayoutLMv3ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1041"}}),hs=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"bbox",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1058",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new Et({props:{$$slots:{default:[V_]},$$scope:{ctx:A}}}),Po=new Rt({props:{anchor:"transformers.LayoutLMv3ForTokenClassification.forward.example",$$slots:{default:[H_]},$$scope:{ctx:A}}}),ms=new it({}),fs=new ne({props:{name:"class transformers.LayoutLMv3ForQuestionAnswering",anchor:"transformers.LayoutLMv3ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1156"}}),ys=new ne({props:{name:"forward",anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"bbox",val:" = None"},{name:"pixel_values",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_layoutlmv3.py#L1169",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new Et({props:{$$slots:{default:[K_]},$$scope:{ctx:A}}}),Io=new Rt({props:{anchor:"transformers.LayoutLMv3ForQuestionAnswering.forward.example",$$slots:{default:[G_]},$$scope:{ctx:A}}}),bs=new it({}),Ls=new ne({props:{name:"class transformers.TFLayoutLMv3Model",anchor:"transformers.TFLayoutLMv3Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1133"}}),Oo=new Et({props:{$$slots:{default:[X_]},$$scope:{ctx:A}}}),xs=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3Model.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1141",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new Et({props:{$$slots:{default:[Y_]},$$scope:{ctx:A}}}),Wo=new Rt({props:{anchor:"transformers.TFLayoutLMv3Model.call.example",$$slots:{default:[J_]},$$scope:{ctx:A}}}),Ms=new it({}),$s=new ne({props:{name:"class transformers.TFLayoutLMv3ForSequenceClassification",anchor:"transformers.TFLayoutLMv3ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1258"}}),Bo=new Et({props:{$$slots:{default:[Z_]},$$scope:{ctx:A}}}),As=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1268",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qo=new Et({props:{$$slots:{default:[ev]},$$scope:{ctx:A}}}),Uo=new Rt({props:{anchor:"transformers.TFLayoutLMv3ForSequenceClassification.call.example",$$slots:{default:[tv]},$$scope:{ctx:A}}}),Ps=new it({}),js=new ne({props:{name:"class transformers.TFLayoutLMv3ForTokenClassification",anchor:"transformers.TFLayoutLMv3ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1369"}}),Ho=new Et({props:{$$slots:{default:[ov]},$$scope:{ctx:A}}}),Bs=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1388",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ko=new Et({props:{$$slots:{default:[nv]},$$scope:{ctx:A}}}),Go=new Rt({props:{anchor:"transformers.TFLayoutLMv3ForTokenClassification.call.example",$$slots:{default:[sv]},$$scope:{ctx:A}}}),Qs=new it({}),Us=new ne({props:{name:"class transformers.TFLayoutLMv3ForQuestionAnswering",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config">LayoutLMv3Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1498"}}),Yo=new Et({props:{$$slots:{default:[av]},$$scope:{ctx:A}}}),Xs=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"position_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"bbox",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"pixel_values",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Note that <code>sequence_length = token_sequence_length + patch_sequence_length + 1</code> where <code>1</code> is for [CLS]
token. See <code>pixel_values</code> for <code>patch_sequence_length</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer">LayoutLMv3Tokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/layoutlmv3/modeling_tf_layoutlmv3.py#L1510",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Config"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jo=new Et({props:{$$slots:{default:[rv]},$$scope:{ctx:A}}}),Zo=new Rt({props:{anchor:"transformers.TFLayoutLMv3ForQuestionAnswering.call.example",$$slots:{default:[iv]},$$scope:{ctx:A}}}),{c(){c=a("meta"),b=p(),g=a("h1"),m=a("a"),y=a("span"),k(l.$$.fragment),h=p(),E=a("span"),we=o("LayoutLMv3"),_e=p(),W=a("h2"),ae=a("a"),se=a("span"),k(L.$$.fragment),Te=p(),V=a("span"),xe=o("Overview"),ve=p(),S=a("p"),Me=o("The LayoutLMv3 model was proposed in "),ie=a("a"),K=o("LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),$e=o(` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),pe=a("a"),G=o("LayoutLMv2"),qe=o(" by using patch embeddings (as in "),ue=a("a"),X=o("ViT"),Fe=o(`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),ye=p(),ee=a("p"),C=o("The abstract from the paper is the following:"),P=p(),he=a("p"),H=a("em"),Ee=o("Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),be=p(),U=a("p"),ze=o("Tips:"),Le=p(),z=a("ul"),re=a("li"),Y=o("In terms of data processing, LayoutLMv3 is identical to its predecessor "),me=a("a"),Ce=o("LayoutLMv2"),J=o(", except that:"),le=a("ul"),fe=a("li"),B=o("images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),Ae=p(),I=a("li"),Pe=o(`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),te=a("a"),j=o("LayoutLMv3Processor"),je=o(" which internally combines a "),N=a("a"),Ne=o("LayoutLMv3FeatureExtractor"),Ie=o(" (for the image modality) and a "),_=a("a"),q=o("LayoutLMv3Tokenizer"),Ge=o("/"),oe=a("a"),Xe=o("LayoutLMv3TokenizerFast"),Ye=o(" (for the text modality) to prepare all data for the model."),F=p(),ge=a("li"),Je=o("Regarding usage of "),Re=a("a"),Ze=o("LayoutLMv3Processor"),et=o(", we refer to the "),D=a("a"),Z=o("usage guide"),tt=o(" of its predecessor."),ot=p(),Q=a("li"),nt=o("Demo notebooks for LayoutLMv3 can be found "),Se=a("a"),Oe=o("here"),st=o("."),de=p(),De=a("li"),Al=o("Demo scripts can be found "),vn=a("a"),Pl=o("here"),jl=o("."),Li=p(),fo=a("img"),ki=p(),go=a("small"),Nl=o("LayoutLMv3 architecture. Taken from the "),ea=a("a"),Il=o("original paper"),Sl=o("."),wi=p(),He=a("p"),Ol=o("This model was contributed by "),yn=a("a"),Dl=o("nielsr"),Wl=o(". The TensorFlow version of this model was added by "),bn=a("a"),Rl=o("chriskoo"),Bl=o(", "),Ln=a("a"),Ql=o("tokec"),Ul=o(", and "),kn=a("a"),Vl=o("lre"),Hl=o(". The original code can be found "),wn=a("a"),Kl=o("here"),Gl=o("."),Ti=p(),Ut=a("h2"),_o=a("a"),Ba=a("span"),k(Tn.$$.fragment),Xl=p(),Qa=a("span"),Yl=o("LayoutLMv3Config"),xi=p(),lt=a("div"),k(xn.$$.fragment),Jl=p(),Vt=a("p"),Zl=o("This is the configuration class to store the configuration of a "),ta=a("a"),ed=o("LayoutLMv3Model"),td=o(`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),Mn=a("a"),od=o("microsoft/layoutlmv3-base"),nd=o(" architecture."),sd=p(),Ht=a("p"),ad=o("Configuration objects inherit from "),oa=a("a"),rd=o("PretrainedConfig"),id=o(` and can be used to control the model outputs. Read the
documentation from `),na=a("a"),ld=o("PretrainedConfig"),dd=o(" for more information."),cd=p(),k(vo.$$.fragment),Mi=p(),Kt=a("h2"),yo=a("a"),Ua=a("span"),k($n.$$.fragment),pd=p(),Va=a("span"),ud=o("LayoutLMv3FeatureExtractor"),$i=p(),dt=a("div"),k(qn.$$.fragment),hd=p(),Ha=a("p"),md=o(`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),fd=p(),Fn=a("p"),gd=o("This feature extractor inherits from "),Ka=a("code"),_d=o("PreTrainedFeatureExtractor()"),vd=o(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),yd=p(),Nt=a("div"),k(En.$$.fragment),bd=p(),Ga=a("p"),Ld=o("Main method to prepare for the model one or several image(s)."),kd=p(),k(bo.$$.fragment),qi=p(),Gt=a("h2"),Lo=a("a"),Xa=a("span"),k(zn.$$.fragment),wd=p(),Ya=a("span"),Td=o("LayoutLMv3Tokenizer"),Fi=p(),Be=a("div"),k(Cn.$$.fragment),xd=p(),We=a("p"),Md=o("Construct a LayoutLMv3 tokenizer. Based on "),Ja=a("code"),$d=o("RoBERTatokenizer"),qd=o(` (Byte Pair Encoding or BPE).
`),sa=a("a"),Fd=o("LayoutLMv3Tokenizer"),Ed=o(` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),Za=a("code"),zd=o("input_ids"),Cd=o(", "),er=a("code"),Ad=o("attention_mask"),Pd=o(", "),tr=a("code"),jd=o("token_type_ids"),Nd=o(", "),or=a("code"),Id=o("bbox"),Sd=o(", and optional "),nr=a("code"),Od=o("labels"),Dd=o(` (for token
classification).`),Wd=p(),An=a("p"),Rd=o("This tokenizer inherits from "),aa=a("a"),Bd=o("PreTrainedTokenizer"),Qd=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ud=p(),ra=a("p"),ia=a("a"),Vd=o("LayoutLMv3Tokenizer"),Hd=o(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Kd=p(),ko=a("div"),k(Pn.$$.fragment),Gd=p(),sr=a("p"),Xd=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Yd=p(),la=a("div"),k(jn.$$.fragment),Ei=p(),Xt=a("h2"),wo=a("a"),ar=a("span"),k(Nn.$$.fragment),Jd=p(),rr=a("span"),Zd=o("LayoutLMv3TokenizerFast"),zi=p(),ct=a("div"),k(In.$$.fragment),ec=p(),Sn=a("p"),tc=o("Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),ir=a("em"),oc=o("tokenizers"),nc=o(" library). Based on BPE."),sc=p(),On=a("p"),ac=o("This tokenizer inherits from "),da=a("a"),rc=o("PreTrainedTokenizerFast"),ic=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),lc=p(),To=a("div"),k(Dn.$$.fragment),dc=p(),lr=a("p"),cc=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Ci=p(),Yt=a("h2"),xo=a("a"),dr=a("span"),k(Wn.$$.fragment),pc=p(),cr=a("span"),uc=o("LayoutLMv3Processor"),Ai=p(),at=a("div"),k(Rn.$$.fragment),hc=p(),pr=a("p"),mc=o(`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),fc=p(),ca=a("p"),pa=a("a"),gc=o("LayoutLMv3Processor"),_c=o(" offers all the functionalities you need to prepare data for the model."),vc=p(),ce=a("p"),yc=o("It first uses "),ua=a("a"),bc=o("LayoutLMv3FeatureExtractor"),Lc=o(` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),ha=a("a"),kc=o("LayoutLMv3Tokenizer"),wc=o(` or
`),ma=a("a"),Tc=o("LayoutLMv3TokenizerFast"),xc=o(", which turns the words and bounding boxes into token-level "),ur=a("code"),Mc=o("input_ids"),$c=o(`,
`),hr=a("code"),qc=o("attention_mask"),Fc=o(", "),mr=a("code"),Ec=o("token_type_ids"),zc=o(", "),fr=a("code"),Cc=o("bbox"),Ac=o(". Optionally, one can provide integer "),gr=a("code"),Pc=o("word_labels"),jc=o(`, which are turned
into token-level `),_r=a("code"),Nc=o("labels"),Ic=o(" for token classification tasks (such as FUNSD, CORD)."),Sc=p(),It=a("div"),k(Bn.$$.fragment),Oc=p(),O=a("p"),Dc=o("This method first forwards the "),vr=a("code"),Wc=o("images"),Rc=o(" argument to "),Qn=a("a"),yr=a("strong"),Bc=o("call"),Qc=o("()"),Uc=o(`. In case
`),fa=a("a"),Vc=o("LayoutLMv3FeatureExtractor"),Hc=o(" was initialized with "),br=a("code"),Kc=o("apply_ocr"),Gc=o(" set to "),Lr=a("code"),Xc=o("True"),Yc=o(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Un=a("a"),kr=a("strong"),Jc=o("call"),Zc=o("()"),ep=o(` and returns the output,
together with resized and normalized `),wr=a("code"),tp=o("pixel_values"),op=o(". In case "),ga=a("a"),np=o("LayoutLMv3FeatureExtractor"),sp=o(` was initialized
with `),Tr=a("code"),ap=o("apply_ocr"),rp=o(" set to "),xr=a("code"),ip=o("False"),lp=o(", it passes the words ("),Mr=a("code"),dp=o("text"),cp=o("/`"),$r=a("code"),pp=o("text_pair"),up=o(") and "),qr=a("code"),hp=o("boxes"),mp=o(` specified by the user
along with the additional arguments to `),Vn=a("a"),Fr=a("strong"),fp=o("call"),gp=o("()"),_p=o(` and returns the output, together with
resized and normalized `),Er=a("code"),vp=o("pixel_values"),yp=o("."),bp=p(),zr=a("p"),Lp=o("Please refer to the docstring of the above two methods for more information."),Pi=p(),Jt=a("h2"),Mo=a("a"),Cr=a("span"),k(Hn.$$.fragment),kp=p(),Ar=a("span"),wp=o("LayoutLMv3Model"),ji=p(),zt=a("div"),k(Kn.$$.fragment),Tp=p(),Gn=a("p"),xp=o(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xn=a("a"),Mp=o("torch.nn.Module"),$p=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qp=p(),_t=a("div"),k(Yn.$$.fragment),Fp=p(),Zt=a("p"),Ep=o("The "),_a=a("a"),zp=o("LayoutLMv3Model"),Cp=o(" forward method, overrides the "),Pr=a("code"),Ap=o("__call__"),Pp=o(" special method."),jp=p(),k($o.$$.fragment),Np=p(),k(qo.$$.fragment),Ni=p(),eo=a("h2"),Fo=a("a"),jr=a("span"),k(Jn.$$.fragment),Ip=p(),Nr=a("span"),Sp=o("LayoutLMv3ForSequenceClassification"),Ii=p(),pt=a("div"),k(Zn.$$.fragment),Op=p(),es=a("p"),Dp=o(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),ts=a("a"),Wp=o("RVL-CDIP"),Rp=o(" dataset."),Bp=p(),os=a("p"),Qp=o("This model is a PyTorch "),ns=a("a"),Up=o("torch.nn.Module"),Vp=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hp=p(),vt=a("div"),k(ss.$$.fragment),Kp=p(),to=a("p"),Gp=o("The "),va=a("a"),Xp=o("LayoutLMv3ForSequenceClassification"),Yp=o(" forward method, overrides the "),Ir=a("code"),Jp=o("__call__"),Zp=o(" special method."),eu=p(),k(Eo.$$.fragment),tu=p(),k(zo.$$.fragment),Si=p(),oo=a("h2"),Co=a("a"),Sr=a("span"),k(as.$$.fragment),ou=p(),Or=a("span"),nu=o("LayoutLMv3ForTokenClassification"),Oi=p(),ut=a("div"),k(rs.$$.fragment),su=p(),ht=a("p"),au=o(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),is=a("a"),ru=o("FUNSD"),iu=o(`,
`),ls=a("a"),lu=o("SROIE"),du=o(", "),ds=a("a"),cu=o("CORD"),pu=o(` and
`),cs=a("a"),uu=o("Kleister-NDA"),hu=o("."),mu=p(),ps=a("p"),fu=o("This model is a PyTorch "),us=a("a"),gu=o("torch.nn.Module"),_u=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vu=p(),yt=a("div"),k(hs.$$.fragment),yu=p(),no=a("p"),bu=o("The "),ya=a("a"),Lu=o("LayoutLMv3ForTokenClassification"),ku=o(" forward method, overrides the "),Dr=a("code"),wu=o("__call__"),Tu=o(" special method."),xu=p(),k(Ao.$$.fragment),Mu=p(),k(Po.$$.fragment),Di=p(),so=a("h2"),jo=a("a"),Wr=a("span"),k(ms.$$.fragment),$u=p(),Rr=a("span"),qu=o("LayoutLMv3ForQuestionAnswering"),Wi=p(),mt=a("div"),k(fs.$$.fragment),Fu=p(),Ct=a("p"),Eu=o(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),gs=a("a"),zu=o("DocVQA"),Cu=o(` (a linear layer on top of the text part of the hidden-states output to
compute `),Br=a("code"),Au=o("span start logits"),Pu=o(" and "),Qr=a("code"),ju=o("span end logits"),Nu=o(")."),Iu=p(),_s=a("p"),Su=o("This model is a PyTorch "),vs=a("a"),Ou=o("torch.nn.Module"),Du=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wu=p(),bt=a("div"),k(ys.$$.fragment),Ru=p(),ao=a("p"),Bu=o("The "),ba=a("a"),Qu=o("LayoutLMv3ForQuestionAnswering"),Uu=o(" forward method, overrides the "),Ur=a("code"),Vu=o("__call__"),Hu=o(" special method."),Ku=p(),k(No.$$.fragment),Gu=p(),k(Io.$$.fragment),Ri=p(),ro=a("h2"),So=a("a"),Vr=a("span"),k(bs.$$.fragment),Xu=p(),Hr=a("span"),Yu=o("TFLayoutLMv3Model"),Bi=p(),rt=a("div"),k(Ls.$$.fragment),Ju=p(),ks=a("p"),Zu=o(`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),La=a("a"),eh=o("TFPreTrainedModel"),th=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oh=p(),ws=a("p"),nh=o("This model is also a "),Ts=a("a"),sh=o("tf.keras.Model"),ah=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rh=p(),k(Oo.$$.fragment),ih=p(),Lt=a("div"),k(xs.$$.fragment),lh=p(),io=a("p"),dh=o("The "),ka=a("a"),ch=o("TFLayoutLMv3Model"),ph=o(" forward method, overrides the "),Kr=a("code"),uh=o("__call__"),hh=o(" special method."),mh=p(),k(Do.$$.fragment),fh=p(),k(Wo.$$.fragment),Qi=p(),lo=a("h2"),Ro=a("a"),Gr=a("span"),k(Ms.$$.fragment),gh=p(),Xr=a("span"),_h=o("TFLayoutLMv3ForSequenceClassification"),Ui=p(),Qe=a("div"),k($s.$$.fragment),vh=p(),qs=a("p"),yh=o(`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Fs=a("a"),bh=o("RVL-CDIP"),Lh=o(" dataset."),kh=p(),Es=a("p"),wh=o("This model inherits from "),wa=a("a"),Th=o("TFPreTrainedModel"),xh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mh=p(),zs=a("p"),$h=o("This model is also a "),Cs=a("a"),qh=o("tf.keras.Model"),Fh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Eh=p(),k(Bo.$$.fragment),zh=p(),kt=a("div"),k(As.$$.fragment),Ch=p(),co=a("p"),Ah=o("The "),Ta=a("a"),Ph=o("TFLayoutLMv3ForSequenceClassification"),jh=o(" forward method, overrides the "),Yr=a("code"),Nh=o("__call__"),Ih=o(" special method."),Sh=p(),k(Qo.$$.fragment),Oh=p(),k(Uo.$$.fragment),Vi=p(),po=a("h2"),Vo=a("a"),Jr=a("span"),k(Ps.$$.fragment),Dh=p(),Zr=a("span"),Wh=o("TFLayoutLMv3ForTokenClassification"),Hi=p(),Ue=a("div"),k(js.$$.fragment),Rh=p(),ft=a("p"),Bh=o(`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Ns=a("a"),Qh=o("FUNSD"),Uh=o(`,
`),Is=a("a"),Vh=o("SROIE"),Hh=o(", "),Ss=a("a"),Kh=o("CORD"),Gh=o(` and
`),Os=a("a"),Xh=o("Kleister-NDA"),Yh=o("."),Jh=p(),Ds=a("p"),Zh=o("This model inherits from "),xa=a("a"),em=o("TFPreTrainedModel"),tm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),om=p(),Ws=a("p"),nm=o("This model is also a "),Rs=a("a"),sm=o("tf.keras.Model"),am=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rm=p(),k(Ho.$$.fragment),im=p(),wt=a("div"),k(Bs.$$.fragment),lm=p(),uo=a("p"),dm=o("The "),Ma=a("a"),cm=o("TFLayoutLMv3ForTokenClassification"),pm=o(" forward method, overrides the "),ei=a("code"),um=o("__call__"),hm=o(" special method."),mm=p(),k(Ko.$$.fragment),fm=p(),k(Go.$$.fragment),Ki=p(),ho=a("h2"),Xo=a("a"),ti=a("span"),k(Qs.$$.fragment),gm=p(),oi=a("span"),_m=o("TFLayoutLMv3ForQuestionAnswering"),Gi=p(),Ve=a("div"),k(Us.$$.fragment),vm=p(),At=a("p"),ym=o(`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),Vs=a("a"),bm=o("DocVQA"),Lm=o(` (a linear layer on top of the text part of the hidden-states output to
compute `),ni=a("code"),km=o("span start logits"),wm=o(" and "),si=a("code"),Tm=o("span end logits"),xm=o(")."),Mm=p(),Hs=a("p"),$m=o("This model inherits from "),$a=a("a"),qm=o("TFPreTrainedModel"),Fm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Em=p(),Ks=a("p"),zm=o("This model is also a "),Gs=a("a"),Cm=o("tf.keras.Model"),Am=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pm=p(),k(Yo.$$.fragment),jm=p(),Tt=a("div"),k(Xs.$$.fragment),Nm=p(),mo=a("p"),Im=o("The "),qa=a("a"),Sm=o("TFLayoutLMv3ForQuestionAnswering"),Om=o(" forward method, overrides the "),ai=a("code"),Dm=o("__call__"),Wm=o(" special method."),Rm=p(),k(Jo.$$.fragment),Bm=p(),k(Zo.$$.fragment),this.h()},l(s){const v=I_('[data-svelte="svelte-1phssyn"]',document.head);c=r(v,"META",{name:!0,content:!0}),v.forEach(t),b=u(s),g=r(s,"H1",{class:!0});var Ys=i(g);m=r(Ys,"A",{id:!0,class:!0,href:!0});var ri=i(m);y=r(ri,"SPAN",{});var ii=i(y);w(l.$$.fragment,ii),ii.forEach(t),ri.forEach(t),h=u(Ys),E=r(Ys,"SPAN",{});var li=i(E);we=n(li,"LayoutLMv3"),li.forEach(t),Ys.forEach(t),_e=u(s),W=r(s,"H2",{class:!0});var Js=i(W);ae=r(Js,"A",{id:!0,class:!0,href:!0});var di=i(ae);se=r(di,"SPAN",{});var ci=i(se);w(L.$$.fragment,ci),ci.forEach(t),di.forEach(t),Te=u(Js),V=r(Js,"SPAN",{});var pi=i(V);xe=n(pi,"Overview"),pi.forEach(t),Js.forEach(t),ve=u(s),S=r(s,"P",{});var Pt=i(S);Me=n(Pt,"The LayoutLMv3 model was proposed in "),ie=r(Pt,"A",{href:!0,rel:!0});var ui=i(ie);K=n(ui,"LayoutLMv3: Pre-training for Document AI with Unified Text and Image Masking"),ui.forEach(t),$e=n(Pt,` by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
LayoutLMv3 simplifies `),pe=r(Pt,"A",{href:!0});var hi=i(pe);G=n(hi,"LayoutLMv2"),hi.forEach(t),qe=n(Pt," by using patch embeddings (as in "),ue=r(Pt,"A",{href:!0});var mi=i(ue);X=n(mi,"ViT"),mi.forEach(t),Fe=n(Pt,`) instead of leveraging a CNN backbone, and pre-trains the model on 3 objectives: masked language modeling (MLM), masked image modeling (MIM)
and word-patch alignment (WPA).`),Pt.forEach(t),ye=u(s),ee=r(s,"P",{});var fi=i(ee);C=n(fi,"The abstract from the paper is the following:"),fi.forEach(t),P=u(s),he=r(s,"P",{});var gi=i(he);H=r(gi,"EM",{});var _i=i(H);Ee=n(_i,"Self-supervised pre-training techniques have achieved remarkable progress in Document AI. Most multimodal pre-trained models use a masked language modeling objective to learn bidirectional representations on the text modality, but they differ in pre-training objectives for the image modality. This discrepancy adds difficulty to multimodal representation learning. In this paper, we propose LayoutLMv3 to pre-train multimodal Transformers for Document AI with unified text and image masking. Additionally, LayoutLMv3 is pre-trained with a word-patch alignment objective to learn cross-modal alignment by predicting whether the corresponding image patch of a text word is masked. The simple unified architecture and training objectives make LayoutLMv3 a general-purpose pre-trained model for both text-centric and image-centric Document AI tasks. Experimental results show that LayoutLMv3 achieves state-of-the-art performance not only in text-centric tasks, including form understanding, receipt understanding, and document visual question answering, but also in image-centric tasks such as document image classification and document layout analysis."),_i.forEach(t),gi.forEach(t),be=u(s),U=r(s,"P",{});var vi=i(U);ze=n(vi,"Tips:"),vi.forEach(t),Le=u(s),z=r(s,"UL",{});var jt=i(z);re=r(jt,"LI",{});var en=i(re);Y=n(en,"In terms of data processing, LayoutLMv3 is identical to its predecessor "),me=r(en,"A",{href:!0});var yi=i(me);Ce=n(yi,"LayoutLMv2"),yi.forEach(t),J=n(en,", except that:"),le=r(en,"UL",{});var Zs=i(le);fe=r(Zs,"LI",{});var bi=i(fe);B=n(bi,"images need to be resized and normalized with channels in regular RGB format. LayoutLMv2 on the other hand normalizes the images internally and expects the channels in BGR format."),bi.forEach(t),Ae=u(Zs),I=r(Zs,"LI",{});var gt=i(I);Pe=n(gt,`text is tokenized using byte-pair encoding (BPE), as opposed to WordPiece.
Due to these differences in data preprocessing, one can use `),te=r(gt,"A",{href:!0});var Xm=i(te);j=n(Xm,"LayoutLMv3Processor"),Xm.forEach(t),je=n(gt," which internally combines a "),N=r(gt,"A",{href:!0});var Ym=i(N);Ne=n(Ym,"LayoutLMv3FeatureExtractor"),Ym.forEach(t),Ie=n(gt," (for the image modality) and a "),_=r(gt,"A",{href:!0});var Jm=i(_);q=n(Jm,"LayoutLMv3Tokenizer"),Jm.forEach(t),Ge=n(gt,"/"),oe=r(gt,"A",{href:!0});var Zm=i(oe);Xe=n(Zm,"LayoutLMv3TokenizerFast"),Zm.forEach(t),Ye=n(gt," (for the text modality) to prepare all data for the model."),gt.forEach(t),Zs.forEach(t),en.forEach(t),F=u(jt),ge=r(jt,"LI",{});var Fa=i(ge);Je=n(Fa,"Regarding usage of "),Re=r(Fa,"A",{href:!0});var ef=i(Re);Ze=n(ef,"LayoutLMv3Processor"),ef.forEach(t),et=n(Fa,", we refer to the "),D=r(Fa,"A",{href:!0});var tf=i(D);Z=n(tf,"usage guide"),tf.forEach(t),tt=n(Fa," of its predecessor."),Fa.forEach(t),ot=u(jt),Q=r(jt,"LI",{});var Yi=i(Q);nt=n(Yi,"Demo notebooks for LayoutLMv3 can be found "),Se=r(Yi,"A",{href:!0,rel:!0});var of=i(Se);Oe=n(of,"here"),of.forEach(t),st=n(Yi,"."),Yi.forEach(t),de=u(jt),De=r(jt,"LI",{});var Ji=i(De);Al=n(Ji,"Demo scripts can be found "),vn=r(Ji,"A",{href:!0,rel:!0});var nf=i(vn);Pl=n(nf,"here"),nf.forEach(t),jl=n(Ji,"."),Ji.forEach(t),jt.forEach(t),Li=u(s),fo=r(s,"IMG",{src:!0,alt:!0,width:!0}),ki=u(s),go=r(s,"SMALL",{});var Zi=i(go);Nl=n(Zi,"LayoutLMv3 architecture. Taken from the "),ea=r(Zi,"A",{href:!0});var sf=i(ea);Il=n(sf,"original paper"),sf.forEach(t),Sl=n(Zi,"."),Zi.forEach(t),wi=u(s),He=r(s,"P",{});var xt=i(He);Ol=n(xt,"This model was contributed by "),yn=r(xt,"A",{href:!0,rel:!0});var af=i(yn);Dl=n(af,"nielsr"),af.forEach(t),Wl=n(xt,". The TensorFlow version of this model was added by "),bn=r(xt,"A",{href:!0,rel:!0});var rf=i(bn);Rl=n(rf,"chriskoo"),rf.forEach(t),Bl=n(xt,", "),Ln=r(xt,"A",{href:!0,rel:!0});var lf=i(Ln);Ql=n(lf,"tokec"),lf.forEach(t),Ul=n(xt,", and "),kn=r(xt,"A",{href:!0,rel:!0});var df=i(kn);Vl=n(df,"lre"),df.forEach(t),Hl=n(xt,". The original code can be found "),wn=r(xt,"A",{href:!0,rel:!0});var cf=i(wn);Kl=n(cf,"here"),cf.forEach(t),Gl=n(xt,"."),xt.forEach(t),Ti=u(s),Ut=r(s,"H2",{class:!0});var el=i(Ut);_o=r(el,"A",{id:!0,class:!0,href:!0});var pf=i(_o);Ba=r(pf,"SPAN",{});var uf=i(Ba);w(Tn.$$.fragment,uf),uf.forEach(t),pf.forEach(t),Xl=u(el),Qa=r(el,"SPAN",{});var hf=i(Qa);Yl=n(hf,"LayoutLMv3Config"),hf.forEach(t),el.forEach(t),xi=u(s),lt=r(s,"DIV",{class:!0});var tn=i(lt);w(xn.$$.fragment,tn),Jl=u(tn),Vt=r(tn,"P",{});var Ea=i(Vt);Zl=n(Ea,"This is the configuration class to store the configuration of a "),ta=r(Ea,"A",{href:!0});var mf=i(ta);ed=n(mf,"LayoutLMv3Model"),mf.forEach(t),td=n(Ea,`. It is used to instantiate an
LayoutLMv3 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv3
`),Mn=r(Ea,"A",{href:!0,rel:!0});var ff=i(Mn);od=n(ff,"microsoft/layoutlmv3-base"),ff.forEach(t),nd=n(Ea," architecture."),Ea.forEach(t),sd=u(tn),Ht=r(tn,"P",{});var za=i(Ht);ad=n(za,"Configuration objects inherit from "),oa=r(za,"A",{href:!0});var gf=i(oa);rd=n(gf,"PretrainedConfig"),gf.forEach(t),id=n(za,` and can be used to control the model outputs. Read the
documentation from `),na=r(za,"A",{href:!0});var _f=i(na);ld=n(_f,"PretrainedConfig"),_f.forEach(t),dd=n(za," for more information."),za.forEach(t),cd=u(tn),w(vo.$$.fragment,tn),tn.forEach(t),Mi=u(s),Kt=r(s,"H2",{class:!0});var tl=i(Kt);yo=r(tl,"A",{id:!0,class:!0,href:!0});var vf=i(yo);Ua=r(vf,"SPAN",{});var yf=i(Ua);w($n.$$.fragment,yf),yf.forEach(t),vf.forEach(t),pd=u(tl),Va=r(tl,"SPAN",{});var bf=i(Va);ud=n(bf,"LayoutLMv3FeatureExtractor"),bf.forEach(t),tl.forEach(t),$i=u(s),dt=r(s,"DIV",{class:!0});var on=i(dt);w(qn.$$.fragment,on),hd=u(on),Ha=r(on,"P",{});var Lf=i(Ha);md=n(Lf,`Constructs a LayoutLMv3 feature extractor. This can be used to resize + normalize document images, as well as to
apply OCR on them in order to get a list of words and normalized bounding boxes.`),Lf.forEach(t),fd=u(on),Fn=r(on,"P",{});var ol=i(Fn);gd=n(ol,"This feature extractor inherits from "),Ka=r(ol,"CODE",{});var kf=i(Ka);_d=n(kf,"PreTrainedFeatureExtractor()"),kf.forEach(t),vd=n(ol,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),ol.forEach(t),yd=u(on),Nt=r(on,"DIV",{class:!0});var Ca=i(Nt);w(En.$$.fragment,Ca),bd=u(Ca),Ga=r(Ca,"P",{});var wf=i(Ga);Ld=n(wf,"Main method to prepare for the model one or several image(s)."),wf.forEach(t),kd=u(Ca),w(bo.$$.fragment,Ca),Ca.forEach(t),on.forEach(t),qi=u(s),Gt=r(s,"H2",{class:!0});var nl=i(Gt);Lo=r(nl,"A",{id:!0,class:!0,href:!0});var Tf=i(Lo);Xa=r(Tf,"SPAN",{});var xf=i(Xa);w(zn.$$.fragment,xf),xf.forEach(t),Tf.forEach(t),wd=u(nl),Ya=r(nl,"SPAN",{});var Mf=i(Ya);Td=n(Mf,"LayoutLMv3Tokenizer"),Mf.forEach(t),nl.forEach(t),Fi=u(s),Be=r(s,"DIV",{class:!0});var Mt=i(Be);w(Cn.$$.fragment,Mt),xd=u(Mt),We=r(Mt,"P",{});var Ke=i(We);Md=n(Ke,"Construct a LayoutLMv3 tokenizer. Based on "),Ja=r(Ke,"CODE",{});var $f=i(Ja);$d=n($f,"RoBERTatokenizer"),$f.forEach(t),qd=n(Ke,` (Byte Pair Encoding or BPE).
`),sa=r(Ke,"A",{href:!0});var qf=i(sa);Fd=n(qf,"LayoutLMv3Tokenizer"),qf.forEach(t),Ed=n(Ke,` can be used to turn words, word-level bounding boxes and optional word labels to
token-level `),Za=r(Ke,"CODE",{});var Ff=i(Za);zd=n(Ff,"input_ids"),Ff.forEach(t),Cd=n(Ke,", "),er=r(Ke,"CODE",{});var Ef=i(er);Ad=n(Ef,"attention_mask"),Ef.forEach(t),Pd=n(Ke,", "),tr=r(Ke,"CODE",{});var zf=i(tr);jd=n(zf,"token_type_ids"),zf.forEach(t),Nd=n(Ke,", "),or=r(Ke,"CODE",{});var Cf=i(or);Id=n(Cf,"bbox"),Cf.forEach(t),Sd=n(Ke,", and optional "),nr=r(Ke,"CODE",{});var Af=i(nr);Od=n(Af,"labels"),Af.forEach(t),Dd=n(Ke,` (for token
classification).`),Ke.forEach(t),Wd=u(Mt),An=r(Mt,"P",{});var sl=i(An);Rd=n(sl,"This tokenizer inherits from "),aa=r(sl,"A",{href:!0});var Pf=i(aa);Bd=n(Pf,"PreTrainedTokenizer"),Pf.forEach(t),Qd=n(sl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),sl.forEach(t),Ud=u(Mt),ra=r(Mt,"P",{});var Qm=i(ra);ia=r(Qm,"A",{href:!0});var jf=i(ia);Vd=n(jf,"LayoutLMv3Tokenizer"),jf.forEach(t),Hd=n(Qm,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Qm.forEach(t),Kd=u(Mt),ko=r(Mt,"DIV",{class:!0});var al=i(ko);w(Pn.$$.fragment,al),Gd=u(al),sr=r(al,"P",{});var Nf=i(sr);Xd=n(Nf,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Nf.forEach(t),al.forEach(t),Yd=u(Mt),la=r(Mt,"DIV",{class:!0});var If=i(la);w(jn.$$.fragment,If),If.forEach(t),Mt.forEach(t),Ei=u(s),Xt=r(s,"H2",{class:!0});var rl=i(Xt);wo=r(rl,"A",{id:!0,class:!0,href:!0});var Sf=i(wo);ar=r(Sf,"SPAN",{});var Of=i(ar);w(Nn.$$.fragment,Of),Of.forEach(t),Sf.forEach(t),Jd=u(rl),rr=r(rl,"SPAN",{});var Df=i(rr);Zd=n(Df,"LayoutLMv3TokenizerFast"),Df.forEach(t),rl.forEach(t),zi=u(s),ct=r(s,"DIV",{class:!0});var nn=i(ct);w(In.$$.fragment,nn),ec=u(nn),Sn=r(nn,"P",{});var il=i(Sn);tc=n(il,"Construct a \u201Cfast\u201D LayoutLMv3 tokenizer (backed by HuggingFace\u2019s "),ir=r(il,"EM",{});var Wf=i(ir);oc=n(Wf,"tokenizers"),Wf.forEach(t),nc=n(il," library). Based on BPE."),il.forEach(t),sc=u(nn),On=r(nn,"P",{});var ll=i(On);ac=n(ll,"This tokenizer inherits from "),da=r(ll,"A",{href:!0});var Rf=i(da);rc=n(Rf,"PreTrainedTokenizerFast"),Rf.forEach(t),ic=n(ll,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ll.forEach(t),lc=u(nn),To=r(nn,"DIV",{class:!0});var dl=i(To);w(Dn.$$.fragment,dl),dc=u(dl),lr=r(dl,"P",{});var Bf=i(lr);cc=n(Bf,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Bf.forEach(t),dl.forEach(t),nn.forEach(t),Ci=u(s),Yt=r(s,"H2",{class:!0});var cl=i(Yt);xo=r(cl,"A",{id:!0,class:!0,href:!0});var Qf=i(xo);dr=r(Qf,"SPAN",{});var Uf=i(dr);w(Wn.$$.fragment,Uf),Uf.forEach(t),Qf.forEach(t),pc=u(cl),cr=r(cl,"SPAN",{});var Vf=i(cr);uc=n(Vf,"LayoutLMv3Processor"),Vf.forEach(t),cl.forEach(t),Ai=u(s),at=r(s,"DIV",{class:!0});var St=i(at);w(Rn.$$.fragment,St),hc=u(St),pr=r(St,"P",{});var Hf=i(pr);mc=n(Hf,`Constructs a LayoutLMv3 processor which combines a LayoutLMv3 feature extractor and a LayoutLMv3 tokenizer into a
single processor.`),Hf.forEach(t),fc=u(St),ca=r(St,"P",{});var Um=i(ca);pa=r(Um,"A",{href:!0});var Kf=i(pa);gc=n(Kf,"LayoutLMv3Processor"),Kf.forEach(t),_c=n(Um," offers all the functionalities you need to prepare data for the model."),Um.forEach(t),vc=u(St),ce=r(St,"P",{});var ke=i(ce);yc=n(ke,"It first uses "),ua=r(ke,"A",{href:!0});var Gf=i(ua);bc=n(Gf,"LayoutLMv3FeatureExtractor"),Gf.forEach(t),Lc=n(ke,` to resize and normalize document images, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to `),ha=r(ke,"A",{href:!0});var Xf=i(ha);kc=n(Xf,"LayoutLMv3Tokenizer"),Xf.forEach(t),wc=n(ke,` or
`),ma=r(ke,"A",{href:!0});var Yf=i(ma);Tc=n(Yf,"LayoutLMv3TokenizerFast"),Yf.forEach(t),xc=n(ke,", which turns the words and bounding boxes into token-level "),ur=r(ke,"CODE",{});var Jf=i(ur);Mc=n(Jf,"input_ids"),Jf.forEach(t),$c=n(ke,`,
`),hr=r(ke,"CODE",{});var Zf=i(hr);qc=n(Zf,"attention_mask"),Zf.forEach(t),Fc=n(ke,", "),mr=r(ke,"CODE",{});var eg=i(mr);Ec=n(eg,"token_type_ids"),eg.forEach(t),zc=n(ke,", "),fr=r(ke,"CODE",{});var tg=i(fr);Cc=n(tg,"bbox"),tg.forEach(t),Ac=n(ke,". Optionally, one can provide integer "),gr=r(ke,"CODE",{});var og=i(gr);Pc=n(og,"word_labels"),og.forEach(t),jc=n(ke,`, which are turned
into token-level `),_r=r(ke,"CODE",{});var ng=i(_r);Nc=n(ng,"labels"),ng.forEach(t),Ic=n(ke," for token classification tasks (such as FUNSD, CORD)."),ke.forEach(t),Sc=u(St),It=r(St,"DIV",{class:!0});var Aa=i(It);w(Bn.$$.fragment,Aa),Oc=u(Aa),O=r(Aa,"P",{});var R=i(O);Dc=n(R,"This method first forwards the "),vr=r(R,"CODE",{});var sg=i(vr);Wc=n(sg,"images"),sg.forEach(t),Rc=n(R," argument to "),Qn=r(R,"A",{href:!0});var Vm=i(Qn);yr=r(Vm,"STRONG",{});var ag=i(yr);Bc=n(ag,"call"),ag.forEach(t),Qc=n(Vm,"()"),Vm.forEach(t),Uc=n(R,`. In case
`),fa=r(R,"A",{href:!0});var rg=i(fa);Vc=n(rg,"LayoutLMv3FeatureExtractor"),rg.forEach(t),Hc=n(R," was initialized with "),br=r(R,"CODE",{});var ig=i(br);Kc=n(ig,"apply_ocr"),ig.forEach(t),Gc=n(R," set to "),Lr=r(R,"CODE",{});var lg=i(Lr);Xc=n(lg,"True"),lg.forEach(t),Yc=n(R,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Un=r(R,"A",{href:!0});var Hm=i(Un);kr=r(Hm,"STRONG",{});var dg=i(kr);Jc=n(dg,"call"),dg.forEach(t),Zc=n(Hm,"()"),Hm.forEach(t),ep=n(R,` and returns the output,
together with resized and normalized `),wr=r(R,"CODE",{});var cg=i(wr);tp=n(cg,"pixel_values"),cg.forEach(t),op=n(R,". In case "),ga=r(R,"A",{href:!0});var pg=i(ga);np=n(pg,"LayoutLMv3FeatureExtractor"),pg.forEach(t),sp=n(R,` was initialized
with `),Tr=r(R,"CODE",{});var ug=i(Tr);ap=n(ug,"apply_ocr"),ug.forEach(t),rp=n(R," set to "),xr=r(R,"CODE",{});var hg=i(xr);ip=n(hg,"False"),hg.forEach(t),lp=n(R,", it passes the words ("),Mr=r(R,"CODE",{});var mg=i(Mr);dp=n(mg,"text"),mg.forEach(t),cp=n(R,"/`"),$r=r(R,"CODE",{});var fg=i($r);pp=n(fg,"text_pair"),fg.forEach(t),up=n(R,") and "),qr=r(R,"CODE",{});var gg=i(qr);hp=n(gg,"boxes"),gg.forEach(t),mp=n(R,` specified by the user
along with the additional arguments to `),Vn=r(R,"A",{href:!0});var Km=i(Vn);Fr=r(Km,"STRONG",{});var _g=i(Fr);fp=n(_g,"call"),_g.forEach(t),gp=n(Km,"()"),Km.forEach(t),_p=n(R,` and returns the output, together with
resized and normalized `),Er=r(R,"CODE",{});var vg=i(Er);vp=n(vg,"pixel_values"),vg.forEach(t),yp=n(R,"."),R.forEach(t),bp=u(Aa),zr=r(Aa,"P",{});var yg=i(zr);Lp=n(yg,"Please refer to the docstring of the above two methods for more information."),yg.forEach(t),Aa.forEach(t),St.forEach(t),Pi=u(s),Jt=r(s,"H2",{class:!0});var pl=i(Jt);Mo=r(pl,"A",{id:!0,class:!0,href:!0});var bg=i(Mo);Cr=r(bg,"SPAN",{});var Lg=i(Cr);w(Hn.$$.fragment,Lg),Lg.forEach(t),bg.forEach(t),kp=u(pl),Ar=r(pl,"SPAN",{});var kg=i(Ar);wp=n(kg,"LayoutLMv3Model"),kg.forEach(t),pl.forEach(t),ji=u(s),zt=r(s,"DIV",{class:!0});var Pa=i(zt);w(Kn.$$.fragment,Pa),Tp=u(Pa),Gn=r(Pa,"P",{});var ul=i(Gn);xp=n(ul,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xn=r(ul,"A",{href:!0,rel:!0});var wg=i(Xn);Mp=n(wg,"torch.nn.Module"),wg.forEach(t),$p=n(ul,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ul.forEach(t),qp=u(Pa),_t=r(Pa,"DIV",{class:!0});var sn=i(_t);w(Yn.$$.fragment,sn),Fp=u(sn),Zt=r(sn,"P",{});var ja=i(Zt);Ep=n(ja,"The "),_a=r(ja,"A",{href:!0});var Tg=i(_a);zp=n(Tg,"LayoutLMv3Model"),Tg.forEach(t),Cp=n(ja," forward method, overrides the "),Pr=r(ja,"CODE",{});var xg=i(Pr);Ap=n(xg,"__call__"),xg.forEach(t),Pp=n(ja," special method."),ja.forEach(t),jp=u(sn),w($o.$$.fragment,sn),Np=u(sn),w(qo.$$.fragment,sn),sn.forEach(t),Pa.forEach(t),Ni=u(s),eo=r(s,"H2",{class:!0});var hl=i(eo);Fo=r(hl,"A",{id:!0,class:!0,href:!0});var Mg=i(Fo);jr=r(Mg,"SPAN",{});var $g=i(jr);w(Jn.$$.fragment,$g),$g.forEach(t),Mg.forEach(t),Ip=u(hl),Nr=r(hl,"SPAN",{});var qg=i(Nr);Sp=n(qg,"LayoutLMv3ForSequenceClassification"),qg.forEach(t),hl.forEach(t),Ii=u(s),pt=r(s,"DIV",{class:!0});var an=i(pt);w(Zn.$$.fragment,an),Op=u(an),es=r(an,"P",{});var ml=i(es);Dp=n(ml,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),ts=r(ml,"A",{href:!0,rel:!0});var Fg=i(ts);Wp=n(Fg,"RVL-CDIP"),Fg.forEach(t),Rp=n(ml," dataset."),ml.forEach(t),Bp=u(an),os=r(an,"P",{});var fl=i(os);Qp=n(fl,"This model is a PyTorch "),ns=r(fl,"A",{href:!0,rel:!0});var Eg=i(ns);Up=n(Eg,"torch.nn.Module"),Eg.forEach(t),Vp=n(fl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fl.forEach(t),Hp=u(an),vt=r(an,"DIV",{class:!0});var rn=i(vt);w(ss.$$.fragment,rn),Kp=u(rn),to=r(rn,"P",{});var Na=i(to);Gp=n(Na,"The "),va=r(Na,"A",{href:!0});var zg=i(va);Xp=n(zg,"LayoutLMv3ForSequenceClassification"),zg.forEach(t),Yp=n(Na," forward method, overrides the "),Ir=r(Na,"CODE",{});var Cg=i(Ir);Jp=n(Cg,"__call__"),Cg.forEach(t),Zp=n(Na," special method."),Na.forEach(t),eu=u(rn),w(Eo.$$.fragment,rn),tu=u(rn),w(zo.$$.fragment,rn),rn.forEach(t),an.forEach(t),Si=u(s),oo=r(s,"H2",{class:!0});var gl=i(oo);Co=r(gl,"A",{id:!0,class:!0,href:!0});var Ag=i(Co);Sr=r(Ag,"SPAN",{});var Pg=i(Sr);w(as.$$.fragment,Pg),Pg.forEach(t),Ag.forEach(t),ou=u(gl),Or=r(gl,"SPAN",{});var jg=i(Or);nu=n(jg,"LayoutLMv3ForTokenClassification"),jg.forEach(t),gl.forEach(t),Oi=u(s),ut=r(s,"DIV",{class:!0});var ln=i(ut);w(rs.$$.fragment,ln),su=u(ln),ht=r(ln,"P",{});var Ot=i(ht);au=n(Ot,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),is=r(Ot,"A",{href:!0,rel:!0});var Ng=i(is);ru=n(Ng,"FUNSD"),Ng.forEach(t),iu=n(Ot,`,
`),ls=r(Ot,"A",{href:!0,rel:!0});var Ig=i(ls);lu=n(Ig,"SROIE"),Ig.forEach(t),du=n(Ot,", "),ds=r(Ot,"A",{href:!0,rel:!0});var Sg=i(ds);cu=n(Sg,"CORD"),Sg.forEach(t),pu=n(Ot,` and
`),cs=r(Ot,"A",{href:!0,rel:!0});var Og=i(cs);uu=n(Og,"Kleister-NDA"),Og.forEach(t),hu=n(Ot,"."),Ot.forEach(t),mu=u(ln),ps=r(ln,"P",{});var _l=i(ps);fu=n(_l,"This model is a PyTorch "),us=r(_l,"A",{href:!0,rel:!0});var Dg=i(us);gu=n(Dg,"torch.nn.Module"),Dg.forEach(t),_u=n(_l,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_l.forEach(t),vu=u(ln),yt=r(ln,"DIV",{class:!0});var dn=i(yt);w(hs.$$.fragment,dn),yu=u(dn),no=r(dn,"P",{});var Ia=i(no);bu=n(Ia,"The "),ya=r(Ia,"A",{href:!0});var Wg=i(ya);Lu=n(Wg,"LayoutLMv3ForTokenClassification"),Wg.forEach(t),ku=n(Ia," forward method, overrides the "),Dr=r(Ia,"CODE",{});var Rg=i(Dr);wu=n(Rg,"__call__"),Rg.forEach(t),Tu=n(Ia," special method."),Ia.forEach(t),xu=u(dn),w(Ao.$$.fragment,dn),Mu=u(dn),w(Po.$$.fragment,dn),dn.forEach(t),ln.forEach(t),Di=u(s),so=r(s,"H2",{class:!0});var vl=i(so);jo=r(vl,"A",{id:!0,class:!0,href:!0});var Bg=i(jo);Wr=r(Bg,"SPAN",{});var Qg=i(Wr);w(ms.$$.fragment,Qg),Qg.forEach(t),Bg.forEach(t),$u=u(vl),Rr=r(vl,"SPAN",{});var Ug=i(Rr);qu=n(Ug,"LayoutLMv3ForQuestionAnswering"),Ug.forEach(t),vl.forEach(t),Wi=u(s),mt=r(s,"DIV",{class:!0});var cn=i(mt);w(fs.$$.fragment,cn),Fu=u(cn),Ct=r(cn,"P",{});var pn=i(Ct);Eu=n(pn,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),gs=r(pn,"A",{href:!0,rel:!0});var Vg=i(gs);zu=n(Vg,"DocVQA"),Vg.forEach(t),Cu=n(pn,` (a linear layer on top of the text part of the hidden-states output to
compute `),Br=r(pn,"CODE",{});var Hg=i(Br);Au=n(Hg,"span start logits"),Hg.forEach(t),Pu=n(pn," and "),Qr=r(pn,"CODE",{});var Kg=i(Qr);ju=n(Kg,"span end logits"),Kg.forEach(t),Nu=n(pn,")."),pn.forEach(t),Iu=u(cn),_s=r(cn,"P",{});var yl=i(_s);Su=n(yl,"This model is a PyTorch "),vs=r(yl,"A",{href:!0,rel:!0});var Gg=i(vs);Ou=n(Gg,"torch.nn.Module"),Gg.forEach(t),Du=n(yl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yl.forEach(t),Wu=u(cn),bt=r(cn,"DIV",{class:!0});var un=i(bt);w(ys.$$.fragment,un),Ru=u(un),ao=r(un,"P",{});var Sa=i(ao);Bu=n(Sa,"The "),ba=r(Sa,"A",{href:!0});var Xg=i(ba);Qu=n(Xg,"LayoutLMv3ForQuestionAnswering"),Xg.forEach(t),Uu=n(Sa," forward method, overrides the "),Ur=r(Sa,"CODE",{});var Yg=i(Ur);Vu=n(Yg,"__call__"),Yg.forEach(t),Hu=n(Sa," special method."),Sa.forEach(t),Ku=u(un),w(No.$$.fragment,un),Gu=u(un),w(Io.$$.fragment,un),un.forEach(t),cn.forEach(t),Ri=u(s),ro=r(s,"H2",{class:!0});var bl=i(ro);So=r(bl,"A",{id:!0,class:!0,href:!0});var Jg=i(So);Vr=r(Jg,"SPAN",{});var Zg=i(Vr);w(bs.$$.fragment,Zg),Zg.forEach(t),Jg.forEach(t),Xu=u(bl),Hr=r(bl,"SPAN",{});var e_=i(Hr);Yu=n(e_,"TFLayoutLMv3Model"),e_.forEach(t),bl.forEach(t),Bi=u(s),rt=r(s,"DIV",{class:!0});var Dt=i(rt);w(Ls.$$.fragment,Dt),Ju=u(Dt),ks=r(Dt,"P",{});var Ll=i(ks);Zu=n(Ll,`The bare LayoutLMv3 Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),La=r(Ll,"A",{href:!0});var t_=i(La);eh=n(t_,"TFPreTrainedModel"),t_.forEach(t),th=n(Ll,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ll.forEach(t),oh=u(Dt),ws=r(Dt,"P",{});var kl=i(ws);nh=n(kl,"This model is also a "),Ts=r(kl,"A",{href:!0,rel:!0});var o_=i(Ts);sh=n(o_,"tf.keras.Model"),o_.forEach(t),ah=n(kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kl.forEach(t),rh=u(Dt),w(Oo.$$.fragment,Dt),ih=u(Dt),Lt=r(Dt,"DIV",{class:!0});var hn=i(Lt);w(xs.$$.fragment,hn),lh=u(hn),io=r(hn,"P",{});var Oa=i(io);dh=n(Oa,"The "),ka=r(Oa,"A",{href:!0});var n_=i(ka);ch=n(n_,"TFLayoutLMv3Model"),n_.forEach(t),ph=n(Oa," forward method, overrides the "),Kr=r(Oa,"CODE",{});var s_=i(Kr);uh=n(s_,"__call__"),s_.forEach(t),hh=n(Oa," special method."),Oa.forEach(t),mh=u(hn),w(Do.$$.fragment,hn),fh=u(hn),w(Wo.$$.fragment,hn),hn.forEach(t),Dt.forEach(t),Qi=u(s),lo=r(s,"H2",{class:!0});var wl=i(lo);Ro=r(wl,"A",{id:!0,class:!0,href:!0});var a_=i(Ro);Gr=r(a_,"SPAN",{});var r_=i(Gr);w(Ms.$$.fragment,r_),r_.forEach(t),a_.forEach(t),gh=u(wl),Xr=r(wl,"SPAN",{});var i_=i(Xr);_h=n(i_,"TFLayoutLMv3ForSequenceClassification"),i_.forEach(t),wl.forEach(t),Ui=u(s),Qe=r(s,"DIV",{class:!0});var $t=i(Qe);w($s.$$.fragment,$t),vh=u($t),qs=r($t,"P",{});var Tl=i(qs);yh=n(Tl,`LayoutLMv3 Model with a sequence classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for document image classification tasks such as the
`),Fs=r(Tl,"A",{href:!0,rel:!0});var l_=i(Fs);bh=n(l_,"RVL-CDIP"),l_.forEach(t),Lh=n(Tl," dataset."),Tl.forEach(t),kh=u($t),Es=r($t,"P",{});var xl=i(Es);wh=n(xl,"This model inherits from "),wa=r(xl,"A",{href:!0});var d_=i(wa);Th=n(d_,"TFPreTrainedModel"),d_.forEach(t),xh=n(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Mh=u($t),zs=r($t,"P",{});var Ml=i(zs);$h=n(Ml,"This model is also a "),Cs=r(Ml,"A",{href:!0,rel:!0});var c_=i(Cs);qh=n(c_,"tf.keras.Model"),c_.forEach(t),Fh=n(Ml,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ml.forEach(t),Eh=u($t),w(Bo.$$.fragment,$t),zh=u($t),kt=r($t,"DIV",{class:!0});var mn=i(kt);w(As.$$.fragment,mn),Ch=u(mn),co=r(mn,"P",{});var Da=i(co);Ah=n(Da,"The "),Ta=r(Da,"A",{href:!0});var p_=i(Ta);Ph=n(p_,"TFLayoutLMv3ForSequenceClassification"),p_.forEach(t),jh=n(Da," forward method, overrides the "),Yr=r(Da,"CODE",{});var u_=i(Yr);Nh=n(u_,"__call__"),u_.forEach(t),Ih=n(Da," special method."),Da.forEach(t),Sh=u(mn),w(Qo.$$.fragment,mn),Oh=u(mn),w(Uo.$$.fragment,mn),mn.forEach(t),$t.forEach(t),Vi=u(s),po=r(s,"H2",{class:!0});var $l=i(po);Vo=r($l,"A",{id:!0,class:!0,href:!0});var h_=i(Vo);Jr=r(h_,"SPAN",{});var m_=i(Jr);w(Ps.$$.fragment,m_),m_.forEach(t),h_.forEach(t),Dh=u($l),Zr=r($l,"SPAN",{});var f_=i(Zr);Wh=n(f_,"TFLayoutLMv3ForTokenClassification"),f_.forEach(t),$l.forEach(t),Hi=u(s),Ue=r(s,"DIV",{class:!0});var qt=i(Ue);w(js.$$.fragment,qt),Rh=u(qt),ft=r(qt,"P",{});var Wt=i(ft);Bh=n(Wt,`LayoutLMv3 Model with a token classification head on top (a linear layer on top of the final hidden states) e.g.
for sequence labeling (information extraction) tasks such as `),Ns=r(Wt,"A",{href:!0,rel:!0});var g_=i(Ns);Qh=n(g_,"FUNSD"),g_.forEach(t),Uh=n(Wt,`,
`),Is=r(Wt,"A",{href:!0,rel:!0});var __=i(Is);Vh=n(__,"SROIE"),__.forEach(t),Hh=n(Wt,", "),Ss=r(Wt,"A",{href:!0,rel:!0});var v_=i(Ss);Kh=n(v_,"CORD"),v_.forEach(t),Gh=n(Wt,` and
`),Os=r(Wt,"A",{href:!0,rel:!0});var y_=i(Os);Xh=n(y_,"Kleister-NDA"),y_.forEach(t),Yh=n(Wt,"."),Wt.forEach(t),Jh=u(qt),Ds=r(qt,"P",{});var ql=i(Ds);Zh=n(ql,"This model inherits from "),xa=r(ql,"A",{href:!0});var b_=i(xa);em=n(b_,"TFPreTrainedModel"),b_.forEach(t),tm=n(ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql.forEach(t),om=u(qt),Ws=r(qt,"P",{});var Fl=i(Ws);nm=n(Fl,"This model is also a "),Rs=r(Fl,"A",{href:!0,rel:!0});var L_=i(Rs);sm=n(L_,"tf.keras.Model"),L_.forEach(t),am=n(Fl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fl.forEach(t),rm=u(qt),w(Ho.$$.fragment,qt),im=u(qt),wt=r(qt,"DIV",{class:!0});var fn=i(wt);w(Bs.$$.fragment,fn),lm=u(fn),uo=r(fn,"P",{});var Wa=i(uo);dm=n(Wa,"The "),Ma=r(Wa,"A",{href:!0});var k_=i(Ma);cm=n(k_,"TFLayoutLMv3ForTokenClassification"),k_.forEach(t),pm=n(Wa," forward method, overrides the "),ei=r(Wa,"CODE",{});var w_=i(ei);um=n(w_,"__call__"),w_.forEach(t),hm=n(Wa," special method."),Wa.forEach(t),mm=u(fn),w(Ko.$$.fragment,fn),fm=u(fn),w(Go.$$.fragment,fn),fn.forEach(t),qt.forEach(t),Ki=u(s),ho=r(s,"H2",{class:!0});var El=i(ho);Xo=r(El,"A",{id:!0,class:!0,href:!0});var T_=i(Xo);ti=r(T_,"SPAN",{});var x_=i(ti);w(Qs.$$.fragment,x_),x_.forEach(t),T_.forEach(t),gm=u(El),oi=r(El,"SPAN",{});var M_=i(oi);_m=n(M_,"TFLayoutLMv3ForQuestionAnswering"),M_.forEach(t),El.forEach(t),Gi=u(s),Ve=r(s,"DIV",{class:!0});var Ft=i(Ve);w(Us.$$.fragment,Ft),vm=u(Ft),At=r(Ft,"P",{});var gn=i(At);ym=n(gn,`LayoutLMv3 Model with a span classification head on top for extractive question-answering tasks such as
`),Vs=r(gn,"A",{href:!0,rel:!0});var $_=i(Vs);bm=n($_,"DocVQA"),$_.forEach(t),Lm=n(gn,` (a linear layer on top of the text part of the hidden-states output to
compute `),ni=r(gn,"CODE",{});var q_=i(ni);km=n(q_,"span start logits"),q_.forEach(t),wm=n(gn," and "),si=r(gn,"CODE",{});var F_=i(si);Tm=n(F_,"span end logits"),F_.forEach(t),xm=n(gn,")."),gn.forEach(t),Mm=u(Ft),Hs=r(Ft,"P",{});var zl=i(Hs);$m=n(zl,"This model inherits from "),$a=r(zl,"A",{href:!0});var E_=i($a);qm=n(E_,"TFPreTrainedModel"),E_.forEach(t),Fm=n(zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl.forEach(t),Em=u(Ft),Ks=r(Ft,"P",{});var Cl=i(Ks);zm=n(Cl,"This model is also a "),Gs=r(Cl,"A",{href:!0,rel:!0});var z_=i(Gs);Cm=n(z_,"tf.keras.Model"),z_.forEach(t),Am=n(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),Pm=u(Ft),w(Yo.$$.fragment,Ft),jm=u(Ft),Tt=r(Ft,"DIV",{class:!0});var _n=i(Tt);w(Xs.$$.fragment,_n),Nm=u(_n),mo=r(_n,"P",{});var Ra=i(mo);Im=n(Ra,"The "),qa=r(Ra,"A",{href:!0});var C_=i(qa);Sm=n(C_,"TFLayoutLMv3ForQuestionAnswering"),C_.forEach(t),Om=n(Ra," forward method, overrides the "),ai=r(Ra,"CODE",{});var A_=i(ai);Dm=n(A_,"__call__"),A_.forEach(t),Wm=n(Ra," special method."),Ra.forEach(t),Rm=u(_n),w(Jo.$$.fragment,_n),Bm=u(_n),w(Zo.$$.fragment,_n),_n.forEach(t),Ft.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(dv)),d(m,"id","layoutlmv3"),d(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(m,"href","#layoutlmv3"),d(g,"class","relative group"),d(ae,"id","overview"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#overview"),d(W,"class","relative group"),d(ie,"href","https://arxiv.org/abs/2204.08387"),d(ie,"rel","nofollow"),d(pe,"href","layoutlmv2"),d(ue,"href","vit"),d(me,"href","layoutlmv2"),d(te,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(N,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(_,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(oe,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(Re,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(D,"href","layoutlmv2#usage-layoutlmv2processor"),d(Se,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LayoutLMv3"),d(Se,"rel","nofollow"),d(vn,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/layoutlmv3"),d(vn,"rel","nofollow"),S_(fo.src,Gm="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/layoutlmv3_architecture.png")||d(fo,"src",Gm),d(fo,"alt","drawing"),d(fo,"width","600"),d(ea,"href","https://arxiv.org/abs/2204.08387"),d(yn,"href","https://huggingface.co/nielsr"),d(yn,"rel","nofollow"),d(bn,"href","https://huggingface.co/chriskoo"),d(bn,"rel","nofollow"),d(Ln,"href","https://huggingface.co/tokec"),d(Ln,"rel","nofollow"),d(kn,"href","https://huggingface.co/lre"),d(kn,"rel","nofollow"),d(wn,"href","https://github.com/microsoft/unilm/tree/master/layoutlmv3"),d(wn,"rel","nofollow"),d(_o,"id","transformers.LayoutLMv3Config"),d(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_o,"href","#transformers.LayoutLMv3Config"),d(Ut,"class","relative group"),d(ta,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(Mn,"href","https://huggingface.co/microsoft/layoutlmv3-base"),d(Mn,"rel","nofollow"),d(oa,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),d(na,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),d(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(yo,"id","transformers.LayoutLMv3FeatureExtractor"),d(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(yo,"href","#transformers.LayoutLMv3FeatureExtractor"),d(Kt,"class","relative group"),d(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Lo,"id","transformers.LayoutLMv3Tokenizer"),d(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Lo,"href","#transformers.LayoutLMv3Tokenizer"),d(Gt,"class","relative group"),d(sa,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(aa,"href","/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(ia,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(la,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(wo,"id","transformers.LayoutLMv3TokenizerFast"),d(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(wo,"href","#transformers.LayoutLMv3TokenizerFast"),d(Xt,"class","relative group"),d(da,"href","/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),d(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(xo,"id","transformers.LayoutLMv3Processor"),d(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(xo,"href","#transformers.LayoutLMv3Processor"),d(Yt,"class","relative group"),d(pa,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Processor"),d(ua,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(ha,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer"),d(ma,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3TokenizerFast"),d(Qn,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor.__call__"),d(fa,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Un,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(ga,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3FeatureExtractor"),d(Vn,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Tokenizer.__call__"),d(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Mo,"id","transformers.LayoutLMv3Model"),d(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Mo,"href","#transformers.LayoutLMv3Model"),d(Jt,"class","relative group"),d(Xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Xn,"rel","nofollow"),d(_a,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3Model"),d(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fo,"id","transformers.LayoutLMv3ForSequenceClassification"),d(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fo,"href","#transformers.LayoutLMv3ForSequenceClassification"),d(eo,"class","relative group"),d(ts,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(ts,"rel","nofollow"),d(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ns,"rel","nofollow"),d(va,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForSequenceClassification"),d(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Co,"id","transformers.LayoutLMv3ForTokenClassification"),d(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Co,"href","#transformers.LayoutLMv3ForTokenClassification"),d(oo,"class","relative group"),d(is,"href","https://guillaumejaume.github.io/FUNSD/"),d(is,"rel","nofollow"),d(ls,"href","https://rrc.cvc.uab.es/?ch=13"),d(ls,"rel","nofollow"),d(ds,"href","https://github.com/clovaai/cord"),d(ds,"rel","nofollow"),d(cs,"href","https://github.com/applicaai/kleister-nda"),d(cs,"rel","nofollow"),d(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(us,"rel","nofollow"),d(ya,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForTokenClassification"),d(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(jo,"id","transformers.LayoutLMv3ForQuestionAnswering"),d(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(jo,"href","#transformers.LayoutLMv3ForQuestionAnswering"),d(so,"class","relative group"),d(gs,"href","https://rrc.cvc.uab.es/?ch=17"),d(gs,"rel","nofollow"),d(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(vs,"rel","nofollow"),d(ba,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.LayoutLMv3ForQuestionAnswering"),d(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(So,"id","transformers.TFLayoutLMv3Model"),d(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(So,"href","#transformers.TFLayoutLMv3Model"),d(ro,"class","relative group"),d(La,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),d(Ts,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Ts,"rel","nofollow"),d(ka,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3Model"),d(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ro,"id","transformers.TFLayoutLMv3ForSequenceClassification"),d(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ro,"href","#transformers.TFLayoutLMv3ForSequenceClassification"),d(lo,"class","relative group"),d(Fs,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),d(Fs,"rel","nofollow"),d(wa,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),d(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Cs,"rel","nofollow"),d(Ta,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForSequenceClassification"),d(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Vo,"id","transformers.TFLayoutLMv3ForTokenClassification"),d(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Vo,"href","#transformers.TFLayoutLMv3ForTokenClassification"),d(po,"class","relative group"),d(Ns,"href","https://guillaumejaume.github.io/FUNSD/"),d(Ns,"rel","nofollow"),d(Is,"href","https://rrc.cvc.uab.es/?ch=13"),d(Is,"rel","nofollow"),d(Ss,"href","https://github.com/clovaai/cord"),d(Ss,"rel","nofollow"),d(Os,"href","https://github.com/applicaai/kleister-nda"),d(Os,"rel","nofollow"),d(xa,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),d(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Rs,"rel","nofollow"),d(Ma,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForTokenClassification"),d(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Xo,"id","transformers.TFLayoutLMv3ForQuestionAnswering"),d(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Xo,"href","#transformers.TFLayoutLMv3ForQuestionAnswering"),d(ho,"class","relative group"),d(Vs,"href","https://rrc.cvc.uab.es/?ch=17"),d(Vs,"rel","nofollow"),d($a,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),d(Gs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Gs,"rel","nofollow"),d(qa,"href","/docs/transformers/v4.22.1/en/model_doc/layoutlmv3#transformers.TFLayoutLMv3ForQuestionAnswering"),d(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,v){e(document.head,c),f(s,b,v),f(s,g,v),e(g,m),e(m,y),T(l,y,null),e(g,h),e(g,E),e(E,we),f(s,_e,v),f(s,W,v),e(W,ae),e(ae,se),T(L,se,null),e(W,Te),e(W,V),e(V,xe),f(s,ve,v),f(s,S,v),e(S,Me),e(S,ie),e(ie,K),e(S,$e),e(S,pe),e(pe,G),e(S,qe),e(S,ue),e(ue,X),e(S,Fe),f(s,ye,v),f(s,ee,v),e(ee,C),f(s,P,v),f(s,he,v),e(he,H),e(H,Ee),f(s,be,v),f(s,U,v),e(U,ze),f(s,Le,v),f(s,z,v),e(z,re),e(re,Y),e(re,me),e(me,Ce),e(re,J),e(re,le),e(le,fe),e(fe,B),e(le,Ae),e(le,I),e(I,Pe),e(I,te),e(te,j),e(I,je),e(I,N),e(N,Ne),e(I,Ie),e(I,_),e(_,q),e(I,Ge),e(I,oe),e(oe,Xe),e(I,Ye),e(z,F),e(z,ge),e(ge,Je),e(ge,Re),e(Re,Ze),e(ge,et),e(ge,D),e(D,Z),e(ge,tt),e(z,ot),e(z,Q),e(Q,nt),e(Q,Se),e(Se,Oe),e(Q,st),e(z,de),e(z,De),e(De,Al),e(De,vn),e(vn,Pl),e(De,jl),f(s,Li,v),f(s,fo,v),f(s,ki,v),f(s,go,v),e(go,Nl),e(go,ea),e(ea,Il),e(go,Sl),f(s,wi,v),f(s,He,v),e(He,Ol),e(He,yn),e(yn,Dl),e(He,Wl),e(He,bn),e(bn,Rl),e(He,Bl),e(He,Ln),e(Ln,Ql),e(He,Ul),e(He,kn),e(kn,Vl),e(He,Hl),e(He,wn),e(wn,Kl),e(He,Gl),f(s,Ti,v),f(s,Ut,v),e(Ut,_o),e(_o,Ba),T(Tn,Ba,null),e(Ut,Xl),e(Ut,Qa),e(Qa,Yl),f(s,xi,v),f(s,lt,v),T(xn,lt,null),e(lt,Jl),e(lt,Vt),e(Vt,Zl),e(Vt,ta),e(ta,ed),e(Vt,td),e(Vt,Mn),e(Mn,od),e(Vt,nd),e(lt,sd),e(lt,Ht),e(Ht,ad),e(Ht,oa),e(oa,rd),e(Ht,id),e(Ht,na),e(na,ld),e(Ht,dd),e(lt,cd),T(vo,lt,null),f(s,Mi,v),f(s,Kt,v),e(Kt,yo),e(yo,Ua),T($n,Ua,null),e(Kt,pd),e(Kt,Va),e(Va,ud),f(s,$i,v),f(s,dt,v),T(qn,dt,null),e(dt,hd),e(dt,Ha),e(Ha,md),e(dt,fd),e(dt,Fn),e(Fn,gd),e(Fn,Ka),e(Ka,_d),e(Fn,vd),e(dt,yd),e(dt,Nt),T(En,Nt,null),e(Nt,bd),e(Nt,Ga),e(Ga,Ld),e(Nt,kd),T(bo,Nt,null),f(s,qi,v),f(s,Gt,v),e(Gt,Lo),e(Lo,Xa),T(zn,Xa,null),e(Gt,wd),e(Gt,Ya),e(Ya,Td),f(s,Fi,v),f(s,Be,v),T(Cn,Be,null),e(Be,xd),e(Be,We),e(We,Md),e(We,Ja),e(Ja,$d),e(We,qd),e(We,sa),e(sa,Fd),e(We,Ed),e(We,Za),e(Za,zd),e(We,Cd),e(We,er),e(er,Ad),e(We,Pd),e(We,tr),e(tr,jd),e(We,Nd),e(We,or),e(or,Id),e(We,Sd),e(We,nr),e(nr,Od),e(We,Dd),e(Be,Wd),e(Be,An),e(An,Rd),e(An,aa),e(aa,Bd),e(An,Qd),e(Be,Ud),e(Be,ra),e(ra,ia),e(ia,Vd),e(ra,Hd),e(Be,Kd),e(Be,ko),T(Pn,ko,null),e(ko,Gd),e(ko,sr),e(sr,Xd),e(Be,Yd),e(Be,la),T(jn,la,null),f(s,Ei,v),f(s,Xt,v),e(Xt,wo),e(wo,ar),T(Nn,ar,null),e(Xt,Jd),e(Xt,rr),e(rr,Zd),f(s,zi,v),f(s,ct,v),T(In,ct,null),e(ct,ec),e(ct,Sn),e(Sn,tc),e(Sn,ir),e(ir,oc),e(Sn,nc),e(ct,sc),e(ct,On),e(On,ac),e(On,da),e(da,rc),e(On,ic),e(ct,lc),e(ct,To),T(Dn,To,null),e(To,dc),e(To,lr),e(lr,cc),f(s,Ci,v),f(s,Yt,v),e(Yt,xo),e(xo,dr),T(Wn,dr,null),e(Yt,pc),e(Yt,cr),e(cr,uc),f(s,Ai,v),f(s,at,v),T(Rn,at,null),e(at,hc),e(at,pr),e(pr,mc),e(at,fc),e(at,ca),e(ca,pa),e(pa,gc),e(ca,_c),e(at,vc),e(at,ce),e(ce,yc),e(ce,ua),e(ua,bc),e(ce,Lc),e(ce,ha),e(ha,kc),e(ce,wc),e(ce,ma),e(ma,Tc),e(ce,xc),e(ce,ur),e(ur,Mc),e(ce,$c),e(ce,hr),e(hr,qc),e(ce,Fc),e(ce,mr),e(mr,Ec),e(ce,zc),e(ce,fr),e(fr,Cc),e(ce,Ac),e(ce,gr),e(gr,Pc),e(ce,jc),e(ce,_r),e(_r,Nc),e(ce,Ic),e(at,Sc),e(at,It),T(Bn,It,null),e(It,Oc),e(It,O),e(O,Dc),e(O,vr),e(vr,Wc),e(O,Rc),e(O,Qn),e(Qn,yr),e(yr,Bc),e(Qn,Qc),e(O,Uc),e(O,fa),e(fa,Vc),e(O,Hc),e(O,br),e(br,Kc),e(O,Gc),e(O,Lr),e(Lr,Xc),e(O,Yc),e(O,Un),e(Un,kr),e(kr,Jc),e(Un,Zc),e(O,ep),e(O,wr),e(wr,tp),e(O,op),e(O,ga),e(ga,np),e(O,sp),e(O,Tr),e(Tr,ap),e(O,rp),e(O,xr),e(xr,ip),e(O,lp),e(O,Mr),e(Mr,dp),e(O,cp),e(O,$r),e($r,pp),e(O,up),e(O,qr),e(qr,hp),e(O,mp),e(O,Vn),e(Vn,Fr),e(Fr,fp),e(Vn,gp),e(O,_p),e(O,Er),e(Er,vp),e(O,yp),e(It,bp),e(It,zr),e(zr,Lp),f(s,Pi,v),f(s,Jt,v),e(Jt,Mo),e(Mo,Cr),T(Hn,Cr,null),e(Jt,kp),e(Jt,Ar),e(Ar,wp),f(s,ji,v),f(s,zt,v),T(Kn,zt,null),e(zt,Tp),e(zt,Gn),e(Gn,xp),e(Gn,Xn),e(Xn,Mp),e(Gn,$p),e(zt,qp),e(zt,_t),T(Yn,_t,null),e(_t,Fp),e(_t,Zt),e(Zt,Ep),e(Zt,_a),e(_a,zp),e(Zt,Cp),e(Zt,Pr),e(Pr,Ap),e(Zt,Pp),e(_t,jp),T($o,_t,null),e(_t,Np),T(qo,_t,null),f(s,Ni,v),f(s,eo,v),e(eo,Fo),e(Fo,jr),T(Jn,jr,null),e(eo,Ip),e(eo,Nr),e(Nr,Sp),f(s,Ii,v),f(s,pt,v),T(Zn,pt,null),e(pt,Op),e(pt,es),e(es,Dp),e(es,ts),e(ts,Wp),e(es,Rp),e(pt,Bp),e(pt,os),e(os,Qp),e(os,ns),e(ns,Up),e(os,Vp),e(pt,Hp),e(pt,vt),T(ss,vt,null),e(vt,Kp),e(vt,to),e(to,Gp),e(to,va),e(va,Xp),e(to,Yp),e(to,Ir),e(Ir,Jp),e(to,Zp),e(vt,eu),T(Eo,vt,null),e(vt,tu),T(zo,vt,null),f(s,Si,v),f(s,oo,v),e(oo,Co),e(Co,Sr),T(as,Sr,null),e(oo,ou),e(oo,Or),e(Or,nu),f(s,Oi,v),f(s,ut,v),T(rs,ut,null),e(ut,su),e(ut,ht),e(ht,au),e(ht,is),e(is,ru),e(ht,iu),e(ht,ls),e(ls,lu),e(ht,du),e(ht,ds),e(ds,cu),e(ht,pu),e(ht,cs),e(cs,uu),e(ht,hu),e(ut,mu),e(ut,ps),e(ps,fu),e(ps,us),e(us,gu),e(ps,_u),e(ut,vu),e(ut,yt),T(hs,yt,null),e(yt,yu),e(yt,no),e(no,bu),e(no,ya),e(ya,Lu),e(no,ku),e(no,Dr),e(Dr,wu),e(no,Tu),e(yt,xu),T(Ao,yt,null),e(yt,Mu),T(Po,yt,null),f(s,Di,v),f(s,so,v),e(so,jo),e(jo,Wr),T(ms,Wr,null),e(so,$u),e(so,Rr),e(Rr,qu),f(s,Wi,v),f(s,mt,v),T(fs,mt,null),e(mt,Fu),e(mt,Ct),e(Ct,Eu),e(Ct,gs),e(gs,zu),e(Ct,Cu),e(Ct,Br),e(Br,Au),e(Ct,Pu),e(Ct,Qr),e(Qr,ju),e(Ct,Nu),e(mt,Iu),e(mt,_s),e(_s,Su),e(_s,vs),e(vs,Ou),e(_s,Du),e(mt,Wu),e(mt,bt),T(ys,bt,null),e(bt,Ru),e(bt,ao),e(ao,Bu),e(ao,ba),e(ba,Qu),e(ao,Uu),e(ao,Ur),e(Ur,Vu),e(ao,Hu),e(bt,Ku),T(No,bt,null),e(bt,Gu),T(Io,bt,null),f(s,Ri,v),f(s,ro,v),e(ro,So),e(So,Vr),T(bs,Vr,null),e(ro,Xu),e(ro,Hr),e(Hr,Yu),f(s,Bi,v),f(s,rt,v),T(Ls,rt,null),e(rt,Ju),e(rt,ks),e(ks,Zu),e(ks,La),e(La,eh),e(ks,th),e(rt,oh),e(rt,ws),e(ws,nh),e(ws,Ts),e(Ts,sh),e(ws,ah),e(rt,rh),T(Oo,rt,null),e(rt,ih),e(rt,Lt),T(xs,Lt,null),e(Lt,lh),e(Lt,io),e(io,dh),e(io,ka),e(ka,ch),e(io,ph),e(io,Kr),e(Kr,uh),e(io,hh),e(Lt,mh),T(Do,Lt,null),e(Lt,fh),T(Wo,Lt,null),f(s,Qi,v),f(s,lo,v),e(lo,Ro),e(Ro,Gr),T(Ms,Gr,null),e(lo,gh),e(lo,Xr),e(Xr,_h),f(s,Ui,v),f(s,Qe,v),T($s,Qe,null),e(Qe,vh),e(Qe,qs),e(qs,yh),e(qs,Fs),e(Fs,bh),e(qs,Lh),e(Qe,kh),e(Qe,Es),e(Es,wh),e(Es,wa),e(wa,Th),e(Es,xh),e(Qe,Mh),e(Qe,zs),e(zs,$h),e(zs,Cs),e(Cs,qh),e(zs,Fh),e(Qe,Eh),T(Bo,Qe,null),e(Qe,zh),e(Qe,kt),T(As,kt,null),e(kt,Ch),e(kt,co),e(co,Ah),e(co,Ta),e(Ta,Ph),e(co,jh),e(co,Yr),e(Yr,Nh),e(co,Ih),e(kt,Sh),T(Qo,kt,null),e(kt,Oh),T(Uo,kt,null),f(s,Vi,v),f(s,po,v),e(po,Vo),e(Vo,Jr),T(Ps,Jr,null),e(po,Dh),e(po,Zr),e(Zr,Wh),f(s,Hi,v),f(s,Ue,v),T(js,Ue,null),e(Ue,Rh),e(Ue,ft),e(ft,Bh),e(ft,Ns),e(Ns,Qh),e(ft,Uh),e(ft,Is),e(Is,Vh),e(ft,Hh),e(ft,Ss),e(Ss,Kh),e(ft,Gh),e(ft,Os),e(Os,Xh),e(ft,Yh),e(Ue,Jh),e(Ue,Ds),e(Ds,Zh),e(Ds,xa),e(xa,em),e(Ds,tm),e(Ue,om),e(Ue,Ws),e(Ws,nm),e(Ws,Rs),e(Rs,sm),e(Ws,am),e(Ue,rm),T(Ho,Ue,null),e(Ue,im),e(Ue,wt),T(Bs,wt,null),e(wt,lm),e(wt,uo),e(uo,dm),e(uo,Ma),e(Ma,cm),e(uo,pm),e(uo,ei),e(ei,um),e(uo,hm),e(wt,mm),T(Ko,wt,null),e(wt,fm),T(Go,wt,null),f(s,Ki,v),f(s,ho,v),e(ho,Xo),e(Xo,ti),T(Qs,ti,null),e(ho,gm),e(ho,oi),e(oi,_m),f(s,Gi,v),f(s,Ve,v),T(Us,Ve,null),e(Ve,vm),e(Ve,At),e(At,ym),e(At,Vs),e(Vs,bm),e(At,Lm),e(At,ni),e(ni,km),e(At,wm),e(At,si),e(si,Tm),e(At,xm),e(Ve,Mm),e(Ve,Hs),e(Hs,$m),e(Hs,$a),e($a,qm),e(Hs,Fm),e(Ve,Em),e(Ve,Ks),e(Ks,zm),e(Ks,Gs),e(Gs,Cm),e(Ks,Am),e(Ve,Pm),T(Yo,Ve,null),e(Ve,jm),e(Ve,Tt),T(Xs,Tt,null),e(Tt,Nm),e(Tt,mo),e(mo,Im),e(mo,qa),e(qa,Sm),e(mo,Om),e(mo,ai),e(ai,Dm),e(mo,Wm),e(Tt,Rm),T(Jo,Tt,null),e(Tt,Bm),T(Zo,Tt,null),Xi=!0},p(s,[v]){const Ys={};v&2&&(Ys.$$scope={dirty:v,ctx:s}),vo.$set(Ys);const ri={};v&2&&(ri.$$scope={dirty:v,ctx:s}),bo.$set(ri);const ii={};v&2&&(ii.$$scope={dirty:v,ctx:s}),$o.$set(ii);const li={};v&2&&(li.$$scope={dirty:v,ctx:s}),qo.$set(li);const Js={};v&2&&(Js.$$scope={dirty:v,ctx:s}),Eo.$set(Js);const di={};v&2&&(di.$$scope={dirty:v,ctx:s}),zo.$set(di);const ci={};v&2&&(ci.$$scope={dirty:v,ctx:s}),Ao.$set(ci);const pi={};v&2&&(pi.$$scope={dirty:v,ctx:s}),Po.$set(pi);const Pt={};v&2&&(Pt.$$scope={dirty:v,ctx:s}),No.$set(Pt);const ui={};v&2&&(ui.$$scope={dirty:v,ctx:s}),Io.$set(ui);const hi={};v&2&&(hi.$$scope={dirty:v,ctx:s}),Oo.$set(hi);const mi={};v&2&&(mi.$$scope={dirty:v,ctx:s}),Do.$set(mi);const fi={};v&2&&(fi.$$scope={dirty:v,ctx:s}),Wo.$set(fi);const gi={};v&2&&(gi.$$scope={dirty:v,ctx:s}),Bo.$set(gi);const _i={};v&2&&(_i.$$scope={dirty:v,ctx:s}),Qo.$set(_i);const vi={};v&2&&(vi.$$scope={dirty:v,ctx:s}),Uo.$set(vi);const jt={};v&2&&(jt.$$scope={dirty:v,ctx:s}),Ho.$set(jt);const en={};v&2&&(en.$$scope={dirty:v,ctx:s}),Ko.$set(en);const yi={};v&2&&(yi.$$scope={dirty:v,ctx:s}),Go.$set(yi);const Zs={};v&2&&(Zs.$$scope={dirty:v,ctx:s}),Yo.$set(Zs);const bi={};v&2&&(bi.$$scope={dirty:v,ctx:s}),Jo.$set(bi);const gt={};v&2&&(gt.$$scope={dirty:v,ctx:s}),Zo.$set(gt)},i(s){Xi||(x(l.$$.fragment,s),x(L.$$.fragment,s),x(Tn.$$.fragment,s),x(xn.$$.fragment,s),x(vo.$$.fragment,s),x($n.$$.fragment,s),x(qn.$$.fragment,s),x(En.$$.fragment,s),x(bo.$$.fragment,s),x(zn.$$.fragment,s),x(Cn.$$.fragment,s),x(Pn.$$.fragment,s),x(jn.$$.fragment,s),x(Nn.$$.fragment,s),x(In.$$.fragment,s),x(Dn.$$.fragment,s),x(Wn.$$.fragment,s),x(Rn.$$.fragment,s),x(Bn.$$.fragment,s),x(Hn.$$.fragment,s),x(Kn.$$.fragment,s),x(Yn.$$.fragment,s),x($o.$$.fragment,s),x(qo.$$.fragment,s),x(Jn.$$.fragment,s),x(Zn.$$.fragment,s),x(ss.$$.fragment,s),x(Eo.$$.fragment,s),x(zo.$$.fragment,s),x(as.$$.fragment,s),x(rs.$$.fragment,s),x(hs.$$.fragment,s),x(Ao.$$.fragment,s),x(Po.$$.fragment,s),x(ms.$$.fragment,s),x(fs.$$.fragment,s),x(ys.$$.fragment,s),x(No.$$.fragment,s),x(Io.$$.fragment,s),x(bs.$$.fragment,s),x(Ls.$$.fragment,s),x(Oo.$$.fragment,s),x(xs.$$.fragment,s),x(Do.$$.fragment,s),x(Wo.$$.fragment,s),x(Ms.$$.fragment,s),x($s.$$.fragment,s),x(Bo.$$.fragment,s),x(As.$$.fragment,s),x(Qo.$$.fragment,s),x(Uo.$$.fragment,s),x(Ps.$$.fragment,s),x(js.$$.fragment,s),x(Ho.$$.fragment,s),x(Bs.$$.fragment,s),x(Ko.$$.fragment,s),x(Go.$$.fragment,s),x(Qs.$$.fragment,s),x(Us.$$.fragment,s),x(Yo.$$.fragment,s),x(Xs.$$.fragment,s),x(Jo.$$.fragment,s),x(Zo.$$.fragment,s),Xi=!0)},o(s){M(l.$$.fragment,s),M(L.$$.fragment,s),M(Tn.$$.fragment,s),M(xn.$$.fragment,s),M(vo.$$.fragment,s),M($n.$$.fragment,s),M(qn.$$.fragment,s),M(En.$$.fragment,s),M(bo.$$.fragment,s),M(zn.$$.fragment,s),M(Cn.$$.fragment,s),M(Pn.$$.fragment,s),M(jn.$$.fragment,s),M(Nn.$$.fragment,s),M(In.$$.fragment,s),M(Dn.$$.fragment,s),M(Wn.$$.fragment,s),M(Rn.$$.fragment,s),M(Bn.$$.fragment,s),M(Hn.$$.fragment,s),M(Kn.$$.fragment,s),M(Yn.$$.fragment,s),M($o.$$.fragment,s),M(qo.$$.fragment,s),M(Jn.$$.fragment,s),M(Zn.$$.fragment,s),M(ss.$$.fragment,s),M(Eo.$$.fragment,s),M(zo.$$.fragment,s),M(as.$$.fragment,s),M(rs.$$.fragment,s),M(hs.$$.fragment,s),M(Ao.$$.fragment,s),M(Po.$$.fragment,s),M(ms.$$.fragment,s),M(fs.$$.fragment,s),M(ys.$$.fragment,s),M(No.$$.fragment,s),M(Io.$$.fragment,s),M(bs.$$.fragment,s),M(Ls.$$.fragment,s),M(Oo.$$.fragment,s),M(xs.$$.fragment,s),M(Do.$$.fragment,s),M(Wo.$$.fragment,s),M(Ms.$$.fragment,s),M($s.$$.fragment,s),M(Bo.$$.fragment,s),M(As.$$.fragment,s),M(Qo.$$.fragment,s),M(Uo.$$.fragment,s),M(Ps.$$.fragment,s),M(js.$$.fragment,s),M(Ho.$$.fragment,s),M(Bs.$$.fragment,s),M(Ko.$$.fragment,s),M(Go.$$.fragment,s),M(Qs.$$.fragment,s),M(Us.$$.fragment,s),M(Yo.$$.fragment,s),M(Xs.$$.fragment,s),M(Jo.$$.fragment,s),M(Zo.$$.fragment,s),Xi=!1},d(s){t(c),s&&t(b),s&&t(g),$(l),s&&t(_e),s&&t(W),$(L),s&&t(ve),s&&t(S),s&&t(ye),s&&t(ee),s&&t(P),s&&t(he),s&&t(be),s&&t(U),s&&t(Le),s&&t(z),s&&t(Li),s&&t(fo),s&&t(ki),s&&t(go),s&&t(wi),s&&t(He),s&&t(Ti),s&&t(Ut),$(Tn),s&&t(xi),s&&t(lt),$(xn),$(vo),s&&t(Mi),s&&t(Kt),$($n),s&&t($i),s&&t(dt),$(qn),$(En),$(bo),s&&t(qi),s&&t(Gt),$(zn),s&&t(Fi),s&&t(Be),$(Cn),$(Pn),$(jn),s&&t(Ei),s&&t(Xt),$(Nn),s&&t(zi),s&&t(ct),$(In),$(Dn),s&&t(Ci),s&&t(Yt),$(Wn),s&&t(Ai),s&&t(at),$(Rn),$(Bn),s&&t(Pi),s&&t(Jt),$(Hn),s&&t(ji),s&&t(zt),$(Kn),$(Yn),$($o),$(qo),s&&t(Ni),s&&t(eo),$(Jn),s&&t(Ii),s&&t(pt),$(Zn),$(ss),$(Eo),$(zo),s&&t(Si),s&&t(oo),$(as),s&&t(Oi),s&&t(ut),$(rs),$(hs),$(Ao),$(Po),s&&t(Di),s&&t(so),$(ms),s&&t(Wi),s&&t(mt),$(fs),$(ys),$(No),$(Io),s&&t(Ri),s&&t(ro),$(bs),s&&t(Bi),s&&t(rt),$(Ls),$(Oo),$(xs),$(Do),$(Wo),s&&t(Qi),s&&t(lo),$(Ms),s&&t(Ui),s&&t(Qe),$($s),$(Bo),$(As),$(Qo),$(Uo),s&&t(Vi),s&&t(po),$(Ps),s&&t(Hi),s&&t(Ue),$(js),$(Ho),$(Bs),$(Ko),$(Go),s&&t(Ki),s&&t(ho),$(Qs),s&&t(Gi),s&&t(Ve),$(Us),$(Yo),$(Xs),$(Jo),$(Zo)}}}const dv={local:"layoutlmv3",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMv3Config",title:"LayoutLMv3Config"},{local:"transformers.LayoutLMv3FeatureExtractor",title:"LayoutLMv3FeatureExtractor"},{local:"transformers.LayoutLMv3Tokenizer",title:"LayoutLMv3Tokenizer"},{local:"transformers.LayoutLMv3TokenizerFast",title:"LayoutLMv3TokenizerFast"},{local:"transformers.LayoutLMv3Processor",title:"LayoutLMv3Processor"},{local:"transformers.LayoutLMv3Model",title:"LayoutLMv3Model"},{local:"transformers.LayoutLMv3ForSequenceClassification",title:"LayoutLMv3ForSequenceClassification"},{local:"transformers.LayoutLMv3ForTokenClassification",title:"LayoutLMv3ForTokenClassification"},{local:"transformers.LayoutLMv3ForQuestionAnswering",title:"LayoutLMv3ForQuestionAnswering"},{local:"transformers.TFLayoutLMv3Model",title:"TFLayoutLMv3Model"},{local:"transformers.TFLayoutLMv3ForSequenceClassification",title:"TFLayoutLMv3ForSequenceClassification"},{local:"transformers.TFLayoutLMv3ForTokenClassification",title:"TFLayoutLMv3ForTokenClassification"},{local:"transformers.TFLayoutLMv3ForQuestionAnswering",title:"TFLayoutLMv3ForQuestionAnswering"}],title:"LayoutLMv3"};function cv(A){return O_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _v extends P_{constructor(c){super();j_(this,c,cv,lv,N_,{})}}export{_v as default,dv as metadata};
