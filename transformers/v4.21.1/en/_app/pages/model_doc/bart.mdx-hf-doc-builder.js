import{S as X1,i as K1,s as Z1,e as a,k as u,w as y,t as i,M as Y1,c as s,d as t,m as h,a as r,x as v,h as d,b as f,G as e,g as k,y as T,q as w,o as $,B as x,v as eT,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as Fe}from"../../chunks/Tip-hf-doc-builder.js";import{D as B}from"../../chunks/Docstring-hf-doc-builder.js";import{C}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as V}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function tT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartModel, BartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function oT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),g=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function nT(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("When used with "),m=a("code"),c=i("is_split_into_words=True"),_=i(", this tokenizer will add a space before each word (even the first one).")},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"When used with "),m=s(p,"CODE",{});var q=r(m);c=d(q,"is_split_into_words=True"),q.forEach(t),_=d(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function aT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),g=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function sT(F){let l,g,m,c,_,n,p,q;return{c(){l=a("p"),g=i("When used with "),m=a("code"),c=i("is_split_into_words=True"),_=i(", this tokenizer needs to be instantiated with "),n=a("code"),p=i("add_prefix_space=True"),q=i(".")},l(ne){l=s(ne,"P",{});var O=r(l);g=d(O,"When used with "),m=s(O,"CODE",{});var j=r(m);c=d(j,"is_split_into_words=True"),j.forEach(t),_=d(O,", this tokenizer needs to be instantiated with "),n=s(O,"CODE",{});var le=r(n);p=d(le,"add_prefix_space=True"),le.forEach(t),q=d(O,"."),O.forEach(t)},m(ne,O){k(ne,l,O),e(l,g),e(l,m),e(m,c),e(l,_),e(l,n),e(n,p),e(l,q)},d(ne){ne&&t(l)}}}function rT(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function iT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function dT(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function lT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
<span class="hljs-string">&#x27;PG&amp;E scheduled the blackouts in response to forecasts for high winds amid dry conditions&#x27;</span>`}}),{c(){l=a("p"),g=i("Summarization example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Summarization example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function cT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
[<span class="hljs-string">&#x27;not&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;great&#x27;</span>, <span class="hljs-string">&#x27;very&#x27;</span>]`}}),{c(){l=a("p"),g=i("Mask filling example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Mask filling example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function pT(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function uT(F){let l,g,m,c,_;return c=new C({props:{code:`import torch
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
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),g=i("Example of single-label classification:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example of single-label classification:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function hT(F){let l,g;return l=new C({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.0</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),g=!0},p:P,i(m){g||(w(l.$$.fragment,m),g=!0)},o(m){$(l.$$.fragment,m),g=!1},d(m){x(l,m)}}}function mT(F){let l,g,m,c,_;return c=new C({props:{code:`import torch
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
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),g=i("Example of multi-label classification:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example of multi-label classification:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function fT(F){let l,g;return l=new C({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),g=!0},p:P,i(m){g||(w(l.$$.fragment,m),g=!0)},o(m){$(l.$$.fragment,m),g=!1},d(m){x(l,m)}}}function _T(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function gT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
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
<span class="hljs-string">&#x27; nice puppet&#x27;</span>`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function bT(F){let l,g;return l=new C({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.59</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),g=!0},p:P,i(m){g||(w(l.$$.fragment,m),g=!0)},o(m){$(l.$$.fragment,m),g=!1},d(m){x(l,m)}}}function kT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function yT(F){let l,g,m,c,_,n,p,q,ne,O,j,le,_e,et,ge,be,tt,Qe,J,D,Se,ae,S,I,ot,ce,pe,nt,X,at,st,G,ze,ke,He,Y,se,rt,it,K,dt,ye,Oe;return{c(){l=a("p"),g=i("TF 2.0 models accepts two formats as inputs:"),m=u(),c=a("ul"),_=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),p=u(),q=a("li"),ne=i("having all inputs as a list, tuple or dict in the first positional arguments."),O=u(),j=a("p"),le=i("This second option is useful when using "),_e=a("code"),et=i("tf.keras.Model.fit"),ge=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=a("code"),tt=i("model(inputs)"),Qe=i("."),J=u(),D=a("p"),Se=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=u(),S=a("ul"),I=a("li"),ot=i("a single Tensor with "),ce=a("code"),pe=i("input_ids"),nt=i(" only and nothing else: "),X=a("code"),at=i("model(input_ids)"),st=u(),G=a("li"),ze=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=a("code"),He=i("model([input_ids, attention_mask])"),Y=i(" or "),se=a("code"),rt=i("model([input_ids, attention_mask, token_type_ids])"),it=u(),K=a("li"),dt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Oe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var M=r(l);g=d(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=h(z),c=s(z,"UL",{});var H=r(c);_=s(H,"LI",{});var Bt=r(_);n=d(Bt,"having all inputs as keyword arguments (like PyTorch models), or"),Bt.forEach(t),p=h(H),q=s(H,"LI",{});var Ie=r(q);ne=d(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),H.forEach(t),O=h(z),j=s(z,"P",{});var re=r(j);le=d(re,"This second option is useful when using "),_e=s(re,"CODE",{});var jt=r(_e);et=d(jt,"tf.keras.Model.fit"),jt.forEach(t),ge=d(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=s(re,"CODE",{});var Ne=r(be);tt=d(Ne,"model(inputs)"),Ne.forEach(t),Qe=d(re,"."),re.forEach(t),J=h(z),D=s(z,"P",{});var Ct=r(D);Se=d(Ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ct.forEach(t),ae=h(z),S=s(z,"UL",{});var ie=r(S);I=s(ie,"LI",{});var ue=r(I);ot=d(ue,"a single Tensor with "),ce=s(ue,"CODE",{});var ve=r(ce);pe=d(ve,"input_ids"),ve.forEach(t),nt=d(ue," only and nothing else: "),X=s(ue,"CODE",{});var qe=r(X);at=d(qe,"model(input_ids)"),qe.forEach(t),ue.forEach(t),st=h(ie),G=s(ie,"LI",{});var de=r(G);ze=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=s(de,"CODE",{});var Le=r(ke);He=d(Le,"model([input_ids, attention_mask])"),Le.forEach(t),Y=d(de," or "),se=s(de,"CODE",{});var Mt=r(se);rt=d(Mt,"model([input_ids, attention_mask, token_type_ids])"),Mt.forEach(t),de.forEach(t),it=h(ie),K=s(ie,"LI",{});var De=r(K);dt=d(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(De,"CODE",{});var Et=r(ye);Oe=d(Et,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Et.forEach(t),De.forEach(t),ie.forEach(t)},m(z,M){k(z,l,M),e(l,g),k(z,m,M),k(z,c,M),e(c,_),e(_,n),e(c,p),e(c,q),e(q,ne),k(z,O,M),k(z,j,M),e(j,le),e(j,_e),e(_e,et),e(j,ge),e(j,be),e(be,tt),e(j,Qe),k(z,J,M),k(z,D,M),e(D,Se),k(z,ae,M),k(z,S,M),e(S,I),e(I,ot),e(I,ce),e(ce,pe),e(I,nt),e(I,X),e(X,at),e(S,st),e(S,G),e(G,ze),e(G,ke),e(ke,He),e(G,Y),e(G,se),e(se,rt),e(S,it),e(S,K),e(K,dt),e(K,ye),e(ye,Oe)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(O),z&&t(j),z&&t(J),z&&t(D),z&&t(ae),z&&t(S)}}}function vT(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function TT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, TFBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function wT(F){let l,g,m,c,_,n,p,q,ne,O,j,le,_e,et,ge,be,tt,Qe,J,D,Se,ae,S,I,ot,ce,pe,nt,X,at,st,G,ze,ke,He,Y,se,rt,it,K,dt,ye,Oe;return{c(){l=a("p"),g=i("TF 2.0 models accepts two formats as inputs:"),m=u(),c=a("ul"),_=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),p=u(),q=a("li"),ne=i("having all inputs as a list, tuple or dict in the first positional arguments."),O=u(),j=a("p"),le=i("This second option is useful when using "),_e=a("code"),et=i("tf.keras.Model.fit"),ge=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=a("code"),tt=i("model(inputs)"),Qe=i("."),J=u(),D=a("p"),Se=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=u(),S=a("ul"),I=a("li"),ot=i("a single Tensor with "),ce=a("code"),pe=i("input_ids"),nt=i(" only and nothing else: "),X=a("code"),at=i("model(input_ids)"),st=u(),G=a("li"),ze=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=a("code"),He=i("model([input_ids, attention_mask])"),Y=i(" or "),se=a("code"),rt=i("model([input_ids, attention_mask, token_type_ids])"),it=u(),K=a("li"),dt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Oe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var M=r(l);g=d(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=h(z),c=s(z,"UL",{});var H=r(c);_=s(H,"LI",{});var Bt=r(_);n=d(Bt,"having all inputs as keyword arguments (like PyTorch models), or"),Bt.forEach(t),p=h(H),q=s(H,"LI",{});var Ie=r(q);ne=d(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),H.forEach(t),O=h(z),j=s(z,"P",{});var re=r(j);le=d(re,"This second option is useful when using "),_e=s(re,"CODE",{});var jt=r(_e);et=d(jt,"tf.keras.Model.fit"),jt.forEach(t),ge=d(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=s(re,"CODE",{});var Ne=r(be);tt=d(Ne,"model(inputs)"),Ne.forEach(t),Qe=d(re,"."),re.forEach(t),J=h(z),D=s(z,"P",{});var Ct=r(D);Se=d(Ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ct.forEach(t),ae=h(z),S=s(z,"UL",{});var ie=r(S);I=s(ie,"LI",{});var ue=r(I);ot=d(ue,"a single Tensor with "),ce=s(ue,"CODE",{});var ve=r(ce);pe=d(ve,"input_ids"),ve.forEach(t),nt=d(ue," only and nothing else: "),X=s(ue,"CODE",{});var qe=r(X);at=d(qe,"model(input_ids)"),qe.forEach(t),ue.forEach(t),st=h(ie),G=s(ie,"LI",{});var de=r(G);ze=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=s(de,"CODE",{});var Le=r(ke);He=d(Le,"model([input_ids, attention_mask])"),Le.forEach(t),Y=d(de," or "),se=s(de,"CODE",{});var Mt=r(se);rt=d(Mt,"model([input_ids, attention_mask, token_type_ids])"),Mt.forEach(t),de.forEach(t),it=h(ie),K=s(ie,"LI",{});var De=r(K);dt=d(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(De,"CODE",{});var Et=r(ye);Oe=d(Et,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Et.forEach(t),De.forEach(t),ie.forEach(t)},m(z,M){k(z,l,M),e(l,g),k(z,m,M),k(z,c,M),e(c,_),e(_,n),e(c,p),e(c,q),e(q,ne),k(z,O,M),k(z,j,M),e(j,le),e(j,_e),e(_e,et),e(j,ge),e(j,be),e(be,tt),e(j,Qe),k(z,J,M),k(z,D,M),e(D,Se),k(z,ae,M),k(z,S,M),e(S,I),e(I,ot),e(I,ce),e(ce,pe),e(I,nt),e(I,X),e(X,at),e(S,st),e(S,G),e(G,ze),e(G,ke),e(ke,He),e(G,Y),e(G,se),e(se,rt),e(S,it),e(S,K),e(K,dt),e(K,ye),e(ye,Oe)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(O),z&&t(j),z&&t(J),z&&t(D),z&&t(ae),z&&t(S)}}}function $T(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function xT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),g=i("Summarization example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Summarization example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function FT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),g=i("Mask filling example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Mask filling example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function zT(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function qT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function BT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function jT(F){let l,g,m,c,_;return c=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function CT(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function MT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),g=i("Summarization example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Summarization example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function ET(F){let l,g,m,c,_;return c=new C({props:{code:`import jax
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),g=i("Mask filling example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Mask filling example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function PT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function AT(F){let l,g,m,c,_;return c=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function ST(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function OT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function IT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function NT(F){let l,g,m,c,_;return c=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function LT(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function DT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function GT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function WT(F){let l,g,m,c,_;return c=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function UT(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function RT(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){l=a("p"),g=i("Example:"),m=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function QT(F){let l,g,m,c,_,n,p,q,ne,O,j,le,_e,et,ge,be,tt,Qe,J,D,Se,ae,S,I,ot,ce,pe,nt,X,at,st,G,ze,ke,He,Y,se,rt,it,K,dt,ye,Oe,z,M,H,Bt,Ie,re,jt,Ne,Ct,ie,ue,ve,qe,de,Le,Mt,De,Et,Jl,bt,ra,Op,ia,Ip,Np,Lp,lt,Dp,qr,Gp,Wp,wi,Up,Rp,da,Qp,Hp,Vp,vo,la,Jp,Xp,ca,Kp,Zp,Xl,Pt,To,$i,pa,Yp,xi,eu,Kl,Be,ct,tu,Fi,ou,nu,Br,au,su,jr,ru,iu,du,At,lu,Cr,cu,pu,zi,uu,hu,mu,St,fu,qi,_u,gu,Bi,bu,ku,yu,Mr,Er,vu,Tu,wu,Ot,$u,ji,xu,Fu,Ci,zu,qu,Zl,It,wo,Mi,ua,Bu,Ei,ju,Yl,kt,Cu,Pi,Mu,Eu,Ai,Pu,Au,ec,ha,tc,Nt,$o,Si,ma,Su,Oi,Ou,oc,Ge,fa,Iu,Lt,Nu,Pr,Lu,Du,_a,Gu,Wu,Uu,Dt,Ru,Ar,Qu,Hu,Sr,Vu,Ju,Xu,xo,nc,Gt,Fo,Ii,ga,Ku,Ni,Zu,ac,A,ba,Yu,Li,eh,th,Di,oh,nh,zo,ah,ka,sh,Gi,rh,ih,dh,qo,lh,ya,ch,Or,ph,uh,hh,yt,va,mh,Wi,fh,_h,Ta,Ir,gh,Ui,bh,kh,Nr,yh,Ri,vh,Th,Bo,wa,wh,Qi,$h,xh,jo,$a,Fh,Hi,zh,qh,Co,xa,Bh,Fa,jh,Vi,Ch,Mh,sc,Wt,Mo,Ji,za,Eh,Xi,Ph,rc,U,qa,Ah,Ba,Sh,Ki,Oh,Ih,Nh,Zi,Lh,Dh,Eo,Gh,ja,Wh,Yi,Uh,Rh,Qh,Po,Hh,Ca,Vh,Lr,Jh,Xh,Kh,Ao,Ma,Zh,ed,Yh,ic,Ut,So,td,Ea,em,od,tm,dc,We,Pa,om,Aa,nm,Dr,am,sm,rm,Sa,im,Oa,dm,lm,cm,Ve,Ia,pm,Rt,um,Gr,hm,mm,nd,fm,_m,gm,Oo,bm,Io,lc,Qt,No,ad,Na,km,sd,ym,cc,Ue,La,vm,Da,Tm,Wr,wm,$m,xm,Ga,Fm,Wa,zm,qm,Bm,je,Ua,jm,Ht,Cm,Ur,Mm,Em,rd,Pm,Am,Sm,Lo,Om,Do,Im,Go,pc,Vt,Wo,id,Ra,Nm,dd,Lm,uc,Te,Qa,Dm,ld,Gm,Wm,Ha,Um,Rr,Rm,Qm,Hm,Va,Vm,Ja,Jm,Xm,Km,ee,Xa,Zm,Jt,Ym,Qr,ef,tf,cd,of,nf,af,Uo,sf,Ro,rf,Qo,df,Ho,lf,Vo,hc,Xt,Jo,pd,Ka,cf,ud,pf,mc,we,Za,uf,Kt,hf,hd,mf,ff,md,_f,gf,bf,Ya,kf,Hr,yf,vf,Tf,es,wf,ts,$f,xf,Ff,Ce,os,zf,Zt,qf,Vr,Bf,jf,fd,Cf,Mf,Ef,Xo,Pf,Ko,Af,Zo,fc,Yt,Yo,_d,ns,Sf,gd,Of,_c,eo,as,If,en,ss,Nf,tn,gc,to,on,bd,rs,Lf,kd,Df,bc,$e,is,Gf,ds,Wf,Jr,Uf,Rf,Qf,ls,Hf,cs,Vf,Jf,Xf,nn,Kf,Je,ps,Zf,oo,Yf,Xr,e_,t_,yd,o_,n_,a_,an,s_,sn,kc,no,rn,vd,us,r_,Td,i_,yc,xe,hs,d_,ms,l_,Kr,c_,p_,u_,fs,h_,_s,m_,f_,__,dn,g_,Me,gs,b_,ao,k_,Zr,y_,v_,wd,T_,w_,$_,ln,x_,cn,F_,pn,vc,so,un,$d,bs,z_,xd,q_,Tc,R,ks,B_,ys,j_,Yr,C_,M_,E_,vs,P_,Ts,A_,S_,O_,Fd,I_,N_,pt,zd,ws,L_,D_,qd,$s,G_,W_,Bd,xs,U_,R_,jd,Fs,Q_,H_,Xe,zs,V_,ro,J_,Cd,X_,K_,Md,Z_,Y_,eg,hn,tg,mn,og,fn,qs,ng,_n,ag,gn,Bs,sg,bn,wc,io,kn,Ed,js,rg,Pd,ig,$c,Q,Cs,dg,Ms,lg,ei,cg,pg,ug,Es,hg,Ps,mg,fg,_g,Ad,gg,bg,ut,Sd,As,kg,yg,Od,Ss,vg,Tg,Id,Os,wg,$g,Nd,Is,xg,Fg,Ee,Ns,zg,lo,qg,Ld,Bg,jg,Dd,Cg,Mg,Eg,yn,Pg,vn,Ag,Tn,Sg,wn,Ls,Og,$n,Ig,xn,Ds,Ng,Fn,xc,co,zn,Gd,Gs,Lg,Wd,Dg,Fc,N,Ws,Gg,Ud,Wg,Ug,Us,Rg,ti,Qg,Hg,Vg,Rs,Jg,Qs,Xg,Kg,Zg,Rd,Yg,eb,ht,Qd,Hs,tb,ob,Hd,Vs,nb,ab,Vd,Js,sb,rb,Jd,Xs,ib,db,Ke,Ks,lb,po,cb,Xd,pb,ub,Kd,hb,mb,fb,qn,_b,Bn,gb,jn,Zs,bb,Cn,kb,Mn,Ys,yb,En,zc,uo,Pn,Zd,er,vb,Yd,Tb,qc,L,tr,wb,ho,$b,el,xb,Fb,tl,zb,qb,Bb,or,jb,oi,Cb,Mb,Eb,nr,Pb,ar,Ab,Sb,Ob,ol,Ib,Nb,mt,nl,sr,Lb,Db,al,rr,Gb,Wb,sl,ir,Ub,Rb,rl,dr,Qb,Hb,Ze,lr,Vb,mo,Jb,il,Xb,Kb,dl,Zb,Yb,ek,An,tk,Sn,ok,On,cr,nk,In,ak,Nn,pr,sk,Ln,Bc,fo,Dn,ll,ur,rk,cl,ik,jc,Z,hr,dk,pl,lk,ck,mr,pk,ni,uk,hk,mk,fr,fk,_r,_k,gk,bk,ul,kk,yk,ft,hl,gr,vk,Tk,ml,br,wk,$k,fl,kr,xk,Fk,_l,yr,zk,qk,Ye,vr,Bk,_o,jk,gl,Ck,Mk,bl,Ek,Pk,Ak,Gn,Sk,Wn,Cc;return n=new V({}),ae=new V({}),Le=new V({}),pa=new V({}),ua=new V({}),ha=new C({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

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
]`}}),ma=new V({}),fa=new B({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).
num_labels &#x2014; (<code>int</code>, <em>optional</em>, defaults to 3):
The number of labels to use in <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"use_cache"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/configuration_bart.py#L35"}}),xo=new E({props:{anchor:"transformers.BartConfig.example",$$slots:{default:[tT]},$$scope:{ctx:F}}}),ga=new V({}),ba=new B({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/tokenization_bart.py#L101"}}),zo=new E({props:{anchor:"transformers.BartTokenizer.example",$$slots:{default:[oT]},$$scope:{ctx:F}}}),qo=new Fe({props:{$$slots:{default:[nT]},$$scope:{ctx:F}}}),va=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wa=new B({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/tokenization_bart.py#L303"}}),$a=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xa=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),za=new V({}),qa=new B({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/tokenization_bart_fast.py#L70"}}),Eo=new E({props:{anchor:"transformers.BartTokenizerFast.example",$$slots:{default:[aT]},$$scope:{ctx:F}}}),Po=new Fe({props:{$$slots:{default:[sT]},$$scope:{ctx:F}}}),Ma=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/tokenization_bart_fast.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new V({}),Pa=new B({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1146"}}),Ia=new B({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1173",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new Fe({props:{$$slots:{default:[rT]},$$scope:{ctx:F}}}),Io=new E({props:{anchor:"transformers.BartModel.forward.example",$$slots:{default:[iT]},$$scope:{ctx:F}}}),Na=new V({}),La=new B({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1273"}}),Ua=new B({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new Fe({props:{$$slots:{default:[dT]},$$scope:{ctx:F}}}),Do=new E({props:{anchor:"transformers.BartForConditionalGeneration.forward.example",$$slots:{default:[lT]},$$scope:{ctx:F}}}),Go=new E({props:{anchor:"transformers.BartForConditionalGeneration.forward.example-2",$$slots:{default:[cT]},$$scope:{ctx:F}}}),Ra=new V({}),Qa=new B({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1442"}}),Xa=new B({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1455",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new Fe({props:{$$slots:{default:[pT]},$$scope:{ctx:F}}}),Ro=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example",$$slots:{default:[uT]},$$scope:{ctx:F}}}),Qo=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-2",$$slots:{default:[hT]},$$scope:{ctx:F}}}),Ho=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-3",$$slots:{default:[mT]},$$scope:{ctx:F}}}),Vo=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-4",$$slots:{default:[fT]},$$scope:{ctx:F}}}),Ka=new V({}),Za=new B({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1569"}}),os=new B({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1581",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new Fe({props:{$$slots:{default:[_T]},$$scope:{ctx:F}}}),Ko=new E({props:{anchor:"transformers.BartForQuestionAnswering.forward.example",$$slots:{default:[gT]},$$scope:{ctx:F}}}),Zo=new E({props:{anchor:"transformers.BartForQuestionAnswering.forward.example-2",$$slots:{default:[bT]},$$scope:{ctx:F}}}),ns=new V({}),as=new B({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1699"}}),ss=new B({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_bart.py#L1730",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new E({props:{anchor:"transformers.BartForCausalLM.forward.example",$$slots:{default:[kT]},$$scope:{ctx:F}}}),rs=new V({}),is=new B({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_tf_bart.py#L1167"}}),nn=new Fe({props:{$$slots:{default:[yT]},$$scope:{ctx:F}}}),ps=new B({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_tf_bart.py#L1182",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),an=new Fe({props:{$$slots:{default:[vT]},$$scope:{ctx:F}}}),sn=new E({props:{anchor:"transformers.TFBartModel.call.example",$$slots:{default:[TT]},$$scope:{ctx:F}}}),us=new V({}),hs=new B({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_tf_bart.py#L1258"}}),dn=new Fe({props:{$$slots:{default:[wT]},$$scope:{ctx:F}}}),gs=new B({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_tf_bart.py#L1293",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new Fe({props:{$$slots:{default:[$T]},$$scope:{ctx:F}}}),cn=new E({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example",$$slots:{default:[xT]},$$scope:{ctx:F}}}),pn=new E({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example-2",$$slots:{default:[FT]},$$scope:{ctx:F}}}),bs=new V({}),ks=new B({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1241"}}),zs=new B({props:{name:"__call__",anchor:"transformers.FlaxBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hn=new Fe({props:{$$slots:{default:[zT]},$$scope:{ctx:F}}}),mn=new E({props:{anchor:"transformers.FlaxBartModel.__call__.example",$$slots:{default:[qT]},$$scope:{ctx:F}}}),qs=new B({props:{name:"encode",anchor:"transformers.FlaxBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new E({props:{anchor:"transformers.FlaxBartModel.encode.example",$$slots:{default:[BT]},$$scope:{ctx:F}}}),Bs=new B({props:{name:"decode",anchor:"transformers.FlaxBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bn=new E({props:{anchor:"transformers.FlaxBartModel.decode.example",$$slots:{default:[jT]},$$scope:{ctx:F}}}),js=new V({}),Cs=new B({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1327"}}),Ns=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yn=new Fe({props:{$$slots:{default:[CT]},$$scope:{ctx:F}}}),vn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example",$$slots:{default:[MT]},$$scope:{ctx:F}}}),Tn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example-2",$$slots:{default:[ET]},$$scope:{ctx:F}}}),Ls=new B({props:{name:"encode",anchor:"transformers.FlaxBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.encode.example",$$slots:{default:[PT]},$$scope:{ctx:F}}}),Ds=new B({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1331",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.decode.example",$$slots:{default:[AT]},$$scope:{ctx:F}}}),Gs=new V({}),Ws=new B({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1640"}}),Ks=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qn=new Fe({props:{$$slots:{default:[ST]},$$scope:{ctx:F}}}),Bn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.__call__.example",$$slots:{default:[OT]},$$scope:{ctx:F}}}),Zs=new B({props:{name:"encode",anchor:"transformers.FlaxBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.encode.example",$$slots:{default:[IT]},$$scope:{ctx:F}}}),Ys=new B({props:{name:"decode",anchor:"transformers.FlaxBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),En=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.decode.example",$$slots:{default:[NT]},$$scope:{ctx:F}}}),er=new V({}),tr=new B({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1727"}}),lr=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new Fe({props:{$$slots:{default:[LT]},$$scope:{ctx:F}}}),Sn=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.example",$$slots:{default:[DT]},$$scope:{ctx:F}}}),cr=new B({props:{name:"encode",anchor:"transformers.FlaxBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L999",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.encode.example",$$slots:{default:[GT]},$$scope:{ctx:F}}}),pr=new B({props:{name:"decode",anchor:"transformers.FlaxBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1062",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.decode.example",$$slots:{default:[WT]},$$scope:{ctx:F}}}),ur=new V({}),hr=new B({props:{name:"class transformers.FlaxBartForCausalLM",anchor:"transformers.FlaxBartForCausalLM",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1964"}}),vr=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/bart/modeling_flax_bart.py#L1802",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gn=new Fe({props:{$$slots:{default:[UT]},$$scope:{ctx:F}}}),Wn=new E({props:{anchor:"transformers.FlaxBartForCausalLM.__call__.example",$$slots:{default:[RT]},$$scope:{ctx:F}}}),{c(){l=a("meta"),g=u(),m=a("h1"),c=a("a"),_=a("span"),y(n.$$.fragment),p=u(),q=a("span"),ne=i("BART"),O=u(),j=a("p"),le=a("strong"),_e=i("DISCLAIMER:"),et=i(" If you see something strange, file a "),ge=a("a"),be=i("Github Issue"),tt=i(` and assign
@patrickvonplaten`),Qe=u(),J=a("h2"),D=a("a"),Se=a("span"),y(ae.$$.fragment),S=u(),I=a("span"),ot=i("Overview"),ce=u(),pe=a("p"),nt=i("The Bart model was proposed in "),X=a("a"),at=i(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),st=i(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),G=u(),ze=a("p"),ke=i("According to the abstract,"),He=u(),Y=a("ul"),se=a("li"),rt=i(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),it=u(),K=a("li"),dt=i(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),ye=u(),Oe=a("li"),z=i(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),M=u(),H=a("p"),Bt=i("This model was contributed by "),Ie=a("a"),re=i("sshleifer"),jt=i(". The Authors\u2019 code can be found "),Ne=a("a"),Ct=i("here"),ie=i("."),ue=u(),ve=a("h3"),qe=a("a"),de=a("span"),y(Le.$$.fragment),Mt=u(),De=a("span"),Et=i("Examples"),Jl=u(),bt=a("ul"),ra=a("li"),Op=i(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),ia=a("a"),Ip=i("examples/pytorch/summarization/"),Np=i("."),Lp=u(),lt=a("li"),Dp=i("An example of how to train "),qr=a("a"),Gp=i("BartForConditionalGeneration"),Wp=i(" with a Hugging Face "),wi=a("code"),Up=i("datasets"),Rp=i(`
object can be found in this `),da=a("a"),Qp=i("forum discussion"),Hp=i("."),Vp=u(),vo=a("li"),la=a("a"),Jp=i("Distilled checkpoints"),Xp=i(" are described in this "),ca=a("a"),Kp=i("paper"),Zp=i("."),Xl=u(),Pt=a("h2"),To=a("a"),$i=a("span"),y(pa.$$.fragment),Yp=u(),xi=a("span"),eu=i("Implementation Notes"),Kl=u(),Be=a("ul"),ct=a("li"),tu=i("Bart doesn\u2019t use "),Fi=a("code"),ou=i("token_type_ids"),nu=i(" for sequence classification. Use "),Br=a("a"),au=i("BartTokenizer"),su=i(` or
`),jr=a("a"),ru=i("encode()"),iu=i(" to get the proper splitting."),du=u(),At=a("li"),lu=i("The forward pass of "),Cr=a("a"),cu=i("BartModel"),pu=i(" will create the "),zi=a("code"),uu=i("decoder_input_ids"),hu=i(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),mu=u(),St=a("li"),fu=i(`Model predictions are intended to be identical to the original implementation when
`),qi=a("code"),_u=i("forced_bos_token_id=0"),gu=i(`. This only works, however, if the string you pass to
`),Bi=a("code"),bu=i("fairseq.encode"),ku=i(" starts with a space."),yu=u(),Mr=a("li"),Er=a("a"),vu=i("generate()"),Tu=i(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),wu=u(),Ot=a("li"),$u=i("Models that load the "),ji=a("em"),xu=i("facebook/bart-large-cnn"),Fu=i(" weights will not have a "),Ci=a("code"),zu=i("mask_token_id"),qu=i(`, or be able to perform
mask-filling tasks.`),Zl=u(),It=a("h2"),wo=a("a"),Mi=a("span"),y(ua.$$.fragment),Bu=u(),Ei=a("span"),ju=i("Mask Filling"),Yl=u(),kt=a("p"),Cu=i("The "),Pi=a("code"),Mu=i("facebook/bart-base"),Eu=i(" and "),Ai=a("code"),Pu=i("facebook/bart-large"),Au=i(" checkpoints can be used to fill multi-token masks."),ec=u(),y(ha.$$.fragment),tc=u(),Nt=a("h2"),$o=a("a"),Si=a("span"),y(ma.$$.fragment),Su=u(),Oi=a("span"),Ou=i("BartConfig"),oc=u(),Ge=a("div"),y(fa.$$.fragment),Iu=u(),Lt=a("p"),Nu=i("This is the configuration class to store the configuration of a "),Pr=a("a"),Lu=i("BartModel"),Du=i(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),_a=a("a"),Gu=i("facebook/bart-large"),Wu=i(" architecture."),Uu=u(),Dt=a("p"),Ru=i("Configuration objects inherit from "),Ar=a("a"),Qu=i("PretrainedConfig"),Hu=i(` and can be used to control the model outputs. Read the
documentation from `),Sr=a("a"),Vu=i("PretrainedConfig"),Ju=i(" for more information."),Xu=u(),y(xo.$$.fragment),nc=u(),Gt=a("h2"),Fo=a("a"),Ii=a("span"),y(ga.$$.fragment),Ku=u(),Ni=a("span"),Zu=i("BartTokenizer"),ac=u(),A=a("div"),y(ba.$$.fragment),Yu=u(),Li=a("p"),eh=i("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),th=u(),Di=a("p"),oh=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),nh=u(),y(zo.$$.fragment),ah=u(),ka=a("p"),sh=i("You can get around that behavior by passing "),Gi=a("code"),rh=i("add_prefix_space=True"),ih=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dh=u(),y(qo.$$.fragment),lh=u(),ya=a("p"),ch=i("This tokenizer inherits from "),Or=a("a"),ph=i("PreTrainedTokenizer"),uh=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),hh=u(),yt=a("div"),y(va.$$.fragment),mh=u(),Wi=a("p"),fh=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),_h=u(),Ta=a("ul"),Ir=a("li"),gh=i("single sequence: "),Ui=a("code"),bh=i("<s> X </s>"),kh=u(),Nr=a("li"),yh=i("pair of sequences: "),Ri=a("code"),vh=i("<s> A </s></s> B </s>"),Th=u(),Bo=a("div"),y(wa.$$.fragment),wh=u(),Qi=a("p"),$h=i("Converts a sequence of tokens (string) in a single string."),xh=u(),jo=a("div"),y($a.$$.fragment),Fh=u(),Hi=a("p"),zh=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),qh=u(),Co=a("div"),y(xa.$$.fragment),Bh=u(),Fa=a("p"),jh=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Vi=a("code"),Ch=i("prepare_for_model"),Mh=i(" method."),sc=u(),Wt=a("h2"),Mo=a("a"),Ji=a("span"),y(za.$$.fragment),Eh=u(),Xi=a("span"),Ph=i("BartTokenizerFast"),rc=u(),U=a("div"),y(qa.$$.fragment),Ah=u(),Ba=a("p"),Sh=i("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Ki=a("em"),Oh=i("tokenizers"),Ih=i(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Nh=u(),Zi=a("p"),Lh=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Dh=u(),y(Eo.$$.fragment),Gh=u(),ja=a("p"),Wh=i("You can get around that behavior by passing "),Yi=a("code"),Uh=i("add_prefix_space=True"),Rh=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Qh=u(),y(Po.$$.fragment),Hh=u(),Ca=a("p"),Vh=i("This tokenizer inherits from "),Lr=a("a"),Jh=i("PreTrainedTokenizerFast"),Xh=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kh=u(),Ao=a("div"),y(Ma.$$.fragment),Zh=u(),ed=a("p"),Yh=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),ic=u(),Ut=a("h2"),So=a("a"),td=a("span"),y(Ea.$$.fragment),em=u(),od=a("span"),tm=i("BartModel"),dc=u(),We=a("div"),y(Pa.$$.fragment),om=u(),Aa=a("p"),nm=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Dr=a("a"),am=i("PreTrainedModel"),sm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rm=u(),Sa=a("p"),im=i("This model is also a PyTorch "),Oa=a("a"),dm=i("torch.nn.Module"),lm=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cm=u(),Ve=a("div"),y(Ia.$$.fragment),pm=u(),Rt=a("p"),um=i("The "),Gr=a("a"),hm=i("BartModel"),mm=i(" forward method, overrides the "),nd=a("code"),fm=i("__call__"),_m=i(" special method."),gm=u(),y(Oo.$$.fragment),bm=u(),y(Io.$$.fragment),lc=u(),Qt=a("h2"),No=a("a"),ad=a("span"),y(Na.$$.fragment),km=u(),sd=a("span"),ym=i("BartForConditionalGeneration"),cc=u(),Ue=a("div"),y(La.$$.fragment),vm=u(),Da=a("p"),Tm=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wr=a("a"),wm=i("PreTrainedModel"),$m=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xm=u(),Ga=a("p"),Fm=i("This model is also a PyTorch "),Wa=a("a"),zm=i("torch.nn.Module"),qm=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bm=u(),je=a("div"),y(Ua.$$.fragment),jm=u(),Ht=a("p"),Cm=i("The "),Ur=a("a"),Mm=i("BartForConditionalGeneration"),Em=i(" forward method, overrides the "),rd=a("code"),Pm=i("__call__"),Am=i(" special method."),Sm=u(),y(Lo.$$.fragment),Om=u(),y(Do.$$.fragment),Im=u(),y(Go.$$.fragment),pc=u(),Vt=a("h2"),Wo=a("a"),id=a("span"),y(Ra.$$.fragment),Nm=u(),dd=a("span"),Lm=i("BartForSequenceClassification"),uc=u(),Te=a("div"),y(Qa.$$.fragment),Dm=u(),ld=a("p"),Gm=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Wm=u(),Ha=a("p"),Um=i("This model inherits from "),Rr=a("a"),Rm=i("PreTrainedModel"),Qm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hm=u(),Va=a("p"),Vm=i("This model is also a PyTorch "),Ja=a("a"),Jm=i("torch.nn.Module"),Xm=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Km=u(),ee=a("div"),y(Xa.$$.fragment),Zm=u(),Jt=a("p"),Ym=i("The "),Qr=a("a"),ef=i("BartForSequenceClassification"),tf=i(" forward method, overrides the "),cd=a("code"),of=i("__call__"),nf=i(" special method."),af=u(),y(Uo.$$.fragment),sf=u(),y(Ro.$$.fragment),rf=u(),y(Qo.$$.fragment),df=u(),y(Ho.$$.fragment),lf=u(),y(Vo.$$.fragment),hc=u(),Xt=a("h2"),Jo=a("a"),pd=a("span"),y(Ka.$$.fragment),cf=u(),ud=a("span"),pf=i("BartForQuestionAnswering"),mc=u(),we=a("div"),y(Za.$$.fragment),uf=u(),Kt=a("p"),hf=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),hd=a("code"),mf=i("span start logits"),ff=i(" and "),md=a("code"),_f=i("span end logits"),gf=i(")."),bf=u(),Ya=a("p"),kf=i("This model inherits from "),Hr=a("a"),yf=i("PreTrainedModel"),vf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=u(),es=a("p"),wf=i("This model is also a PyTorch "),ts=a("a"),$f=i("torch.nn.Module"),xf=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ff=u(),Ce=a("div"),y(os.$$.fragment),zf=u(),Zt=a("p"),qf=i("The "),Vr=a("a"),Bf=i("BartForQuestionAnswering"),jf=i(" forward method, overrides the "),fd=a("code"),Cf=i("__call__"),Mf=i(" special method."),Ef=u(),y(Xo.$$.fragment),Pf=u(),y(Ko.$$.fragment),Af=u(),y(Zo.$$.fragment),fc=u(),Yt=a("h2"),Yo=a("a"),_d=a("span"),y(ns.$$.fragment),Sf=u(),gd=a("span"),Of=i("BartForCausalLM"),_c=u(),eo=a("div"),y(as.$$.fragment),If=u(),en=a("div"),y(ss.$$.fragment),Nf=u(),y(tn.$$.fragment),gc=u(),to=a("h2"),on=a("a"),bd=a("span"),y(rs.$$.fragment),Lf=u(),kd=a("span"),Df=i("TFBartModel"),bc=u(),$e=a("div"),y(is.$$.fragment),Gf=u(),ds=a("p"),Wf=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Jr=a("a"),Uf=i("TFPreTrainedModel"),Rf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qf=u(),ls=a("p"),Hf=i("This model is also a "),cs=a("a"),Vf=i("tf.keras.Model"),Jf=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xf=u(),y(nn.$$.fragment),Kf=u(),Je=a("div"),y(ps.$$.fragment),Zf=u(),oo=a("p"),Yf=i("The "),Xr=a("a"),e_=i("TFBartModel"),t_=i(" forward method, overrides the "),yd=a("code"),o_=i("__call__"),n_=i(" special method."),a_=u(),y(an.$$.fragment),s_=u(),y(sn.$$.fragment),kc=u(),no=a("h2"),rn=a("a"),vd=a("span"),y(us.$$.fragment),r_=u(),Td=a("span"),i_=i("TFBartForConditionalGeneration"),yc=u(),xe=a("div"),y(hs.$$.fragment),d_=u(),ms=a("p"),l_=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kr=a("a"),c_=i("TFPreTrainedModel"),p_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),u_=u(),fs=a("p"),h_=i("This model is also a "),_s=a("a"),m_=i("tf.keras.Model"),f_=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),__=u(),y(dn.$$.fragment),g_=u(),Me=a("div"),y(gs.$$.fragment),b_=u(),ao=a("p"),k_=i("The "),Zr=a("a"),y_=i("TFBartForConditionalGeneration"),v_=i(" forward method, overrides the "),wd=a("code"),T_=i("__call__"),w_=i(" special method."),$_=u(),y(ln.$$.fragment),x_=u(),y(cn.$$.fragment),F_=u(),y(pn.$$.fragment),vc=u(),so=a("h2"),un=a("a"),$d=a("span"),y(bs.$$.fragment),z_=u(),xd=a("span"),q_=i("FlaxBartModel"),Tc=u(),R=a("div"),y(ks.$$.fragment),B_=u(),ys=a("p"),j_=i(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Yr=a("a"),C_=i("FlaxPreTrainedModel"),M_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),E_=u(),vs=a("p"),P_=i(`This model is also a Flax Linen
`),Ts=a("a"),A_=i("flax.nn.Module"),S_=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),O_=u(),Fd=a("p"),I_=i("Finally, this model supports inherent JAX features such as:"),N_=u(),pt=a("ul"),zd=a("li"),ws=a("a"),L_=i("Just-In-Time (JIT) compilation"),D_=u(),qd=a("li"),$s=a("a"),G_=i("Automatic Differentiation"),W_=u(),Bd=a("li"),xs=a("a"),U_=i("Vectorization"),R_=u(),jd=a("li"),Fs=a("a"),Q_=i("Parallelization"),H_=u(),Xe=a("div"),y(zs.$$.fragment),V_=u(),ro=a("p"),J_=i("The "),Cd=a("code"),X_=i("FlaxBartPreTrainedModel"),K_=i(" forward method, overrides the "),Md=a("code"),Z_=i("__call__"),Y_=i(" special method."),eg=u(),y(hn.$$.fragment),tg=u(),y(mn.$$.fragment),og=u(),fn=a("div"),y(qs.$$.fragment),ng=u(),y(_n.$$.fragment),ag=u(),gn=a("div"),y(Bs.$$.fragment),sg=u(),y(bn.$$.fragment),wc=u(),io=a("h2"),kn=a("a"),Ed=a("span"),y(js.$$.fragment),rg=u(),Pd=a("span"),ig=i("FlaxBartForConditionalGeneration"),$c=u(),Q=a("div"),y(Cs.$$.fragment),dg=u(),Ms=a("p"),lg=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ei=a("a"),cg=i("FlaxPreTrainedModel"),pg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ug=u(),Es=a("p"),hg=i(`This model is also a Flax Linen
`),Ps=a("a"),mg=i("flax.nn.Module"),fg=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_g=u(),Ad=a("p"),gg=i("Finally, this model supports inherent JAX features such as:"),bg=u(),ut=a("ul"),Sd=a("li"),As=a("a"),kg=i("Just-In-Time (JIT) compilation"),yg=u(),Od=a("li"),Ss=a("a"),vg=i("Automatic Differentiation"),Tg=u(),Id=a("li"),Os=a("a"),wg=i("Vectorization"),$g=u(),Nd=a("li"),Is=a("a"),xg=i("Parallelization"),Fg=u(),Ee=a("div"),y(Ns.$$.fragment),zg=u(),lo=a("p"),qg=i("The "),Ld=a("code"),Bg=i("FlaxBartPreTrainedModel"),jg=i(" forward method, overrides the "),Dd=a("code"),Cg=i("__call__"),Mg=i(" special method."),Eg=u(),y(yn.$$.fragment),Pg=u(),y(vn.$$.fragment),Ag=u(),y(Tn.$$.fragment),Sg=u(),wn=a("div"),y(Ls.$$.fragment),Og=u(),y($n.$$.fragment),Ig=u(),xn=a("div"),y(Ds.$$.fragment),Ng=u(),y(Fn.$$.fragment),xc=u(),co=a("h2"),zn=a("a"),Gd=a("span"),y(Gs.$$.fragment),Lg=u(),Wd=a("span"),Dg=i("FlaxBartForSequenceClassification"),Fc=u(),N=a("div"),y(Ws.$$.fragment),Gg=u(),Ud=a("p"),Wg=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Ug=u(),Us=a("p"),Rg=i("This model inherits from "),ti=a("a"),Qg=i("FlaxPreTrainedModel"),Hg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vg=u(),Rs=a("p"),Jg=i(`This model is also a Flax Linen
`),Qs=a("a"),Xg=i("flax.nn.Module"),Kg=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Zg=u(),Rd=a("p"),Yg=i("Finally, this model supports inherent JAX features such as:"),eb=u(),ht=a("ul"),Qd=a("li"),Hs=a("a"),tb=i("Just-In-Time (JIT) compilation"),ob=u(),Hd=a("li"),Vs=a("a"),nb=i("Automatic Differentiation"),ab=u(),Vd=a("li"),Js=a("a"),sb=i("Vectorization"),rb=u(),Jd=a("li"),Xs=a("a"),ib=i("Parallelization"),db=u(),Ke=a("div"),y(Ks.$$.fragment),lb=u(),po=a("p"),cb=i("The "),Xd=a("code"),pb=i("FlaxBartPreTrainedModel"),ub=i(" forward method, overrides the "),Kd=a("code"),hb=i("__call__"),mb=i(" special method."),fb=u(),y(qn.$$.fragment),_b=u(),y(Bn.$$.fragment),gb=u(),jn=a("div"),y(Zs.$$.fragment),bb=u(),y(Cn.$$.fragment),kb=u(),Mn=a("div"),y(Ys.$$.fragment),yb=u(),y(En.$$.fragment),zc=u(),uo=a("h2"),Pn=a("a"),Zd=a("span"),y(er.$$.fragment),vb=u(),Yd=a("span"),Tb=i("FlaxBartForQuestionAnswering"),qc=u(),L=a("div"),y(tr.$$.fragment),wb=u(),ho=a("p"),$b=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),el=a("code"),xb=i("span start logits"),Fb=i(" and "),tl=a("code"),zb=i("span end logits"),qb=i(")."),Bb=u(),or=a("p"),jb=i("This model inherits from "),oi=a("a"),Cb=i("FlaxPreTrainedModel"),Mb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eb=u(),nr=a("p"),Pb=i(`This model is also a Flax Linen
`),ar=a("a"),Ab=i("flax.nn.Module"),Sb=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ob=u(),ol=a("p"),Ib=i("Finally, this model supports inherent JAX features such as:"),Nb=u(),mt=a("ul"),nl=a("li"),sr=a("a"),Lb=i("Just-In-Time (JIT) compilation"),Db=u(),al=a("li"),rr=a("a"),Gb=i("Automatic Differentiation"),Wb=u(),sl=a("li"),ir=a("a"),Ub=i("Vectorization"),Rb=u(),rl=a("li"),dr=a("a"),Qb=i("Parallelization"),Hb=u(),Ze=a("div"),y(lr.$$.fragment),Vb=u(),mo=a("p"),Jb=i("The "),il=a("code"),Xb=i("FlaxBartPreTrainedModel"),Kb=i(" forward method, overrides the "),dl=a("code"),Zb=i("__call__"),Yb=i(" special method."),ek=u(),y(An.$$.fragment),tk=u(),y(Sn.$$.fragment),ok=u(),On=a("div"),y(cr.$$.fragment),nk=u(),y(In.$$.fragment),ak=u(),Nn=a("div"),y(pr.$$.fragment),sk=u(),y(Ln.$$.fragment),Bc=u(),fo=a("h2"),Dn=a("a"),ll=a("span"),y(ur.$$.fragment),rk=u(),cl=a("span"),ik=i("FlaxBartForCausalLM"),jc=u(),Z=a("div"),y(hr.$$.fragment),dk=u(),pl=a("p"),lk=i(`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),ck=u(),mr=a("p"),pk=i("This model inherits from "),ni=a("a"),uk=i("FlaxPreTrainedModel"),hk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mk=u(),fr=a("p"),fk=i(`This model is also a Flax Linen
`),_r=a("a"),_k=i("flax.nn.Module"),gk=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bk=u(),ul=a("p"),kk=i("Finally, this model supports inherent JAX features such as:"),yk=u(),ft=a("ul"),hl=a("li"),gr=a("a"),vk=i("Just-In-Time (JIT) compilation"),Tk=u(),ml=a("li"),br=a("a"),wk=i("Automatic Differentiation"),$k=u(),fl=a("li"),kr=a("a"),xk=i("Vectorization"),Fk=u(),_l=a("li"),yr=a("a"),zk=i("Parallelization"),qk=u(),Ye=a("div"),y(vr.$$.fragment),Bk=u(),_o=a("p"),jk=i("The "),gl=a("code"),Ck=i("FlaxBartDecoderPreTrainedModel"),Mk=i(" forward method, overrides the "),bl=a("code"),Ek=i("__call__"),Pk=i(" special method."),Ak=u(),y(Gn.$$.fragment),Sk=u(),y(Wn.$$.fragment),this.h()},l(o){const b=Y1('[data-svelte="svelte-1phssyn"]',document.head);l=s(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),m=s(o,"H1",{class:!0});var Tr=r(m);c=s(Tr,"A",{id:!0,class:!0,href:!0});var kl=r(c);_=s(kl,"SPAN",{});var yl=r(_);v(n.$$.fragment,yl),yl.forEach(t),kl.forEach(t),p=h(Tr),q=s(Tr,"SPAN",{});var vl=r(q);ne=d(vl,"BART"),vl.forEach(t),Tr.forEach(t),O=h(o),j=s(o,"P",{});var Un=r(j);le=s(Un,"STRONG",{});var Tl=r(le);_e=d(Tl,"DISCLAIMER:"),Tl.forEach(t),et=d(Un," If you see something strange, file a "),ge=s(Un,"A",{href:!0,rel:!0});var wl=r(ge);be=d(wl,"Github Issue"),wl.forEach(t),tt=d(Un,` and assign
@patrickvonplaten`),Un.forEach(t),Qe=h(o),J=s(o,"H2",{class:!0});var wr=r(J);D=s(wr,"A",{id:!0,class:!0,href:!0});var $l=r(D);Se=s($l,"SPAN",{});var xl=r(Se);v(ae.$$.fragment,xl),xl.forEach(t),$l.forEach(t),S=h(wr),I=s(wr,"SPAN",{});var Fl=r(I);ot=d(Fl,"Overview"),Fl.forEach(t),wr.forEach(t),ce=h(o),pe=s(o,"P",{});var $r=r(pe);nt=d($r,"The Bart model was proposed in "),X=s($r,"A",{href:!0,rel:!0});var zl=r(X);at=d(zl,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),zl.forEach(t),st=d($r,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),$r.forEach(t),G=h(o),ze=s(o,"P",{});var ql=r(ze);ke=d(ql,"According to the abstract,"),ql.forEach(t),He=h(o),Y=s(o,"UL",{});var go=r(Y);se=s(go,"LI",{});var Bl=r(se);rt=d(Bl,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Bl.forEach(t),it=h(go),K=s(go,"LI",{});var jl=r(K);dt=d(jl,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),jl.forEach(t),ye=h(go),Oe=s(go,"LI",{});var Cl=r(Oe);z=d(Cl,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),Cl.forEach(t),go.forEach(t),M=h(o),H=s(o,"P",{});var bo=r(H);Bt=d(bo,"This model was contributed by "),Ie=s(bo,"A",{href:!0,rel:!0});var Ml=r(Ie);re=d(Ml,"sshleifer"),Ml.forEach(t),jt=d(bo,". The Authors\u2019 code can be found "),Ne=s(bo,"A",{href:!0,rel:!0});var El=r(Ne);Ct=d(El,"here"),El.forEach(t),ie=d(bo,"."),bo.forEach(t),ue=h(o),ve=s(o,"H3",{class:!0});var xr=r(ve);qe=s(xr,"A",{id:!0,class:!0,href:!0});var Pl=r(qe);de=s(Pl,"SPAN",{});var Al=r(de);v(Le.$$.fragment,Al),Al.forEach(t),Pl.forEach(t),Mt=h(xr),De=s(xr,"SPAN",{});var Sl=r(De);Et=d(Sl,"Examples"),Sl.forEach(t),xr.forEach(t),Jl=h(o),bt=s(o,"UL",{});var ko=r(bt);ra=s(ko,"LI",{});var Fr=r(ra);Op=d(Fr,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),ia=s(Fr,"A",{href:!0,rel:!0});var Ol=r(ia);Ip=d(Ol,"examples/pytorch/summarization/"),Ol.forEach(t),Np=d(Fr,"."),Fr.forEach(t),Lp=h(ko),lt=s(ko,"LI",{});var _t=r(lt);Dp=d(_t,"An example of how to train "),qr=s(_t,"A",{href:!0});var Il=r(qr);Gp=d(Il,"BartForConditionalGeneration"),Il.forEach(t),Wp=d(_t," with a Hugging Face "),wi=s(_t,"CODE",{});var Nl=r(wi);Up=d(Nl,"datasets"),Nl.forEach(t),Rp=d(_t,`
object can be found in this `),da=s(_t,"A",{href:!0,rel:!0});var Ll=r(da);Qp=d(Ll,"forum discussion"),Ll.forEach(t),Hp=d(_t,"."),_t.forEach(t),Vp=h(ko),vo=s(ko,"LI",{});var Rn=r(vo);la=s(Rn,"A",{href:!0,rel:!0});var Dl=r(la);Jp=d(Dl,"Distilled checkpoints"),Dl.forEach(t),Xp=d(Rn," are described in this "),ca=s(Rn,"A",{href:!0,rel:!0});var Gl=r(ca);Kp=d(Gl,"paper"),Gl.forEach(t),Zp=d(Rn,"."),Rn.forEach(t),ko.forEach(t),Xl=h(o),Pt=s(o,"H2",{class:!0});var zr=r(Pt);To=s(zr,"A",{id:!0,class:!0,href:!0});var Wl=r(To);$i=s(Wl,"SPAN",{});var Ul=r($i);v(pa.$$.fragment,Ul),Ul.forEach(t),Wl.forEach(t),Yp=h(zr),xi=s(zr,"SPAN",{});var Rl=r(xi);eu=d(Rl,"Implementation Notes"),Rl.forEach(t),zr.forEach(t),Kl=h(o),Be=s(o,"UL",{});var Re=r(Be);ct=s(Re,"LI",{});var gt=r(ct);tu=d(gt,"Bart doesn\u2019t use "),Fi=s(gt,"CODE",{});var Ql=r(Fi);ou=d(Ql,"token_type_ids"),Ql.forEach(t),nu=d(gt," for sequence classification. Use "),Br=s(gt,"A",{href:!0});var Hl=r(Br);au=d(Hl,"BartTokenizer"),Hl.forEach(t),su=d(gt,` or
`),jr=s(gt,"A",{href:!0});var Vl=r(jr);ru=d(Vl,"encode()"),Vl.forEach(t),iu=d(gt," to get the proper splitting."),gt.forEach(t),du=h(Re),At=s(Re,"LI",{});var yo=r(At);lu=d(yo,"The forward pass of "),Cr=s(yo,"A",{href:!0});var Lk=r(Cr);cu=d(Lk,"BartModel"),Lk.forEach(t),pu=d(yo," will create the "),zi=s(yo,"CODE",{});var Dk=r(zi);uu=d(Dk,"decoder_input_ids"),Dk.forEach(t),hu=d(yo,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),yo.forEach(t),mu=h(Re),St=s(Re,"LI",{});var ai=r(St);fu=d(ai,`Model predictions are intended to be identical to the original implementation when
`),qi=s(ai,"CODE",{});var Gk=r(qi);_u=d(Gk,"forced_bos_token_id=0"),Gk.forEach(t),gu=d(ai,`. This only works, however, if the string you pass to
`),Bi=s(ai,"CODE",{});var Wk=r(Bi);bu=d(Wk,"fairseq.encode"),Wk.forEach(t),ku=d(ai," starts with a space."),ai.forEach(t),yu=h(Re),Mr=s(Re,"LI",{});var Ok=r(Mr);Er=s(Ok,"A",{href:!0});var Uk=r(Er);vu=d(Uk,"generate()"),Uk.forEach(t),Tu=d(Ok,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Ok.forEach(t),wu=h(Re),Ot=s(Re,"LI",{});var si=r(Ot);$u=d(si,"Models that load the "),ji=s(si,"EM",{});var Rk=r(ji);xu=d(Rk,"facebook/bart-large-cnn"),Rk.forEach(t),Fu=d(si," weights will not have a "),Ci=s(si,"CODE",{});var Qk=r(Ci);zu=d(Qk,"mask_token_id"),Qk.forEach(t),qu=d(si,`, or be able to perform
mask-filling tasks.`),si.forEach(t),Re.forEach(t),Zl=h(o),It=s(o,"H2",{class:!0});var Mc=r(It);wo=s(Mc,"A",{id:!0,class:!0,href:!0});var Hk=r(wo);Mi=s(Hk,"SPAN",{});var Vk=r(Mi);v(ua.$$.fragment,Vk),Vk.forEach(t),Hk.forEach(t),Bu=h(Mc),Ei=s(Mc,"SPAN",{});var Jk=r(Ei);ju=d(Jk,"Mask Filling"),Jk.forEach(t),Mc.forEach(t),Yl=h(o),kt=s(o,"P",{});var ri=r(kt);Cu=d(ri,"The "),Pi=s(ri,"CODE",{});var Xk=r(Pi);Mu=d(Xk,"facebook/bart-base"),Xk.forEach(t),Eu=d(ri," and "),Ai=s(ri,"CODE",{});var Kk=r(Ai);Pu=d(Kk,"facebook/bart-large"),Kk.forEach(t),Au=d(ri," checkpoints can be used to fill multi-token masks."),ri.forEach(t),ec=h(o),v(ha.$$.fragment,o),tc=h(o),Nt=s(o,"H2",{class:!0});var Ec=r(Nt);$o=s(Ec,"A",{id:!0,class:!0,href:!0});var Zk=r($o);Si=s(Zk,"SPAN",{});var Yk=r(Si);v(ma.$$.fragment,Yk),Yk.forEach(t),Zk.forEach(t),Su=h(Ec),Oi=s(Ec,"SPAN",{});var ey=r(Oi);Ou=d(ey,"BartConfig"),ey.forEach(t),Ec.forEach(t),oc=h(o),Ge=s(o,"DIV",{class:!0});var Qn=r(Ge);v(fa.$$.fragment,Qn),Iu=h(Qn),Lt=s(Qn,"P",{});var ii=r(Lt);Nu=d(ii,"This is the configuration class to store the configuration of a "),Pr=s(ii,"A",{href:!0});var ty=r(Pr);Lu=d(ty,"BartModel"),ty.forEach(t),Du=d(ii,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),_a=s(ii,"A",{href:!0,rel:!0});var oy=r(_a);Gu=d(oy,"facebook/bart-large"),oy.forEach(t),Wu=d(ii," architecture."),ii.forEach(t),Uu=h(Qn),Dt=s(Qn,"P",{});var di=r(Dt);Ru=d(di,"Configuration objects inherit from "),Ar=s(di,"A",{href:!0});var ny=r(Ar);Qu=d(ny,"PretrainedConfig"),ny.forEach(t),Hu=d(di,` and can be used to control the model outputs. Read the
documentation from `),Sr=s(di,"A",{href:!0});var ay=r(Sr);Vu=d(ay,"PretrainedConfig"),ay.forEach(t),Ju=d(di," for more information."),di.forEach(t),Xu=h(Qn),v(xo.$$.fragment,Qn),Qn.forEach(t),nc=h(o),Gt=s(o,"H2",{class:!0});var Pc=r(Gt);Fo=s(Pc,"A",{id:!0,class:!0,href:!0});var sy=r(Fo);Ii=s(sy,"SPAN",{});var ry=r(Ii);v(ga.$$.fragment,ry),ry.forEach(t),sy.forEach(t),Ku=h(Pc),Ni=s(Pc,"SPAN",{});var iy=r(Ni);Zu=d(iy,"BartTokenizer"),iy.forEach(t),Pc.forEach(t),ac=h(o),A=s(o,"DIV",{class:!0});var W=r(A);v(ba.$$.fragment,W),Yu=h(W),Li=s(W,"P",{});var dy=r(Li);eh=d(dy,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),dy.forEach(t),th=h(W),Di=s(W,"P",{});var ly=r(Di);oh=d(ly,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),ly.forEach(t),nh=h(W),v(zo.$$.fragment,W),ah=h(W),ka=s(W,"P",{});var Ac=r(ka);sh=d(Ac,"You can get around that behavior by passing "),Gi=s(Ac,"CODE",{});var cy=r(Gi);rh=d(cy,"add_prefix_space=True"),cy.forEach(t),ih=d(Ac,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Ac.forEach(t),dh=h(W),v(qo.$$.fragment,W),lh=h(W),ya=s(W,"P",{});var Sc=r(ya);ch=d(Sc,"This tokenizer inherits from "),Or=s(Sc,"A",{href:!0});var py=r(Or);ph=d(py,"PreTrainedTokenizer"),py.forEach(t),uh=d(Sc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sc.forEach(t),hh=h(W),yt=s(W,"DIV",{class:!0});var li=r(yt);v(va.$$.fragment,li),mh=h(li),Wi=s(li,"P",{});var uy=r(Wi);fh=d(uy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),uy.forEach(t),_h=h(li),Ta=s(li,"UL",{});var Oc=r(Ta);Ir=s(Oc,"LI",{});var Ik=r(Ir);gh=d(Ik,"single sequence: "),Ui=s(Ik,"CODE",{});var hy=r(Ui);bh=d(hy,"<s> X </s>"),hy.forEach(t),Ik.forEach(t),kh=h(Oc),Nr=s(Oc,"LI",{});var Nk=r(Nr);yh=d(Nk,"pair of sequences: "),Ri=s(Nk,"CODE",{});var my=r(Ri);vh=d(my,"<s> A </s></s> B </s>"),my.forEach(t),Nk.forEach(t),Oc.forEach(t),li.forEach(t),Th=h(W),Bo=s(W,"DIV",{class:!0});var Ic=r(Bo);v(wa.$$.fragment,Ic),wh=h(Ic),Qi=s(Ic,"P",{});var fy=r(Qi);$h=d(fy,"Converts a sequence of tokens (string) in a single string."),fy.forEach(t),Ic.forEach(t),xh=h(W),jo=s(W,"DIV",{class:!0});var Nc=r(jo);v($a.$$.fragment,Nc),Fh=h(Nc),Hi=s(Nc,"P",{});var _y=r(Hi);zh=d(_y,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),_y.forEach(t),Nc.forEach(t),qh=h(W),Co=s(W,"DIV",{class:!0});var Lc=r(Co);v(xa.$$.fragment,Lc),Bh=h(Lc),Fa=s(Lc,"P",{});var Dc=r(Fa);jh=d(Dc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Vi=s(Dc,"CODE",{});var gy=r(Vi);Ch=d(gy,"prepare_for_model"),gy.forEach(t),Mh=d(Dc," method."),Dc.forEach(t),Lc.forEach(t),W.forEach(t),sc=h(o),Wt=s(o,"H2",{class:!0});var Gc=r(Wt);Mo=s(Gc,"A",{id:!0,class:!0,href:!0});var by=r(Mo);Ji=s(by,"SPAN",{});var ky=r(Ji);v(za.$$.fragment,ky),ky.forEach(t),by.forEach(t),Eh=h(Gc),Xi=s(Gc,"SPAN",{});var yy=r(Xi);Ph=d(yy,"BartTokenizerFast"),yy.forEach(t),Gc.forEach(t),rc=h(o),U=s(o,"DIV",{class:!0});var he=r(U);v(qa.$$.fragment,he),Ah=h(he),Ba=s(he,"P",{});var Wc=r(Ba);Sh=d(Wc,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Ki=s(Wc,"EM",{});var vy=r(Ki);Oh=d(vy,"tokenizers"),vy.forEach(t),Ih=d(Wc,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Wc.forEach(t),Nh=h(he),Zi=s(he,"P",{});var Ty=r(Zi);Lh=d(Ty,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Ty.forEach(t),Dh=h(he),v(Eo.$$.fragment,he),Gh=h(he),ja=s(he,"P",{});var Uc=r(ja);Wh=d(Uc,"You can get around that behavior by passing "),Yi=s(Uc,"CODE",{});var wy=r(Yi);Uh=d(wy,"add_prefix_space=True"),wy.forEach(t),Rh=d(Uc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Uc.forEach(t),Qh=h(he),v(Po.$$.fragment,he),Hh=h(he),Ca=s(he,"P",{});var Rc=r(Ca);Vh=d(Rc,"This tokenizer inherits from "),Lr=s(Rc,"A",{href:!0});var $y=r(Lr);Jh=d($y,"PreTrainedTokenizerFast"),$y.forEach(t),Xh=d(Rc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Rc.forEach(t),Kh=h(he),Ao=s(he,"DIV",{class:!0});var Qc=r(Ao);v(Ma.$$.fragment,Qc),Zh=h(Qc),ed=s(Qc,"P",{});var xy=r(ed);Yh=d(xy,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),xy.forEach(t),Qc.forEach(t),he.forEach(t),ic=h(o),Ut=s(o,"H2",{class:!0});var Hc=r(Ut);So=s(Hc,"A",{id:!0,class:!0,href:!0});var Fy=r(So);td=s(Fy,"SPAN",{});var zy=r(td);v(Ea.$$.fragment,zy),zy.forEach(t),Fy.forEach(t),em=h(Hc),od=s(Hc,"SPAN",{});var qy=r(od);tm=d(qy,"BartModel"),qy.forEach(t),Hc.forEach(t),dc=h(o),We=s(o,"DIV",{class:!0});var Hn=r(We);v(Pa.$$.fragment,Hn),om=h(Hn),Aa=s(Hn,"P",{});var Vc=r(Aa);nm=d(Vc,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Dr=s(Vc,"A",{href:!0});var By=r(Dr);am=d(By,"PreTrainedModel"),By.forEach(t),sm=d(Vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc.forEach(t),rm=h(Hn),Sa=s(Hn,"P",{});var Jc=r(Sa);im=d(Jc,"This model is also a PyTorch "),Oa=s(Jc,"A",{href:!0,rel:!0});var jy=r(Oa);dm=d(jy,"torch.nn.Module"),jy.forEach(t),lm=d(Jc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jc.forEach(t),cm=h(Hn),Ve=s(Hn,"DIV",{class:!0});var Vn=r(Ve);v(Ia.$$.fragment,Vn),pm=h(Vn),Rt=s(Vn,"P",{});var ci=r(Rt);um=d(ci,"The "),Gr=s(ci,"A",{href:!0});var Cy=r(Gr);hm=d(Cy,"BartModel"),Cy.forEach(t),mm=d(ci," forward method, overrides the "),nd=s(ci,"CODE",{});var My=r(nd);fm=d(My,"__call__"),My.forEach(t),_m=d(ci," special method."),ci.forEach(t),gm=h(Vn),v(Oo.$$.fragment,Vn),bm=h(Vn),v(Io.$$.fragment,Vn),Vn.forEach(t),Hn.forEach(t),lc=h(o),Qt=s(o,"H2",{class:!0});var Xc=r(Qt);No=s(Xc,"A",{id:!0,class:!0,href:!0});var Ey=r(No);ad=s(Ey,"SPAN",{});var Py=r(ad);v(Na.$$.fragment,Py),Py.forEach(t),Ey.forEach(t),km=h(Xc),sd=s(Xc,"SPAN",{});var Ay=r(sd);ym=d(Ay,"BartForConditionalGeneration"),Ay.forEach(t),Xc.forEach(t),cc=h(o),Ue=s(o,"DIV",{class:!0});var Jn=r(Ue);v(La.$$.fragment,Jn),vm=h(Jn),Da=s(Jn,"P",{});var Kc=r(Da);Tm=d(Kc,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wr=s(Kc,"A",{href:!0});var Sy=r(Wr);wm=d(Sy,"PreTrainedModel"),Sy.forEach(t),$m=d(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(t),xm=h(Jn),Ga=s(Jn,"P",{});var Zc=r(Ga);Fm=d(Zc,"This model is also a PyTorch "),Wa=s(Zc,"A",{href:!0,rel:!0});var Oy=r(Wa);zm=d(Oy,"torch.nn.Module"),Oy.forEach(t),qm=d(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(t),Bm=h(Jn),je=s(Jn,"DIV",{class:!0});var vt=r(je);v(Ua.$$.fragment,vt),jm=h(vt),Ht=s(vt,"P",{});var pi=r(Ht);Cm=d(pi,"The "),Ur=s(pi,"A",{href:!0});var Iy=r(Ur);Mm=d(Iy,"BartForConditionalGeneration"),Iy.forEach(t),Em=d(pi," forward method, overrides the "),rd=s(pi,"CODE",{});var Ny=r(rd);Pm=d(Ny,"__call__"),Ny.forEach(t),Am=d(pi," special method."),pi.forEach(t),Sm=h(vt),v(Lo.$$.fragment,vt),Om=h(vt),v(Do.$$.fragment,vt),Im=h(vt),v(Go.$$.fragment,vt),vt.forEach(t),Jn.forEach(t),pc=h(o),Vt=s(o,"H2",{class:!0});var Yc=r(Vt);Wo=s(Yc,"A",{id:!0,class:!0,href:!0});var Ly=r(Wo);id=s(Ly,"SPAN",{});var Dy=r(id);v(Ra.$$.fragment,Dy),Dy.forEach(t),Ly.forEach(t),Nm=h(Yc),dd=s(Yc,"SPAN",{});var Gy=r(dd);Lm=d(Gy,"BartForSequenceClassification"),Gy.forEach(t),Yc.forEach(t),uc=h(o),Te=s(o,"DIV",{class:!0});var Tt=r(Te);v(Qa.$$.fragment,Tt),Dm=h(Tt),ld=s(Tt,"P",{});var Wy=r(ld);Gm=d(Wy,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Wy.forEach(t),Wm=h(Tt),Ha=s(Tt,"P",{});var ep=r(Ha);Um=d(ep,"This model inherits from "),Rr=s(ep,"A",{href:!0});var Uy=r(Rr);Rm=d(Uy,"PreTrainedModel"),Uy.forEach(t),Qm=d(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(t),Hm=h(Tt),Va=s(Tt,"P",{});var tp=r(Va);Vm=d(tp,"This model is also a PyTorch "),Ja=s(tp,"A",{href:!0,rel:!0});var Ry=r(Ja);Jm=d(Ry,"torch.nn.Module"),Ry.forEach(t),Xm=d(tp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tp.forEach(t),Km=h(Tt),ee=s(Tt,"DIV",{class:!0});var Pe=r(ee);v(Xa.$$.fragment,Pe),Zm=h(Pe),Jt=s(Pe,"P",{});var ui=r(Jt);Ym=d(ui,"The "),Qr=s(ui,"A",{href:!0});var Qy=r(Qr);ef=d(Qy,"BartForSequenceClassification"),Qy.forEach(t),tf=d(ui," forward method, overrides the "),cd=s(ui,"CODE",{});var Hy=r(cd);of=d(Hy,"__call__"),Hy.forEach(t),nf=d(ui," special method."),ui.forEach(t),af=h(Pe),v(Uo.$$.fragment,Pe),sf=h(Pe),v(Ro.$$.fragment,Pe),rf=h(Pe),v(Qo.$$.fragment,Pe),df=h(Pe),v(Ho.$$.fragment,Pe),lf=h(Pe),v(Vo.$$.fragment,Pe),Pe.forEach(t),Tt.forEach(t),hc=h(o),Xt=s(o,"H2",{class:!0});var op=r(Xt);Jo=s(op,"A",{id:!0,class:!0,href:!0});var Vy=r(Jo);pd=s(Vy,"SPAN",{});var Jy=r(pd);v(Ka.$$.fragment,Jy),Jy.forEach(t),Vy.forEach(t),cf=h(op),ud=s(op,"SPAN",{});var Xy=r(ud);pf=d(Xy,"BartForQuestionAnswering"),Xy.forEach(t),op.forEach(t),mc=h(o),we=s(o,"DIV",{class:!0});var wt=r(we);v(Za.$$.fragment,wt),uf=h(wt),Kt=s(wt,"P",{});var hi=r(Kt);hf=d(hi,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),hd=s(hi,"CODE",{});var Ky=r(hd);mf=d(Ky,"span start logits"),Ky.forEach(t),ff=d(hi," and "),md=s(hi,"CODE",{});var Zy=r(md);_f=d(Zy,"span end logits"),Zy.forEach(t),gf=d(hi,")."),hi.forEach(t),bf=h(wt),Ya=s(wt,"P",{});var np=r(Ya);kf=d(np,"This model inherits from "),Hr=s(np,"A",{href:!0});var Yy=r(Hr);yf=d(Yy,"PreTrainedModel"),Yy.forEach(t),vf=d(np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np.forEach(t),Tf=h(wt),es=s(wt,"P",{});var ap=r(es);wf=d(ap,"This model is also a PyTorch "),ts=s(ap,"A",{href:!0,rel:!0});var ev=r(ts);$f=d(ev,"torch.nn.Module"),ev.forEach(t),xf=d(ap,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ap.forEach(t),Ff=h(wt),Ce=s(wt,"DIV",{class:!0});var $t=r(Ce);v(os.$$.fragment,$t),zf=h($t),Zt=s($t,"P",{});var mi=r(Zt);qf=d(mi,"The "),Vr=s(mi,"A",{href:!0});var tv=r(Vr);Bf=d(tv,"BartForQuestionAnswering"),tv.forEach(t),jf=d(mi," forward method, overrides the "),fd=s(mi,"CODE",{});var ov=r(fd);Cf=d(ov,"__call__"),ov.forEach(t),Mf=d(mi," special method."),mi.forEach(t),Ef=h($t),v(Xo.$$.fragment,$t),Pf=h($t),v(Ko.$$.fragment,$t),Af=h($t),v(Zo.$$.fragment,$t),$t.forEach(t),wt.forEach(t),fc=h(o),Yt=s(o,"H2",{class:!0});var sp=r(Yt);Yo=s(sp,"A",{id:!0,class:!0,href:!0});var nv=r(Yo);_d=s(nv,"SPAN",{});var av=r(_d);v(ns.$$.fragment,av),av.forEach(t),nv.forEach(t),Sf=h(sp),gd=s(sp,"SPAN",{});var sv=r(gd);Of=d(sv,"BartForCausalLM"),sv.forEach(t),sp.forEach(t),_c=h(o),eo=s(o,"DIV",{class:!0});var rp=r(eo);v(as.$$.fragment,rp),If=h(rp),en=s(rp,"DIV",{class:!0});var ip=r(en);v(ss.$$.fragment,ip),Nf=h(ip),v(tn.$$.fragment,ip),ip.forEach(t),rp.forEach(t),gc=h(o),to=s(o,"H2",{class:!0});var dp=r(to);on=s(dp,"A",{id:!0,class:!0,href:!0});var rv=r(on);bd=s(rv,"SPAN",{});var iv=r(bd);v(rs.$$.fragment,iv),iv.forEach(t),rv.forEach(t),Lf=h(dp),kd=s(dp,"SPAN",{});var dv=r(kd);Df=d(dv,"TFBartModel"),dv.forEach(t),dp.forEach(t),bc=h(o),$e=s(o,"DIV",{class:!0});var xt=r($e);v(is.$$.fragment,xt),Gf=h(xt),ds=s(xt,"P",{});var lp=r(ds);Wf=d(lp,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Jr=s(lp,"A",{href:!0});var lv=r(Jr);Uf=d(lv,"TFPreTrainedModel"),lv.forEach(t),Rf=d(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),Qf=h(xt),ls=s(xt,"P",{});var cp=r(ls);Hf=d(cp,"This model is also a "),cs=s(cp,"A",{href:!0,rel:!0});var cv=r(cs);Vf=d(cv,"tf.keras.Model"),cv.forEach(t),Jf=d(cp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cp.forEach(t),Xf=h(xt),v(nn.$$.fragment,xt),Kf=h(xt),Je=s(xt,"DIV",{class:!0});var Xn=r(Je);v(ps.$$.fragment,Xn),Zf=h(Xn),oo=s(Xn,"P",{});var fi=r(oo);Yf=d(fi,"The "),Xr=s(fi,"A",{href:!0});var pv=r(Xr);e_=d(pv,"TFBartModel"),pv.forEach(t),t_=d(fi," forward method, overrides the "),yd=s(fi,"CODE",{});var uv=r(yd);o_=d(uv,"__call__"),uv.forEach(t),n_=d(fi," special method."),fi.forEach(t),a_=h(Xn),v(an.$$.fragment,Xn),s_=h(Xn),v(sn.$$.fragment,Xn),Xn.forEach(t),xt.forEach(t),kc=h(o),no=s(o,"H2",{class:!0});var pp=r(no);rn=s(pp,"A",{id:!0,class:!0,href:!0});var hv=r(rn);vd=s(hv,"SPAN",{});var mv=r(vd);v(us.$$.fragment,mv),mv.forEach(t),hv.forEach(t),r_=h(pp),Td=s(pp,"SPAN",{});var fv=r(Td);i_=d(fv,"TFBartForConditionalGeneration"),fv.forEach(t),pp.forEach(t),yc=h(o),xe=s(o,"DIV",{class:!0});var Ft=r(xe);v(hs.$$.fragment,Ft),d_=h(Ft),ms=s(Ft,"P",{});var up=r(ms);l_=d(up,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kr=s(up,"A",{href:!0});var _v=r(Kr);c_=d(_v,"TFPreTrainedModel"),_v.forEach(t),p_=d(up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),up.forEach(t),u_=h(Ft),fs=s(Ft,"P",{});var hp=r(fs);h_=d(hp,"This model is also a "),_s=s(hp,"A",{href:!0,rel:!0});var gv=r(_s);m_=d(gv,"tf.keras.Model"),gv.forEach(t),f_=d(hp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hp.forEach(t),__=h(Ft),v(dn.$$.fragment,Ft),g_=h(Ft),Me=s(Ft,"DIV",{class:!0});var zt=r(Me);v(gs.$$.fragment,zt),b_=h(zt),ao=s(zt,"P",{});var _i=r(ao);k_=d(_i,"The "),Zr=s(_i,"A",{href:!0});var bv=r(Zr);y_=d(bv,"TFBartForConditionalGeneration"),bv.forEach(t),v_=d(_i," forward method, overrides the "),wd=s(_i,"CODE",{});var kv=r(wd);T_=d(kv,"__call__"),kv.forEach(t),w_=d(_i," special method."),_i.forEach(t),$_=h(zt),v(ln.$$.fragment,zt),x_=h(zt),v(cn.$$.fragment,zt),F_=h(zt),v(pn.$$.fragment,zt),zt.forEach(t),Ft.forEach(t),vc=h(o),so=s(o,"H2",{class:!0});var mp=r(so);un=s(mp,"A",{id:!0,class:!0,href:!0});var yv=r(un);$d=s(yv,"SPAN",{});var vv=r($d);v(bs.$$.fragment,vv),vv.forEach(t),yv.forEach(t),z_=h(mp),xd=s(mp,"SPAN",{});var Tv=r(xd);q_=d(Tv,"FlaxBartModel"),Tv.forEach(t),mp.forEach(t),Tc=h(o),R=s(o,"DIV",{class:!0});var me=r(R);v(ks.$$.fragment,me),B_=h(me),ys=s(me,"P",{});var fp=r(ys);j_=d(fp,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Yr=s(fp,"A",{href:!0});var wv=r(Yr);C_=d(wv,"FlaxPreTrainedModel"),wv.forEach(t),M_=d(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),E_=h(me),vs=s(me,"P",{});var _p=r(vs);P_=d(_p,`This model is also a Flax Linen
`),Ts=s(_p,"A",{href:!0,rel:!0});var $v=r(Ts);A_=d($v,"flax.nn.Module"),$v.forEach(t),S_=d(_p,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),_p.forEach(t),O_=h(me),Fd=s(me,"P",{});var xv=r(Fd);I_=d(xv,"Finally, this model supports inherent JAX features such as:"),xv.forEach(t),N_=h(me),pt=s(me,"UL",{});var Kn=r(pt);zd=s(Kn,"LI",{});var Fv=r(zd);ws=s(Fv,"A",{href:!0,rel:!0});var zv=r(ws);L_=d(zv,"Just-In-Time (JIT) compilation"),zv.forEach(t),Fv.forEach(t),D_=h(Kn),qd=s(Kn,"LI",{});var qv=r(qd);$s=s(qv,"A",{href:!0,rel:!0});var Bv=r($s);G_=d(Bv,"Automatic Differentiation"),Bv.forEach(t),qv.forEach(t),W_=h(Kn),Bd=s(Kn,"LI",{});var jv=r(Bd);xs=s(jv,"A",{href:!0,rel:!0});var Cv=r(xs);U_=d(Cv,"Vectorization"),Cv.forEach(t),jv.forEach(t),R_=h(Kn),jd=s(Kn,"LI",{});var Mv=r(jd);Fs=s(Mv,"A",{href:!0,rel:!0});var Ev=r(Fs);Q_=d(Ev,"Parallelization"),Ev.forEach(t),Mv.forEach(t),Kn.forEach(t),H_=h(me),Xe=s(me,"DIV",{class:!0});var Zn=r(Xe);v(zs.$$.fragment,Zn),V_=h(Zn),ro=s(Zn,"P",{});var gi=r(ro);J_=d(gi,"The "),Cd=s(gi,"CODE",{});var Pv=r(Cd);X_=d(Pv,"FlaxBartPreTrainedModel"),Pv.forEach(t),K_=d(gi," forward method, overrides the "),Md=s(gi,"CODE",{});var Av=r(Md);Z_=d(Av,"__call__"),Av.forEach(t),Y_=d(gi," special method."),gi.forEach(t),eg=h(Zn),v(hn.$$.fragment,Zn),tg=h(Zn),v(mn.$$.fragment,Zn),Zn.forEach(t),og=h(me),fn=s(me,"DIV",{class:!0});var gp=r(fn);v(qs.$$.fragment,gp),ng=h(gp),v(_n.$$.fragment,gp),gp.forEach(t),ag=h(me),gn=s(me,"DIV",{class:!0});var bp=r(gn);v(Bs.$$.fragment,bp),sg=h(bp),v(bn.$$.fragment,bp),bp.forEach(t),me.forEach(t),wc=h(o),io=s(o,"H2",{class:!0});var kp=r(io);kn=s(kp,"A",{id:!0,class:!0,href:!0});var Sv=r(kn);Ed=s(Sv,"SPAN",{});var Ov=r(Ed);v(js.$$.fragment,Ov),Ov.forEach(t),Sv.forEach(t),rg=h(kp),Pd=s(kp,"SPAN",{});var Iv=r(Pd);ig=d(Iv,"FlaxBartForConditionalGeneration"),Iv.forEach(t),kp.forEach(t),$c=h(o),Q=s(o,"DIV",{class:!0});var fe=r(Q);v(Cs.$$.fragment,fe),dg=h(fe),Ms=s(fe,"P",{});var yp=r(Ms);lg=d(yp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ei=s(yp,"A",{href:!0});var Nv=r(ei);cg=d(Nv,"FlaxPreTrainedModel"),Nv.forEach(t),pg=d(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),ug=h(fe),Es=s(fe,"P",{});var vp=r(Es);hg=d(vp,`This model is also a Flax Linen
`),Ps=s(vp,"A",{href:!0,rel:!0});var Lv=r(Ps);mg=d(Lv,"flax.nn.Module"),Lv.forEach(t),fg=d(vp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vp.forEach(t),_g=h(fe),Ad=s(fe,"P",{});var Dv=r(Ad);gg=d(Dv,"Finally, this model supports inherent JAX features such as:"),Dv.forEach(t),bg=h(fe),ut=s(fe,"UL",{});var Yn=r(ut);Sd=s(Yn,"LI",{});var Gv=r(Sd);As=s(Gv,"A",{href:!0,rel:!0});var Wv=r(As);kg=d(Wv,"Just-In-Time (JIT) compilation"),Wv.forEach(t),Gv.forEach(t),yg=h(Yn),Od=s(Yn,"LI",{});var Uv=r(Od);Ss=s(Uv,"A",{href:!0,rel:!0});var Rv=r(Ss);vg=d(Rv,"Automatic Differentiation"),Rv.forEach(t),Uv.forEach(t),Tg=h(Yn),Id=s(Yn,"LI",{});var Qv=r(Id);Os=s(Qv,"A",{href:!0,rel:!0});var Hv=r(Os);wg=d(Hv,"Vectorization"),Hv.forEach(t),Qv.forEach(t),$g=h(Yn),Nd=s(Yn,"LI",{});var Vv=r(Nd);Is=s(Vv,"A",{href:!0,rel:!0});var Jv=r(Is);xg=d(Jv,"Parallelization"),Jv.forEach(t),Vv.forEach(t),Yn.forEach(t),Fg=h(fe),Ee=s(fe,"DIV",{class:!0});var qt=r(Ee);v(Ns.$$.fragment,qt),zg=h(qt),lo=s(qt,"P",{});var bi=r(lo);qg=d(bi,"The "),Ld=s(bi,"CODE",{});var Xv=r(Ld);Bg=d(Xv,"FlaxBartPreTrainedModel"),Xv.forEach(t),jg=d(bi," forward method, overrides the "),Dd=s(bi,"CODE",{});var Kv=r(Dd);Cg=d(Kv,"__call__"),Kv.forEach(t),Mg=d(bi," special method."),bi.forEach(t),Eg=h(qt),v(yn.$$.fragment,qt),Pg=h(qt),v(vn.$$.fragment,qt),Ag=h(qt),v(Tn.$$.fragment,qt),qt.forEach(t),Sg=h(fe),wn=s(fe,"DIV",{class:!0});var Tp=r(wn);v(Ls.$$.fragment,Tp),Og=h(Tp),v($n.$$.fragment,Tp),Tp.forEach(t),Ig=h(fe),xn=s(fe,"DIV",{class:!0});var wp=r(xn);v(Ds.$$.fragment,wp),Ng=h(wp),v(Fn.$$.fragment,wp),wp.forEach(t),fe.forEach(t),xc=h(o),co=s(o,"H2",{class:!0});var $p=r(co);zn=s($p,"A",{id:!0,class:!0,href:!0});var Zv=r(zn);Gd=s(Zv,"SPAN",{});var Yv=r(Gd);v(Gs.$$.fragment,Yv),Yv.forEach(t),Zv.forEach(t),Lg=h($p),Wd=s($p,"SPAN",{});var e1=r(Wd);Dg=d(e1,"FlaxBartForSequenceClassification"),e1.forEach(t),$p.forEach(t),Fc=h(o),N=s(o,"DIV",{class:!0});var te=r(N);v(Ws.$$.fragment,te),Gg=h(te),Ud=s(te,"P",{});var t1=r(Ud);Wg=d(t1,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),t1.forEach(t),Ug=h(te),Us=s(te,"P",{});var xp=r(Us);Rg=d(xp,"This model inherits from "),ti=s(xp,"A",{href:!0});var o1=r(ti);Qg=d(o1,"FlaxPreTrainedModel"),o1.forEach(t),Hg=d(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp.forEach(t),Vg=h(te),Rs=s(te,"P",{});var Fp=r(Rs);Jg=d(Fp,`This model is also a Flax Linen
`),Qs=s(Fp,"A",{href:!0,rel:!0});var n1=r(Qs);Xg=d(n1,"flax.nn.Module"),n1.forEach(t),Kg=d(Fp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fp.forEach(t),Zg=h(te),Rd=s(te,"P",{});var a1=r(Rd);Yg=d(a1,"Finally, this model supports inherent JAX features such as:"),a1.forEach(t),eb=h(te),ht=s(te,"UL",{});var ea=r(ht);Qd=s(ea,"LI",{});var s1=r(Qd);Hs=s(s1,"A",{href:!0,rel:!0});var r1=r(Hs);tb=d(r1,"Just-In-Time (JIT) compilation"),r1.forEach(t),s1.forEach(t),ob=h(ea),Hd=s(ea,"LI",{});var i1=r(Hd);Vs=s(i1,"A",{href:!0,rel:!0});var d1=r(Vs);nb=d(d1,"Automatic Differentiation"),d1.forEach(t),i1.forEach(t),ab=h(ea),Vd=s(ea,"LI",{});var l1=r(Vd);Js=s(l1,"A",{href:!0,rel:!0});var c1=r(Js);sb=d(c1,"Vectorization"),c1.forEach(t),l1.forEach(t),rb=h(ea),Jd=s(ea,"LI",{});var p1=r(Jd);Xs=s(p1,"A",{href:!0,rel:!0});var u1=r(Xs);ib=d(u1,"Parallelization"),u1.forEach(t),p1.forEach(t),ea.forEach(t),db=h(te),Ke=s(te,"DIV",{class:!0});var ta=r(Ke);v(Ks.$$.fragment,ta),lb=h(ta),po=s(ta,"P",{});var ki=r(po);cb=d(ki,"The "),Xd=s(ki,"CODE",{});var h1=r(Xd);pb=d(h1,"FlaxBartPreTrainedModel"),h1.forEach(t),ub=d(ki," forward method, overrides the "),Kd=s(ki,"CODE",{});var m1=r(Kd);hb=d(m1,"__call__"),m1.forEach(t),mb=d(ki," special method."),ki.forEach(t),fb=h(ta),v(qn.$$.fragment,ta),_b=h(ta),v(Bn.$$.fragment,ta),ta.forEach(t),gb=h(te),jn=s(te,"DIV",{class:!0});var zp=r(jn);v(Zs.$$.fragment,zp),bb=h(zp),v(Cn.$$.fragment,zp),zp.forEach(t),kb=h(te),Mn=s(te,"DIV",{class:!0});var qp=r(Mn);v(Ys.$$.fragment,qp),yb=h(qp),v(En.$$.fragment,qp),qp.forEach(t),te.forEach(t),zc=h(o),uo=s(o,"H2",{class:!0});var Bp=r(uo);Pn=s(Bp,"A",{id:!0,class:!0,href:!0});var f1=r(Pn);Zd=s(f1,"SPAN",{});var _1=r(Zd);v(er.$$.fragment,_1),_1.forEach(t),f1.forEach(t),vb=h(Bp),Yd=s(Bp,"SPAN",{});var g1=r(Yd);Tb=d(g1,"FlaxBartForQuestionAnswering"),g1.forEach(t),Bp.forEach(t),qc=h(o),L=s(o,"DIV",{class:!0});var oe=r(L);v(tr.$$.fragment,oe),wb=h(oe),ho=s(oe,"P",{});var yi=r(ho);$b=d(yi,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),el=s(yi,"CODE",{});var b1=r(el);xb=d(b1,"span start logits"),b1.forEach(t),Fb=d(yi," and "),tl=s(yi,"CODE",{});var k1=r(tl);zb=d(k1,"span end logits"),k1.forEach(t),qb=d(yi,")."),yi.forEach(t),Bb=h(oe),or=s(oe,"P",{});var jp=r(or);jb=d(jp,"This model inherits from "),oi=s(jp,"A",{href:!0});var y1=r(oi);Cb=d(y1,"FlaxPreTrainedModel"),y1.forEach(t),Mb=d(jp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jp.forEach(t),Eb=h(oe),nr=s(oe,"P",{});var Cp=r(nr);Pb=d(Cp,`This model is also a Flax Linen
`),ar=s(Cp,"A",{href:!0,rel:!0});var v1=r(ar);Ab=d(v1,"flax.nn.Module"),v1.forEach(t),Sb=d(Cp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cp.forEach(t),Ob=h(oe),ol=s(oe,"P",{});var T1=r(ol);Ib=d(T1,"Finally, this model supports inherent JAX features such as:"),T1.forEach(t),Nb=h(oe),mt=s(oe,"UL",{});var oa=r(mt);nl=s(oa,"LI",{});var w1=r(nl);sr=s(w1,"A",{href:!0,rel:!0});var $1=r(sr);Lb=d($1,"Just-In-Time (JIT) compilation"),$1.forEach(t),w1.forEach(t),Db=h(oa),al=s(oa,"LI",{});var x1=r(al);rr=s(x1,"A",{href:!0,rel:!0});var F1=r(rr);Gb=d(F1,"Automatic Differentiation"),F1.forEach(t),x1.forEach(t),Wb=h(oa),sl=s(oa,"LI",{});var z1=r(sl);ir=s(z1,"A",{href:!0,rel:!0});var q1=r(ir);Ub=d(q1,"Vectorization"),q1.forEach(t),z1.forEach(t),Rb=h(oa),rl=s(oa,"LI",{});var B1=r(rl);dr=s(B1,"A",{href:!0,rel:!0});var j1=r(dr);Qb=d(j1,"Parallelization"),j1.forEach(t),B1.forEach(t),oa.forEach(t),Hb=h(oe),Ze=s(oe,"DIV",{class:!0});var na=r(Ze);v(lr.$$.fragment,na),Vb=h(na),mo=s(na,"P",{});var vi=r(mo);Jb=d(vi,"The "),il=s(vi,"CODE",{});var C1=r(il);Xb=d(C1,"FlaxBartPreTrainedModel"),C1.forEach(t),Kb=d(vi," forward method, overrides the "),dl=s(vi,"CODE",{});var M1=r(dl);Zb=d(M1,"__call__"),M1.forEach(t),Yb=d(vi," special method."),vi.forEach(t),ek=h(na),v(An.$$.fragment,na),tk=h(na),v(Sn.$$.fragment,na),na.forEach(t),ok=h(oe),On=s(oe,"DIV",{class:!0});var Mp=r(On);v(cr.$$.fragment,Mp),nk=h(Mp),v(In.$$.fragment,Mp),Mp.forEach(t),ak=h(oe),Nn=s(oe,"DIV",{class:!0});var Ep=r(Nn);v(pr.$$.fragment,Ep),sk=h(Ep),v(Ln.$$.fragment,Ep),Ep.forEach(t),oe.forEach(t),Bc=h(o),fo=s(o,"H2",{class:!0});var Pp=r(fo);Dn=s(Pp,"A",{id:!0,class:!0,href:!0});var E1=r(Dn);ll=s(E1,"SPAN",{});var P1=r(ll);v(ur.$$.fragment,P1),P1.forEach(t),E1.forEach(t),rk=h(Pp),cl=s(Pp,"SPAN",{});var A1=r(cl);ik=d(A1,"FlaxBartForCausalLM"),A1.forEach(t),Pp.forEach(t),jc=h(o),Z=s(o,"DIV",{class:!0});var Ae=r(Z);v(hr.$$.fragment,Ae),dk=h(Ae),pl=s(Ae,"P",{});var S1=r(pl);lk=d(S1,`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),S1.forEach(t),ck=h(Ae),mr=s(Ae,"P",{});var Ap=r(mr);pk=d(Ap,"This model inherits from "),ni=s(Ap,"A",{href:!0});var O1=r(ni);uk=d(O1,"FlaxPreTrainedModel"),O1.forEach(t),hk=d(Ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap.forEach(t),mk=h(Ae),fr=s(Ae,"P",{});var Sp=r(fr);fk=d(Sp,`This model is also a Flax Linen
`),_r=s(Sp,"A",{href:!0,rel:!0});var I1=r(_r);_k=d(I1,"flax.nn.Module"),I1.forEach(t),gk=d(Sp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sp.forEach(t),bk=h(Ae),ul=s(Ae,"P",{});var N1=r(ul);kk=d(N1,"Finally, this model supports inherent JAX features such as:"),N1.forEach(t),yk=h(Ae),ft=s(Ae,"UL",{});var aa=r(ft);hl=s(aa,"LI",{});var L1=r(hl);gr=s(L1,"A",{href:!0,rel:!0});var D1=r(gr);vk=d(D1,"Just-In-Time (JIT) compilation"),D1.forEach(t),L1.forEach(t),Tk=h(aa),ml=s(aa,"LI",{});var G1=r(ml);br=s(G1,"A",{href:!0,rel:!0});var W1=r(br);wk=d(W1,"Automatic Differentiation"),W1.forEach(t),G1.forEach(t),$k=h(aa),fl=s(aa,"LI",{});var U1=r(fl);kr=s(U1,"A",{href:!0,rel:!0});var R1=r(kr);xk=d(R1,"Vectorization"),R1.forEach(t),U1.forEach(t),Fk=h(aa),_l=s(aa,"LI",{});var Q1=r(_l);yr=s(Q1,"A",{href:!0,rel:!0});var H1=r(yr);zk=d(H1,"Parallelization"),H1.forEach(t),Q1.forEach(t),aa.forEach(t),qk=h(Ae),Ye=s(Ae,"DIV",{class:!0});var sa=r(Ye);v(vr.$$.fragment,sa),Bk=h(sa),_o=s(sa,"P",{});var Ti=r(_o);jk=d(Ti,"The "),gl=s(Ti,"CODE",{});var V1=r(gl);Ck=d(V1,"FlaxBartDecoderPreTrainedModel"),V1.forEach(t),Mk=d(Ti," forward method, overrides the "),bl=s(Ti,"CODE",{});var J1=r(bl);Ek=d(J1,"__call__"),J1.forEach(t),Pk=d(Ti," special method."),Ti.forEach(t),Ak=h(sa),v(Gn.$$.fragment,sa),Sk=h(sa),v(Wn.$$.fragment,sa),sa.forEach(t),Ae.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(HT)),f(c,"id","bart"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#bart"),f(m,"class","relative group"),f(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(ge,"rel","nofollow"),f(D,"id","overview"),f(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(D,"href","#overview"),f(J,"class","relative group"),f(X,"href","https://arxiv.org/abs/1910.13461"),f(X,"rel","nofollow"),f(Ie,"href","https://huggingface.co/sshleifer"),f(Ie,"rel","nofollow"),f(Ne,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),f(Ne,"rel","nofollow"),f(qe,"id","examples"),f(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qe,"href","#examples"),f(ve,"class","relative group"),f(ia,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),f(ia,"rel","nofollow"),f(qr,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(da,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),f(da,"rel","nofollow"),f(la,"href","https://huggingface.co/models?search=distilbart"),f(la,"rel","nofollow"),f(ca,"href","https://arxiv.org/abs/2010.13002"),f(ca,"rel","nofollow"),f(To,"id","implementation-notes"),f(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(To,"href","#implementation-notes"),f(Pt,"class","relative group"),f(Br,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartTokenizer"),f(jr,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode"),f(Cr,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartModel"),f(Er,"href","/docs/transformers/v4.21.1/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),f(wo,"id","mask-filling"),f(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wo,"href","#mask-filling"),f(It,"class","relative group"),f($o,"id","transformers.BartConfig"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#transformers.BartConfig"),f(Nt,"class","relative group"),f(Pr,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartModel"),f(_a,"href","https://huggingface.co/facebook/bart-large"),f(_a,"rel","nofollow"),f(Ar,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(Sr,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fo,"id","transformers.BartTokenizer"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.BartTokenizer"),f(Gt,"class","relative group"),f(Or,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mo,"id","transformers.BartTokenizerFast"),f(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mo,"href","#transformers.BartTokenizerFast"),f(Wt,"class","relative group"),f(Lr,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.BartModel"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.BartModel"),f(Ut,"class","relative group"),f(Dr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(Oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Oa,"rel","nofollow"),f(Gr,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartModel"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"id","transformers.BartForConditionalGeneration"),f(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(No,"href","#transformers.BartForConditionalGeneration"),f(Qt,"class","relative group"),f(Wr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(Wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Wa,"rel","nofollow"),f(Ur,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"id","transformers.BartForSequenceClassification"),f(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wo,"href","#transformers.BartForSequenceClassification"),f(Vt,"class","relative group"),f(Rr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ja,"rel","nofollow"),f(Qr,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartForSequenceClassification"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.BartForQuestionAnswering"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.BartForQuestionAnswering"),f(Xt,"class","relative group"),f(Hr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),f(ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ts,"rel","nofollow"),f(Vr,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.BartForQuestionAnswering"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yo,"id","transformers.BartForCausalLM"),f(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yo,"href","#transformers.BartForCausalLM"),f(Yt,"class","relative group"),f(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.TFBartModel"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.TFBartModel"),f(to,"class","relative group"),f(Jr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(cs,"rel","nofollow"),f(Xr,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.TFBartModel"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.TFBartForConditionalGeneration"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.TFBartForConditionalGeneration"),f(no,"class","relative group"),f(Kr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(_s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(_s,"rel","nofollow"),f(Zr,"href","/docs/transformers/v4.21.1/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(un,"id","transformers.FlaxBartModel"),f(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(un,"href","#transformers.FlaxBartModel"),f(so,"class","relative group"),f(Yr,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ts,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ts,"rel","nofollow"),f(ws,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ws,"rel","nofollow"),f($s,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f($s,"rel","nofollow"),f(xs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(xs,"rel","nofollow"),f(Fs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Fs,"rel","nofollow"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.FlaxBartForConditionalGeneration"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.FlaxBartForConditionalGeneration"),f(io,"class","relative group"),f(ei,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ps,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ps,"rel","nofollow"),f(As,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(As,"rel","nofollow"),f(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ss,"rel","nofollow"),f(Os,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Os,"rel","nofollow"),f(Is,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Is,"rel","nofollow"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zn,"id","transformers.FlaxBartForSequenceClassification"),f(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zn,"href","#transformers.FlaxBartForSequenceClassification"),f(co,"class","relative group"),f(ti,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Qs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Qs,"rel","nofollow"),f(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Hs,"rel","nofollow"),f(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Vs,"rel","nofollow"),f(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Js,"rel","nofollow"),f(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Xs,"rel","nofollow"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"id","transformers.FlaxBartForQuestionAnswering"),f(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Pn,"href","#transformers.FlaxBartForQuestionAnswering"),f(uo,"class","relative group"),f(oi,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ar,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ar,"rel","nofollow"),f(sr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(sr,"rel","nofollow"),f(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(rr,"rel","nofollow"),f(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ir,"rel","nofollow"),f(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(dr,"rel","nofollow"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(On,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"id","transformers.FlaxBartForCausalLM"),f(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dn,"href","#transformers.FlaxBartForCausalLM"),f(fo,"class","relative group"),f(ni,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(_r,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(_r,"rel","nofollow"),f(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(gr,"rel","nofollow"),f(br,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(br,"rel","nofollow"),f(kr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(kr,"rel","nofollow"),f(yr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(yr,"rel","nofollow"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),k(o,g,b),k(o,m,b),e(m,c),e(c,_),T(n,_,null),e(m,p),e(m,q),e(q,ne),k(o,O,b),k(o,j,b),e(j,le),e(le,_e),e(j,et),e(j,ge),e(ge,be),e(j,tt),k(o,Qe,b),k(o,J,b),e(J,D),e(D,Se),T(ae,Se,null),e(J,S),e(J,I),e(I,ot),k(o,ce,b),k(o,pe,b),e(pe,nt),e(pe,X),e(X,at),e(pe,st),k(o,G,b),k(o,ze,b),e(ze,ke),k(o,He,b),k(o,Y,b),e(Y,se),e(se,rt),e(Y,it),e(Y,K),e(K,dt),e(Y,ye),e(Y,Oe),e(Oe,z),k(o,M,b),k(o,H,b),e(H,Bt),e(H,Ie),e(Ie,re),e(H,jt),e(H,Ne),e(Ne,Ct),e(H,ie),k(o,ue,b),k(o,ve,b),e(ve,qe),e(qe,de),T(Le,de,null),e(ve,Mt),e(ve,De),e(De,Et),k(o,Jl,b),k(o,bt,b),e(bt,ra),e(ra,Op),e(ra,ia),e(ia,Ip),e(ra,Np),e(bt,Lp),e(bt,lt),e(lt,Dp),e(lt,qr),e(qr,Gp),e(lt,Wp),e(lt,wi),e(wi,Up),e(lt,Rp),e(lt,da),e(da,Qp),e(lt,Hp),e(bt,Vp),e(bt,vo),e(vo,la),e(la,Jp),e(vo,Xp),e(vo,ca),e(ca,Kp),e(vo,Zp),k(o,Xl,b),k(o,Pt,b),e(Pt,To),e(To,$i),T(pa,$i,null),e(Pt,Yp),e(Pt,xi),e(xi,eu),k(o,Kl,b),k(o,Be,b),e(Be,ct),e(ct,tu),e(ct,Fi),e(Fi,ou),e(ct,nu),e(ct,Br),e(Br,au),e(ct,su),e(ct,jr),e(jr,ru),e(ct,iu),e(Be,du),e(Be,At),e(At,lu),e(At,Cr),e(Cr,cu),e(At,pu),e(At,zi),e(zi,uu),e(At,hu),e(Be,mu),e(Be,St),e(St,fu),e(St,qi),e(qi,_u),e(St,gu),e(St,Bi),e(Bi,bu),e(St,ku),e(Be,yu),e(Be,Mr),e(Mr,Er),e(Er,vu),e(Mr,Tu),e(Be,wu),e(Be,Ot),e(Ot,$u),e(Ot,ji),e(ji,xu),e(Ot,Fu),e(Ot,Ci),e(Ci,zu),e(Ot,qu),k(o,Zl,b),k(o,It,b),e(It,wo),e(wo,Mi),T(ua,Mi,null),e(It,Bu),e(It,Ei),e(Ei,ju),k(o,Yl,b),k(o,kt,b),e(kt,Cu),e(kt,Pi),e(Pi,Mu),e(kt,Eu),e(kt,Ai),e(Ai,Pu),e(kt,Au),k(o,ec,b),T(ha,o,b),k(o,tc,b),k(o,Nt,b),e(Nt,$o),e($o,Si),T(ma,Si,null),e(Nt,Su),e(Nt,Oi),e(Oi,Ou),k(o,oc,b),k(o,Ge,b),T(fa,Ge,null),e(Ge,Iu),e(Ge,Lt),e(Lt,Nu),e(Lt,Pr),e(Pr,Lu),e(Lt,Du),e(Lt,_a),e(_a,Gu),e(Lt,Wu),e(Ge,Uu),e(Ge,Dt),e(Dt,Ru),e(Dt,Ar),e(Ar,Qu),e(Dt,Hu),e(Dt,Sr),e(Sr,Vu),e(Dt,Ju),e(Ge,Xu),T(xo,Ge,null),k(o,nc,b),k(o,Gt,b),e(Gt,Fo),e(Fo,Ii),T(ga,Ii,null),e(Gt,Ku),e(Gt,Ni),e(Ni,Zu),k(o,ac,b),k(o,A,b),T(ba,A,null),e(A,Yu),e(A,Li),e(Li,eh),e(A,th),e(A,Di),e(Di,oh),e(A,nh),T(zo,A,null),e(A,ah),e(A,ka),e(ka,sh),e(ka,Gi),e(Gi,rh),e(ka,ih),e(A,dh),T(qo,A,null),e(A,lh),e(A,ya),e(ya,ch),e(ya,Or),e(Or,ph),e(ya,uh),e(A,hh),e(A,yt),T(va,yt,null),e(yt,mh),e(yt,Wi),e(Wi,fh),e(yt,_h),e(yt,Ta),e(Ta,Ir),e(Ir,gh),e(Ir,Ui),e(Ui,bh),e(Ta,kh),e(Ta,Nr),e(Nr,yh),e(Nr,Ri),e(Ri,vh),e(A,Th),e(A,Bo),T(wa,Bo,null),e(Bo,wh),e(Bo,Qi),e(Qi,$h),e(A,xh),e(A,jo),T($a,jo,null),e(jo,Fh),e(jo,Hi),e(Hi,zh),e(A,qh),e(A,Co),T(xa,Co,null),e(Co,Bh),e(Co,Fa),e(Fa,jh),e(Fa,Vi),e(Vi,Ch),e(Fa,Mh),k(o,sc,b),k(o,Wt,b),e(Wt,Mo),e(Mo,Ji),T(za,Ji,null),e(Wt,Eh),e(Wt,Xi),e(Xi,Ph),k(o,rc,b),k(o,U,b),T(qa,U,null),e(U,Ah),e(U,Ba),e(Ba,Sh),e(Ba,Ki),e(Ki,Oh),e(Ba,Ih),e(U,Nh),e(U,Zi),e(Zi,Lh),e(U,Dh),T(Eo,U,null),e(U,Gh),e(U,ja),e(ja,Wh),e(ja,Yi),e(Yi,Uh),e(ja,Rh),e(U,Qh),T(Po,U,null),e(U,Hh),e(U,Ca),e(Ca,Vh),e(Ca,Lr),e(Lr,Jh),e(Ca,Xh),e(U,Kh),e(U,Ao),T(Ma,Ao,null),e(Ao,Zh),e(Ao,ed),e(ed,Yh),k(o,ic,b),k(o,Ut,b),e(Ut,So),e(So,td),T(Ea,td,null),e(Ut,em),e(Ut,od),e(od,tm),k(o,dc,b),k(o,We,b),T(Pa,We,null),e(We,om),e(We,Aa),e(Aa,nm),e(Aa,Dr),e(Dr,am),e(Aa,sm),e(We,rm),e(We,Sa),e(Sa,im),e(Sa,Oa),e(Oa,dm),e(Sa,lm),e(We,cm),e(We,Ve),T(Ia,Ve,null),e(Ve,pm),e(Ve,Rt),e(Rt,um),e(Rt,Gr),e(Gr,hm),e(Rt,mm),e(Rt,nd),e(nd,fm),e(Rt,_m),e(Ve,gm),T(Oo,Ve,null),e(Ve,bm),T(Io,Ve,null),k(o,lc,b),k(o,Qt,b),e(Qt,No),e(No,ad),T(Na,ad,null),e(Qt,km),e(Qt,sd),e(sd,ym),k(o,cc,b),k(o,Ue,b),T(La,Ue,null),e(Ue,vm),e(Ue,Da),e(Da,Tm),e(Da,Wr),e(Wr,wm),e(Da,$m),e(Ue,xm),e(Ue,Ga),e(Ga,Fm),e(Ga,Wa),e(Wa,zm),e(Ga,qm),e(Ue,Bm),e(Ue,je),T(Ua,je,null),e(je,jm),e(je,Ht),e(Ht,Cm),e(Ht,Ur),e(Ur,Mm),e(Ht,Em),e(Ht,rd),e(rd,Pm),e(Ht,Am),e(je,Sm),T(Lo,je,null),e(je,Om),T(Do,je,null),e(je,Im),T(Go,je,null),k(o,pc,b),k(o,Vt,b),e(Vt,Wo),e(Wo,id),T(Ra,id,null),e(Vt,Nm),e(Vt,dd),e(dd,Lm),k(o,uc,b),k(o,Te,b),T(Qa,Te,null),e(Te,Dm),e(Te,ld),e(ld,Gm),e(Te,Wm),e(Te,Ha),e(Ha,Um),e(Ha,Rr),e(Rr,Rm),e(Ha,Qm),e(Te,Hm),e(Te,Va),e(Va,Vm),e(Va,Ja),e(Ja,Jm),e(Va,Xm),e(Te,Km),e(Te,ee),T(Xa,ee,null),e(ee,Zm),e(ee,Jt),e(Jt,Ym),e(Jt,Qr),e(Qr,ef),e(Jt,tf),e(Jt,cd),e(cd,of),e(Jt,nf),e(ee,af),T(Uo,ee,null),e(ee,sf),T(Ro,ee,null),e(ee,rf),T(Qo,ee,null),e(ee,df),T(Ho,ee,null),e(ee,lf),T(Vo,ee,null),k(o,hc,b),k(o,Xt,b),e(Xt,Jo),e(Jo,pd),T(Ka,pd,null),e(Xt,cf),e(Xt,ud),e(ud,pf),k(o,mc,b),k(o,we,b),T(Za,we,null),e(we,uf),e(we,Kt),e(Kt,hf),e(Kt,hd),e(hd,mf),e(Kt,ff),e(Kt,md),e(md,_f),e(Kt,gf),e(we,bf),e(we,Ya),e(Ya,kf),e(Ya,Hr),e(Hr,yf),e(Ya,vf),e(we,Tf),e(we,es),e(es,wf),e(es,ts),e(ts,$f),e(es,xf),e(we,Ff),e(we,Ce),T(os,Ce,null),e(Ce,zf),e(Ce,Zt),e(Zt,qf),e(Zt,Vr),e(Vr,Bf),e(Zt,jf),e(Zt,fd),e(fd,Cf),e(Zt,Mf),e(Ce,Ef),T(Xo,Ce,null),e(Ce,Pf),T(Ko,Ce,null),e(Ce,Af),T(Zo,Ce,null),k(o,fc,b),k(o,Yt,b),e(Yt,Yo),e(Yo,_d),T(ns,_d,null),e(Yt,Sf),e(Yt,gd),e(gd,Of),k(o,_c,b),k(o,eo,b),T(as,eo,null),e(eo,If),e(eo,en),T(ss,en,null),e(en,Nf),T(tn,en,null),k(o,gc,b),k(o,to,b),e(to,on),e(on,bd),T(rs,bd,null),e(to,Lf),e(to,kd),e(kd,Df),k(o,bc,b),k(o,$e,b),T(is,$e,null),e($e,Gf),e($e,ds),e(ds,Wf),e(ds,Jr),e(Jr,Uf),e(ds,Rf),e($e,Qf),e($e,ls),e(ls,Hf),e(ls,cs),e(cs,Vf),e(ls,Jf),e($e,Xf),T(nn,$e,null),e($e,Kf),e($e,Je),T(ps,Je,null),e(Je,Zf),e(Je,oo),e(oo,Yf),e(oo,Xr),e(Xr,e_),e(oo,t_),e(oo,yd),e(yd,o_),e(oo,n_),e(Je,a_),T(an,Je,null),e(Je,s_),T(sn,Je,null),k(o,kc,b),k(o,no,b),e(no,rn),e(rn,vd),T(us,vd,null),e(no,r_),e(no,Td),e(Td,i_),k(o,yc,b),k(o,xe,b),T(hs,xe,null),e(xe,d_),e(xe,ms),e(ms,l_),e(ms,Kr),e(Kr,c_),e(ms,p_),e(xe,u_),e(xe,fs),e(fs,h_),e(fs,_s),e(_s,m_),e(fs,f_),e(xe,__),T(dn,xe,null),e(xe,g_),e(xe,Me),T(gs,Me,null),e(Me,b_),e(Me,ao),e(ao,k_),e(ao,Zr),e(Zr,y_),e(ao,v_),e(ao,wd),e(wd,T_),e(ao,w_),e(Me,$_),T(ln,Me,null),e(Me,x_),T(cn,Me,null),e(Me,F_),T(pn,Me,null),k(o,vc,b),k(o,so,b),e(so,un),e(un,$d),T(bs,$d,null),e(so,z_),e(so,xd),e(xd,q_),k(o,Tc,b),k(o,R,b),T(ks,R,null),e(R,B_),e(R,ys),e(ys,j_),e(ys,Yr),e(Yr,C_),e(ys,M_),e(R,E_),e(R,vs),e(vs,P_),e(vs,Ts),e(Ts,A_),e(vs,S_),e(R,O_),e(R,Fd),e(Fd,I_),e(R,N_),e(R,pt),e(pt,zd),e(zd,ws),e(ws,L_),e(pt,D_),e(pt,qd),e(qd,$s),e($s,G_),e(pt,W_),e(pt,Bd),e(Bd,xs),e(xs,U_),e(pt,R_),e(pt,jd),e(jd,Fs),e(Fs,Q_),e(R,H_),e(R,Xe),T(zs,Xe,null),e(Xe,V_),e(Xe,ro),e(ro,J_),e(ro,Cd),e(Cd,X_),e(ro,K_),e(ro,Md),e(Md,Z_),e(ro,Y_),e(Xe,eg),T(hn,Xe,null),e(Xe,tg),T(mn,Xe,null),e(R,og),e(R,fn),T(qs,fn,null),e(fn,ng),T(_n,fn,null),e(R,ag),e(R,gn),T(Bs,gn,null),e(gn,sg),T(bn,gn,null),k(o,wc,b),k(o,io,b),e(io,kn),e(kn,Ed),T(js,Ed,null),e(io,rg),e(io,Pd),e(Pd,ig),k(o,$c,b),k(o,Q,b),T(Cs,Q,null),e(Q,dg),e(Q,Ms),e(Ms,lg),e(Ms,ei),e(ei,cg),e(Ms,pg),e(Q,ug),e(Q,Es),e(Es,hg),e(Es,Ps),e(Ps,mg),e(Es,fg),e(Q,_g),e(Q,Ad),e(Ad,gg),e(Q,bg),e(Q,ut),e(ut,Sd),e(Sd,As),e(As,kg),e(ut,yg),e(ut,Od),e(Od,Ss),e(Ss,vg),e(ut,Tg),e(ut,Id),e(Id,Os),e(Os,wg),e(ut,$g),e(ut,Nd),e(Nd,Is),e(Is,xg),e(Q,Fg),e(Q,Ee),T(Ns,Ee,null),e(Ee,zg),e(Ee,lo),e(lo,qg),e(lo,Ld),e(Ld,Bg),e(lo,jg),e(lo,Dd),e(Dd,Cg),e(lo,Mg),e(Ee,Eg),T(yn,Ee,null),e(Ee,Pg),T(vn,Ee,null),e(Ee,Ag),T(Tn,Ee,null),e(Q,Sg),e(Q,wn),T(Ls,wn,null),e(wn,Og),T($n,wn,null),e(Q,Ig),e(Q,xn),T(Ds,xn,null),e(xn,Ng),T(Fn,xn,null),k(o,xc,b),k(o,co,b),e(co,zn),e(zn,Gd),T(Gs,Gd,null),e(co,Lg),e(co,Wd),e(Wd,Dg),k(o,Fc,b),k(o,N,b),T(Ws,N,null),e(N,Gg),e(N,Ud),e(Ud,Wg),e(N,Ug),e(N,Us),e(Us,Rg),e(Us,ti),e(ti,Qg),e(Us,Hg),e(N,Vg),e(N,Rs),e(Rs,Jg),e(Rs,Qs),e(Qs,Xg),e(Rs,Kg),e(N,Zg),e(N,Rd),e(Rd,Yg),e(N,eb),e(N,ht),e(ht,Qd),e(Qd,Hs),e(Hs,tb),e(ht,ob),e(ht,Hd),e(Hd,Vs),e(Vs,nb),e(ht,ab),e(ht,Vd),e(Vd,Js),e(Js,sb),e(ht,rb),e(ht,Jd),e(Jd,Xs),e(Xs,ib),e(N,db),e(N,Ke),T(Ks,Ke,null),e(Ke,lb),e(Ke,po),e(po,cb),e(po,Xd),e(Xd,pb),e(po,ub),e(po,Kd),e(Kd,hb),e(po,mb),e(Ke,fb),T(qn,Ke,null),e(Ke,_b),T(Bn,Ke,null),e(N,gb),e(N,jn),T(Zs,jn,null),e(jn,bb),T(Cn,jn,null),e(N,kb),e(N,Mn),T(Ys,Mn,null),e(Mn,yb),T(En,Mn,null),k(o,zc,b),k(o,uo,b),e(uo,Pn),e(Pn,Zd),T(er,Zd,null),e(uo,vb),e(uo,Yd),e(Yd,Tb),k(o,qc,b),k(o,L,b),T(tr,L,null),e(L,wb),e(L,ho),e(ho,$b),e(ho,el),e(el,xb),e(ho,Fb),e(ho,tl),e(tl,zb),e(ho,qb),e(L,Bb),e(L,or),e(or,jb),e(or,oi),e(oi,Cb),e(or,Mb),e(L,Eb),e(L,nr),e(nr,Pb),e(nr,ar),e(ar,Ab),e(nr,Sb),e(L,Ob),e(L,ol),e(ol,Ib),e(L,Nb),e(L,mt),e(mt,nl),e(nl,sr),e(sr,Lb),e(mt,Db),e(mt,al),e(al,rr),e(rr,Gb),e(mt,Wb),e(mt,sl),e(sl,ir),e(ir,Ub),e(mt,Rb),e(mt,rl),e(rl,dr),e(dr,Qb),e(L,Hb),e(L,Ze),T(lr,Ze,null),e(Ze,Vb),e(Ze,mo),e(mo,Jb),e(mo,il),e(il,Xb),e(mo,Kb),e(mo,dl),e(dl,Zb),e(mo,Yb),e(Ze,ek),T(An,Ze,null),e(Ze,tk),T(Sn,Ze,null),e(L,ok),e(L,On),T(cr,On,null),e(On,nk),T(In,On,null),e(L,ak),e(L,Nn),T(pr,Nn,null),e(Nn,sk),T(Ln,Nn,null),k(o,Bc,b),k(o,fo,b),e(fo,Dn),e(Dn,ll),T(ur,ll,null),e(fo,rk),e(fo,cl),e(cl,ik),k(o,jc,b),k(o,Z,b),T(hr,Z,null),e(Z,dk),e(Z,pl),e(pl,lk),e(Z,ck),e(Z,mr),e(mr,pk),e(mr,ni),e(ni,uk),e(mr,hk),e(Z,mk),e(Z,fr),e(fr,fk),e(fr,_r),e(_r,_k),e(fr,gk),e(Z,bk),e(Z,ul),e(ul,kk),e(Z,yk),e(Z,ft),e(ft,hl),e(hl,gr),e(gr,vk),e(ft,Tk),e(ft,ml),e(ml,br),e(br,wk),e(ft,$k),e(ft,fl),e(fl,kr),e(kr,xk),e(ft,Fk),e(ft,_l),e(_l,yr),e(yr,zk),e(Z,qk),e(Z,Ye),T(vr,Ye,null),e(Ye,Bk),e(Ye,_o),e(_o,jk),e(_o,gl),e(gl,Ck),e(_o,Mk),e(_o,bl),e(bl,Ek),e(_o,Pk),e(Ye,Ak),T(Gn,Ye,null),e(Ye,Sk),T(Wn,Ye,null),Cc=!0},p(o,[b]){const Tr={};b&2&&(Tr.$$scope={dirty:b,ctx:o}),xo.$set(Tr);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),zo.$set(kl);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:o}),qo.$set(yl);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:o}),Eo.$set(vl);const Un={};b&2&&(Un.$$scope={dirty:b,ctx:o}),Po.$set(Un);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:o}),Oo.$set(Tl);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),Io.$set(wl);const wr={};b&2&&(wr.$$scope={dirty:b,ctx:o}),Lo.$set(wr);const $l={};b&2&&($l.$$scope={dirty:b,ctx:o}),Do.$set($l);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:o}),Go.$set(xl);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:o}),Uo.$set(Fl);const $r={};b&2&&($r.$$scope={dirty:b,ctx:o}),Ro.$set($r);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:o}),Qo.$set(zl);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:o}),Ho.$set(ql);const go={};b&2&&(go.$$scope={dirty:b,ctx:o}),Vo.$set(go);const Bl={};b&2&&(Bl.$$scope={dirty:b,ctx:o}),Xo.$set(Bl);const jl={};b&2&&(jl.$$scope={dirty:b,ctx:o}),Ko.$set(jl);const Cl={};b&2&&(Cl.$$scope={dirty:b,ctx:o}),Zo.$set(Cl);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),tn.$set(bo);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:o}),nn.$set(Ml);const El={};b&2&&(El.$$scope={dirty:b,ctx:o}),an.$set(El);const xr={};b&2&&(xr.$$scope={dirty:b,ctx:o}),sn.$set(xr);const Pl={};b&2&&(Pl.$$scope={dirty:b,ctx:o}),dn.$set(Pl);const Al={};b&2&&(Al.$$scope={dirty:b,ctx:o}),ln.$set(Al);const Sl={};b&2&&(Sl.$$scope={dirty:b,ctx:o}),cn.$set(Sl);const ko={};b&2&&(ko.$$scope={dirty:b,ctx:o}),pn.$set(ko);const Fr={};b&2&&(Fr.$$scope={dirty:b,ctx:o}),hn.$set(Fr);const Ol={};b&2&&(Ol.$$scope={dirty:b,ctx:o}),mn.$set(Ol);const _t={};b&2&&(_t.$$scope={dirty:b,ctx:o}),_n.$set(_t);const Il={};b&2&&(Il.$$scope={dirty:b,ctx:o}),bn.$set(Il);const Nl={};b&2&&(Nl.$$scope={dirty:b,ctx:o}),yn.$set(Nl);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:o}),vn.$set(Ll);const Rn={};b&2&&(Rn.$$scope={dirty:b,ctx:o}),Tn.$set(Rn);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),$n.$set(Dl);const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:o}),Fn.$set(Gl);const zr={};b&2&&(zr.$$scope={dirty:b,ctx:o}),qn.$set(zr);const Wl={};b&2&&(Wl.$$scope={dirty:b,ctx:o}),Bn.$set(Wl);const Ul={};b&2&&(Ul.$$scope={dirty:b,ctx:o}),Cn.$set(Ul);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:o}),En.$set(Rl);const Re={};b&2&&(Re.$$scope={dirty:b,ctx:o}),An.$set(Re);const gt={};b&2&&(gt.$$scope={dirty:b,ctx:o}),Sn.$set(gt);const Ql={};b&2&&(Ql.$$scope={dirty:b,ctx:o}),In.$set(Ql);const Hl={};b&2&&(Hl.$$scope={dirty:b,ctx:o}),Ln.$set(Hl);const Vl={};b&2&&(Vl.$$scope={dirty:b,ctx:o}),Gn.$set(Vl);const yo={};b&2&&(yo.$$scope={dirty:b,ctx:o}),Wn.$set(yo)},i(o){Cc||(w(n.$$.fragment,o),w(ae.$$.fragment,o),w(Le.$$.fragment,o),w(pa.$$.fragment,o),w(ua.$$.fragment,o),w(ha.$$.fragment,o),w(ma.$$.fragment,o),w(fa.$$.fragment,o),w(xo.$$.fragment,o),w(ga.$$.fragment,o),w(ba.$$.fragment,o),w(zo.$$.fragment,o),w(qo.$$.fragment,o),w(va.$$.fragment,o),w(wa.$$.fragment,o),w($a.$$.fragment,o),w(xa.$$.fragment,o),w(za.$$.fragment,o),w(qa.$$.fragment,o),w(Eo.$$.fragment,o),w(Po.$$.fragment,o),w(Ma.$$.fragment,o),w(Ea.$$.fragment,o),w(Pa.$$.fragment,o),w(Ia.$$.fragment,o),w(Oo.$$.fragment,o),w(Io.$$.fragment,o),w(Na.$$.fragment,o),w(La.$$.fragment,o),w(Ua.$$.fragment,o),w(Lo.$$.fragment,o),w(Do.$$.fragment,o),w(Go.$$.fragment,o),w(Ra.$$.fragment,o),w(Qa.$$.fragment,o),w(Xa.$$.fragment,o),w(Uo.$$.fragment,o),w(Ro.$$.fragment,o),w(Qo.$$.fragment,o),w(Ho.$$.fragment,o),w(Vo.$$.fragment,o),w(Ka.$$.fragment,o),w(Za.$$.fragment,o),w(os.$$.fragment,o),w(Xo.$$.fragment,o),w(Ko.$$.fragment,o),w(Zo.$$.fragment,o),w(ns.$$.fragment,o),w(as.$$.fragment,o),w(ss.$$.fragment,o),w(tn.$$.fragment,o),w(rs.$$.fragment,o),w(is.$$.fragment,o),w(nn.$$.fragment,o),w(ps.$$.fragment,o),w(an.$$.fragment,o),w(sn.$$.fragment,o),w(us.$$.fragment,o),w(hs.$$.fragment,o),w(dn.$$.fragment,o),w(gs.$$.fragment,o),w(ln.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(bs.$$.fragment,o),w(ks.$$.fragment,o),w(zs.$$.fragment,o),w(hn.$$.fragment,o),w(mn.$$.fragment,o),w(qs.$$.fragment,o),w(_n.$$.fragment,o),w(Bs.$$.fragment,o),w(bn.$$.fragment,o),w(js.$$.fragment,o),w(Cs.$$.fragment,o),w(Ns.$$.fragment,o),w(yn.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w(Ls.$$.fragment,o),w($n.$$.fragment,o),w(Ds.$$.fragment,o),w(Fn.$$.fragment,o),w(Gs.$$.fragment,o),w(Ws.$$.fragment,o),w(Ks.$$.fragment,o),w(qn.$$.fragment,o),w(Bn.$$.fragment,o),w(Zs.$$.fragment,o),w(Cn.$$.fragment,o),w(Ys.$$.fragment,o),w(En.$$.fragment,o),w(er.$$.fragment,o),w(tr.$$.fragment,o),w(lr.$$.fragment,o),w(An.$$.fragment,o),w(Sn.$$.fragment,o),w(cr.$$.fragment,o),w(In.$$.fragment,o),w(pr.$$.fragment,o),w(Ln.$$.fragment,o),w(ur.$$.fragment,o),w(hr.$$.fragment,o),w(vr.$$.fragment,o),w(Gn.$$.fragment,o),w(Wn.$$.fragment,o),Cc=!0)},o(o){$(n.$$.fragment,o),$(ae.$$.fragment,o),$(Le.$$.fragment,o),$(pa.$$.fragment,o),$(ua.$$.fragment,o),$(ha.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(xo.$$.fragment,o),$(ga.$$.fragment,o),$(ba.$$.fragment,o),$(zo.$$.fragment,o),$(qo.$$.fragment,o),$(va.$$.fragment,o),$(wa.$$.fragment,o),$($a.$$.fragment,o),$(xa.$$.fragment,o),$(za.$$.fragment,o),$(qa.$$.fragment,o),$(Eo.$$.fragment,o),$(Po.$$.fragment,o),$(Ma.$$.fragment,o),$(Ea.$$.fragment,o),$(Pa.$$.fragment,o),$(Ia.$$.fragment,o),$(Oo.$$.fragment,o),$(Io.$$.fragment,o),$(Na.$$.fragment,o),$(La.$$.fragment,o),$(Ua.$$.fragment,o),$(Lo.$$.fragment,o),$(Do.$$.fragment,o),$(Go.$$.fragment,o),$(Ra.$$.fragment,o),$(Qa.$$.fragment,o),$(Xa.$$.fragment,o),$(Uo.$$.fragment,o),$(Ro.$$.fragment,o),$(Qo.$$.fragment,o),$(Ho.$$.fragment,o),$(Vo.$$.fragment,o),$(Ka.$$.fragment,o),$(Za.$$.fragment,o),$(os.$$.fragment,o),$(Xo.$$.fragment,o),$(Ko.$$.fragment,o),$(Zo.$$.fragment,o),$(ns.$$.fragment,o),$(as.$$.fragment,o),$(ss.$$.fragment,o),$(tn.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(nn.$$.fragment,o),$(ps.$$.fragment,o),$(an.$$.fragment,o),$(sn.$$.fragment,o),$(us.$$.fragment,o),$(hs.$$.fragment,o),$(dn.$$.fragment,o),$(gs.$$.fragment,o),$(ln.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(zs.$$.fragment,o),$(hn.$$.fragment,o),$(mn.$$.fragment,o),$(qs.$$.fragment,o),$(_n.$$.fragment,o),$(Bs.$$.fragment,o),$(bn.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(Ns.$$.fragment,o),$(yn.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(Ls.$$.fragment,o),$($n.$$.fragment,o),$(Ds.$$.fragment,o),$(Fn.$$.fragment,o),$(Gs.$$.fragment,o),$(Ws.$$.fragment,o),$(Ks.$$.fragment,o),$(qn.$$.fragment,o),$(Bn.$$.fragment,o),$(Zs.$$.fragment,o),$(Cn.$$.fragment,o),$(Ys.$$.fragment,o),$(En.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(lr.$$.fragment,o),$(An.$$.fragment,o),$(Sn.$$.fragment,o),$(cr.$$.fragment,o),$(In.$$.fragment,o),$(pr.$$.fragment,o),$(Ln.$$.fragment,o),$(ur.$$.fragment,o),$(hr.$$.fragment,o),$(vr.$$.fragment,o),$(Gn.$$.fragment,o),$(Wn.$$.fragment,o),Cc=!1},d(o){t(l),o&&t(g),o&&t(m),x(n),o&&t(O),o&&t(j),o&&t(Qe),o&&t(J),x(ae),o&&t(ce),o&&t(pe),o&&t(G),o&&t(ze),o&&t(He),o&&t(Y),o&&t(M),o&&t(H),o&&t(ue),o&&t(ve),x(Le),o&&t(Jl),o&&t(bt),o&&t(Xl),o&&t(Pt),x(pa),o&&t(Kl),o&&t(Be),o&&t(Zl),o&&t(It),x(ua),o&&t(Yl),o&&t(kt),o&&t(ec),x(ha,o),o&&t(tc),o&&t(Nt),x(ma),o&&t(oc),o&&t(Ge),x(fa),x(xo),o&&t(nc),o&&t(Gt),x(ga),o&&t(ac),o&&t(A),x(ba),x(zo),x(qo),x(va),x(wa),x($a),x(xa),o&&t(sc),o&&t(Wt),x(za),o&&t(rc),o&&t(U),x(qa),x(Eo),x(Po),x(Ma),o&&t(ic),o&&t(Ut),x(Ea),o&&t(dc),o&&t(We),x(Pa),x(Ia),x(Oo),x(Io),o&&t(lc),o&&t(Qt),x(Na),o&&t(cc),o&&t(Ue),x(La),x(Ua),x(Lo),x(Do),x(Go),o&&t(pc),o&&t(Vt),x(Ra),o&&t(uc),o&&t(Te),x(Qa),x(Xa),x(Uo),x(Ro),x(Qo),x(Ho),x(Vo),o&&t(hc),o&&t(Xt),x(Ka),o&&t(mc),o&&t(we),x(Za),x(os),x(Xo),x(Ko),x(Zo),o&&t(fc),o&&t(Yt),x(ns),o&&t(_c),o&&t(eo),x(as),x(ss),x(tn),o&&t(gc),o&&t(to),x(rs),o&&t(bc),o&&t($e),x(is),x(nn),x(ps),x(an),x(sn),o&&t(kc),o&&t(no),x(us),o&&t(yc),o&&t(xe),x(hs),x(dn),x(gs),x(ln),x(cn),x(pn),o&&t(vc),o&&t(so),x(bs),o&&t(Tc),o&&t(R),x(ks),x(zs),x(hn),x(mn),x(qs),x(_n),x(Bs),x(bn),o&&t(wc),o&&t(io),x(js),o&&t($c),o&&t(Q),x(Cs),x(Ns),x(yn),x(vn),x(Tn),x(Ls),x($n),x(Ds),x(Fn),o&&t(xc),o&&t(co),x(Gs),o&&t(Fc),o&&t(N),x(Ws),x(Ks),x(qn),x(Bn),x(Zs),x(Cn),x(Ys),x(En),o&&t(zc),o&&t(uo),x(er),o&&t(qc),o&&t(L),x(tr),x(lr),x(An),x(Sn),x(cr),x(In),x(pr),x(Ln),o&&t(Bc),o&&t(fo),x(ur),o&&t(jc),o&&t(Z),x(hr),x(vr),x(Gn),x(Wn)}}}const HT={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"},{local:"transformers.FlaxBartForCausalLM",title:"FlaxBartForCausalLM"}],title:"BART"};function VT(F){return eT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tw extends X1{constructor(l){super();K1(this,l,VT,QT,Z1,{})}}export{tw as default,HT as metadata};
