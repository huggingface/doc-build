import{S as t2,i as o2,s as n2,e as a,k as h,w as y,t as i,M as a2,c as s,d as t,m,a as r,x as v,h as d,b as u,G as e,g as b,y as T,q as w,o as $,B as x,v as s2,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as Oe}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as M}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as X}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as A}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as rw}from"../../chunks/PipelineTag-hf-doc-builder.js";function r2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartConfig, BartModel

# Initializing a BART facebook/bart-large style configuration
configuration = BartConfig()

# Initializing a model (with random weights) from the facebook/bart-large style configuration
model = BartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartConfig, BartModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BART facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function i2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),k=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function d2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("When used with "),f=a("code"),p=i("is_split_into_words=True"),g=i(", this tokenizer will add a space before each word (even the first one).")},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"When used with "),f=s(c,"CODE",{});var B=r(f);p=d(B,"is_split_into_words=True"),B.forEach(t),g=d(c,", this tokenizer will add a space before each word (even the first one)."),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function l2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),k=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function c2(F){let l,k,f,p,g,n,c,B;return{c(){l=a("p"),k=i("When used with "),f=a("code"),p=i("is_split_into_words=True"),g=i(", this tokenizer needs to be instantiated with "),n=a("code"),c=i("add_prefix_space=True"),B=i(".")},l(ce){l=s(ce,"P",{});var W=r(l);k=d(W,"When used with "),f=s(W,"CODE",{});var I=r(f);p=d(I,"is_split_into_words=True"),I.forEach(t),g=d(W,", this tokenizer needs to be instantiated with "),n=s(W,"CODE",{});var he=r(n);c=d(he,"add_prefix_space=True"),he.forEach(t),B=d(W,"."),W.forEach(t)},m(ce,W){b(ce,l,W),e(l,k),e(l,f),e(f,p),e(l,g),e(l,n),e(n,c),e(l,B)},d(ce){ce&&t(l)}}}function p2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function u2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, BartModel
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function h2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function m2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=2, min_length=0, max_length=20)
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">2</span>, min_length=<span class="hljs-number">0</span>, max_length=<span class="hljs-number">20</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;PG&amp;E scheduled the blackouts in response to forecasts for high winds amid dry conditions&#x27;</span>`}}),{c(){l=a("p"),k=i("Summarization example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Summarization example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function f2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForConditionalGeneration.from_pretrained("facebook/bart-base")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;not&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;great&#x27;</span>, <span class="hljs-string">&#x27;very&#x27;</span>]`}}),{c(){l=a("p"),k=i("Mask filling example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Mask filling example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function _2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function g2(F){let l,k,f,p,g;return p=new M({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("valhalla/bart-large-sst2")
model = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of single-label classification:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example of single-label classification:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function b2(F){let l,k;return l=new M({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.0</span>`}}),{c(){y(l.$$.fragment)},l(f){v(l.$$.fragment,f)},m(f,p){T(l,f,p),k=!0},p:P,i(f){k||(w(l.$$.fragment,f),k=!0)},o(f){$(l.$$.fragment,f),k=!1},d(f){x(l,f)}}}function k2(F){let l,k,f,p,g;return p=new M({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("valhalla/bart-large-sst2")
model = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),k=i("Example of multi-label classification:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example of multi-label classification:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function y2(F){let l,k;return l=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BartForSequenceClassification.from_pretrained(
    "valhalla/bart-large-sst2", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(f){v(l.$$.fragment,f)},m(f,p){T(l,f,p),k=!0},p:P,i(f){k||(w(l.$$.fragment,f),k=!0)},o(f){$(l.$$.fragment,f),k=!1},d(f){x(l,f)}}}function v2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function T2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
import torch

tokenizer = BartTokenizer.from_pretrained("valhalla/bart-large-finetuned-squadv1")
model = BartForQuestionAnswering.from_pretrained("valhalla/bart-large-finetuned-squadv1")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-finetuned-squadv1&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-finetuned-squadv1&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27; nice puppet&#x27;</span>`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function w2(F){let l,k;return l=new M({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.59</span>`}}),{c(){y(l.$$.fragment)},l(f){v(l.$$.fragment,f)},m(f,p){T(l,f,p),k=!0},p:P,i(f){k||(w(l.$$.fragment,f),k=!0)},o(f){$(l.$$.fragment,f),k=!1},d(f){x(l,f)}}}function $2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, BartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForCausalLM.from_pretrained("facebook/bart-base", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function x2(F){let l,k,f,p,g,n,c,B,ce,W,I,he,Qe,j,ve,Te,kt,rt,U,me,Ve,ee,yt,Je,we,it,fe,$e,xe,vt,Ke,O,N,Tt,_e,ae,Xe,Fe,wt,Ze,R,$t,pe,xt,dt,se,Ft,lt,Z,Ye,ze,ct,Y,H,Be,te,zt,qe;return{c(){l=a("p"),k=i("TensorFlow models and layers in "),f=a("code"),p=i("transformers"),g=i(" accept two formats as input:"),n=h(),c=a("ul"),B=a("li"),ce=i("having all inputs as keyword arguments (like PyTorch models), or"),W=h(),I=a("li"),he=i("having all inputs as a list, tuple or dict in the first positional argument."),Qe=h(),j=a("p"),ve=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Te=a("code"),kt=i("model.fit()"),rt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),me=i("model.fit()"),Ve=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),ee=a("code"),yt=i("fit()"),Je=i(" and "),we=a("code"),it=i("predict()"),fe=i(`, such as when creating your own layers or models with
the Keras `),$e=a("code"),xe=i("Functional"),vt=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ke=h(),O=a("ul"),N=a("li"),Tt=i("a single Tensor with "),_e=a("code"),ae=i("input_ids"),Xe=i(" only and nothing else: "),Fe=a("code"),wt=i("model(input_ids)"),Ze=h(),R=a("li"),$t=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=a("code"),xt=i("model([input_ids, attention_mask])"),dt=i(" or "),se=a("code"),Ft=i("model([input_ids, attention_mask, token_type_ids])"),lt=h(),Z=a("li"),Ye=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ze=a("code"),ct=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Y=h(),H=a("p"),Be=i(`Note that when creating models and layers with
`),te=a("a"),zt=i("subclassing"),qe=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){l=s(z,"P",{});var C=r(l);k=d(C,"TensorFlow models and layers in "),f=s(C,"CODE",{});var Nt=r(f);p=d(Nt,"transformers"),Nt.forEach(t),g=d(C," accept two formats as input:"),C.forEach(t),n=m(z),c=s(z,"UL",{});var oe=r(c);B=s(oe,"LI",{});var Ie=r(B);ce=d(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),W=m(oe),I=s(oe,"LI",{});var Bt=r(I);he=d(Bt,"having all inputs as a list, tuple or dict in the first positional argument."),Bt.forEach(t),oe.forEach(t),Qe=m(z),j=s(z,"P",{});var E=r(j);ve=d(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Te=s(E,"CODE",{});var ro=r(Te);kt=d(ro,"model.fit()"),ro.forEach(t),rt=d(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s(E,"CODE",{});var qt=r(U);me=d(qt,"model.fit()"),qt.forEach(t),Ve=d(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),ee=s(E,"CODE",{});var io=r(ee);yt=d(io,"fit()"),io.forEach(t),Je=d(E," and "),we=s(E,"CODE",{});var Lt=r(we);it=d(Lt,"predict()"),Lt.forEach(t),fe=d(E,`, such as when creating your own layers or models with
the Keras `),$e=s(E,"CODE",{});var ge=r($e);xe=d(ge,"Functional"),ge.forEach(t),vt=d(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),Ke=m(z),O=s(z,"UL",{});var Q=r(O);N=s(Q,"LI",{});var je=r(N);Tt=d(je,"a single Tensor with "),_e=s(je,"CODE",{});var et=r(_e);ae=d(et,"input_ids"),et.forEach(t),Xe=d(je," only and nothing else: "),Fe=s(je,"CODE",{});var lo=r(Fe);wt=d(lo,"model(input_ids)"),lo.forEach(t),je.forEach(t),Ze=m(Q),R=s(Q,"LI",{});var Ce=r(R);$t=d(Ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=s(Ce,"CODE",{});var co=r(pe);xt=d(co,"model([input_ids, attention_mask])"),co.forEach(t),dt=d(Ce," or "),se=s(Ce,"CODE",{});var ue=r(se);Ft=d(ue,"model([input_ids, attention_mask, token_type_ids])"),ue.forEach(t),Ce.forEach(t),lt=m(Q),Z=s(Q,"LI",{});var jt=r(Z);Ye=d(jt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ze=s(jt,"CODE",{});var pt=r(ze);ct=d(pt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),pt.forEach(t),jt.forEach(t),Q.forEach(t),Y=m(z),H=s(z,"P",{});var tt=r(H);Be=d(tt,`Note that when creating models and layers with
`),te=s(tt,"A",{href:!0,rel:!0});var po=r(te);zt=d(po,"subclassing"),po.forEach(t),qe=d(tt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),tt.forEach(t),this.h()},h(){u(te,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(te,"rel","nofollow")},m(z,C){b(z,l,C),e(l,k),e(l,f),e(f,p),e(l,g),b(z,n,C),b(z,c,C),e(c,B),e(B,ce),e(c,W),e(c,I),e(I,he),b(z,Qe,C),b(z,j,C),e(j,ve),e(j,Te),e(Te,kt),e(j,rt),e(j,U),e(U,me),e(j,Ve),e(j,ee),e(ee,yt),e(j,Je),e(j,we),e(we,it),e(j,fe),e(j,$e),e($e,xe),e(j,vt),b(z,Ke,C),b(z,O,C),e(O,N),e(N,Tt),e(N,_e),e(_e,ae),e(N,Xe),e(N,Fe),e(Fe,wt),e(O,Ze),e(O,R),e(R,$t),e(R,pe),e(pe,xt),e(R,dt),e(R,se),e(se,Ft),e(O,lt),e(O,Z),e(Z,Ye),e(Z,ze),e(ze,ct),b(z,Y,C),b(z,H,C),e(H,Be),e(H,te),e(te,zt),e(H,qe)},d(z){z&&t(l),z&&t(n),z&&t(c),z&&t(Qe),z&&t(j),z&&t(Ke),z&&t(O),z&&t(Y),z&&t(H)}}}function F2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function z2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, TFBartModel
import tensorflow as tf

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = TFBartModel.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function B2(F){let l,k,f,p,g,n,c,B,ce,W,I,he,Qe,j,ve,Te,kt,rt,U,me,Ve,ee,yt,Je,we,it,fe,$e,xe,vt,Ke,O,N,Tt,_e,ae,Xe,Fe,wt,Ze,R,$t,pe,xt,dt,se,Ft,lt,Z,Ye,ze,ct,Y,H,Be,te,zt,qe;return{c(){l=a("p"),k=i("TensorFlow models and layers in "),f=a("code"),p=i("transformers"),g=i(" accept two formats as input:"),n=h(),c=a("ul"),B=a("li"),ce=i("having all inputs as keyword arguments (like PyTorch models), or"),W=h(),I=a("li"),he=i("having all inputs as a list, tuple or dict in the first positional argument."),Qe=h(),j=a("p"),ve=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Te=a("code"),kt=i("model.fit()"),rt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=a("code"),me=i("model.fit()"),Ve=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),ee=a("code"),yt=i("fit()"),Je=i(" and "),we=a("code"),it=i("predict()"),fe=i(`, such as when creating your own layers or models with
the Keras `),$e=a("code"),xe=i("Functional"),vt=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ke=h(),O=a("ul"),N=a("li"),Tt=i("a single Tensor with "),_e=a("code"),ae=i("input_ids"),Xe=i(" only and nothing else: "),Fe=a("code"),wt=i("model(input_ids)"),Ze=h(),R=a("li"),$t=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=a("code"),xt=i("model([input_ids, attention_mask])"),dt=i(" or "),se=a("code"),Ft=i("model([input_ids, attention_mask, token_type_ids])"),lt=h(),Z=a("li"),Ye=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ze=a("code"),ct=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Y=h(),H=a("p"),Be=i(`Note that when creating models and layers with
`),te=a("a"),zt=i("subclassing"),qe=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){l=s(z,"P",{});var C=r(l);k=d(C,"TensorFlow models and layers in "),f=s(C,"CODE",{});var Nt=r(f);p=d(Nt,"transformers"),Nt.forEach(t),g=d(C," accept two formats as input:"),C.forEach(t),n=m(z),c=s(z,"UL",{});var oe=r(c);B=s(oe,"LI",{});var Ie=r(B);ce=d(Ie,"having all inputs as keyword arguments (like PyTorch models), or"),Ie.forEach(t),W=m(oe),I=s(oe,"LI",{});var Bt=r(I);he=d(Bt,"having all inputs as a list, tuple or dict in the first positional argument."),Bt.forEach(t),oe.forEach(t),Qe=m(z),j=s(z,"P",{});var E=r(j);ve=d(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Te=s(E,"CODE",{});var ro=r(Te);kt=d(ro,"model.fit()"),ro.forEach(t),rt=d(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s(E,"CODE",{});var qt=r(U);me=d(qt,"model.fit()"),qt.forEach(t),Ve=d(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),ee=s(E,"CODE",{});var io=r(ee);yt=d(io,"fit()"),io.forEach(t),Je=d(E," and "),we=s(E,"CODE",{});var Lt=r(we);it=d(Lt,"predict()"),Lt.forEach(t),fe=d(E,`, such as when creating your own layers or models with
the Keras `),$e=s(E,"CODE",{});var ge=r($e);xe=d(ge,"Functional"),ge.forEach(t),vt=d(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),Ke=m(z),O=s(z,"UL",{});var Q=r(O);N=s(Q,"LI",{});var je=r(N);Tt=d(je,"a single Tensor with "),_e=s(je,"CODE",{});var et=r(_e);ae=d(et,"input_ids"),et.forEach(t),Xe=d(je," only and nothing else: "),Fe=s(je,"CODE",{});var lo=r(Fe);wt=d(lo,"model(input_ids)"),lo.forEach(t),je.forEach(t),Ze=m(Q),R=s(Q,"LI",{});var Ce=r(R);$t=d(Ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),pe=s(Ce,"CODE",{});var co=r(pe);xt=d(co,"model([input_ids, attention_mask])"),co.forEach(t),dt=d(Ce," or "),se=s(Ce,"CODE",{});var ue=r(se);Ft=d(ue,"model([input_ids, attention_mask, token_type_ids])"),ue.forEach(t),Ce.forEach(t),lt=m(Q),Z=s(Q,"LI",{});var jt=r(Z);Ye=d(jt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ze=s(jt,"CODE",{});var pt=r(ze);ct=d(pt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),pt.forEach(t),jt.forEach(t),Q.forEach(t),Y=m(z),H=s(z,"P",{});var tt=r(H);Be=d(tt,`Note that when creating models and layers with
`),te=s(tt,"A",{href:!0,rel:!0});var po=r(te);zt=d(po,"subclassing"),po.forEach(t),qe=d(tt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),tt.forEach(t),this.h()},h(){u(te,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(te,"rel","nofollow")},m(z,C){b(z,l,C),e(l,k),e(l,f),e(f,p),e(l,g),b(z,n,C),b(z,c,C),e(c,B),e(B,ce),e(c,W),e(c,I),e(I,he),b(z,Qe,C),b(z,j,C),e(j,ve),e(j,Te),e(Te,kt),e(j,rt),e(j,U),e(U,me),e(j,Ve),e(j,ee),e(ee,yt),e(j,Je),e(j,we),e(we,it),e(j,fe),e(j,$e),e($e,xe),e(j,vt),b(z,Ke,C),b(z,O,C),e(O,N),e(N,Tt),e(N,_e),e(_e,ae),e(N,Xe),e(N,Fe),e(Fe,wt),e(O,Ze),e(O,R),e(R,$t),e(R,pe),e(pe,xt),e(R,dt),e(R,se),e(se,Ft),e(O,lt),e(O,Z),e(Z,Ye),e(Z,ze),e(ze,ct),b(z,Y,C),b(z,H,C),e(H,Be),e(H,te),e(te,zt),e(H,qe)},d(z){z&&t(l),z&&t(n),z&&t(c),z&&t(Qe),z&&t(j),z&&t(Ke),z&&t(O),z&&t(Y),z&&t(H)}}}function q2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function j2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Summarization example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function C2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
TXT = "My friends are <mask> but they eat too many carbs."

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
input_ids = tokenizer([TXT], return_tensors="tf")["input_ids"]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),k=i("Mask filling example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Mask filling example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function E2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function M2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function A2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function P2(F){let l,k,f,p,g;return p=new M({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function S2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function O2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Summarization example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function I2(F){let l,k,f,p,g;return p=new M({props:{code:`import jax
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="jax")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs, k=1)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits[<span class="hljs-number">0</span>, masked_index], axis=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = jax.lax.top_k(probs, k=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),k=i("Mask filling example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Mask filling example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function N2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function L2(F){let l,k,f,p,g;return p=new M({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function D2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function G2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function W2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function U2(F){let l,k,f,p,g;return p=new M({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function R2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function H2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForQuestionAnswering.from_pretrained("facebook/bart-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function Q2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function V2(F){let l,k,f,p,g;return p=new M({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function J2(F){let l,k,f,p,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),g=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){b(n,l,c),e(l,k),e(l,f),e(f,p),e(l,g)},d(n){n&&t(l)}}}function K2(F){let l,k,f,p,g;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForCausalLM.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){l=a("p"),k=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);k=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){b(n,l,c),e(l,k),b(n,f,c),T(p,n,c),g=!0},p:P,i(n){g||(w(p.$$.fragment,n),g=!0)},o(n){$(p.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function X2(F){let l,k,f,p,g,n,c,B,ce,W,I,he,Qe,j,ve,Te,kt,rt,U,me,Ve,ee,yt,Je,we,it,fe,$e,xe,vt,Ke,O,N,Tt,_e,ae,Xe,Fe,wt,Ze,R,$t,pe,xt,dt,se,Ft,lt,Z,Ye,ze,ct,Y,H,Be,te,zt,qe,z,C,Nt,oe,Ie,Bt,E,ro,qt,io,Lt,ge,Q,je,et,lo,Ce,co,ue,jt,pt,tt,po,Zd,jh,Ch,Na,Eh,Mh,Ah,Xo,La,Ph,Sh,Da,Oh,Ih,qp,uo,Zo,Yd,Ga,Nh,el,Lh,jp,Ne,Ct,Dh,tl,Gh,Wh,Ui,Uh,Rh,Ri,Hh,Qh,Vh,ho,Jh,Hi,Kh,Xh,ol,Zh,Yh,em,mo,tm,nl,om,nm,al,am,sm,rm,Qi,Vi,im,dm,lm,fo,cm,sl,pm,um,rl,hm,mm,Cp,_o,Yo,il,Wa,fm,dl,_m,Ep,Dt,gm,ll,bm,km,cl,ym,vm,Mp,Ua,Ap,go,en,pl,Ra,Tm,ul,wm,Pp,Ji,$m,Sp,Ha,Op,re,Qa,xm,Va,Fm,zm,Bm,Ja,qm,Ka,jm,Cm,Em,Xa,Mm,Za,Am,Pm,Sm,Gt,Ki,Om,Im,Ya,Nm,Lm,es,Dm,Gm,Wm,Wt,Xi,Um,Rm,ts,Hm,Qm,os,Vm,Jm,Km,tn,Zi,Xm,Zm,ns,Ym,ef,tf,Yi,as,of,nf,Ip,ss,Np,ut,Ut,ed,af,sf,rs,rf,df,is,lf,cf,pf,Rt,td,uf,hf,ds,mf,ff,ls,_f,gf,bf,Ht,od,kf,yf,cs,vf,Tf,ps,wf,$f,xf,nd,us,Ff,zf,Lp,hs,Dp,Qt,ms,Bf,fs,qf,jf,Cf,Vt,ad,Ef,Mf,_s,Af,Pf,gs,Sf,Of,If,Jt,sd,Nf,Lf,bs,Df,Gf,ks,Wf,Uf,Gp,bo,on,hl,ys,Rf,ml,Hf,Wp,ot,vs,Qf,ko,Vf,rd,Jf,Kf,Ts,Xf,Zf,Yf,yo,e_,id,t_,o_,dd,n_,a_,s_,nn,Up,vo,an,fl,ws,r_,_l,i_,Rp,S,$s,d_,gl,l_,c_,bl,p_,u_,sn,h_,xs,m_,kl,f_,__,g_,rn,b_,Fs,k_,ld,y_,v_,T_,Kt,zs,w_,yl,$_,x_,Bs,cd,F_,vl,z_,B_,pd,q_,Tl,j_,C_,dn,qs,E_,wl,M_,A_,ln,js,P_,$l,S_,O_,cn,Cs,I_,Es,N_,xl,L_,D_,Hp,To,pn,Fl,Ms,G_,zl,W_,Qp,V,As,U_,Ps,R_,Bl,H_,Q_,V_,ql,J_,K_,un,X_,Ss,Z_,jl,Y_,eg,tg,hn,og,Os,ng,ud,ag,sg,rg,mn,Is,ig,Cl,dg,Vp,wo,fn,El,Ns,lg,Ml,cg,Jp,nt,Ls,pg,Ds,ug,hd,hg,mg,fg,Gs,_g,Ws,gg,bg,kg,ht,Us,yg,$o,vg,md,Tg,wg,Al,$g,xg,Fg,_n,zg,gn,Kp,xo,bn,Pl,Rs,Bg,Sl,qg,Xp,at,Hs,jg,Qs,Cg,fd,Eg,Mg,Ag,Vs,Pg,Js,Sg,Og,Ig,Le,Ks,Ng,Fo,Lg,_d,Dg,Gg,Ol,Wg,Ug,Rg,kn,Hg,yn,Qg,vn,Zp,zo,Tn,Il,Xs,Vg,Nl,Jg,Yp,Ee,Zs,Kg,Ll,Xg,Zg,Ys,Yg,gd,eb,tb,ob,er,nb,tr,ab,sb,rb,ie,or,ib,Bo,db,bd,lb,cb,Dl,pb,ub,hb,wn,mb,$n,fb,xn,_b,Fn,gb,zn,eu,qo,Bn,Gl,nr,bb,Wl,kb,tu,Me,ar,yb,jo,vb,Ul,Tb,wb,Rl,$b,xb,Fb,sr,zb,kd,Bb,qb,jb,rr,Cb,ir,Eb,Mb,Ab,De,dr,Pb,Co,Sb,yd,Ob,Ib,Hl,Nb,Lb,Db,qn,Gb,jn,Wb,Cn,ou,Eo,En,Ql,lr,Ub,Vl,Rb,nu,Ae,cr,Hb,Jl,Qb,Vb,pr,Jb,vd,Kb,Xb,Zb,ur,Yb,hr,ek,tk,ok,Mn,mr,nk,An,au,Mo,Pn,Kl,fr,ak,Xl,sk,su,Pe,_r,rk,gr,ik,Td,dk,lk,ck,br,pk,kr,uk,hk,mk,Sn,fk,mt,yr,_k,Ao,gk,wd,bk,kk,Zl,yk,vk,Tk,On,wk,In,ru,Po,Nn,Yl,vr,$k,ec,xk,iu,Se,Tr,Fk,wr,zk,$d,Bk,qk,jk,$r,Ck,xr,Ek,Mk,Ak,Ln,Pk,Ge,Fr,Sk,So,Ok,xd,Ik,Nk,tc,Lk,Dk,Gk,Dn,Wk,Gn,Uk,Wn,du,Oo,Un,oc,zr,Rk,nc,Hk,lu,J,Br,Qk,qr,Vk,Fd,Jk,Kk,Xk,jr,Zk,Cr,Yk,ey,ty,ac,oy,ny,Et,sc,Er,ay,sy,rc,Mr,ry,iy,ic,Ar,dy,ly,dc,Pr,cy,py,ft,Sr,uy,Io,hy,lc,my,fy,cc,_y,gy,by,Rn,ky,Hn,yy,Qn,Or,vy,Vn,Ty,Jn,Ir,wy,Kn,cu,No,Xn,pc,Nr,$y,uc,xy,pu,K,Lr,Fy,Dr,zy,zd,By,qy,jy,Gr,Cy,Wr,Ey,My,Ay,hc,Py,Sy,Mt,mc,Ur,Oy,Iy,fc,Rr,Ny,Ly,_c,Hr,Dy,Gy,gc,Qr,Wy,Uy,We,Vr,Ry,Lo,Hy,bc,Qy,Vy,kc,Jy,Ky,Xy,Zn,Zy,Yn,Yy,ea,ev,ta,Jr,tv,oa,ov,na,Kr,nv,aa,uu,Do,sa,yc,Xr,av,vc,sv,hu,L,Zr,rv,Tc,iv,dv,Yr,lv,Bd,cv,pv,uv,ei,hv,ti,mv,fv,_v,wc,gv,bv,At,$c,oi,kv,yv,xc,ni,vv,Tv,Fc,ai,wv,$v,zc,si,xv,Fv,_t,ri,zv,Go,Bv,Bc,qv,jv,qc,Cv,Ev,Mv,ra,Av,ia,Pv,da,ii,Sv,la,Ov,ca,di,Iv,pa,mu,Wo,ua,jc,li,Nv,Cc,Lv,fu,D,ci,Dv,Uo,Gv,Ec,Wv,Uv,Mc,Rv,Hv,Qv,pi,Vv,qd,Jv,Kv,Xv,ui,Zv,hi,Yv,eT,tT,Ac,oT,nT,Pt,Pc,mi,aT,sT,Sc,fi,rT,iT,Oc,_i,dT,lT,Ic,gi,cT,pT,gt,bi,uT,Ro,hT,Nc,mT,fT,Lc,_T,gT,bT,ha,kT,ma,yT,fa,ki,vT,_a,TT,ga,yi,wT,ba,_u,Ho,ka,Dc,vi,$T,Gc,xT,gu,ne,Ti,FT,Wc,zT,BT,wi,qT,jd,jT,CT,ET,$i,MT,xi,AT,PT,ST,Uc,OT,IT,St,Rc,Fi,NT,LT,Hc,zi,DT,GT,Qc,Bi,WT,UT,Vc,qi,RT,HT,bt,ji,QT,Qo,VT,Jc,JT,KT,Kc,XT,ZT,YT,ya,ew,va,bu;return n=new X({}),ee=new X({}),E=new X({}),Ga=new X({}),Wa=new X({}),Ua=new M({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large", forced_bos_token_id=0)
tok = BartTokenizer.from_pretrained("facebook/bart-large")
example_english_phrase = "UN Chief Says There Is No <mask> in Syria"
batch = tok(example_english_phrase, return_tensors="pt")
generated_ids = model.generate(batch["input_ids"])
assert tok.batch_decode(generated_ids, skip_special_tokens=True) == [
    "UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria"
]`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, forced_bos_token_id=<span class="hljs-number">0</span>)
tok = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No &lt;mask&gt; in Syria&quot;</span>
batch = tok(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_ids = model.generate(batch[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-keyword">assert</span> tok.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>) == [
    <span class="hljs-string">&quot;UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria&quot;</span>
]`}}),Ra=new X({}),Ha=new rw({props:{pipeline:"summarization"}}),ss=new rw({props:{pipeline:"fill-mask"}}),hs=new rw({props:{pipeline:"translation"}}),ys=new X({}),vs=new q({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/main/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.BartConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.BartConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.BartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BartConfig.num_labels",description:`<strong>num_labels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of labels to use in <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"num_labels"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/configuration_bart.py#L35"}}),nn=new A({props:{anchor:"transformers.BartConfig.example",$$slots:{default:[r2]},$$scope:{ctx:F}}}),ws=new X({}),$s=new q({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L101"}}),sn=new A({props:{anchor:"transformers.BartTokenizer.example",$$slots:{default:[i2]},$$scope:{ctx:F}}}),rn=new Oe({props:{$$slots:{default:[d2]},$$scope:{ctx:F}}}),zs=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qs=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L303"}}),js=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cs=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ms=new X({}),As=new q({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BartTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart_fast.py#L70"}}),un=new A({props:{anchor:"transformers.BartTokenizerFast.example",$$slots:{default:[l2]},$$scope:{ctx:F}}}),hn=new Oe({props:{$$slots:{default:[c2]},$$scope:{ctx:F}}}),Is=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart_fast.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ns=new X({}),Ls=new q({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1155"}}),Us=new q({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1184",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),_n=new Oe({props:{$$slots:{default:[p2]},$$scope:{ctx:F}}}),gn=new A({props:{anchor:"transformers.BartModel.forward.example",$$slots:{default:[u2]},$$scope:{ctx:F}}}),Rs=new X({}),Hs=new q({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1284"}}),Ks=new q({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1328",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),kn=new Oe({props:{$$slots:{default:[h2]},$$scope:{ctx:F}}}),yn=new A({props:{anchor:"transformers.BartForConditionalGeneration.forward.example",$$slots:{default:[m2]},$$scope:{ctx:F}}}),vn=new A({props:{anchor:"transformers.BartForConditionalGeneration.forward.example-2",$$slots:{default:[f2]},$$scope:{ctx:F}}}),Xs=new X({}),Zs=new q({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1460"}}),or=new q({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1475",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),wn=new Oe({props:{$$slots:{default:[_2]},$$scope:{ctx:F}}}),$n=new A({props:{anchor:"transformers.BartForSequenceClassification.forward.example",$$slots:{default:[g2]},$$scope:{ctx:F}}}),xn=new A({props:{anchor:"transformers.BartForSequenceClassification.forward.example-2",$$slots:{default:[b2]},$$scope:{ctx:F}}}),Fn=new A({props:{anchor:"transformers.BartForSequenceClassification.forward.example-3",$$slots:{default:[k2]},$$scope:{ctx:F}}}),zn=new A({props:{anchor:"transformers.BartForSequenceClassification.forward.example-4",$$slots:{default:[y2]},$$scope:{ctx:F}}}),nr=new X({}),ar=new q({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1589"}}),dr=new q({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1603",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),qn=new Oe({props:{$$slots:{default:[v2]},$$scope:{ctx:F}}}),jn=new A({props:{anchor:"transformers.BartForQuestionAnswering.forward.example",$$slots:{default:[T2]},$$scope:{ctx:F}}}),Cn=new A({props:{anchor:"transformers.BartForQuestionAnswering.forward.example-2",$$slots:{default:[w2]},$$scope:{ctx:F}}}),lr=new X({}),cr=new q({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1727"}}),mr=new q({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1760",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),An=new A({props:{anchor:"transformers.BartForCausalLM.forward.example",$$slots:{default:[$2]},$$scope:{ctx:F}}}),fr=new X({}),_r=new q({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1169"}}),Sn=new Oe({props:{$$slots:{default:[x2]},$$scope:{ctx:F}}}),yr=new q({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1184",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),On=new Oe({props:{$$slots:{default:[F2]},$$scope:{ctx:F}}}),In=new A({props:{anchor:"transformers.TFBartModel.call.example",$$slots:{default:[z2]},$$scope:{ctx:F}}}),vr=new X({}),Tr=new q({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1277"}}),Ln=new Oe({props:{$$slots:{default:[B2]},$$scope:{ctx:F}}}),Fr=new q({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1313",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dn=new Oe({props:{$$slots:{default:[q2]},$$scope:{ctx:F}}}),Gn=new A({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example",$$slots:{default:[j2]},$$scope:{ctx:F}}}),Wn=new A({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example-2",$$slots:{default:[C2]},$$scope:{ctx:F}}}),zr=new X({}),Br=new q({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1241"}}),Sr=new q({props:{name:"__call__",anchor:"transformers.FlaxBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new Oe({props:{$$slots:{default:[E2]},$$scope:{ctx:F}}}),Hn=new A({props:{anchor:"transformers.FlaxBartModel.__call__.example",$$slots:{default:[M2]},$$scope:{ctx:F}}}),Or=new q({props:{name:"encode",anchor:"transformers.FlaxBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new A({props:{anchor:"transformers.FlaxBartModel.encode.example",$$slots:{default:[A2]},$$scope:{ctx:F}}}),Ir=new q({props:{name:"decode",anchor:"transformers.FlaxBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new A({props:{anchor:"transformers.FlaxBartModel.decode.example",$$slots:{default:[P2]},$$scope:{ctx:F}}}),Nr=new X({}),Lr=new q({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1327"}}),Vr=new q({props:{name:"__call__",anchor:"transformers.FlaxBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new Oe({props:{$$slots:{default:[S2]},$$scope:{ctx:F}}}),Yn=new A({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example",$$slots:{default:[O2]},$$scope:{ctx:F}}}),ea=new A({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example-2",$$slots:{default:[I2]},$$scope:{ctx:F}}}),Jr=new q({props:{name:"encode",anchor:"transformers.FlaxBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oa=new A({props:{anchor:"transformers.FlaxBartForConditionalGeneration.encode.example",$$slots:{default:[N2]},$$scope:{ctx:F}}}),Kr=new q({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1331",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),aa=new A({props:{anchor:"transformers.FlaxBartForConditionalGeneration.decode.example",$$slots:{default:[L2]},$$scope:{ctx:F}}}),Xr=new X({}),Zr=new q({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1640"}}),ri=new q({props:{name:"__call__",anchor:"transformers.FlaxBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ra=new Oe({props:{$$slots:{default:[D2]},$$scope:{ctx:F}}}),ia=new A({props:{anchor:"transformers.FlaxBartForSequenceClassification.__call__.example",$$slots:{default:[G2]},$$scope:{ctx:F}}}),ii=new q({props:{name:"encode",anchor:"transformers.FlaxBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),la=new A({props:{anchor:"transformers.FlaxBartForSequenceClassification.encode.example",$$slots:{default:[W2]},$$scope:{ctx:F}}}),di=new q({props:{name:"decode",anchor:"transformers.FlaxBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pa=new A({props:{anchor:"transformers.FlaxBartForSequenceClassification.decode.example",$$slots:{default:[U2]},$$scope:{ctx:F}}}),li=new X({}),ci=new q({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1727"}}),bi=new q({props:{name:"__call__",anchor:"transformers.FlaxBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ha=new Oe({props:{$$slots:{default:[R2]},$$scope:{ctx:F}}}),ma=new A({props:{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.example",$$slots:{default:[H2]},$$scope:{ctx:F}}}),ki=new q({props:{name:"encode",anchor:"transformers.FlaxBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_a=new A({props:{anchor:"transformers.FlaxBartForQuestionAnswering.encode.example",$$slots:{default:[Q2]},$$scope:{ctx:F}}}),yi=new q({props:{name:"decode",anchor:"transformers.FlaxBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ba=new A({props:{anchor:"transformers.FlaxBartForQuestionAnswering.decode.example",$$slots:{default:[V2]},$$scope:{ctx:F}}}),vi=new X({}),Ti=new q({props:{name:"class transformers.FlaxBartForCausalLM",anchor:"transformers.FlaxBartForCausalLM",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1964"}}),ji=new q({props:{name:"__call__",anchor:"transformers.FlaxBartForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForCausalLM.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForCausalLM.__call__.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1802",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ya=new Oe({props:{$$slots:{default:[J2]},$$scope:{ctx:F}}}),va=new A({props:{anchor:"transformers.FlaxBartForCausalLM.__call__.example",$$slots:{default:[K2]},$$scope:{ctx:F}}}),{c(){l=a("meta"),k=h(),f=a("h1"),p=a("a"),g=a("span"),y(n.$$.fragment),c=h(),B=a("span"),ce=i("BART"),W=h(),I=a("p"),he=a("strong"),Qe=i("DISCLAIMER:"),j=i(" If you see something strange, file a "),ve=a("a"),Te=i("Github Issue"),kt=i(` and assign
@patrickvonplaten`),rt=h(),U=a("h2"),me=a("a"),Ve=a("span"),y(ee.$$.fragment),yt=h(),Je=a("span"),we=i("Overview"),it=h(),fe=a("p"),$e=i("The Bart model was proposed in "),xe=a("a"),vt=i(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),Ke=i(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),O=h(),N=a("p"),Tt=i("According to the abstract,"),_e=h(),ae=a("ul"),Xe=a("li"),Fe=i(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),wt=h(),Ze=a("li"),R=i(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),$t=h(),pe=a("li"),xt=i(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),dt=h(),se=a("p"),Ft=i("Tips:"),lt=h(),Z=a("ul"),Ye=a("li"),ze=i(`BART is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ct=h(),Y=a("p"),H=i("This model was contributed by "),Be=a("a"),te=i("sshleifer"),zt=i(". The Authors\u2019 code can be found "),qe=a("a"),z=i("here"),C=i("."),Nt=h(),oe=a("h3"),Ie=a("a"),Bt=a("span"),y(E.$$.fragment),ro=h(),qt=a("span"),io=i("Examples"),Lt=h(),ge=a("ul"),Q=a("li"),je=i(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),et=a("a"),lo=i("examples/pytorch/summarization/"),Ce=i("."),co=h(),ue=a("li"),jt=i("An example of how to train "),pt=a("a"),tt=i("BartForConditionalGeneration"),po=i(" with a Hugging Face "),Zd=a("code"),jh=i("datasets"),Ch=i(`
object can be found in this `),Na=a("a"),Eh=i("forum discussion"),Mh=i("."),Ah=h(),Xo=a("li"),La=a("a"),Ph=i("Distilled checkpoints"),Sh=i(" are described in this "),Da=a("a"),Oh=i("paper"),Ih=i("."),qp=h(),uo=a("h2"),Zo=a("a"),Yd=a("span"),y(Ga.$$.fragment),Nh=h(),el=a("span"),Lh=i("Implementation Notes"),jp=h(),Ne=a("ul"),Ct=a("li"),Dh=i("Bart doesn\u2019t use "),tl=a("code"),Gh=i("token_type_ids"),Wh=i(" for sequence classification. Use "),Ui=a("a"),Uh=i("BartTokenizer"),Rh=i(` or
`),Ri=a("a"),Hh=i("encode()"),Qh=i(" to get the proper splitting."),Vh=h(),ho=a("li"),Jh=i("The forward pass of "),Hi=a("a"),Kh=i("BartModel"),Xh=i(" will create the "),ol=a("code"),Zh=i("decoder_input_ids"),Yh=i(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),em=h(),mo=a("li"),tm=i(`Model predictions are intended to be identical to the original implementation when
`),nl=a("code"),om=i("forced_bos_token_id=0"),nm=i(`. This only works, however, if the string you pass to
`),al=a("code"),am=i("fairseq.encode"),sm=i(" starts with a space."),rm=h(),Qi=a("li"),Vi=a("a"),im=i("generate()"),dm=i(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),lm=h(),fo=a("li"),cm=i("Models that load the "),sl=a("em"),pm=i("facebook/bart-large-cnn"),um=i(" weights will not have a "),rl=a("code"),hm=i("mask_token_id"),mm=i(`, or be able to perform
mask-filling tasks.`),Cp=h(),_o=a("h2"),Yo=a("a"),il=a("span"),y(Wa.$$.fragment),fm=h(),dl=a("span"),_m=i("Mask Filling"),Ep=h(),Dt=a("p"),gm=i("The "),ll=a("code"),bm=i("facebook/bart-base"),km=i(" and "),cl=a("code"),ym=i("facebook/bart-large"),vm=i(" checkpoints can be used to fill multi-token masks."),Mp=h(),y(Ua.$$.fragment),Ap=h(),go=a("h2"),en=a("a"),pl=a("span"),y(Ra.$$.fragment),Tm=h(),ul=a("span"),wm=i("Resources"),Pp=h(),Ji=a("p"),$m=i("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with BART. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Sp=h(),y(Ha.$$.fragment),Op=h(),re=a("ul"),Qa=a("li"),xm=i("A blog post on "),Va=a("a"),Fm=i("Distributed Training: Train BART/T5 for Summarization using \u{1F917} Transformers and Amazon SageMaker"),zm=i("."),Bm=h(),Ja=a("li"),qm=i("A notebook on how to "),Ka=a("a"),jm=i("finetune BART for summarization with fastai using blurr"),Cm=i(". \u{1F30E}"),Em=h(),Xa=a("li"),Mm=i("A notebook on how to "),Za=a("a"),Am=i("finetune BART for summarization in two languages with Trainer class"),Pm=i(". \u{1F30E}"),Sm=h(),Gt=a("li"),Ki=a("a"),Om=i("BartForConditionalGeneration"),Im=i(" is supported by this "),Ya=a("a"),Nm=i("example script"),Lm=i(" and "),es=a("a"),Dm=i("noteboook"),Gm=i("."),Wm=h(),Wt=a("li"),Xi=a("a"),Um=i("TFBartForConditionalGeneration"),Rm=i(" is supported by this "),ts=a("a"),Hm=i("example script"),Qm=i(" and "),os=a("a"),Vm=i("notebook"),Jm=i("."),Km=h(),tn=a("li"),Zi=a("a"),Xm=i("FlaxBartForConditionalGeneration"),Zm=i(" is supported by this "),ns=a("a"),Ym=i("example script"),ef=i("."),tf=h(),Yi=a("li"),as=a("a"),of=i("Summarization"),nf=i(" chapter of the \u{1F917} Hugging Face course."),Ip=h(),y(ss.$$.fragment),Np=h(),ut=a("ul"),Ut=a("li"),ed=a("a"),af=i("BartForConditionalGeneration"),sf=i(" is supported by this "),rs=a("a"),rf=i("example script"),df=i(" and "),is=a("a"),lf=i("notebook"),cf=i("."),pf=h(),Rt=a("li"),td=a("a"),uf=i("TFBartForConditionalGeneration"),hf=i(" is supported by this "),ds=a("a"),mf=i("example script"),ff=i(" and "),ls=a("a"),_f=i("notebook"),gf=i("."),bf=h(),Ht=a("li"),od=a("a"),kf=i("FlaxBartForConditionalGeneration"),yf=i(" is supported by this "),cs=a("a"),vf=i("example script"),Tf=i(" and "),ps=a("a"),wf=i("notebook"),$f=i("."),xf=h(),nd=a("li"),us=a("a"),Ff=i("Masked language modeling"),zf=i(" chapter of the \u{1F917} Hugging Face Course."),Lp=h(),y(hs.$$.fragment),Dp=h(),Qt=a("ul"),ms=a("li"),Bf=i("A notebook on how to "),fs=a("a"),qf=i("finetune mBART using Seq2SeqTrainer for Hindi to English translation"),jf=i(". \u{1F30E}"),Cf=h(),Vt=a("li"),ad=a("a"),Ef=i("BartForConditionalGeneration"),Mf=i(" is supported by this "),_s=a("a"),Af=i("example script"),Pf=i(" and "),gs=a("a"),Sf=i("notebook"),Of=i("."),If=h(),Jt=a("li"),sd=a("a"),Nf=i("TFBartForConditionalGeneration"),Lf=i(" is supported by this "),bs=a("a"),Df=i("example script"),Gf=i(" and "),ks=a("a"),Wf=i("notebook"),Uf=i("."),Gp=h(),bo=a("h2"),on=a("a"),hl=a("span"),y(ys.$$.fragment),Rf=h(),ml=a("span"),Hf=i("BartConfig"),Wp=h(),ot=a("div"),y(vs.$$.fragment),Qf=h(),ko=a("p"),Vf=i("This is the configuration class to store the configuration of a "),rd=a("a"),Jf=i("BartModel"),Kf=i(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Ts=a("a"),Xf=i("facebook/bart-large"),Zf=i(" architecture."),Yf=h(),yo=a("p"),e_=i("Configuration objects inherit from "),id=a("a"),t_=i("PretrainedConfig"),o_=i(` and can be used to control the model outputs. Read the
documentation from `),dd=a("a"),n_=i("PretrainedConfig"),a_=i(" for more information."),s_=h(),y(nn.$$.fragment),Up=h(),vo=a("h2"),an=a("a"),fl=a("span"),y(ws.$$.fragment),r_=h(),_l=a("span"),i_=i("BartTokenizer"),Rp=h(),S=a("div"),y($s.$$.fragment),d_=h(),gl=a("p"),l_=i("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),c_=h(),bl=a("p"),p_=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),u_=h(),y(sn.$$.fragment),h_=h(),xs=a("p"),m_=i("You can get around that behavior by passing "),kl=a("code"),f_=i("add_prefix_space=True"),__=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),g_=h(),y(rn.$$.fragment),b_=h(),Fs=a("p"),k_=i("This tokenizer inherits from "),ld=a("a"),y_=i("PreTrainedTokenizer"),v_=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),T_=h(),Kt=a("div"),y(zs.$$.fragment),w_=h(),yl=a("p"),$_=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),x_=h(),Bs=a("ul"),cd=a("li"),F_=i("single sequence: "),vl=a("code"),z_=i("<s> X </s>"),B_=h(),pd=a("li"),q_=i("pair of sequences: "),Tl=a("code"),j_=i("<s> A </s></s> B </s>"),C_=h(),dn=a("div"),y(qs.$$.fragment),E_=h(),wl=a("p"),M_=i("Converts a sequence of tokens (string) in a single string."),A_=h(),ln=a("div"),y(js.$$.fragment),P_=h(),$l=a("p"),S_=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),O_=h(),cn=a("div"),y(Cs.$$.fragment),I_=h(),Es=a("p"),N_=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xl=a("code"),L_=i("prepare_for_model"),D_=i(" method."),Hp=h(),To=a("h2"),pn=a("a"),Fl=a("span"),y(Ms.$$.fragment),G_=h(),zl=a("span"),W_=i("BartTokenizerFast"),Qp=h(),V=a("div"),y(As.$$.fragment),U_=h(),Ps=a("p"),R_=i("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Bl=a("em"),H_=i("tokenizers"),Q_=i(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),V_=h(),ql=a("p"),J_=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),K_=h(),y(un.$$.fragment),X_=h(),Ss=a("p"),Z_=i("You can get around that behavior by passing "),jl=a("code"),Y_=i("add_prefix_space=True"),eg=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),tg=h(),y(hn.$$.fragment),og=h(),Os=a("p"),ng=i("This tokenizer inherits from "),ud=a("a"),ag=i("PreTrainedTokenizerFast"),sg=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),rg=h(),mn=a("div"),y(Is.$$.fragment),ig=h(),Cl=a("p"),dg=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Vp=h(),wo=a("h2"),fn=a("a"),El=a("span"),y(Ns.$$.fragment),lg=h(),Ml=a("span"),cg=i("BartModel"),Jp=h(),nt=a("div"),y(Ls.$$.fragment),pg=h(),Ds=a("p"),ug=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),hd=a("a"),hg=i("PreTrainedModel"),mg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fg=h(),Gs=a("p"),_g=i("This model is also a PyTorch "),Ws=a("a"),gg=i("torch.nn.Module"),bg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kg=h(),ht=a("div"),y(Us.$$.fragment),yg=h(),$o=a("p"),vg=i("The "),md=a("a"),Tg=i("BartModel"),wg=i(" forward method, overrides the "),Al=a("code"),$g=i("__call__"),xg=i(" special method."),Fg=h(),y(_n.$$.fragment),zg=h(),y(gn.$$.fragment),Kp=h(),xo=a("h2"),bn=a("a"),Pl=a("span"),y(Rs.$$.fragment),Bg=h(),Sl=a("span"),qg=i("BartForConditionalGeneration"),Xp=h(),at=a("div"),y(Hs.$$.fragment),jg=h(),Qs=a("p"),Cg=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),fd=a("a"),Eg=i("PreTrainedModel"),Mg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ag=h(),Vs=a("p"),Pg=i("This model is also a PyTorch "),Js=a("a"),Sg=i("torch.nn.Module"),Og=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ig=h(),Le=a("div"),y(Ks.$$.fragment),Ng=h(),Fo=a("p"),Lg=i("The "),_d=a("a"),Dg=i("BartForConditionalGeneration"),Gg=i(" forward method, overrides the "),Ol=a("code"),Wg=i("__call__"),Ug=i(" special method."),Rg=h(),y(kn.$$.fragment),Hg=h(),y(yn.$$.fragment),Qg=h(),y(vn.$$.fragment),Zp=h(),zo=a("h2"),Tn=a("a"),Il=a("span"),y(Xs.$$.fragment),Vg=h(),Nl=a("span"),Jg=i("BartForSequenceClassification"),Yp=h(),Ee=a("div"),y(Zs.$$.fragment),Kg=h(),Ll=a("p"),Xg=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Zg=h(),Ys=a("p"),Yg=i("This model inherits from "),gd=a("a"),eb=i("PreTrainedModel"),tb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ob=h(),er=a("p"),nb=i("This model is also a PyTorch "),tr=a("a"),ab=i("torch.nn.Module"),sb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rb=h(),ie=a("div"),y(or.$$.fragment),ib=h(),Bo=a("p"),db=i("The "),bd=a("a"),lb=i("BartForSequenceClassification"),cb=i(" forward method, overrides the "),Dl=a("code"),pb=i("__call__"),ub=i(" special method."),hb=h(),y(wn.$$.fragment),mb=h(),y($n.$$.fragment),fb=h(),y(xn.$$.fragment),_b=h(),y(Fn.$$.fragment),gb=h(),y(zn.$$.fragment),eu=h(),qo=a("h2"),Bn=a("a"),Gl=a("span"),y(nr.$$.fragment),bb=h(),Wl=a("span"),kb=i("BartForQuestionAnswering"),tu=h(),Me=a("div"),y(ar.$$.fragment),yb=h(),jo=a("p"),vb=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ul=a("code"),Tb=i("span start logits"),wb=i(" and "),Rl=a("code"),$b=i("span end logits"),xb=i(")."),Fb=h(),sr=a("p"),zb=i("This model inherits from "),kd=a("a"),Bb=i("PreTrainedModel"),qb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jb=h(),rr=a("p"),Cb=i("This model is also a PyTorch "),ir=a("a"),Eb=i("torch.nn.Module"),Mb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ab=h(),De=a("div"),y(dr.$$.fragment),Pb=h(),Co=a("p"),Sb=i("The "),yd=a("a"),Ob=i("BartForQuestionAnswering"),Ib=i(" forward method, overrides the "),Hl=a("code"),Nb=i("__call__"),Lb=i(" special method."),Db=h(),y(qn.$$.fragment),Gb=h(),y(jn.$$.fragment),Wb=h(),y(Cn.$$.fragment),ou=h(),Eo=a("h2"),En=a("a"),Ql=a("span"),y(lr.$$.fragment),Ub=h(),Vl=a("span"),Rb=i("BartForCausalLM"),nu=h(),Ae=a("div"),y(cr.$$.fragment),Hb=h(),Jl=a("p"),Qb=i("BART decoder with with a language modeling head on top (linear layer with weights tied to the input embeddings)."),Vb=h(),pr=a("p"),Jb=i("This model inherits from "),vd=a("a"),Kb=i("PreTrainedModel"),Xb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb=h(),ur=a("p"),Yb=i("This model is also a PyTorch "),hr=a("a"),ek=i("torch.nn.Module"),tk=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ok=h(),Mn=a("div"),y(mr.$$.fragment),nk=h(),y(An.$$.fragment),au=h(),Mo=a("h2"),Pn=a("a"),Kl=a("span"),y(fr.$$.fragment),ak=h(),Xl=a("span"),sk=i("TFBartModel"),su=h(),Pe=a("div"),y(_r.$$.fragment),rk=h(),gr=a("p"),ik=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Td=a("a"),dk=i("TFPreTrainedModel"),lk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ck=h(),br=a("p"),pk=i("This model is also a "),kr=a("a"),uk=i("tf.keras.Model"),hk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mk=h(),y(Sn.$$.fragment),fk=h(),mt=a("div"),y(yr.$$.fragment),_k=h(),Ao=a("p"),gk=i("The "),wd=a("a"),bk=i("TFBartModel"),kk=i(" forward method, overrides the "),Zl=a("code"),yk=i("__call__"),vk=i(" special method."),Tk=h(),y(On.$$.fragment),wk=h(),y(In.$$.fragment),ru=h(),Po=a("h2"),Nn=a("a"),Yl=a("span"),y(vr.$$.fragment),$k=h(),ec=a("span"),xk=i("TFBartForConditionalGeneration"),iu=h(),Se=a("div"),y(Tr.$$.fragment),Fk=h(),wr=a("p"),zk=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),$d=a("a"),Bk=i("TFPreTrainedModel"),qk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk=h(),$r=a("p"),Ck=i("This model is also a "),xr=a("a"),Ek=i("tf.keras.Model"),Mk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ak=h(),y(Ln.$$.fragment),Pk=h(),Ge=a("div"),y(Fr.$$.fragment),Sk=h(),So=a("p"),Ok=i("The "),xd=a("a"),Ik=i("TFBartForConditionalGeneration"),Nk=i(" forward method, overrides the "),tc=a("code"),Lk=i("__call__"),Dk=i(" special method."),Gk=h(),y(Dn.$$.fragment),Wk=h(),y(Gn.$$.fragment),Uk=h(),y(Wn.$$.fragment),du=h(),Oo=a("h2"),Un=a("a"),oc=a("span"),y(zr.$$.fragment),Rk=h(),nc=a("span"),Hk=i("FlaxBartModel"),lu=h(),J=a("div"),y(Br.$$.fragment),Qk=h(),qr=a("p"),Vk=i(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Fd=a("a"),Jk=i("FlaxPreTrainedModel"),Kk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xk=h(),jr=a("p"),Zk=i(`This model is also a Flax Linen
`),Cr=a("a"),Yk=i("flax.nn.Module"),ey=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ty=h(),ac=a("p"),oy=i("Finally, this model supports inherent JAX features such as:"),ny=h(),Et=a("ul"),sc=a("li"),Er=a("a"),ay=i("Just-In-Time (JIT) compilation"),sy=h(),rc=a("li"),Mr=a("a"),ry=i("Automatic Differentiation"),iy=h(),ic=a("li"),Ar=a("a"),dy=i("Vectorization"),ly=h(),dc=a("li"),Pr=a("a"),cy=i("Parallelization"),py=h(),ft=a("div"),y(Sr.$$.fragment),uy=h(),Io=a("p"),hy=i("The "),lc=a("code"),my=i("FlaxBartPreTrainedModel"),fy=i(" forward method, overrides the "),cc=a("code"),_y=i("__call__"),gy=i(" special method."),by=h(),y(Rn.$$.fragment),ky=h(),y(Hn.$$.fragment),yy=h(),Qn=a("div"),y(Or.$$.fragment),vy=h(),y(Vn.$$.fragment),Ty=h(),Jn=a("div"),y(Ir.$$.fragment),wy=h(),y(Kn.$$.fragment),cu=h(),No=a("h2"),Xn=a("a"),pc=a("span"),y(Nr.$$.fragment),$y=h(),uc=a("span"),xy=i("FlaxBartForConditionalGeneration"),pu=h(),K=a("div"),y(Lr.$$.fragment),Fy=h(),Dr=a("p"),zy=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zd=a("a"),By=i("FlaxPreTrainedModel"),qy=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jy=h(),Gr=a("p"),Cy=i(`This model is also a Flax Linen
`),Wr=a("a"),Ey=i("flax.nn.Module"),My=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ay=h(),hc=a("p"),Py=i("Finally, this model supports inherent JAX features such as:"),Sy=h(),Mt=a("ul"),mc=a("li"),Ur=a("a"),Oy=i("Just-In-Time (JIT) compilation"),Iy=h(),fc=a("li"),Rr=a("a"),Ny=i("Automatic Differentiation"),Ly=h(),_c=a("li"),Hr=a("a"),Dy=i("Vectorization"),Gy=h(),gc=a("li"),Qr=a("a"),Wy=i("Parallelization"),Uy=h(),We=a("div"),y(Vr.$$.fragment),Ry=h(),Lo=a("p"),Hy=i("The "),bc=a("code"),Qy=i("FlaxBartPreTrainedModel"),Vy=i(" forward method, overrides the "),kc=a("code"),Jy=i("__call__"),Ky=i(" special method."),Xy=h(),y(Zn.$$.fragment),Zy=h(),y(Yn.$$.fragment),Yy=h(),y(ea.$$.fragment),ev=h(),ta=a("div"),y(Jr.$$.fragment),tv=h(),y(oa.$$.fragment),ov=h(),na=a("div"),y(Kr.$$.fragment),nv=h(),y(aa.$$.fragment),uu=h(),Do=a("h2"),sa=a("a"),yc=a("span"),y(Xr.$$.fragment),av=h(),vc=a("span"),sv=i("FlaxBartForSequenceClassification"),hu=h(),L=a("div"),y(Zr.$$.fragment),rv=h(),Tc=a("p"),iv=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),dv=h(),Yr=a("p"),lv=i("This model inherits from "),Bd=a("a"),cv=i("FlaxPreTrainedModel"),pv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uv=h(),ei=a("p"),hv=i(`This model is also a Flax Linen
`),ti=a("a"),mv=i("flax.nn.Module"),fv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_v=h(),wc=a("p"),gv=i("Finally, this model supports inherent JAX features such as:"),bv=h(),At=a("ul"),$c=a("li"),oi=a("a"),kv=i("Just-In-Time (JIT) compilation"),yv=h(),xc=a("li"),ni=a("a"),vv=i("Automatic Differentiation"),Tv=h(),Fc=a("li"),ai=a("a"),wv=i("Vectorization"),$v=h(),zc=a("li"),si=a("a"),xv=i("Parallelization"),Fv=h(),_t=a("div"),y(ri.$$.fragment),zv=h(),Go=a("p"),Bv=i("The "),Bc=a("code"),qv=i("FlaxBartPreTrainedModel"),jv=i(" forward method, overrides the "),qc=a("code"),Cv=i("__call__"),Ev=i(" special method."),Mv=h(),y(ra.$$.fragment),Av=h(),y(ia.$$.fragment),Pv=h(),da=a("div"),y(ii.$$.fragment),Sv=h(),y(la.$$.fragment),Ov=h(),ca=a("div"),y(di.$$.fragment),Iv=h(),y(pa.$$.fragment),mu=h(),Wo=a("h2"),ua=a("a"),jc=a("span"),y(li.$$.fragment),Nv=h(),Cc=a("span"),Lv=i("FlaxBartForQuestionAnswering"),fu=h(),D=a("div"),y(ci.$$.fragment),Dv=h(),Uo=a("p"),Gv=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ec=a("code"),Wv=i("span start logits"),Uv=i(" and "),Mc=a("code"),Rv=i("span end logits"),Hv=i(")."),Qv=h(),pi=a("p"),Vv=i("This model inherits from "),qd=a("a"),Jv=i("FlaxPreTrainedModel"),Kv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xv=h(),ui=a("p"),Zv=i(`This model is also a Flax Linen
`),hi=a("a"),Yv=i("flax.nn.Module"),eT=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),tT=h(),Ac=a("p"),oT=i("Finally, this model supports inherent JAX features such as:"),nT=h(),Pt=a("ul"),Pc=a("li"),mi=a("a"),aT=i("Just-In-Time (JIT) compilation"),sT=h(),Sc=a("li"),fi=a("a"),rT=i("Automatic Differentiation"),iT=h(),Oc=a("li"),_i=a("a"),dT=i("Vectorization"),lT=h(),Ic=a("li"),gi=a("a"),cT=i("Parallelization"),pT=h(),gt=a("div"),y(bi.$$.fragment),uT=h(),Ro=a("p"),hT=i("The "),Nc=a("code"),mT=i("FlaxBartPreTrainedModel"),fT=i(" forward method, overrides the "),Lc=a("code"),_T=i("__call__"),gT=i(" special method."),bT=h(),y(ha.$$.fragment),kT=h(),y(ma.$$.fragment),yT=h(),fa=a("div"),y(ki.$$.fragment),vT=h(),y(_a.$$.fragment),TT=h(),ga=a("div"),y(yi.$$.fragment),wT=h(),y(ba.$$.fragment),_u=h(),Ho=a("h2"),ka=a("a"),Dc=a("span"),y(vi.$$.fragment),$T=h(),Gc=a("span"),xT=i("FlaxBartForCausalLM"),gu=h(),ne=a("div"),y(Ti.$$.fragment),FT=h(),Wc=a("p"),zT=i(`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),BT=h(),wi=a("p"),qT=i("This model inherits from "),jd=a("a"),jT=i("FlaxPreTrainedModel"),CT=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=h(),$i=a("p"),MT=i(`This model is also a Flax Linen
`),xi=a("a"),AT=i("flax.nn.Module"),PT=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ST=h(),Uc=a("p"),OT=i("Finally, this model supports inherent JAX features such as:"),IT=h(),St=a("ul"),Rc=a("li"),Fi=a("a"),NT=i("Just-In-Time (JIT) compilation"),LT=h(),Hc=a("li"),zi=a("a"),DT=i("Automatic Differentiation"),GT=h(),Qc=a("li"),Bi=a("a"),WT=i("Vectorization"),UT=h(),Vc=a("li"),qi=a("a"),RT=i("Parallelization"),HT=h(),bt=a("div"),y(ji.$$.fragment),QT=h(),Qo=a("p"),VT=i("The "),Jc=a("code"),JT=i("FlaxBartDecoderPreTrainedModel"),KT=i(" forward method, overrides the "),Kc=a("code"),XT=i("__call__"),ZT=i(" special method."),YT=h(),y(ya.$$.fragment),ew=h(),y(va.$$.fragment),this.h()},l(o){const _=a2('[data-svelte="svelte-1phssyn"]',document.head);l=s(_,"META",{name:!0,content:!0}),_.forEach(t),k=m(o),f=s(o,"H1",{class:!0});var Ci=r(f);p=s(Ci,"A",{id:!0,class:!0,href:!0});var Xc=r(p);g=s(Xc,"SPAN",{});var Zc=r(g);v(n.$$.fragment,Zc),Zc.forEach(t),Xc.forEach(t),c=m(Ci),B=s(Ci,"SPAN",{});var Yc=r(B);ce=d(Yc,"BART"),Yc.forEach(t),Ci.forEach(t),W=m(o),I=s(o,"P",{});var Ta=r(I);he=s(Ta,"STRONG",{});var ep=r(he);Qe=d(ep,"DISCLAIMER:"),ep.forEach(t),j=d(Ta," If you see something strange, file a "),ve=s(Ta,"A",{href:!0,rel:!0});var tp=r(ve);Te=d(tp,"Github Issue"),tp.forEach(t),kt=d(Ta,` and assign
@patrickvonplaten`),Ta.forEach(t),rt=m(o),U=s(o,"H2",{class:!0});var Ei=r(U);me=s(Ei,"A",{id:!0,class:!0,href:!0});var op=r(me);Ve=s(op,"SPAN",{});var np=r(Ve);v(ee.$$.fragment,np),np.forEach(t),op.forEach(t),yt=m(Ei),Je=s(Ei,"SPAN",{});var ap=r(Je);we=d(ap,"Overview"),ap.forEach(t),Ei.forEach(t),it=m(o),fe=s(o,"P",{});var Mi=r(fe);$e=d(Mi,"The Bart model was proposed in "),xe=s(Mi,"A",{href:!0,rel:!0});var sp=r(xe);vt=d(sp,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),sp.forEach(t),Ke=d(Mi,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),Mi.forEach(t),O=m(o),N=s(o,"P",{});var rp=r(N);Tt=d(rp,"According to the abstract,"),rp.forEach(t),_e=m(o),ae=s(o,"UL",{});var Vo=r(ae);Xe=s(Vo,"LI",{});var ip=r(Xe);Fe=d(ip,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),ip.forEach(t),wt=m(Vo),Ze=s(Vo,"LI",{});var dp=r(Ze);R=d(dp,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),dp.forEach(t),$t=m(Vo),pe=s(Vo,"LI",{});var lp=r(pe);xt=d(lp,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),lp.forEach(t),Vo.forEach(t),dt=m(o),se=s(o,"P",{});var cp=r(se);Ft=d(cp,"Tips:"),cp.forEach(t),lt=m(o),Z=s(o,"UL",{});var pp=r(Z);Ye=s(pp,"LI",{});var up=r(Ye);ze=d(up,`BART is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),up.forEach(t),pp.forEach(t),ct=m(o),Y=s(o,"P",{});var Jo=r(Y);H=d(Jo,"This model was contributed by "),Be=s(Jo,"A",{href:!0,rel:!0});var hp=r(Be);te=d(hp,"sshleifer"),hp.forEach(t),zt=d(Jo,". The Authors\u2019 code can be found "),qe=s(Jo,"A",{href:!0,rel:!0});var mp=r(qe);z=d(mp,"here"),mp.forEach(t),C=d(Jo,"."),Jo.forEach(t),Nt=m(o),oe=s(o,"H3",{class:!0});var Ai=r(oe);Ie=s(Ai,"A",{id:!0,class:!0,href:!0});var fp=r(Ie);Bt=s(fp,"SPAN",{});var _p=r(Bt);v(E.$$.fragment,_p),_p.forEach(t),fp.forEach(t),ro=m(Ai),qt=s(Ai,"SPAN",{});var gp=r(qt);io=d(gp,"Examples"),gp.forEach(t),Ai.forEach(t),Lt=m(o),ge=s(o,"UL",{});var Ko=r(ge);Q=s(Ko,"LI",{});var Pi=r(Q);je=d(Pi,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),et=s(Pi,"A",{href:!0,rel:!0});var bp=r(et);lo=d(bp,"examples/pytorch/summarization/"),bp.forEach(t),Ce=d(Pi,"."),Pi.forEach(t),co=m(Ko),ue=s(Ko,"LI",{});var Ot=r(ue);jt=d(Ot,"An example of how to train "),pt=s(Ot,"A",{href:!0});var kp=r(pt);tt=d(kp,"BartForConditionalGeneration"),kp.forEach(t),po=d(Ot," with a Hugging Face "),Zd=s(Ot,"CODE",{});var yp=r(Zd);jh=d(yp,"datasets"),yp.forEach(t),Ch=d(Ot,`
object can be found in this `),Na=s(Ot,"A",{href:!0,rel:!0});var vp=r(Na);Eh=d(vp,"forum discussion"),vp.forEach(t),Mh=d(Ot,"."),Ot.forEach(t),Ah=m(Ko),Xo=s(Ko,"LI",{});var wa=r(Xo);La=s(wa,"A",{href:!0,rel:!0});var Tp=r(La);Ph=d(Tp,"Distilled checkpoints"),Tp.forEach(t),Sh=d(wa," are described in this "),Da=s(wa,"A",{href:!0,rel:!0});var wp=r(Da);Oh=d(wp,"paper"),wp.forEach(t),Ih=d(wa,"."),wa.forEach(t),Ko.forEach(t),qp=m(o),uo=s(o,"H2",{class:!0});var Si=r(uo);Zo=s(Si,"A",{id:!0,class:!0,href:!0});var $p=r(Zo);Yd=s($p,"SPAN",{});var xp=r(Yd);v(Ga.$$.fragment,xp),xp.forEach(t),$p.forEach(t),Nh=m(Si),el=s(Si,"SPAN",{});var Fp=r(el);Lh=d(Fp,"Implementation Notes"),Fp.forEach(t),Si.forEach(t),jp=m(o),Ne=s(o,"UL",{});var st=r(Ne);Ct=s(st,"LI",{});var It=r(Ct);Dh=d(It,"Bart doesn\u2019t use "),tl=s(It,"CODE",{});var zp=r(tl);Gh=d(zp,"token_type_ids"),zp.forEach(t),Wh=d(It," for sequence classification. Use "),Ui=s(It,"A",{href:!0});var iw=r(Ui);Uh=d(iw,"BartTokenizer"),iw.forEach(t),Rh=d(It,` or
`),Ri=s(It,"A",{href:!0});var dw=r(Ri);Hh=d(dw,"encode()"),dw.forEach(t),Qh=d(It," to get the proper splitting."),It.forEach(t),Vh=m(st),ho=s(st,"LI",{});var Cd=r(ho);Jh=d(Cd,"The forward pass of "),Hi=s(Cd,"A",{href:!0});var lw=r(Hi);Kh=d(lw,"BartModel"),lw.forEach(t),Xh=d(Cd," will create the "),ol=s(Cd,"CODE",{});var cw=r(ol);Zh=d(cw,"decoder_input_ids"),cw.forEach(t),Yh=d(Cd,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),Cd.forEach(t),em=m(st),mo=s(st,"LI",{});var Ed=r(mo);tm=d(Ed,`Model predictions are intended to be identical to the original implementation when
`),nl=s(Ed,"CODE",{});var pw=r(nl);om=d(pw,"forced_bos_token_id=0"),pw.forEach(t),nm=d(Ed,`. This only works, however, if the string you pass to
`),al=s(Ed,"CODE",{});var uw=r(al);am=d(uw,"fairseq.encode"),uw.forEach(t),sm=d(Ed," starts with a space."),Ed.forEach(t),rm=m(st),Qi=s(st,"LI",{});var tw=r(Qi);Vi=s(tw,"A",{href:!0});var hw=r(Vi);im=d(hw,"generate()"),hw.forEach(t),dm=d(tw,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),tw.forEach(t),lm=m(st),fo=s(st,"LI",{});var Md=r(fo);cm=d(Md,"Models that load the "),sl=s(Md,"EM",{});var mw=r(sl);pm=d(mw,"facebook/bart-large-cnn"),mw.forEach(t),um=d(Md," weights will not have a "),rl=s(Md,"CODE",{});var fw=r(rl);hm=d(fw,"mask_token_id"),fw.forEach(t),mm=d(Md,`, or be able to perform
mask-filling tasks.`),Md.forEach(t),st.forEach(t),Cp=m(o),_o=s(o,"H2",{class:!0});var ku=r(_o);Yo=s(ku,"A",{id:!0,class:!0,href:!0});var _w=r(Yo);il=s(_w,"SPAN",{});var gw=r(il);v(Wa.$$.fragment,gw),gw.forEach(t),_w.forEach(t),fm=m(ku),dl=s(ku,"SPAN",{});var bw=r(dl);_m=d(bw,"Mask Filling"),bw.forEach(t),ku.forEach(t),Ep=m(o),Dt=s(o,"P",{});var Ad=r(Dt);gm=d(Ad,"The "),ll=s(Ad,"CODE",{});var kw=r(ll);bm=d(kw,"facebook/bart-base"),kw.forEach(t),km=d(Ad," and "),cl=s(Ad,"CODE",{});var yw=r(cl);ym=d(yw,"facebook/bart-large"),yw.forEach(t),vm=d(Ad," checkpoints can be used to fill multi-token masks."),Ad.forEach(t),Mp=m(o),v(Ua.$$.fragment,o),Ap=m(o),go=s(o,"H2",{class:!0});var yu=r(go);en=s(yu,"A",{id:!0,class:!0,href:!0});var vw=r(en);pl=s(vw,"SPAN",{});var Tw=r(pl);v(Ra.$$.fragment,Tw),Tw.forEach(t),vw.forEach(t),Tm=m(yu),ul=s(yu,"SPAN",{});var ww=r(ul);wm=d(ww,"Resources"),ww.forEach(t),yu.forEach(t),Pp=m(o),Ji=s(o,"P",{});var $w=r(Ji);$m=d($w,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with BART. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),$w.forEach(t),Sp=m(o),v(Ha.$$.fragment,o),Op=m(o),re=s(o,"UL",{});var Ue=r(re);Qa=s(Ue,"LI",{});var vu=r(Qa);xm=d(vu,"A blog post on "),Va=s(vu,"A",{href:!0,rel:!0});var xw=r(Va);Fm=d(xw,"Distributed Training: Train BART/T5 for Summarization using \u{1F917} Transformers and Amazon SageMaker"),xw.forEach(t),zm=d(vu,"."),vu.forEach(t),Bm=m(Ue),Ja=s(Ue,"LI",{});var Tu=r(Ja);qm=d(Tu,"A notebook on how to "),Ka=s(Tu,"A",{href:!0,rel:!0});var Fw=r(Ka);jm=d(Fw,"finetune BART for summarization with fastai using blurr"),Fw.forEach(t),Cm=d(Tu,". \u{1F30E}"),Tu.forEach(t),Em=m(Ue),Xa=s(Ue,"LI",{});var wu=r(Xa);Mm=d(wu,"A notebook on how to "),Za=s(wu,"A",{href:!0,rel:!0});var zw=r(Za);Am=d(zw,"finetune BART for summarization in two languages with Trainer class"),zw.forEach(t),Pm=d(wu,". \u{1F30E}"),wu.forEach(t),Sm=m(Ue),Gt=s(Ue,"LI",{});var Oi=r(Gt);Ki=s(Oi,"A",{href:!0});var Bw=r(Ki);Om=d(Bw,"BartForConditionalGeneration"),Bw.forEach(t),Im=d(Oi," is supported by this "),Ya=s(Oi,"A",{href:!0,rel:!0});var qw=r(Ya);Nm=d(qw,"example script"),qw.forEach(t),Lm=d(Oi," and "),es=s(Oi,"A",{href:!0,rel:!0});var jw=r(es);Dm=d(jw,"noteboook"),jw.forEach(t),Gm=d(Oi,"."),Oi.forEach(t),Wm=m(Ue),Wt=s(Ue,"LI",{});var Ii=r(Wt);Xi=s(Ii,"A",{href:!0});var Cw=r(Xi);Um=d(Cw,"TFBartForConditionalGeneration"),Cw.forEach(t),Rm=d(Ii," is supported by this "),ts=s(Ii,"A",{href:!0,rel:!0});var Ew=r(ts);Hm=d(Ew,"example script"),Ew.forEach(t),Qm=d(Ii," and "),os=s(Ii,"A",{href:!0,rel:!0});var Mw=r(os);Vm=d(Mw,"notebook"),Mw.forEach(t),Jm=d(Ii,"."),Ii.forEach(t),Km=m(Ue),tn=s(Ue,"LI",{});var Bp=r(tn);Zi=s(Bp,"A",{href:!0});var Aw=r(Zi);Xm=d(Aw,"FlaxBartForConditionalGeneration"),Aw.forEach(t),Zm=d(Bp," is supported by this "),ns=s(Bp,"A",{href:!0,rel:!0});var Pw=r(ns);Ym=d(Pw,"example script"),Pw.forEach(t),ef=d(Bp,"."),Bp.forEach(t),tf=m(Ue),Yi=s(Ue,"LI",{});var ow=r(Yi);as=s(ow,"A",{href:!0,rel:!0});var Sw=r(as);of=d(Sw,"Summarization"),Sw.forEach(t),nf=d(ow," chapter of the \u{1F917} Hugging Face course."),ow.forEach(t),Ue.forEach(t),Ip=m(o),v(ss.$$.fragment,o),Np=m(o),ut=s(o,"UL",{});var $a=r(ut);Ut=s($a,"LI",{});var Ni=r(Ut);ed=s(Ni,"A",{href:!0});var Ow=r(ed);af=d(Ow,"BartForConditionalGeneration"),Ow.forEach(t),sf=d(Ni," is supported by this "),rs=s(Ni,"A",{href:!0,rel:!0});var Iw=r(rs);rf=d(Iw,"example script"),Iw.forEach(t),df=d(Ni," and "),is=s(Ni,"A",{href:!0,rel:!0});var Nw=r(is);lf=d(Nw,"notebook"),Nw.forEach(t),cf=d(Ni,"."),Ni.forEach(t),pf=m($a),Rt=s($a,"LI",{});var Li=r(Rt);td=s(Li,"A",{href:!0});var Lw=r(td);uf=d(Lw,"TFBartForConditionalGeneration"),Lw.forEach(t),hf=d(Li," is supported by this "),ds=s(Li,"A",{href:!0,rel:!0});var Dw=r(ds);mf=d(Dw,"example script"),Dw.forEach(t),ff=d(Li," and "),ls=s(Li,"A",{href:!0,rel:!0});var Gw=r(ls);_f=d(Gw,"notebook"),Gw.forEach(t),gf=d(Li,"."),Li.forEach(t),bf=m($a),Ht=s($a,"LI",{});var Di=r(Ht);od=s(Di,"A",{href:!0});var Ww=r(od);kf=d(Ww,"FlaxBartForConditionalGeneration"),Ww.forEach(t),yf=d(Di," is supported by this "),cs=s(Di,"A",{href:!0,rel:!0});var Uw=r(cs);vf=d(Uw,"example script"),Uw.forEach(t),Tf=d(Di," and "),ps=s(Di,"A",{href:!0,rel:!0});var Rw=r(ps);wf=d(Rw,"notebook"),Rw.forEach(t),$f=d(Di,"."),Di.forEach(t),xf=m($a),nd=s($a,"LI",{});var nw=r(nd);us=s(nw,"A",{href:!0,rel:!0});var Hw=r(us);Ff=d(Hw,"Masked language modeling"),Hw.forEach(t),zf=d(nw," chapter of the \u{1F917} Hugging Face Course."),nw.forEach(t),$a.forEach(t),Lp=m(o),v(hs.$$.fragment,o),Dp=m(o),Qt=s(o,"UL",{});var Pd=r(Qt);ms=s(Pd,"LI",{});var $u=r(ms);Bf=d($u,"A notebook on how to "),fs=s($u,"A",{href:!0,rel:!0});var Qw=r(fs);qf=d(Qw,"finetune mBART using Seq2SeqTrainer for Hindi to English translation"),Qw.forEach(t),jf=d($u,". \u{1F30E}"),$u.forEach(t),Cf=m(Pd),Vt=s(Pd,"LI",{});var Gi=r(Vt);ad=s(Gi,"A",{href:!0});var Vw=r(ad);Ef=d(Vw,"BartForConditionalGeneration"),Vw.forEach(t),Mf=d(Gi," is supported by this "),_s=s(Gi,"A",{href:!0,rel:!0});var Jw=r(_s);Af=d(Jw,"example script"),Jw.forEach(t),Pf=d(Gi," and "),gs=s(Gi,"A",{href:!0,rel:!0});var Kw=r(gs);Sf=d(Kw,"notebook"),Kw.forEach(t),Of=d(Gi,"."),Gi.forEach(t),If=m(Pd),Jt=s(Pd,"LI",{});var Wi=r(Jt);sd=s(Wi,"A",{href:!0});var Xw=r(sd);Nf=d(Xw,"TFBartForConditionalGeneration"),Xw.forEach(t),Lf=d(Wi," is supported by this "),bs=s(Wi,"A",{href:!0,rel:!0});var Zw=r(bs);Df=d(Zw,"example script"),Zw.forEach(t),Gf=d(Wi," and "),ks=s(Wi,"A",{href:!0,rel:!0});var Yw=r(ks);Wf=d(Yw,"notebook"),Yw.forEach(t),Uf=d(Wi,"."),Wi.forEach(t),Pd.forEach(t),Gp=m(o),bo=s(o,"H2",{class:!0});var xu=r(bo);on=s(xu,"A",{id:!0,class:!0,href:!0});var e1=r(on);hl=s(e1,"SPAN",{});var t1=r(hl);v(ys.$$.fragment,t1),t1.forEach(t),e1.forEach(t),Rf=m(xu),ml=s(xu,"SPAN",{});var o1=r(ml);Hf=d(o1,"BartConfig"),o1.forEach(t),xu.forEach(t),Wp=m(o),ot=s(o,"DIV",{class:!0});var xa=r(ot);v(vs.$$.fragment,xa),Qf=m(xa),ko=s(xa,"P",{});var Sd=r(ko);Vf=d(Sd,"This is the configuration class to store the configuration of a "),rd=s(Sd,"A",{href:!0});var n1=r(rd);Jf=d(n1,"BartModel"),n1.forEach(t),Kf=d(Sd,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Ts=s(Sd,"A",{href:!0,rel:!0});var a1=r(Ts);Xf=d(a1,"facebook/bart-large"),a1.forEach(t),Zf=d(Sd," architecture."),Sd.forEach(t),Yf=m(xa),yo=s(xa,"P",{});var Od=r(yo);e_=d(Od,"Configuration objects inherit from "),id=s(Od,"A",{href:!0});var s1=r(id);t_=d(s1,"PretrainedConfig"),s1.forEach(t),o_=d(Od,` and can be used to control the model outputs. Read the
documentation from `),dd=s(Od,"A",{href:!0});var r1=r(dd);n_=d(r1,"PretrainedConfig"),r1.forEach(t),a_=d(Od," for more information."),Od.forEach(t),s_=m(xa),v(nn.$$.fragment,xa),xa.forEach(t),Up=m(o),vo=s(o,"H2",{class:!0});var Fu=r(vo);an=s(Fu,"A",{id:!0,class:!0,href:!0});var i1=r(an);fl=s(i1,"SPAN",{});var d1=r(fl);v(ws.$$.fragment,d1),d1.forEach(t),i1.forEach(t),r_=m(Fu),_l=s(Fu,"SPAN",{});var l1=r(_l);i_=d(l1,"BartTokenizer"),l1.forEach(t),Fu.forEach(t),Rp=m(o),S=s(o,"DIV",{class:!0});var G=r(S);v($s.$$.fragment,G),d_=m(G),gl=s(G,"P",{});var c1=r(gl);l_=d(c1,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),c1.forEach(t),c_=m(G),bl=s(G,"P",{});var p1=r(bl);p_=d(p1,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),p1.forEach(t),u_=m(G),v(sn.$$.fragment,G),h_=m(G),xs=s(G,"P",{});var zu=r(xs);m_=d(zu,"You can get around that behavior by passing "),kl=s(zu,"CODE",{});var u1=r(kl);f_=d(u1,"add_prefix_space=True"),u1.forEach(t),__=d(zu,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),zu.forEach(t),g_=m(G),v(rn.$$.fragment,G),b_=m(G),Fs=s(G,"P",{});var Bu=r(Fs);k_=d(Bu,"This tokenizer inherits from "),ld=s(Bu,"A",{href:!0});var h1=r(ld);y_=d(h1,"PreTrainedTokenizer"),h1.forEach(t),v_=d(Bu,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bu.forEach(t),T_=m(G),Kt=s(G,"DIV",{class:!0});var Id=r(Kt);v(zs.$$.fragment,Id),w_=m(Id),yl=s(Id,"P",{});var m1=r(yl);$_=d(m1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),m1.forEach(t),x_=m(Id),Bs=s(Id,"UL",{});var qu=r(Bs);cd=s(qu,"LI",{});var aw=r(cd);F_=d(aw,"single sequence: "),vl=s(aw,"CODE",{});var f1=r(vl);z_=d(f1,"<s> X </s>"),f1.forEach(t),aw.forEach(t),B_=m(qu),pd=s(qu,"LI",{});var sw=r(pd);q_=d(sw,"pair of sequences: "),Tl=s(sw,"CODE",{});var _1=r(Tl);j_=d(_1,"<s> A </s></s> B </s>"),_1.forEach(t),sw.forEach(t),qu.forEach(t),Id.forEach(t),C_=m(G),dn=s(G,"DIV",{class:!0});var ju=r(dn);v(qs.$$.fragment,ju),E_=m(ju),wl=s(ju,"P",{});var g1=r(wl);M_=d(g1,"Converts a sequence of tokens (string) in a single string."),g1.forEach(t),ju.forEach(t),A_=m(G),ln=s(G,"DIV",{class:!0});var Cu=r(ln);v(js.$$.fragment,Cu),P_=m(Cu),$l=s(Cu,"P",{});var b1=r($l);S_=d(b1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),b1.forEach(t),Cu.forEach(t),O_=m(G),cn=s(G,"DIV",{class:!0});var Eu=r(cn);v(Cs.$$.fragment,Eu),I_=m(Eu),Es=s(Eu,"P",{});var Mu=r(Es);N_=d(Mu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xl=s(Mu,"CODE",{});var k1=r(xl);L_=d(k1,"prepare_for_model"),k1.forEach(t),D_=d(Mu," method."),Mu.forEach(t),Eu.forEach(t),G.forEach(t),Hp=m(o),To=s(o,"H2",{class:!0});var Au=r(To);pn=s(Au,"A",{id:!0,class:!0,href:!0});var y1=r(pn);Fl=s(y1,"SPAN",{});var v1=r(Fl);v(Ms.$$.fragment,v1),v1.forEach(t),y1.forEach(t),G_=m(Au),zl=s(Au,"SPAN",{});var T1=r(zl);W_=d(T1,"BartTokenizerFast"),T1.forEach(t),Au.forEach(t),Qp=m(o),V=s(o,"DIV",{class:!0});var be=r(V);v(As.$$.fragment,be),U_=m(be),Ps=s(be,"P",{});var Pu=r(Ps);R_=d(Pu,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Bl=s(Pu,"EM",{});var w1=r(Bl);H_=d(w1,"tokenizers"),w1.forEach(t),Q_=d(Pu,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Pu.forEach(t),V_=m(be),ql=s(be,"P",{});var $1=r(ql);J_=d($1,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),$1.forEach(t),K_=m(be),v(un.$$.fragment,be),X_=m(be),Ss=s(be,"P",{});var Su=r(Ss);Z_=d(Su,"You can get around that behavior by passing "),jl=s(Su,"CODE",{});var x1=r(jl);Y_=d(x1,"add_prefix_space=True"),x1.forEach(t),eg=d(Su,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Su.forEach(t),tg=m(be),v(hn.$$.fragment,be),og=m(be),Os=s(be,"P",{});var Ou=r(Os);ng=d(Ou,"This tokenizer inherits from "),ud=s(Ou,"A",{href:!0});var F1=r(ud);ag=d(F1,"PreTrainedTokenizerFast"),F1.forEach(t),sg=d(Ou,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ou.forEach(t),rg=m(be),mn=s(be,"DIV",{class:!0});var Iu=r(mn);v(Is.$$.fragment,Iu),ig=m(Iu),Cl=s(Iu,"P",{});var z1=r(Cl);dg=d(z1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),z1.forEach(t),Iu.forEach(t),be.forEach(t),Vp=m(o),wo=s(o,"H2",{class:!0});var Nu=r(wo);fn=s(Nu,"A",{id:!0,class:!0,href:!0});var B1=r(fn);El=s(B1,"SPAN",{});var q1=r(El);v(Ns.$$.fragment,q1),q1.forEach(t),B1.forEach(t),lg=m(Nu),Ml=s(Nu,"SPAN",{});var j1=r(Ml);cg=d(j1,"BartModel"),j1.forEach(t),Nu.forEach(t),Jp=m(o),nt=s(o,"DIV",{class:!0});var Fa=r(nt);v(Ls.$$.fragment,Fa),pg=m(Fa),Ds=s(Fa,"P",{});var Lu=r(Ds);ug=d(Lu,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),hd=s(Lu,"A",{href:!0});var C1=r(hd);hg=d(C1,"PreTrainedModel"),C1.forEach(t),mg=d(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),fg=m(Fa),Gs=s(Fa,"P",{});var Du=r(Gs);_g=d(Du,"This model is also a PyTorch "),Ws=s(Du,"A",{href:!0,rel:!0});var E1=r(Ws);gg=d(E1,"torch.nn.Module"),E1.forEach(t),bg=d(Du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Du.forEach(t),kg=m(Fa),ht=s(Fa,"DIV",{class:!0});var za=r(ht);v(Us.$$.fragment,za),yg=m(za),$o=s(za,"P",{});var Nd=r($o);vg=d(Nd,"The "),md=s(Nd,"A",{href:!0});var M1=r(md);Tg=d(M1,"BartModel"),M1.forEach(t),wg=d(Nd," forward method, overrides the "),Al=s(Nd,"CODE",{});var A1=r(Al);$g=d(A1,"__call__"),A1.forEach(t),xg=d(Nd," special method."),Nd.forEach(t),Fg=m(za),v(_n.$$.fragment,za),zg=m(za),v(gn.$$.fragment,za),za.forEach(t),Fa.forEach(t),Kp=m(o),xo=s(o,"H2",{class:!0});var Gu=r(xo);bn=s(Gu,"A",{id:!0,class:!0,href:!0});var P1=r(bn);Pl=s(P1,"SPAN",{});var S1=r(Pl);v(Rs.$$.fragment,S1),S1.forEach(t),P1.forEach(t),Bg=m(Gu),Sl=s(Gu,"SPAN",{});var O1=r(Sl);qg=d(O1,"BartForConditionalGeneration"),O1.forEach(t),Gu.forEach(t),Xp=m(o),at=s(o,"DIV",{class:!0});var Ba=r(at);v(Hs.$$.fragment,Ba),jg=m(Ba),Qs=s(Ba,"P",{});var Wu=r(Qs);Cg=d(Wu,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),fd=s(Wu,"A",{href:!0});var I1=r(fd);Eg=d(I1,"PreTrainedModel"),I1.forEach(t),Mg=d(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(t),Ag=m(Ba),Vs=s(Ba,"P",{});var Uu=r(Vs);Pg=d(Uu,"This model is also a PyTorch "),Js=s(Uu,"A",{href:!0,rel:!0});var N1=r(Js);Sg=d(N1,"torch.nn.Module"),N1.forEach(t),Og=d(Uu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uu.forEach(t),Ig=m(Ba),Le=s(Ba,"DIV",{class:!0});var Xt=r(Le);v(Ks.$$.fragment,Xt),Ng=m(Xt),Fo=s(Xt,"P",{});var Ld=r(Fo);Lg=d(Ld,"The "),_d=s(Ld,"A",{href:!0});var L1=r(_d);Dg=d(L1,"BartForConditionalGeneration"),L1.forEach(t),Gg=d(Ld," forward method, overrides the "),Ol=s(Ld,"CODE",{});var D1=r(Ol);Wg=d(D1,"__call__"),D1.forEach(t),Ug=d(Ld," special method."),Ld.forEach(t),Rg=m(Xt),v(kn.$$.fragment,Xt),Hg=m(Xt),v(yn.$$.fragment,Xt),Qg=m(Xt),v(vn.$$.fragment,Xt),Xt.forEach(t),Ba.forEach(t),Zp=m(o),zo=s(o,"H2",{class:!0});var Ru=r(zo);Tn=s(Ru,"A",{id:!0,class:!0,href:!0});var G1=r(Tn);Il=s(G1,"SPAN",{});var W1=r(Il);v(Xs.$$.fragment,W1),W1.forEach(t),G1.forEach(t),Vg=m(Ru),Nl=s(Ru,"SPAN",{});var U1=r(Nl);Jg=d(U1,"BartForSequenceClassification"),U1.forEach(t),Ru.forEach(t),Yp=m(o),Ee=s(o,"DIV",{class:!0});var Zt=r(Ee);v(Zs.$$.fragment,Zt),Kg=m(Zt),Ll=s(Zt,"P",{});var R1=r(Ll);Xg=d(R1,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),R1.forEach(t),Zg=m(Zt),Ys=s(Zt,"P",{});var Hu=r(Ys);Yg=d(Hu,"This model inherits from "),gd=s(Hu,"A",{href:!0});var H1=r(gd);eb=d(H1,"PreTrainedModel"),H1.forEach(t),tb=d(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),ob=m(Zt),er=s(Zt,"P",{});var Qu=r(er);nb=d(Qu,"This model is also a PyTorch "),tr=s(Qu,"A",{href:!0,rel:!0});var Q1=r(tr);ab=d(Q1,"torch.nn.Module"),Q1.forEach(t),sb=d(Qu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qu.forEach(t),rb=m(Zt),ie=s(Zt,"DIV",{class:!0});var Re=r(ie);v(or.$$.fragment,Re),ib=m(Re),Bo=s(Re,"P",{});var Dd=r(Bo);db=d(Dd,"The "),bd=s(Dd,"A",{href:!0});var V1=r(bd);lb=d(V1,"BartForSequenceClassification"),V1.forEach(t),cb=d(Dd," forward method, overrides the "),Dl=s(Dd,"CODE",{});var J1=r(Dl);pb=d(J1,"__call__"),J1.forEach(t),ub=d(Dd," special method."),Dd.forEach(t),hb=m(Re),v(wn.$$.fragment,Re),mb=m(Re),v($n.$$.fragment,Re),fb=m(Re),v(xn.$$.fragment,Re),_b=m(Re),v(Fn.$$.fragment,Re),gb=m(Re),v(zn.$$.fragment,Re),Re.forEach(t),Zt.forEach(t),eu=m(o),qo=s(o,"H2",{class:!0});var Vu=r(qo);Bn=s(Vu,"A",{id:!0,class:!0,href:!0});var K1=r(Bn);Gl=s(K1,"SPAN",{});var X1=r(Gl);v(nr.$$.fragment,X1),X1.forEach(t),K1.forEach(t),bb=m(Vu),Wl=s(Vu,"SPAN",{});var Z1=r(Wl);kb=d(Z1,"BartForQuestionAnswering"),Z1.forEach(t),Vu.forEach(t),tu=m(o),Me=s(o,"DIV",{class:!0});var Yt=r(Me);v(ar.$$.fragment,Yt),yb=m(Yt),jo=s(Yt,"P",{});var Gd=r(jo);vb=d(Gd,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ul=s(Gd,"CODE",{});var Y1=r(Ul);Tb=d(Y1,"span start logits"),Y1.forEach(t),wb=d(Gd," and "),Rl=s(Gd,"CODE",{});var e$=r(Rl);$b=d(e$,"span end logits"),e$.forEach(t),xb=d(Gd,")."),Gd.forEach(t),Fb=m(Yt),sr=s(Yt,"P",{});var Ju=r(sr);zb=d(Ju,"This model inherits from "),kd=s(Ju,"A",{href:!0});var t$=r(kd);Bb=d(t$,"PreTrainedModel"),t$.forEach(t),qb=d(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju.forEach(t),jb=m(Yt),rr=s(Yt,"P",{});var Ku=r(rr);Cb=d(Ku,"This model is also a PyTorch "),ir=s(Ku,"A",{href:!0,rel:!0});var o$=r(ir);Eb=d(o$,"torch.nn.Module"),o$.forEach(t),Mb=d(Ku,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ku.forEach(t),Ab=m(Yt),De=s(Yt,"DIV",{class:!0});var eo=r(De);v(dr.$$.fragment,eo),Pb=m(eo),Co=s(eo,"P",{});var Wd=r(Co);Sb=d(Wd,"The "),yd=s(Wd,"A",{href:!0});var n$=r(yd);Ob=d(n$,"BartForQuestionAnswering"),n$.forEach(t),Ib=d(Wd," forward method, overrides the "),Hl=s(Wd,"CODE",{});var a$=r(Hl);Nb=d(a$,"__call__"),a$.forEach(t),Lb=d(Wd," special method."),Wd.forEach(t),Db=m(eo),v(qn.$$.fragment,eo),Gb=m(eo),v(jn.$$.fragment,eo),Wb=m(eo),v(Cn.$$.fragment,eo),eo.forEach(t),Yt.forEach(t),ou=m(o),Eo=s(o,"H2",{class:!0});var Xu=r(Eo);En=s(Xu,"A",{id:!0,class:!0,href:!0});var s$=r(En);Ql=s(s$,"SPAN",{});var r$=r(Ql);v(lr.$$.fragment,r$),r$.forEach(t),s$.forEach(t),Ub=m(Xu),Vl=s(Xu,"SPAN",{});var i$=r(Vl);Rb=d(i$,"BartForCausalLM"),i$.forEach(t),Xu.forEach(t),nu=m(o),Ae=s(o,"DIV",{class:!0});var to=r(Ae);v(cr.$$.fragment,to),Hb=m(to),Jl=s(to,"P",{});var d$=r(Jl);Qb=d(d$,"BART decoder with with a language modeling head on top (linear layer with weights tied to the input embeddings)."),d$.forEach(t),Vb=m(to),pr=s(to,"P",{});var Zu=r(pr);Jb=d(Zu,"This model inherits from "),vd=s(Zu,"A",{href:!0});var l$=r(vd);Kb=d(l$,"PreTrainedModel"),l$.forEach(t),Xb=d(Zu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zu.forEach(t),Zb=m(to),ur=s(to,"P",{});var Yu=r(ur);Yb=d(Yu,"This model is also a PyTorch "),hr=s(Yu,"A",{href:!0,rel:!0});var c$=r(hr);ek=d(c$,"torch.nn.Module"),c$.forEach(t),tk=d(Yu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yu.forEach(t),ok=m(to),Mn=s(to,"DIV",{class:!0});var eh=r(Mn);v(mr.$$.fragment,eh),nk=m(eh),v(An.$$.fragment,eh),eh.forEach(t),to.forEach(t),au=m(o),Mo=s(o,"H2",{class:!0});var th=r(Mo);Pn=s(th,"A",{id:!0,class:!0,href:!0});var p$=r(Pn);Kl=s(p$,"SPAN",{});var u$=r(Kl);v(fr.$$.fragment,u$),u$.forEach(t),p$.forEach(t),ak=m(th),Xl=s(th,"SPAN",{});var h$=r(Xl);sk=d(h$,"TFBartModel"),h$.forEach(t),th.forEach(t),su=m(o),Pe=s(o,"DIV",{class:!0});var oo=r(Pe);v(_r.$$.fragment,oo),rk=m(oo),gr=s(oo,"P",{});var oh=r(gr);ik=d(oh,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Td=s(oh,"A",{href:!0});var m$=r(Td);dk=d(m$,"TFPreTrainedModel"),m$.forEach(t),lk=d(oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oh.forEach(t),ck=m(oo),br=s(oo,"P",{});var nh=r(br);pk=d(nh,"This model is also a "),kr=s(nh,"A",{href:!0,rel:!0});var f$=r(kr);uk=d(f$,"tf.keras.Model"),f$.forEach(t),hk=d(nh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nh.forEach(t),mk=m(oo),v(Sn.$$.fragment,oo),fk=m(oo),mt=s(oo,"DIV",{class:!0});var qa=r(mt);v(yr.$$.fragment,qa),_k=m(qa),Ao=s(qa,"P",{});var Ud=r(Ao);gk=d(Ud,"The "),wd=s(Ud,"A",{href:!0});var _$=r(wd);bk=d(_$,"TFBartModel"),_$.forEach(t),kk=d(Ud," forward method, overrides the "),Zl=s(Ud,"CODE",{});var g$=r(Zl);yk=d(g$,"__call__"),g$.forEach(t),vk=d(Ud," special method."),Ud.forEach(t),Tk=m(qa),v(On.$$.fragment,qa),wk=m(qa),v(In.$$.fragment,qa),qa.forEach(t),oo.forEach(t),ru=m(o),Po=s(o,"H2",{class:!0});var ah=r(Po);Nn=s(ah,"A",{id:!0,class:!0,href:!0});var b$=r(Nn);Yl=s(b$,"SPAN",{});var k$=r(Yl);v(vr.$$.fragment,k$),k$.forEach(t),b$.forEach(t),$k=m(ah),ec=s(ah,"SPAN",{});var y$=r(ec);xk=d(y$,"TFBartForConditionalGeneration"),y$.forEach(t),ah.forEach(t),iu=m(o),Se=s(o,"DIV",{class:!0});var no=r(Se);v(Tr.$$.fragment,no),Fk=m(no),wr=s(no,"P",{});var sh=r(wr);zk=d(sh,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),$d=s(sh,"A",{href:!0});var v$=r($d);Bk=d(v$,"TFPreTrainedModel"),v$.forEach(t),qk=d(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(t),jk=m(no),$r=s(no,"P",{});var rh=r($r);Ck=d(rh,"This model is also a "),xr=s(rh,"A",{href:!0,rel:!0});var T$=r(xr);Ek=d(T$,"tf.keras.Model"),T$.forEach(t),Mk=d(rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rh.forEach(t),Ak=m(no),v(Ln.$$.fragment,no),Pk=m(no),Ge=s(no,"DIV",{class:!0});var ao=r(Ge);v(Fr.$$.fragment,ao),Sk=m(ao),So=s(ao,"P",{});var Rd=r(So);Ok=d(Rd,"The "),xd=s(Rd,"A",{href:!0});var w$=r(xd);Ik=d(w$,"TFBartForConditionalGeneration"),w$.forEach(t),Nk=d(Rd," forward method, overrides the "),tc=s(Rd,"CODE",{});var $$=r(tc);Lk=d($$,"__call__"),$$.forEach(t),Dk=d(Rd," special method."),Rd.forEach(t),Gk=m(ao),v(Dn.$$.fragment,ao),Wk=m(ao),v(Gn.$$.fragment,ao),Uk=m(ao),v(Wn.$$.fragment,ao),ao.forEach(t),no.forEach(t),du=m(o),Oo=s(o,"H2",{class:!0});var ih=r(Oo);Un=s(ih,"A",{id:!0,class:!0,href:!0});var x$=r(Un);oc=s(x$,"SPAN",{});var F$=r(oc);v(zr.$$.fragment,F$),F$.forEach(t),x$.forEach(t),Rk=m(ih),nc=s(ih,"SPAN",{});var z$=r(nc);Hk=d(z$,"FlaxBartModel"),z$.forEach(t),ih.forEach(t),lu=m(o),J=s(o,"DIV",{class:!0});var ke=r(J);v(Br.$$.fragment,ke),Qk=m(ke),qr=s(ke,"P",{});var dh=r(qr);Vk=d(dh,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Fd=s(dh,"A",{href:!0});var B$=r(Fd);Jk=d(B$,"FlaxPreTrainedModel"),B$.forEach(t),Kk=d(dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dh.forEach(t),Xk=m(ke),jr=s(ke,"P",{});var lh=r(jr);Zk=d(lh,`This model is also a Flax Linen
`),Cr=s(lh,"A",{href:!0,rel:!0});var q$=r(Cr);Yk=d(q$,"flax.nn.Module"),q$.forEach(t),ey=d(lh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lh.forEach(t),ty=m(ke),ac=s(ke,"P",{});var j$=r(ac);oy=d(j$,"Finally, this model supports inherent JAX features such as:"),j$.forEach(t),ny=m(ke),Et=s(ke,"UL",{});var ja=r(Et);sc=s(ja,"LI",{});var C$=r(sc);Er=s(C$,"A",{href:!0,rel:!0});var E$=r(Er);ay=d(E$,"Just-In-Time (JIT) compilation"),E$.forEach(t),C$.forEach(t),sy=m(ja),rc=s(ja,"LI",{});var M$=r(rc);Mr=s(M$,"A",{href:!0,rel:!0});var A$=r(Mr);ry=d(A$,"Automatic Differentiation"),A$.forEach(t),M$.forEach(t),iy=m(ja),ic=s(ja,"LI",{});var P$=r(ic);Ar=s(P$,"A",{href:!0,rel:!0});var S$=r(Ar);dy=d(S$,"Vectorization"),S$.forEach(t),P$.forEach(t),ly=m(ja),dc=s(ja,"LI",{});var O$=r(dc);Pr=s(O$,"A",{href:!0,rel:!0});var I$=r(Pr);cy=d(I$,"Parallelization"),I$.forEach(t),O$.forEach(t),ja.forEach(t),py=m(ke),ft=s(ke,"DIV",{class:!0});var Ca=r(ft);v(Sr.$$.fragment,Ca),uy=m(Ca),Io=s(Ca,"P",{});var Hd=r(Io);hy=d(Hd,"The "),lc=s(Hd,"CODE",{});var N$=r(lc);my=d(N$,"FlaxBartPreTrainedModel"),N$.forEach(t),fy=d(Hd," forward method, overrides the "),cc=s(Hd,"CODE",{});var L$=r(cc);_y=d(L$,"__call__"),L$.forEach(t),gy=d(Hd," special method."),Hd.forEach(t),by=m(Ca),v(Rn.$$.fragment,Ca),ky=m(Ca),v(Hn.$$.fragment,Ca),Ca.forEach(t),yy=m(ke),Qn=s(ke,"DIV",{class:!0});var ch=r(Qn);v(Or.$$.fragment,ch),vy=m(ch),v(Vn.$$.fragment,ch),ch.forEach(t),Ty=m(ke),Jn=s(ke,"DIV",{class:!0});var ph=r(Jn);v(Ir.$$.fragment,ph),wy=m(ph),v(Kn.$$.fragment,ph),ph.forEach(t),ke.forEach(t),cu=m(o),No=s(o,"H2",{class:!0});var uh=r(No);Xn=s(uh,"A",{id:!0,class:!0,href:!0});var D$=r(Xn);pc=s(D$,"SPAN",{});var G$=r(pc);v(Nr.$$.fragment,G$),G$.forEach(t),D$.forEach(t),$y=m(uh),uc=s(uh,"SPAN",{});var W$=r(uc);xy=d(W$,"FlaxBartForConditionalGeneration"),W$.forEach(t),uh.forEach(t),pu=m(o),K=s(o,"DIV",{class:!0});var ye=r(K);v(Lr.$$.fragment,ye),Fy=m(ye),Dr=s(ye,"P",{});var hh=r(Dr);zy=d(hh,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zd=s(hh,"A",{href:!0});var U$=r(zd);By=d(U$,"FlaxPreTrainedModel"),U$.forEach(t),qy=d(hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh.forEach(t),jy=m(ye),Gr=s(ye,"P",{});var mh=r(Gr);Cy=d(mh,`This model is also a Flax Linen
`),Wr=s(mh,"A",{href:!0,rel:!0});var R$=r(Wr);Ey=d(R$,"flax.nn.Module"),R$.forEach(t),My=d(mh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),mh.forEach(t),Ay=m(ye),hc=s(ye,"P",{});var H$=r(hc);Py=d(H$,"Finally, this model supports inherent JAX features such as:"),H$.forEach(t),Sy=m(ye),Mt=s(ye,"UL",{});var Ea=r(Mt);mc=s(Ea,"LI",{});var Q$=r(mc);Ur=s(Q$,"A",{href:!0,rel:!0});var V$=r(Ur);Oy=d(V$,"Just-In-Time (JIT) compilation"),V$.forEach(t),Q$.forEach(t),Iy=m(Ea),fc=s(Ea,"LI",{});var J$=r(fc);Rr=s(J$,"A",{href:!0,rel:!0});var K$=r(Rr);Ny=d(K$,"Automatic Differentiation"),K$.forEach(t),J$.forEach(t),Ly=m(Ea),_c=s(Ea,"LI",{});var X$=r(_c);Hr=s(X$,"A",{href:!0,rel:!0});var Z$=r(Hr);Dy=d(Z$,"Vectorization"),Z$.forEach(t),X$.forEach(t),Gy=m(Ea),gc=s(Ea,"LI",{});var Y$=r(gc);Qr=s(Y$,"A",{href:!0,rel:!0});var ex=r(Qr);Wy=d(ex,"Parallelization"),ex.forEach(t),Y$.forEach(t),Ea.forEach(t),Uy=m(ye),We=s(ye,"DIV",{class:!0});var so=r(We);v(Vr.$$.fragment,so),Ry=m(so),Lo=s(so,"P",{});var Qd=r(Lo);Hy=d(Qd,"The "),bc=s(Qd,"CODE",{});var tx=r(bc);Qy=d(tx,"FlaxBartPreTrainedModel"),tx.forEach(t),Vy=d(Qd," forward method, overrides the "),kc=s(Qd,"CODE",{});var ox=r(kc);Jy=d(ox,"__call__"),ox.forEach(t),Ky=d(Qd," special method."),Qd.forEach(t),Xy=m(so),v(Zn.$$.fragment,so),Zy=m(so),v(Yn.$$.fragment,so),Yy=m(so),v(ea.$$.fragment,so),so.forEach(t),ev=m(ye),ta=s(ye,"DIV",{class:!0});var fh=r(ta);v(Jr.$$.fragment,fh),tv=m(fh),v(oa.$$.fragment,fh),fh.forEach(t),ov=m(ye),na=s(ye,"DIV",{class:!0});var _h=r(na);v(Kr.$$.fragment,_h),nv=m(_h),v(aa.$$.fragment,_h),_h.forEach(t),ye.forEach(t),uu=m(o),Do=s(o,"H2",{class:!0});var gh=r(Do);sa=s(gh,"A",{id:!0,class:!0,href:!0});var nx=r(sa);yc=s(nx,"SPAN",{});var ax=r(yc);v(Xr.$$.fragment,ax),ax.forEach(t),nx.forEach(t),av=m(gh),vc=s(gh,"SPAN",{});var sx=r(vc);sv=d(sx,"FlaxBartForSequenceClassification"),sx.forEach(t),gh.forEach(t),hu=m(o),L=s(o,"DIV",{class:!0});var de=r(L);v(Zr.$$.fragment,de),rv=m(de),Tc=s(de,"P",{});var rx=r(Tc);iv=d(rx,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),rx.forEach(t),dv=m(de),Yr=s(de,"P",{});var bh=r(Yr);lv=d(bh,"This model inherits from "),Bd=s(bh,"A",{href:!0});var ix=r(Bd);cv=d(ix,"FlaxPreTrainedModel"),ix.forEach(t),pv=d(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),uv=m(de),ei=s(de,"P",{});var kh=r(ei);hv=d(kh,`This model is also a Flax Linen
`),ti=s(kh,"A",{href:!0,rel:!0});var dx=r(ti);mv=d(dx,"flax.nn.Module"),dx.forEach(t),fv=d(kh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),kh.forEach(t),_v=m(de),wc=s(de,"P",{});var lx=r(wc);gv=d(lx,"Finally, this model supports inherent JAX features such as:"),lx.forEach(t),bv=m(de),At=s(de,"UL",{});var Ma=r(At);$c=s(Ma,"LI",{});var cx=r($c);oi=s(cx,"A",{href:!0,rel:!0});var px=r(oi);kv=d(px,"Just-In-Time (JIT) compilation"),px.forEach(t),cx.forEach(t),yv=m(Ma),xc=s(Ma,"LI",{});var ux=r(xc);ni=s(ux,"A",{href:!0,rel:!0});var hx=r(ni);vv=d(hx,"Automatic Differentiation"),hx.forEach(t),ux.forEach(t),Tv=m(Ma),Fc=s(Ma,"LI",{});var mx=r(Fc);ai=s(mx,"A",{href:!0,rel:!0});var fx=r(ai);wv=d(fx,"Vectorization"),fx.forEach(t),mx.forEach(t),$v=m(Ma),zc=s(Ma,"LI",{});var _x=r(zc);si=s(_x,"A",{href:!0,rel:!0});var gx=r(si);xv=d(gx,"Parallelization"),gx.forEach(t),_x.forEach(t),Ma.forEach(t),Fv=m(de),_t=s(de,"DIV",{class:!0});var Aa=r(_t);v(ri.$$.fragment,Aa),zv=m(Aa),Go=s(Aa,"P",{});var Vd=r(Go);Bv=d(Vd,"The "),Bc=s(Vd,"CODE",{});var bx=r(Bc);qv=d(bx,"FlaxBartPreTrainedModel"),bx.forEach(t),jv=d(Vd," forward method, overrides the "),qc=s(Vd,"CODE",{});var kx=r(qc);Cv=d(kx,"__call__"),kx.forEach(t),Ev=d(Vd," special method."),Vd.forEach(t),Mv=m(Aa),v(ra.$$.fragment,Aa),Av=m(Aa),v(ia.$$.fragment,Aa),Aa.forEach(t),Pv=m(de),da=s(de,"DIV",{class:!0});var yh=r(da);v(ii.$$.fragment,yh),Sv=m(yh),v(la.$$.fragment,yh),yh.forEach(t),Ov=m(de),ca=s(de,"DIV",{class:!0});var vh=r(ca);v(di.$$.fragment,vh),Iv=m(vh),v(pa.$$.fragment,vh),vh.forEach(t),de.forEach(t),mu=m(o),Wo=s(o,"H2",{class:!0});var Th=r(Wo);ua=s(Th,"A",{id:!0,class:!0,href:!0});var yx=r(ua);jc=s(yx,"SPAN",{});var vx=r(jc);v(li.$$.fragment,vx),vx.forEach(t),yx.forEach(t),Nv=m(Th),Cc=s(Th,"SPAN",{});var Tx=r(Cc);Lv=d(Tx,"FlaxBartForQuestionAnswering"),Tx.forEach(t),Th.forEach(t),fu=m(o),D=s(o,"DIV",{class:!0});var le=r(D);v(ci.$$.fragment,le),Dv=m(le),Uo=s(le,"P",{});var Jd=r(Uo);Gv=d(Jd,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ec=s(Jd,"CODE",{});var wx=r(Ec);Wv=d(wx,"span start logits"),wx.forEach(t),Uv=d(Jd," and "),Mc=s(Jd,"CODE",{});var $x=r(Mc);Rv=d($x,"span end logits"),$x.forEach(t),Hv=d(Jd,")."),Jd.forEach(t),Qv=m(le),pi=s(le,"P",{});var wh=r(pi);Vv=d(wh,"This model inherits from "),qd=s(wh,"A",{href:!0});var xx=r(qd);Jv=d(xx,"FlaxPreTrainedModel"),xx.forEach(t),Kv=d(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh.forEach(t),Xv=m(le),ui=s(le,"P",{});var $h=r(ui);Zv=d($h,`This model is also a Flax Linen
`),hi=s($h,"A",{href:!0,rel:!0});var Fx=r(hi);Yv=d(Fx,"flax.nn.Module"),Fx.forEach(t),eT=d($h,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$h.forEach(t),tT=m(le),Ac=s(le,"P",{});var zx=r(Ac);oT=d(zx,"Finally, this model supports inherent JAX features such as:"),zx.forEach(t),nT=m(le),Pt=s(le,"UL",{});var Pa=r(Pt);Pc=s(Pa,"LI",{});var Bx=r(Pc);mi=s(Bx,"A",{href:!0,rel:!0});var qx=r(mi);aT=d(qx,"Just-In-Time (JIT) compilation"),qx.forEach(t),Bx.forEach(t),sT=m(Pa),Sc=s(Pa,"LI",{});var jx=r(Sc);fi=s(jx,"A",{href:!0,rel:!0});var Cx=r(fi);rT=d(Cx,"Automatic Differentiation"),Cx.forEach(t),jx.forEach(t),iT=m(Pa),Oc=s(Pa,"LI",{});var Ex=r(Oc);_i=s(Ex,"A",{href:!0,rel:!0});var Mx=r(_i);dT=d(Mx,"Vectorization"),Mx.forEach(t),Ex.forEach(t),lT=m(Pa),Ic=s(Pa,"LI",{});var Ax=r(Ic);gi=s(Ax,"A",{href:!0,rel:!0});var Px=r(gi);cT=d(Px,"Parallelization"),Px.forEach(t),Ax.forEach(t),Pa.forEach(t),pT=m(le),gt=s(le,"DIV",{class:!0});var Sa=r(gt);v(bi.$$.fragment,Sa),uT=m(Sa),Ro=s(Sa,"P",{});var Kd=r(Ro);hT=d(Kd,"The "),Nc=s(Kd,"CODE",{});var Sx=r(Nc);mT=d(Sx,"FlaxBartPreTrainedModel"),Sx.forEach(t),fT=d(Kd," forward method, overrides the "),Lc=s(Kd,"CODE",{});var Ox=r(Lc);_T=d(Ox,"__call__"),Ox.forEach(t),gT=d(Kd," special method."),Kd.forEach(t),bT=m(Sa),v(ha.$$.fragment,Sa),kT=m(Sa),v(ma.$$.fragment,Sa),Sa.forEach(t),yT=m(le),fa=s(le,"DIV",{class:!0});var xh=r(fa);v(ki.$$.fragment,xh),vT=m(xh),v(_a.$$.fragment,xh),xh.forEach(t),TT=m(le),ga=s(le,"DIV",{class:!0});var Fh=r(ga);v(yi.$$.fragment,Fh),wT=m(Fh),v(ba.$$.fragment,Fh),Fh.forEach(t),le.forEach(t),_u=m(o),Ho=s(o,"H2",{class:!0});var zh=r(Ho);ka=s(zh,"A",{id:!0,class:!0,href:!0});var Ix=r(ka);Dc=s(Ix,"SPAN",{});var Nx=r(Dc);v(vi.$$.fragment,Nx),Nx.forEach(t),Ix.forEach(t),$T=m(zh),Gc=s(zh,"SPAN",{});var Lx=r(Gc);xT=d(Lx,"FlaxBartForCausalLM"),Lx.forEach(t),zh.forEach(t),gu=m(o),ne=s(o,"DIV",{class:!0});var He=r(ne);v(Ti.$$.fragment,He),FT=m(He),Wc=s(He,"P",{});var Dx=r(Wc);zT=d(Dx,`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),Dx.forEach(t),BT=m(He),wi=s(He,"P",{});var Bh=r(wi);qT=d(Bh,"This model inherits from "),jd=s(Bh,"A",{href:!0});var Gx=r(jd);jT=d(Gx,"FlaxPreTrainedModel"),Gx.forEach(t),CT=d(Bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bh.forEach(t),ET=m(He),$i=s(He,"P",{});var qh=r($i);MT=d(qh,`This model is also a Flax Linen
`),xi=s(qh,"A",{href:!0,rel:!0});var Wx=r(xi);AT=d(Wx,"flax.nn.Module"),Wx.forEach(t),PT=d(qh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qh.forEach(t),ST=m(He),Uc=s(He,"P",{});var Ux=r(Uc);OT=d(Ux,"Finally, this model supports inherent JAX features such as:"),Ux.forEach(t),IT=m(He),St=s(He,"UL",{});var Oa=r(St);Rc=s(Oa,"LI",{});var Rx=r(Rc);Fi=s(Rx,"A",{href:!0,rel:!0});var Hx=r(Fi);NT=d(Hx,"Just-In-Time (JIT) compilation"),Hx.forEach(t),Rx.forEach(t),LT=m(Oa),Hc=s(Oa,"LI",{});var Qx=r(Hc);zi=s(Qx,"A",{href:!0,rel:!0});var Vx=r(zi);DT=d(Vx,"Automatic Differentiation"),Vx.forEach(t),Qx.forEach(t),GT=m(Oa),Qc=s(Oa,"LI",{});var Jx=r(Qc);Bi=s(Jx,"A",{href:!0,rel:!0});var Kx=r(Bi);WT=d(Kx,"Vectorization"),Kx.forEach(t),Jx.forEach(t),UT=m(Oa),Vc=s(Oa,"LI",{});var Xx=r(Vc);qi=s(Xx,"A",{href:!0,rel:!0});var Zx=r(qi);RT=d(Zx,"Parallelization"),Zx.forEach(t),Xx.forEach(t),Oa.forEach(t),HT=m(He),bt=s(He,"DIV",{class:!0});var Ia=r(bt);v(ji.$$.fragment,Ia),QT=m(Ia),Qo=s(Ia,"P",{});var Xd=r(Qo);VT=d(Xd,"The "),Jc=s(Xd,"CODE",{});var Yx=r(Jc);JT=d(Yx,"FlaxBartDecoderPreTrainedModel"),Yx.forEach(t),KT=d(Xd," forward method, overrides the "),Kc=s(Xd,"CODE",{});var e2=r(Kc);XT=d(e2,"__call__"),e2.forEach(t),ZT=d(Xd," special method."),Xd.forEach(t),YT=m(Ia),v(ya.$$.fragment,Ia),ew=m(Ia),v(va.$$.fragment,Ia),Ia.forEach(t),He.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(Z2)),u(p,"id","bart"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#bart"),u(f,"class","relative group"),u(ve,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),u(ve,"rel","nofollow"),u(me,"id","overview"),u(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(me,"href","#overview"),u(U,"class","relative group"),u(xe,"href","https://arxiv.org/abs/1910.13461"),u(xe,"rel","nofollow"),u(Be,"href","https://huggingface.co/sshleifer"),u(Be,"rel","nofollow"),u(qe,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),u(qe,"rel","nofollow"),u(Ie,"id","examples"),u(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ie,"href","#examples"),u(oe,"class","relative group"),u(et,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),u(et,"rel","nofollow"),u(pt,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(Na,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),u(Na,"rel","nofollow"),u(La,"href","https://huggingface.co/models?search=distilbart"),u(La,"rel","nofollow"),u(Da,"href","https://arxiv.org/abs/2010.13002"),u(Da,"rel","nofollow"),u(Zo,"id","implementation-notes"),u(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zo,"href","#implementation-notes"),u(uo,"class","relative group"),u(Ui,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),u(Ri,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode"),u(Hi,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartModel"),u(Vi,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),u(Yo,"id","mask-filling"),u(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yo,"href","#mask-filling"),u(_o,"class","relative group"),u(en,"id","resources"),u(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(en,"href","#resources"),u(go,"class","relative group"),u(Va,"href","https://huggingface.co/blog/sagemaker-distributed-training-seq2seq"),u(Va,"rel","nofollow"),u(Ka,"href","https://colab.research.google.com/github/ohmeow/ohmeow_website/blob/master/_notebooks/2020-05-23-text-generation-with-blurr.ipynb"),u(Ka,"rel","nofollow"),u(Za,"href","https://colab.research.google.com/github/elsanns/xai-nlp-notebooks/blob/master/fine_tune_bart_summarization_two_langs.ipynb"),u(Za,"rel","nofollow"),u(Ki,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(Ya,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),u(Ya,"rel","nofollow"),u(es,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization.ipynb"),u(es,"rel","nofollow"),u(Xi,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),u(ts,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),u(ts,"rel","nofollow"),u(os,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization-tf.ipynb"),u(os,"rel","nofollow"),u(Zi,"href","/docs/transformers/main/en/model_doc/bart#transformers.FlaxBartForConditionalGeneration"),u(ns,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),u(ns,"rel","nofollow"),u(as,"href","https://huggingface.co/course/chapter7/5?fw=pt#summarization"),u(as,"rel","nofollow"),u(ed,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(rs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#robertabertdistilbert-and-masked-language-modeling"),u(rs,"rel","nofollow"),u(is,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb"),u(is,"rel","nofollow"),u(td,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),u(ds,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_mlmpy"),u(ds,"rel","nofollow"),u(ls,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb"),u(ls,"rel","nofollow"),u(od,"href","/docs/transformers/main/en/model_doc/bart#transformers.FlaxBartForConditionalGeneration"),u(cs,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#masked-language-modeling"),u(cs,"rel","nofollow"),u(ps,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/masked_language_modeling_flax.ipynb"),u(ps,"rel","nofollow"),u(us,"href","https://huggingface.co/course/chapter7/3?fw=pt"),u(us,"rel","nofollow"),u(fs,"href","https://colab.research.google.com/github/vasudevgupta7/huggingface-tutorials/blob/main/translation_training.ipynb"),u(fs,"rel","nofollow"),u(ad,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(_s,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),u(_s,"rel","nofollow"),u(gs,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation.ipynb"),u(gs,"rel","nofollow"),u(sd,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),u(bs,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),u(bs,"rel","nofollow"),u(ks,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation-tf.ipynb"),u(ks,"rel","nofollow"),u(on,"id","transformers.BartConfig"),u(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(on,"href","#transformers.BartConfig"),u(bo,"class","relative group"),u(rd,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartModel"),u(Ts,"href","https://huggingface.co/facebook/bart-large"),u(Ts,"rel","nofollow"),u(id,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(dd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(an,"id","transformers.BartTokenizer"),u(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(an,"href","#transformers.BartTokenizer"),u(vo,"class","relative group"),u(ld,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pn,"id","transformers.BartTokenizerFast"),u(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pn,"href","#transformers.BartTokenizerFast"),u(To,"class","relative group"),u(ud,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fn,"id","transformers.BartModel"),u(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fn,"href","#transformers.BartModel"),u(wo,"class","relative group"),u(hd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ws,"rel","nofollow"),u(md,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartModel"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.BartForConditionalGeneration"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.BartForConditionalGeneration"),u(xo,"class","relative group"),u(fd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Js,"rel","nofollow"),u(_d,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tn,"id","transformers.BartForSequenceClassification"),u(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Tn,"href","#transformers.BartForSequenceClassification"),u(zo,"class","relative group"),u(gd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(tr,"rel","nofollow"),u(bd,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForSequenceClassification"),u(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"id","transformers.BartForQuestionAnswering"),u(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bn,"href","#transformers.BartForQuestionAnswering"),u(qo,"class","relative group"),u(kd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ir,"rel","nofollow"),u(yd,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForQuestionAnswering"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.BartForCausalLM"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.BartForCausalLM"),u(Eo,"class","relative group"),u(vd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(hr,"rel","nofollow"),u(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.TFBartModel"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.TFBartModel"),u(Mo,"class","relative group"),u(Td,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(kr,"rel","nofollow"),u(wd,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartModel"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nn,"id","transformers.TFBartForConditionalGeneration"),u(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nn,"href","#transformers.TFBartForConditionalGeneration"),u(Po,"class","relative group"),u($d,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xr,"rel","nofollow"),u(xd,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Un,"id","transformers.FlaxBartModel"),u(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Un,"href","#transformers.FlaxBartModel"),u(Oo,"class","relative group"),u(Fd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Cr,"rel","nofollow"),u(Er,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Er,"rel","nofollow"),u(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Mr,"rel","nofollow"),u(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ar,"rel","nofollow"),u(Pr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Pr,"rel","nofollow"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.FlaxBartForConditionalGeneration"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.FlaxBartForConditionalGeneration"),u(No,"class","relative group"),u(zd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Wr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Wr,"rel","nofollow"),u(Ur,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ur,"rel","nofollow"),u(Rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Rr,"rel","nofollow"),u(Hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Hr,"rel","nofollow"),u(Qr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Qr,"rel","nofollow"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(na,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sa,"id","transformers.FlaxBartForSequenceClassification"),u(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sa,"href","#transformers.FlaxBartForSequenceClassification"),u(Do,"class","relative group"),u(Bd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ti,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(ti,"rel","nofollow"),u(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(oi,"rel","nofollow"),u(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ni,"rel","nofollow"),u(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ai,"rel","nofollow"),u(si,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(si,"rel","nofollow"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(da,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ca,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ua,"id","transformers.FlaxBartForQuestionAnswering"),u(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ua,"href","#transformers.FlaxBartForQuestionAnswering"),u(Wo,"class","relative group"),u(qd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(hi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(hi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(mi,"rel","nofollow"),u(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(fi,"rel","nofollow"),u(_i,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(_i,"rel","nofollow"),u(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(gi,"rel","nofollow"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ga,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ka,"id","transformers.FlaxBartForCausalLM"),u(ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ka,"href","#transformers.FlaxBartForCausalLM"),u(Ho,"class","relative group"),u(jd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(xi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(xi,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Fi,"rel","nofollow"),u(zi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zi,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Bi,"rel","nofollow"),u(qi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qi,"rel","nofollow"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),b(o,k,_),b(o,f,_),e(f,p),e(p,g),T(n,g,null),e(f,c),e(f,B),e(B,ce),b(o,W,_),b(o,I,_),e(I,he),e(he,Qe),e(I,j),e(I,ve),e(ve,Te),e(I,kt),b(o,rt,_),b(o,U,_),e(U,me),e(me,Ve),T(ee,Ve,null),e(U,yt),e(U,Je),e(Je,we),b(o,it,_),b(o,fe,_),e(fe,$e),e(fe,xe),e(xe,vt),e(fe,Ke),b(o,O,_),b(o,N,_),e(N,Tt),b(o,_e,_),b(o,ae,_),e(ae,Xe),e(Xe,Fe),e(ae,wt),e(ae,Ze),e(Ze,R),e(ae,$t),e(ae,pe),e(pe,xt),b(o,dt,_),b(o,se,_),e(se,Ft),b(o,lt,_),b(o,Z,_),e(Z,Ye),e(Ye,ze),b(o,ct,_),b(o,Y,_),e(Y,H),e(Y,Be),e(Be,te),e(Y,zt),e(Y,qe),e(qe,z),e(Y,C),b(o,Nt,_),b(o,oe,_),e(oe,Ie),e(Ie,Bt),T(E,Bt,null),e(oe,ro),e(oe,qt),e(qt,io),b(o,Lt,_),b(o,ge,_),e(ge,Q),e(Q,je),e(Q,et),e(et,lo),e(Q,Ce),e(ge,co),e(ge,ue),e(ue,jt),e(ue,pt),e(pt,tt),e(ue,po),e(ue,Zd),e(Zd,jh),e(ue,Ch),e(ue,Na),e(Na,Eh),e(ue,Mh),e(ge,Ah),e(ge,Xo),e(Xo,La),e(La,Ph),e(Xo,Sh),e(Xo,Da),e(Da,Oh),e(Xo,Ih),b(o,qp,_),b(o,uo,_),e(uo,Zo),e(Zo,Yd),T(Ga,Yd,null),e(uo,Nh),e(uo,el),e(el,Lh),b(o,jp,_),b(o,Ne,_),e(Ne,Ct),e(Ct,Dh),e(Ct,tl),e(tl,Gh),e(Ct,Wh),e(Ct,Ui),e(Ui,Uh),e(Ct,Rh),e(Ct,Ri),e(Ri,Hh),e(Ct,Qh),e(Ne,Vh),e(Ne,ho),e(ho,Jh),e(ho,Hi),e(Hi,Kh),e(ho,Xh),e(ho,ol),e(ol,Zh),e(ho,Yh),e(Ne,em),e(Ne,mo),e(mo,tm),e(mo,nl),e(nl,om),e(mo,nm),e(mo,al),e(al,am),e(mo,sm),e(Ne,rm),e(Ne,Qi),e(Qi,Vi),e(Vi,im),e(Qi,dm),e(Ne,lm),e(Ne,fo),e(fo,cm),e(fo,sl),e(sl,pm),e(fo,um),e(fo,rl),e(rl,hm),e(fo,mm),b(o,Cp,_),b(o,_o,_),e(_o,Yo),e(Yo,il),T(Wa,il,null),e(_o,fm),e(_o,dl),e(dl,_m),b(o,Ep,_),b(o,Dt,_),e(Dt,gm),e(Dt,ll),e(ll,bm),e(Dt,km),e(Dt,cl),e(cl,ym),e(Dt,vm),b(o,Mp,_),T(Ua,o,_),b(o,Ap,_),b(o,go,_),e(go,en),e(en,pl),T(Ra,pl,null),e(go,Tm),e(go,ul),e(ul,wm),b(o,Pp,_),b(o,Ji,_),e(Ji,$m),b(o,Sp,_),T(Ha,o,_),b(o,Op,_),b(o,re,_),e(re,Qa),e(Qa,xm),e(Qa,Va),e(Va,Fm),e(Qa,zm),e(re,Bm),e(re,Ja),e(Ja,qm),e(Ja,Ka),e(Ka,jm),e(Ja,Cm),e(re,Em),e(re,Xa),e(Xa,Mm),e(Xa,Za),e(Za,Am),e(Xa,Pm),e(re,Sm),e(re,Gt),e(Gt,Ki),e(Ki,Om),e(Gt,Im),e(Gt,Ya),e(Ya,Nm),e(Gt,Lm),e(Gt,es),e(es,Dm),e(Gt,Gm),e(re,Wm),e(re,Wt),e(Wt,Xi),e(Xi,Um),e(Wt,Rm),e(Wt,ts),e(ts,Hm),e(Wt,Qm),e(Wt,os),e(os,Vm),e(Wt,Jm),e(re,Km),e(re,tn),e(tn,Zi),e(Zi,Xm),e(tn,Zm),e(tn,ns),e(ns,Ym),e(tn,ef),e(re,tf),e(re,Yi),e(Yi,as),e(as,of),e(Yi,nf),b(o,Ip,_),T(ss,o,_),b(o,Np,_),b(o,ut,_),e(ut,Ut),e(Ut,ed),e(ed,af),e(Ut,sf),e(Ut,rs),e(rs,rf),e(Ut,df),e(Ut,is),e(is,lf),e(Ut,cf),e(ut,pf),e(ut,Rt),e(Rt,td),e(td,uf),e(Rt,hf),e(Rt,ds),e(ds,mf),e(Rt,ff),e(Rt,ls),e(ls,_f),e(Rt,gf),e(ut,bf),e(ut,Ht),e(Ht,od),e(od,kf),e(Ht,yf),e(Ht,cs),e(cs,vf),e(Ht,Tf),e(Ht,ps),e(ps,wf),e(Ht,$f),e(ut,xf),e(ut,nd),e(nd,us),e(us,Ff),e(nd,zf),b(o,Lp,_),T(hs,o,_),b(o,Dp,_),b(o,Qt,_),e(Qt,ms),e(ms,Bf),e(ms,fs),e(fs,qf),e(ms,jf),e(Qt,Cf),e(Qt,Vt),e(Vt,ad),e(ad,Ef),e(Vt,Mf),e(Vt,_s),e(_s,Af),e(Vt,Pf),e(Vt,gs),e(gs,Sf),e(Vt,Of),e(Qt,If),e(Qt,Jt),e(Jt,sd),e(sd,Nf),e(Jt,Lf),e(Jt,bs),e(bs,Df),e(Jt,Gf),e(Jt,ks),e(ks,Wf),e(Jt,Uf),b(o,Gp,_),b(o,bo,_),e(bo,on),e(on,hl),T(ys,hl,null),e(bo,Rf),e(bo,ml),e(ml,Hf),b(o,Wp,_),b(o,ot,_),T(vs,ot,null),e(ot,Qf),e(ot,ko),e(ko,Vf),e(ko,rd),e(rd,Jf),e(ko,Kf),e(ko,Ts),e(Ts,Xf),e(ko,Zf),e(ot,Yf),e(ot,yo),e(yo,e_),e(yo,id),e(id,t_),e(yo,o_),e(yo,dd),e(dd,n_),e(yo,a_),e(ot,s_),T(nn,ot,null),b(o,Up,_),b(o,vo,_),e(vo,an),e(an,fl),T(ws,fl,null),e(vo,r_),e(vo,_l),e(_l,i_),b(o,Rp,_),b(o,S,_),T($s,S,null),e(S,d_),e(S,gl),e(gl,l_),e(S,c_),e(S,bl),e(bl,p_),e(S,u_),T(sn,S,null),e(S,h_),e(S,xs),e(xs,m_),e(xs,kl),e(kl,f_),e(xs,__),e(S,g_),T(rn,S,null),e(S,b_),e(S,Fs),e(Fs,k_),e(Fs,ld),e(ld,y_),e(Fs,v_),e(S,T_),e(S,Kt),T(zs,Kt,null),e(Kt,w_),e(Kt,yl),e(yl,$_),e(Kt,x_),e(Kt,Bs),e(Bs,cd),e(cd,F_),e(cd,vl),e(vl,z_),e(Bs,B_),e(Bs,pd),e(pd,q_),e(pd,Tl),e(Tl,j_),e(S,C_),e(S,dn),T(qs,dn,null),e(dn,E_),e(dn,wl),e(wl,M_),e(S,A_),e(S,ln),T(js,ln,null),e(ln,P_),e(ln,$l),e($l,S_),e(S,O_),e(S,cn),T(Cs,cn,null),e(cn,I_),e(cn,Es),e(Es,N_),e(Es,xl),e(xl,L_),e(Es,D_),b(o,Hp,_),b(o,To,_),e(To,pn),e(pn,Fl),T(Ms,Fl,null),e(To,G_),e(To,zl),e(zl,W_),b(o,Qp,_),b(o,V,_),T(As,V,null),e(V,U_),e(V,Ps),e(Ps,R_),e(Ps,Bl),e(Bl,H_),e(Ps,Q_),e(V,V_),e(V,ql),e(ql,J_),e(V,K_),T(un,V,null),e(V,X_),e(V,Ss),e(Ss,Z_),e(Ss,jl),e(jl,Y_),e(Ss,eg),e(V,tg),T(hn,V,null),e(V,og),e(V,Os),e(Os,ng),e(Os,ud),e(ud,ag),e(Os,sg),e(V,rg),e(V,mn),T(Is,mn,null),e(mn,ig),e(mn,Cl),e(Cl,dg),b(o,Vp,_),b(o,wo,_),e(wo,fn),e(fn,El),T(Ns,El,null),e(wo,lg),e(wo,Ml),e(Ml,cg),b(o,Jp,_),b(o,nt,_),T(Ls,nt,null),e(nt,pg),e(nt,Ds),e(Ds,ug),e(Ds,hd),e(hd,hg),e(Ds,mg),e(nt,fg),e(nt,Gs),e(Gs,_g),e(Gs,Ws),e(Ws,gg),e(Gs,bg),e(nt,kg),e(nt,ht),T(Us,ht,null),e(ht,yg),e(ht,$o),e($o,vg),e($o,md),e(md,Tg),e($o,wg),e($o,Al),e(Al,$g),e($o,xg),e(ht,Fg),T(_n,ht,null),e(ht,zg),T(gn,ht,null),b(o,Kp,_),b(o,xo,_),e(xo,bn),e(bn,Pl),T(Rs,Pl,null),e(xo,Bg),e(xo,Sl),e(Sl,qg),b(o,Xp,_),b(o,at,_),T(Hs,at,null),e(at,jg),e(at,Qs),e(Qs,Cg),e(Qs,fd),e(fd,Eg),e(Qs,Mg),e(at,Ag),e(at,Vs),e(Vs,Pg),e(Vs,Js),e(Js,Sg),e(Vs,Og),e(at,Ig),e(at,Le),T(Ks,Le,null),e(Le,Ng),e(Le,Fo),e(Fo,Lg),e(Fo,_d),e(_d,Dg),e(Fo,Gg),e(Fo,Ol),e(Ol,Wg),e(Fo,Ug),e(Le,Rg),T(kn,Le,null),e(Le,Hg),T(yn,Le,null),e(Le,Qg),T(vn,Le,null),b(o,Zp,_),b(o,zo,_),e(zo,Tn),e(Tn,Il),T(Xs,Il,null),e(zo,Vg),e(zo,Nl),e(Nl,Jg),b(o,Yp,_),b(o,Ee,_),T(Zs,Ee,null),e(Ee,Kg),e(Ee,Ll),e(Ll,Xg),e(Ee,Zg),e(Ee,Ys),e(Ys,Yg),e(Ys,gd),e(gd,eb),e(Ys,tb),e(Ee,ob),e(Ee,er),e(er,nb),e(er,tr),e(tr,ab),e(er,sb),e(Ee,rb),e(Ee,ie),T(or,ie,null),e(ie,ib),e(ie,Bo),e(Bo,db),e(Bo,bd),e(bd,lb),e(Bo,cb),e(Bo,Dl),e(Dl,pb),e(Bo,ub),e(ie,hb),T(wn,ie,null),e(ie,mb),T($n,ie,null),e(ie,fb),T(xn,ie,null),e(ie,_b),T(Fn,ie,null),e(ie,gb),T(zn,ie,null),b(o,eu,_),b(o,qo,_),e(qo,Bn),e(Bn,Gl),T(nr,Gl,null),e(qo,bb),e(qo,Wl),e(Wl,kb),b(o,tu,_),b(o,Me,_),T(ar,Me,null),e(Me,yb),e(Me,jo),e(jo,vb),e(jo,Ul),e(Ul,Tb),e(jo,wb),e(jo,Rl),e(Rl,$b),e(jo,xb),e(Me,Fb),e(Me,sr),e(sr,zb),e(sr,kd),e(kd,Bb),e(sr,qb),e(Me,jb),e(Me,rr),e(rr,Cb),e(rr,ir),e(ir,Eb),e(rr,Mb),e(Me,Ab),e(Me,De),T(dr,De,null),e(De,Pb),e(De,Co),e(Co,Sb),e(Co,yd),e(yd,Ob),e(Co,Ib),e(Co,Hl),e(Hl,Nb),e(Co,Lb),e(De,Db),T(qn,De,null),e(De,Gb),T(jn,De,null),e(De,Wb),T(Cn,De,null),b(o,ou,_),b(o,Eo,_),e(Eo,En),e(En,Ql),T(lr,Ql,null),e(Eo,Ub),e(Eo,Vl),e(Vl,Rb),b(o,nu,_),b(o,Ae,_),T(cr,Ae,null),e(Ae,Hb),e(Ae,Jl),e(Jl,Qb),e(Ae,Vb),e(Ae,pr),e(pr,Jb),e(pr,vd),e(vd,Kb),e(pr,Xb),e(Ae,Zb),e(Ae,ur),e(ur,Yb),e(ur,hr),e(hr,ek),e(ur,tk),e(Ae,ok),e(Ae,Mn),T(mr,Mn,null),e(Mn,nk),T(An,Mn,null),b(o,au,_),b(o,Mo,_),e(Mo,Pn),e(Pn,Kl),T(fr,Kl,null),e(Mo,ak),e(Mo,Xl),e(Xl,sk),b(o,su,_),b(o,Pe,_),T(_r,Pe,null),e(Pe,rk),e(Pe,gr),e(gr,ik),e(gr,Td),e(Td,dk),e(gr,lk),e(Pe,ck),e(Pe,br),e(br,pk),e(br,kr),e(kr,uk),e(br,hk),e(Pe,mk),T(Sn,Pe,null),e(Pe,fk),e(Pe,mt),T(yr,mt,null),e(mt,_k),e(mt,Ao),e(Ao,gk),e(Ao,wd),e(wd,bk),e(Ao,kk),e(Ao,Zl),e(Zl,yk),e(Ao,vk),e(mt,Tk),T(On,mt,null),e(mt,wk),T(In,mt,null),b(o,ru,_),b(o,Po,_),e(Po,Nn),e(Nn,Yl),T(vr,Yl,null),e(Po,$k),e(Po,ec),e(ec,xk),b(o,iu,_),b(o,Se,_),T(Tr,Se,null),e(Se,Fk),e(Se,wr),e(wr,zk),e(wr,$d),e($d,Bk),e(wr,qk),e(Se,jk),e(Se,$r),e($r,Ck),e($r,xr),e(xr,Ek),e($r,Mk),e(Se,Ak),T(Ln,Se,null),e(Se,Pk),e(Se,Ge),T(Fr,Ge,null),e(Ge,Sk),e(Ge,So),e(So,Ok),e(So,xd),e(xd,Ik),e(So,Nk),e(So,tc),e(tc,Lk),e(So,Dk),e(Ge,Gk),T(Dn,Ge,null),e(Ge,Wk),T(Gn,Ge,null),e(Ge,Uk),T(Wn,Ge,null),b(o,du,_),b(o,Oo,_),e(Oo,Un),e(Un,oc),T(zr,oc,null),e(Oo,Rk),e(Oo,nc),e(nc,Hk),b(o,lu,_),b(o,J,_),T(Br,J,null),e(J,Qk),e(J,qr),e(qr,Vk),e(qr,Fd),e(Fd,Jk),e(qr,Kk),e(J,Xk),e(J,jr),e(jr,Zk),e(jr,Cr),e(Cr,Yk),e(jr,ey),e(J,ty),e(J,ac),e(ac,oy),e(J,ny),e(J,Et),e(Et,sc),e(sc,Er),e(Er,ay),e(Et,sy),e(Et,rc),e(rc,Mr),e(Mr,ry),e(Et,iy),e(Et,ic),e(ic,Ar),e(Ar,dy),e(Et,ly),e(Et,dc),e(dc,Pr),e(Pr,cy),e(J,py),e(J,ft),T(Sr,ft,null),e(ft,uy),e(ft,Io),e(Io,hy),e(Io,lc),e(lc,my),e(Io,fy),e(Io,cc),e(cc,_y),e(Io,gy),e(ft,by),T(Rn,ft,null),e(ft,ky),T(Hn,ft,null),e(J,yy),e(J,Qn),T(Or,Qn,null),e(Qn,vy),T(Vn,Qn,null),e(J,Ty),e(J,Jn),T(Ir,Jn,null),e(Jn,wy),T(Kn,Jn,null),b(o,cu,_),b(o,No,_),e(No,Xn),e(Xn,pc),T(Nr,pc,null),e(No,$y),e(No,uc),e(uc,xy),b(o,pu,_),b(o,K,_),T(Lr,K,null),e(K,Fy),e(K,Dr),e(Dr,zy),e(Dr,zd),e(zd,By),e(Dr,qy),e(K,jy),e(K,Gr),e(Gr,Cy),e(Gr,Wr),e(Wr,Ey),e(Gr,My),e(K,Ay),e(K,hc),e(hc,Py),e(K,Sy),e(K,Mt),e(Mt,mc),e(mc,Ur),e(Ur,Oy),e(Mt,Iy),e(Mt,fc),e(fc,Rr),e(Rr,Ny),e(Mt,Ly),e(Mt,_c),e(_c,Hr),e(Hr,Dy),e(Mt,Gy),e(Mt,gc),e(gc,Qr),e(Qr,Wy),e(K,Uy),e(K,We),T(Vr,We,null),e(We,Ry),e(We,Lo),e(Lo,Hy),e(Lo,bc),e(bc,Qy),e(Lo,Vy),e(Lo,kc),e(kc,Jy),e(Lo,Ky),e(We,Xy),T(Zn,We,null),e(We,Zy),T(Yn,We,null),e(We,Yy),T(ea,We,null),e(K,ev),e(K,ta),T(Jr,ta,null),e(ta,tv),T(oa,ta,null),e(K,ov),e(K,na),T(Kr,na,null),e(na,nv),T(aa,na,null),b(o,uu,_),b(o,Do,_),e(Do,sa),e(sa,yc),T(Xr,yc,null),e(Do,av),e(Do,vc),e(vc,sv),b(o,hu,_),b(o,L,_),T(Zr,L,null),e(L,rv),e(L,Tc),e(Tc,iv),e(L,dv),e(L,Yr),e(Yr,lv),e(Yr,Bd),e(Bd,cv),e(Yr,pv),e(L,uv),e(L,ei),e(ei,hv),e(ei,ti),e(ti,mv),e(ei,fv),e(L,_v),e(L,wc),e(wc,gv),e(L,bv),e(L,At),e(At,$c),e($c,oi),e(oi,kv),e(At,yv),e(At,xc),e(xc,ni),e(ni,vv),e(At,Tv),e(At,Fc),e(Fc,ai),e(ai,wv),e(At,$v),e(At,zc),e(zc,si),e(si,xv),e(L,Fv),e(L,_t),T(ri,_t,null),e(_t,zv),e(_t,Go),e(Go,Bv),e(Go,Bc),e(Bc,qv),e(Go,jv),e(Go,qc),e(qc,Cv),e(Go,Ev),e(_t,Mv),T(ra,_t,null),e(_t,Av),T(ia,_t,null),e(L,Pv),e(L,da),T(ii,da,null),e(da,Sv),T(la,da,null),e(L,Ov),e(L,ca),T(di,ca,null),e(ca,Iv),T(pa,ca,null),b(o,mu,_),b(o,Wo,_),e(Wo,ua),e(ua,jc),T(li,jc,null),e(Wo,Nv),e(Wo,Cc),e(Cc,Lv),b(o,fu,_),b(o,D,_),T(ci,D,null),e(D,Dv),e(D,Uo),e(Uo,Gv),e(Uo,Ec),e(Ec,Wv),e(Uo,Uv),e(Uo,Mc),e(Mc,Rv),e(Uo,Hv),e(D,Qv),e(D,pi),e(pi,Vv),e(pi,qd),e(qd,Jv),e(pi,Kv),e(D,Xv),e(D,ui),e(ui,Zv),e(ui,hi),e(hi,Yv),e(ui,eT),e(D,tT),e(D,Ac),e(Ac,oT),e(D,nT),e(D,Pt),e(Pt,Pc),e(Pc,mi),e(mi,aT),e(Pt,sT),e(Pt,Sc),e(Sc,fi),e(fi,rT),e(Pt,iT),e(Pt,Oc),e(Oc,_i),e(_i,dT),e(Pt,lT),e(Pt,Ic),e(Ic,gi),e(gi,cT),e(D,pT),e(D,gt),T(bi,gt,null),e(gt,uT),e(gt,Ro),e(Ro,hT),e(Ro,Nc),e(Nc,mT),e(Ro,fT),e(Ro,Lc),e(Lc,_T),e(Ro,gT),e(gt,bT),T(ha,gt,null),e(gt,kT),T(ma,gt,null),e(D,yT),e(D,fa),T(ki,fa,null),e(fa,vT),T(_a,fa,null),e(D,TT),e(D,ga),T(yi,ga,null),e(ga,wT),T(ba,ga,null),b(o,_u,_),b(o,Ho,_),e(Ho,ka),e(ka,Dc),T(vi,Dc,null),e(Ho,$T),e(Ho,Gc),e(Gc,xT),b(o,gu,_),b(o,ne,_),T(Ti,ne,null),e(ne,FT),e(ne,Wc),e(Wc,zT),e(ne,BT),e(ne,wi),e(wi,qT),e(wi,jd),e(jd,jT),e(wi,CT),e(ne,ET),e(ne,$i),e($i,MT),e($i,xi),e(xi,AT),e($i,PT),e(ne,ST),e(ne,Uc),e(Uc,OT),e(ne,IT),e(ne,St),e(St,Rc),e(Rc,Fi),e(Fi,NT),e(St,LT),e(St,Hc),e(Hc,zi),e(zi,DT),e(St,GT),e(St,Qc),e(Qc,Bi),e(Bi,WT),e(St,UT),e(St,Vc),e(Vc,qi),e(qi,RT),e(ne,HT),e(ne,bt),T(ji,bt,null),e(bt,QT),e(bt,Qo),e(Qo,VT),e(Qo,Jc),e(Jc,JT),e(Qo,KT),e(Qo,Kc),e(Kc,XT),e(Qo,ZT),e(bt,YT),T(ya,bt,null),e(bt,ew),T(va,bt,null),bu=!0},p(o,[_]){const Ci={};_&2&&(Ci.$$scope={dirty:_,ctx:o}),nn.$set(Ci);const Xc={};_&2&&(Xc.$$scope={dirty:_,ctx:o}),sn.$set(Xc);const Zc={};_&2&&(Zc.$$scope={dirty:_,ctx:o}),rn.$set(Zc);const Yc={};_&2&&(Yc.$$scope={dirty:_,ctx:o}),un.$set(Yc);const Ta={};_&2&&(Ta.$$scope={dirty:_,ctx:o}),hn.$set(Ta);const ep={};_&2&&(ep.$$scope={dirty:_,ctx:o}),_n.$set(ep);const tp={};_&2&&(tp.$$scope={dirty:_,ctx:o}),gn.$set(tp);const Ei={};_&2&&(Ei.$$scope={dirty:_,ctx:o}),kn.$set(Ei);const op={};_&2&&(op.$$scope={dirty:_,ctx:o}),yn.$set(op);const np={};_&2&&(np.$$scope={dirty:_,ctx:o}),vn.$set(np);const ap={};_&2&&(ap.$$scope={dirty:_,ctx:o}),wn.$set(ap);const Mi={};_&2&&(Mi.$$scope={dirty:_,ctx:o}),$n.$set(Mi);const sp={};_&2&&(sp.$$scope={dirty:_,ctx:o}),xn.$set(sp);const rp={};_&2&&(rp.$$scope={dirty:_,ctx:o}),Fn.$set(rp);const Vo={};_&2&&(Vo.$$scope={dirty:_,ctx:o}),zn.$set(Vo);const ip={};_&2&&(ip.$$scope={dirty:_,ctx:o}),qn.$set(ip);const dp={};_&2&&(dp.$$scope={dirty:_,ctx:o}),jn.$set(dp);const lp={};_&2&&(lp.$$scope={dirty:_,ctx:o}),Cn.$set(lp);const cp={};_&2&&(cp.$$scope={dirty:_,ctx:o}),An.$set(cp);const pp={};_&2&&(pp.$$scope={dirty:_,ctx:o}),Sn.$set(pp);const up={};_&2&&(up.$$scope={dirty:_,ctx:o}),On.$set(up);const Jo={};_&2&&(Jo.$$scope={dirty:_,ctx:o}),In.$set(Jo);const hp={};_&2&&(hp.$$scope={dirty:_,ctx:o}),Ln.$set(hp);const mp={};_&2&&(mp.$$scope={dirty:_,ctx:o}),Dn.$set(mp);const Ai={};_&2&&(Ai.$$scope={dirty:_,ctx:o}),Gn.$set(Ai);const fp={};_&2&&(fp.$$scope={dirty:_,ctx:o}),Wn.$set(fp);const _p={};_&2&&(_p.$$scope={dirty:_,ctx:o}),Rn.$set(_p);const gp={};_&2&&(gp.$$scope={dirty:_,ctx:o}),Hn.$set(gp);const Ko={};_&2&&(Ko.$$scope={dirty:_,ctx:o}),Vn.$set(Ko);const Pi={};_&2&&(Pi.$$scope={dirty:_,ctx:o}),Kn.$set(Pi);const bp={};_&2&&(bp.$$scope={dirty:_,ctx:o}),Zn.$set(bp);const Ot={};_&2&&(Ot.$$scope={dirty:_,ctx:o}),Yn.$set(Ot);const kp={};_&2&&(kp.$$scope={dirty:_,ctx:o}),ea.$set(kp);const yp={};_&2&&(yp.$$scope={dirty:_,ctx:o}),oa.$set(yp);const vp={};_&2&&(vp.$$scope={dirty:_,ctx:o}),aa.$set(vp);const wa={};_&2&&(wa.$$scope={dirty:_,ctx:o}),ra.$set(wa);const Tp={};_&2&&(Tp.$$scope={dirty:_,ctx:o}),ia.$set(Tp);const wp={};_&2&&(wp.$$scope={dirty:_,ctx:o}),la.$set(wp);const Si={};_&2&&(Si.$$scope={dirty:_,ctx:o}),pa.$set(Si);const $p={};_&2&&($p.$$scope={dirty:_,ctx:o}),ha.$set($p);const xp={};_&2&&(xp.$$scope={dirty:_,ctx:o}),ma.$set(xp);const Fp={};_&2&&(Fp.$$scope={dirty:_,ctx:o}),_a.$set(Fp);const st={};_&2&&(st.$$scope={dirty:_,ctx:o}),ba.$set(st);const It={};_&2&&(It.$$scope={dirty:_,ctx:o}),ya.$set(It);const zp={};_&2&&(zp.$$scope={dirty:_,ctx:o}),va.$set(zp)},i(o){bu||(w(n.$$.fragment,o),w(ee.$$.fragment,o),w(E.$$.fragment,o),w(Ga.$$.fragment,o),w(Wa.$$.fragment,o),w(Ua.$$.fragment,o),w(Ra.$$.fragment,o),w(Ha.$$.fragment,o),w(ss.$$.fragment,o),w(hs.$$.fragment,o),w(ys.$$.fragment,o),w(vs.$$.fragment,o),w(nn.$$.fragment,o),w(ws.$$.fragment,o),w($s.$$.fragment,o),w(sn.$$.fragment,o),w(rn.$$.fragment,o),w(zs.$$.fragment,o),w(qs.$$.fragment,o),w(js.$$.fragment,o),w(Cs.$$.fragment,o),w(Ms.$$.fragment,o),w(As.$$.fragment,o),w(un.$$.fragment,o),w(hn.$$.fragment,o),w(Is.$$.fragment,o),w(Ns.$$.fragment,o),w(Ls.$$.fragment,o),w(Us.$$.fragment,o),w(_n.$$.fragment,o),w(gn.$$.fragment,o),w(Rs.$$.fragment,o),w(Hs.$$.fragment,o),w(Ks.$$.fragment,o),w(kn.$$.fragment,o),w(yn.$$.fragment,o),w(vn.$$.fragment,o),w(Xs.$$.fragment,o),w(Zs.$$.fragment,o),w(or.$$.fragment,o),w(wn.$$.fragment,o),w($n.$$.fragment,o),w(xn.$$.fragment,o),w(Fn.$$.fragment,o),w(zn.$$.fragment,o),w(nr.$$.fragment,o),w(ar.$$.fragment,o),w(dr.$$.fragment,o),w(qn.$$.fragment,o),w(jn.$$.fragment,o),w(Cn.$$.fragment,o),w(lr.$$.fragment,o),w(cr.$$.fragment,o),w(mr.$$.fragment,o),w(An.$$.fragment,o),w(fr.$$.fragment,o),w(_r.$$.fragment,o),w(Sn.$$.fragment,o),w(yr.$$.fragment,o),w(On.$$.fragment,o),w(In.$$.fragment,o),w(vr.$$.fragment,o),w(Tr.$$.fragment,o),w(Ln.$$.fragment,o),w(Fr.$$.fragment,o),w(Dn.$$.fragment,o),w(Gn.$$.fragment,o),w(Wn.$$.fragment,o),w(zr.$$.fragment,o),w(Br.$$.fragment,o),w(Sr.$$.fragment,o),w(Rn.$$.fragment,o),w(Hn.$$.fragment,o),w(Or.$$.fragment,o),w(Vn.$$.fragment,o),w(Ir.$$.fragment,o),w(Kn.$$.fragment,o),w(Nr.$$.fragment,o),w(Lr.$$.fragment,o),w(Vr.$$.fragment,o),w(Zn.$$.fragment,o),w(Yn.$$.fragment,o),w(ea.$$.fragment,o),w(Jr.$$.fragment,o),w(oa.$$.fragment,o),w(Kr.$$.fragment,o),w(aa.$$.fragment,o),w(Xr.$$.fragment,o),w(Zr.$$.fragment,o),w(ri.$$.fragment,o),w(ra.$$.fragment,o),w(ia.$$.fragment,o),w(ii.$$.fragment,o),w(la.$$.fragment,o),w(di.$$.fragment,o),w(pa.$$.fragment,o),w(li.$$.fragment,o),w(ci.$$.fragment,o),w(bi.$$.fragment,o),w(ha.$$.fragment,o),w(ma.$$.fragment,o),w(ki.$$.fragment,o),w(_a.$$.fragment,o),w(yi.$$.fragment,o),w(ba.$$.fragment,o),w(vi.$$.fragment,o),w(Ti.$$.fragment,o),w(ji.$$.fragment,o),w(ya.$$.fragment,o),w(va.$$.fragment,o),bu=!0)},o(o){$(n.$$.fragment,o),$(ee.$$.fragment,o),$(E.$$.fragment,o),$(Ga.$$.fragment,o),$(Wa.$$.fragment,o),$(Ua.$$.fragment,o),$(Ra.$$.fragment,o),$(Ha.$$.fragment,o),$(ss.$$.fragment,o),$(hs.$$.fragment,o),$(ys.$$.fragment,o),$(vs.$$.fragment,o),$(nn.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(Ms.$$.fragment,o),$(As.$$.fragment,o),$(un.$$.fragment,o),$(hn.$$.fragment,o),$(Is.$$.fragment,o),$(Ns.$$.fragment,o),$(Ls.$$.fragment,o),$(Us.$$.fragment,o),$(_n.$$.fragment,o),$(gn.$$.fragment,o),$(Rs.$$.fragment,o),$(Hs.$$.fragment,o),$(Ks.$$.fragment,o),$(kn.$$.fragment,o),$(yn.$$.fragment,o),$(vn.$$.fragment,o),$(Xs.$$.fragment,o),$(Zs.$$.fragment,o),$(or.$$.fragment,o),$(wn.$$.fragment,o),$($n.$$.fragment,o),$(xn.$$.fragment,o),$(Fn.$$.fragment,o),$(zn.$$.fragment,o),$(nr.$$.fragment,o),$(ar.$$.fragment,o),$(dr.$$.fragment,o),$(qn.$$.fragment,o),$(jn.$$.fragment,o),$(Cn.$$.fragment,o),$(lr.$$.fragment,o),$(cr.$$.fragment,o),$(mr.$$.fragment,o),$(An.$$.fragment,o),$(fr.$$.fragment,o),$(_r.$$.fragment,o),$(Sn.$$.fragment,o),$(yr.$$.fragment,o),$(On.$$.fragment,o),$(In.$$.fragment,o),$(vr.$$.fragment,o),$(Tr.$$.fragment,o),$(Ln.$$.fragment,o),$(Fr.$$.fragment,o),$(Dn.$$.fragment,o),$(Gn.$$.fragment,o),$(Wn.$$.fragment,o),$(zr.$$.fragment,o),$(Br.$$.fragment,o),$(Sr.$$.fragment,o),$(Rn.$$.fragment,o),$(Hn.$$.fragment,o),$(Or.$$.fragment,o),$(Vn.$$.fragment,o),$(Ir.$$.fragment,o),$(Kn.$$.fragment,o),$(Nr.$$.fragment,o),$(Lr.$$.fragment,o),$(Vr.$$.fragment,o),$(Zn.$$.fragment,o),$(Yn.$$.fragment,o),$(ea.$$.fragment,o),$(Jr.$$.fragment,o),$(oa.$$.fragment,o),$(Kr.$$.fragment,o),$(aa.$$.fragment,o),$(Xr.$$.fragment,o),$(Zr.$$.fragment,o),$(ri.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(ii.$$.fragment,o),$(la.$$.fragment,o),$(di.$$.fragment,o),$(pa.$$.fragment,o),$(li.$$.fragment,o),$(ci.$$.fragment,o),$(bi.$$.fragment,o),$(ha.$$.fragment,o),$(ma.$$.fragment,o),$(ki.$$.fragment,o),$(_a.$$.fragment,o),$(yi.$$.fragment,o),$(ba.$$.fragment,o),$(vi.$$.fragment,o),$(Ti.$$.fragment,o),$(ji.$$.fragment,o),$(ya.$$.fragment,o),$(va.$$.fragment,o),bu=!1},d(o){t(l),o&&t(k),o&&t(f),x(n),o&&t(W),o&&t(I),o&&t(rt),o&&t(U),x(ee),o&&t(it),o&&t(fe),o&&t(O),o&&t(N),o&&t(_e),o&&t(ae),o&&t(dt),o&&t(se),o&&t(lt),o&&t(Z),o&&t(ct),o&&t(Y),o&&t(Nt),o&&t(oe),x(E),o&&t(Lt),o&&t(ge),o&&t(qp),o&&t(uo),x(Ga),o&&t(jp),o&&t(Ne),o&&t(Cp),o&&t(_o),x(Wa),o&&t(Ep),o&&t(Dt),o&&t(Mp),x(Ua,o),o&&t(Ap),o&&t(go),x(Ra),o&&t(Pp),o&&t(Ji),o&&t(Sp),x(Ha,o),o&&t(Op),o&&t(re),o&&t(Ip),x(ss,o),o&&t(Np),o&&t(ut),o&&t(Lp),x(hs,o),o&&t(Dp),o&&t(Qt),o&&t(Gp),o&&t(bo),x(ys),o&&t(Wp),o&&t(ot),x(vs),x(nn),o&&t(Up),o&&t(vo),x(ws),o&&t(Rp),o&&t(S),x($s),x(sn),x(rn),x(zs),x(qs),x(js),x(Cs),o&&t(Hp),o&&t(To),x(Ms),o&&t(Qp),o&&t(V),x(As),x(un),x(hn),x(Is),o&&t(Vp),o&&t(wo),x(Ns),o&&t(Jp),o&&t(nt),x(Ls),x(Us),x(_n),x(gn),o&&t(Kp),o&&t(xo),x(Rs),o&&t(Xp),o&&t(at),x(Hs),x(Ks),x(kn),x(yn),x(vn),o&&t(Zp),o&&t(zo),x(Xs),o&&t(Yp),o&&t(Ee),x(Zs),x(or),x(wn),x($n),x(xn),x(Fn),x(zn),o&&t(eu),o&&t(qo),x(nr),o&&t(tu),o&&t(Me),x(ar),x(dr),x(qn),x(jn),x(Cn),o&&t(ou),o&&t(Eo),x(lr),o&&t(nu),o&&t(Ae),x(cr),x(mr),x(An),o&&t(au),o&&t(Mo),x(fr),o&&t(su),o&&t(Pe),x(_r),x(Sn),x(yr),x(On),x(In),o&&t(ru),o&&t(Po),x(vr),o&&t(iu),o&&t(Se),x(Tr),x(Ln),x(Fr),x(Dn),x(Gn),x(Wn),o&&t(du),o&&t(Oo),x(zr),o&&t(lu),o&&t(J),x(Br),x(Sr),x(Rn),x(Hn),x(Or),x(Vn),x(Ir),x(Kn),o&&t(cu),o&&t(No),x(Nr),o&&t(pu),o&&t(K),x(Lr),x(Vr),x(Zn),x(Yn),x(ea),x(Jr),x(oa),x(Kr),x(aa),o&&t(uu),o&&t(Do),x(Xr),o&&t(hu),o&&t(L),x(Zr),x(ri),x(ra),x(ia),x(ii),x(la),x(di),x(pa),o&&t(mu),o&&t(Wo),x(li),o&&t(fu),o&&t(D),x(ci),x(bi),x(ha),x(ma),x(ki),x(_a),x(yi),x(ba),o&&t(_u),o&&t(Ho),x(vi),o&&t(gu),o&&t(ne),x(Ti),x(ji),x(ya),x(va)}}}const Z2={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"resources",title:"Resources"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"},{local:"transformers.FlaxBartForCausalLM",title:"FlaxBartForCausalLM"}],title:"BART"};function Y2(F){return s2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class iF extends t2{constructor(l){super();o2(this,l,Y2,X2,n2,{})}}export{iF as default,Z2 as metadata};
