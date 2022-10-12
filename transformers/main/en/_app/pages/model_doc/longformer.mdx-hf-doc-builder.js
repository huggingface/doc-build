import{S as HT,i as KT,s as RT,e as r,k as c,w as v,t as n,Y as on,M as VT,c as a,d as t,m,a as i,x as y,h as s,Z as nn,b as _,G as e,g as f,y as T,q as $,o as L,B as x,v as GT,L as De}from"../../chunks/vendor-hf-doc-builder.js";import{T as et}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Pe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as tt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function JT(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerConfig, LongformerModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function YT(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=r("p"),k=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function XT(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("When used with "),h=r("code"),g=n("is_split_into_words=True"),b=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"When used with "),h=a(p,"CODE",{});var z=i(h);g=s(z,"is_split_into_words=True"),z.forEach(t),b=s(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function ZT(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizerFast
tokenizer = LongformerTokenizerFast.from_pretrained("allenai/longformer-base-4096")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = LongformerTokenizerFast.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=r("p"),k=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function e1(q){let d,k,h,g,b,l,p,z;return{c(){d=r("p"),k=n("When used with "),h=r("code"),g=n("is_split_into_words=True"),b=n(", this tokenizer needs to be instantiated with "),l=r("code"),p=n("add_prefix_space=True"),z=n(".")},l(ie){d=a(ie,"P",{});var Z=i(d);k=s(Z,"When used with "),h=a(Z,"CODE",{});var A=i(h);g=s(A,"is_split_into_words=True"),A.forEach(t),b=s(Z,", this tokenizer needs to be instantiated with "),l=a(Z,"CODE",{});var te=i(l);p=s(te,"add_prefix_space=True"),te.forEach(t),z=s(Z,"."),Z.forEach(t)},m(ie,Z){f(ie,d,Z),e(d,k),e(d,h),e(h,g),e(d,b),e(d,l),e(l,p),e(d,z)},d(ie){ie&&t(d)}}}function t1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function o1(q){let d,k,h,g,b;return g=new Pe({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){d=r("p"),k=n("Examples:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Examples:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function n1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function s1(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer, LongformerForMaskedLM

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)`}}),{c(){d=r("p"),k=n("Mask filling example:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Mask filling example:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function r1(q){let d,k;return d=new Pe({props:{code:`TXT = (
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
[<span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;skinny&#x27;</span>, <span class="hljs-string">&#x27;thin&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;vegetarian&#x27;</span>]`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,g){T(d,h,g),k=!0},p:De,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function a1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function i1(q){let d,k,h,g,b;return g=new Pe({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){d=r("p"),k=n("Example of single-label classification:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example of single-label classification:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function l1(q){let d,k;return d=new Pe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = LongformerForSequenceClassification.from_pretrained("jpwahle/longformer-base-plagiarism-detection", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.44</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,g){T(d,h,g),k=!0},p:De,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function d1(q){let d,k,h,g,b;return g=new Pe({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){d=r("p"),k=n("Example of multi-label classification:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example of multi-label classification:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function c1(q){let d,k;return d=new Pe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,g){T(d,h,g),k=!0},p:De,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function m1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function h1(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function p1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function f1(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
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
[<span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>]`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function g1(q){let d,k;return d=new Pe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.63</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,g){T(d,h,g),k=!0},p:De,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function u1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function _1(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
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
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){d=r("p"),k=n("Examples:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Examples:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function w1(q){let d,k,h,g,b,l,p,z,ie,Z,A,te,oe,F,be,H,ve,ge,S,ye,me,G,Te,ue,W,$e,_e,Q,pe,Le,re,j,O,we,U,ne,xe,K,Fe,Me,C,Ee,J,fe,qe,Y,ke,ae,D,he,X,ze,ee,P,je,N,le,ce;return{c(){d=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),g=n("transformers"),b=n(" accept two formats as input:"),l=c(),p=r("ul"),z=r("li"),ie=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),A=r("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),me=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ue=n(" and "),W=r("code"),$e=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),pe=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),re=c(),j=r("ul"),O=r("li"),we=n("a single Tensor with "),U=r("code"),ne=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),fe=n("model([input_ids, attention_mask])"),qe=n(" or "),Y=r("code"),ke=n("model([input_ids, attention_mask, token_type_ids])"),ae=c(),D=r("li"),he=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),le=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){d=a(w,"P",{});var E=i(d);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);g=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=m(w),p=a(w,"UL",{});var se=i(p);z=a(se,"LI",{});var Re=i(z);ie=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),Z=m(se),A=a(se,"LI",{});var Se=i(A);te=s(Se,"having all inputs as a list, tuple or dict in the first positional argument."),Se.forEach(t),se.forEach(t),oe=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),me=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var ot=i(G);Te=s(ot,"fit()"),ot.forEach(t),ue=s(M," and "),W=a(M,"CODE",{});var We=i(W);$e=s(We,"predict()"),We.forEach(t),_e=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Qe=i(Q);pe=s(Qe,"Functional"),Qe.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),re=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);we=s(R,"a single Tensor with "),U=a(R,"CODE",{});var Ue=i(U);ne=s(Ue,"input_ids"),Ue.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var nt=i(K);Fe=s(nt,"model(input_ids)"),nt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Ne=i(J);fe=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),qe=s(V," or "),Y=a(V,"CODE",{});var Ge=i(Y);ke=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),ae=m(B),D=a(B,"LI",{});var Ce=i(D);he=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a(Ce,"CODE",{});var Ae=i(X);ze=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ce.forEach(t),B.forEach(t),ee=m(w),P=a(w,"P",{});var de=i(P);je=s(de,`Note that when creating models and layers with
`),N=a(de,"A",{href:!0,rel:!0});var Je=i(N);le=s(Je,"subclassing"),Je.forEach(t),ce=s(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){_(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(N,"rel","nofollow")},m(w,E){f(w,d,E),e(d,k),e(d,h),e(h,g),e(d,b),f(w,l,E),f(w,p,E),e(p,z),e(z,ie),e(p,Z),e(p,A),e(A,te),f(w,oe,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,ge),e(F,S),e(S,ye),e(F,me),e(F,G),e(G,Te),e(F,ue),e(F,W),e(W,$e),e(F,_e),e(F,Q),e(Q,pe),e(F,Le),f(w,re,E),f(w,j,E),e(j,O),e(O,we),e(O,U),e(U,ne),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,fe),e(C,qe),e(C,Y),e(Y,ke),e(j,ae),e(j,D),e(D,he),e(D,X),e(X,ze),f(w,ee,E),f(w,P,E),e(P,je),e(P,N),e(N,le),e(P,ce)},d(w){w&&t(d),w&&t(l),w&&t(p),w&&t(oe),w&&t(F),w&&t(re),w&&t(j),w&&t(ee),w&&t(P)}}}function k1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function b1(q){let d,k,h,g,b,l,p,z,ie,Z,A,te,oe,F,be,H,ve,ge,S,ye,me,G,Te,ue,W,$e,_e,Q,pe,Le,re,j,O,we,U,ne,xe,K,Fe,Me,C,Ee,J,fe,qe,Y,ke,ae,D,he,X,ze,ee,P,je,N,le,ce;return{c(){d=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),g=n("transformers"),b=n(" accept two formats as input:"),l=c(),p=r("ul"),z=r("li"),ie=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),A=r("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),me=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ue=n(" and "),W=r("code"),$e=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),pe=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),re=c(),j=r("ul"),O=r("li"),we=n("a single Tensor with "),U=r("code"),ne=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),fe=n("model([input_ids, attention_mask])"),qe=n(" or "),Y=r("code"),ke=n("model([input_ids, attention_mask, token_type_ids])"),ae=c(),D=r("li"),he=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),le=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){d=a(w,"P",{});var E=i(d);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);g=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=m(w),p=a(w,"UL",{});var se=i(p);z=a(se,"LI",{});var Re=i(z);ie=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),Z=m(se),A=a(se,"LI",{});var Se=i(A);te=s(Se,"having all inputs as a list, tuple or dict in the first positional argument."),Se.forEach(t),se.forEach(t),oe=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),me=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var ot=i(G);Te=s(ot,"fit()"),ot.forEach(t),ue=s(M," and "),W=a(M,"CODE",{});var We=i(W);$e=s(We,"predict()"),We.forEach(t),_e=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Qe=i(Q);pe=s(Qe,"Functional"),Qe.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),re=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);we=s(R,"a single Tensor with "),U=a(R,"CODE",{});var Ue=i(U);ne=s(Ue,"input_ids"),Ue.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var nt=i(K);Fe=s(nt,"model(input_ids)"),nt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Ne=i(J);fe=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),qe=s(V," or "),Y=a(V,"CODE",{});var Ge=i(Y);ke=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),ae=m(B),D=a(B,"LI",{});var Ce=i(D);he=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a(Ce,"CODE",{});var Ae=i(X);ze=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ce.forEach(t),B.forEach(t),ee=m(w),P=a(w,"P",{});var de=i(P);je=s(de,`Note that when creating models and layers with
`),N=a(de,"A",{href:!0,rel:!0});var Je=i(N);le=s(Je,"subclassing"),Je.forEach(t),ce=s(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){_(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(N,"rel","nofollow")},m(w,E){f(w,d,E),e(d,k),e(d,h),e(h,g),e(d,b),f(w,l,E),f(w,p,E),e(p,z),e(z,ie),e(p,Z),e(p,A),e(A,te),f(w,oe,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,ge),e(F,S),e(S,ye),e(F,me),e(F,G),e(G,Te),e(F,ue),e(F,W),e(W,$e),e(F,_e),e(F,Q),e(Q,pe),e(F,Le),f(w,re,E),f(w,j,E),e(j,O),e(O,we),e(O,U),e(U,ne),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,fe),e(C,qe),e(C,Y),e(Y,ke),e(j,ae),e(j,D),e(D,he),e(D,X),e(X,ze),f(w,ee,E),f(w,P,E),e(P,je),e(P,N),e(N,le),e(P,ce)},d(w){w&&t(d),w&&t(l),w&&t(p),w&&t(oe),w&&t(F),w&&t(re),w&&t(j),w&&t(ee),w&&t(P)}}}function v1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function y1(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function T1(q){let d,k;return d=new Pe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.44</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,g){T(d,h,g),k=!0},p:De,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function $1(q){let d,k,h,g,b,l,p,z,ie,Z,A,te,oe,F,be,H,ve,ge,S,ye,me,G,Te,ue,W,$e,_e,Q,pe,Le,re,j,O,we,U,ne,xe,K,Fe,Me,C,Ee,J,fe,qe,Y,ke,ae,D,he,X,ze,ee,P,je,N,le,ce;return{c(){d=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),g=n("transformers"),b=n(" accept two formats as input:"),l=c(),p=r("ul"),z=r("li"),ie=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),A=r("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),me=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ue=n(" and "),W=r("code"),$e=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),pe=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),re=c(),j=r("ul"),O=r("li"),we=n("a single Tensor with "),U=r("code"),ne=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),fe=n("model([input_ids, attention_mask])"),qe=n(" or "),Y=r("code"),ke=n("model([input_ids, attention_mask, token_type_ids])"),ae=c(),D=r("li"),he=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),le=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){d=a(w,"P",{});var E=i(d);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);g=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=m(w),p=a(w,"UL",{});var se=i(p);z=a(se,"LI",{});var Re=i(z);ie=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),Z=m(se),A=a(se,"LI",{});var Se=i(A);te=s(Se,"having all inputs as a list, tuple or dict in the first positional argument."),Se.forEach(t),se.forEach(t),oe=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),me=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var ot=i(G);Te=s(ot,"fit()"),ot.forEach(t),ue=s(M," and "),W=a(M,"CODE",{});var We=i(W);$e=s(We,"predict()"),We.forEach(t),_e=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Qe=i(Q);pe=s(Qe,"Functional"),Qe.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),re=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);we=s(R,"a single Tensor with "),U=a(R,"CODE",{});var Ue=i(U);ne=s(Ue,"input_ids"),Ue.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var nt=i(K);Fe=s(nt,"model(input_ids)"),nt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Ne=i(J);fe=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),qe=s(V," or "),Y=a(V,"CODE",{});var Ge=i(Y);ke=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),ae=m(B),D=a(B,"LI",{});var Ce=i(D);he=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a(Ce,"CODE",{});var Ae=i(X);ze=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ce.forEach(t),B.forEach(t),ee=m(w),P=a(w,"P",{});var de=i(P);je=s(de,`Note that when creating models and layers with
`),N=a(de,"A",{href:!0,rel:!0});var Je=i(N);le=s(Je,"subclassing"),Je.forEach(t),ce=s(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){_(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(N,"rel","nofollow")},m(w,E){f(w,d,E),e(d,k),e(d,h),e(h,g),e(d,b),f(w,l,E),f(w,p,E),e(p,z),e(z,ie),e(p,Z),e(p,A),e(A,te),f(w,oe,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,ge),e(F,S),e(S,ye),e(F,me),e(F,G),e(G,Te),e(F,ue),e(F,W),e(W,$e),e(F,_e),e(F,Q),e(Q,pe),e(F,Le),f(w,re,E),f(w,j,E),e(j,O),e(O,we),e(O,U),e(U,ne),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,fe),e(C,qe),e(C,Y),e(Y,ke),e(j,ae),e(j,D),e(D,he),e(D,X),e(X,ze),f(w,ee,E),f(w,P,E),e(P,je),e(P,N),e(N,le),e(P,ce)},d(w){w&&t(d),w&&t(l),w&&t(p),w&&t(oe),w&&t(F),w&&t(re),w&&t(j),w&&t(ee),w&&t(P)}}}function L1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function x1(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function F1(q){let d,k;return d=new Pe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.96</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,g){T(d,h,g),k=!0},p:De,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function M1(q){let d,k,h,g,b,l,p,z,ie,Z,A,te,oe,F,be,H,ve,ge,S,ye,me,G,Te,ue,W,$e,_e,Q,pe,Le,re,j,O,we,U,ne,xe,K,Fe,Me,C,Ee,J,fe,qe,Y,ke,ae,D,he,X,ze,ee,P,je,N,le,ce;return{c(){d=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),g=n("transformers"),b=n(" accept two formats as input:"),l=c(),p=r("ul"),z=r("li"),ie=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),A=r("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),me=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ue=n(" and "),W=r("code"),$e=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),pe=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),re=c(),j=r("ul"),O=r("li"),we=n("a single Tensor with "),U=r("code"),ne=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),fe=n("model([input_ids, attention_mask])"),qe=n(" or "),Y=r("code"),ke=n("model([input_ids, attention_mask, token_type_ids])"),ae=c(),D=r("li"),he=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),le=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){d=a(w,"P",{});var E=i(d);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);g=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=m(w),p=a(w,"UL",{});var se=i(p);z=a(se,"LI",{});var Re=i(z);ie=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),Z=m(se),A=a(se,"LI",{});var Se=i(A);te=s(Se,"having all inputs as a list, tuple or dict in the first positional argument."),Se.forEach(t),se.forEach(t),oe=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),me=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var ot=i(G);Te=s(ot,"fit()"),ot.forEach(t),ue=s(M," and "),W=a(M,"CODE",{});var We=i(W);$e=s(We,"predict()"),We.forEach(t),_e=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Qe=i(Q);pe=s(Qe,"Functional"),Qe.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),re=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);we=s(R,"a single Tensor with "),U=a(R,"CODE",{});var Ue=i(U);ne=s(Ue,"input_ids"),Ue.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var nt=i(K);Fe=s(nt,"model(input_ids)"),nt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Ne=i(J);fe=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),qe=s(V," or "),Y=a(V,"CODE",{});var Ge=i(Y);ke=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),ae=m(B),D=a(B,"LI",{});var Ce=i(D);he=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a(Ce,"CODE",{});var Ae=i(X);ze=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ce.forEach(t),B.forEach(t),ee=m(w),P=a(w,"P",{});var de=i(P);je=s(de,`Note that when creating models and layers with
`),N=a(de,"A",{href:!0,rel:!0});var Je=i(N);le=s(Je,"subclassing"),Je.forEach(t),ce=s(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){_(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(N,"rel","nofollow")},m(w,E){f(w,d,E),e(d,k),e(d,h),e(h,g),e(d,b),f(w,l,E),f(w,p,E),e(p,z),e(z,ie),e(p,Z),e(p,A),e(A,te),f(w,oe,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,ge),e(F,S),e(S,ye),e(F,me),e(F,G),e(G,Te),e(F,ue),e(F,W),e(W,$e),e(F,_e),e(F,Q),e(Q,pe),e(F,Le),f(w,re,E),f(w,j,E),e(j,O),e(O,we),e(O,U),e(U,ne),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,fe),e(C,qe),e(C,Y),e(Y,ke),e(j,ae),e(j,D),e(D,he),e(D,X),e(X,ze),f(w,ee,E),f(w,P,E),e(P,je),e(P,N),e(N,le),e(P,ce)},d(w){w&&t(d),w&&t(l),w&&t(p),w&&t(oe),w&&t(F),w&&t(re),w&&t(j),w&&t(ee),w&&t(P)}}}function E1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function q1(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function z1(q){let d,k;return d=new Pe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,g){T(d,h,g),k=!0},p:De,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function j1(q){let d,k,h,g,b,l,p,z,ie,Z,A,te,oe,F,be,H,ve,ge,S,ye,me,G,Te,ue,W,$e,_e,Q,pe,Le,re,j,O,we,U,ne,xe,K,Fe,Me,C,Ee,J,fe,qe,Y,ke,ae,D,he,X,ze,ee,P,je,N,le,ce;return{c(){d=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),g=n("transformers"),b=n(" accept two formats as input:"),l=c(),p=r("ul"),z=r("li"),ie=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),A=r("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),me=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ue=n(" and "),W=r("code"),$e=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),pe=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),re=c(),j=r("ul"),O=r("li"),we=n("a single Tensor with "),U=r("code"),ne=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),fe=n("model([input_ids, attention_mask])"),qe=n(" or "),Y=r("code"),ke=n("model([input_ids, attention_mask, token_type_ids])"),ae=c(),D=r("li"),he=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),le=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){d=a(w,"P",{});var E=i(d);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);g=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=m(w),p=a(w,"UL",{});var se=i(p);z=a(se,"LI",{});var Re=i(z);ie=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),Z=m(se),A=a(se,"LI",{});var Se=i(A);te=s(Se,"having all inputs as a list, tuple or dict in the first positional argument."),Se.forEach(t),se.forEach(t),oe=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),me=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var ot=i(G);Te=s(ot,"fit()"),ot.forEach(t),ue=s(M," and "),W=a(M,"CODE",{});var We=i(W);$e=s(We,"predict()"),We.forEach(t),_e=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Qe=i(Q);pe=s(Qe,"Functional"),Qe.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),re=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);we=s(R,"a single Tensor with "),U=a(R,"CODE",{});var Ue=i(U);ne=s(Ue,"input_ids"),Ue.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var nt=i(K);Fe=s(nt,"model(input_ids)"),nt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Ne=i(J);fe=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),qe=s(V," or "),Y=a(V,"CODE",{});var Ge=i(Y);ke=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),ae=m(B),D=a(B,"LI",{});var Ce=i(D);he=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a(Ce,"CODE",{});var Ae=i(X);ze=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ce.forEach(t),B.forEach(t),ee=m(w),P=a(w,"P",{});var de=i(P);je=s(de,`Note that when creating models and layers with
`),N=a(de,"A",{href:!0,rel:!0});var Je=i(N);le=s(Je,"subclassing"),Je.forEach(t),ce=s(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){_(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(N,"rel","nofollow")},m(w,E){f(w,d,E),e(d,k),e(d,h),e(h,g),e(d,b),f(w,l,E),f(w,p,E),e(p,z),e(z,ie),e(p,Z),e(p,A),e(A,te),f(w,oe,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,ge),e(F,S),e(S,ye),e(F,me),e(F,G),e(G,Te),e(F,ue),e(F,W),e(W,$e),e(F,_e),e(F,Q),e(Q,pe),e(F,Le),f(w,re,E),f(w,j,E),e(j,O),e(O,we),e(O,U),e(U,ne),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,fe),e(C,qe),e(C,Y),e(Y,ke),e(j,ae),e(j,D),e(D,he),e(D,X),e(X,ze),f(w,ee,E),f(w,P,E),e(P,je),e(P,N),e(N,le),e(P,ce)},d(w){w&&t(d),w&&t(l),w&&t(p),w&&t(oe),w&&t(F),w&&t(re),w&&t(j),w&&t(ee),w&&t(P)}}}function C1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function O1(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function P1(q){let d,k;return d=new Pe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),{c(){v(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,g){T(d,h,g),k=!0},p:De,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function N1(q){let d,k,h,g,b,l,p,z,ie,Z,A,te,oe,F,be,H,ve,ge,S,ye,me,G,Te,ue,W,$e,_e,Q,pe,Le,re,j,O,we,U,ne,xe,K,Fe,Me,C,Ee,J,fe,qe,Y,ke,ae,D,he,X,ze,ee,P,je,N,le,ce;return{c(){d=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),g=n("transformers"),b=n(" accept two formats as input:"),l=c(),p=r("ul"),z=r("li"),ie=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),A=r("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),me=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ue=n(" and "),W=r("code"),$e=n("predict()"),_e=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),pe=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),re=c(),j=r("ul"),O=r("li"),we=n("a single Tensor with "),U=r("code"),ne=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),fe=n("model([input_ids, attention_mask])"),qe=n(" or "),Y=r("code"),ke=n("model([input_ids, attention_mask, token_type_ids])"),ae=c(),D=r("li"),he=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),le=n("subclassing"),ce=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){d=a(w,"P",{});var E=i(d);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);g=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=m(w),p=a(w,"UL",{});var se=i(p);z=a(se,"LI",{});var Re=i(z);ie=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),Z=m(se),A=a(se,"LI",{});var Se=i(A);te=s(Se,"having all inputs as a list, tuple or dict in the first positional argument."),Se.forEach(t),se.forEach(t),oe=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),ge=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),me=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var ot=i(G);Te=s(ot,"fit()"),ot.forEach(t),ue=s(M," and "),W=a(M,"CODE",{});var We=i(W);$e=s(We,"predict()"),We.forEach(t),_e=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Qe=i(Q);pe=s(Qe,"Functional"),Qe.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),re=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);we=s(R,"a single Tensor with "),U=a(R,"CODE",{});var Ue=i(U);ne=s(Ue,"input_ids"),Ue.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var nt=i(K);Fe=s(nt,"model(input_ids)"),nt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Ne=i(J);fe=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),qe=s(V," or "),Y=a(V,"CODE",{});var Ge=i(Y);ke=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),ae=m(B),D=a(B,"LI",{});var Ce=i(D);he=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a(Ce,"CODE",{});var Ae=i(X);ze=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ce.forEach(t),B.forEach(t),ee=m(w),P=a(w,"P",{});var de=i(P);je=s(de,`Note that when creating models and layers with
`),N=a(de,"A",{href:!0,rel:!0});var Je=i(N);le=s(Je,"subclassing"),Je.forEach(t),ce=s(de,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),de.forEach(t),this.h()},h(){_(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(N,"rel","nofollow")},m(w,E){f(w,d,E),e(d,k),e(d,h),e(h,g),e(d,b),f(w,l,E),f(w,p,E),e(p,z),e(z,ie),e(p,Z),e(p,A),e(A,te),f(w,oe,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,ge),e(F,S),e(S,ye),e(F,me),e(F,G),e(G,Te),e(F,ue),e(F,W),e(W,$e),e(F,_e),e(F,Q),e(Q,pe),e(F,Le),f(w,re,E),f(w,j,E),e(j,O),e(O,we),e(O,U),e(U,ne),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,fe),e(C,qe),e(C,Y),e(Y,ke),e(j,ae),e(j,D),e(D,he),e(D,X),e(X,ze),f(w,ee,E),f(w,P,E),e(P,je),e(P,N),e(N,le),e(P,ce)},d(w){w&&t(d),w&&t(l),w&&t(p),w&&t(oe),w&&t(F),w&&t(re),w&&t(j),w&&t(ee),w&&t(P)}}}function A1(q){let d,k,h,g,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),g=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);g=s(z,"Module"),z.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){f(l,d,p),e(d,k),e(d,h),e(h,g),e(d,b)},d(l){l&&t(d)}}}function I1(q){let d,k,h,g,b;return g=new Pe({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(g.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);k=s(p,"Example:"),p.forEach(t),h=m(l),y(g.$$.fragment,l)},m(l,p){f(l,d,p),e(d,k),f(l,h,p),T(g,l,p),b=!0},p:De,i(l){b||($(g.$$.fragment,l),b=!0)},o(l){L(g.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(h),x(g,l)}}}function D1(q){let d,k,h,g,b,l,p,z,ie,Z,A,te,oe,F,be,H,ve,ge,S,ye,me,G,Te,ue,W,$e,_e,Q,pe,Le,re,j,O,we,U,ne,xe,K,Fe,Me,C,Ee,J,fe,qe,Y,ke,ae,D,he,X,ze,ee,P,je,N,le,ce,w,E,Ke,se,Re,Se,M,Ve,Be,ot='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',We,Qe,B='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',R,Ue,nt='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',V,Ne,Ge,Ce,Ae,de,Je,Bi,Nh,Ah,ic,DT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',lc,Wi,Ih,Dh,dc,St,Sh,cc,ST='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',mc,Qi,Bh,Wh,hc,Bt,Qh,Ui,Uh,Hh,Hi,Kh,Rh,pc,sn,Ki,Vh,Gh,Ri,Jh,fc,rn,Yh,Na,Xh,Zh,gc,bt,ep,uc,BT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',_c,wc,WT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',kc,bc,QT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',vc,yc,UT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Tc,$c,an,tp,ys,op,np,Lc,to,ln,Vi,Ts,sp,Gi,rp,xc,oo,Aa,ap,ip,Ia,lp,dp,Fc,$s,Mc,no,dn,Ji,Ls,cp,Yi,mp,Ec,ft,xs,hp,so,pp,Da,fp,gp,Sa,up,_p,wp,ro,kp,Ba,bp,vp,Fs,yp,Tp,$p,ao,Lp,Wa,xp,Fp,Qa,Mp,Ep,qp,cn,qc,io,mn,Xi,Ms,zp,Zi,jp,zc,Oe,Es,Cp,el,Op,Pp,tl,Np,Ap,hn,Ip,qs,Dp,ol,Sp,Bp,Wp,pn,Qp,zs,Up,Ua,Hp,Kp,Rp,Wt,js,Vp,nl,Gp,Jp,Cs,Ha,Yp,sl,Xp,Zp,Ka,ef,rl,tf,of,fn,Os,nf,al,sf,rf,gn,Ps,af,il,lf,df,un,Ns,cf,As,mf,ll,hf,pf,jc,lo,_n,dl,Is,ff,cl,gf,Cc,Ye,Ds,uf,Ss,_f,ml,wf,kf,bf,hl,vf,yf,wn,Tf,Bs,$f,pl,Lf,xf,Ff,kn,Mf,Ws,Ef,Ra,qf,zf,jf,bn,Qs,Cf,fl,Of,Oc,co,vn,gl,Us,Pf,ul,Nf,Pc,mo,Hs,Af,_l,If,Nc,ho,Ks,Df,wl,Sf,Ac,po,Rs,Bf,kl,Wf,Ic,fo,Vs,Qf,bl,Uf,Dc,go,Gs,Hf,vl,Kf,Sc,uo,Js,Rf,yl,Vf,Bc,_o,Ys,Gf,Tl,Jf,Wc,wo,Xs,Yf,$l,Xf,Qc,ko,Zs,Zf,Ll,eg,Uc,bo,er,tg,xl,og,Hc,vo,tr,ng,Fl,sg,Kc,yo,or,rg,Ml,ag,Rc,To,nr,ig,El,lg,Vc,$o,sr,dg,ql,cg,Gc,Lo,yn,zl,rr,mg,jl,hg,Jc,st,ar,pg,Cl,fg,gg,ir,ug,Va,_g,wg,kg,lr,bg,dr,vg,yg,Tg,xo,$g,Ga,Lg,xg,cr,Fg,Mg,Eg,mr,qg,Ol,zg,jg,Cg,Et,hr,Og,Fo,Pg,Ja,Ng,Ag,Pl,Ig,Dg,Sg,Tn,Bg,$n,Yc,Mo,Ln,Nl,pr,Wg,Al,Qg,Xc,gt,fr,Ug,gr,Hg,Il,Kg,Rg,Vg,ur,Gg,Ya,Jg,Yg,Xg,_r,Zg,wr,eu,tu,ou,mt,kr,nu,Eo,su,Xa,ru,au,Dl,iu,lu,du,xn,cu,Fn,mu,Sl,hu,pu,Mn,Zc,qo,En,Bl,br,fu,Wl,gu,em,ut,vr,uu,Ql,_u,wu,yr,ku,Za,bu,vu,yu,Tr,Tu,$r,$u,Lu,xu,rt,Lr,Fu,zo,Mu,ei,Eu,qu,Ul,zu,ju,Cu,qn,Ou,zn,Pu,jn,Nu,Cn,Au,On,tm,jo,Pn,Hl,xr,Iu,Kl,Du,om,_t,Fr,Su,Rl,Bu,Wu,Mr,Qu,ti,Uu,Hu,Ku,Er,Ru,qr,Vu,Gu,Ju,qt,zr,Yu,Co,Xu,oi,Zu,e_,Vl,t_,o_,n_,Nn,s_,An,nm,Oo,In,Gl,jr,r_,Jl,a_,sm,wt,Cr,i_,Yl,l_,d_,Or,c_,ni,m_,h_,p_,Pr,f_,Nr,g_,u_,__,vt,Ar,w_,Po,k_,si,b_,v_,Xl,y_,T_,$_,Dn,L_,Sn,x_,Bn,rm,No,Wn,Zl,Ir,F_,ed,M_,am,kt,Dr,E_,Ao,q_,td,z_,j_,od,C_,O_,P_,Sr,N_,ri,A_,I_,D_,Br,S_,Wr,B_,W_,Q_,zt,Qr,U_,Io,H_,ai,K_,R_,nd,V_,G_,J_,Qn,Y_,Un,im,Do,Hn,sd,Ur,X_,rd,Z_,lm,Xe,Hr,ew,ad,tw,ow,Kr,nw,ii,sw,rw,aw,Rr,iw,Vr,lw,dw,cw,Kn,mw,So,hw,li,pw,fw,Gr,gw,uw,_w,Jr,ww,id,kw,bw,vw,Qt,Yr,yw,Bo,Tw,di,$w,Lw,ld,xw,Fw,Mw,Rn,dm,Wo,Vn,dd,Xr,Ew,cd,qw,cm,at,Zr,zw,ea,jw,md,Cw,Ow,Pw,ta,Nw,ci,Aw,Iw,Dw,oa,Sw,na,Bw,Ww,Qw,Gn,Uw,yt,sa,Hw,Qo,Kw,mi,Rw,Vw,hd,Gw,Jw,Yw,Jn,Xw,Yn,Zw,Xn,mm,Uo,Zn,pd,ra,ek,fd,tk,hm,it,aa,ok,Ho,nk,gd,sk,rk,ud,ak,ik,lk,ia,dk,hi,ck,mk,hk,la,pk,da,fk,gk,uk,es,_k,Tt,ca,wk,Ko,kk,pi,bk,vk,_d,yk,Tk,$k,ts,Lk,os,xk,ns,pm,Ro,ss,wd,ma,Fk,kd,Mk,fm,lt,ha,Ek,bd,qk,zk,pa,jk,fi,Ck,Ok,Pk,fa,Nk,ga,Ak,Ik,Dk,rs,Sk,$t,ua,Bk,Vo,Wk,gi,Qk,Uk,vd,Hk,Kk,Rk,as,Vk,is,Gk,ls,gm,Go,ds,yd,_a,Jk,Td,Yk,um,dt,wa,Xk,$d,Zk,eb,ka,tb,ui,ob,nb,sb,ba,rb,va,ab,ib,lb,cs,db,Lt,ya,cb,Jo,mb,_i,hb,pb,Ld,fb,gb,ub,ms,_b,hs,wb,ps,_m,Yo,fs,xd,Ta,kb,Fd,bb,wm,ct,$a,vb,Md,yb,Tb,La,$b,wi,Lb,xb,Fb,xa,Mb,Fa,Eb,qb,zb,gs,jb,jt,Ma,Cb,Xo,Ob,ki,Pb,Nb,Ed,Ab,Ib,Db,us,Sb,_s,km;return l=new tt({}),F=new tt({}),E=new tt({}),Ts=new tt({}),$s=new Pe({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),Ls=new tt({}),xs=new I({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"pad_token_id",val:": int = 1"},{name:"bos_token_id",val:": int = 0"},{name:"eos_token_id",val:": int = 2"},{name:"vocab_size",val:": int = 30522"},{name:"hidden_size",val:": int = 768"},{name:"num_hidden_layers",val:": int = 12"},{name:"num_attention_heads",val:": int = 12"},{name:"intermediate_size",val:": int = 3072"},{name:"hidden_act",val:": str = 'gelu'"},{name:"hidden_dropout_prob",val:": float = 0.1"},{name:"attention_probs_dropout_prob",val:": float = 0.1"},{name:"max_position_embeddings",val:": int = 512"},{name:"type_vocab_size",val:": int = 2"},{name:"initializer_range",val:": float = 0.02"},{name:"layer_norm_eps",val:": float = 1e-12"},{name:"position_embedding_type",val:": str = 'absolute'"},{name:"use_cache",val:": bool = True"},{name:"classifier_dropout",val:": float = None"},{name:"onnx_export",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the Longformer model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel">LongformerModel</a> or <a href="/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel">TFLongformerModel</a>.`,name:"vocab_size"},{anchor:"transformers.LongformerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LongformerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LongformerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LongformerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LongformerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LongformerConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LongformerConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LongformerConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LongformerConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel">LongformerModel</a> or
<a href="/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel">TFLongformerModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LongformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LongformerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LongformerConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.LongformerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.LongformerConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/configuration_longformer.py#L46"}}),cn=new Ie({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[JT]},$$scope:{ctx:q}}}),Ms=new tt({}),Es=new I({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LongformerTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LongformerTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LongformerTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LongformerTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LongformerTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LongformerTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LongformerTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LongformerTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LongformerTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LongformerTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Longformer tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L116"}}),hn=new Ie({props:{anchor:"transformers.LongformerTokenizer.example",$$slots:{default:[YT]},$$scope:{ctx:q}}}),pn=new et({props:{$$slots:{default:[XT]},$$scope:{ctx:q}}}),js=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LongformerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LongformerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L353",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Os=new I({props:{name:"convert_tokens_to_string",anchor:"transformers.LongformerTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L318"}}),Ps=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LongformerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LongformerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L405",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ns=new I({props:{name:"get_special_tokens_mask",anchor:"transformers.LongformerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LongformerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LongformerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L378",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Is=new tt({}),Ds=new I({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LongformerTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LongformerTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LongformerTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LongformerTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LongformerTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LongformerTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LongformerTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LongformerTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LongformerTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LongformerTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Longformer tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LongformerTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer_fast.py#L91"}}),wn=new Ie({props:{anchor:"transformers.LongformerTokenizerFast.example",$$slots:{default:[ZT]},$$scope:{ctx:q}}}),kn=new et({props:{$$slots:{default:[e1]},$$scope:{ctx:q}}}),Qs=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LongformerTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LongformerTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LongformerTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer_fast.py#L301",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Us=new tt({}),Hs=new I({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L57"}}),Ks=new I({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L100"}}),Rs=new I({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L148"}}),Vs=new I({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L194"}}),Gs=new I({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L243"}}),Js=new I({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L289"}}),Ys=new I({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L337"}}),Xs=new I({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),Zs=new I({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),er=new I({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),tr=new I({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),or=new I({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),nr=new I({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),sr=new I({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),rr=new tt({}),ar=new I({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1537"}}),hr=new I({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Tn=new et({props:{$$slots:{default:[t1]},$$scope:{ctx:q}}}),$n=new Ie({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[o1]},$$scope:{ctx:q}}}),pr=new tt({}),fr=new I({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1772"}}),kr=new I({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),xn=new et({props:{$$slots:{default:[n1]},$$scope:{ctx:q}}}),Fn=new Ie({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[s1]},$$scope:{ctx:q}}}),Mn=new Ie({props:{anchor:"transformers.LongformerForMaskedLM.forward.example-2",$$slots:{default:[r1]},$$scope:{ctx:q}}}),br=new tt({}),vr=new I({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1885"}}),Lr=new I({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),qn=new et({props:{$$slots:{default:[a1]},$$scope:{ctx:q}}}),zn=new Ie({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[i1]},$$scope:{ctx:q}}}),jn=new Ie({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[l1]},$$scope:{ctx:q}}}),Cn=new Ie({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[d1]},$$scope:{ctx:q}}}),On=new Ie({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[c1]},$$scope:{ctx:q}}}),xr=new tt({}),Fr=new I({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2244"}}),zr=new I({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Nn=new et({props:{$$slots:{default:[m1]},$$scope:{ctx:q}}}),An=new Ie({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[h1]},$$scope:{ctx:q}}}),jr=new tt({}),Cr=new I({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2154"}}),Ar=new I({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Dn=new et({props:{$$slots:{default:[p1]},$$scope:{ctx:q}}}),Sn=new Ie({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[f1]},$$scope:{ctx:q}}}),Bn=new Ie({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[g1]},$$scope:{ctx:q}}}),Ir=new tt({}),Dr=new I({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2014"}}),Qr=new I({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qn=new et({props:{$$slots:{default:[u1]},$$scope:{ctx:q}}}),Un=new Ie({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[_1]},$$scope:{ctx:q}}}),Ur=new tt({}),Hr=new I({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2030"}}),Kn=new et({props:{$$slots:{default:[w1]},$$scope:{ctx:q}}}),Yr=new I({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2052"}}),Rn=new et({props:{$$slots:{default:[k1]},$$scope:{ctx:q}}}),Xr=new tt({}),Zr=new I({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2103"}}),Gn=new et({props:{$$slots:{default:[b1]},$$scope:{ctx:q}}}),sa=new I({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2120",returnDescription:`
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
`}}),Jn=new et({props:{$$slots:{default:[v1]},$$scope:{ctx:q}}}),Yn=new Ie({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[y1]},$$scope:{ctx:q}}}),Xn=new Ie({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[T1]},$$scope:{ctx:q}}}),ra=new tt({}),aa=new I({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2200"}}),es=new et({props:{$$slots:{default:[$1]},$$scope:{ctx:q}}}),ca=new I({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2215",returnDescription:`
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
`}}),ts=new et({props:{$$slots:{default:[L1]},$$scope:{ctx:q}}}),os=new Ie({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[x1]},$$scope:{ctx:q}}}),ns=new Ie({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[F1]},$$scope:{ctx:q}}}),ma=new tt({}),ha=new I({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2369"}}),rs=new et({props:{$$slots:{default:[M1]},$$scope:{ctx:q}}}),ua=new I({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2381",returnDescription:`
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
`}}),as=new et({props:{$$slots:{default:[E1]},$$scope:{ctx:q}}}),is=new Ie({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[q1]},$$scope:{ctx:q}}}),ls=new Ie({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[z1]},$$scope:{ctx:q}}}),_a=new tt({}),wa=new I({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2621"}}),cs=new et({props:{$$slots:{default:[j1]},$$scope:{ctx:q}}}),ya=new I({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2636",returnDescription:`
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
`}}),ms=new et({props:{$$slots:{default:[C1]},$$scope:{ctx:q}}}),hs=new Ie({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[O1]},$$scope:{ctx:q}}}),ps=new Ie({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[P1]},$$scope:{ctx:q}}}),Ta=new tt({}),$a=new I({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2485"}}),gs=new et({props:{$$slots:{default:[N1]},$$scope:{ctx:q}}}),Ma=new I({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2505",returnDescription:`
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
`}}),us=new et({props:{$$slots:{default:[A1]},$$scope:{ctx:q}}}),_s=new Ie({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[I1]},$$scope:{ctx:q}}}),{c(){d=r("meta"),k=c(),h=r("h1"),g=r("a"),b=r("span"),v(l.$$.fragment),p=c(),z=r("span"),ie=n("Longformer"),Z=c(),A=r("h2"),te=r("a"),oe=r("span"),v(F.$$.fragment),be=c(),H=r("span"),ve=n("Overview"),ge=c(),S=r("p"),ye=n("The Longformer model was presented in "),me=r("a"),G=n("Longformer: The Long-Document Transformer"),Te=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),ue=c(),W=r("p"),$e=n("The abstract from the paper is the following:"),_e=c(),Q=r("p"),pe=r("em"),Le=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),re=c(),j=r("p"),O=n("Tips:"),we=c(),U=r("ul"),ne=r("li"),xe=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),K=r("code"),Fe=n("token_type_ids"),Me=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),C=r("code"),Ee=n("tokenizer.sep_token"),J=n(` (or
`),fe=r("code"),qe=n("</s>"),Y=n(")."),ke=c(),ae=r("p"),D=n("This model was contributed by "),he=r("a"),X=n("beltagy"),ze=n(". The Authors\u2019 code can be found "),ee=r("a"),P=n("here"),je=n("."),N=c(),le=r("h2"),ce=r("a"),w=r("span"),v(E.$$.fragment),Ke=c(),se=r("span"),Re=n("Longformer Self Attention"),Se=c(),M=r("p"),Ve=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),Be=new on,We=n(` previous tokens and
`),Qe=new on,R=n(" succeding tokens with "),Ue=new on,V=n(` being the window length as defined in
`),Ne=r("code"),Ge=n("config.attention_window"),Ce=n(". Note that "),Ae=r("code"),de=n("config.attention_window"),Je=n(" can be of type "),Bi=r("code"),Nh=n("List"),Ah=n(` to define a
different `),ic=new on,lc=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Wi=r("code"),Ih=n("BertSelfAttention"),Dh=n("."),dc=c(),St=r("p"),Sh=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),cc=new on,mc=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Qi=r("em"),Bh=n("symmetric"),Wh=n("."),hc=c(),Bt=r("p"),Qh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ui=r("code"),Uh=n("global_attention_mask"),Hh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),Hi=r("code"),Kh=n("global_attention_mask"),Rh=n(":"),pc=c(),sn=r("ul"),Ki=r("li"),Vh=n("0: the token attends \u201Clocally\u201D,"),Gh=c(),Ri=r("li"),Jh=n("1: the token attends \u201Cglobally\u201D."),fc=c(),rn=r("p"),Yh=n("For more information please also refer to "),Na=r("a"),Xh=n("forward()"),Zh=n(" method."),gc=c(),bt=r("p"),ep=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),uc=new on,_c=n(` to
`),wc=new on,kc=n(", with "),bc=new on,vc=n(" being the sequence length and "),yc=new on,Tc=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),$c=c(),an=r("p"),tp=n("For more information, please refer to the official "),ys=r("a"),op=n("paper"),np=n("."),Lc=c(),to=r("h2"),ln=r("a"),Vi=r("span"),v(Ts.$$.fragment),sp=c(),Gi=r("span"),rp=n("Training"),xc=c(),oo=r("p"),Aa=r("a"),ap=n("LongformerForMaskedLM"),ip=n(" is trained the exact same way "),Ia=r("a"),lp=n("RobertaForMaskedLM"),dp=n(` is
trained and should be used as follows:`),Fc=c(),v($s.$$.fragment),Mc=c(),no=r("h2"),dn=r("a"),Ji=r("span"),v(Ls.$$.fragment),cp=c(),Yi=r("span"),mp=n("LongformerConfig"),Ec=c(),ft=r("div"),v(xs.$$.fragment),hp=c(),so=r("p"),pp=n("This is the configuration class to store the configuration of a "),Da=r("a"),fp=n("LongformerModel"),gp=n(" or a "),Sa=r("a"),up=n("TFLongformerModel"),_p=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),wp=c(),ro=r("p"),kp=n("This is the configuration class to store the configuration of a "),Ba=r("a"),bp=n("LongformerModel"),vp=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Fs=r("a"),yp=n("allenai/longformer-base-4096"),Tp=n(` architecture with a sequence
length 4,096.`),$p=c(),ao=r("p"),Lp=n("Configuration objects inherit from "),Wa=r("a"),xp=n("PretrainedConfig"),Fp=n(` and can be used to control the model outputs. Read the
documentation from `),Qa=r("a"),Mp=n("PretrainedConfig"),Ep=n(" for more information."),qp=c(),v(cn.$$.fragment),qc=c(),io=r("h2"),mn=r("a"),Xi=r("span"),v(Ms.$$.fragment),zp=c(),Zi=r("span"),jp=n("LongformerTokenizer"),zc=c(),Oe=r("div"),v(Es.$$.fragment),Cp=c(),el=r("p"),Op=n("Constructs a Longformer tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Pp=c(),tl=r("p"),Np=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Ap=c(),v(hn.$$.fragment),Ip=c(),qs=r("p"),Dp=n("You can get around that behavior by passing "),ol=r("code"),Sp=n("add_prefix_space=True"),Bp=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Wp=c(),v(pn.$$.fragment),Qp=c(),zs=r("p"),Up=n("This tokenizer inherits from "),Ua=r("a"),Hp=n("PreTrainedTokenizer"),Kp=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rp=c(),Wt=r("div"),v(js.$$.fragment),Vp=c(),nl=r("p"),Gp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Longformer sequence has the following format:`),Jp=c(),Cs=r("ul"),Ha=r("li"),Yp=n("single sequence: "),sl=r("code"),Xp=n("<s> X </s>"),Zp=c(),Ka=r("li"),ef=n("pair of sequences: "),rl=r("code"),tf=n("<s> A </s></s> B </s>"),of=c(),fn=r("div"),v(Os.$$.fragment),nf=c(),al=r("p"),sf=n("Converts a sequence of tokens (string) in a single string."),rf=c(),gn=r("div"),v(Ps.$$.fragment),af=c(),il=r("p"),lf=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. Longformer does
not make use of token type ids, therefore a list of zeros is returned.`),df=c(),un=r("div"),v(Ns.$$.fragment),cf=c(),As=r("p"),mf=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ll=r("code"),hf=n("prepare_for_model"),pf=n(" method."),jc=c(),lo=r("h2"),_n=r("a"),dl=r("span"),v(Is.$$.fragment),ff=c(),cl=r("span"),gf=n("LongformerTokenizerFast"),Cc=c(),Ye=r("div"),v(Ds.$$.fragment),uf=c(),Ss=r("p"),_f=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),ml=r("em"),wf=n("tokenizers"),kf=n(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),bf=c(),hl=r("p"),vf=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),yf=c(),v(wn.$$.fragment),Tf=c(),Bs=r("p"),$f=n("You can get around that behavior by passing "),pl=r("code"),Lf=n("add_prefix_space=True"),xf=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Ff=c(),v(kn.$$.fragment),Mf=c(),Ws=r("p"),Ef=n("This tokenizer inherits from "),Ra=r("a"),qf=n("PreTrainedTokenizerFast"),zf=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),jf=c(),bn=r("div"),v(Qs.$$.fragment),Cf=c(),fl=r("p"),Of=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. Longformer does
not make use of token type ids, therefore a list of zeros is returned.`),Oc=c(),co=r("h2"),vn=r("a"),gl=r("span"),v(Us.$$.fragment),Pf=c(),ul=r("span"),Nf=n("Longformer specific outputs"),Pc=c(),mo=r("div"),v(Hs.$$.fragment),Af=c(),_l=r("p"),If=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Nc=c(),ho=r("div"),v(Ks.$$.fragment),Df=c(),wl=r("p"),Sf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Ac=c(),po=r("div"),v(Rs.$$.fragment),Bf=c(),kl=r("p"),Wf=n("Base class for masked language models outputs."),Ic=c(),fo=r("div"),v(Vs.$$.fragment),Qf=c(),bl=r("p"),Uf=n("Base class for outputs of question answering Longformer models."),Dc=c(),go=r("div"),v(Gs.$$.fragment),Hf=c(),vl=r("p"),Kf=n("Base class for outputs of sentence classification models."),Sc=c(),uo=r("div"),v(Js.$$.fragment),Rf=c(),yl=r("p"),Vf=n("Base class for outputs of multiple choice Longformer models."),Bc=c(),_o=r("div"),v(Ys.$$.fragment),Gf=c(),Tl=r("p"),Jf=n("Base class for outputs of token classification models."),Wc=c(),wo=r("div"),v(Xs.$$.fragment),Yf=c(),$l=r("p"),Xf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Qc=c(),ko=r("div"),v(Zs.$$.fragment),Zf=c(),Ll=r("p"),eg=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Uc=c(),bo=r("div"),v(er.$$.fragment),tg=c(),xl=r("p"),og=n("Base class for masked language models outputs."),Hc=c(),vo=r("div"),v(tr.$$.fragment),ng=c(),Fl=r("p"),sg=n("Base class for outputs of question answering Longformer models."),Kc=c(),yo=r("div"),v(or.$$.fragment),rg=c(),Ml=r("p"),ag=n("Base class for outputs of sentence classification models."),Rc=c(),To=r("div"),v(nr.$$.fragment),ig=c(),El=r("p"),lg=n("Base class for outputs of multiple choice models."),Vc=c(),$o=r("div"),v(sr.$$.fragment),dg=c(),ql=r("p"),cg=n("Base class for outputs of token classification models."),Gc=c(),Lo=r("h2"),yn=r("a"),zl=r("span"),v(rr.$$.fragment),mg=c(),jl=r("span"),hg=n("LongformerModel"),Jc=c(),st=r("div"),v(ar.$$.fragment),pg=c(),Cl=r("p"),fg=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),gg=c(),ir=r("p"),ug=n("This model inherits from "),Va=r("a"),_g=n("PreTrainedModel"),wg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kg=c(),lr=r("p"),bg=n("This model is also a PyTorch "),dr=r("a"),vg=n("torch.nn.Module"),yg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tg=c(),xo=r("p"),$g=n("This class copied code from "),Ga=r("a"),Lg=n("RobertaModel"),xg=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),cr=r("a"),Fg=n(`Longformer:
the Long-Document Transformer`),Mg=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Eg=c(),mr=r("p"),qg=n("The self-attention module "),Ol=r("code"),zg=n("LongformerSelfAttention"),jg=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Cg=c(),Et=r("div"),v(hr.$$.fragment),Og=c(),Fo=r("p"),Pg=n("The "),Ja=r("a"),Ng=n("LongformerModel"),Ag=n(" forward method, overrides the "),Pl=r("code"),Ig=n("__call__"),Dg=n(" special method."),Sg=c(),v(Tn.$$.fragment),Bg=c(),v($n.$$.fragment),Yc=c(),Mo=r("h2"),Ln=r("a"),Nl=r("span"),v(pr.$$.fragment),Wg=c(),Al=r("span"),Qg=n("LongformerForMaskedLM"),Xc=c(),gt=r("div"),v(fr.$$.fragment),Ug=c(),gr=r("p"),Hg=n("Longformer Model with a "),Il=r("code"),Kg=n("language modeling"),Rg=n(" head on top."),Vg=c(),ur=r("p"),Gg=n("This model inherits from "),Ya=r("a"),Jg=n("PreTrainedModel"),Yg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xg=c(),_r=r("p"),Zg=n("This model is also a PyTorch "),wr=r("a"),eu=n("torch.nn.Module"),tu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou=c(),mt=r("div"),v(kr.$$.fragment),nu=c(),Eo=r("p"),su=n("The "),Xa=r("a"),ru=n("LongformerForMaskedLM"),au=n(" forward method, overrides the "),Dl=r("code"),iu=n("__call__"),lu=n(" special method."),du=c(),v(xn.$$.fragment),cu=c(),v(Fn.$$.fragment),mu=c(),Sl=r("p"),hu=n("Let\u2019s try a very long input."),pu=c(),v(Mn.$$.fragment),Zc=c(),qo=r("h2"),En=r("a"),Bl=r("span"),v(br.$$.fragment),fu=c(),Wl=r("span"),gu=n("LongformerForSequenceClassification"),em=c(),ut=r("div"),v(vr.$$.fragment),uu=c(),Ql=r("p"),_u=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wu=c(),yr=r("p"),ku=n("This model inherits from "),Za=r("a"),bu=n("PreTrainedModel"),vu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu=c(),Tr=r("p"),Tu=n("This model is also a PyTorch "),$r=r("a"),$u=n("torch.nn.Module"),Lu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu=c(),rt=r("div"),v(Lr.$$.fragment),Fu=c(),zo=r("p"),Mu=n("The "),ei=r("a"),Eu=n("LongformerForSequenceClassification"),qu=n(" forward method, overrides the "),Ul=r("code"),zu=n("__call__"),ju=n(" special method."),Cu=c(),v(qn.$$.fragment),Ou=c(),v(zn.$$.fragment),Pu=c(),v(jn.$$.fragment),Nu=c(),v(Cn.$$.fragment),Au=c(),v(On.$$.fragment),tm=c(),jo=r("h2"),Pn=r("a"),Hl=r("span"),v(xr.$$.fragment),Iu=c(),Kl=r("span"),Du=n("LongformerForMultipleChoice"),om=c(),_t=r("div"),v(Fr.$$.fragment),Su=c(),Rl=r("p"),Bu=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wu=c(),Mr=r("p"),Qu=n("This model inherits from "),ti=r("a"),Uu=n("PreTrainedModel"),Hu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku=c(),Er=r("p"),Ru=n("This model is also a PyTorch "),qr=r("a"),Vu=n("torch.nn.Module"),Gu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ju=c(),qt=r("div"),v(zr.$$.fragment),Yu=c(),Co=r("p"),Xu=n("The "),oi=r("a"),Zu=n("LongformerForMultipleChoice"),e_=n(" forward method, overrides the "),Vl=r("code"),t_=n("__call__"),o_=n(" special method."),n_=c(),v(Nn.$$.fragment),s_=c(),v(An.$$.fragment),nm=c(),Oo=r("h2"),In=r("a"),Gl=r("span"),v(jr.$$.fragment),r_=c(),Jl=r("span"),a_=n("LongformerForTokenClassification"),sm=c(),wt=r("div"),v(Cr.$$.fragment),i_=c(),Yl=r("p"),l_=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),d_=c(),Or=r("p"),c_=n("This model inherits from "),ni=r("a"),m_=n("PreTrainedModel"),h_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p_=c(),Pr=r("p"),f_=n("This model is also a PyTorch "),Nr=r("a"),g_=n("torch.nn.Module"),u_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),__=c(),vt=r("div"),v(Ar.$$.fragment),w_=c(),Po=r("p"),k_=n("The "),si=r("a"),b_=n("LongformerForTokenClassification"),v_=n(" forward method, overrides the "),Xl=r("code"),y_=n("__call__"),T_=n(" special method."),$_=c(),v(Dn.$$.fragment),L_=c(),v(Sn.$$.fragment),x_=c(),v(Bn.$$.fragment),rm=c(),No=r("h2"),Wn=r("a"),Zl=r("span"),v(Ir.$$.fragment),F_=c(),ed=r("span"),M_=n("LongformerForQuestionAnswering"),am=c(),kt=r("div"),v(Dr.$$.fragment),E_=c(),Ao=r("p"),q_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),td=r("code"),z_=n("span start logits"),j_=n(" and "),od=r("code"),C_=n("span end logits"),O_=n(")."),P_=c(),Sr=r("p"),N_=n("This model inherits from "),ri=r("a"),A_=n("PreTrainedModel"),I_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),D_=c(),Br=r("p"),S_=n("This model is also a PyTorch "),Wr=r("a"),B_=n("torch.nn.Module"),W_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q_=c(),zt=r("div"),v(Qr.$$.fragment),U_=c(),Io=r("p"),H_=n("The "),ai=r("a"),K_=n("LongformerForQuestionAnswering"),R_=n(" forward method, overrides the "),nd=r("code"),V_=n("__call__"),G_=n(" special method."),J_=c(),v(Qn.$$.fragment),Y_=c(),v(Un.$$.fragment),im=c(),Do=r("h2"),Hn=r("a"),sd=r("span"),v(Ur.$$.fragment),X_=c(),rd=r("span"),Z_=n("TFLongformerModel"),lm=c(),Xe=r("div"),v(Hr.$$.fragment),ew=c(),ad=r("p"),tw=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),ow=c(),Kr=r("p"),nw=n("This model inherits from "),ii=r("a"),sw=n("TFPreTrainedModel"),rw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aw=c(),Rr=r("p"),iw=n("This model is also a "),Vr=r("a"),lw=n("tf.keras.Model"),dw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cw=c(),v(Kn.$$.fragment),mw=c(),So=r("p"),hw=n("This class copies code from "),li=r("a"),pw=n("TFRobertaModel"),fw=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Gr=r("a"),gw=n("Longformer: the Long-Document Transformer"),uw=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),_w=c(),Jr=r("p"),ww=n("The self-attention module "),id=r("code"),kw=n("TFLongformerSelfAttention"),bw=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),vw=c(),Qt=r("div"),v(Yr.$$.fragment),yw=c(),Bo=r("p"),Tw=n("The "),di=r("a"),$w=n("TFLongformerModel"),Lw=n(" forward method, overrides the "),ld=r("code"),xw=n("__call__"),Fw=n(" special method."),Mw=c(),v(Rn.$$.fragment),dm=c(),Wo=r("h2"),Vn=r("a"),dd=r("span"),v(Xr.$$.fragment),Ew=c(),cd=r("span"),qw=n("TFLongformerForMaskedLM"),cm=c(),at=r("div"),v(Zr.$$.fragment),zw=c(),ea=r("p"),jw=n("Longformer Model with a "),md=r("code"),Cw=n("language modeling"),Ow=n(" head on top."),Pw=c(),ta=r("p"),Nw=n("This model inherits from "),ci=r("a"),Aw=n("TFPreTrainedModel"),Iw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dw=c(),oa=r("p"),Sw=n("This model is also a "),na=r("a"),Bw=n("tf.keras.Model"),Ww=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qw=c(),v(Gn.$$.fragment),Uw=c(),yt=r("div"),v(sa.$$.fragment),Hw=c(),Qo=r("p"),Kw=n("The "),mi=r("a"),Rw=n("TFLongformerForMaskedLM"),Vw=n(" forward method, overrides the "),hd=r("code"),Gw=n("__call__"),Jw=n(" special method."),Yw=c(),v(Jn.$$.fragment),Xw=c(),v(Yn.$$.fragment),Zw=c(),v(Xn.$$.fragment),mm=c(),Uo=r("h2"),Zn=r("a"),pd=r("span"),v(ra.$$.fragment),ek=c(),fd=r("span"),tk=n("TFLongformerForQuestionAnswering"),hm=c(),it=r("div"),v(aa.$$.fragment),ok=c(),Ho=r("p"),nk=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),gd=r("code"),sk=n("span start logits"),rk=n(" and "),ud=r("code"),ak=n("span end logits"),ik=n(")."),lk=c(),ia=r("p"),dk=n("This model inherits from "),hi=r("a"),ck=n("TFPreTrainedModel"),mk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hk=c(),la=r("p"),pk=n("This model is also a "),da=r("a"),fk=n("tf.keras.Model"),gk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uk=c(),v(es.$$.fragment),_k=c(),Tt=r("div"),v(ca.$$.fragment),wk=c(),Ko=r("p"),kk=n("The "),pi=r("a"),bk=n("TFLongformerForQuestionAnswering"),vk=n(" forward method, overrides the "),_d=r("code"),yk=n("__call__"),Tk=n(" special method."),$k=c(),v(ts.$$.fragment),Lk=c(),v(os.$$.fragment),xk=c(),v(ns.$$.fragment),pm=c(),Ro=r("h2"),ss=r("a"),wd=r("span"),v(ma.$$.fragment),Fk=c(),kd=r("span"),Mk=n("TFLongformerForSequenceClassification"),fm=c(),lt=r("div"),v(ha.$$.fragment),Ek=c(),bd=r("p"),qk=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),zk=c(),pa=r("p"),jk=n("This model inherits from "),fi=r("a"),Ck=n("TFPreTrainedModel"),Ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pk=c(),fa=r("p"),Nk=n("This model is also a "),ga=r("a"),Ak=n("tf.keras.Model"),Ik=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dk=c(),v(rs.$$.fragment),Sk=c(),$t=r("div"),v(ua.$$.fragment),Bk=c(),Vo=r("p"),Wk=n("The "),gi=r("a"),Qk=n("TFLongformerForSequenceClassification"),Uk=n(" forward method, overrides the "),vd=r("code"),Hk=n("__call__"),Kk=n(" special method."),Rk=c(),v(as.$$.fragment),Vk=c(),v(is.$$.fragment),Gk=c(),v(ls.$$.fragment),gm=c(),Go=r("h2"),ds=r("a"),yd=r("span"),v(_a.$$.fragment),Jk=c(),Td=r("span"),Yk=n("TFLongformerForTokenClassification"),um=c(),dt=r("div"),v(wa.$$.fragment),Xk=c(),$d=r("p"),Zk=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),eb=c(),ka=r("p"),tb=n("This model inherits from "),ui=r("a"),ob=n("TFPreTrainedModel"),nb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sb=c(),ba=r("p"),rb=n("This model is also a "),va=r("a"),ab=n("tf.keras.Model"),ib=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lb=c(),v(cs.$$.fragment),db=c(),Lt=r("div"),v(ya.$$.fragment),cb=c(),Jo=r("p"),mb=n("The "),_i=r("a"),hb=n("TFLongformerForTokenClassification"),pb=n(" forward method, overrides the "),Ld=r("code"),fb=n("__call__"),gb=n(" special method."),ub=c(),v(ms.$$.fragment),_b=c(),v(hs.$$.fragment),wb=c(),v(ps.$$.fragment),_m=c(),Yo=r("h2"),fs=r("a"),xd=r("span"),v(Ta.$$.fragment),kb=c(),Fd=r("span"),bb=n("TFLongformerForMultipleChoice"),wm=c(),ct=r("div"),v($a.$$.fragment),vb=c(),Md=r("p"),yb=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Tb=c(),La=r("p"),$b=n("This model inherits from "),wi=r("a"),Lb=n("TFPreTrainedModel"),xb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fb=c(),xa=r("p"),Mb=n("This model is also a "),Fa=r("a"),Eb=n("tf.keras.Model"),qb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zb=c(),v(gs.$$.fragment),jb=c(),jt=r("div"),v(Ma.$$.fragment),Cb=c(),Xo=r("p"),Ob=n("The "),ki=r("a"),Pb=n("TFLongformerForMultipleChoice"),Nb=n(" forward method, overrides the "),Ed=r("code"),Ab=n("__call__"),Ib=n(" special method."),Db=c(),v(us.$$.fragment),Sb=c(),v(_s.$$.fragment),this.h()},l(o){const u=VT('[data-svelte="svelte-1phssyn"]',document.head);d=a(u,"META",{name:!0,content:!0}),u.forEach(t),k=m(o),h=a(o,"H1",{class:!0});var Ea=i(h);g=a(Ea,"A",{id:!0,class:!0,href:!0});var qd=i(g);b=a(qd,"SPAN",{});var zd=i(b);y(l.$$.fragment,zd),zd.forEach(t),qd.forEach(t),p=m(Ea),z=a(Ea,"SPAN",{});var jd=i(z);ie=s(jd,"Longformer"),jd.forEach(t),Ea.forEach(t),Z=m(o),A=a(o,"H2",{class:!0});var qa=i(A);te=a(qa,"A",{id:!0,class:!0,href:!0});var Cd=i(te);oe=a(Cd,"SPAN",{});var Od=i(oe);y(F.$$.fragment,Od),Od.forEach(t),Cd.forEach(t),be=m(qa),H=a(qa,"SPAN",{});var Pd=i(H);ve=s(Pd,"Overview"),Pd.forEach(t),qa.forEach(t),ge=m(o),S=a(o,"P",{});var za=i(S);ye=s(za,"The Longformer model was presented in "),me=a(za,"A",{href:!0,rel:!0});var Nd=i(me);G=s(Nd,"Longformer: The Long-Document Transformer"),Nd.forEach(t),Te=s(za," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),za.forEach(t),ue=m(o),W=a(o,"P",{});var Ad=i(W);$e=s(Ad,"The abstract from the paper is the following:"),Ad.forEach(t),_e=m(o),Q=a(o,"P",{});var Id=i(Q);pe=a(Id,"EM",{});var Dd=i(pe);Le=s(Dd,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Dd.forEach(t),Id.forEach(t),re=m(o),j=a(o,"P",{});var Sd=i(j);O=s(Sd,"Tips:"),Sd.forEach(t),we=m(o),U=a(o,"UL",{});var Bd=i(U);ne=a(Bd,"LI",{});var Dt=i(ne);xe=s(Dt,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),K=a(Dt,"CODE",{});var Wd=i(K);Fe=s(Wd,"token_type_ids"),Wd.forEach(t),Me=s(Dt,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),C=a(Dt,"CODE",{});var Qd=i(C);Ee=s(Qd,"tokenizer.sep_token"),Qd.forEach(t),J=s(Dt,` (or
`),fe=a(Dt,"CODE",{});var Ud=i(fe);qe=s(Ud,"</s>"),Ud.forEach(t),Y=s(Dt,")."),Dt.forEach(t),Bd.forEach(t),ke=m(o),ae=a(o,"P",{});var Zo=i(ae);D=s(Zo,"This model was contributed by "),he=a(Zo,"A",{href:!0,rel:!0});var Hd=i(he);X=s(Hd,"beltagy"),Hd.forEach(t),ze=s(Zo,". The Authors\u2019 code can be found "),ee=a(Zo,"A",{href:!0,rel:!0});var Kd=i(ee);P=s(Kd,"here"),Kd.forEach(t),je=s(Zo,"."),Zo.forEach(t),N=m(o),le=a(o,"H2",{class:!0});var ja=i(le);ce=a(ja,"A",{id:!0,class:!0,href:!0});var Rd=i(ce);w=a(Rd,"SPAN",{});var Vd=i(w);y(E.$$.fragment,Vd),Vd.forEach(t),Rd.forEach(t),Ke=m(ja),se=a(ja,"SPAN",{});var Gd=i(se);Re=s(Gd,"Longformer Self Attention"),Gd.forEach(t),ja.forEach(t),Se=m(o),M=a(o,"P",{});var Ze=i(M);Ve=s(Ze,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),Be=nn(Ze),We=s(Ze,` previous tokens and
`),Qe=nn(Ze),R=s(Ze," succeding tokens with "),Ue=nn(Ze),V=s(Ze,` being the window length as defined in
`),Ne=a(Ze,"CODE",{});var Jd=i(Ne);Ge=s(Jd,"config.attention_window"),Jd.forEach(t),Ce=s(Ze,". Note that "),Ae=a(Ze,"CODE",{});var Yd=i(Ae);de=s(Yd,"config.attention_window"),Yd.forEach(t),Je=s(Ze," can be of type "),Bi=a(Ze,"CODE",{});var Xd=i(Bi);Nh=s(Xd,"List"),Xd.forEach(t),Ah=s(Ze,` to define a
different `),ic=nn(Ze),lc=s(Ze,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Wi=a(Ze,"CODE",{});var Zd=i(Wi);Ih=s(Zd,"BertSelfAttention"),Zd.forEach(t),Dh=s(Ze,"."),Ze.forEach(t),dc=m(o),St=a(o,"P",{});var en=i(St);Sh=s(en,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),cc=nn(en),mc=s(en,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Qi=a(en,"EM",{});var ec=i(Qi);Bh=s(ec,"symmetric"),ec.forEach(t),Wh=s(en,"."),en.forEach(t),hc=m(o),Bt=a(o,"P",{});var tn=i(Bt);Qh=s(tn,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ui=a(tn,"CODE",{});var tc=i(Ui);Uh=s(tc,"global_attention_mask"),tc.forEach(t),Hh=s(tn,` at run-time appropriately. All Longformer models employ the following logic for
`),Hi=a(tn,"CODE",{});var oc=i(Hi);Kh=s(oc,"global_attention_mask"),oc.forEach(t),Rh=s(tn,":"),tn.forEach(t),pc=m(o),sn=a(o,"UL",{});var Ca=i(sn);Ki=a(Ca,"LI",{});var nc=i(Ki);Vh=s(nc,"0: the token attends \u201Clocally\u201D,"),nc.forEach(t),Gh=m(Ca),Ri=a(Ca,"LI",{});var sc=i(Ri);Jh=s(sc,"1: the token attends \u201Cglobally\u201D."),sc.forEach(t),Ca.forEach(t),fc=m(o),rn=a(o,"P",{});var Oa=i(rn);Yh=s(Oa,"For more information please also refer to "),Na=a(Oa,"A",{href:!0});var rc=i(Na);Xh=s(rc,"forward()"),rc.forEach(t),Zh=s(Oa," method."),Oa.forEach(t),gc=m(o),bt=a(o,"P",{});var Mt=i(bt);ep=s(Mt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),uc=nn(Mt),_c=s(Mt,` to
`),wc=nn(Mt),kc=s(Mt,", with "),bc=nn(Mt),vc=s(Mt," being the sequence length and "),yc=nn(Mt),Tc=s(Mt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Mt.forEach(t),$c=m(o),an=a(o,"P",{});var Pa=i(an);tp=s(Pa,"For more information, please refer to the official "),ys=a(Pa,"A",{href:!0,rel:!0});var Qb=i(ys);op=s(Qb,"paper"),Qb.forEach(t),np=s(Pa,"."),Pa.forEach(t),Lc=m(o),to=a(o,"H2",{class:!0});var bm=i(to);ln=a(bm,"A",{id:!0,class:!0,href:!0});var Ub=i(ln);Vi=a(Ub,"SPAN",{});var Hb=i(Vi);y(Ts.$$.fragment,Hb),Hb.forEach(t),Ub.forEach(t),sp=m(bm),Gi=a(bm,"SPAN",{});var Kb=i(Gi);rp=s(Kb,"Training"),Kb.forEach(t),bm.forEach(t),xc=m(o),oo=a(o,"P",{});var ac=i(oo);Aa=a(ac,"A",{href:!0});var Rb=i(Aa);ap=s(Rb,"LongformerForMaskedLM"),Rb.forEach(t),ip=s(ac," is trained the exact same way "),Ia=a(ac,"A",{href:!0});var Vb=i(Ia);lp=s(Vb,"RobertaForMaskedLM"),Vb.forEach(t),dp=s(ac,` is
trained and should be used as follows:`),ac.forEach(t),Fc=m(o),y($s.$$.fragment,o),Mc=m(o),no=a(o,"H2",{class:!0});var vm=i(no);dn=a(vm,"A",{id:!0,class:!0,href:!0});var Gb=i(dn);Ji=a(Gb,"SPAN",{});var Jb=i(Ji);y(Ls.$$.fragment,Jb),Jb.forEach(t),Gb.forEach(t),cp=m(vm),Yi=a(vm,"SPAN",{});var Yb=i(Yi);mp=s(Yb,"LongformerConfig"),Yb.forEach(t),vm.forEach(t),Ec=m(o),ft=a(o,"DIV",{class:!0});var Ut=i(ft);y(xs.$$.fragment,Ut),hp=m(Ut),so=a(Ut,"P",{});var bi=i(so);pp=s(bi,"This is the configuration class to store the configuration of a "),Da=a(bi,"A",{href:!0});var Xb=i(Da);fp=s(Xb,"LongformerModel"),Xb.forEach(t),gp=s(bi," or a "),Sa=a(bi,"A",{href:!0});var Zb=i(Sa);up=s(Zb,"TFLongformerModel"),Zb.forEach(t),_p=s(bi,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),bi.forEach(t),wp=m(Ut),ro=a(Ut,"P",{});var vi=i(ro);kp=s(vi,"This is the configuration class to store the configuration of a "),Ba=a(vi,"A",{href:!0});var ev=i(Ba);bp=s(ev,"LongformerModel"),ev.forEach(t),vp=s(vi,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Fs=a(vi,"A",{href:!0,rel:!0});var tv=i(Fs);yp=s(tv,"allenai/longformer-base-4096"),tv.forEach(t),Tp=s(vi,` architecture with a sequence
length 4,096.`),vi.forEach(t),$p=m(Ut),ao=a(Ut,"P",{});var yi=i(ao);Lp=s(yi,"Configuration objects inherit from "),Wa=a(yi,"A",{href:!0});var ov=i(Wa);xp=s(ov,"PretrainedConfig"),ov.forEach(t),Fp=s(yi,` and can be used to control the model outputs. Read the
documentation from `),Qa=a(yi,"A",{href:!0});var nv=i(Qa);Mp=s(nv,"PretrainedConfig"),nv.forEach(t),Ep=s(yi," for more information."),yi.forEach(t),qp=m(Ut),y(cn.$$.fragment,Ut),Ut.forEach(t),qc=m(o),io=a(o,"H2",{class:!0});var ym=i(io);mn=a(ym,"A",{id:!0,class:!0,href:!0});var sv=i(mn);Xi=a(sv,"SPAN",{});var rv=i(Xi);y(Ms.$$.fragment,rv),rv.forEach(t),sv.forEach(t),zp=m(ym),Zi=a(ym,"SPAN",{});var av=i(Zi);jp=s(av,"LongformerTokenizer"),av.forEach(t),ym.forEach(t),zc=m(o),Oe=a(o,"DIV",{class:!0});var He=i(Oe);y(Es.$$.fragment,He),Cp=m(He),el=a(He,"P",{});var iv=i(el);Op=s(iv,"Constructs a Longformer tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),iv.forEach(t),Pp=m(He),tl=a(He,"P",{});var lv=i(tl);Np=s(lv,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),lv.forEach(t),Ap=m(He),y(hn.$$.fragment,He),Ip=m(He),qs=a(He,"P",{});var Tm=i(qs);Dp=s(Tm,"You can get around that behavior by passing "),ol=a(Tm,"CODE",{});var dv=i(ol);Sp=s(dv,"add_prefix_space=True"),dv.forEach(t),Bp=s(Tm,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Tm.forEach(t),Wp=m(He),y(pn.$$.fragment,He),Qp=m(He),zs=a(He,"P",{});var $m=i(zs);Up=s($m,"This tokenizer inherits from "),Ua=a($m,"A",{href:!0});var cv=i(Ua);Hp=s(cv,"PreTrainedTokenizer"),cv.forEach(t),Kp=s($m,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),$m.forEach(t),Rp=m(He),Wt=a(He,"DIV",{class:!0});var Ti=i(Wt);y(js.$$.fragment,Ti),Vp=m(Ti),nl=a(Ti,"P",{});var mv=i(nl);Gp=s(mv,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Longformer sequence has the following format:`),mv.forEach(t),Jp=m(Ti),Cs=a(Ti,"UL",{});var Lm=i(Cs);Ha=a(Lm,"LI",{});var Bb=i(Ha);Yp=s(Bb,"single sequence: "),sl=a(Bb,"CODE",{});var hv=i(sl);Xp=s(hv,"<s> X </s>"),hv.forEach(t),Bb.forEach(t),Zp=m(Lm),Ka=a(Lm,"LI",{});var Wb=i(Ka);ef=s(Wb,"pair of sequences: "),rl=a(Wb,"CODE",{});var pv=i(rl);tf=s(pv,"<s> A </s></s> B </s>"),pv.forEach(t),Wb.forEach(t),Lm.forEach(t),Ti.forEach(t),of=m(He),fn=a(He,"DIV",{class:!0});var xm=i(fn);y(Os.$$.fragment,xm),nf=m(xm),al=a(xm,"P",{});var fv=i(al);sf=s(fv,"Converts a sequence of tokens (string) in a single string."),fv.forEach(t),xm.forEach(t),rf=m(He),gn=a(He,"DIV",{class:!0});var Fm=i(gn);y(Ps.$$.fragment,Fm),af=m(Fm),il=a(Fm,"P",{});var gv=i(il);lf=s(gv,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. Longformer does
not make use of token type ids, therefore a list of zeros is returned.`),gv.forEach(t),Fm.forEach(t),df=m(He),un=a(He,"DIV",{class:!0});var Mm=i(un);y(Ns.$$.fragment,Mm),cf=m(Mm),As=a(Mm,"P",{});var Em=i(As);mf=s(Em,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ll=a(Em,"CODE",{});var uv=i(ll);hf=s(uv,"prepare_for_model"),uv.forEach(t),pf=s(Em," method."),Em.forEach(t),Mm.forEach(t),He.forEach(t),jc=m(o),lo=a(o,"H2",{class:!0});var qm=i(lo);_n=a(qm,"A",{id:!0,class:!0,href:!0});var _v=i(_n);dl=a(_v,"SPAN",{});var wv=i(dl);y(Is.$$.fragment,wv),wv.forEach(t),_v.forEach(t),ff=m(qm),cl=a(qm,"SPAN",{});var kv=i(cl);gf=s(kv,"LongformerTokenizerFast"),kv.forEach(t),qm.forEach(t),Cc=m(o),Ye=a(o,"DIV",{class:!0});var ht=i(Ye);y(Ds.$$.fragment,ht),uf=m(ht),Ss=a(ht,"P",{});var zm=i(Ss);_f=s(zm,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),ml=a(zm,"EM",{});var bv=i(ml);wf=s(bv,"tokenizers"),bv.forEach(t),kf=s(zm,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),zm.forEach(t),bf=m(ht),hl=a(ht,"P",{});var vv=i(hl);vf=s(vv,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),vv.forEach(t),yf=m(ht),y(wn.$$.fragment,ht),Tf=m(ht),Bs=a(ht,"P",{});var jm=i(Bs);$f=s(jm,"You can get around that behavior by passing "),pl=a(jm,"CODE",{});var yv=i(pl);Lf=s(yv,"add_prefix_space=True"),yv.forEach(t),xf=s(jm,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),jm.forEach(t),Ff=m(ht),y(kn.$$.fragment,ht),Mf=m(ht),Ws=a(ht,"P",{});var Cm=i(Ws);Ef=s(Cm,"This tokenizer inherits from "),Ra=a(Cm,"A",{href:!0});var Tv=i(Ra);qf=s(Tv,"PreTrainedTokenizerFast"),Tv.forEach(t),zf=s(Cm,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Cm.forEach(t),jf=m(ht),bn=a(ht,"DIV",{class:!0});var Om=i(bn);y(Qs.$$.fragment,Om),Cf=m(Om),fl=a(Om,"P",{});var $v=i(fl);Of=s($v,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. Longformer does
not make use of token type ids, therefore a list of zeros is returned.`),$v.forEach(t),Om.forEach(t),ht.forEach(t),Oc=m(o),co=a(o,"H2",{class:!0});var Pm=i(co);vn=a(Pm,"A",{id:!0,class:!0,href:!0});var Lv=i(vn);gl=a(Lv,"SPAN",{});var xv=i(gl);y(Us.$$.fragment,xv),xv.forEach(t),Lv.forEach(t),Pf=m(Pm),ul=a(Pm,"SPAN",{});var Fv=i(ul);Nf=s(Fv,"Longformer specific outputs"),Fv.forEach(t),Pm.forEach(t),Pc=m(o),mo=a(o,"DIV",{class:!0});var Nm=i(mo);y(Hs.$$.fragment,Nm),Af=m(Nm),_l=a(Nm,"P",{});var Mv=i(_l);If=s(Mv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Mv.forEach(t),Nm.forEach(t),Nc=m(o),ho=a(o,"DIV",{class:!0});var Am=i(ho);y(Ks.$$.fragment,Am),Df=m(Am),wl=a(Am,"P",{});var Ev=i(wl);Sf=s(Ev,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Ev.forEach(t),Am.forEach(t),Ac=m(o),po=a(o,"DIV",{class:!0});var Im=i(po);y(Rs.$$.fragment,Im),Bf=m(Im),kl=a(Im,"P",{});var qv=i(kl);Wf=s(qv,"Base class for masked language models outputs."),qv.forEach(t),Im.forEach(t),Ic=m(o),fo=a(o,"DIV",{class:!0});var Dm=i(fo);y(Vs.$$.fragment,Dm),Qf=m(Dm),bl=a(Dm,"P",{});var zv=i(bl);Uf=s(zv,"Base class for outputs of question answering Longformer models."),zv.forEach(t),Dm.forEach(t),Dc=m(o),go=a(o,"DIV",{class:!0});var Sm=i(go);y(Gs.$$.fragment,Sm),Hf=m(Sm),vl=a(Sm,"P",{});var jv=i(vl);Kf=s(jv,"Base class for outputs of sentence classification models."),jv.forEach(t),Sm.forEach(t),Sc=m(o),uo=a(o,"DIV",{class:!0});var Bm=i(uo);y(Js.$$.fragment,Bm),Rf=m(Bm),yl=a(Bm,"P",{});var Cv=i(yl);Vf=s(Cv,"Base class for outputs of multiple choice Longformer models."),Cv.forEach(t),Bm.forEach(t),Bc=m(o),_o=a(o,"DIV",{class:!0});var Wm=i(_o);y(Ys.$$.fragment,Wm),Gf=m(Wm),Tl=a(Wm,"P",{});var Ov=i(Tl);Jf=s(Ov,"Base class for outputs of token classification models."),Ov.forEach(t),Wm.forEach(t),Wc=m(o),wo=a(o,"DIV",{class:!0});var Qm=i(wo);y(Xs.$$.fragment,Qm),Yf=m(Qm),$l=a(Qm,"P",{});var Pv=i($l);Xf=s(Pv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Pv.forEach(t),Qm.forEach(t),Qc=m(o),ko=a(o,"DIV",{class:!0});var Um=i(ko);y(Zs.$$.fragment,Um),Zf=m(Um),Ll=a(Um,"P",{});var Nv=i(Ll);eg=s(Nv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Nv.forEach(t),Um.forEach(t),Uc=m(o),bo=a(o,"DIV",{class:!0});var Hm=i(bo);y(er.$$.fragment,Hm),tg=m(Hm),xl=a(Hm,"P",{});var Av=i(xl);og=s(Av,"Base class for masked language models outputs."),Av.forEach(t),Hm.forEach(t),Hc=m(o),vo=a(o,"DIV",{class:!0});var Km=i(vo);y(tr.$$.fragment,Km),ng=m(Km),Fl=a(Km,"P",{});var Iv=i(Fl);sg=s(Iv,"Base class for outputs of question answering Longformer models."),Iv.forEach(t),Km.forEach(t),Kc=m(o),yo=a(o,"DIV",{class:!0});var Rm=i(yo);y(or.$$.fragment,Rm),rg=m(Rm),Ml=a(Rm,"P",{});var Dv=i(Ml);ag=s(Dv,"Base class for outputs of sentence classification models."),Dv.forEach(t),Rm.forEach(t),Rc=m(o),To=a(o,"DIV",{class:!0});var Vm=i(To);y(nr.$$.fragment,Vm),ig=m(Vm),El=a(Vm,"P",{});var Sv=i(El);lg=s(Sv,"Base class for outputs of multiple choice models."),Sv.forEach(t),Vm.forEach(t),Vc=m(o),$o=a(o,"DIV",{class:!0});var Gm=i($o);y(sr.$$.fragment,Gm),dg=m(Gm),ql=a(Gm,"P",{});var Bv=i(ql);cg=s(Bv,"Base class for outputs of token classification models."),Bv.forEach(t),Gm.forEach(t),Gc=m(o),Lo=a(o,"H2",{class:!0});var Jm=i(Lo);yn=a(Jm,"A",{id:!0,class:!0,href:!0});var Wv=i(yn);zl=a(Wv,"SPAN",{});var Qv=i(zl);y(rr.$$.fragment,Qv),Qv.forEach(t),Wv.forEach(t),mg=m(Jm),jl=a(Jm,"SPAN",{});var Uv=i(jl);hg=s(Uv,"LongformerModel"),Uv.forEach(t),Jm.forEach(t),Jc=m(o),st=a(o,"DIV",{class:!0});var xt=i(st);y(ar.$$.fragment,xt),pg=m(xt),Cl=a(xt,"P",{});var Hv=i(Cl);fg=s(Hv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Hv.forEach(t),gg=m(xt),ir=a(xt,"P",{});var Ym=i(ir);ug=s(Ym,"This model inherits from "),Va=a(Ym,"A",{href:!0});var Kv=i(Va);_g=s(Kv,"PreTrainedModel"),Kv.forEach(t),wg=s(Ym,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ym.forEach(t),kg=m(xt),lr=a(xt,"P",{});var Xm=i(lr);bg=s(Xm,"This model is also a PyTorch "),dr=a(Xm,"A",{href:!0,rel:!0});var Rv=i(dr);vg=s(Rv,"torch.nn.Module"),Rv.forEach(t),yg=s(Xm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xm.forEach(t),Tg=m(xt),xo=a(xt,"P",{});var $i=i(xo);$g=s($i,"This class copied code from "),Ga=a($i,"A",{href:!0});var Vv=i(Ga);Lg=s(Vv,"RobertaModel"),Vv.forEach(t),xg=s($i,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),cr=a($i,"A",{href:!0,rel:!0});var Gv=i(cr);Fg=s(Gv,`Longformer:
the Long-Document Transformer`),Gv.forEach(t),Mg=s($i,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),$i.forEach(t),Eg=m(xt),mr=a(xt,"P",{});var Zm=i(mr);qg=s(Zm,"The self-attention module "),Ol=a(Zm,"CODE",{});var Jv=i(Ol);zg=s(Jv,"LongformerSelfAttention"),Jv.forEach(t),jg=s(Zm,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Zm.forEach(t),Cg=m(xt),Et=a(xt,"DIV",{class:!0});var ws=i(Et);y(hr.$$.fragment,ws),Og=m(ws),Fo=a(ws,"P",{});var Li=i(Fo);Pg=s(Li,"The "),Ja=a(Li,"A",{href:!0});var Yv=i(Ja);Ng=s(Yv,"LongformerModel"),Yv.forEach(t),Ag=s(Li," forward method, overrides the "),Pl=a(Li,"CODE",{});var Xv=i(Pl);Ig=s(Xv,"__call__"),Xv.forEach(t),Dg=s(Li," special method."),Li.forEach(t),Sg=m(ws),y(Tn.$$.fragment,ws),Bg=m(ws),y($n.$$.fragment,ws),ws.forEach(t),xt.forEach(t),Yc=m(o),Mo=a(o,"H2",{class:!0});var eh=i(Mo);Ln=a(eh,"A",{id:!0,class:!0,href:!0});var Zv=i(Ln);Nl=a(Zv,"SPAN",{});var ey=i(Nl);y(pr.$$.fragment,ey),ey.forEach(t),Zv.forEach(t),Wg=m(eh),Al=a(eh,"SPAN",{});var ty=i(Al);Qg=s(ty,"LongformerForMaskedLM"),ty.forEach(t),eh.forEach(t),Xc=m(o),gt=a(o,"DIV",{class:!0});var Ht=i(gt);y(fr.$$.fragment,Ht),Ug=m(Ht),gr=a(Ht,"P",{});var th=i(gr);Hg=s(th,"Longformer Model with a "),Il=a(th,"CODE",{});var oy=i(Il);Kg=s(oy,"language modeling"),oy.forEach(t),Rg=s(th," head on top."),th.forEach(t),Vg=m(Ht),ur=a(Ht,"P",{});var oh=i(ur);Gg=s(oh,"This model inherits from "),Ya=a(oh,"A",{href:!0});var ny=i(Ya);Jg=s(ny,"PreTrainedModel"),ny.forEach(t),Yg=s(oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oh.forEach(t),Xg=m(Ht),_r=a(Ht,"P",{});var nh=i(_r);Zg=s(nh,"This model is also a PyTorch "),wr=a(nh,"A",{href:!0,rel:!0});var sy=i(wr);eu=s(sy,"torch.nn.Module"),sy.forEach(t),tu=s(nh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nh.forEach(t),ou=m(Ht),mt=a(Ht,"DIV",{class:!0});var Ct=i(mt);y(kr.$$.fragment,Ct),nu=m(Ct),Eo=a(Ct,"P",{});var xi=i(Eo);su=s(xi,"The "),Xa=a(xi,"A",{href:!0});var ry=i(Xa);ru=s(ry,"LongformerForMaskedLM"),ry.forEach(t),au=s(xi," forward method, overrides the "),Dl=a(xi,"CODE",{});var ay=i(Dl);iu=s(ay,"__call__"),ay.forEach(t),lu=s(xi," special method."),xi.forEach(t),du=m(Ct),y(xn.$$.fragment,Ct),cu=m(Ct),y(Fn.$$.fragment,Ct),mu=m(Ct),Sl=a(Ct,"P",{});var iy=i(Sl);hu=s(iy,"Let\u2019s try a very long input."),iy.forEach(t),pu=m(Ct),y(Mn.$$.fragment,Ct),Ct.forEach(t),Ht.forEach(t),Zc=m(o),qo=a(o,"H2",{class:!0});var sh=i(qo);En=a(sh,"A",{id:!0,class:!0,href:!0});var ly=i(En);Bl=a(ly,"SPAN",{});var dy=i(Bl);y(br.$$.fragment,dy),dy.forEach(t),ly.forEach(t),fu=m(sh),Wl=a(sh,"SPAN",{});var cy=i(Wl);gu=s(cy,"LongformerForSequenceClassification"),cy.forEach(t),sh.forEach(t),em=m(o),ut=a(o,"DIV",{class:!0});var Kt=i(ut);y(vr.$$.fragment,Kt),uu=m(Kt),Ql=a(Kt,"P",{});var my=i(Ql);_u=s(my,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),my.forEach(t),wu=m(Kt),yr=a(Kt,"P",{});var rh=i(yr);ku=s(rh,"This model inherits from "),Za=a(rh,"A",{href:!0});var hy=i(Za);bu=s(hy,"PreTrainedModel"),hy.forEach(t),vu=s(rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh.forEach(t),yu=m(Kt),Tr=a(Kt,"P",{});var ah=i(Tr);Tu=s(ah,"This model is also a PyTorch "),$r=a(ah,"A",{href:!0,rel:!0});var py=i($r);$u=s(py,"torch.nn.Module"),py.forEach(t),Lu=s(ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ah.forEach(t),xu=m(Kt),rt=a(Kt,"DIV",{class:!0});var Ft=i(rt);y(Lr.$$.fragment,Ft),Fu=m(Ft),zo=a(Ft,"P",{});var Fi=i(zo);Mu=s(Fi,"The "),ei=a(Fi,"A",{href:!0});var fy=i(ei);Eu=s(fy,"LongformerForSequenceClassification"),fy.forEach(t),qu=s(Fi," forward method, overrides the "),Ul=a(Fi,"CODE",{});var gy=i(Ul);zu=s(gy,"__call__"),gy.forEach(t),ju=s(Fi," special method."),Fi.forEach(t),Cu=m(Ft),y(qn.$$.fragment,Ft),Ou=m(Ft),y(zn.$$.fragment,Ft),Pu=m(Ft),y(jn.$$.fragment,Ft),Nu=m(Ft),y(Cn.$$.fragment,Ft),Au=m(Ft),y(On.$$.fragment,Ft),Ft.forEach(t),Kt.forEach(t),tm=m(o),jo=a(o,"H2",{class:!0});var ih=i(jo);Pn=a(ih,"A",{id:!0,class:!0,href:!0});var uy=i(Pn);Hl=a(uy,"SPAN",{});var _y=i(Hl);y(xr.$$.fragment,_y),_y.forEach(t),uy.forEach(t),Iu=m(ih),Kl=a(ih,"SPAN",{});var wy=i(Kl);Du=s(wy,"LongformerForMultipleChoice"),wy.forEach(t),ih.forEach(t),om=m(o),_t=a(o,"DIV",{class:!0});var Rt=i(_t);y(Fr.$$.fragment,Rt),Su=m(Rt),Rl=a(Rt,"P",{});var ky=i(Rl);Bu=s(ky,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),ky.forEach(t),Wu=m(Rt),Mr=a(Rt,"P",{});var lh=i(Mr);Qu=s(lh,"This model inherits from "),ti=a(lh,"A",{href:!0});var by=i(ti);Uu=s(by,"PreTrainedModel"),by.forEach(t),Hu=s(lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh.forEach(t),Ku=m(Rt),Er=a(Rt,"P",{});var dh=i(Er);Ru=s(dh,"This model is also a PyTorch "),qr=a(dh,"A",{href:!0,rel:!0});var vy=i(qr);Vu=s(vy,"torch.nn.Module"),vy.forEach(t),Gu=s(dh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dh.forEach(t),Ju=m(Rt),qt=a(Rt,"DIV",{class:!0});var ks=i(qt);y(zr.$$.fragment,ks),Yu=m(ks),Co=a(ks,"P",{});var Mi=i(Co);Xu=s(Mi,"The "),oi=a(Mi,"A",{href:!0});var yy=i(oi);Zu=s(yy,"LongformerForMultipleChoice"),yy.forEach(t),e_=s(Mi," forward method, overrides the "),Vl=a(Mi,"CODE",{});var Ty=i(Vl);t_=s(Ty,"__call__"),Ty.forEach(t),o_=s(Mi," special method."),Mi.forEach(t),n_=m(ks),y(Nn.$$.fragment,ks),s_=m(ks),y(An.$$.fragment,ks),ks.forEach(t),Rt.forEach(t),nm=m(o),Oo=a(o,"H2",{class:!0});var ch=i(Oo);In=a(ch,"A",{id:!0,class:!0,href:!0});var $y=i(In);Gl=a($y,"SPAN",{});var Ly=i(Gl);y(jr.$$.fragment,Ly),Ly.forEach(t),$y.forEach(t),r_=m(ch),Jl=a(ch,"SPAN",{});var xy=i(Jl);a_=s(xy,"LongformerForTokenClassification"),xy.forEach(t),ch.forEach(t),sm=m(o),wt=a(o,"DIV",{class:!0});var Vt=i(wt);y(Cr.$$.fragment,Vt),i_=m(Vt),Yl=a(Vt,"P",{});var Fy=i(Yl);l_=s(Fy,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Fy.forEach(t),d_=m(Vt),Or=a(Vt,"P",{});var mh=i(Or);c_=s(mh,"This model inherits from "),ni=a(mh,"A",{href:!0});var My=i(ni);m_=s(My,"PreTrainedModel"),My.forEach(t),h_=s(mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mh.forEach(t),p_=m(Vt),Pr=a(Vt,"P",{});var hh=i(Pr);f_=s(hh,"This model is also a PyTorch "),Nr=a(hh,"A",{href:!0,rel:!0});var Ey=i(Nr);g_=s(Ey,"torch.nn.Module"),Ey.forEach(t),u_=s(hh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hh.forEach(t),__=m(Vt),vt=a(Vt,"DIV",{class:!0});var Gt=i(vt);y(Ar.$$.fragment,Gt),w_=m(Gt),Po=a(Gt,"P",{});var Ei=i(Po);k_=s(Ei,"The "),si=a(Ei,"A",{href:!0});var qy=i(si);b_=s(qy,"LongformerForTokenClassification"),qy.forEach(t),v_=s(Ei," forward method, overrides the "),Xl=a(Ei,"CODE",{});var zy=i(Xl);y_=s(zy,"__call__"),zy.forEach(t),T_=s(Ei," special method."),Ei.forEach(t),$_=m(Gt),y(Dn.$$.fragment,Gt),L_=m(Gt),y(Sn.$$.fragment,Gt),x_=m(Gt),y(Bn.$$.fragment,Gt),Gt.forEach(t),Vt.forEach(t),rm=m(o),No=a(o,"H2",{class:!0});var ph=i(No);Wn=a(ph,"A",{id:!0,class:!0,href:!0});var jy=i(Wn);Zl=a(jy,"SPAN",{});var Cy=i(Zl);y(Ir.$$.fragment,Cy),Cy.forEach(t),jy.forEach(t),F_=m(ph),ed=a(ph,"SPAN",{});var Oy=i(ed);M_=s(Oy,"LongformerForQuestionAnswering"),Oy.forEach(t),ph.forEach(t),am=m(o),kt=a(o,"DIV",{class:!0});var Jt=i(kt);y(Dr.$$.fragment,Jt),E_=m(Jt),Ao=a(Jt,"P",{});var qi=i(Ao);q_=s(qi,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),td=a(qi,"CODE",{});var Py=i(td);z_=s(Py,"span start logits"),Py.forEach(t),j_=s(qi," and "),od=a(qi,"CODE",{});var Ny=i(od);C_=s(Ny,"span end logits"),Ny.forEach(t),O_=s(qi,")."),qi.forEach(t),P_=m(Jt),Sr=a(Jt,"P",{});var fh=i(Sr);N_=s(fh,"This model inherits from "),ri=a(fh,"A",{href:!0});var Ay=i(ri);A_=s(Ay,"PreTrainedModel"),Ay.forEach(t),I_=s(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),D_=m(Jt),Br=a(Jt,"P",{});var gh=i(Br);S_=s(gh,"This model is also a PyTorch "),Wr=a(gh,"A",{href:!0,rel:!0});var Iy=i(Wr);B_=s(Iy,"torch.nn.Module"),Iy.forEach(t),W_=s(gh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gh.forEach(t),Q_=m(Jt),zt=a(Jt,"DIV",{class:!0});var bs=i(zt);y(Qr.$$.fragment,bs),U_=m(bs),Io=a(bs,"P",{});var zi=i(Io);H_=s(zi,"The "),ai=a(zi,"A",{href:!0});var Dy=i(ai);K_=s(Dy,"LongformerForQuestionAnswering"),Dy.forEach(t),R_=s(zi," forward method, overrides the "),nd=a(zi,"CODE",{});var Sy=i(nd);V_=s(Sy,"__call__"),Sy.forEach(t),G_=s(zi," special method."),zi.forEach(t),J_=m(bs),y(Qn.$$.fragment,bs),Y_=m(bs),y(Un.$$.fragment,bs),bs.forEach(t),Jt.forEach(t),im=m(o),Do=a(o,"H2",{class:!0});var uh=i(Do);Hn=a(uh,"A",{id:!0,class:!0,href:!0});var By=i(Hn);sd=a(By,"SPAN",{});var Wy=i(sd);y(Ur.$$.fragment,Wy),Wy.forEach(t),By.forEach(t),X_=m(uh),rd=a(uh,"SPAN",{});var Qy=i(rd);Z_=s(Qy,"TFLongformerModel"),Qy.forEach(t),uh.forEach(t),lm=m(o),Xe=a(o,"DIV",{class:!0});var pt=i(Xe);y(Hr.$$.fragment,pt),ew=m(pt),ad=a(pt,"P",{});var Uy=i(ad);tw=s(Uy,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Uy.forEach(t),ow=m(pt),Kr=a(pt,"P",{});var _h=i(Kr);nw=s(_h,"This model inherits from "),ii=a(_h,"A",{href:!0});var Hy=i(ii);sw=s(Hy,"TFPreTrainedModel"),Hy.forEach(t),rw=s(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),aw=m(pt),Rr=a(pt,"P",{});var wh=i(Rr);iw=s(wh,"This model is also a "),Vr=a(wh,"A",{href:!0,rel:!0});var Ky=i(Vr);lw=s(Ky,"tf.keras.Model"),Ky.forEach(t),dw=s(wh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wh.forEach(t),cw=m(pt),y(Kn.$$.fragment,pt),mw=m(pt),So=a(pt,"P",{});var ji=i(So);hw=s(ji,"This class copies code from "),li=a(ji,"A",{href:!0});var Ry=i(li);pw=s(Ry,"TFRobertaModel"),Ry.forEach(t),fw=s(ji,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Gr=a(ji,"A",{href:!0,rel:!0});var Vy=i(Gr);gw=s(Vy,"Longformer: the Long-Document Transformer"),Vy.forEach(t),uw=s(ji,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),ji.forEach(t),_w=m(pt),Jr=a(pt,"P",{});var kh=i(Jr);ww=s(kh,"The self-attention module "),id=a(kh,"CODE",{});var Gy=i(id);kw=s(Gy,"TFLongformerSelfAttention"),Gy.forEach(t),bw=s(kh,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),kh.forEach(t),vw=m(pt),Qt=a(pt,"DIV",{class:!0});var Ci=i(Qt);y(Yr.$$.fragment,Ci),yw=m(Ci),Bo=a(Ci,"P",{});var Oi=i(Bo);Tw=s(Oi,"The "),di=a(Oi,"A",{href:!0});var Jy=i(di);$w=s(Jy,"TFLongformerModel"),Jy.forEach(t),Lw=s(Oi," forward method, overrides the "),ld=a(Oi,"CODE",{});var Yy=i(ld);xw=s(Yy,"__call__"),Yy.forEach(t),Fw=s(Oi," special method."),Oi.forEach(t),Mw=m(Ci),y(Rn.$$.fragment,Ci),Ci.forEach(t),pt.forEach(t),dm=m(o),Wo=a(o,"H2",{class:!0});var bh=i(Wo);Vn=a(bh,"A",{id:!0,class:!0,href:!0});var Xy=i(Vn);dd=a(Xy,"SPAN",{});var Zy=i(dd);y(Xr.$$.fragment,Zy),Zy.forEach(t),Xy.forEach(t),Ew=m(bh),cd=a(bh,"SPAN",{});var eT=i(cd);qw=s(eT,"TFLongformerForMaskedLM"),eT.forEach(t),bh.forEach(t),cm=m(o),at=a(o,"DIV",{class:!0});var Ot=i(at);y(Zr.$$.fragment,Ot),zw=m(Ot),ea=a(Ot,"P",{});var vh=i(ea);jw=s(vh,"Longformer Model with a "),md=a(vh,"CODE",{});var tT=i(md);Cw=s(tT,"language modeling"),tT.forEach(t),Ow=s(vh," head on top."),vh.forEach(t),Pw=m(Ot),ta=a(Ot,"P",{});var yh=i(ta);Nw=s(yh,"This model inherits from "),ci=a(yh,"A",{href:!0});var oT=i(ci);Aw=s(oT,"TFPreTrainedModel"),oT.forEach(t),Iw=s(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),Dw=m(Ot),oa=a(Ot,"P",{});var Th=i(oa);Sw=s(Th,"This model is also a "),na=a(Th,"A",{href:!0,rel:!0});var nT=i(na);Bw=s(nT,"tf.keras.Model"),nT.forEach(t),Ww=s(Th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Th.forEach(t),Qw=m(Ot),y(Gn.$$.fragment,Ot),Uw=m(Ot),yt=a(Ot,"DIV",{class:!0});var Yt=i(yt);y(sa.$$.fragment,Yt),Hw=m(Yt),Qo=a(Yt,"P",{});var Pi=i(Qo);Kw=s(Pi,"The "),mi=a(Pi,"A",{href:!0});var sT=i(mi);Rw=s(sT,"TFLongformerForMaskedLM"),sT.forEach(t),Vw=s(Pi," forward method, overrides the "),hd=a(Pi,"CODE",{});var rT=i(hd);Gw=s(rT,"__call__"),rT.forEach(t),Jw=s(Pi," special method."),Pi.forEach(t),Yw=m(Yt),y(Jn.$$.fragment,Yt),Xw=m(Yt),y(Yn.$$.fragment,Yt),Zw=m(Yt),y(Xn.$$.fragment,Yt),Yt.forEach(t),Ot.forEach(t),mm=m(o),Uo=a(o,"H2",{class:!0});var $h=i(Uo);Zn=a($h,"A",{id:!0,class:!0,href:!0});var aT=i(Zn);pd=a(aT,"SPAN",{});var iT=i(pd);y(ra.$$.fragment,iT),iT.forEach(t),aT.forEach(t),ek=m($h),fd=a($h,"SPAN",{});var lT=i(fd);tk=s(lT,"TFLongformerForQuestionAnswering"),lT.forEach(t),$h.forEach(t),hm=m(o),it=a(o,"DIV",{class:!0});var Pt=i(it);y(aa.$$.fragment,Pt),ok=m(Pt),Ho=a(Pt,"P",{});var Ni=i(Ho);nk=s(Ni,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),gd=a(Ni,"CODE",{});var dT=i(gd);sk=s(dT,"span start logits"),dT.forEach(t),rk=s(Ni," and "),ud=a(Ni,"CODE",{});var cT=i(ud);ak=s(cT,"span end logits"),cT.forEach(t),ik=s(Ni,")."),Ni.forEach(t),lk=m(Pt),ia=a(Pt,"P",{});var Lh=i(ia);dk=s(Lh,"This model inherits from "),hi=a(Lh,"A",{href:!0});var mT=i(hi);ck=s(mT,"TFPreTrainedModel"),mT.forEach(t),mk=s(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(t),hk=m(Pt),la=a(Pt,"P",{});var xh=i(la);pk=s(xh,"This model is also a "),da=a(xh,"A",{href:!0,rel:!0});var hT=i(da);fk=s(hT,"tf.keras.Model"),hT.forEach(t),gk=s(xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xh.forEach(t),uk=m(Pt),y(es.$$.fragment,Pt),_k=m(Pt),Tt=a(Pt,"DIV",{class:!0});var Xt=i(Tt);y(ca.$$.fragment,Xt),wk=m(Xt),Ko=a(Xt,"P",{});var Ai=i(Ko);kk=s(Ai,"The "),pi=a(Ai,"A",{href:!0});var pT=i(pi);bk=s(pT,"TFLongformerForQuestionAnswering"),pT.forEach(t),vk=s(Ai," forward method, overrides the "),_d=a(Ai,"CODE",{});var fT=i(_d);yk=s(fT,"__call__"),fT.forEach(t),Tk=s(Ai," special method."),Ai.forEach(t),$k=m(Xt),y(ts.$$.fragment,Xt),Lk=m(Xt),y(os.$$.fragment,Xt),xk=m(Xt),y(ns.$$.fragment,Xt),Xt.forEach(t),Pt.forEach(t),pm=m(o),Ro=a(o,"H2",{class:!0});var Fh=i(Ro);ss=a(Fh,"A",{id:!0,class:!0,href:!0});var gT=i(ss);wd=a(gT,"SPAN",{});var uT=i(wd);y(ma.$$.fragment,uT),uT.forEach(t),gT.forEach(t),Fk=m(Fh),kd=a(Fh,"SPAN",{});var _T=i(kd);Mk=s(_T,"TFLongformerForSequenceClassification"),_T.forEach(t),Fh.forEach(t),fm=m(o),lt=a(o,"DIV",{class:!0});var Nt=i(lt);y(ha.$$.fragment,Nt),Ek=m(Nt),bd=a(Nt,"P",{});var wT=i(bd);qk=s(wT,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wT.forEach(t),zk=m(Nt),pa=a(Nt,"P",{});var Mh=i(pa);jk=s(Mh,"This model inherits from "),fi=a(Mh,"A",{href:!0});var kT=i(fi);Ck=s(kT,"TFPreTrainedModel"),kT.forEach(t),Ok=s(Mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mh.forEach(t),Pk=m(Nt),fa=a(Nt,"P",{});var Eh=i(fa);Nk=s(Eh,"This model is also a "),ga=a(Eh,"A",{href:!0,rel:!0});var bT=i(ga);Ak=s(bT,"tf.keras.Model"),bT.forEach(t),Ik=s(Eh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Eh.forEach(t),Dk=m(Nt),y(rs.$$.fragment,Nt),Sk=m(Nt),$t=a(Nt,"DIV",{class:!0});var Zt=i($t);y(ua.$$.fragment,Zt),Bk=m(Zt),Vo=a(Zt,"P",{});var Ii=i(Vo);Wk=s(Ii,"The "),gi=a(Ii,"A",{href:!0});var vT=i(gi);Qk=s(vT,"TFLongformerForSequenceClassification"),vT.forEach(t),Uk=s(Ii," forward method, overrides the "),vd=a(Ii,"CODE",{});var yT=i(vd);Hk=s(yT,"__call__"),yT.forEach(t),Kk=s(Ii," special method."),Ii.forEach(t),Rk=m(Zt),y(as.$$.fragment,Zt),Vk=m(Zt),y(is.$$.fragment,Zt),Gk=m(Zt),y(ls.$$.fragment,Zt),Zt.forEach(t),Nt.forEach(t),gm=m(o),Go=a(o,"H2",{class:!0});var qh=i(Go);ds=a(qh,"A",{id:!0,class:!0,href:!0});var TT=i(ds);yd=a(TT,"SPAN",{});var $T=i(yd);y(_a.$$.fragment,$T),$T.forEach(t),TT.forEach(t),Jk=m(qh),Td=a(qh,"SPAN",{});var LT=i(Td);Yk=s(LT,"TFLongformerForTokenClassification"),LT.forEach(t),qh.forEach(t),um=m(o),dt=a(o,"DIV",{class:!0});var At=i(dt);y(wa.$$.fragment,At),Xk=m(At),$d=a(At,"P",{});var xT=i($d);Zk=s(xT,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),xT.forEach(t),eb=m(At),ka=a(At,"P",{});var zh=i(ka);tb=s(zh,"This model inherits from "),ui=a(zh,"A",{href:!0});var FT=i(ui);ob=s(FT,"TFPreTrainedModel"),FT.forEach(t),nb=s(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(t),sb=m(At),ba=a(At,"P",{});var jh=i(ba);rb=s(jh,"This model is also a "),va=a(jh,"A",{href:!0,rel:!0});var MT=i(va);ab=s(MT,"tf.keras.Model"),MT.forEach(t),ib=s(jh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jh.forEach(t),lb=m(At),y(cs.$$.fragment,At),db=m(At),Lt=a(At,"DIV",{class:!0});var eo=i(Lt);y(ya.$$.fragment,eo),cb=m(eo),Jo=a(eo,"P",{});var Di=i(Jo);mb=s(Di,"The "),_i=a(Di,"A",{href:!0});var ET=i(_i);hb=s(ET,"TFLongformerForTokenClassification"),ET.forEach(t),pb=s(Di," forward method, overrides the "),Ld=a(Di,"CODE",{});var qT=i(Ld);fb=s(qT,"__call__"),qT.forEach(t),gb=s(Di," special method."),Di.forEach(t),ub=m(eo),y(ms.$$.fragment,eo),_b=m(eo),y(hs.$$.fragment,eo),wb=m(eo),y(ps.$$.fragment,eo),eo.forEach(t),At.forEach(t),_m=m(o),Yo=a(o,"H2",{class:!0});var Ch=i(Yo);fs=a(Ch,"A",{id:!0,class:!0,href:!0});var zT=i(fs);xd=a(zT,"SPAN",{});var jT=i(xd);y(Ta.$$.fragment,jT),jT.forEach(t),zT.forEach(t),kb=m(Ch),Fd=a(Ch,"SPAN",{});var CT=i(Fd);bb=s(CT,"TFLongformerForMultipleChoice"),CT.forEach(t),Ch.forEach(t),wm=m(o),ct=a(o,"DIV",{class:!0});var It=i(ct);y($a.$$.fragment,It),vb=m(It),Md=a(It,"P",{});var OT=i(Md);yb=s(OT,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),OT.forEach(t),Tb=m(It),La=a(It,"P",{});var Oh=i(La);$b=s(Oh,"This model inherits from "),wi=a(Oh,"A",{href:!0});var PT=i(wi);Lb=s(PT,"TFPreTrainedModel"),PT.forEach(t),xb=s(Oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh.forEach(t),Fb=m(It),xa=a(It,"P",{});var Ph=i(xa);Mb=s(Ph,"This model is also a "),Fa=a(Ph,"A",{href:!0,rel:!0});var NT=i(Fa);Eb=s(NT,"tf.keras.Model"),NT.forEach(t),qb=s(Ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ph.forEach(t),zb=m(It),y(gs.$$.fragment,It),jb=m(It),jt=a(It,"DIV",{class:!0});var vs=i(jt);y(Ma.$$.fragment,vs),Cb=m(vs),Xo=a(vs,"P",{});var Si=i(Xo);Ob=s(Si,"The "),ki=a(Si,"A",{href:!0});var AT=i(ki);Pb=s(AT,"TFLongformerForMultipleChoice"),AT.forEach(t),Nb=s(Si," forward method, overrides the "),Ed=a(Si,"CODE",{});var IT=i(Ed);Ab=s(IT,"__call__"),IT.forEach(t),Ib=s(Si," special method."),Si.forEach(t),Db=m(vs),y(us.$$.fragment,vs),Sb=m(vs),y(_s.$$.fragment,vs),vs.forEach(t),It.forEach(t),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(S1)),_(g,"id","longformer"),_(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(g,"href","#longformer"),_(h,"class","relative group"),_(te,"id","overview"),_(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(te,"href","#overview"),_(A,"class","relative group"),_(me,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(me,"rel","nofollow"),_(he,"href","https://huggingface.co/beltagy"),_(he,"rel","nofollow"),_(ee,"href","https://github.com/allenai/longformer"),_(ee,"rel","nofollow"),_(ce,"id","longformer-self-attention"),_(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ce,"href","#longformer-self-attention"),_(le,"class","relative group"),Be.a=We,Qe.a=R,Ue.a=V,ic.a=lc,cc.a=mc,_(Na,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel.forward"),uc.a=_c,wc.a=kc,bc.a=vc,yc.a=Tc,_(ys,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(ys,"rel","nofollow"),_(ln,"id","training"),_(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ln,"href","#training"),_(to,"class","relative group"),_(Aa,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Ia,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),_(dn,"id","transformers.LongformerConfig"),_(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(dn,"href","#transformers.LongformerConfig"),_(no,"class","relative group"),_(Da,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),_(Sa,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),_(Ba,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),_(Fs,"href","https://huggingface.co/allenai/longformer-base-4096"),_(Fs,"rel","nofollow"),_(Wa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),_(Qa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),_(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(mn,"id","transformers.LongformerTokenizer"),_(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(mn,"href","#transformers.LongformerTokenizer"),_(io,"class","relative group"),_(Ua,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),_(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_n,"id","transformers.LongformerTokenizerFast"),_(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_n,"href","#transformers.LongformerTokenizerFast"),_(lo,"class","relative group"),_(Ra,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),_(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(vn,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(vn,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(co,"class","relative group"),_(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(yn,"id","transformers.LongformerModel"),_(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(yn,"href","#transformers.LongformerModel"),_(Lo,"class","relative group"),_(Va,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(dr,"rel","nofollow"),_(Ga,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),_(cr,"href","https://arxiv.org/abs/2004.05150"),_(cr,"rel","nofollow"),_(Ja,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),_(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ln,"id","transformers.LongformerForMaskedLM"),_(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ln,"href","#transformers.LongformerForMaskedLM"),_(Mo,"class","relative group"),_(Ya,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(wr,"rel","nofollow"),_(Xa,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(En,"id","transformers.LongformerForSequenceClassification"),_(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(En,"href","#transformers.LongformerForSequenceClassification"),_(qo,"class","relative group"),_(Za,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_($r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_($r,"rel","nofollow"),_(ei,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pn,"id","transformers.LongformerForMultipleChoice"),_(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Pn,"href","#transformers.LongformerForMultipleChoice"),_(jo,"class","relative group"),_(ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(qr,"rel","nofollow"),_(oi,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),_(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(In,"id","transformers.LongformerForTokenClassification"),_(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(In,"href","#transformers.LongformerForTokenClassification"),_(Oo,"class","relative group"),_(ni,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(Nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Nr,"rel","nofollow"),_(si,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForTokenClassification"),_(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wn,"id","transformers.LongformerForQuestionAnswering"),_(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Wn,"href","#transformers.LongformerForQuestionAnswering"),_(No,"class","relative group"),_(ri,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),_(Wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Wr,"rel","nofollow"),_(ai,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),_(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Hn,"id","transformers.TFLongformerModel"),_(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Hn,"href","#transformers.TFLongformerModel"),_(Do,"class","relative group"),_(ii,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Vr,"rel","nofollow"),_(li,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),_(Gr,"href","https://arxiv.org/abs/2004.05150"),_(Gr,"rel","nofollow"),_(di,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),_(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vn,"id","transformers.TFLongformerForMaskedLM"),_(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Vn,"href","#transformers.TFLongformerForMaskedLM"),_(Wo,"class","relative group"),_(ci,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(na,"rel","nofollow"),_(mi,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),_(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Zn,"id","transformers.TFLongformerForQuestionAnswering"),_(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Zn,"href","#transformers.TFLongformerForQuestionAnswering"),_(Uo,"class","relative group"),_(hi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(da,"rel","nofollow"),_(pi,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),_(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ss,"id","transformers.TFLongformerForSequenceClassification"),_(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ss,"href","#transformers.TFLongformerForSequenceClassification"),_(Ro,"class","relative group"),_(fi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(ga,"rel","nofollow"),_(gi,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),_($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ds,"id","transformers.TFLongformerForTokenClassification"),_(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ds,"href","#transformers.TFLongformerForTokenClassification"),_(Go,"class","relative group"),_(ui,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(va,"rel","nofollow"),_(_i,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),_(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(fs,"id","transformers.TFLongformerForMultipleChoice"),_(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(fs,"href","#transformers.TFLongformerForMultipleChoice"),_(Yo,"class","relative group"),_(wi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),_(Fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Fa,"rel","nofollow"),_(ki,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),_(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,d),f(o,k,u),f(o,h,u),e(h,g),e(g,b),T(l,b,null),e(h,p),e(h,z),e(z,ie),f(o,Z,u),f(o,A,u),e(A,te),e(te,oe),T(F,oe,null),e(A,be),e(A,H),e(H,ve),f(o,ge,u),f(o,S,u),e(S,ye),e(S,me),e(me,G),e(S,Te),f(o,ue,u),f(o,W,u),e(W,$e),f(o,_e,u),f(o,Q,u),e(Q,pe),e(pe,Le),f(o,re,u),f(o,j,u),e(j,O),f(o,we,u),f(o,U,u),e(U,ne),e(ne,xe),e(ne,K),e(K,Fe),e(ne,Me),e(ne,C),e(C,Ee),e(ne,J),e(ne,fe),e(fe,qe),e(ne,Y),f(o,ke,u),f(o,ae,u),e(ae,D),e(ae,he),e(he,X),e(ae,ze),e(ae,ee),e(ee,P),e(ae,je),f(o,N,u),f(o,le,u),e(le,ce),e(ce,w),T(E,w,null),e(le,Ke),e(le,se),e(se,Re),f(o,Se,u),f(o,M,u),e(M,Ve),Be.m(ot,M),e(M,We),Qe.m(B,M),e(M,R),Ue.m(nt,M),e(M,V),e(M,Ne),e(Ne,Ge),e(M,Ce),e(M,Ae),e(Ae,de),e(M,Je),e(M,Bi),e(Bi,Nh),e(M,Ah),ic.m(DT,M),e(M,lc),e(M,Wi),e(Wi,Ih),e(M,Dh),f(o,dc,u),f(o,St,u),e(St,Sh),cc.m(ST,St),e(St,mc),e(St,Qi),e(Qi,Bh),e(St,Wh),f(o,hc,u),f(o,Bt,u),e(Bt,Qh),e(Bt,Ui),e(Ui,Uh),e(Bt,Hh),e(Bt,Hi),e(Hi,Kh),e(Bt,Rh),f(o,pc,u),f(o,sn,u),e(sn,Ki),e(Ki,Vh),e(sn,Gh),e(sn,Ri),e(Ri,Jh),f(o,fc,u),f(o,rn,u),e(rn,Yh),e(rn,Na),e(Na,Xh),e(rn,Zh),f(o,gc,u),f(o,bt,u),e(bt,ep),uc.m(BT,bt),e(bt,_c),wc.m(WT,bt),e(bt,kc),bc.m(QT,bt),e(bt,vc),yc.m(UT,bt),e(bt,Tc),f(o,$c,u),f(o,an,u),e(an,tp),e(an,ys),e(ys,op),e(an,np),f(o,Lc,u),f(o,to,u),e(to,ln),e(ln,Vi),T(Ts,Vi,null),e(to,sp),e(to,Gi),e(Gi,rp),f(o,xc,u),f(o,oo,u),e(oo,Aa),e(Aa,ap),e(oo,ip),e(oo,Ia),e(Ia,lp),e(oo,dp),f(o,Fc,u),T($s,o,u),f(o,Mc,u),f(o,no,u),e(no,dn),e(dn,Ji),T(Ls,Ji,null),e(no,cp),e(no,Yi),e(Yi,mp),f(o,Ec,u),f(o,ft,u),T(xs,ft,null),e(ft,hp),e(ft,so),e(so,pp),e(so,Da),e(Da,fp),e(so,gp),e(so,Sa),e(Sa,up),e(so,_p),e(ft,wp),e(ft,ro),e(ro,kp),e(ro,Ba),e(Ba,bp),e(ro,vp),e(ro,Fs),e(Fs,yp),e(ro,Tp),e(ft,$p),e(ft,ao),e(ao,Lp),e(ao,Wa),e(Wa,xp),e(ao,Fp),e(ao,Qa),e(Qa,Mp),e(ao,Ep),e(ft,qp),T(cn,ft,null),f(o,qc,u),f(o,io,u),e(io,mn),e(mn,Xi),T(Ms,Xi,null),e(io,zp),e(io,Zi),e(Zi,jp),f(o,zc,u),f(o,Oe,u),T(Es,Oe,null),e(Oe,Cp),e(Oe,el),e(el,Op),e(Oe,Pp),e(Oe,tl),e(tl,Np),e(Oe,Ap),T(hn,Oe,null),e(Oe,Ip),e(Oe,qs),e(qs,Dp),e(qs,ol),e(ol,Sp),e(qs,Bp),e(Oe,Wp),T(pn,Oe,null),e(Oe,Qp),e(Oe,zs),e(zs,Up),e(zs,Ua),e(Ua,Hp),e(zs,Kp),e(Oe,Rp),e(Oe,Wt),T(js,Wt,null),e(Wt,Vp),e(Wt,nl),e(nl,Gp),e(Wt,Jp),e(Wt,Cs),e(Cs,Ha),e(Ha,Yp),e(Ha,sl),e(sl,Xp),e(Cs,Zp),e(Cs,Ka),e(Ka,ef),e(Ka,rl),e(rl,tf),e(Oe,of),e(Oe,fn),T(Os,fn,null),e(fn,nf),e(fn,al),e(al,sf),e(Oe,rf),e(Oe,gn),T(Ps,gn,null),e(gn,af),e(gn,il),e(il,lf),e(Oe,df),e(Oe,un),T(Ns,un,null),e(un,cf),e(un,As),e(As,mf),e(As,ll),e(ll,hf),e(As,pf),f(o,jc,u),f(o,lo,u),e(lo,_n),e(_n,dl),T(Is,dl,null),e(lo,ff),e(lo,cl),e(cl,gf),f(o,Cc,u),f(o,Ye,u),T(Ds,Ye,null),e(Ye,uf),e(Ye,Ss),e(Ss,_f),e(Ss,ml),e(ml,wf),e(Ss,kf),e(Ye,bf),e(Ye,hl),e(hl,vf),e(Ye,yf),T(wn,Ye,null),e(Ye,Tf),e(Ye,Bs),e(Bs,$f),e(Bs,pl),e(pl,Lf),e(Bs,xf),e(Ye,Ff),T(kn,Ye,null),e(Ye,Mf),e(Ye,Ws),e(Ws,Ef),e(Ws,Ra),e(Ra,qf),e(Ws,zf),e(Ye,jf),e(Ye,bn),T(Qs,bn,null),e(bn,Cf),e(bn,fl),e(fl,Of),f(o,Oc,u),f(o,co,u),e(co,vn),e(vn,gl),T(Us,gl,null),e(co,Pf),e(co,ul),e(ul,Nf),f(o,Pc,u),f(o,mo,u),T(Hs,mo,null),e(mo,Af),e(mo,_l),e(_l,If),f(o,Nc,u),f(o,ho,u),T(Ks,ho,null),e(ho,Df),e(ho,wl),e(wl,Sf),f(o,Ac,u),f(o,po,u),T(Rs,po,null),e(po,Bf),e(po,kl),e(kl,Wf),f(o,Ic,u),f(o,fo,u),T(Vs,fo,null),e(fo,Qf),e(fo,bl),e(bl,Uf),f(o,Dc,u),f(o,go,u),T(Gs,go,null),e(go,Hf),e(go,vl),e(vl,Kf),f(o,Sc,u),f(o,uo,u),T(Js,uo,null),e(uo,Rf),e(uo,yl),e(yl,Vf),f(o,Bc,u),f(o,_o,u),T(Ys,_o,null),e(_o,Gf),e(_o,Tl),e(Tl,Jf),f(o,Wc,u),f(o,wo,u),T(Xs,wo,null),e(wo,Yf),e(wo,$l),e($l,Xf),f(o,Qc,u),f(o,ko,u),T(Zs,ko,null),e(ko,Zf),e(ko,Ll),e(Ll,eg),f(o,Uc,u),f(o,bo,u),T(er,bo,null),e(bo,tg),e(bo,xl),e(xl,og),f(o,Hc,u),f(o,vo,u),T(tr,vo,null),e(vo,ng),e(vo,Fl),e(Fl,sg),f(o,Kc,u),f(o,yo,u),T(or,yo,null),e(yo,rg),e(yo,Ml),e(Ml,ag),f(o,Rc,u),f(o,To,u),T(nr,To,null),e(To,ig),e(To,El),e(El,lg),f(o,Vc,u),f(o,$o,u),T(sr,$o,null),e($o,dg),e($o,ql),e(ql,cg),f(o,Gc,u),f(o,Lo,u),e(Lo,yn),e(yn,zl),T(rr,zl,null),e(Lo,mg),e(Lo,jl),e(jl,hg),f(o,Jc,u),f(o,st,u),T(ar,st,null),e(st,pg),e(st,Cl),e(Cl,fg),e(st,gg),e(st,ir),e(ir,ug),e(ir,Va),e(Va,_g),e(ir,wg),e(st,kg),e(st,lr),e(lr,bg),e(lr,dr),e(dr,vg),e(lr,yg),e(st,Tg),e(st,xo),e(xo,$g),e(xo,Ga),e(Ga,Lg),e(xo,xg),e(xo,cr),e(cr,Fg),e(xo,Mg),e(st,Eg),e(st,mr),e(mr,qg),e(mr,Ol),e(Ol,zg),e(mr,jg),e(st,Cg),e(st,Et),T(hr,Et,null),e(Et,Og),e(Et,Fo),e(Fo,Pg),e(Fo,Ja),e(Ja,Ng),e(Fo,Ag),e(Fo,Pl),e(Pl,Ig),e(Fo,Dg),e(Et,Sg),T(Tn,Et,null),e(Et,Bg),T($n,Et,null),f(o,Yc,u),f(o,Mo,u),e(Mo,Ln),e(Ln,Nl),T(pr,Nl,null),e(Mo,Wg),e(Mo,Al),e(Al,Qg),f(o,Xc,u),f(o,gt,u),T(fr,gt,null),e(gt,Ug),e(gt,gr),e(gr,Hg),e(gr,Il),e(Il,Kg),e(gr,Rg),e(gt,Vg),e(gt,ur),e(ur,Gg),e(ur,Ya),e(Ya,Jg),e(ur,Yg),e(gt,Xg),e(gt,_r),e(_r,Zg),e(_r,wr),e(wr,eu),e(_r,tu),e(gt,ou),e(gt,mt),T(kr,mt,null),e(mt,nu),e(mt,Eo),e(Eo,su),e(Eo,Xa),e(Xa,ru),e(Eo,au),e(Eo,Dl),e(Dl,iu),e(Eo,lu),e(mt,du),T(xn,mt,null),e(mt,cu),T(Fn,mt,null),e(mt,mu),e(mt,Sl),e(Sl,hu),e(mt,pu),T(Mn,mt,null),f(o,Zc,u),f(o,qo,u),e(qo,En),e(En,Bl),T(br,Bl,null),e(qo,fu),e(qo,Wl),e(Wl,gu),f(o,em,u),f(o,ut,u),T(vr,ut,null),e(ut,uu),e(ut,Ql),e(Ql,_u),e(ut,wu),e(ut,yr),e(yr,ku),e(yr,Za),e(Za,bu),e(yr,vu),e(ut,yu),e(ut,Tr),e(Tr,Tu),e(Tr,$r),e($r,$u),e(Tr,Lu),e(ut,xu),e(ut,rt),T(Lr,rt,null),e(rt,Fu),e(rt,zo),e(zo,Mu),e(zo,ei),e(ei,Eu),e(zo,qu),e(zo,Ul),e(Ul,zu),e(zo,ju),e(rt,Cu),T(qn,rt,null),e(rt,Ou),T(zn,rt,null),e(rt,Pu),T(jn,rt,null),e(rt,Nu),T(Cn,rt,null),e(rt,Au),T(On,rt,null),f(o,tm,u),f(o,jo,u),e(jo,Pn),e(Pn,Hl),T(xr,Hl,null),e(jo,Iu),e(jo,Kl),e(Kl,Du),f(o,om,u),f(o,_t,u),T(Fr,_t,null),e(_t,Su),e(_t,Rl),e(Rl,Bu),e(_t,Wu),e(_t,Mr),e(Mr,Qu),e(Mr,ti),e(ti,Uu),e(Mr,Hu),e(_t,Ku),e(_t,Er),e(Er,Ru),e(Er,qr),e(qr,Vu),e(Er,Gu),e(_t,Ju),e(_t,qt),T(zr,qt,null),e(qt,Yu),e(qt,Co),e(Co,Xu),e(Co,oi),e(oi,Zu),e(Co,e_),e(Co,Vl),e(Vl,t_),e(Co,o_),e(qt,n_),T(Nn,qt,null),e(qt,s_),T(An,qt,null),f(o,nm,u),f(o,Oo,u),e(Oo,In),e(In,Gl),T(jr,Gl,null),e(Oo,r_),e(Oo,Jl),e(Jl,a_),f(o,sm,u),f(o,wt,u),T(Cr,wt,null),e(wt,i_),e(wt,Yl),e(Yl,l_),e(wt,d_),e(wt,Or),e(Or,c_),e(Or,ni),e(ni,m_),e(Or,h_),e(wt,p_),e(wt,Pr),e(Pr,f_),e(Pr,Nr),e(Nr,g_),e(Pr,u_),e(wt,__),e(wt,vt),T(Ar,vt,null),e(vt,w_),e(vt,Po),e(Po,k_),e(Po,si),e(si,b_),e(Po,v_),e(Po,Xl),e(Xl,y_),e(Po,T_),e(vt,$_),T(Dn,vt,null),e(vt,L_),T(Sn,vt,null),e(vt,x_),T(Bn,vt,null),f(o,rm,u),f(o,No,u),e(No,Wn),e(Wn,Zl),T(Ir,Zl,null),e(No,F_),e(No,ed),e(ed,M_),f(o,am,u),f(o,kt,u),T(Dr,kt,null),e(kt,E_),e(kt,Ao),e(Ao,q_),e(Ao,td),e(td,z_),e(Ao,j_),e(Ao,od),e(od,C_),e(Ao,O_),e(kt,P_),e(kt,Sr),e(Sr,N_),e(Sr,ri),e(ri,A_),e(Sr,I_),e(kt,D_),e(kt,Br),e(Br,S_),e(Br,Wr),e(Wr,B_),e(Br,W_),e(kt,Q_),e(kt,zt),T(Qr,zt,null),e(zt,U_),e(zt,Io),e(Io,H_),e(Io,ai),e(ai,K_),e(Io,R_),e(Io,nd),e(nd,V_),e(Io,G_),e(zt,J_),T(Qn,zt,null),e(zt,Y_),T(Un,zt,null),f(o,im,u),f(o,Do,u),e(Do,Hn),e(Hn,sd),T(Ur,sd,null),e(Do,X_),e(Do,rd),e(rd,Z_),f(o,lm,u),f(o,Xe,u),T(Hr,Xe,null),e(Xe,ew),e(Xe,ad),e(ad,tw),e(Xe,ow),e(Xe,Kr),e(Kr,nw),e(Kr,ii),e(ii,sw),e(Kr,rw),e(Xe,aw),e(Xe,Rr),e(Rr,iw),e(Rr,Vr),e(Vr,lw),e(Rr,dw),e(Xe,cw),T(Kn,Xe,null),e(Xe,mw),e(Xe,So),e(So,hw),e(So,li),e(li,pw),e(So,fw),e(So,Gr),e(Gr,gw),e(So,uw),e(Xe,_w),e(Xe,Jr),e(Jr,ww),e(Jr,id),e(id,kw),e(Jr,bw),e(Xe,vw),e(Xe,Qt),T(Yr,Qt,null),e(Qt,yw),e(Qt,Bo),e(Bo,Tw),e(Bo,di),e(di,$w),e(Bo,Lw),e(Bo,ld),e(ld,xw),e(Bo,Fw),e(Qt,Mw),T(Rn,Qt,null),f(o,dm,u),f(o,Wo,u),e(Wo,Vn),e(Vn,dd),T(Xr,dd,null),e(Wo,Ew),e(Wo,cd),e(cd,qw),f(o,cm,u),f(o,at,u),T(Zr,at,null),e(at,zw),e(at,ea),e(ea,jw),e(ea,md),e(md,Cw),e(ea,Ow),e(at,Pw),e(at,ta),e(ta,Nw),e(ta,ci),e(ci,Aw),e(ta,Iw),e(at,Dw),e(at,oa),e(oa,Sw),e(oa,na),e(na,Bw),e(oa,Ww),e(at,Qw),T(Gn,at,null),e(at,Uw),e(at,yt),T(sa,yt,null),e(yt,Hw),e(yt,Qo),e(Qo,Kw),e(Qo,mi),e(mi,Rw),e(Qo,Vw),e(Qo,hd),e(hd,Gw),e(Qo,Jw),e(yt,Yw),T(Jn,yt,null),e(yt,Xw),T(Yn,yt,null),e(yt,Zw),T(Xn,yt,null),f(o,mm,u),f(o,Uo,u),e(Uo,Zn),e(Zn,pd),T(ra,pd,null),e(Uo,ek),e(Uo,fd),e(fd,tk),f(o,hm,u),f(o,it,u),T(aa,it,null),e(it,ok),e(it,Ho),e(Ho,nk),e(Ho,gd),e(gd,sk),e(Ho,rk),e(Ho,ud),e(ud,ak),e(Ho,ik),e(it,lk),e(it,ia),e(ia,dk),e(ia,hi),e(hi,ck),e(ia,mk),e(it,hk),e(it,la),e(la,pk),e(la,da),e(da,fk),e(la,gk),e(it,uk),T(es,it,null),e(it,_k),e(it,Tt),T(ca,Tt,null),e(Tt,wk),e(Tt,Ko),e(Ko,kk),e(Ko,pi),e(pi,bk),e(Ko,vk),e(Ko,_d),e(_d,yk),e(Ko,Tk),e(Tt,$k),T(ts,Tt,null),e(Tt,Lk),T(os,Tt,null),e(Tt,xk),T(ns,Tt,null),f(o,pm,u),f(o,Ro,u),e(Ro,ss),e(ss,wd),T(ma,wd,null),e(Ro,Fk),e(Ro,kd),e(kd,Mk),f(o,fm,u),f(o,lt,u),T(ha,lt,null),e(lt,Ek),e(lt,bd),e(bd,qk),e(lt,zk),e(lt,pa),e(pa,jk),e(pa,fi),e(fi,Ck),e(pa,Ok),e(lt,Pk),e(lt,fa),e(fa,Nk),e(fa,ga),e(ga,Ak),e(fa,Ik),e(lt,Dk),T(rs,lt,null),e(lt,Sk),e(lt,$t),T(ua,$t,null),e($t,Bk),e($t,Vo),e(Vo,Wk),e(Vo,gi),e(gi,Qk),e(Vo,Uk),e(Vo,vd),e(vd,Hk),e(Vo,Kk),e($t,Rk),T(as,$t,null),e($t,Vk),T(is,$t,null),e($t,Gk),T(ls,$t,null),f(o,gm,u),f(o,Go,u),e(Go,ds),e(ds,yd),T(_a,yd,null),e(Go,Jk),e(Go,Td),e(Td,Yk),f(o,um,u),f(o,dt,u),T(wa,dt,null),e(dt,Xk),e(dt,$d),e($d,Zk),e(dt,eb),e(dt,ka),e(ka,tb),e(ka,ui),e(ui,ob),e(ka,nb),e(dt,sb),e(dt,ba),e(ba,rb),e(ba,va),e(va,ab),e(ba,ib),e(dt,lb),T(cs,dt,null),e(dt,db),e(dt,Lt),T(ya,Lt,null),e(Lt,cb),e(Lt,Jo),e(Jo,mb),e(Jo,_i),e(_i,hb),e(Jo,pb),e(Jo,Ld),e(Ld,fb),e(Jo,gb),e(Lt,ub),T(ms,Lt,null),e(Lt,_b),T(hs,Lt,null),e(Lt,wb),T(ps,Lt,null),f(o,_m,u),f(o,Yo,u),e(Yo,fs),e(fs,xd),T(Ta,xd,null),e(Yo,kb),e(Yo,Fd),e(Fd,bb),f(o,wm,u),f(o,ct,u),T($a,ct,null),e(ct,vb),e(ct,Md),e(Md,yb),e(ct,Tb),e(ct,La),e(La,$b),e(La,wi),e(wi,Lb),e(La,xb),e(ct,Fb),e(ct,xa),e(xa,Mb),e(xa,Fa),e(Fa,Eb),e(xa,qb),e(ct,zb),T(gs,ct,null),e(ct,jb),e(ct,jt),T(Ma,jt,null),e(jt,Cb),e(jt,Xo),e(Xo,Ob),e(Xo,ki),e(ki,Pb),e(Xo,Nb),e(Xo,Ed),e(Ed,Ab),e(Xo,Ib),e(jt,Db),T(us,jt,null),e(jt,Sb),T(_s,jt,null),km=!0},p(o,[u]){const Ea={};u&2&&(Ea.$$scope={dirty:u,ctx:o}),cn.$set(Ea);const qd={};u&2&&(qd.$$scope={dirty:u,ctx:o}),hn.$set(qd);const zd={};u&2&&(zd.$$scope={dirty:u,ctx:o}),pn.$set(zd);const jd={};u&2&&(jd.$$scope={dirty:u,ctx:o}),wn.$set(jd);const qa={};u&2&&(qa.$$scope={dirty:u,ctx:o}),kn.$set(qa);const Cd={};u&2&&(Cd.$$scope={dirty:u,ctx:o}),Tn.$set(Cd);const Od={};u&2&&(Od.$$scope={dirty:u,ctx:o}),$n.$set(Od);const Pd={};u&2&&(Pd.$$scope={dirty:u,ctx:o}),xn.$set(Pd);const za={};u&2&&(za.$$scope={dirty:u,ctx:o}),Fn.$set(za);const Nd={};u&2&&(Nd.$$scope={dirty:u,ctx:o}),Mn.$set(Nd);const Ad={};u&2&&(Ad.$$scope={dirty:u,ctx:o}),qn.$set(Ad);const Id={};u&2&&(Id.$$scope={dirty:u,ctx:o}),zn.$set(Id);const Dd={};u&2&&(Dd.$$scope={dirty:u,ctx:o}),jn.$set(Dd);const Sd={};u&2&&(Sd.$$scope={dirty:u,ctx:o}),Cn.$set(Sd);const Bd={};u&2&&(Bd.$$scope={dirty:u,ctx:o}),On.$set(Bd);const Dt={};u&2&&(Dt.$$scope={dirty:u,ctx:o}),Nn.$set(Dt);const Wd={};u&2&&(Wd.$$scope={dirty:u,ctx:o}),An.$set(Wd);const Qd={};u&2&&(Qd.$$scope={dirty:u,ctx:o}),Dn.$set(Qd);const Ud={};u&2&&(Ud.$$scope={dirty:u,ctx:o}),Sn.$set(Ud);const Zo={};u&2&&(Zo.$$scope={dirty:u,ctx:o}),Bn.$set(Zo);const Hd={};u&2&&(Hd.$$scope={dirty:u,ctx:o}),Qn.$set(Hd);const Kd={};u&2&&(Kd.$$scope={dirty:u,ctx:o}),Un.$set(Kd);const ja={};u&2&&(ja.$$scope={dirty:u,ctx:o}),Kn.$set(ja);const Rd={};u&2&&(Rd.$$scope={dirty:u,ctx:o}),Rn.$set(Rd);const Vd={};u&2&&(Vd.$$scope={dirty:u,ctx:o}),Gn.$set(Vd);const Gd={};u&2&&(Gd.$$scope={dirty:u,ctx:o}),Jn.$set(Gd);const Ze={};u&2&&(Ze.$$scope={dirty:u,ctx:o}),Yn.$set(Ze);const Jd={};u&2&&(Jd.$$scope={dirty:u,ctx:o}),Xn.$set(Jd);const Yd={};u&2&&(Yd.$$scope={dirty:u,ctx:o}),es.$set(Yd);const Xd={};u&2&&(Xd.$$scope={dirty:u,ctx:o}),ts.$set(Xd);const Zd={};u&2&&(Zd.$$scope={dirty:u,ctx:o}),os.$set(Zd);const en={};u&2&&(en.$$scope={dirty:u,ctx:o}),ns.$set(en);const ec={};u&2&&(ec.$$scope={dirty:u,ctx:o}),rs.$set(ec);const tn={};u&2&&(tn.$$scope={dirty:u,ctx:o}),as.$set(tn);const tc={};u&2&&(tc.$$scope={dirty:u,ctx:o}),is.$set(tc);const oc={};u&2&&(oc.$$scope={dirty:u,ctx:o}),ls.$set(oc);const Ca={};u&2&&(Ca.$$scope={dirty:u,ctx:o}),cs.$set(Ca);const nc={};u&2&&(nc.$$scope={dirty:u,ctx:o}),ms.$set(nc);const sc={};u&2&&(sc.$$scope={dirty:u,ctx:o}),hs.$set(sc);const Oa={};u&2&&(Oa.$$scope={dirty:u,ctx:o}),ps.$set(Oa);const rc={};u&2&&(rc.$$scope={dirty:u,ctx:o}),gs.$set(rc);const Mt={};u&2&&(Mt.$$scope={dirty:u,ctx:o}),us.$set(Mt);const Pa={};u&2&&(Pa.$$scope={dirty:u,ctx:o}),_s.$set(Pa)},i(o){km||($(l.$$.fragment,o),$(F.$$.fragment,o),$(E.$$.fragment,o),$(Ts.$$.fragment,o),$($s.$$.fragment,o),$(Ls.$$.fragment,o),$(xs.$$.fragment,o),$(cn.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(hn.$$.fragment,o),$(pn.$$.fragment,o),$(js.$$.fragment,o),$(Os.$$.fragment,o),$(Ps.$$.fragment,o),$(Ns.$$.fragment,o),$(Is.$$.fragment,o),$(Ds.$$.fragment,o),$(wn.$$.fragment,o),$(kn.$$.fragment,o),$(Qs.$$.fragment,o),$(Us.$$.fragment,o),$(Hs.$$.fragment,o),$(Ks.$$.fragment,o),$(Rs.$$.fragment,o),$(Vs.$$.fragment,o),$(Gs.$$.fragment,o),$(Js.$$.fragment,o),$(Ys.$$.fragment,o),$(Xs.$$.fragment,o),$(Zs.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(hr.$$.fragment,o),$(Tn.$$.fragment,o),$($n.$$.fragment,o),$(pr.$$.fragment,o),$(fr.$$.fragment,o),$(kr.$$.fragment,o),$(xn.$$.fragment,o),$(Fn.$$.fragment,o),$(Mn.$$.fragment,o),$(br.$$.fragment,o),$(vr.$$.fragment,o),$(Lr.$$.fragment,o),$(qn.$$.fragment,o),$(zn.$$.fragment,o),$(jn.$$.fragment,o),$(Cn.$$.fragment,o),$(On.$$.fragment,o),$(xr.$$.fragment,o),$(Fr.$$.fragment,o),$(zr.$$.fragment,o),$(Nn.$$.fragment,o),$(An.$$.fragment,o),$(jr.$$.fragment,o),$(Cr.$$.fragment,o),$(Ar.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(Bn.$$.fragment,o),$(Ir.$$.fragment,o),$(Dr.$$.fragment,o),$(Qr.$$.fragment,o),$(Qn.$$.fragment,o),$(Un.$$.fragment,o),$(Ur.$$.fragment,o),$(Hr.$$.fragment,o),$(Kn.$$.fragment,o),$(Yr.$$.fragment,o),$(Rn.$$.fragment,o),$(Xr.$$.fragment,o),$(Zr.$$.fragment,o),$(Gn.$$.fragment,o),$(sa.$$.fragment,o),$(Jn.$$.fragment,o),$(Yn.$$.fragment,o),$(Xn.$$.fragment,o),$(ra.$$.fragment,o),$(aa.$$.fragment,o),$(es.$$.fragment,o),$(ca.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(ma.$$.fragment,o),$(ha.$$.fragment,o),$(rs.$$.fragment,o),$(ua.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(_a.$$.fragment,o),$(wa.$$.fragment,o),$(cs.$$.fragment,o),$(ya.$$.fragment,o),$(ms.$$.fragment,o),$(hs.$$.fragment,o),$(ps.$$.fragment,o),$(Ta.$$.fragment,o),$($a.$$.fragment,o),$(gs.$$.fragment,o),$(Ma.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),km=!0)},o(o){L(l.$$.fragment,o),L(F.$$.fragment,o),L(E.$$.fragment,o),L(Ts.$$.fragment,o),L($s.$$.fragment,o),L(Ls.$$.fragment,o),L(xs.$$.fragment,o),L(cn.$$.fragment,o),L(Ms.$$.fragment,o),L(Es.$$.fragment,o),L(hn.$$.fragment,o),L(pn.$$.fragment,o),L(js.$$.fragment,o),L(Os.$$.fragment,o),L(Ps.$$.fragment,o),L(Ns.$$.fragment,o),L(Is.$$.fragment,o),L(Ds.$$.fragment,o),L(wn.$$.fragment,o),L(kn.$$.fragment,o),L(Qs.$$.fragment,o),L(Us.$$.fragment,o),L(Hs.$$.fragment,o),L(Ks.$$.fragment,o),L(Rs.$$.fragment,o),L(Vs.$$.fragment,o),L(Gs.$$.fragment,o),L(Js.$$.fragment,o),L(Ys.$$.fragment,o),L(Xs.$$.fragment,o),L(Zs.$$.fragment,o),L(er.$$.fragment,o),L(tr.$$.fragment,o),L(or.$$.fragment,o),L(nr.$$.fragment,o),L(sr.$$.fragment,o),L(rr.$$.fragment,o),L(ar.$$.fragment,o),L(hr.$$.fragment,o),L(Tn.$$.fragment,o),L($n.$$.fragment,o),L(pr.$$.fragment,o),L(fr.$$.fragment,o),L(kr.$$.fragment,o),L(xn.$$.fragment,o),L(Fn.$$.fragment,o),L(Mn.$$.fragment,o),L(br.$$.fragment,o),L(vr.$$.fragment,o),L(Lr.$$.fragment,o),L(qn.$$.fragment,o),L(zn.$$.fragment,o),L(jn.$$.fragment,o),L(Cn.$$.fragment,o),L(On.$$.fragment,o),L(xr.$$.fragment,o),L(Fr.$$.fragment,o),L(zr.$$.fragment,o),L(Nn.$$.fragment,o),L(An.$$.fragment,o),L(jr.$$.fragment,o),L(Cr.$$.fragment,o),L(Ar.$$.fragment,o),L(Dn.$$.fragment,o),L(Sn.$$.fragment,o),L(Bn.$$.fragment,o),L(Ir.$$.fragment,o),L(Dr.$$.fragment,o),L(Qr.$$.fragment,o),L(Qn.$$.fragment,o),L(Un.$$.fragment,o),L(Ur.$$.fragment,o),L(Hr.$$.fragment,o),L(Kn.$$.fragment,o),L(Yr.$$.fragment,o),L(Rn.$$.fragment,o),L(Xr.$$.fragment,o),L(Zr.$$.fragment,o),L(Gn.$$.fragment,o),L(sa.$$.fragment,o),L(Jn.$$.fragment,o),L(Yn.$$.fragment,o),L(Xn.$$.fragment,o),L(ra.$$.fragment,o),L(aa.$$.fragment,o),L(es.$$.fragment,o),L(ca.$$.fragment,o),L(ts.$$.fragment,o),L(os.$$.fragment,o),L(ns.$$.fragment,o),L(ma.$$.fragment,o),L(ha.$$.fragment,o),L(rs.$$.fragment,o),L(ua.$$.fragment,o),L(as.$$.fragment,o),L(is.$$.fragment,o),L(ls.$$.fragment,o),L(_a.$$.fragment,o),L(wa.$$.fragment,o),L(cs.$$.fragment,o),L(ya.$$.fragment,o),L(ms.$$.fragment,o),L(hs.$$.fragment,o),L(ps.$$.fragment,o),L(Ta.$$.fragment,o),L($a.$$.fragment,o),L(gs.$$.fragment,o),L(Ma.$$.fragment,o),L(us.$$.fragment,o),L(_s.$$.fragment,o),km=!1},d(o){t(d),o&&t(k),o&&t(h),x(l),o&&t(Z),o&&t(A),x(F),o&&t(ge),o&&t(S),o&&t(ue),o&&t(W),o&&t(_e),o&&t(Q),o&&t(re),o&&t(j),o&&t(we),o&&t(U),o&&t(ke),o&&t(ae),o&&t(N),o&&t(le),x(E),o&&t(Se),o&&t(M),o&&t(dc),o&&t(St),o&&t(hc),o&&t(Bt),o&&t(pc),o&&t(sn),o&&t(fc),o&&t(rn),o&&t(gc),o&&t(bt),o&&t($c),o&&t(an),o&&t(Lc),o&&t(to),x(Ts),o&&t(xc),o&&t(oo),o&&t(Fc),x($s,o),o&&t(Mc),o&&t(no),x(Ls),o&&t(Ec),o&&t(ft),x(xs),x(cn),o&&t(qc),o&&t(io),x(Ms),o&&t(zc),o&&t(Oe),x(Es),x(hn),x(pn),x(js),x(Os),x(Ps),x(Ns),o&&t(jc),o&&t(lo),x(Is),o&&t(Cc),o&&t(Ye),x(Ds),x(wn),x(kn),x(Qs),o&&t(Oc),o&&t(co),x(Us),o&&t(Pc),o&&t(mo),x(Hs),o&&t(Nc),o&&t(ho),x(Ks),o&&t(Ac),o&&t(po),x(Rs),o&&t(Ic),o&&t(fo),x(Vs),o&&t(Dc),o&&t(go),x(Gs),o&&t(Sc),o&&t(uo),x(Js),o&&t(Bc),o&&t(_o),x(Ys),o&&t(Wc),o&&t(wo),x(Xs),o&&t(Qc),o&&t(ko),x(Zs),o&&t(Uc),o&&t(bo),x(er),o&&t(Hc),o&&t(vo),x(tr),o&&t(Kc),o&&t(yo),x(or),o&&t(Rc),o&&t(To),x(nr),o&&t(Vc),o&&t($o),x(sr),o&&t(Gc),o&&t(Lo),x(rr),o&&t(Jc),o&&t(st),x(ar),x(hr),x(Tn),x($n),o&&t(Yc),o&&t(Mo),x(pr),o&&t(Xc),o&&t(gt),x(fr),x(kr),x(xn),x(Fn),x(Mn),o&&t(Zc),o&&t(qo),x(br),o&&t(em),o&&t(ut),x(vr),x(Lr),x(qn),x(zn),x(jn),x(Cn),x(On),o&&t(tm),o&&t(jo),x(xr),o&&t(om),o&&t(_t),x(Fr),x(zr),x(Nn),x(An),o&&t(nm),o&&t(Oo),x(jr),o&&t(sm),o&&t(wt),x(Cr),x(Ar),x(Dn),x(Sn),x(Bn),o&&t(rm),o&&t(No),x(Ir),o&&t(am),o&&t(kt),x(Dr),x(Qr),x(Qn),x(Un),o&&t(im),o&&t(Do),x(Ur),o&&t(lm),o&&t(Xe),x(Hr),x(Kn),x(Yr),x(Rn),o&&t(dm),o&&t(Wo),x(Xr),o&&t(cm),o&&t(at),x(Zr),x(Gn),x(sa),x(Jn),x(Yn),x(Xn),o&&t(mm),o&&t(Uo),x(ra),o&&t(hm),o&&t(it),x(aa),x(es),x(ca),x(ts),x(os),x(ns),o&&t(pm),o&&t(Ro),x(ma),o&&t(fm),o&&t(lt),x(ha),x(rs),x(ua),x(as),x(is),x(ls),o&&t(gm),o&&t(Go),x(_a),o&&t(um),o&&t(dt),x(wa),x(cs),x(ya),x(ms),x(hs),x(ps),o&&t(_m),o&&t(Yo),x(Ta),o&&t(wm),o&&t(ct),x($a),x(gs),x(Ma),x(us),x(_s)}}}const S1={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function B1(q){return GT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class V1 extends HT{constructor(d){super();KT(this,d,B1,D1,RT,{})}}export{V1 as default,S1 as metadata};
