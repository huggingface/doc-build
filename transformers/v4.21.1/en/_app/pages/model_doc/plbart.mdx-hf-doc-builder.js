import{S as Pd,i as Ld,s as $d,e as n,k as u,w as v,t as i,M as qd,c as s,d as o,m,a,x as y,h as d,b as c,G as e,g as _,y as T,q as w,o as P,B as L,v as zd,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as ii}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as G}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as pe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Bd($){let l,b,p,f,k;return f=new G({props:{code:`from transformers import PLBartModel, PLBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),b=i("Example:"),p=u(),v(f.$$.fragment)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Example:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),k=!0},p:ue,i(r){k||(w(f.$$.fragment,r),k=!0)},o(r){P(f.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function xd($){let l,b,p,f,k;return f=new G({props:{code:`from transformers import PLBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=n("p"),b=i("Examples:"),p=u(),v(f.$$.fragment)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Examples:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),k=!0},p:ue,i(r){k||(w(f.$$.fragment,r),k=!0)},o(r){P(f.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Cd($){let l,b,p,f,k;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),f=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(g,"CODE",{});var x=a(p);f=d(x,"Module"),x.forEach(o),k=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,f),e(l,k)},d(r){r&&o(l)}}}function Fd($){let l,b,p,f,k;return f=new G({props:{code:`from transformers import PLBartTokenizer, PLBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),b=i("Example:"),p=u(),v(f.$$.fragment)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Example:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),k=!0},p:ue,i(r){k||(w(f.$$.fragment,r),k=!0)},o(r){P(f.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function jd($){let l,b,p,f,k;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),f=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(g,"CODE",{});var x=a(p);f=d(x,"Module"),x.forEach(o),k=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,f),e(l,k)},d(r){r&&o(l)}}}function Ed($){let l,b,p,f,k;return f=new G({props:{code:`from transformers import PLBartTokenizer, PLBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;same&#x27;</span>, <span class="hljs-string">&#x27;first&#x27;</span>, <span class="hljs-string">&#x27;highest&#x27;</span>, <span class="hljs-string">&#x27;result&#x27;</span>, <span class="hljs-string">&#x27;Fib&#x27;</span>]`}}),{c(){l=n("p"),b=i("Mask-filling example:"),p=u(),v(f.$$.fragment)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Mask-filling example:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),k=!0},p:ue,i(r){k||(w(f.$$.fragment,r),k=!0)},o(r){P(f.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Md($){let l,b,p,f,k;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),f=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(g,"CODE",{});var x=a(p);f=d(x,"Module"),x.forEach(o),k=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,f),e(l,k)},d(r){r&&o(l)}}}function Sd($){let l,b,p,f,k;return f=new G({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),b=i("Example of single-label classification:"),p=u(),v(f.$$.fragment)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Example of single-label classification:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),k=!0},p:ue,i(r){k||(w(f.$$.fragment,r),k=!0)},o(r){P(f.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Ad($){let l,b;return l=new G({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(p){y(l.$$.fragment,p)},m(p,f){T(l,p,f),b=!0},p:ue,i(p){b||(w(l.$$.fragment,p),b=!0)},o(p){P(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function Nd($){let l,b,p,f,k;return f=new G({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),b=i("Example of multi-label classification:"),p=u(),v(f.$$.fragment)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Example of multi-label classification:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),k=!0},p:ue,i(r){k||(w(f.$$.fragment,r),k=!0)},o(r){P(f.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Od($){let l,b;return l=new G({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(p){y(l.$$.fragment,p)},m(p,f){T(l,p,f),b=!0},p:ue,i(p){b||(w(l.$$.fragment,p),b=!0)},o(p){P(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function Id($){let l,b,p,f,k;return f=new G({props:{code:`from transformers import PLBartTokenizer, PLBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=n("p"),b=i("Example:"),p=u(),v(f.$$.fragment)},l(r){l=s(r,"P",{});var g=a(l);b=d(g,"Example:"),g.forEach(o),p=m(r),y(f.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(f,r,g),k=!0},p:ue,i(r){k||(w(f.$$.fragment,r),k=!0)},o(r){P(f.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(f,r)}}}function Dd($){let l,b,p,f,k,r,g,x,ns,rn,D,co,ss,as,Re,rs,is,We,ds,ls,dn,K,me,po,He,cs,ho,ps,ln,R,hs,Ue,us,ms,uo,fs,gs,cn,Nt,_s,pn,Ot,mo,bs,hn,W,ks,Ve,vs,ys,Je,Ts,ws,un,Q,fe,fo,Ke,Ps,go,Ls,mn,C,$s,_o,qs,zs,bo,Bs,xs,ko,Cs,Fs,vo,js,Es,fn,ge,Ms,Qe,Ss,As,gn,H,Ns,Ye,yo,Os,Is,Ds,It,Xs,Gs,_n,Dt,To,Rs,bn,Ze,kn,Xt,et,wo,Ws,Hs,Y,Us,Po,Vs,Js,Lo,Ks,Qs,vn,tt,yn,Z,_e,$o,ot,Ys,qo,Zs,Tn,E,nt,ea,ee,ta,Gt,oa,na,st,sa,aa,ra,te,ia,Rt,da,la,Wt,ca,pa,ha,be,wn,oe,ke,zo,at,ua,Bo,ma,Pn,q,rt,fa,xo,ga,_a,X,ba,Ht,ka,va,Ut,ya,Ta,it,wa,Pa,La,dt,$a,Co,qa,za,Ba,ve,xa,ye,lt,Ca,Fo,Fa,ja,A,ct,Ea,pt,Ma,jo,Sa,Aa,Na,ht,ut,Eo,Oa,Ia,Mo,Da,Xa,mt,So,Ga,Ra,Ao,Wa,Ha,No,Ua,Ln,ne,Te,Oo,ft,Va,Io,Ja,$n,M,gt,Ka,_t,Qa,Vt,Ya,Za,er,bt,tr,kt,or,nr,sr,N,vt,ar,se,rr,Jt,ir,dr,Do,lr,cr,pr,we,hr,Pe,qn,ae,Le,Xo,yt,ur,Go,mr,zn,S,Tt,fr,wt,gr,Kt,_r,br,kr,Pt,vr,Lt,yr,Tr,wr,O,$t,Pr,re,Lr,Qt,$r,qr,Ro,zr,Br,xr,$e,Cr,qe,Bn,ie,ze,Wo,qt,Fr,Ho,jr,xn,B,zt,Er,Uo,Mr,Sr,Bt,Ar,Yt,Nr,Or,Ir,xt,Dr,Ct,Xr,Gr,Rr,z,Ft,Wr,de,Hr,Zt,Ur,Vr,Vo,Jr,Kr,Qr,Be,Yr,xe,Zr,Ce,ei,Fe,ti,je,Cn,le,Ee,Jo,jt,oi,Ko,ni,Fn,ce,Et,si,Me,Mt,ai,Se,jn;return r=new pe({}),He=new pe({}),Ke=new pe({}),Ze=new G({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),tt=new G({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

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
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartModel">PLBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.PLBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/configuration_plbart.py#L32"}}),be=new he({props:{anchor:"transformers.PLBartConfig.example",$$slots:{default:[Bd]},$$scope:{ctx:$}}}),at=new pe({}),rt=new I({props:{name:"class transformers.PLBartTokenizer",anchor:"transformers.PLBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"language_codes",val:" = 'base'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/tokenization_plbart.py#L97"}}),ve=new he({props:{anchor:"transformers.PLBartTokenizer.example",$$slots:{default:[xd]},$$scope:{ctx:$}}}),lt=new I({props:{name:"as_target_tokenizer",anchor:"transformers.PLBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/tokenization_plbart.py#L444"}}),ct=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/tokenization_plbart.py#L324",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ft=new pe({}),gt=new I({props:{name:"class transformers.PLBartModel",anchor:"transformers.PLBartModel",parameters:[{name:"config",val:": PLBartConfig"}],parametersDescription:[{anchor:"transformers.PLBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/modeling_plbart.py#L1118"}}),vt=new I({props:{name:"forward",anchor:"transformers.PLBartModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/modeling_plbart.py#L1144",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),we=new ii({props:{$$slots:{default:[Cd]},$$scope:{ctx:$}}}),Pe=new he({props:{anchor:"transformers.PLBartModel.forward.example",$$slots:{default:[Fd]},$$scope:{ctx:$}}}),yt=new pe({}),Tt=new I({props:{name:"class transformers.PLBartForConditionalGeneration",anchor:"transformers.PLBartForConditionalGeneration",parameters:[{name:"config",val:": PLBartConfig"}],parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/modeling_plbart.py#L1234"}}),$t=new I({props:{name:"forward",anchor:"transformers.PLBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/modeling_plbart.py#L1277",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new ii({props:{$$slots:{default:[jd]},$$scope:{ctx:$}}}),qe=new he({props:{anchor:"transformers.PLBartForConditionalGeneration.forward.example",$$slots:{default:[Ed]},$$scope:{ctx:$}}}),qt=new pe({}),zt=new I({props:{name:"class transformers.PLBartForSequenceClassification",anchor:"transformers.PLBartForSequenceClassification",parameters:[{name:"config",val:": PLBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/modeling_plbart.py#L1403"}}),Ft=new I({props:{name:"forward",anchor:"transformers.PLBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/modeling_plbart.py#L1416",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new ii({props:{$$slots:{default:[Md]},$$scope:{ctx:$}}}),xe=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example",$$slots:{default:[Sd]},$$scope:{ctx:$}}}),Ce=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-2",$$slots:{default:[Ad]},$$scope:{ctx:$}}}),Fe=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-3",$$slots:{default:[Nd]},$$scope:{ctx:$}}}),je=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-4",$$slots:{default:[Od]},$$scope:{ctx:$}}}),jt=new pe({}),Et=new I({props:{name:"class transformers.PLBartForCausalLM",anchor:"transformers.PLBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/modeling_plbart.py#L1540"}}),Mt=new I({props:{name:"forward",anchor:"transformers.PLBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/plbart/modeling_plbart.py#L1571",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new he({props:{anchor:"transformers.PLBartForCausalLM.forward.example",$$slots:{default:[Id]},$$scope:{ctx:$}}}),{c(){l=n("meta"),b=u(),p=n("h1"),f=n("a"),k=n("span"),v(r.$$.fragment),g=u(),x=n("span"),ns=i("PLBart"),rn=u(),D=n("p"),co=n("strong"),ss=i("DISCLAIMER:"),as=i(" If you see something strange, file a "),Re=n("a"),rs=i("Github Issue"),is=i(` and assign
`),We=n("a"),ds=i("@gchhablani"),ls=i("."),dn=u(),K=n("h2"),me=n("a"),po=n("span"),v(He.$$.fragment),cs=u(),ho=n("span"),ps=i("Overview of PLBart"),ln=u(),R=n("p"),hs=i("The PLBART model was proposed in "),Ue=n("a"),us=i("Unified Pre-training for Program Understanding and Generation"),ms=i(` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),uo=n("code"),fs=i("plbart-base"),gs=i(` has been trained using multilingual denoising task
on Java, Python and English.`),cn=u(),Nt=n("p"),_s=i("According to the abstract"),pn=u(),Ot=n("p"),mo=n("em"),bs=i(`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),hn=u(),W=n("p"),ks=i("This model was contributed by "),Ve=n("a"),vs=i("gchhablani"),ys=i(". The Authors\u2019 code can be found "),Je=n("a"),Ts=i("here"),ws=i("."),un=u(),Q=n("h3"),fe=n("a"),fo=n("span"),v(Ke.$$.fragment),Ps=u(),go=n("span"),Ls=i("Training of PLBart"),mn=u(),C=n("p"),$s=i(`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),_o=n("code"),qs=i("X [eos, src_lang_code]"),zs=i(" where "),bo=n("code"),Bs=i("X"),xs=i(` is the source text. The
target text format is `),ko=n("code"),Cs=i("[tgt_lang_code] X [eos]"),Fs=i(". "),vo=n("code"),js=i("bos"),Es=i(" is never used."),fn=u(),ge=n("p"),Ms=i("However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Qe=n("a"),Ss=i("the paper"),As=i(" to learn more about this."),gn=u(),H=n("p"),Ns=i("In cases where the language code is needed, The regular "),Ye=n("a"),yo=n("strong"),Os=i("call"),Is=i("()"),Ds=i(` will encode source text format, and it should be wrapped
inside the context manager `),It=n("a"),Xs=i("as_target_tokenizer()"),Gs=i(" to encode target text format."),_n=u(),Dt=n("ul"),To=n("li"),Rs=i("Supervised training"),bn=u(),v(Ze.$$.fragment),kn=u(),Xt=n("ul"),et=n("li"),wo=n("p"),Ws=i("Generation"),Hs=u(),Y=n("p"),Us=i("While generating the target text set the "),Po=n("code"),Vs=i("decoder_start_token_id"),Js=i(` to the target language id. The following
example shows how to translate Python to English using the `),Lo=n("code"),Ks=i("uclanlp/plbart-python-en_XX"),Qs=i(" model."),vn=u(),v(tt.$$.fragment),yn=u(),Z=n("h2"),_e=n("a"),$o=n("span"),v(ot.$$.fragment),Ys=u(),qo=n("span"),Zs=i("PLBartConfig"),Tn=u(),E=n("div"),v(nt.$$.fragment),ea=u(),ee=n("p"),ta=i("This is the configuration class to store the configuration of a "),Gt=n("a"),oa=i("PLBartModel"),na=i(`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),st=n("a"),sa=i("uclanlp/plbart-base"),aa=i(" architecture."),ra=u(),te=n("p"),ia=i("Configuration objects inherit from "),Rt=n("a"),da=i("PretrainedConfig"),la=i(` and can be used to control the model outputs. Read the
documentation from `),Wt=n("a"),ca=i("PretrainedConfig"),pa=i(" for more information."),ha=u(),v(be.$$.fragment),wn=u(),oe=n("h2"),ke=n("a"),zo=n("span"),v(at.$$.fragment),ua=u(),Bo=n("span"),ma=i("PLBartTokenizer"),Pn=u(),q=n("div"),v(rt.$$.fragment),fa=u(),xo=n("p"),ga=i("Construct an PLBART tokenizer."),_a=u(),X=n("p"),ba=i("Adapted from "),Ht=n("a"),ka=i("RobertaTokenizer"),va=i(" and "),Ut=n("a"),ya=i("XLNetTokenizer"),Ta=i(`. Based on
`),it=n("a"),wa=i("SentencePiece"),Pa=i("."),La=u(),dt=n("p"),$a=i("The tokenization method is "),Co=n("code"),qa=i("<tokens> <eos> <language code>"),za=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Ba=u(),v(ve.$$.fragment),xa=u(),ye=n("div"),v(lt.$$.fragment),Ca=u(),Fo=n("p"),Fa=i(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),ja=u(),A=n("div"),v(ct.$$.fragment),Ea=u(),pt=n("p"),Ma=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),jo=n("code"),Sa=i("X"),Aa=i(" represents the sequence:"),Na=u(),ht=n("ul"),ut=n("li"),Eo=n("code"),Oa=i("input_ids"),Ia=i(" (for encoder) "),Mo=n("code"),Da=i("X [eos, src_lang_code]"),Xa=u(),mt=n("li"),So=n("code"),Ga=i("decoder_input_ids"),Ra=i(": (for decoder) "),Ao=n("code"),Wa=i("X [eos, tgt_lang_code]"),Ha=u(),No=n("p"),Ua=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ln=u(),ne=n("h2"),Te=n("a"),Oo=n("span"),v(ft.$$.fragment),Va=u(),Io=n("span"),Ja=i("PLBartModel"),$n=u(),M=n("div"),v(gt.$$.fragment),Ka=u(),_t=n("p"),Qa=i(`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Vt=n("a"),Ya=i("PreTrainedModel"),Za=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),er=u(),bt=n("p"),tr=i("This model is also a PyTorch "),kt=n("a"),or=i("torch.nn.Module"),nr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sr=u(),N=n("div"),v(vt.$$.fragment),ar=u(),se=n("p"),rr=i("The "),Jt=n("a"),ir=i("PLBartModel"),dr=i(" forward method, overrides the "),Do=n("code"),lr=i("__call__"),cr=i(" special method."),pr=u(),v(we.$$.fragment),hr=u(),v(Pe.$$.fragment),qn=u(),ae=n("h2"),Le=n("a"),Xo=n("span"),v(yt.$$.fragment),ur=u(),Go=n("span"),mr=i("PLBartForConditionalGeneration"),zn=u(),S=n("div"),v(Tt.$$.fragment),fr=u(),wt=n("p"),gr=i(`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Kt=n("a"),_r=i("PreTrainedModel"),br=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kr=u(),Pt=n("p"),vr=i("This model is also a PyTorch "),Lt=n("a"),yr=i("torch.nn.Module"),Tr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wr=u(),O=n("div"),v($t.$$.fragment),Pr=u(),re=n("p"),Lr=i("The "),Qt=n("a"),$r=i("PLBartForConditionalGeneration"),qr=i(" forward method, overrides the "),Ro=n("code"),zr=i("__call__"),Br=i(" special method."),xr=u(),v($e.$$.fragment),Cr=u(),v(qe.$$.fragment),Bn=u(),ie=n("h2"),ze=n("a"),Wo=n("span"),v(qt.$$.fragment),Fr=u(),Ho=n("span"),jr=i("PLBartForSequenceClassification"),xn=u(),B=n("div"),v(zt.$$.fragment),Er=u(),Uo=n("p"),Mr=i(`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Sr=u(),Bt=n("p"),Ar=i("This model inherits from "),Yt=n("a"),Nr=i("PreTrainedModel"),Or=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir=u(),xt=n("p"),Dr=i("This model is also a PyTorch "),Ct=n("a"),Xr=i("torch.nn.Module"),Gr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr=u(),z=n("div"),v(Ft.$$.fragment),Wr=u(),de=n("p"),Hr=i("The "),Zt=n("a"),Ur=i("PLBartForSequenceClassification"),Vr=i(" forward method, overrides the "),Vo=n("code"),Jr=i("__call__"),Kr=i(" special method."),Qr=u(),v(Be.$$.fragment),Yr=u(),v(xe.$$.fragment),Zr=u(),v(Ce.$$.fragment),ei=u(),v(Fe.$$.fragment),ti=u(),v(je.$$.fragment),Cn=u(),le=n("h2"),Ee=n("a"),Jo=n("span"),v(jt.$$.fragment),oi=u(),Ko=n("span"),ni=i("PLBartForCausalLM"),Fn=u(),ce=n("div"),v(Et.$$.fragment),si=u(),Me=n("div"),v(Mt.$$.fragment),ai=u(),v(Se.$$.fragment),this.h()},l(t){const h=qd('[data-svelte="svelte-1phssyn"]',document.head);l=s(h,"META",{name:!0,content:!0}),h.forEach(o),b=m(t),p=s(t,"H1",{class:!0});var St=a(p);f=s(St,"A",{id:!0,class:!0,href:!0});var Qo=a(f);k=s(Qo,"SPAN",{});var Yo=a(k);y(r.$$.fragment,Yo),Yo.forEach(o),Qo.forEach(o),g=m(St),x=s(St,"SPAN",{});var Zo=a(x);ns=d(Zo,"PLBart"),Zo.forEach(o),St.forEach(o),rn=m(t),D=s(t,"P",{});var U=a(D);co=s(U,"STRONG",{});var en=a(co);ss=d(en,"DISCLAIMER:"),en.forEach(o),as=d(U," If you see something strange, file a "),Re=s(U,"A",{href:!0,rel:!0});var tn=a(Re);rs=d(tn,"Github Issue"),tn.forEach(o),is=d(U,` and assign
`),We=s(U,"A",{href:!0,rel:!0});var on=a(We);ds=d(on,"@gchhablani"),on.forEach(o),ls=d(U,"."),U.forEach(o),dn=m(t),K=s(t,"H2",{class:!0});var At=a(K);me=s(At,"A",{id:!0,class:!0,href:!0});var nn=a(me);po=s(nn,"SPAN",{});var sn=a(po);y(He.$$.fragment,sn),sn.forEach(o),nn.forEach(o),cs=m(At),ho=s(At,"SPAN",{});var an=a(ho);ps=d(an,"Overview of PLBart"),an.forEach(o),At.forEach(o),ln=m(t),R=s(t,"P",{});var eo=a(R);hs=d(eo,"The PLBART model was proposed in "),Ue=s(eo,"A",{href:!0,rel:!0});var di=a(Ue);us=d(di,"Unified Pre-training for Program Understanding and Generation"),di.forEach(o),ms=d(eo,` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),uo=s(eo,"CODE",{});var li=a(uo);fs=d(li,"plbart-base"),li.forEach(o),gs=d(eo,` has been trained using multilingual denoising task
on Java, Python and English.`),eo.forEach(o),cn=m(t),Nt=s(t,"P",{});var ci=a(Nt);_s=d(ci,"According to the abstract"),ci.forEach(o),pn=m(t),Ot=s(t,"P",{});var pi=a(Ot);mo=s(pi,"EM",{});var hi=a(mo);bs=d(hi,`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),hi.forEach(o),pi.forEach(o),hn=m(t),W=s(t,"P",{});var to=a(W);ks=d(to,"This model was contributed by "),Ve=s(to,"A",{href:!0,rel:!0});var ui=a(Ve);vs=d(ui,"gchhablani"),ui.forEach(o),ys=d(to,". The Authors\u2019 code can be found "),Je=s(to,"A",{href:!0,rel:!0});var mi=a(Je);Ts=d(mi,"here"),mi.forEach(o),ws=d(to,"."),to.forEach(o),un=m(t),Q=s(t,"H3",{class:!0});var En=a(Q);fe=s(En,"A",{id:!0,class:!0,href:!0});var fi=a(fe);fo=s(fi,"SPAN",{});var gi=a(fo);y(Ke.$$.fragment,gi),gi.forEach(o),fi.forEach(o),Ps=m(En),go=s(En,"SPAN",{});var _i=a(go);Ls=d(_i,"Training of PLBart"),_i.forEach(o),En.forEach(o),mn=m(t),C=s(t,"P",{});var V=a(C);$s=d(V,`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),_o=s(V,"CODE",{});var bi=a(_o);qs=d(bi,"X [eos, src_lang_code]"),bi.forEach(o),zs=d(V," where "),bo=s(V,"CODE",{});var ki=a(bo);Bs=d(ki,"X"),ki.forEach(o),xs=d(V,` is the source text. The
target text format is `),ko=s(V,"CODE",{});var vi=a(ko);Cs=d(vi,"[tgt_lang_code] X [eos]"),vi.forEach(o),Fs=d(V,". "),vo=s(V,"CODE",{});var yi=a(vo);js=d(yi,"bos"),yi.forEach(o),Es=d(V," is never used."),V.forEach(o),fn=m(t),ge=s(t,"P",{});var Mn=a(ge);Ms=d(Mn,"However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Qe=s(Mn,"A",{href:!0,rel:!0});var Ti=a(Qe);Ss=d(Ti,"the paper"),Ti.forEach(o),As=d(Mn," to learn more about this."),Mn.forEach(o),gn=m(t),H=s(t,"P",{});var oo=a(H);Ns=d(oo,"In cases where the language code is needed, The regular "),Ye=s(oo,"A",{href:!0});var ri=a(Ye);yo=s(ri,"STRONG",{});var wi=a(yo);Os=d(wi,"call"),wi.forEach(o),Is=d(ri,"()"),ri.forEach(o),Ds=d(oo,` will encode source text format, and it should be wrapped
inside the context manager `),It=s(oo,"A",{href:!0});var Pi=a(It);Xs=d(Pi,"as_target_tokenizer()"),Pi.forEach(o),Gs=d(oo," to encode target text format."),oo.forEach(o),_n=m(t),Dt=s(t,"UL",{});var Li=a(Dt);To=s(Li,"LI",{});var $i=a(To);Rs=d($i,"Supervised training"),$i.forEach(o),Li.forEach(o),bn=m(t),y(Ze.$$.fragment,t),kn=m(t),Xt=s(t,"UL",{});var qi=a(Xt);et=s(qi,"LI",{});var Sn=a(et);wo=s(Sn,"P",{});var zi=a(wo);Ws=d(zi,"Generation"),zi.forEach(o),Hs=m(Sn),Y=s(Sn,"P",{});var no=a(Y);Us=d(no,"While generating the target text set the "),Po=s(no,"CODE",{});var Bi=a(Po);Vs=d(Bi,"decoder_start_token_id"),Bi.forEach(o),Js=d(no,` to the target language id. The following
example shows how to translate Python to English using the `),Lo=s(no,"CODE",{});var xi=a(Lo);Ks=d(xi,"uclanlp/plbart-python-en_XX"),xi.forEach(o),Qs=d(no," model."),no.forEach(o),Sn.forEach(o),qi.forEach(o),vn=m(t),y(tt.$$.fragment,t),yn=m(t),Z=s(t,"H2",{class:!0});var An=a(Z);_e=s(An,"A",{id:!0,class:!0,href:!0});var Ci=a(_e);$o=s(Ci,"SPAN",{});var Fi=a($o);y(ot.$$.fragment,Fi),Fi.forEach(o),Ci.forEach(o),Ys=m(An),qo=s(An,"SPAN",{});var ji=a(qo);Zs=d(ji,"PLBartConfig"),ji.forEach(o),An.forEach(o),Tn=m(t),E=s(t,"DIV",{class:!0});var Ae=a(E);y(nt.$$.fragment,Ae),ea=m(Ae),ee=s(Ae,"P",{});var so=a(ee);ta=d(so,"This is the configuration class to store the configuration of a "),Gt=s(so,"A",{href:!0});var Ei=a(Gt);oa=d(Ei,"PLBartModel"),Ei.forEach(o),na=d(so,`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),st=s(so,"A",{href:!0,rel:!0});var Mi=a(st);sa=d(Mi,"uclanlp/plbart-base"),Mi.forEach(o),aa=d(so," architecture."),so.forEach(o),ra=m(Ae),te=s(Ae,"P",{});var ao=a(te);ia=d(ao,"Configuration objects inherit from "),Rt=s(ao,"A",{href:!0});var Si=a(Rt);da=d(Si,"PretrainedConfig"),Si.forEach(o),la=d(ao,` and can be used to control the model outputs. Read the
documentation from `),Wt=s(ao,"A",{href:!0});var Ai=a(Wt);ca=d(Ai,"PretrainedConfig"),Ai.forEach(o),pa=d(ao," for more information."),ao.forEach(o),ha=m(Ae),y(be.$$.fragment,Ae),Ae.forEach(o),wn=m(t),oe=s(t,"H2",{class:!0});var Nn=a(oe);ke=s(Nn,"A",{id:!0,class:!0,href:!0});var Ni=a(ke);zo=s(Ni,"SPAN",{});var Oi=a(zo);y(at.$$.fragment,Oi),Oi.forEach(o),Ni.forEach(o),ua=m(Nn),Bo=s(Nn,"SPAN",{});var Ii=a(Bo);ma=d(Ii,"PLBartTokenizer"),Ii.forEach(o),Nn.forEach(o),Pn=m(t),q=s(t,"DIV",{class:!0});var F=a(q);y(rt.$$.fragment,F),fa=m(F),xo=s(F,"P",{});var Di=a(xo);ga=d(Di,"Construct an PLBART tokenizer."),Di.forEach(o),_a=m(F),X=s(F,"P",{});var Ne=a(X);ba=d(Ne,"Adapted from "),Ht=s(Ne,"A",{href:!0});var Xi=a(Ht);ka=d(Xi,"RobertaTokenizer"),Xi.forEach(o),va=d(Ne," and "),Ut=s(Ne,"A",{href:!0});var Gi=a(Ut);ya=d(Gi,"XLNetTokenizer"),Gi.forEach(o),Ta=d(Ne,`. Based on
`),it=s(Ne,"A",{href:!0,rel:!0});var Ri=a(it);wa=d(Ri,"SentencePiece"),Ri.forEach(o),Pa=d(Ne,"."),Ne.forEach(o),La=m(F),dt=s(F,"P",{});var On=a(dt);$a=d(On,"The tokenization method is "),Co=s(On,"CODE",{});var Wi=a(Co);qa=d(Wi,"<tokens> <eos> <language code>"),Wi.forEach(o),za=d(On," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),On.forEach(o),Ba=m(F),y(ve.$$.fragment,F),xa=m(F),ye=s(F,"DIV",{class:!0});var In=a(ye);y(lt.$$.fragment,In),Ca=m(In),Fo=s(In,"P",{});var Hi=a(Fo);Fa=d(Hi,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Hi.forEach(o),In.forEach(o),ja=m(F),A=s(F,"DIV",{class:!0});var Oe=a(A);y(ct.$$.fragment,Oe),Ea=m(Oe),pt=s(Oe,"P",{});var Dn=a(pt);Ma=d(Dn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),jo=s(Dn,"CODE",{});var Ui=a(jo);Sa=d(Ui,"X"),Ui.forEach(o),Aa=d(Dn," represents the sequence:"),Dn.forEach(o),Na=m(Oe),ht=s(Oe,"UL",{});var Xn=a(ht);ut=s(Xn,"LI",{});var Gn=a(ut);Eo=s(Gn,"CODE",{});var Vi=a(Eo);Oa=d(Vi,"input_ids"),Vi.forEach(o),Ia=d(Gn," (for encoder) "),Mo=s(Gn,"CODE",{});var Ji=a(Mo);Da=d(Ji,"X [eos, src_lang_code]"),Ji.forEach(o),Gn.forEach(o),Xa=m(Xn),mt=s(Xn,"LI",{});var Rn=a(mt);So=s(Rn,"CODE",{});var Ki=a(So);Ga=d(Ki,"decoder_input_ids"),Ki.forEach(o),Ra=d(Rn,": (for decoder) "),Ao=s(Rn,"CODE",{});var Qi=a(Ao);Wa=d(Qi,"X [eos, tgt_lang_code]"),Qi.forEach(o),Rn.forEach(o),Xn.forEach(o),Ha=m(Oe),No=s(Oe,"P",{});var Yi=a(No);Ua=d(Yi,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Yi.forEach(o),Oe.forEach(o),F.forEach(o),Ln=m(t),ne=s(t,"H2",{class:!0});var Wn=a(ne);Te=s(Wn,"A",{id:!0,class:!0,href:!0});var Zi=a(Te);Oo=s(Zi,"SPAN",{});var ed=a(Oo);y(ft.$$.fragment,ed),ed.forEach(o),Zi.forEach(o),Va=m(Wn),Io=s(Wn,"SPAN",{});var td=a(Io);Ja=d(td,"PLBartModel"),td.forEach(o),Wn.forEach(o),$n=m(t),M=s(t,"DIV",{class:!0});var Ie=a(M);y(gt.$$.fragment,Ie),Ka=m(Ie),_t=s(Ie,"P",{});var Hn=a(_t);Qa=d(Hn,`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Vt=s(Hn,"A",{href:!0});var od=a(Vt);Ya=d(od,"PreTrainedModel"),od.forEach(o),Za=d(Hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn.forEach(o),er=m(Ie),bt=s(Ie,"P",{});var Un=a(bt);tr=d(Un,"This model is also a PyTorch "),kt=s(Un,"A",{href:!0,rel:!0});var nd=a(kt);or=d(nd,"torch.nn.Module"),nd.forEach(o),nr=d(Un,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Un.forEach(o),sr=m(Ie),N=s(Ie,"DIV",{class:!0});var De=a(N);y(vt.$$.fragment,De),ar=m(De),se=s(De,"P",{});var ro=a(se);rr=d(ro,"The "),Jt=s(ro,"A",{href:!0});var sd=a(Jt);ir=d(sd,"PLBartModel"),sd.forEach(o),dr=d(ro," forward method, overrides the "),Do=s(ro,"CODE",{});var ad=a(Do);lr=d(ad,"__call__"),ad.forEach(o),cr=d(ro," special method."),ro.forEach(o),pr=m(De),y(we.$$.fragment,De),hr=m(De),y(Pe.$$.fragment,De),De.forEach(o),Ie.forEach(o),qn=m(t),ae=s(t,"H2",{class:!0});var Vn=a(ae);Le=s(Vn,"A",{id:!0,class:!0,href:!0});var rd=a(Le);Xo=s(rd,"SPAN",{});var id=a(Xo);y(yt.$$.fragment,id),id.forEach(o),rd.forEach(o),ur=m(Vn),Go=s(Vn,"SPAN",{});var dd=a(Go);mr=d(dd,"PLBartForConditionalGeneration"),dd.forEach(o),Vn.forEach(o),zn=m(t),S=s(t,"DIV",{class:!0});var Xe=a(S);y(Tt.$$.fragment,Xe),fr=m(Xe),wt=s(Xe,"P",{});var Jn=a(wt);gr=d(Jn,`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Kt=s(Jn,"A",{href:!0});var ld=a(Kt);_r=d(ld,"PreTrainedModel"),ld.forEach(o),br=d(Jn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jn.forEach(o),kr=m(Xe),Pt=s(Xe,"P",{});var Kn=a(Pt);vr=d(Kn,"This model is also a PyTorch "),Lt=s(Kn,"A",{href:!0,rel:!0});var cd=a(Lt);yr=d(cd,"torch.nn.Module"),cd.forEach(o),Tr=d(Kn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kn.forEach(o),wr=m(Xe),O=s(Xe,"DIV",{class:!0});var Ge=a(O);y($t.$$.fragment,Ge),Pr=m(Ge),re=s(Ge,"P",{});var io=a(re);Lr=d(io,"The "),Qt=s(io,"A",{href:!0});var pd=a(Qt);$r=d(pd,"PLBartForConditionalGeneration"),pd.forEach(o),qr=d(io," forward method, overrides the "),Ro=s(io,"CODE",{});var hd=a(Ro);zr=d(hd,"__call__"),hd.forEach(o),Br=d(io," special method."),io.forEach(o),xr=m(Ge),y($e.$$.fragment,Ge),Cr=m(Ge),y(qe.$$.fragment,Ge),Ge.forEach(o),Xe.forEach(o),Bn=m(t),ie=s(t,"H2",{class:!0});var Qn=a(ie);ze=s(Qn,"A",{id:!0,class:!0,href:!0});var ud=a(ze);Wo=s(ud,"SPAN",{});var md=a(Wo);y(qt.$$.fragment,md),md.forEach(o),ud.forEach(o),Fr=m(Qn),Ho=s(Qn,"SPAN",{});var fd=a(Ho);jr=d(fd,"PLBartForSequenceClassification"),fd.forEach(o),Qn.forEach(o),xn=m(t),B=s(t,"DIV",{class:!0});var J=a(B);y(zt.$$.fragment,J),Er=m(J),Uo=s(J,"P",{});var gd=a(Uo);Mr=d(gd,`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),gd.forEach(o),Sr=m(J),Bt=s(J,"P",{});var Yn=a(Bt);Ar=d(Yn,"This model inherits from "),Yt=s(Yn,"A",{href:!0});var _d=a(Yt);Nr=d(_d,"PreTrainedModel"),_d.forEach(o),Or=d(Yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yn.forEach(o),Ir=m(J),xt=s(J,"P",{});var Zn=a(xt);Dr=d(Zn,"This model is also a PyTorch "),Ct=s(Zn,"A",{href:!0,rel:!0});var bd=a(Ct);Xr=d(bd,"torch.nn.Module"),bd.forEach(o),Gr=d(Zn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zn.forEach(o),Rr=m(J),z=s(J,"DIV",{class:!0});var j=a(z);y(Ft.$$.fragment,j),Wr=m(j),de=s(j,"P",{});var lo=a(de);Hr=d(lo,"The "),Zt=s(lo,"A",{href:!0});var kd=a(Zt);Ur=d(kd,"PLBartForSequenceClassification"),kd.forEach(o),Vr=d(lo," forward method, overrides the "),Vo=s(lo,"CODE",{});var vd=a(Vo);Jr=d(vd,"__call__"),vd.forEach(o),Kr=d(lo," special method."),lo.forEach(o),Qr=m(j),y(Be.$$.fragment,j),Yr=m(j),y(xe.$$.fragment,j),Zr=m(j),y(Ce.$$.fragment,j),ei=m(j),y(Fe.$$.fragment,j),ti=m(j),y(je.$$.fragment,j),j.forEach(o),J.forEach(o),Cn=m(t),le=s(t,"H2",{class:!0});var es=a(le);Ee=s(es,"A",{id:!0,class:!0,href:!0});var yd=a(Ee);Jo=s(yd,"SPAN",{});var Td=a(Jo);y(jt.$$.fragment,Td),Td.forEach(o),yd.forEach(o),oi=m(es),Ko=s(es,"SPAN",{});var wd=a(Ko);ni=d(wd,"PLBartForCausalLM"),wd.forEach(o),es.forEach(o),Fn=m(t),ce=s(t,"DIV",{class:!0});var ts=a(ce);y(Et.$$.fragment,ts),si=m(ts),Me=s(ts,"DIV",{class:!0});var os=a(Me);y(Mt.$$.fragment,os),ai=m(os),y(Se.$$.fragment,os),os.forEach(o),ts.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(Xd)),c(f,"id","plbart"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#plbart"),c(p,"class","relative group"),c(Re,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(Re,"rel","nofollow"),c(We,"href","https://www.github.com/gchhablani"),c(We,"rel","nofollow"),c(me,"id","overview-of-plbart"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#overview-of-plbart"),c(K,"class","relative group"),c(Ue,"href","https://arxiv.org/abs/2103.06333"),c(Ue,"rel","nofollow"),c(Ve,"href","https://huggingface.co/gchhablani"),c(Ve,"rel","nofollow"),c(Je,"href","https://github.com/wasiahmad/PLBART"),c(Je,"rel","nofollow"),c(fe,"id","training-of-plbart"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#training-of-plbart"),c(Q,"class","relative group"),c(Qe,"href","https://arxiv.org/abs/2103.06333"),c(Qe,"rel","nofollow"),c(Ye,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(It,"href","/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartTokenizer.as_target_tokenizer"),c(_e,"id","transformers.PLBartConfig"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#transformers.PLBartConfig"),c(Z,"class","relative group"),c(Gt,"href","/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartModel"),c(st,"href","https://huggingface.co/uclanlp/plbart-base"),c(st,"rel","nofollow"),c(Rt,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(Wt,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ke,"id","transformers.PLBartTokenizer"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.PLBartTokenizer"),c(oe,"class","relative group"),c(Ht,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Ut,"href","/docs/transformers/v4.21.1/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(it,"href","https://github.com/google/sentencepiece"),c(it,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.PLBartModel"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.PLBartModel"),c(ne,"class","relative group"),c(Vt,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),c(kt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(kt,"rel","nofollow"),c(Jt,"href","/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartModel"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.PLBartForConditionalGeneration"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.PLBartForConditionalGeneration"),c(ae,"class","relative group"),c(Kt,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),c(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lt,"rel","nofollow"),c(Qt,"href","/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartForConditionalGeneration"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"id","transformers.PLBartForSequenceClassification"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#transformers.PLBartForSequenceClassification"),c(ie,"class","relative group"),c(Yt,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),c(Ct,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ct,"rel","nofollow"),c(Zt,"href","/docs/transformers/v4.21.1/en/model_doc/plbart#transformers.PLBartForSequenceClassification"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"id","transformers.PLBartForCausalLM"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#transformers.PLBartForCausalLM"),c(le,"class","relative group"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,l),_(t,b,h),_(t,p,h),e(p,f),e(f,k),T(r,k,null),e(p,g),e(p,x),e(x,ns),_(t,rn,h),_(t,D,h),e(D,co),e(co,ss),e(D,as),e(D,Re),e(Re,rs),e(D,is),e(D,We),e(We,ds),e(D,ls),_(t,dn,h),_(t,K,h),e(K,me),e(me,po),T(He,po,null),e(K,cs),e(K,ho),e(ho,ps),_(t,ln,h),_(t,R,h),e(R,hs),e(R,Ue),e(Ue,us),e(R,ms),e(R,uo),e(uo,fs),e(R,gs),_(t,cn,h),_(t,Nt,h),e(Nt,_s),_(t,pn,h),_(t,Ot,h),e(Ot,mo),e(mo,bs),_(t,hn,h),_(t,W,h),e(W,ks),e(W,Ve),e(Ve,vs),e(W,ys),e(W,Je),e(Je,Ts),e(W,ws),_(t,un,h),_(t,Q,h),e(Q,fe),e(fe,fo),T(Ke,fo,null),e(Q,Ps),e(Q,go),e(go,Ls),_(t,mn,h),_(t,C,h),e(C,$s),e(C,_o),e(_o,qs),e(C,zs),e(C,bo),e(bo,Bs),e(C,xs),e(C,ko),e(ko,Cs),e(C,Fs),e(C,vo),e(vo,js),e(C,Es),_(t,fn,h),_(t,ge,h),e(ge,Ms),e(ge,Qe),e(Qe,Ss),e(ge,As),_(t,gn,h),_(t,H,h),e(H,Ns),e(H,Ye),e(Ye,yo),e(yo,Os),e(Ye,Is),e(H,Ds),e(H,It),e(It,Xs),e(H,Gs),_(t,_n,h),_(t,Dt,h),e(Dt,To),e(To,Rs),_(t,bn,h),T(Ze,t,h),_(t,kn,h),_(t,Xt,h),e(Xt,et),e(et,wo),e(wo,Ws),e(et,Hs),e(et,Y),e(Y,Us),e(Y,Po),e(Po,Vs),e(Y,Js),e(Y,Lo),e(Lo,Ks),e(Y,Qs),_(t,vn,h),T(tt,t,h),_(t,yn,h),_(t,Z,h),e(Z,_e),e(_e,$o),T(ot,$o,null),e(Z,Ys),e(Z,qo),e(qo,Zs),_(t,Tn,h),_(t,E,h),T(nt,E,null),e(E,ea),e(E,ee),e(ee,ta),e(ee,Gt),e(Gt,oa),e(ee,na),e(ee,st),e(st,sa),e(ee,aa),e(E,ra),e(E,te),e(te,ia),e(te,Rt),e(Rt,da),e(te,la),e(te,Wt),e(Wt,ca),e(te,pa),e(E,ha),T(be,E,null),_(t,wn,h),_(t,oe,h),e(oe,ke),e(ke,zo),T(at,zo,null),e(oe,ua),e(oe,Bo),e(Bo,ma),_(t,Pn,h),_(t,q,h),T(rt,q,null),e(q,fa),e(q,xo),e(xo,ga),e(q,_a),e(q,X),e(X,ba),e(X,Ht),e(Ht,ka),e(X,va),e(X,Ut),e(Ut,ya),e(X,Ta),e(X,it),e(it,wa),e(X,Pa),e(q,La),e(q,dt),e(dt,$a),e(dt,Co),e(Co,qa),e(dt,za),e(q,Ba),T(ve,q,null),e(q,xa),e(q,ye),T(lt,ye,null),e(ye,Ca),e(ye,Fo),e(Fo,Fa),e(q,ja),e(q,A),T(ct,A,null),e(A,Ea),e(A,pt),e(pt,Ma),e(pt,jo),e(jo,Sa),e(pt,Aa),e(A,Na),e(A,ht),e(ht,ut),e(ut,Eo),e(Eo,Oa),e(ut,Ia),e(ut,Mo),e(Mo,Da),e(ht,Xa),e(ht,mt),e(mt,So),e(So,Ga),e(mt,Ra),e(mt,Ao),e(Ao,Wa),e(A,Ha),e(A,No),e(No,Ua),_(t,Ln,h),_(t,ne,h),e(ne,Te),e(Te,Oo),T(ft,Oo,null),e(ne,Va),e(ne,Io),e(Io,Ja),_(t,$n,h),_(t,M,h),T(gt,M,null),e(M,Ka),e(M,_t),e(_t,Qa),e(_t,Vt),e(Vt,Ya),e(_t,Za),e(M,er),e(M,bt),e(bt,tr),e(bt,kt),e(kt,or),e(bt,nr),e(M,sr),e(M,N),T(vt,N,null),e(N,ar),e(N,se),e(se,rr),e(se,Jt),e(Jt,ir),e(se,dr),e(se,Do),e(Do,lr),e(se,cr),e(N,pr),T(we,N,null),e(N,hr),T(Pe,N,null),_(t,qn,h),_(t,ae,h),e(ae,Le),e(Le,Xo),T(yt,Xo,null),e(ae,ur),e(ae,Go),e(Go,mr),_(t,zn,h),_(t,S,h),T(Tt,S,null),e(S,fr),e(S,wt),e(wt,gr),e(wt,Kt),e(Kt,_r),e(wt,br),e(S,kr),e(S,Pt),e(Pt,vr),e(Pt,Lt),e(Lt,yr),e(Pt,Tr),e(S,wr),e(S,O),T($t,O,null),e(O,Pr),e(O,re),e(re,Lr),e(re,Qt),e(Qt,$r),e(re,qr),e(re,Ro),e(Ro,zr),e(re,Br),e(O,xr),T($e,O,null),e(O,Cr),T(qe,O,null),_(t,Bn,h),_(t,ie,h),e(ie,ze),e(ze,Wo),T(qt,Wo,null),e(ie,Fr),e(ie,Ho),e(Ho,jr),_(t,xn,h),_(t,B,h),T(zt,B,null),e(B,Er),e(B,Uo),e(Uo,Mr),e(B,Sr),e(B,Bt),e(Bt,Ar),e(Bt,Yt),e(Yt,Nr),e(Bt,Or),e(B,Ir),e(B,xt),e(xt,Dr),e(xt,Ct),e(Ct,Xr),e(xt,Gr),e(B,Rr),e(B,z),T(Ft,z,null),e(z,Wr),e(z,de),e(de,Hr),e(de,Zt),e(Zt,Ur),e(de,Vr),e(de,Vo),e(Vo,Jr),e(de,Kr),e(z,Qr),T(Be,z,null),e(z,Yr),T(xe,z,null),e(z,Zr),T(Ce,z,null),e(z,ei),T(Fe,z,null),e(z,ti),T(je,z,null),_(t,Cn,h),_(t,le,h),e(le,Ee),e(Ee,Jo),T(jt,Jo,null),e(le,oi),e(le,Ko),e(Ko,ni),_(t,Fn,h),_(t,ce,h),T(Et,ce,null),e(ce,si),e(ce,Me),T(Mt,Me,null),e(Me,ai),T(Se,Me,null),jn=!0},p(t,[h]){const St={};h&2&&(St.$$scope={dirty:h,ctx:t}),be.$set(St);const Qo={};h&2&&(Qo.$$scope={dirty:h,ctx:t}),ve.$set(Qo);const Yo={};h&2&&(Yo.$$scope={dirty:h,ctx:t}),we.$set(Yo);const Zo={};h&2&&(Zo.$$scope={dirty:h,ctx:t}),Pe.$set(Zo);const U={};h&2&&(U.$$scope={dirty:h,ctx:t}),$e.$set(U);const en={};h&2&&(en.$$scope={dirty:h,ctx:t}),qe.$set(en);const tn={};h&2&&(tn.$$scope={dirty:h,ctx:t}),Be.$set(tn);const on={};h&2&&(on.$$scope={dirty:h,ctx:t}),xe.$set(on);const At={};h&2&&(At.$$scope={dirty:h,ctx:t}),Ce.$set(At);const nn={};h&2&&(nn.$$scope={dirty:h,ctx:t}),Fe.$set(nn);const sn={};h&2&&(sn.$$scope={dirty:h,ctx:t}),je.$set(sn);const an={};h&2&&(an.$$scope={dirty:h,ctx:t}),Se.$set(an)},i(t){jn||(w(r.$$.fragment,t),w(He.$$.fragment,t),w(Ke.$$.fragment,t),w(Ze.$$.fragment,t),w(tt.$$.fragment,t),w(ot.$$.fragment,t),w(nt.$$.fragment,t),w(be.$$.fragment,t),w(at.$$.fragment,t),w(rt.$$.fragment,t),w(ve.$$.fragment,t),w(lt.$$.fragment,t),w(ct.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(vt.$$.fragment,t),w(we.$$.fragment,t),w(Pe.$$.fragment,t),w(yt.$$.fragment,t),w(Tt.$$.fragment,t),w($t.$$.fragment,t),w($e.$$.fragment,t),w(qe.$$.fragment,t),w(qt.$$.fragment,t),w(zt.$$.fragment,t),w(Ft.$$.fragment,t),w(Be.$$.fragment,t),w(xe.$$.fragment,t),w(Ce.$$.fragment,t),w(Fe.$$.fragment,t),w(je.$$.fragment,t),w(jt.$$.fragment,t),w(Et.$$.fragment,t),w(Mt.$$.fragment,t),w(Se.$$.fragment,t),jn=!0)},o(t){P(r.$$.fragment,t),P(He.$$.fragment,t),P(Ke.$$.fragment,t),P(Ze.$$.fragment,t),P(tt.$$.fragment,t),P(ot.$$.fragment,t),P(nt.$$.fragment,t),P(be.$$.fragment,t),P(at.$$.fragment,t),P(rt.$$.fragment,t),P(ve.$$.fragment,t),P(lt.$$.fragment,t),P(ct.$$.fragment,t),P(ft.$$.fragment,t),P(gt.$$.fragment,t),P(vt.$$.fragment,t),P(we.$$.fragment,t),P(Pe.$$.fragment,t),P(yt.$$.fragment,t),P(Tt.$$.fragment,t),P($t.$$.fragment,t),P($e.$$.fragment,t),P(qe.$$.fragment,t),P(qt.$$.fragment,t),P(zt.$$.fragment,t),P(Ft.$$.fragment,t),P(Be.$$.fragment,t),P(xe.$$.fragment,t),P(Ce.$$.fragment,t),P(Fe.$$.fragment,t),P(je.$$.fragment,t),P(jt.$$.fragment,t),P(Et.$$.fragment,t),P(Mt.$$.fragment,t),P(Se.$$.fragment,t),jn=!1},d(t){o(l),t&&o(b),t&&o(p),L(r),t&&o(rn),t&&o(D),t&&o(dn),t&&o(K),L(He),t&&o(ln),t&&o(R),t&&o(cn),t&&o(Nt),t&&o(pn),t&&o(Ot),t&&o(hn),t&&o(W),t&&o(un),t&&o(Q),L(Ke),t&&o(mn),t&&o(C),t&&o(fn),t&&o(ge),t&&o(gn),t&&o(H),t&&o(_n),t&&o(Dt),t&&o(bn),L(Ze,t),t&&o(kn),t&&o(Xt),t&&o(vn),L(tt,t),t&&o(yn),t&&o(Z),L(ot),t&&o(Tn),t&&o(E),L(nt),L(be),t&&o(wn),t&&o(oe),L(at),t&&o(Pn),t&&o(q),L(rt),L(ve),L(lt),L(ct),t&&o(Ln),t&&o(ne),L(ft),t&&o($n),t&&o(M),L(gt),L(vt),L(we),L(Pe),t&&o(qn),t&&o(ae),L(yt),t&&o(zn),t&&o(S),L(Tt),L($t),L($e),L(qe),t&&o(Bn),t&&o(ie),L(qt),t&&o(xn),t&&o(B),L(zt),L(Ft),L(Be),L(xe),L(Ce),L(Fe),L(je),t&&o(Cn),t&&o(le),L(jt),t&&o(Fn),t&&o(ce),L(Et),L(Mt),L(Se)}}}const Xd={local:"plbart",sections:[{local:"overview-of-plbart",sections:[{local:"training-of-plbart",title:"Training of PLBart"}],title:"Overview of PLBart"},{local:"transformers.PLBartConfig",title:"PLBartConfig"},{local:"transformers.PLBartTokenizer",title:"PLBartTokenizer"},{local:"transformers.PLBartModel",title:"PLBartModel"},{local:"transformers.PLBartForConditionalGeneration",title:"PLBartForConditionalGeneration"},{local:"transformers.PLBartForSequenceClassification",title:"PLBartForSequenceClassification"},{local:"transformers.PLBartForCausalLM",title:"PLBartForCausalLM"}],title:"PLBart"};function Gd($){return zd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kd extends Pd{constructor(l){super();Ld(this,l,Gd,Dd,$d,{})}}export{Kd as default,Xd as metadata};
