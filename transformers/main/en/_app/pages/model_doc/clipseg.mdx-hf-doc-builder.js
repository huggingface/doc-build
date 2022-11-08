import{S as cd,i as gd,s as md,e as r,k as f,w as P,t as i,M as pd,c as s,d as o,m as h,a,x as v,h as l,b as g,N as fd,G as e,g as _,y as $,q as S,o as b,B as L,v as hd,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ho}from"../../chunks/Tip-hf-doc-builder.js";import{D as y}from"../../chunks/Docstring-hf-doc-builder.js";import{C as be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as X}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $e}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ud(w){let d,I,p,m,C;return m=new be({props:{code:`from transformers import CLIPSegConfig, CLIPSegModel

# Initializing a CLIPSegConfig with CIDAS/clipseg-rd64 style configuration
configuration = CLIPSegConfig()

# Initializing a CLIPSegModel (with random weights) from the CIDAS/clipseg-rd64 style configuration
model = CLIPSegModel(configuration)

# Accessing the model configuration
configuration = model.config

# We can also initialize a CLIPSegConfig from a CLIPSegTextConfig and a CLIPSegVisionConfig

# Initializing a CLIPSegText and CLIPSegVision configuration
config_text = CLIPSegTextConfig()
config_vision = CLIPSegVisionConfig()

config = CLIPSegConfig.from_text_vision_configs(config_text, config_vision)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPSegConfig, CLIPSegModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPSegConfig with CIDAS/clipseg-rd64 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPSegConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPSegModel (with random weights) from the CIDAS/clipseg-rd64 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPSegModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We can also initialize a CLIPSegConfig from a CLIPSegTextConfig and a CLIPSegVisionConfig</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPSegText and CLIPSegVision configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_text = CLIPSegTextConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_vision = CLIPSegVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = CLIPSegConfig.from_text_vision_configs(config_text, config_vision)`}}),{c(){d=r("p"),I=i("Example:"),p=f(),P(m.$$.fragment)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Example:"),c.forEach(o),p=h(n),v(m.$$.fragment,n)},m(n,c){_(n,d,c),e(d,I),_(n,p,c),$(m,n,c),C=!0},p:Se,i(n){C||(S(m.$$.fragment,n),C=!0)},o(n){b(m.$$.fragment,n),C=!1},d(n){n&&o(d),n&&o(p),L(m,n)}}}function _d(w){let d,I,p,m,C;return m=new be({props:{code:`from transformers import CLIPSegTextConfig, CLIPSegTextModel

# Initializing a CLIPSegTextConfig with CIDAS/clipseg-rd64 style configuration
configuration = CLIPSegTextConfig()

# Initializing a CLIPSegTextModel (with random weights) from the CIDAS/clipseg-rd64 style configuration
model = CLIPSegTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPSegTextConfig, CLIPSegTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPSegTextConfig with CIDAS/clipseg-rd64 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPSegTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPSegTextModel (with random weights) from the CIDAS/clipseg-rd64 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPSegTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),I=i("Example:"),p=f(),P(m.$$.fragment)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Example:"),c.forEach(o),p=h(n),v(m.$$.fragment,n)},m(n,c){_(n,d,c),e(d,I),_(n,p,c),$(m,n,c),C=!0},p:Se,i(n){C||(S(m.$$.fragment,n),C=!0)},o(n){b(m.$$.fragment,n),C=!1},d(n){n&&o(d),n&&o(p),L(m,n)}}}function Cd(w){let d,I,p,m,C;return m=new be({props:{code:`from transformers import CLIPSegVisionConfig, CLIPSegVisionModel

# Initializing a CLIPSegVisionConfig with CIDAS/clipseg-rd64 style configuration
configuration = CLIPSegVisionConfig()

# Initializing a CLIPSegVisionModel (with random weights) from the CIDAS/clipseg-rd64 style configuration
model = CLIPSegVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPSegVisionConfig, CLIPSegVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPSegVisionConfig with CIDAS/clipseg-rd64 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPSegVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPSegVisionModel (with random weights) from the CIDAS/clipseg-rd64 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPSegVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),I=i("Example:"),p=f(),P(m.$$.fragment)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Example:"),c.forEach(o),p=h(n),v(m.$$.fragment,n)},m(n,c){_(n,d,c),e(d,I),_(n,p,c),$(m,n,c),C=!0},p:Se,i(n){C||(S(m.$$.fragment,n),C=!0)},o(n){b(m.$$.fragment,n),C=!1},d(n){n&&o(d),n&&o(p),L(m,n)}}}function Id(w){let d,I,p,m,C;return{c(){d=r("p"),I=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(c,"CODE",{});var x=a(p);m=l(x,"Module"),x.forEach(o),C=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){_(n,d,c),e(d,I),e(d,p),e(p,m),e(d,C)},d(n){n&&o(d)}}}function Pd(w){let d,I,p,m,C;return m=new be({props:{code:`from PIL import Image
import requests
from transformers import CLIPSegProcessor, CLIPSegModel

processor = CLIPSegProcessor.from_pretrained("CIDAS/clipseg-rd64-refined")
model = CLIPSegModel.from_pretrained("CIDAS/clipseg-rd64-refined")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPSegProcessor, CLIPSegModel

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPSegProcessor.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPSegModel.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=r("p"),I=i("Examples:"),p=f(),P(m.$$.fragment)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Examples:"),c.forEach(o),p=h(n),v(m.$$.fragment,n)},m(n,c){_(n,d,c),e(d,I),_(n,p,c),$(m,n,c),C=!0},p:Se,i(n){C||(S(m.$$.fragment,n),C=!0)},o(n){b(m.$$.fragment,n),C=!1},d(n){n&&o(d),n&&o(p),L(m,n)}}}function vd(w){let d,I,p,m,C;return{c(){d=r("p"),I=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(c,"CODE",{});var x=a(p);m=l(x,"Module"),x.forEach(o),C=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){_(n,d,c),e(d,I),e(d,p),e(p,m),e(d,C)},d(n){n&&o(d)}}}function $d(w){let d,I,p,m,C;return m=new be({props:{code:`from transformers import CLIPTokenizer, CLIPSegModel

tokenizer = CLIPTokenizer.from_pretrained("CIDAS/clipseg-rd64-refined")
model = CLIPSegModel.from_pretrained("CIDAS/clipseg-rd64-refined")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPSegModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPSegModel.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=r("p"),I=i("Examples:"),p=f(),P(m.$$.fragment)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Examples:"),c.forEach(o),p=h(n),v(m.$$.fragment,n)},m(n,c){_(n,d,c),e(d,I),_(n,p,c),$(m,n,c),C=!0},p:Se,i(n){C||(S(m.$$.fragment,n),C=!0)},o(n){b(m.$$.fragment,n),C=!1},d(n){n&&o(d),n&&o(p),L(m,n)}}}function Sd(w){let d,I,p,m,C;return{c(){d=r("p"),I=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(c,"CODE",{});var x=a(p);m=l(x,"Module"),x.forEach(o),C=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){_(n,d,c),e(d,I),e(d,p),e(p,m),e(d,C)},d(n){n&&o(d)}}}function bd(w){let d,I,p,m,C;return m=new be({props:{code:`from PIL import Image
import requests
from transformers import CLIPSegProcessor, CLIPSegModel

processor = CLIPSegProcessor.from_pretrained("CIDAS/clipseg-rd64-refined")
model = CLIPSegModel.from_pretrained("CIDAS/clipseg-rd64-refined")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPSegProcessor, CLIPSegModel

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPSegProcessor.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPSegModel.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=r("p"),I=i("Examples:"),p=f(),P(m.$$.fragment)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Examples:"),c.forEach(o),p=h(n),v(m.$$.fragment,n)},m(n,c){_(n,d,c),e(d,I),_(n,p,c),$(m,n,c),C=!0},p:Se,i(n){C||(S(m.$$.fragment,n),C=!0)},o(n){b(m.$$.fragment,n),C=!1},d(n){n&&o(d),n&&o(p),L(m,n)}}}function Ld(w){let d,I,p,m,C;return{c(){d=r("p"),I=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(c,"CODE",{});var x=a(p);m=l(x,"Module"),x.forEach(o),C=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){_(n,d,c),e(d,I),e(d,p),e(p,m),e(d,C)},d(n){n&&o(d)}}}function wd(w){let d,I,p,m,C;return m=new be({props:{code:`from transformers import CLIPTokenizer, CLIPSegTextModel

tokenizer = CLIPTokenizer.from_pretrained("CIDAS/clipseg-rd64-refined")
model = CLIPSegTextModel.from_pretrained("CIDAS/clipseg-rd64-refined")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPSegTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPSegTextModel.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=r("p"),I=i("Examples:"),p=f(),P(m.$$.fragment)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Examples:"),c.forEach(o),p=h(n),v(m.$$.fragment,n)},m(n,c){_(n,d,c),e(d,I),_(n,p,c),$(m,n,c),C=!0},p:Se,i(n){C||(S(m.$$.fragment,n),C=!0)},o(n){b(m.$$.fragment,n),C=!1},d(n){n&&o(d),n&&o(p),L(m,n)}}}function xd(w){let d,I,p,m,C;return{c(){d=r("p"),I=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(c,"CODE",{});var x=a(p);m=l(x,"Module"),x.forEach(o),C=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){_(n,d,c),e(d,I),e(d,p),e(p,m),e(d,C)},d(n){n&&o(d)}}}function yd(w){let d,I,p,m,C;return m=new be({props:{code:`from PIL import Image
import requests
from transformers import CLIPSegProcessor, CLIPSegVisionModel

processor = CLIPSegProcessor.from_pretrained("CIDAS/clipseg-rd64-refined")
model = CLIPSegVisionModel.from_pretrained("CIDAS/clipseg-rd64-refined")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPSegProcessor, CLIPSegVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPSegProcessor.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPSegVisionModel.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=r("p"),I=i("Examples:"),p=f(),P(m.$$.fragment)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Examples:"),c.forEach(o),p=h(n),v(m.$$.fragment,n)},m(n,c){_(n,d,c),e(d,I),_(n,p,c),$(m,n,c),C=!0},p:Se,i(n){C||(S(m.$$.fragment,n),C=!0)},o(n){b(m.$$.fragment,n),C=!1},d(n){n&&o(d),n&&o(p),L(m,n)}}}function Td(w){let d,I,p,m,C;return{c(){d=r("p"),I=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=r("code"),m=i("Module"),C=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=s(c,"CODE",{});var x=a(p);m=l(x,"Module"),x.forEach(o),C=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){_(n,d,c),e(d,I),e(d,p),e(p,m),e(d,C)},d(n){n&&o(d)}}}function kd(w){let d,I,p,m,C;return m=new be({props:{code:`from transformers import CLIPSegProcessor, CLIPSegForImageSegmentation
from PIL import Image
import requests

processor = CLIPSegProcessor.from_pretrained("CIDAS/clipseg-rd64-refined")
model = CLIPSegForImageSegmentation.from_pretrained("CIDAS/clipseg-rd64-refined")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)
texts = ["a cat", "a remote", "a blanket"]
inputs = processor(text=texts, images=[image] * len(texts), padding=True, return_tensors="pt")

outputs = model(**inputs)

logits = outputs.logits
print(logits.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPSegProcessor, CLIPSegForImageSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPSegProcessor.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPSegForImageSegmentation.from_pretrained(<span class="hljs-string">&quot;CIDAS/clipseg-rd64-refined&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>texts = [<span class="hljs-string">&quot;a cat&quot;</span>, <span class="hljs-string">&quot;a remote&quot;</span>, <span class="hljs-string">&quot;a blanket&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(text=texts, images=[image] * <span class="hljs-built_in">len</span>(texts), padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(logits.shape)
torch.Size([<span class="hljs-number">3</span>, <span class="hljs-number">352</span>, <span class="hljs-number">352</span>])`}}),{c(){d=r("p"),I=i("Examples:"),p=f(),P(m.$$.fragment)},l(n){d=s(n,"P",{});var c=a(d);I=l(c,"Examples:"),c.forEach(o),p=h(n),v(m.$$.fragment,n)},m(n,c){_(n,d,c),e(d,I),_(n,p,c),$(m,n,c),C=!0},p:Se,i(n){C||(S(m.$$.fragment,n),C=!0)},o(n){b(m.$$.fragment,n),C=!1},d(n){n&&o(d),n&&o(p),L(m,n)}}}function Md(w){let d,I,p,m,C,n,c,x,wr,qn,Y,Le,Ro,dt,xr,Uo,yr,An,H,Tr,ct,kr,Mr,Zt,Er,jr,Dn,eo,zr,Fn,to,Go,qr,Vn,oo,Ar,On,we,R,no,Dr,Fr,ro,Vr,Or,so,Nr,Wr,Br,A,ao,Hr,Rr,Jo,Ur,Gr,Ko,Jr,Kr,Qo,Qr,Xr,Nn,xe,Ui,Wn,gt,Yr,io,Zr,Bn,U,es,mt,ts,os,pt,ns,rs,Hn,Z,ye,Xo,ft,ss,Yo,as,Rn,T,ht,is,G,lo,ls,ds,co,cs,gs,ut,ms,ps,fs,ee,hs,go,us,_s,mo,Cs,Is,Ps,Te,vs,ke,_t,$s,Ct,Ss,po,bs,Ls,Un,te,Me,Zo,It,ws,en,xs,Gn,j,Pt,ys,oe,Ts,fo,ks,Ms,vt,Es,js,zs,ne,qs,ho,As,Ds,uo,Fs,Vs,Os,Ee,Jn,re,je,tn,$t,Ns,on,Ws,Kn,z,St,Bs,se,Hs,_o,Rs,Us,bt,Gs,Js,Ks,ae,Qs,Co,Xs,Ys,Io,Zs,ea,ta,ze,Qn,ie,qe,nn,Lt,oa,rn,na,Xn,k,wt,ra,sn,sa,aa,E,Po,ia,la,vo,da,ca,$o,ga,ma,an,pa,fa,So,ha,ua,_a,Ae,xt,Ca,yt,Ia,bo,Pa,va,$a,De,Tt,Sa,kt,ba,Lo,La,wa,Yn,le,Fe,ln,Mt,xa,dn,ya,Zn,M,Et,Ta,jt,ka,zt,Ma,Ea,ja,D,qt,za,de,qa,wo,Aa,Da,cn,Fa,Va,Oa,Ve,Na,Oe,Wa,F,At,Ba,ce,Ha,xo,Ra,Ua,gn,Ga,Ja,Ka,Ne,Qa,We,Xa,V,Dt,Ya,ge,Za,yo,ei,ti,mn,oi,ni,ri,Be,si,He,er,me,Re,pn,Ft,ai,fn,ii,tr,pe,Vt,li,O,Ot,di,fe,ci,To,gi,mi,hn,pi,fi,hi,Ue,ui,Ge,or,he,Je,un,Nt,_i,_n,Ci,nr,ue,Wt,Ii,N,Bt,Pi,_e,vi,ko,$i,Si,Cn,bi,Li,wi,Ke,xi,Qe,rr,Ce,Xe,In,Ht,yi,Pn,Ti,sr,q,Rt,ki,vn,Mi,Ei,Ut,ji,Gt,zi,qi,Ai,W,Jt,Di,Ie,Fi,Mo,Vi,Oi,$n,Ni,Wi,Bi,Ye,Hi,Ze,ar;return n=new X({}),dt=new X({}),ft=new X({}),ht=new y({props:{name:"class transformers.CLIPSegConfig",anchor:"transformers.CLIPSegConfig",parameters:[{name:"text_config",val:" = None"},{name:"vision_config",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"extract_layers",val:" = [3, 6, 9]"},{name:"reduce_dim",val:" = 64"},{name:"decoder_num_attention_heads",val:" = 4"},{name:"decoder_attention_dropout",val:" = 0.0"},{name:"decoder_hidden_act",val:" = 'quick_gelu'"},{name:"decoder_intermediate_size",val:" = 2048"},{name:"conditional_layer",val:" = 0"},{name:"use_complex_transposed_convolution",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPSegConfig.text_config",description:`<strong>text_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegTextConfig">CLIPSegTextConfig</a>.`,name:"text_config"},{anchor:"transformers.CLIPSegConfig.vision_config",description:`<strong>vision_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegVisionConfig">CLIPSegVisionConfig</a>.`,name:"vision_config"},{anchor:"transformers.CLIPSegConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPSegConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIPSeg implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPSegConfig.extract_layers",description:`<strong>extract_layers</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [3, 6, 9]) &#x2014;
Layers to extract when forwarding the query image through the frozen visual backbone of CLIP.`,name:"extract_layers"},{anchor:"transformers.CLIPSegConfig.reduce_dim",description:`<strong>reduce_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality to reduce the CLIP vision embedding.`,name:"reduce_dim"},{anchor:"transformers.CLIPSegConfig.decoder_num_attention_heads",description:`<strong>decoder_num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads in the decoder of CLIPSeg.`,name:"decoder_num_attention_heads"},{anchor:"transformers.CLIPSegConfig.decoder_attention_dropout",description:`<strong>decoder_attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"decoder_attention_dropout"},{anchor:"transformers.CLIPSegConfig.decoder_hidden_act",description:`<strong>decoder_hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"decoder_hidden_act"},{anchor:"transformers.CLIPSegConfig.decoder_intermediate_size",description:`<strong>decoder_intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layers in the Transformer decoder.`,name:"decoder_intermediate_size"},{anchor:"transformers.CLIPSegConfig.conditional_layer",description:`<strong>conditional_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The layer to use of the Transformer encoder whose activations will be combined with the condition
embeddings using FiLM (Feature-wise Linear Modulation). If 0, the last layer is used.`,name:"conditional_layer"},{anchor:"transformers.CLIPSegConfig.use_complex_transposed_convolution",description:`<strong>use_complex_transposed_convolution</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a more complex transposed convolution in the decoder, enabling more fine-grained
segmentation.`,name:"use_complex_transposed_convolution"},{anchor:"transformers.CLIPSegConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/configuration_clipseg.py#L244"}}),Te=new $e({props:{anchor:"transformers.CLIPSegConfig.example",$$slots:{default:[ud]},$$scope:{ctx:w}}}),_t=new y({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPSegConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPSegTextConfig"},{name:"vision_config",val:": CLIPSegVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/configuration_clipseg.py#L360",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegConfig"
>CLIPSegConfig</a></p>
`}}),It=new X({}),Pt=new y({props:{name:"class transformers.CLIPSegTextConfig",anchor:"transformers.CLIPSegTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPSegTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIPSeg text model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegModel">CLIPSegModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPSegTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPSegTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPSegTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPSegTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPSegTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.CLIPSegTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPSegTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPSegTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPSegTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPSegTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/configuration_clipseg.py#L32"}}),Ee=new $e({props:{anchor:"transformers.CLIPSegTextConfig.example",$$slots:{default:[_d]},$$scope:{ctx:w}}}),$t=new X({}),St=new y({props:{name:"class transformers.CLIPSegVisionConfig",anchor:"transformers.CLIPSegVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPSegVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPSegVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPSegVisionConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPSegVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPSegVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.CLIPSegVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.CLIPSegVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPSegVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPSegVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPSegVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPSegVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/configuration_clipseg.py#L139"}}),ze=new $e({props:{anchor:"transformers.CLIPSegVisionConfig.example",$$slots:{default:[Cd]},$$scope:{ctx:w}}}),Lt=new X({}),wt=new y({props:{name:"class transformers.CLIPSegProcessor",anchor:"transformers.CLIPSegProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPSegProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPSegProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/processing_clipseg.py#L22"}}),xt=new y({props:{name:"batch_decode",anchor:"transformers.CLIPSegProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/processing_clipseg.py#L96"}}),Tt=new y({props:{name:"decode",anchor:"transformers.CLIPSegProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/processing_clipseg.py#L103"}}),Mt=new X({}),Et=new y({props:{name:"class transformers.CLIPSegModel",anchor:"transformers.CLIPSegModel",parameters:[{name:"config",val:": CLIPSegConfig"}],parametersDescription:[{anchor:"transformers.CLIPSegModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegConfig">CLIPSegConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L941"}}),qt=new y({props:{name:"forward",anchor:"transformers.CLIPSegModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPSegModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPSegModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPSegModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPSegModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPSegModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPSegModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPSegModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPSegModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L1072",returnDescription:`
<p>A <code>transformers.models.clipseg.modeling_clipseg.CLIPSegOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clipseg.configuration_clipseg.CLIPSegConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegTextModel"
>CLIPSegTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegVisionModel"
>CLIPSegVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegTextModel"
>CLIPSegTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegVisionModel"
>CLIPSegVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clipseg.modeling_clipseg.CLIPSegOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new Ho({props:{$$slots:{default:[Id]},$$scope:{ctx:w}}}),Oe=new $e({props:{anchor:"transformers.CLIPSegModel.forward.example",$$slots:{default:[Pd]},$$scope:{ctx:w}}}),At=new y({props:{name:"get_text_features",anchor:"transformers.CLIPSegModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPSegModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPSegModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPSegModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPSegModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPSegModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPSegModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L976",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegTextModel"
>CLIPSegTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ne=new Ho({props:{$$slots:{default:[vd]},$$scope:{ctx:w}}}),We=new $e({props:{anchor:"transformers.CLIPSegModel.get_text_features.example",$$slots:{default:[$d]},$$scope:{ctx:w}}}),Dt=new y({props:{name:"get_image_features",anchor:"transformers.CLIPSegModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPSegModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPSegModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPSegModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPSegModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L1023",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegVisionModel"
>CLIPSegVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Be=new Ho({props:{$$slots:{default:[Sd]},$$scope:{ctx:w}}}),He=new $e({props:{anchor:"transformers.CLIPSegModel.get_image_features.example",$$slots:{default:[bd]},$$scope:{ctx:w}}}),Ft=new X({}),Vt=new y({props:{name:"class transformers.CLIPSegTextModel",anchor:"transformers.CLIPSegTextModel",parameters:[{name:"config",val:": CLIPSegTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L773"}}),Ot=new y({props:{name:"forward",anchor:"transformers.CLIPSegTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPSegTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPSegTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPSegTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPSegTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPSegTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPSegTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L790",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clipseg.configuration_clipseg.CLIPSegTextConfig'&gt;</code>) and inputs.</p>
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
`}}),Ue=new Ho({props:{$$slots:{default:[Ld]},$$scope:{ctx:w}}}),Ge=new $e({props:{anchor:"transformers.CLIPSegTextModel.forward.example",$$slots:{default:[wd]},$$scope:{ctx:w}}}),Nt=new X({}),Wt=new y({props:{name:"class transformers.CLIPSegVisionModel",anchor:"transformers.CLIPSegVisionModel",parameters:[{name:"config",val:": CLIPSegVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L888"}}),Bt=new y({props:{name:"forward",anchor:"transformers.CLIPSegVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPSegVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPSegVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPSegVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPSegVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L901",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clipseg.configuration_clipseg.CLIPSegVisionConfig'&gt;</code>) and inputs.</p>
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
`}}),Ke=new Ho({props:{$$slots:{default:[xd]},$$scope:{ctx:w}}}),Qe=new $e({props:{anchor:"transformers.CLIPSegVisionModel.forward.example",$$slots:{default:[yd]},$$scope:{ctx:w}}}),Ht=new X({}),Rt=new y({props:{name:"class transformers.CLIPSegForImageSegmentation",anchor:"transformers.CLIPSegForImageSegmentation",parameters:[{name:"config",val:": CLIPSegConfig"}],parametersDescription:[{anchor:"transformers.CLIPSegForImageSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegConfig">CLIPSegConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L1329"}}),Jt=new y({props:{name:"forward",anchor:"transformers.CLIPSegForImageSegmentation.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"conditional_pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"conditional_embeddings",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPSegForImageSegmentation.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPSegForImageSegmentation.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPSegForImageSegmentation.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPSegForImageSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPSegForImageSegmentation.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPSegForImageSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPSegForImageSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPSegForImageSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CLIPSegForImageSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clipseg/modeling_clipseg.py#L1374",returnDescription:`
<p>A <code>transformers.models.clipseg.modeling_clipseg.CLIPSegImageSegmentationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clipseg.configuration_clipseg.CLIPSegTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.
\u2026</li>
<li><strong>vision_model_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegVisionModel"
>CLIPSegVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clipseg.modeling_clipseg.CLIPSegImageSegmentationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ye=new Ho({props:{$$slots:{default:[Td]},$$scope:{ctx:w}}}),Ze=new $e({props:{anchor:"transformers.CLIPSegForImageSegmentation.forward.example",$$slots:{default:[kd]},$$scope:{ctx:w}}}),{c(){d=r("meta"),I=f(),p=r("h1"),m=r("a"),C=r("span"),P(n.$$.fragment),c=f(),x=r("span"),wr=i("CLIPSeg"),qn=f(),Y=r("h2"),Le=r("a"),Ro=r("span"),P(dt.$$.fragment),xr=f(),Uo=r("span"),yr=i("Overview"),An=f(),H=r("p"),Tr=i("The CLIPSeg model was proposed in "),ct=r("a"),kr=i("Image Segmentation Using Text and Image Prompts"),Mr=i(` by Timo L\xFCddecke
and Alexander Ecker. CLIPSeg adds a minimal decoder on top of a frozen `),Zt=r("a"),Er=i("CLIP"),jr=i(" model for zero- and one-shot image segmentation."),Dn=f(),eo=r("p"),zr=i("The abstract from the paper is the following:"),Fn=f(),to=r("p"),Go=r("em"),qr=i(`Image segmentation is usually addressed by training a
model for a fixed set of object classes. Incorporating additional classes or more complex queries later is expensive
as it requires re-training the model on a dataset that encompasses these expressions. Here we propose a system
that can generate image segmentations based on arbitrary
prompts at test time. A prompt can be either a text or an
image. This approach enables us to create a unified model
(trained once) for three common segmentation tasks, which
come with distinct challenges: referring expression segmentation, zero-shot segmentation and one-shot segmentation.
We build upon the CLIP model as a backbone which we extend with a transformer-based decoder that enables dense
prediction. After training on an extended version of the
PhraseCut dataset, our system generates a binary segmentation map for an image based on a free-text prompt or on
an additional image expressing the query. We analyze different variants of the latter image-based prompts in detail.
This novel hybrid input allows for dynamic adaptation not
only to the three segmentation tasks mentioned above, but
to any binary segmentation task where a text or image query
can be formulated. Finally, we find our system to adapt well
to generalized queries involving affordances or properties`),Vn=f(),oo=r("p"),Ar=i("Tips:"),On=f(),we=r("ul"),R=r("li"),no=r("a"),Dr=i("CLIPSegForImageSegmentation"),Fr=i(" adds a decoder on top of "),ro=r("a"),Vr=i("CLIPSegModel"),Or=i(". The latter is identical to "),so=r("a"),Nr=i("CLIPModel"),Wr=i("."),Br=f(),A=r("li"),ao=r("a"),Hr=i("CLIPSegForImageSegmentation"),Rr=i(` can generate image segmentations based on arbitrary prompts at test time. A prompt can be either a text
(provided to the model as `),Jo=r("code"),Ur=i("input_ids"),Gr=i(") or an image (provided to the model as "),Ko=r("code"),Jr=i("conditional_pixel_values"),Kr=i(`). One can also provide custom
conditional embeddings (provided to the model as `),Qo=r("code"),Qr=i("conditional_embeddings"),Xr=i(")."),Nn=f(),xe=r("img"),Wn=f(),gt=r("small"),Yr=i("CLIPSeg overview. Taken from the "),io=r("a"),Zr=i("original paper."),Bn=f(),U=r("p"),es=i("This model was contributed by "),mt=r("a"),ts=i("nielsr"),os=i(`.
The original code can be found `),pt=r("a"),ns=i("here"),rs=i("."),Hn=f(),Z=r("h2"),ye=r("a"),Xo=r("span"),P(ft.$$.fragment),ss=f(),Yo=r("span"),as=i("CLIPSegConfig"),Rn=f(),T=r("div"),P(ht.$$.fragment),is=f(),G=r("p"),lo=r("a"),ls=i("CLIPSegConfig"),ds=i(" is the configuration class to store the configuration of a "),co=r("a"),cs=i("CLIPSegModel"),gs=i(`. It is used to
instantiate a CLIPSeg model according to the specified arguments, defining the text model and vision model configs.
Instantiating a configuration with the defaults will yield a similar configuration to that of the CLIPSeg
`),ut=r("a"),ms=i("CIDAS/clipseg-rd64"),ps=i(" architecture."),fs=f(),ee=r("p"),hs=i("Configuration objects inherit from "),go=r("a"),us=i("PretrainedConfig"),_s=i(` and can be used to control the model outputs. Read the
documentation from `),mo=r("a"),Cs=i("PretrainedConfig"),Is=i(" for more information."),Ps=f(),P(Te.$$.fragment),vs=f(),ke=r("div"),P(_t.$$.fragment),$s=f(),Ct=r("p"),Ss=i("Instantiate a "),po=r("a"),bs=i("CLIPSegConfig"),Ls=i(` (or a derived class) from clipseg text model configuration and clipseg vision
model configuration.`),Un=f(),te=r("h2"),Me=r("a"),Zo=r("span"),P(It.$$.fragment),ws=f(),en=r("span"),xs=i("CLIPSegTextConfig"),Gn=f(),j=r("div"),P(Pt.$$.fragment),ys=f(),oe=r("p"),Ts=i("This is the configuration class to store the configuration of a "),fo=r("a"),ks=i("CLIPSegModel"),Ms=i(`. It is used to instantiate an
CLIPSeg model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the CLIPSeg
`),vt=r("a"),Es=i("CIDAS/clipseg-rd64"),js=i(" architecture."),zs=f(),ne=r("p"),qs=i("Configuration objects inherit from "),ho=r("a"),As=i("PretrainedConfig"),Ds=i(` and can be used to control the model outputs. Read the
documentation from `),uo=r("a"),Fs=i("PretrainedConfig"),Vs=i(" for more information."),Os=f(),P(Ee.$$.fragment),Jn=f(),re=r("h2"),je=r("a"),tn=r("span"),P($t.$$.fragment),Ns=f(),on=r("span"),Ws=i("CLIPSegVisionConfig"),Kn=f(),z=r("div"),P(St.$$.fragment),Bs=f(),se=r("p"),Hs=i("This is the configuration class to store the configuration of a "),_o=r("a"),Rs=i("CLIPSegModel"),Us=i(`. It is used to instantiate an
CLIPSeg model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the CLIPSeg
`),bt=r("a"),Gs=i("CIDAS/clipseg-rd64"),Js=i(" architecture."),Ks=f(),ae=r("p"),Qs=i("Configuration objects inherit from "),Co=r("a"),Xs=i("PretrainedConfig"),Ys=i(` and can be used to control the model outputs. Read the
documentation from `),Io=r("a"),Zs=i("PretrainedConfig"),ea=i(" for more information."),ta=f(),P(ze.$$.fragment),Qn=f(),ie=r("h2"),qe=r("a"),nn=r("span"),P(Lt.$$.fragment),oa=f(),rn=r("span"),na=i("CLIPSegProcessor"),Xn=f(),k=r("div"),P(wt.$$.fragment),ra=f(),sn=r("p"),sa=i(`Constructs a CLIPSeg processor which wraps a CLIPSeg feature extractor and a CLIP tokenizer into a single
processor.`),aa=f(),E=r("p"),Po=r("a"),ia=i("CLIPSegProcessor"),la=i(" offers all the functionalities of "),vo=r("a"),da=i("ViTFeatureExtractor"),ca=i(" and "),$o=r("a"),ga=i("CLIPTokenizerFast"),ma=i(`. See the
`),an=r("code"),pa=i("__call__()"),fa=i(" and "),So=r("a"),ha=i("decode()"),ua=i(" for more information."),_a=f(),Ae=r("div"),P(xt.$$.fragment),Ca=f(),yt=r("p"),Ia=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),bo=r("a"),Pa=i("batch_decode()"),va=i(`. Please
refer to the docstring of this method for more information.`),$a=f(),De=r("div"),P(Tt.$$.fragment),Sa=f(),kt=r("p"),ba=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Lo=r("a"),La=i("decode()"),wa=i(`. Please refer to
the docstring of this method for more information.`),Yn=f(),le=r("h2"),Fe=r("a"),ln=r("span"),P(Mt.$$.fragment),xa=f(),dn=r("span"),ya=i("CLIPSegModel"),Zn=f(),M=r("div"),P(Et.$$.fragment),Ta=f(),jt=r("p"),ka=i("This model is a PyTorch "),zt=r("a"),Ma=i("torch.nn.Module"),Ea=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ja=f(),D=r("div"),P(qt.$$.fragment),za=f(),de=r("p"),qa=i("The "),wo=r("a"),Aa=i("CLIPSegModel"),Da=i(" forward method, overrides the "),cn=r("code"),Fa=i("__call__"),Va=i(" special method."),Oa=f(),P(Ve.$$.fragment),Na=f(),P(Oe.$$.fragment),Wa=f(),F=r("div"),P(At.$$.fragment),Ba=f(),ce=r("p"),Ha=i("The "),xo=r("a"),Ra=i("CLIPSegModel"),Ua=i(" forward method, overrides the "),gn=r("code"),Ga=i("__call__"),Ja=i(" special method."),Ka=f(),P(Ne.$$.fragment),Qa=f(),P(We.$$.fragment),Xa=f(),V=r("div"),P(Dt.$$.fragment),Ya=f(),ge=r("p"),Za=i("The "),yo=r("a"),ei=i("CLIPSegModel"),ti=i(" forward method, overrides the "),mn=r("code"),oi=i("__call__"),ni=i(" special method."),ri=f(),P(Be.$$.fragment),si=f(),P(He.$$.fragment),er=f(),me=r("h2"),Re=r("a"),pn=r("span"),P(Ft.$$.fragment),ai=f(),fn=r("span"),ii=i("CLIPSegTextModel"),tr=f(),pe=r("div"),P(Vt.$$.fragment),li=f(),O=r("div"),P(Ot.$$.fragment),di=f(),fe=r("p"),ci=i("The "),To=r("a"),gi=i("CLIPSegTextModel"),mi=i(" forward method, overrides the "),hn=r("code"),pi=i("__call__"),fi=i(" special method."),hi=f(),P(Ue.$$.fragment),ui=f(),P(Ge.$$.fragment),or=f(),he=r("h2"),Je=r("a"),un=r("span"),P(Nt.$$.fragment),_i=f(),_n=r("span"),Ci=i("CLIPSegVisionModel"),nr=f(),ue=r("div"),P(Wt.$$.fragment),Ii=f(),N=r("div"),P(Bt.$$.fragment),Pi=f(),_e=r("p"),vi=i("The "),ko=r("a"),$i=i("CLIPSegVisionModel"),Si=i(" forward method, overrides the "),Cn=r("code"),bi=i("__call__"),Li=i(" special method."),wi=f(),P(Ke.$$.fragment),xi=f(),P(Qe.$$.fragment),rr=f(),Ce=r("h2"),Xe=r("a"),In=r("span"),P(Ht.$$.fragment),yi=f(),Pn=r("span"),Ti=i("CLIPSegForImageSegmentation"),sr=f(),q=r("div"),P(Rt.$$.fragment),ki=f(),vn=r("p"),Mi=i("CLIPSeg model with a Transformer-based decoder on top for zero-shot and one-shot image segmentation."),Ei=f(),Ut=r("p"),ji=i("This model is a PyTorch "),Gt=r("a"),zi=i("torch.nn.Module"),qi=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ai=f(),W=r("div"),P(Jt.$$.fragment),Di=f(),Ie=r("p"),Fi=i("The "),Mo=r("a"),Vi=i("CLIPSegForImageSegmentation"),Oi=i(" forward method, overrides the "),$n=r("code"),Ni=i("__call__"),Wi=i(" special method."),Bi=f(),P(Ye.$$.fragment),Hi=f(),P(Ze.$$.fragment),this.h()},l(t){const u=pd('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(o),I=h(t),p=s(t,"H1",{class:!0});var Kt=a(p);m=s(Kt,"A",{id:!0,class:!0,href:!0});var Sn=a(m);C=s(Sn,"SPAN",{});var bn=a(C);v(n.$$.fragment,bn),bn.forEach(o),Sn.forEach(o),c=h(Kt),x=s(Kt,"SPAN",{});var Ln=a(x);wr=l(Ln,"CLIPSeg"),Ln.forEach(o),Kt.forEach(o),qn=h(t),Y=s(t,"H2",{class:!0});var Qt=a(Y);Le=s(Qt,"A",{id:!0,class:!0,href:!0});var wn=a(Le);Ro=s(wn,"SPAN",{});var xn=a(Ro);v(dt.$$.fragment,xn),xn.forEach(o),wn.forEach(o),xr=h(Qt),Uo=s(Qt,"SPAN",{});var yn=a(Uo);yr=l(yn,"Overview"),yn.forEach(o),Qt.forEach(o),An=h(t),H=s(t,"P",{});var Pe=a(H);Tr=l(Pe,"The CLIPSeg model was proposed in "),ct=s(Pe,"A",{href:!0,rel:!0});var Tn=a(ct);kr=l(Tn,"Image Segmentation Using Text and Image Prompts"),Tn.forEach(o),Mr=l(Pe,` by Timo L\xFCddecke
and Alexander Ecker. CLIPSeg adds a minimal decoder on top of a frozen `),Zt=s(Pe,"A",{href:!0});var kn=a(Zt);Er=l(kn,"CLIP"),kn.forEach(o),jr=l(Pe," model for zero- and one-shot image segmentation."),Pe.forEach(o),Dn=h(t),eo=s(t,"P",{});var Mn=a(eo);zr=l(Mn,"The abstract from the paper is the following:"),Mn.forEach(o),Fn=h(t),to=s(t,"P",{});var En=a(to);Go=s(En,"EM",{});var jn=a(Go);qr=l(jn,`Image segmentation is usually addressed by training a
model for a fixed set of object classes. Incorporating additional classes or more complex queries later is expensive
as it requires re-training the model on a dataset that encompasses these expressions. Here we propose a system
that can generate image segmentations based on arbitrary
prompts at test time. A prompt can be either a text or an
image. This approach enables us to create a unified model
(trained once) for three common segmentation tasks, which
come with distinct challenges: referring expression segmentation, zero-shot segmentation and one-shot segmentation.
We build upon the CLIP model as a backbone which we extend with a transformer-based decoder that enables dense
prediction. After training on an extended version of the
PhraseCut dataset, our system generates a binary segmentation map for an image based on a free-text prompt or on
an additional image expressing the query. We analyze different variants of the latter image-based prompts in detail.
This novel hybrid input allows for dynamic adaptation not
only to the three segmentation tasks mentioned above, but
to any binary segmentation task where a text or image query
can be formulated. Finally, we find our system to adapt well
to generalized queries involving affordances or properties`),jn.forEach(o),En.forEach(o),Vn=h(t),oo=s(t,"P",{});var zn=a(oo);Ar=l(zn,"Tips:"),zn.forEach(o),On=h(t),we=s(t,"UL",{});var ir=a(we);R=s(ir,"LI",{});var Xt=a(R);no=s(Xt,"A",{href:!0});var Gi=a(no);Dr=l(Gi,"CLIPSegForImageSegmentation"),Gi.forEach(o),Fr=l(Xt," adds a decoder on top of "),ro=s(Xt,"A",{href:!0});var Ji=a(ro);Vr=l(Ji,"CLIPSegModel"),Ji.forEach(o),Or=l(Xt,". The latter is identical to "),so=s(Xt,"A",{href:!0});var Ki=a(so);Nr=l(Ki,"CLIPModel"),Ki.forEach(o),Wr=l(Xt,"."),Xt.forEach(o),Br=h(ir),A=s(ir,"LI",{});var ve=a(A);ao=s(ve,"A",{href:!0});var Qi=a(ao);Hr=l(Qi,"CLIPSegForImageSegmentation"),Qi.forEach(o),Rr=l(ve,` can generate image segmentations based on arbitrary prompts at test time. A prompt can be either a text
(provided to the model as `),Jo=s(ve,"CODE",{});var Xi=a(Jo);Ur=l(Xi,"input_ids"),Xi.forEach(o),Gr=l(ve,") or an image (provided to the model as "),Ko=s(ve,"CODE",{});var Yi=a(Ko);Jr=l(Yi,"conditional_pixel_values"),Yi.forEach(o),Kr=l(ve,`). One can also provide custom
conditional embeddings (provided to the model as `),Qo=s(ve,"CODE",{});var Zi=a(Qo);Qr=l(Zi,"conditional_embeddings"),Zi.forEach(o),Xr=l(ve,")."),ve.forEach(o),ir.forEach(o),Nn=h(t),xe=s(t,"IMG",{src:!0,alt:!0,width:!0}),Wn=h(t),gt=s(t,"SMALL",{});var Ri=a(gt);Yr=l(Ri,"CLIPSeg overview. Taken from the "),io=s(Ri,"A",{href:!0});var el=a(io);Zr=l(el,"original paper."),el.forEach(o),Ri.forEach(o),Bn=h(t),U=s(t,"P",{});var Eo=a(U);es=l(Eo,"This model was contributed by "),mt=s(Eo,"A",{href:!0,rel:!0});var tl=a(mt);ts=l(tl,"nielsr"),tl.forEach(o),os=l(Eo,`.
The original code can be found `),pt=s(Eo,"A",{href:!0,rel:!0});var ol=a(pt);ns=l(ol,"here"),ol.forEach(o),rs=l(Eo,"."),Eo.forEach(o),Hn=h(t),Z=s(t,"H2",{class:!0});var lr=a(Z);ye=s(lr,"A",{id:!0,class:!0,href:!0});var nl=a(ye);Xo=s(nl,"SPAN",{});var rl=a(Xo);v(ft.$$.fragment,rl),rl.forEach(o),nl.forEach(o),ss=h(lr),Yo=s(lr,"SPAN",{});var sl=a(Yo);as=l(sl,"CLIPSegConfig"),sl.forEach(o),lr.forEach(o),Rn=h(t),T=s(t,"DIV",{class:!0});var J=a(T);v(ht.$$.fragment,J),is=h(J),G=s(J,"P",{});var Yt=a(G);lo=s(Yt,"A",{href:!0});var al=a(lo);ls=l(al,"CLIPSegConfig"),al.forEach(o),ds=l(Yt," is the configuration class to store the configuration of a "),co=s(Yt,"A",{href:!0});var il=a(co);cs=l(il,"CLIPSegModel"),il.forEach(o),gs=l(Yt,`. It is used to
instantiate a CLIPSeg model according to the specified arguments, defining the text model and vision model configs.
Instantiating a configuration with the defaults will yield a similar configuration to that of the CLIPSeg
`),ut=s(Yt,"A",{href:!0,rel:!0});var ll=a(ut);ms=l(ll,"CIDAS/clipseg-rd64"),ll.forEach(o),ps=l(Yt," architecture."),Yt.forEach(o),fs=h(J),ee=s(J,"P",{});var jo=a(ee);hs=l(jo,"Configuration objects inherit from "),go=s(jo,"A",{href:!0});var dl=a(go);us=l(dl,"PretrainedConfig"),dl.forEach(o),_s=l(jo,` and can be used to control the model outputs. Read the
documentation from `),mo=s(jo,"A",{href:!0});var cl=a(mo);Cs=l(cl,"PretrainedConfig"),cl.forEach(o),Is=l(jo," for more information."),jo.forEach(o),Ps=h(J),v(Te.$$.fragment,J),vs=h(J),ke=s(J,"DIV",{class:!0});var dr=a(ke);v(_t.$$.fragment,dr),$s=h(dr),Ct=s(dr,"P",{});var cr=a(Ct);Ss=l(cr,"Instantiate a "),po=s(cr,"A",{href:!0});var gl=a(po);bs=l(gl,"CLIPSegConfig"),gl.forEach(o),Ls=l(cr,` (or a derived class) from clipseg text model configuration and clipseg vision
model configuration.`),cr.forEach(o),dr.forEach(o),J.forEach(o),Un=h(t),te=s(t,"H2",{class:!0});var gr=a(te);Me=s(gr,"A",{id:!0,class:!0,href:!0});var ml=a(Me);Zo=s(ml,"SPAN",{});var pl=a(Zo);v(It.$$.fragment,pl),pl.forEach(o),ml.forEach(o),ws=h(gr),en=s(gr,"SPAN",{});var fl=a(en);xs=l(fl,"CLIPSegTextConfig"),fl.forEach(o),gr.forEach(o),Gn=h(t),j=s(t,"DIV",{class:!0});var et=a(j);v(Pt.$$.fragment,et),ys=h(et),oe=s(et,"P",{});var zo=a(oe);Ts=l(zo,"This is the configuration class to store the configuration of a "),fo=s(zo,"A",{href:!0});var hl=a(fo);ks=l(hl,"CLIPSegModel"),hl.forEach(o),Ms=l(zo,`. It is used to instantiate an
CLIPSeg model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the CLIPSeg
`),vt=s(zo,"A",{href:!0,rel:!0});var ul=a(vt);Es=l(ul,"CIDAS/clipseg-rd64"),ul.forEach(o),js=l(zo," architecture."),zo.forEach(o),zs=h(et),ne=s(et,"P",{});var qo=a(ne);qs=l(qo,"Configuration objects inherit from "),ho=s(qo,"A",{href:!0});var _l=a(ho);As=l(_l,"PretrainedConfig"),_l.forEach(o),Ds=l(qo,` and can be used to control the model outputs. Read the
documentation from `),uo=s(qo,"A",{href:!0});var Cl=a(uo);Fs=l(Cl,"PretrainedConfig"),Cl.forEach(o),Vs=l(qo," for more information."),qo.forEach(o),Os=h(et),v(Ee.$$.fragment,et),et.forEach(o),Jn=h(t),re=s(t,"H2",{class:!0});var mr=a(re);je=s(mr,"A",{id:!0,class:!0,href:!0});var Il=a(je);tn=s(Il,"SPAN",{});var Pl=a(tn);v($t.$$.fragment,Pl),Pl.forEach(o),Il.forEach(o),Ns=h(mr),on=s(mr,"SPAN",{});var vl=a(on);Ws=l(vl,"CLIPSegVisionConfig"),vl.forEach(o),mr.forEach(o),Kn=h(t),z=s(t,"DIV",{class:!0});var tt=a(z);v(St.$$.fragment,tt),Bs=h(tt),se=s(tt,"P",{});var Ao=a(se);Hs=l(Ao,"This is the configuration class to store the configuration of a "),_o=s(Ao,"A",{href:!0});var $l=a(_o);Rs=l($l,"CLIPSegModel"),$l.forEach(o),Us=l(Ao,`. It is used to instantiate an
CLIPSeg model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the CLIPSeg
`),bt=s(Ao,"A",{href:!0,rel:!0});var Sl=a(bt);Gs=l(Sl,"CIDAS/clipseg-rd64"),Sl.forEach(o),Js=l(Ao," architecture."),Ao.forEach(o),Ks=h(tt),ae=s(tt,"P",{});var Do=a(ae);Qs=l(Do,"Configuration objects inherit from "),Co=s(Do,"A",{href:!0});var bl=a(Co);Xs=l(bl,"PretrainedConfig"),bl.forEach(o),Ys=l(Do,` and can be used to control the model outputs. Read the
documentation from `),Io=s(Do,"A",{href:!0});var Ll=a(Io);Zs=l(Ll,"PretrainedConfig"),Ll.forEach(o),ea=l(Do," for more information."),Do.forEach(o),ta=h(tt),v(ze.$$.fragment,tt),tt.forEach(o),Qn=h(t),ie=s(t,"H2",{class:!0});var pr=a(ie);qe=s(pr,"A",{id:!0,class:!0,href:!0});var wl=a(qe);nn=s(wl,"SPAN",{});var xl=a(nn);v(Lt.$$.fragment,xl),xl.forEach(o),wl.forEach(o),oa=h(pr),rn=s(pr,"SPAN",{});var yl=a(rn);na=l(yl,"CLIPSegProcessor"),yl.forEach(o),pr.forEach(o),Xn=h(t),k=s(t,"DIV",{class:!0});var K=a(k);v(wt.$$.fragment,K),ra=h(K),sn=s(K,"P",{});var Tl=a(sn);sa=l(Tl,`Constructs a CLIPSeg processor which wraps a CLIPSeg feature extractor and a CLIP tokenizer into a single
processor.`),Tl.forEach(o),aa=h(K),E=s(K,"P",{});var B=a(E);Po=s(B,"A",{href:!0});var kl=a(Po);ia=l(kl,"CLIPSegProcessor"),kl.forEach(o),la=l(B," offers all the functionalities of "),vo=s(B,"A",{href:!0});var Ml=a(vo);da=l(Ml,"ViTFeatureExtractor"),Ml.forEach(o),ca=l(B," and "),$o=s(B,"A",{href:!0});var El=a($o);ga=l(El,"CLIPTokenizerFast"),El.forEach(o),ma=l(B,`. See the
`),an=s(B,"CODE",{});var jl=a(an);pa=l(jl,"__call__()"),jl.forEach(o),fa=l(B," and "),So=s(B,"A",{href:!0});var zl=a(So);ha=l(zl,"decode()"),zl.forEach(o),ua=l(B," for more information."),B.forEach(o),_a=h(K),Ae=s(K,"DIV",{class:!0});var fr=a(Ae);v(xt.$$.fragment,fr),Ca=h(fr),yt=s(fr,"P",{});var hr=a(yt);Ia=l(hr,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),bo=s(hr,"A",{href:!0});var ql=a(bo);Pa=l(ql,"batch_decode()"),ql.forEach(o),va=l(hr,`. Please
refer to the docstring of this method for more information.`),hr.forEach(o),fr.forEach(o),$a=h(K),De=s(K,"DIV",{class:!0});var ur=a(De);v(Tt.$$.fragment,ur),Sa=h(ur),kt=s(ur,"P",{});var _r=a(kt);ba=l(_r,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Lo=s(_r,"A",{href:!0});var Al=a(Lo);La=l(Al,"decode()"),Al.forEach(o),wa=l(_r,`. Please refer to
the docstring of this method for more information.`),_r.forEach(o),ur.forEach(o),K.forEach(o),Yn=h(t),le=s(t,"H2",{class:!0});var Cr=a(le);Fe=s(Cr,"A",{id:!0,class:!0,href:!0});var Dl=a(Fe);ln=s(Dl,"SPAN",{});var Fl=a(ln);v(Mt.$$.fragment,Fl),Fl.forEach(o),Dl.forEach(o),xa=h(Cr),dn=s(Cr,"SPAN",{});var Vl=a(dn);ya=l(Vl,"CLIPSegModel"),Vl.forEach(o),Cr.forEach(o),Zn=h(t),M=s(t,"DIV",{class:!0});var Q=a(M);v(Et.$$.fragment,Q),Ta=h(Q),jt=s(Q,"P",{});var Ir=a(jt);ka=l(Ir,"This model is a PyTorch "),zt=s(Ir,"A",{href:!0,rel:!0});var Ol=a(zt);Ma=l(Ol,"torch.nn.Module"),Ol.forEach(o),Ea=l(Ir,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ir.forEach(o),ja=h(Q),D=s(Q,"DIV",{class:!0});var ot=a(D);v(qt.$$.fragment,ot),za=h(ot),de=s(ot,"P",{});var Fo=a(de);qa=l(Fo,"The "),wo=s(Fo,"A",{href:!0});var Nl=a(wo);Aa=l(Nl,"CLIPSegModel"),Nl.forEach(o),Da=l(Fo," forward method, overrides the "),cn=s(Fo,"CODE",{});var Wl=a(cn);Fa=l(Wl,"__call__"),Wl.forEach(o),Va=l(Fo," special method."),Fo.forEach(o),Oa=h(ot),v(Ve.$$.fragment,ot),Na=h(ot),v(Oe.$$.fragment,ot),ot.forEach(o),Wa=h(Q),F=s(Q,"DIV",{class:!0});var nt=a(F);v(At.$$.fragment,nt),Ba=h(nt),ce=s(nt,"P",{});var Vo=a(ce);Ha=l(Vo,"The "),xo=s(Vo,"A",{href:!0});var Bl=a(xo);Ra=l(Bl,"CLIPSegModel"),Bl.forEach(o),Ua=l(Vo," forward method, overrides the "),gn=s(Vo,"CODE",{});var Hl=a(gn);Ga=l(Hl,"__call__"),Hl.forEach(o),Ja=l(Vo," special method."),Vo.forEach(o),Ka=h(nt),v(Ne.$$.fragment,nt),Qa=h(nt),v(We.$$.fragment,nt),nt.forEach(o),Xa=h(Q),V=s(Q,"DIV",{class:!0});var rt=a(V);v(Dt.$$.fragment,rt),Ya=h(rt),ge=s(rt,"P",{});var Oo=a(ge);Za=l(Oo,"The "),yo=s(Oo,"A",{href:!0});var Rl=a(yo);ei=l(Rl,"CLIPSegModel"),Rl.forEach(o),ti=l(Oo," forward method, overrides the "),mn=s(Oo,"CODE",{});var Ul=a(mn);oi=l(Ul,"__call__"),Ul.forEach(o),ni=l(Oo," special method."),Oo.forEach(o),ri=h(rt),v(Be.$$.fragment,rt),si=h(rt),v(He.$$.fragment,rt),rt.forEach(o),Q.forEach(o),er=h(t),me=s(t,"H2",{class:!0});var Pr=a(me);Re=s(Pr,"A",{id:!0,class:!0,href:!0});var Gl=a(Re);pn=s(Gl,"SPAN",{});var Jl=a(pn);v(Ft.$$.fragment,Jl),Jl.forEach(o),Gl.forEach(o),ai=h(Pr),fn=s(Pr,"SPAN",{});var Kl=a(fn);ii=l(Kl,"CLIPSegTextModel"),Kl.forEach(o),Pr.forEach(o),tr=h(t),pe=s(t,"DIV",{class:!0});var vr=a(pe);v(Vt.$$.fragment,vr),li=h(vr),O=s(vr,"DIV",{class:!0});var st=a(O);v(Ot.$$.fragment,st),di=h(st),fe=s(st,"P",{});var No=a(fe);ci=l(No,"The "),To=s(No,"A",{href:!0});var Ql=a(To);gi=l(Ql,"CLIPSegTextModel"),Ql.forEach(o),mi=l(No," forward method, overrides the "),hn=s(No,"CODE",{});var Xl=a(hn);pi=l(Xl,"__call__"),Xl.forEach(o),fi=l(No," special method."),No.forEach(o),hi=h(st),v(Ue.$$.fragment,st),ui=h(st),v(Ge.$$.fragment,st),st.forEach(o),vr.forEach(o),or=h(t),he=s(t,"H2",{class:!0});var $r=a(he);Je=s($r,"A",{id:!0,class:!0,href:!0});var Yl=a(Je);un=s(Yl,"SPAN",{});var Zl=a(un);v(Nt.$$.fragment,Zl),Zl.forEach(o),Yl.forEach(o),_i=h($r),_n=s($r,"SPAN",{});var ed=a(_n);Ci=l(ed,"CLIPSegVisionModel"),ed.forEach(o),$r.forEach(o),nr=h(t),ue=s(t,"DIV",{class:!0});var Sr=a(ue);v(Wt.$$.fragment,Sr),Ii=h(Sr),N=s(Sr,"DIV",{class:!0});var at=a(N);v(Bt.$$.fragment,at),Pi=h(at),_e=s(at,"P",{});var Wo=a(_e);vi=l(Wo,"The "),ko=s(Wo,"A",{href:!0});var td=a(ko);$i=l(td,"CLIPSegVisionModel"),td.forEach(o),Si=l(Wo," forward method, overrides the "),Cn=s(Wo,"CODE",{});var od=a(Cn);bi=l(od,"__call__"),od.forEach(o),Li=l(Wo," special method."),Wo.forEach(o),wi=h(at),v(Ke.$$.fragment,at),xi=h(at),v(Qe.$$.fragment,at),at.forEach(o),Sr.forEach(o),rr=h(t),Ce=s(t,"H2",{class:!0});var br=a(Ce);Xe=s(br,"A",{id:!0,class:!0,href:!0});var nd=a(Xe);In=s(nd,"SPAN",{});var rd=a(In);v(Ht.$$.fragment,rd),rd.forEach(o),nd.forEach(o),yi=h(br),Pn=s(br,"SPAN",{});var sd=a(Pn);Ti=l(sd,"CLIPSegForImageSegmentation"),sd.forEach(o),br.forEach(o),sr=h(t),q=s(t,"DIV",{class:!0});var it=a(q);v(Rt.$$.fragment,it),ki=h(it),vn=s(it,"P",{});var ad=a(vn);Mi=l(ad,"CLIPSeg model with a Transformer-based decoder on top for zero-shot and one-shot image segmentation."),ad.forEach(o),Ei=h(it),Ut=s(it,"P",{});var Lr=a(Ut);ji=l(Lr,"This model is a PyTorch "),Gt=s(Lr,"A",{href:!0,rel:!0});var id=a(Gt);zi=l(id,"torch.nn.Module"),id.forEach(o),qi=l(Lr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Lr.forEach(o),Ai=h(it),W=s(it,"DIV",{class:!0});var lt=a(W);v(Jt.$$.fragment,lt),Di=h(lt),Ie=s(lt,"P",{});var Bo=a(Ie);Fi=l(Bo,"The "),Mo=s(Bo,"A",{href:!0});var ld=a(Mo);Vi=l(ld,"CLIPSegForImageSegmentation"),ld.forEach(o),Oi=l(Bo," forward method, overrides the "),$n=s(Bo,"CODE",{});var dd=a($n);Ni=l(dd,"__call__"),dd.forEach(o),Wi=l(Bo," special method."),Bo.forEach(o),Bi=h(lt),v(Ye.$$.fragment,lt),Hi=h(lt),v(Ze.$$.fragment,lt),lt.forEach(o),it.forEach(o),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(Ed)),g(m,"id","clipseg"),g(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(m,"href","#clipseg"),g(p,"class","relative group"),g(Le,"id","overview"),g(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Le,"href","#overview"),g(Y,"class","relative group"),g(ct,"href","https://arxiv.org/abs/2112.10003"),g(ct,"rel","nofollow"),g(Zt,"href","clip"),g(no,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegForImageSegmentation"),g(ro,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegModel"),g(so,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),g(ao,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegForImageSegmentation"),fd(xe.src,Ui="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/clipseg_architecture.png")||g(xe,"src",Ui),g(xe,"alt","drawing"),g(xe,"width","600"),g(io,"href","https://arxiv.org/abs/2112.10003"),g(mt,"href","https://huggingface.co/nielsr"),g(mt,"rel","nofollow"),g(pt,"href","https://github.com/timojl/clipseg"),g(pt,"rel","nofollow"),g(ye,"id","transformers.CLIPSegConfig"),g(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ye,"href","#transformers.CLIPSegConfig"),g(Z,"class","relative group"),g(lo,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegConfig"),g(co,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegModel"),g(ut,"href","https://huggingface.co/CIDAS/clipseg-rd64"),g(ut,"rel","nofollow"),g(go,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(mo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(po,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegConfig"),g(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Me,"id","transformers.CLIPSegTextConfig"),g(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Me,"href","#transformers.CLIPSegTextConfig"),g(te,"class","relative group"),g(fo,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegModel"),g(vt,"href","https://huggingface.co/CIDAS/clipseg-rd64"),g(vt,"rel","nofollow"),g(ho,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(uo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(je,"id","transformers.CLIPSegVisionConfig"),g(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(je,"href","#transformers.CLIPSegVisionConfig"),g(re,"class","relative group"),g(_o,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegModel"),g(bt,"href","https://huggingface.co/CIDAS/clipseg-rd64"),g(bt,"rel","nofollow"),g(Co,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(Io,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(qe,"id","transformers.CLIPSegProcessor"),g(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(qe,"href","#transformers.CLIPSegProcessor"),g(ie,"class","relative group"),g(Po,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegProcessor"),g(vo,"href","/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor"),g($o,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),g(So,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegProcessor.decode"),g(bo,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),g(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Lo,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),g(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Fe,"id","transformers.CLIPSegModel"),g(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Fe,"href","#transformers.CLIPSegModel"),g(le,"class","relative group"),g(zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(zt,"rel","nofollow"),g(wo,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegModel"),g(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xo,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegModel"),g(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(yo,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegModel"),g(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Re,"id","transformers.CLIPSegTextModel"),g(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Re,"href","#transformers.CLIPSegTextModel"),g(me,"class","relative group"),g(To,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegTextModel"),g(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Je,"id","transformers.CLIPSegVisionModel"),g(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Je,"href","#transformers.CLIPSegVisionModel"),g(he,"class","relative group"),g(ko,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegVisionModel"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Xe,"id","transformers.CLIPSegForImageSegmentation"),g(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Xe,"href","#transformers.CLIPSegForImageSegmentation"),g(Ce,"class","relative group"),g(Gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Gt,"rel","nofollow"),g(Mo,"href","/docs/transformers/main/en/model_doc/clipseg#transformers.CLIPSegForImageSegmentation"),g(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),_(t,I,u),_(t,p,u),e(p,m),e(m,C),$(n,C,null),e(p,c),e(p,x),e(x,wr),_(t,qn,u),_(t,Y,u),e(Y,Le),e(Le,Ro),$(dt,Ro,null),e(Y,xr),e(Y,Uo),e(Uo,yr),_(t,An,u),_(t,H,u),e(H,Tr),e(H,ct),e(ct,kr),e(H,Mr),e(H,Zt),e(Zt,Er),e(H,jr),_(t,Dn,u),_(t,eo,u),e(eo,zr),_(t,Fn,u),_(t,to,u),e(to,Go),e(Go,qr),_(t,Vn,u),_(t,oo,u),e(oo,Ar),_(t,On,u),_(t,we,u),e(we,R),e(R,no),e(no,Dr),e(R,Fr),e(R,ro),e(ro,Vr),e(R,Or),e(R,so),e(so,Nr),e(R,Wr),e(we,Br),e(we,A),e(A,ao),e(ao,Hr),e(A,Rr),e(A,Jo),e(Jo,Ur),e(A,Gr),e(A,Ko),e(Ko,Jr),e(A,Kr),e(A,Qo),e(Qo,Qr),e(A,Xr),_(t,Nn,u),_(t,xe,u),_(t,Wn,u),_(t,gt,u),e(gt,Yr),e(gt,io),e(io,Zr),_(t,Bn,u),_(t,U,u),e(U,es),e(U,mt),e(mt,ts),e(U,os),e(U,pt),e(pt,ns),e(U,rs),_(t,Hn,u),_(t,Z,u),e(Z,ye),e(ye,Xo),$(ft,Xo,null),e(Z,ss),e(Z,Yo),e(Yo,as),_(t,Rn,u),_(t,T,u),$(ht,T,null),e(T,is),e(T,G),e(G,lo),e(lo,ls),e(G,ds),e(G,co),e(co,cs),e(G,gs),e(G,ut),e(ut,ms),e(G,ps),e(T,fs),e(T,ee),e(ee,hs),e(ee,go),e(go,us),e(ee,_s),e(ee,mo),e(mo,Cs),e(ee,Is),e(T,Ps),$(Te,T,null),e(T,vs),e(T,ke),$(_t,ke,null),e(ke,$s),e(ke,Ct),e(Ct,Ss),e(Ct,po),e(po,bs),e(Ct,Ls),_(t,Un,u),_(t,te,u),e(te,Me),e(Me,Zo),$(It,Zo,null),e(te,ws),e(te,en),e(en,xs),_(t,Gn,u),_(t,j,u),$(Pt,j,null),e(j,ys),e(j,oe),e(oe,Ts),e(oe,fo),e(fo,ks),e(oe,Ms),e(oe,vt),e(vt,Es),e(oe,js),e(j,zs),e(j,ne),e(ne,qs),e(ne,ho),e(ho,As),e(ne,Ds),e(ne,uo),e(uo,Fs),e(ne,Vs),e(j,Os),$(Ee,j,null),_(t,Jn,u),_(t,re,u),e(re,je),e(je,tn),$($t,tn,null),e(re,Ns),e(re,on),e(on,Ws),_(t,Kn,u),_(t,z,u),$(St,z,null),e(z,Bs),e(z,se),e(se,Hs),e(se,_o),e(_o,Rs),e(se,Us),e(se,bt),e(bt,Gs),e(se,Js),e(z,Ks),e(z,ae),e(ae,Qs),e(ae,Co),e(Co,Xs),e(ae,Ys),e(ae,Io),e(Io,Zs),e(ae,ea),e(z,ta),$(ze,z,null),_(t,Qn,u),_(t,ie,u),e(ie,qe),e(qe,nn),$(Lt,nn,null),e(ie,oa),e(ie,rn),e(rn,na),_(t,Xn,u),_(t,k,u),$(wt,k,null),e(k,ra),e(k,sn),e(sn,sa),e(k,aa),e(k,E),e(E,Po),e(Po,ia),e(E,la),e(E,vo),e(vo,da),e(E,ca),e(E,$o),e($o,ga),e(E,ma),e(E,an),e(an,pa),e(E,fa),e(E,So),e(So,ha),e(E,ua),e(k,_a),e(k,Ae),$(xt,Ae,null),e(Ae,Ca),e(Ae,yt),e(yt,Ia),e(yt,bo),e(bo,Pa),e(yt,va),e(k,$a),e(k,De),$(Tt,De,null),e(De,Sa),e(De,kt),e(kt,ba),e(kt,Lo),e(Lo,La),e(kt,wa),_(t,Yn,u),_(t,le,u),e(le,Fe),e(Fe,ln),$(Mt,ln,null),e(le,xa),e(le,dn),e(dn,ya),_(t,Zn,u),_(t,M,u),$(Et,M,null),e(M,Ta),e(M,jt),e(jt,ka),e(jt,zt),e(zt,Ma),e(jt,Ea),e(M,ja),e(M,D),$(qt,D,null),e(D,za),e(D,de),e(de,qa),e(de,wo),e(wo,Aa),e(de,Da),e(de,cn),e(cn,Fa),e(de,Va),e(D,Oa),$(Ve,D,null),e(D,Na),$(Oe,D,null),e(M,Wa),e(M,F),$(At,F,null),e(F,Ba),e(F,ce),e(ce,Ha),e(ce,xo),e(xo,Ra),e(ce,Ua),e(ce,gn),e(gn,Ga),e(ce,Ja),e(F,Ka),$(Ne,F,null),e(F,Qa),$(We,F,null),e(M,Xa),e(M,V),$(Dt,V,null),e(V,Ya),e(V,ge),e(ge,Za),e(ge,yo),e(yo,ei),e(ge,ti),e(ge,mn),e(mn,oi),e(ge,ni),e(V,ri),$(Be,V,null),e(V,si),$(He,V,null),_(t,er,u),_(t,me,u),e(me,Re),e(Re,pn),$(Ft,pn,null),e(me,ai),e(me,fn),e(fn,ii),_(t,tr,u),_(t,pe,u),$(Vt,pe,null),e(pe,li),e(pe,O),$(Ot,O,null),e(O,di),e(O,fe),e(fe,ci),e(fe,To),e(To,gi),e(fe,mi),e(fe,hn),e(hn,pi),e(fe,fi),e(O,hi),$(Ue,O,null),e(O,ui),$(Ge,O,null),_(t,or,u),_(t,he,u),e(he,Je),e(Je,un),$(Nt,un,null),e(he,_i),e(he,_n),e(_n,Ci),_(t,nr,u),_(t,ue,u),$(Wt,ue,null),e(ue,Ii),e(ue,N),$(Bt,N,null),e(N,Pi),e(N,_e),e(_e,vi),e(_e,ko),e(ko,$i),e(_e,Si),e(_e,Cn),e(Cn,bi),e(_e,Li),e(N,wi),$(Ke,N,null),e(N,xi),$(Qe,N,null),_(t,rr,u),_(t,Ce,u),e(Ce,Xe),e(Xe,In),$(Ht,In,null),e(Ce,yi),e(Ce,Pn),e(Pn,Ti),_(t,sr,u),_(t,q,u),$(Rt,q,null),e(q,ki),e(q,vn),e(vn,Mi),e(q,Ei),e(q,Ut),e(Ut,ji),e(Ut,Gt),e(Gt,zi),e(Ut,qi),e(q,Ai),e(q,W),$(Jt,W,null),e(W,Di),e(W,Ie),e(Ie,Fi),e(Ie,Mo),e(Mo,Vi),e(Ie,Oi),e(Ie,$n),e($n,Ni),e(Ie,Wi),e(W,Bi),$(Ye,W,null),e(W,Hi),$(Ze,W,null),ar=!0},p(t,[u]){const Kt={};u&2&&(Kt.$$scope={dirty:u,ctx:t}),Te.$set(Kt);const Sn={};u&2&&(Sn.$$scope={dirty:u,ctx:t}),Ee.$set(Sn);const bn={};u&2&&(bn.$$scope={dirty:u,ctx:t}),ze.$set(bn);const Ln={};u&2&&(Ln.$$scope={dirty:u,ctx:t}),Ve.$set(Ln);const Qt={};u&2&&(Qt.$$scope={dirty:u,ctx:t}),Oe.$set(Qt);const wn={};u&2&&(wn.$$scope={dirty:u,ctx:t}),Ne.$set(wn);const xn={};u&2&&(xn.$$scope={dirty:u,ctx:t}),We.$set(xn);const yn={};u&2&&(yn.$$scope={dirty:u,ctx:t}),Be.$set(yn);const Pe={};u&2&&(Pe.$$scope={dirty:u,ctx:t}),He.$set(Pe);const Tn={};u&2&&(Tn.$$scope={dirty:u,ctx:t}),Ue.$set(Tn);const kn={};u&2&&(kn.$$scope={dirty:u,ctx:t}),Ge.$set(kn);const Mn={};u&2&&(Mn.$$scope={dirty:u,ctx:t}),Ke.$set(Mn);const En={};u&2&&(En.$$scope={dirty:u,ctx:t}),Qe.$set(En);const jn={};u&2&&(jn.$$scope={dirty:u,ctx:t}),Ye.$set(jn);const zn={};u&2&&(zn.$$scope={dirty:u,ctx:t}),Ze.$set(zn)},i(t){ar||(S(n.$$.fragment,t),S(dt.$$.fragment,t),S(ft.$$.fragment,t),S(ht.$$.fragment,t),S(Te.$$.fragment,t),S(_t.$$.fragment,t),S(It.$$.fragment,t),S(Pt.$$.fragment,t),S(Ee.$$.fragment,t),S($t.$$.fragment,t),S(St.$$.fragment,t),S(ze.$$.fragment,t),S(Lt.$$.fragment,t),S(wt.$$.fragment,t),S(xt.$$.fragment,t),S(Tt.$$.fragment,t),S(Mt.$$.fragment,t),S(Et.$$.fragment,t),S(qt.$$.fragment,t),S(Ve.$$.fragment,t),S(Oe.$$.fragment,t),S(At.$$.fragment,t),S(Ne.$$.fragment,t),S(We.$$.fragment,t),S(Dt.$$.fragment,t),S(Be.$$.fragment,t),S(He.$$.fragment,t),S(Ft.$$.fragment,t),S(Vt.$$.fragment,t),S(Ot.$$.fragment,t),S(Ue.$$.fragment,t),S(Ge.$$.fragment,t),S(Nt.$$.fragment,t),S(Wt.$$.fragment,t),S(Bt.$$.fragment,t),S(Ke.$$.fragment,t),S(Qe.$$.fragment,t),S(Ht.$$.fragment,t),S(Rt.$$.fragment,t),S(Jt.$$.fragment,t),S(Ye.$$.fragment,t),S(Ze.$$.fragment,t),ar=!0)},o(t){b(n.$$.fragment,t),b(dt.$$.fragment,t),b(ft.$$.fragment,t),b(ht.$$.fragment,t),b(Te.$$.fragment,t),b(_t.$$.fragment,t),b(It.$$.fragment,t),b(Pt.$$.fragment,t),b(Ee.$$.fragment,t),b($t.$$.fragment,t),b(St.$$.fragment,t),b(ze.$$.fragment,t),b(Lt.$$.fragment,t),b(wt.$$.fragment,t),b(xt.$$.fragment,t),b(Tt.$$.fragment,t),b(Mt.$$.fragment,t),b(Et.$$.fragment,t),b(qt.$$.fragment,t),b(Ve.$$.fragment,t),b(Oe.$$.fragment,t),b(At.$$.fragment,t),b(Ne.$$.fragment,t),b(We.$$.fragment,t),b(Dt.$$.fragment,t),b(Be.$$.fragment,t),b(He.$$.fragment,t),b(Ft.$$.fragment,t),b(Vt.$$.fragment,t),b(Ot.$$.fragment,t),b(Ue.$$.fragment,t),b(Ge.$$.fragment,t),b(Nt.$$.fragment,t),b(Wt.$$.fragment,t),b(Bt.$$.fragment,t),b(Ke.$$.fragment,t),b(Qe.$$.fragment,t),b(Ht.$$.fragment,t),b(Rt.$$.fragment,t),b(Jt.$$.fragment,t),b(Ye.$$.fragment,t),b(Ze.$$.fragment,t),ar=!1},d(t){o(d),t&&o(I),t&&o(p),L(n),t&&o(qn),t&&o(Y),L(dt),t&&o(An),t&&o(H),t&&o(Dn),t&&o(eo),t&&o(Fn),t&&o(to),t&&o(Vn),t&&o(oo),t&&o(On),t&&o(we),t&&o(Nn),t&&o(xe),t&&o(Wn),t&&o(gt),t&&o(Bn),t&&o(U),t&&o(Hn),t&&o(Z),L(ft),t&&o(Rn),t&&o(T),L(ht),L(Te),L(_t),t&&o(Un),t&&o(te),L(It),t&&o(Gn),t&&o(j),L(Pt),L(Ee),t&&o(Jn),t&&o(re),L($t),t&&o(Kn),t&&o(z),L(St),L(ze),t&&o(Qn),t&&o(ie),L(Lt),t&&o(Xn),t&&o(k),L(wt),L(xt),L(Tt),t&&o(Yn),t&&o(le),L(Mt),t&&o(Zn),t&&o(M),L(Et),L(qt),L(Ve),L(Oe),L(At),L(Ne),L(We),L(Dt),L(Be),L(He),t&&o(er),t&&o(me),L(Ft),t&&o(tr),t&&o(pe),L(Vt),L(Ot),L(Ue),L(Ge),t&&o(or),t&&o(he),L(Nt),t&&o(nr),t&&o(ue),L(Wt),L(Bt),L(Ke),L(Qe),t&&o(rr),t&&o(Ce),L(Ht),t&&o(sr),t&&o(q),L(Rt),L(Jt),L(Ye),L(Ze)}}}const Ed={local:"clipseg",sections:[{local:"overview",title:"Overview"},{local:"transformers.CLIPSegConfig",title:"CLIPSegConfig"},{local:"transformers.CLIPSegTextConfig",title:"CLIPSegTextConfig"},{local:"transformers.CLIPSegVisionConfig",title:"CLIPSegVisionConfig"},{local:"transformers.CLIPSegProcessor",title:"CLIPSegProcessor"},{local:"transformers.CLIPSegModel",title:"CLIPSegModel"},{local:"transformers.CLIPSegTextModel",title:"CLIPSegTextModel"},{local:"transformers.CLIPSegVisionModel",title:"CLIPSegVisionModel"},{local:"transformers.CLIPSegForImageSegmentation",title:"CLIPSegForImageSegmentation"}],title:"CLIPSeg"};function jd(w){return hd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Od extends cd{constructor(d){super();gd(this,d,jd,Md,md,{})}}export{Od as default,Ed as metadata};
