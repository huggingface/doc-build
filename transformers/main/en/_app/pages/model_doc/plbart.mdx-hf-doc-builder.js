import{S as vd,i as yd,s as Td,e as n,k as m,w as v,t as i,M as wd,c as a,d as o,m as f,a as s,x as y,h as d,b as c,G as e,g as _,y as T,q as w,o as P,B as L,v as Pd,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as ni}from"../../chunks/Tip-hf-doc-builder.js";import{D as G}from"../../chunks/Docstring-hf-doc-builder.js";import{C as R}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as pe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ld($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartModel, PLBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),b=i("Example:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:ue,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function $d($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, text_target=expected_translation_english, return_tensors="pt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, text_target=expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){l=n("p"),b=i("Examples:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Examples:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:ue,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function qd($){let l,b,p,u,k;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var x=s(p);u=d(x,"Module"),x.forEach(o),k=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,u),e(l,k)},d(r){r&&o(l)}}}function Bd($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartTokenizer, PLBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),b=i("Example:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:ue,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function zd($){let l,b,p,u,k;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var x=s(p);u=d(x,"Module"),x.forEach(o),k=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,u),e(l,k)},d(r){r&&o(l)}}}function xd($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartTokenizer, PLBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;same&#x27;</span>, <span class="hljs-string">&#x27;first&#x27;</span>, <span class="hljs-string">&#x27;highest&#x27;</span>, <span class="hljs-string">&#x27;result&#x27;</span>, <span class="hljs-string">&#x27;Fib&#x27;</span>]`}}),{c(){l=n("p"),b=i("Mask-filling example:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Mask-filling example:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:ue,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Cd($){let l,b,p,u,k;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var x=s(p);u=d(x,"Module"),x.forEach(o),k=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,u),e(l,k)},d(r){r&&o(l)}}}function Fd($){let l,b,p,u,k;return u=new R({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),b=i("Example of single-label classification:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example of single-label classification:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:ue,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Ed($){let l,b;return l=new R({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(p){y(l.$$.fragment,p)},m(p,u){T(l,p,u),b=!0},p:ue,i(p){b||(w(l.$$.fragment,p),b=!0)},o(p){P(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function jd($){let l,b,p,u,k;return u=new R({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),b=i("Example of multi-label classification:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example of multi-label classification:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:ue,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Md($){let l,b;return l=new R({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(p){y(l.$$.fragment,p)},m(p,u){T(l,p,u),b=!0},p:ue,i(p){b||(w(l.$$.fragment,p),b=!0)},o(p){P(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function Sd($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartTokenizer, PLBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=n("p"),b=i("Example:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:ue,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Ad($){let l,b,p,u,k,r,g,x,ea,an,D,ro,ta,oa,Re,na,aa,We,sa,ra,sn,K,me,io,He,ia,lo,da,rn,W,la,Ue,ca,pa,co,ha,ua,dn,At,ma,ln,Nt,po,fa,cn,H,ga,Ve,_a,ba,Je,ka,va,pn,Q,fe,ho,Ke,ya,uo,Ta,hn,C,wa,mo,Pa,La,fo,$a,qa,go,Ba,za,_o,xa,Ca,un,ge,Fa,Qe,Ea,ja,mn,S,Ma,Ye,bo,Sa,Aa,Na,ko,Oa,Ia,vo,Da,Xa,fn,Ot,yo,Ga,gn,Ze,_n,It,et,To,Ra,Wa,Y,Ha,wo,Ua,Va,Po,Ja,Ka,bn,tt,kn,Z,_e,Lo,ot,Qa,$o,Ya,vn,E,nt,Za,ee,es,Dt,ts,os,at,ns,as,ss,te,rs,Xt,is,ds,Gt,ls,cs,ps,be,yn,oe,ke,qo,st,hs,Bo,us,Tn,B,rt,ms,zo,fs,gs,X,_s,Rt,bs,ks,Wt,vs,ys,it,Ts,ws,Ps,dt,Ls,xo,$s,qs,Bs,ve,zs,A,lt,xs,ct,Cs,Co,Fs,Es,js,pt,ht,Fo,Ms,Ss,Eo,As,Ns,ut,jo,Os,Is,Mo,Ds,Xs,So,Gs,wn,ne,ye,Ao,mt,Rs,No,Ws,Pn,j,ft,Hs,gt,Us,Ht,Vs,Js,Ks,_t,Qs,bt,Ys,Zs,er,N,kt,tr,ae,or,Ut,nr,ar,Oo,sr,rr,ir,Te,dr,we,Ln,se,Pe,Io,vt,lr,Do,cr,$n,M,yt,pr,Tt,hr,Vt,ur,mr,fr,wt,gr,Pt,_r,br,kr,O,Lt,vr,re,yr,Jt,Tr,wr,Xo,Pr,Lr,$r,Le,qr,$e,qn,ie,qe,Go,$t,Br,Ro,zr,Bn,z,qt,xr,Wo,Cr,Fr,Bt,Er,Kt,jr,Mr,Sr,zt,Ar,xt,Nr,Or,Ir,q,Ct,Dr,de,Xr,Qt,Gr,Rr,Ho,Wr,Hr,Ur,Be,Vr,ze,Jr,xe,Kr,Ce,Qr,Fe,zn,le,Ee,Uo,Ft,Yr,Vo,Zr,xn,ce,Et,ei,je,jt,ti,Me,Cn;return r=new pe({}),He=new pe({}),Ke=new pe({}),Ze=new R({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base", src_lang="en_XX", tgt_lang="python")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, text_target=expected_translation_english, return_tensors="pt")
model(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;python&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, text_target=expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),tt=new R({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

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
<span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>`}}),ot=new pe({}),nt=new G({props:{name:"class transformers.PLBartConfig",anchor:"transformers.PLBartConfig",parameters:[{name:"vocab_size",val:" = 50005"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 3072"},{name:"encoder_attention_heads",val:" = 12"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 3072"},{name:"decoder_attention_heads",val:" = 12"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50005) &#x2014;
Vocabulary size of the PLBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartModel">PLBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.PLBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/configuration_plbart.py#L32"}}),be=new he({props:{anchor:"transformers.PLBartConfig.example",$$slots:{default:[Ld]},$$scope:{ctx:$}}}),st=new pe({}),rt=new G({props:{name:"class transformers.PLBartTokenizer",anchor:"transformers.PLBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"language_codes",val:" = 'base'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/tokenization_plbart.py#L96"}}),ve=new he({props:{anchor:"transformers.PLBartTokenizer.example",$$slots:{default:[$d]},$$scope:{ctx:$}}}),lt=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/tokenization_plbart.py#L320",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mt=new pe({}),ft=new G({props:{name:"class transformers.PLBartModel",anchor:"transformers.PLBartModel",parameters:[{name:"config",val:": PLBartConfig"}],parametersDescription:[{anchor:"transformers.PLBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/modeling_plbart.py#L1118"}}),kt=new G({props:{name:"forward",anchor:"transformers.PLBartModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/modeling_plbart.py#L1144",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Te=new ni({props:{$$slots:{default:[qd]},$$scope:{ctx:$}}}),we=new he({props:{anchor:"transformers.PLBartModel.forward.example",$$slots:{default:[Bd]},$$scope:{ctx:$}}}),vt=new pe({}),yt=new G({props:{name:"class transformers.PLBartForConditionalGeneration",anchor:"transformers.PLBartForConditionalGeneration",parameters:[{name:"config",val:": PLBartConfig"}],parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/modeling_plbart.py#L1234"}}),Lt=new G({props:{name:"forward",anchor:"transformers.PLBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/modeling_plbart.py#L1277",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new ni({props:{$$slots:{default:[zd]},$$scope:{ctx:$}}}),$e=new he({props:{anchor:"transformers.PLBartForConditionalGeneration.forward.example",$$slots:{default:[xd]},$$scope:{ctx:$}}}),$t=new pe({}),qt=new G({props:{name:"class transformers.PLBartForSequenceClassification",anchor:"transformers.PLBartForSequenceClassification",parameters:[{name:"config",val:": PLBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/modeling_plbart.py#L1403"}}),Ct=new G({props:{name:"forward",anchor:"transformers.PLBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.PLBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.PLBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a> or <code>PLBartMultiTokenizer</code> depending on the checkpoint.
See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PLBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/modeling_plbart.py#L1416",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new ni({props:{$$slots:{default:[Cd]},$$scope:{ctx:$}}}),ze=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example",$$slots:{default:[Fd]},$$scope:{ctx:$}}}),xe=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-2",$$slots:{default:[Ed]},$$scope:{ctx:$}}}),Ce=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-3",$$slots:{default:[jd]},$$scope:{ctx:$}}}),Fe=new he({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-4",$$slots:{default:[Md]},$$scope:{ctx:$}}}),Ft=new pe({}),Et=new G({props:{name:"class transformers.PLBartForCausalLM",anchor:"transformers.PLBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/modeling_plbart.py#L1540"}}),jt=new G({props:{name:"forward",anchor:"transformers.PLBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartTokenizer">PLBartTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/modeling_plbart.py#L1571",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new he({props:{anchor:"transformers.PLBartForCausalLM.forward.example",$$slots:{default:[Sd]},$$scope:{ctx:$}}}),{c(){l=n("meta"),b=m(),p=n("h1"),u=n("a"),k=n("span"),v(r.$$.fragment),g=m(),x=n("span"),ea=i("PLBart"),an=m(),D=n("p"),ro=n("strong"),ta=i("DISCLAIMER:"),oa=i(" If you see something strange, file a "),Re=n("a"),na=i("Github Issue"),aa=i(` and assign
`),We=n("a"),sa=i("@gchhablani"),ra=i("."),sn=m(),K=n("h2"),me=n("a"),io=n("span"),v(He.$$.fragment),ia=m(),lo=n("span"),da=i("Overview of PLBart"),rn=m(),W=n("p"),la=i("The PLBART model was proposed in "),Ue=n("a"),ca=i("Unified Pre-training for Program Understanding and Generation"),pa=i(` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),co=n("code"),ha=i("plbart-base"),ua=i(` has been trained using multilingual denoising task
on Java, Python and English.`),dn=m(),At=n("p"),ma=i("According to the abstract"),ln=m(),Nt=n("p"),po=n("em"),fa=i(`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),cn=m(),H=n("p"),ga=i("This model was contributed by "),Ve=n("a"),_a=i("gchhablani"),ba=i(". The Authors\u2019 code can be found "),Je=n("a"),ka=i("here"),va=i("."),pn=m(),Q=n("h3"),fe=n("a"),ho=n("span"),v(Ke.$$.fragment),ya=m(),uo=n("span"),Ta=i("Training of PLBart"),hn=m(),C=n("p"),wa=i(`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),mo=n("code"),Pa=i("X [eos, src_lang_code]"),La=i(" where "),fo=n("code"),$a=i("X"),qa=i(` is the source text. The
target text format is `),go=n("code"),Ba=i("[tgt_lang_code] X [eos]"),za=i(". "),_o=n("code"),xa=i("bos"),Ca=i(" is never used."),un=m(),ge=n("p"),Fa=i("However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Qe=n("a"),Ea=i("the paper"),ja=i(" to learn more about this."),mn=m(),S=n("p"),Ma=i("In cases where the language code is needed, the regular "),Ye=n("a"),bo=n("strong"),Sa=i("call"),Aa=i("()"),Na=i(` will encode source text format
when you pass texts as the first argument or with the keyword argument `),ko=n("code"),Oa=i("text"),Ia=i(`, and will encode target text format if
it\u2019s passed with the `),vo=n("code"),Da=i("text_target"),Xa=i(" keyword argument."),fn=m(),Ot=n("ul"),yo=n("li"),Ga=i("Supervised training"),gn=m(),v(Ze.$$.fragment),_n=m(),It=n("ul"),et=n("li"),To=n("p"),Ra=i("Generation"),Wa=m(),Y=n("p"),Ha=i("While generating the target text set the "),wo=n("code"),Ua=i("decoder_start_token_id"),Va=i(` to the target language id. The following
example shows how to translate Python to English using the `),Po=n("code"),Ja=i("uclanlp/plbart-python-en_XX"),Ka=i(" model."),bn=m(),v(tt.$$.fragment),kn=m(),Z=n("h2"),_e=n("a"),Lo=n("span"),v(ot.$$.fragment),Qa=m(),$o=n("span"),Ya=i("PLBartConfig"),vn=m(),E=n("div"),v(nt.$$.fragment),Za=m(),ee=n("p"),es=i("This is the configuration class to store the configuration of a "),Dt=n("a"),ts=i("PLBartModel"),os=i(`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),at=n("a"),ns=i("uclanlp/plbart-base"),as=i(" architecture."),ss=m(),te=n("p"),rs=i("Configuration objects inherit from "),Xt=n("a"),is=i("PretrainedConfig"),ds=i(` and can be used to control the model outputs. Read the
documentation from `),Gt=n("a"),ls=i("PretrainedConfig"),cs=i(" for more information."),ps=m(),v(be.$$.fragment),yn=m(),oe=n("h2"),ke=n("a"),qo=n("span"),v(st.$$.fragment),hs=m(),Bo=n("span"),us=i("PLBartTokenizer"),Tn=m(),B=n("div"),v(rt.$$.fragment),ms=m(),zo=n("p"),fs=i("Construct an PLBART tokenizer."),gs=m(),X=n("p"),_s=i("Adapted from "),Rt=n("a"),bs=i("RobertaTokenizer"),ks=i(" and "),Wt=n("a"),vs=i("XLNetTokenizer"),ys=i(`. Based on
`),it=n("a"),Ts=i("SentencePiece"),ws=i("."),Ps=m(),dt=n("p"),Ls=i("The tokenization method is "),xo=n("code"),$s=i("<tokens> <eos> <language code>"),qs=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Bs=m(),v(ve.$$.fragment),zs=m(),A=n("div"),v(lt.$$.fragment),xs=m(),ct=n("p"),Cs=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),Co=n("code"),Fs=i("X"),Es=i(" represents the sequence:"),js=m(),pt=n("ul"),ht=n("li"),Fo=n("code"),Ms=i("input_ids"),Ss=i(" (for encoder) "),Eo=n("code"),As=i("X [eos, src_lang_code]"),Ns=m(),ut=n("li"),jo=n("code"),Os=i("decoder_input_ids"),Is=i(": (for decoder) "),Mo=n("code"),Ds=i("X [eos, tgt_lang_code]"),Xs=m(),So=n("p"),Gs=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),wn=m(),ne=n("h2"),ye=n("a"),Ao=n("span"),v(mt.$$.fragment),Rs=m(),No=n("span"),Ws=i("PLBartModel"),Pn=m(),j=n("div"),v(ft.$$.fragment),Hs=m(),gt=n("p"),Us=i(`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ht=n("a"),Vs=i("PreTrainedModel"),Js=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks=m(),_t=n("p"),Qs=i("This model is also a PyTorch "),bt=n("a"),Ys=i("torch.nn.Module"),Zs=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),er=m(),N=n("div"),v(kt.$$.fragment),tr=m(),ae=n("p"),or=i("The "),Ut=n("a"),nr=i("PLBartModel"),ar=i(" forward method, overrides the "),Oo=n("code"),sr=i("__call__"),rr=i(" special method."),ir=m(),v(Te.$$.fragment),dr=m(),v(we.$$.fragment),Ln=m(),se=n("h2"),Pe=n("a"),Io=n("span"),v(vt.$$.fragment),lr=m(),Do=n("span"),cr=i("PLBartForConditionalGeneration"),$n=m(),M=n("div"),v(yt.$$.fragment),pr=m(),Tt=n("p"),hr=i(`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Vt=n("a"),ur=i("PreTrainedModel"),mr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fr=m(),wt=n("p"),gr=i("This model is also a PyTorch "),Pt=n("a"),_r=i("torch.nn.Module"),br=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kr=m(),O=n("div"),v(Lt.$$.fragment),vr=m(),re=n("p"),yr=i("The "),Jt=n("a"),Tr=i("PLBartForConditionalGeneration"),wr=i(" forward method, overrides the "),Xo=n("code"),Pr=i("__call__"),Lr=i(" special method."),$r=m(),v(Le.$$.fragment),qr=m(),v($e.$$.fragment),qn=m(),ie=n("h2"),qe=n("a"),Go=n("span"),v($t.$$.fragment),Br=m(),Ro=n("span"),zr=i("PLBartForSequenceClassification"),Bn=m(),z=n("div"),v(qt.$$.fragment),xr=m(),Wo=n("p"),Cr=i(`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Fr=m(),Bt=n("p"),Er=i("This model inherits from "),Kt=n("a"),jr=i("PreTrainedModel"),Mr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sr=m(),zt=n("p"),Ar=i("This model is also a PyTorch "),xt=n("a"),Nr=i("torch.nn.Module"),Or=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ir=m(),q=n("div"),v(Ct.$$.fragment),Dr=m(),de=n("p"),Xr=i("The "),Qt=n("a"),Gr=i("PLBartForSequenceClassification"),Rr=i(" forward method, overrides the "),Ho=n("code"),Wr=i("__call__"),Hr=i(" special method."),Ur=m(),v(Be.$$.fragment),Vr=m(),v(ze.$$.fragment),Jr=m(),v(xe.$$.fragment),Kr=m(),v(Ce.$$.fragment),Qr=m(),v(Fe.$$.fragment),zn=m(),le=n("h2"),Ee=n("a"),Uo=n("span"),v(Ft.$$.fragment),Yr=m(),Vo=n("span"),Zr=i("PLBartForCausalLM"),xn=m(),ce=n("div"),v(Et.$$.fragment),ei=m(),je=n("div"),v(jt.$$.fragment),ti=m(),v(Me.$$.fragment),this.h()},l(t){const h=wd('[data-svelte="svelte-1phssyn"]',document.head);l=a(h,"META",{name:!0,content:!0}),h.forEach(o),b=f(t),p=a(t,"H1",{class:!0});var Mt=s(p);u=a(Mt,"A",{id:!0,class:!0,href:!0});var Jo=s(u);k=a(Jo,"SPAN",{});var Ko=s(k);y(r.$$.fragment,Ko),Ko.forEach(o),Jo.forEach(o),g=f(Mt),x=a(Mt,"SPAN",{});var Qo=s(x);ea=d(Qo,"PLBart"),Qo.forEach(o),Mt.forEach(o),an=f(t),D=a(t,"P",{});var U=s(D);ro=a(U,"STRONG",{});var Yo=s(ro);ta=d(Yo,"DISCLAIMER:"),Yo.forEach(o),oa=d(U," If you see something strange, file a "),Re=a(U,"A",{href:!0,rel:!0});var Zo=s(Re);na=d(Zo,"Github Issue"),Zo.forEach(o),aa=d(U,` and assign
`),We=a(U,"A",{href:!0,rel:!0});var en=s(We);sa=d(en,"@gchhablani"),en.forEach(o),ra=d(U,"."),U.forEach(o),sn=f(t),K=a(t,"H2",{class:!0});var St=s(K);me=a(St,"A",{id:!0,class:!0,href:!0});var tn=s(me);io=a(tn,"SPAN",{});var on=s(io);y(He.$$.fragment,on),on.forEach(o),tn.forEach(o),ia=f(St),lo=a(St,"SPAN",{});var nn=s(lo);da=d(nn,"Overview of PLBart"),nn.forEach(o),St.forEach(o),rn=f(t),W=a(t,"P",{});var Yt=s(W);la=d(Yt,"The PLBART model was proposed in "),Ue=a(Yt,"A",{href:!0,rel:!0});var ai=s(Ue);ca=d(ai,"Unified Pre-training for Program Understanding and Generation"),ai.forEach(o),pa=d(Yt,` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),co=a(Yt,"CODE",{});var si=s(co);ha=d(si,"plbart-base"),si.forEach(o),ua=d(Yt,` has been trained using multilingual denoising task
on Java, Python and English.`),Yt.forEach(o),dn=f(t),At=a(t,"P",{});var ri=s(At);ma=d(ri,"According to the abstract"),ri.forEach(o),ln=f(t),Nt=a(t,"P",{});var ii=s(Nt);po=a(ii,"EM",{});var di=s(po);fa=d(di,`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),di.forEach(o),ii.forEach(o),cn=f(t),H=a(t,"P",{});var Zt=s(H);ga=d(Zt,"This model was contributed by "),Ve=a(Zt,"A",{href:!0,rel:!0});var li=s(Ve);_a=d(li,"gchhablani"),li.forEach(o),ba=d(Zt,". The Authors\u2019 code can be found "),Je=a(Zt,"A",{href:!0,rel:!0});var ci=s(Je);ka=d(ci,"here"),ci.forEach(o),va=d(Zt,"."),Zt.forEach(o),pn=f(t),Q=a(t,"H3",{class:!0});var Fn=s(Q);fe=a(Fn,"A",{id:!0,class:!0,href:!0});var pi=s(fe);ho=a(pi,"SPAN",{});var hi=s(ho);y(Ke.$$.fragment,hi),hi.forEach(o),pi.forEach(o),ya=f(Fn),uo=a(Fn,"SPAN",{});var ui=s(uo);Ta=d(ui,"Training of PLBart"),ui.forEach(o),Fn.forEach(o),hn=f(t),C=a(t,"P",{});var V=s(C);wa=d(V,`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),mo=a(V,"CODE",{});var mi=s(mo);Pa=d(mi,"X [eos, src_lang_code]"),mi.forEach(o),La=d(V," where "),fo=a(V,"CODE",{});var fi=s(fo);$a=d(fi,"X"),fi.forEach(o),qa=d(V,` is the source text. The
target text format is `),go=a(V,"CODE",{});var gi=s(go);Ba=d(gi,"[tgt_lang_code] X [eos]"),gi.forEach(o),za=d(V,". "),_o=a(V,"CODE",{});var _i=s(_o);xa=d(_i,"bos"),_i.forEach(o),Ca=d(V," is never used."),V.forEach(o),un=f(t),ge=a(t,"P",{});var En=s(ge);Fa=d(En,"However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Qe=a(En,"A",{href:!0,rel:!0});var bi=s(Qe);Ea=d(bi,"the paper"),bi.forEach(o),ja=d(En," to learn more about this."),En.forEach(o),mn=f(t),S=a(t,"P",{});var Se=s(S);Ma=d(Se,"In cases where the language code is needed, the regular "),Ye=a(Se,"A",{href:!0});var oi=s(Ye);bo=a(oi,"STRONG",{});var ki=s(bo);Sa=d(ki,"call"),ki.forEach(o),Aa=d(oi,"()"),oi.forEach(o),Na=d(Se,` will encode source text format
when you pass texts as the first argument or with the keyword argument `),ko=a(Se,"CODE",{});var vi=s(ko);Oa=d(vi,"text"),vi.forEach(o),Ia=d(Se,`, and will encode target text format if
it\u2019s passed with the `),vo=a(Se,"CODE",{});var yi=s(vo);Da=d(yi,"text_target"),yi.forEach(o),Xa=d(Se," keyword argument."),Se.forEach(o),fn=f(t),Ot=a(t,"UL",{});var Ti=s(Ot);yo=a(Ti,"LI",{});var wi=s(yo);Ga=d(wi,"Supervised training"),wi.forEach(o),Ti.forEach(o),gn=f(t),y(Ze.$$.fragment,t),_n=f(t),It=a(t,"UL",{});var Pi=s(It);et=a(Pi,"LI",{});var jn=s(et);To=a(jn,"P",{});var Li=s(To);Ra=d(Li,"Generation"),Li.forEach(o),Wa=f(jn),Y=a(jn,"P",{});var eo=s(Y);Ha=d(eo,"While generating the target text set the "),wo=a(eo,"CODE",{});var $i=s(wo);Ua=d($i,"decoder_start_token_id"),$i.forEach(o),Va=d(eo,` to the target language id. The following
example shows how to translate Python to English using the `),Po=a(eo,"CODE",{});var qi=s(Po);Ja=d(qi,"uclanlp/plbart-python-en_XX"),qi.forEach(o),Ka=d(eo," model."),eo.forEach(o),jn.forEach(o),Pi.forEach(o),bn=f(t),y(tt.$$.fragment,t),kn=f(t),Z=a(t,"H2",{class:!0});var Mn=s(Z);_e=a(Mn,"A",{id:!0,class:!0,href:!0});var Bi=s(_e);Lo=a(Bi,"SPAN",{});var zi=s(Lo);y(ot.$$.fragment,zi),zi.forEach(o),Bi.forEach(o),Qa=f(Mn),$o=a(Mn,"SPAN",{});var xi=s($o);Ya=d(xi,"PLBartConfig"),xi.forEach(o),Mn.forEach(o),vn=f(t),E=a(t,"DIV",{class:!0});var Ae=s(E);y(nt.$$.fragment,Ae),Za=f(Ae),ee=a(Ae,"P",{});var to=s(ee);es=d(to,"This is the configuration class to store the configuration of a "),Dt=a(to,"A",{href:!0});var Ci=s(Dt);ts=d(Ci,"PLBartModel"),Ci.forEach(o),os=d(to,`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),at=a(to,"A",{href:!0,rel:!0});var Fi=s(at);ns=d(Fi,"uclanlp/plbart-base"),Fi.forEach(o),as=d(to," architecture."),to.forEach(o),ss=f(Ae),te=a(Ae,"P",{});var oo=s(te);rs=d(oo,"Configuration objects inherit from "),Xt=a(oo,"A",{href:!0});var Ei=s(Xt);is=d(Ei,"PretrainedConfig"),Ei.forEach(o),ds=d(oo,` and can be used to control the model outputs. Read the
documentation from `),Gt=a(oo,"A",{href:!0});var ji=s(Gt);ls=d(ji,"PretrainedConfig"),ji.forEach(o),cs=d(oo," for more information."),oo.forEach(o),ps=f(Ae),y(be.$$.fragment,Ae),Ae.forEach(o),yn=f(t),oe=a(t,"H2",{class:!0});var Sn=s(oe);ke=a(Sn,"A",{id:!0,class:!0,href:!0});var Mi=s(ke);qo=a(Mi,"SPAN",{});var Si=s(qo);y(st.$$.fragment,Si),Si.forEach(o),Mi.forEach(o),hs=f(Sn),Bo=a(Sn,"SPAN",{});var Ai=s(Bo);us=d(Ai,"PLBartTokenizer"),Ai.forEach(o),Sn.forEach(o),Tn=f(t),B=a(t,"DIV",{class:!0});var I=s(B);y(rt.$$.fragment,I),ms=f(I),zo=a(I,"P",{});var Ni=s(zo);fs=d(Ni,"Construct an PLBART tokenizer."),Ni.forEach(o),gs=f(I),X=a(I,"P",{});var Ne=s(X);_s=d(Ne,"Adapted from "),Rt=a(Ne,"A",{href:!0});var Oi=s(Rt);bs=d(Oi,"RobertaTokenizer"),Oi.forEach(o),ks=d(Ne," and "),Wt=a(Ne,"A",{href:!0});var Ii=s(Wt);vs=d(Ii,"XLNetTokenizer"),Ii.forEach(o),ys=d(Ne,`. Based on
`),it=a(Ne,"A",{href:!0,rel:!0});var Di=s(it);Ts=d(Di,"SentencePiece"),Di.forEach(o),ws=d(Ne,"."),Ne.forEach(o),Ps=f(I),dt=a(I,"P",{});var An=s(dt);Ls=d(An,"The tokenization method is "),xo=a(An,"CODE",{});var Xi=s(xo);$s=d(Xi,"<tokens> <eos> <language code>"),Xi.forEach(o),qs=d(An," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),An.forEach(o),Bs=f(I),y(ve.$$.fragment,I),zs=f(I),A=a(I,"DIV",{class:!0});var Oe=s(A);y(lt.$$.fragment,Oe),xs=f(Oe),ct=a(Oe,"P",{});var Nn=s(ct);Cs=d(Nn,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),Co=a(Nn,"CODE",{});var Gi=s(Co);Fs=d(Gi,"X"),Gi.forEach(o),Es=d(Nn," represents the sequence:"),Nn.forEach(o),js=f(Oe),pt=a(Oe,"UL",{});var On=s(pt);ht=a(On,"LI",{});var In=s(ht);Fo=a(In,"CODE",{});var Ri=s(Fo);Ms=d(Ri,"input_ids"),Ri.forEach(o),Ss=d(In," (for encoder) "),Eo=a(In,"CODE",{});var Wi=s(Eo);As=d(Wi,"X [eos, src_lang_code]"),Wi.forEach(o),In.forEach(o),Ns=f(On),ut=a(On,"LI",{});var Dn=s(ut);jo=a(Dn,"CODE",{});var Hi=s(jo);Os=d(Hi,"decoder_input_ids"),Hi.forEach(o),Is=d(Dn,": (for decoder) "),Mo=a(Dn,"CODE",{});var Ui=s(Mo);Ds=d(Ui,"X [eos, tgt_lang_code]"),Ui.forEach(o),Dn.forEach(o),On.forEach(o),Xs=f(Oe),So=a(Oe,"P",{});var Vi=s(So);Gs=d(Vi,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Vi.forEach(o),Oe.forEach(o),I.forEach(o),wn=f(t),ne=a(t,"H2",{class:!0});var Xn=s(ne);ye=a(Xn,"A",{id:!0,class:!0,href:!0});var Ji=s(ye);Ao=a(Ji,"SPAN",{});var Ki=s(Ao);y(mt.$$.fragment,Ki),Ki.forEach(o),Ji.forEach(o),Rs=f(Xn),No=a(Xn,"SPAN",{});var Qi=s(No);Ws=d(Qi,"PLBartModel"),Qi.forEach(o),Xn.forEach(o),Pn=f(t),j=a(t,"DIV",{class:!0});var Ie=s(j);y(ft.$$.fragment,Ie),Hs=f(Ie),gt=a(Ie,"P",{});var Gn=s(gt);Us=d(Gn,`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ht=a(Gn,"A",{href:!0});var Yi=s(Ht);Vs=d(Yi,"PreTrainedModel"),Yi.forEach(o),Js=d(Gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gn.forEach(o),Ks=f(Ie),_t=a(Ie,"P",{});var Rn=s(_t);Qs=d(Rn,"This model is also a PyTorch "),bt=a(Rn,"A",{href:!0,rel:!0});var Zi=s(bt);Ys=d(Zi,"torch.nn.Module"),Zi.forEach(o),Zs=d(Rn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rn.forEach(o),er=f(Ie),N=a(Ie,"DIV",{class:!0});var De=s(N);y(kt.$$.fragment,De),tr=f(De),ae=a(De,"P",{});var no=s(ae);or=d(no,"The "),Ut=a(no,"A",{href:!0});var ed=s(Ut);nr=d(ed,"PLBartModel"),ed.forEach(o),ar=d(no," forward method, overrides the "),Oo=a(no,"CODE",{});var td=s(Oo);sr=d(td,"__call__"),td.forEach(o),rr=d(no," special method."),no.forEach(o),ir=f(De),y(Te.$$.fragment,De),dr=f(De),y(we.$$.fragment,De),De.forEach(o),Ie.forEach(o),Ln=f(t),se=a(t,"H2",{class:!0});var Wn=s(se);Pe=a(Wn,"A",{id:!0,class:!0,href:!0});var od=s(Pe);Io=a(od,"SPAN",{});var nd=s(Io);y(vt.$$.fragment,nd),nd.forEach(o),od.forEach(o),lr=f(Wn),Do=a(Wn,"SPAN",{});var ad=s(Do);cr=d(ad,"PLBartForConditionalGeneration"),ad.forEach(o),Wn.forEach(o),$n=f(t),M=a(t,"DIV",{class:!0});var Xe=s(M);y(yt.$$.fragment,Xe),pr=f(Xe),Tt=a(Xe,"P",{});var Hn=s(Tt);hr=d(Hn,`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Vt=a(Hn,"A",{href:!0});var sd=s(Vt);ur=d(sd,"PreTrainedModel"),sd.forEach(o),mr=d(Hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn.forEach(o),fr=f(Xe),wt=a(Xe,"P",{});var Un=s(wt);gr=d(Un,"This model is also a PyTorch "),Pt=a(Un,"A",{href:!0,rel:!0});var rd=s(Pt);_r=d(rd,"torch.nn.Module"),rd.forEach(o),br=d(Un,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Un.forEach(o),kr=f(Xe),O=a(Xe,"DIV",{class:!0});var Ge=s(O);y(Lt.$$.fragment,Ge),vr=f(Ge),re=a(Ge,"P",{});var ao=s(re);yr=d(ao,"The "),Jt=a(ao,"A",{href:!0});var id=s(Jt);Tr=d(id,"PLBartForConditionalGeneration"),id.forEach(o),wr=d(ao," forward method, overrides the "),Xo=a(ao,"CODE",{});var dd=s(Xo);Pr=d(dd,"__call__"),dd.forEach(o),Lr=d(ao," special method."),ao.forEach(o),$r=f(Ge),y(Le.$$.fragment,Ge),qr=f(Ge),y($e.$$.fragment,Ge),Ge.forEach(o),Xe.forEach(o),qn=f(t),ie=a(t,"H2",{class:!0});var Vn=s(ie);qe=a(Vn,"A",{id:!0,class:!0,href:!0});var ld=s(qe);Go=a(ld,"SPAN",{});var cd=s(Go);y($t.$$.fragment,cd),cd.forEach(o),ld.forEach(o),Br=f(Vn),Ro=a(Vn,"SPAN",{});var pd=s(Ro);zr=d(pd,"PLBartForSequenceClassification"),pd.forEach(o),Vn.forEach(o),Bn=f(t),z=a(t,"DIV",{class:!0});var J=s(z);y(qt.$$.fragment,J),xr=f(J),Wo=a(J,"P",{});var hd=s(Wo);Cr=d(hd,`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),hd.forEach(o),Fr=f(J),Bt=a(J,"P",{});var Jn=s(Bt);Er=d(Jn,"This model inherits from "),Kt=a(Jn,"A",{href:!0});var ud=s(Kt);jr=d(ud,"PreTrainedModel"),ud.forEach(o),Mr=d(Jn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jn.forEach(o),Sr=f(J),zt=a(J,"P",{});var Kn=s(zt);Ar=d(Kn,"This model is also a PyTorch "),xt=a(Kn,"A",{href:!0,rel:!0});var md=s(xt);Nr=d(md,"torch.nn.Module"),md.forEach(o),Or=d(Kn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kn.forEach(o),Ir=f(J),q=a(J,"DIV",{class:!0});var F=s(q);y(Ct.$$.fragment,F),Dr=f(F),de=a(F,"P",{});var so=s(de);Xr=d(so,"The "),Qt=a(so,"A",{href:!0});var fd=s(Qt);Gr=d(fd,"PLBartForSequenceClassification"),fd.forEach(o),Rr=d(so," forward method, overrides the "),Ho=a(so,"CODE",{});var gd=s(Ho);Wr=d(gd,"__call__"),gd.forEach(o),Hr=d(so," special method."),so.forEach(o),Ur=f(F),y(Be.$$.fragment,F),Vr=f(F),y(ze.$$.fragment,F),Jr=f(F),y(xe.$$.fragment,F),Kr=f(F),y(Ce.$$.fragment,F),Qr=f(F),y(Fe.$$.fragment,F),F.forEach(o),J.forEach(o),zn=f(t),le=a(t,"H2",{class:!0});var Qn=s(le);Ee=a(Qn,"A",{id:!0,class:!0,href:!0});var _d=s(Ee);Uo=a(_d,"SPAN",{});var bd=s(Uo);y(Ft.$$.fragment,bd),bd.forEach(o),_d.forEach(o),Yr=f(Qn),Vo=a(Qn,"SPAN",{});var kd=s(Vo);Zr=d(kd,"PLBartForCausalLM"),kd.forEach(o),Qn.forEach(o),xn=f(t),ce=a(t,"DIV",{class:!0});var Yn=s(ce);y(Et.$$.fragment,Yn),ei=f(Yn),je=a(Yn,"DIV",{class:!0});var Zn=s(je);y(jt.$$.fragment,Zn),ti=f(Zn),y(Me.$$.fragment,Zn),Zn.forEach(o),Yn.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(Nd)),c(u,"id","plbart"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#plbart"),c(p,"class","relative group"),c(Re,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(Re,"rel","nofollow"),c(We,"href","https://www.github.com/gchhablani"),c(We,"rel","nofollow"),c(me,"id","overview-of-plbart"),c(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(me,"href","#overview-of-plbart"),c(K,"class","relative group"),c(Ue,"href","https://arxiv.org/abs/2103.06333"),c(Ue,"rel","nofollow"),c(Ve,"href","https://huggingface.co/gchhablani"),c(Ve,"rel","nofollow"),c(Je,"href","https://github.com/wasiahmad/PLBART"),c(Je,"rel","nofollow"),c(fe,"id","training-of-plbart"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#training-of-plbart"),c(Q,"class","relative group"),c(Qe,"href","https://arxiv.org/abs/2103.06333"),c(Qe,"rel","nofollow"),c(Ye,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(_e,"id","transformers.PLBartConfig"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#transformers.PLBartConfig"),c(Z,"class","relative group"),c(Dt,"href","/docs/transformers/main/en/model_doc/plbart#transformers.PLBartModel"),c(at,"href","https://huggingface.co/uclanlp/plbart-base"),c(at,"rel","nofollow"),c(Xt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Gt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ke,"id","transformers.PLBartTokenizer"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.PLBartTokenizer"),c(oe,"class","relative group"),c(Rt,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Wt,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(it,"href","https://github.com/google/sentencepiece"),c(it,"rel","nofollow"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ye,"id","transformers.PLBartModel"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.PLBartModel"),c(ne,"class","relative group"),c(Ht,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bt,"rel","nofollow"),c(Ut,"href","/docs/transformers/main/en/model_doc/plbart#transformers.PLBartModel"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"id","transformers.PLBartForConditionalGeneration"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.PLBartForConditionalGeneration"),c(se,"class","relative group"),c(Vt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Pt,"rel","nofollow"),c(Jt,"href","/docs/transformers/main/en/model_doc/plbart#transformers.PLBartForConditionalGeneration"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"id","transformers.PLBartForSequenceClassification"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#transformers.PLBartForSequenceClassification"),c(ie,"class","relative group"),c(Kt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xt,"rel","nofollow"),c(Qt,"href","/docs/transformers/main/en/model_doc/plbart#transformers.PLBartForSequenceClassification"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ee,"id","transformers.PLBartForCausalLM"),c(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ee,"href","#transformers.PLBartForCausalLM"),c(le,"class","relative group"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,l),_(t,b,h),_(t,p,h),e(p,u),e(u,k),T(r,k,null),e(p,g),e(p,x),e(x,ea),_(t,an,h),_(t,D,h),e(D,ro),e(ro,ta),e(D,oa),e(D,Re),e(Re,na),e(D,aa),e(D,We),e(We,sa),e(D,ra),_(t,sn,h),_(t,K,h),e(K,me),e(me,io),T(He,io,null),e(K,ia),e(K,lo),e(lo,da),_(t,rn,h),_(t,W,h),e(W,la),e(W,Ue),e(Ue,ca),e(W,pa),e(W,co),e(co,ha),e(W,ua),_(t,dn,h),_(t,At,h),e(At,ma),_(t,ln,h),_(t,Nt,h),e(Nt,po),e(po,fa),_(t,cn,h),_(t,H,h),e(H,ga),e(H,Ve),e(Ve,_a),e(H,ba),e(H,Je),e(Je,ka),e(H,va),_(t,pn,h),_(t,Q,h),e(Q,fe),e(fe,ho),T(Ke,ho,null),e(Q,ya),e(Q,uo),e(uo,Ta),_(t,hn,h),_(t,C,h),e(C,wa),e(C,mo),e(mo,Pa),e(C,La),e(C,fo),e(fo,$a),e(C,qa),e(C,go),e(go,Ba),e(C,za),e(C,_o),e(_o,xa),e(C,Ca),_(t,un,h),_(t,ge,h),e(ge,Fa),e(ge,Qe),e(Qe,Ea),e(ge,ja),_(t,mn,h),_(t,S,h),e(S,Ma),e(S,Ye),e(Ye,bo),e(bo,Sa),e(Ye,Aa),e(S,Na),e(S,ko),e(ko,Oa),e(S,Ia),e(S,vo),e(vo,Da),e(S,Xa),_(t,fn,h),_(t,Ot,h),e(Ot,yo),e(yo,Ga),_(t,gn,h),T(Ze,t,h),_(t,_n,h),_(t,It,h),e(It,et),e(et,To),e(To,Ra),e(et,Wa),e(et,Y),e(Y,Ha),e(Y,wo),e(wo,Ua),e(Y,Va),e(Y,Po),e(Po,Ja),e(Y,Ka),_(t,bn,h),T(tt,t,h),_(t,kn,h),_(t,Z,h),e(Z,_e),e(_e,Lo),T(ot,Lo,null),e(Z,Qa),e(Z,$o),e($o,Ya),_(t,vn,h),_(t,E,h),T(nt,E,null),e(E,Za),e(E,ee),e(ee,es),e(ee,Dt),e(Dt,ts),e(ee,os),e(ee,at),e(at,ns),e(ee,as),e(E,ss),e(E,te),e(te,rs),e(te,Xt),e(Xt,is),e(te,ds),e(te,Gt),e(Gt,ls),e(te,cs),e(E,ps),T(be,E,null),_(t,yn,h),_(t,oe,h),e(oe,ke),e(ke,qo),T(st,qo,null),e(oe,hs),e(oe,Bo),e(Bo,us),_(t,Tn,h),_(t,B,h),T(rt,B,null),e(B,ms),e(B,zo),e(zo,fs),e(B,gs),e(B,X),e(X,_s),e(X,Rt),e(Rt,bs),e(X,ks),e(X,Wt),e(Wt,vs),e(X,ys),e(X,it),e(it,Ts),e(X,ws),e(B,Ps),e(B,dt),e(dt,Ls),e(dt,xo),e(xo,$s),e(dt,qs),e(B,Bs),T(ve,B,null),e(B,zs),e(B,A),T(lt,A,null),e(A,xs),e(A,ct),e(ct,Cs),e(ct,Co),e(Co,Fs),e(ct,Es),e(A,js),e(A,pt),e(pt,ht),e(ht,Fo),e(Fo,Ms),e(ht,Ss),e(ht,Eo),e(Eo,As),e(pt,Ns),e(pt,ut),e(ut,jo),e(jo,Os),e(ut,Is),e(ut,Mo),e(Mo,Ds),e(A,Xs),e(A,So),e(So,Gs),_(t,wn,h),_(t,ne,h),e(ne,ye),e(ye,Ao),T(mt,Ao,null),e(ne,Rs),e(ne,No),e(No,Ws),_(t,Pn,h),_(t,j,h),T(ft,j,null),e(j,Hs),e(j,gt),e(gt,Us),e(gt,Ht),e(Ht,Vs),e(gt,Js),e(j,Ks),e(j,_t),e(_t,Qs),e(_t,bt),e(bt,Ys),e(_t,Zs),e(j,er),e(j,N),T(kt,N,null),e(N,tr),e(N,ae),e(ae,or),e(ae,Ut),e(Ut,nr),e(ae,ar),e(ae,Oo),e(Oo,sr),e(ae,rr),e(N,ir),T(Te,N,null),e(N,dr),T(we,N,null),_(t,Ln,h),_(t,se,h),e(se,Pe),e(Pe,Io),T(vt,Io,null),e(se,lr),e(se,Do),e(Do,cr),_(t,$n,h),_(t,M,h),T(yt,M,null),e(M,pr),e(M,Tt),e(Tt,hr),e(Tt,Vt),e(Vt,ur),e(Tt,mr),e(M,fr),e(M,wt),e(wt,gr),e(wt,Pt),e(Pt,_r),e(wt,br),e(M,kr),e(M,O),T(Lt,O,null),e(O,vr),e(O,re),e(re,yr),e(re,Jt),e(Jt,Tr),e(re,wr),e(re,Xo),e(Xo,Pr),e(re,Lr),e(O,$r),T(Le,O,null),e(O,qr),T($e,O,null),_(t,qn,h),_(t,ie,h),e(ie,qe),e(qe,Go),T($t,Go,null),e(ie,Br),e(ie,Ro),e(Ro,zr),_(t,Bn,h),_(t,z,h),T(qt,z,null),e(z,xr),e(z,Wo),e(Wo,Cr),e(z,Fr),e(z,Bt),e(Bt,Er),e(Bt,Kt),e(Kt,jr),e(Bt,Mr),e(z,Sr),e(z,zt),e(zt,Ar),e(zt,xt),e(xt,Nr),e(zt,Or),e(z,Ir),e(z,q),T(Ct,q,null),e(q,Dr),e(q,de),e(de,Xr),e(de,Qt),e(Qt,Gr),e(de,Rr),e(de,Ho),e(Ho,Wr),e(de,Hr),e(q,Ur),T(Be,q,null),e(q,Vr),T(ze,q,null),e(q,Jr),T(xe,q,null),e(q,Kr),T(Ce,q,null),e(q,Qr),T(Fe,q,null),_(t,zn,h),_(t,le,h),e(le,Ee),e(Ee,Uo),T(Ft,Uo,null),e(le,Yr),e(le,Vo),e(Vo,Zr),_(t,xn,h),_(t,ce,h),T(Et,ce,null),e(ce,ei),e(ce,je),T(jt,je,null),e(je,ti),T(Me,je,null),Cn=!0},p(t,[h]){const Mt={};h&2&&(Mt.$$scope={dirty:h,ctx:t}),be.$set(Mt);const Jo={};h&2&&(Jo.$$scope={dirty:h,ctx:t}),ve.$set(Jo);const Ko={};h&2&&(Ko.$$scope={dirty:h,ctx:t}),Te.$set(Ko);const Qo={};h&2&&(Qo.$$scope={dirty:h,ctx:t}),we.$set(Qo);const U={};h&2&&(U.$$scope={dirty:h,ctx:t}),Le.$set(U);const Yo={};h&2&&(Yo.$$scope={dirty:h,ctx:t}),$e.$set(Yo);const Zo={};h&2&&(Zo.$$scope={dirty:h,ctx:t}),Be.$set(Zo);const en={};h&2&&(en.$$scope={dirty:h,ctx:t}),ze.$set(en);const St={};h&2&&(St.$$scope={dirty:h,ctx:t}),xe.$set(St);const tn={};h&2&&(tn.$$scope={dirty:h,ctx:t}),Ce.$set(tn);const on={};h&2&&(on.$$scope={dirty:h,ctx:t}),Fe.$set(on);const nn={};h&2&&(nn.$$scope={dirty:h,ctx:t}),Me.$set(nn)},i(t){Cn||(w(r.$$.fragment,t),w(He.$$.fragment,t),w(Ke.$$.fragment,t),w(Ze.$$.fragment,t),w(tt.$$.fragment,t),w(ot.$$.fragment,t),w(nt.$$.fragment,t),w(be.$$.fragment,t),w(st.$$.fragment,t),w(rt.$$.fragment,t),w(ve.$$.fragment,t),w(lt.$$.fragment,t),w(mt.$$.fragment,t),w(ft.$$.fragment,t),w(kt.$$.fragment,t),w(Te.$$.fragment,t),w(we.$$.fragment,t),w(vt.$$.fragment,t),w(yt.$$.fragment,t),w(Lt.$$.fragment,t),w(Le.$$.fragment,t),w($e.$$.fragment,t),w($t.$$.fragment,t),w(qt.$$.fragment,t),w(Ct.$$.fragment,t),w(Be.$$.fragment,t),w(ze.$$.fragment,t),w(xe.$$.fragment,t),w(Ce.$$.fragment,t),w(Fe.$$.fragment,t),w(Ft.$$.fragment,t),w(Et.$$.fragment,t),w(jt.$$.fragment,t),w(Me.$$.fragment,t),Cn=!0)},o(t){P(r.$$.fragment,t),P(He.$$.fragment,t),P(Ke.$$.fragment,t),P(Ze.$$.fragment,t),P(tt.$$.fragment,t),P(ot.$$.fragment,t),P(nt.$$.fragment,t),P(be.$$.fragment,t),P(st.$$.fragment,t),P(rt.$$.fragment,t),P(ve.$$.fragment,t),P(lt.$$.fragment,t),P(mt.$$.fragment,t),P(ft.$$.fragment,t),P(kt.$$.fragment,t),P(Te.$$.fragment,t),P(we.$$.fragment,t),P(vt.$$.fragment,t),P(yt.$$.fragment,t),P(Lt.$$.fragment,t),P(Le.$$.fragment,t),P($e.$$.fragment,t),P($t.$$.fragment,t),P(qt.$$.fragment,t),P(Ct.$$.fragment,t),P(Be.$$.fragment,t),P(ze.$$.fragment,t),P(xe.$$.fragment,t),P(Ce.$$.fragment,t),P(Fe.$$.fragment,t),P(Ft.$$.fragment,t),P(Et.$$.fragment,t),P(jt.$$.fragment,t),P(Me.$$.fragment,t),Cn=!1},d(t){o(l),t&&o(b),t&&o(p),L(r),t&&o(an),t&&o(D),t&&o(sn),t&&o(K),L(He),t&&o(rn),t&&o(W),t&&o(dn),t&&o(At),t&&o(ln),t&&o(Nt),t&&o(cn),t&&o(H),t&&o(pn),t&&o(Q),L(Ke),t&&o(hn),t&&o(C),t&&o(un),t&&o(ge),t&&o(mn),t&&o(S),t&&o(fn),t&&o(Ot),t&&o(gn),L(Ze,t),t&&o(_n),t&&o(It),t&&o(bn),L(tt,t),t&&o(kn),t&&o(Z),L(ot),t&&o(vn),t&&o(E),L(nt),L(be),t&&o(yn),t&&o(oe),L(st),t&&o(Tn),t&&o(B),L(rt),L(ve),L(lt),t&&o(wn),t&&o(ne),L(mt),t&&o(Pn),t&&o(j),L(ft),L(kt),L(Te),L(we),t&&o(Ln),t&&o(se),L(vt),t&&o($n),t&&o(M),L(yt),L(Lt),L(Le),L($e),t&&o(qn),t&&o(ie),L($t),t&&o(Bn),t&&o(z),L(qt),L(Ct),L(Be),L(ze),L(xe),L(Ce),L(Fe),t&&o(zn),t&&o(le),L(Ft),t&&o(xn),t&&o(ce),L(Et),L(jt),L(Me)}}}const Nd={local:"plbart",sections:[{local:"overview-of-plbart",sections:[{local:"training-of-plbart",title:"Training of PLBart"}],title:"Overview of PLBart"},{local:"transformers.PLBartConfig",title:"PLBartConfig"},{local:"transformers.PLBartTokenizer",title:"PLBartTokenizer"},{local:"transformers.PLBartModel",title:"PLBartModel"},{local:"transformers.PLBartForConditionalGeneration",title:"PLBartForConditionalGeneration"},{local:"transformers.PLBartForSequenceClassification",title:"PLBartForSequenceClassification"},{local:"transformers.PLBartForCausalLM",title:"PLBartForCausalLM"}],title:"PLBart"};function Od($){return Pd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hd extends vd{constructor(l){super();yd(this,l,Od,Ad,Td,{})}}export{Hd as default,Nd as metadata};
