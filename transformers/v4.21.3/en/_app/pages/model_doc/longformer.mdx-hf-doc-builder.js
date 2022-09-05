import{S as pT,i as fT,s as gT,e as r,k as c,w as v,t as n,Y as Ot,M as uT,c as a,d as o,m,a as i,x as T,h as s,Z as Pt,b as _,G as e,g as f,y,q as $,o as L,B as x,v as _T,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ae}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerConfig, LongformerModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function kT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function bT(M){let l,k,h,p,b;return p=new Le({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){l=r("p"),k=n("Examples:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Examples:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function vT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function TT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForMaskedLM

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)`}}),{c(){l=r("p"),k=n("Mask filling example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Mask filling example:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function yT(M){let l,k;return l=new Le({props:{code:`TXT = (
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
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function LT(M){let l,k,h,p,b;return p=new Le({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of single-label classification:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example of single-label classification:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function xT(M){let l,k;return l=new Le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = LongformerForSequenceClassification.from_pretrained("jpelhaw/longformer-base-plagiarism-detection", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of multi-label classification:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example of multi-label classification:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function MT(M){let l,k;return l=new Le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function qT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function zT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function CT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
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
[<span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function jT(M){let l,k;return l=new Le({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.63</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function OT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function PT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
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
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){l=r("p"),k=n("Examples:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Examples:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function NT(M){let l,k,h,p,b,d,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var Fe=i(P);oe=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(l),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function AT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function IT(M){let l,k,h,p,b,d,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var Fe=i(P);oe=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(l),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function ST(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function DT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function WT(M){let l,k;return l=new Le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.44</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function QT(M){let l,k,h,p,b,d,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var Fe=i(P);oe=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(l),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function BT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function UT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function HT(M){let l,k;return l=new Le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.96</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function RT(M){let l,k,h,p,b,d,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var Fe=i(P);oe=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(l),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function VT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function GT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function KT(M){let l,k;return l=new Le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function JT(M){let l,k,h,p,b,d,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var Fe=i(P);oe=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(l),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function XT(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function YT(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function ZT(M){let l,k;return l=new Le({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),{c(){v(l.$$.fragment)},l(h){T(l.$$.fragment,h)},m(h,p){y(l,h,p),k=!0},p:je,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function ey(M){let l,k,h,p,b,d,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var Fe=i(P);oe=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a(I,"CODE",{});var ke=i(B);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,l,F),e(l,k),f(w,h,F),f(w,p,F),e(p,b),e(b,d),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,B),e(B,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(l),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function oy(M){let l,k,h,p,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){f(d,l,u),e(l,k),e(l,h),e(h,p),e(l,b)},d(d){d&&o(l)}}}function ty(M){let l,k,h,p,b;return p=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(o),h=m(d),T(p.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,h,u),y(p,d,u),b=!0},p:je,i(d){b||($(p.$$.fragment,d),b=!0)},o(d){L(p.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(p,d)}}}function ny(M){let l,k,h,p,b,d,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,U,de,se,W,ge,ce,C,ue,B,re,K,H,ae,_e,N,ie,R,we,w,F,Y,Te,me,A,be,xe,Fe,O,V,Me,ye,I,ke,ve,te,Ee,oi,Qm,fd,$e,Bm,gd,sT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',ud,_d,rT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',wd,kd,aT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',bd,ti,Um,Hm,ni,Rm,Vm,si,Gm,Km,vd,iT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Td,ri,Jm,Xm,yd,ko,Ym,$d,lT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ld,ai,Zm,eh,xd,bo,oh,ii,th,nh,li,sh,rh,Fd,Nt,di,ah,ih,ci,lh,Md,At,dh,Kr,ch,mh,Ed,Xe,hh,qd,dT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',zd,Cd,cT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',jd,Od,mT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Pd,Nd,hT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ad,Id,It,ph,Gn,fh,gh,Sd,Oo,St,mi,Kn,uh,hi,_h,Dd,Po,Jr,wh,kh,Xr,bh,vh,Wd,Jn,Qd,No,Dt,pi,Xn,Th,fi,yh,Bd,He,Yn,$h,Ao,Lh,Yr,xh,Fh,Zr,Mh,Eh,qh,Io,zh,ea,Ch,jh,Zn,Oh,Ph,Nh,So,Ah,oa,Ih,Sh,ta,Dh,Wh,Qh,Wt,Ud,Do,Qt,gi,es,Bh,ui,Uh,Hd,uo,os,Hh,_i,Rh,Vh,Bt,na,Gh,Kh,sa,Jh,Xh,Rd,Wo,Ut,wi,ts,Yh,ki,Zh,Vd,_o,ns,ep,ss,op,bi,tp,np,sp,Ht,ra,rp,ap,aa,ip,lp,Gd,Qo,Rt,vi,rs,dp,Ti,cp,Kd,Bo,as,mp,yi,hp,Jd,Uo,is,pp,$i,fp,Xd,Ho,ls,gp,Li,up,Yd,Ro,ds,_p,xi,wp,Zd,Vo,cs,kp,Fi,bp,ec,Go,ms,vp,Mi,Tp,oc,Ko,hs,yp,Ei,$p,tc,Jo,ps,Lp,qi,xp,nc,Xo,fs,Fp,zi,Mp,sc,Yo,gs,Ep,Ci,qp,rc,Zo,us,zp,ji,Cp,ac,et,_s,jp,Oi,Op,ic,ot,ws,Pp,Pi,Np,lc,tt,ks,Ap,Ni,Ip,dc,nt,Vt,Ai,bs,Sp,Ii,Dp,cc,Pe,vs,Wp,Si,Qp,Bp,Ts,Up,ia,Hp,Rp,Vp,ys,Gp,$s,Kp,Jp,Xp,st,Yp,la,Zp,ef,Ls,of,tf,nf,xs,sf,Di,rf,af,lf,ro,Fs,df,rt,cf,da,mf,hf,Wi,pf,ff,gf,Gt,uf,Kt,mc,at,Jt,Qi,Ms,_f,Bi,wf,hc,Re,Es,kf,qs,bf,Ui,vf,Tf,yf,zs,$f,ca,Lf,xf,Ff,Cs,Mf,js,Ef,qf,zf,Be,Os,Cf,it,jf,ma,Of,Pf,Hi,Nf,Af,If,Xt,Sf,Yt,Df,Ri,Wf,Qf,Zt,pc,lt,en,Vi,Ps,Bf,Gi,Uf,fc,Ve,Ns,Hf,Ki,Rf,Vf,As,Gf,ha,Kf,Jf,Xf,Is,Yf,Ss,Zf,eg,og,Ne,Ds,tg,dt,ng,pa,sg,rg,Ji,ag,ig,lg,on,dg,tn,cg,nn,mg,sn,hg,rn,gc,ct,an,Xi,Ws,pg,Yi,fg,uc,Ge,Qs,gg,Zi,ug,_g,Bs,wg,fa,kg,bg,vg,Us,Tg,Hs,yg,$g,Lg,ao,Rs,xg,mt,Fg,ga,Mg,Eg,el,qg,zg,Cg,ln,jg,dn,_c,ht,cn,ol,Vs,Og,tl,Pg,wc,Ke,Gs,Ng,nl,Ag,Ig,Ks,Sg,ua,Dg,Wg,Qg,Js,Bg,Xs,Ug,Hg,Rg,Ye,Ys,Vg,pt,Gg,_a,Kg,Jg,sl,Xg,Yg,Zg,mn,eu,hn,ou,pn,kc,ft,fn,rl,Zs,tu,al,nu,bc,Je,er,su,gt,ru,il,au,iu,ll,lu,du,cu,or,mu,wa,hu,pu,fu,tr,gu,nr,uu,_u,wu,io,sr,ku,ut,bu,ka,vu,Tu,dl,yu,$u,Lu,gn,xu,un,vc,_t,_n,cl,rr,Fu,ml,Mu,Tc,qe,ar,Eu,hl,qu,zu,ir,Cu,ba,ju,Ou,Pu,lr,Nu,dr,Au,Iu,Su,wn,Du,wt,Wu,va,Qu,Bu,cr,Uu,Hu,Ru,mr,Vu,pl,Gu,Ku,Ju,vo,hr,Xu,kt,Yu,Ta,Zu,e_,fl,o_,t_,n_,kn,yc,bt,bn,gl,pr,s_,ul,r_,$c,Ie,fr,a_,gr,i_,_l,l_,d_,c_,ur,m_,ya,h_,p_,f_,_r,g_,wr,u_,__,w_,vn,k_,Ze,kr,b_,vt,v_,$a,T_,y_,wl,$_,L_,x_,Tn,F_,yn,M_,$n,Lc,Tt,Ln,kl,br,E_,bl,q_,xc,Se,vr,z_,yt,C_,vl,j_,O_,Tl,P_,N_,A_,Tr,I_,La,S_,D_,W_,yr,Q_,$r,B_,U_,H_,xn,R_,eo,Lr,V_,$t,G_,xa,K_,J_,yl,X_,Y_,Z_,Fn,ew,Mn,ow,En,Fc,Lt,qn,$l,xr,tw,Ll,nw,Mc,De,Fr,sw,xl,rw,aw,Mr,iw,Fa,lw,dw,cw,Er,mw,qr,hw,pw,fw,zn,gw,oo,zr,uw,xt,_w,Ma,ww,kw,Fl,bw,vw,Tw,Cn,yw,jn,$w,On,Ec,Ft,Pn,Ml,Cr,Lw,El,xw,qc,We,jr,Fw,ql,Mw,Ew,Or,qw,Ea,zw,Cw,jw,Pr,Ow,Nr,Pw,Nw,Aw,Nn,Iw,to,Ar,Sw,Mt,Dw,qa,Ww,Qw,zl,Bw,Uw,Hw,An,Rw,In,Vw,Sn,zc,Et,Dn,Cl,Ir,Gw,jl,Kw,Cc,Qe,Sr,Jw,Ol,Xw,Yw,Dr,Zw,za,ek,ok,tk,Wr,nk,Qr,sk,rk,ak,Wn,ik,lo,Br,lk,qt,dk,Ca,ck,mk,Pl,hk,pk,fk,Qn,gk,Bn,jc;return d=new Oe({}),ee=new Oe({}),te=new Oe({}),Kn=new Oe({}),Jn=new Le({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),Xn=new Oe({}),Yn=new Q({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/configuration_longformer.py#L39"}}),Wt=new Ce({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[wT]},$$scope:{ctx:M}}}),es=new Oe({}),os=new Q({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/tokenization_longformer.py#L67"}}),ts=new Oe({}),ns=new Q({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/tokenization_longformer_fast.py#L85"}}),rs=new Oe({}),as=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L57"}}),is=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L100"}}),ls=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L148"}}),ds=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L194"}}),cs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L243"}}),ms=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L289"}}),hs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L337"}}),ps=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),fs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),gs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),us=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),_s=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),ws=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),ks=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),bs=new Oe({}),vs=new Q({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L1498"}}),Fs=new Q({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L1609",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gt=new Ae({props:{$$slots:{default:[kT]},$$scope:{ctx:M}}}),Kt=new Ce({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[bT]},$$scope:{ctx:M}}}),Ms=new Oe({}),Es=new Q({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L1733"}}),Os=new Q({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L1752",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xt=new Ae({props:{$$slots:{default:[vT]},$$scope:{ctx:M}}}),Yt=new Ce({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[TT]},$$scope:{ctx:M}}}),Zt=new Ce({props:{anchor:"transformers.LongformerForMaskedLM.forward.example-2",$$slots:{default:[yT]},$$scope:{ctx:M}}}),Ps=new Oe({}),Ns=new Q({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L1846"}}),Ds=new Q({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L1861",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new Ae({props:{$$slots:{default:[$T]},$$scope:{ctx:M}}}),tn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[LT]},$$scope:{ctx:M}}}),nn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[xT]},$$scope:{ctx:M}}}),sn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[FT]},$$scope:{ctx:M}}}),rn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[MT]},$$scope:{ctx:M}}}),Ws=new Oe({}),Qs=new Q({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L2205"}}),Rs=new Q({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L2216",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new Ae({props:{$$slots:{default:[ET]},$$scope:{ctx:M}}}),dn=new Ce({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[qT]},$$scope:{ctx:M}}}),Vs=new Oe({}),Gs=new Q({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L2115"}}),Ys=new Q({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L2130",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mn=new Ae({props:{$$slots:{default:[zT]},$$scope:{ctx:M}}}),hn=new Ce({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[CT]},$$scope:{ctx:M}}}),pn=new Ce({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[jT]},$$scope:{ctx:M}}}),Zs=new Oe({}),er=new Q({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L1975"}}),sr=new Q({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_longformer.py#L1989",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new Ae({props:{$$slots:{default:[OT]},$$scope:{ctx:M}}}),un=new Ce({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[PT]},$$scope:{ctx:M}}}),rr=new Oe({}),ar=new Q({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2011"}}),wn=new Ae({props:{$$slots:{default:[NT]},$$scope:{ctx:M}}}),hr=new Q({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2033"}}),kn=new Ae({props:{$$slots:{default:[AT]},$$scope:{ctx:M}}}),pr=new Oe({}),fr=new Q({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2084"}}),vn=new Ae({props:{$$slots:{default:[IT]},$$scope:{ctx:M}}}),kr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2101",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ae({props:{$$slots:{default:[ST]},$$scope:{ctx:M}}}),yn=new Ce({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[DT]},$$scope:{ctx:M}}}),$n=new Ce({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[WT]},$$scope:{ctx:M}}}),br=new Oe({}),vr=new Q({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2181"}}),xn=new Ae({props:{$$slots:{default:[QT]},$$scope:{ctx:M}}}),Lr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2196",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fn=new Ae({props:{$$slots:{default:[BT]},$$scope:{ctx:M}}}),Mn=new Ce({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[UT]},$$scope:{ctx:M}}}),En=new Ce({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[HT]},$$scope:{ctx:M}}}),xr=new Oe({}),Fr=new Q({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2335"}}),zn=new Ae({props:{$$slots:{default:[RT]},$$scope:{ctx:M}}}),zr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2347",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Cn=new Ae({props:{$$slots:{default:[VT]},$$scope:{ctx:M}}}),jn=new Ce({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[GT]},$$scope:{ctx:M}}}),On=new Ce({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[KT]},$$scope:{ctx:M}}}),Cr=new Oe({}),jr=new Q({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2572"}}),Nn=new Ae({props:{$$slots:{default:[JT]},$$scope:{ctx:M}}}),Ar=new Q({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2587",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),An=new Ae({props:{$$slots:{default:[XT]},$$scope:{ctx:M}}}),In=new Ce({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[YT]},$$scope:{ctx:M}}}),Sn=new Ce({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[ZT]},$$scope:{ctx:M}}}),Ir=new Oe({}),Sr=new Q({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2436"}}),Wn=new Ae({props:{$$slots:{default:[ey]},$$scope:{ctx:M}}}),Br=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/longformer/modeling_tf_longformer.py#L2456",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"
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
  href="/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new Ae({props:{$$slots:{default:[oy]},$$scope:{ctx:M}}}),Bn=new Ce({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[ty]},$$scope:{ctx:M}}}),{c(){l=r("meta"),k=c(),h=r("h1"),p=r("a"),b=r("span"),v(d.$$.fragment),u=c(),E=r("span"),he=n("Longformer"),J=c(),q=r("h2"),Z=r("a"),S=r("span"),v(ee.$$.fragment),pe=c(),D=r("span"),fe=n("Overview"),le=c(),G=r("p"),P=n("The Longformer model was presented in "),oe=r("a"),X=n("Longformer: The Long-Document Transformer"),z=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),j=c(),ne=r("p"),U=n("The abstract from the paper is the following:"),de=c(),se=r("p"),W=r("em"),ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ce=c(),C=r("p"),ue=n("Tips:"),B=c(),re=r("ul"),K=r("li"),H=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=r("code"),_e=n("token_type_ids"),N=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=r("code"),R=n("tokenizer.sep_token"),we=n(` (or
`),w=r("code"),F=n("</s>"),Y=n(")."),Te=c(),me=r("p"),A=n("This model was contributed by "),be=r("a"),xe=n("beltagy"),Fe=n(". The Authors\u2019 code can be found "),O=r("a"),V=n("here"),Me=n("."),ye=c(),I=r("h2"),ke=r("a"),ve=r("span"),v(te.$$.fragment),Ee=c(),oi=r("span"),Qm=n("Longformer Self Attention"),fd=c(),$e=r("p"),Bm=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),gd=new Ot,ud=n(` previous tokens and
`),_d=new Ot,wd=n(" succeding tokens with "),kd=new Ot,bd=n(` being the window length as defined in
`),ti=r("code"),Um=n("config.attention_window"),Hm=n(". Note that "),ni=r("code"),Rm=n("config.attention_window"),Vm=n(" can be of type "),si=r("code"),Gm=n("List"),Km=n(` to define a
different `),vd=new Ot,Td=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),ri=r("code"),Jm=n("BertSelfAttention"),Xm=n("."),yd=c(),ko=r("p"),Ym=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),$d=new Ot,Ld=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ai=r("em"),Zm=n("symmetric"),eh=n("."),xd=c(),bo=r("p"),oh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ii=r("code"),th=n("global_attention_mask"),nh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),li=r("code"),sh=n("global_attention_mask"),rh=n(":"),Fd=c(),Nt=r("ul"),di=r("li"),ah=n("0: the token attends \u201Clocally\u201D,"),ih=c(),ci=r("li"),lh=n("1: the token attends \u201Cglobally\u201D."),Md=c(),At=r("p"),dh=n("For more information please also refer to "),Kr=r("a"),ch=n("forward()"),mh=n(" method."),Ed=c(),Xe=r("p"),hh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),qd=new Ot,zd=n(` to
`),Cd=new Ot,jd=n(", with "),Od=new Ot,Pd=n(" being the sequence length and "),Nd=new Ot,Ad=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Id=c(),It=r("p"),ph=n("For more information, please refer to the official "),Gn=r("a"),fh=n("paper"),gh=n("."),Sd=c(),Oo=r("h2"),St=r("a"),mi=r("span"),v(Kn.$$.fragment),uh=c(),hi=r("span"),_h=n("Training"),Dd=c(),Po=r("p"),Jr=r("a"),wh=n("LongformerForMaskedLM"),kh=n(" is trained the exact same way "),Xr=r("a"),bh=n("RobertaForMaskedLM"),vh=n(` is
trained and should be used as follows:`),Wd=c(),v(Jn.$$.fragment),Qd=c(),No=r("h2"),Dt=r("a"),pi=r("span"),v(Xn.$$.fragment),Th=c(),fi=r("span"),yh=n("LongformerConfig"),Bd=c(),He=r("div"),v(Yn.$$.fragment),$h=c(),Ao=r("p"),Lh=n("This is the configuration class to store the configuration of a "),Yr=r("a"),xh=n("LongformerModel"),Fh=n(" or a "),Zr=r("a"),Mh=n("TFLongformerModel"),Eh=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),qh=c(),Io=r("p"),zh=n("This is the configuration class to store the configuration of a "),ea=r("a"),Ch=n("LongformerModel"),jh=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Zn=r("a"),Oh=n("allenai/longformer-base-4096"),Ph=n(` architecture with a sequence
length 4,096.`),Nh=c(),So=r("p"),Ah=n("The "),oa=r("a"),Ih=n("LongformerConfig"),Sh=n(" class directly inherits "),ta=r("a"),Dh=n("RobertaConfig"),Wh=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Qh=c(),v(Wt.$$.fragment),Ud=c(),Do=r("h2"),Qt=r("a"),gi=r("span"),v(es.$$.fragment),Bh=c(),ui=r("span"),Uh=n("LongformerTokenizer"),Hd=c(),uo=r("div"),v(os.$$.fragment),Hh=c(),_i=r("p"),Rh=n("Construct a Longformer tokenizer."),Vh=c(),Bt=r("p"),na=r("a"),Gh=n("LongformerTokenizer"),Kh=n(" is identical to "),sa=r("a"),Jh=n("RobertaTokenizer"),Xh=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Rd=c(),Wo=r("h2"),Ut=r("a"),wi=r("span"),v(ts.$$.fragment),Yh=c(),ki=r("span"),Zh=n("LongformerTokenizerFast"),Vd=c(),_o=r("div"),v(ns.$$.fragment),ep=c(),ss=r("p"),op=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),bi=r("em"),tp=n("tokenizers"),np=n(" library)."),sp=c(),Ht=r("p"),ra=r("a"),rp=n("LongformerTokenizerFast"),ap=n(" is identical to "),aa=r("a"),ip=n("RobertaTokenizerFast"),lp=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Gd=c(),Qo=r("h2"),Rt=r("a"),vi=r("span"),v(rs.$$.fragment),dp=c(),Ti=r("span"),cp=n("Longformer specific outputs"),Kd=c(),Bo=r("div"),v(as.$$.fragment),mp=c(),yi=r("p"),hp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Jd=c(),Uo=r("div"),v(is.$$.fragment),pp=c(),$i=r("p"),fp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Xd=c(),Ho=r("div"),v(ls.$$.fragment),gp=c(),Li=r("p"),up=n("Base class for masked language models outputs."),Yd=c(),Ro=r("div"),v(ds.$$.fragment),_p=c(),xi=r("p"),wp=n("Base class for outputs of question answering Longformer models."),Zd=c(),Vo=r("div"),v(cs.$$.fragment),kp=c(),Fi=r("p"),bp=n("Base class for outputs of sentence classification models."),ec=c(),Go=r("div"),v(ms.$$.fragment),vp=c(),Mi=r("p"),Tp=n("Base class for outputs of multiple choice Longformer models."),oc=c(),Ko=r("div"),v(hs.$$.fragment),yp=c(),Ei=r("p"),$p=n("Base class for outputs of token classification models."),tc=c(),Jo=r("div"),v(ps.$$.fragment),Lp=c(),qi=r("p"),xp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),nc=c(),Xo=r("div"),v(fs.$$.fragment),Fp=c(),zi=r("p"),Mp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),sc=c(),Yo=r("div"),v(gs.$$.fragment),Ep=c(),Ci=r("p"),qp=n("Base class for masked language models outputs."),rc=c(),Zo=r("div"),v(us.$$.fragment),zp=c(),ji=r("p"),Cp=n("Base class for outputs of question answering Longformer models."),ac=c(),et=r("div"),v(_s.$$.fragment),jp=c(),Oi=r("p"),Op=n("Base class for outputs of sentence classification models."),ic=c(),ot=r("div"),v(ws.$$.fragment),Pp=c(),Pi=r("p"),Np=n("Base class for outputs of multiple choice models."),lc=c(),tt=r("div"),v(ks.$$.fragment),Ap=c(),Ni=r("p"),Ip=n("Base class for outputs of token classification models."),dc=c(),nt=r("h2"),Vt=r("a"),Ai=r("span"),v(bs.$$.fragment),Sp=c(),Ii=r("span"),Dp=n("LongformerModel"),cc=c(),Pe=r("div"),v(vs.$$.fragment),Wp=c(),Si=r("p"),Qp=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Bp=c(),Ts=r("p"),Up=n("This model inherits from "),ia=r("a"),Hp=n("PreTrainedModel"),Rp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=c(),ys=r("p"),Gp=n("This model is also a PyTorch "),$s=r("a"),Kp=n("torch.nn.Module"),Jp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xp=c(),st=r("p"),Yp=n("This class copied code from "),la=r("a"),Zp=n("RobertaModel"),ef=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Ls=r("a"),of=n(`Longformer:
the Long-Document Transformer`),tf=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),nf=c(),xs=r("p"),sf=n("The self-attention module "),Di=r("code"),rf=n("LongformerSelfAttention"),af=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),lf=c(),ro=r("div"),v(Fs.$$.fragment),df=c(),rt=r("p"),cf=n("The "),da=r("a"),mf=n("LongformerModel"),hf=n(" forward method, overrides the "),Wi=r("code"),pf=n("__call__"),ff=n(" special method."),gf=c(),v(Gt.$$.fragment),uf=c(),v(Kt.$$.fragment),mc=c(),at=r("h2"),Jt=r("a"),Qi=r("span"),v(Ms.$$.fragment),_f=c(),Bi=r("span"),wf=n("LongformerForMaskedLM"),hc=c(),Re=r("div"),v(Es.$$.fragment),kf=c(),qs=r("p"),bf=n("Longformer Model with a "),Ui=r("code"),vf=n("language modeling"),Tf=n(" head on top."),yf=c(),zs=r("p"),$f=n("This model inherits from "),ca=r("a"),Lf=n("PreTrainedModel"),xf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff=c(),Cs=r("p"),Mf=n("This model is also a PyTorch "),js=r("a"),Ef=n("torch.nn.Module"),qf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zf=c(),Be=r("div"),v(Os.$$.fragment),Cf=c(),it=r("p"),jf=n("The "),ma=r("a"),Of=n("LongformerForMaskedLM"),Pf=n(" forward method, overrides the "),Hi=r("code"),Nf=n("__call__"),Af=n(" special method."),If=c(),v(Xt.$$.fragment),Sf=c(),v(Yt.$$.fragment),Df=c(),Ri=r("p"),Wf=n("Let\u2019s try a very long input."),Qf=c(),v(Zt.$$.fragment),pc=c(),lt=r("h2"),en=r("a"),Vi=r("span"),v(Ps.$$.fragment),Bf=c(),Gi=r("span"),Uf=n("LongformerForSequenceClassification"),fc=c(),Ve=r("div"),v(Ns.$$.fragment),Hf=c(),Ki=r("p"),Rf=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Vf=c(),As=r("p"),Gf=n("This model inherits from "),ha=r("a"),Kf=n("PreTrainedModel"),Jf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=c(),Is=r("p"),Yf=n("This model is also a PyTorch "),Ss=r("a"),Zf=n("torch.nn.Module"),eg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),og=c(),Ne=r("div"),v(Ds.$$.fragment),tg=c(),dt=r("p"),ng=n("The "),pa=r("a"),sg=n("LongformerForSequenceClassification"),rg=n(" forward method, overrides the "),Ji=r("code"),ag=n("__call__"),ig=n(" special method."),lg=c(),v(on.$$.fragment),dg=c(),v(tn.$$.fragment),cg=c(),v(nn.$$.fragment),mg=c(),v(sn.$$.fragment),hg=c(),v(rn.$$.fragment),gc=c(),ct=r("h2"),an=r("a"),Xi=r("span"),v(Ws.$$.fragment),pg=c(),Yi=r("span"),fg=n("LongformerForMultipleChoice"),uc=c(),Ge=r("div"),v(Qs.$$.fragment),gg=c(),Zi=r("p"),ug=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_g=c(),Bs=r("p"),wg=n("This model inherits from "),fa=r("a"),kg=n("PreTrainedModel"),bg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vg=c(),Us=r("p"),Tg=n("This model is also a PyTorch "),Hs=r("a"),yg=n("torch.nn.Module"),$g=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lg=c(),ao=r("div"),v(Rs.$$.fragment),xg=c(),mt=r("p"),Fg=n("The "),ga=r("a"),Mg=n("LongformerForMultipleChoice"),Eg=n(" forward method, overrides the "),el=r("code"),qg=n("__call__"),zg=n(" special method."),Cg=c(),v(ln.$$.fragment),jg=c(),v(dn.$$.fragment),_c=c(),ht=r("h2"),cn=r("a"),ol=r("span"),v(Vs.$$.fragment),Og=c(),tl=r("span"),Pg=n("LongformerForTokenClassification"),wc=c(),Ke=r("div"),v(Gs.$$.fragment),Ng=c(),nl=r("p"),Ag=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ig=c(),Ks=r("p"),Sg=n("This model inherits from "),ua=r("a"),Dg=n("PreTrainedModel"),Wg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qg=c(),Js=r("p"),Bg=n("This model is also a PyTorch "),Xs=r("a"),Ug=n("torch.nn.Module"),Hg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rg=c(),Ye=r("div"),v(Ys.$$.fragment),Vg=c(),pt=r("p"),Gg=n("The "),_a=r("a"),Kg=n("LongformerForTokenClassification"),Jg=n(" forward method, overrides the "),sl=r("code"),Xg=n("__call__"),Yg=n(" special method."),Zg=c(),v(mn.$$.fragment),eu=c(),v(hn.$$.fragment),ou=c(),v(pn.$$.fragment),kc=c(),ft=r("h2"),fn=r("a"),rl=r("span"),v(Zs.$$.fragment),tu=c(),al=r("span"),nu=n("LongformerForQuestionAnswering"),bc=c(),Je=r("div"),v(er.$$.fragment),su=c(),gt=r("p"),ru=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),il=r("code"),au=n("span start logits"),iu=n(" and "),ll=r("code"),lu=n("span end logits"),du=n(")."),cu=c(),or=r("p"),mu=n("This model inherits from "),wa=r("a"),hu=n("PreTrainedModel"),pu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu=c(),tr=r("p"),gu=n("This model is also a PyTorch "),nr=r("a"),uu=n("torch.nn.Module"),_u=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu=c(),io=r("div"),v(sr.$$.fragment),ku=c(),ut=r("p"),bu=n("The "),ka=r("a"),vu=n("LongformerForQuestionAnswering"),Tu=n(" forward method, overrides the "),dl=r("code"),yu=n("__call__"),$u=n(" special method."),Lu=c(),v(gn.$$.fragment),xu=c(),v(un.$$.fragment),vc=c(),_t=r("h2"),_n=r("a"),cl=r("span"),v(rr.$$.fragment),Fu=c(),ml=r("span"),Mu=n("TFLongformerModel"),Tc=c(),qe=r("div"),v(ar.$$.fragment),Eu=c(),hl=r("p"),qu=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),zu=c(),ir=r("p"),Cu=n("This model inherits from "),ba=r("a"),ju=n("TFPreTrainedModel"),Ou=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu=c(),lr=r("p"),Nu=n("This model is also a "),dr=r("a"),Au=n("tf.keras.Model"),Iu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su=c(),v(wn.$$.fragment),Du=c(),wt=r("p"),Wu=n("This class copies code from "),va=r("a"),Qu=n("TFRobertaModel"),Bu=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),cr=r("a"),Uu=n("Longformer: the Long-Document Transformer"),Hu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ru=c(),mr=r("p"),Vu=n("The self-attention module "),pl=r("code"),Gu=n("TFLongformerSelfAttention"),Ku=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Ju=c(),vo=r("div"),v(hr.$$.fragment),Xu=c(),kt=r("p"),Yu=n("The "),Ta=r("a"),Zu=n("TFLongformerModel"),e_=n(" forward method, overrides the "),fl=r("code"),o_=n("__call__"),t_=n(" special method."),n_=c(),v(kn.$$.fragment),yc=c(),bt=r("h2"),bn=r("a"),gl=r("span"),v(pr.$$.fragment),s_=c(),ul=r("span"),r_=n("TFLongformerForMaskedLM"),$c=c(),Ie=r("div"),v(fr.$$.fragment),a_=c(),gr=r("p"),i_=n("Longformer Model with a "),_l=r("code"),l_=n("language modeling"),d_=n(" head on top."),c_=c(),ur=r("p"),m_=n("This model inherits from "),ya=r("a"),h_=n("TFPreTrainedModel"),p_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),f_=c(),_r=r("p"),g_=n("This model is also a "),wr=r("a"),u_=n("tf.keras.Model"),__=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w_=c(),v(vn.$$.fragment),k_=c(),Ze=r("div"),v(kr.$$.fragment),b_=c(),vt=r("p"),v_=n("The "),$a=r("a"),T_=n("TFLongformerForMaskedLM"),y_=n(" forward method, overrides the "),wl=r("code"),$_=n("__call__"),L_=n(" special method."),x_=c(),v(Tn.$$.fragment),F_=c(),v(yn.$$.fragment),M_=c(),v($n.$$.fragment),Lc=c(),Tt=r("h2"),Ln=r("a"),kl=r("span"),v(br.$$.fragment),E_=c(),bl=r("span"),q_=n("TFLongformerForQuestionAnswering"),xc=c(),Se=r("div"),v(vr.$$.fragment),z_=c(),yt=r("p"),C_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),vl=r("code"),j_=n("span start logits"),O_=n(" and "),Tl=r("code"),P_=n("span end logits"),N_=n(")."),A_=c(),Tr=r("p"),I_=n("This model inherits from "),La=r("a"),S_=n("TFPreTrainedModel"),D_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=c(),yr=r("p"),Q_=n("This model is also a "),$r=r("a"),B_=n("tf.keras.Model"),U_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_=c(),v(xn.$$.fragment),R_=c(),eo=r("div"),v(Lr.$$.fragment),V_=c(),$t=r("p"),G_=n("The "),xa=r("a"),K_=n("TFLongformerForQuestionAnswering"),J_=n(" forward method, overrides the "),yl=r("code"),X_=n("__call__"),Y_=n(" special method."),Z_=c(),v(Fn.$$.fragment),ew=c(),v(Mn.$$.fragment),ow=c(),v(En.$$.fragment),Fc=c(),Lt=r("h2"),qn=r("a"),$l=r("span"),v(xr.$$.fragment),tw=c(),Ll=r("span"),nw=n("TFLongformerForSequenceClassification"),Mc=c(),De=r("div"),v(Fr.$$.fragment),sw=c(),xl=r("p"),rw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),aw=c(),Mr=r("p"),iw=n("This model inherits from "),Fa=r("a"),lw=n("TFPreTrainedModel"),dw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cw=c(),Er=r("p"),mw=n("This model is also a "),qr=r("a"),hw=n("tf.keras.Model"),pw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fw=c(),v(zn.$$.fragment),gw=c(),oo=r("div"),v(zr.$$.fragment),uw=c(),xt=r("p"),_w=n("The "),Ma=r("a"),ww=n("TFLongformerForSequenceClassification"),kw=n(" forward method, overrides the "),Fl=r("code"),bw=n("__call__"),vw=n(" special method."),Tw=c(),v(Cn.$$.fragment),yw=c(),v(jn.$$.fragment),$w=c(),v(On.$$.fragment),Ec=c(),Ft=r("h2"),Pn=r("a"),Ml=r("span"),v(Cr.$$.fragment),Lw=c(),El=r("span"),xw=n("TFLongformerForTokenClassification"),qc=c(),We=r("div"),v(jr.$$.fragment),Fw=c(),ql=r("p"),Mw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ew=c(),Or=r("p"),qw=n("This model inherits from "),Ea=r("a"),zw=n("TFPreTrainedModel"),Cw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jw=c(),Pr=r("p"),Ow=n("This model is also a "),Nr=r("a"),Pw=n("tf.keras.Model"),Nw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Aw=c(),v(Nn.$$.fragment),Iw=c(),to=r("div"),v(Ar.$$.fragment),Sw=c(),Mt=r("p"),Dw=n("The "),qa=r("a"),Ww=n("TFLongformerForTokenClassification"),Qw=n(" forward method, overrides the "),zl=r("code"),Bw=n("__call__"),Uw=n(" special method."),Hw=c(),v(An.$$.fragment),Rw=c(),v(In.$$.fragment),Vw=c(),v(Sn.$$.fragment),zc=c(),Et=r("h2"),Dn=r("a"),Cl=r("span"),v(Ir.$$.fragment),Gw=c(),jl=r("span"),Kw=n("TFLongformerForMultipleChoice"),Cc=c(),Qe=r("div"),v(Sr.$$.fragment),Jw=c(),Ol=r("p"),Xw=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Yw=c(),Dr=r("p"),Zw=n("This model inherits from "),za=r("a"),ek=n("TFPreTrainedModel"),ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tk=c(),Wr=r("p"),nk=n("This model is also a "),Qr=r("a"),sk=n("tf.keras.Model"),rk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ak=c(),v(Wn.$$.fragment),ik=c(),lo=r("div"),v(Br.$$.fragment),lk=c(),qt=r("p"),dk=n("The "),Ca=r("a"),ck=n("TFLongformerForMultipleChoice"),mk=n(" forward method, overrides the "),Pl=r("code"),hk=n("__call__"),pk=n(" special method."),fk=c(),v(Qn.$$.fragment),gk=c(),v(Bn.$$.fragment),this.h()},l(t){const g=uT('[data-svelte="svelte-1phssyn"]',document.head);l=a(g,"META",{name:!0,content:!0}),g.forEach(o),k=m(t),h=a(t,"H1",{class:!0});var Ur=i(h);p=a(Ur,"A",{id:!0,class:!0,href:!0});var Nl=i(p);b=a(Nl,"SPAN",{});var Al=i(b);T(d.$$.fragment,Al),Al.forEach(o),Nl.forEach(o),u=m(Ur),E=a(Ur,"SPAN",{});var Il=i(E);he=s(Il,"Longformer"),Il.forEach(o),Ur.forEach(o),J=m(t),q=a(t,"H2",{class:!0});var Hr=i(q);Z=a(Hr,"A",{id:!0,class:!0,href:!0});var Sl=i(Z);S=a(Sl,"SPAN",{});var Dl=i(S);T(ee.$$.fragment,Dl),Dl.forEach(o),Sl.forEach(o),pe=m(Hr),D=a(Hr,"SPAN",{});var Wl=i(D);fe=s(Wl,"Overview"),Wl.forEach(o),Hr.forEach(o),le=m(t),G=a(t,"P",{});var Rr=i(G);P=s(Rr,"The Longformer model was presented in "),oe=a(Rr,"A",{href:!0,rel:!0});var Ql=i(oe);X=s(Ql,"Longformer: The Long-Document Transformer"),Ql.forEach(o),z=s(Rr," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Rr.forEach(o),j=m(t),ne=a(t,"P",{});var Bl=i(ne);U=s(Bl,"The abstract from the paper is the following:"),Bl.forEach(o),de=m(t),se=a(t,"P",{});var Ul=i(se);W=a(Ul,"EM",{});var Hl=i(W);ge=s(Hl,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Hl.forEach(o),Ul.forEach(o),ce=m(t),C=a(t,"P",{});var Rl=i(C);ue=s(Rl,"Tips:"),Rl.forEach(o),B=m(t),re=a(t,"UL",{});var Vl=i(re);K=a(Vl,"LI",{});var wo=i(K);H=s(wo,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=a(wo,"CODE",{});var Gl=i(ae);_e=s(Gl,"token_type_ids"),Gl.forEach(o),N=s(wo,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=a(wo,"CODE",{});var Kl=i(ie);R=s(Kl,"tokenizer.sep_token"),Kl.forEach(o),we=s(wo,` (or
`),w=a(wo,"CODE",{});var Jl=i(w);F=s(Jl,"</s>"),Jl.forEach(o),Y=s(wo,")."),wo.forEach(o),Vl.forEach(o),Te=m(t),me=a(t,"P",{});var zt=i(me);A=s(zt,"This model was contributed by "),be=a(zt,"A",{href:!0,rel:!0});var Xl=i(be);xe=s(Xl,"beltagy"),Xl.forEach(o),Fe=s(zt,". The Authors\u2019 code can be found "),O=a(zt,"A",{href:!0,rel:!0});var Yl=i(O);V=s(Yl,"here"),Yl.forEach(o),Me=s(zt,"."),zt.forEach(o),ye=m(t),I=a(t,"H2",{class:!0});var Vr=i(I);ke=a(Vr,"A",{id:!0,class:!0,href:!0});var Zl=i(ke);ve=a(Zl,"SPAN",{});var ed=i(ve);T(te.$$.fragment,ed),ed.forEach(o),Zl.forEach(o),Ee=m(Vr),oi=a(Vr,"SPAN",{});var od=i(oi);Qm=s(od,"Longformer Self Attention"),od.forEach(o),Vr.forEach(o),fd=m(t),$e=a(t,"P",{});var ze=i($e);Bm=s(ze,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),gd=Pt(ze),ud=s(ze,` previous tokens and
`),_d=Pt(ze),wd=s(ze," succeding tokens with "),kd=Pt(ze),bd=s(ze,` being the window length as defined in
`),ti=a(ze,"CODE",{});var td=i(ti);Um=s(td,"config.attention_window"),td.forEach(o),Hm=s(ze,". Note that "),ni=a(ze,"CODE",{});var nd=i(ni);Rm=s(nd,"config.attention_window"),nd.forEach(o),Vm=s(ze," can be of type "),si=a(ze,"CODE",{});var sd=i(si);Gm=s(sd,"List"),sd.forEach(o),Km=s(ze,` to define a
different `),vd=Pt(ze),Td=s(ze,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),ri=a(ze,"CODE",{});var rd=i(ri);Jm=s(rd,"BertSelfAttention"),rd.forEach(o),Xm=s(ze,"."),ze.forEach(o),yd=m(t),ko=a(t,"P",{});var Ct=i(ko);Ym=s(Ct,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),$d=Pt(Ct),Ld=s(Ct,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ai=a(Ct,"EM",{});var ad=i(ai);Zm=s(ad,"symmetric"),ad.forEach(o),eh=s(Ct,"."),Ct.forEach(o),xd=m(t),bo=a(t,"P",{});var jt=i(bo);oh=s(jt,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ii=a(jt,"CODE",{});var id=i(ii);th=s(id,"global_attention_mask"),id.forEach(o),nh=s(jt,` at run-time appropriately. All Longformer models employ the following logic for
`),li=a(jt,"CODE",{});var ld=i(li);sh=s(ld,"global_attention_mask"),ld.forEach(o),rh=s(jt,":"),jt.forEach(o),Fd=m(t),Nt=a(t,"UL",{});var Gr=i(Nt);di=a(Gr,"LI",{});var dd=i(di);ah=s(dd,"0: the token attends \u201Clocally\u201D,"),dd.forEach(o),ih=m(Gr),ci=a(Gr,"LI",{});var cd=i(ci);lh=s(cd,"1: the token attends \u201Cglobally\u201D."),cd.forEach(o),Gr.forEach(o),Md=m(t),At=a(t,"P",{});var Oc=i(At);dh=s(Oc,"For more information please also refer to "),Kr=a(Oc,"A",{href:!0});var uk=i(Kr);ch=s(uk,"forward()"),uk.forEach(o),mh=s(Oc," method."),Oc.forEach(o),Ed=m(t),Xe=a(t,"P",{});var To=i(Xe);hh=s(To,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),qd=Pt(To),zd=s(To,` to
`),Cd=Pt(To),jd=s(To,", with "),Od=Pt(To),Pd=s(To," being the sequence length and "),Nd=Pt(To),Ad=s(To,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),To.forEach(o),Id=m(t),It=a(t,"P",{});var Pc=i(It);ph=s(Pc,"For more information, please refer to the official "),Gn=a(Pc,"A",{href:!0,rel:!0});var _k=i(Gn);fh=s(_k,"paper"),_k.forEach(o),gh=s(Pc,"."),Pc.forEach(o),Sd=m(t),Oo=a(t,"H2",{class:!0});var Nc=i(Oo);St=a(Nc,"A",{id:!0,class:!0,href:!0});var wk=i(St);mi=a(wk,"SPAN",{});var kk=i(mi);T(Kn.$$.fragment,kk),kk.forEach(o),wk.forEach(o),uh=m(Nc),hi=a(Nc,"SPAN",{});var bk=i(hi);_h=s(bk,"Training"),bk.forEach(o),Nc.forEach(o),Dd=m(t),Po=a(t,"P",{});var md=i(Po);Jr=a(md,"A",{href:!0});var vk=i(Jr);wh=s(vk,"LongformerForMaskedLM"),vk.forEach(o),kh=s(md," is trained the exact same way "),Xr=a(md,"A",{href:!0});var Tk=i(Xr);bh=s(Tk,"RobertaForMaskedLM"),Tk.forEach(o),vh=s(md,` is
trained and should be used as follows:`),md.forEach(o),Wd=m(t),T(Jn.$$.fragment,t),Qd=m(t),No=a(t,"H2",{class:!0});var Ac=i(No);Dt=a(Ac,"A",{id:!0,class:!0,href:!0});var yk=i(Dt);pi=a(yk,"SPAN",{});var $k=i(pi);T(Xn.$$.fragment,$k),$k.forEach(o),yk.forEach(o),Th=m(Ac),fi=a(Ac,"SPAN",{});var Lk=i(fi);yh=s(Lk,"LongformerConfig"),Lk.forEach(o),Ac.forEach(o),Bd=m(t),He=a(t,"DIV",{class:!0});var yo=i(He);T(Yn.$$.fragment,yo),$h=m(yo),Ao=a(yo,"P",{});var ja=i(Ao);Lh=s(ja,"This is the configuration class to store the configuration of a "),Yr=a(ja,"A",{href:!0});var xk=i(Yr);xh=s(xk,"LongformerModel"),xk.forEach(o),Fh=s(ja," or a "),Zr=a(ja,"A",{href:!0});var Fk=i(Zr);Mh=s(Fk,"TFLongformerModel"),Fk.forEach(o),Eh=s(ja,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),ja.forEach(o),qh=m(yo),Io=a(yo,"P",{});var Oa=i(Io);zh=s(Oa,"This is the configuration class to store the configuration of a "),ea=a(Oa,"A",{href:!0});var Mk=i(ea);Ch=s(Mk,"LongformerModel"),Mk.forEach(o),jh=s(Oa,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Zn=a(Oa,"A",{href:!0,rel:!0});var Ek=i(Zn);Oh=s(Ek,"allenai/longformer-base-4096"),Ek.forEach(o),Ph=s(Oa,` architecture with a sequence
length 4,096.`),Oa.forEach(o),Nh=m(yo),So=a(yo,"P",{});var Pa=i(So);Ah=s(Pa,"The "),oa=a(Pa,"A",{href:!0});var qk=i(oa);Ih=s(qk,"LongformerConfig"),qk.forEach(o),Sh=s(Pa," class directly inherits "),ta=a(Pa,"A",{href:!0});var zk=i(ta);Dh=s(zk,"RobertaConfig"),zk.forEach(o),Wh=s(Pa,`. It reuses the same defaults. Please check the
parent class for more information.`),Pa.forEach(o),Qh=m(yo),T(Wt.$$.fragment,yo),yo.forEach(o),Ud=m(t),Do=a(t,"H2",{class:!0});var Ic=i(Do);Qt=a(Ic,"A",{id:!0,class:!0,href:!0});var Ck=i(Qt);gi=a(Ck,"SPAN",{});var jk=i(gi);T(es.$$.fragment,jk),jk.forEach(o),Ck.forEach(o),Bh=m(Ic),ui=a(Ic,"SPAN",{});var Ok=i(ui);Uh=s(Ok,"LongformerTokenizer"),Ok.forEach(o),Ic.forEach(o),Hd=m(t),uo=a(t,"DIV",{class:!0});var Na=i(uo);T(os.$$.fragment,Na),Hh=m(Na),_i=a(Na,"P",{});var Pk=i(_i);Rh=s(Pk,"Construct a Longformer tokenizer."),Pk.forEach(o),Vh=m(Na),Bt=a(Na,"P",{});var hd=i(Bt);na=a(hd,"A",{href:!0});var Nk=i(na);Gh=s(Nk,"LongformerTokenizer"),Nk.forEach(o),Kh=s(hd," is identical to "),sa=a(hd,"A",{href:!0});var Ak=i(sa);Jh=s(Ak,"RobertaTokenizer"),Ak.forEach(o),Xh=s(hd,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),hd.forEach(o),Na.forEach(o),Rd=m(t),Wo=a(t,"H2",{class:!0});var Sc=i(Wo);Ut=a(Sc,"A",{id:!0,class:!0,href:!0});var Ik=i(Ut);wi=a(Ik,"SPAN",{});var Sk=i(wi);T(ts.$$.fragment,Sk),Sk.forEach(o),Ik.forEach(o),Yh=m(Sc),ki=a(Sc,"SPAN",{});var Dk=i(ki);Zh=s(Dk,"LongformerTokenizerFast"),Dk.forEach(o),Sc.forEach(o),Vd=m(t),_o=a(t,"DIV",{class:!0});var Aa=i(_o);T(ns.$$.fragment,Aa),ep=m(Aa),ss=a(Aa,"P",{});var Dc=i(ss);op=s(Dc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),bi=a(Dc,"EM",{});var Wk=i(bi);tp=s(Wk,"tokenizers"),Wk.forEach(o),np=s(Dc," library)."),Dc.forEach(o),sp=m(Aa),Ht=a(Aa,"P",{});var pd=i(Ht);ra=a(pd,"A",{href:!0});var Qk=i(ra);rp=s(Qk,"LongformerTokenizerFast"),Qk.forEach(o),ap=s(pd," is identical to "),aa=a(pd,"A",{href:!0});var Bk=i(aa);ip=s(Bk,"RobertaTokenizerFast"),Bk.forEach(o),lp=s(pd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),pd.forEach(o),Aa.forEach(o),Gd=m(t),Qo=a(t,"H2",{class:!0});var Wc=i(Qo);Rt=a(Wc,"A",{id:!0,class:!0,href:!0});var Uk=i(Rt);vi=a(Uk,"SPAN",{});var Hk=i(vi);T(rs.$$.fragment,Hk),Hk.forEach(o),Uk.forEach(o),dp=m(Wc),Ti=a(Wc,"SPAN",{});var Rk=i(Ti);cp=s(Rk,"Longformer specific outputs"),Rk.forEach(o),Wc.forEach(o),Kd=m(t),Bo=a(t,"DIV",{class:!0});var Qc=i(Bo);T(as.$$.fragment,Qc),mp=m(Qc),yi=a(Qc,"P",{});var Vk=i(yi);hp=s(Vk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Vk.forEach(o),Qc.forEach(o),Jd=m(t),Uo=a(t,"DIV",{class:!0});var Bc=i(Uo);T(is.$$.fragment,Bc),pp=m(Bc),$i=a(Bc,"P",{});var Gk=i($i);fp=s(Gk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Gk.forEach(o),Bc.forEach(o),Xd=m(t),Ho=a(t,"DIV",{class:!0});var Uc=i(Ho);T(ls.$$.fragment,Uc),gp=m(Uc),Li=a(Uc,"P",{});var Kk=i(Li);up=s(Kk,"Base class for masked language models outputs."),Kk.forEach(o),Uc.forEach(o),Yd=m(t),Ro=a(t,"DIV",{class:!0});var Hc=i(Ro);T(ds.$$.fragment,Hc),_p=m(Hc),xi=a(Hc,"P",{});var Jk=i(xi);wp=s(Jk,"Base class for outputs of question answering Longformer models."),Jk.forEach(o),Hc.forEach(o),Zd=m(t),Vo=a(t,"DIV",{class:!0});var Rc=i(Vo);T(cs.$$.fragment,Rc),kp=m(Rc),Fi=a(Rc,"P",{});var Xk=i(Fi);bp=s(Xk,"Base class for outputs of sentence classification models."),Xk.forEach(o),Rc.forEach(o),ec=m(t),Go=a(t,"DIV",{class:!0});var Vc=i(Go);T(ms.$$.fragment,Vc),vp=m(Vc),Mi=a(Vc,"P",{});var Yk=i(Mi);Tp=s(Yk,"Base class for outputs of multiple choice Longformer models."),Yk.forEach(o),Vc.forEach(o),oc=m(t),Ko=a(t,"DIV",{class:!0});var Gc=i(Ko);T(hs.$$.fragment,Gc),yp=m(Gc),Ei=a(Gc,"P",{});var Zk=i(Ei);$p=s(Zk,"Base class for outputs of token classification models."),Zk.forEach(o),Gc.forEach(o),tc=m(t),Jo=a(t,"DIV",{class:!0});var Kc=i(Jo);T(ps.$$.fragment,Kc),Lp=m(Kc),qi=a(Kc,"P",{});var eb=i(qi);xp=s(eb,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),eb.forEach(o),Kc.forEach(o),nc=m(t),Xo=a(t,"DIV",{class:!0});var Jc=i(Xo);T(fs.$$.fragment,Jc),Fp=m(Jc),zi=a(Jc,"P",{});var ob=i(zi);Mp=s(ob,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),ob.forEach(o),Jc.forEach(o),sc=m(t),Yo=a(t,"DIV",{class:!0});var Xc=i(Yo);T(gs.$$.fragment,Xc),Ep=m(Xc),Ci=a(Xc,"P",{});var tb=i(Ci);qp=s(tb,"Base class for masked language models outputs."),tb.forEach(o),Xc.forEach(o),rc=m(t),Zo=a(t,"DIV",{class:!0});var Yc=i(Zo);T(us.$$.fragment,Yc),zp=m(Yc),ji=a(Yc,"P",{});var nb=i(ji);Cp=s(nb,"Base class for outputs of question answering Longformer models."),nb.forEach(o),Yc.forEach(o),ac=m(t),et=a(t,"DIV",{class:!0});var Zc=i(et);T(_s.$$.fragment,Zc),jp=m(Zc),Oi=a(Zc,"P",{});var sb=i(Oi);Op=s(sb,"Base class for outputs of sentence classification models."),sb.forEach(o),Zc.forEach(o),ic=m(t),ot=a(t,"DIV",{class:!0});var em=i(ot);T(ws.$$.fragment,em),Pp=m(em),Pi=a(em,"P",{});var rb=i(Pi);Np=s(rb,"Base class for outputs of multiple choice models."),rb.forEach(o),em.forEach(o),lc=m(t),tt=a(t,"DIV",{class:!0});var om=i(tt);T(ks.$$.fragment,om),Ap=m(om),Ni=a(om,"P",{});var ab=i(Ni);Ip=s(ab,"Base class for outputs of token classification models."),ab.forEach(o),om.forEach(o),dc=m(t),nt=a(t,"H2",{class:!0});var tm=i(nt);Vt=a(tm,"A",{id:!0,class:!0,href:!0});var ib=i(Vt);Ai=a(ib,"SPAN",{});var lb=i(Ai);T(bs.$$.fragment,lb),lb.forEach(o),ib.forEach(o),Sp=m(tm),Ii=a(tm,"SPAN",{});var db=i(Ii);Dp=s(db,"LongformerModel"),db.forEach(o),tm.forEach(o),cc=m(t),Pe=a(t,"DIV",{class:!0});var no=i(Pe);T(vs.$$.fragment,no),Wp=m(no),Si=a(no,"P",{});var cb=i(Si);Qp=s(cb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),cb.forEach(o),Bp=m(no),Ts=a(no,"P",{});var nm=i(Ts);Up=s(nm,"This model inherits from "),ia=a(nm,"A",{href:!0});var mb=i(ia);Hp=s(mb,"PreTrainedModel"),mb.forEach(o),Rp=s(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nm.forEach(o),Vp=m(no),ys=a(no,"P",{});var sm=i(ys);Gp=s(sm,"This model is also a PyTorch "),$s=a(sm,"A",{href:!0,rel:!0});var hb=i($s);Kp=s(hb,"torch.nn.Module"),hb.forEach(o),Jp=s(sm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sm.forEach(o),Xp=m(no),st=a(no,"P",{});var Ia=i(st);Yp=s(Ia,"This class copied code from "),la=a(Ia,"A",{href:!0});var pb=i(la);Zp=s(pb,"RobertaModel"),pb.forEach(o),ef=s(Ia,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Ls=a(Ia,"A",{href:!0,rel:!0});var fb=i(Ls);of=s(fb,`Longformer:
the Long-Document Transformer`),fb.forEach(o),tf=s(Ia,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Ia.forEach(o),nf=m(no),xs=a(no,"P",{});var rm=i(xs);sf=s(rm,"The self-attention module "),Di=a(rm,"CODE",{});var gb=i(Di);rf=s(gb,"LongformerSelfAttention"),gb.forEach(o),af=s(rm,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),rm.forEach(o),lf=m(no),ro=a(no,"DIV",{class:!0});var Un=i(ro);T(Fs.$$.fragment,Un),df=m(Un),rt=a(Un,"P",{});var Sa=i(rt);cf=s(Sa,"The "),da=a(Sa,"A",{href:!0});var ub=i(da);mf=s(ub,"LongformerModel"),ub.forEach(o),hf=s(Sa," forward method, overrides the "),Wi=a(Sa,"CODE",{});var _b=i(Wi);pf=s(_b,"__call__"),_b.forEach(o),ff=s(Sa," special method."),Sa.forEach(o),gf=m(Un),T(Gt.$$.fragment,Un),uf=m(Un),T(Kt.$$.fragment,Un),Un.forEach(o),no.forEach(o),mc=m(t),at=a(t,"H2",{class:!0});var am=i(at);Jt=a(am,"A",{id:!0,class:!0,href:!0});var wb=i(Jt);Qi=a(wb,"SPAN",{});var kb=i(Qi);T(Ms.$$.fragment,kb),kb.forEach(o),wb.forEach(o),_f=m(am),Bi=a(am,"SPAN",{});var bb=i(Bi);wf=s(bb,"LongformerForMaskedLM"),bb.forEach(o),am.forEach(o),hc=m(t),Re=a(t,"DIV",{class:!0});var $o=i(Re);T(Es.$$.fragment,$o),kf=m($o),qs=a($o,"P",{});var im=i(qs);bf=s(im,"Longformer Model with a "),Ui=a(im,"CODE",{});var vb=i(Ui);vf=s(vb,"language modeling"),vb.forEach(o),Tf=s(im," head on top."),im.forEach(o),yf=m($o),zs=a($o,"P",{});var lm=i(zs);$f=s(lm,"This model inherits from "),ca=a(lm,"A",{href:!0});var Tb=i(ca);Lf=s(Tb,"PreTrainedModel"),Tb.forEach(o),xf=s(lm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm.forEach(o),Ff=m($o),Cs=a($o,"P",{});var dm=i(Cs);Mf=s(dm,"This model is also a PyTorch "),js=a(dm,"A",{href:!0,rel:!0});var yb=i(js);Ef=s(yb,"torch.nn.Module"),yb.forEach(o),qf=s(dm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dm.forEach(o),zf=m($o),Be=a($o,"DIV",{class:!0});var co=i(Be);T(Os.$$.fragment,co),Cf=m(co),it=a(co,"P",{});var Da=i(it);jf=s(Da,"The "),ma=a(Da,"A",{href:!0});var $b=i(ma);Of=s($b,"LongformerForMaskedLM"),$b.forEach(o),Pf=s(Da," forward method, overrides the "),Hi=a(Da,"CODE",{});var Lb=i(Hi);Nf=s(Lb,"__call__"),Lb.forEach(o),Af=s(Da," special method."),Da.forEach(o),If=m(co),T(Xt.$$.fragment,co),Sf=m(co),T(Yt.$$.fragment,co),Df=m(co),Ri=a(co,"P",{});var xb=i(Ri);Wf=s(xb,"Let\u2019s try a very long input."),xb.forEach(o),Qf=m(co),T(Zt.$$.fragment,co),co.forEach(o),$o.forEach(o),pc=m(t),lt=a(t,"H2",{class:!0});var cm=i(lt);en=a(cm,"A",{id:!0,class:!0,href:!0});var Fb=i(en);Vi=a(Fb,"SPAN",{});var Mb=i(Vi);T(Ps.$$.fragment,Mb),Mb.forEach(o),Fb.forEach(o),Bf=m(cm),Gi=a(cm,"SPAN",{});var Eb=i(Gi);Uf=s(Eb,"LongformerForSequenceClassification"),Eb.forEach(o),cm.forEach(o),fc=m(t),Ve=a(t,"DIV",{class:!0});var Lo=i(Ve);T(Ns.$$.fragment,Lo),Hf=m(Lo),Ki=a(Lo,"P",{});var qb=i(Ki);Rf=s(qb,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),qb.forEach(o),Vf=m(Lo),As=a(Lo,"P",{});var mm=i(As);Gf=s(mm,"This model inherits from "),ha=a(mm,"A",{href:!0});var zb=i(ha);Kf=s(zb,"PreTrainedModel"),zb.forEach(o),Jf=s(mm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mm.forEach(o),Xf=m(Lo),Is=a(Lo,"P",{});var hm=i(Is);Yf=s(hm,"This model is also a PyTorch "),Ss=a(hm,"A",{href:!0,rel:!0});var Cb=i(Ss);Zf=s(Cb,"torch.nn.Module"),Cb.forEach(o),eg=s(hm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hm.forEach(o),og=m(Lo),Ne=a(Lo,"DIV",{class:!0});var so=i(Ne);T(Ds.$$.fragment,so),tg=m(so),dt=a(so,"P",{});var Wa=i(dt);ng=s(Wa,"The "),pa=a(Wa,"A",{href:!0});var jb=i(pa);sg=s(jb,"LongformerForSequenceClassification"),jb.forEach(o),rg=s(Wa," forward method, overrides the "),Ji=a(Wa,"CODE",{});var Ob=i(Ji);ag=s(Ob,"__call__"),Ob.forEach(o),ig=s(Wa," special method."),Wa.forEach(o),lg=m(so),T(on.$$.fragment,so),dg=m(so),T(tn.$$.fragment,so),cg=m(so),T(nn.$$.fragment,so),mg=m(so),T(sn.$$.fragment,so),hg=m(so),T(rn.$$.fragment,so),so.forEach(o),Lo.forEach(o),gc=m(t),ct=a(t,"H2",{class:!0});var pm=i(ct);an=a(pm,"A",{id:!0,class:!0,href:!0});var Pb=i(an);Xi=a(Pb,"SPAN",{});var Nb=i(Xi);T(Ws.$$.fragment,Nb),Nb.forEach(o),Pb.forEach(o),pg=m(pm),Yi=a(pm,"SPAN",{});var Ab=i(Yi);fg=s(Ab,"LongformerForMultipleChoice"),Ab.forEach(o),pm.forEach(o),uc=m(t),Ge=a(t,"DIV",{class:!0});var xo=i(Ge);T(Qs.$$.fragment,xo),gg=m(xo),Zi=a(xo,"P",{});var Ib=i(Zi);ug=s(Ib,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ib.forEach(o),_g=m(xo),Bs=a(xo,"P",{});var fm=i(Bs);wg=s(fm,"This model inherits from "),fa=a(fm,"A",{href:!0});var Sb=i(fa);kg=s(Sb,"PreTrainedModel"),Sb.forEach(o),bg=s(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fm.forEach(o),vg=m(xo),Us=a(xo,"P",{});var gm=i(Us);Tg=s(gm,"This model is also a PyTorch "),Hs=a(gm,"A",{href:!0,rel:!0});var Db=i(Hs);yg=s(Db,"torch.nn.Module"),Db.forEach(o),$g=s(gm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gm.forEach(o),Lg=m(xo),ao=a(xo,"DIV",{class:!0});var Hn=i(ao);T(Rs.$$.fragment,Hn),xg=m(Hn),mt=a(Hn,"P",{});var Qa=i(mt);Fg=s(Qa,"The "),ga=a(Qa,"A",{href:!0});var Wb=i(ga);Mg=s(Wb,"LongformerForMultipleChoice"),Wb.forEach(o),Eg=s(Qa," forward method, overrides the "),el=a(Qa,"CODE",{});var Qb=i(el);qg=s(Qb,"__call__"),Qb.forEach(o),zg=s(Qa," special method."),Qa.forEach(o),Cg=m(Hn),T(ln.$$.fragment,Hn),jg=m(Hn),T(dn.$$.fragment,Hn),Hn.forEach(o),xo.forEach(o),_c=m(t),ht=a(t,"H2",{class:!0});var um=i(ht);cn=a(um,"A",{id:!0,class:!0,href:!0});var Bb=i(cn);ol=a(Bb,"SPAN",{});var Ub=i(ol);T(Vs.$$.fragment,Ub),Ub.forEach(o),Bb.forEach(o),Og=m(um),tl=a(um,"SPAN",{});var Hb=i(tl);Pg=s(Hb,"LongformerForTokenClassification"),Hb.forEach(o),um.forEach(o),wc=m(t),Ke=a(t,"DIV",{class:!0});var Fo=i(Ke);T(Gs.$$.fragment,Fo),Ng=m(Fo),nl=a(Fo,"P",{});var Rb=i(nl);Ag=s(Rb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Rb.forEach(o),Ig=m(Fo),Ks=a(Fo,"P",{});var _m=i(Ks);Sg=s(_m,"This model inherits from "),ua=a(_m,"A",{href:!0});var Vb=i(ua);Dg=s(Vb,"PreTrainedModel"),Vb.forEach(o),Wg=s(_m,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_m.forEach(o),Qg=m(Fo),Js=a(Fo,"P",{});var wm=i(Js);Bg=s(wm,"This model is also a PyTorch "),Xs=a(wm,"A",{href:!0,rel:!0});var Gb=i(Xs);Ug=s(Gb,"torch.nn.Module"),Gb.forEach(o),Hg=s(wm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wm.forEach(o),Rg=m(Fo),Ye=a(Fo,"DIV",{class:!0});var Mo=i(Ye);T(Ys.$$.fragment,Mo),Vg=m(Mo),pt=a(Mo,"P",{});var Ba=i(pt);Gg=s(Ba,"The "),_a=a(Ba,"A",{href:!0});var Kb=i(_a);Kg=s(Kb,"LongformerForTokenClassification"),Kb.forEach(o),Jg=s(Ba," forward method, overrides the "),sl=a(Ba,"CODE",{});var Jb=i(sl);Xg=s(Jb,"__call__"),Jb.forEach(o),Yg=s(Ba," special method."),Ba.forEach(o),Zg=m(Mo),T(mn.$$.fragment,Mo),eu=m(Mo),T(hn.$$.fragment,Mo),ou=m(Mo),T(pn.$$.fragment,Mo),Mo.forEach(o),Fo.forEach(o),kc=m(t),ft=a(t,"H2",{class:!0});var km=i(ft);fn=a(km,"A",{id:!0,class:!0,href:!0});var Xb=i(fn);rl=a(Xb,"SPAN",{});var Yb=i(rl);T(Zs.$$.fragment,Yb),Yb.forEach(o),Xb.forEach(o),tu=m(km),al=a(km,"SPAN",{});var Zb=i(al);nu=s(Zb,"LongformerForQuestionAnswering"),Zb.forEach(o),km.forEach(o),bc=m(t),Je=a(t,"DIV",{class:!0});var Eo=i(Je);T(er.$$.fragment,Eo),su=m(Eo),gt=a(Eo,"P",{});var Ua=i(gt);ru=s(Ua,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),il=a(Ua,"CODE",{});var ev=i(il);au=s(ev,"span start logits"),ev.forEach(o),iu=s(Ua," and "),ll=a(Ua,"CODE",{});var ov=i(ll);lu=s(ov,"span end logits"),ov.forEach(o),du=s(Ua,")."),Ua.forEach(o),cu=m(Eo),or=a(Eo,"P",{});var bm=i(or);mu=s(bm,"This model inherits from "),wa=a(bm,"A",{href:!0});var tv=i(wa);hu=s(tv,"PreTrainedModel"),tv.forEach(o),pu=s(bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm.forEach(o),fu=m(Eo),tr=a(Eo,"P",{});var vm=i(tr);gu=s(vm,"This model is also a PyTorch "),nr=a(vm,"A",{href:!0,rel:!0});var nv=i(nr);uu=s(nv,"torch.nn.Module"),nv.forEach(o),_u=s(vm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vm.forEach(o),wu=m(Eo),io=a(Eo,"DIV",{class:!0});var Rn=i(io);T(sr.$$.fragment,Rn),ku=m(Rn),ut=a(Rn,"P",{});var Ha=i(ut);bu=s(Ha,"The "),ka=a(Ha,"A",{href:!0});var sv=i(ka);vu=s(sv,"LongformerForQuestionAnswering"),sv.forEach(o),Tu=s(Ha," forward method, overrides the "),dl=a(Ha,"CODE",{});var rv=i(dl);yu=s(rv,"__call__"),rv.forEach(o),$u=s(Ha," special method."),Ha.forEach(o),Lu=m(Rn),T(gn.$$.fragment,Rn),xu=m(Rn),T(un.$$.fragment,Rn),Rn.forEach(o),Eo.forEach(o),vc=m(t),_t=a(t,"H2",{class:!0});var Tm=i(_t);_n=a(Tm,"A",{id:!0,class:!0,href:!0});var av=i(_n);cl=a(av,"SPAN",{});var iv=i(cl);T(rr.$$.fragment,iv),iv.forEach(o),av.forEach(o),Fu=m(Tm),ml=a(Tm,"SPAN",{});var lv=i(ml);Mu=s(lv,"TFLongformerModel"),lv.forEach(o),Tm.forEach(o),Tc=m(t),qe=a(t,"DIV",{class:!0});var Ue=i(qe);T(ar.$$.fragment,Ue),Eu=m(Ue),hl=a(Ue,"P",{});var dv=i(hl);qu=s(dv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),dv.forEach(o),zu=m(Ue),ir=a(Ue,"P",{});var ym=i(ir);Cu=s(ym,"This model inherits from "),ba=a(ym,"A",{href:!0});var cv=i(ba);ju=s(cv,"TFPreTrainedModel"),cv.forEach(o),Ou=s(ym,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ym.forEach(o),Pu=m(Ue),lr=a(Ue,"P",{});var $m=i(lr);Nu=s($m,"This model is also a "),dr=a($m,"A",{href:!0,rel:!0});var mv=i(dr);Au=s(mv,"tf.keras.Model"),mv.forEach(o),Iu=s($m,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$m.forEach(o),Su=m(Ue),T(wn.$$.fragment,Ue),Du=m(Ue),wt=a(Ue,"P",{});var Ra=i(wt);Wu=s(Ra,"This class copies code from "),va=a(Ra,"A",{href:!0});var hv=i(va);Qu=s(hv,"TFRobertaModel"),hv.forEach(o),Bu=s(Ra,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),cr=a(Ra,"A",{href:!0,rel:!0});var pv=i(cr);Uu=s(pv,"Longformer: the Long-Document Transformer"),pv.forEach(o),Hu=s(Ra,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ra.forEach(o),Ru=m(Ue),mr=a(Ue,"P",{});var Lm=i(mr);Vu=s(Lm,"The self-attention module "),pl=a(Lm,"CODE",{});var fv=i(pl);Gu=s(fv,"TFLongformerSelfAttention"),fv.forEach(o),Ku=s(Lm,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Lm.forEach(o),Ju=m(Ue),vo=a(Ue,"DIV",{class:!0});var Va=i(vo);T(hr.$$.fragment,Va),Xu=m(Va),kt=a(Va,"P",{});var Ga=i(kt);Yu=s(Ga,"The "),Ta=a(Ga,"A",{href:!0});var gv=i(Ta);Zu=s(gv,"TFLongformerModel"),gv.forEach(o),e_=s(Ga," forward method, overrides the "),fl=a(Ga,"CODE",{});var uv=i(fl);o_=s(uv,"__call__"),uv.forEach(o),t_=s(Ga," special method."),Ga.forEach(o),n_=m(Va),T(kn.$$.fragment,Va),Va.forEach(o),Ue.forEach(o),yc=m(t),bt=a(t,"H2",{class:!0});var xm=i(bt);bn=a(xm,"A",{id:!0,class:!0,href:!0});var _v=i(bn);gl=a(_v,"SPAN",{});var wv=i(gl);T(pr.$$.fragment,wv),wv.forEach(o),_v.forEach(o),s_=m(xm),ul=a(xm,"SPAN",{});var kv=i(ul);r_=s(kv,"TFLongformerForMaskedLM"),kv.forEach(o),xm.forEach(o),$c=m(t),Ie=a(t,"DIV",{class:!0});var mo=i(Ie);T(fr.$$.fragment,mo),a_=m(mo),gr=a(mo,"P",{});var Fm=i(gr);i_=s(Fm,"Longformer Model with a "),_l=a(Fm,"CODE",{});var bv=i(_l);l_=s(bv,"language modeling"),bv.forEach(o),d_=s(Fm," head on top."),Fm.forEach(o),c_=m(mo),ur=a(mo,"P",{});var Mm=i(ur);m_=s(Mm,"This model inherits from "),ya=a(Mm,"A",{href:!0});var vv=i(ya);h_=s(vv,"TFPreTrainedModel"),vv.forEach(o),p_=s(Mm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mm.forEach(o),f_=m(mo),_r=a(mo,"P",{});var Em=i(_r);g_=s(Em,"This model is also a "),wr=a(Em,"A",{href:!0,rel:!0});var Tv=i(wr);u_=s(Tv,"tf.keras.Model"),Tv.forEach(o),__=s(Em,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Em.forEach(o),w_=m(mo),T(vn.$$.fragment,mo),k_=m(mo),Ze=a(mo,"DIV",{class:!0});var qo=i(Ze);T(kr.$$.fragment,qo),b_=m(qo),vt=a(qo,"P",{});var Ka=i(vt);v_=s(Ka,"The "),$a=a(Ka,"A",{href:!0});var yv=i($a);T_=s(yv,"TFLongformerForMaskedLM"),yv.forEach(o),y_=s(Ka," forward method, overrides the "),wl=a(Ka,"CODE",{});var $v=i(wl);$_=s($v,"__call__"),$v.forEach(o),L_=s(Ka," special method."),Ka.forEach(o),x_=m(qo),T(Tn.$$.fragment,qo),F_=m(qo),T(yn.$$.fragment,qo),M_=m(qo),T($n.$$.fragment,qo),qo.forEach(o),mo.forEach(o),Lc=m(t),Tt=a(t,"H2",{class:!0});var qm=i(Tt);Ln=a(qm,"A",{id:!0,class:!0,href:!0});var Lv=i(Ln);kl=a(Lv,"SPAN",{});var xv=i(kl);T(br.$$.fragment,xv),xv.forEach(o),Lv.forEach(o),E_=m(qm),bl=a(qm,"SPAN",{});var Fv=i(bl);q_=s(Fv,"TFLongformerForQuestionAnswering"),Fv.forEach(o),qm.forEach(o),xc=m(t),Se=a(t,"DIV",{class:!0});var ho=i(Se);T(vr.$$.fragment,ho),z_=m(ho),yt=a(ho,"P",{});var Ja=i(yt);C_=s(Ja,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),vl=a(Ja,"CODE",{});var Mv=i(vl);j_=s(Mv,"span start logits"),Mv.forEach(o),O_=s(Ja," and "),Tl=a(Ja,"CODE",{});var Ev=i(Tl);P_=s(Ev,"span end logits"),Ev.forEach(o),N_=s(Ja,")."),Ja.forEach(o),A_=m(ho),Tr=a(ho,"P",{});var zm=i(Tr);I_=s(zm,"This model inherits from "),La=a(zm,"A",{href:!0});var qv=i(La);S_=s(qv,"TFPreTrainedModel"),qv.forEach(o),D_=s(zm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zm.forEach(o),W_=m(ho),yr=a(ho,"P",{});var Cm=i(yr);Q_=s(Cm,"This model is also a "),$r=a(Cm,"A",{href:!0,rel:!0});var zv=i($r);B_=s(zv,"tf.keras.Model"),zv.forEach(o),U_=s(Cm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cm.forEach(o),H_=m(ho),T(xn.$$.fragment,ho),R_=m(ho),eo=a(ho,"DIV",{class:!0});var zo=i(eo);T(Lr.$$.fragment,zo),V_=m(zo),$t=a(zo,"P",{});var Xa=i($t);G_=s(Xa,"The "),xa=a(Xa,"A",{href:!0});var Cv=i(xa);K_=s(Cv,"TFLongformerForQuestionAnswering"),Cv.forEach(o),J_=s(Xa," forward method, overrides the "),yl=a(Xa,"CODE",{});var jv=i(yl);X_=s(jv,"__call__"),jv.forEach(o),Y_=s(Xa," special method."),Xa.forEach(o),Z_=m(zo),T(Fn.$$.fragment,zo),ew=m(zo),T(Mn.$$.fragment,zo),ow=m(zo),T(En.$$.fragment,zo),zo.forEach(o),ho.forEach(o),Fc=m(t),Lt=a(t,"H2",{class:!0});var jm=i(Lt);qn=a(jm,"A",{id:!0,class:!0,href:!0});var Ov=i(qn);$l=a(Ov,"SPAN",{});var Pv=i($l);T(xr.$$.fragment,Pv),Pv.forEach(o),Ov.forEach(o),tw=m(jm),Ll=a(jm,"SPAN",{});var Nv=i(Ll);nw=s(Nv,"TFLongformerForSequenceClassification"),Nv.forEach(o),jm.forEach(o),Mc=m(t),De=a(t,"DIV",{class:!0});var po=i(De);T(Fr.$$.fragment,po),sw=m(po),xl=a(po,"P",{});var Av=i(xl);rw=s(Av,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Av.forEach(o),aw=m(po),Mr=a(po,"P",{});var Om=i(Mr);iw=s(Om,"This model inherits from "),Fa=a(Om,"A",{href:!0});var Iv=i(Fa);lw=s(Iv,"TFPreTrainedModel"),Iv.forEach(o),dw=s(Om,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Om.forEach(o),cw=m(po),Er=a(po,"P",{});var Pm=i(Er);mw=s(Pm,"This model is also a "),qr=a(Pm,"A",{href:!0,rel:!0});var Sv=i(qr);hw=s(Sv,"tf.keras.Model"),Sv.forEach(o),pw=s(Pm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pm.forEach(o),fw=m(po),T(zn.$$.fragment,po),gw=m(po),oo=a(po,"DIV",{class:!0});var Co=i(oo);T(zr.$$.fragment,Co),uw=m(Co),xt=a(Co,"P",{});var Ya=i(xt);_w=s(Ya,"The "),Ma=a(Ya,"A",{href:!0});var Dv=i(Ma);ww=s(Dv,"TFLongformerForSequenceClassification"),Dv.forEach(o),kw=s(Ya," forward method, overrides the "),Fl=a(Ya,"CODE",{});var Wv=i(Fl);bw=s(Wv,"__call__"),Wv.forEach(o),vw=s(Ya," special method."),Ya.forEach(o),Tw=m(Co),T(Cn.$$.fragment,Co),yw=m(Co),T(jn.$$.fragment,Co),$w=m(Co),T(On.$$.fragment,Co),Co.forEach(o),po.forEach(o),Ec=m(t),Ft=a(t,"H2",{class:!0});var Nm=i(Ft);Pn=a(Nm,"A",{id:!0,class:!0,href:!0});var Qv=i(Pn);Ml=a(Qv,"SPAN",{});var Bv=i(Ml);T(Cr.$$.fragment,Bv),Bv.forEach(o),Qv.forEach(o),Lw=m(Nm),El=a(Nm,"SPAN",{});var Uv=i(El);xw=s(Uv,"TFLongformerForTokenClassification"),Uv.forEach(o),Nm.forEach(o),qc=m(t),We=a(t,"DIV",{class:!0});var fo=i(We);T(jr.$$.fragment,fo),Fw=m(fo),ql=a(fo,"P",{});var Hv=i(ql);Mw=s(Hv,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Hv.forEach(o),Ew=m(fo),Or=a(fo,"P",{});var Am=i(Or);qw=s(Am,"This model inherits from "),Ea=a(Am,"A",{href:!0});var Rv=i(Ea);zw=s(Rv,"TFPreTrainedModel"),Rv.forEach(o),Cw=s(Am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Am.forEach(o),jw=m(fo),Pr=a(fo,"P",{});var Im=i(Pr);Ow=s(Im,"This model is also a "),Nr=a(Im,"A",{href:!0,rel:!0});var Vv=i(Nr);Pw=s(Vv,"tf.keras.Model"),Vv.forEach(o),Nw=s(Im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im.forEach(o),Aw=m(fo),T(Nn.$$.fragment,fo),Iw=m(fo),to=a(fo,"DIV",{class:!0});var jo=i(to);T(Ar.$$.fragment,jo),Sw=m(jo),Mt=a(jo,"P",{});var Za=i(Mt);Dw=s(Za,"The "),qa=a(Za,"A",{href:!0});var Gv=i(qa);Ww=s(Gv,"TFLongformerForTokenClassification"),Gv.forEach(o),Qw=s(Za," forward method, overrides the "),zl=a(Za,"CODE",{});var Kv=i(zl);Bw=s(Kv,"__call__"),Kv.forEach(o),Uw=s(Za," special method."),Za.forEach(o),Hw=m(jo),T(An.$$.fragment,jo),Rw=m(jo),T(In.$$.fragment,jo),Vw=m(jo),T(Sn.$$.fragment,jo),jo.forEach(o),fo.forEach(o),zc=m(t),Et=a(t,"H2",{class:!0});var Sm=i(Et);Dn=a(Sm,"A",{id:!0,class:!0,href:!0});var Jv=i(Dn);Cl=a(Jv,"SPAN",{});var Xv=i(Cl);T(Ir.$$.fragment,Xv),Xv.forEach(o),Jv.forEach(o),Gw=m(Sm),jl=a(Sm,"SPAN",{});var Yv=i(jl);Kw=s(Yv,"TFLongformerForMultipleChoice"),Yv.forEach(o),Sm.forEach(o),Cc=m(t),Qe=a(t,"DIV",{class:!0});var go=i(Qe);T(Sr.$$.fragment,go),Jw=m(go),Ol=a(go,"P",{});var Zv=i(Ol);Xw=s(Zv,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Zv.forEach(o),Yw=m(go),Dr=a(go,"P",{});var Dm=i(Dr);Zw=s(Dm,"This model inherits from "),za=a(Dm,"A",{href:!0});var eT=i(za);ek=s(eT,"TFPreTrainedModel"),eT.forEach(o),ok=s(Dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dm.forEach(o),tk=m(go),Wr=a(go,"P",{});var Wm=i(Wr);nk=s(Wm,"This model is also a "),Qr=a(Wm,"A",{href:!0,rel:!0});var oT=i(Qr);sk=s(oT,"tf.keras.Model"),oT.forEach(o),rk=s(Wm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wm.forEach(o),ak=m(go),T(Wn.$$.fragment,go),ik=m(go),lo=a(go,"DIV",{class:!0});var Vn=i(lo);T(Br.$$.fragment,Vn),lk=m(Vn),qt=a(Vn,"P",{});var ei=i(qt);dk=s(ei,"The "),Ca=a(ei,"A",{href:!0});var tT=i(Ca);ck=s(tT,"TFLongformerForMultipleChoice"),tT.forEach(o),mk=s(ei," forward method, overrides the "),Pl=a(ei,"CODE",{});var nT=i(Pl);hk=s(nT,"__call__"),nT.forEach(o),pk=s(ei," special method."),ei.forEach(o),fk=m(Vn),T(Qn.$$.fragment,Vn),gk=m(Vn),T(Bn.$$.fragment,Vn),Vn.forEach(o),go.forEach(o),this.h()},h(){_(l,"name","hf:doc:metadata"),_(l,"content",JSON.stringify(sy)),_(p,"id","longformer"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#longformer"),_(h,"class","relative group"),_(Z,"id","overview"),_(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Z,"href","#overview"),_(q,"class","relative group"),_(oe,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(oe,"rel","nofollow"),_(be,"href","https://huggingface.co/beltagy"),_(be,"rel","nofollow"),_(O,"href","https://github.com/allenai/longformer"),_(O,"rel","nofollow"),_(ke,"id","longformer-self-attention"),_(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ke,"href","#longformer-self-attention"),_(I,"class","relative group"),gd.a=ud,_d.a=wd,kd.a=bd,vd.a=Td,$d.a=Ld,_(Kr,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerModel.forward"),qd.a=zd,Cd.a=jd,Od.a=Pd,Nd.a=Ad,_(Gn,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(Gn,"rel","nofollow"),_(St,"id","training"),_(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(St,"href","#training"),_(Oo,"class","relative group"),_(Jr,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Xr,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaForMaskedLM"),_(Dt,"id","transformers.LongformerConfig"),_(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Dt,"href","#transformers.LongformerConfig"),_(No,"class","relative group"),_(Yr,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerModel"),_(Zr,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.TFLongformerModel"),_(ea,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerModel"),_(Zn,"href","https://huggingface.co/allenai/longformer-base-4096"),_(Zn,"rel","nofollow"),_(oa,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerConfig"),_(ta,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qt,"id","transformers.LongformerTokenizer"),_(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Qt,"href","#transformers.LongformerTokenizer"),_(Do,"class","relative group"),_(na,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizer"),_(sa,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer"),_(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ut,"id","transformers.LongformerTokenizerFast"),_(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ut,"href","#transformers.LongformerTokenizerFast"),_(Wo,"class","relative group"),_(ra,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerTokenizerFast"),_(aa,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizerFast"),_(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Rt,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Rt,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Qo,"class","relative group"),_(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vt,"id","transformers.LongformerModel"),_(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Vt,"href","#transformers.LongformerModel"),_(nt,"class","relative group"),_(ia,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),_($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_($s,"rel","nofollow"),_(la,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaModel"),_(Ls,"href","https://arxiv.org/abs/2004.05150"),_(Ls,"rel","nofollow"),_(da,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerModel"),_(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jt,"id","transformers.LongformerForMaskedLM"),_(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Jt,"href","#transformers.LongformerForMaskedLM"),_(at,"class","relative group"),_(ca,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),_(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(js,"rel","nofollow"),_(ma,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(en,"id","transformers.LongformerForSequenceClassification"),_(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(en,"href","#transformers.LongformerForSequenceClassification"),_(lt,"class","relative group"),_(ha,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),_(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Ss,"rel","nofollow"),_(pa,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(an,"id","transformers.LongformerForMultipleChoice"),_(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(an,"href","#transformers.LongformerForMultipleChoice"),_(ct,"class","relative group"),_(fa,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),_(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Hs,"rel","nofollow"),_(ga,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),_(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(cn,"id","transformers.LongformerForTokenClassification"),_(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(cn,"href","#transformers.LongformerForTokenClassification"),_(ht,"class","relative group"),_(ua,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),_(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Xs,"rel","nofollow"),_(_a,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerForTokenClassification"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(fn,"id","transformers.LongformerForQuestionAnswering"),_(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(fn,"href","#transformers.LongformerForQuestionAnswering"),_(ft,"class","relative group"),_(wa,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),_(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(nr,"rel","nofollow"),_(ka,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),_(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_n,"id","transformers.TFLongformerModel"),_(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_n,"href","#transformers.TFLongformerModel"),_(_t,"class","relative group"),_(ba,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),_(dr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(dr,"rel","nofollow"),_(va,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.TFRobertaModel"),_(cr,"href","https://arxiv.org/abs/2004.05150"),_(cr,"rel","nofollow"),_(Ta,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.TFLongformerModel"),_(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(bn,"id","transformers.TFLongformerForMaskedLM"),_(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(bn,"href","#transformers.TFLongformerForMaskedLM"),_(bt,"class","relative group"),_(ya,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),_(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(wr,"rel","nofollow"),_($a,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),_(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ln,"id","transformers.TFLongformerForQuestionAnswering"),_(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ln,"href","#transformers.TFLongformerForQuestionAnswering"),_(Tt,"class","relative group"),_(La,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),_($r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_($r,"rel","nofollow"),_(xa,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),_(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(qn,"id","transformers.TFLongformerForSequenceClassification"),_(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(qn,"href","#transformers.TFLongformerForSequenceClassification"),_(Lt,"class","relative group"),_(Fa,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),_(qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(qr,"rel","nofollow"),_(Ma,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),_(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pn,"id","transformers.TFLongformerForTokenClassification"),_(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Pn,"href","#transformers.TFLongformerForTokenClassification"),_(Ft,"class","relative group"),_(Ea,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),_(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Nr,"rel","nofollow"),_(qa,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),_(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Dn,"id","transformers.TFLongformerForMultipleChoice"),_(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Dn,"href","#transformers.TFLongformerForMultipleChoice"),_(Et,"class","relative group"),_(za,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),_(Qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Qr,"rel","nofollow"),_(Ca,"href","/docs/transformers/v4.21.3/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),_(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,l),f(t,k,g),f(t,h,g),e(h,p),e(p,b),y(d,b,null),e(h,u),e(h,E),e(E,he),f(t,J,g),f(t,q,g),e(q,Z),e(Z,S),y(ee,S,null),e(q,pe),e(q,D),e(D,fe),f(t,le,g),f(t,G,g),e(G,P),e(G,oe),e(oe,X),e(G,z),f(t,j,g),f(t,ne,g),e(ne,U),f(t,de,g),f(t,se,g),e(se,W),e(W,ge),f(t,ce,g),f(t,C,g),e(C,ue),f(t,B,g),f(t,re,g),e(re,K),e(K,H),e(K,ae),e(ae,_e),e(K,N),e(K,ie),e(ie,R),e(K,we),e(K,w),e(w,F),e(K,Y),f(t,Te,g),f(t,me,g),e(me,A),e(me,be),e(be,xe),e(me,Fe),e(me,O),e(O,V),e(me,Me),f(t,ye,g),f(t,I,g),e(I,ke),e(ke,ve),y(te,ve,null),e(I,Ee),e(I,oi),e(oi,Qm),f(t,fd,g),f(t,$e,g),e($e,Bm),gd.m(sT,$e),e($e,ud),_d.m(rT,$e),e($e,wd),kd.m(aT,$e),e($e,bd),e($e,ti),e(ti,Um),e($e,Hm),e($e,ni),e(ni,Rm),e($e,Vm),e($e,si),e(si,Gm),e($e,Km),vd.m(iT,$e),e($e,Td),e($e,ri),e(ri,Jm),e($e,Xm),f(t,yd,g),f(t,ko,g),e(ko,Ym),$d.m(lT,ko),e(ko,Ld),e(ko,ai),e(ai,Zm),e(ko,eh),f(t,xd,g),f(t,bo,g),e(bo,oh),e(bo,ii),e(ii,th),e(bo,nh),e(bo,li),e(li,sh),e(bo,rh),f(t,Fd,g),f(t,Nt,g),e(Nt,di),e(di,ah),e(Nt,ih),e(Nt,ci),e(ci,lh),f(t,Md,g),f(t,At,g),e(At,dh),e(At,Kr),e(Kr,ch),e(At,mh),f(t,Ed,g),f(t,Xe,g),e(Xe,hh),qd.m(dT,Xe),e(Xe,zd),Cd.m(cT,Xe),e(Xe,jd),Od.m(mT,Xe),e(Xe,Pd),Nd.m(hT,Xe),e(Xe,Ad),f(t,Id,g),f(t,It,g),e(It,ph),e(It,Gn),e(Gn,fh),e(It,gh),f(t,Sd,g),f(t,Oo,g),e(Oo,St),e(St,mi),y(Kn,mi,null),e(Oo,uh),e(Oo,hi),e(hi,_h),f(t,Dd,g),f(t,Po,g),e(Po,Jr),e(Jr,wh),e(Po,kh),e(Po,Xr),e(Xr,bh),e(Po,vh),f(t,Wd,g),y(Jn,t,g),f(t,Qd,g),f(t,No,g),e(No,Dt),e(Dt,pi),y(Xn,pi,null),e(No,Th),e(No,fi),e(fi,yh),f(t,Bd,g),f(t,He,g),y(Yn,He,null),e(He,$h),e(He,Ao),e(Ao,Lh),e(Ao,Yr),e(Yr,xh),e(Ao,Fh),e(Ao,Zr),e(Zr,Mh),e(Ao,Eh),e(He,qh),e(He,Io),e(Io,zh),e(Io,ea),e(ea,Ch),e(Io,jh),e(Io,Zn),e(Zn,Oh),e(Io,Ph),e(He,Nh),e(He,So),e(So,Ah),e(So,oa),e(oa,Ih),e(So,Sh),e(So,ta),e(ta,Dh),e(So,Wh),e(He,Qh),y(Wt,He,null),f(t,Ud,g),f(t,Do,g),e(Do,Qt),e(Qt,gi),y(es,gi,null),e(Do,Bh),e(Do,ui),e(ui,Uh),f(t,Hd,g),f(t,uo,g),y(os,uo,null),e(uo,Hh),e(uo,_i),e(_i,Rh),e(uo,Vh),e(uo,Bt),e(Bt,na),e(na,Gh),e(Bt,Kh),e(Bt,sa),e(sa,Jh),e(Bt,Xh),f(t,Rd,g),f(t,Wo,g),e(Wo,Ut),e(Ut,wi),y(ts,wi,null),e(Wo,Yh),e(Wo,ki),e(ki,Zh),f(t,Vd,g),f(t,_o,g),y(ns,_o,null),e(_o,ep),e(_o,ss),e(ss,op),e(ss,bi),e(bi,tp),e(ss,np),e(_o,sp),e(_o,Ht),e(Ht,ra),e(ra,rp),e(Ht,ap),e(Ht,aa),e(aa,ip),e(Ht,lp),f(t,Gd,g),f(t,Qo,g),e(Qo,Rt),e(Rt,vi),y(rs,vi,null),e(Qo,dp),e(Qo,Ti),e(Ti,cp),f(t,Kd,g),f(t,Bo,g),y(as,Bo,null),e(Bo,mp),e(Bo,yi),e(yi,hp),f(t,Jd,g),f(t,Uo,g),y(is,Uo,null),e(Uo,pp),e(Uo,$i),e($i,fp),f(t,Xd,g),f(t,Ho,g),y(ls,Ho,null),e(Ho,gp),e(Ho,Li),e(Li,up),f(t,Yd,g),f(t,Ro,g),y(ds,Ro,null),e(Ro,_p),e(Ro,xi),e(xi,wp),f(t,Zd,g),f(t,Vo,g),y(cs,Vo,null),e(Vo,kp),e(Vo,Fi),e(Fi,bp),f(t,ec,g),f(t,Go,g),y(ms,Go,null),e(Go,vp),e(Go,Mi),e(Mi,Tp),f(t,oc,g),f(t,Ko,g),y(hs,Ko,null),e(Ko,yp),e(Ko,Ei),e(Ei,$p),f(t,tc,g),f(t,Jo,g),y(ps,Jo,null),e(Jo,Lp),e(Jo,qi),e(qi,xp),f(t,nc,g),f(t,Xo,g),y(fs,Xo,null),e(Xo,Fp),e(Xo,zi),e(zi,Mp),f(t,sc,g),f(t,Yo,g),y(gs,Yo,null),e(Yo,Ep),e(Yo,Ci),e(Ci,qp),f(t,rc,g),f(t,Zo,g),y(us,Zo,null),e(Zo,zp),e(Zo,ji),e(ji,Cp),f(t,ac,g),f(t,et,g),y(_s,et,null),e(et,jp),e(et,Oi),e(Oi,Op),f(t,ic,g),f(t,ot,g),y(ws,ot,null),e(ot,Pp),e(ot,Pi),e(Pi,Np),f(t,lc,g),f(t,tt,g),y(ks,tt,null),e(tt,Ap),e(tt,Ni),e(Ni,Ip),f(t,dc,g),f(t,nt,g),e(nt,Vt),e(Vt,Ai),y(bs,Ai,null),e(nt,Sp),e(nt,Ii),e(Ii,Dp),f(t,cc,g),f(t,Pe,g),y(vs,Pe,null),e(Pe,Wp),e(Pe,Si),e(Si,Qp),e(Pe,Bp),e(Pe,Ts),e(Ts,Up),e(Ts,ia),e(ia,Hp),e(Ts,Rp),e(Pe,Vp),e(Pe,ys),e(ys,Gp),e(ys,$s),e($s,Kp),e(ys,Jp),e(Pe,Xp),e(Pe,st),e(st,Yp),e(st,la),e(la,Zp),e(st,ef),e(st,Ls),e(Ls,of),e(st,tf),e(Pe,nf),e(Pe,xs),e(xs,sf),e(xs,Di),e(Di,rf),e(xs,af),e(Pe,lf),e(Pe,ro),y(Fs,ro,null),e(ro,df),e(ro,rt),e(rt,cf),e(rt,da),e(da,mf),e(rt,hf),e(rt,Wi),e(Wi,pf),e(rt,ff),e(ro,gf),y(Gt,ro,null),e(ro,uf),y(Kt,ro,null),f(t,mc,g),f(t,at,g),e(at,Jt),e(Jt,Qi),y(Ms,Qi,null),e(at,_f),e(at,Bi),e(Bi,wf),f(t,hc,g),f(t,Re,g),y(Es,Re,null),e(Re,kf),e(Re,qs),e(qs,bf),e(qs,Ui),e(Ui,vf),e(qs,Tf),e(Re,yf),e(Re,zs),e(zs,$f),e(zs,ca),e(ca,Lf),e(zs,xf),e(Re,Ff),e(Re,Cs),e(Cs,Mf),e(Cs,js),e(js,Ef),e(Cs,qf),e(Re,zf),e(Re,Be),y(Os,Be,null),e(Be,Cf),e(Be,it),e(it,jf),e(it,ma),e(ma,Of),e(it,Pf),e(it,Hi),e(Hi,Nf),e(it,Af),e(Be,If),y(Xt,Be,null),e(Be,Sf),y(Yt,Be,null),e(Be,Df),e(Be,Ri),e(Ri,Wf),e(Be,Qf),y(Zt,Be,null),f(t,pc,g),f(t,lt,g),e(lt,en),e(en,Vi),y(Ps,Vi,null),e(lt,Bf),e(lt,Gi),e(Gi,Uf),f(t,fc,g),f(t,Ve,g),y(Ns,Ve,null),e(Ve,Hf),e(Ve,Ki),e(Ki,Rf),e(Ve,Vf),e(Ve,As),e(As,Gf),e(As,ha),e(ha,Kf),e(As,Jf),e(Ve,Xf),e(Ve,Is),e(Is,Yf),e(Is,Ss),e(Ss,Zf),e(Is,eg),e(Ve,og),e(Ve,Ne),y(Ds,Ne,null),e(Ne,tg),e(Ne,dt),e(dt,ng),e(dt,pa),e(pa,sg),e(dt,rg),e(dt,Ji),e(Ji,ag),e(dt,ig),e(Ne,lg),y(on,Ne,null),e(Ne,dg),y(tn,Ne,null),e(Ne,cg),y(nn,Ne,null),e(Ne,mg),y(sn,Ne,null),e(Ne,hg),y(rn,Ne,null),f(t,gc,g),f(t,ct,g),e(ct,an),e(an,Xi),y(Ws,Xi,null),e(ct,pg),e(ct,Yi),e(Yi,fg),f(t,uc,g),f(t,Ge,g),y(Qs,Ge,null),e(Ge,gg),e(Ge,Zi),e(Zi,ug),e(Ge,_g),e(Ge,Bs),e(Bs,wg),e(Bs,fa),e(fa,kg),e(Bs,bg),e(Ge,vg),e(Ge,Us),e(Us,Tg),e(Us,Hs),e(Hs,yg),e(Us,$g),e(Ge,Lg),e(Ge,ao),y(Rs,ao,null),e(ao,xg),e(ao,mt),e(mt,Fg),e(mt,ga),e(ga,Mg),e(mt,Eg),e(mt,el),e(el,qg),e(mt,zg),e(ao,Cg),y(ln,ao,null),e(ao,jg),y(dn,ao,null),f(t,_c,g),f(t,ht,g),e(ht,cn),e(cn,ol),y(Vs,ol,null),e(ht,Og),e(ht,tl),e(tl,Pg),f(t,wc,g),f(t,Ke,g),y(Gs,Ke,null),e(Ke,Ng),e(Ke,nl),e(nl,Ag),e(Ke,Ig),e(Ke,Ks),e(Ks,Sg),e(Ks,ua),e(ua,Dg),e(Ks,Wg),e(Ke,Qg),e(Ke,Js),e(Js,Bg),e(Js,Xs),e(Xs,Ug),e(Js,Hg),e(Ke,Rg),e(Ke,Ye),y(Ys,Ye,null),e(Ye,Vg),e(Ye,pt),e(pt,Gg),e(pt,_a),e(_a,Kg),e(pt,Jg),e(pt,sl),e(sl,Xg),e(pt,Yg),e(Ye,Zg),y(mn,Ye,null),e(Ye,eu),y(hn,Ye,null),e(Ye,ou),y(pn,Ye,null),f(t,kc,g),f(t,ft,g),e(ft,fn),e(fn,rl),y(Zs,rl,null),e(ft,tu),e(ft,al),e(al,nu),f(t,bc,g),f(t,Je,g),y(er,Je,null),e(Je,su),e(Je,gt),e(gt,ru),e(gt,il),e(il,au),e(gt,iu),e(gt,ll),e(ll,lu),e(gt,du),e(Je,cu),e(Je,or),e(or,mu),e(or,wa),e(wa,hu),e(or,pu),e(Je,fu),e(Je,tr),e(tr,gu),e(tr,nr),e(nr,uu),e(tr,_u),e(Je,wu),e(Je,io),y(sr,io,null),e(io,ku),e(io,ut),e(ut,bu),e(ut,ka),e(ka,vu),e(ut,Tu),e(ut,dl),e(dl,yu),e(ut,$u),e(io,Lu),y(gn,io,null),e(io,xu),y(un,io,null),f(t,vc,g),f(t,_t,g),e(_t,_n),e(_n,cl),y(rr,cl,null),e(_t,Fu),e(_t,ml),e(ml,Mu),f(t,Tc,g),f(t,qe,g),y(ar,qe,null),e(qe,Eu),e(qe,hl),e(hl,qu),e(qe,zu),e(qe,ir),e(ir,Cu),e(ir,ba),e(ba,ju),e(ir,Ou),e(qe,Pu),e(qe,lr),e(lr,Nu),e(lr,dr),e(dr,Au),e(lr,Iu),e(qe,Su),y(wn,qe,null),e(qe,Du),e(qe,wt),e(wt,Wu),e(wt,va),e(va,Qu),e(wt,Bu),e(wt,cr),e(cr,Uu),e(wt,Hu),e(qe,Ru),e(qe,mr),e(mr,Vu),e(mr,pl),e(pl,Gu),e(mr,Ku),e(qe,Ju),e(qe,vo),y(hr,vo,null),e(vo,Xu),e(vo,kt),e(kt,Yu),e(kt,Ta),e(Ta,Zu),e(kt,e_),e(kt,fl),e(fl,o_),e(kt,t_),e(vo,n_),y(kn,vo,null),f(t,yc,g),f(t,bt,g),e(bt,bn),e(bn,gl),y(pr,gl,null),e(bt,s_),e(bt,ul),e(ul,r_),f(t,$c,g),f(t,Ie,g),y(fr,Ie,null),e(Ie,a_),e(Ie,gr),e(gr,i_),e(gr,_l),e(_l,l_),e(gr,d_),e(Ie,c_),e(Ie,ur),e(ur,m_),e(ur,ya),e(ya,h_),e(ur,p_),e(Ie,f_),e(Ie,_r),e(_r,g_),e(_r,wr),e(wr,u_),e(_r,__),e(Ie,w_),y(vn,Ie,null),e(Ie,k_),e(Ie,Ze),y(kr,Ze,null),e(Ze,b_),e(Ze,vt),e(vt,v_),e(vt,$a),e($a,T_),e(vt,y_),e(vt,wl),e(wl,$_),e(vt,L_),e(Ze,x_),y(Tn,Ze,null),e(Ze,F_),y(yn,Ze,null),e(Ze,M_),y($n,Ze,null),f(t,Lc,g),f(t,Tt,g),e(Tt,Ln),e(Ln,kl),y(br,kl,null),e(Tt,E_),e(Tt,bl),e(bl,q_),f(t,xc,g),f(t,Se,g),y(vr,Se,null),e(Se,z_),e(Se,yt),e(yt,C_),e(yt,vl),e(vl,j_),e(yt,O_),e(yt,Tl),e(Tl,P_),e(yt,N_),e(Se,A_),e(Se,Tr),e(Tr,I_),e(Tr,La),e(La,S_),e(Tr,D_),e(Se,W_),e(Se,yr),e(yr,Q_),e(yr,$r),e($r,B_),e(yr,U_),e(Se,H_),y(xn,Se,null),e(Se,R_),e(Se,eo),y(Lr,eo,null),e(eo,V_),e(eo,$t),e($t,G_),e($t,xa),e(xa,K_),e($t,J_),e($t,yl),e(yl,X_),e($t,Y_),e(eo,Z_),y(Fn,eo,null),e(eo,ew),y(Mn,eo,null),e(eo,ow),y(En,eo,null),f(t,Fc,g),f(t,Lt,g),e(Lt,qn),e(qn,$l),y(xr,$l,null),e(Lt,tw),e(Lt,Ll),e(Ll,nw),f(t,Mc,g),f(t,De,g),y(Fr,De,null),e(De,sw),e(De,xl),e(xl,rw),e(De,aw),e(De,Mr),e(Mr,iw),e(Mr,Fa),e(Fa,lw),e(Mr,dw),e(De,cw),e(De,Er),e(Er,mw),e(Er,qr),e(qr,hw),e(Er,pw),e(De,fw),y(zn,De,null),e(De,gw),e(De,oo),y(zr,oo,null),e(oo,uw),e(oo,xt),e(xt,_w),e(xt,Ma),e(Ma,ww),e(xt,kw),e(xt,Fl),e(Fl,bw),e(xt,vw),e(oo,Tw),y(Cn,oo,null),e(oo,yw),y(jn,oo,null),e(oo,$w),y(On,oo,null),f(t,Ec,g),f(t,Ft,g),e(Ft,Pn),e(Pn,Ml),y(Cr,Ml,null),e(Ft,Lw),e(Ft,El),e(El,xw),f(t,qc,g),f(t,We,g),y(jr,We,null),e(We,Fw),e(We,ql),e(ql,Mw),e(We,Ew),e(We,Or),e(Or,qw),e(Or,Ea),e(Ea,zw),e(Or,Cw),e(We,jw),e(We,Pr),e(Pr,Ow),e(Pr,Nr),e(Nr,Pw),e(Pr,Nw),e(We,Aw),y(Nn,We,null),e(We,Iw),e(We,to),y(Ar,to,null),e(to,Sw),e(to,Mt),e(Mt,Dw),e(Mt,qa),e(qa,Ww),e(Mt,Qw),e(Mt,zl),e(zl,Bw),e(Mt,Uw),e(to,Hw),y(An,to,null),e(to,Rw),y(In,to,null),e(to,Vw),y(Sn,to,null),f(t,zc,g),f(t,Et,g),e(Et,Dn),e(Dn,Cl),y(Ir,Cl,null),e(Et,Gw),e(Et,jl),e(jl,Kw),f(t,Cc,g),f(t,Qe,g),y(Sr,Qe,null),e(Qe,Jw),e(Qe,Ol),e(Ol,Xw),e(Qe,Yw),e(Qe,Dr),e(Dr,Zw),e(Dr,za),e(za,ek),e(Dr,ok),e(Qe,tk),e(Qe,Wr),e(Wr,nk),e(Wr,Qr),e(Qr,sk),e(Wr,rk),e(Qe,ak),y(Wn,Qe,null),e(Qe,ik),e(Qe,lo),y(Br,lo,null),e(lo,lk),e(lo,qt),e(qt,dk),e(qt,Ca),e(Ca,ck),e(qt,mk),e(qt,Pl),e(Pl,hk),e(qt,pk),e(lo,fk),y(Qn,lo,null),e(lo,gk),y(Bn,lo,null),jc=!0},p(t,[g]){const Ur={};g&2&&(Ur.$$scope={dirty:g,ctx:t}),Wt.$set(Ur);const Nl={};g&2&&(Nl.$$scope={dirty:g,ctx:t}),Gt.$set(Nl);const Al={};g&2&&(Al.$$scope={dirty:g,ctx:t}),Kt.$set(Al);const Il={};g&2&&(Il.$$scope={dirty:g,ctx:t}),Xt.$set(Il);const Hr={};g&2&&(Hr.$$scope={dirty:g,ctx:t}),Yt.$set(Hr);const Sl={};g&2&&(Sl.$$scope={dirty:g,ctx:t}),Zt.$set(Sl);const Dl={};g&2&&(Dl.$$scope={dirty:g,ctx:t}),on.$set(Dl);const Wl={};g&2&&(Wl.$$scope={dirty:g,ctx:t}),tn.$set(Wl);const Rr={};g&2&&(Rr.$$scope={dirty:g,ctx:t}),nn.$set(Rr);const Ql={};g&2&&(Ql.$$scope={dirty:g,ctx:t}),sn.$set(Ql);const Bl={};g&2&&(Bl.$$scope={dirty:g,ctx:t}),rn.$set(Bl);const Ul={};g&2&&(Ul.$$scope={dirty:g,ctx:t}),ln.$set(Ul);const Hl={};g&2&&(Hl.$$scope={dirty:g,ctx:t}),dn.$set(Hl);const Rl={};g&2&&(Rl.$$scope={dirty:g,ctx:t}),mn.$set(Rl);const Vl={};g&2&&(Vl.$$scope={dirty:g,ctx:t}),hn.$set(Vl);const wo={};g&2&&(wo.$$scope={dirty:g,ctx:t}),pn.$set(wo);const Gl={};g&2&&(Gl.$$scope={dirty:g,ctx:t}),gn.$set(Gl);const Kl={};g&2&&(Kl.$$scope={dirty:g,ctx:t}),un.$set(Kl);const Jl={};g&2&&(Jl.$$scope={dirty:g,ctx:t}),wn.$set(Jl);const zt={};g&2&&(zt.$$scope={dirty:g,ctx:t}),kn.$set(zt);const Xl={};g&2&&(Xl.$$scope={dirty:g,ctx:t}),vn.$set(Xl);const Yl={};g&2&&(Yl.$$scope={dirty:g,ctx:t}),Tn.$set(Yl);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:t}),yn.$set(Vr);const Zl={};g&2&&(Zl.$$scope={dirty:g,ctx:t}),$n.$set(Zl);const ed={};g&2&&(ed.$$scope={dirty:g,ctx:t}),xn.$set(ed);const od={};g&2&&(od.$$scope={dirty:g,ctx:t}),Fn.$set(od);const ze={};g&2&&(ze.$$scope={dirty:g,ctx:t}),Mn.$set(ze);const td={};g&2&&(td.$$scope={dirty:g,ctx:t}),En.$set(td);const nd={};g&2&&(nd.$$scope={dirty:g,ctx:t}),zn.$set(nd);const sd={};g&2&&(sd.$$scope={dirty:g,ctx:t}),Cn.$set(sd);const rd={};g&2&&(rd.$$scope={dirty:g,ctx:t}),jn.$set(rd);const Ct={};g&2&&(Ct.$$scope={dirty:g,ctx:t}),On.$set(Ct);const ad={};g&2&&(ad.$$scope={dirty:g,ctx:t}),Nn.$set(ad);const jt={};g&2&&(jt.$$scope={dirty:g,ctx:t}),An.$set(jt);const id={};g&2&&(id.$$scope={dirty:g,ctx:t}),In.$set(id);const ld={};g&2&&(ld.$$scope={dirty:g,ctx:t}),Sn.$set(ld);const Gr={};g&2&&(Gr.$$scope={dirty:g,ctx:t}),Wn.$set(Gr);const dd={};g&2&&(dd.$$scope={dirty:g,ctx:t}),Qn.$set(dd);const cd={};g&2&&(cd.$$scope={dirty:g,ctx:t}),Bn.$set(cd)},i(t){jc||($(d.$$.fragment,t),$(ee.$$.fragment,t),$(te.$$.fragment,t),$(Kn.$$.fragment,t),$(Jn.$$.fragment,t),$(Xn.$$.fragment,t),$(Yn.$$.fragment,t),$(Wt.$$.fragment,t),$(es.$$.fragment,t),$(os.$$.fragment,t),$(ts.$$.fragment,t),$(ns.$$.fragment,t),$(rs.$$.fragment,t),$(as.$$.fragment,t),$(is.$$.fragment,t),$(ls.$$.fragment,t),$(ds.$$.fragment,t),$(cs.$$.fragment,t),$(ms.$$.fragment,t),$(hs.$$.fragment,t),$(ps.$$.fragment,t),$(fs.$$.fragment,t),$(gs.$$.fragment,t),$(us.$$.fragment,t),$(_s.$$.fragment,t),$(ws.$$.fragment,t),$(ks.$$.fragment,t),$(bs.$$.fragment,t),$(vs.$$.fragment,t),$(Fs.$$.fragment,t),$(Gt.$$.fragment,t),$(Kt.$$.fragment,t),$(Ms.$$.fragment,t),$(Es.$$.fragment,t),$(Os.$$.fragment,t),$(Xt.$$.fragment,t),$(Yt.$$.fragment,t),$(Zt.$$.fragment,t),$(Ps.$$.fragment,t),$(Ns.$$.fragment,t),$(Ds.$$.fragment,t),$(on.$$.fragment,t),$(tn.$$.fragment,t),$(nn.$$.fragment,t),$(sn.$$.fragment,t),$(rn.$$.fragment,t),$(Ws.$$.fragment,t),$(Qs.$$.fragment,t),$(Rs.$$.fragment,t),$(ln.$$.fragment,t),$(dn.$$.fragment,t),$(Vs.$$.fragment,t),$(Gs.$$.fragment,t),$(Ys.$$.fragment,t),$(mn.$$.fragment,t),$(hn.$$.fragment,t),$(pn.$$.fragment,t),$(Zs.$$.fragment,t),$(er.$$.fragment,t),$(sr.$$.fragment,t),$(gn.$$.fragment,t),$(un.$$.fragment,t),$(rr.$$.fragment,t),$(ar.$$.fragment,t),$(wn.$$.fragment,t),$(hr.$$.fragment,t),$(kn.$$.fragment,t),$(pr.$$.fragment,t),$(fr.$$.fragment,t),$(vn.$$.fragment,t),$(kr.$$.fragment,t),$(Tn.$$.fragment,t),$(yn.$$.fragment,t),$($n.$$.fragment,t),$(br.$$.fragment,t),$(vr.$$.fragment,t),$(xn.$$.fragment,t),$(Lr.$$.fragment,t),$(Fn.$$.fragment,t),$(Mn.$$.fragment,t),$(En.$$.fragment,t),$(xr.$$.fragment,t),$(Fr.$$.fragment,t),$(zn.$$.fragment,t),$(zr.$$.fragment,t),$(Cn.$$.fragment,t),$(jn.$$.fragment,t),$(On.$$.fragment,t),$(Cr.$$.fragment,t),$(jr.$$.fragment,t),$(Nn.$$.fragment,t),$(Ar.$$.fragment,t),$(An.$$.fragment,t),$(In.$$.fragment,t),$(Sn.$$.fragment,t),$(Ir.$$.fragment,t),$(Sr.$$.fragment,t),$(Wn.$$.fragment,t),$(Br.$$.fragment,t),$(Qn.$$.fragment,t),$(Bn.$$.fragment,t),jc=!0)},o(t){L(d.$$.fragment,t),L(ee.$$.fragment,t),L(te.$$.fragment,t),L(Kn.$$.fragment,t),L(Jn.$$.fragment,t),L(Xn.$$.fragment,t),L(Yn.$$.fragment,t),L(Wt.$$.fragment,t),L(es.$$.fragment,t),L(os.$$.fragment,t),L(ts.$$.fragment,t),L(ns.$$.fragment,t),L(rs.$$.fragment,t),L(as.$$.fragment,t),L(is.$$.fragment,t),L(ls.$$.fragment,t),L(ds.$$.fragment,t),L(cs.$$.fragment,t),L(ms.$$.fragment,t),L(hs.$$.fragment,t),L(ps.$$.fragment,t),L(fs.$$.fragment,t),L(gs.$$.fragment,t),L(us.$$.fragment,t),L(_s.$$.fragment,t),L(ws.$$.fragment,t),L(ks.$$.fragment,t),L(bs.$$.fragment,t),L(vs.$$.fragment,t),L(Fs.$$.fragment,t),L(Gt.$$.fragment,t),L(Kt.$$.fragment,t),L(Ms.$$.fragment,t),L(Es.$$.fragment,t),L(Os.$$.fragment,t),L(Xt.$$.fragment,t),L(Yt.$$.fragment,t),L(Zt.$$.fragment,t),L(Ps.$$.fragment,t),L(Ns.$$.fragment,t),L(Ds.$$.fragment,t),L(on.$$.fragment,t),L(tn.$$.fragment,t),L(nn.$$.fragment,t),L(sn.$$.fragment,t),L(rn.$$.fragment,t),L(Ws.$$.fragment,t),L(Qs.$$.fragment,t),L(Rs.$$.fragment,t),L(ln.$$.fragment,t),L(dn.$$.fragment,t),L(Vs.$$.fragment,t),L(Gs.$$.fragment,t),L(Ys.$$.fragment,t),L(mn.$$.fragment,t),L(hn.$$.fragment,t),L(pn.$$.fragment,t),L(Zs.$$.fragment,t),L(er.$$.fragment,t),L(sr.$$.fragment,t),L(gn.$$.fragment,t),L(un.$$.fragment,t),L(rr.$$.fragment,t),L(ar.$$.fragment,t),L(wn.$$.fragment,t),L(hr.$$.fragment,t),L(kn.$$.fragment,t),L(pr.$$.fragment,t),L(fr.$$.fragment,t),L(vn.$$.fragment,t),L(kr.$$.fragment,t),L(Tn.$$.fragment,t),L(yn.$$.fragment,t),L($n.$$.fragment,t),L(br.$$.fragment,t),L(vr.$$.fragment,t),L(xn.$$.fragment,t),L(Lr.$$.fragment,t),L(Fn.$$.fragment,t),L(Mn.$$.fragment,t),L(En.$$.fragment,t),L(xr.$$.fragment,t),L(Fr.$$.fragment,t),L(zn.$$.fragment,t),L(zr.$$.fragment,t),L(Cn.$$.fragment,t),L(jn.$$.fragment,t),L(On.$$.fragment,t),L(Cr.$$.fragment,t),L(jr.$$.fragment,t),L(Nn.$$.fragment,t),L(Ar.$$.fragment,t),L(An.$$.fragment,t),L(In.$$.fragment,t),L(Sn.$$.fragment,t),L(Ir.$$.fragment,t),L(Sr.$$.fragment,t),L(Wn.$$.fragment,t),L(Br.$$.fragment,t),L(Qn.$$.fragment,t),L(Bn.$$.fragment,t),jc=!1},d(t){o(l),t&&o(k),t&&o(h),x(d),t&&o(J),t&&o(q),x(ee),t&&o(le),t&&o(G),t&&o(j),t&&o(ne),t&&o(de),t&&o(se),t&&o(ce),t&&o(C),t&&o(B),t&&o(re),t&&o(Te),t&&o(me),t&&o(ye),t&&o(I),x(te),t&&o(fd),t&&o($e),t&&o(yd),t&&o(ko),t&&o(xd),t&&o(bo),t&&o(Fd),t&&o(Nt),t&&o(Md),t&&o(At),t&&o(Ed),t&&o(Xe),t&&o(Id),t&&o(It),t&&o(Sd),t&&o(Oo),x(Kn),t&&o(Dd),t&&o(Po),t&&o(Wd),x(Jn,t),t&&o(Qd),t&&o(No),x(Xn),t&&o(Bd),t&&o(He),x(Yn),x(Wt),t&&o(Ud),t&&o(Do),x(es),t&&o(Hd),t&&o(uo),x(os),t&&o(Rd),t&&o(Wo),x(ts),t&&o(Vd),t&&o(_o),x(ns),t&&o(Gd),t&&o(Qo),x(rs),t&&o(Kd),t&&o(Bo),x(as),t&&o(Jd),t&&o(Uo),x(is),t&&o(Xd),t&&o(Ho),x(ls),t&&o(Yd),t&&o(Ro),x(ds),t&&o(Zd),t&&o(Vo),x(cs),t&&o(ec),t&&o(Go),x(ms),t&&o(oc),t&&o(Ko),x(hs),t&&o(tc),t&&o(Jo),x(ps),t&&o(nc),t&&o(Xo),x(fs),t&&o(sc),t&&o(Yo),x(gs),t&&o(rc),t&&o(Zo),x(us),t&&o(ac),t&&o(et),x(_s),t&&o(ic),t&&o(ot),x(ws),t&&o(lc),t&&o(tt),x(ks),t&&o(dc),t&&o(nt),x(bs),t&&o(cc),t&&o(Pe),x(vs),x(Fs),x(Gt),x(Kt),t&&o(mc),t&&o(at),x(Ms),t&&o(hc),t&&o(Re),x(Es),x(Os),x(Xt),x(Yt),x(Zt),t&&o(pc),t&&o(lt),x(Ps),t&&o(fc),t&&o(Ve),x(Ns),x(Ds),x(on),x(tn),x(nn),x(sn),x(rn),t&&o(gc),t&&o(ct),x(Ws),t&&o(uc),t&&o(Ge),x(Qs),x(Rs),x(ln),x(dn),t&&o(_c),t&&o(ht),x(Vs),t&&o(wc),t&&o(Ke),x(Gs),x(Ys),x(mn),x(hn),x(pn),t&&o(kc),t&&o(ft),x(Zs),t&&o(bc),t&&o(Je),x(er),x(sr),x(gn),x(un),t&&o(vc),t&&o(_t),x(rr),t&&o(Tc),t&&o(qe),x(ar),x(wn),x(hr),x(kn),t&&o(yc),t&&o(bt),x(pr),t&&o($c),t&&o(Ie),x(fr),x(vn),x(kr),x(Tn),x(yn),x($n),t&&o(Lc),t&&o(Tt),x(br),t&&o(xc),t&&o(Se),x(vr),x(xn),x(Lr),x(Fn),x(Mn),x(En),t&&o(Fc),t&&o(Lt),x(xr),t&&o(Mc),t&&o(De),x(Fr),x(zn),x(zr),x(Cn),x(jn),x(On),t&&o(Ec),t&&o(Ft),x(Cr),t&&o(qc),t&&o(We),x(jr),x(Nn),x(Ar),x(An),x(In),x(Sn),t&&o(zc),t&&o(Et),x(Ir),t&&o(Cc),t&&o(Qe),x(Sr),x(Wn),x(Br),x(Qn),x(Bn)}}}const sy={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function ry(M){return _T(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hy extends pT{constructor(l){super();fT(this,l,ry,ny,gT,{})}}export{hy as default,sy as metadata};
