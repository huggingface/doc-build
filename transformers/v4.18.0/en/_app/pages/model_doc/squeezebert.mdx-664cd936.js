import{S as qh,i as vh,s as wh,e as i,k as h,w as z,t as r,M as yh,c as l,d as s,m,a as d,x as $,h as a,b,F as e,g as k,y as q,q as v,o as w,B as y,v as Th,L as B}from"../../chunks/vendor-6b77c823.js";import{T as In}from"../../chunks/Tip-39098574.js";import{D as N}from"../../chunks/Docstring-1088f2fb.js";import{C as E}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ne}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as S}from"../../chunks/ExampleCodeBlock-5212b321.js";function Sh(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertModel, SqueezeBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){o=i("p"),f=r("Examples:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Examples:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Bh(T){let o,f,p,c,g;return c=new E({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){o=i("p"),f=r("pair mask has the following format:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"pair mask has the following format:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Eh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function jh(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Mh(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function Fh(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){o=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function xh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Ch(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Ph(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function Ah(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForMaskedLM
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
`}}),{c(){o=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Lh(T){let o,f;return o=new E({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){z(o.$$.fragment)},l(p){$(o.$$.fragment,p)},m(p,c){q(o,p,c),f=!0},p:B,i(p){f||(v(o.$$.fragment,p),f=!0)},o(p){w(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function Nh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Ih(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Dh(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function Oh(T){let o,f,p,c,g;return c=new E({props:{code:`import torch
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
`}}),{c(){o=i("p"),f=r("Example of single-label classification:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example of single-label classification:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Rh(T){let o,f;return o=new E({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){z(o.$$.fragment)},l(p){$(o.$$.fragment,p)},m(p,c){q(o,p,c),f=!0},p:B,i(p){f||(v(o.$$.fragment,p),f=!0)},o(p){w(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function Wh(T){let o,f,p,c,g;return c=new E({props:{code:`import torch
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
`}}),{c(){o=i("p"),f=r("Example of multi-label classification:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example of multi-label classification:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Kh(T){let o,f;return o=new E({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = SqueezeBertForSequenceClassification.from_pretrained("squeezebert/squeezebert-uncased", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){z(o.$$.fragment)},l(p){$(o.$$.fragment,p)},m(p,c){q(o,p,c),f=!0},p:B,i(p){f||(v(o.$$.fragment,p),f=!0)},o(p){w(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function Hh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Qh(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Vh(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function Uh(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){o=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Gh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Jh(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Xh(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function Yh(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForTokenClassification
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
`}}),{c(){o=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Zh(T){let o,f;return o=new E({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){z(o.$$.fragment)},l(p){$(o.$$.fragment,p)},m(p,c){q(o,p,c),f=!0},p:B,i(p){f||(v(o.$$.fragment,p),f=!0)},o(p){w(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function em(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function tm(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function sm(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){k(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function nm(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForQuestionAnswering
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
`}}),{c(){o=i("p"),f=r("Example:"),p=h(),z(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),$(c.$$.fragment,t)},m(t,u){k(t,o,u),e(o,f),k(t,p,u),q(c,t,u),g=!0},p:B,i(t){g||(v(c.$$.fragment,t),g=!0)},o(t){w(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function om(T){let o,f;return o=new E({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){z(o.$$.fragment)},l(p){$(o.$$.fragment,p)},m(p,c){q(o,p,c),f=!0},p:B,i(p){f||(v(o.$$.fragment,p),f=!0)},o(p){w(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function rm(T){let o,f,p,c,g,t,u,j,va,ur,ce,Fe,Dn,Bt,wa,On,ya,hr,oe,Ta,Et,Sa,Ba,jt,Ea,ja,mr,sn,Ma,fr,nn,Rn,Fa,gr,on,xa,_r,re,Wn,Ca,Pa,Kn,Aa,La,Mt,Na,Hn,Ia,Da,br,xe,Oa,Ft,Ra,Wa,kr,pe,Ce,Qn,xt,Ka,Vn,Ha,zr,V,Ct,Qa,Pt,Va,rn,Ua,Ga,Ja,ue,Xa,an,Ya,Za,ln,ei,ti,si,Pe,ni,Un,oi,$r,he,Ae,Gn,At,ri,Jn,ai,qr,M,Lt,ii,Xn,li,di,Le,dn,ci,pi,cn,ui,hi,mi,Yn,Zn,fi,gi,Nt,_i,pn,bi,ki,zi,ae,It,$i,eo,qi,vi,Dt,un,wi,to,yi,Ti,hn,Si,so,Bi,Ei,Ne,Ot,ji,Rt,Mi,no,Fi,xi,Ci,ee,Wt,Pi,oo,Ai,Li,Ie,Ni,me,Ii,ro,Di,Oi,ao,Ri,Wi,Ki,mn,Kt,vr,fe,De,io,Ht,Hi,lo,Qi,wr,Y,Qt,Vi,Vt,Ui,co,Gi,Ji,Xi,Oe,fn,Yi,Zi,gn,el,tl,sl,Ut,nl,_n,ol,rl,yr,ge,Re,po,Gt,al,uo,il,Tr,F,Jt,ll,ho,dl,cl,Xt,pl,Yt,ul,hl,ml,Zt,fl,bn,gl,_l,bl,es,kl,ts,zl,$l,ql,ss,vl,mo,wl,yl,Tl,We,Sl,Ke,Bl,te,ns,El,_e,jl,kn,Ml,Fl,fo,xl,Cl,Pl,He,Al,Qe,Sr,be,Ve,go,os,Ll,_o,Nl,Br,x,rs,Il,as,Dl,bo,Ol,Rl,Wl,is,Kl,ls,Hl,Ql,Vl,ds,Ul,zn,Gl,Jl,Xl,cs,Yl,ps,Zl,ed,td,us,sd,ko,nd,od,rd,Ue,ad,Ge,id,U,hs,ld,ke,dd,$n,cd,pd,zo,ud,hd,md,Je,fd,Xe,gd,Ye,Er,ze,Ze,$o,ms,_d,qo,bd,jr,C,fs,kd,vo,zd,$d,gs,qd,_s,vd,wd,yd,bs,Td,qn,Sd,Bd,Ed,ks,jd,zs,Md,Fd,xd,$s,Cd,wo,Pd,Ad,Ld,et,Nd,tt,Id,I,qs,Dd,$e,Od,vn,Rd,Wd,yo,Kd,Hd,Qd,st,Vd,nt,Ud,ot,Gd,rt,Jd,at,Mr,qe,it,To,vs,Xd,So,Yd,Fr,P,ws,Zd,Bo,ec,tc,ys,sc,Ts,nc,oc,rc,Ss,ac,wn,ic,lc,dc,Bs,cc,Es,pc,uc,hc,js,mc,Eo,fc,gc,_c,lt,bc,dt,kc,se,Ms,zc,ve,$c,yn,qc,vc,jo,wc,yc,Tc,ct,Sc,pt,xr,we,ut,Mo,Fs,Bc,Fo,Ec,Cr,A,xs,jc,xo,Mc,Fc,Cs,xc,Ps,Cc,Pc,Ac,As,Lc,Tn,Nc,Ic,Dc,Ls,Oc,Ns,Rc,Wc,Kc,Is,Hc,Co,Qc,Vc,Uc,ht,Gc,mt,Jc,G,Ds,Xc,ye,Yc,Sn,Zc,ep,Po,tp,sp,np,ft,op,gt,rp,_t,Pr,Te,bt,Ao,Os,ap,Lo,ip,Ar,L,Rs,lp,Se,dp,No,cp,pp,Io,up,hp,mp,Ws,fp,Ks,gp,_p,bp,Hs,kp,Bn,zp,$p,qp,Qs,vp,Vs,wp,yp,Tp,Us,Sp,Do,Bp,Ep,jp,kt,Mp,zt,Fp,J,Gs,xp,Be,Cp,En,Pp,Ap,Oo,Lp,Np,Ip,$t,Dp,qt,Op,vt,Lr;return t=new ne({}),Bt=new ne({}),xt=new ne({}),Ct=new N({props:{name:"class transformers.SqueezeBertConfig",anchor:"transformers.SqueezeBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 768"},{name:"q_groups",val:" = 4"},{name:"k_groups",val:" = 4"},{name:"v_groups",val:" = 4"},{name:"post_attention_groups",val:" = 1"},{name:"intermediate_groups",val:" = 4"},{name:"output_groups",val:" = 4"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the SqueezeBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertModel">SqueezeBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.SqueezeBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.SqueezeBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SqueezeBertConfig.layer_norm_eps",description:"<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;",name:"layer_norm_eps"},{anchor:"transformers.SqueezeBertConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The ID of the token in the word embedding to use as padding.`,name:"pad_token_id"},{anchor:"transformers.SqueezeBertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
The dimension of the word embedding vectors.`,name:"embedding_size"},{anchor:"transformers.SqueezeBertConfig.q_groups",description:`<strong>q_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in Q layer.`,name:"q_groups"},{anchor:"transformers.SqueezeBertConfig.k_groups",description:`<strong>k_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in K layer.`,name:"k_groups"},{anchor:"transformers.SqueezeBertConfig.v_groups",description:`<strong>v_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in V layer.`,name:"v_groups"},{anchor:"transformers.SqueezeBertConfig.post_attention_groups",description:`<strong>post_attention_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of groups in the first feed forward network layer.`,name:"post_attention_groups"},{anchor:"transformers.SqueezeBertConfig.intermediate_groups",description:`<strong>intermediate_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in the second feed forward network layer.`,name:"intermediate_groups"},{anchor:"transformers.SqueezeBertConfig.output_groups",description:`<strong>output_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in the third feed forward network layer.`,name:"output_groups"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/configuration_squeezebert.py#L30"}}),Pe=new S({props:{anchor:"transformers.SqueezeBertConfig.example",$$slots:{default:[Sh]},$$scope:{ctx:T}}}),At=new ne({}),Lt=new N({props:{name:"class transformers.SqueezeBertTokenizer",anchor:"transformers.SqueezeBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/tokenization_squeezebert.py#L47"}}),It=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ot=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wt=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ie=new S({props:{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Bh]},$$scope:{ctx:T}}}),Kt=new N({props:{name:"save_vocabulary",anchor:"transformers.SqueezeBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/bert/tokenization_bert.py#L330"}}),Ht=new ne({}),Qt=new N({props:{name:"class transformers.SqueezeBertTokenizerFast",anchor:"transformers.SqueezeBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/tokenization_squeezebert_fast.py#L53"}}),Gt=new ne({}),Jt=new N({props:{name:"class transformers.SqueezeBertModel",anchor:"transformers.SqueezeBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L549"}}),We=new S({props:{anchor:"transformers.SqueezeBertModel.example",$$slots:{default:[Eh]},$$scope:{ctx:T}}}),Ke=new S({props:{anchor:"transformers.SqueezeBertModel.example-2",$$slots:{default:[jh]},$$scope:{ctx:T}}}),ns=new N({props:{name:"forward",anchor:"transformers.SqueezeBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L574",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new In({props:{$$slots:{default:[Mh]},$$scope:{ctx:T}}}),Qe=new S({props:{anchor:"transformers.SqueezeBertModel.forward.example",$$slots:{default:[Fh]},$$scope:{ctx:T}}}),os=new ne({}),rs=new N({props:{name:"class transformers.SqueezeBertForMaskedLM",anchor:"transformers.SqueezeBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L649"}}),Ue=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.example",$$slots:{default:[xh]},$$scope:{ctx:T}}}),Ge=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.example-2",$$slots:{default:[Ch]},$$scope:{ctx:T}}}),hs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L668",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new In({props:{$$slots:{default:[Ph]},$$scope:{ctx:T}}}),Xe=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.forward.example",$$slots:{default:[Ah]},$$scope:{ctx:T}}}),Ye=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.forward.example-2",$$slots:{default:[Lh]},$$scope:{ctx:T}}}),ms=new ne({}),fs=new N({props:{name:"class transformers.SqueezeBertForSequenceClassification",anchor:"transformers.SqueezeBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L735"}}),et=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.example",$$slots:{default:[Nh]},$$scope:{ctx:T}}}),tt=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.example-2",$$slots:{default:[Ih]},$$scope:{ctx:T}}}),qs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L748",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),st=new In({props:{$$slots:{default:[Dh]},$$scope:{ctx:T}}}),nt=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example",$$slots:{default:[Oh]},$$scope:{ctx:T}}}),ot=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-2",$$slots:{default:[Rh]},$$scope:{ctx:T}}}),rt=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-3",$$slots:{default:[Wh]},$$scope:{ctx:T}}}),at=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-4",$$slots:{default:[Kh]},$$scope:{ctx:T}}}),vs=new ne({}),ws=new N({props:{name:"class transformers.SqueezeBertForMultipleChoice",anchor:"transformers.SqueezeBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L835"}}),lt=new S({props:{anchor:"transformers.SqueezeBertForMultipleChoice.example",$$slots:{default:[Hh]},$$scope:{ctx:T}}}),dt=new S({props:{anchor:"transformers.SqueezeBertForMultipleChoice.example-2",$$slots:{default:[Qh]},$$scope:{ctx:T}}}),Ms=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L846",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ct=new In({props:{$$slots:{default:[Vh]},$$scope:{ctx:T}}}),pt=new S({props:{anchor:"transformers.SqueezeBertForMultipleChoice.forward.example",$$slots:{default:[Uh]},$$scope:{ctx:T}}}),Fs=new ne({}),xs=new N({props:{name:"class transformers.SqueezeBertForTokenClassification",anchor:"transformers.SqueezeBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L929"}}),ht=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.example",$$slots:{default:[Gh]},$$scope:{ctx:T}}}),mt=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.example-2",$$slots:{default:[Jh]},$$scope:{ctx:T}}}),Ds=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L941",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ft=new In({props:{$$slots:{default:[Xh]},$$scope:{ctx:T}}}),gt=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.forward.example",$$slots:{default:[Yh]},$$scope:{ctx:T}}}),_t=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.forward.example-2",$$slots:{default:[Zh]},$$scope:{ctx:T}}}),Os=new ne({}),Rs=new N({props:{name:"class transformers.SqueezeBertForQuestionAnswering",anchor:"transformers.SqueezeBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L1008"}}),kt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.example",$$slots:{default:[em]},$$scope:{ctx:T}}}),zt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.example-2",$$slots:{default:[tm]},$$scope:{ctx:T}}}),Gs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/squeezebert/modeling_squeezebert.py#L1019",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$t=new In({props:{$$slots:{default:[sm]},$$scope:{ctx:T}}}),qt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.example",$$slots:{default:[nm]},$$scope:{ctx:T}}}),vt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.example-2",$$slots:{default:[om]},$$scope:{ctx:T}}}),{c(){o=i("meta"),f=h(),p=i("h1"),c=i("a"),g=i("span"),z(t.$$.fragment),u=h(),j=i("span"),va=r("SqueezeBERT"),ur=h(),ce=i("h2"),Fe=i("a"),Dn=i("span"),z(Bt.$$.fragment),wa=h(),On=i("span"),ya=r("Overview"),hr=h(),oe=i("p"),Ta=r("The SqueezeBERT model was proposed in "),Et=i("a"),Sa=r("SqueezeBERT: What can computer vision teach NLP about efficient neural networks?"),Ba=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, Kurt W. Keutzer. It\u2019s a
bidirectional transformer similar to the BERT model. The key difference between the BERT architecture and the
SqueezeBERT architecture is that SqueezeBERT uses `),jt=i("a"),Ea=r("grouped convolutions"),ja=r(`
instead of fully-connected layers for the Q, K, V and FFN layers.`),mr=h(),sn=i("p"),Ma=r("The abstract from the paper is the following:"),fr=h(),nn=i("p"),Rn=i("em"),Fa=r(`Humans read and write hundreds of billions of messages every day. Further, due to the availability of large datasets,
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
set. The SqueezeBERT code will be released.`),gr=h(),on=i("p"),xa=r("Tips:"),_r=h(),re=i("ul"),Wn=i("li"),Ca=r(`SqueezeBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right
rather than the left.`),Pa=h(),Kn=i("li"),Aa=r(`SqueezeBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),La=h(),Mt=i("li"),Na=r(`For best results when finetuning on sequence classification tasks, it is recommended to start with the
`),Hn=i("em"),Ia=r("squeezebert/squeezebert-mnli-headless"),Da=r(" checkpoint."),br=h(),xe=i("p"),Oa=r("This model was contributed by "),Ft=i("a"),Ra=r("forresti"),Wa=r("."),kr=h(),pe=i("h2"),Ce=i("a"),Qn=i("span"),z(xt.$$.fragment),Ka=h(),Vn=i("span"),Ha=r("SqueezeBertConfig"),zr=h(),V=i("div"),z(Ct.$$.fragment),Qa=h(),Pt=i("p"),Va=r("This is the configuration class to store the configuration of a "),rn=i("a"),Ua=r("SqueezeBertModel"),Ga=r(`. It is used to instantiate a
SqueezeBERT model according to the specified arguments, defining the model architecture.`),Ja=h(),ue=i("p"),Xa=r("Configuration objects inherit from "),an=i("a"),Ya=r("PretrainedConfig"),Za=r(` and can be used to control the model outputs. Read the
documentation from `),ln=i("a"),ei=r("PretrainedConfig"),ti=r(" for more information."),si=h(),z(Pe.$$.fragment),ni=h(),Un=i("p"),oi=r(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),$r=h(),he=i("h2"),Ae=i("a"),Gn=i("span"),z(At.$$.fragment),ri=h(),Jn=i("span"),ai=r("SqueezeBertTokenizer"),qr=h(),M=i("div"),z(Lt.$$.fragment),ii=h(),Xn=i("p"),li=r("Constructs a SqueezeBert tokenizer."),di=h(),Le=i("p"),dn=i("a"),ci=r("SqueezeBertTokenizer"),pi=r(" is identical to "),cn=i("a"),ui=r("BertTokenizer"),hi=r(" and runs end-to-end tokenization: punctuation splitting"),mi=h(),Yn=i("ul"),Zn=i("li"),fi=r("wordpiece."),gi=h(),Nt=i("p"),_i=r("Refer to superclass "),pn=i("a"),bi=r("BertTokenizer"),ki=r(" for usage examples and documentation concerning parameters."),zi=h(),ae=i("div"),z(It.$$.fragment),$i=h(),eo=i("p"),qi=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),vi=h(),Dt=i("ul"),un=i("li"),wi=r("single sequence: "),to=i("code"),yi=r("[CLS] X [SEP]"),Ti=h(),hn=i("li"),Si=r("pair of sequences: "),so=i("code"),Bi=r("[CLS] A [SEP] B [SEP]"),Ei=h(),Ne=i("div"),z(Ot.$$.fragment),ji=h(),Rt=i("p"),Mi=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),no=i("code"),Fi=r("prepare_for_model"),xi=r(" method."),Ci=h(),ee=i("div"),z(Wt.$$.fragment),Pi=h(),oo=i("p"),Ai=r("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Li=h(),z(Ie.$$.fragment),Ni=h(),me=i("p"),Ii=r("If "),ro=i("code"),Di=r("token_ids_1"),Oi=r(" is "),ao=i("code"),Ri=r("None"),Wi=r(", this method only returns the first portion of the mask (0s)."),Ki=h(),mn=i("div"),z(Kt.$$.fragment),vr=h(),fe=i("h2"),De=i("a"),io=i("span"),z(Ht.$$.fragment),Hi=h(),lo=i("span"),Qi=r("SqueezeBertTokenizerFast"),wr=h(),Y=i("div"),z(Qt.$$.fragment),Vi=h(),Vt=i("p"),Ui=r("Constructs a \u201CFast\u201D SqueezeBert tokenizer (backed by HuggingFace\u2019s "),co=i("em"),Gi=r("tokenizers"),Ji=r(" library)."),Xi=h(),Oe=i("p"),fn=i("a"),Yi=r("SqueezeBertTokenizerFast"),Zi=r(" is identical to "),gn=i("a"),el=r("BertTokenizerFast"),tl=r(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),sl=h(),Ut=i("p"),nl=r("Refer to superclass "),_n=i("a"),ol=r("BertTokenizerFast"),rl=r(" for usage examples and documentation concerning parameters."),yr=h(),ge=i("h2"),Re=i("a"),po=i("span"),z(Gt.$$.fragment),al=h(),uo=i("span"),il=r("SqueezeBertModel"),Tr=h(),F=i("div"),z(Jt.$$.fragment),ll=h(),ho=i("p"),dl=r("The bare SqueezeBERT Model transformer outputting raw hidden-states without any specific head on top."),cl=h(),Xt=i("p"),pl=r("The SqueezeBERT model was proposed in "),Yt=i("a"),ul=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),hl=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ml=h(),Zt=i("p"),fl=r("This model inherits from "),bn=i("a"),gl=r("PreTrainedModel"),_l=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl=h(),es=i("p"),kl=r("This model is also a PyTorch "),ts=i("a"),zl=r("torch.nn.Module"),$l=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ql=h(),ss=i("p"),vl=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),mo=i("em"),wl=r("squeezebert/squeezebert-mnli-headless"),yl=r(" checkpoint as a starting point."),Tl=h(),z(We.$$.fragment),Sl=h(),z(Ke.$$.fragment),Bl=h(),te=i("div"),z(ns.$$.fragment),El=h(),_e=i("p"),jl=r("The "),kn=i("a"),Ml=r("SqueezeBertModel"),Fl=r(" forward method, overrides the "),fo=i("code"),xl=r("__call__"),Cl=r(" special method."),Pl=h(),z(He.$$.fragment),Al=h(),z(Qe.$$.fragment),Sr=h(),be=i("h2"),Ve=i("a"),go=i("span"),z(os.$$.fragment),Ll=h(),_o=i("span"),Nl=r("SqueezeBertForMaskedLM"),Br=h(),x=i("div"),z(rs.$$.fragment),Il=h(),as=i("p"),Dl=r("SqueezeBERT Model with a "),bo=i("code"),Ol=r("language modeling"),Rl=r(" head on top."),Wl=h(),is=i("p"),Kl=r("The SqueezeBERT model was proposed in "),ls=i("a"),Hl=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Ql=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Vl=h(),ds=i("p"),Ul=r("This model inherits from "),zn=i("a"),Gl=r("PreTrainedModel"),Jl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl=h(),cs=i("p"),Yl=r("This model is also a PyTorch "),ps=i("a"),Zl=r("torch.nn.Module"),ed=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),td=h(),us=i("p"),sd=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),ko=i("em"),nd=r("squeezebert/squeezebert-mnli-headless"),od=r(" checkpoint as a starting point."),rd=h(),z(Ue.$$.fragment),ad=h(),z(Ge.$$.fragment),id=h(),U=i("div"),z(hs.$$.fragment),ld=h(),ke=i("p"),dd=r("The "),$n=i("a"),cd=r("SqueezeBertForMaskedLM"),pd=r(" forward method, overrides the "),zo=i("code"),ud=r("__call__"),hd=r(" special method."),md=h(),z(Je.$$.fragment),fd=h(),z(Xe.$$.fragment),gd=h(),z(Ye.$$.fragment),Er=h(),ze=i("h2"),Ze=i("a"),$o=i("span"),z(ms.$$.fragment),_d=h(),qo=i("span"),bd=r("SqueezeBertForSequenceClassification"),jr=h(),C=i("div"),z(fs.$$.fragment),kd=h(),vo=i("p"),zd=r(`SqueezeBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$d=h(),gs=i("p"),qd=r("The SqueezeBERT model was proposed in "),_s=i("a"),vd=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),wd=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),yd=h(),bs=i("p"),Td=r("This model inherits from "),qn=i("a"),Sd=r("PreTrainedModel"),Bd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed=h(),ks=i("p"),jd=r("This model is also a PyTorch "),zs=i("a"),Md=r("torch.nn.Module"),Fd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=h(),$s=i("p"),Cd=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),wo=i("em"),Pd=r("squeezebert/squeezebert-mnli-headless"),Ad=r(" checkpoint as a starting point."),Ld=h(),z(et.$$.fragment),Nd=h(),z(tt.$$.fragment),Id=h(),I=i("div"),z(qs.$$.fragment),Dd=h(),$e=i("p"),Od=r("The "),vn=i("a"),Rd=r("SqueezeBertForSequenceClassification"),Wd=r(" forward method, overrides the "),yo=i("code"),Kd=r("__call__"),Hd=r(" special method."),Qd=h(),z(st.$$.fragment),Vd=h(),z(nt.$$.fragment),Ud=h(),z(ot.$$.fragment),Gd=h(),z(rt.$$.fragment),Jd=h(),z(at.$$.fragment),Mr=h(),qe=i("h2"),it=i("a"),To=i("span"),z(vs.$$.fragment),Xd=h(),So=i("span"),Yd=r("SqueezeBertForMultipleChoice"),Fr=h(),P=i("div"),z(ws.$$.fragment),Zd=h(),Bo=i("p"),ec=r(`SqueezeBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),tc=h(),ys=i("p"),sc=r("The SqueezeBERT model was proposed in "),Ts=i("a"),nc=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),oc=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),rc=h(),Ss=i("p"),ac=r("This model inherits from "),wn=i("a"),ic=r("PreTrainedModel"),lc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc=h(),Bs=i("p"),cc=r("This model is also a PyTorch "),Es=i("a"),pc=r("torch.nn.Module"),uc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hc=h(),js=i("p"),mc=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Eo=i("em"),fc=r("squeezebert/squeezebert-mnli-headless"),gc=r(" checkpoint as a starting point."),_c=h(),z(lt.$$.fragment),bc=h(),z(dt.$$.fragment),kc=h(),se=i("div"),z(Ms.$$.fragment),zc=h(),ve=i("p"),$c=r("The "),yn=i("a"),qc=r("SqueezeBertForMultipleChoice"),vc=r(" forward method, overrides the "),jo=i("code"),wc=r("__call__"),yc=r(" special method."),Tc=h(),z(ct.$$.fragment),Sc=h(),z(pt.$$.fragment),xr=h(),we=i("h2"),ut=i("a"),Mo=i("span"),z(Fs.$$.fragment),Bc=h(),Fo=i("span"),Ec=r("SqueezeBertForTokenClassification"),Cr=h(),A=i("div"),z(xs.$$.fragment),jc=h(),xo=i("p"),Mc=r(`SqueezeBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Fc=h(),Cs=i("p"),xc=r("The SqueezeBERT model was proposed in "),Ps=i("a"),Cc=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Pc=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Ac=h(),As=i("p"),Lc=r("This model inherits from "),Tn=i("a"),Nc=r("PreTrainedModel"),Ic=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=h(),Ls=i("p"),Oc=r("This model is also a PyTorch "),Ns=i("a"),Rc=r("torch.nn.Module"),Wc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kc=h(),Is=i("p"),Hc=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Co=i("em"),Qc=r("squeezebert/squeezebert-mnli-headless"),Vc=r(" checkpoint as a starting point."),Uc=h(),z(ht.$$.fragment),Gc=h(),z(mt.$$.fragment),Jc=h(),G=i("div"),z(Ds.$$.fragment),Xc=h(),ye=i("p"),Yc=r("The "),Sn=i("a"),Zc=r("SqueezeBertForTokenClassification"),ep=r(" forward method, overrides the "),Po=i("code"),tp=r("__call__"),sp=r(" special method."),np=h(),z(ft.$$.fragment),op=h(),z(gt.$$.fragment),rp=h(),z(_t.$$.fragment),Pr=h(),Te=i("h2"),bt=i("a"),Ao=i("span"),z(Os.$$.fragment),ap=h(),Lo=i("span"),ip=r("SqueezeBertForQuestionAnswering"),Ar=h(),L=i("div"),z(Rs.$$.fragment),lp=h(),Se=i("p"),dp=r(`SqueezeBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),No=i("code"),cp=r("span start logits"),pp=r(" and "),Io=i("code"),up=r("span end logits"),hp=r(")."),mp=h(),Ws=i("p"),fp=r("The SqueezeBERT model was proposed in "),Ks=i("a"),gp=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),_p=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),bp=h(),Hs=i("p"),kp=r("This model inherits from "),Bn=i("a"),zp=r("PreTrainedModel"),$p=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp=h(),Qs=i("p"),vp=r("This model is also a PyTorch "),Vs=i("a"),wp=r("torch.nn.Module"),yp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp=h(),Us=i("p"),Sp=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Do=i("em"),Bp=r("squeezebert/squeezebert-mnli-headless"),Ep=r(" checkpoint as a starting point."),jp=h(),z(kt.$$.fragment),Mp=h(),z(zt.$$.fragment),Fp=h(),J=i("div"),z(Gs.$$.fragment),xp=h(),Be=i("p"),Cp=r("The "),En=i("a"),Pp=r("SqueezeBertForQuestionAnswering"),Ap=r(" forward method, overrides the "),Oo=i("code"),Lp=r("__call__"),Np=r(" special method."),Ip=h(),z($t.$$.fragment),Dp=h(),z(qt.$$.fragment),Op=h(),z(vt.$$.fragment),this.h()},l(n){const _=yh('[data-svelte="svelte-1phssyn"]',document.head);o=l(_,"META",{name:!0,content:!0}),_.forEach(s),f=m(n),p=l(n,"H1",{class:!0});var Js=d(p);c=l(Js,"A",{id:!0,class:!0,href:!0});var Ro=d(c);g=l(Ro,"SPAN",{});var Wo=d(g);$(t.$$.fragment,Wo),Wo.forEach(s),Ro.forEach(s),u=m(Js),j=l(Js,"SPAN",{});var Ko=d(j);va=a(Ko,"SqueezeBERT"),Ko.forEach(s),Js.forEach(s),ur=m(n),ce=l(n,"H2",{class:!0});var Xs=d(ce);Fe=l(Xs,"A",{id:!0,class:!0,href:!0});var Ho=d(Fe);Dn=l(Ho,"SPAN",{});var Qo=d(Dn);$(Bt.$$.fragment,Qo),Qo.forEach(s),Ho.forEach(s),wa=m(Xs),On=l(Xs,"SPAN",{});var Vo=d(On);ya=a(Vo,"Overview"),Vo.forEach(s),Xs.forEach(s),hr=m(n),oe=l(n,"P",{});var Ee=d(oe);Ta=a(Ee,"The SqueezeBERT model was proposed in "),Et=l(Ee,"A",{href:!0,rel:!0});var Uo=d(Et);Sa=a(Uo,"SqueezeBERT: What can computer vision teach NLP about efficient neural networks?"),Uo.forEach(s),Ba=a(Ee,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, Kurt W. Keutzer. It\u2019s a
bidirectional transformer similar to the BERT model. The key difference between the BERT architecture and the
SqueezeBERT architecture is that SqueezeBERT uses `),jt=l(Ee,"A",{href:!0,rel:!0});var Go=d(jt);Ea=a(Go,"grouped convolutions"),Go.forEach(s),ja=a(Ee,`
instead of fully-connected layers for the Q, K, V and FFN layers.`),Ee.forEach(s),mr=m(n),sn=l(n,"P",{});var Jo=d(sn);Ma=a(Jo,"The abstract from the paper is the following:"),Jo.forEach(s),fr=m(n),nn=l(n,"P",{});var Xo=d(nn);Rn=l(Xo,"EM",{});var Yo=d(Rn);Fa=a(Yo,`Humans read and write hundreds of billions of messages every day. Further, due to the availability of large datasets,
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
set. The SqueezeBERT code will be released.`),Yo.forEach(s),Xo.forEach(s),gr=m(n),on=l(n,"P",{});var Zo=d(on);xa=a(Zo,"Tips:"),Zo.forEach(s),_r=m(n),re=l(n,"UL",{});var je=d(re);Wn=l(je,"LI",{});var er=d(Wn);Ca=a(er,`SqueezeBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right
rather than the left.`),er.forEach(s),Pa=m(je),Kn=l(je,"LI",{});var tr=d(Kn);Aa=a(tr,`SqueezeBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),tr.forEach(s),La=m(je),Mt=l(je,"LI",{});var Ys=d(Mt);Na=a(Ys,`For best results when finetuning on sequence classification tasks, it is recommended to start with the
`),Hn=l(Ys,"EM",{});var sr=d(Hn);Ia=a(sr,"squeezebert/squeezebert-mnli-headless"),sr.forEach(s),Da=a(Ys," checkpoint."),Ys.forEach(s),je.forEach(s),br=m(n),xe=l(n,"P",{});var Zs=d(xe);Oa=a(Zs,"This model was contributed by "),Ft=l(Zs,"A",{href:!0,rel:!0});var nr=d(Ft);Ra=a(nr,"forresti"),nr.forEach(s),Wa=a(Zs,"."),Zs.forEach(s),kr=m(n),pe=l(n,"H2",{class:!0});var en=d(pe);Ce=l(en,"A",{id:!0,class:!0,href:!0});var or=d(Ce);Qn=l(or,"SPAN",{});var rr=d(Qn);$(xt.$$.fragment,rr),rr.forEach(s),or.forEach(s),Ka=m(en),Vn=l(en,"SPAN",{});var ar=d(Vn);Ha=a(ar,"SqueezeBertConfig"),ar.forEach(s),en.forEach(s),zr=m(n),V=l(n,"DIV",{class:!0});var Z=d(V);$(Ct.$$.fragment,Z),Qa=m(Z),Pt=l(Z,"P",{});var tn=d(Pt);Va=a(tn,"This is the configuration class to store the configuration of a "),rn=l(tn,"A",{href:!0});var ir=d(rn);Ua=a(ir,"SqueezeBertModel"),ir.forEach(s),Ga=a(tn,`. It is used to instantiate a
SqueezeBERT model according to the specified arguments, defining the model architecture.`),tn.forEach(s),Ja=m(Z),ue=l(Z,"P",{});var Me=d(ue);Xa=a(Me,"Configuration objects inherit from "),an=l(Me,"A",{href:!0});var lr=d(an);Ya=a(lr,"PretrainedConfig"),lr.forEach(s),Za=a(Me,` and can be used to control the model outputs. Read the
documentation from `),ln=l(Me,"A",{href:!0});var dr=d(ln);ei=a(dr,"PretrainedConfig"),dr.forEach(s),ti=a(Me," for more information."),Me.forEach(s),si=m(Z),$(Pe.$$.fragment,Z),ni=m(Z),Un=l(Z,"P",{});var Kp=d(Un);oi=a(Kp,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Kp.forEach(s),Z.forEach(s),$r=m(n),he=l(n,"H2",{class:!0});var Nr=d(he);Ae=l(Nr,"A",{id:!0,class:!0,href:!0});var Hp=d(Ae);Gn=l(Hp,"SPAN",{});var Qp=d(Gn);$(At.$$.fragment,Qp),Qp.forEach(s),Hp.forEach(s),ri=m(Nr),Jn=l(Nr,"SPAN",{});var Vp=d(Jn);ai=a(Vp,"SqueezeBertTokenizer"),Vp.forEach(s),Nr.forEach(s),qr=m(n),M=l(n,"DIV",{class:!0});var D=d(M);$(Lt.$$.fragment,D),ii=m(D),Xn=l(D,"P",{});var Up=d(Xn);li=a(Up,"Constructs a SqueezeBert tokenizer."),Up.forEach(s),di=m(D),Le=l(D,"P",{});var cr=d(Le);dn=l(cr,"A",{href:!0});var Gp=d(dn);ci=a(Gp,"SqueezeBertTokenizer"),Gp.forEach(s),pi=a(cr," is identical to "),cn=l(cr,"A",{href:!0});var Jp=d(cn);ui=a(Jp,"BertTokenizer"),Jp.forEach(s),hi=a(cr," and runs end-to-end tokenization: punctuation splitting"),cr.forEach(s),mi=m(D),Yn=l(D,"UL",{});var Xp=d(Yn);Zn=l(Xp,"LI",{});var Yp=d(Zn);fi=a(Yp,"wordpiece."),Yp.forEach(s),Xp.forEach(s),gi=m(D),Nt=l(D,"P",{});var Ir=d(Nt);_i=a(Ir,"Refer to superclass "),pn=l(Ir,"A",{href:!0});var Zp=d(pn);bi=a(Zp,"BertTokenizer"),Zp.forEach(s),ki=a(Ir," for usage examples and documentation concerning parameters."),Ir.forEach(s),zi=m(D),ae=l(D,"DIV",{class:!0});var jn=d(ae);$(It.$$.fragment,jn),$i=m(jn),eo=l(jn,"P",{});var eu=d(eo);qi=a(eu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),eu.forEach(s),vi=m(jn),Dt=l(jn,"UL",{});var Dr=d(Dt);un=l(Dr,"LI",{});var Rp=d(un);wi=a(Rp,"single sequence: "),to=l(Rp,"CODE",{});var tu=d(to);yi=a(tu,"[CLS] X [SEP]"),tu.forEach(s),Rp.forEach(s),Ti=m(Dr),hn=l(Dr,"LI",{});var Wp=d(hn);Si=a(Wp,"pair of sequences: "),so=l(Wp,"CODE",{});var su=d(so);Bi=a(su,"[CLS] A [SEP] B [SEP]"),su.forEach(s),Wp.forEach(s),Dr.forEach(s),jn.forEach(s),Ei=m(D),Ne=l(D,"DIV",{class:!0});var Or=d(Ne);$(Ot.$$.fragment,Or),ji=m(Or),Rt=l(Or,"P",{});var Rr=d(Rt);Mi=a(Rr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),no=l(Rr,"CODE",{});var nu=d(no);Fi=a(nu,"prepare_for_model"),nu.forEach(s),xi=a(Rr," method."),Rr.forEach(s),Or.forEach(s),Ci=m(D),ee=l(D,"DIV",{class:!0});var wt=d(ee);$(Wt.$$.fragment,wt),Pi=m(wt),oo=l(wt,"P",{});var ou=d(oo);Ai=a(ou,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ou.forEach(s),Li=m(wt),$(Ie.$$.fragment,wt),Ni=m(wt),me=l(wt,"P",{});var Mn=d(me);Ii=a(Mn,"If "),ro=l(Mn,"CODE",{});var ru=d(ro);Di=a(ru,"token_ids_1"),ru.forEach(s),Oi=a(Mn," is "),ao=l(Mn,"CODE",{});var au=d(ao);Ri=a(au,"None"),au.forEach(s),Wi=a(Mn,", this method only returns the first portion of the mask (0s)."),Mn.forEach(s),wt.forEach(s),Ki=m(D),mn=l(D,"DIV",{class:!0});var iu=d(mn);$(Kt.$$.fragment,iu),iu.forEach(s),D.forEach(s),vr=m(n),fe=l(n,"H2",{class:!0});var Wr=d(fe);De=l(Wr,"A",{id:!0,class:!0,href:!0});var lu=d(De);io=l(lu,"SPAN",{});var du=d(io);$(Ht.$$.fragment,du),du.forEach(s),lu.forEach(s),Hi=m(Wr),lo=l(Wr,"SPAN",{});var cu=d(lo);Qi=a(cu,"SqueezeBertTokenizerFast"),cu.forEach(s),Wr.forEach(s),wr=m(n),Y=l(n,"DIV",{class:!0});var yt=d(Y);$(Qt.$$.fragment,yt),Vi=m(yt),Vt=l(yt,"P",{});var Kr=d(Vt);Ui=a(Kr,"Constructs a \u201CFast\u201D SqueezeBert tokenizer (backed by HuggingFace\u2019s "),co=l(Kr,"EM",{});var pu=d(co);Gi=a(pu,"tokenizers"),pu.forEach(s),Ji=a(Kr," library)."),Kr.forEach(s),Xi=m(yt),Oe=l(yt,"P",{});var pr=d(Oe);fn=l(pr,"A",{href:!0});var uu=d(fn);Yi=a(uu,"SqueezeBertTokenizerFast"),uu.forEach(s),Zi=a(pr," is identical to "),gn=l(pr,"A",{href:!0});var hu=d(gn);el=a(hu,"BertTokenizerFast"),hu.forEach(s),tl=a(pr,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),pr.forEach(s),sl=m(yt),Ut=l(yt,"P",{});var Hr=d(Ut);nl=a(Hr,"Refer to superclass "),_n=l(Hr,"A",{href:!0});var mu=d(_n);ol=a(mu,"BertTokenizerFast"),mu.forEach(s),rl=a(Hr," for usage examples and documentation concerning parameters."),Hr.forEach(s),yt.forEach(s),yr=m(n),ge=l(n,"H2",{class:!0});var Qr=d(ge);Re=l(Qr,"A",{id:!0,class:!0,href:!0});var fu=d(Re);po=l(fu,"SPAN",{});var gu=d(po);$(Gt.$$.fragment,gu),gu.forEach(s),fu.forEach(s),al=m(Qr),uo=l(Qr,"SPAN",{});var _u=d(uo);il=a(_u,"SqueezeBertModel"),_u.forEach(s),Qr.forEach(s),Tr=m(n),F=l(n,"DIV",{class:!0});var O=d(F);$(Jt.$$.fragment,O),ll=m(O),ho=l(O,"P",{});var bu=d(ho);dl=a(bu,"The bare SqueezeBERT Model transformer outputting raw hidden-states without any specific head on top."),bu.forEach(s),cl=m(O),Xt=l(O,"P",{});var Vr=d(Xt);pl=a(Vr,"The SqueezeBERT model was proposed in "),Yt=l(Vr,"A",{href:!0,rel:!0});var ku=d(Yt);ul=a(ku,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),ku.forEach(s),hl=a(Vr,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Vr.forEach(s),ml=m(O),Zt=l(O,"P",{});var Ur=d(Zt);fl=a(Ur,"This model inherits from "),bn=l(Ur,"A",{href:!0});var zu=d(bn);gl=a(zu,"PreTrainedModel"),zu.forEach(s),_l=a(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(s),bl=m(O),es=l(O,"P",{});var Gr=d(es);kl=a(Gr,"This model is also a PyTorch "),ts=l(Gr,"A",{href:!0,rel:!0});var $u=d(ts);zl=a($u,"torch.nn.Module"),$u.forEach(s),$l=a(Gr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gr.forEach(s),ql=m(O),ss=l(O,"P",{});var Jr=d(ss);vl=a(Jr,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),mo=l(Jr,"EM",{});var qu=d(mo);wl=a(qu,"squeezebert/squeezebert-mnli-headless"),qu.forEach(s),yl=a(Jr," checkpoint as a starting point."),Jr.forEach(s),Tl=m(O),$(We.$$.fragment,O),Sl=m(O),$(Ke.$$.fragment,O),Bl=m(O),te=l(O,"DIV",{class:!0});var Tt=d(te);$(ns.$$.fragment,Tt),El=m(Tt),_e=l(Tt,"P",{});var Fn=d(_e);jl=a(Fn,"The "),kn=l(Fn,"A",{href:!0});var vu=d(kn);Ml=a(vu,"SqueezeBertModel"),vu.forEach(s),Fl=a(Fn," forward method, overrides the "),fo=l(Fn,"CODE",{});var wu=d(fo);xl=a(wu,"__call__"),wu.forEach(s),Cl=a(Fn," special method."),Fn.forEach(s),Pl=m(Tt),$(He.$$.fragment,Tt),Al=m(Tt),$(Qe.$$.fragment,Tt),Tt.forEach(s),O.forEach(s),Sr=m(n),be=l(n,"H2",{class:!0});var Xr=d(be);Ve=l(Xr,"A",{id:!0,class:!0,href:!0});var yu=d(Ve);go=l(yu,"SPAN",{});var Tu=d(go);$(os.$$.fragment,Tu),Tu.forEach(s),yu.forEach(s),Ll=m(Xr),_o=l(Xr,"SPAN",{});var Su=d(_o);Nl=a(Su,"SqueezeBertForMaskedLM"),Su.forEach(s),Xr.forEach(s),Br=m(n),x=l(n,"DIV",{class:!0});var R=d(x);$(rs.$$.fragment,R),Il=m(R),as=l(R,"P",{});var Yr=d(as);Dl=a(Yr,"SqueezeBERT Model with a "),bo=l(Yr,"CODE",{});var Bu=d(bo);Ol=a(Bu,"language modeling"),Bu.forEach(s),Rl=a(Yr," head on top."),Yr.forEach(s),Wl=m(R),is=l(R,"P",{});var Zr=d(is);Kl=a(Zr,"The SqueezeBERT model was proposed in "),ls=l(Zr,"A",{href:!0,rel:!0});var Eu=d(ls);Hl=a(Eu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Eu.forEach(s),Ql=a(Zr,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Zr.forEach(s),Vl=m(R),ds=l(R,"P",{});var ea=d(ds);Ul=a(ea,"This model inherits from "),zn=l(ea,"A",{href:!0});var ju=d(zn);Gl=a(ju,"PreTrainedModel"),ju.forEach(s),Jl=a(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(s),Xl=m(R),cs=l(R,"P",{});var ta=d(cs);Yl=a(ta,"This model is also a PyTorch "),ps=l(ta,"A",{href:!0,rel:!0});var Mu=d(ps);Zl=a(Mu,"torch.nn.Module"),Mu.forEach(s),ed=a(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(s),td=m(R),us=l(R,"P",{});var sa=d(us);sd=a(sa,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),ko=l(sa,"EM",{});var Fu=d(ko);nd=a(Fu,"squeezebert/squeezebert-mnli-headless"),Fu.forEach(s),od=a(sa," checkpoint as a starting point."),sa.forEach(s),rd=m(R),$(Ue.$$.fragment,R),ad=m(R),$(Ge.$$.fragment,R),id=m(R),U=l(R,"DIV",{class:!0});var ie=d(U);$(hs.$$.fragment,ie),ld=m(ie),ke=l(ie,"P",{});var xn=d(ke);dd=a(xn,"The "),$n=l(xn,"A",{href:!0});var xu=d($n);cd=a(xu,"SqueezeBertForMaskedLM"),xu.forEach(s),pd=a(xn," forward method, overrides the "),zo=l(xn,"CODE",{});var Cu=d(zo);ud=a(Cu,"__call__"),Cu.forEach(s),hd=a(xn," special method."),xn.forEach(s),md=m(ie),$(Je.$$.fragment,ie),fd=m(ie),$(Xe.$$.fragment,ie),gd=m(ie),$(Ye.$$.fragment,ie),ie.forEach(s),R.forEach(s),Er=m(n),ze=l(n,"H2",{class:!0});var na=d(ze);Ze=l(na,"A",{id:!0,class:!0,href:!0});var Pu=d(Ze);$o=l(Pu,"SPAN",{});var Au=d($o);$(ms.$$.fragment,Au),Au.forEach(s),Pu.forEach(s),_d=m(na),qo=l(na,"SPAN",{});var Lu=d(qo);bd=a(Lu,"SqueezeBertForSequenceClassification"),Lu.forEach(s),na.forEach(s),jr=m(n),C=l(n,"DIV",{class:!0});var W=d(C);$(fs.$$.fragment,W),kd=m(W),vo=l(W,"P",{});var Nu=d(vo);zd=a(Nu,`SqueezeBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Nu.forEach(s),$d=m(W),gs=l(W,"P",{});var oa=d(gs);qd=a(oa,"The SqueezeBERT model was proposed in "),_s=l(oa,"A",{href:!0,rel:!0});var Iu=d(_s);vd=a(Iu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Iu.forEach(s),wd=a(oa,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),oa.forEach(s),yd=m(W),bs=l(W,"P",{});var ra=d(bs);Td=a(ra,"This model inherits from "),qn=l(ra,"A",{href:!0});var Du=d(qn);Sd=a(Du,"PreTrainedModel"),Du.forEach(s),Bd=a(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(s),Ed=m(W),ks=l(W,"P",{});var aa=d(ks);jd=a(aa,"This model is also a PyTorch "),zs=l(aa,"A",{href:!0,rel:!0});var Ou=d(zs);Md=a(Ou,"torch.nn.Module"),Ou.forEach(s),Fd=a(aa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aa.forEach(s),xd=m(W),$s=l(W,"P",{});var ia=d($s);Cd=a(ia,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),wo=l(ia,"EM",{});var Ru=d(wo);Pd=a(Ru,"squeezebert/squeezebert-mnli-headless"),Ru.forEach(s),Ad=a(ia," checkpoint as a starting point."),ia.forEach(s),Ld=m(W),$(et.$$.fragment,W),Nd=m(W),$(tt.$$.fragment,W),Id=m(W),I=l(W,"DIV",{class:!0});var X=d(I);$(qs.$$.fragment,X),Dd=m(X),$e=l(X,"P",{});var Cn=d($e);Od=a(Cn,"The "),vn=l(Cn,"A",{href:!0});var Wu=d(vn);Rd=a(Wu,"SqueezeBertForSequenceClassification"),Wu.forEach(s),Wd=a(Cn," forward method, overrides the "),yo=l(Cn,"CODE",{});var Ku=d(yo);Kd=a(Ku,"__call__"),Ku.forEach(s),Hd=a(Cn," special method."),Cn.forEach(s),Qd=m(X),$(st.$$.fragment,X),Vd=m(X),$(nt.$$.fragment,X),Ud=m(X),$(ot.$$.fragment,X),Gd=m(X),$(rt.$$.fragment,X),Jd=m(X),$(at.$$.fragment,X),X.forEach(s),W.forEach(s),Mr=m(n),qe=l(n,"H2",{class:!0});var la=d(qe);it=l(la,"A",{id:!0,class:!0,href:!0});var Hu=d(it);To=l(Hu,"SPAN",{});var Qu=d(To);$(vs.$$.fragment,Qu),Qu.forEach(s),Hu.forEach(s),Xd=m(la),So=l(la,"SPAN",{});var Vu=d(So);Yd=a(Vu,"SqueezeBertForMultipleChoice"),Vu.forEach(s),la.forEach(s),Fr=m(n),P=l(n,"DIV",{class:!0});var K=d(P);$(ws.$$.fragment,K),Zd=m(K),Bo=l(K,"P",{});var Uu=d(Bo);ec=a(Uu,`SqueezeBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Uu.forEach(s),tc=m(K),ys=l(K,"P",{});var da=d(ys);sc=a(da,"The SqueezeBERT model was proposed in "),Ts=l(da,"A",{href:!0,rel:!0});var Gu=d(Ts);nc=a(Gu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Gu.forEach(s),oc=a(da,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),da.forEach(s),rc=m(K),Ss=l(K,"P",{});var ca=d(Ss);ac=a(ca,"This model inherits from "),wn=l(ca,"A",{href:!0});var Ju=d(wn);ic=a(Ju,"PreTrainedModel"),Ju.forEach(s),lc=a(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ca.forEach(s),dc=m(K),Bs=l(K,"P",{});var pa=d(Bs);cc=a(pa,"This model is also a PyTorch "),Es=l(pa,"A",{href:!0,rel:!0});var Xu=d(Es);pc=a(Xu,"torch.nn.Module"),Xu.forEach(s),uc=a(pa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pa.forEach(s),hc=m(K),js=l(K,"P",{});var ua=d(js);mc=a(ua,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Eo=l(ua,"EM",{});var Yu=d(Eo);fc=a(Yu,"squeezebert/squeezebert-mnli-headless"),Yu.forEach(s),gc=a(ua," checkpoint as a starting point."),ua.forEach(s),_c=m(K),$(lt.$$.fragment,K),bc=m(K),$(dt.$$.fragment,K),kc=m(K),se=l(K,"DIV",{class:!0});var St=d(se);$(Ms.$$.fragment,St),zc=m(St),ve=l(St,"P",{});var Pn=d(ve);$c=a(Pn,"The "),yn=l(Pn,"A",{href:!0});var Zu=d(yn);qc=a(Zu,"SqueezeBertForMultipleChoice"),Zu.forEach(s),vc=a(Pn," forward method, overrides the "),jo=l(Pn,"CODE",{});var eh=d(jo);wc=a(eh,"__call__"),eh.forEach(s),yc=a(Pn," special method."),Pn.forEach(s),Tc=m(St),$(ct.$$.fragment,St),Sc=m(St),$(pt.$$.fragment,St),St.forEach(s),K.forEach(s),xr=m(n),we=l(n,"H2",{class:!0});var ha=d(we);ut=l(ha,"A",{id:!0,class:!0,href:!0});var th=d(ut);Mo=l(th,"SPAN",{});var sh=d(Mo);$(Fs.$$.fragment,sh),sh.forEach(s),th.forEach(s),Bc=m(ha),Fo=l(ha,"SPAN",{});var nh=d(Fo);Ec=a(nh,"SqueezeBertForTokenClassification"),nh.forEach(s),ha.forEach(s),Cr=m(n),A=l(n,"DIV",{class:!0});var H=d(A);$(xs.$$.fragment,H),jc=m(H),xo=l(H,"P",{});var oh=d(xo);Mc=a(oh,`SqueezeBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),oh.forEach(s),Fc=m(H),Cs=l(H,"P",{});var ma=d(Cs);xc=a(ma,"The SqueezeBERT model was proposed in "),Ps=l(ma,"A",{href:!0,rel:!0});var rh=d(Ps);Cc=a(rh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),rh.forEach(s),Pc=a(ma,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ma.forEach(s),Ac=m(H),As=l(H,"P",{});var fa=d(As);Lc=a(fa,"This model inherits from "),Tn=l(fa,"A",{href:!0});var ah=d(Tn);Nc=a(ah,"PreTrainedModel"),ah.forEach(s),Ic=a(fa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fa.forEach(s),Dc=m(H),Ls=l(H,"P",{});var ga=d(Ls);Oc=a(ga,"This model is also a PyTorch "),Ns=l(ga,"A",{href:!0,rel:!0});var ih=d(Ns);Rc=a(ih,"torch.nn.Module"),ih.forEach(s),Wc=a(ga,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ga.forEach(s),Kc=m(H),Is=l(H,"P",{});var _a=d(Is);Hc=a(_a,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Co=l(_a,"EM",{});var lh=d(Co);Qc=a(lh,"squeezebert/squeezebert-mnli-headless"),lh.forEach(s),Vc=a(_a," checkpoint as a starting point."),_a.forEach(s),Uc=m(H),$(ht.$$.fragment,H),Gc=m(H),$(mt.$$.fragment,H),Jc=m(H),G=l(H,"DIV",{class:!0});var le=d(G);$(Ds.$$.fragment,le),Xc=m(le),ye=l(le,"P",{});var An=d(ye);Yc=a(An,"The "),Sn=l(An,"A",{href:!0});var dh=d(Sn);Zc=a(dh,"SqueezeBertForTokenClassification"),dh.forEach(s),ep=a(An," forward method, overrides the "),Po=l(An,"CODE",{});var ch=d(Po);tp=a(ch,"__call__"),ch.forEach(s),sp=a(An," special method."),An.forEach(s),np=m(le),$(ft.$$.fragment,le),op=m(le),$(gt.$$.fragment,le),rp=m(le),$(_t.$$.fragment,le),le.forEach(s),H.forEach(s),Pr=m(n),Te=l(n,"H2",{class:!0});var ba=d(Te);bt=l(ba,"A",{id:!0,class:!0,href:!0});var ph=d(bt);Ao=l(ph,"SPAN",{});var uh=d(Ao);$(Os.$$.fragment,uh),uh.forEach(s),ph.forEach(s),ap=m(ba),Lo=l(ba,"SPAN",{});var hh=d(Lo);ip=a(hh,"SqueezeBertForQuestionAnswering"),hh.forEach(s),ba.forEach(s),Ar=m(n),L=l(n,"DIV",{class:!0});var Q=d(L);$(Rs.$$.fragment,Q),lp=m(Q),Se=l(Q,"P",{});var Ln=d(Se);dp=a(Ln,`SqueezeBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),No=l(Ln,"CODE",{});var mh=d(No);cp=a(mh,"span start logits"),mh.forEach(s),pp=a(Ln," and "),Io=l(Ln,"CODE",{});var fh=d(Io);up=a(fh,"span end logits"),fh.forEach(s),hp=a(Ln,")."),Ln.forEach(s),mp=m(Q),Ws=l(Q,"P",{});var ka=d(Ws);fp=a(ka,"The SqueezeBERT model was proposed in "),Ks=l(ka,"A",{href:!0,rel:!0});var gh=d(Ks);gp=a(gh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),gh.forEach(s),_p=a(ka,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ka.forEach(s),bp=m(Q),Hs=l(Q,"P",{});var za=d(Hs);kp=a(za,"This model inherits from "),Bn=l(za,"A",{href:!0});var _h=d(Bn);zp=a(_h,"PreTrainedModel"),_h.forEach(s),$p=a(za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),za.forEach(s),qp=m(Q),Qs=l(Q,"P",{});var $a=d(Qs);vp=a($a,"This model is also a PyTorch "),Vs=l($a,"A",{href:!0,rel:!0});var bh=d(Vs);wp=a(bh,"torch.nn.Module"),bh.forEach(s),yp=a($a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$a.forEach(s),Tp=m(Q),Us=l(Q,"P",{});var qa=d(Us);Sp=a(qa,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Do=l(qa,"EM",{});var kh=d(Do);Bp=a(kh,"squeezebert/squeezebert-mnli-headless"),kh.forEach(s),Ep=a(qa," checkpoint as a starting point."),qa.forEach(s),jp=m(Q),$(kt.$$.fragment,Q),Mp=m(Q),$(zt.$$.fragment,Q),Fp=m(Q),J=l(Q,"DIV",{class:!0});var de=d(J);$(Gs.$$.fragment,de),xp=m(de),Be=l(de,"P",{});var Nn=d(Be);Cp=a(Nn,"The "),En=l(Nn,"A",{href:!0});var zh=d(En);Pp=a(zh,"SqueezeBertForQuestionAnswering"),zh.forEach(s),Ap=a(Nn," forward method, overrides the "),Oo=l(Nn,"CODE",{});var $h=d(Oo);Lp=a($h,"__call__"),$h.forEach(s),Np=a(Nn," special method."),Nn.forEach(s),Ip=m(de),$($t.$$.fragment,de),Dp=m(de),$(qt.$$.fragment,de),Op=m(de),$(vt.$$.fragment,de),de.forEach(s),Q.forEach(s),this.h()},h(){b(o,"name","hf:doc:metadata"),b(o,"content",JSON.stringify(am)),b(c,"id","squeezebert"),b(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(c,"href","#squeezebert"),b(p,"class","relative group"),b(Fe,"id","overview"),b(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Fe,"href","#overview"),b(ce,"class","relative group"),b(Et,"href","https://arxiv.org/abs/2006.11316"),b(Et,"rel","nofollow"),b(jt,"href","https://blog.yani.io/filter-group-tutorial"),b(jt,"rel","nofollow"),b(Ft,"href","https://huggingface.co/forresti"),b(Ft,"rel","nofollow"),b(Ce,"id","transformers.SqueezeBertConfig"),b(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ce,"href","#transformers.SqueezeBertConfig"),b(pe,"class","relative group"),b(rn,"href","/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertModel"),b(an,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),b(ln,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),b(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ae,"id","transformers.SqueezeBertTokenizer"),b(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ae,"href","#transformers.SqueezeBertTokenizer"),b(he,"class","relative group"),b(dn,"href","/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer"),b(cn,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer"),b(pn,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer"),b(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"id","transformers.SqueezeBertTokenizerFast"),b(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(De,"href","#transformers.SqueezeBertTokenizerFast"),b(fe,"class","relative group"),b(fn,"href","/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertTokenizerFast"),b(gn,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizerFast"),b(_n,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizerFast"),b(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Re,"id","transformers.SqueezeBertModel"),b(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Re,"href","#transformers.SqueezeBertModel"),b(ge,"class","relative group"),b(Yt,"href","https://arxiv.org/abs/2006.11316"),b(Yt,"rel","nofollow"),b(bn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ts,"rel","nofollow"),b(kn,"href","/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertModel"),b(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ve,"id","transformers.SqueezeBertForMaskedLM"),b(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ve,"href","#transformers.SqueezeBertForMaskedLM"),b(be,"class","relative group"),b(ls,"href","https://arxiv.org/abs/2006.11316"),b(ls,"rel","nofollow"),b(zn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ps,"rel","nofollow"),b($n,"href","/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertForMaskedLM"),b(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ze,"id","transformers.SqueezeBertForSequenceClassification"),b(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ze,"href","#transformers.SqueezeBertForSequenceClassification"),b(ze,"class","relative group"),b(_s,"href","https://arxiv.org/abs/2006.11316"),b(_s,"rel","nofollow"),b(qn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(zs,"rel","nofollow"),b(vn,"href","/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertForSequenceClassification"),b(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(it,"id","transformers.SqueezeBertForMultipleChoice"),b(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(it,"href","#transformers.SqueezeBertForMultipleChoice"),b(qe,"class","relative group"),b(Ts,"href","https://arxiv.org/abs/2006.11316"),b(Ts,"rel","nofollow"),b(wn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Es,"rel","nofollow"),b(yn,"href","/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertForMultipleChoice"),b(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ut,"id","transformers.SqueezeBertForTokenClassification"),b(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ut,"href","#transformers.SqueezeBertForTokenClassification"),b(we,"class","relative group"),b(Ps,"href","https://arxiv.org/abs/2006.11316"),b(Ps,"rel","nofollow"),b(Tn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ns,"rel","nofollow"),b(Sn,"href","/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertForTokenClassification"),b(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(bt,"id","transformers.SqueezeBertForQuestionAnswering"),b(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(bt,"href","#transformers.SqueezeBertForQuestionAnswering"),b(Te,"class","relative group"),b(Ks,"href","https://arxiv.org/abs/2006.11316"),b(Ks,"rel","nofollow"),b(Bn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(Vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Vs,"rel","nofollow"),b(En,"href","/docs/transformers/v4.18.0/en/model_doc/squeezebert#transformers.SqueezeBertForQuestionAnswering"),b(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,_){e(document.head,o),k(n,f,_),k(n,p,_),e(p,c),e(c,g),q(t,g,null),e(p,u),e(p,j),e(j,va),k(n,ur,_),k(n,ce,_),e(ce,Fe),e(Fe,Dn),q(Bt,Dn,null),e(ce,wa),e(ce,On),e(On,ya),k(n,hr,_),k(n,oe,_),e(oe,Ta),e(oe,Et),e(Et,Sa),e(oe,Ba),e(oe,jt),e(jt,Ea),e(oe,ja),k(n,mr,_),k(n,sn,_),e(sn,Ma),k(n,fr,_),k(n,nn,_),e(nn,Rn),e(Rn,Fa),k(n,gr,_),k(n,on,_),e(on,xa),k(n,_r,_),k(n,re,_),e(re,Wn),e(Wn,Ca),e(re,Pa),e(re,Kn),e(Kn,Aa),e(re,La),e(re,Mt),e(Mt,Na),e(Mt,Hn),e(Hn,Ia),e(Mt,Da),k(n,br,_),k(n,xe,_),e(xe,Oa),e(xe,Ft),e(Ft,Ra),e(xe,Wa),k(n,kr,_),k(n,pe,_),e(pe,Ce),e(Ce,Qn),q(xt,Qn,null),e(pe,Ka),e(pe,Vn),e(Vn,Ha),k(n,zr,_),k(n,V,_),q(Ct,V,null),e(V,Qa),e(V,Pt),e(Pt,Va),e(Pt,rn),e(rn,Ua),e(Pt,Ga),e(V,Ja),e(V,ue),e(ue,Xa),e(ue,an),e(an,Ya),e(ue,Za),e(ue,ln),e(ln,ei),e(ue,ti),e(V,si),q(Pe,V,null),e(V,ni),e(V,Un),e(Un,oi),k(n,$r,_),k(n,he,_),e(he,Ae),e(Ae,Gn),q(At,Gn,null),e(he,ri),e(he,Jn),e(Jn,ai),k(n,qr,_),k(n,M,_),q(Lt,M,null),e(M,ii),e(M,Xn),e(Xn,li),e(M,di),e(M,Le),e(Le,dn),e(dn,ci),e(Le,pi),e(Le,cn),e(cn,ui),e(Le,hi),e(M,mi),e(M,Yn),e(Yn,Zn),e(Zn,fi),e(M,gi),e(M,Nt),e(Nt,_i),e(Nt,pn),e(pn,bi),e(Nt,ki),e(M,zi),e(M,ae),q(It,ae,null),e(ae,$i),e(ae,eo),e(eo,qi),e(ae,vi),e(ae,Dt),e(Dt,un),e(un,wi),e(un,to),e(to,yi),e(Dt,Ti),e(Dt,hn),e(hn,Si),e(hn,so),e(so,Bi),e(M,Ei),e(M,Ne),q(Ot,Ne,null),e(Ne,ji),e(Ne,Rt),e(Rt,Mi),e(Rt,no),e(no,Fi),e(Rt,xi),e(M,Ci),e(M,ee),q(Wt,ee,null),e(ee,Pi),e(ee,oo),e(oo,Ai),e(ee,Li),q(Ie,ee,null),e(ee,Ni),e(ee,me),e(me,Ii),e(me,ro),e(ro,Di),e(me,Oi),e(me,ao),e(ao,Ri),e(me,Wi),e(M,Ki),e(M,mn),q(Kt,mn,null),k(n,vr,_),k(n,fe,_),e(fe,De),e(De,io),q(Ht,io,null),e(fe,Hi),e(fe,lo),e(lo,Qi),k(n,wr,_),k(n,Y,_),q(Qt,Y,null),e(Y,Vi),e(Y,Vt),e(Vt,Ui),e(Vt,co),e(co,Gi),e(Vt,Ji),e(Y,Xi),e(Y,Oe),e(Oe,fn),e(fn,Yi),e(Oe,Zi),e(Oe,gn),e(gn,el),e(Oe,tl),e(Y,sl),e(Y,Ut),e(Ut,nl),e(Ut,_n),e(_n,ol),e(Ut,rl),k(n,yr,_),k(n,ge,_),e(ge,Re),e(Re,po),q(Gt,po,null),e(ge,al),e(ge,uo),e(uo,il),k(n,Tr,_),k(n,F,_),q(Jt,F,null),e(F,ll),e(F,ho),e(ho,dl),e(F,cl),e(F,Xt),e(Xt,pl),e(Xt,Yt),e(Yt,ul),e(Xt,hl),e(F,ml),e(F,Zt),e(Zt,fl),e(Zt,bn),e(bn,gl),e(Zt,_l),e(F,bl),e(F,es),e(es,kl),e(es,ts),e(ts,zl),e(es,$l),e(F,ql),e(F,ss),e(ss,vl),e(ss,mo),e(mo,wl),e(ss,yl),e(F,Tl),q(We,F,null),e(F,Sl),q(Ke,F,null),e(F,Bl),e(F,te),q(ns,te,null),e(te,El),e(te,_e),e(_e,jl),e(_e,kn),e(kn,Ml),e(_e,Fl),e(_e,fo),e(fo,xl),e(_e,Cl),e(te,Pl),q(He,te,null),e(te,Al),q(Qe,te,null),k(n,Sr,_),k(n,be,_),e(be,Ve),e(Ve,go),q(os,go,null),e(be,Ll),e(be,_o),e(_o,Nl),k(n,Br,_),k(n,x,_),q(rs,x,null),e(x,Il),e(x,as),e(as,Dl),e(as,bo),e(bo,Ol),e(as,Rl),e(x,Wl),e(x,is),e(is,Kl),e(is,ls),e(ls,Hl),e(is,Ql),e(x,Vl),e(x,ds),e(ds,Ul),e(ds,zn),e(zn,Gl),e(ds,Jl),e(x,Xl),e(x,cs),e(cs,Yl),e(cs,ps),e(ps,Zl),e(cs,ed),e(x,td),e(x,us),e(us,sd),e(us,ko),e(ko,nd),e(us,od),e(x,rd),q(Ue,x,null),e(x,ad),q(Ge,x,null),e(x,id),e(x,U),q(hs,U,null),e(U,ld),e(U,ke),e(ke,dd),e(ke,$n),e($n,cd),e(ke,pd),e(ke,zo),e(zo,ud),e(ke,hd),e(U,md),q(Je,U,null),e(U,fd),q(Xe,U,null),e(U,gd),q(Ye,U,null),k(n,Er,_),k(n,ze,_),e(ze,Ze),e(Ze,$o),q(ms,$o,null),e(ze,_d),e(ze,qo),e(qo,bd),k(n,jr,_),k(n,C,_),q(fs,C,null),e(C,kd),e(C,vo),e(vo,zd),e(C,$d),e(C,gs),e(gs,qd),e(gs,_s),e(_s,vd),e(gs,wd),e(C,yd),e(C,bs),e(bs,Td),e(bs,qn),e(qn,Sd),e(bs,Bd),e(C,Ed),e(C,ks),e(ks,jd),e(ks,zs),e(zs,Md),e(ks,Fd),e(C,xd),e(C,$s),e($s,Cd),e($s,wo),e(wo,Pd),e($s,Ad),e(C,Ld),q(et,C,null),e(C,Nd),q(tt,C,null),e(C,Id),e(C,I),q(qs,I,null),e(I,Dd),e(I,$e),e($e,Od),e($e,vn),e(vn,Rd),e($e,Wd),e($e,yo),e(yo,Kd),e($e,Hd),e(I,Qd),q(st,I,null),e(I,Vd),q(nt,I,null),e(I,Ud),q(ot,I,null),e(I,Gd),q(rt,I,null),e(I,Jd),q(at,I,null),k(n,Mr,_),k(n,qe,_),e(qe,it),e(it,To),q(vs,To,null),e(qe,Xd),e(qe,So),e(So,Yd),k(n,Fr,_),k(n,P,_),q(ws,P,null),e(P,Zd),e(P,Bo),e(Bo,ec),e(P,tc),e(P,ys),e(ys,sc),e(ys,Ts),e(Ts,nc),e(ys,oc),e(P,rc),e(P,Ss),e(Ss,ac),e(Ss,wn),e(wn,ic),e(Ss,lc),e(P,dc),e(P,Bs),e(Bs,cc),e(Bs,Es),e(Es,pc),e(Bs,uc),e(P,hc),e(P,js),e(js,mc),e(js,Eo),e(Eo,fc),e(js,gc),e(P,_c),q(lt,P,null),e(P,bc),q(dt,P,null),e(P,kc),e(P,se),q(Ms,se,null),e(se,zc),e(se,ve),e(ve,$c),e(ve,yn),e(yn,qc),e(ve,vc),e(ve,jo),e(jo,wc),e(ve,yc),e(se,Tc),q(ct,se,null),e(se,Sc),q(pt,se,null),k(n,xr,_),k(n,we,_),e(we,ut),e(ut,Mo),q(Fs,Mo,null),e(we,Bc),e(we,Fo),e(Fo,Ec),k(n,Cr,_),k(n,A,_),q(xs,A,null),e(A,jc),e(A,xo),e(xo,Mc),e(A,Fc),e(A,Cs),e(Cs,xc),e(Cs,Ps),e(Ps,Cc),e(Cs,Pc),e(A,Ac),e(A,As),e(As,Lc),e(As,Tn),e(Tn,Nc),e(As,Ic),e(A,Dc),e(A,Ls),e(Ls,Oc),e(Ls,Ns),e(Ns,Rc),e(Ls,Wc),e(A,Kc),e(A,Is),e(Is,Hc),e(Is,Co),e(Co,Qc),e(Is,Vc),e(A,Uc),q(ht,A,null),e(A,Gc),q(mt,A,null),e(A,Jc),e(A,G),q(Ds,G,null),e(G,Xc),e(G,ye),e(ye,Yc),e(ye,Sn),e(Sn,Zc),e(ye,ep),e(ye,Po),e(Po,tp),e(ye,sp),e(G,np),q(ft,G,null),e(G,op),q(gt,G,null),e(G,rp),q(_t,G,null),k(n,Pr,_),k(n,Te,_),e(Te,bt),e(bt,Ao),q(Os,Ao,null),e(Te,ap),e(Te,Lo),e(Lo,ip),k(n,Ar,_),k(n,L,_),q(Rs,L,null),e(L,lp),e(L,Se),e(Se,dp),e(Se,No),e(No,cp),e(Se,pp),e(Se,Io),e(Io,up),e(Se,hp),e(L,mp),e(L,Ws),e(Ws,fp),e(Ws,Ks),e(Ks,gp),e(Ws,_p),e(L,bp),e(L,Hs),e(Hs,kp),e(Hs,Bn),e(Bn,zp),e(Hs,$p),e(L,qp),e(L,Qs),e(Qs,vp),e(Qs,Vs),e(Vs,wp),e(Qs,yp),e(L,Tp),e(L,Us),e(Us,Sp),e(Us,Do),e(Do,Bp),e(Us,Ep),e(L,jp),q(kt,L,null),e(L,Mp),q(zt,L,null),e(L,Fp),e(L,J),q(Gs,J,null),e(J,xp),e(J,Be),e(Be,Cp),e(Be,En),e(En,Pp),e(Be,Ap),e(Be,Oo),e(Oo,Lp),e(Be,Np),e(J,Ip),q($t,J,null),e(J,Dp),q(qt,J,null),e(J,Op),q(vt,J,null),Lr=!0},p(n,[_]){const Js={};_&2&&(Js.$$scope={dirty:_,ctx:n}),Pe.$set(Js);const Ro={};_&2&&(Ro.$$scope={dirty:_,ctx:n}),Ie.$set(Ro);const Wo={};_&2&&(Wo.$$scope={dirty:_,ctx:n}),We.$set(Wo);const Ko={};_&2&&(Ko.$$scope={dirty:_,ctx:n}),Ke.$set(Ko);const Xs={};_&2&&(Xs.$$scope={dirty:_,ctx:n}),He.$set(Xs);const Ho={};_&2&&(Ho.$$scope={dirty:_,ctx:n}),Qe.$set(Ho);const Qo={};_&2&&(Qo.$$scope={dirty:_,ctx:n}),Ue.$set(Qo);const Vo={};_&2&&(Vo.$$scope={dirty:_,ctx:n}),Ge.$set(Vo);const Ee={};_&2&&(Ee.$$scope={dirty:_,ctx:n}),Je.$set(Ee);const Uo={};_&2&&(Uo.$$scope={dirty:_,ctx:n}),Xe.$set(Uo);const Go={};_&2&&(Go.$$scope={dirty:_,ctx:n}),Ye.$set(Go);const Jo={};_&2&&(Jo.$$scope={dirty:_,ctx:n}),et.$set(Jo);const Xo={};_&2&&(Xo.$$scope={dirty:_,ctx:n}),tt.$set(Xo);const Yo={};_&2&&(Yo.$$scope={dirty:_,ctx:n}),st.$set(Yo);const Zo={};_&2&&(Zo.$$scope={dirty:_,ctx:n}),nt.$set(Zo);const je={};_&2&&(je.$$scope={dirty:_,ctx:n}),ot.$set(je);const er={};_&2&&(er.$$scope={dirty:_,ctx:n}),rt.$set(er);const tr={};_&2&&(tr.$$scope={dirty:_,ctx:n}),at.$set(tr);const Ys={};_&2&&(Ys.$$scope={dirty:_,ctx:n}),lt.$set(Ys);const sr={};_&2&&(sr.$$scope={dirty:_,ctx:n}),dt.$set(sr);const Zs={};_&2&&(Zs.$$scope={dirty:_,ctx:n}),ct.$set(Zs);const nr={};_&2&&(nr.$$scope={dirty:_,ctx:n}),pt.$set(nr);const en={};_&2&&(en.$$scope={dirty:_,ctx:n}),ht.$set(en);const or={};_&2&&(or.$$scope={dirty:_,ctx:n}),mt.$set(or);const rr={};_&2&&(rr.$$scope={dirty:_,ctx:n}),ft.$set(rr);const ar={};_&2&&(ar.$$scope={dirty:_,ctx:n}),gt.$set(ar);const Z={};_&2&&(Z.$$scope={dirty:_,ctx:n}),_t.$set(Z);const tn={};_&2&&(tn.$$scope={dirty:_,ctx:n}),kt.$set(tn);const ir={};_&2&&(ir.$$scope={dirty:_,ctx:n}),zt.$set(ir);const Me={};_&2&&(Me.$$scope={dirty:_,ctx:n}),$t.$set(Me);const lr={};_&2&&(lr.$$scope={dirty:_,ctx:n}),qt.$set(lr);const dr={};_&2&&(dr.$$scope={dirty:_,ctx:n}),vt.$set(dr)},i(n){Lr||(v(t.$$.fragment,n),v(Bt.$$.fragment,n),v(xt.$$.fragment,n),v(Ct.$$.fragment,n),v(Pe.$$.fragment,n),v(At.$$.fragment,n),v(Lt.$$.fragment,n),v(It.$$.fragment,n),v(Ot.$$.fragment,n),v(Wt.$$.fragment,n),v(Ie.$$.fragment,n),v(Kt.$$.fragment,n),v(Ht.$$.fragment,n),v(Qt.$$.fragment,n),v(Gt.$$.fragment,n),v(Jt.$$.fragment,n),v(We.$$.fragment,n),v(Ke.$$.fragment,n),v(ns.$$.fragment,n),v(He.$$.fragment,n),v(Qe.$$.fragment,n),v(os.$$.fragment,n),v(rs.$$.fragment,n),v(Ue.$$.fragment,n),v(Ge.$$.fragment,n),v(hs.$$.fragment,n),v(Je.$$.fragment,n),v(Xe.$$.fragment,n),v(Ye.$$.fragment,n),v(ms.$$.fragment,n),v(fs.$$.fragment,n),v(et.$$.fragment,n),v(tt.$$.fragment,n),v(qs.$$.fragment,n),v(st.$$.fragment,n),v(nt.$$.fragment,n),v(ot.$$.fragment,n),v(rt.$$.fragment,n),v(at.$$.fragment,n),v(vs.$$.fragment,n),v(ws.$$.fragment,n),v(lt.$$.fragment,n),v(dt.$$.fragment,n),v(Ms.$$.fragment,n),v(ct.$$.fragment,n),v(pt.$$.fragment,n),v(Fs.$$.fragment,n),v(xs.$$.fragment,n),v(ht.$$.fragment,n),v(mt.$$.fragment,n),v(Ds.$$.fragment,n),v(ft.$$.fragment,n),v(gt.$$.fragment,n),v(_t.$$.fragment,n),v(Os.$$.fragment,n),v(Rs.$$.fragment,n),v(kt.$$.fragment,n),v(zt.$$.fragment,n),v(Gs.$$.fragment,n),v($t.$$.fragment,n),v(qt.$$.fragment,n),v(vt.$$.fragment,n),Lr=!0)},o(n){w(t.$$.fragment,n),w(Bt.$$.fragment,n),w(xt.$$.fragment,n),w(Ct.$$.fragment,n),w(Pe.$$.fragment,n),w(At.$$.fragment,n),w(Lt.$$.fragment,n),w(It.$$.fragment,n),w(Ot.$$.fragment,n),w(Wt.$$.fragment,n),w(Ie.$$.fragment,n),w(Kt.$$.fragment,n),w(Ht.$$.fragment,n),w(Qt.$$.fragment,n),w(Gt.$$.fragment,n),w(Jt.$$.fragment,n),w(We.$$.fragment,n),w(Ke.$$.fragment,n),w(ns.$$.fragment,n),w(He.$$.fragment,n),w(Qe.$$.fragment,n),w(os.$$.fragment,n),w(rs.$$.fragment,n),w(Ue.$$.fragment,n),w(Ge.$$.fragment,n),w(hs.$$.fragment,n),w(Je.$$.fragment,n),w(Xe.$$.fragment,n),w(Ye.$$.fragment,n),w(ms.$$.fragment,n),w(fs.$$.fragment,n),w(et.$$.fragment,n),w(tt.$$.fragment,n),w(qs.$$.fragment,n),w(st.$$.fragment,n),w(nt.$$.fragment,n),w(ot.$$.fragment,n),w(rt.$$.fragment,n),w(at.$$.fragment,n),w(vs.$$.fragment,n),w(ws.$$.fragment,n),w(lt.$$.fragment,n),w(dt.$$.fragment,n),w(Ms.$$.fragment,n),w(ct.$$.fragment,n),w(pt.$$.fragment,n),w(Fs.$$.fragment,n),w(xs.$$.fragment,n),w(ht.$$.fragment,n),w(mt.$$.fragment,n),w(Ds.$$.fragment,n),w(ft.$$.fragment,n),w(gt.$$.fragment,n),w(_t.$$.fragment,n),w(Os.$$.fragment,n),w(Rs.$$.fragment,n),w(kt.$$.fragment,n),w(zt.$$.fragment,n),w(Gs.$$.fragment,n),w($t.$$.fragment,n),w(qt.$$.fragment,n),w(vt.$$.fragment,n),Lr=!1},d(n){s(o),n&&s(f),n&&s(p),y(t),n&&s(ur),n&&s(ce),y(Bt),n&&s(hr),n&&s(oe),n&&s(mr),n&&s(sn),n&&s(fr),n&&s(nn),n&&s(gr),n&&s(on),n&&s(_r),n&&s(re),n&&s(br),n&&s(xe),n&&s(kr),n&&s(pe),y(xt),n&&s(zr),n&&s(V),y(Ct),y(Pe),n&&s($r),n&&s(he),y(At),n&&s(qr),n&&s(M),y(Lt),y(It),y(Ot),y(Wt),y(Ie),y(Kt),n&&s(vr),n&&s(fe),y(Ht),n&&s(wr),n&&s(Y),y(Qt),n&&s(yr),n&&s(ge),y(Gt),n&&s(Tr),n&&s(F),y(Jt),y(We),y(Ke),y(ns),y(He),y(Qe),n&&s(Sr),n&&s(be),y(os),n&&s(Br),n&&s(x),y(rs),y(Ue),y(Ge),y(hs),y(Je),y(Xe),y(Ye),n&&s(Er),n&&s(ze),y(ms),n&&s(jr),n&&s(C),y(fs),y(et),y(tt),y(qs),y(st),y(nt),y(ot),y(rt),y(at),n&&s(Mr),n&&s(qe),y(vs),n&&s(Fr),n&&s(P),y(ws),y(lt),y(dt),y(Ms),y(ct),y(pt),n&&s(xr),n&&s(we),y(Fs),n&&s(Cr),n&&s(A),y(xs),y(ht),y(mt),y(Ds),y(ft),y(gt),y(_t),n&&s(Pr),n&&s(Te),y(Os),n&&s(Ar),n&&s(L),y(Rs),y(kt),y(zt),y(Gs),y($t),y(qt),y(vt)}}}const am={local:"squeezebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.SqueezeBertConfig",title:"SqueezeBertConfig"},{local:"transformers.SqueezeBertTokenizer",title:"SqueezeBertTokenizer"},{local:"transformers.SqueezeBertTokenizerFast",title:"SqueezeBertTokenizerFast"},{local:"transformers.SqueezeBertModel",title:"SqueezeBertModel"},{local:"transformers.SqueezeBertForMaskedLM",title:"SqueezeBertForMaskedLM"},{local:"transformers.SqueezeBertForSequenceClassification",title:"SqueezeBertForSequenceClassification"},{local:"transformers.SqueezeBertForMultipleChoice",title:"SqueezeBertForMultipleChoice"},{local:"transformers.SqueezeBertForTokenClassification",title:"SqueezeBertForTokenClassification"},{local:"transformers.SqueezeBertForQuestionAnswering",title:"SqueezeBertForQuestionAnswering"}],title:"SqueezeBERT"};function im(T){return Th(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mm extends qh{constructor(o){super();vh(this,o,im,rm,wh,{})}}export{mm as default,am as metadata};
