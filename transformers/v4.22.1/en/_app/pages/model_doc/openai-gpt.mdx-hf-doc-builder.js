import{S as ku,i as wu,s as $u,e as a,k as c,w as k,t as n,M as Pu,c as r,d as t,m as p,a as i,x as w,h as s,b as f,G as e,g,y as $,q as P,o as O,B as I,v as Ou,L as ut}from"../../chunks/vendor-hf-doc-builder.js";import{T as Pt}from"../../chunks/Tip-hf-doc-builder.js";import{D as pe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as dt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as lt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as mt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Iu(E){let d,v,m,u,y;return u=new dt({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

# Initializing a GPT configuration
configuration = OpenAIGPTConfig()

# Initializing a model from the configuration
model = OpenAIGPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTConfig, OpenAIGPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OpenAIGPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=n("Examples:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Examples:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function Au(E){let d,v,m,u,y;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,v),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Gu(E){let d,v,m,u,y;return u=new dt({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function Mu(E){let d,v,m,u,y;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,v),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Eu(E){let d,v,m,u,y;return u=new dt({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function Fu(E){let d,v,m,u,y;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,v),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function zu(E){let d,v,m,u,y;return u=new dt({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")
tokenizer.add_special_tokens(
    {"cls_token": "[CLS]"}
)  # Add a [CLS] to the vocabulary (we should train it also!)
model.resize_token_embeddings(len(tokenizer))

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
input_ids = torch.tensor([tokenizer.encode(s) for s in choices]).unsqueeze(0)  # Batch size 1, 2 choices
mc_token_ids = torch.tensor([input_ids.size(-1) - 1, input_ids.size(-1) - 1]).unsqueeze(0)  # Batch size 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_logits = outputs.logits
mc_logits = outputs.mc_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens(
<span class="hljs-meta">... </span>    {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>}
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, 2 choices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>, input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=a("p"),v=n("Examples:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Examples:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function qu(E){let d,v,m,u,y;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,v),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Cu(E){let d,v,m,u,y;return u=new dt({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),v=n("Example of single-label classification:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Example of single-label classification:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function ju(E){let d,v;return d=new dt({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){$(d,m,u),v=!0},p:ut,i(m){v||(P(d.$$.fragment,m),v=!0)},o(m){O(d.$$.fragment,m),v=!1},d(m){I(d,m)}}}function xu(E){let d,v,m,u,y;return u=new dt({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),v=n("Example of multi-label classification:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Example of multi-label classification:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function Du(E){let d,v;return d=new dt({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OpenAIGPTForSequenceClassification.from_pretrained(
    "openai-gpt", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){$(d,m,u),v=!0},p:ut,i(m){v||(P(d.$$.fragment,m),v=!0)},o(m){O(d.$$.fragment,m),v=!1},d(m){I(d,m)}}}function Hu(E){let d,v,m,u,y,l,h,M,we,ge,x,oe,te,b,$e,K,Pe,_e,D,Oe,se,V,Ie,Te,B,Ae,ve,U,he,Ge,ne,F,q,ye,H,me,Me,J,ae,Ee,z,Fe,X,be,re,N,ze,qe,S,Z,Q,ie,le,C,de,j,Ce,ke;return{c(){d=a("p"),v=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=c(),x=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),b=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Pe=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),Oe=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ie=n("fit()"),Te=n(" and "),B=a("code"),Ae=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),he=n("Functional"),Ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),F=a("ul"),q=a("li"),ye=n("a single Tensor with "),H=a("code"),me=n("input_ids"),Me=n(" only and nothing else: "),J=a("code"),ae=n("model(input_ids)"),Ee=c(),z=a("li"),Fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=a("code"),be=n("model([input_ids, attention_mask])"),re=n(" or "),N=a("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),S=a("li"),Z=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),ie=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),le=c(),C=a("p"),de=n(`Note that when creating models and layers with
`),j=a("a"),Ce=n("subclassing"),ke=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(T){d=r(T,"P",{});var A=i(d);v=s(A,"TensorFlow models and layers in "),m=r(A,"CODE",{});var Ue=i(m);u=s(Ue,"transformers"),Ue.forEach(t),y=s(A," accept two formats as input:"),A.forEach(t),l=p(T),h=r(T,"UL",{});var L=i(h);M=r(L,"LI",{});var Ve=i(M);we=s(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),ge=p(L),x=r(L,"LI",{});var De=i(x);oe=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),L.forEach(t),te=p(T),b=r(T,"P",{});var G=i(b);$e=s(G,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(G,"CODE",{});var Je=i(K);Pe=s(Je,"model.fit()"),Je.forEach(t),_e=s(G,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(G,"CODE",{});var He=i(D);Oe=s(He,"model.fit()"),He.forEach(t),se=s(G,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(G,"CODE",{});var Xe=i(V);Ie=s(Xe,"fit()"),Xe.forEach(t),Te=s(G," and "),B=r(G,"CODE",{});var Qe=i(B);Ae=s(Qe,"predict()"),Qe.forEach(t),ve=s(G,`, such as when creating your own layers or models with
the Keras `),U=r(G,"CODE",{});var Se=i(U);he=s(Se,"Functional"),Se.forEach(t),Ge=s(G,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),G.forEach(t),ne=p(T),F=r(T,"UL",{});var W=i(F);q=r(W,"LI",{});var Y=i(q);ye=s(Y,"a single Tensor with "),H=r(Y,"CODE",{});var Ke=i(H);me=s(Ke,"input_ids"),Ke.forEach(t),Me=s(Y," only and nothing else: "),J=r(Y,"CODE",{});var je=i(J);ae=s(je,"model(input_ids)"),je.forEach(t),Y.forEach(t),Ee=p(W),z=r(W,"LI",{});var R=i(z);Fe=s(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=r(R,"CODE",{});var ee=i(X);be=s(ee,"model([input_ids, attention_mask])"),ee.forEach(t),re=s(R," or "),N=r(R,"CODE",{});var Ye=i(N);ze=s(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),qe=p(W),S=r(W,"LI",{});var ue=i(S);Z=s(ue,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(ue,"CODE",{});var Ze=i(Q);ie=s(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ue.forEach(t),W.forEach(t),le=p(T),C=r(T,"P",{});var ce=i(C);de=s(ce,`Note that when creating models and layers with
`),j=r(ce,"A",{href:!0,rel:!0});var Le=i(j);Ce=s(Le,"subclassing"),Le.forEach(t),ke=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(j,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(j,"rel","nofollow")},m(T,A){g(T,d,A),e(d,v),e(d,m),e(m,u),e(d,y),g(T,l,A),g(T,h,A),e(h,M),e(M,we),e(h,ge),e(h,x),e(x,oe),g(T,te,A),g(T,b,A),e(b,$e),e(b,K),e(K,Pe),e(b,_e),e(b,D),e(D,Oe),e(b,se),e(b,V),e(V,Ie),e(b,Te),e(b,B),e(B,Ae),e(b,ve),e(b,U),e(U,he),e(b,Ge),g(T,ne,A),g(T,F,A),e(F,q),e(q,ye),e(q,H),e(H,me),e(q,Me),e(q,J),e(J,ae),e(F,Ee),e(F,z),e(z,Fe),e(z,X),e(X,be),e(z,re),e(z,N),e(N,ze),e(F,qe),e(F,S),e(S,Z),e(S,Q),e(Q,ie),g(T,le,A),g(T,C,A),e(C,de),e(C,j),e(j,Ce),e(C,ke)},d(T){T&&t(d),T&&t(l),T&&t(h),T&&t(te),T&&t(b),T&&t(ne),T&&t(F),T&&t(le),T&&t(C)}}}function Su(E){let d,v,m,u,y;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,v),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Lu(E){let d,v,m,u,y;return u=new dt({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function Nu(E){let d,v,m,u,y,l,h,M,we,ge,x,oe,te,b,$e,K,Pe,_e,D,Oe,se,V,Ie,Te,B,Ae,ve,U,he,Ge,ne,F,q,ye,H,me,Me,J,ae,Ee,z,Fe,X,be,re,N,ze,qe,S,Z,Q,ie,le,C,de,j,Ce,ke;return{c(){d=a("p"),v=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=c(),x=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),b=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Pe=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),Oe=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ie=n("fit()"),Te=n(" and "),B=a("code"),Ae=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),he=n("Functional"),Ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),F=a("ul"),q=a("li"),ye=n("a single Tensor with "),H=a("code"),me=n("input_ids"),Me=n(" only and nothing else: "),J=a("code"),ae=n("model(input_ids)"),Ee=c(),z=a("li"),Fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=a("code"),be=n("model([input_ids, attention_mask])"),re=n(" or "),N=a("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),S=a("li"),Z=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),ie=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),le=c(),C=a("p"),de=n(`Note that when creating models and layers with
`),j=a("a"),Ce=n("subclassing"),ke=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(T){d=r(T,"P",{});var A=i(d);v=s(A,"TensorFlow models and layers in "),m=r(A,"CODE",{});var Ue=i(m);u=s(Ue,"transformers"),Ue.forEach(t),y=s(A," accept two formats as input:"),A.forEach(t),l=p(T),h=r(T,"UL",{});var L=i(h);M=r(L,"LI",{});var Ve=i(M);we=s(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),ge=p(L),x=r(L,"LI",{});var De=i(x);oe=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),L.forEach(t),te=p(T),b=r(T,"P",{});var G=i(b);$e=s(G,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(G,"CODE",{});var Je=i(K);Pe=s(Je,"model.fit()"),Je.forEach(t),_e=s(G,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(G,"CODE",{});var He=i(D);Oe=s(He,"model.fit()"),He.forEach(t),se=s(G,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(G,"CODE",{});var Xe=i(V);Ie=s(Xe,"fit()"),Xe.forEach(t),Te=s(G," and "),B=r(G,"CODE",{});var Qe=i(B);Ae=s(Qe,"predict()"),Qe.forEach(t),ve=s(G,`, such as when creating your own layers or models with
the Keras `),U=r(G,"CODE",{});var Se=i(U);he=s(Se,"Functional"),Se.forEach(t),Ge=s(G,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),G.forEach(t),ne=p(T),F=r(T,"UL",{});var W=i(F);q=r(W,"LI",{});var Y=i(q);ye=s(Y,"a single Tensor with "),H=r(Y,"CODE",{});var Ke=i(H);me=s(Ke,"input_ids"),Ke.forEach(t),Me=s(Y," only and nothing else: "),J=r(Y,"CODE",{});var je=i(J);ae=s(je,"model(input_ids)"),je.forEach(t),Y.forEach(t),Ee=p(W),z=r(W,"LI",{});var R=i(z);Fe=s(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=r(R,"CODE",{});var ee=i(X);be=s(ee,"model([input_ids, attention_mask])"),ee.forEach(t),re=s(R," or "),N=r(R,"CODE",{});var Ye=i(N);ze=s(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),qe=p(W),S=r(W,"LI",{});var ue=i(S);Z=s(ue,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(ue,"CODE",{});var Ze=i(Q);ie=s(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ue.forEach(t),W.forEach(t),le=p(T),C=r(T,"P",{});var ce=i(C);de=s(ce,`Note that when creating models and layers with
`),j=r(ce,"A",{href:!0,rel:!0});var Le=i(j);Ce=s(Le,"subclassing"),Le.forEach(t),ke=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(j,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(j,"rel","nofollow")},m(T,A){g(T,d,A),e(d,v),e(d,m),e(m,u),e(d,y),g(T,l,A),g(T,h,A),e(h,M),e(M,we),e(h,ge),e(h,x),e(x,oe),g(T,te,A),g(T,b,A),e(b,$e),e(b,K),e(K,Pe),e(b,_e),e(b,D),e(D,Oe),e(b,se),e(b,V),e(V,Ie),e(b,Te),e(b,B),e(B,Ae),e(b,ve),e(b,U),e(U,he),e(b,Ge),g(T,ne,A),g(T,F,A),e(F,q),e(q,ye),e(q,H),e(H,me),e(q,Me),e(q,J),e(J,ae),e(F,Ee),e(F,z),e(z,Fe),e(z,X),e(X,be),e(z,re),e(z,N),e(N,ze),e(F,qe),e(F,S),e(S,Z),e(S,Q),e(Q,ie),g(T,le,A),g(T,C,A),e(C,de),e(C,j),e(j,Ce),e(C,ke)},d(T){T&&t(d),T&&t(l),T&&t(h),T&&t(te),T&&t(b),T&&t(ne),T&&t(F),T&&t(le),T&&t(C)}}}function Wu(E){let d,v,m,u,y;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,v),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Bu(E){let d,v,m,u,y;return u=new dt({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function Uu(E){let d,v,m,u,y,l,h,M,we,ge,x,oe,te,b,$e,K,Pe,_e,D,Oe,se,V,Ie,Te,B,Ae,ve,U,he,Ge,ne,F,q,ye,H,me,Me,J,ae,Ee,z,Fe,X,be,re,N,ze,qe,S,Z,Q,ie,le,C,de,j,Ce,ke;return{c(){d=a("p"),v=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=c(),x=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),b=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Pe=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),Oe=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ie=n("fit()"),Te=n(" and "),B=a("code"),Ae=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),he=n("Functional"),Ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),F=a("ul"),q=a("li"),ye=n("a single Tensor with "),H=a("code"),me=n("input_ids"),Me=n(" only and nothing else: "),J=a("code"),ae=n("model(input_ids)"),Ee=c(),z=a("li"),Fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=a("code"),be=n("model([input_ids, attention_mask])"),re=n(" or "),N=a("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),S=a("li"),Z=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),ie=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),le=c(),C=a("p"),de=n(`Note that when creating models and layers with
`),j=a("a"),Ce=n("subclassing"),ke=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(T){d=r(T,"P",{});var A=i(d);v=s(A,"TensorFlow models and layers in "),m=r(A,"CODE",{});var Ue=i(m);u=s(Ue,"transformers"),Ue.forEach(t),y=s(A," accept two formats as input:"),A.forEach(t),l=p(T),h=r(T,"UL",{});var L=i(h);M=r(L,"LI",{});var Ve=i(M);we=s(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),ge=p(L),x=r(L,"LI",{});var De=i(x);oe=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),L.forEach(t),te=p(T),b=r(T,"P",{});var G=i(b);$e=s(G,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(G,"CODE",{});var Je=i(K);Pe=s(Je,"model.fit()"),Je.forEach(t),_e=s(G,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(G,"CODE",{});var He=i(D);Oe=s(He,"model.fit()"),He.forEach(t),se=s(G,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(G,"CODE",{});var Xe=i(V);Ie=s(Xe,"fit()"),Xe.forEach(t),Te=s(G," and "),B=r(G,"CODE",{});var Qe=i(B);Ae=s(Qe,"predict()"),Qe.forEach(t),ve=s(G,`, such as when creating your own layers or models with
the Keras `),U=r(G,"CODE",{});var Se=i(U);he=s(Se,"Functional"),Se.forEach(t),Ge=s(G,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),G.forEach(t),ne=p(T),F=r(T,"UL",{});var W=i(F);q=r(W,"LI",{});var Y=i(q);ye=s(Y,"a single Tensor with "),H=r(Y,"CODE",{});var Ke=i(H);me=s(Ke,"input_ids"),Ke.forEach(t),Me=s(Y," only and nothing else: "),J=r(Y,"CODE",{});var je=i(J);ae=s(je,"model(input_ids)"),je.forEach(t),Y.forEach(t),Ee=p(W),z=r(W,"LI",{});var R=i(z);Fe=s(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=r(R,"CODE",{});var ee=i(X);be=s(ee,"model([input_ids, attention_mask])"),ee.forEach(t),re=s(R," or "),N=r(R,"CODE",{});var Ye=i(N);ze=s(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),qe=p(W),S=r(W,"LI",{});var ue=i(S);Z=s(ue,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(ue,"CODE",{});var Ze=i(Q);ie=s(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ue.forEach(t),W.forEach(t),le=p(T),C=r(T,"P",{});var ce=i(C);de=s(ce,`Note that when creating models and layers with
`),j=r(ce,"A",{href:!0,rel:!0});var Le=i(j);Ce=s(Le,"subclassing"),Le.forEach(t),ke=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(j,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(j,"rel","nofollow")},m(T,A){g(T,d,A),e(d,v),e(d,m),e(m,u),e(d,y),g(T,l,A),g(T,h,A),e(h,M),e(M,we),e(h,ge),e(h,x),e(x,oe),g(T,te,A),g(T,b,A),e(b,$e),e(b,K),e(K,Pe),e(b,_e),e(b,D),e(D,Oe),e(b,se),e(b,V),e(V,Ie),e(b,Te),e(b,B),e(B,Ae),e(b,ve),e(b,U),e(U,he),e(b,Ge),g(T,ne,A),g(T,F,A),e(F,q),e(q,ye),e(q,H),e(H,me),e(q,Me),e(q,J),e(J,ae),e(F,Ee),e(F,z),e(z,Fe),e(z,X),e(X,be),e(z,re),e(z,N),e(N,ze),e(F,qe),e(F,S),e(S,Z),e(S,Q),e(Q,ie),g(T,le,A),g(T,C,A),e(C,de),e(C,j),e(j,Ce),e(C,ke)},d(T){T&&t(d),T&&t(l),T&&t(h),T&&t(te),T&&t(b),T&&t(ne),T&&t(F),T&&t(le),T&&t(C)}}}function Ku(E){let d,v,m,u,y;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,v),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Ru(E){let d,v,m,u,y;return u=new dt({props:{code:`import tensorflow as tf
from transformers import OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")

# Add a [CLS] to the vocabulary (we should train it also!)
tokenizer.add_special_tokens({"cls_token": "[CLS]"})
model.resize_token_embeddings(len(tokenizer))  # Update the model embeddings with the new vocabulary size
print(tokenizer.cls_token_id, len(tokenizer))  # The newly token the last token of the vocabulary

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoding = tokenizer(choices, return_tensors="tf")
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
inputs["mc_token_ids"] = tf.constant(
    [inputs["input_ids"].shape[-1] - 1, inputs["input_ids"].shape[-1] - 1]
)[
    None, :
]  # Batch size 1
outputs = model(inputs)
lm_prediction_scores, mc_prediction_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.cls_token_id, <span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># The newly token the last token of the vocabulary</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(choices, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;mc_token_ids&quot;</span>] = tf.constant(
<span class="hljs-meta">... </span>    [inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>)[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=a("p"),v=n("Examples:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Examples:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function Vu(E){let d,v,m,u,y,l,h,M,we,ge,x,oe,te,b,$e,K,Pe,_e,D,Oe,se,V,Ie,Te,B,Ae,ve,U,he,Ge,ne,F,q,ye,H,me,Me,J,ae,Ee,z,Fe,X,be,re,N,ze,qe,S,Z,Q,ie,le,C,de,j,Ce,ke;return{c(){d=a("p"),v=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),ge=c(),x=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),b=a("p"),$e=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Pe=n("model.fit()"),_e=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a("code"),Oe=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ie=n("fit()"),Te=n(" and "),B=a("code"),Ae=n("predict()"),ve=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),he=n("Functional"),Ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),F=a("ul"),q=a("li"),ye=n("a single Tensor with "),H=a("code"),me=n("input_ids"),Me=n(" only and nothing else: "),J=a("code"),ae=n("model(input_ids)"),Ee=c(),z=a("li"),Fe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=a("code"),be=n("model([input_ids, attention_mask])"),re=n(" or "),N=a("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),qe=c(),S=a("li"),Z=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),ie=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),le=c(),C=a("p"),de=n(`Note that when creating models and layers with
`),j=a("a"),Ce=n("subclassing"),ke=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(T){d=r(T,"P",{});var A=i(d);v=s(A,"TensorFlow models and layers in "),m=r(A,"CODE",{});var Ue=i(m);u=s(Ue,"transformers"),Ue.forEach(t),y=s(A," accept two formats as input:"),A.forEach(t),l=p(T),h=r(T,"UL",{});var L=i(h);M=r(L,"LI",{});var Ve=i(M);we=s(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),ge=p(L),x=r(L,"LI",{});var De=i(x);oe=s(De,"having all inputs as a list, tuple or dict in the first positional argument."),De.forEach(t),L.forEach(t),te=p(T),b=r(T,"P",{});var G=i(b);$e=s(G,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(G,"CODE",{});var Je=i(K);Pe=s(Je,"model.fit()"),Je.forEach(t),_e=s(G,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=r(G,"CODE",{});var He=i(D);Oe=s(He,"model.fit()"),He.forEach(t),se=s(G,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(G,"CODE",{});var Xe=i(V);Ie=s(Xe,"fit()"),Xe.forEach(t),Te=s(G," and "),B=r(G,"CODE",{});var Qe=i(B);Ae=s(Qe,"predict()"),Qe.forEach(t),ve=s(G,`, such as when creating your own layers or models with
the Keras `),U=r(G,"CODE",{});var Se=i(U);he=s(Se,"Functional"),Se.forEach(t),Ge=s(G,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),G.forEach(t),ne=p(T),F=r(T,"UL",{});var W=i(F);q=r(W,"LI",{});var Y=i(q);ye=s(Y,"a single Tensor with "),H=r(Y,"CODE",{});var Ke=i(H);me=s(Ke,"input_ids"),Ke.forEach(t),Me=s(Y," only and nothing else: "),J=r(Y,"CODE",{});var je=i(J);ae=s(je,"model(input_ids)"),je.forEach(t),Y.forEach(t),Ee=p(W),z=r(W,"LI",{});var R=i(z);Fe=s(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),X=r(R,"CODE",{});var ee=i(X);be=s(ee,"model([input_ids, attention_mask])"),ee.forEach(t),re=s(R," or "),N=r(R,"CODE",{});var Ye=i(N);ze=s(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),R.forEach(t),qe=p(W),S=r(W,"LI",{});var ue=i(S);Z=s(ue,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(ue,"CODE",{});var Ze=i(Q);ie=s(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ue.forEach(t),W.forEach(t),le=p(T),C=r(T,"P",{});var ce=i(C);de=s(ce,`Note that when creating models and layers with
`),j=r(ce,"A",{href:!0,rel:!0});var Le=i(j);Ce=s(Le,"subclassing"),Le.forEach(t),ke=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(j,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(j,"rel","nofollow")},m(T,A){g(T,d,A),e(d,v),e(d,m),e(m,u),e(d,y),g(T,l,A),g(T,h,A),e(h,M),e(M,we),e(h,ge),e(h,x),e(x,oe),g(T,te,A),g(T,b,A),e(b,$e),e(b,K),e(K,Pe),e(b,_e),e(b,D),e(D,Oe),e(b,se),e(b,V),e(V,Ie),e(b,Te),e(b,B),e(B,Ae),e(b,ve),e(b,U),e(U,he),e(b,Ge),g(T,ne,A),g(T,F,A),e(F,q),e(q,ye),e(q,H),e(H,me),e(q,Me),e(q,J),e(J,ae),e(F,Ee),e(F,z),e(z,Fe),e(z,X),e(X,be),e(z,re),e(z,N),e(N,ze),e(F,qe),e(F,S),e(S,Z),e(S,Q),e(Q,ie),g(T,le,A),g(T,C,A),e(C,de),e(C,j),e(j,Ce),e(C,ke)},d(T){T&&t(d),T&&t(l),T&&t(h),T&&t(te),T&&t(b),T&&t(ne),T&&t(F),T&&t(le),T&&t(C)}}}function Ju(E){let d,v,m,u,y;return{c(){d=a("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,v),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Xu(E){let d,v,m,u,y;return u=new dt({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),v=n("Example:"),m=c(),k(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);v=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,v),g(l,m,h),$(u,l,h),y=!0},p:ut,i(l){y||(P(u.$$.fragment,l),y=!0)},o(l){O(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),I(u,l)}}}function Qu(E){let d,v;return d=new dt({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){$(d,m,u),v=!0},p:ut,i(m){v||(P(d.$$.fragment,m),v=!0)},o(m){O(d.$$.fragment,m),v=!1},d(m){I(d,m)}}}function Yu(E){let d,v,m,u,y,l,h,M,we,ge,x,oe,te,b,$e,K,Pe,_e,D,Oe,se,V,Ie,Te,B,Ae,ve,U,he,Ge,ne,F,q,ye,H,me,Me,J,ae,Ee,z,Fe,X,be,re,N,ze,qe,S,Z,Q,ie,le,C,de,j,Ce,ke,T,A,Ue,L,Ve,De,G,Je,He,Xe,Qe,Se,W,Y,Ke,je,R,ee,Ye,ue,Ze,ce,Le,Ai,Gi,_s,Mi,Ei,ea,Fi,zi,br,xt,io,ta,tn,qi,oa,Ci,kr,ct,on,ji,Ot,xi,Ts,Di,Hi,vs,Si,Li,nn,Ni,Wi,Bi,Dt,Ui,ys,Ki,Ri,bs,Vi,Ji,Xi,lo,wr,Ht,co,na,sn,Qi,sa,Yi,$r,et,an,Zi,aa,el,tl,rn,ra,ol,nl,It,sl,ia,al,rl,la,il,ll,da,dl,cl,pl,ln,hl,ks,ml,ul,fl,ws,dn,Pr,St,po,ca,cn,gl,pa,_l,Or,pt,pn,Tl,hn,vl,ha,yl,bl,kl,mn,ma,wl,$l,ua,Pl,Ol,un,Il,$s,Al,Gl,Ir,Lt,ho,fa,fn,Ml,ga,El,Ar,Nt,gn,Fl,_a,zl,Gr,Wt,_n,ql,Ta,Cl,Mr,Bt,mo,va,Tn,jl,ya,xl,Er,tt,vn,Dl,ba,Hl,Sl,yn,Ll,Ps,Nl,Wl,Bl,bn,Ul,kn,Kl,Rl,Vl,ft,wn,Jl,Ut,Xl,Os,Ql,Yl,ka,Zl,ed,td,uo,od,fo,Fr,Kt,go,wa,$n,nd,$a,sd,zr,ot,Pn,ad,Pa,rd,id,On,ld,Is,dd,cd,pd,In,hd,An,md,ud,fd,gt,Gn,gd,Rt,_d,As,Td,vd,Oa,yd,bd,kd,_o,wd,To,qr,Vt,vo,Ia,Mn,$d,Aa,Pd,Cr,nt,En,Od,Ga,Id,Ad,Fn,Gd,Gs,Md,Ed,Fd,zn,zd,qn,qd,Cd,jd,_t,Cn,xd,Jt,Dd,Ms,Hd,Sd,Ma,Ld,Nd,Wd,yo,Bd,bo,jr,Xt,ko,Ea,jn,Ud,Fa,Kd,xr,st,xn,Rd,at,Vd,Es,Jd,Xd,za,Qd,Yd,qa,Zd,ec,Ca,tc,oc,ja,nc,sc,ac,Dn,rc,Fs,ic,lc,dc,Hn,cc,Sn,pc,hc,mc,xe,Ln,uc,Qt,fc,zs,gc,_c,xa,Tc,vc,yc,wo,bc,$o,kc,Po,wc,Oo,$c,Io,Dr,Yt,Ao,Da,Nn,Pc,Ha,Oc,Hr,Ne,Wn,Ic,Sa,Ac,Gc,Bn,Mc,qs,Ec,Fc,zc,Un,qc,Kn,Cc,jc,xc,Go,Dc,Tt,Rn,Hc,Zt,Sc,Cs,Lc,Nc,La,Wc,Bc,Uc,Mo,Kc,Eo,Sr,eo,Fo,Na,Vn,Rc,Wa,Vc,Lr,We,Jn,Jc,Ba,Xc,Qc,Xn,Yc,js,Zc,ep,tp,Qn,op,Yn,np,sp,ap,zo,rp,vt,Zn,ip,to,lp,xs,dp,cp,Ua,pp,hp,mp,qo,up,Co,Nr,oo,jo,Ka,es,fp,Ra,gp,Wr,Be,ts,_p,Va,Tp,vp,os,yp,Ds,bp,kp,wp,ns,$p,ss,Pp,Op,Ip,xo,Ap,yt,as,Gp,no,Mp,Hs,Ep,Fp,Ja,zp,qp,Cp,Do,jp,Ho,Br,so,So,Xa,rs,xp,Qa,Dp,Ur,fe,is,Hp,Ya,Sp,Lp,Ss,Ls,Np,Wp,Bp,ht,Up,Za,Kp,Rp,er,Vp,Jp,tr,Xp,Qp,or,Yp,Zp,eh,ls,th,Ns,oh,nh,sh,ds,ah,cs,rh,ih,lh,Lo,dh,rt,ps,ch,ao,ph,Ws,hh,mh,nr,uh,fh,gh,No,_h,Wo,Th,Bo,Kr;return l=new lt({}),b=new lt({}),je=new dt({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),tn=new lt({}),on=new pe({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.OpenAIGPTConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.OpenAIGPTConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.OpenAIGPTConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.OpenAIGPTConfig.afn",description:`<strong>afn</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"afn"},{anchor:"transformers.OpenAIGPTConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.OpenAIGPTConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.OpenAIGPTConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.OpenAIGPTConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.OpenAIGPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.OpenAIGPTConfig.predict_special_tokens",description:`<strong>predict_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not special tokens should be predicted when the model has a language modeling head.`,name:"predict_special_tokens"},{anchor:"transformers.OpenAIGPTConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/configuration_openai.py#L27"}}),lo=new mt({props:{anchor:"transformers.OpenAIGPTConfig.example",$$slots:{default:[Iu]},$$scope:{ctx:E}}}),sn=new lt({}),an=new pe({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/tokenization_openai.py#L73"}}),dn=new pe({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/tokenization_openai.py#L206"}}),cn=new lt({}),pn=new pe({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/tokenization_openai_fast.py#L40"}}),fn=new lt({}),gn=new pe({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_openai.py#L298"}}),_n=new pe({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_tf_openai.py#L374"}}),Tn=new lt({}),vn=new pe({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_openai.py#L402"}}),wn=new pe({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_openai.py#L428",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new Pt({props:{$$slots:{default:[Au]},$$scope:{ctx:E}}}),fo=new mt({props:{anchor:"transformers.OpenAIGPTModel.forward.example",$$slots:{default:[Gu]},$$scope:{ctx:E}}}),$n=new lt({}),Pn=new pe({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_openai.py#L533"}}),Gn=new pe({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_openai.py#L548",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new Pt({props:{$$slots:{default:[Mu]},$$scope:{ctx:E}}}),To=new mt({props:{anchor:"transformers.OpenAIGPTLMHeadModel.forward.example",$$slots:{default:[Eu]},$$scope:{ctx:E}}}),Mn=new lt({}),En=new pe({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_openai.py#L620"}}),Cn=new pe({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_token_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"mc_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are
ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_openai.py#L638",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) \u2014 Multiple choice classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new Pt({props:{$$slots:{default:[Fu]},$$scope:{ctx:E}}}),bo=new mt({props:{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.example",$$slots:{default:[zu]},$$scope:{ctx:E}}}),jn=new lt({}),xn=new pe({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_openai.py#L746"}}),Ln=new pe({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_openai.py#L756",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new Pt({props:{$$slots:{default:[qu]},$$scope:{ctx:E}}}),$o=new mt({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example",$$slots:{default:[Cu]},$$scope:{ctx:E}}}),Po=new mt({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example-2",$$slots:{default:[ju]},$$scope:{ctx:E}}}),Oo=new mt({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example-3",$$slots:{default:[xu]},$$scope:{ctx:E}}}),Io=new mt({props:{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.example-4",$$slots:{default:[Du]},$$scope:{ctx:E}}}),Nn=new lt({}),Wn=new pe({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_tf_openai.py#L504"}}),Go=new Pt({props:{$$slots:{default:[Hu]},$$scope:{ctx:E}}}),Rn=new pe({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_tf_openai.py#L509",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Mo=new Pt({props:{$$slots:{default:[Su]},$$scope:{ctx:E}}}),Eo=new mt({props:{anchor:"transformers.TFOpenAIGPTModel.call.example",$$slots:{default:[Lu]},$$scope:{ctx:E}}}),Vn=new lt({}),Jn=new pe({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_tf_openai.py#L560"}}),zo=new Pt({props:{$$slots:{default:[Nu]},$$scope:{ctx:E}}}),Zn=new pe({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_tf_openai.py#L573",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qo=new Pt({props:{$$slots:{default:[Wu]},$$scope:{ctx:E}}}),Co=new mt({props:{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.example",$$slots:{default:[Bu]},$$scope:{ctx:E}}}),es=new lt({}),ts=new pe({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_tf_openai.py#L651"}}),xo=new Pt({props:{$$slots:{default:[Uu]},$$scope:{ctx:E}}}),as=new pe({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_tf_openai.py#L660",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new Pt({props:{$$slots:{default:[Ku]},$$scope:{ctx:E}}}),Ho=new mt({props:{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.example",$$slots:{default:[Ru]},$$scope:{ctx:E}}}),rs=new lt({}),is=new pe({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_tf_openai.py#L786"}}),Lo=new Pt({props:{$$slots:{default:[Vu]},$$scope:{ctx:E}}}),ps=new pe({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/openai/modeling_tf_openai.py#L798",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),No=new Pt({props:{$$slots:{default:[Ju]},$$scope:{ctx:E}}}),Wo=new mt({props:{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.example",$$slots:{default:[Xu]},$$scope:{ctx:E}}}),Bo=new mt({props:{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.example-2",$$slots:{default:[Qu]},$$scope:{ctx:E}}}),{c(){d=a("meta"),v=c(),m=a("h1"),u=a("a"),y=a("span"),k(l.$$.fragment),h=c(),M=a("span"),we=n("OpenAI GPT"),ge=c(),x=a("h2"),oe=a("a"),te=a("span"),k(b.$$.fragment),$e=c(),K=a("span"),Pe=n("Overview"),_e=c(),D=a("p"),Oe=n("OpenAI GPT model was proposed in "),se=a("a"),V=n("Improving Language Understanding by Generative Pre-Training"),Ie=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Te=c(),B=a("p"),Ae=n("The abstract from the paper is the following:"),ve=c(),U=a("p"),he=a("em"),Ge=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),ne=c(),F=a("p"),q=n("Tips:"),ye=c(),H=a("ul"),me=a("li"),Me=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),J=c(),ae=a("li"),Ee=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),z=a("em"),Fe=n("run_generation.py"),X=n(" example script."),be=c(),re=a("p"),N=a("a"),ze=n("Write With Transformer"),qe=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),S=c(),Z=a("p"),Q=n("This model was contributed by "),ie=a("a"),le=n("thomwolf"),C=n(". The original code can be found "),de=a("a"),j=n("here"),Ce=n("."),ke=c(),T=a("p"),A=n("Note:"),Ue=c(),L=a("p"),Ve=n("If you want to reproduce the original tokenization process of the "),De=a("em"),G=n("OpenAI GPT"),Je=n(" paper, you will need to install "),He=a("code"),Xe=n("ftfy"),Qe=n(`
and `),Se=a("code"),W=n("SpaCy"),Y=n(":"),Ke=c(),k(je.$$.fragment),R=c(),ee=a("p"),Ye=n("If you don\u2019t install "),ue=a("code"),Ze=n("ftfy"),ce=n(" and "),Le=a("code"),Ai=n("SpaCy"),Gi=n(", the "),_s=a("a"),Mi=n("OpenAIGPTTokenizer"),Ei=n(` will default to tokenize
using BERT\u2019s `),ea=a("code"),Fi=n("BasicTokenizer"),zi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),br=c(),xt=a("h2"),io=a("a"),ta=a("span"),k(tn.$$.fragment),qi=c(),oa=a("span"),Ci=n("OpenAIGPTConfig"),kr=c(),ct=a("div"),k(on.$$.fragment),ji=c(),Ot=a("p"),xi=n("This is the configuration class to store the configuration of a "),Ts=a("a"),Di=n("OpenAIGPTModel"),Hi=n(" or a "),vs=a("a"),Si=n("TFOpenAIGPTModel"),Li=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the GPT
`),nn=a("a"),Ni=n("openai-gpt"),Wi=n(" architecture from OpenAI."),Bi=c(),Dt=a("p"),Ui=n("Configuration objects inherit from "),ys=a("a"),Ki=n("PretrainedConfig"),Ri=n(` and can be used to control the model outputs. Read the
documentation from `),bs=a("a"),Vi=n("PretrainedConfig"),Ji=n(" for more information."),Xi=c(),k(lo.$$.fragment),wr=c(),Ht=a("h2"),co=a("a"),na=a("span"),k(sn.$$.fragment),Qi=c(),sa=a("span"),Yi=n("OpenAIGPTTokenizer"),$r=c(),et=a("div"),k(an.$$.fragment),Zi=c(),aa=a("p"),el=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),tl=c(),rn=a("ul"),ra=a("li"),ol=n("lowercases all inputs,"),nl=c(),It=a("li"),sl=n("uses "),ia=a("code"),al=n("SpaCy"),rl=n(" tokenizer and "),la=a("code"),il=n("ftfy"),ll=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),da=a("code"),dl=n("BasicTokenizer"),cl=n(" if not."),pl=c(),ln=a("p"),hl=n("This tokenizer inherits from "),ks=a("a"),ml=n("PreTrainedTokenizer"),ul=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fl=c(),ws=a("div"),k(dn.$$.fragment),Pr=c(),St=a("h2"),po=a("a"),ca=a("span"),k(cn.$$.fragment),gl=c(),pa=a("span"),_l=n("OpenAIGPTTokenizerFast"),Or=c(),pt=a("div"),k(pn.$$.fragment),Tl=c(),hn=a("p"),vl=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),ha=a("em"),yl=n("tokenizers"),bl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),kl=c(),mn=a("ul"),ma=a("li"),wl=n("lower case all inputs"),$l=c(),ua=a("li"),Pl=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Ol=c(),un=a("p"),Il=n("This tokenizer inherits from "),$s=a("a"),Al=n("PreTrainedTokenizerFast"),Gl=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ir=c(),Lt=a("h2"),ho=a("a"),fa=a("span"),k(fn.$$.fragment),Ml=c(),ga=a("span"),El=n("OpenAI specific outputs"),Ar=c(),Nt=a("div"),k(gn.$$.fragment),Fl=c(),_a=a("p"),zl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),Gr=c(),Wt=a("div"),k(_n.$$.fragment),ql=c(),Ta=a("p"),Cl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),Mr=c(),Bt=a("h2"),mo=a("a"),va=a("span"),k(Tn.$$.fragment),jl=c(),ya=a("span"),xl=n("OpenAIGPTModel"),Er=c(),tt=a("div"),k(vn.$$.fragment),Dl=c(),ba=a("p"),Hl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Sl=c(),yn=a("p"),Ll=n("This model inherits from "),Ps=a("a"),Nl=n("PreTrainedModel"),Wl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=c(),bn=a("p"),Ul=n("This model is also a PyTorch "),kn=a("a"),Kl=n("torch.nn.Module"),Rl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vl=c(),ft=a("div"),k(wn.$$.fragment),Jl=c(),Ut=a("p"),Xl=n("The "),Os=a("a"),Ql=n("OpenAIGPTModel"),Yl=n(" forward method, overrides the "),ka=a("code"),Zl=n("__call__"),ed=n(" special method."),td=c(),k(uo.$$.fragment),od=c(),k(fo.$$.fragment),Fr=c(),Kt=a("h2"),go=a("a"),wa=a("span"),k($n.$$.fragment),nd=c(),$a=a("span"),sd=n("OpenAIGPTLMHeadModel"),zr=c(),ot=a("div"),k(Pn.$$.fragment),ad=c(),Pa=a("p"),rd=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),id=c(),On=a("p"),ld=n("This model inherits from "),Is=a("a"),dd=n("PreTrainedModel"),cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd=c(),In=a("p"),hd=n("This model is also a PyTorch "),An=a("a"),md=n("torch.nn.Module"),ud=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fd=c(),gt=a("div"),k(Gn.$$.fragment),gd=c(),Rt=a("p"),_d=n("The "),As=a("a"),Td=n("OpenAIGPTLMHeadModel"),vd=n(" forward method, overrides the "),Oa=a("code"),yd=n("__call__"),bd=n(" special method."),kd=c(),k(_o.$$.fragment),wd=c(),k(To.$$.fragment),qr=c(),Vt=a("h2"),vo=a("a"),Ia=a("span"),k(Mn.$$.fragment),$d=c(),Aa=a("span"),Pd=n("OpenAIGPTDoubleHeadsModel"),Cr=c(),nt=a("div"),k(En.$$.fragment),Od=c(),Ga=a("p"),Id=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Ad=c(),Fn=a("p"),Gd=n("This model inherits from "),Gs=a("a"),Md=n("PreTrainedModel"),Ed=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd=c(),zn=a("p"),zd=n("This model is also a PyTorch "),qn=a("a"),qd=n("torch.nn.Module"),Cd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jd=c(),_t=a("div"),k(Cn.$$.fragment),xd=c(),Jt=a("p"),Dd=n("The "),Ms=a("a"),Hd=n("OpenAIGPTDoubleHeadsModel"),Sd=n(" forward method, overrides the "),Ma=a("code"),Ld=n("__call__"),Nd=n(" special method."),Wd=c(),k(yo.$$.fragment),Bd=c(),k(bo.$$.fragment),jr=c(),Xt=a("h2"),ko=a("a"),Ea=a("span"),k(jn.$$.fragment),Ud=c(),Fa=a("span"),Kd=n("OpenAIGPTForSequenceClassification"),xr=c(),st=a("div"),k(xn.$$.fragment),Rd=c(),at=a("p"),Vd=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),Es=a("a"),Jd=n("OpenAIGPTForSequenceClassification"),Xd=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),za=a("code"),Qd=n("pad_token_id"),Yd=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),qa=a("code"),Zd=n("pad_token_id"),ec=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),Ca=a("code"),tc=n("inputs_embeds"),oc=n(" are passed instead of "),ja=a("code"),nc=n("input_ids"),sc=n(`, it does the same (take
the last value in each row of the batch).`),ac=c(),Dn=a("p"),rc=n("This model inherits from "),Fs=a("a"),ic=n("PreTrainedModel"),lc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc=c(),Hn=a("p"),cc=n("This model is also a PyTorch "),Sn=a("a"),pc=n("torch.nn.Module"),hc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mc=c(),xe=a("div"),k(Ln.$$.fragment),uc=c(),Qt=a("p"),fc=n("The "),zs=a("a"),gc=n("OpenAIGPTForSequenceClassification"),_c=n(" forward method, overrides the "),xa=a("code"),Tc=n("__call__"),vc=n(" special method."),yc=c(),k(wo.$$.fragment),bc=c(),k($o.$$.fragment),kc=c(),k(Po.$$.fragment),wc=c(),k(Oo.$$.fragment),$c=c(),k(Io.$$.fragment),Dr=c(),Yt=a("h2"),Ao=a("a"),Da=a("span"),k(Nn.$$.fragment),Pc=c(),Ha=a("span"),Oc=n("TFOpenAIGPTModel"),Hr=c(),Ne=a("div"),k(Wn.$$.fragment),Ic=c(),Sa=a("p"),Ac=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Gc=c(),Bn=a("p"),Mc=n("This model inherits from "),qs=a("a"),Ec=n("TFPreTrainedModel"),Fc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc=c(),Un=a("p"),qc=n("This model is also a "),Kn=a("a"),Cc=n("tf.keras.Model"),jc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xc=c(),k(Go.$$.fragment),Dc=c(),Tt=a("div"),k(Rn.$$.fragment),Hc=c(),Zt=a("p"),Sc=n("The "),Cs=a("a"),Lc=n("TFOpenAIGPTModel"),Nc=n(" forward method, overrides the "),La=a("code"),Wc=n("__call__"),Bc=n(" special method."),Uc=c(),k(Mo.$$.fragment),Kc=c(),k(Eo.$$.fragment),Sr=c(),eo=a("h2"),Fo=a("a"),Na=a("span"),k(Vn.$$.fragment),Rc=c(),Wa=a("span"),Vc=n("TFOpenAIGPTLMHeadModel"),Lr=c(),We=a("div"),k(Jn.$$.fragment),Jc=c(),Ba=a("p"),Xc=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Qc=c(),Xn=a("p"),Yc=n("This model inherits from "),js=a("a"),Zc=n("TFPreTrainedModel"),ep=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp=c(),Qn=a("p"),op=n("This model is also a "),Yn=a("a"),np=n("tf.keras.Model"),sp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ap=c(),k(zo.$$.fragment),rp=c(),vt=a("div"),k(Zn.$$.fragment),ip=c(),to=a("p"),lp=n("The "),xs=a("a"),dp=n("TFOpenAIGPTLMHeadModel"),cp=n(" forward method, overrides the "),Ua=a("code"),pp=n("__call__"),hp=n(" special method."),mp=c(),k(qo.$$.fragment),up=c(),k(Co.$$.fragment),Nr=c(),oo=a("h2"),jo=a("a"),Ka=a("span"),k(es.$$.fragment),fp=c(),Ra=a("span"),gp=n("TFOpenAIGPTDoubleHeadsModel"),Wr=c(),Be=a("div"),k(ts.$$.fragment),_p=c(),Va=a("p"),Tp=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),vp=c(),os=a("p"),yp=n("This model inherits from "),Ds=a("a"),bp=n("TFPreTrainedModel"),kp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp=c(),ns=a("p"),$p=n("This model is also a "),ss=a("a"),Pp=n("tf.keras.Model"),Op=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ip=c(),k(xo.$$.fragment),Ap=c(),yt=a("div"),k(as.$$.fragment),Gp=c(),no=a("p"),Mp=n("The "),Hs=a("a"),Ep=n("TFOpenAIGPTDoubleHeadsModel"),Fp=n(" forward method, overrides the "),Ja=a("code"),zp=n("__call__"),qp=n(" special method."),Cp=c(),k(Do.$$.fragment),jp=c(),k(Ho.$$.fragment),Br=c(),so=a("h2"),So=a("a"),Xa=a("span"),k(rs.$$.fragment),xp=c(),Qa=a("span"),Dp=n("TFOpenAIGPTForSequenceClassification"),Ur=c(),fe=a("div"),k(is.$$.fragment),Hp=c(),Ya=a("p"),Sp=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Lp=c(),Ss=a("p"),Ls=a("a"),Np=n("TFOpenAIGPTForSequenceClassification"),Wp=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Bp=c(),ht=a("p"),Up=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Za=a("code"),Kp=n("pad_token_id"),Rp=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),er=a("code"),Vp=n("pad_token_id"),Jp=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),tr=a("code"),Xp=n("inputs_embeds"),Qp=n(" are passed instead of "),or=a("code"),Yp=n("input_ids"),Zp=n(`, it does the same (take the last value in
each row of the batch).`),eh=c(),ls=a("p"),th=n("This model inherits from "),Ns=a("a"),oh=n("TFPreTrainedModel"),nh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh=c(),ds=a("p"),ah=n("This model is also a "),cs=a("a"),rh=n("tf.keras.Model"),ih=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh=c(),k(Lo.$$.fragment),dh=c(),rt=a("div"),k(ps.$$.fragment),ch=c(),ao=a("p"),ph=n("The "),Ws=a("a"),hh=n("TFOpenAIGPTForSequenceClassification"),mh=n(" forward method, overrides the "),nr=a("code"),uh=n("__call__"),fh=n(" special method."),gh=c(),k(No.$$.fragment),_h=c(),k(Wo.$$.fragment),Th=c(),k(Bo.$$.fragment),this.h()},l(o){const _=Pu('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),v=p(o),m=r(o,"H1",{class:!0});var hs=i(m);u=r(hs,"A",{id:!0,class:!0,href:!0});var sr=i(u);y=r(sr,"SPAN",{});var ar=i(y);w(l.$$.fragment,ar),ar.forEach(t),sr.forEach(t),h=p(hs),M=r(hs,"SPAN",{});var rr=i(M);we=s(rr,"OpenAI GPT"),rr.forEach(t),hs.forEach(t),ge=p(o),x=r(o,"H2",{class:!0});var ms=i(x);oe=r(ms,"A",{id:!0,class:!0,href:!0});var ir=i(oe);te=r(ir,"SPAN",{});var lr=i(te);w(b.$$.fragment,lr),lr.forEach(t),ir.forEach(t),$e=p(ms),K=r(ms,"SPAN",{});var dr=i(K);Pe=s(dr,"Overview"),dr.forEach(t),ms.forEach(t),_e=p(o),D=r(o,"P",{});var us=i(D);Oe=s(us,"OpenAI GPT model was proposed in "),se=r(us,"A",{href:!0,rel:!0});var cr=i(se);V=s(cr,"Improving Language Understanding by Generative Pre-Training"),cr.forEach(t),Ie=s(us,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),us.forEach(t),Te=p(o),B=r(o,"P",{});var pr=i(B);Ae=s(pr,"The abstract from the paper is the following:"),pr.forEach(t),ve=p(o),U=r(o,"P",{});var hr=i(U);he=r(hr,"EM",{});var mr=i(he);Ge=s(mr,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),mr.forEach(t),hr.forEach(t),ne=p(o),F=r(o,"P",{});var ur=i(F);q=s(ur,"Tips:"),ur.forEach(t),ye=p(o),H=r(o,"UL",{});var fs=i(H);me=r(fs,"LI",{});var fr=i(me);Me=s(fr,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),fr.forEach(t),J=p(fs),ae=r(fs,"LI",{});var gs=i(ae);Ee=s(gs,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),z=r(gs,"EM",{});var gr=i(z);Fe=s(gr,"run_generation.py"),gr.forEach(t),X=s(gs," example script."),gs.forEach(t),fs.forEach(t),be=p(o),re=r(o,"P",{});var Bs=i(re);N=r(Bs,"A",{href:!0,rel:!0});var _r=i(N);ze=s(_r,"Write With Transformer"),_r.forEach(t),qe=s(Bs,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),Bs.forEach(t),S=p(o),Z=r(o,"P",{});var ro=i(Z);Q=s(ro,"This model was contributed by "),ie=r(ro,"A",{href:!0,rel:!0});var Tr=i(ie);le=s(Tr,"thomwolf"),Tr.forEach(t),C=s(ro,". The original code can be found "),de=r(ro,"A",{href:!0,rel:!0});var vr=i(de);j=s(vr,"here"),vr.forEach(t),Ce=s(ro,"."),ro.forEach(t),ke=p(o),T=r(o,"P",{});var yr=i(T);A=s(yr,"Note:"),yr.forEach(t),Ue=p(o),L=r(o,"P",{});var At=i(L);Ve=s(At,"If you want to reproduce the original tokenization process of the "),De=r(At,"EM",{});var yh=i(De);G=s(yh,"OpenAI GPT"),yh.forEach(t),Je=s(At," paper, you will need to install "),He=r(At,"CODE",{});var bh=i(He);Xe=s(bh,"ftfy"),bh.forEach(t),Qe=s(At,`
and `),Se=r(At,"CODE",{});var kh=i(Se);W=s(kh,"SpaCy"),kh.forEach(t),Y=s(At,":"),At.forEach(t),Ke=p(o),w(je.$$.fragment,o),R=p(o),ee=r(o,"P",{});var Gt=i(ee);Ye=s(Gt,"If you don\u2019t install "),ue=r(Gt,"CODE",{});var wh=i(ue);Ze=s(wh,"ftfy"),wh.forEach(t),ce=s(Gt," and "),Le=r(Gt,"CODE",{});var $h=i(Le);Ai=s($h,"SpaCy"),$h.forEach(t),Gi=s(Gt,", the "),_s=r(Gt,"A",{href:!0});var Ph=i(_s);Mi=s(Ph,"OpenAIGPTTokenizer"),Ph.forEach(t),Ei=s(Gt,` will default to tokenize
using BERT\u2019s `),ea=r(Gt,"CODE",{});var Oh=i(ea);Fi=s(Oh,"BasicTokenizer"),Oh.forEach(t),zi=s(Gt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),Gt.forEach(t),br=p(o),xt=r(o,"H2",{class:!0});var Rr=i(xt);io=r(Rr,"A",{id:!0,class:!0,href:!0});var Ih=i(io);ta=r(Ih,"SPAN",{});var Ah=i(ta);w(tn.$$.fragment,Ah),Ah.forEach(t),Ih.forEach(t),qi=p(Rr),oa=r(Rr,"SPAN",{});var Gh=i(oa);Ci=s(Gh,"OpenAIGPTConfig"),Gh.forEach(t),Rr.forEach(t),kr=p(o),ct=r(o,"DIV",{class:!0});var Uo=i(ct);w(on.$$.fragment,Uo),ji=p(Uo),Ot=r(Uo,"P",{});var Ko=i(Ot);xi=s(Ko,"This is the configuration class to store the configuration of a "),Ts=r(Ko,"A",{href:!0});var Mh=i(Ts);Di=s(Mh,"OpenAIGPTModel"),Mh.forEach(t),Hi=s(Ko," or a "),vs=r(Ko,"A",{href:!0});var Eh=i(vs);Si=s(Eh,"TFOpenAIGPTModel"),Eh.forEach(t),Li=s(Ko,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the GPT
`),nn=r(Ko,"A",{href:!0,rel:!0});var Fh=i(nn);Ni=s(Fh,"openai-gpt"),Fh.forEach(t),Wi=s(Ko," architecture from OpenAI."),Ko.forEach(t),Bi=p(Uo),Dt=r(Uo,"P",{});var Us=i(Dt);Ui=s(Us,"Configuration objects inherit from "),ys=r(Us,"A",{href:!0});var zh=i(ys);Ki=s(zh,"PretrainedConfig"),zh.forEach(t),Ri=s(Us,` and can be used to control the model outputs. Read the
documentation from `),bs=r(Us,"A",{href:!0});var qh=i(bs);Vi=s(qh,"PretrainedConfig"),qh.forEach(t),Ji=s(Us," for more information."),Us.forEach(t),Xi=p(Uo),w(lo.$$.fragment,Uo),Uo.forEach(t),wr=p(o),Ht=r(o,"H2",{class:!0});var Vr=i(Ht);co=r(Vr,"A",{id:!0,class:!0,href:!0});var Ch=i(co);na=r(Ch,"SPAN",{});var jh=i(na);w(sn.$$.fragment,jh),jh.forEach(t),Ch.forEach(t),Qi=p(Vr),sa=r(Vr,"SPAN",{});var xh=i(sa);Yi=s(xh,"OpenAIGPTTokenizer"),xh.forEach(t),Vr.forEach(t),$r=p(o),et=r(o,"DIV",{class:!0});var Mt=i(et);w(an.$$.fragment,Mt),Zi=p(Mt),aa=r(Mt,"P",{});var Dh=i(aa);el=s(Dh,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),Dh.forEach(t),tl=p(Mt),rn=r(Mt,"UL",{});var Jr=i(rn);ra=r(Jr,"LI",{});var Hh=i(ra);ol=s(Hh,"lowercases all inputs,"),Hh.forEach(t),nl=p(Jr),It=r(Jr,"LI",{});var Ro=i(It);sl=s(Ro,"uses "),ia=r(Ro,"CODE",{});var Sh=i(ia);al=s(Sh,"SpaCy"),Sh.forEach(t),rl=s(Ro," tokenizer and "),la=r(Ro,"CODE",{});var Lh=i(la);il=s(Lh,"ftfy"),Lh.forEach(t),ll=s(Ro,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),da=r(Ro,"CODE",{});var Nh=i(da);dl=s(Nh,"BasicTokenizer"),Nh.forEach(t),cl=s(Ro," if not."),Ro.forEach(t),Jr.forEach(t),pl=p(Mt),ln=r(Mt,"P",{});var Xr=i(ln);hl=s(Xr,"This tokenizer inherits from "),ks=r(Xr,"A",{href:!0});var Wh=i(ks);ml=s(Wh,"PreTrainedTokenizer"),Wh.forEach(t),ul=s(Xr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xr.forEach(t),fl=p(Mt),ws=r(Mt,"DIV",{class:!0});var Bh=i(ws);w(dn.$$.fragment,Bh),Bh.forEach(t),Mt.forEach(t),Pr=p(o),St=r(o,"H2",{class:!0});var Qr=i(St);po=r(Qr,"A",{id:!0,class:!0,href:!0});var Uh=i(po);ca=r(Uh,"SPAN",{});var Kh=i(ca);w(cn.$$.fragment,Kh),Kh.forEach(t),Uh.forEach(t),gl=p(Qr),pa=r(Qr,"SPAN",{});var Rh=i(pa);_l=s(Rh,"OpenAIGPTTokenizerFast"),Rh.forEach(t),Qr.forEach(t),Or=p(o),pt=r(o,"DIV",{class:!0});var Vo=i(pt);w(pn.$$.fragment,Vo),Tl=p(Vo),hn=r(Vo,"P",{});var Yr=i(hn);vl=s(Yr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),ha=r(Yr,"EM",{});var Vh=i(ha);yl=s(Vh,"tokenizers"),Vh.forEach(t),bl=s(Yr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),Yr.forEach(t),kl=p(Vo),mn=r(Vo,"UL",{});var Zr=i(mn);ma=r(Zr,"LI",{});var Jh=i(ma);wl=s(Jh,"lower case all inputs"),Jh.forEach(t),$l=p(Zr),ua=r(Zr,"LI",{});var Xh=i(ua);Pl=s(Xh,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Xh.forEach(t),Zr.forEach(t),Ol=p(Vo),un=r(Vo,"P",{});var ei=i(un);Il=s(ei,"This tokenizer inherits from "),$s=r(ei,"A",{href:!0});var Qh=i($s);Al=s(Qh,"PreTrainedTokenizerFast"),Qh.forEach(t),Gl=s(ei,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ei.forEach(t),Vo.forEach(t),Ir=p(o),Lt=r(o,"H2",{class:!0});var ti=i(Lt);ho=r(ti,"A",{id:!0,class:!0,href:!0});var Yh=i(ho);fa=r(Yh,"SPAN",{});var Zh=i(fa);w(fn.$$.fragment,Zh),Zh.forEach(t),Yh.forEach(t),Ml=p(ti),ga=r(ti,"SPAN",{});var em=i(ga);El=s(em,"OpenAI specific outputs"),em.forEach(t),ti.forEach(t),Ar=p(o),Nt=r(o,"DIV",{class:!0});var oi=i(Nt);w(gn.$$.fragment,oi),Fl=p(oi),_a=r(oi,"P",{});var tm=i(_a);zl=s(tm,"Base class for outputs of models predicting if two sentences are consecutive or not."),tm.forEach(t),oi.forEach(t),Gr=p(o),Wt=r(o,"DIV",{class:!0});var ni=i(Wt);w(_n.$$.fragment,ni),ql=p(ni),Ta=r(ni,"P",{});var om=i(Ta);Cl=s(om,"Base class for outputs of models predicting if two sentences are consecutive or not."),om.forEach(t),ni.forEach(t),Mr=p(o),Bt=r(o,"H2",{class:!0});var si=i(Bt);mo=r(si,"A",{id:!0,class:!0,href:!0});var nm=i(mo);va=r(nm,"SPAN",{});var sm=i(va);w(Tn.$$.fragment,sm),sm.forEach(t),nm.forEach(t),jl=p(si),ya=r(si,"SPAN",{});var am=i(ya);xl=s(am,"OpenAIGPTModel"),am.forEach(t),si.forEach(t),Er=p(o),tt=r(o,"DIV",{class:!0});var Et=i(tt);w(vn.$$.fragment,Et),Dl=p(Et),ba=r(Et,"P",{});var rm=i(ba);Hl=s(rm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),rm.forEach(t),Sl=p(Et),yn=r(Et,"P",{});var ai=i(yn);Ll=s(ai,"This model inherits from "),Ps=r(ai,"A",{href:!0});var im=i(Ps);Nl=s(im,"PreTrainedModel"),im.forEach(t),Wl=s(ai,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ai.forEach(t),Bl=p(Et),bn=r(Et,"P",{});var ri=i(bn);Ul=s(ri,"This model is also a PyTorch "),kn=r(ri,"A",{href:!0,rel:!0});var lm=i(kn);Kl=s(lm,"torch.nn.Module"),lm.forEach(t),Rl=s(ri,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ri.forEach(t),Vl=p(Et),ft=r(Et,"DIV",{class:!0});var Jo=i(ft);w(wn.$$.fragment,Jo),Jl=p(Jo),Ut=r(Jo,"P",{});var Ks=i(Ut);Xl=s(Ks,"The "),Os=r(Ks,"A",{href:!0});var dm=i(Os);Ql=s(dm,"OpenAIGPTModel"),dm.forEach(t),Yl=s(Ks," forward method, overrides the "),ka=r(Ks,"CODE",{});var cm=i(ka);Zl=s(cm,"__call__"),cm.forEach(t),ed=s(Ks," special method."),Ks.forEach(t),td=p(Jo),w(uo.$$.fragment,Jo),od=p(Jo),w(fo.$$.fragment,Jo),Jo.forEach(t),Et.forEach(t),Fr=p(o),Kt=r(o,"H2",{class:!0});var ii=i(Kt);go=r(ii,"A",{id:!0,class:!0,href:!0});var pm=i(go);wa=r(pm,"SPAN",{});var hm=i(wa);w($n.$$.fragment,hm),hm.forEach(t),pm.forEach(t),nd=p(ii),$a=r(ii,"SPAN",{});var mm=i($a);sd=s(mm,"OpenAIGPTLMHeadModel"),mm.forEach(t),ii.forEach(t),zr=p(o),ot=r(o,"DIV",{class:!0});var Ft=i(ot);w(Pn.$$.fragment,Ft),ad=p(Ft),Pa=r(Ft,"P",{});var um=i(Pa);rd=s(um,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),um.forEach(t),id=p(Ft),On=r(Ft,"P",{});var li=i(On);ld=s(li,"This model inherits from "),Is=r(li,"A",{href:!0});var fm=i(Is);dd=s(fm,"PreTrainedModel"),fm.forEach(t),cd=s(li,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),li.forEach(t),pd=p(Ft),In=r(Ft,"P",{});var di=i(In);hd=s(di,"This model is also a PyTorch "),An=r(di,"A",{href:!0,rel:!0});var gm=i(An);md=s(gm,"torch.nn.Module"),gm.forEach(t),ud=s(di,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),di.forEach(t),fd=p(Ft),gt=r(Ft,"DIV",{class:!0});var Xo=i(gt);w(Gn.$$.fragment,Xo),gd=p(Xo),Rt=r(Xo,"P",{});var Rs=i(Rt);_d=s(Rs,"The "),As=r(Rs,"A",{href:!0});var _m=i(As);Td=s(_m,"OpenAIGPTLMHeadModel"),_m.forEach(t),vd=s(Rs," forward method, overrides the "),Oa=r(Rs,"CODE",{});var Tm=i(Oa);yd=s(Tm,"__call__"),Tm.forEach(t),bd=s(Rs," special method."),Rs.forEach(t),kd=p(Xo),w(_o.$$.fragment,Xo),wd=p(Xo),w(To.$$.fragment,Xo),Xo.forEach(t),Ft.forEach(t),qr=p(o),Vt=r(o,"H2",{class:!0});var ci=i(Vt);vo=r(ci,"A",{id:!0,class:!0,href:!0});var vm=i(vo);Ia=r(vm,"SPAN",{});var ym=i(Ia);w(Mn.$$.fragment,ym),ym.forEach(t),vm.forEach(t),$d=p(ci),Aa=r(ci,"SPAN",{});var bm=i(Aa);Pd=s(bm,"OpenAIGPTDoubleHeadsModel"),bm.forEach(t),ci.forEach(t),Cr=p(o),nt=r(o,"DIV",{class:!0});var zt=i(nt);w(En.$$.fragment,zt),Od=p(zt),Ga=r(zt,"P",{});var km=i(Ga);Id=s(km,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),km.forEach(t),Ad=p(zt),Fn=r(zt,"P",{});var pi=i(Fn);Gd=s(pi,"This model inherits from "),Gs=r(pi,"A",{href:!0});var wm=i(Gs);Md=s(wm,"PreTrainedModel"),wm.forEach(t),Ed=s(pi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi.forEach(t),Fd=p(zt),zn=r(zt,"P",{});var hi=i(zn);zd=s(hi,"This model is also a PyTorch "),qn=r(hi,"A",{href:!0,rel:!0});var $m=i(qn);qd=s($m,"torch.nn.Module"),$m.forEach(t),Cd=s(hi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hi.forEach(t),jd=p(zt),_t=r(zt,"DIV",{class:!0});var Qo=i(_t);w(Cn.$$.fragment,Qo),xd=p(Qo),Jt=r(Qo,"P",{});var Vs=i(Jt);Dd=s(Vs,"The "),Ms=r(Vs,"A",{href:!0});var Pm=i(Ms);Hd=s(Pm,"OpenAIGPTDoubleHeadsModel"),Pm.forEach(t),Sd=s(Vs," forward method, overrides the "),Ma=r(Vs,"CODE",{});var Om=i(Ma);Ld=s(Om,"__call__"),Om.forEach(t),Nd=s(Vs," special method."),Vs.forEach(t),Wd=p(Qo),w(yo.$$.fragment,Qo),Bd=p(Qo),w(bo.$$.fragment,Qo),Qo.forEach(t),zt.forEach(t),jr=p(o),Xt=r(o,"H2",{class:!0});var mi=i(Xt);ko=r(mi,"A",{id:!0,class:!0,href:!0});var Im=i(ko);Ea=r(Im,"SPAN",{});var Am=i(Ea);w(jn.$$.fragment,Am),Am.forEach(t),Im.forEach(t),Ud=p(mi),Fa=r(mi,"SPAN",{});var Gm=i(Fa);Kd=s(Gm,"OpenAIGPTForSequenceClassification"),Gm.forEach(t),mi.forEach(t),xr=p(o),st=r(o,"DIV",{class:!0});var qt=i(st);w(xn.$$.fragment,qt),Rd=p(qt),at=r(qt,"P",{});var bt=i(at);Vd=s(bt,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),Es=r(bt,"A",{href:!0});var Mm=i(Es);Jd=s(Mm,"OpenAIGPTForSequenceClassification"),Mm.forEach(t),Xd=s(bt,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),za=r(bt,"CODE",{});var Em=i(za);Qd=s(Em,"pad_token_id"),Em.forEach(t),Yd=s(bt,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),qa=r(bt,"CODE",{});var Fm=i(qa);Zd=s(Fm,"pad_token_id"),Fm.forEach(t),ec=s(bt,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),Ca=r(bt,"CODE",{});var zm=i(Ca);tc=s(zm,"inputs_embeds"),zm.forEach(t),oc=s(bt," are passed instead of "),ja=r(bt,"CODE",{});var qm=i(ja);nc=s(qm,"input_ids"),qm.forEach(t),sc=s(bt,`, it does the same (take
the last value in each row of the batch).`),bt.forEach(t),ac=p(qt),Dn=r(qt,"P",{});var ui=i(Dn);rc=s(ui,"This model inherits from "),Fs=r(ui,"A",{href:!0});var Cm=i(Fs);ic=s(Cm,"PreTrainedModel"),Cm.forEach(t),lc=s(ui,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui.forEach(t),dc=p(qt),Hn=r(qt,"P",{});var fi=i(Hn);cc=s(fi,"This model is also a PyTorch "),Sn=r(fi,"A",{href:!0,rel:!0});var jm=i(Sn);pc=s(jm,"torch.nn.Module"),jm.forEach(t),hc=s(fi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fi.forEach(t),mc=p(qt),xe=r(qt,"DIV",{class:!0});var it=i(xe);w(Ln.$$.fragment,it),uc=p(it),Qt=r(it,"P",{});var Js=i(Qt);fc=s(Js,"The "),zs=r(Js,"A",{href:!0});var xm=i(zs);gc=s(xm,"OpenAIGPTForSequenceClassification"),xm.forEach(t),_c=s(Js," forward method, overrides the "),xa=r(Js,"CODE",{});var Dm=i(xa);Tc=s(Dm,"__call__"),Dm.forEach(t),vc=s(Js," special method."),Js.forEach(t),yc=p(it),w(wo.$$.fragment,it),bc=p(it),w($o.$$.fragment,it),kc=p(it),w(Po.$$.fragment,it),wc=p(it),w(Oo.$$.fragment,it),$c=p(it),w(Io.$$.fragment,it),it.forEach(t),qt.forEach(t),Dr=p(o),Yt=r(o,"H2",{class:!0});var gi=i(Yt);Ao=r(gi,"A",{id:!0,class:!0,href:!0});var Hm=i(Ao);Da=r(Hm,"SPAN",{});var Sm=i(Da);w(Nn.$$.fragment,Sm),Sm.forEach(t),Hm.forEach(t),Pc=p(gi),Ha=r(gi,"SPAN",{});var Lm=i(Ha);Oc=s(Lm,"TFOpenAIGPTModel"),Lm.forEach(t),gi.forEach(t),Hr=p(o),Ne=r(o,"DIV",{class:!0});var kt=i(Ne);w(Wn.$$.fragment,kt),Ic=p(kt),Sa=r(kt,"P",{});var Nm=i(Sa);Ac=s(Nm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Nm.forEach(t),Gc=p(kt),Bn=r(kt,"P",{});var _i=i(Bn);Mc=s(_i,"This model inherits from "),qs=r(_i,"A",{href:!0});var Wm=i(qs);Ec=s(Wm,"TFPreTrainedModel"),Wm.forEach(t),Fc=s(_i,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_i.forEach(t),zc=p(kt),Un=r(kt,"P",{});var Ti=i(Un);qc=s(Ti,"This model is also a "),Kn=r(Ti,"A",{href:!0,rel:!0});var Bm=i(Kn);Cc=s(Bm,"tf.keras.Model"),Bm.forEach(t),jc=s(Ti,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ti.forEach(t),xc=p(kt),w(Go.$$.fragment,kt),Dc=p(kt),Tt=r(kt,"DIV",{class:!0});var Yo=i(Tt);w(Rn.$$.fragment,Yo),Hc=p(Yo),Zt=r(Yo,"P",{});var Xs=i(Zt);Sc=s(Xs,"The "),Cs=r(Xs,"A",{href:!0});var Um=i(Cs);Lc=s(Um,"TFOpenAIGPTModel"),Um.forEach(t),Nc=s(Xs," forward method, overrides the "),La=r(Xs,"CODE",{});var Km=i(La);Wc=s(Km,"__call__"),Km.forEach(t),Bc=s(Xs," special method."),Xs.forEach(t),Uc=p(Yo),w(Mo.$$.fragment,Yo),Kc=p(Yo),w(Eo.$$.fragment,Yo),Yo.forEach(t),kt.forEach(t),Sr=p(o),eo=r(o,"H2",{class:!0});var vi=i(eo);Fo=r(vi,"A",{id:!0,class:!0,href:!0});var Rm=i(Fo);Na=r(Rm,"SPAN",{});var Vm=i(Na);w(Vn.$$.fragment,Vm),Vm.forEach(t),Rm.forEach(t),Rc=p(vi),Wa=r(vi,"SPAN",{});var Jm=i(Wa);Vc=s(Jm,"TFOpenAIGPTLMHeadModel"),Jm.forEach(t),vi.forEach(t),Lr=p(o),We=r(o,"DIV",{class:!0});var wt=i(We);w(Jn.$$.fragment,wt),Jc=p(wt),Ba=r(wt,"P",{});var Xm=i(Ba);Xc=s(Xm,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Xm.forEach(t),Qc=p(wt),Xn=r(wt,"P",{});var yi=i(Xn);Yc=s(yi,"This model inherits from "),js=r(yi,"A",{href:!0});var Qm=i(js);Zc=s(Qm,"TFPreTrainedModel"),Qm.forEach(t),ep=s(yi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yi.forEach(t),tp=p(wt),Qn=r(wt,"P",{});var bi=i(Qn);op=s(bi,"This model is also a "),Yn=r(bi,"A",{href:!0,rel:!0});var Ym=i(Yn);np=s(Ym,"tf.keras.Model"),Ym.forEach(t),sp=s(bi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bi.forEach(t),ap=p(wt),w(zo.$$.fragment,wt),rp=p(wt),vt=r(wt,"DIV",{class:!0});var Zo=i(vt);w(Zn.$$.fragment,Zo),ip=p(Zo),to=r(Zo,"P",{});var Qs=i(to);lp=s(Qs,"The "),xs=r(Qs,"A",{href:!0});var Zm=i(xs);dp=s(Zm,"TFOpenAIGPTLMHeadModel"),Zm.forEach(t),cp=s(Qs," forward method, overrides the "),Ua=r(Qs,"CODE",{});var eu=i(Ua);pp=s(eu,"__call__"),eu.forEach(t),hp=s(Qs," special method."),Qs.forEach(t),mp=p(Zo),w(qo.$$.fragment,Zo),up=p(Zo),w(Co.$$.fragment,Zo),Zo.forEach(t),wt.forEach(t),Nr=p(o),oo=r(o,"H2",{class:!0});var ki=i(oo);jo=r(ki,"A",{id:!0,class:!0,href:!0});var tu=i(jo);Ka=r(tu,"SPAN",{});var ou=i(Ka);w(es.$$.fragment,ou),ou.forEach(t),tu.forEach(t),fp=p(ki),Ra=r(ki,"SPAN",{});var nu=i(Ra);gp=s(nu,"TFOpenAIGPTDoubleHeadsModel"),nu.forEach(t),ki.forEach(t),Wr=p(o),Be=r(o,"DIV",{class:!0});var $t=i(Be);w(ts.$$.fragment,$t),_p=p($t),Va=r($t,"P",{});var su=i(Va);Tp=s(su,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),su.forEach(t),vp=p($t),os=r($t,"P",{});var wi=i(os);yp=s(wi,"This model inherits from "),Ds=r(wi,"A",{href:!0});var au=i(Ds);bp=s(au,"TFPreTrainedModel"),au.forEach(t),kp=s(wi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi.forEach(t),wp=p($t),ns=r($t,"P",{});var $i=i(ns);$p=s($i,"This model is also a "),ss=r($i,"A",{href:!0,rel:!0});var ru=i(ss);Pp=s(ru,"tf.keras.Model"),ru.forEach(t),Op=s($i,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$i.forEach(t),Ip=p($t),w(xo.$$.fragment,$t),Ap=p($t),yt=r($t,"DIV",{class:!0});var en=i(yt);w(as.$$.fragment,en),Gp=p(en),no=r(en,"P",{});var Ys=i(no);Mp=s(Ys,"The "),Hs=r(Ys,"A",{href:!0});var iu=i(Hs);Ep=s(iu,"TFOpenAIGPTDoubleHeadsModel"),iu.forEach(t),Fp=s(Ys," forward method, overrides the "),Ja=r(Ys,"CODE",{});var lu=i(Ja);zp=s(lu,"__call__"),lu.forEach(t),qp=s(Ys," special method."),Ys.forEach(t),Cp=p(en),w(Do.$$.fragment,en),jp=p(en),w(Ho.$$.fragment,en),en.forEach(t),$t.forEach(t),Br=p(o),so=r(o,"H2",{class:!0});var Pi=i(so);So=r(Pi,"A",{id:!0,class:!0,href:!0});var du=i(So);Xa=r(du,"SPAN",{});var cu=i(Xa);w(rs.$$.fragment,cu),cu.forEach(t),du.forEach(t),xp=p(Pi),Qa=r(Pi,"SPAN",{});var pu=i(Qa);Dp=s(pu,"TFOpenAIGPTForSequenceClassification"),pu.forEach(t),Pi.forEach(t),Ur=p(o),fe=r(o,"DIV",{class:!0});var Re=i(fe);w(is.$$.fragment,Re),Hp=p(Re),Ya=r(Re,"P",{});var hu=i(Ya);Sp=s(hu,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),hu.forEach(t),Lp=p(Re),Ss=r(Re,"P",{});var vh=i(Ss);Ls=r(vh,"A",{href:!0});var mu=i(Ls);Np=s(mu,"TFOpenAIGPTForSequenceClassification"),mu.forEach(t),Wp=s(vh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),vh.forEach(t),Bp=p(Re),ht=r(Re,"P",{});var Ct=i(ht);Up=s(Ct,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Za=r(Ct,"CODE",{});var uu=i(Za);Kp=s(uu,"pad_token_id"),uu.forEach(t),Rp=s(Ct,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),er=r(Ct,"CODE",{});var fu=i(er);Vp=s(fu,"pad_token_id"),fu.forEach(t),Jp=s(Ct,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),tr=r(Ct,"CODE",{});var gu=i(tr);Xp=s(gu,"inputs_embeds"),gu.forEach(t),Qp=s(Ct," are passed instead of "),or=r(Ct,"CODE",{});var _u=i(or);Yp=s(_u,"input_ids"),_u.forEach(t),Zp=s(Ct,`, it does the same (take the last value in
each row of the batch).`),Ct.forEach(t),eh=p(Re),ls=r(Re,"P",{});var Oi=i(ls);th=s(Oi,"This model inherits from "),Ns=r(Oi,"A",{href:!0});var Tu=i(Ns);oh=s(Tu,"TFPreTrainedModel"),Tu.forEach(t),nh=s(Oi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oi.forEach(t),sh=p(Re),ds=r(Re,"P",{});var Ii=i(ds);ah=s(Ii,"This model is also a "),cs=r(Ii,"A",{href:!0,rel:!0});var vu=i(cs);rh=s(vu,"tf.keras.Model"),vu.forEach(t),ih=s(Ii,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ii.forEach(t),lh=p(Re),w(Lo.$$.fragment,Re),dh=p(Re),rt=r(Re,"DIV",{class:!0});var jt=i(rt);w(ps.$$.fragment,jt),ch=p(jt),ao=r(jt,"P",{});var Zs=i(ao);ph=s(Zs,"The "),Ws=r(Zs,"A",{href:!0});var yu=i(Ws);hh=s(yu,"TFOpenAIGPTForSequenceClassification"),yu.forEach(t),mh=s(Zs," forward method, overrides the "),nr=r(Zs,"CODE",{});var bu=i(nr);uh=s(bu,"__call__"),bu.forEach(t),fh=s(Zs," special method."),Zs.forEach(t),gh=p(jt),w(No.$$.fragment,jt),_h=p(jt),w(Wo.$$.fragment,jt),Th=p(jt),w(Bo.$$.fragment,jt),jt.forEach(t),Re.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Zu)),f(u,"id","openai-gpt"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#openai-gpt"),f(m,"class","relative group"),f(oe,"id","overview"),f(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oe,"href","#overview"),f(x,"class","relative group"),f(se,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),f(se,"rel","nofollow"),f(N,"href","https://transformer.huggingface.co/doc/gpt"),f(N,"rel","nofollow"),f(ie,"href","https://huggingface.co/thomwolf"),f(ie,"rel","nofollow"),f(de,"href","https://github.com/openai/finetune-transformer-lm"),f(de,"rel","nofollow"),f(_s,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),f(io,"id","transformers.OpenAIGPTConfig"),f(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(io,"href","#transformers.OpenAIGPTConfig"),f(xt,"class","relative group"),f(Ts,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),f(vs,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),f(nn,"href","https://huggingface.co/openai-gpt"),f(nn,"rel","nofollow"),f(ys,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(bs,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(co,"id","transformers.OpenAIGPTTokenizer"),f(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(co,"href","#transformers.OpenAIGPTTokenizer"),f(Ht,"class","relative group"),f(ks,"href","/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(ws,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(po,"id","transformers.OpenAIGPTTokenizerFast"),f(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(po,"href","#transformers.OpenAIGPTTokenizerFast"),f(St,"class","relative group"),f($s,"href","/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ho,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),f(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ho,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),f(Lt,"class","relative group"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mo,"id","transformers.OpenAIGPTModel"),f(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mo,"href","#transformers.OpenAIGPTModel"),f(Bt,"class","relative group"),f(Ps,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(kn,"rel","nofollow"),f(Os,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(go,"id","transformers.OpenAIGPTLMHeadModel"),f(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(go,"href","#transformers.OpenAIGPTLMHeadModel"),f(Kt,"class","relative group"),f(Is,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(An,"rel","nofollow"),f(As,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vo,"id","transformers.OpenAIGPTDoubleHeadsModel"),f(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(vo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),f(Vt,"class","relative group"),f(Gs,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(qn,"rel","nofollow"),f(Ms,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ko,"id","transformers.OpenAIGPTForSequenceClassification"),f(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ko,"href","#transformers.OpenAIGPTForSequenceClassification"),f(Xt,"class","relative group"),f(Es,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),f(Fs,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),f(Sn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Sn,"rel","nofollow"),f(zs,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"id","transformers.TFOpenAIGPTModel"),f(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ao,"href","#transformers.TFOpenAIGPTModel"),f(Yt,"class","relative group"),f(qs,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(Kn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Kn,"rel","nofollow"),f(Cs,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fo,"id","transformers.TFOpenAIGPTLMHeadModel"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.TFOpenAIGPTLMHeadModel"),f(eo,"class","relative group"),f(js,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(Yn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Yn,"rel","nofollow"),f(xs,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),f(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jo,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),f(oo,"class","relative group"),f(Ds,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(ss,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ss,"rel","nofollow"),f(Hs,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.TFOpenAIGPTForSequenceClassification"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.TFOpenAIGPTForSequenceClassification"),f(so,"class","relative group"),f(Ls,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),f(Ns,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),f(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(cs,"rel","nofollow"),f(Ws,"href","/docs/transformers/v4.22.1/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,v,_),g(o,m,_),e(m,u),e(u,y),$(l,y,null),e(m,h),e(m,M),e(M,we),g(o,ge,_),g(o,x,_),e(x,oe),e(oe,te),$(b,te,null),e(x,$e),e(x,K),e(K,Pe),g(o,_e,_),g(o,D,_),e(D,Oe),e(D,se),e(se,V),e(D,Ie),g(o,Te,_),g(o,B,_),e(B,Ae),g(o,ve,_),g(o,U,_),e(U,he),e(he,Ge),g(o,ne,_),g(o,F,_),e(F,q),g(o,ye,_),g(o,H,_),e(H,me),e(me,Me),e(H,J),e(H,ae),e(ae,Ee),e(ae,z),e(z,Fe),e(ae,X),g(o,be,_),g(o,re,_),e(re,N),e(N,ze),e(re,qe),g(o,S,_),g(o,Z,_),e(Z,Q),e(Z,ie),e(ie,le),e(Z,C),e(Z,de),e(de,j),e(Z,Ce),g(o,ke,_),g(o,T,_),e(T,A),g(o,Ue,_),g(o,L,_),e(L,Ve),e(L,De),e(De,G),e(L,Je),e(L,He),e(He,Xe),e(L,Qe),e(L,Se),e(Se,W),e(L,Y),g(o,Ke,_),$(je,o,_),g(o,R,_),g(o,ee,_),e(ee,Ye),e(ee,ue),e(ue,Ze),e(ee,ce),e(ee,Le),e(Le,Ai),e(ee,Gi),e(ee,_s),e(_s,Mi),e(ee,Ei),e(ee,ea),e(ea,Fi),e(ee,zi),g(o,br,_),g(o,xt,_),e(xt,io),e(io,ta),$(tn,ta,null),e(xt,qi),e(xt,oa),e(oa,Ci),g(o,kr,_),g(o,ct,_),$(on,ct,null),e(ct,ji),e(ct,Ot),e(Ot,xi),e(Ot,Ts),e(Ts,Di),e(Ot,Hi),e(Ot,vs),e(vs,Si),e(Ot,Li),e(Ot,nn),e(nn,Ni),e(Ot,Wi),e(ct,Bi),e(ct,Dt),e(Dt,Ui),e(Dt,ys),e(ys,Ki),e(Dt,Ri),e(Dt,bs),e(bs,Vi),e(Dt,Ji),e(ct,Xi),$(lo,ct,null),g(o,wr,_),g(o,Ht,_),e(Ht,co),e(co,na),$(sn,na,null),e(Ht,Qi),e(Ht,sa),e(sa,Yi),g(o,$r,_),g(o,et,_),$(an,et,null),e(et,Zi),e(et,aa),e(aa,el),e(et,tl),e(et,rn),e(rn,ra),e(ra,ol),e(rn,nl),e(rn,It),e(It,sl),e(It,ia),e(ia,al),e(It,rl),e(It,la),e(la,il),e(It,ll),e(It,da),e(da,dl),e(It,cl),e(et,pl),e(et,ln),e(ln,hl),e(ln,ks),e(ks,ml),e(ln,ul),e(et,fl),e(et,ws),$(dn,ws,null),g(o,Pr,_),g(o,St,_),e(St,po),e(po,ca),$(cn,ca,null),e(St,gl),e(St,pa),e(pa,_l),g(o,Or,_),g(o,pt,_),$(pn,pt,null),e(pt,Tl),e(pt,hn),e(hn,vl),e(hn,ha),e(ha,yl),e(hn,bl),e(pt,kl),e(pt,mn),e(mn,ma),e(ma,wl),e(mn,$l),e(mn,ua),e(ua,Pl),e(pt,Ol),e(pt,un),e(un,Il),e(un,$s),e($s,Al),e(un,Gl),g(o,Ir,_),g(o,Lt,_),e(Lt,ho),e(ho,fa),$(fn,fa,null),e(Lt,Ml),e(Lt,ga),e(ga,El),g(o,Ar,_),g(o,Nt,_),$(gn,Nt,null),e(Nt,Fl),e(Nt,_a),e(_a,zl),g(o,Gr,_),g(o,Wt,_),$(_n,Wt,null),e(Wt,ql),e(Wt,Ta),e(Ta,Cl),g(o,Mr,_),g(o,Bt,_),e(Bt,mo),e(mo,va),$(Tn,va,null),e(Bt,jl),e(Bt,ya),e(ya,xl),g(o,Er,_),g(o,tt,_),$(vn,tt,null),e(tt,Dl),e(tt,ba),e(ba,Hl),e(tt,Sl),e(tt,yn),e(yn,Ll),e(yn,Ps),e(Ps,Nl),e(yn,Wl),e(tt,Bl),e(tt,bn),e(bn,Ul),e(bn,kn),e(kn,Kl),e(bn,Rl),e(tt,Vl),e(tt,ft),$(wn,ft,null),e(ft,Jl),e(ft,Ut),e(Ut,Xl),e(Ut,Os),e(Os,Ql),e(Ut,Yl),e(Ut,ka),e(ka,Zl),e(Ut,ed),e(ft,td),$(uo,ft,null),e(ft,od),$(fo,ft,null),g(o,Fr,_),g(o,Kt,_),e(Kt,go),e(go,wa),$($n,wa,null),e(Kt,nd),e(Kt,$a),e($a,sd),g(o,zr,_),g(o,ot,_),$(Pn,ot,null),e(ot,ad),e(ot,Pa),e(Pa,rd),e(ot,id),e(ot,On),e(On,ld),e(On,Is),e(Is,dd),e(On,cd),e(ot,pd),e(ot,In),e(In,hd),e(In,An),e(An,md),e(In,ud),e(ot,fd),e(ot,gt),$(Gn,gt,null),e(gt,gd),e(gt,Rt),e(Rt,_d),e(Rt,As),e(As,Td),e(Rt,vd),e(Rt,Oa),e(Oa,yd),e(Rt,bd),e(gt,kd),$(_o,gt,null),e(gt,wd),$(To,gt,null),g(o,qr,_),g(o,Vt,_),e(Vt,vo),e(vo,Ia),$(Mn,Ia,null),e(Vt,$d),e(Vt,Aa),e(Aa,Pd),g(o,Cr,_),g(o,nt,_),$(En,nt,null),e(nt,Od),e(nt,Ga),e(Ga,Id),e(nt,Ad),e(nt,Fn),e(Fn,Gd),e(Fn,Gs),e(Gs,Md),e(Fn,Ed),e(nt,Fd),e(nt,zn),e(zn,zd),e(zn,qn),e(qn,qd),e(zn,Cd),e(nt,jd),e(nt,_t),$(Cn,_t,null),e(_t,xd),e(_t,Jt),e(Jt,Dd),e(Jt,Ms),e(Ms,Hd),e(Jt,Sd),e(Jt,Ma),e(Ma,Ld),e(Jt,Nd),e(_t,Wd),$(yo,_t,null),e(_t,Bd),$(bo,_t,null),g(o,jr,_),g(o,Xt,_),e(Xt,ko),e(ko,Ea),$(jn,Ea,null),e(Xt,Ud),e(Xt,Fa),e(Fa,Kd),g(o,xr,_),g(o,st,_),$(xn,st,null),e(st,Rd),e(st,at),e(at,Vd),e(at,Es),e(Es,Jd),e(at,Xd),e(at,za),e(za,Qd),e(at,Yd),e(at,qa),e(qa,Zd),e(at,ec),e(at,Ca),e(Ca,tc),e(at,oc),e(at,ja),e(ja,nc),e(at,sc),e(st,ac),e(st,Dn),e(Dn,rc),e(Dn,Fs),e(Fs,ic),e(Dn,lc),e(st,dc),e(st,Hn),e(Hn,cc),e(Hn,Sn),e(Sn,pc),e(Hn,hc),e(st,mc),e(st,xe),$(Ln,xe,null),e(xe,uc),e(xe,Qt),e(Qt,fc),e(Qt,zs),e(zs,gc),e(Qt,_c),e(Qt,xa),e(xa,Tc),e(Qt,vc),e(xe,yc),$(wo,xe,null),e(xe,bc),$($o,xe,null),e(xe,kc),$(Po,xe,null),e(xe,wc),$(Oo,xe,null),e(xe,$c),$(Io,xe,null),g(o,Dr,_),g(o,Yt,_),e(Yt,Ao),e(Ao,Da),$(Nn,Da,null),e(Yt,Pc),e(Yt,Ha),e(Ha,Oc),g(o,Hr,_),g(o,Ne,_),$(Wn,Ne,null),e(Ne,Ic),e(Ne,Sa),e(Sa,Ac),e(Ne,Gc),e(Ne,Bn),e(Bn,Mc),e(Bn,qs),e(qs,Ec),e(Bn,Fc),e(Ne,zc),e(Ne,Un),e(Un,qc),e(Un,Kn),e(Kn,Cc),e(Un,jc),e(Ne,xc),$(Go,Ne,null),e(Ne,Dc),e(Ne,Tt),$(Rn,Tt,null),e(Tt,Hc),e(Tt,Zt),e(Zt,Sc),e(Zt,Cs),e(Cs,Lc),e(Zt,Nc),e(Zt,La),e(La,Wc),e(Zt,Bc),e(Tt,Uc),$(Mo,Tt,null),e(Tt,Kc),$(Eo,Tt,null),g(o,Sr,_),g(o,eo,_),e(eo,Fo),e(Fo,Na),$(Vn,Na,null),e(eo,Rc),e(eo,Wa),e(Wa,Vc),g(o,Lr,_),g(o,We,_),$(Jn,We,null),e(We,Jc),e(We,Ba),e(Ba,Xc),e(We,Qc),e(We,Xn),e(Xn,Yc),e(Xn,js),e(js,Zc),e(Xn,ep),e(We,tp),e(We,Qn),e(Qn,op),e(Qn,Yn),e(Yn,np),e(Qn,sp),e(We,ap),$(zo,We,null),e(We,rp),e(We,vt),$(Zn,vt,null),e(vt,ip),e(vt,to),e(to,lp),e(to,xs),e(xs,dp),e(to,cp),e(to,Ua),e(Ua,pp),e(to,hp),e(vt,mp),$(qo,vt,null),e(vt,up),$(Co,vt,null),g(o,Nr,_),g(o,oo,_),e(oo,jo),e(jo,Ka),$(es,Ka,null),e(oo,fp),e(oo,Ra),e(Ra,gp),g(o,Wr,_),g(o,Be,_),$(ts,Be,null),e(Be,_p),e(Be,Va),e(Va,Tp),e(Be,vp),e(Be,os),e(os,yp),e(os,Ds),e(Ds,bp),e(os,kp),e(Be,wp),e(Be,ns),e(ns,$p),e(ns,ss),e(ss,Pp),e(ns,Op),e(Be,Ip),$(xo,Be,null),e(Be,Ap),e(Be,yt),$(as,yt,null),e(yt,Gp),e(yt,no),e(no,Mp),e(no,Hs),e(Hs,Ep),e(no,Fp),e(no,Ja),e(Ja,zp),e(no,qp),e(yt,Cp),$(Do,yt,null),e(yt,jp),$(Ho,yt,null),g(o,Br,_),g(o,so,_),e(so,So),e(So,Xa),$(rs,Xa,null),e(so,xp),e(so,Qa),e(Qa,Dp),g(o,Ur,_),g(o,fe,_),$(is,fe,null),e(fe,Hp),e(fe,Ya),e(Ya,Sp),e(fe,Lp),e(fe,Ss),e(Ss,Ls),e(Ls,Np),e(Ss,Wp),e(fe,Bp),e(fe,ht),e(ht,Up),e(ht,Za),e(Za,Kp),e(ht,Rp),e(ht,er),e(er,Vp),e(ht,Jp),e(ht,tr),e(tr,Xp),e(ht,Qp),e(ht,or),e(or,Yp),e(ht,Zp),e(fe,eh),e(fe,ls),e(ls,th),e(ls,Ns),e(Ns,oh),e(ls,nh),e(fe,sh),e(fe,ds),e(ds,ah),e(ds,cs),e(cs,rh),e(ds,ih),e(fe,lh),$(Lo,fe,null),e(fe,dh),e(fe,rt),$(ps,rt,null),e(rt,ch),e(rt,ao),e(ao,ph),e(ao,Ws),e(Ws,hh),e(ao,mh),e(ao,nr),e(nr,uh),e(ao,fh),e(rt,gh),$(No,rt,null),e(rt,_h),$(Wo,rt,null),e(rt,Th),$(Bo,rt,null),Kr=!0},p(o,[_]){const hs={};_&2&&(hs.$$scope={dirty:_,ctx:o}),lo.$set(hs);const sr={};_&2&&(sr.$$scope={dirty:_,ctx:o}),uo.$set(sr);const ar={};_&2&&(ar.$$scope={dirty:_,ctx:o}),fo.$set(ar);const rr={};_&2&&(rr.$$scope={dirty:_,ctx:o}),_o.$set(rr);const ms={};_&2&&(ms.$$scope={dirty:_,ctx:o}),To.$set(ms);const ir={};_&2&&(ir.$$scope={dirty:_,ctx:o}),yo.$set(ir);const lr={};_&2&&(lr.$$scope={dirty:_,ctx:o}),bo.$set(lr);const dr={};_&2&&(dr.$$scope={dirty:_,ctx:o}),wo.$set(dr);const us={};_&2&&(us.$$scope={dirty:_,ctx:o}),$o.$set(us);const cr={};_&2&&(cr.$$scope={dirty:_,ctx:o}),Po.$set(cr);const pr={};_&2&&(pr.$$scope={dirty:_,ctx:o}),Oo.$set(pr);const hr={};_&2&&(hr.$$scope={dirty:_,ctx:o}),Io.$set(hr);const mr={};_&2&&(mr.$$scope={dirty:_,ctx:o}),Go.$set(mr);const ur={};_&2&&(ur.$$scope={dirty:_,ctx:o}),Mo.$set(ur);const fs={};_&2&&(fs.$$scope={dirty:_,ctx:o}),Eo.$set(fs);const fr={};_&2&&(fr.$$scope={dirty:_,ctx:o}),zo.$set(fr);const gs={};_&2&&(gs.$$scope={dirty:_,ctx:o}),qo.$set(gs);const gr={};_&2&&(gr.$$scope={dirty:_,ctx:o}),Co.$set(gr);const Bs={};_&2&&(Bs.$$scope={dirty:_,ctx:o}),xo.$set(Bs);const _r={};_&2&&(_r.$$scope={dirty:_,ctx:o}),Do.$set(_r);const ro={};_&2&&(ro.$$scope={dirty:_,ctx:o}),Ho.$set(ro);const Tr={};_&2&&(Tr.$$scope={dirty:_,ctx:o}),Lo.$set(Tr);const vr={};_&2&&(vr.$$scope={dirty:_,ctx:o}),No.$set(vr);const yr={};_&2&&(yr.$$scope={dirty:_,ctx:o}),Wo.$set(yr);const At={};_&2&&(At.$$scope={dirty:_,ctx:o}),Bo.$set(At)},i(o){Kr||(P(l.$$.fragment,o),P(b.$$.fragment,o),P(je.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(lo.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(dn.$$.fragment,o),P(cn.$$.fragment,o),P(pn.$$.fragment,o),P(fn.$$.fragment,o),P(gn.$$.fragment,o),P(_n.$$.fragment,o),P(Tn.$$.fragment,o),P(vn.$$.fragment,o),P(wn.$$.fragment,o),P(uo.$$.fragment,o),P(fo.$$.fragment,o),P($n.$$.fragment,o),P(Pn.$$.fragment,o),P(Gn.$$.fragment,o),P(_o.$$.fragment,o),P(To.$$.fragment,o),P(Mn.$$.fragment,o),P(En.$$.fragment,o),P(Cn.$$.fragment,o),P(yo.$$.fragment,o),P(bo.$$.fragment,o),P(jn.$$.fragment,o),P(xn.$$.fragment,o),P(Ln.$$.fragment,o),P(wo.$$.fragment,o),P($o.$$.fragment,o),P(Po.$$.fragment,o),P(Oo.$$.fragment,o),P(Io.$$.fragment,o),P(Nn.$$.fragment,o),P(Wn.$$.fragment,o),P(Go.$$.fragment,o),P(Rn.$$.fragment,o),P(Mo.$$.fragment,o),P(Eo.$$.fragment,o),P(Vn.$$.fragment,o),P(Jn.$$.fragment,o),P(zo.$$.fragment,o),P(Zn.$$.fragment,o),P(qo.$$.fragment,o),P(Co.$$.fragment,o),P(es.$$.fragment,o),P(ts.$$.fragment,o),P(xo.$$.fragment,o),P(as.$$.fragment,o),P(Do.$$.fragment,o),P(Ho.$$.fragment,o),P(rs.$$.fragment,o),P(is.$$.fragment,o),P(Lo.$$.fragment,o),P(ps.$$.fragment,o),P(No.$$.fragment,o),P(Wo.$$.fragment,o),P(Bo.$$.fragment,o),Kr=!0)},o(o){O(l.$$.fragment,o),O(b.$$.fragment,o),O(je.$$.fragment,o),O(tn.$$.fragment,o),O(on.$$.fragment,o),O(lo.$$.fragment,o),O(sn.$$.fragment,o),O(an.$$.fragment,o),O(dn.$$.fragment,o),O(cn.$$.fragment,o),O(pn.$$.fragment,o),O(fn.$$.fragment,o),O(gn.$$.fragment,o),O(_n.$$.fragment,o),O(Tn.$$.fragment,o),O(vn.$$.fragment,o),O(wn.$$.fragment,o),O(uo.$$.fragment,o),O(fo.$$.fragment,o),O($n.$$.fragment,o),O(Pn.$$.fragment,o),O(Gn.$$.fragment,o),O(_o.$$.fragment,o),O(To.$$.fragment,o),O(Mn.$$.fragment,o),O(En.$$.fragment,o),O(Cn.$$.fragment,o),O(yo.$$.fragment,o),O(bo.$$.fragment,o),O(jn.$$.fragment,o),O(xn.$$.fragment,o),O(Ln.$$.fragment,o),O(wo.$$.fragment,o),O($o.$$.fragment,o),O(Po.$$.fragment,o),O(Oo.$$.fragment,o),O(Io.$$.fragment,o),O(Nn.$$.fragment,o),O(Wn.$$.fragment,o),O(Go.$$.fragment,o),O(Rn.$$.fragment,o),O(Mo.$$.fragment,o),O(Eo.$$.fragment,o),O(Vn.$$.fragment,o),O(Jn.$$.fragment,o),O(zo.$$.fragment,o),O(Zn.$$.fragment,o),O(qo.$$.fragment,o),O(Co.$$.fragment,o),O(es.$$.fragment,o),O(ts.$$.fragment,o),O(xo.$$.fragment,o),O(as.$$.fragment,o),O(Do.$$.fragment,o),O(Ho.$$.fragment,o),O(rs.$$.fragment,o),O(is.$$.fragment,o),O(Lo.$$.fragment,o),O(ps.$$.fragment,o),O(No.$$.fragment,o),O(Wo.$$.fragment,o),O(Bo.$$.fragment,o),Kr=!1},d(o){t(d),o&&t(v),o&&t(m),I(l),o&&t(ge),o&&t(x),I(b),o&&t(_e),o&&t(D),o&&t(Te),o&&t(B),o&&t(ve),o&&t(U),o&&t(ne),o&&t(F),o&&t(ye),o&&t(H),o&&t(be),o&&t(re),o&&t(S),o&&t(Z),o&&t(ke),o&&t(T),o&&t(Ue),o&&t(L),o&&t(Ke),I(je,o),o&&t(R),o&&t(ee),o&&t(br),o&&t(xt),I(tn),o&&t(kr),o&&t(ct),I(on),I(lo),o&&t(wr),o&&t(Ht),I(sn),o&&t($r),o&&t(et),I(an),I(dn),o&&t(Pr),o&&t(St),I(cn),o&&t(Or),o&&t(pt),I(pn),o&&t(Ir),o&&t(Lt),I(fn),o&&t(Ar),o&&t(Nt),I(gn),o&&t(Gr),o&&t(Wt),I(_n),o&&t(Mr),o&&t(Bt),I(Tn),o&&t(Er),o&&t(tt),I(vn),I(wn),I(uo),I(fo),o&&t(Fr),o&&t(Kt),I($n),o&&t(zr),o&&t(ot),I(Pn),I(Gn),I(_o),I(To),o&&t(qr),o&&t(Vt),I(Mn),o&&t(Cr),o&&t(nt),I(En),I(Cn),I(yo),I(bo),o&&t(jr),o&&t(Xt),I(jn),o&&t(xr),o&&t(st),I(xn),I(Ln),I(wo),I($o),I(Po),I(Oo),I(Io),o&&t(Dr),o&&t(Yt),I(Nn),o&&t(Hr),o&&t(Ne),I(Wn),I(Go),I(Rn),I(Mo),I(Eo),o&&t(Sr),o&&t(eo),I(Vn),o&&t(Lr),o&&t(We),I(Jn),I(zo),I(Zn),I(qo),I(Co),o&&t(Nr),o&&t(oo),I(es),o&&t(Wr),o&&t(Be),I(ts),I(xo),I(as),I(Do),I(Ho),o&&t(Br),o&&t(so),I(rs),o&&t(Ur),o&&t(fe),I(is),I(Lo),I(ps),I(No),I(Wo),I(Bo)}}}const Zu={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function ef(E){return Ou(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lf extends ku{constructor(d){super();wu(this,d,ef,Yu,$u,{})}}export{lf as default,Zu as metadata};
