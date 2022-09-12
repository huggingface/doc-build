import{S as py,i as fy,s as gy,e as a,k as c,w as v,t as n,Y as Zo,M as uy,c as r,d as t,m,a as i,x as y,h as s,Z as en,b as g,G as e,g as f,y as T,q as $,o as L,B as x,v as _y,L as Je}from"../../chunks/vendor-hf-doc-builder.js";import{T as ot}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wy(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerConfig, LongformerModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function ky(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function by(z){let l,k,h,_,b;return _=new We({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){l=a("p"),k=n("Examples:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Examples:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function vy(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function yy(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerTokenizer, LongformerForMaskedLM

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)`}}),{c(){l=a("p"),k=n("Mask filling example:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Mask filling example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function Ty(z){let l,k;return l=new We({props:{code:`TXT = (
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
[<span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;skinny&#x27;</span>, <span class="hljs-string">&#x27;thin&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;vegetarian&#x27;</span>]`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:Je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function $y(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function Ly(z){let l,k,h,_,b;return _=new We({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=a("p"),k=n("Example of single-label classification:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example of single-label classification:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function xy(z){let l,k;return l=new We({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = LongformerForSequenceClassification.from_pretrained("jpwahle/longformer-base-plagiarism-detection", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.44</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:Je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function Fy(z){let l,k,h,_,b;return _=new We({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=a("p"),k=n("Example of multi-label classification:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example of multi-label classification:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function My(z){let l,k;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:Je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function Ey(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function zy(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function qy(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function Cy(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
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
[<span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>]`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function jy(z){let l,k;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.63</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:Je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function Oy(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function Py(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
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
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){l=a("p"),k=n("Examples:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Examples:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function Ny(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,W,$e,ue,B,me,Le,ne,C,O,_e,Q,te,xe,H,Fe,Me,j,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,Ce,N,ae,le;return{c(){l=a("p"),k=n("TensorFlow models and layers in "),h=a("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=a("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Te=n("fit()"),ge=n(" and "),W=a("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),B=a("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=a("ul"),O=a("li"),_e=n("a single Tensor with "),Q=a("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=a("code"),Fe=n("model(input_ids)"),Me=c(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=a("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=a("p"),Ce=n(`Note that when creating models and layers with
`),N=a("a"),ae=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=r(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=r(E,"CODE",{});var Be=i(h);_=s(Be,"transformers"),Be.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=r(w,"UL",{});var oe=i(p);q=r(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=m(oe),A=r(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=m(w),F=r(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),W=r(M,"CODE",{});var Ie=i(W);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),B=r(M,"CODE",{});var De=i(B);me=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),C=r(w,"UL",{});var S=i(C);O=r(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=r(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=r(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=m(S),j=r(S,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(V,"CODE",{});var Oe=i(J);he=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=r(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=m(S),I=r(S,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(je,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),je.forEach(t),S.forEach(t),Z=m(w),P=r(w,"P",{});var re=i(P);Ce=s(re,`Note that when creating models and layers with
`),N=r(re,"A",{href:!0,rel:!0});var Re=i(N);ae=s(Re,"subclassing"),Re.forEach(t),le=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,B),e(B,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,ze),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,ae),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(C),w&&t(Z),w&&t(P)}}}function Ay(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function Iy(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,W,$e,ue,B,me,Le,ne,C,O,_e,Q,te,xe,H,Fe,Me,j,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,Ce,N,ae,le;return{c(){l=a("p"),k=n("TensorFlow models and layers in "),h=a("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=a("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Te=n("fit()"),ge=n(" and "),W=a("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),B=a("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=a("ul"),O=a("li"),_e=n("a single Tensor with "),Q=a("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=a("code"),Fe=n("model(input_ids)"),Me=c(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=a("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=a("p"),Ce=n(`Note that when creating models and layers with
`),N=a("a"),ae=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=r(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=r(E,"CODE",{});var Be=i(h);_=s(Be,"transformers"),Be.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=r(w,"UL",{});var oe=i(p);q=r(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=m(oe),A=r(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=m(w),F=r(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),W=r(M,"CODE",{});var Ie=i(W);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),B=r(M,"CODE",{});var De=i(B);me=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),C=r(w,"UL",{});var S=i(C);O=r(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=r(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=r(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=m(S),j=r(S,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(V,"CODE",{});var Oe=i(J);he=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=r(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=m(S),I=r(S,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(je,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),je.forEach(t),S.forEach(t),Z=m(w),P=r(w,"P",{});var re=i(P);Ce=s(re,`Note that when creating models and layers with
`),N=r(re,"A",{href:!0,rel:!0});var Re=i(N);ae=s(Re,"subclassing"),Re.forEach(t),le=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,B),e(B,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,ze),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,ae),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(C),w&&t(Z),w&&t(P)}}}function Dy(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function Sy(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function Wy(z){let l,k;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.44</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:Je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function By(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,W,$e,ue,B,me,Le,ne,C,O,_e,Q,te,xe,H,Fe,Me,j,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,Ce,N,ae,le;return{c(){l=a("p"),k=n("TensorFlow models and layers in "),h=a("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=a("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Te=n("fit()"),ge=n(" and "),W=a("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),B=a("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=a("ul"),O=a("li"),_e=n("a single Tensor with "),Q=a("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=a("code"),Fe=n("model(input_ids)"),Me=c(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=a("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=a("p"),Ce=n(`Note that when creating models and layers with
`),N=a("a"),ae=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=r(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=r(E,"CODE",{});var Be=i(h);_=s(Be,"transformers"),Be.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=r(w,"UL",{});var oe=i(p);q=r(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=m(oe),A=r(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=m(w),F=r(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),W=r(M,"CODE",{});var Ie=i(W);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),B=r(M,"CODE",{});var De=i(B);me=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),C=r(w,"UL",{});var S=i(C);O=r(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=r(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=r(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=m(S),j=r(S,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(V,"CODE",{});var Oe=i(J);he=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=r(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=m(S),I=r(S,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(je,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),je.forEach(t),S.forEach(t),Z=m(w),P=r(w,"P",{});var re=i(P);Ce=s(re,`Note that when creating models and layers with
`),N=r(re,"A",{href:!0,rel:!0});var Re=i(N);ae=s(Re,"subclassing"),Re.forEach(t),le=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,B),e(B,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,ze),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,ae),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(C),w&&t(Z),w&&t(P)}}}function Qy(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function Uy(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function Hy(z){let l,k;return l=new We({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.96</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:Je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function Ry(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,W,$e,ue,B,me,Le,ne,C,O,_e,Q,te,xe,H,Fe,Me,j,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,Ce,N,ae,le;return{c(){l=a("p"),k=n("TensorFlow models and layers in "),h=a("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=a("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Te=n("fit()"),ge=n(" and "),W=a("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),B=a("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=a("ul"),O=a("li"),_e=n("a single Tensor with "),Q=a("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=a("code"),Fe=n("model(input_ids)"),Me=c(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=a("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=a("p"),Ce=n(`Note that when creating models and layers with
`),N=a("a"),ae=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=r(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=r(E,"CODE",{});var Be=i(h);_=s(Be,"transformers"),Be.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=r(w,"UL",{});var oe=i(p);q=r(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=m(oe),A=r(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=m(w),F=r(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),W=r(M,"CODE",{});var Ie=i(W);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),B=r(M,"CODE",{});var De=i(B);me=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),C=r(w,"UL",{});var S=i(C);O=r(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=r(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=r(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=m(S),j=r(S,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(V,"CODE",{});var Oe=i(J);he=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=r(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=m(S),I=r(S,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(je,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),je.forEach(t),S.forEach(t),Z=m(w),P=r(w,"P",{});var re=i(P);Ce=s(re,`Note that when creating models and layers with
`),N=r(re,"A",{href:!0,rel:!0});var Re=i(N);ae=s(Re,"subclassing"),Re.forEach(t),le=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,B),e(B,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,ze),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,ae),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(C),w&&t(Z),w&&t(P)}}}function Ky(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function Vy(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function Gy(z){let l,k;return l=new We({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:Je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function Jy(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,W,$e,ue,B,me,Le,ne,C,O,_e,Q,te,xe,H,Fe,Me,j,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,Ce,N,ae,le;return{c(){l=a("p"),k=n("TensorFlow models and layers in "),h=a("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=a("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Te=n("fit()"),ge=n(" and "),W=a("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),B=a("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=a("ul"),O=a("li"),_e=n("a single Tensor with "),Q=a("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=a("code"),Fe=n("model(input_ids)"),Me=c(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=a("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=a("p"),Ce=n(`Note that when creating models and layers with
`),N=a("a"),ae=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=r(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=r(E,"CODE",{});var Be=i(h);_=s(Be,"transformers"),Be.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=r(w,"UL",{});var oe=i(p);q=r(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=m(oe),A=r(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=m(w),F=r(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),W=r(M,"CODE",{});var Ie=i(W);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),B=r(M,"CODE",{});var De=i(B);me=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),C=r(w,"UL",{});var S=i(C);O=r(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=r(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=r(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=m(S),j=r(S,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(V,"CODE",{});var Oe=i(J);he=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=r(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=m(S),I=r(S,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(je,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),je.forEach(t),S.forEach(t),Z=m(w),P=r(w,"P",{});var re=i(P);Ce=s(re,`Note that when creating models and layers with
`),N=r(re,"A",{href:!0,rel:!0});var Re=i(N);ae=s(Re,"subclassing"),Re.forEach(t),le=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,B),e(B,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,ze),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,ae),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(C),w&&t(Z),w&&t(P)}}}function Xy(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function Yy(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function Zy(z){let l,k;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:Je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function eT(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,W,$e,ue,B,me,Le,ne,C,O,_e,Q,te,xe,H,Fe,Me,j,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,Ce,N,ae,le;return{c(){l=a("p"),k=n("TensorFlow models and layers in "),h=a("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=a("ul"),q=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=a("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a("code"),Te=n("fit()"),ge=n(" and "),W=a("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),B=a("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=a("ul"),O=a("li"),_e=n("a single Tensor with "),Q=a("code"),te=n("input_ids"),xe=n(" only and nothing else: "),H=a("code"),Fe=n("model(input_ids)"),Me=c(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=a("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=a("p"),Ce=n(`Note that when creating models and layers with
`),N=a("a"),ae=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=r(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=r(E,"CODE",{});var Be=i(h);_=s(Be,"transformers"),Be.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=r(w,"UL",{});var oe=i(p);q=r(oe,"LI",{});var Qe=i(q);ke=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),pe=m(oe),A=r(oe,"LI",{});var Ne=i(A);ie=s(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),oe.forEach(t),ee=m(w),F=r(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(M,"CODE",{});var Ue=i(U);ve=s(Ue,"model.fit()"),Ue.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(M,"CODE",{});var Ae=i(D);ye=s(Ae,"model.fit()"),Ae.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(M,"CODE",{});var Ye=i(G);Te=s(Ye,"fit()"),Ye.forEach(t),ge=s(M," and "),W=r(M,"CODE",{});var Ie=i(W);$e=s(Ie,"predict()"),Ie.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),B=r(M,"CODE",{});var De=i(B);me=s(De,"Functional"),De.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),C=r(w,"UL",{});var S=i(C);O=r(S,"LI",{});var K=i(O);_e=s(K,"a single Tensor with "),Q=r(K,"CODE",{});var Se=i(Q);te=s(Se,"input_ids"),Se.forEach(t),xe=s(K," only and nothing else: "),H=r(K,"CODE",{});var Ze=i(H);Fe=s(Ze,"model(input_ids)"),Ze.forEach(t),K.forEach(t),Me=m(S),j=r(S,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(V,"CODE",{});var Oe=i(J);he=s(Oe,"model([input_ids, attention_mask])"),Oe.forEach(t),ze=s(V," or "),X=r(V,"CODE",{});var He=i(X);we=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),V.forEach(t),se=m(S),I=r(S,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r(je,"CODE",{});var Pe=i(Y);qe=s(Pe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Pe.forEach(t),je.forEach(t),S.forEach(t),Z=m(w),P=r(w,"P",{});var re=i(P);Ce=s(re,`Note that when creating models and layers with
`),N=r(re,"A",{href:!0,rel:!0});var Re=i(N);ae=s(Re,"subclassing"),Re.forEach(t),le=s(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,U),e(U,ve),e(F,fe),e(F,D),e(D,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,B),e(B,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,Q),e(Q,te),e(O,xe),e(O,H),e(H,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,ze),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,ae),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(C),w&&t(Z),w&&t(P)}}}function tT(z){let l,k,h,_,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function oT(z){let l,k,h,_,b;return _=new We({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:Je,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function nT(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,U,ve,fe,D,ye,de,G,Te,ge,W,$e,ue,B,me,Le,ne,C,O,_e,Q,te,xe,H,Fe,Me,j,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,Ce,N,ae,le,w,E,Be,oe,Qe,Ne,M,Ue,Ae,Ye='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ie,De,S='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',K,Se,Ze='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',V,Oe,He,je,Pe,re,Re,bi,Xm,Ym,zd,iy='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',qd,vi,Zm,eh,Cd,At,th,jd,ly='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Od,yi,oh,nh,Pd,It,sh,Ti,ah,rh,$i,ih,lh,Nd,tn,Li,dh,ch,xi,mh,Ad,on,hh,fr,ph,fh,Id,ut,gh,Dd,dy='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',Sd,Wd,cy='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',Bd,Qd,my='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Ud,Hd,hy='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Rd,Kd,nn,uh,ps,_h,wh,Vd,Yt,sn,Fi,fs,kh,Mi,bh,Gd,Zt,gr,vh,yh,ur,Th,$h,Jd,gs,Xd,eo,an,Ei,us,Lh,zi,xh,Yd,ct,_s,Fh,to,Mh,_r,Eh,zh,wr,qh,Ch,jh,oo,Oh,kr,Ph,Nh,ws,Ah,Ih,Dh,no,Sh,br,Wh,Bh,vr,Qh,Uh,Hh,rn,Zd,so,ln,qi,ks,Rh,Ci,Kh,ec,Ot,bs,Vh,ji,Gh,Jh,dn,yr,Xh,Yh,Tr,Zh,ep,tc,ao,cn,Oi,vs,tp,Pi,op,oc,Pt,ys,np,Ts,sp,Ni,ap,rp,ip,mn,$r,lp,dp,Lr,cp,mp,nc,ro,hn,Ai,$s,hp,Ii,pp,sc,io,Ls,fp,Di,gp,ac,lo,xs,up,Si,_p,rc,co,Fs,wp,Wi,kp,ic,mo,Ms,bp,Bi,vp,lc,ho,Es,yp,Qi,Tp,dc,po,zs,$p,Ui,Lp,cc,fo,qs,xp,Hi,Fp,mc,go,Cs,Mp,Ri,Ep,hc,uo,js,zp,Ki,qp,pc,_o,Os,Cp,Vi,jp,fc,wo,Ps,Op,Gi,Pp,gc,ko,Ns,Np,Ji,Ap,uc,bo,As,Ip,Xi,Dp,_c,vo,Is,Sp,Yi,Wp,wc,yo,pn,Zi,Ds,Bp,el,Qp,kc,et,Ss,Up,tl,Hp,Rp,Ws,Kp,xr,Vp,Gp,Jp,Bs,Xp,Qs,Yp,Zp,ef,To,tf,Fr,of,nf,Us,sf,af,rf,Hs,lf,ol,df,cf,mf,$t,Rs,hf,$o,pf,Mr,ff,gf,nl,uf,_f,wf,fn,kf,gn,bc,Lo,un,sl,Ks,bf,al,vf,vc,mt,Vs,yf,Gs,Tf,rl,$f,Lf,xf,Js,Ff,Er,Mf,Ef,zf,Xs,qf,Ys,Cf,jf,Of,lt,Zs,Pf,xo,Nf,zr,Af,If,il,Df,Sf,Wf,_n,Bf,wn,Qf,ll,Uf,Hf,kn,yc,Fo,bn,dl,ea,Rf,cl,Kf,Tc,ht,ta,Vf,ml,Gf,Jf,oa,Xf,qr,Yf,Zf,eg,na,tg,sa,og,ng,sg,tt,aa,ag,Mo,rg,Cr,ig,lg,hl,dg,cg,mg,vn,hg,yn,pg,Tn,fg,$n,gg,Ln,$c,Eo,xn,pl,ra,ug,fl,_g,Lc,pt,ia,wg,gl,kg,bg,la,vg,jr,yg,Tg,$g,da,Lg,ca,xg,Fg,Mg,Lt,ma,Eg,zo,zg,Or,qg,Cg,ul,jg,Og,Pg,Fn,Ng,Mn,xc,qo,En,_l,ha,Ag,wl,Ig,Fc,ft,pa,Dg,kl,Sg,Wg,fa,Bg,Pr,Qg,Ug,Hg,ga,Rg,ua,Kg,Vg,Gg,_t,_a,Jg,Co,Xg,Nr,Yg,Zg,bl,eu,tu,ou,zn,nu,qn,su,Cn,Mc,jo,jn,vl,wa,au,yl,ru,Ec,gt,ka,iu,Oo,lu,Tl,du,cu,$l,mu,hu,pu,ba,fu,Ar,gu,uu,_u,va,wu,ya,ku,bu,vu,xt,Ta,yu,Po,Tu,Ir,$u,Lu,Ll,xu,Fu,Mu,On,Eu,Pn,zc,No,Nn,xl,$a,zu,Fl,qu,qc,Ke,La,Cu,Ml,ju,Ou,xa,Pu,Dr,Nu,Au,Iu,Fa,Du,Ma,Su,Wu,Bu,An,Qu,Ao,Uu,Sr,Hu,Ru,Ea,Ku,Vu,Gu,za,Ju,El,Xu,Yu,Zu,Dt,qa,e_,Io,t_,Wr,o_,n_,zl,s_,a_,r_,In,Cc,Do,Dn,ql,Ca,i_,Cl,l_,jc,nt,ja,d_,Oa,c_,jl,m_,h_,p_,Pa,f_,Br,g_,u_,__,Na,w_,Aa,k_,b_,v_,Sn,y_,wt,Ia,T_,So,$_,Qr,L_,x_,Ol,F_,M_,E_,Wn,z_,Bn,q_,Qn,Oc,Wo,Un,Pl,Da,C_,Nl,j_,Pc,st,Sa,O_,Bo,P_,Al,N_,A_,Il,I_,D_,S_,Wa,W_,Ur,B_,Q_,U_,Ba,H_,Qa,R_,K_,V_,Hn,G_,kt,Ua,J_,Qo,X_,Hr,Y_,Z_,Dl,ew,tw,ow,Rn,nw,Kn,sw,Vn,Nc,Uo,Gn,Sl,Ha,aw,Wl,rw,Ac,at,Ra,iw,Bl,lw,dw,Ka,cw,Rr,mw,hw,pw,Va,fw,Ga,gw,uw,_w,Jn,ww,bt,Ja,kw,Ho,bw,Kr,vw,yw,Ql,Tw,$w,Lw,Xn,xw,Yn,Fw,Zn,Ic,Ro,es,Ul,Xa,Mw,Hl,Ew,Dc,rt,Ya,zw,Rl,qw,Cw,Za,jw,Vr,Ow,Pw,Nw,er,Aw,tr,Iw,Dw,Sw,ts,Ww,vt,or,Bw,Ko,Qw,Gr,Uw,Hw,Kl,Rw,Kw,Vw,os,Gw,ns,Jw,ss,Sc,Vo,as,Vl,nr,Xw,Gl,Yw,Wc,it,sr,Zw,Jl,ek,tk,ar,ok,Jr,nk,sk,ak,rr,rk,ir,ik,lk,dk,rs,ck,Ft,lr,mk,Go,hk,Xr,pk,fk,Xl,gk,uk,_k,is,wk,ls,Bc;return d=new Xe({}),F=new Xe({}),E=new Xe({}),fs=new Xe({}),gs=new We({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),us=new Xe({}),_s=new R({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"onnx_export",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/configuration_longformer.py#L47"}}),rn=new Ge({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[wy]},$$scope:{ctx:z}}}),ks=new Xe({}),bs=new R({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L67"}}),vs=new Xe({}),ys=new R({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer_fast.py#L85"}}),$s=new Xe({}),Ls=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L57"}}),xs=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L100"}}),Fs=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L148"}}),Ms=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L194"}}),Es=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L243"}}),zs=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L289"}}),qs=new R({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L337"}}),Cs=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),js=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),Os=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),Ps=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),Ns=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),As=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),Is=new R({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),Ds=new Xe({}),Ss=new R({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1537"}}),Rs=new R({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1648",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fn=new ot({props:{$$slots:{default:[ky]},$$scope:{ctx:z}}}),gn=new Ge({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[by]},$$scope:{ctx:z}}}),Ks=new Xe({}),Vs=new R({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1772"}}),Zs=new R({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1791",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new ot({props:{$$slots:{default:[vy]},$$scope:{ctx:z}}}),wn=new Ge({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[yy]},$$scope:{ctx:z}}}),kn=new Ge({props:{anchor:"transformers.LongformerForMaskedLM.forward.example-2",$$slots:{default:[Ty]},$$scope:{ctx:z}}}),ea=new Xe({}),ta=new R({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1885"}}),aa=new R({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1900",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new ot({props:{$$slots:{default:[$y]},$$scope:{ctx:z}}}),yn=new Ge({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[Ly]},$$scope:{ctx:z}}}),Tn=new Ge({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[xy]},$$scope:{ctx:z}}}),$n=new Ge({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[Fy]},$$scope:{ctx:z}}}),Ln=new Ge({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[My]},$$scope:{ctx:z}}}),ra=new Xe({}),ia=new R({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2244"}}),ma=new R({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2255",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new ot({props:{$$slots:{default:[Ey]},$$scope:{ctx:z}}}),Mn=new Ge({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[zy]},$$scope:{ctx:z}}}),ha=new Xe({}),pa=new R({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2154"}}),_a=new R({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2169",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zn=new ot({props:{$$slots:{default:[qy]},$$scope:{ctx:z}}}),qn=new Ge({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[Cy]},$$scope:{ctx:z}}}),Cn=new Ge({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[jy]},$$scope:{ctx:z}}}),wa=new Xe({}),ka=new R({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2014"}}),Ta=new R({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2028",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new ot({props:{$$slots:{default:[Oy]},$$scope:{ctx:z}}}),Pn=new Ge({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[Py]},$$scope:{ctx:z}}}),$a=new Xe({}),La=new R({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2016"}}),An=new ot({props:{$$slots:{default:[Ny]},$$scope:{ctx:z}}}),qa=new R({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2038"}}),In=new ot({props:{$$slots:{default:[Ay]},$$scope:{ctx:z}}}),Ca=new Xe({}),ja=new R({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2089"}}),Sn=new ot({props:{$$slots:{default:[Iy]},$$scope:{ctx:z}}}),Ia=new R({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2106",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wn=new ot({props:{$$slots:{default:[Dy]},$$scope:{ctx:z}}}),Bn=new Ge({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[Sy]},$$scope:{ctx:z}}}),Qn=new Ge({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[Wy]},$$scope:{ctx:z}}}),Da=new Xe({}),Sa=new R({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2186"}}),Hn=new ot({props:{$$slots:{default:[By]},$$scope:{ctx:z}}}),Ua=new R({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2201",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rn=new ot({props:{$$slots:{default:[Qy]},$$scope:{ctx:z}}}),Kn=new Ge({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[Uy]},$$scope:{ctx:z}}}),Vn=new Ge({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[Hy]},$$scope:{ctx:z}}}),Ha=new Xe({}),Ra=new R({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2340"}}),Jn=new ot({props:{$$slots:{default:[Ry]},$$scope:{ctx:z}}}),Ja=new R({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2352",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xn=new ot({props:{$$slots:{default:[Ky]},$$scope:{ctx:z}}}),Yn=new Ge({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[Vy]},$$scope:{ctx:z}}}),Zn=new Ge({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[Gy]},$$scope:{ctx:z}}}),Xa=new Xe({}),Ya=new R({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2577"}}),ts=new ot({props:{$$slots:{default:[Jy]},$$scope:{ctx:z}}}),or=new R({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2592",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),os=new ot({props:{$$slots:{default:[Xy]},$$scope:{ctx:z}}}),ns=new Ge({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[Yy]},$$scope:{ctx:z}}}),ss=new Ge({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[Zy]},$$scope:{ctx:z}}}),nr=new Xe({}),sr=new R({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2441"}}),rs=new ot({props:{$$slots:{default:[eT]},$$scope:{ctx:z}}}),lr=new R({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2461",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/main/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),is=new ot({props:{$$slots:{default:[tT]},$$scope:{ctx:z}}}),ls=new Ge({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[oT]},$$scope:{ctx:z}}}),{c(){l=a("meta"),k=c(),h=a("h1"),_=a("a"),b=a("span"),v(d.$$.fragment),p=c(),q=a("span"),ke=n("Longformer"),pe=c(),A=a("h2"),ie=a("a"),ee=a("span"),v(F.$$.fragment),be=c(),U=a("span"),ve=n("Overview"),fe=c(),D=a("p"),ye=n("The Longformer model was presented in "),de=a("a"),G=n("Longformer: The Long-Document Transformer"),Te=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),ge=c(),W=a("p"),$e=n("The abstract from the paper is the following:"),ue=c(),B=a("p"),me=a("em"),Le=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ne=c(),C=a("p"),O=n("Tips:"),_e=c(),Q=a("ul"),te=a("li"),xe=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),H=a("code"),Fe=n("token_type_ids"),Me=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),j=a("code"),Ee=n("tokenizer.sep_token"),J=n(` (or
`),he=a("code"),ze=n("</s>"),X=n(")."),we=c(),se=a("p"),I=n("This model was contributed by "),ce=a("a"),Y=n("beltagy"),qe=n(". The Authors\u2019 code can be found "),Z=a("a"),P=n("here"),Ce=n("."),N=c(),ae=a("h2"),le=a("a"),w=a("span"),v(E.$$.fragment),Be=c(),oe=a("span"),Qe=n("Longformer Self Attention"),Ne=c(),M=a("p"),Ue=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),Ae=new Zo,Ie=n(` previous tokens and
`),De=new Zo,K=n(" succeding tokens with "),Se=new Zo,V=n(` being the window length as defined in
`),Oe=a("code"),He=n("config.attention_window"),je=n(". Note that "),Pe=a("code"),re=n("config.attention_window"),Re=n(" can be of type "),bi=a("code"),Xm=n("List"),Ym=n(` to define a
different `),zd=new Zo,qd=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),vi=a("code"),Zm=n("BertSelfAttention"),eh=n("."),Cd=c(),At=a("p"),th=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),jd=new Zo,Od=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),yi=a("em"),oh=n("symmetric"),nh=n("."),Pd=c(),It=a("p"),sh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ti=a("code"),ah=n("global_attention_mask"),rh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),$i=a("code"),ih=n("global_attention_mask"),lh=n(":"),Nd=c(),tn=a("ul"),Li=a("li"),dh=n("0: the token attends \u201Clocally\u201D,"),ch=c(),xi=a("li"),mh=n("1: the token attends \u201Cglobally\u201D."),Ad=c(),on=a("p"),hh=n("For more information please also refer to "),fr=a("a"),ph=n("forward()"),fh=n(" method."),Id=c(),ut=a("p"),gh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),Dd=new Zo,Sd=n(` to
`),Wd=new Zo,Bd=n(", with "),Qd=new Zo,Ud=n(" being the sequence length and "),Hd=new Zo,Rd=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Kd=c(),nn=a("p"),uh=n("For more information, please refer to the official "),ps=a("a"),_h=n("paper"),wh=n("."),Vd=c(),Yt=a("h2"),sn=a("a"),Fi=a("span"),v(fs.$$.fragment),kh=c(),Mi=a("span"),bh=n("Training"),Gd=c(),Zt=a("p"),gr=a("a"),vh=n("LongformerForMaskedLM"),yh=n(" is trained the exact same way "),ur=a("a"),Th=n("RobertaForMaskedLM"),$h=n(` is
trained and should be used as follows:`),Jd=c(),v(gs.$$.fragment),Xd=c(),eo=a("h2"),an=a("a"),Ei=a("span"),v(us.$$.fragment),Lh=c(),zi=a("span"),xh=n("LongformerConfig"),Yd=c(),ct=a("div"),v(_s.$$.fragment),Fh=c(),to=a("p"),Mh=n("This is the configuration class to store the configuration of a "),_r=a("a"),Eh=n("LongformerModel"),zh=n(" or a "),wr=a("a"),qh=n("TFLongformerModel"),Ch=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),jh=c(),oo=a("p"),Oh=n("This is the configuration class to store the configuration of a "),kr=a("a"),Ph=n("LongformerModel"),Nh=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),ws=a("a"),Ah=n("allenai/longformer-base-4096"),Ih=n(` architecture with a sequence
length 4,096.`),Dh=c(),no=a("p"),Sh=n("The "),br=a("a"),Wh=n("LongformerConfig"),Bh=n(" class directly inherits "),vr=a("a"),Qh=n("RobertaConfig"),Uh=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Hh=c(),v(rn.$$.fragment),Zd=c(),so=a("h2"),ln=a("a"),qi=a("span"),v(ks.$$.fragment),Rh=c(),Ci=a("span"),Kh=n("LongformerTokenizer"),ec=c(),Ot=a("div"),v(bs.$$.fragment),Vh=c(),ji=a("p"),Gh=n("Construct a Longformer tokenizer."),Jh=c(),dn=a("p"),yr=a("a"),Xh=n("LongformerTokenizer"),Yh=n(" is identical to "),Tr=a("a"),Zh=n("RobertaTokenizer"),ep=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),tc=c(),ao=a("h2"),cn=a("a"),Oi=a("span"),v(vs.$$.fragment),tp=c(),Pi=a("span"),op=n("LongformerTokenizerFast"),oc=c(),Pt=a("div"),v(ys.$$.fragment),np=c(),Ts=a("p"),sp=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),Ni=a("em"),ap=n("tokenizers"),rp=n(" library)."),ip=c(),mn=a("p"),$r=a("a"),lp=n("LongformerTokenizerFast"),dp=n(" is identical to "),Lr=a("a"),cp=n("RobertaTokenizerFast"),mp=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),nc=c(),ro=a("h2"),hn=a("a"),Ai=a("span"),v($s.$$.fragment),hp=c(),Ii=a("span"),pp=n("Longformer specific outputs"),sc=c(),io=a("div"),v(Ls.$$.fragment),fp=c(),Di=a("p"),gp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),ac=c(),lo=a("div"),v(xs.$$.fragment),up=c(),Si=a("p"),_p=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),rc=c(),co=a("div"),v(Fs.$$.fragment),wp=c(),Wi=a("p"),kp=n("Base class for masked language models outputs."),ic=c(),mo=a("div"),v(Ms.$$.fragment),bp=c(),Bi=a("p"),vp=n("Base class for outputs of question answering Longformer models."),lc=c(),ho=a("div"),v(Es.$$.fragment),yp=c(),Qi=a("p"),Tp=n("Base class for outputs of sentence classification models."),dc=c(),po=a("div"),v(zs.$$.fragment),$p=c(),Ui=a("p"),Lp=n("Base class for outputs of multiple choice Longformer models."),cc=c(),fo=a("div"),v(qs.$$.fragment),xp=c(),Hi=a("p"),Fp=n("Base class for outputs of token classification models."),mc=c(),go=a("div"),v(Cs.$$.fragment),Mp=c(),Ri=a("p"),Ep=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),hc=c(),uo=a("div"),v(js.$$.fragment),zp=c(),Ki=a("p"),qp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),pc=c(),_o=a("div"),v(Os.$$.fragment),Cp=c(),Vi=a("p"),jp=n("Base class for masked language models outputs."),fc=c(),wo=a("div"),v(Ps.$$.fragment),Op=c(),Gi=a("p"),Pp=n("Base class for outputs of question answering Longformer models."),gc=c(),ko=a("div"),v(Ns.$$.fragment),Np=c(),Ji=a("p"),Ap=n("Base class for outputs of sentence classification models."),uc=c(),bo=a("div"),v(As.$$.fragment),Ip=c(),Xi=a("p"),Dp=n("Base class for outputs of multiple choice models."),_c=c(),vo=a("div"),v(Is.$$.fragment),Sp=c(),Yi=a("p"),Wp=n("Base class for outputs of token classification models."),wc=c(),yo=a("h2"),pn=a("a"),Zi=a("span"),v(Ds.$$.fragment),Bp=c(),el=a("span"),Qp=n("LongformerModel"),kc=c(),et=a("div"),v(Ss.$$.fragment),Up=c(),tl=a("p"),Hp=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Rp=c(),Ws=a("p"),Kp=n("This model inherits from "),xr=a("a"),Vp=n("PreTrainedModel"),Gp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jp=c(),Bs=a("p"),Xp=n("This model is also a PyTorch "),Qs=a("a"),Yp=n("torch.nn.Module"),Zp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ef=c(),To=a("p"),tf=n("This class copied code from "),Fr=a("a"),of=n("RobertaModel"),nf=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Us=a("a"),sf=n(`Longformer:
the Long-Document Transformer`),af=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),rf=c(),Hs=a("p"),lf=n("The self-attention module "),ol=a("code"),df=n("LongformerSelfAttention"),cf=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),mf=c(),$t=a("div"),v(Rs.$$.fragment),hf=c(),$o=a("p"),pf=n("The "),Mr=a("a"),ff=n("LongformerModel"),gf=n(" forward method, overrides the "),nl=a("code"),uf=n("__call__"),_f=n(" special method."),wf=c(),v(fn.$$.fragment),kf=c(),v(gn.$$.fragment),bc=c(),Lo=a("h2"),un=a("a"),sl=a("span"),v(Ks.$$.fragment),bf=c(),al=a("span"),vf=n("LongformerForMaskedLM"),vc=c(),mt=a("div"),v(Vs.$$.fragment),yf=c(),Gs=a("p"),Tf=n("Longformer Model with a "),rl=a("code"),$f=n("language modeling"),Lf=n(" head on top."),xf=c(),Js=a("p"),Ff=n("This model inherits from "),Er=a("a"),Mf=n("PreTrainedModel"),Ef=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zf=c(),Xs=a("p"),qf=n("This model is also a PyTorch "),Ys=a("a"),Cf=n("torch.nn.Module"),jf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Of=c(),lt=a("div"),v(Zs.$$.fragment),Pf=c(),xo=a("p"),Nf=n("The "),zr=a("a"),Af=n("LongformerForMaskedLM"),If=n(" forward method, overrides the "),il=a("code"),Df=n("__call__"),Sf=n(" special method."),Wf=c(),v(_n.$$.fragment),Bf=c(),v(wn.$$.fragment),Qf=c(),ll=a("p"),Uf=n("Let\u2019s try a very long input."),Hf=c(),v(kn.$$.fragment),yc=c(),Fo=a("h2"),bn=a("a"),dl=a("span"),v(ea.$$.fragment),Rf=c(),cl=a("span"),Kf=n("LongformerForSequenceClassification"),Tc=c(),ht=a("div"),v(ta.$$.fragment),Vf=c(),ml=a("p"),Gf=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jf=c(),oa=a("p"),Xf=n("This model inherits from "),qr=a("a"),Yf=n("PreTrainedModel"),Zf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg=c(),na=a("p"),tg=n("This model is also a PyTorch "),sa=a("a"),og=n("torch.nn.Module"),ng=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sg=c(),tt=a("div"),v(aa.$$.fragment),ag=c(),Mo=a("p"),rg=n("The "),Cr=a("a"),ig=n("LongformerForSequenceClassification"),lg=n(" forward method, overrides the "),hl=a("code"),dg=n("__call__"),cg=n(" special method."),mg=c(),v(vn.$$.fragment),hg=c(),v(yn.$$.fragment),pg=c(),v(Tn.$$.fragment),fg=c(),v($n.$$.fragment),gg=c(),v(Ln.$$.fragment),$c=c(),Eo=a("h2"),xn=a("a"),pl=a("span"),v(ra.$$.fragment),ug=c(),fl=a("span"),_g=n("LongformerForMultipleChoice"),Lc=c(),pt=a("div"),v(ia.$$.fragment),wg=c(),gl=a("p"),kg=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),bg=c(),la=a("p"),vg=n("This model inherits from "),jr=a("a"),yg=n("PreTrainedModel"),Tg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$g=c(),da=a("p"),Lg=n("This model is also a PyTorch "),ca=a("a"),xg=n("torch.nn.Module"),Fg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mg=c(),Lt=a("div"),v(ma.$$.fragment),Eg=c(),zo=a("p"),zg=n("The "),Or=a("a"),qg=n("LongformerForMultipleChoice"),Cg=n(" forward method, overrides the "),ul=a("code"),jg=n("__call__"),Og=n(" special method."),Pg=c(),v(Fn.$$.fragment),Ng=c(),v(Mn.$$.fragment),xc=c(),qo=a("h2"),En=a("a"),_l=a("span"),v(ha.$$.fragment),Ag=c(),wl=a("span"),Ig=n("LongformerForTokenClassification"),Fc=c(),ft=a("div"),v(pa.$$.fragment),Dg=c(),kl=a("p"),Sg=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Wg=c(),fa=a("p"),Bg=n("This model inherits from "),Pr=a("a"),Qg=n("PreTrainedModel"),Ug=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hg=c(),ga=a("p"),Rg=n("This model is also a PyTorch "),ua=a("a"),Kg=n("torch.nn.Module"),Vg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gg=c(),_t=a("div"),v(_a.$$.fragment),Jg=c(),Co=a("p"),Xg=n("The "),Nr=a("a"),Yg=n("LongformerForTokenClassification"),Zg=n(" forward method, overrides the "),bl=a("code"),eu=n("__call__"),tu=n(" special method."),ou=c(),v(zn.$$.fragment),nu=c(),v(qn.$$.fragment),su=c(),v(Cn.$$.fragment),Mc=c(),jo=a("h2"),jn=a("a"),vl=a("span"),v(wa.$$.fragment),au=c(),yl=a("span"),ru=n("LongformerForQuestionAnswering"),Ec=c(),gt=a("div"),v(ka.$$.fragment),iu=c(),Oo=a("p"),lu=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),Tl=a("code"),du=n("span start logits"),cu=n(" and "),$l=a("code"),mu=n("span end logits"),hu=n(")."),pu=c(),ba=a("p"),fu=n("This model inherits from "),Ar=a("a"),gu=n("PreTrainedModel"),uu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u=c(),va=a("p"),wu=n("This model is also a PyTorch "),ya=a("a"),ku=n("torch.nn.Module"),bu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vu=c(),xt=a("div"),v(Ta.$$.fragment),yu=c(),Po=a("p"),Tu=n("The "),Ir=a("a"),$u=n("LongformerForQuestionAnswering"),Lu=n(" forward method, overrides the "),Ll=a("code"),xu=n("__call__"),Fu=n(" special method."),Mu=c(),v(On.$$.fragment),Eu=c(),v(Pn.$$.fragment),zc=c(),No=a("h2"),Nn=a("a"),xl=a("span"),v($a.$$.fragment),zu=c(),Fl=a("span"),qu=n("TFLongformerModel"),qc=c(),Ke=a("div"),v(La.$$.fragment),Cu=c(),Ml=a("p"),ju=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Ou=c(),xa=a("p"),Pu=n("This model inherits from "),Dr=a("a"),Nu=n("TFPreTrainedModel"),Au=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iu=c(),Fa=a("p"),Du=n("This model is also a "),Ma=a("a"),Su=n("tf.keras.Model"),Wu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu=c(),v(An.$$.fragment),Qu=c(),Ao=a("p"),Uu=n("This class copies code from "),Sr=a("a"),Hu=n("TFRobertaModel"),Ru=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Ea=a("a"),Ku=n("Longformer: the Long-Document Transformer"),Vu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Gu=c(),za=a("p"),Ju=n("The self-attention module "),El=a("code"),Xu=n("TFLongformerSelfAttention"),Yu=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Zu=c(),Dt=a("div"),v(qa.$$.fragment),e_=c(),Io=a("p"),t_=n("The "),Wr=a("a"),o_=n("TFLongformerModel"),n_=n(" forward method, overrides the "),zl=a("code"),s_=n("__call__"),a_=n(" special method."),r_=c(),v(In.$$.fragment),Cc=c(),Do=a("h2"),Dn=a("a"),ql=a("span"),v(Ca.$$.fragment),i_=c(),Cl=a("span"),l_=n("TFLongformerForMaskedLM"),jc=c(),nt=a("div"),v(ja.$$.fragment),d_=c(),Oa=a("p"),c_=n("Longformer Model with a "),jl=a("code"),m_=n("language modeling"),h_=n(" head on top."),p_=c(),Pa=a("p"),f_=n("This model inherits from "),Br=a("a"),g_=n("TFPreTrainedModel"),u_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),__=c(),Na=a("p"),w_=n("This model is also a "),Aa=a("a"),k_=n("tf.keras.Model"),b_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),v_=c(),v(Sn.$$.fragment),y_=c(),wt=a("div"),v(Ia.$$.fragment),T_=c(),So=a("p"),$_=n("The "),Qr=a("a"),L_=n("TFLongformerForMaskedLM"),x_=n(" forward method, overrides the "),Ol=a("code"),F_=n("__call__"),M_=n(" special method."),E_=c(),v(Wn.$$.fragment),z_=c(),v(Bn.$$.fragment),q_=c(),v(Qn.$$.fragment),Oc=c(),Wo=a("h2"),Un=a("a"),Pl=a("span"),v(Da.$$.fragment),C_=c(),Nl=a("span"),j_=n("TFLongformerForQuestionAnswering"),Pc=c(),st=a("div"),v(Sa.$$.fragment),O_=c(),Bo=a("p"),P_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),Al=a("code"),N_=n("span start logits"),A_=n(" and "),Il=a("code"),I_=n("span end logits"),D_=n(")."),S_=c(),Wa=a("p"),W_=n("This model inherits from "),Ur=a("a"),B_=n("TFPreTrainedModel"),Q_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U_=c(),Ba=a("p"),H_=n("This model is also a "),Qa=a("a"),R_=n("tf.keras.Model"),K_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),V_=c(),v(Hn.$$.fragment),G_=c(),kt=a("div"),v(Ua.$$.fragment),J_=c(),Qo=a("p"),X_=n("The "),Hr=a("a"),Y_=n("TFLongformerForQuestionAnswering"),Z_=n(" forward method, overrides the "),Dl=a("code"),ew=n("__call__"),tw=n(" special method."),ow=c(),v(Rn.$$.fragment),nw=c(),v(Kn.$$.fragment),sw=c(),v(Vn.$$.fragment),Nc=c(),Uo=a("h2"),Gn=a("a"),Sl=a("span"),v(Ha.$$.fragment),aw=c(),Wl=a("span"),rw=n("TFLongformerForSequenceClassification"),Ac=c(),at=a("div"),v(Ra.$$.fragment),iw=c(),Bl=a("p"),lw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),dw=c(),Ka=a("p"),cw=n("This model inherits from "),Rr=a("a"),mw=n("TFPreTrainedModel"),hw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pw=c(),Va=a("p"),fw=n("This model is also a "),Ga=a("a"),gw=n("tf.keras.Model"),uw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_w=c(),v(Jn.$$.fragment),ww=c(),bt=a("div"),v(Ja.$$.fragment),kw=c(),Ho=a("p"),bw=n("The "),Kr=a("a"),vw=n("TFLongformerForSequenceClassification"),yw=n(" forward method, overrides the "),Ql=a("code"),Tw=n("__call__"),$w=n(" special method."),Lw=c(),v(Xn.$$.fragment),xw=c(),v(Yn.$$.fragment),Fw=c(),v(Zn.$$.fragment),Ic=c(),Ro=a("h2"),es=a("a"),Ul=a("span"),v(Xa.$$.fragment),Mw=c(),Hl=a("span"),Ew=n("TFLongformerForTokenClassification"),Dc=c(),rt=a("div"),v(Ya.$$.fragment),zw=c(),Rl=a("p"),qw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Cw=c(),Za=a("p"),jw=n("This model inherits from "),Vr=a("a"),Ow=n("TFPreTrainedModel"),Pw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nw=c(),er=a("p"),Aw=n("This model is also a "),tr=a("a"),Iw=n("tf.keras.Model"),Dw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sw=c(),v(ts.$$.fragment),Ww=c(),vt=a("div"),v(or.$$.fragment),Bw=c(),Ko=a("p"),Qw=n("The "),Gr=a("a"),Uw=n("TFLongformerForTokenClassification"),Hw=n(" forward method, overrides the "),Kl=a("code"),Rw=n("__call__"),Kw=n(" special method."),Vw=c(),v(os.$$.fragment),Gw=c(),v(ns.$$.fragment),Jw=c(),v(ss.$$.fragment),Sc=c(),Vo=a("h2"),as=a("a"),Vl=a("span"),v(nr.$$.fragment),Xw=c(),Gl=a("span"),Yw=n("TFLongformerForMultipleChoice"),Wc=c(),it=a("div"),v(sr.$$.fragment),Zw=c(),Jl=a("p"),ek=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),tk=c(),ar=a("p"),ok=n("This model inherits from "),Jr=a("a"),nk=n("TFPreTrainedModel"),sk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ak=c(),rr=a("p"),rk=n("This model is also a "),ir=a("a"),ik=n("tf.keras.Model"),lk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dk=c(),v(rs.$$.fragment),ck=c(),Ft=a("div"),v(lr.$$.fragment),mk=c(),Go=a("p"),hk=n("The "),Xr=a("a"),pk=n("TFLongformerForMultipleChoice"),fk=n(" forward method, overrides the "),Xl=a("code"),gk=n("__call__"),uk=n(" special method."),_k=c(),v(is.$$.fragment),wk=c(),v(ls.$$.fragment),this.h()},l(o){const u=uy('[data-svelte="svelte-1phssyn"]',document.head);l=r(u,"META",{name:!0,content:!0}),u.forEach(t),k=m(o),h=r(o,"H1",{class:!0});var dr=i(h);_=r(dr,"A",{id:!0,class:!0,href:!0});var Yl=i(_);b=r(Yl,"SPAN",{});var Zl=i(b);y(d.$$.fragment,Zl),Zl.forEach(t),Yl.forEach(t),p=m(dr),q=r(dr,"SPAN",{});var ed=i(q);ke=s(ed,"Longformer"),ed.forEach(t),dr.forEach(t),pe=m(o),A=r(o,"H2",{class:!0});var cr=i(A);ie=r(cr,"A",{id:!0,class:!0,href:!0});var td=i(ie);ee=r(td,"SPAN",{});var od=i(ee);y(F.$$.fragment,od),od.forEach(t),td.forEach(t),be=m(cr),U=r(cr,"SPAN",{});var nd=i(U);ve=s(nd,"Overview"),nd.forEach(t),cr.forEach(t),fe=m(o),D=r(o,"P",{});var mr=i(D);ye=s(mr,"The Longformer model was presented in "),de=r(mr,"A",{href:!0,rel:!0});var sd=i(de);G=s(sd,"Longformer: The Long-Document Transformer"),sd.forEach(t),Te=s(mr," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),mr.forEach(t),ge=m(o),W=r(o,"P",{});var ad=i(W);$e=s(ad,"The abstract from the paper is the following:"),ad.forEach(t),ue=m(o),B=r(o,"P",{});var rd=i(B);me=r(rd,"EM",{});var id=i(me);Le=s(id,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),id.forEach(t),rd.forEach(t),ne=m(o),C=r(o,"P",{});var ld=i(C);O=s(ld,"Tips:"),ld.forEach(t),_e=m(o),Q=r(o,"UL",{});var dd=i(Q);te=r(dd,"LI",{});var Nt=i(te);xe=s(Nt,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),H=r(Nt,"CODE",{});var cd=i(H);Fe=s(cd,"token_type_ids"),cd.forEach(t),Me=s(Nt,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),j=r(Nt,"CODE",{});var md=i(j);Ee=s(md,"tokenizer.sep_token"),md.forEach(t),J=s(Nt,` (or
`),he=r(Nt,"CODE",{});var hd=i(he);ze=s(hd,"</s>"),hd.forEach(t),X=s(Nt,")."),Nt.forEach(t),dd.forEach(t),we=m(o),se=r(o,"P",{});var Jo=i(se);I=s(Jo,"This model was contributed by "),ce=r(Jo,"A",{href:!0,rel:!0});var pd=i(ce);Y=s(pd,"beltagy"),pd.forEach(t),qe=s(Jo,". The Authors\u2019 code can be found "),Z=r(Jo,"A",{href:!0,rel:!0});var fd=i(Z);P=s(fd,"here"),fd.forEach(t),Ce=s(Jo,"."),Jo.forEach(t),N=m(o),ae=r(o,"H2",{class:!0});var hr=i(ae);le=r(hr,"A",{id:!0,class:!0,href:!0});var gd=i(le);w=r(gd,"SPAN",{});var ud=i(w);y(E.$$.fragment,ud),ud.forEach(t),gd.forEach(t),Be=m(hr),oe=r(hr,"SPAN",{});var _d=i(oe);Qe=s(_d,"Longformer Self Attention"),_d.forEach(t),hr.forEach(t),Ne=m(o),M=r(o,"P",{});var Ve=i(M);Ue=s(Ve,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),Ae=en(Ve),Ie=s(Ve,` previous tokens and
`),De=en(Ve),K=s(Ve," succeding tokens with "),Se=en(Ve),V=s(Ve,` being the window length as defined in
`),Oe=r(Ve,"CODE",{});var wd=i(Oe);He=s(wd,"config.attention_window"),wd.forEach(t),je=s(Ve,". Note that "),Pe=r(Ve,"CODE",{});var kd=i(Pe);re=s(kd,"config.attention_window"),kd.forEach(t),Re=s(Ve," can be of type "),bi=r(Ve,"CODE",{});var bd=i(bi);Xm=s(bd,"List"),bd.forEach(t),Ym=s(Ve,` to define a
different `),zd=en(Ve),qd=s(Ve,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),vi=r(Ve,"CODE",{});var vd=i(vi);Zm=s(vd,"BertSelfAttention"),vd.forEach(t),eh=s(Ve,"."),Ve.forEach(t),Cd=m(o),At=r(o,"P",{});var Xo=i(At);th=s(Xo,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),jd=en(Xo),Od=s(Xo,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),yi=r(Xo,"EM",{});var yd=i(yi);oh=s(yd,"symmetric"),yd.forEach(t),nh=s(Xo,"."),Xo.forEach(t),Pd=m(o),It=r(o,"P",{});var Yo=i(It);sh=s(Yo,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ti=r(Yo,"CODE",{});var Td=i(Ti);ah=s(Td,"global_attention_mask"),Td.forEach(t),rh=s(Yo,` at run-time appropriately. All Longformer models employ the following logic for
`),$i=r(Yo,"CODE",{});var $d=i($i);ih=s($d,"global_attention_mask"),$d.forEach(t),lh=s(Yo,":"),Yo.forEach(t),Nd=m(o),tn=r(o,"UL",{});var pr=i(tn);Li=r(pr,"LI",{});var Ld=i(Li);dh=s(Ld,"0: the token attends \u201Clocally\u201D,"),Ld.forEach(t),ch=m(pr),xi=r(pr,"LI",{});var xd=i(xi);mh=s(xd,"1: the token attends \u201Cglobally\u201D."),xd.forEach(t),pr.forEach(t),Ad=m(o),on=r(o,"P",{});var Qc=i(on);hh=s(Qc,"For more information please also refer to "),fr=r(Qc,"A",{href:!0});var kk=i(fr);ph=s(kk,"forward()"),kk.forEach(t),fh=s(Qc," method."),Qc.forEach(t),Id=m(o),ut=r(o,"P",{});var St=i(ut);gh=s(St,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),Dd=en(St),Sd=s(St,` to
`),Wd=en(St),Bd=s(St,", with "),Qd=en(St),Ud=s(St," being the sequence length and "),Hd=en(St),Rd=s(St,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),St.forEach(t),Kd=m(o),nn=r(o,"P",{});var Uc=i(nn);uh=s(Uc,"For more information, please refer to the official "),ps=r(Uc,"A",{href:!0,rel:!0});var bk=i(ps);_h=s(bk,"paper"),bk.forEach(t),wh=s(Uc,"."),Uc.forEach(t),Vd=m(o),Yt=r(o,"H2",{class:!0});var Hc=i(Yt);sn=r(Hc,"A",{id:!0,class:!0,href:!0});var vk=i(sn);Fi=r(vk,"SPAN",{});var yk=i(Fi);y(fs.$$.fragment,yk),yk.forEach(t),vk.forEach(t),kh=m(Hc),Mi=r(Hc,"SPAN",{});var Tk=i(Mi);bh=s(Tk,"Training"),Tk.forEach(t),Hc.forEach(t),Gd=m(o),Zt=r(o,"P",{});var Fd=i(Zt);gr=r(Fd,"A",{href:!0});var $k=i(gr);vh=s($k,"LongformerForMaskedLM"),$k.forEach(t),yh=s(Fd," is trained the exact same way "),ur=r(Fd,"A",{href:!0});var Lk=i(ur);Th=s(Lk,"RobertaForMaskedLM"),Lk.forEach(t),$h=s(Fd,` is
trained and should be used as follows:`),Fd.forEach(t),Jd=m(o),y(gs.$$.fragment,o),Xd=m(o),eo=r(o,"H2",{class:!0});var Rc=i(eo);an=r(Rc,"A",{id:!0,class:!0,href:!0});var xk=i(an);Ei=r(xk,"SPAN",{});var Fk=i(Ei);y(us.$$.fragment,Fk),Fk.forEach(t),xk.forEach(t),Lh=m(Rc),zi=r(Rc,"SPAN",{});var Mk=i(zi);xh=s(Mk,"LongformerConfig"),Mk.forEach(t),Rc.forEach(t),Yd=m(o),ct=r(o,"DIV",{class:!0});var Wt=i(ct);y(_s.$$.fragment,Wt),Fh=m(Wt),to=r(Wt,"P",{});var Yr=i(to);Mh=s(Yr,"This is the configuration class to store the configuration of a "),_r=r(Yr,"A",{href:!0});var Ek=i(_r);Eh=s(Ek,"LongformerModel"),Ek.forEach(t),zh=s(Yr," or a "),wr=r(Yr,"A",{href:!0});var zk=i(wr);qh=s(zk,"TFLongformerModel"),zk.forEach(t),Ch=s(Yr,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Yr.forEach(t),jh=m(Wt),oo=r(Wt,"P",{});var Zr=i(oo);Oh=s(Zr,"This is the configuration class to store the configuration of a "),kr=r(Zr,"A",{href:!0});var qk=i(kr);Ph=s(qk,"LongformerModel"),qk.forEach(t),Nh=s(Zr,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),ws=r(Zr,"A",{href:!0,rel:!0});var Ck=i(ws);Ah=s(Ck,"allenai/longformer-base-4096"),Ck.forEach(t),Ih=s(Zr,` architecture with a sequence
length 4,096.`),Zr.forEach(t),Dh=m(Wt),no=r(Wt,"P",{});var ei=i(no);Sh=s(ei,"The "),br=r(ei,"A",{href:!0});var jk=i(br);Wh=s(jk,"LongformerConfig"),jk.forEach(t),Bh=s(ei," class directly inherits "),vr=r(ei,"A",{href:!0});var Ok=i(vr);Qh=s(Ok,"RobertaConfig"),Ok.forEach(t),Uh=s(ei,`. It reuses the same defaults. Please check the
parent class for more information.`),ei.forEach(t),Hh=m(Wt),y(rn.$$.fragment,Wt),Wt.forEach(t),Zd=m(o),so=r(o,"H2",{class:!0});var Kc=i(so);ln=r(Kc,"A",{id:!0,class:!0,href:!0});var Pk=i(ln);qi=r(Pk,"SPAN",{});var Nk=i(qi);y(ks.$$.fragment,Nk),Nk.forEach(t),Pk.forEach(t),Rh=m(Kc),Ci=r(Kc,"SPAN",{});var Ak=i(Ci);Kh=s(Ak,"LongformerTokenizer"),Ak.forEach(t),Kc.forEach(t),ec=m(o),Ot=r(o,"DIV",{class:!0});var ti=i(Ot);y(bs.$$.fragment,ti),Vh=m(ti),ji=r(ti,"P",{});var Ik=i(ji);Gh=s(Ik,"Construct a Longformer tokenizer."),Ik.forEach(t),Jh=m(ti),dn=r(ti,"P",{});var Md=i(dn);yr=r(Md,"A",{href:!0});var Dk=i(yr);Xh=s(Dk,"LongformerTokenizer"),Dk.forEach(t),Yh=s(Md," is identical to "),Tr=r(Md,"A",{href:!0});var Sk=i(Tr);Zh=s(Sk,"RobertaTokenizer"),Sk.forEach(t),ep=s(Md,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Md.forEach(t),ti.forEach(t),tc=m(o),ao=r(o,"H2",{class:!0});var Vc=i(ao);cn=r(Vc,"A",{id:!0,class:!0,href:!0});var Wk=i(cn);Oi=r(Wk,"SPAN",{});var Bk=i(Oi);y(vs.$$.fragment,Bk),Bk.forEach(t),Wk.forEach(t),tp=m(Vc),Pi=r(Vc,"SPAN",{});var Qk=i(Pi);op=s(Qk,"LongformerTokenizerFast"),Qk.forEach(t),Vc.forEach(t),oc=m(o),Pt=r(o,"DIV",{class:!0});var oi=i(Pt);y(ys.$$.fragment,oi),np=m(oi),Ts=r(oi,"P",{});var Gc=i(Ts);sp=s(Gc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),Ni=r(Gc,"EM",{});var Uk=i(Ni);ap=s(Uk,"tokenizers"),Uk.forEach(t),rp=s(Gc," library)."),Gc.forEach(t),ip=m(oi),mn=r(oi,"P",{});var Ed=i(mn);$r=r(Ed,"A",{href:!0});var Hk=i($r);lp=s(Hk,"LongformerTokenizerFast"),Hk.forEach(t),dp=s(Ed," is identical to "),Lr=r(Ed,"A",{href:!0});var Rk=i(Lr);cp=s(Rk,"RobertaTokenizerFast"),Rk.forEach(t),mp=s(Ed,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Ed.forEach(t),oi.forEach(t),nc=m(o),ro=r(o,"H2",{class:!0});var Jc=i(ro);hn=r(Jc,"A",{id:!0,class:!0,href:!0});var Kk=i(hn);Ai=r(Kk,"SPAN",{});var Vk=i(Ai);y($s.$$.fragment,Vk),Vk.forEach(t),Kk.forEach(t),hp=m(Jc),Ii=r(Jc,"SPAN",{});var Gk=i(Ii);pp=s(Gk,"Longformer specific outputs"),Gk.forEach(t),Jc.forEach(t),sc=m(o),io=r(o,"DIV",{class:!0});var Xc=i(io);y(Ls.$$.fragment,Xc),fp=m(Xc),Di=r(Xc,"P",{});var Jk=i(Di);gp=s(Jk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Jk.forEach(t),Xc.forEach(t),ac=m(o),lo=r(o,"DIV",{class:!0});var Yc=i(lo);y(xs.$$.fragment,Yc),up=m(Yc),Si=r(Yc,"P",{});var Xk=i(Si);_p=s(Xk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Xk.forEach(t),Yc.forEach(t),rc=m(o),co=r(o,"DIV",{class:!0});var Zc=i(co);y(Fs.$$.fragment,Zc),wp=m(Zc),Wi=r(Zc,"P",{});var Yk=i(Wi);kp=s(Yk,"Base class for masked language models outputs."),Yk.forEach(t),Zc.forEach(t),ic=m(o),mo=r(o,"DIV",{class:!0});var em=i(mo);y(Ms.$$.fragment,em),bp=m(em),Bi=r(em,"P",{});var Zk=i(Bi);vp=s(Zk,"Base class for outputs of question answering Longformer models."),Zk.forEach(t),em.forEach(t),lc=m(o),ho=r(o,"DIV",{class:!0});var tm=i(ho);y(Es.$$.fragment,tm),yp=m(tm),Qi=r(tm,"P",{});var eb=i(Qi);Tp=s(eb,"Base class for outputs of sentence classification models."),eb.forEach(t),tm.forEach(t),dc=m(o),po=r(o,"DIV",{class:!0});var om=i(po);y(zs.$$.fragment,om),$p=m(om),Ui=r(om,"P",{});var tb=i(Ui);Lp=s(tb,"Base class for outputs of multiple choice Longformer models."),tb.forEach(t),om.forEach(t),cc=m(o),fo=r(o,"DIV",{class:!0});var nm=i(fo);y(qs.$$.fragment,nm),xp=m(nm),Hi=r(nm,"P",{});var ob=i(Hi);Fp=s(ob,"Base class for outputs of token classification models."),ob.forEach(t),nm.forEach(t),mc=m(o),go=r(o,"DIV",{class:!0});var sm=i(go);y(Cs.$$.fragment,sm),Mp=m(sm),Ri=r(sm,"P",{});var nb=i(Ri);Ep=s(nb,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),nb.forEach(t),sm.forEach(t),hc=m(o),uo=r(o,"DIV",{class:!0});var am=i(uo);y(js.$$.fragment,am),zp=m(am),Ki=r(am,"P",{});var sb=i(Ki);qp=s(sb,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),sb.forEach(t),am.forEach(t),pc=m(o),_o=r(o,"DIV",{class:!0});var rm=i(_o);y(Os.$$.fragment,rm),Cp=m(rm),Vi=r(rm,"P",{});var ab=i(Vi);jp=s(ab,"Base class for masked language models outputs."),ab.forEach(t),rm.forEach(t),fc=m(o),wo=r(o,"DIV",{class:!0});var im=i(wo);y(Ps.$$.fragment,im),Op=m(im),Gi=r(im,"P",{});var rb=i(Gi);Pp=s(rb,"Base class for outputs of question answering Longformer models."),rb.forEach(t),im.forEach(t),gc=m(o),ko=r(o,"DIV",{class:!0});var lm=i(ko);y(Ns.$$.fragment,lm),Np=m(lm),Ji=r(lm,"P",{});var ib=i(Ji);Ap=s(ib,"Base class for outputs of sentence classification models."),ib.forEach(t),lm.forEach(t),uc=m(o),bo=r(o,"DIV",{class:!0});var dm=i(bo);y(As.$$.fragment,dm),Ip=m(dm),Xi=r(dm,"P",{});var lb=i(Xi);Dp=s(lb,"Base class for outputs of multiple choice models."),lb.forEach(t),dm.forEach(t),_c=m(o),vo=r(o,"DIV",{class:!0});var cm=i(vo);y(Is.$$.fragment,cm),Sp=m(cm),Yi=r(cm,"P",{});var db=i(Yi);Wp=s(db,"Base class for outputs of token classification models."),db.forEach(t),cm.forEach(t),wc=m(o),yo=r(o,"H2",{class:!0});var mm=i(yo);pn=r(mm,"A",{id:!0,class:!0,href:!0});var cb=i(pn);Zi=r(cb,"SPAN",{});var mb=i(Zi);y(Ds.$$.fragment,mb),mb.forEach(t),cb.forEach(t),Bp=m(mm),el=r(mm,"SPAN",{});var hb=i(el);Qp=s(hb,"LongformerModel"),hb.forEach(t),mm.forEach(t),kc=m(o),et=r(o,"DIV",{class:!0});var yt=i(et);y(Ss.$$.fragment,yt),Up=m(yt),tl=r(yt,"P",{});var pb=i(tl);Hp=s(pb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),pb.forEach(t),Rp=m(yt),Ws=r(yt,"P",{});var hm=i(Ws);Kp=s(hm,"This model inherits from "),xr=r(hm,"A",{href:!0});var fb=i(xr);Vp=s(fb,"PreTrainedModel"),fb.forEach(t),Gp=s(hm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hm.forEach(t),Jp=m(yt),Bs=r(yt,"P",{});var pm=i(Bs);Xp=s(pm,"This model is also a PyTorch "),Qs=r(pm,"A",{href:!0,rel:!0});var gb=i(Qs);Yp=s(gb,"torch.nn.Module"),gb.forEach(t),Zp=s(pm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pm.forEach(t),ef=m(yt),To=r(yt,"P",{});var ni=i(To);tf=s(ni,"This class copied code from "),Fr=r(ni,"A",{href:!0});var ub=i(Fr);of=s(ub,"RobertaModel"),ub.forEach(t),nf=s(ni,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Us=r(ni,"A",{href:!0,rel:!0});var _b=i(Us);sf=s(_b,`Longformer:
the Long-Document Transformer`),_b.forEach(t),af=s(ni,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),ni.forEach(t),rf=m(yt),Hs=r(yt,"P",{});var fm=i(Hs);lf=s(fm,"The self-attention module "),ol=r(fm,"CODE",{});var wb=i(ol);df=s(wb,"LongformerSelfAttention"),wb.forEach(t),cf=s(fm,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),fm.forEach(t),mf=m(yt),$t=r(yt,"DIV",{class:!0});var ds=i($t);y(Rs.$$.fragment,ds),hf=m(ds),$o=r(ds,"P",{});var si=i($o);pf=s(si,"The "),Mr=r(si,"A",{href:!0});var kb=i(Mr);ff=s(kb,"LongformerModel"),kb.forEach(t),gf=s(si," forward method, overrides the "),nl=r(si,"CODE",{});var bb=i(nl);uf=s(bb,"__call__"),bb.forEach(t),_f=s(si," special method."),si.forEach(t),wf=m(ds),y(fn.$$.fragment,ds),kf=m(ds),y(gn.$$.fragment,ds),ds.forEach(t),yt.forEach(t),bc=m(o),Lo=r(o,"H2",{class:!0});var gm=i(Lo);un=r(gm,"A",{id:!0,class:!0,href:!0});var vb=i(un);sl=r(vb,"SPAN",{});var yb=i(sl);y(Ks.$$.fragment,yb),yb.forEach(t),vb.forEach(t),bf=m(gm),al=r(gm,"SPAN",{});var Tb=i(al);vf=s(Tb,"LongformerForMaskedLM"),Tb.forEach(t),gm.forEach(t),vc=m(o),mt=r(o,"DIV",{class:!0});var Bt=i(mt);y(Vs.$$.fragment,Bt),yf=m(Bt),Gs=r(Bt,"P",{});var um=i(Gs);Tf=s(um,"Longformer Model with a "),rl=r(um,"CODE",{});var $b=i(rl);$f=s($b,"language modeling"),$b.forEach(t),Lf=s(um," head on top."),um.forEach(t),xf=m(Bt),Js=r(Bt,"P",{});var _m=i(Js);Ff=s(_m,"This model inherits from "),Er=r(_m,"A",{href:!0});var Lb=i(Er);Mf=s(Lb,"PreTrainedModel"),Lb.forEach(t),Ef=s(_m,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_m.forEach(t),zf=m(Bt),Xs=r(Bt,"P",{});var wm=i(Xs);qf=s(wm,"This model is also a PyTorch "),Ys=r(wm,"A",{href:!0,rel:!0});var xb=i(Ys);Cf=s(xb,"torch.nn.Module"),xb.forEach(t),jf=s(wm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wm.forEach(t),Of=m(Bt),lt=r(Bt,"DIV",{class:!0});var Mt=i(lt);y(Zs.$$.fragment,Mt),Pf=m(Mt),xo=r(Mt,"P",{});var ai=i(xo);Nf=s(ai,"The "),zr=r(ai,"A",{href:!0});var Fb=i(zr);Af=s(Fb,"LongformerForMaskedLM"),Fb.forEach(t),If=s(ai," forward method, overrides the "),il=r(ai,"CODE",{});var Mb=i(il);Df=s(Mb,"__call__"),Mb.forEach(t),Sf=s(ai," special method."),ai.forEach(t),Wf=m(Mt),y(_n.$$.fragment,Mt),Bf=m(Mt),y(wn.$$.fragment,Mt),Qf=m(Mt),ll=r(Mt,"P",{});var Eb=i(ll);Uf=s(Eb,"Let\u2019s try a very long input."),Eb.forEach(t),Hf=m(Mt),y(kn.$$.fragment,Mt),Mt.forEach(t),Bt.forEach(t),yc=m(o),Fo=r(o,"H2",{class:!0});var km=i(Fo);bn=r(km,"A",{id:!0,class:!0,href:!0});var zb=i(bn);dl=r(zb,"SPAN",{});var qb=i(dl);y(ea.$$.fragment,qb),qb.forEach(t),zb.forEach(t),Rf=m(km),cl=r(km,"SPAN",{});var Cb=i(cl);Kf=s(Cb,"LongformerForSequenceClassification"),Cb.forEach(t),km.forEach(t),Tc=m(o),ht=r(o,"DIV",{class:!0});var Qt=i(ht);y(ta.$$.fragment,Qt),Vf=m(Qt),ml=r(Qt,"P",{});var jb=i(ml);Gf=s(jb,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jb.forEach(t),Jf=m(Qt),oa=r(Qt,"P",{});var bm=i(oa);Xf=s(bm,"This model inherits from "),qr=r(bm,"A",{href:!0});var Ob=i(qr);Yf=s(Ob,"PreTrainedModel"),Ob.forEach(t),Zf=s(bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm.forEach(t),eg=m(Qt),na=r(Qt,"P",{});var vm=i(na);tg=s(vm,"This model is also a PyTorch "),sa=r(vm,"A",{href:!0,rel:!0});var Pb=i(sa);og=s(Pb,"torch.nn.Module"),Pb.forEach(t),ng=s(vm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vm.forEach(t),sg=m(Qt),tt=r(Qt,"DIV",{class:!0});var Tt=i(tt);y(aa.$$.fragment,Tt),ag=m(Tt),Mo=r(Tt,"P",{});var ri=i(Mo);rg=s(ri,"The "),Cr=r(ri,"A",{href:!0});var Nb=i(Cr);ig=s(Nb,"LongformerForSequenceClassification"),Nb.forEach(t),lg=s(ri," forward method, overrides the "),hl=r(ri,"CODE",{});var Ab=i(hl);dg=s(Ab,"__call__"),Ab.forEach(t),cg=s(ri," special method."),ri.forEach(t),mg=m(Tt),y(vn.$$.fragment,Tt),hg=m(Tt),y(yn.$$.fragment,Tt),pg=m(Tt),y(Tn.$$.fragment,Tt),fg=m(Tt),y($n.$$.fragment,Tt),gg=m(Tt),y(Ln.$$.fragment,Tt),Tt.forEach(t),Qt.forEach(t),$c=m(o),Eo=r(o,"H2",{class:!0});var ym=i(Eo);xn=r(ym,"A",{id:!0,class:!0,href:!0});var Ib=i(xn);pl=r(Ib,"SPAN",{});var Db=i(pl);y(ra.$$.fragment,Db),Db.forEach(t),Ib.forEach(t),ug=m(ym),fl=r(ym,"SPAN",{});var Sb=i(fl);_g=s(Sb,"LongformerForMultipleChoice"),Sb.forEach(t),ym.forEach(t),Lc=m(o),pt=r(o,"DIV",{class:!0});var Ut=i(pt);y(ia.$$.fragment,Ut),wg=m(Ut),gl=r(Ut,"P",{});var Wb=i(gl);kg=s(Wb,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wb.forEach(t),bg=m(Ut),la=r(Ut,"P",{});var Tm=i(la);vg=s(Tm,"This model inherits from "),jr=r(Tm,"A",{href:!0});var Bb=i(jr);yg=s(Bb,"PreTrainedModel"),Bb.forEach(t),Tg=s(Tm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tm.forEach(t),$g=m(Ut),da=r(Ut,"P",{});var $m=i(da);Lg=s($m,"This model is also a PyTorch "),ca=r($m,"A",{href:!0,rel:!0});var Qb=i(ca);xg=s(Qb,"torch.nn.Module"),Qb.forEach(t),Fg=s($m,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$m.forEach(t),Mg=m(Ut),Lt=r(Ut,"DIV",{class:!0});var cs=i(Lt);y(ma.$$.fragment,cs),Eg=m(cs),zo=r(cs,"P",{});var ii=i(zo);zg=s(ii,"The "),Or=r(ii,"A",{href:!0});var Ub=i(Or);qg=s(Ub,"LongformerForMultipleChoice"),Ub.forEach(t),Cg=s(ii," forward method, overrides the "),ul=r(ii,"CODE",{});var Hb=i(ul);jg=s(Hb,"__call__"),Hb.forEach(t),Og=s(ii," special method."),ii.forEach(t),Pg=m(cs),y(Fn.$$.fragment,cs),Ng=m(cs),y(Mn.$$.fragment,cs),cs.forEach(t),Ut.forEach(t),xc=m(o),qo=r(o,"H2",{class:!0});var Lm=i(qo);En=r(Lm,"A",{id:!0,class:!0,href:!0});var Rb=i(En);_l=r(Rb,"SPAN",{});var Kb=i(_l);y(ha.$$.fragment,Kb),Kb.forEach(t),Rb.forEach(t),Ag=m(Lm),wl=r(Lm,"SPAN",{});var Vb=i(wl);Ig=s(Vb,"LongformerForTokenClassification"),Vb.forEach(t),Lm.forEach(t),Fc=m(o),ft=r(o,"DIV",{class:!0});var Ht=i(ft);y(pa.$$.fragment,Ht),Dg=m(Ht),kl=r(Ht,"P",{});var Gb=i(kl);Sg=s(Gb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Gb.forEach(t),Wg=m(Ht),fa=r(Ht,"P",{});var xm=i(fa);Bg=s(xm,"This model inherits from "),Pr=r(xm,"A",{href:!0});var Jb=i(Pr);Qg=s(Jb,"PreTrainedModel"),Jb.forEach(t),Ug=s(xm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xm.forEach(t),Hg=m(Ht),ga=r(Ht,"P",{});var Fm=i(ga);Rg=s(Fm,"This model is also a PyTorch "),ua=r(Fm,"A",{href:!0,rel:!0});var Xb=i(ua);Kg=s(Xb,"torch.nn.Module"),Xb.forEach(t),Vg=s(Fm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fm.forEach(t),Gg=m(Ht),_t=r(Ht,"DIV",{class:!0});var Rt=i(_t);y(_a.$$.fragment,Rt),Jg=m(Rt),Co=r(Rt,"P",{});var li=i(Co);Xg=s(li,"The "),Nr=r(li,"A",{href:!0});var Yb=i(Nr);Yg=s(Yb,"LongformerForTokenClassification"),Yb.forEach(t),Zg=s(li," forward method, overrides the "),bl=r(li,"CODE",{});var Zb=i(bl);eu=s(Zb,"__call__"),Zb.forEach(t),tu=s(li," special method."),li.forEach(t),ou=m(Rt),y(zn.$$.fragment,Rt),nu=m(Rt),y(qn.$$.fragment,Rt),su=m(Rt),y(Cn.$$.fragment,Rt),Rt.forEach(t),Ht.forEach(t),Mc=m(o),jo=r(o,"H2",{class:!0});var Mm=i(jo);jn=r(Mm,"A",{id:!0,class:!0,href:!0});var ev=i(jn);vl=r(ev,"SPAN",{});var tv=i(vl);y(wa.$$.fragment,tv),tv.forEach(t),ev.forEach(t),au=m(Mm),yl=r(Mm,"SPAN",{});var ov=i(yl);ru=s(ov,"LongformerForQuestionAnswering"),ov.forEach(t),Mm.forEach(t),Ec=m(o),gt=r(o,"DIV",{class:!0});var Kt=i(gt);y(ka.$$.fragment,Kt),iu=m(Kt),Oo=r(Kt,"P",{});var di=i(Oo);lu=s(di,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),Tl=r(di,"CODE",{});var nv=i(Tl);du=s(nv,"span start logits"),nv.forEach(t),cu=s(di," and "),$l=r(di,"CODE",{});var sv=i($l);mu=s(sv,"span end logits"),sv.forEach(t),hu=s(di,")."),di.forEach(t),pu=m(Kt),ba=r(Kt,"P",{});var Em=i(ba);fu=s(Em,"This model inherits from "),Ar=r(Em,"A",{href:!0});var av=i(Ar);gu=s(av,"PreTrainedModel"),av.forEach(t),uu=s(Em,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Em.forEach(t),_u=m(Kt),va=r(Kt,"P",{});var zm=i(va);wu=s(zm,"This model is also a PyTorch "),ya=r(zm,"A",{href:!0,rel:!0});var rv=i(ya);ku=s(rv,"torch.nn.Module"),rv.forEach(t),bu=s(zm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zm.forEach(t),vu=m(Kt),xt=r(Kt,"DIV",{class:!0});var ms=i(xt);y(Ta.$$.fragment,ms),yu=m(ms),Po=r(ms,"P",{});var ci=i(Po);Tu=s(ci,"The "),Ir=r(ci,"A",{href:!0});var iv=i(Ir);$u=s(iv,"LongformerForQuestionAnswering"),iv.forEach(t),Lu=s(ci," forward method, overrides the "),Ll=r(ci,"CODE",{});var lv=i(Ll);xu=s(lv,"__call__"),lv.forEach(t),Fu=s(ci," special method."),ci.forEach(t),Mu=m(ms),y(On.$$.fragment,ms),Eu=m(ms),y(Pn.$$.fragment,ms),ms.forEach(t),Kt.forEach(t),zc=m(o),No=r(o,"H2",{class:!0});var qm=i(No);Nn=r(qm,"A",{id:!0,class:!0,href:!0});var dv=i(Nn);xl=r(dv,"SPAN",{});var cv=i(xl);y($a.$$.fragment,cv),cv.forEach(t),dv.forEach(t),zu=m(qm),Fl=r(qm,"SPAN",{});var mv=i(Fl);qu=s(mv,"TFLongformerModel"),mv.forEach(t),qm.forEach(t),qc=m(o),Ke=r(o,"DIV",{class:!0});var dt=i(Ke);y(La.$$.fragment,dt),Cu=m(dt),Ml=r(dt,"P",{});var hv=i(Ml);ju=s(hv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),hv.forEach(t),Ou=m(dt),xa=r(dt,"P",{});var Cm=i(xa);Pu=s(Cm,"This model inherits from "),Dr=r(Cm,"A",{href:!0});var pv=i(Dr);Nu=s(pv,"TFPreTrainedModel"),pv.forEach(t),Au=s(Cm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cm.forEach(t),Iu=m(dt),Fa=r(dt,"P",{});var jm=i(Fa);Du=s(jm,"This model is also a "),Ma=r(jm,"A",{href:!0,rel:!0});var fv=i(Ma);Su=s(fv,"tf.keras.Model"),fv.forEach(t),Wu=s(jm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jm.forEach(t),Bu=m(dt),y(An.$$.fragment,dt),Qu=m(dt),Ao=r(dt,"P",{});var mi=i(Ao);Uu=s(mi,"This class copies code from "),Sr=r(mi,"A",{href:!0});var gv=i(Sr);Hu=s(gv,"TFRobertaModel"),gv.forEach(t),Ru=s(mi,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Ea=r(mi,"A",{href:!0,rel:!0});var uv=i(Ea);Ku=s(uv,"Longformer: the Long-Document Transformer"),uv.forEach(t),Vu=s(mi,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),mi.forEach(t),Gu=m(dt),za=r(dt,"P",{});var Om=i(za);Ju=s(Om,"The self-attention module "),El=r(Om,"CODE",{});var _v=i(El);Xu=s(_v,"TFLongformerSelfAttention"),_v.forEach(t),Yu=s(Om,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Om.forEach(t),Zu=m(dt),Dt=r(dt,"DIV",{class:!0});var hi=i(Dt);y(qa.$$.fragment,hi),e_=m(hi),Io=r(hi,"P",{});var pi=i(Io);t_=s(pi,"The "),Wr=r(pi,"A",{href:!0});var wv=i(Wr);o_=s(wv,"TFLongformerModel"),wv.forEach(t),n_=s(pi," forward method, overrides the "),zl=r(pi,"CODE",{});var kv=i(zl);s_=s(kv,"__call__"),kv.forEach(t),a_=s(pi," special method."),pi.forEach(t),r_=m(hi),y(In.$$.fragment,hi),hi.forEach(t),dt.forEach(t),Cc=m(o),Do=r(o,"H2",{class:!0});var Pm=i(Do);Dn=r(Pm,"A",{id:!0,class:!0,href:!0});var bv=i(Dn);ql=r(bv,"SPAN",{});var vv=i(ql);y(Ca.$$.fragment,vv),vv.forEach(t),bv.forEach(t),i_=m(Pm),Cl=r(Pm,"SPAN",{});var yv=i(Cl);l_=s(yv,"TFLongformerForMaskedLM"),yv.forEach(t),Pm.forEach(t),jc=m(o),nt=r(o,"DIV",{class:!0});var Et=i(nt);y(ja.$$.fragment,Et),d_=m(Et),Oa=r(Et,"P",{});var Nm=i(Oa);c_=s(Nm,"Longformer Model with a "),jl=r(Nm,"CODE",{});var Tv=i(jl);m_=s(Tv,"language modeling"),Tv.forEach(t),h_=s(Nm," head on top."),Nm.forEach(t),p_=m(Et),Pa=r(Et,"P",{});var Am=i(Pa);f_=s(Am,"This model inherits from "),Br=r(Am,"A",{href:!0});var $v=i(Br);g_=s($v,"TFPreTrainedModel"),$v.forEach(t),u_=s(Am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Am.forEach(t),__=m(Et),Na=r(Et,"P",{});var Im=i(Na);w_=s(Im,"This model is also a "),Aa=r(Im,"A",{href:!0,rel:!0});var Lv=i(Aa);k_=s(Lv,"tf.keras.Model"),Lv.forEach(t),b_=s(Im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im.forEach(t),v_=m(Et),y(Sn.$$.fragment,Et),y_=m(Et),wt=r(Et,"DIV",{class:!0});var Vt=i(wt);y(Ia.$$.fragment,Vt),T_=m(Vt),So=r(Vt,"P",{});var fi=i(So);$_=s(fi,"The "),Qr=r(fi,"A",{href:!0});var xv=i(Qr);L_=s(xv,"TFLongformerForMaskedLM"),xv.forEach(t),x_=s(fi," forward method, overrides the "),Ol=r(fi,"CODE",{});var Fv=i(Ol);F_=s(Fv,"__call__"),Fv.forEach(t),M_=s(fi," special method."),fi.forEach(t),E_=m(Vt),y(Wn.$$.fragment,Vt),z_=m(Vt),y(Bn.$$.fragment,Vt),q_=m(Vt),y(Qn.$$.fragment,Vt),Vt.forEach(t),Et.forEach(t),Oc=m(o),Wo=r(o,"H2",{class:!0});var Dm=i(Wo);Un=r(Dm,"A",{id:!0,class:!0,href:!0});var Mv=i(Un);Pl=r(Mv,"SPAN",{});var Ev=i(Pl);y(Da.$$.fragment,Ev),Ev.forEach(t),Mv.forEach(t),C_=m(Dm),Nl=r(Dm,"SPAN",{});var zv=i(Nl);j_=s(zv,"TFLongformerForQuestionAnswering"),zv.forEach(t),Dm.forEach(t),Pc=m(o),st=r(o,"DIV",{class:!0});var zt=i(st);y(Sa.$$.fragment,zt),O_=m(zt),Bo=r(zt,"P",{});var gi=i(Bo);P_=s(gi,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),Al=r(gi,"CODE",{});var qv=i(Al);N_=s(qv,"span start logits"),qv.forEach(t),A_=s(gi," and "),Il=r(gi,"CODE",{});var Cv=i(Il);I_=s(Cv,"span end logits"),Cv.forEach(t),D_=s(gi,")."),gi.forEach(t),S_=m(zt),Wa=r(zt,"P",{});var Sm=i(Wa);W_=s(Sm,"This model inherits from "),Ur=r(Sm,"A",{href:!0});var jv=i(Ur);B_=s(jv,"TFPreTrainedModel"),jv.forEach(t),Q_=s(Sm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sm.forEach(t),U_=m(zt),Ba=r(zt,"P",{});var Wm=i(Ba);H_=s(Wm,"This model is also a "),Qa=r(Wm,"A",{href:!0,rel:!0});var Ov=i(Qa);R_=s(Ov,"tf.keras.Model"),Ov.forEach(t),K_=s(Wm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wm.forEach(t),V_=m(zt),y(Hn.$$.fragment,zt),G_=m(zt),kt=r(zt,"DIV",{class:!0});var Gt=i(kt);y(Ua.$$.fragment,Gt),J_=m(Gt),Qo=r(Gt,"P",{});var ui=i(Qo);X_=s(ui,"The "),Hr=r(ui,"A",{href:!0});var Pv=i(Hr);Y_=s(Pv,"TFLongformerForQuestionAnswering"),Pv.forEach(t),Z_=s(ui," forward method, overrides the "),Dl=r(ui,"CODE",{});var Nv=i(Dl);ew=s(Nv,"__call__"),Nv.forEach(t),tw=s(ui," special method."),ui.forEach(t),ow=m(Gt),y(Rn.$$.fragment,Gt),nw=m(Gt),y(Kn.$$.fragment,Gt),sw=m(Gt),y(Vn.$$.fragment,Gt),Gt.forEach(t),zt.forEach(t),Nc=m(o),Uo=r(o,"H2",{class:!0});var Bm=i(Uo);Gn=r(Bm,"A",{id:!0,class:!0,href:!0});var Av=i(Gn);Sl=r(Av,"SPAN",{});var Iv=i(Sl);y(Ha.$$.fragment,Iv),Iv.forEach(t),Av.forEach(t),aw=m(Bm),Wl=r(Bm,"SPAN",{});var Dv=i(Wl);rw=s(Dv,"TFLongformerForSequenceClassification"),Dv.forEach(t),Bm.forEach(t),Ac=m(o),at=r(o,"DIV",{class:!0});var qt=i(at);y(Ra.$$.fragment,qt),iw=m(qt),Bl=r(qt,"P",{});var Sv=i(Bl);lw=s(Sv,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Sv.forEach(t),dw=m(qt),Ka=r(qt,"P",{});var Qm=i(Ka);cw=s(Qm,"This model inherits from "),Rr=r(Qm,"A",{href:!0});var Wv=i(Rr);mw=s(Wv,"TFPreTrainedModel"),Wv.forEach(t),hw=s(Qm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qm.forEach(t),pw=m(qt),Va=r(qt,"P",{});var Um=i(Va);fw=s(Um,"This model is also a "),Ga=r(Um,"A",{href:!0,rel:!0});var Bv=i(Ga);gw=s(Bv,"tf.keras.Model"),Bv.forEach(t),uw=s(Um,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Um.forEach(t),_w=m(qt),y(Jn.$$.fragment,qt),ww=m(qt),bt=r(qt,"DIV",{class:!0});var Jt=i(bt);y(Ja.$$.fragment,Jt),kw=m(Jt),Ho=r(Jt,"P",{});var _i=i(Ho);bw=s(_i,"The "),Kr=r(_i,"A",{href:!0});var Qv=i(Kr);vw=s(Qv,"TFLongformerForSequenceClassification"),Qv.forEach(t),yw=s(_i," forward method, overrides the "),Ql=r(_i,"CODE",{});var Uv=i(Ql);Tw=s(Uv,"__call__"),Uv.forEach(t),$w=s(_i," special method."),_i.forEach(t),Lw=m(Jt),y(Xn.$$.fragment,Jt),xw=m(Jt),y(Yn.$$.fragment,Jt),Fw=m(Jt),y(Zn.$$.fragment,Jt),Jt.forEach(t),qt.forEach(t),Ic=m(o),Ro=r(o,"H2",{class:!0});var Hm=i(Ro);es=r(Hm,"A",{id:!0,class:!0,href:!0});var Hv=i(es);Ul=r(Hv,"SPAN",{});var Rv=i(Ul);y(Xa.$$.fragment,Rv),Rv.forEach(t),Hv.forEach(t),Mw=m(Hm),Hl=r(Hm,"SPAN",{});var Kv=i(Hl);Ew=s(Kv,"TFLongformerForTokenClassification"),Kv.forEach(t),Hm.forEach(t),Dc=m(o),rt=r(o,"DIV",{class:!0});var Ct=i(rt);y(Ya.$$.fragment,Ct),zw=m(Ct),Rl=r(Ct,"P",{});var Vv=i(Rl);qw=s(Vv,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Vv.forEach(t),Cw=m(Ct),Za=r(Ct,"P",{});var Rm=i(Za);jw=s(Rm,"This model inherits from "),Vr=r(Rm,"A",{href:!0});var Gv=i(Vr);Ow=s(Gv,"TFPreTrainedModel"),Gv.forEach(t),Pw=s(Rm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rm.forEach(t),Nw=m(Ct),er=r(Ct,"P",{});var Km=i(er);Aw=s(Km,"This model is also a "),tr=r(Km,"A",{href:!0,rel:!0});var Jv=i(tr);Iw=s(Jv,"tf.keras.Model"),Jv.forEach(t),Dw=s(Km,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Km.forEach(t),Sw=m(Ct),y(ts.$$.fragment,Ct),Ww=m(Ct),vt=r(Ct,"DIV",{class:!0});var Xt=i(vt);y(or.$$.fragment,Xt),Bw=m(Xt),Ko=r(Xt,"P",{});var wi=i(Ko);Qw=s(wi,"The "),Gr=r(wi,"A",{href:!0});var Xv=i(Gr);Uw=s(Xv,"TFLongformerForTokenClassification"),Xv.forEach(t),Hw=s(wi," forward method, overrides the "),Kl=r(wi,"CODE",{});var Yv=i(Kl);Rw=s(Yv,"__call__"),Yv.forEach(t),Kw=s(wi," special method."),wi.forEach(t),Vw=m(Xt),y(os.$$.fragment,Xt),Gw=m(Xt),y(ns.$$.fragment,Xt),Jw=m(Xt),y(ss.$$.fragment,Xt),Xt.forEach(t),Ct.forEach(t),Sc=m(o),Vo=r(o,"H2",{class:!0});var Vm=i(Vo);as=r(Vm,"A",{id:!0,class:!0,href:!0});var Zv=i(as);Vl=r(Zv,"SPAN",{});var ey=i(Vl);y(nr.$$.fragment,ey),ey.forEach(t),Zv.forEach(t),Xw=m(Vm),Gl=r(Vm,"SPAN",{});var ty=i(Gl);Yw=s(ty,"TFLongformerForMultipleChoice"),ty.forEach(t),Vm.forEach(t),Wc=m(o),it=r(o,"DIV",{class:!0});var jt=i(it);y(sr.$$.fragment,jt),Zw=m(jt),Jl=r(jt,"P",{});var oy=i(Jl);ek=s(oy,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),oy.forEach(t),tk=m(jt),ar=r(jt,"P",{});var Gm=i(ar);ok=s(Gm,"This model inherits from "),Jr=r(Gm,"A",{href:!0});var ny=i(Jr);nk=s(ny,"TFPreTrainedModel"),ny.forEach(t),sk=s(Gm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gm.forEach(t),ak=m(jt),rr=r(jt,"P",{});var Jm=i(rr);rk=s(Jm,"This model is also a "),ir=r(Jm,"A",{href:!0,rel:!0});var sy=i(ir);ik=s(sy,"tf.keras.Model"),sy.forEach(t),lk=s(Jm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jm.forEach(t),dk=m(jt),y(rs.$$.fragment,jt),ck=m(jt),Ft=r(jt,"DIV",{class:!0});var hs=i(Ft);y(lr.$$.fragment,hs),mk=m(hs),Go=r(hs,"P",{});var ki=i(Go);hk=s(ki,"The "),Xr=r(ki,"A",{href:!0});var ay=i(Xr);pk=s(ay,"TFLongformerForMultipleChoice"),ay.forEach(t),fk=s(ki," forward method, overrides the "),Xl=r(ki,"CODE",{});var ry=i(Xl);gk=s(ry,"__call__"),ry.forEach(t),uk=s(ki," special method."),ki.forEach(t),_k=m(hs),y(is.$$.fragment,hs),wk=m(hs),y(ls.$$.fragment,hs),hs.forEach(t),jt.forEach(t),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(sT)),g(_,"id","longformer"),g(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_,"href","#longformer"),g(h,"class","relative group"),g(ie,"id","overview"),g(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ie,"href","#overview"),g(A,"class","relative group"),g(de,"href","https://arxiv.org/pdf/2004.05150.pdf"),g(de,"rel","nofollow"),g(ce,"href","https://huggingface.co/beltagy"),g(ce,"rel","nofollow"),g(Z,"href","https://github.com/allenai/longformer"),g(Z,"rel","nofollow"),g(le,"id","longformer-self-attention"),g(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(le,"href","#longformer-self-attention"),g(ae,"class","relative group"),Ae.a=Ie,De.a=K,Se.a=V,zd.a=qd,jd.a=Od,g(fr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel.forward"),Dd.a=Sd,Wd.a=Bd,Qd.a=Ud,Hd.a=Rd,g(ps,"href","https://arxiv.org/pdf/2004.05150.pdf"),g(ps,"rel","nofollow"),g(sn,"id","training"),g(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(sn,"href","#training"),g(Yt,"class","relative group"),g(gr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),g(ur,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),g(an,"id","transformers.LongformerConfig"),g(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(an,"href","#transformers.LongformerConfig"),g(eo,"class","relative group"),g(_r,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),g(wr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),g(kr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),g(ws,"href","https://huggingface.co/allenai/longformer-base-4096"),g(ws,"rel","nofollow"),g(br,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"),g(vr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ln,"id","transformers.LongformerTokenizer"),g(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ln,"href","#transformers.LongformerTokenizer"),g(so,"class","relative group"),g(yr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer"),g(Tr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),g(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(cn,"id","transformers.LongformerTokenizerFast"),g(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(cn,"href","#transformers.LongformerTokenizerFast"),g(ao,"class","relative group"),g($r,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizerFast"),g(Lr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(hn,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),g(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(hn,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),g(ro,"class","relative group"),g(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pn,"id","transformers.LongformerModel"),g(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(pn,"href","#transformers.LongformerModel"),g(yo,"class","relative group"),g(xr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Qs,"rel","nofollow"),g(Fr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),g(Us,"href","https://arxiv.org/abs/2004.05150"),g(Us,"rel","nofollow"),g(Mr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(un,"id","transformers.LongformerForMaskedLM"),g(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(un,"href","#transformers.LongformerForMaskedLM"),g(Lo,"class","relative group"),g(Er,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ys,"rel","nofollow"),g(zr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bn,"id","transformers.LongformerForSequenceClassification"),g(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(bn,"href","#transformers.LongformerForSequenceClassification"),g(Fo,"class","relative group"),g(qr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(sa,"rel","nofollow"),g(Cr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xn,"id","transformers.LongformerForMultipleChoice"),g(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(xn,"href","#transformers.LongformerForMultipleChoice"),g(Eo,"class","relative group"),g(jr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ca,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ca,"rel","nofollow"),g(Or,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),g(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(En,"id","transformers.LongformerForTokenClassification"),g(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(En,"href","#transformers.LongformerForTokenClassification"),g(qo,"class","relative group"),g(Pr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ua,"rel","nofollow"),g(Nr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForTokenClassification"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(jn,"id","transformers.LongformerForQuestionAnswering"),g(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(jn,"href","#transformers.LongformerForQuestionAnswering"),g(jo,"class","relative group"),g(Ar,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ya,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ya,"rel","nofollow"),g(Ir,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),g(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Nn,"id","transformers.TFLongformerModel"),g(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Nn,"href","#transformers.TFLongformerModel"),g(No,"class","relative group"),g(Dr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ma,"rel","nofollow"),g(Sr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),g(Ea,"href","https://arxiv.org/abs/2004.05150"),g(Ea,"rel","nofollow"),g(Wr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),g(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Dn,"id","transformers.TFLongformerForMaskedLM"),g(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Dn,"href","#transformers.TFLongformerForMaskedLM"),g(Do,"class","relative group"),g(Br,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Aa,"rel","nofollow"),g(Qr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Un,"id","transformers.TFLongformerForQuestionAnswering"),g(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Un,"href","#transformers.TFLongformerForQuestionAnswering"),g(Wo,"class","relative group"),g(Ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Qa,"rel","nofollow"),g(Hr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Gn,"id","transformers.TFLongformerForSequenceClassification"),g(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Gn,"href","#transformers.TFLongformerForSequenceClassification"),g(Uo,"class","relative group"),g(Rr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ga,"rel","nofollow"),g(Kr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(es,"id","transformers.TFLongformerForTokenClassification"),g(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(es,"href","#transformers.TFLongformerForTokenClassification"),g(Ro,"class","relative group"),g(Vr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(tr,"rel","nofollow"),g(Gr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(as,"id","transformers.TFLongformerForMultipleChoice"),g(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(as,"href","#transformers.TFLongformerForMultipleChoice"),g(Vo,"class","relative group"),g(Jr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ir,"rel","nofollow"),g(Xr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),g(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,l),f(o,k,u),f(o,h,u),e(h,_),e(_,b),T(d,b,null),e(h,p),e(h,q),e(q,ke),f(o,pe,u),f(o,A,u),e(A,ie),e(ie,ee),T(F,ee,null),e(A,be),e(A,U),e(U,ve),f(o,fe,u),f(o,D,u),e(D,ye),e(D,de),e(de,G),e(D,Te),f(o,ge,u),f(o,W,u),e(W,$e),f(o,ue,u),f(o,B,u),e(B,me),e(me,Le),f(o,ne,u),f(o,C,u),e(C,O),f(o,_e,u),f(o,Q,u),e(Q,te),e(te,xe),e(te,H),e(H,Fe),e(te,Me),e(te,j),e(j,Ee),e(te,J),e(te,he),e(he,ze),e(te,X),f(o,we,u),f(o,se,u),e(se,I),e(se,ce),e(ce,Y),e(se,qe),e(se,Z),e(Z,P),e(se,Ce),f(o,N,u),f(o,ae,u),e(ae,le),e(le,w),T(E,w,null),e(ae,Be),e(ae,oe),e(oe,Qe),f(o,Ne,u),f(o,M,u),e(M,Ue),Ae.m(Ye,M),e(M,Ie),De.m(S,M),e(M,K),Se.m(Ze,M),e(M,V),e(M,Oe),e(Oe,He),e(M,je),e(M,Pe),e(Pe,re),e(M,Re),e(M,bi),e(bi,Xm),e(M,Ym),zd.m(iy,M),e(M,qd),e(M,vi),e(vi,Zm),e(M,eh),f(o,Cd,u),f(o,At,u),e(At,th),jd.m(ly,At),e(At,Od),e(At,yi),e(yi,oh),e(At,nh),f(o,Pd,u),f(o,It,u),e(It,sh),e(It,Ti),e(Ti,ah),e(It,rh),e(It,$i),e($i,ih),e(It,lh),f(o,Nd,u),f(o,tn,u),e(tn,Li),e(Li,dh),e(tn,ch),e(tn,xi),e(xi,mh),f(o,Ad,u),f(o,on,u),e(on,hh),e(on,fr),e(fr,ph),e(on,fh),f(o,Id,u),f(o,ut,u),e(ut,gh),Dd.m(dy,ut),e(ut,Sd),Wd.m(cy,ut),e(ut,Bd),Qd.m(my,ut),e(ut,Ud),Hd.m(hy,ut),e(ut,Rd),f(o,Kd,u),f(o,nn,u),e(nn,uh),e(nn,ps),e(ps,_h),e(nn,wh),f(o,Vd,u),f(o,Yt,u),e(Yt,sn),e(sn,Fi),T(fs,Fi,null),e(Yt,kh),e(Yt,Mi),e(Mi,bh),f(o,Gd,u),f(o,Zt,u),e(Zt,gr),e(gr,vh),e(Zt,yh),e(Zt,ur),e(ur,Th),e(Zt,$h),f(o,Jd,u),T(gs,o,u),f(o,Xd,u),f(o,eo,u),e(eo,an),e(an,Ei),T(us,Ei,null),e(eo,Lh),e(eo,zi),e(zi,xh),f(o,Yd,u),f(o,ct,u),T(_s,ct,null),e(ct,Fh),e(ct,to),e(to,Mh),e(to,_r),e(_r,Eh),e(to,zh),e(to,wr),e(wr,qh),e(to,Ch),e(ct,jh),e(ct,oo),e(oo,Oh),e(oo,kr),e(kr,Ph),e(oo,Nh),e(oo,ws),e(ws,Ah),e(oo,Ih),e(ct,Dh),e(ct,no),e(no,Sh),e(no,br),e(br,Wh),e(no,Bh),e(no,vr),e(vr,Qh),e(no,Uh),e(ct,Hh),T(rn,ct,null),f(o,Zd,u),f(o,so,u),e(so,ln),e(ln,qi),T(ks,qi,null),e(so,Rh),e(so,Ci),e(Ci,Kh),f(o,ec,u),f(o,Ot,u),T(bs,Ot,null),e(Ot,Vh),e(Ot,ji),e(ji,Gh),e(Ot,Jh),e(Ot,dn),e(dn,yr),e(yr,Xh),e(dn,Yh),e(dn,Tr),e(Tr,Zh),e(dn,ep),f(o,tc,u),f(o,ao,u),e(ao,cn),e(cn,Oi),T(vs,Oi,null),e(ao,tp),e(ao,Pi),e(Pi,op),f(o,oc,u),f(o,Pt,u),T(ys,Pt,null),e(Pt,np),e(Pt,Ts),e(Ts,sp),e(Ts,Ni),e(Ni,ap),e(Ts,rp),e(Pt,ip),e(Pt,mn),e(mn,$r),e($r,lp),e(mn,dp),e(mn,Lr),e(Lr,cp),e(mn,mp),f(o,nc,u),f(o,ro,u),e(ro,hn),e(hn,Ai),T($s,Ai,null),e(ro,hp),e(ro,Ii),e(Ii,pp),f(o,sc,u),f(o,io,u),T(Ls,io,null),e(io,fp),e(io,Di),e(Di,gp),f(o,ac,u),f(o,lo,u),T(xs,lo,null),e(lo,up),e(lo,Si),e(Si,_p),f(o,rc,u),f(o,co,u),T(Fs,co,null),e(co,wp),e(co,Wi),e(Wi,kp),f(o,ic,u),f(o,mo,u),T(Ms,mo,null),e(mo,bp),e(mo,Bi),e(Bi,vp),f(o,lc,u),f(o,ho,u),T(Es,ho,null),e(ho,yp),e(ho,Qi),e(Qi,Tp),f(o,dc,u),f(o,po,u),T(zs,po,null),e(po,$p),e(po,Ui),e(Ui,Lp),f(o,cc,u),f(o,fo,u),T(qs,fo,null),e(fo,xp),e(fo,Hi),e(Hi,Fp),f(o,mc,u),f(o,go,u),T(Cs,go,null),e(go,Mp),e(go,Ri),e(Ri,Ep),f(o,hc,u),f(o,uo,u),T(js,uo,null),e(uo,zp),e(uo,Ki),e(Ki,qp),f(o,pc,u),f(o,_o,u),T(Os,_o,null),e(_o,Cp),e(_o,Vi),e(Vi,jp),f(o,fc,u),f(o,wo,u),T(Ps,wo,null),e(wo,Op),e(wo,Gi),e(Gi,Pp),f(o,gc,u),f(o,ko,u),T(Ns,ko,null),e(ko,Np),e(ko,Ji),e(Ji,Ap),f(o,uc,u),f(o,bo,u),T(As,bo,null),e(bo,Ip),e(bo,Xi),e(Xi,Dp),f(o,_c,u),f(o,vo,u),T(Is,vo,null),e(vo,Sp),e(vo,Yi),e(Yi,Wp),f(o,wc,u),f(o,yo,u),e(yo,pn),e(pn,Zi),T(Ds,Zi,null),e(yo,Bp),e(yo,el),e(el,Qp),f(o,kc,u),f(o,et,u),T(Ss,et,null),e(et,Up),e(et,tl),e(tl,Hp),e(et,Rp),e(et,Ws),e(Ws,Kp),e(Ws,xr),e(xr,Vp),e(Ws,Gp),e(et,Jp),e(et,Bs),e(Bs,Xp),e(Bs,Qs),e(Qs,Yp),e(Bs,Zp),e(et,ef),e(et,To),e(To,tf),e(To,Fr),e(Fr,of),e(To,nf),e(To,Us),e(Us,sf),e(To,af),e(et,rf),e(et,Hs),e(Hs,lf),e(Hs,ol),e(ol,df),e(Hs,cf),e(et,mf),e(et,$t),T(Rs,$t,null),e($t,hf),e($t,$o),e($o,pf),e($o,Mr),e(Mr,ff),e($o,gf),e($o,nl),e(nl,uf),e($o,_f),e($t,wf),T(fn,$t,null),e($t,kf),T(gn,$t,null),f(o,bc,u),f(o,Lo,u),e(Lo,un),e(un,sl),T(Ks,sl,null),e(Lo,bf),e(Lo,al),e(al,vf),f(o,vc,u),f(o,mt,u),T(Vs,mt,null),e(mt,yf),e(mt,Gs),e(Gs,Tf),e(Gs,rl),e(rl,$f),e(Gs,Lf),e(mt,xf),e(mt,Js),e(Js,Ff),e(Js,Er),e(Er,Mf),e(Js,Ef),e(mt,zf),e(mt,Xs),e(Xs,qf),e(Xs,Ys),e(Ys,Cf),e(Xs,jf),e(mt,Of),e(mt,lt),T(Zs,lt,null),e(lt,Pf),e(lt,xo),e(xo,Nf),e(xo,zr),e(zr,Af),e(xo,If),e(xo,il),e(il,Df),e(xo,Sf),e(lt,Wf),T(_n,lt,null),e(lt,Bf),T(wn,lt,null),e(lt,Qf),e(lt,ll),e(ll,Uf),e(lt,Hf),T(kn,lt,null),f(o,yc,u),f(o,Fo,u),e(Fo,bn),e(bn,dl),T(ea,dl,null),e(Fo,Rf),e(Fo,cl),e(cl,Kf),f(o,Tc,u),f(o,ht,u),T(ta,ht,null),e(ht,Vf),e(ht,ml),e(ml,Gf),e(ht,Jf),e(ht,oa),e(oa,Xf),e(oa,qr),e(qr,Yf),e(oa,Zf),e(ht,eg),e(ht,na),e(na,tg),e(na,sa),e(sa,og),e(na,ng),e(ht,sg),e(ht,tt),T(aa,tt,null),e(tt,ag),e(tt,Mo),e(Mo,rg),e(Mo,Cr),e(Cr,ig),e(Mo,lg),e(Mo,hl),e(hl,dg),e(Mo,cg),e(tt,mg),T(vn,tt,null),e(tt,hg),T(yn,tt,null),e(tt,pg),T(Tn,tt,null),e(tt,fg),T($n,tt,null),e(tt,gg),T(Ln,tt,null),f(o,$c,u),f(o,Eo,u),e(Eo,xn),e(xn,pl),T(ra,pl,null),e(Eo,ug),e(Eo,fl),e(fl,_g),f(o,Lc,u),f(o,pt,u),T(ia,pt,null),e(pt,wg),e(pt,gl),e(gl,kg),e(pt,bg),e(pt,la),e(la,vg),e(la,jr),e(jr,yg),e(la,Tg),e(pt,$g),e(pt,da),e(da,Lg),e(da,ca),e(ca,xg),e(da,Fg),e(pt,Mg),e(pt,Lt),T(ma,Lt,null),e(Lt,Eg),e(Lt,zo),e(zo,zg),e(zo,Or),e(Or,qg),e(zo,Cg),e(zo,ul),e(ul,jg),e(zo,Og),e(Lt,Pg),T(Fn,Lt,null),e(Lt,Ng),T(Mn,Lt,null),f(o,xc,u),f(o,qo,u),e(qo,En),e(En,_l),T(ha,_l,null),e(qo,Ag),e(qo,wl),e(wl,Ig),f(o,Fc,u),f(o,ft,u),T(pa,ft,null),e(ft,Dg),e(ft,kl),e(kl,Sg),e(ft,Wg),e(ft,fa),e(fa,Bg),e(fa,Pr),e(Pr,Qg),e(fa,Ug),e(ft,Hg),e(ft,ga),e(ga,Rg),e(ga,ua),e(ua,Kg),e(ga,Vg),e(ft,Gg),e(ft,_t),T(_a,_t,null),e(_t,Jg),e(_t,Co),e(Co,Xg),e(Co,Nr),e(Nr,Yg),e(Co,Zg),e(Co,bl),e(bl,eu),e(Co,tu),e(_t,ou),T(zn,_t,null),e(_t,nu),T(qn,_t,null),e(_t,su),T(Cn,_t,null),f(o,Mc,u),f(o,jo,u),e(jo,jn),e(jn,vl),T(wa,vl,null),e(jo,au),e(jo,yl),e(yl,ru),f(o,Ec,u),f(o,gt,u),T(ka,gt,null),e(gt,iu),e(gt,Oo),e(Oo,lu),e(Oo,Tl),e(Tl,du),e(Oo,cu),e(Oo,$l),e($l,mu),e(Oo,hu),e(gt,pu),e(gt,ba),e(ba,fu),e(ba,Ar),e(Ar,gu),e(ba,uu),e(gt,_u),e(gt,va),e(va,wu),e(va,ya),e(ya,ku),e(va,bu),e(gt,vu),e(gt,xt),T(Ta,xt,null),e(xt,yu),e(xt,Po),e(Po,Tu),e(Po,Ir),e(Ir,$u),e(Po,Lu),e(Po,Ll),e(Ll,xu),e(Po,Fu),e(xt,Mu),T(On,xt,null),e(xt,Eu),T(Pn,xt,null),f(o,zc,u),f(o,No,u),e(No,Nn),e(Nn,xl),T($a,xl,null),e(No,zu),e(No,Fl),e(Fl,qu),f(o,qc,u),f(o,Ke,u),T(La,Ke,null),e(Ke,Cu),e(Ke,Ml),e(Ml,ju),e(Ke,Ou),e(Ke,xa),e(xa,Pu),e(xa,Dr),e(Dr,Nu),e(xa,Au),e(Ke,Iu),e(Ke,Fa),e(Fa,Du),e(Fa,Ma),e(Ma,Su),e(Fa,Wu),e(Ke,Bu),T(An,Ke,null),e(Ke,Qu),e(Ke,Ao),e(Ao,Uu),e(Ao,Sr),e(Sr,Hu),e(Ao,Ru),e(Ao,Ea),e(Ea,Ku),e(Ao,Vu),e(Ke,Gu),e(Ke,za),e(za,Ju),e(za,El),e(El,Xu),e(za,Yu),e(Ke,Zu),e(Ke,Dt),T(qa,Dt,null),e(Dt,e_),e(Dt,Io),e(Io,t_),e(Io,Wr),e(Wr,o_),e(Io,n_),e(Io,zl),e(zl,s_),e(Io,a_),e(Dt,r_),T(In,Dt,null),f(o,Cc,u),f(o,Do,u),e(Do,Dn),e(Dn,ql),T(Ca,ql,null),e(Do,i_),e(Do,Cl),e(Cl,l_),f(o,jc,u),f(o,nt,u),T(ja,nt,null),e(nt,d_),e(nt,Oa),e(Oa,c_),e(Oa,jl),e(jl,m_),e(Oa,h_),e(nt,p_),e(nt,Pa),e(Pa,f_),e(Pa,Br),e(Br,g_),e(Pa,u_),e(nt,__),e(nt,Na),e(Na,w_),e(Na,Aa),e(Aa,k_),e(Na,b_),e(nt,v_),T(Sn,nt,null),e(nt,y_),e(nt,wt),T(Ia,wt,null),e(wt,T_),e(wt,So),e(So,$_),e(So,Qr),e(Qr,L_),e(So,x_),e(So,Ol),e(Ol,F_),e(So,M_),e(wt,E_),T(Wn,wt,null),e(wt,z_),T(Bn,wt,null),e(wt,q_),T(Qn,wt,null),f(o,Oc,u),f(o,Wo,u),e(Wo,Un),e(Un,Pl),T(Da,Pl,null),e(Wo,C_),e(Wo,Nl),e(Nl,j_),f(o,Pc,u),f(o,st,u),T(Sa,st,null),e(st,O_),e(st,Bo),e(Bo,P_),e(Bo,Al),e(Al,N_),e(Bo,A_),e(Bo,Il),e(Il,I_),e(Bo,D_),e(st,S_),e(st,Wa),e(Wa,W_),e(Wa,Ur),e(Ur,B_),e(Wa,Q_),e(st,U_),e(st,Ba),e(Ba,H_),e(Ba,Qa),e(Qa,R_),e(Ba,K_),e(st,V_),T(Hn,st,null),e(st,G_),e(st,kt),T(Ua,kt,null),e(kt,J_),e(kt,Qo),e(Qo,X_),e(Qo,Hr),e(Hr,Y_),e(Qo,Z_),e(Qo,Dl),e(Dl,ew),e(Qo,tw),e(kt,ow),T(Rn,kt,null),e(kt,nw),T(Kn,kt,null),e(kt,sw),T(Vn,kt,null),f(o,Nc,u),f(o,Uo,u),e(Uo,Gn),e(Gn,Sl),T(Ha,Sl,null),e(Uo,aw),e(Uo,Wl),e(Wl,rw),f(o,Ac,u),f(o,at,u),T(Ra,at,null),e(at,iw),e(at,Bl),e(Bl,lw),e(at,dw),e(at,Ka),e(Ka,cw),e(Ka,Rr),e(Rr,mw),e(Ka,hw),e(at,pw),e(at,Va),e(Va,fw),e(Va,Ga),e(Ga,gw),e(Va,uw),e(at,_w),T(Jn,at,null),e(at,ww),e(at,bt),T(Ja,bt,null),e(bt,kw),e(bt,Ho),e(Ho,bw),e(Ho,Kr),e(Kr,vw),e(Ho,yw),e(Ho,Ql),e(Ql,Tw),e(Ho,$w),e(bt,Lw),T(Xn,bt,null),e(bt,xw),T(Yn,bt,null),e(bt,Fw),T(Zn,bt,null),f(o,Ic,u),f(o,Ro,u),e(Ro,es),e(es,Ul),T(Xa,Ul,null),e(Ro,Mw),e(Ro,Hl),e(Hl,Ew),f(o,Dc,u),f(o,rt,u),T(Ya,rt,null),e(rt,zw),e(rt,Rl),e(Rl,qw),e(rt,Cw),e(rt,Za),e(Za,jw),e(Za,Vr),e(Vr,Ow),e(Za,Pw),e(rt,Nw),e(rt,er),e(er,Aw),e(er,tr),e(tr,Iw),e(er,Dw),e(rt,Sw),T(ts,rt,null),e(rt,Ww),e(rt,vt),T(or,vt,null),e(vt,Bw),e(vt,Ko),e(Ko,Qw),e(Ko,Gr),e(Gr,Uw),e(Ko,Hw),e(Ko,Kl),e(Kl,Rw),e(Ko,Kw),e(vt,Vw),T(os,vt,null),e(vt,Gw),T(ns,vt,null),e(vt,Jw),T(ss,vt,null),f(o,Sc,u),f(o,Vo,u),e(Vo,as),e(as,Vl),T(nr,Vl,null),e(Vo,Xw),e(Vo,Gl),e(Gl,Yw),f(o,Wc,u),f(o,it,u),T(sr,it,null),e(it,Zw),e(it,Jl),e(Jl,ek),e(it,tk),e(it,ar),e(ar,ok),e(ar,Jr),e(Jr,nk),e(ar,sk),e(it,ak),e(it,rr),e(rr,rk),e(rr,ir),e(ir,ik),e(rr,lk),e(it,dk),T(rs,it,null),e(it,ck),e(it,Ft),T(lr,Ft,null),e(Ft,mk),e(Ft,Go),e(Go,hk),e(Go,Xr),e(Xr,pk),e(Go,fk),e(Go,Xl),e(Xl,gk),e(Go,uk),e(Ft,_k),T(is,Ft,null),e(Ft,wk),T(ls,Ft,null),Bc=!0},p(o,[u]){const dr={};u&2&&(dr.$$scope={dirty:u,ctx:o}),rn.$set(dr);const Yl={};u&2&&(Yl.$$scope={dirty:u,ctx:o}),fn.$set(Yl);const Zl={};u&2&&(Zl.$$scope={dirty:u,ctx:o}),gn.$set(Zl);const ed={};u&2&&(ed.$$scope={dirty:u,ctx:o}),_n.$set(ed);const cr={};u&2&&(cr.$$scope={dirty:u,ctx:o}),wn.$set(cr);const td={};u&2&&(td.$$scope={dirty:u,ctx:o}),kn.$set(td);const od={};u&2&&(od.$$scope={dirty:u,ctx:o}),vn.$set(od);const nd={};u&2&&(nd.$$scope={dirty:u,ctx:o}),yn.$set(nd);const mr={};u&2&&(mr.$$scope={dirty:u,ctx:o}),Tn.$set(mr);const sd={};u&2&&(sd.$$scope={dirty:u,ctx:o}),$n.$set(sd);const ad={};u&2&&(ad.$$scope={dirty:u,ctx:o}),Ln.$set(ad);const rd={};u&2&&(rd.$$scope={dirty:u,ctx:o}),Fn.$set(rd);const id={};u&2&&(id.$$scope={dirty:u,ctx:o}),Mn.$set(id);const ld={};u&2&&(ld.$$scope={dirty:u,ctx:o}),zn.$set(ld);const dd={};u&2&&(dd.$$scope={dirty:u,ctx:o}),qn.$set(dd);const Nt={};u&2&&(Nt.$$scope={dirty:u,ctx:o}),Cn.$set(Nt);const cd={};u&2&&(cd.$$scope={dirty:u,ctx:o}),On.$set(cd);const md={};u&2&&(md.$$scope={dirty:u,ctx:o}),Pn.$set(md);const hd={};u&2&&(hd.$$scope={dirty:u,ctx:o}),An.$set(hd);const Jo={};u&2&&(Jo.$$scope={dirty:u,ctx:o}),In.$set(Jo);const pd={};u&2&&(pd.$$scope={dirty:u,ctx:o}),Sn.$set(pd);const fd={};u&2&&(fd.$$scope={dirty:u,ctx:o}),Wn.$set(fd);const hr={};u&2&&(hr.$$scope={dirty:u,ctx:o}),Bn.$set(hr);const gd={};u&2&&(gd.$$scope={dirty:u,ctx:o}),Qn.$set(gd);const ud={};u&2&&(ud.$$scope={dirty:u,ctx:o}),Hn.$set(ud);const _d={};u&2&&(_d.$$scope={dirty:u,ctx:o}),Rn.$set(_d);const Ve={};u&2&&(Ve.$$scope={dirty:u,ctx:o}),Kn.$set(Ve);const wd={};u&2&&(wd.$$scope={dirty:u,ctx:o}),Vn.$set(wd);const kd={};u&2&&(kd.$$scope={dirty:u,ctx:o}),Jn.$set(kd);const bd={};u&2&&(bd.$$scope={dirty:u,ctx:o}),Xn.$set(bd);const vd={};u&2&&(vd.$$scope={dirty:u,ctx:o}),Yn.$set(vd);const Xo={};u&2&&(Xo.$$scope={dirty:u,ctx:o}),Zn.$set(Xo);const yd={};u&2&&(yd.$$scope={dirty:u,ctx:o}),ts.$set(yd);const Yo={};u&2&&(Yo.$$scope={dirty:u,ctx:o}),os.$set(Yo);const Td={};u&2&&(Td.$$scope={dirty:u,ctx:o}),ns.$set(Td);const $d={};u&2&&($d.$$scope={dirty:u,ctx:o}),ss.$set($d);const pr={};u&2&&(pr.$$scope={dirty:u,ctx:o}),rs.$set(pr);const Ld={};u&2&&(Ld.$$scope={dirty:u,ctx:o}),is.$set(Ld);const xd={};u&2&&(xd.$$scope={dirty:u,ctx:o}),ls.$set(xd)},i(o){Bc||($(d.$$.fragment,o),$(F.$$.fragment,o),$(E.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),$(rn.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$($s.$$.fragment,o),$(Ls.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(Cs.$$.fragment,o),$(js.$$.fragment,o),$(Os.$$.fragment,o),$(Ps.$$.fragment,o),$(Ns.$$.fragment,o),$(As.$$.fragment,o),$(Is.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(Rs.$$.fragment,o),$(fn.$$.fragment,o),$(gn.$$.fragment,o),$(Ks.$$.fragment,o),$(Vs.$$.fragment,o),$(Zs.$$.fragment,o),$(_n.$$.fragment,o),$(wn.$$.fragment,o),$(kn.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(aa.$$.fragment,o),$(vn.$$.fragment,o),$(yn.$$.fragment,o),$(Tn.$$.fragment,o),$($n.$$.fragment,o),$(Ln.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(ma.$$.fragment,o),$(Fn.$$.fragment,o),$(Mn.$$.fragment,o),$(ha.$$.fragment,o),$(pa.$$.fragment,o),$(_a.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(Cn.$$.fragment,o),$(wa.$$.fragment,o),$(ka.$$.fragment,o),$(Ta.$$.fragment,o),$(On.$$.fragment,o),$(Pn.$$.fragment,o),$($a.$$.fragment,o),$(La.$$.fragment,o),$(An.$$.fragment,o),$(qa.$$.fragment,o),$(In.$$.fragment,o),$(Ca.$$.fragment,o),$(ja.$$.fragment,o),$(Sn.$$.fragment,o),$(Ia.$$.fragment,o),$(Wn.$$.fragment,o),$(Bn.$$.fragment,o),$(Qn.$$.fragment,o),$(Da.$$.fragment,o),$(Sa.$$.fragment,o),$(Hn.$$.fragment,o),$(Ua.$$.fragment,o),$(Rn.$$.fragment,o),$(Kn.$$.fragment,o),$(Vn.$$.fragment,o),$(Ha.$$.fragment,o),$(Ra.$$.fragment,o),$(Jn.$$.fragment,o),$(Ja.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Xa.$$.fragment,o),$(Ya.$$.fragment,o),$(ts.$$.fragment,o),$(or.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(rs.$$.fragment,o),$(lr.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),Bc=!0)},o(o){L(d.$$.fragment,o),L(F.$$.fragment,o),L(E.$$.fragment,o),L(fs.$$.fragment,o),L(gs.$$.fragment,o),L(us.$$.fragment,o),L(_s.$$.fragment,o),L(rn.$$.fragment,o),L(ks.$$.fragment,o),L(bs.$$.fragment,o),L(vs.$$.fragment,o),L(ys.$$.fragment,o),L($s.$$.fragment,o),L(Ls.$$.fragment,o),L(xs.$$.fragment,o),L(Fs.$$.fragment,o),L(Ms.$$.fragment,o),L(Es.$$.fragment,o),L(zs.$$.fragment,o),L(qs.$$.fragment,o),L(Cs.$$.fragment,o),L(js.$$.fragment,o),L(Os.$$.fragment,o),L(Ps.$$.fragment,o),L(Ns.$$.fragment,o),L(As.$$.fragment,o),L(Is.$$.fragment,o),L(Ds.$$.fragment,o),L(Ss.$$.fragment,o),L(Rs.$$.fragment,o),L(fn.$$.fragment,o),L(gn.$$.fragment,o),L(Ks.$$.fragment,o),L(Vs.$$.fragment,o),L(Zs.$$.fragment,o),L(_n.$$.fragment,o),L(wn.$$.fragment,o),L(kn.$$.fragment,o),L(ea.$$.fragment,o),L(ta.$$.fragment,o),L(aa.$$.fragment,o),L(vn.$$.fragment,o),L(yn.$$.fragment,o),L(Tn.$$.fragment,o),L($n.$$.fragment,o),L(Ln.$$.fragment,o),L(ra.$$.fragment,o),L(ia.$$.fragment,o),L(ma.$$.fragment,o),L(Fn.$$.fragment,o),L(Mn.$$.fragment,o),L(ha.$$.fragment,o),L(pa.$$.fragment,o),L(_a.$$.fragment,o),L(zn.$$.fragment,o),L(qn.$$.fragment,o),L(Cn.$$.fragment,o),L(wa.$$.fragment,o),L(ka.$$.fragment,o),L(Ta.$$.fragment,o),L(On.$$.fragment,o),L(Pn.$$.fragment,o),L($a.$$.fragment,o),L(La.$$.fragment,o),L(An.$$.fragment,o),L(qa.$$.fragment,o),L(In.$$.fragment,o),L(Ca.$$.fragment,o),L(ja.$$.fragment,o),L(Sn.$$.fragment,o),L(Ia.$$.fragment,o),L(Wn.$$.fragment,o),L(Bn.$$.fragment,o),L(Qn.$$.fragment,o),L(Da.$$.fragment,o),L(Sa.$$.fragment,o),L(Hn.$$.fragment,o),L(Ua.$$.fragment,o),L(Rn.$$.fragment,o),L(Kn.$$.fragment,o),L(Vn.$$.fragment,o),L(Ha.$$.fragment,o),L(Ra.$$.fragment,o),L(Jn.$$.fragment,o),L(Ja.$$.fragment,o),L(Xn.$$.fragment,o),L(Yn.$$.fragment,o),L(Zn.$$.fragment,o),L(Xa.$$.fragment,o),L(Ya.$$.fragment,o),L(ts.$$.fragment,o),L(or.$$.fragment,o),L(os.$$.fragment,o),L(ns.$$.fragment,o),L(ss.$$.fragment,o),L(nr.$$.fragment,o),L(sr.$$.fragment,o),L(rs.$$.fragment,o),L(lr.$$.fragment,o),L(is.$$.fragment,o),L(ls.$$.fragment,o),Bc=!1},d(o){t(l),o&&t(k),o&&t(h),x(d),o&&t(pe),o&&t(A),x(F),o&&t(fe),o&&t(D),o&&t(ge),o&&t(W),o&&t(ue),o&&t(B),o&&t(ne),o&&t(C),o&&t(_e),o&&t(Q),o&&t(we),o&&t(se),o&&t(N),o&&t(ae),x(E),o&&t(Ne),o&&t(M),o&&t(Cd),o&&t(At),o&&t(Pd),o&&t(It),o&&t(Nd),o&&t(tn),o&&t(Ad),o&&t(on),o&&t(Id),o&&t(ut),o&&t(Kd),o&&t(nn),o&&t(Vd),o&&t(Yt),x(fs),o&&t(Gd),o&&t(Zt),o&&t(Jd),x(gs,o),o&&t(Xd),o&&t(eo),x(us),o&&t(Yd),o&&t(ct),x(_s),x(rn),o&&t(Zd),o&&t(so),x(ks),o&&t(ec),o&&t(Ot),x(bs),o&&t(tc),o&&t(ao),x(vs),o&&t(oc),o&&t(Pt),x(ys),o&&t(nc),o&&t(ro),x($s),o&&t(sc),o&&t(io),x(Ls),o&&t(ac),o&&t(lo),x(xs),o&&t(rc),o&&t(co),x(Fs),o&&t(ic),o&&t(mo),x(Ms),o&&t(lc),o&&t(ho),x(Es),o&&t(dc),o&&t(po),x(zs),o&&t(cc),o&&t(fo),x(qs),o&&t(mc),o&&t(go),x(Cs),o&&t(hc),o&&t(uo),x(js),o&&t(pc),o&&t(_o),x(Os),o&&t(fc),o&&t(wo),x(Ps),o&&t(gc),o&&t(ko),x(Ns),o&&t(uc),o&&t(bo),x(As),o&&t(_c),o&&t(vo),x(Is),o&&t(wc),o&&t(yo),x(Ds),o&&t(kc),o&&t(et),x(Ss),x(Rs),x(fn),x(gn),o&&t(bc),o&&t(Lo),x(Ks),o&&t(vc),o&&t(mt),x(Vs),x(Zs),x(_n),x(wn),x(kn),o&&t(yc),o&&t(Fo),x(ea),o&&t(Tc),o&&t(ht),x(ta),x(aa),x(vn),x(yn),x(Tn),x($n),x(Ln),o&&t($c),o&&t(Eo),x(ra),o&&t(Lc),o&&t(pt),x(ia),x(ma),x(Fn),x(Mn),o&&t(xc),o&&t(qo),x(ha),o&&t(Fc),o&&t(ft),x(pa),x(_a),x(zn),x(qn),x(Cn),o&&t(Mc),o&&t(jo),x(wa),o&&t(Ec),o&&t(gt),x(ka),x(Ta),x(On),x(Pn),o&&t(zc),o&&t(No),x($a),o&&t(qc),o&&t(Ke),x(La),x(An),x(qa),x(In),o&&t(Cc),o&&t(Do),x(Ca),o&&t(jc),o&&t(nt),x(ja),x(Sn),x(Ia),x(Wn),x(Bn),x(Qn),o&&t(Oc),o&&t(Wo),x(Da),o&&t(Pc),o&&t(st),x(Sa),x(Hn),x(Ua),x(Rn),x(Kn),x(Vn),o&&t(Nc),o&&t(Uo),x(Ha),o&&t(Ac),o&&t(at),x(Ra),x(Jn),x(Ja),x(Xn),x(Yn),x(Zn),o&&t(Ic),o&&t(Ro),x(Xa),o&&t(Dc),o&&t(rt),x(Ya),x(ts),x(or),x(os),x(ns),x(ss),o&&t(Sc),o&&t(Vo),x(nr),o&&t(Wc),o&&t(it),x(sr),x(rs),x(lr),x(is),x(ls)}}}const sT={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function aT(z){return _y(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hT extends py{constructor(l){super();fy(this,l,aT,nT,gy,{})}}export{hT as default,sT as metadata};
