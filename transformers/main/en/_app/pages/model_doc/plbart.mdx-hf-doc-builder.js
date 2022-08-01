import{S as Pd,i as Ld,s as $d,e as n,k as m,w as v,t as i,M as qd,c as a,d as o,m as f,a as s,x as y,h as d,b as c,G as e,g as _,y as T,q as w,o as P,B as L,v as Bd,L as me}from"../../chunks/vendor-hf-doc-builder.js";import{T as ri}from"../../chunks/Tip-hf-doc-builder.js";import{D as G}from"../../chunks/Docstring-hf-doc-builder.js";import{C as R}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as he}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ue}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function zd($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartModel, PLBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),b=i("Example:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:me,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function xd($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-python-en_XX", src_lang="python", tgt_lang="en_XX")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, text_target=expected_translation_english, return_tensors="pt")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-python-en_XX&quot;</span>, src_lang=<span class="hljs-string">&quot;python&quot;</span>, tgt_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, text_target=expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)`}}),{c(){l=n("p"),b=i("Examples:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Examples:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:me,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Cd($){let l,b,p,u,k;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var x=s(p);u=d(x,"Module"),x.forEach(o),k=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,u),e(l,k)},d(r){r&&o(l)}}}function Fd($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartTokenizer, PLBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),b=i("Example:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:me,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Ed($){let l,b,p,u,k;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var x=s(p);u=d(x,"Module"),x.forEach(o),k=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,u),e(l,k)},d(r){r&&o(l)}}}function jd($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartTokenizer, PLBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;same&#x27;</span>, <span class="hljs-string">&#x27;first&#x27;</span>, <span class="hljs-string">&#x27;highest&#x27;</span>, <span class="hljs-string">&#x27;result&#x27;</span>, <span class="hljs-string">&#x27;Fib&#x27;</span>]`}}),{c(){l=n("p"),b=i("Mask-filling example:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Mask-filling example:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:me,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Md($){let l,b,p,u,k;return{c(){l=n("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=i("Module"),k=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var x=s(p);u=d(x,"Module"),x.forEach(o),k=d(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(r,g){_(r,l,g),e(l,b),e(l,p),e(p,u),e(l,k)},d(r){r&&o(l)}}}function Sd($){let l,b,p,u,k;return u=new R({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),b=i("Example of single-label classification:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example of single-label classification:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:me,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Ad($){let l,b;return l=new R({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = PLBartForSequenceClassification.from_pretrained("hf-internal-testing/tiny-plbart", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = PLBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-plbart&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(p){y(l.$$.fragment,p)},m(p,u){T(l,p,u),b=!0},p:me,i(p){b||(w(l.$$.fragment,p),b=!0)},o(p){P(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function Nd($){let l,b,p,u,k;return u=new R({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=n("p"),b=i("Example of multi-label classification:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example of multi-label classification:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:me,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Od($){let l,b;return l=new R({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(p){y(l.$$.fragment,p)},m(p,u){T(l,p,u),b=!0},p:me,i(p){b||(w(l.$$.fragment,p),b=!0)},o(p){P(l.$$.fragment,p),b=!1},d(p){L(l,p)}}}function Id($){let l,b,p,u,k;return u=new R({props:{code:`from transformers import PLBartTokenizer, PLBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=n("p"),b=i("Example:"),p=m(),v(u.$$.fragment)},l(r){l=a(r,"P",{});var g=s(l);b=d(g,"Example:"),g.forEach(o),p=f(r),y(u.$$.fragment,r)},m(r,g){_(r,l,g),e(l,b),_(r,p,g),T(u,r,g),k=!0},p:me,i(r){k||(w(u.$$.fragment,r),k=!0)},o(r){P(u.$$.fragment,r),k=!1},d(r){r&&o(l),r&&o(p),L(u,r)}}}function Dd($){let l,b,p,u,k,r,g,x,ta,rn,D,io,oa,na,We,aa,sa,He,ra,ia,dn,K,fe,lo,Ue,da,co,la,ln,W,ca,Ve,pa,ha,po,ua,ma,cn,At,fa,pn,Nt,ho,ga,hn,H,_a,Je,ba,ka,Ke,va,ya,un,Q,ge,uo,Qe,Ta,mo,wa,mn,C,Pa,fo,La,$a,go,qa,Ba,_o,za,xa,bo,Ca,Fa,fn,_e,Ea,Ye,ja,Ma,gn,S,Sa,Ze,ko,Aa,Na,Oa,vo,Ia,Da,yo,Xa,Ga,_n,Ot,To,Ra,bn,et,kn,It,tt,wo,Wa,Ha,Y,Ua,Po,Va,Ja,Lo,Ka,Qa,vn,ot,yn,Z,be,$o,nt,Ya,qo,Za,Tn,E,at,es,ee,ts,Dt,os,ns,st,as,ss,rs,te,is,Xt,ds,ls,Gt,cs,ps,hs,ke,wn,oe,ve,Bo,rt,us,zo,ms,Pn,B,it,fs,xo,gs,_s,X,bs,Rt,ks,vs,Wt,ys,Ts,dt,ws,Ps,Ls,ne,$s,Co,qs,Bs,Fo,zs,xs,Cs,ye,Fs,A,lt,Es,ct,js,Eo,Ms,Ss,As,pt,ht,jo,Ns,Os,Mo,Is,Ds,ut,So,Xs,Gs,Ao,Rs,Ws,No,Hs,Ln,ae,Te,Oo,mt,Us,Io,Vs,$n,j,ft,Js,gt,Ks,Ht,Qs,Ys,Zs,_t,er,bt,tr,or,nr,N,kt,ar,se,sr,Ut,rr,ir,Do,dr,lr,cr,we,pr,Pe,qn,re,Le,Xo,vt,hr,Go,ur,Bn,M,yt,mr,Tt,fr,Vt,gr,_r,br,wt,kr,Pt,vr,yr,Tr,O,Lt,wr,ie,Pr,Jt,Lr,$r,Ro,qr,Br,zr,$e,xr,qe,zn,de,Be,Wo,$t,Cr,Ho,Fr,xn,z,qt,Er,Uo,jr,Mr,Bt,Sr,Kt,Ar,Nr,Or,zt,Ir,xt,Dr,Xr,Gr,q,Ct,Rr,le,Wr,Qt,Hr,Ur,Vo,Vr,Jr,Kr,ze,Qr,xe,Yr,Ce,Zr,Fe,ei,Ee,Cn,ce,je,Jo,Ft,ti,Ko,oi,Fn,pe,Et,ni,Me,jt,ai,Se,En;return r=new he({}),Ue=new he({}),Qe=new he({}),et=new R({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

tokenizer = PLBartTokenizer.from_pretrained("uclanlp/plbart-base", src_lang="en_XX", tgt_lang="python")
example_python_phrase = "def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])"
expected_translation_english = "Returns the maximum value of a b c."
inputs = tokenizer(example_python_phrase, text_target=expected_translation_english, return_tensors="pt")
model(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PLBartForConditionalGeneration, PLBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PLBartTokenizer.from_pretrained(<span class="hljs-string">&quot;uclanlp/plbart-base&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;python&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_python_phrase = <span class="hljs-string">&quot;def maximum(a,b,c):NEW_LINE_INDENTreturn max([a,b,c])&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_english = <span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_python_phrase, text_target=expected_translation_english, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs)`}}),ot=new R({props:{code:`from transformers import PLBartForConditionalGeneration, PLBartTokenizer

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
<span class="hljs-string">&quot;Returns the maximum value of a b c.&quot;</span>`}}),nt=new he({}),at=new G({props:{name:"class transformers.PLBartConfig",anchor:"transformers.PLBartConfig",parameters:[{name:"vocab_size",val:" = 50005"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 6"},{name:"encoder_ffn_dim",val:" = 3072"},{name:"encoder_attention_heads",val:" = 12"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 3072"},{name:"decoder_attention_heads",val:" = 12"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 768"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50005) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/configuration_plbart.py#L32"}}),ke=new ue({props:{anchor:"transformers.PLBartConfig.example",$$slots:{default:[zd]},$$scope:{ctx:$}}}),rt=new he({}),it=new G({props:{name:"class transformers.PLBartTokenizer",anchor:"transformers.PLBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"language_codes",val:" = 'base'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/tokenization_plbart.py#L96"}}),ye=new ue({props:{anchor:"transformers.PLBartTokenizer.example",$$slots:{default:[xd]},$$scope:{ctx:$}}}),lt=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.PLBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/tokenization_plbart.py#L320",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mt=new he({}),ft=new G({props:{name:"class transformers.PLBartModel",anchor:"transformers.PLBartModel",parameters:[{name:"config",val:": PLBartConfig"}],parametersDescription:[{anchor:"transformers.PLBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
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
`}}),we=new ri({props:{$$slots:{default:[Cd]},$$scope:{ctx:$}}}),Pe=new ue({props:{anchor:"transformers.PLBartModel.forward.example",$$slots:{default:[Fd]},$$scope:{ctx:$}}}),vt=new he({}),yt=new G({props:{name:"class transformers.PLBartForConditionalGeneration",anchor:"transformers.PLBartForConditionalGeneration",parameters:[{name:"config",val:": PLBartConfig"}],parametersDescription:[{anchor:"transformers.PLBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
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
`}}),$e=new ri({props:{$$slots:{default:[Ed]},$$scope:{ctx:$}}}),qe=new ue({props:{anchor:"transformers.PLBartForConditionalGeneration.forward.example",$$slots:{default:[jd]},$$scope:{ctx:$}}}),$t=new he({}),qt=new G({props:{name:"class transformers.PLBartForSequenceClassification",anchor:"transformers.PLBartForSequenceClassification",parameters:[{name:"config",val:": PLBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PLBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/plbart#transformers.PLBartConfig">PLBartConfig</a>) &#x2014;
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
`}}),ze=new ri({props:{$$slots:{default:[Md]},$$scope:{ctx:$}}}),xe=new ue({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example",$$slots:{default:[Sd]},$$scope:{ctx:$}}}),Ce=new ue({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-2",$$slots:{default:[Ad]},$$scope:{ctx:$}}}),Fe=new ue({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-3",$$slots:{default:[Nd]},$$scope:{ctx:$}}}),Ee=new ue({props:{anchor:"transformers.PLBartForSequenceClassification.forward.example-4",$$slots:{default:[Od]},$$scope:{ctx:$}}}),Ft=new he({}),Et=new G({props:{name:"class transformers.PLBartForCausalLM",anchor:"transformers.PLBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/plbart/modeling_plbart.py#L1540"}}),jt=new G({props:{name:"forward",anchor:"transformers.PLBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.PLBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Se=new ue({props:{anchor:"transformers.PLBartForCausalLM.forward.example",$$slots:{default:[Id]},$$scope:{ctx:$}}}),{c(){l=n("meta"),b=m(),p=n("h1"),u=n("a"),k=n("span"),v(r.$$.fragment),g=m(),x=n("span"),ta=i("PLBart"),rn=m(),D=n("p"),io=n("strong"),oa=i("DISCLAIMER:"),na=i(" If you see something strange, file a "),We=n("a"),aa=i("Github Issue"),sa=i(` and assign
`),He=n("a"),ra=i("@gchhablani"),ia=i("."),dn=m(),K=n("h2"),fe=n("a"),lo=n("span"),v(Ue.$$.fragment),da=m(),co=n("span"),la=i("Overview of PLBart"),ln=m(),W=n("p"),ca=i("The PLBART model was proposed in "),Ve=n("a"),pa=i("Unified Pre-training for Program Understanding and Generation"),ha=i(` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),po=n("code"),ua=i("plbart-base"),ma=i(` has been trained using multilingual denoising task
on Java, Python and English.`),cn=m(),At=n("p"),fa=i("According to the abstract"),pn=m(),Nt=n("p"),ho=n("em"),ga=i(`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),hn=m(),H=n("p"),_a=i("This model was contributed by "),Je=n("a"),ba=i("gchhablani"),ka=i(". The Authors\u2019 code can be found "),Ke=n("a"),va=i("here"),ya=i("."),un=m(),Q=n("h3"),ge=n("a"),uo=n("span"),v(Qe.$$.fragment),Ta=m(),mo=n("span"),wa=i("Training of PLBart"),mn=m(),C=n("p"),Pa=i(`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),fo=n("code"),La=i("X [eos, src_lang_code]"),$a=i(" where "),go=n("code"),qa=i("X"),Ba=i(` is the source text. The
target text format is `),_o=n("code"),za=i("[tgt_lang_code] X [eos]"),xa=i(". "),bo=n("code"),Ca=i("bos"),Fa=i(" is never used."),fn=m(),_e=n("p"),Ea=i("However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ye=n("a"),ja=i("the paper"),Ma=i(" to learn more about this."),gn=m(),S=n("p"),Sa=i("In cases where the language code is needed, the regular "),Ze=n("a"),ko=n("strong"),Aa=i("call"),Na=i("()"),Oa=i(` will encode source text format
when you pass texts as the first argument or with the keyword argument `),vo=n("code"),Ia=i("text"),Da=i(`, and will encode target text format if
it\u2019s passed with the `),yo=n("code"),Xa=i("text_target"),Ga=i(" keyword argument."),_n=m(),Ot=n("ul"),To=n("li"),Ra=i("Supervised training"),bn=m(),v(et.$$.fragment),kn=m(),It=n("ul"),tt=n("li"),wo=n("p"),Wa=i("Generation"),Ha=m(),Y=n("p"),Ua=i("While generating the target text set the "),Po=n("code"),Va=i("decoder_start_token_id"),Ja=i(` to the target language id. The following
example shows how to translate Python to English using the `),Lo=n("code"),Ka=i("uclanlp/plbart-python-en_XX"),Qa=i(" model."),vn=m(),v(ot.$$.fragment),yn=m(),Z=n("h2"),be=n("a"),$o=n("span"),v(nt.$$.fragment),Ya=m(),qo=n("span"),Za=i("PLBartConfig"),Tn=m(),E=n("div"),v(at.$$.fragment),es=m(),ee=n("p"),ts=i("This is the configuration class to store the configuration of a "),Dt=n("a"),os=i("PLBartModel"),ns=i(`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),st=n("a"),as=i("uclanlp/plbart-base"),ss=i(" architecture."),rs=m(),te=n("p"),is=i("Configuration objects inherit from "),Xt=n("a"),ds=i("PretrainedConfig"),ls=i(` and can be used to control the model outputs. Read the
documentation from `),Gt=n("a"),cs=i("PretrainedConfig"),ps=i(" for more information."),hs=m(),v(ke.$$.fragment),wn=m(),oe=n("h2"),ve=n("a"),Bo=n("span"),v(rt.$$.fragment),us=m(),zo=n("span"),ms=i("PLBartTokenizer"),Pn=m(),B=n("div"),v(it.$$.fragment),fs=m(),xo=n("p"),gs=i("Construct an PLBART tokenizer."),_s=m(),X=n("p"),bs=i("Adapted from "),Rt=n("a"),ks=i("RobertaTokenizer"),vs=i(" and "),Wt=n("a"),ys=i("XLNetTokenizer"),Ts=i(`. Based on
`),dt=n("a"),ws=i("SentencePiece"),Ps=i("."),Ls=m(),ne=n("p"),$s=i("The tokenization method is "),Co=n("code"),qs=i("<tokens> <eos> <language code>"),Bs=i(" for source language documents, and "),Fo=n("code"),zs=i("<language code> <tokens> <eos>"),xs=i(" for target language documents."),Cs=m(),v(ye.$$.fragment),Fs=m(),A=n("div"),v(lt.$$.fragment),Es=m(),ct=n("p"),js=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),Eo=n("code"),Ms=i("X"),Ss=i(" represents the sequence:"),As=m(),pt=n("ul"),ht=n("li"),jo=n("code"),Ns=i("input_ids"),Os=i(" (for encoder) "),Mo=n("code"),Is=i("X [eos, src_lang_code]"),Ds=m(),ut=n("li"),So=n("code"),Xs=i("decoder_input_ids"),Gs=i(": (for decoder) "),Ao=n("code"),Rs=i("X [eos, tgt_lang_code]"),Ws=m(),No=n("p"),Hs=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ln=m(),ae=n("h2"),Te=n("a"),Oo=n("span"),v(mt.$$.fragment),Us=m(),Io=n("span"),Vs=i("PLBartModel"),$n=m(),j=n("div"),v(ft.$$.fragment),Js=m(),gt=n("p"),Ks=i(`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ht=n("a"),Qs=i("PreTrainedModel"),Ys=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zs=m(),_t=n("p"),er=i("This model is also a PyTorch "),bt=n("a"),tr=i("torch.nn.Module"),or=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nr=m(),N=n("div"),v(kt.$$.fragment),ar=m(),se=n("p"),sr=i("The "),Ut=n("a"),rr=i("PLBartModel"),ir=i(" forward method, overrides the "),Do=n("code"),dr=i("__call__"),lr=i(" special method."),cr=m(),v(we.$$.fragment),pr=m(),v(Pe.$$.fragment),qn=m(),re=n("h2"),Le=n("a"),Xo=n("span"),v(vt.$$.fragment),hr=m(),Go=n("span"),ur=i("PLBartForConditionalGeneration"),Bn=m(),M=n("div"),v(yt.$$.fragment),mr=m(),Tt=n("p"),fr=i(`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Vt=n("a"),gr=i("PreTrainedModel"),_r=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),br=m(),wt=n("p"),kr=i("This model is also a PyTorch "),Pt=n("a"),vr=i("torch.nn.Module"),yr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tr=m(),O=n("div"),v(Lt.$$.fragment),wr=m(),ie=n("p"),Pr=i("The "),Jt=n("a"),Lr=i("PLBartForConditionalGeneration"),$r=i(" forward method, overrides the "),Ro=n("code"),qr=i("__call__"),Br=i(" special method."),zr=m(),v($e.$$.fragment),xr=m(),v(qe.$$.fragment),zn=m(),de=n("h2"),Be=n("a"),Wo=n("span"),v($t.$$.fragment),Cr=m(),Ho=n("span"),Fr=i("PLBartForSequenceClassification"),xn=m(),z=n("div"),v(qt.$$.fragment),Er=m(),Uo=n("p"),jr=i(`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),Mr=m(),Bt=n("p"),Sr=i("This model inherits from "),Kt=n("a"),Ar=i("PreTrainedModel"),Nr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Or=m(),zt=n("p"),Ir=i("This model is also a PyTorch "),xt=n("a"),Dr=i("torch.nn.Module"),Xr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gr=m(),q=n("div"),v(Ct.$$.fragment),Rr=m(),le=n("p"),Wr=i("The "),Qt=n("a"),Hr=i("PLBartForSequenceClassification"),Ur=i(" forward method, overrides the "),Vo=n("code"),Vr=i("__call__"),Jr=i(" special method."),Kr=m(),v(ze.$$.fragment),Qr=m(),v(xe.$$.fragment),Yr=m(),v(Ce.$$.fragment),Zr=m(),v(Fe.$$.fragment),ei=m(),v(Ee.$$.fragment),Cn=m(),ce=n("h2"),je=n("a"),Jo=n("span"),v(Ft.$$.fragment),ti=m(),Ko=n("span"),oi=i("PLBartForCausalLM"),Fn=m(),pe=n("div"),v(Et.$$.fragment),ni=m(),Me=n("div"),v(jt.$$.fragment),ai=m(),v(Se.$$.fragment),this.h()},l(t){const h=qd('[data-svelte="svelte-1phssyn"]',document.head);l=a(h,"META",{name:!0,content:!0}),h.forEach(o),b=f(t),p=a(t,"H1",{class:!0});var Mt=s(p);u=a(Mt,"A",{id:!0,class:!0,href:!0});var Qo=s(u);k=a(Qo,"SPAN",{});var Yo=s(k);y(r.$$.fragment,Yo),Yo.forEach(o),Qo.forEach(o),g=f(Mt),x=a(Mt,"SPAN",{});var Zo=s(x);ta=d(Zo,"PLBart"),Zo.forEach(o),Mt.forEach(o),rn=f(t),D=a(t,"P",{});var U=s(D);io=a(U,"STRONG",{});var en=s(io);oa=d(en,"DISCLAIMER:"),en.forEach(o),na=d(U," If you see something strange, file a "),We=a(U,"A",{href:!0,rel:!0});var tn=s(We);aa=d(tn,"Github Issue"),tn.forEach(o),sa=d(U,` and assign
`),He=a(U,"A",{href:!0,rel:!0});var on=s(He);ra=d(on,"@gchhablani"),on.forEach(o),ia=d(U,"."),U.forEach(o),dn=f(t),K=a(t,"H2",{class:!0});var St=s(K);fe=a(St,"A",{id:!0,class:!0,href:!0});var nn=s(fe);lo=a(nn,"SPAN",{});var an=s(lo);y(Ue.$$.fragment,an),an.forEach(o),nn.forEach(o),da=f(St),co=a(St,"SPAN",{});var sn=s(co);la=d(sn,"Overview of PLBart"),sn.forEach(o),St.forEach(o),ln=f(t),W=a(t,"P",{});var Yt=s(W);ca=d(Yt,"The PLBART model was proposed in "),Ve=a(Yt,"A",{href:!0,rel:!0});var ii=s(Ve);pa=d(ii,"Unified Pre-training for Program Understanding and Generation"),ii.forEach(o),ha=d(Yt,` by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
This is a BART-like model which can be used to perform code-summarization, code-generation, and code-translation tasks. The pre-trained model `),po=a(Yt,"CODE",{});var di=s(po);ua=d(di,"plbart-base"),di.forEach(o),ma=d(Yt,` has been trained using multilingual denoising task
on Java, Python and English.`),Yt.forEach(o),cn=f(t),At=a(t,"P",{});var li=s(At);fa=d(li,"According to the abstract"),li.forEach(o),pn=f(t),Nt=a(t,"P",{});var ci=s(Nt);ho=a(ci,"EM",{});var pi=s(ho);ga=d(pi,`Code summarization and generation empower conversion between programming language (PL) and natural language (NL),
while code translation avails the migration of legacy code from one PL to another. This paper introduces PLBART,
a sequence-to-sequence model capable of performing a broad spectrum of program and language understanding and generation tasks.
PLBART is pre-trained on an extensive collection of Java and Python functions and associated NL text via denoising autoencoding.
Experiments on code summarization in the English language, code generation, and code translation in seven programming languages
show that PLBART outperforms or rivals state-of-the-art models. Moreover, experiments on discriminative tasks, e.g., program
repair, clone detection, and vulnerable code detection, demonstrate PLBART\u2019s effectiveness in program understanding.
Furthermore, analysis reveals that PLBART learns program syntax, style (e.g., identifier naming convention), logical flow
(e.g., if block inside an else block is equivalent to else if block) that are crucial to program semantics and thus excels
even with limited annotations.`),pi.forEach(o),ci.forEach(o),hn=f(t),H=a(t,"P",{});var Zt=s(H);_a=d(Zt,"This model was contributed by "),Je=a(Zt,"A",{href:!0,rel:!0});var hi=s(Je);ba=d(hi,"gchhablani"),hi.forEach(o),ka=d(Zt,". The Authors\u2019 code can be found "),Ke=a(Zt,"A",{href:!0,rel:!0});var ui=s(Ke);va=d(ui,"here"),ui.forEach(o),ya=d(Zt,"."),Zt.forEach(o),un=f(t),Q=a(t,"H3",{class:!0});var jn=s(Q);ge=a(jn,"A",{id:!0,class:!0,href:!0});var mi=s(ge);uo=a(mi,"SPAN",{});var fi=s(uo);y(Qe.$$.fragment,fi),fi.forEach(o),mi.forEach(o),Ta=f(jn),mo=a(jn,"SPAN",{});var gi=s(mo);wa=d(gi,"Training of PLBart"),gi.forEach(o),jn.forEach(o),mn=f(t),C=a(t,"P",{});var V=s(C);Pa=d(V,`PLBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for code-to-text, text-to-code, code-to-code tasks. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),fo=a(V,"CODE",{});var _i=s(fo);La=d(_i,"X [eos, src_lang_code]"),_i.forEach(o),$a=d(V," where "),go=a(V,"CODE",{});var bi=s(go);qa=d(bi,"X"),bi.forEach(o),Ba=d(V,` is the source text. The
target text format is `),_o=a(V,"CODE",{});var ki=s(_o);za=d(ki,"[tgt_lang_code] X [eos]"),ki.forEach(o),xa=d(V,". "),bo=a(V,"CODE",{});var vi=s(bo);Ca=d(vi,"bos"),vi.forEach(o),Fa=d(V," is never used."),V.forEach(o),fn=f(t),_e=a(t,"P",{});var Mn=s(_e);Ea=d(Mn,"However, for fine-tuning, in some cases no language token is provided in cases where a single language is used. Please refer to "),Ye=a(Mn,"A",{href:!0,rel:!0});var yi=s(Ye);ja=d(yi,"the paper"),yi.forEach(o),Ma=d(Mn," to learn more about this."),Mn.forEach(o),gn=f(t),S=a(t,"P",{});var Ae=s(S);Sa=d(Ae,"In cases where the language code is needed, the regular "),Ze=a(Ae,"A",{href:!0});var si=s(Ze);ko=a(si,"STRONG",{});var Ti=s(ko);Aa=d(Ti,"call"),Ti.forEach(o),Na=d(si,"()"),si.forEach(o),Oa=d(Ae,` will encode source text format
when you pass texts as the first argument or with the keyword argument `),vo=a(Ae,"CODE",{});var wi=s(vo);Ia=d(wi,"text"),wi.forEach(o),Da=d(Ae,`, and will encode target text format if
it\u2019s passed with the `),yo=a(Ae,"CODE",{});var Pi=s(yo);Xa=d(Pi,"text_target"),Pi.forEach(o),Ga=d(Ae," keyword argument."),Ae.forEach(o),_n=f(t),Ot=a(t,"UL",{});var Li=s(Ot);To=a(Li,"LI",{});var $i=s(To);Ra=d($i,"Supervised training"),$i.forEach(o),Li.forEach(o),bn=f(t),y(et.$$.fragment,t),kn=f(t),It=a(t,"UL",{});var qi=s(It);tt=a(qi,"LI",{});var Sn=s(tt);wo=a(Sn,"P",{});var Bi=s(wo);Wa=d(Bi,"Generation"),Bi.forEach(o),Ha=f(Sn),Y=a(Sn,"P",{});var eo=s(Y);Ua=d(eo,"While generating the target text set the "),Po=a(eo,"CODE",{});var zi=s(Po);Va=d(zi,"decoder_start_token_id"),zi.forEach(o),Ja=d(eo,` to the target language id. The following
example shows how to translate Python to English using the `),Lo=a(eo,"CODE",{});var xi=s(Lo);Ka=d(xi,"uclanlp/plbart-python-en_XX"),xi.forEach(o),Qa=d(eo," model."),eo.forEach(o),Sn.forEach(o),qi.forEach(o),vn=f(t),y(ot.$$.fragment,t),yn=f(t),Z=a(t,"H2",{class:!0});var An=s(Z);be=a(An,"A",{id:!0,class:!0,href:!0});var Ci=s(be);$o=a(Ci,"SPAN",{});var Fi=s($o);y(nt.$$.fragment,Fi),Fi.forEach(o),Ci.forEach(o),Ya=f(An),qo=a(An,"SPAN",{});var Ei=s(qo);Za=d(Ei,"PLBartConfig"),Ei.forEach(o),An.forEach(o),Tn=f(t),E=a(t,"DIV",{class:!0});var Ne=s(E);y(at.$$.fragment,Ne),es=f(Ne),ee=a(Ne,"P",{});var to=s(ee);ts=d(to,"This is the configuration class to store the configuration of a "),Dt=a(to,"A",{href:!0});var ji=s(Dt);os=d(ji,"PLBartModel"),ji.forEach(o),ns=d(to,`. It is used to instantiate an
PLBART model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the PLBART
`),st=a(to,"A",{href:!0,rel:!0});var Mi=s(st);as=d(Mi,"uclanlp/plbart-base"),Mi.forEach(o),ss=d(to," architecture."),to.forEach(o),rs=f(Ne),te=a(Ne,"P",{});var oo=s(te);is=d(oo,"Configuration objects inherit from "),Xt=a(oo,"A",{href:!0});var Si=s(Xt);ds=d(Si,"PretrainedConfig"),Si.forEach(o),ls=d(oo,` and can be used to control the model outputs. Read the
documentation from `),Gt=a(oo,"A",{href:!0});var Ai=s(Gt);cs=d(Ai,"PretrainedConfig"),Ai.forEach(o),ps=d(oo," for more information."),oo.forEach(o),hs=f(Ne),y(ke.$$.fragment,Ne),Ne.forEach(o),wn=f(t),oe=a(t,"H2",{class:!0});var Nn=s(oe);ve=a(Nn,"A",{id:!0,class:!0,href:!0});var Ni=s(ve);Bo=a(Ni,"SPAN",{});var Oi=s(Bo);y(rt.$$.fragment,Oi),Oi.forEach(o),Ni.forEach(o),us=f(Nn),zo=a(Nn,"SPAN",{});var Ii=s(zo);ms=d(Ii,"PLBartTokenizer"),Ii.forEach(o),Nn.forEach(o),Pn=f(t),B=a(t,"DIV",{class:!0});var I=s(B);y(it.$$.fragment,I),fs=f(I),xo=a(I,"P",{});var Di=s(xo);gs=d(Di,"Construct an PLBART tokenizer."),Di.forEach(o),_s=f(I),X=a(I,"P",{});var Oe=s(X);bs=d(Oe,"Adapted from "),Rt=a(Oe,"A",{href:!0});var Xi=s(Rt);ks=d(Xi,"RobertaTokenizer"),Xi.forEach(o),vs=d(Oe," and "),Wt=a(Oe,"A",{href:!0});var Gi=s(Wt);ys=d(Gi,"XLNetTokenizer"),Gi.forEach(o),Ts=d(Oe,`. Based on
`),dt=a(Oe,"A",{href:!0,rel:!0});var Ri=s(dt);ws=d(Ri,"SentencePiece"),Ri.forEach(o),Ps=d(Oe,"."),Oe.forEach(o),Ls=f(I),ne=a(I,"P",{});var no=s(ne);$s=d(no,"The tokenization method is "),Co=a(no,"CODE",{});var Wi=s(Co);qs=d(Wi,"<tokens> <eos> <language code>"),Wi.forEach(o),Bs=d(no," for source language documents, and "),Fo=a(no,"CODE",{});var Hi=s(Fo);zs=d(Hi,"<language code> <tokens> <eos>"),Hi.forEach(o),xs=d(no," for target language documents."),no.forEach(o),Cs=f(I),y(ye.$$.fragment,I),Fs=f(I),A=a(I,"DIV",{class:!0});var Ie=s(A);y(lt.$$.fragment,Ie),Es=f(Ie),ct=a(Ie,"P",{});var On=s(ct);js=d(On,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An PLBART sequence has the following format, where `),Eo=a(On,"CODE",{});var Ui=s(Eo);Ms=d(Ui,"X"),Ui.forEach(o),Ss=d(On," represents the sequence:"),On.forEach(o),As=f(Ie),pt=a(Ie,"UL",{});var In=s(pt);ht=a(In,"LI",{});var Dn=s(ht);jo=a(Dn,"CODE",{});var Vi=s(jo);Ns=d(Vi,"input_ids"),Vi.forEach(o),Os=d(Dn," (for encoder) "),Mo=a(Dn,"CODE",{});var Ji=s(Mo);Is=d(Ji,"X [eos, src_lang_code]"),Ji.forEach(o),Dn.forEach(o),Ds=f(In),ut=a(In,"LI",{});var Xn=s(ut);So=a(Xn,"CODE",{});var Ki=s(So);Xs=d(Ki,"decoder_input_ids"),Ki.forEach(o),Gs=d(Xn,": (for decoder) "),Ao=a(Xn,"CODE",{});var Qi=s(Ao);Rs=d(Qi,"X [eos, tgt_lang_code]"),Qi.forEach(o),Xn.forEach(o),In.forEach(o),Ws=f(Ie),No=a(Ie,"P",{});var Yi=s(No);Hs=d(Yi,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Yi.forEach(o),Ie.forEach(o),I.forEach(o),Ln=f(t),ae=a(t,"H2",{class:!0});var Gn=s(ae);Te=a(Gn,"A",{id:!0,class:!0,href:!0});var Zi=s(Te);Oo=a(Zi,"SPAN",{});var ed=s(Oo);y(mt.$$.fragment,ed),ed.forEach(o),Zi.forEach(o),Us=f(Gn),Io=a(Gn,"SPAN",{});var td=s(Io);Vs=d(td,"PLBartModel"),td.forEach(o),Gn.forEach(o),$n=f(t),j=a(t,"DIV",{class:!0});var De=s(j);y(ft.$$.fragment,De),Js=f(De),gt=a(De,"P",{});var Rn=s(gt);Ks=d(Rn,`The bare PLBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ht=a(Rn,"A",{href:!0});var od=s(Ht);Qs=d(od,"PreTrainedModel"),od.forEach(o),Ys=d(Rn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rn.forEach(o),Zs=f(De),_t=a(De,"P",{});var Wn=s(_t);er=d(Wn,"This model is also a PyTorch "),bt=a(Wn,"A",{href:!0,rel:!0});var nd=s(bt);tr=d(nd,"torch.nn.Module"),nd.forEach(o),or=d(Wn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wn.forEach(o),nr=f(De),N=a(De,"DIV",{class:!0});var Xe=s(N);y(kt.$$.fragment,Xe),ar=f(Xe),se=a(Xe,"P",{});var ao=s(se);sr=d(ao,"The "),Ut=a(ao,"A",{href:!0});var ad=s(Ut);rr=d(ad,"PLBartModel"),ad.forEach(o),ir=d(ao," forward method, overrides the "),Do=a(ao,"CODE",{});var sd=s(Do);dr=d(sd,"__call__"),sd.forEach(o),lr=d(ao," special method."),ao.forEach(o),cr=f(Xe),y(we.$$.fragment,Xe),pr=f(Xe),y(Pe.$$.fragment,Xe),Xe.forEach(o),De.forEach(o),qn=f(t),re=a(t,"H2",{class:!0});var Hn=s(re);Le=a(Hn,"A",{id:!0,class:!0,href:!0});var rd=s(Le);Xo=a(rd,"SPAN",{});var id=s(Xo);y(vt.$$.fragment,id),id.forEach(o),rd.forEach(o),hr=f(Hn),Go=a(Hn,"SPAN",{});var dd=s(Go);ur=d(dd,"PLBartForConditionalGeneration"),dd.forEach(o),Hn.forEach(o),Bn=f(t),M=a(t,"DIV",{class:!0});var Ge=s(M);y(yt.$$.fragment,Ge),mr=f(Ge),Tt=a(Ge,"P",{});var Un=s(Tt);fr=d(Un,`The PLBART Model with a language modeling head. Can be used for code-to-text, text-to-code and code-to-code.
This model inherits from `),Vt=a(Un,"A",{href:!0});var ld=s(Vt);gr=d(ld,"PreTrainedModel"),ld.forEach(o),_r=d(Un,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Un.forEach(o),br=f(Ge),wt=a(Ge,"P",{});var Vn=s(wt);kr=d(Vn,"This model is also a PyTorch "),Pt=a(Vn,"A",{href:!0,rel:!0});var cd=s(Pt);vr=d(cd,"torch.nn.Module"),cd.forEach(o),yr=d(Vn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vn.forEach(o),Tr=f(Ge),O=a(Ge,"DIV",{class:!0});var Re=s(O);y(Lt.$$.fragment,Re),wr=f(Re),ie=a(Re,"P",{});var so=s(ie);Pr=d(so,"The "),Jt=a(so,"A",{href:!0});var pd=s(Jt);Lr=d(pd,"PLBartForConditionalGeneration"),pd.forEach(o),$r=d(so," forward method, overrides the "),Ro=a(so,"CODE",{});var hd=s(Ro);qr=d(hd,"__call__"),hd.forEach(o),Br=d(so," special method."),so.forEach(o),zr=f(Re),y($e.$$.fragment,Re),xr=f(Re),y(qe.$$.fragment,Re),Re.forEach(o),Ge.forEach(o),zn=f(t),de=a(t,"H2",{class:!0});var Jn=s(de);Be=a(Jn,"A",{id:!0,class:!0,href:!0});var ud=s(Be);Wo=a(ud,"SPAN",{});var md=s(Wo);y($t.$$.fragment,md),md.forEach(o),ud.forEach(o),Cr=f(Jn),Ho=a(Jn,"SPAN",{});var fd=s(Ho);Fr=d(fd,"PLBartForSequenceClassification"),fd.forEach(o),Jn.forEach(o),xn=f(t),z=a(t,"DIV",{class:!0});var J=s(z);y(qt.$$.fragment,J),Er=f(J),Uo=a(J,"P",{});var gd=s(Uo);jr=d(gd,`PLBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for code
classification.`),gd.forEach(o),Mr=f(J),Bt=a(J,"P",{});var Kn=s(Bt);Sr=d(Kn,"This model inherits from "),Kt=a(Kn,"A",{href:!0});var _d=s(Kt);Ar=d(_d,"PreTrainedModel"),_d.forEach(o),Nr=d(Kn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kn.forEach(o),Or=f(J),zt=a(J,"P",{});var Qn=s(zt);Ir=d(Qn,"This model is also a PyTorch "),xt=a(Qn,"A",{href:!0,rel:!0});var bd=s(xt);Dr=d(bd,"torch.nn.Module"),bd.forEach(o),Xr=d(Qn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn.forEach(o),Gr=f(J),q=a(J,"DIV",{class:!0});var F=s(q);y(Ct.$$.fragment,F),Rr=f(F),le=a(F,"P",{});var ro=s(le);Wr=d(ro,"The "),Qt=a(ro,"A",{href:!0});var kd=s(Qt);Hr=d(kd,"PLBartForSequenceClassification"),kd.forEach(o),Ur=d(ro," forward method, overrides the "),Vo=a(ro,"CODE",{});var vd=s(Vo);Vr=d(vd,"__call__"),vd.forEach(o),Jr=d(ro," special method."),ro.forEach(o),Kr=f(F),y(ze.$$.fragment,F),Qr=f(F),y(xe.$$.fragment,F),Yr=f(F),y(Ce.$$.fragment,F),Zr=f(F),y(Fe.$$.fragment,F),ei=f(F),y(Ee.$$.fragment,F),F.forEach(o),J.forEach(o),Cn=f(t),ce=a(t,"H2",{class:!0});var Yn=s(ce);je=a(Yn,"A",{id:!0,class:!0,href:!0});var yd=s(je);Jo=a(yd,"SPAN",{});var Td=s(Jo);y(Ft.$$.fragment,Td),Td.forEach(o),yd.forEach(o),ti=f(Yn),Ko=a(Yn,"SPAN",{});var wd=s(Ko);oi=d(wd,"PLBartForCausalLM"),wd.forEach(o),Yn.forEach(o),Fn=f(t),pe=a(t,"DIV",{class:!0});var Zn=s(pe);y(Et.$$.fragment,Zn),ni=f(Zn),Me=a(Zn,"DIV",{class:!0});var ea=s(Me);y(jt.$$.fragment,ea),ai=f(ea),y(Se.$$.fragment,ea),ea.forEach(o),Zn.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(Xd)),c(u,"id","plbart"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#plbart"),c(p,"class","relative group"),c(We,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(We,"rel","nofollow"),c(He,"href","https://www.github.com/gchhablani"),c(He,"rel","nofollow"),c(fe,"id","overview-of-plbart"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#overview-of-plbart"),c(K,"class","relative group"),c(Ve,"href","https://arxiv.org/abs/2103.06333"),c(Ve,"rel","nofollow"),c(Je,"href","https://huggingface.co/gchhablani"),c(Je,"rel","nofollow"),c(Ke,"href","https://github.com/wasiahmad/PLBART"),c(Ke,"rel","nofollow"),c(ge,"id","training-of-plbart"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#training-of-plbart"),c(Q,"class","relative group"),c(Ye,"href","https://arxiv.org/abs/2103.06333"),c(Ye,"rel","nofollow"),c(Ze,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(be,"id","transformers.PLBartConfig"),c(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(be,"href","#transformers.PLBartConfig"),c(Z,"class","relative group"),c(Dt,"href","/docs/transformers/main/en/model_doc/plbart#transformers.PLBartModel"),c(st,"href","https://huggingface.co/uclanlp/plbart-base"),c(st,"rel","nofollow"),c(Xt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Gt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ve,"id","transformers.PLBartTokenizer"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#transformers.PLBartTokenizer"),c(oe,"class","relative group"),c(Rt,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Wt,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(dt,"href","https://github.com/google/sentencepiece"),c(dt,"rel","nofollow"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.PLBartModel"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.PLBartModel"),c(ae,"class","relative group"),c(Ht,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(bt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bt,"rel","nofollow"),c(Ut,"href","/docs/transformers/main/en/model_doc/plbart#transformers.PLBartModel"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.PLBartForConditionalGeneration"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.PLBartForConditionalGeneration"),c(re,"class","relative group"),c(Vt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Pt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Pt,"rel","nofollow"),c(Jt,"href","/docs/transformers/main/en/model_doc/plbart#transformers.PLBartForConditionalGeneration"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"id","transformers.PLBartForSequenceClassification"),c(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Be,"href","#transformers.PLBartForSequenceClassification"),c(de,"class","relative group"),c(Kt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xt,"rel","nofollow"),c(Qt,"href","/docs/transformers/main/en/model_doc/plbart#transformers.PLBartForSequenceClassification"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"id","transformers.PLBartForCausalLM"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#transformers.PLBartForCausalLM"),c(ce,"class","relative group"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,h){e(document.head,l),_(t,b,h),_(t,p,h),e(p,u),e(u,k),T(r,k,null),e(p,g),e(p,x),e(x,ta),_(t,rn,h),_(t,D,h),e(D,io),e(io,oa),e(D,na),e(D,We),e(We,aa),e(D,sa),e(D,He),e(He,ra),e(D,ia),_(t,dn,h),_(t,K,h),e(K,fe),e(fe,lo),T(Ue,lo,null),e(K,da),e(K,co),e(co,la),_(t,ln,h),_(t,W,h),e(W,ca),e(W,Ve),e(Ve,pa),e(W,ha),e(W,po),e(po,ua),e(W,ma),_(t,cn,h),_(t,At,h),e(At,fa),_(t,pn,h),_(t,Nt,h),e(Nt,ho),e(ho,ga),_(t,hn,h),_(t,H,h),e(H,_a),e(H,Je),e(Je,ba),e(H,ka),e(H,Ke),e(Ke,va),e(H,ya),_(t,un,h),_(t,Q,h),e(Q,ge),e(ge,uo),T(Qe,uo,null),e(Q,Ta),e(Q,mo),e(mo,wa),_(t,mn,h),_(t,C,h),e(C,Pa),e(C,fo),e(fo,La),e(C,$a),e(C,go),e(go,qa),e(C,Ba),e(C,_o),e(_o,za),e(C,xa),e(C,bo),e(bo,Ca),e(C,Fa),_(t,fn,h),_(t,_e,h),e(_e,Ea),e(_e,Ye),e(Ye,ja),e(_e,Ma),_(t,gn,h),_(t,S,h),e(S,Sa),e(S,Ze),e(Ze,ko),e(ko,Aa),e(Ze,Na),e(S,Oa),e(S,vo),e(vo,Ia),e(S,Da),e(S,yo),e(yo,Xa),e(S,Ga),_(t,_n,h),_(t,Ot,h),e(Ot,To),e(To,Ra),_(t,bn,h),T(et,t,h),_(t,kn,h),_(t,It,h),e(It,tt),e(tt,wo),e(wo,Wa),e(tt,Ha),e(tt,Y),e(Y,Ua),e(Y,Po),e(Po,Va),e(Y,Ja),e(Y,Lo),e(Lo,Ka),e(Y,Qa),_(t,vn,h),T(ot,t,h),_(t,yn,h),_(t,Z,h),e(Z,be),e(be,$o),T(nt,$o,null),e(Z,Ya),e(Z,qo),e(qo,Za),_(t,Tn,h),_(t,E,h),T(at,E,null),e(E,es),e(E,ee),e(ee,ts),e(ee,Dt),e(Dt,os),e(ee,ns),e(ee,st),e(st,as),e(ee,ss),e(E,rs),e(E,te),e(te,is),e(te,Xt),e(Xt,ds),e(te,ls),e(te,Gt),e(Gt,cs),e(te,ps),e(E,hs),T(ke,E,null),_(t,wn,h),_(t,oe,h),e(oe,ve),e(ve,Bo),T(rt,Bo,null),e(oe,us),e(oe,zo),e(zo,ms),_(t,Pn,h),_(t,B,h),T(it,B,null),e(B,fs),e(B,xo),e(xo,gs),e(B,_s),e(B,X),e(X,bs),e(X,Rt),e(Rt,ks),e(X,vs),e(X,Wt),e(Wt,ys),e(X,Ts),e(X,dt),e(dt,ws),e(X,Ps),e(B,Ls),e(B,ne),e(ne,$s),e(ne,Co),e(Co,qs),e(ne,Bs),e(ne,Fo),e(Fo,zs),e(ne,xs),e(B,Cs),T(ye,B,null),e(B,Fs),e(B,A),T(lt,A,null),e(A,Es),e(A,ct),e(ct,js),e(ct,Eo),e(Eo,Ms),e(ct,Ss),e(A,As),e(A,pt),e(pt,ht),e(ht,jo),e(jo,Ns),e(ht,Os),e(ht,Mo),e(Mo,Is),e(pt,Ds),e(pt,ut),e(ut,So),e(So,Xs),e(ut,Gs),e(ut,Ao),e(Ao,Rs),e(A,Ws),e(A,No),e(No,Hs),_(t,Ln,h),_(t,ae,h),e(ae,Te),e(Te,Oo),T(mt,Oo,null),e(ae,Us),e(ae,Io),e(Io,Vs),_(t,$n,h),_(t,j,h),T(ft,j,null),e(j,Js),e(j,gt),e(gt,Ks),e(gt,Ht),e(Ht,Qs),e(gt,Ys),e(j,Zs),e(j,_t),e(_t,er),e(_t,bt),e(bt,tr),e(_t,or),e(j,nr),e(j,N),T(kt,N,null),e(N,ar),e(N,se),e(se,sr),e(se,Ut),e(Ut,rr),e(se,ir),e(se,Do),e(Do,dr),e(se,lr),e(N,cr),T(we,N,null),e(N,pr),T(Pe,N,null),_(t,qn,h),_(t,re,h),e(re,Le),e(Le,Xo),T(vt,Xo,null),e(re,hr),e(re,Go),e(Go,ur),_(t,Bn,h),_(t,M,h),T(yt,M,null),e(M,mr),e(M,Tt),e(Tt,fr),e(Tt,Vt),e(Vt,gr),e(Tt,_r),e(M,br),e(M,wt),e(wt,kr),e(wt,Pt),e(Pt,vr),e(wt,yr),e(M,Tr),e(M,O),T(Lt,O,null),e(O,wr),e(O,ie),e(ie,Pr),e(ie,Jt),e(Jt,Lr),e(ie,$r),e(ie,Ro),e(Ro,qr),e(ie,Br),e(O,zr),T($e,O,null),e(O,xr),T(qe,O,null),_(t,zn,h),_(t,de,h),e(de,Be),e(Be,Wo),T($t,Wo,null),e(de,Cr),e(de,Ho),e(Ho,Fr),_(t,xn,h),_(t,z,h),T(qt,z,null),e(z,Er),e(z,Uo),e(Uo,jr),e(z,Mr),e(z,Bt),e(Bt,Sr),e(Bt,Kt),e(Kt,Ar),e(Bt,Nr),e(z,Or),e(z,zt),e(zt,Ir),e(zt,xt),e(xt,Dr),e(zt,Xr),e(z,Gr),e(z,q),T(Ct,q,null),e(q,Rr),e(q,le),e(le,Wr),e(le,Qt),e(Qt,Hr),e(le,Ur),e(le,Vo),e(Vo,Vr),e(le,Jr),e(q,Kr),T(ze,q,null),e(q,Qr),T(xe,q,null),e(q,Yr),T(Ce,q,null),e(q,Zr),T(Fe,q,null),e(q,ei),T(Ee,q,null),_(t,Cn,h),_(t,ce,h),e(ce,je),e(je,Jo),T(Ft,Jo,null),e(ce,ti),e(ce,Ko),e(Ko,oi),_(t,Fn,h),_(t,pe,h),T(Et,pe,null),e(pe,ni),e(pe,Me),T(jt,Me,null),e(Me,ai),T(Se,Me,null),En=!0},p(t,[h]){const Mt={};h&2&&(Mt.$$scope={dirty:h,ctx:t}),ke.$set(Mt);const Qo={};h&2&&(Qo.$$scope={dirty:h,ctx:t}),ye.$set(Qo);const Yo={};h&2&&(Yo.$$scope={dirty:h,ctx:t}),we.$set(Yo);const Zo={};h&2&&(Zo.$$scope={dirty:h,ctx:t}),Pe.$set(Zo);const U={};h&2&&(U.$$scope={dirty:h,ctx:t}),$e.$set(U);const en={};h&2&&(en.$$scope={dirty:h,ctx:t}),qe.$set(en);const tn={};h&2&&(tn.$$scope={dirty:h,ctx:t}),ze.$set(tn);const on={};h&2&&(on.$$scope={dirty:h,ctx:t}),xe.$set(on);const St={};h&2&&(St.$$scope={dirty:h,ctx:t}),Ce.$set(St);const nn={};h&2&&(nn.$$scope={dirty:h,ctx:t}),Fe.$set(nn);const an={};h&2&&(an.$$scope={dirty:h,ctx:t}),Ee.$set(an);const sn={};h&2&&(sn.$$scope={dirty:h,ctx:t}),Se.$set(sn)},i(t){En||(w(r.$$.fragment,t),w(Ue.$$.fragment,t),w(Qe.$$.fragment,t),w(et.$$.fragment,t),w(ot.$$.fragment,t),w(nt.$$.fragment,t),w(at.$$.fragment,t),w(ke.$$.fragment,t),w(rt.$$.fragment,t),w(it.$$.fragment,t),w(ye.$$.fragment,t),w(lt.$$.fragment,t),w(mt.$$.fragment,t),w(ft.$$.fragment,t),w(kt.$$.fragment,t),w(we.$$.fragment,t),w(Pe.$$.fragment,t),w(vt.$$.fragment,t),w(yt.$$.fragment,t),w(Lt.$$.fragment,t),w($e.$$.fragment,t),w(qe.$$.fragment,t),w($t.$$.fragment,t),w(qt.$$.fragment,t),w(Ct.$$.fragment,t),w(ze.$$.fragment,t),w(xe.$$.fragment,t),w(Ce.$$.fragment,t),w(Fe.$$.fragment,t),w(Ee.$$.fragment,t),w(Ft.$$.fragment,t),w(Et.$$.fragment,t),w(jt.$$.fragment,t),w(Se.$$.fragment,t),En=!0)},o(t){P(r.$$.fragment,t),P(Ue.$$.fragment,t),P(Qe.$$.fragment,t),P(et.$$.fragment,t),P(ot.$$.fragment,t),P(nt.$$.fragment,t),P(at.$$.fragment,t),P(ke.$$.fragment,t),P(rt.$$.fragment,t),P(it.$$.fragment,t),P(ye.$$.fragment,t),P(lt.$$.fragment,t),P(mt.$$.fragment,t),P(ft.$$.fragment,t),P(kt.$$.fragment,t),P(we.$$.fragment,t),P(Pe.$$.fragment,t),P(vt.$$.fragment,t),P(yt.$$.fragment,t),P(Lt.$$.fragment,t),P($e.$$.fragment,t),P(qe.$$.fragment,t),P($t.$$.fragment,t),P(qt.$$.fragment,t),P(Ct.$$.fragment,t),P(ze.$$.fragment,t),P(xe.$$.fragment,t),P(Ce.$$.fragment,t),P(Fe.$$.fragment,t),P(Ee.$$.fragment,t),P(Ft.$$.fragment,t),P(Et.$$.fragment,t),P(jt.$$.fragment,t),P(Se.$$.fragment,t),En=!1},d(t){o(l),t&&o(b),t&&o(p),L(r),t&&o(rn),t&&o(D),t&&o(dn),t&&o(K),L(Ue),t&&o(ln),t&&o(W),t&&o(cn),t&&o(At),t&&o(pn),t&&o(Nt),t&&o(hn),t&&o(H),t&&o(un),t&&o(Q),L(Qe),t&&o(mn),t&&o(C),t&&o(fn),t&&o(_e),t&&o(gn),t&&o(S),t&&o(_n),t&&o(Ot),t&&o(bn),L(et,t),t&&o(kn),t&&o(It),t&&o(vn),L(ot,t),t&&o(yn),t&&o(Z),L(nt),t&&o(Tn),t&&o(E),L(at),L(ke),t&&o(wn),t&&o(oe),L(rt),t&&o(Pn),t&&o(B),L(it),L(ye),L(lt),t&&o(Ln),t&&o(ae),L(mt),t&&o($n),t&&o(j),L(ft),L(kt),L(we),L(Pe),t&&o(qn),t&&o(re),L(vt),t&&o(Bn),t&&o(M),L(yt),L(Lt),L($e),L(qe),t&&o(zn),t&&o(de),L($t),t&&o(xn),t&&o(z),L(qt),L(Ct),L(ze),L(xe),L(Ce),L(Fe),L(Ee),t&&o(Cn),t&&o(ce),L(Ft),t&&o(Fn),t&&o(pe),L(Et),L(jt),L(Se)}}}const Xd={local:"plbart",sections:[{local:"overview-of-plbart",sections:[{local:"training-of-plbart",title:"Training of PLBart"}],title:"Overview of PLBart"},{local:"transformers.PLBartConfig",title:"PLBartConfig"},{local:"transformers.PLBartTokenizer",title:"PLBartTokenizer"},{local:"transformers.PLBartModel",title:"PLBartModel"},{local:"transformers.PLBartForConditionalGeneration",title:"PLBartForConditionalGeneration"},{local:"transformers.PLBartForSequenceClassification",title:"PLBartForSequenceClassification"},{local:"transformers.PLBartForCausalLM",title:"PLBartForCausalLM"}],title:"PLBart"};function Gd($){return Bd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kd extends Pd{constructor(l){super();Ld(this,l,Gd,Dd,$d,{})}}export{Kd as default,Xd as metadata};
