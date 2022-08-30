import{S as _w,i as gw,s as bw,e as a,k as h,w as y,t as i,M as kw,c as s,d as t,m as u,a as r,x as v,h as d,b as f,G as e,g as k,y as T,q as w,o as $,B as x,v as yw,L as P}from"../../chunks/vendor-hf-doc-builder.js";import{T as ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as B}from"../../chunks/Docstring-hf-doc-builder.js";import{C}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as V}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function vw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartModel, BartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Tw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),g=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function ww(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("When used with "),m=a("code"),c=i("is_split_into_words=True"),_=i(", this tokenizer will add a space before each word (even the first one).")},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"When used with "),m=s(p,"CODE",{});var q=r(m);c=d(q,"is_split_into_words=True"),q.forEach(t),_=d(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function $w(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){l=a("p"),g=i("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function xw(F){let l,g,m,c,_,n,p,q;return{c(){l=a("p"),g=i("When used with "),m=a("code"),c=i("is_split_into_words=True"),_=i(", this tokenizer needs to be instantiated with "),n=a("code"),p=i("add_prefix_space=True"),q=i(".")},l(ne){l=s(ne,"P",{});var O=r(l);g=d(O,"When used with "),m=s(O,"CODE",{});var j=r(m);c=d(j,"is_split_into_words=True"),j.forEach(t),_=d(O,", this tokenizer needs to be instantiated with "),n=s(O,"CODE",{});var le=r(n);p=d(le,"add_prefix_space=True"),le.forEach(t),q=d(O,"."),O.forEach(t)},m(ne,O){k(ne,l,O),e(l,g),e(l,m),e(m,c),e(l,_),e(l,n),e(n,p),e(l,q)},d(ne){ne&&t(l)}}}function Fw(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function zw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function qw(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Bw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
<span class="hljs-string">&#x27;PG&amp;E scheduled the blackouts in response to forecasts for high winds amid dry conditions&#x27;</span>`}}),{c(){l=a("p"),g=i("Summarization example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Summarization example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function jw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

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
[<span class="hljs-string">&#x27;not&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;great&#x27;</span>, <span class="hljs-string">&#x27;very&#x27;</span>]`}}),{c(){l=a("p"),g=i("Mask filling example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Mask filling example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Cw(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Mw(F){let l,g,m,c,_;return c=new C({props:{code:`import torch
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
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),g=i("Example of single-label classification:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example of single-label classification:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Ew(F){let l,g;return l=new C({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BartForSequenceClassification.from_pretrained("valhalla/bart-large-sst2", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;valhalla/bart-large-sst2&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.0</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),g=!0},p:P,i(m){g||(w(l.$$.fragment,m),g=!0)},o(m){$(l.$$.fragment,m),g=!1},d(m){x(l,m)}}}function Pw(F){let l,g,m,c,_;return c=new C({props:{code:`import torch
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
<span class="hljs-string">&#x27;POSITIVE&#x27;</span>`}}),{c(){l=a("p"),g=i("Example of multi-label classification:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example of multi-label classification:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Aw(F){let l,g;return l=new C({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),g=!0},p:P,i(m){g||(w(l.$$.fragment,m),g=!0)},o(m){$(l.$$.fragment,m),g=!1},d(m){x(l,m)}}}function Sw(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Ow(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
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
<span class="hljs-string">&#x27; nice puppet&#x27;</span>`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Iw(F){let l,g;return l=new C({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.59</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),g=!0},p:P,i(m){g||(w(l.$$.fragment,m),g=!0)},o(m){$(l.$$.fragment,m),g=!1},d(m){x(l,m)}}}function Nw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, BartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Lw(F){let l,g,m,c,_,n,p,q,ne,O,j,le,_e,tt,ge,be,ot,He,J,D,Oe,ae,S,I,nt,ce,pe,at,X,st,rt,G,qe,ke,Ve,Y,se,it,dt,K,lt,ye,Ie;return{c(){l=a("p"),g=i("TF 2.0 models accepts two formats as inputs:"),m=h(),c=a("ul"),_=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),p=h(),q=a("li"),ne=i("having all inputs as a list, tuple or dict in the first positional arguments."),O=h(),j=a("p"),le=i("This second option is useful when using "),_e=a("code"),tt=i("tf.keras.Model.fit"),ge=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=a("code"),ot=i("model(inputs)"),He=i("."),J=h(),D=a("p"),Oe=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=h(),S=a("ul"),I=a("li"),nt=i("a single Tensor with "),ce=a("code"),pe=i("input_ids"),at=i(" only and nothing else: "),X=a("code"),st=i("model(input_ids)"),rt=h(),G=a("li"),qe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=a("code"),Ve=i("model([input_ids, attention_mask])"),Y=i(" or "),se=a("code"),it=i("model([input_ids, attention_mask, token_type_ids])"),dt=h(),K=a("li"),lt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Ie=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var M=r(l);g=d(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=u(z),c=s(z,"UL",{});var H=r(c);_=s(H,"LI",{});var Ct=r(_);n=d(Ct,"having all inputs as keyword arguments (like PyTorch models), or"),Ct.forEach(t),p=u(H),q=s(H,"LI",{});var Ne=r(q);ne=d(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),H.forEach(t),O=u(z),j=s(z,"P",{});var re=r(j);le=d(re,"This second option is useful when using "),_e=s(re,"CODE",{});var Mt=r(_e);tt=d(Mt,"tf.keras.Model.fit"),Mt.forEach(t),ge=d(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=s(re,"CODE",{});var Le=r(be);ot=d(Le,"model(inputs)"),Le.forEach(t),He=d(re,"."),re.forEach(t),J=u(z),D=s(z,"P",{});var Et=r(D);Oe=d(Et,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Et.forEach(t),ae=u(z),S=s(z,"UL",{});var ie=r(S);I=s(ie,"LI",{});var he=r(I);nt=d(he,"a single Tensor with "),ce=s(he,"CODE",{});var ve=r(ce);pe=d(ve,"input_ids"),ve.forEach(t),at=d(he," only and nothing else: "),X=s(he,"CODE",{});var Be=r(X);st=d(Be,"model(input_ids)"),Be.forEach(t),he.forEach(t),rt=u(ie),G=s(ie,"LI",{});var de=r(G);qe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=s(de,"CODE",{});var De=r(ke);Ve=d(De,"model([input_ids, attention_mask])"),De.forEach(t),Y=d(de," or "),se=s(de,"CODE",{});var Pt=r(se);it=d(Pt,"model([input_ids, attention_mask, token_type_ids])"),Pt.forEach(t),de.forEach(t),dt=u(ie),K=s(ie,"LI",{});var Ge=r(K);lt=d(Ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(Ge,"CODE",{});var At=r(ye);Ie=d(At,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),At.forEach(t),Ge.forEach(t),ie.forEach(t)},m(z,M){k(z,l,M),e(l,g),k(z,m,M),k(z,c,M),e(c,_),e(_,n),e(c,p),e(c,q),e(q,ne),k(z,O,M),k(z,j,M),e(j,le),e(j,_e),e(_e,tt),e(j,ge),e(j,be),e(be,ot),e(j,He),k(z,J,M),k(z,D,M),e(D,Oe),k(z,ae,M),k(z,S,M),e(S,I),e(I,nt),e(I,ce),e(ce,pe),e(I,at),e(I,X),e(X,st),e(S,rt),e(S,G),e(G,qe),e(G,ke),e(ke,Ve),e(G,Y),e(G,se),e(se,it),e(S,dt),e(S,K),e(K,lt),e(K,ye),e(ye,Ie)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(O),z&&t(j),z&&t(J),z&&t(D),z&&t(ae),z&&t(S)}}}function Dw(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Gw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, TFBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Ww(F){let l,g,m,c,_,n,p,q,ne,O,j,le,_e,tt,ge,be,ot,He,J,D,Oe,ae,S,I,nt,ce,pe,at,X,st,rt,G,qe,ke,Ve,Y,se,it,dt,K,lt,ye,Ie;return{c(){l=a("p"),g=i("TF 2.0 models accepts two formats as inputs:"),m=h(),c=a("ul"),_=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),p=h(),q=a("li"),ne=i("having all inputs as a list, tuple or dict in the first positional arguments."),O=h(),j=a("p"),le=i("This second option is useful when using "),_e=a("code"),tt=i("tf.keras.Model.fit"),ge=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=a("code"),ot=i("model(inputs)"),He=i("."),J=h(),D=a("p"),Oe=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=h(),S=a("ul"),I=a("li"),nt=i("a single Tensor with "),ce=a("code"),pe=i("input_ids"),at=i(" only and nothing else: "),X=a("code"),st=i("model(input_ids)"),rt=h(),G=a("li"),qe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=a("code"),Ve=i("model([input_ids, attention_mask])"),Y=i(" or "),se=a("code"),it=i("model([input_ids, attention_mask, token_type_ids])"),dt=h(),K=a("li"),lt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Ie=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var M=r(l);g=d(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),m=u(z),c=s(z,"UL",{});var H=r(c);_=s(H,"LI",{});var Ct=r(_);n=d(Ct,"having all inputs as keyword arguments (like PyTorch models), or"),Ct.forEach(t),p=u(H),q=s(H,"LI",{});var Ne=r(q);ne=d(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),H.forEach(t),O=u(z),j=s(z,"P",{});var re=r(j);le=d(re,"This second option is useful when using "),_e=s(re,"CODE",{});var Mt=r(_e);tt=d(Mt,"tf.keras.Model.fit"),Mt.forEach(t),ge=d(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=s(re,"CODE",{});var Le=r(be);ot=d(Le,"model(inputs)"),Le.forEach(t),He=d(re,"."),re.forEach(t),J=u(z),D=s(z,"P",{});var Et=r(D);Oe=d(Et,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Et.forEach(t),ae=u(z),S=s(z,"UL",{});var ie=r(S);I=s(ie,"LI",{});var he=r(I);nt=d(he,"a single Tensor with "),ce=s(he,"CODE",{});var ve=r(ce);pe=d(ve,"input_ids"),ve.forEach(t),at=d(he," only and nothing else: "),X=s(he,"CODE",{});var Be=r(X);st=d(Be,"model(input_ids)"),Be.forEach(t),he.forEach(t),rt=u(ie),G=s(ie,"LI",{});var de=r(G);qe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=s(de,"CODE",{});var De=r(ke);Ve=d(De,"model([input_ids, attention_mask])"),De.forEach(t),Y=d(de," or "),se=s(de,"CODE",{});var Pt=r(se);it=d(Pt,"model([input_ids, attention_mask, token_type_ids])"),Pt.forEach(t),de.forEach(t),dt=u(ie),K=s(ie,"LI",{});var Ge=r(K);lt=d(Ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(Ge,"CODE",{});var At=r(ye);Ie=d(At,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),At.forEach(t),Ge.forEach(t),ie.forEach(t)},m(z,M){k(z,l,M),e(l,g),k(z,m,M),k(z,c,M),e(c,_),e(_,n),e(c,p),e(c,q),e(q,ne),k(z,O,M),k(z,j,M),e(j,le),e(j,_e),e(_e,tt),e(j,ge),e(j,be),e(be,ot),e(j,He),k(z,J,M),k(z,D,M),e(D,Oe),k(z,ae,M),k(z,S,M),e(S,I),e(I,nt),e(I,ce),e(ce,pe),e(I,at),e(I,X),e(X,st),e(S,rt),e(S,G),e(G,qe),e(G,ke),e(ke,Ve),e(G,Y),e(G,se),e(se,it),e(S,dt),e(S,K),e(K,lt),e(K,ye),e(ye,Ie)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(O),z&&t(j),z&&t(J),z&&t(D),z&&t(ae),z&&t(S)}}}function Uw(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Rw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),g=i("Summarization example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Summarization example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Qw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),g=i("Mask filling example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Mask filling example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Hw(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Vw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Jw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Xw(F){let l,g,m,c,_;return c=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Kw(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Zw(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),g=i("Summarization example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Summarization example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function Yw(F){let l,g,m,c,_;return c=new C({props:{code:`import jax
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),g=i("Mask filling example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Mask filling example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function e$(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function t$(F){let l,g,m,c,_;return c=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function o$(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function n$(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function a$(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function s$(F){let l,g,m,c,_;return c=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function r$(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function i$(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function d$(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function l$(F){let l,g,m,c,_;return c=new C({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function c$(F){let l,g,m,c,_;return{c(){l=a("p"),g=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(p,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,g),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function p$(F){let l,g,m,c,_;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){l=a("p"),g=i("Example:"),m=h(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);g=d(p,"Example:"),p.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,g),k(n,m,p),T(c,n,p),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){$(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),x(c,n)}}}function h$(F){let l,g,m,c,_,n,p,q,ne,O,j,le,_e,tt,ge,be,ot,He,J,D,Oe,ae,S,I,nt,ce,pe,at,X,st,rt,G,qe,ke,Ve,Y,se,it,dt,K,lt,ye,Ie,z,M,H,Ct,Ne,re,Mt,Le,Et,ie,he,ve,Be,de,De,Pt,Ge,At,tc,kt,ia,Up,da,Rp,Qp,Hp,ct,Vp,Mr,Jp,Xp,qi,Kp,Zp,la,Yp,eh,th,To,ca,oh,nh,pa,ah,sh,oc,St,wo,Bi,ha,rh,ji,ih,nc,je,pt,dh,Ci,lh,ch,Er,ph,hh,Pr,uh,mh,fh,Ot,_h,Ar,gh,bh,Mi,kh,yh,vh,It,Th,Ei,wh,$h,Pi,xh,Fh,zh,Sr,Or,qh,Bh,jh,Nt,Ch,Ai,Mh,Eh,Si,Ph,Ah,ac,Lt,$o,Oi,ua,Sh,Ii,Oh,sc,yt,Ih,Ni,Nh,Lh,Li,Dh,Gh,rc,ma,ic,Dt,xo,Di,fa,Wh,Gi,Uh,dc,We,_a,Rh,Gt,Qh,Ir,Hh,Vh,ga,Jh,Xh,Kh,Wt,Zh,Nr,Yh,eu,Lr,tu,ou,nu,Fo,lc,Ut,zo,Wi,ba,au,Ui,su,cc,A,ka,ru,Ri,iu,du,Qi,lu,cu,qo,pu,ya,hu,Hi,uu,mu,fu,Bo,_u,va,gu,Dr,bu,ku,yu,vt,Ta,vu,Vi,Tu,wu,wa,Gr,$u,Ji,xu,Fu,Wr,zu,Xi,qu,Bu,jo,$a,ju,Ki,Cu,Mu,Co,xa,Eu,Zi,Pu,Au,Mo,Fa,Su,za,Ou,Yi,Iu,Nu,pc,Rt,Eo,ed,qa,Lu,td,Du,hc,U,Ba,Gu,ja,Wu,od,Uu,Ru,Qu,nd,Hu,Vu,Po,Ju,Ca,Xu,ad,Ku,Zu,Yu,Ao,em,Ma,tm,Ur,om,nm,am,So,Ea,sm,sd,rm,uc,Qt,Oo,rd,Pa,im,id,dm,mc,Ue,Aa,lm,Sa,cm,Rr,pm,hm,um,Oa,mm,Ia,fm,_m,gm,Je,Na,bm,Ht,km,Qr,ym,vm,dd,Tm,wm,$m,Io,xm,No,fc,Vt,Lo,ld,La,Fm,cd,zm,_c,Re,Da,qm,Ga,Bm,Hr,jm,Cm,Mm,Wa,Em,Ua,Pm,Am,Sm,Ce,Ra,Om,Jt,Im,Vr,Nm,Lm,pd,Dm,Gm,Wm,Do,Um,Go,Rm,Wo,gc,Xt,Uo,hd,Qa,Qm,ud,Hm,bc,Te,Ha,Vm,md,Jm,Xm,Va,Km,Jr,Zm,Ym,ef,Ja,tf,Xa,of,nf,af,ee,Ka,sf,Kt,rf,Xr,df,lf,fd,cf,pf,hf,Ro,uf,Qo,mf,Ho,ff,Vo,_f,Jo,kc,Zt,Xo,_d,Za,gf,gd,bf,yc,we,Ya,kf,Yt,yf,bd,vf,Tf,kd,wf,$f,xf,es,Ff,Kr,zf,qf,Bf,ts,jf,os,Cf,Mf,Ef,Me,ns,Pf,eo,Af,Zr,Sf,Of,yd,If,Nf,Lf,Ko,Df,Zo,Gf,Yo,vc,to,en,vd,as,Wf,Td,Uf,Tc,$e,ss,Rf,wd,Qf,Hf,rs,Vf,Yr,Jf,Xf,Kf,is,Zf,ds,Yf,e_,t_,tn,ls,o_,on,wc,oo,nn,$d,cs,n_,xd,a_,$c,xe,ps,s_,hs,r_,ei,i_,d_,l_,us,c_,ms,p_,h_,u_,an,m_,Xe,fs,f_,no,__,ti,g_,b_,Fd,k_,y_,v_,sn,T_,rn,xc,ao,dn,zd,_s,w_,qd,$_,Fc,Fe,gs,x_,bs,F_,oi,z_,q_,B_,ks,j_,ys,C_,M_,E_,ln,P_,Ee,vs,A_,so,S_,ni,O_,I_,Bd,N_,L_,D_,cn,G_,pn,W_,hn,zc,ro,un,jd,Ts,U_,Cd,R_,qc,R,ws,Q_,$s,H_,ai,V_,J_,X_,xs,K_,Fs,Z_,Y_,eg,Md,tg,og,ht,Ed,zs,ng,ag,Pd,qs,sg,rg,Ad,Bs,ig,dg,Sd,js,lg,cg,Ke,Cs,pg,io,hg,Od,ug,mg,Id,fg,_g,gg,mn,bg,fn,kg,_n,Ms,yg,gn,vg,bn,Es,Tg,kn,Bc,lo,yn,Nd,Ps,wg,Ld,$g,jc,Q,As,xg,Ss,Fg,si,zg,qg,Bg,Os,jg,Is,Cg,Mg,Eg,Dd,Pg,Ag,ut,Gd,Ns,Sg,Og,Wd,Ls,Ig,Ng,Ud,Ds,Lg,Dg,Rd,Gs,Gg,Wg,Pe,Ws,Ug,co,Rg,Qd,Qg,Hg,Hd,Vg,Jg,Xg,vn,Kg,Tn,Zg,wn,Yg,$n,Us,eb,xn,tb,Fn,Rs,ob,zn,Cc,po,qn,Vd,Qs,nb,Jd,ab,Mc,N,Hs,sb,Xd,rb,ib,Vs,db,ri,lb,cb,pb,Js,hb,Xs,ub,mb,fb,Kd,_b,gb,mt,Zd,Ks,bb,kb,Yd,Zs,yb,vb,el,Ys,Tb,wb,tl,er,$b,xb,Ze,tr,Fb,ho,zb,ol,qb,Bb,nl,jb,Cb,Mb,Bn,Eb,jn,Pb,Cn,or,Ab,Mn,Sb,En,nr,Ob,Pn,Ec,uo,An,al,ar,Ib,sl,Nb,Pc,L,sr,Lb,mo,Db,rl,Gb,Wb,il,Ub,Rb,Qb,rr,Hb,ii,Vb,Jb,Xb,ir,Kb,dr,Zb,Yb,ek,dl,tk,ok,ft,ll,lr,nk,ak,cl,cr,sk,rk,pl,pr,ik,dk,hl,hr,lk,ck,Ye,ur,pk,fo,hk,ul,uk,mk,ml,fk,_k,gk,Sn,bk,On,kk,In,mr,yk,Nn,vk,Ln,fr,Tk,Dn,Ac,_o,Gn,fl,_r,wk,_l,$k,Sc,Z,gr,xk,gl,Fk,zk,br,qk,di,Bk,jk,Ck,kr,Mk,yr,Ek,Pk,Ak,bl,Sk,Ok,_t,kl,vr,Ik,Nk,yl,Tr,Lk,Dk,vl,wr,Gk,Wk,Tl,$r,Uk,Rk,et,xr,Qk,go,Hk,wl,Vk,Jk,$l,Xk,Kk,Zk,Wn,Yk,Un,Oc;return n=new V({}),ae=new V({}),De=new V({}),ha=new V({}),ua=new V({}),ma=new C({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

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
]`}}),fa=new V({}),_a=new B({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/configuration_bart.py#L35"}}),Fo=new E({props:{anchor:"transformers.BartConfig.example",$$slots:{default:[vw]},$$scope:{ctx:F}}}),ba=new V({}),ka=new B({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L101"}}),qo=new E({props:{anchor:"transformers.BartTokenizer.example",$$slots:{default:[Tw]},$$scope:{ctx:F}}}),Bo=new ze({props:{$$slots:{default:[ww]},$$scope:{ctx:F}}}),Ta=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new B({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L303"}}),xa=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fa=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qa=new V({}),Ba=new B({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart_fast.py#L70"}}),Po=new E({props:{anchor:"transformers.BartTokenizerFast.example",$$slots:{default:[$w]},$$scope:{ctx:F}}}),Ao=new ze({props:{$$slots:{default:[xw]},$$scope:{ctx:F}}}),Ea=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart_fast.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pa=new V({}),Aa=new B({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1152"}}),Na=new B({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1179",returnDescription:`
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
`}}),Io=new ze({props:{$$slots:{default:[Fw]},$$scope:{ctx:F}}}),No=new E({props:{anchor:"transformers.BartModel.forward.example",$$slots:{default:[zw]},$$scope:{ctx:F}}}),La=new V({}),Da=new B({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1279"}}),Ra=new B({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1318",returnDescription:`
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
`}}),Do=new ze({props:{$$slots:{default:[qw]},$$scope:{ctx:F}}}),Go=new E({props:{anchor:"transformers.BartForConditionalGeneration.forward.example",$$slots:{default:[Bw]},$$scope:{ctx:F}}}),Wo=new E({props:{anchor:"transformers.BartForConditionalGeneration.forward.example-2",$$slots:{default:[jw]},$$scope:{ctx:F}}}),Qa=new V({}),Ha=new B({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1448"}}),Ka=new B({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1461",returnDescription:`
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
`}}),Ro=new ze({props:{$$slots:{default:[Cw]},$$scope:{ctx:F}}}),Qo=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example",$$slots:{default:[Mw]},$$scope:{ctx:F}}}),Ho=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-2",$$slots:{default:[Ew]},$$scope:{ctx:F}}}),Vo=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-3",$$slots:{default:[Pw]},$$scope:{ctx:F}}}),Jo=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-4",$$slots:{default:[Aw]},$$scope:{ctx:F}}}),Za=new V({}),Ya=new B({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1575"}}),ns=new B({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1587",returnDescription:`
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
`}}),Ko=new ze({props:{$$slots:{default:[Sw]},$$scope:{ctx:F}}}),Zo=new E({props:{anchor:"transformers.BartForQuestionAnswering.forward.example",$$slots:{default:[Ow]},$$scope:{ctx:F}}}),Yo=new E({props:{anchor:"transformers.BartForQuestionAnswering.forward.example-2",$$slots:{default:[Iw]},$$scope:{ctx:F}}}),as=new V({}),ss=new B({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1711"}}),ls=new B({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_bart.py#L1742",returnDescription:`
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
`}}),on=new E({props:{anchor:"transformers.BartForCausalLM.forward.example",$$slots:{default:[Nw]},$$scope:{ctx:F}}}),cs=new V({}),ps=new B({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1167"}}),an=new ze({props:{$$slots:{default:[Lw]},$$scope:{ctx:F}}}),fs=new B({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1182",returnDescription:`
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
`}}),sn=new ze({props:{$$slots:{default:[Dw]},$$scope:{ctx:F}}}),rn=new E({props:{anchor:"transformers.TFBartModel.call.example",$$slots:{default:[Gw]},$$scope:{ctx:F}}}),_s=new V({}),gs=new B({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1258"}}),ln=new ze({props:{$$slots:{default:[Ww]},$$scope:{ctx:F}}}),vs=new B({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_tf_bart.py#L1293",returnDescription:`
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
`}}),cn=new ze({props:{$$slots:{default:[Uw]},$$scope:{ctx:F}}}),pn=new E({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example",$$slots:{default:[Rw]},$$scope:{ctx:F}}}),hn=new E({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example-2",$$slots:{default:[Qw]},$$scope:{ctx:F}}}),Ts=new V({}),ws=new B({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1241"}}),Cs=new B({props:{name:"__call__",anchor:"transformers.FlaxBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),mn=new ze({props:{$$slots:{default:[Hw]},$$scope:{ctx:F}}}),fn=new E({props:{anchor:"transformers.FlaxBartModel.__call__.example",$$slots:{default:[Vw]},$$scope:{ctx:F}}}),Ms=new B({props:{name:"encode",anchor:"transformers.FlaxBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),gn=new E({props:{anchor:"transformers.FlaxBartModel.encode.example",$$slots:{default:[Jw]},$$scope:{ctx:F}}}),Es=new B({props:{name:"decode",anchor:"transformers.FlaxBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),kn=new E({props:{anchor:"transformers.FlaxBartModel.decode.example",$$slots:{default:[Xw]},$$scope:{ctx:F}}}),Ps=new V({}),As=new B({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1327"}}),Ws=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),vn=new ze({props:{$$slots:{default:[Kw]},$$scope:{ctx:F}}}),Tn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example",$$slots:{default:[Zw]},$$scope:{ctx:F}}}),wn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example-2",$$slots:{default:[Yw]},$$scope:{ctx:F}}}),Us=new B({props:{name:"encode",anchor:"transformers.FlaxBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),xn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.encode.example",$$slots:{default:[e$]},$$scope:{ctx:F}}}),Rs=new B({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),zn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.decode.example",$$slots:{default:[t$]},$$scope:{ctx:F}}}),Qs=new V({}),Hs=new B({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1640"}}),tr=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Bn=new ze({props:{$$slots:{default:[o$]},$$scope:{ctx:F}}}),jn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.__call__.example",$$slots:{default:[n$]},$$scope:{ctx:F}}}),or=new B({props:{name:"encode",anchor:"transformers.FlaxBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Mn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.encode.example",$$slots:{default:[a$]},$$scope:{ctx:F}}}),nr=new B({props:{name:"decode",anchor:"transformers.FlaxBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Pn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.decode.example",$$slots:{default:[s$]},$$scope:{ctx:F}}}),ar=new V({}),sr=new B({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1727"}}),ur=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Sn=new ze({props:{$$slots:{default:[r$]},$$scope:{ctx:F}}}),On=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.example",$$slots:{default:[i$]},$$scope:{ctx:F}}}),mr=new B({props:{name:"encode",anchor:"transformers.FlaxBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Nn=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.encode.example",$$slots:{default:[d$]},$$scope:{ctx:F}}}),fr=new B({props:{name:"decode",anchor:"transformers.FlaxBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Dn=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.decode.example",$$slots:{default:[l$]},$$scope:{ctx:F}}}),_r=new V({}),gr=new B({props:{name:"class transformers.FlaxBartForCausalLM",anchor:"transformers.FlaxBartForCausalLM",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/modeling_flax_bart.py#L1964"}}),xr=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Wn=new ze({props:{$$slots:{default:[c$]},$$scope:{ctx:F}}}),Un=new E({props:{anchor:"transformers.FlaxBartForCausalLM.__call__.example",$$slots:{default:[p$]},$$scope:{ctx:F}}}),{c(){l=a("meta"),g=h(),m=a("h1"),c=a("a"),_=a("span"),y(n.$$.fragment),p=h(),q=a("span"),ne=i("BART"),O=h(),j=a("p"),le=a("strong"),_e=i("DISCLAIMER:"),tt=i(" If you see something strange, file a "),ge=a("a"),be=i("Github Issue"),ot=i(` and assign
@patrickvonplaten`),He=h(),J=a("h2"),D=a("a"),Oe=a("span"),y(ae.$$.fragment),S=h(),I=a("span"),nt=i("Overview"),ce=h(),pe=a("p"),at=i("The Bart model was proposed in "),X=a("a"),st=i(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),rt=i(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),G=h(),qe=a("p"),ke=i("According to the abstract,"),Ve=h(),Y=a("ul"),se=a("li"),it=i(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),dt=h(),K=a("li"),lt=i(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),ye=h(),Ie=a("li"),z=i(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),M=h(),H=a("p"),Ct=i("This model was contributed by "),Ne=a("a"),re=i("sshleifer"),Mt=i(". The Authors\u2019 code can be found "),Le=a("a"),Et=i("here"),ie=i("."),he=h(),ve=a("h3"),Be=a("a"),de=a("span"),y(De.$$.fragment),Pt=h(),Ge=a("span"),At=i("Examples"),tc=h(),kt=a("ul"),ia=a("li"),Up=i(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),da=a("a"),Rp=i("examples/pytorch/summarization/"),Qp=i("."),Hp=h(),ct=a("li"),Vp=i("An example of how to train "),Mr=a("a"),Jp=i("BartForConditionalGeneration"),Xp=i(" with a Hugging Face "),qi=a("code"),Kp=i("datasets"),Zp=i(`
object can be found in this `),la=a("a"),Yp=i("forum discussion"),eh=i("."),th=h(),To=a("li"),ca=a("a"),oh=i("Distilled checkpoints"),nh=i(" are described in this "),pa=a("a"),ah=i("paper"),sh=i("."),oc=h(),St=a("h2"),wo=a("a"),Bi=a("span"),y(ha.$$.fragment),rh=h(),ji=a("span"),ih=i("Implementation Notes"),nc=h(),je=a("ul"),pt=a("li"),dh=i("Bart doesn\u2019t use "),Ci=a("code"),lh=i("token_type_ids"),ch=i(" for sequence classification. Use "),Er=a("a"),ph=i("BartTokenizer"),hh=i(` or
`),Pr=a("a"),uh=i("encode()"),mh=i(" to get the proper splitting."),fh=h(),Ot=a("li"),_h=i("The forward pass of "),Ar=a("a"),gh=i("BartModel"),bh=i(" will create the "),Mi=a("code"),kh=i("decoder_input_ids"),yh=i(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),vh=h(),It=a("li"),Th=i(`Model predictions are intended to be identical to the original implementation when
`),Ei=a("code"),wh=i("forced_bos_token_id=0"),$h=i(`. This only works, however, if the string you pass to
`),Pi=a("code"),xh=i("fairseq.encode"),Fh=i(" starts with a space."),zh=h(),Sr=a("li"),Or=a("a"),qh=i("generate()"),Bh=i(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),jh=h(),Nt=a("li"),Ch=i("Models that load the "),Ai=a("em"),Mh=i("facebook/bart-large-cnn"),Eh=i(" weights will not have a "),Si=a("code"),Ph=i("mask_token_id"),Ah=i(`, or be able to perform
mask-filling tasks.`),ac=h(),Lt=a("h2"),$o=a("a"),Oi=a("span"),y(ua.$$.fragment),Sh=h(),Ii=a("span"),Oh=i("Mask Filling"),sc=h(),yt=a("p"),Ih=i("The "),Ni=a("code"),Nh=i("facebook/bart-base"),Lh=i(" and "),Li=a("code"),Dh=i("facebook/bart-large"),Gh=i(" checkpoints can be used to fill multi-token masks."),rc=h(),y(ma.$$.fragment),ic=h(),Dt=a("h2"),xo=a("a"),Di=a("span"),y(fa.$$.fragment),Wh=h(),Gi=a("span"),Uh=i("BartConfig"),dc=h(),We=a("div"),y(_a.$$.fragment),Rh=h(),Gt=a("p"),Qh=i("This is the configuration class to store the configuration of a "),Ir=a("a"),Hh=i("BartModel"),Vh=i(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),ga=a("a"),Jh=i("facebook/bart-large"),Xh=i(" architecture."),Kh=h(),Wt=a("p"),Zh=i("Configuration objects inherit from "),Nr=a("a"),Yh=i("PretrainedConfig"),eu=i(` and can be used to control the model outputs. Read the
documentation from `),Lr=a("a"),tu=i("PretrainedConfig"),ou=i(" for more information."),nu=h(),y(Fo.$$.fragment),lc=h(),Ut=a("h2"),zo=a("a"),Wi=a("span"),y(ba.$$.fragment),au=h(),Ui=a("span"),su=i("BartTokenizer"),cc=h(),A=a("div"),y(ka.$$.fragment),ru=h(),Ri=a("p"),iu=i("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),du=h(),Qi=a("p"),lu=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),cu=h(),y(qo.$$.fragment),pu=h(),ya=a("p"),hu=i("You can get around that behavior by passing "),Hi=a("code"),uu=i("add_prefix_space=True"),mu=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),fu=h(),y(Bo.$$.fragment),_u=h(),va=a("p"),gu=i("This tokenizer inherits from "),Dr=a("a"),bu=i("PreTrainedTokenizer"),ku=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yu=h(),vt=a("div"),y(Ta.$$.fragment),vu=h(),Vi=a("p"),Tu=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),wu=h(),wa=a("ul"),Gr=a("li"),$u=i("single sequence: "),Ji=a("code"),xu=i("<s> X </s>"),Fu=h(),Wr=a("li"),zu=i("pair of sequences: "),Xi=a("code"),qu=i("<s> A </s></s> B </s>"),Bu=h(),jo=a("div"),y($a.$$.fragment),ju=h(),Ki=a("p"),Cu=i("Converts a sequence of tokens (string) in a single string."),Mu=h(),Co=a("div"),y(xa.$$.fragment),Eu=h(),Zi=a("p"),Pu=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Au=h(),Mo=a("div"),y(Fa.$$.fragment),Su=h(),za=a("p"),Ou=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Yi=a("code"),Iu=i("prepare_for_model"),Nu=i(" method."),pc=h(),Rt=a("h2"),Eo=a("a"),ed=a("span"),y(qa.$$.fragment),Lu=h(),td=a("span"),Du=i("BartTokenizerFast"),hc=h(),U=a("div"),y(Ba.$$.fragment),Gu=h(),ja=a("p"),Wu=i("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),od=a("em"),Uu=i("tokenizers"),Ru=i(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Qu=h(),nd=a("p"),Hu=i("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Vu=h(),y(Po.$$.fragment),Ju=h(),Ca=a("p"),Xu=i("You can get around that behavior by passing "),ad=a("code"),Ku=i("add_prefix_space=True"),Zu=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Yu=h(),y(Ao.$$.fragment),em=h(),Ma=a("p"),tm=i("This tokenizer inherits from "),Ur=a("a"),om=i("PreTrainedTokenizerFast"),nm=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),am=h(),So=a("div"),y(Ea.$$.fragment),sm=h(),sd=a("p"),rm=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),uc=h(),Qt=a("h2"),Oo=a("a"),rd=a("span"),y(Pa.$$.fragment),im=h(),id=a("span"),dm=i("BartModel"),mc=h(),Ue=a("div"),y(Aa.$$.fragment),lm=h(),Sa=a("p"),cm=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Rr=a("a"),pm=i("PreTrainedModel"),hm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),um=h(),Oa=a("p"),mm=i("This model is also a PyTorch "),Ia=a("a"),fm=i("torch.nn.Module"),_m=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gm=h(),Je=a("div"),y(Na.$$.fragment),bm=h(),Ht=a("p"),km=i("The "),Qr=a("a"),ym=i("BartModel"),vm=i(" forward method, overrides the "),dd=a("code"),Tm=i("__call__"),wm=i(" special method."),$m=h(),y(Io.$$.fragment),xm=h(),y(No.$$.fragment),fc=h(),Vt=a("h2"),Lo=a("a"),ld=a("span"),y(La.$$.fragment),Fm=h(),cd=a("span"),zm=i("BartForConditionalGeneration"),_c=h(),Re=a("div"),y(Da.$$.fragment),qm=h(),Ga=a("p"),Bm=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Hr=a("a"),jm=i("PreTrainedModel"),Cm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mm=h(),Wa=a("p"),Em=i("This model is also a PyTorch "),Ua=a("a"),Pm=i("torch.nn.Module"),Am=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sm=h(),Ce=a("div"),y(Ra.$$.fragment),Om=h(),Jt=a("p"),Im=i("The "),Vr=a("a"),Nm=i("BartForConditionalGeneration"),Lm=i(" forward method, overrides the "),pd=a("code"),Dm=i("__call__"),Gm=i(" special method."),Wm=h(),y(Do.$$.fragment),Um=h(),y(Go.$$.fragment),Rm=h(),y(Wo.$$.fragment),gc=h(),Xt=a("h2"),Uo=a("a"),hd=a("span"),y(Qa.$$.fragment),Qm=h(),ud=a("span"),Hm=i("BartForSequenceClassification"),bc=h(),Te=a("div"),y(Ha.$$.fragment),Vm=h(),md=a("p"),Jm=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Xm=h(),Va=a("p"),Km=i("This model inherits from "),Jr=a("a"),Zm=i("PreTrainedModel"),Ym=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ef=h(),Ja=a("p"),tf=i("This model is also a PyTorch "),Xa=a("a"),of=i("torch.nn.Module"),nf=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),af=h(),ee=a("div"),y(Ka.$$.fragment),sf=h(),Kt=a("p"),rf=i("The "),Xr=a("a"),df=i("BartForSequenceClassification"),lf=i(" forward method, overrides the "),fd=a("code"),cf=i("__call__"),pf=i(" special method."),hf=h(),y(Ro.$$.fragment),uf=h(),y(Qo.$$.fragment),mf=h(),y(Ho.$$.fragment),ff=h(),y(Vo.$$.fragment),_f=h(),y(Jo.$$.fragment),kc=h(),Zt=a("h2"),Xo=a("a"),_d=a("span"),y(Za.$$.fragment),gf=h(),gd=a("span"),bf=i("BartForQuestionAnswering"),yc=h(),we=a("div"),y(Ya.$$.fragment),kf=h(),Yt=a("p"),yf=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),bd=a("code"),vf=i("span start logits"),Tf=i(" and "),kd=a("code"),wf=i("span end logits"),$f=i(")."),xf=h(),es=a("p"),Ff=i("This model inherits from "),Kr=a("a"),zf=i("PreTrainedModel"),qf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bf=h(),ts=a("p"),jf=i("This model is also a PyTorch "),os=a("a"),Cf=i("torch.nn.Module"),Mf=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ef=h(),Me=a("div"),y(ns.$$.fragment),Pf=h(),eo=a("p"),Af=i("The "),Zr=a("a"),Sf=i("BartForQuestionAnswering"),Of=i(" forward method, overrides the "),yd=a("code"),If=i("__call__"),Nf=i(" special method."),Lf=h(),y(Ko.$$.fragment),Df=h(),y(Zo.$$.fragment),Gf=h(),y(Yo.$$.fragment),vc=h(),to=a("h2"),en=a("a"),vd=a("span"),y(as.$$.fragment),Wf=h(),Td=a("span"),Uf=i("BartForCausalLM"),Tc=h(),$e=a("div"),y(ss.$$.fragment),Rf=h(),wd=a("p"),Qf=i("BART decoder with with a language modeling head on top (linear layer with weights tied to the input embeddings)."),Hf=h(),rs=a("p"),Vf=i("This model inherits from "),Yr=a("a"),Jf=i("PreTrainedModel"),Xf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kf=h(),is=a("p"),Zf=i("This model is also a PyTorch "),ds=a("a"),Yf=i("torch.nn.Module"),e_=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t_=h(),tn=a("div"),y(ls.$$.fragment),o_=h(),y(on.$$.fragment),wc=h(),oo=a("h2"),nn=a("a"),$d=a("span"),y(cs.$$.fragment),n_=h(),xd=a("span"),a_=i("TFBartModel"),$c=h(),xe=a("div"),y(ps.$$.fragment),s_=h(),hs=a("p"),r_=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ei=a("a"),i_=i("TFPreTrainedModel"),d_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),l_=h(),us=a("p"),c_=i("This model is also a "),ms=a("a"),p_=i("tf.keras.Model"),h_=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),u_=h(),y(an.$$.fragment),m_=h(),Xe=a("div"),y(fs.$$.fragment),f_=h(),no=a("p"),__=i("The "),ti=a("a"),g_=i("TFBartModel"),b_=i(" forward method, overrides the "),Fd=a("code"),k_=i("__call__"),y_=i(" special method."),v_=h(),y(sn.$$.fragment),T_=h(),y(rn.$$.fragment),xc=h(),ao=a("h2"),dn=a("a"),zd=a("span"),y(_s.$$.fragment),w_=h(),qd=a("span"),$_=i("TFBartForConditionalGeneration"),Fc=h(),Fe=a("div"),y(gs.$$.fragment),x_=h(),bs=a("p"),F_=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),oi=a("a"),z_=i("TFPreTrainedModel"),q_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B_=h(),ks=a("p"),j_=i("This model is also a "),ys=a("a"),C_=i("tf.keras.Model"),M_=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),E_=h(),y(ln.$$.fragment),P_=h(),Ee=a("div"),y(vs.$$.fragment),A_=h(),so=a("p"),S_=i("The "),ni=a("a"),O_=i("TFBartForConditionalGeneration"),I_=i(" forward method, overrides the "),Bd=a("code"),N_=i("__call__"),L_=i(" special method."),D_=h(),y(cn.$$.fragment),G_=h(),y(pn.$$.fragment),W_=h(),y(hn.$$.fragment),zc=h(),ro=a("h2"),un=a("a"),jd=a("span"),y(Ts.$$.fragment),U_=h(),Cd=a("span"),R_=i("FlaxBartModel"),qc=h(),R=a("div"),y(ws.$$.fragment),Q_=h(),$s=a("p"),H_=i(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ai=a("a"),V_=i("FlaxPreTrainedModel"),J_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),X_=h(),xs=a("p"),K_=i(`This model is also a Flax Linen
`),Fs=a("a"),Z_=i("flax.nn.Module"),Y_=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),eg=h(),Md=a("p"),tg=i("Finally, this model supports inherent JAX features such as:"),og=h(),ht=a("ul"),Ed=a("li"),zs=a("a"),ng=i("Just-In-Time (JIT) compilation"),ag=h(),Pd=a("li"),qs=a("a"),sg=i("Automatic Differentiation"),rg=h(),Ad=a("li"),Bs=a("a"),ig=i("Vectorization"),dg=h(),Sd=a("li"),js=a("a"),lg=i("Parallelization"),cg=h(),Ke=a("div"),y(Cs.$$.fragment),pg=h(),io=a("p"),hg=i("The "),Od=a("code"),ug=i("FlaxBartPreTrainedModel"),mg=i(" forward method, overrides the "),Id=a("code"),fg=i("__call__"),_g=i(" special method."),gg=h(),y(mn.$$.fragment),bg=h(),y(fn.$$.fragment),kg=h(),_n=a("div"),y(Ms.$$.fragment),yg=h(),y(gn.$$.fragment),vg=h(),bn=a("div"),y(Es.$$.fragment),Tg=h(),y(kn.$$.fragment),Bc=h(),lo=a("h2"),yn=a("a"),Nd=a("span"),y(Ps.$$.fragment),wg=h(),Ld=a("span"),$g=i("FlaxBartForConditionalGeneration"),jc=h(),Q=a("div"),y(As.$$.fragment),xg=h(),Ss=a("p"),Fg=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),si=a("a"),zg=i("FlaxPreTrainedModel"),qg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bg=h(),Os=a("p"),jg=i(`This model is also a Flax Linen
`),Is=a("a"),Cg=i("flax.nn.Module"),Mg=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Eg=h(),Dd=a("p"),Pg=i("Finally, this model supports inherent JAX features such as:"),Ag=h(),ut=a("ul"),Gd=a("li"),Ns=a("a"),Sg=i("Just-In-Time (JIT) compilation"),Og=h(),Wd=a("li"),Ls=a("a"),Ig=i("Automatic Differentiation"),Ng=h(),Ud=a("li"),Ds=a("a"),Lg=i("Vectorization"),Dg=h(),Rd=a("li"),Gs=a("a"),Gg=i("Parallelization"),Wg=h(),Pe=a("div"),y(Ws.$$.fragment),Ug=h(),co=a("p"),Rg=i("The "),Qd=a("code"),Qg=i("FlaxBartPreTrainedModel"),Hg=i(" forward method, overrides the "),Hd=a("code"),Vg=i("__call__"),Jg=i(" special method."),Xg=h(),y(vn.$$.fragment),Kg=h(),y(Tn.$$.fragment),Zg=h(),y(wn.$$.fragment),Yg=h(),$n=a("div"),y(Us.$$.fragment),eb=h(),y(xn.$$.fragment),tb=h(),Fn=a("div"),y(Rs.$$.fragment),ob=h(),y(zn.$$.fragment),Cc=h(),po=a("h2"),qn=a("a"),Vd=a("span"),y(Qs.$$.fragment),nb=h(),Jd=a("span"),ab=i("FlaxBartForSequenceClassification"),Mc=h(),N=a("div"),y(Hs.$$.fragment),sb=h(),Xd=a("p"),rb=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ib=h(),Vs=a("p"),db=i("This model inherits from "),ri=a("a"),lb=i("FlaxPreTrainedModel"),cb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pb=h(),Js=a("p"),hb=i(`This model is also a Flax Linen
`),Xs=a("a"),ub=i("flax.nn.Module"),mb=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fb=h(),Kd=a("p"),_b=i("Finally, this model supports inherent JAX features such as:"),gb=h(),mt=a("ul"),Zd=a("li"),Ks=a("a"),bb=i("Just-In-Time (JIT) compilation"),kb=h(),Yd=a("li"),Zs=a("a"),yb=i("Automatic Differentiation"),vb=h(),el=a("li"),Ys=a("a"),Tb=i("Vectorization"),wb=h(),tl=a("li"),er=a("a"),$b=i("Parallelization"),xb=h(),Ze=a("div"),y(tr.$$.fragment),Fb=h(),ho=a("p"),zb=i("The "),ol=a("code"),qb=i("FlaxBartPreTrainedModel"),Bb=i(" forward method, overrides the "),nl=a("code"),jb=i("__call__"),Cb=i(" special method."),Mb=h(),y(Bn.$$.fragment),Eb=h(),y(jn.$$.fragment),Pb=h(),Cn=a("div"),y(or.$$.fragment),Ab=h(),y(Mn.$$.fragment),Sb=h(),En=a("div"),y(nr.$$.fragment),Ob=h(),y(Pn.$$.fragment),Ec=h(),uo=a("h2"),An=a("a"),al=a("span"),y(ar.$$.fragment),Ib=h(),sl=a("span"),Nb=i("FlaxBartForQuestionAnswering"),Pc=h(),L=a("div"),y(sr.$$.fragment),Lb=h(),mo=a("p"),Db=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),rl=a("code"),Gb=i("span start logits"),Wb=i(" and "),il=a("code"),Ub=i("span end logits"),Rb=i(")."),Qb=h(),rr=a("p"),Hb=i("This model inherits from "),ii=a("a"),Vb=i("FlaxPreTrainedModel"),Jb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xb=h(),ir=a("p"),Kb=i(`This model is also a Flax Linen
`),dr=a("a"),Zb=i("flax.nn.Module"),Yb=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ek=h(),dl=a("p"),tk=i("Finally, this model supports inherent JAX features such as:"),ok=h(),ft=a("ul"),ll=a("li"),lr=a("a"),nk=i("Just-In-Time (JIT) compilation"),ak=h(),cl=a("li"),cr=a("a"),sk=i("Automatic Differentiation"),rk=h(),pl=a("li"),pr=a("a"),ik=i("Vectorization"),dk=h(),hl=a("li"),hr=a("a"),lk=i("Parallelization"),ck=h(),Ye=a("div"),y(ur.$$.fragment),pk=h(),fo=a("p"),hk=i("The "),ul=a("code"),uk=i("FlaxBartPreTrainedModel"),mk=i(" forward method, overrides the "),ml=a("code"),fk=i("__call__"),_k=i(" special method."),gk=h(),y(Sn.$$.fragment),bk=h(),y(On.$$.fragment),kk=h(),In=a("div"),y(mr.$$.fragment),yk=h(),y(Nn.$$.fragment),vk=h(),Ln=a("div"),y(fr.$$.fragment),Tk=h(),y(Dn.$$.fragment),Ac=h(),_o=a("h2"),Gn=a("a"),fl=a("span"),y(_r.$$.fragment),wk=h(),_l=a("span"),$k=i("FlaxBartForCausalLM"),Sc=h(),Z=a("div"),y(gr.$$.fragment),xk=h(),gl=a("p"),Fk=i(`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),zk=h(),br=a("p"),qk=i("This model inherits from "),di=a("a"),Bk=i("FlaxPreTrainedModel"),jk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ck=h(),kr=a("p"),Mk=i(`This model is also a Flax Linen
`),yr=a("a"),Ek=i("flax.nn.Module"),Pk=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ak=h(),bl=a("p"),Sk=i("Finally, this model supports inherent JAX features such as:"),Ok=h(),_t=a("ul"),kl=a("li"),vr=a("a"),Ik=i("Just-In-Time (JIT) compilation"),Nk=h(),yl=a("li"),Tr=a("a"),Lk=i("Automatic Differentiation"),Dk=h(),vl=a("li"),wr=a("a"),Gk=i("Vectorization"),Wk=h(),Tl=a("li"),$r=a("a"),Uk=i("Parallelization"),Rk=h(),et=a("div"),y(xr.$$.fragment),Qk=h(),go=a("p"),Hk=i("The "),wl=a("code"),Vk=i("FlaxBartDecoderPreTrainedModel"),Jk=i(" forward method, overrides the "),$l=a("code"),Xk=i("__call__"),Kk=i(" special method."),Zk=h(),y(Wn.$$.fragment),Yk=h(),y(Un.$$.fragment),this.h()},l(o){const b=kw('[data-svelte="svelte-1phssyn"]',document.head);l=s(b,"META",{name:!0,content:!0}),b.forEach(t),g=u(o),m=s(o,"H1",{class:!0});var Fr=r(m);c=s(Fr,"A",{id:!0,class:!0,href:!0});var xl=r(c);_=s(xl,"SPAN",{});var Fl=r(_);v(n.$$.fragment,Fl),Fl.forEach(t),xl.forEach(t),p=u(Fr),q=s(Fr,"SPAN",{});var zl=r(q);ne=d(zl,"BART"),zl.forEach(t),Fr.forEach(t),O=u(o),j=s(o,"P",{});var Rn=r(j);le=s(Rn,"STRONG",{});var ql=r(le);_e=d(ql,"DISCLAIMER:"),ql.forEach(t),tt=d(Rn," If you see something strange, file a "),ge=s(Rn,"A",{href:!0,rel:!0});var Bl=r(ge);be=d(Bl,"Github Issue"),Bl.forEach(t),ot=d(Rn,` and assign
@patrickvonplaten`),Rn.forEach(t),He=u(o),J=s(o,"H2",{class:!0});var zr=r(J);D=s(zr,"A",{id:!0,class:!0,href:!0});var jl=r(D);Oe=s(jl,"SPAN",{});var Cl=r(Oe);v(ae.$$.fragment,Cl),Cl.forEach(t),jl.forEach(t),S=u(zr),I=s(zr,"SPAN",{});var Ml=r(I);nt=d(Ml,"Overview"),Ml.forEach(t),zr.forEach(t),ce=u(o),pe=s(o,"P",{});var qr=r(pe);at=d(qr,"The Bart model was proposed in "),X=s(qr,"A",{href:!0,rel:!0});var El=r(X);st=d(El,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),El.forEach(t),rt=d(qr,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),qr.forEach(t),G=u(o),qe=s(o,"P",{});var Pl=r(qe);ke=d(Pl,"According to the abstract,"),Pl.forEach(t),Ve=u(o),Y=s(o,"UL",{});var bo=r(Y);se=s(bo,"LI",{});var Al=r(se);it=d(Al,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Al.forEach(t),dt=u(bo),K=s(bo,"LI",{});var Sl=r(K);lt=d(Sl,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),Sl.forEach(t),ye=u(bo),Ie=s(bo,"LI",{});var Ol=r(Ie);z=d(Ol,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),Ol.forEach(t),bo.forEach(t),M=u(o),H=s(o,"P",{});var ko=r(H);Ct=d(ko,"This model was contributed by "),Ne=s(ko,"A",{href:!0,rel:!0});var Il=r(Ne);re=d(Il,"sshleifer"),Il.forEach(t),Mt=d(ko,". The Authors\u2019 code can be found "),Le=s(ko,"A",{href:!0,rel:!0});var Nl=r(Le);Et=d(Nl,"here"),Nl.forEach(t),ie=d(ko,"."),ko.forEach(t),he=u(o),ve=s(o,"H3",{class:!0});var Br=r(ve);Be=s(Br,"A",{id:!0,class:!0,href:!0});var Ll=r(Be);de=s(Ll,"SPAN",{});var Dl=r(de);v(De.$$.fragment,Dl),Dl.forEach(t),Ll.forEach(t),Pt=u(Br),Ge=s(Br,"SPAN",{});var Gl=r(Ge);At=d(Gl,"Examples"),Gl.forEach(t),Br.forEach(t),tc=u(o),kt=s(o,"UL",{});var yo=r(kt);ia=s(yo,"LI",{});var jr=r(ia);Up=d(jr,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),da=s(jr,"A",{href:!0,rel:!0});var Wl=r(da);Rp=d(Wl,"examples/pytorch/summarization/"),Wl.forEach(t),Qp=d(jr,"."),jr.forEach(t),Hp=u(yo),ct=s(yo,"LI",{});var gt=r(ct);Vp=d(gt,"An example of how to train "),Mr=s(gt,"A",{href:!0});var Ul=r(Mr);Jp=d(Ul,"BartForConditionalGeneration"),Ul.forEach(t),Xp=d(gt," with a Hugging Face "),qi=s(gt,"CODE",{});var Rl=r(qi);Kp=d(Rl,"datasets"),Rl.forEach(t),Zp=d(gt,`
object can be found in this `),la=s(gt,"A",{href:!0,rel:!0});var Ql=r(la);Yp=d(Ql,"forum discussion"),Ql.forEach(t),eh=d(gt,"."),gt.forEach(t),th=u(yo),To=s(yo,"LI",{});var Qn=r(To);ca=s(Qn,"A",{href:!0,rel:!0});var Hl=r(ca);oh=d(Hl,"Distilled checkpoints"),Hl.forEach(t),nh=d(Qn," are described in this "),pa=s(Qn,"A",{href:!0,rel:!0});var Vl=r(pa);ah=d(Vl,"paper"),Vl.forEach(t),sh=d(Qn,"."),Qn.forEach(t),yo.forEach(t),oc=u(o),St=s(o,"H2",{class:!0});var Cr=r(St);wo=s(Cr,"A",{id:!0,class:!0,href:!0});var Jl=r(wo);Bi=s(Jl,"SPAN",{});var Xl=r(Bi);v(ha.$$.fragment,Xl),Xl.forEach(t),Jl.forEach(t),rh=u(Cr),ji=s(Cr,"SPAN",{});var Kl=r(ji);ih=d(Kl,"Implementation Notes"),Kl.forEach(t),Cr.forEach(t),nc=u(o),je=s(o,"UL",{});var Qe=r(je);pt=s(Qe,"LI",{});var bt=r(pt);dh=d(bt,"Bart doesn\u2019t use "),Ci=s(bt,"CODE",{});var Zl=r(Ci);lh=d(Zl,"token_type_ids"),Zl.forEach(t),ch=d(bt," for sequence classification. Use "),Er=s(bt,"A",{href:!0});var Yl=r(Er);ph=d(Yl,"BartTokenizer"),Yl.forEach(t),hh=d(bt,` or
`),Pr=s(bt,"A",{href:!0});var ec=r(Pr);uh=d(ec,"encode()"),ec.forEach(t),mh=d(bt," to get the proper splitting."),bt.forEach(t),fh=u(Qe),Ot=s(Qe,"LI",{});var vo=r(Ot);_h=d(vo,"The forward pass of "),Ar=s(vo,"A",{href:!0});var ny=r(Ar);gh=d(ny,"BartModel"),ny.forEach(t),bh=d(vo," will create the "),Mi=s(vo,"CODE",{});var ay=r(Mi);kh=d(ay,"decoder_input_ids"),ay.forEach(t),yh=d(vo,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),vo.forEach(t),vh=u(Qe),It=s(Qe,"LI",{});var li=r(It);Th=d(li,`Model predictions are intended to be identical to the original implementation when
`),Ei=s(li,"CODE",{});var sy=r(Ei);wh=d(sy,"forced_bos_token_id=0"),sy.forEach(t),$h=d(li,`. This only works, however, if the string you pass to
`),Pi=s(li,"CODE",{});var ry=r(Pi);xh=d(ry,"fairseq.encode"),ry.forEach(t),Fh=d(li," starts with a space."),li.forEach(t),zh=u(Qe),Sr=s(Qe,"LI",{});var ey=r(Sr);Or=s(ey,"A",{href:!0});var iy=r(Or);qh=d(iy,"generate()"),iy.forEach(t),Bh=d(ey,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),ey.forEach(t),jh=u(Qe),Nt=s(Qe,"LI",{});var ci=r(Nt);Ch=d(ci,"Models that load the "),Ai=s(ci,"EM",{});var dy=r(Ai);Mh=d(dy,"facebook/bart-large-cnn"),dy.forEach(t),Eh=d(ci," weights will not have a "),Si=s(ci,"CODE",{});var ly=r(Si);Ph=d(ly,"mask_token_id"),ly.forEach(t),Ah=d(ci,`, or be able to perform
mask-filling tasks.`),ci.forEach(t),Qe.forEach(t),ac=u(o),Lt=s(o,"H2",{class:!0});var Ic=r(Lt);$o=s(Ic,"A",{id:!0,class:!0,href:!0});var cy=r($o);Oi=s(cy,"SPAN",{});var py=r(Oi);v(ua.$$.fragment,py),py.forEach(t),cy.forEach(t),Sh=u(Ic),Ii=s(Ic,"SPAN",{});var hy=r(Ii);Oh=d(hy,"Mask Filling"),hy.forEach(t),Ic.forEach(t),sc=u(o),yt=s(o,"P",{});var pi=r(yt);Ih=d(pi,"The "),Ni=s(pi,"CODE",{});var uy=r(Ni);Nh=d(uy,"facebook/bart-base"),uy.forEach(t),Lh=d(pi," and "),Li=s(pi,"CODE",{});var my=r(Li);Dh=d(my,"facebook/bart-large"),my.forEach(t),Gh=d(pi," checkpoints can be used to fill multi-token masks."),pi.forEach(t),rc=u(o),v(ma.$$.fragment,o),ic=u(o),Dt=s(o,"H2",{class:!0});var Nc=r(Dt);xo=s(Nc,"A",{id:!0,class:!0,href:!0});var fy=r(xo);Di=s(fy,"SPAN",{});var _y=r(Di);v(fa.$$.fragment,_y),_y.forEach(t),fy.forEach(t),Wh=u(Nc),Gi=s(Nc,"SPAN",{});var gy=r(Gi);Uh=d(gy,"BartConfig"),gy.forEach(t),Nc.forEach(t),dc=u(o),We=s(o,"DIV",{class:!0});var Hn=r(We);v(_a.$$.fragment,Hn),Rh=u(Hn),Gt=s(Hn,"P",{});var hi=r(Gt);Qh=d(hi,"This is the configuration class to store the configuration of a "),Ir=s(hi,"A",{href:!0});var by=r(Ir);Hh=d(by,"BartModel"),by.forEach(t),Vh=d(hi,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),ga=s(hi,"A",{href:!0,rel:!0});var ky=r(ga);Jh=d(ky,"facebook/bart-large"),ky.forEach(t),Xh=d(hi," architecture."),hi.forEach(t),Kh=u(Hn),Wt=s(Hn,"P",{});var ui=r(Wt);Zh=d(ui,"Configuration objects inherit from "),Nr=s(ui,"A",{href:!0});var yy=r(Nr);Yh=d(yy,"PretrainedConfig"),yy.forEach(t),eu=d(ui,` and can be used to control the model outputs. Read the
documentation from `),Lr=s(ui,"A",{href:!0});var vy=r(Lr);tu=d(vy,"PretrainedConfig"),vy.forEach(t),ou=d(ui," for more information."),ui.forEach(t),nu=u(Hn),v(Fo.$$.fragment,Hn),Hn.forEach(t),lc=u(o),Ut=s(o,"H2",{class:!0});var Lc=r(Ut);zo=s(Lc,"A",{id:!0,class:!0,href:!0});var Ty=r(zo);Wi=s(Ty,"SPAN",{});var wy=r(Wi);v(ba.$$.fragment,wy),wy.forEach(t),Ty.forEach(t),au=u(Lc),Ui=s(Lc,"SPAN",{});var $y=r(Ui);su=d($y,"BartTokenizer"),$y.forEach(t),Lc.forEach(t),cc=u(o),A=s(o,"DIV",{class:!0});var W=r(A);v(ka.$$.fragment,W),ru=u(W),Ri=s(W,"P",{});var xy=r(Ri);iu=d(xy,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),xy.forEach(t),du=u(W),Qi=s(W,"P",{});var Fy=r(Qi);lu=d(Fy,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Fy.forEach(t),cu=u(W),v(qo.$$.fragment,W),pu=u(W),ya=s(W,"P",{});var Dc=r(ya);hu=d(Dc,"You can get around that behavior by passing "),Hi=s(Dc,"CODE",{});var zy=r(Hi);uu=d(zy,"add_prefix_space=True"),zy.forEach(t),mu=d(Dc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Dc.forEach(t),fu=u(W),v(Bo.$$.fragment,W),_u=u(W),va=s(W,"P",{});var Gc=r(va);gu=d(Gc,"This tokenizer inherits from "),Dr=s(Gc,"A",{href:!0});var qy=r(Dr);bu=d(qy,"PreTrainedTokenizer"),qy.forEach(t),ku=d(Gc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Gc.forEach(t),yu=u(W),vt=s(W,"DIV",{class:!0});var mi=r(vt);v(Ta.$$.fragment,mi),vu=u(mi),Vi=s(mi,"P",{});var By=r(Vi);Tu=d(By,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),By.forEach(t),wu=u(mi),wa=s(mi,"UL",{});var Wc=r(wa);Gr=s(Wc,"LI",{});var ty=r(Gr);$u=d(ty,"single sequence: "),Ji=s(ty,"CODE",{});var jy=r(Ji);xu=d(jy,"<s> X </s>"),jy.forEach(t),ty.forEach(t),Fu=u(Wc),Wr=s(Wc,"LI",{});var oy=r(Wr);zu=d(oy,"pair of sequences: "),Xi=s(oy,"CODE",{});var Cy=r(Xi);qu=d(Cy,"<s> A </s></s> B </s>"),Cy.forEach(t),oy.forEach(t),Wc.forEach(t),mi.forEach(t),Bu=u(W),jo=s(W,"DIV",{class:!0});var Uc=r(jo);v($a.$$.fragment,Uc),ju=u(Uc),Ki=s(Uc,"P",{});var My=r(Ki);Cu=d(My,"Converts a sequence of tokens (string) in a single string."),My.forEach(t),Uc.forEach(t),Mu=u(W),Co=s(W,"DIV",{class:!0});var Rc=r(Co);v(xa.$$.fragment,Rc),Eu=u(Rc),Zi=s(Rc,"P",{});var Ey=r(Zi);Pu=d(Ey,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Ey.forEach(t),Rc.forEach(t),Au=u(W),Mo=s(W,"DIV",{class:!0});var Qc=r(Mo);v(Fa.$$.fragment,Qc),Su=u(Qc),za=s(Qc,"P",{});var Hc=r(za);Ou=d(Hc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Yi=s(Hc,"CODE",{});var Py=r(Yi);Iu=d(Py,"prepare_for_model"),Py.forEach(t),Nu=d(Hc," method."),Hc.forEach(t),Qc.forEach(t),W.forEach(t),pc=u(o),Rt=s(o,"H2",{class:!0});var Vc=r(Rt);Eo=s(Vc,"A",{id:!0,class:!0,href:!0});var Ay=r(Eo);ed=s(Ay,"SPAN",{});var Sy=r(ed);v(qa.$$.fragment,Sy),Sy.forEach(t),Ay.forEach(t),Lu=u(Vc),td=s(Vc,"SPAN",{});var Oy=r(td);Du=d(Oy,"BartTokenizerFast"),Oy.forEach(t),Vc.forEach(t),hc=u(o),U=s(o,"DIV",{class:!0});var ue=r(U);v(Ba.$$.fragment,ue),Gu=u(ue),ja=s(ue,"P",{});var Jc=r(ja);Wu=d(Jc,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),od=s(Jc,"EM",{});var Iy=r(od);Uu=d(Iy,"tokenizers"),Iy.forEach(t),Ru=d(Jc,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Jc.forEach(t),Qu=u(ue),nd=s(ue,"P",{});var Ny=r(nd);Hu=d(Ny,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Ny.forEach(t),Vu=u(ue),v(Po.$$.fragment,ue),Ju=u(ue),Ca=s(ue,"P",{});var Xc=r(Ca);Xu=d(Xc,"You can get around that behavior by passing "),ad=s(Xc,"CODE",{});var Ly=r(ad);Ku=d(Ly,"add_prefix_space=True"),Ly.forEach(t),Zu=d(Xc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Xc.forEach(t),Yu=u(ue),v(Ao.$$.fragment,ue),em=u(ue),Ma=s(ue,"P",{});var Kc=r(Ma);tm=d(Kc,"This tokenizer inherits from "),Ur=s(Kc,"A",{href:!0});var Dy=r(Ur);om=d(Dy,"PreTrainedTokenizerFast"),Dy.forEach(t),nm=d(Kc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kc.forEach(t),am=u(ue),So=s(ue,"DIV",{class:!0});var Zc=r(So);v(Ea.$$.fragment,Zc),sm=u(Zc),sd=s(Zc,"P",{});var Gy=r(sd);rm=d(Gy,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Gy.forEach(t),Zc.forEach(t),ue.forEach(t),uc=u(o),Qt=s(o,"H2",{class:!0});var Yc=r(Qt);Oo=s(Yc,"A",{id:!0,class:!0,href:!0});var Wy=r(Oo);rd=s(Wy,"SPAN",{});var Uy=r(rd);v(Pa.$$.fragment,Uy),Uy.forEach(t),Wy.forEach(t),im=u(Yc),id=s(Yc,"SPAN",{});var Ry=r(id);dm=d(Ry,"BartModel"),Ry.forEach(t),Yc.forEach(t),mc=u(o),Ue=s(o,"DIV",{class:!0});var Vn=r(Ue);v(Aa.$$.fragment,Vn),lm=u(Vn),Sa=s(Vn,"P",{});var ep=r(Sa);cm=d(ep,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Rr=s(ep,"A",{href:!0});var Qy=r(Rr);pm=d(Qy,"PreTrainedModel"),Qy.forEach(t),hm=d(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(t),um=u(Vn),Oa=s(Vn,"P",{});var tp=r(Oa);mm=d(tp,"This model is also a PyTorch "),Ia=s(tp,"A",{href:!0,rel:!0});var Hy=r(Ia);fm=d(Hy,"torch.nn.Module"),Hy.forEach(t),_m=d(tp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tp.forEach(t),gm=u(Vn),Je=s(Vn,"DIV",{class:!0});var Jn=r(Je);v(Na.$$.fragment,Jn),bm=u(Jn),Ht=s(Jn,"P",{});var fi=r(Ht);km=d(fi,"The "),Qr=s(fi,"A",{href:!0});var Vy=r(Qr);ym=d(Vy,"BartModel"),Vy.forEach(t),vm=d(fi," forward method, overrides the "),dd=s(fi,"CODE",{});var Jy=r(dd);Tm=d(Jy,"__call__"),Jy.forEach(t),wm=d(fi," special method."),fi.forEach(t),$m=u(Jn),v(Io.$$.fragment,Jn),xm=u(Jn),v(No.$$.fragment,Jn),Jn.forEach(t),Vn.forEach(t),fc=u(o),Vt=s(o,"H2",{class:!0});var op=r(Vt);Lo=s(op,"A",{id:!0,class:!0,href:!0});var Xy=r(Lo);ld=s(Xy,"SPAN",{});var Ky=r(ld);v(La.$$.fragment,Ky),Ky.forEach(t),Xy.forEach(t),Fm=u(op),cd=s(op,"SPAN",{});var Zy=r(cd);zm=d(Zy,"BartForConditionalGeneration"),Zy.forEach(t),op.forEach(t),_c=u(o),Re=s(o,"DIV",{class:!0});var Xn=r(Re);v(Da.$$.fragment,Xn),qm=u(Xn),Ga=s(Xn,"P",{});var np=r(Ga);Bm=d(np,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Hr=s(np,"A",{href:!0});var Yy=r(Hr);jm=d(Yy,"PreTrainedModel"),Yy.forEach(t),Cm=d(np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np.forEach(t),Mm=u(Xn),Wa=s(Xn,"P",{});var ap=r(Wa);Em=d(ap,"This model is also a PyTorch "),Ua=s(ap,"A",{href:!0,rel:!0});var ev=r(Ua);Pm=d(ev,"torch.nn.Module"),ev.forEach(t),Am=d(ap,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ap.forEach(t),Sm=u(Xn),Ce=s(Xn,"DIV",{class:!0});var Tt=r(Ce);v(Ra.$$.fragment,Tt),Om=u(Tt),Jt=s(Tt,"P",{});var _i=r(Jt);Im=d(_i,"The "),Vr=s(_i,"A",{href:!0});var tv=r(Vr);Nm=d(tv,"BartForConditionalGeneration"),tv.forEach(t),Lm=d(_i," forward method, overrides the "),pd=s(_i,"CODE",{});var ov=r(pd);Dm=d(ov,"__call__"),ov.forEach(t),Gm=d(_i," special method."),_i.forEach(t),Wm=u(Tt),v(Do.$$.fragment,Tt),Um=u(Tt),v(Go.$$.fragment,Tt),Rm=u(Tt),v(Wo.$$.fragment,Tt),Tt.forEach(t),Xn.forEach(t),gc=u(o),Xt=s(o,"H2",{class:!0});var sp=r(Xt);Uo=s(sp,"A",{id:!0,class:!0,href:!0});var nv=r(Uo);hd=s(nv,"SPAN",{});var av=r(hd);v(Qa.$$.fragment,av),av.forEach(t),nv.forEach(t),Qm=u(sp),ud=s(sp,"SPAN",{});var sv=r(ud);Hm=d(sv,"BartForSequenceClassification"),sv.forEach(t),sp.forEach(t),bc=u(o),Te=s(o,"DIV",{class:!0});var wt=r(Te);v(Ha.$$.fragment,wt),Vm=u(wt),md=s(wt,"P",{});var rv=r(md);Jm=d(rv,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),rv.forEach(t),Xm=u(wt),Va=s(wt,"P",{});var rp=r(Va);Km=d(rp,"This model inherits from "),Jr=s(rp,"A",{href:!0});var iv=r(Jr);Zm=d(iv,"PreTrainedModel"),iv.forEach(t),Ym=d(rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp.forEach(t),ef=u(wt),Ja=s(wt,"P",{});var ip=r(Ja);tf=d(ip,"This model is also a PyTorch "),Xa=s(ip,"A",{href:!0,rel:!0});var dv=r(Xa);of=d(dv,"torch.nn.Module"),dv.forEach(t),nf=d(ip,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ip.forEach(t),af=u(wt),ee=s(wt,"DIV",{class:!0});var Ae=r(ee);v(Ka.$$.fragment,Ae),sf=u(Ae),Kt=s(Ae,"P",{});var gi=r(Kt);rf=d(gi,"The "),Xr=s(gi,"A",{href:!0});var lv=r(Xr);df=d(lv,"BartForSequenceClassification"),lv.forEach(t),lf=d(gi," forward method, overrides the "),fd=s(gi,"CODE",{});var cv=r(fd);cf=d(cv,"__call__"),cv.forEach(t),pf=d(gi," special method."),gi.forEach(t),hf=u(Ae),v(Ro.$$.fragment,Ae),uf=u(Ae),v(Qo.$$.fragment,Ae),mf=u(Ae),v(Ho.$$.fragment,Ae),ff=u(Ae),v(Vo.$$.fragment,Ae),_f=u(Ae),v(Jo.$$.fragment,Ae),Ae.forEach(t),wt.forEach(t),kc=u(o),Zt=s(o,"H2",{class:!0});var dp=r(Zt);Xo=s(dp,"A",{id:!0,class:!0,href:!0});var pv=r(Xo);_d=s(pv,"SPAN",{});var hv=r(_d);v(Za.$$.fragment,hv),hv.forEach(t),pv.forEach(t),gf=u(dp),gd=s(dp,"SPAN",{});var uv=r(gd);bf=d(uv,"BartForQuestionAnswering"),uv.forEach(t),dp.forEach(t),yc=u(o),we=s(o,"DIV",{class:!0});var $t=r(we);v(Ya.$$.fragment,$t),kf=u($t),Yt=s($t,"P",{});var bi=r(Yt);yf=d(bi,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),bd=s(bi,"CODE",{});var mv=r(bd);vf=d(mv,"span start logits"),mv.forEach(t),Tf=d(bi," and "),kd=s(bi,"CODE",{});var fv=r(kd);wf=d(fv,"span end logits"),fv.forEach(t),$f=d(bi,")."),bi.forEach(t),xf=u($t),es=s($t,"P",{});var lp=r(es);Ff=d(lp,"This model inherits from "),Kr=s(lp,"A",{href:!0});var _v=r(Kr);zf=d(_v,"PreTrainedModel"),_v.forEach(t),qf=d(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),Bf=u($t),ts=s($t,"P",{});var cp=r(ts);jf=d(cp,"This model is also a PyTorch "),os=s(cp,"A",{href:!0,rel:!0});var gv=r(os);Cf=d(gv,"torch.nn.Module"),gv.forEach(t),Mf=d(cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cp.forEach(t),Ef=u($t),Me=s($t,"DIV",{class:!0});var xt=r(Me);v(ns.$$.fragment,xt),Pf=u(xt),eo=s(xt,"P",{});var ki=r(eo);Af=d(ki,"The "),Zr=s(ki,"A",{href:!0});var bv=r(Zr);Sf=d(bv,"BartForQuestionAnswering"),bv.forEach(t),Of=d(ki," forward method, overrides the "),yd=s(ki,"CODE",{});var kv=r(yd);If=d(kv,"__call__"),kv.forEach(t),Nf=d(ki," special method."),ki.forEach(t),Lf=u(xt),v(Ko.$$.fragment,xt),Df=u(xt),v(Zo.$$.fragment,xt),Gf=u(xt),v(Yo.$$.fragment,xt),xt.forEach(t),$t.forEach(t),vc=u(o),to=s(o,"H2",{class:!0});var pp=r(to);en=s(pp,"A",{id:!0,class:!0,href:!0});var yv=r(en);vd=s(yv,"SPAN",{});var vv=r(vd);v(as.$$.fragment,vv),vv.forEach(t),yv.forEach(t),Wf=u(pp),Td=s(pp,"SPAN",{});var Tv=r(Td);Uf=d(Tv,"BartForCausalLM"),Tv.forEach(t),pp.forEach(t),Tc=u(o),$e=s(o,"DIV",{class:!0});var Ft=r($e);v(ss.$$.fragment,Ft),Rf=u(Ft),wd=s(Ft,"P",{});var wv=r(wd);Qf=d(wv,"BART decoder with with a language modeling head on top (linear layer with weights tied to the input embeddings)."),wv.forEach(t),Hf=u(Ft),rs=s(Ft,"P",{});var hp=r(rs);Vf=d(hp,"This model inherits from "),Yr=s(hp,"A",{href:!0});var $v=r(Yr);Jf=d($v,"PreTrainedModel"),$v.forEach(t),Xf=d(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),Kf=u(Ft),is=s(Ft,"P",{});var up=r(is);Zf=d(up,"This model is also a PyTorch "),ds=s(up,"A",{href:!0,rel:!0});var xv=r(ds);Yf=d(xv,"torch.nn.Module"),xv.forEach(t),e_=d(up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up.forEach(t),t_=u(Ft),tn=s(Ft,"DIV",{class:!0});var mp=r(tn);v(ls.$$.fragment,mp),o_=u(mp),v(on.$$.fragment,mp),mp.forEach(t),Ft.forEach(t),wc=u(o),oo=s(o,"H2",{class:!0});var fp=r(oo);nn=s(fp,"A",{id:!0,class:!0,href:!0});var Fv=r(nn);$d=s(Fv,"SPAN",{});var zv=r($d);v(cs.$$.fragment,zv),zv.forEach(t),Fv.forEach(t),n_=u(fp),xd=s(fp,"SPAN",{});var qv=r(xd);a_=d(qv,"TFBartModel"),qv.forEach(t),fp.forEach(t),$c=u(o),xe=s(o,"DIV",{class:!0});var zt=r(xe);v(ps.$$.fragment,zt),s_=u(zt),hs=s(zt,"P",{});var _p=r(hs);r_=d(_p,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ei=s(_p,"A",{href:!0});var Bv=r(ei);i_=d(Bv,"TFPreTrainedModel"),Bv.forEach(t),d_=d(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(t),l_=u(zt),us=s(zt,"P",{});var gp=r(us);c_=d(gp,"This model is also a "),ms=s(gp,"A",{href:!0,rel:!0});var jv=r(ms);p_=d(jv,"tf.keras.Model"),jv.forEach(t),h_=d(gp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gp.forEach(t),u_=u(zt),v(an.$$.fragment,zt),m_=u(zt),Xe=s(zt,"DIV",{class:!0});var Kn=r(Xe);v(fs.$$.fragment,Kn),f_=u(Kn),no=s(Kn,"P",{});var yi=r(no);__=d(yi,"The "),ti=s(yi,"A",{href:!0});var Cv=r(ti);g_=d(Cv,"TFBartModel"),Cv.forEach(t),b_=d(yi," forward method, overrides the "),Fd=s(yi,"CODE",{});var Mv=r(Fd);k_=d(Mv,"__call__"),Mv.forEach(t),y_=d(yi," special method."),yi.forEach(t),v_=u(Kn),v(sn.$$.fragment,Kn),T_=u(Kn),v(rn.$$.fragment,Kn),Kn.forEach(t),zt.forEach(t),xc=u(o),ao=s(o,"H2",{class:!0});var bp=r(ao);dn=s(bp,"A",{id:!0,class:!0,href:!0});var Ev=r(dn);zd=s(Ev,"SPAN",{});var Pv=r(zd);v(_s.$$.fragment,Pv),Pv.forEach(t),Ev.forEach(t),w_=u(bp),qd=s(bp,"SPAN",{});var Av=r(qd);$_=d(Av,"TFBartForConditionalGeneration"),Av.forEach(t),bp.forEach(t),Fc=u(o),Fe=s(o,"DIV",{class:!0});var qt=r(Fe);v(gs.$$.fragment,qt),x_=u(qt),bs=s(qt,"P",{});var kp=r(bs);F_=d(kp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),oi=s(kp,"A",{href:!0});var Sv=r(oi);z_=d(Sv,"TFPreTrainedModel"),Sv.forEach(t),q_=d(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),B_=u(qt),ks=s(qt,"P",{});var yp=r(ks);j_=d(yp,"This model is also a "),ys=s(yp,"A",{href:!0,rel:!0});var Ov=r(ys);C_=d(Ov,"tf.keras.Model"),Ov.forEach(t),M_=d(yp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yp.forEach(t),E_=u(qt),v(ln.$$.fragment,qt),P_=u(qt),Ee=s(qt,"DIV",{class:!0});var Bt=r(Ee);v(vs.$$.fragment,Bt),A_=u(Bt),so=s(Bt,"P",{});var vi=r(so);S_=d(vi,"The "),ni=s(vi,"A",{href:!0});var Iv=r(ni);O_=d(Iv,"TFBartForConditionalGeneration"),Iv.forEach(t),I_=d(vi," forward method, overrides the "),Bd=s(vi,"CODE",{});var Nv=r(Bd);N_=d(Nv,"__call__"),Nv.forEach(t),L_=d(vi," special method."),vi.forEach(t),D_=u(Bt),v(cn.$$.fragment,Bt),G_=u(Bt),v(pn.$$.fragment,Bt),W_=u(Bt),v(hn.$$.fragment,Bt),Bt.forEach(t),qt.forEach(t),zc=u(o),ro=s(o,"H2",{class:!0});var vp=r(ro);un=s(vp,"A",{id:!0,class:!0,href:!0});var Lv=r(un);jd=s(Lv,"SPAN",{});var Dv=r(jd);v(Ts.$$.fragment,Dv),Dv.forEach(t),Lv.forEach(t),U_=u(vp),Cd=s(vp,"SPAN",{});var Gv=r(Cd);R_=d(Gv,"FlaxBartModel"),Gv.forEach(t),vp.forEach(t),qc=u(o),R=s(o,"DIV",{class:!0});var me=r(R);v(ws.$$.fragment,me),Q_=u(me),$s=s(me,"P",{});var Tp=r($s);H_=d(Tp,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ai=s(Tp,"A",{href:!0});var Wv=r(ai);V_=d(Wv,"FlaxPreTrainedModel"),Wv.forEach(t),J_=d(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp.forEach(t),X_=u(me),xs=s(me,"P",{});var wp=r(xs);K_=d(wp,`This model is also a Flax Linen
`),Fs=s(wp,"A",{href:!0,rel:!0});var Uv=r(Fs);Z_=d(Uv,"flax.nn.Module"),Uv.forEach(t),Y_=d(wp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wp.forEach(t),eg=u(me),Md=s(me,"P",{});var Rv=r(Md);tg=d(Rv,"Finally, this model supports inherent JAX features such as:"),Rv.forEach(t),og=u(me),ht=s(me,"UL",{});var Zn=r(ht);Ed=s(Zn,"LI",{});var Qv=r(Ed);zs=s(Qv,"A",{href:!0,rel:!0});var Hv=r(zs);ng=d(Hv,"Just-In-Time (JIT) compilation"),Hv.forEach(t),Qv.forEach(t),ag=u(Zn),Pd=s(Zn,"LI",{});var Vv=r(Pd);qs=s(Vv,"A",{href:!0,rel:!0});var Jv=r(qs);sg=d(Jv,"Automatic Differentiation"),Jv.forEach(t),Vv.forEach(t),rg=u(Zn),Ad=s(Zn,"LI",{});var Xv=r(Ad);Bs=s(Xv,"A",{href:!0,rel:!0});var Kv=r(Bs);ig=d(Kv,"Vectorization"),Kv.forEach(t),Xv.forEach(t),dg=u(Zn),Sd=s(Zn,"LI",{});var Zv=r(Sd);js=s(Zv,"A",{href:!0,rel:!0});var Yv=r(js);lg=d(Yv,"Parallelization"),Yv.forEach(t),Zv.forEach(t),Zn.forEach(t),cg=u(me),Ke=s(me,"DIV",{class:!0});var Yn=r(Ke);v(Cs.$$.fragment,Yn),pg=u(Yn),io=s(Yn,"P",{});var Ti=r(io);hg=d(Ti,"The "),Od=s(Ti,"CODE",{});var eT=r(Od);ug=d(eT,"FlaxBartPreTrainedModel"),eT.forEach(t),mg=d(Ti," forward method, overrides the "),Id=s(Ti,"CODE",{});var tT=r(Id);fg=d(tT,"__call__"),tT.forEach(t),_g=d(Ti," special method."),Ti.forEach(t),gg=u(Yn),v(mn.$$.fragment,Yn),bg=u(Yn),v(fn.$$.fragment,Yn),Yn.forEach(t),kg=u(me),_n=s(me,"DIV",{class:!0});var $p=r(_n);v(Ms.$$.fragment,$p),yg=u($p),v(gn.$$.fragment,$p),$p.forEach(t),vg=u(me),bn=s(me,"DIV",{class:!0});var xp=r(bn);v(Es.$$.fragment,xp),Tg=u(xp),v(kn.$$.fragment,xp),xp.forEach(t),me.forEach(t),Bc=u(o),lo=s(o,"H2",{class:!0});var Fp=r(lo);yn=s(Fp,"A",{id:!0,class:!0,href:!0});var oT=r(yn);Nd=s(oT,"SPAN",{});var nT=r(Nd);v(Ps.$$.fragment,nT),nT.forEach(t),oT.forEach(t),wg=u(Fp),Ld=s(Fp,"SPAN",{});var aT=r(Ld);$g=d(aT,"FlaxBartForConditionalGeneration"),aT.forEach(t),Fp.forEach(t),jc=u(o),Q=s(o,"DIV",{class:!0});var fe=r(Q);v(As.$$.fragment,fe),xg=u(fe),Ss=s(fe,"P",{});var zp=r(Ss);Fg=d(zp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),si=s(zp,"A",{href:!0});var sT=r(si);zg=d(sT,"FlaxPreTrainedModel"),sT.forEach(t),qg=d(zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp.forEach(t),Bg=u(fe),Os=s(fe,"P",{});var qp=r(Os);jg=d(qp,`This model is also a Flax Linen
`),Is=s(qp,"A",{href:!0,rel:!0});var rT=r(Is);Cg=d(rT,"flax.nn.Module"),rT.forEach(t),Mg=d(qp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qp.forEach(t),Eg=u(fe),Dd=s(fe,"P",{});var iT=r(Dd);Pg=d(iT,"Finally, this model supports inherent JAX features such as:"),iT.forEach(t),Ag=u(fe),ut=s(fe,"UL",{});var ea=r(ut);Gd=s(ea,"LI",{});var dT=r(Gd);Ns=s(dT,"A",{href:!0,rel:!0});var lT=r(Ns);Sg=d(lT,"Just-In-Time (JIT) compilation"),lT.forEach(t),dT.forEach(t),Og=u(ea),Wd=s(ea,"LI",{});var cT=r(Wd);Ls=s(cT,"A",{href:!0,rel:!0});var pT=r(Ls);Ig=d(pT,"Automatic Differentiation"),pT.forEach(t),cT.forEach(t),Ng=u(ea),Ud=s(ea,"LI",{});var hT=r(Ud);Ds=s(hT,"A",{href:!0,rel:!0});var uT=r(Ds);Lg=d(uT,"Vectorization"),uT.forEach(t),hT.forEach(t),Dg=u(ea),Rd=s(ea,"LI",{});var mT=r(Rd);Gs=s(mT,"A",{href:!0,rel:!0});var fT=r(Gs);Gg=d(fT,"Parallelization"),fT.forEach(t),mT.forEach(t),ea.forEach(t),Wg=u(fe),Pe=s(fe,"DIV",{class:!0});var jt=r(Pe);v(Ws.$$.fragment,jt),Ug=u(jt),co=s(jt,"P",{});var wi=r(co);Rg=d(wi,"The "),Qd=s(wi,"CODE",{});var _T=r(Qd);Qg=d(_T,"FlaxBartPreTrainedModel"),_T.forEach(t),Hg=d(wi," forward method, overrides the "),Hd=s(wi,"CODE",{});var gT=r(Hd);Vg=d(gT,"__call__"),gT.forEach(t),Jg=d(wi," special method."),wi.forEach(t),Xg=u(jt),v(vn.$$.fragment,jt),Kg=u(jt),v(Tn.$$.fragment,jt),Zg=u(jt),v(wn.$$.fragment,jt),jt.forEach(t),Yg=u(fe),$n=s(fe,"DIV",{class:!0});var Bp=r($n);v(Us.$$.fragment,Bp),eb=u(Bp),v(xn.$$.fragment,Bp),Bp.forEach(t),tb=u(fe),Fn=s(fe,"DIV",{class:!0});var jp=r(Fn);v(Rs.$$.fragment,jp),ob=u(jp),v(zn.$$.fragment,jp),jp.forEach(t),fe.forEach(t),Cc=u(o),po=s(o,"H2",{class:!0});var Cp=r(po);qn=s(Cp,"A",{id:!0,class:!0,href:!0});var bT=r(qn);Vd=s(bT,"SPAN",{});var kT=r(Vd);v(Qs.$$.fragment,kT),kT.forEach(t),bT.forEach(t),nb=u(Cp),Jd=s(Cp,"SPAN",{});var yT=r(Jd);ab=d(yT,"FlaxBartForSequenceClassification"),yT.forEach(t),Cp.forEach(t),Mc=u(o),N=s(o,"DIV",{class:!0});var te=r(N);v(Hs.$$.fragment,te),sb=u(te),Xd=s(te,"P",{});var vT=r(Xd);rb=d(vT,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),vT.forEach(t),ib=u(te),Vs=s(te,"P",{});var Mp=r(Vs);db=d(Mp,"This model inherits from "),ri=s(Mp,"A",{href:!0});var TT=r(ri);lb=d(TT,"FlaxPreTrainedModel"),TT.forEach(t),cb=d(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp.forEach(t),pb=u(te),Js=s(te,"P",{});var Ep=r(Js);hb=d(Ep,`This model is also a Flax Linen
`),Xs=s(Ep,"A",{href:!0,rel:!0});var wT=r(Xs);ub=d(wT,"flax.nn.Module"),wT.forEach(t),mb=d(Ep,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ep.forEach(t),fb=u(te),Kd=s(te,"P",{});var $T=r(Kd);_b=d($T,"Finally, this model supports inherent JAX features such as:"),$T.forEach(t),gb=u(te),mt=s(te,"UL",{});var ta=r(mt);Zd=s(ta,"LI",{});var xT=r(Zd);Ks=s(xT,"A",{href:!0,rel:!0});var FT=r(Ks);bb=d(FT,"Just-In-Time (JIT) compilation"),FT.forEach(t),xT.forEach(t),kb=u(ta),Yd=s(ta,"LI",{});var zT=r(Yd);Zs=s(zT,"A",{href:!0,rel:!0});var qT=r(Zs);yb=d(qT,"Automatic Differentiation"),qT.forEach(t),zT.forEach(t),vb=u(ta),el=s(ta,"LI",{});var BT=r(el);Ys=s(BT,"A",{href:!0,rel:!0});var jT=r(Ys);Tb=d(jT,"Vectorization"),jT.forEach(t),BT.forEach(t),wb=u(ta),tl=s(ta,"LI",{});var CT=r(tl);er=s(CT,"A",{href:!0,rel:!0});var MT=r(er);$b=d(MT,"Parallelization"),MT.forEach(t),CT.forEach(t),ta.forEach(t),xb=u(te),Ze=s(te,"DIV",{class:!0});var oa=r(Ze);v(tr.$$.fragment,oa),Fb=u(oa),ho=s(oa,"P",{});var $i=r(ho);zb=d($i,"The "),ol=s($i,"CODE",{});var ET=r(ol);qb=d(ET,"FlaxBartPreTrainedModel"),ET.forEach(t),Bb=d($i," forward method, overrides the "),nl=s($i,"CODE",{});var PT=r(nl);jb=d(PT,"__call__"),PT.forEach(t),Cb=d($i," special method."),$i.forEach(t),Mb=u(oa),v(Bn.$$.fragment,oa),Eb=u(oa),v(jn.$$.fragment,oa),oa.forEach(t),Pb=u(te),Cn=s(te,"DIV",{class:!0});var Pp=r(Cn);v(or.$$.fragment,Pp),Ab=u(Pp),v(Mn.$$.fragment,Pp),Pp.forEach(t),Sb=u(te),En=s(te,"DIV",{class:!0});var Ap=r(En);v(nr.$$.fragment,Ap),Ob=u(Ap),v(Pn.$$.fragment,Ap),Ap.forEach(t),te.forEach(t),Ec=u(o),uo=s(o,"H2",{class:!0});var Sp=r(uo);An=s(Sp,"A",{id:!0,class:!0,href:!0});var AT=r(An);al=s(AT,"SPAN",{});var ST=r(al);v(ar.$$.fragment,ST),ST.forEach(t),AT.forEach(t),Ib=u(Sp),sl=s(Sp,"SPAN",{});var OT=r(sl);Nb=d(OT,"FlaxBartForQuestionAnswering"),OT.forEach(t),Sp.forEach(t),Pc=u(o),L=s(o,"DIV",{class:!0});var oe=r(L);v(sr.$$.fragment,oe),Lb=u(oe),mo=s(oe,"P",{});var xi=r(mo);Db=d(xi,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),rl=s(xi,"CODE",{});var IT=r(rl);Gb=d(IT,"span start logits"),IT.forEach(t),Wb=d(xi," and "),il=s(xi,"CODE",{});var NT=r(il);Ub=d(NT,"span end logits"),NT.forEach(t),Rb=d(xi,")."),xi.forEach(t),Qb=u(oe),rr=s(oe,"P",{});var Op=r(rr);Hb=d(Op,"This model inherits from "),ii=s(Op,"A",{href:!0});var LT=r(ii);Vb=d(LT,"FlaxPreTrainedModel"),LT.forEach(t),Jb=d(Op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op.forEach(t),Xb=u(oe),ir=s(oe,"P",{});var Ip=r(ir);Kb=d(Ip,`This model is also a Flax Linen
`),dr=s(Ip,"A",{href:!0,rel:!0});var DT=r(dr);Zb=d(DT,"flax.nn.Module"),DT.forEach(t),Yb=d(Ip,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ip.forEach(t),ek=u(oe),dl=s(oe,"P",{});var GT=r(dl);tk=d(GT,"Finally, this model supports inherent JAX features such as:"),GT.forEach(t),ok=u(oe),ft=s(oe,"UL",{});var na=r(ft);ll=s(na,"LI",{});var WT=r(ll);lr=s(WT,"A",{href:!0,rel:!0});var UT=r(lr);nk=d(UT,"Just-In-Time (JIT) compilation"),UT.forEach(t),WT.forEach(t),ak=u(na),cl=s(na,"LI",{});var RT=r(cl);cr=s(RT,"A",{href:!0,rel:!0});var QT=r(cr);sk=d(QT,"Automatic Differentiation"),QT.forEach(t),RT.forEach(t),rk=u(na),pl=s(na,"LI",{});var HT=r(pl);pr=s(HT,"A",{href:!0,rel:!0});var VT=r(pr);ik=d(VT,"Vectorization"),VT.forEach(t),HT.forEach(t),dk=u(na),hl=s(na,"LI",{});var JT=r(hl);hr=s(JT,"A",{href:!0,rel:!0});var XT=r(hr);lk=d(XT,"Parallelization"),XT.forEach(t),JT.forEach(t),na.forEach(t),ck=u(oe),Ye=s(oe,"DIV",{class:!0});var aa=r(Ye);v(ur.$$.fragment,aa),pk=u(aa),fo=s(aa,"P",{});var Fi=r(fo);hk=d(Fi,"The "),ul=s(Fi,"CODE",{});var KT=r(ul);uk=d(KT,"FlaxBartPreTrainedModel"),KT.forEach(t),mk=d(Fi," forward method, overrides the "),ml=s(Fi,"CODE",{});var ZT=r(ml);fk=d(ZT,"__call__"),ZT.forEach(t),_k=d(Fi," special method."),Fi.forEach(t),gk=u(aa),v(Sn.$$.fragment,aa),bk=u(aa),v(On.$$.fragment,aa),aa.forEach(t),kk=u(oe),In=s(oe,"DIV",{class:!0});var Np=r(In);v(mr.$$.fragment,Np),yk=u(Np),v(Nn.$$.fragment,Np),Np.forEach(t),vk=u(oe),Ln=s(oe,"DIV",{class:!0});var Lp=r(Ln);v(fr.$$.fragment,Lp),Tk=u(Lp),v(Dn.$$.fragment,Lp),Lp.forEach(t),oe.forEach(t),Ac=u(o),_o=s(o,"H2",{class:!0});var Dp=r(_o);Gn=s(Dp,"A",{id:!0,class:!0,href:!0});var YT=r(Gn);fl=s(YT,"SPAN",{});var ew=r(fl);v(_r.$$.fragment,ew),ew.forEach(t),YT.forEach(t),wk=u(Dp),_l=s(Dp,"SPAN",{});var tw=r(_l);$k=d(tw,"FlaxBartForCausalLM"),tw.forEach(t),Dp.forEach(t),Sc=u(o),Z=s(o,"DIV",{class:!0});var Se=r(Z);v(gr.$$.fragment,Se),xk=u(Se),gl=s(Se,"P",{});var ow=r(gl);Fk=d(ow,`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),ow.forEach(t),zk=u(Se),br=s(Se,"P",{});var Gp=r(br);qk=d(Gp,"This model inherits from "),di=s(Gp,"A",{href:!0});var nw=r(di);Bk=d(nw,"FlaxPreTrainedModel"),nw.forEach(t),jk=d(Gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp.forEach(t),Ck=u(Se),kr=s(Se,"P",{});var Wp=r(kr);Mk=d(Wp,`This model is also a Flax Linen
`),yr=s(Wp,"A",{href:!0,rel:!0});var aw=r(yr);Ek=d(aw,"flax.nn.Module"),aw.forEach(t),Pk=d(Wp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wp.forEach(t),Ak=u(Se),bl=s(Se,"P",{});var sw=r(bl);Sk=d(sw,"Finally, this model supports inherent JAX features such as:"),sw.forEach(t),Ok=u(Se),_t=s(Se,"UL",{});var sa=r(_t);kl=s(sa,"LI",{});var rw=r(kl);vr=s(rw,"A",{href:!0,rel:!0});var iw=r(vr);Ik=d(iw,"Just-In-Time (JIT) compilation"),iw.forEach(t),rw.forEach(t),Nk=u(sa),yl=s(sa,"LI",{});var dw=r(yl);Tr=s(dw,"A",{href:!0,rel:!0});var lw=r(Tr);Lk=d(lw,"Automatic Differentiation"),lw.forEach(t),dw.forEach(t),Dk=u(sa),vl=s(sa,"LI",{});var cw=r(vl);wr=s(cw,"A",{href:!0,rel:!0});var pw=r(wr);Gk=d(pw,"Vectorization"),pw.forEach(t),cw.forEach(t),Wk=u(sa),Tl=s(sa,"LI",{});var hw=r(Tl);$r=s(hw,"A",{href:!0,rel:!0});var uw=r($r);Uk=d(uw,"Parallelization"),uw.forEach(t),hw.forEach(t),sa.forEach(t),Rk=u(Se),et=s(Se,"DIV",{class:!0});var ra=r(et);v(xr.$$.fragment,ra),Qk=u(ra),go=s(ra,"P",{});var zi=r(go);Hk=d(zi,"The "),wl=s(zi,"CODE",{});var mw=r(wl);Vk=d(mw,"FlaxBartDecoderPreTrainedModel"),mw.forEach(t),Jk=d(zi," forward method, overrides the "),$l=s(zi,"CODE",{});var fw=r($l);Xk=d(fw,"__call__"),fw.forEach(t),Kk=d(zi," special method."),zi.forEach(t),Zk=u(ra),v(Wn.$$.fragment,ra),Yk=u(ra),v(Un.$$.fragment,ra),ra.forEach(t),Se.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(u$)),f(c,"id","bart"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#bart"),f(m,"class","relative group"),f(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(ge,"rel","nofollow"),f(D,"id","overview"),f(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(D,"href","#overview"),f(J,"class","relative group"),f(X,"href","https://arxiv.org/abs/1910.13461"),f(X,"rel","nofollow"),f(Ne,"href","https://huggingface.co/sshleifer"),f(Ne,"rel","nofollow"),f(Le,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),f(Le,"rel","nofollow"),f(Be,"id","examples"),f(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Be,"href","#examples"),f(ve,"class","relative group"),f(da,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),f(da,"rel","nofollow"),f(Mr,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(la,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),f(la,"rel","nofollow"),f(ca,"href","https://huggingface.co/models?search=distilbart"),f(ca,"rel","nofollow"),f(pa,"href","https://arxiv.org/abs/2010.13002"),f(pa,"rel","nofollow"),f(wo,"id","implementation-notes"),f(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wo,"href","#implementation-notes"),f(St,"class","relative group"),f(Er,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),f(Pr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode"),f(Ar,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartModel"),f(Or,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),f($o,"id","mask-filling"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#mask-filling"),f(Lt,"class","relative group"),f(xo,"id","transformers.BartConfig"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#transformers.BartConfig"),f(Dt,"class","relative group"),f(Ir,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartModel"),f(ga,"href","https://huggingface.co/facebook/bart-large"),f(ga,"rel","nofollow"),f(Nr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Lr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zo,"id","transformers.BartTokenizer"),f(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zo,"href","#transformers.BartTokenizer"),f(Ut,"class","relative group"),f(Dr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Eo,"id","transformers.BartTokenizerFast"),f(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Eo,"href","#transformers.BartTokenizerFast"),f(Rt,"class","relative group"),f(Ur,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"id","transformers.BartModel"),f(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oo,"href","#transformers.BartModel"),f(Qt,"class","relative group"),f(Rr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ia,"rel","nofollow"),f(Qr,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartModel"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"id","transformers.BartForConditionalGeneration"),f(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Lo,"href","#transformers.BartForConditionalGeneration"),f(Vt,"class","relative group"),f(Hr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ua,"rel","nofollow"),f(Vr,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.BartForSequenceClassification"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.BartForSequenceClassification"),f(Xt,"class","relative group"),f(Jr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Xa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Xa,"rel","nofollow"),f(Xr,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForSequenceClassification"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xo,"id","transformers.BartForQuestionAnswering"),f(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xo,"href","#transformers.BartForQuestionAnswering"),f(Zt,"class","relative group"),f(Kr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(os,"rel","nofollow"),f(Zr,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForQuestionAnswering"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(en,"id","transformers.BartForCausalLM"),f(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(en,"href","#transformers.BartForCausalLM"),f(to,"class","relative group"),f(Yr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ds,"rel","nofollow"),f(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.TFBartModel"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.TFBartModel"),f(oo,"class","relative group"),f(ei,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ms,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ms,"rel","nofollow"),f(ti,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartModel"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dn,"id","transformers.TFBartForConditionalGeneration"),f(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(dn,"href","#transformers.TFBartForConditionalGeneration"),f(ao,"class","relative group"),f(oi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ys,"rel","nofollow"),f(ni,"href","/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(un,"id","transformers.FlaxBartModel"),f(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(un,"href","#transformers.FlaxBartModel"),f(ro,"class","relative group"),f(ai,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Fs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Fs,"rel","nofollow"),f(zs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(zs,"rel","nofollow"),f(qs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(qs,"rel","nofollow"),f(Bs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Bs,"rel","nofollow"),f(js,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(js,"rel","nofollow"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yn,"id","transformers.FlaxBartForConditionalGeneration"),f(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yn,"href","#transformers.FlaxBartForConditionalGeneration"),f(lo,"class","relative group"),f(si,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Is,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Is,"rel","nofollow"),f(Ns,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ns,"rel","nofollow"),f(Ls,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ls,"rel","nofollow"),f(Ds,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ds,"rel","nofollow"),f(Gs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Gs,"rel","nofollow"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qn,"id","transformers.FlaxBartForSequenceClassification"),f(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qn,"href","#transformers.FlaxBartForSequenceClassification"),f(po,"class","relative group"),f(ri,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Xs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Xs,"rel","nofollow"),f(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ks,"rel","nofollow"),f(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Zs,"rel","nofollow"),f(Ys,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ys,"rel","nofollow"),f(er,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(er,"rel","nofollow"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(An,"id","transformers.FlaxBartForQuestionAnswering"),f(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(An,"href","#transformers.FlaxBartForQuestionAnswering"),f(uo,"class","relative group"),f(ii,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(dr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(dr,"rel","nofollow"),f(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(lr,"rel","nofollow"),f(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(cr,"rel","nofollow"),f(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(pr,"rel","nofollow"),f(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(hr,"rel","nofollow"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(In,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gn,"id","transformers.FlaxBartForCausalLM"),f(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gn,"href","#transformers.FlaxBartForCausalLM"),f(_o,"class","relative group"),f(di,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(yr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(yr,"rel","nofollow"),f(vr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(vr,"rel","nofollow"),f(Tr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Tr,"rel","nofollow"),f(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(wr,"rel","nofollow"),f($r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f($r,"rel","nofollow"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),k(o,g,b),k(o,m,b),e(m,c),e(c,_),T(n,_,null),e(m,p),e(m,q),e(q,ne),k(o,O,b),k(o,j,b),e(j,le),e(le,_e),e(j,tt),e(j,ge),e(ge,be),e(j,ot),k(o,He,b),k(o,J,b),e(J,D),e(D,Oe),T(ae,Oe,null),e(J,S),e(J,I),e(I,nt),k(o,ce,b),k(o,pe,b),e(pe,at),e(pe,X),e(X,st),e(pe,rt),k(o,G,b),k(o,qe,b),e(qe,ke),k(o,Ve,b),k(o,Y,b),e(Y,se),e(se,it),e(Y,dt),e(Y,K),e(K,lt),e(Y,ye),e(Y,Ie),e(Ie,z),k(o,M,b),k(o,H,b),e(H,Ct),e(H,Ne),e(Ne,re),e(H,Mt),e(H,Le),e(Le,Et),e(H,ie),k(o,he,b),k(o,ve,b),e(ve,Be),e(Be,de),T(De,de,null),e(ve,Pt),e(ve,Ge),e(Ge,At),k(o,tc,b),k(o,kt,b),e(kt,ia),e(ia,Up),e(ia,da),e(da,Rp),e(ia,Qp),e(kt,Hp),e(kt,ct),e(ct,Vp),e(ct,Mr),e(Mr,Jp),e(ct,Xp),e(ct,qi),e(qi,Kp),e(ct,Zp),e(ct,la),e(la,Yp),e(ct,eh),e(kt,th),e(kt,To),e(To,ca),e(ca,oh),e(To,nh),e(To,pa),e(pa,ah),e(To,sh),k(o,oc,b),k(o,St,b),e(St,wo),e(wo,Bi),T(ha,Bi,null),e(St,rh),e(St,ji),e(ji,ih),k(o,nc,b),k(o,je,b),e(je,pt),e(pt,dh),e(pt,Ci),e(Ci,lh),e(pt,ch),e(pt,Er),e(Er,ph),e(pt,hh),e(pt,Pr),e(Pr,uh),e(pt,mh),e(je,fh),e(je,Ot),e(Ot,_h),e(Ot,Ar),e(Ar,gh),e(Ot,bh),e(Ot,Mi),e(Mi,kh),e(Ot,yh),e(je,vh),e(je,It),e(It,Th),e(It,Ei),e(Ei,wh),e(It,$h),e(It,Pi),e(Pi,xh),e(It,Fh),e(je,zh),e(je,Sr),e(Sr,Or),e(Or,qh),e(Sr,Bh),e(je,jh),e(je,Nt),e(Nt,Ch),e(Nt,Ai),e(Ai,Mh),e(Nt,Eh),e(Nt,Si),e(Si,Ph),e(Nt,Ah),k(o,ac,b),k(o,Lt,b),e(Lt,$o),e($o,Oi),T(ua,Oi,null),e(Lt,Sh),e(Lt,Ii),e(Ii,Oh),k(o,sc,b),k(o,yt,b),e(yt,Ih),e(yt,Ni),e(Ni,Nh),e(yt,Lh),e(yt,Li),e(Li,Dh),e(yt,Gh),k(o,rc,b),T(ma,o,b),k(o,ic,b),k(o,Dt,b),e(Dt,xo),e(xo,Di),T(fa,Di,null),e(Dt,Wh),e(Dt,Gi),e(Gi,Uh),k(o,dc,b),k(o,We,b),T(_a,We,null),e(We,Rh),e(We,Gt),e(Gt,Qh),e(Gt,Ir),e(Ir,Hh),e(Gt,Vh),e(Gt,ga),e(ga,Jh),e(Gt,Xh),e(We,Kh),e(We,Wt),e(Wt,Zh),e(Wt,Nr),e(Nr,Yh),e(Wt,eu),e(Wt,Lr),e(Lr,tu),e(Wt,ou),e(We,nu),T(Fo,We,null),k(o,lc,b),k(o,Ut,b),e(Ut,zo),e(zo,Wi),T(ba,Wi,null),e(Ut,au),e(Ut,Ui),e(Ui,su),k(o,cc,b),k(o,A,b),T(ka,A,null),e(A,ru),e(A,Ri),e(Ri,iu),e(A,du),e(A,Qi),e(Qi,lu),e(A,cu),T(qo,A,null),e(A,pu),e(A,ya),e(ya,hu),e(ya,Hi),e(Hi,uu),e(ya,mu),e(A,fu),T(Bo,A,null),e(A,_u),e(A,va),e(va,gu),e(va,Dr),e(Dr,bu),e(va,ku),e(A,yu),e(A,vt),T(Ta,vt,null),e(vt,vu),e(vt,Vi),e(Vi,Tu),e(vt,wu),e(vt,wa),e(wa,Gr),e(Gr,$u),e(Gr,Ji),e(Ji,xu),e(wa,Fu),e(wa,Wr),e(Wr,zu),e(Wr,Xi),e(Xi,qu),e(A,Bu),e(A,jo),T($a,jo,null),e(jo,ju),e(jo,Ki),e(Ki,Cu),e(A,Mu),e(A,Co),T(xa,Co,null),e(Co,Eu),e(Co,Zi),e(Zi,Pu),e(A,Au),e(A,Mo),T(Fa,Mo,null),e(Mo,Su),e(Mo,za),e(za,Ou),e(za,Yi),e(Yi,Iu),e(za,Nu),k(o,pc,b),k(o,Rt,b),e(Rt,Eo),e(Eo,ed),T(qa,ed,null),e(Rt,Lu),e(Rt,td),e(td,Du),k(o,hc,b),k(o,U,b),T(Ba,U,null),e(U,Gu),e(U,ja),e(ja,Wu),e(ja,od),e(od,Uu),e(ja,Ru),e(U,Qu),e(U,nd),e(nd,Hu),e(U,Vu),T(Po,U,null),e(U,Ju),e(U,Ca),e(Ca,Xu),e(Ca,ad),e(ad,Ku),e(Ca,Zu),e(U,Yu),T(Ao,U,null),e(U,em),e(U,Ma),e(Ma,tm),e(Ma,Ur),e(Ur,om),e(Ma,nm),e(U,am),e(U,So),T(Ea,So,null),e(So,sm),e(So,sd),e(sd,rm),k(o,uc,b),k(o,Qt,b),e(Qt,Oo),e(Oo,rd),T(Pa,rd,null),e(Qt,im),e(Qt,id),e(id,dm),k(o,mc,b),k(o,Ue,b),T(Aa,Ue,null),e(Ue,lm),e(Ue,Sa),e(Sa,cm),e(Sa,Rr),e(Rr,pm),e(Sa,hm),e(Ue,um),e(Ue,Oa),e(Oa,mm),e(Oa,Ia),e(Ia,fm),e(Oa,_m),e(Ue,gm),e(Ue,Je),T(Na,Je,null),e(Je,bm),e(Je,Ht),e(Ht,km),e(Ht,Qr),e(Qr,ym),e(Ht,vm),e(Ht,dd),e(dd,Tm),e(Ht,wm),e(Je,$m),T(Io,Je,null),e(Je,xm),T(No,Je,null),k(o,fc,b),k(o,Vt,b),e(Vt,Lo),e(Lo,ld),T(La,ld,null),e(Vt,Fm),e(Vt,cd),e(cd,zm),k(o,_c,b),k(o,Re,b),T(Da,Re,null),e(Re,qm),e(Re,Ga),e(Ga,Bm),e(Ga,Hr),e(Hr,jm),e(Ga,Cm),e(Re,Mm),e(Re,Wa),e(Wa,Em),e(Wa,Ua),e(Ua,Pm),e(Wa,Am),e(Re,Sm),e(Re,Ce),T(Ra,Ce,null),e(Ce,Om),e(Ce,Jt),e(Jt,Im),e(Jt,Vr),e(Vr,Nm),e(Jt,Lm),e(Jt,pd),e(pd,Dm),e(Jt,Gm),e(Ce,Wm),T(Do,Ce,null),e(Ce,Um),T(Go,Ce,null),e(Ce,Rm),T(Wo,Ce,null),k(o,gc,b),k(o,Xt,b),e(Xt,Uo),e(Uo,hd),T(Qa,hd,null),e(Xt,Qm),e(Xt,ud),e(ud,Hm),k(o,bc,b),k(o,Te,b),T(Ha,Te,null),e(Te,Vm),e(Te,md),e(md,Jm),e(Te,Xm),e(Te,Va),e(Va,Km),e(Va,Jr),e(Jr,Zm),e(Va,Ym),e(Te,ef),e(Te,Ja),e(Ja,tf),e(Ja,Xa),e(Xa,of),e(Ja,nf),e(Te,af),e(Te,ee),T(Ka,ee,null),e(ee,sf),e(ee,Kt),e(Kt,rf),e(Kt,Xr),e(Xr,df),e(Kt,lf),e(Kt,fd),e(fd,cf),e(Kt,pf),e(ee,hf),T(Ro,ee,null),e(ee,uf),T(Qo,ee,null),e(ee,mf),T(Ho,ee,null),e(ee,ff),T(Vo,ee,null),e(ee,_f),T(Jo,ee,null),k(o,kc,b),k(o,Zt,b),e(Zt,Xo),e(Xo,_d),T(Za,_d,null),e(Zt,gf),e(Zt,gd),e(gd,bf),k(o,yc,b),k(o,we,b),T(Ya,we,null),e(we,kf),e(we,Yt),e(Yt,yf),e(Yt,bd),e(bd,vf),e(Yt,Tf),e(Yt,kd),e(kd,wf),e(Yt,$f),e(we,xf),e(we,es),e(es,Ff),e(es,Kr),e(Kr,zf),e(es,qf),e(we,Bf),e(we,ts),e(ts,jf),e(ts,os),e(os,Cf),e(ts,Mf),e(we,Ef),e(we,Me),T(ns,Me,null),e(Me,Pf),e(Me,eo),e(eo,Af),e(eo,Zr),e(Zr,Sf),e(eo,Of),e(eo,yd),e(yd,If),e(eo,Nf),e(Me,Lf),T(Ko,Me,null),e(Me,Df),T(Zo,Me,null),e(Me,Gf),T(Yo,Me,null),k(o,vc,b),k(o,to,b),e(to,en),e(en,vd),T(as,vd,null),e(to,Wf),e(to,Td),e(Td,Uf),k(o,Tc,b),k(o,$e,b),T(ss,$e,null),e($e,Rf),e($e,wd),e(wd,Qf),e($e,Hf),e($e,rs),e(rs,Vf),e(rs,Yr),e(Yr,Jf),e(rs,Xf),e($e,Kf),e($e,is),e(is,Zf),e(is,ds),e(ds,Yf),e(is,e_),e($e,t_),e($e,tn),T(ls,tn,null),e(tn,o_),T(on,tn,null),k(o,wc,b),k(o,oo,b),e(oo,nn),e(nn,$d),T(cs,$d,null),e(oo,n_),e(oo,xd),e(xd,a_),k(o,$c,b),k(o,xe,b),T(ps,xe,null),e(xe,s_),e(xe,hs),e(hs,r_),e(hs,ei),e(ei,i_),e(hs,d_),e(xe,l_),e(xe,us),e(us,c_),e(us,ms),e(ms,p_),e(us,h_),e(xe,u_),T(an,xe,null),e(xe,m_),e(xe,Xe),T(fs,Xe,null),e(Xe,f_),e(Xe,no),e(no,__),e(no,ti),e(ti,g_),e(no,b_),e(no,Fd),e(Fd,k_),e(no,y_),e(Xe,v_),T(sn,Xe,null),e(Xe,T_),T(rn,Xe,null),k(o,xc,b),k(o,ao,b),e(ao,dn),e(dn,zd),T(_s,zd,null),e(ao,w_),e(ao,qd),e(qd,$_),k(o,Fc,b),k(o,Fe,b),T(gs,Fe,null),e(Fe,x_),e(Fe,bs),e(bs,F_),e(bs,oi),e(oi,z_),e(bs,q_),e(Fe,B_),e(Fe,ks),e(ks,j_),e(ks,ys),e(ys,C_),e(ks,M_),e(Fe,E_),T(ln,Fe,null),e(Fe,P_),e(Fe,Ee),T(vs,Ee,null),e(Ee,A_),e(Ee,so),e(so,S_),e(so,ni),e(ni,O_),e(so,I_),e(so,Bd),e(Bd,N_),e(so,L_),e(Ee,D_),T(cn,Ee,null),e(Ee,G_),T(pn,Ee,null),e(Ee,W_),T(hn,Ee,null),k(o,zc,b),k(o,ro,b),e(ro,un),e(un,jd),T(Ts,jd,null),e(ro,U_),e(ro,Cd),e(Cd,R_),k(o,qc,b),k(o,R,b),T(ws,R,null),e(R,Q_),e(R,$s),e($s,H_),e($s,ai),e(ai,V_),e($s,J_),e(R,X_),e(R,xs),e(xs,K_),e(xs,Fs),e(Fs,Z_),e(xs,Y_),e(R,eg),e(R,Md),e(Md,tg),e(R,og),e(R,ht),e(ht,Ed),e(Ed,zs),e(zs,ng),e(ht,ag),e(ht,Pd),e(Pd,qs),e(qs,sg),e(ht,rg),e(ht,Ad),e(Ad,Bs),e(Bs,ig),e(ht,dg),e(ht,Sd),e(Sd,js),e(js,lg),e(R,cg),e(R,Ke),T(Cs,Ke,null),e(Ke,pg),e(Ke,io),e(io,hg),e(io,Od),e(Od,ug),e(io,mg),e(io,Id),e(Id,fg),e(io,_g),e(Ke,gg),T(mn,Ke,null),e(Ke,bg),T(fn,Ke,null),e(R,kg),e(R,_n),T(Ms,_n,null),e(_n,yg),T(gn,_n,null),e(R,vg),e(R,bn),T(Es,bn,null),e(bn,Tg),T(kn,bn,null),k(o,Bc,b),k(o,lo,b),e(lo,yn),e(yn,Nd),T(Ps,Nd,null),e(lo,wg),e(lo,Ld),e(Ld,$g),k(o,jc,b),k(o,Q,b),T(As,Q,null),e(Q,xg),e(Q,Ss),e(Ss,Fg),e(Ss,si),e(si,zg),e(Ss,qg),e(Q,Bg),e(Q,Os),e(Os,jg),e(Os,Is),e(Is,Cg),e(Os,Mg),e(Q,Eg),e(Q,Dd),e(Dd,Pg),e(Q,Ag),e(Q,ut),e(ut,Gd),e(Gd,Ns),e(Ns,Sg),e(ut,Og),e(ut,Wd),e(Wd,Ls),e(Ls,Ig),e(ut,Ng),e(ut,Ud),e(Ud,Ds),e(Ds,Lg),e(ut,Dg),e(ut,Rd),e(Rd,Gs),e(Gs,Gg),e(Q,Wg),e(Q,Pe),T(Ws,Pe,null),e(Pe,Ug),e(Pe,co),e(co,Rg),e(co,Qd),e(Qd,Qg),e(co,Hg),e(co,Hd),e(Hd,Vg),e(co,Jg),e(Pe,Xg),T(vn,Pe,null),e(Pe,Kg),T(Tn,Pe,null),e(Pe,Zg),T(wn,Pe,null),e(Q,Yg),e(Q,$n),T(Us,$n,null),e($n,eb),T(xn,$n,null),e(Q,tb),e(Q,Fn),T(Rs,Fn,null),e(Fn,ob),T(zn,Fn,null),k(o,Cc,b),k(o,po,b),e(po,qn),e(qn,Vd),T(Qs,Vd,null),e(po,nb),e(po,Jd),e(Jd,ab),k(o,Mc,b),k(o,N,b),T(Hs,N,null),e(N,sb),e(N,Xd),e(Xd,rb),e(N,ib),e(N,Vs),e(Vs,db),e(Vs,ri),e(ri,lb),e(Vs,cb),e(N,pb),e(N,Js),e(Js,hb),e(Js,Xs),e(Xs,ub),e(Js,mb),e(N,fb),e(N,Kd),e(Kd,_b),e(N,gb),e(N,mt),e(mt,Zd),e(Zd,Ks),e(Ks,bb),e(mt,kb),e(mt,Yd),e(Yd,Zs),e(Zs,yb),e(mt,vb),e(mt,el),e(el,Ys),e(Ys,Tb),e(mt,wb),e(mt,tl),e(tl,er),e(er,$b),e(N,xb),e(N,Ze),T(tr,Ze,null),e(Ze,Fb),e(Ze,ho),e(ho,zb),e(ho,ol),e(ol,qb),e(ho,Bb),e(ho,nl),e(nl,jb),e(ho,Cb),e(Ze,Mb),T(Bn,Ze,null),e(Ze,Eb),T(jn,Ze,null),e(N,Pb),e(N,Cn),T(or,Cn,null),e(Cn,Ab),T(Mn,Cn,null),e(N,Sb),e(N,En),T(nr,En,null),e(En,Ob),T(Pn,En,null),k(o,Ec,b),k(o,uo,b),e(uo,An),e(An,al),T(ar,al,null),e(uo,Ib),e(uo,sl),e(sl,Nb),k(o,Pc,b),k(o,L,b),T(sr,L,null),e(L,Lb),e(L,mo),e(mo,Db),e(mo,rl),e(rl,Gb),e(mo,Wb),e(mo,il),e(il,Ub),e(mo,Rb),e(L,Qb),e(L,rr),e(rr,Hb),e(rr,ii),e(ii,Vb),e(rr,Jb),e(L,Xb),e(L,ir),e(ir,Kb),e(ir,dr),e(dr,Zb),e(ir,Yb),e(L,ek),e(L,dl),e(dl,tk),e(L,ok),e(L,ft),e(ft,ll),e(ll,lr),e(lr,nk),e(ft,ak),e(ft,cl),e(cl,cr),e(cr,sk),e(ft,rk),e(ft,pl),e(pl,pr),e(pr,ik),e(ft,dk),e(ft,hl),e(hl,hr),e(hr,lk),e(L,ck),e(L,Ye),T(ur,Ye,null),e(Ye,pk),e(Ye,fo),e(fo,hk),e(fo,ul),e(ul,uk),e(fo,mk),e(fo,ml),e(ml,fk),e(fo,_k),e(Ye,gk),T(Sn,Ye,null),e(Ye,bk),T(On,Ye,null),e(L,kk),e(L,In),T(mr,In,null),e(In,yk),T(Nn,In,null),e(L,vk),e(L,Ln),T(fr,Ln,null),e(Ln,Tk),T(Dn,Ln,null),k(o,Ac,b),k(o,_o,b),e(_o,Gn),e(Gn,fl),T(_r,fl,null),e(_o,wk),e(_o,_l),e(_l,$k),k(o,Sc,b),k(o,Z,b),T(gr,Z,null),e(Z,xk),e(Z,gl),e(gl,Fk),e(Z,zk),e(Z,br),e(br,qk),e(br,di),e(di,Bk),e(br,jk),e(Z,Ck),e(Z,kr),e(kr,Mk),e(kr,yr),e(yr,Ek),e(kr,Pk),e(Z,Ak),e(Z,bl),e(bl,Sk),e(Z,Ok),e(Z,_t),e(_t,kl),e(kl,vr),e(vr,Ik),e(_t,Nk),e(_t,yl),e(yl,Tr),e(Tr,Lk),e(_t,Dk),e(_t,vl),e(vl,wr),e(wr,Gk),e(_t,Wk),e(_t,Tl),e(Tl,$r),e($r,Uk),e(Z,Rk),e(Z,et),T(xr,et,null),e(et,Qk),e(et,go),e(go,Hk),e(go,wl),e(wl,Vk),e(go,Jk),e(go,$l),e($l,Xk),e(go,Kk),e(et,Zk),T(Wn,et,null),e(et,Yk),T(Un,et,null),Oc=!0},p(o,[b]){const Fr={};b&2&&(Fr.$$scope={dirty:b,ctx:o}),Fo.$set(Fr);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:o}),qo.$set(xl);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:o}),Bo.$set(Fl);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:o}),Po.$set(zl);const Rn={};b&2&&(Rn.$$scope={dirty:b,ctx:o}),Ao.$set(Rn);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:o}),Io.$set(ql);const Bl={};b&2&&(Bl.$$scope={dirty:b,ctx:o}),No.$set(Bl);const zr={};b&2&&(zr.$$scope={dirty:b,ctx:o}),Do.$set(zr);const jl={};b&2&&(jl.$$scope={dirty:b,ctx:o}),Go.$set(jl);const Cl={};b&2&&(Cl.$$scope={dirty:b,ctx:o}),Wo.$set(Cl);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:o}),Ro.$set(Ml);const qr={};b&2&&(qr.$$scope={dirty:b,ctx:o}),Qo.$set(qr);const El={};b&2&&(El.$$scope={dirty:b,ctx:o}),Ho.$set(El);const Pl={};b&2&&(Pl.$$scope={dirty:b,ctx:o}),Vo.$set(Pl);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),Jo.$set(bo);const Al={};b&2&&(Al.$$scope={dirty:b,ctx:o}),Ko.$set(Al);const Sl={};b&2&&(Sl.$$scope={dirty:b,ctx:o}),Zo.$set(Sl);const Ol={};b&2&&(Ol.$$scope={dirty:b,ctx:o}),Yo.$set(Ol);const ko={};b&2&&(ko.$$scope={dirty:b,ctx:o}),on.$set(ko);const Il={};b&2&&(Il.$$scope={dirty:b,ctx:o}),an.$set(Il);const Nl={};b&2&&(Nl.$$scope={dirty:b,ctx:o}),sn.$set(Nl);const Br={};b&2&&(Br.$$scope={dirty:b,ctx:o}),rn.$set(Br);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:o}),ln.$set(Ll);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),cn.$set(Dl);const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:o}),pn.$set(Gl);const yo={};b&2&&(yo.$$scope={dirty:b,ctx:o}),hn.$set(yo);const jr={};b&2&&(jr.$$scope={dirty:b,ctx:o}),mn.$set(jr);const Wl={};b&2&&(Wl.$$scope={dirty:b,ctx:o}),fn.$set(Wl);const gt={};b&2&&(gt.$$scope={dirty:b,ctx:o}),gn.$set(gt);const Ul={};b&2&&(Ul.$$scope={dirty:b,ctx:o}),kn.$set(Ul);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:o}),vn.$set(Rl);const Ql={};b&2&&(Ql.$$scope={dirty:b,ctx:o}),Tn.$set(Ql);const Qn={};b&2&&(Qn.$$scope={dirty:b,ctx:o}),wn.$set(Qn);const Hl={};b&2&&(Hl.$$scope={dirty:b,ctx:o}),xn.$set(Hl);const Vl={};b&2&&(Vl.$$scope={dirty:b,ctx:o}),zn.$set(Vl);const Cr={};b&2&&(Cr.$$scope={dirty:b,ctx:o}),Bn.$set(Cr);const Jl={};b&2&&(Jl.$$scope={dirty:b,ctx:o}),jn.$set(Jl);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:o}),Mn.$set(Xl);const Kl={};b&2&&(Kl.$$scope={dirty:b,ctx:o}),Pn.$set(Kl);const Qe={};b&2&&(Qe.$$scope={dirty:b,ctx:o}),Sn.$set(Qe);const bt={};b&2&&(bt.$$scope={dirty:b,ctx:o}),On.$set(bt);const Zl={};b&2&&(Zl.$$scope={dirty:b,ctx:o}),Nn.$set(Zl);const Yl={};b&2&&(Yl.$$scope={dirty:b,ctx:o}),Dn.$set(Yl);const ec={};b&2&&(ec.$$scope={dirty:b,ctx:o}),Wn.$set(ec);const vo={};b&2&&(vo.$$scope={dirty:b,ctx:o}),Un.$set(vo)},i(o){Oc||(w(n.$$.fragment,o),w(ae.$$.fragment,o),w(De.$$.fragment,o),w(ha.$$.fragment,o),w(ua.$$.fragment,o),w(ma.$$.fragment,o),w(fa.$$.fragment,o),w(_a.$$.fragment,o),w(Fo.$$.fragment,o),w(ba.$$.fragment,o),w(ka.$$.fragment,o),w(qo.$$.fragment,o),w(Bo.$$.fragment,o),w(Ta.$$.fragment,o),w($a.$$.fragment,o),w(xa.$$.fragment,o),w(Fa.$$.fragment,o),w(qa.$$.fragment,o),w(Ba.$$.fragment,o),w(Po.$$.fragment,o),w(Ao.$$.fragment,o),w(Ea.$$.fragment,o),w(Pa.$$.fragment,o),w(Aa.$$.fragment,o),w(Na.$$.fragment,o),w(Io.$$.fragment,o),w(No.$$.fragment,o),w(La.$$.fragment,o),w(Da.$$.fragment,o),w(Ra.$$.fragment,o),w(Do.$$.fragment,o),w(Go.$$.fragment,o),w(Wo.$$.fragment,o),w(Qa.$$.fragment,o),w(Ha.$$.fragment,o),w(Ka.$$.fragment,o),w(Ro.$$.fragment,o),w(Qo.$$.fragment,o),w(Ho.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Za.$$.fragment,o),w(Ya.$$.fragment,o),w(ns.$$.fragment,o),w(Ko.$$.fragment,o),w(Zo.$$.fragment,o),w(Yo.$$.fragment,o),w(as.$$.fragment,o),w(ss.$$.fragment,o),w(ls.$$.fragment,o),w(on.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(an.$$.fragment,o),w(fs.$$.fragment,o),w(sn.$$.fragment,o),w(rn.$$.fragment,o),w(_s.$$.fragment,o),w(gs.$$.fragment,o),w(ln.$$.fragment,o),w(vs.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(hn.$$.fragment,o),w(Ts.$$.fragment,o),w(ws.$$.fragment,o),w(Cs.$$.fragment,o),w(mn.$$.fragment,o),w(fn.$$.fragment,o),w(Ms.$$.fragment,o),w(gn.$$.fragment,o),w(Es.$$.fragment,o),w(kn.$$.fragment,o),w(Ps.$$.fragment,o),w(As.$$.fragment,o),w(Ws.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w(wn.$$.fragment,o),w(Us.$$.fragment,o),w(xn.$$.fragment,o),w(Rs.$$.fragment,o),w(zn.$$.fragment,o),w(Qs.$$.fragment,o),w(Hs.$$.fragment,o),w(tr.$$.fragment,o),w(Bn.$$.fragment,o),w(jn.$$.fragment,o),w(or.$$.fragment,o),w(Mn.$$.fragment,o),w(nr.$$.fragment,o),w(Pn.$$.fragment,o),w(ar.$$.fragment,o),w(sr.$$.fragment,o),w(ur.$$.fragment,o),w(Sn.$$.fragment,o),w(On.$$.fragment,o),w(mr.$$.fragment,o),w(Nn.$$.fragment,o),w(fr.$$.fragment,o),w(Dn.$$.fragment,o),w(_r.$$.fragment,o),w(gr.$$.fragment,o),w(xr.$$.fragment,o),w(Wn.$$.fragment,o),w(Un.$$.fragment,o),Oc=!0)},o(o){$(n.$$.fragment,o),$(ae.$$.fragment,o),$(De.$$.fragment,o),$(ha.$$.fragment,o),$(ua.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(_a.$$.fragment,o),$(Fo.$$.fragment,o),$(ba.$$.fragment,o),$(ka.$$.fragment,o),$(qo.$$.fragment,o),$(Bo.$$.fragment,o),$(Ta.$$.fragment,o),$($a.$$.fragment,o),$(xa.$$.fragment,o),$(Fa.$$.fragment,o),$(qa.$$.fragment,o),$(Ba.$$.fragment,o),$(Po.$$.fragment,o),$(Ao.$$.fragment,o),$(Ea.$$.fragment,o),$(Pa.$$.fragment,o),$(Aa.$$.fragment,o),$(Na.$$.fragment,o),$(Io.$$.fragment,o),$(No.$$.fragment,o),$(La.$$.fragment,o),$(Da.$$.fragment,o),$(Ra.$$.fragment,o),$(Do.$$.fragment,o),$(Go.$$.fragment,o),$(Wo.$$.fragment,o),$(Qa.$$.fragment,o),$(Ha.$$.fragment,o),$(Ka.$$.fragment,o),$(Ro.$$.fragment,o),$(Qo.$$.fragment,o),$(Ho.$$.fragment,o),$(Vo.$$.fragment,o),$(Jo.$$.fragment,o),$(Za.$$.fragment,o),$(Ya.$$.fragment,o),$(ns.$$.fragment,o),$(Ko.$$.fragment,o),$(Zo.$$.fragment,o),$(Yo.$$.fragment,o),$(as.$$.fragment,o),$(ss.$$.fragment,o),$(ls.$$.fragment,o),$(on.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(an.$$.fragment,o),$(fs.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),$(_s.$$.fragment,o),$(gs.$$.fragment,o),$(ln.$$.fragment,o),$(vs.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(hn.$$.fragment,o),$(Ts.$$.fragment,o),$(ws.$$.fragment,o),$(Cs.$$.fragment,o),$(mn.$$.fragment,o),$(fn.$$.fragment,o),$(Ms.$$.fragment,o),$(gn.$$.fragment,o),$(Es.$$.fragment,o),$(kn.$$.fragment,o),$(Ps.$$.fragment,o),$(As.$$.fragment,o),$(Ws.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(wn.$$.fragment,o),$(Us.$$.fragment,o),$(xn.$$.fragment,o),$(Rs.$$.fragment,o),$(zn.$$.fragment,o),$(Qs.$$.fragment,o),$(Hs.$$.fragment,o),$(tr.$$.fragment,o),$(Bn.$$.fragment,o),$(jn.$$.fragment,o),$(or.$$.fragment,o),$(Mn.$$.fragment,o),$(nr.$$.fragment,o),$(Pn.$$.fragment,o),$(ar.$$.fragment,o),$(sr.$$.fragment,o),$(ur.$$.fragment,o),$(Sn.$$.fragment,o),$(On.$$.fragment,o),$(mr.$$.fragment,o),$(Nn.$$.fragment,o),$(fr.$$.fragment,o),$(Dn.$$.fragment,o),$(_r.$$.fragment,o),$(gr.$$.fragment,o),$(xr.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),Oc=!1},d(o){t(l),o&&t(g),o&&t(m),x(n),o&&t(O),o&&t(j),o&&t(He),o&&t(J),x(ae),o&&t(ce),o&&t(pe),o&&t(G),o&&t(qe),o&&t(Ve),o&&t(Y),o&&t(M),o&&t(H),o&&t(he),o&&t(ve),x(De),o&&t(tc),o&&t(kt),o&&t(oc),o&&t(St),x(ha),o&&t(nc),o&&t(je),o&&t(ac),o&&t(Lt),x(ua),o&&t(sc),o&&t(yt),o&&t(rc),x(ma,o),o&&t(ic),o&&t(Dt),x(fa),o&&t(dc),o&&t(We),x(_a),x(Fo),o&&t(lc),o&&t(Ut),x(ba),o&&t(cc),o&&t(A),x(ka),x(qo),x(Bo),x(Ta),x($a),x(xa),x(Fa),o&&t(pc),o&&t(Rt),x(qa),o&&t(hc),o&&t(U),x(Ba),x(Po),x(Ao),x(Ea),o&&t(uc),o&&t(Qt),x(Pa),o&&t(mc),o&&t(Ue),x(Aa),x(Na),x(Io),x(No),o&&t(fc),o&&t(Vt),x(La),o&&t(_c),o&&t(Re),x(Da),x(Ra),x(Do),x(Go),x(Wo),o&&t(gc),o&&t(Xt),x(Qa),o&&t(bc),o&&t(Te),x(Ha),x(Ka),x(Ro),x(Qo),x(Ho),x(Vo),x(Jo),o&&t(kc),o&&t(Zt),x(Za),o&&t(yc),o&&t(we),x(Ya),x(ns),x(Ko),x(Zo),x(Yo),o&&t(vc),o&&t(to),x(as),o&&t(Tc),o&&t($e),x(ss),x(ls),x(on),o&&t(wc),o&&t(oo),x(cs),o&&t($c),o&&t(xe),x(ps),x(an),x(fs),x(sn),x(rn),o&&t(xc),o&&t(ao),x(_s),o&&t(Fc),o&&t(Fe),x(gs),x(ln),x(vs),x(cn),x(pn),x(hn),o&&t(zc),o&&t(ro),x(Ts),o&&t(qc),o&&t(R),x(ws),x(Cs),x(mn),x(fn),x(Ms),x(gn),x(Es),x(kn),o&&t(Bc),o&&t(lo),x(Ps),o&&t(jc),o&&t(Q),x(As),x(Ws),x(vn),x(Tn),x(wn),x(Us),x(xn),x(Rs),x(zn),o&&t(Cc),o&&t(po),x(Qs),o&&t(Mc),o&&t(N),x(Hs),x(tr),x(Bn),x(jn),x(or),x(Mn),x(nr),x(Pn),o&&t(Ec),o&&t(uo),x(ar),o&&t(Pc),o&&t(L),x(sr),x(ur),x(Sn),x(On),x(mr),x(Nn),x(fr),x(Dn),o&&t(Ac),o&&t(_o),x(_r),o&&t(Sc),o&&t(Z),x(gr),x(xr),x(Wn),x(Un)}}}const u$={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"},{local:"transformers.FlaxBartForCausalLM",title:"FlaxBartForCausalLM"}],title:"BART"};function m$(F){return yw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class v$ extends _w{constructor(l){super();gw(this,l,m$,h$,bw,{})}}export{v$ as default,u$ as metadata};
