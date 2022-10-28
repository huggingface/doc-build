import{S as Rx,i as Hx,s as Qx,e as a,k as h,w as y,t as i,M as Vx,c as s,d as t,m,a as r,x as v,h as d,b as u,G as e,g as k,y as T,q as w,o as $,B as x,v as Jx,L as A}from"../../chunks/vendor-hf-doc-builder.js";import{T as Oe}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as E}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as M}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as ZT}from"../../chunks/PipelineTag-hf-doc-builder.js";function Kx(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartConfig, BartModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function Xx(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),b=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function Zx(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("When used with "),f=a("code"),p=i("is_split_into_words=True"),_=i(", this tokenizer will add a space before each word (even the first one).")},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"When used with "),f=s(c,"CODE",{});var B=r(f);p=d(B,"is_split_into_words=True"),B.forEach(t),_=d(c,", this tokenizer will add a space before each word (even the first one)."),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function Yx(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),b=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function e2(F){let l,b,f,p,_,n,c,B;return{c(){l=a("p"),b=i("When used with "),f=a("code"),p=i("is_split_into_words=True"),_=i(", this tokenizer needs to be instantiated with "),n=a("code"),c=i("add_prefix_space=True"),B=i(".")},l(de){l=s(de,"P",{});var H=r(l);b=d(H,"When used with "),f=s(H,"CODE",{});var I=r(f);p=d(I,"is_split_into_words=True"),I.forEach(t),_=d(H,", this tokenizer needs to be instantiated with "),n=s(H,"CODE",{});var fe=r(n);c=d(fe,"add_prefix_space=True"),fe.forEach(t),B=d(H,"."),H.forEach(t)},m(de,H){k(de,l,H),e(l,b),e(l,f),e(f,p),e(l,_),e(l,n),e(n,c),e(l,B)},d(de){de&&t(l)}}}function t2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function o2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, BartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function n2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function a2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
<span class="hljs-string">&#x27;PG&amp;E scheduled the blackouts in response to forecasts for high winds amid dry conditions&#x27;</span>`}}),{c(){l=a("p"),b=i("Summarization example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Summarization example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function s2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
[<span class="hljs-string">&#x27;not&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;great&#x27;</span>, <span class="hljs-string">&#x27;very&#x27;</span>]`}}),{c(){l=a("p"),b=i("Mask filling example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Mask filling example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function r2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function i2(F){let l,b,f,p,_;return p=new E({props:{code:`import torch
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
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),b=i("Example of single-label classification:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example of single-label classification:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function d2(F){let l,b;return l=new E({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.0</span>`}}),{c(){y(l.$$.fragment)},l(f){v(l.$$.fragment,f)},m(f,p){T(l,f,p),b=!0},p:A,i(f){b||(w(l.$$.fragment,f),b=!0)},o(f){$(l.$$.fragment,f),b=!1},d(f){x(l,f)}}}function l2(F){let l,b,f,p,_;return p=new E({props:{code:`import torch
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
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),b=i("Example of multi-label classification:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example of multi-label classification:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function c2(F){let l,b;return l=new E({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(f){v(l.$$.fragment,f)},m(f,p){T(l,f,p),b=!0},p:A,i(f){b||(w(l.$$.fragment,f),b=!0)},o(f){$(l.$$.fragment,f),b=!1},d(f){x(l,f)}}}function p2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function u2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
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
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; nice puppet&#x27;</span>`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function h2(F){let l,b;return l=new E({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.59</span>`}}),{c(){y(l.$$.fragment)},l(f){v(l.$$.fragment,f)},m(f,p){T(l,f,p),b=!0},p:A,i(f){b||(w(l.$$.fragment,f),b=!0)},o(f){$(l.$$.fragment,f),b=!1},d(f){x(l,f)}}}function m2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, BartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function f2(F){let l,b,f,p,_,n,c,B,de,H,I,fe,Qe,j,we,$e,bt,dt,Q,_e,Ve,Y,kt,Je,xe,lt,ge,Fe,ze,yt,Ke,O,N,vt,be,oe,Xe,Be,Tt,Ze,V,wt,le,$t,ct,W,xt,qe,ce,Ft,ee,zt,Ye,U,pe,L,et,je;return{c(){l=a("p"),b=i("TensorFlow models and layers in "),f=a("code"),p=i("transformers"),_=i(" accept two formats as input:"),n=h(),c=a("ul"),B=a("li"),de=i("having all inputs as keyword arguments (like PyTorch models), or"),H=h(),I=a("li"),fe=i("having all inputs as a list, tuple or dict in the first positional argument."),Qe=h(),j=a("p"),we=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),$e=a("code"),bt=i("model.fit()"),dt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),_e=i("model.fit()"),Ve=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),kt=i("fit()"),Je=i(" and "),xe=a("code"),lt=i("predict()"),ge=i(`, such as when creating your own layers or models with
the Keras `),Fe=a("code"),ze=i("Functional"),yt=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ke=h(),O=a("ul"),N=a("li"),vt=i("a single Tensor with "),be=a("code"),oe=i("input_ids"),Xe=i(" only and nothing else: "),Be=a("code"),Tt=i("model(input_ids)"),Ze=h(),V=a("li"),wt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),le=a("code"),$t=i("model([input_ids, attention_mask])"),ct=i(" or "),W=a("code"),xt=i("model([input_ids, attention_mask, token_type_ids])"),qe=h(),ce=a("li"),Ft=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),zt=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye=h(),U=a("p"),pe=i(`Note that when creating models and layers with
`),L=a("a"),et=i("subclassing"),je=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){l=s(z,"P",{});var C=r(l);b=d(C,"TensorFlow models and layers in "),f=s(C,"CODE",{});var to=r(f);p=d(to,"transformers"),to.forEach(t),_=d(C," accept two formats as input:"),C.forEach(t),n=m(z),c=s(z,"UL",{});var Ie=r(c);B=s(Ie,"LI",{});var ke=r(B);de=d(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),H=m(Ie),I=s(Ie,"LI",{});var tt=r(I);fe=d(tt,"having all inputs as a list, tuple or dict in the first positional argument."),tt.forEach(t),Ie.forEach(t),Qe=m(z),j=s(z,"P",{});var P=r(j);we=d(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),$e=s(P,"CODE",{});var ot=r($e);bt=d(ot,"model.fit()"),ot.forEach(t),dt=d(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=s(P,"CODE",{});var oo=r(Q);_e=d(oo,"model.fit()"),oo.forEach(t),Ve=d(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=s(P,"CODE",{});var no=r(Y);kt=d(no,"fit()"),no.forEach(t),Je=d(P," and "),xe=s(P,"CODE",{});var ao=r(xe);lt=d(ao,"predict()"),ao.forEach(t),ge=d(P,`, such as when creating your own layers or models with
the Keras `),Fe=s(P,"CODE",{});var ue=r(Fe);ze=d(ue,"Functional"),ue.forEach(t),yt=d(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),Ke=m(z),O=s(z,"UL",{});var he=r(O);N=s(he,"LI",{});var ne=r(N);vt=d(ne,"a single Tensor with "),be=s(ne,"CODE",{});var so=r(be);oe=d(so,"input_ids"),so.forEach(t),Xe=d(ne," only and nothing else: "),Be=s(ne,"CODE",{});var ro=r(Be);Tt=d(ro,"model(input_ids)"),ro.forEach(t),ne.forEach(t),Ze=m(he),V=s(he,"LI",{});var me=r(V);wt=d(me,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),le=s(me,"CODE",{});var io=r(le);$t=d(io,"model([input_ids, attention_mask])"),io.forEach(t),ct=d(me," or "),W=s(me,"CODE",{});var lo=r(W);xt=d(lo,"model([input_ids, attention_mask, token_type_ids])"),lo.forEach(t),me.forEach(t),qe=m(he),ce=s(he,"LI",{});var Ce=r(ce);Ft=d(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=s(Ce,"CODE",{});var co=r(ee);zt=d(co,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),co.forEach(t),Ce.forEach(t),he.forEach(t),Ye=m(z),U=s(z,"P",{});var nt=r(U);pe=d(nt,`Note that when creating models and layers with
`),L=s(nt,"A",{href:!0,rel:!0});var po=r(L);et=d(po,"subclassing"),po.forEach(t),je=d(nt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),nt.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(z,C){k(z,l,C),e(l,b),e(l,f),e(f,p),e(l,_),k(z,n,C),k(z,c,C),e(c,B),e(B,de),e(c,H),e(c,I),e(I,fe),k(z,Qe,C),k(z,j,C),e(j,we),e(j,$e),e($e,bt),e(j,dt),e(j,Q),e(Q,_e),e(j,Ve),e(j,Y),e(Y,kt),e(j,Je),e(j,xe),e(xe,lt),e(j,ge),e(j,Fe),e(Fe,ze),e(j,yt),k(z,Ke,C),k(z,O,C),e(O,N),e(N,vt),e(N,be),e(be,oe),e(N,Xe),e(N,Be),e(Be,Tt),e(O,Ze),e(O,V),e(V,wt),e(V,le),e(le,$t),e(V,ct),e(V,W),e(W,xt),e(O,qe),e(O,ce),e(ce,Ft),e(ce,ee),e(ee,zt),k(z,Ye,C),k(z,U,C),e(U,pe),e(U,L),e(L,et),e(U,je)},d(z){z&&t(l),z&&t(n),z&&t(c),z&&t(Qe),z&&t(j),z&&t(Ke),z&&t(O),z&&t(Ye),z&&t(U)}}}function _2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function g2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, TFBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function b2(F){let l,b,f,p,_,n,c,B,de,H,I,fe,Qe,j,we,$e,bt,dt,Q,_e,Ve,Y,kt,Je,xe,lt,ge,Fe,ze,yt,Ke,O,N,vt,be,oe,Xe,Be,Tt,Ze,V,wt,le,$t,ct,W,xt,qe,ce,Ft,ee,zt,Ye,U,pe,L,et,je;return{c(){l=a("p"),b=i("TensorFlow models and layers in "),f=a("code"),p=i("transformers"),_=i(" accept two formats as input:"),n=h(),c=a("ul"),B=a("li"),de=i("having all inputs as keyword arguments (like PyTorch models), or"),H=h(),I=a("li"),fe=i("having all inputs as a list, tuple or dict in the first positional argument."),Qe=h(),j=a("p"),we=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),$e=a("code"),bt=i("model.fit()"),dt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),_e=i("model.fit()"),Ve=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),kt=i("fit()"),Je=i(" and "),xe=a("code"),lt=i("predict()"),ge=i(`, such as when creating your own layers or models with
the Keras `),Fe=a("code"),ze=i("Functional"),yt=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ke=h(),O=a("ul"),N=a("li"),vt=i("a single Tensor with "),be=a("code"),oe=i("input_ids"),Xe=i(" only and nothing else: "),Be=a("code"),Tt=i("model(input_ids)"),Ze=h(),V=a("li"),wt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),le=a("code"),$t=i("model([input_ids, attention_mask])"),ct=i(" or "),W=a("code"),xt=i("model([input_ids, attention_mask, token_type_ids])"),qe=h(),ce=a("li"),Ft=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),zt=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye=h(),U=a("p"),pe=i(`Note that when creating models and layers with
`),L=a("a"),et=i("subclassing"),je=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){l=s(z,"P",{});var C=r(l);b=d(C,"TensorFlow models and layers in "),f=s(C,"CODE",{});var to=r(f);p=d(to,"transformers"),to.forEach(t),_=d(C," accept two formats as input:"),C.forEach(t),n=m(z),c=s(z,"UL",{});var Ie=r(c);B=s(Ie,"LI",{});var ke=r(B);de=d(ke,"having all inputs as keyword arguments (like PyTorch models), or"),ke.forEach(t),H=m(Ie),I=s(Ie,"LI",{});var tt=r(I);fe=d(tt,"having all inputs as a list, tuple or dict in the first positional argument."),tt.forEach(t),Ie.forEach(t),Qe=m(z),j=s(z,"P",{});var P=r(j);we=d(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),$e=s(P,"CODE",{});var ot=r($e);bt=d(ot,"model.fit()"),ot.forEach(t),dt=d(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=s(P,"CODE",{});var oo=r(Q);_e=d(oo,"model.fit()"),oo.forEach(t),Ve=d(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=s(P,"CODE",{});var no=r(Y);kt=d(no,"fit()"),no.forEach(t),Je=d(P," and "),xe=s(P,"CODE",{});var ao=r(xe);lt=d(ao,"predict()"),ao.forEach(t),ge=d(P,`, such as when creating your own layers or models with
the Keras `),Fe=s(P,"CODE",{});var ue=r(Fe);ze=d(ue,"Functional"),ue.forEach(t),yt=d(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),Ke=m(z),O=s(z,"UL",{});var he=r(O);N=s(he,"LI",{});var ne=r(N);vt=d(ne,"a single Tensor with "),be=s(ne,"CODE",{});var so=r(be);oe=d(so,"input_ids"),so.forEach(t),Xe=d(ne," only and nothing else: "),Be=s(ne,"CODE",{});var ro=r(Be);Tt=d(ro,"model(input_ids)"),ro.forEach(t),ne.forEach(t),Ze=m(he),V=s(he,"LI",{});var me=r(V);wt=d(me,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),le=s(me,"CODE",{});var io=r(le);$t=d(io,"model([input_ids, attention_mask])"),io.forEach(t),ct=d(me," or "),W=s(me,"CODE",{});var lo=r(W);xt=d(lo,"model([input_ids, attention_mask, token_type_ids])"),lo.forEach(t),me.forEach(t),qe=m(he),ce=s(he,"LI",{});var Ce=r(ce);Ft=d(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=s(Ce,"CODE",{});var co=r(ee);zt=d(co,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),co.forEach(t),Ce.forEach(t),he.forEach(t),Ye=m(z),U=s(z,"P",{});var nt=r(U);pe=d(nt,`Note that when creating models and layers with
`),L=s(nt,"A",{href:!0,rel:!0});var po=r(L);et=d(po,"subclassing"),po.forEach(t),je=d(nt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),nt.forEach(t),this.h()},h(){u(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(L,"rel","nofollow")},m(z,C){k(z,l,C),e(l,b),e(l,f),e(f,p),e(l,_),k(z,n,C),k(z,c,C),e(c,B),e(B,de),e(c,H),e(c,I),e(I,fe),k(z,Qe,C),k(z,j,C),e(j,we),e(j,$e),e($e,bt),e(j,dt),e(j,Q),e(Q,_e),e(j,Ve),e(j,Y),e(Y,kt),e(j,Je),e(j,xe),e(xe,lt),e(j,ge),e(j,Fe),e(Fe,ze),e(j,yt),k(z,Ke,C),k(z,O,C),e(O,N),e(N,vt),e(N,be),e(be,oe),e(N,Xe),e(N,Be),e(Be,Tt),e(O,Ze),e(O,V),e(V,wt),e(V,le),e(le,$t),e(V,ct),e(V,W),e(W,xt),e(O,qe),e(O,ce),e(ce,Ft),e(ce,ee),e(ee,zt),k(z,Ye,C),k(z,U,C),e(U,pe),e(U,L),e(L,et),e(U,je)},d(z){z&&t(l),z&&t(n),z&&t(c),z&&t(Qe),z&&t(j),z&&t(Ke),z&&t(O),z&&t(Ye),z&&t(U)}}}function k2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function y2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),b=i("Summarization example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Summarization example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function v2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),b=i("Mask filling example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Mask filling example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function T2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function w2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function $2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function x2(F){let l,b,f,p,_;return p=new E({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function F2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function z2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),b=i("Summarization example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Summarization example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function B2(F){let l,b,f,p,_;return p=new E({props:{code:`import jax
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),b=i("Mask filling example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Mask filling example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function q2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function j2(F){let l,b,f,p,_;return p=new E({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function C2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function E2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function M2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function A2(F){let l,b,f,p,_;return p=new E({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function P2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function S2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function O2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function I2(F){let l,b,f,p,_;return p=new E({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function N2(F){let l,b,f,p,_;return{c(){l=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(c,"CODE",{});var B=r(f);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){k(n,l,c),e(l,b),e(l,f),e(f,p),e(l,_)},d(n){n&&t(l)}}}function L2(F){let l,b,f,p,_;return p=new E({props:{code:`from transformers import BartTokenizer, FlaxBartForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){l=a("p"),b=i("Example:"),f=h(),y(p.$$.fragment)},l(n){l=s(n,"P",{});var c=r(l);b=d(c,"Example:"),c.forEach(t),f=m(n),v(p.$$.fragment,n)},m(n,c){k(n,l,c),e(l,b),k(n,f,c),T(p,n,c),_=!0},p:A,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(f),x(p,n)}}}function D2(F){let l,b,f,p,_,n,c,B,de,H,I,fe,Qe,j,we,$e,bt,dt,Q,_e,Ve,Y,kt,Je,xe,lt,ge,Fe,ze,yt,Ke,O,N,vt,be,oe,Xe,Be,Tt,Ze,V,wt,le,$t,ct,W,xt,qe,ce,Ft,ee,zt,Ye,U,pe,L,et,je,z,C,to,Ie,ke,tt,P,ot,oo,no,ao,ue,he,ne,so,ro,me,io,lo,Ce,co,nt,po,Zo,La,zh,Bh,Da,qh,jh,Fp,uo,Yo,Xd,Ga,Ch,Zd,Eh,zp,Ne,Bt,Mh,Yd,Ah,Ph,Ui,Sh,Oh,Ri,Ih,Nh,Lh,ho,Dh,Hi,Gh,Wh,el,Uh,Rh,Hh,mo,Qh,tl,Vh,Jh,ol,Kh,Xh,Zh,Qi,Vi,Yh,em,tm,fo,om,nl,nm,am,al,sm,rm,Bp,_o,en,sl,Wa,im,rl,dm,qp,St,lm,il,cm,pm,dl,um,hm,jp,Ua,Cp,go,tn,ll,Ra,mm,cl,fm,Ep,Ji,_m,Mp,Ha,Ap,ae,Qa,gm,Va,bm,km,ym,Ja,vm,Ka,Tm,wm,$m,Xa,xm,Za,Fm,zm,Bm,Ot,Ki,qm,jm,Ya,Cm,Em,es,Mm,Am,Pm,It,Xi,Sm,Om,ts,Im,Nm,os,Lm,Dm,Gm,on,Zi,Wm,Um,ns,Rm,Hm,Qm,Yi,as,Vm,Jm,Pp,ss,Sp,pt,Nt,ed,Km,Xm,rs,Zm,Ym,is,ef,tf,of,Lt,td,nf,af,ds,sf,rf,ls,df,lf,cf,Dt,od,pf,uf,cs,hf,mf,ps,ff,_f,gf,nd,us,bf,kf,Op,hs,Ip,Gt,ms,yf,fs,vf,Tf,wf,Wt,ad,$f,xf,_s,Ff,zf,gs,Bf,qf,jf,Ut,sd,Cf,Ef,bs,Mf,Af,ks,Pf,Sf,Np,bo,nn,pl,ys,Of,ul,If,Lp,at,vs,Nf,ko,Lf,rd,Df,Gf,Ts,Wf,Uf,Rf,yo,Hf,id,Qf,Vf,dd,Jf,Kf,Xf,an,Dp,vo,sn,hl,ws,Zf,ml,Yf,Gp,S,$s,e_,fl,t_,o_,_l,n_,a_,rn,s_,xs,r_,gl,i_,d_,l_,dn,c_,Fs,p_,ld,u_,h_,m_,Rt,zs,f_,bl,__,g_,Bs,cd,b_,kl,k_,y_,pd,v_,yl,T_,w_,ln,qs,$_,vl,x_,F_,cn,js,z_,Tl,B_,q_,pn,Cs,j_,Es,C_,wl,E_,M_,Wp,To,un,$l,Ms,A_,xl,P_,Up,J,As,S_,Ps,O_,Fl,I_,N_,L_,zl,D_,G_,hn,W_,Ss,U_,Bl,R_,H_,Q_,mn,V_,Os,J_,ud,K_,X_,Z_,fn,Is,Y_,ql,eg,Rp,wo,_n,jl,Ns,tg,Cl,og,Hp,st,Ls,ng,Ds,ag,hd,sg,rg,ig,Gs,dg,Ws,lg,cg,pg,ut,Us,ug,$o,hg,md,mg,fg,El,_g,gg,bg,gn,kg,bn,Qp,xo,kn,Ml,Rs,yg,Al,vg,Vp,rt,Hs,Tg,Qs,wg,fd,$g,xg,Fg,Vs,zg,Js,Bg,qg,jg,Le,Ks,Cg,Fo,Eg,_d,Mg,Ag,Pl,Pg,Sg,Og,yn,Ig,vn,Ng,Tn,Jp,zo,wn,Sl,Xs,Lg,Ol,Dg,Kp,Ee,Zs,Gg,Il,Wg,Ug,Ys,Rg,gd,Hg,Qg,Vg,er,Jg,tr,Kg,Xg,Zg,se,or,Yg,Bo,eb,bd,tb,ob,Nl,nb,ab,sb,$n,rb,xn,ib,Fn,db,zn,lb,Bn,Xp,qo,qn,Ll,nr,cb,Dl,pb,Zp,Me,ar,ub,jo,hb,Gl,mb,fb,Wl,_b,gb,bb,sr,kb,kd,yb,vb,Tb,rr,wb,ir,$b,xb,Fb,De,dr,zb,Co,Bb,yd,qb,jb,Ul,Cb,Eb,Mb,jn,Ab,Cn,Pb,En,Yp,Eo,Mn,Rl,lr,Sb,Hl,Ob,eu,Ae,cr,Ib,Ql,Nb,Lb,pr,Db,vd,Gb,Wb,Ub,ur,Rb,hr,Hb,Qb,Vb,An,mr,Jb,Pn,tu,Mo,Sn,Vl,fr,Kb,Jl,Xb,ou,Pe,_r,Zb,gr,Yb,Td,ek,tk,ok,br,nk,kr,ak,sk,rk,On,ik,ht,yr,dk,Ao,lk,wd,ck,pk,Kl,uk,hk,mk,In,fk,Nn,nu,Po,Ln,Xl,vr,_k,Zl,gk,au,Se,Tr,bk,wr,kk,$d,yk,vk,Tk,$r,wk,xr,$k,xk,Fk,Dn,zk,Ge,Fr,Bk,So,qk,xd,jk,Ck,Yl,Ek,Mk,Ak,Gn,Pk,Wn,Sk,Un,su,Oo,Rn,ec,zr,Ok,tc,Ik,ru,K,Br,Nk,qr,Lk,Fd,Dk,Gk,Wk,jr,Uk,Cr,Rk,Hk,Qk,oc,Vk,Jk,qt,nc,Er,Kk,Xk,ac,Mr,Zk,Yk,sc,Ar,ey,ty,rc,Pr,oy,ny,mt,Sr,ay,Io,sy,ic,ry,iy,dc,dy,ly,cy,Hn,py,Qn,uy,Vn,Or,hy,Jn,my,Kn,Ir,fy,Xn,iu,No,Zn,lc,Nr,_y,cc,gy,du,X,Lr,by,Dr,ky,zd,yy,vy,Ty,Gr,wy,Wr,$y,xy,Fy,pc,zy,By,jt,uc,Ur,qy,jy,hc,Rr,Cy,Ey,mc,Hr,My,Ay,fc,Qr,Py,Sy,We,Vr,Oy,Lo,Iy,_c,Ny,Ly,gc,Dy,Gy,Wy,Yn,Uy,ea,Ry,ta,Hy,oa,Jr,Qy,na,Vy,aa,Kr,Jy,sa,lu,Do,ra,bc,Xr,Ky,kc,Xy,cu,D,Zr,Zy,yc,Yy,ev,Yr,tv,Bd,ov,nv,av,ei,sv,ti,rv,iv,dv,vc,lv,cv,Ct,Tc,oi,pv,uv,wc,ni,hv,mv,$c,ai,fv,_v,xc,si,gv,bv,ft,ri,kv,Go,yv,Fc,vv,Tv,zc,wv,$v,xv,ia,Fv,da,zv,la,ii,Bv,ca,qv,pa,di,jv,ua,pu,Wo,ha,Bc,li,Cv,qc,Ev,uu,G,ci,Mv,Uo,Av,jc,Pv,Sv,Cc,Ov,Iv,Nv,pi,Lv,qd,Dv,Gv,Wv,ui,Uv,hi,Rv,Hv,Qv,Ec,Vv,Jv,Et,Mc,mi,Kv,Xv,Ac,fi,Zv,Yv,Pc,_i,eT,tT,Sc,gi,oT,nT,_t,bi,aT,Ro,sT,Oc,rT,iT,Ic,dT,lT,cT,ma,pT,fa,uT,_a,ki,hT,ga,mT,ba,yi,fT,ka,hu,Ho,ya,Nc,vi,_T,Lc,gT,mu,te,Ti,bT,Dc,kT,yT,wi,vT,jd,TT,wT,$T,$i,xT,xi,FT,zT,BT,Gc,qT,jT,Mt,Wc,Fi,CT,ET,Uc,zi,MT,AT,Rc,Bi,PT,ST,Hc,qi,OT,IT,gt,ji,NT,Qo,LT,Qc,DT,GT,Vc,WT,UT,RT,va,HT,Ta,fu;return n=new Z({}),Y=new Z({}),je=new Z({}),Ga=new Z({}),Wa=new Z({}),Ua=new E({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

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
]`}}),Ra=new Z({}),Ha=new ZT({props:{pipeline:"summarization"}}),ss=new ZT({props:{pipeline:"fill-mask"}}),hs=new ZT({props:{pipeline:"translation"}}),ys=new Z({}),vs=new q({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/configuration_bart.py#L35"}}),an=new M({props:{anchor:"transformers.BartConfig.example",$$slots:{default:[Kx]},$$scope:{ctx:F}}}),ws=new Z({}),$s=new q({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L101"}}),rn=new M({props:{anchor:"transformers.BartTokenizer.example",$$slots:{default:[Xx]},$$scope:{ctx:F}}}),dn=new Oe({props:{$$slots:{default:[Zx]},$$scope:{ctx:F}}}),zs=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
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
`}}),Ms=new Z({}),As=new q({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart_fast.py#L70"}}),hn=new M({props:{anchor:"transformers.BartTokenizerFast.example",$$slots:{default:[Yx]},$$scope:{ctx:F}}}),mn=new Oe({props:{$$slots:{default:[e2]},$$scope:{ctx:F}}}),Is=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart_fast.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ns=new Z({}),Ls=new q({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1182",returnDescription:`
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
`}}),gn=new Oe({props:{$$slots:{default:[t2]},$$scope:{ctx:F}}}),bn=new M({props:{anchor:"transformers.BartModel.forward.example",$$slots:{default:[o2]},$$scope:{ctx:F}}}),Rs=new Z({}),Hs=new q({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1282"}}),Ks=new q({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1321",returnDescription:`
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
`}}),yn=new Oe({props:{$$slots:{default:[n2]},$$scope:{ctx:F}}}),vn=new M({props:{anchor:"transformers.BartForConditionalGeneration.forward.example",$$slots:{default:[a2]},$$scope:{ctx:F}}}),Tn=new M({props:{anchor:"transformers.BartForConditionalGeneration.forward.example-2",$$slots:{default:[s2]},$$scope:{ctx:F}}}),Xs=new Z({}),Zs=new q({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1453"}}),or=new q({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1466",returnDescription:`
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
`}}),$n=new Oe({props:{$$slots:{default:[r2]},$$scope:{ctx:F}}}),xn=new M({props:{anchor:"transformers.BartForSequenceClassification.forward.example",$$slots:{default:[i2]},$$scope:{ctx:F}}}),Fn=new M({props:{anchor:"transformers.BartForSequenceClassification.forward.example-2",$$slots:{default:[d2]},$$scope:{ctx:F}}}),zn=new M({props:{anchor:"transformers.BartForSequenceClassification.forward.example-3",$$slots:{default:[l2]},$$scope:{ctx:F}}}),Bn=new M({props:{anchor:"transformers.BartForSequenceClassification.forward.example-4",$$slots:{default:[c2]},$$scope:{ctx:F}}}),nr=new Z({}),ar=new q({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1580"}}),dr=new q({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1592",returnDescription:`
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
`}}),jn=new Oe({props:{$$slots:{default:[p2]},$$scope:{ctx:F}}}),Cn=new M({props:{anchor:"transformers.BartForQuestionAnswering.forward.example",$$slots:{default:[u2]},$$scope:{ctx:F}}}),En=new M({props:{anchor:"transformers.BartForQuestionAnswering.forward.example-2",$$slots:{default:[h2]},$$scope:{ctx:F}}}),lr=new Z({}),cr=new q({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1716"}}),mr=new q({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1747",returnDescription:`
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
`}}),Pn=new M({props:{anchor:"transformers.BartForCausalLM.forward.example",$$slots:{default:[m2]},$$scope:{ctx:F}}}),fr=new Z({}),_r=new q({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1169"}}),On=new Oe({props:{$$slots:{default:[f2]},$$scope:{ctx:F}}}),yr=new q({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),In=new Oe({props:{$$slots:{default:[_2]},$$scope:{ctx:F}}}),Nn=new M({props:{anchor:"transformers.TFBartModel.call.example",$$slots:{default:[g2]},$$scope:{ctx:F}}}),vr=new Z({}),Tr=new q({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1277"}}),Dn=new Oe({props:{$$slots:{default:[b2]},$$scope:{ctx:F}}}),Fr=new q({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
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
`}}),Gn=new Oe({props:{$$slots:{default:[k2]},$$scope:{ctx:F}}}),Wn=new M({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example",$$slots:{default:[y2]},$$scope:{ctx:F}}}),Un=new M({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example-2",$$slots:{default:[v2]},$$scope:{ctx:F}}}),zr=new Z({}),Br=new q({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Hn=new Oe({props:{$$slots:{default:[T2]},$$scope:{ctx:F}}}),Qn=new M({props:{anchor:"transformers.FlaxBartModel.__call__.example",$$slots:{default:[w2]},$$scope:{ctx:F}}}),Or=new q({props:{name:"encode",anchor:"transformers.FlaxBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Jn=new M({props:{anchor:"transformers.FlaxBartModel.encode.example",$$slots:{default:[$2]},$$scope:{ctx:F}}}),Ir=new q({props:{name:"decode",anchor:"transformers.FlaxBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),Xn=new M({props:{anchor:"transformers.FlaxBartModel.decode.example",$$slots:{default:[x2]},$$scope:{ctx:F}}}),Nr=new Z({}),Lr=new q({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Yn=new Oe({props:{$$slots:{default:[F2]},$$scope:{ctx:F}}}),ea=new M({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example",$$slots:{default:[z2]},$$scope:{ctx:F}}}),ta=new M({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example-2",$$slots:{default:[B2]},$$scope:{ctx:F}}}),Jr=new q({props:{name:"encode",anchor:"transformers.FlaxBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),na=new M({props:{anchor:"transformers.FlaxBartForConditionalGeneration.encode.example",$$slots:{default:[q2]},$$scope:{ctx:F}}}),Kr=new q({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),sa=new M({props:{anchor:"transformers.FlaxBartForConditionalGeneration.decode.example",$$slots:{default:[j2]},$$scope:{ctx:F}}}),Xr=new Z({}),Zr=new q({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),ia=new Oe({props:{$$slots:{default:[C2]},$$scope:{ctx:F}}}),da=new M({props:{anchor:"transformers.FlaxBartForSequenceClassification.__call__.example",$$slots:{default:[E2]},$$scope:{ctx:F}}}),ii=new q({props:{name:"encode",anchor:"transformers.FlaxBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ca=new M({props:{anchor:"transformers.FlaxBartForSequenceClassification.encode.example",$$slots:{default:[M2]},$$scope:{ctx:F}}}),di=new q({props:{name:"decode",anchor:"transformers.FlaxBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),ua=new M({props:{anchor:"transformers.FlaxBartForSequenceClassification.decode.example",$$slots:{default:[A2]},$$scope:{ctx:F}}}),li=new Z({}),ci=new q({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),ma=new Oe({props:{$$slots:{default:[P2]},$$scope:{ctx:F}}}),fa=new M({props:{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.example",$$slots:{default:[S2]},$$scope:{ctx:F}}}),ki=new q({props:{name:"encode",anchor:"transformers.FlaxBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ga=new M({props:{anchor:"transformers.FlaxBartForQuestionAnswering.encode.example",$$slots:{default:[O2]},$$scope:{ctx:F}}}),yi=new q({props:{name:"decode",anchor:"transformers.FlaxBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
`}}),ka=new M({props:{anchor:"transformers.FlaxBartForQuestionAnswering.decode.example",$$slots:{default:[I2]},$$scope:{ctx:F}}}),vi=new Z({}),Ti=new q({props:{name:"class transformers.FlaxBartForCausalLM",anchor:"transformers.FlaxBartForCausalLM",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),va=new Oe({props:{$$slots:{default:[N2]},$$scope:{ctx:F}}}),Ta=new M({props:{anchor:"transformers.FlaxBartForCausalLM.__call__.example",$$slots:{default:[L2]},$$scope:{ctx:F}}}),{c(){l=a("meta"),b=h(),f=a("h1"),p=a("a"),_=a("span"),y(n.$$.fragment),c=h(),B=a("span"),de=i("BART"),H=h(),I=a("p"),fe=a("strong"),Qe=i("DISCLAIMER:"),j=i(" If you see something strange, file a "),we=a("a"),$e=i("Github Issue"),bt=i(` and assign
@patrickvonplaten`),dt=h(),Q=a("h2"),_e=a("a"),Ve=a("span"),y(Y.$$.fragment),kt=h(),Je=a("span"),xe=i("Overview"),lt=h(),ge=a("p"),Fe=i("The Bart model was proposed in "),ze=a("a"),yt=i(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),Ke=i(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),O=h(),N=a("p"),vt=i("According to the abstract,"),be=h(),oe=a("ul"),Xe=a("li"),Be=i(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Tt=h(),Ze=a("li"),V=i(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),wt=h(),le=a("li"),$t=i(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),ct=h(),W=a("p"),xt=i("This model was contributed by "),qe=a("a"),ce=i("sshleifer"),Ft=i(". The Authors\u2019 code can be found "),ee=a("a"),zt=i("here"),Ye=i("."),U=h(),pe=a("h3"),L=a("a"),et=a("span"),y(je.$$.fragment),z=h(),C=a("span"),to=i("Examples"),Ie=h(),ke=a("ul"),tt=a("li"),P=i(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),ot=a("a"),oo=i("examples/pytorch/summarization/"),no=i("."),ao=h(),ue=a("li"),he=i("An example of how to train "),ne=a("a"),so=i("BartForConditionalGeneration"),ro=i(" with a Hugging Face "),me=a("code"),io=i("datasets"),lo=i(`
object can be found in this `),Ce=a("a"),co=i("forum discussion"),nt=i("."),po=h(),Zo=a("li"),La=a("a"),zh=i("Distilled checkpoints"),Bh=i(" are described in this "),Da=a("a"),qh=i("paper"),jh=i("."),Fp=h(),uo=a("h2"),Yo=a("a"),Xd=a("span"),y(Ga.$$.fragment),Ch=h(),Zd=a("span"),Eh=i("Implementation Notes"),zp=h(),Ne=a("ul"),Bt=a("li"),Mh=i("Bart doesn\u2019t use "),Yd=a("code"),Ah=i("token_type_ids"),Ph=i(" for sequence classification. Use "),Ui=a("a"),Sh=i("BartTokenizer"),Oh=i(` or
`),Ri=a("a"),Ih=i("encode()"),Nh=i(" to get the proper splitting."),Lh=h(),ho=a("li"),Dh=i("The forward pass of "),Hi=a("a"),Gh=i("BartModel"),Wh=i(" will create the "),el=a("code"),Uh=i("decoder_input_ids"),Rh=i(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),Hh=h(),mo=a("li"),Qh=i(`Model predictions are intended to be identical to the original implementation when
`),tl=a("code"),Vh=i("forced_bos_token_id=0"),Jh=i(`. This only works, however, if the string you pass to
`),ol=a("code"),Kh=i("fairseq.encode"),Xh=i(" starts with a space."),Zh=h(),Qi=a("li"),Vi=a("a"),Yh=i("generate()"),em=i(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),tm=h(),fo=a("li"),om=i("Models that load the "),nl=a("em"),nm=i("facebook/bart-large-cnn"),am=i(" weights will not have a "),al=a("code"),sm=i("mask_token_id"),rm=i(`, or be able to perform
mask-filling tasks.`),Bp=h(),_o=a("h2"),en=a("a"),sl=a("span"),y(Wa.$$.fragment),im=h(),rl=a("span"),dm=i("Mask Filling"),qp=h(),St=a("p"),lm=i("The "),il=a("code"),cm=i("facebook/bart-base"),pm=i(" and "),dl=a("code"),um=i("facebook/bart-large"),hm=i(" checkpoints can be used to fill multi-token masks."),jp=h(),y(Ua.$$.fragment),Cp=h(),go=a("h2"),tn=a("a"),ll=a("span"),y(Ra.$$.fragment),mm=h(),cl=a("span"),fm=i("Resources"),Ep=h(),Ji=a("p"),_m=i("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with BART. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Mp=h(),y(Ha.$$.fragment),Ap=h(),ae=a("ul"),Qa=a("li"),gm=i("A blog post on "),Va=a("a"),bm=i("Distributed Training: Train BART/T5 for Summarization using \u{1F917} Transformers and Amazon SageMaker"),km=i("."),ym=h(),Ja=a("li"),vm=i("A notebook on how to "),Ka=a("a"),Tm=i("finetune BART for summarization with fastai using blurr"),wm=i(". \u{1F30E}"),$m=h(),Xa=a("li"),xm=i("A notebook on how to "),Za=a("a"),Fm=i("finetune BART for summarization in two languages with Trainer class"),zm=i(". \u{1F30E}"),Bm=h(),Ot=a("li"),Ki=a("a"),qm=i("BartForConditionalGeneration"),jm=i(" is supported by this "),Ya=a("a"),Cm=i("example script"),Em=i(" and "),es=a("a"),Mm=i("noteboook"),Am=i("."),Pm=h(),It=a("li"),Xi=a("a"),Sm=i("TFBartForConditionalGeneration"),Om=i(" is supported by this "),ts=a("a"),Im=i("example script"),Nm=i(" and "),os=a("a"),Lm=i("notebook"),Dm=i("."),Gm=h(),on=a("li"),Zi=a("a"),Wm=i("FlaxBartForConditionalGeneration"),Um=i(" is supported by this "),ns=a("a"),Rm=i("example script"),Hm=i("."),Qm=h(),Yi=a("li"),as=a("a"),Vm=i("Summarization"),Jm=i(" chapter of the \u{1F917} Hugging Face course."),Pp=h(),y(ss.$$.fragment),Sp=h(),pt=a("ul"),Nt=a("li"),ed=a("a"),Km=i("BartForConditionalGeneration"),Xm=i(" is supported by this "),rs=a("a"),Zm=i("example script"),Ym=i(" and "),is=a("a"),ef=i("notebook"),tf=i("."),of=h(),Lt=a("li"),td=a("a"),nf=i("TFBartForConditionalGeneration"),af=i(" is supported by this "),ds=a("a"),sf=i("example script"),rf=i(" and "),ls=a("a"),df=i("notebook"),lf=i("."),cf=h(),Dt=a("li"),od=a("a"),pf=i("FlaxBartForConditionalGeneration"),uf=i(" is supported by this "),cs=a("a"),hf=i("example script"),mf=i(" and "),ps=a("a"),ff=i("notebook"),_f=i("."),gf=h(),nd=a("li"),us=a("a"),bf=i("Masked language modeling"),kf=i(" chapter of the \u{1F917} Hugging Face Course."),Op=h(),y(hs.$$.fragment),Ip=h(),Gt=a("ul"),ms=a("li"),yf=i("A notebook on how to "),fs=a("a"),vf=i("finetune mBART using Seq2SeqTrainer for Hindi to English translation"),Tf=i(". \u{1F30E}"),wf=h(),Wt=a("li"),ad=a("a"),$f=i("BartForConditionalGeneration"),xf=i(" is supported by this "),_s=a("a"),Ff=i("example script"),zf=i(" and "),gs=a("a"),Bf=i("notebook"),qf=i("."),jf=h(),Ut=a("li"),sd=a("a"),Cf=i("TFBartForConditionalGeneration"),Ef=i(" is supported by this "),bs=a("a"),Mf=i("example script"),Af=i(" and "),ks=a("a"),Pf=i("notebook"),Sf=i("."),Np=h(),bo=a("h2"),nn=a("a"),pl=a("span"),y(ys.$$.fragment),Of=h(),ul=a("span"),If=i("BartConfig"),Lp=h(),at=a("div"),y(vs.$$.fragment),Nf=h(),ko=a("p"),Lf=i("This is the configuration class to store the configuration of a "),rd=a("a"),Df=i("BartModel"),Gf=i(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Ts=a("a"),Wf=i("facebook/bart-large"),Uf=i(" architecture."),Rf=h(),yo=a("p"),Hf=i("Configuration objects inherit from "),id=a("a"),Qf=i("PretrainedConfig"),Vf=i(` and can be used to control the model outputs. Read the
documentation from `),dd=a("a"),Jf=i("PretrainedConfig"),Kf=i(" for more information."),Xf=h(),y(an.$$.fragment),Dp=h(),vo=a("h2"),sn=a("a"),hl=a("span"),y(ws.$$.fragment),Zf=h(),ml=a("span"),Yf=i("BartTokenizer"),Gp=h(),S=a("div"),y($s.$$.fragment),e_=h(),fl=a("p"),t_=i("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),o_=h(),_l=a("p"),n_=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),a_=h(),y(rn.$$.fragment),s_=h(),xs=a("p"),r_=i("You can get around that behavior by passing "),gl=a("code"),i_=i("add_prefix_space=True"),d_=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),l_=h(),y(dn.$$.fragment),c_=h(),Fs=a("p"),p_=i("This tokenizer inherits from "),ld=a("a"),u_=i("PreTrainedTokenizer"),h_=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),m_=h(),Rt=a("div"),y(zs.$$.fragment),f_=h(),bl=a("p"),__=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),g_=h(),Bs=a("ul"),cd=a("li"),b_=i("single sequence: "),kl=a("code"),k_=i("<s> X </s>"),y_=h(),pd=a("li"),v_=i("pair of sequences: "),yl=a("code"),T_=i("<s> A </s></s> B </s>"),w_=h(),ln=a("div"),y(qs.$$.fragment),$_=h(),vl=a("p"),x_=i("Converts a sequence of tokens (string) in a single string."),F_=h(),cn=a("div"),y(js.$$.fragment),z_=h(),Tl=a("p"),B_=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),q_=h(),pn=a("div"),y(Cs.$$.fragment),j_=h(),Es=a("p"),C_=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wl=a("code"),E_=i("prepare_for_model"),M_=i(" method."),Wp=h(),To=a("h2"),un=a("a"),$l=a("span"),y(Ms.$$.fragment),A_=h(),xl=a("span"),P_=i("BartTokenizerFast"),Up=h(),J=a("div"),y(As.$$.fragment),S_=h(),Ps=a("p"),O_=i("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Fl=a("em"),I_=i("tokenizers"),N_=i(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),L_=h(),zl=a("p"),D_=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),G_=h(),y(hn.$$.fragment),W_=h(),Ss=a("p"),U_=i("You can get around that behavior by passing "),Bl=a("code"),R_=i("add_prefix_space=True"),H_=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Q_=h(),y(mn.$$.fragment),V_=h(),Os=a("p"),J_=i("This tokenizer inherits from "),ud=a("a"),K_=i("PreTrainedTokenizerFast"),X_=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Z_=h(),fn=a("div"),y(Is.$$.fragment),Y_=h(),ql=a("p"),eg=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Rp=h(),wo=a("h2"),_n=a("a"),jl=a("span"),y(Ns.$$.fragment),tg=h(),Cl=a("span"),og=i("BartModel"),Hp=h(),st=a("div"),y(Ls.$$.fragment),ng=h(),Ds=a("p"),ag=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),hd=a("a"),sg=i("PreTrainedModel"),rg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=h(),Gs=a("p"),dg=i("This model is also a PyTorch "),Ws=a("a"),lg=i("torch.nn.Module"),cg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pg=h(),ut=a("div"),y(Us.$$.fragment),ug=h(),$o=a("p"),hg=i("The "),md=a("a"),mg=i("BartModel"),fg=i(" forward method, overrides the "),El=a("code"),_g=i("__call__"),gg=i(" special method."),bg=h(),y(gn.$$.fragment),kg=h(),y(bn.$$.fragment),Qp=h(),xo=a("h2"),kn=a("a"),Ml=a("span"),y(Rs.$$.fragment),yg=h(),Al=a("span"),vg=i("BartForConditionalGeneration"),Vp=h(),rt=a("div"),y(Hs.$$.fragment),Tg=h(),Qs=a("p"),wg=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),fd=a("a"),$g=i("PreTrainedModel"),xg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fg=h(),Vs=a("p"),zg=i("This model is also a PyTorch "),Js=a("a"),Bg=i("torch.nn.Module"),qg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jg=h(),Le=a("div"),y(Ks.$$.fragment),Cg=h(),Fo=a("p"),Eg=i("The "),_d=a("a"),Mg=i("BartForConditionalGeneration"),Ag=i(" forward method, overrides the "),Pl=a("code"),Pg=i("__call__"),Sg=i(" special method."),Og=h(),y(yn.$$.fragment),Ig=h(),y(vn.$$.fragment),Ng=h(),y(Tn.$$.fragment),Jp=h(),zo=a("h2"),wn=a("a"),Sl=a("span"),y(Xs.$$.fragment),Lg=h(),Ol=a("span"),Dg=i("BartForSequenceClassification"),Kp=h(),Ee=a("div"),y(Zs.$$.fragment),Gg=h(),Il=a("p"),Wg=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Ug=h(),Ys=a("p"),Rg=i("This model inherits from "),gd=a("a"),Hg=i("PreTrainedModel"),Qg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vg=h(),er=a("p"),Jg=i("This model is also a PyTorch "),tr=a("a"),Kg=i("torch.nn.Module"),Xg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zg=h(),se=a("div"),y(or.$$.fragment),Yg=h(),Bo=a("p"),eb=i("The "),bd=a("a"),tb=i("BartForSequenceClassification"),ob=i(" forward method, overrides the "),Nl=a("code"),nb=i("__call__"),ab=i(" special method."),sb=h(),y($n.$$.fragment),rb=h(),y(xn.$$.fragment),ib=h(),y(Fn.$$.fragment),db=h(),y(zn.$$.fragment),lb=h(),y(Bn.$$.fragment),Xp=h(),qo=a("h2"),qn=a("a"),Ll=a("span"),y(nr.$$.fragment),cb=h(),Dl=a("span"),pb=i("BartForQuestionAnswering"),Zp=h(),Me=a("div"),y(ar.$$.fragment),ub=h(),jo=a("p"),hb=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gl=a("code"),mb=i("span start logits"),fb=i(" and "),Wl=a("code"),_b=i("span end logits"),gb=i(")."),bb=h(),sr=a("p"),kb=i("This model inherits from "),kd=a("a"),yb=i("PreTrainedModel"),vb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tb=h(),rr=a("p"),wb=i("This model is also a PyTorch "),ir=a("a"),$b=i("torch.nn.Module"),xb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fb=h(),De=a("div"),y(dr.$$.fragment),zb=h(),Co=a("p"),Bb=i("The "),yd=a("a"),qb=i("BartForQuestionAnswering"),jb=i(" forward method, overrides the "),Ul=a("code"),Cb=i("__call__"),Eb=i(" special method."),Mb=h(),y(jn.$$.fragment),Ab=h(),y(Cn.$$.fragment),Pb=h(),y(En.$$.fragment),Yp=h(),Eo=a("h2"),Mn=a("a"),Rl=a("span"),y(lr.$$.fragment),Sb=h(),Hl=a("span"),Ob=i("BartForCausalLM"),eu=h(),Ae=a("div"),y(cr.$$.fragment),Ib=h(),Ql=a("p"),Nb=i("BART decoder with with a language modeling head on top (linear layer with weights tied to the input embeddings)."),Lb=h(),pr=a("p"),Db=i("This model inherits from "),vd=a("a"),Gb=i("PreTrainedModel"),Wb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ub=h(),ur=a("p"),Rb=i("This model is also a PyTorch "),hr=a("a"),Hb=i("torch.nn.Module"),Qb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vb=h(),An=a("div"),y(mr.$$.fragment),Jb=h(),y(Pn.$$.fragment),tu=h(),Mo=a("h2"),Sn=a("a"),Vl=a("span"),y(fr.$$.fragment),Kb=h(),Jl=a("span"),Xb=i("TFBartModel"),ou=h(),Pe=a("div"),y(_r.$$.fragment),Zb=h(),gr=a("p"),Yb=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Td=a("a"),ek=i("TFPreTrainedModel"),tk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=h(),br=a("p"),nk=i("This model is also a "),kr=a("a"),ak=i("tf.keras.Model"),sk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rk=h(),y(On.$$.fragment),ik=h(),ht=a("div"),y(yr.$$.fragment),dk=h(),Ao=a("p"),lk=i("The "),wd=a("a"),ck=i("TFBartModel"),pk=i(" forward method, overrides the "),Kl=a("code"),uk=i("__call__"),hk=i(" special method."),mk=h(),y(In.$$.fragment),fk=h(),y(Nn.$$.fragment),nu=h(),Po=a("h2"),Ln=a("a"),Xl=a("span"),y(vr.$$.fragment),_k=h(),Zl=a("span"),gk=i("TFBartForConditionalGeneration"),au=h(),Se=a("div"),y(Tr.$$.fragment),bk=h(),wr=a("p"),kk=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),$d=a("a"),yk=i("TFPreTrainedModel"),vk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tk=h(),$r=a("p"),wk=i("This model is also a "),xr=a("a"),$k=i("tf.keras.Model"),xk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fk=h(),y(Dn.$$.fragment),zk=h(),Ge=a("div"),y(Fr.$$.fragment),Bk=h(),So=a("p"),qk=i("The "),xd=a("a"),jk=i("TFBartForConditionalGeneration"),Ck=i(" forward method, overrides the "),Yl=a("code"),Ek=i("__call__"),Mk=i(" special method."),Ak=h(),y(Gn.$$.fragment),Pk=h(),y(Wn.$$.fragment),Sk=h(),y(Un.$$.fragment),su=h(),Oo=a("h2"),Rn=a("a"),ec=a("span"),y(zr.$$.fragment),Ok=h(),tc=a("span"),Ik=i("FlaxBartModel"),ru=h(),K=a("div"),y(Br.$$.fragment),Nk=h(),qr=a("p"),Lk=i(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Fd=a("a"),Dk=i("FlaxPreTrainedModel"),Gk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wk=h(),jr=a("p"),Uk=i(`This model is also a Flax Linen
`),Cr=a("a"),Rk=i("flax.nn.Module"),Hk=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qk=h(),oc=a("p"),Vk=i("Finally, this model supports inherent JAX features such as:"),Jk=h(),qt=a("ul"),nc=a("li"),Er=a("a"),Kk=i("Just-In-Time (JIT) compilation"),Xk=h(),ac=a("li"),Mr=a("a"),Zk=i("Automatic Differentiation"),Yk=h(),sc=a("li"),Ar=a("a"),ey=i("Vectorization"),ty=h(),rc=a("li"),Pr=a("a"),oy=i("Parallelization"),ny=h(),mt=a("div"),y(Sr.$$.fragment),ay=h(),Io=a("p"),sy=i("The "),ic=a("code"),ry=i("FlaxBartPreTrainedModel"),iy=i(" forward method, overrides the "),dc=a("code"),dy=i("__call__"),ly=i(" special method."),cy=h(),y(Hn.$$.fragment),py=h(),y(Qn.$$.fragment),uy=h(),Vn=a("div"),y(Or.$$.fragment),hy=h(),y(Jn.$$.fragment),my=h(),Kn=a("div"),y(Ir.$$.fragment),fy=h(),y(Xn.$$.fragment),iu=h(),No=a("h2"),Zn=a("a"),lc=a("span"),y(Nr.$$.fragment),_y=h(),cc=a("span"),gy=i("FlaxBartForConditionalGeneration"),du=h(),X=a("div"),y(Lr.$$.fragment),by=h(),Dr=a("p"),ky=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zd=a("a"),yy=i("FlaxPreTrainedModel"),vy=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ty=h(),Gr=a("p"),wy=i(`This model is also a Flax Linen
`),Wr=a("a"),$y=i("flax.nn.Module"),xy=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fy=h(),pc=a("p"),zy=i("Finally, this model supports inherent JAX features such as:"),By=h(),jt=a("ul"),uc=a("li"),Ur=a("a"),qy=i("Just-In-Time (JIT) compilation"),jy=h(),hc=a("li"),Rr=a("a"),Cy=i("Automatic Differentiation"),Ey=h(),mc=a("li"),Hr=a("a"),My=i("Vectorization"),Ay=h(),fc=a("li"),Qr=a("a"),Py=i("Parallelization"),Sy=h(),We=a("div"),y(Vr.$$.fragment),Oy=h(),Lo=a("p"),Iy=i("The "),_c=a("code"),Ny=i("FlaxBartPreTrainedModel"),Ly=i(" forward method, overrides the "),gc=a("code"),Dy=i("__call__"),Gy=i(" special method."),Wy=h(),y(Yn.$$.fragment),Uy=h(),y(ea.$$.fragment),Ry=h(),y(ta.$$.fragment),Hy=h(),oa=a("div"),y(Jr.$$.fragment),Qy=h(),y(na.$$.fragment),Vy=h(),aa=a("div"),y(Kr.$$.fragment),Jy=h(),y(sa.$$.fragment),lu=h(),Do=a("h2"),ra=a("a"),bc=a("span"),y(Xr.$$.fragment),Ky=h(),kc=a("span"),Xy=i("FlaxBartForSequenceClassification"),cu=h(),D=a("div"),y(Zr.$$.fragment),Zy=h(),yc=a("p"),Yy=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ev=h(),Yr=a("p"),tv=i("This model inherits from "),Bd=a("a"),ov=i("FlaxPreTrainedModel"),nv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),av=h(),ei=a("p"),sv=i(`This model is also a Flax Linen
`),ti=a("a"),rv=i("flax.nn.Module"),iv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),dv=h(),vc=a("p"),lv=i("Finally, this model supports inherent JAX features such as:"),cv=h(),Ct=a("ul"),Tc=a("li"),oi=a("a"),pv=i("Just-In-Time (JIT) compilation"),uv=h(),wc=a("li"),ni=a("a"),hv=i("Automatic Differentiation"),mv=h(),$c=a("li"),ai=a("a"),fv=i("Vectorization"),_v=h(),xc=a("li"),si=a("a"),gv=i("Parallelization"),bv=h(),ft=a("div"),y(ri.$$.fragment),kv=h(),Go=a("p"),yv=i("The "),Fc=a("code"),vv=i("FlaxBartPreTrainedModel"),Tv=i(" forward method, overrides the "),zc=a("code"),wv=i("__call__"),$v=i(" special method."),xv=h(),y(ia.$$.fragment),Fv=h(),y(da.$$.fragment),zv=h(),la=a("div"),y(ii.$$.fragment),Bv=h(),y(ca.$$.fragment),qv=h(),pa=a("div"),y(di.$$.fragment),jv=h(),y(ua.$$.fragment),pu=h(),Wo=a("h2"),ha=a("a"),Bc=a("span"),y(li.$$.fragment),Cv=h(),qc=a("span"),Ev=i("FlaxBartForQuestionAnswering"),uu=h(),G=a("div"),y(ci.$$.fragment),Mv=h(),Uo=a("p"),Av=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),jc=a("code"),Pv=i("span start logits"),Sv=i(" and "),Cc=a("code"),Ov=i("span end logits"),Iv=i(")."),Nv=h(),pi=a("p"),Lv=i("This model inherits from "),qd=a("a"),Dv=i("FlaxPreTrainedModel"),Gv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wv=h(),ui=a("p"),Uv=i(`This model is also a Flax Linen
`),hi=a("a"),Rv=i("flax.nn.Module"),Hv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qv=h(),Ec=a("p"),Vv=i("Finally, this model supports inherent JAX features such as:"),Jv=h(),Et=a("ul"),Mc=a("li"),mi=a("a"),Kv=i("Just-In-Time (JIT) compilation"),Xv=h(),Ac=a("li"),fi=a("a"),Zv=i("Automatic Differentiation"),Yv=h(),Pc=a("li"),_i=a("a"),eT=i("Vectorization"),tT=h(),Sc=a("li"),gi=a("a"),oT=i("Parallelization"),nT=h(),_t=a("div"),y(bi.$$.fragment),aT=h(),Ro=a("p"),sT=i("The "),Oc=a("code"),rT=i("FlaxBartPreTrainedModel"),iT=i(" forward method, overrides the "),Ic=a("code"),dT=i("__call__"),lT=i(" special method."),cT=h(),y(ma.$$.fragment),pT=h(),y(fa.$$.fragment),uT=h(),_a=a("div"),y(ki.$$.fragment),hT=h(),y(ga.$$.fragment),mT=h(),ba=a("div"),y(yi.$$.fragment),fT=h(),y(ka.$$.fragment),hu=h(),Ho=a("h2"),ya=a("a"),Nc=a("span"),y(vi.$$.fragment),_T=h(),Lc=a("span"),gT=i("FlaxBartForCausalLM"),mu=h(),te=a("div"),y(Ti.$$.fragment),bT=h(),Dc=a("p"),kT=i(`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),yT=h(),wi=a("p"),vT=i("This model inherits from "),jd=a("a"),TT=i("FlaxPreTrainedModel"),wT=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$T=h(),$i=a("p"),xT=i(`This model is also a Flax Linen
`),xi=a("a"),FT=i("flax.nn.Module"),zT=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),BT=h(),Gc=a("p"),qT=i("Finally, this model supports inherent JAX features such as:"),jT=h(),Mt=a("ul"),Wc=a("li"),Fi=a("a"),CT=i("Just-In-Time (JIT) compilation"),ET=h(),Uc=a("li"),zi=a("a"),MT=i("Automatic Differentiation"),AT=h(),Rc=a("li"),Bi=a("a"),PT=i("Vectorization"),ST=h(),Hc=a("li"),qi=a("a"),OT=i("Parallelization"),IT=h(),gt=a("div"),y(ji.$$.fragment),NT=h(),Qo=a("p"),LT=i("The "),Qc=a("code"),DT=i("FlaxBartDecoderPreTrainedModel"),GT=i(" forward method, overrides the "),Vc=a("code"),WT=i("__call__"),UT=i(" special method."),RT=h(),y(va.$$.fragment),HT=h(),y(Ta.$$.fragment),this.h()},l(o){const g=Vx('[data-svelte="svelte-1phssyn"]',document.head);l=s(g,"META",{name:!0,content:!0}),g.forEach(t),b=m(o),f=s(o,"H1",{class:!0});var Ci=r(f);p=s(Ci,"A",{id:!0,class:!0,href:!0});var Jc=r(p);_=s(Jc,"SPAN",{});var Kc=r(_);v(n.$$.fragment,Kc),Kc.forEach(t),Jc.forEach(t),c=m(Ci),B=s(Ci,"SPAN",{});var Xc=r(B);de=d(Xc,"BART"),Xc.forEach(t),Ci.forEach(t),H=m(o),I=s(o,"P",{});var wa=r(I);fe=s(wa,"STRONG",{});var Zc=r(fe);Qe=d(Zc,"DISCLAIMER:"),Zc.forEach(t),j=d(wa," If you see something strange, file a "),we=s(wa,"A",{href:!0,rel:!0});var Yc=r(we);$e=d(Yc,"Github Issue"),Yc.forEach(t),bt=d(wa,` and assign
@patrickvonplaten`),wa.forEach(t),dt=m(o),Q=s(o,"H2",{class:!0});var Ei=r(Q);_e=s(Ei,"A",{id:!0,class:!0,href:!0});var ep=r(_e);Ve=s(ep,"SPAN",{});var tp=r(Ve);v(Y.$$.fragment,tp),tp.forEach(t),ep.forEach(t),kt=m(Ei),Je=s(Ei,"SPAN",{});var op=r(Je);xe=d(op,"Overview"),op.forEach(t),Ei.forEach(t),lt=m(o),ge=s(o,"P",{});var Mi=r(ge);Fe=d(Mi,"The Bart model was proposed in "),ze=s(Mi,"A",{href:!0,rel:!0});var np=r(ze);yt=d(np,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),np.forEach(t),Ke=d(Mi,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),Mi.forEach(t),O=m(o),N=s(o,"P",{});var ap=r(N);vt=d(ap,"According to the abstract,"),ap.forEach(t),be=m(o),oe=s(o,"UL",{});var Vo=r(oe);Xe=s(Vo,"LI",{});var sp=r(Xe);Be=d(sp,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),sp.forEach(t),Tt=m(Vo),Ze=s(Vo,"LI",{});var rp=r(Ze);V=d(rp,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),rp.forEach(t),wt=m(Vo),le=s(Vo,"LI",{});var ip=r(le);$t=d(ip,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),ip.forEach(t),Vo.forEach(t),ct=m(o),W=s(o,"P",{});var Jo=r(W);xt=d(Jo,"This model was contributed by "),qe=s(Jo,"A",{href:!0,rel:!0});var dp=r(qe);ce=d(dp,"sshleifer"),dp.forEach(t),Ft=d(Jo,". The Authors\u2019 code can be found "),ee=s(Jo,"A",{href:!0,rel:!0});var lp=r(ee);zt=d(lp,"here"),lp.forEach(t),Ye=d(Jo,"."),Jo.forEach(t),U=m(o),pe=s(o,"H3",{class:!0});var Ai=r(pe);L=s(Ai,"A",{id:!0,class:!0,href:!0});var cp=r(L);et=s(cp,"SPAN",{});var pp=r(et);v(je.$$.fragment,pp),pp.forEach(t),cp.forEach(t),z=m(Ai),C=s(Ai,"SPAN",{});var up=r(C);to=d(up,"Examples"),up.forEach(t),Ai.forEach(t),Ie=m(o),ke=s(o,"UL",{});var Ko=r(ke);tt=s(Ko,"LI",{});var Pi=r(tt);P=d(Pi,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),ot=s(Pi,"A",{href:!0,rel:!0});var hp=r(ot);oo=d(hp,"examples/pytorch/summarization/"),hp.forEach(t),no=d(Pi,"."),Pi.forEach(t),ao=m(Ko),ue=s(Ko,"LI",{});var At=r(ue);he=d(At,"An example of how to train "),ne=s(At,"A",{href:!0});var mp=r(ne);so=d(mp,"BartForConditionalGeneration"),mp.forEach(t),ro=d(At," with a Hugging Face "),me=s(At,"CODE",{});var fp=r(me);io=d(fp,"datasets"),fp.forEach(t),lo=d(At,`
object can be found in this `),Ce=s(At,"A",{href:!0,rel:!0});var _p=r(Ce);co=d(_p,"forum discussion"),_p.forEach(t),nt=d(At,"."),At.forEach(t),po=m(Ko),Zo=s(Ko,"LI",{});var $a=r(Zo);La=s($a,"A",{href:!0,rel:!0});var gp=r(La);zh=d(gp,"Distilled checkpoints"),gp.forEach(t),Bh=d($a," are described in this "),Da=s($a,"A",{href:!0,rel:!0});var bp=r(Da);qh=d(bp,"paper"),bp.forEach(t),jh=d($a,"."),$a.forEach(t),Ko.forEach(t),Fp=m(o),uo=s(o,"H2",{class:!0});var Si=r(uo);Yo=s(Si,"A",{id:!0,class:!0,href:!0});var kp=r(Yo);Xd=s(kp,"SPAN",{});var yp=r(Xd);v(Ga.$$.fragment,yp),yp.forEach(t),kp.forEach(t),Ch=m(Si),Zd=s(Si,"SPAN",{});var vp=r(Zd);Eh=d(vp,"Implementation Notes"),vp.forEach(t),Si.forEach(t),zp=m(o),Ne=s(o,"UL",{});var it=r(Ne);Bt=s(it,"LI",{});var Pt=r(Bt);Mh=d(Pt,"Bart doesn\u2019t use "),Yd=s(Pt,"CODE",{});var Tp=r(Yd);Ah=d(Tp,"token_type_ids"),Tp.forEach(t),Ph=d(Pt," for sequence classification. Use "),Ui=s(Pt,"A",{href:!0});var wp=r(Ui);Sh=d(wp,"BartTokenizer"),wp.forEach(t),Oh=d(Pt,` or
`),Ri=s(Pt,"A",{href:!0});var $p=r(Ri);Ih=d($p,"encode()"),$p.forEach(t),Nh=d(Pt," to get the proper splitting."),Pt.forEach(t),Lh=m(it),ho=s(it,"LI",{});var Xo=r(ho);Dh=d(Xo,"The forward pass of "),Hi=s(Xo,"A",{href:!0});var YT=r(Hi);Gh=d(YT,"BartModel"),YT.forEach(t),Wh=d(Xo," will create the "),el=s(Xo,"CODE",{});var ew=r(el);Uh=d(ew,"decoder_input_ids"),ew.forEach(t),Rh=d(Xo,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),Xo.forEach(t),Hh=m(it),mo=s(it,"LI",{});var Cd=r(mo);Qh=d(Cd,`Model predictions are intended to be identical to the original implementation when
`),tl=s(Cd,"CODE",{});var tw=r(tl);Vh=d(tw,"forced_bos_token_id=0"),tw.forEach(t),Jh=d(Cd,`. This only works, however, if the string you pass to
`),ol=s(Cd,"CODE",{});var ow=r(ol);Kh=d(ow,"fairseq.encode"),ow.forEach(t),Xh=d(Cd," starts with a space."),Cd.forEach(t),Zh=m(it),Qi=s(it,"LI",{});var QT=r(Qi);Vi=s(QT,"A",{href:!0});var nw=r(Vi);Yh=d(nw,"generate()"),nw.forEach(t),em=d(QT,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),QT.forEach(t),tm=m(it),fo=s(it,"LI",{});var Ed=r(fo);om=d(Ed,"Models that load the "),nl=s(Ed,"EM",{});var aw=r(nl);nm=d(aw,"facebook/bart-large-cnn"),aw.forEach(t),am=d(Ed," weights will not have a "),al=s(Ed,"CODE",{});var sw=r(al);sm=d(sw,"mask_token_id"),sw.forEach(t),rm=d(Ed,`, or be able to perform
mask-filling tasks.`),Ed.forEach(t),it.forEach(t),Bp=m(o),_o=s(o,"H2",{class:!0});var _u=r(_o);en=s(_u,"A",{id:!0,class:!0,href:!0});var rw=r(en);sl=s(rw,"SPAN",{});var iw=r(sl);v(Wa.$$.fragment,iw),iw.forEach(t),rw.forEach(t),im=m(_u),rl=s(_u,"SPAN",{});var dw=r(rl);dm=d(dw,"Mask Filling"),dw.forEach(t),_u.forEach(t),qp=m(o),St=s(o,"P",{});var Md=r(St);lm=d(Md,"The "),il=s(Md,"CODE",{});var lw=r(il);cm=d(lw,"facebook/bart-base"),lw.forEach(t),pm=d(Md," and "),dl=s(Md,"CODE",{});var cw=r(dl);um=d(cw,"facebook/bart-large"),cw.forEach(t),hm=d(Md," checkpoints can be used to fill multi-token masks."),Md.forEach(t),jp=m(o),v(Ua.$$.fragment,o),Cp=m(o),go=s(o,"H2",{class:!0});var gu=r(go);tn=s(gu,"A",{id:!0,class:!0,href:!0});var pw=r(tn);ll=s(pw,"SPAN",{});var uw=r(ll);v(Ra.$$.fragment,uw),uw.forEach(t),pw.forEach(t),mm=m(gu),cl=s(gu,"SPAN",{});var hw=r(cl);fm=d(hw,"Resources"),hw.forEach(t),gu.forEach(t),Ep=m(o),Ji=s(o,"P",{});var mw=r(Ji);_m=d(mw,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with BART. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),mw.forEach(t),Mp=m(o),v(Ha.$$.fragment,o),Ap=m(o),ae=s(o,"UL",{});var Ue=r(ae);Qa=s(Ue,"LI",{});var bu=r(Qa);gm=d(bu,"A blog post on "),Va=s(bu,"A",{href:!0,rel:!0});var fw=r(Va);bm=d(fw,"Distributed Training: Train BART/T5 for Summarization using \u{1F917} Transformers and Amazon SageMaker"),fw.forEach(t),km=d(bu,"."),bu.forEach(t),ym=m(Ue),Ja=s(Ue,"LI",{});var ku=r(Ja);vm=d(ku,"A notebook on how to "),Ka=s(ku,"A",{href:!0,rel:!0});var _w=r(Ka);Tm=d(_w,"finetune BART for summarization with fastai using blurr"),_w.forEach(t),wm=d(ku,". \u{1F30E}"),ku.forEach(t),$m=m(Ue),Xa=s(Ue,"LI",{});var yu=r(Xa);xm=d(yu,"A notebook on how to "),Za=s(yu,"A",{href:!0,rel:!0});var gw=r(Za);Fm=d(gw,"finetune BART for summarization in two languages with Trainer class"),gw.forEach(t),zm=d(yu,". \u{1F30E}"),yu.forEach(t),Bm=m(Ue),Ot=s(Ue,"LI",{});var Oi=r(Ot);Ki=s(Oi,"A",{href:!0});var bw=r(Ki);qm=d(bw,"BartForConditionalGeneration"),bw.forEach(t),jm=d(Oi," is supported by this "),Ya=s(Oi,"A",{href:!0,rel:!0});var kw=r(Ya);Cm=d(kw,"example script"),kw.forEach(t),Em=d(Oi," and "),es=s(Oi,"A",{href:!0,rel:!0});var yw=r(es);Mm=d(yw,"noteboook"),yw.forEach(t),Am=d(Oi,"."),Oi.forEach(t),Pm=m(Ue),It=s(Ue,"LI",{});var Ii=r(It);Xi=s(Ii,"A",{href:!0});var vw=r(Xi);Sm=d(vw,"TFBartForConditionalGeneration"),vw.forEach(t),Om=d(Ii," is supported by this "),ts=s(Ii,"A",{href:!0,rel:!0});var Tw=r(ts);Im=d(Tw,"example script"),Tw.forEach(t),Nm=d(Ii," and "),os=s(Ii,"A",{href:!0,rel:!0});var ww=r(os);Lm=d(ww,"notebook"),ww.forEach(t),Dm=d(Ii,"."),Ii.forEach(t),Gm=m(Ue),on=s(Ue,"LI",{});var xp=r(on);Zi=s(xp,"A",{href:!0});var $w=r(Zi);Wm=d($w,"FlaxBartForConditionalGeneration"),$w.forEach(t),Um=d(xp," is supported by this "),ns=s(xp,"A",{href:!0,rel:!0});var xw=r(ns);Rm=d(xw,"example script"),xw.forEach(t),Hm=d(xp,"."),xp.forEach(t),Qm=m(Ue),Yi=s(Ue,"LI",{});var VT=r(Yi);as=s(VT,"A",{href:!0,rel:!0});var Fw=r(as);Vm=d(Fw,"Summarization"),Fw.forEach(t),Jm=d(VT," chapter of the \u{1F917} Hugging Face course."),VT.forEach(t),Ue.forEach(t),Pp=m(o),v(ss.$$.fragment,o),Sp=m(o),pt=s(o,"UL",{});var xa=r(pt);Nt=s(xa,"LI",{});var Ni=r(Nt);ed=s(Ni,"A",{href:!0});var zw=r(ed);Km=d(zw,"BartForConditionalGeneration"),zw.forEach(t),Xm=d(Ni," is supported by this "),rs=s(Ni,"A",{href:!0,rel:!0});var Bw=r(rs);Zm=d(Bw,"example script"),Bw.forEach(t),Ym=d(Ni," and "),is=s(Ni,"A",{href:!0,rel:!0});var qw=r(is);ef=d(qw,"notebook"),qw.forEach(t),tf=d(Ni,"."),Ni.forEach(t),of=m(xa),Lt=s(xa,"LI",{});var Li=r(Lt);td=s(Li,"A",{href:!0});var jw=r(td);nf=d(jw,"TFBartForConditionalGeneration"),jw.forEach(t),af=d(Li," is supported by this "),ds=s(Li,"A",{href:!0,rel:!0});var Cw=r(ds);sf=d(Cw,"example script"),Cw.forEach(t),rf=d(Li," and "),ls=s(Li,"A",{href:!0,rel:!0});var Ew=r(ls);df=d(Ew,"notebook"),Ew.forEach(t),lf=d(Li,"."),Li.forEach(t),cf=m(xa),Dt=s(xa,"LI",{});var Di=r(Dt);od=s(Di,"A",{href:!0});var Mw=r(od);pf=d(Mw,"FlaxBartForConditionalGeneration"),Mw.forEach(t),uf=d(Di," is supported by this "),cs=s(Di,"A",{href:!0,rel:!0});var Aw=r(cs);hf=d(Aw,"example script"),Aw.forEach(t),mf=d(Di," and "),ps=s(Di,"A",{href:!0,rel:!0});var Pw=r(ps);ff=d(Pw,"notebook"),Pw.forEach(t),_f=d(Di,"."),Di.forEach(t),gf=m(xa),nd=s(xa,"LI",{});var JT=r(nd);us=s(JT,"A",{href:!0,rel:!0});var Sw=r(us);bf=d(Sw,"Masked language modeling"),Sw.forEach(t),kf=d(JT," chapter of the \u{1F917} Hugging Face Course."),JT.forEach(t),xa.forEach(t),Op=m(o),v(hs.$$.fragment,o),Ip=m(o),Gt=s(o,"UL",{});var Ad=r(Gt);ms=s(Ad,"LI",{});var vu=r(ms);yf=d(vu,"A notebook on how to "),fs=s(vu,"A",{href:!0,rel:!0});var Ow=r(fs);vf=d(Ow,"finetune mBART using Seq2SeqTrainer for Hindi to English translation"),Ow.forEach(t),Tf=d(vu,". \u{1F30E}"),vu.forEach(t),wf=m(Ad),Wt=s(Ad,"LI",{});var Gi=r(Wt);ad=s(Gi,"A",{href:!0});var Iw=r(ad);$f=d(Iw,"BartForConditionalGeneration"),Iw.forEach(t),xf=d(Gi," is supported by this "),_s=s(Gi,"A",{href:!0,rel:!0});var Nw=r(_s);Ff=d(Nw,"example script"),Nw.forEach(t),zf=d(Gi," and "),gs=s(Gi,"A",{href:!0,rel:!0});var Lw=r(gs);Bf=d(Lw,"notebook"),Lw.forEach(t),qf=d(Gi,"."),Gi.forEach(t),jf=m(Ad),Ut=s(Ad,"LI",{});var Wi=r(Ut);sd=s(Wi,"A",{href:!0});var Dw=r(sd);Cf=d(Dw,"TFBartForConditionalGeneration"),Dw.forEach(t),Ef=d(Wi," is supported by this "),bs=s(Wi,"A",{href:!0,rel:!0});var Gw=r(bs);Mf=d(Gw,"example script"),Gw.forEach(t),Af=d(Wi," and "),ks=s(Wi,"A",{href:!0,rel:!0});var Ww=r(ks);Pf=d(Ww,"notebook"),Ww.forEach(t),Sf=d(Wi,"."),Wi.forEach(t),Ad.forEach(t),Np=m(o),bo=s(o,"H2",{class:!0});var Tu=r(bo);nn=s(Tu,"A",{id:!0,class:!0,href:!0});var Uw=r(nn);pl=s(Uw,"SPAN",{});var Rw=r(pl);v(ys.$$.fragment,Rw),Rw.forEach(t),Uw.forEach(t),Of=m(Tu),ul=s(Tu,"SPAN",{});var Hw=r(ul);If=d(Hw,"BartConfig"),Hw.forEach(t),Tu.forEach(t),Lp=m(o),at=s(o,"DIV",{class:!0});var Fa=r(at);v(vs.$$.fragment,Fa),Nf=m(Fa),ko=s(Fa,"P",{});var Pd=r(ko);Lf=d(Pd,"This is the configuration class to store the configuration of a "),rd=s(Pd,"A",{href:!0});var Qw=r(rd);Df=d(Qw,"BartModel"),Qw.forEach(t),Gf=d(Pd,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Ts=s(Pd,"A",{href:!0,rel:!0});var Vw=r(Ts);Wf=d(Vw,"facebook/bart-large"),Vw.forEach(t),Uf=d(Pd," architecture."),Pd.forEach(t),Rf=m(Fa),yo=s(Fa,"P",{});var Sd=r(yo);Hf=d(Sd,"Configuration objects inherit from "),id=s(Sd,"A",{href:!0});var Jw=r(id);Qf=d(Jw,"PretrainedConfig"),Jw.forEach(t),Vf=d(Sd,` and can be used to control the model outputs. Read the
documentation from `),dd=s(Sd,"A",{href:!0});var Kw=r(dd);Jf=d(Kw,"PretrainedConfig"),Kw.forEach(t),Kf=d(Sd," for more information."),Sd.forEach(t),Xf=m(Fa),v(an.$$.fragment,Fa),Fa.forEach(t),Dp=m(o),vo=s(o,"H2",{class:!0});var wu=r(vo);sn=s(wu,"A",{id:!0,class:!0,href:!0});var Xw=r(sn);hl=s(Xw,"SPAN",{});var Zw=r(hl);v(ws.$$.fragment,Zw),Zw.forEach(t),Xw.forEach(t),Zf=m(wu),ml=s(wu,"SPAN",{});var Yw=r(ml);Yf=d(Yw,"BartTokenizer"),Yw.forEach(t),wu.forEach(t),Gp=m(o),S=s(o,"DIV",{class:!0});var R=r(S);v($s.$$.fragment,R),e_=m(R),fl=s(R,"P",{});var e1=r(fl);t_=d(e1,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),e1.forEach(t),o_=m(R),_l=s(R,"P",{});var t1=r(_l);n_=d(t1,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),t1.forEach(t),a_=m(R),v(rn.$$.fragment,R),s_=m(R),xs=s(R,"P",{});var $u=r(xs);r_=d($u,"You can get around that behavior by passing "),gl=s($u,"CODE",{});var o1=r(gl);i_=d(o1,"add_prefix_space=True"),o1.forEach(t),d_=d($u,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),$u.forEach(t),l_=m(R),v(dn.$$.fragment,R),c_=m(R),Fs=s(R,"P",{});var xu=r(Fs);p_=d(xu,"This tokenizer inherits from "),ld=s(xu,"A",{href:!0});var n1=r(ld);u_=d(n1,"PreTrainedTokenizer"),n1.forEach(t),h_=d(xu,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),xu.forEach(t),m_=m(R),Rt=s(R,"DIV",{class:!0});var Od=r(Rt);v(zs.$$.fragment,Od),f_=m(Od),bl=s(Od,"P",{});var a1=r(bl);__=d(a1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),a1.forEach(t),g_=m(Od),Bs=s(Od,"UL",{});var Fu=r(Bs);cd=s(Fu,"LI",{});var KT=r(cd);b_=d(KT,"single sequence: "),kl=s(KT,"CODE",{});var s1=r(kl);k_=d(s1,"<s> X </s>"),s1.forEach(t),KT.forEach(t),y_=m(Fu),pd=s(Fu,"LI",{});var XT=r(pd);v_=d(XT,"pair of sequences: "),yl=s(XT,"CODE",{});var r1=r(yl);T_=d(r1,"<s> A </s></s> B </s>"),r1.forEach(t),XT.forEach(t),Fu.forEach(t),Od.forEach(t),w_=m(R),ln=s(R,"DIV",{class:!0});var zu=r(ln);v(qs.$$.fragment,zu),$_=m(zu),vl=s(zu,"P",{});var i1=r(vl);x_=d(i1,"Converts a sequence of tokens (string) in a single string."),i1.forEach(t),zu.forEach(t),F_=m(R),cn=s(R,"DIV",{class:!0});var Bu=r(cn);v(js.$$.fragment,Bu),z_=m(Bu),Tl=s(Bu,"P",{});var d1=r(Tl);B_=d(d1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),d1.forEach(t),Bu.forEach(t),q_=m(R),pn=s(R,"DIV",{class:!0});var qu=r(pn);v(Cs.$$.fragment,qu),j_=m(qu),Es=s(qu,"P",{});var ju=r(Es);C_=d(ju,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wl=s(ju,"CODE",{});var l1=r(wl);E_=d(l1,"prepare_for_model"),l1.forEach(t),M_=d(ju," method."),ju.forEach(t),qu.forEach(t),R.forEach(t),Wp=m(o),To=s(o,"H2",{class:!0});var Cu=r(To);un=s(Cu,"A",{id:!0,class:!0,href:!0});var c1=r(un);$l=s(c1,"SPAN",{});var p1=r($l);v(Ms.$$.fragment,p1),p1.forEach(t),c1.forEach(t),A_=m(Cu),xl=s(Cu,"SPAN",{});var u1=r(xl);P_=d(u1,"BartTokenizerFast"),u1.forEach(t),Cu.forEach(t),Up=m(o),J=s(o,"DIV",{class:!0});var ye=r(J);v(As.$$.fragment,ye),S_=m(ye),Ps=s(ye,"P",{});var Eu=r(Ps);O_=d(Eu,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Fl=s(Eu,"EM",{});var h1=r(Fl);I_=d(h1,"tokenizers"),h1.forEach(t),N_=d(Eu,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Eu.forEach(t),L_=m(ye),zl=s(ye,"P",{});var m1=r(zl);D_=d(m1,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),m1.forEach(t),G_=m(ye),v(hn.$$.fragment,ye),W_=m(ye),Ss=s(ye,"P",{});var Mu=r(Ss);U_=d(Mu,"You can get around that behavior by passing "),Bl=s(Mu,"CODE",{});var f1=r(Bl);R_=d(f1,"add_prefix_space=True"),f1.forEach(t),H_=d(Mu,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Mu.forEach(t),Q_=m(ye),v(mn.$$.fragment,ye),V_=m(ye),Os=s(ye,"P",{});var Au=r(Os);J_=d(Au,"This tokenizer inherits from "),ud=s(Au,"A",{href:!0});var _1=r(ud);K_=d(_1,"PreTrainedTokenizerFast"),_1.forEach(t),X_=d(Au,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Au.forEach(t),Z_=m(ye),fn=s(ye,"DIV",{class:!0});var Pu=r(fn);v(Is.$$.fragment,Pu),Y_=m(Pu),ql=s(Pu,"P",{});var g1=r(ql);eg=d(g1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),g1.forEach(t),Pu.forEach(t),ye.forEach(t),Rp=m(o),wo=s(o,"H2",{class:!0});var Su=r(wo);_n=s(Su,"A",{id:!0,class:!0,href:!0});var b1=r(_n);jl=s(b1,"SPAN",{});var k1=r(jl);v(Ns.$$.fragment,k1),k1.forEach(t),b1.forEach(t),tg=m(Su),Cl=s(Su,"SPAN",{});var y1=r(Cl);og=d(y1,"BartModel"),y1.forEach(t),Su.forEach(t),Hp=m(o),st=s(o,"DIV",{class:!0});var za=r(st);v(Ls.$$.fragment,za),ng=m(za),Ds=s(za,"P",{});var Ou=r(Ds);ag=d(Ou,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),hd=s(Ou,"A",{href:!0});var v1=r(hd);sg=d(v1,"PreTrainedModel"),v1.forEach(t),rg=d(Ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ou.forEach(t),ig=m(za),Gs=s(za,"P",{});var Iu=r(Gs);dg=d(Iu,"This model is also a PyTorch "),Ws=s(Iu,"A",{href:!0,rel:!0});var T1=r(Ws);lg=d(T1,"torch.nn.Module"),T1.forEach(t),cg=d(Iu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Iu.forEach(t),pg=m(za),ut=s(za,"DIV",{class:!0});var Ba=r(ut);v(Us.$$.fragment,Ba),ug=m(Ba),$o=s(Ba,"P",{});var Id=r($o);hg=d(Id,"The "),md=s(Id,"A",{href:!0});var w1=r(md);mg=d(w1,"BartModel"),w1.forEach(t),fg=d(Id," forward method, overrides the "),El=s(Id,"CODE",{});var $1=r(El);_g=d($1,"__call__"),$1.forEach(t),gg=d(Id," special method."),Id.forEach(t),bg=m(Ba),v(gn.$$.fragment,Ba),kg=m(Ba),v(bn.$$.fragment,Ba),Ba.forEach(t),za.forEach(t),Qp=m(o),xo=s(o,"H2",{class:!0});var Nu=r(xo);kn=s(Nu,"A",{id:!0,class:!0,href:!0});var x1=r(kn);Ml=s(x1,"SPAN",{});var F1=r(Ml);v(Rs.$$.fragment,F1),F1.forEach(t),x1.forEach(t),yg=m(Nu),Al=s(Nu,"SPAN",{});var z1=r(Al);vg=d(z1,"BartForConditionalGeneration"),z1.forEach(t),Nu.forEach(t),Vp=m(o),rt=s(o,"DIV",{class:!0});var qa=r(rt);v(Hs.$$.fragment,qa),Tg=m(qa),Qs=s(qa,"P",{});var Lu=r(Qs);wg=d(Lu,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),fd=s(Lu,"A",{href:!0});var B1=r(fd);$g=d(B1,"PreTrainedModel"),B1.forEach(t),xg=d(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),Fg=m(qa),Vs=s(qa,"P",{});var Du=r(Vs);zg=d(Du,"This model is also a PyTorch "),Js=s(Du,"A",{href:!0,rel:!0});var q1=r(Js);Bg=d(q1,"torch.nn.Module"),q1.forEach(t),qg=d(Du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Du.forEach(t),jg=m(qa),Le=s(qa,"DIV",{class:!0});var Ht=r(Le);v(Ks.$$.fragment,Ht),Cg=m(Ht),Fo=s(Ht,"P",{});var Nd=r(Fo);Eg=d(Nd,"The "),_d=s(Nd,"A",{href:!0});var j1=r(_d);Mg=d(j1,"BartForConditionalGeneration"),j1.forEach(t),Ag=d(Nd," forward method, overrides the "),Pl=s(Nd,"CODE",{});var C1=r(Pl);Pg=d(C1,"__call__"),C1.forEach(t),Sg=d(Nd," special method."),Nd.forEach(t),Og=m(Ht),v(yn.$$.fragment,Ht),Ig=m(Ht),v(vn.$$.fragment,Ht),Ng=m(Ht),v(Tn.$$.fragment,Ht),Ht.forEach(t),qa.forEach(t),Jp=m(o),zo=s(o,"H2",{class:!0});var Gu=r(zo);wn=s(Gu,"A",{id:!0,class:!0,href:!0});var E1=r(wn);Sl=s(E1,"SPAN",{});var M1=r(Sl);v(Xs.$$.fragment,M1),M1.forEach(t),E1.forEach(t),Lg=m(Gu),Ol=s(Gu,"SPAN",{});var A1=r(Ol);Dg=d(A1,"BartForSequenceClassification"),A1.forEach(t),Gu.forEach(t),Kp=m(o),Ee=s(o,"DIV",{class:!0});var Qt=r(Ee);v(Zs.$$.fragment,Qt),Gg=m(Qt),Il=s(Qt,"P",{});var P1=r(Il);Wg=d(P1,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),P1.forEach(t),Ug=m(Qt),Ys=s(Qt,"P",{});var Wu=r(Ys);Rg=d(Wu,"This model inherits from "),gd=s(Wu,"A",{href:!0});var S1=r(gd);Hg=d(S1,"PreTrainedModel"),S1.forEach(t),Qg=d(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(t),Vg=m(Qt),er=s(Qt,"P",{});var Uu=r(er);Jg=d(Uu,"This model is also a PyTorch "),tr=s(Uu,"A",{href:!0,rel:!0});var O1=r(tr);Kg=d(O1,"torch.nn.Module"),O1.forEach(t),Xg=d(Uu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uu.forEach(t),Zg=m(Qt),se=s(Qt,"DIV",{class:!0});var Re=r(se);v(or.$$.fragment,Re),Yg=m(Re),Bo=s(Re,"P",{});var Ld=r(Bo);eb=d(Ld,"The "),bd=s(Ld,"A",{href:!0});var I1=r(bd);tb=d(I1,"BartForSequenceClassification"),I1.forEach(t),ob=d(Ld," forward method, overrides the "),Nl=s(Ld,"CODE",{});var N1=r(Nl);nb=d(N1,"__call__"),N1.forEach(t),ab=d(Ld," special method."),Ld.forEach(t),sb=m(Re),v($n.$$.fragment,Re),rb=m(Re),v(xn.$$.fragment,Re),ib=m(Re),v(Fn.$$.fragment,Re),db=m(Re),v(zn.$$.fragment,Re),lb=m(Re),v(Bn.$$.fragment,Re),Re.forEach(t),Qt.forEach(t),Xp=m(o),qo=s(o,"H2",{class:!0});var Ru=r(qo);qn=s(Ru,"A",{id:!0,class:!0,href:!0});var L1=r(qn);Ll=s(L1,"SPAN",{});var D1=r(Ll);v(nr.$$.fragment,D1),D1.forEach(t),L1.forEach(t),cb=m(Ru),Dl=s(Ru,"SPAN",{});var G1=r(Dl);pb=d(G1,"BartForQuestionAnswering"),G1.forEach(t),Ru.forEach(t),Zp=m(o),Me=s(o,"DIV",{class:!0});var Vt=r(Me);v(ar.$$.fragment,Vt),ub=m(Vt),jo=s(Vt,"P",{});var Dd=r(jo);hb=d(Dd,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Gl=s(Dd,"CODE",{});var W1=r(Gl);mb=d(W1,"span start logits"),W1.forEach(t),fb=d(Dd," and "),Wl=s(Dd,"CODE",{});var U1=r(Wl);_b=d(U1,"span end logits"),U1.forEach(t),gb=d(Dd,")."),Dd.forEach(t),bb=m(Vt),sr=s(Vt,"P",{});var Hu=r(sr);kb=d(Hu,"This model inherits from "),kd=s(Hu,"A",{href:!0});var R1=r(kd);yb=d(R1,"PreTrainedModel"),R1.forEach(t),vb=d(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),Tb=m(Vt),rr=s(Vt,"P",{});var Qu=r(rr);wb=d(Qu,"This model is also a PyTorch "),ir=s(Qu,"A",{href:!0,rel:!0});var H1=r(ir);$b=d(H1,"torch.nn.Module"),H1.forEach(t),xb=d(Qu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qu.forEach(t),Fb=m(Vt),De=s(Vt,"DIV",{class:!0});var Jt=r(De);v(dr.$$.fragment,Jt),zb=m(Jt),Co=s(Jt,"P",{});var Gd=r(Co);Bb=d(Gd,"The "),yd=s(Gd,"A",{href:!0});var Q1=r(yd);qb=d(Q1,"BartForQuestionAnswering"),Q1.forEach(t),jb=d(Gd," forward method, overrides the "),Ul=s(Gd,"CODE",{});var V1=r(Ul);Cb=d(V1,"__call__"),V1.forEach(t),Eb=d(Gd," special method."),Gd.forEach(t),Mb=m(Jt),v(jn.$$.fragment,Jt),Ab=m(Jt),v(Cn.$$.fragment,Jt),Pb=m(Jt),v(En.$$.fragment,Jt),Jt.forEach(t),Vt.forEach(t),Yp=m(o),Eo=s(o,"H2",{class:!0});var Vu=r(Eo);Mn=s(Vu,"A",{id:!0,class:!0,href:!0});var J1=r(Mn);Rl=s(J1,"SPAN",{});var K1=r(Rl);v(lr.$$.fragment,K1),K1.forEach(t),J1.forEach(t),Sb=m(Vu),Hl=s(Vu,"SPAN",{});var X1=r(Hl);Ob=d(X1,"BartForCausalLM"),X1.forEach(t),Vu.forEach(t),eu=m(o),Ae=s(o,"DIV",{class:!0});var Kt=r(Ae);v(cr.$$.fragment,Kt),Ib=m(Kt),Ql=s(Kt,"P",{});var Z1=r(Ql);Nb=d(Z1,"BART decoder with with a language modeling head on top (linear layer with weights tied to the input embeddings)."),Z1.forEach(t),Lb=m(Kt),pr=s(Kt,"P",{});var Ju=r(pr);Db=d(Ju,"This model inherits from "),vd=s(Ju,"A",{href:!0});var Y1=r(vd);Gb=d(Y1,"PreTrainedModel"),Y1.forEach(t),Wb=d(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju.forEach(t),Ub=m(Kt),ur=s(Kt,"P",{});var Ku=r(ur);Rb=d(Ku,"This model is also a PyTorch "),hr=s(Ku,"A",{href:!0,rel:!0});var e$=r(hr);Hb=d(e$,"torch.nn.Module"),e$.forEach(t),Qb=d(Ku,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ku.forEach(t),Vb=m(Kt),An=s(Kt,"DIV",{class:!0});var Xu=r(An);v(mr.$$.fragment,Xu),Jb=m(Xu),v(Pn.$$.fragment,Xu),Xu.forEach(t),Kt.forEach(t),tu=m(o),Mo=s(o,"H2",{class:!0});var Zu=r(Mo);Sn=s(Zu,"A",{id:!0,class:!0,href:!0});var t$=r(Sn);Vl=s(t$,"SPAN",{});var o$=r(Vl);v(fr.$$.fragment,o$),o$.forEach(t),t$.forEach(t),Kb=m(Zu),Jl=s(Zu,"SPAN",{});var n$=r(Jl);Xb=d(n$,"TFBartModel"),n$.forEach(t),Zu.forEach(t),ou=m(o),Pe=s(o,"DIV",{class:!0});var Xt=r(Pe);v(_r.$$.fragment,Xt),Zb=m(Xt),gr=s(Xt,"P",{});var Yu=r(gr);Yb=d(Yu,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Td=s(Yu,"A",{href:!0});var a$=r(Td);ek=d(a$,"TFPreTrainedModel"),a$.forEach(t),tk=d(Yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yu.forEach(t),ok=m(Xt),br=s(Xt,"P",{});var eh=r(br);nk=d(eh,"This model is also a "),kr=s(eh,"A",{href:!0,rel:!0});var s$=r(kr);ak=d(s$,"tf.keras.Model"),s$.forEach(t),sk=d(eh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eh.forEach(t),rk=m(Xt),v(On.$$.fragment,Xt),ik=m(Xt),ht=s(Xt,"DIV",{class:!0});var ja=r(ht);v(yr.$$.fragment,ja),dk=m(ja),Ao=s(ja,"P",{});var Wd=r(Ao);lk=d(Wd,"The "),wd=s(Wd,"A",{href:!0});var r$=r(wd);ck=d(r$,"TFBartModel"),r$.forEach(t),pk=d(Wd," forward method, overrides the "),Kl=s(Wd,"CODE",{});var i$=r(Kl);uk=d(i$,"__call__"),i$.forEach(t),hk=d(Wd," special method."),Wd.forEach(t),mk=m(ja),v(In.$$.fragment,ja),fk=m(ja),v(Nn.$$.fragment,ja),ja.forEach(t),Xt.forEach(t),nu=m(o),Po=s(o,"H2",{class:!0});var th=r(Po);Ln=s(th,"A",{id:!0,class:!0,href:!0});var d$=r(Ln);Xl=s(d$,"SPAN",{});var l$=r(Xl);v(vr.$$.fragment,l$),l$.forEach(t),d$.forEach(t),_k=m(th),Zl=s(th,"SPAN",{});var c$=r(Zl);gk=d(c$,"TFBartForConditionalGeneration"),c$.forEach(t),th.forEach(t),au=m(o),Se=s(o,"DIV",{class:!0});var Zt=r(Se);v(Tr.$$.fragment,Zt),bk=m(Zt),wr=s(Zt,"P",{});var oh=r(wr);kk=d(oh,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),$d=s(oh,"A",{href:!0});var p$=r($d);yk=d(p$,"TFPreTrainedModel"),p$.forEach(t),vk=d(oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oh.forEach(t),Tk=m(Zt),$r=s(Zt,"P",{});var nh=r($r);wk=d(nh,"This model is also a "),xr=s(nh,"A",{href:!0,rel:!0});var u$=r(xr);$k=d(u$,"tf.keras.Model"),u$.forEach(t),xk=d(nh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nh.forEach(t),Fk=m(Zt),v(Dn.$$.fragment,Zt),zk=m(Zt),Ge=s(Zt,"DIV",{class:!0});var Yt=r(Ge);v(Fr.$$.fragment,Yt),Bk=m(Yt),So=s(Yt,"P",{});var Ud=r(So);qk=d(Ud,"The "),xd=s(Ud,"A",{href:!0});var h$=r(xd);jk=d(h$,"TFBartForConditionalGeneration"),h$.forEach(t),Ck=d(Ud," forward method, overrides the "),Yl=s(Ud,"CODE",{});var m$=r(Yl);Ek=d(m$,"__call__"),m$.forEach(t),Mk=d(Ud," special method."),Ud.forEach(t),Ak=m(Yt),v(Gn.$$.fragment,Yt),Pk=m(Yt),v(Wn.$$.fragment,Yt),Sk=m(Yt),v(Un.$$.fragment,Yt),Yt.forEach(t),Zt.forEach(t),su=m(o),Oo=s(o,"H2",{class:!0});var ah=r(Oo);Rn=s(ah,"A",{id:!0,class:!0,href:!0});var f$=r(Rn);ec=s(f$,"SPAN",{});var _$=r(ec);v(zr.$$.fragment,_$),_$.forEach(t),f$.forEach(t),Ok=m(ah),tc=s(ah,"SPAN",{});var g$=r(tc);Ik=d(g$,"FlaxBartModel"),g$.forEach(t),ah.forEach(t),ru=m(o),K=s(o,"DIV",{class:!0});var ve=r(K);v(Br.$$.fragment,ve),Nk=m(ve),qr=s(ve,"P",{});var sh=r(qr);Lk=d(sh,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Fd=s(sh,"A",{href:!0});var b$=r(Fd);Dk=d(b$,"FlaxPreTrainedModel"),b$.forEach(t),Gk=d(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(t),Wk=m(ve),jr=s(ve,"P",{});var rh=r(jr);Uk=d(rh,`This model is also a Flax Linen
`),Cr=s(rh,"A",{href:!0,rel:!0});var k$=r(Cr);Rk=d(k$,"flax.nn.Module"),k$.forEach(t),Hk=d(rh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),rh.forEach(t),Qk=m(ve),oc=s(ve,"P",{});var y$=r(oc);Vk=d(y$,"Finally, this model supports inherent JAX features such as:"),y$.forEach(t),Jk=m(ve),qt=s(ve,"UL",{});var Ca=r(qt);nc=s(Ca,"LI",{});var v$=r(nc);Er=s(v$,"A",{href:!0,rel:!0});var T$=r(Er);Kk=d(T$,"Just-In-Time (JIT) compilation"),T$.forEach(t),v$.forEach(t),Xk=m(Ca),ac=s(Ca,"LI",{});var w$=r(ac);Mr=s(w$,"A",{href:!0,rel:!0});var $$=r(Mr);Zk=d($$,"Automatic Differentiation"),$$.forEach(t),w$.forEach(t),Yk=m(Ca),sc=s(Ca,"LI",{});var x$=r(sc);Ar=s(x$,"A",{href:!0,rel:!0});var F$=r(Ar);ey=d(F$,"Vectorization"),F$.forEach(t),x$.forEach(t),ty=m(Ca),rc=s(Ca,"LI",{});var z$=r(rc);Pr=s(z$,"A",{href:!0,rel:!0});var B$=r(Pr);oy=d(B$,"Parallelization"),B$.forEach(t),z$.forEach(t),Ca.forEach(t),ny=m(ve),mt=s(ve,"DIV",{class:!0});var Ea=r(mt);v(Sr.$$.fragment,Ea),ay=m(Ea),Io=s(Ea,"P",{});var Rd=r(Io);sy=d(Rd,"The "),ic=s(Rd,"CODE",{});var q$=r(ic);ry=d(q$,"FlaxBartPreTrainedModel"),q$.forEach(t),iy=d(Rd," forward method, overrides the "),dc=s(Rd,"CODE",{});var j$=r(dc);dy=d(j$,"__call__"),j$.forEach(t),ly=d(Rd," special method."),Rd.forEach(t),cy=m(Ea),v(Hn.$$.fragment,Ea),py=m(Ea),v(Qn.$$.fragment,Ea),Ea.forEach(t),uy=m(ve),Vn=s(ve,"DIV",{class:!0});var ih=r(Vn);v(Or.$$.fragment,ih),hy=m(ih),v(Jn.$$.fragment,ih),ih.forEach(t),my=m(ve),Kn=s(ve,"DIV",{class:!0});var dh=r(Kn);v(Ir.$$.fragment,dh),fy=m(dh),v(Xn.$$.fragment,dh),dh.forEach(t),ve.forEach(t),iu=m(o),No=s(o,"H2",{class:!0});var lh=r(No);Zn=s(lh,"A",{id:!0,class:!0,href:!0});var C$=r(Zn);lc=s(C$,"SPAN",{});var E$=r(lc);v(Nr.$$.fragment,E$),E$.forEach(t),C$.forEach(t),_y=m(lh),cc=s(lh,"SPAN",{});var M$=r(cc);gy=d(M$,"FlaxBartForConditionalGeneration"),M$.forEach(t),lh.forEach(t),du=m(o),X=s(o,"DIV",{class:!0});var Te=r(X);v(Lr.$$.fragment,Te),by=m(Te),Dr=s(Te,"P",{});var ch=r(Dr);ky=d(ch,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),zd=s(ch,"A",{href:!0});var A$=r(zd);yy=d(A$,"FlaxPreTrainedModel"),A$.forEach(t),vy=d(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),Ty=m(Te),Gr=s(Te,"P",{});var ph=r(Gr);wy=d(ph,`This model is also a Flax Linen
`),Wr=s(ph,"A",{href:!0,rel:!0});var P$=r(Wr);$y=d(P$,"flax.nn.Module"),P$.forEach(t),xy=d(ph,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ph.forEach(t),Fy=m(Te),pc=s(Te,"P",{});var S$=r(pc);zy=d(S$,"Finally, this model supports inherent JAX features such as:"),S$.forEach(t),By=m(Te),jt=s(Te,"UL",{});var Ma=r(jt);uc=s(Ma,"LI",{});var O$=r(uc);Ur=s(O$,"A",{href:!0,rel:!0});var I$=r(Ur);qy=d(I$,"Just-In-Time (JIT) compilation"),I$.forEach(t),O$.forEach(t),jy=m(Ma),hc=s(Ma,"LI",{});var N$=r(hc);Rr=s(N$,"A",{href:!0,rel:!0});var L$=r(Rr);Cy=d(L$,"Automatic Differentiation"),L$.forEach(t),N$.forEach(t),Ey=m(Ma),mc=s(Ma,"LI",{});var D$=r(mc);Hr=s(D$,"A",{href:!0,rel:!0});var G$=r(Hr);My=d(G$,"Vectorization"),G$.forEach(t),D$.forEach(t),Ay=m(Ma),fc=s(Ma,"LI",{});var W$=r(fc);Qr=s(W$,"A",{href:!0,rel:!0});var U$=r(Qr);Py=d(U$,"Parallelization"),U$.forEach(t),W$.forEach(t),Ma.forEach(t),Sy=m(Te),We=s(Te,"DIV",{class:!0});var eo=r(We);v(Vr.$$.fragment,eo),Oy=m(eo),Lo=s(eo,"P",{});var Hd=r(Lo);Iy=d(Hd,"The "),_c=s(Hd,"CODE",{});var R$=r(_c);Ny=d(R$,"FlaxBartPreTrainedModel"),R$.forEach(t),Ly=d(Hd," forward method, overrides the "),gc=s(Hd,"CODE",{});var H$=r(gc);Dy=d(H$,"__call__"),H$.forEach(t),Gy=d(Hd," special method."),Hd.forEach(t),Wy=m(eo),v(Yn.$$.fragment,eo),Uy=m(eo),v(ea.$$.fragment,eo),Ry=m(eo),v(ta.$$.fragment,eo),eo.forEach(t),Hy=m(Te),oa=s(Te,"DIV",{class:!0});var uh=r(oa);v(Jr.$$.fragment,uh),Qy=m(uh),v(na.$$.fragment,uh),uh.forEach(t),Vy=m(Te),aa=s(Te,"DIV",{class:!0});var hh=r(aa);v(Kr.$$.fragment,hh),Jy=m(hh),v(sa.$$.fragment,hh),hh.forEach(t),Te.forEach(t),lu=m(o),Do=s(o,"H2",{class:!0});var mh=r(Do);ra=s(mh,"A",{id:!0,class:!0,href:!0});var Q$=r(ra);bc=s(Q$,"SPAN",{});var V$=r(bc);v(Xr.$$.fragment,V$),V$.forEach(t),Q$.forEach(t),Ky=m(mh),kc=s(mh,"SPAN",{});var J$=r(kc);Xy=d(J$,"FlaxBartForSequenceClassification"),J$.forEach(t),mh.forEach(t),cu=m(o),D=s(o,"DIV",{class:!0});var re=r(D);v(Zr.$$.fragment,re),Zy=m(re),yc=s(re,"P",{});var K$=r(yc);Yy=d(K$,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),K$.forEach(t),ev=m(re),Yr=s(re,"P",{});var fh=r(Yr);tv=d(fh,"This model inherits from "),Bd=s(fh,"A",{href:!0});var X$=r(Bd);ov=d(X$,"FlaxPreTrainedModel"),X$.forEach(t),nv=d(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),av=m(re),ei=s(re,"P",{});var _h=r(ei);sv=d(_h,`This model is also a Flax Linen
`),ti=s(_h,"A",{href:!0,rel:!0});var Z$=r(ti);rv=d(Z$,"flax.nn.Module"),Z$.forEach(t),iv=d(_h,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_h.forEach(t),dv=m(re),vc=s(re,"P",{});var Y$=r(vc);lv=d(Y$,"Finally, this model supports inherent JAX features such as:"),Y$.forEach(t),cv=m(re),Ct=s(re,"UL",{});var Aa=r(Ct);Tc=s(Aa,"LI",{});var ex=r(Tc);oi=s(ex,"A",{href:!0,rel:!0});var tx=r(oi);pv=d(tx,"Just-In-Time (JIT) compilation"),tx.forEach(t),ex.forEach(t),uv=m(Aa),wc=s(Aa,"LI",{});var ox=r(wc);ni=s(ox,"A",{href:!0,rel:!0});var nx=r(ni);hv=d(nx,"Automatic Differentiation"),nx.forEach(t),ox.forEach(t),mv=m(Aa),$c=s(Aa,"LI",{});var ax=r($c);ai=s(ax,"A",{href:!0,rel:!0});var sx=r(ai);fv=d(sx,"Vectorization"),sx.forEach(t),ax.forEach(t),_v=m(Aa),xc=s(Aa,"LI",{});var rx=r(xc);si=s(rx,"A",{href:!0,rel:!0});var ix=r(si);gv=d(ix,"Parallelization"),ix.forEach(t),rx.forEach(t),Aa.forEach(t),bv=m(re),ft=s(re,"DIV",{class:!0});var Pa=r(ft);v(ri.$$.fragment,Pa),kv=m(Pa),Go=s(Pa,"P",{});var Qd=r(Go);yv=d(Qd,"The "),Fc=s(Qd,"CODE",{});var dx=r(Fc);vv=d(dx,"FlaxBartPreTrainedModel"),dx.forEach(t),Tv=d(Qd," forward method, overrides the "),zc=s(Qd,"CODE",{});var lx=r(zc);wv=d(lx,"__call__"),lx.forEach(t),$v=d(Qd," special method."),Qd.forEach(t),xv=m(Pa),v(ia.$$.fragment,Pa),Fv=m(Pa),v(da.$$.fragment,Pa),Pa.forEach(t),zv=m(re),la=s(re,"DIV",{class:!0});var gh=r(la);v(ii.$$.fragment,gh),Bv=m(gh),v(ca.$$.fragment,gh),gh.forEach(t),qv=m(re),pa=s(re,"DIV",{class:!0});var bh=r(pa);v(di.$$.fragment,bh),jv=m(bh),v(ua.$$.fragment,bh),bh.forEach(t),re.forEach(t),pu=m(o),Wo=s(o,"H2",{class:!0});var kh=r(Wo);ha=s(kh,"A",{id:!0,class:!0,href:!0});var cx=r(ha);Bc=s(cx,"SPAN",{});var px=r(Bc);v(li.$$.fragment,px),px.forEach(t),cx.forEach(t),Cv=m(kh),qc=s(kh,"SPAN",{});var ux=r(qc);Ev=d(ux,"FlaxBartForQuestionAnswering"),ux.forEach(t),kh.forEach(t),uu=m(o),G=s(o,"DIV",{class:!0});var ie=r(G);v(ci.$$.fragment,ie),Mv=m(ie),Uo=s(ie,"P",{});var Vd=r(Uo);Av=d(Vd,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),jc=s(Vd,"CODE",{});var hx=r(jc);Pv=d(hx,"span start logits"),hx.forEach(t),Sv=d(Vd," and "),Cc=s(Vd,"CODE",{});var mx=r(Cc);Ov=d(mx,"span end logits"),mx.forEach(t),Iv=d(Vd,")."),Vd.forEach(t),Nv=m(ie),pi=s(ie,"P",{});var yh=r(pi);Lv=d(yh,"This model inherits from "),qd=s(yh,"A",{href:!0});var fx=r(qd);Dv=d(fx,"FlaxPreTrainedModel"),fx.forEach(t),Gv=d(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),Wv=m(ie),ui=s(ie,"P",{});var vh=r(ui);Uv=d(vh,`This model is also a Flax Linen
`),hi=s(vh,"A",{href:!0,rel:!0});var _x=r(hi);Rv=d(_x,"flax.nn.Module"),_x.forEach(t),Hv=d(vh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vh.forEach(t),Qv=m(ie),Ec=s(ie,"P",{});var gx=r(Ec);Vv=d(gx,"Finally, this model supports inherent JAX features such as:"),gx.forEach(t),Jv=m(ie),Et=s(ie,"UL",{});var Sa=r(Et);Mc=s(Sa,"LI",{});var bx=r(Mc);mi=s(bx,"A",{href:!0,rel:!0});var kx=r(mi);Kv=d(kx,"Just-In-Time (JIT) compilation"),kx.forEach(t),bx.forEach(t),Xv=m(Sa),Ac=s(Sa,"LI",{});var yx=r(Ac);fi=s(yx,"A",{href:!0,rel:!0});var vx=r(fi);Zv=d(vx,"Automatic Differentiation"),vx.forEach(t),yx.forEach(t),Yv=m(Sa),Pc=s(Sa,"LI",{});var Tx=r(Pc);_i=s(Tx,"A",{href:!0,rel:!0});var wx=r(_i);eT=d(wx,"Vectorization"),wx.forEach(t),Tx.forEach(t),tT=m(Sa),Sc=s(Sa,"LI",{});var $x=r(Sc);gi=s($x,"A",{href:!0,rel:!0});var xx=r(gi);oT=d(xx,"Parallelization"),xx.forEach(t),$x.forEach(t),Sa.forEach(t),nT=m(ie),_t=s(ie,"DIV",{class:!0});var Oa=r(_t);v(bi.$$.fragment,Oa),aT=m(Oa),Ro=s(Oa,"P",{});var Jd=r(Ro);sT=d(Jd,"The "),Oc=s(Jd,"CODE",{});var Fx=r(Oc);rT=d(Fx,"FlaxBartPreTrainedModel"),Fx.forEach(t),iT=d(Jd," forward method, overrides the "),Ic=s(Jd,"CODE",{});var zx=r(Ic);dT=d(zx,"__call__"),zx.forEach(t),lT=d(Jd," special method."),Jd.forEach(t),cT=m(Oa),v(ma.$$.fragment,Oa),pT=m(Oa),v(fa.$$.fragment,Oa),Oa.forEach(t),uT=m(ie),_a=s(ie,"DIV",{class:!0});var Th=r(_a);v(ki.$$.fragment,Th),hT=m(Th),v(ga.$$.fragment,Th),Th.forEach(t),mT=m(ie),ba=s(ie,"DIV",{class:!0});var wh=r(ba);v(yi.$$.fragment,wh),fT=m(wh),v(ka.$$.fragment,wh),wh.forEach(t),ie.forEach(t),hu=m(o),Ho=s(o,"H2",{class:!0});var $h=r(Ho);ya=s($h,"A",{id:!0,class:!0,href:!0});var Bx=r(ya);Nc=s(Bx,"SPAN",{});var qx=r(Nc);v(vi.$$.fragment,qx),qx.forEach(t),Bx.forEach(t),_T=m($h),Lc=s($h,"SPAN",{});var jx=r(Lc);gT=d(jx,"FlaxBartForCausalLM"),jx.forEach(t),$h.forEach(t),mu=m(o),te=s(o,"DIV",{class:!0});var He=r(te);v(Ti.$$.fragment,He),bT=m(He),Dc=s(He,"P",{});var Cx=r(Dc);kT=d(Cx,`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),Cx.forEach(t),yT=m(He),wi=s(He,"P",{});var xh=r(wi);vT=d(xh,"This model inherits from "),jd=s(xh,"A",{href:!0});var Ex=r(jd);TT=d(Ex,"FlaxPreTrainedModel"),Ex.forEach(t),wT=d(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),$T=m(He),$i=s(He,"P",{});var Fh=r($i);xT=d(Fh,`This model is also a Flax Linen
`),xi=s(Fh,"A",{href:!0,rel:!0});var Mx=r(xi);FT=d(Mx,"flax.nn.Module"),Mx.forEach(t),zT=d(Fh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fh.forEach(t),BT=m(He),Gc=s(He,"P",{});var Ax=r(Gc);qT=d(Ax,"Finally, this model supports inherent JAX features such as:"),Ax.forEach(t),jT=m(He),Mt=s(He,"UL",{});var Ia=r(Mt);Wc=s(Ia,"LI",{});var Px=r(Wc);Fi=s(Px,"A",{href:!0,rel:!0});var Sx=r(Fi);CT=d(Sx,"Just-In-Time (JIT) compilation"),Sx.forEach(t),Px.forEach(t),ET=m(Ia),Uc=s(Ia,"LI",{});var Ox=r(Uc);zi=s(Ox,"A",{href:!0,rel:!0});var Ix=r(zi);MT=d(Ix,"Automatic Differentiation"),Ix.forEach(t),Ox.forEach(t),AT=m(Ia),Rc=s(Ia,"LI",{});var Nx=r(Rc);Bi=s(Nx,"A",{href:!0,rel:!0});var Lx=r(Bi);PT=d(Lx,"Vectorization"),Lx.forEach(t),Nx.forEach(t),ST=m(Ia),Hc=s(Ia,"LI",{});var Dx=r(Hc);qi=s(Dx,"A",{href:!0,rel:!0});var Gx=r(qi);OT=d(Gx,"Parallelization"),Gx.forEach(t),Dx.forEach(t),Ia.forEach(t),IT=m(He),gt=s(He,"DIV",{class:!0});var Na=r(gt);v(ji.$$.fragment,Na),NT=m(Na),Qo=s(Na,"P",{});var Kd=r(Qo);LT=d(Kd,"The "),Qc=s(Kd,"CODE",{});var Wx=r(Qc);DT=d(Wx,"FlaxBartDecoderPreTrainedModel"),Wx.forEach(t),GT=d(Kd," forward method, overrides the "),Vc=s(Kd,"CODE",{});var Ux=r(Vc);WT=d(Ux,"__call__"),Ux.forEach(t),UT=d(Kd," special method."),Kd.forEach(t),RT=m(Na),v(va.$$.fragment,Na),HT=m(Na),v(Ta.$$.fragment,Na),Na.forEach(t),He.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(G2)),u(p,"id","bart"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#bart"),u(f,"class","relative group"),u(we,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),u(we,"rel","nofollow"),u(_e,"id","overview"),u(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_e,"href","#overview"),u(Q,"class","relative group"),u(ze,"href","https://arxiv.org/abs/1910.13461"),u(ze,"rel","nofollow"),u(qe,"href","https://huggingface.co/sshleifer"),u(qe,"rel","nofollow"),u(ee,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),u(ee,"rel","nofollow"),u(L,"id","examples"),u(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(L,"href","#examples"),u(pe,"class","relative group"),u(ot,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),u(ot,"rel","nofollow"),u(ne,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(Ce,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),u(Ce,"rel","nofollow"),u(La,"href","https://huggingface.co/models?search=distilbart"),u(La,"rel","nofollow"),u(Da,"href","https://arxiv.org/abs/2010.13002"),u(Da,"rel","nofollow"),u(Yo,"id","implementation-notes"),u(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yo,"href","#implementation-notes"),u(uo,"class","relative group"),u(Ui,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),u(Ri,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode"),u(Hi,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartModel"),u(Vi,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),u(en,"id","mask-filling"),u(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(en,"href","#mask-filling"),u(_o,"class","relative group"),u(tn,"id","resources"),u(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(tn,"href","#resources"),u(go,"class","relative group"),u(Va,"href","https://huggingface.co/blog/sagemaker-distributed-training-seq2seq"),u(Va,"rel","nofollow"),u(Ka,"href","https://colab.research.google.com/github/ohmeow/ohmeow_website/blob/master/_notebooks/2020-05-23-text-generation-with-blurr.ipynb"),u(Ka,"rel","nofollow"),u(Za,"href","https://colab.research.google.com/github/elsanns/xai-nlp-notebooks/blob/master/fine_tune_bart_summarization_two_langs.ipynb"),u(Za,"rel","nofollow"),u(Ki,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(Ya,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),u(Ya,"rel","nofollow"),u(es,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization.ipynb"),u(es,"rel","nofollow"),u(Xi,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),u(ts,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),u(ts,"rel","nofollow"),u(os,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization-tf.ipynb"),u(os,"rel","nofollow"),u(Zi,"href","/docs/transformers/main/en/model_doc/bart#transformers.FlaxBartForConditionalGeneration"),u(ns,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),u(ns,"rel","nofollow"),u(as,"href","https://huggingface.co/course/chapter7/5?fw=pt#summarization"),u(as,"rel","nofollow"),u(ed,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(rs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#robertabertdistilbert-and-masked-language-modeling"),u(rs,"rel","nofollow"),u(is,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb"),u(is,"rel","nofollow"),u(td,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),u(ds,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_mlmpy"),u(ds,"rel","nofollow"),u(ls,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb"),u(ls,"rel","nofollow"),u(od,"href","/docs/transformers/main/en/model_doc/bart#transformers.FlaxBartForConditionalGeneration"),u(cs,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#masked-language-modeling"),u(cs,"rel","nofollow"),u(ps,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/masked_language_modeling_flax.ipynb"),u(ps,"rel","nofollow"),u(us,"href","https://huggingface.co/course/chapter7/3?fw=pt"),u(us,"rel","nofollow"),u(fs,"href","https://colab.research.google.com/github/vasudevgupta7/huggingface-tutorials/blob/main/translation_training.ipynb"),u(fs,"rel","nofollow"),u(ad,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(_s,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),u(_s,"rel","nofollow"),u(gs,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation.ipynb"),u(gs,"rel","nofollow"),u(sd,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),u(bs,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),u(bs,"rel","nofollow"),u(ks,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation-tf.ipynb"),u(ks,"rel","nofollow"),u(nn,"id","transformers.BartConfig"),u(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nn,"href","#transformers.BartConfig"),u(bo,"class","relative group"),u(rd,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartModel"),u(Ts,"href","https://huggingface.co/facebook/bart-large"),u(Ts,"rel","nofollow"),u(id,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(dd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sn,"id","transformers.BartTokenizer"),u(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sn,"href","#transformers.BartTokenizer"),u(vo,"class","relative group"),u(ld,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(un,"id","transformers.BartTokenizerFast"),u(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(un,"href","#transformers.BartTokenizerFast"),u(To,"class","relative group"),u(ud,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_n,"id","transformers.BartModel"),u(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_n,"href","#transformers.BartModel"),u(wo,"class","relative group"),u(hd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ws,"rel","nofollow"),u(md,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartModel"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.BartForConditionalGeneration"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.BartForConditionalGeneration"),u(xo,"class","relative group"),u(fd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Js,"rel","nofollow"),u(_d,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wn,"id","transformers.BartForSequenceClassification"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.BartForSequenceClassification"),u(zo,"class","relative group"),u(gd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(tr,"rel","nofollow"),u(bd,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForSequenceClassification"),u(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"id","transformers.BartForQuestionAnswering"),u(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qn,"href","#transformers.BartForQuestionAnswering"),u(qo,"class","relative group"),u(kd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ir,"rel","nofollow"),u(yd,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForQuestionAnswering"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mn,"id","transformers.BartForCausalLM"),u(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mn,"href","#transformers.BartForCausalLM"),u(Eo,"class","relative group"),u(vd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(hr,"rel","nofollow"),u(An,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sn,"id","transformers.TFBartModel"),u(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sn,"href","#transformers.TFBartModel"),u(Mo,"class","relative group"),u(Td,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(kr,"rel","nofollow"),u(wd,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartModel"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ln,"id","transformers.TFBartForConditionalGeneration"),u(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ln,"href","#transformers.TFBartForConditionalGeneration"),u(Po,"class","relative group"),u($d,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xr,"rel","nofollow"),u(xd,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.FlaxBartModel"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.FlaxBartModel"),u(Oo,"class","relative group"),u(Fd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Cr,"rel","nofollow"),u(Er,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Er,"rel","nofollow"),u(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Mr,"rel","nofollow"),u(Ar,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ar,"rel","nofollow"),u(Pr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Pr,"rel","nofollow"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zn,"id","transformers.FlaxBartForConditionalGeneration"),u(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zn,"href","#transformers.FlaxBartForConditionalGeneration"),u(No,"class","relative group"),u(zd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Wr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(Wr,"rel","nofollow"),u(Ur,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ur,"rel","nofollow"),u(Rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Rr,"rel","nofollow"),u(Hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Hr,"rel","nofollow"),u(Qr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Qr,"rel","nofollow"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(aa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ra,"id","transformers.FlaxBartForSequenceClassification"),u(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ra,"href","#transformers.FlaxBartForSequenceClassification"),u(Do,"class","relative group"),u(Bd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ti,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(ti,"rel","nofollow"),u(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(oi,"rel","nofollow"),u(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ni,"rel","nofollow"),u(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ai,"rel","nofollow"),u(si,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(si,"rel","nofollow"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(la,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ha,"id","transformers.FlaxBartForQuestionAnswering"),u(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ha,"href","#transformers.FlaxBartForQuestionAnswering"),u(Wo,"class","relative group"),u(qd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(hi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(hi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(mi,"rel","nofollow"),u(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(fi,"rel","nofollow"),u(_i,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(_i,"rel","nofollow"),u(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(gi,"rel","nofollow"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_a,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ba,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ya,"id","transformers.FlaxBartForCausalLM"),u(ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ya,"href","#transformers.FlaxBartForCausalLM"),u(Ho,"class","relative group"),u(jd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(xi,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),u(xi,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Fi,"rel","nofollow"),u(zi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(zi,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Bi,"rel","nofollow"),u(qi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(qi,"rel","nofollow"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),k(o,b,g),k(o,f,g),e(f,p),e(p,_),T(n,_,null),e(f,c),e(f,B),e(B,de),k(o,H,g),k(o,I,g),e(I,fe),e(fe,Qe),e(I,j),e(I,we),e(we,$e),e(I,bt),k(o,dt,g),k(o,Q,g),e(Q,_e),e(_e,Ve),T(Y,Ve,null),e(Q,kt),e(Q,Je),e(Je,xe),k(o,lt,g),k(o,ge,g),e(ge,Fe),e(ge,ze),e(ze,yt),e(ge,Ke),k(o,O,g),k(o,N,g),e(N,vt),k(o,be,g),k(o,oe,g),e(oe,Xe),e(Xe,Be),e(oe,Tt),e(oe,Ze),e(Ze,V),e(oe,wt),e(oe,le),e(le,$t),k(o,ct,g),k(o,W,g),e(W,xt),e(W,qe),e(qe,ce),e(W,Ft),e(W,ee),e(ee,zt),e(W,Ye),k(o,U,g),k(o,pe,g),e(pe,L),e(L,et),T(je,et,null),e(pe,z),e(pe,C),e(C,to),k(o,Ie,g),k(o,ke,g),e(ke,tt),e(tt,P),e(tt,ot),e(ot,oo),e(tt,no),e(ke,ao),e(ke,ue),e(ue,he),e(ue,ne),e(ne,so),e(ue,ro),e(ue,me),e(me,io),e(ue,lo),e(ue,Ce),e(Ce,co),e(ue,nt),e(ke,po),e(ke,Zo),e(Zo,La),e(La,zh),e(Zo,Bh),e(Zo,Da),e(Da,qh),e(Zo,jh),k(o,Fp,g),k(o,uo,g),e(uo,Yo),e(Yo,Xd),T(Ga,Xd,null),e(uo,Ch),e(uo,Zd),e(Zd,Eh),k(o,zp,g),k(o,Ne,g),e(Ne,Bt),e(Bt,Mh),e(Bt,Yd),e(Yd,Ah),e(Bt,Ph),e(Bt,Ui),e(Ui,Sh),e(Bt,Oh),e(Bt,Ri),e(Ri,Ih),e(Bt,Nh),e(Ne,Lh),e(Ne,ho),e(ho,Dh),e(ho,Hi),e(Hi,Gh),e(ho,Wh),e(ho,el),e(el,Uh),e(ho,Rh),e(Ne,Hh),e(Ne,mo),e(mo,Qh),e(mo,tl),e(tl,Vh),e(mo,Jh),e(mo,ol),e(ol,Kh),e(mo,Xh),e(Ne,Zh),e(Ne,Qi),e(Qi,Vi),e(Vi,Yh),e(Qi,em),e(Ne,tm),e(Ne,fo),e(fo,om),e(fo,nl),e(nl,nm),e(fo,am),e(fo,al),e(al,sm),e(fo,rm),k(o,Bp,g),k(o,_o,g),e(_o,en),e(en,sl),T(Wa,sl,null),e(_o,im),e(_o,rl),e(rl,dm),k(o,qp,g),k(o,St,g),e(St,lm),e(St,il),e(il,cm),e(St,pm),e(St,dl),e(dl,um),e(St,hm),k(o,jp,g),T(Ua,o,g),k(o,Cp,g),k(o,go,g),e(go,tn),e(tn,ll),T(Ra,ll,null),e(go,mm),e(go,cl),e(cl,fm),k(o,Ep,g),k(o,Ji,g),e(Ji,_m),k(o,Mp,g),T(Ha,o,g),k(o,Ap,g),k(o,ae,g),e(ae,Qa),e(Qa,gm),e(Qa,Va),e(Va,bm),e(Qa,km),e(ae,ym),e(ae,Ja),e(Ja,vm),e(Ja,Ka),e(Ka,Tm),e(Ja,wm),e(ae,$m),e(ae,Xa),e(Xa,xm),e(Xa,Za),e(Za,Fm),e(Xa,zm),e(ae,Bm),e(ae,Ot),e(Ot,Ki),e(Ki,qm),e(Ot,jm),e(Ot,Ya),e(Ya,Cm),e(Ot,Em),e(Ot,es),e(es,Mm),e(Ot,Am),e(ae,Pm),e(ae,It),e(It,Xi),e(Xi,Sm),e(It,Om),e(It,ts),e(ts,Im),e(It,Nm),e(It,os),e(os,Lm),e(It,Dm),e(ae,Gm),e(ae,on),e(on,Zi),e(Zi,Wm),e(on,Um),e(on,ns),e(ns,Rm),e(on,Hm),e(ae,Qm),e(ae,Yi),e(Yi,as),e(as,Vm),e(Yi,Jm),k(o,Pp,g),T(ss,o,g),k(o,Sp,g),k(o,pt,g),e(pt,Nt),e(Nt,ed),e(ed,Km),e(Nt,Xm),e(Nt,rs),e(rs,Zm),e(Nt,Ym),e(Nt,is),e(is,ef),e(Nt,tf),e(pt,of),e(pt,Lt),e(Lt,td),e(td,nf),e(Lt,af),e(Lt,ds),e(ds,sf),e(Lt,rf),e(Lt,ls),e(ls,df),e(Lt,lf),e(pt,cf),e(pt,Dt),e(Dt,od),e(od,pf),e(Dt,uf),e(Dt,cs),e(cs,hf),e(Dt,mf),e(Dt,ps),e(ps,ff),e(Dt,_f),e(pt,gf),e(pt,nd),e(nd,us),e(us,bf),e(nd,kf),k(o,Op,g),T(hs,o,g),k(o,Ip,g),k(o,Gt,g),e(Gt,ms),e(ms,yf),e(ms,fs),e(fs,vf),e(ms,Tf),e(Gt,wf),e(Gt,Wt),e(Wt,ad),e(ad,$f),e(Wt,xf),e(Wt,_s),e(_s,Ff),e(Wt,zf),e(Wt,gs),e(gs,Bf),e(Wt,qf),e(Gt,jf),e(Gt,Ut),e(Ut,sd),e(sd,Cf),e(Ut,Ef),e(Ut,bs),e(bs,Mf),e(Ut,Af),e(Ut,ks),e(ks,Pf),e(Ut,Sf),k(o,Np,g),k(o,bo,g),e(bo,nn),e(nn,pl),T(ys,pl,null),e(bo,Of),e(bo,ul),e(ul,If),k(o,Lp,g),k(o,at,g),T(vs,at,null),e(at,Nf),e(at,ko),e(ko,Lf),e(ko,rd),e(rd,Df),e(ko,Gf),e(ko,Ts),e(Ts,Wf),e(ko,Uf),e(at,Rf),e(at,yo),e(yo,Hf),e(yo,id),e(id,Qf),e(yo,Vf),e(yo,dd),e(dd,Jf),e(yo,Kf),e(at,Xf),T(an,at,null),k(o,Dp,g),k(o,vo,g),e(vo,sn),e(sn,hl),T(ws,hl,null),e(vo,Zf),e(vo,ml),e(ml,Yf),k(o,Gp,g),k(o,S,g),T($s,S,null),e(S,e_),e(S,fl),e(fl,t_),e(S,o_),e(S,_l),e(_l,n_),e(S,a_),T(rn,S,null),e(S,s_),e(S,xs),e(xs,r_),e(xs,gl),e(gl,i_),e(xs,d_),e(S,l_),T(dn,S,null),e(S,c_),e(S,Fs),e(Fs,p_),e(Fs,ld),e(ld,u_),e(Fs,h_),e(S,m_),e(S,Rt),T(zs,Rt,null),e(Rt,f_),e(Rt,bl),e(bl,__),e(Rt,g_),e(Rt,Bs),e(Bs,cd),e(cd,b_),e(cd,kl),e(kl,k_),e(Bs,y_),e(Bs,pd),e(pd,v_),e(pd,yl),e(yl,T_),e(S,w_),e(S,ln),T(qs,ln,null),e(ln,$_),e(ln,vl),e(vl,x_),e(S,F_),e(S,cn),T(js,cn,null),e(cn,z_),e(cn,Tl),e(Tl,B_),e(S,q_),e(S,pn),T(Cs,pn,null),e(pn,j_),e(pn,Es),e(Es,C_),e(Es,wl),e(wl,E_),e(Es,M_),k(o,Wp,g),k(o,To,g),e(To,un),e(un,$l),T(Ms,$l,null),e(To,A_),e(To,xl),e(xl,P_),k(o,Up,g),k(o,J,g),T(As,J,null),e(J,S_),e(J,Ps),e(Ps,O_),e(Ps,Fl),e(Fl,I_),e(Ps,N_),e(J,L_),e(J,zl),e(zl,D_),e(J,G_),T(hn,J,null),e(J,W_),e(J,Ss),e(Ss,U_),e(Ss,Bl),e(Bl,R_),e(Ss,H_),e(J,Q_),T(mn,J,null),e(J,V_),e(J,Os),e(Os,J_),e(Os,ud),e(ud,K_),e(Os,X_),e(J,Z_),e(J,fn),T(Is,fn,null),e(fn,Y_),e(fn,ql),e(ql,eg),k(o,Rp,g),k(o,wo,g),e(wo,_n),e(_n,jl),T(Ns,jl,null),e(wo,tg),e(wo,Cl),e(Cl,og),k(o,Hp,g),k(o,st,g),T(Ls,st,null),e(st,ng),e(st,Ds),e(Ds,ag),e(Ds,hd),e(hd,sg),e(Ds,rg),e(st,ig),e(st,Gs),e(Gs,dg),e(Gs,Ws),e(Ws,lg),e(Gs,cg),e(st,pg),e(st,ut),T(Us,ut,null),e(ut,ug),e(ut,$o),e($o,hg),e($o,md),e(md,mg),e($o,fg),e($o,El),e(El,_g),e($o,gg),e(ut,bg),T(gn,ut,null),e(ut,kg),T(bn,ut,null),k(o,Qp,g),k(o,xo,g),e(xo,kn),e(kn,Ml),T(Rs,Ml,null),e(xo,yg),e(xo,Al),e(Al,vg),k(o,Vp,g),k(o,rt,g),T(Hs,rt,null),e(rt,Tg),e(rt,Qs),e(Qs,wg),e(Qs,fd),e(fd,$g),e(Qs,xg),e(rt,Fg),e(rt,Vs),e(Vs,zg),e(Vs,Js),e(Js,Bg),e(Vs,qg),e(rt,jg),e(rt,Le),T(Ks,Le,null),e(Le,Cg),e(Le,Fo),e(Fo,Eg),e(Fo,_d),e(_d,Mg),e(Fo,Ag),e(Fo,Pl),e(Pl,Pg),e(Fo,Sg),e(Le,Og),T(yn,Le,null),e(Le,Ig),T(vn,Le,null),e(Le,Ng),T(Tn,Le,null),k(o,Jp,g),k(o,zo,g),e(zo,wn),e(wn,Sl),T(Xs,Sl,null),e(zo,Lg),e(zo,Ol),e(Ol,Dg),k(o,Kp,g),k(o,Ee,g),T(Zs,Ee,null),e(Ee,Gg),e(Ee,Il),e(Il,Wg),e(Ee,Ug),e(Ee,Ys),e(Ys,Rg),e(Ys,gd),e(gd,Hg),e(Ys,Qg),e(Ee,Vg),e(Ee,er),e(er,Jg),e(er,tr),e(tr,Kg),e(er,Xg),e(Ee,Zg),e(Ee,se),T(or,se,null),e(se,Yg),e(se,Bo),e(Bo,eb),e(Bo,bd),e(bd,tb),e(Bo,ob),e(Bo,Nl),e(Nl,nb),e(Bo,ab),e(se,sb),T($n,se,null),e(se,rb),T(xn,se,null),e(se,ib),T(Fn,se,null),e(se,db),T(zn,se,null),e(se,lb),T(Bn,se,null),k(o,Xp,g),k(o,qo,g),e(qo,qn),e(qn,Ll),T(nr,Ll,null),e(qo,cb),e(qo,Dl),e(Dl,pb),k(o,Zp,g),k(o,Me,g),T(ar,Me,null),e(Me,ub),e(Me,jo),e(jo,hb),e(jo,Gl),e(Gl,mb),e(jo,fb),e(jo,Wl),e(Wl,_b),e(jo,gb),e(Me,bb),e(Me,sr),e(sr,kb),e(sr,kd),e(kd,yb),e(sr,vb),e(Me,Tb),e(Me,rr),e(rr,wb),e(rr,ir),e(ir,$b),e(rr,xb),e(Me,Fb),e(Me,De),T(dr,De,null),e(De,zb),e(De,Co),e(Co,Bb),e(Co,yd),e(yd,qb),e(Co,jb),e(Co,Ul),e(Ul,Cb),e(Co,Eb),e(De,Mb),T(jn,De,null),e(De,Ab),T(Cn,De,null),e(De,Pb),T(En,De,null),k(o,Yp,g),k(o,Eo,g),e(Eo,Mn),e(Mn,Rl),T(lr,Rl,null),e(Eo,Sb),e(Eo,Hl),e(Hl,Ob),k(o,eu,g),k(o,Ae,g),T(cr,Ae,null),e(Ae,Ib),e(Ae,Ql),e(Ql,Nb),e(Ae,Lb),e(Ae,pr),e(pr,Db),e(pr,vd),e(vd,Gb),e(pr,Wb),e(Ae,Ub),e(Ae,ur),e(ur,Rb),e(ur,hr),e(hr,Hb),e(ur,Qb),e(Ae,Vb),e(Ae,An),T(mr,An,null),e(An,Jb),T(Pn,An,null),k(o,tu,g),k(o,Mo,g),e(Mo,Sn),e(Sn,Vl),T(fr,Vl,null),e(Mo,Kb),e(Mo,Jl),e(Jl,Xb),k(o,ou,g),k(o,Pe,g),T(_r,Pe,null),e(Pe,Zb),e(Pe,gr),e(gr,Yb),e(gr,Td),e(Td,ek),e(gr,tk),e(Pe,ok),e(Pe,br),e(br,nk),e(br,kr),e(kr,ak),e(br,sk),e(Pe,rk),T(On,Pe,null),e(Pe,ik),e(Pe,ht),T(yr,ht,null),e(ht,dk),e(ht,Ao),e(Ao,lk),e(Ao,wd),e(wd,ck),e(Ao,pk),e(Ao,Kl),e(Kl,uk),e(Ao,hk),e(ht,mk),T(In,ht,null),e(ht,fk),T(Nn,ht,null),k(o,nu,g),k(o,Po,g),e(Po,Ln),e(Ln,Xl),T(vr,Xl,null),e(Po,_k),e(Po,Zl),e(Zl,gk),k(o,au,g),k(o,Se,g),T(Tr,Se,null),e(Se,bk),e(Se,wr),e(wr,kk),e(wr,$d),e($d,yk),e(wr,vk),e(Se,Tk),e(Se,$r),e($r,wk),e($r,xr),e(xr,$k),e($r,xk),e(Se,Fk),T(Dn,Se,null),e(Se,zk),e(Se,Ge),T(Fr,Ge,null),e(Ge,Bk),e(Ge,So),e(So,qk),e(So,xd),e(xd,jk),e(So,Ck),e(So,Yl),e(Yl,Ek),e(So,Mk),e(Ge,Ak),T(Gn,Ge,null),e(Ge,Pk),T(Wn,Ge,null),e(Ge,Sk),T(Un,Ge,null),k(o,su,g),k(o,Oo,g),e(Oo,Rn),e(Rn,ec),T(zr,ec,null),e(Oo,Ok),e(Oo,tc),e(tc,Ik),k(o,ru,g),k(o,K,g),T(Br,K,null),e(K,Nk),e(K,qr),e(qr,Lk),e(qr,Fd),e(Fd,Dk),e(qr,Gk),e(K,Wk),e(K,jr),e(jr,Uk),e(jr,Cr),e(Cr,Rk),e(jr,Hk),e(K,Qk),e(K,oc),e(oc,Vk),e(K,Jk),e(K,qt),e(qt,nc),e(nc,Er),e(Er,Kk),e(qt,Xk),e(qt,ac),e(ac,Mr),e(Mr,Zk),e(qt,Yk),e(qt,sc),e(sc,Ar),e(Ar,ey),e(qt,ty),e(qt,rc),e(rc,Pr),e(Pr,oy),e(K,ny),e(K,mt),T(Sr,mt,null),e(mt,ay),e(mt,Io),e(Io,sy),e(Io,ic),e(ic,ry),e(Io,iy),e(Io,dc),e(dc,dy),e(Io,ly),e(mt,cy),T(Hn,mt,null),e(mt,py),T(Qn,mt,null),e(K,uy),e(K,Vn),T(Or,Vn,null),e(Vn,hy),T(Jn,Vn,null),e(K,my),e(K,Kn),T(Ir,Kn,null),e(Kn,fy),T(Xn,Kn,null),k(o,iu,g),k(o,No,g),e(No,Zn),e(Zn,lc),T(Nr,lc,null),e(No,_y),e(No,cc),e(cc,gy),k(o,du,g),k(o,X,g),T(Lr,X,null),e(X,by),e(X,Dr),e(Dr,ky),e(Dr,zd),e(zd,yy),e(Dr,vy),e(X,Ty),e(X,Gr),e(Gr,wy),e(Gr,Wr),e(Wr,$y),e(Gr,xy),e(X,Fy),e(X,pc),e(pc,zy),e(X,By),e(X,jt),e(jt,uc),e(uc,Ur),e(Ur,qy),e(jt,jy),e(jt,hc),e(hc,Rr),e(Rr,Cy),e(jt,Ey),e(jt,mc),e(mc,Hr),e(Hr,My),e(jt,Ay),e(jt,fc),e(fc,Qr),e(Qr,Py),e(X,Sy),e(X,We),T(Vr,We,null),e(We,Oy),e(We,Lo),e(Lo,Iy),e(Lo,_c),e(_c,Ny),e(Lo,Ly),e(Lo,gc),e(gc,Dy),e(Lo,Gy),e(We,Wy),T(Yn,We,null),e(We,Uy),T(ea,We,null),e(We,Ry),T(ta,We,null),e(X,Hy),e(X,oa),T(Jr,oa,null),e(oa,Qy),T(na,oa,null),e(X,Vy),e(X,aa),T(Kr,aa,null),e(aa,Jy),T(sa,aa,null),k(o,lu,g),k(o,Do,g),e(Do,ra),e(ra,bc),T(Xr,bc,null),e(Do,Ky),e(Do,kc),e(kc,Xy),k(o,cu,g),k(o,D,g),T(Zr,D,null),e(D,Zy),e(D,yc),e(yc,Yy),e(D,ev),e(D,Yr),e(Yr,tv),e(Yr,Bd),e(Bd,ov),e(Yr,nv),e(D,av),e(D,ei),e(ei,sv),e(ei,ti),e(ti,rv),e(ei,iv),e(D,dv),e(D,vc),e(vc,lv),e(D,cv),e(D,Ct),e(Ct,Tc),e(Tc,oi),e(oi,pv),e(Ct,uv),e(Ct,wc),e(wc,ni),e(ni,hv),e(Ct,mv),e(Ct,$c),e($c,ai),e(ai,fv),e(Ct,_v),e(Ct,xc),e(xc,si),e(si,gv),e(D,bv),e(D,ft),T(ri,ft,null),e(ft,kv),e(ft,Go),e(Go,yv),e(Go,Fc),e(Fc,vv),e(Go,Tv),e(Go,zc),e(zc,wv),e(Go,$v),e(ft,xv),T(ia,ft,null),e(ft,Fv),T(da,ft,null),e(D,zv),e(D,la),T(ii,la,null),e(la,Bv),T(ca,la,null),e(D,qv),e(D,pa),T(di,pa,null),e(pa,jv),T(ua,pa,null),k(o,pu,g),k(o,Wo,g),e(Wo,ha),e(ha,Bc),T(li,Bc,null),e(Wo,Cv),e(Wo,qc),e(qc,Ev),k(o,uu,g),k(o,G,g),T(ci,G,null),e(G,Mv),e(G,Uo),e(Uo,Av),e(Uo,jc),e(jc,Pv),e(Uo,Sv),e(Uo,Cc),e(Cc,Ov),e(Uo,Iv),e(G,Nv),e(G,pi),e(pi,Lv),e(pi,qd),e(qd,Dv),e(pi,Gv),e(G,Wv),e(G,ui),e(ui,Uv),e(ui,hi),e(hi,Rv),e(ui,Hv),e(G,Qv),e(G,Ec),e(Ec,Vv),e(G,Jv),e(G,Et),e(Et,Mc),e(Mc,mi),e(mi,Kv),e(Et,Xv),e(Et,Ac),e(Ac,fi),e(fi,Zv),e(Et,Yv),e(Et,Pc),e(Pc,_i),e(_i,eT),e(Et,tT),e(Et,Sc),e(Sc,gi),e(gi,oT),e(G,nT),e(G,_t),T(bi,_t,null),e(_t,aT),e(_t,Ro),e(Ro,sT),e(Ro,Oc),e(Oc,rT),e(Ro,iT),e(Ro,Ic),e(Ic,dT),e(Ro,lT),e(_t,cT),T(ma,_t,null),e(_t,pT),T(fa,_t,null),e(G,uT),e(G,_a),T(ki,_a,null),e(_a,hT),T(ga,_a,null),e(G,mT),e(G,ba),T(yi,ba,null),e(ba,fT),T(ka,ba,null),k(o,hu,g),k(o,Ho,g),e(Ho,ya),e(ya,Nc),T(vi,Nc,null),e(Ho,_T),e(Ho,Lc),e(Lc,gT),k(o,mu,g),k(o,te,g),T(Ti,te,null),e(te,bT),e(te,Dc),e(Dc,kT),e(te,yT),e(te,wi),e(wi,vT),e(wi,jd),e(jd,TT),e(wi,wT),e(te,$T),e(te,$i),e($i,xT),e($i,xi),e(xi,FT),e($i,zT),e(te,BT),e(te,Gc),e(Gc,qT),e(te,jT),e(te,Mt),e(Mt,Wc),e(Wc,Fi),e(Fi,CT),e(Mt,ET),e(Mt,Uc),e(Uc,zi),e(zi,MT),e(Mt,AT),e(Mt,Rc),e(Rc,Bi),e(Bi,PT),e(Mt,ST),e(Mt,Hc),e(Hc,qi),e(qi,OT),e(te,IT),e(te,gt),T(ji,gt,null),e(gt,NT),e(gt,Qo),e(Qo,LT),e(Qo,Qc),e(Qc,DT),e(Qo,GT),e(Qo,Vc),e(Vc,WT),e(Qo,UT),e(gt,RT),T(va,gt,null),e(gt,HT),T(Ta,gt,null),fu=!0},p(o,[g]){const Ci={};g&2&&(Ci.$$scope={dirty:g,ctx:o}),an.$set(Ci);const Jc={};g&2&&(Jc.$$scope={dirty:g,ctx:o}),rn.$set(Jc);const Kc={};g&2&&(Kc.$$scope={dirty:g,ctx:o}),dn.$set(Kc);const Xc={};g&2&&(Xc.$$scope={dirty:g,ctx:o}),hn.$set(Xc);const wa={};g&2&&(wa.$$scope={dirty:g,ctx:o}),mn.$set(wa);const Zc={};g&2&&(Zc.$$scope={dirty:g,ctx:o}),gn.$set(Zc);const Yc={};g&2&&(Yc.$$scope={dirty:g,ctx:o}),bn.$set(Yc);const Ei={};g&2&&(Ei.$$scope={dirty:g,ctx:o}),yn.$set(Ei);const ep={};g&2&&(ep.$$scope={dirty:g,ctx:o}),vn.$set(ep);const tp={};g&2&&(tp.$$scope={dirty:g,ctx:o}),Tn.$set(tp);const op={};g&2&&(op.$$scope={dirty:g,ctx:o}),$n.$set(op);const Mi={};g&2&&(Mi.$$scope={dirty:g,ctx:o}),xn.$set(Mi);const np={};g&2&&(np.$$scope={dirty:g,ctx:o}),Fn.$set(np);const ap={};g&2&&(ap.$$scope={dirty:g,ctx:o}),zn.$set(ap);const Vo={};g&2&&(Vo.$$scope={dirty:g,ctx:o}),Bn.$set(Vo);const sp={};g&2&&(sp.$$scope={dirty:g,ctx:o}),jn.$set(sp);const rp={};g&2&&(rp.$$scope={dirty:g,ctx:o}),Cn.$set(rp);const ip={};g&2&&(ip.$$scope={dirty:g,ctx:o}),En.$set(ip);const Jo={};g&2&&(Jo.$$scope={dirty:g,ctx:o}),Pn.$set(Jo);const dp={};g&2&&(dp.$$scope={dirty:g,ctx:o}),On.$set(dp);const lp={};g&2&&(lp.$$scope={dirty:g,ctx:o}),In.$set(lp);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:o}),Nn.$set(Ai);const cp={};g&2&&(cp.$$scope={dirty:g,ctx:o}),Dn.$set(cp);const pp={};g&2&&(pp.$$scope={dirty:g,ctx:o}),Gn.$set(pp);const up={};g&2&&(up.$$scope={dirty:g,ctx:o}),Wn.$set(up);const Ko={};g&2&&(Ko.$$scope={dirty:g,ctx:o}),Un.$set(Ko);const Pi={};g&2&&(Pi.$$scope={dirty:g,ctx:o}),Hn.$set(Pi);const hp={};g&2&&(hp.$$scope={dirty:g,ctx:o}),Qn.$set(hp);const At={};g&2&&(At.$$scope={dirty:g,ctx:o}),Jn.$set(At);const mp={};g&2&&(mp.$$scope={dirty:g,ctx:o}),Xn.$set(mp);const fp={};g&2&&(fp.$$scope={dirty:g,ctx:o}),Yn.$set(fp);const _p={};g&2&&(_p.$$scope={dirty:g,ctx:o}),ea.$set(_p);const $a={};g&2&&($a.$$scope={dirty:g,ctx:o}),ta.$set($a);const gp={};g&2&&(gp.$$scope={dirty:g,ctx:o}),na.$set(gp);const bp={};g&2&&(bp.$$scope={dirty:g,ctx:o}),sa.$set(bp);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:o}),ia.$set(Si);const kp={};g&2&&(kp.$$scope={dirty:g,ctx:o}),da.$set(kp);const yp={};g&2&&(yp.$$scope={dirty:g,ctx:o}),ca.$set(yp);const vp={};g&2&&(vp.$$scope={dirty:g,ctx:o}),ua.$set(vp);const it={};g&2&&(it.$$scope={dirty:g,ctx:o}),ma.$set(it);const Pt={};g&2&&(Pt.$$scope={dirty:g,ctx:o}),fa.$set(Pt);const Tp={};g&2&&(Tp.$$scope={dirty:g,ctx:o}),ga.$set(Tp);const wp={};g&2&&(wp.$$scope={dirty:g,ctx:o}),ka.$set(wp);const $p={};g&2&&($p.$$scope={dirty:g,ctx:o}),va.$set($p);const Xo={};g&2&&(Xo.$$scope={dirty:g,ctx:o}),Ta.$set(Xo)},i(o){fu||(w(n.$$.fragment,o),w(Y.$$.fragment,o),w(je.$$.fragment,o),w(Ga.$$.fragment,o),w(Wa.$$.fragment,o),w(Ua.$$.fragment,o),w(Ra.$$.fragment,o),w(Ha.$$.fragment,o),w(ss.$$.fragment,o),w(hs.$$.fragment,o),w(ys.$$.fragment,o),w(vs.$$.fragment,o),w(an.$$.fragment,o),w(ws.$$.fragment,o),w($s.$$.fragment,o),w(rn.$$.fragment,o),w(dn.$$.fragment,o),w(zs.$$.fragment,o),w(qs.$$.fragment,o),w(js.$$.fragment,o),w(Cs.$$.fragment,o),w(Ms.$$.fragment,o),w(As.$$.fragment,o),w(hn.$$.fragment,o),w(mn.$$.fragment,o),w(Is.$$.fragment,o),w(Ns.$$.fragment,o),w(Ls.$$.fragment,o),w(Us.$$.fragment,o),w(gn.$$.fragment,o),w(bn.$$.fragment,o),w(Rs.$$.fragment,o),w(Hs.$$.fragment,o),w(Ks.$$.fragment,o),w(yn.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w(Xs.$$.fragment,o),w(Zs.$$.fragment,o),w(or.$$.fragment,o),w($n.$$.fragment,o),w(xn.$$.fragment,o),w(Fn.$$.fragment,o),w(zn.$$.fragment,o),w(Bn.$$.fragment,o),w(nr.$$.fragment,o),w(ar.$$.fragment,o),w(dr.$$.fragment,o),w(jn.$$.fragment,o),w(Cn.$$.fragment,o),w(En.$$.fragment,o),w(lr.$$.fragment,o),w(cr.$$.fragment,o),w(mr.$$.fragment,o),w(Pn.$$.fragment,o),w(fr.$$.fragment,o),w(_r.$$.fragment,o),w(On.$$.fragment,o),w(yr.$$.fragment,o),w(In.$$.fragment,o),w(Nn.$$.fragment,o),w(vr.$$.fragment,o),w(Tr.$$.fragment,o),w(Dn.$$.fragment,o),w(Fr.$$.fragment,o),w(Gn.$$.fragment,o),w(Wn.$$.fragment,o),w(Un.$$.fragment,o),w(zr.$$.fragment,o),w(Br.$$.fragment,o),w(Sr.$$.fragment,o),w(Hn.$$.fragment,o),w(Qn.$$.fragment,o),w(Or.$$.fragment,o),w(Jn.$$.fragment,o),w(Ir.$$.fragment,o),w(Xn.$$.fragment,o),w(Nr.$$.fragment,o),w(Lr.$$.fragment,o),w(Vr.$$.fragment,o),w(Yn.$$.fragment,o),w(ea.$$.fragment,o),w(ta.$$.fragment,o),w(Jr.$$.fragment,o),w(na.$$.fragment,o),w(Kr.$$.fragment,o),w(sa.$$.fragment,o),w(Xr.$$.fragment,o),w(Zr.$$.fragment,o),w(ri.$$.fragment,o),w(ia.$$.fragment,o),w(da.$$.fragment,o),w(ii.$$.fragment,o),w(ca.$$.fragment,o),w(di.$$.fragment,o),w(ua.$$.fragment,o),w(li.$$.fragment,o),w(ci.$$.fragment,o),w(bi.$$.fragment,o),w(ma.$$.fragment,o),w(fa.$$.fragment,o),w(ki.$$.fragment,o),w(ga.$$.fragment,o),w(yi.$$.fragment,o),w(ka.$$.fragment,o),w(vi.$$.fragment,o),w(Ti.$$.fragment,o),w(ji.$$.fragment,o),w(va.$$.fragment,o),w(Ta.$$.fragment,o),fu=!0)},o(o){$(n.$$.fragment,o),$(Y.$$.fragment,o),$(je.$$.fragment,o),$(Ga.$$.fragment,o),$(Wa.$$.fragment,o),$(Ua.$$.fragment,o),$(Ra.$$.fragment,o),$(Ha.$$.fragment,o),$(ss.$$.fragment,o),$(hs.$$.fragment,o),$(ys.$$.fragment,o),$(vs.$$.fragment,o),$(an.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(rn.$$.fragment,o),$(dn.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(Ms.$$.fragment,o),$(As.$$.fragment,o),$(hn.$$.fragment,o),$(mn.$$.fragment,o),$(Is.$$.fragment,o),$(Ns.$$.fragment,o),$(Ls.$$.fragment,o),$(Us.$$.fragment,o),$(gn.$$.fragment,o),$(bn.$$.fragment,o),$(Rs.$$.fragment,o),$(Hs.$$.fragment,o),$(Ks.$$.fragment,o),$(yn.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(Xs.$$.fragment,o),$(Zs.$$.fragment,o),$(or.$$.fragment,o),$($n.$$.fragment,o),$(xn.$$.fragment,o),$(Fn.$$.fragment,o),$(zn.$$.fragment,o),$(Bn.$$.fragment,o),$(nr.$$.fragment,o),$(ar.$$.fragment,o),$(dr.$$.fragment,o),$(jn.$$.fragment,o),$(Cn.$$.fragment,o),$(En.$$.fragment,o),$(lr.$$.fragment,o),$(cr.$$.fragment,o),$(mr.$$.fragment,o),$(Pn.$$.fragment,o),$(fr.$$.fragment,o),$(_r.$$.fragment,o),$(On.$$.fragment,o),$(yr.$$.fragment,o),$(In.$$.fragment,o),$(Nn.$$.fragment,o),$(vr.$$.fragment,o),$(Tr.$$.fragment,o),$(Dn.$$.fragment,o),$(Fr.$$.fragment,o),$(Gn.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(zr.$$.fragment,o),$(Br.$$.fragment,o),$(Sr.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(Or.$$.fragment,o),$(Jn.$$.fragment,o),$(Ir.$$.fragment,o),$(Xn.$$.fragment,o),$(Nr.$$.fragment,o),$(Lr.$$.fragment,o),$(Vr.$$.fragment,o),$(Yn.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(Jr.$$.fragment,o),$(na.$$.fragment,o),$(Kr.$$.fragment,o),$(sa.$$.fragment,o),$(Xr.$$.fragment,o),$(Zr.$$.fragment,o),$(ri.$$.fragment,o),$(ia.$$.fragment,o),$(da.$$.fragment,o),$(ii.$$.fragment,o),$(ca.$$.fragment,o),$(di.$$.fragment,o),$(ua.$$.fragment,o),$(li.$$.fragment,o),$(ci.$$.fragment,o),$(bi.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(ki.$$.fragment,o),$(ga.$$.fragment,o),$(yi.$$.fragment,o),$(ka.$$.fragment,o),$(vi.$$.fragment,o),$(Ti.$$.fragment,o),$(ji.$$.fragment,o),$(va.$$.fragment,o),$(Ta.$$.fragment,o),fu=!1},d(o){t(l),o&&t(b),o&&t(f),x(n),o&&t(H),o&&t(I),o&&t(dt),o&&t(Q),x(Y),o&&t(lt),o&&t(ge),o&&t(O),o&&t(N),o&&t(be),o&&t(oe),o&&t(ct),o&&t(W),o&&t(U),o&&t(pe),x(je),o&&t(Ie),o&&t(ke),o&&t(Fp),o&&t(uo),x(Ga),o&&t(zp),o&&t(Ne),o&&t(Bp),o&&t(_o),x(Wa),o&&t(qp),o&&t(St),o&&t(jp),x(Ua,o),o&&t(Cp),o&&t(go),x(Ra),o&&t(Ep),o&&t(Ji),o&&t(Mp),x(Ha,o),o&&t(Ap),o&&t(ae),o&&t(Pp),x(ss,o),o&&t(Sp),o&&t(pt),o&&t(Op),x(hs,o),o&&t(Ip),o&&t(Gt),o&&t(Np),o&&t(bo),x(ys),o&&t(Lp),o&&t(at),x(vs),x(an),o&&t(Dp),o&&t(vo),x(ws),o&&t(Gp),o&&t(S),x($s),x(rn),x(dn),x(zs),x(qs),x(js),x(Cs),o&&t(Wp),o&&t(To),x(Ms),o&&t(Up),o&&t(J),x(As),x(hn),x(mn),x(Is),o&&t(Rp),o&&t(wo),x(Ns),o&&t(Hp),o&&t(st),x(Ls),x(Us),x(gn),x(bn),o&&t(Qp),o&&t(xo),x(Rs),o&&t(Vp),o&&t(rt),x(Hs),x(Ks),x(yn),x(vn),x(Tn),o&&t(Jp),o&&t(zo),x(Xs),o&&t(Kp),o&&t(Ee),x(Zs),x(or),x($n),x(xn),x(Fn),x(zn),x(Bn),o&&t(Xp),o&&t(qo),x(nr),o&&t(Zp),o&&t(Me),x(ar),x(dr),x(jn),x(Cn),x(En),o&&t(Yp),o&&t(Eo),x(lr),o&&t(eu),o&&t(Ae),x(cr),x(mr),x(Pn),o&&t(tu),o&&t(Mo),x(fr),o&&t(ou),o&&t(Pe),x(_r),x(On),x(yr),x(In),x(Nn),o&&t(nu),o&&t(Po),x(vr),o&&t(au),o&&t(Se),x(Tr),x(Dn),x(Fr),x(Gn),x(Wn),x(Un),o&&t(su),o&&t(Oo),x(zr),o&&t(ru),o&&t(K),x(Br),x(Sr),x(Hn),x(Qn),x(Or),x(Jn),x(Ir),x(Xn),o&&t(iu),o&&t(No),x(Nr),o&&t(du),o&&t(X),x(Lr),x(Vr),x(Yn),x(ea),x(ta),x(Jr),x(na),x(Kr),x(sa),o&&t(lu),o&&t(Do),x(Xr),o&&t(cu),o&&t(D),x(Zr),x(ri),x(ia),x(da),x(ii),x(ca),x(di),x(ua),o&&t(pu),o&&t(Wo),x(li),o&&t(uu),o&&t(G),x(ci),x(bi),x(ma),x(fa),x(ki),x(ga),x(yi),x(ka),o&&t(hu),o&&t(Ho),x(vi),o&&t(mu),o&&t(te),x(Ti),x(ji),x(va),x(Ta)}}}const G2={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"resources",title:"Resources"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"},{local:"transformers.FlaxBartForCausalLM",title:"FlaxBartForCausalLM"}],title:"BART"};function W2(F){return Jx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class X2 extends Rx{constructor(l){super();Hx(this,l,W2,D2,Qx,{})}}export{X2 as default,G2 as metadata};
