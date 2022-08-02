import{S as pT,i as fT,s as gT,e as a,k as c,w as v,t as n,Y as Oo,M as uT,c as r,d as t,m,a as i,x as T,h as s,Z as Po,b as _,G as e,g as f,y,q as $,o as L,B as x,v as _T,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ae}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerConfig, LongformerModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function kT(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function bT(M){let l,k,h,p,b;return p=new Le({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){l=a("p"),k=n("Examples:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Examples:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function vT(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function TT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForMaskedLM

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)`}}),{c(){l=a("p"),k=n("Mask filling example:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Mask filling example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function yT(M){let l,k;return l=new Le({props:{code:`TXT = (
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
[<span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;skinny&#x27;</span>, <span class="hljs-string">&#x27;thin&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;vegetarian&#x27;</span>]`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function $T(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function LT(M){let l,k,h,p,b;return p=new Le({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=a("p"),k=n("Example of single-label classification:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example of single-label classification:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function xT(M){let l,k;return l=new Le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = LongformerForSequenceClassification.from_pretrained("jpwahle/longformer-base-plagiarism-detection", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.44</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function FT(M){let l,k,h,p,b;return p=new Le({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=a("p"),k=n("Example of multi-label classification:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example of multi-label classification:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function MT(M){let l,k;return l=new Le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function ET(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function zT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function qT(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function CT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
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
[<span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>]`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function jT(M){let l,k;return l=new Le({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.63</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function OT(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function PT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
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
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){l=a("p"),k=n("Examples:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Examples:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function NT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,ae,K,H,re,_e,N,ie,R,we;return{c(){l=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=a("ul"),b=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=a("p"),Z=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=a("ul"),j=a("li"),ne=n("a single Tensor with "),U=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=a("code"),ge=n("model(inputs_ids)"),ce=c(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),H=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=r(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=r(w,"UL",{});var Y=i(p);b=r(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=r(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=r(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=r(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=r(w,"UL",{});var O=i(q);j=r(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=r(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=r(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=r(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(I,"CODE",{});var ke=i(B);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=r(I,"CODE",{});var ve=i(H);re=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=r(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,ae),e(C,K),e(C,H),e(H,re),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function AT(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function IT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,ae,K,H,re,_e,N,ie,R,we;return{c(){l=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=a("ul"),b=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=a("p"),Z=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=a("ul"),j=a("li"),ne=n("a single Tensor with "),U=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=a("code"),ge=n("model(inputs_ids)"),ce=c(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),H=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=r(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=r(w,"UL",{});var Y=i(p);b=r(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=r(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=r(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=r(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=r(w,"UL",{});var O=i(q);j=r(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=r(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=r(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=r(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(I,"CODE",{});var ke=i(B);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=r(I,"CODE",{});var ve=i(H);re=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=r(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,ae),e(C,K),e(C,H),e(H,re),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function ST(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function DT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function WT(M){let l,k;return l=new Le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.44</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function QT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,ae,K,H,re,_e,N,ie,R,we;return{c(){l=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=a("ul"),b=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=a("p"),Z=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=a("ul"),j=a("li"),ne=n("a single Tensor with "),U=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=a("code"),ge=n("model(inputs_ids)"),ce=c(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),H=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=r(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=r(w,"UL",{});var Y=i(p);b=r(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=r(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=r(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=r(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=r(w,"UL",{});var O=i(q);j=r(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=r(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=r(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=r(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(I,"CODE",{});var ke=i(B);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=r(I,"CODE",{});var ve=i(H);re=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=r(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,ae),e(C,K),e(C,H),e(H,re),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function BT(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function UT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function HT(M){let l,k;return l=new Le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.96</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function RT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,ae,K,H,re,_e,N,ie,R,we;return{c(){l=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=a("ul"),b=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=a("p"),Z=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=a("ul"),j=a("li"),ne=n("a single Tensor with "),U=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=a("code"),ge=n("model(inputs_ids)"),ce=c(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),H=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=r(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=r(w,"UL",{});var Y=i(p);b=r(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=r(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=r(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=r(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=r(w,"UL",{});var O=i(q);j=r(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=r(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=r(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=r(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(I,"CODE",{});var ke=i(B);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=r(I,"CODE",{});var ve=i(H);re=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=r(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,ae),e(C,K),e(C,H),e(H,re),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function VT(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function GT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function KT(M){let l,k;return l=new Le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function JT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,ae,K,H,re,_e,N,ie,R,we;return{c(){l=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=a("ul"),b=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=a("p"),Z=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=a("ul"),j=a("li"),ne=n("a single Tensor with "),U=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=a("code"),ge=n("model(inputs_ids)"),ce=c(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),H=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=r(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=r(w,"UL",{});var Y=i(p);b=r(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=r(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=r(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=r(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=r(w,"UL",{});var O=i(q);j=r(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=r(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=r(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=r(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(I,"CODE",{});var ke=i(B);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=r(I,"CODE",{});var ve=i(H);re=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=r(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,ae),e(C,K),e(C,H),e(H,re),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function XT(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function YT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function ZT(M){let l,k;return l=new Le({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function ey(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,ae,K,H,re,_e,N,ie,R,we;return{c(){l=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=a("ul"),b=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=a("p"),Z=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=a("ul"),j=a("li"),ne=n("a single Tensor with "),U=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=a("code"),ge=n("model(inputs_ids)"),ce=c(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),H=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=r(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=r(w,"UL",{});var Y=i(p);b=r(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=r(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=r(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=r(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=r(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=r(w,"UL",{});var O=i(q);j=r(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=r(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=r(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=r(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(I,"CODE",{});var ke=i(B);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=r(I,"CODE",{});var ve=i(H);re=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=r(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,ae),e(C,K),e(C,H),e(H,re),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function ty(M){let l,k,h,p,b;return{c(){l=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function oy(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=r(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function ny(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,ae,K,H,re,_e,N,ie,R,we,w,F,Y,Te,me,A,be,xe,Fe,O,V,Me,ye,I,ke,ve,oe,Ee,ti,Qm,fd,$e,Bm,gd,sT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',ud,_d,aT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',wd,kd,rT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',bd,oi,Um,Hm,ni,Rm,Vm,si,Gm,Km,vd,iT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Td,ai,Jm,Xm,yd,wt,Ym,$d,lT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ld,ri,Zm,eh,xd,kt,th,ii,oh,nh,li,sh,ah,Fd,No,di,rh,ih,ci,lh,Md,Ao,dh,Ka,ch,mh,Ed,Xe,hh,zd,dT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',qd,Cd,cT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',jd,Od,mT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Pd,Nd,hT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ad,Id,Io,ph,Gn,fh,gh,Sd,jt,So,mi,Kn,uh,hi,_h,Dd,Ot,Ja,wh,kh,Xa,bh,vh,Wd,Jn,Qd,Pt,Do,pi,Xn,Th,fi,yh,Bd,He,Yn,$h,Nt,Lh,Ya,xh,Fh,Za,Mh,Eh,zh,At,qh,er,Ch,jh,Zn,Oh,Ph,Nh,It,Ah,tr,Ih,Sh,or,Dh,Wh,Qh,Wo,Ud,St,Qo,gi,es,Bh,ui,Uh,Hd,gt,ts,Hh,_i,Rh,Vh,Bo,nr,Gh,Kh,sr,Jh,Xh,Rd,Dt,Uo,wi,os,Yh,ki,Zh,Vd,ut,ns,ep,ss,tp,bi,op,np,sp,Ho,ar,ap,rp,rr,ip,lp,Gd,Wt,Ro,vi,as,dp,Ti,cp,Kd,Qt,rs,mp,yi,hp,Jd,Bt,is,pp,$i,fp,Xd,Ut,ls,gp,Li,up,Yd,Ht,ds,_p,xi,wp,Zd,Rt,cs,kp,Fi,bp,ec,Vt,ms,vp,Mi,Tp,tc,Gt,hs,yp,Ei,$p,oc,Kt,ps,Lp,zi,xp,nc,Jt,fs,Fp,qi,Mp,sc,Xt,gs,Ep,Ci,zp,ac,Yt,us,qp,ji,Cp,rc,Zt,_s,jp,Oi,Op,ic,eo,ws,Pp,Pi,Np,lc,to,ks,Ap,Ni,Ip,dc,oo,Vo,Ai,bs,Sp,Ii,Dp,cc,Pe,vs,Wp,Si,Qp,Bp,Ts,Up,ir,Hp,Rp,Vp,ys,Gp,$s,Kp,Jp,Xp,no,Yp,lr,Zp,ef,Ls,tf,of,nf,xs,sf,Di,af,rf,lf,at,Fs,df,so,cf,dr,mf,hf,Wi,pf,ff,gf,Go,uf,Ko,mc,ao,Jo,Qi,Ms,_f,Bi,wf,hc,Re,Es,kf,zs,bf,Ui,vf,Tf,yf,qs,$f,cr,Lf,xf,Ff,Cs,Mf,js,Ef,zf,qf,Be,Os,Cf,ro,jf,mr,Of,Pf,Hi,Nf,Af,If,Xo,Sf,Yo,Df,Ri,Wf,Qf,Zo,pc,io,en,Vi,Ps,Bf,Gi,Uf,fc,Ve,Ns,Hf,Ki,Rf,Vf,As,Gf,hr,Kf,Jf,Xf,Is,Yf,Ss,Zf,eg,tg,Ne,Ds,og,lo,ng,pr,sg,ag,Ji,rg,ig,lg,tn,dg,on,cg,nn,mg,sn,hg,an,gc,co,rn,Xi,Ws,pg,Yi,fg,uc,Ge,Qs,gg,Zi,ug,_g,Bs,wg,fr,kg,bg,vg,Us,Tg,Hs,yg,$g,Lg,rt,Rs,xg,mo,Fg,gr,Mg,Eg,el,zg,qg,Cg,ln,jg,dn,_c,ho,cn,tl,Vs,Og,ol,Pg,wc,Ke,Gs,Ng,nl,Ag,Ig,Ks,Sg,ur,Dg,Wg,Qg,Js,Bg,Xs,Ug,Hg,Rg,Ye,Ys,Vg,po,Gg,_r,Kg,Jg,sl,Xg,Yg,Zg,mn,eu,hn,tu,pn,kc,fo,fn,al,Zs,ou,rl,nu,bc,Je,ea,su,go,au,il,ru,iu,ll,lu,du,cu,ta,mu,wr,hu,pu,fu,oa,gu,na,uu,_u,wu,it,sa,ku,uo,bu,kr,vu,Tu,dl,yu,$u,Lu,gn,xu,un,vc,_o,_n,cl,aa,Fu,ml,Mu,Tc,ze,ra,Eu,hl,zu,qu,ia,Cu,br,ju,Ou,Pu,la,Nu,da,Au,Iu,Su,wn,Du,wo,Wu,vr,Qu,Bu,ca,Uu,Hu,Ru,ma,Vu,pl,Gu,Ku,Ju,bt,ha,Xu,ko,Yu,Tr,Zu,e_,fl,t_,o_,n_,kn,yc,bo,bn,gl,pa,s_,ul,a_,$c,Ie,fa,r_,ga,i_,_l,l_,d_,c_,ua,m_,yr,h_,p_,f_,_a,g_,wa,u_,__,w_,vn,k_,Ze,ka,b_,vo,v_,$r,T_,y_,wl,$_,L_,x_,Tn,F_,yn,M_,$n,Lc,To,Ln,kl,ba,E_,bl,z_,xc,Se,va,q_,yo,C_,vl,j_,O_,Tl,P_,N_,A_,Ta,I_,Lr,S_,D_,W_,ya,Q_,$a,B_,U_,H_,xn,R_,et,La,V_,$o,G_,xr,K_,J_,yl,X_,Y_,Z_,Fn,ew,Mn,tw,En,Fc,Lo,zn,$l,xa,ow,Ll,nw,Mc,De,Fa,sw,xl,aw,rw,Ma,iw,Fr,lw,dw,cw,Ea,mw,za,hw,pw,fw,qn,gw,tt,qa,uw,xo,_w,Mr,ww,kw,Fl,bw,vw,Tw,Cn,yw,jn,$w,On,Ec,Fo,Pn,Ml,Ca,Lw,El,xw,zc,We,ja,Fw,zl,Mw,Ew,Oa,zw,Er,qw,Cw,jw,Pa,Ow,Na,Pw,Nw,Aw,Nn,Iw,ot,Aa,Sw,Mo,Dw,zr,Ww,Qw,ql,Bw,Uw,Hw,An,Rw,In,Vw,Sn,qc,Eo,Dn,Cl,Ia,Gw,jl,Kw,Cc,Qe,Sa,Jw,Ol,Xw,Yw,Da,Zw,qr,ek,tk,ok,Wa,nk,Qa,sk,ak,rk,Wn,ik,lt,Ba,lk,zo,dk,Cr,ck,mk,Pl,hk,pk,fk,Qn,gk,Bn,jc;return d=new Oe({}),ee=new Oe({}),oe=new Oe({}),Kn=new Oe({}),Jn=new Le({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),Xn=new Oe({}),Yn=new Q({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/configuration_longformer.py#L39"}}),Wo=new Ce({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[wT]},$$scope:{ctx:M}}}),es=new Oe({}),ts=new Q({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L67"}}),os=new Oe({}),ns=new Q({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer_fast.py#L85"}}),as=new Oe({}),rs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L57"}}),is=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L100"}}),ls=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L148"}}),ds=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L194"}}),cs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L243"}}),ms=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L289"}}),hs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L337"}}),ps=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),fs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),gs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),us=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),_s=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),ws=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),ks=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),bs=new Oe({}),vs=new Q({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1498"}}),Fs=new Q({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1609",returnDescription:`
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
`}}),Go=new Ae({props:{$$slots:{default:[kT]},$$scope:{ctx:M}}}),Ko=new Ce({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[bT]},$$scope:{ctx:M}}}),Ms=new Oe({}),Es=new Q({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1733"}}),Os=new Q({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1752",returnDescription:`
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
`}}),Xo=new Ae({props:{$$slots:{default:[vT]},$$scope:{ctx:M}}}),Yo=new Ce({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[TT]},$$scope:{ctx:M}}}),Zo=new Ce({props:{anchor:"transformers.LongformerForMaskedLM.forward.example-2",$$slots:{default:[yT]},$$scope:{ctx:M}}}),Ps=new Oe({}),Ns=new Q({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1846"}}),Ds=new Q({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1861",returnDescription:`
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
`}}),tn=new Ae({props:{$$slots:{default:[$T]},$$scope:{ctx:M}}}),on=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[LT]},$$scope:{ctx:M}}}),nn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[xT]},$$scope:{ctx:M}}}),sn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[FT]},$$scope:{ctx:M}}}),an=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[MT]},$$scope:{ctx:M}}}),Ws=new Oe({}),Qs=new Q({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2205"}}),Rs=new Q({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2216",returnDescription:`
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
`}}),ln=new Ae({props:{$$slots:{default:[ET]},$$scope:{ctx:M}}}),dn=new Ce({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[zT]},$$scope:{ctx:M}}}),Vs=new Oe({}),Gs=new Q({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2115"}}),Ys=new Q({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2130",returnDescription:`
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
`}}),mn=new Ae({props:{$$slots:{default:[qT]},$$scope:{ctx:M}}}),hn=new Ce({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[CT]},$$scope:{ctx:M}}}),pn=new Ce({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[jT]},$$scope:{ctx:M}}}),Zs=new Oe({}),ea=new Q({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1975"}}),sa=new Q({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1989",returnDescription:`
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
`}}),gn=new Ae({props:{$$slots:{default:[OT]},$$scope:{ctx:M}}}),un=new Ce({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[PT]},$$scope:{ctx:M}}}),aa=new Oe({}),ra=new Q({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2011"}}),wn=new Ae({props:{$$slots:{default:[NT]},$$scope:{ctx:M}}}),ha=new Q({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2033"}}),kn=new Ae({props:{$$slots:{default:[AT]},$$scope:{ctx:M}}}),pa=new Oe({}),fa=new Q({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2084"}}),vn=new Ae({props:{$$slots:{default:[IT]},$$scope:{ctx:M}}}),ka=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2101",returnDescription:`
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
`}}),Tn=new Ae({props:{$$slots:{default:[ST]},$$scope:{ctx:M}}}),yn=new Ce({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[DT]},$$scope:{ctx:M}}}),$n=new Ce({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[WT]},$$scope:{ctx:M}}}),ba=new Oe({}),va=new Q({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2181"}}),xn=new Ae({props:{$$slots:{default:[QT]},$$scope:{ctx:M}}}),La=new Q({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2196",returnDescription:`
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
`}}),Fn=new Ae({props:{$$slots:{default:[BT]},$$scope:{ctx:M}}}),Mn=new Ce({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[UT]},$$scope:{ctx:M}}}),En=new Ce({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[HT]},$$scope:{ctx:M}}}),xa=new Oe({}),Fa=new Q({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2335"}}),qn=new Ae({props:{$$slots:{default:[RT]},$$scope:{ctx:M}}}),qa=new Q({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2347",returnDescription:`
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
`}}),Cn=new Ae({props:{$$slots:{default:[VT]},$$scope:{ctx:M}}}),jn=new Ce({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[GT]},$$scope:{ctx:M}}}),On=new Ce({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[KT]},$$scope:{ctx:M}}}),Ca=new Oe({}),ja=new Q({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2572"}}),Nn=new Ae({props:{$$slots:{default:[JT]},$$scope:{ctx:M}}}),Aa=new Q({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2587",returnDescription:`
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
`}}),An=new Ae({props:{$$slots:{default:[XT]},$$scope:{ctx:M}}}),In=new Ce({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[YT]},$$scope:{ctx:M}}}),Sn=new Ce({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[ZT]},$$scope:{ctx:M}}}),Ia=new Oe({}),Sa=new Q({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2436"}}),Wn=new Ae({props:{$$slots:{default:[ey]},$$scope:{ctx:M}}}),Ba=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2456",returnDescription:`
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
`}}),Qn=new Ae({props:{$$slots:{default:[ty]},$$scope:{ctx:M}}}),Bn=new Ce({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[oy]},$$scope:{ctx:M}}}),{c(){l=a("meta"),k=c(),h=a("h1"),p=a("a"),b=a("span"),v(d.$$.fragment),u=c(),E=a("span"),he=n("Longformer"),J=c(),z=a("h2"),Z=a("a"),S=a("span"),v(ee.$$.fragment),pe=c(),D=a("span"),fe=n("Overview"),le=c(),G=a("p"),P=n("The Longformer model was presented in "),te=a("a"),X=n("Longformer: The Long-Document Transformer"),q=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),j=c(),ne=a("p"),U=n("The abstract from the paper is the following:"),de=c(),se=a("p"),W=a("em"),ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ce=c(),C=a("p"),ue=n("Tips:"),B=c(),ae=a("ul"),K=a("li"),H=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),re=a("code"),_e=n("token_type_ids"),N=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=a("code"),R=n("tokenizer.sep_token"),we=n(` (or
`),w=a("code"),F=n("</s>"),Y=n(")."),Te=c(),me=a("p"),A=n("This model was contributed by "),be=a("a"),xe=n("beltagy"),Fe=n(". The Authors\u2019 code can be found "),O=a("a"),V=n("here"),Me=n("."),ye=c(),I=a("h2"),ke=a("a"),ve=a("span"),v(oe.$$.fragment),Ee=c(),ti=a("span"),Qm=n("Longformer Self Attention"),fd=c(),$e=a("p"),Bm=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),gd=new Oo,ud=n(` previous tokens and
`),_d=new Oo,wd=n(" succeding tokens with "),kd=new Oo,bd=n(` being the window length as defined in
`),oi=a("code"),Um=n("config.attention_window"),Hm=n(". Note that "),ni=a("code"),Rm=n("config.attention_window"),Vm=n(" can be of type "),si=a("code"),Gm=n("List"),Km=n(` to define a
different `),vd=new Oo,Td=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),ai=a("code"),Jm=n("BertSelfAttention"),Xm=n("."),yd=c(),wt=a("p"),Ym=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),$d=new Oo,Ld=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ri=a("em"),Zm=n("symmetric"),eh=n("."),xd=c(),kt=a("p"),th=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ii=a("code"),oh=n("global_attention_mask"),nh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),li=a("code"),sh=n("global_attention_mask"),ah=n(":"),Fd=c(),No=a("ul"),di=a("li"),rh=n("0: the token attends \u201Clocally\u201D,"),ih=c(),ci=a("li"),lh=n("1: the token attends \u201Cglobally\u201D."),Md=c(),Ao=a("p"),dh=n("For more information please also refer to "),Ka=a("a"),ch=n("forward()"),mh=n(" method."),Ed=c(),Xe=a("p"),hh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),zd=new Oo,qd=n(` to
`),Cd=new Oo,jd=n(", with "),Od=new Oo,Pd=n(" being the sequence length and "),Nd=new Oo,Ad=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Id=c(),Io=a("p"),ph=n("For more information, please refer to the official "),Gn=a("a"),fh=n("paper"),gh=n("."),Sd=c(),jt=a("h2"),So=a("a"),mi=a("span"),v(Kn.$$.fragment),uh=c(),hi=a("span"),_h=n("Training"),Dd=c(),Ot=a("p"),Ja=a("a"),wh=n("LongformerForMaskedLM"),kh=n(" is trained the exact same way "),Xa=a("a"),bh=n("RobertaForMaskedLM"),vh=n(` is
trained and should be used as follows:`),Wd=c(),v(Jn.$$.fragment),Qd=c(),Pt=a("h2"),Do=a("a"),pi=a("span"),v(Xn.$$.fragment),Th=c(),fi=a("span"),yh=n("LongformerConfig"),Bd=c(),He=a("div"),v(Yn.$$.fragment),$h=c(),Nt=a("p"),Lh=n("This is the configuration class to store the configuration of a "),Ya=a("a"),xh=n("LongformerModel"),Fh=n(" or a "),Za=a("a"),Mh=n("TFLongformerModel"),Eh=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),zh=c(),At=a("p"),qh=n("This is the configuration class to store the configuration of a "),er=a("a"),Ch=n("LongformerModel"),jh=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Zn=a("a"),Oh=n("allenai/longformer-base-4096"),Ph=n(` architecture with a sequence
length 4,096.`),Nh=c(),It=a("p"),Ah=n("The "),tr=a("a"),Ih=n("LongformerConfig"),Sh=n(" class directly inherits "),or=a("a"),Dh=n("RobertaConfig"),Wh=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Qh=c(),v(Wo.$$.fragment),Ud=c(),St=a("h2"),Qo=a("a"),gi=a("span"),v(es.$$.fragment),Bh=c(),ui=a("span"),Uh=n("LongformerTokenizer"),Hd=c(),gt=a("div"),v(ts.$$.fragment),Hh=c(),_i=a("p"),Rh=n("Construct a Longformer tokenizer."),Vh=c(),Bo=a("p"),nr=a("a"),Gh=n("LongformerTokenizer"),Kh=n(" is identical to "),sr=a("a"),Jh=n("RobertaTokenizer"),Xh=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Rd=c(),Dt=a("h2"),Uo=a("a"),wi=a("span"),v(os.$$.fragment),Yh=c(),ki=a("span"),Zh=n("LongformerTokenizerFast"),Vd=c(),ut=a("div"),v(ns.$$.fragment),ep=c(),ss=a("p"),tp=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),bi=a("em"),op=n("tokenizers"),np=n(" library)."),sp=c(),Ho=a("p"),ar=a("a"),ap=n("LongformerTokenizerFast"),rp=n(" is identical to "),rr=a("a"),ip=n("RobertaTokenizerFast"),lp=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Gd=c(),Wt=a("h2"),Ro=a("a"),vi=a("span"),v(as.$$.fragment),dp=c(),Ti=a("span"),cp=n("Longformer specific outputs"),Kd=c(),Qt=a("div"),v(rs.$$.fragment),mp=c(),yi=a("p"),hp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Jd=c(),Bt=a("div"),v(is.$$.fragment),pp=c(),$i=a("p"),fp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Xd=c(),Ut=a("div"),v(ls.$$.fragment),gp=c(),Li=a("p"),up=n("Base class for masked language models outputs."),Yd=c(),Ht=a("div"),v(ds.$$.fragment),_p=c(),xi=a("p"),wp=n("Base class for outputs of question answering Longformer models."),Zd=c(),Rt=a("div"),v(cs.$$.fragment),kp=c(),Fi=a("p"),bp=n("Base class for outputs of sentence classification models."),ec=c(),Vt=a("div"),v(ms.$$.fragment),vp=c(),Mi=a("p"),Tp=n("Base class for outputs of multiple choice Longformer models."),tc=c(),Gt=a("div"),v(hs.$$.fragment),yp=c(),Ei=a("p"),$p=n("Base class for outputs of token classification models."),oc=c(),Kt=a("div"),v(ps.$$.fragment),Lp=c(),zi=a("p"),xp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),nc=c(),Jt=a("div"),v(fs.$$.fragment),Fp=c(),qi=a("p"),Mp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),sc=c(),Xt=a("div"),v(gs.$$.fragment),Ep=c(),Ci=a("p"),zp=n("Base class for masked language models outputs."),ac=c(),Yt=a("div"),v(us.$$.fragment),qp=c(),ji=a("p"),Cp=n("Base class for outputs of question answering Longformer models."),rc=c(),Zt=a("div"),v(_s.$$.fragment),jp=c(),Oi=a("p"),Op=n("Base class for outputs of sentence classification models."),ic=c(),eo=a("div"),v(ws.$$.fragment),Pp=c(),Pi=a("p"),Np=n("Base class for outputs of multiple choice models."),lc=c(),to=a("div"),v(ks.$$.fragment),Ap=c(),Ni=a("p"),Ip=n("Base class for outputs of token classification models."),dc=c(),oo=a("h2"),Vo=a("a"),Ai=a("span"),v(bs.$$.fragment),Sp=c(),Ii=a("span"),Dp=n("LongformerModel"),cc=c(),Pe=a("div"),v(vs.$$.fragment),Wp=c(),Si=a("p"),Qp=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Bp=c(),Ts=a("p"),Up=n("This model inherits from "),ir=a("a"),Hp=n("PreTrainedModel"),Rp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=c(),ys=a("p"),Gp=n("This model is also a PyTorch "),$s=a("a"),Kp=n("torch.nn.Module"),Jp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xp=c(),no=a("p"),Yp=n("This class copied code from "),lr=a("a"),Zp=n("RobertaModel"),ef=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Ls=a("a"),tf=n(`Longformer:
the Long-Document Transformer`),of=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),nf=c(),xs=a("p"),sf=n("The self-attention module "),Di=a("code"),af=n("LongformerSelfAttention"),rf=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),lf=c(),at=a("div"),v(Fs.$$.fragment),df=c(),so=a("p"),cf=n("The "),dr=a("a"),mf=n("LongformerModel"),hf=n(" forward method, overrides the "),Wi=a("code"),pf=n("__call__"),ff=n(" special method."),gf=c(),v(Go.$$.fragment),uf=c(),v(Ko.$$.fragment),mc=c(),ao=a("h2"),Jo=a("a"),Qi=a("span"),v(Ms.$$.fragment),_f=c(),Bi=a("span"),wf=n("LongformerForMaskedLM"),hc=c(),Re=a("div"),v(Es.$$.fragment),kf=c(),zs=a("p"),bf=n("Longformer Model with a "),Ui=a("code"),vf=n("language modeling"),Tf=n(" head on top."),yf=c(),qs=a("p"),$f=n("This model inherits from "),cr=a("a"),Lf=n("PreTrainedModel"),xf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff=c(),Cs=a("p"),Mf=n("This model is also a PyTorch "),js=a("a"),Ef=n("torch.nn.Module"),zf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf=c(),Be=a("div"),v(Os.$$.fragment),Cf=c(),ro=a("p"),jf=n("The "),mr=a("a"),Of=n("LongformerForMaskedLM"),Pf=n(" forward method, overrides the "),Hi=a("code"),Nf=n("__call__"),Af=n(" special method."),If=c(),v(Xo.$$.fragment),Sf=c(),v(Yo.$$.fragment),Df=c(),Ri=a("p"),Wf=n("Let\u2019s try a very long input."),Qf=c(),v(Zo.$$.fragment),pc=c(),io=a("h2"),en=a("a"),Vi=a("span"),v(Ps.$$.fragment),Bf=c(),Gi=a("span"),Uf=n("LongformerForSequenceClassification"),fc=c(),Ve=a("div"),v(Ns.$$.fragment),Hf=c(),Ki=a("p"),Rf=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Vf=c(),As=a("p"),Gf=n("This model inherits from "),hr=a("a"),Kf=n("PreTrainedModel"),Jf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=c(),Is=a("p"),Yf=n("This model is also a PyTorch "),Ss=a("a"),Zf=n("torch.nn.Module"),eg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tg=c(),Ne=a("div"),v(Ds.$$.fragment),og=c(),lo=a("p"),ng=n("The "),pr=a("a"),sg=n("LongformerForSequenceClassification"),ag=n(" forward method, overrides the "),Ji=a("code"),rg=n("__call__"),ig=n(" special method."),lg=c(),v(tn.$$.fragment),dg=c(),v(on.$$.fragment),cg=c(),v(nn.$$.fragment),mg=c(),v(sn.$$.fragment),hg=c(),v(an.$$.fragment),gc=c(),co=a("h2"),rn=a("a"),Xi=a("span"),v(Ws.$$.fragment),pg=c(),Yi=a("span"),fg=n("LongformerForMultipleChoice"),uc=c(),Ge=a("div"),v(Qs.$$.fragment),gg=c(),Zi=a("p"),ug=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_g=c(),Bs=a("p"),wg=n("This model inherits from "),fr=a("a"),kg=n("PreTrainedModel"),bg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vg=c(),Us=a("p"),Tg=n("This model is also a PyTorch "),Hs=a("a"),yg=n("torch.nn.Module"),$g=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lg=c(),rt=a("div"),v(Rs.$$.fragment),xg=c(),mo=a("p"),Fg=n("The "),gr=a("a"),Mg=n("LongformerForMultipleChoice"),Eg=n(" forward method, overrides the "),el=a("code"),zg=n("__call__"),qg=n(" special method."),Cg=c(),v(ln.$$.fragment),jg=c(),v(dn.$$.fragment),_c=c(),ho=a("h2"),cn=a("a"),tl=a("span"),v(Vs.$$.fragment),Og=c(),ol=a("span"),Pg=n("LongformerForTokenClassification"),wc=c(),Ke=a("div"),v(Gs.$$.fragment),Ng=c(),nl=a("p"),Ag=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ig=c(),Ks=a("p"),Sg=n("This model inherits from "),ur=a("a"),Dg=n("PreTrainedModel"),Wg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qg=c(),Js=a("p"),Bg=n("This model is also a PyTorch "),Xs=a("a"),Ug=n("torch.nn.Module"),Hg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rg=c(),Ye=a("div"),v(Ys.$$.fragment),Vg=c(),po=a("p"),Gg=n("The "),_r=a("a"),Kg=n("LongformerForTokenClassification"),Jg=n(" forward method, overrides the "),sl=a("code"),Xg=n("__call__"),Yg=n(" special method."),Zg=c(),v(mn.$$.fragment),eu=c(),v(hn.$$.fragment),tu=c(),v(pn.$$.fragment),kc=c(),fo=a("h2"),fn=a("a"),al=a("span"),v(Zs.$$.fragment),ou=c(),rl=a("span"),nu=n("LongformerForQuestionAnswering"),bc=c(),Je=a("div"),v(ea.$$.fragment),su=c(),go=a("p"),au=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),il=a("code"),ru=n("span start logits"),iu=n(" and "),ll=a("code"),lu=n("span end logits"),du=n(")."),cu=c(),ta=a("p"),mu=n("This model inherits from "),wr=a("a"),hu=n("PreTrainedModel"),pu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu=c(),oa=a("p"),gu=n("This model is also a PyTorch "),na=a("a"),uu=n("torch.nn.Module"),_u=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu=c(),it=a("div"),v(sa.$$.fragment),ku=c(),uo=a("p"),bu=n("The "),kr=a("a"),vu=n("LongformerForQuestionAnswering"),Tu=n(" forward method, overrides the "),dl=a("code"),yu=n("__call__"),$u=n(" special method."),Lu=c(),v(gn.$$.fragment),xu=c(),v(un.$$.fragment),vc=c(),_o=a("h2"),_n=a("a"),cl=a("span"),v(aa.$$.fragment),Fu=c(),ml=a("span"),Mu=n("TFLongformerModel"),Tc=c(),ze=a("div"),v(ra.$$.fragment),Eu=c(),hl=a("p"),zu=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),qu=c(),ia=a("p"),Cu=n("This model inherits from "),br=a("a"),ju=n("TFPreTrainedModel"),Ou=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu=c(),la=a("p"),Nu=n("This model is also a "),da=a("a"),Au=n("tf.keras.Model"),Iu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su=c(),v(wn.$$.fragment),Du=c(),wo=a("p"),Wu=n("This class copies code from "),vr=a("a"),Qu=n("TFRobertaModel"),Bu=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),ca=a("a"),Uu=n("Longformer: the Long-Document Transformer"),Hu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ru=c(),ma=a("p"),Vu=n("The self-attention module "),pl=a("code"),Gu=n("TFLongformerSelfAttention"),Ku=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Ju=c(),bt=a("div"),v(ha.$$.fragment),Xu=c(),ko=a("p"),Yu=n("The "),Tr=a("a"),Zu=n("TFLongformerModel"),e_=n(" forward method, overrides the "),fl=a("code"),t_=n("__call__"),o_=n(" special method."),n_=c(),v(kn.$$.fragment),yc=c(),bo=a("h2"),bn=a("a"),gl=a("span"),v(pa.$$.fragment),s_=c(),ul=a("span"),a_=n("TFLongformerForMaskedLM"),$c=c(),Ie=a("div"),v(fa.$$.fragment),r_=c(),ga=a("p"),i_=n("Longformer Model with a "),_l=a("code"),l_=n("language modeling"),d_=n(" head on top."),c_=c(),ua=a("p"),m_=n("This model inherits from "),yr=a("a"),h_=n("TFPreTrainedModel"),p_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),f_=c(),_a=a("p"),g_=n("This model is also a "),wa=a("a"),u_=n("tf.keras.Model"),__=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w_=c(),v(vn.$$.fragment),k_=c(),Ze=a("div"),v(ka.$$.fragment),b_=c(),vo=a("p"),v_=n("The "),$r=a("a"),T_=n("TFLongformerForMaskedLM"),y_=n(" forward method, overrides the "),wl=a("code"),$_=n("__call__"),L_=n(" special method."),x_=c(),v(Tn.$$.fragment),F_=c(),v(yn.$$.fragment),M_=c(),v($n.$$.fragment),Lc=c(),To=a("h2"),Ln=a("a"),kl=a("span"),v(ba.$$.fragment),E_=c(),bl=a("span"),z_=n("TFLongformerForQuestionAnswering"),xc=c(),Se=a("div"),v(va.$$.fragment),q_=c(),yo=a("p"),C_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),vl=a("code"),j_=n("span start logits"),O_=n(" and "),Tl=a("code"),P_=n("span end logits"),N_=n(")."),A_=c(),Ta=a("p"),I_=n("This model inherits from "),Lr=a("a"),S_=n("TFPreTrainedModel"),D_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=c(),ya=a("p"),Q_=n("This model is also a "),$a=a("a"),B_=n("tf.keras.Model"),U_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_=c(),v(xn.$$.fragment),R_=c(),et=a("div"),v(La.$$.fragment),V_=c(),$o=a("p"),G_=n("The "),xr=a("a"),K_=n("TFLongformerForQuestionAnswering"),J_=n(" forward method, overrides the "),yl=a("code"),X_=n("__call__"),Y_=n(" special method."),Z_=c(),v(Fn.$$.fragment),ew=c(),v(Mn.$$.fragment),tw=c(),v(En.$$.fragment),Fc=c(),Lo=a("h2"),zn=a("a"),$l=a("span"),v(xa.$$.fragment),ow=c(),Ll=a("span"),nw=n("TFLongformerForSequenceClassification"),Mc=c(),De=a("div"),v(Fa.$$.fragment),sw=c(),xl=a("p"),aw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),rw=c(),Ma=a("p"),iw=n("This model inherits from "),Fr=a("a"),lw=n("TFPreTrainedModel"),dw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cw=c(),Ea=a("p"),mw=n("This model is also a "),za=a("a"),hw=n("tf.keras.Model"),pw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fw=c(),v(qn.$$.fragment),gw=c(),tt=a("div"),v(qa.$$.fragment),uw=c(),xo=a("p"),_w=n("The "),Mr=a("a"),ww=n("TFLongformerForSequenceClassification"),kw=n(" forward method, overrides the "),Fl=a("code"),bw=n("__call__"),vw=n(" special method."),Tw=c(),v(Cn.$$.fragment),yw=c(),v(jn.$$.fragment),$w=c(),v(On.$$.fragment),Ec=c(),Fo=a("h2"),Pn=a("a"),Ml=a("span"),v(Ca.$$.fragment),Lw=c(),El=a("span"),xw=n("TFLongformerForTokenClassification"),zc=c(),We=a("div"),v(ja.$$.fragment),Fw=c(),zl=a("p"),Mw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ew=c(),Oa=a("p"),zw=n("This model inherits from "),Er=a("a"),qw=n("TFPreTrainedModel"),Cw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jw=c(),Pa=a("p"),Ow=n("This model is also a "),Na=a("a"),Pw=n("tf.keras.Model"),Nw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Aw=c(),v(Nn.$$.fragment),Iw=c(),ot=a("div"),v(Aa.$$.fragment),Sw=c(),Mo=a("p"),Dw=n("The "),zr=a("a"),Ww=n("TFLongformerForTokenClassification"),Qw=n(" forward method, overrides the "),ql=a("code"),Bw=n("__call__"),Uw=n(" special method."),Hw=c(),v(An.$$.fragment),Rw=c(),v(In.$$.fragment),Vw=c(),v(Sn.$$.fragment),qc=c(),Eo=a("h2"),Dn=a("a"),Cl=a("span"),v(Ia.$$.fragment),Gw=c(),jl=a("span"),Kw=n("TFLongformerForMultipleChoice"),Cc=c(),Qe=a("div"),v(Sa.$$.fragment),Jw=c(),Ol=a("p"),Xw=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Yw=c(),Da=a("p"),Zw=n("This model inherits from "),qr=a("a"),ek=n("TFPreTrainedModel"),tk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=c(),Wa=a("p"),nk=n("This model is also a "),Qa=a("a"),sk=n("tf.keras.Model"),ak=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rk=c(),v(Wn.$$.fragment),ik=c(),lt=a("div"),v(Ba.$$.fragment),lk=c(),zo=a("p"),dk=n("The "),Cr=a("a"),ck=n("TFLongformerForMultipleChoice"),mk=n(" forward method, overrides the "),Pl=a("code"),hk=n("__call__"),pk=n(" special method."),fk=c(),v(Qn.$$.fragment),gk=c(),v(Bn.$$.fragment),this.h()},l(o){const g=uT('[data-svelte="svelte-1phssyn"]',document.head);l=r(g,"META",{name:!0,content:!0}),g.forEach(t),k=m(o),h=r(o,"H1",{class:!0});var Ua=i(h);p=r(Ua,"A",{id:!0,class:!0,href:!0});var Nl=i(p);b=r(Nl,"SPAN",{});var Al=i(b);T(d.$$.fragment,Al),Al.forEach(t),Nl.forEach(t),u=m(Ua),E=r(Ua,"SPAN",{});var Il=i(E);he=s(Il,"Longformer"),Il.forEach(t),Ua.forEach(t),J=m(o),z=r(o,"H2",{class:!0});var Ha=i(z);Z=r(Ha,"A",{id:!0,class:!0,href:!0});var Sl=i(Z);S=r(Sl,"SPAN",{});var Dl=i(S);T(ee.$$.fragment,Dl),Dl.forEach(t),Sl.forEach(t),pe=m(Ha),D=r(Ha,"SPAN",{});var Wl=i(D);fe=s(Wl,"Overview"),Wl.forEach(t),Ha.forEach(t),le=m(o),G=r(o,"P",{});var Ra=i(G);P=s(Ra,"The Longformer model was presented in "),te=r(Ra,"A",{href:!0,rel:!0});var Ql=i(te);X=s(Ql,"Longformer: The Long-Document Transformer"),Ql.forEach(t),q=s(Ra," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Ra.forEach(t),j=m(o),ne=r(o,"P",{});var Bl=i(ne);U=s(Bl,"The abstract from the paper is the following:"),Bl.forEach(t),de=m(o),se=r(o,"P",{});var Ul=i(se);W=r(Ul,"EM",{});var Hl=i(W);ge=s(Hl,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Hl.forEach(t),Ul.forEach(t),ce=m(o),C=r(o,"P",{});var Rl=i(C);ue=s(Rl,"Tips:"),Rl.forEach(t),B=m(o),ae=r(o,"UL",{});var Vl=i(ae);K=r(Vl,"LI",{});var _t=i(K);H=s(_t,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),re=r(_t,"CODE",{});var Gl=i(re);_e=s(Gl,"token_type_ids"),Gl.forEach(t),N=s(_t,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=r(_t,"CODE",{});var Kl=i(ie);R=s(Kl,"tokenizer.sep_token"),Kl.forEach(t),we=s(_t,` (or
`),w=r(_t,"CODE",{});var Jl=i(w);F=s(Jl,"</s>"),Jl.forEach(t),Y=s(_t,")."),_t.forEach(t),Vl.forEach(t),Te=m(o),me=r(o,"P",{});var qo=i(me);A=s(qo,"This model was contributed by "),be=r(qo,"A",{href:!0,rel:!0});var Xl=i(be);xe=s(Xl,"beltagy"),Xl.forEach(t),Fe=s(qo,". The Authors\u2019 code can be found "),O=r(qo,"A",{href:!0,rel:!0});var Yl=i(O);V=s(Yl,"here"),Yl.forEach(t),Me=s(qo,"."),qo.forEach(t),ye=m(o),I=r(o,"H2",{class:!0});var Va=i(I);ke=r(Va,"A",{id:!0,class:!0,href:!0});var Zl=i(ke);ve=r(Zl,"SPAN",{});var ed=i(ve);T(oe.$$.fragment,ed),ed.forEach(t),Zl.forEach(t),Ee=m(Va),ti=r(Va,"SPAN",{});var td=i(ti);Qm=s(td,"Longformer Self Attention"),td.forEach(t),Va.forEach(t),fd=m(o),$e=r(o,"P",{});var qe=i($e);Bm=s(qe,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),gd=Po(qe),ud=s(qe,` previous tokens and
`),_d=Po(qe),wd=s(qe," succeding tokens with "),kd=Po(qe),bd=s(qe,` being the window length as defined in
`),oi=r(qe,"CODE",{});var od=i(oi);Um=s(od,"config.attention_window"),od.forEach(t),Hm=s(qe,". Note that "),ni=r(qe,"CODE",{});var nd=i(ni);Rm=s(nd,"config.attention_window"),nd.forEach(t),Vm=s(qe," can be of type "),si=r(qe,"CODE",{});var sd=i(si);Gm=s(sd,"List"),sd.forEach(t),Km=s(qe,` to define a
different `),vd=Po(qe),Td=s(qe,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),ai=r(qe,"CODE",{});var ad=i(ai);Jm=s(ad,"BertSelfAttention"),ad.forEach(t),Xm=s(qe,"."),qe.forEach(t),yd=m(o),wt=r(o,"P",{});var Co=i(wt);Ym=s(Co,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),$d=Po(Co),Ld=s(Co,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ri=r(Co,"EM",{});var rd=i(ri);Zm=s(rd,"symmetric"),rd.forEach(t),eh=s(Co,"."),Co.forEach(t),xd=m(o),kt=r(o,"P",{});var jo=i(kt);th=s(jo,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ii=r(jo,"CODE",{});var id=i(ii);oh=s(id,"global_attention_mask"),id.forEach(t),nh=s(jo,` at run-time appropriately. All Longformer models employ the following logic for
`),li=r(jo,"CODE",{});var ld=i(li);sh=s(ld,"global_attention_mask"),ld.forEach(t),ah=s(jo,":"),jo.forEach(t),Fd=m(o),No=r(o,"UL",{});var Ga=i(No);di=r(Ga,"LI",{});var dd=i(di);rh=s(dd,"0: the token attends \u201Clocally\u201D,"),dd.forEach(t),ih=m(Ga),ci=r(Ga,"LI",{});var cd=i(ci);lh=s(cd,"1: the token attends \u201Cglobally\u201D."),cd.forEach(t),Ga.forEach(t),Md=m(o),Ao=r(o,"P",{});var Oc=i(Ao);dh=s(Oc,"For more information please also refer to "),Ka=r(Oc,"A",{href:!0});var uk=i(Ka);ch=s(uk,"forward()"),uk.forEach(t),mh=s(Oc," method."),Oc.forEach(t),Ed=m(o),Xe=r(o,"P",{});var vt=i(Xe);hh=s(vt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),zd=Po(vt),qd=s(vt,` to
`),Cd=Po(vt),jd=s(vt,", with "),Od=Po(vt),Pd=s(vt," being the sequence length and "),Nd=Po(vt),Ad=s(vt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),vt.forEach(t),Id=m(o),Io=r(o,"P",{});var Pc=i(Io);ph=s(Pc,"For more information, please refer to the official "),Gn=r(Pc,"A",{href:!0,rel:!0});var _k=i(Gn);fh=s(_k,"paper"),_k.forEach(t),gh=s(Pc,"."),Pc.forEach(t),Sd=m(o),jt=r(o,"H2",{class:!0});var Nc=i(jt);So=r(Nc,"A",{id:!0,class:!0,href:!0});var wk=i(So);mi=r(wk,"SPAN",{});var kk=i(mi);T(Kn.$$.fragment,kk),kk.forEach(t),wk.forEach(t),uh=m(Nc),hi=r(Nc,"SPAN",{});var bk=i(hi);_h=s(bk,"Training"),bk.forEach(t),Nc.forEach(t),Dd=m(o),Ot=r(o,"P",{});var md=i(Ot);Ja=r(md,"A",{href:!0});var vk=i(Ja);wh=s(vk,"LongformerForMaskedLM"),vk.forEach(t),kh=s(md," is trained the exact same way "),Xa=r(md,"A",{href:!0});var Tk=i(Xa);bh=s(Tk,"RobertaForMaskedLM"),Tk.forEach(t),vh=s(md,` is
trained and should be used as follows:`),md.forEach(t),Wd=m(o),T(Jn.$$.fragment,o),Qd=m(o),Pt=r(o,"H2",{class:!0});var Ac=i(Pt);Do=r(Ac,"A",{id:!0,class:!0,href:!0});var yk=i(Do);pi=r(yk,"SPAN",{});var $k=i(pi);T(Xn.$$.fragment,$k),$k.forEach(t),yk.forEach(t),Th=m(Ac),fi=r(Ac,"SPAN",{});var Lk=i(fi);yh=s(Lk,"LongformerConfig"),Lk.forEach(t),Ac.forEach(t),Bd=m(o),He=r(o,"DIV",{class:!0});var Tt=i(He);T(Yn.$$.fragment,Tt),$h=m(Tt),Nt=r(Tt,"P",{});var jr=i(Nt);Lh=s(jr,"This is the configuration class to store the configuration of a "),Ya=r(jr,"A",{href:!0});var xk=i(Ya);xh=s(xk,"LongformerModel"),xk.forEach(t),Fh=s(jr," or a "),Za=r(jr,"A",{href:!0});var Fk=i(Za);Mh=s(Fk,"TFLongformerModel"),Fk.forEach(t),Eh=s(jr,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),jr.forEach(t),zh=m(Tt),At=r(Tt,"P",{});var Or=i(At);qh=s(Or,"This is the configuration class to store the configuration of a "),er=r(Or,"A",{href:!0});var Mk=i(er);Ch=s(Mk,"LongformerModel"),Mk.forEach(t),jh=s(Or,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Zn=r(Or,"A",{href:!0,rel:!0});var Ek=i(Zn);Oh=s(Ek,"allenai/longformer-base-4096"),Ek.forEach(t),Ph=s(Or,` architecture with a sequence
length 4,096.`),Or.forEach(t),Nh=m(Tt),It=r(Tt,"P",{});var Pr=i(It);Ah=s(Pr,"The "),tr=r(Pr,"A",{href:!0});var zk=i(tr);Ih=s(zk,"LongformerConfig"),zk.forEach(t),Sh=s(Pr," class directly inherits "),or=r(Pr,"A",{href:!0});var qk=i(or);Dh=s(qk,"RobertaConfig"),qk.forEach(t),Wh=s(Pr,`. It reuses the same defaults. Please check the
parent class for more information.`),Pr.forEach(t),Qh=m(Tt),T(Wo.$$.fragment,Tt),Tt.forEach(t),Ud=m(o),St=r(o,"H2",{class:!0});var Ic=i(St);Qo=r(Ic,"A",{id:!0,class:!0,href:!0});var Ck=i(Qo);gi=r(Ck,"SPAN",{});var jk=i(gi);T(es.$$.fragment,jk),jk.forEach(t),Ck.forEach(t),Bh=m(Ic),ui=r(Ic,"SPAN",{});var Ok=i(ui);Uh=s(Ok,"LongformerTokenizer"),Ok.forEach(t),Ic.forEach(t),Hd=m(o),gt=r(o,"DIV",{class:!0});var Nr=i(gt);T(ts.$$.fragment,Nr),Hh=m(Nr),_i=r(Nr,"P",{});var Pk=i(_i);Rh=s(Pk,"Construct a Longformer tokenizer."),Pk.forEach(t),Vh=m(Nr),Bo=r(Nr,"P",{});var hd=i(Bo);nr=r(hd,"A",{href:!0});var Nk=i(nr);Gh=s(Nk,"LongformerTokenizer"),Nk.forEach(t),Kh=s(hd," is identical to "),sr=r(hd,"A",{href:!0});var Ak=i(sr);Jh=s(Ak,"RobertaTokenizer"),Ak.forEach(t),Xh=s(hd,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),hd.forEach(t),Nr.forEach(t),Rd=m(o),Dt=r(o,"H2",{class:!0});var Sc=i(Dt);Uo=r(Sc,"A",{id:!0,class:!0,href:!0});var Ik=i(Uo);wi=r(Ik,"SPAN",{});var Sk=i(wi);T(os.$$.fragment,Sk),Sk.forEach(t),Ik.forEach(t),Yh=m(Sc),ki=r(Sc,"SPAN",{});var Dk=i(ki);Zh=s(Dk,"LongformerTokenizerFast"),Dk.forEach(t),Sc.forEach(t),Vd=m(o),ut=r(o,"DIV",{class:!0});var Ar=i(ut);T(ns.$$.fragment,Ar),ep=m(Ar),ss=r(Ar,"P",{});var Dc=i(ss);tp=s(Dc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),bi=r(Dc,"EM",{});var Wk=i(bi);op=s(Wk,"tokenizers"),Wk.forEach(t),np=s(Dc," library)."),Dc.forEach(t),sp=m(Ar),Ho=r(Ar,"P",{});var pd=i(Ho);ar=r(pd,"A",{href:!0});var Qk=i(ar);ap=s(Qk,"LongformerTokenizerFast"),Qk.forEach(t),rp=s(pd," is identical to "),rr=r(pd,"A",{href:!0});var Bk=i(rr);ip=s(Bk,"RobertaTokenizerFast"),Bk.forEach(t),lp=s(pd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),pd.forEach(t),Ar.forEach(t),Gd=m(o),Wt=r(o,"H2",{class:!0});var Wc=i(Wt);Ro=r(Wc,"A",{id:!0,class:!0,href:!0});var Uk=i(Ro);vi=r(Uk,"SPAN",{});var Hk=i(vi);T(as.$$.fragment,Hk),Hk.forEach(t),Uk.forEach(t),dp=m(Wc),Ti=r(Wc,"SPAN",{});var Rk=i(Ti);cp=s(Rk,"Longformer specific outputs"),Rk.forEach(t),Wc.forEach(t),Kd=m(o),Qt=r(o,"DIV",{class:!0});var Qc=i(Qt);T(rs.$$.fragment,Qc),mp=m(Qc),yi=r(Qc,"P",{});var Vk=i(yi);hp=s(Vk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Vk.forEach(t),Qc.forEach(t),Jd=m(o),Bt=r(o,"DIV",{class:!0});var Bc=i(Bt);T(is.$$.fragment,Bc),pp=m(Bc),$i=r(Bc,"P",{});var Gk=i($i);fp=s(Gk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Gk.forEach(t),Bc.forEach(t),Xd=m(o),Ut=r(o,"DIV",{class:!0});var Uc=i(Ut);T(ls.$$.fragment,Uc),gp=m(Uc),Li=r(Uc,"P",{});var Kk=i(Li);up=s(Kk,"Base class for masked language models outputs."),Kk.forEach(t),Uc.forEach(t),Yd=m(o),Ht=r(o,"DIV",{class:!0});var Hc=i(Ht);T(ds.$$.fragment,Hc),_p=m(Hc),xi=r(Hc,"P",{});var Jk=i(xi);wp=s(Jk,"Base class for outputs of question answering Longformer models."),Jk.forEach(t),Hc.forEach(t),Zd=m(o),Rt=r(o,"DIV",{class:!0});var Rc=i(Rt);T(cs.$$.fragment,Rc),kp=m(Rc),Fi=r(Rc,"P",{});var Xk=i(Fi);bp=s(Xk,"Base class for outputs of sentence classification models."),Xk.forEach(t),Rc.forEach(t),ec=m(o),Vt=r(o,"DIV",{class:!0});var Vc=i(Vt);T(ms.$$.fragment,Vc),vp=m(Vc),Mi=r(Vc,"P",{});var Yk=i(Mi);Tp=s(Yk,"Base class for outputs of multiple choice Longformer models."),Yk.forEach(t),Vc.forEach(t),tc=m(o),Gt=r(o,"DIV",{class:!0});var Gc=i(Gt);T(hs.$$.fragment,Gc),yp=m(Gc),Ei=r(Gc,"P",{});var Zk=i(Ei);$p=s(Zk,"Base class for outputs of token classification models."),Zk.forEach(t),Gc.forEach(t),oc=m(o),Kt=r(o,"DIV",{class:!0});var Kc=i(Kt);T(ps.$$.fragment,Kc),Lp=m(Kc),zi=r(Kc,"P",{});var eb=i(zi);xp=s(eb,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),eb.forEach(t),Kc.forEach(t),nc=m(o),Jt=r(o,"DIV",{class:!0});var Jc=i(Jt);T(fs.$$.fragment,Jc),Fp=m(Jc),qi=r(Jc,"P",{});var tb=i(qi);Mp=s(tb,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),tb.forEach(t),Jc.forEach(t),sc=m(o),Xt=r(o,"DIV",{class:!0});var Xc=i(Xt);T(gs.$$.fragment,Xc),Ep=m(Xc),Ci=r(Xc,"P",{});var ob=i(Ci);zp=s(ob,"Base class for masked language models outputs."),ob.forEach(t),Xc.forEach(t),ac=m(o),Yt=r(o,"DIV",{class:!0});var Yc=i(Yt);T(us.$$.fragment,Yc),qp=m(Yc),ji=r(Yc,"P",{});var nb=i(ji);Cp=s(nb,"Base class for outputs of question answering Longformer models."),nb.forEach(t),Yc.forEach(t),rc=m(o),Zt=r(o,"DIV",{class:!0});var Zc=i(Zt);T(_s.$$.fragment,Zc),jp=m(Zc),Oi=r(Zc,"P",{});var sb=i(Oi);Op=s(sb,"Base class for outputs of sentence classification models."),sb.forEach(t),Zc.forEach(t),ic=m(o),eo=r(o,"DIV",{class:!0});var em=i(eo);T(ws.$$.fragment,em),Pp=m(em),Pi=r(em,"P",{});var ab=i(Pi);Np=s(ab,"Base class for outputs of multiple choice models."),ab.forEach(t),em.forEach(t),lc=m(o),to=r(o,"DIV",{class:!0});var tm=i(to);T(ks.$$.fragment,tm),Ap=m(tm),Ni=r(tm,"P",{});var rb=i(Ni);Ip=s(rb,"Base class for outputs of token classification models."),rb.forEach(t),tm.forEach(t),dc=m(o),oo=r(o,"H2",{class:!0});var om=i(oo);Vo=r(om,"A",{id:!0,class:!0,href:!0});var ib=i(Vo);Ai=r(ib,"SPAN",{});var lb=i(Ai);T(bs.$$.fragment,lb),lb.forEach(t),ib.forEach(t),Sp=m(om),Ii=r(om,"SPAN",{});var db=i(Ii);Dp=s(db,"LongformerModel"),db.forEach(t),om.forEach(t),cc=m(o),Pe=r(o,"DIV",{class:!0});var nt=i(Pe);T(vs.$$.fragment,nt),Wp=m(nt),Si=r(nt,"P",{});var cb=i(Si);Qp=s(cb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),cb.forEach(t),Bp=m(nt),Ts=r(nt,"P",{});var nm=i(Ts);Up=s(nm,"This model inherits from "),ir=r(nm,"A",{href:!0});var mb=i(ir);Hp=s(mb,"PreTrainedModel"),mb.forEach(t),Rp=s(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nm.forEach(t),Vp=m(nt),ys=r(nt,"P",{});var sm=i(ys);Gp=s(sm,"This model is also a PyTorch "),$s=r(sm,"A",{href:!0,rel:!0});var hb=i($s);Kp=s(hb,"torch.nn.Module"),hb.forEach(t),Jp=s(sm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sm.forEach(t),Xp=m(nt),no=r(nt,"P",{});var Ir=i(no);Yp=s(Ir,"This class copied code from "),lr=r(Ir,"A",{href:!0});var pb=i(lr);Zp=s(pb,"RobertaModel"),pb.forEach(t),ef=s(Ir,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Ls=r(Ir,"A",{href:!0,rel:!0});var fb=i(Ls);tf=s(fb,`Longformer:
the Long-Document Transformer`),fb.forEach(t),of=s(Ir,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Ir.forEach(t),nf=m(nt),xs=r(nt,"P",{});var am=i(xs);sf=s(am,"The self-attention module "),Di=r(am,"CODE",{});var gb=i(Di);af=s(gb,"LongformerSelfAttention"),gb.forEach(t),rf=s(am,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),am.forEach(t),lf=m(nt),at=r(nt,"DIV",{class:!0});var Un=i(at);T(Fs.$$.fragment,Un),df=m(Un),so=r(Un,"P",{});var Sr=i(so);cf=s(Sr,"The "),dr=r(Sr,"A",{href:!0});var ub=i(dr);mf=s(ub,"LongformerModel"),ub.forEach(t),hf=s(Sr," forward method, overrides the "),Wi=r(Sr,"CODE",{});var _b=i(Wi);pf=s(_b,"__call__"),_b.forEach(t),ff=s(Sr," special method."),Sr.forEach(t),gf=m(Un),T(Go.$$.fragment,Un),uf=m(Un),T(Ko.$$.fragment,Un),Un.forEach(t),nt.forEach(t),mc=m(o),ao=r(o,"H2",{class:!0});var rm=i(ao);Jo=r(rm,"A",{id:!0,class:!0,href:!0});var wb=i(Jo);Qi=r(wb,"SPAN",{});var kb=i(Qi);T(Ms.$$.fragment,kb),kb.forEach(t),wb.forEach(t),_f=m(rm),Bi=r(rm,"SPAN",{});var bb=i(Bi);wf=s(bb,"LongformerForMaskedLM"),bb.forEach(t),rm.forEach(t),hc=m(o),Re=r(o,"DIV",{class:!0});var yt=i(Re);T(Es.$$.fragment,yt),kf=m(yt),zs=r(yt,"P",{});var im=i(zs);bf=s(im,"Longformer Model with a "),Ui=r(im,"CODE",{});var vb=i(Ui);vf=s(vb,"language modeling"),vb.forEach(t),Tf=s(im," head on top."),im.forEach(t),yf=m(yt),qs=r(yt,"P",{});var lm=i(qs);$f=s(lm,"This model inherits from "),cr=r(lm,"A",{href:!0});var Tb=i(cr);Lf=s(Tb,"PreTrainedModel"),Tb.forEach(t),xf=s(lm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm.forEach(t),Ff=m(yt),Cs=r(yt,"P",{});var dm=i(Cs);Mf=s(dm,"This model is also a PyTorch "),js=r(dm,"A",{href:!0,rel:!0});var yb=i(js);Ef=s(yb,"torch.nn.Module"),yb.forEach(t),zf=s(dm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dm.forEach(t),qf=m(yt),Be=r(yt,"DIV",{class:!0});var dt=i(Be);T(Os.$$.fragment,dt),Cf=m(dt),ro=r(dt,"P",{});var Dr=i(ro);jf=s(Dr,"The "),mr=r(Dr,"A",{href:!0});var $b=i(mr);Of=s($b,"LongformerForMaskedLM"),$b.forEach(t),Pf=s(Dr," forward method, overrides the "),Hi=r(Dr,"CODE",{});var Lb=i(Hi);Nf=s(Lb,"__call__"),Lb.forEach(t),Af=s(Dr," special method."),Dr.forEach(t),If=m(dt),T(Xo.$$.fragment,dt),Sf=m(dt),T(Yo.$$.fragment,dt),Df=m(dt),Ri=r(dt,"P",{});var xb=i(Ri);Wf=s(xb,"Let\u2019s try a very long input."),xb.forEach(t),Qf=m(dt),T(Zo.$$.fragment,dt),dt.forEach(t),yt.forEach(t),pc=m(o),io=r(o,"H2",{class:!0});var cm=i(io);en=r(cm,"A",{id:!0,class:!0,href:!0});var Fb=i(en);Vi=r(Fb,"SPAN",{});var Mb=i(Vi);T(Ps.$$.fragment,Mb),Mb.forEach(t),Fb.forEach(t),Bf=m(cm),Gi=r(cm,"SPAN",{});var Eb=i(Gi);Uf=s(Eb,"LongformerForSequenceClassification"),Eb.forEach(t),cm.forEach(t),fc=m(o),Ve=r(o,"DIV",{class:!0});var $t=i(Ve);T(Ns.$$.fragment,$t),Hf=m($t),Ki=r($t,"P",{});var zb=i(Ki);Rf=s(zb,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),zb.forEach(t),Vf=m($t),As=r($t,"P",{});var mm=i(As);Gf=s(mm,"This model inherits from "),hr=r(mm,"A",{href:!0});var qb=i(hr);Kf=s(qb,"PreTrainedModel"),qb.forEach(t),Jf=s(mm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mm.forEach(t),Xf=m($t),Is=r($t,"P",{});var hm=i(Is);Yf=s(hm,"This model is also a PyTorch "),Ss=r(hm,"A",{href:!0,rel:!0});var Cb=i(Ss);Zf=s(Cb,"torch.nn.Module"),Cb.forEach(t),eg=s(hm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hm.forEach(t),tg=m($t),Ne=r($t,"DIV",{class:!0});var st=i(Ne);T(Ds.$$.fragment,st),og=m(st),lo=r(st,"P",{});var Wr=i(lo);ng=s(Wr,"The "),pr=r(Wr,"A",{href:!0});var jb=i(pr);sg=s(jb,"LongformerForSequenceClassification"),jb.forEach(t),ag=s(Wr," forward method, overrides the "),Ji=r(Wr,"CODE",{});var Ob=i(Ji);rg=s(Ob,"__call__"),Ob.forEach(t),ig=s(Wr," special method."),Wr.forEach(t),lg=m(st),T(tn.$$.fragment,st),dg=m(st),T(on.$$.fragment,st),cg=m(st),T(nn.$$.fragment,st),mg=m(st),T(sn.$$.fragment,st),hg=m(st),T(an.$$.fragment,st),st.forEach(t),$t.forEach(t),gc=m(o),co=r(o,"H2",{class:!0});var pm=i(co);rn=r(pm,"A",{id:!0,class:!0,href:!0});var Pb=i(rn);Xi=r(Pb,"SPAN",{});var Nb=i(Xi);T(Ws.$$.fragment,Nb),Nb.forEach(t),Pb.forEach(t),pg=m(pm),Yi=r(pm,"SPAN",{});var Ab=i(Yi);fg=s(Ab,"LongformerForMultipleChoice"),Ab.forEach(t),pm.forEach(t),uc=m(o),Ge=r(o,"DIV",{class:!0});var Lt=i(Ge);T(Qs.$$.fragment,Lt),gg=m(Lt),Zi=r(Lt,"P",{});var Ib=i(Zi);ug=s(Ib,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ib.forEach(t),_g=m(Lt),Bs=r(Lt,"P",{});var fm=i(Bs);wg=s(fm,"This model inherits from "),fr=r(fm,"A",{href:!0});var Sb=i(fr);kg=s(Sb,"PreTrainedModel"),Sb.forEach(t),bg=s(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fm.forEach(t),vg=m(Lt),Us=r(Lt,"P",{});var gm=i(Us);Tg=s(gm,"This model is also a PyTorch "),Hs=r(gm,"A",{href:!0,rel:!0});var Db=i(Hs);yg=s(Db,"torch.nn.Module"),Db.forEach(t),$g=s(gm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gm.forEach(t),Lg=m(Lt),rt=r(Lt,"DIV",{class:!0});var Hn=i(rt);T(Rs.$$.fragment,Hn),xg=m(Hn),mo=r(Hn,"P",{});var Qr=i(mo);Fg=s(Qr,"The "),gr=r(Qr,"A",{href:!0});var Wb=i(gr);Mg=s(Wb,"LongformerForMultipleChoice"),Wb.forEach(t),Eg=s(Qr," forward method, overrides the "),el=r(Qr,"CODE",{});var Qb=i(el);zg=s(Qb,"__call__"),Qb.forEach(t),qg=s(Qr," special method."),Qr.forEach(t),Cg=m(Hn),T(ln.$$.fragment,Hn),jg=m(Hn),T(dn.$$.fragment,Hn),Hn.forEach(t),Lt.forEach(t),_c=m(o),ho=r(o,"H2",{class:!0});var um=i(ho);cn=r(um,"A",{id:!0,class:!0,href:!0});var Bb=i(cn);tl=r(Bb,"SPAN",{});var Ub=i(tl);T(Vs.$$.fragment,Ub),Ub.forEach(t),Bb.forEach(t),Og=m(um),ol=r(um,"SPAN",{});var Hb=i(ol);Pg=s(Hb,"LongformerForTokenClassification"),Hb.forEach(t),um.forEach(t),wc=m(o),Ke=r(o,"DIV",{class:!0});var xt=i(Ke);T(Gs.$$.fragment,xt),Ng=m(xt),nl=r(xt,"P",{});var Rb=i(nl);Ag=s(Rb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Rb.forEach(t),Ig=m(xt),Ks=r(xt,"P",{});var _m=i(Ks);Sg=s(_m,"This model inherits from "),ur=r(_m,"A",{href:!0});var Vb=i(ur);Dg=s(Vb,"PreTrainedModel"),Vb.forEach(t),Wg=s(_m,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_m.forEach(t),Qg=m(xt),Js=r(xt,"P",{});var wm=i(Js);Bg=s(wm,"This model is also a PyTorch "),Xs=r(wm,"A",{href:!0,rel:!0});var Gb=i(Xs);Ug=s(Gb,"torch.nn.Module"),Gb.forEach(t),Hg=s(wm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wm.forEach(t),Rg=m(xt),Ye=r(xt,"DIV",{class:!0});var Ft=i(Ye);T(Ys.$$.fragment,Ft),Vg=m(Ft),po=r(Ft,"P",{});var Br=i(po);Gg=s(Br,"The "),_r=r(Br,"A",{href:!0});var Kb=i(_r);Kg=s(Kb,"LongformerForTokenClassification"),Kb.forEach(t),Jg=s(Br," forward method, overrides the "),sl=r(Br,"CODE",{});var Jb=i(sl);Xg=s(Jb,"__call__"),Jb.forEach(t),Yg=s(Br," special method."),Br.forEach(t),Zg=m(Ft),T(mn.$$.fragment,Ft),eu=m(Ft),T(hn.$$.fragment,Ft),tu=m(Ft),T(pn.$$.fragment,Ft),Ft.forEach(t),xt.forEach(t),kc=m(o),fo=r(o,"H2",{class:!0});var km=i(fo);fn=r(km,"A",{id:!0,class:!0,href:!0});var Xb=i(fn);al=r(Xb,"SPAN",{});var Yb=i(al);T(Zs.$$.fragment,Yb),Yb.forEach(t),Xb.forEach(t),ou=m(km),rl=r(km,"SPAN",{});var Zb=i(rl);nu=s(Zb,"LongformerForQuestionAnswering"),Zb.forEach(t),km.forEach(t),bc=m(o),Je=r(o,"DIV",{class:!0});var Mt=i(Je);T(ea.$$.fragment,Mt),su=m(Mt),go=r(Mt,"P",{});var Ur=i(go);au=s(Ur,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),il=r(Ur,"CODE",{});var ev=i(il);ru=s(ev,"span start logits"),ev.forEach(t),iu=s(Ur," and "),ll=r(Ur,"CODE",{});var tv=i(ll);lu=s(tv,"span end logits"),tv.forEach(t),du=s(Ur,")."),Ur.forEach(t),cu=m(Mt),ta=r(Mt,"P",{});var bm=i(ta);mu=s(bm,"This model inherits from "),wr=r(bm,"A",{href:!0});var ov=i(wr);hu=s(ov,"PreTrainedModel"),ov.forEach(t),pu=s(bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm.forEach(t),fu=m(Mt),oa=r(Mt,"P",{});var vm=i(oa);gu=s(vm,"This model is also a PyTorch "),na=r(vm,"A",{href:!0,rel:!0});var nv=i(na);uu=s(nv,"torch.nn.Module"),nv.forEach(t),_u=s(vm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vm.forEach(t),wu=m(Mt),it=r(Mt,"DIV",{class:!0});var Rn=i(it);T(sa.$$.fragment,Rn),ku=m(Rn),uo=r(Rn,"P",{});var Hr=i(uo);bu=s(Hr,"The "),kr=r(Hr,"A",{href:!0});var sv=i(kr);vu=s(sv,"LongformerForQuestionAnswering"),sv.forEach(t),Tu=s(Hr," forward method, overrides the "),dl=r(Hr,"CODE",{});var av=i(dl);yu=s(av,"__call__"),av.forEach(t),$u=s(Hr," special method."),Hr.forEach(t),Lu=m(Rn),T(gn.$$.fragment,Rn),xu=m(Rn),T(un.$$.fragment,Rn),Rn.forEach(t),Mt.forEach(t),vc=m(o),_o=r(o,"H2",{class:!0});var Tm=i(_o);_n=r(Tm,"A",{id:!0,class:!0,href:!0});var rv=i(_n);cl=r(rv,"SPAN",{});var iv=i(cl);T(aa.$$.fragment,iv),iv.forEach(t),rv.forEach(t),Fu=m(Tm),ml=r(Tm,"SPAN",{});var lv=i(ml);Mu=s(lv,"TFLongformerModel"),lv.forEach(t),Tm.forEach(t),Tc=m(o),ze=r(o,"DIV",{class:!0});var Ue=i(ze);T(ra.$$.fragment,Ue),Eu=m(Ue),hl=r(Ue,"P",{});var dv=i(hl);zu=s(dv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),dv.forEach(t),qu=m(Ue),ia=r(Ue,"P",{});var ym=i(ia);Cu=s(ym,"This model inherits from "),br=r(ym,"A",{href:!0});var cv=i(br);ju=s(cv,"TFPreTrainedModel"),cv.forEach(t),Ou=s(ym,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ym.forEach(t),Pu=m(Ue),la=r(Ue,"P",{});var $m=i(la);Nu=s($m,"This model is also a "),da=r($m,"A",{href:!0,rel:!0});var mv=i(da);Au=s(mv,"tf.keras.Model"),mv.forEach(t),Iu=s($m,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$m.forEach(t),Su=m(Ue),T(wn.$$.fragment,Ue),Du=m(Ue),wo=r(Ue,"P",{});var Rr=i(wo);Wu=s(Rr,"This class copies code from "),vr=r(Rr,"A",{href:!0});var hv=i(vr);Qu=s(hv,"TFRobertaModel"),hv.forEach(t),Bu=s(Rr,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),ca=r(Rr,"A",{href:!0,rel:!0});var pv=i(ca);Uu=s(pv,"Longformer: the Long-Document Transformer"),pv.forEach(t),Hu=s(Rr,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Rr.forEach(t),Ru=m(Ue),ma=r(Ue,"P",{});var Lm=i(ma);Vu=s(Lm,"The self-attention module "),pl=r(Lm,"CODE",{});var fv=i(pl);Gu=s(fv,"TFLongformerSelfAttention"),fv.forEach(t),Ku=s(Lm,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Lm.forEach(t),Ju=m(Ue),bt=r(Ue,"DIV",{class:!0});var Vr=i(bt);T(ha.$$.fragment,Vr),Xu=m(Vr),ko=r(Vr,"P",{});var Gr=i(ko);Yu=s(Gr,"The "),Tr=r(Gr,"A",{href:!0});var gv=i(Tr);Zu=s(gv,"TFLongformerModel"),gv.forEach(t),e_=s(Gr," forward method, overrides the "),fl=r(Gr,"CODE",{});var uv=i(fl);t_=s(uv,"__call__"),uv.forEach(t),o_=s(Gr," special method."),Gr.forEach(t),n_=m(Vr),T(kn.$$.fragment,Vr),Vr.forEach(t),Ue.forEach(t),yc=m(o),bo=r(o,"H2",{class:!0});var xm=i(bo);bn=r(xm,"A",{id:!0,class:!0,href:!0});var _v=i(bn);gl=r(_v,"SPAN",{});var wv=i(gl);T(pa.$$.fragment,wv),wv.forEach(t),_v.forEach(t),s_=m(xm),ul=r(xm,"SPAN",{});var kv=i(ul);a_=s(kv,"TFLongformerForMaskedLM"),kv.forEach(t),xm.forEach(t),$c=m(o),Ie=r(o,"DIV",{class:!0});var ct=i(Ie);T(fa.$$.fragment,ct),r_=m(ct),ga=r(ct,"P",{});var Fm=i(ga);i_=s(Fm,"Longformer Model with a "),_l=r(Fm,"CODE",{});var bv=i(_l);l_=s(bv,"language modeling"),bv.forEach(t),d_=s(Fm," head on top."),Fm.forEach(t),c_=m(ct),ua=r(ct,"P",{});var Mm=i(ua);m_=s(Mm,"This model inherits from "),yr=r(Mm,"A",{href:!0});var vv=i(yr);h_=s(vv,"TFPreTrainedModel"),vv.forEach(t),p_=s(Mm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mm.forEach(t),f_=m(ct),_a=r(ct,"P",{});var Em=i(_a);g_=s(Em,"This model is also a "),wa=r(Em,"A",{href:!0,rel:!0});var Tv=i(wa);u_=s(Tv,"tf.keras.Model"),Tv.forEach(t),__=s(Em,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Em.forEach(t),w_=m(ct),T(vn.$$.fragment,ct),k_=m(ct),Ze=r(ct,"DIV",{class:!0});var Et=i(Ze);T(ka.$$.fragment,Et),b_=m(Et),vo=r(Et,"P",{});var Kr=i(vo);v_=s(Kr,"The "),$r=r(Kr,"A",{href:!0});var yv=i($r);T_=s(yv,"TFLongformerForMaskedLM"),yv.forEach(t),y_=s(Kr," forward method, overrides the "),wl=r(Kr,"CODE",{});var $v=i(wl);$_=s($v,"__call__"),$v.forEach(t),L_=s(Kr," special method."),Kr.forEach(t),x_=m(Et),T(Tn.$$.fragment,Et),F_=m(Et),T(yn.$$.fragment,Et),M_=m(Et),T($n.$$.fragment,Et),Et.forEach(t),ct.forEach(t),Lc=m(o),To=r(o,"H2",{class:!0});var zm=i(To);Ln=r(zm,"A",{id:!0,class:!0,href:!0});var Lv=i(Ln);kl=r(Lv,"SPAN",{});var xv=i(kl);T(ba.$$.fragment,xv),xv.forEach(t),Lv.forEach(t),E_=m(zm),bl=r(zm,"SPAN",{});var Fv=i(bl);z_=s(Fv,"TFLongformerForQuestionAnswering"),Fv.forEach(t),zm.forEach(t),xc=m(o),Se=r(o,"DIV",{class:!0});var mt=i(Se);T(va.$$.fragment,mt),q_=m(mt),yo=r(mt,"P",{});var Jr=i(yo);C_=s(Jr,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),vl=r(Jr,"CODE",{});var Mv=i(vl);j_=s(Mv,"span start logits"),Mv.forEach(t),O_=s(Jr," and "),Tl=r(Jr,"CODE",{});var Ev=i(Tl);P_=s(Ev,"span end logits"),Ev.forEach(t),N_=s(Jr,")."),Jr.forEach(t),A_=m(mt),Ta=r(mt,"P",{});var qm=i(Ta);I_=s(qm,"This model inherits from "),Lr=r(qm,"A",{href:!0});var zv=i(Lr);S_=s(zv,"TFPreTrainedModel"),zv.forEach(t),D_=s(qm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qm.forEach(t),W_=m(mt),ya=r(mt,"P",{});var Cm=i(ya);Q_=s(Cm,"This model is also a "),$a=r(Cm,"A",{href:!0,rel:!0});var qv=i($a);B_=s(qv,"tf.keras.Model"),qv.forEach(t),U_=s(Cm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cm.forEach(t),H_=m(mt),T(xn.$$.fragment,mt),R_=m(mt),et=r(mt,"DIV",{class:!0});var zt=i(et);T(La.$$.fragment,zt),V_=m(zt),$o=r(zt,"P",{});var Xr=i($o);G_=s(Xr,"The "),xr=r(Xr,"A",{href:!0});var Cv=i(xr);K_=s(Cv,"TFLongformerForQuestionAnswering"),Cv.forEach(t),J_=s(Xr," forward method, overrides the "),yl=r(Xr,"CODE",{});var jv=i(yl);X_=s(jv,"__call__"),jv.forEach(t),Y_=s(Xr," special method."),Xr.forEach(t),Z_=m(zt),T(Fn.$$.fragment,zt),ew=m(zt),T(Mn.$$.fragment,zt),tw=m(zt),T(En.$$.fragment,zt),zt.forEach(t),mt.forEach(t),Fc=m(o),Lo=r(o,"H2",{class:!0});var jm=i(Lo);zn=r(jm,"A",{id:!0,class:!0,href:!0});var Ov=i(zn);$l=r(Ov,"SPAN",{});var Pv=i($l);T(xa.$$.fragment,Pv),Pv.forEach(t),Ov.forEach(t),ow=m(jm),Ll=r(jm,"SPAN",{});var Nv=i(Ll);nw=s(Nv,"TFLongformerForSequenceClassification"),Nv.forEach(t),jm.forEach(t),Mc=m(o),De=r(o,"DIV",{class:!0});var ht=i(De);T(Fa.$$.fragment,ht),sw=m(ht),xl=r(ht,"P",{});var Av=i(xl);aw=s(Av,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Av.forEach(t),rw=m(ht),Ma=r(ht,"P",{});var Om=i(Ma);iw=s(Om,"This model inherits from "),Fr=r(Om,"A",{href:!0});var Iv=i(Fr);lw=s(Iv,"TFPreTrainedModel"),Iv.forEach(t),dw=s(Om,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Om.forEach(t),cw=m(ht),Ea=r(ht,"P",{});var Pm=i(Ea);mw=s(Pm,"This model is also a "),za=r(Pm,"A",{href:!0,rel:!0});var Sv=i(za);hw=s(Sv,"tf.keras.Model"),Sv.forEach(t),pw=s(Pm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pm.forEach(t),fw=m(ht),T(qn.$$.fragment,ht),gw=m(ht),tt=r(ht,"DIV",{class:!0});var qt=i(tt);T(qa.$$.fragment,qt),uw=m(qt),xo=r(qt,"P",{});var Yr=i(xo);_w=s(Yr,"The "),Mr=r(Yr,"A",{href:!0});var Dv=i(Mr);ww=s(Dv,"TFLongformerForSequenceClassification"),Dv.forEach(t),kw=s(Yr," forward method, overrides the "),Fl=r(Yr,"CODE",{});var Wv=i(Fl);bw=s(Wv,"__call__"),Wv.forEach(t),vw=s(Yr," special method."),Yr.forEach(t),Tw=m(qt),T(Cn.$$.fragment,qt),yw=m(qt),T(jn.$$.fragment,qt),$w=m(qt),T(On.$$.fragment,qt),qt.forEach(t),ht.forEach(t),Ec=m(o),Fo=r(o,"H2",{class:!0});var Nm=i(Fo);Pn=r(Nm,"A",{id:!0,class:!0,href:!0});var Qv=i(Pn);Ml=r(Qv,"SPAN",{});var Bv=i(Ml);T(Ca.$$.fragment,Bv),Bv.forEach(t),Qv.forEach(t),Lw=m(Nm),El=r(Nm,"SPAN",{});var Uv=i(El);xw=s(Uv,"TFLongformerForTokenClassification"),Uv.forEach(t),Nm.forEach(t),zc=m(o),We=r(o,"DIV",{class:!0});var pt=i(We);T(ja.$$.fragment,pt),Fw=m(pt),zl=r(pt,"P",{});var Hv=i(zl);Mw=s(Hv,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Hv.forEach(t),Ew=m(pt),Oa=r(pt,"P",{});var Am=i(Oa);zw=s(Am,"This model inherits from "),Er=r(Am,"A",{href:!0});var Rv=i(Er);qw=s(Rv,"TFPreTrainedModel"),Rv.forEach(t),Cw=s(Am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Am.forEach(t),jw=m(pt),Pa=r(pt,"P",{});var Im=i(Pa);Ow=s(Im,"This model is also a "),Na=r(Im,"A",{href:!0,rel:!0});var Vv=i(Na);Pw=s(Vv,"tf.keras.Model"),Vv.forEach(t),Nw=s(Im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im.forEach(t),Aw=m(pt),T(Nn.$$.fragment,pt),Iw=m(pt),ot=r(pt,"DIV",{class:!0});var Ct=i(ot);T(Aa.$$.fragment,Ct),Sw=m(Ct),Mo=r(Ct,"P",{});var Zr=i(Mo);Dw=s(Zr,"The "),zr=r(Zr,"A",{href:!0});var Gv=i(zr);Ww=s(Gv,"TFLongformerForTokenClassification"),Gv.forEach(t),Qw=s(Zr," forward method, overrides the "),ql=r(Zr,"CODE",{});var Kv=i(ql);Bw=s(Kv,"__call__"),Kv.forEach(t),Uw=s(Zr," special method."),Zr.forEach(t),Hw=m(Ct),T(An.$$.fragment,Ct),Rw=m(Ct),T(In.$$.fragment,Ct),Vw=m(Ct),T(Sn.$$.fragment,Ct),Ct.forEach(t),pt.forEach(t),qc=m(o),Eo=r(o,"H2",{class:!0});var Sm=i(Eo);Dn=r(Sm,"A",{id:!0,class:!0,href:!0});var Jv=i(Dn);Cl=r(Jv,"SPAN",{});var Xv=i(Cl);T(Ia.$$.fragment,Xv),Xv.forEach(t),Jv.forEach(t),Gw=m(Sm),jl=r(Sm,"SPAN",{});var Yv=i(jl);Kw=s(Yv,"TFLongformerForMultipleChoice"),Yv.forEach(t),Sm.forEach(t),Cc=m(o),Qe=r(o,"DIV",{class:!0});var ft=i(Qe);T(Sa.$$.fragment,ft),Jw=m(ft),Ol=r(ft,"P",{});var Zv=i(Ol);Xw=s(Zv,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Zv.forEach(t),Yw=m(ft),Da=r(ft,"P",{});var Dm=i(Da);Zw=s(Dm,"This model inherits from "),qr=r(Dm,"A",{href:!0});var eT=i(qr);ek=s(eT,"TFPreTrainedModel"),eT.forEach(t),tk=s(Dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dm.forEach(t),ok=m(ft),Wa=r(ft,"P",{});var Wm=i(Wa);nk=s(Wm,"This model is also a "),Qa=r(Wm,"A",{href:!0,rel:!0});var tT=i(Qa);sk=s(tT,"tf.keras.Model"),tT.forEach(t),ak=s(Wm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wm.forEach(t),rk=m(ft),T(Wn.$$.fragment,ft),ik=m(ft),lt=r(ft,"DIV",{class:!0});var Vn=i(lt);T(Ba.$$.fragment,Vn),lk=m(Vn),zo=r(Vn,"P",{});var ei=i(zo);dk=s(ei,"The "),Cr=r(ei,"A",{href:!0});var oT=i(Cr);ck=s(oT,"TFLongformerForMultipleChoice"),oT.forEach(t),mk=s(ei," forward method, overrides the "),Pl=r(ei,"CODE",{});var nT=i(Pl);hk=s(nT,"__call__"),nT.forEach(t),pk=s(ei," special method."),ei.forEach(t),fk=m(Vn),T(Qn.$$.fragment,Vn),gk=m(Vn),T(Bn.$$.fragment,Vn),Vn.forEach(t),ft.forEach(t),this.h()},h(){_(l,"name","hf:doc:metadata"),_(l,"content",JSON.stringify(sy)),_(p,"id","longformer"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#longformer"),_(h,"class","relative group"),_(Z,"id","overview"),_(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Z,"href","#overview"),_(z,"class","relative group"),_(te,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(te,"rel","nofollow"),_(be,"href","https://huggingface.co/beltagy"),_(be,"rel","nofollow"),_(O,"href","https://github.com/allenai/longformer"),_(O,"rel","nofollow"),_(ke,"id","longformer-self-attention"),_(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ke,"href","#longformer-self-attention"),_(I,"class","relative group"),gd.a=ud,_d.a=wd,kd.a=bd,vd.a=Td,$d.a=Ld,_(Ka,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel.forward"),zd.a=qd,Cd.a=jd,Od.a=Pd,Nd.a=Ad,_(Gn,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(Gn,"rel","nofollow"),_(So,"id","training"),_(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(So,"href","#training"),_(jt,"class","relative group"),_(Ja,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Xa,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),_(Do,"id","transformers.LongformerConfig"),_(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Do,"href","#transformers.LongformerConfig"),_(Pt,"class","relative group"),_(Ya,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),_(Za,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),_(er,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),_(Zn,"href","https://huggingface.co/allenai/longformer-base-4096"),_(Zn,"rel","nofollow"),_(tr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"),_(or,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qo,"id","transformers.LongformerTokenizer"),_(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Qo,"href","#transformers.LongformerTokenizer"),_(St,"class","relative group"),_(nr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer"),_(sr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),_(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Uo,"id","transformers.LongformerTokenizerFast"),_(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Uo,"href","#transformers.LongformerTokenizerFast"),_(Dt,"class","relative group"),_(ar,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizerFast"),_(rr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),_(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ro,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ro,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Wt,"class","relative group"),_(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vo,"id","transformers.LongformerModel"),_(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Vo,"href","#transformers.LongformerModel"),_(oo,"class","relative group"),_(ir,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_($s,"rel","nofollow"),_(lr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),_(Ls,"href","https://arxiv.org/abs/2004.05150"),_(Ls,"rel","nofollow"),_(dr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jo,"id","transformers.LongformerForMaskedLM"),_(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Jo,"href","#transformers.LongformerForMaskedLM"),_(ao,"class","relative group"),_(cr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(js,"rel","nofollow"),_(mr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(en,"id","transformers.LongformerForSequenceClassification"),_(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(en,"href","#transformers.LongformerForSequenceClassification"),_(io,"class","relative group"),_(hr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Ss,"rel","nofollow"),_(pr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(rn,"id","transformers.LongformerForMultipleChoice"),_(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(rn,"href","#transformers.LongformerForMultipleChoice"),_(co,"class","relative group"),_(fr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Hs,"rel","nofollow"),_(gr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(cn,"id","transformers.LongformerForTokenClassification"),_(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(cn,"href","#transformers.LongformerForTokenClassification"),_(ho,"class","relative group"),_(ur,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Xs,"rel","nofollow"),_(_r,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForTokenClassification"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(fn,"id","transformers.LongformerForQuestionAnswering"),_(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(fn,"href","#transformers.LongformerForQuestionAnswering"),_(fo,"class","relative group"),_(wr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(na,"rel","nofollow"),_(kr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),_(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_n,"id","transformers.TFLongformerModel"),_(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_n,"href","#transformers.TFLongformerModel"),_(_o,"class","relative group"),_(br,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(da,"rel","nofollow"),_(vr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),_(ca,"href","https://arxiv.org/abs/2004.05150"),_(ca,"rel","nofollow"),_(Tr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),_(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(bn,"id","transformers.TFLongformerForMaskedLM"),_(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(bn,"href","#transformers.TFLongformerForMaskedLM"),_(bo,"class","relative group"),_(yr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(wa,"rel","nofollow"),_($r,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),_(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ln,"id","transformers.TFLongformerForQuestionAnswering"),_(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ln,"href","#transformers.TFLongformerForQuestionAnswering"),_(To,"class","relative group"),_(Lr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_($a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_($a,"rel","nofollow"),_(xr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(zn,"id","transformers.TFLongformerForSequenceClassification"),_(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(zn,"href","#transformers.TFLongformerForSequenceClassification"),_(Lo,"class","relative group"),_(Fr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(za,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(za,"rel","nofollow"),_(Mr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pn,"id","transformers.TFLongformerForTokenClassification"),_(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Pn,"href","#transformers.TFLongformerForTokenClassification"),_(Fo,"class","relative group"),_(Er,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Na,"rel","nofollow"),_(zr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Dn,"id","transformers.TFLongformerForMultipleChoice"),_(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Dn,"href","#transformers.TFLongformerForMultipleChoice"),_(Eo,"class","relative group"),_(qr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Qa,"rel","nofollow"),_(Cr,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),_(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),f(o,k,g),f(o,h,g),e(h,p),e(p,b),y(d,b,null),e(h,u),e(h,E),e(E,he),f(o,J,g),f(o,z,g),e(z,Z),e(Z,S),y(ee,S,null),e(z,pe),e(z,D),e(D,fe),f(o,le,g),f(o,G,g),e(G,P),e(G,te),e(te,X),e(G,q),f(o,j,g),f(o,ne,g),e(ne,U),f(o,de,g),f(o,se,g),e(se,W),e(W,ge),f(o,ce,g),f(o,C,g),e(C,ue),f(o,B,g),f(o,ae,g),e(ae,K),e(K,H),e(K,re),e(re,_e),e(K,N),e(K,ie),e(ie,R),e(K,we),e(K,w),e(w,F),e(K,Y),f(o,Te,g),f(o,me,g),e(me,A),e(me,be),e(be,xe),e(me,Fe),e(me,O),e(O,V),e(me,Me),f(o,ye,g),f(o,I,g),e(I,ke),e(ke,ve),y(oe,ve,null),e(I,Ee),e(I,ti),e(ti,Qm),f(o,fd,g),f(o,$e,g),e($e,Bm),gd.m(sT,$e),e($e,ud),_d.m(aT,$e),e($e,wd),kd.m(rT,$e),e($e,bd),e($e,oi),e(oi,Um),e($e,Hm),e($e,ni),e(ni,Rm),e($e,Vm),e($e,si),e(si,Gm),e($e,Km),vd.m(iT,$e),e($e,Td),e($e,ai),e(ai,Jm),e($e,Xm),f(o,yd,g),f(o,wt,g),e(wt,Ym),$d.m(lT,wt),e(wt,Ld),e(wt,ri),e(ri,Zm),e(wt,eh),f(o,xd,g),f(o,kt,g),e(kt,th),e(kt,ii),e(ii,oh),e(kt,nh),e(kt,li),e(li,sh),e(kt,ah),f(o,Fd,g),f(o,No,g),e(No,di),e(di,rh),e(No,ih),e(No,ci),e(ci,lh),f(o,Md,g),f(o,Ao,g),e(Ao,dh),e(Ao,Ka),e(Ka,ch),e(Ao,mh),f(o,Ed,g),f(o,Xe,g),e(Xe,hh),zd.m(dT,Xe),e(Xe,qd),Cd.m(cT,Xe),e(Xe,jd),Od.m(mT,Xe),e(Xe,Pd),Nd.m(hT,Xe),e(Xe,Ad),f(o,Id,g),f(o,Io,g),e(Io,ph),e(Io,Gn),e(Gn,fh),e(Io,gh),f(o,Sd,g),f(o,jt,g),e(jt,So),e(So,mi),y(Kn,mi,null),e(jt,uh),e(jt,hi),e(hi,_h),f(o,Dd,g),f(o,Ot,g),e(Ot,Ja),e(Ja,wh),e(Ot,kh),e(Ot,Xa),e(Xa,bh),e(Ot,vh),f(o,Wd,g),y(Jn,o,g),f(o,Qd,g),f(o,Pt,g),e(Pt,Do),e(Do,pi),y(Xn,pi,null),e(Pt,Th),e(Pt,fi),e(fi,yh),f(o,Bd,g),f(o,He,g),y(Yn,He,null),e(He,$h),e(He,Nt),e(Nt,Lh),e(Nt,Ya),e(Ya,xh),e(Nt,Fh),e(Nt,Za),e(Za,Mh),e(Nt,Eh),e(He,zh),e(He,At),e(At,qh),e(At,er),e(er,Ch),e(At,jh),e(At,Zn),e(Zn,Oh),e(At,Ph),e(He,Nh),e(He,It),e(It,Ah),e(It,tr),e(tr,Ih),e(It,Sh),e(It,or),e(or,Dh),e(It,Wh),e(He,Qh),y(Wo,He,null),f(o,Ud,g),f(o,St,g),e(St,Qo),e(Qo,gi),y(es,gi,null),e(St,Bh),e(St,ui),e(ui,Uh),f(o,Hd,g),f(o,gt,g),y(ts,gt,null),e(gt,Hh),e(gt,_i),e(_i,Rh),e(gt,Vh),e(gt,Bo),e(Bo,nr),e(nr,Gh),e(Bo,Kh),e(Bo,sr),e(sr,Jh),e(Bo,Xh),f(o,Rd,g),f(o,Dt,g),e(Dt,Uo),e(Uo,wi),y(os,wi,null),e(Dt,Yh),e(Dt,ki),e(ki,Zh),f(o,Vd,g),f(o,ut,g),y(ns,ut,null),e(ut,ep),e(ut,ss),e(ss,tp),e(ss,bi),e(bi,op),e(ss,np),e(ut,sp),e(ut,Ho),e(Ho,ar),e(ar,ap),e(Ho,rp),e(Ho,rr),e(rr,ip),e(Ho,lp),f(o,Gd,g),f(o,Wt,g),e(Wt,Ro),e(Ro,vi),y(as,vi,null),e(Wt,dp),e(Wt,Ti),e(Ti,cp),f(o,Kd,g),f(o,Qt,g),y(rs,Qt,null),e(Qt,mp),e(Qt,yi),e(yi,hp),f(o,Jd,g),f(o,Bt,g),y(is,Bt,null),e(Bt,pp),e(Bt,$i),e($i,fp),f(o,Xd,g),f(o,Ut,g),y(ls,Ut,null),e(Ut,gp),e(Ut,Li),e(Li,up),f(o,Yd,g),f(o,Ht,g),y(ds,Ht,null),e(Ht,_p),e(Ht,xi),e(xi,wp),f(o,Zd,g),f(o,Rt,g),y(cs,Rt,null),e(Rt,kp),e(Rt,Fi),e(Fi,bp),f(o,ec,g),f(o,Vt,g),y(ms,Vt,null),e(Vt,vp),e(Vt,Mi),e(Mi,Tp),f(o,tc,g),f(o,Gt,g),y(hs,Gt,null),e(Gt,yp),e(Gt,Ei),e(Ei,$p),f(o,oc,g),f(o,Kt,g),y(ps,Kt,null),e(Kt,Lp),e(Kt,zi),e(zi,xp),f(o,nc,g),f(o,Jt,g),y(fs,Jt,null),e(Jt,Fp),e(Jt,qi),e(qi,Mp),f(o,sc,g),f(o,Xt,g),y(gs,Xt,null),e(Xt,Ep),e(Xt,Ci),e(Ci,zp),f(o,ac,g),f(o,Yt,g),y(us,Yt,null),e(Yt,qp),e(Yt,ji),e(ji,Cp),f(o,rc,g),f(o,Zt,g),y(_s,Zt,null),e(Zt,jp),e(Zt,Oi),e(Oi,Op),f(o,ic,g),f(o,eo,g),y(ws,eo,null),e(eo,Pp),e(eo,Pi),e(Pi,Np),f(o,lc,g),f(o,to,g),y(ks,to,null),e(to,Ap),e(to,Ni),e(Ni,Ip),f(o,dc,g),f(o,oo,g),e(oo,Vo),e(Vo,Ai),y(bs,Ai,null),e(oo,Sp),e(oo,Ii),e(Ii,Dp),f(o,cc,g),f(o,Pe,g),y(vs,Pe,null),e(Pe,Wp),e(Pe,Si),e(Si,Qp),e(Pe,Bp),e(Pe,Ts),e(Ts,Up),e(Ts,ir),e(ir,Hp),e(Ts,Rp),e(Pe,Vp),e(Pe,ys),e(ys,Gp),e(ys,$s),e($s,Kp),e(ys,Jp),e(Pe,Xp),e(Pe,no),e(no,Yp),e(no,lr),e(lr,Zp),e(no,ef),e(no,Ls),e(Ls,tf),e(no,of),e(Pe,nf),e(Pe,xs),e(xs,sf),e(xs,Di),e(Di,af),e(xs,rf),e(Pe,lf),e(Pe,at),y(Fs,at,null),e(at,df),e(at,so),e(so,cf),e(so,dr),e(dr,mf),e(so,hf),e(so,Wi),e(Wi,pf),e(so,ff),e(at,gf),y(Go,at,null),e(at,uf),y(Ko,at,null),f(o,mc,g),f(o,ao,g),e(ao,Jo),e(Jo,Qi),y(Ms,Qi,null),e(ao,_f),e(ao,Bi),e(Bi,wf),f(o,hc,g),f(o,Re,g),y(Es,Re,null),e(Re,kf),e(Re,zs),e(zs,bf),e(zs,Ui),e(Ui,vf),e(zs,Tf),e(Re,yf),e(Re,qs),e(qs,$f),e(qs,cr),e(cr,Lf),e(qs,xf),e(Re,Ff),e(Re,Cs),e(Cs,Mf),e(Cs,js),e(js,Ef),e(Cs,zf),e(Re,qf),e(Re,Be),y(Os,Be,null),e(Be,Cf),e(Be,ro),e(ro,jf),e(ro,mr),e(mr,Of),e(ro,Pf),e(ro,Hi),e(Hi,Nf),e(ro,Af),e(Be,If),y(Xo,Be,null),e(Be,Sf),y(Yo,Be,null),e(Be,Df),e(Be,Ri),e(Ri,Wf),e(Be,Qf),y(Zo,Be,null),f(o,pc,g),f(o,io,g),e(io,en),e(en,Vi),y(Ps,Vi,null),e(io,Bf),e(io,Gi),e(Gi,Uf),f(o,fc,g),f(o,Ve,g),y(Ns,Ve,null),e(Ve,Hf),e(Ve,Ki),e(Ki,Rf),e(Ve,Vf),e(Ve,As),e(As,Gf),e(As,hr),e(hr,Kf),e(As,Jf),e(Ve,Xf),e(Ve,Is),e(Is,Yf),e(Is,Ss),e(Ss,Zf),e(Is,eg),e(Ve,tg),e(Ve,Ne),y(Ds,Ne,null),e(Ne,og),e(Ne,lo),e(lo,ng),e(lo,pr),e(pr,sg),e(lo,ag),e(lo,Ji),e(Ji,rg),e(lo,ig),e(Ne,lg),y(tn,Ne,null),e(Ne,dg),y(on,Ne,null),e(Ne,cg),y(nn,Ne,null),e(Ne,mg),y(sn,Ne,null),e(Ne,hg),y(an,Ne,null),f(o,gc,g),f(o,co,g),e(co,rn),e(rn,Xi),y(Ws,Xi,null),e(co,pg),e(co,Yi),e(Yi,fg),f(o,uc,g),f(o,Ge,g),y(Qs,Ge,null),e(Ge,gg),e(Ge,Zi),e(Zi,ug),e(Ge,_g),e(Ge,Bs),e(Bs,wg),e(Bs,fr),e(fr,kg),e(Bs,bg),e(Ge,vg),e(Ge,Us),e(Us,Tg),e(Us,Hs),e(Hs,yg),e(Us,$g),e(Ge,Lg),e(Ge,rt),y(Rs,rt,null),e(rt,xg),e(rt,mo),e(mo,Fg),e(mo,gr),e(gr,Mg),e(mo,Eg),e(mo,el),e(el,zg),e(mo,qg),e(rt,Cg),y(ln,rt,null),e(rt,jg),y(dn,rt,null),f(o,_c,g),f(o,ho,g),e(ho,cn),e(cn,tl),y(Vs,tl,null),e(ho,Og),e(ho,ol),e(ol,Pg),f(o,wc,g),f(o,Ke,g),y(Gs,Ke,null),e(Ke,Ng),e(Ke,nl),e(nl,Ag),e(Ke,Ig),e(Ke,Ks),e(Ks,Sg),e(Ks,ur),e(ur,Dg),e(Ks,Wg),e(Ke,Qg),e(Ke,Js),e(Js,Bg),e(Js,Xs),e(Xs,Ug),e(Js,Hg),e(Ke,Rg),e(Ke,Ye),y(Ys,Ye,null),e(Ye,Vg),e(Ye,po),e(po,Gg),e(po,_r),e(_r,Kg),e(po,Jg),e(po,sl),e(sl,Xg),e(po,Yg),e(Ye,Zg),y(mn,Ye,null),e(Ye,eu),y(hn,Ye,null),e(Ye,tu),y(pn,Ye,null),f(o,kc,g),f(o,fo,g),e(fo,fn),e(fn,al),y(Zs,al,null),e(fo,ou),e(fo,rl),e(rl,nu),f(o,bc,g),f(o,Je,g),y(ea,Je,null),e(Je,su),e(Je,go),e(go,au),e(go,il),e(il,ru),e(go,iu),e(go,ll),e(ll,lu),e(go,du),e(Je,cu),e(Je,ta),e(ta,mu),e(ta,wr),e(wr,hu),e(ta,pu),e(Je,fu),e(Je,oa),e(oa,gu),e(oa,na),e(na,uu),e(oa,_u),e(Je,wu),e(Je,it),y(sa,it,null),e(it,ku),e(it,uo),e(uo,bu),e(uo,kr),e(kr,vu),e(uo,Tu),e(uo,dl),e(dl,yu),e(uo,$u),e(it,Lu),y(gn,it,null),e(it,xu),y(un,it,null),f(o,vc,g),f(o,_o,g),e(_o,_n),e(_n,cl),y(aa,cl,null),e(_o,Fu),e(_o,ml),e(ml,Mu),f(o,Tc,g),f(o,ze,g),y(ra,ze,null),e(ze,Eu),e(ze,hl),e(hl,zu),e(ze,qu),e(ze,ia),e(ia,Cu),e(ia,br),e(br,ju),e(ia,Ou),e(ze,Pu),e(ze,la),e(la,Nu),e(la,da),e(da,Au),e(la,Iu),e(ze,Su),y(wn,ze,null),e(ze,Du),e(ze,wo),e(wo,Wu),e(wo,vr),e(vr,Qu),e(wo,Bu),e(wo,ca),e(ca,Uu),e(wo,Hu),e(ze,Ru),e(ze,ma),e(ma,Vu),e(ma,pl),e(pl,Gu),e(ma,Ku),e(ze,Ju),e(ze,bt),y(ha,bt,null),e(bt,Xu),e(bt,ko),e(ko,Yu),e(ko,Tr),e(Tr,Zu),e(ko,e_),e(ko,fl),e(fl,t_),e(ko,o_),e(bt,n_),y(kn,bt,null),f(o,yc,g),f(o,bo,g),e(bo,bn),e(bn,gl),y(pa,gl,null),e(bo,s_),e(bo,ul),e(ul,a_),f(o,$c,g),f(o,Ie,g),y(fa,Ie,null),e(Ie,r_),e(Ie,ga),e(ga,i_),e(ga,_l),e(_l,l_),e(ga,d_),e(Ie,c_),e(Ie,ua),e(ua,m_),e(ua,yr),e(yr,h_),e(ua,p_),e(Ie,f_),e(Ie,_a),e(_a,g_),e(_a,wa),e(wa,u_),e(_a,__),e(Ie,w_),y(vn,Ie,null),e(Ie,k_),e(Ie,Ze),y(ka,Ze,null),e(Ze,b_),e(Ze,vo),e(vo,v_),e(vo,$r),e($r,T_),e(vo,y_),e(vo,wl),e(wl,$_),e(vo,L_),e(Ze,x_),y(Tn,Ze,null),e(Ze,F_),y(yn,Ze,null),e(Ze,M_),y($n,Ze,null),f(o,Lc,g),f(o,To,g),e(To,Ln),e(Ln,kl),y(ba,kl,null),e(To,E_),e(To,bl),e(bl,z_),f(o,xc,g),f(o,Se,g),y(va,Se,null),e(Se,q_),e(Se,yo),e(yo,C_),e(yo,vl),e(vl,j_),e(yo,O_),e(yo,Tl),e(Tl,P_),e(yo,N_),e(Se,A_),e(Se,Ta),e(Ta,I_),e(Ta,Lr),e(Lr,S_),e(Ta,D_),e(Se,W_),e(Se,ya),e(ya,Q_),e(ya,$a),e($a,B_),e(ya,U_),e(Se,H_),y(xn,Se,null),e(Se,R_),e(Se,et),y(La,et,null),e(et,V_),e(et,$o),e($o,G_),e($o,xr),e(xr,K_),e($o,J_),e($o,yl),e(yl,X_),e($o,Y_),e(et,Z_),y(Fn,et,null),e(et,ew),y(Mn,et,null),e(et,tw),y(En,et,null),f(o,Fc,g),f(o,Lo,g),e(Lo,zn),e(zn,$l),y(xa,$l,null),e(Lo,ow),e(Lo,Ll),e(Ll,nw),f(o,Mc,g),f(o,De,g),y(Fa,De,null),e(De,sw),e(De,xl),e(xl,aw),e(De,rw),e(De,Ma),e(Ma,iw),e(Ma,Fr),e(Fr,lw),e(Ma,dw),e(De,cw),e(De,Ea),e(Ea,mw),e(Ea,za),e(za,hw),e(Ea,pw),e(De,fw),y(qn,De,null),e(De,gw),e(De,tt),y(qa,tt,null),e(tt,uw),e(tt,xo),e(xo,_w),e(xo,Mr),e(Mr,ww),e(xo,kw),e(xo,Fl),e(Fl,bw),e(xo,vw),e(tt,Tw),y(Cn,tt,null),e(tt,yw),y(jn,tt,null),e(tt,$w),y(On,tt,null),f(o,Ec,g),f(o,Fo,g),e(Fo,Pn),e(Pn,Ml),y(Ca,Ml,null),e(Fo,Lw),e(Fo,El),e(El,xw),f(o,zc,g),f(o,We,g),y(ja,We,null),e(We,Fw),e(We,zl),e(zl,Mw),e(We,Ew),e(We,Oa),e(Oa,zw),e(Oa,Er),e(Er,qw),e(Oa,Cw),e(We,jw),e(We,Pa),e(Pa,Ow),e(Pa,Na),e(Na,Pw),e(Pa,Nw),e(We,Aw),y(Nn,We,null),e(We,Iw),e(We,ot),y(Aa,ot,null),e(ot,Sw),e(ot,Mo),e(Mo,Dw),e(Mo,zr),e(zr,Ww),e(Mo,Qw),e(Mo,ql),e(ql,Bw),e(Mo,Uw),e(ot,Hw),y(An,ot,null),e(ot,Rw),y(In,ot,null),e(ot,Vw),y(Sn,ot,null),f(o,qc,g),f(o,Eo,g),e(Eo,Dn),e(Dn,Cl),y(Ia,Cl,null),e(Eo,Gw),e(Eo,jl),e(jl,Kw),f(o,Cc,g),f(o,Qe,g),y(Sa,Qe,null),e(Qe,Jw),e(Qe,Ol),e(Ol,Xw),e(Qe,Yw),e(Qe,Da),e(Da,Zw),e(Da,qr),e(qr,ek),e(Da,tk),e(Qe,ok),e(Qe,Wa),e(Wa,nk),e(Wa,Qa),e(Qa,sk),e(Wa,ak),e(Qe,rk),y(Wn,Qe,null),e(Qe,ik),e(Qe,lt),y(Ba,lt,null),e(lt,lk),e(lt,zo),e(zo,dk),e(zo,Cr),e(Cr,ck),e(zo,mk),e(zo,Pl),e(Pl,hk),e(zo,pk),e(lt,fk),y(Qn,lt,null),e(lt,gk),y(Bn,lt,null),jc=!0},p(o,[g]){const Ua={};g&2&&(Ua.$$scope={dirty:g,ctx:o}),Wo.$set(Ua);const Nl={};g&2&&(Nl.$$scope={dirty:g,ctx:o}),Go.$set(Nl);const Al={};g&2&&(Al.$$scope={dirty:g,ctx:o}),Ko.$set(Al);const Il={};g&2&&(Il.$$scope={dirty:g,ctx:o}),Xo.$set(Il);const Ha={};g&2&&(Ha.$$scope={dirty:g,ctx:o}),Yo.$set(Ha);const Sl={};g&2&&(Sl.$$scope={dirty:g,ctx:o}),Zo.$set(Sl);const Dl={};g&2&&(Dl.$$scope={dirty:g,ctx:o}),tn.$set(Dl);const Wl={};g&2&&(Wl.$$scope={dirty:g,ctx:o}),on.$set(Wl);const Ra={};g&2&&(Ra.$$scope={dirty:g,ctx:o}),nn.$set(Ra);const Ql={};g&2&&(Ql.$$scope={dirty:g,ctx:o}),sn.$set(Ql);const Bl={};g&2&&(Bl.$$scope={dirty:g,ctx:o}),an.$set(Bl);const Ul={};g&2&&(Ul.$$scope={dirty:g,ctx:o}),ln.$set(Ul);const Hl={};g&2&&(Hl.$$scope={dirty:g,ctx:o}),dn.$set(Hl);const Rl={};g&2&&(Rl.$$scope={dirty:g,ctx:o}),mn.$set(Rl);const Vl={};g&2&&(Vl.$$scope={dirty:g,ctx:o}),hn.$set(Vl);const _t={};g&2&&(_t.$$scope={dirty:g,ctx:o}),pn.$set(_t);const Gl={};g&2&&(Gl.$$scope={dirty:g,ctx:o}),gn.$set(Gl);const Kl={};g&2&&(Kl.$$scope={dirty:g,ctx:o}),un.$set(Kl);const Jl={};g&2&&(Jl.$$scope={dirty:g,ctx:o}),wn.$set(Jl);const qo={};g&2&&(qo.$$scope={dirty:g,ctx:o}),kn.$set(qo);const Xl={};g&2&&(Xl.$$scope={dirty:g,ctx:o}),vn.$set(Xl);const Yl={};g&2&&(Yl.$$scope={dirty:g,ctx:o}),Tn.$set(Yl);const Va={};g&2&&(Va.$$scope={dirty:g,ctx:o}),yn.$set(Va);const Zl={};g&2&&(Zl.$$scope={dirty:g,ctx:o}),$n.$set(Zl);const ed={};g&2&&(ed.$$scope={dirty:g,ctx:o}),xn.$set(ed);const td={};g&2&&(td.$$scope={dirty:g,ctx:o}),Fn.$set(td);const qe={};g&2&&(qe.$$scope={dirty:g,ctx:o}),Mn.$set(qe);const od={};g&2&&(od.$$scope={dirty:g,ctx:o}),En.$set(od);const nd={};g&2&&(nd.$$scope={dirty:g,ctx:o}),qn.$set(nd);const sd={};g&2&&(sd.$$scope={dirty:g,ctx:o}),Cn.$set(sd);const ad={};g&2&&(ad.$$scope={dirty:g,ctx:o}),jn.$set(ad);const Co={};g&2&&(Co.$$scope={dirty:g,ctx:o}),On.$set(Co);const rd={};g&2&&(rd.$$scope={dirty:g,ctx:o}),Nn.$set(rd);const jo={};g&2&&(jo.$$scope={dirty:g,ctx:o}),An.$set(jo);const id={};g&2&&(id.$$scope={dirty:g,ctx:o}),In.$set(id);const ld={};g&2&&(ld.$$scope={dirty:g,ctx:o}),Sn.$set(ld);const Ga={};g&2&&(Ga.$$scope={dirty:g,ctx:o}),Wn.$set(Ga);const dd={};g&2&&(dd.$$scope={dirty:g,ctx:o}),Qn.$set(dd);const cd={};g&2&&(cd.$$scope={dirty:g,ctx:o}),Bn.$set(cd)},i(o){jc||($(d.$$.fragment,o),$(ee.$$.fragment,o),$(oe.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Wo.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ms.$$.fragment,o),$(hs.$$.fragment,o),$(ps.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),$(ws.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(Fs.$$.fragment,o),$(Go.$$.fragment,o),$(Ko.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Os.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(Ps.$$.fragment,o),$(Ns.$$.fragment,o),$(Ds.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(Ws.$$.fragment,o),$(Qs.$$.fragment,o),$(Rs.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Vs.$$.fragment,o),$(Gs.$$.fragment,o),$(Ys.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(pn.$$.fragment,o),$(Zs.$$.fragment,o),$(ea.$$.fragment,o),$(sa.$$.fragment,o),$(gn.$$.fragment,o),$(un.$$.fragment,o),$(aa.$$.fragment,o),$(ra.$$.fragment,o),$(wn.$$.fragment,o),$(ha.$$.fragment,o),$(kn.$$.fragment,o),$(pa.$$.fragment,o),$(fa.$$.fragment,o),$(vn.$$.fragment,o),$(ka.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$($n.$$.fragment,o),$(ba.$$.fragment,o),$(va.$$.fragment,o),$(xn.$$.fragment,o),$(La.$$.fragment,o),$(Fn.$$.fragment,o),$(Mn.$$.fragment,o),$(En.$$.fragment,o),$(xa.$$.fragment,o),$(Fa.$$.fragment,o),$(qn.$$.fragment,o),$(qa.$$.fragment,o),$(Cn.$$.fragment,o),$(jn.$$.fragment,o),$(On.$$.fragment,o),$(Ca.$$.fragment,o),$(ja.$$.fragment,o),$(Nn.$$.fragment,o),$(Aa.$$.fragment,o),$(An.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(Ia.$$.fragment,o),$(Sa.$$.fragment,o),$(Wn.$$.fragment,o),$(Ba.$$.fragment,o),$(Qn.$$.fragment,o),$(Bn.$$.fragment,o),jc=!0)},o(o){L(d.$$.fragment,o),L(ee.$$.fragment,o),L(oe.$$.fragment,o),L(Kn.$$.fragment,o),L(Jn.$$.fragment,o),L(Xn.$$.fragment,o),L(Yn.$$.fragment,o),L(Wo.$$.fragment,o),L(es.$$.fragment,o),L(ts.$$.fragment,o),L(os.$$.fragment,o),L(ns.$$.fragment,o),L(as.$$.fragment,o),L(rs.$$.fragment,o),L(is.$$.fragment,o),L(ls.$$.fragment,o),L(ds.$$.fragment,o),L(cs.$$.fragment,o),L(ms.$$.fragment,o),L(hs.$$.fragment,o),L(ps.$$.fragment,o),L(fs.$$.fragment,o),L(gs.$$.fragment,o),L(us.$$.fragment,o),L(_s.$$.fragment,o),L(ws.$$.fragment,o),L(ks.$$.fragment,o),L(bs.$$.fragment,o),L(vs.$$.fragment,o),L(Fs.$$.fragment,o),L(Go.$$.fragment,o),L(Ko.$$.fragment,o),L(Ms.$$.fragment,o),L(Es.$$.fragment,o),L(Os.$$.fragment,o),L(Xo.$$.fragment,o),L(Yo.$$.fragment,o),L(Zo.$$.fragment,o),L(Ps.$$.fragment,o),L(Ns.$$.fragment,o),L(Ds.$$.fragment,o),L(tn.$$.fragment,o),L(on.$$.fragment,o),L(nn.$$.fragment,o),L(sn.$$.fragment,o),L(an.$$.fragment,o),L(Ws.$$.fragment,o),L(Qs.$$.fragment,o),L(Rs.$$.fragment,o),L(ln.$$.fragment,o),L(dn.$$.fragment,o),L(Vs.$$.fragment,o),L(Gs.$$.fragment,o),L(Ys.$$.fragment,o),L(mn.$$.fragment,o),L(hn.$$.fragment,o),L(pn.$$.fragment,o),L(Zs.$$.fragment,o),L(ea.$$.fragment,o),L(sa.$$.fragment,o),L(gn.$$.fragment,o),L(un.$$.fragment,o),L(aa.$$.fragment,o),L(ra.$$.fragment,o),L(wn.$$.fragment,o),L(ha.$$.fragment,o),L(kn.$$.fragment,o),L(pa.$$.fragment,o),L(fa.$$.fragment,o),L(vn.$$.fragment,o),L(ka.$$.fragment,o),L(Tn.$$.fragment,o),L(yn.$$.fragment,o),L($n.$$.fragment,o),L(ba.$$.fragment,o),L(va.$$.fragment,o),L(xn.$$.fragment,o),L(La.$$.fragment,o),L(Fn.$$.fragment,o),L(Mn.$$.fragment,o),L(En.$$.fragment,o),L(xa.$$.fragment,o),L(Fa.$$.fragment,o),L(qn.$$.fragment,o),L(qa.$$.fragment,o),L(Cn.$$.fragment,o),L(jn.$$.fragment,o),L(On.$$.fragment,o),L(Ca.$$.fragment,o),L(ja.$$.fragment,o),L(Nn.$$.fragment,o),L(Aa.$$.fragment,o),L(An.$$.fragment,o),L(In.$$.fragment,o),L(Sn.$$.fragment,o),L(Ia.$$.fragment,o),L(Sa.$$.fragment,o),L(Wn.$$.fragment,o),L(Ba.$$.fragment,o),L(Qn.$$.fragment,o),L(Bn.$$.fragment,o),jc=!1},d(o){t(l),o&&t(k),o&&t(h),x(d),o&&t(J),o&&t(z),x(ee),o&&t(le),o&&t(G),o&&t(j),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(C),o&&t(B),o&&t(ae),o&&t(Te),o&&t(me),o&&t(ye),o&&t(I),x(oe),o&&t(fd),o&&t($e),o&&t(yd),o&&t(wt),o&&t(xd),o&&t(kt),o&&t(Fd),o&&t(No),o&&t(Md),o&&t(Ao),o&&t(Ed),o&&t(Xe),o&&t(Id),o&&t(Io),o&&t(Sd),o&&t(jt),x(Kn),o&&t(Dd),o&&t(Ot),o&&t(Wd),x(Jn,o),o&&t(Qd),o&&t(Pt),x(Xn),o&&t(Bd),o&&t(He),x(Yn),x(Wo),o&&t(Ud),o&&t(St),x(es),o&&t(Hd),o&&t(gt),x(ts),o&&t(Rd),o&&t(Dt),x(os),o&&t(Vd),o&&t(ut),x(ns),o&&t(Gd),o&&t(Wt),x(as),o&&t(Kd),o&&t(Qt),x(rs),o&&t(Jd),o&&t(Bt),x(is),o&&t(Xd),o&&t(Ut),x(ls),o&&t(Yd),o&&t(Ht),x(ds),o&&t(Zd),o&&t(Rt),x(cs),o&&t(ec),o&&t(Vt),x(ms),o&&t(tc),o&&t(Gt),x(hs),o&&t(oc),o&&t(Kt),x(ps),o&&t(nc),o&&t(Jt),x(fs),o&&t(sc),o&&t(Xt),x(gs),o&&t(ac),o&&t(Yt),x(us),o&&t(rc),o&&t(Zt),x(_s),o&&t(ic),o&&t(eo),x(ws),o&&t(lc),o&&t(to),x(ks),o&&t(dc),o&&t(oo),x(bs),o&&t(cc),o&&t(Pe),x(vs),x(Fs),x(Go),x(Ko),o&&t(mc),o&&t(ao),x(Ms),o&&t(hc),o&&t(Re),x(Es),x(Os),x(Xo),x(Yo),x(Zo),o&&t(pc),o&&t(io),x(Ps),o&&t(fc),o&&t(Ve),x(Ns),x(Ds),x(tn),x(on),x(nn),x(sn),x(an),o&&t(gc),o&&t(co),x(Ws),o&&t(uc),o&&t(Ge),x(Qs),x(Rs),x(ln),x(dn),o&&t(_c),o&&t(ho),x(Vs),o&&t(wc),o&&t(Ke),x(Gs),x(Ys),x(mn),x(hn),x(pn),o&&t(kc),o&&t(fo),x(Zs),o&&t(bc),o&&t(Je),x(ea),x(sa),x(gn),x(un),o&&t(vc),o&&t(_o),x(aa),o&&t(Tc),o&&t(ze),x(ra),x(wn),x(ha),x(kn),o&&t(yc),o&&t(bo),x(pa),o&&t($c),o&&t(Ie),x(fa),x(vn),x(ka),x(Tn),x(yn),x($n),o&&t(Lc),o&&t(To),x(ba),o&&t(xc),o&&t(Se),x(va),x(xn),x(La),x(Fn),x(Mn),x(En),o&&t(Fc),o&&t(Lo),x(xa),o&&t(Mc),o&&t(De),x(Fa),x(qn),x(qa),x(Cn),x(jn),x(On),o&&t(Ec),o&&t(Fo),x(Ca),o&&t(zc),o&&t(We),x(ja),x(Nn),x(Aa),x(An),x(In),x(Sn),o&&t(qc),o&&t(Eo),x(Ia),o&&t(Cc),o&&t(Qe),x(Sa),x(Wn),x(Ba),x(Qn),x(Bn)}}}const sy={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function ay(M){return _T(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hy extends pT{constructor(l){super();fT(this,l,ay,ny,gT,{})}}export{hy as default,sy as metadata};
