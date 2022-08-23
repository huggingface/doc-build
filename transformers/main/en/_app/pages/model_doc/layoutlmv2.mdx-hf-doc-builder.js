import{S as Mv,i as $v,s as Ev,e as a,k as c,w as v,t as n,M as zv,c as r,d as o,m as p,a as i,x as y,h as s,b as l,G as e,g as u,y as b,q as L,o as w,B as k,v as qv,L as sn}from"../../chunks/vendor-hf-doc-builder.js";import{T as Gi}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as W}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as de}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as nn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function jv(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2Model, LayoutLMv2Config

# Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration
configuration = LayoutLMv2Config()

# Initializing a model from the microsoft/layoutlmv2-base-uncased style configuration
model = LayoutLMv2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Model, LayoutLMv2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:sn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Fv(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2FeatureExtractor
from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

# option 1: with apply_ocr=True (default)
feature_extractor = LayoutLMv2FeatureExtractor()
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values', 'words', 'boxes'])

# option 2: with apply_ocr=False
feature_extractor = LayoutLMv2FeatureExtractor(apply_ocr=False)
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values'])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 1: with apply_ocr=True (default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv2FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;, &#x27;words&#x27;, &#x27;boxes&#x27;])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 2: with apply_ocr=False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv2FeatureExtractor(apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){h=a("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:sn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Pv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Cv(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model, set_seed
from PIL import Image
import torch
from datasets import load_dataset

set_seed(88)

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2Model.from_pretrained("microsoft/layoutlmv2-base-uncased")


dataset = load_dataset("hf-internal-testing/fixtures_docvqa")
image_path = dataset["test"][0]["file"]
image = Image.open(image_path).convert("RGB")

encoding = processor(image, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state

last_hidden_states.shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2Model, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/fixtures_docvqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_path = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(image_path).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states.shape
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">342</span>, <span class="hljs-number">768</span>])`}}),{c(){h=a("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:sn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Iv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Dv(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification, set_seed
from PIL import Image
import torch
from datasets import load_dataset

set_seed(88)

dataset = load_dataset("rvl_cdip", split="train", streaming=True)
data = next(iter(dataset))
image = data["image"].convert("RGB")

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2ForSequenceClassification.from_pretrained(
    "microsoft/layoutlmv2-base-uncased", num_labels=dataset.info.features["label"].num_classes
)

encoding = processor(image, return_tensors="pt")
sequence_label = torch.tensor([data["label"]])

outputs = model(**encoding, labels=sequence_label)

loss, logits = outputs.loss, outputs.logits
predicted_idx = logits.argmax(dim=-1).item()
predicted_answer = dataset.info.features["label"].names[4]
predicted_idx, predicted_answer`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForSequenceClassification, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;rvl_cdip&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>, streaming=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>data = <span class="hljs-built_in">next</span>(<span class="hljs-built_in">iter</span>(dataset))
<span class="hljs-meta">&gt;&gt;&gt; </span>image = data[<span class="hljs-string">&quot;image&quot;</span>].convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, num_labels=dataset.info.features[<span class="hljs-string">&quot;label&quot;</span>].num_classes
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([data[<span class="hljs-string">&quot;label&quot;</span>]])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_idx = logits.argmax(dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = dataset.info.features[<span class="hljs-string">&quot;label&quot;</span>].names[<span class="hljs-number">4</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_idx, predicted_answer
(<span class="hljs-number">4</span>, <span class="hljs-string">&#x27;advertisement&#x27;</span>)`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:sn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Av(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Ov(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification, set_seed
from PIL import Image
from datasets import load_dataset

set_seed(88)

datasets = load_dataset("nielsr/funsd", split="test")
labels = datasets.features["ner_tags"].feature.names
id2label = {v: k for v, k in enumerate(labels)}

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")
model = LayoutLMv2ForTokenClassification.from_pretrained(
    "microsoft/layoutlmv2-base-uncased", num_labels=len(labels)
)

data = datasets[0]
image = Image.open(data["image_path"]).convert("RGB")
words = data["words"]
boxes = data["bboxes"]  # make sure to normalize your bounding boxes
word_labels = data["ner_tags"]
encoding = processor(
    image,
    words,
    boxes=boxes,
    word_labels=word_labels,
    padding="max_length",
    truncation=True,
    return_tensors="pt",
)

outputs = model(**encoding)
logits, loss = outputs.logits, outputs.loss

predicted_token_class_ids = logits.argmax(-1)
predicted_tokens_classes = [id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes[:5]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForTokenClassification, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>datasets = load_dataset(<span class="hljs-string">&quot;nielsr/funsd&quot;</span>, split=<span class="hljs-string">&quot;test&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = datasets.features[<span class="hljs-string">&quot;ner_tags&quot;</span>].feature.names
<span class="hljs-meta">&gt;&gt;&gt; </span>id2label = {v: k <span class="hljs-keyword">for</span> v, k <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels)}

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForTokenClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, num_labels=<span class="hljs-built_in">len</span>(labels)
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = datasets[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(data[<span class="hljs-string">&quot;image_path&quot;</span>]).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>words = data[<span class="hljs-string">&quot;words&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = data[<span class="hljs-string">&quot;bboxes&quot;</span>]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = data[<span class="hljs-string">&quot;ner_tags&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(
<span class="hljs-meta">... </span>    image,
<span class="hljs-meta">... </span>    words,
<span class="hljs-meta">... </span>    boxes=boxes,
<span class="hljs-meta">... </span>    word_labels=word_labels,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits, loss = outputs.logits, outputs.loss

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes[:<span class="hljs-number">5</span>]
[<span class="hljs-string">&#x27;B-ANSWER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>]`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:sn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Nv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Sv(j){let h,x;return h=new W({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
import torch
from PIL import Image
from datasets import load_dataset

set_seed(88)
processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2ForQuestionAnswering.from_pretrained("microsoft/layoutlmv2-base-uncased")

dataset = load_dataset("hf-internal-testing/fixtures_docvqa")
image_path = dataset["test"][0]["file"]
image = Image.open(image_path).convert("RGB")
question = "When is coffee break?"
encoding = processor(image, question, return_tensors="pt")

outputs = model(**encoding)
predicted_start_idx = outputs.start_logits.argmax(-1).item()
predicted_end_idx = outputs.end_logits.argmax(-1).item()
predicted_start_idx, predicted_end_idx

predicted_answer_tokens = encoding.input_ids.squeeze()[predicted_start_idx : predicted_end_idx + 1]
predicted_answer = processor.tokenizer.decode(predicted_answer_tokens)
predicted_answer  # results are not very good without further fine-tuning`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/fixtures_docvqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_path = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(image_path).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;When is coffee break?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_start_idx = outputs.start_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_end_idx = outputs.end_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_start_idx, predicted_end_idx
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_tokens = encoding.input_ids.squeeze()[predicted_start_idx : predicted_end_idx + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = processor.tokenizer.decode(predicted_answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer  <span class="hljs-comment"># results are not very good without further fine-tuning</span>
<span class="hljs-string">&#x27;council mem - bers conducted by trrf treasurer philip g. kuehn to get answers which the public ...</span>`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:sn,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function Rv(j){let h,x;return h=new W({props:{code:`target_start_index = torch.tensor([7])
target_end_index = torch.tensor([14])
outputs = model(**encoding, start_positions=target_start_index, end_positions=target_end_index)
predicted_answer_span_start = outputs.start_logits.argmax(-1).item()
predicted_answer_span_end = outputs.end_logits.argmax(-1).item()
predicted_answer_span_start, predicted_answer_span_end`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">7</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_span_start = outputs.start_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_span_end = outputs.end_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_span_start, predicted_answer_span_end
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:sn,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function Wv(j){let h,x,f,g,T,m,_,O,Hi,gr,Me,Ve,_s,Et,Ki,vs,Xi,_r,me,Yi,zt,Zi,Ji,an,el,tl,vr,he,X,ol,qt,nl,sl,jt,al,rl,Ft,il,ll,Pt,dl,cl,pl,Ct,ul,It,ml,hl,fl,Dt,gl,At,_l,vl,yr,rn,yl,br,ln,ys,bl,Lr,se,Ll,bs,wl,kl,Ls,xl,Tl,ws,Ml,$l,wr,Ot,kr,dn,El,xr,cn,zl,Tr,V,ks,ql,jl,Nt,Fl,St,Pl,Cl,Il,Rt,Dl,Wt,Al,Ol,Nl,$e,Sl,Ut,Rl,Wl,Bt,Ul,Bl,Vl,M,Ql,xs,Gl,Hl,pn,Kl,Xl,Ts,Yl,Zl,Ms,Jl,ed,$s,td,od,Es,nd,sd,zs,ad,rd,qs,id,ld,js,dd,cd,un,pd,ud,Vt,md,hd,Qt,fd,gd,Mr,Gt,$r,fe,_d,Fs,vd,yd,Ps,bd,Ld,Er,Ht,zr,Qe,wd,mn,kd,xd,qr,ge,I,Td,hn,Md,$d,Cs,Ed,zd,Is,qd,jd,fn,Fd,Pd,Ds,Cd,Id,As,Dd,Ad,Os,Od,Nd,Sd,Kt,Rd,gn,Wd,Ud,Bd,Xt,Vd,Ns,Qd,Gd,jr,Ge,Hd,_n,Kd,Xd,Fr,Ee,He,Ss,Yt,Yd,Rs,Zd,Pr,Q,Jd,vn,ec,tc,yn,oc,nc,bn,sc,ac,Ln,rc,ic,Cr,Zt,Ir,E,lc,wn,dc,cc,kn,pc,uc,Ws,mc,hc,xn,fc,gc,Tn,_c,vc,Us,yc,bc,Bs,Lc,wc,Vs,kc,xc,Qs,Tc,Mc,Gs,$c,Ec,Dr,U,Mn,zc,qc,Jt,jc,Fc,$n,Pc,Cc,Hs,Ic,Dc,Ks,Ac,Oc,Ar,En,Nc,Or,zn,Xs,Sc,Nr,qn,Rc,Sr,eo,Rr,jn,Ys,Wc,Wr,_e,Uc,Zs,Bc,Vc,Js,Qc,Gc,Ur,to,Br,Fn,ea,Hc,Vr,G,Kc,ta,Xc,Yc,oa,Zc,Jc,na,ep,tp,sa,op,np,Qr,oo,Gr,Pn,aa,sp,Hr,Cn,ap,Kr,no,Xr,In,ra,rp,Yr,Dn,ip,Zr,so,Jr,ze,Ke,ia,ao,lp,la,dp,ei,Y,ro,cp,qe,pp,An,up,mp,io,hp,fp,gp,je,_p,On,vp,yp,Nn,bp,Lp,wp,Xe,ti,Fe,Ye,da,lo,kp,ca,xp,oi,Z,co,Tp,pa,Mp,$p,po,Ep,ua,zp,qp,jp,ve,uo,Fp,ma,Pp,Cp,Ze,ni,Pe,Je,ha,mo,Ip,fa,Dp,si,N,ho,Ap,S,Op,Sn,Np,Sp,ga,Rp,Wp,_a,Up,Bp,va,Vp,Qp,ya,Gp,Hp,ba,Kp,Xp,Yp,fo,Zp,Rn,Jp,eu,tu,Wn,Un,ou,nu,su,et,go,au,La,ru,iu,Bn,_o,ai,Ce,tt,wa,vo,lu,ka,du,ri,J,yo,cu,bo,pu,xa,uu,mu,hu,Lo,fu,Vn,gu,_u,vu,ot,wo,yu,Ta,bu,ii,Ie,nt,Ma,ko,Lu,$a,wu,li,B,xo,ku,Ea,xu,Tu,Qn,Gn,Mu,$u,Eu,F,zu,Hn,qu,ju,Kn,Fu,Pu,Xn,Cu,Iu,za,Du,Au,qa,Ou,Nu,ja,Su,Ru,Fa,Wu,Uu,Pa,Bu,Vu,Ca,Qu,Gu,Hu,ye,To,Ku,$,Xu,Ia,Yu,Zu,Mo,Da,Ju,em,tm,Yn,om,nm,Aa,sm,am,Oa,rm,im,$o,Na,lm,dm,cm,Sa,pm,um,Zn,mm,hm,Ra,fm,gm,Wa,_m,vm,Ua,ym,bm,Ba,Lm,wm,km,Va,xm,di,De,st,Qa,Eo,Tm,Ga,Mm,ci,ce,zo,$m,qo,Em,jo,zm,qm,jm,ae,Fo,Fm,Ae,Pm,Jn,Cm,Im,Ha,Dm,Am,Om,at,Nm,rt,pi,Oe,it,Ka,Po,Sm,Xa,Rm,ui,ee,Co,Wm,Io,Um,Do,Bm,Vm,Qm,Ao,Gm,Oo,Hm,Km,Xm,re,No,Ym,Ne,Zm,es,Jm,eh,Ya,th,oh,nh,lt,sh,dt,mi,Se,ct,Za,So,ah,Ja,rh,hi,te,Ro,ih,oe,lh,Wo,dh,ch,Uo,ph,uh,Bo,mh,hh,Vo,fh,gh,_h,Qo,vh,Go,yh,bh,Lh,ie,Ho,wh,Re,kh,ts,xh,Th,er,Mh,$h,Eh,pt,zh,ut,fi,We,mt,tr,Ko,qh,or,jh,gi,ne,Xo,Fh,pe,Ph,Yo,Ch,Ih,nr,Dh,Ah,sr,Oh,Nh,Sh,Zo,Rh,Jo,Wh,Uh,Bh,D,en,Vh,Ue,Qh,os,Gh,Hh,ar,Kh,Xh,Yh,ht,Zh,rr,Jh,ef,ir,tf,of,ft,nf,gt,_i;return m=new de({}),Et=new de({}),Ot=new W({props:{code:`python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'
python -m pip install torchvision tesseract`,highlighted:`<span class="hljs-keyword">python</span> -m pip install <span class="hljs-string">&#x27;git+https://github.com/facebookresearch/detectron2.git&#x27;</span>
<span class="hljs-keyword">python</span> -m pip install torchvision tesseract`}}),Gt=new W({props:{code:`def normalize_bbox(bbox, width, height):
    return [
        int(1000 * (bbox[0] / width)),
        int(1000 * (bbox[1] / height)),
        int(1000 * (bbox[2] / width)),
        int(1000 * (bbox[3] / height)),
    ]`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">normalize_bbox</span>(<span class="hljs-params">bbox, width, height</span>):
    <span class="hljs-keyword">return</span> [
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">0</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">1</span>] / height)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">2</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">3</span>] / height)),
    ]`}}),Ht=new W({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Yt=new de({}),Zt=new W({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),eo=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
encoding = processor(
    image, return_tensors="pt"
)  # you can also add all tokenizer parameters here such as padding, truncation
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
encoding = processor(
    image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
)  <span class="hljs-comment"># you can also add all tokenizer parameters here such as padding, truncation</span>
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),to=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),oo=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
word_labels = [1, 2]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'labels', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
word_labels = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),no=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
question = "What's his name?"
encoding = processor(image, question, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),so=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
question = "What's his name?"
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, question, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),ao=new de({}),ro=new A({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLMv2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or <code>TFLayoutLMv2Model</code>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMv2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMv2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMv2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMv2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMv2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or
<code>TFLayoutLMv2Model</code>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMv2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMv2Config.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.max_rel_pos",description:`<strong>max_rel_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum number of relative positions to be used in the self-attention mechanism.`,name:"max_rel_pos"},{anchor:"transformers.LayoutLMv2Config.rel_pos_bins",description:`<strong>rel_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of relative position bins to be used in the self-attention mechanism.`,name:"rel_pos_bins"},{anchor:"transformers.LayoutLMv2Config.fast_qkv",description:`<strong>fast_qkv</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a single matrix for the queries, keys, values in the self-attention layers.`,name:"fast_qkv"},{anchor:"transformers.LayoutLMv2Config.max_rel_2d_pos",description:`<strong>max_rel_2d_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum number of relative 2D positions in the self-attention mechanism.`,name:"max_rel_2d_pos"},{anchor:"transformers.LayoutLMv2Config.rel_2d_pos_bins",description:`<strong>rel_2d_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of 2D relative position bins in the self-attention mechanism.`,name:"rel_2d_pos_bins"},{anchor:"transformers.LayoutLMv2Config.image_feature_pool_shape",description:`<strong>image_feature_pool_shape</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [7, 7, 256]) &#x2014;
The shape of the average-pooled feature map.`,name:"image_feature_pool_shape"},{anchor:"transformers.LayoutLMv2Config.coordinate_size",description:`<strong>coordinate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the coordinate embeddings.`,name:"coordinate_size"},{anchor:"transformers.LayoutLMv2Config.shape_size",description:`<strong>shape_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the width and height embeddings.`,name:"shape_size"},{anchor:"transformers.LayoutLMv2Config.has_relative_attention_bias",description:`<strong>has_relative_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a relative attention bias in the self-attention mechanism.`,name:"has_relative_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_spatial_attention_bias",description:`<strong>has_spatial_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a spatial attention bias in the self-attention mechanism.`,name:"has_spatial_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_visual_segment_embedding",description:`<strong>has_visual_segment_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add visual segment embeddings.`,name:"has_visual_segment_embedding"},{anchor:"transformers.LayoutLMv2Config.detectron2_config_args",description:`<strong>detectron2_config_args</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary containing the configuration arguments of the Detectron2 visual backbone. Refer to <a href="https://github.com/microsoft/unilm/blob/master/layoutlmft/layoutlmft/models/layoutlmv2/detectron2_config.py" rel="nofollow">this
file</a>
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),Xe=new nn({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[jv]},$$scope:{ctx:j}}}),lo=new de({}),co=new A({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"tesseract_config",val:" = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv2FeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.LayoutLMv2FeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv2FeatureExtractor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv2FeatureExtractor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv2FeatureExtractor.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract. For example: &#x2018;&#x2014;psm 6&#x2019;.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>LayoutLMv2FeatureExtractor uses Google&#x2019;s Tesseract OCR engine under the hood.</p>

					</div>`,name:"tesseract_config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L82"}}),uo=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L136",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ze=new nn({props:{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.example",$$slots:{default:[Fv]},$$scope:{ctx:j}}}),mo=new de({}),ho=new A({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L206"}}),go=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L426",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> \u2014 List of bounding boxes to be fed to a model.</p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>labels</strong> \u2014 List of labels to be fed to a model. (when <code>word_labels</code> is specified).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),_o=new A({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L406"}}),vo=new de({}),yo=new A({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.LayoutLMv2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1000, 1000, 1000, 1000]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv2TokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutLMv2TokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L70"}}),wo=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L179",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> \u2014 List of bounding boxes to be fed to a model.</p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>labels</strong> \u2014 List of labels to be fed to a model. (when <code>word_labels</code> is specified).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),ko=new de({}),xo=new A({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),To=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),Eo=new de({}),zo=new A({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L710"}}),Fo=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length), 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2Model.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L818",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
`}}),at=new Gi({props:{$$slots:{default:[Pv]},$$scope:{ctx:j}}}),rt=new nn({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[Cv]},$$scope:{ctx:j}}}),Po=new de({}),Co=new A({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L969"}}),No=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L983",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
`}}),lt=new Gi({props:{$$slots:{default:[Iv]},$$scope:{ctx:j}}}),dt=new nn({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[Dv]},$$scope:{ctx:j}}}),So=new de({}),Ro=new A({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1150"}}),Ho=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1164",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
`}}),pt=new Gi({props:{$$slots:{default:[Av]},$$scope:{ctx:j}}}),ut=new nn({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[Ov]},$$scope:{ctx:j}}}),Ko=new de({}),Xo=new A({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1281"}}),en=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1295",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
`}}),ht=new Gi({props:{$$slots:{default:[Nv]},$$scope:{ctx:j}}}),ft=new nn({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[Sv]},$$scope:{ctx:j}}}),gt=new nn({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example-2",$$slots:{default:[Rv]},$$scope:{ctx:j}}}),{c(){h=a("meta"),x=c(),f=a("h1"),g=a("a"),T=a("span"),v(m.$$.fragment),_=c(),O=a("span"),Hi=n("LayoutLMV2"),gr=c(),Me=a("h2"),Ve=a("a"),_s=a("span"),v(Et.$$.fragment),Ki=c(),vs=a("span"),Xi=n("Overview"),_r=c(),me=a("p"),Yi=n("The LayoutLMV2 model was proposed in "),zt=a("a"),Zi=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),Ji=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),an=a("a"),el=n("LayoutLM"),tl=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),vr=c(),he=a("ul"),X=a("li"),ol=n("information extraction from scanned documents: the "),qt=a("a"),nl=n("FUNSD"),sl=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),jt=a("a"),al=n("CORD"),rl=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Ft=a("a"),il=n("SROIE"),ll=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Pt=a("a"),dl=n("Kleister-NDA"),cl=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),pl=c(),Ct=a("li"),ul=n("document image classification: the "),It=a("a"),ml=n("RVL-CDIP"),hl=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),fl=c(),Dt=a("li"),gl=n("document visual question answering: the "),At=a("a"),_l=n("DocVQA"),vl=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),yr=c(),rn=a("p"),yl=n("The abstract from the paper is the following:"),br=c(),ln=a("p"),ys=a("em"),bl=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
its effective model architecture and the advantage of large-scale unlabeled scanned/digital-born documents. In this
paper, we present LayoutLMv2 by pre-training text, layout and image in a multi-modal framework, where new model
architectures and pre-training tasks are leveraged. Specifically, LayoutLMv2 not only uses the existing masked
visual-language modeling task but also the new text-image alignment and text-image matching tasks in the pre-training
stage, where cross-modality interaction is better learned. Meanwhile, it also integrates a spatial-aware self-attention
mechanism into the Transformer architecture, so that the model can fully understand the relative positional
relationship among different text blocks. Experiment results show that LayoutLMv2 outperforms strong baselines and
achieves new state-of-the-art results on a wide variety of downstream visually-rich document understanding tasks,
including FUNSD (0.7895 -> 0.8420), CORD (0.9493 -> 0.9601), SROIE (0.9524 -> 0.9781), Kleister-NDA (0.834 -> 0.852),
RVL-CDIP (0.9443 -> 0.9564), and DocVQA (0.7295 -> 0.8672). The pre-trained LayoutLMv2 model is publicly available at
this https URL.`),Lr=c(),se=a("p"),Ll=n("LayoutLMv2 depends on "),bs=a("code"),wl=n("detectron2"),kl=n(", "),Ls=a("code"),xl=n("torchvision"),Tl=n(" and "),ws=a("code"),Ml=n("tesseract"),$l=n(`. Run the
following to install them:`),wr=c(),v(Ot.$$.fragment),kr=c(),dn=a("p"),El=n("(If you are developing for LayoutLMv2, note that passing the doctests also requires the installation of these packages.)"),xr=c(),cn=a("p"),zl=n("Tips:"),Tr=c(),V=a("ul"),ks=a("li"),ql=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),jl=c(),Nt=a("li"),Fl=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),St=a("a"),Pl=n("paper"),Cl=n("."),Il=c(),Rt=a("li"),Dl=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Wt=a("a"),Al=n("here"),Ol=n("."),Nl=c(),$e=a("li"),Sl=n("LayoutLMv2 uses Facebook AI\u2019s "),Ut=a("a"),Rl=n("Detectron2"),Wl=n(` package for its visual
backbone. See `),Bt=a("a"),Ul=n("this link"),Bl=n(` for installation
instructions.`),Vl=c(),M=a("li"),Ql=n("In addition to "),xs=a("code"),Gl=n("input_ids"),Hl=n(", "),pn=a("a"),Kl=n("forward()"),Xl=n(` expects 2 additional inputs, namely
`),Ts=a("code"),Yl=n("image"),Zl=n(" and "),Ms=a("code"),Jl=n("bbox"),ed=n(". The "),$s=a("code"),td=n("image"),od=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Es=a("code"),nd=n("image"),sd=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),zs=a("code"),ad=n("torch.Tensor"),rd=n(" or a "),qs=a("code"),id=n("Detectron2.structures.ImageList"),ld=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),js=a("code"),dd=n("bbox"),cd=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),un=a("a"),pd=n("LayoutLMModel"),ud=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Vt=a("a"),md=n("Tesseract"),hd=n(" (there\u2019s a "),Qt=a("a"),fd=n(`Python
wrapper`),gd=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),Mr=c(),v(Gt.$$.fragment),$r=c(),fe=a("p"),_d=n("Here, "),Fs=a("code"),vd=n("width"),yd=n(" and "),Ps=a("code"),bd=n("height"),Ld=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),Er=c(),v(Ht.$$.fragment),zr=c(),Qe=a("p"),wd=n("However, this model includes a brand new "),mn=a("a"),kd=n("LayoutLMv2Processor"),xd=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),qr=c(),ge=a("ul"),I=a("li"),Td=n("Internally, "),hn=a("a"),Md=n("LayoutLMv2Model"),$d=n(" will send the "),Cs=a("code"),Ed=n("image"),zd=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Is=a("code"),qd=n("image_feature_pool_shape"),jd=n(` attribute of
`),fn=a("a"),Fd=n("LayoutLMv2Config"),Pd=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Ds=a("code"),Cd=n("seq_length"),Id=n(" + "),As=a("code"),Dd=n("image_feature_pool_shape[0]"),Ad=n(` *
`),Os=a("code"),Od=n("config.image_feature_pool_shape[1]"),Nd=n("."),Sd=c(),Kt=a("li"),Rd=n("When calling "),gn=a("a"),Wd=n("from_pretrained()"),Ud=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),Bd=c(),Xt=a("li"),Vd=n("If you want to train the model in a distributed environment, make sure to call "),Ns=a("code"),Qd=n("synchronize_batch_norm"),Gd=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),jr=c(),Ge=a("p"),Hd=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),_n=a("a"),Kd=n("LayoutXLM\u2019s documentation page"),Xd=n("."),Fr=c(),Ee=a("h2"),He=a("a"),Ss=a("span"),v(Yt.$$.fragment),Yd=c(),Rs=a("span"),Zd=n("Usage: LayoutLMv2Processor"),Pr=c(),Q=a("p"),Jd=n("The easiest way to prepare data for the model is to use "),vn=a("a"),ec=n("LayoutLMv2Processor"),tc=n(`, which internally
combines a feature extractor (`),yn=a("a"),oc=n("LayoutLMv2FeatureExtractor"),nc=n(`) and a tokenizer
(`),bn=a("a"),sc=n("LayoutLMv2Tokenizer"),ac=n(" or "),Ln=a("a"),rc=n("LayoutLMv2TokenizerFast"),ic=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),Cr=c(),v(Zt.$$.fragment),Ir=c(),E=a("p"),lc=n("In short, one can provide a document image (and possibly additional data) to "),wn=a("a"),dc=n("LayoutLMv2Processor"),cc=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),kn=a("a"),pc=n("LayoutLMv2FeatureExtractor"),uc=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ws=a("code"),mc=n("image"),hc=n(` input. The words and
normalized bounding boxes are then provided to `),xn=a("a"),fc=n("LayoutLMv2Tokenizer"),gc=n(` or
`),Tn=a("a"),_c=n("LayoutLMv2TokenizerFast"),vc=n(", which converts them to token-level "),Us=a("code"),yc=n("input_ids"),bc=n(`,
`),Bs=a("code"),Lc=n("attention_mask"),wc=n(", "),Vs=a("code"),kc=n("token_type_ids"),xc=n(", "),Qs=a("code"),Tc=n("bbox"),Mc=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Gs=a("code"),$c=n("labels"),Ec=n("."),Dr=c(),U=a("p"),Mn=a("a"),zc=n("LayoutLMv2Processor"),qc=n(" uses "),Jt=a("a"),jc=n("PyTesseract"),Fc=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),$n=a("a"),Pc=n("LayoutLMv2FeatureExtractor"),Cc=n(" with "),Hs=a("code"),Ic=n("apply_ocr"),Dc=n(" set to "),Ks=a("code"),Ac=n("False"),Oc=n("."),Ar=c(),En=a("p"),Nc=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Or=c(),zn=a("p"),Xs=a("strong"),Sc=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Nr=c(),qn=a("p"),Rc=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Sr=c(),v(eo.$$.fragment),Rr=c(),jn=a("p"),Ys=a("strong"),Wc=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Wr=c(),_e=a("p"),Uc=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),Zs=a("code"),Bc=n("apply_ocr"),Vc=n(` set to
`),Js=a("code"),Qc=n("False"),Gc=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),Ur=c(),v(to.$$.fragment),Br=c(),Fn=a("p"),ea=a("strong"),Hc=n("Use case 3: token classification (training), apply_ocr=False"),Vr=c(),G=a("p"),Kc=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),ta=a("code"),Xc=n("labels"),Yc=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),oa=a("code"),Zc=n("ignore_index"),Jc=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),na=a("code"),ep=n("only_label_first_subword"),tp=n(" set to "),sa=a("code"),op=n("False"),np=n("."),Qr=c(),v(oo.$$.fragment),Gr=c(),Pn=a("p"),aa=a("strong"),sp=n("Use case 4: visual question answering (inference), apply_ocr=True"),Hr=c(),Cn=a("p"),ap=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Kr=c(),v(no.$$.fragment),Xr=c(),In=a("p"),ra=a("strong"),rp=n("Use case 5: visual question answering (inference), apply_ocr=False"),Yr=c(),Dn=a("p"),ip=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Zr=c(),v(so.$$.fragment),Jr=c(),ze=a("h2"),Ke=a("a"),ia=a("span"),v(ao.$$.fragment),lp=c(),la=a("span"),dp=n("LayoutLMv2Config"),ei=c(),Y=a("div"),v(ro.$$.fragment),cp=c(),qe=a("p"),pp=n("This is the configuration class to store the configuration of a "),An=a("a"),up=n("LayoutLMv2Model"),mp=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),io=a("a"),hp=n("microsoft/layoutlmv2-base-uncased"),fp=n(" architecture."),gp=c(),je=a("p"),_p=n("Configuration objects inherit from "),On=a("a"),vp=n("PretrainedConfig"),yp=n(` and can be used to control the model outputs. Read the
documentation from `),Nn=a("a"),bp=n("PretrainedConfig"),Lp=n(" for more information."),wp=c(),v(Xe.$$.fragment),ti=c(),Fe=a("h2"),Ye=a("a"),da=a("span"),v(lo.$$.fragment),kp=c(),ca=a("span"),xp=n("LayoutLMv2FeatureExtractor"),oi=c(),Z=a("div"),v(co.$$.fragment),Tp=c(),pa=a("p"),Mp=n(`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),$p=c(),po=a("p"),Ep=n("This feature extractor inherits from "),ua=a("code"),zp=n("PreTrainedFeatureExtractor()"),qp=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),jp=c(),ve=a("div"),v(uo.$$.fragment),Fp=c(),ma=a("p"),Pp=n("Main method to prepare for the model one or several image(s)."),Cp=c(),v(Ze.$$.fragment),ni=c(),Pe=a("h2"),Je=a("a"),ha=a("span"),v(mo.$$.fragment),Ip=c(),fa=a("span"),Dp=n("LayoutLMv2Tokenizer"),si=c(),N=a("div"),v(ho.$$.fragment),Ap=c(),S=a("p"),Op=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Sn=a("a"),Np=n("LayoutLMv2Tokenizer"),Sp=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ga=a("code"),Rp=n("input_ids"),Wp=n(", "),_a=a("code"),Up=n("attention_mask"),Bp=n(", "),va=a("code"),Vp=n("token_type_ids"),Qp=n(", "),ya=a("code"),Gp=n("bbox"),Hp=n(`, and
optional `),ba=a("code"),Kp=n("labels"),Xp=n(" (for token classification)."),Yp=c(),fo=a("p"),Zp=n("This tokenizer inherits from "),Rn=a("a"),Jp=n("PreTrainedTokenizer"),eu=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),tu=c(),Wn=a("p"),Un=a("a"),ou=n("LayoutLMv2Tokenizer"),nu=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),su=c(),et=a("div"),v(go.$$.fragment),au=c(),La=a("p"),ru=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),iu=c(),Bn=a("div"),v(_o.$$.fragment),ai=c(),Ce=a("h2"),tt=a("a"),wa=a("span"),v(vo.$$.fragment),lu=c(),ka=a("span"),du=n("LayoutLMv2TokenizerFast"),ri=c(),J=a("div"),v(yo.$$.fragment),cu=c(),bo=a("p"),pu=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),xa=a("em"),uu=n("tokenizers"),mu=n(" library). Based on WordPiece."),hu=c(),Lo=a("p"),fu=n("This tokenizer inherits from "),Vn=a("a"),gu=n("PreTrainedTokenizerFast"),_u=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vu=c(),ot=a("div"),v(wo.$$.fragment),yu=c(),Ta=a("p"),bu=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),ii=c(),Ie=a("h2"),nt=a("a"),Ma=a("span"),v(ko.$$.fragment),Lu=c(),$a=a("span"),wu=n("LayoutLMv2Processor"),li=c(),B=a("div"),v(xo.$$.fragment),ku=c(),Ea=a("p"),xu=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),Tu=c(),Qn=a("p"),Gn=a("a"),Mu=n("LayoutLMv2Processor"),$u=n(" offers all the functionalities you need to prepare data for the model."),Eu=c(),F=a("p"),zu=n("It first uses "),Hn=a("a"),qu=n("LayoutLMv2FeatureExtractor"),ju=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Kn=a("a"),Fu=n("LayoutLMv2Tokenizer"),Pu=n(` or
`),Xn=a("a"),Cu=n("LayoutLMv2TokenizerFast"),Iu=n(", which turns the words and bounding boxes into token-level "),za=a("code"),Du=n("input_ids"),Au=n(`,
`),qa=a("code"),Ou=n("attention_mask"),Nu=n(", "),ja=a("code"),Su=n("token_type_ids"),Ru=n(", "),Fa=a("code"),Wu=n("bbox"),Uu=n(". Optionally, one can provide integer "),Pa=a("code"),Bu=n("word_labels"),Vu=n(`, which are turned
into token-level `),Ca=a("code"),Qu=n("labels"),Gu=n(" for token classification tasks (such as FUNSD, CORD)."),Hu=c(),ye=a("div"),v(To.$$.fragment),Ku=c(),$=a("p"),Xu=n("This method first forwards the "),Ia=a("code"),Yu=n("images"),Zu=n(" argument to "),Mo=a("a"),Da=a("strong"),Ju=n("call"),em=n("()"),tm=n(`. In case
`),Yn=a("a"),om=n("LayoutLMv2FeatureExtractor"),nm=n(" was initialized with "),Aa=a("code"),sm=n("apply_ocr"),am=n(" set to "),Oa=a("code"),rm=n("True"),im=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),$o=a("a"),Na=a("strong"),lm=n("call"),dm=n("()"),cm=n(` and returns the output,
together with resized `),Sa=a("code"),pm=n("images"),um=n(". In case "),Zn=a("a"),mm=n("LayoutLMv2FeatureExtractor"),hm=n(" was initialized with "),Ra=a("code"),fm=n("apply_ocr"),gm=n(` set to
`),Wa=a("code"),_m=n("False"),vm=n(", it passes the words ("),Ua=a("code"),ym=n("text"),bm=n("/"),Ba=a("code"),Lm=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),wm=n("."),km=c(),Va=a("p"),xm=n("Please refer to the docstring of the above two methods for more information."),di=c(),De=a("h2"),st=a("a"),Qa=a("span"),v(Eo.$$.fragment),Tm=c(),Ga=a("span"),Mm=n("LayoutLMv2Model"),ci=c(),ce=a("div"),v(zo.$$.fragment),$m=c(),qo=a("p"),Em=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),jo=a("a"),zm=n("torch.nn.Module"),qm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jm=c(),ae=a("div"),v(Fo.$$.fragment),Fm=c(),Ae=a("p"),Pm=n("The "),Jn=a("a"),Cm=n("LayoutLMv2Model"),Im=n(" forward method, overrides the "),Ha=a("code"),Dm=n("__call__"),Am=n(" special method."),Om=c(),v(at.$$.fragment),Nm=c(),v(rt.$$.fragment),pi=c(),Oe=a("h2"),it=a("a"),Ka=a("span"),v(Po.$$.fragment),Sm=c(),Xa=a("span"),Rm=n("LayoutLMv2ForSequenceClassification"),ui=c(),ee=a("div"),v(Co.$$.fragment),Wm=c(),Io=a("p"),Um=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Do=a("a"),Bm=n("RVL-CDIP"),Vm=n(" dataset."),Qm=c(),Ao=a("p"),Gm=n("This model is a PyTorch "),Oo=a("a"),Hm=n("torch.nn.Module"),Km=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xm=c(),re=a("div"),v(No.$$.fragment),Ym=c(),Ne=a("p"),Zm=n("The "),es=a("a"),Jm=n("LayoutLMv2ForSequenceClassification"),eh=n(" forward method, overrides the "),Ya=a("code"),th=n("__call__"),oh=n(" special method."),nh=c(),v(lt.$$.fragment),sh=c(),v(dt.$$.fragment),mi=c(),Se=a("h2"),ct=a("a"),Za=a("span"),v(So.$$.fragment),ah=c(),Ja=a("span"),rh=n("LayoutLMv2ForTokenClassification"),hi=c(),te=a("div"),v(Ro.$$.fragment),ih=c(),oe=a("p"),lh=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Wo=a("a"),dh=n("FUNSD"),ch=n(", "),Uo=a("a"),ph=n("SROIE"),uh=n(`,
`),Bo=a("a"),mh=n("CORD"),hh=n(" and "),Vo=a("a"),fh=n("Kleister-NDA"),gh=n("."),_h=c(),Qo=a("p"),vh=n("This model is a PyTorch "),Go=a("a"),yh=n("torch.nn.Module"),bh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Lh=c(),ie=a("div"),v(Ho.$$.fragment),wh=c(),Re=a("p"),kh=n("The "),ts=a("a"),xh=n("LayoutLMv2ForTokenClassification"),Th=n(" forward method, overrides the "),er=a("code"),Mh=n("__call__"),$h=n(" special method."),Eh=c(),v(pt.$$.fragment),zh=c(),v(ut.$$.fragment),fi=c(),We=a("h2"),mt=a("a"),tr=a("span"),v(Ko.$$.fragment),qh=c(),or=a("span"),jh=n("LayoutLMv2ForQuestionAnswering"),gi=c(),ne=a("div"),v(Xo.$$.fragment),Fh=c(),pe=a("p"),Ph=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Yo=a("a"),Ch=n("DocVQA"),Ih=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),nr=a("code"),Dh=n("span start logits"),Ah=n(" and "),sr=a("code"),Oh=n("span end logits"),Nh=n(")."),Sh=c(),Zo=a("p"),Rh=n("This model is a PyTorch "),Jo=a("a"),Wh=n("torch.nn.Module"),Uh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bh=c(),D=a("div"),v(en.$$.fragment),Vh=c(),Ue=a("p"),Qh=n("The "),os=a("a"),Gh=n("LayoutLMv2ForQuestionAnswering"),Hh=n(" forward method, overrides the "),ar=a("code"),Kh=n("__call__"),Xh=n(" special method."),Yh=c(),v(ht.$$.fragment),Zh=c(),rr=a("p"),Jh=n("Example:"),ef=c(),ir=a("p"),tf=n(`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),of=c(),v(ft.$$.fragment),nf=c(),v(gt.$$.fragment),this.h()},l(t){const d=zv('[data-svelte="svelte-1phssyn"]',document.head);h=r(d,"META",{name:!0,content:!0}),d.forEach(o),x=p(t),f=r(t,"H1",{class:!0});var tn=i(f);g=r(tn,"A",{id:!0,class:!0,href:!0});var lr=i(g);T=r(lr,"SPAN",{});var dr=i(T);y(m.$$.fragment,dr),dr.forEach(o),lr.forEach(o),_=p(tn),O=r(tn,"SPAN",{});var cr=i(O);Hi=s(cr,"LayoutLMV2"),cr.forEach(o),tn.forEach(o),gr=p(t),Me=r(t,"H2",{class:!0});var on=i(Me);Ve=r(on,"A",{id:!0,class:!0,href:!0});var pr=i(Ve);_s=r(pr,"SPAN",{});var ur=i(_s);y(Et.$$.fragment,ur),ur.forEach(o),pr.forEach(o),Ki=p(on),vs=r(on,"SPAN",{});var mr=i(vs);Xi=s(mr,"Overview"),mr.forEach(o),on.forEach(o),_r=p(t),me=r(t,"P",{});var Be=i(me);Yi=s(Be,"The LayoutLMV2 model was proposed in "),zt=r(Be,"A",{href:!0,rel:!0});var hr=i(zt);Zi=s(hr,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),hr.forEach(o),Ji=s(Be,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),an=r(Be,"A",{href:!0});var fr=i(an);el=s(fr,"LayoutLM"),fr.forEach(o),tl=s(Be,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Be.forEach(o),vr=p(t),he=r(t,"UL",{});var ns=i(he);X=r(ns,"LI",{});var be=i(X);ol=s(be,"information extraction from scanned documents: the "),qt=r(be,"A",{href:!0,rel:!0});var df=i(qt);nl=s(df,"FUNSD"),df.forEach(o),sl=s(be,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),jt=r(be,"A",{href:!0,rel:!0});var cf=i(jt);al=s(cf,"CORD"),cf.forEach(o),rl=s(be,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Ft=r(be,"A",{href:!0,rel:!0});var pf=i(Ft);il=s(pf,"SROIE"),pf.forEach(o),ll=s(be,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Pt=r(be,"A",{href:!0,rel:!0});var uf=i(Pt);dl=s(uf,"Kleister-NDA"),uf.forEach(o),cl=s(be,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),be.forEach(o),pl=p(ns),Ct=r(ns,"LI",{});var vi=i(Ct);ul=s(vi,"document image classification: the "),It=r(vi,"A",{href:!0,rel:!0});var mf=i(It);ml=s(mf,"RVL-CDIP"),mf.forEach(o),hl=s(vi,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),vi.forEach(o),fl=p(ns),Dt=r(ns,"LI",{});var yi=i(Dt);gl=s(yi,"document visual question answering: the "),At=r(yi,"A",{href:!0,rel:!0});var hf=i(At);_l=s(hf,"DocVQA"),hf.forEach(o),vl=s(yi,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),yi.forEach(o),ns.forEach(o),yr=p(t),rn=r(t,"P",{});var ff=i(rn);yl=s(ff,"The abstract from the paper is the following:"),ff.forEach(o),br=p(t),ln=r(t,"P",{});var gf=i(ln);ys=r(gf,"EM",{});var _f=i(ys);bl=s(_f,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
its effective model architecture and the advantage of large-scale unlabeled scanned/digital-born documents. In this
paper, we present LayoutLMv2 by pre-training text, layout and image in a multi-modal framework, where new model
architectures and pre-training tasks are leveraged. Specifically, LayoutLMv2 not only uses the existing masked
visual-language modeling task but also the new text-image alignment and text-image matching tasks in the pre-training
stage, where cross-modality interaction is better learned. Meanwhile, it also integrates a spatial-aware self-attention
mechanism into the Transformer architecture, so that the model can fully understand the relative positional
relationship among different text blocks. Experiment results show that LayoutLMv2 outperforms strong baselines and
achieves new state-of-the-art results on a wide variety of downstream visually-rich document understanding tasks,
including FUNSD (0.7895 -> 0.8420), CORD (0.9493 -> 0.9601), SROIE (0.9524 -> 0.9781), Kleister-NDA (0.834 -> 0.852),
RVL-CDIP (0.9443 -> 0.9564), and DocVQA (0.7295 -> 0.8672). The pre-trained LayoutLMv2 model is publicly available at
this https URL.`),_f.forEach(o),gf.forEach(o),Lr=p(t),se=r(t,"P",{});var _t=i(se);Ll=s(_t,"LayoutLMv2 depends on "),bs=r(_t,"CODE",{});var vf=i(bs);wl=s(vf,"detectron2"),vf.forEach(o),kl=s(_t,", "),Ls=r(_t,"CODE",{});var yf=i(Ls);xl=s(yf,"torchvision"),yf.forEach(o),Tl=s(_t," and "),ws=r(_t,"CODE",{});var bf=i(ws);Ml=s(bf,"tesseract"),bf.forEach(o),$l=s(_t,`. Run the
following to install them:`),_t.forEach(o),wr=p(t),y(Ot.$$.fragment,t),kr=p(t),dn=r(t,"P",{});var Lf=i(dn);El=s(Lf,"(If you are developing for LayoutLMv2, note that passing the doctests also requires the installation of these packages.)"),Lf.forEach(o),xr=p(t),cn=r(t,"P",{});var wf=i(cn);zl=s(wf,"Tips:"),wf.forEach(o),Tr=p(t),V=r(t,"UL",{});var Le=i(V);ks=r(Le,"LI",{});var kf=i(ks);ql=s(kf,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),kf.forEach(o),jl=p(Le),Nt=r(Le,"LI",{});var bi=i(Nt);Fl=s(bi,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),St=r(bi,"A",{href:!0,rel:!0});var xf=i(St);Pl=s(xf,"paper"),xf.forEach(o),Cl=s(bi,"."),bi.forEach(o),Il=p(Le),Rt=r(Le,"LI",{});var Li=i(Rt);Dl=s(Li,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Wt=r(Li,"A",{href:!0,rel:!0});var Tf=i(Wt);Al=s(Tf,"here"),Tf.forEach(o),Ol=s(Li,"."),Li.forEach(o),Nl=p(Le),$e=r(Le,"LI",{});var ss=i($e);Sl=s(ss,"LayoutLMv2 uses Facebook AI\u2019s "),Ut=r(ss,"A",{href:!0,rel:!0});var Mf=i(Ut);Rl=s(Mf,"Detectron2"),Mf.forEach(o),Wl=s(ss,` package for its visual
backbone. See `),Bt=r(ss,"A",{href:!0,rel:!0});var $f=i(Bt);Ul=s($f,"this link"),$f.forEach(o),Bl=s(ss,` for installation
instructions.`),ss.forEach(o),Vl=p(Le),M=r(Le,"LI",{});var z=i(M);Ql=s(z,"In addition to "),xs=r(z,"CODE",{});var Ef=i(xs);Gl=s(Ef,"input_ids"),Ef.forEach(o),Hl=s(z,", "),pn=r(z,"A",{href:!0});var zf=i(pn);Kl=s(zf,"forward()"),zf.forEach(o),Xl=s(z,` expects 2 additional inputs, namely
`),Ts=r(z,"CODE",{});var qf=i(Ts);Yl=s(qf,"image"),qf.forEach(o),Zl=s(z," and "),Ms=r(z,"CODE",{});var jf=i(Ms);Jl=s(jf,"bbox"),jf.forEach(o),ed=s(z,". The "),$s=r(z,"CODE",{});var Ff=i($s);td=s(Ff,"image"),Ff.forEach(o),od=s(z,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Es=r(z,"CODE",{});var Pf=i(Es);nd=s(Pf,"image"),Pf.forEach(o),sd=s(z,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),zs=r(z,"CODE",{});var Cf=i(zs);ad=s(Cf,"torch.Tensor"),Cf.forEach(o),rd=s(z," or a "),qs=r(z,"CODE",{});var If=i(qs);id=s(If,"Detectron2.structures.ImageList"),If.forEach(o),ld=s(z,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),js=r(z,"CODE",{});var Df=i(js);dd=s(Df,"bbox"),Df.forEach(o),cd=s(z,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),un=r(z,"A",{href:!0});var Af=i(un);pd=s(Af,"LayoutLMModel"),Af.forEach(o),ud=s(z,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Vt=r(z,"A",{href:!0,rel:!0});var Of=i(Vt);md=s(Of,"Tesseract"),Of.forEach(o),hd=s(z," (there\u2019s a "),Qt=r(z,"A",{href:!0,rel:!0});var Nf=i(Qt);fd=s(Nf,`Python
wrapper`),Nf.forEach(o),gd=s(z,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),z.forEach(o),Le.forEach(o),Mr=p(t),y(Gt.$$.fragment,t),$r=p(t),fe=r(t,"P",{});var as=i(fe);_d=s(as,"Here, "),Fs=r(as,"CODE",{});var Sf=i(Fs);vd=s(Sf,"width"),Sf.forEach(o),yd=s(as," and "),Ps=r(as,"CODE",{});var Rf=i(Ps);bd=s(Rf,"height"),Rf.forEach(o),Ld=s(as,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),as.forEach(o),Er=p(t),y(Ht.$$.fragment,t),zr=p(t),Qe=r(t,"P",{});var wi=i(Qe);wd=s(wi,"However, this model includes a brand new "),mn=r(wi,"A",{href:!0});var Wf=i(mn);kd=s(Wf,"LayoutLMv2Processor"),Wf.forEach(o),xd=s(wi,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),wi.forEach(o),qr=p(t),ge=r(t,"UL",{});var rs=i(ge);I=r(rs,"LI",{});var R=i(I);Td=s(R,"Internally, "),hn=r(R,"A",{href:!0});var Uf=i(hn);Md=s(Uf,"LayoutLMv2Model"),Uf.forEach(o),$d=s(R," will send the "),Cs=r(R,"CODE",{});var Bf=i(Cs);Ed=s(Bf,"image"),Bf.forEach(o),zd=s(R,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Is=r(R,"CODE",{});var Vf=i(Is);qd=s(Vf,"image_feature_pool_shape"),Vf.forEach(o),jd=s(R,` attribute of
`),fn=r(R,"A",{href:!0});var Qf=i(fn);Fd=s(Qf,"LayoutLMv2Config"),Qf.forEach(o),Pd=s(R,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Ds=r(R,"CODE",{});var Gf=i(Ds);Cd=s(Gf,"seq_length"),Gf.forEach(o),Id=s(R," + "),As=r(R,"CODE",{});var Hf=i(As);Dd=s(Hf,"image_feature_pool_shape[0]"),Hf.forEach(o),Ad=s(R,` *
`),Os=r(R,"CODE",{});var Kf=i(Os);Od=s(Kf,"config.image_feature_pool_shape[1]"),Kf.forEach(o),Nd=s(R,"."),R.forEach(o),Sd=p(rs),Kt=r(rs,"LI",{});var ki=i(Kt);Rd=s(ki,"When calling "),gn=r(ki,"A",{href:!0});var Xf=i(gn);Wd=s(Xf,"from_pretrained()"),Xf.forEach(o),Ud=s(ki,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),ki.forEach(o),Bd=p(rs),Xt=r(rs,"LI",{});var xi=i(Xt);Vd=s(xi,"If you want to train the model in a distributed environment, make sure to call "),Ns=r(xi,"CODE",{});var Yf=i(Ns);Qd=s(Yf,"synchronize_batch_norm"),Yf.forEach(o),Gd=s(xi,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),xi.forEach(o),rs.forEach(o),jr=p(t),Ge=r(t,"P",{});var Ti=i(Ge);Hd=s(Ti,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),_n=r(Ti,"A",{href:!0});var Zf=i(_n);Kd=s(Zf,"LayoutXLM\u2019s documentation page"),Zf.forEach(o),Xd=s(Ti,"."),Ti.forEach(o),Fr=p(t),Ee=r(t,"H2",{class:!0});var Mi=i(Ee);He=r(Mi,"A",{id:!0,class:!0,href:!0});var Jf=i(He);Ss=r(Jf,"SPAN",{});var eg=i(Ss);y(Yt.$$.fragment,eg),eg.forEach(o),Jf.forEach(o),Yd=p(Mi),Rs=r(Mi,"SPAN",{});var tg=i(Rs);Zd=s(tg,"Usage: LayoutLMv2Processor"),tg.forEach(o),Mi.forEach(o),Pr=p(t),Q=r(t,"P",{});var we=i(Q);Jd=s(we,"The easiest way to prepare data for the model is to use "),vn=r(we,"A",{href:!0});var og=i(vn);ec=s(og,"LayoutLMv2Processor"),og.forEach(o),tc=s(we,`, which internally
combines a feature extractor (`),yn=r(we,"A",{href:!0});var ng=i(yn);oc=s(ng,"LayoutLMv2FeatureExtractor"),ng.forEach(o),nc=s(we,`) and a tokenizer
(`),bn=r(we,"A",{href:!0});var sg=i(bn);sc=s(sg,"LayoutLMv2Tokenizer"),sg.forEach(o),ac=s(we," or "),Ln=r(we,"A",{href:!0});var ag=i(Ln);rc=s(ag,"LayoutLMv2TokenizerFast"),ag.forEach(o),ic=s(we,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),we.forEach(o),Cr=p(t),y(Zt.$$.fragment,t),Ir=p(t),E=r(t,"P",{});var P=i(E);lc=s(P,"In short, one can provide a document image (and possibly additional data) to "),wn=r(P,"A",{href:!0});var rg=i(wn);dc=s(rg,"LayoutLMv2Processor"),rg.forEach(o),cc=s(P,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),kn=r(P,"A",{href:!0});var ig=i(kn);pc=s(ig,"LayoutLMv2FeatureExtractor"),ig.forEach(o),uc=s(P,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ws=r(P,"CODE",{});var lg=i(Ws);mc=s(lg,"image"),lg.forEach(o),hc=s(P,` input. The words and
normalized bounding boxes are then provided to `),xn=r(P,"A",{href:!0});var dg=i(xn);fc=s(dg,"LayoutLMv2Tokenizer"),dg.forEach(o),gc=s(P,` or
`),Tn=r(P,"A",{href:!0});var cg=i(Tn);_c=s(cg,"LayoutLMv2TokenizerFast"),cg.forEach(o),vc=s(P,", which converts them to token-level "),Us=r(P,"CODE",{});var pg=i(Us);yc=s(pg,"input_ids"),pg.forEach(o),bc=s(P,`,
`),Bs=r(P,"CODE",{});var ug=i(Bs);Lc=s(ug,"attention_mask"),ug.forEach(o),wc=s(P,", "),Vs=r(P,"CODE",{});var mg=i(Vs);kc=s(mg,"token_type_ids"),mg.forEach(o),xc=s(P,", "),Qs=r(P,"CODE",{});var hg=i(Qs);Tc=s(hg,"bbox"),hg.forEach(o),Mc=s(P,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Gs=r(P,"CODE",{});var fg=i(Gs);$c=s(fg,"labels"),fg.forEach(o),Ec=s(P,"."),P.forEach(o),Dr=p(t),U=r(t,"P",{});var ue=i(U);Mn=r(ue,"A",{href:!0});var gg=i(Mn);zc=s(gg,"LayoutLMv2Processor"),gg.forEach(o),qc=s(ue," uses "),Jt=r(ue,"A",{href:!0,rel:!0});var _g=i(Jt);jc=s(_g,"PyTesseract"),_g.forEach(o),Fc=s(ue,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),$n=r(ue,"A",{href:!0});var vg=i($n);Pc=s(vg,"LayoutLMv2FeatureExtractor"),vg.forEach(o),Cc=s(ue," with "),Hs=r(ue,"CODE",{});var yg=i(Hs);Ic=s(yg,"apply_ocr"),yg.forEach(o),Dc=s(ue," set to "),Ks=r(ue,"CODE",{});var bg=i(Ks);Ac=s(bg,"False"),bg.forEach(o),Oc=s(ue,"."),ue.forEach(o),Ar=p(t),En=r(t,"P",{});var Lg=i(En);Nc=s(Lg,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Lg.forEach(o),Or=p(t),zn=r(t,"P",{});var wg=i(zn);Xs=r(wg,"STRONG",{});var kg=i(Xs);Sc=s(kg,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),kg.forEach(o),wg.forEach(o),Nr=p(t),qn=r(t,"P",{});var xg=i(qn);Rc=s(xg,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),xg.forEach(o),Sr=p(t),y(eo.$$.fragment,t),Rr=p(t),jn=r(t,"P",{});var Tg=i(jn);Ys=r(Tg,"STRONG",{});var Mg=i(Ys);Wc=s(Mg,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Mg.forEach(o),Tg.forEach(o),Wr=p(t),_e=r(t,"P",{});var is=i(_e);Uc=s(is,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),Zs=r(is,"CODE",{});var $g=i(Zs);Bc=s($g,"apply_ocr"),$g.forEach(o),Vc=s(is,` set to
`),Js=r(is,"CODE",{});var Eg=i(Js);Qc=s(Eg,"False"),Eg.forEach(o),Gc=s(is,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),is.forEach(o),Ur=p(t),y(to.$$.fragment,t),Br=p(t),Fn=r(t,"P",{});var zg=i(Fn);ea=r(zg,"STRONG",{});var qg=i(ea);Hc=s(qg,"Use case 3: token classification (training), apply_ocr=False"),qg.forEach(o),zg.forEach(o),Vr=p(t),G=r(t,"P",{});var ke=i(G);Kc=s(ke,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),ta=r(ke,"CODE",{});var jg=i(ta);Xc=s(jg,"labels"),jg.forEach(o),Yc=s(ke,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),oa=r(ke,"CODE",{});var Fg=i(oa);Zc=s(Fg,"ignore_index"),Fg.forEach(o),Jc=s(ke,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),na=r(ke,"CODE",{});var Pg=i(na);ep=s(Pg,"only_label_first_subword"),Pg.forEach(o),tp=s(ke," set to "),sa=r(ke,"CODE",{});var Cg=i(sa);op=s(Cg,"False"),Cg.forEach(o),np=s(ke,"."),ke.forEach(o),Qr=p(t),y(oo.$$.fragment,t),Gr=p(t),Pn=r(t,"P",{});var Ig=i(Pn);aa=r(Ig,"STRONG",{});var Dg=i(aa);sp=s(Dg,"Use case 4: visual question answering (inference), apply_ocr=True"),Dg.forEach(o),Ig.forEach(o),Hr=p(t),Cn=r(t,"P",{});var Ag=i(Cn);ap=s(Ag,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Ag.forEach(o),Kr=p(t),y(no.$$.fragment,t),Xr=p(t),In=r(t,"P",{});var Og=i(In);ra=r(Og,"STRONG",{});var Ng=i(ra);rp=s(Ng,"Use case 5: visual question answering (inference), apply_ocr=False"),Ng.forEach(o),Og.forEach(o),Yr=p(t),Dn=r(t,"P",{});var Sg=i(Dn);ip=s(Sg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Sg.forEach(o),Zr=p(t),y(so.$$.fragment,t),Jr=p(t),ze=r(t,"H2",{class:!0});var $i=i(ze);Ke=r($i,"A",{id:!0,class:!0,href:!0});var Rg=i(Ke);ia=r(Rg,"SPAN",{});var Wg=i(ia);y(ao.$$.fragment,Wg),Wg.forEach(o),Rg.forEach(o),lp=p($i),la=r($i,"SPAN",{});var Ug=i(la);dp=s(Ug,"LayoutLMv2Config"),Ug.forEach(o),$i.forEach(o),ei=p(t),Y=r(t,"DIV",{class:!0});var vt=i(Y);y(ro.$$.fragment,vt),cp=p(vt),qe=r(vt,"P",{});var ls=i(qe);pp=s(ls,"This is the configuration class to store the configuration of a "),An=r(ls,"A",{href:!0});var Bg=i(An);up=s(Bg,"LayoutLMv2Model"),Bg.forEach(o),mp=s(ls,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),io=r(ls,"A",{href:!0,rel:!0});var Vg=i(io);hp=s(Vg,"microsoft/layoutlmv2-base-uncased"),Vg.forEach(o),fp=s(ls," architecture."),ls.forEach(o),gp=p(vt),je=r(vt,"P",{});var ds=i(je);_p=s(ds,"Configuration objects inherit from "),On=r(ds,"A",{href:!0});var Qg=i(On);vp=s(Qg,"PretrainedConfig"),Qg.forEach(o),yp=s(ds,` and can be used to control the model outputs. Read the
documentation from `),Nn=r(ds,"A",{href:!0});var Gg=i(Nn);bp=s(Gg,"PretrainedConfig"),Gg.forEach(o),Lp=s(ds," for more information."),ds.forEach(o),wp=p(vt),y(Xe.$$.fragment,vt),vt.forEach(o),ti=p(t),Fe=r(t,"H2",{class:!0});var Ei=i(Fe);Ye=r(Ei,"A",{id:!0,class:!0,href:!0});var Hg=i(Ye);da=r(Hg,"SPAN",{});var Kg=i(da);y(lo.$$.fragment,Kg),Kg.forEach(o),Hg.forEach(o),kp=p(Ei),ca=r(Ei,"SPAN",{});var Xg=i(ca);xp=s(Xg,"LayoutLMv2FeatureExtractor"),Xg.forEach(o),Ei.forEach(o),oi=p(t),Z=r(t,"DIV",{class:!0});var yt=i(Z);y(co.$$.fragment,yt),Tp=p(yt),pa=r(yt,"P",{});var Yg=i(pa);Mp=s(Yg,`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),Yg.forEach(o),$p=p(yt),po=r(yt,"P",{});var zi=i(po);Ep=s(zi,"This feature extractor inherits from "),ua=r(zi,"CODE",{});var Zg=i(ua);zp=s(Zg,"PreTrainedFeatureExtractor()"),Zg.forEach(o),qp=s(zi,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),zi.forEach(o),jp=p(yt),ve=r(yt,"DIV",{class:!0});var cs=i(ve);y(uo.$$.fragment,cs),Fp=p(cs),ma=r(cs,"P",{});var Jg=i(ma);Pp=s(Jg,"Main method to prepare for the model one or several image(s)."),Jg.forEach(o),Cp=p(cs),y(Ze.$$.fragment,cs),cs.forEach(o),yt.forEach(o),ni=p(t),Pe=r(t,"H2",{class:!0});var qi=i(Pe);Je=r(qi,"A",{id:!0,class:!0,href:!0});var e_=i(Je);ha=r(e_,"SPAN",{});var t_=i(ha);y(mo.$$.fragment,t_),t_.forEach(o),e_.forEach(o),Ip=p(qi),fa=r(qi,"SPAN",{});var o_=i(fa);Dp=s(o_,"LayoutLMv2Tokenizer"),o_.forEach(o),qi.forEach(o),si=p(t),N=r(t,"DIV",{class:!0});var le=i(N);y(ho.$$.fragment,le),Ap=p(le),S=r(le,"P",{});var H=i(S);Op=s(H,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Sn=r(H,"A",{href:!0});var n_=i(Sn);Np=s(n_,"LayoutLMv2Tokenizer"),n_.forEach(o),Sp=s(H,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ga=r(H,"CODE",{});var s_=i(ga);Rp=s(s_,"input_ids"),s_.forEach(o),Wp=s(H,", "),_a=r(H,"CODE",{});var a_=i(_a);Up=s(a_,"attention_mask"),a_.forEach(o),Bp=s(H,", "),va=r(H,"CODE",{});var r_=i(va);Vp=s(r_,"token_type_ids"),r_.forEach(o),Qp=s(H,", "),ya=r(H,"CODE",{});var i_=i(ya);Gp=s(i_,"bbox"),i_.forEach(o),Hp=s(H,`, and
optional `),ba=r(H,"CODE",{});var l_=i(ba);Kp=s(l_,"labels"),l_.forEach(o),Xp=s(H," (for token classification)."),H.forEach(o),Yp=p(le),fo=r(le,"P",{});var ji=i(fo);Zp=s(ji,"This tokenizer inherits from "),Rn=r(ji,"A",{href:!0});var d_=i(Rn);Jp=s(d_,"PreTrainedTokenizer"),d_.forEach(o),eu=s(ji,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ji.forEach(o),tu=p(le),Wn=r(le,"P",{});var sf=i(Wn);Un=r(sf,"A",{href:!0});var c_=i(Un);ou=s(c_,"LayoutLMv2Tokenizer"),c_.forEach(o),nu=s(sf,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),sf.forEach(o),su=p(le),et=r(le,"DIV",{class:!0});var Fi=i(et);y(go.$$.fragment,Fi),au=p(Fi),La=r(Fi,"P",{});var p_=i(La);ru=s(p_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),p_.forEach(o),Fi.forEach(o),iu=p(le),Bn=r(le,"DIV",{class:!0});var u_=i(Bn);y(_o.$$.fragment,u_),u_.forEach(o),le.forEach(o),ai=p(t),Ce=r(t,"H2",{class:!0});var Pi=i(Ce);tt=r(Pi,"A",{id:!0,class:!0,href:!0});var m_=i(tt);wa=r(m_,"SPAN",{});var h_=i(wa);y(vo.$$.fragment,h_),h_.forEach(o),m_.forEach(o),lu=p(Pi),ka=r(Pi,"SPAN",{});var f_=i(ka);du=s(f_,"LayoutLMv2TokenizerFast"),f_.forEach(o),Pi.forEach(o),ri=p(t),J=r(t,"DIV",{class:!0});var bt=i(J);y(yo.$$.fragment,bt),cu=p(bt),bo=r(bt,"P",{});var Ci=i(bo);pu=s(Ci,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),xa=r(Ci,"EM",{});var g_=i(xa);uu=s(g_,"tokenizers"),g_.forEach(o),mu=s(Ci," library). Based on WordPiece."),Ci.forEach(o),hu=p(bt),Lo=r(bt,"P",{});var Ii=i(Lo);fu=s(Ii,"This tokenizer inherits from "),Vn=r(Ii,"A",{href:!0});var __=i(Vn);gu=s(__,"PreTrainedTokenizerFast"),__.forEach(o),_u=s(Ii,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ii.forEach(o),vu=p(bt),ot=r(bt,"DIV",{class:!0});var Di=i(ot);y(wo.$$.fragment,Di),yu=p(Di),Ta=r(Di,"P",{});var v_=i(Ta);bu=s(v_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),v_.forEach(o),Di.forEach(o),bt.forEach(o),ii=p(t),Ie=r(t,"H2",{class:!0});var Ai=i(Ie);nt=r(Ai,"A",{id:!0,class:!0,href:!0});var y_=i(nt);Ma=r(y_,"SPAN",{});var b_=i(Ma);y(ko.$$.fragment,b_),b_.forEach(o),y_.forEach(o),Lu=p(Ai),$a=r(Ai,"SPAN",{});var L_=i($a);wu=s(L_,"LayoutLMv2Processor"),L_.forEach(o),Ai.forEach(o),li=p(t),B=r(t,"DIV",{class:!0});var xe=i(B);y(xo.$$.fragment,xe),ku=p(xe),Ea=r(xe,"P",{});var w_=i(Ea);xu=s(w_,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),w_.forEach(o),Tu=p(xe),Qn=r(xe,"P",{});var af=i(Qn);Gn=r(af,"A",{href:!0});var k_=i(Gn);Mu=s(k_,"LayoutLMv2Processor"),k_.forEach(o),$u=s(af," offers all the functionalities you need to prepare data for the model."),af.forEach(o),Eu=p(xe),F=r(xe,"P",{});var C=i(F);zu=s(C,"It first uses "),Hn=r(C,"A",{href:!0});var x_=i(Hn);qu=s(x_,"LayoutLMv2FeatureExtractor"),x_.forEach(o),ju=s(C,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Kn=r(C,"A",{href:!0});var T_=i(Kn);Fu=s(T_,"LayoutLMv2Tokenizer"),T_.forEach(o),Pu=s(C,` or
`),Xn=r(C,"A",{href:!0});var M_=i(Xn);Cu=s(M_,"LayoutLMv2TokenizerFast"),M_.forEach(o),Iu=s(C,", which turns the words and bounding boxes into token-level "),za=r(C,"CODE",{});var $_=i(za);Du=s($_,"input_ids"),$_.forEach(o),Au=s(C,`,
`),qa=r(C,"CODE",{});var E_=i(qa);Ou=s(E_,"attention_mask"),E_.forEach(o),Nu=s(C,", "),ja=r(C,"CODE",{});var z_=i(ja);Su=s(z_,"token_type_ids"),z_.forEach(o),Ru=s(C,", "),Fa=r(C,"CODE",{});var q_=i(Fa);Wu=s(q_,"bbox"),q_.forEach(o),Uu=s(C,". Optionally, one can provide integer "),Pa=r(C,"CODE",{});var j_=i(Pa);Bu=s(j_,"word_labels"),j_.forEach(o),Vu=s(C,`, which are turned
into token-level `),Ca=r(C,"CODE",{});var F_=i(Ca);Qu=s(F_,"labels"),F_.forEach(o),Gu=s(C," for token classification tasks (such as FUNSD, CORD)."),C.forEach(o),Hu=p(xe),ye=r(xe,"DIV",{class:!0});var ps=i(ye);y(To.$$.fragment,ps),Ku=p(ps),$=r(ps,"P",{});var q=i($);Xu=s(q,"This method first forwards the "),Ia=r(q,"CODE",{});var P_=i(Ia);Yu=s(P_,"images"),P_.forEach(o),Zu=s(q," argument to "),Mo=r(q,"A",{href:!0});var rf=i(Mo);Da=r(rf,"STRONG",{});var C_=i(Da);Ju=s(C_,"call"),C_.forEach(o),em=s(rf,"()"),rf.forEach(o),tm=s(q,`. In case
`),Yn=r(q,"A",{href:!0});var I_=i(Yn);om=s(I_,"LayoutLMv2FeatureExtractor"),I_.forEach(o),nm=s(q," was initialized with "),Aa=r(q,"CODE",{});var D_=i(Aa);sm=s(D_,"apply_ocr"),D_.forEach(o),am=s(q," set to "),Oa=r(q,"CODE",{});var A_=i(Oa);rm=s(A_,"True"),A_.forEach(o),im=s(q,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),$o=r(q,"A",{href:!0});var lf=i($o);Na=r(lf,"STRONG",{});var O_=i(Na);lm=s(O_,"call"),O_.forEach(o),dm=s(lf,"()"),lf.forEach(o),cm=s(q,` and returns the output,
together with resized `),Sa=r(q,"CODE",{});var N_=i(Sa);pm=s(N_,"images"),N_.forEach(o),um=s(q,". In case "),Zn=r(q,"A",{href:!0});var S_=i(Zn);mm=s(S_,"LayoutLMv2FeatureExtractor"),S_.forEach(o),hm=s(q," was initialized with "),Ra=r(q,"CODE",{});var R_=i(Ra);fm=s(R_,"apply_ocr"),R_.forEach(o),gm=s(q,` set to
`),Wa=r(q,"CODE",{});var W_=i(Wa);_m=s(W_,"False"),W_.forEach(o),vm=s(q,", it passes the words ("),Ua=r(q,"CODE",{});var U_=i(Ua);ym=s(U_,"text"),U_.forEach(o),bm=s(q,"/"),Ba=r(q,"CODE",{});var B_=i(Ba);Lm=s(B_,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),B_.forEach(o),wm=s(q,"."),q.forEach(o),km=p(ps),Va=r(ps,"P",{});var V_=i(Va);xm=s(V_,"Please refer to the docstring of the above two methods for more information."),V_.forEach(o),ps.forEach(o),xe.forEach(o),di=p(t),De=r(t,"H2",{class:!0});var Oi=i(De);st=r(Oi,"A",{id:!0,class:!0,href:!0});var Q_=i(st);Qa=r(Q_,"SPAN",{});var G_=i(Qa);y(Eo.$$.fragment,G_),G_.forEach(o),Q_.forEach(o),Tm=p(Oi),Ga=r(Oi,"SPAN",{});var H_=i(Ga);Mm=s(H_,"LayoutLMv2Model"),H_.forEach(o),Oi.forEach(o),ci=p(t),ce=r(t,"DIV",{class:!0});var us=i(ce);y(zo.$$.fragment,us),$m=p(us),qo=r(us,"P",{});var Ni=i(qo);Em=s(Ni,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),jo=r(Ni,"A",{href:!0,rel:!0});var K_=i(jo);zm=s(K_,"torch.nn.Module"),K_.forEach(o),qm=s(Ni,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ni.forEach(o),jm=p(us),ae=r(us,"DIV",{class:!0});var Lt=i(ae);y(Fo.$$.fragment,Lt),Fm=p(Lt),Ae=r(Lt,"P",{});var ms=i(Ae);Pm=s(ms,"The "),Jn=r(ms,"A",{href:!0});var X_=i(Jn);Cm=s(X_,"LayoutLMv2Model"),X_.forEach(o),Im=s(ms," forward method, overrides the "),Ha=r(ms,"CODE",{});var Y_=i(Ha);Dm=s(Y_,"__call__"),Y_.forEach(o),Am=s(ms," special method."),ms.forEach(o),Om=p(Lt),y(at.$$.fragment,Lt),Nm=p(Lt),y(rt.$$.fragment,Lt),Lt.forEach(o),us.forEach(o),pi=p(t),Oe=r(t,"H2",{class:!0});var Si=i(Oe);it=r(Si,"A",{id:!0,class:!0,href:!0});var Z_=i(it);Ka=r(Z_,"SPAN",{});var J_=i(Ka);y(Po.$$.fragment,J_),J_.forEach(o),Z_.forEach(o),Sm=p(Si),Xa=r(Si,"SPAN",{});var ev=i(Xa);Rm=s(ev,"LayoutLMv2ForSequenceClassification"),ev.forEach(o),Si.forEach(o),ui=p(t),ee=r(t,"DIV",{class:!0});var wt=i(ee);y(Co.$$.fragment,wt),Wm=p(wt),Io=r(wt,"P",{});var Ri=i(Io);Um=s(Ri,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Do=r(Ri,"A",{href:!0,rel:!0});var tv=i(Do);Bm=s(tv,"RVL-CDIP"),tv.forEach(o),Vm=s(Ri," dataset."),Ri.forEach(o),Qm=p(wt),Ao=r(wt,"P",{});var Wi=i(Ao);Gm=s(Wi,"This model is a PyTorch "),Oo=r(Wi,"A",{href:!0,rel:!0});var ov=i(Oo);Hm=s(ov,"torch.nn.Module"),ov.forEach(o),Km=s(Wi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi.forEach(o),Xm=p(wt),re=r(wt,"DIV",{class:!0});var kt=i(re);y(No.$$.fragment,kt),Ym=p(kt),Ne=r(kt,"P",{});var hs=i(Ne);Zm=s(hs,"The "),es=r(hs,"A",{href:!0});var nv=i(es);Jm=s(nv,"LayoutLMv2ForSequenceClassification"),nv.forEach(o),eh=s(hs," forward method, overrides the "),Ya=r(hs,"CODE",{});var sv=i(Ya);th=s(sv,"__call__"),sv.forEach(o),oh=s(hs," special method."),hs.forEach(o),nh=p(kt),y(lt.$$.fragment,kt),sh=p(kt),y(dt.$$.fragment,kt),kt.forEach(o),wt.forEach(o),mi=p(t),Se=r(t,"H2",{class:!0});var Ui=i(Se);ct=r(Ui,"A",{id:!0,class:!0,href:!0});var av=i(ct);Za=r(av,"SPAN",{});var rv=i(Za);y(So.$$.fragment,rv),rv.forEach(o),av.forEach(o),ah=p(Ui),Ja=r(Ui,"SPAN",{});var iv=i(Ja);rh=s(iv,"LayoutLMv2ForTokenClassification"),iv.forEach(o),Ui.forEach(o),hi=p(t),te=r(t,"DIV",{class:!0});var xt=i(te);y(Ro.$$.fragment,xt),ih=p(xt),oe=r(xt,"P",{});var Te=i(oe);lh=s(Te,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Wo=r(Te,"A",{href:!0,rel:!0});var lv=i(Wo);dh=s(lv,"FUNSD"),lv.forEach(o),ch=s(Te,", "),Uo=r(Te,"A",{href:!0,rel:!0});var dv=i(Uo);ph=s(dv,"SROIE"),dv.forEach(o),uh=s(Te,`,
`),Bo=r(Te,"A",{href:!0,rel:!0});var cv=i(Bo);mh=s(cv,"CORD"),cv.forEach(o),hh=s(Te," and "),Vo=r(Te,"A",{href:!0,rel:!0});var pv=i(Vo);fh=s(pv,"Kleister-NDA"),pv.forEach(o),gh=s(Te,"."),Te.forEach(o),_h=p(xt),Qo=r(xt,"P",{});var Bi=i(Qo);vh=s(Bi,"This model is a PyTorch "),Go=r(Bi,"A",{href:!0,rel:!0});var uv=i(Go);yh=s(uv,"torch.nn.Module"),uv.forEach(o),bh=s(Bi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bi.forEach(o),Lh=p(xt),ie=r(xt,"DIV",{class:!0});var Tt=i(ie);y(Ho.$$.fragment,Tt),wh=p(Tt),Re=r(Tt,"P",{});var fs=i(Re);kh=s(fs,"The "),ts=r(fs,"A",{href:!0});var mv=i(ts);xh=s(mv,"LayoutLMv2ForTokenClassification"),mv.forEach(o),Th=s(fs," forward method, overrides the "),er=r(fs,"CODE",{});var hv=i(er);Mh=s(hv,"__call__"),hv.forEach(o),$h=s(fs," special method."),fs.forEach(o),Eh=p(Tt),y(pt.$$.fragment,Tt),zh=p(Tt),y(ut.$$.fragment,Tt),Tt.forEach(o),xt.forEach(o),fi=p(t),We=r(t,"H2",{class:!0});var Vi=i(We);mt=r(Vi,"A",{id:!0,class:!0,href:!0});var fv=i(mt);tr=r(fv,"SPAN",{});var gv=i(tr);y(Ko.$$.fragment,gv),gv.forEach(o),fv.forEach(o),qh=p(Vi),or=r(Vi,"SPAN",{});var _v=i(or);jh=s(_v,"LayoutLMv2ForQuestionAnswering"),_v.forEach(o),Vi.forEach(o),gi=p(t),ne=r(t,"DIV",{class:!0});var Mt=i(ne);y(Xo.$$.fragment,Mt),Fh=p(Mt),pe=r(Mt,"P",{});var $t=i(pe);Ph=s($t,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Yo=r($t,"A",{href:!0,rel:!0});var vv=i(Yo);Ch=s(vv,"DocVQA"),vv.forEach(o),Ih=s($t,` (a linear layer on top of the text part of the hidden-states output to
compute `),nr=r($t,"CODE",{});var yv=i(nr);Dh=s(yv,"span start logits"),yv.forEach(o),Ah=s($t," and "),sr=r($t,"CODE",{});var bv=i(sr);Oh=s(bv,"span end logits"),bv.forEach(o),Nh=s($t,")."),$t.forEach(o),Sh=p(Mt),Zo=r(Mt,"P",{});var Qi=i(Zo);Rh=s(Qi,"This model is a PyTorch "),Jo=r(Qi,"A",{href:!0,rel:!0});var Lv=i(Jo);Wh=s(Lv,"torch.nn.Module"),Lv.forEach(o),Uh=s(Qi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qi.forEach(o),Bh=p(Mt),D=r(Mt,"DIV",{class:!0});var K=i(D);y(en.$$.fragment,K),Vh=p(K),Ue=r(K,"P",{});var gs=i(Ue);Qh=s(gs,"The "),os=r(gs,"A",{href:!0});var wv=i(os);Gh=s(wv,"LayoutLMv2ForQuestionAnswering"),wv.forEach(o),Hh=s(gs," forward method, overrides the "),ar=r(gs,"CODE",{});var kv=i(ar);Kh=s(kv,"__call__"),kv.forEach(o),Xh=s(gs," special method."),gs.forEach(o),Yh=p(K),y(ht.$$.fragment,K),Zh=p(K),rr=r(K,"P",{});var xv=i(rr);Jh=s(xv,"Example:"),xv.forEach(o),ef=p(K),ir=r(K,"P",{});var Tv=i(ir);tf=s(Tv,`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),Tv.forEach(o),of=p(K),y(ft.$$.fragment,K),nf=p(K),y(gt.$$.fragment,K),K.forEach(o),Mt.forEach(o),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Uv)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(f,"class","relative group"),l(Ve,"id","overview"),l(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ve,"href","#overview"),l(Me,"class","relative group"),l(zt,"href","https://arxiv.org/abs/2012.14740"),l(zt,"rel","nofollow"),l(an,"href","layoutlm"),l(qt,"href","https://guillaumejaume.github.io/FUNSD/"),l(qt,"rel","nofollow"),l(jt,"href","https://github.com/clovaai/cord"),l(jt,"rel","nofollow"),l(Ft,"href","https://rrc.cvc.uab.es/?ch=13"),l(Ft,"rel","nofollow"),l(Pt,"href","https://github.com/applicaai/kleister-nda"),l(Pt,"rel","nofollow"),l(It,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(It,"rel","nofollow"),l(At,"href","https://arxiv.org/abs/2007.00398"),l(At,"rel","nofollow"),l(St,"href","https://arxiv.org/abs/2012.14740"),l(St,"rel","nofollow"),l(Wt,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(Wt,"rel","nofollow"),l(Ut,"href","https://github.com/facebookresearch/detectron2/"),l(Ut,"rel","nofollow"),l(Bt,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Bt,"rel","nofollow"),l(pn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(un,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Vt,"href","https://github.com/tesseract-ocr/tesseract"),l(Vt,"rel","nofollow"),l(Qt,"href","https://pypi.org/project/pytesseract/"),l(Qt,"rel","nofollow"),l(mn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(hn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(fn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(gn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(_n,"href","layoutxlm"),l(He,"id","usage-layoutlmv2processor"),l(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(He,"href","#usage-layoutlmv2processor"),l(Ee,"class","relative group"),l(vn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(yn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(bn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Ln,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(wn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(kn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(xn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Tn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(Mn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Jt,"href","https://pypi.org/project/pytesseract/"),l(Jt,"rel","nofollow"),l($n,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Ke,"id","transformers.LayoutLMv2Config"),l(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ke,"href","#transformers.LayoutLMv2Config"),l(ze,"class","relative group"),l(An,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(io,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(io,"rel","nofollow"),l(On,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Nn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ye,"id","transformers.LayoutLMv2FeatureExtractor"),l(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ye,"href","#transformers.LayoutLMv2FeatureExtractor"),l(Fe,"class","relative group"),l(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Je,"id","transformers.LayoutLMv2Tokenizer"),l(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Je,"href","#transformers.LayoutLMv2Tokenizer"),l(Pe,"class","relative group"),l(Sn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Rn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Un,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(tt,"id","transformers.LayoutLMv2TokenizerFast"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#transformers.LayoutLMv2TokenizerFast"),l(Ce,"class","relative group"),l(Vn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(nt,"id","transformers.LayoutLMv2Processor"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.LayoutLMv2Processor"),l(Ie,"class","relative group"),l(Gn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Hn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Kn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Xn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(Mo,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(Yn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l($o,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Zn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(st,"id","transformers.LayoutLMv2Model"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.LayoutLMv2Model"),l(De,"class","relative group"),l(jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(jo,"rel","nofollow"),l(Jn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(it,"id","transformers.LayoutLMv2ForSequenceClassification"),l(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(it,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(Oe,"class","relative group"),l(Do,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Do,"rel","nofollow"),l(Oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Oo,"rel","nofollow"),l(es,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ct,"id","transformers.LayoutLMv2ForTokenClassification"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Se,"class","relative group"),l(Wo,"href","https://guillaumejaume.github.io/FUNSD/"),l(Wo,"rel","nofollow"),l(Uo,"href","https://rrc.cvc.uab.es/?ch=13"),l(Uo,"rel","nofollow"),l(Bo,"href","https://github.com/clovaai/cord"),l(Bo,"rel","nofollow"),l(Vo,"href","https://github.com/applicaai/kleister-nda"),l(Vo,"rel","nofollow"),l(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Go,"rel","nofollow"),l(ts,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(mt,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(mt,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(We,"class","relative group"),l(Yo,"href","https://rrc.cvc.uab.es/?ch=17"),l(Yo,"rel","nofollow"),l(Jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Jo,"rel","nofollow"),l(os,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,h),u(t,x,d),u(t,f,d),e(f,g),e(g,T),b(m,T,null),e(f,_),e(f,O),e(O,Hi),u(t,gr,d),u(t,Me,d),e(Me,Ve),e(Ve,_s),b(Et,_s,null),e(Me,Ki),e(Me,vs),e(vs,Xi),u(t,_r,d),u(t,me,d),e(me,Yi),e(me,zt),e(zt,Zi),e(me,Ji),e(me,an),e(an,el),e(me,tl),u(t,vr,d),u(t,he,d),e(he,X),e(X,ol),e(X,qt),e(qt,nl),e(X,sl),e(X,jt),e(jt,al),e(X,rl),e(X,Ft),e(Ft,il),e(X,ll),e(X,Pt),e(Pt,dl),e(X,cl),e(he,pl),e(he,Ct),e(Ct,ul),e(Ct,It),e(It,ml),e(Ct,hl),e(he,fl),e(he,Dt),e(Dt,gl),e(Dt,At),e(At,_l),e(Dt,vl),u(t,yr,d),u(t,rn,d),e(rn,yl),u(t,br,d),u(t,ln,d),e(ln,ys),e(ys,bl),u(t,Lr,d),u(t,se,d),e(se,Ll),e(se,bs),e(bs,wl),e(se,kl),e(se,Ls),e(Ls,xl),e(se,Tl),e(se,ws),e(ws,Ml),e(se,$l),u(t,wr,d),b(Ot,t,d),u(t,kr,d),u(t,dn,d),e(dn,El),u(t,xr,d),u(t,cn,d),e(cn,zl),u(t,Tr,d),u(t,V,d),e(V,ks),e(ks,ql),e(V,jl),e(V,Nt),e(Nt,Fl),e(Nt,St),e(St,Pl),e(Nt,Cl),e(V,Il),e(V,Rt),e(Rt,Dl),e(Rt,Wt),e(Wt,Al),e(Rt,Ol),e(V,Nl),e(V,$e),e($e,Sl),e($e,Ut),e(Ut,Rl),e($e,Wl),e($e,Bt),e(Bt,Ul),e($e,Bl),e(V,Vl),e(V,M),e(M,Ql),e(M,xs),e(xs,Gl),e(M,Hl),e(M,pn),e(pn,Kl),e(M,Xl),e(M,Ts),e(Ts,Yl),e(M,Zl),e(M,Ms),e(Ms,Jl),e(M,ed),e(M,$s),e($s,td),e(M,od),e(M,Es),e(Es,nd),e(M,sd),e(M,zs),e(zs,ad),e(M,rd),e(M,qs),e(qs,id),e(M,ld),e(M,js),e(js,dd),e(M,cd),e(M,un),e(un,pd),e(M,ud),e(M,Vt),e(Vt,md),e(M,hd),e(M,Qt),e(Qt,fd),e(M,gd),u(t,Mr,d),b(Gt,t,d),u(t,$r,d),u(t,fe,d),e(fe,_d),e(fe,Fs),e(Fs,vd),e(fe,yd),e(fe,Ps),e(Ps,bd),e(fe,Ld),u(t,Er,d),b(Ht,t,d),u(t,zr,d),u(t,Qe,d),e(Qe,wd),e(Qe,mn),e(mn,kd),e(Qe,xd),u(t,qr,d),u(t,ge,d),e(ge,I),e(I,Td),e(I,hn),e(hn,Md),e(I,$d),e(I,Cs),e(Cs,Ed),e(I,zd),e(I,Is),e(Is,qd),e(I,jd),e(I,fn),e(fn,Fd),e(I,Pd),e(I,Ds),e(Ds,Cd),e(I,Id),e(I,As),e(As,Dd),e(I,Ad),e(I,Os),e(Os,Od),e(I,Nd),e(ge,Sd),e(ge,Kt),e(Kt,Rd),e(Kt,gn),e(gn,Wd),e(Kt,Ud),e(ge,Bd),e(ge,Xt),e(Xt,Vd),e(Xt,Ns),e(Ns,Qd),e(Xt,Gd),u(t,jr,d),u(t,Ge,d),e(Ge,Hd),e(Ge,_n),e(_n,Kd),e(Ge,Xd),u(t,Fr,d),u(t,Ee,d),e(Ee,He),e(He,Ss),b(Yt,Ss,null),e(Ee,Yd),e(Ee,Rs),e(Rs,Zd),u(t,Pr,d),u(t,Q,d),e(Q,Jd),e(Q,vn),e(vn,ec),e(Q,tc),e(Q,yn),e(yn,oc),e(Q,nc),e(Q,bn),e(bn,sc),e(Q,ac),e(Q,Ln),e(Ln,rc),e(Q,ic),u(t,Cr,d),b(Zt,t,d),u(t,Ir,d),u(t,E,d),e(E,lc),e(E,wn),e(wn,dc),e(E,cc),e(E,kn),e(kn,pc),e(E,uc),e(E,Ws),e(Ws,mc),e(E,hc),e(E,xn),e(xn,fc),e(E,gc),e(E,Tn),e(Tn,_c),e(E,vc),e(E,Us),e(Us,yc),e(E,bc),e(E,Bs),e(Bs,Lc),e(E,wc),e(E,Vs),e(Vs,kc),e(E,xc),e(E,Qs),e(Qs,Tc),e(E,Mc),e(E,Gs),e(Gs,$c),e(E,Ec),u(t,Dr,d),u(t,U,d),e(U,Mn),e(Mn,zc),e(U,qc),e(U,Jt),e(Jt,jc),e(U,Fc),e(U,$n),e($n,Pc),e(U,Cc),e(U,Hs),e(Hs,Ic),e(U,Dc),e(U,Ks),e(Ks,Ac),e(U,Oc),u(t,Ar,d),u(t,En,d),e(En,Nc),u(t,Or,d),u(t,zn,d),e(zn,Xs),e(Xs,Sc),u(t,Nr,d),u(t,qn,d),e(qn,Rc),u(t,Sr,d),b(eo,t,d),u(t,Rr,d),u(t,jn,d),e(jn,Ys),e(Ys,Wc),u(t,Wr,d),u(t,_e,d),e(_e,Uc),e(_e,Zs),e(Zs,Bc),e(_e,Vc),e(_e,Js),e(Js,Qc),e(_e,Gc),u(t,Ur,d),b(to,t,d),u(t,Br,d),u(t,Fn,d),e(Fn,ea),e(ea,Hc),u(t,Vr,d),u(t,G,d),e(G,Kc),e(G,ta),e(ta,Xc),e(G,Yc),e(G,oa),e(oa,Zc),e(G,Jc),e(G,na),e(na,ep),e(G,tp),e(G,sa),e(sa,op),e(G,np),u(t,Qr,d),b(oo,t,d),u(t,Gr,d),u(t,Pn,d),e(Pn,aa),e(aa,sp),u(t,Hr,d),u(t,Cn,d),e(Cn,ap),u(t,Kr,d),b(no,t,d),u(t,Xr,d),u(t,In,d),e(In,ra),e(ra,rp),u(t,Yr,d),u(t,Dn,d),e(Dn,ip),u(t,Zr,d),b(so,t,d),u(t,Jr,d),u(t,ze,d),e(ze,Ke),e(Ke,ia),b(ao,ia,null),e(ze,lp),e(ze,la),e(la,dp),u(t,ei,d),u(t,Y,d),b(ro,Y,null),e(Y,cp),e(Y,qe),e(qe,pp),e(qe,An),e(An,up),e(qe,mp),e(qe,io),e(io,hp),e(qe,fp),e(Y,gp),e(Y,je),e(je,_p),e(je,On),e(On,vp),e(je,yp),e(je,Nn),e(Nn,bp),e(je,Lp),e(Y,wp),b(Xe,Y,null),u(t,ti,d),u(t,Fe,d),e(Fe,Ye),e(Ye,da),b(lo,da,null),e(Fe,kp),e(Fe,ca),e(ca,xp),u(t,oi,d),u(t,Z,d),b(co,Z,null),e(Z,Tp),e(Z,pa),e(pa,Mp),e(Z,$p),e(Z,po),e(po,Ep),e(po,ua),e(ua,zp),e(po,qp),e(Z,jp),e(Z,ve),b(uo,ve,null),e(ve,Fp),e(ve,ma),e(ma,Pp),e(ve,Cp),b(Ze,ve,null),u(t,ni,d),u(t,Pe,d),e(Pe,Je),e(Je,ha),b(mo,ha,null),e(Pe,Ip),e(Pe,fa),e(fa,Dp),u(t,si,d),u(t,N,d),b(ho,N,null),e(N,Ap),e(N,S),e(S,Op),e(S,Sn),e(Sn,Np),e(S,Sp),e(S,ga),e(ga,Rp),e(S,Wp),e(S,_a),e(_a,Up),e(S,Bp),e(S,va),e(va,Vp),e(S,Qp),e(S,ya),e(ya,Gp),e(S,Hp),e(S,ba),e(ba,Kp),e(S,Xp),e(N,Yp),e(N,fo),e(fo,Zp),e(fo,Rn),e(Rn,Jp),e(fo,eu),e(N,tu),e(N,Wn),e(Wn,Un),e(Un,ou),e(Wn,nu),e(N,su),e(N,et),b(go,et,null),e(et,au),e(et,La),e(La,ru),e(N,iu),e(N,Bn),b(_o,Bn,null),u(t,ai,d),u(t,Ce,d),e(Ce,tt),e(tt,wa),b(vo,wa,null),e(Ce,lu),e(Ce,ka),e(ka,du),u(t,ri,d),u(t,J,d),b(yo,J,null),e(J,cu),e(J,bo),e(bo,pu),e(bo,xa),e(xa,uu),e(bo,mu),e(J,hu),e(J,Lo),e(Lo,fu),e(Lo,Vn),e(Vn,gu),e(Lo,_u),e(J,vu),e(J,ot),b(wo,ot,null),e(ot,yu),e(ot,Ta),e(Ta,bu),u(t,ii,d),u(t,Ie,d),e(Ie,nt),e(nt,Ma),b(ko,Ma,null),e(Ie,Lu),e(Ie,$a),e($a,wu),u(t,li,d),u(t,B,d),b(xo,B,null),e(B,ku),e(B,Ea),e(Ea,xu),e(B,Tu),e(B,Qn),e(Qn,Gn),e(Gn,Mu),e(Qn,$u),e(B,Eu),e(B,F),e(F,zu),e(F,Hn),e(Hn,qu),e(F,ju),e(F,Kn),e(Kn,Fu),e(F,Pu),e(F,Xn),e(Xn,Cu),e(F,Iu),e(F,za),e(za,Du),e(F,Au),e(F,qa),e(qa,Ou),e(F,Nu),e(F,ja),e(ja,Su),e(F,Ru),e(F,Fa),e(Fa,Wu),e(F,Uu),e(F,Pa),e(Pa,Bu),e(F,Vu),e(F,Ca),e(Ca,Qu),e(F,Gu),e(B,Hu),e(B,ye),b(To,ye,null),e(ye,Ku),e(ye,$),e($,Xu),e($,Ia),e(Ia,Yu),e($,Zu),e($,Mo),e(Mo,Da),e(Da,Ju),e(Mo,em),e($,tm),e($,Yn),e(Yn,om),e($,nm),e($,Aa),e(Aa,sm),e($,am),e($,Oa),e(Oa,rm),e($,im),e($,$o),e($o,Na),e(Na,lm),e($o,dm),e($,cm),e($,Sa),e(Sa,pm),e($,um),e($,Zn),e(Zn,mm),e($,hm),e($,Ra),e(Ra,fm),e($,gm),e($,Wa),e(Wa,_m),e($,vm),e($,Ua),e(Ua,ym),e($,bm),e($,Ba),e(Ba,Lm),e($,wm),e(ye,km),e(ye,Va),e(Va,xm),u(t,di,d),u(t,De,d),e(De,st),e(st,Qa),b(Eo,Qa,null),e(De,Tm),e(De,Ga),e(Ga,Mm),u(t,ci,d),u(t,ce,d),b(zo,ce,null),e(ce,$m),e(ce,qo),e(qo,Em),e(qo,jo),e(jo,zm),e(qo,qm),e(ce,jm),e(ce,ae),b(Fo,ae,null),e(ae,Fm),e(ae,Ae),e(Ae,Pm),e(Ae,Jn),e(Jn,Cm),e(Ae,Im),e(Ae,Ha),e(Ha,Dm),e(Ae,Am),e(ae,Om),b(at,ae,null),e(ae,Nm),b(rt,ae,null),u(t,pi,d),u(t,Oe,d),e(Oe,it),e(it,Ka),b(Po,Ka,null),e(Oe,Sm),e(Oe,Xa),e(Xa,Rm),u(t,ui,d),u(t,ee,d),b(Co,ee,null),e(ee,Wm),e(ee,Io),e(Io,Um),e(Io,Do),e(Do,Bm),e(Io,Vm),e(ee,Qm),e(ee,Ao),e(Ao,Gm),e(Ao,Oo),e(Oo,Hm),e(Ao,Km),e(ee,Xm),e(ee,re),b(No,re,null),e(re,Ym),e(re,Ne),e(Ne,Zm),e(Ne,es),e(es,Jm),e(Ne,eh),e(Ne,Ya),e(Ya,th),e(Ne,oh),e(re,nh),b(lt,re,null),e(re,sh),b(dt,re,null),u(t,mi,d),u(t,Se,d),e(Se,ct),e(ct,Za),b(So,Za,null),e(Se,ah),e(Se,Ja),e(Ja,rh),u(t,hi,d),u(t,te,d),b(Ro,te,null),e(te,ih),e(te,oe),e(oe,lh),e(oe,Wo),e(Wo,dh),e(oe,ch),e(oe,Uo),e(Uo,ph),e(oe,uh),e(oe,Bo),e(Bo,mh),e(oe,hh),e(oe,Vo),e(Vo,fh),e(oe,gh),e(te,_h),e(te,Qo),e(Qo,vh),e(Qo,Go),e(Go,yh),e(Qo,bh),e(te,Lh),e(te,ie),b(Ho,ie,null),e(ie,wh),e(ie,Re),e(Re,kh),e(Re,ts),e(ts,xh),e(Re,Th),e(Re,er),e(er,Mh),e(Re,$h),e(ie,Eh),b(pt,ie,null),e(ie,zh),b(ut,ie,null),u(t,fi,d),u(t,We,d),e(We,mt),e(mt,tr),b(Ko,tr,null),e(We,qh),e(We,or),e(or,jh),u(t,gi,d),u(t,ne,d),b(Xo,ne,null),e(ne,Fh),e(ne,pe),e(pe,Ph),e(pe,Yo),e(Yo,Ch),e(pe,Ih),e(pe,nr),e(nr,Dh),e(pe,Ah),e(pe,sr),e(sr,Oh),e(pe,Nh),e(ne,Sh),e(ne,Zo),e(Zo,Rh),e(Zo,Jo),e(Jo,Wh),e(Zo,Uh),e(ne,Bh),e(ne,D),b(en,D,null),e(D,Vh),e(D,Ue),e(Ue,Qh),e(Ue,os),e(os,Gh),e(Ue,Hh),e(Ue,ar),e(ar,Kh),e(Ue,Xh),e(D,Yh),b(ht,D,null),e(D,Zh),e(D,rr),e(rr,Jh),e(D,ef),e(D,ir),e(ir,tf),e(D,of),b(ft,D,null),e(D,nf),b(gt,D,null),_i=!0},p(t,[d]){const tn={};d&2&&(tn.$$scope={dirty:d,ctx:t}),Xe.$set(tn);const lr={};d&2&&(lr.$$scope={dirty:d,ctx:t}),Ze.$set(lr);const dr={};d&2&&(dr.$$scope={dirty:d,ctx:t}),at.$set(dr);const cr={};d&2&&(cr.$$scope={dirty:d,ctx:t}),rt.$set(cr);const on={};d&2&&(on.$$scope={dirty:d,ctx:t}),lt.$set(on);const pr={};d&2&&(pr.$$scope={dirty:d,ctx:t}),dt.$set(pr);const ur={};d&2&&(ur.$$scope={dirty:d,ctx:t}),pt.$set(ur);const mr={};d&2&&(mr.$$scope={dirty:d,ctx:t}),ut.$set(mr);const Be={};d&2&&(Be.$$scope={dirty:d,ctx:t}),ht.$set(Be);const hr={};d&2&&(hr.$$scope={dirty:d,ctx:t}),ft.$set(hr);const fr={};d&2&&(fr.$$scope={dirty:d,ctx:t}),gt.$set(fr)},i(t){_i||(L(m.$$.fragment,t),L(Et.$$.fragment,t),L(Ot.$$.fragment,t),L(Gt.$$.fragment,t),L(Ht.$$.fragment,t),L(Yt.$$.fragment,t),L(Zt.$$.fragment,t),L(eo.$$.fragment,t),L(to.$$.fragment,t),L(oo.$$.fragment,t),L(no.$$.fragment,t),L(so.$$.fragment,t),L(ao.$$.fragment,t),L(ro.$$.fragment,t),L(Xe.$$.fragment,t),L(lo.$$.fragment,t),L(co.$$.fragment,t),L(uo.$$.fragment,t),L(Ze.$$.fragment,t),L(mo.$$.fragment,t),L(ho.$$.fragment,t),L(go.$$.fragment,t),L(_o.$$.fragment,t),L(vo.$$.fragment,t),L(yo.$$.fragment,t),L(wo.$$.fragment,t),L(ko.$$.fragment,t),L(xo.$$.fragment,t),L(To.$$.fragment,t),L(Eo.$$.fragment,t),L(zo.$$.fragment,t),L(Fo.$$.fragment,t),L(at.$$.fragment,t),L(rt.$$.fragment,t),L(Po.$$.fragment,t),L(Co.$$.fragment,t),L(No.$$.fragment,t),L(lt.$$.fragment,t),L(dt.$$.fragment,t),L(So.$$.fragment,t),L(Ro.$$.fragment,t),L(Ho.$$.fragment,t),L(pt.$$.fragment,t),L(ut.$$.fragment,t),L(Ko.$$.fragment,t),L(Xo.$$.fragment,t),L(en.$$.fragment,t),L(ht.$$.fragment,t),L(ft.$$.fragment,t),L(gt.$$.fragment,t),_i=!0)},o(t){w(m.$$.fragment,t),w(Et.$$.fragment,t),w(Ot.$$.fragment,t),w(Gt.$$.fragment,t),w(Ht.$$.fragment,t),w(Yt.$$.fragment,t),w(Zt.$$.fragment,t),w(eo.$$.fragment,t),w(to.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(so.$$.fragment,t),w(ao.$$.fragment,t),w(ro.$$.fragment,t),w(Xe.$$.fragment,t),w(lo.$$.fragment,t),w(co.$$.fragment,t),w(uo.$$.fragment,t),w(Ze.$$.fragment,t),w(mo.$$.fragment,t),w(ho.$$.fragment,t),w(go.$$.fragment,t),w(_o.$$.fragment,t),w(vo.$$.fragment,t),w(yo.$$.fragment,t),w(wo.$$.fragment,t),w(ko.$$.fragment,t),w(xo.$$.fragment,t),w(To.$$.fragment,t),w(Eo.$$.fragment,t),w(zo.$$.fragment,t),w(Fo.$$.fragment,t),w(at.$$.fragment,t),w(rt.$$.fragment,t),w(Po.$$.fragment,t),w(Co.$$.fragment,t),w(No.$$.fragment,t),w(lt.$$.fragment,t),w(dt.$$.fragment,t),w(So.$$.fragment,t),w(Ro.$$.fragment,t),w(Ho.$$.fragment,t),w(pt.$$.fragment,t),w(ut.$$.fragment,t),w(Ko.$$.fragment,t),w(Xo.$$.fragment,t),w(en.$$.fragment,t),w(ht.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),_i=!1},d(t){o(h),t&&o(x),t&&o(f),k(m),t&&o(gr),t&&o(Me),k(Et),t&&o(_r),t&&o(me),t&&o(vr),t&&o(he),t&&o(yr),t&&o(rn),t&&o(br),t&&o(ln),t&&o(Lr),t&&o(se),t&&o(wr),k(Ot,t),t&&o(kr),t&&o(dn),t&&o(xr),t&&o(cn),t&&o(Tr),t&&o(V),t&&o(Mr),k(Gt,t),t&&o($r),t&&o(fe),t&&o(Er),k(Ht,t),t&&o(zr),t&&o(Qe),t&&o(qr),t&&o(ge),t&&o(jr),t&&o(Ge),t&&o(Fr),t&&o(Ee),k(Yt),t&&o(Pr),t&&o(Q),t&&o(Cr),k(Zt,t),t&&o(Ir),t&&o(E),t&&o(Dr),t&&o(U),t&&o(Ar),t&&o(En),t&&o(Or),t&&o(zn),t&&o(Nr),t&&o(qn),t&&o(Sr),k(eo,t),t&&o(Rr),t&&o(jn),t&&o(Wr),t&&o(_e),t&&o(Ur),k(to,t),t&&o(Br),t&&o(Fn),t&&o(Vr),t&&o(G),t&&o(Qr),k(oo,t),t&&o(Gr),t&&o(Pn),t&&o(Hr),t&&o(Cn),t&&o(Kr),k(no,t),t&&o(Xr),t&&o(In),t&&o(Yr),t&&o(Dn),t&&o(Zr),k(so,t),t&&o(Jr),t&&o(ze),k(ao),t&&o(ei),t&&o(Y),k(ro),k(Xe),t&&o(ti),t&&o(Fe),k(lo),t&&o(oi),t&&o(Z),k(co),k(uo),k(Ze),t&&o(ni),t&&o(Pe),k(mo),t&&o(si),t&&o(N),k(ho),k(go),k(_o),t&&o(ai),t&&o(Ce),k(vo),t&&o(ri),t&&o(J),k(yo),k(wo),t&&o(ii),t&&o(Ie),k(ko),t&&o(li),t&&o(B),k(xo),k(To),t&&o(di),t&&o(De),k(Eo),t&&o(ci),t&&o(ce),k(zo),k(Fo),k(at),k(rt),t&&o(pi),t&&o(Oe),k(Po),t&&o(ui),t&&o(ee),k(Co),k(No),k(lt),k(dt),t&&o(mi),t&&o(Se),k(So),t&&o(hi),t&&o(te),k(Ro),k(Ho),k(pt),k(ut),t&&o(fi),t&&o(We),k(Ko),t&&o(gi),t&&o(ne),k(Xo),k(en),k(ht),k(ft),k(gt)}}}const Uv={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2FeatureExtractor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function Bv(j){return qv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Yv extends Mv{constructor(h){super();$v(this,h,Bv,Wv,Ev,{})}}export{Yv as default,Uv as metadata};
