import{S as gi,i as mi,s as fi,e as s,k as h,w as y,t as i,M as _i,c as a,d as t,m as g,a as r,x as w,h as d,b as m,G as e,g as b,y as B,q as k,o as T,B as $,v as bi,L as U}from"../../chunks/vendor-hf-doc-builder.js";import{T as Pn}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as V}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ne}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as R}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function vi(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import BigBirdPegasusConfig, BigBirdPegasusModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=s("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function yi(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var F=r(c);u=d(F,"Module"),F.forEach(t),v=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,l,p),e(l,_),e(l,c),e(c,u),e(l,v)},d(n){n&&t(l)}}}function wi(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import PegasusTokenizerFast, BigBirdPegasusModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=s("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function Bi(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var F=r(c);u=d(F,"Module"),F.forEach(t),v=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,l,p),e(l,_),e(l,c),e(c,u),e(l,v)},d(n){n&&t(l)}}}function ki(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusForConditionalGeneration

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
<span class="hljs-string">&#x27;dominant sequence models are based on recurrent or convolutional neural networks .&#x27;</span>`}}),{c(){l=s("p"),_=i("Summarization example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Summarization example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function Ti(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var F=r(c);u=d(F,"Module"),F.forEach(t),v=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,l,p),e(l,_),e(l,c),e(c,u),e(l,v)},d(n){n&&t(l)}}}function $i(P){let l,_,c,u,v;return u=new V({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=s("p"),_=i("Example of single-label classification:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example of single-label classification:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function Pi(P){let l,_;return l=new V({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BigBirdPegasusForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-bigbird_pegasus", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-bigbird_pegasus&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){y(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){B(l,c,u),_=!0},p:U,i(c){_||(k(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function qi(P){let l,_,c,u,v;return u=new V({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=s("p"),_=i("Example of multi-label classification:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example of multi-label classification:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function zi(P){let l,_;return l=new V({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){B(l,c,u),_=!0},p:U,i(c){_||(k(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function Fi(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var F=r(c);u=d(F,"Module"),F.forEach(t),v=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,l,p),e(l,_),e(l,c),e(c,u),e(l,v)},d(n){n&&t(l)}}}function xi(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import PegasusTokenizerFast, BigBirdPegasusForQuestionAnswering
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
<span class="hljs-string">&#x27;&#x27;</span>`}}),{c(){l=s("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function Ci(P){let l,_;return l=new V({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.96</span>`}}),{c(){y(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){B(l,c,u),_=!0},p:U,i(c){_||(k(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function Mi(P){let l,_,c,u,v;return u=new V({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusForCausalLM

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=s("p"),_=i("Example:"),c=h(),y(u.$$.fragment)},l(n){l=a(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),c=g(n),w(u.$$.fragment,n)},m(n,p){b(n,l,p),e(l,_),b(n,c,p),B(u,n,p),v=!0},p:U,i(n){v||(k(u.$$.fragment,n),v=!0)},o(n){T(u.$$.fragment,n),v=!1},d(n){n&&t(l),n&&t(c),$(u,n)}}}function ji(P){let l,_,c,u,v,n,p,F,qn,Lt,J,ce,Zo,Ie,zn,Ko,Fn,Nt,ue,xn,De,Cn,Mn,It,Fo,jn,Dt,xo,Yo,En,Gt,Co,Sn,Wt,q,Ge,An,We,On,Ln,Nn,S,In,Xo,Dn,Gn,et,Wn,Qn,ot,Hn,Rn,tt,Un,Vn,Jn,nt,Zn,Kn,st,Yn,Xn,Qe,es,at,os,ts,ns,He,ss,rt,as,rs,is,Re,ds,Ue,ls,cs,us,it,ps,Qt,pe,hs,Ve,gs,ms,Ht,Z,he,dt,Je,fs,lt,_s,Rt,A,Ze,bs,K,vs,Mo,ys,ws,Ke,Bs,ks,Ts,Y,$s,jo,Ps,qs,Eo,zs,Fs,xs,ge,Ut,X,me,ct,Ye,Cs,ut,Ms,Vt,O,Xe,js,eo,Es,So,Ss,As,Os,oo,Ls,to,Ns,Is,Ds,N,no,Gs,ee,Ws,Ao,Qs,Hs,pt,Rs,Us,Vs,fe,Js,_e,Jt,oe,be,ht,so,Zs,gt,Ks,Zt,L,ao,Ys,ro,Xs,Oo,ea,oa,ta,io,na,lo,sa,aa,ra,I,co,ia,te,da,Lo,la,ca,mt,ua,pa,ha,ve,ga,ye,Kt,ne,we,ft,uo,ma,_t,fa,Yt,C,po,_a,bt,ba,va,ho,ya,No,wa,Ba,ka,go,Ta,mo,$a,Pa,qa,z,fo,za,se,Fa,Io,xa,Ca,vt,Ma,ja,Ea,Be,Sa,ke,Aa,Te,Oa,$e,La,Pe,Xt,ae,qe,yt,_o,Na,wt,Ia,en,M,bo,Da,re,Ga,Bt,Wa,Qa,kt,Ha,Ra,Ua,vo,Va,Do,Ja,Za,Ka,yo,Ya,wo,Xa,er,or,j,Bo,tr,ie,nr,Go,sr,ar,Tt,rr,ir,dr,ze,lr,Fe,cr,xe,on,de,Ce,$t,ko,ur,Pt,pr,tn,le,To,hr,Me,$o,gr,je,nn;return n=new Ne({}),Ie=new Ne({}),Je=new Ne({}),Ze=new D({props:{name:"class transformers.BigBirdPegasusConfig",anchor:"transformers.BigBirdPegasusConfig",parameters:[{name:"vocab_size",val:" = 96103"},{name:"max_position_embeddings",val:" = 4096"},{name:"encoder_layers",val:" = 16"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu_new'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"attention_type",val:" = 'block_sparse'"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"use_bias",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 96103) &#x2014;
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
Whether to rescale embeddings with (hidden_size ** 0.5).`,name:"scale_embeddings"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/configuration_bigbird_pegasus.py#L43"}}),ge=new R({props:{anchor:"transformers.BigBirdPegasusConfig.example",$$slots:{default:[vi]},$$scope:{ctx:P}}}),Ye=new Ne({}),Xe=new D({props:{name:"class transformers.BigBirdPegasusModel",anchor:"transformers.BigBirdPegasusModel",parameters:[{name:"config",val:": BigBirdPegasusConfig"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2381",returnDescription:`
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
`}}),fe=new Pn({props:{$$slots:{default:[yi]},$$scope:{ctx:P}}}),_e=new R({props:{anchor:"transformers.BigBirdPegasusModel.forward.example",$$slots:{default:[wi]},$$scope:{ctx:P}}}),so=new Ne({}),ao=new D({props:{name:"class transformers.BigBirdPegasusForConditionalGeneration",anchor:"transformers.BigBirdPegasusForConditionalGeneration",parameters:[{name:"config",val:": BigBirdPegasusConfig"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2483"}}),co=new D({props:{name:"forward",anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2527",returnDescription:`
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
`}}),ve=new Pn({props:{$$slots:{default:[Bi]},$$scope:{ctx:P}}}),ye=new R({props:{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.example",$$slots:{default:[ki]},$$scope:{ctx:P}}}),uo=new Ne({}),po=new D({props:{name:"class transformers.BigBirdPegasusForSequenceClassification",anchor:"transformers.BigBirdPegasusForSequenceClassification",parameters:[{name:"config",val:": BigBirdPegasusConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2660"}}),fo=new D({props:{name:"forward",anchor:"transformers.BigBirdPegasusForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2675",returnDescription:`
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
`}}),Be=new Pn({props:{$$slots:{default:[Ti]},$$scope:{ctx:P}}}),ke=new R({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example",$$slots:{default:[$i]},$$scope:{ctx:P}}}),Te=new R({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-2",$$slots:{default:[Pi]},$$scope:{ctx:P}}}),$e=new R({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-3",$$slots:{default:[qi]},$$scope:{ctx:P}}}),Pe=new R({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-4",$$slots:{default:[zi]},$$scope:{ctx:P}}}),_o=new Ne({}),bo=new D({props:{name:"class transformers.BigBirdPegasusForQuestionAnswering",anchor:"transformers.BigBirdPegasusForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2790"}}),Bo=new D({props:{name:"forward",anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2804",returnDescription:`
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
`}}),ze=new Pn({props:{$$slots:{default:[Fi]},$$scope:{ctx:P}}}),Fe=new R({props:{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.example",$$slots:{default:[xi]},$$scope:{ctx:P}}}),xe=new R({props:{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.example-2",$$slots:{default:[Ci]},$$scope:{ctx:P}}}),ko=new Ne({}),To=new D({props:{name:"class transformers.BigBirdPegasusForCausalLM",anchor:"transformers.BigBirdPegasusForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2923"}}),$o=new D({props:{name:"forward",anchor:"transformers.BigBirdPegasusForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2956",returnDescription:`
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
`}}),je=new R({props:{anchor:"transformers.BigBirdPegasusForCausalLM.forward.example",$$slots:{default:[Mi]},$$scope:{ctx:P}}}),{c(){l=s("meta"),_=h(),c=s("h1"),u=s("a"),v=s("span"),y(n.$$.fragment),p=h(),F=s("span"),qn=i("BigBirdPegasus"),Lt=h(),J=s("h2"),ce=s("a"),Zo=s("span"),y(Ie.$$.fragment),zn=h(),Ko=s("span"),Fn=i("Overview"),Nt=h(),ue=s("p"),xn=i("The BigBird model was proposed in "),De=s("a"),Cn=i("Big Bird: Transformers for Longer Sequences"),Mn=i(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),It=h(),Fo=s("p"),jn=i("The abstract from the paper is the following:"),Dt=h(),xo=s("p"),Yo=s("em"),En=i(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),Gt=h(),Co=s("p"),Sn=i("Tips:"),Wt=h(),q=s("ul"),Ge=s("li"),An=i("For an in-detail explanation on how BigBird\u2019s attention works, see "),We=s("a"),On=i("this blog post"),Ln=i("."),Nn=h(),S=s("li"),In=i("BigBird comes with 2 implementations: "),Xo=s("strong"),Dn=i("original_full"),Gn=i(" & "),et=s("strong"),Wn=i("block_sparse"),Qn=i(`. For the sequence length < 1024, using
`),ot=s("strong"),Hn=i("original_full"),Rn=i(" is advised as there is no benefit in using "),tt=s("strong"),Un=i("block_sparse"),Vn=i(" attention."),Jn=h(),nt=s("li"),Zn=i("The code currently uses window size of 3 blocks and 2 global blocks."),Kn=h(),st=s("li"),Yn=i("Sequence length must be divisible by block size."),Xn=h(),Qe=s("li"),es=i("Current implementation supports only "),at=s("strong"),os=i("ITC"),ts=i("."),ns=h(),He=s("li"),ss=i("Current implementation doesn\u2019t support "),rt=s("strong"),as=i("num_random_blocks = 0"),rs=i("."),is=h(),Re=s("li"),ds=i("BigBirdPegasus uses the "),Ue=s("a"),ls=i("PegasusTokenizer"),cs=i("."),us=h(),it=s("li"),ps=i(`BigBird is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Qt=h(),pe=s("p"),hs=i("The original code can be found "),Ve=s("a"),gs=i("here"),ms=i("."),Ht=h(),Z=s("h2"),he=s("a"),dt=s("span"),y(Je.$$.fragment),fs=h(),lt=s("span"),_s=i("BigBirdPegasusConfig"),Rt=h(),A=s("div"),y(Ze.$$.fragment),bs=h(),K=s("p"),vs=i("This is the configuration class to store the configuration of a "),Mo=s("a"),ys=i("BigBirdPegasusModel"),ws=i(`. It is used to instantiate
an BigBirdPegasus model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BigBirdPegasus
`),Ke=s("a"),Bs=i("google/bigbird-pegasus-large-arxiv"),ks=i(" architecture."),Ts=h(),Y=s("p"),$s=i("Configuration objects inherit from "),jo=s("a"),Ps=i("PretrainedConfig"),qs=i(` and can be used to control the model outputs. Read the
documentation from `),Eo=s("a"),zs=i("PretrainedConfig"),Fs=i(" for more information."),xs=h(),y(ge.$$.fragment),Ut=h(),X=s("h2"),me=s("a"),ct=s("span"),y(Ye.$$.fragment),Cs=h(),ut=s("span"),Ms=i("BigBirdPegasusModel"),Vt=h(),O=s("div"),y(Xe.$$.fragment),js=h(),eo=s("p"),Es=i(`The bare BigBirdPegasus Model outputting raw hidden-states without any specific head on top.
This model inherits from `),So=s("a"),Ss=i("PreTrainedModel"),As=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Os=h(),oo=s("p"),Ls=i("This model is also a PyTorch "),to=s("a"),Ns=i("torch.nn.Module"),Is=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ds=h(),N=s("div"),y(no.$$.fragment),Gs=h(),ee=s("p"),Ws=i("The "),Ao=s("a"),Qs=i("BigBirdPegasusModel"),Hs=i(" forward method, overrides the "),pt=s("code"),Rs=i("__call__"),Us=i(" special method."),Vs=h(),y(fe.$$.fragment),Js=h(),y(_e.$$.fragment),Jt=h(),oe=s("h2"),be=s("a"),ht=s("span"),y(so.$$.fragment),Zs=h(),gt=s("span"),Ks=i("BigBirdPegasusForConditionalGeneration"),Zt=h(),L=s("div"),y(ao.$$.fragment),Ys=h(),ro=s("p"),Xs=i(`The BigBirdPegasus Model with a language modeling head. Can be used for summarization.
This model inherits from `),Oo=s("a"),ea=i("PreTrainedModel"),oa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ta=h(),io=s("p"),na=i("This model is also a PyTorch "),lo=s("a"),sa=i("torch.nn.Module"),aa=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ra=h(),I=s("div"),y(co.$$.fragment),ia=h(),te=s("p"),da=i("The "),Lo=s("a"),la=i("BigBirdPegasusForConditionalGeneration"),ca=i(" forward method, overrides the "),mt=s("code"),ua=i("__call__"),pa=i(" special method."),ha=h(),y(ve.$$.fragment),ga=h(),y(ye.$$.fragment),Kt=h(),ne=s("h2"),we=s("a"),ft=s("span"),y(uo.$$.fragment),ma=h(),_t=s("span"),fa=i("BigBirdPegasusForSequenceClassification"),Yt=h(),C=s("div"),y(po.$$.fragment),_a=h(),bt=s("p"),ba=i(`BigBirdPegasus model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),va=h(),ho=s("p"),ya=i("This model inherits from "),No=s("a"),wa=i("PreTrainedModel"),Ba=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),ka=h(),go=s("p"),Ta=i("This model is also a PyTorch "),mo=s("a"),$a=i("torch.nn.Module"),Pa=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qa=h(),z=s("div"),y(fo.$$.fragment),za=h(),se=s("p"),Fa=i("The "),Io=s("a"),xa=i("BigBirdPegasusForSequenceClassification"),Ca=i(" forward method, overrides the "),vt=s("code"),Ma=i("__call__"),ja=i(" special method."),Ea=h(),y(Be.$$.fragment),Sa=h(),y(ke.$$.fragment),Aa=h(),y(Te.$$.fragment),Oa=h(),y($e.$$.fragment),La=h(),y(Pe.$$.fragment),Xt=h(),ae=s("h2"),qe=s("a"),yt=s("span"),y(_o.$$.fragment),Na=h(),wt=s("span"),Ia=i("BigBirdPegasusForQuestionAnswering"),en=h(),M=s("div"),y(bo.$$.fragment),Da=h(),re=s("p"),Ga=i(`BigBirdPegasus Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Bt=s("code"),Wa=i("span start logits"),Qa=i(" and "),kt=s("code"),Ha=i("span end logits"),Ra=i(")."),Ua=h(),vo=s("p"),Va=i("This model inherits from "),Do=s("a"),Ja=i("PreTrainedModel"),Za=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ka=h(),yo=s("p"),Ya=i("This model is also a PyTorch "),wo=s("a"),Xa=i("torch.nn.Module"),er=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),or=h(),j=s("div"),y(Bo.$$.fragment),tr=h(),ie=s("p"),nr=i("The "),Go=s("a"),sr=i("BigBirdPegasusForQuestionAnswering"),ar=i(" forward method, overrides the "),Tt=s("code"),rr=i("__call__"),ir=i(" special method."),dr=h(),y(ze.$$.fragment),lr=h(),y(Fe.$$.fragment),cr=h(),y(xe.$$.fragment),on=h(),de=s("h2"),Ce=s("a"),$t=s("span"),y(ko.$$.fragment),ur=h(),Pt=s("span"),pr=i("BigBirdPegasusForCausalLM"),tn=h(),le=s("div"),y(To.$$.fragment),hr=h(),Me=s("div"),y($o.$$.fragment),gr=h(),y(je.$$.fragment),this.h()},l(o){const f=_i('[data-svelte="svelte-1phssyn"]',document.head);l=a(f,"META",{name:!0,content:!0}),f.forEach(t),_=g(o),c=a(o,"H1",{class:!0});var Po=r(c);u=a(Po,"A",{id:!0,class:!0,href:!0});var qt=r(u);v=a(qt,"SPAN",{});var zt=r(v);w(n.$$.fragment,zt),zt.forEach(t),qt.forEach(t),p=g(Po),F=a(Po,"SPAN",{});var Ft=r(F);qn=d(Ft,"BigBirdPegasus"),Ft.forEach(t),Po.forEach(t),Lt=g(o),J=a(o,"H2",{class:!0});var qo=r(J);ce=a(qo,"A",{id:!0,class:!0,href:!0});var xt=r(ce);Zo=a(xt,"SPAN",{});var Ct=r(Zo);w(Ie.$$.fragment,Ct),Ct.forEach(t),xt.forEach(t),zn=g(qo),Ko=a(qo,"SPAN",{});var Mt=r(Ko);Fn=d(Mt,"Overview"),Mt.forEach(t),qo.forEach(t),Nt=g(o),ue=a(o,"P",{});var zo=r(ue);xn=d(zo,"The BigBird model was proposed in "),De=a(zo,"A",{href:!0,rel:!0});var jt=r(De);Cn=d(jt,"Big Bird: Transformers for Longer Sequences"),jt.forEach(t),Mn=d(zo,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),zo.forEach(t),It=g(o),Fo=a(o,"P",{});var Et=r(Fo);jn=d(Et,"The abstract from the paper is the following:"),Et.forEach(t),Dt=g(o),xo=a(o,"P",{});var St=r(xo);Yo=a(St,"EM",{});var At=r(Yo);En=d(At,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),At.forEach(t),St.forEach(t),Gt=g(o),Co=a(o,"P",{});var Ot=r(Co);Sn=d(Ot,"Tips:"),Ot.forEach(t),Wt=g(o),q=a(o,"UL",{});var x=r(q);Ge=a(x,"LI",{});var sn=r(Ge);An=d(sn,"For an in-detail explanation on how BigBird\u2019s attention works, see "),We=a(sn,"A",{href:!0,rel:!0});var mr=r(We);On=d(mr,"this blog post"),mr.forEach(t),Ln=d(sn,"."),sn.forEach(t),Nn=g(x),S=a(x,"LI",{});var G=r(S);In=d(G,"BigBird comes with 2 implementations: "),Xo=a(G,"STRONG",{});var fr=r(Xo);Dn=d(fr,"original_full"),fr.forEach(t),Gn=d(G," & "),et=a(G,"STRONG",{});var _r=r(et);Wn=d(_r,"block_sparse"),_r.forEach(t),Qn=d(G,`. For the sequence length < 1024, using
`),ot=a(G,"STRONG",{});var br=r(ot);Hn=d(br,"original_full"),br.forEach(t),Rn=d(G," is advised as there is no benefit in using "),tt=a(G,"STRONG",{});var vr=r(tt);Un=d(vr,"block_sparse"),vr.forEach(t),Vn=d(G," attention."),G.forEach(t),Jn=g(x),nt=a(x,"LI",{});var yr=r(nt);Zn=d(yr,"The code currently uses window size of 3 blocks and 2 global blocks."),yr.forEach(t),Kn=g(x),st=a(x,"LI",{});var wr=r(st);Yn=d(wr,"Sequence length must be divisible by block size."),wr.forEach(t),Xn=g(x),Qe=a(x,"LI",{});var an=r(Qe);es=d(an,"Current implementation supports only "),at=a(an,"STRONG",{});var Br=r(at);os=d(Br,"ITC"),Br.forEach(t),ts=d(an,"."),an.forEach(t),ns=g(x),He=a(x,"LI",{});var rn=r(He);ss=d(rn,"Current implementation doesn\u2019t support "),rt=a(rn,"STRONG",{});var kr=r(rt);as=d(kr,"num_random_blocks = 0"),kr.forEach(t),rs=d(rn,"."),rn.forEach(t),is=g(x),Re=a(x,"LI",{});var dn=r(Re);ds=d(dn,"BigBirdPegasus uses the "),Ue=a(dn,"A",{href:!0,rel:!0});var Tr=r(Ue);ls=d(Tr,"PegasusTokenizer"),Tr.forEach(t),cs=d(dn,"."),dn.forEach(t),us=g(x),it=a(x,"LI",{});var $r=r(it);ps=d($r,`BigBird is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),$r.forEach(t),x.forEach(t),Qt=g(o),pe=a(o,"P",{});var ln=r(pe);hs=d(ln,"The original code can be found "),Ve=a(ln,"A",{href:!0,rel:!0});var Pr=r(Ve);gs=d(Pr,"here"),Pr.forEach(t),ms=d(ln,"."),ln.forEach(t),Ht=g(o),Z=a(o,"H2",{class:!0});var cn=r(Z);he=a(cn,"A",{id:!0,class:!0,href:!0});var qr=r(he);dt=a(qr,"SPAN",{});var zr=r(dt);w(Je.$$.fragment,zr),zr.forEach(t),qr.forEach(t),fs=g(cn),lt=a(cn,"SPAN",{});var Fr=r(lt);_s=d(Fr,"BigBirdPegasusConfig"),Fr.forEach(t),cn.forEach(t),Rt=g(o),A=a(o,"DIV",{class:!0});var Ee=r(A);w(Ze.$$.fragment,Ee),bs=g(Ee),K=a(Ee,"P",{});var Wo=r(K);vs=d(Wo,"This is the configuration class to store the configuration of a "),Mo=a(Wo,"A",{href:!0});var xr=r(Mo);ys=d(xr,"BigBirdPegasusModel"),xr.forEach(t),ws=d(Wo,`. It is used to instantiate
an BigBirdPegasus model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BigBirdPegasus
`),Ke=a(Wo,"A",{href:!0,rel:!0});var Cr=r(Ke);Bs=d(Cr,"google/bigbird-pegasus-large-arxiv"),Cr.forEach(t),ks=d(Wo," architecture."),Wo.forEach(t),Ts=g(Ee),Y=a(Ee,"P",{});var Qo=r(Y);$s=d(Qo,"Configuration objects inherit from "),jo=a(Qo,"A",{href:!0});var Mr=r(jo);Ps=d(Mr,"PretrainedConfig"),Mr.forEach(t),qs=d(Qo,` and can be used to control the model outputs. Read the
documentation from `),Eo=a(Qo,"A",{href:!0});var jr=r(Eo);zs=d(jr,"PretrainedConfig"),jr.forEach(t),Fs=d(Qo," for more information."),Qo.forEach(t),xs=g(Ee),w(ge.$$.fragment,Ee),Ee.forEach(t),Ut=g(o),X=a(o,"H2",{class:!0});var un=r(X);me=a(un,"A",{id:!0,class:!0,href:!0});var Er=r(me);ct=a(Er,"SPAN",{});var Sr=r(ct);w(Ye.$$.fragment,Sr),Sr.forEach(t),Er.forEach(t),Cs=g(un),ut=a(un,"SPAN",{});var Ar=r(ut);Ms=d(Ar,"BigBirdPegasusModel"),Ar.forEach(t),un.forEach(t),Vt=g(o),O=a(o,"DIV",{class:!0});var Se=r(O);w(Xe.$$.fragment,Se),js=g(Se),eo=a(Se,"P",{});var pn=r(eo);Es=d(pn,`The bare BigBirdPegasus Model outputting raw hidden-states without any specific head on top.
This model inherits from `),So=a(pn,"A",{href:!0});var Or=r(So);Ss=d(Or,"PreTrainedModel"),Or.forEach(t),As=d(pn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),pn.forEach(t),Os=g(Se),oo=a(Se,"P",{});var hn=r(oo);Ls=d(hn,"This model is also a PyTorch "),to=a(hn,"A",{href:!0,rel:!0});var Lr=r(to);Ns=d(Lr,"torch.nn.Module"),Lr.forEach(t),Is=d(hn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hn.forEach(t),Ds=g(Se),N=a(Se,"DIV",{class:!0});var Ae=r(N);w(no.$$.fragment,Ae),Gs=g(Ae),ee=a(Ae,"P",{});var Ho=r(ee);Ws=d(Ho,"The "),Ao=a(Ho,"A",{href:!0});var Nr=r(Ao);Qs=d(Nr,"BigBirdPegasusModel"),Nr.forEach(t),Hs=d(Ho," forward method, overrides the "),pt=a(Ho,"CODE",{});var Ir=r(pt);Rs=d(Ir,"__call__"),Ir.forEach(t),Us=d(Ho," special method."),Ho.forEach(t),Vs=g(Ae),w(fe.$$.fragment,Ae),Js=g(Ae),w(_e.$$.fragment,Ae),Ae.forEach(t),Se.forEach(t),Jt=g(o),oe=a(o,"H2",{class:!0});var gn=r(oe);be=a(gn,"A",{id:!0,class:!0,href:!0});var Dr=r(be);ht=a(Dr,"SPAN",{});var Gr=r(ht);w(so.$$.fragment,Gr),Gr.forEach(t),Dr.forEach(t),Zs=g(gn),gt=a(gn,"SPAN",{});var Wr=r(gt);Ks=d(Wr,"BigBirdPegasusForConditionalGeneration"),Wr.forEach(t),gn.forEach(t),Zt=g(o),L=a(o,"DIV",{class:!0});var Oe=r(L);w(ao.$$.fragment,Oe),Ys=g(Oe),ro=a(Oe,"P",{});var mn=r(ro);Xs=d(mn,`The BigBirdPegasus Model with a language modeling head. Can be used for summarization.
This model inherits from `),Oo=a(mn,"A",{href:!0});var Qr=r(Oo);ea=d(Qr,"PreTrainedModel"),Qr.forEach(t),oa=d(mn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),mn.forEach(t),ta=g(Oe),io=a(Oe,"P",{});var fn=r(io);na=d(fn,"This model is also a PyTorch "),lo=a(fn,"A",{href:!0,rel:!0});var Hr=r(lo);sa=d(Hr,"torch.nn.Module"),Hr.forEach(t),aa=d(fn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fn.forEach(t),ra=g(Oe),I=a(Oe,"DIV",{class:!0});var Le=r(I);w(co.$$.fragment,Le),ia=g(Le),te=a(Le,"P",{});var Ro=r(te);da=d(Ro,"The "),Lo=a(Ro,"A",{href:!0});var Rr=r(Lo);la=d(Rr,"BigBirdPegasusForConditionalGeneration"),Rr.forEach(t),ca=d(Ro," forward method, overrides the "),mt=a(Ro,"CODE",{});var Ur=r(mt);ua=d(Ur,"__call__"),Ur.forEach(t),pa=d(Ro," special method."),Ro.forEach(t),ha=g(Le),w(ve.$$.fragment,Le),ga=g(Le),w(ye.$$.fragment,Le),Le.forEach(t),Oe.forEach(t),Kt=g(o),ne=a(o,"H2",{class:!0});var _n=r(ne);we=a(_n,"A",{id:!0,class:!0,href:!0});var Vr=r(we);ft=a(Vr,"SPAN",{});var Jr=r(ft);w(uo.$$.fragment,Jr),Jr.forEach(t),Vr.forEach(t),ma=g(_n),_t=a(_n,"SPAN",{});var Zr=r(_t);fa=d(Zr,"BigBirdPegasusForSequenceClassification"),Zr.forEach(t),_n.forEach(t),Yt=g(o),C=a(o,"DIV",{class:!0});var W=r(C);w(po.$$.fragment,W),_a=g(W),bt=a(W,"P",{});var Kr=r(bt);ba=d(Kr,`BigBirdPegasus model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Kr.forEach(t),va=g(W),ho=a(W,"P",{});var bn=r(ho);ya=d(bn,"This model inherits from "),No=a(bn,"A",{href:!0});var Yr=r(No);wa=d(Yr,"PreTrainedModel"),Yr.forEach(t),Ba=d(bn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),bn.forEach(t),ka=g(W),go=a(W,"P",{});var vn=r(go);Ta=d(vn,"This model is also a PyTorch "),mo=a(vn,"A",{href:!0,rel:!0});var Xr=r(mo);$a=d(Xr,"torch.nn.Module"),Xr.forEach(t),Pa=d(vn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vn.forEach(t),qa=g(W),z=a(W,"DIV",{class:!0});var E=r(z);w(fo.$$.fragment,E),za=g(E),se=a(E,"P",{});var Uo=r(se);Fa=d(Uo,"The "),Io=a(Uo,"A",{href:!0});var ei=r(Io);xa=d(ei,"BigBirdPegasusForSequenceClassification"),ei.forEach(t),Ca=d(Uo," forward method, overrides the "),vt=a(Uo,"CODE",{});var oi=r(vt);Ma=d(oi,"__call__"),oi.forEach(t),ja=d(Uo," special method."),Uo.forEach(t),Ea=g(E),w(Be.$$.fragment,E),Sa=g(E),w(ke.$$.fragment,E),Aa=g(E),w(Te.$$.fragment,E),Oa=g(E),w($e.$$.fragment,E),La=g(E),w(Pe.$$.fragment,E),E.forEach(t),W.forEach(t),Xt=g(o),ae=a(o,"H2",{class:!0});var yn=r(ae);qe=a(yn,"A",{id:!0,class:!0,href:!0});var ti=r(qe);yt=a(ti,"SPAN",{});var ni=r(yt);w(_o.$$.fragment,ni),ni.forEach(t),ti.forEach(t),Na=g(yn),wt=a(yn,"SPAN",{});var si=r(wt);Ia=d(si,"BigBirdPegasusForQuestionAnswering"),si.forEach(t),yn.forEach(t),en=g(o),M=a(o,"DIV",{class:!0});var Q=r(M);w(bo.$$.fragment,Q),Da=g(Q),re=a(Q,"P",{});var Vo=r(re);Ga=d(Vo,`BigBirdPegasus Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Bt=a(Vo,"CODE",{});var ai=r(Bt);Wa=d(ai,"span start logits"),ai.forEach(t),Qa=d(Vo," and "),kt=a(Vo,"CODE",{});var ri=r(kt);Ha=d(ri,"span end logits"),ri.forEach(t),Ra=d(Vo,")."),Vo.forEach(t),Ua=g(Q),vo=a(Q,"P",{});var wn=r(vo);Va=d(wn,"This model inherits from "),Do=a(wn,"A",{href:!0});var ii=r(Do);Ja=d(ii,"PreTrainedModel"),ii.forEach(t),Za=d(wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),wn.forEach(t),Ka=g(Q),yo=a(Q,"P",{});var Bn=r(yo);Ya=d(Bn,"This model is also a PyTorch "),wo=a(Bn,"A",{href:!0,rel:!0});var di=r(wo);Xa=d(di,"torch.nn.Module"),di.forEach(t),er=d(Bn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bn.forEach(t),or=g(Q),j=a(Q,"DIV",{class:!0});var H=r(j);w(Bo.$$.fragment,H),tr=g(H),ie=a(H,"P",{});var Jo=r(ie);nr=d(Jo,"The "),Go=a(Jo,"A",{href:!0});var li=r(Go);sr=d(li,"BigBirdPegasusForQuestionAnswering"),li.forEach(t),ar=d(Jo," forward method, overrides the "),Tt=a(Jo,"CODE",{});var ci=r(Tt);rr=d(ci,"__call__"),ci.forEach(t),ir=d(Jo," special method."),Jo.forEach(t),dr=g(H),w(ze.$$.fragment,H),lr=g(H),w(Fe.$$.fragment,H),cr=g(H),w(xe.$$.fragment,H),H.forEach(t),Q.forEach(t),on=g(o),de=a(o,"H2",{class:!0});var kn=r(de);Ce=a(kn,"A",{id:!0,class:!0,href:!0});var ui=r(Ce);$t=a(ui,"SPAN",{});var pi=r($t);w(ko.$$.fragment,pi),pi.forEach(t),ui.forEach(t),ur=g(kn),Pt=a(kn,"SPAN",{});var hi=r(Pt);pr=d(hi,"BigBirdPegasusForCausalLM"),hi.forEach(t),kn.forEach(t),tn=g(o),le=a(o,"DIV",{class:!0});var Tn=r(le);w(To.$$.fragment,Tn),hr=g(Tn),Me=a(Tn,"DIV",{class:!0});var $n=r(Me);w($o.$$.fragment,$n),gr=g($n),w(je.$$.fragment,$n),$n.forEach(t),Tn.forEach(t),this.h()},h(){m(l,"name","hf:doc:metadata"),m(l,"content",JSON.stringify(Ei)),m(u,"id","bigbirdpegasus"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#bigbirdpegasus"),m(c,"class","relative group"),m(ce,"id","overview"),m(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ce,"href","#overview"),m(J,"class","relative group"),m(De,"href","https://arxiv.org/abs/2007.14062"),m(De,"rel","nofollow"),m(We,"href","https://huggingface.co/blog/big-bird"),m(We,"rel","nofollow"),m(Ue,"href","https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py"),m(Ue,"rel","nofollow"),m(Ve,"href","https://github.com/google-research/bigbird"),m(Ve,"rel","nofollow"),m(he,"id","transformers.BigBirdPegasusConfig"),m(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(he,"href","#transformers.BigBirdPegasusConfig"),m(Z,"class","relative group"),m(Mo,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel"),m(Ke,"href","https://huggingface.co/google/bigbird-pegasus-large-arxiv"),m(Ke,"rel","nofollow"),m(jo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Eo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(me,"id","transformers.BigBirdPegasusModel"),m(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(me,"href","#transformers.BigBirdPegasusModel"),m(X,"class","relative group"),m(So,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(to,"rel","nofollow"),m(Ao,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(be,"id","transformers.BigBirdPegasusForConditionalGeneration"),m(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(be,"href","#transformers.BigBirdPegasusForConditionalGeneration"),m(oe,"class","relative group"),m(Oo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(lo,"rel","nofollow"),m(Lo,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForConditionalGeneration"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(we,"id","transformers.BigBirdPegasusForSequenceClassification"),m(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(we,"href","#transformers.BigBirdPegasusForSequenceClassification"),m(ne,"class","relative group"),m(No,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(mo,"rel","nofollow"),m(Io,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForSequenceClassification"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"id","transformers.BigBirdPegasusForQuestionAnswering"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.BigBirdPegasusForQuestionAnswering"),m(ae,"class","relative group"),m(Do,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(wo,"rel","nofollow"),m(Go,"href","/docs/transformers/main/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForQuestionAnswering"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ce,"id","transformers.BigBirdPegasusForCausalLM"),m(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ce,"href","#transformers.BigBirdPegasusForCausalLM"),m(de,"class","relative group"),m(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,l),b(o,_,f),b(o,c,f),e(c,u),e(u,v),B(n,v,null),e(c,p),e(c,F),e(F,qn),b(o,Lt,f),b(o,J,f),e(J,ce),e(ce,Zo),B(Ie,Zo,null),e(J,zn),e(J,Ko),e(Ko,Fn),b(o,Nt,f),b(o,ue,f),e(ue,xn),e(ue,De),e(De,Cn),e(ue,Mn),b(o,It,f),b(o,Fo,f),e(Fo,jn),b(o,Dt,f),b(o,xo,f),e(xo,Yo),e(Yo,En),b(o,Gt,f),b(o,Co,f),e(Co,Sn),b(o,Wt,f),b(o,q,f),e(q,Ge),e(Ge,An),e(Ge,We),e(We,On),e(Ge,Ln),e(q,Nn),e(q,S),e(S,In),e(S,Xo),e(Xo,Dn),e(S,Gn),e(S,et),e(et,Wn),e(S,Qn),e(S,ot),e(ot,Hn),e(S,Rn),e(S,tt),e(tt,Un),e(S,Vn),e(q,Jn),e(q,nt),e(nt,Zn),e(q,Kn),e(q,st),e(st,Yn),e(q,Xn),e(q,Qe),e(Qe,es),e(Qe,at),e(at,os),e(Qe,ts),e(q,ns),e(q,He),e(He,ss),e(He,rt),e(rt,as),e(He,rs),e(q,is),e(q,Re),e(Re,ds),e(Re,Ue),e(Ue,ls),e(Re,cs),e(q,us),e(q,it),e(it,ps),b(o,Qt,f),b(o,pe,f),e(pe,hs),e(pe,Ve),e(Ve,gs),e(pe,ms),b(o,Ht,f),b(o,Z,f),e(Z,he),e(he,dt),B(Je,dt,null),e(Z,fs),e(Z,lt),e(lt,_s),b(o,Rt,f),b(o,A,f),B(Ze,A,null),e(A,bs),e(A,K),e(K,vs),e(K,Mo),e(Mo,ys),e(K,ws),e(K,Ke),e(Ke,Bs),e(K,ks),e(A,Ts),e(A,Y),e(Y,$s),e(Y,jo),e(jo,Ps),e(Y,qs),e(Y,Eo),e(Eo,zs),e(Y,Fs),e(A,xs),B(ge,A,null),b(o,Ut,f),b(o,X,f),e(X,me),e(me,ct),B(Ye,ct,null),e(X,Cs),e(X,ut),e(ut,Ms),b(o,Vt,f),b(o,O,f),B(Xe,O,null),e(O,js),e(O,eo),e(eo,Es),e(eo,So),e(So,Ss),e(eo,As),e(O,Os),e(O,oo),e(oo,Ls),e(oo,to),e(to,Ns),e(oo,Is),e(O,Ds),e(O,N),B(no,N,null),e(N,Gs),e(N,ee),e(ee,Ws),e(ee,Ao),e(Ao,Qs),e(ee,Hs),e(ee,pt),e(pt,Rs),e(ee,Us),e(N,Vs),B(fe,N,null),e(N,Js),B(_e,N,null),b(o,Jt,f),b(o,oe,f),e(oe,be),e(be,ht),B(so,ht,null),e(oe,Zs),e(oe,gt),e(gt,Ks),b(o,Zt,f),b(o,L,f),B(ao,L,null),e(L,Ys),e(L,ro),e(ro,Xs),e(ro,Oo),e(Oo,ea),e(ro,oa),e(L,ta),e(L,io),e(io,na),e(io,lo),e(lo,sa),e(io,aa),e(L,ra),e(L,I),B(co,I,null),e(I,ia),e(I,te),e(te,da),e(te,Lo),e(Lo,la),e(te,ca),e(te,mt),e(mt,ua),e(te,pa),e(I,ha),B(ve,I,null),e(I,ga),B(ye,I,null),b(o,Kt,f),b(o,ne,f),e(ne,we),e(we,ft),B(uo,ft,null),e(ne,ma),e(ne,_t),e(_t,fa),b(o,Yt,f),b(o,C,f),B(po,C,null),e(C,_a),e(C,bt),e(bt,ba),e(C,va),e(C,ho),e(ho,ya),e(ho,No),e(No,wa),e(ho,Ba),e(C,ka),e(C,go),e(go,Ta),e(go,mo),e(mo,$a),e(go,Pa),e(C,qa),e(C,z),B(fo,z,null),e(z,za),e(z,se),e(se,Fa),e(se,Io),e(Io,xa),e(se,Ca),e(se,vt),e(vt,Ma),e(se,ja),e(z,Ea),B(Be,z,null),e(z,Sa),B(ke,z,null),e(z,Aa),B(Te,z,null),e(z,Oa),B($e,z,null),e(z,La),B(Pe,z,null),b(o,Xt,f),b(o,ae,f),e(ae,qe),e(qe,yt),B(_o,yt,null),e(ae,Na),e(ae,wt),e(wt,Ia),b(o,en,f),b(o,M,f),B(bo,M,null),e(M,Da),e(M,re),e(re,Ga),e(re,Bt),e(Bt,Wa),e(re,Qa),e(re,kt),e(kt,Ha),e(re,Ra),e(M,Ua),e(M,vo),e(vo,Va),e(vo,Do),e(Do,Ja),e(vo,Za),e(M,Ka),e(M,yo),e(yo,Ya),e(yo,wo),e(wo,Xa),e(yo,er),e(M,or),e(M,j),B(Bo,j,null),e(j,tr),e(j,ie),e(ie,nr),e(ie,Go),e(Go,sr),e(ie,ar),e(ie,Tt),e(Tt,rr),e(ie,ir),e(j,dr),B(ze,j,null),e(j,lr),B(Fe,j,null),e(j,cr),B(xe,j,null),b(o,on,f),b(o,de,f),e(de,Ce),e(Ce,$t),B(ko,$t,null),e(de,ur),e(de,Pt),e(Pt,pr),b(o,tn,f),b(o,le,f),B(To,le,null),e(le,hr),e(le,Me),B($o,Me,null),e(Me,gr),B(je,Me,null),nn=!0},p(o,[f]){const Po={};f&2&&(Po.$$scope={dirty:f,ctx:o}),ge.$set(Po);const qt={};f&2&&(qt.$$scope={dirty:f,ctx:o}),fe.$set(qt);const zt={};f&2&&(zt.$$scope={dirty:f,ctx:o}),_e.$set(zt);const Ft={};f&2&&(Ft.$$scope={dirty:f,ctx:o}),ve.$set(Ft);const qo={};f&2&&(qo.$$scope={dirty:f,ctx:o}),ye.$set(qo);const xt={};f&2&&(xt.$$scope={dirty:f,ctx:o}),Be.$set(xt);const Ct={};f&2&&(Ct.$$scope={dirty:f,ctx:o}),ke.$set(Ct);const Mt={};f&2&&(Mt.$$scope={dirty:f,ctx:o}),Te.$set(Mt);const zo={};f&2&&(zo.$$scope={dirty:f,ctx:o}),$e.$set(zo);const jt={};f&2&&(jt.$$scope={dirty:f,ctx:o}),Pe.$set(jt);const Et={};f&2&&(Et.$$scope={dirty:f,ctx:o}),ze.$set(Et);const St={};f&2&&(St.$$scope={dirty:f,ctx:o}),Fe.$set(St);const At={};f&2&&(At.$$scope={dirty:f,ctx:o}),xe.$set(At);const Ot={};f&2&&(Ot.$$scope={dirty:f,ctx:o}),je.$set(Ot)},i(o){nn||(k(n.$$.fragment,o),k(Ie.$$.fragment,o),k(Je.$$.fragment,o),k(Ze.$$.fragment,o),k(ge.$$.fragment,o),k(Ye.$$.fragment,o),k(Xe.$$.fragment,o),k(no.$$.fragment,o),k(fe.$$.fragment,o),k(_e.$$.fragment,o),k(so.$$.fragment,o),k(ao.$$.fragment,o),k(co.$$.fragment,o),k(ve.$$.fragment,o),k(ye.$$.fragment,o),k(uo.$$.fragment,o),k(po.$$.fragment,o),k(fo.$$.fragment,o),k(Be.$$.fragment,o),k(ke.$$.fragment,o),k(Te.$$.fragment,o),k($e.$$.fragment,o),k(Pe.$$.fragment,o),k(_o.$$.fragment,o),k(bo.$$.fragment,o),k(Bo.$$.fragment,o),k(ze.$$.fragment,o),k(Fe.$$.fragment,o),k(xe.$$.fragment,o),k(ko.$$.fragment,o),k(To.$$.fragment,o),k($o.$$.fragment,o),k(je.$$.fragment,o),nn=!0)},o(o){T(n.$$.fragment,o),T(Ie.$$.fragment,o),T(Je.$$.fragment,o),T(Ze.$$.fragment,o),T(ge.$$.fragment,o),T(Ye.$$.fragment,o),T(Xe.$$.fragment,o),T(no.$$.fragment,o),T(fe.$$.fragment,o),T(_e.$$.fragment,o),T(so.$$.fragment,o),T(ao.$$.fragment,o),T(co.$$.fragment,o),T(ve.$$.fragment,o),T(ye.$$.fragment,o),T(uo.$$.fragment,o),T(po.$$.fragment,o),T(fo.$$.fragment,o),T(Be.$$.fragment,o),T(ke.$$.fragment,o),T(Te.$$.fragment,o),T($e.$$.fragment,o),T(Pe.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(Bo.$$.fragment,o),T(ze.$$.fragment,o),T(Fe.$$.fragment,o),T(xe.$$.fragment,o),T(ko.$$.fragment,o),T(To.$$.fragment,o),T($o.$$.fragment,o),T(je.$$.fragment,o),nn=!1},d(o){t(l),o&&t(_),o&&t(c),$(n),o&&t(Lt),o&&t(J),$(Ie),o&&t(Nt),o&&t(ue),o&&t(It),o&&t(Fo),o&&t(Dt),o&&t(xo),o&&t(Gt),o&&t(Co),o&&t(Wt),o&&t(q),o&&t(Qt),o&&t(pe),o&&t(Ht),o&&t(Z),$(Je),o&&t(Rt),o&&t(A),$(Ze),$(ge),o&&t(Ut),o&&t(X),$(Ye),o&&t(Vt),o&&t(O),$(Xe),$(no),$(fe),$(_e),o&&t(Jt),o&&t(oe),$(so),o&&t(Zt),o&&t(L),$(ao),$(co),$(ve),$(ye),o&&t(Kt),o&&t(ne),$(uo),o&&t(Yt),o&&t(C),$(po),$(fo),$(Be),$(ke),$(Te),$($e),$(Pe),o&&t(Xt),o&&t(ae),$(_o),o&&t(en),o&&t(M),$(bo),$(Bo),$(ze),$(Fe),$(xe),o&&t(on),o&&t(de),$(ko),o&&t(tn),o&&t(le),$(To),$($o),$(je)}}}const Ei={local:"bigbirdpegasus",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdPegasusConfig",title:"BigBirdPegasusConfig"},{local:"transformers.BigBirdPegasusModel",title:"BigBirdPegasusModel"},{local:"transformers.BigBirdPegasusForConditionalGeneration",title:"BigBirdPegasusForConditionalGeneration"},{local:"transformers.BigBirdPegasusForSequenceClassification",title:"BigBirdPegasusForSequenceClassification"},{local:"transformers.BigBirdPegasusForQuestionAnswering",title:"BigBirdPegasusForQuestionAnswering"},{local:"transformers.BigBirdPegasusForCausalLM",title:"BigBirdPegasusForCausalLM"}],title:"BigBirdPegasus"};function Si(P){return bi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Gi extends gi{constructor(l){super();mi(this,l,Si,ji,fi,{})}}export{Gi as default,Ei as metadata};
