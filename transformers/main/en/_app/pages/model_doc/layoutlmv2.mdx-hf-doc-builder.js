import{S as gv,i as _v,s as vv,e as a,k as c,w as v,t as n,M as yv,c as r,d as o,m as p,a as i,x as y,h as s,b as l,G as e,g as m,y as b,q as L,o as k,B as w,v as bv,L as us}from"../../chunks/vendor-hf-doc-builder.js";import{T as Wi}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as U}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as le}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ms}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Lv(F){let h,x,f,g,M;return g=new U({props:{code:`from transformers import LayoutLMv2Config, LayoutLMv2Model

# Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration
configuration = LayoutLMv2Config()

# Initializing a model (with random weights) from the microsoft/layoutlmv2-base-uncased style configuration
model = LayoutLMv2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Config, LayoutLMv2Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(u),y(g.$$.fragment,u)},m(u,_){m(u,h,_),e(h,x),m(u,f,_),b(g,u,_),M=!0},p:us,i(u){M||(L(g.$$.fragment,u),M=!0)},o(u){k(g.$$.fragment,u),M=!1},d(u){u&&o(h),u&&o(f),w(g,u)}}}function kv(F){let h,x,f,g,M;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),M=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),M=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(u,_){m(u,h,_),e(h,x),e(h,f),e(f,g),e(h,M)},d(u){u&&o(h)}}}function wv(F){let h,x,f,g,M;return g=new U({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model, set_seed
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
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">342</span>, <span class="hljs-number">768</span>])`}}),{c(){h=a("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Examples:"),_.forEach(o),f=p(u),y(g.$$.fragment,u)},m(u,_){m(u,h,_),e(h,x),m(u,f,_),b(g,u,_),M=!0},p:us,i(u){M||(L(g.$$.fragment,u),M=!0)},o(u){k(g.$$.fragment,u),M=!1},d(u){u&&o(h),u&&o(f),w(g,u)}}}function xv(F){let h,x,f,g,M;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),M=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),M=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(u,_){m(u,h,_),e(h,x),e(h,f),e(f,g),e(h,M)},d(u){u&&o(h)}}}function Mv(F){let h,x,f,g,M;return g=new U({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification, set_seed
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
(<span class="hljs-number">4</span>, <span class="hljs-string">&#x27;advertisement&#x27;</span>)`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(u),y(g.$$.fragment,u)},m(u,_){m(u,h,_),e(h,x),m(u,f,_),b(g,u,_),M=!0},p:us,i(u){M||(L(g.$$.fragment,u),M=!0)},o(u){k(g.$$.fragment,u),M=!1},d(u){u&&o(h),u&&o(f),w(g,u)}}}function Tv(F){let h,x,f,g,M;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),M=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),M=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(u,_){m(u,h,_),e(h,x),e(h,f),e(f,g),e(h,M)},d(u){u&&o(h)}}}function $v(F){let h,x,f,g,M;return g=new U({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification, set_seed
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
[<span class="hljs-string">&#x27;B-ANSWER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>]`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(u),y(g.$$.fragment,u)},m(u,_){m(u,h,_),e(h,x),m(u,f,_),b(g,u,_),M=!0},p:us,i(u){M||(L(g.$$.fragment,u),M=!0)},o(u){k(g.$$.fragment,u),M=!1},d(u){u&&o(h),u&&o(f),w(g,u)}}}function Ev(F){let h,x,f,g,M;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),M=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),M=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(u,_){m(u,h,_),e(h,x),e(h,f),e(f,g),e(h,M)},d(u){u&&o(h)}}}function zv(F){let h,x;return h=new U({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
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
<span class="hljs-string">&#x27;council mem - bers conducted by trrf treasurer philip g. kuehn to get answers which the public ...</span>`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:us,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){k(h.$$.fragment,f),x=!1},d(f){w(h,f)}}}function qv(F){let h,x;return h=new U({props:{code:`target_start_index = torch.tensor([7])
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
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:us,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){k(h.$$.fragment,f),x=!1},d(f){w(h,f)}}}function jv(F){let h,x,f,g,M,u,_,O,Bi,pr,Me,Ue,hs,Tt,Ui,fs,Vi,mr,ue,Qi,$t,Gi,Hi,en,Ki,Xi,ur,he,X,Yi,Et,Zi,Ji,zt,el,tl,qt,ol,nl,jt,sl,al,rl,Ft,il,Pt,ll,dl,cl,Ct,pl,It,ml,ul,hr,tn,hl,fr,on,gs,fl,gr,ne,gl,_s,_l,vl,vs,yl,bl,ys,Ll,kl,_r,Dt,vr,nn,wl,yr,sn,xl,br,V,bs,Ml,Tl,At,$l,Ot,El,zl,ql,Nt,jl,St,Fl,Pl,Cl,Te,Il,Rt,Dl,Al,Wt,Ol,Nl,Sl,T,Rl,Ls,Wl,Bl,an,Ul,Vl,ks,Ql,Gl,ws,Hl,Kl,xs,Xl,Yl,Ms,Zl,Jl,Ts,ed,td,$s,od,nd,Es,sd,ad,rn,rd,id,Bt,ld,dd,Ut,cd,pd,Lr,Vt,kr,fe,md,zs,ud,hd,qs,fd,gd,wr,Qt,xr,Ve,_d,ln,vd,yd,Mr,ge,I,bd,dn,Ld,kd,js,wd,xd,Fs,Md,Td,cn,$d,Ed,Ps,zd,qd,Cs,jd,Fd,Is,Pd,Cd,Id,Gt,Dd,pn,Ad,Od,Nd,Ht,Sd,Ds,Rd,Wd,Tr,Qe,Bd,mn,Ud,Vd,$r,$e,Ge,As,Kt,Qd,Os,Gd,Er,Q,Hd,un,Kd,Xd,hn,Yd,Zd,fn,Jd,ec,gn,tc,oc,zr,Xt,qr,E,nc,_n,sc,ac,vn,rc,ic,Ns,lc,dc,yn,cc,pc,bn,mc,uc,Ss,hc,fc,Rs,gc,_c,Ws,vc,yc,Bs,bc,Lc,Us,kc,wc,jr,W,Ln,xc,Mc,Yt,Tc,$c,kn,Ec,zc,Vs,qc,jc,Qs,Fc,Pc,Fr,wn,Cc,Pr,xn,Gs,Ic,Cr,Mn,Dc,Ir,Zt,Dr,Tn,Hs,Ac,Ar,_e,Oc,Ks,Nc,Sc,Xs,Rc,Wc,Or,Jt,Nr,$n,Ys,Bc,Sr,G,Uc,Zs,Vc,Qc,Js,Gc,Hc,ea,Kc,Xc,ta,Yc,Zc,Rr,eo,Wr,En,oa,Jc,Br,zn,ep,Ur,to,Vr,qn,na,tp,Qr,jn,op,Gr,oo,Hr,Ee,He,sa,no,np,aa,sp,Kr,Y,so,ap,ze,rp,Fn,ip,lp,ao,dp,cp,pp,qe,mp,Pn,up,hp,Cn,fp,gp,_p,Ke,Xr,je,Xe,ra,ro,vp,ia,yp,Yr,de,io,bp,la,Lp,kp,Ye,lo,wp,da,xp,Zr,Fe,Ze,ca,co,Mp,pa,Tp,Jr,N,po,$p,S,Ep,In,zp,qp,ma,jp,Fp,ua,Pp,Cp,ha,Ip,Dp,fa,Ap,Op,ga,Np,Sp,Rp,mo,Wp,Dn,Bp,Up,Vp,An,On,Qp,Gp,Hp,Je,uo,Kp,_a,Xp,Yp,Nn,ho,ei,Pe,et,va,fo,Zp,ya,Jp,ti,Z,go,em,_o,tm,ba,om,nm,sm,vo,am,Sn,rm,im,lm,tt,yo,dm,La,cm,oi,Ce,ot,ka,bo,pm,wa,mm,ni,B,Lo,um,xa,hm,fm,Rn,Wn,gm,_m,vm,j,ym,Bn,bm,Lm,Un,km,wm,Vn,xm,Mm,Ma,Tm,$m,Ta,Em,zm,$a,qm,jm,Ea,Fm,Pm,za,Cm,Im,qa,Dm,Am,Om,ve,ko,Nm,$,Sm,ja,Rm,Wm,wo,Fa,Bm,Um,Vm,Qn,Qm,Gm,Pa,Hm,Km,Ca,Xm,Ym,xo,Ia,Zm,Jm,eu,Da,tu,ou,Gn,nu,su,Aa,au,ru,Oa,iu,lu,Na,du,cu,Sa,pu,mu,uu,Ra,hu,si,Ie,nt,Wa,Mo,fu,Ba,gu,ai,ce,To,_u,$o,vu,Eo,yu,bu,Lu,se,zo,ku,De,wu,Hn,xu,Mu,Ua,Tu,$u,Eu,st,zu,at,ri,Ae,rt,Va,qo,qu,Qa,ju,ii,J,jo,Fu,Fo,Pu,Po,Cu,Iu,Du,Co,Au,Io,Ou,Nu,Su,ae,Do,Ru,Oe,Wu,Kn,Bu,Uu,Ga,Vu,Qu,Gu,it,Hu,lt,li,Ne,dt,Ha,Ao,Ku,Ka,Xu,di,ee,Oo,Yu,te,Zu,No,Ju,eh,So,th,oh,Ro,nh,sh,Wo,ah,rh,ih,Bo,lh,Uo,dh,ch,ph,re,Vo,mh,Se,uh,Xn,hh,fh,Xa,gh,_h,vh,ct,yh,pt,ci,Re,mt,Ya,Qo,bh,Za,Lh,pi,oe,Go,kh,pe,wh,Ho,xh,Mh,Ja,Th,$h,er,Eh,zh,qh,Ko,jh,Xo,Fh,Ph,Ch,D,Yo,Ih,We,Dh,Yn,Ah,Oh,tr,Nh,Sh,Rh,ut,Wh,or,Bh,Uh,nr,Vh,Qh,ht,Gh,ft,mi;return u=new le({}),Tt=new le({}),Dt=new U({props:{code:`python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'
python -m pip install torchvision tesseract`,highlighted:`<span class="hljs-keyword">python</span> -m pip install <span class="hljs-string">&#x27;git+https://github.com/facebookresearch/detectron2.git&#x27;</span>
<span class="hljs-keyword">python</span> -m pip install torchvision tesseract`}}),Vt=new U({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),Qt=new U({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Kt=new le({}),Xt=new U({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),Zt=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Jt=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),eo=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),to=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),oo=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),no=new le({}),so=new A({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),Ke=new ms({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[Lv]},$$scope:{ctx:F}}}),ro=new le({}),io=new A({props:{name:"class transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor",anchor:"transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:": bool = True"},{name:"ocr_lang",val:": typing.Optional[str] = None"},{name:"tesseract_config",val:": typing.Optional[str] = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be
overridden by <code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after resizing. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes. Can be overridden by
<code>apply_ocr</code> in <code>preprocess</code>.`,name:"apply_ocr"},{anchor:"transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used. Can be overridden by <code>ocr_lang</code> in <code>preprocess</code>.`,name:"ocr_lang"},{anchor:"transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract. For example: &#x2018;&#x2014;psm 6&#x2019;. Can be overridden by <code>tesseract_config</code> in <code>preprocess</code>.`,name:"tesseract_config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/image_processing_layoutlmv2.py#L105"}}),lo=new A({props:{name:"__call__",anchor:"transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L52"}}),co=new le({}),po=new A({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L206"}}),uo=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
`}}),ho=new A({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L406"}}),fo=new le({}),go=new A({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.LayoutLMv2TokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L70"}}),yo=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
`}}),bo=new le({}),Lo=new A({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),ko=new A({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),Mo=new le({}),To=new A({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L710"}}),zo=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),st=new Wi({props:{$$slots:{default:[kv]},$$scope:{ctx:F}}}),at=new ms({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[wv]},$$scope:{ctx:F}}}),qo=new le({}),jo=new A({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L969"}}),Do=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),it=new Wi({props:{$$slots:{default:[xv]},$$scope:{ctx:F}}}),lt=new ms({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[Mv]},$$scope:{ctx:F}}}),Ao=new le({}),Oo=new A({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1150"}}),Vo=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ct=new Wi({props:{$$slots:{default:[Tv]},$$scope:{ctx:F}}}),pt=new ms({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[$v]},$$scope:{ctx:F}}}),Qo=new le({}),Go=new A({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1281"}}),Yo=new A({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ut=new Wi({props:{$$slots:{default:[Ev]},$$scope:{ctx:F}}}),ht=new ms({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[zv]},$$scope:{ctx:F}}}),ft=new ms({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example-2",$$slots:{default:[qv]},$$scope:{ctx:F}}}),{c(){h=a("meta"),x=c(),f=a("h1"),g=a("a"),M=a("span"),v(u.$$.fragment),_=c(),O=a("span"),Bi=n("LayoutLMV2"),pr=c(),Me=a("h2"),Ue=a("a"),hs=a("span"),v(Tt.$$.fragment),Ui=c(),fs=a("span"),Vi=n("Overview"),mr=c(),ue=a("p"),Qi=n("The LayoutLMV2 model was proposed in "),$t=a("a"),Gi=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),Hi=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),en=a("a"),Ki=n("LayoutLM"),Xi=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),ur=c(),he=a("ul"),X=a("li"),Yi=n("information extraction from scanned documents: the "),Et=a("a"),Zi=n("FUNSD"),Ji=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),zt=a("a"),el=n("CORD"),tl=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),qt=a("a"),ol=n("SROIE"),nl=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),jt=a("a"),sl=n("Kleister-NDA"),al=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),rl=c(),Ft=a("li"),il=n("document image classification: the "),Pt=a("a"),ll=n("RVL-CDIP"),dl=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),cl=c(),Ct=a("li"),pl=n("document visual question answering: the "),It=a("a"),ml=n("DocVQA"),ul=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),hr=c(),tn=a("p"),hl=n("The abstract from the paper is the following:"),fr=c(),on=a("p"),gs=a("em"),fl=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),gr=c(),ne=a("p"),gl=n("LayoutLMv2 depends on "),_s=a("code"),_l=n("detectron2"),vl=n(", "),vs=a("code"),yl=n("torchvision"),bl=n(" and "),ys=a("code"),Ll=n("tesseract"),kl=n(`. Run the
following to install them:`),_r=c(),v(Dt.$$.fragment),vr=c(),nn=a("p"),wl=n("(If you are developing for LayoutLMv2, note that passing the doctests also requires the installation of these packages.)"),yr=c(),sn=a("p"),xl=n("Tips:"),br=c(),V=a("ul"),bs=a("li"),Ml=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Tl=c(),At=a("li"),$l=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Ot=a("a"),El=n("paper"),zl=n("."),ql=c(),Nt=a("li"),jl=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),St=a("a"),Fl=n("here"),Pl=n("."),Cl=c(),Te=a("li"),Il=n("LayoutLMv2 uses Facebook AI\u2019s "),Rt=a("a"),Dl=n("Detectron2"),Al=n(` package for its visual
backbone. See `),Wt=a("a"),Ol=n("this link"),Nl=n(` for installation
instructions.`),Sl=c(),T=a("li"),Rl=n("In addition to "),Ls=a("code"),Wl=n("input_ids"),Bl=n(", "),an=a("a"),Ul=n("forward()"),Vl=n(` expects 2 additional inputs, namely
`),ks=a("code"),Ql=n("image"),Gl=n(" and "),ws=a("code"),Hl=n("bbox"),Kl=n(". The "),xs=a("code"),Xl=n("image"),Yl=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Ms=a("code"),Zl=n("image"),Jl=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),Ts=a("code"),ed=n("torch.Tensor"),td=n(" or a "),$s=a("code"),od=n("Detectron2.structures.ImageList"),nd=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),Es=a("code"),sd=n("bbox"),ad=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),rn=a("a"),rd=n("LayoutLMModel"),id=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Bt=a("a"),ld=n("Tesseract"),dd=n(" (there\u2019s a "),Ut=a("a"),cd=n(`Python
wrapper`),pd=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),Lr=c(),v(Vt.$$.fragment),kr=c(),fe=a("p"),md=n("Here, "),zs=a("code"),ud=n("width"),hd=n(" and "),qs=a("code"),fd=n("height"),gd=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),wr=c(),v(Qt.$$.fragment),xr=c(),Ve=a("p"),_d=n("However, this model includes a brand new "),ln=a("a"),vd=n("LayoutLMv2Processor"),yd=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),Mr=c(),ge=a("ul"),I=a("li"),bd=n("Internally, "),dn=a("a"),Ld=n("LayoutLMv2Model"),kd=n(" will send the "),js=a("code"),wd=n("image"),xd=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Fs=a("code"),Md=n("image_feature_pool_shape"),Td=n(` attribute of
`),cn=a("a"),$d=n("LayoutLMv2Config"),Ed=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Ps=a("code"),zd=n("seq_length"),qd=n(" + "),Cs=a("code"),jd=n("image_feature_pool_shape[0]"),Fd=n(` *
`),Is=a("code"),Pd=n("config.image_feature_pool_shape[1]"),Cd=n("."),Id=c(),Gt=a("li"),Dd=n("When calling "),pn=a("a"),Ad=n("from_pretrained()"),Od=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),Nd=c(),Ht=a("li"),Sd=n("If you want to train the model in a distributed environment, make sure to call "),Ds=a("code"),Rd=n("synchronize_batch_norm"),Wd=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),Tr=c(),Qe=a("p"),Bd=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),mn=a("a"),Ud=n("LayoutXLM\u2019s documentation page"),Vd=n("."),$r=c(),$e=a("h2"),Ge=a("a"),As=a("span"),v(Kt.$$.fragment),Qd=c(),Os=a("span"),Gd=n("Usage: LayoutLMv2Processor"),Er=c(),Q=a("p"),Hd=n("The easiest way to prepare data for the model is to use "),un=a("a"),Kd=n("LayoutLMv2Processor"),Xd=n(`, which internally
combines a feature extractor (`),hn=a("a"),Yd=n("LayoutLMv2FeatureExtractor"),Zd=n(`) and a tokenizer
(`),fn=a("a"),Jd=n("LayoutLMv2Tokenizer"),ec=n(" or "),gn=a("a"),tc=n("LayoutLMv2TokenizerFast"),oc=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),zr=c(),v(Xt.$$.fragment),qr=c(),E=a("p"),nc=n("In short, one can provide a document image (and possibly additional data) to "),_n=a("a"),sc=n("LayoutLMv2Processor"),ac=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),vn=a("a"),rc=n("LayoutLMv2FeatureExtractor"),ic=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ns=a("code"),lc=n("image"),dc=n(` input. The words and
normalized bounding boxes are then provided to `),yn=a("a"),cc=n("LayoutLMv2Tokenizer"),pc=n(` or
`),bn=a("a"),mc=n("LayoutLMv2TokenizerFast"),uc=n(", which converts them to token-level "),Ss=a("code"),hc=n("input_ids"),fc=n(`,
`),Rs=a("code"),gc=n("attention_mask"),_c=n(", "),Ws=a("code"),vc=n("token_type_ids"),yc=n(", "),Bs=a("code"),bc=n("bbox"),Lc=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Us=a("code"),kc=n("labels"),wc=n("."),jr=c(),W=a("p"),Ln=a("a"),xc=n("LayoutLMv2Processor"),Mc=n(" uses "),Yt=a("a"),Tc=n("PyTesseract"),$c=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),kn=a("a"),Ec=n("LayoutLMv2FeatureExtractor"),zc=n(" with "),Vs=a("code"),qc=n("apply_ocr"),jc=n(" set to "),Qs=a("code"),Fc=n("False"),Pc=n("."),Fr=c(),wn=a("p"),Cc=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Pr=c(),xn=a("p"),Gs=a("strong"),Ic=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Cr=c(),Mn=a("p"),Dc=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Ir=c(),v(Zt.$$.fragment),Dr=c(),Tn=a("p"),Hs=a("strong"),Ac=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Ar=c(),_e=a("p"),Oc=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),Ks=a("code"),Nc=n("apply_ocr"),Sc=n(` set to
`),Xs=a("code"),Rc=n("False"),Wc=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),Or=c(),v(Jt.$$.fragment),Nr=c(),$n=a("p"),Ys=a("strong"),Bc=n("Use case 3: token classification (training), apply_ocr=False"),Sr=c(),G=a("p"),Uc=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Zs=a("code"),Vc=n("labels"),Qc=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Js=a("code"),Gc=n("ignore_index"),Hc=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),ea=a("code"),Kc=n("only_label_first_subword"),Xc=n(" set to "),ta=a("code"),Yc=n("False"),Zc=n("."),Rr=c(),v(eo.$$.fragment),Wr=c(),En=a("p"),oa=a("strong"),Jc=n("Use case 4: visual question answering (inference), apply_ocr=True"),Br=c(),zn=a("p"),ep=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Ur=c(),v(to.$$.fragment),Vr=c(),qn=a("p"),na=a("strong"),tp=n("Use case 5: visual question answering (inference), apply_ocr=False"),Qr=c(),jn=a("p"),op=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Gr=c(),v(oo.$$.fragment),Hr=c(),Ee=a("h2"),He=a("a"),sa=a("span"),v(no.$$.fragment),np=c(),aa=a("span"),sp=n("LayoutLMv2Config"),Kr=c(),Y=a("div"),v(so.$$.fragment),ap=c(),ze=a("p"),rp=n("This is the configuration class to store the configuration of a "),Fn=a("a"),ip=n("LayoutLMv2Model"),lp=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),ao=a("a"),dp=n("microsoft/layoutlmv2-base-uncased"),cp=n(" architecture."),pp=c(),qe=a("p"),mp=n("Configuration objects inherit from "),Pn=a("a"),up=n("PretrainedConfig"),hp=n(` and can be used to control the model outputs. Read the
documentation from `),Cn=a("a"),fp=n("PretrainedConfig"),gp=n(" for more information."),_p=c(),v(Ke.$$.fragment),Xr=c(),je=a("h2"),Xe=a("a"),ra=a("span"),v(ro.$$.fragment),vp=c(),ia=a("span"),yp=n("LayoutLMv2FeatureExtractor"),Yr=c(),de=a("div"),v(io.$$.fragment),bp=c(),la=a("p"),Lp=n("Constructs a LayoutLMv2 image processor."),kp=c(),Ye=a("div"),v(lo.$$.fragment),wp=c(),da=a("p"),xp=n("Preprocess an image or a batch of images."),Zr=c(),Fe=a("h2"),Ze=a("a"),ca=a("span"),v(co.$$.fragment),Mp=c(),pa=a("span"),Tp=n("LayoutLMv2Tokenizer"),Jr=c(),N=a("div"),v(po.$$.fragment),$p=c(),S=a("p"),Ep=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),In=a("a"),zp=n("LayoutLMv2Tokenizer"),qp=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ma=a("code"),jp=n("input_ids"),Fp=n(", "),ua=a("code"),Pp=n("attention_mask"),Cp=n(", "),ha=a("code"),Ip=n("token_type_ids"),Dp=n(", "),fa=a("code"),Ap=n("bbox"),Op=n(`, and
optional `),ga=a("code"),Np=n("labels"),Sp=n(" (for token classification)."),Rp=c(),mo=a("p"),Wp=n("This tokenizer inherits from "),Dn=a("a"),Bp=n("PreTrainedTokenizer"),Up=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vp=c(),An=a("p"),On=a("a"),Qp=n("LayoutLMv2Tokenizer"),Gp=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Hp=c(),Je=a("div"),v(uo.$$.fragment),Kp=c(),_a=a("p"),Xp=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Yp=c(),Nn=a("div"),v(ho.$$.fragment),ei=c(),Pe=a("h2"),et=a("a"),va=a("span"),v(fo.$$.fragment),Zp=c(),ya=a("span"),Jp=n("LayoutLMv2TokenizerFast"),ti=c(),Z=a("div"),v(go.$$.fragment),em=c(),_o=a("p"),tm=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),ba=a("em"),om=n("tokenizers"),nm=n(" library). Based on WordPiece."),sm=c(),vo=a("p"),am=n("This tokenizer inherits from "),Sn=a("a"),rm=n("PreTrainedTokenizerFast"),im=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),lm=c(),tt=a("div"),v(yo.$$.fragment),dm=c(),La=a("p"),cm=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),oi=c(),Ce=a("h2"),ot=a("a"),ka=a("span"),v(bo.$$.fragment),pm=c(),wa=a("span"),mm=n("LayoutLMv2Processor"),ni=c(),B=a("div"),v(Lo.$$.fragment),um=c(),xa=a("p"),hm=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),fm=c(),Rn=a("p"),Wn=a("a"),gm=n("LayoutLMv2Processor"),_m=n(" offers all the functionalities you need to prepare data for the model."),vm=c(),j=a("p"),ym=n("It first uses "),Bn=a("a"),bm=n("LayoutLMv2FeatureExtractor"),Lm=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Un=a("a"),km=n("LayoutLMv2Tokenizer"),wm=n(` or
`),Vn=a("a"),xm=n("LayoutLMv2TokenizerFast"),Mm=n(", which turns the words and bounding boxes into token-level "),Ma=a("code"),Tm=n("input_ids"),$m=n(`,
`),Ta=a("code"),Em=n("attention_mask"),zm=n(", "),$a=a("code"),qm=n("token_type_ids"),jm=n(", "),Ea=a("code"),Fm=n("bbox"),Pm=n(". Optionally, one can provide integer "),za=a("code"),Cm=n("word_labels"),Im=n(`, which are turned
into token-level `),qa=a("code"),Dm=n("labels"),Am=n(" for token classification tasks (such as FUNSD, CORD)."),Om=c(),ve=a("div"),v(ko.$$.fragment),Nm=c(),$=a("p"),Sm=n("This method first forwards the "),ja=a("code"),Rm=n("images"),Wm=n(" argument to "),wo=a("a"),Fa=a("strong"),Bm=n("call"),Um=n("()"),Vm=n(`. In case
`),Qn=a("a"),Qm=n("LayoutLMv2FeatureExtractor"),Gm=n(" was initialized with "),Pa=a("code"),Hm=n("apply_ocr"),Km=n(" set to "),Ca=a("code"),Xm=n("True"),Ym=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),xo=a("a"),Ia=a("strong"),Zm=n("call"),Jm=n("()"),eu=n(` and returns the output,
together with resized `),Da=a("code"),tu=n("images"),ou=n(". In case "),Gn=a("a"),nu=n("LayoutLMv2FeatureExtractor"),su=n(" was initialized with "),Aa=a("code"),au=n("apply_ocr"),ru=n(` set to
`),Oa=a("code"),iu=n("False"),lu=n(", it passes the words ("),Na=a("code"),du=n("text"),cu=n("/"),Sa=a("code"),pu=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),mu=n("."),uu=c(),Ra=a("p"),hu=n("Please refer to the docstring of the above two methods for more information."),si=c(),Ie=a("h2"),nt=a("a"),Wa=a("span"),v(Mo.$$.fragment),fu=c(),Ba=a("span"),gu=n("LayoutLMv2Model"),ai=c(),ce=a("div"),v(To.$$.fragment),_u=c(),$o=a("p"),vu=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Eo=a("a"),yu=n("torch.nn.Module"),bu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Lu=c(),se=a("div"),v(zo.$$.fragment),ku=c(),De=a("p"),wu=n("The "),Hn=a("a"),xu=n("LayoutLMv2Model"),Mu=n(" forward method, overrides the "),Ua=a("code"),Tu=n("__call__"),$u=n(" special method."),Eu=c(),v(st.$$.fragment),zu=c(),v(at.$$.fragment),ri=c(),Ae=a("h2"),rt=a("a"),Va=a("span"),v(qo.$$.fragment),qu=c(),Qa=a("span"),ju=n("LayoutLMv2ForSequenceClassification"),ii=c(),J=a("div"),v(jo.$$.fragment),Fu=c(),Fo=a("p"),Pu=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Po=a("a"),Cu=n("RVL-CDIP"),Iu=n(" dataset."),Du=c(),Co=a("p"),Au=n("This model is a PyTorch "),Io=a("a"),Ou=n("torch.nn.Module"),Nu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Su=c(),ae=a("div"),v(Do.$$.fragment),Ru=c(),Oe=a("p"),Wu=n("The "),Kn=a("a"),Bu=n("LayoutLMv2ForSequenceClassification"),Uu=n(" forward method, overrides the "),Ga=a("code"),Vu=n("__call__"),Qu=n(" special method."),Gu=c(),v(it.$$.fragment),Hu=c(),v(lt.$$.fragment),li=c(),Ne=a("h2"),dt=a("a"),Ha=a("span"),v(Ao.$$.fragment),Ku=c(),Ka=a("span"),Xu=n("LayoutLMv2ForTokenClassification"),di=c(),ee=a("div"),v(Oo.$$.fragment),Yu=c(),te=a("p"),Zu=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),No=a("a"),Ju=n("FUNSD"),eh=n(", "),So=a("a"),th=n("SROIE"),oh=n(`,
`),Ro=a("a"),nh=n("CORD"),sh=n(" and "),Wo=a("a"),ah=n("Kleister-NDA"),rh=n("."),ih=c(),Bo=a("p"),lh=n("This model is a PyTorch "),Uo=a("a"),dh=n("torch.nn.Module"),ch=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ph=c(),re=a("div"),v(Vo.$$.fragment),mh=c(),Se=a("p"),uh=n("The "),Xn=a("a"),hh=n("LayoutLMv2ForTokenClassification"),fh=n(" forward method, overrides the "),Xa=a("code"),gh=n("__call__"),_h=n(" special method."),vh=c(),v(ct.$$.fragment),yh=c(),v(pt.$$.fragment),ci=c(),Re=a("h2"),mt=a("a"),Ya=a("span"),v(Qo.$$.fragment),bh=c(),Za=a("span"),Lh=n("LayoutLMv2ForQuestionAnswering"),pi=c(),oe=a("div"),v(Go.$$.fragment),kh=c(),pe=a("p"),wh=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Ho=a("a"),xh=n("DocVQA"),Mh=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),Ja=a("code"),Th=n("span start logits"),$h=n(" and "),er=a("code"),Eh=n("span end logits"),zh=n(")."),qh=c(),Ko=a("p"),jh=n("This model is a PyTorch "),Xo=a("a"),Fh=n("torch.nn.Module"),Ph=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ch=c(),D=a("div"),v(Yo.$$.fragment),Ih=c(),We=a("p"),Dh=n("The "),Yn=a("a"),Ah=n("LayoutLMv2ForQuestionAnswering"),Oh=n(" forward method, overrides the "),tr=a("code"),Nh=n("__call__"),Sh=n(" special method."),Rh=c(),v(ut.$$.fragment),Wh=c(),or=a("p"),Bh=n("Example:"),Uh=c(),nr=a("p"),Vh=n(`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),Qh=c(),v(ht.$$.fragment),Gh=c(),v(ft.$$.fragment),this.h()},l(t){const d=yv('[data-svelte="svelte-1phssyn"]',document.head);h=r(d,"META",{name:!0,content:!0}),d.forEach(o),x=p(t),f=r(t,"H1",{class:!0});var Zo=i(f);g=r(Zo,"A",{id:!0,class:!0,href:!0});var sr=i(g);M=r(sr,"SPAN",{});var ar=i(M);y(u.$$.fragment,ar),ar.forEach(o),sr.forEach(o),_=p(Zo),O=r(Zo,"SPAN",{});var rr=i(O);Bi=s(rr,"LayoutLMV2"),rr.forEach(o),Zo.forEach(o),pr=p(t),Me=r(t,"H2",{class:!0});var Jo=i(Me);Ue=r(Jo,"A",{id:!0,class:!0,href:!0});var ir=i(Ue);hs=r(ir,"SPAN",{});var lr=i(hs);y(Tt.$$.fragment,lr),lr.forEach(o),ir.forEach(o),Ui=p(Jo),fs=r(Jo,"SPAN",{});var dr=i(fs);Vi=s(dr,"Overview"),dr.forEach(o),Jo.forEach(o),mr=p(t),ue=r(t,"P",{});var Be=i(ue);Qi=s(Be,"The LayoutLMV2 model was proposed in "),$t=r(Be,"A",{href:!0,rel:!0});var cr=i($t);Gi=s(cr,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),cr.forEach(o),Hi=s(Be,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),en=r(Be,"A",{href:!0});var Zh=i(en);Ki=s(Zh,"LayoutLM"),Zh.forEach(o),Xi=s(Be,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Be.forEach(o),ur=p(t),he=r(t,"UL",{});var Zn=i(he);X=r(Zn,"LI",{});var ye=i(X);Yi=s(ye,"information extraction from scanned documents: the "),Et=r(ye,"A",{href:!0,rel:!0});var Jh=i(Et);Zi=s(Jh,"FUNSD"),Jh.forEach(o),Ji=s(ye,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),zt=r(ye,"A",{href:!0,rel:!0});var ef=i(zt);el=s(ef,"CORD"),ef.forEach(o),tl=s(ye,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),qt=r(ye,"A",{href:!0,rel:!0});var tf=i(qt);ol=s(tf,"SROIE"),tf.forEach(o),nl=s(ye,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),jt=r(ye,"A",{href:!0,rel:!0});var of=i(jt);sl=s(of,"Kleister-NDA"),of.forEach(o),al=s(ye,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),ye.forEach(o),rl=p(Zn),Ft=r(Zn,"LI",{});var ui=i(Ft);il=s(ui,"document image classification: the "),Pt=r(ui,"A",{href:!0,rel:!0});var nf=i(Pt);ll=s(nf,"RVL-CDIP"),nf.forEach(o),dl=s(ui,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ui.forEach(o),cl=p(Zn),Ct=r(Zn,"LI",{});var hi=i(Ct);pl=s(hi,"document visual question answering: the "),It=r(hi,"A",{href:!0,rel:!0});var sf=i(It);ml=s(sf,"DocVQA"),sf.forEach(o),ul=s(hi,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),hi.forEach(o),Zn.forEach(o),hr=p(t),tn=r(t,"P",{});var af=i(tn);hl=s(af,"The abstract from the paper is the following:"),af.forEach(o),fr=p(t),on=r(t,"P",{});var rf=i(on);gs=r(rf,"EM",{});var lf=i(gs);fl=s(lf,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),lf.forEach(o),rf.forEach(o),gr=p(t),ne=r(t,"P",{});var gt=i(ne);gl=s(gt,"LayoutLMv2 depends on "),_s=r(gt,"CODE",{});var df=i(_s);_l=s(df,"detectron2"),df.forEach(o),vl=s(gt,", "),vs=r(gt,"CODE",{});var cf=i(vs);yl=s(cf,"torchvision"),cf.forEach(o),bl=s(gt," and "),ys=r(gt,"CODE",{});var pf=i(ys);Ll=s(pf,"tesseract"),pf.forEach(o),kl=s(gt,`. Run the
following to install them:`),gt.forEach(o),_r=p(t),y(Dt.$$.fragment,t),vr=p(t),nn=r(t,"P",{});var mf=i(nn);wl=s(mf,"(If you are developing for LayoutLMv2, note that passing the doctests also requires the installation of these packages.)"),mf.forEach(o),yr=p(t),sn=r(t,"P",{});var uf=i(sn);xl=s(uf,"Tips:"),uf.forEach(o),br=p(t),V=r(t,"UL",{});var be=i(V);bs=r(be,"LI",{});var hf=i(bs);Ml=s(hf,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),hf.forEach(o),Tl=p(be),At=r(be,"LI",{});var fi=i(At);$l=s(fi,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Ot=r(fi,"A",{href:!0,rel:!0});var ff=i(Ot);El=s(ff,"paper"),ff.forEach(o),zl=s(fi,"."),fi.forEach(o),ql=p(be),Nt=r(be,"LI",{});var gi=i(Nt);jl=s(gi,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),St=r(gi,"A",{href:!0,rel:!0});var gf=i(St);Fl=s(gf,"here"),gf.forEach(o),Pl=s(gi,"."),gi.forEach(o),Cl=p(be),Te=r(be,"LI",{});var Jn=i(Te);Il=s(Jn,"LayoutLMv2 uses Facebook AI\u2019s "),Rt=r(Jn,"A",{href:!0,rel:!0});var _f=i(Rt);Dl=s(_f,"Detectron2"),_f.forEach(o),Al=s(Jn,` package for its visual
backbone. See `),Wt=r(Jn,"A",{href:!0,rel:!0});var vf=i(Wt);Ol=s(vf,"this link"),vf.forEach(o),Nl=s(Jn,` for installation
instructions.`),Jn.forEach(o),Sl=p(be),T=r(be,"LI",{});var z=i(T);Rl=s(z,"In addition to "),Ls=r(z,"CODE",{});var yf=i(Ls);Wl=s(yf,"input_ids"),yf.forEach(o),Bl=s(z,", "),an=r(z,"A",{href:!0});var bf=i(an);Ul=s(bf,"forward()"),bf.forEach(o),Vl=s(z,` expects 2 additional inputs, namely
`),ks=r(z,"CODE",{});var Lf=i(ks);Ql=s(Lf,"image"),Lf.forEach(o),Gl=s(z," and "),ws=r(z,"CODE",{});var kf=i(ws);Hl=s(kf,"bbox"),kf.forEach(o),Kl=s(z,". The "),xs=r(z,"CODE",{});var wf=i(xs);Xl=s(wf,"image"),wf.forEach(o),Yl=s(z,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Ms=r(z,"CODE",{});var xf=i(Ms);Zl=s(xf,"image"),xf.forEach(o),Jl=s(z,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),Ts=r(z,"CODE",{});var Mf=i(Ts);ed=s(Mf,"torch.Tensor"),Mf.forEach(o),td=s(z," or a "),$s=r(z,"CODE",{});var Tf=i($s);od=s(Tf,"Detectron2.structures.ImageList"),Tf.forEach(o),nd=s(z,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),Es=r(z,"CODE",{});var $f=i(Es);sd=s($f,"bbox"),$f.forEach(o),ad=s(z,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),rn=r(z,"A",{href:!0});var Ef=i(rn);rd=s(Ef,"LayoutLMModel"),Ef.forEach(o),id=s(z,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Bt=r(z,"A",{href:!0,rel:!0});var zf=i(Bt);ld=s(zf,"Tesseract"),zf.forEach(o),dd=s(z," (there\u2019s a "),Ut=r(z,"A",{href:!0,rel:!0});var qf=i(Ut);cd=s(qf,`Python
wrapper`),qf.forEach(o),pd=s(z,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),z.forEach(o),be.forEach(o),Lr=p(t),y(Vt.$$.fragment,t),kr=p(t),fe=r(t,"P",{});var es=i(fe);md=s(es,"Here, "),zs=r(es,"CODE",{});var jf=i(zs);ud=s(jf,"width"),jf.forEach(o),hd=s(es," and "),qs=r(es,"CODE",{});var Ff=i(qs);fd=s(Ff,"height"),Ff.forEach(o),gd=s(es,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),es.forEach(o),wr=p(t),y(Qt.$$.fragment,t),xr=p(t),Ve=r(t,"P",{});var _i=i(Ve);_d=s(_i,"However, this model includes a brand new "),ln=r(_i,"A",{href:!0});var Pf=i(ln);vd=s(Pf,"LayoutLMv2Processor"),Pf.forEach(o),yd=s(_i,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),_i.forEach(o),Mr=p(t),ge=r(t,"UL",{});var ts=i(ge);I=r(ts,"LI",{});var R=i(I);bd=s(R,"Internally, "),dn=r(R,"A",{href:!0});var Cf=i(dn);Ld=s(Cf,"LayoutLMv2Model"),Cf.forEach(o),kd=s(R," will send the "),js=r(R,"CODE",{});var If=i(js);wd=s(If,"image"),If.forEach(o),xd=s(R,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Fs=r(R,"CODE",{});var Df=i(Fs);Md=s(Df,"image_feature_pool_shape"),Df.forEach(o),Td=s(R,` attribute of
`),cn=r(R,"A",{href:!0});var Af=i(cn);$d=s(Af,"LayoutLMv2Config"),Af.forEach(o),Ed=s(R,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Ps=r(R,"CODE",{});var Of=i(Ps);zd=s(Of,"seq_length"),Of.forEach(o),qd=s(R," + "),Cs=r(R,"CODE",{});var Nf=i(Cs);jd=s(Nf,"image_feature_pool_shape[0]"),Nf.forEach(o),Fd=s(R,` *
`),Is=r(R,"CODE",{});var Sf=i(Is);Pd=s(Sf,"config.image_feature_pool_shape[1]"),Sf.forEach(o),Cd=s(R,"."),R.forEach(o),Id=p(ts),Gt=r(ts,"LI",{});var vi=i(Gt);Dd=s(vi,"When calling "),pn=r(vi,"A",{href:!0});var Rf=i(pn);Ad=s(Rf,"from_pretrained()"),Rf.forEach(o),Od=s(vi,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),vi.forEach(o),Nd=p(ts),Ht=r(ts,"LI",{});var yi=i(Ht);Sd=s(yi,"If you want to train the model in a distributed environment, make sure to call "),Ds=r(yi,"CODE",{});var Wf=i(Ds);Rd=s(Wf,"synchronize_batch_norm"),Wf.forEach(o),Wd=s(yi,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),yi.forEach(o),ts.forEach(o),Tr=p(t),Qe=r(t,"P",{});var bi=i(Qe);Bd=s(bi,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),mn=r(bi,"A",{href:!0});var Bf=i(mn);Ud=s(Bf,"LayoutXLM\u2019s documentation page"),Bf.forEach(o),Vd=s(bi,"."),bi.forEach(o),$r=p(t),$e=r(t,"H2",{class:!0});var Li=i($e);Ge=r(Li,"A",{id:!0,class:!0,href:!0});var Uf=i(Ge);As=r(Uf,"SPAN",{});var Vf=i(As);y(Kt.$$.fragment,Vf),Vf.forEach(o),Uf.forEach(o),Qd=p(Li),Os=r(Li,"SPAN",{});var Qf=i(Os);Gd=s(Qf,"Usage: LayoutLMv2Processor"),Qf.forEach(o),Li.forEach(o),Er=p(t),Q=r(t,"P",{});var Le=i(Q);Hd=s(Le,"The easiest way to prepare data for the model is to use "),un=r(Le,"A",{href:!0});var Gf=i(un);Kd=s(Gf,"LayoutLMv2Processor"),Gf.forEach(o),Xd=s(Le,`, which internally
combines a feature extractor (`),hn=r(Le,"A",{href:!0});var Hf=i(hn);Yd=s(Hf,"LayoutLMv2FeatureExtractor"),Hf.forEach(o),Zd=s(Le,`) and a tokenizer
(`),fn=r(Le,"A",{href:!0});var Kf=i(fn);Jd=s(Kf,"LayoutLMv2Tokenizer"),Kf.forEach(o),ec=s(Le," or "),gn=r(Le,"A",{href:!0});var Xf=i(gn);tc=s(Xf,"LayoutLMv2TokenizerFast"),Xf.forEach(o),oc=s(Le,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),Le.forEach(o),zr=p(t),y(Xt.$$.fragment,t),qr=p(t),E=r(t,"P",{});var P=i(E);nc=s(P,"In short, one can provide a document image (and possibly additional data) to "),_n=r(P,"A",{href:!0});var Yf=i(_n);sc=s(Yf,"LayoutLMv2Processor"),Yf.forEach(o),ac=s(P,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),vn=r(P,"A",{href:!0});var Zf=i(vn);rc=s(Zf,"LayoutLMv2FeatureExtractor"),Zf.forEach(o),ic=s(P,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ns=r(P,"CODE",{});var Jf=i(Ns);lc=s(Jf,"image"),Jf.forEach(o),dc=s(P,` input. The words and
normalized bounding boxes are then provided to `),yn=r(P,"A",{href:!0});var eg=i(yn);cc=s(eg,"LayoutLMv2Tokenizer"),eg.forEach(o),pc=s(P,` or
`),bn=r(P,"A",{href:!0});var tg=i(bn);mc=s(tg,"LayoutLMv2TokenizerFast"),tg.forEach(o),uc=s(P,", which converts them to token-level "),Ss=r(P,"CODE",{});var og=i(Ss);hc=s(og,"input_ids"),og.forEach(o),fc=s(P,`,
`),Rs=r(P,"CODE",{});var ng=i(Rs);gc=s(ng,"attention_mask"),ng.forEach(o),_c=s(P,", "),Ws=r(P,"CODE",{});var sg=i(Ws);vc=s(sg,"token_type_ids"),sg.forEach(o),yc=s(P,", "),Bs=r(P,"CODE",{});var ag=i(Bs);bc=s(ag,"bbox"),ag.forEach(o),Lc=s(P,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Us=r(P,"CODE",{});var rg=i(Us);kc=s(rg,"labels"),rg.forEach(o),wc=s(P,"."),P.forEach(o),jr=p(t),W=r(t,"P",{});var me=i(W);Ln=r(me,"A",{href:!0});var ig=i(Ln);xc=s(ig,"LayoutLMv2Processor"),ig.forEach(o),Mc=s(me," uses "),Yt=r(me,"A",{href:!0,rel:!0});var lg=i(Yt);Tc=s(lg,"PyTesseract"),lg.forEach(o),$c=s(me,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),kn=r(me,"A",{href:!0});var dg=i(kn);Ec=s(dg,"LayoutLMv2FeatureExtractor"),dg.forEach(o),zc=s(me," with "),Vs=r(me,"CODE",{});var cg=i(Vs);qc=s(cg,"apply_ocr"),cg.forEach(o),jc=s(me," set to "),Qs=r(me,"CODE",{});var pg=i(Qs);Fc=s(pg,"False"),pg.forEach(o),Pc=s(me,"."),me.forEach(o),Fr=p(t),wn=r(t,"P",{});var mg=i(wn);Cc=s(mg,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),mg.forEach(o),Pr=p(t),xn=r(t,"P",{});var ug=i(xn);Gs=r(ug,"STRONG",{});var hg=i(Gs);Ic=s(hg,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),hg.forEach(o),ug.forEach(o),Cr=p(t),Mn=r(t,"P",{});var fg=i(Mn);Dc=s(fg,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),fg.forEach(o),Ir=p(t),y(Zt.$$.fragment,t),Dr=p(t),Tn=r(t,"P",{});var gg=i(Tn);Hs=r(gg,"STRONG",{});var _g=i(Hs);Ac=s(_g,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),_g.forEach(o),gg.forEach(o),Ar=p(t),_e=r(t,"P",{});var os=i(_e);Oc=s(os,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),Ks=r(os,"CODE",{});var vg=i(Ks);Nc=s(vg,"apply_ocr"),vg.forEach(o),Sc=s(os,` set to
`),Xs=r(os,"CODE",{});var yg=i(Xs);Rc=s(yg,"False"),yg.forEach(o),Wc=s(os,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),os.forEach(o),Or=p(t),y(Jt.$$.fragment,t),Nr=p(t),$n=r(t,"P",{});var bg=i($n);Ys=r(bg,"STRONG",{});var Lg=i(Ys);Bc=s(Lg,"Use case 3: token classification (training), apply_ocr=False"),Lg.forEach(o),bg.forEach(o),Sr=p(t),G=r(t,"P",{});var ke=i(G);Uc=s(ke,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Zs=r(ke,"CODE",{});var kg=i(Zs);Vc=s(kg,"labels"),kg.forEach(o),Qc=s(ke,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Js=r(ke,"CODE",{});var wg=i(Js);Gc=s(wg,"ignore_index"),wg.forEach(o),Hc=s(ke,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),ea=r(ke,"CODE",{});var xg=i(ea);Kc=s(xg,"only_label_first_subword"),xg.forEach(o),Xc=s(ke," set to "),ta=r(ke,"CODE",{});var Mg=i(ta);Yc=s(Mg,"False"),Mg.forEach(o),Zc=s(ke,"."),ke.forEach(o),Rr=p(t),y(eo.$$.fragment,t),Wr=p(t),En=r(t,"P",{});var Tg=i(En);oa=r(Tg,"STRONG",{});var $g=i(oa);Jc=s($g,"Use case 4: visual question answering (inference), apply_ocr=True"),$g.forEach(o),Tg.forEach(o),Br=p(t),zn=r(t,"P",{});var Eg=i(zn);ep=s(Eg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Eg.forEach(o),Ur=p(t),y(to.$$.fragment,t),Vr=p(t),qn=r(t,"P",{});var zg=i(qn);na=r(zg,"STRONG",{});var qg=i(na);tp=s(qg,"Use case 5: visual question answering (inference), apply_ocr=False"),qg.forEach(o),zg.forEach(o),Qr=p(t),jn=r(t,"P",{});var jg=i(jn);op=s(jg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),jg.forEach(o),Gr=p(t),y(oo.$$.fragment,t),Hr=p(t),Ee=r(t,"H2",{class:!0});var ki=i(Ee);He=r(ki,"A",{id:!0,class:!0,href:!0});var Fg=i(He);sa=r(Fg,"SPAN",{});var Pg=i(sa);y(no.$$.fragment,Pg),Pg.forEach(o),Fg.forEach(o),np=p(ki),aa=r(ki,"SPAN",{});var Cg=i(aa);sp=s(Cg,"LayoutLMv2Config"),Cg.forEach(o),ki.forEach(o),Kr=p(t),Y=r(t,"DIV",{class:!0});var _t=i(Y);y(so.$$.fragment,_t),ap=p(_t),ze=r(_t,"P",{});var ns=i(ze);rp=s(ns,"This is the configuration class to store the configuration of a "),Fn=r(ns,"A",{href:!0});var Ig=i(Fn);ip=s(Ig,"LayoutLMv2Model"),Ig.forEach(o),lp=s(ns,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),ao=r(ns,"A",{href:!0,rel:!0});var Dg=i(ao);dp=s(Dg,"microsoft/layoutlmv2-base-uncased"),Dg.forEach(o),cp=s(ns," architecture."),ns.forEach(o),pp=p(_t),qe=r(_t,"P",{});var ss=i(qe);mp=s(ss,"Configuration objects inherit from "),Pn=r(ss,"A",{href:!0});var Ag=i(Pn);up=s(Ag,"PretrainedConfig"),Ag.forEach(o),hp=s(ss,` and can be used to control the model outputs. Read the
documentation from `),Cn=r(ss,"A",{href:!0});var Og=i(Cn);fp=s(Og,"PretrainedConfig"),Og.forEach(o),gp=s(ss," for more information."),ss.forEach(o),_p=p(_t),y(Ke.$$.fragment,_t),_t.forEach(o),Xr=p(t),je=r(t,"H2",{class:!0});var wi=i(je);Xe=r(wi,"A",{id:!0,class:!0,href:!0});var Ng=i(Xe);ra=r(Ng,"SPAN",{});var Sg=i(ra);y(ro.$$.fragment,Sg),Sg.forEach(o),Ng.forEach(o),vp=p(wi),ia=r(wi,"SPAN",{});var Rg=i(ia);yp=s(Rg,"LayoutLMv2FeatureExtractor"),Rg.forEach(o),wi.forEach(o),Yr=p(t),de=r(t,"DIV",{class:!0});var as=i(de);y(io.$$.fragment,as),bp=p(as),la=r(as,"P",{});var Wg=i(la);Lp=s(Wg,"Constructs a LayoutLMv2 image processor."),Wg.forEach(o),kp=p(as),Ye=r(as,"DIV",{class:!0});var xi=i(Ye);y(lo.$$.fragment,xi),wp=p(xi),da=r(xi,"P",{});var Bg=i(da);xp=s(Bg,"Preprocess an image or a batch of images."),Bg.forEach(o),xi.forEach(o),as.forEach(o),Zr=p(t),Fe=r(t,"H2",{class:!0});var Mi=i(Fe);Ze=r(Mi,"A",{id:!0,class:!0,href:!0});var Ug=i(Ze);ca=r(Ug,"SPAN",{});var Vg=i(ca);y(co.$$.fragment,Vg),Vg.forEach(o),Ug.forEach(o),Mp=p(Mi),pa=r(Mi,"SPAN",{});var Qg=i(pa);Tp=s(Qg,"LayoutLMv2Tokenizer"),Qg.forEach(o),Mi.forEach(o),Jr=p(t),N=r(t,"DIV",{class:!0});var ie=i(N);y(po.$$.fragment,ie),$p=p(ie),S=r(ie,"P",{});var H=i(S);Ep=s(H,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),In=r(H,"A",{href:!0});var Gg=i(In);zp=s(Gg,"LayoutLMv2Tokenizer"),Gg.forEach(o),qp=s(H,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ma=r(H,"CODE",{});var Hg=i(ma);jp=s(Hg,"input_ids"),Hg.forEach(o),Fp=s(H,", "),ua=r(H,"CODE",{});var Kg=i(ua);Pp=s(Kg,"attention_mask"),Kg.forEach(o),Cp=s(H,", "),ha=r(H,"CODE",{});var Xg=i(ha);Ip=s(Xg,"token_type_ids"),Xg.forEach(o),Dp=s(H,", "),fa=r(H,"CODE",{});var Yg=i(fa);Ap=s(Yg,"bbox"),Yg.forEach(o),Op=s(H,`, and
optional `),ga=r(H,"CODE",{});var Zg=i(ga);Np=s(Zg,"labels"),Zg.forEach(o),Sp=s(H," (for token classification)."),H.forEach(o),Rp=p(ie),mo=r(ie,"P",{});var Ti=i(mo);Wp=s(Ti,"This tokenizer inherits from "),Dn=r(Ti,"A",{href:!0});var Jg=i(Dn);Bp=s(Jg,"PreTrainedTokenizer"),Jg.forEach(o),Up=s(Ti,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ti.forEach(o),Vp=p(ie),An=r(ie,"P",{});var Hh=i(An);On=r(Hh,"A",{href:!0});var e_=i(On);Qp=s(e_,"LayoutLMv2Tokenizer"),e_.forEach(o),Gp=s(Hh,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Hh.forEach(o),Hp=p(ie),Je=r(ie,"DIV",{class:!0});var $i=i(Je);y(uo.$$.fragment,$i),Kp=p($i),_a=r($i,"P",{});var t_=i(_a);Xp=s(t_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),t_.forEach(o),$i.forEach(o),Yp=p(ie),Nn=r(ie,"DIV",{class:!0});var o_=i(Nn);y(ho.$$.fragment,o_),o_.forEach(o),ie.forEach(o),ei=p(t),Pe=r(t,"H2",{class:!0});var Ei=i(Pe);et=r(Ei,"A",{id:!0,class:!0,href:!0});var n_=i(et);va=r(n_,"SPAN",{});var s_=i(va);y(fo.$$.fragment,s_),s_.forEach(o),n_.forEach(o),Zp=p(Ei),ya=r(Ei,"SPAN",{});var a_=i(ya);Jp=s(a_,"LayoutLMv2TokenizerFast"),a_.forEach(o),Ei.forEach(o),ti=p(t),Z=r(t,"DIV",{class:!0});var vt=i(Z);y(go.$$.fragment,vt),em=p(vt),_o=r(vt,"P",{});var zi=i(_o);tm=s(zi,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),ba=r(zi,"EM",{});var r_=i(ba);om=s(r_,"tokenizers"),r_.forEach(o),nm=s(zi," library). Based on WordPiece."),zi.forEach(o),sm=p(vt),vo=r(vt,"P",{});var qi=i(vo);am=s(qi,"This tokenizer inherits from "),Sn=r(qi,"A",{href:!0});var i_=i(Sn);rm=s(i_,"PreTrainedTokenizerFast"),i_.forEach(o),im=s(qi,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),qi.forEach(o),lm=p(vt),tt=r(vt,"DIV",{class:!0});var ji=i(tt);y(yo.$$.fragment,ji),dm=p(ji),La=r(ji,"P",{});var l_=i(La);cm=s(l_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),l_.forEach(o),ji.forEach(o),vt.forEach(o),oi=p(t),Ce=r(t,"H2",{class:!0});var Fi=i(Ce);ot=r(Fi,"A",{id:!0,class:!0,href:!0});var d_=i(ot);ka=r(d_,"SPAN",{});var c_=i(ka);y(bo.$$.fragment,c_),c_.forEach(o),d_.forEach(o),pm=p(Fi),wa=r(Fi,"SPAN",{});var p_=i(wa);mm=s(p_,"LayoutLMv2Processor"),p_.forEach(o),Fi.forEach(o),ni=p(t),B=r(t,"DIV",{class:!0});var we=i(B);y(Lo.$$.fragment,we),um=p(we),xa=r(we,"P",{});var m_=i(xa);hm=s(m_,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),m_.forEach(o),fm=p(we),Rn=r(we,"P",{});var Kh=i(Rn);Wn=r(Kh,"A",{href:!0});var u_=i(Wn);gm=s(u_,"LayoutLMv2Processor"),u_.forEach(o),_m=s(Kh," offers all the functionalities you need to prepare data for the model."),Kh.forEach(o),vm=p(we),j=r(we,"P",{});var C=i(j);ym=s(C,"It first uses "),Bn=r(C,"A",{href:!0});var h_=i(Bn);bm=s(h_,"LayoutLMv2FeatureExtractor"),h_.forEach(o),Lm=s(C,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Un=r(C,"A",{href:!0});var f_=i(Un);km=s(f_,"LayoutLMv2Tokenizer"),f_.forEach(o),wm=s(C,` or
`),Vn=r(C,"A",{href:!0});var g_=i(Vn);xm=s(g_,"LayoutLMv2TokenizerFast"),g_.forEach(o),Mm=s(C,", which turns the words and bounding boxes into token-level "),Ma=r(C,"CODE",{});var __=i(Ma);Tm=s(__,"input_ids"),__.forEach(o),$m=s(C,`,
`),Ta=r(C,"CODE",{});var v_=i(Ta);Em=s(v_,"attention_mask"),v_.forEach(o),zm=s(C,", "),$a=r(C,"CODE",{});var y_=i($a);qm=s(y_,"token_type_ids"),y_.forEach(o),jm=s(C,", "),Ea=r(C,"CODE",{});var b_=i(Ea);Fm=s(b_,"bbox"),b_.forEach(o),Pm=s(C,". Optionally, one can provide integer "),za=r(C,"CODE",{});var L_=i(za);Cm=s(L_,"word_labels"),L_.forEach(o),Im=s(C,`, which are turned
into token-level `),qa=r(C,"CODE",{});var k_=i(qa);Dm=s(k_,"labels"),k_.forEach(o),Am=s(C," for token classification tasks (such as FUNSD, CORD)."),C.forEach(o),Om=p(we),ve=r(we,"DIV",{class:!0});var rs=i(ve);y(ko.$$.fragment,rs),Nm=p(rs),$=r(rs,"P",{});var q=i($);Sm=s(q,"This method first forwards the "),ja=r(q,"CODE",{});var w_=i(ja);Rm=s(w_,"images"),w_.forEach(o),Wm=s(q," argument to "),wo=r(q,"A",{href:!0});var Xh=i(wo);Fa=r(Xh,"STRONG",{});var x_=i(Fa);Bm=s(x_,"call"),x_.forEach(o),Um=s(Xh,"()"),Xh.forEach(o),Vm=s(q,`. In case
`),Qn=r(q,"A",{href:!0});var M_=i(Qn);Qm=s(M_,"LayoutLMv2FeatureExtractor"),M_.forEach(o),Gm=s(q," was initialized with "),Pa=r(q,"CODE",{});var T_=i(Pa);Hm=s(T_,"apply_ocr"),T_.forEach(o),Km=s(q," set to "),Ca=r(q,"CODE",{});var $_=i(Ca);Xm=s($_,"True"),$_.forEach(o),Ym=s(q,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),xo=r(q,"A",{href:!0});var Yh=i(xo);Ia=r(Yh,"STRONG",{});var E_=i(Ia);Zm=s(E_,"call"),E_.forEach(o),Jm=s(Yh,"()"),Yh.forEach(o),eu=s(q,` and returns the output,
together with resized `),Da=r(q,"CODE",{});var z_=i(Da);tu=s(z_,"images"),z_.forEach(o),ou=s(q,". In case "),Gn=r(q,"A",{href:!0});var q_=i(Gn);nu=s(q_,"LayoutLMv2FeatureExtractor"),q_.forEach(o),su=s(q," was initialized with "),Aa=r(q,"CODE",{});var j_=i(Aa);au=s(j_,"apply_ocr"),j_.forEach(o),ru=s(q,` set to
`),Oa=r(q,"CODE",{});var F_=i(Oa);iu=s(F_,"False"),F_.forEach(o),lu=s(q,", it passes the words ("),Na=r(q,"CODE",{});var P_=i(Na);du=s(P_,"text"),P_.forEach(o),cu=s(q,"/"),Sa=r(q,"CODE",{});var C_=i(Sa);pu=s(C_,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),C_.forEach(o),mu=s(q,"."),q.forEach(o),uu=p(rs),Ra=r(rs,"P",{});var I_=i(Ra);hu=s(I_,"Please refer to the docstring of the above two methods for more information."),I_.forEach(o),rs.forEach(o),we.forEach(o),si=p(t),Ie=r(t,"H2",{class:!0});var Pi=i(Ie);nt=r(Pi,"A",{id:!0,class:!0,href:!0});var D_=i(nt);Wa=r(D_,"SPAN",{});var A_=i(Wa);y(Mo.$$.fragment,A_),A_.forEach(o),D_.forEach(o),fu=p(Pi),Ba=r(Pi,"SPAN",{});var O_=i(Ba);gu=s(O_,"LayoutLMv2Model"),O_.forEach(o),Pi.forEach(o),ai=p(t),ce=r(t,"DIV",{class:!0});var is=i(ce);y(To.$$.fragment,is),_u=p(is),$o=r(is,"P",{});var Ci=i($o);vu=s(Ci,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Eo=r(Ci,"A",{href:!0,rel:!0});var N_=i(Eo);yu=s(N_,"torch.nn.Module"),N_.forEach(o),bu=s(Ci,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ci.forEach(o),Lu=p(is),se=r(is,"DIV",{class:!0});var yt=i(se);y(zo.$$.fragment,yt),ku=p(yt),De=r(yt,"P",{});var ls=i(De);wu=s(ls,"The "),Hn=r(ls,"A",{href:!0});var S_=i(Hn);xu=s(S_,"LayoutLMv2Model"),S_.forEach(o),Mu=s(ls," forward method, overrides the "),Ua=r(ls,"CODE",{});var R_=i(Ua);Tu=s(R_,"__call__"),R_.forEach(o),$u=s(ls," special method."),ls.forEach(o),Eu=p(yt),y(st.$$.fragment,yt),zu=p(yt),y(at.$$.fragment,yt),yt.forEach(o),is.forEach(o),ri=p(t),Ae=r(t,"H2",{class:!0});var Ii=i(Ae);rt=r(Ii,"A",{id:!0,class:!0,href:!0});var W_=i(rt);Va=r(W_,"SPAN",{});var B_=i(Va);y(qo.$$.fragment,B_),B_.forEach(o),W_.forEach(o),qu=p(Ii),Qa=r(Ii,"SPAN",{});var U_=i(Qa);ju=s(U_,"LayoutLMv2ForSequenceClassification"),U_.forEach(o),Ii.forEach(o),ii=p(t),J=r(t,"DIV",{class:!0});var bt=i(J);y(jo.$$.fragment,bt),Fu=p(bt),Fo=r(bt,"P",{});var Di=i(Fo);Pu=s(Di,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Po=r(Di,"A",{href:!0,rel:!0});var V_=i(Po);Cu=s(V_,"RVL-CDIP"),V_.forEach(o),Iu=s(Di," dataset."),Di.forEach(o),Du=p(bt),Co=r(bt,"P",{});var Ai=i(Co);Au=s(Ai,"This model is a PyTorch "),Io=r(Ai,"A",{href:!0,rel:!0});var Q_=i(Io);Ou=s(Q_,"torch.nn.Module"),Q_.forEach(o),Nu=s(Ai,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ai.forEach(o),Su=p(bt),ae=r(bt,"DIV",{class:!0});var Lt=i(ae);y(Do.$$.fragment,Lt),Ru=p(Lt),Oe=r(Lt,"P",{});var ds=i(Oe);Wu=s(ds,"The "),Kn=r(ds,"A",{href:!0});var G_=i(Kn);Bu=s(G_,"LayoutLMv2ForSequenceClassification"),G_.forEach(o),Uu=s(ds," forward method, overrides the "),Ga=r(ds,"CODE",{});var H_=i(Ga);Vu=s(H_,"__call__"),H_.forEach(o),Qu=s(ds," special method."),ds.forEach(o),Gu=p(Lt),y(it.$$.fragment,Lt),Hu=p(Lt),y(lt.$$.fragment,Lt),Lt.forEach(o),bt.forEach(o),li=p(t),Ne=r(t,"H2",{class:!0});var Oi=i(Ne);dt=r(Oi,"A",{id:!0,class:!0,href:!0});var K_=i(dt);Ha=r(K_,"SPAN",{});var X_=i(Ha);y(Ao.$$.fragment,X_),X_.forEach(o),K_.forEach(o),Ku=p(Oi),Ka=r(Oi,"SPAN",{});var Y_=i(Ka);Xu=s(Y_,"LayoutLMv2ForTokenClassification"),Y_.forEach(o),Oi.forEach(o),di=p(t),ee=r(t,"DIV",{class:!0});var kt=i(ee);y(Oo.$$.fragment,kt),Yu=p(kt),te=r(kt,"P",{});var xe=i(te);Zu=s(xe,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),No=r(xe,"A",{href:!0,rel:!0});var Z_=i(No);Ju=s(Z_,"FUNSD"),Z_.forEach(o),eh=s(xe,", "),So=r(xe,"A",{href:!0,rel:!0});var J_=i(So);th=s(J_,"SROIE"),J_.forEach(o),oh=s(xe,`,
`),Ro=r(xe,"A",{href:!0,rel:!0});var ev=i(Ro);nh=s(ev,"CORD"),ev.forEach(o),sh=s(xe," and "),Wo=r(xe,"A",{href:!0,rel:!0});var tv=i(Wo);ah=s(tv,"Kleister-NDA"),tv.forEach(o),rh=s(xe,"."),xe.forEach(o),ih=p(kt),Bo=r(kt,"P",{});var Ni=i(Bo);lh=s(Ni,"This model is a PyTorch "),Uo=r(Ni,"A",{href:!0,rel:!0});var ov=i(Uo);dh=s(ov,"torch.nn.Module"),ov.forEach(o),ch=s(Ni,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ni.forEach(o),ph=p(kt),re=r(kt,"DIV",{class:!0});var wt=i(re);y(Vo.$$.fragment,wt),mh=p(wt),Se=r(wt,"P",{});var cs=i(Se);uh=s(cs,"The "),Xn=r(cs,"A",{href:!0});var nv=i(Xn);hh=s(nv,"LayoutLMv2ForTokenClassification"),nv.forEach(o),fh=s(cs," forward method, overrides the "),Xa=r(cs,"CODE",{});var sv=i(Xa);gh=s(sv,"__call__"),sv.forEach(o),_h=s(cs," special method."),cs.forEach(o),vh=p(wt),y(ct.$$.fragment,wt),yh=p(wt),y(pt.$$.fragment,wt),wt.forEach(o),kt.forEach(o),ci=p(t),Re=r(t,"H2",{class:!0});var Si=i(Re);mt=r(Si,"A",{id:!0,class:!0,href:!0});var av=i(mt);Ya=r(av,"SPAN",{});var rv=i(Ya);y(Qo.$$.fragment,rv),rv.forEach(o),av.forEach(o),bh=p(Si),Za=r(Si,"SPAN",{});var iv=i(Za);Lh=s(iv,"LayoutLMv2ForQuestionAnswering"),iv.forEach(o),Si.forEach(o),pi=p(t),oe=r(t,"DIV",{class:!0});var xt=i(oe);y(Go.$$.fragment,xt),kh=p(xt),pe=r(xt,"P",{});var Mt=i(pe);wh=s(Mt,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Ho=r(Mt,"A",{href:!0,rel:!0});var lv=i(Ho);xh=s(lv,"DocVQA"),lv.forEach(o),Mh=s(Mt,` (a linear layer on top of the text part of the hidden-states output to
compute `),Ja=r(Mt,"CODE",{});var dv=i(Ja);Th=s(dv,"span start logits"),dv.forEach(o),$h=s(Mt," and "),er=r(Mt,"CODE",{});var cv=i(er);Eh=s(cv,"span end logits"),cv.forEach(o),zh=s(Mt,")."),Mt.forEach(o),qh=p(xt),Ko=r(xt,"P",{});var Ri=i(Ko);jh=s(Ri,"This model is a PyTorch "),Xo=r(Ri,"A",{href:!0,rel:!0});var pv=i(Xo);Fh=s(pv,"torch.nn.Module"),pv.forEach(o),Ph=s(Ri,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ri.forEach(o),Ch=p(xt),D=r(xt,"DIV",{class:!0});var K=i(D);y(Yo.$$.fragment,K),Ih=p(K),We=r(K,"P",{});var ps=i(We);Dh=s(ps,"The "),Yn=r(ps,"A",{href:!0});var mv=i(Yn);Ah=s(mv,"LayoutLMv2ForQuestionAnswering"),mv.forEach(o),Oh=s(ps," forward method, overrides the "),tr=r(ps,"CODE",{});var uv=i(tr);Nh=s(uv,"__call__"),uv.forEach(o),Sh=s(ps," special method."),ps.forEach(o),Rh=p(K),y(ut.$$.fragment,K),Wh=p(K),or=r(K,"P",{});var hv=i(or);Bh=s(hv,"Example:"),hv.forEach(o),Uh=p(K),nr=r(K,"P",{});var fv=i(nr);Vh=s(fv,`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),fv.forEach(o),Qh=p(K),y(ht.$$.fragment,K),Gh=p(K),y(ft.$$.fragment,K),K.forEach(o),xt.forEach(o),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Fv)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(f,"class","relative group"),l(Ue,"id","overview"),l(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ue,"href","#overview"),l(Me,"class","relative group"),l($t,"href","https://arxiv.org/abs/2012.14740"),l($t,"rel","nofollow"),l(en,"href","layoutlm"),l(Et,"href","https://guillaumejaume.github.io/FUNSD/"),l(Et,"rel","nofollow"),l(zt,"href","https://github.com/clovaai/cord"),l(zt,"rel","nofollow"),l(qt,"href","https://rrc.cvc.uab.es/?ch=13"),l(qt,"rel","nofollow"),l(jt,"href","https://github.com/applicaai/kleister-nda"),l(jt,"rel","nofollow"),l(Pt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Pt,"rel","nofollow"),l(It,"href","https://arxiv.org/abs/2007.00398"),l(It,"rel","nofollow"),l(Ot,"href","https://arxiv.org/abs/2012.14740"),l(Ot,"rel","nofollow"),l(St,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(St,"rel","nofollow"),l(Rt,"href","https://github.com/facebookresearch/detectron2/"),l(Rt,"rel","nofollow"),l(Wt,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Wt,"rel","nofollow"),l(an,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(rn,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Bt,"href","https://github.com/tesseract-ocr/tesseract"),l(Bt,"rel","nofollow"),l(Ut,"href","https://pypi.org/project/pytesseract/"),l(Ut,"rel","nofollow"),l(ln,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(dn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(cn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(pn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(mn,"href","layoutxlm"),l(Ge,"id","usage-layoutlmv2processor"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#usage-layoutlmv2processor"),l($e,"class","relative group"),l(un,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(hn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor"),l(fn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(gn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(_n,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(vn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor"),l(yn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(bn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(Ln,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Yt,"href","https://pypi.org/project/pytesseract/"),l(Yt,"rel","nofollow"),l(kn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor"),l(He,"id","transformers.LayoutLMv2Config"),l(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(He,"href","#transformers.LayoutLMv2Config"),l(Ee,"class","relative group"),l(Fn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ao,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(ao,"rel","nofollow"),l(Pn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Cn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Xe,"id","transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor"),l(je,"class","relative group"),l(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ze,"id","transformers.LayoutLMv2Tokenizer"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#transformers.LayoutLMv2Tokenizer"),l(Fe,"class","relative group"),l(In,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Dn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(On,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(et,"id","transformers.LayoutLMv2TokenizerFast"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.LayoutLMv2TokenizerFast"),l(Pe,"class","relative group"),l(Sn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ot,"id","transformers.LayoutLMv2Processor"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.LayoutLMv2Processor"),l(Ce,"class","relative group"),l(Wn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Bn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor"),l(Un,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Vn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(wo,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__"),l(Qn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor"),l(xo,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Gn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor"),l(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(nt,"id","transformers.LayoutLMv2Model"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.LayoutLMv2Model"),l(Ie,"class","relative group"),l(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Eo,"rel","nofollow"),l(Hn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(rt,"id","transformers.LayoutLMv2ForSequenceClassification"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(Ae,"class","relative group"),l(Po,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Po,"rel","nofollow"),l(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Io,"rel","nofollow"),l(Kn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(dt,"id","transformers.LayoutLMv2ForTokenClassification"),l(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(dt,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Ne,"class","relative group"),l(No,"href","https://guillaumejaume.github.io/FUNSD/"),l(No,"rel","nofollow"),l(So,"href","https://rrc.cvc.uab.es/?ch=13"),l(So,"rel","nofollow"),l(Ro,"href","https://github.com/clovaai/cord"),l(Ro,"rel","nofollow"),l(Wo,"href","https://github.com/applicaai/kleister-nda"),l(Wo,"rel","nofollow"),l(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Uo,"rel","nofollow"),l(Xn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(mt,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(mt,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Re,"class","relative group"),l(Ho,"href","https://rrc.cvc.uab.es/?ch=17"),l(Ho,"rel","nofollow"),l(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Xo,"rel","nofollow"),l(Yn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,h),m(t,x,d),m(t,f,d),e(f,g),e(g,M),b(u,M,null),e(f,_),e(f,O),e(O,Bi),m(t,pr,d),m(t,Me,d),e(Me,Ue),e(Ue,hs),b(Tt,hs,null),e(Me,Ui),e(Me,fs),e(fs,Vi),m(t,mr,d),m(t,ue,d),e(ue,Qi),e(ue,$t),e($t,Gi),e(ue,Hi),e(ue,en),e(en,Ki),e(ue,Xi),m(t,ur,d),m(t,he,d),e(he,X),e(X,Yi),e(X,Et),e(Et,Zi),e(X,Ji),e(X,zt),e(zt,el),e(X,tl),e(X,qt),e(qt,ol),e(X,nl),e(X,jt),e(jt,sl),e(X,al),e(he,rl),e(he,Ft),e(Ft,il),e(Ft,Pt),e(Pt,ll),e(Ft,dl),e(he,cl),e(he,Ct),e(Ct,pl),e(Ct,It),e(It,ml),e(Ct,ul),m(t,hr,d),m(t,tn,d),e(tn,hl),m(t,fr,d),m(t,on,d),e(on,gs),e(gs,fl),m(t,gr,d),m(t,ne,d),e(ne,gl),e(ne,_s),e(_s,_l),e(ne,vl),e(ne,vs),e(vs,yl),e(ne,bl),e(ne,ys),e(ys,Ll),e(ne,kl),m(t,_r,d),b(Dt,t,d),m(t,vr,d),m(t,nn,d),e(nn,wl),m(t,yr,d),m(t,sn,d),e(sn,xl),m(t,br,d),m(t,V,d),e(V,bs),e(bs,Ml),e(V,Tl),e(V,At),e(At,$l),e(At,Ot),e(Ot,El),e(At,zl),e(V,ql),e(V,Nt),e(Nt,jl),e(Nt,St),e(St,Fl),e(Nt,Pl),e(V,Cl),e(V,Te),e(Te,Il),e(Te,Rt),e(Rt,Dl),e(Te,Al),e(Te,Wt),e(Wt,Ol),e(Te,Nl),e(V,Sl),e(V,T),e(T,Rl),e(T,Ls),e(Ls,Wl),e(T,Bl),e(T,an),e(an,Ul),e(T,Vl),e(T,ks),e(ks,Ql),e(T,Gl),e(T,ws),e(ws,Hl),e(T,Kl),e(T,xs),e(xs,Xl),e(T,Yl),e(T,Ms),e(Ms,Zl),e(T,Jl),e(T,Ts),e(Ts,ed),e(T,td),e(T,$s),e($s,od),e(T,nd),e(T,Es),e(Es,sd),e(T,ad),e(T,rn),e(rn,rd),e(T,id),e(T,Bt),e(Bt,ld),e(T,dd),e(T,Ut),e(Ut,cd),e(T,pd),m(t,Lr,d),b(Vt,t,d),m(t,kr,d),m(t,fe,d),e(fe,md),e(fe,zs),e(zs,ud),e(fe,hd),e(fe,qs),e(qs,fd),e(fe,gd),m(t,wr,d),b(Qt,t,d),m(t,xr,d),m(t,Ve,d),e(Ve,_d),e(Ve,ln),e(ln,vd),e(Ve,yd),m(t,Mr,d),m(t,ge,d),e(ge,I),e(I,bd),e(I,dn),e(dn,Ld),e(I,kd),e(I,js),e(js,wd),e(I,xd),e(I,Fs),e(Fs,Md),e(I,Td),e(I,cn),e(cn,$d),e(I,Ed),e(I,Ps),e(Ps,zd),e(I,qd),e(I,Cs),e(Cs,jd),e(I,Fd),e(I,Is),e(Is,Pd),e(I,Cd),e(ge,Id),e(ge,Gt),e(Gt,Dd),e(Gt,pn),e(pn,Ad),e(Gt,Od),e(ge,Nd),e(ge,Ht),e(Ht,Sd),e(Ht,Ds),e(Ds,Rd),e(Ht,Wd),m(t,Tr,d),m(t,Qe,d),e(Qe,Bd),e(Qe,mn),e(mn,Ud),e(Qe,Vd),m(t,$r,d),m(t,$e,d),e($e,Ge),e(Ge,As),b(Kt,As,null),e($e,Qd),e($e,Os),e(Os,Gd),m(t,Er,d),m(t,Q,d),e(Q,Hd),e(Q,un),e(un,Kd),e(Q,Xd),e(Q,hn),e(hn,Yd),e(Q,Zd),e(Q,fn),e(fn,Jd),e(Q,ec),e(Q,gn),e(gn,tc),e(Q,oc),m(t,zr,d),b(Xt,t,d),m(t,qr,d),m(t,E,d),e(E,nc),e(E,_n),e(_n,sc),e(E,ac),e(E,vn),e(vn,rc),e(E,ic),e(E,Ns),e(Ns,lc),e(E,dc),e(E,yn),e(yn,cc),e(E,pc),e(E,bn),e(bn,mc),e(E,uc),e(E,Ss),e(Ss,hc),e(E,fc),e(E,Rs),e(Rs,gc),e(E,_c),e(E,Ws),e(Ws,vc),e(E,yc),e(E,Bs),e(Bs,bc),e(E,Lc),e(E,Us),e(Us,kc),e(E,wc),m(t,jr,d),m(t,W,d),e(W,Ln),e(Ln,xc),e(W,Mc),e(W,Yt),e(Yt,Tc),e(W,$c),e(W,kn),e(kn,Ec),e(W,zc),e(W,Vs),e(Vs,qc),e(W,jc),e(W,Qs),e(Qs,Fc),e(W,Pc),m(t,Fr,d),m(t,wn,d),e(wn,Cc),m(t,Pr,d),m(t,xn,d),e(xn,Gs),e(Gs,Ic),m(t,Cr,d),m(t,Mn,d),e(Mn,Dc),m(t,Ir,d),b(Zt,t,d),m(t,Dr,d),m(t,Tn,d),e(Tn,Hs),e(Hs,Ac),m(t,Ar,d),m(t,_e,d),e(_e,Oc),e(_e,Ks),e(Ks,Nc),e(_e,Sc),e(_e,Xs),e(Xs,Rc),e(_e,Wc),m(t,Or,d),b(Jt,t,d),m(t,Nr,d),m(t,$n,d),e($n,Ys),e(Ys,Bc),m(t,Sr,d),m(t,G,d),e(G,Uc),e(G,Zs),e(Zs,Vc),e(G,Qc),e(G,Js),e(Js,Gc),e(G,Hc),e(G,ea),e(ea,Kc),e(G,Xc),e(G,ta),e(ta,Yc),e(G,Zc),m(t,Rr,d),b(eo,t,d),m(t,Wr,d),m(t,En,d),e(En,oa),e(oa,Jc),m(t,Br,d),m(t,zn,d),e(zn,ep),m(t,Ur,d),b(to,t,d),m(t,Vr,d),m(t,qn,d),e(qn,na),e(na,tp),m(t,Qr,d),m(t,jn,d),e(jn,op),m(t,Gr,d),b(oo,t,d),m(t,Hr,d),m(t,Ee,d),e(Ee,He),e(He,sa),b(no,sa,null),e(Ee,np),e(Ee,aa),e(aa,sp),m(t,Kr,d),m(t,Y,d),b(so,Y,null),e(Y,ap),e(Y,ze),e(ze,rp),e(ze,Fn),e(Fn,ip),e(ze,lp),e(ze,ao),e(ao,dp),e(ze,cp),e(Y,pp),e(Y,qe),e(qe,mp),e(qe,Pn),e(Pn,up),e(qe,hp),e(qe,Cn),e(Cn,fp),e(qe,gp),e(Y,_p),b(Ke,Y,null),m(t,Xr,d),m(t,je,d),e(je,Xe),e(Xe,ra),b(ro,ra,null),e(je,vp),e(je,ia),e(ia,yp),m(t,Yr,d),m(t,de,d),b(io,de,null),e(de,bp),e(de,la),e(la,Lp),e(de,kp),e(de,Ye),b(lo,Ye,null),e(Ye,wp),e(Ye,da),e(da,xp),m(t,Zr,d),m(t,Fe,d),e(Fe,Ze),e(Ze,ca),b(co,ca,null),e(Fe,Mp),e(Fe,pa),e(pa,Tp),m(t,Jr,d),m(t,N,d),b(po,N,null),e(N,$p),e(N,S),e(S,Ep),e(S,In),e(In,zp),e(S,qp),e(S,ma),e(ma,jp),e(S,Fp),e(S,ua),e(ua,Pp),e(S,Cp),e(S,ha),e(ha,Ip),e(S,Dp),e(S,fa),e(fa,Ap),e(S,Op),e(S,ga),e(ga,Np),e(S,Sp),e(N,Rp),e(N,mo),e(mo,Wp),e(mo,Dn),e(Dn,Bp),e(mo,Up),e(N,Vp),e(N,An),e(An,On),e(On,Qp),e(An,Gp),e(N,Hp),e(N,Je),b(uo,Je,null),e(Je,Kp),e(Je,_a),e(_a,Xp),e(N,Yp),e(N,Nn),b(ho,Nn,null),m(t,ei,d),m(t,Pe,d),e(Pe,et),e(et,va),b(fo,va,null),e(Pe,Zp),e(Pe,ya),e(ya,Jp),m(t,ti,d),m(t,Z,d),b(go,Z,null),e(Z,em),e(Z,_o),e(_o,tm),e(_o,ba),e(ba,om),e(_o,nm),e(Z,sm),e(Z,vo),e(vo,am),e(vo,Sn),e(Sn,rm),e(vo,im),e(Z,lm),e(Z,tt),b(yo,tt,null),e(tt,dm),e(tt,La),e(La,cm),m(t,oi,d),m(t,Ce,d),e(Ce,ot),e(ot,ka),b(bo,ka,null),e(Ce,pm),e(Ce,wa),e(wa,mm),m(t,ni,d),m(t,B,d),b(Lo,B,null),e(B,um),e(B,xa),e(xa,hm),e(B,fm),e(B,Rn),e(Rn,Wn),e(Wn,gm),e(Rn,_m),e(B,vm),e(B,j),e(j,ym),e(j,Bn),e(Bn,bm),e(j,Lm),e(j,Un),e(Un,km),e(j,wm),e(j,Vn),e(Vn,xm),e(j,Mm),e(j,Ma),e(Ma,Tm),e(j,$m),e(j,Ta),e(Ta,Em),e(j,zm),e(j,$a),e($a,qm),e(j,jm),e(j,Ea),e(Ea,Fm),e(j,Pm),e(j,za),e(za,Cm),e(j,Im),e(j,qa),e(qa,Dm),e(j,Am),e(B,Om),e(B,ve),b(ko,ve,null),e(ve,Nm),e(ve,$),e($,Sm),e($,ja),e(ja,Rm),e($,Wm),e($,wo),e(wo,Fa),e(Fa,Bm),e(wo,Um),e($,Vm),e($,Qn),e(Qn,Qm),e($,Gm),e($,Pa),e(Pa,Hm),e($,Km),e($,Ca),e(Ca,Xm),e($,Ym),e($,xo),e(xo,Ia),e(Ia,Zm),e(xo,Jm),e($,eu),e($,Da),e(Da,tu),e($,ou),e($,Gn),e(Gn,nu),e($,su),e($,Aa),e(Aa,au),e($,ru),e($,Oa),e(Oa,iu),e($,lu),e($,Na),e(Na,du),e($,cu),e($,Sa),e(Sa,pu),e($,mu),e(ve,uu),e(ve,Ra),e(Ra,hu),m(t,si,d),m(t,Ie,d),e(Ie,nt),e(nt,Wa),b(Mo,Wa,null),e(Ie,fu),e(Ie,Ba),e(Ba,gu),m(t,ai,d),m(t,ce,d),b(To,ce,null),e(ce,_u),e(ce,$o),e($o,vu),e($o,Eo),e(Eo,yu),e($o,bu),e(ce,Lu),e(ce,se),b(zo,se,null),e(se,ku),e(se,De),e(De,wu),e(De,Hn),e(Hn,xu),e(De,Mu),e(De,Ua),e(Ua,Tu),e(De,$u),e(se,Eu),b(st,se,null),e(se,zu),b(at,se,null),m(t,ri,d),m(t,Ae,d),e(Ae,rt),e(rt,Va),b(qo,Va,null),e(Ae,qu),e(Ae,Qa),e(Qa,ju),m(t,ii,d),m(t,J,d),b(jo,J,null),e(J,Fu),e(J,Fo),e(Fo,Pu),e(Fo,Po),e(Po,Cu),e(Fo,Iu),e(J,Du),e(J,Co),e(Co,Au),e(Co,Io),e(Io,Ou),e(Co,Nu),e(J,Su),e(J,ae),b(Do,ae,null),e(ae,Ru),e(ae,Oe),e(Oe,Wu),e(Oe,Kn),e(Kn,Bu),e(Oe,Uu),e(Oe,Ga),e(Ga,Vu),e(Oe,Qu),e(ae,Gu),b(it,ae,null),e(ae,Hu),b(lt,ae,null),m(t,li,d),m(t,Ne,d),e(Ne,dt),e(dt,Ha),b(Ao,Ha,null),e(Ne,Ku),e(Ne,Ka),e(Ka,Xu),m(t,di,d),m(t,ee,d),b(Oo,ee,null),e(ee,Yu),e(ee,te),e(te,Zu),e(te,No),e(No,Ju),e(te,eh),e(te,So),e(So,th),e(te,oh),e(te,Ro),e(Ro,nh),e(te,sh),e(te,Wo),e(Wo,ah),e(te,rh),e(ee,ih),e(ee,Bo),e(Bo,lh),e(Bo,Uo),e(Uo,dh),e(Bo,ch),e(ee,ph),e(ee,re),b(Vo,re,null),e(re,mh),e(re,Se),e(Se,uh),e(Se,Xn),e(Xn,hh),e(Se,fh),e(Se,Xa),e(Xa,gh),e(Se,_h),e(re,vh),b(ct,re,null),e(re,yh),b(pt,re,null),m(t,ci,d),m(t,Re,d),e(Re,mt),e(mt,Ya),b(Qo,Ya,null),e(Re,bh),e(Re,Za),e(Za,Lh),m(t,pi,d),m(t,oe,d),b(Go,oe,null),e(oe,kh),e(oe,pe),e(pe,wh),e(pe,Ho),e(Ho,xh),e(pe,Mh),e(pe,Ja),e(Ja,Th),e(pe,$h),e(pe,er),e(er,Eh),e(pe,zh),e(oe,qh),e(oe,Ko),e(Ko,jh),e(Ko,Xo),e(Xo,Fh),e(Ko,Ph),e(oe,Ch),e(oe,D),b(Yo,D,null),e(D,Ih),e(D,We),e(We,Dh),e(We,Yn),e(Yn,Ah),e(We,Oh),e(We,tr),e(tr,Nh),e(We,Sh),e(D,Rh),b(ut,D,null),e(D,Wh),e(D,or),e(or,Bh),e(D,Uh),e(D,nr),e(nr,Vh),e(D,Qh),b(ht,D,null),e(D,Gh),b(ft,D,null),mi=!0},p(t,[d]){const Zo={};d&2&&(Zo.$$scope={dirty:d,ctx:t}),Ke.$set(Zo);const sr={};d&2&&(sr.$$scope={dirty:d,ctx:t}),st.$set(sr);const ar={};d&2&&(ar.$$scope={dirty:d,ctx:t}),at.$set(ar);const rr={};d&2&&(rr.$$scope={dirty:d,ctx:t}),it.$set(rr);const Jo={};d&2&&(Jo.$$scope={dirty:d,ctx:t}),lt.$set(Jo);const ir={};d&2&&(ir.$$scope={dirty:d,ctx:t}),ct.$set(ir);const lr={};d&2&&(lr.$$scope={dirty:d,ctx:t}),pt.$set(lr);const dr={};d&2&&(dr.$$scope={dirty:d,ctx:t}),ut.$set(dr);const Be={};d&2&&(Be.$$scope={dirty:d,ctx:t}),ht.$set(Be);const cr={};d&2&&(cr.$$scope={dirty:d,ctx:t}),ft.$set(cr)},i(t){mi||(L(u.$$.fragment,t),L(Tt.$$.fragment,t),L(Dt.$$.fragment,t),L(Vt.$$.fragment,t),L(Qt.$$.fragment,t),L(Kt.$$.fragment,t),L(Xt.$$.fragment,t),L(Zt.$$.fragment,t),L(Jt.$$.fragment,t),L(eo.$$.fragment,t),L(to.$$.fragment,t),L(oo.$$.fragment,t),L(no.$$.fragment,t),L(so.$$.fragment,t),L(Ke.$$.fragment,t),L(ro.$$.fragment,t),L(io.$$.fragment,t),L(lo.$$.fragment,t),L(co.$$.fragment,t),L(po.$$.fragment,t),L(uo.$$.fragment,t),L(ho.$$.fragment,t),L(fo.$$.fragment,t),L(go.$$.fragment,t),L(yo.$$.fragment,t),L(bo.$$.fragment,t),L(Lo.$$.fragment,t),L(ko.$$.fragment,t),L(Mo.$$.fragment,t),L(To.$$.fragment,t),L(zo.$$.fragment,t),L(st.$$.fragment,t),L(at.$$.fragment,t),L(qo.$$.fragment,t),L(jo.$$.fragment,t),L(Do.$$.fragment,t),L(it.$$.fragment,t),L(lt.$$.fragment,t),L(Ao.$$.fragment,t),L(Oo.$$.fragment,t),L(Vo.$$.fragment,t),L(ct.$$.fragment,t),L(pt.$$.fragment,t),L(Qo.$$.fragment,t),L(Go.$$.fragment,t),L(Yo.$$.fragment,t),L(ut.$$.fragment,t),L(ht.$$.fragment,t),L(ft.$$.fragment,t),mi=!0)},o(t){k(u.$$.fragment,t),k(Tt.$$.fragment,t),k(Dt.$$.fragment,t),k(Vt.$$.fragment,t),k(Qt.$$.fragment,t),k(Kt.$$.fragment,t),k(Xt.$$.fragment,t),k(Zt.$$.fragment,t),k(Jt.$$.fragment,t),k(eo.$$.fragment,t),k(to.$$.fragment,t),k(oo.$$.fragment,t),k(no.$$.fragment,t),k(so.$$.fragment,t),k(Ke.$$.fragment,t),k(ro.$$.fragment,t),k(io.$$.fragment,t),k(lo.$$.fragment,t),k(co.$$.fragment,t),k(po.$$.fragment,t),k(uo.$$.fragment,t),k(ho.$$.fragment,t),k(fo.$$.fragment,t),k(go.$$.fragment,t),k(yo.$$.fragment,t),k(bo.$$.fragment,t),k(Lo.$$.fragment,t),k(ko.$$.fragment,t),k(Mo.$$.fragment,t),k(To.$$.fragment,t),k(zo.$$.fragment,t),k(st.$$.fragment,t),k(at.$$.fragment,t),k(qo.$$.fragment,t),k(jo.$$.fragment,t),k(Do.$$.fragment,t),k(it.$$.fragment,t),k(lt.$$.fragment,t),k(Ao.$$.fragment,t),k(Oo.$$.fragment,t),k(Vo.$$.fragment,t),k(ct.$$.fragment,t),k(pt.$$.fragment,t),k(Qo.$$.fragment,t),k(Go.$$.fragment,t),k(Yo.$$.fragment,t),k(ut.$$.fragment,t),k(ht.$$.fragment,t),k(ft.$$.fragment,t),mi=!1},d(t){o(h),t&&o(x),t&&o(f),w(u),t&&o(pr),t&&o(Me),w(Tt),t&&o(mr),t&&o(ue),t&&o(ur),t&&o(he),t&&o(hr),t&&o(tn),t&&o(fr),t&&o(on),t&&o(gr),t&&o(ne),t&&o(_r),w(Dt,t),t&&o(vr),t&&o(nn),t&&o(yr),t&&o(sn),t&&o(br),t&&o(V),t&&o(Lr),w(Vt,t),t&&o(kr),t&&o(fe),t&&o(wr),w(Qt,t),t&&o(xr),t&&o(Ve),t&&o(Mr),t&&o(ge),t&&o(Tr),t&&o(Qe),t&&o($r),t&&o($e),w(Kt),t&&o(Er),t&&o(Q),t&&o(zr),w(Xt,t),t&&o(qr),t&&o(E),t&&o(jr),t&&o(W),t&&o(Fr),t&&o(wn),t&&o(Pr),t&&o(xn),t&&o(Cr),t&&o(Mn),t&&o(Ir),w(Zt,t),t&&o(Dr),t&&o(Tn),t&&o(Ar),t&&o(_e),t&&o(Or),w(Jt,t),t&&o(Nr),t&&o($n),t&&o(Sr),t&&o(G),t&&o(Rr),w(eo,t),t&&o(Wr),t&&o(En),t&&o(Br),t&&o(zn),t&&o(Ur),w(to,t),t&&o(Vr),t&&o(qn),t&&o(Qr),t&&o(jn),t&&o(Gr),w(oo,t),t&&o(Hr),t&&o(Ee),w(no),t&&o(Kr),t&&o(Y),w(so),w(Ke),t&&o(Xr),t&&o(je),w(ro),t&&o(Yr),t&&o(de),w(io),w(lo),t&&o(Zr),t&&o(Fe),w(co),t&&o(Jr),t&&o(N),w(po),w(uo),w(ho),t&&o(ei),t&&o(Pe),w(fo),t&&o(ti),t&&o(Z),w(go),w(yo),t&&o(oi),t&&o(Ce),w(bo),t&&o(ni),t&&o(B),w(Lo),w(ko),t&&o(si),t&&o(Ie),w(Mo),t&&o(ai),t&&o(ce),w(To),w(zo),w(st),w(at),t&&o(ri),t&&o(Ae),w(qo),t&&o(ii),t&&o(J),w(jo),w(Do),w(it),w(lt),t&&o(li),t&&o(Ne),w(Ao),t&&o(di),t&&o(ee),w(Oo),w(Vo),w(ct),w(pt),t&&o(ci),t&&o(Re),w(Qo),t&&o(pi),t&&o(oe),w(Go),w(Yo),w(ut),w(ht),w(ft)}}}const Fv={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function Pv(F){return bv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Sv extends gv{constructor(h){super();_v(this,h,Pv,jv,vv,{})}}export{Sv as default,Fv as metadata};
