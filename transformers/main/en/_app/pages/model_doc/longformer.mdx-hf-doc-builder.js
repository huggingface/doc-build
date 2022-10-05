import{S as $T,i as LT,s as xT,e as r,k as c,w as v,t as n,Y as tn,M as FT,c as a,d as t,m,a as i,x as y,h as s,Z as on,b as u,G as e,g as f,y as T,q as $,o as L,B as x,v as MT,L as He}from"../../chunks/vendor-hf-doc-builder.js";import{T as nt}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ae}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ue}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ET(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerConfig, LongformerModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function zT(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=r("p"),k=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function qT(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("When used with "),h=r("code"),_=n("is_split_into_words=True"),b=n(", this tokenizer will add a space before each word (even the first one).")},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"When used with "),h=a(p,"CODE",{});var q=i(h);_=s(q,"is_split_into_words=True"),q.forEach(t),b=s(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function jT(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function CT(z){let l,k,h,_,b;return _=new Ae({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){l=r("p"),k=n("Examples:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Examples:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function OT(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function PT(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, LongformerForMaskedLM

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)`}}),{c(){l=r("p"),k=n("Mask filling example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Mask filling example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function NT(z){let l,k;return l=new Ae({props:{code:`TXT = (
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
[<span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;skinny&#x27;</span>, <span class="hljs-string">&#x27;thin&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;vegetarian&#x27;</span>]`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function AT(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function IT(z){let l,k,h,_,b;return _=new Ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of single-label classification:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example of single-label classification:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function DT(z){let l,k;return l=new Ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = LongformerForSequenceClassification.from_pretrained("jpwahle/longformer-base-plagiarism-detection", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.44</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function ST(z){let l,k,h,_,b;return _=new Ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of multi-label classification:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example of multi-label classification:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function BT(z){let l,k;return l=new Ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function WT(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function QT(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function UT(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function HT(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
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
[<span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function KT(z){let l,k;return l=new Ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.63</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function RT(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function VT(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
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
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){l=r("p"),k=n("Examples:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Examples:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function GT(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,j,O,_e,U,te,xe,K,Fe,Me,C,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(oe),A=a(oe,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),oe.forEach(t),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var et=i(G);Te=s(et,"fit()"),et.forEach(t),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);te=s(We,"input_ids"),We.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var tt=i(K);Fe=s(tt,"model(input_ids)"),tt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),se=m(B),I=a(B,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Ne=i(Y);qe=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Ce.forEach(t),B.forEach(t),Z=m(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,U),e(U,te),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,he),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function JT(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function XT(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,j,O,_e,U,te,xe,K,Fe,Me,C,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(oe),A=a(oe,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),oe.forEach(t),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var et=i(G);Te=s(et,"fit()"),et.forEach(t),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);te=s(We,"input_ids"),We.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var tt=i(K);Fe=s(tt,"model(input_ids)"),tt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),se=m(B),I=a(B,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Ne=i(Y);qe=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Ce.forEach(t),B.forEach(t),Z=m(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,U),e(U,te),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,he),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function YT(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function ZT(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function e1(z){let l,k;return l=new Ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.44</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function t1(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,j,O,_e,U,te,xe,K,Fe,Me,C,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(oe),A=a(oe,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),oe.forEach(t),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var et=i(G);Te=s(et,"fit()"),et.forEach(t),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);te=s(We,"input_ids"),We.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var tt=i(K);Fe=s(tt,"model(input_ids)"),tt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),se=m(B),I=a(B,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Ne=i(Y);qe=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Ce.forEach(t),B.forEach(t),Z=m(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,U),e(U,te),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,he),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function o1(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function n1(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function s1(z){let l,k;return l=new Ae({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.96</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function r1(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,j,O,_e,U,te,xe,K,Fe,Me,C,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(oe),A=a(oe,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),oe.forEach(t),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var et=i(G);Te=s(et,"fit()"),et.forEach(t),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);te=s(We,"input_ids"),We.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var tt=i(K);Fe=s(tt,"model(input_ids)"),tt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),se=m(B),I=a(B,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Ne=i(Y);qe=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Ce.forEach(t),B.forEach(t),Z=m(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,U),e(U,te),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,he),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function a1(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function i1(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function l1(z){let l,k;return l=new Ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function d1(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,j,O,_e,U,te,xe,K,Fe,Me,C,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(oe),A=a(oe,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),oe.forEach(t),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var et=i(G);Te=s(et,"fit()"),et.forEach(t),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);te=s(We,"input_ids"),We.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var tt=i(K);Fe=s(tt,"model(input_ids)"),tt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),se=m(B),I=a(B,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Ne=i(Y);qe=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Ce.forEach(t),B.forEach(t),Z=m(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,U),e(U,te),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,he),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function c1(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function m1(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function h1(z){let l,k;return l=new Ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function p1(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,j,O,_e,U,te,xe,K,Fe,Me,C,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),q=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),j=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),te=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),C=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),ze=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),je=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),d=m(w),p=a(w,"UL",{});var oe=i(p);q=a(oe,"LI",{});var Re=i(q);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(t),pe=m(oe),A=a(oe,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),oe.forEach(t),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(t),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var et=i(G);Te=s(et,"fit()"),et.forEach(t),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(t),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(t),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ne=m(w),j=a(w,"UL",{});var B=i(j);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);te=s(We,"input_ids"),We.forEach(t),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var tt=i(K);Fe=s(tt,"model(input_ids)"),tt.forEach(t),R.forEach(t),Me=m(B),C=a(B,"LI",{});var V=i(C);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),ze=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),V.forEach(t),se=m(B),I=a(B,"LI",{});var Ce=i(I);ce=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(Ce,"CODE",{});var Ne=i(Y);qe=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Ce.forEach(t),B.forEach(t),Z=m(w),P=a(w,"P",{});var ae=i(P);je=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(t),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,q),e(q,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,j,E),e(j,O),e(O,_e),e(O,U),e(U,te),e(O,xe),e(O,K),e(K,Fe),e(j,Me),e(j,C),e(C,Ee),e(C,J),e(J,he),e(C,ze),e(C,X),e(X,we),e(j,se),e(j,I),e(I,ce),e(I,Y),e(Y,qe),f(w,Z,E),f(w,P,E),e(P,je),e(P,N),e(N,re),e(P,le)},d(w){w&&t(l),w&&t(d),w&&t(p),w&&t(ee),w&&t(F),w&&t(ne),w&&t(j),w&&t(Z),w&&t(P)}}}function f1(z){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var q=i(h);_=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&t(l)}}}function g1(z){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(t),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(h),x(_,d)}}}function u1(z){let l,k,h,_,b,d,p,q,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,j,O,_e,U,te,xe,K,Fe,Me,C,Ee,J,he,ze,X,we,se,I,ce,Y,qe,Z,P,je,N,re,le,w,E,Ke,oe,Re,Ie,M,Ve,De,et='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Se,Be,B='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',R,We,tt='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',V,Pe,Ge,Ce,Ne,ae,Je,Ni,Fh,Mh,ec,wT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',tc,Ai,Eh,zh,oc,It,qh,nc,kT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',sc,Ii,jh,Ch,rc,Dt,Oh,Di,Ph,Nh,Si,Ah,Ih,ac,nn,Bi,Dh,Sh,Wi,Bh,ic,sn,Wh,Ea,Qh,Uh,lc,wt,Hh,dc,bT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',cc,mc,vT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',hc,pc,yT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',fc,gc,TT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',uc,_c,rn,Kh,ks,Rh,Vh,wc,eo,an,Qi,bs,Gh,Ui,Jh,kc,to,za,Xh,Yh,qa,Zh,ep,bc,vs,vc,oo,ln,Hi,ys,tp,Ki,op,yc,ht,Ts,np,no,sp,ja,rp,ap,Ca,ip,lp,dp,so,cp,Oa,mp,hp,$s,pp,fp,gp,ro,up,Pa,_p,wp,Na,kp,bp,vp,dn,Tc,ao,cn,Ri,Ls,yp,Vi,Tp,$c,Oe,xs,$p,Gi,Lp,xp,Ji,Fp,Mp,mn,Ep,Fs,zp,Xi,qp,jp,Cp,hn,Op,Ms,Pp,Aa,Np,Ap,Ip,St,Es,Dp,Yi,Sp,Bp,zs,Ia,Wp,Zi,Qp,Up,Da,Hp,el,Kp,Rp,pn,qs,Vp,tl,Gp,Jp,fn,js,Xp,ol,Yp,Zp,gn,Cs,ef,Os,tf,nl,of,nf,Lc,io,un,sl,Ps,sf,rl,rf,xc,Nt,Ns,af,As,lf,al,df,cf,mf,_n,Sa,hf,pf,Ba,ff,gf,Fc,lo,wn,il,Is,uf,ll,_f,Mc,co,Ds,wf,dl,kf,Ec,mo,Ss,bf,cl,vf,zc,ho,Bs,yf,ml,Tf,qc,po,Ws,$f,hl,Lf,jc,fo,Qs,xf,pl,Ff,Cc,go,Us,Mf,fl,Ef,Oc,uo,Hs,zf,gl,qf,Pc,_o,Ks,jf,ul,Cf,Nc,wo,Rs,Of,_l,Pf,Ac,ko,Vs,Nf,wl,Af,Ic,bo,Gs,If,kl,Df,Dc,vo,Js,Sf,bl,Bf,Sc,yo,Xs,Wf,vl,Qf,Bc,To,Ys,Uf,yl,Hf,Wc,$o,kn,Tl,Zs,Kf,$l,Rf,Qc,ot,er,Vf,Ll,Gf,Jf,tr,Xf,Wa,Yf,Zf,eg,or,tg,nr,og,ng,sg,Lo,rg,Qa,ag,ig,sr,lg,dg,cg,rr,mg,xl,hg,pg,fg,xt,ar,gg,xo,ug,Ua,_g,wg,Fl,kg,bg,vg,bn,yg,vn,Uc,Fo,yn,Ml,ir,Tg,El,$g,Hc,pt,lr,Lg,dr,xg,zl,Fg,Mg,Eg,cr,zg,Ha,qg,jg,Cg,mr,Og,hr,Pg,Ng,Ag,ct,pr,Ig,Mo,Dg,Ka,Sg,Bg,ql,Wg,Qg,Ug,Tn,Hg,$n,Kg,jl,Rg,Vg,Ln,Kc,Eo,xn,Cl,fr,Gg,Ol,Jg,Rc,ft,gr,Xg,Pl,Yg,Zg,ur,eu,Ra,tu,ou,nu,_r,su,wr,ru,au,iu,st,kr,lu,zo,du,Va,cu,mu,Nl,hu,pu,fu,Fn,gu,Mn,uu,En,_u,zn,wu,qn,Vc,qo,jn,Al,br,ku,Il,bu,Gc,gt,vr,vu,Dl,yu,Tu,yr,$u,Ga,Lu,xu,Fu,Tr,Mu,$r,Eu,zu,qu,Ft,Lr,ju,jo,Cu,Ja,Ou,Pu,Sl,Nu,Au,Iu,Cn,Du,On,Jc,Co,Pn,Bl,xr,Su,Wl,Bu,Xc,ut,Fr,Wu,Ql,Qu,Uu,Mr,Hu,Xa,Ku,Ru,Vu,Er,Gu,zr,Ju,Xu,Yu,kt,qr,Zu,Oo,e_,Ya,t_,o_,Ul,n_,s_,r_,Nn,a_,An,i_,In,Yc,Po,Dn,Hl,jr,l_,Kl,d_,Zc,_t,Cr,c_,No,m_,Rl,h_,p_,Vl,f_,g_,u_,Or,__,Za,w_,k_,b_,Pr,v_,Nr,y_,T_,$_,Mt,Ar,L_,Ao,x_,ei,F_,M_,Gl,E_,z_,q_,Sn,j_,Bn,em,Io,Wn,Jl,Ir,C_,Xl,O_,tm,Xe,Dr,P_,Yl,N_,A_,Sr,I_,ti,D_,S_,B_,Br,W_,Wr,Q_,U_,H_,Qn,K_,Do,R_,oi,V_,G_,Qr,J_,X_,Y_,Ur,Z_,Zl,ew,tw,ow,Bt,Hr,nw,So,sw,ni,rw,aw,ed,iw,lw,dw,Un,om,Bo,Hn,td,Kr,cw,od,mw,nm,rt,Rr,hw,Vr,pw,nd,fw,gw,uw,Gr,_w,si,ww,kw,bw,Jr,vw,Xr,yw,Tw,$w,Kn,Lw,bt,Yr,xw,Wo,Fw,ri,Mw,Ew,sd,zw,qw,jw,Rn,Cw,Vn,Ow,Gn,sm,Qo,Jn,rd,Zr,Pw,ad,Nw,rm,at,ea,Aw,Uo,Iw,id,Dw,Sw,ld,Bw,Ww,Qw,ta,Uw,ai,Hw,Kw,Rw,oa,Vw,na,Gw,Jw,Xw,Xn,Yw,vt,sa,Zw,Ho,ek,ii,tk,ok,dd,nk,sk,rk,Yn,ak,Zn,ik,es,am,Ko,ts,cd,ra,lk,md,dk,im,it,aa,ck,hd,mk,hk,ia,pk,li,fk,gk,uk,la,_k,da,wk,kk,bk,os,vk,yt,ca,yk,Ro,Tk,di,$k,Lk,pd,xk,Fk,Mk,ns,Ek,ss,zk,rs,lm,Vo,as,fd,ma,qk,gd,jk,dm,lt,ha,Ck,ud,Ok,Pk,pa,Nk,ci,Ak,Ik,Dk,fa,Sk,ga,Bk,Wk,Qk,is,Uk,Tt,ua,Hk,Go,Kk,mi,Rk,Vk,_d,Gk,Jk,Xk,ls,Yk,ds,Zk,cs,cm,Jo,ms,wd,_a,eb,kd,tb,mm,dt,wa,ob,bd,nb,sb,ka,rb,hi,ab,ib,lb,ba,db,va,cb,mb,hb,hs,pb,Et,ya,fb,Xo,gb,pi,ub,_b,vd,wb,kb,bb,ps,vb,fs,hm;return d=new Ze({}),F=new Ze({}),E=new Ze({}),bs=new Ze({}),vs=new Ae({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),ys=new Ze({}),Ts=new D({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"onnx_export",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/configuration_longformer.py#L47"}}),dn=new Ue({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[ET]},$$scope:{ctx:z}}}),Ls=new Ze({}),xs=new D({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (Longformer tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L116"}}),mn=new Ue({props:{anchor:"transformers.LongformerTokenizer.example",$$slots:{default:[zT]},$$scope:{ctx:z}}}),hn=new nt({props:{$$slots:{default:[qT]},$$scope:{ctx:z}}}),Es=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LongformerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LongformerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L353",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qs=new D({props:{name:"convert_tokens_to_string",anchor:"transformers.LongformerTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L318"}}),js=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LongformerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LongformerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L405",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cs=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.LongformerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LongformerTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LongformerTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L378",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ps=new Ze({}),Ns=new D({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer_fast.py#L85"}}),Is=new Ze({}),Ds=new D({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L57"}}),Ss=new D({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L100"}}),Bs=new D({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L148"}}),Ws=new D({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L194"}}),Qs=new D({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L243"}}),Us=new D({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L289"}}),Hs=new D({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L337"}}),Ks=new D({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),Rs=new D({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),Vs=new D({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),Gs=new D({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),Js=new D({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),Xs=new D({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),Ys=new D({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),Zs=new Ze({}),er=new D({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1537"}}),ar=new D({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),bn=new nt({props:{$$slots:{default:[jT]},$$scope:{ctx:z}}}),vn=new Ue({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[CT]},$$scope:{ctx:z}}}),ir=new Ze({}),lr=new D({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1772"}}),pr=new D({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Tn=new nt({props:{$$slots:{default:[OT]},$$scope:{ctx:z}}}),$n=new Ue({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[PT]},$$scope:{ctx:z}}}),Ln=new Ue({props:{anchor:"transformers.LongformerForMaskedLM.forward.example-2",$$slots:{default:[NT]},$$scope:{ctx:z}}}),fr=new Ze({}),gr=new D({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L1885"}}),kr=new D({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Fn=new nt({props:{$$slots:{default:[AT]},$$scope:{ctx:z}}}),Mn=new Ue({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[IT]},$$scope:{ctx:z}}}),En=new Ue({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[DT]},$$scope:{ctx:z}}}),zn=new Ue({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[ST]},$$scope:{ctx:z}}}),qn=new Ue({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[BT]},$$scope:{ctx:z}}}),br=new Ze({}),vr=new D({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2244"}}),Lr=new D({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),Cn=new nt({props:{$$slots:{default:[WT]},$$scope:{ctx:z}}}),On=new Ue({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[QT]},$$scope:{ctx:z}}}),xr=new Ze({}),Fr=new D({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2154"}}),qr=new D({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Nn=new nt({props:{$$slots:{default:[UT]},$$scope:{ctx:z}}}),An=new Ue({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[HT]},$$scope:{ctx:z}}}),In=new Ue({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[KT]},$$scope:{ctx:z}}}),jr=new Ze({}),Cr=new D({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2014"}}),Ar=new D({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Sn=new nt({props:{$$slots:{default:[RT]},$$scope:{ctx:z}}}),Bn=new Ue({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[VT]},$$scope:{ctx:z}}}),Ir=new Ze({}),Dr=new D({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2030"}}),Qn=new nt({props:{$$slots:{default:[GT]},$$scope:{ctx:z}}}),Hr=new D({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2052"}}),Un=new nt({props:{$$slots:{default:[JT]},$$scope:{ctx:z}}}),Kr=new Ze({}),Rr=new D({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2103"}}),Kn=new nt({props:{$$slots:{default:[XT]},$$scope:{ctx:z}}}),Yr=new D({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Rn=new nt({props:{$$slots:{default:[YT]},$$scope:{ctx:z}}}),Vn=new Ue({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[ZT]},$$scope:{ctx:z}}}),Gn=new Ue({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[e1]},$$scope:{ctx:z}}}),Zr=new Ze({}),ea=new D({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2200"}}),Xn=new nt({props:{$$slots:{default:[t1]},$$scope:{ctx:z}}}),sa=new D({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Yn=new nt({props:{$$slots:{default:[o1]},$$scope:{ctx:z}}}),Zn=new Ue({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[n1]},$$scope:{ctx:z}}}),es=new Ue({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[s1]},$$scope:{ctx:z}}}),ra=new Ze({}),aa=new D({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2369"}}),os=new nt({props:{$$slots:{default:[r1]},$$scope:{ctx:z}}}),ca=new D({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ns=new nt({props:{$$slots:{default:[a1]},$$scope:{ctx:z}}}),ss=new Ue({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[i1]},$$scope:{ctx:z}}}),rs=new Ue({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[l1]},$$scope:{ctx:z}}}),ma=new Ze({}),ha=new D({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2621"}}),is=new nt({props:{$$slots:{default:[d1]},$$scope:{ctx:z}}}),ua=new D({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ls=new nt({props:{$$slots:{default:[c1]},$$scope:{ctx:z}}}),ds=new Ue({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[m1]},$$scope:{ctx:z}}}),cs=new Ue({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[h1]},$$scope:{ctx:z}}}),_a=new Ze({}),wa=new D({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2485"}}),hs=new nt({props:{$$slots:{default:[p1]},$$scope:{ctx:z}}}),ya=new D({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),ps=new nt({props:{$$slots:{default:[f1]},$$scope:{ctx:z}}}),fs=new Ue({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[g1]},$$scope:{ctx:z}}}),{c(){l=r("meta"),k=c(),h=r("h1"),_=r("a"),b=r("span"),v(d.$$.fragment),p=c(),q=r("span"),ke=n("Longformer"),pe=c(),A=r("h2"),ie=r("a"),ee=r("span"),v(F.$$.fragment),be=c(),H=r("span"),ve=n("Overview"),fe=c(),S=r("p"),ye=n("The Longformer model was presented in "),de=r("a"),G=n("Longformer: The Long-Document Transformer"),Te=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),ge=c(),W=r("p"),$e=n("The abstract from the paper is the following:"),ue=c(),Q=r("p"),me=r("em"),Le=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ne=c(),j=r("p"),O=n("Tips:"),_e=c(),U=r("ul"),te=r("li"),xe=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),K=r("code"),Fe=n("token_type_ids"),Me=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),C=r("code"),Ee=n("tokenizer.sep_token"),J=n(` (or
`),he=r("code"),ze=n("</s>"),X=n(")."),we=c(),se=r("p"),I=n("This model was contributed by "),ce=r("a"),Y=n("beltagy"),qe=n(". The Authors\u2019 code can be found "),Z=r("a"),P=n("here"),je=n("."),N=c(),re=r("h2"),le=r("a"),w=r("span"),v(E.$$.fragment),Ke=c(),oe=r("span"),Re=n("Longformer Self Attention"),Ie=c(),M=r("p"),Ve=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),De=new tn,Se=n(` previous tokens and
`),Be=new tn,R=n(" succeding tokens with "),We=new tn,V=n(` being the window length as defined in
`),Pe=r("code"),Ge=n("config.attention_window"),Ce=n(". Note that "),Ne=r("code"),ae=n("config.attention_window"),Je=n(" can be of type "),Ni=r("code"),Fh=n("List"),Mh=n(` to define a
different `),ec=new tn,tc=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Ai=r("code"),Eh=n("BertSelfAttention"),zh=n("."),oc=c(),It=r("p"),qh=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),nc=new tn,sc=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Ii=r("em"),jh=n("symmetric"),Ch=n("."),rc=c(),Dt=r("p"),Oh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Di=r("code"),Ph=n("global_attention_mask"),Nh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),Si=r("code"),Ah=n("global_attention_mask"),Ih=n(":"),ac=c(),nn=r("ul"),Bi=r("li"),Dh=n("0: the token attends \u201Clocally\u201D,"),Sh=c(),Wi=r("li"),Bh=n("1: the token attends \u201Cglobally\u201D."),ic=c(),sn=r("p"),Wh=n("For more information please also refer to "),Ea=r("a"),Qh=n("forward()"),Uh=n(" method."),lc=c(),wt=r("p"),Hh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),dc=new tn,cc=n(` to
`),mc=new tn,hc=n(", with "),pc=new tn,fc=n(" being the sequence length and "),gc=new tn,uc=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),_c=c(),rn=r("p"),Kh=n("For more information, please refer to the official "),ks=r("a"),Rh=n("paper"),Vh=n("."),wc=c(),eo=r("h2"),an=r("a"),Qi=r("span"),v(bs.$$.fragment),Gh=c(),Ui=r("span"),Jh=n("Training"),kc=c(),to=r("p"),za=r("a"),Xh=n("LongformerForMaskedLM"),Yh=n(" is trained the exact same way "),qa=r("a"),Zh=n("RobertaForMaskedLM"),ep=n(` is
trained and should be used as follows:`),bc=c(),v(vs.$$.fragment),vc=c(),oo=r("h2"),ln=r("a"),Hi=r("span"),v(ys.$$.fragment),tp=c(),Ki=r("span"),op=n("LongformerConfig"),yc=c(),ht=r("div"),v(Ts.$$.fragment),np=c(),no=r("p"),sp=n("This is the configuration class to store the configuration of a "),ja=r("a"),rp=n("LongformerModel"),ap=n(" or a "),Ca=r("a"),ip=n("TFLongformerModel"),lp=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),dp=c(),so=r("p"),cp=n("This is the configuration class to store the configuration of a "),Oa=r("a"),mp=n("LongformerModel"),hp=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),$s=r("a"),pp=n("allenai/longformer-base-4096"),fp=n(` architecture with a sequence
length 4,096.`),gp=c(),ro=r("p"),up=n("The "),Pa=r("a"),_p=n("LongformerConfig"),wp=n(" class directly inherits "),Na=r("a"),kp=n("RobertaConfig"),bp=n(`. It reuses the same defaults. Please check the
parent class for more information.`),vp=c(),v(dn.$$.fragment),Tc=c(),ao=r("h2"),cn=r("a"),Ri=r("span"),v(Ls.$$.fragment),yp=c(),Vi=r("span"),Tp=n("LongformerTokenizer"),$c=c(),Oe=r("div"),v(xs.$$.fragment),$p=c(),Gi=r("p"),Lp=n("Constructs a Longformer tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),xp=c(),Ji=r("p"),Fp=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Mp=c(),v(mn.$$.fragment),Ep=c(),Fs=r("p"),zp=n("You can get around that behavior by passing "),Xi=r("code"),qp=n("add_prefix_space=True"),jp=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Cp=c(),v(hn.$$.fragment),Op=c(),Ms=r("p"),Pp=n("This tokenizer inherits from "),Aa=r("a"),Np=n("PreTrainedTokenizer"),Ap=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ip=c(),St=r("div"),v(Es.$$.fragment),Dp=c(),Yi=r("p"),Sp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Longformer sequence has the following format:`),Bp=c(),zs=r("ul"),Ia=r("li"),Wp=n("single sequence: "),Zi=r("code"),Qp=n("<s> X </s>"),Up=c(),Da=r("li"),Hp=n("pair of sequences: "),el=r("code"),Kp=n("<s> A </s></s> B </s>"),Rp=c(),pn=r("div"),v(qs.$$.fragment),Vp=c(),tl=r("p"),Gp=n("Converts a sequence of tokens (string) in a single string."),Jp=c(),fn=r("div"),v(js.$$.fragment),Xp=c(),ol=r("p"),Yp=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. Longformer does
not make use of token type ids, therefore a list of zeros is returned.`),Zp=c(),gn=r("div"),v(Cs.$$.fragment),ef=c(),Os=r("p"),tf=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),nl=r("code"),of=n("prepare_for_model"),nf=n(" method."),Lc=c(),io=r("h2"),un=r("a"),sl=r("span"),v(Ps.$$.fragment),sf=c(),rl=r("span"),rf=n("LongformerTokenizerFast"),xc=c(),Nt=r("div"),v(Ns.$$.fragment),af=c(),As=r("p"),lf=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),al=r("em"),df=n("tokenizers"),cf=n(" library)."),mf=c(),_n=r("p"),Sa=r("a"),hf=n("LongformerTokenizerFast"),pf=n(" is identical to "),Ba=r("a"),ff=n("RobertaTokenizerFast"),gf=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Fc=c(),lo=r("h2"),wn=r("a"),il=r("span"),v(Is.$$.fragment),uf=c(),ll=r("span"),_f=n("Longformer specific outputs"),Mc=c(),co=r("div"),v(Ds.$$.fragment),wf=c(),dl=r("p"),kf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Ec=c(),mo=r("div"),v(Ss.$$.fragment),bf=c(),cl=r("p"),vf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),zc=c(),ho=r("div"),v(Bs.$$.fragment),yf=c(),ml=r("p"),Tf=n("Base class for masked language models outputs."),qc=c(),po=r("div"),v(Ws.$$.fragment),$f=c(),hl=r("p"),Lf=n("Base class for outputs of question answering Longformer models."),jc=c(),fo=r("div"),v(Qs.$$.fragment),xf=c(),pl=r("p"),Ff=n("Base class for outputs of sentence classification models."),Cc=c(),go=r("div"),v(Us.$$.fragment),Mf=c(),fl=r("p"),Ef=n("Base class for outputs of multiple choice Longformer models."),Oc=c(),uo=r("div"),v(Hs.$$.fragment),zf=c(),gl=r("p"),qf=n("Base class for outputs of token classification models."),Pc=c(),_o=r("div"),v(Ks.$$.fragment),jf=c(),ul=r("p"),Cf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Nc=c(),wo=r("div"),v(Rs.$$.fragment),Of=c(),_l=r("p"),Pf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Ac=c(),ko=r("div"),v(Vs.$$.fragment),Nf=c(),wl=r("p"),Af=n("Base class for masked language models outputs."),Ic=c(),bo=r("div"),v(Gs.$$.fragment),If=c(),kl=r("p"),Df=n("Base class for outputs of question answering Longformer models."),Dc=c(),vo=r("div"),v(Js.$$.fragment),Sf=c(),bl=r("p"),Bf=n("Base class for outputs of sentence classification models."),Sc=c(),yo=r("div"),v(Xs.$$.fragment),Wf=c(),vl=r("p"),Qf=n("Base class for outputs of multiple choice models."),Bc=c(),To=r("div"),v(Ys.$$.fragment),Uf=c(),yl=r("p"),Hf=n("Base class for outputs of token classification models."),Wc=c(),$o=r("h2"),kn=r("a"),Tl=r("span"),v(Zs.$$.fragment),Kf=c(),$l=r("span"),Rf=n("LongformerModel"),Qc=c(),ot=r("div"),v(er.$$.fragment),Vf=c(),Ll=r("p"),Gf=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Jf=c(),tr=r("p"),Xf=n("This model inherits from "),Wa=r("a"),Yf=n("PreTrainedModel"),Zf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg=c(),or=r("p"),tg=n("This model is also a PyTorch "),nr=r("a"),og=n("torch.nn.Module"),ng=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sg=c(),Lo=r("p"),rg=n("This class copied code from "),Qa=r("a"),ag=n("RobertaModel"),ig=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),sr=r("a"),lg=n(`Longformer:
the Long-Document Transformer`),dg=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),cg=c(),rr=r("p"),mg=n("The self-attention module "),xl=r("code"),hg=n("LongformerSelfAttention"),pg=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),fg=c(),xt=r("div"),v(ar.$$.fragment),gg=c(),xo=r("p"),ug=n("The "),Ua=r("a"),_g=n("LongformerModel"),wg=n(" forward method, overrides the "),Fl=r("code"),kg=n("__call__"),bg=n(" special method."),vg=c(),v(bn.$$.fragment),yg=c(),v(vn.$$.fragment),Uc=c(),Fo=r("h2"),yn=r("a"),Ml=r("span"),v(ir.$$.fragment),Tg=c(),El=r("span"),$g=n("LongformerForMaskedLM"),Hc=c(),pt=r("div"),v(lr.$$.fragment),Lg=c(),dr=r("p"),xg=n("Longformer Model with a "),zl=r("code"),Fg=n("language modeling"),Mg=n(" head on top."),Eg=c(),cr=r("p"),zg=n("This model inherits from "),Ha=r("a"),qg=n("PreTrainedModel"),jg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cg=c(),mr=r("p"),Og=n("This model is also a PyTorch "),hr=r("a"),Pg=n("torch.nn.Module"),Ng=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ag=c(),ct=r("div"),v(pr.$$.fragment),Ig=c(),Mo=r("p"),Dg=n("The "),Ka=r("a"),Sg=n("LongformerForMaskedLM"),Bg=n(" forward method, overrides the "),ql=r("code"),Wg=n("__call__"),Qg=n(" special method."),Ug=c(),v(Tn.$$.fragment),Hg=c(),v($n.$$.fragment),Kg=c(),jl=r("p"),Rg=n("Let\u2019s try a very long input."),Vg=c(),v(Ln.$$.fragment),Kc=c(),Eo=r("h2"),xn=r("a"),Cl=r("span"),v(fr.$$.fragment),Gg=c(),Ol=r("span"),Jg=n("LongformerForSequenceClassification"),Rc=c(),ft=r("div"),v(gr.$$.fragment),Xg=c(),Pl=r("p"),Yg=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Zg=c(),ur=r("p"),eu=n("This model inherits from "),Ra=r("a"),tu=n("PreTrainedModel"),ou=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nu=c(),_r=r("p"),su=n("This model is also a PyTorch "),wr=r("a"),ru=n("torch.nn.Module"),au=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),iu=c(),st=r("div"),v(kr.$$.fragment),lu=c(),zo=r("p"),du=n("The "),Va=r("a"),cu=n("LongformerForSequenceClassification"),mu=n(" forward method, overrides the "),Nl=r("code"),hu=n("__call__"),pu=n(" special method."),fu=c(),v(Fn.$$.fragment),gu=c(),v(Mn.$$.fragment),uu=c(),v(En.$$.fragment),_u=c(),v(zn.$$.fragment),wu=c(),v(qn.$$.fragment),Vc=c(),qo=r("h2"),jn=r("a"),Al=r("span"),v(br.$$.fragment),ku=c(),Il=r("span"),bu=n("LongformerForMultipleChoice"),Gc=c(),gt=r("div"),v(vr.$$.fragment),vu=c(),Dl=r("p"),yu=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Tu=c(),yr=r("p"),$u=n("This model inherits from "),Ga=r("a"),Lu=n("PreTrainedModel"),xu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu=c(),Tr=r("p"),Mu=n("This model is also a PyTorch "),$r=r("a"),Eu=n("torch.nn.Module"),zu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qu=c(),Ft=r("div"),v(Lr.$$.fragment),ju=c(),jo=r("p"),Cu=n("The "),Ja=r("a"),Ou=n("LongformerForMultipleChoice"),Pu=n(" forward method, overrides the "),Sl=r("code"),Nu=n("__call__"),Au=n(" special method."),Iu=c(),v(Cn.$$.fragment),Du=c(),v(On.$$.fragment),Jc=c(),Co=r("h2"),Pn=r("a"),Bl=r("span"),v(xr.$$.fragment),Su=c(),Wl=r("span"),Bu=n("LongformerForTokenClassification"),Xc=c(),ut=r("div"),v(Fr.$$.fragment),Wu=c(),Ql=r("p"),Qu=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Uu=c(),Mr=r("p"),Hu=n("This model inherits from "),Xa=r("a"),Ku=n("PreTrainedModel"),Ru=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu=c(),Er=r("p"),Gu=n("This model is also a PyTorch "),zr=r("a"),Ju=n("torch.nn.Module"),Xu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yu=c(),kt=r("div"),v(qr.$$.fragment),Zu=c(),Oo=r("p"),e_=n("The "),Ya=r("a"),t_=n("LongformerForTokenClassification"),o_=n(" forward method, overrides the "),Ul=r("code"),n_=n("__call__"),s_=n(" special method."),r_=c(),v(Nn.$$.fragment),a_=c(),v(An.$$.fragment),i_=c(),v(In.$$.fragment),Yc=c(),Po=r("h2"),Dn=r("a"),Hl=r("span"),v(jr.$$.fragment),l_=c(),Kl=r("span"),d_=n("LongformerForQuestionAnswering"),Zc=c(),_t=r("div"),v(Cr.$$.fragment),c_=c(),No=r("p"),m_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),Rl=r("code"),h_=n("span start logits"),p_=n(" and "),Vl=r("code"),f_=n("span end logits"),g_=n(")."),u_=c(),Or=r("p"),__=n("This model inherits from "),Za=r("a"),w_=n("PreTrainedModel"),k_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),b_=c(),Pr=r("p"),v_=n("This model is also a PyTorch "),Nr=r("a"),y_=n("torch.nn.Module"),T_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$_=c(),Mt=r("div"),v(Ar.$$.fragment),L_=c(),Ao=r("p"),x_=n("The "),ei=r("a"),F_=n("LongformerForQuestionAnswering"),M_=n(" forward method, overrides the "),Gl=r("code"),E_=n("__call__"),z_=n(" special method."),q_=c(),v(Sn.$$.fragment),j_=c(),v(Bn.$$.fragment),em=c(),Io=r("h2"),Wn=r("a"),Jl=r("span"),v(Ir.$$.fragment),C_=c(),Xl=r("span"),O_=n("TFLongformerModel"),tm=c(),Xe=r("div"),v(Dr.$$.fragment),P_=c(),Yl=r("p"),N_=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),A_=c(),Sr=r("p"),I_=n("This model inherits from "),ti=r("a"),D_=n("TFPreTrainedModel"),S_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B_=c(),Br=r("p"),W_=n("This model is also a "),Wr=r("a"),Q_=n("tf.keras.Model"),U_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_=c(),v(Qn.$$.fragment),K_=c(),Do=r("p"),R_=n("This class copies code from "),oi=r("a"),V_=n("TFRobertaModel"),G_=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Qr=r("a"),J_=n("Longformer: the Long-Document Transformer"),X_=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Y_=c(),Ur=r("p"),Z_=n("The self-attention module "),Zl=r("code"),ew=n("TFLongformerSelfAttention"),tw=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),ow=c(),Bt=r("div"),v(Hr.$$.fragment),nw=c(),So=r("p"),sw=n("The "),ni=r("a"),rw=n("TFLongformerModel"),aw=n(" forward method, overrides the "),ed=r("code"),iw=n("__call__"),lw=n(" special method."),dw=c(),v(Un.$$.fragment),om=c(),Bo=r("h2"),Hn=r("a"),td=r("span"),v(Kr.$$.fragment),cw=c(),od=r("span"),mw=n("TFLongformerForMaskedLM"),nm=c(),rt=r("div"),v(Rr.$$.fragment),hw=c(),Vr=r("p"),pw=n("Longformer Model with a "),nd=r("code"),fw=n("language modeling"),gw=n(" head on top."),uw=c(),Gr=r("p"),_w=n("This model inherits from "),si=r("a"),ww=n("TFPreTrainedModel"),kw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bw=c(),Jr=r("p"),vw=n("This model is also a "),Xr=r("a"),yw=n("tf.keras.Model"),Tw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$w=c(),v(Kn.$$.fragment),Lw=c(),bt=r("div"),v(Yr.$$.fragment),xw=c(),Wo=r("p"),Fw=n("The "),ri=r("a"),Mw=n("TFLongformerForMaskedLM"),Ew=n(" forward method, overrides the "),sd=r("code"),zw=n("__call__"),qw=n(" special method."),jw=c(),v(Rn.$$.fragment),Cw=c(),v(Vn.$$.fragment),Ow=c(),v(Gn.$$.fragment),sm=c(),Qo=r("h2"),Jn=r("a"),rd=r("span"),v(Zr.$$.fragment),Pw=c(),ad=r("span"),Nw=n("TFLongformerForQuestionAnswering"),rm=c(),at=r("div"),v(ea.$$.fragment),Aw=c(),Uo=r("p"),Iw=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),id=r("code"),Dw=n("span start logits"),Sw=n(" and "),ld=r("code"),Bw=n("span end logits"),Ww=n(")."),Qw=c(),ta=r("p"),Uw=n("This model inherits from "),ai=r("a"),Hw=n("TFPreTrainedModel"),Kw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rw=c(),oa=r("p"),Vw=n("This model is also a "),na=r("a"),Gw=n("tf.keras.Model"),Jw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xw=c(),v(Xn.$$.fragment),Yw=c(),vt=r("div"),v(sa.$$.fragment),Zw=c(),Ho=r("p"),ek=n("The "),ii=r("a"),tk=n("TFLongformerForQuestionAnswering"),ok=n(" forward method, overrides the "),dd=r("code"),nk=n("__call__"),sk=n(" special method."),rk=c(),v(Yn.$$.fragment),ak=c(),v(Zn.$$.fragment),ik=c(),v(es.$$.fragment),am=c(),Ko=r("h2"),ts=r("a"),cd=r("span"),v(ra.$$.fragment),lk=c(),md=r("span"),dk=n("TFLongformerForSequenceClassification"),im=c(),it=r("div"),v(aa.$$.fragment),ck=c(),hd=r("p"),mk=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),hk=c(),ia=r("p"),pk=n("This model inherits from "),li=r("a"),fk=n("TFPreTrainedModel"),gk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uk=c(),la=r("p"),_k=n("This model is also a "),da=r("a"),wk=n("tf.keras.Model"),kk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bk=c(),v(os.$$.fragment),vk=c(),yt=r("div"),v(ca.$$.fragment),yk=c(),Ro=r("p"),Tk=n("The "),di=r("a"),$k=n("TFLongformerForSequenceClassification"),Lk=n(" forward method, overrides the "),pd=r("code"),xk=n("__call__"),Fk=n(" special method."),Mk=c(),v(ns.$$.fragment),Ek=c(),v(ss.$$.fragment),zk=c(),v(rs.$$.fragment),lm=c(),Vo=r("h2"),as=r("a"),fd=r("span"),v(ma.$$.fragment),qk=c(),gd=r("span"),jk=n("TFLongformerForTokenClassification"),dm=c(),lt=r("div"),v(ha.$$.fragment),Ck=c(),ud=r("p"),Ok=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Pk=c(),pa=r("p"),Nk=n("This model inherits from "),ci=r("a"),Ak=n("TFPreTrainedModel"),Ik=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dk=c(),fa=r("p"),Sk=n("This model is also a "),ga=r("a"),Bk=n("tf.keras.Model"),Wk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qk=c(),v(is.$$.fragment),Uk=c(),Tt=r("div"),v(ua.$$.fragment),Hk=c(),Go=r("p"),Kk=n("The "),mi=r("a"),Rk=n("TFLongformerForTokenClassification"),Vk=n(" forward method, overrides the "),_d=r("code"),Gk=n("__call__"),Jk=n(" special method."),Xk=c(),v(ls.$$.fragment),Yk=c(),v(ds.$$.fragment),Zk=c(),v(cs.$$.fragment),cm=c(),Jo=r("h2"),ms=r("a"),wd=r("span"),v(_a.$$.fragment),eb=c(),kd=r("span"),tb=n("TFLongformerForMultipleChoice"),mm=c(),dt=r("div"),v(wa.$$.fragment),ob=c(),bd=r("p"),nb=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),sb=c(),ka=r("p"),rb=n("This model inherits from "),hi=r("a"),ab=n("TFPreTrainedModel"),ib=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=c(),ba=r("p"),db=n("This model is also a "),va=r("a"),cb=n("tf.keras.Model"),mb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hb=c(),v(hs.$$.fragment),pb=c(),Et=r("div"),v(ya.$$.fragment),fb=c(),Xo=r("p"),gb=n("The "),pi=r("a"),ub=n("TFLongformerForMultipleChoice"),_b=n(" forward method, overrides the "),vd=r("code"),wb=n("__call__"),kb=n(" special method."),bb=c(),v(ps.$$.fragment),vb=c(),v(fs.$$.fragment),this.h()},l(o){const g=FT('[data-svelte="svelte-1phssyn"]',document.head);l=a(g,"META",{name:!0,content:!0}),g.forEach(t),k=m(o),h=a(o,"H1",{class:!0});var Ta=i(h);_=a(Ta,"A",{id:!0,class:!0,href:!0});var yd=i(_);b=a(yd,"SPAN",{});var Td=i(b);y(d.$$.fragment,Td),Td.forEach(t),yd.forEach(t),p=m(Ta),q=a(Ta,"SPAN",{});var $d=i(q);ke=s($d,"Longformer"),$d.forEach(t),Ta.forEach(t),pe=m(o),A=a(o,"H2",{class:!0});var $a=i(A);ie=a($a,"A",{id:!0,class:!0,href:!0});var Ld=i(ie);ee=a(Ld,"SPAN",{});var xd=i(ee);y(F.$$.fragment,xd),xd.forEach(t),Ld.forEach(t),be=m($a),H=a($a,"SPAN",{});var Fd=i(H);ve=s(Fd,"Overview"),Fd.forEach(t),$a.forEach(t),fe=m(o),S=a(o,"P",{});var La=i(S);ye=s(La,"The Longformer model was presented in "),de=a(La,"A",{href:!0,rel:!0});var Md=i(de);G=s(Md,"Longformer: The Long-Document Transformer"),Md.forEach(t),Te=s(La," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),La.forEach(t),ge=m(o),W=a(o,"P",{});var Ed=i(W);$e=s(Ed,"The abstract from the paper is the following:"),Ed.forEach(t),ue=m(o),Q=a(o,"P",{});var zd=i(Q);me=a(zd,"EM",{});var qd=i(me);Le=s(qd,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),qd.forEach(t),zd.forEach(t),ne=m(o),j=a(o,"P",{});var jd=i(j);O=s(jd,"Tips:"),jd.forEach(t),_e=m(o),U=a(o,"UL",{});var Cd=i(U);te=a(Cd,"LI",{});var At=i(te);xe=s(At,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),K=a(At,"CODE",{});var Od=i(K);Fe=s(Od,"token_type_ids"),Od.forEach(t),Me=s(At,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),C=a(At,"CODE",{});var Pd=i(C);Ee=s(Pd,"tokenizer.sep_token"),Pd.forEach(t),J=s(At,` (or
`),he=a(At,"CODE",{});var Nd=i(he);ze=s(Nd,"</s>"),Nd.forEach(t),X=s(At,")."),At.forEach(t),Cd.forEach(t),we=m(o),se=a(o,"P",{});var Yo=i(se);I=s(Yo,"This model was contributed by "),ce=a(Yo,"A",{href:!0,rel:!0});var Ad=i(ce);Y=s(Ad,"beltagy"),Ad.forEach(t),qe=s(Yo,". The Authors\u2019 code can be found "),Z=a(Yo,"A",{href:!0,rel:!0});var Id=i(Z);P=s(Id,"here"),Id.forEach(t),je=s(Yo,"."),Yo.forEach(t),N=m(o),re=a(o,"H2",{class:!0});var xa=i(re);le=a(xa,"A",{id:!0,class:!0,href:!0});var Dd=i(le);w=a(Dd,"SPAN",{});var Sd=i(w);y(E.$$.fragment,Sd),Sd.forEach(t),Dd.forEach(t),Ke=m(xa),oe=a(xa,"SPAN",{});var Bd=i(oe);Re=s(Bd,"Longformer Self Attention"),Bd.forEach(t),xa.forEach(t),Ie=m(o),M=a(o,"P",{});var Ye=i(M);Ve=s(Ye,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),De=on(Ye),Se=s(Ye,` previous tokens and
`),Be=on(Ye),R=s(Ye," succeding tokens with "),We=on(Ye),V=s(Ye,` being the window length as defined in
`),Pe=a(Ye,"CODE",{});var Wd=i(Pe);Ge=s(Wd,"config.attention_window"),Wd.forEach(t),Ce=s(Ye,". Note that "),Ne=a(Ye,"CODE",{});var Qd=i(Ne);ae=s(Qd,"config.attention_window"),Qd.forEach(t),Je=s(Ye," can be of type "),Ni=a(Ye,"CODE",{});var Ud=i(Ni);Fh=s(Ud,"List"),Ud.forEach(t),Mh=s(Ye,` to define a
different `),ec=on(Ye),tc=s(Ye,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Ai=a(Ye,"CODE",{});var Hd=i(Ai);Eh=s(Hd,"BertSelfAttention"),Hd.forEach(t),zh=s(Ye,"."),Ye.forEach(t),oc=m(o),It=a(o,"P",{});var Zo=i(It);qh=s(Zo,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),nc=on(Zo),sc=s(Zo,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Ii=a(Zo,"EM",{});var Kd=i(Ii);jh=s(Kd,"symmetric"),Kd.forEach(t),Ch=s(Zo,"."),Zo.forEach(t),rc=m(o),Dt=a(o,"P",{});var en=i(Dt);Oh=s(en,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Di=a(en,"CODE",{});var Rd=i(Di);Ph=s(Rd,"global_attention_mask"),Rd.forEach(t),Nh=s(en,` at run-time appropriately. All Longformer models employ the following logic for
`),Si=a(en,"CODE",{});var Vd=i(Si);Ah=s(Vd,"global_attention_mask"),Vd.forEach(t),Ih=s(en,":"),en.forEach(t),ac=m(o),nn=a(o,"UL",{});var Fa=i(nn);Bi=a(Fa,"LI",{});var Gd=i(Bi);Dh=s(Gd,"0: the token attends \u201Clocally\u201D,"),Gd.forEach(t),Sh=m(Fa),Wi=a(Fa,"LI",{});var Jd=i(Wi);Bh=s(Jd,"1: the token attends \u201Cglobally\u201D."),Jd.forEach(t),Fa.forEach(t),ic=m(o),sn=a(o,"P",{});var Ma=i(sn);Wh=s(Ma,"For more information please also refer to "),Ea=a(Ma,"A",{href:!0});var Xd=i(Ea);Qh=s(Xd,"forward()"),Xd.forEach(t),Uh=s(Ma," method."),Ma.forEach(t),lc=m(o),wt=a(o,"P",{});var Wt=i(wt);Hh=s(Wt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),dc=on(Wt),cc=s(Wt,` to
`),mc=on(Wt),hc=s(Wt,", with "),pc=on(Wt),fc=s(Wt," being the sequence length and "),gc=on(Wt),uc=s(Wt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Wt.forEach(t),_c=m(o),rn=a(o,"P",{});var pm=i(rn);Kh=s(pm,"For more information, please refer to the official "),ks=a(pm,"A",{href:!0,rel:!0});var $b=i(ks);Rh=s($b,"paper"),$b.forEach(t),Vh=s(pm,"."),pm.forEach(t),wc=m(o),eo=a(o,"H2",{class:!0});var fm=i(eo);an=a(fm,"A",{id:!0,class:!0,href:!0});var Lb=i(an);Qi=a(Lb,"SPAN",{});var xb=i(Qi);y(bs.$$.fragment,xb),xb.forEach(t),Lb.forEach(t),Gh=m(fm),Ui=a(fm,"SPAN",{});var Fb=i(Ui);Jh=s(Fb,"Training"),Fb.forEach(t),fm.forEach(t),kc=m(o),to=a(o,"P",{});var Yd=i(to);za=a(Yd,"A",{href:!0});var Mb=i(za);Xh=s(Mb,"LongformerForMaskedLM"),Mb.forEach(t),Yh=s(Yd," is trained the exact same way "),qa=a(Yd,"A",{href:!0});var Eb=i(qa);Zh=s(Eb,"RobertaForMaskedLM"),Eb.forEach(t),ep=s(Yd,` is
trained and should be used as follows:`),Yd.forEach(t),bc=m(o),y(vs.$$.fragment,o),vc=m(o),oo=a(o,"H2",{class:!0});var gm=i(oo);ln=a(gm,"A",{id:!0,class:!0,href:!0});var zb=i(ln);Hi=a(zb,"SPAN",{});var qb=i(Hi);y(ys.$$.fragment,qb),qb.forEach(t),zb.forEach(t),tp=m(gm),Ki=a(gm,"SPAN",{});var jb=i(Ki);op=s(jb,"LongformerConfig"),jb.forEach(t),gm.forEach(t),yc=m(o),ht=a(o,"DIV",{class:!0});var Qt=i(ht);y(Ts.$$.fragment,Qt),np=m(Qt),no=a(Qt,"P",{});var fi=i(no);sp=s(fi,"This is the configuration class to store the configuration of a "),ja=a(fi,"A",{href:!0});var Cb=i(ja);rp=s(Cb,"LongformerModel"),Cb.forEach(t),ap=s(fi," or a "),Ca=a(fi,"A",{href:!0});var Ob=i(Ca);ip=s(Ob,"TFLongformerModel"),Ob.forEach(t),lp=s(fi,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),fi.forEach(t),dp=m(Qt),so=a(Qt,"P",{});var gi=i(so);cp=s(gi,"This is the configuration class to store the configuration of a "),Oa=a(gi,"A",{href:!0});var Pb=i(Oa);mp=s(Pb,"LongformerModel"),Pb.forEach(t),hp=s(gi,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),$s=a(gi,"A",{href:!0,rel:!0});var Nb=i($s);pp=s(Nb,"allenai/longformer-base-4096"),Nb.forEach(t),fp=s(gi,` architecture with a sequence
length 4,096.`),gi.forEach(t),gp=m(Qt),ro=a(Qt,"P",{});var ui=i(ro);up=s(ui,"The "),Pa=a(ui,"A",{href:!0});var Ab=i(Pa);_p=s(Ab,"LongformerConfig"),Ab.forEach(t),wp=s(ui," class directly inherits "),Na=a(ui,"A",{href:!0});var Ib=i(Na);kp=s(Ib,"RobertaConfig"),Ib.forEach(t),bp=s(ui,`. It reuses the same defaults. Please check the
parent class for more information.`),ui.forEach(t),vp=m(Qt),y(dn.$$.fragment,Qt),Qt.forEach(t),Tc=m(o),ao=a(o,"H2",{class:!0});var um=i(ao);cn=a(um,"A",{id:!0,class:!0,href:!0});var Db=i(cn);Ri=a(Db,"SPAN",{});var Sb=i(Ri);y(Ls.$$.fragment,Sb),Sb.forEach(t),Db.forEach(t),yp=m(um),Vi=a(um,"SPAN",{});var Bb=i(Vi);Tp=s(Bb,"LongformerTokenizer"),Bb.forEach(t),um.forEach(t),$c=m(o),Oe=a(o,"DIV",{class:!0});var Qe=i(Oe);y(xs.$$.fragment,Qe),$p=m(Qe),Gi=a(Qe,"P",{});var Wb=i(Gi);Lp=s(Wb,"Constructs a Longformer tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Wb.forEach(t),xp=m(Qe),Ji=a(Qe,"P",{});var Qb=i(Ji);Fp=s(Qb,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Qb.forEach(t),Mp=m(Qe),y(mn.$$.fragment,Qe),Ep=m(Qe),Fs=a(Qe,"P",{});var _m=i(Fs);zp=s(_m,"You can get around that behavior by passing "),Xi=a(_m,"CODE",{});var Ub=i(Xi);qp=s(Ub,"add_prefix_space=True"),Ub.forEach(t),jp=s(_m,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),_m.forEach(t),Cp=m(Qe),y(hn.$$.fragment,Qe),Op=m(Qe),Ms=a(Qe,"P",{});var wm=i(Ms);Pp=s(wm,"This tokenizer inherits from "),Aa=a(wm,"A",{href:!0});var Hb=i(Aa);Np=s(Hb,"PreTrainedTokenizer"),Hb.forEach(t),Ap=s(wm,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wm.forEach(t),Ip=m(Qe),St=a(Qe,"DIV",{class:!0});var _i=i(St);y(Es.$$.fragment,_i),Dp=m(_i),Yi=a(_i,"P",{});var Kb=i(Yi);Sp=s(Kb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Longformer sequence has the following format:`),Kb.forEach(t),Bp=m(_i),zs=a(_i,"UL",{});var km=i(zs);Ia=a(km,"LI",{});var yb=i(Ia);Wp=s(yb,"single sequence: "),Zi=a(yb,"CODE",{});var Rb=i(Zi);Qp=s(Rb,"<s> X </s>"),Rb.forEach(t),yb.forEach(t),Up=m(km),Da=a(km,"LI",{});var Tb=i(Da);Hp=s(Tb,"pair of sequences: "),el=a(Tb,"CODE",{});var Vb=i(el);Kp=s(Vb,"<s> A </s></s> B </s>"),Vb.forEach(t),Tb.forEach(t),km.forEach(t),_i.forEach(t),Rp=m(Qe),pn=a(Qe,"DIV",{class:!0});var bm=i(pn);y(qs.$$.fragment,bm),Vp=m(bm),tl=a(bm,"P",{});var Gb=i(tl);Gp=s(Gb,"Converts a sequence of tokens (string) in a single string."),Gb.forEach(t),bm.forEach(t),Jp=m(Qe),fn=a(Qe,"DIV",{class:!0});var vm=i(fn);y(js.$$.fragment,vm),Xp=m(vm),ol=a(vm,"P",{});var Jb=i(ol);Yp=s(Jb,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. Longformer does
not make use of token type ids, therefore a list of zeros is returned.`),Jb.forEach(t),vm.forEach(t),Zp=m(Qe),gn=a(Qe,"DIV",{class:!0});var ym=i(gn);y(Cs.$$.fragment,ym),ef=m(ym),Os=a(ym,"P",{});var Tm=i(Os);tf=s(Tm,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),nl=a(Tm,"CODE",{});var Xb=i(nl);of=s(Xb,"prepare_for_model"),Xb.forEach(t),nf=s(Tm," method."),Tm.forEach(t),ym.forEach(t),Qe.forEach(t),Lc=m(o),io=a(o,"H2",{class:!0});var $m=i(io);un=a($m,"A",{id:!0,class:!0,href:!0});var Yb=i(un);sl=a(Yb,"SPAN",{});var Zb=i(sl);y(Ps.$$.fragment,Zb),Zb.forEach(t),Yb.forEach(t),sf=m($m),rl=a($m,"SPAN",{});var ev=i(rl);rf=s(ev,"LongformerTokenizerFast"),ev.forEach(t),$m.forEach(t),xc=m(o),Nt=a(o,"DIV",{class:!0});var wi=i(Nt);y(Ns.$$.fragment,wi),af=m(wi),As=a(wi,"P",{});var Lm=i(As);lf=s(Lm,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),al=a(Lm,"EM",{});var tv=i(al);df=s(tv,"tokenizers"),tv.forEach(t),cf=s(Lm," library)."),Lm.forEach(t),mf=m(wi),_n=a(wi,"P",{});var Zd=i(_n);Sa=a(Zd,"A",{href:!0});var ov=i(Sa);hf=s(ov,"LongformerTokenizerFast"),ov.forEach(t),pf=s(Zd," is identical to "),Ba=a(Zd,"A",{href:!0});var nv=i(Ba);ff=s(nv,"RobertaTokenizerFast"),nv.forEach(t),gf=s(Zd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Zd.forEach(t),wi.forEach(t),Fc=m(o),lo=a(o,"H2",{class:!0});var xm=i(lo);wn=a(xm,"A",{id:!0,class:!0,href:!0});var sv=i(wn);il=a(sv,"SPAN",{});var rv=i(il);y(Is.$$.fragment,rv),rv.forEach(t),sv.forEach(t),uf=m(xm),ll=a(xm,"SPAN",{});var av=i(ll);_f=s(av,"Longformer specific outputs"),av.forEach(t),xm.forEach(t),Mc=m(o),co=a(o,"DIV",{class:!0});var Fm=i(co);y(Ds.$$.fragment,Fm),wf=m(Fm),dl=a(Fm,"P",{});var iv=i(dl);kf=s(iv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),iv.forEach(t),Fm.forEach(t),Ec=m(o),mo=a(o,"DIV",{class:!0});var Mm=i(mo);y(Ss.$$.fragment,Mm),bf=m(Mm),cl=a(Mm,"P",{});var lv=i(cl);vf=s(lv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),lv.forEach(t),Mm.forEach(t),zc=m(o),ho=a(o,"DIV",{class:!0});var Em=i(ho);y(Bs.$$.fragment,Em),yf=m(Em),ml=a(Em,"P",{});var dv=i(ml);Tf=s(dv,"Base class for masked language models outputs."),dv.forEach(t),Em.forEach(t),qc=m(o),po=a(o,"DIV",{class:!0});var zm=i(po);y(Ws.$$.fragment,zm),$f=m(zm),hl=a(zm,"P",{});var cv=i(hl);Lf=s(cv,"Base class for outputs of question answering Longformer models."),cv.forEach(t),zm.forEach(t),jc=m(o),fo=a(o,"DIV",{class:!0});var qm=i(fo);y(Qs.$$.fragment,qm),xf=m(qm),pl=a(qm,"P",{});var mv=i(pl);Ff=s(mv,"Base class for outputs of sentence classification models."),mv.forEach(t),qm.forEach(t),Cc=m(o),go=a(o,"DIV",{class:!0});var jm=i(go);y(Us.$$.fragment,jm),Mf=m(jm),fl=a(jm,"P",{});var hv=i(fl);Ef=s(hv,"Base class for outputs of multiple choice Longformer models."),hv.forEach(t),jm.forEach(t),Oc=m(o),uo=a(o,"DIV",{class:!0});var Cm=i(uo);y(Hs.$$.fragment,Cm),zf=m(Cm),gl=a(Cm,"P",{});var pv=i(gl);qf=s(pv,"Base class for outputs of token classification models."),pv.forEach(t),Cm.forEach(t),Pc=m(o),_o=a(o,"DIV",{class:!0});var Om=i(_o);y(Ks.$$.fragment,Om),jf=m(Om),ul=a(Om,"P",{});var fv=i(ul);Cf=s(fv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),fv.forEach(t),Om.forEach(t),Nc=m(o),wo=a(o,"DIV",{class:!0});var Pm=i(wo);y(Rs.$$.fragment,Pm),Of=m(Pm),_l=a(Pm,"P",{});var gv=i(_l);Pf=s(gv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),gv.forEach(t),Pm.forEach(t),Ac=m(o),ko=a(o,"DIV",{class:!0});var Nm=i(ko);y(Vs.$$.fragment,Nm),Nf=m(Nm),wl=a(Nm,"P",{});var uv=i(wl);Af=s(uv,"Base class for masked language models outputs."),uv.forEach(t),Nm.forEach(t),Ic=m(o),bo=a(o,"DIV",{class:!0});var Am=i(bo);y(Gs.$$.fragment,Am),If=m(Am),kl=a(Am,"P",{});var _v=i(kl);Df=s(_v,"Base class for outputs of question answering Longformer models."),_v.forEach(t),Am.forEach(t),Dc=m(o),vo=a(o,"DIV",{class:!0});var Im=i(vo);y(Js.$$.fragment,Im),Sf=m(Im),bl=a(Im,"P",{});var wv=i(bl);Bf=s(wv,"Base class for outputs of sentence classification models."),wv.forEach(t),Im.forEach(t),Sc=m(o),yo=a(o,"DIV",{class:!0});var Dm=i(yo);y(Xs.$$.fragment,Dm),Wf=m(Dm),vl=a(Dm,"P",{});var kv=i(vl);Qf=s(kv,"Base class for outputs of multiple choice models."),kv.forEach(t),Dm.forEach(t),Bc=m(o),To=a(o,"DIV",{class:!0});var Sm=i(To);y(Ys.$$.fragment,Sm),Uf=m(Sm),yl=a(Sm,"P",{});var bv=i(yl);Hf=s(bv,"Base class for outputs of token classification models."),bv.forEach(t),Sm.forEach(t),Wc=m(o),$o=a(o,"H2",{class:!0});var Bm=i($o);kn=a(Bm,"A",{id:!0,class:!0,href:!0});var vv=i(kn);Tl=a(vv,"SPAN",{});var yv=i(Tl);y(Zs.$$.fragment,yv),yv.forEach(t),vv.forEach(t),Kf=m(Bm),$l=a(Bm,"SPAN",{});var Tv=i($l);Rf=s(Tv,"LongformerModel"),Tv.forEach(t),Bm.forEach(t),Qc=m(o),ot=a(o,"DIV",{class:!0});var $t=i(ot);y(er.$$.fragment,$t),Vf=m($t),Ll=a($t,"P",{});var $v=i(Ll);Gf=s($v,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),$v.forEach(t),Jf=m($t),tr=a($t,"P",{});var Wm=i(tr);Xf=s(Wm,"This model inherits from "),Wa=a(Wm,"A",{href:!0});var Lv=i(Wa);Yf=s(Lv,"PreTrainedModel"),Lv.forEach(t),Zf=s(Wm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wm.forEach(t),eg=m($t),or=a($t,"P",{});var Qm=i(or);tg=s(Qm,"This model is also a PyTorch "),nr=a(Qm,"A",{href:!0,rel:!0});var xv=i(nr);og=s(xv,"torch.nn.Module"),xv.forEach(t),ng=s(Qm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qm.forEach(t),sg=m($t),Lo=a($t,"P",{});var ki=i(Lo);rg=s(ki,"This class copied code from "),Qa=a(ki,"A",{href:!0});var Fv=i(Qa);ag=s(Fv,"RobertaModel"),Fv.forEach(t),ig=s(ki,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),sr=a(ki,"A",{href:!0,rel:!0});var Mv=i(sr);lg=s(Mv,`Longformer:
the Long-Document Transformer`),Mv.forEach(t),dg=s(ki,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),ki.forEach(t),cg=m($t),rr=a($t,"P",{});var Um=i(rr);mg=s(Um,"The self-attention module "),xl=a(Um,"CODE",{});var Ev=i(xl);hg=s(Ev,"LongformerSelfAttention"),Ev.forEach(t),pg=s(Um,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Um.forEach(t),fg=m($t),xt=a($t,"DIV",{class:!0});var gs=i(xt);y(ar.$$.fragment,gs),gg=m(gs),xo=a(gs,"P",{});var bi=i(xo);ug=s(bi,"The "),Ua=a(bi,"A",{href:!0});var zv=i(Ua);_g=s(zv,"LongformerModel"),zv.forEach(t),wg=s(bi," forward method, overrides the "),Fl=a(bi,"CODE",{});var qv=i(Fl);kg=s(qv,"__call__"),qv.forEach(t),bg=s(bi," special method."),bi.forEach(t),vg=m(gs),y(bn.$$.fragment,gs),yg=m(gs),y(vn.$$.fragment,gs),gs.forEach(t),$t.forEach(t),Uc=m(o),Fo=a(o,"H2",{class:!0});var Hm=i(Fo);yn=a(Hm,"A",{id:!0,class:!0,href:!0});var jv=i(yn);Ml=a(jv,"SPAN",{});var Cv=i(Ml);y(ir.$$.fragment,Cv),Cv.forEach(t),jv.forEach(t),Tg=m(Hm),El=a(Hm,"SPAN",{});var Ov=i(El);$g=s(Ov,"LongformerForMaskedLM"),Ov.forEach(t),Hm.forEach(t),Hc=m(o),pt=a(o,"DIV",{class:!0});var Ut=i(pt);y(lr.$$.fragment,Ut),Lg=m(Ut),dr=a(Ut,"P",{});var Km=i(dr);xg=s(Km,"Longformer Model with a "),zl=a(Km,"CODE",{});var Pv=i(zl);Fg=s(Pv,"language modeling"),Pv.forEach(t),Mg=s(Km," head on top."),Km.forEach(t),Eg=m(Ut),cr=a(Ut,"P",{});var Rm=i(cr);zg=s(Rm,"This model inherits from "),Ha=a(Rm,"A",{href:!0});var Nv=i(Ha);qg=s(Nv,"PreTrainedModel"),Nv.forEach(t),jg=s(Rm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rm.forEach(t),Cg=m(Ut),mr=a(Ut,"P",{});var Vm=i(mr);Og=s(Vm,"This model is also a PyTorch "),hr=a(Vm,"A",{href:!0,rel:!0});var Av=i(hr);Pg=s(Av,"torch.nn.Module"),Av.forEach(t),Ng=s(Vm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vm.forEach(t),Ag=m(Ut),ct=a(Ut,"DIV",{class:!0});var zt=i(ct);y(pr.$$.fragment,zt),Ig=m(zt),Mo=a(zt,"P",{});var vi=i(Mo);Dg=s(vi,"The "),Ka=a(vi,"A",{href:!0});var Iv=i(Ka);Sg=s(Iv,"LongformerForMaskedLM"),Iv.forEach(t),Bg=s(vi," forward method, overrides the "),ql=a(vi,"CODE",{});var Dv=i(ql);Wg=s(Dv,"__call__"),Dv.forEach(t),Qg=s(vi," special method."),vi.forEach(t),Ug=m(zt),y(Tn.$$.fragment,zt),Hg=m(zt),y($n.$$.fragment,zt),Kg=m(zt),jl=a(zt,"P",{});var Sv=i(jl);Rg=s(Sv,"Let\u2019s try a very long input."),Sv.forEach(t),Vg=m(zt),y(Ln.$$.fragment,zt),zt.forEach(t),Ut.forEach(t),Kc=m(o),Eo=a(o,"H2",{class:!0});var Gm=i(Eo);xn=a(Gm,"A",{id:!0,class:!0,href:!0});var Bv=i(xn);Cl=a(Bv,"SPAN",{});var Wv=i(Cl);y(fr.$$.fragment,Wv),Wv.forEach(t),Bv.forEach(t),Gg=m(Gm),Ol=a(Gm,"SPAN",{});var Qv=i(Ol);Jg=s(Qv,"LongformerForSequenceClassification"),Qv.forEach(t),Gm.forEach(t),Rc=m(o),ft=a(o,"DIV",{class:!0});var Ht=i(ft);y(gr.$$.fragment,Ht),Xg=m(Ht),Pl=a(Ht,"P",{});var Uv=i(Pl);Yg=s(Uv,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Uv.forEach(t),Zg=m(Ht),ur=a(Ht,"P",{});var Jm=i(ur);eu=s(Jm,"This model inherits from "),Ra=a(Jm,"A",{href:!0});var Hv=i(Ra);tu=s(Hv,"PreTrainedModel"),Hv.forEach(t),ou=s(Jm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jm.forEach(t),nu=m(Ht),_r=a(Ht,"P",{});var Xm=i(_r);su=s(Xm,"This model is also a PyTorch "),wr=a(Xm,"A",{href:!0,rel:!0});var Kv=i(wr);ru=s(Kv,"torch.nn.Module"),Kv.forEach(t),au=s(Xm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xm.forEach(t),iu=m(Ht),st=a(Ht,"DIV",{class:!0});var Lt=i(st);y(kr.$$.fragment,Lt),lu=m(Lt),zo=a(Lt,"P",{});var yi=i(zo);du=s(yi,"The "),Va=a(yi,"A",{href:!0});var Rv=i(Va);cu=s(Rv,"LongformerForSequenceClassification"),Rv.forEach(t),mu=s(yi," forward method, overrides the "),Nl=a(yi,"CODE",{});var Vv=i(Nl);hu=s(Vv,"__call__"),Vv.forEach(t),pu=s(yi," special method."),yi.forEach(t),fu=m(Lt),y(Fn.$$.fragment,Lt),gu=m(Lt),y(Mn.$$.fragment,Lt),uu=m(Lt),y(En.$$.fragment,Lt),_u=m(Lt),y(zn.$$.fragment,Lt),wu=m(Lt),y(qn.$$.fragment,Lt),Lt.forEach(t),Ht.forEach(t),Vc=m(o),qo=a(o,"H2",{class:!0});var Ym=i(qo);jn=a(Ym,"A",{id:!0,class:!0,href:!0});var Gv=i(jn);Al=a(Gv,"SPAN",{});var Jv=i(Al);y(br.$$.fragment,Jv),Jv.forEach(t),Gv.forEach(t),ku=m(Ym),Il=a(Ym,"SPAN",{});var Xv=i(Il);bu=s(Xv,"LongformerForMultipleChoice"),Xv.forEach(t),Ym.forEach(t),Gc=m(o),gt=a(o,"DIV",{class:!0});var Kt=i(gt);y(vr.$$.fragment,Kt),vu=m(Kt),Dl=a(Kt,"P",{});var Yv=i(Dl);yu=s(Yv,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Yv.forEach(t),Tu=m(Kt),yr=a(Kt,"P",{});var Zm=i(yr);$u=s(Zm,"This model inherits from "),Ga=a(Zm,"A",{href:!0});var Zv=i(Ga);Lu=s(Zv,"PreTrainedModel"),Zv.forEach(t),xu=s(Zm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm.forEach(t),Fu=m(Kt),Tr=a(Kt,"P",{});var eh=i(Tr);Mu=s(eh,"This model is also a PyTorch "),$r=a(eh,"A",{href:!0,rel:!0});var ey=i($r);Eu=s(ey,"torch.nn.Module"),ey.forEach(t),zu=s(eh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh.forEach(t),qu=m(Kt),Ft=a(Kt,"DIV",{class:!0});var us=i(Ft);y(Lr.$$.fragment,us),ju=m(us),jo=a(us,"P",{});var Ti=i(jo);Cu=s(Ti,"The "),Ja=a(Ti,"A",{href:!0});var ty=i(Ja);Ou=s(ty,"LongformerForMultipleChoice"),ty.forEach(t),Pu=s(Ti," forward method, overrides the "),Sl=a(Ti,"CODE",{});var oy=i(Sl);Nu=s(oy,"__call__"),oy.forEach(t),Au=s(Ti," special method."),Ti.forEach(t),Iu=m(us),y(Cn.$$.fragment,us),Du=m(us),y(On.$$.fragment,us),us.forEach(t),Kt.forEach(t),Jc=m(o),Co=a(o,"H2",{class:!0});var th=i(Co);Pn=a(th,"A",{id:!0,class:!0,href:!0});var ny=i(Pn);Bl=a(ny,"SPAN",{});var sy=i(Bl);y(xr.$$.fragment,sy),sy.forEach(t),ny.forEach(t),Su=m(th),Wl=a(th,"SPAN",{});var ry=i(Wl);Bu=s(ry,"LongformerForTokenClassification"),ry.forEach(t),th.forEach(t),Xc=m(o),ut=a(o,"DIV",{class:!0});var Rt=i(ut);y(Fr.$$.fragment,Rt),Wu=m(Rt),Ql=a(Rt,"P",{});var ay=i(Ql);Qu=s(ay,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ay.forEach(t),Uu=m(Rt),Mr=a(Rt,"P",{});var oh=i(Mr);Hu=s(oh,"This model inherits from "),Xa=a(oh,"A",{href:!0});var iy=i(Xa);Ku=s(iy,"PreTrainedModel"),iy.forEach(t),Ru=s(oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oh.forEach(t),Vu=m(Rt),Er=a(Rt,"P",{});var nh=i(Er);Gu=s(nh,"This model is also a PyTorch "),zr=a(nh,"A",{href:!0,rel:!0});var ly=i(zr);Ju=s(ly,"torch.nn.Module"),ly.forEach(t),Xu=s(nh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nh.forEach(t),Yu=m(Rt),kt=a(Rt,"DIV",{class:!0});var Vt=i(kt);y(qr.$$.fragment,Vt),Zu=m(Vt),Oo=a(Vt,"P",{});var $i=i(Oo);e_=s($i,"The "),Ya=a($i,"A",{href:!0});var dy=i(Ya);t_=s(dy,"LongformerForTokenClassification"),dy.forEach(t),o_=s($i," forward method, overrides the "),Ul=a($i,"CODE",{});var cy=i(Ul);n_=s(cy,"__call__"),cy.forEach(t),s_=s($i," special method."),$i.forEach(t),r_=m(Vt),y(Nn.$$.fragment,Vt),a_=m(Vt),y(An.$$.fragment,Vt),i_=m(Vt),y(In.$$.fragment,Vt),Vt.forEach(t),Rt.forEach(t),Yc=m(o),Po=a(o,"H2",{class:!0});var sh=i(Po);Dn=a(sh,"A",{id:!0,class:!0,href:!0});var my=i(Dn);Hl=a(my,"SPAN",{});var hy=i(Hl);y(jr.$$.fragment,hy),hy.forEach(t),my.forEach(t),l_=m(sh),Kl=a(sh,"SPAN",{});var py=i(Kl);d_=s(py,"LongformerForQuestionAnswering"),py.forEach(t),sh.forEach(t),Zc=m(o),_t=a(o,"DIV",{class:!0});var Gt=i(_t);y(Cr.$$.fragment,Gt),c_=m(Gt),No=a(Gt,"P",{});var Li=i(No);m_=s(Li,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),Rl=a(Li,"CODE",{});var fy=i(Rl);h_=s(fy,"span start logits"),fy.forEach(t),p_=s(Li," and "),Vl=a(Li,"CODE",{});var gy=i(Vl);f_=s(gy,"span end logits"),gy.forEach(t),g_=s(Li,")."),Li.forEach(t),u_=m(Gt),Or=a(Gt,"P",{});var rh=i(Or);__=s(rh,"This model inherits from "),Za=a(rh,"A",{href:!0});var uy=i(Za);w_=s(uy,"PreTrainedModel"),uy.forEach(t),k_=s(rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh.forEach(t),b_=m(Gt),Pr=a(Gt,"P",{});var ah=i(Pr);v_=s(ah,"This model is also a PyTorch "),Nr=a(ah,"A",{href:!0,rel:!0});var _y=i(Nr);y_=s(_y,"torch.nn.Module"),_y.forEach(t),T_=s(ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ah.forEach(t),$_=m(Gt),Mt=a(Gt,"DIV",{class:!0});var _s=i(Mt);y(Ar.$$.fragment,_s),L_=m(_s),Ao=a(_s,"P",{});var xi=i(Ao);x_=s(xi,"The "),ei=a(xi,"A",{href:!0});var wy=i(ei);F_=s(wy,"LongformerForQuestionAnswering"),wy.forEach(t),M_=s(xi," forward method, overrides the "),Gl=a(xi,"CODE",{});var ky=i(Gl);E_=s(ky,"__call__"),ky.forEach(t),z_=s(xi," special method."),xi.forEach(t),q_=m(_s),y(Sn.$$.fragment,_s),j_=m(_s),y(Bn.$$.fragment,_s),_s.forEach(t),Gt.forEach(t),em=m(o),Io=a(o,"H2",{class:!0});var ih=i(Io);Wn=a(ih,"A",{id:!0,class:!0,href:!0});var by=i(Wn);Jl=a(by,"SPAN",{});var vy=i(Jl);y(Ir.$$.fragment,vy),vy.forEach(t),by.forEach(t),C_=m(ih),Xl=a(ih,"SPAN",{});var yy=i(Xl);O_=s(yy,"TFLongformerModel"),yy.forEach(t),ih.forEach(t),tm=m(o),Xe=a(o,"DIV",{class:!0});var mt=i(Xe);y(Dr.$$.fragment,mt),P_=m(mt),Yl=a(mt,"P",{});var Ty=i(Yl);N_=s(Ty,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Ty.forEach(t),A_=m(mt),Sr=a(mt,"P",{});var lh=i(Sr);I_=s(lh,"This model inherits from "),ti=a(lh,"A",{href:!0});var $y=i(ti);D_=s($y,"TFPreTrainedModel"),$y.forEach(t),S_=s(lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh.forEach(t),B_=m(mt),Br=a(mt,"P",{});var dh=i(Br);W_=s(dh,"This model is also a "),Wr=a(dh,"A",{href:!0,rel:!0});var Ly=i(Wr);Q_=s(Ly,"tf.keras.Model"),Ly.forEach(t),U_=s(dh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dh.forEach(t),H_=m(mt),y(Qn.$$.fragment,mt),K_=m(mt),Do=a(mt,"P",{});var Fi=i(Do);R_=s(Fi,"This class copies code from "),oi=a(Fi,"A",{href:!0});var xy=i(oi);V_=s(xy,"TFRobertaModel"),xy.forEach(t),G_=s(Fi,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Qr=a(Fi,"A",{href:!0,rel:!0});var Fy=i(Qr);J_=s(Fy,"Longformer: the Long-Document Transformer"),Fy.forEach(t),X_=s(Fi,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Fi.forEach(t),Y_=m(mt),Ur=a(mt,"P",{});var ch=i(Ur);Z_=s(ch,"The self-attention module "),Zl=a(ch,"CODE",{});var My=i(Zl);ew=s(My,"TFLongformerSelfAttention"),My.forEach(t),tw=s(ch,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),ch.forEach(t),ow=m(mt),Bt=a(mt,"DIV",{class:!0});var Mi=i(Bt);y(Hr.$$.fragment,Mi),nw=m(Mi),So=a(Mi,"P",{});var Ei=i(So);sw=s(Ei,"The "),ni=a(Ei,"A",{href:!0});var Ey=i(ni);rw=s(Ey,"TFLongformerModel"),Ey.forEach(t),aw=s(Ei," forward method, overrides the "),ed=a(Ei,"CODE",{});var zy=i(ed);iw=s(zy,"__call__"),zy.forEach(t),lw=s(Ei," special method."),Ei.forEach(t),dw=m(Mi),y(Un.$$.fragment,Mi),Mi.forEach(t),mt.forEach(t),om=m(o),Bo=a(o,"H2",{class:!0});var mh=i(Bo);Hn=a(mh,"A",{id:!0,class:!0,href:!0});var qy=i(Hn);td=a(qy,"SPAN",{});var jy=i(td);y(Kr.$$.fragment,jy),jy.forEach(t),qy.forEach(t),cw=m(mh),od=a(mh,"SPAN",{});var Cy=i(od);mw=s(Cy,"TFLongformerForMaskedLM"),Cy.forEach(t),mh.forEach(t),nm=m(o),rt=a(o,"DIV",{class:!0});var qt=i(rt);y(Rr.$$.fragment,qt),hw=m(qt),Vr=a(qt,"P",{});var hh=i(Vr);pw=s(hh,"Longformer Model with a "),nd=a(hh,"CODE",{});var Oy=i(nd);fw=s(Oy,"language modeling"),Oy.forEach(t),gw=s(hh," head on top."),hh.forEach(t),uw=m(qt),Gr=a(qt,"P",{});var ph=i(Gr);_w=s(ph,"This model inherits from "),si=a(ph,"A",{href:!0});var Py=i(si);ww=s(Py,"TFPreTrainedModel"),Py.forEach(t),kw=s(ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph.forEach(t),bw=m(qt),Jr=a(qt,"P",{});var fh=i(Jr);vw=s(fh,"This model is also a "),Xr=a(fh,"A",{href:!0,rel:!0});var Ny=i(Xr);yw=s(Ny,"tf.keras.Model"),Ny.forEach(t),Tw=s(fh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fh.forEach(t),$w=m(qt),y(Kn.$$.fragment,qt),Lw=m(qt),bt=a(qt,"DIV",{class:!0});var Jt=i(bt);y(Yr.$$.fragment,Jt),xw=m(Jt),Wo=a(Jt,"P",{});var zi=i(Wo);Fw=s(zi,"The "),ri=a(zi,"A",{href:!0});var Ay=i(ri);Mw=s(Ay,"TFLongformerForMaskedLM"),Ay.forEach(t),Ew=s(zi," forward method, overrides the "),sd=a(zi,"CODE",{});var Iy=i(sd);zw=s(Iy,"__call__"),Iy.forEach(t),qw=s(zi," special method."),zi.forEach(t),jw=m(Jt),y(Rn.$$.fragment,Jt),Cw=m(Jt),y(Vn.$$.fragment,Jt),Ow=m(Jt),y(Gn.$$.fragment,Jt),Jt.forEach(t),qt.forEach(t),sm=m(o),Qo=a(o,"H2",{class:!0});var gh=i(Qo);Jn=a(gh,"A",{id:!0,class:!0,href:!0});var Dy=i(Jn);rd=a(Dy,"SPAN",{});var Sy=i(rd);y(Zr.$$.fragment,Sy),Sy.forEach(t),Dy.forEach(t),Pw=m(gh),ad=a(gh,"SPAN",{});var By=i(ad);Nw=s(By,"TFLongformerForQuestionAnswering"),By.forEach(t),gh.forEach(t),rm=m(o),at=a(o,"DIV",{class:!0});var jt=i(at);y(ea.$$.fragment,jt),Aw=m(jt),Uo=a(jt,"P",{});var qi=i(Uo);Iw=s(qi,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),id=a(qi,"CODE",{});var Wy=i(id);Dw=s(Wy,"span start logits"),Wy.forEach(t),Sw=s(qi," and "),ld=a(qi,"CODE",{});var Qy=i(ld);Bw=s(Qy,"span end logits"),Qy.forEach(t),Ww=s(qi,")."),qi.forEach(t),Qw=m(jt),ta=a(jt,"P",{});var uh=i(ta);Uw=s(uh,"This model inherits from "),ai=a(uh,"A",{href:!0});var Uy=i(ai);Hw=s(Uy,"TFPreTrainedModel"),Uy.forEach(t),Kw=s(uh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uh.forEach(t),Rw=m(jt),oa=a(jt,"P",{});var _h=i(oa);Vw=s(_h,"This model is also a "),na=a(_h,"A",{href:!0,rel:!0});var Hy=i(na);Gw=s(Hy,"tf.keras.Model"),Hy.forEach(t),Jw=s(_h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_h.forEach(t),Xw=m(jt),y(Xn.$$.fragment,jt),Yw=m(jt),vt=a(jt,"DIV",{class:!0});var Xt=i(vt);y(sa.$$.fragment,Xt),Zw=m(Xt),Ho=a(Xt,"P",{});var ji=i(Ho);ek=s(ji,"The "),ii=a(ji,"A",{href:!0});var Ky=i(ii);tk=s(Ky,"TFLongformerForQuestionAnswering"),Ky.forEach(t),ok=s(ji," forward method, overrides the "),dd=a(ji,"CODE",{});var Ry=i(dd);nk=s(Ry,"__call__"),Ry.forEach(t),sk=s(ji," special method."),ji.forEach(t),rk=m(Xt),y(Yn.$$.fragment,Xt),ak=m(Xt),y(Zn.$$.fragment,Xt),ik=m(Xt),y(es.$$.fragment,Xt),Xt.forEach(t),jt.forEach(t),am=m(o),Ko=a(o,"H2",{class:!0});var wh=i(Ko);ts=a(wh,"A",{id:!0,class:!0,href:!0});var Vy=i(ts);cd=a(Vy,"SPAN",{});var Gy=i(cd);y(ra.$$.fragment,Gy),Gy.forEach(t),Vy.forEach(t),lk=m(wh),md=a(wh,"SPAN",{});var Jy=i(md);dk=s(Jy,"TFLongformerForSequenceClassification"),Jy.forEach(t),wh.forEach(t),im=m(o),it=a(o,"DIV",{class:!0});var Ct=i(it);y(aa.$$.fragment,Ct),ck=m(Ct),hd=a(Ct,"P",{});var Xy=i(hd);mk=s(Xy,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Xy.forEach(t),hk=m(Ct),ia=a(Ct,"P",{});var kh=i(ia);pk=s(kh,"This model inherits from "),li=a(kh,"A",{href:!0});var Yy=i(li);fk=s(Yy,"TFPreTrainedModel"),Yy.forEach(t),gk=s(kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh.forEach(t),uk=m(Ct),la=a(Ct,"P",{});var bh=i(la);_k=s(bh,"This model is also a "),da=a(bh,"A",{href:!0,rel:!0});var Zy=i(da);wk=s(Zy,"tf.keras.Model"),Zy.forEach(t),kk=s(bh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh.forEach(t),bk=m(Ct),y(os.$$.fragment,Ct),vk=m(Ct),yt=a(Ct,"DIV",{class:!0});var Yt=i(yt);y(ca.$$.fragment,Yt),yk=m(Yt),Ro=a(Yt,"P",{});var Ci=i(Ro);Tk=s(Ci,"The "),di=a(Ci,"A",{href:!0});var eT=i(di);$k=s(eT,"TFLongformerForSequenceClassification"),eT.forEach(t),Lk=s(Ci," forward method, overrides the "),pd=a(Ci,"CODE",{});var tT=i(pd);xk=s(tT,"__call__"),tT.forEach(t),Fk=s(Ci," special method."),Ci.forEach(t),Mk=m(Yt),y(ns.$$.fragment,Yt),Ek=m(Yt),y(ss.$$.fragment,Yt),zk=m(Yt),y(rs.$$.fragment,Yt),Yt.forEach(t),Ct.forEach(t),lm=m(o),Vo=a(o,"H2",{class:!0});var vh=i(Vo);as=a(vh,"A",{id:!0,class:!0,href:!0});var oT=i(as);fd=a(oT,"SPAN",{});var nT=i(fd);y(ma.$$.fragment,nT),nT.forEach(t),oT.forEach(t),qk=m(vh),gd=a(vh,"SPAN",{});var sT=i(gd);jk=s(sT,"TFLongformerForTokenClassification"),sT.forEach(t),vh.forEach(t),dm=m(o),lt=a(o,"DIV",{class:!0});var Ot=i(lt);y(ha.$$.fragment,Ot),Ck=m(Ot),ud=a(Ot,"P",{});var rT=i(ud);Ok=s(rT,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),rT.forEach(t),Pk=m(Ot),pa=a(Ot,"P",{});var yh=i(pa);Nk=s(yh,"This model inherits from "),ci=a(yh,"A",{href:!0});var aT=i(ci);Ak=s(aT,"TFPreTrainedModel"),aT.forEach(t),Ik=s(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),Dk=m(Ot),fa=a(Ot,"P",{});var Th=i(fa);Sk=s(Th,"This model is also a "),ga=a(Th,"A",{href:!0,rel:!0});var iT=i(ga);Bk=s(iT,"tf.keras.Model"),iT.forEach(t),Wk=s(Th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Th.forEach(t),Qk=m(Ot),y(is.$$.fragment,Ot),Uk=m(Ot),Tt=a(Ot,"DIV",{class:!0});var Zt=i(Tt);y(ua.$$.fragment,Zt),Hk=m(Zt),Go=a(Zt,"P",{});var Oi=i(Go);Kk=s(Oi,"The "),mi=a(Oi,"A",{href:!0});var lT=i(mi);Rk=s(lT,"TFLongformerForTokenClassification"),lT.forEach(t),Vk=s(Oi," forward method, overrides the "),_d=a(Oi,"CODE",{});var dT=i(_d);Gk=s(dT,"__call__"),dT.forEach(t),Jk=s(Oi," special method."),Oi.forEach(t),Xk=m(Zt),y(ls.$$.fragment,Zt),Yk=m(Zt),y(ds.$$.fragment,Zt),Zk=m(Zt),y(cs.$$.fragment,Zt),Zt.forEach(t),Ot.forEach(t),cm=m(o),Jo=a(o,"H2",{class:!0});var $h=i(Jo);ms=a($h,"A",{id:!0,class:!0,href:!0});var cT=i(ms);wd=a(cT,"SPAN",{});var mT=i(wd);y(_a.$$.fragment,mT),mT.forEach(t),cT.forEach(t),eb=m($h),kd=a($h,"SPAN",{});var hT=i(kd);tb=s(hT,"TFLongformerForMultipleChoice"),hT.forEach(t),$h.forEach(t),mm=m(o),dt=a(o,"DIV",{class:!0});var Pt=i(dt);y(wa.$$.fragment,Pt),ob=m(Pt),bd=a(Pt,"P",{});var pT=i(bd);nb=s(pT,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),pT.forEach(t),sb=m(Pt),ka=a(Pt,"P",{});var Lh=i(ka);rb=s(Lh,"This model inherits from "),hi=a(Lh,"A",{href:!0});var fT=i(hi);ab=s(fT,"TFPreTrainedModel"),fT.forEach(t),ib=s(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(t),lb=m(Pt),ba=a(Pt,"P",{});var xh=i(ba);db=s(xh,"This model is also a "),va=a(xh,"A",{href:!0,rel:!0});var gT=i(va);cb=s(gT,"tf.keras.Model"),gT.forEach(t),mb=s(xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xh.forEach(t),hb=m(Pt),y(hs.$$.fragment,Pt),pb=m(Pt),Et=a(Pt,"DIV",{class:!0});var ws=i(Et);y(ya.$$.fragment,ws),fb=m(ws),Xo=a(ws,"P",{});var Pi=i(Xo);gb=s(Pi,"The "),pi=a(Pi,"A",{href:!0});var uT=i(pi);ub=s(uT,"TFLongformerForMultipleChoice"),uT.forEach(t),_b=s(Pi," forward method, overrides the "),vd=a(Pi,"CODE",{});var _T=i(vd);wb=s(_T,"__call__"),_T.forEach(t),kb=s(Pi," special method."),Pi.forEach(t),bb=m(ws),y(ps.$$.fragment,ws),vb=m(ws),y(fs.$$.fragment,ws),ws.forEach(t),Pt.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(_1)),u(_,"id","longformer"),u(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_,"href","#longformer"),u(h,"class","relative group"),u(ie,"id","overview"),u(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ie,"href","#overview"),u(A,"class","relative group"),u(de,"href","https://arxiv.org/pdf/2004.05150.pdf"),u(de,"rel","nofollow"),u(ce,"href","https://huggingface.co/beltagy"),u(ce,"rel","nofollow"),u(Z,"href","https://github.com/allenai/longformer"),u(Z,"rel","nofollow"),u(le,"id","longformer-self-attention"),u(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(le,"href","#longformer-self-attention"),u(re,"class","relative group"),De.a=Se,Be.a=R,We.a=V,ec.a=tc,nc.a=sc,u(Ea,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel.forward"),dc.a=cc,mc.a=hc,pc.a=fc,gc.a=uc,u(ks,"href","https://arxiv.org/pdf/2004.05150.pdf"),u(ks,"rel","nofollow"),u(an,"id","training"),u(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(an,"href","#training"),u(eo,"class","relative group"),u(za,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),u(qa,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),u(ln,"id","transformers.LongformerConfig"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.LongformerConfig"),u(oo,"class","relative group"),u(ja,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),u(Ca,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),u(Oa,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),u($s,"href","https://huggingface.co/allenai/longformer-base-4096"),u($s,"rel","nofollow"),u(Pa,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig"),u(Na,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"id","transformers.LongformerTokenizer"),u(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cn,"href","#transformers.LongformerTokenizer"),u(ao,"class","relative group"),u(Aa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(un,"id","transformers.LongformerTokenizerFast"),u(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(un,"href","#transformers.LongformerTokenizerFast"),u(io,"class","relative group"),u(Sa,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizerFast"),u(Ba,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wn,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),u(lo,"class","relative group"),u(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.LongformerModel"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.LongformerModel"),u($o,"class","relative group"),u(Wa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(nr,"rel","nofollow"),u(Qa,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),u(sr,"href","https://arxiv.org/abs/2004.05150"),u(sr,"rel","nofollow"),u(Ua,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"id","transformers.LongformerForMaskedLM"),u(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yn,"href","#transformers.LongformerForMaskedLM"),u(Fo,"class","relative group"),u(Ha,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(hr,"rel","nofollow"),u(Ka,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.LongformerForSequenceClassification"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.LongformerForSequenceClassification"),u(Eo,"class","relative group"),u(Ra,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wr,"rel","nofollow"),u(Va,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.LongformerForMultipleChoice"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.LongformerForMultipleChoice"),u(qo,"class","relative group"),u(Ga,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u($r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($r,"rel","nofollow"),u(Ja,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.LongformerForTokenClassification"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.LongformerForTokenClassification"),u(Co,"class","relative group"),u(Xa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(zr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(zr,"rel","nofollow"),u(Ya,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForTokenClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dn,"id","transformers.LongformerForQuestionAnswering"),u(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dn,"href","#transformers.LongformerForQuestionAnswering"),u(Po,"class","relative group"),u(Za,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Nr,"rel","nofollow"),u(ei,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.TFLongformerModel"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.TFLongformerModel"),u(Io,"class","relative group"),u(ti,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wr,"rel","nofollow"),u(oi,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),u(Qr,"href","https://arxiv.org/abs/2004.05150"),u(Qr,"rel","nofollow"),u(ni,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.TFLongformerForMaskedLM"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.TFLongformerForMaskedLM"),u(Bo,"class","relative group"),u(si,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Xr,"rel","nofollow"),u(ri,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"id","transformers.TFLongformerForQuestionAnswering"),u(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jn,"href","#transformers.TFLongformerForQuestionAnswering"),u(Qo,"class","relative group"),u(ai,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(na,"rel","nofollow"),u(ii,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ts,"id","transformers.TFLongformerForSequenceClassification"),u(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ts,"href","#transformers.TFLongformerForSequenceClassification"),u(Ko,"class","relative group"),u(li,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(da,"rel","nofollow"),u(di,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(as,"id","transformers.TFLongformerForTokenClassification"),u(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(as,"href","#transformers.TFLongformerForTokenClassification"),u(Vo,"class","relative group"),u(ci,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ga,"rel","nofollow"),u(mi,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.TFLongformerForMultipleChoice"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.TFLongformerForMultipleChoice"),u(Jo,"class","relative group"),u(hi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(va,"rel","nofollow"),u(pi,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),f(o,k,g),f(o,h,g),e(h,_),e(_,b),T(d,b,null),e(h,p),e(h,q),e(q,ke),f(o,pe,g),f(o,A,g),e(A,ie),e(ie,ee),T(F,ee,null),e(A,be),e(A,H),e(H,ve),f(o,fe,g),f(o,S,g),e(S,ye),e(S,de),e(de,G),e(S,Te),f(o,ge,g),f(o,W,g),e(W,$e),f(o,ue,g),f(o,Q,g),e(Q,me),e(me,Le),f(o,ne,g),f(o,j,g),e(j,O),f(o,_e,g),f(o,U,g),e(U,te),e(te,xe),e(te,K),e(K,Fe),e(te,Me),e(te,C),e(C,Ee),e(te,J),e(te,he),e(he,ze),e(te,X),f(o,we,g),f(o,se,g),e(se,I),e(se,ce),e(ce,Y),e(se,qe),e(se,Z),e(Z,P),e(se,je),f(o,N,g),f(o,re,g),e(re,le),e(le,w),T(E,w,null),e(re,Ke),e(re,oe),e(oe,Re),f(o,Ie,g),f(o,M,g),e(M,Ve),De.m(et,M),e(M,Se),Be.m(B,M),e(M,R),We.m(tt,M),e(M,V),e(M,Pe),e(Pe,Ge),e(M,Ce),e(M,Ne),e(Ne,ae),e(M,Je),e(M,Ni),e(Ni,Fh),e(M,Mh),ec.m(wT,M),e(M,tc),e(M,Ai),e(Ai,Eh),e(M,zh),f(o,oc,g),f(o,It,g),e(It,qh),nc.m(kT,It),e(It,sc),e(It,Ii),e(Ii,jh),e(It,Ch),f(o,rc,g),f(o,Dt,g),e(Dt,Oh),e(Dt,Di),e(Di,Ph),e(Dt,Nh),e(Dt,Si),e(Si,Ah),e(Dt,Ih),f(o,ac,g),f(o,nn,g),e(nn,Bi),e(Bi,Dh),e(nn,Sh),e(nn,Wi),e(Wi,Bh),f(o,ic,g),f(o,sn,g),e(sn,Wh),e(sn,Ea),e(Ea,Qh),e(sn,Uh),f(o,lc,g),f(o,wt,g),e(wt,Hh),dc.m(bT,wt),e(wt,cc),mc.m(vT,wt),e(wt,hc),pc.m(yT,wt),e(wt,fc),gc.m(TT,wt),e(wt,uc),f(o,_c,g),f(o,rn,g),e(rn,Kh),e(rn,ks),e(ks,Rh),e(rn,Vh),f(o,wc,g),f(o,eo,g),e(eo,an),e(an,Qi),T(bs,Qi,null),e(eo,Gh),e(eo,Ui),e(Ui,Jh),f(o,kc,g),f(o,to,g),e(to,za),e(za,Xh),e(to,Yh),e(to,qa),e(qa,Zh),e(to,ep),f(o,bc,g),T(vs,o,g),f(o,vc,g),f(o,oo,g),e(oo,ln),e(ln,Hi),T(ys,Hi,null),e(oo,tp),e(oo,Ki),e(Ki,op),f(o,yc,g),f(o,ht,g),T(Ts,ht,null),e(ht,np),e(ht,no),e(no,sp),e(no,ja),e(ja,rp),e(no,ap),e(no,Ca),e(Ca,ip),e(no,lp),e(ht,dp),e(ht,so),e(so,cp),e(so,Oa),e(Oa,mp),e(so,hp),e(so,$s),e($s,pp),e(so,fp),e(ht,gp),e(ht,ro),e(ro,up),e(ro,Pa),e(Pa,_p),e(ro,wp),e(ro,Na),e(Na,kp),e(ro,bp),e(ht,vp),T(dn,ht,null),f(o,Tc,g),f(o,ao,g),e(ao,cn),e(cn,Ri),T(Ls,Ri,null),e(ao,yp),e(ao,Vi),e(Vi,Tp),f(o,$c,g),f(o,Oe,g),T(xs,Oe,null),e(Oe,$p),e(Oe,Gi),e(Gi,Lp),e(Oe,xp),e(Oe,Ji),e(Ji,Fp),e(Oe,Mp),T(mn,Oe,null),e(Oe,Ep),e(Oe,Fs),e(Fs,zp),e(Fs,Xi),e(Xi,qp),e(Fs,jp),e(Oe,Cp),T(hn,Oe,null),e(Oe,Op),e(Oe,Ms),e(Ms,Pp),e(Ms,Aa),e(Aa,Np),e(Ms,Ap),e(Oe,Ip),e(Oe,St),T(Es,St,null),e(St,Dp),e(St,Yi),e(Yi,Sp),e(St,Bp),e(St,zs),e(zs,Ia),e(Ia,Wp),e(Ia,Zi),e(Zi,Qp),e(zs,Up),e(zs,Da),e(Da,Hp),e(Da,el),e(el,Kp),e(Oe,Rp),e(Oe,pn),T(qs,pn,null),e(pn,Vp),e(pn,tl),e(tl,Gp),e(Oe,Jp),e(Oe,fn),T(js,fn,null),e(fn,Xp),e(fn,ol),e(ol,Yp),e(Oe,Zp),e(Oe,gn),T(Cs,gn,null),e(gn,ef),e(gn,Os),e(Os,tf),e(Os,nl),e(nl,of),e(Os,nf),f(o,Lc,g),f(o,io,g),e(io,un),e(un,sl),T(Ps,sl,null),e(io,sf),e(io,rl),e(rl,rf),f(o,xc,g),f(o,Nt,g),T(Ns,Nt,null),e(Nt,af),e(Nt,As),e(As,lf),e(As,al),e(al,df),e(As,cf),e(Nt,mf),e(Nt,_n),e(_n,Sa),e(Sa,hf),e(_n,pf),e(_n,Ba),e(Ba,ff),e(_n,gf),f(o,Fc,g),f(o,lo,g),e(lo,wn),e(wn,il),T(Is,il,null),e(lo,uf),e(lo,ll),e(ll,_f),f(o,Mc,g),f(o,co,g),T(Ds,co,null),e(co,wf),e(co,dl),e(dl,kf),f(o,Ec,g),f(o,mo,g),T(Ss,mo,null),e(mo,bf),e(mo,cl),e(cl,vf),f(o,zc,g),f(o,ho,g),T(Bs,ho,null),e(ho,yf),e(ho,ml),e(ml,Tf),f(o,qc,g),f(o,po,g),T(Ws,po,null),e(po,$f),e(po,hl),e(hl,Lf),f(o,jc,g),f(o,fo,g),T(Qs,fo,null),e(fo,xf),e(fo,pl),e(pl,Ff),f(o,Cc,g),f(o,go,g),T(Us,go,null),e(go,Mf),e(go,fl),e(fl,Ef),f(o,Oc,g),f(o,uo,g),T(Hs,uo,null),e(uo,zf),e(uo,gl),e(gl,qf),f(o,Pc,g),f(o,_o,g),T(Ks,_o,null),e(_o,jf),e(_o,ul),e(ul,Cf),f(o,Nc,g),f(o,wo,g),T(Rs,wo,null),e(wo,Of),e(wo,_l),e(_l,Pf),f(o,Ac,g),f(o,ko,g),T(Vs,ko,null),e(ko,Nf),e(ko,wl),e(wl,Af),f(o,Ic,g),f(o,bo,g),T(Gs,bo,null),e(bo,If),e(bo,kl),e(kl,Df),f(o,Dc,g),f(o,vo,g),T(Js,vo,null),e(vo,Sf),e(vo,bl),e(bl,Bf),f(o,Sc,g),f(o,yo,g),T(Xs,yo,null),e(yo,Wf),e(yo,vl),e(vl,Qf),f(o,Bc,g),f(o,To,g),T(Ys,To,null),e(To,Uf),e(To,yl),e(yl,Hf),f(o,Wc,g),f(o,$o,g),e($o,kn),e(kn,Tl),T(Zs,Tl,null),e($o,Kf),e($o,$l),e($l,Rf),f(o,Qc,g),f(o,ot,g),T(er,ot,null),e(ot,Vf),e(ot,Ll),e(Ll,Gf),e(ot,Jf),e(ot,tr),e(tr,Xf),e(tr,Wa),e(Wa,Yf),e(tr,Zf),e(ot,eg),e(ot,or),e(or,tg),e(or,nr),e(nr,og),e(or,ng),e(ot,sg),e(ot,Lo),e(Lo,rg),e(Lo,Qa),e(Qa,ag),e(Lo,ig),e(Lo,sr),e(sr,lg),e(Lo,dg),e(ot,cg),e(ot,rr),e(rr,mg),e(rr,xl),e(xl,hg),e(rr,pg),e(ot,fg),e(ot,xt),T(ar,xt,null),e(xt,gg),e(xt,xo),e(xo,ug),e(xo,Ua),e(Ua,_g),e(xo,wg),e(xo,Fl),e(Fl,kg),e(xo,bg),e(xt,vg),T(bn,xt,null),e(xt,yg),T(vn,xt,null),f(o,Uc,g),f(o,Fo,g),e(Fo,yn),e(yn,Ml),T(ir,Ml,null),e(Fo,Tg),e(Fo,El),e(El,$g),f(o,Hc,g),f(o,pt,g),T(lr,pt,null),e(pt,Lg),e(pt,dr),e(dr,xg),e(dr,zl),e(zl,Fg),e(dr,Mg),e(pt,Eg),e(pt,cr),e(cr,zg),e(cr,Ha),e(Ha,qg),e(cr,jg),e(pt,Cg),e(pt,mr),e(mr,Og),e(mr,hr),e(hr,Pg),e(mr,Ng),e(pt,Ag),e(pt,ct),T(pr,ct,null),e(ct,Ig),e(ct,Mo),e(Mo,Dg),e(Mo,Ka),e(Ka,Sg),e(Mo,Bg),e(Mo,ql),e(ql,Wg),e(Mo,Qg),e(ct,Ug),T(Tn,ct,null),e(ct,Hg),T($n,ct,null),e(ct,Kg),e(ct,jl),e(jl,Rg),e(ct,Vg),T(Ln,ct,null),f(o,Kc,g),f(o,Eo,g),e(Eo,xn),e(xn,Cl),T(fr,Cl,null),e(Eo,Gg),e(Eo,Ol),e(Ol,Jg),f(o,Rc,g),f(o,ft,g),T(gr,ft,null),e(ft,Xg),e(ft,Pl),e(Pl,Yg),e(ft,Zg),e(ft,ur),e(ur,eu),e(ur,Ra),e(Ra,tu),e(ur,ou),e(ft,nu),e(ft,_r),e(_r,su),e(_r,wr),e(wr,ru),e(_r,au),e(ft,iu),e(ft,st),T(kr,st,null),e(st,lu),e(st,zo),e(zo,du),e(zo,Va),e(Va,cu),e(zo,mu),e(zo,Nl),e(Nl,hu),e(zo,pu),e(st,fu),T(Fn,st,null),e(st,gu),T(Mn,st,null),e(st,uu),T(En,st,null),e(st,_u),T(zn,st,null),e(st,wu),T(qn,st,null),f(o,Vc,g),f(o,qo,g),e(qo,jn),e(jn,Al),T(br,Al,null),e(qo,ku),e(qo,Il),e(Il,bu),f(o,Gc,g),f(o,gt,g),T(vr,gt,null),e(gt,vu),e(gt,Dl),e(Dl,yu),e(gt,Tu),e(gt,yr),e(yr,$u),e(yr,Ga),e(Ga,Lu),e(yr,xu),e(gt,Fu),e(gt,Tr),e(Tr,Mu),e(Tr,$r),e($r,Eu),e(Tr,zu),e(gt,qu),e(gt,Ft),T(Lr,Ft,null),e(Ft,ju),e(Ft,jo),e(jo,Cu),e(jo,Ja),e(Ja,Ou),e(jo,Pu),e(jo,Sl),e(Sl,Nu),e(jo,Au),e(Ft,Iu),T(Cn,Ft,null),e(Ft,Du),T(On,Ft,null),f(o,Jc,g),f(o,Co,g),e(Co,Pn),e(Pn,Bl),T(xr,Bl,null),e(Co,Su),e(Co,Wl),e(Wl,Bu),f(o,Xc,g),f(o,ut,g),T(Fr,ut,null),e(ut,Wu),e(ut,Ql),e(Ql,Qu),e(ut,Uu),e(ut,Mr),e(Mr,Hu),e(Mr,Xa),e(Xa,Ku),e(Mr,Ru),e(ut,Vu),e(ut,Er),e(Er,Gu),e(Er,zr),e(zr,Ju),e(Er,Xu),e(ut,Yu),e(ut,kt),T(qr,kt,null),e(kt,Zu),e(kt,Oo),e(Oo,e_),e(Oo,Ya),e(Ya,t_),e(Oo,o_),e(Oo,Ul),e(Ul,n_),e(Oo,s_),e(kt,r_),T(Nn,kt,null),e(kt,a_),T(An,kt,null),e(kt,i_),T(In,kt,null),f(o,Yc,g),f(o,Po,g),e(Po,Dn),e(Dn,Hl),T(jr,Hl,null),e(Po,l_),e(Po,Kl),e(Kl,d_),f(o,Zc,g),f(o,_t,g),T(Cr,_t,null),e(_t,c_),e(_t,No),e(No,m_),e(No,Rl),e(Rl,h_),e(No,p_),e(No,Vl),e(Vl,f_),e(No,g_),e(_t,u_),e(_t,Or),e(Or,__),e(Or,Za),e(Za,w_),e(Or,k_),e(_t,b_),e(_t,Pr),e(Pr,v_),e(Pr,Nr),e(Nr,y_),e(Pr,T_),e(_t,$_),e(_t,Mt),T(Ar,Mt,null),e(Mt,L_),e(Mt,Ao),e(Ao,x_),e(Ao,ei),e(ei,F_),e(Ao,M_),e(Ao,Gl),e(Gl,E_),e(Ao,z_),e(Mt,q_),T(Sn,Mt,null),e(Mt,j_),T(Bn,Mt,null),f(o,em,g),f(o,Io,g),e(Io,Wn),e(Wn,Jl),T(Ir,Jl,null),e(Io,C_),e(Io,Xl),e(Xl,O_),f(o,tm,g),f(o,Xe,g),T(Dr,Xe,null),e(Xe,P_),e(Xe,Yl),e(Yl,N_),e(Xe,A_),e(Xe,Sr),e(Sr,I_),e(Sr,ti),e(ti,D_),e(Sr,S_),e(Xe,B_),e(Xe,Br),e(Br,W_),e(Br,Wr),e(Wr,Q_),e(Br,U_),e(Xe,H_),T(Qn,Xe,null),e(Xe,K_),e(Xe,Do),e(Do,R_),e(Do,oi),e(oi,V_),e(Do,G_),e(Do,Qr),e(Qr,J_),e(Do,X_),e(Xe,Y_),e(Xe,Ur),e(Ur,Z_),e(Ur,Zl),e(Zl,ew),e(Ur,tw),e(Xe,ow),e(Xe,Bt),T(Hr,Bt,null),e(Bt,nw),e(Bt,So),e(So,sw),e(So,ni),e(ni,rw),e(So,aw),e(So,ed),e(ed,iw),e(So,lw),e(Bt,dw),T(Un,Bt,null),f(o,om,g),f(o,Bo,g),e(Bo,Hn),e(Hn,td),T(Kr,td,null),e(Bo,cw),e(Bo,od),e(od,mw),f(o,nm,g),f(o,rt,g),T(Rr,rt,null),e(rt,hw),e(rt,Vr),e(Vr,pw),e(Vr,nd),e(nd,fw),e(Vr,gw),e(rt,uw),e(rt,Gr),e(Gr,_w),e(Gr,si),e(si,ww),e(Gr,kw),e(rt,bw),e(rt,Jr),e(Jr,vw),e(Jr,Xr),e(Xr,yw),e(Jr,Tw),e(rt,$w),T(Kn,rt,null),e(rt,Lw),e(rt,bt),T(Yr,bt,null),e(bt,xw),e(bt,Wo),e(Wo,Fw),e(Wo,ri),e(ri,Mw),e(Wo,Ew),e(Wo,sd),e(sd,zw),e(Wo,qw),e(bt,jw),T(Rn,bt,null),e(bt,Cw),T(Vn,bt,null),e(bt,Ow),T(Gn,bt,null),f(o,sm,g),f(o,Qo,g),e(Qo,Jn),e(Jn,rd),T(Zr,rd,null),e(Qo,Pw),e(Qo,ad),e(ad,Nw),f(o,rm,g),f(o,at,g),T(ea,at,null),e(at,Aw),e(at,Uo),e(Uo,Iw),e(Uo,id),e(id,Dw),e(Uo,Sw),e(Uo,ld),e(ld,Bw),e(Uo,Ww),e(at,Qw),e(at,ta),e(ta,Uw),e(ta,ai),e(ai,Hw),e(ta,Kw),e(at,Rw),e(at,oa),e(oa,Vw),e(oa,na),e(na,Gw),e(oa,Jw),e(at,Xw),T(Xn,at,null),e(at,Yw),e(at,vt),T(sa,vt,null),e(vt,Zw),e(vt,Ho),e(Ho,ek),e(Ho,ii),e(ii,tk),e(Ho,ok),e(Ho,dd),e(dd,nk),e(Ho,sk),e(vt,rk),T(Yn,vt,null),e(vt,ak),T(Zn,vt,null),e(vt,ik),T(es,vt,null),f(o,am,g),f(o,Ko,g),e(Ko,ts),e(ts,cd),T(ra,cd,null),e(Ko,lk),e(Ko,md),e(md,dk),f(o,im,g),f(o,it,g),T(aa,it,null),e(it,ck),e(it,hd),e(hd,mk),e(it,hk),e(it,ia),e(ia,pk),e(ia,li),e(li,fk),e(ia,gk),e(it,uk),e(it,la),e(la,_k),e(la,da),e(da,wk),e(la,kk),e(it,bk),T(os,it,null),e(it,vk),e(it,yt),T(ca,yt,null),e(yt,yk),e(yt,Ro),e(Ro,Tk),e(Ro,di),e(di,$k),e(Ro,Lk),e(Ro,pd),e(pd,xk),e(Ro,Fk),e(yt,Mk),T(ns,yt,null),e(yt,Ek),T(ss,yt,null),e(yt,zk),T(rs,yt,null),f(o,lm,g),f(o,Vo,g),e(Vo,as),e(as,fd),T(ma,fd,null),e(Vo,qk),e(Vo,gd),e(gd,jk),f(o,dm,g),f(o,lt,g),T(ha,lt,null),e(lt,Ck),e(lt,ud),e(ud,Ok),e(lt,Pk),e(lt,pa),e(pa,Nk),e(pa,ci),e(ci,Ak),e(pa,Ik),e(lt,Dk),e(lt,fa),e(fa,Sk),e(fa,ga),e(ga,Bk),e(fa,Wk),e(lt,Qk),T(is,lt,null),e(lt,Uk),e(lt,Tt),T(ua,Tt,null),e(Tt,Hk),e(Tt,Go),e(Go,Kk),e(Go,mi),e(mi,Rk),e(Go,Vk),e(Go,_d),e(_d,Gk),e(Go,Jk),e(Tt,Xk),T(ls,Tt,null),e(Tt,Yk),T(ds,Tt,null),e(Tt,Zk),T(cs,Tt,null),f(o,cm,g),f(o,Jo,g),e(Jo,ms),e(ms,wd),T(_a,wd,null),e(Jo,eb),e(Jo,kd),e(kd,tb),f(o,mm,g),f(o,dt,g),T(wa,dt,null),e(dt,ob),e(dt,bd),e(bd,nb),e(dt,sb),e(dt,ka),e(ka,rb),e(ka,hi),e(hi,ab),e(ka,ib),e(dt,lb),e(dt,ba),e(ba,db),e(ba,va),e(va,cb),e(ba,mb),e(dt,hb),T(hs,dt,null),e(dt,pb),e(dt,Et),T(ya,Et,null),e(Et,fb),e(Et,Xo),e(Xo,gb),e(Xo,pi),e(pi,ub),e(Xo,_b),e(Xo,vd),e(vd,wb),e(Xo,kb),e(Et,bb),T(ps,Et,null),e(Et,vb),T(fs,Et,null),hm=!0},p(o,[g]){const Ta={};g&2&&(Ta.$$scope={dirty:g,ctx:o}),dn.$set(Ta);const yd={};g&2&&(yd.$$scope={dirty:g,ctx:o}),mn.$set(yd);const Td={};g&2&&(Td.$$scope={dirty:g,ctx:o}),hn.$set(Td);const $d={};g&2&&($d.$$scope={dirty:g,ctx:o}),bn.$set($d);const $a={};g&2&&($a.$$scope={dirty:g,ctx:o}),vn.$set($a);const Ld={};g&2&&(Ld.$$scope={dirty:g,ctx:o}),Tn.$set(Ld);const xd={};g&2&&(xd.$$scope={dirty:g,ctx:o}),$n.$set(xd);const Fd={};g&2&&(Fd.$$scope={dirty:g,ctx:o}),Ln.$set(Fd);const La={};g&2&&(La.$$scope={dirty:g,ctx:o}),Fn.$set(La);const Md={};g&2&&(Md.$$scope={dirty:g,ctx:o}),Mn.$set(Md);const Ed={};g&2&&(Ed.$$scope={dirty:g,ctx:o}),En.$set(Ed);const zd={};g&2&&(zd.$$scope={dirty:g,ctx:o}),zn.$set(zd);const qd={};g&2&&(qd.$$scope={dirty:g,ctx:o}),qn.$set(qd);const jd={};g&2&&(jd.$$scope={dirty:g,ctx:o}),Cn.$set(jd);const Cd={};g&2&&(Cd.$$scope={dirty:g,ctx:o}),On.$set(Cd);const At={};g&2&&(At.$$scope={dirty:g,ctx:o}),Nn.$set(At);const Od={};g&2&&(Od.$$scope={dirty:g,ctx:o}),An.$set(Od);const Pd={};g&2&&(Pd.$$scope={dirty:g,ctx:o}),In.$set(Pd);const Nd={};g&2&&(Nd.$$scope={dirty:g,ctx:o}),Sn.$set(Nd);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:o}),Bn.$set(Yo);const Ad={};g&2&&(Ad.$$scope={dirty:g,ctx:o}),Qn.$set(Ad);const Id={};g&2&&(Id.$$scope={dirty:g,ctx:o}),Un.$set(Id);const xa={};g&2&&(xa.$$scope={dirty:g,ctx:o}),Kn.$set(xa);const Dd={};g&2&&(Dd.$$scope={dirty:g,ctx:o}),Rn.$set(Dd);const Sd={};g&2&&(Sd.$$scope={dirty:g,ctx:o}),Vn.$set(Sd);const Bd={};g&2&&(Bd.$$scope={dirty:g,ctx:o}),Gn.$set(Bd);const Ye={};g&2&&(Ye.$$scope={dirty:g,ctx:o}),Xn.$set(Ye);const Wd={};g&2&&(Wd.$$scope={dirty:g,ctx:o}),Yn.$set(Wd);const Qd={};g&2&&(Qd.$$scope={dirty:g,ctx:o}),Zn.$set(Qd);const Ud={};g&2&&(Ud.$$scope={dirty:g,ctx:o}),es.$set(Ud);const Hd={};g&2&&(Hd.$$scope={dirty:g,ctx:o}),os.$set(Hd);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:o}),ns.$set(Zo);const Kd={};g&2&&(Kd.$$scope={dirty:g,ctx:o}),ss.$set(Kd);const en={};g&2&&(en.$$scope={dirty:g,ctx:o}),rs.$set(en);const Rd={};g&2&&(Rd.$$scope={dirty:g,ctx:o}),is.$set(Rd);const Vd={};g&2&&(Vd.$$scope={dirty:g,ctx:o}),ls.$set(Vd);const Fa={};g&2&&(Fa.$$scope={dirty:g,ctx:o}),ds.$set(Fa);const Gd={};g&2&&(Gd.$$scope={dirty:g,ctx:o}),cs.$set(Gd);const Jd={};g&2&&(Jd.$$scope={dirty:g,ctx:o}),hs.$set(Jd);const Ma={};g&2&&(Ma.$$scope={dirty:g,ctx:o}),ps.$set(Ma);const Xd={};g&2&&(Xd.$$scope={dirty:g,ctx:o}),fs.$set(Xd)},i(o){hm||($(d.$$.fragment,o),$(F.$$.fragment,o),$(E.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$(Ts.$$.fragment,o),$(dn.$$.fragment,o),$(Ls.$$.fragment,o),$(xs.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(Es.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(Ps.$$.fragment,o),$(Ns.$$.fragment,o),$(Is.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(Bs.$$.fragment,o),$(Ws.$$.fragment,o),$(Qs.$$.fragment,o),$(Us.$$.fragment,o),$(Hs.$$.fragment,o),$(Ks.$$.fragment,o),$(Rs.$$.fragment,o),$(Vs.$$.fragment,o),$(Gs.$$.fragment,o),$(Js.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(er.$$.fragment,o),$(ar.$$.fragment,o),$(bn.$$.fragment,o),$(vn.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(pr.$$.fragment,o),$(Tn.$$.fragment,o),$($n.$$.fragment,o),$(Ln.$$.fragment,o),$(fr.$$.fragment,o),$(gr.$$.fragment,o),$(kr.$$.fragment,o),$(Fn.$$.fragment,o),$(Mn.$$.fragment,o),$(En.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(br.$$.fragment,o),$(vr.$$.fragment,o),$(Lr.$$.fragment,o),$(Cn.$$.fragment,o),$(On.$$.fragment,o),$(xr.$$.fragment,o),$(Fr.$$.fragment,o),$(qr.$$.fragment,o),$(Nn.$$.fragment,o),$(An.$$.fragment,o),$(In.$$.fragment,o),$(jr.$$.fragment,o),$(Cr.$$.fragment,o),$(Ar.$$.fragment,o),$(Sn.$$.fragment,o),$(Bn.$$.fragment,o),$(Ir.$$.fragment,o),$(Dr.$$.fragment,o),$(Qn.$$.fragment,o),$(Hr.$$.fragment,o),$(Un.$$.fragment,o),$(Kr.$$.fragment,o),$(Rr.$$.fragment,o),$(Kn.$$.fragment,o),$(Yr.$$.fragment,o),$(Rn.$$.fragment,o),$(Vn.$$.fragment,o),$(Gn.$$.fragment,o),$(Zr.$$.fragment,o),$(ea.$$.fragment,o),$(Xn.$$.fragment,o),$(sa.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ra.$$.fragment,o),$(aa.$$.fragment,o),$(os.$$.fragment,o),$(ca.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(ma.$$.fragment,o),$(ha.$$.fragment,o),$(is.$$.fragment,o),$(ua.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(_a.$$.fragment,o),$(wa.$$.fragment,o),$(hs.$$.fragment,o),$(ya.$$.fragment,o),$(ps.$$.fragment,o),$(fs.$$.fragment,o),hm=!0)},o(o){L(d.$$.fragment,o),L(F.$$.fragment,o),L(E.$$.fragment,o),L(bs.$$.fragment,o),L(vs.$$.fragment,o),L(ys.$$.fragment,o),L(Ts.$$.fragment,o),L(dn.$$.fragment,o),L(Ls.$$.fragment,o),L(xs.$$.fragment,o),L(mn.$$.fragment,o),L(hn.$$.fragment,o),L(Es.$$.fragment,o),L(qs.$$.fragment,o),L(js.$$.fragment,o),L(Cs.$$.fragment,o),L(Ps.$$.fragment,o),L(Ns.$$.fragment,o),L(Is.$$.fragment,o),L(Ds.$$.fragment,o),L(Ss.$$.fragment,o),L(Bs.$$.fragment,o),L(Ws.$$.fragment,o),L(Qs.$$.fragment,o),L(Us.$$.fragment,o),L(Hs.$$.fragment,o),L(Ks.$$.fragment,o),L(Rs.$$.fragment,o),L(Vs.$$.fragment,o),L(Gs.$$.fragment,o),L(Js.$$.fragment,o),L(Xs.$$.fragment,o),L(Ys.$$.fragment,o),L(Zs.$$.fragment,o),L(er.$$.fragment,o),L(ar.$$.fragment,o),L(bn.$$.fragment,o),L(vn.$$.fragment,o),L(ir.$$.fragment,o),L(lr.$$.fragment,o),L(pr.$$.fragment,o),L(Tn.$$.fragment,o),L($n.$$.fragment,o),L(Ln.$$.fragment,o),L(fr.$$.fragment,o),L(gr.$$.fragment,o),L(kr.$$.fragment,o),L(Fn.$$.fragment,o),L(Mn.$$.fragment,o),L(En.$$.fragment,o),L(zn.$$.fragment,o),L(qn.$$.fragment,o),L(br.$$.fragment,o),L(vr.$$.fragment,o),L(Lr.$$.fragment,o),L(Cn.$$.fragment,o),L(On.$$.fragment,o),L(xr.$$.fragment,o),L(Fr.$$.fragment,o),L(qr.$$.fragment,o),L(Nn.$$.fragment,o),L(An.$$.fragment,o),L(In.$$.fragment,o),L(jr.$$.fragment,o),L(Cr.$$.fragment,o),L(Ar.$$.fragment,o),L(Sn.$$.fragment,o),L(Bn.$$.fragment,o),L(Ir.$$.fragment,o),L(Dr.$$.fragment,o),L(Qn.$$.fragment,o),L(Hr.$$.fragment,o),L(Un.$$.fragment,o),L(Kr.$$.fragment,o),L(Rr.$$.fragment,o),L(Kn.$$.fragment,o),L(Yr.$$.fragment,o),L(Rn.$$.fragment,o),L(Vn.$$.fragment,o),L(Gn.$$.fragment,o),L(Zr.$$.fragment,o),L(ea.$$.fragment,o),L(Xn.$$.fragment,o),L(sa.$$.fragment,o),L(Yn.$$.fragment,o),L(Zn.$$.fragment,o),L(es.$$.fragment,o),L(ra.$$.fragment,o),L(aa.$$.fragment,o),L(os.$$.fragment,o),L(ca.$$.fragment,o),L(ns.$$.fragment,o),L(ss.$$.fragment,o),L(rs.$$.fragment,o),L(ma.$$.fragment,o),L(ha.$$.fragment,o),L(is.$$.fragment,o),L(ua.$$.fragment,o),L(ls.$$.fragment,o),L(ds.$$.fragment,o),L(cs.$$.fragment,o),L(_a.$$.fragment,o),L(wa.$$.fragment,o),L(hs.$$.fragment,o),L(ya.$$.fragment,o),L(ps.$$.fragment,o),L(fs.$$.fragment,o),hm=!1},d(o){t(l),o&&t(k),o&&t(h),x(d),o&&t(pe),o&&t(A),x(F),o&&t(fe),o&&t(S),o&&t(ge),o&&t(W),o&&t(ue),o&&t(Q),o&&t(ne),o&&t(j),o&&t(_e),o&&t(U),o&&t(we),o&&t(se),o&&t(N),o&&t(re),x(E),o&&t(Ie),o&&t(M),o&&t(oc),o&&t(It),o&&t(rc),o&&t(Dt),o&&t(ac),o&&t(nn),o&&t(ic),o&&t(sn),o&&t(lc),o&&t(wt),o&&t(_c),o&&t(rn),o&&t(wc),o&&t(eo),x(bs),o&&t(kc),o&&t(to),o&&t(bc),x(vs,o),o&&t(vc),o&&t(oo),x(ys),o&&t(yc),o&&t(ht),x(Ts),x(dn),o&&t(Tc),o&&t(ao),x(Ls),o&&t($c),o&&t(Oe),x(xs),x(mn),x(hn),x(Es),x(qs),x(js),x(Cs),o&&t(Lc),o&&t(io),x(Ps),o&&t(xc),o&&t(Nt),x(Ns),o&&t(Fc),o&&t(lo),x(Is),o&&t(Mc),o&&t(co),x(Ds),o&&t(Ec),o&&t(mo),x(Ss),o&&t(zc),o&&t(ho),x(Bs),o&&t(qc),o&&t(po),x(Ws),o&&t(jc),o&&t(fo),x(Qs),o&&t(Cc),o&&t(go),x(Us),o&&t(Oc),o&&t(uo),x(Hs),o&&t(Pc),o&&t(_o),x(Ks),o&&t(Nc),o&&t(wo),x(Rs),o&&t(Ac),o&&t(ko),x(Vs),o&&t(Ic),o&&t(bo),x(Gs),o&&t(Dc),o&&t(vo),x(Js),o&&t(Sc),o&&t(yo),x(Xs),o&&t(Bc),o&&t(To),x(Ys),o&&t(Wc),o&&t($o),x(Zs),o&&t(Qc),o&&t(ot),x(er),x(ar),x(bn),x(vn),o&&t(Uc),o&&t(Fo),x(ir),o&&t(Hc),o&&t(pt),x(lr),x(pr),x(Tn),x($n),x(Ln),o&&t(Kc),o&&t(Eo),x(fr),o&&t(Rc),o&&t(ft),x(gr),x(kr),x(Fn),x(Mn),x(En),x(zn),x(qn),o&&t(Vc),o&&t(qo),x(br),o&&t(Gc),o&&t(gt),x(vr),x(Lr),x(Cn),x(On),o&&t(Jc),o&&t(Co),x(xr),o&&t(Xc),o&&t(ut),x(Fr),x(qr),x(Nn),x(An),x(In),o&&t(Yc),o&&t(Po),x(jr),o&&t(Zc),o&&t(_t),x(Cr),x(Ar),x(Sn),x(Bn),o&&t(em),o&&t(Io),x(Ir),o&&t(tm),o&&t(Xe),x(Dr),x(Qn),x(Hr),x(Un),o&&t(om),o&&t(Bo),x(Kr),o&&t(nm),o&&t(rt),x(Rr),x(Kn),x(Yr),x(Rn),x(Vn),x(Gn),o&&t(sm),o&&t(Qo),x(Zr),o&&t(rm),o&&t(at),x(ea),x(Xn),x(sa),x(Yn),x(Zn),x(es),o&&t(am),o&&t(Ko),x(ra),o&&t(im),o&&t(it),x(aa),x(os),x(ca),x(ns),x(ss),x(rs),o&&t(lm),o&&t(Vo),x(ma),o&&t(dm),o&&t(lt),x(ha),x(is),x(ua),x(ls),x(ds),x(cs),o&&t(cm),o&&t(Jo),x(_a),o&&t(mm),o&&t(dt),x(wa),x(hs),x(ya),x(ps),x(fs)}}}const _1={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function w1(z){return MT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class L1 extends $T{constructor(l){super();LT(this,l,w1,u1,xT,{})}}export{L1 as default,_1 as metadata};
