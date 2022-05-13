import{S as Pd,i as Ld,s as $d,e as n,k as u,w as k,t as i,M as qd,c as a,d as o,m,a as s,x as y,h as d,b as c,F as e,g as _,y as T,q as w,o as P,B as L,v as zd,L as ue}from"../../chunks/vendor-6b77c823.js";import{T as ii}from"../../chunks/Tip-39098574.js";import{D as I}from"../../chunks/Docstring-1088f2fb.js";import{C as W}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as pe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as he}from"../../chunks/ExampleCodeBlock-5212b321.js";function Bd($){let l,b,p,f,v;return f=new W({props:{code:`from transformers import PLBartModel, PLBartConfig

# Initializing a PLBART uclanlp/plbart-base style configuration
configuration = PLBartConfig()
# Initializing a model from the uclanlp/plbart-base style configuration
model = PLBartModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartModel, PLBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a PLBART uclanlp/plbart-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = PLBartConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the uclanlp/plbart-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),b=i("Example:"),p=u(),k(f.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),v=!0},p:ue,i(r){v||(w(f.$$.fragment,r),v=!0)},o(r){P(f.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function xd($){let l,b,p,f,v;return f=new W({props:{code:`from transformers import PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_english, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=n("p"),b=i("Examples:"),p=u(),k(f.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Examples:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),v=!0},p:ue,i(r){v||(w(f.$$.fragment,r),v=!0)},o(r){P(f.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Cd($){let l,b,p,f,v;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var x=s(p);f=d(x,"Module"),x.forEach(o),v=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,f),e(l,v)},d(r){r&&o(l)}}}function Fd($){let l,b,p,f,v;return f=new W({props:{code:`from transformers import PLBartTokenizer, PLBartModel
import torch

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartModel.from_pretrained("uclanlp/plbart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),b=i("Example:"),p=u(),k(f.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),v=!0},p:ue,i(r){v||(w(f.$$.fragment,r),v=!0)},o(r){P(f.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function jd($){let l,b,p,f,v;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var x=s(p);f=d(x,"Module"),x.forEach(o),v=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,f),e(l,v)},d(r){r&&o(l)}}}function Ed($){let l,b,p,f,v;return f=new W({props:{code:`from transformers import PLBartTokenizer, PLBartForConditionalGeneration

model = PLBartForConditionalGeneration.from_pretrained("uclanlp/plbart-base")
tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")

# en_XX is the language symbol id <LID> for English
TXT = "<s> Is 0 the <mask> Fibonacci number ? </s> en_XX"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt").input_ids

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># en_XX is the language symbol id &lt;LID&gt; for English</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;s&gt; Is 0 the &lt;mask&gt; Fibonacci number ? &lt;/s&gt; en_XX&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;same&#x27;</span>, <span class="hljs-string">&#x27;first&#x27;</span>, <span class="hljs-string">&#x27;highest&#x27;</span>, <span class="hljs-string">&#x27;result&#x27;</span>, <span class="hljs-string">&#x27;Fib&#x27;</span>]`}}),{c(){l=n("p"),b=i("Mask-filling example:"),p=u(),k(f.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Mask-filling example:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),v=!0},p:ue,i(r){v||(w(f.$$.fragment,r),v=!0)},o(r){P(f.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Md($){let l,b,p,f,v;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),f=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var x=s(p);f=d(x,"Module"),x.forEach(o),v=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,f),e(l,v)},d(r){r&&o(l)}}}function Sd($){let l,b,p,f,v;return f=new W({props:{code:`import torch
from transformers import PLBartTokenizer, PLBartForSequenceClassification

tokenizer = PLBartTokenizer.from_pretrained("hf-internal-testing/tiny-plbart")
model = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),b=i("Example of single-label classification:"),p=u(),k(f.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example of single-label classification:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),v=!0},p:ue,i(r){v||(w(f.$$.fragment,r),v=!0)},o(r){P(f.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Ad($){let l,b;return l=new W({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){k(l.$$.fragment)},l(p){y(l.$$.fragment,p)},m(p,f){T(l,p,f),b=!0},p:ue,i(p){b||(w(l.$$.fragment,p),b=!0)},o(p){P(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function Nd($){let l,b,p,f,v;return f=new W({props:{code:`import torch
from transformers import PLBartTokenizer, PLBartForSequenceClassification

tokenizer = PLBartTokenizer.from_pretrained("hf-internal-testing/tiny-plbart")
model = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),b=i("Example of multi-label classification:"),p=u(),k(f.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example of multi-label classification:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),v=!0},p:ue,i(r){v||(w(f.$$.fragment,r),v=!0)},o(r){P(f.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Od($){let l,b;return l=new W({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = PLBartForSequenceClassification.from_pretrained(
    "hf-internal-testing/tiny-plbart", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(l.$$.fragment)},l(p){y(l.$$.fragment,p)},m(p,f){T(l,p,f),b=!0},p:ue,i(p){b||(w(l.$$.fragment,p),b=!0)},o(p){P(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function Id($){let l,b,p,f,v;return f=new W({props:{code:`from transformers import PLBartTokenizer, PLBartForCausalLM

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base")
model = PLBartForCausalLM.from_pretrained("uclanlp/plbart-base", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer, PLBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){l=n("p"),b=i("Example:"),p=u(),k(f.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),v=!0},p:ue,i(r){v||(w(f.$$.fragment,r),v=!0)},o(r){P(f.$$.fragment,r),v=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Dd($){let l,b,p,f,v,r,g,x,na,rn,D,co,aa,sa,Ge,ra,ia,Re,da,la,dn,K,me,po,He,ca,ho,pa,ln,G,ha,Ue,ua,ma,uo,fa,ga,cn,Nt,_a,pn,Ot,mo,ba,hn,R,va,Ve,ka,ya,Je,Ta,wa,un,Q,fe,fo,Ke,Pa,go,La,mn,C,$a,_o,qa,za,bo,Ba,xa,vo,Ca,Fa,ko,ja,Ea,fn,ge,Ma,Qe,Sa,Aa,gn,H,Na,Ye,yo,Oa,Ia,Da,It,Xa,Wa,_n,Dt,To,Ga,bn,Ze,vn,Xt,et,wo,Ra,Ha,Y,Ua,Po,Va,Ja,Lo,Ka,Qa,kn,tt,yn,Z,_e,$o,ot,Ya,qo,Za,Tn,E,nt,es,ee,ts,Wt,os,ns,at,as,ss,rs,te,is,Gt,ds,ls,Rt,cs,ps,hs,be,wn,oe,ve,zo,st,us,Bo,ms,Pn,q,rt,fs,xo,gs,_s,X,bs,Ht,vs,ks,Ut,ys,Ts,it,ws,Ps,Ls,dt,$s,Co,qs,zs,Bs,ke,xs,ye,lt,Cs,Fo,Fs,js,A,ct,Es,pt,Ms,jo,Ss,As,Ns,ht,ut,Eo,Os,Is,Mo,Ds,Xs,mt,So,Ws,Gs,Ao,Rs,Hs,No,Us,Ln,ne,Te,Oo,ft,Vs,Io,Js,$n,M,gt,Ks,_t,Qs,Vt,Ys,Zs,er,bt,tr,vt,or,nr,ar,N,kt,sr,ae,rr,Jt,ir,dr,Do,lr,cr,pr,we,hr,Pe,qn,se,Le,Xo,yt,ur,Wo,mr,zn,S,Tt,fr,wt,gr,Kt,_r,br,vr,Pt,kr,Lt,yr,Tr,wr,O,$t,Pr,re,Lr,Qt,$r,qr,Go,zr,Br,xr,$e,Cr,qe,Bn,ie,ze,Ro,qt,Fr,Ho,jr,xn,B,zt,Er,Uo,Mr,Sr,Bt,Ar,Yt,Nr,Or,Ir,xt,Dr,Ct,Xr,Wr,Gr,z,Ft,Rr,de,Hr,Zt,Ur,Vr,Vo,Jr,Kr,Qr,Be,Yr,xe,Zr,Ce,ei,Fe,ti,je,Cn,le,Ee,Jo,jt,oi,Ko,ni,Fn,ce,Et,ai,Me,Mt,si,Se,jn;return r=new pe({}),He=new pe({}),Ke=new pe({}),Ze=new W({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base", src_lang="en_XX", tgt_lang="python")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_english, return_tensors="pt")
inputs["labels"] = labels["input_ids"]
# forward pass
model(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;python&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),tt=new W({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
inputs = tokenizer(example_python_phrase, return_tensors="pt")
model = PLBartForConditionalGeneration.from_pretrained("uclanlp/plbart-python-en_XX")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["en_XX"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>`}}),ot=new pe({}),nt=new I({props:{name:"class transformers.PLBartConfig",anchor:"transformers.PLBartConfig",parameters:[{name:"vocab_size",val:" = 50005"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 3072"},{name:"encoder_attention_heads",val:" = 12"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 3072"},{name:"decoder_attention_heads",val:" = 12"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50005) &#x2014;
Vocabulary size of the PLBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartModel">PLBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.PLBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.PLBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.PLBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.PLBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.PLBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.PLBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.PLBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.PLBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.PLBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.PLBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.PLBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.PLBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.PLBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.PLBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.PLBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.PLBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.PLBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/configuration_plbart.py#L32"}}),be=new he({props:{anchor:"transformers.PLBartConfig.example",$$slots:{default:[Bd]},$$scope:{ctx:$}}}),st=new pe({}),rt=new I({props:{name:"class transformers.PLBartTokenizer",anchor:"transformers.PLBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"language_codes",val:" = 'base'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.PLBartTokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.PLBartTokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.PLBartTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The start of sequence token.`,name:"bos_token"},{anchor:"transformers.PLBartTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.PLBartTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.PLBartTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The cls token, which is a special token used as the first token for all tasks.`,name:"cls_token"},{anchor:"transformers.PLBartTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.PLBartTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.PLBartTokenizer.mask_token(str,",description:`<strong>mask_token(<code>str</code>,</strong> <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masking tasks. This
is only used in the <code>&quot;base&quot;</code> tokenizer type. For <code>&quot;multi&quot;</code> tokenizer, masking is never done for the
downstream tasks.`,name:"mask_token(str,"},{anchor:"transformers.PLBartTokenizer.language_codes",description:`<strong>language_codes</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;base&quot;</code>) &#x2014;
What language codes to use. Should be one of <code>&quot;base&quot;</code> or <code>&quot;multi&quot;</code>.`,name:"language_codes"},{anchor:"transformers.PLBartTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:<ul>
<li><code>enable_sampling</code>: Enable subword regularization.</li>
<li><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul></li>
<li><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/tokenization_plbart.py#L75"}}),ke=new he({props:{anchor:"transformers.PLBartTokenizer.example",$$slots:{default:[xd]},$$scope:{ctx:$}}}),lt=new I({props:{name:"as_target_tokenizer",anchor:"transformers.PLBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/tokenization_plbart.py#L422"}}),ct=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/tokenization_plbart.py#L302",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ft=new pe({}),gt=new I({props:{name:"class transformers.PLBartModel",anchor:"transformers.PLBartModel",parameters:[{name:"config",val:": PLBartConfig"}],parametersDescription:[{anchor:"transformers.PLBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/modeling_plbart.py#L1113"}}),kt=new I({props:{name:"forward",anchor:"transformers.PLBartModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PLBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 50003 for <em>en_XX</em>, and 50001 for <em>java</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.PLBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> ( &#x2014;
obj:<em>torch.LongTensor</em> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>): Default behavior:
generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PLBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PLBartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> ( &#x2014;
obj:<em>torch.Tensor</em> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>): Mask to nullify
selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PLBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> ( &#x2014;
obj:<em>tuple(tuple(torch.FloatTensor))</em>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when
<code>config.use_cache=True</code>): Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple
having 2 tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally,
instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful
if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s
internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PLBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>):
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PLBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PLBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/modeling_plbart.py#L1139",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),we=new ii({props:{$$slots:{default:[Cd]},$$scope:{ctx:$}}}),Pe=new he({props:{anchor:"transformers.PLBartModel.forward.example",$$slots:{default:[Fd]},$$scope:{ctx:$}}}),yt=new pe({}),Tt=new I({props:{name:"class transformers.PLBartForConditionalGeneration",anchor:"transformers.PLBartForConditionalGeneration",parameters:[{name:"config",val:": PLBartConfig"}],parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/modeling_plbart.py#L1229"}}),$t=new I({props:{name:"forward",anchor:"transformers.PLBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PLBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 50003 for <em>en_XX</em>, and 50001 for <em>java</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> ( &#x2014;
obj:<em>torch.LongTensor</em> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>): Default behavior:
generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> ( &#x2014;
obj:<em>torch.Tensor</em> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>): Mask to nullify
selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PLBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> ( &#x2014;
obj:<em>tuple(tuple(torch.FloatTensor))</em>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when
<code>config.use_cache=True</code>): Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple
having 2 tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally,
instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful
if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s
internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>):
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PLBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PLBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/modeling_plbart.py#L1272",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new ii({props:{$$slots:{default:[jd]},$$scope:{ctx:$}}}),qe=new he({props:{anchor:"transformers.PLBartForConditionalGeneration.forward.example",$$slots:{default:[Ed]},$$scope:{ctx:$}}}),qt=new pe({}),zt=new I({props:{name:"class transformers.PLBartForSequenceClassification",anchor:"transformers.PLBartForSequenceClassification",parameters:[{name:"config",val:": PLBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/modeling_plbart.py#L1398"}}),Ft=new I({props:{name:"forward",anchor:"transformers.PLBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>PLBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 50003 for <em>en_XX</em>, and 50001 for <em>java</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> ( &#x2014;
obj:<em>torch.LongTensor</em> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>): Default behavior:
generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> ( &#x2014;
obj:<em>torch.Tensor</em> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>): Mask to nullify
selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.PLBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> ( &#x2014;
obj:<em>tuple(tuple(torch.FloatTensor))</em>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when
<code>config.use_cache=True</code>): Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple
having 2 tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally,
instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful
if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s
internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> ( &#x2014;
obj:<em>torch.FloatTensor</em> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>):
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.PLBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.PLBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/modeling_plbart.py#L1411",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new ii({props:{$$slots:{default:[Md]},$$scope:{ctx:$}}}),xe=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example",$$slots:{default:[Sd]},$$scope:{ctx:$}}}),Ce=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-2",$$slots:{default:[Ad]},$$scope:{ctx:$}}}),Fe=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-3",$$slots:{default:[Nd]},$$scope:{ctx:$}}}),je=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-4",$$slots:{default:[Od]},$$scope:{ctx:$}}}),jt=new pe({}),Et=new I({props:{name:"class transformers.PLBartForCausalLM",anchor:"transformers.PLBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/modeling_plbart.py#L1535"}}),Mt=new I({props:{name:"forward",anchor:"transformers.PLBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a>. See <a href="/docs/transformers/v4.19.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.PLBartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.PLBartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.PLBartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.PLBartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.PLBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.PLBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.PLBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.PLBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.PLBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.1/src/transformers/models/plbart/modeling_plbart.py#L1566",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartConfig"
>PLBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.19.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new he({props:{anchor:"transformers.PLBartForCausalLM.forward.example",$$slots:{default:[Id]},$$scope:{ctx:$}}}),{c(){l=n("meta"),b=u(),p=n("h1"),f=n("a"),v=n("span"),k(r.$$.fragment),g=u(),x=n("span"),na=i("PLBart"),rn=u(),D=n("p"),co=n("strong"),aa=i("DISCLAIMER:"),sa=i(" If you see something strange, file a "),Ge=n("a"),ra=i("Github Issue"),ia=i(` and assign
`),Re=n("a"),da=i("@gchhablani"),la=i("."),dn=u(),K=n("h2"),me=n("a"),po=n("span"),k(He.$$.fragment),ca=u(),ho=n("span"),pa=i("Overview of PLBart"),ln=u(),G=n("p"),ha=i("The PLBART model was proposed in "),Ue=n("a"),ua=i("Unified Pre-training for Program Understanding and Generation"),ma=i(` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),uo=n("code"),fa=i("plbart-base"),ga=i(` has been trained using multilingual denoising task
on Java, Python and English.`),cn=u(),Nt=n("p"),_a=i("According to the abstract"),pn=u(),Ot=n("p"),mo=n("em"),ba=i(`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),hn=u(),R=n("p"),va=i("This model was contributed by "),Ve=n("a"),ka=i("gchhablani"),ya=i(". The Authors\u2019 code can be found "),Je=n("a"),Ta=i("here"),wa=i("."),un=u(),Q=n("h3"),fe=n("a"),fo=n("span"),k(Ke.$$.fragment),Pa=u(),go=n("span"),La=i("Training of PLBart"),mn=u(),C=n("p"),$a=i(`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),_o=n("code"),qa=i("X [eos, src_lang_code]"),za=i(" where "),bo=n("code"),Ba=i("X"),xa=i(` is the source text. The
target text format is `),vo=n("code"),Ca=i("[tgt_lang_code] X [eos]"),Fa=i(". "),ko=n("code"),ja=i("bos"),Ea=i(" is never used."),fn=u(),ge=n("p"),Ma=i("However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Qe=n("a"),Sa=i("the paper"),Aa=i(" to learn more about this."),gn=u(),H=n("p"),Na=i("In cases where the language code is needed, The regular "),Ye=n("a"),yo=n("strong"),Oa=i("call"),Ia=i("()"),Da=i(` will encode source text format, and it should be wrapped
inside the context manager `),It=n("a"),Xa=i("as_target_tokenizer()"),Wa=i(" to encode target text format."),_n=u(),Dt=n("ul"),To=n("li"),Ga=i("Supervised training"),bn=u(),k(Ze.$$.fragment),vn=u(),Xt=n("ul"),et=n("li"),wo=n("p"),Ra=i("Generation"),Ha=u(),Y=n("p"),Ua=i("While generating the target text set the "),Po=n("code"),Va=i("decoder_start_token_id"),Ja=i(` to the target language id. The following
example shows how to translate Python to English using the `),Lo=n("code"),Ka=i("uclanlp/plbart-python-en_XX"),Qa=i(" model."),kn=u(),k(tt.$$.fragment),yn=u(),Z=n("h2"),_e=n("a"),$o=n("span"),k(ot.$$.fragment),Ya=u(),qo=n("span"),Za=i("PLBartConfig"),Tn=u(),E=n("div"),k(nt.$$.fragment),es=u(),ee=n("p"),ts=i("This is the configuration class to store the configuration of a "),Wt=n("a"),os=i("PLBartModel"),ns=i(`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),at=n("a"),as=i("uclanlp/plbart-base"),ss=i(" architecture."),rs=u(),te=n("p"),is=i("Configuration objects inherit from "),Gt=n("a"),ds=i("PretrainedConfig"),ls=i(` and can be used to control the model outputs. Read the
documentation from `),Rt=n("a"),cs=i("PretrainedConfig"),ps=i(" for more information."),hs=u(),k(be.$$.fragment),wn=u(),oe=n("h2"),ve=n("a"),zo=n("span"),k(st.$$.fragment),us=u(),Bo=n("span"),ms=i("PLBartTokenizer"),Pn=u(),q=n("div"),k(rt.$$.fragment),fs=u(),xo=n("p"),gs=i("Construct an PLBART tokenizer."),_s=u(),X=n("p"),bs=i("Adapted from "),Ht=n("a"),vs=i("RobertaTokenizer"),ks=i(" and "),Ut=n("a"),ys=i("XLNetTokenizer"),Ts=i(`. Based on
`),it=n("a"),ws=i("SentencePiece"),Ps=i("."),Ls=u(),dt=n("p"),$s=i("The tokenization method is "),Co=n("code"),qs=i("<tokens> <eos> <language code>"),zs=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Bs=u(),k(ke.$$.fragment),xs=u(),ye=n("div"),k(lt.$$.fragment),Cs=u(),Fo=n("p"),Fs=i(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),js=u(),A=n("div"),k(ct.$$.fragment),Es=u(),pt=n("p"),Ms=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),jo=n("code"),Ss=i("X"),As=i(" represents the sequence:"),Ns=u(),ht=n("ul"),ut=n("li"),Eo=n("code"),Os=i("input_ids"),Is=i(" (for encoder) "),Mo=n("code"),Ds=i("X [eos, src_lang_code]"),Xs=u(),mt=n("li"),So=n("code"),Ws=i("decoder_input_ids"),Gs=i(": (for decoder) "),Ao=n("code"),Rs=i("X [eos, tgt_lang_code]"),Hs=u(),No=n("p"),Us=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ln=u(),ne=n("h2"),Te=n("a"),Oo=n("span"),k(ft.$$.fragment),Vs=u(),Io=n("span"),Js=i("PLBartModel"),$n=u(),M=n("div"),k(gt.$$.fragment),Ks=u(),_t=n("p"),Qs=i(`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Vt=n("a"),Ys=i("PreTrainedModel"),Zs=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),er=u(),bt=n("p"),tr=i("This model is also a PyTorch "),vt=n("a"),or=i("torch.nn.Module"),nr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ar=u(),N=n("div"),k(kt.$$.fragment),sr=u(),ae=n("p"),rr=i("The "),Jt=n("a"),ir=i("PLBartModel"),dr=i(" forward method, overrides the "),Do=n("code"),lr=i("__call__"),cr=i(" special method."),pr=u(),k(we.$$.fragment),hr=u(),k(Pe.$$.fragment),qn=u(),se=n("h2"),Le=n("a"),Xo=n("span"),k(yt.$$.fragment),ur=u(),Wo=n("span"),mr=i("PLBartForConditionalGeneration"),zn=u(),S=n("div"),k(Tt.$$.fragment),fr=u(),wt=n("p"),gr=i(`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Kt=n("a"),_r=i("PreTrainedModel"),br=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vr=u(),Pt=n("p"),kr=i("This model is also a PyTorch "),Lt=n("a"),yr=i("torch.nn.Module"),Tr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wr=u(),O=n("div"),k($t.$$.fragment),Pr=u(),re=n("p"),Lr=i("The "),Qt=n("a"),$r=i("PLBartForConditionalGeneration"),qr=i(" forward method, overrides the "),Go=n("code"),zr=i("__call__"),Br=i(" special method."),xr=u(),k($e.$$.fragment),Cr=u(),k(qe.$$.fragment),Bn=u(),ie=n("h2"),ze=n("a"),Ro=n("span"),k(qt.$$.fragment),Fr=u(),Ho=n("span"),jr=i("PLBartForSequenceClassification"),xn=u(),B=n("div"),k(zt.$$.fragment),Er=u(),Uo=n("p"),Mr=i(`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Sr=u(),Bt=n("p"),Ar=i("This model inherits from "),Yt=n("a"),Nr=i("PreTrainedModel"),Or=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir=u(),xt=n("p"),Dr=i("This model is also a PyTorch "),Ct=n("a"),Xr=i("torch.nn.Module"),Wr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gr=u(),z=n("div"),k(Ft.$$.fragment),Rr=u(),de=n("p"),Hr=i("The "),Zt=n("a"),Ur=i("PLBartForSequenceClassification"),Vr=i(" forward method, overrides the "),Vo=n("code"),Jr=i("__call__"),Kr=i(" special method."),Qr=u(),k(Be.$$.fragment),Yr=u(),k(xe.$$.fragment),Zr=u(),k(Ce.$$.fragment),ei=u(),k(Fe.$$.fragment),ti=u(),k(je.$$.fragment),Cn=u(),le=n("h2"),Ee=n("a"),Jo=n("span"),k(jt.$$.fragment),oi=u(),Ko=n("span"),ni=i("PLBartForCausalLM"),Fn=u(),ce=n("div"),k(Et.$$.fragment),ai=u(),Me=n("div"),k(Mt.$$.fragment),si=u(),k(Se.$$.fragment),this.h()},l(t){const h=qd('[data-svelte="svelte-1phssyn"]',document.head);l=a(h,"META",{name:!0,content:!0}),h.forEach(o),b=m(t),p=a(t,"H1",{class:!0});var St=s(p);f=a(St,"A",{id:!0,class:!0,href:!0});var Qo=s(f);v=a(Qo,"SPAN",{});var Yo=s(v);y(r.$$.fragment,Yo),Yo.forEach(o),Qo.forEach(o),g=m(St),x=a(St,"SPAN",{});var Zo=s(x);na=d(Zo,"PLBart"),Zo.forEach(o),St.forEach(o),rn=m(t),D=a(t,"P",{});var U=s(D);co=a(U,"STRONG",{});var en=s(co);aa=d(en,"DISCLAIMER:"),en.forEach(o),sa=d(U," If you see something strange, file a "),Ge=a(U,"A",{href:!0,rel:!0});var tn=s(Ge);ra=d(tn,"Github Issue"),tn.forEach(o),ia=d(U,` and assign
`),Re=a(U,"A",{href:!0,rel:!0});var on=s(Re);da=d(on,"@gchhablani"),on.forEach(o),la=d(U,"."),U.forEach(o),dn=m(t),K=a(t,"H2",{class:!0});var At=s(K);me=a(At,"A",{id:!0,class:!0,href:!0});var nn=s(me);po=a(nn,"SPAN",{});var an=s(po);y(He.$$.fragment,an),an.forEach(o),nn.forEach(o),ca=m(At),ho=a(At,"SPAN",{});var sn=s(ho);pa=d(sn,"Overview of PLBart"),sn.forEach(o),At.forEach(o),ln=m(t),G=a(t,"P",{});var eo=s(G);ha=d(eo,"The PLBART model was proposed in "),Ue=a(eo,"A",{href:!0,rel:!0});var di=s(Ue);ua=d(di,"Unified Pre-training for Program Understanding and Generation"),di.forEach(o),ma=d(eo,` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),uo=a(eo,"CODE",{});var li=s(uo);fa=d(li,"plbart-base"),li.forEach(o),ga=d(eo,` has been trained using multilingual denoising task
on Java, Python and English.`),eo.forEach(o),cn=m(t),Nt=a(t,"P",{});var ci=s(Nt);_a=d(ci,"According to the abstract"),ci.forEach(o),pn=m(t),Ot=a(t,"P",{});var pi=s(Ot);mo=a(pi,"EM",{});var hi=s(mo);ba=d(hi,`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),hi.forEach(o),pi.forEach(o),hn=m(t),R=a(t,"P",{});var to=s(R);va=d(to,"This model was contributed by "),Ve=a(to,"A",{href:!0,rel:!0});var ui=s(Ve);ka=d(ui,"gchhablani"),ui.forEach(o),ya=d(to,". The Authors\u2019 code can be found "),Je=a(to,"A",{href:!0,rel:!0});var mi=s(Je);Ta=d(mi,"here"),mi.forEach(o),wa=d(to,"."),to.forEach(o),un=m(t),Q=a(t,"H3",{class:!0});var En=s(Q);fe=a(En,"A",{id:!0,class:!0,href:!0});var fi=s(fe);fo=a(fi,"SPAN",{});var gi=s(fo);y(Ke.$$.fragment,gi),gi.forEach(o),fi.forEach(o),Pa=m(En),go=a(En,"SPAN",{});var _i=s(go);La=d(_i,"Training of PLBart"),_i.forEach(o),En.forEach(o),mn=m(t),C=a(t,"P",{});var V=s(C);$a=d(V,`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),_o=a(V,"CODE",{});var bi=s(_o);qa=d(bi,"X [eos, src_lang_code]"),bi.forEach(o),za=d(V," where "),bo=a(V,"CODE",{});var vi=s(bo);Ba=d(vi,"X"),vi.forEach(o),xa=d(V,` is the source text. The
target text format is `),vo=a(V,"CODE",{});var ki=s(vo);Ca=d(ki,"[tgt_lang_code] X [eos]"),ki.forEach(o),Fa=d(V,". "),ko=a(V,"CODE",{});var yi=s(ko);ja=d(yi,"bos"),yi.forEach(o),Ea=d(V," is never used."),V.forEach(o),fn=m(t),ge=a(t,"P",{});var Mn=s(ge);Ma=d(Mn,"However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Qe=a(Mn,"A",{href:!0,rel:!0});var Ti=s(Qe);Sa=d(Ti,"the paper"),Ti.forEach(o),Aa=d(Mn," to learn more about this."),Mn.forEach(o),gn=m(t),H=a(t,"P",{});var oo=s(H);Na=d(oo,"In cases where the language code is needed, The regular "),Ye=a(oo,"A",{href:!0});var ri=s(Ye);yo=a(ri,"STRONG",{});var wi=s(yo);Oa=d(wi,"call"),wi.forEach(o),Ia=d(ri,"()"),ri.forEach(o),Da=d(oo,` will encode source text format, and it should be wrapped
inside the context manager `),It=a(oo,"A",{href:!0});var Pi=s(It);Xa=d(Pi,"as_target_tokenizer()"),Pi.forEach(o),Wa=d(oo," to encode target text format."),oo.forEach(o),_n=m(t),Dt=a(t,"UL",{});var Li=s(Dt);To=a(Li,"LI",{});var $i=s(To);Ga=d($i,"Supervised training"),$i.forEach(o),Li.forEach(o),bn=m(t),y(Ze.$$.fragment,t),vn=m(t),Xt=a(t,"UL",{});var qi=s(Xt);et=a(qi,"LI",{});var Sn=s(et);wo=a(Sn,"P",{});var zi=s(wo);Ra=d(zi,"Generation"),zi.forEach(o),Ha=m(Sn),Y=a(Sn,"P",{});var no=s(Y);Ua=d(no,"While generating the target text set the "),Po=a(no,"CODE",{});var Bi=s(Po);Va=d(Bi,"decoder_start_token_id"),Bi.forEach(o),Ja=d(no,` to the target language id. The following
example shows how to translate Python to English using the `),Lo=a(no,"CODE",{});var xi=s(Lo);Ka=d(xi,"uclanlp/plbart-python-en_XX"),xi.forEach(o),Qa=d(no," model."),no.forEach(o),Sn.forEach(o),qi.forEach(o),kn=m(t),y(tt.$$.fragment,t),yn=m(t),Z=a(t,"H2",{class:!0});var An=s(Z);_e=a(An,"A",{id:!0,class:!0,href:!0});var Ci=s(_e);$o=a(Ci,"SPAN",{});var Fi=s($o);y(ot.$$.fragment,Fi),Fi.forEach(o),Ci.forEach(o),Ya=m(An),qo=a(An,"SPAN",{});var ji=s(qo);Za=d(ji,"PLBartConfig"),ji.forEach(o),An.forEach(o),Tn=m(t),E=a(t,"DIV",{class:!0});var Ae=s(E);y(nt.$$.fragment,Ae),es=m(Ae),ee=a(Ae,"P",{});var ao=s(ee);ts=d(ao,"This is the configuration class to store the configuration of a "),Wt=a(ao,"A",{href:!0});var Ei=s(Wt);os=d(Ei,"PLBartModel"),Ei.forEach(o),ns=d(ao,`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),at=a(ao,"A",{href:!0,rel:!0});var Mi=s(at);as=d(Mi,"uclanlp/plbart-base"),Mi.forEach(o),ss=d(ao," architecture."),ao.forEach(o),rs=m(Ae),te=a(Ae,"P",{});var so=s(te);is=d(so,"Configuration objects inherit from "),Gt=a(so,"A",{href:!0});var Si=s(Gt);ds=d(Si,"PretrainedConfig"),Si.forEach(o),ls=d(so,` and can be used to control the model outputs. Read the
documentation from `),Rt=a(so,"A",{href:!0});var Ai=s(Rt);cs=d(Ai,"PretrainedConfig"),Ai.forEach(o),ps=d(so," for more information."),so.forEach(o),hs=m(Ae),y(be.$$.fragment,Ae),Ae.forEach(o),wn=m(t),oe=a(t,"H2",{class:!0});var Nn=s(oe);ve=a(Nn,"A",{id:!0,class:!0,href:!0});var Ni=s(ve);zo=a(Ni,"SPAN",{});var Oi=s(zo);y(st.$$.fragment,Oi),Oi.forEach(o),Ni.forEach(o),us=m(Nn),Bo=a(Nn,"SPAN",{});var Ii=s(Bo);ms=d(Ii,"PLBartTokenizer"),Ii.forEach(o),Nn.forEach(o),Pn=m(t),q=a(t,"DIV",{class:!0});var F=s(q);y(rt.$$.fragment,F),fs=m(F),xo=a(F,"P",{});var Di=s(xo);gs=d(Di,"Construct an PLBART tokenizer."),Di.forEach(o),_s=m(F),X=a(F,"P",{});var Ne=s(X);bs=d(Ne,"Adapted from "),Ht=a(Ne,"A",{href:!0});var Xi=s(Ht);vs=d(Xi,"RobertaTokenizer"),Xi.forEach(o),ks=d(Ne," and "),Ut=a(Ne,"A",{href:!0});var Wi=s(Ut);ys=d(Wi,"XLNetTokenizer"),Wi.forEach(o),Ts=d(Ne,`. Based on
`),it=a(Ne,"A",{href:!0,rel:!0});var Gi=s(it);ws=d(Gi,"SentencePiece"),Gi.forEach(o),Ps=d(Ne,"."),Ne.forEach(o),Ls=m(F),dt=a(F,"P",{});var On=s(dt);$s=d(On,"The tokenization method is "),Co=a(On,"CODE",{});var Ri=s(Co);qs=d(Ri,"<tokens> <eos> <language code>"),Ri.forEach(o),zs=d(On," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),On.forEach(o),Bs=m(F),y(ke.$$.fragment,F),xs=m(F),ye=a(F,"DIV",{class:!0});var In=s(ye);y(lt.$$.fragment,In),Cs=m(In),Fo=a(In,"P",{});var Hi=s(Fo);Fs=d(Hi,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Hi.forEach(o),In.forEach(o),js=m(F),A=a(F,"DIV",{class:!0});var Oe=s(A);y(ct.$$.fragment,Oe),Es=m(Oe),pt=a(Oe,"P",{});var Dn=s(pt);Ms=d(Dn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),jo=a(Dn,"CODE",{});var Ui=s(jo);Ss=d(Ui,"X"),Ui.forEach(o),As=d(Dn," represents the sequence:"),Dn.forEach(o),Ns=m(Oe),ht=a(Oe,"UL",{});var Xn=s(ht);ut=a(Xn,"LI",{});var Wn=s(ut);Eo=a(Wn,"CODE",{});var Vi=s(Eo);Os=d(Vi,"input_ids"),Vi.forEach(o),Is=d(Wn," (for encoder) "),Mo=a(Wn,"CODE",{});var Ji=s(Mo);Ds=d(Ji,"X [eos, src_lang_code]"),Ji.forEach(o),Wn.forEach(o),Xs=m(Xn),mt=a(Xn,"LI",{});var Gn=s(mt);So=a(Gn,"CODE",{});var Ki=s(So);Ws=d(Ki,"decoder_input_ids"),Ki.forEach(o),Gs=d(Gn,": (for decoder) "),Ao=a(Gn,"CODE",{});var Qi=s(Ao);Rs=d(Qi,"X [eos, tgt_lang_code]"),Qi.forEach(o),Gn.forEach(o),Xn.forEach(o),Hs=m(Oe),No=a(Oe,"P",{});var Yi=s(No);Us=d(Yi,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Yi.forEach(o),Oe.forEach(o),F.forEach(o),Ln=m(t),ne=a(t,"H2",{class:!0});var Rn=s(ne);Te=a(Rn,"A",{id:!0,class:!0,href:!0});var Zi=s(Te);Oo=a(Zi,"SPAN",{});var ed=s(Oo);y(ft.$$.fragment,ed),ed.forEach(o),Zi.forEach(o),Vs=m(Rn),Io=a(Rn,"SPAN",{});var td=s(Io);Js=d(td,"PLBartModel"),td.forEach(o),Rn.forEach(o),$n=m(t),M=a(t,"DIV",{class:!0});var Ie=s(M);y(gt.$$.fragment,Ie),Ks=m(Ie),_t=a(Ie,"P",{});var Hn=s(_t);Qs=d(Hn,`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Vt=a(Hn,"A",{href:!0});var od=s(Vt);Ys=d(od,"PreTrainedModel"),od.forEach(o),Zs=d(Hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn.forEach(o),er=m(Ie),bt=a(Ie,"P",{});var Un=s(bt);tr=d(Un,"This model is also a PyTorch "),vt=a(Un,"A",{href:!0,rel:!0});var nd=s(vt);or=d(nd,"torch.nn.Module"),nd.forEach(o),nr=d(Un,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Un.forEach(o),ar=m(Ie),N=a(Ie,"DIV",{class:!0});var De=s(N);y(kt.$$.fragment,De),sr=m(De),ae=a(De,"P",{});var ro=s(ae);rr=d(ro,"The "),Jt=a(ro,"A",{href:!0});var ad=s(Jt);ir=d(ad,"PLBartModel"),ad.forEach(o),dr=d(ro," forward method, overrides the "),Do=a(ro,"CODE",{});var sd=s(Do);lr=d(sd,"__call__"),sd.forEach(o),cr=d(ro," special method."),ro.forEach(o),pr=m(De),y(we.$$.fragment,De),hr=m(De),y(Pe.$$.fragment,De),De.forEach(o),Ie.forEach(o),qn=m(t),se=a(t,"H2",{class:!0});var Vn=s(se);Le=a(Vn,"A",{id:!0,class:!0,href:!0});var rd=s(Le);Xo=a(rd,"SPAN",{});var id=s(Xo);y(yt.$$.fragment,id),id.forEach(o),rd.forEach(o),ur=m(Vn),Wo=a(Vn,"SPAN",{});var dd=s(Wo);mr=d(dd,"PLBartForConditionalGeneration"),dd.forEach(o),Vn.forEach(o),zn=m(t),S=a(t,"DIV",{class:!0});var Xe=s(S);y(Tt.$$.fragment,Xe),fr=m(Xe),wt=a(Xe,"P",{});var Jn=s(wt);gr=d(Jn,`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Kt=a(Jn,"A",{href:!0});var ld=s(Kt);_r=d(ld,"PreTrainedModel"),ld.forEach(o),br=d(Jn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jn.forEach(o),vr=m(Xe),Pt=a(Xe,"P",{});var Kn=s(Pt);kr=d(Kn,"This model is also a PyTorch "),Lt=a(Kn,"A",{href:!0,rel:!0});var cd=s(Lt);yr=d(cd,"torch.nn.Module"),cd.forEach(o),Tr=d(Kn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kn.forEach(o),wr=m(Xe),O=a(Xe,"DIV",{class:!0});var We=s(O);y($t.$$.fragment,We),Pr=m(We),re=a(We,"P",{});var io=s(re);Lr=d(io,"The "),Qt=a(io,"A",{href:!0});var pd=s(Qt);$r=d(pd,"PLBartForConditionalGeneration"),pd.forEach(o),qr=d(io," forward method, overrides the "),Go=a(io,"CODE",{});var hd=s(Go);zr=d(hd,"__call__"),hd.forEach(o),Br=d(io," special method."),io.forEach(o),xr=m(We),y($e.$$.fragment,We),Cr=m(We),y(qe.$$.fragment,We),We.forEach(o),Xe.forEach(o),Bn=m(t),ie=a(t,"H2",{class:!0});var Qn=s(ie);ze=a(Qn,"A",{id:!0,class:!0,href:!0});var ud=s(ze);Ro=a(ud,"SPAN",{});var md=s(Ro);y(qt.$$.fragment,md),md.forEach(o),ud.forEach(o),Fr=m(Qn),Ho=a(Qn,"SPAN",{});var fd=s(Ho);jr=d(fd,"PLBartForSequenceClassification"),fd.forEach(o),Qn.forEach(o),xn=m(t),B=a(t,"DIV",{class:!0});var J=s(B);y(zt.$$.fragment,J),Er=m(J),Uo=a(J,"P",{});var gd=s(Uo);Mr=d(gd,`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),gd.forEach(o),Sr=m(J),Bt=a(J,"P",{});var Yn=s(Bt);Ar=d(Yn,"This model inherits from "),Yt=a(Yn,"A",{href:!0});var _d=s(Yt);Nr=d(_d,"PreTrainedModel"),_d.forEach(o),Or=d(Yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yn.forEach(o),Ir=m(J),xt=a(J,"P",{});var Zn=s(xt);Dr=d(Zn,"This model is also a PyTorch "),Ct=a(Zn,"A",{href:!0,rel:!0});var bd=s(Ct);Xr=d(bd,"torch.nn.Module"),bd.forEach(o),Wr=d(Zn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zn.forEach(o),Gr=m(J),z=a(J,"DIV",{class:!0});var j=s(z);y(Ft.$$.fragment,j),Rr=m(j),de=a(j,"P",{});var lo=s(de);Hr=d(lo,"The "),Zt=a(lo,"A",{href:!0});var vd=s(Zt);Ur=d(vd,"PLBartForSequenceClassification"),vd.forEach(o),Vr=d(lo," forward method, overrides the "),Vo=a(lo,"CODE",{});var kd=s(Vo);Jr=d(kd,"__call__"),kd.forEach(o),Kr=d(lo," special method."),lo.forEach(o),Qr=m(j),y(Be.$$.fragment,j),Yr=m(j),y(xe.$$.fragment,j),Zr=m(j),y(Ce.$$.fragment,j),ei=m(j),y(Fe.$$.fragment,j),ti=m(j),y(je.$$.fragment,j),j.forEach(o),J.forEach(o),Cn=m(t),le=a(t,"H2",{class:!0});var ea=s(le);Ee=a(ea,"A",{id:!0,class:!0,href:!0});var yd=s(Ee);Jo=a(yd,"SPAN",{});var Td=s(Jo);y(jt.$$.fragment,Td),Td.forEach(o),yd.forEach(o),oi=m(ea),Ko=a(ea,"SPAN",{});var wd=s(Ko);ni=d(wd,"PLBartForCausalLM"),wd.forEach(o),ea.forEach(o),Fn=m(t),ce=a(t,"DIV",{class:!0});var ta=s(ce);y(Et.$$.fragment,ta),ai=m(ta),Me=a(ta,"DIV",{class:!0});var oa=s(Me);y(Mt.$$.fragment,oa),si=m(oa),y(Se.$$.fragment,oa),oa.forEach(o),ta.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(Xd)),c(f,"id","plbart"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#plbart"),c(p,"class","relative group"),c(Ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(Ge,"rel","nofollow"),c(Re,"href","https://www.github.com/gchhablani"),c(Re,"rel","nofollow"),c(me,"id","overview-of-plbart"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#overview-of-plbart"),c(K,"class","relative group"),c(Ue,"href","https://arxiv.org/abs/2103.06333"),c(Ue,"rel","nofollow"),c(Ve,"href","https://huggingface.co/gchhablani"),c(Ve,"rel","nofollow"),c(Je,"href","https://github.com/wasiahmad/PLBART"),c(Je,"rel","nofollow"),c(fe,"id","training-of-plbart"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#training-of-plbart"),c(Q,"class","relative group"),c(Qe,"href","https://arxiv.org/abs/2103.06333"),c(Qe,"rel","nofollow"),c(Ye,"href","/docs/transformers/v4.19.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),c(It,"href","/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartTokenizer.as_target_tokenizer"),c(_e,"id","transformers.PLBartConfig"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#transformers.PLBartConfig"),c(Z,"class","relative group"),c(Wt,"href","/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartModel"),c(at,"href","https://huggingface.co/uclanlp/plbart-base"),c(at,"rel","nofollow"),c(Gt,"href","/docs/transformers/v4.19.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(Rt,"href","/docs/transformers/v4.19.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ve,"id","transformers.PLBartTokenizer"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#transformers.PLBartTokenizer"),c(oe,"class","relative group"),c(Ht,"href","/docs/transformers/v4.19.1/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Ut,"href","/docs/transformers/v4.19.1/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(it,"href","https://github.com/google/sentencepiece"),c(it,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.PLBartModel"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.PLBartModel"),c(ne,"class","relative group"),c(Vt,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel"),c(vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vt,"rel","nofollow"),c(Jt,"href","/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartModel"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.PLBartForConditionalGeneration"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.PLBartForConditionalGeneration"),c(se,"class","relative group"),c(Kt,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel"),c(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lt,"rel","nofollow"),c(Qt,"href","/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartForConditionalGeneration"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"id","transformers.PLBartForSequenceClassification"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#transformers.PLBartForSequenceClassification"),c(ie,"class","relative group"),c(Yt,"href","/docs/transformers/v4.19.1/en/main_classes/model#transformers.PreTrainedModel"),c(Ct,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ct,"rel","nofollow"),c(Zt,"href","/docs/transformers/v4.19.1/en/model_doc/plbart#transformers.PLBartForSequenceClassification"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"id","transformers.PLBartForCausalLM"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#transformers.PLBartForCausalLM"),c(le,"class","relative group"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,l),_(t,b,h),_(t,p,h),e(p,f),e(f,v),T(r,v,null),e(p,g),e(p,x),e(x,na),_(t,rn,h),_(t,D,h),e(D,co),e(co,aa),e(D,sa),e(D,Ge),e(Ge,ra),e(D,ia),e(D,Re),e(Re,da),e(D,la),_(t,dn,h),_(t,K,h),e(K,me),e(me,po),T(He,po,null),e(K,ca),e(K,ho),e(ho,pa),_(t,ln,h),_(t,G,h),e(G,ha),e(G,Ue),e(Ue,ua),e(G,ma),e(G,uo),e(uo,fa),e(G,ga),_(t,cn,h),_(t,Nt,h),e(Nt,_a),_(t,pn,h),_(t,Ot,h),e(Ot,mo),e(mo,ba),_(t,hn,h),_(t,R,h),e(R,va),e(R,Ve),e(Ve,ka),e(R,ya),e(R,Je),e(Je,Ta),e(R,wa),_(t,un,h),_(t,Q,h),e(Q,fe),e(fe,fo),T(Ke,fo,null),e(Q,Pa),e(Q,go),e(go,La),_(t,mn,h),_(t,C,h),e(C,$a),e(C,_o),e(_o,qa),e(C,za),e(C,bo),e(bo,Ba),e(C,xa),e(C,vo),e(vo,Ca),e(C,Fa),e(C,ko),e(ko,ja),e(C,Ea),_(t,fn,h),_(t,ge,h),e(ge,Ma),e(ge,Qe),e(Qe,Sa),e(ge,Aa),_(t,gn,h),_(t,H,h),e(H,Na),e(H,Ye),e(Ye,yo),e(yo,Oa),e(Ye,Ia),e(H,Da),e(H,It),e(It,Xa),e(H,Wa),_(t,_n,h),_(t,Dt,h),e(Dt,To),e(To,Ga),_(t,bn,h),T(Ze,t,h),_(t,vn,h),_(t,Xt,h),e(Xt,et),e(et,wo),e(wo,Ra),e(et,Ha),e(et,Y),e(Y,Ua),e(Y,Po),e(Po,Va),e(Y,Ja),e(Y,Lo),e(Lo,Ka),e(Y,Qa),_(t,kn,h),T(tt,t,h),_(t,yn,h),_(t,Z,h),e(Z,_e),e(_e,$o),T(ot,$o,null),e(Z,Ya),e(Z,qo),e(qo,Za),_(t,Tn,h),_(t,E,h),T(nt,E,null),e(E,es),e(E,ee),e(ee,ts),e(ee,Wt),e(Wt,os),e(ee,ns),e(ee,at),e(at,as),e(ee,ss),e(E,rs),e(E,te),e(te,is),e(te,Gt),e(Gt,ds),e(te,ls),e(te,Rt),e(Rt,cs),e(te,ps),e(E,hs),T(be,E,null),_(t,wn,h),_(t,oe,h),e(oe,ve),e(ve,zo),T(st,zo,null),e(oe,us),e(oe,Bo),e(Bo,ms),_(t,Pn,h),_(t,q,h),T(rt,q,null),e(q,fs),e(q,xo),e(xo,gs),e(q,_s),e(q,X),e(X,bs),e(X,Ht),e(Ht,vs),e(X,ks),e(X,Ut),e(Ut,ys),e(X,Ts),e(X,it),e(it,ws),e(X,Ps),e(q,Ls),e(q,dt),e(dt,$s),e(dt,Co),e(Co,qs),e(dt,zs),e(q,Bs),T(ke,q,null),e(q,xs),e(q,ye),T(lt,ye,null),e(ye,Cs),e(ye,Fo),e(Fo,Fs),e(q,js),e(q,A),T(ct,A,null),e(A,Es),e(A,pt),e(pt,Ms),e(pt,jo),e(jo,Ss),e(pt,As),e(A,Ns),e(A,ht),e(ht,ut),e(ut,Eo),e(Eo,Os),e(ut,Is),e(ut,Mo),e(Mo,Ds),e(ht,Xs),e(ht,mt),e(mt,So),e(So,Ws),e(mt,Gs),e(mt,Ao),e(Ao,Rs),e(A,Hs),e(A,No),e(No,Us),_(t,Ln,h),_(t,ne,h),e(ne,Te),e(Te,Oo),T(ft,Oo,null),e(ne,Vs),e(ne,Io),e(Io,Js),_(t,$n,h),_(t,M,h),T(gt,M,null),e(M,Ks),e(M,_t),e(_t,Qs),e(_t,Vt),e(Vt,Ys),e(_t,Zs),e(M,er),e(M,bt),e(bt,tr),e(bt,vt),e(vt,or),e(bt,nr),e(M,ar),e(M,N),T(kt,N,null),e(N,sr),e(N,ae),e(ae,rr),e(ae,Jt),e(Jt,ir),e(ae,dr),e(ae,Do),e(Do,lr),e(ae,cr),e(N,pr),T(we,N,null),e(N,hr),T(Pe,N,null),_(t,qn,h),_(t,se,h),e(se,Le),e(Le,Xo),T(yt,Xo,null),e(se,ur),e(se,Wo),e(Wo,mr),_(t,zn,h),_(t,S,h),T(Tt,S,null),e(S,fr),e(S,wt),e(wt,gr),e(wt,Kt),e(Kt,_r),e(wt,br),e(S,vr),e(S,Pt),e(Pt,kr),e(Pt,Lt),e(Lt,yr),e(Pt,Tr),e(S,wr),e(S,O),T($t,O,null),e(O,Pr),e(O,re),e(re,Lr),e(re,Qt),e(Qt,$r),e(re,qr),e(re,Go),e(Go,zr),e(re,Br),e(O,xr),T($e,O,null),e(O,Cr),T(qe,O,null),_(t,Bn,h),_(t,ie,h),e(ie,ze),e(ze,Ro),T(qt,Ro,null),e(ie,Fr),e(ie,Ho),e(Ho,jr),_(t,xn,h),_(t,B,h),T(zt,B,null),e(B,Er),e(B,Uo),e(Uo,Mr),e(B,Sr),e(B,Bt),e(Bt,Ar),e(Bt,Yt),e(Yt,Nr),e(Bt,Or),e(B,Ir),e(B,xt),e(xt,Dr),e(xt,Ct),e(Ct,Xr),e(xt,Wr),e(B,Gr),e(B,z),T(Ft,z,null),e(z,Rr),e(z,de),e(de,Hr),e(de,Zt),e(Zt,Ur),e(de,Vr),e(de,Vo),e(Vo,Jr),e(de,Kr),e(z,Qr),T(Be,z,null),e(z,Yr),T(xe,z,null),e(z,Zr),T(Ce,z,null),e(z,ei),T(Fe,z,null),e(z,ti),T(je,z,null),_(t,Cn,h),_(t,le,h),e(le,Ee),e(Ee,Jo),T(jt,Jo,null),e(le,oi),e(le,Ko),e(Ko,ni),_(t,Fn,h),_(t,ce,h),T(Et,ce,null),e(ce,ai),e(ce,Me),T(Mt,Me,null),e(Me,si),T(Se,Me,null),jn=!0},p(t,[h]){const St={};h&2&&(St.$$scope={dirty:h,ctx:t}),be.$set(St);const Qo={};h&2&&(Qo.$$scope={dirty:h,ctx:t}),ke.$set(Qo);const Yo={};h&2&&(Yo.$$scope={dirty:h,ctx:t}),we.$set(Yo);const Zo={};h&2&&(Zo.$$scope={dirty:h,ctx:t}),Pe.$set(Zo);const U={};h&2&&(U.$$scope={dirty:h,ctx:t}),$e.$set(U);const en={};h&2&&(en.$$scope={dirty:h,ctx:t}),qe.$set(en);const tn={};h&2&&(tn.$$scope={dirty:h,ctx:t}),Be.$set(tn);const on={};h&2&&(on.$$scope={dirty:h,ctx:t}),xe.$set(on);const At={};h&2&&(At.$$scope={dirty:h,ctx:t}),Ce.$set(At);const nn={};h&2&&(nn.$$scope={dirty:h,ctx:t}),Fe.$set(nn);const an={};h&2&&(an.$$scope={dirty:h,ctx:t}),je.$set(an);const sn={};h&2&&(sn.$$scope={dirty:h,ctx:t}),Se.$set(sn)},i(t){jn||(w(r.$$.fragment,t),w(He.$$.fragment,t),w(Ke.$$.fragment,t),w(Ze.$$.fragment,t),w(tt.$$.fragment,t),w(ot.$$.fragment,t),w(nt.$$.fragment,t),w(be.$$.fragment,t),w(st.$$.fragment,t),w(rt.$$.fragment,t),w(ke.$$.fragment,t),w(lt.$$.fragment,t),w(ct.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(kt.$$.fragment,t),w(we.$$.fragment,t),w(Pe.$$.fragment,t),w(yt.$$.fragment,t),w(Tt.$$.fragment,t),w($t.$$.fragment,t),w($e.$$.fragment,t),w(qe.$$.fragment,t),w(qt.$$.fragment,t),w(zt.$$.fragment,t),w(Ft.$$.fragment,t),w(Be.$$.fragment,t),w(xe.$$.fragment,t),w(Ce.$$.fragment,t),w(Fe.$$.fragment,t),w(je.$$.fragment,t),w(jt.$$.fragment,t),w(Et.$$.fragment,t),w(Mt.$$.fragment,t),w(Se.$$.fragment,t),jn=!0)},o(t){P(r.$$.fragment,t),P(He.$$.fragment,t),P(Ke.$$.fragment,t),P(Ze.$$.fragment,t),P(tt.$$.fragment,t),P(ot.$$.fragment,t),P(nt.$$.fragment,t),P(be.$$.fragment,t),P(st.$$.fragment,t),P(rt.$$.fragment,t),P(ke.$$.fragment,t),P(lt.$$.fragment,t),P(ct.$$.fragment,t),P(ft.$$.fragment,t),P(gt.$$.fragment,t),P(kt.$$.fragment,t),P(we.$$.fragment,t),P(Pe.$$.fragment,t),P(yt.$$.fragment,t),P(Tt.$$.fragment,t),P($t.$$.fragment,t),P($e.$$.fragment,t),P(qe.$$.fragment,t),P(qt.$$.fragment,t),P(zt.$$.fragment,t),P(Ft.$$.fragment,t),P(Be.$$.fragment,t),P(xe.$$.fragment,t),P(Ce.$$.fragment,t),P(Fe.$$.fragment,t),P(je.$$.fragment,t),P(jt.$$.fragment,t),P(Et.$$.fragment,t),P(Mt.$$.fragment,t),P(Se.$$.fragment,t),jn=!1},d(t){o(l),t&&o(b),t&&o(p),L(r),t&&o(rn),t&&o(D),t&&o(dn),t&&o(K),L(He),t&&o(ln),t&&o(G),t&&o(cn),t&&o(Nt),t&&o(pn),t&&o(Ot),t&&o(hn),t&&o(R),t&&o(un),t&&o(Q),L(Ke),t&&o(mn),t&&o(C),t&&o(fn),t&&o(ge),t&&o(gn),t&&o(H),t&&o(_n),t&&o(Dt),t&&o(bn),L(Ze,t),t&&o(vn),t&&o(Xt),t&&o(kn),L(tt,t),t&&o(yn),t&&o(Z),L(ot),t&&o(Tn),t&&o(E),L(nt),L(be),t&&o(wn),t&&o(oe),L(st),t&&o(Pn),t&&o(q),L(rt),L(ke),L(lt),L(ct),t&&o(Ln),t&&o(ne),L(ft),t&&o($n),t&&o(M),L(gt),L(kt),L(we),L(Pe),t&&o(qn),t&&o(se),L(yt),t&&o(zn),t&&o(S),L(Tt),L($t),L($e),L(qe),t&&o(Bn),t&&o(ie),L(qt),t&&o(xn),t&&o(B),L(zt),L(Ft),L(Be),L(xe),L(Ce),L(Fe),L(je),t&&o(Cn),t&&o(le),L(jt),t&&o(Fn),t&&o(ce),L(Et),L(Mt),L(Se)}}}const Xd={local:"plbart",sections:[{local:"overview-of-plbart",sections:[{local:"training-of-plbart",title:"Training of PLBart"}],title:"Overview of PLBart"},{local:"transformers.PLBartConfig",title:"PLBartConfig"},{local:"transformers.PLBartTokenizer",title:"PLBartTokenizer"},{local:"transformers.PLBartModel",title:"PLBartModel"},{local:"transformers.PLBartForConditionalGeneration",title:"PLBartForConditionalGeneration"},{local:"transformers.PLBartForSequenceClassification",title:"PLBartForSequenceClassification"},{local:"transformers.PLBartForCausalLM",title:"PLBartForCausalLM"}],title:"PLBart"};function Wd($){return zd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kd extends Pd{constructor(l){super();Ld(this,l,Wd,Dd,$d,{})}}export{Kd as default,Xd as metadata};
