import{S as ci,i as ui,s as pi,e as s,k as h,w as y,t as i,M as hi,c as a,d as t,m as g,a as r,x as w,h as d,b as m,G as e,g as b,y as B,q as k,o as T,B as $,v as gi,L as U}from"../../chunks/vendor-hf-doc-builder.js";import{T as $n}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as V}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ne}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as R}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function mi(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import BigBirdPegasusConfig, BigBirdPegasusModel

# Initializing a BigBirdPegasus bigbird-pegasus-base style configuration
configuration = BigBirdPegasusConfig()

# Initializing a model (with random weights) from the bigbird-pegasus-base style configuration
model = BigBirdPegasusModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdPegasusConfig, BigBirdPegasusModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BigBirdPegasus bigbird-pegasus-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BigBirdPegasusConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the bigbird-pegasus-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=s("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function fi(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var F=r(c);u=d(F,"Module"),F.forEach(t),v=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,l,p),e(l,_),e(l,c),e(c,u),e(l,v)},d(n){n&&t(l)}}}function _i(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import PegasusTokenizerFast, BigBirdPegasusModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=s("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function bi(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var F=r(c);u=d(F,"Module"),F.forEach(t),v=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,l,p),e(l,_),e(l,c),e(c,u),e(l,v)},d(n){n&&t(l)}}}function vi(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusForConditionalGeneration

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
<span class="hljs-string">&#x27;dominant sequence models are based on recurrent or convolutional neural networks .&#x27;</span>`}}),{c(){l=s("p"),_=i("Summarization example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Summarization example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function yi(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var F=r(c);u=d(F,"Module"),F.forEach(t),v=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,l,p),e(l,_),e(l,c),e(c,u),e(l,v)},d(n){n&&t(l)}}}function wi(P){let l,_,c,u,v;return u=new V({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=s("p"),_=i("Example of single-label classification:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example of single-label classification:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function Bi(P){let l,_;return l=new V({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BigBirdPegasusForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-bigbird_pegasus", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){y(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){B(l,c,u),_=!0},p:U,i(c){_||(k(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function ki(P){let l,_,c,u,v;return u=new V({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=s("p"),_=i("Example of multi-label classification:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example of multi-label classification:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function Ti(P){let l,_;return l=new V({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){B(l,c,u),_=!0},p:U,i(c){_||(k(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function $i(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var F=r(c);u=d(F,"Module"),F.forEach(t),v=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,l,p),e(l,_),e(l,c),e(c,u),e(l,v)},d(n){n&&t(l)}}}function Pi(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import PegasusTokenizerFast, BigBirdPegasusForQuestionAnswering
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
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizerFast, BigBirdPegasusForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27;&#x27;</span>`}}),{c(){l=s("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function qi(P){let l,_;return l=new V({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.96</span>`}}),{c(){y(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){B(l,c,u),_=!0},p:U,i(c){_||(k(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function zi(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusForCausalLM

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=s("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function Fi(P){let l,_,c,u,v,n,p,F,Pn,Ot,J,ce,Zo,Ie,qn,Ko,zn,Lt,ue,Fn,De,xn,Cn,Nt,Fo,Mn,It,xo,Yo,jn,Dt,Co,En,Gt,q,Ge,Sn,We,An,On,Ln,S,Nn,Xo,In,Dn,et,Gn,Wn,ot,Qn,Hn,tt,Rn,Un,Vn,nt,Jn,Zn,st,Kn,Yn,Qe,Xn,at,es,os,ts,He,ns,rt,ss,as,rs,Re,is,Ue,ds,ls,Wt,pe,cs,Ve,us,ps,Qt,Z,he,it,Je,hs,dt,gs,Ht,A,Ze,ms,K,fs,Mo,_s,bs,Ke,vs,ys,ws,Y,Bs,jo,ks,Ts,Eo,$s,Ps,qs,ge,Rt,X,me,lt,Ye,zs,ct,Fs,Ut,O,Xe,xs,eo,Cs,So,Ms,js,Es,oo,Ss,to,As,Os,Ls,N,no,Ns,ee,Is,Ao,Ds,Gs,ut,Ws,Qs,Hs,fe,Rs,_e,Vt,oe,be,pt,so,Us,ht,Vs,Jt,L,ao,Js,ro,Zs,Oo,Ks,Ys,Xs,io,ea,lo,oa,ta,na,I,co,sa,te,aa,Lo,ra,ia,gt,da,la,ca,ve,ua,ye,Zt,ne,we,mt,uo,pa,ft,ha,Kt,x,po,ga,_t,ma,fa,ho,_a,No,ba,va,ya,go,wa,mo,Ba,ka,Ta,z,fo,$a,se,Pa,Io,qa,za,bt,Fa,xa,Ca,Be,Ma,ke,ja,Te,Ea,$e,Sa,Pe,Yt,ae,qe,vt,_o,Aa,yt,Oa,Xt,C,bo,La,re,Na,wt,Ia,Da,Bt,Ga,Wa,Qa,vo,Ha,Do,Ra,Ua,Va,yo,Ja,wo,Za,Ka,Ya,M,Bo,Xa,ie,er,Go,or,tr,kt,nr,sr,ar,ze,rr,Fe,ir,xe,en,de,Ce,Tt,ko,dr,$t,lr,on,le,To,cr,Me,$o,ur,je,tn;return n=new Ne({}),Ie=new Ne({}),Je=new Ne({}),Ze=new D({props:{name:"class transformers.BigBirdPegasusConfig",anchor:"transformers.BigBirdPegasusConfig",parameters:[{name:"vocab_size",val:" = 96103"},{name:"max_position_embeddings",val:" = 4096"},{name:"encoder_layers",val:" = 16"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu_new'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"attention_type",val:" = 'block_sparse'"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"use_bias",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 96103) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.BigBirdPegasusConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.BigBirdPegasusConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.BigBirdPegasusConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;block_sparse&quot;</code>) &#x2014;
Whether to use block sparse attention (with n complexity) as introduced in paper or original attention
layer (with n^2 complexity) in encoder. Possible values are <code>&quot;original_full&quot;</code> and <code>&quot;block_sparse&quot;</code>.`,name:"attention_type"},{anchor:"transformers.BigBirdPegasusConfig.use_bias",description:`<strong>use_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use bias in query, key, value.`,name:"use_bias"},{anchor:"transformers.BigBirdPegasusConfig.block_size",description:`<strong>block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of each block. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"block_size"},{anchor:"transformers.BigBirdPegasusConfig.num_random_blocks",description:`<strong>num_random_blocks</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Each query is going to attend these many number of random blocks. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"num_random_blocks"},{anchor:"transformers.BigBirdPegasusConfig.scale_embeddings",description:`<strong>scale_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale embeddings with (hidden_size ** 0.5).`,name:"scale_embeddings"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/configuration_bigbird_pegasus.py#L43"}}),ge=new R({props:{anchor:"transformers.BigBirdPegasusConfig.example",$$slots:{default:[mi]},$$scope:{ctx:P}}}),Ye=new Ne({}),Xe=new D({props:{name:"class transformers.BigBirdPegasusModel",anchor:"transformers.BigBirdPegasusModel",parameters:[{name:"config",val:": BigBirdPegasusConfig"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2352"}}),no=new D({props:{name:"forward",anchor:"transformers.BigBirdPegasusModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2379",returnDescription:`
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
`}}),fe=new $n({props:{$$slots:{default:[fi]},$$scope:{ctx:P}}}),_e=new R({props:{anchor:"transformers.BigBirdPegasusModel.forward.example",$$slots:{default:[_i]},$$scope:{ctx:P}}}),so=new Ne({}),ao=new D({props:{name:"class transformers.BigBirdPegasusForConditionalGeneration",anchor:"transformers.BigBirdPegasusForConditionalGeneration",parameters:[{name:"config",val:": BigBirdPegasusConfig"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2481"}}),co=new D({props:{name:"forward",anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2520",returnDescription:`
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
`}}),ve=new $n({props:{$$slots:{default:[bi]},$$scope:{ctx:P}}}),ye=new R({props:{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.example",$$slots:{default:[vi]},$$scope:{ctx:P}}}),uo=new Ne({}),po=new D({props:{name:"class transformers.BigBirdPegasusForSequenceClassification",anchor:"transformers.BigBirdPegasusForSequenceClassification",parameters:[{name:"config",val:": BigBirdPegasusConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2653"}}),fo=new D({props:{name:"forward",anchor:"transformers.BigBirdPegasusForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2666",returnDescription:`
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
`}}),Be=new $n({props:{$$slots:{default:[yi]},$$scope:{ctx:P}}}),ke=new R({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example",$$slots:{default:[wi]},$$scope:{ctx:P}}}),Te=new R({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-2",$$slots:{default:[Bi]},$$scope:{ctx:P}}}),$e=new R({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-3",$$slots:{default:[ki]},$$scope:{ctx:P}}}),Pe=new R({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-4",$$slots:{default:[Ti]},$$scope:{ctx:P}}}),_o=new Ne({}),bo=new D({props:{name:"class transformers.BigBirdPegasusForQuestionAnswering",anchor:"transformers.BigBirdPegasusForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2781"}}),Bo=new D({props:{name:"forward",anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2793",returnDescription:`
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
`}}),ze=new $n({props:{$$slots:{default:[$i]},$$scope:{ctx:P}}}),Fe=new R({props:{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.example",$$slots:{default:[Pi]},$$scope:{ctx:P}}}),xe=new R({props:{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.example-2",$$slots:{default:[qi]},$$scope:{ctx:P}}}),ko=new Ne({}),To=new D({props:{name:"class transformers.BigBirdPegasusForCausalLM",anchor:"transformers.BigBirdPegasusForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2912"}}),$o=new D({props:{name:"forward",anchor:"transformers.BigBirdPegasusForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2943",returnDescription:`
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
`}}),je=new R({props:{anchor:"transformers.BigBirdPegasusForCausalLM.forward.example",$$slots:{default:[zi]},$$scope:{ctx:P}}}),{c(){l=s("meta"),_=h(),c=s("h1"),u=s("a"),v=s("span"),y(n.$$.fragment),p=h(),F=s("span"),Pn=i("BigBirdPegasus"),Ot=h(),J=s("h2"),ce=s("a"),Zo=s("span"),y(Ie.$$.fragment),qn=h(),Ko=s("span"),zn=i("Overview"),Lt=h(),ue=s("p"),Fn=i("The BigBird model was proposed in "),De=s("a"),xn=i("Big Bird: Transformers for Longer Sequences"),Cn=i(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),Nt=h(),Fo=s("p"),Mn=i("The abstract from the paper is the following:"),It=h(),xo=s("p"),Yo=s("em"),jn=i(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),Dt=h(),Co=s("p"),En=i("Tips:"),Gt=h(),q=s("ul"),Ge=s("li"),Sn=i("For an in-detail explanation on how BigBird\u2019s attention works, see "),We=s("a"),An=i("this blog post"),On=i("."),Ln=h(),S=s("li"),Nn=i("BigBird comes with 2 implementations: "),Xo=s("strong"),In=i("original_full"),Dn=i(" & "),et=s("strong"),Gn=i("block_sparse"),Wn=i(`. For the sequence length < 1024, using
`),ot=s("strong"),Qn=i("original_full"),Hn=i(" is advised as there is no benefit in using "),tt=s("strong"),Rn=i("block_sparse"),Un=i(" attention."),Vn=h(),nt=s("li"),Jn=i("The code currently uses window size of 3 blocks and 2 global blocks."),Zn=h(),st=s("li"),Kn=i("Sequence length must be divisible by block size."),Yn=h(),Qe=s("li"),Xn=i("Current implementation supports only "),at=s("strong"),es=i("ITC"),os=i("."),ts=h(),He=s("li"),ns=i("Current implementation doesn\u2019t support "),rt=s("strong"),ss=i("num_random_blocks = 0"),as=i("."),rs=h(),Re=s("li"),is=i("BigBirdPegasus uses the "),Ue=s("a"),ds=i("PegasusTokenizer"),ls=i("."),Wt=h(),pe=s("p"),cs=i("The original code can be found "),Ve=s("a"),us=i("here"),ps=i("."),Qt=h(),Z=s("h2"),he=s("a"),it=s("span"),y(Je.$$.fragment),hs=h(),dt=s("span"),gs=i("BigBirdPegasusConfig"),Ht=h(),A=s("div"),y(Ze.$$.fragment),ms=h(),K=s("p"),fs=i("This is the configuration class to store the configuration of a "),Mo=s("a"),_s=i("BigBirdPegasusModel"),bs=i(`. It is used to instantiate
an BigBirdPegasus model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BigBirdPegasus
`),Ke=s("a"),vs=i("google/bigbird-pegasus-large-arxiv"),ys=i(" architecture."),ws=h(),Y=s("p"),Bs=i("Configuration objects inherit from "),jo=s("a"),ks=i("PretrainedConfig"),Ts=i(` and can be used to control the model outputs. Read the
documentation from `),Eo=s("a"),$s=i("PretrainedConfig"),Ps=i(" for more information."),qs=h(),y(ge.$$.fragment),Rt=h(),X=s("h2"),me=s("a"),lt=s("span"),y(Ye.$$.fragment),zs=h(),ct=s("span"),Fs=i("BigBirdPegasusModel"),Ut=h(),O=s("div"),y(Xe.$$.fragment),xs=h(),eo=s("p"),Cs=i(`The bare BigBirdPegasus Model outputting raw hidden-states without any specific head on top.
This model inherits from `),So=s("a"),Ms=i("PreTrainedModel"),js=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Es=h(),oo=s("p"),Ss=i("This model is also a PyTorch "),to=s("a"),As=i("torch.nn.Module"),Os=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ls=h(),N=s("div"),y(no.$$.fragment),Ns=h(),ee=s("p"),Is=i("The "),Ao=s("a"),Ds=i("BigBirdPegasusModel"),Gs=i(" forward method, overrides the "),ut=s("code"),Ws=i("__call__"),Qs=i(" special method."),Hs=h(),y(fe.$$.fragment),Rs=h(),y(_e.$$.fragment),Vt=h(),oe=s("h2"),be=s("a"),pt=s("span"),y(so.$$.fragment),Us=h(),ht=s("span"),Vs=i("BigBirdPegasusForConditionalGeneration"),Jt=h(),L=s("div"),y(ao.$$.fragment),Js=h(),ro=s("p"),Zs=i(`The BigBirdPegasus Model with a language modeling head. Can be used for summarization.
This model inherits from `),Oo=s("a"),Ks=i("PreTrainedModel"),Ys=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Xs=h(),io=s("p"),ea=i("This model is also a PyTorch "),lo=s("a"),oa=i("torch.nn.Module"),ta=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),na=h(),I=s("div"),y(co.$$.fragment),sa=h(),te=s("p"),aa=i("The "),Lo=s("a"),ra=i("BigBirdPegasusForConditionalGeneration"),ia=i(" forward method, overrides the "),gt=s("code"),da=i("__call__"),la=i(" special method."),ca=h(),y(ve.$$.fragment),ua=h(),y(ye.$$.fragment),Zt=h(),ne=s("h2"),we=s("a"),mt=s("span"),y(uo.$$.fragment),pa=h(),ft=s("span"),ha=i("BigBirdPegasusForSequenceClassification"),Kt=h(),x=s("div"),y(po.$$.fragment),ga=h(),_t=s("p"),ma=i(`BigBirdPegasus model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),fa=h(),ho=s("p"),_a=i("This model inherits from "),No=s("a"),ba=i("PreTrainedModel"),va=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ya=h(),go=s("p"),wa=i("This model is also a PyTorch "),mo=s("a"),Ba=i("torch.nn.Module"),ka=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ta=h(),z=s("div"),y(fo.$$.fragment),$a=h(),se=s("p"),Pa=i("The "),Io=s("a"),qa=i("BigBirdPegasusForSequenceClassification"),za=i(" forward method, overrides the "),bt=s("code"),Fa=i("__call__"),xa=i(" special method."),Ca=h(),y(Be.$$.fragment),Ma=h(),y(ke.$$.fragment),ja=h(),y(Te.$$.fragment),Ea=h(),y($e.$$.fragment),Sa=h(),y(Pe.$$.fragment),Yt=h(),ae=s("h2"),qe=s("a"),vt=s("span"),y(_o.$$.fragment),Aa=h(),yt=s("span"),Oa=i("BigBirdPegasusForQuestionAnswering"),Xt=h(),C=s("div"),y(bo.$$.fragment),La=h(),re=s("p"),Na=i(`BigBirdPegasus Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),wt=s("code"),Ia=i("span start logits"),Da=i(" and "),Bt=s("code"),Ga=i("span end logits"),Wa=i(")."),Qa=h(),vo=s("p"),Ha=i("This model inherits from "),Do=s("a"),Ra=i("PreTrainedModel"),Ua=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Va=h(),yo=s("p"),Ja=i("This model is also a PyTorch "),wo=s("a"),Za=i("torch.nn.Module"),Ka=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ya=h(),M=s("div"),y(Bo.$$.fragment),Xa=h(),ie=s("p"),er=i("The "),Go=s("a"),or=i("BigBirdPegasusForQuestionAnswering"),tr=i(" forward method, overrides the "),kt=s("code"),nr=i("__call__"),sr=i(" special method."),ar=h(),y(ze.$$.fragment),rr=h(),y(Fe.$$.fragment),ir=h(),y(xe.$$.fragment),en=h(),de=s("h2"),Ce=s("a"),Tt=s("span"),y(ko.$$.fragment),dr=h(),$t=s("span"),lr=i("BigBirdPegasusForCausalLM"),on=h(),le=s("div"),y(To.$$.fragment),cr=h(),Me=s("div"),y($o.$$.fragment),ur=h(),y(je.$$.fragment),this.h()},l(o){const f=hi('[data-svelte="svelte-1phssyn"]',document.head);l=a(f,"META",{name:!0,content:!0}),f.forEach(t),_=g(o),c=a(o,"H1",{class:!0});var Po=r(c);u=a(Po,"A",{id:!0,class:!0,href:!0});var Pt=r(u);v=a(Pt,"SPAN",{});var qt=r(v);w(n.$$.fragment,qt),qt.forEach(t),Pt.forEach(t),p=g(Po),F=a(Po,"SPAN",{});var zt=r(F);Pn=d(zt,"BigBirdPegasus"),zt.forEach(t),Po.forEach(t),Ot=g(o),J=a(o,"H2",{class:!0});var qo=r(J);ce=a(qo,"A",{id:!0,class:!0,href:!0});var Ft=r(ce);Zo=a(Ft,"SPAN",{});var xt=r(Zo);w(Ie.$$.fragment,xt),xt.forEach(t),Ft.forEach(t),qn=g(qo),Ko=a(qo,"SPAN",{});var Ct=r(Ko);zn=d(Ct,"Overview"),Ct.forEach(t),qo.forEach(t),Lt=g(o),ue=a(o,"P",{});var zo=r(ue);Fn=d(zo,"The BigBird model was proposed in "),De=a(zo,"A",{href:!0,rel:!0});var Mt=r(De);xn=d(Mt,"Big Bird: Transformers for Longer Sequences"),Mt.forEach(t),Cn=d(zo,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),zo.forEach(t),Nt=g(o),Fo=a(o,"P",{});var jt=r(Fo);Mn=d(jt,"The abstract from the paper is the following:"),jt.forEach(t),It=g(o),xo=a(o,"P",{});var Et=r(xo);Yo=a(Et,"EM",{});var St=r(Yo);jn=d(St,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),St.forEach(t),Et.forEach(t),Dt=g(o),Co=a(o,"P",{});var At=r(Co);En=d(At,"Tips:"),At.forEach(t),Gt=g(o),q=a(o,"UL",{});var j=r(q);Ge=a(j,"LI",{});var nn=r(Ge);Sn=d(nn,"For an in-detail explanation on how BigBird\u2019s attention works, see "),We=a(nn,"A",{href:!0,rel:!0});var pr=r(We);An=d(pr,"this blog post"),pr.forEach(t),On=d(nn,"."),nn.forEach(t),Ln=g(j),S=a(j,"LI",{});var G=r(S);Nn=d(G,"BigBird comes with 2 implementations: "),Xo=a(G,"STRONG",{});var hr=r(Xo);In=d(hr,"original_full"),hr.forEach(t),Dn=d(G," & "),et=a(G,"STRONG",{});var gr=r(et);Gn=d(gr,"block_sparse"),gr.forEach(t),Wn=d(G,`. For the sequence length < 1024, using
`),ot=a(G,"STRONG",{});var mr=r(ot);Qn=d(mr,"original_full"),mr.forEach(t),Hn=d(G," is advised as there is no benefit in using "),tt=a(G,"STRONG",{});var fr=r(tt);Rn=d(fr,"block_sparse"),fr.forEach(t),Un=d(G," attention."),G.forEach(t),Vn=g(j),nt=a(j,"LI",{});var _r=r(nt);Jn=d(_r,"The code currently uses window size of 3 blocks and 2 global blocks."),_r.forEach(t),Zn=g(j),st=a(j,"LI",{});var br=r(st);Kn=d(br,"Sequence length must be divisible by block size."),br.forEach(t),Yn=g(j),Qe=a(j,"LI",{});var sn=r(Qe);Xn=d(sn,"Current implementation supports only "),at=a(sn,"STRONG",{});var vr=r(at);es=d(vr,"ITC"),vr.forEach(t),os=d(sn,"."),sn.forEach(t),ts=g(j),He=a(j,"LI",{});var an=r(He);ns=d(an,"Current implementation doesn\u2019t support "),rt=a(an,"STRONG",{});var yr=r(rt);ss=d(yr,"num_random_blocks = 0"),yr.forEach(t),as=d(an,"."),an.forEach(t),rs=g(j),Re=a(j,"LI",{});var rn=r(Re);is=d(rn,"BigBirdPegasus uses the "),Ue=a(rn,"A",{href:!0,rel:!0});var wr=r(Ue);ds=d(wr,"PegasusTokenizer"),wr.forEach(t),ls=d(rn,"."),rn.forEach(t),j.forEach(t),Wt=g(o),pe=a(o,"P",{});var dn=r(pe);cs=d(dn,"The original code can be found "),Ve=a(dn,"A",{href:!0,rel:!0});var Br=r(Ve);us=d(Br,"here"),Br.forEach(t),ps=d(dn,"."),dn.forEach(t),Qt=g(o),Z=a(o,"H2",{class:!0});var ln=r(Z);he=a(ln,"A",{id:!0,class:!0,href:!0});var kr=r(he);it=a(kr,"SPAN",{});var Tr=r(it);w(Je.$$.fragment,Tr),Tr.forEach(t),kr.forEach(t),hs=g(ln),dt=a(ln,"SPAN",{});var $r=r(dt);gs=d($r,"BigBirdPegasusConfig"),$r.forEach(t),ln.forEach(t),Ht=g(o),A=a(o,"DIV",{class:!0});var Ee=r(A);w(Ze.$$.fragment,Ee),ms=g(Ee),K=a(Ee,"P",{});var Wo=r(K);fs=d(Wo,"This is the configuration class to store the configuration of a "),Mo=a(Wo,"A",{href:!0});var Pr=r(Mo);_s=d(Pr,"BigBirdPegasusModel"),Pr.forEach(t),bs=d(Wo,`. It is used to instantiate
an BigBirdPegasus model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BigBirdPegasus
`),Ke=a(Wo,"A",{href:!0,rel:!0});var qr=r(Ke);vs=d(qr,"google/bigbird-pegasus-large-arxiv"),qr.forEach(t),ys=d(Wo," architecture."),Wo.forEach(t),ws=g(Ee),Y=a(Ee,"P",{});var Qo=r(Y);Bs=d(Qo,"Configuration objects inherit from "),jo=a(Qo,"A",{href:!0});var zr=r(jo);ks=d(zr,"PretrainedConfig"),zr.forEach(t),Ts=d(Qo,` and can be used to control the model outputs. Read the
documentation from `),Eo=a(Qo,"A",{href:!0});var Fr=r(Eo);$s=d(Fr,"PretrainedConfig"),Fr.forEach(t),Ps=d(Qo," for more information."),Qo.forEach(t),qs=g(Ee),w(ge.$$.fragment,Ee),Ee.forEach(t),Rt=g(o),X=a(o,"H2",{class:!0});var cn=r(X);me=a(cn,"A",{id:!0,class:!0,href:!0});var xr=r(me);lt=a(xr,"SPAN",{});var Cr=r(lt);w(Ye.$$.fragment,Cr),Cr.forEach(t),xr.forEach(t),zs=g(cn),ct=a(cn,"SPAN",{});var Mr=r(ct);Fs=d(Mr,"BigBirdPegasusModel"),Mr.forEach(t),cn.forEach(t),Ut=g(o),O=a(o,"DIV",{class:!0});var Se=r(O);w(Xe.$$.fragment,Se),xs=g(Se),eo=a(Se,"P",{});var un=r(eo);Cs=d(un,`The bare BigBirdPegasus Model outputting raw hidden-states without any specific head on top.
This model inherits from `),So=a(un,"A",{href:!0});var jr=r(So);Ms=d(jr,"PreTrainedModel"),jr.forEach(t),js=d(un,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),un.forEach(t),Es=g(Se),oo=a(Se,"P",{});var pn=r(oo);Ss=d(pn,"This model is also a PyTorch "),to=a(pn,"A",{href:!0,rel:!0});var Er=r(to);As=d(Er,"torch.nn.Module"),Er.forEach(t),Os=d(pn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pn.forEach(t),Ls=g(Se),N=a(Se,"DIV",{class:!0});var Ae=r(N);w(no.$$.fragment,Ae),Ns=g(Ae),ee=a(Ae,"P",{});var Ho=r(ee);Is=d(Ho,"The "),Ao=a(Ho,"A",{href:!0});var Sr=r(Ao);Ds=d(Sr,"BigBirdPegasusModel"),Sr.forEach(t),Gs=d(Ho," forward method, overrides the "),ut=a(Ho,"CODE",{});var Ar=r(ut);Ws=d(Ar,"__call__"),Ar.forEach(t),Qs=d(Ho," special method."),Ho.forEach(t),Hs=g(Ae),w(fe.$$.fragment,Ae),Rs=g(Ae),w(_e.$$.fragment,Ae),Ae.forEach(t),Se.forEach(t),Vt=g(o),oe=a(o,"H2",{class:!0});var hn=r(oe);be=a(hn,"A",{id:!0,class:!0,href:!0});var Or=r(be);pt=a(Or,"SPAN",{});var Lr=r(pt);w(so.$$.fragment,Lr),Lr.forEach(t),Or.forEach(t),Us=g(hn),ht=a(hn,"SPAN",{});var Nr=r(ht);Vs=d(Nr,"BigBirdPegasusForConditionalGeneration"),Nr.forEach(t),hn.forEach(t),Jt=g(o),L=a(o,"DIV",{class:!0});var Oe=r(L);w(ao.$$.fragment,Oe),Js=g(Oe),ro=a(Oe,"P",{});var gn=r(ro);Zs=d(gn,`The BigBirdPegasus Model with a language modeling head. Can be used for summarization.
This model inherits from `),Oo=a(gn,"A",{href:!0});var Ir=r(Oo);Ks=d(Ir,"PreTrainedModel"),Ir.forEach(t),Ys=d(gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),gn.forEach(t),Xs=g(Oe),io=a(Oe,"P",{});var mn=r(io);ea=d(mn,"This model is also a PyTorch "),lo=a(mn,"A",{href:!0,rel:!0});var Dr=r(lo);oa=d(Dr,"torch.nn.Module"),Dr.forEach(t),ta=d(mn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mn.forEach(t),na=g(Oe),I=a(Oe,"DIV",{class:!0});var Le=r(I);w(co.$$.fragment,Le),sa=g(Le),te=a(Le,"P",{});var Ro=r(te);aa=d(Ro,"The "),Lo=a(Ro,"A",{href:!0});var Gr=r(Lo);ra=d(Gr,"BigBirdPegasusForConditionalGeneration"),Gr.forEach(t),ia=d(Ro," forward method, overrides the "),gt=a(Ro,"CODE",{});var Wr=r(gt);da=d(Wr,"__call__"),Wr.forEach(t),la=d(Ro," special method."),Ro.forEach(t),ca=g(Le),w(ve.$$.fragment,Le),ua=g(Le),w(ye.$$.fragment,Le),Le.forEach(t),Oe.forEach(t),Zt=g(o),ne=a(o,"H2",{class:!0});var fn=r(ne);we=a(fn,"A",{id:!0,class:!0,href:!0});var Qr=r(we);mt=a(Qr,"SPAN",{});var Hr=r(mt);w(uo.$$.fragment,Hr),Hr.forEach(t),Qr.forEach(t),pa=g(fn),ft=a(fn,"SPAN",{});var Rr=r(ft);ha=d(Rr,"BigBirdPegasusForSequenceClassification"),Rr.forEach(t),fn.forEach(t),Kt=g(o),x=a(o,"DIV",{class:!0});var W=r(x);w(po.$$.fragment,W),ga=g(W),_t=a(W,"P",{});var Ur=r(_t);ma=d(Ur,`BigBirdPegasus model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Ur.forEach(t),fa=g(W),ho=a(W,"P",{});var _n=r(ho);_a=d(_n,"This model inherits from "),No=a(_n,"A",{href:!0});var Vr=r(No);ba=d(Vr,"PreTrainedModel"),Vr.forEach(t),va=d(_n,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),_n.forEach(t),ya=g(W),go=a(W,"P",{});var bn=r(go);wa=d(bn,"This model is also a PyTorch "),mo=a(bn,"A",{href:!0,rel:!0});var Jr=r(mo);Ba=d(Jr,"torch.nn.Module"),Jr.forEach(t),ka=d(bn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bn.forEach(t),Ta=g(W),z=a(W,"DIV",{class:!0});var E=r(z);w(fo.$$.fragment,E),$a=g(E),se=a(E,"P",{});var Uo=r(se);Pa=d(Uo,"The "),Io=a(Uo,"A",{href:!0});var Zr=r(Io);qa=d(Zr,"BigBirdPegasusForSequenceClassification"),Zr.forEach(t),za=d(Uo," forward method, overrides the "),bt=a(Uo,"CODE",{});var Kr=r(bt);Fa=d(Kr,"__call__"),Kr.forEach(t),xa=d(Uo," special method."),Uo.forEach(t),Ca=g(E),w(Be.$$.fragment,E),Ma=g(E),w(ke.$$.fragment,E),ja=g(E),w(Te.$$.fragment,E),Ea=g(E),w($e.$$.fragment,E),Sa=g(E),w(Pe.$$.fragment,E),E.forEach(t),W.forEach(t),Yt=g(o),ae=a(o,"H2",{class:!0});var vn=r(ae);qe=a(vn,"A",{id:!0,class:!0,href:!0});var Yr=r(qe);vt=a(Yr,"SPAN",{});var Xr=r(vt);w(_o.$$.fragment,Xr),Xr.forEach(t),Yr.forEach(t),Aa=g(vn),yt=a(vn,"SPAN",{});var ei=r(yt);Oa=d(ei,"BigBirdPegasusForQuestionAnswering"),ei.forEach(t),vn.forEach(t),Xt=g(o),C=a(o,"DIV",{class:!0});var Q=r(C);w(bo.$$.fragment,Q),La=g(Q),re=a(Q,"P",{});var Vo=r(re);Na=d(Vo,`BigBirdPegasus Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),wt=a(Vo,"CODE",{});var oi=r(wt);Ia=d(oi,"span start logits"),oi.forEach(t),Da=d(Vo," and "),Bt=a(Vo,"CODE",{});var ti=r(Bt);Ga=d(ti,"span end logits"),ti.forEach(t),Wa=d(Vo,")."),Vo.forEach(t),Qa=g(Q),vo=a(Q,"P",{});var yn=r(vo);Ha=d(yn,"This model inherits from "),Do=a(yn,"A",{href:!0});var ni=r(Do);Ra=d(ni,"PreTrainedModel"),ni.forEach(t),Ua=d(yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),yn.forEach(t),Va=g(Q),yo=a(Q,"P",{});var wn=r(yo);Ja=d(wn,"This model is also a PyTorch "),wo=a(wn,"A",{href:!0,rel:!0});var si=r(wo);Za=d(si,"torch.nn.Module"),si.forEach(t),Ka=d(wn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wn.forEach(t),Ya=g(Q),M=a(Q,"DIV",{class:!0});var H=r(M);w(Bo.$$.fragment,H),Xa=g(H),ie=a(H,"P",{});var Jo=r(ie);er=d(Jo,"The "),Go=a(Jo,"A",{href:!0});var ai=r(Go);or=d(ai,"BigBirdPegasusForQuestionAnswering"),ai.forEach(t),tr=d(Jo," forward method, overrides the "),kt=a(Jo,"CODE",{});var ri=r(kt);nr=d(ri,"__call__"),ri.forEach(t),sr=d(Jo," special method."),Jo.forEach(t),ar=g(H),w(ze.$$.fragment,H),rr=g(H),w(Fe.$$.fragment,H),ir=g(H),w(xe.$$.fragment,H),H.forEach(t),Q.forEach(t),en=g(o),de=a(o,"H2",{class:!0});var Bn=r(de);Ce=a(Bn,"A",{id:!0,class:!0,href:!0});var ii=r(Ce);Tt=a(ii,"SPAN",{});var di=r(Tt);w(ko.$$.fragment,di),di.forEach(t),ii.forEach(t),dr=g(Bn),$t=a(Bn,"SPAN",{});var li=r($t);lr=d(li,"BigBirdPegasusForCausalLM"),li.forEach(t),Bn.forEach(t),on=g(o),le=a(o,"DIV",{class:!0});var kn=r(le);w(To.$$.fragment,kn),cr=g(kn),Me=a(kn,"DIV",{class:!0});var Tn=r(Me);w($o.$$.fragment,Tn),ur=g(Tn),w(je.$$.fragment,Tn),Tn.forEach(t),kn.forEach(t),this.h()},h(){m(l,"name","hf:doc:metadata"),m(l,"content",JSON.stringify(xi)),m(u,"id","bigbirdpegasus"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#bigbirdpegasus"),m(c,"class","relative group"),m(ce,"id","overview"),m(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ce,"href","#overview"),m(J,"class","relative group"),m(De,"href","https://arxiv.org/abs/2007.14062"),m(De,"rel","nofollow"),m(We,"href","https://huggingface.co/blog/big-bird"),m(We,"rel","nofollow"),m(Ue,"href","https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py"),m(Ue,"rel","nofollow"),m(Ve,"href","https://github.com/google-research/bigbird"),m(Ve,"rel","nofollow"),m(he,"id","transformers.BigBirdPegasusConfig"),m(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(he,"href","#transformers.BigBirdPegasusConfig"),m(Z,"class","relative group"),m(Mo,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel"),m(Ke,"href","https://huggingface.co/google/bigbird-pegasus-large-arxiv"),m(Ke,"rel","nofollow"),m(jo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Eo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(me,"id","transformers.BigBirdPegasusModel"),m(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(me,"href","#transformers.BigBirdPegasusModel"),m(X,"class","relative group"),m(So,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(to,"rel","nofollow"),m(Ao,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"id","transformers.BigBirdPegasusForConditionalGeneration"),m(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(be,"href","#transformers.BigBirdPegasusForConditionalGeneration"),m(oe,"class","relative group"),m(Oo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(lo,"rel","nofollow"),m(Lo,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForConditionalGeneration"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(we,"id","transformers.BigBirdPegasusForSequenceClassification"),m(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(we,"href","#transformers.BigBirdPegasusForSequenceClassification"),m(ne,"class","relative group"),m(No,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(mo,"rel","nofollow"),m(Io,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForSequenceClassification"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"id","transformers.BigBirdPegasusForQuestionAnswering"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.BigBirdPegasusForQuestionAnswering"),m(ae,"class","relative group"),m(Do,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(wo,"rel","nofollow"),m(Go,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForQuestionAnswering"),m(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ce,"id","transformers.BigBirdPegasusForCausalLM"),m(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ce,"href","#transformers.BigBirdPegasusForCausalLM"),m(de,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,l),b(o,_,f),b(o,c,f),e(c,u),e(u,v),B(n,v,null),e(c,p),e(c,F),e(F,Pn),b(o,Ot,f),b(o,J,f),e(J,ce),e(ce,Zo),B(Ie,Zo,null),e(J,qn),e(J,Ko),e(Ko,zn),b(o,Lt,f),b(o,ue,f),e(ue,Fn),e(ue,De),e(De,xn),e(ue,Cn),b(o,Nt,f),b(o,Fo,f),e(Fo,Mn),b(o,It,f),b(o,xo,f),e(xo,Yo),e(Yo,jn),b(o,Dt,f),b(o,Co,f),e(Co,En),b(o,Gt,f),b(o,q,f),e(q,Ge),e(Ge,Sn),e(Ge,We),e(We,An),e(Ge,On),e(q,Ln),e(q,S),e(S,Nn),e(S,Xo),e(Xo,In),e(S,Dn),e(S,et),e(et,Gn),e(S,Wn),e(S,ot),e(ot,Qn),e(S,Hn),e(S,tt),e(tt,Rn),e(S,Un),e(q,Vn),e(q,nt),e(nt,Jn),e(q,Zn),e(q,st),e(st,Kn),e(q,Yn),e(q,Qe),e(Qe,Xn),e(Qe,at),e(at,es),e(Qe,os),e(q,ts),e(q,He),e(He,ns),e(He,rt),e(rt,ss),e(He,as),e(q,rs),e(q,Re),e(Re,is),e(Re,Ue),e(Ue,ds),e(Re,ls),b(o,Wt,f),b(o,pe,f),e(pe,cs),e(pe,Ve),e(Ve,us),e(pe,ps),b(o,Qt,f),b(o,Z,f),e(Z,he),e(he,it),B(Je,it,null),e(Z,hs),e(Z,dt),e(dt,gs),b(o,Ht,f),b(o,A,f),B(Ze,A,null),e(A,ms),e(A,K),e(K,fs),e(K,Mo),e(Mo,_s),e(K,bs),e(K,Ke),e(Ke,vs),e(K,ys),e(A,ws),e(A,Y),e(Y,Bs),e(Y,jo),e(jo,ks),e(Y,Ts),e(Y,Eo),e(Eo,$s),e(Y,Ps),e(A,qs),B(ge,A,null),b(o,Rt,f),b(o,X,f),e(X,me),e(me,lt),B(Ye,lt,null),e(X,zs),e(X,ct),e(ct,Fs),b(o,Ut,f),b(o,O,f),B(Xe,O,null),e(O,xs),e(O,eo),e(eo,Cs),e(eo,So),e(So,Ms),e(eo,js),e(O,Es),e(O,oo),e(oo,Ss),e(oo,to),e(to,As),e(oo,Os),e(O,Ls),e(O,N),B(no,N,null),e(N,Ns),e(N,ee),e(ee,Is),e(ee,Ao),e(Ao,Ds),e(ee,Gs),e(ee,ut),e(ut,Ws),e(ee,Qs),e(N,Hs),B(fe,N,null),e(N,Rs),B(_e,N,null),b(o,Vt,f),b(o,oe,f),e(oe,be),e(be,pt),B(so,pt,null),e(oe,Us),e(oe,ht),e(ht,Vs),b(o,Jt,f),b(o,L,f),B(ao,L,null),e(L,Js),e(L,ro),e(ro,Zs),e(ro,Oo),e(Oo,Ks),e(ro,Ys),e(L,Xs),e(L,io),e(io,ea),e(io,lo),e(lo,oa),e(io,ta),e(L,na),e(L,I),B(co,I,null),e(I,sa),e(I,te),e(te,aa),e(te,Lo),e(Lo,ra),e(te,ia),e(te,gt),e(gt,da),e(te,la),e(I,ca),B(ve,I,null),e(I,ua),B(ye,I,null),b(o,Zt,f),b(o,ne,f),e(ne,we),e(we,mt),B(uo,mt,null),e(ne,pa),e(ne,ft),e(ft,ha),b(o,Kt,f),b(o,x,f),B(po,x,null),e(x,ga),e(x,_t),e(_t,ma),e(x,fa),e(x,ho),e(ho,_a),e(ho,No),e(No,ba),e(ho,va),e(x,ya),e(x,go),e(go,wa),e(go,mo),e(mo,Ba),e(go,ka),e(x,Ta),e(x,z),B(fo,z,null),e(z,$a),e(z,se),e(se,Pa),e(se,Io),e(Io,qa),e(se,za),e(se,bt),e(bt,Fa),e(se,xa),e(z,Ca),B(Be,z,null),e(z,Ma),B(ke,z,null),e(z,ja),B(Te,z,null),e(z,Ea),B($e,z,null),e(z,Sa),B(Pe,z,null),b(o,Yt,f),b(o,ae,f),e(ae,qe),e(qe,vt),B(_o,vt,null),e(ae,Aa),e(ae,yt),e(yt,Oa),b(o,Xt,f),b(o,C,f),B(bo,C,null),e(C,La),e(C,re),e(re,Na),e(re,wt),e(wt,Ia),e(re,Da),e(re,Bt),e(Bt,Ga),e(re,Wa),e(C,Qa),e(C,vo),e(vo,Ha),e(vo,Do),e(Do,Ra),e(vo,Ua),e(C,Va),e(C,yo),e(yo,Ja),e(yo,wo),e(wo,Za),e(yo,Ka),e(C,Ya),e(C,M),B(Bo,M,null),e(M,Xa),e(M,ie),e(ie,er),e(ie,Go),e(Go,or),e(ie,tr),e(ie,kt),e(kt,nr),e(ie,sr),e(M,ar),B(ze,M,null),e(M,rr),B(Fe,M,null),e(M,ir),B(xe,M,null),b(o,en,f),b(o,de,f),e(de,Ce),e(Ce,Tt),B(ko,Tt,null),e(de,dr),e(de,$t),e($t,lr),b(o,on,f),b(o,le,f),B(To,le,null),e(le,cr),e(le,Me),B($o,Me,null),e(Me,ur),B(je,Me,null),tn=!0},p(o,[f]){const Po={};f&2&&(Po.$$scope={dirty:f,ctx:o}),ge.$set(Po);const Pt={};f&2&&(Pt.$$scope={dirty:f,ctx:o}),fe.$set(Pt);const qt={};f&2&&(qt.$$scope={dirty:f,ctx:o}),_e.$set(qt);const zt={};f&2&&(zt.$$scope={dirty:f,ctx:o}),ve.$set(zt);const qo={};f&2&&(qo.$$scope={dirty:f,ctx:o}),ye.$set(qo);const Ft={};f&2&&(Ft.$$scope={dirty:f,ctx:o}),Be.$set(Ft);const xt={};f&2&&(xt.$$scope={dirty:f,ctx:o}),ke.$set(xt);const Ct={};f&2&&(Ct.$$scope={dirty:f,ctx:o}),Te.$set(Ct);const zo={};f&2&&(zo.$$scope={dirty:f,ctx:o}),$e.$set(zo);const Mt={};f&2&&(Mt.$$scope={dirty:f,ctx:o}),Pe.$set(Mt);const jt={};f&2&&(jt.$$scope={dirty:f,ctx:o}),ze.$set(jt);const Et={};f&2&&(Et.$$scope={dirty:f,ctx:o}),Fe.$set(Et);const St={};f&2&&(St.$$scope={dirty:f,ctx:o}),xe.$set(St);const At={};f&2&&(At.$$scope={dirty:f,ctx:o}),je.$set(At)},i(o){tn||(k(n.$$.fragment,o),k(Ie.$$.fragment,o),k(Je.$$.fragment,o),k(Ze.$$.fragment,o),k(ge.$$.fragment,o),k(Ye.$$.fragment,o),k(Xe.$$.fragment,o),k(no.$$.fragment,o),k(fe.$$.fragment,o),k(_e.$$.fragment,o),k(so.$$.fragment,o),k(ao.$$.fragment,o),k(co.$$.fragment,o),k(ve.$$.fragment,o),k(ye.$$.fragment,o),k(uo.$$.fragment,o),k(po.$$.fragment,o),k(fo.$$.fragment,o),k(Be.$$.fragment,o),k(ke.$$.fragment,o),k(Te.$$.fragment,o),k($e.$$.fragment,o),k(Pe.$$.fragment,o),k(_o.$$.fragment,o),k(bo.$$.fragment,o),k(Bo.$$.fragment,o),k(ze.$$.fragment,o),k(Fe.$$.fragment,o),k(xe.$$.fragment,o),k(ko.$$.fragment,o),k(To.$$.fragment,o),k($o.$$.fragment,o),k(je.$$.fragment,o),tn=!0)},o(o){T(n.$$.fragment,o),T(Ie.$$.fragment,o),T(Je.$$.fragment,o),T(Ze.$$.fragment,o),T(ge.$$.fragment,o),T(Ye.$$.fragment,o),T(Xe.$$.fragment,o),T(no.$$.fragment,o),T(fe.$$.fragment,o),T(_e.$$.fragment,o),T(so.$$.fragment,o),T(ao.$$.fragment,o),T(co.$$.fragment,o),T(ve.$$.fragment,o),T(ye.$$.fragment,o),T(uo.$$.fragment,o),T(po.$$.fragment,o),T(fo.$$.fragment,o),T(Be.$$.fragment,o),T(ke.$$.fragment,o),T(Te.$$.fragment,o),T($e.$$.fragment,o),T(Pe.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(Bo.$$.fragment,o),T(ze.$$.fragment,o),T(Fe.$$.fragment,o),T(xe.$$.fragment,o),T(ko.$$.fragment,o),T(To.$$.fragment,o),T($o.$$.fragment,o),T(je.$$.fragment,o),tn=!1},d(o){t(l),o&&t(_),o&&t(c),$(n),o&&t(Ot),o&&t(J),$(Ie),o&&t(Lt),o&&t(ue),o&&t(Nt),o&&t(Fo),o&&t(It),o&&t(xo),o&&t(Dt),o&&t(Co),o&&t(Gt),o&&t(q),o&&t(Wt),o&&t(pe),o&&t(Qt),o&&t(Z),$(Je),o&&t(Ht),o&&t(A),$(Ze),$(ge),o&&t(Rt),o&&t(X),$(Ye),o&&t(Ut),o&&t(O),$(Xe),$(no),$(fe),$(_e),o&&t(Vt),o&&t(oe),$(so),o&&t(Jt),o&&t(L),$(ao),$(co),$(ve),$(ye),o&&t(Zt),o&&t(ne),$(uo),o&&t(Kt),o&&t(x),$(po),$(fo),$(Be),$(ke),$(Te),$($e),$(Pe),o&&t(Yt),o&&t(ae),$(_o),o&&t(Xt),o&&t(C),$(bo),$(Bo),$(ze),$(Fe),$(xe),o&&t(en),o&&t(de),$(ko),o&&t(on),o&&t(le),$(To),$($o),$(je)}}}const xi={local:"bigbirdpegasus",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdPegasusConfig",title:"BigBirdPegasusConfig"},{local:"transformers.BigBirdPegasusModel",title:"BigBirdPegasusModel"},{local:"transformers.BigBirdPegasusForConditionalGeneration",title:"BigBirdPegasusForConditionalGeneration"},{local:"transformers.BigBirdPegasusForSequenceClassification",title:"BigBirdPegasusForSequenceClassification"},{local:"transformers.BigBirdPegasusForQuestionAnswering",title:"BigBirdPegasusForQuestionAnswering"},{local:"transformers.BigBirdPegasusForCausalLM",title:"BigBirdPegasusForCausalLM"}],title:"BigBirdPegasus"};function Ci(P){return gi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Li extends ci{constructor(l){super();ui(this,l,Ci,Fi,pi,{})}}export{Li as default,xi as metadata};
