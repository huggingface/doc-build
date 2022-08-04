import{S as Fl,i as Ml,s as Cl,e as s,k as h,w as b,t as i,M as El,c as a,d as o,m as u,a as r,x as y,h as l,b as c,G as e,g as v,y as k,q as $,o as P,B as w,v as ql,L as ge}from"../../chunks/vendor-hf-doc-builder.js";import{T as hn}from"../../chunks/Tip-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Q}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as fe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function zl(N){let d,_,p,m,T;return m=new Q({props:{code:`from transformers import GPTNeoModel, GPTNeoConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),_=i("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){v(n,d,f),e(d,_),v(n,p,f),k(m,n,f),T=!0},p:ge,i(n){T||($(m.$$.fragment,n),T=!0)},o(n){P(m.$$.fragment,n),T=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function jl(N){let d,_,p,m,T;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=l(x,"Module"),x.forEach(o),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){v(n,d,f),e(d,_),e(d,p),e(p,m),e(d,T)},d(n){n&&o(d)}}}function Al(N){let d,_,p,m,T;return m=new Q({props:{code:`from transformers import GPT2Tokenizer, GPTNeoModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),_=i("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){v(n,d,f),e(d,_),v(n,p,f),k(m,n,f),T=!0},p:ge,i(n){T||($(m.$$.fragment,n),T=!0)},o(n){P(m.$$.fragment,n),T=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Il(N){let d,_,p,m,T;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=l(x,"Module"),x.forEach(o),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){v(n,d,f),e(d,_),e(d,p),e(p,m),e(d,T)},d(n){n&&o(d)}}}function Ll(N){let d,_,p,m,T;return m=new Q({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),_=i("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){v(n,d,f),e(d,_),v(n,p,f),k(m,n,f),T=!0},p:ge,i(n){T||($(m.$$.fragment,n),T=!0)},o(n){P(m.$$.fragment,n),T=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Sl(N){let d,_,p,m,T;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=l(x,"Module"),x.forEach(o),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){v(n,d,f),e(d,_),e(d,p),e(p,m),e(d,T)},d(n){n&&o(d)}}}function Ol(N){let d,_,p,m,T;return m=new Q({props:{code:`import torch
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
`}}),{c(){d=s("p"),_=i("Example of single-label classification:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Example of single-label classification:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){v(n,d,f),e(d,_),v(n,p,f),k(m,n,f),T=!0},p:ge,i(n){T||($(m.$$.fragment,n),T=!0)},o(n){P(m.$$.fragment,n),T=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Dl(N){let d,_;return d=new Q({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){b(d.$$.fragment)},l(p){y(d.$$.fragment,p)},m(p,m){k(d,p,m),_=!0},p:ge,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){w(d,p)}}}function Bl(N){let d,_,p,m,T;return m=new Q({props:{code:`import torch
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
`}}),{c(){d=s("p"),_=i("Example of multi-label classification:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Example of multi-label classification:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){v(n,d,f),e(d,_),v(n,p,f),k(m,n,f),T=!0},p:ge,i(n){T||($(m.$$.fragment,n),T=!0)},o(n){P(m.$$.fragment,n),T=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Wl(N){let d,_;return d=new Q({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(p){y(d.$$.fragment,p)},m(p,m){k(d,p,m),_=!0},p:ge,i(p){_||($(d.$$.fragment,p),_=!0)},o(p){P(d.$$.fragment,p),_=!1},d(p){w(d,p)}}}function Hl(N){let d,_,p,m,T;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=l(x,"Module"),x.forEach(o),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){v(n,d,f),e(d,_),e(d,p),e(p,m),e(d,T)},d(n){n&&o(d)}}}function Ul(N){let d,_,p,m,T;return m=new Q({props:{code:`from transformers import GPT2Tokenizer, FlaxGPTNeoModel

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-1.3B")
model = FlaxGPTNeoModel.from_pretrained("EleutherAI/gpt-neo-1.3B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPTNeoModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTNeoModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),_=i("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){v(n,d,f),e(d,_),v(n,p,f),k(m,n,f),T=!0},p:ge,i(n){T||($(m.$$.fragment,n),T=!0)},o(n){P(m.$$.fragment,n),T=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Vl(N){let d,_,p,m,T;return{c(){d=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s("code"),m=i("Module"),T=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var x=r(p);m=l(x,"Module"),x.forEach(o),T=l(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(n,f){v(n,d,f),e(d,_),e(d,p),e(p,m),e(d,T)},d(n){n&&o(d)}}}function Jl(N){let d,_,p,m,T;return m=new Q({props:{code:`from transformers import GPT2Tokenizer, FlaxGPTNeoForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),_=i("Example:"),p=h(),b(m.$$.fragment)},l(n){d=a(n,"P",{});var f=r(d);_=l(f,"Example:"),f.forEach(o),p=u(n),y(m.$$.fragment,n)},m(n,f){v(n,d,f),e(d,_),v(n,p,f),k(m,n,f),T=!0},p:ge,i(n){T||($(m.$$.fragment,n),T=!0)},o(n){P(m.$$.fragment,n),T=!1},d(n){n&&o(d),n&&o(p),w(m,n)}}}function Rl(N){let d,_,p,m,T,n,f,x,Qn,un,Y,_e,ho,Re,Yn,uo,Zn,mn,J,es,Xe,ts,os,Ke,ns,ss,fn,Ht,as,gn,Te,rs,Qe,is,ls,_n,Z,ve,mo,Ye,ds,fo,cs,Tn,be,ps,go,hs,us,vn,Ze,bn,ee,ye,_o,et,ms,To,fs,yn,L,tt,gs,te,_s,Ut,Ts,vs,ot,bs,ys,ks,oe,$s,Vt,Ps,ws,Jt,Ns,xs,Gs,ke,kn,ne,$e,vo,nt,Fs,bo,Ms,$n,E,st,Cs,yo,Es,qs,at,zs,Rt,js,As,Is,rt,Ls,it,Ss,Os,Ds,O,lt,Bs,se,Ws,Xt,Hs,Us,ko,Vs,Js,Rs,Pe,Xs,we,Pn,ae,Ne,$o,dt,Ks,Po,Qs,wn,q,ct,Ys,wo,Zs,ea,pt,ta,Kt,oa,na,sa,ht,aa,ut,ra,ia,la,D,mt,da,re,ca,Qt,pa,ha,No,ua,ma,fa,xe,ga,Ge,Nn,ie,Fe,xo,ft,_a,Go,Ta,xn,G,gt,va,Fo,ba,ya,Yt,Zt,ka,$a,Pa,S,wa,Mo,Na,xa,Co,Ga,Fa,Eo,Ma,Ca,qo,Ea,qa,za,_t,ja,eo,Aa,Ia,La,Tt,Sa,vt,Oa,Da,Ba,C,bt,Wa,le,Ha,to,Ua,Va,zo,Ja,Ra,Xa,Me,Ka,Ce,Qa,Ee,Ya,qe,Za,ze,Gn,de,je,jo,yt,er,Ao,tr,Fn,F,kt,or,Io,nr,sr,$t,ar,oo,rr,ir,lr,Pt,dr,wt,cr,pr,hr,Lo,ur,mr,H,So,Nt,fr,gr,Oo,xt,_r,Tr,Do,Gt,vr,br,Bo,Ft,yr,kr,B,Mt,$r,ce,Pr,Wo,wr,Nr,Ho,xr,Gr,Fr,Ae,Mr,Ie,Mn,pe,Le,Uo,Ct,Cr,Vo,Er,Cn,M,Et,qr,Jo,zr,jr,qt,Ar,no,Ir,Lr,Sr,zt,Or,jt,Dr,Br,Wr,Ro,Hr,Ur,U,Xo,At,Vr,Jr,Ko,It,Rr,Xr,Qo,Lt,Kr,Qr,Yo,St,Yr,Zr,W,Ot,ei,he,ti,Zo,oi,ni,en,si,ai,ri,Se,ii,Oe,En;return n=new me({}),Re=new me({}),Ye=new me({}),Ze=new Q({props:{code:`from transformers import GPTNeoForCausalLM, GPT2Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),et=new me({}),tt=new V({props:{name:"class transformers.GPTNeoConfig",anchor:"transformers.GPTNeoConfig",parameters:[{name:"vocab_size",val:" = 50257"},{name:"max_position_embeddings",val:" = 2048"},{name:"hidden_size",val:" = 2048"},{name:"num_layers",val:" = 24"},{name:"attention_types",val:" = [[['global', 'local'], 12]]"},{name:"num_heads",val:" = 16"},{name:"intermediate_size",val:" = None"},{name:"window_size",val:" = 256"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_dropout",val:" = 0.0"},{name:"embed_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT Neo model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a>. Vocabulary size of the model. Defines the different
tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTNeoConfig.attention_types",description:`<strong>attention_types</strong> (<code>List</code>, <em>optional</em>, defaults to <code>[[[&quot;global&quot;, &quot;local&quot;], 12]]</code>) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.GPTNeoConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTNeoConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPTNeoConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/configuration_gpt_neo.py#L34"}}),ke=new fe({props:{anchor:"transformers.GPTNeoConfig.example",$$slots:{default:[zl]},$$scope:{ctx:N}}}),nt=new me({}),st=new V({props:{name:"class transformers.GPTNeoModel",anchor:"transformers.GPTNeoModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L476"}}),lt=new V({props:{name:"forward",anchor:"transformers.GPTNeoModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L497",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new hn({props:{$$slots:{default:[jl]},$$scope:{ctx:N}}}),we=new fe({props:{anchor:"transformers.GPTNeoModel.forward.example",$$slots:{default:[Al]},$$scope:{ctx:N}}}),dt=new me({}),ct=new V({props:{name:"class transformers.GPTNeoForCausalLM",anchor:"transformers.GPTNeoForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L665"}}),mt=new V({props:{name:"forward",anchor:"transformers.GPTNeoForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L715",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new hn({props:{$$slots:{default:[Il]},$$scope:{ctx:N}}}),Ge=new fe({props:{anchor:"transformers.GPTNeoForCausalLM.forward.example",$$slots:{default:[Ll]},$$scope:{ctx:N}}}),ft=new me({}),gt=new V({props:{name:"class transformers.GPTNeoForSequenceClassification",anchor:"transformers.GPTNeoForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L818"}}),bt=new V({props:{name:"forward",anchor:"transformers.GPTNeoForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GPTNeoForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L830",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
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
`}}),Me=new hn({props:{$$slots:{default:[Sl]},$$scope:{ctx:N}}}),Ce=new fe({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example",$$slots:{default:[Ol]},$$scope:{ctx:N}}}),Ee=new fe({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example-2",$$slots:{default:[Dl]},$$scope:{ctx:N}}}),qe=new fe({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example-3",$$slots:{default:[Bl]},$$scope:{ctx:N}}}),ze=new fe({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example-4",$$slots:{default:[Wl]},$$scope:{ctx:N}}}),yt=new me({}),kt=new V({props:{name:"class transformers.FlaxGPTNeoModel",anchor:"transformers.FlaxGPTNeoModel",parameters:[{name:"config",val:": GPTNeoConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTNeoModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L592"}}),Mt=new V({props:{name:"__call__",anchor:"transformers.FlaxGPTNeoModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L402",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new hn({props:{$$slots:{default:[Hl]},$$scope:{ctx:N}}}),Ie=new fe({props:{anchor:"transformers.FlaxGPTNeoModel.__call__.example",$$slots:{default:[Ul]},$$scope:{ctx:N}}}),Ct=new me({}),Et=new V({props:{name:"class transformers.FlaxGPTNeoForCausalLM",anchor:"transformers.FlaxGPTNeoForCausalLM",parameters:[{name:"config",val:": GPTNeoConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTNeoForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L657"}}),Ot=new V({props:{name:"__call__",anchor:"transformers.FlaxGPTNeoForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTNeoTokenizer</code>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L402",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new hn({props:{$$slots:{default:[Vl]},$$scope:{ctx:N}}}),Oe=new fe({props:{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.example",$$slots:{default:[Jl]},$$scope:{ctx:N}}}),{c(){d=s("meta"),_=h(),p=s("h1"),m=s("a"),T=s("span"),b(n.$$.fragment),f=h(),x=s("span"),Qn=i("GPT Neo"),un=h(),Y=s("h2"),_e=s("a"),ho=s("span"),b(Re.$$.fragment),Yn=h(),uo=s("span"),Zn=i("Overview"),mn=h(),J=s("p"),es=i("The GPTNeo model was released in the "),Xe=s("a"),ts=i("EleutherAI/gpt-neo"),os=i(` repository by Sid
Black, Stella Biderman, Leo Gao, Phil Wang and Connor Leahy. It is a GPT2 like causal language model trained on the
`),Ke=s("a"),ns=i("Pile"),ss=i(" dataset."),fn=h(),Ht=s("p"),as=i(`The architecture is similar to GPT2 except that GPT Neo uses local attention in every other layer with a window size of
256 tokens.`),gn=h(),Te=s("p"),rs=i("This model was contributed by "),Qe=s("a"),is=i("valhalla"),ls=i("."),_n=h(),Z=s("h3"),ve=s("a"),mo=s("span"),b(Ye.$$.fragment),ds=h(),fo=s("span"),cs=i("Generation"),Tn=h(),be=s("p"),ps=i("The "),go=s("code"),hs=i("generate()"),us=i(" method can be used to generate text using GPT Neo model."),vn=h(),b(Ze.$$.fragment),bn=h(),ee=s("h2"),ye=s("a"),_o=s("span"),b(et.$$.fragment),ms=h(),To=s("span"),fs=i("GPTNeoConfig"),yn=h(),L=s("div"),b(tt.$$.fragment),gs=h(),te=s("p"),_s=i("This is the configuration class to store the configuration of a "),Ut=s("a"),Ts=i("GPTNeoModel"),vs=i(`. It is used to instantiate a GPT
Neo model according to the specified arguments, defining the model architecture. Instantiating a configuration with
the defaults will yield a similar configuration to that of the GPTNeo
`),ot=s("a"),bs=i("EleutherAI/gpt-neo-1.3B"),ys=i(" architecture."),ks=h(),oe=s("p"),$s=i("Configuration objects inherit from "),Vt=s("a"),Ps=i("PretrainedConfig"),ws=i(` and can be used to control the model outputs. Read the
documentation from `),Jt=s("a"),Ns=i("PretrainedConfig"),xs=i(" for more information."),Gs=h(),b(ke.$$.fragment),kn=h(),ne=s("h2"),$e=s("a"),vo=s("span"),b(nt.$$.fragment),Fs=h(),bo=s("span"),Ms=i("GPTNeoModel"),$n=h(),E=s("div"),b(st.$$.fragment),Cs=h(),yo=s("p"),Es=i("The bare GPT Neo Model transformer outputting raw hidden-states without any specific head on top."),qs=h(),at=s("p"),zs=i("This model inherits from "),Rt=s("a"),js=i("PreTrainedModel"),As=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Is=h(),rt=s("p"),Ls=i("This model is also a PyTorch "),it=s("a"),Ss=i("torch.nn.Module"),Os=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ds=h(),O=s("div"),b(lt.$$.fragment),Bs=h(),se=s("p"),Ws=i("The "),Xt=s("a"),Hs=i("GPTNeoModel"),Us=i(" forward method, overrides the "),ko=s("code"),Vs=i("__call__"),Js=i(" special method."),Rs=h(),b(Pe.$$.fragment),Xs=h(),b(we.$$.fragment),Pn=h(),ae=s("h2"),Ne=s("a"),$o=s("span"),b(dt.$$.fragment),Ks=h(),Po=s("span"),Qs=i("GPTNeoForCausalLM"),wn=h(),q=s("div"),b(ct.$$.fragment),Ys=h(),wo=s("p"),Zs=i(`The GPT Neo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ea=h(),pt=s("p"),ta=i("This model inherits from "),Kt=s("a"),oa=i("PreTrainedModel"),na=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sa=h(),ht=s("p"),aa=i("This model is also a PyTorch "),ut=s("a"),ra=i("torch.nn.Module"),ia=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),la=h(),D=s("div"),b(mt.$$.fragment),da=h(),re=s("p"),ca=i("The "),Qt=s("a"),pa=i("GPTNeoForCausalLM"),ha=i(" forward method, overrides the "),No=s("code"),ua=i("__call__"),ma=i(" special method."),fa=h(),b(xe.$$.fragment),ga=h(),b(Ge.$$.fragment),Nn=h(),ie=s("h2"),Fe=s("a"),xo=s("span"),b(ft.$$.fragment),_a=h(),Go=s("span"),Ta=i("GPTNeoForSequenceClassification"),xn=h(),G=s("div"),b(gt.$$.fragment),va=h(),Fo=s("p"),ba=i("The GPTNeo Model transformer with a sequence classification head on top (linear layer)."),ya=h(),Yt=s("p"),Zt=s("a"),ka=i("GPTNeoForSequenceClassification"),$a=i(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Pa=h(),S=s("p"),wa=i(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Mo=s("code"),Na=i("pad_token_id"),xa=i(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Co=s("code"),Ga=i("pad_token_id"),Fa=i(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Eo=s("code"),Ma=i("inputs_embeds"),Ca=i(" are passed instead of "),qo=s("code"),Ea=i("input_ids"),qa=i(`, it does the same (take the last value in
each row of the batch).`),za=h(),_t=s("p"),ja=i("This model inherits from "),eo=s("a"),Aa=i("PreTrainedModel"),Ia=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),La=h(),Tt=s("p"),Sa=i("This model is also a PyTorch "),vt=s("a"),Oa=i("torch.nn.Module"),Da=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ba=h(),C=s("div"),b(bt.$$.fragment),Wa=h(),le=s("p"),Ha=i("The "),to=s("a"),Ua=i("GPTNeoForSequenceClassification"),Va=i(" forward method, overrides the "),zo=s("code"),Ja=i("__call__"),Ra=i(" special method."),Xa=h(),b(Me.$$.fragment),Ka=h(),b(Ce.$$.fragment),Qa=h(),b(Ee.$$.fragment),Ya=h(),b(qe.$$.fragment),Za=h(),b(ze.$$.fragment),Gn=h(),de=s("h2"),je=s("a"),jo=s("span"),b(yt.$$.fragment),er=h(),Ao=s("span"),tr=i("FlaxGPTNeoModel"),Fn=h(),F=s("div"),b(kt.$$.fragment),or=h(),Io=s("p"),nr=i("The bare GPTNeo Model transformer outputting raw hidden-states without any specific head on top."),sr=h(),$t=s("p"),ar=i("This model inherits from "),oo=s("a"),rr=i("FlaxPreTrainedModel"),ir=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lr=h(),Pt=s("p"),dr=i(`This model is also a Flax Linen
`),wt=s("a"),cr=i("flax.nn.Module"),pr=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hr=h(),Lo=s("p"),ur=i("Finally, this model supports inherent JAX features such as:"),mr=h(),H=s("ul"),So=s("li"),Nt=s("a"),fr=i("Just-In-Time (JIT) compilation"),gr=h(),Oo=s("li"),xt=s("a"),_r=i("Automatic Differentiation"),Tr=h(),Do=s("li"),Gt=s("a"),vr=i("Vectorization"),br=h(),Bo=s("li"),Ft=s("a"),yr=i("Parallelization"),kr=h(),B=s("div"),b(Mt.$$.fragment),$r=h(),ce=s("p"),Pr=i("The "),Wo=s("code"),wr=i("FlaxGPTNeoPreTrainedModel"),Nr=i(" forward method, overrides the "),Ho=s("code"),xr=i("__call__"),Gr=i(" special method."),Fr=h(),b(Ae.$$.fragment),Mr=h(),b(Ie.$$.fragment),Mn=h(),pe=s("h2"),Le=s("a"),Uo=s("span"),b(Ct.$$.fragment),Cr=h(),Vo=s("span"),Er=i("FlaxGPTNeoForCausalLM"),Cn=h(),M=s("div"),b(Et.$$.fragment),qr=h(),Jo=s("p"),zr=i(`The GPTNeo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),jr=h(),qt=s("p"),Ar=i("This model inherits from "),no=s("a"),Ir=i("FlaxPreTrainedModel"),Lr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sr=h(),zt=s("p"),Or=i(`This model is also a Flax Linen
`),jt=s("a"),Dr=i("flax.nn.Module"),Br=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Wr=h(),Ro=s("p"),Hr=i("Finally, this model supports inherent JAX features such as:"),Ur=h(),U=s("ul"),Xo=s("li"),At=s("a"),Vr=i("Just-In-Time (JIT) compilation"),Jr=h(),Ko=s("li"),It=s("a"),Rr=i("Automatic Differentiation"),Xr=h(),Qo=s("li"),Lt=s("a"),Kr=i("Vectorization"),Qr=h(),Yo=s("li"),St=s("a"),Yr=i("Parallelization"),Zr=h(),W=s("div"),b(Ot.$$.fragment),ei=h(),he=s("p"),ti=i("The "),Zo=s("code"),oi=i("FlaxGPTNeoPreTrainedModel"),ni=i(" forward method, overrides the "),en=s("code"),si=i("__call__"),ai=i(" special method."),ri=h(),b(Se.$$.fragment),ii=h(),b(Oe.$$.fragment),this.h()},l(t){const g=El('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(o),_=u(t),p=a(t,"H1",{class:!0});var Dt=r(p);m=a(Dt,"A",{id:!0,class:!0,href:!0});var tn=r(m);T=a(tn,"SPAN",{});var on=r(T);y(n.$$.fragment,on),on.forEach(o),tn.forEach(o),f=u(Dt),x=a(Dt,"SPAN",{});var nn=r(x);Qn=l(nn,"GPT Neo"),nn.forEach(o),Dt.forEach(o),un=u(t),Y=a(t,"H2",{class:!0});var Bt=r(Y);_e=a(Bt,"A",{id:!0,class:!0,href:!0});var sn=r(_e);ho=a(sn,"SPAN",{});var an=r(ho);y(Re.$$.fragment,an),an.forEach(o),sn.forEach(o),Yn=u(Bt),uo=a(Bt,"SPAN",{});var rn=r(uo);Zn=l(rn,"Overview"),rn.forEach(o),Bt.forEach(o),mn=u(t),J=a(t,"P",{});var ue=r(J);es=l(ue,"The GPTNeo model was released in the "),Xe=a(ue,"A",{href:!0,rel:!0});var ln=r(Xe);ts=l(ln,"EleutherAI/gpt-neo"),ln.forEach(o),os=l(ue,` repository by Sid
Black, Stella Biderman, Leo Gao, Phil Wang and Connor Leahy. It is a GPT2 like causal language model trained on the
`),Ke=a(ue,"A",{href:!0,rel:!0});var dn=r(Ke);ns=l(dn,"Pile"),dn.forEach(o),ss=l(ue," dataset."),ue.forEach(o),fn=u(t),Ht=a(t,"P",{});var cn=r(Ht);as=l(cn,`The architecture is similar to GPT2 except that GPT Neo uses local attention in every other layer with a window size of
256 tokens.`),cn.forEach(o),gn=u(t),Te=a(t,"P",{});var Wt=r(Te);rs=l(Wt,"This model was contributed by "),Qe=a(Wt,"A",{href:!0,rel:!0});var pn=r(Qe);is=l(pn,"valhalla"),pn.forEach(o),ls=l(Wt,"."),Wt.forEach(o),_n=u(t),Z=a(t,"H3",{class:!0});var qn=r(Z);ve=a(qn,"A",{id:!0,class:!0,href:!0});var di=r(ve);mo=a(di,"SPAN",{});var ci=r(mo);y(Ye.$$.fragment,ci),ci.forEach(o),di.forEach(o),ds=u(qn),fo=a(qn,"SPAN",{});var pi=r(fo);cs=l(pi,"Generation"),pi.forEach(o),qn.forEach(o),Tn=u(t),be=a(t,"P",{});var zn=r(be);ps=l(zn,"The "),go=a(zn,"CODE",{});var hi=r(go);hs=l(hi,"generate()"),hi.forEach(o),us=l(zn," method can be used to generate text using GPT Neo model."),zn.forEach(o),vn=u(t),y(Ze.$$.fragment,t),bn=u(t),ee=a(t,"H2",{class:!0});var jn=r(ee);ye=a(jn,"A",{id:!0,class:!0,href:!0});var ui=r(ye);_o=a(ui,"SPAN",{});var mi=r(_o);y(et.$$.fragment,mi),mi.forEach(o),ui.forEach(o),ms=u(jn),To=a(jn,"SPAN",{});var fi=r(To);fs=l(fi,"GPTNeoConfig"),fi.forEach(o),jn.forEach(o),yn=u(t),L=a(t,"DIV",{class:!0});var De=r(L);y(tt.$$.fragment,De),gs=u(De),te=a(De,"P",{});var so=r(te);_s=l(so,"This is the configuration class to store the configuration of a "),Ut=a(so,"A",{href:!0});var gi=r(Ut);Ts=l(gi,"GPTNeoModel"),gi.forEach(o),vs=l(so,`. It is used to instantiate a GPT
Neo model according to the specified arguments, defining the model architecture. Instantiating a configuration with
the defaults will yield a similar configuration to that of the GPTNeo
`),ot=a(so,"A",{href:!0,rel:!0});var _i=r(ot);bs=l(_i,"EleutherAI/gpt-neo-1.3B"),_i.forEach(o),ys=l(so," architecture."),so.forEach(o),ks=u(De),oe=a(De,"P",{});var ao=r(oe);$s=l(ao,"Configuration objects inherit from "),Vt=a(ao,"A",{href:!0});var Ti=r(Vt);Ps=l(Ti,"PretrainedConfig"),Ti.forEach(o),ws=l(ao,` and can be used to control the model outputs. Read the
documentation from `),Jt=a(ao,"A",{href:!0});var vi=r(Jt);Ns=l(vi,"PretrainedConfig"),vi.forEach(o),xs=l(ao," for more information."),ao.forEach(o),Gs=u(De),y(ke.$$.fragment,De),De.forEach(o),kn=u(t),ne=a(t,"H2",{class:!0});var An=r(ne);$e=a(An,"A",{id:!0,class:!0,href:!0});var bi=r($e);vo=a(bi,"SPAN",{});var yi=r(vo);y(nt.$$.fragment,yi),yi.forEach(o),bi.forEach(o),Fs=u(An),bo=a(An,"SPAN",{});var ki=r(bo);Ms=l(ki,"GPTNeoModel"),ki.forEach(o),An.forEach(o),$n=u(t),E=a(t,"DIV",{class:!0});var R=r(E);y(st.$$.fragment,R),Cs=u(R),yo=a(R,"P",{});var $i=r(yo);Es=l($i,"The bare GPT Neo Model transformer outputting raw hidden-states without any specific head on top."),$i.forEach(o),qs=u(R),at=a(R,"P",{});var In=r(at);zs=l(In,"This model inherits from "),Rt=a(In,"A",{href:!0});var Pi=r(Rt);js=l(Pi,"PreTrainedModel"),Pi.forEach(o),As=l(In,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),In.forEach(o),Is=u(R),rt=a(R,"P",{});var Ln=r(rt);Ls=l(Ln,"This model is also a PyTorch "),it=a(Ln,"A",{href:!0,rel:!0});var wi=r(it);Ss=l(wi,"torch.nn.Module"),wi.forEach(o),Os=l(Ln,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ln.forEach(o),Ds=u(R),O=a(R,"DIV",{class:!0});var Be=r(O);y(lt.$$.fragment,Be),Bs=u(Be),se=a(Be,"P",{});var ro=r(se);Ws=l(ro,"The "),Xt=a(ro,"A",{href:!0});var Ni=r(Xt);Hs=l(Ni,"GPTNeoModel"),Ni.forEach(o),Us=l(ro," forward method, overrides the "),ko=a(ro,"CODE",{});var xi=r(ko);Vs=l(xi,"__call__"),xi.forEach(o),Js=l(ro," special method."),ro.forEach(o),Rs=u(Be),y(Pe.$$.fragment,Be),Xs=u(Be),y(we.$$.fragment,Be),Be.forEach(o),R.forEach(o),Pn=u(t),ae=a(t,"H2",{class:!0});var Sn=r(ae);Ne=a(Sn,"A",{id:!0,class:!0,href:!0});var Gi=r(Ne);$o=a(Gi,"SPAN",{});var Fi=r($o);y(dt.$$.fragment,Fi),Fi.forEach(o),Gi.forEach(o),Ks=u(Sn),Po=a(Sn,"SPAN",{});var Mi=r(Po);Qs=l(Mi,"GPTNeoForCausalLM"),Mi.forEach(o),Sn.forEach(o),wn=u(t),q=a(t,"DIV",{class:!0});var X=r(q);y(ct.$$.fragment,X),Ys=u(X),wo=a(X,"P",{});var Ci=r(wo);Zs=l(Ci,`The GPT Neo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ci.forEach(o),ea=u(X),pt=a(X,"P",{});var On=r(pt);ta=l(On,"This model inherits from "),Kt=a(On,"A",{href:!0});var Ei=r(Kt);oa=l(Ei,"PreTrainedModel"),Ei.forEach(o),na=l(On,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),On.forEach(o),sa=u(X),ht=a(X,"P",{});var Dn=r(ht);aa=l(Dn,"This model is also a PyTorch "),ut=a(Dn,"A",{href:!0,rel:!0});var qi=r(ut);ra=l(qi,"torch.nn.Module"),qi.forEach(o),ia=l(Dn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dn.forEach(o),la=u(X),D=a(X,"DIV",{class:!0});var We=r(D);y(mt.$$.fragment,We),da=u(We),re=a(We,"P",{});var io=r(re);ca=l(io,"The "),Qt=a(io,"A",{href:!0});var zi=r(Qt);pa=l(zi,"GPTNeoForCausalLM"),zi.forEach(o),ha=l(io," forward method, overrides the "),No=a(io,"CODE",{});var ji=r(No);ua=l(ji,"__call__"),ji.forEach(o),ma=l(io," special method."),io.forEach(o),fa=u(We),y(xe.$$.fragment,We),ga=u(We),y(Ge.$$.fragment,We),We.forEach(o),X.forEach(o),Nn=u(t),ie=a(t,"H2",{class:!0});var Bn=r(ie);Fe=a(Bn,"A",{id:!0,class:!0,href:!0});var Ai=r(Fe);xo=a(Ai,"SPAN",{});var Ii=r(xo);y(ft.$$.fragment,Ii),Ii.forEach(o),Ai.forEach(o),_a=u(Bn),Go=a(Bn,"SPAN",{});var Li=r(Go);Ta=l(Li,"GPTNeoForSequenceClassification"),Li.forEach(o),Bn.forEach(o),xn=u(t),G=a(t,"DIV",{class:!0});var z=r(G);y(gt.$$.fragment,z),va=u(z),Fo=a(z,"P",{});var Si=r(Fo);ba=l(Si,"The GPTNeo Model transformer with a sequence classification head on top (linear layer)."),Si.forEach(o),ya=u(z),Yt=a(z,"P",{});var li=r(Yt);Zt=a(li,"A",{href:!0});var Oi=r(Zt);ka=l(Oi,"GPTNeoForSequenceClassification"),Oi.forEach(o),$a=l(li,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),li.forEach(o),Pa=u(z),S=a(z,"P",{});var K=r(S);wa=l(K,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Mo=a(K,"CODE",{});var Di=r(Mo);Na=l(Di,"pad_token_id"),Di.forEach(o),xa=l(K,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Co=a(K,"CODE",{});var Bi=r(Co);Ga=l(Bi,"pad_token_id"),Bi.forEach(o),Fa=l(K,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Eo=a(K,"CODE",{});var Wi=r(Eo);Ma=l(Wi,"inputs_embeds"),Wi.forEach(o),Ca=l(K," are passed instead of "),qo=a(K,"CODE",{});var Hi=r(qo);Ea=l(Hi,"input_ids"),Hi.forEach(o),qa=l(K,`, it does the same (take the last value in
each row of the batch).`),K.forEach(o),za=u(z),_t=a(z,"P",{});var Wn=r(_t);ja=l(Wn,"This model inherits from "),eo=a(Wn,"A",{href:!0});var Ui=r(eo);Aa=l(Ui,"PreTrainedModel"),Ui.forEach(o),Ia=l(Wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wn.forEach(o),La=u(z),Tt=a(z,"P",{});var Hn=r(Tt);Sa=l(Hn,"This model is also a PyTorch "),vt=a(Hn,"A",{href:!0,rel:!0});var Vi=r(vt);Oa=l(Vi,"torch.nn.Module"),Vi.forEach(o),Da=l(Hn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hn.forEach(o),Ba=u(z),C=a(z,"DIV",{class:!0});var j=r(C);y(bt.$$.fragment,j),Wa=u(j),le=a(j,"P",{});var lo=r(le);Ha=l(lo,"The "),to=a(lo,"A",{href:!0});var Ji=r(to);Ua=l(Ji,"GPTNeoForSequenceClassification"),Ji.forEach(o),Va=l(lo," forward method, overrides the "),zo=a(lo,"CODE",{});var Ri=r(zo);Ja=l(Ri,"__call__"),Ri.forEach(o),Ra=l(lo," special method."),lo.forEach(o),Xa=u(j),y(Me.$$.fragment,j),Ka=u(j),y(Ce.$$.fragment,j),Qa=u(j),y(Ee.$$.fragment,j),Ya=u(j),y(qe.$$.fragment,j),Za=u(j),y(ze.$$.fragment,j),j.forEach(o),z.forEach(o),Gn=u(t),de=a(t,"H2",{class:!0});var Un=r(de);je=a(Un,"A",{id:!0,class:!0,href:!0});var Xi=r(je);jo=a(Xi,"SPAN",{});var Ki=r(jo);y(yt.$$.fragment,Ki),Ki.forEach(o),Xi.forEach(o),er=u(Un),Ao=a(Un,"SPAN",{});var Qi=r(Ao);tr=l(Qi,"FlaxGPTNeoModel"),Qi.forEach(o),Un.forEach(o),Fn=u(t),F=a(t,"DIV",{class:!0});var A=r(F);y(kt.$$.fragment,A),or=u(A),Io=a(A,"P",{});var Yi=r(Io);nr=l(Yi,"The bare GPTNeo Model transformer outputting raw hidden-states without any specific head on top."),Yi.forEach(o),sr=u(A),$t=a(A,"P",{});var Vn=r($t);ar=l(Vn,"This model inherits from "),oo=a(Vn,"A",{href:!0});var Zi=r(oo);rr=l(Zi,"FlaxPreTrainedModel"),Zi.forEach(o),ir=l(Vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vn.forEach(o),lr=u(A),Pt=a(A,"P",{});var Jn=r(Pt);dr=l(Jn,`This model is also a Flax Linen
`),wt=a(Jn,"A",{href:!0,rel:!0});var el=r(wt);cr=l(el,"flax.nn.Module"),el.forEach(o),pr=l(Jn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Jn.forEach(o),hr=u(A),Lo=a(A,"P",{});var tl=r(Lo);ur=l(tl,"Finally, this model supports inherent JAX features such as:"),tl.forEach(o),mr=u(A),H=a(A,"UL",{});var He=r(H);So=a(He,"LI",{});var ol=r(So);Nt=a(ol,"A",{href:!0,rel:!0});var nl=r(Nt);fr=l(nl,"Just-In-Time (JIT) compilation"),nl.forEach(o),ol.forEach(o),gr=u(He),Oo=a(He,"LI",{});var sl=r(Oo);xt=a(sl,"A",{href:!0,rel:!0});var al=r(xt);_r=l(al,"Automatic Differentiation"),al.forEach(o),sl.forEach(o),Tr=u(He),Do=a(He,"LI",{});var rl=r(Do);Gt=a(rl,"A",{href:!0,rel:!0});var il=r(Gt);vr=l(il,"Vectorization"),il.forEach(o),rl.forEach(o),br=u(He),Bo=a(He,"LI",{});var ll=r(Bo);Ft=a(ll,"A",{href:!0,rel:!0});var dl=r(Ft);yr=l(dl,"Parallelization"),dl.forEach(o),ll.forEach(o),He.forEach(o),kr=u(A),B=a(A,"DIV",{class:!0});var Ue=r(B);y(Mt.$$.fragment,Ue),$r=u(Ue),ce=a(Ue,"P",{});var co=r(ce);Pr=l(co,"The "),Wo=a(co,"CODE",{});var cl=r(Wo);wr=l(cl,"FlaxGPTNeoPreTrainedModel"),cl.forEach(o),Nr=l(co," forward method, overrides the "),Ho=a(co,"CODE",{});var pl=r(Ho);xr=l(pl,"__call__"),pl.forEach(o),Gr=l(co," special method."),co.forEach(o),Fr=u(Ue),y(Ae.$$.fragment,Ue),Mr=u(Ue),y(Ie.$$.fragment,Ue),Ue.forEach(o),A.forEach(o),Mn=u(t),pe=a(t,"H2",{class:!0});var Rn=r(pe);Le=a(Rn,"A",{id:!0,class:!0,href:!0});var hl=r(Le);Uo=a(hl,"SPAN",{});var ul=r(Uo);y(Ct.$$.fragment,ul),ul.forEach(o),hl.forEach(o),Cr=u(Rn),Vo=a(Rn,"SPAN",{});var ml=r(Vo);Er=l(ml,"FlaxGPTNeoForCausalLM"),ml.forEach(o),Rn.forEach(o),Cn=u(t),M=a(t,"DIV",{class:!0});var I=r(M);y(Et.$$.fragment,I),qr=u(I),Jo=a(I,"P",{});var fl=r(Jo);zr=l(fl,`The GPTNeo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),fl.forEach(o),jr=u(I),qt=a(I,"P",{});var Xn=r(qt);Ar=l(Xn,"This model inherits from "),no=a(Xn,"A",{href:!0});var gl=r(no);Ir=l(gl,"FlaxPreTrainedModel"),gl.forEach(o),Lr=l(Xn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xn.forEach(o),Sr=u(I),zt=a(I,"P",{});var Kn=r(zt);Or=l(Kn,`This model is also a Flax Linen
`),jt=a(Kn,"A",{href:!0,rel:!0});var _l=r(jt);Dr=l(_l,"flax.nn.Module"),_l.forEach(o),Br=l(Kn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Kn.forEach(o),Wr=u(I),Ro=a(I,"P",{});var Tl=r(Ro);Hr=l(Tl,"Finally, this model supports inherent JAX features such as:"),Tl.forEach(o),Ur=u(I),U=a(I,"UL",{});var Ve=r(U);Xo=a(Ve,"LI",{});var vl=r(Xo);At=a(vl,"A",{href:!0,rel:!0});var bl=r(At);Vr=l(bl,"Just-In-Time (JIT) compilation"),bl.forEach(o),vl.forEach(o),Jr=u(Ve),Ko=a(Ve,"LI",{});var yl=r(Ko);It=a(yl,"A",{href:!0,rel:!0});var kl=r(It);Rr=l(kl,"Automatic Differentiation"),kl.forEach(o),yl.forEach(o),Xr=u(Ve),Qo=a(Ve,"LI",{});var $l=r(Qo);Lt=a($l,"A",{href:!0,rel:!0});var Pl=r(Lt);Kr=l(Pl,"Vectorization"),Pl.forEach(o),$l.forEach(o),Qr=u(Ve),Yo=a(Ve,"LI",{});var wl=r(Yo);St=a(wl,"A",{href:!0,rel:!0});var Nl=r(St);Yr=l(Nl,"Parallelization"),Nl.forEach(o),wl.forEach(o),Ve.forEach(o),Zr=u(I),W=a(I,"DIV",{class:!0});var Je=r(W);y(Ot.$$.fragment,Je),ei=u(Je),he=a(Je,"P",{});var po=r(he);ti=l(po,"The "),Zo=a(po,"CODE",{});var xl=r(Zo);oi=l(xl,"FlaxGPTNeoPreTrainedModel"),xl.forEach(o),ni=l(po," forward method, overrides the "),en=a(po,"CODE",{});var Gl=r(en);si=l(Gl,"__call__"),Gl.forEach(o),ai=l(po," special method."),po.forEach(o),ri=u(Je),y(Se.$$.fragment,Je),ii=u(Je),y(Oe.$$.fragment,Je),Je.forEach(o),I.forEach(o),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Xl)),c(m,"id","gpt-neo"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#gpt-neo"),c(p,"class","relative group"),c(_e,"id","overview"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#overview"),c(Y,"class","relative group"),c(Xe,"href","https://github.com/EleutherAI/gpt-neo"),c(Xe,"rel","nofollow"),c(Ke,"href","https://pile.eleuther.ai/"),c(Ke,"rel","nofollow"),c(Qe,"href","https://huggingface.co/valhalla"),c(Qe,"rel","nofollow"),c(ve,"id","generation"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#generation"),c(Z,"class","relative group"),c(ye,"id","transformers.GPTNeoConfig"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.GPTNeoConfig"),c(ee,"class","relative group"),c(Ut,"href","/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoModel"),c(ot,"href","https://huggingface.co/EleutherAI/gpt-neo-1.3B"),c(ot,"rel","nofollow"),c(Vt,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(Jt,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"id","transformers.GPTNeoModel"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#transformers.GPTNeoModel"),c(ne,"class","relative group"),c(Rt,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),c(it,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(it,"rel","nofollow"),c(Xt,"href","/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoModel"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ne,"id","transformers.GPTNeoForCausalLM"),c(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ne,"href","#transformers.GPTNeoForCausalLM"),c(ae,"class","relative group"),c(Kt,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),c(ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ut,"rel","nofollow"),c(Qt,"href","/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoForCausalLM"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fe,"id","transformers.GPTNeoForSequenceClassification"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#transformers.GPTNeoForSequenceClassification"),c(ie,"class","relative group"),c(Zt,"href","/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoForSequenceClassification"),c(eo,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),c(vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vt,"rel","nofollow"),c(to,"href","/docs/transformers/v4.21.1/en/model_doc/gpt_neo#transformers.GPTNeoForSequenceClassification"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"id","transformers.FlaxGPTNeoModel"),c(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(je,"href","#transformers.FlaxGPTNeoModel"),c(de,"class","relative group"),c(oo,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(wt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(wt,"rel","nofollow"),c(Nt,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Nt,"rel","nofollow"),c(xt,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xt,"rel","nofollow"),c(Gt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Gt,"rel","nofollow"),c(Ft,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ft,"rel","nofollow"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.FlaxGPTNeoForCausalLM"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.FlaxGPTNeoForCausalLM"),c(pe,"class","relative group"),c(no,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(jt,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(jt,"rel","nofollow"),c(At,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(At,"rel","nofollow"),c(It,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(It,"rel","nofollow"),c(Lt,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Lt,"rel","nofollow"),c(St,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(St,"rel","nofollow"),c(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,_,g),v(t,p,g),e(p,m),e(m,T),k(n,T,null),e(p,f),e(p,x),e(x,Qn),v(t,un,g),v(t,Y,g),e(Y,_e),e(_e,ho),k(Re,ho,null),e(Y,Yn),e(Y,uo),e(uo,Zn),v(t,mn,g),v(t,J,g),e(J,es),e(J,Xe),e(Xe,ts),e(J,os),e(J,Ke),e(Ke,ns),e(J,ss),v(t,fn,g),v(t,Ht,g),e(Ht,as),v(t,gn,g),v(t,Te,g),e(Te,rs),e(Te,Qe),e(Qe,is),e(Te,ls),v(t,_n,g),v(t,Z,g),e(Z,ve),e(ve,mo),k(Ye,mo,null),e(Z,ds),e(Z,fo),e(fo,cs),v(t,Tn,g),v(t,be,g),e(be,ps),e(be,go),e(go,hs),e(be,us),v(t,vn,g),k(Ze,t,g),v(t,bn,g),v(t,ee,g),e(ee,ye),e(ye,_o),k(et,_o,null),e(ee,ms),e(ee,To),e(To,fs),v(t,yn,g),v(t,L,g),k(tt,L,null),e(L,gs),e(L,te),e(te,_s),e(te,Ut),e(Ut,Ts),e(te,vs),e(te,ot),e(ot,bs),e(te,ys),e(L,ks),e(L,oe),e(oe,$s),e(oe,Vt),e(Vt,Ps),e(oe,ws),e(oe,Jt),e(Jt,Ns),e(oe,xs),e(L,Gs),k(ke,L,null),v(t,kn,g),v(t,ne,g),e(ne,$e),e($e,vo),k(nt,vo,null),e(ne,Fs),e(ne,bo),e(bo,Ms),v(t,$n,g),v(t,E,g),k(st,E,null),e(E,Cs),e(E,yo),e(yo,Es),e(E,qs),e(E,at),e(at,zs),e(at,Rt),e(Rt,js),e(at,As),e(E,Is),e(E,rt),e(rt,Ls),e(rt,it),e(it,Ss),e(rt,Os),e(E,Ds),e(E,O),k(lt,O,null),e(O,Bs),e(O,se),e(se,Ws),e(se,Xt),e(Xt,Hs),e(se,Us),e(se,ko),e(ko,Vs),e(se,Js),e(O,Rs),k(Pe,O,null),e(O,Xs),k(we,O,null),v(t,Pn,g),v(t,ae,g),e(ae,Ne),e(Ne,$o),k(dt,$o,null),e(ae,Ks),e(ae,Po),e(Po,Qs),v(t,wn,g),v(t,q,g),k(ct,q,null),e(q,Ys),e(q,wo),e(wo,Zs),e(q,ea),e(q,pt),e(pt,ta),e(pt,Kt),e(Kt,oa),e(pt,na),e(q,sa),e(q,ht),e(ht,aa),e(ht,ut),e(ut,ra),e(ht,ia),e(q,la),e(q,D),k(mt,D,null),e(D,da),e(D,re),e(re,ca),e(re,Qt),e(Qt,pa),e(re,ha),e(re,No),e(No,ua),e(re,ma),e(D,fa),k(xe,D,null),e(D,ga),k(Ge,D,null),v(t,Nn,g),v(t,ie,g),e(ie,Fe),e(Fe,xo),k(ft,xo,null),e(ie,_a),e(ie,Go),e(Go,Ta),v(t,xn,g),v(t,G,g),k(gt,G,null),e(G,va),e(G,Fo),e(Fo,ba),e(G,ya),e(G,Yt),e(Yt,Zt),e(Zt,ka),e(Yt,$a),e(G,Pa),e(G,S),e(S,wa),e(S,Mo),e(Mo,Na),e(S,xa),e(S,Co),e(Co,Ga),e(S,Fa),e(S,Eo),e(Eo,Ma),e(S,Ca),e(S,qo),e(qo,Ea),e(S,qa),e(G,za),e(G,_t),e(_t,ja),e(_t,eo),e(eo,Aa),e(_t,Ia),e(G,La),e(G,Tt),e(Tt,Sa),e(Tt,vt),e(vt,Oa),e(Tt,Da),e(G,Ba),e(G,C),k(bt,C,null),e(C,Wa),e(C,le),e(le,Ha),e(le,to),e(to,Ua),e(le,Va),e(le,zo),e(zo,Ja),e(le,Ra),e(C,Xa),k(Me,C,null),e(C,Ka),k(Ce,C,null),e(C,Qa),k(Ee,C,null),e(C,Ya),k(qe,C,null),e(C,Za),k(ze,C,null),v(t,Gn,g),v(t,de,g),e(de,je),e(je,jo),k(yt,jo,null),e(de,er),e(de,Ao),e(Ao,tr),v(t,Fn,g),v(t,F,g),k(kt,F,null),e(F,or),e(F,Io),e(Io,nr),e(F,sr),e(F,$t),e($t,ar),e($t,oo),e(oo,rr),e($t,ir),e(F,lr),e(F,Pt),e(Pt,dr),e(Pt,wt),e(wt,cr),e(Pt,pr),e(F,hr),e(F,Lo),e(Lo,ur),e(F,mr),e(F,H),e(H,So),e(So,Nt),e(Nt,fr),e(H,gr),e(H,Oo),e(Oo,xt),e(xt,_r),e(H,Tr),e(H,Do),e(Do,Gt),e(Gt,vr),e(H,br),e(H,Bo),e(Bo,Ft),e(Ft,yr),e(F,kr),e(F,B),k(Mt,B,null),e(B,$r),e(B,ce),e(ce,Pr),e(ce,Wo),e(Wo,wr),e(ce,Nr),e(ce,Ho),e(Ho,xr),e(ce,Gr),e(B,Fr),k(Ae,B,null),e(B,Mr),k(Ie,B,null),v(t,Mn,g),v(t,pe,g),e(pe,Le),e(Le,Uo),k(Ct,Uo,null),e(pe,Cr),e(pe,Vo),e(Vo,Er),v(t,Cn,g),v(t,M,g),k(Et,M,null),e(M,qr),e(M,Jo),e(Jo,zr),e(M,jr),e(M,qt),e(qt,Ar),e(qt,no),e(no,Ir),e(qt,Lr),e(M,Sr),e(M,zt),e(zt,Or),e(zt,jt),e(jt,Dr),e(zt,Br),e(M,Wr),e(M,Ro),e(Ro,Hr),e(M,Ur),e(M,U),e(U,Xo),e(Xo,At),e(At,Vr),e(U,Jr),e(U,Ko),e(Ko,It),e(It,Rr),e(U,Xr),e(U,Qo),e(Qo,Lt),e(Lt,Kr),e(U,Qr),e(U,Yo),e(Yo,St),e(St,Yr),e(M,Zr),e(M,W),k(Ot,W,null),e(W,ei),e(W,he),e(he,ti),e(he,Zo),e(Zo,oi),e(he,ni),e(he,en),e(en,si),e(he,ai),e(W,ri),k(Se,W,null),e(W,ii),k(Oe,W,null),En=!0},p(t,[g]){const Dt={};g&2&&(Dt.$$scope={dirty:g,ctx:t}),ke.$set(Dt);const tn={};g&2&&(tn.$$scope={dirty:g,ctx:t}),Pe.$set(tn);const on={};g&2&&(on.$$scope={dirty:g,ctx:t}),we.$set(on);const nn={};g&2&&(nn.$$scope={dirty:g,ctx:t}),xe.$set(nn);const Bt={};g&2&&(Bt.$$scope={dirty:g,ctx:t}),Ge.$set(Bt);const sn={};g&2&&(sn.$$scope={dirty:g,ctx:t}),Me.$set(sn);const an={};g&2&&(an.$$scope={dirty:g,ctx:t}),Ce.$set(an);const rn={};g&2&&(rn.$$scope={dirty:g,ctx:t}),Ee.$set(rn);const ue={};g&2&&(ue.$$scope={dirty:g,ctx:t}),qe.$set(ue);const ln={};g&2&&(ln.$$scope={dirty:g,ctx:t}),ze.$set(ln);const dn={};g&2&&(dn.$$scope={dirty:g,ctx:t}),Ae.$set(dn);const cn={};g&2&&(cn.$$scope={dirty:g,ctx:t}),Ie.$set(cn);const Wt={};g&2&&(Wt.$$scope={dirty:g,ctx:t}),Se.$set(Wt);const pn={};g&2&&(pn.$$scope={dirty:g,ctx:t}),Oe.$set(pn)},i(t){En||($(n.$$.fragment,t),$(Re.$$.fragment,t),$(Ye.$$.fragment,t),$(Ze.$$.fragment,t),$(et.$$.fragment,t),$(tt.$$.fragment,t),$(ke.$$.fragment,t),$(nt.$$.fragment,t),$(st.$$.fragment,t),$(lt.$$.fragment,t),$(Pe.$$.fragment,t),$(we.$$.fragment,t),$(dt.$$.fragment,t),$(ct.$$.fragment,t),$(mt.$$.fragment,t),$(xe.$$.fragment,t),$(Ge.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$(bt.$$.fragment,t),$(Me.$$.fragment,t),$(Ce.$$.fragment,t),$(Ee.$$.fragment,t),$(qe.$$.fragment,t),$(ze.$$.fragment,t),$(yt.$$.fragment,t),$(kt.$$.fragment,t),$(Mt.$$.fragment,t),$(Ae.$$.fragment,t),$(Ie.$$.fragment,t),$(Ct.$$.fragment,t),$(Et.$$.fragment,t),$(Ot.$$.fragment,t),$(Se.$$.fragment,t),$(Oe.$$.fragment,t),En=!0)},o(t){P(n.$$.fragment,t),P(Re.$$.fragment,t),P(Ye.$$.fragment,t),P(Ze.$$.fragment,t),P(et.$$.fragment,t),P(tt.$$.fragment,t),P(ke.$$.fragment,t),P(nt.$$.fragment,t),P(st.$$.fragment,t),P(lt.$$.fragment,t),P(Pe.$$.fragment,t),P(we.$$.fragment,t),P(dt.$$.fragment,t),P(ct.$$.fragment,t),P(mt.$$.fragment,t),P(xe.$$.fragment,t),P(Ge.$$.fragment,t),P(ft.$$.fragment,t),P(gt.$$.fragment,t),P(bt.$$.fragment,t),P(Me.$$.fragment,t),P(Ce.$$.fragment,t),P(Ee.$$.fragment,t),P(qe.$$.fragment,t),P(ze.$$.fragment,t),P(yt.$$.fragment,t),P(kt.$$.fragment,t),P(Mt.$$.fragment,t),P(Ae.$$.fragment,t),P(Ie.$$.fragment,t),P(Ct.$$.fragment,t),P(Et.$$.fragment,t),P(Ot.$$.fragment,t),P(Se.$$.fragment,t),P(Oe.$$.fragment,t),En=!1},d(t){o(d),t&&o(_),t&&o(p),w(n),t&&o(un),t&&o(Y),w(Re),t&&o(mn),t&&o(J),t&&o(fn),t&&o(Ht),t&&o(gn),t&&o(Te),t&&o(_n),t&&o(Z),w(Ye),t&&o(Tn),t&&o(be),t&&o(vn),w(Ze,t),t&&o(bn),t&&o(ee),w(et),t&&o(yn),t&&o(L),w(tt),w(ke),t&&o(kn),t&&o(ne),w(nt),t&&o($n),t&&o(E),w(st),w(lt),w(Pe),w(we),t&&o(Pn),t&&o(ae),w(dt),t&&o(wn),t&&o(q),w(ct),w(mt),w(xe),w(Ge),t&&o(Nn),t&&o(ie),w(ft),t&&o(xn),t&&o(G),w(gt),w(bt),w(Me),w(Ce),w(Ee),w(qe),w(ze),t&&o(Gn),t&&o(de),w(yt),t&&o(Fn),t&&o(F),w(kt),w(Mt),w(Ae),w(Ie),t&&o(Mn),t&&o(pe),w(Ct),t&&o(Cn),t&&o(M),w(Et),w(Ot),w(Se),w(Oe)}}}const Xl={local:"gpt-neo",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTNeoConfig",title:"GPTNeoConfig"},{local:"transformers.GPTNeoModel",title:"GPTNeoModel"},{local:"transformers.GPTNeoForCausalLM",title:"GPTNeoForCausalLM"},{local:"transformers.GPTNeoForSequenceClassification",title:"GPTNeoForSequenceClassification"},{local:"transformers.FlaxGPTNeoModel",title:"FlaxGPTNeoModel"},{local:"transformers.FlaxGPTNeoForCausalLM",title:"FlaxGPTNeoForCausalLM"}],title:"GPT Neo"};function Kl(N){return ql(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class nd extends Fl{constructor(d){super();Ml(this,d,Kl,Rl,Cl,{})}}export{nd as default,Xl as metadata};
