import{S as _T,i as gT,s as bT,e as a,k as u,w as y,t as i,M as kT,c as s,d as t,m as h,a as r,x as v,h as d,b as f,G as e,g as k,y as T,q as w,o as $,B as x,v as yT,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as Se}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as M}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function vT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartModel, BartConfig

# Initializing a BART facebook/bart-large style configuration
configuration = BartConfig()

# Initializing a model from the facebook/bart-large style configuration
model = BartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartModel, BartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BART facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function TT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),g=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function wT(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("When used with "),m=a("code"),p=i("is_split_into_words=True"),_=i(", this tokenizer will add a space before each word (even the first one).")},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"When used with "),m=s(c,"CODE",{});var B=r(m);p=d(B,"is_split_into_words=True"),B.forEach(t),_=d(c,", this tokenizer will add a space before each word (even the first one)."),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function $T(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),g=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function xT(F){let l,g,m,p,_,o,c,B;return{c(){l=a("p"),g=i("When used with "),m=a("code"),p=i("is_split_into_words=True"),_=i(", this tokenizer needs to be instantiated with "),o=a("code"),c=i("add_prefix_space=True"),B=i(".")},l(ie){l=s(ie,"P",{});var Q=r(l);g=d(Q,"When used with "),m=s(Q,"CODE",{});var I=r(m);p=d(I,"is_split_into_words=True"),I.forEach(t),_=d(Q,", this tokenizer needs to be instantiated with "),o=s(Q,"CODE",{});var me=r(o);c=d(me,"add_prefix_space=True"),me.forEach(t),B=d(Q,"."),Q.forEach(t)},m(ie,Q){k(ie,l,Q),e(l,g),e(l,m),e(m,p),e(l,_),e(l,o),e(o,c),e(l,B)},d(ie){ie&&t(l)}}}function FT(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function zT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, BartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function BT(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function qT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
<span class="hljs-string">&#x27;PG&amp;E scheduled the blackouts in response to forecasts for high winds amid dry conditions&#x27;</span>`}}),{c(){l=a("p"),g=i("Summarization example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Summarization example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function jT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
[<span class="hljs-string">&#x27;not&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;great&#x27;</span>, <span class="hljs-string">&#x27;very&#x27;</span>]`}}),{c(){l=a("p"),g=i("Mask filling example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Mask filling example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function CT(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function MT(F){let l,g,m,p,_;return p=new M({props:{code:`import torch
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
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),g=i("Example of single-label classification:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example of single-label classification:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function ET(F){let l,g;return l=new M({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.0</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,p){T(l,m,p),g=!0},p:P,i(m){g||(w(l.$$.fragment,m),g=!0)},o(m){$(l.$$.fragment,m),g=!1},d(m){x(l,m)}}}function PT(F){let l,g,m,p,_;return p=new M({props:{code:`import torch
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
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),g=i("Example of multi-label classification:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example of multi-label classification:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function AT(F){let l,g;return l=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,p){T(l,m,p),g=!0},p:P,i(m){g||(w(l.$$.fragment,m),g=!0)},o(m){$(l.$$.fragment,m),g=!1},d(m){x(l,m)}}}function ST(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function OT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
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
<span class="hljs-string">&#x27; nice puppet&#x27;</span>`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function IT(F){let l,g;return l=new M({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.59</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,p){T(l,m,p),g=!0},p:P,i(m){g||(w(l.$$.fragment,m),g=!0)},o(m){$(l.$$.fragment,m),g=!1},d(m){x(l,m)}}}function NT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, BartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function LT(F){let l,g,m,p,_,o,c,B,ie,Q,I,me,Re,j,Te,we,ft,rt,H,fe,Qe,Y,_t,He,$e,it,_e,xe,Fe,gt,Ve,O,N,bt,ge,oe,Je,ze,kt,Ke,V,yt,de,vt,dt,W,Tt,Be,le,wt,ee,$t,Xe,U,ce,L,Ze,qe;return{c(){l=a("p"),g=i("TensorFlow models and layers in "),m=a("code"),p=i("transformers"),_=i(" accept two formats as input:"),o=u(),c=a("ul"),B=a("li"),ie=i("having all inputs as keyword arguments (like PyTorch models), or"),Q=u(),I=a("li"),me=i("having all inputs as a list, tuple or dict in the first positional argument."),Re=u(),j=a("p"),Te=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),we=a("code"),ft=i("model.fit()"),rt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),H=a("code"),fe=i("model.fit()"),Qe=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),_t=i("fit()"),He=i(" and "),$e=a("code"),it=i("predict()"),_e=i(`, such as when creating your own layers or models with
the Keras `),xe=a("code"),Fe=i("Functional"),gt=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ve=u(),O=a("ul"),N=a("li"),bt=i("a single Tensor with "),ge=a("code"),oe=i("input_ids"),Je=i(" only and nothing else: "),ze=a("code"),kt=i("model(input_ids)"),Ke=u(),V=a("li"),yt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=a("code"),vt=i("model([input_ids, attention_mask])"),dt=i(" or "),W=a("code"),Tt=i("model([input_ids, attention_mask, token_type_ids])"),Be=u(),le=a("li"),wt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),$t=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe=u(),U=a("p"),ce=i(`Note that when creating models and layers with
`),L=a("a"),Ze=i("subclassing"),qe=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){l=s(z,"P",{});var C=r(l);g=d(C,"TensorFlow models and layers in "),m=s(C,"CODE",{});var Ut=r(m);p=d(Ut,"transformers"),Ut.forEach(t),_=d(C," accept two formats as input:"),C.forEach(t),o=h(z),c=s(z,"UL",{});var Oe=r(c);B=s(Oe,"LI",{});var be=r(B);ie=d(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),Q=h(Oe),I=s(Oe,"LI",{});var Ye=r(I);me=d(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),Oe.forEach(t),Re=h(z),j=s(z,"P",{});var A=r(j);Te=d(A,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),we=s(A,"CODE",{});var et=r(we);ft=d(et,"model.fit()"),et.forEach(t),rt=d(A,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),H=s(A,"CODE",{});var Rt=r(H);fe=d(Rt,"model.fit()"),Rt.forEach(t),Qe=d(A,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=s(A,"CODE",{});var Qt=r(Y);_t=d(Qt,"fit()"),Qt.forEach(t),He=d(A," and "),$e=s(A,"CODE",{});var Ht=r($e);it=d(Ht,"predict()"),Ht.forEach(t),_e=d(A,`, such as when creating your own layers or models with
the Keras `),xe=s(A,"CODE",{});var pe=r(xe);Fe=d(pe,"Functional"),pe.forEach(t),gt=d(A,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),A.forEach(t),Ve=h(z),O=s(z,"UL",{});var ue=r(O);N=s(ue,"LI",{});var ne=r(N);bt=d(ne,"a single Tensor with "),ge=s(ne,"CODE",{});var Vt=r(ge);oe=d(Vt,"input_ids"),Vt.forEach(t),Je=d(ne," only and nothing else: "),ze=s(ne,"CODE",{});var Jt=r(ze);kt=d(Jt,"model(input_ids)"),Jt.forEach(t),ne.forEach(t),Ke=h(ue),V=s(ue,"LI",{});var he=r(V);yt=d(he,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(he,"CODE",{});var Kt=r(de);vt=d(Kt,"model([input_ids, attention_mask])"),Kt.forEach(t),dt=d(he," or "),W=s(he,"CODE",{});var Xt=r(W);Tt=d(Xt,"model([input_ids, attention_mask, token_type_ids])"),Xt.forEach(t),he.forEach(t),Be=h(ue),le=s(ue,"LI",{});var je=r(le);wt=d(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=s(je,"CODE",{});var Zt=r(ee);$t=d(Zt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Zt.forEach(t),je.forEach(t),ue.forEach(t),Xe=h(z),U=s(z,"P",{});var tt=r(U);ce=d(tt,`Note that when creating models and layers with
`),L=s(tt,"A",{href:!0,rel:!0});var Yt=r(L);Ze=d(Yt,"subclassing"),Yt.forEach(t),qe=d(tt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),tt.forEach(t),this.h()},h(){f(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(L,"rel","nofollow")},m(z,C){k(z,l,C),e(l,g),e(l,m),e(m,p),e(l,_),k(z,o,C),k(z,c,C),e(c,B),e(B,ie),e(c,Q),e(c,I),e(I,me),k(z,Re,C),k(z,j,C),e(j,Te),e(j,we),e(we,ft),e(j,rt),e(j,H),e(H,fe),e(j,Qe),e(j,Y),e(Y,_t),e(j,He),e(j,$e),e($e,it),e(j,_e),e(j,xe),e(xe,Fe),e(j,gt),k(z,Ve,C),k(z,O,C),e(O,N),e(N,bt),e(N,ge),e(ge,oe),e(N,Je),e(N,ze),e(ze,kt),e(O,Ke),e(O,V),e(V,yt),e(V,de),e(de,vt),e(V,dt),e(V,W),e(W,Tt),e(O,Be),e(O,le),e(le,wt),e(le,ee),e(ee,$t),k(z,Xe,C),k(z,U,C),e(U,ce),e(U,L),e(L,Ze),e(U,qe)},d(z){z&&t(l),z&&t(o),z&&t(c),z&&t(Re),z&&t(j),z&&t(Ve),z&&t(O),z&&t(Xe),z&&t(U)}}}function DT(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function GT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, TFBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function WT(F){let l,g,m,p,_,o,c,B,ie,Q,I,me,Re,j,Te,we,ft,rt,H,fe,Qe,Y,_t,He,$e,it,_e,xe,Fe,gt,Ve,O,N,bt,ge,oe,Je,ze,kt,Ke,V,yt,de,vt,dt,W,Tt,Be,le,wt,ee,$t,Xe,U,ce,L,Ze,qe;return{c(){l=a("p"),g=i("TensorFlow models and layers in "),m=a("code"),p=i("transformers"),_=i(" accept two formats as input:"),o=u(),c=a("ul"),B=a("li"),ie=i("having all inputs as keyword arguments (like PyTorch models), or"),Q=u(),I=a("li"),me=i("having all inputs as a list, tuple or dict in the first positional argument."),Re=u(),j=a("p"),Te=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),we=a("code"),ft=i("model.fit()"),rt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),H=a("code"),fe=i("model.fit()"),Qe=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),_t=i("fit()"),He=i(" and "),$e=a("code"),it=i("predict()"),_e=i(`, such as when creating your own layers or models with
the Keras `),xe=a("code"),Fe=i("Functional"),gt=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ve=u(),O=a("ul"),N=a("li"),bt=i("a single Tensor with "),ge=a("code"),oe=i("input_ids"),Je=i(" only and nothing else: "),ze=a("code"),kt=i("model(input_ids)"),Ke=u(),V=a("li"),yt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=a("code"),vt=i("model([input_ids, attention_mask])"),dt=i(" or "),W=a("code"),Tt=i("model([input_ids, attention_mask, token_type_ids])"),Be=u(),le=a("li"),wt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=a("code"),$t=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe=u(),U=a("p"),ce=i(`Note that when creating models and layers with
`),L=a("a"),Ze=i("subclassing"),qe=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){l=s(z,"P",{});var C=r(l);g=d(C,"TensorFlow models and layers in "),m=s(C,"CODE",{});var Ut=r(m);p=d(Ut,"transformers"),Ut.forEach(t),_=d(C," accept two formats as input:"),C.forEach(t),o=h(z),c=s(z,"UL",{});var Oe=r(c);B=s(Oe,"LI",{});var be=r(B);ie=d(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),Q=h(Oe),I=s(Oe,"LI",{});var Ye=r(I);me=d(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),Oe.forEach(t),Re=h(z),j=s(z,"P",{});var A=r(j);Te=d(A,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),we=s(A,"CODE",{});var et=r(we);ft=d(et,"model.fit()"),et.forEach(t),rt=d(A,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),H=s(A,"CODE",{});var Rt=r(H);fe=d(Rt,"model.fit()"),Rt.forEach(t),Qe=d(A,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=s(A,"CODE",{});var Qt=r(Y);_t=d(Qt,"fit()"),Qt.forEach(t),He=d(A," and "),$e=s(A,"CODE",{});var Ht=r($e);it=d(Ht,"predict()"),Ht.forEach(t),_e=d(A,`, such as when creating your own layers or models with
the Keras `),xe=s(A,"CODE",{});var pe=r(xe);Fe=d(pe,"Functional"),pe.forEach(t),gt=d(A,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),A.forEach(t),Ve=h(z),O=s(z,"UL",{});var ue=r(O);N=s(ue,"LI",{});var ne=r(N);bt=d(ne,"a single Tensor with "),ge=s(ne,"CODE",{});var Vt=r(ge);oe=d(Vt,"input_ids"),Vt.forEach(t),Je=d(ne," only and nothing else: "),ze=s(ne,"CODE",{});var Jt=r(ze);kt=d(Jt,"model(input_ids)"),Jt.forEach(t),ne.forEach(t),Ke=h(ue),V=s(ue,"LI",{});var he=r(V);yt=d(he,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=s(he,"CODE",{});var Kt=r(de);vt=d(Kt,"model([input_ids, attention_mask])"),Kt.forEach(t),dt=d(he," or "),W=s(he,"CODE",{});var Xt=r(W);Tt=d(Xt,"model([input_ids, attention_mask, token_type_ids])"),Xt.forEach(t),he.forEach(t),Be=h(ue),le=s(ue,"LI",{});var je=r(le);wt=d(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ee=s(je,"CODE",{});var Zt=r(ee);$t=d(Zt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Zt.forEach(t),je.forEach(t),ue.forEach(t),Xe=h(z),U=s(z,"P",{});var tt=r(U);ce=d(tt,`Note that when creating models and layers with
`),L=s(tt,"A",{href:!0,rel:!0});var Yt=r(L);Ze=d(Yt,"subclassing"),Yt.forEach(t),qe=d(tt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),tt.forEach(t),this.h()},h(){f(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(L,"rel","nofollow")},m(z,C){k(z,l,C),e(l,g),e(l,m),e(m,p),e(l,_),k(z,o,C),k(z,c,C),e(c,B),e(B,ie),e(c,Q),e(c,I),e(I,me),k(z,Re,C),k(z,j,C),e(j,Te),e(j,we),e(we,ft),e(j,rt),e(j,H),e(H,fe),e(j,Qe),e(j,Y),e(Y,_t),e(j,He),e(j,$e),e($e,it),e(j,_e),e(j,xe),e(xe,Fe),e(j,gt),k(z,Ve,C),k(z,O,C),e(O,N),e(N,bt),e(N,ge),e(ge,oe),e(N,Je),e(N,ze),e(ze,kt),e(O,Ke),e(O,V),e(V,yt),e(V,de),e(de,vt),e(V,dt),e(V,W),e(W,Tt),e(O,Be),e(O,le),e(le,wt),e(le,ee),e(ee,$t),k(z,Xe,C),k(z,U,C),e(U,ce),e(U,L),e(L,Ze),e(U,qe)},d(z){z&&t(l),z&&t(o),z&&t(c),z&&t(Re),z&&t(j),z&&t(Ve),z&&t(O),z&&t(Xe),z&&t(U)}}}function UT(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function RT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),g=i("Summarization example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Summarization example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function QT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),g=i("Mask filling example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Mask filling example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function HT(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function VT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function JT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function KT(F){let l,g,m,p,_;return p=new M({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function XT(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function ZT(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),g=i("Summarization example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Summarization example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function YT(F){let l,g,m,p,_;return p=new M({props:{code:`import jax
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),g=i("Mask filling example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Mask filling example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function ew(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function tw(F){let l,g,m,p,_;return p=new M({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function ow(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function nw(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function aw(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function sw(F){let l,g,m,p,_;return p=new M({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function rw(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function iw(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function dw(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function lw(F){let l,g,m,p,_;return p=new M({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function cw(F){let l,g,m,p,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(c,"CODE",{});var B=r(m);p=d(B,"Module"),B.forEach(t),_=d(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(o,c){k(o,l,c),e(l,g),e(l,m),e(m,p),e(l,_)},d(o){o&&t(l)}}}function pw(F){let l,g,m,p,_;return p=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(p.$$.fragment)},l(o){l=s(o,"P",{});var c=r(l);g=d(c,"Example:"),c.forEach(t),m=h(o),v(p.$$.fragment,o)},m(o,c){k(o,l,c),e(l,g),k(o,m,c),T(p,o,c),_=!0},p:P,i(o){_||(w(p.$$.fragment,o),_=!0)},o(o){$(p.$$.fragment,o),_=!1},d(o){o&&t(l),o&&t(m),x(p,o)}}}function uw(F){let l,g,m,p,_,o,c,B,ie,Q,I,me,Re,j,Te,we,ft,rt,H,fe,Qe,Y,_t,He,$e,it,_e,xe,Fe,gt,Ve,O,N,bt,ge,oe,Je,ze,kt,Ke,V,yt,de,vt,dt,W,Tt,Be,le,wt,ee,$t,Xe,U,ce,L,Ze,qe,z,C,Ut,Oe,be,Ye,A,et,Rt,Qt,Ht,pe,ue,ne,Vt,Jt,he,Kt,Xt,je,Zt,tt,Yt,Lo,xa,ou,nu,Fa,au,su,mc,eo,Do,Gi,za,ru,Wi,iu,fc,Ie,xt,du,Ui,lu,cu,Hr,pu,uu,Vr,hu,mu,fu,to,_u,Jr,gu,bu,Ri,ku,yu,vu,oo,Tu,Qi,wu,$u,Hi,xu,Fu,zu,Kr,Xr,Bu,qu,ju,no,Cu,Vi,Mu,Eu,Ji,Pu,Au,_c,ao,Go,Ki,Ba,Su,Xi,Ou,gc,Et,Iu,Zi,Nu,Lu,Yi,Du,Gu,bc,qa,kc,so,Wo,ed,ja,Wu,td,Uu,yc,ot,Ca,Ru,ro,Qu,Zr,Hu,Vu,Ma,Ju,Ku,Xu,io,Zu,Yr,Yu,eh,ei,th,oh,nh,Uo,vc,lo,Ro,od,Ea,ah,nd,sh,Tc,S,Pa,rh,ad,ih,dh,sd,lh,ch,Qo,ph,Aa,uh,rd,hh,mh,fh,Ho,_h,Sa,gh,ti,bh,kh,yh,Pt,Oa,vh,id,Th,wh,Ia,oi,$h,dd,xh,Fh,ni,zh,ld,Bh,qh,Vo,Na,jh,cd,Ch,Mh,Jo,La,Eh,pd,Ph,Ah,Ko,Da,Sh,Ga,Oh,ud,Ih,Nh,wc,co,Xo,hd,Wa,Lh,md,Dh,$c,J,Ua,Gh,Ra,Wh,fd,Uh,Rh,Qh,_d,Hh,Vh,Zo,Jh,Qa,Kh,gd,Xh,Zh,Yh,Yo,em,Ha,tm,ai,om,nm,am,en,Va,sm,bd,rm,xc,po,tn,kd,Ja,im,yd,dm,Fc,nt,Ka,lm,Xa,cm,si,pm,um,hm,Za,mm,Ya,fm,_m,gm,lt,es,bm,uo,km,ri,ym,vm,vd,Tm,wm,$m,on,xm,nn,zc,ho,an,Td,ts,Fm,wd,zm,Bc,at,os,Bm,ns,qm,ii,jm,Cm,Mm,as,Em,ss,Pm,Am,Sm,Ne,rs,Om,mo,Im,di,Nm,Lm,$d,Dm,Gm,Wm,sn,Um,rn,Rm,dn,qc,fo,ln,xd,is,Qm,Fd,Hm,jc,Ce,ds,Vm,zd,Jm,Km,ls,Xm,li,Zm,Ym,ef,cs,tf,ps,of,nf,af,ae,us,sf,_o,rf,ci,df,lf,Bd,cf,pf,uf,cn,hf,pn,mf,un,ff,hn,_f,mn,Cc,go,fn,qd,hs,gf,jd,bf,Mc,Me,ms,kf,bo,yf,Cd,vf,Tf,Md,wf,$f,xf,fs,Ff,pi,zf,Bf,qf,_s,jf,gs,Cf,Mf,Ef,Le,bs,Pf,ko,Af,ui,Sf,Of,Ed,If,Nf,Lf,_n,Df,gn,Gf,bn,Ec,yo,kn,Pd,ks,Wf,Ad,Uf,Pc,Ee,ys,Rf,Sd,Qf,Hf,vs,Vf,hi,Jf,Kf,Xf,Ts,Zf,ws,Yf,e_,t_,yn,$s,o_,vn,Ac,vo,Tn,Od,xs,n_,Id,a_,Sc,Pe,Fs,s_,zs,r_,mi,i_,d_,l_,Bs,c_,qs,p_,u_,h_,wn,m_,ct,js,f_,To,__,fi,g_,b_,Nd,k_,y_,v_,$n,T_,xn,Oc,wo,Fn,Ld,Cs,w_,Dd,$_,Ic,Ae,Ms,x_,Es,F_,_i,z_,B_,q_,Ps,j_,As,C_,M_,E_,zn,P_,De,Ss,A_,$o,S_,gi,O_,I_,Gd,N_,L_,D_,Bn,G_,qn,W_,jn,Nc,xo,Cn,Wd,Os,U_,Ud,R_,Lc,K,Is,Q_,Ns,H_,bi,V_,J_,K_,Ls,X_,Ds,Z_,Y_,eg,Rd,tg,og,Ft,Qd,Gs,ng,ag,Hd,Ws,sg,rg,Vd,Us,ig,dg,Jd,Rs,lg,cg,pt,Qs,pg,Fo,ug,Kd,hg,mg,Xd,fg,_g,gg,Mn,bg,En,kg,Pn,Hs,yg,An,vg,Sn,Vs,Tg,On,Dc,zo,In,Zd,Js,wg,Yd,$g,Gc,X,Ks,xg,Xs,Fg,ki,zg,Bg,qg,Zs,jg,Ys,Cg,Mg,Eg,el,Pg,Ag,zt,tl,er,Sg,Og,ol,tr,Ig,Ng,nl,or,Lg,Dg,al,nr,Gg,Wg,Ge,ar,Ug,Bo,Rg,sl,Qg,Hg,rl,Vg,Jg,Kg,Nn,Xg,Ln,Zg,Dn,Yg,Gn,sr,eb,Wn,tb,Un,rr,ob,Rn,Wc,qo,Qn,il,ir,nb,dl,ab,Uc,D,dr,sb,ll,rb,ib,lr,db,yi,lb,cb,pb,cr,ub,pr,hb,mb,fb,cl,_b,gb,Bt,pl,ur,bb,kb,ul,hr,yb,vb,hl,mr,Tb,wb,ml,fr,$b,xb,ut,_r,Fb,jo,zb,fl,Bb,qb,_l,jb,Cb,Mb,Hn,Eb,Vn,Pb,Jn,gr,Ab,Kn,Sb,Xn,br,Ob,Zn,Rc,Co,Yn,gl,kr,Ib,bl,Nb,Qc,G,yr,Lb,Mo,Db,kl,Gb,Wb,yl,Ub,Rb,Qb,vr,Hb,vi,Vb,Jb,Kb,Tr,Xb,wr,Zb,Yb,ek,vl,tk,ok,qt,Tl,$r,nk,ak,wl,xr,sk,rk,$l,Fr,ik,dk,xl,zr,lk,ck,ht,Br,pk,Eo,uk,Fl,hk,mk,zl,fk,_k,gk,ea,bk,ta,kk,oa,qr,yk,na,vk,aa,jr,Tk,sa,Hc,Po,ra,Bl,Cr,wk,ql,$k,Vc,te,Mr,xk,jl,Fk,zk,Er,Bk,Ti,qk,jk,Ck,Pr,Mk,Ar,Ek,Pk,Ak,Cl,Sk,Ok,jt,Ml,Sr,Ik,Nk,El,Or,Lk,Dk,Pl,Ir,Gk,Wk,Al,Nr,Uk,Rk,mt,Lr,Qk,Ao,Hk,Sl,Vk,Jk,Ol,Kk,Xk,Zk,ia,Yk,da,Jc;return o=new Z({}),Y=new Z({}),qe=new Z({}),za=new Z({}),Ba=new Z({}),qa=new M({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

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
]`}}),ja=new Z({}),Ca=new q({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The number of labels to use in <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"num_labels"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/configuration_bart.py#L35"}}),Uo=new E({props:{anchor:"transformers.BartConfig.example",$$slots:{default:[vT]},$$scope:{ctx:F}}}),Ea=new Z({}),Pa=new q({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/tokenization_bart.py#L101"}}),Qo=new E({props:{anchor:"transformers.BartTokenizer.example",$$slots:{default:[TT]},$$scope:{ctx:F}}}),Ho=new Se({props:{$$slots:{default:[wT]},$$scope:{ctx:F}}}),Oa=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Na=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/tokenization_bart.py#L303"}}),La=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Da=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wa=new Z({}),Ua=new q({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/tokenization_bart_fast.py#L70"}}),Zo=new E({props:{anchor:"transformers.BartTokenizerFast.example",$$slots:{default:[$T]},$$scope:{ctx:F}}}),Yo=new Se({props:{$$slots:{default:[xT]},$$scope:{ctx:F}}}),Va=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/tokenization_bart_fast.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ja=new Z({}),Ka=new q({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1152"}}),es=new q({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1179",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new Se({props:{$$slots:{default:[FT]},$$scope:{ctx:F}}}),nn=new E({props:{anchor:"transformers.BartModel.forward.example",$$slots:{default:[zT]},$$scope:{ctx:F}}}),ts=new Z({}),os=new q({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1279"}}),rs=new q({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1318",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new Se({props:{$$slots:{default:[BT]},$$scope:{ctx:F}}}),rn=new E({props:{anchor:"transformers.BartForConditionalGeneration.forward.example",$$slots:{default:[qT]},$$scope:{ctx:F}}}),dn=new E({props:{anchor:"transformers.BartForConditionalGeneration.forward.example-2",$$slots:{default:[jT]},$$scope:{ctx:F}}}),is=new Z({}),ds=new q({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1448"}}),us=new q({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1461",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cn=new Se({props:{$$slots:{default:[CT]},$$scope:{ctx:F}}}),pn=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example",$$slots:{default:[MT]},$$scope:{ctx:F}}}),un=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-2",$$slots:{default:[ET]},$$scope:{ctx:F}}}),hn=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-3",$$slots:{default:[PT]},$$scope:{ctx:F}}}),mn=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-4",$$slots:{default:[AT]},$$scope:{ctx:F}}}),hs=new Z({}),ms=new q({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1575"}}),bs=new q({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1587",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new Se({props:{$$slots:{default:[ST]},$$scope:{ctx:F}}}),gn=new E({props:{anchor:"transformers.BartForQuestionAnswering.forward.example",$$slots:{default:[OT]},$$scope:{ctx:F}}}),bn=new E({props:{anchor:"transformers.BartForQuestionAnswering.forward.example-2",$$slots:{default:[IT]},$$scope:{ctx:F}}}),ks=new Z({}),ys=new q({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1711"}}),$s=new q({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_bart.py#L1742",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new E({props:{anchor:"transformers.BartForCausalLM.forward.example",$$slots:{default:[NT]},$$scope:{ctx:F}}}),xs=new Z({}),Fs=new q({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_tf_bart.py#L1162"}}),wn=new Se({props:{$$slots:{default:[LT]},$$scope:{ctx:F}}}),js=new q({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_tf_bart.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$n=new Se({props:{$$slots:{default:[DT]},$$scope:{ctx:F}}}),xn=new E({props:{anchor:"transformers.TFBartModel.call.example",$$slots:{default:[GT]},$$scope:{ctx:F}}}),Cs=new Z({}),Ms=new q({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_tf_bart.py#L1270"}}),zn=new Se({props:{$$slots:{default:[WT]},$$scope:{ctx:F}}}),Ss=new q({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_tf_bart.py#L1302",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bn=new Se({props:{$$slots:{default:[UT]},$$scope:{ctx:F}}}),qn=new E({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example",$$slots:{default:[RT]},$$scope:{ctx:F}}}),jn=new E({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example-2",$$slots:{default:[QT]},$$scope:{ctx:F}}}),Os=new Z({}),Is=new q({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1241"}}),Qs=new q({props:{name:"__call__",anchor:"transformers.FlaxBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mn=new Se({props:{$$slots:{default:[HT]},$$scope:{ctx:F}}}),En=new E({props:{anchor:"transformers.FlaxBartModel.__call__.example",$$slots:{default:[VT]},$$scope:{ctx:F}}}),Hs=new q({props:{name:"encode",anchor:"transformers.FlaxBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new E({props:{anchor:"transformers.FlaxBartModel.encode.example",$$slots:{default:[JT]},$$scope:{ctx:F}}}),Vs=new q({props:{name:"decode",anchor:"transformers.FlaxBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new E({props:{anchor:"transformers.FlaxBartModel.decode.example",$$slots:{default:[KT]},$$scope:{ctx:F}}}),Js=new Z({}),Ks=new q({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1327"}}),ar=new q({props:{name:"__call__",anchor:"transformers.FlaxBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new Se({props:{$$slots:{default:[XT]},$$scope:{ctx:F}}}),Ln=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example",$$slots:{default:[ZT]},$$scope:{ctx:F}}}),Dn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example-2",$$slots:{default:[YT]},$$scope:{ctx:F}}}),sr=new q({props:{name:"encode",anchor:"transformers.FlaxBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.encode.example",$$slots:{default:[ew]},$$scope:{ctx:F}}}),rr=new q({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1331",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.decode.example",$$slots:{default:[tw]},$$scope:{ctx:F}}}),ir=new Z({}),dr=new q({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1640"}}),_r=new q({props:{name:"__call__",anchor:"transformers.FlaxBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hn=new Se({props:{$$slots:{default:[ow]},$$scope:{ctx:F}}}),Vn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.__call__.example",$$slots:{default:[nw]},$$scope:{ctx:F}}}),gr=new q({props:{name:"encode",anchor:"transformers.FlaxBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.encode.example",$$slots:{default:[aw]},$$scope:{ctx:F}}}),br=new q({props:{name:"decode",anchor:"transformers.FlaxBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.decode.example",$$slots:{default:[sw]},$$scope:{ctx:F}}}),kr=new Z({}),yr=new q({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1727"}}),Br=new q({props:{name:"__call__",anchor:"transformers.FlaxBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ea=new Se({props:{$$slots:{default:[rw]},$$scope:{ctx:F}}}),ta=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.example",$$slots:{default:[iw]},$$scope:{ctx:F}}}),qr=new q({props:{name:"encode",anchor:"transformers.FlaxBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),na=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.encode.example",$$slots:{default:[dw]},$$scope:{ctx:F}}}),jr=new q({props:{name:"decode",anchor:"transformers.FlaxBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sa=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.decode.example",$$slots:{default:[lw]},$$scope:{ctx:F}}}),Cr=new Z({}),Mr=new q({props:{name:"class transformers.FlaxBartForCausalLM",anchor:"transformers.FlaxBartForCausalLM",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1964"}}),Lr=new q({props:{name:"__call__",anchor:"transformers.FlaxBartForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/bart/modeling_flax_bart.py#L1802",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ia=new Se({props:{$$slots:{default:[cw]},$$scope:{ctx:F}}}),da=new E({props:{anchor:"transformers.FlaxBartForCausalLM.__call__.example",$$slots:{default:[pw]},$$scope:{ctx:F}}}),{c(){l=a("meta"),g=u(),m=a("h1"),p=a("a"),_=a("span"),y(o.$$.fragment),c=u(),B=a("span"),ie=i("BART"),Q=u(),I=a("p"),me=a("strong"),Re=i("DISCLAIMER:"),j=i(" If you see something strange, file a "),Te=a("a"),we=i("Github Issue"),ft=i(` and assign
@patrickvonplaten`),rt=u(),H=a("h2"),fe=a("a"),Qe=a("span"),y(Y.$$.fragment),_t=u(),He=a("span"),$e=i("Overview"),it=u(),_e=a("p"),xe=i("The Bart model was proposed in "),Fe=a("a"),gt=i(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),Ve=i(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),O=u(),N=a("p"),bt=i("According to the abstract,"),ge=u(),oe=a("ul"),Je=a("li"),ze=i(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),kt=u(),Ke=a("li"),V=i(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),yt=u(),de=a("li"),vt=i(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),dt=u(),W=a("p"),Tt=i("This model was contributed by "),Be=a("a"),le=i("sshleifer"),wt=i(". The Authors\u2019 code can be found "),ee=a("a"),$t=i("here"),Xe=i("."),U=u(),ce=a("h3"),L=a("a"),Ze=a("span"),y(qe.$$.fragment),z=u(),C=a("span"),Ut=i("Examples"),Oe=u(),be=a("ul"),Ye=a("li"),A=i(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),et=a("a"),Rt=i("examples/pytorch/summarization/"),Qt=i("."),Ht=u(),pe=a("li"),ue=i("An example of how to train "),ne=a("a"),Vt=i("BartForConditionalGeneration"),Jt=i(" with a Hugging Face "),he=a("code"),Kt=i("datasets"),Xt=i(`
object can be found in this `),je=a("a"),Zt=i("forum discussion"),tt=i("."),Yt=u(),Lo=a("li"),xa=a("a"),ou=i("Distilled checkpoints"),nu=i(" are described in this "),Fa=a("a"),au=i("paper"),su=i("."),mc=u(),eo=a("h2"),Do=a("a"),Gi=a("span"),y(za.$$.fragment),ru=u(),Wi=a("span"),iu=i("Implementation Notes"),fc=u(),Ie=a("ul"),xt=a("li"),du=i("Bart doesn\u2019t use "),Ui=a("code"),lu=i("token_type_ids"),cu=i(" for sequence classification. Use "),Hr=a("a"),pu=i("BartTokenizer"),uu=i(` or
`),Vr=a("a"),hu=i("encode()"),mu=i(" to get the proper splitting."),fu=u(),to=a("li"),_u=i("The forward pass of "),Jr=a("a"),gu=i("BartModel"),bu=i(" will create the "),Ri=a("code"),ku=i("decoder_input_ids"),yu=i(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),vu=u(),oo=a("li"),Tu=i(`Model predictions are intended to be identical to the original implementation when
`),Qi=a("code"),wu=i("forced_bos_token_id=0"),$u=i(`. This only works, however, if the string you pass to
`),Hi=a("code"),xu=i("fairseq.encode"),Fu=i(" starts with a space."),zu=u(),Kr=a("li"),Xr=a("a"),Bu=i("generate()"),qu=i(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),ju=u(),no=a("li"),Cu=i("Models that load the "),Vi=a("em"),Mu=i("facebook/bart-large-cnn"),Eu=i(" weights will not have a "),Ji=a("code"),Pu=i("mask_token_id"),Au=i(`, or be able to perform
mask-filling tasks.`),_c=u(),ao=a("h2"),Go=a("a"),Ki=a("span"),y(Ba.$$.fragment),Su=u(),Xi=a("span"),Ou=i("Mask Filling"),gc=u(),Et=a("p"),Iu=i("The "),Zi=a("code"),Nu=i("facebook/bart-base"),Lu=i(" and "),Yi=a("code"),Du=i("facebook/bart-large"),Gu=i(" checkpoints can be used to fill multi-token masks."),bc=u(),y(qa.$$.fragment),kc=u(),so=a("h2"),Wo=a("a"),ed=a("span"),y(ja.$$.fragment),Wu=u(),td=a("span"),Uu=i("BartConfig"),yc=u(),ot=a("div"),y(Ca.$$.fragment),Ru=u(),ro=a("p"),Qu=i("This is the configuration class to store the configuration of a "),Zr=a("a"),Hu=i("BartModel"),Vu=i(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Ma=a("a"),Ju=i("facebook/bart-large"),Ku=i(" architecture."),Xu=u(),io=a("p"),Zu=i("Configuration objects inherit from "),Yr=a("a"),Yu=i("PretrainedConfig"),eh=i(` and can be used to control the model outputs. Read the
documentation from `),ei=a("a"),th=i("PretrainedConfig"),oh=i(" for more information."),nh=u(),y(Uo.$$.fragment),vc=u(),lo=a("h2"),Ro=a("a"),od=a("span"),y(Ea.$$.fragment),ah=u(),nd=a("span"),sh=i("BartTokenizer"),Tc=u(),S=a("div"),y(Pa.$$.fragment),rh=u(),ad=a("p"),ih=i("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),dh=u(),sd=a("p"),lh=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),ch=u(),y(Qo.$$.fragment),ph=u(),Aa=a("p"),uh=i("You can get around that behavior by passing "),rd=a("code"),hh=i("add_prefix_space=True"),mh=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),fh=u(),y(Ho.$$.fragment),_h=u(),Sa=a("p"),gh=i("This tokenizer inherits from "),ti=a("a"),bh=i("PreTrainedTokenizer"),kh=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yh=u(),Pt=a("div"),y(Oa.$$.fragment),vh=u(),id=a("p"),Th=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),wh=u(),Ia=a("ul"),oi=a("li"),$h=i("single sequence: "),dd=a("code"),xh=i("<s> X </s>"),Fh=u(),ni=a("li"),zh=i("pair of sequences: "),ld=a("code"),Bh=i("<s> A </s></s> B </s>"),qh=u(),Vo=a("div"),y(Na.$$.fragment),jh=u(),cd=a("p"),Ch=i("Converts a sequence of tokens (string) in a single string."),Mh=u(),Jo=a("div"),y(La.$$.fragment),Eh=u(),pd=a("p"),Ph=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Ah=u(),Ko=a("div"),y(Da.$$.fragment),Sh=u(),Ga=a("p"),Oh=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ud=a("code"),Ih=i("prepare_for_model"),Nh=i(" method."),wc=u(),co=a("h2"),Xo=a("a"),hd=a("span"),y(Wa.$$.fragment),Lh=u(),md=a("span"),Dh=i("BartTokenizerFast"),$c=u(),J=a("div"),y(Ua.$$.fragment),Gh=u(),Ra=a("p"),Wh=i("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),fd=a("em"),Uh=i("tokenizers"),Rh=i(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Qh=u(),_d=a("p"),Hh=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Vh=u(),y(Zo.$$.fragment),Jh=u(),Qa=a("p"),Kh=i("You can get around that behavior by passing "),gd=a("code"),Xh=i("add_prefix_space=True"),Zh=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Yh=u(),y(Yo.$$.fragment),em=u(),Ha=a("p"),tm=i("This tokenizer inherits from "),ai=a("a"),om=i("PreTrainedTokenizerFast"),nm=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),am=u(),en=a("div"),y(Va.$$.fragment),sm=u(),bd=a("p"),rm=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),xc=u(),po=a("h2"),tn=a("a"),kd=a("span"),y(Ja.$$.fragment),im=u(),yd=a("span"),dm=i("BartModel"),Fc=u(),nt=a("div"),y(Ka.$$.fragment),lm=u(),Xa=a("p"),cm=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),si=a("a"),pm=i("PreTrainedModel"),um=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hm=u(),Za=a("p"),mm=i("This model is also a PyTorch "),Ya=a("a"),fm=i("torch.nn.Module"),_m=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gm=u(),lt=a("div"),y(es.$$.fragment),bm=u(),uo=a("p"),km=i("The "),ri=a("a"),ym=i("BartModel"),vm=i(" forward method, overrides the "),vd=a("code"),Tm=i("__call__"),wm=i(" special method."),$m=u(),y(on.$$.fragment),xm=u(),y(nn.$$.fragment),zc=u(),ho=a("h2"),an=a("a"),Td=a("span"),y(ts.$$.fragment),Fm=u(),wd=a("span"),zm=i("BartForConditionalGeneration"),Bc=u(),at=a("div"),y(os.$$.fragment),Bm=u(),ns=a("p"),qm=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ii=a("a"),jm=i("PreTrainedModel"),Cm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mm=u(),as=a("p"),Em=i("This model is also a PyTorch "),ss=a("a"),Pm=i("torch.nn.Module"),Am=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sm=u(),Ne=a("div"),y(rs.$$.fragment),Om=u(),mo=a("p"),Im=i("The "),di=a("a"),Nm=i("BartForConditionalGeneration"),Lm=i(" forward method, overrides the "),$d=a("code"),Dm=i("__call__"),Gm=i(" special method."),Wm=u(),y(sn.$$.fragment),Um=u(),y(rn.$$.fragment),Rm=u(),y(dn.$$.fragment),qc=u(),fo=a("h2"),ln=a("a"),xd=a("span"),y(is.$$.fragment),Qm=u(),Fd=a("span"),Hm=i("BartForSequenceClassification"),jc=u(),Ce=a("div"),y(ds.$$.fragment),Vm=u(),zd=a("p"),Jm=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Km=u(),ls=a("p"),Xm=i("This model inherits from "),li=a("a"),Zm=i("PreTrainedModel"),Ym=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ef=u(),cs=a("p"),tf=i("This model is also a PyTorch "),ps=a("a"),of=i("torch.nn.Module"),nf=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),af=u(),ae=a("div"),y(us.$$.fragment),sf=u(),_o=a("p"),rf=i("The "),ci=a("a"),df=i("BartForSequenceClassification"),lf=i(" forward method, overrides the "),Bd=a("code"),cf=i("__call__"),pf=i(" special method."),uf=u(),y(cn.$$.fragment),hf=u(),y(pn.$$.fragment),mf=u(),y(un.$$.fragment),ff=u(),y(hn.$$.fragment),_f=u(),y(mn.$$.fragment),Cc=u(),go=a("h2"),fn=a("a"),qd=a("span"),y(hs.$$.fragment),gf=u(),jd=a("span"),bf=i("BartForQuestionAnswering"),Mc=u(),Me=a("div"),y(ms.$$.fragment),kf=u(),bo=a("p"),yf=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Cd=a("code"),vf=i("span start logits"),Tf=i(" and "),Md=a("code"),wf=i("span end logits"),$f=i(")."),xf=u(),fs=a("p"),Ff=i("This model inherits from "),pi=a("a"),zf=i("PreTrainedModel"),Bf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qf=u(),_s=a("p"),jf=i("This model is also a PyTorch "),gs=a("a"),Cf=i("torch.nn.Module"),Mf=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ef=u(),Le=a("div"),y(bs.$$.fragment),Pf=u(),ko=a("p"),Af=i("The "),ui=a("a"),Sf=i("BartForQuestionAnswering"),Of=i(" forward method, overrides the "),Ed=a("code"),If=i("__call__"),Nf=i(" special method."),Lf=u(),y(_n.$$.fragment),Df=u(),y(gn.$$.fragment),Gf=u(),y(bn.$$.fragment),Ec=u(),yo=a("h2"),kn=a("a"),Pd=a("span"),y(ks.$$.fragment),Wf=u(),Ad=a("span"),Uf=i("BartForCausalLM"),Pc=u(),Ee=a("div"),y(ys.$$.fragment),Rf=u(),Sd=a("p"),Qf=i("BART decoder with with a language modeling head on top (linear layer with weights tied to the input embeddings)."),Hf=u(),vs=a("p"),Vf=i("This model inherits from "),hi=a("a"),Jf=i("PreTrainedModel"),Kf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=u(),Ts=a("p"),Zf=i("This model is also a PyTorch "),ws=a("a"),Yf=i("torch.nn.Module"),e_=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t_=u(),yn=a("div"),y($s.$$.fragment),o_=u(),y(vn.$$.fragment),Ac=u(),vo=a("h2"),Tn=a("a"),Od=a("span"),y(xs.$$.fragment),n_=u(),Id=a("span"),a_=i("TFBartModel"),Sc=u(),Pe=a("div"),y(Fs.$$.fragment),s_=u(),zs=a("p"),r_=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),mi=a("a"),i_=i("TFPreTrainedModel"),d_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),l_=u(),Bs=a("p"),c_=i("This model is also a "),qs=a("a"),p_=i("tf.keras.Model"),u_=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),h_=u(),y(wn.$$.fragment),m_=u(),ct=a("div"),y(js.$$.fragment),f_=u(),To=a("p"),__=i("The "),fi=a("a"),g_=i("TFBartModel"),b_=i(" forward method, overrides the "),Nd=a("code"),k_=i("__call__"),y_=i(" special method."),v_=u(),y($n.$$.fragment),T_=u(),y(xn.$$.fragment),Oc=u(),wo=a("h2"),Fn=a("a"),Ld=a("span"),y(Cs.$$.fragment),w_=u(),Dd=a("span"),$_=i("TFBartForConditionalGeneration"),Ic=u(),Ae=a("div"),y(Ms.$$.fragment),x_=u(),Es=a("p"),F_=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),_i=a("a"),z_=i("TFPreTrainedModel"),B_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q_=u(),Ps=a("p"),j_=i("This model is also a "),As=a("a"),C_=i("tf.keras.Model"),M_=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),E_=u(),y(zn.$$.fragment),P_=u(),De=a("div"),y(Ss.$$.fragment),A_=u(),$o=a("p"),S_=i("The "),gi=a("a"),O_=i("TFBartForConditionalGeneration"),I_=i(" forward method, overrides the "),Gd=a("code"),N_=i("__call__"),L_=i(" special method."),D_=u(),y(Bn.$$.fragment),G_=u(),y(qn.$$.fragment),W_=u(),y(jn.$$.fragment),Nc=u(),xo=a("h2"),Cn=a("a"),Wd=a("span"),y(Os.$$.fragment),U_=u(),Ud=a("span"),R_=i("FlaxBartModel"),Lc=u(),K=a("div"),y(Is.$$.fragment),Q_=u(),Ns=a("p"),H_=i(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),bi=a("a"),V_=i("FlaxPreTrainedModel"),J_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),K_=u(),Ls=a("p"),X_=i(`This model is also a Flax Linen
`),Ds=a("a"),Z_=i("flax.nn.Module"),Y_=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),eg=u(),Rd=a("p"),tg=i("Finally, this model supports inherent JAX features such as:"),og=u(),Ft=a("ul"),Qd=a("li"),Gs=a("a"),ng=i("Just-In-Time (JIT) compilation"),ag=u(),Hd=a("li"),Ws=a("a"),sg=i("Automatic Differentiation"),rg=u(),Vd=a("li"),Us=a("a"),ig=i("Vectorization"),dg=u(),Jd=a("li"),Rs=a("a"),lg=i("Parallelization"),cg=u(),pt=a("div"),y(Qs.$$.fragment),pg=u(),Fo=a("p"),ug=i("The "),Kd=a("code"),hg=i("FlaxBartPreTrainedModel"),mg=i(" forward method, overrides the "),Xd=a("code"),fg=i("__call__"),_g=i(" special method."),gg=u(),y(Mn.$$.fragment),bg=u(),y(En.$$.fragment),kg=u(),Pn=a("div"),y(Hs.$$.fragment),yg=u(),y(An.$$.fragment),vg=u(),Sn=a("div"),y(Vs.$$.fragment),Tg=u(),y(On.$$.fragment),Dc=u(),zo=a("h2"),In=a("a"),Zd=a("span"),y(Js.$$.fragment),wg=u(),Yd=a("span"),$g=i("FlaxBartForConditionalGeneration"),Gc=u(),X=a("div"),y(Ks.$$.fragment),xg=u(),Xs=a("p"),Fg=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=a("a"),zg=i("FlaxPreTrainedModel"),Bg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qg=u(),Zs=a("p"),jg=i(`This model is also a Flax Linen
`),Ys=a("a"),Cg=i("flax.nn.Module"),Mg=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Eg=u(),el=a("p"),Pg=i("Finally, this model supports inherent JAX features such as:"),Ag=u(),zt=a("ul"),tl=a("li"),er=a("a"),Sg=i("Just-In-Time (JIT) compilation"),Og=u(),ol=a("li"),tr=a("a"),Ig=i("Automatic Differentiation"),Ng=u(),nl=a("li"),or=a("a"),Lg=i("Vectorization"),Dg=u(),al=a("li"),nr=a("a"),Gg=i("Parallelization"),Wg=u(),Ge=a("div"),y(ar.$$.fragment),Ug=u(),Bo=a("p"),Rg=i("The "),sl=a("code"),Qg=i("FlaxBartPreTrainedModel"),Hg=i(" forward method, overrides the "),rl=a("code"),Vg=i("__call__"),Jg=i(" special method."),Kg=u(),y(Nn.$$.fragment),Xg=u(),y(Ln.$$.fragment),Zg=u(),y(Dn.$$.fragment),Yg=u(),Gn=a("div"),y(sr.$$.fragment),eb=u(),y(Wn.$$.fragment),tb=u(),Un=a("div"),y(rr.$$.fragment),ob=u(),y(Rn.$$.fragment),Wc=u(),qo=a("h2"),Qn=a("a"),il=a("span"),y(ir.$$.fragment),nb=u(),dl=a("span"),ab=i("FlaxBartForSequenceClassification"),Uc=u(),D=a("div"),y(dr.$$.fragment),sb=u(),ll=a("p"),rb=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ib=u(),lr=a("p"),db=i("This model inherits from "),yi=a("a"),lb=i("FlaxPreTrainedModel"),cb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pb=u(),cr=a("p"),ub=i(`This model is also a Flax Linen
`),pr=a("a"),hb=i("flax.nn.Module"),mb=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fb=u(),cl=a("p"),_b=i("Finally, this model supports inherent JAX features such as:"),gb=u(),Bt=a("ul"),pl=a("li"),ur=a("a"),bb=i("Just-In-Time (JIT) compilation"),kb=u(),ul=a("li"),hr=a("a"),yb=i("Automatic Differentiation"),vb=u(),hl=a("li"),mr=a("a"),Tb=i("Vectorization"),wb=u(),ml=a("li"),fr=a("a"),$b=i("Parallelization"),xb=u(),ut=a("div"),y(_r.$$.fragment),Fb=u(),jo=a("p"),zb=i("The "),fl=a("code"),Bb=i("FlaxBartPreTrainedModel"),qb=i(" forward method, overrides the "),_l=a("code"),jb=i("__call__"),Cb=i(" special method."),Mb=u(),y(Hn.$$.fragment),Eb=u(),y(Vn.$$.fragment),Pb=u(),Jn=a("div"),y(gr.$$.fragment),Ab=u(),y(Kn.$$.fragment),Sb=u(),Xn=a("div"),y(br.$$.fragment),Ob=u(),y(Zn.$$.fragment),Rc=u(),Co=a("h2"),Yn=a("a"),gl=a("span"),y(kr.$$.fragment),Ib=u(),bl=a("span"),Nb=i("FlaxBartForQuestionAnswering"),Qc=u(),G=a("div"),y(yr.$$.fragment),Lb=u(),Mo=a("p"),Db=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),kl=a("code"),Gb=i("span start logits"),Wb=i(" and "),yl=a("code"),Ub=i("span end logits"),Rb=i(")."),Qb=u(),vr=a("p"),Hb=i("This model inherits from "),vi=a("a"),Vb=i("FlaxPreTrainedModel"),Jb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kb=u(),Tr=a("p"),Xb=i(`This model is also a Flax Linen
`),wr=a("a"),Zb=i("flax.nn.Module"),Yb=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ek=u(),vl=a("p"),tk=i("Finally, this model supports inherent JAX features such as:"),ok=u(),qt=a("ul"),Tl=a("li"),$r=a("a"),nk=i("Just-In-Time (JIT) compilation"),ak=u(),wl=a("li"),xr=a("a"),sk=i("Automatic Differentiation"),rk=u(),$l=a("li"),Fr=a("a"),ik=i("Vectorization"),dk=u(),xl=a("li"),zr=a("a"),lk=i("Parallelization"),ck=u(),ht=a("div"),y(Br.$$.fragment),pk=u(),Eo=a("p"),uk=i("The "),Fl=a("code"),hk=i("FlaxBartPreTrainedModel"),mk=i(" forward method, overrides the "),zl=a("code"),fk=i("__call__"),_k=i(" special method."),gk=u(),y(ea.$$.fragment),bk=u(),y(ta.$$.fragment),kk=u(),oa=a("div"),y(qr.$$.fragment),yk=u(),y(na.$$.fragment),vk=u(),aa=a("div"),y(jr.$$.fragment),Tk=u(),y(sa.$$.fragment),Hc=u(),Po=a("h2"),ra=a("a"),Bl=a("span"),y(Cr.$$.fragment),wk=u(),ql=a("span"),$k=i("FlaxBartForCausalLM"),Vc=u(),te=a("div"),y(Mr.$$.fragment),xk=u(),jl=a("p"),Fk=i(`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),zk=u(),Er=a("p"),Bk=i("This model inherits from "),Ti=a("a"),qk=i("FlaxPreTrainedModel"),jk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ck=u(),Pr=a("p"),Mk=i(`This model is also a Flax Linen
`),Ar=a("a"),Ek=i("flax.nn.Module"),Pk=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ak=u(),Cl=a("p"),Sk=i("Finally, this model supports inherent JAX features such as:"),Ok=u(),jt=a("ul"),Ml=a("li"),Sr=a("a"),Ik=i("Just-In-Time (JIT) compilation"),Nk=u(),El=a("li"),Or=a("a"),Lk=i("Automatic Differentiation"),Dk=u(),Pl=a("li"),Ir=a("a"),Gk=i("Vectorization"),Wk=u(),Al=a("li"),Nr=a("a"),Uk=i("Parallelization"),Rk=u(),mt=a("div"),y(Lr.$$.fragment),Qk=u(),Ao=a("p"),Hk=i("The "),Sl=a("code"),Vk=i("FlaxBartDecoderPreTrainedModel"),Jk=i(" forward method, overrides the "),Ol=a("code"),Kk=i("__call__"),Xk=i(" special method."),Zk=u(),y(ia.$$.fragment),Yk=u(),y(da.$$.fragment),this.h()},l(n){const b=kT('[data-svelte="svelte-1phssyn"]',document.head);l=s(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(n),m=s(n,"H1",{class:!0});var Dr=r(m);p=s(Dr,"A",{id:!0,class:!0,href:!0});var Il=r(p);_=s(Il,"SPAN",{});var Nl=r(_);v(o.$$.fragment,Nl),Nl.forEach(t),Il.forEach(t),c=h(Dr),B=s(Dr,"SPAN",{});var Ll=r(B);ie=d(Ll,"BART"),Ll.forEach(t),Dr.forEach(t),Q=h(n),I=s(n,"P",{});var la=r(I);me=s(la,"STRONG",{});var Dl=r(me);Re=d(Dl,"DISCLAIMER:"),Dl.forEach(t),j=d(la," If you see something strange, file a "),Te=s(la,"A",{href:!0,rel:!0});var Gl=r(Te);we=d(Gl,"Github Issue"),Gl.forEach(t),ft=d(la,` and assign
@patrickvonplaten`),la.forEach(t),rt=h(n),H=s(n,"H2",{class:!0});var Gr=r(H);fe=s(Gr,"A",{id:!0,class:!0,href:!0});var Wl=r(fe);Qe=s(Wl,"SPAN",{});var Ul=r(Qe);v(Y.$$.fragment,Ul),Ul.forEach(t),Wl.forEach(t),_t=h(Gr),He=s(Gr,"SPAN",{});var Rl=r(He);$e=d(Rl,"Overview"),Rl.forEach(t),Gr.forEach(t),it=h(n),_e=s(n,"P",{});var Wr=r(_e);xe=d(Wr,"The Bart model was proposed in "),Fe=s(Wr,"A",{href:!0,rel:!0});var Ql=r(Fe);gt=d(Ql,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),Ql.forEach(t),Ve=d(Wr,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),Wr.forEach(t),O=h(n),N=s(n,"P",{});var Hl=r(N);bt=d(Hl,"According to the abstract,"),Hl.forEach(t),ge=h(n),oe=s(n,"UL",{});var So=r(oe);Je=s(So,"LI",{});var Vl=r(Je);ze=d(Vl,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Vl.forEach(t),kt=h(So),Ke=s(So,"LI",{});var Jl=r(Ke);V=d(Jl,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),Jl.forEach(t),yt=h(So),de=s(So,"LI",{});var Kl=r(de);vt=d(Kl,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),Kl.forEach(t),So.forEach(t),dt=h(n),W=s(n,"P",{});var Oo=r(W);Tt=d(Oo,"This model was contributed by "),Be=s(Oo,"A",{href:!0,rel:!0});var Xl=r(Be);le=d(Xl,"sshleifer"),Xl.forEach(t),wt=d(Oo,". The Authors\u2019 code can be found "),ee=s(Oo,"A",{href:!0,rel:!0});var Zl=r(ee);$t=d(Zl,"here"),Zl.forEach(t),Xe=d(Oo,"."),Oo.forEach(t),U=h(n),ce=s(n,"H3",{class:!0});var Ur=r(ce);L=s(Ur,"A",{id:!0,class:!0,href:!0});var Yl=r(L);Ze=s(Yl,"SPAN",{});var ec=r(Ze);v(qe.$$.fragment,ec),ec.forEach(t),Yl.forEach(t),z=h(Ur),C=s(Ur,"SPAN",{});var tc=r(C);Ut=d(tc,"Examples"),tc.forEach(t),Ur.forEach(t),Oe=h(n),be=s(n,"UL",{});var Io=r(be);Ye=s(Io,"LI",{});var Rr=r(Ye);A=d(Rr,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),et=s(Rr,"A",{href:!0,rel:!0});var oc=r(et);Rt=d(oc,"examples/pytorch/summarization/"),oc.forEach(t),Qt=d(Rr,"."),Rr.forEach(t),Ht=h(Io),pe=s(Io,"LI",{});var Ct=r(pe);ue=d(Ct,"An example of how to train "),ne=s(Ct,"A",{href:!0});var nc=r(ne);Vt=d(nc,"BartForConditionalGeneration"),nc.forEach(t),Jt=d(Ct," with a Hugging Face "),he=s(Ct,"CODE",{});var ac=r(he);Kt=d(ac,"datasets"),ac.forEach(t),Xt=d(Ct,`
object can be found in this `),je=s(Ct,"A",{href:!0,rel:!0});var sc=r(je);Zt=d(sc,"forum discussion"),sc.forEach(t),tt=d(Ct,"."),Ct.forEach(t),Yt=h(Io),Lo=s(Io,"LI",{});var ca=r(Lo);xa=s(ca,"A",{href:!0,rel:!0});var rc=r(xa);ou=d(rc,"Distilled checkpoints"),rc.forEach(t),nu=d(ca," are described in this "),Fa=s(ca,"A",{href:!0,rel:!0});var ic=r(Fa);au=d(ic,"paper"),ic.forEach(t),su=d(ca,"."),ca.forEach(t),Io.forEach(t),mc=h(n),eo=s(n,"H2",{class:!0});var Qr=r(eo);Do=s(Qr,"A",{id:!0,class:!0,href:!0});var dc=r(Do);Gi=s(dc,"SPAN",{});var lc=r(Gi);v(za.$$.fragment,lc),lc.forEach(t),dc.forEach(t),ru=h(Qr),Wi=s(Qr,"SPAN",{});var cc=r(Wi);iu=d(cc,"Implementation Notes"),cc.forEach(t),Qr.forEach(t),fc=h(n),Ie=s(n,"UL",{});var st=r(Ie);xt=s(st,"LI",{});var Mt=r(xt);du=d(Mt,"Bart doesn\u2019t use "),Ui=s(Mt,"CODE",{});var pc=r(Ui);lu=d(pc,"token_type_ids"),pc.forEach(t),cu=d(Mt," for sequence classification. Use "),Hr=s(Mt,"A",{href:!0});var uc=r(Hr);pu=d(uc,"BartTokenizer"),uc.forEach(t),uu=d(Mt,` or
`),Vr=s(Mt,"A",{href:!0});var hc=r(Vr);hu=d(hc,"encode()"),hc.forEach(t),mu=d(Mt," to get the proper splitting."),Mt.forEach(t),fu=h(st),to=s(st,"LI",{});var No=r(to);_u=d(No,"The forward pass of "),Jr=s(No,"A",{href:!0});var ny=r(Jr);gu=d(ny,"BartModel"),ny.forEach(t),bu=d(No," will create the "),Ri=s(No,"CODE",{});var ay=r(Ri);ku=d(ay,"decoder_input_ids"),ay.forEach(t),yu=d(No,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),No.forEach(t),vu=h(st),oo=s(st,"LI",{});var wi=r(oo);Tu=d(wi,`Model predictions are intended to be identical to the original implementation when
`),Qi=s(wi,"CODE",{});var sy=r(Qi);wu=d(sy,"forced_bos_token_id=0"),sy.forEach(t),$u=d(wi,`. This only works, however, if the string you pass to
`),Hi=s(wi,"CODE",{});var ry=r(Hi);xu=d(ry,"fairseq.encode"),ry.forEach(t),Fu=d(wi," starts with a space."),wi.forEach(t),zu=h(st),Kr=s(st,"LI",{});var ey=r(Kr);Xr=s(ey,"A",{href:!0});var iy=r(Xr);Bu=d(iy,"generate()"),iy.forEach(t),qu=d(ey,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),ey.forEach(t),ju=h(st),no=s(st,"LI",{});var $i=r(no);Cu=d($i,"Models that load the "),Vi=s($i,"EM",{});var dy=r(Vi);Mu=d(dy,"facebook/bart-large-cnn"),dy.forEach(t),Eu=d($i," weights will not have a "),Ji=s($i,"CODE",{});var ly=r(Ji);Pu=d(ly,"mask_token_id"),ly.forEach(t),Au=d($i,`, or be able to perform
mask-filling tasks.`),$i.forEach(t),st.forEach(t),_c=h(n),ao=s(n,"H2",{class:!0});var Kc=r(ao);Go=s(Kc,"A",{id:!0,class:!0,href:!0});var cy=r(Go);Ki=s(cy,"SPAN",{});var py=r(Ki);v(Ba.$$.fragment,py),py.forEach(t),cy.forEach(t),Su=h(Kc),Xi=s(Kc,"SPAN",{});var uy=r(Xi);Ou=d(uy,"Mask Filling"),uy.forEach(t),Kc.forEach(t),gc=h(n),Et=s(n,"P",{});var xi=r(Et);Iu=d(xi,"The "),Zi=s(xi,"CODE",{});var hy=r(Zi);Nu=d(hy,"facebook/bart-base"),hy.forEach(t),Lu=d(xi," and "),Yi=s(xi,"CODE",{});var my=r(Yi);Du=d(my,"facebook/bart-large"),my.forEach(t),Gu=d(xi," checkpoints can be used to fill multi-token masks."),xi.forEach(t),bc=h(n),v(qa.$$.fragment,n),kc=h(n),so=s(n,"H2",{class:!0});var Xc=r(so);Wo=s(Xc,"A",{id:!0,class:!0,href:!0});var fy=r(Wo);ed=s(fy,"SPAN",{});var _y=r(ed);v(ja.$$.fragment,_y),_y.forEach(t),fy.forEach(t),Wu=h(Xc),td=s(Xc,"SPAN",{});var gy=r(td);Uu=d(gy,"BartConfig"),gy.forEach(t),Xc.forEach(t),yc=h(n),ot=s(n,"DIV",{class:!0});var pa=r(ot);v(Ca.$$.fragment,pa),Ru=h(pa),ro=s(pa,"P",{});var Fi=r(ro);Qu=d(Fi,"This is the configuration class to store the configuration of a "),Zr=s(Fi,"A",{href:!0});var by=r(Zr);Hu=d(by,"BartModel"),by.forEach(t),Vu=d(Fi,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Ma=s(Fi,"A",{href:!0,rel:!0});var ky=r(Ma);Ju=d(ky,"facebook/bart-large"),ky.forEach(t),Ku=d(Fi," architecture."),Fi.forEach(t),Xu=h(pa),io=s(pa,"P",{});var zi=r(io);Zu=d(zi,"Configuration objects inherit from "),Yr=s(zi,"A",{href:!0});var yy=r(Yr);Yu=d(yy,"PretrainedConfig"),yy.forEach(t),eh=d(zi,` and can be used to control the model outputs. Read the
documentation from `),ei=s(zi,"A",{href:!0});var vy=r(ei);th=d(vy,"PretrainedConfig"),vy.forEach(t),oh=d(zi," for more information."),zi.forEach(t),nh=h(pa),v(Uo.$$.fragment,pa),pa.forEach(t),vc=h(n),lo=s(n,"H2",{class:!0});var Zc=r(lo);Ro=s(Zc,"A",{id:!0,class:!0,href:!0});var Ty=r(Ro);od=s(Ty,"SPAN",{});var wy=r(od);v(Ea.$$.fragment,wy),wy.forEach(t),Ty.forEach(t),ah=h(Zc),nd=s(Zc,"SPAN",{});var $y=r(nd);sh=d($y,"BartTokenizer"),$y.forEach(t),Zc.forEach(t),Tc=h(n),S=s(n,"DIV",{class:!0});var R=r(S);v(Pa.$$.fragment,R),rh=h(R),ad=s(R,"P",{});var xy=r(ad);ih=d(xy,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),xy.forEach(t),dh=h(R),sd=s(R,"P",{});var Fy=r(sd);lh=d(Fy,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Fy.forEach(t),ch=h(R),v(Qo.$$.fragment,R),ph=h(R),Aa=s(R,"P",{});var Yc=r(Aa);uh=d(Yc,"You can get around that behavior by passing "),rd=s(Yc,"CODE",{});var zy=r(rd);hh=d(zy,"add_prefix_space=True"),zy.forEach(t),mh=d(Yc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Yc.forEach(t),fh=h(R),v(Ho.$$.fragment,R),_h=h(R),Sa=s(R,"P",{});var ep=r(Sa);gh=d(ep,"This tokenizer inherits from "),ti=s(ep,"A",{href:!0});var By=r(ti);bh=d(By,"PreTrainedTokenizer"),By.forEach(t),kh=d(ep,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ep.forEach(t),yh=h(R),Pt=s(R,"DIV",{class:!0});var Bi=r(Pt);v(Oa.$$.fragment,Bi),vh=h(Bi),id=s(Bi,"P",{});var qy=r(id);Th=d(qy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),qy.forEach(t),wh=h(Bi),Ia=s(Bi,"UL",{});var tp=r(Ia);oi=s(tp,"LI",{});var ty=r(oi);$h=d(ty,"single sequence: "),dd=s(ty,"CODE",{});var jy=r(dd);xh=d(jy,"<s> X </s>"),jy.forEach(t),ty.forEach(t),Fh=h(tp),ni=s(tp,"LI",{});var oy=r(ni);zh=d(oy,"pair of sequences: "),ld=s(oy,"CODE",{});var Cy=r(ld);Bh=d(Cy,"<s> A </s></s> B </s>"),Cy.forEach(t),oy.forEach(t),tp.forEach(t),Bi.forEach(t),qh=h(R),Vo=s(R,"DIV",{class:!0});var op=r(Vo);v(Na.$$.fragment,op),jh=h(op),cd=s(op,"P",{});var My=r(cd);Ch=d(My,"Converts a sequence of tokens (string) in a single string."),My.forEach(t),op.forEach(t),Mh=h(R),Jo=s(R,"DIV",{class:!0});var np=r(Jo);v(La.$$.fragment,np),Eh=h(np),pd=s(np,"P",{});var Ey=r(pd);Ph=d(Ey,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Ey.forEach(t),np.forEach(t),Ah=h(R),Ko=s(R,"DIV",{class:!0});var ap=r(Ko);v(Da.$$.fragment,ap),Sh=h(ap),Ga=s(ap,"P",{});var sp=r(Ga);Oh=d(sp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ud=s(sp,"CODE",{});var Py=r(ud);Ih=d(Py,"prepare_for_model"),Py.forEach(t),Nh=d(sp," method."),sp.forEach(t),ap.forEach(t),R.forEach(t),wc=h(n),co=s(n,"H2",{class:!0});var rp=r(co);Xo=s(rp,"A",{id:!0,class:!0,href:!0});var Ay=r(Xo);hd=s(Ay,"SPAN",{});var Sy=r(hd);v(Wa.$$.fragment,Sy),Sy.forEach(t),Ay.forEach(t),Lh=h(rp),md=s(rp,"SPAN",{});var Oy=r(md);Dh=d(Oy,"BartTokenizerFast"),Oy.forEach(t),rp.forEach(t),$c=h(n),J=s(n,"DIV",{class:!0});var ke=r(J);v(Ua.$$.fragment,ke),Gh=h(ke),Ra=s(ke,"P",{});var ip=r(Ra);Wh=d(ip,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),fd=s(ip,"EM",{});var Iy=r(fd);Uh=d(Iy,"tokenizers"),Iy.forEach(t),Rh=d(ip,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),ip.forEach(t),Qh=h(ke),_d=s(ke,"P",{});var Ny=r(_d);Hh=d(Ny,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Ny.forEach(t),Vh=h(ke),v(Zo.$$.fragment,ke),Jh=h(ke),Qa=s(ke,"P",{});var dp=r(Qa);Kh=d(dp,"You can get around that behavior by passing "),gd=s(dp,"CODE",{});var Ly=r(gd);Xh=d(Ly,"add_prefix_space=True"),Ly.forEach(t),Zh=d(dp,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dp.forEach(t),Yh=h(ke),v(Yo.$$.fragment,ke),em=h(ke),Ha=s(ke,"P",{});var lp=r(Ha);tm=d(lp,"This tokenizer inherits from "),ai=s(lp,"A",{href:!0});var Dy=r(ai);om=d(Dy,"PreTrainedTokenizerFast"),Dy.forEach(t),nm=d(lp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),lp.forEach(t),am=h(ke),en=s(ke,"DIV",{class:!0});var cp=r(en);v(Va.$$.fragment,cp),sm=h(cp),bd=s(cp,"P",{});var Gy=r(bd);rm=d(Gy,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Gy.forEach(t),cp.forEach(t),ke.forEach(t),xc=h(n),po=s(n,"H2",{class:!0});var pp=r(po);tn=s(pp,"A",{id:!0,class:!0,href:!0});var Wy=r(tn);kd=s(Wy,"SPAN",{});var Uy=r(kd);v(Ja.$$.fragment,Uy),Uy.forEach(t),Wy.forEach(t),im=h(pp),yd=s(pp,"SPAN",{});var Ry=r(yd);dm=d(Ry,"BartModel"),Ry.forEach(t),pp.forEach(t),Fc=h(n),nt=s(n,"DIV",{class:!0});var ua=r(nt);v(Ka.$$.fragment,ua),lm=h(ua),Xa=s(ua,"P",{});var up=r(Xa);cm=d(up,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),si=s(up,"A",{href:!0});var Qy=r(si);pm=d(Qy,"PreTrainedModel"),Qy.forEach(t),um=d(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up.forEach(t),hm=h(ua),Za=s(ua,"P",{});var hp=r(Za);mm=d(hp,"This model is also a PyTorch "),Ya=s(hp,"A",{href:!0,rel:!0});var Hy=r(Ya);fm=d(Hy,"torch.nn.Module"),Hy.forEach(t),_m=d(hp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hp.forEach(t),gm=h(ua),lt=s(ua,"DIV",{class:!0});var ha=r(lt);v(es.$$.fragment,ha),bm=h(ha),uo=s(ha,"P",{});var qi=r(uo);km=d(qi,"The "),ri=s(qi,"A",{href:!0});var Vy=r(ri);ym=d(Vy,"BartModel"),Vy.forEach(t),vm=d(qi," forward method, overrides the "),vd=s(qi,"CODE",{});var Jy=r(vd);Tm=d(Jy,"__call__"),Jy.forEach(t),wm=d(qi," special method."),qi.forEach(t),$m=h(ha),v(on.$$.fragment,ha),xm=h(ha),v(nn.$$.fragment,ha),ha.forEach(t),ua.forEach(t),zc=h(n),ho=s(n,"H2",{class:!0});var mp=r(ho);an=s(mp,"A",{id:!0,class:!0,href:!0});var Ky=r(an);Td=s(Ky,"SPAN",{});var Xy=r(Td);v(ts.$$.fragment,Xy),Xy.forEach(t),Ky.forEach(t),Fm=h(mp),wd=s(mp,"SPAN",{});var Zy=r(wd);zm=d(Zy,"BartForConditionalGeneration"),Zy.forEach(t),mp.forEach(t),Bc=h(n),at=s(n,"DIV",{class:!0});var ma=r(at);v(os.$$.fragment,ma),Bm=h(ma),ns=s(ma,"P",{});var fp=r(ns);qm=d(fp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ii=s(fp,"A",{href:!0});var Yy=r(ii);jm=d(Yy,"PreTrainedModel"),Yy.forEach(t),Cm=d(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),Mm=h(ma),as=s(ma,"P",{});var _p=r(as);Em=d(_p,"This model is also a PyTorch "),ss=s(_p,"A",{href:!0,rel:!0});var ev=r(ss);Pm=d(ev,"torch.nn.Module"),ev.forEach(t),Am=d(_p,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_p.forEach(t),Sm=h(ma),Ne=s(ma,"DIV",{class:!0});var At=r(Ne);v(rs.$$.fragment,At),Om=h(At),mo=s(At,"P",{});var ji=r(mo);Im=d(ji,"The "),di=s(ji,"A",{href:!0});var tv=r(di);Nm=d(tv,"BartForConditionalGeneration"),tv.forEach(t),Lm=d(ji," forward method, overrides the "),$d=s(ji,"CODE",{});var ov=r($d);Dm=d(ov,"__call__"),ov.forEach(t),Gm=d(ji," special method."),ji.forEach(t),Wm=h(At),v(sn.$$.fragment,At),Um=h(At),v(rn.$$.fragment,At),Rm=h(At),v(dn.$$.fragment,At),At.forEach(t),ma.forEach(t),qc=h(n),fo=s(n,"H2",{class:!0});var gp=r(fo);ln=s(gp,"A",{id:!0,class:!0,href:!0});var nv=r(ln);xd=s(nv,"SPAN",{});var av=r(xd);v(is.$$.fragment,av),av.forEach(t),nv.forEach(t),Qm=h(gp),Fd=s(gp,"SPAN",{});var sv=r(Fd);Hm=d(sv,"BartForSequenceClassification"),sv.forEach(t),gp.forEach(t),jc=h(n),Ce=s(n,"DIV",{class:!0});var St=r(Ce);v(ds.$$.fragment,St),Vm=h(St),zd=s(St,"P",{});var rv=r(zd);Jm=d(rv,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),rv.forEach(t),Km=h(St),ls=s(St,"P",{});var bp=r(ls);Xm=d(bp,"This model inherits from "),li=s(bp,"A",{href:!0});var iv=r(li);Zm=d(iv,"PreTrainedModel"),iv.forEach(t),Ym=d(bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp.forEach(t),ef=h(St),cs=s(St,"P",{});var kp=r(cs);tf=d(kp,"This model is also a PyTorch "),ps=s(kp,"A",{href:!0,rel:!0});var dv=r(ps);of=d(dv,"torch.nn.Module"),dv.forEach(t),nf=d(kp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kp.forEach(t),af=h(St),ae=s(St,"DIV",{class:!0});var We=r(ae);v(us.$$.fragment,We),sf=h(We),_o=s(We,"P",{});var Ci=r(_o);rf=d(Ci,"The "),ci=s(Ci,"A",{href:!0});var lv=r(ci);df=d(lv,"BartForSequenceClassification"),lv.forEach(t),lf=d(Ci," forward method, overrides the "),Bd=s(Ci,"CODE",{});var cv=r(Bd);cf=d(cv,"__call__"),cv.forEach(t),pf=d(Ci," special method."),Ci.forEach(t),uf=h(We),v(cn.$$.fragment,We),hf=h(We),v(pn.$$.fragment,We),mf=h(We),v(un.$$.fragment,We),ff=h(We),v(hn.$$.fragment,We),_f=h(We),v(mn.$$.fragment,We),We.forEach(t),St.forEach(t),Cc=h(n),go=s(n,"H2",{class:!0});var yp=r(go);fn=s(yp,"A",{id:!0,class:!0,href:!0});var pv=r(fn);qd=s(pv,"SPAN",{});var uv=r(qd);v(hs.$$.fragment,uv),uv.forEach(t),pv.forEach(t),gf=h(yp),jd=s(yp,"SPAN",{});var hv=r(jd);bf=d(hv,"BartForQuestionAnswering"),hv.forEach(t),yp.forEach(t),Mc=h(n),Me=s(n,"DIV",{class:!0});var Ot=r(Me);v(ms.$$.fragment,Ot),kf=h(Ot),bo=s(Ot,"P",{});var Mi=r(bo);yf=d(Mi,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Cd=s(Mi,"CODE",{});var mv=r(Cd);vf=d(mv,"span start logits"),mv.forEach(t),Tf=d(Mi," and "),Md=s(Mi,"CODE",{});var fv=r(Md);wf=d(fv,"span end logits"),fv.forEach(t),$f=d(Mi,")."),Mi.forEach(t),xf=h(Ot),fs=s(Ot,"P",{});var vp=r(fs);Ff=d(vp,"This model inherits from "),pi=s(vp,"A",{href:!0});var _v=r(pi);zf=d(_v,"PreTrainedModel"),_v.forEach(t),Bf=d(vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vp.forEach(t),qf=h(Ot),_s=s(Ot,"P",{});var Tp=r(_s);jf=d(Tp,"This model is also a PyTorch "),gs=s(Tp,"A",{href:!0,rel:!0});var gv=r(gs);Cf=d(gv,"torch.nn.Module"),gv.forEach(t),Mf=d(Tp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp.forEach(t),Ef=h(Ot),Le=s(Ot,"DIV",{class:!0});var It=r(Le);v(bs.$$.fragment,It),Pf=h(It),ko=s(It,"P",{});var Ei=r(ko);Af=d(Ei,"The "),ui=s(Ei,"A",{href:!0});var bv=r(ui);Sf=d(bv,"BartForQuestionAnswering"),bv.forEach(t),Of=d(Ei," forward method, overrides the "),Ed=s(Ei,"CODE",{});var kv=r(Ed);If=d(kv,"__call__"),kv.forEach(t),Nf=d(Ei," special method."),Ei.forEach(t),Lf=h(It),v(_n.$$.fragment,It),Df=h(It),v(gn.$$.fragment,It),Gf=h(It),v(bn.$$.fragment,It),It.forEach(t),Ot.forEach(t),Ec=h(n),yo=s(n,"H2",{class:!0});var wp=r(yo);kn=s(wp,"A",{id:!0,class:!0,href:!0});var yv=r(kn);Pd=s(yv,"SPAN",{});var vv=r(Pd);v(ks.$$.fragment,vv),vv.forEach(t),yv.forEach(t),Wf=h(wp),Ad=s(wp,"SPAN",{});var Tv=r(Ad);Uf=d(Tv,"BartForCausalLM"),Tv.forEach(t),wp.forEach(t),Pc=h(n),Ee=s(n,"DIV",{class:!0});var Nt=r(Ee);v(ys.$$.fragment,Nt),Rf=h(Nt),Sd=s(Nt,"P",{});var wv=r(Sd);Qf=d(wv,"BART decoder with with a language modeling head on top (linear layer with weights tied to the input embeddings)."),wv.forEach(t),Hf=h(Nt),vs=s(Nt,"P",{});var $p=r(vs);Vf=d($p,"This model inherits from "),hi=s($p,"A",{href:!0});var $v=r(hi);Jf=d($v,"PreTrainedModel"),$v.forEach(t),Kf=d($p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$p.forEach(t),Xf=h(Nt),Ts=s(Nt,"P",{});var xp=r(Ts);Zf=d(xp,"This model is also a PyTorch "),ws=s(xp,"A",{href:!0,rel:!0});var xv=r(ws);Yf=d(xv,"torch.nn.Module"),xv.forEach(t),e_=d(xp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xp.forEach(t),t_=h(Nt),yn=s(Nt,"DIV",{class:!0});var Fp=r(yn);v($s.$$.fragment,Fp),o_=h(Fp),v(vn.$$.fragment,Fp),Fp.forEach(t),Nt.forEach(t),Ac=h(n),vo=s(n,"H2",{class:!0});var zp=r(vo);Tn=s(zp,"A",{id:!0,class:!0,href:!0});var Fv=r(Tn);Od=s(Fv,"SPAN",{});var zv=r(Od);v(xs.$$.fragment,zv),zv.forEach(t),Fv.forEach(t),n_=h(zp),Id=s(zp,"SPAN",{});var Bv=r(Id);a_=d(Bv,"TFBartModel"),Bv.forEach(t),zp.forEach(t),Sc=h(n),Pe=s(n,"DIV",{class:!0});var Lt=r(Pe);v(Fs.$$.fragment,Lt),s_=h(Lt),zs=s(Lt,"P",{});var Bp=r(zs);r_=d(Bp,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),mi=s(Bp,"A",{href:!0});var qv=r(mi);i_=d(qv,"TFPreTrainedModel"),qv.forEach(t),d_=d(Bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp.forEach(t),l_=h(Lt),Bs=s(Lt,"P",{});var qp=r(Bs);c_=d(qp,"This model is also a "),qs=s(qp,"A",{href:!0,rel:!0});var jv=r(qs);p_=d(jv,"tf.keras.Model"),jv.forEach(t),u_=d(qp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qp.forEach(t),h_=h(Lt),v(wn.$$.fragment,Lt),m_=h(Lt),ct=s(Lt,"DIV",{class:!0});var fa=r(ct);v(js.$$.fragment,fa),f_=h(fa),To=s(fa,"P",{});var Pi=r(To);__=d(Pi,"The "),fi=s(Pi,"A",{href:!0});var Cv=r(fi);g_=d(Cv,"TFBartModel"),Cv.forEach(t),b_=d(Pi," forward method, overrides the "),Nd=s(Pi,"CODE",{});var Mv=r(Nd);k_=d(Mv,"__call__"),Mv.forEach(t),y_=d(Pi," special method."),Pi.forEach(t),v_=h(fa),v($n.$$.fragment,fa),T_=h(fa),v(xn.$$.fragment,fa),fa.forEach(t),Lt.forEach(t),Oc=h(n),wo=s(n,"H2",{class:!0});var jp=r(wo);Fn=s(jp,"A",{id:!0,class:!0,href:!0});var Ev=r(Fn);Ld=s(Ev,"SPAN",{});var Pv=r(Ld);v(Cs.$$.fragment,Pv),Pv.forEach(t),Ev.forEach(t),w_=h(jp),Dd=s(jp,"SPAN",{});var Av=r(Dd);$_=d(Av,"TFBartForConditionalGeneration"),Av.forEach(t),jp.forEach(t),Ic=h(n),Ae=s(n,"DIV",{class:!0});var Dt=r(Ae);v(Ms.$$.fragment,Dt),x_=h(Dt),Es=s(Dt,"P",{});var Cp=r(Es);F_=d(Cp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),_i=s(Cp,"A",{href:!0});var Sv=r(_i);z_=d(Sv,"TFPreTrainedModel"),Sv.forEach(t),B_=d(Cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp.forEach(t),q_=h(Dt),Ps=s(Dt,"P",{});var Mp=r(Ps);j_=d(Mp,"This model is also a "),As=s(Mp,"A",{href:!0,rel:!0});var Ov=r(As);C_=d(Ov,"tf.keras.Model"),Ov.forEach(t),M_=d(Mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp.forEach(t),E_=h(Dt),v(zn.$$.fragment,Dt),P_=h(Dt),De=s(Dt,"DIV",{class:!0});var Gt=r(De);v(Ss.$$.fragment,Gt),A_=h(Gt),$o=s(Gt,"P",{});var Ai=r($o);S_=d(Ai,"The "),gi=s(Ai,"A",{href:!0});var Iv=r(gi);O_=d(Iv,"TFBartForConditionalGeneration"),Iv.forEach(t),I_=d(Ai," forward method, overrides the "),Gd=s(Ai,"CODE",{});var Nv=r(Gd);N_=d(Nv,"__call__"),Nv.forEach(t),L_=d(Ai," special method."),Ai.forEach(t),D_=h(Gt),v(Bn.$$.fragment,Gt),G_=h(Gt),v(qn.$$.fragment,Gt),W_=h(Gt),v(jn.$$.fragment,Gt),Gt.forEach(t),Dt.forEach(t),Nc=h(n),xo=s(n,"H2",{class:!0});var Ep=r(xo);Cn=s(Ep,"A",{id:!0,class:!0,href:!0});var Lv=r(Cn);Wd=s(Lv,"SPAN",{});var Dv=r(Wd);v(Os.$$.fragment,Dv),Dv.forEach(t),Lv.forEach(t),U_=h(Ep),Ud=s(Ep,"SPAN",{});var Gv=r(Ud);R_=d(Gv,"FlaxBartModel"),Gv.forEach(t),Ep.forEach(t),Lc=h(n),K=s(n,"DIV",{class:!0});var ye=r(K);v(Is.$$.fragment,ye),Q_=h(ye),Ns=s(ye,"P",{});var Pp=r(Ns);H_=d(Pp,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),bi=s(Pp,"A",{href:!0});var Wv=r(bi);V_=d(Wv,"FlaxPreTrainedModel"),Wv.forEach(t),J_=d(Pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pp.forEach(t),K_=h(ye),Ls=s(ye,"P",{});var Ap=r(Ls);X_=d(Ap,`This model is also a Flax Linen
`),Ds=s(Ap,"A",{href:!0,rel:!0});var Uv=r(Ds);Z_=d(Uv,"flax.nn.Module"),Uv.forEach(t),Y_=d(Ap,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ap.forEach(t),eg=h(ye),Rd=s(ye,"P",{});var Rv=r(Rd);tg=d(Rv,"Finally, this model supports inherent JAX features such as:"),Rv.forEach(t),og=h(ye),Ft=s(ye,"UL",{});var _a=r(Ft);Qd=s(_a,"LI",{});var Qv=r(Qd);Gs=s(Qv,"A",{href:!0,rel:!0});var Hv=r(Gs);ng=d(Hv,"Just-In-Time (JIT) compilation"),Hv.forEach(t),Qv.forEach(t),ag=h(_a),Hd=s(_a,"LI",{});var Vv=r(Hd);Ws=s(Vv,"A",{href:!0,rel:!0});var Jv=r(Ws);sg=d(Jv,"Automatic Differentiation"),Jv.forEach(t),Vv.forEach(t),rg=h(_a),Vd=s(_a,"LI",{});var Kv=r(Vd);Us=s(Kv,"A",{href:!0,rel:!0});var Xv=r(Us);ig=d(Xv,"Vectorization"),Xv.forEach(t),Kv.forEach(t),dg=h(_a),Jd=s(_a,"LI",{});var Zv=r(Jd);Rs=s(Zv,"A",{href:!0,rel:!0});var Yv=r(Rs);lg=d(Yv,"Parallelization"),Yv.forEach(t),Zv.forEach(t),_a.forEach(t),cg=h(ye),pt=s(ye,"DIV",{class:!0});var ga=r(pt);v(Qs.$$.fragment,ga),pg=h(ga),Fo=s(ga,"P",{});var Si=r(Fo);ug=d(Si,"The "),Kd=s(Si,"CODE",{});var e2=r(Kd);hg=d(e2,"FlaxBartPreTrainedModel"),e2.forEach(t),mg=d(Si," forward method, overrides the "),Xd=s(Si,"CODE",{});var t2=r(Xd);fg=d(t2,"__call__"),t2.forEach(t),_g=d(Si," special method."),Si.forEach(t),gg=h(ga),v(Mn.$$.fragment,ga),bg=h(ga),v(En.$$.fragment,ga),ga.forEach(t),kg=h(ye),Pn=s(ye,"DIV",{class:!0});var Sp=r(Pn);v(Hs.$$.fragment,Sp),yg=h(Sp),v(An.$$.fragment,Sp),Sp.forEach(t),vg=h(ye),Sn=s(ye,"DIV",{class:!0});var Op=r(Sn);v(Vs.$$.fragment,Op),Tg=h(Op),v(On.$$.fragment,Op),Op.forEach(t),ye.forEach(t),Dc=h(n),zo=s(n,"H2",{class:!0});var Ip=r(zo);In=s(Ip,"A",{id:!0,class:!0,href:!0});var o2=r(In);Zd=s(o2,"SPAN",{});var n2=r(Zd);v(Js.$$.fragment,n2),n2.forEach(t),o2.forEach(t),wg=h(Ip),Yd=s(Ip,"SPAN",{});var a2=r(Yd);$g=d(a2,"FlaxBartForConditionalGeneration"),a2.forEach(t),Ip.forEach(t),Gc=h(n),X=s(n,"DIV",{class:!0});var ve=r(X);v(Ks.$$.fragment,ve),xg=h(ve),Xs=s(ve,"P",{});var Np=r(Xs);Fg=d(Np,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ki=s(Np,"A",{href:!0});var s2=r(ki);zg=d(s2,"FlaxPreTrainedModel"),s2.forEach(t),Bg=d(Np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Np.forEach(t),qg=h(ve),Zs=s(ve,"P",{});var Lp=r(Zs);jg=d(Lp,`This model is also a Flax Linen
`),Ys=s(Lp,"A",{href:!0,rel:!0});var r2=r(Ys);Cg=d(r2,"flax.nn.Module"),r2.forEach(t),Mg=d(Lp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Lp.forEach(t),Eg=h(ve),el=s(ve,"P",{});var i2=r(el);Pg=d(i2,"Finally, this model supports inherent JAX features such as:"),i2.forEach(t),Ag=h(ve),zt=s(ve,"UL",{});var ba=r(zt);tl=s(ba,"LI",{});var d2=r(tl);er=s(d2,"A",{href:!0,rel:!0});var l2=r(er);Sg=d(l2,"Just-In-Time (JIT) compilation"),l2.forEach(t),d2.forEach(t),Og=h(ba),ol=s(ba,"LI",{});var c2=r(ol);tr=s(c2,"A",{href:!0,rel:!0});var p2=r(tr);Ig=d(p2,"Automatic Differentiation"),p2.forEach(t),c2.forEach(t),Ng=h(ba),nl=s(ba,"LI",{});var u2=r(nl);or=s(u2,"A",{href:!0,rel:!0});var h2=r(or);Lg=d(h2,"Vectorization"),h2.forEach(t),u2.forEach(t),Dg=h(ba),al=s(ba,"LI",{});var m2=r(al);nr=s(m2,"A",{href:!0,rel:!0});var f2=r(nr);Gg=d(f2,"Parallelization"),f2.forEach(t),m2.forEach(t),ba.forEach(t),Wg=h(ve),Ge=s(ve,"DIV",{class:!0});var Wt=r(Ge);v(ar.$$.fragment,Wt),Ug=h(Wt),Bo=s(Wt,"P",{});var Oi=r(Bo);Rg=d(Oi,"The "),sl=s(Oi,"CODE",{});var _2=r(sl);Qg=d(_2,"FlaxBartPreTrainedModel"),_2.forEach(t),Hg=d(Oi," forward method, overrides the "),rl=s(Oi,"CODE",{});var g2=r(rl);Vg=d(g2,"__call__"),g2.forEach(t),Jg=d(Oi," special method."),Oi.forEach(t),Kg=h(Wt),v(Nn.$$.fragment,Wt),Xg=h(Wt),v(Ln.$$.fragment,Wt),Zg=h(Wt),v(Dn.$$.fragment,Wt),Wt.forEach(t),Yg=h(ve),Gn=s(ve,"DIV",{class:!0});var Dp=r(Gn);v(sr.$$.fragment,Dp),eb=h(Dp),v(Wn.$$.fragment,Dp),Dp.forEach(t),tb=h(ve),Un=s(ve,"DIV",{class:!0});var Gp=r(Un);v(rr.$$.fragment,Gp),ob=h(Gp),v(Rn.$$.fragment,Gp),Gp.forEach(t),ve.forEach(t),Wc=h(n),qo=s(n,"H2",{class:!0});var Wp=r(qo);Qn=s(Wp,"A",{id:!0,class:!0,href:!0});var b2=r(Qn);il=s(b2,"SPAN",{});var k2=r(il);v(ir.$$.fragment,k2),k2.forEach(t),b2.forEach(t),nb=h(Wp),dl=s(Wp,"SPAN",{});var y2=r(dl);ab=d(y2,"FlaxBartForSequenceClassification"),y2.forEach(t),Wp.forEach(t),Uc=h(n),D=s(n,"DIV",{class:!0});var se=r(D);v(dr.$$.fragment,se),sb=h(se),ll=s(se,"P",{});var v2=r(ll);rb=d(v2,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),v2.forEach(t),ib=h(se),lr=s(se,"P",{});var Up=r(lr);db=d(Up,"This model inherits from "),yi=s(Up,"A",{href:!0});var T2=r(yi);lb=d(T2,"FlaxPreTrainedModel"),T2.forEach(t),cb=d(Up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Up.forEach(t),pb=h(se),cr=s(se,"P",{});var Rp=r(cr);ub=d(Rp,`This model is also a Flax Linen
`),pr=s(Rp,"A",{href:!0,rel:!0});var w2=r(pr);hb=d(w2,"flax.nn.Module"),w2.forEach(t),mb=d(Rp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Rp.forEach(t),fb=h(se),cl=s(se,"P",{});var $2=r(cl);_b=d($2,"Finally, this model supports inherent JAX features such as:"),$2.forEach(t),gb=h(se),Bt=s(se,"UL",{});var ka=r(Bt);pl=s(ka,"LI",{});var x2=r(pl);ur=s(x2,"A",{href:!0,rel:!0});var F2=r(ur);bb=d(F2,"Just-In-Time (JIT) compilation"),F2.forEach(t),x2.forEach(t),kb=h(ka),ul=s(ka,"LI",{});var z2=r(ul);hr=s(z2,"A",{href:!0,rel:!0});var B2=r(hr);yb=d(B2,"Automatic Differentiation"),B2.forEach(t),z2.forEach(t),vb=h(ka),hl=s(ka,"LI",{});var q2=r(hl);mr=s(q2,"A",{href:!0,rel:!0});var j2=r(mr);Tb=d(j2,"Vectorization"),j2.forEach(t),q2.forEach(t),wb=h(ka),ml=s(ka,"LI",{});var C2=r(ml);fr=s(C2,"A",{href:!0,rel:!0});var M2=r(fr);$b=d(M2,"Parallelization"),M2.forEach(t),C2.forEach(t),ka.forEach(t),xb=h(se),ut=s(se,"DIV",{class:!0});var ya=r(ut);v(_r.$$.fragment,ya),Fb=h(ya),jo=s(ya,"P",{});var Ii=r(jo);zb=d(Ii,"The "),fl=s(Ii,"CODE",{});var E2=r(fl);Bb=d(E2,"FlaxBartPreTrainedModel"),E2.forEach(t),qb=d(Ii," forward method, overrides the "),_l=s(Ii,"CODE",{});var P2=r(_l);jb=d(P2,"__call__"),P2.forEach(t),Cb=d(Ii," special method."),Ii.forEach(t),Mb=h(ya),v(Hn.$$.fragment,ya),Eb=h(ya),v(Vn.$$.fragment,ya),ya.forEach(t),Pb=h(se),Jn=s(se,"DIV",{class:!0});var Qp=r(Jn);v(gr.$$.fragment,Qp),Ab=h(Qp),v(Kn.$$.fragment,Qp),Qp.forEach(t),Sb=h(se),Xn=s(se,"DIV",{class:!0});var Hp=r(Xn);v(br.$$.fragment,Hp),Ob=h(Hp),v(Zn.$$.fragment,Hp),Hp.forEach(t),se.forEach(t),Rc=h(n),Co=s(n,"H2",{class:!0});var Vp=r(Co);Yn=s(Vp,"A",{id:!0,class:!0,href:!0});var A2=r(Yn);gl=s(A2,"SPAN",{});var S2=r(gl);v(kr.$$.fragment,S2),S2.forEach(t),A2.forEach(t),Ib=h(Vp),bl=s(Vp,"SPAN",{});var O2=r(bl);Nb=d(O2,"FlaxBartForQuestionAnswering"),O2.forEach(t),Vp.forEach(t),Qc=h(n),G=s(n,"DIV",{class:!0});var re=r(G);v(yr.$$.fragment,re),Lb=h(re),Mo=s(re,"P",{});var Ni=r(Mo);Db=d(Ni,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),kl=s(Ni,"CODE",{});var I2=r(kl);Gb=d(I2,"span start logits"),I2.forEach(t),Wb=d(Ni," and "),yl=s(Ni,"CODE",{});var N2=r(yl);Ub=d(N2,"span end logits"),N2.forEach(t),Rb=d(Ni,")."),Ni.forEach(t),Qb=h(re),vr=s(re,"P",{});var Jp=r(vr);Hb=d(Jp,"This model inherits from "),vi=s(Jp,"A",{href:!0});var L2=r(vi);Vb=d(L2,"FlaxPreTrainedModel"),L2.forEach(t),Jb=d(Jp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jp.forEach(t),Kb=h(re),Tr=s(re,"P",{});var Kp=r(Tr);Xb=d(Kp,`This model is also a Flax Linen
`),wr=s(Kp,"A",{href:!0,rel:!0});var D2=r(wr);Zb=d(D2,"flax.nn.Module"),D2.forEach(t),Yb=d(Kp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kp.forEach(t),ek=h(re),vl=s(re,"P",{});var G2=r(vl);tk=d(G2,"Finally, this model supports inherent JAX features such as:"),G2.forEach(t),ok=h(re),qt=s(re,"UL",{});var va=r(qt);Tl=s(va,"LI",{});var W2=r(Tl);$r=s(W2,"A",{href:!0,rel:!0});var U2=r($r);nk=d(U2,"Just-In-Time (JIT) compilation"),U2.forEach(t),W2.forEach(t),ak=h(va),wl=s(va,"LI",{});var R2=r(wl);xr=s(R2,"A",{href:!0,rel:!0});var Q2=r(xr);sk=d(Q2,"Automatic Differentiation"),Q2.forEach(t),R2.forEach(t),rk=h(va),$l=s(va,"LI",{});var H2=r($l);Fr=s(H2,"A",{href:!0,rel:!0});var V2=r(Fr);ik=d(V2,"Vectorization"),V2.forEach(t),H2.forEach(t),dk=h(va),xl=s(va,"LI",{});var J2=r(xl);zr=s(J2,"A",{href:!0,rel:!0});var K2=r(zr);lk=d(K2,"Parallelization"),K2.forEach(t),J2.forEach(t),va.forEach(t),ck=h(re),ht=s(re,"DIV",{class:!0});var Ta=r(ht);v(Br.$$.fragment,Ta),pk=h(Ta),Eo=s(Ta,"P",{});var Li=r(Eo);uk=d(Li,"The "),Fl=s(Li,"CODE",{});var X2=r(Fl);hk=d(X2,"FlaxBartPreTrainedModel"),X2.forEach(t),mk=d(Li," forward method, overrides the "),zl=s(Li,"CODE",{});var Z2=r(zl);fk=d(Z2,"__call__"),Z2.forEach(t),_k=d(Li," special method."),Li.forEach(t),gk=h(Ta),v(ea.$$.fragment,Ta),bk=h(Ta),v(ta.$$.fragment,Ta),Ta.forEach(t),kk=h(re),oa=s(re,"DIV",{class:!0});var Xp=r(oa);v(qr.$$.fragment,Xp),yk=h(Xp),v(na.$$.fragment,Xp),Xp.forEach(t),vk=h(re),aa=s(re,"DIV",{class:!0});var Zp=r(aa);v(jr.$$.fragment,Zp),Tk=h(Zp),v(sa.$$.fragment,Zp),Zp.forEach(t),re.forEach(t),Hc=h(n),Po=s(n,"H2",{class:!0});var Yp=r(Po);ra=s(Yp,"A",{id:!0,class:!0,href:!0});var Y2=r(ra);Bl=s(Y2,"SPAN",{});var eT=r(Bl);v(Cr.$$.fragment,eT),eT.forEach(t),Y2.forEach(t),wk=h(Yp),ql=s(Yp,"SPAN",{});var tT=r(ql);$k=d(tT,"FlaxBartForCausalLM"),tT.forEach(t),Yp.forEach(t),Vc=h(n),te=s(n,"DIV",{class:!0});var Ue=r(te);v(Mr.$$.fragment,Ue),xk=h(Ue),jl=s(Ue,"P",{});var oT=r(jl);Fk=d(oT,`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),oT.forEach(t),zk=h(Ue),Er=s(Ue,"P",{});var eu=r(Er);Bk=d(eu,"This model inherits from "),Ti=s(eu,"A",{href:!0});var nT=r(Ti);qk=d(nT,"FlaxPreTrainedModel"),nT.forEach(t),jk=d(eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu.forEach(t),Ck=h(Ue),Pr=s(Ue,"P",{});var tu=r(Pr);Mk=d(tu,`This model is also a Flax Linen
`),Ar=s(tu,"A",{href:!0,rel:!0});var aT=r(Ar);Ek=d(aT,"flax.nn.Module"),aT.forEach(t),Pk=d(tu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),tu.forEach(t),Ak=h(Ue),Cl=s(Ue,"P",{});var sT=r(Cl);Sk=d(sT,"Finally, this model supports inherent JAX features such as:"),sT.forEach(t),Ok=h(Ue),jt=s(Ue,"UL",{});var wa=r(jt);Ml=s(wa,"LI",{});var rT=r(Ml);Sr=s(rT,"A",{href:!0,rel:!0});var iT=r(Sr);Ik=d(iT,"Just-In-Time (JIT) compilation"),iT.forEach(t),rT.forEach(t),Nk=h(wa),El=s(wa,"LI",{});var dT=r(El);Or=s(dT,"A",{href:!0,rel:!0});var lT=r(Or);Lk=d(lT,"Automatic Differentiation"),lT.forEach(t),dT.forEach(t),Dk=h(wa),Pl=s(wa,"LI",{});var cT=r(Pl);Ir=s(cT,"A",{href:!0,rel:!0});var pT=r(Ir);Gk=d(pT,"Vectorization"),pT.forEach(t),cT.forEach(t),Wk=h(wa),Al=s(wa,"LI",{});var uT=r(Al);Nr=s(uT,"A",{href:!0,rel:!0});var hT=r(Nr);Uk=d(hT,"Parallelization"),hT.forEach(t),uT.forEach(t),wa.forEach(t),Rk=h(Ue),mt=s(Ue,"DIV",{class:!0});var $a=r(mt);v(Lr.$$.fragment,$a),Qk=h($a),Ao=s($a,"P",{});var Di=r(Ao);Hk=d(Di,"The "),Sl=s(Di,"CODE",{});var mT=r(Sl);Vk=d(mT,"FlaxBartDecoderPreTrainedModel"),mT.forEach(t),Jk=d(Di," forward method, overrides the "),Ol=s(Di,"CODE",{});var fT=r(Ol);Kk=d(fT,"__call__"),fT.forEach(t),Xk=d(Di," special method."),Di.forEach(t),Zk=h($a),v(ia.$$.fragment,$a),Yk=h($a),v(da.$$.fragment,$a),$a.forEach(t),Ue.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(hw)),f(p,"id","bart"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#bart"),f(m,"class","relative group"),f(Te,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(Te,"rel","nofollow"),f(fe,"id","overview"),f(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fe,"href","#overview"),f(H,"class","relative group"),f(Fe,"href","https://arxiv.org/abs/1910.13461"),f(Fe,"rel","nofollow"),f(Be,"href","https://huggingface.co/sshleifer"),f(Be,"rel","nofollow"),f(ee,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),f(ee,"rel","nofollow"),f(L,"id","examples"),f(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(L,"href","#examples"),f(ce,"class","relative group"),f(et,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),f(et,"rel","nofollow"),f(ne,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(je,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),f(je,"rel","nofollow"),f(xa,"href","https://huggingface.co/models?search=distilbart"),f(xa,"rel","nofollow"),f(Fa,"href","https://arxiv.org/abs/2010.13002"),f(Fa,"rel","nofollow"),f(Do,"id","implementation-notes"),f(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Do,"href","#implementation-notes"),f(eo,"class","relative group"),f(Hr,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartTokenizer"),f(Vr,"href","/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode"),f(Jr,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartModel"),f(Xr,"href","/docs/transformers/v4.22.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),f(Go,"id","mask-filling"),f(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Go,"href","#mask-filling"),f(ao,"class","relative group"),f(Wo,"id","transformers.BartConfig"),f(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wo,"href","#transformers.BartConfig"),f(so,"class","relative group"),f(Zr,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartModel"),f(Ma,"href","https://huggingface.co/facebook/bart-large"),f(Ma,"rel","nofollow"),f(Yr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),f(ei,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ro,"id","transformers.BartTokenizer"),f(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ro,"href","#transformers.BartTokenizer"),f(lo,"class","relative group"),f(ti,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xo,"id","transformers.BartTokenizerFast"),f(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xo,"href","#transformers.BartTokenizerFast"),f(co,"class","relative group"),f(ai,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"id","transformers.BartModel"),f(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tn,"href","#transformers.BartModel"),f(po,"class","relative group"),f(si,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(Ya,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ya,"rel","nofollow"),f(ri,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartModel"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(an,"id","transformers.BartForConditionalGeneration"),f(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(an,"href","#transformers.BartForConditionalGeneration"),f(ho,"class","relative group"),f(ii,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ss,"rel","nofollow"),f(di,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ln,"id","transformers.BartForSequenceClassification"),f(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ln,"href","#transformers.BartForSequenceClassification"),f(fo,"class","relative group"),f(li,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ps,"rel","nofollow"),f(ci,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartForSequenceClassification"),f(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"id","transformers.BartForQuestionAnswering"),f(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fn,"href","#transformers.BartForQuestionAnswering"),f(go,"class","relative group"),f(pi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(gs,"rel","nofollow"),f(ui,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.BartForQuestionAnswering"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.BartForCausalLM"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.BartForCausalLM"),f(yo,"class","relative group"),f(hi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ws,"rel","nofollow"),f(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.TFBartModel"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.TFBartModel"),f(vo,"class","relative group"),f(mi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(qs,"rel","nofollow"),f(fi,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.TFBartModel"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"id","transformers.TFBartForConditionalGeneration"),f(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fn,"href","#transformers.TFBartForConditionalGeneration"),f(wo,"class","relative group"),f(_i,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(As,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(As,"rel","nofollow"),f(gi,"href","/docs/transformers/v4.22.2/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),f(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cn,"id","transformers.FlaxBartModel"),f(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cn,"href","#transformers.FlaxBartModel"),f(xo,"class","relative group"),f(bi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ds,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ds,"rel","nofollow"),f(Gs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Gs,"rel","nofollow"),f(Ws,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ws,"rel","nofollow"),f(Us,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Us,"rel","nofollow"),f(Rs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Rs,"rel","nofollow"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(In,"id","transformers.FlaxBartForConditionalGeneration"),f(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(In,"href","#transformers.FlaxBartForConditionalGeneration"),f(zo,"class","relative group"),f(ki,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ys,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ys,"rel","nofollow"),f(er,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(er,"rel","nofollow"),f(tr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(tr,"rel","nofollow"),f(or,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(or,"rel","nofollow"),f(nr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(nr,"rel","nofollow"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qn,"id","transformers.FlaxBartForSequenceClassification"),f(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qn,"href","#transformers.FlaxBartForSequenceClassification"),f(qo,"class","relative group"),f(yi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(pr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(pr,"rel","nofollow"),f(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ur,"rel","nofollow"),f(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(hr,"rel","nofollow"),f(mr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(mr,"rel","nofollow"),f(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(fr,"rel","nofollow"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yn,"id","transformers.FlaxBartForQuestionAnswering"),f(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yn,"href","#transformers.FlaxBartForQuestionAnswering"),f(Co,"class","relative group"),f(vi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(wr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(wr,"rel","nofollow"),f($r,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f($r,"rel","nofollow"),f(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(xr,"rel","nofollow"),f(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Fr,"rel","nofollow"),f(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(zr,"rel","nofollow"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(aa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ra,"id","transformers.FlaxBartForCausalLM"),f(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ra,"href","#transformers.FlaxBartForCausalLM"),f(Po,"class","relative group"),f(Ti,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ar,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ar,"rel","nofollow"),f(Sr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Sr,"rel","nofollow"),f(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Or,"rel","nofollow"),f(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ir,"rel","nofollow"),f(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Nr,"rel","nofollow"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,b){e(document.head,l),k(n,g,b),k(n,m,b),e(m,p),e(p,_),T(o,_,null),e(m,c),e(m,B),e(B,ie),k(n,Q,b),k(n,I,b),e(I,me),e(me,Re),e(I,j),e(I,Te),e(Te,we),e(I,ft),k(n,rt,b),k(n,H,b),e(H,fe),e(fe,Qe),T(Y,Qe,null),e(H,_t),e(H,He),e(He,$e),k(n,it,b),k(n,_e,b),e(_e,xe),e(_e,Fe),e(Fe,gt),e(_e,Ve),k(n,O,b),k(n,N,b),e(N,bt),k(n,ge,b),k(n,oe,b),e(oe,Je),e(Je,ze),e(oe,kt),e(oe,Ke),e(Ke,V),e(oe,yt),e(oe,de),e(de,vt),k(n,dt,b),k(n,W,b),e(W,Tt),e(W,Be),e(Be,le),e(W,wt),e(W,ee),e(ee,$t),e(W,Xe),k(n,U,b),k(n,ce,b),e(ce,L),e(L,Ze),T(qe,Ze,null),e(ce,z),e(ce,C),e(C,Ut),k(n,Oe,b),k(n,be,b),e(be,Ye),e(Ye,A),e(Ye,et),e(et,Rt),e(Ye,Qt),e(be,Ht),e(be,pe),e(pe,ue),e(pe,ne),e(ne,Vt),e(pe,Jt),e(pe,he),e(he,Kt),e(pe,Xt),e(pe,je),e(je,Zt),e(pe,tt),e(be,Yt),e(be,Lo),e(Lo,xa),e(xa,ou),e(Lo,nu),e(Lo,Fa),e(Fa,au),e(Lo,su),k(n,mc,b),k(n,eo,b),e(eo,Do),e(Do,Gi),T(za,Gi,null),e(eo,ru),e(eo,Wi),e(Wi,iu),k(n,fc,b),k(n,Ie,b),e(Ie,xt),e(xt,du),e(xt,Ui),e(Ui,lu),e(xt,cu),e(xt,Hr),e(Hr,pu),e(xt,uu),e(xt,Vr),e(Vr,hu),e(xt,mu),e(Ie,fu),e(Ie,to),e(to,_u),e(to,Jr),e(Jr,gu),e(to,bu),e(to,Ri),e(Ri,ku),e(to,yu),e(Ie,vu),e(Ie,oo),e(oo,Tu),e(oo,Qi),e(Qi,wu),e(oo,$u),e(oo,Hi),e(Hi,xu),e(oo,Fu),e(Ie,zu),e(Ie,Kr),e(Kr,Xr),e(Xr,Bu),e(Kr,qu),e(Ie,ju),e(Ie,no),e(no,Cu),e(no,Vi),e(Vi,Mu),e(no,Eu),e(no,Ji),e(Ji,Pu),e(no,Au),k(n,_c,b),k(n,ao,b),e(ao,Go),e(Go,Ki),T(Ba,Ki,null),e(ao,Su),e(ao,Xi),e(Xi,Ou),k(n,gc,b),k(n,Et,b),e(Et,Iu),e(Et,Zi),e(Zi,Nu),e(Et,Lu),e(Et,Yi),e(Yi,Du),e(Et,Gu),k(n,bc,b),T(qa,n,b),k(n,kc,b),k(n,so,b),e(so,Wo),e(Wo,ed),T(ja,ed,null),e(so,Wu),e(so,td),e(td,Uu),k(n,yc,b),k(n,ot,b),T(Ca,ot,null),e(ot,Ru),e(ot,ro),e(ro,Qu),e(ro,Zr),e(Zr,Hu),e(ro,Vu),e(ro,Ma),e(Ma,Ju),e(ro,Ku),e(ot,Xu),e(ot,io),e(io,Zu),e(io,Yr),e(Yr,Yu),e(io,eh),e(io,ei),e(ei,th),e(io,oh),e(ot,nh),T(Uo,ot,null),k(n,vc,b),k(n,lo,b),e(lo,Ro),e(Ro,od),T(Ea,od,null),e(lo,ah),e(lo,nd),e(nd,sh),k(n,Tc,b),k(n,S,b),T(Pa,S,null),e(S,rh),e(S,ad),e(ad,ih),e(S,dh),e(S,sd),e(sd,lh),e(S,ch),T(Qo,S,null),e(S,ph),e(S,Aa),e(Aa,uh),e(Aa,rd),e(rd,hh),e(Aa,mh),e(S,fh),T(Ho,S,null),e(S,_h),e(S,Sa),e(Sa,gh),e(Sa,ti),e(ti,bh),e(Sa,kh),e(S,yh),e(S,Pt),T(Oa,Pt,null),e(Pt,vh),e(Pt,id),e(id,Th),e(Pt,wh),e(Pt,Ia),e(Ia,oi),e(oi,$h),e(oi,dd),e(dd,xh),e(Ia,Fh),e(Ia,ni),e(ni,zh),e(ni,ld),e(ld,Bh),e(S,qh),e(S,Vo),T(Na,Vo,null),e(Vo,jh),e(Vo,cd),e(cd,Ch),e(S,Mh),e(S,Jo),T(La,Jo,null),e(Jo,Eh),e(Jo,pd),e(pd,Ph),e(S,Ah),e(S,Ko),T(Da,Ko,null),e(Ko,Sh),e(Ko,Ga),e(Ga,Oh),e(Ga,ud),e(ud,Ih),e(Ga,Nh),k(n,wc,b),k(n,co,b),e(co,Xo),e(Xo,hd),T(Wa,hd,null),e(co,Lh),e(co,md),e(md,Dh),k(n,$c,b),k(n,J,b),T(Ua,J,null),e(J,Gh),e(J,Ra),e(Ra,Wh),e(Ra,fd),e(fd,Uh),e(Ra,Rh),e(J,Qh),e(J,_d),e(_d,Hh),e(J,Vh),T(Zo,J,null),e(J,Jh),e(J,Qa),e(Qa,Kh),e(Qa,gd),e(gd,Xh),e(Qa,Zh),e(J,Yh),T(Yo,J,null),e(J,em),e(J,Ha),e(Ha,tm),e(Ha,ai),e(ai,om),e(Ha,nm),e(J,am),e(J,en),T(Va,en,null),e(en,sm),e(en,bd),e(bd,rm),k(n,xc,b),k(n,po,b),e(po,tn),e(tn,kd),T(Ja,kd,null),e(po,im),e(po,yd),e(yd,dm),k(n,Fc,b),k(n,nt,b),T(Ka,nt,null),e(nt,lm),e(nt,Xa),e(Xa,cm),e(Xa,si),e(si,pm),e(Xa,um),e(nt,hm),e(nt,Za),e(Za,mm),e(Za,Ya),e(Ya,fm),e(Za,_m),e(nt,gm),e(nt,lt),T(es,lt,null),e(lt,bm),e(lt,uo),e(uo,km),e(uo,ri),e(ri,ym),e(uo,vm),e(uo,vd),e(vd,Tm),e(uo,wm),e(lt,$m),T(on,lt,null),e(lt,xm),T(nn,lt,null),k(n,zc,b),k(n,ho,b),e(ho,an),e(an,Td),T(ts,Td,null),e(ho,Fm),e(ho,wd),e(wd,zm),k(n,Bc,b),k(n,at,b),T(os,at,null),e(at,Bm),e(at,ns),e(ns,qm),e(ns,ii),e(ii,jm),e(ns,Cm),e(at,Mm),e(at,as),e(as,Em),e(as,ss),e(ss,Pm),e(as,Am),e(at,Sm),e(at,Ne),T(rs,Ne,null),e(Ne,Om),e(Ne,mo),e(mo,Im),e(mo,di),e(di,Nm),e(mo,Lm),e(mo,$d),e($d,Dm),e(mo,Gm),e(Ne,Wm),T(sn,Ne,null),e(Ne,Um),T(rn,Ne,null),e(Ne,Rm),T(dn,Ne,null),k(n,qc,b),k(n,fo,b),e(fo,ln),e(ln,xd),T(is,xd,null),e(fo,Qm),e(fo,Fd),e(Fd,Hm),k(n,jc,b),k(n,Ce,b),T(ds,Ce,null),e(Ce,Vm),e(Ce,zd),e(zd,Jm),e(Ce,Km),e(Ce,ls),e(ls,Xm),e(ls,li),e(li,Zm),e(ls,Ym),e(Ce,ef),e(Ce,cs),e(cs,tf),e(cs,ps),e(ps,of),e(cs,nf),e(Ce,af),e(Ce,ae),T(us,ae,null),e(ae,sf),e(ae,_o),e(_o,rf),e(_o,ci),e(ci,df),e(_o,lf),e(_o,Bd),e(Bd,cf),e(_o,pf),e(ae,uf),T(cn,ae,null),e(ae,hf),T(pn,ae,null),e(ae,mf),T(un,ae,null),e(ae,ff),T(hn,ae,null),e(ae,_f),T(mn,ae,null),k(n,Cc,b),k(n,go,b),e(go,fn),e(fn,qd),T(hs,qd,null),e(go,gf),e(go,jd),e(jd,bf),k(n,Mc,b),k(n,Me,b),T(ms,Me,null),e(Me,kf),e(Me,bo),e(bo,yf),e(bo,Cd),e(Cd,vf),e(bo,Tf),e(bo,Md),e(Md,wf),e(bo,$f),e(Me,xf),e(Me,fs),e(fs,Ff),e(fs,pi),e(pi,zf),e(fs,Bf),e(Me,qf),e(Me,_s),e(_s,jf),e(_s,gs),e(gs,Cf),e(_s,Mf),e(Me,Ef),e(Me,Le),T(bs,Le,null),e(Le,Pf),e(Le,ko),e(ko,Af),e(ko,ui),e(ui,Sf),e(ko,Of),e(ko,Ed),e(Ed,If),e(ko,Nf),e(Le,Lf),T(_n,Le,null),e(Le,Df),T(gn,Le,null),e(Le,Gf),T(bn,Le,null),k(n,Ec,b),k(n,yo,b),e(yo,kn),e(kn,Pd),T(ks,Pd,null),e(yo,Wf),e(yo,Ad),e(Ad,Uf),k(n,Pc,b),k(n,Ee,b),T(ys,Ee,null),e(Ee,Rf),e(Ee,Sd),e(Sd,Qf),e(Ee,Hf),e(Ee,vs),e(vs,Vf),e(vs,hi),e(hi,Jf),e(vs,Kf),e(Ee,Xf),e(Ee,Ts),e(Ts,Zf),e(Ts,ws),e(ws,Yf),e(Ts,e_),e(Ee,t_),e(Ee,yn),T($s,yn,null),e(yn,o_),T(vn,yn,null),k(n,Ac,b),k(n,vo,b),e(vo,Tn),e(Tn,Od),T(xs,Od,null),e(vo,n_),e(vo,Id),e(Id,a_),k(n,Sc,b),k(n,Pe,b),T(Fs,Pe,null),e(Pe,s_),e(Pe,zs),e(zs,r_),e(zs,mi),e(mi,i_),e(zs,d_),e(Pe,l_),e(Pe,Bs),e(Bs,c_),e(Bs,qs),e(qs,p_),e(Bs,u_),e(Pe,h_),T(wn,Pe,null),e(Pe,m_),e(Pe,ct),T(js,ct,null),e(ct,f_),e(ct,To),e(To,__),e(To,fi),e(fi,g_),e(To,b_),e(To,Nd),e(Nd,k_),e(To,y_),e(ct,v_),T($n,ct,null),e(ct,T_),T(xn,ct,null),k(n,Oc,b),k(n,wo,b),e(wo,Fn),e(Fn,Ld),T(Cs,Ld,null),e(wo,w_),e(wo,Dd),e(Dd,$_),k(n,Ic,b),k(n,Ae,b),T(Ms,Ae,null),e(Ae,x_),e(Ae,Es),e(Es,F_),e(Es,_i),e(_i,z_),e(Es,B_),e(Ae,q_),e(Ae,Ps),e(Ps,j_),e(Ps,As),e(As,C_),e(Ps,M_),e(Ae,E_),T(zn,Ae,null),e(Ae,P_),e(Ae,De),T(Ss,De,null),e(De,A_),e(De,$o),e($o,S_),e($o,gi),e(gi,O_),e($o,I_),e($o,Gd),e(Gd,N_),e($o,L_),e(De,D_),T(Bn,De,null),e(De,G_),T(qn,De,null),e(De,W_),T(jn,De,null),k(n,Nc,b),k(n,xo,b),e(xo,Cn),e(Cn,Wd),T(Os,Wd,null),e(xo,U_),e(xo,Ud),e(Ud,R_),k(n,Lc,b),k(n,K,b),T(Is,K,null),e(K,Q_),e(K,Ns),e(Ns,H_),e(Ns,bi),e(bi,V_),e(Ns,J_),e(K,K_),e(K,Ls),e(Ls,X_),e(Ls,Ds),e(Ds,Z_),e(Ls,Y_),e(K,eg),e(K,Rd),e(Rd,tg),e(K,og),e(K,Ft),e(Ft,Qd),e(Qd,Gs),e(Gs,ng),e(Ft,ag),e(Ft,Hd),e(Hd,Ws),e(Ws,sg),e(Ft,rg),e(Ft,Vd),e(Vd,Us),e(Us,ig),e(Ft,dg),e(Ft,Jd),e(Jd,Rs),e(Rs,lg),e(K,cg),e(K,pt),T(Qs,pt,null),e(pt,pg),e(pt,Fo),e(Fo,ug),e(Fo,Kd),e(Kd,hg),e(Fo,mg),e(Fo,Xd),e(Xd,fg),e(Fo,_g),e(pt,gg),T(Mn,pt,null),e(pt,bg),T(En,pt,null),e(K,kg),e(K,Pn),T(Hs,Pn,null),e(Pn,yg),T(An,Pn,null),e(K,vg),e(K,Sn),T(Vs,Sn,null),e(Sn,Tg),T(On,Sn,null),k(n,Dc,b),k(n,zo,b),e(zo,In),e(In,Zd),T(Js,Zd,null),e(zo,wg),e(zo,Yd),e(Yd,$g),k(n,Gc,b),k(n,X,b),T(Ks,X,null),e(X,xg),e(X,Xs),e(Xs,Fg),e(Xs,ki),e(ki,zg),e(Xs,Bg),e(X,qg),e(X,Zs),e(Zs,jg),e(Zs,Ys),e(Ys,Cg),e(Zs,Mg),e(X,Eg),e(X,el),e(el,Pg),e(X,Ag),e(X,zt),e(zt,tl),e(tl,er),e(er,Sg),e(zt,Og),e(zt,ol),e(ol,tr),e(tr,Ig),e(zt,Ng),e(zt,nl),e(nl,or),e(or,Lg),e(zt,Dg),e(zt,al),e(al,nr),e(nr,Gg),e(X,Wg),e(X,Ge),T(ar,Ge,null),e(Ge,Ug),e(Ge,Bo),e(Bo,Rg),e(Bo,sl),e(sl,Qg),e(Bo,Hg),e(Bo,rl),e(rl,Vg),e(Bo,Jg),e(Ge,Kg),T(Nn,Ge,null),e(Ge,Xg),T(Ln,Ge,null),e(Ge,Zg),T(Dn,Ge,null),e(X,Yg),e(X,Gn),T(sr,Gn,null),e(Gn,eb),T(Wn,Gn,null),e(X,tb),e(X,Un),T(rr,Un,null),e(Un,ob),T(Rn,Un,null),k(n,Wc,b),k(n,qo,b),e(qo,Qn),e(Qn,il),T(ir,il,null),e(qo,nb),e(qo,dl),e(dl,ab),k(n,Uc,b),k(n,D,b),T(dr,D,null),e(D,sb),e(D,ll),e(ll,rb),e(D,ib),e(D,lr),e(lr,db),e(lr,yi),e(yi,lb),e(lr,cb),e(D,pb),e(D,cr),e(cr,ub),e(cr,pr),e(pr,hb),e(cr,mb),e(D,fb),e(D,cl),e(cl,_b),e(D,gb),e(D,Bt),e(Bt,pl),e(pl,ur),e(ur,bb),e(Bt,kb),e(Bt,ul),e(ul,hr),e(hr,yb),e(Bt,vb),e(Bt,hl),e(hl,mr),e(mr,Tb),e(Bt,wb),e(Bt,ml),e(ml,fr),e(fr,$b),e(D,xb),e(D,ut),T(_r,ut,null),e(ut,Fb),e(ut,jo),e(jo,zb),e(jo,fl),e(fl,Bb),e(jo,qb),e(jo,_l),e(_l,jb),e(jo,Cb),e(ut,Mb),T(Hn,ut,null),e(ut,Eb),T(Vn,ut,null),e(D,Pb),e(D,Jn),T(gr,Jn,null),e(Jn,Ab),T(Kn,Jn,null),e(D,Sb),e(D,Xn),T(br,Xn,null),e(Xn,Ob),T(Zn,Xn,null),k(n,Rc,b),k(n,Co,b),e(Co,Yn),e(Yn,gl),T(kr,gl,null),e(Co,Ib),e(Co,bl),e(bl,Nb),k(n,Qc,b),k(n,G,b),T(yr,G,null),e(G,Lb),e(G,Mo),e(Mo,Db),e(Mo,kl),e(kl,Gb),e(Mo,Wb),e(Mo,yl),e(yl,Ub),e(Mo,Rb),e(G,Qb),e(G,vr),e(vr,Hb),e(vr,vi),e(vi,Vb),e(vr,Jb),e(G,Kb),e(G,Tr),e(Tr,Xb),e(Tr,wr),e(wr,Zb),e(Tr,Yb),e(G,ek),e(G,vl),e(vl,tk),e(G,ok),e(G,qt),e(qt,Tl),e(Tl,$r),e($r,nk),e(qt,ak),e(qt,wl),e(wl,xr),e(xr,sk),e(qt,rk),e(qt,$l),e($l,Fr),e(Fr,ik),e(qt,dk),e(qt,xl),e(xl,zr),e(zr,lk),e(G,ck),e(G,ht),T(Br,ht,null),e(ht,pk),e(ht,Eo),e(Eo,uk),e(Eo,Fl),e(Fl,hk),e(Eo,mk),e(Eo,zl),e(zl,fk),e(Eo,_k),e(ht,gk),T(ea,ht,null),e(ht,bk),T(ta,ht,null),e(G,kk),e(G,oa),T(qr,oa,null),e(oa,yk),T(na,oa,null),e(G,vk),e(G,aa),T(jr,aa,null),e(aa,Tk),T(sa,aa,null),k(n,Hc,b),k(n,Po,b),e(Po,ra),e(ra,Bl),T(Cr,Bl,null),e(Po,wk),e(Po,ql),e(ql,$k),k(n,Vc,b),k(n,te,b),T(Mr,te,null),e(te,xk),e(te,jl),e(jl,Fk),e(te,zk),e(te,Er),e(Er,Bk),e(Er,Ti),e(Ti,qk),e(Er,jk),e(te,Ck),e(te,Pr),e(Pr,Mk),e(Pr,Ar),e(Ar,Ek),e(Pr,Pk),e(te,Ak),e(te,Cl),e(Cl,Sk),e(te,Ok),e(te,jt),e(jt,Ml),e(Ml,Sr),e(Sr,Ik),e(jt,Nk),e(jt,El),e(El,Or),e(Or,Lk),e(jt,Dk),e(jt,Pl),e(Pl,Ir),e(Ir,Gk),e(jt,Wk),e(jt,Al),e(Al,Nr),e(Nr,Uk),e(te,Rk),e(te,mt),T(Lr,mt,null),e(mt,Qk),e(mt,Ao),e(Ao,Hk),e(Ao,Sl),e(Sl,Vk),e(Ao,Jk),e(Ao,Ol),e(Ol,Kk),e(Ao,Xk),e(mt,Zk),T(ia,mt,null),e(mt,Yk),T(da,mt,null),Jc=!0},p(n,[b]){const Dr={};b&2&&(Dr.$$scope={dirty:b,ctx:n}),Uo.$set(Dr);const Il={};b&2&&(Il.$$scope={dirty:b,ctx:n}),Qo.$set(Il);const Nl={};b&2&&(Nl.$$scope={dirty:b,ctx:n}),Ho.$set(Nl);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:n}),Zo.$set(Ll);const la={};b&2&&(la.$$scope={dirty:b,ctx:n}),Yo.$set(la);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:n}),on.$set(Dl);const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:n}),nn.$set(Gl);const Gr={};b&2&&(Gr.$$scope={dirty:b,ctx:n}),sn.$set(Gr);const Wl={};b&2&&(Wl.$$scope={dirty:b,ctx:n}),rn.$set(Wl);const Ul={};b&2&&(Ul.$$scope={dirty:b,ctx:n}),dn.$set(Ul);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:n}),cn.$set(Rl);const Wr={};b&2&&(Wr.$$scope={dirty:b,ctx:n}),pn.$set(Wr);const Ql={};b&2&&(Ql.$$scope={dirty:b,ctx:n}),un.$set(Ql);const Hl={};b&2&&(Hl.$$scope={dirty:b,ctx:n}),hn.$set(Hl);const So={};b&2&&(So.$$scope={dirty:b,ctx:n}),mn.$set(So);const Vl={};b&2&&(Vl.$$scope={dirty:b,ctx:n}),_n.$set(Vl);const Jl={};b&2&&(Jl.$$scope={dirty:b,ctx:n}),gn.$set(Jl);const Kl={};b&2&&(Kl.$$scope={dirty:b,ctx:n}),bn.$set(Kl);const Oo={};b&2&&(Oo.$$scope={dirty:b,ctx:n}),vn.$set(Oo);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:n}),wn.$set(Xl);const Zl={};b&2&&(Zl.$$scope={dirty:b,ctx:n}),$n.$set(Zl);const Ur={};b&2&&(Ur.$$scope={dirty:b,ctx:n}),xn.$set(Ur);const Yl={};b&2&&(Yl.$$scope={dirty:b,ctx:n}),zn.$set(Yl);const ec={};b&2&&(ec.$$scope={dirty:b,ctx:n}),Bn.$set(ec);const tc={};b&2&&(tc.$$scope={dirty:b,ctx:n}),qn.$set(tc);const Io={};b&2&&(Io.$$scope={dirty:b,ctx:n}),jn.$set(Io);const Rr={};b&2&&(Rr.$$scope={dirty:b,ctx:n}),Mn.$set(Rr);const oc={};b&2&&(oc.$$scope={dirty:b,ctx:n}),En.$set(oc);const Ct={};b&2&&(Ct.$$scope={dirty:b,ctx:n}),An.$set(Ct);const nc={};b&2&&(nc.$$scope={dirty:b,ctx:n}),On.$set(nc);const ac={};b&2&&(ac.$$scope={dirty:b,ctx:n}),Nn.$set(ac);const sc={};b&2&&(sc.$$scope={dirty:b,ctx:n}),Ln.$set(sc);const ca={};b&2&&(ca.$$scope={dirty:b,ctx:n}),Dn.$set(ca);const rc={};b&2&&(rc.$$scope={dirty:b,ctx:n}),Wn.$set(rc);const ic={};b&2&&(ic.$$scope={dirty:b,ctx:n}),Rn.$set(ic);const Qr={};b&2&&(Qr.$$scope={dirty:b,ctx:n}),Hn.$set(Qr);const dc={};b&2&&(dc.$$scope={dirty:b,ctx:n}),Vn.$set(dc);const lc={};b&2&&(lc.$$scope={dirty:b,ctx:n}),Kn.$set(lc);const cc={};b&2&&(cc.$$scope={dirty:b,ctx:n}),Zn.$set(cc);const st={};b&2&&(st.$$scope={dirty:b,ctx:n}),ea.$set(st);const Mt={};b&2&&(Mt.$$scope={dirty:b,ctx:n}),ta.$set(Mt);const pc={};b&2&&(pc.$$scope={dirty:b,ctx:n}),na.$set(pc);const uc={};b&2&&(uc.$$scope={dirty:b,ctx:n}),sa.$set(uc);const hc={};b&2&&(hc.$$scope={dirty:b,ctx:n}),ia.$set(hc);const No={};b&2&&(No.$$scope={dirty:b,ctx:n}),da.$set(No)},i(n){Jc||(w(o.$$.fragment,n),w(Y.$$.fragment,n),w(qe.$$.fragment,n),w(za.$$.fragment,n),w(Ba.$$.fragment,n),w(qa.$$.fragment,n),w(ja.$$.fragment,n),w(Ca.$$.fragment,n),w(Uo.$$.fragment,n),w(Ea.$$.fragment,n),w(Pa.$$.fragment,n),w(Qo.$$.fragment,n),w(Ho.$$.fragment,n),w(Oa.$$.fragment,n),w(Na.$$.fragment,n),w(La.$$.fragment,n),w(Da.$$.fragment,n),w(Wa.$$.fragment,n),w(Ua.$$.fragment,n),w(Zo.$$.fragment,n),w(Yo.$$.fragment,n),w(Va.$$.fragment,n),w(Ja.$$.fragment,n),w(Ka.$$.fragment,n),w(es.$$.fragment,n),w(on.$$.fragment,n),w(nn.$$.fragment,n),w(ts.$$.fragment,n),w(os.$$.fragment,n),w(rs.$$.fragment,n),w(sn.$$.fragment,n),w(rn.$$.fragment,n),w(dn.$$.fragment,n),w(is.$$.fragment,n),w(ds.$$.fragment,n),w(us.$$.fragment,n),w(cn.$$.fragment,n),w(pn.$$.fragment,n),w(un.$$.fragment,n),w(hn.$$.fragment,n),w(mn.$$.fragment,n),w(hs.$$.fragment,n),w(ms.$$.fragment,n),w(bs.$$.fragment,n),w(_n.$$.fragment,n),w(gn.$$.fragment,n),w(bn.$$.fragment,n),w(ks.$$.fragment,n),w(ys.$$.fragment,n),w($s.$$.fragment,n),w(vn.$$.fragment,n),w(xs.$$.fragment,n),w(Fs.$$.fragment,n),w(wn.$$.fragment,n),w(js.$$.fragment,n),w($n.$$.fragment,n),w(xn.$$.fragment,n),w(Cs.$$.fragment,n),w(Ms.$$.fragment,n),w(zn.$$.fragment,n),w(Ss.$$.fragment,n),w(Bn.$$.fragment,n),w(qn.$$.fragment,n),w(jn.$$.fragment,n),w(Os.$$.fragment,n),w(Is.$$.fragment,n),w(Qs.$$.fragment,n),w(Mn.$$.fragment,n),w(En.$$.fragment,n),w(Hs.$$.fragment,n),w(An.$$.fragment,n),w(Vs.$$.fragment,n),w(On.$$.fragment,n),w(Js.$$.fragment,n),w(Ks.$$.fragment,n),w(ar.$$.fragment,n),w(Nn.$$.fragment,n),w(Ln.$$.fragment,n),w(Dn.$$.fragment,n),w(sr.$$.fragment,n),w(Wn.$$.fragment,n),w(rr.$$.fragment,n),w(Rn.$$.fragment,n),w(ir.$$.fragment,n),w(dr.$$.fragment,n),w(_r.$$.fragment,n),w(Hn.$$.fragment,n),w(Vn.$$.fragment,n),w(gr.$$.fragment,n),w(Kn.$$.fragment,n),w(br.$$.fragment,n),w(Zn.$$.fragment,n),w(kr.$$.fragment,n),w(yr.$$.fragment,n),w(Br.$$.fragment,n),w(ea.$$.fragment,n),w(ta.$$.fragment,n),w(qr.$$.fragment,n),w(na.$$.fragment,n),w(jr.$$.fragment,n),w(sa.$$.fragment,n),w(Cr.$$.fragment,n),w(Mr.$$.fragment,n),w(Lr.$$.fragment,n),w(ia.$$.fragment,n),w(da.$$.fragment,n),Jc=!0)},o(n){$(o.$$.fragment,n),$(Y.$$.fragment,n),$(qe.$$.fragment,n),$(za.$$.fragment,n),$(Ba.$$.fragment,n),$(qa.$$.fragment,n),$(ja.$$.fragment,n),$(Ca.$$.fragment,n),$(Uo.$$.fragment,n),$(Ea.$$.fragment,n),$(Pa.$$.fragment,n),$(Qo.$$.fragment,n),$(Ho.$$.fragment,n),$(Oa.$$.fragment,n),$(Na.$$.fragment,n),$(La.$$.fragment,n),$(Da.$$.fragment,n),$(Wa.$$.fragment,n),$(Ua.$$.fragment,n),$(Zo.$$.fragment,n),$(Yo.$$.fragment,n),$(Va.$$.fragment,n),$(Ja.$$.fragment,n),$(Ka.$$.fragment,n),$(es.$$.fragment,n),$(on.$$.fragment,n),$(nn.$$.fragment,n),$(ts.$$.fragment,n),$(os.$$.fragment,n),$(rs.$$.fragment,n),$(sn.$$.fragment,n),$(rn.$$.fragment,n),$(dn.$$.fragment,n),$(is.$$.fragment,n),$(ds.$$.fragment,n),$(us.$$.fragment,n),$(cn.$$.fragment,n),$(pn.$$.fragment,n),$(un.$$.fragment,n),$(hn.$$.fragment,n),$(mn.$$.fragment,n),$(hs.$$.fragment,n),$(ms.$$.fragment,n),$(bs.$$.fragment,n),$(_n.$$.fragment,n),$(gn.$$.fragment,n),$(bn.$$.fragment,n),$(ks.$$.fragment,n),$(ys.$$.fragment,n),$($s.$$.fragment,n),$(vn.$$.fragment,n),$(xs.$$.fragment,n),$(Fs.$$.fragment,n),$(wn.$$.fragment,n),$(js.$$.fragment,n),$($n.$$.fragment,n),$(xn.$$.fragment,n),$(Cs.$$.fragment,n),$(Ms.$$.fragment,n),$(zn.$$.fragment,n),$(Ss.$$.fragment,n),$(Bn.$$.fragment,n),$(qn.$$.fragment,n),$(jn.$$.fragment,n),$(Os.$$.fragment,n),$(Is.$$.fragment,n),$(Qs.$$.fragment,n),$(Mn.$$.fragment,n),$(En.$$.fragment,n),$(Hs.$$.fragment,n),$(An.$$.fragment,n),$(Vs.$$.fragment,n),$(On.$$.fragment,n),$(Js.$$.fragment,n),$(Ks.$$.fragment,n),$(ar.$$.fragment,n),$(Nn.$$.fragment,n),$(Ln.$$.fragment,n),$(Dn.$$.fragment,n),$(sr.$$.fragment,n),$(Wn.$$.fragment,n),$(rr.$$.fragment,n),$(Rn.$$.fragment,n),$(ir.$$.fragment,n),$(dr.$$.fragment,n),$(_r.$$.fragment,n),$(Hn.$$.fragment,n),$(Vn.$$.fragment,n),$(gr.$$.fragment,n),$(Kn.$$.fragment,n),$(br.$$.fragment,n),$(Zn.$$.fragment,n),$(kr.$$.fragment,n),$(yr.$$.fragment,n),$(Br.$$.fragment,n),$(ea.$$.fragment,n),$(ta.$$.fragment,n),$(qr.$$.fragment,n),$(na.$$.fragment,n),$(jr.$$.fragment,n),$(sa.$$.fragment,n),$(Cr.$$.fragment,n),$(Mr.$$.fragment,n),$(Lr.$$.fragment,n),$(ia.$$.fragment,n),$(da.$$.fragment,n),Jc=!1},d(n){t(l),n&&t(g),n&&t(m),x(o),n&&t(Q),n&&t(I),n&&t(rt),n&&t(H),x(Y),n&&t(it),n&&t(_e),n&&t(O),n&&t(N),n&&t(ge),n&&t(oe),n&&t(dt),n&&t(W),n&&t(U),n&&t(ce),x(qe),n&&t(Oe),n&&t(be),n&&t(mc),n&&t(eo),x(za),n&&t(fc),n&&t(Ie),n&&t(_c),n&&t(ao),x(Ba),n&&t(gc),n&&t(Et),n&&t(bc),x(qa,n),n&&t(kc),n&&t(so),x(ja),n&&t(yc),n&&t(ot),x(Ca),x(Uo),n&&t(vc),n&&t(lo),x(Ea),n&&t(Tc),n&&t(S),x(Pa),x(Qo),x(Ho),x(Oa),x(Na),x(La),x(Da),n&&t(wc),n&&t(co),x(Wa),n&&t($c),n&&t(J),x(Ua),x(Zo),x(Yo),x(Va),n&&t(xc),n&&t(po),x(Ja),n&&t(Fc),n&&t(nt),x(Ka),x(es),x(on),x(nn),n&&t(zc),n&&t(ho),x(ts),n&&t(Bc),n&&t(at),x(os),x(rs),x(sn),x(rn),x(dn),n&&t(qc),n&&t(fo),x(is),n&&t(jc),n&&t(Ce),x(ds),x(us),x(cn),x(pn),x(un),x(hn),x(mn),n&&t(Cc),n&&t(go),x(hs),n&&t(Mc),n&&t(Me),x(ms),x(bs),x(_n),x(gn),x(bn),n&&t(Ec),n&&t(yo),x(ks),n&&t(Pc),n&&t(Ee),x(ys),x($s),x(vn),n&&t(Ac),n&&t(vo),x(xs),n&&t(Sc),n&&t(Pe),x(Fs),x(wn),x(js),x($n),x(xn),n&&t(Oc),n&&t(wo),x(Cs),n&&t(Ic),n&&t(Ae),x(Ms),x(zn),x(Ss),x(Bn),x(qn),x(jn),n&&t(Nc),n&&t(xo),x(Os),n&&t(Lc),n&&t(K),x(Is),x(Qs),x(Mn),x(En),x(Hs),x(An),x(Vs),x(On),n&&t(Dc),n&&t(zo),x(Js),n&&t(Gc),n&&t(X),x(Ks),x(ar),x(Nn),x(Ln),x(Dn),x(sr),x(Wn),x(rr),x(Rn),n&&t(Wc),n&&t(qo),x(ir),n&&t(Uc),n&&t(D),x(dr),x(_r),x(Hn),x(Vn),x(gr),x(Kn),x(br),x(Zn),n&&t(Rc),n&&t(Co),x(kr),n&&t(Qc),n&&t(G),x(yr),x(Br),x(ea),x(ta),x(qr),x(na),x(jr),x(sa),n&&t(Hc),n&&t(Po),x(Cr),n&&t(Vc),n&&t(te),x(Mr),x(Lr),x(ia),x(da)}}}const hw={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"},{local:"transformers.FlaxBartForCausalLM",title:"FlaxBartForCausalLM"}],title:"BART"};function mw(F){return yT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vw extends _T{constructor(l){super();gT(this,l,mw,uw,bT,{})}}export{vw as default,hw as metadata};
