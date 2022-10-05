import{S as $T,i as LT,s as xT,e as r,k as c,w as v,t as n,Y as on,M as FT,c as a,d as o,m,a as i,x as y,h as s,Z as tn,b as u,G as e,g as f,y as T,q as $,o as L,B as x,v as MT,L as He}from"../../chunks/vendor-hf-doc-builder.js";import{T as no}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ae}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ue}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ET(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerConfig, LongformerModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function qT(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=r("p"),k=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function zT(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("When used with "),h=r("code"),_=n("is_split_into_words=True"),b=n(", this tokenizer will add a space before each word (even the first one).")},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"When used with "),h=a(p,"CODE",{});var z=i(h);_=s(z,"is_split_into_words=True"),z.forEach(o),b=s(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function CT(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function jT(q){let l,k,h,_,b;return _=new Ae({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){l=r("p"),k=n("Examples:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Examples:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function OT(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function PT(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, LongformerForMaskedLM

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)`}}),{c(){l=r("p"),k=n("Mask filling example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Mask filling example:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function NT(q){let l,k;return l=new Ae({props:{code:`TXT = (
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
[<span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;skinny&#x27;</span>, <span class="hljs-string">&#x27;thin&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;vegetarian&#x27;</span>]`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function AT(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function IT(q){let l,k,h,_,b;return _=new Ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of single-label classification:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example of single-label classification:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function DT(q){let l,k;return l=new Ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = LongformerForSequenceClassification.from_pretrained("jpwahle/longformer-base-plagiarism-detection", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpwahle/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.44</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function ST(q){let l,k,h,_,b;return _=new Ae({props:{code:`import torch
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
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of multi-label classification:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example of multi-label classification:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function BT(q){let l,k;return l=new Ae({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function WT(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function QT(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function UT(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function HT(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
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
[<span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function KT(q){let l,k;return l=new Ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.63</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function RT(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function VT(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
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
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){l=r("p"),k=n("Examples:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Examples:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function GT(q){let l,k,h,_,b,d,p,z,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,C,O,_e,U,oe,xe,K,Fe,Me,j,Ee,J,he,qe,X,we,se,I,ce,Y,ze,Z,P,Ce,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),z=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),oe=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),j=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),qe=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),Ce=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(o),b=s(E," accept two formats as input:"),E.forEach(o),d=m(w),p=a(w,"UL",{});var te=i(p);z=a(te,"LI",{});var Re=i(z);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(o),pe=m(te),A=a(te,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(o),te.forEach(o),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(o),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(o),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var eo=i(G);Te=s(eo,"fit()"),eo.forEach(o),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(o),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(o),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(o),ne=m(w),C=a(w,"UL",{});var B=i(C);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);oe=s(We,"input_ids"),We.forEach(o),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var oo=i(K);Fe=s(oo,"model(input_ids)"),oo.forEach(o),R.forEach(o),Me=m(B),j=a(B,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(o),qe=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(o),V.forEach(o),se=m(B),I=a(B,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(je,"CODE",{});var Ne=i(Y);ze=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(o),je.forEach(o),B.forEach(o),Z=m(w),P=a(w,"P",{});var ae=i(P);Ce=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(o),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(o),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,z),e(z,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,U),e(U,oe),e(O,xe),e(O,K),e(K,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,qe),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,ze),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,re),e(P,le)},d(w){w&&o(l),w&&o(d),w&&o(p),w&&o(ee),w&&o(F),w&&o(ne),w&&o(C),w&&o(Z),w&&o(P)}}}function JT(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function XT(q){let l,k,h,_,b,d,p,z,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,C,O,_e,U,oe,xe,K,Fe,Me,j,Ee,J,he,qe,X,we,se,I,ce,Y,ze,Z,P,Ce,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),z=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),oe=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),j=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),qe=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),Ce=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(o),b=s(E," accept two formats as input:"),E.forEach(o),d=m(w),p=a(w,"UL",{});var te=i(p);z=a(te,"LI",{});var Re=i(z);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(o),pe=m(te),A=a(te,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(o),te.forEach(o),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(o),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(o),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var eo=i(G);Te=s(eo,"fit()"),eo.forEach(o),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(o),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(o),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(o),ne=m(w),C=a(w,"UL",{});var B=i(C);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);oe=s(We,"input_ids"),We.forEach(o),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var oo=i(K);Fe=s(oo,"model(input_ids)"),oo.forEach(o),R.forEach(o),Me=m(B),j=a(B,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(o),qe=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(o),V.forEach(o),se=m(B),I=a(B,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(je,"CODE",{});var Ne=i(Y);ze=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(o),je.forEach(o),B.forEach(o),Z=m(w),P=a(w,"P",{});var ae=i(P);Ce=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(o),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(o),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,z),e(z,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,U),e(U,oe),e(O,xe),e(O,K),e(K,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,qe),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,ze),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,re),e(P,le)},d(w){w&&o(l),w&&o(d),w&&o(p),w&&o(ee),w&&o(F),w&&o(ne),w&&o(C),w&&o(Z),w&&o(P)}}}function YT(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function ZT(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function e1(q){let l,k;return l=new Ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.44</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function o1(q){let l,k,h,_,b,d,p,z,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,C,O,_e,U,oe,xe,K,Fe,Me,j,Ee,J,he,qe,X,we,se,I,ce,Y,ze,Z,P,Ce,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),z=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),oe=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),j=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),qe=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),Ce=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(o),b=s(E," accept two formats as input:"),E.forEach(o),d=m(w),p=a(w,"UL",{});var te=i(p);z=a(te,"LI",{});var Re=i(z);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(o),pe=m(te),A=a(te,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(o),te.forEach(o),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(o),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(o),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var eo=i(G);Te=s(eo,"fit()"),eo.forEach(o),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(o),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(o),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(o),ne=m(w),C=a(w,"UL",{});var B=i(C);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);oe=s(We,"input_ids"),We.forEach(o),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var oo=i(K);Fe=s(oo,"model(input_ids)"),oo.forEach(o),R.forEach(o),Me=m(B),j=a(B,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(o),qe=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(o),V.forEach(o),se=m(B),I=a(B,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(je,"CODE",{});var Ne=i(Y);ze=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(o),je.forEach(o),B.forEach(o),Z=m(w),P=a(w,"P",{});var ae=i(P);Ce=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(o),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(o),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,z),e(z,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,U),e(U,oe),e(O,xe),e(O,K),e(K,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,qe),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,ze),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,re),e(P,le)},d(w){w&&o(l),w&&o(d),w&&o(p),w&&o(ee),w&&o(F),w&&o(ne),w&&o(C),w&&o(Z),w&&o(P)}}}function t1(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function n1(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function s1(q){let l,k;return l=new Ae({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.96</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function r1(q){let l,k,h,_,b,d,p,z,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,C,O,_e,U,oe,xe,K,Fe,Me,j,Ee,J,he,qe,X,we,se,I,ce,Y,ze,Z,P,Ce,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),z=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),oe=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),j=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),qe=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),Ce=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(o),b=s(E," accept two formats as input:"),E.forEach(o),d=m(w),p=a(w,"UL",{});var te=i(p);z=a(te,"LI",{});var Re=i(z);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(o),pe=m(te),A=a(te,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(o),te.forEach(o),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(o),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(o),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var eo=i(G);Te=s(eo,"fit()"),eo.forEach(o),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(o),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(o),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(o),ne=m(w),C=a(w,"UL",{});var B=i(C);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);oe=s(We,"input_ids"),We.forEach(o),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var oo=i(K);Fe=s(oo,"model(input_ids)"),oo.forEach(o),R.forEach(o),Me=m(B),j=a(B,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(o),qe=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(o),V.forEach(o),se=m(B),I=a(B,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(je,"CODE",{});var Ne=i(Y);ze=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(o),je.forEach(o),B.forEach(o),Z=m(w),P=a(w,"P",{});var ae=i(P);Ce=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(o),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(o),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,z),e(z,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,U),e(U,oe),e(O,xe),e(O,K),e(K,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,qe),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,ze),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,re),e(P,le)},d(w){w&&o(l),w&&o(d),w&&o(p),w&&o(ee),w&&o(F),w&&o(ne),w&&o(C),w&&o(Z),w&&o(P)}}}function a1(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function i1(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function l1(q){let l,k;return l=new Ae({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function d1(q){let l,k,h,_,b,d,p,z,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,C,O,_e,U,oe,xe,K,Fe,Me,j,Ee,J,he,qe,X,we,se,I,ce,Y,ze,Z,P,Ce,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),z=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),oe=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),j=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),qe=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),Ce=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(o),b=s(E," accept two formats as input:"),E.forEach(o),d=m(w),p=a(w,"UL",{});var te=i(p);z=a(te,"LI",{});var Re=i(z);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(o),pe=m(te),A=a(te,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(o),te.forEach(o),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(o),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(o),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var eo=i(G);Te=s(eo,"fit()"),eo.forEach(o),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(o),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(o),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(o),ne=m(w),C=a(w,"UL",{});var B=i(C);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);oe=s(We,"input_ids"),We.forEach(o),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var oo=i(K);Fe=s(oo,"model(input_ids)"),oo.forEach(o),R.forEach(o),Me=m(B),j=a(B,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(o),qe=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(o),V.forEach(o),se=m(B),I=a(B,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(je,"CODE",{});var Ne=i(Y);ze=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(o),je.forEach(o),B.forEach(o),Z=m(w),P=a(w,"P",{});var ae=i(P);Ce=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(o),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(o),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,z),e(z,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,U),e(U,oe),e(O,xe),e(O,K),e(K,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,qe),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,ze),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,re),e(P,le)},d(w){w&&o(l),w&&o(d),w&&o(p),w&&o(ee),w&&o(F),w&&o(ne),w&&o(C),w&&o(Z),w&&o(P)}}}function c1(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function m1(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function h1(q){let l,k;return l=new Ae({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),{c(){v(l.$$.fragment)},l(h){y(l.$$.fragment,h)},m(h,_){T(l,h,_),k=!0},p:He,i(h){k||($(l.$$.fragment,h),k=!0)},o(h){L(l.$$.fragment,h),k=!1},d(h){x(l,h)}}}function p1(q){let l,k,h,_,b,d,p,z,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,C,O,_e,U,oe,xe,K,Fe,Me,j,Ee,J,he,qe,X,we,se,I,ce,Y,ze,Z,P,Ce,N,re,le;return{c(){l=r("p"),k=n("TensorFlow models and layers in "),h=r("code"),_=n("transformers"),b=n(" accept two formats as input:"),d=c(),p=r("ul"),z=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),pe=c(),A=r("li"),ie=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),F=r("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r("code"),ve=n("model.fit()"),fe=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),ye=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Te=n("fit()"),ge=n(" and "),W=r("code"),$e=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),me=n("Functional"),Le=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),C=r("ul"),O=r("li"),_e=n("a single Tensor with "),U=r("code"),oe=n("input_ids"),xe=n(" only and nothing else: "),K=r("code"),Fe=n("model(input_ids)"),Me=c(),j=r("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),he=n("model([input_ids, attention_mask])"),qe=n(" or "),X=r("code"),we=n("model([input_ids, attention_mask, token_type_ids])"),se=c(),I=r("li"),ce=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=r("code"),ze=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),P=r("p"),Ce=n(`Note that when creating models and layers with
`),N=r("a"),re=n("subclassing"),le=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=a(w,"P",{});var E=i(l);k=s(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var Ke=i(h);_=s(Ke,"transformers"),Ke.forEach(o),b=s(E," accept two formats as input:"),E.forEach(o),d=m(w),p=a(w,"UL",{});var te=i(p);z=a(te,"LI",{});var Re=i(z);ke=s(Re,"having all inputs as keyword arguments (like PyTorch models), or"),Re.forEach(o),pe=m(te),A=a(te,"LI",{});var Ie=i(A);ie=s(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(o),te.forEach(o),ee=m(w),F=a(w,"P",{});var M=i(F);be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a(M,"CODE",{});var Ve=i(H);ve=s(Ve,"model.fit()"),Ve.forEach(o),fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(M,"CODE",{});var De=i(S);ye=s(De,"model.fit()"),De.forEach(o),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(M,"CODE",{});var eo=i(G);Te=s(eo,"fit()"),eo.forEach(o),ge=s(M," and "),W=a(M,"CODE",{});var Se=i(W);$e=s(Se,"predict()"),Se.forEach(o),ue=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Be=i(Q);me=s(Be,"Functional"),Be.forEach(o),Le=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(o),ne=m(w),C=a(w,"UL",{});var B=i(C);O=a(B,"LI",{});var R=i(O);_e=s(R,"a single Tensor with "),U=a(R,"CODE",{});var We=i(U);oe=s(We,"input_ids"),We.forEach(o),xe=s(R," only and nothing else: "),K=a(R,"CODE",{});var oo=i(K);Fe=s(oo,"model(input_ids)"),oo.forEach(o),R.forEach(o),Me=m(B),j=a(B,"LI",{});var V=i(j);Ee=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(V,"CODE",{});var Pe=i(J);he=s(Pe,"model([input_ids, attention_mask])"),Pe.forEach(o),qe=s(V," or "),X=a(V,"CODE",{});var Ge=i(X);we=s(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(o),V.forEach(o),se=m(B),I=a(B,"LI",{});var je=i(I);ce=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Y=a(je,"CODE",{});var Ne=i(Y);ze=s(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(o),je.forEach(o),B.forEach(o),Z=m(w),P=a(w,"P",{});var ae=i(P);Ce=s(ae,`Note that when creating models and layers with
`),N=a(ae,"A",{href:!0,rel:!0});var Je=i(N);re=s(Je,"subclassing"),Je.forEach(o),le=s(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(o),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(w,E){f(w,l,E),e(l,k),e(l,h),e(h,_),e(l,b),f(w,d,E),f(w,p,E),e(p,z),e(z,ke),e(p,pe),e(p,A),e(A,ie),f(w,ee,E),f(w,F,E),e(F,be),e(F,H),e(H,ve),e(F,fe),e(F,S),e(S,ye),e(F,de),e(F,G),e(G,Te),e(F,ge),e(F,W),e(W,$e),e(F,ue),e(F,Q),e(Q,me),e(F,Le),f(w,ne,E),f(w,C,E),e(C,O),e(O,_e),e(O,U),e(U,oe),e(O,xe),e(O,K),e(K,Fe),e(C,Me),e(C,j),e(j,Ee),e(j,J),e(J,he),e(j,qe),e(j,X),e(X,we),e(C,se),e(C,I),e(I,ce),e(I,Y),e(Y,ze),f(w,Z,E),f(w,P,E),e(P,Ce),e(P,N),e(N,re),e(P,le)},d(w){w&&o(l),w&&o(d),w&&o(p),w&&o(ee),w&&o(F),w&&o(ne),w&&o(C),w&&o(Z),w&&o(P)}}}function f1(q){let l,k,h,_,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),_=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(p,"CODE",{});var z=i(h);_=s(z,"Module"),z.forEach(o),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(d,p){f(d,l,p),e(l,k),e(l,h),e(h,_),e(l,b)},d(d){d&&o(l)}}}function g1(q){let l,k,h,_,b;return _=new Ae({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),h=c(),v(_.$$.fragment)},l(d){l=a(d,"P",{});var p=i(l);k=s(p,"Example:"),p.forEach(o),h=m(d),y(_.$$.fragment,d)},m(d,p){f(d,l,p),e(l,k),f(d,h,p),T(_,d,p),b=!0},p:He,i(d){b||($(_.$$.fragment,d),b=!0)},o(d){L(_.$$.fragment,d),b=!1},d(d){d&&o(l),d&&o(h),x(_,d)}}}function u1(q){let l,k,h,_,b,d,p,z,ke,pe,A,ie,ee,F,be,H,ve,fe,S,ye,de,G,Te,ge,W,$e,ue,Q,me,Le,ne,C,O,_e,U,oe,xe,K,Fe,Me,j,Ee,J,he,qe,X,we,se,I,ce,Y,ze,Z,P,Ce,N,re,le,w,E,Ke,te,Re,Ie,M,Ve,De,eo='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Se,Be,B='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',R,We,oo='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',V,Pe,Ge,je,Ne,ae,Je,Ni,Fh,Mh,ec,wT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',oc,Ai,Eh,qh,tc,Do,zh,nc,kT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',sc,Ii,Ch,jh,rc,So,Oh,Di,Ph,Nh,Si,Ah,Ih,ac,nn,Bi,Dh,Sh,Wi,Bh,ic,sn,Wh,Ea,Qh,Uh,lc,ko,Hh,dc,bT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',cc,mc,vT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',hc,pc,yT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',fc,gc,TT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',uc,_c,rn,Kh,ks,Rh,Vh,wc,ot,an,Qi,bs,Gh,Ui,Jh,kc,tt,qa,Xh,Yh,za,Zh,ep,bc,vs,vc,nt,ln,Hi,ys,op,Ki,tp,yc,po,Ts,np,st,sp,Ca,rp,ap,ja,ip,lp,dp,rt,cp,Oa,mp,hp,$s,pp,fp,gp,at,up,Pa,_p,wp,Na,kp,bp,vp,dn,Tc,it,cn,Ri,Ls,yp,Vi,Tp,$c,Oe,xs,$p,Gi,Lp,xp,Ji,Fp,Mp,mn,Ep,Fs,qp,Xi,zp,Cp,jp,hn,Op,Ms,Pp,Aa,Np,Ap,Ip,Bo,Es,Dp,Yi,Sp,Bp,qs,Ia,Wp,Zi,Qp,Up,Da,Hp,el,Kp,Rp,pn,zs,Vp,ol,Gp,Jp,fn,Cs,Xp,tl,Yp,Zp,gn,js,ef,Os,of,nl,tf,nf,Lc,lt,un,sl,Ps,sf,rl,rf,xc,Ao,Ns,af,As,lf,al,df,cf,mf,_n,Sa,hf,pf,Ba,ff,gf,Fc,dt,wn,il,Is,uf,ll,_f,Mc,ct,Ds,wf,dl,kf,Ec,mt,Ss,bf,cl,vf,qc,ht,Bs,yf,ml,Tf,zc,pt,Ws,$f,hl,Lf,Cc,ft,Qs,xf,pl,Ff,jc,gt,Us,Mf,fl,Ef,Oc,ut,Hs,qf,gl,zf,Pc,_t,Ks,Cf,ul,jf,Nc,wt,Rs,Of,_l,Pf,Ac,kt,Vs,Nf,wl,Af,Ic,bt,Gs,If,kl,Df,Dc,vt,Js,Sf,bl,Bf,Sc,yt,Xs,Wf,vl,Qf,Bc,Tt,Ys,Uf,yl,Hf,Wc,$t,kn,Tl,Zs,Kf,$l,Rf,Qc,to,er,Vf,Ll,Gf,Jf,or,Xf,Wa,Yf,Zf,eg,tr,og,nr,tg,ng,sg,Lt,rg,Qa,ag,ig,sr,lg,dg,cg,rr,mg,xl,hg,pg,fg,Fo,ar,gg,xt,ug,Ua,_g,wg,Fl,kg,bg,vg,bn,yg,vn,Uc,Ft,yn,Ml,ir,Tg,El,$g,Hc,fo,lr,Lg,dr,xg,ql,Fg,Mg,Eg,cr,qg,Ha,zg,Cg,jg,mr,Og,hr,Pg,Ng,Ag,mo,pr,Ig,Mt,Dg,Ka,Sg,Bg,zl,Wg,Qg,Ug,Tn,Hg,$n,Kg,Cl,Rg,Vg,Ln,Kc,Et,xn,jl,fr,Gg,Ol,Jg,Rc,go,gr,Xg,Pl,Yg,Zg,ur,eu,Ra,ou,tu,nu,_r,su,wr,ru,au,iu,so,kr,lu,qt,du,Va,cu,mu,Nl,hu,pu,fu,Fn,gu,Mn,uu,En,_u,qn,wu,zn,Vc,zt,Cn,Al,br,ku,Il,bu,Gc,uo,vr,vu,Dl,yu,Tu,yr,$u,Ga,Lu,xu,Fu,Tr,Mu,$r,Eu,qu,zu,Mo,Lr,Cu,Ct,ju,Ja,Ou,Pu,Sl,Nu,Au,Iu,jn,Du,On,Jc,jt,Pn,Bl,xr,Su,Wl,Bu,Xc,_o,Fr,Wu,Ql,Qu,Uu,Mr,Hu,Xa,Ku,Ru,Vu,Er,Gu,qr,Ju,Xu,Yu,bo,zr,Zu,Ot,e_,Ya,o_,t_,Ul,n_,s_,r_,Nn,a_,An,i_,In,Yc,Pt,Dn,Hl,Cr,l_,Kl,d_,Zc,wo,jr,c_,Nt,m_,Rl,h_,p_,Vl,f_,g_,u_,Or,__,Za,w_,k_,b_,Pr,v_,Nr,y_,T_,$_,Eo,Ar,L_,At,x_,ei,F_,M_,Gl,E_,q_,z_,Sn,C_,Bn,em,It,Wn,Jl,Ir,j_,Xl,O_,om,Xe,Dr,P_,Yl,N_,A_,Sr,I_,oi,D_,S_,B_,Br,W_,Wr,Q_,U_,H_,Qn,K_,Dt,R_,ti,V_,G_,Qr,J_,X_,Y_,Ur,Z_,Zl,ew,ow,tw,Wo,Hr,nw,St,sw,ni,rw,aw,ed,iw,lw,dw,Un,tm,Bt,Hn,od,Kr,cw,td,mw,nm,ro,Rr,hw,Vr,pw,nd,fw,gw,uw,Gr,_w,si,ww,kw,bw,Jr,vw,Xr,yw,Tw,$w,Kn,Lw,vo,Yr,xw,Wt,Fw,ri,Mw,Ew,sd,qw,zw,Cw,Rn,jw,Vn,Ow,Gn,sm,Qt,Jn,rd,Zr,Pw,ad,Nw,rm,ao,ea,Aw,Ut,Iw,id,Dw,Sw,ld,Bw,Ww,Qw,oa,Uw,ai,Hw,Kw,Rw,ta,Vw,na,Gw,Jw,Xw,Xn,Yw,yo,sa,Zw,Ht,ek,ii,ok,tk,dd,nk,sk,rk,Yn,ak,Zn,ik,es,am,Kt,os,cd,ra,lk,md,dk,im,io,aa,ck,hd,mk,hk,ia,pk,li,fk,gk,uk,la,_k,da,wk,kk,bk,ts,vk,To,ca,yk,Rt,Tk,di,$k,Lk,pd,xk,Fk,Mk,ns,Ek,ss,qk,rs,lm,Vt,as,fd,ma,zk,gd,Ck,dm,lo,ha,jk,ud,Ok,Pk,pa,Nk,ci,Ak,Ik,Dk,fa,Sk,ga,Bk,Wk,Qk,is,Uk,$o,ua,Hk,Gt,Kk,mi,Rk,Vk,_d,Gk,Jk,Xk,ls,Yk,ds,Zk,cs,cm,Jt,ms,wd,_a,eb,kd,ob,mm,co,wa,tb,bd,nb,sb,ka,rb,hi,ab,ib,lb,ba,db,va,cb,mb,hb,hs,pb,qo,ya,fb,Xt,gb,pi,ub,_b,vd,wb,kb,bb,ps,vb,fs,hm;return d=new Ze({}),F=new Ze({}),E=new Ze({}),bs=new Ze({}),vs=new Ae({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),ys=new Ze({}),Ts=new D({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"pad_token_id",val:": int = 1"},{name:"bos_token_id",val:": int = 0"},{name:"eos_token_id",val:": int = 2"},{name:"vocab_size",val:": int = 30522"},{name:"hidden_size",val:": int = 768"},{name:"num_hidden_layers",val:": int = 12"},{name:"num_attention_heads",val:": int = 12"},{name:"intermediate_size",val:": int = 3072"},{name:"hidden_act",val:": str = 'gelu'"},{name:"hidden_dropout_prob",val:": float = 0.1"},{name:"attention_probs_dropout_prob",val:": float = 0.1"},{name:"max_position_embeddings",val:": int = 512"},{name:"type_vocab_size",val:": int = 2"},{name:"initializer_range",val:": float = 0.02"},{name:"layer_norm_eps",val:": float = 1e-12"},{name:"position_embedding_type",val:": str = 'absolute'"},{name:"use_cache",val:": bool = True"},{name:"classifier_dropout",val:": float = None"},{name:"onnx_export",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/configuration_longformer.py#L46"}}),dn=new Ue({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[ET]},$$scope:{ctx:q}}}),Ls=new Ze({}),xs=new D({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (Longformer tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L116"}}),mn=new Ue({props:{anchor:"transformers.LongformerTokenizer.example",$$slots:{default:[qT]},$$scope:{ctx:q}}}),hn=new no({props:{$$slots:{default:[zT]},$$scope:{ctx:q}}}),Es=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LongformerTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LongformerTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L353",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zs=new D({props:{name:"convert_tokens_to_string",anchor:"transformers.LongformerTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L318"}}),Cs=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LongformerTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LongformerTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/tokenization_longformer.py#L405",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),js=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.LongformerTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LongformerTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
`}}),bn=new no({props:{$$slots:{default:[CT]},$$scope:{ctx:q}}}),vn=new Ue({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[jT]},$$scope:{ctx:q}}}),ir=new Ze({}),lr=new D({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
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
`}}),Tn=new no({props:{$$slots:{default:[OT]},$$scope:{ctx:q}}}),$n=new Ue({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[PT]},$$scope:{ctx:q}}}),Ln=new Ue({props:{anchor:"transformers.LongformerForMaskedLM.forward.example-2",$$slots:{default:[NT]},$$scope:{ctx:q}}}),fr=new Ze({}),gr=new D({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
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
`}}),Fn=new no({props:{$$slots:{default:[AT]},$$scope:{ctx:q}}}),Mn=new Ue({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[IT]},$$scope:{ctx:q}}}),En=new Ue({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[DT]},$$scope:{ctx:q}}}),qn=new Ue({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[ST]},$$scope:{ctx:q}}}),zn=new Ue({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[BT]},$$scope:{ctx:q}}}),br=new Ze({}),vr=new D({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
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
`}}),jn=new no({props:{$$slots:{default:[WT]},$$scope:{ctx:q}}}),On=new Ue({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[QT]},$$scope:{ctx:q}}}),xr=new Ze({}),Fr=new D({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_longformer.py#L2154"}}),zr=new D({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Nn=new no({props:{$$slots:{default:[UT]},$$scope:{ctx:q}}}),An=new Ue({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[HT]},$$scope:{ctx:q}}}),In=new Ue({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[KT]},$$scope:{ctx:q}}}),Cr=new Ze({}),jr=new D({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
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
`}}),Sn=new no({props:{$$slots:{default:[RT]},$$scope:{ctx:q}}}),Bn=new Ue({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[VT]},$$scope:{ctx:q}}}),Ir=new Ze({}),Dr=new D({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2030"}}),Qn=new no({props:{$$slots:{default:[GT]},$$scope:{ctx:q}}}),Hr=new D({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2052"}}),Un=new no({props:{$$slots:{default:[JT]},$$scope:{ctx:q}}}),Kr=new Ze({}),Rr=new D({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2103"}}),Kn=new no({props:{$$slots:{default:[XT]},$$scope:{ctx:q}}}),Yr=new D({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Rn=new no({props:{$$slots:{default:[YT]},$$scope:{ctx:q}}}),Vn=new Ue({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[ZT]},$$scope:{ctx:q}}}),Gn=new Ue({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[e1]},$$scope:{ctx:q}}}),Zr=new Ze({}),ea=new D({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2200"}}),Xn=new no({props:{$$slots:{default:[o1]},$$scope:{ctx:q}}}),sa=new D({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Yn=new no({props:{$$slots:{default:[t1]},$$scope:{ctx:q}}}),Zn=new Ue({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[n1]},$$scope:{ctx:q}}}),es=new Ue({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[s1]},$$scope:{ctx:q}}}),ra=new Ze({}),aa=new D({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2369"}}),ts=new no({props:{$$slots:{default:[r1]},$$scope:{ctx:q}}}),ca=new D({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ns=new no({props:{$$slots:{default:[a1]},$$scope:{ctx:q}}}),ss=new Ue({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[i1]},$$scope:{ctx:q}}}),rs=new Ue({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[l1]},$$scope:{ctx:q}}}),ma=new Ze({}),ha=new D({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2621"}}),is=new no({props:{$$slots:{default:[d1]},$$scope:{ctx:q}}}),ua=new D({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ls=new no({props:{$$slots:{default:[c1]},$$scope:{ctx:q}}}),ds=new Ue({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[m1]},$$scope:{ctx:q}}}),cs=new Ue({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[h1]},$$scope:{ctx:q}}}),_a=new Ze({}),wa=new D({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longformer/modeling_tf_longformer.py#L2485"}}),hs=new no({props:{$$slots:{default:[p1]},$$scope:{ctx:q}}}),ya=new D({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),ps=new no({props:{$$slots:{default:[f1]},$$scope:{ctx:q}}}),fs=new Ue({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[g1]},$$scope:{ctx:q}}}),{c(){l=r("meta"),k=c(),h=r("h1"),_=r("a"),b=r("span"),v(d.$$.fragment),p=c(),z=r("span"),ke=n("Longformer"),pe=c(),A=r("h2"),ie=r("a"),ee=r("span"),v(F.$$.fragment),be=c(),H=r("span"),ve=n("Overview"),fe=c(),S=r("p"),ye=n("The Longformer model was presented in "),de=r("a"),G=n("Longformer: The Long-Document Transformer"),Te=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),ge=c(),W=r("p"),$e=n("The abstract from the paper is the following:"),ue=c(),Q=r("p"),me=r("em"),Le=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ne=c(),C=r("p"),O=n("Tips:"),_e=c(),U=r("ul"),oe=r("li"),xe=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),K=r("code"),Fe=n("token_type_ids"),Me=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),j=r("code"),Ee=n("tokenizer.sep_token"),J=n(` (or
`),he=r("code"),qe=n("</s>"),X=n(")."),we=c(),se=r("p"),I=n("This model was contributed by "),ce=r("a"),Y=n("beltagy"),ze=n(". The Authors\u2019 code can be found "),Z=r("a"),P=n("here"),Ce=n("."),N=c(),re=r("h2"),le=r("a"),w=r("span"),v(E.$$.fragment),Ke=c(),te=r("span"),Re=n("Longformer Self Attention"),Ie=c(),M=r("p"),Ve=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),De=new on,Se=n(` previous tokens and
`),Be=new on,R=n(" succeding tokens with "),We=new on,V=n(` being the window length as defined in
`),Pe=r("code"),Ge=n("config.attention_window"),je=n(". Note that "),Ne=r("code"),ae=n("config.attention_window"),Je=n(" can be of type "),Ni=r("code"),Fh=n("List"),Mh=n(` to define a
different `),ec=new on,oc=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Ai=r("code"),Eh=n("BertSelfAttention"),qh=n("."),tc=c(),Do=r("p"),zh=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),nc=new on,sc=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Ii=r("em"),Ch=n("symmetric"),jh=n("."),rc=c(),So=r("p"),Oh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Di=r("code"),Ph=n("global_attention_mask"),Nh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),Si=r("code"),Ah=n("global_attention_mask"),Ih=n(":"),ac=c(),nn=r("ul"),Bi=r("li"),Dh=n("0: the token attends \u201Clocally\u201D,"),Sh=c(),Wi=r("li"),Bh=n("1: the token attends \u201Cglobally\u201D."),ic=c(),sn=r("p"),Wh=n("For more information please also refer to "),Ea=r("a"),Qh=n("forward()"),Uh=n(" method."),lc=c(),ko=r("p"),Hh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),dc=new on,cc=n(` to
`),mc=new on,hc=n(", with "),pc=new on,fc=n(" being the sequence length and "),gc=new on,uc=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),_c=c(),rn=r("p"),Kh=n("For more information, please refer to the official "),ks=r("a"),Rh=n("paper"),Vh=n("."),wc=c(),ot=r("h2"),an=r("a"),Qi=r("span"),v(bs.$$.fragment),Gh=c(),Ui=r("span"),Jh=n("Training"),kc=c(),tt=r("p"),qa=r("a"),Xh=n("LongformerForMaskedLM"),Yh=n(" is trained the exact same way "),za=r("a"),Zh=n("RobertaForMaskedLM"),ep=n(` is
trained and should be used as follows:`),bc=c(),v(vs.$$.fragment),vc=c(),nt=r("h2"),ln=r("a"),Hi=r("span"),v(ys.$$.fragment),op=c(),Ki=r("span"),tp=n("LongformerConfig"),yc=c(),po=r("div"),v(Ts.$$.fragment),np=c(),st=r("p"),sp=n("This is the configuration class to store the configuration of a "),Ca=r("a"),rp=n("LongformerModel"),ap=n(" or a "),ja=r("a"),ip=n("TFLongformerModel"),lp=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),dp=c(),rt=r("p"),cp=n("This is the configuration class to store the configuration of a "),Oa=r("a"),mp=n("LongformerModel"),hp=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),$s=r("a"),pp=n("allenai/longformer-base-4096"),fp=n(` architecture with a sequence
length 4,096.`),gp=c(),at=r("p"),up=n("Configuration objects inherit from "),Pa=r("a"),_p=n("PretrainedConfig"),wp=n(` and can be used to control the model outputs. Read the
documentation from `),Na=r("a"),kp=n("PretrainedConfig"),bp=n(" for more information."),vp=c(),v(dn.$$.fragment),Tc=c(),it=r("h2"),cn=r("a"),Ri=r("span"),v(Ls.$$.fragment),yp=c(),Vi=r("span"),Tp=n("LongformerTokenizer"),$c=c(),Oe=r("div"),v(xs.$$.fragment),$p=c(),Gi=r("p"),Lp=n("Constructs a Longformer tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),xp=c(),Ji=r("p"),Fp=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Mp=c(),v(mn.$$.fragment),Ep=c(),Fs=r("p"),qp=n("You can get around that behavior by passing "),Xi=r("code"),zp=n("add_prefix_space=True"),Cp=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),jp=c(),v(hn.$$.fragment),Op=c(),Ms=r("p"),Pp=n("This tokenizer inherits from "),Aa=r("a"),Np=n("PreTrainedTokenizer"),Ap=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ip=c(),Bo=r("div"),v(Es.$$.fragment),Dp=c(),Yi=r("p"),Sp=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Longformer sequence has the following format:`),Bp=c(),qs=r("ul"),Ia=r("li"),Wp=n("single sequence: "),Zi=r("code"),Qp=n("<s> X </s>"),Up=c(),Da=r("li"),Hp=n("pair of sequences: "),el=r("code"),Kp=n("<s> A </s></s> B </s>"),Rp=c(),pn=r("div"),v(zs.$$.fragment),Vp=c(),ol=r("p"),Gp=n("Converts a sequence of tokens (string) in a single string."),Jp=c(),fn=r("div"),v(Cs.$$.fragment),Xp=c(),tl=r("p"),Yp=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. Longformer does
not make use of token type ids, therefore a list of zeros is returned.`),Zp=c(),gn=r("div"),v(js.$$.fragment),ef=c(),Os=r("p"),of=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),nl=r("code"),tf=n("prepare_for_model"),nf=n(" method."),Lc=c(),lt=r("h2"),un=r("a"),sl=r("span"),v(Ps.$$.fragment),sf=c(),rl=r("span"),rf=n("LongformerTokenizerFast"),xc=c(),Ao=r("div"),v(Ns.$$.fragment),af=c(),As=r("p"),lf=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),al=r("em"),df=n("tokenizers"),cf=n(" library)."),mf=c(),_n=r("p"),Sa=r("a"),hf=n("LongformerTokenizerFast"),pf=n(" is identical to "),Ba=r("a"),ff=n("RobertaTokenizerFast"),gf=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Fc=c(),dt=r("h2"),wn=r("a"),il=r("span"),v(Is.$$.fragment),uf=c(),ll=r("span"),_f=n("Longformer specific outputs"),Mc=c(),ct=r("div"),v(Ds.$$.fragment),wf=c(),dl=r("p"),kf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Ec=c(),mt=r("div"),v(Ss.$$.fragment),bf=c(),cl=r("p"),vf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),qc=c(),ht=r("div"),v(Bs.$$.fragment),yf=c(),ml=r("p"),Tf=n("Base class for masked language models outputs."),zc=c(),pt=r("div"),v(Ws.$$.fragment),$f=c(),hl=r("p"),Lf=n("Base class for outputs of question answering Longformer models."),Cc=c(),ft=r("div"),v(Qs.$$.fragment),xf=c(),pl=r("p"),Ff=n("Base class for outputs of sentence classification models."),jc=c(),gt=r("div"),v(Us.$$.fragment),Mf=c(),fl=r("p"),Ef=n("Base class for outputs of multiple choice Longformer models."),Oc=c(),ut=r("div"),v(Hs.$$.fragment),qf=c(),gl=r("p"),zf=n("Base class for outputs of token classification models."),Pc=c(),_t=r("div"),v(Ks.$$.fragment),Cf=c(),ul=r("p"),jf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Nc=c(),wt=r("div"),v(Rs.$$.fragment),Of=c(),_l=r("p"),Pf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Ac=c(),kt=r("div"),v(Vs.$$.fragment),Nf=c(),wl=r("p"),Af=n("Base class for masked language models outputs."),Ic=c(),bt=r("div"),v(Gs.$$.fragment),If=c(),kl=r("p"),Df=n("Base class for outputs of question answering Longformer models."),Dc=c(),vt=r("div"),v(Js.$$.fragment),Sf=c(),bl=r("p"),Bf=n("Base class for outputs of sentence classification models."),Sc=c(),yt=r("div"),v(Xs.$$.fragment),Wf=c(),vl=r("p"),Qf=n("Base class for outputs of multiple choice models."),Bc=c(),Tt=r("div"),v(Ys.$$.fragment),Uf=c(),yl=r("p"),Hf=n("Base class for outputs of token classification models."),Wc=c(),$t=r("h2"),kn=r("a"),Tl=r("span"),v(Zs.$$.fragment),Kf=c(),$l=r("span"),Rf=n("LongformerModel"),Qc=c(),to=r("div"),v(er.$$.fragment),Vf=c(),Ll=r("p"),Gf=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Jf=c(),or=r("p"),Xf=n("This model inherits from "),Wa=r("a"),Yf=n("PreTrainedModel"),Zf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg=c(),tr=r("p"),og=n("This model is also a PyTorch "),nr=r("a"),tg=n("torch.nn.Module"),ng=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sg=c(),Lt=r("p"),rg=n("This class copied code from "),Qa=r("a"),ag=n("RobertaModel"),ig=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),sr=r("a"),lg=n(`Longformer:
the Long-Document Transformer`),dg=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),cg=c(),rr=r("p"),mg=n("The self-attention module "),xl=r("code"),hg=n("LongformerSelfAttention"),pg=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),fg=c(),Fo=r("div"),v(ar.$$.fragment),gg=c(),xt=r("p"),ug=n("The "),Ua=r("a"),_g=n("LongformerModel"),wg=n(" forward method, overrides the "),Fl=r("code"),kg=n("__call__"),bg=n(" special method."),vg=c(),v(bn.$$.fragment),yg=c(),v(vn.$$.fragment),Uc=c(),Ft=r("h2"),yn=r("a"),Ml=r("span"),v(ir.$$.fragment),Tg=c(),El=r("span"),$g=n("LongformerForMaskedLM"),Hc=c(),fo=r("div"),v(lr.$$.fragment),Lg=c(),dr=r("p"),xg=n("Longformer Model with a "),ql=r("code"),Fg=n("language modeling"),Mg=n(" head on top."),Eg=c(),cr=r("p"),qg=n("This model inherits from "),Ha=r("a"),zg=n("PreTrainedModel"),Cg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jg=c(),mr=r("p"),Og=n("This model is also a PyTorch "),hr=r("a"),Pg=n("torch.nn.Module"),Ng=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ag=c(),mo=r("div"),v(pr.$$.fragment),Ig=c(),Mt=r("p"),Dg=n("The "),Ka=r("a"),Sg=n("LongformerForMaskedLM"),Bg=n(" forward method, overrides the "),zl=r("code"),Wg=n("__call__"),Qg=n(" special method."),Ug=c(),v(Tn.$$.fragment),Hg=c(),v($n.$$.fragment),Kg=c(),Cl=r("p"),Rg=n("Let\u2019s try a very long input."),Vg=c(),v(Ln.$$.fragment),Kc=c(),Et=r("h2"),xn=r("a"),jl=r("span"),v(fr.$$.fragment),Gg=c(),Ol=r("span"),Jg=n("LongformerForSequenceClassification"),Rc=c(),go=r("div"),v(gr.$$.fragment),Xg=c(),Pl=r("p"),Yg=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Zg=c(),ur=r("p"),eu=n("This model inherits from "),Ra=r("a"),ou=n("PreTrainedModel"),tu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nu=c(),_r=r("p"),su=n("This model is also a PyTorch "),wr=r("a"),ru=n("torch.nn.Module"),au=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),iu=c(),so=r("div"),v(kr.$$.fragment),lu=c(),qt=r("p"),du=n("The "),Va=r("a"),cu=n("LongformerForSequenceClassification"),mu=n(" forward method, overrides the "),Nl=r("code"),hu=n("__call__"),pu=n(" special method."),fu=c(),v(Fn.$$.fragment),gu=c(),v(Mn.$$.fragment),uu=c(),v(En.$$.fragment),_u=c(),v(qn.$$.fragment),wu=c(),v(zn.$$.fragment),Vc=c(),zt=r("h2"),Cn=r("a"),Al=r("span"),v(br.$$.fragment),ku=c(),Il=r("span"),bu=n("LongformerForMultipleChoice"),Gc=c(),uo=r("div"),v(vr.$$.fragment),vu=c(),Dl=r("p"),yu=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Tu=c(),yr=r("p"),$u=n("This model inherits from "),Ga=r("a"),Lu=n("PreTrainedModel"),xu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu=c(),Tr=r("p"),Mu=n("This model is also a PyTorch "),$r=r("a"),Eu=n("torch.nn.Module"),qu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu=c(),Mo=r("div"),v(Lr.$$.fragment),Cu=c(),Ct=r("p"),ju=n("The "),Ja=r("a"),Ou=n("LongformerForMultipleChoice"),Pu=n(" forward method, overrides the "),Sl=r("code"),Nu=n("__call__"),Au=n(" special method."),Iu=c(),v(jn.$$.fragment),Du=c(),v(On.$$.fragment),Jc=c(),jt=r("h2"),Pn=r("a"),Bl=r("span"),v(xr.$$.fragment),Su=c(),Wl=r("span"),Bu=n("LongformerForTokenClassification"),Xc=c(),_o=r("div"),v(Fr.$$.fragment),Wu=c(),Ql=r("p"),Qu=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Uu=c(),Mr=r("p"),Hu=n("This model inherits from "),Xa=r("a"),Ku=n("PreTrainedModel"),Ru=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu=c(),Er=r("p"),Gu=n("This model is also a PyTorch "),qr=r("a"),Ju=n("torch.nn.Module"),Xu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yu=c(),bo=r("div"),v(zr.$$.fragment),Zu=c(),Ot=r("p"),e_=n("The "),Ya=r("a"),o_=n("LongformerForTokenClassification"),t_=n(" forward method, overrides the "),Ul=r("code"),n_=n("__call__"),s_=n(" special method."),r_=c(),v(Nn.$$.fragment),a_=c(),v(An.$$.fragment),i_=c(),v(In.$$.fragment),Yc=c(),Pt=r("h2"),Dn=r("a"),Hl=r("span"),v(Cr.$$.fragment),l_=c(),Kl=r("span"),d_=n("LongformerForQuestionAnswering"),Zc=c(),wo=r("div"),v(jr.$$.fragment),c_=c(),Nt=r("p"),m_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),Rl=r("code"),h_=n("span start logits"),p_=n(" and "),Vl=r("code"),f_=n("span end logits"),g_=n(")."),u_=c(),Or=r("p"),__=n("This model inherits from "),Za=r("a"),w_=n("PreTrainedModel"),k_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),b_=c(),Pr=r("p"),v_=n("This model is also a PyTorch "),Nr=r("a"),y_=n("torch.nn.Module"),T_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$_=c(),Eo=r("div"),v(Ar.$$.fragment),L_=c(),At=r("p"),x_=n("The "),ei=r("a"),F_=n("LongformerForQuestionAnswering"),M_=n(" forward method, overrides the "),Gl=r("code"),E_=n("__call__"),q_=n(" special method."),z_=c(),v(Sn.$$.fragment),C_=c(),v(Bn.$$.fragment),em=c(),It=r("h2"),Wn=r("a"),Jl=r("span"),v(Ir.$$.fragment),j_=c(),Xl=r("span"),O_=n("TFLongformerModel"),om=c(),Xe=r("div"),v(Dr.$$.fragment),P_=c(),Yl=r("p"),N_=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),A_=c(),Sr=r("p"),I_=n("This model inherits from "),oi=r("a"),D_=n("TFPreTrainedModel"),S_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B_=c(),Br=r("p"),W_=n("This model is also a "),Wr=r("a"),Q_=n("tf.keras.Model"),U_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_=c(),v(Qn.$$.fragment),K_=c(),Dt=r("p"),R_=n("This class copies code from "),ti=r("a"),V_=n("TFRobertaModel"),G_=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Qr=r("a"),J_=n("Longformer: the Long-Document Transformer"),X_=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Y_=c(),Ur=r("p"),Z_=n("The self-attention module "),Zl=r("code"),ew=n("TFLongformerSelfAttention"),ow=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),tw=c(),Wo=r("div"),v(Hr.$$.fragment),nw=c(),St=r("p"),sw=n("The "),ni=r("a"),rw=n("TFLongformerModel"),aw=n(" forward method, overrides the "),ed=r("code"),iw=n("__call__"),lw=n(" special method."),dw=c(),v(Un.$$.fragment),tm=c(),Bt=r("h2"),Hn=r("a"),od=r("span"),v(Kr.$$.fragment),cw=c(),td=r("span"),mw=n("TFLongformerForMaskedLM"),nm=c(),ro=r("div"),v(Rr.$$.fragment),hw=c(),Vr=r("p"),pw=n("Longformer Model with a "),nd=r("code"),fw=n("language modeling"),gw=n(" head on top."),uw=c(),Gr=r("p"),_w=n("This model inherits from "),si=r("a"),ww=n("TFPreTrainedModel"),kw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bw=c(),Jr=r("p"),vw=n("This model is also a "),Xr=r("a"),yw=n("tf.keras.Model"),Tw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$w=c(),v(Kn.$$.fragment),Lw=c(),vo=r("div"),v(Yr.$$.fragment),xw=c(),Wt=r("p"),Fw=n("The "),ri=r("a"),Mw=n("TFLongformerForMaskedLM"),Ew=n(" forward method, overrides the "),sd=r("code"),qw=n("__call__"),zw=n(" special method."),Cw=c(),v(Rn.$$.fragment),jw=c(),v(Vn.$$.fragment),Ow=c(),v(Gn.$$.fragment),sm=c(),Qt=r("h2"),Jn=r("a"),rd=r("span"),v(Zr.$$.fragment),Pw=c(),ad=r("span"),Nw=n("TFLongformerForQuestionAnswering"),rm=c(),ao=r("div"),v(ea.$$.fragment),Aw=c(),Ut=r("p"),Iw=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),id=r("code"),Dw=n("span start logits"),Sw=n(" and "),ld=r("code"),Bw=n("span end logits"),Ww=n(")."),Qw=c(),oa=r("p"),Uw=n("This model inherits from "),ai=r("a"),Hw=n("TFPreTrainedModel"),Kw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rw=c(),ta=r("p"),Vw=n("This model is also a "),na=r("a"),Gw=n("tf.keras.Model"),Jw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xw=c(),v(Xn.$$.fragment),Yw=c(),yo=r("div"),v(sa.$$.fragment),Zw=c(),Ht=r("p"),ek=n("The "),ii=r("a"),ok=n("TFLongformerForQuestionAnswering"),tk=n(" forward method, overrides the "),dd=r("code"),nk=n("__call__"),sk=n(" special method."),rk=c(),v(Yn.$$.fragment),ak=c(),v(Zn.$$.fragment),ik=c(),v(es.$$.fragment),am=c(),Kt=r("h2"),os=r("a"),cd=r("span"),v(ra.$$.fragment),lk=c(),md=r("span"),dk=n("TFLongformerForSequenceClassification"),im=c(),io=r("div"),v(aa.$$.fragment),ck=c(),hd=r("p"),mk=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),hk=c(),ia=r("p"),pk=n("This model inherits from "),li=r("a"),fk=n("TFPreTrainedModel"),gk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uk=c(),la=r("p"),_k=n("This model is also a "),da=r("a"),wk=n("tf.keras.Model"),kk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bk=c(),v(ts.$$.fragment),vk=c(),To=r("div"),v(ca.$$.fragment),yk=c(),Rt=r("p"),Tk=n("The "),di=r("a"),$k=n("TFLongformerForSequenceClassification"),Lk=n(" forward method, overrides the "),pd=r("code"),xk=n("__call__"),Fk=n(" special method."),Mk=c(),v(ns.$$.fragment),Ek=c(),v(ss.$$.fragment),qk=c(),v(rs.$$.fragment),lm=c(),Vt=r("h2"),as=r("a"),fd=r("span"),v(ma.$$.fragment),zk=c(),gd=r("span"),Ck=n("TFLongformerForTokenClassification"),dm=c(),lo=r("div"),v(ha.$$.fragment),jk=c(),ud=r("p"),Ok=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Pk=c(),pa=r("p"),Nk=n("This model inherits from "),ci=r("a"),Ak=n("TFPreTrainedModel"),Ik=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dk=c(),fa=r("p"),Sk=n("This model is also a "),ga=r("a"),Bk=n("tf.keras.Model"),Wk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qk=c(),v(is.$$.fragment),Uk=c(),$o=r("div"),v(ua.$$.fragment),Hk=c(),Gt=r("p"),Kk=n("The "),mi=r("a"),Rk=n("TFLongformerForTokenClassification"),Vk=n(" forward method, overrides the "),_d=r("code"),Gk=n("__call__"),Jk=n(" special method."),Xk=c(),v(ls.$$.fragment),Yk=c(),v(ds.$$.fragment),Zk=c(),v(cs.$$.fragment),cm=c(),Jt=r("h2"),ms=r("a"),wd=r("span"),v(_a.$$.fragment),eb=c(),kd=r("span"),ob=n("TFLongformerForMultipleChoice"),mm=c(),co=r("div"),v(wa.$$.fragment),tb=c(),bd=r("p"),nb=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),sb=c(),ka=r("p"),rb=n("This model inherits from "),hi=r("a"),ab=n("TFPreTrainedModel"),ib=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=c(),ba=r("p"),db=n("This model is also a "),va=r("a"),cb=n("tf.keras.Model"),mb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hb=c(),v(hs.$$.fragment),pb=c(),qo=r("div"),v(ya.$$.fragment),fb=c(),Xt=r("p"),gb=n("The "),pi=r("a"),ub=n("TFLongformerForMultipleChoice"),_b=n(" forward method, overrides the "),vd=r("code"),wb=n("__call__"),kb=n(" special method."),bb=c(),v(ps.$$.fragment),vb=c(),v(fs.$$.fragment),this.h()},l(t){const g=FT('[data-svelte="svelte-1phssyn"]',document.head);l=a(g,"META",{name:!0,content:!0}),g.forEach(o),k=m(t),h=a(t,"H1",{class:!0});var Ta=i(h);_=a(Ta,"A",{id:!0,class:!0,href:!0});var yd=i(_);b=a(yd,"SPAN",{});var Td=i(b);y(d.$$.fragment,Td),Td.forEach(o),yd.forEach(o),p=m(Ta),z=a(Ta,"SPAN",{});var $d=i(z);ke=s($d,"Longformer"),$d.forEach(o),Ta.forEach(o),pe=m(t),A=a(t,"H2",{class:!0});var $a=i(A);ie=a($a,"A",{id:!0,class:!0,href:!0});var Ld=i(ie);ee=a(Ld,"SPAN",{});var xd=i(ee);y(F.$$.fragment,xd),xd.forEach(o),Ld.forEach(o),be=m($a),H=a($a,"SPAN",{});var Fd=i(H);ve=s(Fd,"Overview"),Fd.forEach(o),$a.forEach(o),fe=m(t),S=a(t,"P",{});var La=i(S);ye=s(La,"The Longformer model was presented in "),de=a(La,"A",{href:!0,rel:!0});var Md=i(de);G=s(Md,"Longformer: The Long-Document Transformer"),Md.forEach(o),Te=s(La," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),La.forEach(o),ge=m(t),W=a(t,"P",{});var Ed=i(W);$e=s(Ed,"The abstract from the paper is the following:"),Ed.forEach(o),ue=m(t),Q=a(t,"P",{});var qd=i(Q);me=a(qd,"EM",{});var zd=i(me);Le=s(zd,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),zd.forEach(o),qd.forEach(o),ne=m(t),C=a(t,"P",{});var Cd=i(C);O=s(Cd,"Tips:"),Cd.forEach(o),_e=m(t),U=a(t,"UL",{});var jd=i(U);oe=a(jd,"LI",{});var Io=i(oe);xe=s(Io,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),K=a(Io,"CODE",{});var Od=i(K);Fe=s(Od,"token_type_ids"),Od.forEach(o),Me=s(Io,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),j=a(Io,"CODE",{});var Pd=i(j);Ee=s(Pd,"tokenizer.sep_token"),Pd.forEach(o),J=s(Io,` (or
`),he=a(Io,"CODE",{});var Nd=i(he);qe=s(Nd,"</s>"),Nd.forEach(o),X=s(Io,")."),Io.forEach(o),jd.forEach(o),we=m(t),se=a(t,"P",{});var Yt=i(se);I=s(Yt,"This model was contributed by "),ce=a(Yt,"A",{href:!0,rel:!0});var Ad=i(ce);Y=s(Ad,"beltagy"),Ad.forEach(o),ze=s(Yt,". The Authors\u2019 code can be found "),Z=a(Yt,"A",{href:!0,rel:!0});var Id=i(Z);P=s(Id,"here"),Id.forEach(o),Ce=s(Yt,"."),Yt.forEach(o),N=m(t),re=a(t,"H2",{class:!0});var xa=i(re);le=a(xa,"A",{id:!0,class:!0,href:!0});var Dd=i(le);w=a(Dd,"SPAN",{});var Sd=i(w);y(E.$$.fragment,Sd),Sd.forEach(o),Dd.forEach(o),Ke=m(xa),te=a(xa,"SPAN",{});var Bd=i(te);Re=s(Bd,"Longformer Self Attention"),Bd.forEach(o),xa.forEach(o),Ie=m(t),M=a(t,"P",{});var Ye=i(M);Ve=s(Ye,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),De=tn(Ye),Se=s(Ye,` previous tokens and
`),Be=tn(Ye),R=s(Ye," succeding tokens with "),We=tn(Ye),V=s(Ye,` being the window length as defined in
`),Pe=a(Ye,"CODE",{});var Wd=i(Pe);Ge=s(Wd,"config.attention_window"),Wd.forEach(o),je=s(Ye,". Note that "),Ne=a(Ye,"CODE",{});var Qd=i(Ne);ae=s(Qd,"config.attention_window"),Qd.forEach(o),Je=s(Ye," can be of type "),Ni=a(Ye,"CODE",{});var Ud=i(Ni);Fh=s(Ud,"List"),Ud.forEach(o),Mh=s(Ye,` to define a
different `),ec=tn(Ye),oc=s(Ye,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Ai=a(Ye,"CODE",{});var Hd=i(Ai);Eh=s(Hd,"BertSelfAttention"),Hd.forEach(o),qh=s(Ye,"."),Ye.forEach(o),tc=m(t),Do=a(t,"P",{});var Zt=i(Do);zh=s(Zt,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),nc=tn(Zt),sc=s(Zt,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Ii=a(Zt,"EM",{});var Kd=i(Ii);Ch=s(Kd,"symmetric"),Kd.forEach(o),jh=s(Zt,"."),Zt.forEach(o),rc=m(t),So=a(t,"P",{});var en=i(So);Oh=s(en,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Di=a(en,"CODE",{});var Rd=i(Di);Ph=s(Rd,"global_attention_mask"),Rd.forEach(o),Nh=s(en,` at run-time appropriately. All Longformer models employ the following logic for
`),Si=a(en,"CODE",{});var Vd=i(Si);Ah=s(Vd,"global_attention_mask"),Vd.forEach(o),Ih=s(en,":"),en.forEach(o),ac=m(t),nn=a(t,"UL",{});var Fa=i(nn);Bi=a(Fa,"LI",{});var Gd=i(Bi);Dh=s(Gd,"0: the token attends \u201Clocally\u201D,"),Gd.forEach(o),Sh=m(Fa),Wi=a(Fa,"LI",{});var Jd=i(Wi);Bh=s(Jd,"1: the token attends \u201Cglobally\u201D."),Jd.forEach(o),Fa.forEach(o),ic=m(t),sn=a(t,"P",{});var Ma=i(sn);Wh=s(Ma,"For more information please also refer to "),Ea=a(Ma,"A",{href:!0});var Xd=i(Ea);Qh=s(Xd,"forward()"),Xd.forEach(o),Uh=s(Ma," method."),Ma.forEach(o),lc=m(t),ko=a(t,"P",{});var Qo=i(ko);Hh=s(Qo,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),dc=tn(Qo),cc=s(Qo,` to
`),mc=tn(Qo),hc=s(Qo,", with "),pc=tn(Qo),fc=s(Qo," being the sequence length and "),gc=tn(Qo),uc=s(Qo,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Qo.forEach(o),_c=m(t),rn=a(t,"P",{});var pm=i(rn);Kh=s(pm,"For more information, please refer to the official "),ks=a(pm,"A",{href:!0,rel:!0});var $b=i(ks);Rh=s($b,"paper"),$b.forEach(o),Vh=s(pm,"."),pm.forEach(o),wc=m(t),ot=a(t,"H2",{class:!0});var fm=i(ot);an=a(fm,"A",{id:!0,class:!0,href:!0});var Lb=i(an);Qi=a(Lb,"SPAN",{});var xb=i(Qi);y(bs.$$.fragment,xb),xb.forEach(o),Lb.forEach(o),Gh=m(fm),Ui=a(fm,"SPAN",{});var Fb=i(Ui);Jh=s(Fb,"Training"),Fb.forEach(o),fm.forEach(o),kc=m(t),tt=a(t,"P",{});var Yd=i(tt);qa=a(Yd,"A",{href:!0});var Mb=i(qa);Xh=s(Mb,"LongformerForMaskedLM"),Mb.forEach(o),Yh=s(Yd," is trained the exact same way "),za=a(Yd,"A",{href:!0});var Eb=i(za);Zh=s(Eb,"RobertaForMaskedLM"),Eb.forEach(o),ep=s(Yd,` is
trained and should be used as follows:`),Yd.forEach(o),bc=m(t),y(vs.$$.fragment,t),vc=m(t),nt=a(t,"H2",{class:!0});var gm=i(nt);ln=a(gm,"A",{id:!0,class:!0,href:!0});var qb=i(ln);Hi=a(qb,"SPAN",{});var zb=i(Hi);y(ys.$$.fragment,zb),zb.forEach(o),qb.forEach(o),op=m(gm),Ki=a(gm,"SPAN",{});var Cb=i(Ki);tp=s(Cb,"LongformerConfig"),Cb.forEach(o),gm.forEach(o),yc=m(t),po=a(t,"DIV",{class:!0});var Uo=i(po);y(Ts.$$.fragment,Uo),np=m(Uo),st=a(Uo,"P",{});var fi=i(st);sp=s(fi,"This is the configuration class to store the configuration of a "),Ca=a(fi,"A",{href:!0});var jb=i(Ca);rp=s(jb,"LongformerModel"),jb.forEach(o),ap=s(fi," or a "),ja=a(fi,"A",{href:!0});var Ob=i(ja);ip=s(Ob,"TFLongformerModel"),Ob.forEach(o),lp=s(fi,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),fi.forEach(o),dp=m(Uo),rt=a(Uo,"P",{});var gi=i(rt);cp=s(gi,"This is the configuration class to store the configuration of a "),Oa=a(gi,"A",{href:!0});var Pb=i(Oa);mp=s(Pb,"LongformerModel"),Pb.forEach(o),hp=s(gi,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),$s=a(gi,"A",{href:!0,rel:!0});var Nb=i($s);pp=s(Nb,"allenai/longformer-base-4096"),Nb.forEach(o),fp=s(gi,` architecture with a sequence
length 4,096.`),gi.forEach(o),gp=m(Uo),at=a(Uo,"P",{});var ui=i(at);up=s(ui,"Configuration objects inherit from "),Pa=a(ui,"A",{href:!0});var Ab=i(Pa);_p=s(Ab,"PretrainedConfig"),Ab.forEach(o),wp=s(ui,` and can be used to control the model outputs. Read the
documentation from `),Na=a(ui,"A",{href:!0});var Ib=i(Na);kp=s(Ib,"PretrainedConfig"),Ib.forEach(o),bp=s(ui," for more information."),ui.forEach(o),vp=m(Uo),y(dn.$$.fragment,Uo),Uo.forEach(o),Tc=m(t),it=a(t,"H2",{class:!0});var um=i(it);cn=a(um,"A",{id:!0,class:!0,href:!0});var Db=i(cn);Ri=a(Db,"SPAN",{});var Sb=i(Ri);y(Ls.$$.fragment,Sb),Sb.forEach(o),Db.forEach(o),yp=m(um),Vi=a(um,"SPAN",{});var Bb=i(Vi);Tp=s(Bb,"LongformerTokenizer"),Bb.forEach(o),um.forEach(o),$c=m(t),Oe=a(t,"DIV",{class:!0});var Qe=i(Oe);y(xs.$$.fragment,Qe),$p=m(Qe),Gi=a(Qe,"P",{});var Wb=i(Gi);Lp=s(Wb,"Constructs a Longformer tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Wb.forEach(o),xp=m(Qe),Ji=a(Qe,"P",{});var Qb=i(Ji);Fp=s(Qb,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Qb.forEach(o),Mp=m(Qe),y(mn.$$.fragment,Qe),Ep=m(Qe),Fs=a(Qe,"P",{});var _m=i(Fs);qp=s(_m,"You can get around that behavior by passing "),Xi=a(_m,"CODE",{});var Ub=i(Xi);zp=s(Ub,"add_prefix_space=True"),Ub.forEach(o),Cp=s(_m,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),_m.forEach(o),jp=m(Qe),y(hn.$$.fragment,Qe),Op=m(Qe),Ms=a(Qe,"P",{});var wm=i(Ms);Pp=s(wm,"This tokenizer inherits from "),Aa=a(wm,"A",{href:!0});var Hb=i(Aa);Np=s(Hb,"PreTrainedTokenizer"),Hb.forEach(o),Ap=s(wm,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wm.forEach(o),Ip=m(Qe),Bo=a(Qe,"DIV",{class:!0});var _i=i(Bo);y(Es.$$.fragment,_i),Dp=m(_i),Yi=a(_i,"P",{});var Kb=i(Yi);Sp=s(Kb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Longformer sequence has the following format:`),Kb.forEach(o),Bp=m(_i),qs=a(_i,"UL",{});var km=i(qs);Ia=a(km,"LI",{});var yb=i(Ia);Wp=s(yb,"single sequence: "),Zi=a(yb,"CODE",{});var Rb=i(Zi);Qp=s(Rb,"<s> X </s>"),Rb.forEach(o),yb.forEach(o),Up=m(km),Da=a(km,"LI",{});var Tb=i(Da);Hp=s(Tb,"pair of sequences: "),el=a(Tb,"CODE",{});var Vb=i(el);Kp=s(Vb,"<s> A </s></s> B </s>"),Vb.forEach(o),Tb.forEach(o),km.forEach(o),_i.forEach(o),Rp=m(Qe),pn=a(Qe,"DIV",{class:!0});var bm=i(pn);y(zs.$$.fragment,bm),Vp=m(bm),ol=a(bm,"P",{});var Gb=i(ol);Gp=s(Gb,"Converts a sequence of tokens (string) in a single string."),Gb.forEach(o),bm.forEach(o),Jp=m(Qe),fn=a(Qe,"DIV",{class:!0});var vm=i(fn);y(Cs.$$.fragment,vm),Xp=m(vm),tl=a(vm,"P",{});var Jb=i(tl);Yp=s(Jb,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. Longformer does
not make use of token type ids, therefore a list of zeros is returned.`),Jb.forEach(o),vm.forEach(o),Zp=m(Qe),gn=a(Qe,"DIV",{class:!0});var ym=i(gn);y(js.$$.fragment,ym),ef=m(ym),Os=a(ym,"P",{});var Tm=i(Os);of=s(Tm,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),nl=a(Tm,"CODE",{});var Xb=i(nl);tf=s(Xb,"prepare_for_model"),Xb.forEach(o),nf=s(Tm," method."),Tm.forEach(o),ym.forEach(o),Qe.forEach(o),Lc=m(t),lt=a(t,"H2",{class:!0});var $m=i(lt);un=a($m,"A",{id:!0,class:!0,href:!0});var Yb=i(un);sl=a(Yb,"SPAN",{});var Zb=i(sl);y(Ps.$$.fragment,Zb),Zb.forEach(o),Yb.forEach(o),sf=m($m),rl=a($m,"SPAN",{});var ev=i(rl);rf=s(ev,"LongformerTokenizerFast"),ev.forEach(o),$m.forEach(o),xc=m(t),Ao=a(t,"DIV",{class:!0});var wi=i(Ao);y(Ns.$$.fragment,wi),af=m(wi),As=a(wi,"P",{});var Lm=i(As);lf=s(Lm,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),al=a(Lm,"EM",{});var ov=i(al);df=s(ov,"tokenizers"),ov.forEach(o),cf=s(Lm," library)."),Lm.forEach(o),mf=m(wi),_n=a(wi,"P",{});var Zd=i(_n);Sa=a(Zd,"A",{href:!0});var tv=i(Sa);hf=s(tv,"LongformerTokenizerFast"),tv.forEach(o),pf=s(Zd," is identical to "),Ba=a(Zd,"A",{href:!0});var nv=i(Ba);ff=s(nv,"RobertaTokenizerFast"),nv.forEach(o),gf=s(Zd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Zd.forEach(o),wi.forEach(o),Fc=m(t),dt=a(t,"H2",{class:!0});var xm=i(dt);wn=a(xm,"A",{id:!0,class:!0,href:!0});var sv=i(wn);il=a(sv,"SPAN",{});var rv=i(il);y(Is.$$.fragment,rv),rv.forEach(o),sv.forEach(o),uf=m(xm),ll=a(xm,"SPAN",{});var av=i(ll);_f=s(av,"Longformer specific outputs"),av.forEach(o),xm.forEach(o),Mc=m(t),ct=a(t,"DIV",{class:!0});var Fm=i(ct);y(Ds.$$.fragment,Fm),wf=m(Fm),dl=a(Fm,"P",{});var iv=i(dl);kf=s(iv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),iv.forEach(o),Fm.forEach(o),Ec=m(t),mt=a(t,"DIV",{class:!0});var Mm=i(mt);y(Ss.$$.fragment,Mm),bf=m(Mm),cl=a(Mm,"P",{});var lv=i(cl);vf=s(lv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),lv.forEach(o),Mm.forEach(o),qc=m(t),ht=a(t,"DIV",{class:!0});var Em=i(ht);y(Bs.$$.fragment,Em),yf=m(Em),ml=a(Em,"P",{});var dv=i(ml);Tf=s(dv,"Base class for masked language models outputs."),dv.forEach(o),Em.forEach(o),zc=m(t),pt=a(t,"DIV",{class:!0});var qm=i(pt);y(Ws.$$.fragment,qm),$f=m(qm),hl=a(qm,"P",{});var cv=i(hl);Lf=s(cv,"Base class for outputs of question answering Longformer models."),cv.forEach(o),qm.forEach(o),Cc=m(t),ft=a(t,"DIV",{class:!0});var zm=i(ft);y(Qs.$$.fragment,zm),xf=m(zm),pl=a(zm,"P",{});var mv=i(pl);Ff=s(mv,"Base class for outputs of sentence classification models."),mv.forEach(o),zm.forEach(o),jc=m(t),gt=a(t,"DIV",{class:!0});var Cm=i(gt);y(Us.$$.fragment,Cm),Mf=m(Cm),fl=a(Cm,"P",{});var hv=i(fl);Ef=s(hv,"Base class for outputs of multiple choice Longformer models."),hv.forEach(o),Cm.forEach(o),Oc=m(t),ut=a(t,"DIV",{class:!0});var jm=i(ut);y(Hs.$$.fragment,jm),qf=m(jm),gl=a(jm,"P",{});var pv=i(gl);zf=s(pv,"Base class for outputs of token classification models."),pv.forEach(o),jm.forEach(o),Pc=m(t),_t=a(t,"DIV",{class:!0});var Om=i(_t);y(Ks.$$.fragment,Om),Cf=m(Om),ul=a(Om,"P",{});var fv=i(ul);jf=s(fv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),fv.forEach(o),Om.forEach(o),Nc=m(t),wt=a(t,"DIV",{class:!0});var Pm=i(wt);y(Rs.$$.fragment,Pm),Of=m(Pm),_l=a(Pm,"P",{});var gv=i(_l);Pf=s(gv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),gv.forEach(o),Pm.forEach(o),Ac=m(t),kt=a(t,"DIV",{class:!0});var Nm=i(kt);y(Vs.$$.fragment,Nm),Nf=m(Nm),wl=a(Nm,"P",{});var uv=i(wl);Af=s(uv,"Base class for masked language models outputs."),uv.forEach(o),Nm.forEach(o),Ic=m(t),bt=a(t,"DIV",{class:!0});var Am=i(bt);y(Gs.$$.fragment,Am),If=m(Am),kl=a(Am,"P",{});var _v=i(kl);Df=s(_v,"Base class for outputs of question answering Longformer models."),_v.forEach(o),Am.forEach(o),Dc=m(t),vt=a(t,"DIV",{class:!0});var Im=i(vt);y(Js.$$.fragment,Im),Sf=m(Im),bl=a(Im,"P",{});var wv=i(bl);Bf=s(wv,"Base class for outputs of sentence classification models."),wv.forEach(o),Im.forEach(o),Sc=m(t),yt=a(t,"DIV",{class:!0});var Dm=i(yt);y(Xs.$$.fragment,Dm),Wf=m(Dm),vl=a(Dm,"P",{});var kv=i(vl);Qf=s(kv,"Base class for outputs of multiple choice models."),kv.forEach(o),Dm.forEach(o),Bc=m(t),Tt=a(t,"DIV",{class:!0});var Sm=i(Tt);y(Ys.$$.fragment,Sm),Uf=m(Sm),yl=a(Sm,"P",{});var bv=i(yl);Hf=s(bv,"Base class for outputs of token classification models."),bv.forEach(o),Sm.forEach(o),Wc=m(t),$t=a(t,"H2",{class:!0});var Bm=i($t);kn=a(Bm,"A",{id:!0,class:!0,href:!0});var vv=i(kn);Tl=a(vv,"SPAN",{});var yv=i(Tl);y(Zs.$$.fragment,yv),yv.forEach(o),vv.forEach(o),Kf=m(Bm),$l=a(Bm,"SPAN",{});var Tv=i($l);Rf=s(Tv,"LongformerModel"),Tv.forEach(o),Bm.forEach(o),Qc=m(t),to=a(t,"DIV",{class:!0});var Lo=i(to);y(er.$$.fragment,Lo),Vf=m(Lo),Ll=a(Lo,"P",{});var $v=i(Ll);Gf=s($v,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),$v.forEach(o),Jf=m(Lo),or=a(Lo,"P",{});var Wm=i(or);Xf=s(Wm,"This model inherits from "),Wa=a(Wm,"A",{href:!0});var Lv=i(Wa);Yf=s(Lv,"PreTrainedModel"),Lv.forEach(o),Zf=s(Wm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wm.forEach(o),eg=m(Lo),tr=a(Lo,"P",{});var Qm=i(tr);og=s(Qm,"This model is also a PyTorch "),nr=a(Qm,"A",{href:!0,rel:!0});var xv=i(nr);tg=s(xv,"torch.nn.Module"),xv.forEach(o),ng=s(Qm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qm.forEach(o),sg=m(Lo),Lt=a(Lo,"P",{});var ki=i(Lt);rg=s(ki,"This class copied code from "),Qa=a(ki,"A",{href:!0});var Fv=i(Qa);ag=s(Fv,"RobertaModel"),Fv.forEach(o),ig=s(ki,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),sr=a(ki,"A",{href:!0,rel:!0});var Mv=i(sr);lg=s(Mv,`Longformer:
the Long-Document Transformer`),Mv.forEach(o),dg=s(ki,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),ki.forEach(o),cg=m(Lo),rr=a(Lo,"P",{});var Um=i(rr);mg=s(Um,"The self-attention module "),xl=a(Um,"CODE",{});var Ev=i(xl);hg=s(Ev,"LongformerSelfAttention"),Ev.forEach(o),pg=s(Um,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Um.forEach(o),fg=m(Lo),Fo=a(Lo,"DIV",{class:!0});var gs=i(Fo);y(ar.$$.fragment,gs),gg=m(gs),xt=a(gs,"P",{});var bi=i(xt);ug=s(bi,"The "),Ua=a(bi,"A",{href:!0});var qv=i(Ua);_g=s(qv,"LongformerModel"),qv.forEach(o),wg=s(bi," forward method, overrides the "),Fl=a(bi,"CODE",{});var zv=i(Fl);kg=s(zv,"__call__"),zv.forEach(o),bg=s(bi," special method."),bi.forEach(o),vg=m(gs),y(bn.$$.fragment,gs),yg=m(gs),y(vn.$$.fragment,gs),gs.forEach(o),Lo.forEach(o),Uc=m(t),Ft=a(t,"H2",{class:!0});var Hm=i(Ft);yn=a(Hm,"A",{id:!0,class:!0,href:!0});var Cv=i(yn);Ml=a(Cv,"SPAN",{});var jv=i(Ml);y(ir.$$.fragment,jv),jv.forEach(o),Cv.forEach(o),Tg=m(Hm),El=a(Hm,"SPAN",{});var Ov=i(El);$g=s(Ov,"LongformerForMaskedLM"),Ov.forEach(o),Hm.forEach(o),Hc=m(t),fo=a(t,"DIV",{class:!0});var Ho=i(fo);y(lr.$$.fragment,Ho),Lg=m(Ho),dr=a(Ho,"P",{});var Km=i(dr);xg=s(Km,"Longformer Model with a "),ql=a(Km,"CODE",{});var Pv=i(ql);Fg=s(Pv,"language modeling"),Pv.forEach(o),Mg=s(Km," head on top."),Km.forEach(o),Eg=m(Ho),cr=a(Ho,"P",{});var Rm=i(cr);qg=s(Rm,"This model inherits from "),Ha=a(Rm,"A",{href:!0});var Nv=i(Ha);zg=s(Nv,"PreTrainedModel"),Nv.forEach(o),Cg=s(Rm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rm.forEach(o),jg=m(Ho),mr=a(Ho,"P",{});var Vm=i(mr);Og=s(Vm,"This model is also a PyTorch "),hr=a(Vm,"A",{href:!0,rel:!0});var Av=i(hr);Pg=s(Av,"torch.nn.Module"),Av.forEach(o),Ng=s(Vm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vm.forEach(o),Ag=m(Ho),mo=a(Ho,"DIV",{class:!0});var zo=i(mo);y(pr.$$.fragment,zo),Ig=m(zo),Mt=a(zo,"P",{});var vi=i(Mt);Dg=s(vi,"The "),Ka=a(vi,"A",{href:!0});var Iv=i(Ka);Sg=s(Iv,"LongformerForMaskedLM"),Iv.forEach(o),Bg=s(vi," forward method, overrides the "),zl=a(vi,"CODE",{});var Dv=i(zl);Wg=s(Dv,"__call__"),Dv.forEach(o),Qg=s(vi," special method."),vi.forEach(o),Ug=m(zo),y(Tn.$$.fragment,zo),Hg=m(zo),y($n.$$.fragment,zo),Kg=m(zo),Cl=a(zo,"P",{});var Sv=i(Cl);Rg=s(Sv,"Let\u2019s try a very long input."),Sv.forEach(o),Vg=m(zo),y(Ln.$$.fragment,zo),zo.forEach(o),Ho.forEach(o),Kc=m(t),Et=a(t,"H2",{class:!0});var Gm=i(Et);xn=a(Gm,"A",{id:!0,class:!0,href:!0});var Bv=i(xn);jl=a(Bv,"SPAN",{});var Wv=i(jl);y(fr.$$.fragment,Wv),Wv.forEach(o),Bv.forEach(o),Gg=m(Gm),Ol=a(Gm,"SPAN",{});var Qv=i(Ol);Jg=s(Qv,"LongformerForSequenceClassification"),Qv.forEach(o),Gm.forEach(o),Rc=m(t),go=a(t,"DIV",{class:!0});var Ko=i(go);y(gr.$$.fragment,Ko),Xg=m(Ko),Pl=a(Ko,"P",{});var Uv=i(Pl);Yg=s(Uv,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Uv.forEach(o),Zg=m(Ko),ur=a(Ko,"P",{});var Jm=i(ur);eu=s(Jm,"This model inherits from "),Ra=a(Jm,"A",{href:!0});var Hv=i(Ra);ou=s(Hv,"PreTrainedModel"),Hv.forEach(o),tu=s(Jm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jm.forEach(o),nu=m(Ko),_r=a(Ko,"P",{});var Xm=i(_r);su=s(Xm,"This model is also a PyTorch "),wr=a(Xm,"A",{href:!0,rel:!0});var Kv=i(wr);ru=s(Kv,"torch.nn.Module"),Kv.forEach(o),au=s(Xm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xm.forEach(o),iu=m(Ko),so=a(Ko,"DIV",{class:!0});var xo=i(so);y(kr.$$.fragment,xo),lu=m(xo),qt=a(xo,"P",{});var yi=i(qt);du=s(yi,"The "),Va=a(yi,"A",{href:!0});var Rv=i(Va);cu=s(Rv,"LongformerForSequenceClassification"),Rv.forEach(o),mu=s(yi," forward method, overrides the "),Nl=a(yi,"CODE",{});var Vv=i(Nl);hu=s(Vv,"__call__"),Vv.forEach(o),pu=s(yi," special method."),yi.forEach(o),fu=m(xo),y(Fn.$$.fragment,xo),gu=m(xo),y(Mn.$$.fragment,xo),uu=m(xo),y(En.$$.fragment,xo),_u=m(xo),y(qn.$$.fragment,xo),wu=m(xo),y(zn.$$.fragment,xo),xo.forEach(o),Ko.forEach(o),Vc=m(t),zt=a(t,"H2",{class:!0});var Ym=i(zt);Cn=a(Ym,"A",{id:!0,class:!0,href:!0});var Gv=i(Cn);Al=a(Gv,"SPAN",{});var Jv=i(Al);y(br.$$.fragment,Jv),Jv.forEach(o),Gv.forEach(o),ku=m(Ym),Il=a(Ym,"SPAN",{});var Xv=i(Il);bu=s(Xv,"LongformerForMultipleChoice"),Xv.forEach(o),Ym.forEach(o),Gc=m(t),uo=a(t,"DIV",{class:!0});var Ro=i(uo);y(vr.$$.fragment,Ro),vu=m(Ro),Dl=a(Ro,"P",{});var Yv=i(Dl);yu=s(Yv,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Yv.forEach(o),Tu=m(Ro),yr=a(Ro,"P",{});var Zm=i(yr);$u=s(Zm,"This model inherits from "),Ga=a(Zm,"A",{href:!0});var Zv=i(Ga);Lu=s(Zv,"PreTrainedModel"),Zv.forEach(o),xu=s(Zm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm.forEach(o),Fu=m(Ro),Tr=a(Ro,"P",{});var eh=i(Tr);Mu=s(eh,"This model is also a PyTorch "),$r=a(eh,"A",{href:!0,rel:!0});var ey=i($r);Eu=s(ey,"torch.nn.Module"),ey.forEach(o),qu=s(eh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh.forEach(o),zu=m(Ro),Mo=a(Ro,"DIV",{class:!0});var us=i(Mo);y(Lr.$$.fragment,us),Cu=m(us),Ct=a(us,"P",{});var Ti=i(Ct);ju=s(Ti,"The "),Ja=a(Ti,"A",{href:!0});var oy=i(Ja);Ou=s(oy,"LongformerForMultipleChoice"),oy.forEach(o),Pu=s(Ti," forward method, overrides the "),Sl=a(Ti,"CODE",{});var ty=i(Sl);Nu=s(ty,"__call__"),ty.forEach(o),Au=s(Ti," special method."),Ti.forEach(o),Iu=m(us),y(jn.$$.fragment,us),Du=m(us),y(On.$$.fragment,us),us.forEach(o),Ro.forEach(o),Jc=m(t),jt=a(t,"H2",{class:!0});var oh=i(jt);Pn=a(oh,"A",{id:!0,class:!0,href:!0});var ny=i(Pn);Bl=a(ny,"SPAN",{});var sy=i(Bl);y(xr.$$.fragment,sy),sy.forEach(o),ny.forEach(o),Su=m(oh),Wl=a(oh,"SPAN",{});var ry=i(Wl);Bu=s(ry,"LongformerForTokenClassification"),ry.forEach(o),oh.forEach(o),Xc=m(t),_o=a(t,"DIV",{class:!0});var Vo=i(_o);y(Fr.$$.fragment,Vo),Wu=m(Vo),Ql=a(Vo,"P",{});var ay=i(Ql);Qu=s(ay,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ay.forEach(o),Uu=m(Vo),Mr=a(Vo,"P",{});var th=i(Mr);Hu=s(th,"This model inherits from "),Xa=a(th,"A",{href:!0});var iy=i(Xa);Ku=s(iy,"PreTrainedModel"),iy.forEach(o),Ru=s(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th.forEach(o),Vu=m(Vo),Er=a(Vo,"P",{});var nh=i(Er);Gu=s(nh,"This model is also a PyTorch "),qr=a(nh,"A",{href:!0,rel:!0});var ly=i(qr);Ju=s(ly,"torch.nn.Module"),ly.forEach(o),Xu=s(nh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nh.forEach(o),Yu=m(Vo),bo=a(Vo,"DIV",{class:!0});var Go=i(bo);y(zr.$$.fragment,Go),Zu=m(Go),Ot=a(Go,"P",{});var $i=i(Ot);e_=s($i,"The "),Ya=a($i,"A",{href:!0});var dy=i(Ya);o_=s(dy,"LongformerForTokenClassification"),dy.forEach(o),t_=s($i," forward method, overrides the "),Ul=a($i,"CODE",{});var cy=i(Ul);n_=s(cy,"__call__"),cy.forEach(o),s_=s($i," special method."),$i.forEach(o),r_=m(Go),y(Nn.$$.fragment,Go),a_=m(Go),y(An.$$.fragment,Go),i_=m(Go),y(In.$$.fragment,Go),Go.forEach(o),Vo.forEach(o),Yc=m(t),Pt=a(t,"H2",{class:!0});var sh=i(Pt);Dn=a(sh,"A",{id:!0,class:!0,href:!0});var my=i(Dn);Hl=a(my,"SPAN",{});var hy=i(Hl);y(Cr.$$.fragment,hy),hy.forEach(o),my.forEach(o),l_=m(sh),Kl=a(sh,"SPAN",{});var py=i(Kl);d_=s(py,"LongformerForQuestionAnswering"),py.forEach(o),sh.forEach(o),Zc=m(t),wo=a(t,"DIV",{class:!0});var Jo=i(wo);y(jr.$$.fragment,Jo),c_=m(Jo),Nt=a(Jo,"P",{});var Li=i(Nt);m_=s(Li,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),Rl=a(Li,"CODE",{});var fy=i(Rl);h_=s(fy,"span start logits"),fy.forEach(o),p_=s(Li," and "),Vl=a(Li,"CODE",{});var gy=i(Vl);f_=s(gy,"span end logits"),gy.forEach(o),g_=s(Li,")."),Li.forEach(o),u_=m(Jo),Or=a(Jo,"P",{});var rh=i(Or);__=s(rh,"This model inherits from "),Za=a(rh,"A",{href:!0});var uy=i(Za);w_=s(uy,"PreTrainedModel"),uy.forEach(o),k_=s(rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh.forEach(o),b_=m(Jo),Pr=a(Jo,"P",{});var ah=i(Pr);v_=s(ah,"This model is also a PyTorch "),Nr=a(ah,"A",{href:!0,rel:!0});var _y=i(Nr);y_=s(_y,"torch.nn.Module"),_y.forEach(o),T_=s(ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ah.forEach(o),$_=m(Jo),Eo=a(Jo,"DIV",{class:!0});var _s=i(Eo);y(Ar.$$.fragment,_s),L_=m(_s),At=a(_s,"P",{});var xi=i(At);x_=s(xi,"The "),ei=a(xi,"A",{href:!0});var wy=i(ei);F_=s(wy,"LongformerForQuestionAnswering"),wy.forEach(o),M_=s(xi," forward method, overrides the "),Gl=a(xi,"CODE",{});var ky=i(Gl);E_=s(ky,"__call__"),ky.forEach(o),q_=s(xi," special method."),xi.forEach(o),z_=m(_s),y(Sn.$$.fragment,_s),C_=m(_s),y(Bn.$$.fragment,_s),_s.forEach(o),Jo.forEach(o),em=m(t),It=a(t,"H2",{class:!0});var ih=i(It);Wn=a(ih,"A",{id:!0,class:!0,href:!0});var by=i(Wn);Jl=a(by,"SPAN",{});var vy=i(Jl);y(Ir.$$.fragment,vy),vy.forEach(o),by.forEach(o),j_=m(ih),Xl=a(ih,"SPAN",{});var yy=i(Xl);O_=s(yy,"TFLongformerModel"),yy.forEach(o),ih.forEach(o),om=m(t),Xe=a(t,"DIV",{class:!0});var ho=i(Xe);y(Dr.$$.fragment,ho),P_=m(ho),Yl=a(ho,"P",{});var Ty=i(Yl);N_=s(Ty,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Ty.forEach(o),A_=m(ho),Sr=a(ho,"P",{});var lh=i(Sr);I_=s(lh,"This model inherits from "),oi=a(lh,"A",{href:!0});var $y=i(oi);D_=s($y,"TFPreTrainedModel"),$y.forEach(o),S_=s(lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh.forEach(o),B_=m(ho),Br=a(ho,"P",{});var dh=i(Br);W_=s(dh,"This model is also a "),Wr=a(dh,"A",{href:!0,rel:!0});var Ly=i(Wr);Q_=s(Ly,"tf.keras.Model"),Ly.forEach(o),U_=s(dh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dh.forEach(o),H_=m(ho),y(Qn.$$.fragment,ho),K_=m(ho),Dt=a(ho,"P",{});var Fi=i(Dt);R_=s(Fi,"This class copies code from "),ti=a(Fi,"A",{href:!0});var xy=i(ti);V_=s(xy,"TFRobertaModel"),xy.forEach(o),G_=s(Fi,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Qr=a(Fi,"A",{href:!0,rel:!0});var Fy=i(Qr);J_=s(Fy,"Longformer: the Long-Document Transformer"),Fy.forEach(o),X_=s(Fi,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Fi.forEach(o),Y_=m(ho),Ur=a(ho,"P",{});var ch=i(Ur);Z_=s(ch,"The self-attention module "),Zl=a(ch,"CODE",{});var My=i(Zl);ew=s(My,"TFLongformerSelfAttention"),My.forEach(o),ow=s(ch,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),ch.forEach(o),tw=m(ho),Wo=a(ho,"DIV",{class:!0});var Mi=i(Wo);y(Hr.$$.fragment,Mi),nw=m(Mi),St=a(Mi,"P",{});var Ei=i(St);sw=s(Ei,"The "),ni=a(Ei,"A",{href:!0});var Ey=i(ni);rw=s(Ey,"TFLongformerModel"),Ey.forEach(o),aw=s(Ei," forward method, overrides the "),ed=a(Ei,"CODE",{});var qy=i(ed);iw=s(qy,"__call__"),qy.forEach(o),lw=s(Ei," special method."),Ei.forEach(o),dw=m(Mi),y(Un.$$.fragment,Mi),Mi.forEach(o),ho.forEach(o),tm=m(t),Bt=a(t,"H2",{class:!0});var mh=i(Bt);Hn=a(mh,"A",{id:!0,class:!0,href:!0});var zy=i(Hn);od=a(zy,"SPAN",{});var Cy=i(od);y(Kr.$$.fragment,Cy),Cy.forEach(o),zy.forEach(o),cw=m(mh),td=a(mh,"SPAN",{});var jy=i(td);mw=s(jy,"TFLongformerForMaskedLM"),jy.forEach(o),mh.forEach(o),nm=m(t),ro=a(t,"DIV",{class:!0});var Co=i(ro);y(Rr.$$.fragment,Co),hw=m(Co),Vr=a(Co,"P",{});var hh=i(Vr);pw=s(hh,"Longformer Model with a "),nd=a(hh,"CODE",{});var Oy=i(nd);fw=s(Oy,"language modeling"),Oy.forEach(o),gw=s(hh," head on top."),hh.forEach(o),uw=m(Co),Gr=a(Co,"P",{});var ph=i(Gr);_w=s(ph,"This model inherits from "),si=a(ph,"A",{href:!0});var Py=i(si);ww=s(Py,"TFPreTrainedModel"),Py.forEach(o),kw=s(ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph.forEach(o),bw=m(Co),Jr=a(Co,"P",{});var fh=i(Jr);vw=s(fh,"This model is also a "),Xr=a(fh,"A",{href:!0,rel:!0});var Ny=i(Xr);yw=s(Ny,"tf.keras.Model"),Ny.forEach(o),Tw=s(fh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fh.forEach(o),$w=m(Co),y(Kn.$$.fragment,Co),Lw=m(Co),vo=a(Co,"DIV",{class:!0});var Xo=i(vo);y(Yr.$$.fragment,Xo),xw=m(Xo),Wt=a(Xo,"P",{});var qi=i(Wt);Fw=s(qi,"The "),ri=a(qi,"A",{href:!0});var Ay=i(ri);Mw=s(Ay,"TFLongformerForMaskedLM"),Ay.forEach(o),Ew=s(qi," forward method, overrides the "),sd=a(qi,"CODE",{});var Iy=i(sd);qw=s(Iy,"__call__"),Iy.forEach(o),zw=s(qi," special method."),qi.forEach(o),Cw=m(Xo),y(Rn.$$.fragment,Xo),jw=m(Xo),y(Vn.$$.fragment,Xo),Ow=m(Xo),y(Gn.$$.fragment,Xo),Xo.forEach(o),Co.forEach(o),sm=m(t),Qt=a(t,"H2",{class:!0});var gh=i(Qt);Jn=a(gh,"A",{id:!0,class:!0,href:!0});var Dy=i(Jn);rd=a(Dy,"SPAN",{});var Sy=i(rd);y(Zr.$$.fragment,Sy),Sy.forEach(o),Dy.forEach(o),Pw=m(gh),ad=a(gh,"SPAN",{});var By=i(ad);Nw=s(By,"TFLongformerForQuestionAnswering"),By.forEach(o),gh.forEach(o),rm=m(t),ao=a(t,"DIV",{class:!0});var jo=i(ao);y(ea.$$.fragment,jo),Aw=m(jo),Ut=a(jo,"P",{});var zi=i(Ut);Iw=s(zi,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),id=a(zi,"CODE",{});var Wy=i(id);Dw=s(Wy,"span start logits"),Wy.forEach(o),Sw=s(zi," and "),ld=a(zi,"CODE",{});var Qy=i(ld);Bw=s(Qy,"span end logits"),Qy.forEach(o),Ww=s(zi,")."),zi.forEach(o),Qw=m(jo),oa=a(jo,"P",{});var uh=i(oa);Uw=s(uh,"This model inherits from "),ai=a(uh,"A",{href:!0});var Uy=i(ai);Hw=s(Uy,"TFPreTrainedModel"),Uy.forEach(o),Kw=s(uh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uh.forEach(o),Rw=m(jo),ta=a(jo,"P",{});var _h=i(ta);Vw=s(_h,"This model is also a "),na=a(_h,"A",{href:!0,rel:!0});var Hy=i(na);Gw=s(Hy,"tf.keras.Model"),Hy.forEach(o),Jw=s(_h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_h.forEach(o),Xw=m(jo),y(Xn.$$.fragment,jo),Yw=m(jo),yo=a(jo,"DIV",{class:!0});var Yo=i(yo);y(sa.$$.fragment,Yo),Zw=m(Yo),Ht=a(Yo,"P",{});var Ci=i(Ht);ek=s(Ci,"The "),ii=a(Ci,"A",{href:!0});var Ky=i(ii);ok=s(Ky,"TFLongformerForQuestionAnswering"),Ky.forEach(o),tk=s(Ci," forward method, overrides the "),dd=a(Ci,"CODE",{});var Ry=i(dd);nk=s(Ry,"__call__"),Ry.forEach(o),sk=s(Ci," special method."),Ci.forEach(o),rk=m(Yo),y(Yn.$$.fragment,Yo),ak=m(Yo),y(Zn.$$.fragment,Yo),ik=m(Yo),y(es.$$.fragment,Yo),Yo.forEach(o),jo.forEach(o),am=m(t),Kt=a(t,"H2",{class:!0});var wh=i(Kt);os=a(wh,"A",{id:!0,class:!0,href:!0});var Vy=i(os);cd=a(Vy,"SPAN",{});var Gy=i(cd);y(ra.$$.fragment,Gy),Gy.forEach(o),Vy.forEach(o),lk=m(wh),md=a(wh,"SPAN",{});var Jy=i(md);dk=s(Jy,"TFLongformerForSequenceClassification"),Jy.forEach(o),wh.forEach(o),im=m(t),io=a(t,"DIV",{class:!0});var Oo=i(io);y(aa.$$.fragment,Oo),ck=m(Oo),hd=a(Oo,"P",{});var Xy=i(hd);mk=s(Xy,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Xy.forEach(o),hk=m(Oo),ia=a(Oo,"P",{});var kh=i(ia);pk=s(kh,"This model inherits from "),li=a(kh,"A",{href:!0});var Yy=i(li);fk=s(Yy,"TFPreTrainedModel"),Yy.forEach(o),gk=s(kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh.forEach(o),uk=m(Oo),la=a(Oo,"P",{});var bh=i(la);_k=s(bh,"This model is also a "),da=a(bh,"A",{href:!0,rel:!0});var Zy=i(da);wk=s(Zy,"tf.keras.Model"),Zy.forEach(o),kk=s(bh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh.forEach(o),bk=m(Oo),y(ts.$$.fragment,Oo),vk=m(Oo),To=a(Oo,"DIV",{class:!0});var Zo=i(To);y(ca.$$.fragment,Zo),yk=m(Zo),Rt=a(Zo,"P",{});var ji=i(Rt);Tk=s(ji,"The "),di=a(ji,"A",{href:!0});var eT=i(di);$k=s(eT,"TFLongformerForSequenceClassification"),eT.forEach(o),Lk=s(ji," forward method, overrides the "),pd=a(ji,"CODE",{});var oT=i(pd);xk=s(oT,"__call__"),oT.forEach(o),Fk=s(ji," special method."),ji.forEach(o),Mk=m(Zo),y(ns.$$.fragment,Zo),Ek=m(Zo),y(ss.$$.fragment,Zo),qk=m(Zo),y(rs.$$.fragment,Zo),Zo.forEach(o),Oo.forEach(o),lm=m(t),Vt=a(t,"H2",{class:!0});var vh=i(Vt);as=a(vh,"A",{id:!0,class:!0,href:!0});var tT=i(as);fd=a(tT,"SPAN",{});var nT=i(fd);y(ma.$$.fragment,nT),nT.forEach(o),tT.forEach(o),zk=m(vh),gd=a(vh,"SPAN",{});var sT=i(gd);Ck=s(sT,"TFLongformerForTokenClassification"),sT.forEach(o),vh.forEach(o),dm=m(t),lo=a(t,"DIV",{class:!0});var Po=i(lo);y(ha.$$.fragment,Po),jk=m(Po),ud=a(Po,"P",{});var rT=i(ud);Ok=s(rT,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),rT.forEach(o),Pk=m(Po),pa=a(Po,"P",{});var yh=i(pa);Nk=s(yh,"This model inherits from "),ci=a(yh,"A",{href:!0});var aT=i(ci);Ak=s(aT,"TFPreTrainedModel"),aT.forEach(o),Ik=s(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(o),Dk=m(Po),fa=a(Po,"P",{});var Th=i(fa);Sk=s(Th,"This model is also a "),ga=a(Th,"A",{href:!0,rel:!0});var iT=i(ga);Bk=s(iT,"tf.keras.Model"),iT.forEach(o),Wk=s(Th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Th.forEach(o),Qk=m(Po),y(is.$$.fragment,Po),Uk=m(Po),$o=a(Po,"DIV",{class:!0});var et=i($o);y(ua.$$.fragment,et),Hk=m(et),Gt=a(et,"P",{});var Oi=i(Gt);Kk=s(Oi,"The "),mi=a(Oi,"A",{href:!0});var lT=i(mi);Rk=s(lT,"TFLongformerForTokenClassification"),lT.forEach(o),Vk=s(Oi," forward method, overrides the "),_d=a(Oi,"CODE",{});var dT=i(_d);Gk=s(dT,"__call__"),dT.forEach(o),Jk=s(Oi," special method."),Oi.forEach(o),Xk=m(et),y(ls.$$.fragment,et),Yk=m(et),y(ds.$$.fragment,et),Zk=m(et),y(cs.$$.fragment,et),et.forEach(o),Po.forEach(o),cm=m(t),Jt=a(t,"H2",{class:!0});var $h=i(Jt);ms=a($h,"A",{id:!0,class:!0,href:!0});var cT=i(ms);wd=a(cT,"SPAN",{});var mT=i(wd);y(_a.$$.fragment,mT),mT.forEach(o),cT.forEach(o),eb=m($h),kd=a($h,"SPAN",{});var hT=i(kd);ob=s(hT,"TFLongformerForMultipleChoice"),hT.forEach(o),$h.forEach(o),mm=m(t),co=a(t,"DIV",{class:!0});var No=i(co);y(wa.$$.fragment,No),tb=m(No),bd=a(No,"P",{});var pT=i(bd);nb=s(pT,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),pT.forEach(o),sb=m(No),ka=a(No,"P",{});var Lh=i(ka);rb=s(Lh,"This model inherits from "),hi=a(Lh,"A",{href:!0});var fT=i(hi);ab=s(fT,"TFPreTrainedModel"),fT.forEach(o),ib=s(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(o),lb=m(No),ba=a(No,"P",{});var xh=i(ba);db=s(xh,"This model is also a "),va=a(xh,"A",{href:!0,rel:!0});var gT=i(va);cb=s(gT,"tf.keras.Model"),gT.forEach(o),mb=s(xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xh.forEach(o),hb=m(No),y(hs.$$.fragment,No),pb=m(No),qo=a(No,"DIV",{class:!0});var ws=i(qo);y(ya.$$.fragment,ws),fb=m(ws),Xt=a(ws,"P",{});var Pi=i(Xt);gb=s(Pi,"The "),pi=a(Pi,"A",{href:!0});var uT=i(pi);ub=s(uT,"TFLongformerForMultipleChoice"),uT.forEach(o),_b=s(Pi," forward method, overrides the "),vd=a(Pi,"CODE",{});var _T=i(vd);wb=s(_T,"__call__"),_T.forEach(o),kb=s(Pi," special method."),Pi.forEach(o),bb=m(ws),y(ps.$$.fragment,ws),vb=m(ws),y(fs.$$.fragment,ws),ws.forEach(o),No.forEach(o),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(_1)),u(_,"id","longformer"),u(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_,"href","#longformer"),u(h,"class","relative group"),u(ie,"id","overview"),u(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ie,"href","#overview"),u(A,"class","relative group"),u(de,"href","https://arxiv.org/pdf/2004.05150.pdf"),u(de,"rel","nofollow"),u(ce,"href","https://huggingface.co/beltagy"),u(ce,"rel","nofollow"),u(Z,"href","https://github.com/allenai/longformer"),u(Z,"rel","nofollow"),u(le,"id","longformer-self-attention"),u(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(le,"href","#longformer-self-attention"),u(re,"class","relative group"),De.a=Se,Be.a=R,We.a=V,ec.a=oc,nc.a=sc,u(Ea,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel.forward"),dc.a=cc,mc.a=hc,pc.a=fc,gc.a=uc,u(ks,"href","https://arxiv.org/pdf/2004.05150.pdf"),u(ks,"rel","nofollow"),u(an,"id","training"),u(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(an,"href","#training"),u(ot,"class","relative group"),u(qa,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),u(za,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),u(ln,"id","transformers.LongformerConfig"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.LongformerConfig"),u(nt,"class","relative group"),u(Ca,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),u(ja,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),u(Oa,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),u($s,"href","https://huggingface.co/allenai/longformer-base-4096"),u($s,"rel","nofollow"),u(Pa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Na,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"id","transformers.LongformerTokenizer"),u(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(cn,"href","#transformers.LongformerTokenizer"),u(it,"class","relative group"),u(Aa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(un,"id","transformers.LongformerTokenizerFast"),u(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(un,"href","#transformers.LongformerTokenizerFast"),u(lt,"class","relative group"),u(Sa,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerTokenizerFast"),u(Ba,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizerFast"),u(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wn,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),u(dt,"class","relative group"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.LongformerModel"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.LongformerModel"),u($t,"class","relative group"),u(Wa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(nr,"rel","nofollow"),u(Qa,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),u(sr,"href","https://arxiv.org/abs/2004.05150"),u(sr,"rel","nofollow"),u(Ua,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),u(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"id","transformers.LongformerForMaskedLM"),u(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yn,"href","#transformers.LongformerForMaskedLM"),u(Ft,"class","relative group"),u(Ha,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(hr,"rel","nofollow"),u(Ka,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMaskedLM"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.LongformerForSequenceClassification"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.LongformerForSequenceClassification"),u(Et,"class","relative group"),u(Ra,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(wr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wr,"rel","nofollow"),u(Va,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.LongformerForMultipleChoice"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.LongformerForMultipleChoice"),u(zt,"class","relative group"),u(Ga,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u($r,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($r,"rel","nofollow"),u(Ja,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),u(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.LongformerForTokenClassification"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.LongformerForTokenClassification"),u(jt,"class","relative group"),u(Xa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(qr,"rel","nofollow"),u(Ya,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForTokenClassification"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dn,"id","transformers.LongformerForQuestionAnswering"),u(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dn,"href","#transformers.LongformerForQuestionAnswering"),u(Pt,"class","relative group"),u(Za,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Nr,"rel","nofollow"),u(ei,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),u(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.TFLongformerModel"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.TFLongformerModel"),u(It,"class","relative group"),u(oi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wr,"rel","nofollow"),u(ti,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),u(Qr,"href","https://arxiv.org/abs/2004.05150"),u(Qr,"rel","nofollow"),u(ni,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerModel"),u(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.TFLongformerForMaskedLM"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.TFLongformerForMaskedLM"),u(Bt,"class","relative group"),u(si,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Xr,"rel","nofollow"),u(ri,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"id","transformers.TFLongformerForQuestionAnswering"),u(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jn,"href","#transformers.TFLongformerForQuestionAnswering"),u(Qt,"class","relative group"),u(ai,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(na,"rel","nofollow"),u(ii,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(os,"id","transformers.TFLongformerForSequenceClassification"),u(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(os,"href","#transformers.TFLongformerForSequenceClassification"),u(Kt,"class","relative group"),u(li,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(da,"rel","nofollow"),u(di,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(as,"id","transformers.TFLongformerForTokenClassification"),u(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(as,"href","#transformers.TFLongformerForTokenClassification"),u(Vt,"class","relative group"),u(ci,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ga,"rel","nofollow"),u(mi,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.TFLongformerForMultipleChoice"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.TFLongformerForMultipleChoice"),u(Jt,"class","relative group"),u(hi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(va,"rel","nofollow"),u(pi,"href","/docs/transformers/main/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),u(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,l),f(t,k,g),f(t,h,g),e(h,_),e(_,b),T(d,b,null),e(h,p),e(h,z),e(z,ke),f(t,pe,g),f(t,A,g),e(A,ie),e(ie,ee),T(F,ee,null),e(A,be),e(A,H),e(H,ve),f(t,fe,g),f(t,S,g),e(S,ye),e(S,de),e(de,G),e(S,Te),f(t,ge,g),f(t,W,g),e(W,$e),f(t,ue,g),f(t,Q,g),e(Q,me),e(me,Le),f(t,ne,g),f(t,C,g),e(C,O),f(t,_e,g),f(t,U,g),e(U,oe),e(oe,xe),e(oe,K),e(K,Fe),e(oe,Me),e(oe,j),e(j,Ee),e(oe,J),e(oe,he),e(he,qe),e(oe,X),f(t,we,g),f(t,se,g),e(se,I),e(se,ce),e(ce,Y),e(se,ze),e(se,Z),e(Z,P),e(se,Ce),f(t,N,g),f(t,re,g),e(re,le),e(le,w),T(E,w,null),e(re,Ke),e(re,te),e(te,Re),f(t,Ie,g),f(t,M,g),e(M,Ve),De.m(eo,M),e(M,Se),Be.m(B,M),e(M,R),We.m(oo,M),e(M,V),e(M,Pe),e(Pe,Ge),e(M,je),e(M,Ne),e(Ne,ae),e(M,Je),e(M,Ni),e(Ni,Fh),e(M,Mh),ec.m(wT,M),e(M,oc),e(M,Ai),e(Ai,Eh),e(M,qh),f(t,tc,g),f(t,Do,g),e(Do,zh),nc.m(kT,Do),e(Do,sc),e(Do,Ii),e(Ii,Ch),e(Do,jh),f(t,rc,g),f(t,So,g),e(So,Oh),e(So,Di),e(Di,Ph),e(So,Nh),e(So,Si),e(Si,Ah),e(So,Ih),f(t,ac,g),f(t,nn,g),e(nn,Bi),e(Bi,Dh),e(nn,Sh),e(nn,Wi),e(Wi,Bh),f(t,ic,g),f(t,sn,g),e(sn,Wh),e(sn,Ea),e(Ea,Qh),e(sn,Uh),f(t,lc,g),f(t,ko,g),e(ko,Hh),dc.m(bT,ko),e(ko,cc),mc.m(vT,ko),e(ko,hc),pc.m(yT,ko),e(ko,fc),gc.m(TT,ko),e(ko,uc),f(t,_c,g),f(t,rn,g),e(rn,Kh),e(rn,ks),e(ks,Rh),e(rn,Vh),f(t,wc,g),f(t,ot,g),e(ot,an),e(an,Qi),T(bs,Qi,null),e(ot,Gh),e(ot,Ui),e(Ui,Jh),f(t,kc,g),f(t,tt,g),e(tt,qa),e(qa,Xh),e(tt,Yh),e(tt,za),e(za,Zh),e(tt,ep),f(t,bc,g),T(vs,t,g),f(t,vc,g),f(t,nt,g),e(nt,ln),e(ln,Hi),T(ys,Hi,null),e(nt,op),e(nt,Ki),e(Ki,tp),f(t,yc,g),f(t,po,g),T(Ts,po,null),e(po,np),e(po,st),e(st,sp),e(st,Ca),e(Ca,rp),e(st,ap),e(st,ja),e(ja,ip),e(st,lp),e(po,dp),e(po,rt),e(rt,cp),e(rt,Oa),e(Oa,mp),e(rt,hp),e(rt,$s),e($s,pp),e(rt,fp),e(po,gp),e(po,at),e(at,up),e(at,Pa),e(Pa,_p),e(at,wp),e(at,Na),e(Na,kp),e(at,bp),e(po,vp),T(dn,po,null),f(t,Tc,g),f(t,it,g),e(it,cn),e(cn,Ri),T(Ls,Ri,null),e(it,yp),e(it,Vi),e(Vi,Tp),f(t,$c,g),f(t,Oe,g),T(xs,Oe,null),e(Oe,$p),e(Oe,Gi),e(Gi,Lp),e(Oe,xp),e(Oe,Ji),e(Ji,Fp),e(Oe,Mp),T(mn,Oe,null),e(Oe,Ep),e(Oe,Fs),e(Fs,qp),e(Fs,Xi),e(Xi,zp),e(Fs,Cp),e(Oe,jp),T(hn,Oe,null),e(Oe,Op),e(Oe,Ms),e(Ms,Pp),e(Ms,Aa),e(Aa,Np),e(Ms,Ap),e(Oe,Ip),e(Oe,Bo),T(Es,Bo,null),e(Bo,Dp),e(Bo,Yi),e(Yi,Sp),e(Bo,Bp),e(Bo,qs),e(qs,Ia),e(Ia,Wp),e(Ia,Zi),e(Zi,Qp),e(qs,Up),e(qs,Da),e(Da,Hp),e(Da,el),e(el,Kp),e(Oe,Rp),e(Oe,pn),T(zs,pn,null),e(pn,Vp),e(pn,ol),e(ol,Gp),e(Oe,Jp),e(Oe,fn),T(Cs,fn,null),e(fn,Xp),e(fn,tl),e(tl,Yp),e(Oe,Zp),e(Oe,gn),T(js,gn,null),e(gn,ef),e(gn,Os),e(Os,of),e(Os,nl),e(nl,tf),e(Os,nf),f(t,Lc,g),f(t,lt,g),e(lt,un),e(un,sl),T(Ps,sl,null),e(lt,sf),e(lt,rl),e(rl,rf),f(t,xc,g),f(t,Ao,g),T(Ns,Ao,null),e(Ao,af),e(Ao,As),e(As,lf),e(As,al),e(al,df),e(As,cf),e(Ao,mf),e(Ao,_n),e(_n,Sa),e(Sa,hf),e(_n,pf),e(_n,Ba),e(Ba,ff),e(_n,gf),f(t,Fc,g),f(t,dt,g),e(dt,wn),e(wn,il),T(Is,il,null),e(dt,uf),e(dt,ll),e(ll,_f),f(t,Mc,g),f(t,ct,g),T(Ds,ct,null),e(ct,wf),e(ct,dl),e(dl,kf),f(t,Ec,g),f(t,mt,g),T(Ss,mt,null),e(mt,bf),e(mt,cl),e(cl,vf),f(t,qc,g),f(t,ht,g),T(Bs,ht,null),e(ht,yf),e(ht,ml),e(ml,Tf),f(t,zc,g),f(t,pt,g),T(Ws,pt,null),e(pt,$f),e(pt,hl),e(hl,Lf),f(t,Cc,g),f(t,ft,g),T(Qs,ft,null),e(ft,xf),e(ft,pl),e(pl,Ff),f(t,jc,g),f(t,gt,g),T(Us,gt,null),e(gt,Mf),e(gt,fl),e(fl,Ef),f(t,Oc,g),f(t,ut,g),T(Hs,ut,null),e(ut,qf),e(ut,gl),e(gl,zf),f(t,Pc,g),f(t,_t,g),T(Ks,_t,null),e(_t,Cf),e(_t,ul),e(ul,jf),f(t,Nc,g),f(t,wt,g),T(Rs,wt,null),e(wt,Of),e(wt,_l),e(_l,Pf),f(t,Ac,g),f(t,kt,g),T(Vs,kt,null),e(kt,Nf),e(kt,wl),e(wl,Af),f(t,Ic,g),f(t,bt,g),T(Gs,bt,null),e(bt,If),e(bt,kl),e(kl,Df),f(t,Dc,g),f(t,vt,g),T(Js,vt,null),e(vt,Sf),e(vt,bl),e(bl,Bf),f(t,Sc,g),f(t,yt,g),T(Xs,yt,null),e(yt,Wf),e(yt,vl),e(vl,Qf),f(t,Bc,g),f(t,Tt,g),T(Ys,Tt,null),e(Tt,Uf),e(Tt,yl),e(yl,Hf),f(t,Wc,g),f(t,$t,g),e($t,kn),e(kn,Tl),T(Zs,Tl,null),e($t,Kf),e($t,$l),e($l,Rf),f(t,Qc,g),f(t,to,g),T(er,to,null),e(to,Vf),e(to,Ll),e(Ll,Gf),e(to,Jf),e(to,or),e(or,Xf),e(or,Wa),e(Wa,Yf),e(or,Zf),e(to,eg),e(to,tr),e(tr,og),e(tr,nr),e(nr,tg),e(tr,ng),e(to,sg),e(to,Lt),e(Lt,rg),e(Lt,Qa),e(Qa,ag),e(Lt,ig),e(Lt,sr),e(sr,lg),e(Lt,dg),e(to,cg),e(to,rr),e(rr,mg),e(rr,xl),e(xl,hg),e(rr,pg),e(to,fg),e(to,Fo),T(ar,Fo,null),e(Fo,gg),e(Fo,xt),e(xt,ug),e(xt,Ua),e(Ua,_g),e(xt,wg),e(xt,Fl),e(Fl,kg),e(xt,bg),e(Fo,vg),T(bn,Fo,null),e(Fo,yg),T(vn,Fo,null),f(t,Uc,g),f(t,Ft,g),e(Ft,yn),e(yn,Ml),T(ir,Ml,null),e(Ft,Tg),e(Ft,El),e(El,$g),f(t,Hc,g),f(t,fo,g),T(lr,fo,null),e(fo,Lg),e(fo,dr),e(dr,xg),e(dr,ql),e(ql,Fg),e(dr,Mg),e(fo,Eg),e(fo,cr),e(cr,qg),e(cr,Ha),e(Ha,zg),e(cr,Cg),e(fo,jg),e(fo,mr),e(mr,Og),e(mr,hr),e(hr,Pg),e(mr,Ng),e(fo,Ag),e(fo,mo),T(pr,mo,null),e(mo,Ig),e(mo,Mt),e(Mt,Dg),e(Mt,Ka),e(Ka,Sg),e(Mt,Bg),e(Mt,zl),e(zl,Wg),e(Mt,Qg),e(mo,Ug),T(Tn,mo,null),e(mo,Hg),T($n,mo,null),e(mo,Kg),e(mo,Cl),e(Cl,Rg),e(mo,Vg),T(Ln,mo,null),f(t,Kc,g),f(t,Et,g),e(Et,xn),e(xn,jl),T(fr,jl,null),e(Et,Gg),e(Et,Ol),e(Ol,Jg),f(t,Rc,g),f(t,go,g),T(gr,go,null),e(go,Xg),e(go,Pl),e(Pl,Yg),e(go,Zg),e(go,ur),e(ur,eu),e(ur,Ra),e(Ra,ou),e(ur,tu),e(go,nu),e(go,_r),e(_r,su),e(_r,wr),e(wr,ru),e(_r,au),e(go,iu),e(go,so),T(kr,so,null),e(so,lu),e(so,qt),e(qt,du),e(qt,Va),e(Va,cu),e(qt,mu),e(qt,Nl),e(Nl,hu),e(qt,pu),e(so,fu),T(Fn,so,null),e(so,gu),T(Mn,so,null),e(so,uu),T(En,so,null),e(so,_u),T(qn,so,null),e(so,wu),T(zn,so,null),f(t,Vc,g),f(t,zt,g),e(zt,Cn),e(Cn,Al),T(br,Al,null),e(zt,ku),e(zt,Il),e(Il,bu),f(t,Gc,g),f(t,uo,g),T(vr,uo,null),e(uo,vu),e(uo,Dl),e(Dl,yu),e(uo,Tu),e(uo,yr),e(yr,$u),e(yr,Ga),e(Ga,Lu),e(yr,xu),e(uo,Fu),e(uo,Tr),e(Tr,Mu),e(Tr,$r),e($r,Eu),e(Tr,qu),e(uo,zu),e(uo,Mo),T(Lr,Mo,null),e(Mo,Cu),e(Mo,Ct),e(Ct,ju),e(Ct,Ja),e(Ja,Ou),e(Ct,Pu),e(Ct,Sl),e(Sl,Nu),e(Ct,Au),e(Mo,Iu),T(jn,Mo,null),e(Mo,Du),T(On,Mo,null),f(t,Jc,g),f(t,jt,g),e(jt,Pn),e(Pn,Bl),T(xr,Bl,null),e(jt,Su),e(jt,Wl),e(Wl,Bu),f(t,Xc,g),f(t,_o,g),T(Fr,_o,null),e(_o,Wu),e(_o,Ql),e(Ql,Qu),e(_o,Uu),e(_o,Mr),e(Mr,Hu),e(Mr,Xa),e(Xa,Ku),e(Mr,Ru),e(_o,Vu),e(_o,Er),e(Er,Gu),e(Er,qr),e(qr,Ju),e(Er,Xu),e(_o,Yu),e(_o,bo),T(zr,bo,null),e(bo,Zu),e(bo,Ot),e(Ot,e_),e(Ot,Ya),e(Ya,o_),e(Ot,t_),e(Ot,Ul),e(Ul,n_),e(Ot,s_),e(bo,r_),T(Nn,bo,null),e(bo,a_),T(An,bo,null),e(bo,i_),T(In,bo,null),f(t,Yc,g),f(t,Pt,g),e(Pt,Dn),e(Dn,Hl),T(Cr,Hl,null),e(Pt,l_),e(Pt,Kl),e(Kl,d_),f(t,Zc,g),f(t,wo,g),T(jr,wo,null),e(wo,c_),e(wo,Nt),e(Nt,m_),e(Nt,Rl),e(Rl,h_),e(Nt,p_),e(Nt,Vl),e(Vl,f_),e(Nt,g_),e(wo,u_),e(wo,Or),e(Or,__),e(Or,Za),e(Za,w_),e(Or,k_),e(wo,b_),e(wo,Pr),e(Pr,v_),e(Pr,Nr),e(Nr,y_),e(Pr,T_),e(wo,$_),e(wo,Eo),T(Ar,Eo,null),e(Eo,L_),e(Eo,At),e(At,x_),e(At,ei),e(ei,F_),e(At,M_),e(At,Gl),e(Gl,E_),e(At,q_),e(Eo,z_),T(Sn,Eo,null),e(Eo,C_),T(Bn,Eo,null),f(t,em,g),f(t,It,g),e(It,Wn),e(Wn,Jl),T(Ir,Jl,null),e(It,j_),e(It,Xl),e(Xl,O_),f(t,om,g),f(t,Xe,g),T(Dr,Xe,null),e(Xe,P_),e(Xe,Yl),e(Yl,N_),e(Xe,A_),e(Xe,Sr),e(Sr,I_),e(Sr,oi),e(oi,D_),e(Sr,S_),e(Xe,B_),e(Xe,Br),e(Br,W_),e(Br,Wr),e(Wr,Q_),e(Br,U_),e(Xe,H_),T(Qn,Xe,null),e(Xe,K_),e(Xe,Dt),e(Dt,R_),e(Dt,ti),e(ti,V_),e(Dt,G_),e(Dt,Qr),e(Qr,J_),e(Dt,X_),e(Xe,Y_),e(Xe,Ur),e(Ur,Z_),e(Ur,Zl),e(Zl,ew),e(Ur,ow),e(Xe,tw),e(Xe,Wo),T(Hr,Wo,null),e(Wo,nw),e(Wo,St),e(St,sw),e(St,ni),e(ni,rw),e(St,aw),e(St,ed),e(ed,iw),e(St,lw),e(Wo,dw),T(Un,Wo,null),f(t,tm,g),f(t,Bt,g),e(Bt,Hn),e(Hn,od),T(Kr,od,null),e(Bt,cw),e(Bt,td),e(td,mw),f(t,nm,g),f(t,ro,g),T(Rr,ro,null),e(ro,hw),e(ro,Vr),e(Vr,pw),e(Vr,nd),e(nd,fw),e(Vr,gw),e(ro,uw),e(ro,Gr),e(Gr,_w),e(Gr,si),e(si,ww),e(Gr,kw),e(ro,bw),e(ro,Jr),e(Jr,vw),e(Jr,Xr),e(Xr,yw),e(Jr,Tw),e(ro,$w),T(Kn,ro,null),e(ro,Lw),e(ro,vo),T(Yr,vo,null),e(vo,xw),e(vo,Wt),e(Wt,Fw),e(Wt,ri),e(ri,Mw),e(Wt,Ew),e(Wt,sd),e(sd,qw),e(Wt,zw),e(vo,Cw),T(Rn,vo,null),e(vo,jw),T(Vn,vo,null),e(vo,Ow),T(Gn,vo,null),f(t,sm,g),f(t,Qt,g),e(Qt,Jn),e(Jn,rd),T(Zr,rd,null),e(Qt,Pw),e(Qt,ad),e(ad,Nw),f(t,rm,g),f(t,ao,g),T(ea,ao,null),e(ao,Aw),e(ao,Ut),e(Ut,Iw),e(Ut,id),e(id,Dw),e(Ut,Sw),e(Ut,ld),e(ld,Bw),e(Ut,Ww),e(ao,Qw),e(ao,oa),e(oa,Uw),e(oa,ai),e(ai,Hw),e(oa,Kw),e(ao,Rw),e(ao,ta),e(ta,Vw),e(ta,na),e(na,Gw),e(ta,Jw),e(ao,Xw),T(Xn,ao,null),e(ao,Yw),e(ao,yo),T(sa,yo,null),e(yo,Zw),e(yo,Ht),e(Ht,ek),e(Ht,ii),e(ii,ok),e(Ht,tk),e(Ht,dd),e(dd,nk),e(Ht,sk),e(yo,rk),T(Yn,yo,null),e(yo,ak),T(Zn,yo,null),e(yo,ik),T(es,yo,null),f(t,am,g),f(t,Kt,g),e(Kt,os),e(os,cd),T(ra,cd,null),e(Kt,lk),e(Kt,md),e(md,dk),f(t,im,g),f(t,io,g),T(aa,io,null),e(io,ck),e(io,hd),e(hd,mk),e(io,hk),e(io,ia),e(ia,pk),e(ia,li),e(li,fk),e(ia,gk),e(io,uk),e(io,la),e(la,_k),e(la,da),e(da,wk),e(la,kk),e(io,bk),T(ts,io,null),e(io,vk),e(io,To),T(ca,To,null),e(To,yk),e(To,Rt),e(Rt,Tk),e(Rt,di),e(di,$k),e(Rt,Lk),e(Rt,pd),e(pd,xk),e(Rt,Fk),e(To,Mk),T(ns,To,null),e(To,Ek),T(ss,To,null),e(To,qk),T(rs,To,null),f(t,lm,g),f(t,Vt,g),e(Vt,as),e(as,fd),T(ma,fd,null),e(Vt,zk),e(Vt,gd),e(gd,Ck),f(t,dm,g),f(t,lo,g),T(ha,lo,null),e(lo,jk),e(lo,ud),e(ud,Ok),e(lo,Pk),e(lo,pa),e(pa,Nk),e(pa,ci),e(ci,Ak),e(pa,Ik),e(lo,Dk),e(lo,fa),e(fa,Sk),e(fa,ga),e(ga,Bk),e(fa,Wk),e(lo,Qk),T(is,lo,null),e(lo,Uk),e(lo,$o),T(ua,$o,null),e($o,Hk),e($o,Gt),e(Gt,Kk),e(Gt,mi),e(mi,Rk),e(Gt,Vk),e(Gt,_d),e(_d,Gk),e(Gt,Jk),e($o,Xk),T(ls,$o,null),e($o,Yk),T(ds,$o,null),e($o,Zk),T(cs,$o,null),f(t,cm,g),f(t,Jt,g),e(Jt,ms),e(ms,wd),T(_a,wd,null),e(Jt,eb),e(Jt,kd),e(kd,ob),f(t,mm,g),f(t,co,g),T(wa,co,null),e(co,tb),e(co,bd),e(bd,nb),e(co,sb),e(co,ka),e(ka,rb),e(ka,hi),e(hi,ab),e(ka,ib),e(co,lb),e(co,ba),e(ba,db),e(ba,va),e(va,cb),e(ba,mb),e(co,hb),T(hs,co,null),e(co,pb),e(co,qo),T(ya,qo,null),e(qo,fb),e(qo,Xt),e(Xt,gb),e(Xt,pi),e(pi,ub),e(Xt,_b),e(Xt,vd),e(vd,wb),e(Xt,kb),e(qo,bb),T(ps,qo,null),e(qo,vb),T(fs,qo,null),hm=!0},p(t,[g]){const Ta={};g&2&&(Ta.$$scope={dirty:g,ctx:t}),dn.$set(Ta);const yd={};g&2&&(yd.$$scope={dirty:g,ctx:t}),mn.$set(yd);const Td={};g&2&&(Td.$$scope={dirty:g,ctx:t}),hn.$set(Td);const $d={};g&2&&($d.$$scope={dirty:g,ctx:t}),bn.$set($d);const $a={};g&2&&($a.$$scope={dirty:g,ctx:t}),vn.$set($a);const Ld={};g&2&&(Ld.$$scope={dirty:g,ctx:t}),Tn.$set(Ld);const xd={};g&2&&(xd.$$scope={dirty:g,ctx:t}),$n.$set(xd);const Fd={};g&2&&(Fd.$$scope={dirty:g,ctx:t}),Ln.$set(Fd);const La={};g&2&&(La.$$scope={dirty:g,ctx:t}),Fn.$set(La);const Md={};g&2&&(Md.$$scope={dirty:g,ctx:t}),Mn.$set(Md);const Ed={};g&2&&(Ed.$$scope={dirty:g,ctx:t}),En.$set(Ed);const qd={};g&2&&(qd.$$scope={dirty:g,ctx:t}),qn.$set(qd);const zd={};g&2&&(zd.$$scope={dirty:g,ctx:t}),zn.$set(zd);const Cd={};g&2&&(Cd.$$scope={dirty:g,ctx:t}),jn.$set(Cd);const jd={};g&2&&(jd.$$scope={dirty:g,ctx:t}),On.$set(jd);const Io={};g&2&&(Io.$$scope={dirty:g,ctx:t}),Nn.$set(Io);const Od={};g&2&&(Od.$$scope={dirty:g,ctx:t}),An.$set(Od);const Pd={};g&2&&(Pd.$$scope={dirty:g,ctx:t}),In.$set(Pd);const Nd={};g&2&&(Nd.$$scope={dirty:g,ctx:t}),Sn.$set(Nd);const Yt={};g&2&&(Yt.$$scope={dirty:g,ctx:t}),Bn.$set(Yt);const Ad={};g&2&&(Ad.$$scope={dirty:g,ctx:t}),Qn.$set(Ad);const Id={};g&2&&(Id.$$scope={dirty:g,ctx:t}),Un.$set(Id);const xa={};g&2&&(xa.$$scope={dirty:g,ctx:t}),Kn.$set(xa);const Dd={};g&2&&(Dd.$$scope={dirty:g,ctx:t}),Rn.$set(Dd);const Sd={};g&2&&(Sd.$$scope={dirty:g,ctx:t}),Vn.$set(Sd);const Bd={};g&2&&(Bd.$$scope={dirty:g,ctx:t}),Gn.$set(Bd);const Ye={};g&2&&(Ye.$$scope={dirty:g,ctx:t}),Xn.$set(Ye);const Wd={};g&2&&(Wd.$$scope={dirty:g,ctx:t}),Yn.$set(Wd);const Qd={};g&2&&(Qd.$$scope={dirty:g,ctx:t}),Zn.$set(Qd);const Ud={};g&2&&(Ud.$$scope={dirty:g,ctx:t}),es.$set(Ud);const Hd={};g&2&&(Hd.$$scope={dirty:g,ctx:t}),ts.$set(Hd);const Zt={};g&2&&(Zt.$$scope={dirty:g,ctx:t}),ns.$set(Zt);const Kd={};g&2&&(Kd.$$scope={dirty:g,ctx:t}),ss.$set(Kd);const en={};g&2&&(en.$$scope={dirty:g,ctx:t}),rs.$set(en);const Rd={};g&2&&(Rd.$$scope={dirty:g,ctx:t}),is.$set(Rd);const Vd={};g&2&&(Vd.$$scope={dirty:g,ctx:t}),ls.$set(Vd);const Fa={};g&2&&(Fa.$$scope={dirty:g,ctx:t}),ds.$set(Fa);const Gd={};g&2&&(Gd.$$scope={dirty:g,ctx:t}),cs.$set(Gd);const Jd={};g&2&&(Jd.$$scope={dirty:g,ctx:t}),hs.$set(Jd);const Ma={};g&2&&(Ma.$$scope={dirty:g,ctx:t}),ps.$set(Ma);const Xd={};g&2&&(Xd.$$scope={dirty:g,ctx:t}),fs.$set(Xd)},i(t){hm||($(d.$$.fragment,t),$(F.$$.fragment,t),$(E.$$.fragment,t),$(bs.$$.fragment,t),$(vs.$$.fragment,t),$(ys.$$.fragment,t),$(Ts.$$.fragment,t),$(dn.$$.fragment,t),$(Ls.$$.fragment,t),$(xs.$$.fragment,t),$(mn.$$.fragment,t),$(hn.$$.fragment,t),$(Es.$$.fragment,t),$(zs.$$.fragment,t),$(Cs.$$.fragment,t),$(js.$$.fragment,t),$(Ps.$$.fragment,t),$(Ns.$$.fragment,t),$(Is.$$.fragment,t),$(Ds.$$.fragment,t),$(Ss.$$.fragment,t),$(Bs.$$.fragment,t),$(Ws.$$.fragment,t),$(Qs.$$.fragment,t),$(Us.$$.fragment,t),$(Hs.$$.fragment,t),$(Ks.$$.fragment,t),$(Rs.$$.fragment,t),$(Vs.$$.fragment,t),$(Gs.$$.fragment,t),$(Js.$$.fragment,t),$(Xs.$$.fragment,t),$(Ys.$$.fragment,t),$(Zs.$$.fragment,t),$(er.$$.fragment,t),$(ar.$$.fragment,t),$(bn.$$.fragment,t),$(vn.$$.fragment,t),$(ir.$$.fragment,t),$(lr.$$.fragment,t),$(pr.$$.fragment,t),$(Tn.$$.fragment,t),$($n.$$.fragment,t),$(Ln.$$.fragment,t),$(fr.$$.fragment,t),$(gr.$$.fragment,t),$(kr.$$.fragment,t),$(Fn.$$.fragment,t),$(Mn.$$.fragment,t),$(En.$$.fragment,t),$(qn.$$.fragment,t),$(zn.$$.fragment,t),$(br.$$.fragment,t),$(vr.$$.fragment,t),$(Lr.$$.fragment,t),$(jn.$$.fragment,t),$(On.$$.fragment,t),$(xr.$$.fragment,t),$(Fr.$$.fragment,t),$(zr.$$.fragment,t),$(Nn.$$.fragment,t),$(An.$$.fragment,t),$(In.$$.fragment,t),$(Cr.$$.fragment,t),$(jr.$$.fragment,t),$(Ar.$$.fragment,t),$(Sn.$$.fragment,t),$(Bn.$$.fragment,t),$(Ir.$$.fragment,t),$(Dr.$$.fragment,t),$(Qn.$$.fragment,t),$(Hr.$$.fragment,t),$(Un.$$.fragment,t),$(Kr.$$.fragment,t),$(Rr.$$.fragment,t),$(Kn.$$.fragment,t),$(Yr.$$.fragment,t),$(Rn.$$.fragment,t),$(Vn.$$.fragment,t),$(Gn.$$.fragment,t),$(Zr.$$.fragment,t),$(ea.$$.fragment,t),$(Xn.$$.fragment,t),$(sa.$$.fragment,t),$(Yn.$$.fragment,t),$(Zn.$$.fragment,t),$(es.$$.fragment,t),$(ra.$$.fragment,t),$(aa.$$.fragment,t),$(ts.$$.fragment,t),$(ca.$$.fragment,t),$(ns.$$.fragment,t),$(ss.$$.fragment,t),$(rs.$$.fragment,t),$(ma.$$.fragment,t),$(ha.$$.fragment,t),$(is.$$.fragment,t),$(ua.$$.fragment,t),$(ls.$$.fragment,t),$(ds.$$.fragment,t),$(cs.$$.fragment,t),$(_a.$$.fragment,t),$(wa.$$.fragment,t),$(hs.$$.fragment,t),$(ya.$$.fragment,t),$(ps.$$.fragment,t),$(fs.$$.fragment,t),hm=!0)},o(t){L(d.$$.fragment,t),L(F.$$.fragment,t),L(E.$$.fragment,t),L(bs.$$.fragment,t),L(vs.$$.fragment,t),L(ys.$$.fragment,t),L(Ts.$$.fragment,t),L(dn.$$.fragment,t),L(Ls.$$.fragment,t),L(xs.$$.fragment,t),L(mn.$$.fragment,t),L(hn.$$.fragment,t),L(Es.$$.fragment,t),L(zs.$$.fragment,t),L(Cs.$$.fragment,t),L(js.$$.fragment,t),L(Ps.$$.fragment,t),L(Ns.$$.fragment,t),L(Is.$$.fragment,t),L(Ds.$$.fragment,t),L(Ss.$$.fragment,t),L(Bs.$$.fragment,t),L(Ws.$$.fragment,t),L(Qs.$$.fragment,t),L(Us.$$.fragment,t),L(Hs.$$.fragment,t),L(Ks.$$.fragment,t),L(Rs.$$.fragment,t),L(Vs.$$.fragment,t),L(Gs.$$.fragment,t),L(Js.$$.fragment,t),L(Xs.$$.fragment,t),L(Ys.$$.fragment,t),L(Zs.$$.fragment,t),L(er.$$.fragment,t),L(ar.$$.fragment,t),L(bn.$$.fragment,t),L(vn.$$.fragment,t),L(ir.$$.fragment,t),L(lr.$$.fragment,t),L(pr.$$.fragment,t),L(Tn.$$.fragment,t),L($n.$$.fragment,t),L(Ln.$$.fragment,t),L(fr.$$.fragment,t),L(gr.$$.fragment,t),L(kr.$$.fragment,t),L(Fn.$$.fragment,t),L(Mn.$$.fragment,t),L(En.$$.fragment,t),L(qn.$$.fragment,t),L(zn.$$.fragment,t),L(br.$$.fragment,t),L(vr.$$.fragment,t),L(Lr.$$.fragment,t),L(jn.$$.fragment,t),L(On.$$.fragment,t),L(xr.$$.fragment,t),L(Fr.$$.fragment,t),L(zr.$$.fragment,t),L(Nn.$$.fragment,t),L(An.$$.fragment,t),L(In.$$.fragment,t),L(Cr.$$.fragment,t),L(jr.$$.fragment,t),L(Ar.$$.fragment,t),L(Sn.$$.fragment,t),L(Bn.$$.fragment,t),L(Ir.$$.fragment,t),L(Dr.$$.fragment,t),L(Qn.$$.fragment,t),L(Hr.$$.fragment,t),L(Un.$$.fragment,t),L(Kr.$$.fragment,t),L(Rr.$$.fragment,t),L(Kn.$$.fragment,t),L(Yr.$$.fragment,t),L(Rn.$$.fragment,t),L(Vn.$$.fragment,t),L(Gn.$$.fragment,t),L(Zr.$$.fragment,t),L(ea.$$.fragment,t),L(Xn.$$.fragment,t),L(sa.$$.fragment,t),L(Yn.$$.fragment,t),L(Zn.$$.fragment,t),L(es.$$.fragment,t),L(ra.$$.fragment,t),L(aa.$$.fragment,t),L(ts.$$.fragment,t),L(ca.$$.fragment,t),L(ns.$$.fragment,t),L(ss.$$.fragment,t),L(rs.$$.fragment,t),L(ma.$$.fragment,t),L(ha.$$.fragment,t),L(is.$$.fragment,t),L(ua.$$.fragment,t),L(ls.$$.fragment,t),L(ds.$$.fragment,t),L(cs.$$.fragment,t),L(_a.$$.fragment,t),L(wa.$$.fragment,t),L(hs.$$.fragment,t),L(ya.$$.fragment,t),L(ps.$$.fragment,t),L(fs.$$.fragment,t),hm=!1},d(t){o(l),t&&o(k),t&&o(h),x(d),t&&o(pe),t&&o(A),x(F),t&&o(fe),t&&o(S),t&&o(ge),t&&o(W),t&&o(ue),t&&o(Q),t&&o(ne),t&&o(C),t&&o(_e),t&&o(U),t&&o(we),t&&o(se),t&&o(N),t&&o(re),x(E),t&&o(Ie),t&&o(M),t&&o(tc),t&&o(Do),t&&o(rc),t&&o(So),t&&o(ac),t&&o(nn),t&&o(ic),t&&o(sn),t&&o(lc),t&&o(ko),t&&o(_c),t&&o(rn),t&&o(wc),t&&o(ot),x(bs),t&&o(kc),t&&o(tt),t&&o(bc),x(vs,t),t&&o(vc),t&&o(nt),x(ys),t&&o(yc),t&&o(po),x(Ts),x(dn),t&&o(Tc),t&&o(it),x(Ls),t&&o($c),t&&o(Oe),x(xs),x(mn),x(hn),x(Es),x(zs),x(Cs),x(js),t&&o(Lc),t&&o(lt),x(Ps),t&&o(xc),t&&o(Ao),x(Ns),t&&o(Fc),t&&o(dt),x(Is),t&&o(Mc),t&&o(ct),x(Ds),t&&o(Ec),t&&o(mt),x(Ss),t&&o(qc),t&&o(ht),x(Bs),t&&o(zc),t&&o(pt),x(Ws),t&&o(Cc),t&&o(ft),x(Qs),t&&o(jc),t&&o(gt),x(Us),t&&o(Oc),t&&o(ut),x(Hs),t&&o(Pc),t&&o(_t),x(Ks),t&&o(Nc),t&&o(wt),x(Rs),t&&o(Ac),t&&o(kt),x(Vs),t&&o(Ic),t&&o(bt),x(Gs),t&&o(Dc),t&&o(vt),x(Js),t&&o(Sc),t&&o(yt),x(Xs),t&&o(Bc),t&&o(Tt),x(Ys),t&&o(Wc),t&&o($t),x(Zs),t&&o(Qc),t&&o(to),x(er),x(ar),x(bn),x(vn),t&&o(Uc),t&&o(Ft),x(ir),t&&o(Hc),t&&o(fo),x(lr),x(pr),x(Tn),x($n),x(Ln),t&&o(Kc),t&&o(Et),x(fr),t&&o(Rc),t&&o(go),x(gr),x(kr),x(Fn),x(Mn),x(En),x(qn),x(zn),t&&o(Vc),t&&o(zt),x(br),t&&o(Gc),t&&o(uo),x(vr),x(Lr),x(jn),x(On),t&&o(Jc),t&&o(jt),x(xr),t&&o(Xc),t&&o(_o),x(Fr),x(zr),x(Nn),x(An),x(In),t&&o(Yc),t&&o(Pt),x(Cr),t&&o(Zc),t&&o(wo),x(jr),x(Ar),x(Sn),x(Bn),t&&o(em),t&&o(It),x(Ir),t&&o(om),t&&o(Xe),x(Dr),x(Qn),x(Hr),x(Un),t&&o(tm),t&&o(Bt),x(Kr),t&&o(nm),t&&o(ro),x(Rr),x(Kn),x(Yr),x(Rn),x(Vn),x(Gn),t&&o(sm),t&&o(Qt),x(Zr),t&&o(rm),t&&o(ao),x(ea),x(Xn),x(sa),x(Yn),x(Zn),x(es),t&&o(am),t&&o(Kt),x(ra),t&&o(im),t&&o(io),x(aa),x(ts),x(ca),x(ns),x(ss),x(rs),t&&o(lm),t&&o(Vt),x(ma),t&&o(dm),t&&o(lo),x(ha),x(is),x(ua),x(ls),x(ds),x(cs),t&&o(cm),t&&o(Jt),x(_a),t&&o(mm),t&&o(co),x(wa),x(hs),x(ya),x(ps),x(fs)}}}const _1={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function w1(q){return MT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class L1 extends $T{constructor(l){super();LT(this,l,w1,u1,xT,{})}}export{L1 as default,_1 as metadata};
