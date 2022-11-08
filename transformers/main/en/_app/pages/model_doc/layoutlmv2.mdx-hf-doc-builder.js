import{S as Uv,i as Vv,s as Qv,e as a,k as c,w as v,t as n,M as Gv,c as r,d as o,m as p,a as i,x as y,h as s,b as l,G as e,g as m,y as b,q as L,o as w,B as k,v as Hv,L as Ls}from"../../chunks/vendor-hf-doc-builder.js";import{T as sl}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as U}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ne}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as bs}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Kv(j){let h,x,f,g,T;return g=new U({props:{code:`from transformers import LayoutLMv2Config, LayoutLMv2Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(u),y(g.$$.fragment,u)},m(u,_){m(u,h,_),e(h,x),m(u,f,_),b(g,u,_),T=!0},p:Ls,i(u){T||(L(g.$$.fragment,u),T=!0)},o(u){w(g.$$.fragment,u),T=!1},d(u){u&&o(h),u&&o(f),k(g,u)}}}function Xv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(u,_){m(u,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(u){u&&o(h)}}}function Yv(j){let h,x,f,g,T;return g=new U({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model, set_seed
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
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">342</span>, <span class="hljs-number">768</span>])`}}),{c(){h=a("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Examples:"),_.forEach(o),f=p(u),y(g.$$.fragment,u)},m(u,_){m(u,h,_),e(h,x),m(u,f,_),b(g,u,_),T=!0},p:Ls,i(u){T||(L(g.$$.fragment,u),T=!0)},o(u){w(g.$$.fragment,u),T=!1},d(u){u&&o(h),u&&o(f),k(g,u)}}}function Zv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(u,_){m(u,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(u){u&&o(h)}}}function Jv(j){let h,x,f,g,T;return g=new U({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification, set_seed
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
(<span class="hljs-number">4</span>, <span class="hljs-string">&#x27;advertisement&#x27;</span>)`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(u),y(g.$$.fragment,u)},m(u,_){m(u,h,_),e(h,x),m(u,f,_),b(g,u,_),T=!0},p:Ls,i(u){T||(L(g.$$.fragment,u),T=!0)},o(u){w(g.$$.fragment,u),T=!1},d(u){u&&o(h),u&&o(f),k(g,u)}}}function ey(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(u,_){m(u,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(u){u&&o(h)}}}function ty(j){let h,x,f,g,T;return g=new U({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification, set_seed
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
[<span class="hljs-string">&#x27;B-ANSWER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>]`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(u),y(g.$$.fragment,u)},m(u,_){m(u,h,_),e(h,x),m(u,f,_),b(g,u,_),T=!0},p:Ls,i(u){T||(L(g.$$.fragment,u),T=!0)},o(u){w(g.$$.fragment,u),T=!1},d(u){u&&o(h),u&&o(f),k(g,u)}}}function oy(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){h=r(u,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(u,_){m(u,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(u){u&&o(h)}}}function ny(j){let h,x;return h=new U({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
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
<span class="hljs-string">&#x27;council mem - bers conducted by trrf treasurer philip g. kuehn to get answers which the public ...</span>`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:Ls,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function sy(j){let h,x;return h=new U({props:{code:`target_start_index = torch.tensor([7])
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
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:Ls,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function ay(j){let h,x,f,g,T,u,_,A,al,kr,Me,Qe,ws,qt,rl,ks,il,xr,he,ll,Pt,dl,cl,ln,pl,ml,Tr,fe,X,ul,jt,hl,fl,Ft,gl,_l,It,vl,yl,Ct,bl,Ll,wl,Dt,kl,Ot,xl,Tl,Ml,At,$l,Nt,zl,El,Mr,dn,ql,$r,cn,xs,Pl,zr,se,jl,Ts,Fl,Il,Ms,Cl,Dl,$s,Ol,Al,Er,St,qr,pn,Nl,Pr,mn,Sl,jr,V,zs,Rl,Wl,Rt,Bl,Wt,Ul,Vl,Ql,Bt,Gl,Ut,Hl,Kl,Xl,$e,Yl,Vt,Zl,Jl,Qt,ed,td,od,M,nd,Es,sd,ad,un,rd,id,qs,ld,dd,Ps,cd,pd,js,md,ud,Fs,hd,fd,Is,gd,_d,Cs,vd,yd,Ds,bd,Ld,hn,wd,kd,Gt,xd,Td,Ht,Md,$d,Fr,Kt,Ir,ge,zd,Os,Ed,qd,As,Pd,jd,Cr,Xt,Dr,Ge,Fd,fn,Id,Cd,Or,_e,D,Dd,gn,Od,Ad,Ns,Nd,Sd,Ss,Rd,Wd,_n,Bd,Ud,Rs,Vd,Qd,Ws,Gd,Hd,Bs,Kd,Xd,Yd,Yt,Zd,vn,Jd,ec,tc,Zt,oc,Us,nc,sc,Ar,He,ac,yn,rc,ic,Nr,ze,Ke,Vs,Jt,lc,Qs,dc,Sr,Q,cc,bn,pc,mc,Ln,uc,hc,wn,fc,gc,kn,_c,vc,Rr,eo,Wr,z,yc,xn,bc,Lc,Tn,wc,kc,Gs,xc,Tc,Mn,Mc,$c,$n,zc,Ec,Hs,qc,Pc,Ks,jc,Fc,Xs,Ic,Cc,Ys,Dc,Oc,Zs,Ac,Nc,Br,W,zn,Sc,Rc,to,Wc,Bc,En,Uc,Vc,Js,Qc,Gc,ea,Hc,Kc,Ur,qn,Xc,Vr,Pn,ta,Yc,Qr,jn,Zc,Gr,oo,Hr,Fn,oa,Jc,Kr,ve,ep,na,tp,op,sa,np,sp,Xr,no,Yr,In,aa,ap,Zr,G,rp,ra,ip,lp,ia,dp,cp,la,pp,mp,da,up,hp,Jr,so,ei,Cn,ca,fp,ti,Dn,gp,oi,ao,ni,On,pa,_p,si,An,vp,ai,ro,ri,Ee,Xe,ma,io,yp,ua,bp,ii,Y,lo,Lp,qe,wp,Nn,kp,xp,co,Tp,Mp,$p,Pe,zp,Sn,Ep,qp,Rn,Pp,jp,Fp,Ye,li,je,Ze,ha,po,Ip,fa,Cp,di,de,mo,Dp,ga,Op,Ap,Je,uo,Np,_a,Sp,ci,Fe,et,va,ho,Rp,ya,Wp,pi,ce,fo,Bp,ba,Up,Vp,tt,go,Qp,La,Gp,mi,Ie,ot,wa,_o,Hp,ka,Kp,ui,N,vo,Xp,S,Yp,Wn,Zp,Jp,xa,em,tm,Ta,om,nm,Ma,sm,am,$a,rm,im,za,lm,dm,cm,yo,pm,Bn,mm,um,hm,Un,Vn,fm,gm,_m,nt,bo,vm,Ea,ym,bm,Qn,Lo,hi,Ce,st,qa,wo,Lm,Pa,wm,fi,Z,ko,km,xo,xm,ja,Tm,Mm,$m,To,zm,Gn,Em,qm,Pm,at,Mo,jm,Fa,Fm,gi,De,rt,Ia,$o,Im,Ca,Cm,_i,B,zo,Dm,Da,Om,Am,Hn,Kn,Nm,Sm,Rm,P,Wm,Xn,Bm,Um,Yn,Vm,Qm,Zn,Gm,Hm,Oa,Km,Xm,Aa,Ym,Zm,Na,Jm,eu,Sa,tu,ou,Ra,nu,su,Wa,au,ru,iu,ye,Eo,lu,$,du,Ba,cu,pu,qo,Ua,mu,uu,hu,Jn,fu,gu,Va,_u,vu,Qa,yu,bu,Po,Ga,Lu,wu,ku,Ha,xu,Tu,es,Mu,$u,Ka,zu,Eu,Xa,qu,Pu,Ya,ju,Fu,Za,Iu,Cu,Du,Ja,Ou,vi,Oe,it,er,jo,Au,tr,Nu,yi,pe,Fo,Su,Io,Ru,Co,Wu,Bu,Uu,ae,Do,Vu,Ae,Qu,ts,Gu,Hu,or,Ku,Xu,Yu,lt,Zu,dt,bi,Ne,ct,nr,Oo,Ju,sr,eh,Li,J,Ao,th,No,oh,So,nh,sh,ah,Ro,rh,Wo,ih,lh,dh,re,Bo,ch,Se,ph,os,mh,uh,ar,hh,fh,gh,pt,_h,mt,wi,Re,ut,rr,Uo,vh,ir,yh,ki,ee,Vo,bh,te,Lh,Qo,wh,kh,Go,xh,Th,Ho,Mh,$h,Ko,zh,Eh,qh,Xo,Ph,Yo,jh,Fh,Ih,ie,Zo,Ch,We,Dh,ns,Oh,Ah,lr,Nh,Sh,Rh,ht,Wh,ft,xi,Be,gt,dr,Jo,Bh,cr,Uh,Ti,oe,en,Vh,me,Qh,tn,Gh,Hh,pr,Kh,Xh,mr,Yh,Zh,Jh,on,ef,nn,tf,of,nf,O,sn,sf,Ue,af,ss,rf,lf,ur,df,cf,pf,_t,mf,hr,uf,hf,fr,ff,gf,vt,_f,yt,Mi;return u=new ne({}),qt=new ne({}),St=new U({props:{code:`python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'
python -m pip install torchvision tesseract`,highlighted:`<span class="hljs-keyword">python</span> -m pip install <span class="hljs-string">&#x27;git+https://github.com/facebookresearch/detectron2.git&#x27;</span>
<span class="hljs-keyword">python</span> -m pip install torchvision tesseract`}}),Kt=new U({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),Xt=new U({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Jt=new ne({}),eo=new U({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),oo=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),no=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),so=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),ao=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),ro=new U({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),io=new ne({}),lo=new C({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),Ye=new bs({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[Kv]},$$scope:{ctx:j}}}),po=new ne({}),mo=new C({props:{name:"class transformers.LayoutLMv2ImageProcessor",anchor:"transformers.LayoutLMv2ImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:": bool = True"},{name:"ocr_lang",val:": typing.Optional[str] = None"},{name:"tesseract_config",val:": typing.Optional[str] = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be
overridden by <code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv2ImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after resizing. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.LayoutLMv2ImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.LayoutLMv2ImageProcessor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes. Can be overridden by
<code>apply_ocr</code> in <code>preprocess</code>.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv2ImageProcessor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used. Can be overridden by <code>ocr_lang</code> in <code>preprocess</code>.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv2ImageProcessor.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract. For example: &#x2018;&#x2014;psm 6&#x2019;. Can be overridden by <code>tesseract_config</code> in <code>preprocess</code>.`,name:"tesseract_config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/image_processing_layoutlmv2.py#L105"}}),uo=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv2ImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L435"}}),ho=new ne({}),fo=new C({props:{name:"class transformers.LayoutLMv2ImageProcessor",anchor:"transformers.LayoutLMv2ImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:": bool = True"},{name:"ocr_lang",val:": typing.Optional[str] = None"},{name:"tesseract_config",val:": typing.Optional[str] = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be
overridden by <code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv2ImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after resizing. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.LayoutLMv2ImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.LayoutLMv2ImageProcessor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes. Can be overridden by
<code>apply_ocr</code> in <code>preprocess</code>.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv2ImageProcessor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used. Can be overridden by <code>ocr_lang</code> in <code>preprocess</code>.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv2ImageProcessor.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract. For example: &#x2018;&#x2014;psm 6&#x2019;. Can be overridden by <code>tesseract_config</code> in <code>preprocess</code>.`,name:"tesseract_config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/image_processing_layoutlmv2.py#L105"}}),go=new C({props:{name:"preprocess",anchor:"transformers.LayoutLMv2ImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"apply_ocr",val:": bool = None"},{name:"ocr_lang",val:": typing.Optional[str] = None"},{name:"tesseract_config",val:": typing.Optional[str] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": ChannelDimension = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Desired size of the output image after resizing.`,name:"size"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the enum <code>PIL.Image</code> resampling
filter. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.apply_ocr</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>, defaults to <code>self.ocr_lang</code>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>, defaults to <code>self.tesseract_config</code>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract.`,name:"tesseract_config"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/image_processing_layoutlmv2.py#L179"}}),_o=new ne({}),vo=new C({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L206"}}),bo=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
`}}),Lo=new C({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L406"}}),wo=new ne({}),ko=new C({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L70"}}),Mo=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
`}}),$o=new ne({}),zo=new C({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),Eo=new C({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),jo=new ne({}),Fo=new C({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L710"}}),Do=new C({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),lt=new sl({props:{$$slots:{default:[Xv]},$$scope:{ctx:j}}}),dt=new bs({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[Yv]},$$scope:{ctx:j}}}),Oo=new ne({}),Ao=new C({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L969"}}),Bo=new C({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),pt=new sl({props:{$$slots:{default:[Zv]},$$scope:{ctx:j}}}),mt=new bs({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[Jv]},$$scope:{ctx:j}}}),Uo=new ne({}),Vo=new C({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1150"}}),Zo=new C({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),ht=new sl({props:{$$slots:{default:[ey]},$$scope:{ctx:j}}}),ft=new bs({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[ty]},$$scope:{ctx:j}}}),Jo=new ne({}),en=new C({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1281"}}),sn=new C({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),_t=new sl({props:{$$slots:{default:[oy]},$$scope:{ctx:j}}}),vt=new bs({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[ny]},$$scope:{ctx:j}}}),yt=new bs({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example-2",$$slots:{default:[sy]},$$scope:{ctx:j}}}),{c(){h=a("meta"),x=c(),f=a("h1"),g=a("a"),T=a("span"),v(u.$$.fragment),_=c(),A=a("span"),al=n("LayoutLMV2"),kr=c(),Me=a("h2"),Qe=a("a"),ws=a("span"),v(qt.$$.fragment),rl=c(),ks=a("span"),il=n("Overview"),xr=c(),he=a("p"),ll=n("The LayoutLMV2 model was proposed in "),Pt=a("a"),dl=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),cl=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),ln=a("a"),pl=n("LayoutLM"),ml=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Tr=c(),fe=a("ul"),X=a("li"),ul=n("information extraction from scanned documents: the "),jt=a("a"),hl=n("FUNSD"),fl=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),Ft=a("a"),gl=n("CORD"),_l=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),It=a("a"),vl=n("SROIE"),yl=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Ct=a("a"),bl=n("Kleister-NDA"),Ll=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),wl=c(),Dt=a("li"),kl=n("document image classification: the "),Ot=a("a"),xl=n("RVL-CDIP"),Tl=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),Ml=c(),At=a("li"),$l=n("document visual question answering: the "),Nt=a("a"),zl=n("DocVQA"),El=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),Mr=c(),dn=a("p"),ql=n("The abstract from the paper is the following:"),$r=c(),cn=a("p"),xs=a("em"),Pl=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),zr=c(),se=a("p"),jl=n("LayoutLMv2 depends on "),Ts=a("code"),Fl=n("detectron2"),Il=n(", "),Ms=a("code"),Cl=n("torchvision"),Dl=n(" and "),$s=a("code"),Ol=n("tesseract"),Al=n(`. Run the
following to install them:`),Er=c(),v(St.$$.fragment),qr=c(),pn=a("p"),Nl=n("(If you are developing for LayoutLMv2, note that passing the doctests also requires the installation of these packages.)"),Pr=c(),mn=a("p"),Sl=n("Tips:"),jr=c(),V=a("ul"),zs=a("li"),Rl=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Wl=c(),Rt=a("li"),Bl=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Wt=a("a"),Ul=n("paper"),Vl=n("."),Ql=c(),Bt=a("li"),Gl=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Ut=a("a"),Hl=n("here"),Kl=n("."),Xl=c(),$e=a("li"),Yl=n("LayoutLMv2 uses Facebook AI\u2019s "),Vt=a("a"),Zl=n("Detectron2"),Jl=n(` package for its visual
backbone. See `),Qt=a("a"),ed=n("this link"),td=n(` for installation
instructions.`),od=c(),M=a("li"),nd=n("In addition to "),Es=a("code"),sd=n("input_ids"),ad=n(", "),un=a("a"),rd=n("forward()"),id=n(` expects 2 additional inputs, namely
`),qs=a("code"),ld=n("image"),dd=n(" and "),Ps=a("code"),cd=n("bbox"),pd=n(". The "),js=a("code"),md=n("image"),ud=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Fs=a("code"),hd=n("image"),fd=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),Is=a("code"),gd=n("torch.Tensor"),_d=n(" or a "),Cs=a("code"),vd=n("Detectron2.structures.ImageList"),yd=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),Ds=a("code"),bd=n("bbox"),Ld=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),hn=a("a"),wd=n("LayoutLMModel"),kd=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Gt=a("a"),xd=n("Tesseract"),Td=n(" (there\u2019s a "),Ht=a("a"),Md=n(`Python
wrapper`),$d=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),Fr=c(),v(Kt.$$.fragment),Ir=c(),ge=a("p"),zd=n("Here, "),Os=a("code"),Ed=n("width"),qd=n(" and "),As=a("code"),Pd=n("height"),jd=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),Cr=c(),v(Xt.$$.fragment),Dr=c(),Ge=a("p"),Fd=n("However, this model includes a brand new "),fn=a("a"),Id=n("LayoutLMv2Processor"),Cd=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),Or=c(),_e=a("ul"),D=a("li"),Dd=n("Internally, "),gn=a("a"),Od=n("LayoutLMv2Model"),Ad=n(" will send the "),Ns=a("code"),Nd=n("image"),Sd=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ss=a("code"),Rd=n("image_feature_pool_shape"),Wd=n(` attribute of
`),_n=a("a"),Bd=n("LayoutLMv2Config"),Ud=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Rs=a("code"),Vd=n("seq_length"),Qd=n(" + "),Ws=a("code"),Gd=n("image_feature_pool_shape[0]"),Hd=n(` *
`),Bs=a("code"),Kd=n("config.image_feature_pool_shape[1]"),Xd=n("."),Yd=c(),Yt=a("li"),Zd=n("When calling "),vn=a("a"),Jd=n("from_pretrained()"),ec=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),tc=c(),Zt=a("li"),oc=n("If you want to train the model in a distributed environment, make sure to call "),Us=a("code"),nc=n("synchronize_batch_norm"),sc=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),Ar=c(),He=a("p"),ac=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),yn=a("a"),rc=n("LayoutXLM\u2019s documentation page"),ic=n("."),Nr=c(),ze=a("h2"),Ke=a("a"),Vs=a("span"),v(Jt.$$.fragment),lc=c(),Qs=a("span"),dc=n("Usage: LayoutLMv2Processor"),Sr=c(),Q=a("p"),cc=n("The easiest way to prepare data for the model is to use "),bn=a("a"),pc=n("LayoutLMv2Processor"),mc=n(`, which internally
combines a feature extractor (`),Ln=a("a"),uc=n("LayoutLMv2FeatureExtractor"),hc=n(`) and a tokenizer
(`),wn=a("a"),fc=n("LayoutLMv2Tokenizer"),gc=n(" or "),kn=a("a"),_c=n("LayoutLMv2TokenizerFast"),vc=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),Rr=c(),v(eo.$$.fragment),Wr=c(),z=a("p"),yc=n("In short, one can provide a document image (and possibly additional data) to "),xn=a("a"),bc=n("LayoutLMv2Processor"),Lc=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),Tn=a("a"),wc=n("LayoutLMv2FeatureExtractor"),kc=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Gs=a("code"),xc=n("image"),Tc=n(` input. The words and
normalized bounding boxes are then provided to `),Mn=a("a"),Mc=n("LayoutLMv2Tokenizer"),$c=n(` or
`),$n=a("a"),zc=n("LayoutLMv2TokenizerFast"),Ec=n(", which converts them to token-level "),Hs=a("code"),qc=n("input_ids"),Pc=n(`,
`),Ks=a("code"),jc=n("attention_mask"),Fc=n(", "),Xs=a("code"),Ic=n("token_type_ids"),Cc=n(", "),Ys=a("code"),Dc=n("bbox"),Oc=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Zs=a("code"),Ac=n("labels"),Nc=n("."),Br=c(),W=a("p"),zn=a("a"),Sc=n("LayoutLMv2Processor"),Rc=n(" uses "),to=a("a"),Wc=n("PyTesseract"),Bc=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),En=a("a"),Uc=n("LayoutLMv2FeatureExtractor"),Vc=n(" with "),Js=a("code"),Qc=n("apply_ocr"),Gc=n(" set to "),ea=a("code"),Hc=n("False"),Kc=n("."),Ur=c(),qn=a("p"),Xc=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Vr=c(),Pn=a("p"),ta=a("strong"),Yc=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Qr=c(),jn=a("p"),Zc=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Gr=c(),v(oo.$$.fragment),Hr=c(),Fn=a("p"),oa=a("strong"),Jc=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Kr=c(),ve=a("p"),ep=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),na=a("code"),tp=n("apply_ocr"),op=n(` set to
`),sa=a("code"),np=n("False"),sp=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),Xr=c(),v(no.$$.fragment),Yr=c(),In=a("p"),aa=a("strong"),ap=n("Use case 3: token classification (training), apply_ocr=False"),Zr=c(),G=a("p"),rp=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),ra=a("code"),ip=n("labels"),lp=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),ia=a("code"),dp=n("ignore_index"),cp=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),la=a("code"),pp=n("only_label_first_subword"),mp=n(" set to "),da=a("code"),up=n("False"),hp=n("."),Jr=c(),v(so.$$.fragment),ei=c(),Cn=a("p"),ca=a("strong"),fp=n("Use case 4: visual question answering (inference), apply_ocr=True"),ti=c(),Dn=a("p"),gp=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),oi=c(),v(ao.$$.fragment),ni=c(),On=a("p"),pa=a("strong"),_p=n("Use case 5: visual question answering (inference), apply_ocr=False"),si=c(),An=a("p"),vp=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),ai=c(),v(ro.$$.fragment),ri=c(),Ee=a("h2"),Xe=a("a"),ma=a("span"),v(io.$$.fragment),yp=c(),ua=a("span"),bp=n("LayoutLMv2Config"),ii=c(),Y=a("div"),v(lo.$$.fragment),Lp=c(),qe=a("p"),wp=n("This is the configuration class to store the configuration of a "),Nn=a("a"),kp=n("LayoutLMv2Model"),xp=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),co=a("a"),Tp=n("microsoft/layoutlmv2-base-uncased"),Mp=n(" architecture."),$p=c(),Pe=a("p"),zp=n("Configuration objects inherit from "),Sn=a("a"),Ep=n("PretrainedConfig"),qp=n(` and can be used to control the model outputs. Read the
documentation from `),Rn=a("a"),Pp=n("PretrainedConfig"),jp=n(" for more information."),Fp=c(),v(Ye.$$.fragment),li=c(),je=a("h2"),Ze=a("a"),ha=a("span"),v(po.$$.fragment),Ip=c(),fa=a("span"),Cp=n("LayoutLMv2FeatureExtractor"),di=c(),de=a("div"),v(mo.$$.fragment),Dp=c(),ga=a("p"),Op=n("Constructs a LayoutLMv2 image processor."),Ap=c(),Je=a("div"),v(uo.$$.fragment),Np=c(),_a=a("p"),Sp=n("Preprocess an image or a batch of images."),ci=c(),Fe=a("h2"),et=a("a"),va=a("span"),v(ho.$$.fragment),Rp=c(),ya=a("span"),Wp=n("LayoutLMv2ImageProcessor"),pi=c(),ce=a("div"),v(fo.$$.fragment),Bp=c(),ba=a("p"),Up=n("Constructs a LayoutLMv2 image processor."),Vp=c(),tt=a("div"),v(go.$$.fragment),Qp=c(),La=a("p"),Gp=n("Preprocess an image or batch of images."),mi=c(),Ie=a("h2"),ot=a("a"),wa=a("span"),v(_o.$$.fragment),Hp=c(),ka=a("span"),Kp=n("LayoutLMv2Tokenizer"),ui=c(),N=a("div"),v(vo.$$.fragment),Xp=c(),S=a("p"),Yp=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Wn=a("a"),Zp=n("LayoutLMv2Tokenizer"),Jp=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),xa=a("code"),em=n("input_ids"),tm=n(", "),Ta=a("code"),om=n("attention_mask"),nm=n(", "),Ma=a("code"),sm=n("token_type_ids"),am=n(", "),$a=a("code"),rm=n("bbox"),im=n(`, and
optional `),za=a("code"),lm=n("labels"),dm=n(" (for token classification)."),cm=c(),yo=a("p"),pm=n("This tokenizer inherits from "),Bn=a("a"),mm=n("PreTrainedTokenizer"),um=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),hm=c(),Un=a("p"),Vn=a("a"),fm=n("LayoutLMv2Tokenizer"),gm=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),_m=c(),nt=a("div"),v(bo.$$.fragment),vm=c(),Ea=a("p"),ym=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),bm=c(),Qn=a("div"),v(Lo.$$.fragment),hi=c(),Ce=a("h2"),st=a("a"),qa=a("span"),v(wo.$$.fragment),Lm=c(),Pa=a("span"),wm=n("LayoutLMv2TokenizerFast"),fi=c(),Z=a("div"),v(ko.$$.fragment),km=c(),xo=a("p"),xm=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),ja=a("em"),Tm=n("tokenizers"),Mm=n(" library). Based on WordPiece."),$m=c(),To=a("p"),zm=n("This tokenizer inherits from "),Gn=a("a"),Em=n("PreTrainedTokenizerFast"),qm=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Pm=c(),at=a("div"),v(Mo.$$.fragment),jm=c(),Fa=a("p"),Fm=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),gi=c(),De=a("h2"),rt=a("a"),Ia=a("span"),v($o.$$.fragment),Im=c(),Ca=a("span"),Cm=n("LayoutLMv2Processor"),_i=c(),B=a("div"),v(zo.$$.fragment),Dm=c(),Da=a("p"),Om=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),Am=c(),Hn=a("p"),Kn=a("a"),Nm=n("LayoutLMv2Processor"),Sm=n(" offers all the functionalities you need to prepare data for the model."),Rm=c(),P=a("p"),Wm=n("It first uses "),Xn=a("a"),Bm=n("LayoutLMv2FeatureExtractor"),Um=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Yn=a("a"),Vm=n("LayoutLMv2Tokenizer"),Qm=n(` or
`),Zn=a("a"),Gm=n("LayoutLMv2TokenizerFast"),Hm=n(", which turns the words and bounding boxes into token-level "),Oa=a("code"),Km=n("input_ids"),Xm=n(`,
`),Aa=a("code"),Ym=n("attention_mask"),Zm=n(", "),Na=a("code"),Jm=n("token_type_ids"),eu=n(", "),Sa=a("code"),tu=n("bbox"),ou=n(". Optionally, one can provide integer "),Ra=a("code"),nu=n("word_labels"),su=n(`, which are turned
into token-level `),Wa=a("code"),au=n("labels"),ru=n(" for token classification tasks (such as FUNSD, CORD)."),iu=c(),ye=a("div"),v(Eo.$$.fragment),lu=c(),$=a("p"),du=n("This method first forwards the "),Ba=a("code"),cu=n("images"),pu=n(" argument to "),qo=a("a"),Ua=a("strong"),mu=n("call"),uu=n("()"),hu=n(`. In case
`),Jn=a("a"),fu=n("LayoutLMv2FeatureExtractor"),gu=n(" was initialized with "),Va=a("code"),_u=n("apply_ocr"),vu=n(" set to "),Qa=a("code"),yu=n("True"),bu=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Po=a("a"),Ga=a("strong"),Lu=n("call"),wu=n("()"),ku=n(` and returns the output,
together with resized `),Ha=a("code"),xu=n("images"),Tu=n(". In case "),es=a("a"),Mu=n("LayoutLMv2FeatureExtractor"),$u=n(" was initialized with "),Ka=a("code"),zu=n("apply_ocr"),Eu=n(` set to
`),Xa=a("code"),qu=n("False"),Pu=n(", it passes the words ("),Ya=a("code"),ju=n("text"),Fu=n("/"),Za=a("code"),Iu=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),Cu=n("."),Du=c(),Ja=a("p"),Ou=n("Please refer to the docstring of the above two methods for more information."),vi=c(),Oe=a("h2"),it=a("a"),er=a("span"),v(jo.$$.fragment),Au=c(),tr=a("span"),Nu=n("LayoutLMv2Model"),yi=c(),pe=a("div"),v(Fo.$$.fragment),Su=c(),Io=a("p"),Ru=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Co=a("a"),Wu=n("torch.nn.Module"),Bu=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uu=c(),ae=a("div"),v(Do.$$.fragment),Vu=c(),Ae=a("p"),Qu=n("The "),ts=a("a"),Gu=n("LayoutLMv2Model"),Hu=n(" forward method, overrides the "),or=a("code"),Ku=n("__call__"),Xu=n(" special method."),Yu=c(),v(lt.$$.fragment),Zu=c(),v(dt.$$.fragment),bi=c(),Ne=a("h2"),ct=a("a"),nr=a("span"),v(Oo.$$.fragment),Ju=c(),sr=a("span"),eh=n("LayoutLMv2ForSequenceClassification"),Li=c(),J=a("div"),v(Ao.$$.fragment),th=c(),No=a("p"),oh=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),So=a("a"),nh=n("RVL-CDIP"),sh=n(" dataset."),ah=c(),Ro=a("p"),rh=n("This model is a PyTorch "),Wo=a("a"),ih=n("torch.nn.Module"),lh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dh=c(),re=a("div"),v(Bo.$$.fragment),ch=c(),Se=a("p"),ph=n("The "),os=a("a"),mh=n("LayoutLMv2ForSequenceClassification"),uh=n(" forward method, overrides the "),ar=a("code"),hh=n("__call__"),fh=n(" special method."),gh=c(),v(pt.$$.fragment),_h=c(),v(mt.$$.fragment),wi=c(),Re=a("h2"),ut=a("a"),rr=a("span"),v(Uo.$$.fragment),vh=c(),ir=a("span"),yh=n("LayoutLMv2ForTokenClassification"),ki=c(),ee=a("div"),v(Vo.$$.fragment),bh=c(),te=a("p"),Lh=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Qo=a("a"),wh=n("FUNSD"),kh=n(", "),Go=a("a"),xh=n("SROIE"),Th=n(`,
`),Ho=a("a"),Mh=n("CORD"),$h=n(" and "),Ko=a("a"),zh=n("Kleister-NDA"),Eh=n("."),qh=c(),Xo=a("p"),Ph=n("This model is a PyTorch "),Yo=a("a"),jh=n("torch.nn.Module"),Fh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ih=c(),ie=a("div"),v(Zo.$$.fragment),Ch=c(),We=a("p"),Dh=n("The "),ns=a("a"),Oh=n("LayoutLMv2ForTokenClassification"),Ah=n(" forward method, overrides the "),lr=a("code"),Nh=n("__call__"),Sh=n(" special method."),Rh=c(),v(ht.$$.fragment),Wh=c(),v(ft.$$.fragment),xi=c(),Be=a("h2"),gt=a("a"),dr=a("span"),v(Jo.$$.fragment),Bh=c(),cr=a("span"),Uh=n("LayoutLMv2ForQuestionAnswering"),Ti=c(),oe=a("div"),v(en.$$.fragment),Vh=c(),me=a("p"),Qh=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),tn=a("a"),Gh=n("DocVQA"),Hh=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),pr=a("code"),Kh=n("span start logits"),Xh=n(" and "),mr=a("code"),Yh=n("span end logits"),Zh=n(")."),Jh=c(),on=a("p"),ef=n("This model is a PyTorch "),nn=a("a"),tf=n("torch.nn.Module"),of=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nf=c(),O=a("div"),v(sn.$$.fragment),sf=c(),Ue=a("p"),af=n("The "),ss=a("a"),rf=n("LayoutLMv2ForQuestionAnswering"),lf=n(" forward method, overrides the "),ur=a("code"),df=n("__call__"),cf=n(" special method."),pf=c(),v(_t.$$.fragment),mf=c(),hr=a("p"),uf=n("Example:"),hf=c(),fr=a("p"),ff=n(`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),gf=c(),v(vt.$$.fragment),_f=c(),v(yt.$$.fragment),this.h()},l(t){const d=Gv('[data-svelte="svelte-1phssyn"]',document.head);h=r(d,"META",{name:!0,content:!0}),d.forEach(o),x=p(t),f=r(t,"H1",{class:!0});var an=i(f);g=r(an,"A",{id:!0,class:!0,href:!0});var gr=i(g);T=r(gr,"SPAN",{});var _r=i(T);y(u.$$.fragment,_r),_r.forEach(o),gr.forEach(o),_=p(an),A=r(an,"SPAN",{});var vr=i(A);al=s(vr,"LayoutLMV2"),vr.forEach(o),an.forEach(o),kr=p(t),Me=r(t,"H2",{class:!0});var rn=i(Me);Qe=r(rn,"A",{id:!0,class:!0,href:!0});var yr=i(Qe);ws=r(yr,"SPAN",{});var br=i(ws);y(qt.$$.fragment,br),br.forEach(o),yr.forEach(o),rl=p(rn),ks=r(rn,"SPAN",{});var Lr=i(ks);il=s(Lr,"Overview"),Lr.forEach(o),rn.forEach(o),xr=p(t),he=r(t,"P",{});var Ve=i(he);ll=s(Ve,"The LayoutLMV2 model was proposed in "),Pt=r(Ve,"A",{href:!0,rel:!0});var wr=i(Pt);dl=s(wr,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),wr.forEach(o),cl=s(Ve,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),ln=r(Ve,"A",{href:!0});var wf=i(ln);pl=s(wf,"LayoutLM"),wf.forEach(o),ml=s(Ve,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Ve.forEach(o),Tr=p(t),fe=r(t,"UL",{});var as=i(fe);X=r(as,"LI",{});var be=i(X);ul=s(be,"information extraction from scanned documents: the "),jt=r(be,"A",{href:!0,rel:!0});var kf=i(jt);hl=s(kf,"FUNSD"),kf.forEach(o),fl=s(be,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),Ft=r(be,"A",{href:!0,rel:!0});var xf=i(Ft);gl=s(xf,"CORD"),xf.forEach(o),_l=s(be,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),It=r(be,"A",{href:!0,rel:!0});var Tf=i(It);vl=s(Tf,"SROIE"),Tf.forEach(o),yl=s(be,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Ct=r(be,"A",{href:!0,rel:!0});var Mf=i(Ct);bl=s(Mf,"Kleister-NDA"),Mf.forEach(o),Ll=s(be,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),be.forEach(o),wl=p(as),Dt=r(as,"LI",{});var $i=i(Dt);kl=s($i,"document image classification: the "),Ot=r($i,"A",{href:!0,rel:!0});var $f=i(Ot);xl=s($f,"RVL-CDIP"),$f.forEach(o),Tl=s($i,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),$i.forEach(o),Ml=p(as),At=r(as,"LI",{});var zi=i(At);$l=s(zi,"document visual question answering: the "),Nt=r(zi,"A",{href:!0,rel:!0});var zf=i(Nt);zl=s(zf,"DocVQA"),zf.forEach(o),El=s(zi,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),zi.forEach(o),as.forEach(o),Mr=p(t),dn=r(t,"P",{});var Ef=i(dn);ql=s(Ef,"The abstract from the paper is the following:"),Ef.forEach(o),$r=p(t),cn=r(t,"P",{});var qf=i(cn);xs=r(qf,"EM",{});var Pf=i(xs);Pl=s(Pf,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),Pf.forEach(o),qf.forEach(o),zr=p(t),se=r(t,"P",{});var bt=i(se);jl=s(bt,"LayoutLMv2 depends on "),Ts=r(bt,"CODE",{});var jf=i(Ts);Fl=s(jf,"detectron2"),jf.forEach(o),Il=s(bt,", "),Ms=r(bt,"CODE",{});var Ff=i(Ms);Cl=s(Ff,"torchvision"),Ff.forEach(o),Dl=s(bt," and "),$s=r(bt,"CODE",{});var If=i($s);Ol=s(If,"tesseract"),If.forEach(o),Al=s(bt,`. Run the
following to install them:`),bt.forEach(o),Er=p(t),y(St.$$.fragment,t),qr=p(t),pn=r(t,"P",{});var Cf=i(pn);Nl=s(Cf,"(If you are developing for LayoutLMv2, note that passing the doctests also requires the installation of these packages.)"),Cf.forEach(o),Pr=p(t),mn=r(t,"P",{});var Df=i(mn);Sl=s(Df,"Tips:"),Df.forEach(o),jr=p(t),V=r(t,"UL",{});var Le=i(V);zs=r(Le,"LI",{});var Of=i(zs);Rl=s(Of,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Of.forEach(o),Wl=p(Le),Rt=r(Le,"LI",{});var Ei=i(Rt);Bl=s(Ei,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Wt=r(Ei,"A",{href:!0,rel:!0});var Af=i(Wt);Ul=s(Af,"paper"),Af.forEach(o),Vl=s(Ei,"."),Ei.forEach(o),Ql=p(Le),Bt=r(Le,"LI",{});var qi=i(Bt);Gl=s(qi,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Ut=r(qi,"A",{href:!0,rel:!0});var Nf=i(Ut);Hl=s(Nf,"here"),Nf.forEach(o),Kl=s(qi,"."),qi.forEach(o),Xl=p(Le),$e=r(Le,"LI",{});var rs=i($e);Yl=s(rs,"LayoutLMv2 uses Facebook AI\u2019s "),Vt=r(rs,"A",{href:!0,rel:!0});var Sf=i(Vt);Zl=s(Sf,"Detectron2"),Sf.forEach(o),Jl=s(rs,` package for its visual
backbone. See `),Qt=r(rs,"A",{href:!0,rel:!0});var Rf=i(Qt);ed=s(Rf,"this link"),Rf.forEach(o),td=s(rs,` for installation
instructions.`),rs.forEach(o),od=p(Le),M=r(Le,"LI",{});var E=i(M);nd=s(E,"In addition to "),Es=r(E,"CODE",{});var Wf=i(Es);sd=s(Wf,"input_ids"),Wf.forEach(o),ad=s(E,", "),un=r(E,"A",{href:!0});var Bf=i(un);rd=s(Bf,"forward()"),Bf.forEach(o),id=s(E,` expects 2 additional inputs, namely
`),qs=r(E,"CODE",{});var Uf=i(qs);ld=s(Uf,"image"),Uf.forEach(o),dd=s(E," and "),Ps=r(E,"CODE",{});var Vf=i(Ps);cd=s(Vf,"bbox"),Vf.forEach(o),pd=s(E,". The "),js=r(E,"CODE",{});var Qf=i(js);md=s(Qf,"image"),Qf.forEach(o),ud=s(E,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Fs=r(E,"CODE",{});var Gf=i(Fs);hd=s(Gf,"image"),Gf.forEach(o),fd=s(E,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),Is=r(E,"CODE",{});var Hf=i(Is);gd=s(Hf,"torch.Tensor"),Hf.forEach(o),_d=s(E," or a "),Cs=r(E,"CODE",{});var Kf=i(Cs);vd=s(Kf,"Detectron2.structures.ImageList"),Kf.forEach(o),yd=s(E,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),Ds=r(E,"CODE",{});var Xf=i(Ds);bd=s(Xf,"bbox"),Xf.forEach(o),Ld=s(E,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),hn=r(E,"A",{href:!0});var Yf=i(hn);wd=s(Yf,"LayoutLMModel"),Yf.forEach(o),kd=s(E,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Gt=r(E,"A",{href:!0,rel:!0});var Zf=i(Gt);xd=s(Zf,"Tesseract"),Zf.forEach(o),Td=s(E," (there\u2019s a "),Ht=r(E,"A",{href:!0,rel:!0});var Jf=i(Ht);Md=s(Jf,`Python
wrapper`),Jf.forEach(o),$d=s(E,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),E.forEach(o),Le.forEach(o),Fr=p(t),y(Kt.$$.fragment,t),Ir=p(t),ge=r(t,"P",{});var is=i(ge);zd=s(is,"Here, "),Os=r(is,"CODE",{});var eg=i(Os);Ed=s(eg,"width"),eg.forEach(o),qd=s(is," and "),As=r(is,"CODE",{});var tg=i(As);Pd=s(tg,"height"),tg.forEach(o),jd=s(is,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),is.forEach(o),Cr=p(t),y(Xt.$$.fragment,t),Dr=p(t),Ge=r(t,"P",{});var Pi=i(Ge);Fd=s(Pi,"However, this model includes a brand new "),fn=r(Pi,"A",{href:!0});var og=i(fn);Id=s(og,"LayoutLMv2Processor"),og.forEach(o),Cd=s(Pi,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),Pi.forEach(o),Or=p(t),_e=r(t,"UL",{});var ls=i(_e);D=r(ls,"LI",{});var R=i(D);Dd=s(R,"Internally, "),gn=r(R,"A",{href:!0});var ng=i(gn);Od=s(ng,"LayoutLMv2Model"),ng.forEach(o),Ad=s(R," will send the "),Ns=r(R,"CODE",{});var sg=i(Ns);Nd=s(sg,"image"),sg.forEach(o),Sd=s(R,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ss=r(R,"CODE",{});var ag=i(Ss);Rd=s(ag,"image_feature_pool_shape"),ag.forEach(o),Wd=s(R,` attribute of
`),_n=r(R,"A",{href:!0});var rg=i(_n);Bd=s(rg,"LayoutLMv2Config"),rg.forEach(o),Ud=s(R,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Rs=r(R,"CODE",{});var ig=i(Rs);Vd=s(ig,"seq_length"),ig.forEach(o),Qd=s(R," + "),Ws=r(R,"CODE",{});var lg=i(Ws);Gd=s(lg,"image_feature_pool_shape[0]"),lg.forEach(o),Hd=s(R,` *
`),Bs=r(R,"CODE",{});var dg=i(Bs);Kd=s(dg,"config.image_feature_pool_shape[1]"),dg.forEach(o),Xd=s(R,"."),R.forEach(o),Yd=p(ls),Yt=r(ls,"LI",{});var ji=i(Yt);Zd=s(ji,"When calling "),vn=r(ji,"A",{href:!0});var cg=i(vn);Jd=s(cg,"from_pretrained()"),cg.forEach(o),ec=s(ji,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),ji.forEach(o),tc=p(ls),Zt=r(ls,"LI",{});var Fi=i(Zt);oc=s(Fi,"If you want to train the model in a distributed environment, make sure to call "),Us=r(Fi,"CODE",{});var pg=i(Us);nc=s(pg,"synchronize_batch_norm"),pg.forEach(o),sc=s(Fi,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),Fi.forEach(o),ls.forEach(o),Ar=p(t),He=r(t,"P",{});var Ii=i(He);ac=s(Ii,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),yn=r(Ii,"A",{href:!0});var mg=i(yn);rc=s(mg,"LayoutXLM\u2019s documentation page"),mg.forEach(o),ic=s(Ii,"."),Ii.forEach(o),Nr=p(t),ze=r(t,"H2",{class:!0});var Ci=i(ze);Ke=r(Ci,"A",{id:!0,class:!0,href:!0});var ug=i(Ke);Vs=r(ug,"SPAN",{});var hg=i(Vs);y(Jt.$$.fragment,hg),hg.forEach(o),ug.forEach(o),lc=p(Ci),Qs=r(Ci,"SPAN",{});var fg=i(Qs);dc=s(fg,"Usage: LayoutLMv2Processor"),fg.forEach(o),Ci.forEach(o),Sr=p(t),Q=r(t,"P",{});var we=i(Q);cc=s(we,"The easiest way to prepare data for the model is to use "),bn=r(we,"A",{href:!0});var gg=i(bn);pc=s(gg,"LayoutLMv2Processor"),gg.forEach(o),mc=s(we,`, which internally
combines a feature extractor (`),Ln=r(we,"A",{href:!0});var _g=i(Ln);uc=s(_g,"LayoutLMv2FeatureExtractor"),_g.forEach(o),hc=s(we,`) and a tokenizer
(`),wn=r(we,"A",{href:!0});var vg=i(wn);fc=s(vg,"LayoutLMv2Tokenizer"),vg.forEach(o),gc=s(we," or "),kn=r(we,"A",{href:!0});var yg=i(kn);_c=s(yg,"LayoutLMv2TokenizerFast"),yg.forEach(o),vc=s(we,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),we.forEach(o),Rr=p(t),y(eo.$$.fragment,t),Wr=p(t),z=r(t,"P",{});var F=i(z);yc=s(F,"In short, one can provide a document image (and possibly additional data) to "),xn=r(F,"A",{href:!0});var bg=i(xn);bc=s(bg,"LayoutLMv2Processor"),bg.forEach(o),Lc=s(F,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),Tn=r(F,"A",{href:!0});var Lg=i(Tn);wc=s(Lg,"LayoutLMv2FeatureExtractor"),Lg.forEach(o),kc=s(F,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Gs=r(F,"CODE",{});var wg=i(Gs);xc=s(wg,"image"),wg.forEach(o),Tc=s(F,` input. The words and
normalized bounding boxes are then provided to `),Mn=r(F,"A",{href:!0});var kg=i(Mn);Mc=s(kg,"LayoutLMv2Tokenizer"),kg.forEach(o),$c=s(F,` or
`),$n=r(F,"A",{href:!0});var xg=i($n);zc=s(xg,"LayoutLMv2TokenizerFast"),xg.forEach(o),Ec=s(F,", which converts them to token-level "),Hs=r(F,"CODE",{});var Tg=i(Hs);qc=s(Tg,"input_ids"),Tg.forEach(o),Pc=s(F,`,
`),Ks=r(F,"CODE",{});var Mg=i(Ks);jc=s(Mg,"attention_mask"),Mg.forEach(o),Fc=s(F,", "),Xs=r(F,"CODE",{});var $g=i(Xs);Ic=s($g,"token_type_ids"),$g.forEach(o),Cc=s(F,", "),Ys=r(F,"CODE",{});var zg=i(Ys);Dc=s(zg,"bbox"),zg.forEach(o),Oc=s(F,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Zs=r(F,"CODE",{});var Eg=i(Zs);Ac=s(Eg,"labels"),Eg.forEach(o),Nc=s(F,"."),F.forEach(o),Br=p(t),W=r(t,"P",{});var ue=i(W);zn=r(ue,"A",{href:!0});var qg=i(zn);Sc=s(qg,"LayoutLMv2Processor"),qg.forEach(o),Rc=s(ue," uses "),to=r(ue,"A",{href:!0,rel:!0});var Pg=i(to);Wc=s(Pg,"PyTesseract"),Pg.forEach(o),Bc=s(ue,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),En=r(ue,"A",{href:!0});var jg=i(En);Uc=s(jg,"LayoutLMv2FeatureExtractor"),jg.forEach(o),Vc=s(ue," with "),Js=r(ue,"CODE",{});var Fg=i(Js);Qc=s(Fg,"apply_ocr"),Fg.forEach(o),Gc=s(ue," set to "),ea=r(ue,"CODE",{});var Ig=i(ea);Hc=s(Ig,"False"),Ig.forEach(o),Kc=s(ue,"."),ue.forEach(o),Ur=p(t),qn=r(t,"P",{});var Cg=i(qn);Xc=s(Cg,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Cg.forEach(o),Vr=p(t),Pn=r(t,"P",{});var Dg=i(Pn);ta=r(Dg,"STRONG",{});var Og=i(ta);Yc=s(Og,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Og.forEach(o),Dg.forEach(o),Qr=p(t),jn=r(t,"P",{});var Ag=i(jn);Zc=s(Ag,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Ag.forEach(o),Gr=p(t),y(oo.$$.fragment,t),Hr=p(t),Fn=r(t,"P",{});var Ng=i(Fn);oa=r(Ng,"STRONG",{});var Sg=i(oa);Jc=s(Sg,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Sg.forEach(o),Ng.forEach(o),Kr=p(t),ve=r(t,"P",{});var ds=i(ve);ep=s(ds,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),na=r(ds,"CODE",{});var Rg=i(na);tp=s(Rg,"apply_ocr"),Rg.forEach(o),op=s(ds,` set to
`),sa=r(ds,"CODE",{});var Wg=i(sa);np=s(Wg,"False"),Wg.forEach(o),sp=s(ds,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),ds.forEach(o),Xr=p(t),y(no.$$.fragment,t),Yr=p(t),In=r(t,"P",{});var Bg=i(In);aa=r(Bg,"STRONG",{});var Ug=i(aa);ap=s(Ug,"Use case 3: token classification (training), apply_ocr=False"),Ug.forEach(o),Bg.forEach(o),Zr=p(t),G=r(t,"P",{});var ke=i(G);rp=s(ke,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),ra=r(ke,"CODE",{});var Vg=i(ra);ip=s(Vg,"labels"),Vg.forEach(o),lp=s(ke,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),ia=r(ke,"CODE",{});var Qg=i(ia);dp=s(Qg,"ignore_index"),Qg.forEach(o),cp=s(ke,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),la=r(ke,"CODE",{});var Gg=i(la);pp=s(Gg,"only_label_first_subword"),Gg.forEach(o),mp=s(ke," set to "),da=r(ke,"CODE",{});var Hg=i(da);up=s(Hg,"False"),Hg.forEach(o),hp=s(ke,"."),ke.forEach(o),Jr=p(t),y(so.$$.fragment,t),ei=p(t),Cn=r(t,"P",{});var Kg=i(Cn);ca=r(Kg,"STRONG",{});var Xg=i(ca);fp=s(Xg,"Use case 4: visual question answering (inference), apply_ocr=True"),Xg.forEach(o),Kg.forEach(o),ti=p(t),Dn=r(t,"P",{});var Yg=i(Dn);gp=s(Yg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Yg.forEach(o),oi=p(t),y(ao.$$.fragment,t),ni=p(t),On=r(t,"P",{});var Zg=i(On);pa=r(Zg,"STRONG",{});var Jg=i(pa);_p=s(Jg,"Use case 5: visual question answering (inference), apply_ocr=False"),Jg.forEach(o),Zg.forEach(o),si=p(t),An=r(t,"P",{});var e_=i(An);vp=s(e_,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),e_.forEach(o),ai=p(t),y(ro.$$.fragment,t),ri=p(t),Ee=r(t,"H2",{class:!0});var Di=i(Ee);Xe=r(Di,"A",{id:!0,class:!0,href:!0});var t_=i(Xe);ma=r(t_,"SPAN",{});var o_=i(ma);y(io.$$.fragment,o_),o_.forEach(o),t_.forEach(o),yp=p(Di),ua=r(Di,"SPAN",{});var n_=i(ua);bp=s(n_,"LayoutLMv2Config"),n_.forEach(o),Di.forEach(o),ii=p(t),Y=r(t,"DIV",{class:!0});var Lt=i(Y);y(lo.$$.fragment,Lt),Lp=p(Lt),qe=r(Lt,"P",{});var cs=i(qe);wp=s(cs,"This is the configuration class to store the configuration of a "),Nn=r(cs,"A",{href:!0});var s_=i(Nn);kp=s(s_,"LayoutLMv2Model"),s_.forEach(o),xp=s(cs,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),co=r(cs,"A",{href:!0,rel:!0});var a_=i(co);Tp=s(a_,"microsoft/layoutlmv2-base-uncased"),a_.forEach(o),Mp=s(cs," architecture."),cs.forEach(o),$p=p(Lt),Pe=r(Lt,"P",{});var ps=i(Pe);zp=s(ps,"Configuration objects inherit from "),Sn=r(ps,"A",{href:!0});var r_=i(Sn);Ep=s(r_,"PretrainedConfig"),r_.forEach(o),qp=s(ps,` and can be used to control the model outputs. Read the
documentation from `),Rn=r(ps,"A",{href:!0});var i_=i(Rn);Pp=s(i_,"PretrainedConfig"),i_.forEach(o),jp=s(ps," for more information."),ps.forEach(o),Fp=p(Lt),y(Ye.$$.fragment,Lt),Lt.forEach(o),li=p(t),je=r(t,"H2",{class:!0});var Oi=i(je);Ze=r(Oi,"A",{id:!0,class:!0,href:!0});var l_=i(Ze);ha=r(l_,"SPAN",{});var d_=i(ha);y(po.$$.fragment,d_),d_.forEach(o),l_.forEach(o),Ip=p(Oi),fa=r(Oi,"SPAN",{});var c_=i(fa);Cp=s(c_,"LayoutLMv2FeatureExtractor"),c_.forEach(o),Oi.forEach(o),di=p(t),de=r(t,"DIV",{class:!0});var ms=i(de);y(mo.$$.fragment,ms),Dp=p(ms),ga=r(ms,"P",{});var p_=i(ga);Op=s(p_,"Constructs a LayoutLMv2 image processor."),p_.forEach(o),Ap=p(ms),Je=r(ms,"DIV",{class:!0});var Ai=i(Je);y(uo.$$.fragment,Ai),Np=p(Ai),_a=r(Ai,"P",{});var m_=i(_a);Sp=s(m_,"Preprocess an image or a batch of images."),m_.forEach(o),Ai.forEach(o),ms.forEach(o),ci=p(t),Fe=r(t,"H2",{class:!0});var Ni=i(Fe);et=r(Ni,"A",{id:!0,class:!0,href:!0});var u_=i(et);va=r(u_,"SPAN",{});var h_=i(va);y(ho.$$.fragment,h_),h_.forEach(o),u_.forEach(o),Rp=p(Ni),ya=r(Ni,"SPAN",{});var f_=i(ya);Wp=s(f_,"LayoutLMv2ImageProcessor"),f_.forEach(o),Ni.forEach(o),pi=p(t),ce=r(t,"DIV",{class:!0});var us=i(ce);y(fo.$$.fragment,us),Bp=p(us),ba=r(us,"P",{});var g_=i(ba);Up=s(g_,"Constructs a LayoutLMv2 image processor."),g_.forEach(o),Vp=p(us),tt=r(us,"DIV",{class:!0});var Si=i(tt);y(go.$$.fragment,Si),Qp=p(Si),La=r(Si,"P",{});var __=i(La);Gp=s(__,"Preprocess an image or batch of images."),__.forEach(o),Si.forEach(o),us.forEach(o),mi=p(t),Ie=r(t,"H2",{class:!0});var Ri=i(Ie);ot=r(Ri,"A",{id:!0,class:!0,href:!0});var v_=i(ot);wa=r(v_,"SPAN",{});var y_=i(wa);y(_o.$$.fragment,y_),y_.forEach(o),v_.forEach(o),Hp=p(Ri),ka=r(Ri,"SPAN",{});var b_=i(ka);Kp=s(b_,"LayoutLMv2Tokenizer"),b_.forEach(o),Ri.forEach(o),ui=p(t),N=r(t,"DIV",{class:!0});var le=i(N);y(vo.$$.fragment,le),Xp=p(le),S=r(le,"P",{});var H=i(S);Yp=s(H,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Wn=r(H,"A",{href:!0});var L_=i(Wn);Zp=s(L_,"LayoutLMv2Tokenizer"),L_.forEach(o),Jp=s(H,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),xa=r(H,"CODE",{});var w_=i(xa);em=s(w_,"input_ids"),w_.forEach(o),tm=s(H,", "),Ta=r(H,"CODE",{});var k_=i(Ta);om=s(k_,"attention_mask"),k_.forEach(o),nm=s(H,", "),Ma=r(H,"CODE",{});var x_=i(Ma);sm=s(x_,"token_type_ids"),x_.forEach(o),am=s(H,", "),$a=r(H,"CODE",{});var T_=i($a);rm=s(T_,"bbox"),T_.forEach(o),im=s(H,`, and
optional `),za=r(H,"CODE",{});var M_=i(za);lm=s(M_,"labels"),M_.forEach(o),dm=s(H," (for token classification)."),H.forEach(o),cm=p(le),yo=r(le,"P",{});var Wi=i(yo);pm=s(Wi,"This tokenizer inherits from "),Bn=r(Wi,"A",{href:!0});var $_=i(Bn);mm=s($_,"PreTrainedTokenizer"),$_.forEach(o),um=s(Wi,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Wi.forEach(o),hm=p(le),Un=r(le,"P",{});var vf=i(Un);Vn=r(vf,"A",{href:!0});var z_=i(Vn);fm=s(z_,"LayoutLMv2Tokenizer"),z_.forEach(o),gm=s(vf,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),vf.forEach(o),_m=p(le),nt=r(le,"DIV",{class:!0});var Bi=i(nt);y(bo.$$.fragment,Bi),vm=p(Bi),Ea=r(Bi,"P",{});var E_=i(Ea);ym=s(E_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),E_.forEach(o),Bi.forEach(o),bm=p(le),Qn=r(le,"DIV",{class:!0});var q_=i(Qn);y(Lo.$$.fragment,q_),q_.forEach(o),le.forEach(o),hi=p(t),Ce=r(t,"H2",{class:!0});var Ui=i(Ce);st=r(Ui,"A",{id:!0,class:!0,href:!0});var P_=i(st);qa=r(P_,"SPAN",{});var j_=i(qa);y(wo.$$.fragment,j_),j_.forEach(o),P_.forEach(o),Lm=p(Ui),Pa=r(Ui,"SPAN",{});var F_=i(Pa);wm=s(F_,"LayoutLMv2TokenizerFast"),F_.forEach(o),Ui.forEach(o),fi=p(t),Z=r(t,"DIV",{class:!0});var wt=i(Z);y(ko.$$.fragment,wt),km=p(wt),xo=r(wt,"P",{});var Vi=i(xo);xm=s(Vi,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),ja=r(Vi,"EM",{});var I_=i(ja);Tm=s(I_,"tokenizers"),I_.forEach(o),Mm=s(Vi," library). Based on WordPiece."),Vi.forEach(o),$m=p(wt),To=r(wt,"P",{});var Qi=i(To);zm=s(Qi,"This tokenizer inherits from "),Gn=r(Qi,"A",{href:!0});var C_=i(Gn);Em=s(C_,"PreTrainedTokenizerFast"),C_.forEach(o),qm=s(Qi,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Qi.forEach(o),Pm=p(wt),at=r(wt,"DIV",{class:!0});var Gi=i(at);y(Mo.$$.fragment,Gi),jm=p(Gi),Fa=r(Gi,"P",{});var D_=i(Fa);Fm=s(D_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),D_.forEach(o),Gi.forEach(o),wt.forEach(o),gi=p(t),De=r(t,"H2",{class:!0});var Hi=i(De);rt=r(Hi,"A",{id:!0,class:!0,href:!0});var O_=i(rt);Ia=r(O_,"SPAN",{});var A_=i(Ia);y($o.$$.fragment,A_),A_.forEach(o),O_.forEach(o),Im=p(Hi),Ca=r(Hi,"SPAN",{});var N_=i(Ca);Cm=s(N_,"LayoutLMv2Processor"),N_.forEach(o),Hi.forEach(o),_i=p(t),B=r(t,"DIV",{class:!0});var xe=i(B);y(zo.$$.fragment,xe),Dm=p(xe),Da=r(xe,"P",{});var S_=i(Da);Om=s(S_,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),S_.forEach(o),Am=p(xe),Hn=r(xe,"P",{});var yf=i(Hn);Kn=r(yf,"A",{href:!0});var R_=i(Kn);Nm=s(R_,"LayoutLMv2Processor"),R_.forEach(o),Sm=s(yf," offers all the functionalities you need to prepare data for the model."),yf.forEach(o),Rm=p(xe),P=r(xe,"P",{});var I=i(P);Wm=s(I,"It first uses "),Xn=r(I,"A",{href:!0});var W_=i(Xn);Bm=s(W_,"LayoutLMv2FeatureExtractor"),W_.forEach(o),Um=s(I,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Yn=r(I,"A",{href:!0});var B_=i(Yn);Vm=s(B_,"LayoutLMv2Tokenizer"),B_.forEach(o),Qm=s(I,` or
`),Zn=r(I,"A",{href:!0});var U_=i(Zn);Gm=s(U_,"LayoutLMv2TokenizerFast"),U_.forEach(o),Hm=s(I,", which turns the words and bounding boxes into token-level "),Oa=r(I,"CODE",{});var V_=i(Oa);Km=s(V_,"input_ids"),V_.forEach(o),Xm=s(I,`,
`),Aa=r(I,"CODE",{});var Q_=i(Aa);Ym=s(Q_,"attention_mask"),Q_.forEach(o),Zm=s(I,", "),Na=r(I,"CODE",{});var G_=i(Na);Jm=s(G_,"token_type_ids"),G_.forEach(o),eu=s(I,", "),Sa=r(I,"CODE",{});var H_=i(Sa);tu=s(H_,"bbox"),H_.forEach(o),ou=s(I,". Optionally, one can provide integer "),Ra=r(I,"CODE",{});var K_=i(Ra);nu=s(K_,"word_labels"),K_.forEach(o),su=s(I,`, which are turned
into token-level `),Wa=r(I,"CODE",{});var X_=i(Wa);au=s(X_,"labels"),X_.forEach(o),ru=s(I," for token classification tasks (such as FUNSD, CORD)."),I.forEach(o),iu=p(xe),ye=r(xe,"DIV",{class:!0});var hs=i(ye);y(Eo.$$.fragment,hs),lu=p(hs),$=r(hs,"P",{});var q=i($);du=s(q,"This method first forwards the "),Ba=r(q,"CODE",{});var Y_=i(Ba);cu=s(Y_,"images"),Y_.forEach(o),pu=s(q," argument to "),qo=r(q,"A",{href:!0});var bf=i(qo);Ua=r(bf,"STRONG",{});var Z_=i(Ua);mu=s(Z_,"call"),Z_.forEach(o),uu=s(bf,"()"),bf.forEach(o),hu=s(q,`. In case
`),Jn=r(q,"A",{href:!0});var J_=i(Jn);fu=s(J_,"LayoutLMv2FeatureExtractor"),J_.forEach(o),gu=s(q," was initialized with "),Va=r(q,"CODE",{});var ev=i(Va);_u=s(ev,"apply_ocr"),ev.forEach(o),vu=s(q," set to "),Qa=r(q,"CODE",{});var tv=i(Qa);yu=s(tv,"True"),tv.forEach(o),bu=s(q,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Po=r(q,"A",{href:!0});var Lf=i(Po);Ga=r(Lf,"STRONG",{});var ov=i(Ga);Lu=s(ov,"call"),ov.forEach(o),wu=s(Lf,"()"),Lf.forEach(o),ku=s(q,` and returns the output,
together with resized `),Ha=r(q,"CODE",{});var nv=i(Ha);xu=s(nv,"images"),nv.forEach(o),Tu=s(q,". In case "),es=r(q,"A",{href:!0});var sv=i(es);Mu=s(sv,"LayoutLMv2FeatureExtractor"),sv.forEach(o),$u=s(q," was initialized with "),Ka=r(q,"CODE",{});var av=i(Ka);zu=s(av,"apply_ocr"),av.forEach(o),Eu=s(q,` set to
`),Xa=r(q,"CODE",{});var rv=i(Xa);qu=s(rv,"False"),rv.forEach(o),Pu=s(q,", it passes the words ("),Ya=r(q,"CODE",{});var iv=i(Ya);ju=s(iv,"text"),iv.forEach(o),Fu=s(q,"/"),Za=r(q,"CODE",{});var lv=i(Za);Iu=s(lv,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),lv.forEach(o),Cu=s(q,"."),q.forEach(o),Du=p(hs),Ja=r(hs,"P",{});var dv=i(Ja);Ou=s(dv,"Please refer to the docstring of the above two methods for more information."),dv.forEach(o),hs.forEach(o),xe.forEach(o),vi=p(t),Oe=r(t,"H2",{class:!0});var Ki=i(Oe);it=r(Ki,"A",{id:!0,class:!0,href:!0});var cv=i(it);er=r(cv,"SPAN",{});var pv=i(er);y(jo.$$.fragment,pv),pv.forEach(o),cv.forEach(o),Au=p(Ki),tr=r(Ki,"SPAN",{});var mv=i(tr);Nu=s(mv,"LayoutLMv2Model"),mv.forEach(o),Ki.forEach(o),yi=p(t),pe=r(t,"DIV",{class:!0});var fs=i(pe);y(Fo.$$.fragment,fs),Su=p(fs),Io=r(fs,"P",{});var Xi=i(Io);Ru=s(Xi,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Co=r(Xi,"A",{href:!0,rel:!0});var uv=i(Co);Wu=s(uv,"torch.nn.Module"),uv.forEach(o),Bu=s(Xi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xi.forEach(o),Uu=p(fs),ae=r(fs,"DIV",{class:!0});var kt=i(ae);y(Do.$$.fragment,kt),Vu=p(kt),Ae=r(kt,"P",{});var gs=i(Ae);Qu=s(gs,"The "),ts=r(gs,"A",{href:!0});var hv=i(ts);Gu=s(hv,"LayoutLMv2Model"),hv.forEach(o),Hu=s(gs," forward method, overrides the "),or=r(gs,"CODE",{});var fv=i(or);Ku=s(fv,"__call__"),fv.forEach(o),Xu=s(gs," special method."),gs.forEach(o),Yu=p(kt),y(lt.$$.fragment,kt),Zu=p(kt),y(dt.$$.fragment,kt),kt.forEach(o),fs.forEach(o),bi=p(t),Ne=r(t,"H2",{class:!0});var Yi=i(Ne);ct=r(Yi,"A",{id:!0,class:!0,href:!0});var gv=i(ct);nr=r(gv,"SPAN",{});var _v=i(nr);y(Oo.$$.fragment,_v),_v.forEach(o),gv.forEach(o),Ju=p(Yi),sr=r(Yi,"SPAN",{});var vv=i(sr);eh=s(vv,"LayoutLMv2ForSequenceClassification"),vv.forEach(o),Yi.forEach(o),Li=p(t),J=r(t,"DIV",{class:!0});var xt=i(J);y(Ao.$$.fragment,xt),th=p(xt),No=r(xt,"P",{});var Zi=i(No);oh=s(Zi,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),So=r(Zi,"A",{href:!0,rel:!0});var yv=i(So);nh=s(yv,"RVL-CDIP"),yv.forEach(o),sh=s(Zi," dataset."),Zi.forEach(o),ah=p(xt),Ro=r(xt,"P",{});var Ji=i(Ro);rh=s(Ji,"This model is a PyTorch "),Wo=r(Ji,"A",{href:!0,rel:!0});var bv=i(Wo);ih=s(bv,"torch.nn.Module"),bv.forEach(o),lh=s(Ji,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ji.forEach(o),dh=p(xt),re=r(xt,"DIV",{class:!0});var Tt=i(re);y(Bo.$$.fragment,Tt),ch=p(Tt),Se=r(Tt,"P",{});var _s=i(Se);ph=s(_s,"The "),os=r(_s,"A",{href:!0});var Lv=i(os);mh=s(Lv,"LayoutLMv2ForSequenceClassification"),Lv.forEach(o),uh=s(_s," forward method, overrides the "),ar=r(_s,"CODE",{});var wv=i(ar);hh=s(wv,"__call__"),wv.forEach(o),fh=s(_s," special method."),_s.forEach(o),gh=p(Tt),y(pt.$$.fragment,Tt),_h=p(Tt),y(mt.$$.fragment,Tt),Tt.forEach(o),xt.forEach(o),wi=p(t),Re=r(t,"H2",{class:!0});var el=i(Re);ut=r(el,"A",{id:!0,class:!0,href:!0});var kv=i(ut);rr=r(kv,"SPAN",{});var xv=i(rr);y(Uo.$$.fragment,xv),xv.forEach(o),kv.forEach(o),vh=p(el),ir=r(el,"SPAN",{});var Tv=i(ir);yh=s(Tv,"LayoutLMv2ForTokenClassification"),Tv.forEach(o),el.forEach(o),ki=p(t),ee=r(t,"DIV",{class:!0});var Mt=i(ee);y(Vo.$$.fragment,Mt),bh=p(Mt),te=r(Mt,"P",{});var Te=i(te);Lh=s(Te,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Qo=r(Te,"A",{href:!0,rel:!0});var Mv=i(Qo);wh=s(Mv,"FUNSD"),Mv.forEach(o),kh=s(Te,", "),Go=r(Te,"A",{href:!0,rel:!0});var $v=i(Go);xh=s($v,"SROIE"),$v.forEach(o),Th=s(Te,`,
`),Ho=r(Te,"A",{href:!0,rel:!0});var zv=i(Ho);Mh=s(zv,"CORD"),zv.forEach(o),$h=s(Te," and "),Ko=r(Te,"A",{href:!0,rel:!0});var Ev=i(Ko);zh=s(Ev,"Kleister-NDA"),Ev.forEach(o),Eh=s(Te,"."),Te.forEach(o),qh=p(Mt),Xo=r(Mt,"P",{});var tl=i(Xo);Ph=s(tl,"This model is a PyTorch "),Yo=r(tl,"A",{href:!0,rel:!0});var qv=i(Yo);jh=s(qv,"torch.nn.Module"),qv.forEach(o),Fh=s(tl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tl.forEach(o),Ih=p(Mt),ie=r(Mt,"DIV",{class:!0});var $t=i(ie);y(Zo.$$.fragment,$t),Ch=p($t),We=r($t,"P",{});var vs=i(We);Dh=s(vs,"The "),ns=r(vs,"A",{href:!0});var Pv=i(ns);Oh=s(Pv,"LayoutLMv2ForTokenClassification"),Pv.forEach(o),Ah=s(vs," forward method, overrides the "),lr=r(vs,"CODE",{});var jv=i(lr);Nh=s(jv,"__call__"),jv.forEach(o),Sh=s(vs," special method."),vs.forEach(o),Rh=p($t),y(ht.$$.fragment,$t),Wh=p($t),y(ft.$$.fragment,$t),$t.forEach(o),Mt.forEach(o),xi=p(t),Be=r(t,"H2",{class:!0});var ol=i(Be);gt=r(ol,"A",{id:!0,class:!0,href:!0});var Fv=i(gt);dr=r(Fv,"SPAN",{});var Iv=i(dr);y(Jo.$$.fragment,Iv),Iv.forEach(o),Fv.forEach(o),Bh=p(ol),cr=r(ol,"SPAN",{});var Cv=i(cr);Uh=s(Cv,"LayoutLMv2ForQuestionAnswering"),Cv.forEach(o),ol.forEach(o),Ti=p(t),oe=r(t,"DIV",{class:!0});var zt=i(oe);y(en.$$.fragment,zt),Vh=p(zt),me=r(zt,"P",{});var Et=i(me);Qh=s(Et,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),tn=r(Et,"A",{href:!0,rel:!0});var Dv=i(tn);Gh=s(Dv,"DocVQA"),Dv.forEach(o),Hh=s(Et,` (a linear layer on top of the text part of the hidden-states output to
compute `),pr=r(Et,"CODE",{});var Ov=i(pr);Kh=s(Ov,"span start logits"),Ov.forEach(o),Xh=s(Et," and "),mr=r(Et,"CODE",{});var Av=i(mr);Yh=s(Av,"span end logits"),Av.forEach(o),Zh=s(Et,")."),Et.forEach(o),Jh=p(zt),on=r(zt,"P",{});var nl=i(on);ef=s(nl,"This model is a PyTorch "),nn=r(nl,"A",{href:!0,rel:!0});var Nv=i(nn);tf=s(Nv,"torch.nn.Module"),Nv.forEach(o),of=s(nl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nl.forEach(o),nf=p(zt),O=r(zt,"DIV",{class:!0});var K=i(O);y(sn.$$.fragment,K),sf=p(K),Ue=r(K,"P",{});var ys=i(Ue);af=s(ys,"The "),ss=r(ys,"A",{href:!0});var Sv=i(ss);rf=s(Sv,"LayoutLMv2ForQuestionAnswering"),Sv.forEach(o),lf=s(ys," forward method, overrides the "),ur=r(ys,"CODE",{});var Rv=i(ur);df=s(Rv,"__call__"),Rv.forEach(o),cf=s(ys," special method."),ys.forEach(o),pf=p(K),y(_t.$$.fragment,K),mf=p(K),hr=r(K,"P",{});var Wv=i(hr);uf=s(Wv,"Example:"),Wv.forEach(o),hf=p(K),fr=r(K,"P",{});var Bv=i(fr);ff=s(Bv,`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),Bv.forEach(o),gf=p(K),y(vt.$$.fragment,K),_f=p(K),y(yt.$$.fragment,K),K.forEach(o),zt.forEach(o),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(ry)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(f,"class","relative group"),l(Qe,"id","overview"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#overview"),l(Me,"class","relative group"),l(Pt,"href","https://arxiv.org/abs/2012.14740"),l(Pt,"rel","nofollow"),l(ln,"href","layoutlm"),l(jt,"href","https://guillaumejaume.github.io/FUNSD/"),l(jt,"rel","nofollow"),l(Ft,"href","https://github.com/clovaai/cord"),l(Ft,"rel","nofollow"),l(It,"href","https://rrc.cvc.uab.es/?ch=13"),l(It,"rel","nofollow"),l(Ct,"href","https://github.com/applicaai/kleister-nda"),l(Ct,"rel","nofollow"),l(Ot,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Ot,"rel","nofollow"),l(Nt,"href","https://arxiv.org/abs/2007.00398"),l(Nt,"rel","nofollow"),l(Wt,"href","https://arxiv.org/abs/2012.14740"),l(Wt,"rel","nofollow"),l(Ut,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(Ut,"rel","nofollow"),l(Vt,"href","https://github.com/facebookresearch/detectron2/"),l(Vt,"rel","nofollow"),l(Qt,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Qt,"rel","nofollow"),l(un,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(hn,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Gt,"href","https://github.com/tesseract-ocr/tesseract"),l(Gt,"rel","nofollow"),l(Ht,"href","https://pypi.org/project/pytesseract/"),l(Ht,"rel","nofollow"),l(fn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(gn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(_n,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(vn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(yn,"href","layoutxlm"),l(Ke,"id","usage-layoutlmv2processor"),l(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ke,"href","#usage-layoutlmv2processor"),l(ze,"class","relative group"),l(bn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Ln,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor"),l(wn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(kn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(xn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Tn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor"),l(Mn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l($n,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(zn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(to,"href","https://pypi.org/project/pytesseract/"),l(to,"rel","nofollow"),l(En,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor"),l(Xe,"id","transformers.LayoutLMv2Config"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.LayoutLMv2Config"),l(Ee,"class","relative group"),l(Nn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(co,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(co,"rel","nofollow"),l(Sn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Rn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ze,"id","transformers.LayoutLMv2ImageProcessor"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#transformers.LayoutLMv2ImageProcessor"),l(je,"class","relative group"),l(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(et,"id","transformers.LayoutLMv2ImageProcessor"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.LayoutLMv2ImageProcessor"),l(Fe,"class","relative group"),l(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ot,"id","transformers.LayoutLMv2Tokenizer"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.LayoutLMv2Tokenizer"),l(Ie,"class","relative group"),l(Wn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Bn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Vn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(st,"id","transformers.LayoutLMv2TokenizerFast"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.LayoutLMv2TokenizerFast"),l(Ce,"class","relative group"),l(Gn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(rt,"id","transformers.LayoutLMv2Processor"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.LayoutLMv2Processor"),l(De,"class","relative group"),l(Kn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Xn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor"),l(Yn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Zn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(qo,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__"),l(Jn,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor"),l(Po,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(es,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor"),l(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(it,"id","transformers.LayoutLMv2Model"),l(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(it,"href","#transformers.LayoutLMv2Model"),l(Oe,"class","relative group"),l(Co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Co,"rel","nofollow"),l(ts,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ct,"id","transformers.LayoutLMv2ForSequenceClassification"),l(ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ct,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(Ne,"class","relative group"),l(So,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(So,"rel","nofollow"),l(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Wo,"rel","nofollow"),l(os,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ut,"id","transformers.LayoutLMv2ForTokenClassification"),l(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ut,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Re,"class","relative group"),l(Qo,"href","https://guillaumejaume.github.io/FUNSD/"),l(Qo,"rel","nofollow"),l(Go,"href","https://rrc.cvc.uab.es/?ch=13"),l(Go,"rel","nofollow"),l(Ho,"href","https://github.com/clovaai/cord"),l(Ho,"rel","nofollow"),l(Ko,"href","https://github.com/applicaai/kleister-nda"),l(Ko,"rel","nofollow"),l(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Yo,"rel","nofollow"),l(ns,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(gt,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(gt,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Be,"class","relative group"),l(tn,"href","https://rrc.cvc.uab.es/?ch=17"),l(tn,"rel","nofollow"),l(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(nn,"rel","nofollow"),l(ss,"href","/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,h),m(t,x,d),m(t,f,d),e(f,g),e(g,T),b(u,T,null),e(f,_),e(f,A),e(A,al),m(t,kr,d),m(t,Me,d),e(Me,Qe),e(Qe,ws),b(qt,ws,null),e(Me,rl),e(Me,ks),e(ks,il),m(t,xr,d),m(t,he,d),e(he,ll),e(he,Pt),e(Pt,dl),e(he,cl),e(he,ln),e(ln,pl),e(he,ml),m(t,Tr,d),m(t,fe,d),e(fe,X),e(X,ul),e(X,jt),e(jt,hl),e(X,fl),e(X,Ft),e(Ft,gl),e(X,_l),e(X,It),e(It,vl),e(X,yl),e(X,Ct),e(Ct,bl),e(X,Ll),e(fe,wl),e(fe,Dt),e(Dt,kl),e(Dt,Ot),e(Ot,xl),e(Dt,Tl),e(fe,Ml),e(fe,At),e(At,$l),e(At,Nt),e(Nt,zl),e(At,El),m(t,Mr,d),m(t,dn,d),e(dn,ql),m(t,$r,d),m(t,cn,d),e(cn,xs),e(xs,Pl),m(t,zr,d),m(t,se,d),e(se,jl),e(se,Ts),e(Ts,Fl),e(se,Il),e(se,Ms),e(Ms,Cl),e(se,Dl),e(se,$s),e($s,Ol),e(se,Al),m(t,Er,d),b(St,t,d),m(t,qr,d),m(t,pn,d),e(pn,Nl),m(t,Pr,d),m(t,mn,d),e(mn,Sl),m(t,jr,d),m(t,V,d),e(V,zs),e(zs,Rl),e(V,Wl),e(V,Rt),e(Rt,Bl),e(Rt,Wt),e(Wt,Ul),e(Rt,Vl),e(V,Ql),e(V,Bt),e(Bt,Gl),e(Bt,Ut),e(Ut,Hl),e(Bt,Kl),e(V,Xl),e(V,$e),e($e,Yl),e($e,Vt),e(Vt,Zl),e($e,Jl),e($e,Qt),e(Qt,ed),e($e,td),e(V,od),e(V,M),e(M,nd),e(M,Es),e(Es,sd),e(M,ad),e(M,un),e(un,rd),e(M,id),e(M,qs),e(qs,ld),e(M,dd),e(M,Ps),e(Ps,cd),e(M,pd),e(M,js),e(js,md),e(M,ud),e(M,Fs),e(Fs,hd),e(M,fd),e(M,Is),e(Is,gd),e(M,_d),e(M,Cs),e(Cs,vd),e(M,yd),e(M,Ds),e(Ds,bd),e(M,Ld),e(M,hn),e(hn,wd),e(M,kd),e(M,Gt),e(Gt,xd),e(M,Td),e(M,Ht),e(Ht,Md),e(M,$d),m(t,Fr,d),b(Kt,t,d),m(t,Ir,d),m(t,ge,d),e(ge,zd),e(ge,Os),e(Os,Ed),e(ge,qd),e(ge,As),e(As,Pd),e(ge,jd),m(t,Cr,d),b(Xt,t,d),m(t,Dr,d),m(t,Ge,d),e(Ge,Fd),e(Ge,fn),e(fn,Id),e(Ge,Cd),m(t,Or,d),m(t,_e,d),e(_e,D),e(D,Dd),e(D,gn),e(gn,Od),e(D,Ad),e(D,Ns),e(Ns,Nd),e(D,Sd),e(D,Ss),e(Ss,Rd),e(D,Wd),e(D,_n),e(_n,Bd),e(D,Ud),e(D,Rs),e(Rs,Vd),e(D,Qd),e(D,Ws),e(Ws,Gd),e(D,Hd),e(D,Bs),e(Bs,Kd),e(D,Xd),e(_e,Yd),e(_e,Yt),e(Yt,Zd),e(Yt,vn),e(vn,Jd),e(Yt,ec),e(_e,tc),e(_e,Zt),e(Zt,oc),e(Zt,Us),e(Us,nc),e(Zt,sc),m(t,Ar,d),m(t,He,d),e(He,ac),e(He,yn),e(yn,rc),e(He,ic),m(t,Nr,d),m(t,ze,d),e(ze,Ke),e(Ke,Vs),b(Jt,Vs,null),e(ze,lc),e(ze,Qs),e(Qs,dc),m(t,Sr,d),m(t,Q,d),e(Q,cc),e(Q,bn),e(bn,pc),e(Q,mc),e(Q,Ln),e(Ln,uc),e(Q,hc),e(Q,wn),e(wn,fc),e(Q,gc),e(Q,kn),e(kn,_c),e(Q,vc),m(t,Rr,d),b(eo,t,d),m(t,Wr,d),m(t,z,d),e(z,yc),e(z,xn),e(xn,bc),e(z,Lc),e(z,Tn),e(Tn,wc),e(z,kc),e(z,Gs),e(Gs,xc),e(z,Tc),e(z,Mn),e(Mn,Mc),e(z,$c),e(z,$n),e($n,zc),e(z,Ec),e(z,Hs),e(Hs,qc),e(z,Pc),e(z,Ks),e(Ks,jc),e(z,Fc),e(z,Xs),e(Xs,Ic),e(z,Cc),e(z,Ys),e(Ys,Dc),e(z,Oc),e(z,Zs),e(Zs,Ac),e(z,Nc),m(t,Br,d),m(t,W,d),e(W,zn),e(zn,Sc),e(W,Rc),e(W,to),e(to,Wc),e(W,Bc),e(W,En),e(En,Uc),e(W,Vc),e(W,Js),e(Js,Qc),e(W,Gc),e(W,ea),e(ea,Hc),e(W,Kc),m(t,Ur,d),m(t,qn,d),e(qn,Xc),m(t,Vr,d),m(t,Pn,d),e(Pn,ta),e(ta,Yc),m(t,Qr,d),m(t,jn,d),e(jn,Zc),m(t,Gr,d),b(oo,t,d),m(t,Hr,d),m(t,Fn,d),e(Fn,oa),e(oa,Jc),m(t,Kr,d),m(t,ve,d),e(ve,ep),e(ve,na),e(na,tp),e(ve,op),e(ve,sa),e(sa,np),e(ve,sp),m(t,Xr,d),b(no,t,d),m(t,Yr,d),m(t,In,d),e(In,aa),e(aa,ap),m(t,Zr,d),m(t,G,d),e(G,rp),e(G,ra),e(ra,ip),e(G,lp),e(G,ia),e(ia,dp),e(G,cp),e(G,la),e(la,pp),e(G,mp),e(G,da),e(da,up),e(G,hp),m(t,Jr,d),b(so,t,d),m(t,ei,d),m(t,Cn,d),e(Cn,ca),e(ca,fp),m(t,ti,d),m(t,Dn,d),e(Dn,gp),m(t,oi,d),b(ao,t,d),m(t,ni,d),m(t,On,d),e(On,pa),e(pa,_p),m(t,si,d),m(t,An,d),e(An,vp),m(t,ai,d),b(ro,t,d),m(t,ri,d),m(t,Ee,d),e(Ee,Xe),e(Xe,ma),b(io,ma,null),e(Ee,yp),e(Ee,ua),e(ua,bp),m(t,ii,d),m(t,Y,d),b(lo,Y,null),e(Y,Lp),e(Y,qe),e(qe,wp),e(qe,Nn),e(Nn,kp),e(qe,xp),e(qe,co),e(co,Tp),e(qe,Mp),e(Y,$p),e(Y,Pe),e(Pe,zp),e(Pe,Sn),e(Sn,Ep),e(Pe,qp),e(Pe,Rn),e(Rn,Pp),e(Pe,jp),e(Y,Fp),b(Ye,Y,null),m(t,li,d),m(t,je,d),e(je,Ze),e(Ze,ha),b(po,ha,null),e(je,Ip),e(je,fa),e(fa,Cp),m(t,di,d),m(t,de,d),b(mo,de,null),e(de,Dp),e(de,ga),e(ga,Op),e(de,Ap),e(de,Je),b(uo,Je,null),e(Je,Np),e(Je,_a),e(_a,Sp),m(t,ci,d),m(t,Fe,d),e(Fe,et),e(et,va),b(ho,va,null),e(Fe,Rp),e(Fe,ya),e(ya,Wp),m(t,pi,d),m(t,ce,d),b(fo,ce,null),e(ce,Bp),e(ce,ba),e(ba,Up),e(ce,Vp),e(ce,tt),b(go,tt,null),e(tt,Qp),e(tt,La),e(La,Gp),m(t,mi,d),m(t,Ie,d),e(Ie,ot),e(ot,wa),b(_o,wa,null),e(Ie,Hp),e(Ie,ka),e(ka,Kp),m(t,ui,d),m(t,N,d),b(vo,N,null),e(N,Xp),e(N,S),e(S,Yp),e(S,Wn),e(Wn,Zp),e(S,Jp),e(S,xa),e(xa,em),e(S,tm),e(S,Ta),e(Ta,om),e(S,nm),e(S,Ma),e(Ma,sm),e(S,am),e(S,$a),e($a,rm),e(S,im),e(S,za),e(za,lm),e(S,dm),e(N,cm),e(N,yo),e(yo,pm),e(yo,Bn),e(Bn,mm),e(yo,um),e(N,hm),e(N,Un),e(Un,Vn),e(Vn,fm),e(Un,gm),e(N,_m),e(N,nt),b(bo,nt,null),e(nt,vm),e(nt,Ea),e(Ea,ym),e(N,bm),e(N,Qn),b(Lo,Qn,null),m(t,hi,d),m(t,Ce,d),e(Ce,st),e(st,qa),b(wo,qa,null),e(Ce,Lm),e(Ce,Pa),e(Pa,wm),m(t,fi,d),m(t,Z,d),b(ko,Z,null),e(Z,km),e(Z,xo),e(xo,xm),e(xo,ja),e(ja,Tm),e(xo,Mm),e(Z,$m),e(Z,To),e(To,zm),e(To,Gn),e(Gn,Em),e(To,qm),e(Z,Pm),e(Z,at),b(Mo,at,null),e(at,jm),e(at,Fa),e(Fa,Fm),m(t,gi,d),m(t,De,d),e(De,rt),e(rt,Ia),b($o,Ia,null),e(De,Im),e(De,Ca),e(Ca,Cm),m(t,_i,d),m(t,B,d),b(zo,B,null),e(B,Dm),e(B,Da),e(Da,Om),e(B,Am),e(B,Hn),e(Hn,Kn),e(Kn,Nm),e(Hn,Sm),e(B,Rm),e(B,P),e(P,Wm),e(P,Xn),e(Xn,Bm),e(P,Um),e(P,Yn),e(Yn,Vm),e(P,Qm),e(P,Zn),e(Zn,Gm),e(P,Hm),e(P,Oa),e(Oa,Km),e(P,Xm),e(P,Aa),e(Aa,Ym),e(P,Zm),e(P,Na),e(Na,Jm),e(P,eu),e(P,Sa),e(Sa,tu),e(P,ou),e(P,Ra),e(Ra,nu),e(P,su),e(P,Wa),e(Wa,au),e(P,ru),e(B,iu),e(B,ye),b(Eo,ye,null),e(ye,lu),e(ye,$),e($,du),e($,Ba),e(Ba,cu),e($,pu),e($,qo),e(qo,Ua),e(Ua,mu),e(qo,uu),e($,hu),e($,Jn),e(Jn,fu),e($,gu),e($,Va),e(Va,_u),e($,vu),e($,Qa),e(Qa,yu),e($,bu),e($,Po),e(Po,Ga),e(Ga,Lu),e(Po,wu),e($,ku),e($,Ha),e(Ha,xu),e($,Tu),e($,es),e(es,Mu),e($,$u),e($,Ka),e(Ka,zu),e($,Eu),e($,Xa),e(Xa,qu),e($,Pu),e($,Ya),e(Ya,ju),e($,Fu),e($,Za),e(Za,Iu),e($,Cu),e(ye,Du),e(ye,Ja),e(Ja,Ou),m(t,vi,d),m(t,Oe,d),e(Oe,it),e(it,er),b(jo,er,null),e(Oe,Au),e(Oe,tr),e(tr,Nu),m(t,yi,d),m(t,pe,d),b(Fo,pe,null),e(pe,Su),e(pe,Io),e(Io,Ru),e(Io,Co),e(Co,Wu),e(Io,Bu),e(pe,Uu),e(pe,ae),b(Do,ae,null),e(ae,Vu),e(ae,Ae),e(Ae,Qu),e(Ae,ts),e(ts,Gu),e(Ae,Hu),e(Ae,or),e(or,Ku),e(Ae,Xu),e(ae,Yu),b(lt,ae,null),e(ae,Zu),b(dt,ae,null),m(t,bi,d),m(t,Ne,d),e(Ne,ct),e(ct,nr),b(Oo,nr,null),e(Ne,Ju),e(Ne,sr),e(sr,eh),m(t,Li,d),m(t,J,d),b(Ao,J,null),e(J,th),e(J,No),e(No,oh),e(No,So),e(So,nh),e(No,sh),e(J,ah),e(J,Ro),e(Ro,rh),e(Ro,Wo),e(Wo,ih),e(Ro,lh),e(J,dh),e(J,re),b(Bo,re,null),e(re,ch),e(re,Se),e(Se,ph),e(Se,os),e(os,mh),e(Se,uh),e(Se,ar),e(ar,hh),e(Se,fh),e(re,gh),b(pt,re,null),e(re,_h),b(mt,re,null),m(t,wi,d),m(t,Re,d),e(Re,ut),e(ut,rr),b(Uo,rr,null),e(Re,vh),e(Re,ir),e(ir,yh),m(t,ki,d),m(t,ee,d),b(Vo,ee,null),e(ee,bh),e(ee,te),e(te,Lh),e(te,Qo),e(Qo,wh),e(te,kh),e(te,Go),e(Go,xh),e(te,Th),e(te,Ho),e(Ho,Mh),e(te,$h),e(te,Ko),e(Ko,zh),e(te,Eh),e(ee,qh),e(ee,Xo),e(Xo,Ph),e(Xo,Yo),e(Yo,jh),e(Xo,Fh),e(ee,Ih),e(ee,ie),b(Zo,ie,null),e(ie,Ch),e(ie,We),e(We,Dh),e(We,ns),e(ns,Oh),e(We,Ah),e(We,lr),e(lr,Nh),e(We,Sh),e(ie,Rh),b(ht,ie,null),e(ie,Wh),b(ft,ie,null),m(t,xi,d),m(t,Be,d),e(Be,gt),e(gt,dr),b(Jo,dr,null),e(Be,Bh),e(Be,cr),e(cr,Uh),m(t,Ti,d),m(t,oe,d),b(en,oe,null),e(oe,Vh),e(oe,me),e(me,Qh),e(me,tn),e(tn,Gh),e(me,Hh),e(me,pr),e(pr,Kh),e(me,Xh),e(me,mr),e(mr,Yh),e(me,Zh),e(oe,Jh),e(oe,on),e(on,ef),e(on,nn),e(nn,tf),e(on,of),e(oe,nf),e(oe,O),b(sn,O,null),e(O,sf),e(O,Ue),e(Ue,af),e(Ue,ss),e(ss,rf),e(Ue,lf),e(Ue,ur),e(ur,df),e(Ue,cf),e(O,pf),b(_t,O,null),e(O,mf),e(O,hr),e(hr,uf),e(O,hf),e(O,fr),e(fr,ff),e(O,gf),b(vt,O,null),e(O,_f),b(yt,O,null),Mi=!0},p(t,[d]){const an={};d&2&&(an.$$scope={dirty:d,ctx:t}),Ye.$set(an);const gr={};d&2&&(gr.$$scope={dirty:d,ctx:t}),lt.$set(gr);const _r={};d&2&&(_r.$$scope={dirty:d,ctx:t}),dt.$set(_r);const vr={};d&2&&(vr.$$scope={dirty:d,ctx:t}),pt.$set(vr);const rn={};d&2&&(rn.$$scope={dirty:d,ctx:t}),mt.$set(rn);const yr={};d&2&&(yr.$$scope={dirty:d,ctx:t}),ht.$set(yr);const br={};d&2&&(br.$$scope={dirty:d,ctx:t}),ft.$set(br);const Lr={};d&2&&(Lr.$$scope={dirty:d,ctx:t}),_t.$set(Lr);const Ve={};d&2&&(Ve.$$scope={dirty:d,ctx:t}),vt.$set(Ve);const wr={};d&2&&(wr.$$scope={dirty:d,ctx:t}),yt.$set(wr)},i(t){Mi||(L(u.$$.fragment,t),L(qt.$$.fragment,t),L(St.$$.fragment,t),L(Kt.$$.fragment,t),L(Xt.$$.fragment,t),L(Jt.$$.fragment,t),L(eo.$$.fragment,t),L(oo.$$.fragment,t),L(no.$$.fragment,t),L(so.$$.fragment,t),L(ao.$$.fragment,t),L(ro.$$.fragment,t),L(io.$$.fragment,t),L(lo.$$.fragment,t),L(Ye.$$.fragment,t),L(po.$$.fragment,t),L(mo.$$.fragment,t),L(uo.$$.fragment,t),L(ho.$$.fragment,t),L(fo.$$.fragment,t),L(go.$$.fragment,t),L(_o.$$.fragment,t),L(vo.$$.fragment,t),L(bo.$$.fragment,t),L(Lo.$$.fragment,t),L(wo.$$.fragment,t),L(ko.$$.fragment,t),L(Mo.$$.fragment,t),L($o.$$.fragment,t),L(zo.$$.fragment,t),L(Eo.$$.fragment,t),L(jo.$$.fragment,t),L(Fo.$$.fragment,t),L(Do.$$.fragment,t),L(lt.$$.fragment,t),L(dt.$$.fragment,t),L(Oo.$$.fragment,t),L(Ao.$$.fragment,t),L(Bo.$$.fragment,t),L(pt.$$.fragment,t),L(mt.$$.fragment,t),L(Uo.$$.fragment,t),L(Vo.$$.fragment,t),L(Zo.$$.fragment,t),L(ht.$$.fragment,t),L(ft.$$.fragment,t),L(Jo.$$.fragment,t),L(en.$$.fragment,t),L(sn.$$.fragment,t),L(_t.$$.fragment,t),L(vt.$$.fragment,t),L(yt.$$.fragment,t),Mi=!0)},o(t){w(u.$$.fragment,t),w(qt.$$.fragment,t),w(St.$$.fragment,t),w(Kt.$$.fragment,t),w(Xt.$$.fragment,t),w(Jt.$$.fragment,t),w(eo.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(so.$$.fragment,t),w(ao.$$.fragment,t),w(ro.$$.fragment,t),w(io.$$.fragment,t),w(lo.$$.fragment,t),w(Ye.$$.fragment,t),w(po.$$.fragment,t),w(mo.$$.fragment,t),w(uo.$$.fragment,t),w(ho.$$.fragment,t),w(fo.$$.fragment,t),w(go.$$.fragment,t),w(_o.$$.fragment,t),w(vo.$$.fragment,t),w(bo.$$.fragment,t),w(Lo.$$.fragment,t),w(wo.$$.fragment,t),w(ko.$$.fragment,t),w(Mo.$$.fragment,t),w($o.$$.fragment,t),w(zo.$$.fragment,t),w(Eo.$$.fragment,t),w(jo.$$.fragment,t),w(Fo.$$.fragment,t),w(Do.$$.fragment,t),w(lt.$$.fragment,t),w(dt.$$.fragment,t),w(Oo.$$.fragment,t),w(Ao.$$.fragment,t),w(Bo.$$.fragment,t),w(pt.$$.fragment,t),w(mt.$$.fragment,t),w(Uo.$$.fragment,t),w(Vo.$$.fragment,t),w(Zo.$$.fragment,t),w(ht.$$.fragment,t),w(ft.$$.fragment,t),w(Jo.$$.fragment,t),w(en.$$.fragment,t),w(sn.$$.fragment,t),w(_t.$$.fragment,t),w(vt.$$.fragment,t),w(yt.$$.fragment,t),Mi=!1},d(t){o(h),t&&o(x),t&&o(f),k(u),t&&o(kr),t&&o(Me),k(qt),t&&o(xr),t&&o(he),t&&o(Tr),t&&o(fe),t&&o(Mr),t&&o(dn),t&&o($r),t&&o(cn),t&&o(zr),t&&o(se),t&&o(Er),k(St,t),t&&o(qr),t&&o(pn),t&&o(Pr),t&&o(mn),t&&o(jr),t&&o(V),t&&o(Fr),k(Kt,t),t&&o(Ir),t&&o(ge),t&&o(Cr),k(Xt,t),t&&o(Dr),t&&o(Ge),t&&o(Or),t&&o(_e),t&&o(Ar),t&&o(He),t&&o(Nr),t&&o(ze),k(Jt),t&&o(Sr),t&&o(Q),t&&o(Rr),k(eo,t),t&&o(Wr),t&&o(z),t&&o(Br),t&&o(W),t&&o(Ur),t&&o(qn),t&&o(Vr),t&&o(Pn),t&&o(Qr),t&&o(jn),t&&o(Gr),k(oo,t),t&&o(Hr),t&&o(Fn),t&&o(Kr),t&&o(ve),t&&o(Xr),k(no,t),t&&o(Yr),t&&o(In),t&&o(Zr),t&&o(G),t&&o(Jr),k(so,t),t&&o(ei),t&&o(Cn),t&&o(ti),t&&o(Dn),t&&o(oi),k(ao,t),t&&o(ni),t&&o(On),t&&o(si),t&&o(An),t&&o(ai),k(ro,t),t&&o(ri),t&&o(Ee),k(io),t&&o(ii),t&&o(Y),k(lo),k(Ye),t&&o(li),t&&o(je),k(po),t&&o(di),t&&o(de),k(mo),k(uo),t&&o(ci),t&&o(Fe),k(ho),t&&o(pi),t&&o(ce),k(fo),k(go),t&&o(mi),t&&o(Ie),k(_o),t&&o(ui),t&&o(N),k(vo),k(bo),k(Lo),t&&o(hi),t&&o(Ce),k(wo),t&&o(fi),t&&o(Z),k(ko),k(Mo),t&&o(gi),t&&o(De),k($o),t&&o(_i),t&&o(B),k(zo),k(Eo),t&&o(vi),t&&o(Oe),k(jo),t&&o(yi),t&&o(pe),k(Fo),k(Do),k(lt),k(dt),t&&o(bi),t&&o(Ne),k(Oo),t&&o(Li),t&&o(J),k(Ao),k(Bo),k(pt),k(mt),t&&o(wi),t&&o(Re),k(Uo),t&&o(ki),t&&o(ee),k(Vo),k(Zo),k(ht),k(ft),t&&o(xi),t&&o(Be),k(Jo),t&&o(Ti),t&&o(oe),k(en),k(sn),k(_t),k(vt),k(yt)}}}const ry={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2ImageProcessor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2ImageProcessor",title:"LayoutLMv2ImageProcessor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function iy(j){return Hv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hy extends Uv{constructor(h){super();Vv(this,h,iy,ay,Qv,{})}}export{hy as default,ry as metadata};
