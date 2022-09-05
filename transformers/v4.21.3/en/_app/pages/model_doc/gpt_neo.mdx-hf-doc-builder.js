import{S as Fi,i as Mi,s as Ci,e as s,k as h,w as b,t as l,M as Ei,c as a,d as o,m as u,a as r,x as y,h as i,b as c,G as e,g as T,y as k,q as $,o as P,B as w,v as qi,L as ge}from"../../chunks/vendor-hf-doc-builder.js";import{T as hn}from"../../chunks/Tip-hf-doc-builder.js";import{D as U}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Q}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as fe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function zi(N){let d,_,p,m,v;return m=new Q({props:{code:`from transformers import GPTNeoModel, GPTNeoConfig

# Initializing a GPTNeo EleutherAI/gpt-neo-1.3B style configuration
configuration = GPTNeoConfig()

# Initializing a model from the EleutherAI/gpt-neo-1.3B style configuration
model = GPTNeoModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoModel, GPTNeoConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPTNeo EleutherAI/gpt-neo-1.3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTNeoConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the EleutherAI/gpt-neo-1.3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),_=l("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){T(n,d,f),e(d,_),T(n,p,f),k(m,n,f),v=!0},p:ge,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){P(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function ji(N){let d,_,p,m,v;return{c(){d=s("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=l("Module"),v=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=i(x,"Module"),x.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){T(n,d,f),e(d,_),e(d,p),e(p,m),e(d,v)},d(n){n&&o(d)}}}function Ai(N){let d,_,p,m,v;return m=new Q({props:{code:`from transformers import GPT2Tokenizer, GPTNeoModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-1.3B")
model = GPTNeoModel.from_pretrained("EleutherAI/gpt-neo-1.3B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTNeoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),_=l("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){T(n,d,f),e(d,_),T(n,p,f),k(m,n,f),v=!0},p:ge,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){P(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Ii(N){let d,_,p,m,v;return{c(){d=s("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=l("Module"),v=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=i(x,"Module"),x.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){T(n,d,f),e(d,_),e(d,p),e(p,m),e(d,v)},d(n){n&&o(d)}}}function Li(N){let d,_,p,m,v;return m=new Q({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTNeoForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-1.3B")
model = GPTNeoForCausalLM.from_pretrained("EleutherAI/gpt-neo-1.3B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTNeoForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),_=l("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){T(n,d,f),e(d,_),T(n,p,f),k(m,n,f),v=!0},p:ge,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){P(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Si(N){let d,_,p,m,v;return{c(){d=s("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=l("Module"),v=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=i(x,"Module"),x.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){T(n,d,f),e(d,_),e(d,p),e(p,m),e(d,v)},d(n){n&&o(d)}}}function Oi(N){let d,_,p,m,v;return m=new Q({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTNeoForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-1.3B")
model = GPTNeoForSequenceClassification.from_pretrained("EleutherAI/gpt-neo-1.3B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTNeoForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),_=l("Example of single-label classification:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Example of single-label classification:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){T(n,d,f),e(d,_),T(n,p,f),k(m,n,f),v=!0},p:ge,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){P(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Di(N){let d,_;return d=new Q({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTNeoForSequenceClassification.from_pretrained("EleutherAI/gpt-neo-1.3B", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(p){y(d.$$.fragment,p)},m(p,m){k(d,p,m),_=!0},p:ge,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){w(d,p)}}}function Bi(N){let d,_,p,m,v;return m=new Q({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTNeoForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-1.3B")
model = GPTNeoForSequenceClassification.from_pretrained("EleutherAI/gpt-neo-1.3B", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTNeoForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=s("p"),_=l("Example of multi-label classification:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Example of multi-label classification:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){T(n,d,f),e(d,_),T(n,p,f),k(m,n,f),v=!0},p:ge,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){P(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Wi(N){let d,_;return d=new Q({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTNeoForSequenceClassification.from_pretrained(
    "EleutherAI/gpt-neo-1.3B", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(p){y(d.$$.fragment,p)},m(p,m){k(d,p,m),_=!0},p:ge,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){w(d,p)}}}function Hi(N){let d,_,p,m,v;return{c(){d=s("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=l("Module"),v=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=i(x,"Module"),x.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){T(n,d,f),e(d,_),e(d,p),e(p,m),e(d,v)},d(n){n&&o(d)}}}function Vi(N){let d,_,p,m,v;return m=new Q({props:{code:`from transformers import GPT2Tokenizer, FlaxGPTNeoModel

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-1.3B")
model = FlaxGPTNeoModel.from_pretrained("EleutherAI/gpt-neo-1.3B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPTNeoModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTNeoModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),_=l("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){T(n,d,f),e(d,_),T(n,p,f),k(m,n,f),v=!0},p:ge,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){P(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Ui(N){let d,_,p,m,v;return{c(){d=s("p"),_=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=l("Module"),v=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=i(x,"Module"),x.forEach(o),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){T(n,d,f),e(d,_),e(d,p),e(p,m),e(d,v)},d(n){n&&o(d)}}}function Ji(N){let d,_,p,m,v;return m=new Q({props:{code:`from transformers import GPT2Tokenizer, FlaxGPTNeoForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-1.3B")
model = FlaxGPTNeoForCausalLM.from_pretrained("EleutherAI/gpt-neo-1.3B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPTNeoForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTNeoForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),_=l("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=i(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){T(n,d,f),e(d,_),T(n,p,f),k(m,n,f),v=!0},p:ge,i(n){v||($(m.$$.fragment,n),v=!0)},o(n){P(m.$$.fragment,n),v=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Ri(N){let d,_,p,m,v,n,f,x,Qn,un,Y,_e,ho,Re,Yn,uo,Zn,mn,J,es,Xe,ts,os,Ke,ns,ss,fn,Ht,as,gn,ve,rs,Qe,ls,is,_n,Z,Te,mo,Ye,ds,fo,cs,vn,be,ps,go,hs,us,Tn,Ze,bn,ee,ye,_o,et,ms,vo,fs,yn,L,tt,gs,te,_s,Vt,vs,Ts,ot,bs,ys,ks,oe,$s,Ut,Ps,ws,Jt,Ns,xs,Gs,ke,kn,ne,$e,To,nt,Fs,bo,Ms,$n,E,st,Cs,yo,Es,qs,at,zs,Rt,js,As,Is,rt,Ls,lt,Ss,Os,Ds,O,it,Bs,se,Ws,Xt,Hs,Vs,ko,Us,Js,Rs,Pe,Xs,we,Pn,ae,Ne,$o,dt,Ks,Po,Qs,wn,q,ct,Ys,wo,Zs,ea,pt,ta,Kt,oa,na,sa,ht,aa,ut,ra,la,ia,D,mt,da,re,ca,Qt,pa,ha,No,ua,ma,fa,xe,ga,Ge,Nn,le,Fe,xo,ft,_a,Go,va,xn,G,gt,Ta,Fo,ba,ya,Yt,Zt,ka,$a,Pa,S,wa,Mo,Na,xa,Co,Ga,Fa,Eo,Ma,Ca,qo,Ea,qa,za,_t,ja,eo,Aa,Ia,La,vt,Sa,Tt,Oa,Da,Ba,C,bt,Wa,ie,Ha,to,Va,Ua,zo,Ja,Ra,Xa,Me,Ka,Ce,Qa,Ee,Ya,qe,Za,ze,Gn,de,je,jo,yt,er,Ao,tr,Fn,F,kt,or,Io,nr,sr,$t,ar,oo,rr,lr,ir,Pt,dr,wt,cr,pr,hr,Lo,ur,mr,H,So,Nt,fr,gr,Oo,xt,_r,vr,Do,Gt,Tr,br,Bo,Ft,yr,kr,B,Mt,$r,ce,Pr,Wo,wr,Nr,Ho,xr,Gr,Fr,Ae,Mr,Ie,Mn,pe,Le,Vo,Ct,Cr,Uo,Er,Cn,M,Et,qr,Jo,zr,jr,qt,Ar,no,Ir,Lr,Sr,zt,Or,jt,Dr,Br,Wr,Ro,Hr,Vr,V,Xo,At,Ur,Jr,Ko,It,Rr,Xr,Qo,Lt,Kr,Qr,Yo,St,Yr,Zr,W,Ot,el,he,tl,Zo,ol,nl,en,sl,al,rl,Se,ll,Oe,En;return n=new me({}),Re=new me({}),Ye=new me({}),Ze=new Q({props:{code:`from transformers import GPTNeoForCausalLM, GPT2Tokenizer

model = GPTNeoForCausalLM.from_pretrained("EleutherAI/gpt-neo-1.3B")
tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-1.3B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoForCausalLM, GPT2Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),et=new me({}),tt=new U({props:{name:"class transformers.GPTNeoConfig",anchor:"transformers.GPTNeoConfig",parameters:[{name:"vocab_size",val:" = 50257"},{name:"max_position_embeddings",val:" = 2048"},{name:"hidden_size",val:" = 2048"},{name:"num_layers",val:" = 24"},{name:"attention_types",val:" = [[['global', 'local'], 12]]"},{name:"num_heads",val:" = 16"},{name:"intermediate_size",val:" = None"},{name:"window_size",val:" = 256"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_dropout",val:" = 0.0"},{name:"embed_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT Neo model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a>. Vocabulary size of the model. Defines the different
tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTNeoConfig.attention_types",description:`<strong>attention_types</strong> (<code>List</code>, <em>optional</em>, defaults to <code>[[[&quot;global&quot;, &quot;local&quot;], 12]]</code>) &#x2014;
The type of attention for each layer in a <code>List</code> of the following format <code>[[[&quot;attention_type&quot;], num_layerss]]</code> e.g. for a 24 layer model <code>[[[&quot;global&quot;], 24]]</code> or <code>[[[&quot;global&quot;, &quot;local&quot;], 12]]</code> Choose the
value of <code>attention_type</code> from <code>[&quot;global&quot;, &quot;local&quot;]</code>`,name:"attention_types"},{anchor:"transformers.GPTNeoConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GPTNeoConfig.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.GPTNeoConfig.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.GPTNeoConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8192) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GPTNeoConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.GPTNeoConfig.embed_dropout",description:`<strong>embed_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"embed_dropout"},{anchor:"transformers.GPTNeoConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GPTNeoConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GPTNeoConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.GPTNeoConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTNeoConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPTNeoConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/configuration_gpt_neo.py#L34"}}),ke=new fe({props:{anchor:"transformers.GPTNeoConfig.example",$$slots:{default:[zi]},$$scope:{ctx:N}}}),nt=new me({}),st=new U({props:{name:"class transformers.GPTNeoModel",anchor:"transformers.GPTNeoModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L476"}}),it=new U({props:{name:"forward",anchor:"transformers.GPTNeoModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPTNeoModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPTNeoModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L497",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new hn({props:{$$slots:{default:[ji]},$$scope:{ctx:N}}}),we=new fe({props:{anchor:"transformers.GPTNeoModel.forward.example",$$slots:{default:[Ai]},$$scope:{ctx:N}}}),dt=new me({}),ct=new U({props:{name:"class transformers.GPTNeoForCausalLM",anchor:"transformers.GPTNeoForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L665"}}),mt=new U({props:{name:"forward",anchor:"transformers.GPTNeoForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPTNeoForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPTNeoForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L715",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new hn({props:{$$slots:{default:[Ii]},$$scope:{ctx:N}}}),Ge=new fe({props:{anchor:"transformers.GPTNeoForCausalLM.forward.example",$$slots:{default:[Li]},$$scope:{ctx:N}}}),ft=new me({}),gt=new U({props:{name:"class transformers.GPTNeoForSequenceClassification",anchor:"transformers.GPTNeoForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L818"}}),bt=new U({props:{name:"forward",anchor:"transformers.GPTNeoForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L830",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new hn({props:{$$slots:{default:[Si]},$$scope:{ctx:N}}}),Ce=new fe({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example",$$slots:{default:[Oi]},$$scope:{ctx:N}}}),Ee=new fe({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example-2",$$slots:{default:[Di]},$$scope:{ctx:N}}}),qe=new fe({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example-3",$$slots:{default:[Bi]},$$scope:{ctx:N}}}),ze=new fe({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example-4",$$slots:{default:[Wi]},$$scope:{ctx:N}}}),yt=new me({}),kt=new U({props:{name:"class transformers.FlaxGPTNeoModel",anchor:"transformers.FlaxGPTNeoModel",parameters:[{name:"config",val:": GPTNeoConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTNeoModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L592"}}),Mt=new U({props:{name:"__call__",anchor:"transformers.FlaxGPTNeoModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTNeoModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTNeoModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTNeoModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTNeoModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTNeoModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTNeoModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L402",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new hn({props:{$$slots:{default:[Hi]},$$scope:{ctx:N}}}),Ie=new fe({props:{anchor:"transformers.FlaxGPTNeoModel.__call__.example",$$slots:{default:[Vi]},$$scope:{ctx:N}}}),Ct=new me({}),Et=new U({props:{name:"class transformers.FlaxGPTNeoForCausalLM",anchor:"transformers.FlaxGPTNeoForCausalLM",parameters:[{name:"config",val:": GPTNeoConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTNeoForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L657"}}),Ot=new U({props:{name:"__call__",anchor:"transformers.FlaxGPTNeoForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L402",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new hn({props:{$$slots:{default:[Ui]},$$scope:{ctx:N}}}),Oe=new fe({props:{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.example",$$slots:{default:[Ji]},$$scope:{ctx:N}}}),{c(){d=s("meta"),_=h(),p=s("h1"),m=s("a"),v=s("span"),b(n.$$.fragment),f=h(),x=s("span"),Qn=l("GPT Neo"),un=h(),Y=s("h2"),_e=s("a"),ho=s("span"),b(Re.$$.fragment),Yn=h(),uo=s("span"),Zn=l("Overview"),mn=h(),J=s("p"),es=l("The GPTNeo model was released in the "),Xe=s("a"),ts=l("EleutherAI/gpt-neo"),os=l(` repository by Sid
Black, Stella Biderman, Leo Gao, Phil Wang and Connor Leahy. It is a GPT2 like causal language model trained on the
`),Ke=s("a"),ns=l("Pile"),ss=l(" dataset."),fn=h(),Ht=s("p"),as=l(`The architecture is similar to GPT2 except that GPT Neo uses local attention in every other layer with a window size of
256 tokens.`),gn=h(),ve=s("p"),rs=l("This model was contributed by "),Qe=s("a"),ls=l("valhalla"),is=l("."),_n=h(),Z=s("h3"),Te=s("a"),mo=s("span"),b(Ye.$$.fragment),ds=h(),fo=s("span"),cs=l("Generation"),vn=h(),be=s("p"),ps=l("The "),go=s("code"),hs=l("generate()"),us=l(" method can be used to generate text using GPT Neo model."),Tn=h(),b(Ze.$$.fragment),bn=h(),ee=s("h2"),ye=s("a"),_o=s("span"),b(et.$$.fragment),ms=h(),vo=s("span"),fs=l("GPTNeoConfig"),yn=h(),L=s("div"),b(tt.$$.fragment),gs=h(),te=s("p"),_s=l("This is the configuration class to store the configuration of a "),Vt=s("a"),vs=l("GPTNeoModel"),Ts=l(`. It is used to instantiate a GPT
Neo model according to the specified arguments, defining the model architecture. Instantiating a configuration with
the defaults will yield a similar configuration to that of the GPTNeo
`),ot=s("a"),bs=l("EleutherAI/gpt-neo-1.3B"),ys=l(" architecture."),ks=h(),oe=s("p"),$s=l("Configuration objects inherit from "),Ut=s("a"),Ps=l("PretrainedConfig"),ws=l(` and can be used to control the model outputs. Read the
documentation from `),Jt=s("a"),Ns=l("PretrainedConfig"),xs=l(" for more information."),Gs=h(),b(ke.$$.fragment),kn=h(),ne=s("h2"),$e=s("a"),To=s("span"),b(nt.$$.fragment),Fs=h(),bo=s("span"),Ms=l("GPTNeoModel"),$n=h(),E=s("div"),b(st.$$.fragment),Cs=h(),yo=s("p"),Es=l("The bare GPT Neo Model transformer outputting raw hidden-states without any specific head on top."),qs=h(),at=s("p"),zs=l("This model inherits from "),Rt=s("a"),js=l("PreTrainedModel"),As=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Is=h(),rt=s("p"),Ls=l("This model is also a PyTorch "),lt=s("a"),Ss=l("torch.nn.Module"),Os=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ds=h(),O=s("div"),b(it.$$.fragment),Bs=h(),se=s("p"),Ws=l("The "),Xt=s("a"),Hs=l("GPTNeoModel"),Vs=l(" forward method, overrides the "),ko=s("code"),Us=l("__call__"),Js=l(" special method."),Rs=h(),b(Pe.$$.fragment),Xs=h(),b(we.$$.fragment),Pn=h(),ae=s("h2"),Ne=s("a"),$o=s("span"),b(dt.$$.fragment),Ks=h(),Po=s("span"),Qs=l("GPTNeoForCausalLM"),wn=h(),q=s("div"),b(ct.$$.fragment),Ys=h(),wo=s("p"),Zs=l(`The GPT Neo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ea=h(),pt=s("p"),ta=l("This model inherits from "),Kt=s("a"),oa=l("PreTrainedModel"),na=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sa=h(),ht=s("p"),aa=l("This model is also a PyTorch "),ut=s("a"),ra=l("torch.nn.Module"),la=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ia=h(),D=s("div"),b(mt.$$.fragment),da=h(),re=s("p"),ca=l("The "),Qt=s("a"),pa=l("GPTNeoForCausalLM"),ha=l(" forward method, overrides the "),No=s("code"),ua=l("__call__"),ma=l(" special method."),fa=h(),b(xe.$$.fragment),ga=h(),b(Ge.$$.fragment),Nn=h(),le=s("h2"),Fe=s("a"),xo=s("span"),b(ft.$$.fragment),_a=h(),Go=s("span"),va=l("GPTNeoForSequenceClassification"),xn=h(),G=s("div"),b(gt.$$.fragment),Ta=h(),Fo=s("p"),ba=l("The GPTNeo Model transformer with a sequence classification head on top (linear layer)."),ya=h(),Yt=s("p"),Zt=s("a"),ka=l("GPTNeoForSequenceClassification"),$a=l(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Pa=h(),S=s("p"),wa=l(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Mo=s("code"),Na=l("pad_token_id"),xa=l(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Co=s("code"),Ga=l("pad_token_id"),Fa=l(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Eo=s("code"),Ma=l("inputs_embeds"),Ca=l(" are passed instead of "),qo=s("code"),Ea=l("input_ids"),qa=l(`, it does the same (take the last value in
each row of the batch).`),za=h(),_t=s("p"),ja=l("This model inherits from "),eo=s("a"),Aa=l("PreTrainedModel"),Ia=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),La=h(),vt=s("p"),Sa=l("This model is also a PyTorch "),Tt=s("a"),Oa=l("torch.nn.Module"),Da=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ba=h(),C=s("div"),b(bt.$$.fragment),Wa=h(),ie=s("p"),Ha=l("The "),to=s("a"),Va=l("GPTNeoForSequenceClassification"),Ua=l(" forward method, overrides the "),zo=s("code"),Ja=l("__call__"),Ra=l(" special method."),Xa=h(),b(Me.$$.fragment),Ka=h(),b(Ce.$$.fragment),Qa=h(),b(Ee.$$.fragment),Ya=h(),b(qe.$$.fragment),Za=h(),b(ze.$$.fragment),Gn=h(),de=s("h2"),je=s("a"),jo=s("span"),b(yt.$$.fragment),er=h(),Ao=s("span"),tr=l("FlaxGPTNeoModel"),Fn=h(),F=s("div"),b(kt.$$.fragment),or=h(),Io=s("p"),nr=l("The bare GPTNeo Model transformer outputting raw hidden-states without any specific head on top."),sr=h(),$t=s("p"),ar=l("This model inherits from "),oo=s("a"),rr=l("FlaxPreTrainedModel"),lr=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ir=h(),Pt=s("p"),dr=l(`This model is also a Flax Linen
`),wt=s("a"),cr=l("flax.nn.Module"),pr=l(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hr=h(),Lo=s("p"),ur=l("Finally, this model supports inherent JAX features such as:"),mr=h(),H=s("ul"),So=s("li"),Nt=s("a"),fr=l("Just-In-Time (JIT) compilation"),gr=h(),Oo=s("li"),xt=s("a"),_r=l("Automatic Differentiation"),vr=h(),Do=s("li"),Gt=s("a"),Tr=l("Vectorization"),br=h(),Bo=s("li"),Ft=s("a"),yr=l("Parallelization"),kr=h(),B=s("div"),b(Mt.$$.fragment),$r=h(),ce=s("p"),Pr=l("The "),Wo=s("code"),wr=l("FlaxGPTNeoPreTrainedModel"),Nr=l(" forward method, overrides the "),Ho=s("code"),xr=l("__call__"),Gr=l(" special method."),Fr=h(),b(Ae.$$.fragment),Mr=h(),b(Ie.$$.fragment),Mn=h(),pe=s("h2"),Le=s("a"),Vo=s("span"),b(Ct.$$.fragment),Cr=h(),Uo=s("span"),Er=l("FlaxGPTNeoForCausalLM"),Cn=h(),M=s("div"),b(Et.$$.fragment),qr=h(),Jo=s("p"),zr=l(`The GPTNeo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),jr=h(),qt=s("p"),Ar=l("This model inherits from "),no=s("a"),Ir=l("FlaxPreTrainedModel"),Lr=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sr=h(),zt=s("p"),Or=l(`This model is also a Flax Linen
`),jt=s("a"),Dr=l("flax.nn.Module"),Br=l(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wr=h(),Ro=s("p"),Hr=l("Finally, this model supports inherent JAX features such as:"),Vr=h(),V=s("ul"),Xo=s("li"),At=s("a"),Ur=l("Just-In-Time (JIT) compilation"),Jr=h(),Ko=s("li"),It=s("a"),Rr=l("Automatic Differentiation"),Xr=h(),Qo=s("li"),Lt=s("a"),Kr=l("Vectorization"),Qr=h(),Yo=s("li"),St=s("a"),Yr=l("Parallelization"),Zr=h(),W=s("div"),b(Ot.$$.fragment),el=h(),he=s("p"),tl=l("The "),Zo=s("code"),ol=l("FlaxGPTNeoPreTrainedModel"),nl=l(" forward method, overrides the "),en=s("code"),sl=l("__call__"),al=l(" special method."),rl=h(),b(Se.$$.fragment),ll=h(),b(Oe.$$.fragment),this.h()},l(t){const g=Ei('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(o),_=u(t),p=a(t,"H1",{class:!0});var Dt=r(p);m=a(Dt,"A",{id:!0,class:!0,href:!0});var tn=r(m);v=a(tn,"SPAN",{});var on=r(v);y(n.$$.fragment,on),on.forEach(o),tn.forEach(o),f=u(Dt),x=a(Dt,"SPAN",{});var nn=r(x);Qn=i(nn,"GPT Neo"),nn.forEach(o),Dt.forEach(o),un=u(t),Y=a(t,"H2",{class:!0});var Bt=r(Y);_e=a(Bt,"A",{id:!0,class:!0,href:!0});var sn=r(_e);ho=a(sn,"SPAN",{});var an=r(ho);y(Re.$$.fragment,an),an.forEach(o),sn.forEach(o),Yn=u(Bt),uo=a(Bt,"SPAN",{});var rn=r(uo);Zn=i(rn,"Overview"),rn.forEach(o),Bt.forEach(o),mn=u(t),J=a(t,"P",{});var ue=r(J);es=i(ue,"The GPTNeo model was released in the "),Xe=a(ue,"A",{href:!0,rel:!0});var ln=r(Xe);ts=i(ln,"EleutherAI/gpt-neo"),ln.forEach(o),os=i(ue,` repository by Sid
Black, Stella Biderman, Leo Gao, Phil Wang and Connor Leahy. It is a GPT2 like causal language model trained on the
`),Ke=a(ue,"A",{href:!0,rel:!0});var dn=r(Ke);ns=i(dn,"Pile"),dn.forEach(o),ss=i(ue," dataset."),ue.forEach(o),fn=u(t),Ht=a(t,"P",{});var cn=r(Ht);as=i(cn,`The architecture is similar to GPT2 except that GPT Neo uses local attention in every other layer with a window size of
256 tokens.`),cn.forEach(o),gn=u(t),ve=a(t,"P",{});var Wt=r(ve);rs=i(Wt,"This model was contributed by "),Qe=a(Wt,"A",{href:!0,rel:!0});var pn=r(Qe);ls=i(pn,"valhalla"),pn.forEach(o),is=i(Wt,"."),Wt.forEach(o),_n=u(t),Z=a(t,"H3",{class:!0});var qn=r(Z);Te=a(qn,"A",{id:!0,class:!0,href:!0});var dl=r(Te);mo=a(dl,"SPAN",{});var cl=r(mo);y(Ye.$$.fragment,cl),cl.forEach(o),dl.forEach(o),ds=u(qn),fo=a(qn,"SPAN",{});var pl=r(fo);cs=i(pl,"Generation"),pl.forEach(o),qn.forEach(o),vn=u(t),be=a(t,"P",{});var zn=r(be);ps=i(zn,"The "),go=a(zn,"CODE",{});var hl=r(go);hs=i(hl,"generate()"),hl.forEach(o),us=i(zn," method can be used to generate text using GPT Neo model."),zn.forEach(o),Tn=u(t),y(Ze.$$.fragment,t),bn=u(t),ee=a(t,"H2",{class:!0});var jn=r(ee);ye=a(jn,"A",{id:!0,class:!0,href:!0});var ul=r(ye);_o=a(ul,"SPAN",{});var ml=r(_o);y(et.$$.fragment,ml),ml.forEach(o),ul.forEach(o),ms=u(jn),vo=a(jn,"SPAN",{});var fl=r(vo);fs=i(fl,"GPTNeoConfig"),fl.forEach(o),jn.forEach(o),yn=u(t),L=a(t,"DIV",{class:!0});var De=r(L);y(tt.$$.fragment,De),gs=u(De),te=a(De,"P",{});var so=r(te);_s=i(so,"This is the configuration class to store the configuration of a "),Vt=a(so,"A",{href:!0});var gl=r(Vt);vs=i(gl,"GPTNeoModel"),gl.forEach(o),Ts=i(so,`. It is used to instantiate a GPT
Neo model according to the specified arguments, defining the model architecture. Instantiating a configuration with
the defaults will yield a similar configuration to that of the GPTNeo
`),ot=a(so,"A",{href:!0,rel:!0});var _l=r(ot);bs=i(_l,"EleutherAI/gpt-neo-1.3B"),_l.forEach(o),ys=i(so," architecture."),so.forEach(o),ks=u(De),oe=a(De,"P",{});var ao=r(oe);$s=i(ao,"Configuration objects inherit from "),Ut=a(ao,"A",{href:!0});var vl=r(Ut);Ps=i(vl,"PretrainedConfig"),vl.forEach(o),ws=i(ao,` and can be used to control the model outputs. Read the
documentation from `),Jt=a(ao,"A",{href:!0});var Tl=r(Jt);Ns=i(Tl,"PretrainedConfig"),Tl.forEach(o),xs=i(ao," for more information."),ao.forEach(o),Gs=u(De),y(ke.$$.fragment,De),De.forEach(o),kn=u(t),ne=a(t,"H2",{class:!0});var An=r(ne);$e=a(An,"A",{id:!0,class:!0,href:!0});var bl=r($e);To=a(bl,"SPAN",{});var yl=r(To);y(nt.$$.fragment,yl),yl.forEach(o),bl.forEach(o),Fs=u(An),bo=a(An,"SPAN",{});var kl=r(bo);Ms=i(kl,"GPTNeoModel"),kl.forEach(o),An.forEach(o),$n=u(t),E=a(t,"DIV",{class:!0});var R=r(E);y(st.$$.fragment,R),Cs=u(R),yo=a(R,"P",{});var $l=r(yo);Es=i($l,"The bare GPT Neo Model transformer outputting raw hidden-states without any specific head on top."),$l.forEach(o),qs=u(R),at=a(R,"P",{});var In=r(at);zs=i(In,"This model inherits from "),Rt=a(In,"A",{href:!0});var Pl=r(Rt);js=i(Pl,"PreTrainedModel"),Pl.forEach(o),As=i(In,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),In.forEach(o),Is=u(R),rt=a(R,"P",{});var Ln=r(rt);Ls=i(Ln,"This model is also a PyTorch "),lt=a(Ln,"A",{href:!0,rel:!0});var wl=r(lt);Ss=i(wl,"torch.nn.Module"),wl.forEach(o),Os=i(Ln,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ln.forEach(o),Ds=u(R),O=a(R,"DIV",{class:!0});var Be=r(O);y(it.$$.fragment,Be),Bs=u(Be),se=a(Be,"P",{});var ro=r(se);Ws=i(ro,"The "),Xt=a(ro,"A",{href:!0});var Nl=r(Xt);Hs=i(Nl,"GPTNeoModel"),Nl.forEach(o),Vs=i(ro," forward method, overrides the "),ko=a(ro,"CODE",{});var xl=r(ko);Us=i(xl,"__call__"),xl.forEach(o),Js=i(ro," special method."),ro.forEach(o),Rs=u(Be),y(Pe.$$.fragment,Be),Xs=u(Be),y(we.$$.fragment,Be),Be.forEach(o),R.forEach(o),Pn=u(t),ae=a(t,"H2",{class:!0});var Sn=r(ae);Ne=a(Sn,"A",{id:!0,class:!0,href:!0});var Gl=r(Ne);$o=a(Gl,"SPAN",{});var Fl=r($o);y(dt.$$.fragment,Fl),Fl.forEach(o),Gl.forEach(o),Ks=u(Sn),Po=a(Sn,"SPAN",{});var Ml=r(Po);Qs=i(Ml,"GPTNeoForCausalLM"),Ml.forEach(o),Sn.forEach(o),wn=u(t),q=a(t,"DIV",{class:!0});var X=r(q);y(ct.$$.fragment,X),Ys=u(X),wo=a(X,"P",{});var Cl=r(wo);Zs=i(Cl,`The GPT Neo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Cl.forEach(o),ea=u(X),pt=a(X,"P",{});var On=r(pt);ta=i(On,"This model inherits from "),Kt=a(On,"A",{href:!0});var El=r(Kt);oa=i(El,"PreTrainedModel"),El.forEach(o),na=i(On,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),On.forEach(o),sa=u(X),ht=a(X,"P",{});var Dn=r(ht);aa=i(Dn,"This model is also a PyTorch "),ut=a(Dn,"A",{href:!0,rel:!0});var ql=r(ut);ra=i(ql,"torch.nn.Module"),ql.forEach(o),la=i(Dn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dn.forEach(o),ia=u(X),D=a(X,"DIV",{class:!0});var We=r(D);y(mt.$$.fragment,We),da=u(We),re=a(We,"P",{});var lo=r(re);ca=i(lo,"The "),Qt=a(lo,"A",{href:!0});var zl=r(Qt);pa=i(zl,"GPTNeoForCausalLM"),zl.forEach(o),ha=i(lo," forward method, overrides the "),No=a(lo,"CODE",{});var jl=r(No);ua=i(jl,"__call__"),jl.forEach(o),ma=i(lo," special method."),lo.forEach(o),fa=u(We),y(xe.$$.fragment,We),ga=u(We),y(Ge.$$.fragment,We),We.forEach(o),X.forEach(o),Nn=u(t),le=a(t,"H2",{class:!0});var Bn=r(le);Fe=a(Bn,"A",{id:!0,class:!0,href:!0});var Al=r(Fe);xo=a(Al,"SPAN",{});var Il=r(xo);y(ft.$$.fragment,Il),Il.forEach(o),Al.forEach(o),_a=u(Bn),Go=a(Bn,"SPAN",{});var Ll=r(Go);va=i(Ll,"GPTNeoForSequenceClassification"),Ll.forEach(o),Bn.forEach(o),xn=u(t),G=a(t,"DIV",{class:!0});var z=r(G);y(gt.$$.fragment,z),Ta=u(z),Fo=a(z,"P",{});var Sl=r(Fo);ba=i(Sl,"The GPTNeo Model transformer with a sequence classification head on top (linear layer)."),Sl.forEach(o),ya=u(z),Yt=a(z,"P",{});var il=r(Yt);Zt=a(il,"A",{href:!0});var Ol=r(Zt);ka=i(Ol,"GPTNeoForSequenceClassification"),Ol.forEach(o),$a=i(il,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),il.forEach(o),Pa=u(z),S=a(z,"P",{});var K=r(S);wa=i(K,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Mo=a(K,"CODE",{});var Dl=r(Mo);Na=i(Dl,"pad_token_id"),Dl.forEach(o),xa=i(K,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Co=a(K,"CODE",{});var Bl=r(Co);Ga=i(Bl,"pad_token_id"),Bl.forEach(o),Fa=i(K,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Eo=a(K,"CODE",{});var Wl=r(Eo);Ma=i(Wl,"inputs_embeds"),Wl.forEach(o),Ca=i(K," are passed instead of "),qo=a(K,"CODE",{});var Hl=r(qo);Ea=i(Hl,"input_ids"),Hl.forEach(o),qa=i(K,`, it does the same (take the last value in
each row of the batch).`),K.forEach(o),za=u(z),_t=a(z,"P",{});var Wn=r(_t);ja=i(Wn,"This model inherits from "),eo=a(Wn,"A",{href:!0});var Vl=r(eo);Aa=i(Vl,"PreTrainedModel"),Vl.forEach(o),Ia=i(Wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wn.forEach(o),La=u(z),vt=a(z,"P",{});var Hn=r(vt);Sa=i(Hn,"This model is also a PyTorch "),Tt=a(Hn,"A",{href:!0,rel:!0});var Ul=r(Tt);Oa=i(Ul,"torch.nn.Module"),Ul.forEach(o),Da=i(Hn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hn.forEach(o),Ba=u(z),C=a(z,"DIV",{class:!0});var j=r(C);y(bt.$$.fragment,j),Wa=u(j),ie=a(j,"P",{});var io=r(ie);Ha=i(io,"The "),to=a(io,"A",{href:!0});var Jl=r(to);Va=i(Jl,"GPTNeoForSequenceClassification"),Jl.forEach(o),Ua=i(io," forward method, overrides the "),zo=a(io,"CODE",{});var Rl=r(zo);Ja=i(Rl,"__call__"),Rl.forEach(o),Ra=i(io," special method."),io.forEach(o),Xa=u(j),y(Me.$$.fragment,j),Ka=u(j),y(Ce.$$.fragment,j),Qa=u(j),y(Ee.$$.fragment,j),Ya=u(j),y(qe.$$.fragment,j),Za=u(j),y(ze.$$.fragment,j),j.forEach(o),z.forEach(o),Gn=u(t),de=a(t,"H2",{class:!0});var Vn=r(de);je=a(Vn,"A",{id:!0,class:!0,href:!0});var Xl=r(je);jo=a(Xl,"SPAN",{});var Kl=r(jo);y(yt.$$.fragment,Kl),Kl.forEach(o),Xl.forEach(o),er=u(Vn),Ao=a(Vn,"SPAN",{});var Ql=r(Ao);tr=i(Ql,"FlaxGPTNeoModel"),Ql.forEach(o),Vn.forEach(o),Fn=u(t),F=a(t,"DIV",{class:!0});var A=r(F);y(kt.$$.fragment,A),or=u(A),Io=a(A,"P",{});var Yl=r(Io);nr=i(Yl,"The bare GPTNeo Model transformer outputting raw hidden-states without any specific head on top."),Yl.forEach(o),sr=u(A),$t=a(A,"P",{});var Un=r($t);ar=i(Un,"This model inherits from "),oo=a(Un,"A",{href:!0});var Zl=r(oo);rr=i(Zl,"FlaxPreTrainedModel"),Zl.forEach(o),lr=i(Un,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Un.forEach(o),ir=u(A),Pt=a(A,"P",{});var Jn=r(Pt);dr=i(Jn,`This model is also a Flax Linen
`),wt=a(Jn,"A",{href:!0,rel:!0});var ei=r(wt);cr=i(ei,"flax.nn.Module"),ei.forEach(o),pr=i(Jn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jn.forEach(o),hr=u(A),Lo=a(A,"P",{});var ti=r(Lo);ur=i(ti,"Finally, this model supports inherent JAX features such as:"),ti.forEach(o),mr=u(A),H=a(A,"UL",{});var He=r(H);So=a(He,"LI",{});var oi=r(So);Nt=a(oi,"A",{href:!0,rel:!0});var ni=r(Nt);fr=i(ni,"Just-In-Time (JIT) compilation"),ni.forEach(o),oi.forEach(o),gr=u(He),Oo=a(He,"LI",{});var si=r(Oo);xt=a(si,"A",{href:!0,rel:!0});var ai=r(xt);_r=i(ai,"Automatic Differentiation"),ai.forEach(o),si.forEach(o),vr=u(He),Do=a(He,"LI",{});var ri=r(Do);Gt=a(ri,"A",{href:!0,rel:!0});var li=r(Gt);Tr=i(li,"Vectorization"),li.forEach(o),ri.forEach(o),br=u(He),Bo=a(He,"LI",{});var ii=r(Bo);Ft=a(ii,"A",{href:!0,rel:!0});var di=r(Ft);yr=i(di,"Parallelization"),di.forEach(o),ii.forEach(o),He.forEach(o),kr=u(A),B=a(A,"DIV",{class:!0});var Ve=r(B);y(Mt.$$.fragment,Ve),$r=u(Ve),ce=a(Ve,"P",{});var co=r(ce);Pr=i(co,"The "),Wo=a(co,"CODE",{});var ci=r(Wo);wr=i(ci,"FlaxGPTNeoPreTrainedModel"),ci.forEach(o),Nr=i(co," forward method, overrides the "),Ho=a(co,"CODE",{});var pi=r(Ho);xr=i(pi,"__call__"),pi.forEach(o),Gr=i(co," special method."),co.forEach(o),Fr=u(Ve),y(Ae.$$.fragment,Ve),Mr=u(Ve),y(Ie.$$.fragment,Ve),Ve.forEach(o),A.forEach(o),Mn=u(t),pe=a(t,"H2",{class:!0});var Rn=r(pe);Le=a(Rn,"A",{id:!0,class:!0,href:!0});var hi=r(Le);Vo=a(hi,"SPAN",{});var ui=r(Vo);y(Ct.$$.fragment,ui),ui.forEach(o),hi.forEach(o),Cr=u(Rn),Uo=a(Rn,"SPAN",{});var mi=r(Uo);Er=i(mi,"FlaxGPTNeoForCausalLM"),mi.forEach(o),Rn.forEach(o),Cn=u(t),M=a(t,"DIV",{class:!0});var I=r(M);y(Et.$$.fragment,I),qr=u(I),Jo=a(I,"P",{});var fi=r(Jo);zr=i(fi,`The GPTNeo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),fi.forEach(o),jr=u(I),qt=a(I,"P",{});var Xn=r(qt);Ar=i(Xn,"This model inherits from "),no=a(Xn,"A",{href:!0});var gi=r(no);Ir=i(gi,"FlaxPreTrainedModel"),gi.forEach(o),Lr=i(Xn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xn.forEach(o),Sr=u(I),zt=a(I,"P",{});var Kn=r(zt);Or=i(Kn,`This model is also a Flax Linen
`),jt=a(Kn,"A",{href:!0,rel:!0});var _i=r(jt);Dr=i(_i,"flax.nn.Module"),_i.forEach(o),Br=i(Kn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kn.forEach(o),Wr=u(I),Ro=a(I,"P",{});var vi=r(Ro);Hr=i(vi,"Finally, this model supports inherent JAX features such as:"),vi.forEach(o),Vr=u(I),V=a(I,"UL",{});var Ue=r(V);Xo=a(Ue,"LI",{});var Ti=r(Xo);At=a(Ti,"A",{href:!0,rel:!0});var bi=r(At);Ur=i(bi,"Just-In-Time (JIT) compilation"),bi.forEach(o),Ti.forEach(o),Jr=u(Ue),Ko=a(Ue,"LI",{});var yi=r(Ko);It=a(yi,"A",{href:!0,rel:!0});var ki=r(It);Rr=i(ki,"Automatic Differentiation"),ki.forEach(o),yi.forEach(o),Xr=u(Ue),Qo=a(Ue,"LI",{});var $i=r(Qo);Lt=a($i,"A",{href:!0,rel:!0});var Pi=r(Lt);Kr=i(Pi,"Vectorization"),Pi.forEach(o),$i.forEach(o),Qr=u(Ue),Yo=a(Ue,"LI",{});var wi=r(Yo);St=a(wi,"A",{href:!0,rel:!0});var Ni=r(St);Yr=i(Ni,"Parallelization"),Ni.forEach(o),wi.forEach(o),Ue.forEach(o),Zr=u(I),W=a(I,"DIV",{class:!0});var Je=r(W);y(Ot.$$.fragment,Je),el=u(Je),he=a(Je,"P",{});var po=r(he);tl=i(po,"The "),Zo=a(po,"CODE",{});var xi=r(Zo);ol=i(xi,"FlaxGPTNeoPreTrainedModel"),xi.forEach(o),nl=i(po," forward method, overrides the "),en=a(po,"CODE",{});var Gi=r(en);sl=i(Gi,"__call__"),Gi.forEach(o),al=i(po," special method."),po.forEach(o),rl=u(Je),y(Se.$$.fragment,Je),ll=u(Je),y(Oe.$$.fragment,Je),Je.forEach(o),I.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Xi)),c(m,"id","gpt-neo"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#gpt-neo"),c(p,"class","relative group"),c(_e,"id","overview"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#overview"),c(Y,"class","relative group"),c(Xe,"href","https://github.com/EleutherAI/gpt-neo"),c(Xe,"rel","nofollow"),c(Ke,"href","https://pile.eleuther.ai/"),c(Ke,"rel","nofollow"),c(Qe,"href","https://huggingface.co/valhalla"),c(Qe,"rel","nofollow"),c(Te,"id","generation"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#generation"),c(Z,"class","relative group"),c(ye,"id","transformers.GPTNeoConfig"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.GPTNeoConfig"),c(ee,"class","relative group"),c(Vt,"href","/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoModel"),c(ot,"href","https://huggingface.co/EleutherAI/gpt-neo-1.3B"),c(ot,"rel","nofollow"),c(Ut,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),c(Jt,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"id","transformers.GPTNeoModel"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#transformers.GPTNeoModel"),c(ne,"class","relative group"),c(Rt,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),c(lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(lt,"rel","nofollow"),c(Xt,"href","/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ne,"id","transformers.GPTNeoForCausalLM"),c(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ne,"href","#transformers.GPTNeoForCausalLM"),c(ae,"class","relative group"),c(Kt,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),c(ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ut,"rel","nofollow"),c(Qt,"href","/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoForCausalLM"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fe,"id","transformers.GPTNeoForSequenceClassification"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#transformers.GPTNeoForSequenceClassification"),c(le,"class","relative group"),c(Zt,"href","/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoForSequenceClassification"),c(eo,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),c(Tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Tt,"rel","nofollow"),c(to,"href","/docs/transformers/v4.21.3/en/model_doc/gpt_neo#transformers.GPTNeoForSequenceClassification"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"id","transformers.FlaxGPTNeoModel"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#transformers.FlaxGPTNeoModel"),c(de,"class","relative group"),c(oo,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(wt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(wt,"rel","nofollow"),c(Nt,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Nt,"rel","nofollow"),c(xt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xt,"rel","nofollow"),c(Gt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Gt,"rel","nofollow"),c(Ft,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ft,"rel","nofollow"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.FlaxGPTNeoForCausalLM"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.FlaxGPTNeoForCausalLM"),c(pe,"class","relative group"),c(no,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(jt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(jt,"rel","nofollow"),c(At,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(At,"rel","nofollow"),c(It,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(It,"rel","nofollow"),c(Lt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Lt,"rel","nofollow"),c(St,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(St,"rel","nofollow"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),T(t,_,g),T(t,p,g),e(p,m),e(m,v),k(n,v,null),e(p,f),e(p,x),e(x,Qn),T(t,un,g),T(t,Y,g),e(Y,_e),e(_e,ho),k(Re,ho,null),e(Y,Yn),e(Y,uo),e(uo,Zn),T(t,mn,g),T(t,J,g),e(J,es),e(J,Xe),e(Xe,ts),e(J,os),e(J,Ke),e(Ke,ns),e(J,ss),T(t,fn,g),T(t,Ht,g),e(Ht,as),T(t,gn,g),T(t,ve,g),e(ve,rs),e(ve,Qe),e(Qe,ls),e(ve,is),T(t,_n,g),T(t,Z,g),e(Z,Te),e(Te,mo),k(Ye,mo,null),e(Z,ds),e(Z,fo),e(fo,cs),T(t,vn,g),T(t,be,g),e(be,ps),e(be,go),e(go,hs),e(be,us),T(t,Tn,g),k(Ze,t,g),T(t,bn,g),T(t,ee,g),e(ee,ye),e(ye,_o),k(et,_o,null),e(ee,ms),e(ee,vo),e(vo,fs),T(t,yn,g),T(t,L,g),k(tt,L,null),e(L,gs),e(L,te),e(te,_s),e(te,Vt),e(Vt,vs),e(te,Ts),e(te,ot),e(ot,bs),e(te,ys),e(L,ks),e(L,oe),e(oe,$s),e(oe,Ut),e(Ut,Ps),e(oe,ws),e(oe,Jt),e(Jt,Ns),e(oe,xs),e(L,Gs),k(ke,L,null),T(t,kn,g),T(t,ne,g),e(ne,$e),e($e,To),k(nt,To,null),e(ne,Fs),e(ne,bo),e(bo,Ms),T(t,$n,g),T(t,E,g),k(st,E,null),e(E,Cs),e(E,yo),e(yo,Es),e(E,qs),e(E,at),e(at,zs),e(at,Rt),e(Rt,js),e(at,As),e(E,Is),e(E,rt),e(rt,Ls),e(rt,lt),e(lt,Ss),e(rt,Os),e(E,Ds),e(E,O),k(it,O,null),e(O,Bs),e(O,se),e(se,Ws),e(se,Xt),e(Xt,Hs),e(se,Vs),e(se,ko),e(ko,Us),e(se,Js),e(O,Rs),k(Pe,O,null),e(O,Xs),k(we,O,null),T(t,Pn,g),T(t,ae,g),e(ae,Ne),e(Ne,$o),k(dt,$o,null),e(ae,Ks),e(ae,Po),e(Po,Qs),T(t,wn,g),T(t,q,g),k(ct,q,null),e(q,Ys),e(q,wo),e(wo,Zs),e(q,ea),e(q,pt),e(pt,ta),e(pt,Kt),e(Kt,oa),e(pt,na),e(q,sa),e(q,ht),e(ht,aa),e(ht,ut),e(ut,ra),e(ht,la),e(q,ia),e(q,D),k(mt,D,null),e(D,da),e(D,re),e(re,ca),e(re,Qt),e(Qt,pa),e(re,ha),e(re,No),e(No,ua),e(re,ma),e(D,fa),k(xe,D,null),e(D,ga),k(Ge,D,null),T(t,Nn,g),T(t,le,g),e(le,Fe),e(Fe,xo),k(ft,xo,null),e(le,_a),e(le,Go),e(Go,va),T(t,xn,g),T(t,G,g),k(gt,G,null),e(G,Ta),e(G,Fo),e(Fo,ba),e(G,ya),e(G,Yt),e(Yt,Zt),e(Zt,ka),e(Yt,$a),e(G,Pa),e(G,S),e(S,wa),e(S,Mo),e(Mo,Na),e(S,xa),e(S,Co),e(Co,Ga),e(S,Fa),e(S,Eo),e(Eo,Ma),e(S,Ca),e(S,qo),e(qo,Ea),e(S,qa),e(G,za),e(G,_t),e(_t,ja),e(_t,eo),e(eo,Aa),e(_t,Ia),e(G,La),e(G,vt),e(vt,Sa),e(vt,Tt),e(Tt,Oa),e(vt,Da),e(G,Ba),e(G,C),k(bt,C,null),e(C,Wa),e(C,ie),e(ie,Ha),e(ie,to),e(to,Va),e(ie,Ua),e(ie,zo),e(zo,Ja),e(ie,Ra),e(C,Xa),k(Me,C,null),e(C,Ka),k(Ce,C,null),e(C,Qa),k(Ee,C,null),e(C,Ya),k(qe,C,null),e(C,Za),k(ze,C,null),T(t,Gn,g),T(t,de,g),e(de,je),e(je,jo),k(yt,jo,null),e(de,er),e(de,Ao),e(Ao,tr),T(t,Fn,g),T(t,F,g),k(kt,F,null),e(F,or),e(F,Io),e(Io,nr),e(F,sr),e(F,$t),e($t,ar),e($t,oo),e(oo,rr),e($t,lr),e(F,ir),e(F,Pt),e(Pt,dr),e(Pt,wt),e(wt,cr),e(Pt,pr),e(F,hr),e(F,Lo),e(Lo,ur),e(F,mr),e(F,H),e(H,So),e(So,Nt),e(Nt,fr),e(H,gr),e(H,Oo),e(Oo,xt),e(xt,_r),e(H,vr),e(H,Do),e(Do,Gt),e(Gt,Tr),e(H,br),e(H,Bo),e(Bo,Ft),e(Ft,yr),e(F,kr),e(F,B),k(Mt,B,null),e(B,$r),e(B,ce),e(ce,Pr),e(ce,Wo),e(Wo,wr),e(ce,Nr),e(ce,Ho),e(Ho,xr),e(ce,Gr),e(B,Fr),k(Ae,B,null),e(B,Mr),k(Ie,B,null),T(t,Mn,g),T(t,pe,g),e(pe,Le),e(Le,Vo),k(Ct,Vo,null),e(pe,Cr),e(pe,Uo),e(Uo,Er),T(t,Cn,g),T(t,M,g),k(Et,M,null),e(M,qr),e(M,Jo),e(Jo,zr),e(M,jr),e(M,qt),e(qt,Ar),e(qt,no),e(no,Ir),e(qt,Lr),e(M,Sr),e(M,zt),e(zt,Or),e(zt,jt),e(jt,Dr),e(zt,Br),e(M,Wr),e(M,Ro),e(Ro,Hr),e(M,Vr),e(M,V),e(V,Xo),e(Xo,At),e(At,Ur),e(V,Jr),e(V,Ko),e(Ko,It),e(It,Rr),e(V,Xr),e(V,Qo),e(Qo,Lt),e(Lt,Kr),e(V,Qr),e(V,Yo),e(Yo,St),e(St,Yr),e(M,Zr),e(M,W),k(Ot,W,null),e(W,el),e(W,he),e(he,tl),e(he,Zo),e(Zo,ol),e(he,nl),e(he,en),e(en,sl),e(he,al),e(W,rl),k(Se,W,null),e(W,ll),k(Oe,W,null),En=!0},p(t,[g]){const Dt={};g&2&&(Dt.$$scope={dirty:g,ctx:t}),ke.$set(Dt);const tn={};g&2&&(tn.$$scope={dirty:g,ctx:t}),Pe.$set(tn);const on={};g&2&&(on.$$scope={dirty:g,ctx:t}),we.$set(on);const nn={};g&2&&(nn.$$scope={dirty:g,ctx:t}),xe.$set(nn);const Bt={};g&2&&(Bt.$$scope={dirty:g,ctx:t}),Ge.$set(Bt);const sn={};g&2&&(sn.$$scope={dirty:g,ctx:t}),Me.$set(sn);const an={};g&2&&(an.$$scope={dirty:g,ctx:t}),Ce.$set(an);const rn={};g&2&&(rn.$$scope={dirty:g,ctx:t}),Ee.$set(rn);const ue={};g&2&&(ue.$$scope={dirty:g,ctx:t}),qe.$set(ue);const ln={};g&2&&(ln.$$scope={dirty:g,ctx:t}),ze.$set(ln);const dn={};g&2&&(dn.$$scope={dirty:g,ctx:t}),Ae.$set(dn);const cn={};g&2&&(cn.$$scope={dirty:g,ctx:t}),Ie.$set(cn);const Wt={};g&2&&(Wt.$$scope={dirty:g,ctx:t}),Se.$set(Wt);const pn={};g&2&&(pn.$$scope={dirty:g,ctx:t}),Oe.$set(pn)},i(t){En||($(n.$$.fragment,t),$(Re.$$.fragment,t),$(Ye.$$.fragment,t),$(Ze.$$.fragment,t),$(et.$$.fragment,t),$(tt.$$.fragment,t),$(ke.$$.fragment,t),$(nt.$$.fragment,t),$(st.$$.fragment,t),$(it.$$.fragment,t),$(Pe.$$.fragment,t),$(we.$$.fragment,t),$(dt.$$.fragment,t),$(ct.$$.fragment,t),$(mt.$$.fragment,t),$(xe.$$.fragment,t),$(Ge.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$(bt.$$.fragment,t),$(Me.$$.fragment,t),$(Ce.$$.fragment,t),$(Ee.$$.fragment,t),$(qe.$$.fragment,t),$(ze.$$.fragment,t),$(yt.$$.fragment,t),$(kt.$$.fragment,t),$(Mt.$$.fragment,t),$(Ae.$$.fragment,t),$(Ie.$$.fragment,t),$(Ct.$$.fragment,t),$(Et.$$.fragment,t),$(Ot.$$.fragment,t),$(Se.$$.fragment,t),$(Oe.$$.fragment,t),En=!0)},o(t){P(n.$$.fragment,t),P(Re.$$.fragment,t),P(Ye.$$.fragment,t),P(Ze.$$.fragment,t),P(et.$$.fragment,t),P(tt.$$.fragment,t),P(ke.$$.fragment,t),P(nt.$$.fragment,t),P(st.$$.fragment,t),P(it.$$.fragment,t),P(Pe.$$.fragment,t),P(we.$$.fragment,t),P(dt.$$.fragment,t),P(ct.$$.fragment,t),P(mt.$$.fragment,t),P(xe.$$.fragment,t),P(Ge.$$.fragment,t),P(ft.$$.fragment,t),P(gt.$$.fragment,t),P(bt.$$.fragment,t),P(Me.$$.fragment,t),P(Ce.$$.fragment,t),P(Ee.$$.fragment,t),P(qe.$$.fragment,t),P(ze.$$.fragment,t),P(yt.$$.fragment,t),P(kt.$$.fragment,t),P(Mt.$$.fragment,t),P(Ae.$$.fragment,t),P(Ie.$$.fragment,t),P(Ct.$$.fragment,t),P(Et.$$.fragment,t),P(Ot.$$.fragment,t),P(Se.$$.fragment,t),P(Oe.$$.fragment,t),En=!1},d(t){o(d),t&&o(_),t&&o(p),w(n),t&&o(un),t&&o(Y),w(Re),t&&o(mn),t&&o(J),t&&o(fn),t&&o(Ht),t&&o(gn),t&&o(ve),t&&o(_n),t&&o(Z),w(Ye),t&&o(vn),t&&o(be),t&&o(Tn),w(Ze,t),t&&o(bn),t&&o(ee),w(et),t&&o(yn),t&&o(L),w(tt),w(ke),t&&o(kn),t&&o(ne),w(nt),t&&o($n),t&&o(E),w(st),w(it),w(Pe),w(we),t&&o(Pn),t&&o(ae),w(dt),t&&o(wn),t&&o(q),w(ct),w(mt),w(xe),w(Ge),t&&o(Nn),t&&o(le),w(ft),t&&o(xn),t&&o(G),w(gt),w(bt),w(Me),w(Ce),w(Ee),w(qe),w(ze),t&&o(Gn),t&&o(de),w(yt),t&&o(Fn),t&&o(F),w(kt),w(Mt),w(Ae),w(Ie),t&&o(Mn),t&&o(pe),w(Ct),t&&o(Cn),t&&o(M),w(Et),w(Ot),w(Se),w(Oe)}}}const Xi={local:"gpt-neo",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTNeoConfig",title:"GPTNeoConfig"},{local:"transformers.GPTNeoModel",title:"GPTNeoModel"},{local:"transformers.GPTNeoForCausalLM",title:"GPTNeoForCausalLM"},{local:"transformers.GPTNeoForSequenceClassification",title:"GPTNeoForSequenceClassification"},{local:"transformers.FlaxGPTNeoModel",title:"FlaxGPTNeoModel"},{local:"transformers.FlaxGPTNeoForCausalLM",title:"FlaxGPTNeoForCausalLM"}],title:"GPT Neo"};function Ki(N){return qi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class nd extends Fi{constructor(d){super();Mi(this,d,Ki,Ri,Ci,{})}}export{nd as default,Xi as metadata};
