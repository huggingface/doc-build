import{S as pT,i as fT,s as gT,e as r,k as c,w as v,t as n,Y as Oo,M as uT,c as a,d as t,m,a as i,x as T,h as s,Z as Po,b as _,G as e,g as f,y,q as $,o as L,B as x,v as _T,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ae}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerConfig, LongformerModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function kT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){l=r("p"),k=n("Examples:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Examples:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function vT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function TT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForMaskedLM

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)`}}),{c(){l=r("p"),k=n("Mask filling example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Mask filling example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function yT(M){let l,k;return l=new Le({props:{code:`TXT = (
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
[<span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;skinny&#x27;</span>, <span class="hljs-string">&#x27;thin&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;vegetarian&#x27;</span>]`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function $T(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function LT(M){let l,k,h,p,b;return p=new Le({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("jpelhaw/longformer-base-plagiarism-detection")
model = LongformerForSequenceClassification.from_pretrained("jpelhaw/longformer-base-plagiarism-detection")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of single-label classification:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example of single-label classification:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function xT(M){let l,k;return l=new Le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = LongformerForSequenceClassification.from_pretrained("jpelhaw/longformer-base-plagiarism-detection", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.44</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function FT(M){let l,k,h,p,b;return p=new Le({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("jpelhaw/longformer-base-plagiarism-detection")
model = LongformerForSequenceClassification.from_pretrained("jpelhaw/longformer-base-plagiarism-detection", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of multi-label classification:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example of multi-label classification:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function MT(M){let l,k;return l=new Le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LongformerForSequenceClassification.from_pretrained(
    "jpelhaw/longformer-base-plagiarism-detection", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function ET(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function qT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
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
[<span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function jT(M){let l,k;return l=new Le({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.63</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function OT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
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
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){l=r("p"),k=n("Examples:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Examples:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function NT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function AT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&t(l)}}}function IT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function ST(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function WT(M){let l,k;return l=new Le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.44</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function QT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function BT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function HT(M){let l,k;return l=new Le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.96</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function RT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function VT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function KT(M){let l,k;return l=new Le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function JT(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function XT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function ZT(M){let l,k;return l=new Le({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function ey(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),Y.forEach(t),J=m(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=m(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=m(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=m(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,pe),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(q,ce),e(q,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(h),w&&t(p),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function ty(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(t),b=s(u,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(p,d)}}}function ny(M){let l,k,h,p,b,d,u,E,he,J,z,Z,S,ee,pe,D,fe,le,G,P,te,X,q,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we,w,F,Y,Te,me,A,be,xe,Fe,O,V,Me,ye,I,ke,ve,oe,Ee,ti,Qm,fd,$e,Bm,gd,sT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',ud,_d,rT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',wd,kd,aT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',bd,oi,Um,Hm,ni,Rm,Vm,si,Gm,Km,vd,iT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Td,ri,Jm,Xm,yd,wt,Ym,$d,lT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ld,ai,Zm,eh,xd,kt,th,ii,oh,nh,li,sh,rh,Fd,No,di,ah,ih,ci,lh,Md,Ao,dh,Kr,ch,mh,Ed,Xe,hh,zd,dT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',qd,Cd,cT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',jd,Od,mT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Pd,Nd,hT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ad,Id,Io,ph,Gn,fh,gh,Sd,jt,So,mi,Kn,uh,hi,_h,Dd,Ot,Jr,wh,kh,Xr,bh,vh,Wd,Jn,Qd,Pt,Do,pi,Xn,Th,fi,yh,Bd,He,Yn,$h,Nt,Lh,Yr,xh,Fh,Zr,Mh,Eh,zh,At,qh,ea,Ch,jh,Zn,Oh,Ph,Nh,It,Ah,ta,Ih,Sh,oa,Dh,Wh,Qh,Wo,Ud,St,Qo,gi,es,Bh,ui,Uh,Hd,gt,ts,Hh,_i,Rh,Vh,Bo,na,Gh,Kh,sa,Jh,Xh,Rd,Dt,Uo,wi,os,Yh,ki,Zh,Vd,ut,ns,ep,ss,tp,bi,op,np,sp,Ho,ra,rp,ap,aa,ip,lp,Gd,Wt,Ro,vi,rs,dp,Ti,cp,Kd,Qt,as,mp,yi,hp,Jd,Bt,is,pp,$i,fp,Xd,Ut,ls,gp,Li,up,Yd,Ht,ds,_p,xi,wp,Zd,Rt,cs,kp,Fi,bp,ec,Vt,ms,vp,Mi,Tp,tc,Gt,hs,yp,Ei,$p,oc,Kt,ps,Lp,zi,xp,nc,Jt,fs,Fp,qi,Mp,sc,Xt,gs,Ep,Ci,zp,rc,Yt,us,qp,ji,Cp,ac,Zt,_s,jp,Oi,Op,ic,eo,ws,Pp,Pi,Np,lc,to,ks,Ap,Ni,Ip,dc,oo,Vo,Ai,bs,Sp,Ii,Dp,cc,Pe,vs,Wp,Si,Qp,Bp,Ts,Up,ia,Hp,Rp,Vp,ys,Gp,$s,Kp,Jp,Xp,no,Yp,la,Zp,ef,Ls,tf,of,nf,xs,sf,Di,rf,af,lf,rt,Fs,df,so,cf,da,mf,hf,Wi,pf,ff,gf,Go,uf,Ko,mc,ro,Jo,Qi,Ms,_f,Bi,wf,hc,Re,Es,kf,zs,bf,Ui,vf,Tf,yf,qs,$f,ca,Lf,xf,Ff,Cs,Mf,js,Ef,zf,qf,Be,Os,Cf,ao,jf,ma,Of,Pf,Hi,Nf,Af,If,Xo,Sf,Yo,Df,Ri,Wf,Qf,Zo,pc,io,en,Vi,Ps,Bf,Gi,Uf,fc,Ve,Ns,Hf,Ki,Rf,Vf,As,Gf,ha,Kf,Jf,Xf,Is,Yf,Ss,Zf,eg,tg,Ne,Ds,og,lo,ng,pa,sg,rg,Ji,ag,ig,lg,tn,dg,on,cg,nn,mg,sn,hg,rn,gc,co,an,Xi,Ws,pg,Yi,fg,uc,Ge,Qs,gg,Zi,ug,_g,Bs,wg,fa,kg,bg,vg,Us,Tg,Hs,yg,$g,Lg,at,Rs,xg,mo,Fg,ga,Mg,Eg,el,zg,qg,Cg,ln,jg,dn,_c,ho,cn,tl,Vs,Og,ol,Pg,wc,Ke,Gs,Ng,nl,Ag,Ig,Ks,Sg,ua,Dg,Wg,Qg,Js,Bg,Xs,Ug,Hg,Rg,Ye,Ys,Vg,po,Gg,_a,Kg,Jg,sl,Xg,Yg,Zg,mn,eu,hn,tu,pn,kc,fo,fn,rl,Zs,ou,al,nu,bc,Je,er,su,go,ru,il,au,iu,ll,lu,du,cu,tr,mu,wa,hu,pu,fu,or,gu,nr,uu,_u,wu,it,sr,ku,uo,bu,ka,vu,Tu,dl,yu,$u,Lu,gn,xu,un,vc,_o,_n,cl,rr,Fu,ml,Mu,Tc,ze,ar,Eu,hl,zu,qu,ir,Cu,ba,ju,Ou,Pu,lr,Nu,dr,Au,Iu,Su,wn,Du,wo,Wu,va,Qu,Bu,cr,Uu,Hu,Ru,mr,Vu,pl,Gu,Ku,Ju,bt,hr,Xu,ko,Yu,Ta,Zu,e_,fl,t_,o_,n_,kn,yc,bo,bn,gl,pr,s_,ul,r_,$c,Ie,fr,a_,gr,i_,_l,l_,d_,c_,ur,m_,ya,h_,p_,f_,_r,g_,wr,u_,__,w_,vn,k_,Ze,kr,b_,vo,v_,$a,T_,y_,wl,$_,L_,x_,Tn,F_,yn,M_,$n,Lc,To,Ln,kl,br,E_,bl,z_,xc,Se,vr,q_,yo,C_,vl,j_,O_,Tl,P_,N_,A_,Tr,I_,La,S_,D_,W_,yr,Q_,$r,B_,U_,H_,xn,R_,et,Lr,V_,$o,G_,xa,K_,J_,yl,X_,Y_,Z_,Fn,ew,Mn,tw,En,Fc,Lo,zn,$l,xr,ow,Ll,nw,Mc,De,Fr,sw,xl,rw,aw,Mr,iw,Fa,lw,dw,cw,Er,mw,zr,hw,pw,fw,qn,gw,tt,qr,uw,xo,_w,Ma,ww,kw,Fl,bw,vw,Tw,Cn,yw,jn,$w,On,Ec,Fo,Pn,Ml,Cr,Lw,El,xw,zc,We,jr,Fw,zl,Mw,Ew,Or,zw,Ea,qw,Cw,jw,Pr,Ow,Nr,Pw,Nw,Aw,Nn,Iw,ot,Ar,Sw,Mo,Dw,za,Ww,Qw,ql,Bw,Uw,Hw,An,Rw,In,Vw,Sn,qc,Eo,Dn,Cl,Ir,Gw,jl,Kw,Cc,Qe,Sr,Jw,Ol,Xw,Yw,Dr,Zw,qa,ek,tk,ok,Wr,nk,Qr,sk,rk,ak,Wn,ik,lt,Br,lk,zo,dk,Ca,ck,mk,Pl,hk,pk,fk,Qn,gk,Bn,jc;return d=new Oe({}),ee=new Oe({}),oe=new Oe({}),Kn=new Oe({}),Jn=new Le({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),Xn=new Oe({}),Yn=new Q({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/configuration_longformer.py#L39"}}),Wo=new Ce({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[wT]},$$scope:{ctx:M}}}),es=new Oe({}),ts=new Q({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/tokenization_longformer.py#L67"}}),os=new Oe({}),ns=new Q({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/tokenization_longformer_fast.py#L85"}}),rs=new Oe({}),as=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L57"}}),is=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L100"}}),ls=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L148"}}),ds=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L194"}}),cs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L243"}}),ms=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L289"}}),hs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L337"}}),ps=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),fs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),gs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),us=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),_s=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),ws=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),ks=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),bs=new Oe({}),vs=new Q({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L1498"}}),Fs=new Q({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L1609",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new Ae({props:{$$slots:{default:[kT]},$$scope:{ctx:M}}}),Ko=new Ce({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[bT]},$$scope:{ctx:M}}}),Ms=new Oe({}),Es=new Q({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L1733"}}),Os=new Q({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L1752",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new Ae({props:{$$slots:{default:[vT]},$$scope:{ctx:M}}}),Yo=new Ce({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[TT]},$$scope:{ctx:M}}}),Zo=new Ce({props:{anchor:"transformers.LongformerForMaskedLM.forward.example-2",$$slots:{default:[yT]},$$scope:{ctx:M}}}),Ps=new Oe({}),Ns=new Q({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L1846"}}),Ds=new Q({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L1861",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new Ae({props:{$$slots:{default:[$T]},$$scope:{ctx:M}}}),on=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[LT]},$$scope:{ctx:M}}}),nn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[xT]},$$scope:{ctx:M}}}),sn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[FT]},$$scope:{ctx:M}}}),rn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[MT]},$$scope:{ctx:M}}}),Ws=new Oe({}),Qs=new Q({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L2205"}}),Rs=new Q({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L2216",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new Ae({props:{$$slots:{default:[ET]},$$scope:{ctx:M}}}),dn=new Ce({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[zT]},$$scope:{ctx:M}}}),Vs=new Oe({}),Gs=new Q({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L2115"}}),Ys=new Q({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L2130",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mn=new Ae({props:{$$slots:{default:[qT]},$$scope:{ctx:M}}}),hn=new Ce({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[CT]},$$scope:{ctx:M}}}),pn=new Ce({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[jT]},$$scope:{ctx:M}}}),Zs=new Oe({}),er=new Q({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L1975"}}),sr=new Q({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_longformer.py#L1989",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new Ae({props:{$$slots:{default:[OT]},$$scope:{ctx:M}}}),un=new Ce({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[PT]},$$scope:{ctx:M}}}),rr=new Oe({}),ar=new Q({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2011"}}),wn=new Ae({props:{$$slots:{default:[NT]},$$scope:{ctx:M}}}),hr=new Q({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2033"}}),kn=new Ae({props:{$$slots:{default:[AT]},$$scope:{ctx:M}}}),pr=new Oe({}),fr=new Q({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2084"}}),vn=new Ae({props:{$$slots:{default:[IT]},$$scope:{ctx:M}}}),kr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2101",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ae({props:{$$slots:{default:[ST]},$$scope:{ctx:M}}}),yn=new Ce({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[DT]},$$scope:{ctx:M}}}),$n=new Ce({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[WT]},$$scope:{ctx:M}}}),br=new Oe({}),vr=new Q({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2181"}}),xn=new Ae({props:{$$slots:{default:[QT]},$$scope:{ctx:M}}}),Lr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2196",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fn=new Ae({props:{$$slots:{default:[BT]},$$scope:{ctx:M}}}),Mn=new Ce({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[UT]},$$scope:{ctx:M}}}),En=new Ce({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[HT]},$$scope:{ctx:M}}}),xr=new Oe({}),Fr=new Q({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2335"}}),qn=new Ae({props:{$$slots:{default:[RT]},$$scope:{ctx:M}}}),qr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2347",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Cn=new Ae({props:{$$slots:{default:[VT]},$$scope:{ctx:M}}}),jn=new Ce({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[GT]},$$scope:{ctx:M}}}),On=new Ce({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[KT]},$$scope:{ctx:M}}}),Cr=new Oe({}),jr=new Q({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2572"}}),Nn=new Ae({props:{$$slots:{default:[JT]},$$scope:{ctx:M}}}),Ar=new Q({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2587",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),An=new Ae({props:{$$slots:{default:[XT]},$$scope:{ctx:M}}}),In=new Ce({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[YT]},$$scope:{ctx:M}}}),Sn=new Ce({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[ZT]},$$scope:{ctx:M}}}),Ir=new Oe({}),Sr=new Q({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2436"}}),Wn=new Ae({props:{$$slots:{default:[ey]},$$scope:{ctx:M}}}),Br=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/longformer/modeling_tf_longformer.py#L2456",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new Ae({props:{$$slots:{default:[ty]},$$scope:{ctx:M}}}),Bn=new Ce({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[oy]},$$scope:{ctx:M}}}),{c(){l=r("meta"),k=c(),h=r("h1"),p=r("a"),b=r("span"),v(d.$$.fragment),u=c(),E=r("span"),he=n("Longformer"),J=c(),z=r("h2"),Z=r("a"),S=r("span"),v(ee.$$.fragment),pe=c(),D=r("span"),fe=n("Overview"),le=c(),G=r("p"),P=n("The Longformer model was presented in "),te=r("a"),X=n("Longformer: The Long-Document Transformer"),q=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),j=c(),ne=r("p"),U=n("The abstract from the paper is the following:"),de=c(),se=r("p"),W=r("em"),ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ce=c(),C=r("p"),ue=n("Tips:"),B=c(),re=r("ul"),K=r("li"),H=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=r("code"),_e=n("token_type_ids"),N=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=r("code"),R=n("tokenizer.sep_token"),we=n(` (or
`),w=r("code"),F=n("</s>"),Y=n(")."),Te=c(),me=r("p"),A=n("This model was contributed by "),be=r("a"),xe=n("beltagy"),Fe=n(". The Authors\u2019 code can be found "),O=r("a"),V=n("here"),Me=n("."),ye=c(),I=r("h2"),ke=r("a"),ve=r("span"),v(oe.$$.fragment),Ee=c(),ti=r("span"),Qm=n("Longformer Self Attention"),fd=c(),$e=r("p"),Bm=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),gd=new Oo,ud=n(` previous tokens and
`),_d=new Oo,wd=n(" succeding tokens with "),kd=new Oo,bd=n(` being the window length as defined in
`),oi=r("code"),Um=n("config.attention_window"),Hm=n(". Note that "),ni=r("code"),Rm=n("config.attention_window"),Vm=n(" can be of type "),si=r("code"),Gm=n("List"),Km=n(` to define a
different `),vd=new Oo,Td=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),ri=r("code"),Jm=n("BertSelfAttention"),Xm=n("."),yd=c(),wt=r("p"),Ym=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),$d=new Oo,Ld=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ai=r("em"),Zm=n("symmetric"),eh=n("."),xd=c(),kt=r("p"),th=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ii=r("code"),oh=n("global_attention_mask"),nh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),li=r("code"),sh=n("global_attention_mask"),rh=n(":"),Fd=c(),No=r("ul"),di=r("li"),ah=n("0: the token attends \u201Clocally\u201D,"),ih=c(),ci=r("li"),lh=n("1: the token attends \u201Cglobally\u201D."),Md=c(),Ao=r("p"),dh=n("For more information please also refer to "),Kr=r("a"),ch=n("forward()"),mh=n(" method."),Ed=c(),Xe=r("p"),hh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),zd=new Oo,qd=n(` to
`),Cd=new Oo,jd=n(", with "),Od=new Oo,Pd=n(" being the sequence length and "),Nd=new Oo,Ad=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Id=c(),Io=r("p"),ph=n("For more information, please refer to the official "),Gn=r("a"),fh=n("paper"),gh=n("."),Sd=c(),jt=r("h2"),So=r("a"),mi=r("span"),v(Kn.$$.fragment),uh=c(),hi=r("span"),_h=n("Training"),Dd=c(),Ot=r("p"),Jr=r("a"),wh=n("LongformerForMaskedLM"),kh=n(" is trained the exact same way "),Xr=r("a"),bh=n("RobertaForMaskedLM"),vh=n(` is
trained and should be used as follows:`),Wd=c(),v(Jn.$$.fragment),Qd=c(),Pt=r("h2"),Do=r("a"),pi=r("span"),v(Xn.$$.fragment),Th=c(),fi=r("span"),yh=n("LongformerConfig"),Bd=c(),He=r("div"),v(Yn.$$.fragment),$h=c(),Nt=r("p"),Lh=n("This is the configuration class to store the configuration of a "),Yr=r("a"),xh=n("LongformerModel"),Fh=n(" or a "),Zr=r("a"),Mh=n("TFLongformerModel"),Eh=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),zh=c(),At=r("p"),qh=n("This is the configuration class to store the configuration of a "),ea=r("a"),Ch=n("LongformerModel"),jh=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Zn=r("a"),Oh=n("allenai/longformer-base-4096"),Ph=n(` architecture with a sequence
length 4,096.`),Nh=c(),It=r("p"),Ah=n("The "),ta=r("a"),Ih=n("LongformerConfig"),Sh=n(" class directly inherits "),oa=r("a"),Dh=n("RobertaConfig"),Wh=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Qh=c(),v(Wo.$$.fragment),Ud=c(),St=r("h2"),Qo=r("a"),gi=r("span"),v(es.$$.fragment),Bh=c(),ui=r("span"),Uh=n("LongformerTokenizer"),Hd=c(),gt=r("div"),v(ts.$$.fragment),Hh=c(),_i=r("p"),Rh=n("Construct a Longformer tokenizer."),Vh=c(),Bo=r("p"),na=r("a"),Gh=n("LongformerTokenizer"),Kh=n(" is identical to "),sa=r("a"),Jh=n("RobertaTokenizer"),Xh=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Rd=c(),Dt=r("h2"),Uo=r("a"),wi=r("span"),v(os.$$.fragment),Yh=c(),ki=r("span"),Zh=n("LongformerTokenizerFast"),Vd=c(),ut=r("div"),v(ns.$$.fragment),ep=c(),ss=r("p"),tp=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),bi=r("em"),op=n("tokenizers"),np=n(" library)."),sp=c(),Ho=r("p"),ra=r("a"),rp=n("LongformerTokenizerFast"),ap=n(" is identical to "),aa=r("a"),ip=n("RobertaTokenizerFast"),lp=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Gd=c(),Wt=r("h2"),Ro=r("a"),vi=r("span"),v(rs.$$.fragment),dp=c(),Ti=r("span"),cp=n("Longformer specific outputs"),Kd=c(),Qt=r("div"),v(as.$$.fragment),mp=c(),yi=r("p"),hp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Jd=c(),Bt=r("div"),v(is.$$.fragment),pp=c(),$i=r("p"),fp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Xd=c(),Ut=r("div"),v(ls.$$.fragment),gp=c(),Li=r("p"),up=n("Base class for masked language models outputs."),Yd=c(),Ht=r("div"),v(ds.$$.fragment),_p=c(),xi=r("p"),wp=n("Base class for outputs of question answering Longformer models."),Zd=c(),Rt=r("div"),v(cs.$$.fragment),kp=c(),Fi=r("p"),bp=n("Base class for outputs of sentence classification models."),ec=c(),Vt=r("div"),v(ms.$$.fragment),vp=c(),Mi=r("p"),Tp=n("Base class for outputs of multiple choice Longformer models."),tc=c(),Gt=r("div"),v(hs.$$.fragment),yp=c(),Ei=r("p"),$p=n("Base class for outputs of token classification models."),oc=c(),Kt=r("div"),v(ps.$$.fragment),Lp=c(),zi=r("p"),xp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),nc=c(),Jt=r("div"),v(fs.$$.fragment),Fp=c(),qi=r("p"),Mp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),sc=c(),Xt=r("div"),v(gs.$$.fragment),Ep=c(),Ci=r("p"),zp=n("Base class for masked language models outputs."),rc=c(),Yt=r("div"),v(us.$$.fragment),qp=c(),ji=r("p"),Cp=n("Base class for outputs of question answering Longformer models."),ac=c(),Zt=r("div"),v(_s.$$.fragment),jp=c(),Oi=r("p"),Op=n("Base class for outputs of sentence classification models."),ic=c(),eo=r("div"),v(ws.$$.fragment),Pp=c(),Pi=r("p"),Np=n("Base class for outputs of multiple choice models."),lc=c(),to=r("div"),v(ks.$$.fragment),Ap=c(),Ni=r("p"),Ip=n("Base class for outputs of token classification models."),dc=c(),oo=r("h2"),Vo=r("a"),Ai=r("span"),v(bs.$$.fragment),Sp=c(),Ii=r("span"),Dp=n("LongformerModel"),cc=c(),Pe=r("div"),v(vs.$$.fragment),Wp=c(),Si=r("p"),Qp=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Bp=c(),Ts=r("p"),Up=n("This model inherits from "),ia=r("a"),Hp=n("PreTrainedModel"),Rp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=c(),ys=r("p"),Gp=n("This model is also a PyTorch "),$s=r("a"),Kp=n("torch.nn.Module"),Jp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xp=c(),no=r("p"),Yp=n("This class copied code from "),la=r("a"),Zp=n("RobertaModel"),ef=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Ls=r("a"),tf=n(`Longformer:
the Long-Document Transformer`),of=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),nf=c(),xs=r("p"),sf=n("The self-attention module "),Di=r("code"),rf=n("LongformerSelfAttention"),af=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),lf=c(),rt=r("div"),v(Fs.$$.fragment),df=c(),so=r("p"),cf=n("The "),da=r("a"),mf=n("LongformerModel"),hf=n(" forward method, overrides the "),Wi=r("code"),pf=n("__call__"),ff=n(" special method."),gf=c(),v(Go.$$.fragment),uf=c(),v(Ko.$$.fragment),mc=c(),ro=r("h2"),Jo=r("a"),Qi=r("span"),v(Ms.$$.fragment),_f=c(),Bi=r("span"),wf=n("LongformerForMaskedLM"),hc=c(),Re=r("div"),v(Es.$$.fragment),kf=c(),zs=r("p"),bf=n("Longformer Model with a "),Ui=r("code"),vf=n("language modeling"),Tf=n(" head on top."),yf=c(),qs=r("p"),$f=n("This model inherits from "),ca=r("a"),Lf=n("PreTrainedModel"),xf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff=c(),Cs=r("p"),Mf=n("This model is also a PyTorch "),js=r("a"),Ef=n("torch.nn.Module"),zf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf=c(),Be=r("div"),v(Os.$$.fragment),Cf=c(),ao=r("p"),jf=n("The "),ma=r("a"),Of=n("LongformerForMaskedLM"),Pf=n(" forward method, overrides the "),Hi=r("code"),Nf=n("__call__"),Af=n(" special method."),If=c(),v(Xo.$$.fragment),Sf=c(),v(Yo.$$.fragment),Df=c(),Ri=r("p"),Wf=n("Let\u2019s try a very long input."),Qf=c(),v(Zo.$$.fragment),pc=c(),io=r("h2"),en=r("a"),Vi=r("span"),v(Ps.$$.fragment),Bf=c(),Gi=r("span"),Uf=n("LongformerForSequenceClassification"),fc=c(),Ve=r("div"),v(Ns.$$.fragment),Hf=c(),Ki=r("p"),Rf=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Vf=c(),As=r("p"),Gf=n("This model inherits from "),ha=r("a"),Kf=n("PreTrainedModel"),Jf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=c(),Is=r("p"),Yf=n("This model is also a PyTorch "),Ss=r("a"),Zf=n("torch.nn.Module"),eg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tg=c(),Ne=r("div"),v(Ds.$$.fragment),og=c(),lo=r("p"),ng=n("The "),pa=r("a"),sg=n("LongformerForSequenceClassification"),rg=n(" forward method, overrides the "),Ji=r("code"),ag=n("__call__"),ig=n(" special method."),lg=c(),v(tn.$$.fragment),dg=c(),v(on.$$.fragment),cg=c(),v(nn.$$.fragment),mg=c(),v(sn.$$.fragment),hg=c(),v(rn.$$.fragment),gc=c(),co=r("h2"),an=r("a"),Xi=r("span"),v(Ws.$$.fragment),pg=c(),Yi=r("span"),fg=n("LongformerForMultipleChoice"),uc=c(),Ge=r("div"),v(Qs.$$.fragment),gg=c(),Zi=r("p"),ug=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_g=c(),Bs=r("p"),wg=n("This model inherits from "),fa=r("a"),kg=n("PreTrainedModel"),bg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vg=c(),Us=r("p"),Tg=n("This model is also a PyTorch "),Hs=r("a"),yg=n("torch.nn.Module"),$g=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lg=c(),at=r("div"),v(Rs.$$.fragment),xg=c(),mo=r("p"),Fg=n("The "),ga=r("a"),Mg=n("LongformerForMultipleChoice"),Eg=n(" forward method, overrides the "),el=r("code"),zg=n("__call__"),qg=n(" special method."),Cg=c(),v(ln.$$.fragment),jg=c(),v(dn.$$.fragment),_c=c(),ho=r("h2"),cn=r("a"),tl=r("span"),v(Vs.$$.fragment),Og=c(),ol=r("span"),Pg=n("LongformerForTokenClassification"),wc=c(),Ke=r("div"),v(Gs.$$.fragment),Ng=c(),nl=r("p"),Ag=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ig=c(),Ks=r("p"),Sg=n("This model inherits from "),ua=r("a"),Dg=n("PreTrainedModel"),Wg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qg=c(),Js=r("p"),Bg=n("This model is also a PyTorch "),Xs=r("a"),Ug=n("torch.nn.Module"),Hg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rg=c(),Ye=r("div"),v(Ys.$$.fragment),Vg=c(),po=r("p"),Gg=n("The "),_a=r("a"),Kg=n("LongformerForTokenClassification"),Jg=n(" forward method, overrides the "),sl=r("code"),Xg=n("__call__"),Yg=n(" special method."),Zg=c(),v(mn.$$.fragment),eu=c(),v(hn.$$.fragment),tu=c(),v(pn.$$.fragment),kc=c(),fo=r("h2"),fn=r("a"),rl=r("span"),v(Zs.$$.fragment),ou=c(),al=r("span"),nu=n("LongformerForQuestionAnswering"),bc=c(),Je=r("div"),v(er.$$.fragment),su=c(),go=r("p"),ru=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),il=r("code"),au=n("span start logits"),iu=n(" and "),ll=r("code"),lu=n("span end logits"),du=n(")."),cu=c(),tr=r("p"),mu=n("This model inherits from "),wa=r("a"),hu=n("PreTrainedModel"),pu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu=c(),or=r("p"),gu=n("This model is also a PyTorch "),nr=r("a"),uu=n("torch.nn.Module"),_u=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu=c(),it=r("div"),v(sr.$$.fragment),ku=c(),uo=r("p"),bu=n("The "),ka=r("a"),vu=n("LongformerForQuestionAnswering"),Tu=n(" forward method, overrides the "),dl=r("code"),yu=n("__call__"),$u=n(" special method."),Lu=c(),v(gn.$$.fragment),xu=c(),v(un.$$.fragment),vc=c(),_o=r("h2"),_n=r("a"),cl=r("span"),v(rr.$$.fragment),Fu=c(),ml=r("span"),Mu=n("TFLongformerModel"),Tc=c(),ze=r("div"),v(ar.$$.fragment),Eu=c(),hl=r("p"),zu=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),qu=c(),ir=r("p"),Cu=n("This model inherits from "),ba=r("a"),ju=n("TFPreTrainedModel"),Ou=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu=c(),lr=r("p"),Nu=n("This model is also a "),dr=r("a"),Au=n("tf.keras.Model"),Iu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su=c(),v(wn.$$.fragment),Du=c(),wo=r("p"),Wu=n("This class copies code from "),va=r("a"),Qu=n("TFRobertaModel"),Bu=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),cr=r("a"),Uu=n("Longformer: the Long-Document Transformer"),Hu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ru=c(),mr=r("p"),Vu=n("The self-attention module "),pl=r("code"),Gu=n("TFLongformerSelfAttention"),Ku=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Ju=c(),bt=r("div"),v(hr.$$.fragment),Xu=c(),ko=r("p"),Yu=n("The "),Ta=r("a"),Zu=n("TFLongformerModel"),e_=n(" forward method, overrides the "),fl=r("code"),t_=n("__call__"),o_=n(" special method."),n_=c(),v(kn.$$.fragment),yc=c(),bo=r("h2"),bn=r("a"),gl=r("span"),v(pr.$$.fragment),s_=c(),ul=r("span"),r_=n("TFLongformerForMaskedLM"),$c=c(),Ie=r("div"),v(fr.$$.fragment),a_=c(),gr=r("p"),i_=n("Longformer Model with a "),_l=r("code"),l_=n("language modeling"),d_=n(" head on top."),c_=c(),ur=r("p"),m_=n("This model inherits from "),ya=r("a"),h_=n("TFPreTrainedModel"),p_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),f_=c(),_r=r("p"),g_=n("This model is also a "),wr=r("a"),u_=n("tf.keras.Model"),__=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w_=c(),v(vn.$$.fragment),k_=c(),Ze=r("div"),v(kr.$$.fragment),b_=c(),vo=r("p"),v_=n("The "),$a=r("a"),T_=n("TFLongformerForMaskedLM"),y_=n(" forward method, overrides the "),wl=r("code"),$_=n("__call__"),L_=n(" special method."),x_=c(),v(Tn.$$.fragment),F_=c(),v(yn.$$.fragment),M_=c(),v($n.$$.fragment),Lc=c(),To=r("h2"),Ln=r("a"),kl=r("span"),v(br.$$.fragment),E_=c(),bl=r("span"),z_=n("TFLongformerForQuestionAnswering"),xc=c(),Se=r("div"),v(vr.$$.fragment),q_=c(),yo=r("p"),C_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),vl=r("code"),j_=n("span start logits"),O_=n(" and "),Tl=r("code"),P_=n("span end logits"),N_=n(")."),A_=c(),Tr=r("p"),I_=n("This model inherits from "),La=r("a"),S_=n("TFPreTrainedModel"),D_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=c(),yr=r("p"),Q_=n("This model is also a "),$r=r("a"),B_=n("tf.keras.Model"),U_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_=c(),v(xn.$$.fragment),R_=c(),et=r("div"),v(Lr.$$.fragment),V_=c(),$o=r("p"),G_=n("The "),xa=r("a"),K_=n("TFLongformerForQuestionAnswering"),J_=n(" forward method, overrides the "),yl=r("code"),X_=n("__call__"),Y_=n(" special method."),Z_=c(),v(Fn.$$.fragment),ew=c(),v(Mn.$$.fragment),tw=c(),v(En.$$.fragment),Fc=c(),Lo=r("h2"),zn=r("a"),$l=r("span"),v(xr.$$.fragment),ow=c(),Ll=r("span"),nw=n("TFLongformerForSequenceClassification"),Mc=c(),De=r("div"),v(Fr.$$.fragment),sw=c(),xl=r("p"),rw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),aw=c(),Mr=r("p"),iw=n("This model inherits from "),Fa=r("a"),lw=n("TFPreTrainedModel"),dw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cw=c(),Er=r("p"),mw=n("This model is also a "),zr=r("a"),hw=n("tf.keras.Model"),pw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fw=c(),v(qn.$$.fragment),gw=c(),tt=r("div"),v(qr.$$.fragment),uw=c(),xo=r("p"),_w=n("The "),Ma=r("a"),ww=n("TFLongformerForSequenceClassification"),kw=n(" forward method, overrides the "),Fl=r("code"),bw=n("__call__"),vw=n(" special method."),Tw=c(),v(Cn.$$.fragment),yw=c(),v(jn.$$.fragment),$w=c(),v(On.$$.fragment),Ec=c(),Fo=r("h2"),Pn=r("a"),Ml=r("span"),v(Cr.$$.fragment),Lw=c(),El=r("span"),xw=n("TFLongformerForTokenClassification"),zc=c(),We=r("div"),v(jr.$$.fragment),Fw=c(),zl=r("p"),Mw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ew=c(),Or=r("p"),zw=n("This model inherits from "),Ea=r("a"),qw=n("TFPreTrainedModel"),Cw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jw=c(),Pr=r("p"),Ow=n("This model is also a "),Nr=r("a"),Pw=n("tf.keras.Model"),Nw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Aw=c(),v(Nn.$$.fragment),Iw=c(),ot=r("div"),v(Ar.$$.fragment),Sw=c(),Mo=r("p"),Dw=n("The "),za=r("a"),Ww=n("TFLongformerForTokenClassification"),Qw=n(" forward method, overrides the "),ql=r("code"),Bw=n("__call__"),Uw=n(" special method."),Hw=c(),v(An.$$.fragment),Rw=c(),v(In.$$.fragment),Vw=c(),v(Sn.$$.fragment),qc=c(),Eo=r("h2"),Dn=r("a"),Cl=r("span"),v(Ir.$$.fragment),Gw=c(),jl=r("span"),Kw=n("TFLongformerForMultipleChoice"),Cc=c(),Qe=r("div"),v(Sr.$$.fragment),Jw=c(),Ol=r("p"),Xw=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Yw=c(),Dr=r("p"),Zw=n("This model inherits from "),qa=r("a"),ek=n("TFPreTrainedModel"),tk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=c(),Wr=r("p"),nk=n("This model is also a "),Qr=r("a"),sk=n("tf.keras.Model"),rk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ak=c(),v(Wn.$$.fragment),ik=c(),lt=r("div"),v(Br.$$.fragment),lk=c(),zo=r("p"),dk=n("The "),Ca=r("a"),ck=n("TFLongformerForMultipleChoice"),mk=n(" forward method, overrides the "),Pl=r("code"),hk=n("__call__"),pk=n(" special method."),fk=c(),v(Qn.$$.fragment),gk=c(),v(Bn.$$.fragment),this.h()},l(o){const g=uT('[data-svelte="svelte-1phssyn"]',document.head);l=a(g,"META",{name:!0,content:!0}),g.forEach(t),k=m(o),h=a(o,"H1",{class:!0});var Ur=i(h);p=a(Ur,"A",{id:!0,class:!0,href:!0});var Nl=i(p);b=a(Nl,"SPAN",{});var Al=i(b);T(d.$$.fragment,Al),Al.forEach(t),Nl.forEach(t),u=m(Ur),E=a(Ur,"SPAN",{});var Il=i(E);he=s(Il,"Longformer"),Il.forEach(t),Ur.forEach(t),J=m(o),z=a(o,"H2",{class:!0});var Hr=i(z);Z=a(Hr,"A",{id:!0,class:!0,href:!0});var Sl=i(Z);S=a(Sl,"SPAN",{});var Dl=i(S);T(ee.$$.fragment,Dl),Dl.forEach(t),Sl.forEach(t),pe=m(Hr),D=a(Hr,"SPAN",{});var Wl=i(D);fe=s(Wl,"Overview"),Wl.forEach(t),Hr.forEach(t),le=m(o),G=a(o,"P",{});var Rr=i(G);P=s(Rr,"The Longformer model was presented in "),te=a(Rr,"A",{href:!0,rel:!0});var Ql=i(te);X=s(Ql,"Longformer: The Long-Document Transformer"),Ql.forEach(t),q=s(Rr," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Rr.forEach(t),j=m(o),ne=a(o,"P",{});var Bl=i(ne);U=s(Bl,"The abstract from the paper is the following:"),Bl.forEach(t),de=m(o),se=a(o,"P",{});var Ul=i(se);W=a(Ul,"EM",{});var Hl=i(W);ge=s(Hl,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Hl.forEach(t),Ul.forEach(t),ce=m(o),C=a(o,"P",{});var Rl=i(C);ue=s(Rl,"Tips:"),Rl.forEach(t),B=m(o),re=a(o,"UL",{});var Vl=i(re);K=a(Vl,"LI",{});var _t=i(K);H=s(_t,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=a(_t,"CODE",{});var Gl=i(ae);_e=s(Gl,"token_type_ids"),Gl.forEach(t),N=s(_t,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=a(_t,"CODE",{});var Kl=i(ie);R=s(Kl,"tokenizer.sep_token"),Kl.forEach(t),we=s(_t,` (or
`),w=a(_t,"CODE",{});var Jl=i(w);F=s(Jl,"</s>"),Jl.forEach(t),Y=s(_t,")."),_t.forEach(t),Vl.forEach(t),Te=m(o),me=a(o,"P",{});var qo=i(me);A=s(qo,"This model was contributed by "),be=a(qo,"A",{href:!0,rel:!0});var Xl=i(be);xe=s(Xl,"beltagy"),Xl.forEach(t),Fe=s(qo,". The Authors\u2019 code can be found "),O=a(qo,"A",{href:!0,rel:!0});var Yl=i(O);V=s(Yl,"here"),Yl.forEach(t),Me=s(qo,"."),qo.forEach(t),ye=m(o),I=a(o,"H2",{class:!0});var Vr=i(I);ke=a(Vr,"A",{id:!0,class:!0,href:!0});var Zl=i(ke);ve=a(Zl,"SPAN",{});var ed=i(ve);T(oe.$$.fragment,ed),ed.forEach(t),Zl.forEach(t),Ee=m(Vr),ti=a(Vr,"SPAN",{});var td=i(ti);Qm=s(td,"Longformer Self Attention"),td.forEach(t),Vr.forEach(t),fd=m(o),$e=a(o,"P",{});var qe=i($e);Bm=s(qe,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),gd=Po(qe),ud=s(qe,` previous tokens and
`),_d=Po(qe),wd=s(qe," succeding tokens with "),kd=Po(qe),bd=s(qe,` being the window length as defined in
`),oi=a(qe,"CODE",{});var od=i(oi);Um=s(od,"config.attention_window"),od.forEach(t),Hm=s(qe,". Note that "),ni=a(qe,"CODE",{});var nd=i(ni);Rm=s(nd,"config.attention_window"),nd.forEach(t),Vm=s(qe," can be of type "),si=a(qe,"CODE",{});var sd=i(si);Gm=s(sd,"List"),sd.forEach(t),Km=s(qe,` to define a
different `),vd=Po(qe),Td=s(qe,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),ri=a(qe,"CODE",{});var rd=i(ri);Jm=s(rd,"BertSelfAttention"),rd.forEach(t),Xm=s(qe,"."),qe.forEach(t),yd=m(o),wt=a(o,"P",{});var Co=i(wt);Ym=s(Co,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),$d=Po(Co),Ld=s(Co,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ai=a(Co,"EM",{});var ad=i(ai);Zm=s(ad,"symmetric"),ad.forEach(t),eh=s(Co,"."),Co.forEach(t),xd=m(o),kt=a(o,"P",{});var jo=i(kt);th=s(jo,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ii=a(jo,"CODE",{});var id=i(ii);oh=s(id,"global_attention_mask"),id.forEach(t),nh=s(jo,` at run-time appropriately. All Longformer models employ the following logic for
`),li=a(jo,"CODE",{});var ld=i(li);sh=s(ld,"global_attention_mask"),ld.forEach(t),rh=s(jo,":"),jo.forEach(t),Fd=m(o),No=a(o,"UL",{});var Gr=i(No);di=a(Gr,"LI",{});var dd=i(di);ah=s(dd,"0: the token attends \u201Clocally\u201D,"),dd.forEach(t),ih=m(Gr),ci=a(Gr,"LI",{});var cd=i(ci);lh=s(cd,"1: the token attends \u201Cglobally\u201D."),cd.forEach(t),Gr.forEach(t),Md=m(o),Ao=a(o,"P",{});var Oc=i(Ao);dh=s(Oc,"For more information please also refer to "),Kr=a(Oc,"A",{href:!0});var uk=i(Kr);ch=s(uk,"forward()"),uk.forEach(t),mh=s(Oc," method."),Oc.forEach(t),Ed=m(o),Xe=a(o,"P",{});var vt=i(Xe);hh=s(vt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),zd=Po(vt),qd=s(vt,` to
`),Cd=Po(vt),jd=s(vt,", with "),Od=Po(vt),Pd=s(vt," being the sequence length and "),Nd=Po(vt),Ad=s(vt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),vt.forEach(t),Id=m(o),Io=a(o,"P",{});var Pc=i(Io);ph=s(Pc,"For more information, please refer to the official "),Gn=a(Pc,"A",{href:!0,rel:!0});var _k=i(Gn);fh=s(_k,"paper"),_k.forEach(t),gh=s(Pc,"."),Pc.forEach(t),Sd=m(o),jt=a(o,"H2",{class:!0});var Nc=i(jt);So=a(Nc,"A",{id:!0,class:!0,href:!0});var wk=i(So);mi=a(wk,"SPAN",{});var kk=i(mi);T(Kn.$$.fragment,kk),kk.forEach(t),wk.forEach(t),uh=m(Nc),hi=a(Nc,"SPAN",{});var bk=i(hi);_h=s(bk,"Training"),bk.forEach(t),Nc.forEach(t),Dd=m(o),Ot=a(o,"P",{});var md=i(Ot);Jr=a(md,"A",{href:!0});var vk=i(Jr);wh=s(vk,"LongformerForMaskedLM"),vk.forEach(t),kh=s(md," is trained the exact same way "),Xr=a(md,"A",{href:!0});var Tk=i(Xr);bh=s(Tk,"RobertaForMaskedLM"),Tk.forEach(t),vh=s(md,` is
trained and should be used as follows:`),md.forEach(t),Wd=m(o),T(Jn.$$.fragment,o),Qd=m(o),Pt=a(o,"H2",{class:!0});var Ac=i(Pt);Do=a(Ac,"A",{id:!0,class:!0,href:!0});var yk=i(Do);pi=a(yk,"SPAN",{});var $k=i(pi);T(Xn.$$.fragment,$k),$k.forEach(t),yk.forEach(t),Th=m(Ac),fi=a(Ac,"SPAN",{});var Lk=i(fi);yh=s(Lk,"LongformerConfig"),Lk.forEach(t),Ac.forEach(t),Bd=m(o),He=a(o,"DIV",{class:!0});var Tt=i(He);T(Yn.$$.fragment,Tt),$h=m(Tt),Nt=a(Tt,"P",{});var ja=i(Nt);Lh=s(ja,"This is the configuration class to store the configuration of a "),Yr=a(ja,"A",{href:!0});var xk=i(Yr);xh=s(xk,"LongformerModel"),xk.forEach(t),Fh=s(ja," or a "),Zr=a(ja,"A",{href:!0});var Fk=i(Zr);Mh=s(Fk,"TFLongformerModel"),Fk.forEach(t),Eh=s(ja,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),ja.forEach(t),zh=m(Tt),At=a(Tt,"P",{});var Oa=i(At);qh=s(Oa,"This is the configuration class to store the configuration of a "),ea=a(Oa,"A",{href:!0});var Mk=i(ea);Ch=s(Mk,"LongformerModel"),Mk.forEach(t),jh=s(Oa,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Zn=a(Oa,"A",{href:!0,rel:!0});var Ek=i(Zn);Oh=s(Ek,"allenai/longformer-base-4096"),Ek.forEach(t),Ph=s(Oa,` architecture with a sequence
length 4,096.`),Oa.forEach(t),Nh=m(Tt),It=a(Tt,"P",{});var Pa=i(It);Ah=s(Pa,"The "),ta=a(Pa,"A",{href:!0});var zk=i(ta);Ih=s(zk,"LongformerConfig"),zk.forEach(t),Sh=s(Pa," class directly inherits "),oa=a(Pa,"A",{href:!0});var qk=i(oa);Dh=s(qk,"RobertaConfig"),qk.forEach(t),Wh=s(Pa,`. It reuses the same defaults. Please check the
parent class for more information.`),Pa.forEach(t),Qh=m(Tt),T(Wo.$$.fragment,Tt),Tt.forEach(t),Ud=m(o),St=a(o,"H2",{class:!0});var Ic=i(St);Qo=a(Ic,"A",{id:!0,class:!0,href:!0});var Ck=i(Qo);gi=a(Ck,"SPAN",{});var jk=i(gi);T(es.$$.fragment,jk),jk.forEach(t),Ck.forEach(t),Bh=m(Ic),ui=a(Ic,"SPAN",{});var Ok=i(ui);Uh=s(Ok,"LongformerTokenizer"),Ok.forEach(t),Ic.forEach(t),Hd=m(o),gt=a(o,"DIV",{class:!0});var Na=i(gt);T(ts.$$.fragment,Na),Hh=m(Na),_i=a(Na,"P",{});var Pk=i(_i);Rh=s(Pk,"Construct a Longformer tokenizer."),Pk.forEach(t),Vh=m(Na),Bo=a(Na,"P",{});var hd=i(Bo);na=a(hd,"A",{href:!0});var Nk=i(na);Gh=s(Nk,"LongformerTokenizer"),Nk.forEach(t),Kh=s(hd," is identical to "),sa=a(hd,"A",{href:!0});var Ak=i(sa);Jh=s(Ak,"RobertaTokenizer"),Ak.forEach(t),Xh=s(hd,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),hd.forEach(t),Na.forEach(t),Rd=m(o),Dt=a(o,"H2",{class:!0});var Sc=i(Dt);Uo=a(Sc,"A",{id:!0,class:!0,href:!0});var Ik=i(Uo);wi=a(Ik,"SPAN",{});var Sk=i(wi);T(os.$$.fragment,Sk),Sk.forEach(t),Ik.forEach(t),Yh=m(Sc),ki=a(Sc,"SPAN",{});var Dk=i(ki);Zh=s(Dk,"LongformerTokenizerFast"),Dk.forEach(t),Sc.forEach(t),Vd=m(o),ut=a(o,"DIV",{class:!0});var Aa=i(ut);T(ns.$$.fragment,Aa),ep=m(Aa),ss=a(Aa,"P",{});var Dc=i(ss);tp=s(Dc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),bi=a(Dc,"EM",{});var Wk=i(bi);op=s(Wk,"tokenizers"),Wk.forEach(t),np=s(Dc," library)."),Dc.forEach(t),sp=m(Aa),Ho=a(Aa,"P",{});var pd=i(Ho);ra=a(pd,"A",{href:!0});var Qk=i(ra);rp=s(Qk,"LongformerTokenizerFast"),Qk.forEach(t),ap=s(pd," is identical to "),aa=a(pd,"A",{href:!0});var Bk=i(aa);ip=s(Bk,"RobertaTokenizerFast"),Bk.forEach(t),lp=s(pd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),pd.forEach(t),Aa.forEach(t),Gd=m(o),Wt=a(o,"H2",{class:!0});var Wc=i(Wt);Ro=a(Wc,"A",{id:!0,class:!0,href:!0});var Uk=i(Ro);vi=a(Uk,"SPAN",{});var Hk=i(vi);T(rs.$$.fragment,Hk),Hk.forEach(t),Uk.forEach(t),dp=m(Wc),Ti=a(Wc,"SPAN",{});var Rk=i(Ti);cp=s(Rk,"Longformer specific outputs"),Rk.forEach(t),Wc.forEach(t),Kd=m(o),Qt=a(o,"DIV",{class:!0});var Qc=i(Qt);T(as.$$.fragment,Qc),mp=m(Qc),yi=a(Qc,"P",{});var Vk=i(yi);hp=s(Vk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Vk.forEach(t),Qc.forEach(t),Jd=m(o),Bt=a(o,"DIV",{class:!0});var Bc=i(Bt);T(is.$$.fragment,Bc),pp=m(Bc),$i=a(Bc,"P",{});var Gk=i($i);fp=s(Gk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Gk.forEach(t),Bc.forEach(t),Xd=m(o),Ut=a(o,"DIV",{class:!0});var Uc=i(Ut);T(ls.$$.fragment,Uc),gp=m(Uc),Li=a(Uc,"P",{});var Kk=i(Li);up=s(Kk,"Base class for masked language models outputs."),Kk.forEach(t),Uc.forEach(t),Yd=m(o),Ht=a(o,"DIV",{class:!0});var Hc=i(Ht);T(ds.$$.fragment,Hc),_p=m(Hc),xi=a(Hc,"P",{});var Jk=i(xi);wp=s(Jk,"Base class for outputs of question answering Longformer models."),Jk.forEach(t),Hc.forEach(t),Zd=m(o),Rt=a(o,"DIV",{class:!0});var Rc=i(Rt);T(cs.$$.fragment,Rc),kp=m(Rc),Fi=a(Rc,"P",{});var Xk=i(Fi);bp=s(Xk,"Base class for outputs of sentence classification models."),Xk.forEach(t),Rc.forEach(t),ec=m(o),Vt=a(o,"DIV",{class:!0});var Vc=i(Vt);T(ms.$$.fragment,Vc),vp=m(Vc),Mi=a(Vc,"P",{});var Yk=i(Mi);Tp=s(Yk,"Base class for outputs of multiple choice Longformer models."),Yk.forEach(t),Vc.forEach(t),tc=m(o),Gt=a(o,"DIV",{class:!0});var Gc=i(Gt);T(hs.$$.fragment,Gc),yp=m(Gc),Ei=a(Gc,"P",{});var Zk=i(Ei);$p=s(Zk,"Base class for outputs of token classification models."),Zk.forEach(t),Gc.forEach(t),oc=m(o),Kt=a(o,"DIV",{class:!0});var Kc=i(Kt);T(ps.$$.fragment,Kc),Lp=m(Kc),zi=a(Kc,"P",{});var eb=i(zi);xp=s(eb,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),eb.forEach(t),Kc.forEach(t),nc=m(o),Jt=a(o,"DIV",{class:!0});var Jc=i(Jt);T(fs.$$.fragment,Jc),Fp=m(Jc),qi=a(Jc,"P",{});var tb=i(qi);Mp=s(tb,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),tb.forEach(t),Jc.forEach(t),sc=m(o),Xt=a(o,"DIV",{class:!0});var Xc=i(Xt);T(gs.$$.fragment,Xc),Ep=m(Xc),Ci=a(Xc,"P",{});var ob=i(Ci);zp=s(ob,"Base class for masked language models outputs."),ob.forEach(t),Xc.forEach(t),rc=m(o),Yt=a(o,"DIV",{class:!0});var Yc=i(Yt);T(us.$$.fragment,Yc),qp=m(Yc),ji=a(Yc,"P",{});var nb=i(ji);Cp=s(nb,"Base class for outputs of question answering Longformer models."),nb.forEach(t),Yc.forEach(t),ac=m(o),Zt=a(o,"DIV",{class:!0});var Zc=i(Zt);T(_s.$$.fragment,Zc),jp=m(Zc),Oi=a(Zc,"P",{});var sb=i(Oi);Op=s(sb,"Base class for outputs of sentence classification models."),sb.forEach(t),Zc.forEach(t),ic=m(o),eo=a(o,"DIV",{class:!0});var em=i(eo);T(ws.$$.fragment,em),Pp=m(em),Pi=a(em,"P",{});var rb=i(Pi);Np=s(rb,"Base class for outputs of multiple choice models."),rb.forEach(t),em.forEach(t),lc=m(o),to=a(o,"DIV",{class:!0});var tm=i(to);T(ks.$$.fragment,tm),Ap=m(tm),Ni=a(tm,"P",{});var ab=i(Ni);Ip=s(ab,"Base class for outputs of token classification models."),ab.forEach(t),tm.forEach(t),dc=m(o),oo=a(o,"H2",{class:!0});var om=i(oo);Vo=a(om,"A",{id:!0,class:!0,href:!0});var ib=i(Vo);Ai=a(ib,"SPAN",{});var lb=i(Ai);T(bs.$$.fragment,lb),lb.forEach(t),ib.forEach(t),Sp=m(om),Ii=a(om,"SPAN",{});var db=i(Ii);Dp=s(db,"LongformerModel"),db.forEach(t),om.forEach(t),cc=m(o),Pe=a(o,"DIV",{class:!0});var nt=i(Pe);T(vs.$$.fragment,nt),Wp=m(nt),Si=a(nt,"P",{});var cb=i(Si);Qp=s(cb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),cb.forEach(t),Bp=m(nt),Ts=a(nt,"P",{});var nm=i(Ts);Up=s(nm,"This model inherits from "),ia=a(nm,"A",{href:!0});var mb=i(ia);Hp=s(mb,"PreTrainedModel"),mb.forEach(t),Rp=s(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nm.forEach(t),Vp=m(nt),ys=a(nt,"P",{});var sm=i(ys);Gp=s(sm,"This model is also a PyTorch "),$s=a(sm,"A",{href:!0,rel:!0});var hb=i($s);Kp=s(hb,"torch.nn.Module"),hb.forEach(t),Jp=s(sm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sm.forEach(t),Xp=m(nt),no=a(nt,"P",{});var Ia=i(no);Yp=s(Ia,"This class copied code from "),la=a(Ia,"A",{href:!0});var pb=i(la);Zp=s(pb,"RobertaModel"),pb.forEach(t),ef=s(Ia,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Ls=a(Ia,"A",{href:!0,rel:!0});var fb=i(Ls);tf=s(fb,`Longformer:
the Long-Document Transformer`),fb.forEach(t),of=s(Ia,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Ia.forEach(t),nf=m(nt),xs=a(nt,"P",{});var rm=i(xs);sf=s(rm,"The self-attention module "),Di=a(rm,"CODE",{});var gb=i(Di);rf=s(gb,"LongformerSelfAttention"),gb.forEach(t),af=s(rm,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),rm.forEach(t),lf=m(nt),rt=a(nt,"DIV",{class:!0});var Un=i(rt);T(Fs.$$.fragment,Un),df=m(Un),so=a(Un,"P",{});var Sa=i(so);cf=s(Sa,"The "),da=a(Sa,"A",{href:!0});var ub=i(da);mf=s(ub,"LongformerModel"),ub.forEach(t),hf=s(Sa," forward method, overrides the "),Wi=a(Sa,"CODE",{});var _b=i(Wi);pf=s(_b,"__call__"),_b.forEach(t),ff=s(Sa," special method."),Sa.forEach(t),gf=m(Un),T(Go.$$.fragment,Un),uf=m(Un),T(Ko.$$.fragment,Un),Un.forEach(t),nt.forEach(t),mc=m(o),ro=a(o,"H2",{class:!0});var am=i(ro);Jo=a(am,"A",{id:!0,class:!0,href:!0});var wb=i(Jo);Qi=a(wb,"SPAN",{});var kb=i(Qi);T(Ms.$$.fragment,kb),kb.forEach(t),wb.forEach(t),_f=m(am),Bi=a(am,"SPAN",{});var bb=i(Bi);wf=s(bb,"LongformerForMaskedLM"),bb.forEach(t),am.forEach(t),hc=m(o),Re=a(o,"DIV",{class:!0});var yt=i(Re);T(Es.$$.fragment,yt),kf=m(yt),zs=a(yt,"P",{});var im=i(zs);bf=s(im,"Longformer Model with a "),Ui=a(im,"CODE",{});var vb=i(Ui);vf=s(vb,"language modeling"),vb.forEach(t),Tf=s(im," head on top."),im.forEach(t),yf=m(yt),qs=a(yt,"P",{});var lm=i(qs);$f=s(lm,"This model inherits from "),ca=a(lm,"A",{href:!0});var Tb=i(ca);Lf=s(Tb,"PreTrainedModel"),Tb.forEach(t),xf=s(lm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm.forEach(t),Ff=m(yt),Cs=a(yt,"P",{});var dm=i(Cs);Mf=s(dm,"This model is also a PyTorch "),js=a(dm,"A",{href:!0,rel:!0});var yb=i(js);Ef=s(yb,"torch.nn.Module"),yb.forEach(t),zf=s(dm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dm.forEach(t),qf=m(yt),Be=a(yt,"DIV",{class:!0});var dt=i(Be);T(Os.$$.fragment,dt),Cf=m(dt),ao=a(dt,"P",{});var Da=i(ao);jf=s(Da,"The "),ma=a(Da,"A",{href:!0});var $b=i(ma);Of=s($b,"LongformerForMaskedLM"),$b.forEach(t),Pf=s(Da," forward method, overrides the "),Hi=a(Da,"CODE",{});var Lb=i(Hi);Nf=s(Lb,"__call__"),Lb.forEach(t),Af=s(Da," special method."),Da.forEach(t),If=m(dt),T(Xo.$$.fragment,dt),Sf=m(dt),T(Yo.$$.fragment,dt),Df=m(dt),Ri=a(dt,"P",{});var xb=i(Ri);Wf=s(xb,"Let\u2019s try a very long input."),xb.forEach(t),Qf=m(dt),T(Zo.$$.fragment,dt),dt.forEach(t),yt.forEach(t),pc=m(o),io=a(o,"H2",{class:!0});var cm=i(io);en=a(cm,"A",{id:!0,class:!0,href:!0});var Fb=i(en);Vi=a(Fb,"SPAN",{});var Mb=i(Vi);T(Ps.$$.fragment,Mb),Mb.forEach(t),Fb.forEach(t),Bf=m(cm),Gi=a(cm,"SPAN",{});var Eb=i(Gi);Uf=s(Eb,"LongformerForSequenceClassification"),Eb.forEach(t),cm.forEach(t),fc=m(o),Ve=a(o,"DIV",{class:!0});var $t=i(Ve);T(Ns.$$.fragment,$t),Hf=m($t),Ki=a($t,"P",{});var zb=i(Ki);Rf=s(zb,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),zb.forEach(t),Vf=m($t),As=a($t,"P",{});var mm=i(As);Gf=s(mm,"This model inherits from "),ha=a(mm,"A",{href:!0});var qb=i(ha);Kf=s(qb,"PreTrainedModel"),qb.forEach(t),Jf=s(mm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mm.forEach(t),Xf=m($t),Is=a($t,"P",{});var hm=i(Is);Yf=s(hm,"This model is also a PyTorch "),Ss=a(hm,"A",{href:!0,rel:!0});var Cb=i(Ss);Zf=s(Cb,"torch.nn.Module"),Cb.forEach(t),eg=s(hm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hm.forEach(t),tg=m($t),Ne=a($t,"DIV",{class:!0});var st=i(Ne);T(Ds.$$.fragment,st),og=m(st),lo=a(st,"P",{});var Wa=i(lo);ng=s(Wa,"The "),pa=a(Wa,"A",{href:!0});var jb=i(pa);sg=s(jb,"LongformerForSequenceClassification"),jb.forEach(t),rg=s(Wa," forward method, overrides the "),Ji=a(Wa,"CODE",{});var Ob=i(Ji);ag=s(Ob,"__call__"),Ob.forEach(t),ig=s(Wa," special method."),Wa.forEach(t),lg=m(st),T(tn.$$.fragment,st),dg=m(st),T(on.$$.fragment,st),cg=m(st),T(nn.$$.fragment,st),mg=m(st),T(sn.$$.fragment,st),hg=m(st),T(rn.$$.fragment,st),st.forEach(t),$t.forEach(t),gc=m(o),co=a(o,"H2",{class:!0});var pm=i(co);an=a(pm,"A",{id:!0,class:!0,href:!0});var Pb=i(an);Xi=a(Pb,"SPAN",{});var Nb=i(Xi);T(Ws.$$.fragment,Nb),Nb.forEach(t),Pb.forEach(t),pg=m(pm),Yi=a(pm,"SPAN",{});var Ab=i(Yi);fg=s(Ab,"LongformerForMultipleChoice"),Ab.forEach(t),pm.forEach(t),uc=m(o),Ge=a(o,"DIV",{class:!0});var Lt=i(Ge);T(Qs.$$.fragment,Lt),gg=m(Lt),Zi=a(Lt,"P",{});var Ib=i(Zi);ug=s(Ib,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ib.forEach(t),_g=m(Lt),Bs=a(Lt,"P",{});var fm=i(Bs);wg=s(fm,"This model inherits from "),fa=a(fm,"A",{href:!0});var Sb=i(fa);kg=s(Sb,"PreTrainedModel"),Sb.forEach(t),bg=s(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fm.forEach(t),vg=m(Lt),Us=a(Lt,"P",{});var gm=i(Us);Tg=s(gm,"This model is also a PyTorch "),Hs=a(gm,"A",{href:!0,rel:!0});var Db=i(Hs);yg=s(Db,"torch.nn.Module"),Db.forEach(t),$g=s(gm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gm.forEach(t),Lg=m(Lt),at=a(Lt,"DIV",{class:!0});var Hn=i(at);T(Rs.$$.fragment,Hn),xg=m(Hn),mo=a(Hn,"P",{});var Qa=i(mo);Fg=s(Qa,"The "),ga=a(Qa,"A",{href:!0});var Wb=i(ga);Mg=s(Wb,"LongformerForMultipleChoice"),Wb.forEach(t),Eg=s(Qa," forward method, overrides the "),el=a(Qa,"CODE",{});var Qb=i(el);zg=s(Qb,"__call__"),Qb.forEach(t),qg=s(Qa," special method."),Qa.forEach(t),Cg=m(Hn),T(ln.$$.fragment,Hn),jg=m(Hn),T(dn.$$.fragment,Hn),Hn.forEach(t),Lt.forEach(t),_c=m(o),ho=a(o,"H2",{class:!0});var um=i(ho);cn=a(um,"A",{id:!0,class:!0,href:!0});var Bb=i(cn);tl=a(Bb,"SPAN",{});var Ub=i(tl);T(Vs.$$.fragment,Ub),Ub.forEach(t),Bb.forEach(t),Og=m(um),ol=a(um,"SPAN",{});var Hb=i(ol);Pg=s(Hb,"LongformerForTokenClassification"),Hb.forEach(t),um.forEach(t),wc=m(o),Ke=a(o,"DIV",{class:!0});var xt=i(Ke);T(Gs.$$.fragment,xt),Ng=m(xt),nl=a(xt,"P",{});var Rb=i(nl);Ag=s(Rb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Rb.forEach(t),Ig=m(xt),Ks=a(xt,"P",{});var _m=i(Ks);Sg=s(_m,"This model inherits from "),ua=a(_m,"A",{href:!0});var Vb=i(ua);Dg=s(Vb,"PreTrainedModel"),Vb.forEach(t),Wg=s(_m,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_m.forEach(t),Qg=m(xt),Js=a(xt,"P",{});var wm=i(Js);Bg=s(wm,"This model is also a PyTorch "),Xs=a(wm,"A",{href:!0,rel:!0});var Gb=i(Xs);Ug=s(Gb,"torch.nn.Module"),Gb.forEach(t),Hg=s(wm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wm.forEach(t),Rg=m(xt),Ye=a(xt,"DIV",{class:!0});var Ft=i(Ye);T(Ys.$$.fragment,Ft),Vg=m(Ft),po=a(Ft,"P",{});var Ba=i(po);Gg=s(Ba,"The "),_a=a(Ba,"A",{href:!0});var Kb=i(_a);Kg=s(Kb,"LongformerForTokenClassification"),Kb.forEach(t),Jg=s(Ba," forward method, overrides the "),sl=a(Ba,"CODE",{});var Jb=i(sl);Xg=s(Jb,"__call__"),Jb.forEach(t),Yg=s(Ba," special method."),Ba.forEach(t),Zg=m(Ft),T(mn.$$.fragment,Ft),eu=m(Ft),T(hn.$$.fragment,Ft),tu=m(Ft),T(pn.$$.fragment,Ft),Ft.forEach(t),xt.forEach(t),kc=m(o),fo=a(o,"H2",{class:!0});var km=i(fo);fn=a(km,"A",{id:!0,class:!0,href:!0});var Xb=i(fn);rl=a(Xb,"SPAN",{});var Yb=i(rl);T(Zs.$$.fragment,Yb),Yb.forEach(t),Xb.forEach(t),ou=m(km),al=a(km,"SPAN",{});var Zb=i(al);nu=s(Zb,"LongformerForQuestionAnswering"),Zb.forEach(t),km.forEach(t),bc=m(o),Je=a(o,"DIV",{class:!0});var Mt=i(Je);T(er.$$.fragment,Mt),su=m(Mt),go=a(Mt,"P",{});var Ua=i(go);ru=s(Ua,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),il=a(Ua,"CODE",{});var ev=i(il);au=s(ev,"span start logits"),ev.forEach(t),iu=s(Ua," and "),ll=a(Ua,"CODE",{});var tv=i(ll);lu=s(tv,"span end logits"),tv.forEach(t),du=s(Ua,")."),Ua.forEach(t),cu=m(Mt),tr=a(Mt,"P",{});var bm=i(tr);mu=s(bm,"This model inherits from "),wa=a(bm,"A",{href:!0});var ov=i(wa);hu=s(ov,"PreTrainedModel"),ov.forEach(t),pu=s(bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm.forEach(t),fu=m(Mt),or=a(Mt,"P",{});var vm=i(or);gu=s(vm,"This model is also a PyTorch "),nr=a(vm,"A",{href:!0,rel:!0});var nv=i(nr);uu=s(nv,"torch.nn.Module"),nv.forEach(t),_u=s(vm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vm.forEach(t),wu=m(Mt),it=a(Mt,"DIV",{class:!0});var Rn=i(it);T(sr.$$.fragment,Rn),ku=m(Rn),uo=a(Rn,"P",{});var Ha=i(uo);bu=s(Ha,"The "),ka=a(Ha,"A",{href:!0});var sv=i(ka);vu=s(sv,"LongformerForQuestionAnswering"),sv.forEach(t),Tu=s(Ha," forward method, overrides the "),dl=a(Ha,"CODE",{});var rv=i(dl);yu=s(rv,"__call__"),rv.forEach(t),$u=s(Ha," special method."),Ha.forEach(t),Lu=m(Rn),T(gn.$$.fragment,Rn),xu=m(Rn),T(un.$$.fragment,Rn),Rn.forEach(t),Mt.forEach(t),vc=m(o),_o=a(o,"H2",{class:!0});var Tm=i(_o);_n=a(Tm,"A",{id:!0,class:!0,href:!0});var av=i(_n);cl=a(av,"SPAN",{});var iv=i(cl);T(rr.$$.fragment,iv),iv.forEach(t),av.forEach(t),Fu=m(Tm),ml=a(Tm,"SPAN",{});var lv=i(ml);Mu=s(lv,"TFLongformerModel"),lv.forEach(t),Tm.forEach(t),Tc=m(o),ze=a(o,"DIV",{class:!0});var Ue=i(ze);T(ar.$$.fragment,Ue),Eu=m(Ue),hl=a(Ue,"P",{});var dv=i(hl);zu=s(dv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),dv.forEach(t),qu=m(Ue),ir=a(Ue,"P",{});var ym=i(ir);Cu=s(ym,"This model inherits from "),ba=a(ym,"A",{href:!0});var cv=i(ba);ju=s(cv,"TFPreTrainedModel"),cv.forEach(t),Ou=s(ym,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ym.forEach(t),Pu=m(Ue),lr=a(Ue,"P",{});var $m=i(lr);Nu=s($m,"This model is also a "),dr=a($m,"A",{href:!0,rel:!0});var mv=i(dr);Au=s(mv,"tf.keras.Model"),mv.forEach(t),Iu=s($m,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$m.forEach(t),Su=m(Ue),T(wn.$$.fragment,Ue),Du=m(Ue),wo=a(Ue,"P",{});var Ra=i(wo);Wu=s(Ra,"This class copies code from "),va=a(Ra,"A",{href:!0});var hv=i(va);Qu=s(hv,"TFRobertaModel"),hv.forEach(t),Bu=s(Ra,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),cr=a(Ra,"A",{href:!0,rel:!0});var pv=i(cr);Uu=s(pv,"Longformer: the Long-Document Transformer"),pv.forEach(t),Hu=s(Ra,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ra.forEach(t),Ru=m(Ue),mr=a(Ue,"P",{});var Lm=i(mr);Vu=s(Lm,"The self-attention module "),pl=a(Lm,"CODE",{});var fv=i(pl);Gu=s(fv,"TFLongformerSelfAttention"),fv.forEach(t),Ku=s(Lm,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Lm.forEach(t),Ju=m(Ue),bt=a(Ue,"DIV",{class:!0});var Va=i(bt);T(hr.$$.fragment,Va),Xu=m(Va),ko=a(Va,"P",{});var Ga=i(ko);Yu=s(Ga,"The "),Ta=a(Ga,"A",{href:!0});var gv=i(Ta);Zu=s(gv,"TFLongformerModel"),gv.forEach(t),e_=s(Ga," forward method, overrides the "),fl=a(Ga,"CODE",{});var uv=i(fl);t_=s(uv,"__call__"),uv.forEach(t),o_=s(Ga," special method."),Ga.forEach(t),n_=m(Va),T(kn.$$.fragment,Va),Va.forEach(t),Ue.forEach(t),yc=m(o),bo=a(o,"H2",{class:!0});var xm=i(bo);bn=a(xm,"A",{id:!0,class:!0,href:!0});var _v=i(bn);gl=a(_v,"SPAN",{});var wv=i(gl);T(pr.$$.fragment,wv),wv.forEach(t),_v.forEach(t),s_=m(xm),ul=a(xm,"SPAN",{});var kv=i(ul);r_=s(kv,"TFLongformerForMaskedLM"),kv.forEach(t),xm.forEach(t),$c=m(o),Ie=a(o,"DIV",{class:!0});var ct=i(Ie);T(fr.$$.fragment,ct),a_=m(ct),gr=a(ct,"P",{});var Fm=i(gr);i_=s(Fm,"Longformer Model with a "),_l=a(Fm,"CODE",{});var bv=i(_l);l_=s(bv,"language modeling"),bv.forEach(t),d_=s(Fm," head on top."),Fm.forEach(t),c_=m(ct),ur=a(ct,"P",{});var Mm=i(ur);m_=s(Mm,"This model inherits from "),ya=a(Mm,"A",{href:!0});var vv=i(ya);h_=s(vv,"TFPreTrainedModel"),vv.forEach(t),p_=s(Mm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mm.forEach(t),f_=m(ct),_r=a(ct,"P",{});var Em=i(_r);g_=s(Em,"This model is also a "),wr=a(Em,"A",{href:!0,rel:!0});var Tv=i(wr);u_=s(Tv,"tf.keras.Model"),Tv.forEach(t),__=s(Em,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Em.forEach(t),w_=m(ct),T(vn.$$.fragment,ct),k_=m(ct),Ze=a(ct,"DIV",{class:!0});var Et=i(Ze);T(kr.$$.fragment,Et),b_=m(Et),vo=a(Et,"P",{});var Ka=i(vo);v_=s(Ka,"The "),$a=a(Ka,"A",{href:!0});var yv=i($a);T_=s(yv,"TFLongformerForMaskedLM"),yv.forEach(t),y_=s(Ka," forward method, overrides the "),wl=a(Ka,"CODE",{});var $v=i(wl);$_=s($v,"__call__"),$v.forEach(t),L_=s(Ka," special method."),Ka.forEach(t),x_=m(Et),T(Tn.$$.fragment,Et),F_=m(Et),T(yn.$$.fragment,Et),M_=m(Et),T($n.$$.fragment,Et),Et.forEach(t),ct.forEach(t),Lc=m(o),To=a(o,"H2",{class:!0});var zm=i(To);Ln=a(zm,"A",{id:!0,class:!0,href:!0});var Lv=i(Ln);kl=a(Lv,"SPAN",{});var xv=i(kl);T(br.$$.fragment,xv),xv.forEach(t),Lv.forEach(t),E_=m(zm),bl=a(zm,"SPAN",{});var Fv=i(bl);z_=s(Fv,"TFLongformerForQuestionAnswering"),Fv.forEach(t),zm.forEach(t),xc=m(o),Se=a(o,"DIV",{class:!0});var mt=i(Se);T(vr.$$.fragment,mt),q_=m(mt),yo=a(mt,"P",{});var Ja=i(yo);C_=s(Ja,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),vl=a(Ja,"CODE",{});var Mv=i(vl);j_=s(Mv,"span start logits"),Mv.forEach(t),O_=s(Ja," and "),Tl=a(Ja,"CODE",{});var Ev=i(Tl);P_=s(Ev,"span end logits"),Ev.forEach(t),N_=s(Ja,")."),Ja.forEach(t),A_=m(mt),Tr=a(mt,"P",{});var qm=i(Tr);I_=s(qm,"This model inherits from "),La=a(qm,"A",{href:!0});var zv=i(La);S_=s(zv,"TFPreTrainedModel"),zv.forEach(t),D_=s(qm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qm.forEach(t),W_=m(mt),yr=a(mt,"P",{});var Cm=i(yr);Q_=s(Cm,"This model is also a "),$r=a(Cm,"A",{href:!0,rel:!0});var qv=i($r);B_=s(qv,"tf.keras.Model"),qv.forEach(t),U_=s(Cm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cm.forEach(t),H_=m(mt),T(xn.$$.fragment,mt),R_=m(mt),et=a(mt,"DIV",{class:!0});var zt=i(et);T(Lr.$$.fragment,zt),V_=m(zt),$o=a(zt,"P",{});var Xa=i($o);G_=s(Xa,"The "),xa=a(Xa,"A",{href:!0});var Cv=i(xa);K_=s(Cv,"TFLongformerForQuestionAnswering"),Cv.forEach(t),J_=s(Xa," forward method, overrides the "),yl=a(Xa,"CODE",{});var jv=i(yl);X_=s(jv,"__call__"),jv.forEach(t),Y_=s(Xa," special method."),Xa.forEach(t),Z_=m(zt),T(Fn.$$.fragment,zt),ew=m(zt),T(Mn.$$.fragment,zt),tw=m(zt),T(En.$$.fragment,zt),zt.forEach(t),mt.forEach(t),Fc=m(o),Lo=a(o,"H2",{class:!0});var jm=i(Lo);zn=a(jm,"A",{id:!0,class:!0,href:!0});var Ov=i(zn);$l=a(Ov,"SPAN",{});var Pv=i($l);T(xr.$$.fragment,Pv),Pv.forEach(t),Ov.forEach(t),ow=m(jm),Ll=a(jm,"SPAN",{});var Nv=i(Ll);nw=s(Nv,"TFLongformerForSequenceClassification"),Nv.forEach(t),jm.forEach(t),Mc=m(o),De=a(o,"DIV",{class:!0});var ht=i(De);T(Fr.$$.fragment,ht),sw=m(ht),xl=a(ht,"P",{});var Av=i(xl);rw=s(Av,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Av.forEach(t),aw=m(ht),Mr=a(ht,"P",{});var Om=i(Mr);iw=s(Om,"This model inherits from "),Fa=a(Om,"A",{href:!0});var Iv=i(Fa);lw=s(Iv,"TFPreTrainedModel"),Iv.forEach(t),dw=s(Om,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Om.forEach(t),cw=m(ht),Er=a(ht,"P",{});var Pm=i(Er);mw=s(Pm,"This model is also a "),zr=a(Pm,"A",{href:!0,rel:!0});var Sv=i(zr);hw=s(Sv,"tf.keras.Model"),Sv.forEach(t),pw=s(Pm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pm.forEach(t),fw=m(ht),T(qn.$$.fragment,ht),gw=m(ht),tt=a(ht,"DIV",{class:!0});var qt=i(tt);T(qr.$$.fragment,qt),uw=m(qt),xo=a(qt,"P",{});var Ya=i(xo);_w=s(Ya,"The "),Ma=a(Ya,"A",{href:!0});var Dv=i(Ma);ww=s(Dv,"TFLongformerForSequenceClassification"),Dv.forEach(t),kw=s(Ya," forward method, overrides the "),Fl=a(Ya,"CODE",{});var Wv=i(Fl);bw=s(Wv,"__call__"),Wv.forEach(t),vw=s(Ya," special method."),Ya.forEach(t),Tw=m(qt),T(Cn.$$.fragment,qt),yw=m(qt),T(jn.$$.fragment,qt),$w=m(qt),T(On.$$.fragment,qt),qt.forEach(t),ht.forEach(t),Ec=m(o),Fo=a(o,"H2",{class:!0});var Nm=i(Fo);Pn=a(Nm,"A",{id:!0,class:!0,href:!0});var Qv=i(Pn);Ml=a(Qv,"SPAN",{});var Bv=i(Ml);T(Cr.$$.fragment,Bv),Bv.forEach(t),Qv.forEach(t),Lw=m(Nm),El=a(Nm,"SPAN",{});var Uv=i(El);xw=s(Uv,"TFLongformerForTokenClassification"),Uv.forEach(t),Nm.forEach(t),zc=m(o),We=a(o,"DIV",{class:!0});var pt=i(We);T(jr.$$.fragment,pt),Fw=m(pt),zl=a(pt,"P",{});var Hv=i(zl);Mw=s(Hv,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Hv.forEach(t),Ew=m(pt),Or=a(pt,"P",{});var Am=i(Or);zw=s(Am,"This model inherits from "),Ea=a(Am,"A",{href:!0});var Rv=i(Ea);qw=s(Rv,"TFPreTrainedModel"),Rv.forEach(t),Cw=s(Am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Am.forEach(t),jw=m(pt),Pr=a(pt,"P",{});var Im=i(Pr);Ow=s(Im,"This model is also a "),Nr=a(Im,"A",{href:!0,rel:!0});var Vv=i(Nr);Pw=s(Vv,"tf.keras.Model"),Vv.forEach(t),Nw=s(Im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im.forEach(t),Aw=m(pt),T(Nn.$$.fragment,pt),Iw=m(pt),ot=a(pt,"DIV",{class:!0});var Ct=i(ot);T(Ar.$$.fragment,Ct),Sw=m(Ct),Mo=a(Ct,"P",{});var Za=i(Mo);Dw=s(Za,"The "),za=a(Za,"A",{href:!0});var Gv=i(za);Ww=s(Gv,"TFLongformerForTokenClassification"),Gv.forEach(t),Qw=s(Za," forward method, overrides the "),ql=a(Za,"CODE",{});var Kv=i(ql);Bw=s(Kv,"__call__"),Kv.forEach(t),Uw=s(Za," special method."),Za.forEach(t),Hw=m(Ct),T(An.$$.fragment,Ct),Rw=m(Ct),T(In.$$.fragment,Ct),Vw=m(Ct),T(Sn.$$.fragment,Ct),Ct.forEach(t),pt.forEach(t),qc=m(o),Eo=a(o,"H2",{class:!0});var Sm=i(Eo);Dn=a(Sm,"A",{id:!0,class:!0,href:!0});var Jv=i(Dn);Cl=a(Jv,"SPAN",{});var Xv=i(Cl);T(Ir.$$.fragment,Xv),Xv.forEach(t),Jv.forEach(t),Gw=m(Sm),jl=a(Sm,"SPAN",{});var Yv=i(jl);Kw=s(Yv,"TFLongformerForMultipleChoice"),Yv.forEach(t),Sm.forEach(t),Cc=m(o),Qe=a(o,"DIV",{class:!0});var ft=i(Qe);T(Sr.$$.fragment,ft),Jw=m(ft),Ol=a(ft,"P",{});var Zv=i(Ol);Xw=s(Zv,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Zv.forEach(t),Yw=m(ft),Dr=a(ft,"P",{});var Dm=i(Dr);Zw=s(Dm,"This model inherits from "),qa=a(Dm,"A",{href:!0});var eT=i(qa);ek=s(eT,"TFPreTrainedModel"),eT.forEach(t),tk=s(Dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dm.forEach(t),ok=m(ft),Wr=a(ft,"P",{});var Wm=i(Wr);nk=s(Wm,"This model is also a "),Qr=a(Wm,"A",{href:!0,rel:!0});var tT=i(Qr);sk=s(tT,"tf.keras.Model"),tT.forEach(t),rk=s(Wm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wm.forEach(t),ak=m(ft),T(Wn.$$.fragment,ft),ik=m(ft),lt=a(ft,"DIV",{class:!0});var Vn=i(lt);T(Br.$$.fragment,Vn),lk=m(Vn),zo=a(Vn,"P",{});var ei=i(zo);dk=s(ei,"The "),Ca=a(ei,"A",{href:!0});var oT=i(Ca);ck=s(oT,"TFLongformerForMultipleChoice"),oT.forEach(t),mk=s(ei," forward method, overrides the "),Pl=a(ei,"CODE",{});var nT=i(Pl);hk=s(nT,"__call__"),nT.forEach(t),pk=s(ei," special method."),ei.forEach(t),fk=m(Vn),T(Qn.$$.fragment,Vn),gk=m(Vn),T(Bn.$$.fragment,Vn),Vn.forEach(t),ft.forEach(t),this.h()},h(){_(l,"name","hf:doc:metadata"),_(l,"content",JSON.stringify(sy)),_(p,"id","longformer"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#longformer"),_(h,"class","relative group"),_(Z,"id","overview"),_(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Z,"href","#overview"),_(z,"class","relative group"),_(te,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(te,"rel","nofollow"),_(be,"href","https://huggingface.co/beltagy"),_(be,"rel","nofollow"),_(O,"href","https://github.com/allenai/longformer"),_(O,"rel","nofollow"),_(ke,"id","longformer-self-attention"),_(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ke,"href","#longformer-self-attention"),_(I,"class","relative group"),gd.a=ud,_d.a=wd,kd.a=bd,vd.a=Td,$d.a=Ld,_(Kr,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerModel.forward"),zd.a=qd,Cd.a=jd,Od.a=Pd,Nd.a=Ad,_(Gn,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(Gn,"rel","nofollow"),_(So,"id","training"),_(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(So,"href","#training"),_(jt,"class","relative group"),_(Jr,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Xr,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForMaskedLM"),_(Do,"id","transformers.LongformerConfig"),_(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Do,"href","#transformers.LongformerConfig"),_(Pt,"class","relative group"),_(Yr,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerModel"),_(Zr,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.TFLongformerModel"),_(ea,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerModel"),_(Zn,"href","https://huggingface.co/allenai/longformer-base-4096"),_(Zn,"rel","nofollow"),_(ta,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerConfig"),_(oa,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qo,"id","transformers.LongformerTokenizer"),_(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Qo,"href","#transformers.LongformerTokenizer"),_(St,"class","relative group"),_(na,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizer"),_(sa,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer"),_(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Uo,"id","transformers.LongformerTokenizerFast"),_(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Uo,"href","#transformers.LongformerTokenizerFast"),_(Dt,"class","relative group"),_(ra,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerTokenizerFast"),_(aa,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizerFast"),_(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ro,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ro,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Wt,"class","relative group"),_(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vo,"id","transformers.LongformerModel"),_(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Vo,"href","#transformers.LongformerModel"),_(oo,"class","relative group"),_(ia,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_($s,"rel","nofollow"),_(la,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaModel"),_(Ls,"href","https://arxiv.org/abs/2004.05150"),_(Ls,"rel","nofollow"),_(da,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerModel"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jo,"id","transformers.LongformerForMaskedLM"),_(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Jo,"href","#transformers.LongformerForMaskedLM"),_(ro,"class","relative group"),_(ca,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(js,"rel","nofollow"),_(ma,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(en,"id","transformers.LongformerForSequenceClassification"),_(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(en,"href","#transformers.LongformerForSequenceClassification"),_(io,"class","relative group"),_(ha,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Ss,"rel","nofollow"),_(pa,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(an,"id","transformers.LongformerForMultipleChoice"),_(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(an,"href","#transformers.LongformerForMultipleChoice"),_(co,"class","relative group"),_(fa,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Hs,"rel","nofollow"),_(ga,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(cn,"id","transformers.LongformerForTokenClassification"),_(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(cn,"href","#transformers.LongformerForTokenClassification"),_(ho,"class","relative group"),_(ua,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Xs,"rel","nofollow"),_(_a,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerForTokenClassification"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(fn,"id","transformers.LongformerForQuestionAnswering"),_(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(fn,"href","#transformers.LongformerForQuestionAnswering"),_(fo,"class","relative group"),_(wa,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),_(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(nr,"rel","nofollow"),_(ka,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),_(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_n,"id","transformers.TFLongformerModel"),_(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_n,"href","#transformers.TFLongformerModel"),_(_o,"class","relative group"),_(ba,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(dr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(dr,"rel","nofollow"),_(va,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaModel"),_(cr,"href","https://arxiv.org/abs/2004.05150"),_(cr,"rel","nofollow"),_(Ta,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.TFLongformerModel"),_(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(bn,"id","transformers.TFLongformerForMaskedLM"),_(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(bn,"href","#transformers.TFLongformerForMaskedLM"),_(bo,"class","relative group"),_(ya,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(wr,"rel","nofollow"),_($a,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),_(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ln,"id","transformers.TFLongformerForQuestionAnswering"),_(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ln,"href","#transformers.TFLongformerForQuestionAnswering"),_(To,"class","relative group"),_(La,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_($r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_($r,"rel","nofollow"),_(xa,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(zn,"id","transformers.TFLongformerForSequenceClassification"),_(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(zn,"href","#transformers.TFLongformerForSequenceClassification"),_(Lo,"class","relative group"),_(Fa,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(zr,"rel","nofollow"),_(Ma,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pn,"id","transformers.TFLongformerForTokenClassification"),_(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Pn,"href","#transformers.TFLongformerForTokenClassification"),_(Fo,"class","relative group"),_(Ea,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Nr,"rel","nofollow"),_(za,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Dn,"id","transformers.TFLongformerForMultipleChoice"),_(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Dn,"href","#transformers.TFLongformerForMultipleChoice"),_(Eo,"class","relative group"),_(qa,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),_(Qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Qr,"rel","nofollow"),_(Ca,"href","/docs/transformers/v4.21.1/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),_(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),f(o,k,g),f(o,h,g),e(h,p),e(p,b),y(d,b,null),e(h,u),e(h,E),e(E,he),f(o,J,g),f(o,z,g),e(z,Z),e(Z,S),y(ee,S,null),e(z,pe),e(z,D),e(D,fe),f(o,le,g),f(o,G,g),e(G,P),e(G,te),e(te,X),e(G,q),f(o,j,g),f(o,ne,g),e(ne,U),f(o,de,g),f(o,se,g),e(se,W),e(W,ge),f(o,ce,g),f(o,C,g),e(C,ue),f(o,B,g),f(o,re,g),e(re,K),e(K,H),e(K,ae),e(ae,_e),e(K,N),e(K,ie),e(ie,R),e(K,we),e(K,w),e(w,F),e(K,Y),f(o,Te,g),f(o,me,g),e(me,A),e(me,be),e(be,xe),e(me,Fe),e(me,O),e(O,V),e(me,Me),f(o,ye,g),f(o,I,g),e(I,ke),e(ke,ve),y(oe,ve,null),e(I,Ee),e(I,ti),e(ti,Qm),f(o,fd,g),f(o,$e,g),e($e,Bm),gd.m(sT,$e),e($e,ud),_d.m(rT,$e),e($e,wd),kd.m(aT,$e),e($e,bd),e($e,oi),e(oi,Um),e($e,Hm),e($e,ni),e(ni,Rm),e($e,Vm),e($e,si),e(si,Gm),e($e,Km),vd.m(iT,$e),e($e,Td),e($e,ri),e(ri,Jm),e($e,Xm),f(o,yd,g),f(o,wt,g),e(wt,Ym),$d.m(lT,wt),e(wt,Ld),e(wt,ai),e(ai,Zm),e(wt,eh),f(o,xd,g),f(o,kt,g),e(kt,th),e(kt,ii),e(ii,oh),e(kt,nh),e(kt,li),e(li,sh),e(kt,rh),f(o,Fd,g),f(o,No,g),e(No,di),e(di,ah),e(No,ih),e(No,ci),e(ci,lh),f(o,Md,g),f(o,Ao,g),e(Ao,dh),e(Ao,Kr),e(Kr,ch),e(Ao,mh),f(o,Ed,g),f(o,Xe,g),e(Xe,hh),zd.m(dT,Xe),e(Xe,qd),Cd.m(cT,Xe),e(Xe,jd),Od.m(mT,Xe),e(Xe,Pd),Nd.m(hT,Xe),e(Xe,Ad),f(o,Id,g),f(o,Io,g),e(Io,ph),e(Io,Gn),e(Gn,fh),e(Io,gh),f(o,Sd,g),f(o,jt,g),e(jt,So),e(So,mi),y(Kn,mi,null),e(jt,uh),e(jt,hi),e(hi,_h),f(o,Dd,g),f(o,Ot,g),e(Ot,Jr),e(Jr,wh),e(Ot,kh),e(Ot,Xr),e(Xr,bh),e(Ot,vh),f(o,Wd,g),y(Jn,o,g),f(o,Qd,g),f(o,Pt,g),e(Pt,Do),e(Do,pi),y(Xn,pi,null),e(Pt,Th),e(Pt,fi),e(fi,yh),f(o,Bd,g),f(o,He,g),y(Yn,He,null),e(He,$h),e(He,Nt),e(Nt,Lh),e(Nt,Yr),e(Yr,xh),e(Nt,Fh),e(Nt,Zr),e(Zr,Mh),e(Nt,Eh),e(He,zh),e(He,At),e(At,qh),e(At,ea),e(ea,Ch),e(At,jh),e(At,Zn),e(Zn,Oh),e(At,Ph),e(He,Nh),e(He,It),e(It,Ah),e(It,ta),e(ta,Ih),e(It,Sh),e(It,oa),e(oa,Dh),e(It,Wh),e(He,Qh),y(Wo,He,null),f(o,Ud,g),f(o,St,g),e(St,Qo),e(Qo,gi),y(es,gi,null),e(St,Bh),e(St,ui),e(ui,Uh),f(o,Hd,g),f(o,gt,g),y(ts,gt,null),e(gt,Hh),e(gt,_i),e(_i,Rh),e(gt,Vh),e(gt,Bo),e(Bo,na),e(na,Gh),e(Bo,Kh),e(Bo,sa),e(sa,Jh),e(Bo,Xh),f(o,Rd,g),f(o,Dt,g),e(Dt,Uo),e(Uo,wi),y(os,wi,null),e(Dt,Yh),e(Dt,ki),e(ki,Zh),f(o,Vd,g),f(o,ut,g),y(ns,ut,null),e(ut,ep),e(ut,ss),e(ss,tp),e(ss,bi),e(bi,op),e(ss,np),e(ut,sp),e(ut,Ho),e(Ho,ra),e(ra,rp),e(Ho,ap),e(Ho,aa),e(aa,ip),e(Ho,lp),f(o,Gd,g),f(o,Wt,g),e(Wt,Ro),e(Ro,vi),y(rs,vi,null),e(Wt,dp),e(Wt,Ti),e(Ti,cp),f(o,Kd,g),f(o,Qt,g),y(as,Qt,null),e(Qt,mp),e(Qt,yi),e(yi,hp),f(o,Jd,g),f(o,Bt,g),y(is,Bt,null),e(Bt,pp),e(Bt,$i),e($i,fp),f(o,Xd,g),f(o,Ut,g),y(ls,Ut,null),e(Ut,gp),e(Ut,Li),e(Li,up),f(o,Yd,g),f(o,Ht,g),y(ds,Ht,null),e(Ht,_p),e(Ht,xi),e(xi,wp),f(o,Zd,g),f(o,Rt,g),y(cs,Rt,null),e(Rt,kp),e(Rt,Fi),e(Fi,bp),f(o,ec,g),f(o,Vt,g),y(ms,Vt,null),e(Vt,vp),e(Vt,Mi),e(Mi,Tp),f(o,tc,g),f(o,Gt,g),y(hs,Gt,null),e(Gt,yp),e(Gt,Ei),e(Ei,$p),f(o,oc,g),f(o,Kt,g),y(ps,Kt,null),e(Kt,Lp),e(Kt,zi),e(zi,xp),f(o,nc,g),f(o,Jt,g),y(fs,Jt,null),e(Jt,Fp),e(Jt,qi),e(qi,Mp),f(o,sc,g),f(o,Xt,g),y(gs,Xt,null),e(Xt,Ep),e(Xt,Ci),e(Ci,zp),f(o,rc,g),f(o,Yt,g),y(us,Yt,null),e(Yt,qp),e(Yt,ji),e(ji,Cp),f(o,ac,g),f(o,Zt,g),y(_s,Zt,null),e(Zt,jp),e(Zt,Oi),e(Oi,Op),f(o,ic,g),f(o,eo,g),y(ws,eo,null),e(eo,Pp),e(eo,Pi),e(Pi,Np),f(o,lc,g),f(o,to,g),y(ks,to,null),e(to,Ap),e(to,Ni),e(Ni,Ip),f(o,dc,g),f(o,oo,g),e(oo,Vo),e(Vo,Ai),y(bs,Ai,null),e(oo,Sp),e(oo,Ii),e(Ii,Dp),f(o,cc,g),f(o,Pe,g),y(vs,Pe,null),e(Pe,Wp),e(Pe,Si),e(Si,Qp),e(Pe,Bp),e(Pe,Ts),e(Ts,Up),e(Ts,ia),e(ia,Hp),e(Ts,Rp),e(Pe,Vp),e(Pe,ys),e(ys,Gp),e(ys,$s),e($s,Kp),e(ys,Jp),e(Pe,Xp),e(Pe,no),e(no,Yp),e(no,la),e(la,Zp),e(no,ef),e(no,Ls),e(Ls,tf),e(no,of),e(Pe,nf),e(Pe,xs),e(xs,sf),e(xs,Di),e(Di,rf),e(xs,af),e(Pe,lf),e(Pe,rt),y(Fs,rt,null),e(rt,df),e(rt,so),e(so,cf),e(so,da),e(da,mf),e(so,hf),e(so,Wi),e(Wi,pf),e(so,ff),e(rt,gf),y(Go,rt,null),e(rt,uf),y(Ko,rt,null),f(o,mc,g),f(o,ro,g),e(ro,Jo),e(Jo,Qi),y(Ms,Qi,null),e(ro,_f),e(ro,Bi),e(Bi,wf),f(o,hc,g),f(o,Re,g),y(Es,Re,null),e(Re,kf),e(Re,zs),e(zs,bf),e(zs,Ui),e(Ui,vf),e(zs,Tf),e(Re,yf),e(Re,qs),e(qs,$f),e(qs,ca),e(ca,Lf),e(qs,xf),e(Re,Ff),e(Re,Cs),e(Cs,Mf),e(Cs,js),e(js,Ef),e(Cs,zf),e(Re,qf),e(Re,Be),y(Os,Be,null),e(Be,Cf),e(Be,ao),e(ao,jf),e(ao,ma),e(ma,Of),e(ao,Pf),e(ao,Hi),e(Hi,Nf),e(ao,Af),e(Be,If),y(Xo,Be,null),e(Be,Sf),y(Yo,Be,null),e(Be,Df),e(Be,Ri),e(Ri,Wf),e(Be,Qf),y(Zo,Be,null),f(o,pc,g),f(o,io,g),e(io,en),e(en,Vi),y(Ps,Vi,null),e(io,Bf),e(io,Gi),e(Gi,Uf),f(o,fc,g),f(o,Ve,g),y(Ns,Ve,null),e(Ve,Hf),e(Ve,Ki),e(Ki,Rf),e(Ve,Vf),e(Ve,As),e(As,Gf),e(As,ha),e(ha,Kf),e(As,Jf),e(Ve,Xf),e(Ve,Is),e(Is,Yf),e(Is,Ss),e(Ss,Zf),e(Is,eg),e(Ve,tg),e(Ve,Ne),y(Ds,Ne,null),e(Ne,og),e(Ne,lo),e(lo,ng),e(lo,pa),e(pa,sg),e(lo,rg),e(lo,Ji),e(Ji,ag),e(lo,ig),e(Ne,lg),y(tn,Ne,null),e(Ne,dg),y(on,Ne,null),e(Ne,cg),y(nn,Ne,null),e(Ne,mg),y(sn,Ne,null),e(Ne,hg),y(rn,Ne,null),f(o,gc,g),f(o,co,g),e(co,an),e(an,Xi),y(Ws,Xi,null),e(co,pg),e(co,Yi),e(Yi,fg),f(o,uc,g),f(o,Ge,g),y(Qs,Ge,null),e(Ge,gg),e(Ge,Zi),e(Zi,ug),e(Ge,_g),e(Ge,Bs),e(Bs,wg),e(Bs,fa),e(fa,kg),e(Bs,bg),e(Ge,vg),e(Ge,Us),e(Us,Tg),e(Us,Hs),e(Hs,yg),e(Us,$g),e(Ge,Lg),e(Ge,at),y(Rs,at,null),e(at,xg),e(at,mo),e(mo,Fg),e(mo,ga),e(ga,Mg),e(mo,Eg),e(mo,el),e(el,zg),e(mo,qg),e(at,Cg),y(ln,at,null),e(at,jg),y(dn,at,null),f(o,_c,g),f(o,ho,g),e(ho,cn),e(cn,tl),y(Vs,tl,null),e(ho,Og),e(ho,ol),e(ol,Pg),f(o,wc,g),f(o,Ke,g),y(Gs,Ke,null),e(Ke,Ng),e(Ke,nl),e(nl,Ag),e(Ke,Ig),e(Ke,Ks),e(Ks,Sg),e(Ks,ua),e(ua,Dg),e(Ks,Wg),e(Ke,Qg),e(Ke,Js),e(Js,Bg),e(Js,Xs),e(Xs,Ug),e(Js,Hg),e(Ke,Rg),e(Ke,Ye),y(Ys,Ye,null),e(Ye,Vg),e(Ye,po),e(po,Gg),e(po,_a),e(_a,Kg),e(po,Jg),e(po,sl),e(sl,Xg),e(po,Yg),e(Ye,Zg),y(mn,Ye,null),e(Ye,eu),y(hn,Ye,null),e(Ye,tu),y(pn,Ye,null),f(o,kc,g),f(o,fo,g),e(fo,fn),e(fn,rl),y(Zs,rl,null),e(fo,ou),e(fo,al),e(al,nu),f(o,bc,g),f(o,Je,g),y(er,Je,null),e(Je,su),e(Je,go),e(go,ru),e(go,il),e(il,au),e(go,iu),e(go,ll),e(ll,lu),e(go,du),e(Je,cu),e(Je,tr),e(tr,mu),e(tr,wa),e(wa,hu),e(tr,pu),e(Je,fu),e(Je,or),e(or,gu),e(or,nr),e(nr,uu),e(or,_u),e(Je,wu),e(Je,it),y(sr,it,null),e(it,ku),e(it,uo),e(uo,bu),e(uo,ka),e(ka,vu),e(uo,Tu),e(uo,dl),e(dl,yu),e(uo,$u),e(it,Lu),y(gn,it,null),e(it,xu),y(un,it,null),f(o,vc,g),f(o,_o,g),e(_o,_n),e(_n,cl),y(rr,cl,null),e(_o,Fu),e(_o,ml),e(ml,Mu),f(o,Tc,g),f(o,ze,g),y(ar,ze,null),e(ze,Eu),e(ze,hl),e(hl,zu),e(ze,qu),e(ze,ir),e(ir,Cu),e(ir,ba),e(ba,ju),e(ir,Ou),e(ze,Pu),e(ze,lr),e(lr,Nu),e(lr,dr),e(dr,Au),e(lr,Iu),e(ze,Su),y(wn,ze,null),e(ze,Du),e(ze,wo),e(wo,Wu),e(wo,va),e(va,Qu),e(wo,Bu),e(wo,cr),e(cr,Uu),e(wo,Hu),e(ze,Ru),e(ze,mr),e(mr,Vu),e(mr,pl),e(pl,Gu),e(mr,Ku),e(ze,Ju),e(ze,bt),y(hr,bt,null),e(bt,Xu),e(bt,ko),e(ko,Yu),e(ko,Ta),e(Ta,Zu),e(ko,e_),e(ko,fl),e(fl,t_),e(ko,o_),e(bt,n_),y(kn,bt,null),f(o,yc,g),f(o,bo,g),e(bo,bn),e(bn,gl),y(pr,gl,null),e(bo,s_),e(bo,ul),e(ul,r_),f(o,$c,g),f(o,Ie,g),y(fr,Ie,null),e(Ie,a_),e(Ie,gr),e(gr,i_),e(gr,_l),e(_l,l_),e(gr,d_),e(Ie,c_),e(Ie,ur),e(ur,m_),e(ur,ya),e(ya,h_),e(ur,p_),e(Ie,f_),e(Ie,_r),e(_r,g_),e(_r,wr),e(wr,u_),e(_r,__),e(Ie,w_),y(vn,Ie,null),e(Ie,k_),e(Ie,Ze),y(kr,Ze,null),e(Ze,b_),e(Ze,vo),e(vo,v_),e(vo,$a),e($a,T_),e(vo,y_),e(vo,wl),e(wl,$_),e(vo,L_),e(Ze,x_),y(Tn,Ze,null),e(Ze,F_),y(yn,Ze,null),e(Ze,M_),y($n,Ze,null),f(o,Lc,g),f(o,To,g),e(To,Ln),e(Ln,kl),y(br,kl,null),e(To,E_),e(To,bl),e(bl,z_),f(o,xc,g),f(o,Se,g),y(vr,Se,null),e(Se,q_),e(Se,yo),e(yo,C_),e(yo,vl),e(vl,j_),e(yo,O_),e(yo,Tl),e(Tl,P_),e(yo,N_),e(Se,A_),e(Se,Tr),e(Tr,I_),e(Tr,La),e(La,S_),e(Tr,D_),e(Se,W_),e(Se,yr),e(yr,Q_),e(yr,$r),e($r,B_),e(yr,U_),e(Se,H_),y(xn,Se,null),e(Se,R_),e(Se,et),y(Lr,et,null),e(et,V_),e(et,$o),e($o,G_),e($o,xa),e(xa,K_),e($o,J_),e($o,yl),e(yl,X_),e($o,Y_),e(et,Z_),y(Fn,et,null),e(et,ew),y(Mn,et,null),e(et,tw),y(En,et,null),f(o,Fc,g),f(o,Lo,g),e(Lo,zn),e(zn,$l),y(xr,$l,null),e(Lo,ow),e(Lo,Ll),e(Ll,nw),f(o,Mc,g),f(o,De,g),y(Fr,De,null),e(De,sw),e(De,xl),e(xl,rw),e(De,aw),e(De,Mr),e(Mr,iw),e(Mr,Fa),e(Fa,lw),e(Mr,dw),e(De,cw),e(De,Er),e(Er,mw),e(Er,zr),e(zr,hw),e(Er,pw),e(De,fw),y(qn,De,null),e(De,gw),e(De,tt),y(qr,tt,null),e(tt,uw),e(tt,xo),e(xo,_w),e(xo,Ma),e(Ma,ww),e(xo,kw),e(xo,Fl),e(Fl,bw),e(xo,vw),e(tt,Tw),y(Cn,tt,null),e(tt,yw),y(jn,tt,null),e(tt,$w),y(On,tt,null),f(o,Ec,g),f(o,Fo,g),e(Fo,Pn),e(Pn,Ml),y(Cr,Ml,null),e(Fo,Lw),e(Fo,El),e(El,xw),f(o,zc,g),f(o,We,g),y(jr,We,null),e(We,Fw),e(We,zl),e(zl,Mw),e(We,Ew),e(We,Or),e(Or,zw),e(Or,Ea),e(Ea,qw),e(Or,Cw),e(We,jw),e(We,Pr),e(Pr,Ow),e(Pr,Nr),e(Nr,Pw),e(Pr,Nw),e(We,Aw),y(Nn,We,null),e(We,Iw),e(We,ot),y(Ar,ot,null),e(ot,Sw),e(ot,Mo),e(Mo,Dw),e(Mo,za),e(za,Ww),e(Mo,Qw),e(Mo,ql),e(ql,Bw),e(Mo,Uw),e(ot,Hw),y(An,ot,null),e(ot,Rw),y(In,ot,null),e(ot,Vw),y(Sn,ot,null),f(o,qc,g),f(o,Eo,g),e(Eo,Dn),e(Dn,Cl),y(Ir,Cl,null),e(Eo,Gw),e(Eo,jl),e(jl,Kw),f(o,Cc,g),f(o,Qe,g),y(Sr,Qe,null),e(Qe,Jw),e(Qe,Ol),e(Ol,Xw),e(Qe,Yw),e(Qe,Dr),e(Dr,Zw),e(Dr,qa),e(qa,ek),e(Dr,tk),e(Qe,ok),e(Qe,Wr),e(Wr,nk),e(Wr,Qr),e(Qr,sk),e(Wr,rk),e(Qe,ak),y(Wn,Qe,null),e(Qe,ik),e(Qe,lt),y(Br,lt,null),e(lt,lk),e(lt,zo),e(zo,dk),e(zo,Ca),e(Ca,ck),e(zo,mk),e(zo,Pl),e(Pl,hk),e(zo,pk),e(lt,fk),y(Qn,lt,null),e(lt,gk),y(Bn,lt,null),jc=!0},p(o,[g]){const Ur={};g&2&&(Ur.$$scope={dirty:g,ctx:o}),Wo.$set(Ur);const Nl={};g&2&&(Nl.$$scope={dirty:g,ctx:o}),Go.$set(Nl);const Al={};g&2&&(Al.$$scope={dirty:g,ctx:o}),Ko.$set(Al);const Il={};g&2&&(Il.$$scope={dirty:g,ctx:o}),Xo.$set(Il);const Hr={};g&2&&(Hr.$$scope={dirty:g,ctx:o}),Yo.$set(Hr);const Sl={};g&2&&(Sl.$$scope={dirty:g,ctx:o}),Zo.$set(Sl);const Dl={};g&2&&(Dl.$$scope={dirty:g,ctx:o}),tn.$set(Dl);const Wl={};g&2&&(Wl.$$scope={dirty:g,ctx:o}),on.$set(Wl);const Rr={};g&2&&(Rr.$$scope={dirty:g,ctx:o}),nn.$set(Rr);const Ql={};g&2&&(Ql.$$scope={dirty:g,ctx:o}),sn.$set(Ql);const Bl={};g&2&&(Bl.$$scope={dirty:g,ctx:o}),rn.$set(Bl);const Ul={};g&2&&(Ul.$$scope={dirty:g,ctx:o}),ln.$set(Ul);const Hl={};g&2&&(Hl.$$scope={dirty:g,ctx:o}),dn.$set(Hl);const Rl={};g&2&&(Rl.$$scope={dirty:g,ctx:o}),mn.$set(Rl);const Vl={};g&2&&(Vl.$$scope={dirty:g,ctx:o}),hn.$set(Vl);const _t={};g&2&&(_t.$$scope={dirty:g,ctx:o}),pn.$set(_t);const Gl={};g&2&&(Gl.$$scope={dirty:g,ctx:o}),gn.$set(Gl);const Kl={};g&2&&(Kl.$$scope={dirty:g,ctx:o}),un.$set(Kl);const Jl={};g&2&&(Jl.$$scope={dirty:g,ctx:o}),wn.$set(Jl);const qo={};g&2&&(qo.$$scope={dirty:g,ctx:o}),kn.$set(qo);const Xl={};g&2&&(Xl.$$scope={dirty:g,ctx:o}),vn.$set(Xl);const Yl={};g&2&&(Yl.$$scope={dirty:g,ctx:o}),Tn.$set(Yl);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:o}),yn.$set(Vr);const Zl={};g&2&&(Zl.$$scope={dirty:g,ctx:o}),$n.$set(Zl);const ed={};g&2&&(ed.$$scope={dirty:g,ctx:o}),xn.$set(ed);const td={};g&2&&(td.$$scope={dirty:g,ctx:o}),Fn.$set(td);const qe={};g&2&&(qe.$$scope={dirty:g,ctx:o}),Mn.$set(qe);const od={};g&2&&(od.$$scope={dirty:g,ctx:o}),En.$set(od);const nd={};g&2&&(nd.$$scope={dirty:g,ctx:o}),qn.$set(nd);const sd={};g&2&&(sd.$$scope={dirty:g,ctx:o}),Cn.$set(sd);const rd={};g&2&&(rd.$$scope={dirty:g,ctx:o}),jn.$set(rd);const Co={};g&2&&(Co.$$scope={dirty:g,ctx:o}),On.$set(Co);const ad={};g&2&&(ad.$$scope={dirty:g,ctx:o}),Nn.$set(ad);const jo={};g&2&&(jo.$$scope={dirty:g,ctx:o}),An.$set(jo);const id={};g&2&&(id.$$scope={dirty:g,ctx:o}),In.$set(id);const ld={};g&2&&(ld.$$scope={dirty:g,ctx:o}),Sn.$set(ld);const Gr={};g&2&&(Gr.$$scope={dirty:g,ctx:o}),Wn.$set(Gr);const dd={};g&2&&(dd.$$scope={dirty:g,ctx:o}),Qn.$set(dd);const cd={};g&2&&(cd.$$scope={dirty:g,ctx:o}),Bn.$set(cd)},i(o){jc||($(d.$$.fragment,o),$(ee.$$.fragment,o),$(oe.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Wo.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ms.$$.fragment,o),$(hs.$$.fragment,o),$(ps.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),$(ws.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(Fs.$$.fragment,o),$(Go.$$.fragment,o),$(Ko.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Os.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(Ps.$$.fragment,o),$(Ns.$$.fragment,o),$(Ds.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),$(Ws.$$.fragment,o),$(Qs.$$.fragment,o),$(Rs.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Vs.$$.fragment,o),$(Gs.$$.fragment,o),$(Ys.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(pn.$$.fragment,o),$(Zs.$$.fragment,o),$(er.$$.fragment,o),$(sr.$$.fragment,o),$(gn.$$.fragment,o),$(un.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(wn.$$.fragment,o),$(hr.$$.fragment,o),$(kn.$$.fragment,o),$(pr.$$.fragment,o),$(fr.$$.fragment,o),$(vn.$$.fragment,o),$(kr.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$($n.$$.fragment,o),$(br.$$.fragment,o),$(vr.$$.fragment,o),$(xn.$$.fragment,o),$(Lr.$$.fragment,o),$(Fn.$$.fragment,o),$(Mn.$$.fragment,o),$(En.$$.fragment,o),$(xr.$$.fragment,o),$(Fr.$$.fragment,o),$(qn.$$.fragment,o),$(qr.$$.fragment,o),$(Cn.$$.fragment,o),$(jn.$$.fragment,o),$(On.$$.fragment,o),$(Cr.$$.fragment,o),$(jr.$$.fragment,o),$(Nn.$$.fragment,o),$(Ar.$$.fragment,o),$(An.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(Ir.$$.fragment,o),$(Sr.$$.fragment,o),$(Wn.$$.fragment,o),$(Br.$$.fragment,o),$(Qn.$$.fragment,o),$(Bn.$$.fragment,o),jc=!0)},o(o){L(d.$$.fragment,o),L(ee.$$.fragment,o),L(oe.$$.fragment,o),L(Kn.$$.fragment,o),L(Jn.$$.fragment,o),L(Xn.$$.fragment,o),L(Yn.$$.fragment,o),L(Wo.$$.fragment,o),L(es.$$.fragment,o),L(ts.$$.fragment,o),L(os.$$.fragment,o),L(ns.$$.fragment,o),L(rs.$$.fragment,o),L(as.$$.fragment,o),L(is.$$.fragment,o),L(ls.$$.fragment,o),L(ds.$$.fragment,o),L(cs.$$.fragment,o),L(ms.$$.fragment,o),L(hs.$$.fragment,o),L(ps.$$.fragment,o),L(fs.$$.fragment,o),L(gs.$$.fragment,o),L(us.$$.fragment,o),L(_s.$$.fragment,o),L(ws.$$.fragment,o),L(ks.$$.fragment,o),L(bs.$$.fragment,o),L(vs.$$.fragment,o),L(Fs.$$.fragment,o),L(Go.$$.fragment,o),L(Ko.$$.fragment,o),L(Ms.$$.fragment,o),L(Es.$$.fragment,o),L(Os.$$.fragment,o),L(Xo.$$.fragment,o),L(Yo.$$.fragment,o),L(Zo.$$.fragment,o),L(Ps.$$.fragment,o),L(Ns.$$.fragment,o),L(Ds.$$.fragment,o),L(tn.$$.fragment,o),L(on.$$.fragment,o),L(nn.$$.fragment,o),L(sn.$$.fragment,o),L(rn.$$.fragment,o),L(Ws.$$.fragment,o),L(Qs.$$.fragment,o),L(Rs.$$.fragment,o),L(ln.$$.fragment,o),L(dn.$$.fragment,o),L(Vs.$$.fragment,o),L(Gs.$$.fragment,o),L(Ys.$$.fragment,o),L(mn.$$.fragment,o),L(hn.$$.fragment,o),L(pn.$$.fragment,o),L(Zs.$$.fragment,o),L(er.$$.fragment,o),L(sr.$$.fragment,o),L(gn.$$.fragment,o),L(un.$$.fragment,o),L(rr.$$.fragment,o),L(ar.$$.fragment,o),L(wn.$$.fragment,o),L(hr.$$.fragment,o),L(kn.$$.fragment,o),L(pr.$$.fragment,o),L(fr.$$.fragment,o),L(vn.$$.fragment,o),L(kr.$$.fragment,o),L(Tn.$$.fragment,o),L(yn.$$.fragment,o),L($n.$$.fragment,o),L(br.$$.fragment,o),L(vr.$$.fragment,o),L(xn.$$.fragment,o),L(Lr.$$.fragment,o),L(Fn.$$.fragment,o),L(Mn.$$.fragment,o),L(En.$$.fragment,o),L(xr.$$.fragment,o),L(Fr.$$.fragment,o),L(qn.$$.fragment,o),L(qr.$$.fragment,o),L(Cn.$$.fragment,o),L(jn.$$.fragment,o),L(On.$$.fragment,o),L(Cr.$$.fragment,o),L(jr.$$.fragment,o),L(Nn.$$.fragment,o),L(Ar.$$.fragment,o),L(An.$$.fragment,o),L(In.$$.fragment,o),L(Sn.$$.fragment,o),L(Ir.$$.fragment,o),L(Sr.$$.fragment,o),L(Wn.$$.fragment,o),L(Br.$$.fragment,o),L(Qn.$$.fragment,o),L(Bn.$$.fragment,o),jc=!1},d(o){t(l),o&&t(k),o&&t(h),x(d),o&&t(J),o&&t(z),x(ee),o&&t(le),o&&t(G),o&&t(j),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(C),o&&t(B),o&&t(re),o&&t(Te),o&&t(me),o&&t(ye),o&&t(I),x(oe),o&&t(fd),o&&t($e),o&&t(yd),o&&t(wt),o&&t(xd),o&&t(kt),o&&t(Fd),o&&t(No),o&&t(Md),o&&t(Ao),o&&t(Ed),o&&t(Xe),o&&t(Id),o&&t(Io),o&&t(Sd),o&&t(jt),x(Kn),o&&t(Dd),o&&t(Ot),o&&t(Wd),x(Jn,o),o&&t(Qd),o&&t(Pt),x(Xn),o&&t(Bd),o&&t(He),x(Yn),x(Wo),o&&t(Ud),o&&t(St),x(es),o&&t(Hd),o&&t(gt),x(ts),o&&t(Rd),o&&t(Dt),x(os),o&&t(Vd),o&&t(ut),x(ns),o&&t(Gd),o&&t(Wt),x(rs),o&&t(Kd),o&&t(Qt),x(as),o&&t(Jd),o&&t(Bt),x(is),o&&t(Xd),o&&t(Ut),x(ls),o&&t(Yd),o&&t(Ht),x(ds),o&&t(Zd),o&&t(Rt),x(cs),o&&t(ec),o&&t(Vt),x(ms),o&&t(tc),o&&t(Gt),x(hs),o&&t(oc),o&&t(Kt),x(ps),o&&t(nc),o&&t(Jt),x(fs),o&&t(sc),o&&t(Xt),x(gs),o&&t(rc),o&&t(Yt),x(us),o&&t(ac),o&&t(Zt),x(_s),o&&t(ic),o&&t(eo),x(ws),o&&t(lc),o&&t(to),x(ks),o&&t(dc),o&&t(oo),x(bs),o&&t(cc),o&&t(Pe),x(vs),x(Fs),x(Go),x(Ko),o&&t(mc),o&&t(ro),x(Ms),o&&t(hc),o&&t(Re),x(Es),x(Os),x(Xo),x(Yo),x(Zo),o&&t(pc),o&&t(io),x(Ps),o&&t(fc),o&&t(Ve),x(Ns),x(Ds),x(tn),x(on),x(nn),x(sn),x(rn),o&&t(gc),o&&t(co),x(Ws),o&&t(uc),o&&t(Ge),x(Qs),x(Rs),x(ln),x(dn),o&&t(_c),o&&t(ho),x(Vs),o&&t(wc),o&&t(Ke),x(Gs),x(Ys),x(mn),x(hn),x(pn),o&&t(kc),o&&t(fo),x(Zs),o&&t(bc),o&&t(Je),x(er),x(sr),x(gn),x(un),o&&t(vc),o&&t(_o),x(rr),o&&t(Tc),o&&t(ze),x(ar),x(wn),x(hr),x(kn),o&&t(yc),o&&t(bo),x(pr),o&&t($c),o&&t(Ie),x(fr),x(vn),x(kr),x(Tn),x(yn),x($n),o&&t(Lc),o&&t(To),x(br),o&&t(xc),o&&t(Se),x(vr),x(xn),x(Lr),x(Fn),x(Mn),x(En),o&&t(Fc),o&&t(Lo),x(xr),o&&t(Mc),o&&t(De),x(Fr),x(qn),x(qr),x(Cn),x(jn),x(On),o&&t(Ec),o&&t(Fo),x(Cr),o&&t(zc),o&&t(We),x(jr),x(Nn),x(Ar),x(An),x(In),x(Sn),o&&t(qc),o&&t(Eo),x(Ir),o&&t(Cc),o&&t(Qe),x(Sr),x(Wn),x(Br),x(Qn),x(Bn)}}}const sy={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function ry(M){return _T(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hy extends pT{constructor(l){super();fT(this,l,ry,ny,gT,{})}}export{hy as default,sy as metadata};
