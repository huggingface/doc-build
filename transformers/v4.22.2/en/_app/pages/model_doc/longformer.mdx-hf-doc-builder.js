import{S as py,i as fy,s as gy,e as r,k as c,w as v,t as n,Y as Zo,M as uy,c as a,d as t,m as h,a as i,x as y,h as s,Z as en,b as g,G as e,g as f,y as T,q as $,o as L,B as x,v as _y,L as Je}from"../../chunks/vendor-hf-doc-builder.js";import{T as ot}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wy(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerConfig, LongformerModel

# Initializing a Longformer configuration
configuration = LongformerConfig()

# Initializing a model from the configuration
model = LongformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerConfig, LongformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Longformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LongformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function ky(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function by(z){let l,k,m,_,b;return _=new Be({props:{code:`import torch
from transformers import LongformerModel, LongformerTokenizer

model = LongformerModel.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = torch.ones(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to local attention
global_attention_mask = torch.zeros(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to global attention to be deactivated for all tokens
global_attention_mask[
    :,
    [
        1,
        4,
        21,
    ],
] = 1  # Set global attention to random tokens for the sake of this example
# Usually, set global attention based on the task. For example,
# classification: the <s> token
# QA: question tokens
# LM: potentially on the beginning of sentences and paragraphs
outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
sequence_output = outputs.last_hidden_state
pooled_output = outputs.pooler_output`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerModel, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.ones(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># initialize to local attention</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># initialize to global attention to be deactivated for all tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[
<span class="hljs-meta">... </span>    :,
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">21</span>,
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">... </span>] = <span class="hljs-number">1</span>  <span class="hljs-comment"># Set global attention to random tokens for the sake of this example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Usually, set global attention based on the task. For example,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># classification: the &lt;s&gt; token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># QA: question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># LM: potentially on the beginning of sentences and paragraphs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){l=r("p"),k=n("Examples:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Examples:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function vy(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function yy(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerTokenizer, LongformerForMaskedLM

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)`}}),{c(){l=r("p"),k=n("Mask filling example:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Mask filling example:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function Ty(z){let l,k;return l=new Be({props:{code:`TXT = (
    "My friends are <mask> but they eat too many carbs."
    + " That's why I decide not to eat with them." * 300
)
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">... </span>    + <span class="hljs-string">&quot; That&#x27;s why I decide not to eat with them.&quot;</span> * <span class="hljs-number">300</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;skinny&#x27;</span>, <span class="hljs-string">&#x27;thin&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;vegetarian&#x27;</span>]`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,_){T(l,m,_),k=!0},p:Je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function $y(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function Ly(z){let l,k,m,_,b;return _=new Be({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("jpwahle/longformer-base-plagiarism-detection")
model = LongformerForSequenceClassification.from_pretrained("jpwahle/longformer-base-plagiarism-detection")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of single-label classification:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example of single-label classification:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function xy(z){let l,k;return l=new Be({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = LongformerForSequenceClassification.from_pretrained("jpwahle/longformer-base-plagiarism-detection", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.44</span>`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,_){T(l,m,_),k=!0},p:Je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function Fy(z){let l,k,m,_,b;return _=new Be({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("jpwahle/longformer-base-plagiarism-detection")
model = LongformerForSequenceClassification.from_pretrained("jpwahle/longformer-base-plagiarism-detection", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of multi-label classification:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example of multi-label classification:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function My(z){let l,k;return l=new Be({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LongformerForSequenceClassification.from_pretrained(
    "jpwahle/longformer-base-plagiarism-detection", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,_){T(l,m,_),k=!0},p:Je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function Ey(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function zy(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function qy(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function jy(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
import torch

tokenizer = LongformerTokenizer.from_pretrained("brad1141/Longformer-finetuned-norm")
model = LongformerForTokenClassification.from_pretrained("brad1141/Longformer-finetuned-norm")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;brad1141/Longformer-finetuned-norm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;brad1141/Longformer-finetuned-norm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function Cy(z){let l,k;return l=new Be({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.63</span>`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,_){T(l,m,_),k=!0},p:Je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function Oy(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function Py(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = LongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
encoding = tokenizer(question, text, return_tensors="pt")
input_ids = encoding["input_ids"]

# default is local attention everywhere
# the forward method will automatically set global attention on question tokens
attention_mask = encoding["attention_mask"]

outputs = model(input_ids, attention_mask=attention_mask)
start_logits = outputs.start_logits
end_logits = outputs.end_logits
all_tokens = tokenizer.convert_ids_to_tokens(input_ids[0].tolist())

answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + 1]
answer = tokenizer.decode(
    tokenizer.convert_tokens_to_ids(answer_tokens)
)  # remove space prepending space token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># default is local attention everywhere</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward method will automatically set global attention on question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_ids[<span class="hljs-number">0</span>].tolist())

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = tokenizer.decode(
<span class="hljs-meta">... </span>    tokenizer.convert_tokens_to_ids(answer_tokens)
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){l=r("p"),k=n("Examples:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Examples:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function Ny(z){let l,k,m,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,B,$e,ue,W,he,Le,ne,j,O,_e,Q,te,xe,H,Fe,Me,C,Ee,J,me,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),m=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),B=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),W=r("code"),he=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),Q=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),me=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),m=a(E,"CODE",{});var We=i(m);_=s(We,"transformers"),We.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=h(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=h(oe),A=a(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=h(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),B=a(M,"CODE",{});var Ie=i(B);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),W=a(M,"CODE",{});var De=i(W);he=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=h(w),j=a(w,"UL",{});var S=i(j);O=a(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=a(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=a(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=h(S),C=a(S,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Oe=i(J);me=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=h(S),I=a(S,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),Ce.forEach(t),S.forEach(t),Z=h(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Re=i(N);re=s(Re,"subclassing"),Re.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,m),e(m,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,B),e(B,$e),e(F,ue),e(F,W),e(W,he),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,me),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function Ay(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function Iy(z){let l,k,m,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,B,$e,ue,W,he,Le,ne,j,O,_e,Q,te,xe,H,Fe,Me,C,Ee,J,me,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),m=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),B=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),W=r("code"),he=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),Q=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),me=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),m=a(E,"CODE",{});var We=i(m);_=s(We,"transformers"),We.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=h(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=h(oe),A=a(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=h(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),B=a(M,"CODE",{});var Ie=i(B);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),W=a(M,"CODE",{});var De=i(W);he=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=h(w),j=a(w,"UL",{});var S=i(j);O=a(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=a(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=a(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=h(S),C=a(S,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Oe=i(J);me=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=h(S),I=a(S,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),Ce.forEach(t),S.forEach(t),Z=h(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Re=i(N);re=s(Re,"subclassing"),Re.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,m),e(m,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,B),e(B,$e),e(F,ue),e(F,W),e(W,he),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,me),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function Dy(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function Sy(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function By(z){let l,k;return l=new Be({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.44</span>`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,_){T(l,m,_),k=!0},p:Je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function Wy(z){let l,k,m,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,B,$e,ue,W,he,Le,ne,j,O,_e,Q,te,xe,H,Fe,Me,C,Ee,J,me,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),m=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),B=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),W=r("code"),he=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),Q=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),me=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),m=a(E,"CODE",{});var We=i(m);_=s(We,"transformers"),We.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=h(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=h(oe),A=a(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=h(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),B=a(M,"CODE",{});var Ie=i(B);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),W=a(M,"CODE",{});var De=i(W);he=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=h(w),j=a(w,"UL",{});var S=i(j);O=a(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=a(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=a(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=h(S),C=a(S,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Oe=i(J);me=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=h(S),I=a(S,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),Ce.forEach(t),S.forEach(t),Z=h(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Re=i(N);re=s(Re,"subclassing"),Re.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,m),e(m,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,B),e(B,$e),e(F,ue),e(F,W),e(W,he),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,me),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function Qy(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function Uy(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = TFLongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function Hy(z){let l,k;return l=new Be({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.96</span>`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,_){T(l,m,_),k=!0},p:Je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function Ry(z){let l,k,m,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,B,$e,ue,W,he,Le,ne,j,O,_e,Q,te,xe,H,Fe,Me,C,Ee,J,me,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),m=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),B=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),W=r("code"),he=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),Q=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),me=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),m=a(E,"CODE",{});var We=i(m);_=s(We,"transformers"),We.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=h(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=h(oe),A=a(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=h(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),B=a(M,"CODE",{});var Ie=i(B);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),W=a(M,"CODE",{});var De=i(W);he=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=h(w),j=a(w,"UL",{});var S=i(j);O=a(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=a(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=a(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=h(S),C=a(S,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Oe=i(J);me=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=h(S),I=a(S,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),Ce.forEach(t),S.forEach(t),Z=h(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Re=i(N);re=s(Re,"subclassing"),Re.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,m),e(m,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,B),e(B,$e),e(F,ue),e(F,W),e(W,he),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,me),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function Ky(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function Vy(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("hf-internal-testing/tiny-random-longformer")
model = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function Gy(z){let l,k;return l=new Be({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,_){T(l,m,_),k=!0},p:Je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function Jy(z){let l,k,m,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,B,$e,ue,W,he,Le,ne,j,O,_e,Q,te,xe,H,Fe,Me,C,Ee,J,me,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),m=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),B=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),W=r("code"),he=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),Q=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),me=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),m=a(E,"CODE",{});var We=i(m);_=s(We,"transformers"),We.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=h(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=h(oe),A=a(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=h(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),B=a(M,"CODE",{});var Ie=i(B);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),W=a(M,"CODE",{});var De=i(W);he=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=h(w),j=a(w,"UL",{});var S=i(j);O=a(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=a(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=a(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=h(S),C=a(S,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Oe=i(J);me=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=h(S),I=a(S,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),Ce.forEach(t),S.forEach(t),Z=h(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Re=i(N);re=s(Re,"subclassing"),Re.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,m),e(m,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,B),e(B,$e),e(F,ue),e(F,W),e(W,he),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,me),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function Xy(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function Yy(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("hf-internal-testing/tiny-random-longformer")
model = TFLongformerForTokenClassification.from_pretrained("hf-internal-testing/tiny-random-longformer")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function Zy(z){let l,k;return l=new Be({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),{c(){v(l.$$.fragment)},l(m){y(l.$$.fragment,m)},m(m,_){T(l,m,_),k=!0},p:Je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function eT(z){let l,k,m,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,B,$e,ue,W,he,Le,ne,j,O,_e,Q,te,xe,H,Fe,Me,C,Ee,J,me,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),m=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),B=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),W=r("code"),he=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),Q=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),me=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),m=a(E,"CODE",{});var We=i(m);_=s(We,"transformers"),We.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=h(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=h(oe),A=a(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=h(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),B=a(M,"CODE",{});var Ie=i(B);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),W=a(M,"CODE",{});var De=i(W);he=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=h(w),j=a(w,"UL",{});var S=i(j);O=a(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=a(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=a(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=h(S),C=a(S,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Oe=i(J);me=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=h(S),I=a(S,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),Ce.forEach(t),S.forEach(t),Z=h(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Re=i(N);re=s(Re,"subclassing"),Re.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,m),e(m,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,B),e(B,$e),e(F,ue),e(F,W),e(W,he),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,me),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function tT(z){let l,k,m,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(p,"CODE",{});var q=i(m);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,m),e(m,_),e(l,b)},d(d){d&&t(l)}}}function oT(z){let l,k,m,_,b;return _=new Be({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),m=h(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,m,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(_,d)}}}function nT(z){let l,k,m,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,B,$e,ue,W,he,Le,ne,j,O,_e,Q,te,xe,H,Fe,Me,C,Ee,J,me,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le,w,E,We,oe,Qe,Ne,M,Ue,Ae,Ye='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ie,De,S='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',K,Se,Ze='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',V,Oe,He,Ce,Pe,ae,Re,bi,Xh,Yh,zd,iy='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',qd,vi,Zh,em,jd,At,tm,Cd,ly='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Od,yi,om,nm,Pd,It,sm,Ti,rm,am,$i,im,lm,Nd,tn,Li,dm,cm,xi,hm,Ad,on,mm,fa,pm,fm,Id,ut,gm,Dd,dy='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',Sd,Bd,cy='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',Wd,Qd,hy='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Ud,Hd,my='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Rd,Kd,nn,um,ps,_m,wm,Vd,Yt,sn,Fi,fs,km,Mi,bm,Gd,Zt,ga,vm,ym,ua,Tm,$m,Jd,gs,Xd,eo,rn,Ei,us,Lm,zi,xm,Yd,ct,_s,Fm,to,Mm,_a,Em,zm,wa,qm,jm,Cm,oo,Om,ka,Pm,Nm,ws,Am,Im,Dm,no,Sm,ba,Bm,Wm,va,Qm,Um,Hm,an,Zd,so,ln,qi,ks,Rm,ji,Km,ec,Ot,bs,Vm,Ci,Gm,Jm,dn,ya,Xm,Ym,Ta,Zm,ep,tc,ro,cn,Oi,vs,tp,Pi,op,oc,Pt,ys,np,Ts,sp,Ni,rp,ap,ip,hn,$a,lp,dp,La,cp,hp,nc,ao,mn,Ai,$s,mp,Ii,pp,sc,io,Ls,fp,Di,gp,rc,lo,xs,up,Si,_p,ac,co,Fs,wp,Bi,kp,ic,ho,Ms,bp,Wi,vp,lc,mo,Es,yp,Qi,Tp,dc,po,zs,$p,Ui,Lp,cc,fo,qs,xp,Hi,Fp,hc,go,js,Mp,Ri,Ep,mc,uo,Cs,zp,Ki,qp,pc,_o,Os,jp,Vi,Cp,fc,wo,Ps,Op,Gi,Pp,gc,ko,Ns,Np,Ji,Ap,uc,bo,As,Ip,Xi,Dp,_c,vo,Is,Sp,Yi,Bp,wc,yo,pn,Zi,Ds,Wp,el,Qp,kc,et,Ss,Up,tl,Hp,Rp,Bs,Kp,xa,Vp,Gp,Jp,Ws,Xp,Qs,Yp,Zp,ef,To,tf,Fa,of,nf,Us,sf,rf,af,Hs,lf,ol,df,cf,hf,$t,Rs,mf,$o,pf,Ma,ff,gf,nl,uf,_f,wf,fn,kf,gn,bc,Lo,un,sl,Ks,bf,rl,vf,vc,ht,Vs,yf,Gs,Tf,al,$f,Lf,xf,Js,Ff,Ea,Mf,Ef,zf,Xs,qf,Ys,jf,Cf,Of,lt,Zs,Pf,xo,Nf,za,Af,If,il,Df,Sf,Bf,_n,Wf,wn,Qf,ll,Uf,Hf,kn,yc,Fo,bn,dl,er,Rf,cl,Kf,Tc,mt,tr,Vf,hl,Gf,Jf,or,Xf,qa,Yf,Zf,eg,nr,tg,sr,og,ng,sg,tt,rr,rg,Mo,ag,ja,ig,lg,ml,dg,cg,hg,vn,mg,yn,pg,Tn,fg,$n,gg,Ln,$c,Eo,xn,pl,ar,ug,fl,_g,Lc,pt,ir,wg,gl,kg,bg,lr,vg,Ca,yg,Tg,$g,dr,Lg,cr,xg,Fg,Mg,Lt,hr,Eg,zo,zg,Oa,qg,jg,ul,Cg,Og,Pg,Fn,Ng,Mn,xc,qo,En,_l,mr,Ag,wl,Ig,Fc,ft,pr,Dg,kl,Sg,Bg,fr,Wg,Pa,Qg,Ug,Hg,gr,Rg,ur,Kg,Vg,Gg,_t,_r,Jg,jo,Xg,Na,Yg,Zg,bl,eu,tu,ou,zn,nu,qn,su,jn,Mc,Co,Cn,vl,wr,ru,yl,au,Ec,gt,kr,iu,Oo,lu,Tl,du,cu,$l,hu,mu,pu,br,fu,Aa,gu,uu,_u,vr,wu,yr,ku,bu,vu,xt,Tr,yu,Po,Tu,Ia,$u,Lu,Ll,xu,Fu,Mu,On,Eu,Pn,zc,No,Nn,xl,$r,zu,Fl,qu,qc,Ke,Lr,ju,Ml,Cu,Ou,xr,Pu,Da,Nu,Au,Iu,Fr,Du,Mr,Su,Bu,Wu,An,Qu,Ao,Uu,Sa,Hu,Ru,Er,Ku,Vu,Gu,zr,Ju,El,Xu,Yu,Zu,Dt,qr,e_,Io,t_,Ba,o_,n_,zl,s_,r_,a_,In,jc,Do,Dn,ql,jr,i_,jl,l_,Cc,nt,Cr,d_,Or,c_,Cl,h_,m_,p_,Pr,f_,Wa,g_,u_,__,Nr,w_,Ar,k_,b_,v_,Sn,y_,wt,Ir,T_,So,$_,Qa,L_,x_,Ol,F_,M_,E_,Bn,z_,Wn,q_,Qn,Oc,Bo,Un,Pl,Dr,j_,Nl,C_,Pc,st,Sr,O_,Wo,P_,Al,N_,A_,Il,I_,D_,S_,Br,B_,Ua,W_,Q_,U_,Wr,H_,Qr,R_,K_,V_,Hn,G_,kt,Ur,J_,Qo,X_,Ha,Y_,Z_,Dl,ew,tw,ow,Rn,nw,Kn,sw,Vn,Nc,Uo,Gn,Sl,Hr,rw,Bl,aw,Ac,rt,Rr,iw,Wl,lw,dw,Kr,cw,Ra,hw,mw,pw,Vr,fw,Gr,gw,uw,_w,Jn,ww,bt,Jr,kw,Ho,bw,Ka,vw,yw,Ql,Tw,$w,Lw,Xn,xw,Yn,Fw,Zn,Ic,Ro,es,Ul,Xr,Mw,Hl,Ew,Dc,at,Yr,zw,Rl,qw,jw,Zr,Cw,Va,Ow,Pw,Nw,ea,Aw,ta,Iw,Dw,Sw,ts,Bw,vt,oa,Ww,Ko,Qw,Ga,Uw,Hw,Kl,Rw,Kw,Vw,os,Gw,ns,Jw,ss,Sc,Vo,rs,Vl,na,Xw,Gl,Yw,Bc,it,sa,Zw,Jl,ek,tk,ra,ok,Ja,nk,sk,rk,aa,ak,ia,ik,lk,dk,as,ck,Ft,la,hk,Go,mk,Xa,pk,fk,Xl,gk,uk,_k,is,wk,ls,Wc;return d=new Xe({}),F=new Xe({}),E=new Xe({}),fs=new Xe({}),gs=new Be({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),us=new Xe({}),_s=new R({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"onnx_export",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/configuration_longformer.py#L47"}}),an=new Ge({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[wy]},$$scope:{ctx:z}}}),ks=new Xe({}),bs=new R({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/tokenization_longformer.py#L67"}}),vs=new Xe({}),ys=new R({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/tokenization_longformer_fast.py#L85"}}),$s=new Xe({}),Ls=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L57"}}),xs=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L100"}}),Fs=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L148"}}),Ms=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L194"}}),Es=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L243"}}),zs=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L289"}}),qs=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L337"}}),js=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),Cs=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),Os=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),Ps=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),Ns=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),As=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),Is=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),Ds=new Xe({}),Ss=new R({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L1537"}}),Rs=new R({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L1648",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fn=new ot({props:{$$slots:{default:[ky]},$$scope:{ctx:z}}}),gn=new Ge({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[by]},$$scope:{ctx:z}}}),Ks=new Xe({}),Vs=new R({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L1772"}}),Zs=new R({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L1791",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new ot({props:{$$slots:{default:[vy]},$$scope:{ctx:z}}}),wn=new Ge({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[yy]},$$scope:{ctx:z}}}),kn=new Ge({props:{anchor:"transformers.LongformerForMaskedLM.forward.example-2",$$slots:{default:[Ty]},$$scope:{ctx:z}}}),er=new Xe({}),tr=new R({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L1885"}}),rr=new R({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L1900",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new ot({props:{$$slots:{default:[$y]},$$scope:{ctx:z}}}),yn=new Ge({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[Ly]},$$scope:{ctx:z}}}),Tn=new Ge({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[xy]},$$scope:{ctx:z}}}),$n=new Ge({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[Fy]},$$scope:{ctx:z}}}),Ln=new Ge({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[My]},$$scope:{ctx:z}}}),ar=new Xe({}),ir=new R({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L2244"}}),hr=new R({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L2255",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new ot({props:{$$slots:{default:[Ey]},$$scope:{ctx:z}}}),Mn=new Ge({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[zy]},$$scope:{ctx:z}}}),mr=new Xe({}),pr=new R({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L2154"}}),_r=new R({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L2169",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zn=new ot({props:{$$slots:{default:[qy]},$$scope:{ctx:z}}}),qn=new Ge({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[jy]},$$scope:{ctx:z}}}),jn=new Ge({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[Cy]},$$scope:{ctx:z}}}),wr=new Xe({}),kr=new R({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L2014"}}),Tr=new R({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_longformer.py#L2028",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new ot({props:{$$slots:{default:[Oy]},$$scope:{ctx:z}}}),Pn=new Ge({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[Py]},$$scope:{ctx:z}}}),$r=new Xe({}),Lr=new R({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2035"}}),An=new ot({props:{$$slots:{default:[Ny]},$$scope:{ctx:z}}}),qr=new R({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerModel.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2057"}}),In=new ot({props:{$$slots:{default:[Ay]},$$scope:{ctx:z}}}),jr=new Xe({}),Cr=new R({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2108"}}),Sn=new ot({props:{$$slots:{default:[Iy]},$$scope:{ctx:z}}}),Ir=new R({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2125",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bn=new ot({props:{$$slots:{default:[Dy]},$$scope:{ctx:z}}}),Wn=new Ge({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[Sy]},$$scope:{ctx:z}}}),Qn=new Ge({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[By]},$$scope:{ctx:z}}}),Dr=new Xe({}),Sr=new R({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2205"}}),Hn=new ot({props:{$$slots:{default:[Wy]},$$scope:{ctx:z}}}),Ur=new R({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2220",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rn=new ot({props:{$$slots:{default:[Qy]},$$scope:{ctx:z}}}),Kn=new Ge({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[Uy]},$$scope:{ctx:z}}}),Vn=new Ge({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[Hy]},$$scope:{ctx:z}}}),Hr=new Xe({}),Rr=new R({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2374"}}),Jn=new ot({props:{$$slots:{default:[Ry]},$$scope:{ctx:z}}}),Jr=new R({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2386",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xn=new ot({props:{$$slots:{default:[Ky]},$$scope:{ctx:z}}}),Yn=new Ge({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[Vy]},$$scope:{ctx:z}}}),Zn=new Ge({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[Gy]},$$scope:{ctx:z}}}),Xr=new Xe({}),Yr=new R({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2626"}}),ts=new ot({props:{$$slots:{default:[Jy]},$$scope:{ctx:z}}}),oa=new R({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2641",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),os=new ot({props:{$$slots:{default:[Xy]},$$scope:{ctx:z}}}),ns=new Ge({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[Yy]},$$scope:{ctx:z}}}),ss=new Ge({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[Zy]},$$scope:{ctx:z}}}),na=new Xe({}),sa=new R({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2490"}}),as=new ot({props:{$$slots:{default:[eT]},$$scope:{ctx:z}}}),la=new R({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2510",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),is=new ot({props:{$$slots:{default:[tT]},$$scope:{ctx:z}}}),ls=new Ge({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[oT]},$$scope:{ctx:z}}}),{c(){l=r("meta"),k=c(),m=r("h1"),_=r("a"),b=r("span"),v(d.$$.fragment),p=c(),q=r("span"),ke=n("Longformer"),pe=c(),A=r("h2"),ie=r("a"),ee=r("span"),v(F.$$.fragment),be=c(),U=r("span"),ve=n("Overview"),fe=c(),D=r("p"),ye=n("The Longformer model was presented in "),de=r("a"),G=n("Longformer: The Long-Document Transformer"),Te=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),ge=c(),B=r("p"),$e=n("The abstract from the paper is the following:"),ue=c(),W=r("p"),he=r("em"),Le=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ne=c(),j=r("p"),O=n("Tips:"),_e=c(),Q=r("ul"),te=r("li"),xe=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),H=r("code"),Fe=n("token_type_ids"),Me=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),C=r("code"),Ee=n("tokenizer.sep_token"),J=n(` (or
`),me=r("code"),ze=n("</s>"),X=n(")."),we=c(),se=r("p"),I=n("This model was contributed by "),ce=r("a"),Y=n("beltagy"),qe=n(". The Authors\u2019 code can be found "),Z=r("a"),P=n("here"),je=n("."),N=c(),re=r("h2"),le=r("a"),w=r("span"),v(E.$$.fragment),We=c(),oe=r("span"),Qe=n("Longformer Self Attention"),Ne=c(),M=r("p"),Ue=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),Ae=new Zo,Ie=n(` previous tokens and
`),De=new Zo,K=n(" succeding tokens with "),Se=new Zo,V=n(` being the window length as defined in
`),Oe=r("code"),He=n("config.attention_window"),Ce=n(". Note that "),Pe=r("code"),ae=n("config.attention_window"),Re=n(" can be of type "),bi=r("code"),Xh=n("List"),Yh=n(` to define a
different `),zd=new Zo,qd=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),vi=r("code"),Zh=n("BertSelfAttention"),em=n("."),jd=c(),At=r("p"),tm=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),Cd=new Zo,Od=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),yi=r("em"),om=n("symmetric"),nm=n("."),Pd=c(),It=r("p"),sm=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ti=r("code"),rm=n("global_attention_mask"),am=n(` at run-time appropriately. All Longformer models employ the following logic for
`),$i=r("code"),im=n("global_attention_mask"),lm=n(":"),Nd=c(),tn=r("ul"),Li=r("li"),dm=n("0: the token attends \u201Clocally\u201D,"),cm=c(),xi=r("li"),hm=n("1: the token attends \u201Cglobally\u201D."),Ad=c(),on=r("p"),mm=n("For more information please also refer to "),fa=r("a"),pm=n("forward()"),fm=n(" method."),Id=c(),ut=r("p"),gm=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),Dd=new Zo,Sd=n(` to
`),Bd=new Zo,Wd=n(", with "),Qd=new Zo,Ud=n(" being the sequence length and "),Hd=new Zo,Rd=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Kd=c(),nn=r("p"),um=n("For more information, please refer to the official "),ps=r("a"),_m=n("paper"),wm=n("."),Vd=c(),Yt=r("h2"),sn=r("a"),Fi=r("span"),v(fs.$$.fragment),km=c(),Mi=r("span"),bm=n("Training"),Gd=c(),Zt=r("p"),ga=r("a"),vm=n("LongformerForMaskedLM"),ym=n(" is trained the exact same way "),ua=r("a"),Tm=n("RobertaForMaskedLM"),$m=n(` is
trained and should be used as follows:`),Jd=c(),v(gs.$$.fragment),Xd=c(),eo=r("h2"),rn=r("a"),Ei=r("span"),v(us.$$.fragment),Lm=c(),zi=r("span"),xm=n("LongformerConfig"),Yd=c(),ct=r("div"),v(_s.$$.fragment),Fm=c(),to=r("p"),Mm=n("This is the configuration class to store the configuration of a "),_a=r("a"),Em=n("LongformerModel"),zm=n(" or a "),wa=r("a"),qm=n("TFLongformerModel"),jm=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Cm=c(),oo=r("p"),Om=n("This is the configuration class to store the configuration of a "),ka=r("a"),Pm=n("LongformerModel"),Nm=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),ws=r("a"),Am=n("allenai/longformer-base-4096"),Im=n(` architecture with a sequence
length 4,096.`),Dm=c(),no=r("p"),Sm=n("The "),ba=r("a"),Bm=n("LongformerConfig"),Wm=n(" class directly inherits "),va=r("a"),Qm=n("RobertaConfig"),Um=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Hm=c(),v(an.$$.fragment),Zd=c(),so=r("h2"),ln=r("a"),qi=r("span"),v(ks.$$.fragment),Rm=c(),ji=r("span"),Km=n("LongformerTokenizer"),ec=c(),Ot=r("div"),v(bs.$$.fragment),Vm=c(),Ci=r("p"),Gm=n("Construct a Longformer tokenizer."),Jm=c(),dn=r("p"),ya=r("a"),Xm=n("LongformerTokenizer"),Ym=n(" is identical to "),Ta=r("a"),Zm=n("RobertaTokenizer"),ep=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),tc=c(),ro=r("h2"),cn=r("a"),Oi=r("span"),v(vs.$$.fragment),tp=c(),Pi=r("span"),op=n("LongformerTokenizerFast"),oc=c(),Pt=r("div"),v(ys.$$.fragment),np=c(),Ts=r("p"),sp=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),Ni=r("em"),rp=n("tokenizers"),ap=n(" library)."),ip=c(),hn=r("p"),$a=r("a"),lp=n("LongformerTokenizerFast"),dp=n(" is identical to "),La=r("a"),cp=n("RobertaTokenizerFast"),hp=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),nc=c(),ao=r("h2"),mn=r("a"),Ai=r("span"),v($s.$$.fragment),mp=c(),Ii=r("span"),pp=n("Longformer specific outputs"),sc=c(),io=r("div"),v(Ls.$$.fragment),fp=c(),Di=r("p"),gp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),rc=c(),lo=r("div"),v(xs.$$.fragment),up=c(),Si=r("p"),_p=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),ac=c(),co=r("div"),v(Fs.$$.fragment),wp=c(),Bi=r("p"),kp=n("Base class for masked language models outputs."),ic=c(),ho=r("div"),v(Ms.$$.fragment),bp=c(),Wi=r("p"),vp=n("Base class for outputs of question answering Longformer models."),lc=c(),mo=r("div"),v(Es.$$.fragment),yp=c(),Qi=r("p"),Tp=n("Base class for outputs of sentence classification models."),dc=c(),po=r("div"),v(zs.$$.fragment),$p=c(),Ui=r("p"),Lp=n("Base class for outputs of multiple choice Longformer models."),cc=c(),fo=r("div"),v(qs.$$.fragment),xp=c(),Hi=r("p"),Fp=n("Base class for outputs of token classification models."),hc=c(),go=r("div"),v(js.$$.fragment),Mp=c(),Ri=r("p"),Ep=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),mc=c(),uo=r("div"),v(Cs.$$.fragment),zp=c(),Ki=r("p"),qp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),pc=c(),_o=r("div"),v(Os.$$.fragment),jp=c(),Vi=r("p"),Cp=n("Base class for masked language models outputs."),fc=c(),wo=r("div"),v(Ps.$$.fragment),Op=c(),Gi=r("p"),Pp=n("Base class for outputs of question answering Longformer models."),gc=c(),ko=r("div"),v(Ns.$$.fragment),Np=c(),Ji=r("p"),Ap=n("Base class for outputs of sentence classification models."),uc=c(),bo=r("div"),v(As.$$.fragment),Ip=c(),Xi=r("p"),Dp=n("Base class for outputs of multiple choice models."),_c=c(),vo=r("div"),v(Is.$$.fragment),Sp=c(),Yi=r("p"),Bp=n("Base class for outputs of token classification models."),wc=c(),yo=r("h2"),pn=r("a"),Zi=r("span"),v(Ds.$$.fragment),Wp=c(),el=r("span"),Qp=n("LongformerModel"),kc=c(),et=r("div"),v(Ss.$$.fragment),Up=c(),tl=r("p"),Hp=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Rp=c(),Bs=r("p"),Kp=n("This model inherits from "),xa=r("a"),Vp=n("PreTrainedModel"),Gp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jp=c(),Ws=r("p"),Xp=n("This model is also a PyTorch "),Qs=r("a"),Yp=n("torch.nn.Module"),Zp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ef=c(),To=r("p"),tf=n("This class copied code from "),Fa=r("a"),of=n("RobertaModel"),nf=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Us=r("a"),sf=n(`Longformer:
the Long-Document Transformer`),rf=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),af=c(),Hs=r("p"),lf=n("The self-attention module "),ol=r("code"),df=n("LongformerSelfAttention"),cf=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),hf=c(),$t=r("div"),v(Rs.$$.fragment),mf=c(),$o=r("p"),pf=n("The "),Ma=r("a"),ff=n("LongformerModel"),gf=n(" forward method, overrides the "),nl=r("code"),uf=n("__call__"),_f=n(" special method."),wf=c(),v(fn.$$.fragment),kf=c(),v(gn.$$.fragment),bc=c(),Lo=r("h2"),un=r("a"),sl=r("span"),v(Ks.$$.fragment),bf=c(),rl=r("span"),vf=n("LongformerForMaskedLM"),vc=c(),ht=r("div"),v(Vs.$$.fragment),yf=c(),Gs=r("p"),Tf=n("Longformer Model with a "),al=r("code"),$f=n("language modeling"),Lf=n(" head on top."),xf=c(),Js=r("p"),Ff=n("This model inherits from "),Ea=r("a"),Mf=n("PreTrainedModel"),Ef=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zf=c(),Xs=r("p"),qf=n("This model is also a PyTorch "),Ys=r("a"),jf=n("torch.nn.Module"),Cf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Of=c(),lt=r("div"),v(Zs.$$.fragment),Pf=c(),xo=r("p"),Nf=n("The "),za=r("a"),Af=n("LongformerForMaskedLM"),If=n(" forward method, overrides the "),il=r("code"),Df=n("__call__"),Sf=n(" special method."),Bf=c(),v(_n.$$.fragment),Wf=c(),v(wn.$$.fragment),Qf=c(),ll=r("p"),Uf=n("Let\u2019s try a very long input."),Hf=c(),v(kn.$$.fragment),yc=c(),Fo=r("h2"),bn=r("a"),dl=r("span"),v(er.$$.fragment),Rf=c(),cl=r("span"),Kf=n("LongformerForSequenceClassification"),Tc=c(),mt=r("div"),v(tr.$$.fragment),Vf=c(),hl=r("p"),Gf=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jf=c(),or=r("p"),Xf=n("This model inherits from "),qa=r("a"),Yf=n("PreTrainedModel"),Zf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg=c(),nr=r("p"),tg=n("This model is also a PyTorch "),sr=r("a"),og=n("torch.nn.Module"),ng=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sg=c(),tt=r("div"),v(rr.$$.fragment),rg=c(),Mo=r("p"),ag=n("The "),ja=r("a"),ig=n("LongformerForSequenceClassification"),lg=n(" forward method, overrides the "),ml=r("code"),dg=n("__call__"),cg=n(" special method."),hg=c(),v(vn.$$.fragment),mg=c(),v(yn.$$.fragment),pg=c(),v(Tn.$$.fragment),fg=c(),v($n.$$.fragment),gg=c(),v(Ln.$$.fragment),$c=c(),Eo=r("h2"),xn=r("a"),pl=r("span"),v(ar.$$.fragment),ug=c(),fl=r("span"),_g=n("LongformerForMultipleChoice"),Lc=c(),pt=r("div"),v(ir.$$.fragment),wg=c(),gl=r("p"),kg=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),bg=c(),lr=r("p"),vg=n("This model inherits from "),Ca=r("a"),yg=n("PreTrainedModel"),Tg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$g=c(),dr=r("p"),Lg=n("This model is also a PyTorch "),cr=r("a"),xg=n("torch.nn.Module"),Fg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mg=c(),Lt=r("div"),v(hr.$$.fragment),Eg=c(),zo=r("p"),zg=n("The "),Oa=r("a"),qg=n("LongformerForMultipleChoice"),jg=n(" forward method, overrides the "),ul=r("code"),Cg=n("__call__"),Og=n(" special method."),Pg=c(),v(Fn.$$.fragment),Ng=c(),v(Mn.$$.fragment),xc=c(),qo=r("h2"),En=r("a"),_l=r("span"),v(mr.$$.fragment),Ag=c(),wl=r("span"),Ig=n("LongformerForTokenClassification"),Fc=c(),ft=r("div"),v(pr.$$.fragment),Dg=c(),kl=r("p"),Sg=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Bg=c(),fr=r("p"),Wg=n("This model inherits from "),Pa=r("a"),Qg=n("PreTrainedModel"),Ug=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hg=c(),gr=r("p"),Rg=n("This model is also a PyTorch "),ur=r("a"),Kg=n("torch.nn.Module"),Vg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gg=c(),_t=r("div"),v(_r.$$.fragment),Jg=c(),jo=r("p"),Xg=n("The "),Na=r("a"),Yg=n("LongformerForTokenClassification"),Zg=n(" forward method, overrides the "),bl=r("code"),eu=n("__call__"),tu=n(" special method."),ou=c(),v(zn.$$.fragment),nu=c(),v(qn.$$.fragment),su=c(),v(jn.$$.fragment),Mc=c(),Co=r("h2"),Cn=r("a"),vl=r("span"),v(wr.$$.fragment),ru=c(),yl=r("span"),au=n("LongformerForQuestionAnswering"),Ec=c(),gt=r("div"),v(kr.$$.fragment),iu=c(),Oo=r("p"),lu=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),Tl=r("code"),du=n("span start logits"),cu=n(" and "),$l=r("code"),hu=n("span end logits"),mu=n(")."),pu=c(),br=r("p"),fu=n("This model inherits from "),Aa=r("a"),gu=n("PreTrainedModel"),uu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u=c(),vr=r("p"),wu=n("This model is also a PyTorch "),yr=r("a"),ku=n("torch.nn.Module"),bu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vu=c(),xt=r("div"),v(Tr.$$.fragment),yu=c(),Po=r("p"),Tu=n("The "),Ia=r("a"),$u=n("LongformerForQuestionAnswering"),Lu=n(" forward method, overrides the "),Ll=r("code"),xu=n("__call__"),Fu=n(" special method."),Mu=c(),v(On.$$.fragment),Eu=c(),v(Pn.$$.fragment),zc=c(),No=r("h2"),Nn=r("a"),xl=r("span"),v($r.$$.fragment),zu=c(),Fl=r("span"),qu=n("TFLongformerModel"),qc=c(),Ke=r("div"),v(Lr.$$.fragment),ju=c(),Ml=r("p"),Cu=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Ou=c(),xr=r("p"),Pu=n("This model inherits from "),Da=r("a"),Nu=n("TFPreTrainedModel"),Au=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iu=c(),Fr=r("p"),Du=n("This model is also a "),Mr=r("a"),Su=n("tf.keras.Model"),Bu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wu=c(),v(An.$$.fragment),Qu=c(),Ao=r("p"),Uu=n("This class copies code from "),Sa=r("a"),Hu=n("TFRobertaModel"),Ru=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Er=r("a"),Ku=n("Longformer: the Long-Document Transformer"),Vu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Gu=c(),zr=r("p"),Ju=n("The self-attention module "),El=r("code"),Xu=n("TFLongformerSelfAttention"),Yu=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Zu=c(),Dt=r("div"),v(qr.$$.fragment),e_=c(),Io=r("p"),t_=n("The "),Ba=r("a"),o_=n("TFLongformerModel"),n_=n(" forward method, overrides the "),zl=r("code"),s_=n("__call__"),r_=n(" special method."),a_=c(),v(In.$$.fragment),jc=c(),Do=r("h2"),Dn=r("a"),ql=r("span"),v(jr.$$.fragment),i_=c(),jl=r("span"),l_=n("TFLongformerForMaskedLM"),Cc=c(),nt=r("div"),v(Cr.$$.fragment),d_=c(),Or=r("p"),c_=n("Longformer Model with a "),Cl=r("code"),h_=n("language modeling"),m_=n(" head on top."),p_=c(),Pr=r("p"),f_=n("This model inherits from "),Wa=r("a"),g_=n("TFPreTrainedModel"),u_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),__=c(),Nr=r("p"),w_=n("This model is also a "),Ar=r("a"),k_=n("tf.keras.Model"),b_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),v_=c(),v(Sn.$$.fragment),y_=c(),wt=r("div"),v(Ir.$$.fragment),T_=c(),So=r("p"),$_=n("The "),Qa=r("a"),L_=n("TFLongformerForMaskedLM"),x_=n(" forward method, overrides the "),Ol=r("code"),F_=n("__call__"),M_=n(" special method."),E_=c(),v(Bn.$$.fragment),z_=c(),v(Wn.$$.fragment),q_=c(),v(Qn.$$.fragment),Oc=c(),Bo=r("h2"),Un=r("a"),Pl=r("span"),v(Dr.$$.fragment),j_=c(),Nl=r("span"),C_=n("TFLongformerForQuestionAnswering"),Pc=c(),st=r("div"),v(Sr.$$.fragment),O_=c(),Wo=r("p"),P_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),Al=r("code"),N_=n("span start logits"),A_=n(" and "),Il=r("code"),I_=n("span end logits"),D_=n(")."),S_=c(),Br=r("p"),B_=n("This model inherits from "),Ua=r("a"),W_=n("TFPreTrainedModel"),Q_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U_=c(),Wr=r("p"),H_=n("This model is also a "),Qr=r("a"),R_=n("tf.keras.Model"),K_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),V_=c(),v(Hn.$$.fragment),G_=c(),kt=r("div"),v(Ur.$$.fragment),J_=c(),Qo=r("p"),X_=n("The "),Ha=r("a"),Y_=n("TFLongformerForQuestionAnswering"),Z_=n(" forward method, overrides the "),Dl=r("code"),ew=n("__call__"),tw=n(" special method."),ow=c(),v(Rn.$$.fragment),nw=c(),v(Kn.$$.fragment),sw=c(),v(Vn.$$.fragment),Nc=c(),Uo=r("h2"),Gn=r("a"),Sl=r("span"),v(Hr.$$.fragment),rw=c(),Bl=r("span"),aw=n("TFLongformerForSequenceClassification"),Ac=c(),rt=r("div"),v(Rr.$$.fragment),iw=c(),Wl=r("p"),lw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),dw=c(),Kr=r("p"),cw=n("This model inherits from "),Ra=r("a"),hw=n("TFPreTrainedModel"),mw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pw=c(),Vr=r("p"),fw=n("This model is also a "),Gr=r("a"),gw=n("tf.keras.Model"),uw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_w=c(),v(Jn.$$.fragment),ww=c(),bt=r("div"),v(Jr.$$.fragment),kw=c(),Ho=r("p"),bw=n("The "),Ka=r("a"),vw=n("TFLongformerForSequenceClassification"),yw=n(" forward method, overrides the "),Ql=r("code"),Tw=n("__call__"),$w=n(" special method."),Lw=c(),v(Xn.$$.fragment),xw=c(),v(Yn.$$.fragment),Fw=c(),v(Zn.$$.fragment),Ic=c(),Ro=r("h2"),es=r("a"),Ul=r("span"),v(Xr.$$.fragment),Mw=c(),Hl=r("span"),Ew=n("TFLongformerForTokenClassification"),Dc=c(),at=r("div"),v(Yr.$$.fragment),zw=c(),Rl=r("p"),qw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),jw=c(),Zr=r("p"),Cw=n("This model inherits from "),Va=r("a"),Ow=n("TFPreTrainedModel"),Pw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nw=c(),ea=r("p"),Aw=n("This model is also a "),ta=r("a"),Iw=n("tf.keras.Model"),Dw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sw=c(),v(ts.$$.fragment),Bw=c(),vt=r("div"),v(oa.$$.fragment),Ww=c(),Ko=r("p"),Qw=n("The "),Ga=r("a"),Uw=n("TFLongformerForTokenClassification"),Hw=n(" forward method, overrides the "),Kl=r("code"),Rw=n("__call__"),Kw=n(" special method."),Vw=c(),v(os.$$.fragment),Gw=c(),v(ns.$$.fragment),Jw=c(),v(ss.$$.fragment),Sc=c(),Vo=r("h2"),rs=r("a"),Vl=r("span"),v(na.$$.fragment),Xw=c(),Gl=r("span"),Yw=n("TFLongformerForMultipleChoice"),Bc=c(),it=r("div"),v(sa.$$.fragment),Zw=c(),Jl=r("p"),ek=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),tk=c(),ra=r("p"),ok=n("This model inherits from "),Ja=r("a"),nk=n("TFPreTrainedModel"),sk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rk=c(),aa=r("p"),ak=n("This model is also a "),ia=r("a"),ik=n("tf.keras.Model"),lk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dk=c(),v(as.$$.fragment),ck=c(),Ft=r("div"),v(la.$$.fragment),hk=c(),Go=r("p"),mk=n("The "),Xa=r("a"),pk=n("TFLongformerForMultipleChoice"),fk=n(" forward method, overrides the "),Xl=r("code"),gk=n("__call__"),uk=n(" special method."),_k=c(),v(is.$$.fragment),wk=c(),v(ls.$$.fragment),this.h()},l(o){const u=uy('[data-svelte="svelte-1phssyn"]',document.head);l=a(u,"META",{name:!0,content:!0}),u.forEach(t),k=h(o),m=a(o,"H1",{class:!0});var da=i(m);_=a(da,"A",{id:!0,class:!0,href:!0});var Yl=i(_);b=a(Yl,"SPAN",{});var Zl=i(b);y(d.$$.fragment,Zl),Zl.forEach(t),Yl.forEach(t),p=h(da),q=a(da,"SPAN",{});var ed=i(q);ke=s(ed,"Longformer"),ed.forEach(t),da.forEach(t),pe=h(o),A=a(o,"H2",{class:!0});var ca=i(A);ie=a(ca,"A",{id:!0,class:!0,href:!0});var td=i(ie);ee=a(td,"SPAN",{});var od=i(ee);y(F.$$.fragment,od),od.forEach(t),td.forEach(t),be=h(ca),U=a(ca,"SPAN",{});var nd=i(U);ve=s(nd,"Overview"),nd.forEach(t),ca.forEach(t),fe=h(o),D=a(o,"P",{});var ha=i(D);ye=s(ha,"The Longformer model was presented in "),de=a(ha,"A",{href:!0,rel:!0});var sd=i(de);G=s(sd,"Longformer: The Long-Document Transformer"),sd.forEach(t),Te=s(ha," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),ha.forEach(t),ge=h(o),B=a(o,"P",{});var rd=i(B);$e=s(rd,"The abstract from the paper is the following:"),rd.forEach(t),ue=h(o),W=a(o,"P",{});var ad=i(W);he=a(ad,"EM",{});var id=i(he);Le=s(id,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),id.forEach(t),ad.forEach(t),ne=h(o),j=a(o,"P",{});var ld=i(j);O=s(ld,"Tips:"),ld.forEach(t),_e=h(o),Q=a(o,"UL",{});var dd=i(Q);te=a(dd,"LI",{});var Nt=i(te);xe=s(Nt,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),H=a(Nt,"CODE",{});var cd=i(H);Fe=s(cd,"token_type_ids"),cd.forEach(t),Me=s(Nt,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),C=a(Nt,"CODE",{});var hd=i(C);Ee=s(hd,"tokenizer.sep_token"),hd.forEach(t),J=s(Nt,` (or
`),me=a(Nt,"CODE",{});var md=i(me);ze=s(md,"</s>"),md.forEach(t),X=s(Nt,")."),Nt.forEach(t),dd.forEach(t),we=h(o),se=a(o,"P",{});var Jo=i(se);I=s(Jo,"This model was contributed by "),ce=a(Jo,"A",{href:!0,rel:!0});var pd=i(ce);Y=s(pd,"beltagy"),pd.forEach(t),qe=s(Jo,". The Authors\u2019 code can be found "),Z=a(Jo,"A",{href:!0,rel:!0});var fd=i(Z);P=s(fd,"here"),fd.forEach(t),je=s(Jo,"."),Jo.forEach(t),N=h(o),re=a(o,"H2",{class:!0});var ma=i(re);le=a(ma,"A",{id:!0,class:!0,href:!0});var gd=i(le);w=a(gd,"SPAN",{});var ud=i(w);y(E.$$.fragment,ud),ud.forEach(t),gd.forEach(t),We=h(ma),oe=a(ma,"SPAN",{});var _d=i(oe);Qe=s(_d,"Longformer Self Attention"),_d.forEach(t),ma.forEach(t),Ne=h(o),M=a(o,"P",{});var Ve=i(M);Ue=s(Ve,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),Ae=en(Ve),Ie=s(Ve,` previous tokens and
`),De=en(Ve),K=s(Ve," succeding tokens with "),Se=en(Ve),V=s(Ve,` being the window length as defined in
`),Oe=a(Ve,"CODE",{});var wd=i(Oe);He=s(wd,"config.attention_window"),wd.forEach(t),Ce=s(Ve,". Note that "),Pe=a(Ve,"CODE",{});var kd=i(Pe);ae=s(kd,"config.attention_window"),kd.forEach(t),Re=s(Ve," can be of type "),bi=a(Ve,"CODE",{});var bd=i(bi);Xh=s(bd,"List"),bd.forEach(t),Yh=s(Ve,` to define a
different `),zd=en(Ve),qd=s(Ve,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),vi=a(Ve,"CODE",{});var vd=i(vi);Zh=s(vd,"BertSelfAttention"),vd.forEach(t),em=s(Ve,"."),Ve.forEach(t),jd=h(o),At=a(o,"P",{});var Xo=i(At);tm=s(Xo,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),Cd=en(Xo),Od=s(Xo,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),yi=a(Xo,"EM",{});var yd=i(yi);om=s(yd,"symmetric"),yd.forEach(t),nm=s(Xo,"."),Xo.forEach(t),Pd=h(o),It=a(o,"P",{});var Yo=i(It);sm=s(Yo,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ti=a(Yo,"CODE",{});var Td=i(Ti);rm=s(Td,"global_attention_mask"),Td.forEach(t),am=s(Yo,` at run-time appropriately. All Longformer models employ the following logic for
`),$i=a(Yo,"CODE",{});var $d=i($i);im=s($d,"global_attention_mask"),$d.forEach(t),lm=s(Yo,":"),Yo.forEach(t),Nd=h(o),tn=a(o,"UL",{});var pa=i(tn);Li=a(pa,"LI",{});var Ld=i(Li);dm=s(Ld,"0: the token attends \u201Clocally\u201D,"),Ld.forEach(t),cm=h(pa),xi=a(pa,"LI",{});var xd=i(xi);hm=s(xd,"1: the token attends \u201Cglobally\u201D."),xd.forEach(t),pa.forEach(t),Ad=h(o),on=a(o,"P",{});var Qc=i(on);mm=s(Qc,"For more information please also refer to "),fa=a(Qc,"A",{href:!0});var kk=i(fa);pm=s(kk,"forward()"),kk.forEach(t),fm=s(Qc," method."),Qc.forEach(t),Id=h(o),ut=a(o,"P",{});var St=i(ut);gm=s(St,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),Dd=en(St),Sd=s(St,` to
`),Bd=en(St),Wd=s(St,", with "),Qd=en(St),Ud=s(St," being the sequence length and "),Hd=en(St),Rd=s(St,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),St.forEach(t),Kd=h(o),nn=a(o,"P",{});var Uc=i(nn);um=s(Uc,"For more information, please refer to the official "),ps=a(Uc,"A",{href:!0,rel:!0});var bk=i(ps);_m=s(bk,"paper"),bk.forEach(t),wm=s(Uc,"."),Uc.forEach(t),Vd=h(o),Yt=a(o,"H2",{class:!0});var Hc=i(Yt);sn=a(Hc,"A",{id:!0,class:!0,href:!0});var vk=i(sn);Fi=a(vk,"SPAN",{});var yk=i(Fi);y(fs.$$.fragment,yk),yk.forEach(t),vk.forEach(t),km=h(Hc),Mi=a(Hc,"SPAN",{});var Tk=i(Mi);bm=s(Tk,"Training"),Tk.forEach(t),Hc.forEach(t),Gd=h(o),Zt=a(o,"P",{});var Fd=i(Zt);ga=a(Fd,"A",{href:!0});var $k=i(ga);vm=s($k,"LongformerForMaskedLM"),$k.forEach(t),ym=s(Fd," is trained the exact same way "),ua=a(Fd,"A",{href:!0});var Lk=i(ua);Tm=s(Lk,"RobertaForMaskedLM"),Lk.forEach(t),$m=s(Fd,` is
trained and should be used as follows:`),Fd.forEach(t),Jd=h(o),y(gs.$$.fragment,o),Xd=h(o),eo=a(o,"H2",{class:!0});var Rc=i(eo);rn=a(Rc,"A",{id:!0,class:!0,href:!0});var xk=i(rn);Ei=a(xk,"SPAN",{});var Fk=i(Ei);y(us.$$.fragment,Fk),Fk.forEach(t),xk.forEach(t),Lm=h(Rc),zi=a(Rc,"SPAN",{});var Mk=i(zi);xm=s(Mk,"LongformerConfig"),Mk.forEach(t),Rc.forEach(t),Yd=h(o),ct=a(o,"DIV",{class:!0});var Bt=i(ct);y(_s.$$.fragment,Bt),Fm=h(Bt),to=a(Bt,"P",{});var Ya=i(to);Mm=s(Ya,"This is the configuration class to store the configuration of a "),_a=a(Ya,"A",{href:!0});var Ek=i(_a);Em=s(Ek,"LongformerModel"),Ek.forEach(t),zm=s(Ya," or a "),wa=a(Ya,"A",{href:!0});var zk=i(wa);qm=s(zk,"TFLongformerModel"),zk.forEach(t),jm=s(Ya,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Ya.forEach(t),Cm=h(Bt),oo=a(Bt,"P",{});var Za=i(oo);Om=s(Za,"This is the configuration class to store the configuration of a "),ka=a(Za,"A",{href:!0});var qk=i(ka);Pm=s(qk,"LongformerModel"),qk.forEach(t),Nm=s(Za,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),ws=a(Za,"A",{href:!0,rel:!0});var jk=i(ws);Am=s(jk,"allenai/longformer-base-4096"),jk.forEach(t),Im=s(Za,` architecture with a sequence
length 4,096.`),Za.forEach(t),Dm=h(Bt),no=a(Bt,"P",{});var ei=i(no);Sm=s(ei,"The "),ba=a(ei,"A",{href:!0});var Ck=i(ba);Bm=s(Ck,"LongformerConfig"),Ck.forEach(t),Wm=s(ei," class directly inherits "),va=a(ei,"A",{href:!0});var Ok=i(va);Qm=s(Ok,"RobertaConfig"),Ok.forEach(t),Um=s(ei,`. It reuses the same defaults. Please check the
parent class for more information.`),ei.forEach(t),Hm=h(Bt),y(an.$$.fragment,Bt),Bt.forEach(t),Zd=h(o),so=a(o,"H2",{class:!0});var Kc=i(so);ln=a(Kc,"A",{id:!0,class:!0,href:!0});var Pk=i(ln);qi=a(Pk,"SPAN",{});var Nk=i(qi);y(ks.$$.fragment,Nk),Nk.forEach(t),Pk.forEach(t),Rm=h(Kc),ji=a(Kc,"SPAN",{});var Ak=i(ji);Km=s(Ak,"LongformerTokenizer"),Ak.forEach(t),Kc.forEach(t),ec=h(o),Ot=a(o,"DIV",{class:!0});var ti=i(Ot);y(bs.$$.fragment,ti),Vm=h(ti),Ci=a(ti,"P",{});var Ik=i(Ci);Gm=s(Ik,"Construct a Longformer tokenizer."),Ik.forEach(t),Jm=h(ti),dn=a(ti,"P",{});var Md=i(dn);ya=a(Md,"A",{href:!0});var Dk=i(ya);Xm=s(Dk,"LongformerTokenizer"),Dk.forEach(t),Ym=s(Md," is identical to "),Ta=a(Md,"A",{href:!0});var Sk=i(Ta);Zm=s(Sk,"RobertaTokenizer"),Sk.forEach(t),ep=s(Md,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Md.forEach(t),ti.forEach(t),tc=h(o),ro=a(o,"H2",{class:!0});var Vc=i(ro);cn=a(Vc,"A",{id:!0,class:!0,href:!0});var Bk=i(cn);Oi=a(Bk,"SPAN",{});var Wk=i(Oi);y(vs.$$.fragment,Wk),Wk.forEach(t),Bk.forEach(t),tp=h(Vc),Pi=a(Vc,"SPAN",{});var Qk=i(Pi);op=s(Qk,"LongformerTokenizerFast"),Qk.forEach(t),Vc.forEach(t),oc=h(o),Pt=a(o,"DIV",{class:!0});var oi=i(Pt);y(ys.$$.fragment,oi),np=h(oi),Ts=a(oi,"P",{});var Gc=i(Ts);sp=s(Gc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),Ni=a(Gc,"EM",{});var Uk=i(Ni);rp=s(Uk,"tokenizers"),Uk.forEach(t),ap=s(Gc," library)."),Gc.forEach(t),ip=h(oi),hn=a(oi,"P",{});var Ed=i(hn);$a=a(Ed,"A",{href:!0});var Hk=i($a);lp=s(Hk,"LongformerTokenizerFast"),Hk.forEach(t),dp=s(Ed," is identical to "),La=a(Ed,"A",{href:!0});var Rk=i(La);cp=s(Rk,"RobertaTokenizerFast"),Rk.forEach(t),hp=s(Ed,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Ed.forEach(t),oi.forEach(t),nc=h(o),ao=a(o,"H2",{class:!0});var Jc=i(ao);mn=a(Jc,"A",{id:!0,class:!0,href:!0});var Kk=i(mn);Ai=a(Kk,"SPAN",{});var Vk=i(Ai);y($s.$$.fragment,Vk),Vk.forEach(t),Kk.forEach(t),mp=h(Jc),Ii=a(Jc,"SPAN",{});var Gk=i(Ii);pp=s(Gk,"Longformer specific outputs"),Gk.forEach(t),Jc.forEach(t),sc=h(o),io=a(o,"DIV",{class:!0});var Xc=i(io);y(Ls.$$.fragment,Xc),fp=h(Xc),Di=a(Xc,"P",{});var Jk=i(Di);gp=s(Jk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Jk.forEach(t),Xc.forEach(t),rc=h(o),lo=a(o,"DIV",{class:!0});var Yc=i(lo);y(xs.$$.fragment,Yc),up=h(Yc),Si=a(Yc,"P",{});var Xk=i(Si);_p=s(Xk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Xk.forEach(t),Yc.forEach(t),ac=h(o),co=a(o,"DIV",{class:!0});var Zc=i(co);y(Fs.$$.fragment,Zc),wp=h(Zc),Bi=a(Zc,"P",{});var Yk=i(Bi);kp=s(Yk,"Base class for masked language models outputs."),Yk.forEach(t),Zc.forEach(t),ic=h(o),ho=a(o,"DIV",{class:!0});var eh=i(ho);y(Ms.$$.fragment,eh),bp=h(eh),Wi=a(eh,"P",{});var Zk=i(Wi);vp=s(Zk,"Base class for outputs of question answering Longformer models."),Zk.forEach(t),eh.forEach(t),lc=h(o),mo=a(o,"DIV",{class:!0});var th=i(mo);y(Es.$$.fragment,th),yp=h(th),Qi=a(th,"P",{});var eb=i(Qi);Tp=s(eb,"Base class for outputs of sentence classification models."),eb.forEach(t),th.forEach(t),dc=h(o),po=a(o,"DIV",{class:!0});var oh=i(po);y(zs.$$.fragment,oh),$p=h(oh),Ui=a(oh,"P",{});var tb=i(Ui);Lp=s(tb,"Base class for outputs of multiple choice Longformer models."),tb.forEach(t),oh.forEach(t),cc=h(o),fo=a(o,"DIV",{class:!0});var nh=i(fo);y(qs.$$.fragment,nh),xp=h(nh),Hi=a(nh,"P",{});var ob=i(Hi);Fp=s(ob,"Base class for outputs of token classification models."),ob.forEach(t),nh.forEach(t),hc=h(o),go=a(o,"DIV",{class:!0});var sh=i(go);y(js.$$.fragment,sh),Mp=h(sh),Ri=a(sh,"P",{});var nb=i(Ri);Ep=s(nb,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),nb.forEach(t),sh.forEach(t),mc=h(o),uo=a(o,"DIV",{class:!0});var rh=i(uo);y(Cs.$$.fragment,rh),zp=h(rh),Ki=a(rh,"P",{});var sb=i(Ki);qp=s(sb,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),sb.forEach(t),rh.forEach(t),pc=h(o),_o=a(o,"DIV",{class:!0});var ah=i(_o);y(Os.$$.fragment,ah),jp=h(ah),Vi=a(ah,"P",{});var rb=i(Vi);Cp=s(rb,"Base class for masked language models outputs."),rb.forEach(t),ah.forEach(t),fc=h(o),wo=a(o,"DIV",{class:!0});var ih=i(wo);y(Ps.$$.fragment,ih),Op=h(ih),Gi=a(ih,"P",{});var ab=i(Gi);Pp=s(ab,"Base class for outputs of question answering Longformer models."),ab.forEach(t),ih.forEach(t),gc=h(o),ko=a(o,"DIV",{class:!0});var lh=i(ko);y(Ns.$$.fragment,lh),Np=h(lh),Ji=a(lh,"P",{});var ib=i(Ji);Ap=s(ib,"Base class for outputs of sentence classification models."),ib.forEach(t),lh.forEach(t),uc=h(o),bo=a(o,"DIV",{class:!0});var dh=i(bo);y(As.$$.fragment,dh),Ip=h(dh),Xi=a(dh,"P",{});var lb=i(Xi);Dp=s(lb,"Base class for outputs of multiple choice models."),lb.forEach(t),dh.forEach(t),_c=h(o),vo=a(o,"DIV",{class:!0});var ch=i(vo);y(Is.$$.fragment,ch),Sp=h(ch),Yi=a(ch,"P",{});var db=i(Yi);Bp=s(db,"Base class for outputs of token classification models."),db.forEach(t),ch.forEach(t),wc=h(o),yo=a(o,"H2",{class:!0});var hh=i(yo);pn=a(hh,"A",{id:!0,class:!0,href:!0});var cb=i(pn);Zi=a(cb,"SPAN",{});var hb=i(Zi);y(Ds.$$.fragment,hb),hb.forEach(t),cb.forEach(t),Wp=h(hh),el=a(hh,"SPAN",{});var mb=i(el);Qp=s(mb,"LongformerModel"),mb.forEach(t),hh.forEach(t),kc=h(o),et=a(o,"DIV",{class:!0});var yt=i(et);y(Ss.$$.fragment,yt),Up=h(yt),tl=a(yt,"P",{});var pb=i(tl);Hp=s(pb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),pb.forEach(t),Rp=h(yt),Bs=a(yt,"P",{});var mh=i(Bs);Kp=s(mh,"This model inherits from "),xa=a(mh,"A",{href:!0});var fb=i(xa);Vp=s(fb,"PreTrainedModel"),fb.forEach(t),Gp=s(mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mh.forEach(t),Jp=h(yt),Ws=a(yt,"P",{});var ph=i(Ws);Xp=s(ph,"This model is also a PyTorch "),Qs=a(ph,"A",{href:!0,rel:!0});var gb=i(Qs);Yp=s(gb,"torch.nn.Module"),gb.forEach(t),Zp=s(ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph.forEach(t),ef=h(yt),To=a(yt,"P",{});var ni=i(To);tf=s(ni,"This class copied code from "),Fa=a(ni,"A",{href:!0});var ub=i(Fa);of=s(ub,"RobertaModel"),ub.forEach(t),nf=s(ni,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Us=a(ni,"A",{href:!0,rel:!0});var _b=i(Us);sf=s(_b,`Longformer:
the Long-Document Transformer`),_b.forEach(t),rf=s(ni,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),ni.forEach(t),af=h(yt),Hs=a(yt,"P",{});var fh=i(Hs);lf=s(fh,"The self-attention module "),ol=a(fh,"CODE",{});var wb=i(ol);df=s(wb,"LongformerSelfAttention"),wb.forEach(t),cf=s(fh,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),fh.forEach(t),hf=h(yt),$t=a(yt,"DIV",{class:!0});var ds=i($t);y(Rs.$$.fragment,ds),mf=h(ds),$o=a(ds,"P",{});var si=i($o);pf=s(si,"The "),Ma=a(si,"A",{href:!0});var kb=i(Ma);ff=s(kb,"LongformerModel"),kb.forEach(t),gf=s(si," forward method, overrides the "),nl=a(si,"CODE",{});var bb=i(nl);uf=s(bb,"__call__"),bb.forEach(t),_f=s(si," special method."),si.forEach(t),wf=h(ds),y(fn.$$.fragment,ds),kf=h(ds),y(gn.$$.fragment,ds),ds.forEach(t),yt.forEach(t),bc=h(o),Lo=a(o,"H2",{class:!0});var gh=i(Lo);un=a(gh,"A",{id:!0,class:!0,href:!0});var vb=i(un);sl=a(vb,"SPAN",{});var yb=i(sl);y(Ks.$$.fragment,yb),yb.forEach(t),vb.forEach(t),bf=h(gh),rl=a(gh,"SPAN",{});var Tb=i(rl);vf=s(Tb,"LongformerForMaskedLM"),Tb.forEach(t),gh.forEach(t),vc=h(o),ht=a(o,"DIV",{class:!0});var Wt=i(ht);y(Vs.$$.fragment,Wt),yf=h(Wt),Gs=a(Wt,"P",{});var uh=i(Gs);Tf=s(uh,"Longformer Model with a "),al=a(uh,"CODE",{});var $b=i(al);$f=s($b,"language modeling"),$b.forEach(t),Lf=s(uh," head on top."),uh.forEach(t),xf=h(Wt),Js=a(Wt,"P",{});var _h=i(Js);Ff=s(_h,"This model inherits from "),Ea=a(_h,"A",{href:!0});var Lb=i(Ea);Mf=s(Lb,"PreTrainedModel"),Lb.forEach(t),Ef=s(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),zf=h(Wt),Xs=a(Wt,"P",{});var wh=i(Xs);qf=s(wh,"This model is also a PyTorch "),Ys=a(wh,"A",{href:!0,rel:!0});var xb=i(Ys);jf=s(xb,"torch.nn.Module"),xb.forEach(t),Cf=s(wh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh.forEach(t),Of=h(Wt),lt=a(Wt,"DIV",{class:!0});var Mt=i(lt);y(Zs.$$.fragment,Mt),Pf=h(Mt),xo=a(Mt,"P",{});var ri=i(xo);Nf=s(ri,"The "),za=a(ri,"A",{href:!0});var Fb=i(za);Af=s(Fb,"LongformerForMaskedLM"),Fb.forEach(t),If=s(ri," forward method, overrides the "),il=a(ri,"CODE",{});var Mb=i(il);Df=s(Mb,"__call__"),Mb.forEach(t),Sf=s(ri," special method."),ri.forEach(t),Bf=h(Mt),y(_n.$$.fragment,Mt),Wf=h(Mt),y(wn.$$.fragment,Mt),Qf=h(Mt),ll=a(Mt,"P",{});var Eb=i(ll);Uf=s(Eb,"Let\u2019s try a very long input."),Eb.forEach(t),Hf=h(Mt),y(kn.$$.fragment,Mt),Mt.forEach(t),Wt.forEach(t),yc=h(o),Fo=a(o,"H2",{class:!0});var kh=i(Fo);bn=a(kh,"A",{id:!0,class:!0,href:!0});var zb=i(bn);dl=a(zb,"SPAN",{});var qb=i(dl);y(er.$$.fragment,qb),qb.forEach(t),zb.forEach(t),Rf=h(kh),cl=a(kh,"SPAN",{});var jb=i(cl);Kf=s(jb,"LongformerForSequenceClassification"),jb.forEach(t),kh.forEach(t),Tc=h(o),mt=a(o,"DIV",{class:!0});var Qt=i(mt);y(tr.$$.fragment,Qt),Vf=h(Qt),hl=a(Qt,"P",{});var Cb=i(hl);Gf=s(Cb,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Cb.forEach(t),Jf=h(Qt),or=a(Qt,"P",{});var bh=i(or);Xf=s(bh,"This model inherits from "),qa=a(bh,"A",{href:!0});var Ob=i(qa);Yf=s(Ob,"PreTrainedModel"),Ob.forEach(t),Zf=s(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),eg=h(Qt),nr=a(Qt,"P",{});var vh=i(nr);tg=s(vh,"This model is also a PyTorch "),sr=a(vh,"A",{href:!0,rel:!0});var Pb=i(sr);og=s(Pb,"torch.nn.Module"),Pb.forEach(t),ng=s(vh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vh.forEach(t),sg=h(Qt),tt=a(Qt,"DIV",{class:!0});var Tt=i(tt);y(rr.$$.fragment,Tt),rg=h(Tt),Mo=a(Tt,"P",{});var ai=i(Mo);ag=s(ai,"The "),ja=a(ai,"A",{href:!0});var Nb=i(ja);ig=s(Nb,"LongformerForSequenceClassification"),Nb.forEach(t),lg=s(ai," forward method, overrides the "),ml=a(ai,"CODE",{});var Ab=i(ml);dg=s(Ab,"__call__"),Ab.forEach(t),cg=s(ai," special method."),ai.forEach(t),hg=h(Tt),y(vn.$$.fragment,Tt),mg=h(Tt),y(yn.$$.fragment,Tt),pg=h(Tt),y(Tn.$$.fragment,Tt),fg=h(Tt),y($n.$$.fragment,Tt),gg=h(Tt),y(Ln.$$.fragment,Tt),Tt.forEach(t),Qt.forEach(t),$c=h(o),Eo=a(o,"H2",{class:!0});var yh=i(Eo);xn=a(yh,"A",{id:!0,class:!0,href:!0});var Ib=i(xn);pl=a(Ib,"SPAN",{});var Db=i(pl);y(ar.$$.fragment,Db),Db.forEach(t),Ib.forEach(t),ug=h(yh),fl=a(yh,"SPAN",{});var Sb=i(fl);_g=s(Sb,"LongformerForMultipleChoice"),Sb.forEach(t),yh.forEach(t),Lc=h(o),pt=a(o,"DIV",{class:!0});var Ut=i(pt);y(ir.$$.fragment,Ut),wg=h(Ut),gl=a(Ut,"P",{});var Bb=i(gl);kg=s(Bb,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Bb.forEach(t),bg=h(Ut),lr=a(Ut,"P",{});var Th=i(lr);vg=s(Th,"This model inherits from "),Ca=a(Th,"A",{href:!0});var Wb=i(Ca);yg=s(Wb,"PreTrainedModel"),Wb.forEach(t),Tg=s(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),$g=h(Ut),dr=a(Ut,"P",{});var $h=i(dr);Lg=s($h,"This model is also a PyTorch "),cr=a($h,"A",{href:!0,rel:!0});var Qb=i(cr);xg=s(Qb,"torch.nn.Module"),Qb.forEach(t),Fg=s($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),Mg=h(Ut),Lt=a(Ut,"DIV",{class:!0});var cs=i(Lt);y(hr.$$.fragment,cs),Eg=h(cs),zo=a(cs,"P",{});var ii=i(zo);zg=s(ii,"The "),Oa=a(ii,"A",{href:!0});var Ub=i(Oa);qg=s(Ub,"LongformerForMultipleChoice"),Ub.forEach(t),jg=s(ii," forward method, overrides the "),ul=a(ii,"CODE",{});var Hb=i(ul);Cg=s(Hb,"__call__"),Hb.forEach(t),Og=s(ii," special method."),ii.forEach(t),Pg=h(cs),y(Fn.$$.fragment,cs),Ng=h(cs),y(Mn.$$.fragment,cs),cs.forEach(t),Ut.forEach(t),xc=h(o),qo=a(o,"H2",{class:!0});var Lh=i(qo);En=a(Lh,"A",{id:!0,class:!0,href:!0});var Rb=i(En);_l=a(Rb,"SPAN",{});var Kb=i(_l);y(mr.$$.fragment,Kb),Kb.forEach(t),Rb.forEach(t),Ag=h(Lh),wl=a(Lh,"SPAN",{});var Vb=i(wl);Ig=s(Vb,"LongformerForTokenClassification"),Vb.forEach(t),Lh.forEach(t),Fc=h(o),ft=a(o,"DIV",{class:!0});var Ht=i(ft);y(pr.$$.fragment,Ht),Dg=h(Ht),kl=a(Ht,"P",{});var Gb=i(kl);Sg=s(Gb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Gb.forEach(t),Bg=h(Ht),fr=a(Ht,"P",{});var xh=i(fr);Wg=s(xh,"This model inherits from "),Pa=a(xh,"A",{href:!0});var Jb=i(Pa);Qg=s(Jb,"PreTrainedModel"),Jb.forEach(t),Ug=s(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),Hg=h(Ht),gr=a(Ht,"P",{});var Fh=i(gr);Rg=s(Fh,"This model is also a PyTorch "),ur=a(Fh,"A",{href:!0,rel:!0});var Xb=i(ur);Kg=s(Xb,"torch.nn.Module"),Xb.forEach(t),Vg=s(Fh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fh.forEach(t),Gg=h(Ht),_t=a(Ht,"DIV",{class:!0});var Rt=i(_t);y(_r.$$.fragment,Rt),Jg=h(Rt),jo=a(Rt,"P",{});var li=i(jo);Xg=s(li,"The "),Na=a(li,"A",{href:!0});var Yb=i(Na);Yg=s(Yb,"LongformerForTokenClassification"),Yb.forEach(t),Zg=s(li," forward method, overrides the "),bl=a(li,"CODE",{});var Zb=i(bl);eu=s(Zb,"__call__"),Zb.forEach(t),tu=s(li," special method."),li.forEach(t),ou=h(Rt),y(zn.$$.fragment,Rt),nu=h(Rt),y(qn.$$.fragment,Rt),su=h(Rt),y(jn.$$.fragment,Rt),Rt.forEach(t),Ht.forEach(t),Mc=h(o),Co=a(o,"H2",{class:!0});var Mh=i(Co);Cn=a(Mh,"A",{id:!0,class:!0,href:!0});var ev=i(Cn);vl=a(ev,"SPAN",{});var tv=i(vl);y(wr.$$.fragment,tv),tv.forEach(t),ev.forEach(t),ru=h(Mh),yl=a(Mh,"SPAN",{});var ov=i(yl);au=s(ov,"LongformerForQuestionAnswering"),ov.forEach(t),Mh.forEach(t),Ec=h(o),gt=a(o,"DIV",{class:!0});var Kt=i(gt);y(kr.$$.fragment,Kt),iu=h(Kt),Oo=a(Kt,"P",{});var di=i(Oo);lu=s(di,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),Tl=a(di,"CODE",{});var nv=i(Tl);du=s(nv,"span start logits"),nv.forEach(t),cu=s(di," and "),$l=a(di,"CODE",{});var sv=i($l);hu=s(sv,"span end logits"),sv.forEach(t),mu=s(di,")."),di.forEach(t),pu=h(Kt),br=a(Kt,"P",{});var Eh=i(br);fu=s(Eh,"This model inherits from "),Aa=a(Eh,"A",{href:!0});var rv=i(Aa);gu=s(rv,"PreTrainedModel"),rv.forEach(t),uu=s(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eh.forEach(t),_u=h(Kt),vr=a(Kt,"P",{});var zh=i(vr);wu=s(zh,"This model is also a PyTorch "),yr=a(zh,"A",{href:!0,rel:!0});var av=i(yr);ku=s(av,"torch.nn.Module"),av.forEach(t),bu=s(zh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zh.forEach(t),vu=h(Kt),xt=a(Kt,"DIV",{class:!0});var hs=i(xt);y(Tr.$$.fragment,hs),yu=h(hs),Po=a(hs,"P",{});var ci=i(Po);Tu=s(ci,"The "),Ia=a(ci,"A",{href:!0});var iv=i(Ia);$u=s(iv,"LongformerForQuestionAnswering"),iv.forEach(t),Lu=s(ci," forward method, overrides the "),Ll=a(ci,"CODE",{});var lv=i(Ll);xu=s(lv,"__call__"),lv.forEach(t),Fu=s(ci," special method."),ci.forEach(t),Mu=h(hs),y(On.$$.fragment,hs),Eu=h(hs),y(Pn.$$.fragment,hs),hs.forEach(t),Kt.forEach(t),zc=h(o),No=a(o,"H2",{class:!0});var qh=i(No);Nn=a(qh,"A",{id:!0,class:!0,href:!0});var dv=i(Nn);xl=a(dv,"SPAN",{});var cv=i(xl);y($r.$$.fragment,cv),cv.forEach(t),dv.forEach(t),zu=h(qh),Fl=a(qh,"SPAN",{});var hv=i(Fl);qu=s(hv,"TFLongformerModel"),hv.forEach(t),qh.forEach(t),qc=h(o),Ke=a(o,"DIV",{class:!0});var dt=i(Ke);y(Lr.$$.fragment,dt),ju=h(dt),Ml=a(dt,"P",{});var mv=i(Ml);Cu=s(mv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),mv.forEach(t),Ou=h(dt),xr=a(dt,"P",{});var jh=i(xr);Pu=s(jh,"This model inherits from "),Da=a(jh,"A",{href:!0});var pv=i(Da);Nu=s(pv,"TFPreTrainedModel"),pv.forEach(t),Au=s(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),Iu=h(dt),Fr=a(dt,"P",{});var Ch=i(Fr);Du=s(Ch,"This model is also a "),Mr=a(Ch,"A",{href:!0,rel:!0});var fv=i(Mr);Su=s(fv,"tf.keras.Model"),fv.forEach(t),Bu=s(Ch,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ch.forEach(t),Wu=h(dt),y(An.$$.fragment,dt),Qu=h(dt),Ao=a(dt,"P",{});var hi=i(Ao);Uu=s(hi,"This class copies code from "),Sa=a(hi,"A",{href:!0});var gv=i(Sa);Hu=s(gv,"TFRobertaModel"),gv.forEach(t),Ru=s(hi,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Er=a(hi,"A",{href:!0,rel:!0});var uv=i(Er);Ku=s(uv,"Longformer: the Long-Document Transformer"),uv.forEach(t),Vu=s(hi,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),hi.forEach(t),Gu=h(dt),zr=a(dt,"P",{});var Oh=i(zr);Ju=s(Oh,"The self-attention module "),El=a(Oh,"CODE",{});var _v=i(El);Xu=s(_v,"TFLongformerSelfAttention"),_v.forEach(t),Yu=s(Oh,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Oh.forEach(t),Zu=h(dt),Dt=a(dt,"DIV",{class:!0});var mi=i(Dt);y(qr.$$.fragment,mi),e_=h(mi),Io=a(mi,"P",{});var pi=i(Io);t_=s(pi,"The "),Ba=a(pi,"A",{href:!0});var wv=i(Ba);o_=s(wv,"TFLongformerModel"),wv.forEach(t),n_=s(pi," forward method, overrides the "),zl=a(pi,"CODE",{});var kv=i(zl);s_=s(kv,"__call__"),kv.forEach(t),r_=s(pi," special method."),pi.forEach(t),a_=h(mi),y(In.$$.fragment,mi),mi.forEach(t),dt.forEach(t),jc=h(o),Do=a(o,"H2",{class:!0});var Ph=i(Do);Dn=a(Ph,"A",{id:!0,class:!0,href:!0});var bv=i(Dn);ql=a(bv,"SPAN",{});var vv=i(ql);y(jr.$$.fragment,vv),vv.forEach(t),bv.forEach(t),i_=h(Ph),jl=a(Ph,"SPAN",{});var yv=i(jl);l_=s(yv,"TFLongformerForMaskedLM"),yv.forEach(t),Ph.forEach(t),Cc=h(o),nt=a(o,"DIV",{class:!0});var Et=i(nt);y(Cr.$$.fragment,Et),d_=h(Et),Or=a(Et,"P",{});var Nh=i(Or);c_=s(Nh,"Longformer Model with a "),Cl=a(Nh,"CODE",{});var Tv=i(Cl);h_=s(Tv,"language modeling"),Tv.forEach(t),m_=s(Nh," head on top."),Nh.forEach(t),p_=h(Et),Pr=a(Et,"P",{});var Ah=i(Pr);f_=s(Ah,"This model inherits from "),Wa=a(Ah,"A",{href:!0});var $v=i(Wa);g_=s($v,"TFPreTrainedModel"),$v.forEach(t),u_=s(Ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ah.forEach(t),__=h(Et),Nr=a(Et,"P",{});var Ih=i(Nr);w_=s(Ih,"This model is also a "),Ar=a(Ih,"A",{href:!0,rel:!0});var Lv=i(Ar);k_=s(Lv,"tf.keras.Model"),Lv.forEach(t),b_=s(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),v_=h(Et),y(Sn.$$.fragment,Et),y_=h(Et),wt=a(Et,"DIV",{class:!0});var Vt=i(wt);y(Ir.$$.fragment,Vt),T_=h(Vt),So=a(Vt,"P",{});var fi=i(So);$_=s(fi,"The "),Qa=a(fi,"A",{href:!0});var xv=i(Qa);L_=s(xv,"TFLongformerForMaskedLM"),xv.forEach(t),x_=s(fi," forward method, overrides the "),Ol=a(fi,"CODE",{});var Fv=i(Ol);F_=s(Fv,"__call__"),Fv.forEach(t),M_=s(fi," special method."),fi.forEach(t),E_=h(Vt),y(Bn.$$.fragment,Vt),z_=h(Vt),y(Wn.$$.fragment,Vt),q_=h(Vt),y(Qn.$$.fragment,Vt),Vt.forEach(t),Et.forEach(t),Oc=h(o),Bo=a(o,"H2",{class:!0});var Dh=i(Bo);Un=a(Dh,"A",{id:!0,class:!0,href:!0});var Mv=i(Un);Pl=a(Mv,"SPAN",{});var Ev=i(Pl);y(Dr.$$.fragment,Ev),Ev.forEach(t),Mv.forEach(t),j_=h(Dh),Nl=a(Dh,"SPAN",{});var zv=i(Nl);C_=s(zv,"TFLongformerForQuestionAnswering"),zv.forEach(t),Dh.forEach(t),Pc=h(o),st=a(o,"DIV",{class:!0});var zt=i(st);y(Sr.$$.fragment,zt),O_=h(zt),Wo=a(zt,"P",{});var gi=i(Wo);P_=s(gi,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),Al=a(gi,"CODE",{});var qv=i(Al);N_=s(qv,"span start logits"),qv.forEach(t),A_=s(gi," and "),Il=a(gi,"CODE",{});var jv=i(Il);I_=s(jv,"span end logits"),jv.forEach(t),D_=s(gi,")."),gi.forEach(t),S_=h(zt),Br=a(zt,"P",{});var Sh=i(Br);B_=s(Sh,"This model inherits from "),Ua=a(Sh,"A",{href:!0});var Cv=i(Ua);W_=s(Cv,"TFPreTrainedModel"),Cv.forEach(t),Q_=s(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),U_=h(zt),Wr=a(zt,"P",{});var Bh=i(Wr);H_=s(Bh,"This model is also a "),Qr=a(Bh,"A",{href:!0,rel:!0});var Ov=i(Qr);R_=s(Ov,"tf.keras.Model"),Ov.forEach(t),K_=s(Bh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bh.forEach(t),V_=h(zt),y(Hn.$$.fragment,zt),G_=h(zt),kt=a(zt,"DIV",{class:!0});var Gt=i(kt);y(Ur.$$.fragment,Gt),J_=h(Gt),Qo=a(Gt,"P",{});var ui=i(Qo);X_=s(ui,"The "),Ha=a(ui,"A",{href:!0});var Pv=i(Ha);Y_=s(Pv,"TFLongformerForQuestionAnswering"),Pv.forEach(t),Z_=s(ui," forward method, overrides the "),Dl=a(ui,"CODE",{});var Nv=i(Dl);ew=s(Nv,"__call__"),Nv.forEach(t),tw=s(ui," special method."),ui.forEach(t),ow=h(Gt),y(Rn.$$.fragment,Gt),nw=h(Gt),y(Kn.$$.fragment,Gt),sw=h(Gt),y(Vn.$$.fragment,Gt),Gt.forEach(t),zt.forEach(t),Nc=h(o),Uo=a(o,"H2",{class:!0});var Wh=i(Uo);Gn=a(Wh,"A",{id:!0,class:!0,href:!0});var Av=i(Gn);Sl=a(Av,"SPAN",{});var Iv=i(Sl);y(Hr.$$.fragment,Iv),Iv.forEach(t),Av.forEach(t),rw=h(Wh),Bl=a(Wh,"SPAN",{});var Dv=i(Bl);aw=s(Dv,"TFLongformerForSequenceClassification"),Dv.forEach(t),Wh.forEach(t),Ac=h(o),rt=a(o,"DIV",{class:!0});var qt=i(rt);y(Rr.$$.fragment,qt),iw=h(qt),Wl=a(qt,"P",{});var Sv=i(Wl);lw=s(Sv,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Sv.forEach(t),dw=h(qt),Kr=a(qt,"P",{});var Qh=i(Kr);cw=s(Qh,"This model inherits from "),Ra=a(Qh,"A",{href:!0});var Bv=i(Ra);hw=s(Bv,"TFPreTrainedModel"),Bv.forEach(t),mw=s(Qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh.forEach(t),pw=h(qt),Vr=a(qt,"P",{});var Uh=i(Vr);fw=s(Uh,"This model is also a "),Gr=a(Uh,"A",{href:!0,rel:!0});var Wv=i(Gr);gw=s(Wv,"tf.keras.Model"),Wv.forEach(t),uw=s(Uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),_w=h(qt),y(Jn.$$.fragment,qt),ww=h(qt),bt=a(qt,"DIV",{class:!0});var Jt=i(bt);y(Jr.$$.fragment,Jt),kw=h(Jt),Ho=a(Jt,"P",{});var _i=i(Ho);bw=s(_i,"The "),Ka=a(_i,"A",{href:!0});var Qv=i(Ka);vw=s(Qv,"TFLongformerForSequenceClassification"),Qv.forEach(t),yw=s(_i," forward method, overrides the "),Ql=a(_i,"CODE",{});var Uv=i(Ql);Tw=s(Uv,"__call__"),Uv.forEach(t),$w=s(_i," special method."),_i.forEach(t),Lw=h(Jt),y(Xn.$$.fragment,Jt),xw=h(Jt),y(Yn.$$.fragment,Jt),Fw=h(Jt),y(Zn.$$.fragment,Jt),Jt.forEach(t),qt.forEach(t),Ic=h(o),Ro=a(o,"H2",{class:!0});var Hh=i(Ro);es=a(Hh,"A",{id:!0,class:!0,href:!0});var Hv=i(es);Ul=a(Hv,"SPAN",{});var Rv=i(Ul);y(Xr.$$.fragment,Rv),Rv.forEach(t),Hv.forEach(t),Mw=h(Hh),Hl=a(Hh,"SPAN",{});var Kv=i(Hl);Ew=s(Kv,"TFLongformerForTokenClassification"),Kv.forEach(t),Hh.forEach(t),Dc=h(o),at=a(o,"DIV",{class:!0});var jt=i(at);y(Yr.$$.fragment,jt),zw=h(jt),Rl=a(jt,"P",{});var Vv=i(Rl);qw=s(Vv,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Vv.forEach(t),jw=h(jt),Zr=a(jt,"P",{});var Rh=i(Zr);Cw=s(Rh,"This model inherits from "),Va=a(Rh,"A",{href:!0});var Gv=i(Va);Ow=s(Gv,"TFPreTrainedModel"),Gv.forEach(t),Pw=s(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),Nw=h(jt),ea=a(jt,"P",{});var Kh=i(ea);Aw=s(Kh,"This model is also a "),ta=a(Kh,"A",{href:!0,rel:!0});var Jv=i(ta);Iw=s(Jv,"tf.keras.Model"),Jv.forEach(t),Dw=s(Kh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kh.forEach(t),Sw=h(jt),y(ts.$$.fragment,jt),Bw=h(jt),vt=a(jt,"DIV",{class:!0});var Xt=i(vt);y(oa.$$.fragment,Xt),Ww=h(Xt),Ko=a(Xt,"P",{});var wi=i(Ko);Qw=s(wi,"The "),Ga=a(wi,"A",{href:!0});var Xv=i(Ga);Uw=s(Xv,"TFLongformerForTokenClassification"),Xv.forEach(t),Hw=s(wi," forward method, overrides the "),Kl=a(wi,"CODE",{});var Yv=i(Kl);Rw=s(Yv,"__call__"),Yv.forEach(t),Kw=s(wi," special method."),wi.forEach(t),Vw=h(Xt),y(os.$$.fragment,Xt),Gw=h(Xt),y(ns.$$.fragment,Xt),Jw=h(Xt),y(ss.$$.fragment,Xt),Xt.forEach(t),jt.forEach(t),Sc=h(o),Vo=a(o,"H2",{class:!0});var Vh=i(Vo);rs=a(Vh,"A",{id:!0,class:!0,href:!0});var Zv=i(rs);Vl=a(Zv,"SPAN",{});var ey=i(Vl);y(na.$$.fragment,ey),ey.forEach(t),Zv.forEach(t),Xw=h(Vh),Gl=a(Vh,"SPAN",{});var ty=i(Gl);Yw=s(ty,"TFLongformerForMultipleChoice"),ty.forEach(t),Vh.forEach(t),Bc=h(o),it=a(o,"DIV",{class:!0});var Ct=i(it);y(sa.$$.fragment,Ct),Zw=h(Ct),Jl=a(Ct,"P",{});var oy=i(Jl);ek=s(oy,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),oy.forEach(t),tk=h(Ct),ra=a(Ct,"P",{});var Gh=i(ra);ok=s(Gh,"This model inherits from "),Ja=a(Gh,"A",{href:!0});var ny=i(Ja);nk=s(ny,"TFPreTrainedModel"),ny.forEach(t),sk=s(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),rk=h(Ct),aa=a(Ct,"P",{});var Jh=i(aa);ak=s(Jh,"This model is also a "),ia=a(Jh,"A",{href:!0,rel:!0});var sy=i(ia);ik=s(sy,"tf.keras.Model"),sy.forEach(t),lk=s(Jh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jh.forEach(t),dk=h(Ct),y(as.$$.fragment,Ct),ck=h(Ct),Ft=a(Ct,"DIV",{class:!0});var ms=i(Ft);y(la.$$.fragment,ms),hk=h(ms),Go=a(ms,"P",{});var ki=i(Go);mk=s(ki,"The "),Xa=a(ki,"A",{href:!0});var ry=i(Xa);pk=s(ry,"TFLongformerForMultipleChoice"),ry.forEach(t),fk=s(ki," forward method, overrides the "),Xl=a(ki,"CODE",{});var ay=i(Xl);gk=s(ay,"__call__"),ay.forEach(t),uk=s(ki," special method."),ki.forEach(t),_k=h(ms),y(is.$$.fragment,ms),wk=h(ms),y(ls.$$.fragment,ms),ms.forEach(t),Ct.forEach(t),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(sT)),g(_,"id","longformer"),g(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_,"href","#longformer"),g(m,"class","relative group"),g(ie,"id","overview"),g(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ie,"href","#overview"),g(A,"class","relative group"),g(de,"href","https://arxiv.org/pdf/2004.05150.pdf"),g(de,"rel","nofollow"),g(ce,"href","https://huggingface.co/beltagy"),g(ce,"rel","nofollow"),g(Z,"href","https://github.com/allenai/longformer"),g(Z,"rel","nofollow"),g(le,"id","longformer-self-attention"),g(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(le,"href","#longformer-self-attention"),g(re,"class","relative group"),Ae.a=Ie,De.a=K,Se.a=V,zd.a=qd,Cd.a=Od,g(fa,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerModel.forward"),Dd.a=Sd,Bd.a=Wd,Qd.a=Ud,Hd.a=Rd,g(ps,"href","https://arxiv.org/pdf/2004.05150.pdf"),g(ps,"rel","nofollow"),g(sn,"id","training"),g(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(sn,"href","#training"),g(Yt,"class","relative group"),g(ga,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerForMaskedLM"),g(ua,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaForMaskedLM"),g(rn,"id","transformers.LongformerConfig"),g(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(rn,"href","#transformers.LongformerConfig"),g(eo,"class","relative group"),g(_a,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerModel"),g(wa,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.TFLongformerModel"),g(ka,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerModel"),g(ws,"href","https://huggingface.co/allenai/longformer-base-4096"),g(ws,"rel","nofollow"),g(ba,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerConfig"),g(va,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ln,"id","transformers.LongformerTokenizer"),g(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ln,"href","#transformers.LongformerTokenizer"),g(so,"class","relative group"),g(ya,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizer"),g(Ta,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer"),g(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(cn,"id","transformers.LongformerTokenizerFast"),g(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(cn,"href","#transformers.LongformerTokenizerFast"),g(ro,"class","relative group"),g($a,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerTokenizerFast"),g(La,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizerFast"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mn,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),g(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(mn,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),g(ao,"class","relative group"),g(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pn,"id","transformers.LongformerModel"),g(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(pn,"href","#transformers.LongformerModel"),g(yo,"class","relative group"),g(xa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),g(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Qs,"rel","nofollow"),g(Fa,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaModel"),g(Us,"href","https://arxiv.org/abs/2004.05150"),g(Us,"rel","nofollow"),g(Ma,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerModel"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(un,"id","transformers.LongformerForMaskedLM"),g(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(un,"href","#transformers.LongformerForMaskedLM"),g(Lo,"class","relative group"),g(Ea,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),g(Ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ys,"rel","nofollow"),g(za,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerForMaskedLM"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bn,"id","transformers.LongformerForSequenceClassification"),g(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(bn,"href","#transformers.LongformerForSequenceClassification"),g(Fo,"class","relative group"),g(qa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),g(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(sr,"rel","nofollow"),g(ja,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xn,"id","transformers.LongformerForMultipleChoice"),g(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(xn,"href","#transformers.LongformerForMultipleChoice"),g(Eo,"class","relative group"),g(Ca,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),g(cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(cr,"rel","nofollow"),g(Oa,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),g(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(En,"id","transformers.LongformerForTokenClassification"),g(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(En,"href","#transformers.LongformerForTokenClassification"),g(qo,"class","relative group"),g(Pa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),g(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ur,"rel","nofollow"),g(Na,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerForTokenClassification"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Cn,"id","transformers.LongformerForQuestionAnswering"),g(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Cn,"href","#transformers.LongformerForQuestionAnswering"),g(Co,"class","relative group"),g(Aa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),g(yr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(yr,"rel","nofollow"),g(Ia,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),g(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Nn,"id","transformers.TFLongformerModel"),g(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Nn,"href","#transformers.TFLongformerModel"),g(No,"class","relative group"),g(Da,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),g(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Mr,"rel","nofollow"),g(Sa,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.TFRobertaModel"),g(Er,"href","https://arxiv.org/abs/2004.05150"),g(Er,"rel","nofollow"),g(Ba,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.TFLongformerModel"),g(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Dn,"id","transformers.TFLongformerForMaskedLM"),g(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Dn,"href","#transformers.TFLongformerForMaskedLM"),g(Do,"class","relative group"),g(Wa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ar,"rel","nofollow"),g(Qa,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Un,"id","transformers.TFLongformerForQuestionAnswering"),g(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Un,"href","#transformers.TFLongformerForQuestionAnswering"),g(Bo,"class","relative group"),g(Ua,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),g(Qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Qr,"rel","nofollow"),g(Ha,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Gn,"id","transformers.TFLongformerForSequenceClassification"),g(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Gn,"href","#transformers.TFLongformerForSequenceClassification"),g(Uo,"class","relative group"),g(Ra,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),g(Gr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Gr,"rel","nofollow"),g(Ka,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(es,"id","transformers.TFLongformerForTokenClassification"),g(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(es,"href","#transformers.TFLongformerForTokenClassification"),g(Ro,"class","relative group"),g(Va,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),g(ta,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ta,"rel","nofollow"),g(Ga,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rs,"id","transformers.TFLongformerForMultipleChoice"),g(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(rs,"href","#transformers.TFLongformerForMultipleChoice"),g(Vo,"class","relative group"),g(Ja,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),g(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ia,"rel","nofollow"),g(Xa,"href","/docs/transformers/v4.22.2/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),g(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,l),f(o,k,u),f(o,m,u),e(m,_),e(_,b),T(d,b,null),e(m,p),e(m,q),e(q,ke),f(o,pe,u),f(o,A,u),e(A,ie),e(ie,ee),T(F,ee,null),e(A,be),e(A,U),e(U,ve),f(o,fe,u),f(o,D,u),e(D,ye),e(D,de),e(de,G),e(D,Te),f(o,ge,u),f(o,B,u),e(B,$e),f(o,ue,u),f(o,W,u),e(W,he),e(he,Le),f(o,ne,u),f(o,j,u),e(j,O),f(o,_e,u),f(o,Q,u),e(Q,te),e(te,xe),e(te,H),e(H,Fe),e(te,Me),e(te,C),e(C,Ee),e(te,J),e(te,me),e(me,ze),e(te,X),f(o,we,u),f(o,se,u),e(se,I),e(se,ce),e(ce,Y),e(se,qe),e(se,Z),e(Z,P),e(se,je),f(o,N,u),f(o,re,u),e(re,le),e(le,w),T(E,w,null),e(re,We),e(re,oe),e(oe,Qe),f(o,Ne,u),f(o,M,u),e(M,Ue),Ae.m(Ye,M),e(M,Ie),De.m(S,M),e(M,K),Se.m(Ze,M),e(M,V),e(M,Oe),e(Oe,He),e(M,Ce),e(M,Pe),e(Pe,ae),e(M,Re),e(M,bi),e(bi,Xh),e(M,Yh),zd.m(iy,M),e(M,qd),e(M,vi),e(vi,Zh),e(M,em),f(o,jd,u),f(o,At,u),e(At,tm),Cd.m(ly,At),e(At,Od),e(At,yi),e(yi,om),e(At,nm),f(o,Pd,u),f(o,It,u),e(It,sm),e(It,Ti),e(Ti,rm),e(It,am),e(It,$i),e($i,im),e(It,lm),f(o,Nd,u),f(o,tn,u),e(tn,Li),e(Li,dm),e(tn,cm),e(tn,xi),e(xi,hm),f(o,Ad,u),f(o,on,u),e(on,mm),e(on,fa),e(fa,pm),e(on,fm),f(o,Id,u),f(o,ut,u),e(ut,gm),Dd.m(dy,ut),e(ut,Sd),Bd.m(cy,ut),e(ut,Wd),Qd.m(hy,ut),e(ut,Ud),Hd.m(my,ut),e(ut,Rd),f(o,Kd,u),f(o,nn,u),e(nn,um),e(nn,ps),e(ps,_m),e(nn,wm),f(o,Vd,u),f(o,Yt,u),e(Yt,sn),e(sn,Fi),T(fs,Fi,null),e(Yt,km),e(Yt,Mi),e(Mi,bm),f(o,Gd,u),f(o,Zt,u),e(Zt,ga),e(ga,vm),e(Zt,ym),e(Zt,ua),e(ua,Tm),e(Zt,$m),f(o,Jd,u),T(gs,o,u),f(o,Xd,u),f(o,eo,u),e(eo,rn),e(rn,Ei),T(us,Ei,null),e(eo,Lm),e(eo,zi),e(zi,xm),f(o,Yd,u),f(o,ct,u),T(_s,ct,null),e(ct,Fm),e(ct,to),e(to,Mm),e(to,_a),e(_a,Em),e(to,zm),e(to,wa),e(wa,qm),e(to,jm),e(ct,Cm),e(ct,oo),e(oo,Om),e(oo,ka),e(ka,Pm),e(oo,Nm),e(oo,ws),e(ws,Am),e(oo,Im),e(ct,Dm),e(ct,no),e(no,Sm),e(no,ba),e(ba,Bm),e(no,Wm),e(no,va),e(va,Qm),e(no,Um),e(ct,Hm),T(an,ct,null),f(o,Zd,u),f(o,so,u),e(so,ln),e(ln,qi),T(ks,qi,null),e(so,Rm),e(so,ji),e(ji,Km),f(o,ec,u),f(o,Ot,u),T(bs,Ot,null),e(Ot,Vm),e(Ot,Ci),e(Ci,Gm),e(Ot,Jm),e(Ot,dn),e(dn,ya),e(ya,Xm),e(dn,Ym),e(dn,Ta),e(Ta,Zm),e(dn,ep),f(o,tc,u),f(o,ro,u),e(ro,cn),e(cn,Oi),T(vs,Oi,null),e(ro,tp),e(ro,Pi),e(Pi,op),f(o,oc,u),f(o,Pt,u),T(ys,Pt,null),e(Pt,np),e(Pt,Ts),e(Ts,sp),e(Ts,Ni),e(Ni,rp),e(Ts,ap),e(Pt,ip),e(Pt,hn),e(hn,$a),e($a,lp),e(hn,dp),e(hn,La),e(La,cp),e(hn,hp),f(o,nc,u),f(o,ao,u),e(ao,mn),e(mn,Ai),T($s,Ai,null),e(ao,mp),e(ao,Ii),e(Ii,pp),f(o,sc,u),f(o,io,u),T(Ls,io,null),e(io,fp),e(io,Di),e(Di,gp),f(o,rc,u),f(o,lo,u),T(xs,lo,null),e(lo,up),e(lo,Si),e(Si,_p),f(o,ac,u),f(o,co,u),T(Fs,co,null),e(co,wp),e(co,Bi),e(Bi,kp),f(o,ic,u),f(o,ho,u),T(Ms,ho,null),e(ho,bp),e(ho,Wi),e(Wi,vp),f(o,lc,u),f(o,mo,u),T(Es,mo,null),e(mo,yp),e(mo,Qi),e(Qi,Tp),f(o,dc,u),f(o,po,u),T(zs,po,null),e(po,$p),e(po,Ui),e(Ui,Lp),f(o,cc,u),f(o,fo,u),T(qs,fo,null),e(fo,xp),e(fo,Hi),e(Hi,Fp),f(o,hc,u),f(o,go,u),T(js,go,null),e(go,Mp),e(go,Ri),e(Ri,Ep),f(o,mc,u),f(o,uo,u),T(Cs,uo,null),e(uo,zp),e(uo,Ki),e(Ki,qp),f(o,pc,u),f(o,_o,u),T(Os,_o,null),e(_o,jp),e(_o,Vi),e(Vi,Cp),f(o,fc,u),f(o,wo,u),T(Ps,wo,null),e(wo,Op),e(wo,Gi),e(Gi,Pp),f(o,gc,u),f(o,ko,u),T(Ns,ko,null),e(ko,Np),e(ko,Ji),e(Ji,Ap),f(o,uc,u),f(o,bo,u),T(As,bo,null),e(bo,Ip),e(bo,Xi),e(Xi,Dp),f(o,_c,u),f(o,vo,u),T(Is,vo,null),e(vo,Sp),e(vo,Yi),e(Yi,Bp),f(o,wc,u),f(o,yo,u),e(yo,pn),e(pn,Zi),T(Ds,Zi,null),e(yo,Wp),e(yo,el),e(el,Qp),f(o,kc,u),f(o,et,u),T(Ss,et,null),e(et,Up),e(et,tl),e(tl,Hp),e(et,Rp),e(et,Bs),e(Bs,Kp),e(Bs,xa),e(xa,Vp),e(Bs,Gp),e(et,Jp),e(et,Ws),e(Ws,Xp),e(Ws,Qs),e(Qs,Yp),e(Ws,Zp),e(et,ef),e(et,To),e(To,tf),e(To,Fa),e(Fa,of),e(To,nf),e(To,Us),e(Us,sf),e(To,rf),e(et,af),e(et,Hs),e(Hs,lf),e(Hs,ol),e(ol,df),e(Hs,cf),e(et,hf),e(et,$t),T(Rs,$t,null),e($t,mf),e($t,$o),e($o,pf),e($o,Ma),e(Ma,ff),e($o,gf),e($o,nl),e(nl,uf),e($o,_f),e($t,wf),T(fn,$t,null),e($t,kf),T(gn,$t,null),f(o,bc,u),f(o,Lo,u),e(Lo,un),e(un,sl),T(Ks,sl,null),e(Lo,bf),e(Lo,rl),e(rl,vf),f(o,vc,u),f(o,ht,u),T(Vs,ht,null),e(ht,yf),e(ht,Gs),e(Gs,Tf),e(Gs,al),e(al,$f),e(Gs,Lf),e(ht,xf),e(ht,Js),e(Js,Ff),e(Js,Ea),e(Ea,Mf),e(Js,Ef),e(ht,zf),e(ht,Xs),e(Xs,qf),e(Xs,Ys),e(Ys,jf),e(Xs,Cf),e(ht,Of),e(ht,lt),T(Zs,lt,null),e(lt,Pf),e(lt,xo),e(xo,Nf),e(xo,za),e(za,Af),e(xo,If),e(xo,il),e(il,Df),e(xo,Sf),e(lt,Bf),T(_n,lt,null),e(lt,Wf),T(wn,lt,null),e(lt,Qf),e(lt,ll),e(ll,Uf),e(lt,Hf),T(kn,lt,null),f(o,yc,u),f(o,Fo,u),e(Fo,bn),e(bn,dl),T(er,dl,null),e(Fo,Rf),e(Fo,cl),e(cl,Kf),f(o,Tc,u),f(o,mt,u),T(tr,mt,null),e(mt,Vf),e(mt,hl),e(hl,Gf),e(mt,Jf),e(mt,or),e(or,Xf),e(or,qa),e(qa,Yf),e(or,Zf),e(mt,eg),e(mt,nr),e(nr,tg),e(nr,sr),e(sr,og),e(nr,ng),e(mt,sg),e(mt,tt),T(rr,tt,null),e(tt,rg),e(tt,Mo),e(Mo,ag),e(Mo,ja),e(ja,ig),e(Mo,lg),e(Mo,ml),e(ml,dg),e(Mo,cg),e(tt,hg),T(vn,tt,null),e(tt,mg),T(yn,tt,null),e(tt,pg),T(Tn,tt,null),e(tt,fg),T($n,tt,null),e(tt,gg),T(Ln,tt,null),f(o,$c,u),f(o,Eo,u),e(Eo,xn),e(xn,pl),T(ar,pl,null),e(Eo,ug),e(Eo,fl),e(fl,_g),f(o,Lc,u),f(o,pt,u),T(ir,pt,null),e(pt,wg),e(pt,gl),e(gl,kg),e(pt,bg),e(pt,lr),e(lr,vg),e(lr,Ca),e(Ca,yg),e(lr,Tg),e(pt,$g),e(pt,dr),e(dr,Lg),e(dr,cr),e(cr,xg),e(dr,Fg),e(pt,Mg),e(pt,Lt),T(hr,Lt,null),e(Lt,Eg),e(Lt,zo),e(zo,zg),e(zo,Oa),e(Oa,qg),e(zo,jg),e(zo,ul),e(ul,Cg),e(zo,Og),e(Lt,Pg),T(Fn,Lt,null),e(Lt,Ng),T(Mn,Lt,null),f(o,xc,u),f(o,qo,u),e(qo,En),e(En,_l),T(mr,_l,null),e(qo,Ag),e(qo,wl),e(wl,Ig),f(o,Fc,u),f(o,ft,u),T(pr,ft,null),e(ft,Dg),e(ft,kl),e(kl,Sg),e(ft,Bg),e(ft,fr),e(fr,Wg),e(fr,Pa),e(Pa,Qg),e(fr,Ug),e(ft,Hg),e(ft,gr),e(gr,Rg),e(gr,ur),e(ur,Kg),e(gr,Vg),e(ft,Gg),e(ft,_t),T(_r,_t,null),e(_t,Jg),e(_t,jo),e(jo,Xg),e(jo,Na),e(Na,Yg),e(jo,Zg),e(jo,bl),e(bl,eu),e(jo,tu),e(_t,ou),T(zn,_t,null),e(_t,nu),T(qn,_t,null),e(_t,su),T(jn,_t,null),f(o,Mc,u),f(o,Co,u),e(Co,Cn),e(Cn,vl),T(wr,vl,null),e(Co,ru),e(Co,yl),e(yl,au),f(o,Ec,u),f(o,gt,u),T(kr,gt,null),e(gt,iu),e(gt,Oo),e(Oo,lu),e(Oo,Tl),e(Tl,du),e(Oo,cu),e(Oo,$l),e($l,hu),e(Oo,mu),e(gt,pu),e(gt,br),e(br,fu),e(br,Aa),e(Aa,gu),e(br,uu),e(gt,_u),e(gt,vr),e(vr,wu),e(vr,yr),e(yr,ku),e(vr,bu),e(gt,vu),e(gt,xt),T(Tr,xt,null),e(xt,yu),e(xt,Po),e(Po,Tu),e(Po,Ia),e(Ia,$u),e(Po,Lu),e(Po,Ll),e(Ll,xu),e(Po,Fu),e(xt,Mu),T(On,xt,null),e(xt,Eu),T(Pn,xt,null),f(o,zc,u),f(o,No,u),e(No,Nn),e(Nn,xl),T($r,xl,null),e(No,zu),e(No,Fl),e(Fl,qu),f(o,qc,u),f(o,Ke,u),T(Lr,Ke,null),e(Ke,ju),e(Ke,Ml),e(Ml,Cu),e(Ke,Ou),e(Ke,xr),e(xr,Pu),e(xr,Da),e(Da,Nu),e(xr,Au),e(Ke,Iu),e(Ke,Fr),e(Fr,Du),e(Fr,Mr),e(Mr,Su),e(Fr,Bu),e(Ke,Wu),T(An,Ke,null),e(Ke,Qu),e(Ke,Ao),e(Ao,Uu),e(Ao,Sa),e(Sa,Hu),e(Ao,Ru),e(Ao,Er),e(Er,Ku),e(Ao,Vu),e(Ke,Gu),e(Ke,zr),e(zr,Ju),e(zr,El),e(El,Xu),e(zr,Yu),e(Ke,Zu),e(Ke,Dt),T(qr,Dt,null),e(Dt,e_),e(Dt,Io),e(Io,t_),e(Io,Ba),e(Ba,o_),e(Io,n_),e(Io,zl),e(zl,s_),e(Io,r_),e(Dt,a_),T(In,Dt,null),f(o,jc,u),f(o,Do,u),e(Do,Dn),e(Dn,ql),T(jr,ql,null),e(Do,i_),e(Do,jl),e(jl,l_),f(o,Cc,u),f(o,nt,u),T(Cr,nt,null),e(nt,d_),e(nt,Or),e(Or,c_),e(Or,Cl),e(Cl,h_),e(Or,m_),e(nt,p_),e(nt,Pr),e(Pr,f_),e(Pr,Wa),e(Wa,g_),e(Pr,u_),e(nt,__),e(nt,Nr),e(Nr,w_),e(Nr,Ar),e(Ar,k_),e(Nr,b_),e(nt,v_),T(Sn,nt,null),e(nt,y_),e(nt,wt),T(Ir,wt,null),e(wt,T_),e(wt,So),e(So,$_),e(So,Qa),e(Qa,L_),e(So,x_),e(So,Ol),e(Ol,F_),e(So,M_),e(wt,E_),T(Bn,wt,null),e(wt,z_),T(Wn,wt,null),e(wt,q_),T(Qn,wt,null),f(o,Oc,u),f(o,Bo,u),e(Bo,Un),e(Un,Pl),T(Dr,Pl,null),e(Bo,j_),e(Bo,Nl),e(Nl,C_),f(o,Pc,u),f(o,st,u),T(Sr,st,null),e(st,O_),e(st,Wo),e(Wo,P_),e(Wo,Al),e(Al,N_),e(Wo,A_),e(Wo,Il),e(Il,I_),e(Wo,D_),e(st,S_),e(st,Br),e(Br,B_),e(Br,Ua),e(Ua,W_),e(Br,Q_),e(st,U_),e(st,Wr),e(Wr,H_),e(Wr,Qr),e(Qr,R_),e(Wr,K_),e(st,V_),T(Hn,st,null),e(st,G_),e(st,kt),T(Ur,kt,null),e(kt,J_),e(kt,Qo),e(Qo,X_),e(Qo,Ha),e(Ha,Y_),e(Qo,Z_),e(Qo,Dl),e(Dl,ew),e(Qo,tw),e(kt,ow),T(Rn,kt,null),e(kt,nw),T(Kn,kt,null),e(kt,sw),T(Vn,kt,null),f(o,Nc,u),f(o,Uo,u),e(Uo,Gn),e(Gn,Sl),T(Hr,Sl,null),e(Uo,rw),e(Uo,Bl),e(Bl,aw),f(o,Ac,u),f(o,rt,u),T(Rr,rt,null),e(rt,iw),e(rt,Wl),e(Wl,lw),e(rt,dw),e(rt,Kr),e(Kr,cw),e(Kr,Ra),e(Ra,hw),e(Kr,mw),e(rt,pw),e(rt,Vr),e(Vr,fw),e(Vr,Gr),e(Gr,gw),e(Vr,uw),e(rt,_w),T(Jn,rt,null),e(rt,ww),e(rt,bt),T(Jr,bt,null),e(bt,kw),e(bt,Ho),e(Ho,bw),e(Ho,Ka),e(Ka,vw),e(Ho,yw),e(Ho,Ql),e(Ql,Tw),e(Ho,$w),e(bt,Lw),T(Xn,bt,null),e(bt,xw),T(Yn,bt,null),e(bt,Fw),T(Zn,bt,null),f(o,Ic,u),f(o,Ro,u),e(Ro,es),e(es,Ul),T(Xr,Ul,null),e(Ro,Mw),e(Ro,Hl),e(Hl,Ew),f(o,Dc,u),f(o,at,u),T(Yr,at,null),e(at,zw),e(at,Rl),e(Rl,qw),e(at,jw),e(at,Zr),e(Zr,Cw),e(Zr,Va),e(Va,Ow),e(Zr,Pw),e(at,Nw),e(at,ea),e(ea,Aw),e(ea,ta),e(ta,Iw),e(ea,Dw),e(at,Sw),T(ts,at,null),e(at,Bw),e(at,vt),T(oa,vt,null),e(vt,Ww),e(vt,Ko),e(Ko,Qw),e(Ko,Ga),e(Ga,Uw),e(Ko,Hw),e(Ko,Kl),e(Kl,Rw),e(Ko,Kw),e(vt,Vw),T(os,vt,null),e(vt,Gw),T(ns,vt,null),e(vt,Jw),T(ss,vt,null),f(o,Sc,u),f(o,Vo,u),e(Vo,rs),e(rs,Vl),T(na,Vl,null),e(Vo,Xw),e(Vo,Gl),e(Gl,Yw),f(o,Bc,u),f(o,it,u),T(sa,it,null),e(it,Zw),e(it,Jl),e(Jl,ek),e(it,tk),e(it,ra),e(ra,ok),e(ra,Ja),e(Ja,nk),e(ra,sk),e(it,rk),e(it,aa),e(aa,ak),e(aa,ia),e(ia,ik),e(aa,lk),e(it,dk),T(as,it,null),e(it,ck),e(it,Ft),T(la,Ft,null),e(Ft,hk),e(Ft,Go),e(Go,mk),e(Go,Xa),e(Xa,pk),e(Go,fk),e(Go,Xl),e(Xl,gk),e(Go,uk),e(Ft,_k),T(is,Ft,null),e(Ft,wk),T(ls,Ft,null),Wc=!0},p(o,[u]){const da={};u&2&&(da.$$scope={dirty:u,ctx:o}),an.$set(da);const Yl={};u&2&&(Yl.$$scope={dirty:u,ctx:o}),fn.$set(Yl);const Zl={};u&2&&(Zl.$$scope={dirty:u,ctx:o}),gn.$set(Zl);const ed={};u&2&&(ed.$$scope={dirty:u,ctx:o}),_n.$set(ed);const ca={};u&2&&(ca.$$scope={dirty:u,ctx:o}),wn.$set(ca);const td={};u&2&&(td.$$scope={dirty:u,ctx:o}),kn.$set(td);const od={};u&2&&(od.$$scope={dirty:u,ctx:o}),vn.$set(od);const nd={};u&2&&(nd.$$scope={dirty:u,ctx:o}),yn.$set(nd);const ha={};u&2&&(ha.$$scope={dirty:u,ctx:o}),Tn.$set(ha);const sd={};u&2&&(sd.$$scope={dirty:u,ctx:o}),$n.$set(sd);const rd={};u&2&&(rd.$$scope={dirty:u,ctx:o}),Ln.$set(rd);const ad={};u&2&&(ad.$$scope={dirty:u,ctx:o}),Fn.$set(ad);const id={};u&2&&(id.$$scope={dirty:u,ctx:o}),Mn.$set(id);const ld={};u&2&&(ld.$$scope={dirty:u,ctx:o}),zn.$set(ld);const dd={};u&2&&(dd.$$scope={dirty:u,ctx:o}),qn.$set(dd);const Nt={};u&2&&(Nt.$$scope={dirty:u,ctx:o}),jn.$set(Nt);const cd={};u&2&&(cd.$$scope={dirty:u,ctx:o}),On.$set(cd);const hd={};u&2&&(hd.$$scope={dirty:u,ctx:o}),Pn.$set(hd);const md={};u&2&&(md.$$scope={dirty:u,ctx:o}),An.$set(md);const Jo={};u&2&&(Jo.$$scope={dirty:u,ctx:o}),In.$set(Jo);const pd={};u&2&&(pd.$$scope={dirty:u,ctx:o}),Sn.$set(pd);const fd={};u&2&&(fd.$$scope={dirty:u,ctx:o}),Bn.$set(fd);const ma={};u&2&&(ma.$$scope={dirty:u,ctx:o}),Wn.$set(ma);const gd={};u&2&&(gd.$$scope={dirty:u,ctx:o}),Qn.$set(gd);const ud={};u&2&&(ud.$$scope={dirty:u,ctx:o}),Hn.$set(ud);const _d={};u&2&&(_d.$$scope={dirty:u,ctx:o}),Rn.$set(_d);const Ve={};u&2&&(Ve.$$scope={dirty:u,ctx:o}),Kn.$set(Ve);const wd={};u&2&&(wd.$$scope={dirty:u,ctx:o}),Vn.$set(wd);const kd={};u&2&&(kd.$$scope={dirty:u,ctx:o}),Jn.$set(kd);const bd={};u&2&&(bd.$$scope={dirty:u,ctx:o}),Xn.$set(bd);const vd={};u&2&&(vd.$$scope={dirty:u,ctx:o}),Yn.$set(vd);const Xo={};u&2&&(Xo.$$scope={dirty:u,ctx:o}),Zn.$set(Xo);const yd={};u&2&&(yd.$$scope={dirty:u,ctx:o}),ts.$set(yd);const Yo={};u&2&&(Yo.$$scope={dirty:u,ctx:o}),os.$set(Yo);const Td={};u&2&&(Td.$$scope={dirty:u,ctx:o}),ns.$set(Td);const $d={};u&2&&($d.$$scope={dirty:u,ctx:o}),ss.$set($d);const pa={};u&2&&(pa.$$scope={dirty:u,ctx:o}),as.$set(pa);const Ld={};u&2&&(Ld.$$scope={dirty:u,ctx:o}),is.$set(Ld);const xd={};u&2&&(xd.$$scope={dirty:u,ctx:o}),ls.$set(xd)},i(o){Wc||($(d.$$.fragment,o),$(F.$$.fragment,o),$(E.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),$(an.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$($s.$$.fragment,o),$(Ls.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(Os.$$.fragment,o),$(Ps.$$.fragment,o),$(Ns.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(Rs.$$.fragment,o),$(fn.$$.fragment,o),$(gn.$$.fragment,o),$(Ks.$$.fragment,o),$(Vs.$$.fragment,o),$(Zs.$$.fragment,o),$(_n.$$.fragment,o),$(wn.$$.fragment,o),$(kn.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(rr.$$.fragment,o),$(vn.$$.fragment,o),$(yn.$$.fragment,o),$(Tn.$$.fragment,o),$($n.$$.fragment,o),$(Ln.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(hr.$$.fragment,o),$(Fn.$$.fragment,o),$(Mn.$$.fragment,o),$(mr.$$.fragment,o),$(pr.$$.fragment,o),$(_r.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(jn.$$.fragment,o),$(wr.$$.fragment,o),$(kr.$$.fragment,o),$(Tr.$$.fragment,o),$(On.$$.fragment,o),$(Pn.$$.fragment,o),$($r.$$.fragment,o),$(Lr.$$.fragment,o),$(An.$$.fragment,o),$(qr.$$.fragment,o),$(In.$$.fragment,o),$(jr.$$.fragment,o),$(Cr.$$.fragment,o),$(Sn.$$.fragment,o),$(Ir.$$.fragment,o),$(Bn.$$.fragment,o),$(Wn.$$.fragment,o),$(Qn.$$.fragment,o),$(Dr.$$.fragment,o),$(Sr.$$.fragment,o),$(Hn.$$.fragment,o),$(Ur.$$.fragment,o),$(Rn.$$.fragment,o),$(Kn.$$.fragment,o),$(Vn.$$.fragment,o),$(Hr.$$.fragment,o),$(Rr.$$.fragment,o),$(Jn.$$.fragment,o),$(Jr.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(ts.$$.fragment,o),$(oa.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(as.$$.fragment,o),$(la.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),Wc=!0)},o(o){L(d.$$.fragment,o),L(F.$$.fragment,o),L(E.$$.fragment,o),L(fs.$$.fragment,o),L(gs.$$.fragment,o),L(us.$$.fragment,o),L(_s.$$.fragment,o),L(an.$$.fragment,o),L(ks.$$.fragment,o),L(bs.$$.fragment,o),L(vs.$$.fragment,o),L(ys.$$.fragment,o),L($s.$$.fragment,o),L(Ls.$$.fragment,o),L(xs.$$.fragment,o),L(Fs.$$.fragment,o),L(Ms.$$.fragment,o),L(Es.$$.fragment,o),L(zs.$$.fragment,o),L(qs.$$.fragment,o),L(js.$$.fragment,o),L(Cs.$$.fragment,o),L(Os.$$.fragment,o),L(Ps.$$.fragment,o),L(Ns.$$.fragment,o),L(As.$$.fragment,o),L(Is.$$.fragment,o),L(Ds.$$.fragment,o),L(Ss.$$.fragment,o),L(Rs.$$.fragment,o),L(fn.$$.fragment,o),L(gn.$$.fragment,o),L(Ks.$$.fragment,o),L(Vs.$$.fragment,o),L(Zs.$$.fragment,o),L(_n.$$.fragment,o),L(wn.$$.fragment,o),L(kn.$$.fragment,o),L(er.$$.fragment,o),L(tr.$$.fragment,o),L(rr.$$.fragment,o),L(vn.$$.fragment,o),L(yn.$$.fragment,o),L(Tn.$$.fragment,o),L($n.$$.fragment,o),L(Ln.$$.fragment,o),L(ar.$$.fragment,o),L(ir.$$.fragment,o),L(hr.$$.fragment,o),L(Fn.$$.fragment,o),L(Mn.$$.fragment,o),L(mr.$$.fragment,o),L(pr.$$.fragment,o),L(_r.$$.fragment,o),L(zn.$$.fragment,o),L(qn.$$.fragment,o),L(jn.$$.fragment,o),L(wr.$$.fragment,o),L(kr.$$.fragment,o),L(Tr.$$.fragment,o),L(On.$$.fragment,o),L(Pn.$$.fragment,o),L($r.$$.fragment,o),L(Lr.$$.fragment,o),L(An.$$.fragment,o),L(qr.$$.fragment,o),L(In.$$.fragment,o),L(jr.$$.fragment,o),L(Cr.$$.fragment,o),L(Sn.$$.fragment,o),L(Ir.$$.fragment,o),L(Bn.$$.fragment,o),L(Wn.$$.fragment,o),L(Qn.$$.fragment,o),L(Dr.$$.fragment,o),L(Sr.$$.fragment,o),L(Hn.$$.fragment,o),L(Ur.$$.fragment,o),L(Rn.$$.fragment,o),L(Kn.$$.fragment,o),L(Vn.$$.fragment,o),L(Hr.$$.fragment,o),L(Rr.$$.fragment,o),L(Jn.$$.fragment,o),L(Jr.$$.fragment,o),L(Xn.$$.fragment,o),L(Yn.$$.fragment,o),L(Zn.$$.fragment,o),L(Xr.$$.fragment,o),L(Yr.$$.fragment,o),L(ts.$$.fragment,o),L(oa.$$.fragment,o),L(os.$$.fragment,o),L(ns.$$.fragment,o),L(ss.$$.fragment,o),L(na.$$.fragment,o),L(sa.$$.fragment,o),L(as.$$.fragment,o),L(la.$$.fragment,o),L(is.$$.fragment,o),L(ls.$$.fragment,o),Wc=!1},d(o){t(l),o&&t(k),o&&t(m),x(d),o&&t(pe),o&&t(A),x(F),o&&t(fe),o&&t(D),o&&t(ge),o&&t(B),o&&t(ue),o&&t(W),o&&t(ne),o&&t(j),o&&t(_e),o&&t(Q),o&&t(we),o&&t(se),o&&t(N),o&&t(re),x(E),o&&t(Ne),o&&t(M),o&&t(jd),o&&t(At),o&&t(Pd),o&&t(It),o&&t(Nd),o&&t(tn),o&&t(Ad),o&&t(on),o&&t(Id),o&&t(ut),o&&t(Kd),o&&t(nn),o&&t(Vd),o&&t(Yt),x(fs),o&&t(Gd),o&&t(Zt),o&&t(Jd),x(gs,o),o&&t(Xd),o&&t(eo),x(us),o&&t(Yd),o&&t(ct),x(_s),x(an),o&&t(Zd),o&&t(so),x(ks),o&&t(ec),o&&t(Ot),x(bs),o&&t(tc),o&&t(ro),x(vs),o&&t(oc),o&&t(Pt),x(ys),o&&t(nc),o&&t(ao),x($s),o&&t(sc),o&&t(io),x(Ls),o&&t(rc),o&&t(lo),x(xs),o&&t(ac),o&&t(co),x(Fs),o&&t(ic),o&&t(ho),x(Ms),o&&t(lc),o&&t(mo),x(Es),o&&t(dc),o&&t(po),x(zs),o&&t(cc),o&&t(fo),x(qs),o&&t(hc),o&&t(go),x(js),o&&t(mc),o&&t(uo),x(Cs),o&&t(pc),o&&t(_o),x(Os),o&&t(fc),o&&t(wo),x(Ps),o&&t(gc),o&&t(ko),x(Ns),o&&t(uc),o&&t(bo),x(As),o&&t(_c),o&&t(vo),x(Is),o&&t(wc),o&&t(yo),x(Ds),o&&t(kc),o&&t(et),x(Ss),x(Rs),x(fn),x(gn),o&&t(bc),o&&t(Lo),x(Ks),o&&t(vc),o&&t(ht),x(Vs),x(Zs),x(_n),x(wn),x(kn),o&&t(yc),o&&t(Fo),x(er),o&&t(Tc),o&&t(mt),x(tr),x(rr),x(vn),x(yn),x(Tn),x($n),x(Ln),o&&t($c),o&&t(Eo),x(ar),o&&t(Lc),o&&t(pt),x(ir),x(hr),x(Fn),x(Mn),o&&t(xc),o&&t(qo),x(mr),o&&t(Fc),o&&t(ft),x(pr),x(_r),x(zn),x(qn),x(jn),o&&t(Mc),o&&t(Co),x(wr),o&&t(Ec),o&&t(gt),x(kr),x(Tr),x(On),x(Pn),o&&t(zc),o&&t(No),x($r),o&&t(qc),o&&t(Ke),x(Lr),x(An),x(qr),x(In),o&&t(jc),o&&t(Do),x(jr),o&&t(Cc),o&&t(nt),x(Cr),x(Sn),x(Ir),x(Bn),x(Wn),x(Qn),o&&t(Oc),o&&t(Bo),x(Dr),o&&t(Pc),o&&t(st),x(Sr),x(Hn),x(Ur),x(Rn),x(Kn),x(Vn),o&&t(Nc),o&&t(Uo),x(Hr),o&&t(Ac),o&&t(rt),x(Rr),x(Jn),x(Jr),x(Xn),x(Yn),x(Zn),o&&t(Ic),o&&t(Ro),x(Xr),o&&t(Dc),o&&t(at),x(Yr),x(ts),x(oa),x(os),x(ns),x(ss),o&&t(Sc),o&&t(Vo),x(na),o&&t(Bc),o&&t(it),x(sa),x(as),x(la),x(is),x(ls)}}}const sT={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function rT(z){return _y(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mT extends py{constructor(l){super();fy(this,l,rT,nT,gy,{})}}export{mT as default,sT as metadata};
