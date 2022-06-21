import{S as Th,i as Sh,s as Bh,e as i,k as h,w as z,t as r,M as Eh,c as l,d as s,m,a as d,x as $,h as a,b,G as e,g as k,y as q,q as v,o as w,B as y,v as jh,L as B}from"../../chunks/vendor-hf-doc-builder.js";import{T as Do}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as E}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as S}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Mh(T){let n,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertModel, SqueezeBertConfig

# Initializing a SqueezeBERT configuration
configuration = SqueezeBertConfig()

# Initializing a model from the configuration above
model = SqueezeBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertModel, SqueezeBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a SqueezeBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SqueezeBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration above</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){n=i("p"),f=r("Examples:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Examples:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Fh(T){let n,f,p,c,g;return c=new E({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){n=i("p"),f=r("pair mask has the following format:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"pair mask has the following format:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function xh(T){let n,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){n=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Ch(T){let n,f,p,c,g;return c=new E({props:{code:`
`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){n=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Ph(T){let n,f,p,c,g;return{c(){n=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,n,u),e(n,f),e(n,p),e(p,c),e(n,g)},d(t){t&&s(n)}}}function Ah(T){let n,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertModel
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertModel.from_pretrained("squeezebert/squeezebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertModel.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){n=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Lh(T){let n,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){n=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Nh(T){let n,f,p,c,g;return c=new E({props:{code:`
`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){n=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Ih(T){let n,f,p,c,g;return{c(){n=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,n,u),e(n,f),e(n,p),e(p,c),e(n,g)},d(t){t&&s(n)}}}function Dh(T){let n,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForMaskedLM
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForMaskedLM.from_pretrained("squeezebert/squeezebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){n=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Oh(T){let n,f;return n=new E({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){z(n.$$.fragment)},l(p){$(n.$$.fragment,p)},m(p,c){q(n,p,c),f=!0},p:B,i(p){f||(v(n.$$.fragment,p),f=!0)},o(p){w(n.$$.fragment,p),f=!1},d(p){y(n,p)}}}function Rh(T){let n,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){n=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Wh(T){let n,f,p,c,g;return c=new E({props:{code:`
`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){n=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Kh(T){let n,f,p,c,g;return{c(){n=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,n,u),e(n,f),e(n,p),e(p,c),e(n,g)},d(t){t&&s(n)}}}function Hh(T){let n,f,p,c,g;return c=new E({props:{code:`import torch
from transformers import SqueezeBertTokenizer, SqueezeBertForSequenceClassification

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForSequenceClassification.from_pretrained("squeezebert/squeezebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=i("p"),f=r("Example of single-label classification:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Example of single-label classification:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Qh(T){let n,f;return n=new E({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = SqueezeBertForSequenceClassification.from_pretrained("squeezebert/squeezebert-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){z(n.$$.fragment)},l(p){$(n.$$.fragment,p)},m(p,c){q(n,p,c),f=!0},p:B,i(p){f||(v(n.$$.fragment,p),f=!0)},o(p){w(n.$$.fragment,p),f=!1},d(p){y(n,p)}}}function Uh(T){let n,f,p,c,g;return c=new E({props:{code:`import torch
from transformers import SqueezeBertTokenizer, SqueezeBertForSequenceClassification

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForSequenceClassification.from_pretrained("squeezebert/squeezebert-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=i("p"),f=r("Example of multi-label classification:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Example of multi-label classification:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Vh(T){let n,f;return n=new E({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = SqueezeBertForSequenceClassification.from_pretrained(
    "squeezebert/squeezebert-uncased", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){z(n.$$.fragment)},l(p){$(n.$$.fragment,p)},m(p,c){q(n,p,c),f=!0},p:B,i(p){f||(v(n.$$.fragment,p),f=!0)},o(p){w(n.$$.fragment,p),f=!1},d(p){y(n,p)}}}function Gh(T){let n,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){n=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Jh(T){let n,f,p,c,g;return c=new E({props:{code:`
`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){n=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Xh(T){let n,f,p,c,g;return{c(){n=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,n,u),e(n,f),e(n,p),e(p,c),e(n,g)},d(t){t&&s(n)}}}function Yh(T){let n,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForMultipleChoice
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForMultipleChoice.from_pretrained("squeezebert/squeezebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){n=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function Zh(T){let n,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){n=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function em(T){let n,f,p,c,g;return c=new E({props:{code:`
`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){n=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function tm(T){let n,f,p,c,g;return{c(){n=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,n,u),e(n,f),e(n,p),e(p,c),e(n,g)},d(t){t&&s(n)}}}function sm(T){let n,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForTokenClassification
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForTokenClassification.from_pretrained("squeezebert/squeezebert-uncased")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),{c(){n=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function om(T){let n,f;return n=new E({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){z(n.$$.fragment)},l(p){$(n.$$.fragment,p)},m(p,c){q(n,p,c),f=!0},p:B,i(p){f||(v(n.$$.fragment,p),f=!0)},o(p){w(n.$$.fragment,p),f=!1},d(p){y(n,p)}}}function nm(T){let n,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){n=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function rm(T){let n,f,p,c,g;return c=new E({props:{code:`
`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){n=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function am(T){let n,f,p,c,g;return{c(){n=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,n,u),e(n,f),e(n,p),e(p,c),e(n,g)},d(t){t&&s(n)}}}function im(T){let n,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForQuestionAnswering
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForQuestionAnswering.from_pretrained("squeezebert/squeezebert-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){n=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){n=l(t,"P",{});var u=d(n);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,n,u),e(n,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(n),t&&s(p),y(c,t)}}}function lm(T){let n,f;return n=new E({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){z(n.$$.fragment)},l(p){$(n.$$.fragment,p)},m(p,c){q(n,p,c),f=!0},p:B,i(p){f||(v(n.$$.fragment,p),f=!0)},o(p){w(n.$$.fragment,p),f=!1},d(p){y(n,p)}}}function dm(T){let n,f,p,c,g,t,u,j,wa,hr,ce,Ce,Oo,jt,ya,Ro,Ta,mr,ne,Sa,Mt,Ba,Ea,Ft,ja,Ma,fr,oo,Fa,gr,no,Wo,xa,_r,ro,Ca,br,re,Ko,Pa,Aa,Ho,La,Na,xt,Ia,Qo,Da,Oa,kr,Pe,Ra,Ct,Wa,Ka,zr,pe,Ae,Uo,Pt,Ha,Vo,Qa,$r,U,At,Ua,ue,Va,ao,Ga,Ja,Lt,Xa,Ya,Za,he,ei,io,ti,si,lo,oi,ni,ri,Le,ai,Go,ii,qr,me,Ne,Jo,Nt,li,Xo,di,vr,M,It,ci,Yo,pi,ui,Ie,co,hi,mi,po,fi,gi,_i,Zo,en,bi,ki,Dt,zi,uo,$i,qi,vi,ae,Ot,wi,tn,yi,Ti,Rt,ho,Si,sn,Bi,Ei,mo,ji,on,Mi,Fi,De,Wt,xi,Kt,Ci,nn,Pi,Ai,Li,ee,Ht,Ni,rn,Ii,Di,Oe,Oi,fe,Ri,an,Wi,Ki,ln,Hi,Qi,Ui,fo,Qt,wr,ge,Re,dn,Ut,Vi,cn,Gi,yr,Y,Vt,Ji,Gt,Xi,pn,Yi,Zi,el,We,go,tl,sl,_o,ol,nl,rl,Jt,al,bo,il,ll,Tr,_e,Ke,un,Xt,dl,hn,cl,Sr,F,Yt,pl,mn,ul,hl,Zt,ml,es,fl,gl,_l,ts,bl,ko,kl,zl,$l,ss,ql,os,vl,wl,yl,ns,Tl,fn,Sl,Bl,El,He,jl,Qe,Ml,te,rs,Fl,be,xl,zo,Cl,Pl,gn,Al,Ll,Nl,Ue,Il,Ve,Br,ke,Ge,_n,as,Dl,bn,Ol,Er,x,is,Rl,ls,Wl,kn,Kl,Hl,Ql,ds,Ul,cs,Vl,Gl,Jl,ps,Xl,$o,Yl,Zl,ed,us,td,hs,sd,od,nd,ms,rd,zn,ad,id,ld,Je,dd,Xe,cd,V,fs,pd,ze,ud,qo,hd,md,$n,fd,gd,_d,Ye,bd,Ze,kd,et,jr,$e,tt,qn,gs,zd,vn,$d,Mr,C,_s,qd,wn,vd,wd,bs,yd,ks,Td,Sd,Bd,zs,Ed,vo,jd,Md,Fd,$s,xd,qs,Cd,Pd,Ad,vs,Ld,yn,Nd,Id,Dd,st,Od,ot,Rd,I,ws,Wd,qe,Kd,wo,Hd,Qd,Tn,Ud,Vd,Gd,nt,Jd,rt,Xd,at,Yd,it,Zd,lt,Fr,ve,dt,Sn,ys,ec,Bn,tc,xr,P,Ts,sc,En,oc,nc,Ss,rc,Bs,ac,ic,lc,Es,dc,yo,cc,pc,uc,js,hc,Ms,mc,fc,gc,Fs,_c,jn,bc,kc,zc,ct,$c,pt,qc,se,xs,vc,we,wc,To,yc,Tc,Mn,Sc,Bc,Ec,ut,jc,ht,Cr,ye,mt,Fn,Cs,Mc,xn,Fc,Pr,A,Ps,xc,Cn,Cc,Pc,As,Ac,Ls,Lc,Nc,Ic,Ns,Dc,So,Oc,Rc,Wc,Is,Kc,Ds,Hc,Qc,Uc,Os,Vc,Pn,Gc,Jc,Xc,ft,Yc,gt,Zc,G,Rs,ep,Te,tp,Bo,sp,op,An,np,rp,ap,_t,ip,bt,lp,kt,Ar,Se,zt,Ln,Ws,dp,Nn,cp,Lr,L,Ks,pp,Be,up,In,hp,mp,Dn,fp,gp,_p,Hs,bp,Qs,kp,zp,$p,Us,qp,Eo,vp,wp,yp,Vs,Tp,Gs,Sp,Bp,Ep,Js,jp,On,Mp,Fp,xp,$t,Cp,qt,Pp,J,Xs,Ap,Ee,Lp,jo,Np,Ip,Rn,Dp,Op,Rp,vt,Wp,wt,Kp,yt,Nr;return t=new oe({}),jt=new oe({}),Pt=new oe({}),At=new N({props:{name:"class transformers.SqueezeBertConfig",anchor:"transformers.SqueezeBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 768"},{name:"q_groups",val:" = 4"},{name:"k_groups",val:" = 4"},{name:"v_groups",val:" = 4"},{name:"post_attention_groups",val:" = 1"},{name:"intermediate_groups",val:" = 4"},{name:"output_groups",val:" = 4"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the SqueezeBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertModel">SqueezeBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.SqueezeBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SqueezeBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SqueezeBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SqueezeBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SqueezeBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SqueezeBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.SqueezeBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.SqueezeBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.SqueezeBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.20.1/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.SqueezeBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SqueezeBertConfig.layer_norm_eps",description:"<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;",name:"layer_norm_eps"},{anchor:"transformers.SqueezeBertConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The ID of the token in the word embedding to use as padding.`,name:"pad_token_id"},{anchor:"transformers.SqueezeBertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
The dimension of the word embedding vectors.`,name:"embedding_size"},{anchor:"transformers.SqueezeBertConfig.q_groups",description:`<strong>q_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in Q layer.`,name:"q_groups"},{anchor:"transformers.SqueezeBertConfig.k_groups",description:`<strong>k_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in K layer.`,name:"k_groups"},{anchor:"transformers.SqueezeBertConfig.v_groups",description:`<strong>v_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in V layer.`,name:"v_groups"},{anchor:"transformers.SqueezeBertConfig.post_attention_groups",description:`<strong>post_attention_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of groups in the first feed forward network layer.`,name:"post_attention_groups"},{anchor:"transformers.SqueezeBertConfig.intermediate_groups",description:`<strong>intermediate_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in the second feed forward network layer.`,name:"intermediate_groups"},{anchor:"transformers.SqueezeBertConfig.output_groups",description:`<strong>output_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in the third feed forward network layer.`,name:"output_groups"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/configuration_squeezebert.py#L37"}}),Le=new S({props:{anchor:"transformers.SqueezeBertConfig.example",$$slots:{default:[Mh]},$$scope:{ctx:T}}}),Nt=new oe({}),It=new N({props:{name:"class transformers.SqueezeBertTokenizer",anchor:"transformers.SqueezeBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/tokenization_squeezebert.py#L51"}}),Ot=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wt=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ht=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oe=new S({props:{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Fh]},$$scope:{ctx:T}}}),Qt=new N({props:{name:"save_vocabulary",anchor:"transformers.SqueezeBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/bert/tokenization_bert.py#L350"}}),Ut=new oe({}),Vt=new N({props:{name:"class transformers.SqueezeBertTokenizerFast",anchor:"transformers.SqueezeBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/tokenization_squeezebert_fast.py#L63"}}),Xt=new oe({}),Yt=new N({props:{name:"class transformers.SqueezeBertModel",anchor:"transformers.SqueezeBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L549"}}),He=new S({props:{anchor:"transformers.SqueezeBertModel.example",$$slots:{default:[xh]},$$scope:{ctx:T}}}),Qe=new S({props:{anchor:"transformers.SqueezeBertModel.example-2",$$slots:{default:[Ch]},$$scope:{ctx:T}}}),rs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L574",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new Do({props:{$$slots:{default:[Ph]},$$scope:{ctx:T}}}),Ve=new S({props:{anchor:"transformers.SqueezeBertModel.forward.example",$$slots:{default:[Ah]},$$scope:{ctx:T}}}),as=new oe({}),is=new N({props:{name:"class transformers.SqueezeBertForMaskedLM",anchor:"transformers.SqueezeBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L649"}}),Je=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.example",$$slots:{default:[Lh]},$$scope:{ctx:T}}}),Xe=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.example-2",$$slots:{default:[Nh]},$$scope:{ctx:T}}}),fs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L668",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ye=new Do({props:{$$slots:{default:[Ih]},$$scope:{ctx:T}}}),Ze=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.forward.example",$$slots:{default:[Dh]},$$scope:{ctx:T}}}),et=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.forward.example-2",$$slots:{default:[Oh]},$$scope:{ctx:T}}}),gs=new oe({}),_s=new N({props:{name:"class transformers.SqueezeBertForSequenceClassification",anchor:"transformers.SqueezeBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L735"}}),st=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.example",$$slots:{default:[Rh]},$$scope:{ctx:T}}}),ot=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.example-2",$$slots:{default:[Wh]},$$scope:{ctx:T}}}),ws=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L748",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nt=new Do({props:{$$slots:{default:[Kh]},$$scope:{ctx:T}}}),rt=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example",$$slots:{default:[Hh]},$$scope:{ctx:T}}}),at=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-2",$$slots:{default:[Qh]},$$scope:{ctx:T}}}),it=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-3",$$slots:{default:[Uh]},$$scope:{ctx:T}}}),lt=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-4",$$slots:{default:[Vh]},$$scope:{ctx:T}}}),ys=new oe({}),Ts=new N({props:{name:"class transformers.SqueezeBertForMultipleChoice",anchor:"transformers.SqueezeBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L835"}}),ct=new S({props:{anchor:"transformers.SqueezeBertForMultipleChoice.example",$$slots:{default:[Gh]},$$scope:{ctx:T}}}),pt=new S({props:{anchor:"transformers.SqueezeBertForMultipleChoice.example-2",$$slots:{default:[Jh]},$$scope:{ctx:T}}}),xs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L846",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ut=new Do({props:{$$slots:{default:[Xh]},$$scope:{ctx:T}}}),ht=new S({props:{anchor:"transformers.SqueezeBertForMultipleChoice.forward.example",$$slots:{default:[Yh]},$$scope:{ctx:T}}}),Cs=new oe({}),Ps=new N({props:{name:"class transformers.SqueezeBertForTokenClassification",anchor:"transformers.SqueezeBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L929"}}),ft=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.example",$$slots:{default:[Zh]},$$scope:{ctx:T}}}),gt=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.example-2",$$slots:{default:[em]},$$scope:{ctx:T}}}),Rs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L941",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_t=new Do({props:{$$slots:{default:[tm]},$$scope:{ctx:T}}}),bt=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.forward.example",$$slots:{default:[sm]},$$scope:{ctx:T}}}),kt=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.forward.example-2",$$slots:{default:[om]},$$scope:{ctx:T}}}),Ws=new oe({}),Ks=new N({props:{name:"class transformers.SqueezeBertForQuestionAnswering",anchor:"transformers.SqueezeBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L1008"}}),$t=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.example",$$slots:{default:[nm]},$$scope:{ctx:T}}}),qt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.example-2",$$slots:{default:[rm]},$$scope:{ctx:T}}}),Xs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/squeezebert/modeling_squeezebert.py#L1019",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vt=new Do({props:{$$slots:{default:[am]},$$scope:{ctx:T}}}),wt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.example",$$slots:{default:[im]},$$scope:{ctx:T}}}),yt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.example-2",$$slots:{default:[lm]},$$scope:{ctx:T}}}),{c(){n=i("meta"),f=h(),p=i("h1"),c=i("a"),g=i("span"),z(t.$$.fragment),u=h(),j=i("span"),wa=r("SqueezeBERT"),hr=h(),ce=i("h2"),Ce=i("a"),Oo=i("span"),z(jt.$$.fragment),ya=h(),Ro=i("span"),Ta=r("Overview"),mr=h(),ne=i("p"),Sa=r("The SqueezeBERT model was proposed in "),Mt=i("a"),Ba=r("SqueezeBERT: What can computer vision teach NLP about efficient neural networks?"),Ea=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, Kurt W. Keutzer. It\u2019s a
bidirectional transformer similar to the BERT model. The key difference between the BERT architecture and the
SqueezeBERT architecture is that SqueezeBERT uses `),Ft=i("a"),ja=r("grouped convolutions"),Ma=r(`
instead of fully-connected layers for the Q, K, V and FFN layers.`),fr=h(),oo=i("p"),Fa=r("The abstract from the paper is the following:"),gr=h(),no=i("p"),Wo=i("em"),xa=r(`Humans read and write hundreds of billions of messages every day. Further, due to the availability of large datasets,
large computing systems, and better neural network models, natural language processing (NLP) technology has made
significant strides in understanding, proofreading, and organizing these messages. Thus, there is a significant
opportunity to deploy NLP in myriad applications to help web users, social networks, and businesses. In particular, we
consider smartphones and other mobile devices as crucial platforms for deploying NLP models at scale. However, today\u2019s
highly-accurate NLP neural network models such as BERT and RoBERTa are extremely computationally expensive, with
BERT-base taking 1.7 seconds to classify a text snippet on a Pixel 3 smartphone. In this work, we observe that methods
such as grouped convolutions have yielded significant speedups for computer vision networks, but many of these
techniques have not been adopted by NLP neural network designers. We demonstrate how to replace several operations in
self-attention layers with grouped convolutions, and we use this technique in a novel network architecture called
SqueezeBERT, which runs 4.3x faster than BERT-base on the Pixel 3 while achieving competitive accuracy on the GLUE test
set. The SqueezeBERT code will be released.`),_r=h(),ro=i("p"),Ca=r("Tips:"),br=h(),re=i("ul"),Ko=i("li"),Pa=r(`SqueezeBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right
rather than the left.`),Aa=h(),Ho=i("li"),La=r(`SqueezeBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),Na=h(),xt=i("li"),Ia=r(`For best results when finetuning on sequence classification tasks, it is recommended to start with the
`),Qo=i("em"),Da=r("squeezebert/squeezebert-mnli-headless"),Oa=r(" checkpoint."),kr=h(),Pe=i("p"),Ra=r("This model was contributed by "),Ct=i("a"),Wa=r("forresti"),Ka=r("."),zr=h(),pe=i("h2"),Ae=i("a"),Uo=i("span"),z(Pt.$$.fragment),Ha=h(),Vo=i("span"),Qa=r("SqueezeBertConfig"),$r=h(),U=i("div"),z(At.$$.fragment),Ua=h(),ue=i("p"),Va=r("This is the configuration class to store the configuration of a "),ao=i("a"),Ga=r("SqueezeBertModel"),Ja=r(`. It is used to instantiate a
SqueezeBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the SqueezeBERT
`),Lt=i("a"),Xa=r("squeezebert/squeezebert-uncased"),Ya=r(" architecture."),Za=h(),he=i("p"),ei=r("Configuration objects inherit from "),io=i("a"),ti=r("PretrainedConfig"),si=r(` and can be used to control the model outputs. Read the
documentation from `),lo=i("a"),oi=r("PretrainedConfig"),ni=r(" for more information."),ri=h(),z(Le.$$.fragment),ai=h(),Go=i("p"),ii=r(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),qr=h(),me=i("h2"),Ne=i("a"),Jo=i("span"),z(Nt.$$.fragment),li=h(),Xo=i("span"),di=r("SqueezeBertTokenizer"),vr=h(),M=i("div"),z(It.$$.fragment),ci=h(),Yo=i("p"),pi=r("Constructs a SqueezeBert tokenizer."),ui=h(),Ie=i("p"),co=i("a"),hi=r("SqueezeBertTokenizer"),mi=r(" is identical to "),po=i("a"),fi=r("BertTokenizer"),gi=r(" and runs end-to-end tokenization: punctuation splitting"),_i=h(),Zo=i("ul"),en=i("li"),bi=r("wordpiece."),ki=h(),Dt=i("p"),zi=r("Refer to superclass "),uo=i("a"),$i=r("BertTokenizer"),qi=r(" for usage examples and documentation concerning parameters."),vi=h(),ae=i("div"),z(Ot.$$.fragment),wi=h(),tn=i("p"),yi=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ti=h(),Rt=i("ul"),ho=i("li"),Si=r("single sequence: "),sn=i("code"),Bi=r("[CLS] X [SEP]"),Ei=h(),mo=i("li"),ji=r("pair of sequences: "),on=i("code"),Mi=r("[CLS] A [SEP] B [SEP]"),Fi=h(),De=i("div"),z(Wt.$$.fragment),xi=h(),Kt=i("p"),Ci=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),nn=i("code"),Pi=r("prepare_for_model"),Ai=r(" method."),Li=h(),ee=i("div"),z(Ht.$$.fragment),Ni=h(),rn=i("p"),Ii=r("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Di=h(),z(Oe.$$.fragment),Oi=h(),fe=i("p"),Ri=r("If "),an=i("code"),Wi=r("token_ids_1"),Ki=r(" is "),ln=i("code"),Hi=r("None"),Qi=r(", this method only returns the first portion of the mask (0s)."),Ui=h(),fo=i("div"),z(Qt.$$.fragment),wr=h(),ge=i("h2"),Re=i("a"),dn=i("span"),z(Ut.$$.fragment),Vi=h(),cn=i("span"),Gi=r("SqueezeBertTokenizerFast"),yr=h(),Y=i("div"),z(Vt.$$.fragment),Ji=h(),Gt=i("p"),Xi=r("Constructs a \u201CFast\u201D SqueezeBert tokenizer (backed by HuggingFace\u2019s "),pn=i("em"),Yi=r("tokenizers"),Zi=r(" library)."),el=h(),We=i("p"),go=i("a"),tl=r("SqueezeBertTokenizerFast"),sl=r(" is identical to "),_o=i("a"),ol=r("BertTokenizerFast"),nl=r(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),rl=h(),Jt=i("p"),al=r("Refer to superclass "),bo=i("a"),il=r("BertTokenizerFast"),ll=r(" for usage examples and documentation concerning parameters."),Tr=h(),_e=i("h2"),Ke=i("a"),un=i("span"),z(Xt.$$.fragment),dl=h(),hn=i("span"),cl=r("SqueezeBertModel"),Sr=h(),F=i("div"),z(Yt.$$.fragment),pl=h(),mn=i("p"),ul=r("The bare SqueezeBERT Model transformer outputting raw hidden-states without any specific head on top."),hl=h(),Zt=i("p"),ml=r("The SqueezeBERT model was proposed in "),es=i("a"),fl=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),gl=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),_l=h(),ts=i("p"),bl=r("This model inherits from "),ko=i("a"),kl=r("PreTrainedModel"),zl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$l=h(),ss=i("p"),ql=r("This model is also a PyTorch "),os=i("a"),vl=r("torch.nn.Module"),wl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yl=h(),ns=i("p"),Tl=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),fn=i("em"),Sl=r("squeezebert/squeezebert-mnli-headless"),Bl=r(" checkpoint as a starting point."),El=h(),z(He.$$.fragment),jl=h(),z(Qe.$$.fragment),Ml=h(),te=i("div"),z(rs.$$.fragment),Fl=h(),be=i("p"),xl=r("The "),zo=i("a"),Cl=r("SqueezeBertModel"),Pl=r(" forward method, overrides the "),gn=i("code"),Al=r("__call__"),Ll=r(" special method."),Nl=h(),z(Ue.$$.fragment),Il=h(),z(Ve.$$.fragment),Br=h(),ke=i("h2"),Ge=i("a"),_n=i("span"),z(as.$$.fragment),Dl=h(),bn=i("span"),Ol=r("SqueezeBertForMaskedLM"),Er=h(),x=i("div"),z(is.$$.fragment),Rl=h(),ls=i("p"),Wl=r("SqueezeBERT Model with a "),kn=i("code"),Kl=r("language modeling"),Hl=r(" head on top."),Ql=h(),ds=i("p"),Ul=r("The SqueezeBERT model was proposed in "),cs=i("a"),Vl=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Gl=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Jl=h(),ps=i("p"),Xl=r("This model inherits from "),$o=i("a"),Yl=r("PreTrainedModel"),Zl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ed=h(),us=i("p"),td=r("This model is also a PyTorch "),hs=i("a"),sd=r("torch.nn.Module"),od=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nd=h(),ms=i("p"),rd=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),zn=i("em"),ad=r("squeezebert/squeezebert-mnli-headless"),id=r(" checkpoint as a starting point."),ld=h(),z(Je.$$.fragment),dd=h(),z(Xe.$$.fragment),cd=h(),V=i("div"),z(fs.$$.fragment),pd=h(),ze=i("p"),ud=r("The "),qo=i("a"),hd=r("SqueezeBertForMaskedLM"),md=r(" forward method, overrides the "),$n=i("code"),fd=r("__call__"),gd=r(" special method."),_d=h(),z(Ye.$$.fragment),bd=h(),z(Ze.$$.fragment),kd=h(),z(et.$$.fragment),jr=h(),$e=i("h2"),tt=i("a"),qn=i("span"),z(gs.$$.fragment),zd=h(),vn=i("span"),$d=r("SqueezeBertForSequenceClassification"),Mr=h(),C=i("div"),z(_s.$$.fragment),qd=h(),wn=i("p"),vd=r(`SqueezeBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wd=h(),bs=i("p"),yd=r("The SqueezeBERT model was proposed in "),ks=i("a"),Td=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Sd=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Bd=h(),zs=i("p"),Ed=r("This model inherits from "),vo=i("a"),jd=r("PreTrainedModel"),Md=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd=h(),$s=i("p"),xd=r("This model is also a PyTorch "),qs=i("a"),Cd=r("torch.nn.Module"),Pd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ad=h(),vs=i("p"),Ld=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),yn=i("em"),Nd=r("squeezebert/squeezebert-mnli-headless"),Id=r(" checkpoint as a starting point."),Dd=h(),z(st.$$.fragment),Od=h(),z(ot.$$.fragment),Rd=h(),I=i("div"),z(ws.$$.fragment),Wd=h(),qe=i("p"),Kd=r("The "),wo=i("a"),Hd=r("SqueezeBertForSequenceClassification"),Qd=r(" forward method, overrides the "),Tn=i("code"),Ud=r("__call__"),Vd=r(" special method."),Gd=h(),z(nt.$$.fragment),Jd=h(),z(rt.$$.fragment),Xd=h(),z(at.$$.fragment),Yd=h(),z(it.$$.fragment),Zd=h(),z(lt.$$.fragment),Fr=h(),ve=i("h2"),dt=i("a"),Sn=i("span"),z(ys.$$.fragment),ec=h(),Bn=i("span"),tc=r("SqueezeBertForMultipleChoice"),xr=h(),P=i("div"),z(Ts.$$.fragment),sc=h(),En=i("p"),oc=r(`SqueezeBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),nc=h(),Ss=i("p"),rc=r("The SqueezeBERT model was proposed in "),Bs=i("a"),ac=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),ic=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),lc=h(),Es=i("p"),dc=r("This model inherits from "),yo=i("a"),cc=r("PreTrainedModel"),pc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uc=h(),js=i("p"),hc=r("This model is also a PyTorch "),Ms=i("a"),mc=r("torch.nn.Module"),fc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gc=h(),Fs=i("p"),_c=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),jn=i("em"),bc=r("squeezebert/squeezebert-mnli-headless"),kc=r(" checkpoint as a starting point."),zc=h(),z(ct.$$.fragment),$c=h(),z(pt.$$.fragment),qc=h(),se=i("div"),z(xs.$$.fragment),vc=h(),we=i("p"),wc=r("The "),To=i("a"),yc=r("SqueezeBertForMultipleChoice"),Tc=r(" forward method, overrides the "),Mn=i("code"),Sc=r("__call__"),Bc=r(" special method."),Ec=h(),z(ut.$$.fragment),jc=h(),z(ht.$$.fragment),Cr=h(),ye=i("h2"),mt=i("a"),Fn=i("span"),z(Cs.$$.fragment),Mc=h(),xn=i("span"),Fc=r("SqueezeBertForTokenClassification"),Pr=h(),A=i("div"),z(Ps.$$.fragment),xc=h(),Cn=i("p"),Cc=r(`SqueezeBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Pc=h(),As=i("p"),Ac=r("The SqueezeBERT model was proposed in "),Ls=i("a"),Lc=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Nc=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Ic=h(),Ns=i("p"),Dc=r("This model inherits from "),So=i("a"),Oc=r("PreTrainedModel"),Rc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc=h(),Is=i("p"),Kc=r("This model is also a PyTorch "),Ds=i("a"),Hc=r("torch.nn.Module"),Qc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc=h(),Os=i("p"),Vc=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Pn=i("em"),Gc=r("squeezebert/squeezebert-mnli-headless"),Jc=r(" checkpoint as a starting point."),Xc=h(),z(ft.$$.fragment),Yc=h(),z(gt.$$.fragment),Zc=h(),G=i("div"),z(Rs.$$.fragment),ep=h(),Te=i("p"),tp=r("The "),Bo=i("a"),sp=r("SqueezeBertForTokenClassification"),op=r(" forward method, overrides the "),An=i("code"),np=r("__call__"),rp=r(" special method."),ap=h(),z(_t.$$.fragment),ip=h(),z(bt.$$.fragment),lp=h(),z(kt.$$.fragment),Ar=h(),Se=i("h2"),zt=i("a"),Ln=i("span"),z(Ws.$$.fragment),dp=h(),Nn=i("span"),cp=r("SqueezeBertForQuestionAnswering"),Lr=h(),L=i("div"),z(Ks.$$.fragment),pp=h(),Be=i("p"),up=r(`SqueezeBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),In=i("code"),hp=r("span start logits"),mp=r(" and "),Dn=i("code"),fp=r("span end logits"),gp=r(")."),_p=h(),Hs=i("p"),bp=r("The SqueezeBERT model was proposed in "),Qs=i("a"),kp=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),zp=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),$p=h(),Us=i("p"),qp=r("This model inherits from "),Eo=i("a"),vp=r("PreTrainedModel"),wp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp=h(),Vs=i("p"),Tp=r("This model is also a PyTorch "),Gs=i("a"),Sp=r("torch.nn.Module"),Bp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ep=h(),Js=i("p"),jp=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),On=i("em"),Mp=r("squeezebert/squeezebert-mnli-headless"),Fp=r(" checkpoint as a starting point."),xp=h(),z($t.$$.fragment),Cp=h(),z(qt.$$.fragment),Pp=h(),J=i("div"),z(Xs.$$.fragment),Ap=h(),Ee=i("p"),Lp=r("The "),jo=i("a"),Np=r("SqueezeBertForQuestionAnswering"),Ip=r(" forward method, overrides the "),Rn=i("code"),Dp=r("__call__"),Op=r(" special method."),Rp=h(),z(vt.$$.fragment),Wp=h(),z(wt.$$.fragment),Kp=h(),z(yt.$$.fragment),this.h()},l(o){const _=Eh('[data-svelte="svelte-1phssyn"]',document.head);n=l(_,"META",{name:!0,content:!0}),_.forEach(s),f=m(o),p=l(o,"H1",{class:!0});var Ys=d(p);c=l(Ys,"A",{id:!0,class:!0,href:!0});var Wn=d(c);g=l(Wn,"SPAN",{});var Kn=d(g);$(t.$$.fragment,Kn),Kn.forEach(s),Wn.forEach(s),u=m(Ys),j=l(Ys,"SPAN",{});var Hn=d(j);wa=a(Hn,"SqueezeBERT"),Hn.forEach(s),Ys.forEach(s),hr=m(o),ce=l(o,"H2",{class:!0});var Zs=d(ce);Ce=l(Zs,"A",{id:!0,class:!0,href:!0});var Qn=d(Ce);Oo=l(Qn,"SPAN",{});var Un=d(Oo);$(jt.$$.fragment,Un),Un.forEach(s),Qn.forEach(s),ya=m(Zs),Ro=l(Zs,"SPAN",{});var Vn=d(Ro);Ta=a(Vn,"Overview"),Vn.forEach(s),Zs.forEach(s),mr=m(o),ne=l(o,"P",{});var je=d(ne);Sa=a(je,"The SqueezeBERT model was proposed in "),Mt=l(je,"A",{href:!0,rel:!0});var Gn=d(Mt);Ba=a(Gn,"SqueezeBERT: What can computer vision teach NLP about efficient neural networks?"),Gn.forEach(s),Ea=a(je,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, Kurt W. Keutzer. It\u2019s a
bidirectional transformer similar to the BERT model. The key difference between the BERT architecture and the
SqueezeBERT architecture is that SqueezeBERT uses `),Ft=l(je,"A",{href:!0,rel:!0});var Jn=d(Ft);ja=a(Jn,"grouped convolutions"),Jn.forEach(s),Ma=a(je,`
instead of fully-connected layers for the Q, K, V and FFN layers.`),je.forEach(s),fr=m(o),oo=l(o,"P",{});var Xn=d(oo);Fa=a(Xn,"The abstract from the paper is the following:"),Xn.forEach(s),gr=m(o),no=l(o,"P",{});var Yn=d(no);Wo=l(Yn,"EM",{});var Zn=d(Wo);xa=a(Zn,`Humans read and write hundreds of billions of messages every day. Further, due to the availability of large datasets,
large computing systems, and better neural network models, natural language processing (NLP) technology has made
significant strides in understanding, proofreading, and organizing these messages. Thus, there is a significant
opportunity to deploy NLP in myriad applications to help web users, social networks, and businesses. In particular, we
consider smartphones and other mobile devices as crucial platforms for deploying NLP models at scale. However, today\u2019s
highly-accurate NLP neural network models such as BERT and RoBERTa are extremely computationally expensive, with
BERT-base taking 1.7 seconds to classify a text snippet on a Pixel 3 smartphone. In this work, we observe that methods
such as grouped convolutions have yielded significant speedups for computer vision networks, but many of these
techniques have not been adopted by NLP neural network designers. We demonstrate how to replace several operations in
self-attention layers with grouped convolutions, and we use this technique in a novel network architecture called
SqueezeBERT, which runs 4.3x faster than BERT-base on the Pixel 3 while achieving competitive accuracy on the GLUE test
set. The SqueezeBERT code will be released.`),Zn.forEach(s),Yn.forEach(s),_r=m(o),ro=l(o,"P",{});var er=d(ro);Ca=a(er,"Tips:"),er.forEach(s),br=m(o),re=l(o,"UL",{});var Me=d(re);Ko=l(Me,"LI",{});var tr=d(Ko);Pa=a(tr,`SqueezeBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right
rather than the left.`),tr.forEach(s),Aa=m(Me),Ho=l(Me,"LI",{});var sr=d(Ho);La=a(sr,`SqueezeBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),sr.forEach(s),Na=m(Me),xt=l(Me,"LI",{});var eo=d(xt);Ia=a(eo,`For best results when finetuning on sequence classification tasks, it is recommended to start with the
`),Qo=l(eo,"EM",{});var or=d(Qo);Da=a(or,"squeezebert/squeezebert-mnli-headless"),or.forEach(s),Oa=a(eo," checkpoint."),eo.forEach(s),Me.forEach(s),kr=m(o),Pe=l(o,"P",{});var to=d(Pe);Ra=a(to,"This model was contributed by "),Ct=l(to,"A",{href:!0,rel:!0});var nr=d(Ct);Wa=a(nr,"forresti"),nr.forEach(s),Ka=a(to,"."),to.forEach(s),zr=m(o),pe=l(o,"H2",{class:!0});var so=d(pe);Ae=l(so,"A",{id:!0,class:!0,href:!0});var rr=d(Ae);Uo=l(rr,"SPAN",{});var ar=d(Uo);$(Pt.$$.fragment,ar),ar.forEach(s),rr.forEach(s),Ha=m(so),Vo=l(so,"SPAN",{});var ir=d(Vo);Qa=a(ir,"SqueezeBertConfig"),ir.forEach(s),so.forEach(s),$r=m(o),U=l(o,"DIV",{class:!0});var Z=d(U);$(At.$$.fragment,Z),Ua=m(Z),ue=l(Z,"P",{});var Fe=d(ue);Va=a(Fe,"This is the configuration class to store the configuration of a "),ao=l(Fe,"A",{href:!0});var lr=d(ao);Ga=a(lr,"SqueezeBertModel"),lr.forEach(s),Ja=a(Fe,`. It is used to instantiate a
SqueezeBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the SqueezeBERT
`),Lt=l(Fe,"A",{href:!0,rel:!0});var dr=d(Lt);Xa=a(dr,"squeezebert/squeezebert-uncased"),dr.forEach(s),Ya=a(Fe," architecture."),Fe.forEach(s),Za=m(Z),he=l(Z,"P",{});var xe=d(he);ei=a(xe,"Configuration objects inherit from "),io=l(xe,"A",{href:!0});var cr=d(io);ti=a(cr,"PretrainedConfig"),cr.forEach(s),si=a(xe,` and can be used to control the model outputs. Read the
documentation from `),lo=l(xe,"A",{href:!0});var Up=d(lo);oi=a(Up,"PretrainedConfig"),Up.forEach(s),ni=a(xe," for more information."),xe.forEach(s),ri=m(Z),$(Le.$$.fragment,Z),ai=m(Z),Go=l(Z,"P",{});var Vp=d(Go);ii=a(Vp,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Vp.forEach(s),Z.forEach(s),qr=m(o),me=l(o,"H2",{class:!0});var Ir=d(me);Ne=l(Ir,"A",{id:!0,class:!0,href:!0});var Gp=d(Ne);Jo=l(Gp,"SPAN",{});var Jp=d(Jo);$(Nt.$$.fragment,Jp),Jp.forEach(s),Gp.forEach(s),li=m(Ir),Xo=l(Ir,"SPAN",{});var Xp=d(Xo);di=a(Xp,"SqueezeBertTokenizer"),Xp.forEach(s),Ir.forEach(s),vr=m(o),M=l(o,"DIV",{class:!0});var D=d(M);$(It.$$.fragment,D),ci=m(D),Yo=l(D,"P",{});var Yp=d(Yo);pi=a(Yp,"Constructs a SqueezeBert tokenizer."),Yp.forEach(s),ui=m(D),Ie=l(D,"P",{});var pr=d(Ie);co=l(pr,"A",{href:!0});var Zp=d(co);hi=a(Zp,"SqueezeBertTokenizer"),Zp.forEach(s),mi=a(pr," is identical to "),po=l(pr,"A",{href:!0});var eu=d(po);fi=a(eu,"BertTokenizer"),eu.forEach(s),gi=a(pr," and runs end-to-end tokenization: punctuation splitting"),pr.forEach(s),_i=m(D),Zo=l(D,"UL",{});var tu=d(Zo);en=l(tu,"LI",{});var su=d(en);bi=a(su,"wordpiece."),su.forEach(s),tu.forEach(s),ki=m(D),Dt=l(D,"P",{});var Dr=d(Dt);zi=a(Dr,"Refer to superclass "),uo=l(Dr,"A",{href:!0});var ou=d(uo);$i=a(ou,"BertTokenizer"),ou.forEach(s),qi=a(Dr," for usage examples and documentation concerning parameters."),Dr.forEach(s),vi=m(D),ae=l(D,"DIV",{class:!0});var Mo=d(ae);$(Ot.$$.fragment,Mo),wi=m(Mo),tn=l(Mo,"P",{});var nu=d(tn);yi=a(nu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),nu.forEach(s),Ti=m(Mo),Rt=l(Mo,"UL",{});var Or=d(Rt);ho=l(Or,"LI",{});var Hp=d(ho);Si=a(Hp,"single sequence: "),sn=l(Hp,"CODE",{});var ru=d(sn);Bi=a(ru,"[CLS] X [SEP]"),ru.forEach(s),Hp.forEach(s),Ei=m(Or),mo=l(Or,"LI",{});var Qp=d(mo);ji=a(Qp,"pair of sequences: "),on=l(Qp,"CODE",{});var au=d(on);Mi=a(au,"[CLS] A [SEP] B [SEP]"),au.forEach(s),Qp.forEach(s),Or.forEach(s),Mo.forEach(s),Fi=m(D),De=l(D,"DIV",{class:!0});var Rr=d(De);$(Wt.$$.fragment,Rr),xi=m(Rr),Kt=l(Rr,"P",{});var Wr=d(Kt);Ci=a(Wr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),nn=l(Wr,"CODE",{});var iu=d(nn);Pi=a(iu,"prepare_for_model"),iu.forEach(s),Ai=a(Wr," method."),Wr.forEach(s),Rr.forEach(s),Li=m(D),ee=l(D,"DIV",{class:!0});var Tt=d(ee);$(Ht.$$.fragment,Tt),Ni=m(Tt),rn=l(Tt,"P",{});var lu=d(rn);Ii=a(lu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),lu.forEach(s),Di=m(Tt),$(Oe.$$.fragment,Tt),Oi=m(Tt),fe=l(Tt,"P",{});var Fo=d(fe);Ri=a(Fo,"If "),an=l(Fo,"CODE",{});var du=d(an);Wi=a(du,"token_ids_1"),du.forEach(s),Ki=a(Fo," is "),ln=l(Fo,"CODE",{});var cu=d(ln);Hi=a(cu,"None"),cu.forEach(s),Qi=a(Fo,", this method only returns the first portion of the mask (0s)."),Fo.forEach(s),Tt.forEach(s),Ui=m(D),fo=l(D,"DIV",{class:!0});var pu=d(fo);$(Qt.$$.fragment,pu),pu.forEach(s),D.forEach(s),wr=m(o),ge=l(o,"H2",{class:!0});var Kr=d(ge);Re=l(Kr,"A",{id:!0,class:!0,href:!0});var uu=d(Re);dn=l(uu,"SPAN",{});var hu=d(dn);$(Ut.$$.fragment,hu),hu.forEach(s),uu.forEach(s),Vi=m(Kr),cn=l(Kr,"SPAN",{});var mu=d(cn);Gi=a(mu,"SqueezeBertTokenizerFast"),mu.forEach(s),Kr.forEach(s),yr=m(o),Y=l(o,"DIV",{class:!0});var St=d(Y);$(Vt.$$.fragment,St),Ji=m(St),Gt=l(St,"P",{});var Hr=d(Gt);Xi=a(Hr,"Constructs a \u201CFast\u201D SqueezeBert tokenizer (backed by HuggingFace\u2019s "),pn=l(Hr,"EM",{});var fu=d(pn);Yi=a(fu,"tokenizers"),fu.forEach(s),Zi=a(Hr," library)."),Hr.forEach(s),el=m(St),We=l(St,"P",{});var ur=d(We);go=l(ur,"A",{href:!0});var gu=d(go);tl=a(gu,"SqueezeBertTokenizerFast"),gu.forEach(s),sl=a(ur," is identical to "),_o=l(ur,"A",{href:!0});var _u=d(_o);ol=a(_u,"BertTokenizerFast"),_u.forEach(s),nl=a(ur,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),ur.forEach(s),rl=m(St),Jt=l(St,"P",{});var Qr=d(Jt);al=a(Qr,"Refer to superclass "),bo=l(Qr,"A",{href:!0});var bu=d(bo);il=a(bu,"BertTokenizerFast"),bu.forEach(s),ll=a(Qr," for usage examples and documentation concerning parameters."),Qr.forEach(s),St.forEach(s),Tr=m(o),_e=l(o,"H2",{class:!0});var Ur=d(_e);Ke=l(Ur,"A",{id:!0,class:!0,href:!0});var ku=d(Ke);un=l(ku,"SPAN",{});var zu=d(un);$(Xt.$$.fragment,zu),zu.forEach(s),ku.forEach(s),dl=m(Ur),hn=l(Ur,"SPAN",{});var $u=d(hn);cl=a($u,"SqueezeBertModel"),$u.forEach(s),Ur.forEach(s),Sr=m(o),F=l(o,"DIV",{class:!0});var O=d(F);$(Yt.$$.fragment,O),pl=m(O),mn=l(O,"P",{});var qu=d(mn);ul=a(qu,"The bare SqueezeBERT Model transformer outputting raw hidden-states without any specific head on top."),qu.forEach(s),hl=m(O),Zt=l(O,"P",{});var Vr=d(Zt);ml=a(Vr,"The SqueezeBERT model was proposed in "),es=l(Vr,"A",{href:!0,rel:!0});var vu=d(es);fl=a(vu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),vu.forEach(s),gl=a(Vr,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Vr.forEach(s),_l=m(O),ts=l(O,"P",{});var Gr=d(ts);bl=a(Gr,"This model inherits from "),ko=l(Gr,"A",{href:!0});var wu=d(ko);kl=a(wu,"PreTrainedModel"),wu.forEach(s),zl=a(Gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gr.forEach(s),$l=m(O),ss=l(O,"P",{});var Jr=d(ss);ql=a(Jr,"This model is also a PyTorch "),os=l(Jr,"A",{href:!0,rel:!0});var yu=d(os);vl=a(yu,"torch.nn.Module"),yu.forEach(s),wl=a(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(s),yl=m(O),ns=l(O,"P",{});var Xr=d(ns);Tl=a(Xr,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),fn=l(Xr,"EM",{});var Tu=d(fn);Sl=a(Tu,"squeezebert/squeezebert-mnli-headless"),Tu.forEach(s),Bl=a(Xr," checkpoint as a starting point."),Xr.forEach(s),El=m(O),$(He.$$.fragment,O),jl=m(O),$(Qe.$$.fragment,O),Ml=m(O),te=l(O,"DIV",{class:!0});var Bt=d(te);$(rs.$$.fragment,Bt),Fl=m(Bt),be=l(Bt,"P",{});var xo=d(be);xl=a(xo,"The "),zo=l(xo,"A",{href:!0});var Su=d(zo);Cl=a(Su,"SqueezeBertModel"),Su.forEach(s),Pl=a(xo," forward method, overrides the "),gn=l(xo,"CODE",{});var Bu=d(gn);Al=a(Bu,"__call__"),Bu.forEach(s),Ll=a(xo," special method."),xo.forEach(s),Nl=m(Bt),$(Ue.$$.fragment,Bt),Il=m(Bt),$(Ve.$$.fragment,Bt),Bt.forEach(s),O.forEach(s),Br=m(o),ke=l(o,"H2",{class:!0});var Yr=d(ke);Ge=l(Yr,"A",{id:!0,class:!0,href:!0});var Eu=d(Ge);_n=l(Eu,"SPAN",{});var ju=d(_n);$(as.$$.fragment,ju),ju.forEach(s),Eu.forEach(s),Dl=m(Yr),bn=l(Yr,"SPAN",{});var Mu=d(bn);Ol=a(Mu,"SqueezeBertForMaskedLM"),Mu.forEach(s),Yr.forEach(s),Er=m(o),x=l(o,"DIV",{class:!0});var R=d(x);$(is.$$.fragment,R),Rl=m(R),ls=l(R,"P",{});var Zr=d(ls);Wl=a(Zr,"SqueezeBERT Model with a "),kn=l(Zr,"CODE",{});var Fu=d(kn);Kl=a(Fu,"language modeling"),Fu.forEach(s),Hl=a(Zr," head on top."),Zr.forEach(s),Ql=m(R),ds=l(R,"P",{});var ea=d(ds);Ul=a(ea,"The SqueezeBERT model was proposed in "),cs=l(ea,"A",{href:!0,rel:!0});var xu=d(cs);Vl=a(xu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),xu.forEach(s),Gl=a(ea,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ea.forEach(s),Jl=m(R),ps=l(R,"P",{});var ta=d(ps);Xl=a(ta,"This model inherits from "),$o=l(ta,"A",{href:!0});var Cu=d($o);Yl=a(Cu,"PreTrainedModel"),Cu.forEach(s),Zl=a(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(s),ed=m(R),us=l(R,"P",{});var sa=d(us);td=a(sa,"This model is also a PyTorch "),hs=l(sa,"A",{href:!0,rel:!0});var Pu=d(hs);sd=a(Pu,"torch.nn.Module"),Pu.forEach(s),od=a(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(s),nd=m(R),ms=l(R,"P",{});var oa=d(ms);rd=a(oa,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),zn=l(oa,"EM",{});var Au=d(zn);ad=a(Au,"squeezebert/squeezebert-mnli-headless"),Au.forEach(s),id=a(oa," checkpoint as a starting point."),oa.forEach(s),ld=m(R),$(Je.$$.fragment,R),dd=m(R),$(Xe.$$.fragment,R),cd=m(R),V=l(R,"DIV",{class:!0});var ie=d(V);$(fs.$$.fragment,ie),pd=m(ie),ze=l(ie,"P",{});var Co=d(ze);ud=a(Co,"The "),qo=l(Co,"A",{href:!0});var Lu=d(qo);hd=a(Lu,"SqueezeBertForMaskedLM"),Lu.forEach(s),md=a(Co," forward method, overrides the "),$n=l(Co,"CODE",{});var Nu=d($n);fd=a(Nu,"__call__"),Nu.forEach(s),gd=a(Co," special method."),Co.forEach(s),_d=m(ie),$(Ye.$$.fragment,ie),bd=m(ie),$(Ze.$$.fragment,ie),kd=m(ie),$(et.$$.fragment,ie),ie.forEach(s),R.forEach(s),jr=m(o),$e=l(o,"H2",{class:!0});var na=d($e);tt=l(na,"A",{id:!0,class:!0,href:!0});var Iu=d(tt);qn=l(Iu,"SPAN",{});var Du=d(qn);$(gs.$$.fragment,Du),Du.forEach(s),Iu.forEach(s),zd=m(na),vn=l(na,"SPAN",{});var Ou=d(vn);$d=a(Ou,"SqueezeBertForSequenceClassification"),Ou.forEach(s),na.forEach(s),Mr=m(o),C=l(o,"DIV",{class:!0});var W=d(C);$(_s.$$.fragment,W),qd=m(W),wn=l(W,"P",{});var Ru=d(wn);vd=a(Ru,`SqueezeBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ru.forEach(s),wd=m(W),bs=l(W,"P",{});var ra=d(bs);yd=a(ra,"The SqueezeBERT model was proposed in "),ks=l(ra,"A",{href:!0,rel:!0});var Wu=d(ks);Td=a(Wu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Wu.forEach(s),Sd=a(ra,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ra.forEach(s),Bd=m(W),zs=l(W,"P",{});var aa=d(zs);Ed=a(aa,"This model inherits from "),vo=l(aa,"A",{href:!0});var Ku=d(vo);jd=a(Ku,"PreTrainedModel"),Ku.forEach(s),Md=a(aa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aa.forEach(s),Fd=m(W),$s=l(W,"P",{});var ia=d($s);xd=a(ia,"This model is also a PyTorch "),qs=l(ia,"A",{href:!0,rel:!0});var Hu=d(qs);Cd=a(Hu,"torch.nn.Module"),Hu.forEach(s),Pd=a(ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ia.forEach(s),Ad=m(W),vs=l(W,"P",{});var la=d(vs);Ld=a(la,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),yn=l(la,"EM",{});var Qu=d(yn);Nd=a(Qu,"squeezebert/squeezebert-mnli-headless"),Qu.forEach(s),Id=a(la," checkpoint as a starting point."),la.forEach(s),Dd=m(W),$(st.$$.fragment,W),Od=m(W),$(ot.$$.fragment,W),Rd=m(W),I=l(W,"DIV",{class:!0});var X=d(I);$(ws.$$.fragment,X),Wd=m(X),qe=l(X,"P",{});var Po=d(qe);Kd=a(Po,"The "),wo=l(Po,"A",{href:!0});var Uu=d(wo);Hd=a(Uu,"SqueezeBertForSequenceClassification"),Uu.forEach(s),Qd=a(Po," forward method, overrides the "),Tn=l(Po,"CODE",{});var Vu=d(Tn);Ud=a(Vu,"__call__"),Vu.forEach(s),Vd=a(Po," special method."),Po.forEach(s),Gd=m(X),$(nt.$$.fragment,X),Jd=m(X),$(rt.$$.fragment,X),Xd=m(X),$(at.$$.fragment,X),Yd=m(X),$(it.$$.fragment,X),Zd=m(X),$(lt.$$.fragment,X),X.forEach(s),W.forEach(s),Fr=m(o),ve=l(o,"H2",{class:!0});var da=d(ve);dt=l(da,"A",{id:!0,class:!0,href:!0});var Gu=d(dt);Sn=l(Gu,"SPAN",{});var Ju=d(Sn);$(ys.$$.fragment,Ju),Ju.forEach(s),Gu.forEach(s),ec=m(da),Bn=l(da,"SPAN",{});var Xu=d(Bn);tc=a(Xu,"SqueezeBertForMultipleChoice"),Xu.forEach(s),da.forEach(s),xr=m(o),P=l(o,"DIV",{class:!0});var K=d(P);$(Ts.$$.fragment,K),sc=m(K),En=l(K,"P",{});var Yu=d(En);oc=a(Yu,`SqueezeBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Yu.forEach(s),nc=m(K),Ss=l(K,"P",{});var ca=d(Ss);rc=a(ca,"The SqueezeBERT model was proposed in "),Bs=l(ca,"A",{href:!0,rel:!0});var Zu=d(Bs);ac=a(Zu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Zu.forEach(s),ic=a(ca,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ca.forEach(s),lc=m(K),Es=l(K,"P",{});var pa=d(Es);dc=a(pa,"This model inherits from "),yo=l(pa,"A",{href:!0});var eh=d(yo);cc=a(eh,"PreTrainedModel"),eh.forEach(s),pc=a(pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa.forEach(s),uc=m(K),js=l(K,"P",{});var ua=d(js);hc=a(ua,"This model is also a PyTorch "),Ms=l(ua,"A",{href:!0,rel:!0});var th=d(Ms);mc=a(th,"torch.nn.Module"),th.forEach(s),fc=a(ua,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ua.forEach(s),gc=m(K),Fs=l(K,"P",{});var ha=d(Fs);_c=a(ha,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),jn=l(ha,"EM",{});var sh=d(jn);bc=a(sh,"squeezebert/squeezebert-mnli-headless"),sh.forEach(s),kc=a(ha," checkpoint as a starting point."),ha.forEach(s),zc=m(K),$(ct.$$.fragment,K),$c=m(K),$(pt.$$.fragment,K),qc=m(K),se=l(K,"DIV",{class:!0});var Et=d(se);$(xs.$$.fragment,Et),vc=m(Et),we=l(Et,"P",{});var Ao=d(we);wc=a(Ao,"The "),To=l(Ao,"A",{href:!0});var oh=d(To);yc=a(oh,"SqueezeBertForMultipleChoice"),oh.forEach(s),Tc=a(Ao," forward method, overrides the "),Mn=l(Ao,"CODE",{});var nh=d(Mn);Sc=a(nh,"__call__"),nh.forEach(s),Bc=a(Ao," special method."),Ao.forEach(s),Ec=m(Et),$(ut.$$.fragment,Et),jc=m(Et),$(ht.$$.fragment,Et),Et.forEach(s),K.forEach(s),Cr=m(o),ye=l(o,"H2",{class:!0});var ma=d(ye);mt=l(ma,"A",{id:!0,class:!0,href:!0});var rh=d(mt);Fn=l(rh,"SPAN",{});var ah=d(Fn);$(Cs.$$.fragment,ah),ah.forEach(s),rh.forEach(s),Mc=m(ma),xn=l(ma,"SPAN",{});var ih=d(xn);Fc=a(ih,"SqueezeBertForTokenClassification"),ih.forEach(s),ma.forEach(s),Pr=m(o),A=l(o,"DIV",{class:!0});var H=d(A);$(Ps.$$.fragment,H),xc=m(H),Cn=l(H,"P",{});var lh=d(Cn);Cc=a(lh,`SqueezeBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),lh.forEach(s),Pc=m(H),As=l(H,"P",{});var fa=d(As);Ac=a(fa,"The SqueezeBERT model was proposed in "),Ls=l(fa,"A",{href:!0,rel:!0});var dh=d(Ls);Lc=a(dh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),dh.forEach(s),Nc=a(fa,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),fa.forEach(s),Ic=m(H),Ns=l(H,"P",{});var ga=d(Ns);Dc=a(ga,"This model inherits from "),So=l(ga,"A",{href:!0});var ch=d(So);Oc=a(ch,"PreTrainedModel"),ch.forEach(s),Rc=a(ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ga.forEach(s),Wc=m(H),Is=l(H,"P",{});var _a=d(Is);Kc=a(_a,"This model is also a PyTorch "),Ds=l(_a,"A",{href:!0,rel:!0});var ph=d(Ds);Hc=a(ph,"torch.nn.Module"),ph.forEach(s),Qc=a(_a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_a.forEach(s),Uc=m(H),Os=l(H,"P",{});var ba=d(Os);Vc=a(ba,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Pn=l(ba,"EM",{});var uh=d(Pn);Gc=a(uh,"squeezebert/squeezebert-mnli-headless"),uh.forEach(s),Jc=a(ba," checkpoint as a starting point."),ba.forEach(s),Xc=m(H),$(ft.$$.fragment,H),Yc=m(H),$(gt.$$.fragment,H),Zc=m(H),G=l(H,"DIV",{class:!0});var le=d(G);$(Rs.$$.fragment,le),ep=m(le),Te=l(le,"P",{});var Lo=d(Te);tp=a(Lo,"The "),Bo=l(Lo,"A",{href:!0});var hh=d(Bo);sp=a(hh,"SqueezeBertForTokenClassification"),hh.forEach(s),op=a(Lo," forward method, overrides the "),An=l(Lo,"CODE",{});var mh=d(An);np=a(mh,"__call__"),mh.forEach(s),rp=a(Lo," special method."),Lo.forEach(s),ap=m(le),$(_t.$$.fragment,le),ip=m(le),$(bt.$$.fragment,le),lp=m(le),$(kt.$$.fragment,le),le.forEach(s),H.forEach(s),Ar=m(o),Se=l(o,"H2",{class:!0});var ka=d(Se);zt=l(ka,"A",{id:!0,class:!0,href:!0});var fh=d(zt);Ln=l(fh,"SPAN",{});var gh=d(Ln);$(Ws.$$.fragment,gh),gh.forEach(s),fh.forEach(s),dp=m(ka),Nn=l(ka,"SPAN",{});var _h=d(Nn);cp=a(_h,"SqueezeBertForQuestionAnswering"),_h.forEach(s),ka.forEach(s),Lr=m(o),L=l(o,"DIV",{class:!0});var Q=d(L);$(Ks.$$.fragment,Q),pp=m(Q),Be=l(Q,"P",{});var No=d(Be);up=a(No,`SqueezeBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),In=l(No,"CODE",{});var bh=d(In);hp=a(bh,"span start logits"),bh.forEach(s),mp=a(No," and "),Dn=l(No,"CODE",{});var kh=d(Dn);fp=a(kh,"span end logits"),kh.forEach(s),gp=a(No,")."),No.forEach(s),_p=m(Q),Hs=l(Q,"P",{});var za=d(Hs);bp=a(za,"The SqueezeBERT model was proposed in "),Qs=l(za,"A",{href:!0,rel:!0});var zh=d(Qs);kp=a(zh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),zh.forEach(s),zp=a(za,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),za.forEach(s),$p=m(Q),Us=l(Q,"P",{});var $a=d(Us);qp=a($a,"This model inherits from "),Eo=l($a,"A",{href:!0});var $h=d(Eo);vp=a($h,"PreTrainedModel"),$h.forEach(s),wp=a($a,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$a.forEach(s),yp=m(Q),Vs=l(Q,"P",{});var qa=d(Vs);Tp=a(qa,"This model is also a PyTorch "),Gs=l(qa,"A",{href:!0,rel:!0});var qh=d(Gs);Sp=a(qh,"torch.nn.Module"),qh.forEach(s),Bp=a(qa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qa.forEach(s),Ep=m(Q),Js=l(Q,"P",{});var va=d(Js);jp=a(va,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),On=l(va,"EM",{});var vh=d(On);Mp=a(vh,"squeezebert/squeezebert-mnli-headless"),vh.forEach(s),Fp=a(va," checkpoint as a starting point."),va.forEach(s),xp=m(Q),$($t.$$.fragment,Q),Cp=m(Q),$(qt.$$.fragment,Q),Pp=m(Q),J=l(Q,"DIV",{class:!0});var de=d(J);$(Xs.$$.fragment,de),Ap=m(de),Ee=l(de,"P",{});var Io=d(Ee);Lp=a(Io,"The "),jo=l(Io,"A",{href:!0});var wh=d(jo);Np=a(wh,"SqueezeBertForQuestionAnswering"),wh.forEach(s),Ip=a(Io," forward method, overrides the "),Rn=l(Io,"CODE",{});var yh=d(Rn);Dp=a(yh,"__call__"),yh.forEach(s),Op=a(Io," special method."),Io.forEach(s),Rp=m(de),$(vt.$$.fragment,de),Wp=m(de),$(wt.$$.fragment,de),Kp=m(de),$(yt.$$.fragment,de),de.forEach(s),Q.forEach(s),this.h()},h(){b(n,"name","hf:doc:metadata"),b(n,"content",JSON.stringify(cm)),b(c,"id","squeezebert"),b(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(c,"href","#squeezebert"),b(p,"class","relative group"),b(Ce,"id","overview"),b(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ce,"href","#overview"),b(ce,"class","relative group"),b(Mt,"href","https://arxiv.org/abs/2006.11316"),b(Mt,"rel","nofollow"),b(Ft,"href","https://blog.yani.io/filter-group-tutorial"),b(Ft,"rel","nofollow"),b(Ct,"href","https://huggingface.co/forresti"),b(Ct,"rel","nofollow"),b(Ae,"id","transformers.SqueezeBertConfig"),b(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ae,"href","#transformers.SqueezeBertConfig"),b(pe,"class","relative group"),b(ao,"href","/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertModel"),b(Lt,"href","https://huggingface.co/squeezebert/squeezebert-uncased"),b(Lt,"rel","nofollow"),b(io,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),b(lo,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),b(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"id","transformers.SqueezeBertTokenizer"),b(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ne,"href","#transformers.SqueezeBertTokenizer"),b(me,"class","relative group"),b(co,"href","/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer"),b(po,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer"),b(uo,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer"),b(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Re,"id","transformers.SqueezeBertTokenizerFast"),b(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Re,"href","#transformers.SqueezeBertTokenizerFast"),b(ge,"class","relative group"),b(go,"href","/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertTokenizerFast"),b(_o,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizerFast"),b(bo,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizerFast"),b(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ke,"id","transformers.SqueezeBertModel"),b(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ke,"href","#transformers.SqueezeBertModel"),b(_e,"class","relative group"),b(es,"href","https://arxiv.org/abs/2006.11316"),b(es,"rel","nofollow"),b(ko,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),b(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(os,"rel","nofollow"),b(zo,"href","/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertModel"),b(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ge,"id","transformers.SqueezeBertForMaskedLM"),b(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ge,"href","#transformers.SqueezeBertForMaskedLM"),b(ke,"class","relative group"),b(cs,"href","https://arxiv.org/abs/2006.11316"),b(cs,"rel","nofollow"),b($o,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),b(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(hs,"rel","nofollow"),b(qo,"href","/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertForMaskedLM"),b(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(tt,"id","transformers.SqueezeBertForSequenceClassification"),b(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(tt,"href","#transformers.SqueezeBertForSequenceClassification"),b($e,"class","relative group"),b(ks,"href","https://arxiv.org/abs/2006.11316"),b(ks,"rel","nofollow"),b(vo,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),b(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(qs,"rel","nofollow"),b(wo,"href","/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertForSequenceClassification"),b(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(dt,"id","transformers.SqueezeBertForMultipleChoice"),b(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(dt,"href","#transformers.SqueezeBertForMultipleChoice"),b(ve,"class","relative group"),b(Bs,"href","https://arxiv.org/abs/2006.11316"),b(Bs,"rel","nofollow"),b(yo,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),b(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ms,"rel","nofollow"),b(To,"href","/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertForMultipleChoice"),b(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(mt,"id","transformers.SqueezeBertForTokenClassification"),b(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(mt,"href","#transformers.SqueezeBertForTokenClassification"),b(ye,"class","relative group"),b(Ls,"href","https://arxiv.org/abs/2006.11316"),b(Ls,"rel","nofollow"),b(So,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),b(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ds,"rel","nofollow"),b(Bo,"href","/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertForTokenClassification"),b(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(zt,"id","transformers.SqueezeBertForQuestionAnswering"),b(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(zt,"href","#transformers.SqueezeBertForQuestionAnswering"),b(Se,"class","relative group"),b(Qs,"href","https://arxiv.org/abs/2006.11316"),b(Qs,"rel","nofollow"),b(Eo,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),b(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Gs,"rel","nofollow"),b(jo,"href","/docs/transformers/v4.20.1/en/model_doc/squeezebert#transformers.SqueezeBertForQuestionAnswering"),b(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,n),k(o,f,_),k(o,p,_),e(p,c),e(c,g),q(t,g,null),e(p,u),e(p,j),e(j,wa),k(o,hr,_),k(o,ce,_),e(ce,Ce),e(Ce,Oo),q(jt,Oo,null),e(ce,ya),e(ce,Ro),e(Ro,Ta),k(o,mr,_),k(o,ne,_),e(ne,Sa),e(ne,Mt),e(Mt,Ba),e(ne,Ea),e(ne,Ft),e(Ft,ja),e(ne,Ma),k(o,fr,_),k(o,oo,_),e(oo,Fa),k(o,gr,_),k(o,no,_),e(no,Wo),e(Wo,xa),k(o,_r,_),k(o,ro,_),e(ro,Ca),k(o,br,_),k(o,re,_),e(re,Ko),e(Ko,Pa),e(re,Aa),e(re,Ho),e(Ho,La),e(re,Na),e(re,xt),e(xt,Ia),e(xt,Qo),e(Qo,Da),e(xt,Oa),k(o,kr,_),k(o,Pe,_),e(Pe,Ra),e(Pe,Ct),e(Ct,Wa),e(Pe,Ka),k(o,zr,_),k(o,pe,_),e(pe,Ae),e(Ae,Uo),q(Pt,Uo,null),e(pe,Ha),e(pe,Vo),e(Vo,Qa),k(o,$r,_),k(o,U,_),q(At,U,null),e(U,Ua),e(U,ue),e(ue,Va),e(ue,ao),e(ao,Ga),e(ue,Ja),e(ue,Lt),e(Lt,Xa),e(ue,Ya),e(U,Za),e(U,he),e(he,ei),e(he,io),e(io,ti),e(he,si),e(he,lo),e(lo,oi),e(he,ni),e(U,ri),q(Le,U,null),e(U,ai),e(U,Go),e(Go,ii),k(o,qr,_),k(o,me,_),e(me,Ne),e(Ne,Jo),q(Nt,Jo,null),e(me,li),e(me,Xo),e(Xo,di),k(o,vr,_),k(o,M,_),q(It,M,null),e(M,ci),e(M,Yo),e(Yo,pi),e(M,ui),e(M,Ie),e(Ie,co),e(co,hi),e(Ie,mi),e(Ie,po),e(po,fi),e(Ie,gi),e(M,_i),e(M,Zo),e(Zo,en),e(en,bi),e(M,ki),e(M,Dt),e(Dt,zi),e(Dt,uo),e(uo,$i),e(Dt,qi),e(M,vi),e(M,ae),q(Ot,ae,null),e(ae,wi),e(ae,tn),e(tn,yi),e(ae,Ti),e(ae,Rt),e(Rt,ho),e(ho,Si),e(ho,sn),e(sn,Bi),e(Rt,Ei),e(Rt,mo),e(mo,ji),e(mo,on),e(on,Mi),e(M,Fi),e(M,De),q(Wt,De,null),e(De,xi),e(De,Kt),e(Kt,Ci),e(Kt,nn),e(nn,Pi),e(Kt,Ai),e(M,Li),e(M,ee),q(Ht,ee,null),e(ee,Ni),e(ee,rn),e(rn,Ii),e(ee,Di),q(Oe,ee,null),e(ee,Oi),e(ee,fe),e(fe,Ri),e(fe,an),e(an,Wi),e(fe,Ki),e(fe,ln),e(ln,Hi),e(fe,Qi),e(M,Ui),e(M,fo),q(Qt,fo,null),k(o,wr,_),k(o,ge,_),e(ge,Re),e(Re,dn),q(Ut,dn,null),e(ge,Vi),e(ge,cn),e(cn,Gi),k(o,yr,_),k(o,Y,_),q(Vt,Y,null),e(Y,Ji),e(Y,Gt),e(Gt,Xi),e(Gt,pn),e(pn,Yi),e(Gt,Zi),e(Y,el),e(Y,We),e(We,go),e(go,tl),e(We,sl),e(We,_o),e(_o,ol),e(We,nl),e(Y,rl),e(Y,Jt),e(Jt,al),e(Jt,bo),e(bo,il),e(Jt,ll),k(o,Tr,_),k(o,_e,_),e(_e,Ke),e(Ke,un),q(Xt,un,null),e(_e,dl),e(_e,hn),e(hn,cl),k(o,Sr,_),k(o,F,_),q(Yt,F,null),e(F,pl),e(F,mn),e(mn,ul),e(F,hl),e(F,Zt),e(Zt,ml),e(Zt,es),e(es,fl),e(Zt,gl),e(F,_l),e(F,ts),e(ts,bl),e(ts,ko),e(ko,kl),e(ts,zl),e(F,$l),e(F,ss),e(ss,ql),e(ss,os),e(os,vl),e(ss,wl),e(F,yl),e(F,ns),e(ns,Tl),e(ns,fn),e(fn,Sl),e(ns,Bl),e(F,El),q(He,F,null),e(F,jl),q(Qe,F,null),e(F,Ml),e(F,te),q(rs,te,null),e(te,Fl),e(te,be),e(be,xl),e(be,zo),e(zo,Cl),e(be,Pl),e(be,gn),e(gn,Al),e(be,Ll),e(te,Nl),q(Ue,te,null),e(te,Il),q(Ve,te,null),k(o,Br,_),k(o,ke,_),e(ke,Ge),e(Ge,_n),q(as,_n,null),e(ke,Dl),e(ke,bn),e(bn,Ol),k(o,Er,_),k(o,x,_),q(is,x,null),e(x,Rl),e(x,ls),e(ls,Wl),e(ls,kn),e(kn,Kl),e(ls,Hl),e(x,Ql),e(x,ds),e(ds,Ul),e(ds,cs),e(cs,Vl),e(ds,Gl),e(x,Jl),e(x,ps),e(ps,Xl),e(ps,$o),e($o,Yl),e(ps,Zl),e(x,ed),e(x,us),e(us,td),e(us,hs),e(hs,sd),e(us,od),e(x,nd),e(x,ms),e(ms,rd),e(ms,zn),e(zn,ad),e(ms,id),e(x,ld),q(Je,x,null),e(x,dd),q(Xe,x,null),e(x,cd),e(x,V),q(fs,V,null),e(V,pd),e(V,ze),e(ze,ud),e(ze,qo),e(qo,hd),e(ze,md),e(ze,$n),e($n,fd),e(ze,gd),e(V,_d),q(Ye,V,null),e(V,bd),q(Ze,V,null),e(V,kd),q(et,V,null),k(o,jr,_),k(o,$e,_),e($e,tt),e(tt,qn),q(gs,qn,null),e($e,zd),e($e,vn),e(vn,$d),k(o,Mr,_),k(o,C,_),q(_s,C,null),e(C,qd),e(C,wn),e(wn,vd),e(C,wd),e(C,bs),e(bs,yd),e(bs,ks),e(ks,Td),e(bs,Sd),e(C,Bd),e(C,zs),e(zs,Ed),e(zs,vo),e(vo,jd),e(zs,Md),e(C,Fd),e(C,$s),e($s,xd),e($s,qs),e(qs,Cd),e($s,Pd),e(C,Ad),e(C,vs),e(vs,Ld),e(vs,yn),e(yn,Nd),e(vs,Id),e(C,Dd),q(st,C,null),e(C,Od),q(ot,C,null),e(C,Rd),e(C,I),q(ws,I,null),e(I,Wd),e(I,qe),e(qe,Kd),e(qe,wo),e(wo,Hd),e(qe,Qd),e(qe,Tn),e(Tn,Ud),e(qe,Vd),e(I,Gd),q(nt,I,null),e(I,Jd),q(rt,I,null),e(I,Xd),q(at,I,null),e(I,Yd),q(it,I,null),e(I,Zd),q(lt,I,null),k(o,Fr,_),k(o,ve,_),e(ve,dt),e(dt,Sn),q(ys,Sn,null),e(ve,ec),e(ve,Bn),e(Bn,tc),k(o,xr,_),k(o,P,_),q(Ts,P,null),e(P,sc),e(P,En),e(En,oc),e(P,nc),e(P,Ss),e(Ss,rc),e(Ss,Bs),e(Bs,ac),e(Ss,ic),e(P,lc),e(P,Es),e(Es,dc),e(Es,yo),e(yo,cc),e(Es,pc),e(P,uc),e(P,js),e(js,hc),e(js,Ms),e(Ms,mc),e(js,fc),e(P,gc),e(P,Fs),e(Fs,_c),e(Fs,jn),e(jn,bc),e(Fs,kc),e(P,zc),q(ct,P,null),e(P,$c),q(pt,P,null),e(P,qc),e(P,se),q(xs,se,null),e(se,vc),e(se,we),e(we,wc),e(we,To),e(To,yc),e(we,Tc),e(we,Mn),e(Mn,Sc),e(we,Bc),e(se,Ec),q(ut,se,null),e(se,jc),q(ht,se,null),k(o,Cr,_),k(o,ye,_),e(ye,mt),e(mt,Fn),q(Cs,Fn,null),e(ye,Mc),e(ye,xn),e(xn,Fc),k(o,Pr,_),k(o,A,_),q(Ps,A,null),e(A,xc),e(A,Cn),e(Cn,Cc),e(A,Pc),e(A,As),e(As,Ac),e(As,Ls),e(Ls,Lc),e(As,Nc),e(A,Ic),e(A,Ns),e(Ns,Dc),e(Ns,So),e(So,Oc),e(Ns,Rc),e(A,Wc),e(A,Is),e(Is,Kc),e(Is,Ds),e(Ds,Hc),e(Is,Qc),e(A,Uc),e(A,Os),e(Os,Vc),e(Os,Pn),e(Pn,Gc),e(Os,Jc),e(A,Xc),q(ft,A,null),e(A,Yc),q(gt,A,null),e(A,Zc),e(A,G),q(Rs,G,null),e(G,ep),e(G,Te),e(Te,tp),e(Te,Bo),e(Bo,sp),e(Te,op),e(Te,An),e(An,np),e(Te,rp),e(G,ap),q(_t,G,null),e(G,ip),q(bt,G,null),e(G,lp),q(kt,G,null),k(o,Ar,_),k(o,Se,_),e(Se,zt),e(zt,Ln),q(Ws,Ln,null),e(Se,dp),e(Se,Nn),e(Nn,cp),k(o,Lr,_),k(o,L,_),q(Ks,L,null),e(L,pp),e(L,Be),e(Be,up),e(Be,In),e(In,hp),e(Be,mp),e(Be,Dn),e(Dn,fp),e(Be,gp),e(L,_p),e(L,Hs),e(Hs,bp),e(Hs,Qs),e(Qs,kp),e(Hs,zp),e(L,$p),e(L,Us),e(Us,qp),e(Us,Eo),e(Eo,vp),e(Us,wp),e(L,yp),e(L,Vs),e(Vs,Tp),e(Vs,Gs),e(Gs,Sp),e(Vs,Bp),e(L,Ep),e(L,Js),e(Js,jp),e(Js,On),e(On,Mp),e(Js,Fp),e(L,xp),q($t,L,null),e(L,Cp),q(qt,L,null),e(L,Pp),e(L,J),q(Xs,J,null),e(J,Ap),e(J,Ee),e(Ee,Lp),e(Ee,jo),e(jo,Np),e(Ee,Ip),e(Ee,Rn),e(Rn,Dp),e(Ee,Op),e(J,Rp),q(vt,J,null),e(J,Wp),q(wt,J,null),e(J,Kp),q(yt,J,null),Nr=!0},p(o,[_]){const Ys={};_&2&&(Ys.$$scope={dirty:_,ctx:o}),Le.$set(Ys);const Wn={};_&2&&(Wn.$$scope={dirty:_,ctx:o}),Oe.$set(Wn);const Kn={};_&2&&(Kn.$$scope={dirty:_,ctx:o}),He.$set(Kn);const Hn={};_&2&&(Hn.$$scope={dirty:_,ctx:o}),Qe.$set(Hn);const Zs={};_&2&&(Zs.$$scope={dirty:_,ctx:o}),Ue.$set(Zs);const Qn={};_&2&&(Qn.$$scope={dirty:_,ctx:o}),Ve.$set(Qn);const Un={};_&2&&(Un.$$scope={dirty:_,ctx:o}),Je.$set(Un);const Vn={};_&2&&(Vn.$$scope={dirty:_,ctx:o}),Xe.$set(Vn);const je={};_&2&&(je.$$scope={dirty:_,ctx:o}),Ye.$set(je);const Gn={};_&2&&(Gn.$$scope={dirty:_,ctx:o}),Ze.$set(Gn);const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:o}),et.$set(Jn);const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:o}),st.$set(Xn);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:o}),ot.$set(Yn);const Zn={};_&2&&(Zn.$$scope={dirty:_,ctx:o}),nt.$set(Zn);const er={};_&2&&(er.$$scope={dirty:_,ctx:o}),rt.$set(er);const Me={};_&2&&(Me.$$scope={dirty:_,ctx:o}),at.$set(Me);const tr={};_&2&&(tr.$$scope={dirty:_,ctx:o}),it.$set(tr);const sr={};_&2&&(sr.$$scope={dirty:_,ctx:o}),lt.$set(sr);const eo={};_&2&&(eo.$$scope={dirty:_,ctx:o}),ct.$set(eo);const or={};_&2&&(or.$$scope={dirty:_,ctx:o}),pt.$set(or);const to={};_&2&&(to.$$scope={dirty:_,ctx:o}),ut.$set(to);const nr={};_&2&&(nr.$$scope={dirty:_,ctx:o}),ht.$set(nr);const so={};_&2&&(so.$$scope={dirty:_,ctx:o}),ft.$set(so);const rr={};_&2&&(rr.$$scope={dirty:_,ctx:o}),gt.$set(rr);const ar={};_&2&&(ar.$$scope={dirty:_,ctx:o}),_t.$set(ar);const ir={};_&2&&(ir.$$scope={dirty:_,ctx:o}),bt.$set(ir);const Z={};_&2&&(Z.$$scope={dirty:_,ctx:o}),kt.$set(Z);const Fe={};_&2&&(Fe.$$scope={dirty:_,ctx:o}),$t.$set(Fe);const lr={};_&2&&(lr.$$scope={dirty:_,ctx:o}),qt.$set(lr);const dr={};_&2&&(dr.$$scope={dirty:_,ctx:o}),vt.$set(dr);const xe={};_&2&&(xe.$$scope={dirty:_,ctx:o}),wt.$set(xe);const cr={};_&2&&(cr.$$scope={dirty:_,ctx:o}),yt.$set(cr)},i(o){Nr||(v(t.$$.fragment,o),v(jt.$$.fragment,o),v(Pt.$$.fragment,o),v(At.$$.fragment,o),v(Le.$$.fragment,o),v(Nt.$$.fragment,o),v(It.$$.fragment,o),v(Ot.$$.fragment,o),v(Wt.$$.fragment,o),v(Ht.$$.fragment,o),v(Oe.$$.fragment,o),v(Qt.$$.fragment,o),v(Ut.$$.fragment,o),v(Vt.$$.fragment,o),v(Xt.$$.fragment,o),v(Yt.$$.fragment,o),v(He.$$.fragment,o),v(Qe.$$.fragment,o),v(rs.$$.fragment,o),v(Ue.$$.fragment,o),v(Ve.$$.fragment,o),v(as.$$.fragment,o),v(is.$$.fragment,o),v(Je.$$.fragment,o),v(Xe.$$.fragment,o),v(fs.$$.fragment,o),v(Ye.$$.fragment,o),v(Ze.$$.fragment,o),v(et.$$.fragment,o),v(gs.$$.fragment,o),v(_s.$$.fragment,o),v(st.$$.fragment,o),v(ot.$$.fragment,o),v(ws.$$.fragment,o),v(nt.$$.fragment,o),v(rt.$$.fragment,o),v(at.$$.fragment,o),v(it.$$.fragment,o),v(lt.$$.fragment,o),v(ys.$$.fragment,o),v(Ts.$$.fragment,o),v(ct.$$.fragment,o),v(pt.$$.fragment,o),v(xs.$$.fragment,o),v(ut.$$.fragment,o),v(ht.$$.fragment,o),v(Cs.$$.fragment,o),v(Ps.$$.fragment,o),v(ft.$$.fragment,o),v(gt.$$.fragment,o),v(Rs.$$.fragment,o),v(_t.$$.fragment,o),v(bt.$$.fragment,o),v(kt.$$.fragment,o),v(Ws.$$.fragment,o),v(Ks.$$.fragment,o),v($t.$$.fragment,o),v(qt.$$.fragment,o),v(Xs.$$.fragment,o),v(vt.$$.fragment,o),v(wt.$$.fragment,o),v(yt.$$.fragment,o),Nr=!0)},o(o){w(t.$$.fragment,o),w(jt.$$.fragment,o),w(Pt.$$.fragment,o),w(At.$$.fragment,o),w(Le.$$.fragment,o),w(Nt.$$.fragment,o),w(It.$$.fragment,o),w(Ot.$$.fragment,o),w(Wt.$$.fragment,o),w(Ht.$$.fragment,o),w(Oe.$$.fragment,o),w(Qt.$$.fragment,o),w(Ut.$$.fragment,o),w(Vt.$$.fragment,o),w(Xt.$$.fragment,o),w(Yt.$$.fragment,o),w(He.$$.fragment,o),w(Qe.$$.fragment,o),w(rs.$$.fragment,o),w(Ue.$$.fragment,o),w(Ve.$$.fragment,o),w(as.$$.fragment,o),w(is.$$.fragment,o),w(Je.$$.fragment,o),w(Xe.$$.fragment,o),w(fs.$$.fragment,o),w(Ye.$$.fragment,o),w(Ze.$$.fragment,o),w(et.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w(st.$$.fragment,o),w(ot.$$.fragment,o),w(ws.$$.fragment,o),w(nt.$$.fragment,o),w(rt.$$.fragment,o),w(at.$$.fragment,o),w(it.$$.fragment,o),w(lt.$$.fragment,o),w(ys.$$.fragment,o),w(Ts.$$.fragment,o),w(ct.$$.fragment,o),w(pt.$$.fragment,o),w(xs.$$.fragment,o),w(ut.$$.fragment,o),w(ht.$$.fragment,o),w(Cs.$$.fragment,o),w(Ps.$$.fragment,o),w(ft.$$.fragment,o),w(gt.$$.fragment,o),w(Rs.$$.fragment,o),w(_t.$$.fragment,o),w(bt.$$.fragment,o),w(kt.$$.fragment,o),w(Ws.$$.fragment,o),w(Ks.$$.fragment,o),w($t.$$.fragment,o),w(qt.$$.fragment,o),w(Xs.$$.fragment,o),w(vt.$$.fragment,o),w(wt.$$.fragment,o),w(yt.$$.fragment,o),Nr=!1},d(o){s(n),o&&s(f),o&&s(p),y(t),o&&s(hr),o&&s(ce),y(jt),o&&s(mr),o&&s(ne),o&&s(fr),o&&s(oo),o&&s(gr),o&&s(no),o&&s(_r),o&&s(ro),o&&s(br),o&&s(re),o&&s(kr),o&&s(Pe),o&&s(zr),o&&s(pe),y(Pt),o&&s($r),o&&s(U),y(At),y(Le),o&&s(qr),o&&s(me),y(Nt),o&&s(vr),o&&s(M),y(It),y(Ot),y(Wt),y(Ht),y(Oe),y(Qt),o&&s(wr),o&&s(ge),y(Ut),o&&s(yr),o&&s(Y),y(Vt),o&&s(Tr),o&&s(_e),y(Xt),o&&s(Sr),o&&s(F),y(Yt),y(He),y(Qe),y(rs),y(Ue),y(Ve),o&&s(Br),o&&s(ke),y(as),o&&s(Er),o&&s(x),y(is),y(Je),y(Xe),y(fs),y(Ye),y(Ze),y(et),o&&s(jr),o&&s($e),y(gs),o&&s(Mr),o&&s(C),y(_s),y(st),y(ot),y(ws),y(nt),y(rt),y(at),y(it),y(lt),o&&s(Fr),o&&s(ve),y(ys),o&&s(xr),o&&s(P),y(Ts),y(ct),y(pt),y(xs),y(ut),y(ht),o&&s(Cr),o&&s(ye),y(Cs),o&&s(Pr),o&&s(A),y(Ps),y(ft),y(gt),y(Rs),y(_t),y(bt),y(kt),o&&s(Ar),o&&s(Se),y(Ws),o&&s(Lr),o&&s(L),y(Ks),y($t),y(qt),y(Xs),y(vt),y(wt),y(yt)}}}const cm={local:"squeezebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.SqueezeBertConfig",title:"SqueezeBertConfig"},{local:"transformers.SqueezeBertTokenizer",title:"SqueezeBertTokenizer"},{local:"transformers.SqueezeBertTokenizerFast",title:"SqueezeBertTokenizerFast"},{local:"transformers.SqueezeBertModel",title:"SqueezeBertModel"},{local:"transformers.SqueezeBertForMaskedLM",title:"SqueezeBertForMaskedLM"},{local:"transformers.SqueezeBertForSequenceClassification",title:"SqueezeBertForSequenceClassification"},{local:"transformers.SqueezeBertForMultipleChoice",title:"SqueezeBertForMultipleChoice"},{local:"transformers.SqueezeBertForTokenClassification",title:"SqueezeBertForTokenClassification"},{local:"transformers.SqueezeBertForQuestionAnswering",title:"SqueezeBertForQuestionAnswering"}],title:"SqueezeBERT"};function pm(T){return jh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bm extends Th{constructor(n){super();Sh(this,n,pm,dm,Bh,{})}}export{bm as default,cm as metadata};
