import{S as Th,i as Sh,s as Bh,e as i,k as h,w as k,t as r,M as Eh,c as l,d as s,m,a as d,x as q,h as a,b,G as e,g as z,y as $,q as w,o as v,B as y,v as jh,L as B}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dn}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as E}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ne}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as S}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Mh(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertModel, SqueezeBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){o=i("p"),f=r("Examples:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Examples:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function xh(T){let o,f,p,c,g;return c=new E({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){o=i("p"),f=r("pair mask has the following format:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"pair mask has the following format:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Fh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Ch(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Ph(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){z(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function Ah(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){o=i("p"),f=r("Example:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Lh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Nh(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Ih(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){z(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function Dh(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForMaskedLM
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
`}}),{c(){o=i("p"),f=r("Example:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Oh(T){let o,f;return o=new E({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(o.$$.fragment)},l(p){q(o.$$.fragment,p)},m(p,c){$(o,p,c),f=!0},p:B,i(p){f||(w(o.$$.fragment,p),f=!0)},o(p){v(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function Rh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Wh(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Kh(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){z(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function Hh(T){let o,f,p,c,g;return c=new E({props:{code:`import torch
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
`}}),{c(){o=i("p"),f=r("Example of single-label classification:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example of single-label classification:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Qh(T){let o,f;return o=new E({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = SqueezeBertForSequenceClassification.from_pretrained("squeezebert/squeezebert-uncased", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(o.$$.fragment)},l(p){q(o.$$.fragment,p)},m(p,c){$(o,p,c),f=!0},p:B,i(p){f||(w(o.$$.fragment,p),f=!0)},o(p){v(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function Uh(T){let o,f,p,c,g;return c=new E({props:{code:`import torch
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
`}}),{c(){o=i("p"),f=r("Example of multi-label classification:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example of multi-label classification:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Vh(T){let o,f;return o=new E({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(o.$$.fragment)},l(p){q(o.$$.fragment,p)},m(p,c){$(o,p,c),f=!0},p:B,i(p){f||(w(o.$$.fragment,p),f=!0)},o(p){v(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function Gh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Jh(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Xh(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){z(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function Yh(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){o=i("p"),f=r("Example:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function Zh(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function em(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function tm(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){z(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function sm(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForTokenClassification
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
`}}),{c(){o=i("p"),f=r("Example:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function nm(T){let o,f;return o=new E({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(o.$$.fragment)},l(p){q(o.$$.fragment,p)},m(p,c){$(o,p,c),f=!0},p:B,i(p){f||(w(o.$$.fragment,p),f=!0)},o(p){v(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function om(T){let o,f,p,c,g;return c=new E({props:{code:`Internal class hierarchy:
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
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){o=i("p"),f=r("Hierarchy:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Hierarchy:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function rm(T){let o,f,p,c,g;return c=new E({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){o=i("p"),f=r("Data layouts:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Data layouts:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function am(T){let o,f,p,c,g;return{c(){o=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=i("code"),c=r("Module"),g=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=l(u,"CODE",{});var j=d(p);c=a(j,"Module"),j.forEach(s),g=a(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(s)},m(t,u){z(t,o,u),e(o,f),e(o,p),e(p,c),e(o,g)},d(t){t&&s(o)}}}function im(T){let o,f,p,c,g;return c=new E({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForQuestionAnswering
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
`}}),{c(){o=i("p"),f=r("Example:"),p=h(),k(c.$$.fragment)},l(t){o=l(t,"P",{});var u=d(o);f=a(u,"Example:"),u.forEach(s),p=m(t),q(c.$$.fragment,t)},m(t,u){z(t,o,u),e(o,f),z(t,p,u),$(c,t,u),g=!0},p:B,i(t){g||(w(c.$$.fragment,t),g=!0)},o(t){v(c.$$.fragment,t),g=!1},d(t){t&&s(o),t&&s(p),y(c,t)}}}function lm(T){let o,f;return o=new E({props:{code:`# target is "nice puppet"
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
`}}),{c(){k(o.$$.fragment)},l(p){q(o.$$.fragment,p)},m(p,c){$(o,p,c),f=!0},p:B,i(p){f||(w(o.$$.fragment,p),f=!0)},o(p){v(o.$$.fragment,p),f=!1},d(p){y(o,p)}}}function dm(T){let o,f,p,c,g,t,u,j,va,hr,ce,Ce,On,jt,ya,Rn,Ta,mr,oe,Sa,Mt,Ba,Ea,xt,ja,Ma,fr,nn,xa,gr,on,Wn,Fa,_r,rn,Ca,br,re,Kn,Pa,Aa,Hn,La,Na,Ft,Ia,Qn,Da,Oa,zr,Pe,Ra,Ct,Wa,Ka,kr,pe,Ae,Un,Pt,Ha,Vn,Qa,qr,U,At,Ua,ue,Va,an,Ga,Ja,Lt,Xa,Ya,Za,he,ei,ln,ti,si,dn,ni,oi,ri,Le,ai,Gn,ii,$r,me,Ne,Jn,Nt,li,Xn,di,wr,M,It,ci,Yn,pi,ui,Ie,cn,hi,mi,pn,fi,gi,_i,Zn,eo,bi,zi,Dt,ki,un,qi,$i,wi,ae,Ot,vi,to,yi,Ti,Rt,hn,Si,so,Bi,Ei,mn,ji,no,Mi,xi,De,Wt,Fi,Kt,Ci,oo,Pi,Ai,Li,ee,Ht,Ni,ro,Ii,Di,Oe,Oi,fe,Ri,ao,Wi,Ki,io,Hi,Qi,Ui,fn,Qt,vr,ge,Re,lo,Ut,Vi,co,Gi,yr,Y,Vt,Ji,Gt,Xi,po,Yi,Zi,el,We,gn,tl,sl,_n,nl,ol,rl,Jt,al,bn,il,ll,Tr,_e,Ke,uo,Xt,dl,ho,cl,Sr,x,Yt,pl,mo,ul,hl,Zt,ml,es,fl,gl,_l,ts,bl,zn,zl,kl,ql,ss,$l,ns,wl,vl,yl,os,Tl,fo,Sl,Bl,El,He,jl,Qe,Ml,te,rs,xl,be,Fl,kn,Cl,Pl,go,Al,Ll,Nl,Ue,Il,Ve,Br,ze,Ge,_o,as,Dl,bo,Ol,Er,F,is,Rl,ls,Wl,zo,Kl,Hl,Ql,ds,Ul,cs,Vl,Gl,Jl,ps,Xl,qn,Yl,Zl,ed,us,td,hs,sd,nd,od,ms,rd,ko,ad,id,ld,Je,dd,Xe,cd,V,fs,pd,ke,ud,$n,hd,md,qo,fd,gd,_d,Ye,bd,Ze,zd,et,jr,qe,tt,$o,gs,kd,wo,qd,Mr,C,_s,$d,vo,wd,vd,bs,yd,zs,Td,Sd,Bd,ks,Ed,wn,jd,Md,xd,qs,Fd,$s,Cd,Pd,Ad,ws,Ld,yo,Nd,Id,Dd,st,Od,nt,Rd,I,vs,Wd,$e,Kd,vn,Hd,Qd,To,Ud,Vd,Gd,ot,Jd,rt,Xd,at,Yd,it,Zd,lt,xr,we,dt,So,ys,ec,Bo,tc,Fr,P,Ts,sc,Eo,nc,oc,Ss,rc,Bs,ac,ic,lc,Es,dc,yn,cc,pc,uc,js,hc,Ms,mc,fc,gc,xs,_c,jo,bc,zc,kc,ct,qc,pt,$c,se,Fs,wc,ve,vc,Tn,yc,Tc,Mo,Sc,Bc,Ec,ut,jc,ht,Cr,ye,mt,xo,Cs,Mc,Fo,xc,Pr,A,Ps,Fc,Co,Cc,Pc,As,Ac,Ls,Lc,Nc,Ic,Ns,Dc,Sn,Oc,Rc,Wc,Is,Kc,Ds,Hc,Qc,Uc,Os,Vc,Po,Gc,Jc,Xc,ft,Yc,gt,Zc,G,Rs,ep,Te,tp,Bn,sp,np,Ao,op,rp,ap,_t,ip,bt,lp,zt,Ar,Se,kt,Lo,Ws,dp,No,cp,Lr,L,Ks,pp,Be,up,Io,hp,mp,Do,fp,gp,_p,Hs,bp,Qs,zp,kp,qp,Us,$p,En,wp,vp,yp,Vs,Tp,Gs,Sp,Bp,Ep,Js,jp,Oo,Mp,xp,Fp,qt,Cp,$t,Pp,J,Xs,Ap,Ee,Lp,jn,Np,Ip,Ro,Dp,Op,Rp,wt,Wp,vt,Kp,yt,Nr;return t=new ne({}),jt=new ne({}),Pt=new ne({}),At=new N({props:{name:"class transformers.SqueezeBertConfig",anchor:"transformers.SqueezeBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 768"},{name:"q_groups",val:" = 4"},{name:"k_groups",val:" = 4"},{name:"v_groups",val:" = 4"},{name:"post_attention_groups",val:" = 1"},{name:"intermediate_groups",val:" = 4"},{name:"output_groups",val:" = 4"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the SqueezeBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertModel">SqueezeBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.SqueezeBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.SqueezeBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SqueezeBertConfig.layer_norm_eps",description:"<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;",name:"layer_norm_eps"},{anchor:"transformers.SqueezeBertConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The ID of the token in the word embedding to use as padding.`,name:"pad_token_id"},{anchor:"transformers.SqueezeBertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
The dimension of the word embedding vectors.`,name:"embedding_size"},{anchor:"transformers.SqueezeBertConfig.q_groups",description:`<strong>q_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in Q layer.`,name:"q_groups"},{anchor:"transformers.SqueezeBertConfig.k_groups",description:`<strong>k_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in K layer.`,name:"k_groups"},{anchor:"transformers.SqueezeBertConfig.v_groups",description:`<strong>v_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in V layer.`,name:"v_groups"},{anchor:"transformers.SqueezeBertConfig.post_attention_groups",description:`<strong>post_attention_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of groups in the first feed forward network layer.`,name:"post_attention_groups"},{anchor:"transformers.SqueezeBertConfig.intermediate_groups",description:`<strong>intermediate_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in the second feed forward network layer.`,name:"intermediate_groups"},{anchor:"transformers.SqueezeBertConfig.output_groups",description:`<strong>output_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in the third feed forward network layer.`,name:"output_groups"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/configuration_squeezebert.py#L37"}}),Le=new S({props:{anchor:"transformers.SqueezeBertConfig.example",$$slots:{default:[Mh]},$$scope:{ctx:T}}}),Nt=new ne({}),It=new N({props:{name:"class transformers.SqueezeBertTokenizer",anchor:"transformers.SqueezeBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/tokenization_squeezebert.py#L51"}}),Ot=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wt=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ht=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oe=new S({props:{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[xh]},$$scope:{ctx:T}}}),Qt=new N({props:{name:"save_vocabulary",anchor:"transformers.SqueezeBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L350"}}),Ut=new ne({}),Vt=new N({props:{name:"class transformers.SqueezeBertTokenizerFast",anchor:"transformers.SqueezeBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/tokenization_squeezebert_fast.py#L63"}}),Xt=new ne({}),Yt=new N({props:{name:"class transformers.SqueezeBertModel",anchor:"transformers.SqueezeBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L549"}}),He=new S({props:{anchor:"transformers.SqueezeBertModel.example",$$slots:{default:[Fh]},$$scope:{ctx:T}}}),Qe=new S({props:{anchor:"transformers.SqueezeBertModel.example-2",$$slots:{default:[Ch]},$$scope:{ctx:T}}}),rs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L574",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new Dn({props:{$$slots:{default:[Ph]},$$scope:{ctx:T}}}),Ve=new S({props:{anchor:"transformers.SqueezeBertModel.forward.example",$$slots:{default:[Ah]},$$scope:{ctx:T}}}),as=new ne({}),is=new N({props:{name:"class transformers.SqueezeBertForMaskedLM",anchor:"transformers.SqueezeBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L649"}}),Je=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.example",$$slots:{default:[Lh]},$$scope:{ctx:T}}}),Xe=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.example-2",$$slots:{default:[Nh]},$$scope:{ctx:T}}}),fs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L668",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ye=new Dn({props:{$$slots:{default:[Ih]},$$scope:{ctx:T}}}),Ze=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.forward.example",$$slots:{default:[Dh]},$$scope:{ctx:T}}}),et=new S({props:{anchor:"transformers.SqueezeBertForMaskedLM.forward.example-2",$$slots:{default:[Oh]},$$scope:{ctx:T}}}),gs=new ne({}),_s=new N({props:{name:"class transformers.SqueezeBertForSequenceClassification",anchor:"transformers.SqueezeBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L735"}}),st=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.example",$$slots:{default:[Rh]},$$scope:{ctx:T}}}),nt=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.example-2",$$slots:{default:[Wh]},$$scope:{ctx:T}}}),vs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L748",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ot=new Dn({props:{$$slots:{default:[Kh]},$$scope:{ctx:T}}}),rt=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example",$$slots:{default:[Hh]},$$scope:{ctx:T}}}),at=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-2",$$slots:{default:[Qh]},$$scope:{ctx:T}}}),it=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-3",$$slots:{default:[Uh]},$$scope:{ctx:T}}}),lt=new S({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-4",$$slots:{default:[Vh]},$$scope:{ctx:T}}}),ys=new ne({}),Ts=new N({props:{name:"class transformers.SqueezeBertForMultipleChoice",anchor:"transformers.SqueezeBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L835"}}),ct=new S({props:{anchor:"transformers.SqueezeBertForMultipleChoice.example",$$slots:{default:[Gh]},$$scope:{ctx:T}}}),pt=new S({props:{anchor:"transformers.SqueezeBertForMultipleChoice.example-2",$$slots:{default:[Jh]},$$scope:{ctx:T}}}),Fs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L846",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ut=new Dn({props:{$$slots:{default:[Xh]},$$scope:{ctx:T}}}),ht=new S({props:{anchor:"transformers.SqueezeBertForMultipleChoice.forward.example",$$slots:{default:[Yh]},$$scope:{ctx:T}}}),Cs=new ne({}),Ps=new N({props:{name:"class transformers.SqueezeBertForTokenClassification",anchor:"transformers.SqueezeBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L929"}}),ft=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.example",$$slots:{default:[Zh]},$$scope:{ctx:T}}}),gt=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.example-2",$$slots:{default:[em]},$$scope:{ctx:T}}}),Rs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L941",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_t=new Dn({props:{$$slots:{default:[tm]},$$scope:{ctx:T}}}),bt=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.forward.example",$$slots:{default:[sm]},$$scope:{ctx:T}}}),zt=new S({props:{anchor:"transformers.SqueezeBertForTokenClassification.forward.example-2",$$slots:{default:[nm]},$$scope:{ctx:T}}}),Ws=new ne({}),Ks=new N({props:{name:"class transformers.SqueezeBertForQuestionAnswering",anchor:"transformers.SqueezeBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L1008"}}),qt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.example",$$slots:{default:[om]},$$scope:{ctx:T}}}),$t=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.example-2",$$slots:{default:[rm]},$$scope:{ctx:T}}}),Xs=new N({props:{name:"forward",anchor:"transformers.SqueezeBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/squeezebert/modeling_squeezebert.py#L1019",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wt=new Dn({props:{$$slots:{default:[am]},$$scope:{ctx:T}}}),vt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.example",$$slots:{default:[im]},$$scope:{ctx:T}}}),yt=new S({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.example-2",$$slots:{default:[lm]},$$scope:{ctx:T}}}),{c(){o=i("meta"),f=h(),p=i("h1"),c=i("a"),g=i("span"),k(t.$$.fragment),u=h(),j=i("span"),va=r("SqueezeBERT"),hr=h(),ce=i("h2"),Ce=i("a"),On=i("span"),k(jt.$$.fragment),ya=h(),Rn=i("span"),Ta=r("Overview"),mr=h(),oe=i("p"),Sa=r("The SqueezeBERT model was proposed in "),Mt=i("a"),Ba=r("SqueezeBERT: What can computer vision teach NLP about efficient neural networks?"),Ea=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, Kurt W. Keutzer. It\u2019s a
bidirectional transformer similar to the BERT model. The key difference between the BERT architecture and the
SqueezeBERT architecture is that SqueezeBERT uses `),xt=i("a"),ja=r("grouped convolutions"),Ma=r(`
instead of fully-connected layers for the Q, K, V and FFN layers.`),fr=h(),nn=i("p"),xa=r("The abstract from the paper is the following:"),gr=h(),on=i("p"),Wn=i("em"),Fa=r(`Humans read and write hundreds of billions of messages every day. Further, due to the availability of large datasets,
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
set. The SqueezeBERT code will be released.`),_r=h(),rn=i("p"),Ca=r("Tips:"),br=h(),re=i("ul"),Kn=i("li"),Pa=r(`SqueezeBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right
rather than the left.`),Aa=h(),Hn=i("li"),La=r(`SqueezeBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),Na=h(),Ft=i("li"),Ia=r(`For best results when finetuning on sequence classification tasks, it is recommended to start with the
`),Qn=i("em"),Da=r("squeezebert/squeezebert-mnli-headless"),Oa=r(" checkpoint."),zr=h(),Pe=i("p"),Ra=r("This model was contributed by "),Ct=i("a"),Wa=r("forresti"),Ka=r("."),kr=h(),pe=i("h2"),Ae=i("a"),Un=i("span"),k(Pt.$$.fragment),Ha=h(),Vn=i("span"),Qa=r("SqueezeBertConfig"),qr=h(),U=i("div"),k(At.$$.fragment),Ua=h(),ue=i("p"),Va=r("This is the configuration class to store the configuration of a "),an=i("a"),Ga=r("SqueezeBertModel"),Ja=r(`. It is used to instantiate a
SqueezeBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the SqueezeBERT
`),Lt=i("a"),Xa=r("squeezebert/squeezebert-uncased"),Ya=r(" architecture."),Za=h(),he=i("p"),ei=r("Configuration objects inherit from "),ln=i("a"),ti=r("PretrainedConfig"),si=r(` and can be used to control the model outputs. Read the
documentation from `),dn=i("a"),ni=r("PretrainedConfig"),oi=r(" for more information."),ri=h(),k(Le.$$.fragment),ai=h(),Gn=i("p"),ii=r(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),$r=h(),me=i("h2"),Ne=i("a"),Jn=i("span"),k(Nt.$$.fragment),li=h(),Xn=i("span"),di=r("SqueezeBertTokenizer"),wr=h(),M=i("div"),k(It.$$.fragment),ci=h(),Yn=i("p"),pi=r("Constructs a SqueezeBert tokenizer."),ui=h(),Ie=i("p"),cn=i("a"),hi=r("SqueezeBertTokenizer"),mi=r(" is identical to "),pn=i("a"),fi=r("BertTokenizer"),gi=r(" and runs end-to-end tokenization: punctuation splitting"),_i=h(),Zn=i("ul"),eo=i("li"),bi=r("wordpiece."),zi=h(),Dt=i("p"),ki=r("Refer to superclass "),un=i("a"),qi=r("BertTokenizer"),$i=r(" for usage examples and documentation concerning parameters."),wi=h(),ae=i("div"),k(Ot.$$.fragment),vi=h(),to=i("p"),yi=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ti=h(),Rt=i("ul"),hn=i("li"),Si=r("single sequence: "),so=i("code"),Bi=r("[CLS] X [SEP]"),Ei=h(),mn=i("li"),ji=r("pair of sequences: "),no=i("code"),Mi=r("[CLS] A [SEP] B [SEP]"),xi=h(),De=i("div"),k(Wt.$$.fragment),Fi=h(),Kt=i("p"),Ci=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),oo=i("code"),Pi=r("prepare_for_model"),Ai=r(" method."),Li=h(),ee=i("div"),k(Ht.$$.fragment),Ni=h(),ro=i("p"),Ii=r("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Di=h(),k(Oe.$$.fragment),Oi=h(),fe=i("p"),Ri=r("If "),ao=i("code"),Wi=r("token_ids_1"),Ki=r(" is "),io=i("code"),Hi=r("None"),Qi=r(", this method only returns the first portion of the mask (0s)."),Ui=h(),fn=i("div"),k(Qt.$$.fragment),vr=h(),ge=i("h2"),Re=i("a"),lo=i("span"),k(Ut.$$.fragment),Vi=h(),co=i("span"),Gi=r("SqueezeBertTokenizerFast"),yr=h(),Y=i("div"),k(Vt.$$.fragment),Ji=h(),Gt=i("p"),Xi=r("Constructs a \u201CFast\u201D SqueezeBert tokenizer (backed by HuggingFace\u2019s "),po=i("em"),Yi=r("tokenizers"),Zi=r(" library)."),el=h(),We=i("p"),gn=i("a"),tl=r("SqueezeBertTokenizerFast"),sl=r(" is identical to "),_n=i("a"),nl=r("BertTokenizerFast"),ol=r(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),rl=h(),Jt=i("p"),al=r("Refer to superclass "),bn=i("a"),il=r("BertTokenizerFast"),ll=r(" for usage examples and documentation concerning parameters."),Tr=h(),_e=i("h2"),Ke=i("a"),uo=i("span"),k(Xt.$$.fragment),dl=h(),ho=i("span"),cl=r("SqueezeBertModel"),Sr=h(),x=i("div"),k(Yt.$$.fragment),pl=h(),mo=i("p"),ul=r("The bare SqueezeBERT Model transformer outputting raw hidden-states without any specific head on top."),hl=h(),Zt=i("p"),ml=r("The SqueezeBERT model was proposed in "),es=i("a"),fl=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),gl=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),_l=h(),ts=i("p"),bl=r("This model inherits from "),zn=i("a"),zl=r("PreTrainedModel"),kl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql=h(),ss=i("p"),$l=r("This model is also a PyTorch "),ns=i("a"),wl=r("torch.nn.Module"),vl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yl=h(),os=i("p"),Tl=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),fo=i("em"),Sl=r("squeezebert/squeezebert-mnli-headless"),Bl=r(" checkpoint as a starting point."),El=h(),k(He.$$.fragment),jl=h(),k(Qe.$$.fragment),Ml=h(),te=i("div"),k(rs.$$.fragment),xl=h(),be=i("p"),Fl=r("The "),kn=i("a"),Cl=r("SqueezeBertModel"),Pl=r(" forward method, overrides the "),go=i("code"),Al=r("__call__"),Ll=r(" special method."),Nl=h(),k(Ue.$$.fragment),Il=h(),k(Ve.$$.fragment),Br=h(),ze=i("h2"),Ge=i("a"),_o=i("span"),k(as.$$.fragment),Dl=h(),bo=i("span"),Ol=r("SqueezeBertForMaskedLM"),Er=h(),F=i("div"),k(is.$$.fragment),Rl=h(),ls=i("p"),Wl=r("SqueezeBERT Model with a "),zo=i("code"),Kl=r("language modeling"),Hl=r(" head on top."),Ql=h(),ds=i("p"),Ul=r("The SqueezeBERT model was proposed in "),cs=i("a"),Vl=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Gl=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Jl=h(),ps=i("p"),Xl=r("This model inherits from "),qn=i("a"),Yl=r("PreTrainedModel"),Zl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ed=h(),us=i("p"),td=r("This model is also a PyTorch "),hs=i("a"),sd=r("torch.nn.Module"),nd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),od=h(),ms=i("p"),rd=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),ko=i("em"),ad=r("squeezebert/squeezebert-mnli-headless"),id=r(" checkpoint as a starting point."),ld=h(),k(Je.$$.fragment),dd=h(),k(Xe.$$.fragment),cd=h(),V=i("div"),k(fs.$$.fragment),pd=h(),ke=i("p"),ud=r("The "),$n=i("a"),hd=r("SqueezeBertForMaskedLM"),md=r(" forward method, overrides the "),qo=i("code"),fd=r("__call__"),gd=r(" special method."),_d=h(),k(Ye.$$.fragment),bd=h(),k(Ze.$$.fragment),zd=h(),k(et.$$.fragment),jr=h(),qe=i("h2"),tt=i("a"),$o=i("span"),k(gs.$$.fragment),kd=h(),wo=i("span"),qd=r("SqueezeBertForSequenceClassification"),Mr=h(),C=i("div"),k(_s.$$.fragment),$d=h(),vo=i("p"),wd=r(`SqueezeBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vd=h(),bs=i("p"),yd=r("The SqueezeBERT model was proposed in "),zs=i("a"),Td=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Sd=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Bd=h(),ks=i("p"),Ed=r("This model inherits from "),wn=i("a"),jd=r("PreTrainedModel"),Md=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd=h(),qs=i("p"),Fd=r("This model is also a PyTorch "),$s=i("a"),Cd=r("torch.nn.Module"),Pd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ad=h(),ws=i("p"),Ld=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),yo=i("em"),Nd=r("squeezebert/squeezebert-mnli-headless"),Id=r(" checkpoint as a starting point."),Dd=h(),k(st.$$.fragment),Od=h(),k(nt.$$.fragment),Rd=h(),I=i("div"),k(vs.$$.fragment),Wd=h(),$e=i("p"),Kd=r("The "),vn=i("a"),Hd=r("SqueezeBertForSequenceClassification"),Qd=r(" forward method, overrides the "),To=i("code"),Ud=r("__call__"),Vd=r(" special method."),Gd=h(),k(ot.$$.fragment),Jd=h(),k(rt.$$.fragment),Xd=h(),k(at.$$.fragment),Yd=h(),k(it.$$.fragment),Zd=h(),k(lt.$$.fragment),xr=h(),we=i("h2"),dt=i("a"),So=i("span"),k(ys.$$.fragment),ec=h(),Bo=i("span"),tc=r("SqueezeBertForMultipleChoice"),Fr=h(),P=i("div"),k(Ts.$$.fragment),sc=h(),Eo=i("p"),nc=r(`SqueezeBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),oc=h(),Ss=i("p"),rc=r("The SqueezeBERT model was proposed in "),Bs=i("a"),ac=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),ic=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),lc=h(),Es=i("p"),dc=r("This model inherits from "),yn=i("a"),cc=r("PreTrainedModel"),pc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uc=h(),js=i("p"),hc=r("This model is also a PyTorch "),Ms=i("a"),mc=r("torch.nn.Module"),fc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gc=h(),xs=i("p"),_c=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),jo=i("em"),bc=r("squeezebert/squeezebert-mnli-headless"),zc=r(" checkpoint as a starting point."),kc=h(),k(ct.$$.fragment),qc=h(),k(pt.$$.fragment),$c=h(),se=i("div"),k(Fs.$$.fragment),wc=h(),ve=i("p"),vc=r("The "),Tn=i("a"),yc=r("SqueezeBertForMultipleChoice"),Tc=r(" forward method, overrides the "),Mo=i("code"),Sc=r("__call__"),Bc=r(" special method."),Ec=h(),k(ut.$$.fragment),jc=h(),k(ht.$$.fragment),Cr=h(),ye=i("h2"),mt=i("a"),xo=i("span"),k(Cs.$$.fragment),Mc=h(),Fo=i("span"),xc=r("SqueezeBertForTokenClassification"),Pr=h(),A=i("div"),k(Ps.$$.fragment),Fc=h(),Co=i("p"),Cc=r(`SqueezeBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Pc=h(),As=i("p"),Ac=r("The SqueezeBERT model was proposed in "),Ls=i("a"),Lc=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Nc=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Ic=h(),Ns=i("p"),Dc=r("This model inherits from "),Sn=i("a"),Oc=r("PreTrainedModel"),Rc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc=h(),Is=i("p"),Kc=r("This model is also a PyTorch "),Ds=i("a"),Hc=r("torch.nn.Module"),Qc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc=h(),Os=i("p"),Vc=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Po=i("em"),Gc=r("squeezebert/squeezebert-mnli-headless"),Jc=r(" checkpoint as a starting point."),Xc=h(),k(ft.$$.fragment),Yc=h(),k(gt.$$.fragment),Zc=h(),G=i("div"),k(Rs.$$.fragment),ep=h(),Te=i("p"),tp=r("The "),Bn=i("a"),sp=r("SqueezeBertForTokenClassification"),np=r(" forward method, overrides the "),Ao=i("code"),op=r("__call__"),rp=r(" special method."),ap=h(),k(_t.$$.fragment),ip=h(),k(bt.$$.fragment),lp=h(),k(zt.$$.fragment),Ar=h(),Se=i("h2"),kt=i("a"),Lo=i("span"),k(Ws.$$.fragment),dp=h(),No=i("span"),cp=r("SqueezeBertForQuestionAnswering"),Lr=h(),L=i("div"),k(Ks.$$.fragment),pp=h(),Be=i("p"),up=r(`SqueezeBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Io=i("code"),hp=r("span start logits"),mp=r(" and "),Do=i("code"),fp=r("span end logits"),gp=r(")."),_p=h(),Hs=i("p"),bp=r("The SqueezeBERT model was proposed in "),Qs=i("a"),zp=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),kp=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),qp=h(),Us=i("p"),$p=r("This model inherits from "),En=i("a"),wp=r("PreTrainedModel"),vp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp=h(),Vs=i("p"),Tp=r("This model is also a PyTorch "),Gs=i("a"),Sp=r("torch.nn.Module"),Bp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ep=h(),Js=i("p"),jp=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Oo=i("em"),Mp=r("squeezebert/squeezebert-mnli-headless"),xp=r(" checkpoint as a starting point."),Fp=h(),k(qt.$$.fragment),Cp=h(),k($t.$$.fragment),Pp=h(),J=i("div"),k(Xs.$$.fragment),Ap=h(),Ee=i("p"),Lp=r("The "),jn=i("a"),Np=r("SqueezeBertForQuestionAnswering"),Ip=r(" forward method, overrides the "),Ro=i("code"),Dp=r("__call__"),Op=r(" special method."),Rp=h(),k(wt.$$.fragment),Wp=h(),k(vt.$$.fragment),Kp=h(),k(yt.$$.fragment),this.h()},l(n){const _=Eh('[data-svelte="svelte-1phssyn"]',document.head);o=l(_,"META",{name:!0,content:!0}),_.forEach(s),f=m(n),p=l(n,"H1",{class:!0});var Ys=d(p);c=l(Ys,"A",{id:!0,class:!0,href:!0});var Wo=d(c);g=l(Wo,"SPAN",{});var Ko=d(g);q(t.$$.fragment,Ko),Ko.forEach(s),Wo.forEach(s),u=m(Ys),j=l(Ys,"SPAN",{});var Ho=d(j);va=a(Ho,"SqueezeBERT"),Ho.forEach(s),Ys.forEach(s),hr=m(n),ce=l(n,"H2",{class:!0});var Zs=d(ce);Ce=l(Zs,"A",{id:!0,class:!0,href:!0});var Qo=d(Ce);On=l(Qo,"SPAN",{});var Uo=d(On);q(jt.$$.fragment,Uo),Uo.forEach(s),Qo.forEach(s),ya=m(Zs),Rn=l(Zs,"SPAN",{});var Vo=d(Rn);Ta=a(Vo,"Overview"),Vo.forEach(s),Zs.forEach(s),mr=m(n),oe=l(n,"P",{});var je=d(oe);Sa=a(je,"The SqueezeBERT model was proposed in "),Mt=l(je,"A",{href:!0,rel:!0});var Go=d(Mt);Ba=a(Go,"SqueezeBERT: What can computer vision teach NLP about efficient neural networks?"),Go.forEach(s),Ea=a(je,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, Kurt W. Keutzer. It\u2019s a
bidirectional transformer similar to the BERT model. The key difference between the BERT architecture and the
SqueezeBERT architecture is that SqueezeBERT uses `),xt=l(je,"A",{href:!0,rel:!0});var Jo=d(xt);ja=a(Jo,"grouped convolutions"),Jo.forEach(s),Ma=a(je,`
instead of fully-connected layers for the Q, K, V and FFN layers.`),je.forEach(s),fr=m(n),nn=l(n,"P",{});var Xo=d(nn);xa=a(Xo,"The abstract from the paper is the following:"),Xo.forEach(s),gr=m(n),on=l(n,"P",{});var Yo=d(on);Wn=l(Yo,"EM",{});var Zo=d(Wn);Fa=a(Zo,`Humans read and write hundreds of billions of messages every day. Further, due to the availability of large datasets,
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
set. The SqueezeBERT code will be released.`),Zo.forEach(s),Yo.forEach(s),_r=m(n),rn=l(n,"P",{});var er=d(rn);Ca=a(er,"Tips:"),er.forEach(s),br=m(n),re=l(n,"UL",{});var Me=d(re);Kn=l(Me,"LI",{});var tr=d(Kn);Pa=a(tr,`SqueezeBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right
rather than the left.`),tr.forEach(s),Aa=m(Me),Hn=l(Me,"LI",{});var sr=d(Hn);La=a(sr,`SqueezeBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),sr.forEach(s),Na=m(Me),Ft=l(Me,"LI",{});var en=d(Ft);Ia=a(en,`For best results when finetuning on sequence classification tasks, it is recommended to start with the
`),Qn=l(en,"EM",{});var nr=d(Qn);Da=a(nr,"squeezebert/squeezebert-mnli-headless"),nr.forEach(s),Oa=a(en," checkpoint."),en.forEach(s),Me.forEach(s),zr=m(n),Pe=l(n,"P",{});var tn=d(Pe);Ra=a(tn,"This model was contributed by "),Ct=l(tn,"A",{href:!0,rel:!0});var or=d(Ct);Wa=a(or,"forresti"),or.forEach(s),Ka=a(tn,"."),tn.forEach(s),kr=m(n),pe=l(n,"H2",{class:!0});var sn=d(pe);Ae=l(sn,"A",{id:!0,class:!0,href:!0});var rr=d(Ae);Un=l(rr,"SPAN",{});var ar=d(Un);q(Pt.$$.fragment,ar),ar.forEach(s),rr.forEach(s),Ha=m(sn),Vn=l(sn,"SPAN",{});var ir=d(Vn);Qa=a(ir,"SqueezeBertConfig"),ir.forEach(s),sn.forEach(s),qr=m(n),U=l(n,"DIV",{class:!0});var Z=d(U);q(At.$$.fragment,Z),Ua=m(Z),ue=l(Z,"P",{});var xe=d(ue);Va=a(xe,"This is the configuration class to store the configuration of a "),an=l(xe,"A",{href:!0});var lr=d(an);Ga=a(lr,"SqueezeBertModel"),lr.forEach(s),Ja=a(xe,`. It is used to instantiate a
SqueezeBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the SqueezeBERT
`),Lt=l(xe,"A",{href:!0,rel:!0});var dr=d(Lt);Xa=a(dr,"squeezebert/squeezebert-uncased"),dr.forEach(s),Ya=a(xe," architecture."),xe.forEach(s),Za=m(Z),he=l(Z,"P",{});var Fe=d(he);ei=a(Fe,"Configuration objects inherit from "),ln=l(Fe,"A",{href:!0});var cr=d(ln);ti=a(cr,"PretrainedConfig"),cr.forEach(s),si=a(Fe,` and can be used to control the model outputs. Read the
documentation from `),dn=l(Fe,"A",{href:!0});var Up=d(dn);ni=a(Up,"PretrainedConfig"),Up.forEach(s),oi=a(Fe," for more information."),Fe.forEach(s),ri=m(Z),q(Le.$$.fragment,Z),ai=m(Z),Gn=l(Z,"P",{});var Vp=d(Gn);ii=a(Vp,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Vp.forEach(s),Z.forEach(s),$r=m(n),me=l(n,"H2",{class:!0});var Ir=d(me);Ne=l(Ir,"A",{id:!0,class:!0,href:!0});var Gp=d(Ne);Jn=l(Gp,"SPAN",{});var Jp=d(Jn);q(Nt.$$.fragment,Jp),Jp.forEach(s),Gp.forEach(s),li=m(Ir),Xn=l(Ir,"SPAN",{});var Xp=d(Xn);di=a(Xp,"SqueezeBertTokenizer"),Xp.forEach(s),Ir.forEach(s),wr=m(n),M=l(n,"DIV",{class:!0});var D=d(M);q(It.$$.fragment,D),ci=m(D),Yn=l(D,"P",{});var Yp=d(Yn);pi=a(Yp,"Constructs a SqueezeBert tokenizer."),Yp.forEach(s),ui=m(D),Ie=l(D,"P",{});var pr=d(Ie);cn=l(pr,"A",{href:!0});var Zp=d(cn);hi=a(Zp,"SqueezeBertTokenizer"),Zp.forEach(s),mi=a(pr," is identical to "),pn=l(pr,"A",{href:!0});var eu=d(pn);fi=a(eu,"BertTokenizer"),eu.forEach(s),gi=a(pr," and runs end-to-end tokenization: punctuation splitting"),pr.forEach(s),_i=m(D),Zn=l(D,"UL",{});var tu=d(Zn);eo=l(tu,"LI",{});var su=d(eo);bi=a(su,"wordpiece."),su.forEach(s),tu.forEach(s),zi=m(D),Dt=l(D,"P",{});var Dr=d(Dt);ki=a(Dr,"Refer to superclass "),un=l(Dr,"A",{href:!0});var nu=d(un);qi=a(nu,"BertTokenizer"),nu.forEach(s),$i=a(Dr," for usage examples and documentation concerning parameters."),Dr.forEach(s),wi=m(D),ae=l(D,"DIV",{class:!0});var Mn=d(ae);q(Ot.$$.fragment,Mn),vi=m(Mn),to=l(Mn,"P",{});var ou=d(to);yi=a(ou,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),ou.forEach(s),Ti=m(Mn),Rt=l(Mn,"UL",{});var Or=d(Rt);hn=l(Or,"LI",{});var Hp=d(hn);Si=a(Hp,"single sequence: "),so=l(Hp,"CODE",{});var ru=d(so);Bi=a(ru,"[CLS] X [SEP]"),ru.forEach(s),Hp.forEach(s),Ei=m(Or),mn=l(Or,"LI",{});var Qp=d(mn);ji=a(Qp,"pair of sequences: "),no=l(Qp,"CODE",{});var au=d(no);Mi=a(au,"[CLS] A [SEP] B [SEP]"),au.forEach(s),Qp.forEach(s),Or.forEach(s),Mn.forEach(s),xi=m(D),De=l(D,"DIV",{class:!0});var Rr=d(De);q(Wt.$$.fragment,Rr),Fi=m(Rr),Kt=l(Rr,"P",{});var Wr=d(Kt);Ci=a(Wr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),oo=l(Wr,"CODE",{});var iu=d(oo);Pi=a(iu,"prepare_for_model"),iu.forEach(s),Ai=a(Wr," method."),Wr.forEach(s),Rr.forEach(s),Li=m(D),ee=l(D,"DIV",{class:!0});var Tt=d(ee);q(Ht.$$.fragment,Tt),Ni=m(Tt),ro=l(Tt,"P",{});var lu=d(ro);Ii=a(lu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),lu.forEach(s),Di=m(Tt),q(Oe.$$.fragment,Tt),Oi=m(Tt),fe=l(Tt,"P",{});var xn=d(fe);Ri=a(xn,"If "),ao=l(xn,"CODE",{});var du=d(ao);Wi=a(du,"token_ids_1"),du.forEach(s),Ki=a(xn," is "),io=l(xn,"CODE",{});var cu=d(io);Hi=a(cu,"None"),cu.forEach(s),Qi=a(xn,", this method only returns the first portion of the mask (0s)."),xn.forEach(s),Tt.forEach(s),Ui=m(D),fn=l(D,"DIV",{class:!0});var pu=d(fn);q(Qt.$$.fragment,pu),pu.forEach(s),D.forEach(s),vr=m(n),ge=l(n,"H2",{class:!0});var Kr=d(ge);Re=l(Kr,"A",{id:!0,class:!0,href:!0});var uu=d(Re);lo=l(uu,"SPAN",{});var hu=d(lo);q(Ut.$$.fragment,hu),hu.forEach(s),uu.forEach(s),Vi=m(Kr),co=l(Kr,"SPAN",{});var mu=d(co);Gi=a(mu,"SqueezeBertTokenizerFast"),mu.forEach(s),Kr.forEach(s),yr=m(n),Y=l(n,"DIV",{class:!0});var St=d(Y);q(Vt.$$.fragment,St),Ji=m(St),Gt=l(St,"P",{});var Hr=d(Gt);Xi=a(Hr,"Constructs a \u201CFast\u201D SqueezeBert tokenizer (backed by HuggingFace\u2019s "),po=l(Hr,"EM",{});var fu=d(po);Yi=a(fu,"tokenizers"),fu.forEach(s),Zi=a(Hr," library)."),Hr.forEach(s),el=m(St),We=l(St,"P",{});var ur=d(We);gn=l(ur,"A",{href:!0});var gu=d(gn);tl=a(gu,"SqueezeBertTokenizerFast"),gu.forEach(s),sl=a(ur," is identical to "),_n=l(ur,"A",{href:!0});var _u=d(_n);nl=a(_u,"BertTokenizerFast"),_u.forEach(s),ol=a(ur,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),ur.forEach(s),rl=m(St),Jt=l(St,"P",{});var Qr=d(Jt);al=a(Qr,"Refer to superclass "),bn=l(Qr,"A",{href:!0});var bu=d(bn);il=a(bu,"BertTokenizerFast"),bu.forEach(s),ll=a(Qr," for usage examples and documentation concerning parameters."),Qr.forEach(s),St.forEach(s),Tr=m(n),_e=l(n,"H2",{class:!0});var Ur=d(_e);Ke=l(Ur,"A",{id:!0,class:!0,href:!0});var zu=d(Ke);uo=l(zu,"SPAN",{});var ku=d(uo);q(Xt.$$.fragment,ku),ku.forEach(s),zu.forEach(s),dl=m(Ur),ho=l(Ur,"SPAN",{});var qu=d(ho);cl=a(qu,"SqueezeBertModel"),qu.forEach(s),Ur.forEach(s),Sr=m(n),x=l(n,"DIV",{class:!0});var O=d(x);q(Yt.$$.fragment,O),pl=m(O),mo=l(O,"P",{});var $u=d(mo);ul=a($u,"The bare SqueezeBERT Model transformer outputting raw hidden-states without any specific head on top."),$u.forEach(s),hl=m(O),Zt=l(O,"P",{});var Vr=d(Zt);ml=a(Vr,"The SqueezeBERT model was proposed in "),es=l(Vr,"A",{href:!0,rel:!0});var wu=d(es);fl=a(wu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),wu.forEach(s),gl=a(Vr,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Vr.forEach(s),_l=m(O),ts=l(O,"P",{});var Gr=d(ts);bl=a(Gr,"This model inherits from "),zn=l(Gr,"A",{href:!0});var vu=d(zn);zl=a(vu,"PreTrainedModel"),vu.forEach(s),kl=a(Gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gr.forEach(s),ql=m(O),ss=l(O,"P",{});var Jr=d(ss);$l=a(Jr,"This model is also a PyTorch "),ns=l(Jr,"A",{href:!0,rel:!0});var yu=d(ns);wl=a(yu,"torch.nn.Module"),yu.forEach(s),vl=a(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(s),yl=m(O),os=l(O,"P",{});var Xr=d(os);Tl=a(Xr,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),fo=l(Xr,"EM",{});var Tu=d(fo);Sl=a(Tu,"squeezebert/squeezebert-mnli-headless"),Tu.forEach(s),Bl=a(Xr," checkpoint as a starting point."),Xr.forEach(s),El=m(O),q(He.$$.fragment,O),jl=m(O),q(Qe.$$.fragment,O),Ml=m(O),te=l(O,"DIV",{class:!0});var Bt=d(te);q(rs.$$.fragment,Bt),xl=m(Bt),be=l(Bt,"P",{});var Fn=d(be);Fl=a(Fn,"The "),kn=l(Fn,"A",{href:!0});var Su=d(kn);Cl=a(Su,"SqueezeBertModel"),Su.forEach(s),Pl=a(Fn," forward method, overrides the "),go=l(Fn,"CODE",{});var Bu=d(go);Al=a(Bu,"__call__"),Bu.forEach(s),Ll=a(Fn," special method."),Fn.forEach(s),Nl=m(Bt),q(Ue.$$.fragment,Bt),Il=m(Bt),q(Ve.$$.fragment,Bt),Bt.forEach(s),O.forEach(s),Br=m(n),ze=l(n,"H2",{class:!0});var Yr=d(ze);Ge=l(Yr,"A",{id:!0,class:!0,href:!0});var Eu=d(Ge);_o=l(Eu,"SPAN",{});var ju=d(_o);q(as.$$.fragment,ju),ju.forEach(s),Eu.forEach(s),Dl=m(Yr),bo=l(Yr,"SPAN",{});var Mu=d(bo);Ol=a(Mu,"SqueezeBertForMaskedLM"),Mu.forEach(s),Yr.forEach(s),Er=m(n),F=l(n,"DIV",{class:!0});var R=d(F);q(is.$$.fragment,R),Rl=m(R),ls=l(R,"P",{});var Zr=d(ls);Wl=a(Zr,"SqueezeBERT Model with a "),zo=l(Zr,"CODE",{});var xu=d(zo);Kl=a(xu,"language modeling"),xu.forEach(s),Hl=a(Zr," head on top."),Zr.forEach(s),Ql=m(R),ds=l(R,"P",{});var ea=d(ds);Ul=a(ea,"The SqueezeBERT model was proposed in "),cs=l(ea,"A",{href:!0,rel:!0});var Fu=d(cs);Vl=a(Fu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Fu.forEach(s),Gl=a(ea,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ea.forEach(s),Jl=m(R),ps=l(R,"P",{});var ta=d(ps);Xl=a(ta,"This model inherits from "),qn=l(ta,"A",{href:!0});var Cu=d(qn);Yl=a(Cu,"PreTrainedModel"),Cu.forEach(s),Zl=a(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(s),ed=m(R),us=l(R,"P",{});var sa=d(us);td=a(sa,"This model is also a PyTorch "),hs=l(sa,"A",{href:!0,rel:!0});var Pu=d(hs);sd=a(Pu,"torch.nn.Module"),Pu.forEach(s),nd=a(sa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa.forEach(s),od=m(R),ms=l(R,"P",{});var na=d(ms);rd=a(na,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),ko=l(na,"EM",{});var Au=d(ko);ad=a(Au,"squeezebert/squeezebert-mnli-headless"),Au.forEach(s),id=a(na," checkpoint as a starting point."),na.forEach(s),ld=m(R),q(Je.$$.fragment,R),dd=m(R),q(Xe.$$.fragment,R),cd=m(R),V=l(R,"DIV",{class:!0});var ie=d(V);q(fs.$$.fragment,ie),pd=m(ie),ke=l(ie,"P",{});var Cn=d(ke);ud=a(Cn,"The "),$n=l(Cn,"A",{href:!0});var Lu=d($n);hd=a(Lu,"SqueezeBertForMaskedLM"),Lu.forEach(s),md=a(Cn," forward method, overrides the "),qo=l(Cn,"CODE",{});var Nu=d(qo);fd=a(Nu,"__call__"),Nu.forEach(s),gd=a(Cn," special method."),Cn.forEach(s),_d=m(ie),q(Ye.$$.fragment,ie),bd=m(ie),q(Ze.$$.fragment,ie),zd=m(ie),q(et.$$.fragment,ie),ie.forEach(s),R.forEach(s),jr=m(n),qe=l(n,"H2",{class:!0});var oa=d(qe);tt=l(oa,"A",{id:!0,class:!0,href:!0});var Iu=d(tt);$o=l(Iu,"SPAN",{});var Du=d($o);q(gs.$$.fragment,Du),Du.forEach(s),Iu.forEach(s),kd=m(oa),wo=l(oa,"SPAN",{});var Ou=d(wo);qd=a(Ou,"SqueezeBertForSequenceClassification"),Ou.forEach(s),oa.forEach(s),Mr=m(n),C=l(n,"DIV",{class:!0});var W=d(C);q(_s.$$.fragment,W),$d=m(W),vo=l(W,"P",{});var Ru=d(vo);wd=a(Ru,`SqueezeBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ru.forEach(s),vd=m(W),bs=l(W,"P",{});var ra=d(bs);yd=a(ra,"The SqueezeBERT model was proposed in "),zs=l(ra,"A",{href:!0,rel:!0});var Wu=d(zs);Td=a(Wu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Wu.forEach(s),Sd=a(ra,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ra.forEach(s),Bd=m(W),ks=l(W,"P",{});var aa=d(ks);Ed=a(aa,"This model inherits from "),wn=l(aa,"A",{href:!0});var Ku=d(wn);jd=a(Ku,"PreTrainedModel"),Ku.forEach(s),Md=a(aa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aa.forEach(s),xd=m(W),qs=l(W,"P",{});var ia=d(qs);Fd=a(ia,"This model is also a PyTorch "),$s=l(ia,"A",{href:!0,rel:!0});var Hu=d($s);Cd=a(Hu,"torch.nn.Module"),Hu.forEach(s),Pd=a(ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ia.forEach(s),Ad=m(W),ws=l(W,"P",{});var la=d(ws);Ld=a(la,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),yo=l(la,"EM",{});var Qu=d(yo);Nd=a(Qu,"squeezebert/squeezebert-mnli-headless"),Qu.forEach(s),Id=a(la," checkpoint as a starting point."),la.forEach(s),Dd=m(W),q(st.$$.fragment,W),Od=m(W),q(nt.$$.fragment,W),Rd=m(W),I=l(W,"DIV",{class:!0});var X=d(I);q(vs.$$.fragment,X),Wd=m(X),$e=l(X,"P",{});var Pn=d($e);Kd=a(Pn,"The "),vn=l(Pn,"A",{href:!0});var Uu=d(vn);Hd=a(Uu,"SqueezeBertForSequenceClassification"),Uu.forEach(s),Qd=a(Pn," forward method, overrides the "),To=l(Pn,"CODE",{});var Vu=d(To);Ud=a(Vu,"__call__"),Vu.forEach(s),Vd=a(Pn," special method."),Pn.forEach(s),Gd=m(X),q(ot.$$.fragment,X),Jd=m(X),q(rt.$$.fragment,X),Xd=m(X),q(at.$$.fragment,X),Yd=m(X),q(it.$$.fragment,X),Zd=m(X),q(lt.$$.fragment,X),X.forEach(s),W.forEach(s),xr=m(n),we=l(n,"H2",{class:!0});var da=d(we);dt=l(da,"A",{id:!0,class:!0,href:!0});var Gu=d(dt);So=l(Gu,"SPAN",{});var Ju=d(So);q(ys.$$.fragment,Ju),Ju.forEach(s),Gu.forEach(s),ec=m(da),Bo=l(da,"SPAN",{});var Xu=d(Bo);tc=a(Xu,"SqueezeBertForMultipleChoice"),Xu.forEach(s),da.forEach(s),Fr=m(n),P=l(n,"DIV",{class:!0});var K=d(P);q(Ts.$$.fragment,K),sc=m(K),Eo=l(K,"P",{});var Yu=d(Eo);nc=a(Yu,`SqueezeBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Yu.forEach(s),oc=m(K),Ss=l(K,"P",{});var ca=d(Ss);rc=a(ca,"The SqueezeBERT model was proposed in "),Bs=l(ca,"A",{href:!0,rel:!0});var Zu=d(Bs);ac=a(Zu,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Zu.forEach(s),ic=a(ca,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ca.forEach(s),lc=m(K),Es=l(K,"P",{});var pa=d(Es);dc=a(pa,"This model inherits from "),yn=l(pa,"A",{href:!0});var eh=d(yn);cc=a(eh,"PreTrainedModel"),eh.forEach(s),pc=a(pa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pa.forEach(s),uc=m(K),js=l(K,"P",{});var ua=d(js);hc=a(ua,"This model is also a PyTorch "),Ms=l(ua,"A",{href:!0,rel:!0});var th=d(Ms);mc=a(th,"torch.nn.Module"),th.forEach(s),fc=a(ua,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ua.forEach(s),gc=m(K),xs=l(K,"P",{});var ha=d(xs);_c=a(ha,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),jo=l(ha,"EM",{});var sh=d(jo);bc=a(sh,"squeezebert/squeezebert-mnli-headless"),sh.forEach(s),zc=a(ha," checkpoint as a starting point."),ha.forEach(s),kc=m(K),q(ct.$$.fragment,K),qc=m(K),q(pt.$$.fragment,K),$c=m(K),se=l(K,"DIV",{class:!0});var Et=d(se);q(Fs.$$.fragment,Et),wc=m(Et),ve=l(Et,"P",{});var An=d(ve);vc=a(An,"The "),Tn=l(An,"A",{href:!0});var nh=d(Tn);yc=a(nh,"SqueezeBertForMultipleChoice"),nh.forEach(s),Tc=a(An," forward method, overrides the "),Mo=l(An,"CODE",{});var oh=d(Mo);Sc=a(oh,"__call__"),oh.forEach(s),Bc=a(An," special method."),An.forEach(s),Ec=m(Et),q(ut.$$.fragment,Et),jc=m(Et),q(ht.$$.fragment,Et),Et.forEach(s),K.forEach(s),Cr=m(n),ye=l(n,"H2",{class:!0});var ma=d(ye);mt=l(ma,"A",{id:!0,class:!0,href:!0});var rh=d(mt);xo=l(rh,"SPAN",{});var ah=d(xo);q(Cs.$$.fragment,ah),ah.forEach(s),rh.forEach(s),Mc=m(ma),Fo=l(ma,"SPAN",{});var ih=d(Fo);xc=a(ih,"SqueezeBertForTokenClassification"),ih.forEach(s),ma.forEach(s),Pr=m(n),A=l(n,"DIV",{class:!0});var H=d(A);q(Ps.$$.fragment,H),Fc=m(H),Co=l(H,"P",{});var lh=d(Co);Cc=a(lh,`SqueezeBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),lh.forEach(s),Pc=m(H),As=l(H,"P",{});var fa=d(As);Ac=a(fa,"The SqueezeBERT model was proposed in "),Ls=l(fa,"A",{href:!0,rel:!0});var dh=d(Ls);Lc=a(dh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),dh.forEach(s),Nc=a(fa,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),fa.forEach(s),Ic=m(H),Ns=l(H,"P",{});var ga=d(Ns);Dc=a(ga,"This model inherits from "),Sn=l(ga,"A",{href:!0});var ch=d(Sn);Oc=a(ch,"PreTrainedModel"),ch.forEach(s),Rc=a(ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ga.forEach(s),Wc=m(H),Is=l(H,"P",{});var _a=d(Is);Kc=a(_a,"This model is also a PyTorch "),Ds=l(_a,"A",{href:!0,rel:!0});var ph=d(Ds);Hc=a(ph,"torch.nn.Module"),ph.forEach(s),Qc=a(_a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_a.forEach(s),Uc=m(H),Os=l(H,"P",{});var ba=d(Os);Vc=a(ba,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Po=l(ba,"EM",{});var uh=d(Po);Gc=a(uh,"squeezebert/squeezebert-mnli-headless"),uh.forEach(s),Jc=a(ba," checkpoint as a starting point."),ba.forEach(s),Xc=m(H),q(ft.$$.fragment,H),Yc=m(H),q(gt.$$.fragment,H),Zc=m(H),G=l(H,"DIV",{class:!0});var le=d(G);q(Rs.$$.fragment,le),ep=m(le),Te=l(le,"P",{});var Ln=d(Te);tp=a(Ln,"The "),Bn=l(Ln,"A",{href:!0});var hh=d(Bn);sp=a(hh,"SqueezeBertForTokenClassification"),hh.forEach(s),np=a(Ln," forward method, overrides the "),Ao=l(Ln,"CODE",{});var mh=d(Ao);op=a(mh,"__call__"),mh.forEach(s),rp=a(Ln," special method."),Ln.forEach(s),ap=m(le),q(_t.$$.fragment,le),ip=m(le),q(bt.$$.fragment,le),lp=m(le),q(zt.$$.fragment,le),le.forEach(s),H.forEach(s),Ar=m(n),Se=l(n,"H2",{class:!0});var za=d(Se);kt=l(za,"A",{id:!0,class:!0,href:!0});var fh=d(kt);Lo=l(fh,"SPAN",{});var gh=d(Lo);q(Ws.$$.fragment,gh),gh.forEach(s),fh.forEach(s),dp=m(za),No=l(za,"SPAN",{});var _h=d(No);cp=a(_h,"SqueezeBertForQuestionAnswering"),_h.forEach(s),za.forEach(s),Lr=m(n),L=l(n,"DIV",{class:!0});var Q=d(L);q(Ks.$$.fragment,Q),pp=m(Q),Be=l(Q,"P",{});var Nn=d(Be);up=a(Nn,`SqueezeBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Io=l(Nn,"CODE",{});var bh=d(Io);hp=a(bh,"span start logits"),bh.forEach(s),mp=a(Nn," and "),Do=l(Nn,"CODE",{});var zh=d(Do);fp=a(zh,"span end logits"),zh.forEach(s),gp=a(Nn,")."),Nn.forEach(s),_p=m(Q),Hs=l(Q,"P",{});var ka=d(Hs);bp=a(ka,"The SqueezeBERT model was proposed in "),Qs=l(ka,"A",{href:!0,rel:!0});var kh=d(Qs);zp=a(kh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),kh.forEach(s),kp=a(ka,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ka.forEach(s),qp=m(Q),Us=l(Q,"P",{});var qa=d(Us);$p=a(qa,"This model inherits from "),En=l(qa,"A",{href:!0});var qh=d(En);wp=a(qh,"PreTrainedModel"),qh.forEach(s),vp=a(qa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qa.forEach(s),yp=m(Q),Vs=l(Q,"P",{});var $a=d(Vs);Tp=a($a,"This model is also a PyTorch "),Gs=l($a,"A",{href:!0,rel:!0});var $h=d(Gs);Sp=a($h,"torch.nn.Module"),$h.forEach(s),Bp=a($a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$a.forEach(s),Ep=m(Q),Js=l(Q,"P",{});var wa=d(Js);jp=a(wa,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Oo=l(wa,"EM",{});var wh=d(Oo);Mp=a(wh,"squeezebert/squeezebert-mnli-headless"),wh.forEach(s),xp=a(wa," checkpoint as a starting point."),wa.forEach(s),Fp=m(Q),q(qt.$$.fragment,Q),Cp=m(Q),q($t.$$.fragment,Q),Pp=m(Q),J=l(Q,"DIV",{class:!0});var de=d(J);q(Xs.$$.fragment,de),Ap=m(de),Ee=l(de,"P",{});var In=d(Ee);Lp=a(In,"The "),jn=l(In,"A",{href:!0});var vh=d(jn);Np=a(vh,"SqueezeBertForQuestionAnswering"),vh.forEach(s),Ip=a(In," forward method, overrides the "),Ro=l(In,"CODE",{});var yh=d(Ro);Dp=a(yh,"__call__"),yh.forEach(s),Op=a(In," special method."),In.forEach(s),Rp=m(de),q(wt.$$.fragment,de),Wp=m(de),q(vt.$$.fragment,de),Kp=m(de),q(yt.$$.fragment,de),de.forEach(s),Q.forEach(s),this.h()},h(){b(o,"name","hf:doc:metadata"),b(o,"content",JSON.stringify(cm)),b(c,"id","squeezebert"),b(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(c,"href","#squeezebert"),b(p,"class","relative group"),b(Ce,"id","overview"),b(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ce,"href","#overview"),b(ce,"class","relative group"),b(Mt,"href","https://arxiv.org/abs/2006.11316"),b(Mt,"rel","nofollow"),b(xt,"href","https://blog.yani.io/filter-group-tutorial"),b(xt,"rel","nofollow"),b(Ct,"href","https://huggingface.co/forresti"),b(Ct,"rel","nofollow"),b(Ae,"id","transformers.SqueezeBertConfig"),b(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ae,"href","#transformers.SqueezeBertConfig"),b(pe,"class","relative group"),b(an,"href","/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertModel"),b(Lt,"href","https://huggingface.co/squeezebert/squeezebert-uncased"),b(Lt,"rel","nofollow"),b(ln,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),b(dn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),b(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"id","transformers.SqueezeBertTokenizer"),b(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ne,"href","#transformers.SqueezeBertTokenizer"),b(me,"class","relative group"),b(cn,"href","/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer"),b(pn,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),b(un,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),b(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Re,"id","transformers.SqueezeBertTokenizerFast"),b(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Re,"href","#transformers.SqueezeBertTokenizerFast"),b(ge,"class","relative group"),b(gn,"href","/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertTokenizerFast"),b(_n,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),b(bn,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),b(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ke,"id","transformers.SqueezeBertModel"),b(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ke,"href","#transformers.SqueezeBertModel"),b(_e,"class","relative group"),b(es,"href","https://arxiv.org/abs/2006.11316"),b(es,"rel","nofollow"),b(zn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ns,"rel","nofollow"),b(kn,"href","/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertModel"),b(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ge,"id","transformers.SqueezeBertForMaskedLM"),b(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ge,"href","#transformers.SqueezeBertForMaskedLM"),b(ze,"class","relative group"),b(cs,"href","https://arxiv.org/abs/2006.11316"),b(cs,"rel","nofollow"),b(qn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(hs,"rel","nofollow"),b($n,"href","/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertForMaskedLM"),b(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(tt,"id","transformers.SqueezeBertForSequenceClassification"),b(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(tt,"href","#transformers.SqueezeBertForSequenceClassification"),b(qe,"class","relative group"),b(zs,"href","https://arxiv.org/abs/2006.11316"),b(zs,"rel","nofollow"),b(wn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b($s,"rel","nofollow"),b(vn,"href","/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertForSequenceClassification"),b(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(dt,"id","transformers.SqueezeBertForMultipleChoice"),b(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(dt,"href","#transformers.SqueezeBertForMultipleChoice"),b(we,"class","relative group"),b(Bs,"href","https://arxiv.org/abs/2006.11316"),b(Bs,"rel","nofollow"),b(yn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ms,"rel","nofollow"),b(Tn,"href","/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertForMultipleChoice"),b(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(mt,"id","transformers.SqueezeBertForTokenClassification"),b(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(mt,"href","#transformers.SqueezeBertForTokenClassification"),b(ye,"class","relative group"),b(Ls,"href","https://arxiv.org/abs/2006.11316"),b(Ls,"rel","nofollow"),b(Sn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ds,"rel","nofollow"),b(Bn,"href","/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertForTokenClassification"),b(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(kt,"id","transformers.SqueezeBertForQuestionAnswering"),b(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(kt,"href","#transformers.SqueezeBertForQuestionAnswering"),b(Se,"class","relative group"),b(Qs,"href","https://arxiv.org/abs/2006.11316"),b(Qs,"rel","nofollow"),b(En,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Gs,"rel","nofollow"),b(jn,"href","/docs/transformers/main/en/model_doc/squeezebert#transformers.SqueezeBertForQuestionAnswering"),b(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,_){e(document.head,o),z(n,f,_),z(n,p,_),e(p,c),e(c,g),$(t,g,null),e(p,u),e(p,j),e(j,va),z(n,hr,_),z(n,ce,_),e(ce,Ce),e(Ce,On),$(jt,On,null),e(ce,ya),e(ce,Rn),e(Rn,Ta),z(n,mr,_),z(n,oe,_),e(oe,Sa),e(oe,Mt),e(Mt,Ba),e(oe,Ea),e(oe,xt),e(xt,ja),e(oe,Ma),z(n,fr,_),z(n,nn,_),e(nn,xa),z(n,gr,_),z(n,on,_),e(on,Wn),e(Wn,Fa),z(n,_r,_),z(n,rn,_),e(rn,Ca),z(n,br,_),z(n,re,_),e(re,Kn),e(Kn,Pa),e(re,Aa),e(re,Hn),e(Hn,La),e(re,Na),e(re,Ft),e(Ft,Ia),e(Ft,Qn),e(Qn,Da),e(Ft,Oa),z(n,zr,_),z(n,Pe,_),e(Pe,Ra),e(Pe,Ct),e(Ct,Wa),e(Pe,Ka),z(n,kr,_),z(n,pe,_),e(pe,Ae),e(Ae,Un),$(Pt,Un,null),e(pe,Ha),e(pe,Vn),e(Vn,Qa),z(n,qr,_),z(n,U,_),$(At,U,null),e(U,Ua),e(U,ue),e(ue,Va),e(ue,an),e(an,Ga),e(ue,Ja),e(ue,Lt),e(Lt,Xa),e(ue,Ya),e(U,Za),e(U,he),e(he,ei),e(he,ln),e(ln,ti),e(he,si),e(he,dn),e(dn,ni),e(he,oi),e(U,ri),$(Le,U,null),e(U,ai),e(U,Gn),e(Gn,ii),z(n,$r,_),z(n,me,_),e(me,Ne),e(Ne,Jn),$(Nt,Jn,null),e(me,li),e(me,Xn),e(Xn,di),z(n,wr,_),z(n,M,_),$(It,M,null),e(M,ci),e(M,Yn),e(Yn,pi),e(M,ui),e(M,Ie),e(Ie,cn),e(cn,hi),e(Ie,mi),e(Ie,pn),e(pn,fi),e(Ie,gi),e(M,_i),e(M,Zn),e(Zn,eo),e(eo,bi),e(M,zi),e(M,Dt),e(Dt,ki),e(Dt,un),e(un,qi),e(Dt,$i),e(M,wi),e(M,ae),$(Ot,ae,null),e(ae,vi),e(ae,to),e(to,yi),e(ae,Ti),e(ae,Rt),e(Rt,hn),e(hn,Si),e(hn,so),e(so,Bi),e(Rt,Ei),e(Rt,mn),e(mn,ji),e(mn,no),e(no,Mi),e(M,xi),e(M,De),$(Wt,De,null),e(De,Fi),e(De,Kt),e(Kt,Ci),e(Kt,oo),e(oo,Pi),e(Kt,Ai),e(M,Li),e(M,ee),$(Ht,ee,null),e(ee,Ni),e(ee,ro),e(ro,Ii),e(ee,Di),$(Oe,ee,null),e(ee,Oi),e(ee,fe),e(fe,Ri),e(fe,ao),e(ao,Wi),e(fe,Ki),e(fe,io),e(io,Hi),e(fe,Qi),e(M,Ui),e(M,fn),$(Qt,fn,null),z(n,vr,_),z(n,ge,_),e(ge,Re),e(Re,lo),$(Ut,lo,null),e(ge,Vi),e(ge,co),e(co,Gi),z(n,yr,_),z(n,Y,_),$(Vt,Y,null),e(Y,Ji),e(Y,Gt),e(Gt,Xi),e(Gt,po),e(po,Yi),e(Gt,Zi),e(Y,el),e(Y,We),e(We,gn),e(gn,tl),e(We,sl),e(We,_n),e(_n,nl),e(We,ol),e(Y,rl),e(Y,Jt),e(Jt,al),e(Jt,bn),e(bn,il),e(Jt,ll),z(n,Tr,_),z(n,_e,_),e(_e,Ke),e(Ke,uo),$(Xt,uo,null),e(_e,dl),e(_e,ho),e(ho,cl),z(n,Sr,_),z(n,x,_),$(Yt,x,null),e(x,pl),e(x,mo),e(mo,ul),e(x,hl),e(x,Zt),e(Zt,ml),e(Zt,es),e(es,fl),e(Zt,gl),e(x,_l),e(x,ts),e(ts,bl),e(ts,zn),e(zn,zl),e(ts,kl),e(x,ql),e(x,ss),e(ss,$l),e(ss,ns),e(ns,wl),e(ss,vl),e(x,yl),e(x,os),e(os,Tl),e(os,fo),e(fo,Sl),e(os,Bl),e(x,El),$(He,x,null),e(x,jl),$(Qe,x,null),e(x,Ml),e(x,te),$(rs,te,null),e(te,xl),e(te,be),e(be,Fl),e(be,kn),e(kn,Cl),e(be,Pl),e(be,go),e(go,Al),e(be,Ll),e(te,Nl),$(Ue,te,null),e(te,Il),$(Ve,te,null),z(n,Br,_),z(n,ze,_),e(ze,Ge),e(Ge,_o),$(as,_o,null),e(ze,Dl),e(ze,bo),e(bo,Ol),z(n,Er,_),z(n,F,_),$(is,F,null),e(F,Rl),e(F,ls),e(ls,Wl),e(ls,zo),e(zo,Kl),e(ls,Hl),e(F,Ql),e(F,ds),e(ds,Ul),e(ds,cs),e(cs,Vl),e(ds,Gl),e(F,Jl),e(F,ps),e(ps,Xl),e(ps,qn),e(qn,Yl),e(ps,Zl),e(F,ed),e(F,us),e(us,td),e(us,hs),e(hs,sd),e(us,nd),e(F,od),e(F,ms),e(ms,rd),e(ms,ko),e(ko,ad),e(ms,id),e(F,ld),$(Je,F,null),e(F,dd),$(Xe,F,null),e(F,cd),e(F,V),$(fs,V,null),e(V,pd),e(V,ke),e(ke,ud),e(ke,$n),e($n,hd),e(ke,md),e(ke,qo),e(qo,fd),e(ke,gd),e(V,_d),$(Ye,V,null),e(V,bd),$(Ze,V,null),e(V,zd),$(et,V,null),z(n,jr,_),z(n,qe,_),e(qe,tt),e(tt,$o),$(gs,$o,null),e(qe,kd),e(qe,wo),e(wo,qd),z(n,Mr,_),z(n,C,_),$(_s,C,null),e(C,$d),e(C,vo),e(vo,wd),e(C,vd),e(C,bs),e(bs,yd),e(bs,zs),e(zs,Td),e(bs,Sd),e(C,Bd),e(C,ks),e(ks,Ed),e(ks,wn),e(wn,jd),e(ks,Md),e(C,xd),e(C,qs),e(qs,Fd),e(qs,$s),e($s,Cd),e(qs,Pd),e(C,Ad),e(C,ws),e(ws,Ld),e(ws,yo),e(yo,Nd),e(ws,Id),e(C,Dd),$(st,C,null),e(C,Od),$(nt,C,null),e(C,Rd),e(C,I),$(vs,I,null),e(I,Wd),e(I,$e),e($e,Kd),e($e,vn),e(vn,Hd),e($e,Qd),e($e,To),e(To,Ud),e($e,Vd),e(I,Gd),$(ot,I,null),e(I,Jd),$(rt,I,null),e(I,Xd),$(at,I,null),e(I,Yd),$(it,I,null),e(I,Zd),$(lt,I,null),z(n,xr,_),z(n,we,_),e(we,dt),e(dt,So),$(ys,So,null),e(we,ec),e(we,Bo),e(Bo,tc),z(n,Fr,_),z(n,P,_),$(Ts,P,null),e(P,sc),e(P,Eo),e(Eo,nc),e(P,oc),e(P,Ss),e(Ss,rc),e(Ss,Bs),e(Bs,ac),e(Ss,ic),e(P,lc),e(P,Es),e(Es,dc),e(Es,yn),e(yn,cc),e(Es,pc),e(P,uc),e(P,js),e(js,hc),e(js,Ms),e(Ms,mc),e(js,fc),e(P,gc),e(P,xs),e(xs,_c),e(xs,jo),e(jo,bc),e(xs,zc),e(P,kc),$(ct,P,null),e(P,qc),$(pt,P,null),e(P,$c),e(P,se),$(Fs,se,null),e(se,wc),e(se,ve),e(ve,vc),e(ve,Tn),e(Tn,yc),e(ve,Tc),e(ve,Mo),e(Mo,Sc),e(ve,Bc),e(se,Ec),$(ut,se,null),e(se,jc),$(ht,se,null),z(n,Cr,_),z(n,ye,_),e(ye,mt),e(mt,xo),$(Cs,xo,null),e(ye,Mc),e(ye,Fo),e(Fo,xc),z(n,Pr,_),z(n,A,_),$(Ps,A,null),e(A,Fc),e(A,Co),e(Co,Cc),e(A,Pc),e(A,As),e(As,Ac),e(As,Ls),e(Ls,Lc),e(As,Nc),e(A,Ic),e(A,Ns),e(Ns,Dc),e(Ns,Sn),e(Sn,Oc),e(Ns,Rc),e(A,Wc),e(A,Is),e(Is,Kc),e(Is,Ds),e(Ds,Hc),e(Is,Qc),e(A,Uc),e(A,Os),e(Os,Vc),e(Os,Po),e(Po,Gc),e(Os,Jc),e(A,Xc),$(ft,A,null),e(A,Yc),$(gt,A,null),e(A,Zc),e(A,G),$(Rs,G,null),e(G,ep),e(G,Te),e(Te,tp),e(Te,Bn),e(Bn,sp),e(Te,np),e(Te,Ao),e(Ao,op),e(Te,rp),e(G,ap),$(_t,G,null),e(G,ip),$(bt,G,null),e(G,lp),$(zt,G,null),z(n,Ar,_),z(n,Se,_),e(Se,kt),e(kt,Lo),$(Ws,Lo,null),e(Se,dp),e(Se,No),e(No,cp),z(n,Lr,_),z(n,L,_),$(Ks,L,null),e(L,pp),e(L,Be),e(Be,up),e(Be,Io),e(Io,hp),e(Be,mp),e(Be,Do),e(Do,fp),e(Be,gp),e(L,_p),e(L,Hs),e(Hs,bp),e(Hs,Qs),e(Qs,zp),e(Hs,kp),e(L,qp),e(L,Us),e(Us,$p),e(Us,En),e(En,wp),e(Us,vp),e(L,yp),e(L,Vs),e(Vs,Tp),e(Vs,Gs),e(Gs,Sp),e(Vs,Bp),e(L,Ep),e(L,Js),e(Js,jp),e(Js,Oo),e(Oo,Mp),e(Js,xp),e(L,Fp),$(qt,L,null),e(L,Cp),$($t,L,null),e(L,Pp),e(L,J),$(Xs,J,null),e(J,Ap),e(J,Ee),e(Ee,Lp),e(Ee,jn),e(jn,Np),e(Ee,Ip),e(Ee,Ro),e(Ro,Dp),e(Ee,Op),e(J,Rp),$(wt,J,null),e(J,Wp),$(vt,J,null),e(J,Kp),$(yt,J,null),Nr=!0},p(n,[_]){const Ys={};_&2&&(Ys.$$scope={dirty:_,ctx:n}),Le.$set(Ys);const Wo={};_&2&&(Wo.$$scope={dirty:_,ctx:n}),Oe.$set(Wo);const Ko={};_&2&&(Ko.$$scope={dirty:_,ctx:n}),He.$set(Ko);const Ho={};_&2&&(Ho.$$scope={dirty:_,ctx:n}),Qe.$set(Ho);const Zs={};_&2&&(Zs.$$scope={dirty:_,ctx:n}),Ue.$set(Zs);const Qo={};_&2&&(Qo.$$scope={dirty:_,ctx:n}),Ve.$set(Qo);const Uo={};_&2&&(Uo.$$scope={dirty:_,ctx:n}),Je.$set(Uo);const Vo={};_&2&&(Vo.$$scope={dirty:_,ctx:n}),Xe.$set(Vo);const je={};_&2&&(je.$$scope={dirty:_,ctx:n}),Ye.$set(je);const Go={};_&2&&(Go.$$scope={dirty:_,ctx:n}),Ze.$set(Go);const Jo={};_&2&&(Jo.$$scope={dirty:_,ctx:n}),et.$set(Jo);const Xo={};_&2&&(Xo.$$scope={dirty:_,ctx:n}),st.$set(Xo);const Yo={};_&2&&(Yo.$$scope={dirty:_,ctx:n}),nt.$set(Yo);const Zo={};_&2&&(Zo.$$scope={dirty:_,ctx:n}),ot.$set(Zo);const er={};_&2&&(er.$$scope={dirty:_,ctx:n}),rt.$set(er);const Me={};_&2&&(Me.$$scope={dirty:_,ctx:n}),at.$set(Me);const tr={};_&2&&(tr.$$scope={dirty:_,ctx:n}),it.$set(tr);const sr={};_&2&&(sr.$$scope={dirty:_,ctx:n}),lt.$set(sr);const en={};_&2&&(en.$$scope={dirty:_,ctx:n}),ct.$set(en);const nr={};_&2&&(nr.$$scope={dirty:_,ctx:n}),pt.$set(nr);const tn={};_&2&&(tn.$$scope={dirty:_,ctx:n}),ut.$set(tn);const or={};_&2&&(or.$$scope={dirty:_,ctx:n}),ht.$set(or);const sn={};_&2&&(sn.$$scope={dirty:_,ctx:n}),ft.$set(sn);const rr={};_&2&&(rr.$$scope={dirty:_,ctx:n}),gt.$set(rr);const ar={};_&2&&(ar.$$scope={dirty:_,ctx:n}),_t.$set(ar);const ir={};_&2&&(ir.$$scope={dirty:_,ctx:n}),bt.$set(ir);const Z={};_&2&&(Z.$$scope={dirty:_,ctx:n}),zt.$set(Z);const xe={};_&2&&(xe.$$scope={dirty:_,ctx:n}),qt.$set(xe);const lr={};_&2&&(lr.$$scope={dirty:_,ctx:n}),$t.$set(lr);const dr={};_&2&&(dr.$$scope={dirty:_,ctx:n}),wt.$set(dr);const Fe={};_&2&&(Fe.$$scope={dirty:_,ctx:n}),vt.$set(Fe);const cr={};_&2&&(cr.$$scope={dirty:_,ctx:n}),yt.$set(cr)},i(n){Nr||(w(t.$$.fragment,n),w(jt.$$.fragment,n),w(Pt.$$.fragment,n),w(At.$$.fragment,n),w(Le.$$.fragment,n),w(Nt.$$.fragment,n),w(It.$$.fragment,n),w(Ot.$$.fragment,n),w(Wt.$$.fragment,n),w(Ht.$$.fragment,n),w(Oe.$$.fragment,n),w(Qt.$$.fragment,n),w(Ut.$$.fragment,n),w(Vt.$$.fragment,n),w(Xt.$$.fragment,n),w(Yt.$$.fragment,n),w(He.$$.fragment,n),w(Qe.$$.fragment,n),w(rs.$$.fragment,n),w(Ue.$$.fragment,n),w(Ve.$$.fragment,n),w(as.$$.fragment,n),w(is.$$.fragment,n),w(Je.$$.fragment,n),w(Xe.$$.fragment,n),w(fs.$$.fragment,n),w(Ye.$$.fragment,n),w(Ze.$$.fragment,n),w(et.$$.fragment,n),w(gs.$$.fragment,n),w(_s.$$.fragment,n),w(st.$$.fragment,n),w(nt.$$.fragment,n),w(vs.$$.fragment,n),w(ot.$$.fragment,n),w(rt.$$.fragment,n),w(at.$$.fragment,n),w(it.$$.fragment,n),w(lt.$$.fragment,n),w(ys.$$.fragment,n),w(Ts.$$.fragment,n),w(ct.$$.fragment,n),w(pt.$$.fragment,n),w(Fs.$$.fragment,n),w(ut.$$.fragment,n),w(ht.$$.fragment,n),w(Cs.$$.fragment,n),w(Ps.$$.fragment,n),w(ft.$$.fragment,n),w(gt.$$.fragment,n),w(Rs.$$.fragment,n),w(_t.$$.fragment,n),w(bt.$$.fragment,n),w(zt.$$.fragment,n),w(Ws.$$.fragment,n),w(Ks.$$.fragment,n),w(qt.$$.fragment,n),w($t.$$.fragment,n),w(Xs.$$.fragment,n),w(wt.$$.fragment,n),w(vt.$$.fragment,n),w(yt.$$.fragment,n),Nr=!0)},o(n){v(t.$$.fragment,n),v(jt.$$.fragment,n),v(Pt.$$.fragment,n),v(At.$$.fragment,n),v(Le.$$.fragment,n),v(Nt.$$.fragment,n),v(It.$$.fragment,n),v(Ot.$$.fragment,n),v(Wt.$$.fragment,n),v(Ht.$$.fragment,n),v(Oe.$$.fragment,n),v(Qt.$$.fragment,n),v(Ut.$$.fragment,n),v(Vt.$$.fragment,n),v(Xt.$$.fragment,n),v(Yt.$$.fragment,n),v(He.$$.fragment,n),v(Qe.$$.fragment,n),v(rs.$$.fragment,n),v(Ue.$$.fragment,n),v(Ve.$$.fragment,n),v(as.$$.fragment,n),v(is.$$.fragment,n),v(Je.$$.fragment,n),v(Xe.$$.fragment,n),v(fs.$$.fragment,n),v(Ye.$$.fragment,n),v(Ze.$$.fragment,n),v(et.$$.fragment,n),v(gs.$$.fragment,n),v(_s.$$.fragment,n),v(st.$$.fragment,n),v(nt.$$.fragment,n),v(vs.$$.fragment,n),v(ot.$$.fragment,n),v(rt.$$.fragment,n),v(at.$$.fragment,n),v(it.$$.fragment,n),v(lt.$$.fragment,n),v(ys.$$.fragment,n),v(Ts.$$.fragment,n),v(ct.$$.fragment,n),v(pt.$$.fragment,n),v(Fs.$$.fragment,n),v(ut.$$.fragment,n),v(ht.$$.fragment,n),v(Cs.$$.fragment,n),v(Ps.$$.fragment,n),v(ft.$$.fragment,n),v(gt.$$.fragment,n),v(Rs.$$.fragment,n),v(_t.$$.fragment,n),v(bt.$$.fragment,n),v(zt.$$.fragment,n),v(Ws.$$.fragment,n),v(Ks.$$.fragment,n),v(qt.$$.fragment,n),v($t.$$.fragment,n),v(Xs.$$.fragment,n),v(wt.$$.fragment,n),v(vt.$$.fragment,n),v(yt.$$.fragment,n),Nr=!1},d(n){s(o),n&&s(f),n&&s(p),y(t),n&&s(hr),n&&s(ce),y(jt),n&&s(mr),n&&s(oe),n&&s(fr),n&&s(nn),n&&s(gr),n&&s(on),n&&s(_r),n&&s(rn),n&&s(br),n&&s(re),n&&s(zr),n&&s(Pe),n&&s(kr),n&&s(pe),y(Pt),n&&s(qr),n&&s(U),y(At),y(Le),n&&s($r),n&&s(me),y(Nt),n&&s(wr),n&&s(M),y(It),y(Ot),y(Wt),y(Ht),y(Oe),y(Qt),n&&s(vr),n&&s(ge),y(Ut),n&&s(yr),n&&s(Y),y(Vt),n&&s(Tr),n&&s(_e),y(Xt),n&&s(Sr),n&&s(x),y(Yt),y(He),y(Qe),y(rs),y(Ue),y(Ve),n&&s(Br),n&&s(ze),y(as),n&&s(Er),n&&s(F),y(is),y(Je),y(Xe),y(fs),y(Ye),y(Ze),y(et),n&&s(jr),n&&s(qe),y(gs),n&&s(Mr),n&&s(C),y(_s),y(st),y(nt),y(vs),y(ot),y(rt),y(at),y(it),y(lt),n&&s(xr),n&&s(we),y(ys),n&&s(Fr),n&&s(P),y(Ts),y(ct),y(pt),y(Fs),y(ut),y(ht),n&&s(Cr),n&&s(ye),y(Cs),n&&s(Pr),n&&s(A),y(Ps),y(ft),y(gt),y(Rs),y(_t),y(bt),y(zt),n&&s(Ar),n&&s(Se),y(Ws),n&&s(Lr),n&&s(L),y(Ks),y(qt),y($t),y(Xs),y(wt),y(vt),y(yt)}}}const cm={local:"squeezebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.SqueezeBertConfig",title:"SqueezeBertConfig"},{local:"transformers.SqueezeBertTokenizer",title:"SqueezeBertTokenizer"},{local:"transformers.SqueezeBertTokenizerFast",title:"SqueezeBertTokenizerFast"},{local:"transformers.SqueezeBertModel",title:"SqueezeBertModel"},{local:"transformers.SqueezeBertForMaskedLM",title:"SqueezeBertForMaskedLM"},{local:"transformers.SqueezeBertForSequenceClassification",title:"SqueezeBertForSequenceClassification"},{local:"transformers.SqueezeBertForMultipleChoice",title:"SqueezeBertForMultipleChoice"},{local:"transformers.SqueezeBertForTokenClassification",title:"SqueezeBertForTokenClassification"},{local:"transformers.SqueezeBertForQuestionAnswering",title:"SqueezeBertForQuestionAnswering"}],title:"SqueezeBERT"};function pm(T){return jh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bm extends Th{constructor(o){super();Sh(this,o,pm,dm,Bh,{})}}export{bm as default,cm as metadata};
