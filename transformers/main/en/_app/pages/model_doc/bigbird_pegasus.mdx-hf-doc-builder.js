import{S as zd,i as Fd,s as xd,e as n,k as h,w as y,t as i,M as Cd,c as s,d as t,m as g,a,x as w,h as d,b as p,G as e,g as b,y as k,q as B,o as T,B as $,v as Ed,L as K}from"../../chunks/vendor-hf-doc-builder.js";import{T as rs}from"../../chunks/Tip-hf-doc-builder.js";import{D as Q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as J}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as W}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as V}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Md(P){let l,_,c,u,v;return u=new J({props:{code:"",highlighted:""}}),{c(){l=n("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Example:"),m.forEach(t),c=g(r),w(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),k(u,r,m),v=!0},p:K,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function jd(P){let l,_,c,u,v;return{c(){l=n("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var x=a(c);u=d(x,"Module"),x.forEach(t),v=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){b(r,l,m),e(l,_),e(l,c),e(c,u),e(l,v)},d(r){r&&t(l)}}}function Sd(P){let l,_,c,u,v;return u=new J({props:{code:`from transformers import PegasusTokenizerFast, BigBirdPegasusModel
import torch

tokenizer = PegasusTokenizerFast.from_pretrained("google/bigbird-pegasus-large-arxiv")
model = BigBirdPegasusModel.from_pretrained("google/bigbird-pegasus-large-arxiv")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizerFast, BigBirdPegasusModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizerFast.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Example:"),m.forEach(t),c=g(r),w(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),k(u,r,m),v=!0},p:K,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Od(P){let l,_,c,u,v;return{c(){l=n("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var x=a(c);u=d(x,"Module"),x.forEach(t),v=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){b(r,l,m),e(l,_),e(l,c),e(c,u),e(l,v)},d(r){r&&t(l)}}}function Ad(P){let l,_,c,u,v;return u=new J({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusForConditionalGeneration

model = BigBirdPegasusForConditionalGeneration.from_pretrained("google/bigbird-pegasus-large-arxiv")
tokenizer = PegasusTokenizer.from_pretrained("google/bigbird-pegasus-large-arxiv")

ARTICLE_TO_SUMMARIZE = (
    "The dominant sequence transduction models are based on complex recurrent or convolutional neural "
    "networks in an encoder-decoder configuration. The best performing models also connect the encoder "
    "and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, "
    "based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. "
    "Experiments on two machine translation tasks show these models to be superior in quality "
    "while being more parallelizable and requiring significantly less time to train."
)
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=4096, return_tensors="pt", truncation=True)

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=15)
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, BigBirdPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;The dominant sequence transduction models are based on complex recurrent or convolutional neural &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;networks in an encoder-decoder configuration. The best performing models also connect the encoder &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Experiments on two machine translation tasks show these models to be superior in quality &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;while being more parallelizable and requiring significantly less time to train.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">4096</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">15</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;dominant sequence models are based on recurrent or convolutional neural networks .&#x27;</span>`}}),{c(){l=n("p"),_=i("Summarization example:"),c=h(),y(u.$$.fragment)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Summarization example:"),m.forEach(t),c=g(r),w(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),k(u,r,m),v=!0},p:K,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Ld(P){let l,_,c,u,v;return{c(){l=n("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var x=a(c);u=d(x,"Module"),x.forEach(t),v=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){b(r,l,m),e(l,_),e(l,c),e(c,u),e(l,v)},d(r){r&&t(l)}}}function Nd(P){let l,_,c,u,v;return u=new J({props:{code:`import torch
from transformers import PegasusTokenizerFast, BigBirdPegasusForSequenceClassification

tokenizer = PegasusTokenizerFast.from_pretrained("hf-internal-testing/tiny-random-bigbird_pegasus")
model = BigBirdPegasusForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-bigbird_pegasus")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizerFast, BigBirdPegasusForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizerFast.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),_=i("Example of single-label classification:"),c=h(),y(u.$$.fragment)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Example of single-label classification:"),m.forEach(t),c=g(r),w(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),k(u,r,m),v=!0},p:K,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Id(P){let l,_;return l=new J({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BigBirdPegasusForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-bigbird_pegasus", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){y(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){k(l,c,u),_=!0},p:K,i(c){_||(B(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function Dd(P){let l,_,c,u,v;return u=new J({props:{code:`import torch
from transformers import PegasusTokenizerFast, BigBirdPegasusForSequenceClassification

tokenizer = PegasusTokenizerFast.from_pretrained("hf-internal-testing/tiny-random-bigbird_pegasus")
model = BigBirdPegasusForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-bigbird_pegasus", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizerFast, BigBirdPegasusForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizerFast.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),_=i("Example of multi-label classification:"),c=h(),y(u.$$.fragment)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Example of multi-label classification:"),m.forEach(t),c=g(r),w(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),k(u,r,m),v=!0},p:K,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Qd(P){let l,_;return l=new J({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BigBirdPegasusForSequenceClassification.from_pretrained(
    "hf-internal-testing/tiny-random-bigbird_pegasus", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){k(l,c,u),_=!0},p:K,i(c){_||(B(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function Wd(P){let l,_,c,u,v;return{c(){l=n("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var x=a(c);u=d(x,"Module"),x.forEach(t),v=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){b(r,l,m),e(l,_),e(l,c),e(c,u),e(l,v)},d(r){r&&t(l)}}}function Gd(P){let l,_,c,u,v;return u=new J({props:{code:`from transformers import PegasusTokenizerFast, BigBirdPegasusForQuestionAnswering
import torch

tokenizer = PegasusTokenizerFast.from_pretrained("hf-internal-testing/tiny-random-bigbird_pegasus")
model = BigBirdPegasusForQuestionAnswering.from_pretrained("hf-internal-testing/tiny-random-bigbird_pegasus")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizerFast, BigBirdPegasusForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizerFast.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;&#x27;</span>`}}),{c(){l=n("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Example:"),m.forEach(t),c=g(r),w(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),k(u,r,m),v=!0},p:K,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Ud(P){let l,_;return l=new J({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.96</span>`}}),{c(){y(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){k(l,c,u),_=!0},p:K,i(c){_||(B(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function Hd(P){let l,_,c,u,v;return u=new J({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusForCausalLM

tokenizer = PegasusTokenizer.from_pretrained("google/bigbird-pegasus-large-arxiv")
model = BigBirdPegasusForCausalLM.from_pretrained(
    "google/bigbird-pegasus-large-arxiv", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, BigBirdPegasusForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=n("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(r){l=s(r,"P",{});var m=a(l);_=d(m,"Example:"),m.forEach(t),c=g(r),w(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),k(u,r,m),v=!0},p:K,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Rd(P){let l,_,c,u,v,r,m,x,is,gn,Z,pe,it,He,ds,dt,ls,mn,he,cs,Re,us,ps,fn,Io,hs,_n,Do,lt,gs,bn,Qo,ms,vn,z,Ve,fs,Ke,_s,bs,vs,A,ys,ct,ws,ks,ut,Bs,Ts,pt,$s,Ps,ht,qs,zs,Fs,gt,xs,Cs,mt,Es,Ms,Je,js,ft,Ss,Os,As,Ze,Ls,_t,Ns,Is,Ds,Ye,Qs,Xe,Ws,Gs,yn,ge,Us,eo,Hs,Rs,wn,Y,me,bt,oo,Vs,vt,Ks,kn,q,to,Js,X,Zs,Wo,Ys,Xs,no,ea,oa,ta,ee,na,Go,sa,aa,Uo,ra,ia,da,fe,la,yt,wt,kt,Bt,ca,ua,Tt,$t,so,_e,be,Pt,ao,pa,qt,ha,ga,zt,ma,fa,Ft,xt,ro,ve,ye,Ct,io,_a,Et,ba,va,Mt,ya,wa,jt,St,Ot,we,ke,At,lo,ka,Lt,Ba,Bn,oe,Be,Nt,co,Ta,It,$a,Tn,L,uo,Pa,po,qa,Ho,za,Fa,xa,ho,Ca,go,Ea,Ma,ja,I,mo,Sa,te,Oa,Ro,Aa,La,Dt,Na,Ia,Da,Te,Qa,$e,$n,ne,Pe,Qt,fo,Wa,Wt,Ga,Pn,N,_o,Ua,bo,Ha,Vo,Ra,Va,Ka,vo,Ja,yo,Za,Ya,Xa,D,wo,er,se,or,Ko,tr,nr,Gt,sr,ar,rr,qe,ir,ze,qn,ae,Fe,Ut,ko,dr,Ht,lr,zn,E,Bo,cr,Rt,ur,pr,To,hr,Jo,gr,mr,fr,$o,_r,Po,br,vr,yr,F,qo,wr,re,kr,Zo,Br,Tr,Vt,$r,Pr,qr,xe,zr,Ce,Fr,Ee,xr,Me,Cr,je,Fn,ie,Se,Kt,zo,Er,Jt,Mr,xn,M,Fo,jr,de,Sr,Zt,Or,Ar,Yt,Lr,Nr,Ir,xo,Dr,Yo,Qr,Wr,Gr,Co,Ur,Eo,Hr,Rr,Vr,j,Mo,Kr,le,Jr,Xo,Zr,Yr,Xt,Xr,ei,oi,Oe,ti,Ae,ni,Le,Cn,ce,Ne,en,jo,si,on,ai,En,ue,So,ri,Ie,Oo,ii,De,Mn;return r=new W({}),He=new W({}),oo=new W({}),to=new Q({props:{name:"class transformers.BigBirdPegasusConfig",anchor:"transformers.BigBirdPegasusConfig",parameters:[{name:"vocab_size",val:" = 96103"},{name:"max_position_embeddings",val:" = 4096"},{name:"encoder_layers",val:" = 16"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu_new'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"attention_type",val:" = 'block_sparse'"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"use_bias",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 96103) &#x2014;
Vocabulary size of the BigBirdPegasus model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel">BigBirdPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.BigBirdPegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimension of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BigBirdPegasusConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BigBirdPegasusConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BigBirdPegasusConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BigBirdPegasusConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BigBirdPegasusConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BigBirdPegasusConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BigBirdPegasusConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BigBirdPegasusConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BigBirdPegasusConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BigBirdPegasusConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BigBirdPegasusConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BigBirdPegasusConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 1024 or 2048 or 4096).`,name:"max_position_embeddings"},{anchor:"transformers.BigBirdPegasusConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BigBirdPegasusConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;block_sparse&quot;</code>) &#x2014;
Whether to use block sparse attention (with n complexity) as introduced in paper or original attention
layer (with n^2 complexity) in encoder. Possible values are <code>&quot;original_full&quot;</code> and <code>&quot;block_sparse&quot;</code>.`,name:"attention_type"},{anchor:"transformers.BigBirdPegasusConfig.use_bias",description:`<strong>use_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use bias in query, key, value.`,name:"use_bias"},{anchor:"transformers.BigBirdPegasusConfig.block_size",description:`<strong>block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of each block. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"block_size"},{anchor:"transformers.BigBirdPegasusConfig.num_random_blocks",description:`<strong>num_random_blocks</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Each query is going to attend these many number of random blocks. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"num_random_blocks"},{anchor:"transformers.BigBirdPegasusConfig.scale_embeddings",description:`<strong>scale_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale embeddings with (hidden_size ** 0.5).`,name:"scale_embeddings"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/configuration_bigbird_pegasus.py#L43"}}),fe=new V({props:{anchor:"transformers.BigBirdPegasusConfig.example",$$slots:{default:[Md]},$$scope:{ctx:P}}}),ao=new W({}),io=new W({}),lo=new W({}),co=new W({}),uo=new Q({props:{name:"class transformers.BigBirdPegasusModel",anchor:"transformers.BigBirdPegasusModel",parameters:[{name:"config",val:": BigBirdPegasusConfig"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2350"}}),mo=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for translation and summarization training. By default, the model will create this tensor by
shifting the <code>input_ids</code> to the right, following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BigBirdPegasusModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_bigbird_pegasus._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in
<a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BigBirdPegasusModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BigBirdPegasusModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BigBirdPegasusModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BigBirdPegasusModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2377",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Te=new rs({props:{$$slots:{default:[jd]},$$scope:{ctx:P}}}),$e=new V({props:{anchor:"transformers.BigBirdPegasusModel.forward.example",$$slots:{default:[Sd]},$$scope:{ctx:P}}}),fo=new W({}),_o=new Q({props:{name:"class transformers.BigBirdPegasusForConditionalGeneration",anchor:"transformers.BigBirdPegasusForConditionalGeneration",parameters:[{name:"config",val:": BigBirdPegasusConfig"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2479"}}),wo=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for translation and summarization training. By default, the model will create this tensor by
shifting the <code>input_ids</code> to the right, following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_bigbird_pegasus._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in
<a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2518",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new rs({props:{$$slots:{default:[Od]},$$scope:{ctx:P}}}),ze=new V({props:{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.example",$$slots:{default:[Ad]},$$scope:{ctx:P}}}),ko=new W({}),Bo=new Q({props:{name:"class transformers.BigBirdPegasusForSequenceClassification",anchor:"transformers.BigBirdPegasusForSequenceClassification",parameters:[{name:"config",val:": BigBirdPegasusConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2649"}}),qo=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for translation and summarization training. By default, the model will create this tensor by
shifting the <code>input_ids</code> to the right, following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_bigbird_pegasus._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in
<a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2662",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new rs({props:{$$slots:{default:[Ld]},$$scope:{ctx:P}}}),Ce=new V({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example",$$slots:{default:[Nd]},$$scope:{ctx:P}}}),Ee=new V({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-2",$$slots:{default:[Id]},$$scope:{ctx:P}}}),Me=new V({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-3",$$slots:{default:[Dd]},$$scope:{ctx:P}}}),je=new V({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-4",$$slots:{default:[Qd]},$$scope:{ctx:P}}}),zo=new W({}),Fo=new Q({props:{name:"class transformers.BigBirdPegasusForQuestionAnswering",anchor:"transformers.BigBirdPegasusForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2777"}}),Mo=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for translation and summarization training. By default, the model will create this tensor by
shifting the <code>input_ids</code> to the right, following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_bigbird_pegasus._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in
<a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2789",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new rs({props:{$$slots:{default:[Wd]},$$scope:{ctx:P}}}),Ae=new V({props:{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.example",$$slots:{default:[Gd]},$$scope:{ctx:P}}}),Le=new V({props:{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.example-2",$$slots:{default:[Ud]},$$scope:{ctx:P}}}),jo=new W({}),So=new Q({props:{name:"class transformers.BigBirdPegasusForCausalLM",anchor:"transformers.BigBirdPegasusForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2908"}}),Oo=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2939",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new V({props:{anchor:"transformers.BigBirdPegasusForCausalLM.forward.example",$$slots:{default:[Hd]},$$scope:{ctx:P}}}),{c(){l=n("meta"),_=h(),c=n("h1"),u=n("a"),v=n("span"),y(r.$$.fragment),m=h(),x=n("span"),is=i("BigBirdPegasus"),gn=h(),Z=n("h2"),pe=n("a"),it=n("span"),y(He.$$.fragment),ds=h(),dt=n("span"),ls=i("Overview"),mn=h(),he=n("p"),cs=i("The BigBird model was proposed in "),Re=n("a"),us=i("Big Bird: Transformers for Longer Sequences"),ps=i(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),fn=h(),Io=n("p"),hs=i("The abstract from the paper is the following:"),_n=h(),Do=n("p"),lt=n("em"),gs=i(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),bn=h(),Qo=n("p"),ms=i("Tips:"),vn=h(),z=n("ul"),Ve=n("li"),fs=i("For an in-detail explanation on how BigBird\u2019s attention works, see "),Ke=n("a"),_s=i("this blog post"),bs=i("."),vs=h(),A=n("li"),ys=i("BigBird comes with 2 implementations: "),ct=n("strong"),ws=i("original_full"),ks=i(" & "),ut=n("strong"),Bs=i("block_sparse"),Ts=i(`. For the sequence length < 1024, using
`),pt=n("strong"),$s=i("original_full"),Ps=i(" is advised as there is no benefit in using "),ht=n("strong"),qs=i("block_sparse"),zs=i(" attention."),Fs=h(),gt=n("li"),xs=i("The code currently uses window size of 3 blocks and 2 global blocks."),Cs=h(),mt=n("li"),Es=i("Sequence length must be divisible by block size."),Ms=h(),Je=n("li"),js=i("Current implementation supports only "),ft=n("strong"),Ss=i("ITC"),Os=i("."),As=h(),Ze=n("li"),Ls=i("Current implementation doesn\u2019t support "),_t=n("strong"),Ns=i("num_random_blocks = 0"),Is=i("."),Ds=h(),Ye=n("li"),Qs=i("BigBirdPegasus uses the "),Xe=n("a"),Ws=i("PegasusTokenizer"),Gs=i("."),yn=h(),ge=n("p"),Us=i("The original code can be found "),eo=n("a"),Hs=i("here"),Rs=i("."),wn=h(),Y=n("h2"),me=n("a"),bt=n("span"),y(oo.$$.fragment),Vs=h(),vt=n("span"),Ks=i("BigBirdPegasusConfig"),kn=h(),q=n("div"),y(to.$$.fragment),Js=h(),X=n("p"),Zs=i("This is the configuration class to store the configuration of a "),Wo=n("a"),Ys=i("BigBirdPegasusModel"),Xs=i(`. It is used to instantiate
an BigBirdPegasus model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BigBirdPegasus
`),no=n("a"),ea=i("google/bigbird-pegasus-large-arxiv"),oa=i(" architecture."),ta=h(),ee=n("p"),na=i("Configuration objects inherit from "),Go=n("a"),sa=i("PretrainedConfig"),aa=i(` and can be used to control the model outputs. Read the
documentation from `),Uo=n("a"),ra=i("PretrainedConfig"),ia=i(" for more information."),da=h(),y(fe.$$.fragment),la=h(),yt=n("blockquote"),wt=n("blockquote"),kt=n("blockquote"),Bt=n("p"),ca=i("from transformers import BigBirdPegasusModel, BigBirdPegasusConfig"),ua=h(),Tt=n("blockquote"),$t=n("blockquote"),so=n("blockquote"),_e=n("h1"),be=n("a"),Pt=n("span"),y(ao.$$.fragment),pa=h(),qt=n("span"),ha=i("Initializing a BigBirdPegasus bigbird-pegasus-base style configuration >>> configuration ="),ga=h(),zt=n("p"),ma=i("BigBirdPegasusConfig()"),fa=h(),Ft=n("blockquote"),xt=n("blockquote"),ro=n("blockquote"),ve=n("h1"),ye=n("a"),Ct=n("span"),y(io.$$.fragment),_a=h(),Et=n("span"),ba=i("Initializing a model from the bigbird-pegasus-base style configuration >>> model ="),va=h(),Mt=n("p"),ya=i("BigBirdPegasusModel(configuration)"),wa=h(),jt=n("blockquote"),St=n("blockquote"),Ot=n("blockquote"),we=n("h1"),ke=n("a"),At=n("span"),y(lo.$$.fragment),ka=h(),Lt=n("span"),Ba=i("Accessing the model configuration >>> configuration = model.config"),Bn=h(),oe=n("h2"),Be=n("a"),Nt=n("span"),y(co.$$.fragment),Ta=h(),It=n("span"),$a=i("BigBirdPegasusModel"),Tn=h(),L=n("div"),y(uo.$$.fragment),Pa=h(),po=n("p"),qa=i(`The bare BigBirdPegasus Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ho=n("a"),za=i("PreTrainedModel"),Fa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),xa=h(),ho=n("p"),Ca=i("This model is also a PyTorch "),go=n("a"),Ea=i("torch.nn.Module"),Ma=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ja=h(),I=n("div"),y(mo.$$.fragment),Sa=h(),te=n("p"),Oa=i("The "),Ro=n("a"),Aa=i("BigBirdPegasusModel"),La=i(" forward method, overrides the "),Dt=n("code"),Na=i("__call__"),Ia=i(" special method."),Da=h(),y(Te.$$.fragment),Qa=h(),y($e.$$.fragment),$n=h(),ne=n("h2"),Pe=n("a"),Qt=n("span"),y(fo.$$.fragment),Wa=h(),Wt=n("span"),Ga=i("BigBirdPegasusForConditionalGeneration"),Pn=h(),N=n("div"),y(_o.$$.fragment),Ua=h(),bo=n("p"),Ha=i(`The BigBirdPegasus Model with a language modeling head. Can be used for summarization.
This model inherits from `),Vo=n("a"),Ra=i("PreTrainedModel"),Va=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ka=h(),vo=n("p"),Ja=i("This model is also a PyTorch "),yo=n("a"),Za=i("torch.nn.Module"),Ya=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xa=h(),D=n("div"),y(wo.$$.fragment),er=h(),se=n("p"),or=i("The "),Ko=n("a"),tr=i("BigBirdPegasusForConditionalGeneration"),nr=i(" forward method, overrides the "),Gt=n("code"),sr=i("__call__"),ar=i(" special method."),rr=h(),y(qe.$$.fragment),ir=h(),y(ze.$$.fragment),qn=h(),ae=n("h2"),Fe=n("a"),Ut=n("span"),y(ko.$$.fragment),dr=h(),Ht=n("span"),lr=i("BigBirdPegasusForSequenceClassification"),zn=h(),E=n("div"),y(Bo.$$.fragment),cr=h(),Rt=n("p"),ur=i(`BigBirdPegasus model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),pr=h(),To=n("p"),hr=i("This model inherits from "),Jo=n("a"),gr=i("PreTrainedModel"),mr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),fr=h(),$o=n("p"),_r=i("This model is also a PyTorch "),Po=n("a"),br=i("torch.nn.Module"),vr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yr=h(),F=n("div"),y(qo.$$.fragment),wr=h(),re=n("p"),kr=i("The "),Zo=n("a"),Br=i("BigBirdPegasusForSequenceClassification"),Tr=i(" forward method, overrides the "),Vt=n("code"),$r=i("__call__"),Pr=i(" special method."),qr=h(),y(xe.$$.fragment),zr=h(),y(Ce.$$.fragment),Fr=h(),y(Ee.$$.fragment),xr=h(),y(Me.$$.fragment),Cr=h(),y(je.$$.fragment),Fn=h(),ie=n("h2"),Se=n("a"),Kt=n("span"),y(zo.$$.fragment),Er=h(),Jt=n("span"),Mr=i("BigBirdPegasusForQuestionAnswering"),xn=h(),M=n("div"),y(Fo.$$.fragment),jr=h(),de=n("p"),Sr=i(`BigBirdPegasus Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Zt=n("code"),Or=i("span start logits"),Ar=i(" and "),Yt=n("code"),Lr=i("span end logits"),Nr=i(")."),Ir=h(),xo=n("p"),Dr=i("This model inherits from "),Yo=n("a"),Qr=i("PreTrainedModel"),Wr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Gr=h(),Co=n("p"),Ur=i("This model is also a PyTorch "),Eo=n("a"),Hr=i("torch.nn.Module"),Rr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vr=h(),j=n("div"),y(Mo.$$.fragment),Kr=h(),le=n("p"),Jr=i("The "),Xo=n("a"),Zr=i("BigBirdPegasusForQuestionAnswering"),Yr=i(" forward method, overrides the "),Xt=n("code"),Xr=i("__call__"),ei=i(" special method."),oi=h(),y(Oe.$$.fragment),ti=h(),y(Ae.$$.fragment),ni=h(),y(Le.$$.fragment),Cn=h(),ce=n("h2"),Ne=n("a"),en=n("span"),y(jo.$$.fragment),si=h(),on=n("span"),ai=i("BigBirdPegasusForCausalLM"),En=h(),ue=n("div"),y(So.$$.fragment),ri=h(),Ie=n("div"),y(Oo.$$.fragment),ii=h(),y(De.$$.fragment),this.h()},l(o){const f=Cd('[data-svelte="svelte-1phssyn"]',document.head);l=s(f,"META",{name:!0,content:!0}),f.forEach(t),_=g(o),c=s(o,"H1",{class:!0});var Ao=a(c);u=s(Ao,"A",{id:!0,class:!0,href:!0});var tn=a(u);v=s(tn,"SPAN",{});var nn=a(v);w(r.$$.fragment,nn),nn.forEach(t),tn.forEach(t),m=g(Ao),x=s(Ao,"SPAN",{});var sn=a(x);is=d(sn,"BigBirdPegasus"),sn.forEach(t),Ao.forEach(t),gn=g(o),Z=s(o,"H2",{class:!0});var Lo=a(Z);pe=s(Lo,"A",{id:!0,class:!0,href:!0});var an=a(pe);it=s(an,"SPAN",{});var rn=a(it);w(He.$$.fragment,rn),rn.forEach(t),an.forEach(t),ds=g(Lo),dt=s(Lo,"SPAN",{});var dn=a(dt);ls=d(dn,"Overview"),dn.forEach(t),Lo.forEach(t),mn=g(o),he=s(o,"P",{});var No=a(he);cs=d(No,"The BigBird model was proposed in "),Re=s(No,"A",{href:!0,rel:!0});var ln=a(Re);us=d(ln,"Big Bird: Transformers for Longer Sequences"),ln.forEach(t),ps=d(No,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),No.forEach(t),fn=g(o),Io=s(o,"P",{});var cn=a(Io);hs=d(cn,"The abstract from the paper is the following:"),cn.forEach(t),_n=g(o),Do=s(o,"P",{});var un=a(Do);lt=s(un,"EM",{});var pn=a(lt);gs=d(pn,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),pn.forEach(t),un.forEach(t),bn=g(o),Qo=s(o,"P",{});var hn=a(Qo);ms=d(hn,"Tips:"),hn.forEach(t),vn=g(o),z=s(o,"UL",{});var S=a(z);Ve=s(S,"LI",{});var jn=a(Ve);fs=d(jn,"For an in-detail explanation on how BigBird\u2019s attention works, see "),Ke=s(jn,"A",{href:!0,rel:!0});var di=a(Ke);_s=d(di,"this blog post"),di.forEach(t),bs=d(jn,"."),jn.forEach(t),vs=g(S),A=s(S,"LI",{});var G=a(A);ys=d(G,"BigBird comes with 2 implementations: "),ct=s(G,"STRONG",{});var li=a(ct);ws=d(li,"original_full"),li.forEach(t),ks=d(G," & "),ut=s(G,"STRONG",{});var ci=a(ut);Bs=d(ci,"block_sparse"),ci.forEach(t),Ts=d(G,`. For the sequence length < 1024, using
`),pt=s(G,"STRONG",{});var ui=a(pt);$s=d(ui,"original_full"),ui.forEach(t),Ps=d(G," is advised as there is no benefit in using "),ht=s(G,"STRONG",{});var pi=a(ht);qs=d(pi,"block_sparse"),pi.forEach(t),zs=d(G," attention."),G.forEach(t),Fs=g(S),gt=s(S,"LI",{});var hi=a(gt);xs=d(hi,"The code currently uses window size of 3 blocks and 2 global blocks."),hi.forEach(t),Cs=g(S),mt=s(S,"LI",{});var gi=a(mt);Es=d(gi,"Sequence length must be divisible by block size."),gi.forEach(t),Ms=g(S),Je=s(S,"LI",{});var Sn=a(Je);js=d(Sn,"Current implementation supports only "),ft=s(Sn,"STRONG",{});var mi=a(ft);Ss=d(mi,"ITC"),mi.forEach(t),Os=d(Sn,"."),Sn.forEach(t),As=g(S),Ze=s(S,"LI",{});var On=a(Ze);Ls=d(On,"Current implementation doesn\u2019t support "),_t=s(On,"STRONG",{});var fi=a(_t);Ns=d(fi,"num_random_blocks = 0"),fi.forEach(t),Is=d(On,"."),On.forEach(t),Ds=g(S),Ye=s(S,"LI",{});var An=a(Ye);Qs=d(An,"BigBirdPegasus uses the "),Xe=s(An,"A",{href:!0,rel:!0});var _i=a(Xe);Ws=d(_i,"PegasusTokenizer"),_i.forEach(t),Gs=d(An,"."),An.forEach(t),S.forEach(t),yn=g(o),ge=s(o,"P",{});var Ln=a(ge);Us=d(Ln,"The original code can be found "),eo=s(Ln,"A",{href:!0,rel:!0});var bi=a(eo);Hs=d(bi,"here"),bi.forEach(t),Rs=d(Ln,"."),Ln.forEach(t),wn=g(o),Y=s(o,"H2",{class:!0});var Nn=a(Y);me=s(Nn,"A",{id:!0,class:!0,href:!0});var vi=a(me);bt=s(vi,"SPAN",{});var yi=a(bt);w(oo.$$.fragment,yi),yi.forEach(t),vi.forEach(t),Vs=g(Nn),vt=s(Nn,"SPAN",{});var wi=a(vt);Ks=d(wi,"BigBirdPegasusConfig"),wi.forEach(t),Nn.forEach(t),kn=g(o),q=s(o,"DIV",{class:!0});var C=a(q);w(to.$$.fragment,C),Js=g(C),X=s(C,"P",{});var et=a(X);Zs=d(et,"This is the configuration class to store the configuration of a "),Wo=s(et,"A",{href:!0});var ki=a(Wo);Ys=d(ki,"BigBirdPegasusModel"),ki.forEach(t),Xs=d(et,`. It is used to instantiate
an BigBirdPegasus model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BigBirdPegasus
`),no=s(et,"A",{href:!0,rel:!0});var Bi=a(no);ea=d(Bi,"google/bigbird-pegasus-large-arxiv"),Bi.forEach(t),oa=d(et," architecture."),et.forEach(t),ta=g(C),ee=s(C,"P",{});var ot=a(ee);na=d(ot,"Configuration objects inherit from "),Go=s(ot,"A",{href:!0});var Ti=a(Go);sa=d(Ti,"PretrainedConfig"),Ti.forEach(t),aa=d(ot,` and can be used to control the model outputs. Read the
documentation from `),Uo=s(ot,"A",{href:!0});var $i=a(Uo);ra=d($i,"PretrainedConfig"),$i.forEach(t),ia=d(ot," for more information."),ot.forEach(t),da=g(C),w(fe.$$.fragment,C),la=g(C),yt=s(C,"BLOCKQUOTE",{});var Pi=a(yt);wt=s(Pi,"BLOCKQUOTE",{});var qi=a(wt);kt=s(qi,"BLOCKQUOTE",{});var zi=a(kt);Bt=s(zi,"P",{});var Fi=a(Bt);ca=d(Fi,"from transformers import BigBirdPegasusModel, BigBirdPegasusConfig"),Fi.forEach(t),zi.forEach(t),qi.forEach(t),Pi.forEach(t),ua=g(C),Tt=s(C,"BLOCKQUOTE",{});var xi=a(Tt);$t=s(xi,"BLOCKQUOTE",{});var Ci=a($t);so=s(Ci,"BLOCKQUOTE",{});var In=a(so);_e=s(In,"H1",{class:!0});var Dn=a(_e);be=s(Dn,"A",{id:!0,class:!0,href:!0});var Ei=a(be);Pt=s(Ei,"SPAN",{});var Mi=a(Pt);w(ao.$$.fragment,Mi),Mi.forEach(t),Ei.forEach(t),pa=g(Dn),qt=s(Dn,"SPAN",{});var ji=a(qt);ha=d(ji,"Initializing a BigBirdPegasus bigbird-pegasus-base style configuration >>> configuration ="),ji.forEach(t),Dn.forEach(t),ga=g(In),zt=s(In,"P",{});var Si=a(zt);ma=d(Si,"BigBirdPegasusConfig()"),Si.forEach(t),In.forEach(t),Ci.forEach(t),xi.forEach(t),fa=g(C),Ft=s(C,"BLOCKQUOTE",{});var Oi=a(Ft);xt=s(Oi,"BLOCKQUOTE",{});var Ai=a(xt);ro=s(Ai,"BLOCKQUOTE",{});var Qn=a(ro);ve=s(Qn,"H1",{class:!0});var Wn=a(ve);ye=s(Wn,"A",{id:!0,class:!0,href:!0});var Li=a(ye);Ct=s(Li,"SPAN",{});var Ni=a(Ct);w(io.$$.fragment,Ni),Ni.forEach(t),Li.forEach(t),_a=g(Wn),Et=s(Wn,"SPAN",{});var Ii=a(Et);ba=d(Ii,"Initializing a model from the bigbird-pegasus-base style configuration >>> model ="),Ii.forEach(t),Wn.forEach(t),va=g(Qn),Mt=s(Qn,"P",{});var Di=a(Mt);ya=d(Di,"BigBirdPegasusModel(configuration)"),Di.forEach(t),Qn.forEach(t),Ai.forEach(t),Oi.forEach(t),wa=g(C),jt=s(C,"BLOCKQUOTE",{});var Qi=a(jt);St=s(Qi,"BLOCKQUOTE",{});var Wi=a(St);Ot=s(Wi,"BLOCKQUOTE",{});var Gi=a(Ot);we=s(Gi,"H1",{class:!0});var Gn=a(we);ke=s(Gn,"A",{id:!0,class:!0,href:!0});var Ui=a(ke);At=s(Ui,"SPAN",{});var Hi=a(At);w(lo.$$.fragment,Hi),Hi.forEach(t),Ui.forEach(t),ka=g(Gn),Lt=s(Gn,"SPAN",{});var Ri=a(Lt);Ba=d(Ri,"Accessing the model configuration >>> configuration = model.config"),Ri.forEach(t),Gn.forEach(t),Gi.forEach(t),Wi.forEach(t),Qi.forEach(t),C.forEach(t),Bn=g(o),oe=s(o,"H2",{class:!0});var Un=a(oe);Be=s(Un,"A",{id:!0,class:!0,href:!0});var Vi=a(Be);Nt=s(Vi,"SPAN",{});var Ki=a(Nt);w(co.$$.fragment,Ki),Ki.forEach(t),Vi.forEach(t),Ta=g(Un),It=s(Un,"SPAN",{});var Ji=a(It);$a=d(Ji,"BigBirdPegasusModel"),Ji.forEach(t),Un.forEach(t),Tn=g(o),L=s(o,"DIV",{class:!0});var Qe=a(L);w(uo.$$.fragment,Qe),Pa=g(Qe),po=s(Qe,"P",{});var Hn=a(po);qa=d(Hn,`The bare BigBirdPegasus Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ho=s(Hn,"A",{href:!0});var Zi=a(Ho);za=d(Zi,"PreTrainedModel"),Zi.forEach(t),Fa=d(Hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Hn.forEach(t),xa=g(Qe),ho=s(Qe,"P",{});var Rn=a(ho);Ca=d(Rn,"This model is also a PyTorch "),go=s(Rn,"A",{href:!0,rel:!0});var Yi=a(go);Ea=d(Yi,"torch.nn.Module"),Yi.forEach(t),Ma=d(Rn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rn.forEach(t),ja=g(Qe),I=s(Qe,"DIV",{class:!0});var We=a(I);w(mo.$$.fragment,We),Sa=g(We),te=s(We,"P",{});var tt=a(te);Oa=d(tt,"The "),Ro=s(tt,"A",{href:!0});var Xi=a(Ro);Aa=d(Xi,"BigBirdPegasusModel"),Xi.forEach(t),La=d(tt," forward method, overrides the "),Dt=s(tt,"CODE",{});var ed=a(Dt);Na=d(ed,"__call__"),ed.forEach(t),Ia=d(tt," special method."),tt.forEach(t),Da=g(We),w(Te.$$.fragment,We),Qa=g(We),w($e.$$.fragment,We),We.forEach(t),Qe.forEach(t),$n=g(o),ne=s(o,"H2",{class:!0});var Vn=a(ne);Pe=s(Vn,"A",{id:!0,class:!0,href:!0});var od=a(Pe);Qt=s(od,"SPAN",{});var td=a(Qt);w(fo.$$.fragment,td),td.forEach(t),od.forEach(t),Wa=g(Vn),Wt=s(Vn,"SPAN",{});var nd=a(Wt);Ga=d(nd,"BigBirdPegasusForConditionalGeneration"),nd.forEach(t),Vn.forEach(t),Pn=g(o),N=s(o,"DIV",{class:!0});var Ge=a(N);w(_o.$$.fragment,Ge),Ua=g(Ge),bo=s(Ge,"P",{});var Kn=a(bo);Ha=d(Kn,`The BigBirdPegasus Model with a language modeling head. Can be used for summarization.
This model inherits from `),Vo=s(Kn,"A",{href:!0});var sd=a(Vo);Ra=d(sd,"PreTrainedModel"),sd.forEach(t),Va=d(Kn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Kn.forEach(t),Ka=g(Ge),vo=s(Ge,"P",{});var Jn=a(vo);Ja=d(Jn,"This model is also a PyTorch "),yo=s(Jn,"A",{href:!0,rel:!0});var ad=a(yo);Za=d(ad,"torch.nn.Module"),ad.forEach(t),Ya=d(Jn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jn.forEach(t),Xa=g(Ge),D=s(Ge,"DIV",{class:!0});var Ue=a(D);w(wo.$$.fragment,Ue),er=g(Ue),se=s(Ue,"P",{});var nt=a(se);or=d(nt,"The "),Ko=s(nt,"A",{href:!0});var rd=a(Ko);tr=d(rd,"BigBirdPegasusForConditionalGeneration"),rd.forEach(t),nr=d(nt," forward method, overrides the "),Gt=s(nt,"CODE",{});var id=a(Gt);sr=d(id,"__call__"),id.forEach(t),ar=d(nt," special method."),nt.forEach(t),rr=g(Ue),w(qe.$$.fragment,Ue),ir=g(Ue),w(ze.$$.fragment,Ue),Ue.forEach(t),Ge.forEach(t),qn=g(o),ae=s(o,"H2",{class:!0});var Zn=a(ae);Fe=s(Zn,"A",{id:!0,class:!0,href:!0});var dd=a(Fe);Ut=s(dd,"SPAN",{});var ld=a(Ut);w(ko.$$.fragment,ld),ld.forEach(t),dd.forEach(t),dr=g(Zn),Ht=s(Zn,"SPAN",{});var cd=a(Ht);lr=d(cd,"BigBirdPegasusForSequenceClassification"),cd.forEach(t),Zn.forEach(t),zn=g(o),E=s(o,"DIV",{class:!0});var U=a(E);w(Bo.$$.fragment,U),cr=g(U),Rt=s(U,"P",{});var ud=a(Rt);ur=d(ud,`BigBirdPegasus model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),ud.forEach(t),pr=g(U),To=s(U,"P",{});var Yn=a(To);hr=d(Yn,"This model inherits from "),Jo=s(Yn,"A",{href:!0});var pd=a(Jo);gr=d(pd,"PreTrainedModel"),pd.forEach(t),mr=d(Yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Yn.forEach(t),fr=g(U),$o=s(U,"P",{});var Xn=a($o);_r=d(Xn,"This model is also a PyTorch "),Po=s(Xn,"A",{href:!0,rel:!0});var hd=a(Po);br=d(hd,"torch.nn.Module"),hd.forEach(t),vr=d(Xn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xn.forEach(t),yr=g(U),F=s(U,"DIV",{class:!0});var O=a(F);w(qo.$$.fragment,O),wr=g(O),re=s(O,"P",{});var st=a(re);kr=d(st,"The "),Zo=s(st,"A",{href:!0});var gd=a(Zo);Br=d(gd,"BigBirdPegasusForSequenceClassification"),gd.forEach(t),Tr=d(st," forward method, overrides the "),Vt=s(st,"CODE",{});var md=a(Vt);$r=d(md,"__call__"),md.forEach(t),Pr=d(st," special method."),st.forEach(t),qr=g(O),w(xe.$$.fragment,O),zr=g(O),w(Ce.$$.fragment,O),Fr=g(O),w(Ee.$$.fragment,O),xr=g(O),w(Me.$$.fragment,O),Cr=g(O),w(je.$$.fragment,O),O.forEach(t),U.forEach(t),Fn=g(o),ie=s(o,"H2",{class:!0});var es=a(ie);Se=s(es,"A",{id:!0,class:!0,href:!0});var fd=a(Se);Kt=s(fd,"SPAN",{});var _d=a(Kt);w(zo.$$.fragment,_d),_d.forEach(t),fd.forEach(t),Er=g(es),Jt=s(es,"SPAN",{});var bd=a(Jt);Mr=d(bd,"BigBirdPegasusForQuestionAnswering"),bd.forEach(t),es.forEach(t),xn=g(o),M=s(o,"DIV",{class:!0});var H=a(M);w(Fo.$$.fragment,H),jr=g(H),de=s(H,"P",{});var at=a(de);Sr=d(at,`BigBirdPegasus Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Zt=s(at,"CODE",{});var vd=a(Zt);Or=d(vd,"span start logits"),vd.forEach(t),Ar=d(at," and "),Yt=s(at,"CODE",{});var yd=a(Yt);Lr=d(yd,"span end logits"),yd.forEach(t),Nr=d(at,")."),at.forEach(t),Ir=g(H),xo=s(H,"P",{});var os=a(xo);Dr=d(os,"This model inherits from "),Yo=s(os,"A",{href:!0});var wd=a(Yo);Qr=d(wd,"PreTrainedModel"),wd.forEach(t),Wr=d(os,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),os.forEach(t),Gr=g(H),Co=s(H,"P",{});var ts=a(Co);Ur=d(ts,"This model is also a PyTorch "),Eo=s(ts,"A",{href:!0,rel:!0});var kd=a(Eo);Hr=d(kd,"torch.nn.Module"),kd.forEach(t),Rr=d(ts,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ts.forEach(t),Vr=g(H),j=s(H,"DIV",{class:!0});var R=a(j);w(Mo.$$.fragment,R),Kr=g(R),le=s(R,"P",{});var rt=a(le);Jr=d(rt,"The "),Xo=s(rt,"A",{href:!0});var Bd=a(Xo);Zr=d(Bd,"BigBirdPegasusForQuestionAnswering"),Bd.forEach(t),Yr=d(rt," forward method, overrides the "),Xt=s(rt,"CODE",{});var Td=a(Xt);Xr=d(Td,"__call__"),Td.forEach(t),ei=d(rt," special method."),rt.forEach(t),oi=g(R),w(Oe.$$.fragment,R),ti=g(R),w(Ae.$$.fragment,R),ni=g(R),w(Le.$$.fragment,R),R.forEach(t),H.forEach(t),Cn=g(o),ce=s(o,"H2",{class:!0});var ns=a(ce);Ne=s(ns,"A",{id:!0,class:!0,href:!0});var $d=a(Ne);en=s($d,"SPAN",{});var Pd=a(en);w(jo.$$.fragment,Pd),Pd.forEach(t),$d.forEach(t),si=g(ns),on=s(ns,"SPAN",{});var qd=a(on);ai=d(qd,"BigBirdPegasusForCausalLM"),qd.forEach(t),ns.forEach(t),En=g(o),ue=s(o,"DIV",{class:!0});var ss=a(ue);w(So.$$.fragment,ss),ri=g(ss),Ie=s(ss,"DIV",{class:!0});var as=a(Ie);w(Oo.$$.fragment,as),ii=g(as),w(De.$$.fragment,as),as.forEach(t),ss.forEach(t),this.h()},h(){p(l,"name","hf:doc:metadata"),p(l,"content",JSON.stringify(Vd)),p(u,"id","bigbirdpegasus"),p(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(u,"href","#bigbirdpegasus"),p(c,"class","relative group"),p(pe,"id","overview"),p(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(pe,"href","#overview"),p(Z,"class","relative group"),p(Re,"href","https://arxiv.org/abs/2007.14062"),p(Re,"rel","nofollow"),p(Ke,"href","https://huggingface.co/blog/big-bird"),p(Ke,"rel","nofollow"),p(Xe,"href","https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py"),p(Xe,"rel","nofollow"),p(eo,"href","https://github.com/google-research/bigbird"),p(eo,"rel","nofollow"),p(me,"id","transformers.BigBirdPegasusConfig"),p(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(me,"href","#transformers.BigBirdPegasusConfig"),p(Y,"class","relative group"),p(Wo,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel"),p(no,"href","https://huggingface.co/google/bigbird-pegasus-large-arxiv"),p(no,"rel","nofollow"),p(Go,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(Uo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(be,"id","initializing-a-bigbirdpegasus-bigbird-pegasus-base-style-configuration->>>-configuration-="),p(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(be,"href","#initializing-a-bigbirdpegasus-bigbird-pegasus-base-style-configuration->>>-configuration-="),p(_e,"class","relative group"),p(ye,"id","initializing-a-model-from-the-bigbird-pegasus-base-style-configuration->>>-model-="),p(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ye,"href","#initializing-a-model-from-the-bigbird-pegasus-base-style-configuration->>>-model-="),p(ve,"class","relative group"),p(ke,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),p(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ke,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),p(we,"class","relative group"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Be,"id","transformers.BigBirdPegasusModel"),p(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Be,"href","#transformers.BigBirdPegasusModel"),p(oe,"class","relative group"),p(Ho,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(go,"rel","nofollow"),p(Ro,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pe,"id","transformers.BigBirdPegasusForConditionalGeneration"),p(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Pe,"href","#transformers.BigBirdPegasusForConditionalGeneration"),p(ne,"class","relative group"),p(Vo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(yo,"rel","nofollow"),p(Ko,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForConditionalGeneration"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Fe,"id","transformers.BigBirdPegasusForSequenceClassification"),p(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Fe,"href","#transformers.BigBirdPegasusForSequenceClassification"),p(ae,"class","relative group"),p(Jo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Po,"rel","nofollow"),p(Zo,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForSequenceClassification"),p(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Se,"id","transformers.BigBirdPegasusForQuestionAnswering"),p(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Se,"href","#transformers.BigBirdPegasusForQuestionAnswering"),p(ie,"class","relative group"),p(Yo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Eo,"rel","nofollow"),p(Xo,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForQuestionAnswering"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ne,"id","transformers.BigBirdPegasusForCausalLM"),p(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ne,"href","#transformers.BigBirdPegasusForCausalLM"),p(ce,"class","relative group"),p(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,l),b(o,_,f),b(o,c,f),e(c,u),e(u,v),k(r,v,null),e(c,m),e(c,x),e(x,is),b(o,gn,f),b(o,Z,f),e(Z,pe),e(pe,it),k(He,it,null),e(Z,ds),e(Z,dt),e(dt,ls),b(o,mn,f),b(o,he,f),e(he,cs),e(he,Re),e(Re,us),e(he,ps),b(o,fn,f),b(o,Io,f),e(Io,hs),b(o,_n,f),b(o,Do,f),e(Do,lt),e(lt,gs),b(o,bn,f),b(o,Qo,f),e(Qo,ms),b(o,vn,f),b(o,z,f),e(z,Ve),e(Ve,fs),e(Ve,Ke),e(Ke,_s),e(Ve,bs),e(z,vs),e(z,A),e(A,ys),e(A,ct),e(ct,ws),e(A,ks),e(A,ut),e(ut,Bs),e(A,Ts),e(A,pt),e(pt,$s),e(A,Ps),e(A,ht),e(ht,qs),e(A,zs),e(z,Fs),e(z,gt),e(gt,xs),e(z,Cs),e(z,mt),e(mt,Es),e(z,Ms),e(z,Je),e(Je,js),e(Je,ft),e(ft,Ss),e(Je,Os),e(z,As),e(z,Ze),e(Ze,Ls),e(Ze,_t),e(_t,Ns),e(Ze,Is),e(z,Ds),e(z,Ye),e(Ye,Qs),e(Ye,Xe),e(Xe,Ws),e(Ye,Gs),b(o,yn,f),b(o,ge,f),e(ge,Us),e(ge,eo),e(eo,Hs),e(ge,Rs),b(o,wn,f),b(o,Y,f),e(Y,me),e(me,bt),k(oo,bt,null),e(Y,Vs),e(Y,vt),e(vt,Ks),b(o,kn,f),b(o,q,f),k(to,q,null),e(q,Js),e(q,X),e(X,Zs),e(X,Wo),e(Wo,Ys),e(X,Xs),e(X,no),e(no,ea),e(X,oa),e(q,ta),e(q,ee),e(ee,na),e(ee,Go),e(Go,sa),e(ee,aa),e(ee,Uo),e(Uo,ra),e(ee,ia),e(q,da),k(fe,q,null),e(q,la),e(q,yt),e(yt,wt),e(wt,kt),e(kt,Bt),e(Bt,ca),e(q,ua),e(q,Tt),e(Tt,$t),e($t,so),e(so,_e),e(_e,be),e(be,Pt),k(ao,Pt,null),e(_e,pa),e(_e,qt),e(qt,ha),e(so,ga),e(so,zt),e(zt,ma),e(q,fa),e(q,Ft),e(Ft,xt),e(xt,ro),e(ro,ve),e(ve,ye),e(ye,Ct),k(io,Ct,null),e(ve,_a),e(ve,Et),e(Et,ba),e(ro,va),e(ro,Mt),e(Mt,ya),e(q,wa),e(q,jt),e(jt,St),e(St,Ot),e(Ot,we),e(we,ke),e(ke,At),k(lo,At,null),e(we,ka),e(we,Lt),e(Lt,Ba),b(o,Bn,f),b(o,oe,f),e(oe,Be),e(Be,Nt),k(co,Nt,null),e(oe,Ta),e(oe,It),e(It,$a),b(o,Tn,f),b(o,L,f),k(uo,L,null),e(L,Pa),e(L,po),e(po,qa),e(po,Ho),e(Ho,za),e(po,Fa),e(L,xa),e(L,ho),e(ho,Ca),e(ho,go),e(go,Ea),e(ho,Ma),e(L,ja),e(L,I),k(mo,I,null),e(I,Sa),e(I,te),e(te,Oa),e(te,Ro),e(Ro,Aa),e(te,La),e(te,Dt),e(Dt,Na),e(te,Ia),e(I,Da),k(Te,I,null),e(I,Qa),k($e,I,null),b(o,$n,f),b(o,ne,f),e(ne,Pe),e(Pe,Qt),k(fo,Qt,null),e(ne,Wa),e(ne,Wt),e(Wt,Ga),b(o,Pn,f),b(o,N,f),k(_o,N,null),e(N,Ua),e(N,bo),e(bo,Ha),e(bo,Vo),e(Vo,Ra),e(bo,Va),e(N,Ka),e(N,vo),e(vo,Ja),e(vo,yo),e(yo,Za),e(vo,Ya),e(N,Xa),e(N,D),k(wo,D,null),e(D,er),e(D,se),e(se,or),e(se,Ko),e(Ko,tr),e(se,nr),e(se,Gt),e(Gt,sr),e(se,ar),e(D,rr),k(qe,D,null),e(D,ir),k(ze,D,null),b(o,qn,f),b(o,ae,f),e(ae,Fe),e(Fe,Ut),k(ko,Ut,null),e(ae,dr),e(ae,Ht),e(Ht,lr),b(o,zn,f),b(o,E,f),k(Bo,E,null),e(E,cr),e(E,Rt),e(Rt,ur),e(E,pr),e(E,To),e(To,hr),e(To,Jo),e(Jo,gr),e(To,mr),e(E,fr),e(E,$o),e($o,_r),e($o,Po),e(Po,br),e($o,vr),e(E,yr),e(E,F),k(qo,F,null),e(F,wr),e(F,re),e(re,kr),e(re,Zo),e(Zo,Br),e(re,Tr),e(re,Vt),e(Vt,$r),e(re,Pr),e(F,qr),k(xe,F,null),e(F,zr),k(Ce,F,null),e(F,Fr),k(Ee,F,null),e(F,xr),k(Me,F,null),e(F,Cr),k(je,F,null),b(o,Fn,f),b(o,ie,f),e(ie,Se),e(Se,Kt),k(zo,Kt,null),e(ie,Er),e(ie,Jt),e(Jt,Mr),b(o,xn,f),b(o,M,f),k(Fo,M,null),e(M,jr),e(M,de),e(de,Sr),e(de,Zt),e(Zt,Or),e(de,Ar),e(de,Yt),e(Yt,Lr),e(de,Nr),e(M,Ir),e(M,xo),e(xo,Dr),e(xo,Yo),e(Yo,Qr),e(xo,Wr),e(M,Gr),e(M,Co),e(Co,Ur),e(Co,Eo),e(Eo,Hr),e(Co,Rr),e(M,Vr),e(M,j),k(Mo,j,null),e(j,Kr),e(j,le),e(le,Jr),e(le,Xo),e(Xo,Zr),e(le,Yr),e(le,Xt),e(Xt,Xr),e(le,ei),e(j,oi),k(Oe,j,null),e(j,ti),k(Ae,j,null),e(j,ni),k(Le,j,null),b(o,Cn,f),b(o,ce,f),e(ce,Ne),e(Ne,en),k(jo,en,null),e(ce,si),e(ce,on),e(on,ai),b(o,En,f),b(o,ue,f),k(So,ue,null),e(ue,ri),e(ue,Ie),k(Oo,Ie,null),e(Ie,ii),k(De,Ie,null),Mn=!0},p(o,[f]){const Ao={};f&2&&(Ao.$$scope={dirty:f,ctx:o}),fe.$set(Ao);const tn={};f&2&&(tn.$$scope={dirty:f,ctx:o}),Te.$set(tn);const nn={};f&2&&(nn.$$scope={dirty:f,ctx:o}),$e.$set(nn);const sn={};f&2&&(sn.$$scope={dirty:f,ctx:o}),qe.$set(sn);const Lo={};f&2&&(Lo.$$scope={dirty:f,ctx:o}),ze.$set(Lo);const an={};f&2&&(an.$$scope={dirty:f,ctx:o}),xe.$set(an);const rn={};f&2&&(rn.$$scope={dirty:f,ctx:o}),Ce.$set(rn);const dn={};f&2&&(dn.$$scope={dirty:f,ctx:o}),Ee.$set(dn);const No={};f&2&&(No.$$scope={dirty:f,ctx:o}),Me.$set(No);const ln={};f&2&&(ln.$$scope={dirty:f,ctx:o}),je.$set(ln);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:o}),Oe.$set(cn);const un={};f&2&&(un.$$scope={dirty:f,ctx:o}),Ae.$set(un);const pn={};f&2&&(pn.$$scope={dirty:f,ctx:o}),Le.$set(pn);const hn={};f&2&&(hn.$$scope={dirty:f,ctx:o}),De.$set(hn)},i(o){Mn||(B(r.$$.fragment,o),B(He.$$.fragment,o),B(oo.$$.fragment,o),B(to.$$.fragment,o),B(fe.$$.fragment,o),B(ao.$$.fragment,o),B(io.$$.fragment,o),B(lo.$$.fragment,o),B(co.$$.fragment,o),B(uo.$$.fragment,o),B(mo.$$.fragment,o),B(Te.$$.fragment,o),B($e.$$.fragment,o),B(fo.$$.fragment,o),B(_o.$$.fragment,o),B(wo.$$.fragment,o),B(qe.$$.fragment,o),B(ze.$$.fragment,o),B(ko.$$.fragment,o),B(Bo.$$.fragment,o),B(qo.$$.fragment,o),B(xe.$$.fragment,o),B(Ce.$$.fragment,o),B(Ee.$$.fragment,o),B(Me.$$.fragment,o),B(je.$$.fragment,o),B(zo.$$.fragment,o),B(Fo.$$.fragment,o),B(Mo.$$.fragment,o),B(Oe.$$.fragment,o),B(Ae.$$.fragment,o),B(Le.$$.fragment,o),B(jo.$$.fragment,o),B(So.$$.fragment,o),B(Oo.$$.fragment,o),B(De.$$.fragment,o),Mn=!0)},o(o){T(r.$$.fragment,o),T(He.$$.fragment,o),T(oo.$$.fragment,o),T(to.$$.fragment,o),T(fe.$$.fragment,o),T(ao.$$.fragment,o),T(io.$$.fragment,o),T(lo.$$.fragment,o),T(co.$$.fragment,o),T(uo.$$.fragment,o),T(mo.$$.fragment,o),T(Te.$$.fragment,o),T($e.$$.fragment,o),T(fo.$$.fragment,o),T(_o.$$.fragment,o),T(wo.$$.fragment,o),T(qe.$$.fragment,o),T(ze.$$.fragment,o),T(ko.$$.fragment,o),T(Bo.$$.fragment,o),T(qo.$$.fragment,o),T(xe.$$.fragment,o),T(Ce.$$.fragment,o),T(Ee.$$.fragment,o),T(Me.$$.fragment,o),T(je.$$.fragment,o),T(zo.$$.fragment,o),T(Fo.$$.fragment,o),T(Mo.$$.fragment,o),T(Oe.$$.fragment,o),T(Ae.$$.fragment,o),T(Le.$$.fragment,o),T(jo.$$.fragment,o),T(So.$$.fragment,o),T(Oo.$$.fragment,o),T(De.$$.fragment,o),Mn=!1},d(o){t(l),o&&t(_),o&&t(c),$(r),o&&t(gn),o&&t(Z),$(He),o&&t(mn),o&&t(he),o&&t(fn),o&&t(Io),o&&t(_n),o&&t(Do),o&&t(bn),o&&t(Qo),o&&t(vn),o&&t(z),o&&t(yn),o&&t(ge),o&&t(wn),o&&t(Y),$(oo),o&&t(kn),o&&t(q),$(to),$(fe),$(ao),$(io),$(lo),o&&t(Bn),o&&t(oe),$(co),o&&t(Tn),o&&t(L),$(uo),$(mo),$(Te),$($e),o&&t($n),o&&t(ne),$(fo),o&&t(Pn),o&&t(N),$(_o),$(wo),$(qe),$(ze),o&&t(qn),o&&t(ae),$(ko),o&&t(zn),o&&t(E),$(Bo),$(qo),$(xe),$(Ce),$(Ee),$(Me),$(je),o&&t(Fn),o&&t(ie),$(zo),o&&t(xn),o&&t(M),$(Fo),$(Mo),$(Oe),$(Ae),$(Le),o&&t(Cn),o&&t(ce),$(jo),o&&t(En),o&&t(ue),$(So),$(Oo),$(De)}}}const Vd={local:"bigbirdpegasus",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdPegasusConfig",title:"BigBirdPegasusConfig"},{local:"transformers.BigBirdPegasusModel",title:"BigBirdPegasusModel"},{local:"transformers.BigBirdPegasusForConditionalGeneration",title:"BigBirdPegasusForConditionalGeneration"},{local:"transformers.BigBirdPegasusForSequenceClassification",title:"BigBirdPegasusForSequenceClassification"},{local:"transformers.BigBirdPegasusForQuestionAnswering",title:"BigBirdPegasusForQuestionAnswering"},{local:"transformers.BigBirdPegasusForCausalLM",title:"BigBirdPegasusForCausalLM"}],title:"BigBirdPegasus"};function Kd(P){return Ed(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tl extends zd{constructor(l){super();Fd(this,l,Kd,Rd,xd,{})}}export{tl as default,Vd as metadata};
