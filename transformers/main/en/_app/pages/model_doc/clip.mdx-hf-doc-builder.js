import{S as qv,i as Dv,s as Nv,e as s,k as m,w as b,t as i,M as Av,c as r,d as o,m as f,a,x as I,h as l,b as h,G as e,g as v,y as $,q as y,o as C,B as T,v as Ov,L as S}from"../../chunks/vendor-hf-doc-builder.js";import{T as re}from"../../chunks/Tip-hf-doc-builder.js";import{D as w}from"../../chunks/Docstring-hf-doc-builder.js";import{C as O}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as q}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as V}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Vv(L){let d,P,g,p,_;return p=new O({props:{code:`from transformers import CLIPConfig, CLIPModel

# Initializing a CLIPConfig with openai/clip-vit-base-patch32 style configuration
configuration = CLIPConfig()

# Initializing a CLIPModel (with random weights) from the openai/clip-vit-base-patch32 style configuration
model = CLIPModel(configuration)

# Accessing the model configuration
configuration = model.config

# We can also initialize a CLIPConfig from a CLIPTextConfig and a CLIPVisionConfig

# Initializing a CLIPText and CLIPVision configuration
config_text = CLIPTextConfig()
config_vision = CLIPVisionConfig()

config = CLIPConfig.from_text_vision_configs(config_text, config_vision)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPConfig, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPConfig with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPModel (with random weights) from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We can also initialize a CLIPConfig from a CLIPTextConfig and a CLIPVisionConfig</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPText and CLIPVision configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_text = CLIPTextConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_vision = CLIPVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = CLIPConfig.from_text_vision_configs(config_text, config_vision)`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Sv(L){let d,P,g,p,_;return p=new O({props:{code:`from transformers import CLIPTextConfig, CLIPTextModel

# Initializing a CLIPTextConfig with openai/clip-vit-base-patch32 style configuration
configuration = CLIPTextConfig()

# Initializing a CLIPTextModel (with random weights) from the openai/clip-vit-base-patch32 style configuration
model = CLIPTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTextConfig, CLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextConfig with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextModel (with random weights) from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Wv(L){let d,P,g,p,_;return p=new O({props:{code:`from transformers import CLIPVisionConfig, CLIPVisionModel

# Initializing a CLIPVisionConfig with openai/clip-vit-base-patch32 style configuration
configuration = CLIPVisionConfig()

# Initializing a CLIPVisionModel (with random weights) from the openai/clip-vit-base-patch32 style configuration
model = CLIPVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPVisionConfig, CLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionConfig with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel (with random weights) from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Bv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Rv(L){let d,P,g,p,_;return p=new O({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Uv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Kv(L){let d,P,g,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Hv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Gv(L){let d,P,g,p,_;return p=new O({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Jv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Xv(L){let d,P,g,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

model = CLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Yv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Qv(L){let d,P,g,p,_;return p=new O({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPVisionModel

model = CLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Zv(L){let d,P,g,p,_,n,c,x,Mn,Ht,H,de,Ne,M,jn,ze,En,Gt,Z,Fn,Me,Je,qn,Jt,ce,Dn,Xt,pe,Xe,Nn,Ye,F,W,Qe,ae,An,Ze,et,Yt,Ae,me,Qt,ee,On,Oe,tt,Vn,Zt,z,Sn,fe,Wn,eo,G,Bn,je,Ve,Rn;return{c(){d=s("p"),P=i("TensorFlow models and layers in "),g=s("code"),p=i("transformers"),_=i(" accept two formats as input:"),n=m(),c=s("ul"),x=s("li"),Mn=i("having all inputs as keyword arguments (like PyTorch models), or"),Ht=m(),H=s("li"),de=i("having all inputs as a list, tuple or dict in the first positional argument."),Ne=m(),M=s("p"),jn=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ze=s("code"),En=i("model.fit()"),Gt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Z=s("code"),Fn=i("model.fit()"),Me=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),Je=s("code"),qn=i("fit()"),Jt=i(" and "),ce=s("code"),Dn=i("predict()"),Xt=i(`, such as when creating your own layers or models with
the Keras `),pe=s("code"),Xe=i("Functional"),Nn=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ye=m(),F=s("ul"),W=s("li"),Qe=i("a single Tensor with "),ae=s("code"),An=i("input_ids"),Ze=i(" only and nothing else: "),et=s("code"),Yt=i("model(input_ids)"),Ae=m(),me=s("li"),Qt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s("code"),On=i("model([input_ids, attention_mask])"),Oe=i(" or "),tt=s("code"),Vn=i("model([input_ids, attention_mask, token_type_ids])"),Zt=m(),z=s("li"),Sn=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),fe=s("code"),Wn=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),eo=m(),G=s("p"),Bn=i(`Note that when creating models and layers with
`),je=s("a"),Ve=i("subclassing"),Rn=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var j=a(d);P=l(j,"TensorFlow models and layers in "),g=r(j,"CODE",{});var Er=a(g);p=l(Er,"transformers"),Er.forEach(o),_=l(j," accept two formats as input:"),j.forEach(o),n=f(k),c=r(k,"UL",{});var to=a(c);x=r(to,"LI",{});var ot=a(x);Mn=l(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(o),Ht=f(to),H=r(to,"LI",{});var Fr=a(H);de=l(Fr,"having all inputs as a list, tuple or dict in the first positional argument."),Fr.forEach(o),to.forEach(o),Ne=f(k),M=r(k,"P",{});var R=a(M);jn=l(R,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ze=r(R,"CODE",{});var nt=a(ze);En=l(nt,"model.fit()"),nt.forEach(o),Gt=l(R,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Z=r(R,"CODE",{});var qr=a(Z);Fn=l(qr,"model.fit()"),qr.forEach(o),Me=l(R,` supports! If, however, you want to use the second
format outside of Keras methods like `),Je=r(R,"CODE",{});var Dr=a(Je);qn=l(Dr,"fit()"),Dr.forEach(o),Jt=l(R," and "),ce=r(R,"CODE",{});var Un=a(ce);Dn=l(Un,"predict()"),Un.forEach(o),Xt=l(R,`, such as when creating your own layers or models with
the Keras `),pe=r(R,"CODE",{});var Se=a(pe);Xe=l(Se,"Functional"),Se.forEach(o),Nn=l(R,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),R.forEach(o),Ye=f(k),F=r(k,"UL",{});var Ee=a(F);W=r(Ee,"LI",{});var U=a(W);Qe=l(U,"a single Tensor with "),ae=r(U,"CODE",{});var Nr=a(ae);An=l(Nr,"input_ids"),Nr.forEach(o),Ze=l(U," only and nothing else: "),et=r(U,"CODE",{});var We=a(et);Yt=l(We,"model(input_ids)"),We.forEach(o),U.forEach(o),Ae=f(Ee),me=r(Ee,"LI",{});var st=a(me);Qt=l(st,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(st,"CODE",{});var Ar=a(ee);On=l(Ar,"model([input_ids, attention_mask])"),Ar.forEach(o),Oe=l(st," or "),tt=r(st,"CODE",{});var Be=a(tt);Vn=l(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(o),st.forEach(o),Zt=f(Ee),z=r(Ee,"LI",{});var Kn=a(z);Sn=l(Kn,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),fe=r(Kn,"CODE",{});var Or=a(fe);Wn=l(Or,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Or.forEach(o),Kn.forEach(o),Ee.forEach(o),eo=f(k),G=r(k,"P",{});var rt=a(G);Bn=l(rt,`Note that when creating models and layers with
`),je=r(rt,"A",{href:!0,rel:!0});var he=a(je);Ve=l(he,"subclassing"),he.forEach(o),Rn=l(rt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),rt.forEach(o),this.h()},h(){h(je,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(je,"rel","nofollow")},m(k,j){v(k,d,j),e(d,P),e(d,g),e(g,p),e(d,_),v(k,n,j),v(k,c,j),e(c,x),e(x,Mn),e(c,Ht),e(c,H),e(H,de),v(k,Ne,j),v(k,M,j),e(M,jn),e(M,ze),e(ze,En),e(M,Gt),e(M,Z),e(Z,Fn),e(M,Me),e(M,Je),e(Je,qn),e(M,Jt),e(M,ce),e(ce,Dn),e(M,Xt),e(M,pe),e(pe,Xe),e(M,Nn),v(k,Ye,j),v(k,F,j),e(F,W),e(W,Qe),e(W,ae),e(ae,An),e(W,Ze),e(W,et),e(et,Yt),e(F,Ae),e(F,me),e(me,Qt),e(me,ee),e(ee,On),e(me,Oe),e(me,tt),e(tt,Vn),e(F,Zt),e(F,z),e(z,Sn),e(z,fe),e(fe,Wn),v(k,eo,j),v(k,G,j),e(G,Bn),e(G,je),e(je,Ve),e(G,Rn)},d(k){k&&o(d),k&&o(n),k&&o(c),k&&o(Ne),k&&o(M),k&&o(Ye),k&&o(F),k&&o(eo),k&&o(G)}}}function eP(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function tP(L){let d,P,g,p,_;return p=new O({props:{code:`import tensorflow as tf
from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="tf", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = tf.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function oP(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function nP(L){let d,P,g,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function sP(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function rP(L){let d,P,g,p,_;return p=new O({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function aP(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function iP(L){let d,P,g,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

model = TFCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function lP(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function dP(L){let d,P,g,p,_;return p=new O({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, TFCLIPVisionModel

model = TFCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, TFCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function cP(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function pP(L){let d,P,g,p,_;return p=new O({props:{code:`import jax
from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="np", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = jax.nn.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function mP(L){let d,P,g,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function fP(L){let d,P,g,p,_;return p=new O({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function hP(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function gP(L){let d,P,g,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

model = FlaxCLIPTextModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPTextModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function uP(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var x=a(g);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function _P(L){let d,P,g,p,_;return p=new O({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, FlaxCLIPVisionModel

model = FlaxCLIPVisionModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="np")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooler_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, FlaxCLIPVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPVisionModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),I(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function vP(L){let d,P,g,p,_,n,c,x,Mn,Ht,H,de,Ne,M,jn,ze,En,Gt,Z,Fn,Me,Je,qn,Jt,ce,Dn,Xt,pe,Xe,Nn,Ye,F,W,Qe,ae,An,Ze,et,Yt,Ae,me,Qt,ee,On,Oe,tt,Vn,Zt,z,Sn,fe,Wn,eo,G,Bn,je,Ve,Rn,k,j,Er,to,ot,Fr,R,nt,qr,Dr,Un,Se,Ee,U,Nr,We,st,Ar,Be,Kn,Or,rt,he,oo,Oa,Hn,lc,Va,dc,El,J,Gn,cc,Re,Vr,pc,mc,Sr,fc,hc,Jn,gc,uc,_c,at,vc,Wr,Pc,bc,Br,Ic,$c,yc,no,Cc,so,Xn,Tc,Yn,Lc,Rr,xc,wc,Fl,it,ro,Sa,Qn,kc,Wa,zc,ql,ie,Zn,Mc,lt,jc,Ur,Ec,Fc,es,qc,Dc,Nc,dt,Ac,Kr,Oc,Vc,Hr,Sc,Wc,Bc,ao,Dl,ct,io,Ba,ts,Rc,Ra,Uc,Nl,le,os,Kc,pt,Hc,Gr,Gc,Jc,ns,Xc,Yc,Qc,mt,Zc,Jr,ep,tp,Xr,op,np,sp,lo,Al,ft,co,Ua,ss,rp,Ka,ap,Ol,D,rs,ip,Ha,lp,dp,as,cp,Yr,pp,mp,fp,ge,is,hp,Ga,gp,up,Ja,Qr,_p,Xa,vp,Pp,Ya,bp,Ip,po,ls,$p,ds,yp,Qa,Cp,Tp,Lp,mo,cs,xp,Za,wp,kp,Zr,ps,Vl,ht,fo,ei,ms,zp,ti,Mp,Sl,X,fs,jp,hs,Ep,oi,Fp,qp,Dp,gs,Np,ea,Ap,Op,Vp,ue,us,Sp,ni,Wp,Bp,si,ta,Rp,ri,Up,Kp,ai,Hp,Gp,ho,_s,Jp,ii,Xp,Wl,gt,go,li,vs,Yp,di,Qp,Bl,Fe,Ps,Zp,ci,em,tm,uo,bs,om,pi,nm,Rl,ut,_o,mi,Is,sm,fi,rm,Ul,N,$s,am,hi,im,lm,vo,ys,dm,Cs,cm,gi,pm,mm,fm,Po,Ts,hm,ui,gm,um,bo,Ls,_m,_i,vm,Pm,Io,xs,bm,vi,Im,$m,$o,ws,ym,Pi,Cm,Kl,_t,yo,bi,ks,Tm,Ii,Lm,Hl,Y,zs,xm,$i,wm,km,te,oa,zm,Mm,na,jm,Em,sa,Fm,qm,yi,Dm,Nm,ra,Am,Om,Vm,Co,Ms,Sm,js,Wm,aa,Bm,Rm,Um,To,Es,Km,Fs,Hm,ia,Gm,Jm,Gl,vt,Lo,Ci,qs,Xm,Ti,Ym,Jl,Q,Ds,Qm,Ns,Zm,As,ef,tf,of,_e,Os,nf,Pt,sf,la,rf,af,Li,lf,df,cf,xo,pf,wo,mf,ve,Vs,ff,bt,hf,da,gf,uf,xi,_f,vf,Pf,ko,bf,zo,If,Pe,Ss,$f,It,yf,ca,Cf,Tf,wi,Lf,xf,wf,Mo,kf,jo,Xl,$t,Eo,ki,Ws,zf,zi,Mf,Yl,yt,Bs,jf,be,Rs,Ef,Ct,Ff,pa,qf,Df,Mi,Nf,Af,Of,Fo,Vf,qo,Ql,Tt,Do,ji,Us,Sf,Ei,Wf,Zl,Lt,Ks,Bf,Ie,Hs,Rf,xt,Uf,ma,Kf,Hf,Fi,Gf,Jf,Xf,No,Yf,Ao,ed,wt,Oo,qi,Gs,Qf,Di,Zf,td,A,Js,eh,Xs,th,fa,oh,nh,sh,Ys,rh,Qs,ah,ih,lh,Vo,dh,$e,Zs,ch,kt,ph,ha,mh,fh,Ni,hh,gh,uh,So,_h,Wo,vh,ye,er,Ph,zt,bh,ga,Ih,$h,Ai,yh,Ch,Th,Bo,Lh,Ro,xh,Ce,tr,wh,Mt,kh,ua,zh,Mh,Oi,jh,Eh,Fh,Uo,qh,Ko,od,jt,Ho,Vi,or,Dh,Si,Nh,nd,Et,nr,Ah,Te,sr,Oh,Ft,Vh,_a,Sh,Wh,Wi,Bh,Rh,Uh,Go,Kh,Jo,sd,qt,Xo,Bi,rr,Hh,Ri,Gh,rd,Dt,ar,Jh,Le,ir,Xh,Nt,Yh,va,Qh,Zh,Ui,eg,tg,og,Yo,ng,Qo,ad,At,Zo,Ki,lr,sg,Hi,rg,id,E,dr,ag,cr,ig,Pa,lg,dg,cg,pr,pg,mr,mg,fg,hg,Gi,gg,ug,qe,Ji,fr,_g,vg,Xi,hr,Pg,bg,Yi,gr,Ig,$g,Qi,ur,yg,Cg,xe,_r,Tg,Ot,Lg,Zi,xg,wg,el,kg,zg,Mg,en,jg,tn,Eg,on,vr,Fg,nn,qg,sn,Pr,Dg,rn,ld,Vt,an,tl,br,Ng,ol,Ag,dd,St,Ir,Og,we,$r,Vg,Wt,Sg,nl,Wg,Bg,sl,Rg,Ug,Kg,ln,Hg,dn,cd,Bt,cn,rl,yr,Gg,al,Jg,pd,Rt,Cr,Xg,ke,Tr,Yg,Ut,Qg,il,Zg,eu,ll,tu,ou,nu,pn,su,mn,md;return n=new q({}),M=new q({}),ae=new q({}),Se=new O({props:{code:`from PIL import Image
import requests

from transformers import CLIPProcessor, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Hn=new q({}),Gn=new w({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config",val:" = None"},{name:"vision_config",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config",description:`<strong>text_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config"},{anchor:"transformers.CLIPConfig.vision_config",description:`<strong>vision_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L254"}}),no=new V({props:{anchor:"transformers.CLIPConfig.example",$$slots:{default:[Vv]},$$scope:{ctx:L}}}),Xn=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L330",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),Qn=new q({}),Zn=new w({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.CLIPTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L40"}}),ao=new V({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[Sv]},$$scope:{ctx:L}}}),ts=new q({}),os=new w({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CLIPVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CLIPVisionConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CLIPVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CLIPVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.CLIPVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.CLIPVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported. layer_norm_eps (<code>float</code>, <em>optional</em>,
defaults to 1e-5): The epsilon used by the layer normalization layers.`,name:"hidden_act"},{anchor:"transformers.CLIPVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.CLIPVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.CLIPVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CLIPVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (\`float&#x201C;, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L148"}}),lo=new V({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[Wv]},$$scope:{ctx:L}}}),ss=new q({}),rs=new w({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L260"}}),is=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L346",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new w({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L373",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L401",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new w({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L496"}}),ms=new q({}),fs=new w({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),us=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_s=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vs=new q({}),Ps=new w({props:{name:"class transformers.CLIPImageProcessor",anchor:"transformers.CLIPImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by
<code>do_resize</code> in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.CLIPImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 224}</code>):
Size of the image after resizing. The shortest edge of the image is resized to size[&#x201C;shortest_edge&#x201D;], with
the longest edge resized to keep the input aspect ratio. Can be overridden by <code>size</code> in the <code>preprocess</code>
method.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in the <code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.CLIPImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image to the specified <code>crop_size</code>. Can be overridden by <code>do_center_crop</code> in the
<code>preprocess</code> method.`,name:"do_center_crop"},{anchor:"transformers.CLIPImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to 224) &#x2014;
Size of the output image after applying <code>center_crop</code>. Can be overridden by <code>crop_size</code> in the <code>preprocess</code>
method.`,name:"crop_size"},{anchor:"transformers.CLIPImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by <code>do_rescale</code> in
the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.CLIPImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overridden by <code>rescale_factor</code> in the <code>preprocess</code>
method.
do_normalize &#x2014;
Whether to normalize the image. Can be overridden by <code>do_normalize</code> in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.CLIPImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.CLIPImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.CLIPImageProcessor.do_convert_rgb",description:`<strong>do_convert_rgb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"do_convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L58"}}),bs=new w({props:{name:"preprocess",anchor:"transformers.CLIPImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": int = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": typing.Optional[transformers.image_utils.ChannelDimension] = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.CLIPImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Size of the image after resizing. Shortest edge of the image is resized to size[&#x201C;shortest_edge&#x201D;], with
the longest edge resized to keep the input aspect ratio.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the enum <code>PILImageResampling</code>. Only
has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_center_crop</code>) &#x2014;
Whether to center crop the image.`,name:"do_center_crop"},{anchor:"transformers.CLIPImageProcessor.preprocess.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.crop_size</code>) &#x2014;
Size of the center crop. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image.`,name:"do_rescale"},{anchor:"transformers.CLIPImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.CLIPImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean to use for normalization. Only has an effect if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_mean"},{anchor:"transformers.CLIPImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation to use for normalization. Only has an effect if <code>do_normalize</code> is set to
<code>True</code>.`,name:"image_std"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_convert_rgb",description:`<strong>do_convert_rgb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_convert_rgb</code>) &#x2014;
Whether to convert the image to RGB.`,name:"do_convert_rgb"},{anchor:"transformers.CLIPImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.CLIPImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
<li>Unset: defaults to the channel dimension format of the input image.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L224"}}),Is=new q({}),$s=new w({props:{name:"class transformers.CLIPImageProcessor",anchor:"transformers.CLIPImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by
<code>do_resize</code> in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.CLIPImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 224}</code>):
Size of the image after resizing. The shortest edge of the image is resized to size[&#x201C;shortest_edge&#x201D;], with
the longest edge resized to keep the input aspect ratio. Can be overridden by <code>size</code> in the <code>preprocess</code>
method.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in the <code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.CLIPImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image to the specified <code>crop_size</code>. Can be overridden by <code>do_center_crop</code> in the
<code>preprocess</code> method.`,name:"do_center_crop"},{anchor:"transformers.CLIPImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to 224) &#x2014;
Size of the output image after applying <code>center_crop</code>. Can be overridden by <code>crop_size</code> in the <code>preprocess</code>
method.`,name:"crop_size"},{anchor:"transformers.CLIPImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by <code>do_rescale</code> in
the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.CLIPImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overridden by <code>rescale_factor</code> in the <code>preprocess</code>
method.
do_normalize &#x2014;
Whether to normalize the image. Can be overridden by <code>do_normalize</code> in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.CLIPImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.CLIPImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.CLIPImageProcessor.do_convert_rgb",description:`<strong>do_convert_rgb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"do_convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L58"}}),ys=new w({props:{name:"center_crop",anchor:"transformers.CLIPImageProcessor.center_crop",parameters:[{name:"image",val:": ndarray"},{name:"size",val:": typing.Dict[str, int]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.center_crop.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to center crop.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.center_crop.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>) &#x2014;
Size of the output image in the form of a dictionary with keys <code>height</code> and <code>width</code>.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.center_crop.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L159"}}),Ts=new w({props:{name:"normalize",anchor:"transformers.CLIPImageProcessor.normalize",parameters:[{name:"image",val:": ndarray"},{name:"mean",val:": typing.Union[float, typing.List[float]]"},{name:"std",val:": typing.Union[float, typing.List[float]]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.normalize.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to normalize.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.normalize.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>) &#x2014;
Image mean.`,name:"image_mean"},{anchor:"transformers.CLIPImageProcessor.normalize.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.CLIPImageProcessor.normalize.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L201"}}),Ls=new w({props:{name:"preprocess",anchor:"transformers.CLIPImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": int = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": typing.Optional[transformers.image_utils.ChannelDimension] = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.CLIPImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Size of the image after resizing. Shortest edge of the image is resized to size[&#x201C;shortest_edge&#x201D;], with
the longest edge resized to keep the input aspect ratio.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the enum <code>PILImageResampling</code>. Only
has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_center_crop</code>) &#x2014;
Whether to center crop the image.`,name:"do_center_crop"},{anchor:"transformers.CLIPImageProcessor.preprocess.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.crop_size</code>) &#x2014;
Size of the center crop. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image.`,name:"do_rescale"},{anchor:"transformers.CLIPImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.CLIPImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean to use for normalization. Only has an effect if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_mean"},{anchor:"transformers.CLIPImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation to use for normalization. Only has an effect if <code>do_normalize</code> is set to
<code>True</code>.`,name:"image_std"},{anchor:"transformers.CLIPImageProcessor.preprocess.do_convert_rgb",description:`<strong>do_convert_rgb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_convert_rgb</code>) &#x2014;
Whether to convert the image to RGB.`,name:"do_convert_rgb"},{anchor:"transformers.CLIPImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.CLIPImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
<li>Unset: defaults to the channel dimension format of the input image.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L224"}}),xs=new w({props:{name:"rescale",anchor:"transformers.CLIPImageProcessor.rescale",parameters:[{name:"image",val:": ndarray"},{name:"scale",val:": typing.Union[int, float]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.rescale.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to rescale.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.rescale.scale",description:`<strong>scale</strong> (<code>int</code> or <code>float</code>) &#x2014;
Scale to apply to the image.`,name:"scale"},{anchor:"transformers.CLIPImageProcessor.rescale.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L181"}}),ws=new w({props:{name:"resize",anchor:"transformers.CLIPImageProcessor.resize",parameters:[{name:"image",val:": ndarray"},{name:"size",val:": typing.Dict[str, int]"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.resize.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to resize.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.resize.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>) &#x2014;
Size of the output image.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.resize.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use when resiizing the image.`,name:"resample"},{anchor:"transformers.CLIPImageProcessor.resize.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L131"}}),ks=new q({}),zs=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22"}}),Ms=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),Es=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),qs=new q({}),Ds=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L854"}}),Os=new w({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L985",returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>torch.FloatTensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>torch.FloatTensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new re({props:{$$slots:{default:[Bv]},$$scope:{ctx:L}}}),wo=new V({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[Rv]},$$scope:{ctx:L}}}),Vs=new w({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L889",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),ko=new re({props:{$$slots:{default:[Uv]},$$scope:{ctx:L}}}),zo=new V({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[Kv]},$$scope:{ctx:L}}}),Ss=new w({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L936",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Mo=new re({props:{$$slots:{default:[Hv]},$$scope:{ctx:L}}}),jo=new V({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[Gv]},$$scope:{ctx:L}}}),Ws=new q({}),Bs=new w({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L688"}}),Rs=new w({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L705",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
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
`}}),Fo=new re({props:{$$slots:{default:[Jv]},$$scope:{ctx:L}}}),qo=new V({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[Xv]},$$scope:{ctx:L}}}),Us=new q({}),Ks=new w({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L801"}}),Hs=new w({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L814",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
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
`}}),No=new re({props:{$$slots:{default:[Yv]},$$scope:{ctx:L}}}),Ao=new V({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[Qv]},$$scope:{ctx:L}}}),Gs=new q({}),Js=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1229"}}),Vo=new re({props:{$$slots:{default:[Zv]},$$scope:{ctx:L}}}),Zs=new w({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPModel.call.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.TFCLIPModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1357",returnDescription:`
<p>A <code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</li>
<li><strong>logits_per_image:(<code>tf.Tensor</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>tf.Tensor</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>~modeling_tf_utils.TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>~modeling_tf_utils.TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),So=new re({props:{$$slots:{default:[eP]},$$scope:{ctx:L}}}),Wo=new V({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[tP]},$$scope:{ctx:L}}}),er=new w({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1275",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Bo=new re({props:{$$slots:{default:[oP]},$$scope:{ctx:L}}}),Ro=new V({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[nP]},$$scope:{ctx:L}}}),tr=new w({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1315",returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Uo=new re({props:{$$slots:{default:[sP]},$$scope:{ctx:L}}}),Ko=new V({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[rP]},$$scope:{ctx:L}}}),or=new q({}),nr=new w({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1056"}}),sr=new w({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPTextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCLIPTextModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCLIPTextModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCLIPTextModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPTextModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new re({props:{$$slots:{default:[aP]},$$scope:{ctx:L}}}),Jo=new V({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[iP]},$$scope:{ctx:L}}}),rr=new q({}),ar=new w({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1131"}}),ir=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1172",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yo=new re({props:{$$slots:{default:[lP]},$$scope:{ctx:L}}}),Qo=new V({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[dP]},$$scope:{ctx:L}}}),lr=new q({}),dr=new w({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),_r=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L777",returnDescription:`
<p>A <code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPConfig'&gt;</code>) and inputs.</p>
<ul>
<li><strong>logits_per_image:(<code>jnp.ndarray</code></strong> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</li>
<li><strong>logits_per_text:(<code>jnp.ndarray</code></strong> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</li>
<li><strong>text_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new re({props:{$$slots:{default:[cP]},$$scope:{ctx:L}}}),tn=new V({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[pP]},$$scope:{ctx:L}}}),vr=new w({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L822",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),nn=new V({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[mP]},$$scope:{ctx:L}}}),Pr=new w({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),rn=new V({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[fP]},$$scope:{ctx:L}}}),br=new q({}),Ir=new w({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),$r=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxCLIPTextModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxCLIPTextModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaxCLIPTextModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPTextModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPTextModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L622",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new re({props:{$$slots:{default:[hP]},$$scope:{ctx:L}}}),dn=new V({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[gP]},$$scope:{ctx:L}}}),yr=new q({}),Cr=new w({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),Tr=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L702",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new re({props:{$$slots:{default:[uP]},$$scope:{ctx:L}}}),mn=new V({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[_P]},$$scope:{ctx:L}}}),{c(){d=s("meta"),P=m(),g=s("h1"),p=s("a"),_=s("span"),b(n.$$.fragment),c=m(),x=s("span"),Mn=i("CLIP"),Ht=m(),H=s("h2"),de=s("a"),Ne=s("span"),b(M.$$.fragment),jn=m(),ze=s("span"),En=i("Overview"),Gt=m(),Z=s("p"),Fn=i("The CLIP model was proposed in "),Me=s("a"),Je=i("Learning Transferable Visual Models From Natural Language Supervision"),qn=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Jt=m(),ce=s("p"),Dn=i("The abstract from the paper is the following:"),Xt=m(),pe=s("p"),Xe=s("em"),Nn=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
restricted form of supervision limits their generality and usability since additional labeled data is needed to specify
any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a
much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes
with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400
million (image, text) pairs collected from the internet. After pre-training, natural language is used to reference
learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks. We study
the performance of this approach by benchmarking on over 30 different existing computer vision datasets, spanning tasks
such as OCR, action recognition in videos, geo-localization, and many types of fine-grained object classification. The
model transfers non-trivially to most tasks and is often competitive with a fully supervised baseline without the need
for any dataset specific training. For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot
without needing to use any of the 1.28 million training examples it was trained on. We release our code and pre-trained
model weights at this https URL.`),Ye=m(),F=s("h2"),W=s("a"),Qe=s("span"),b(ae.$$.fragment),An=m(),Ze=s("span"),et=i("Usage"),Yt=m(),Ae=s("p"),me=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Qt=m(),ee=s("p"),On=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Oe=s("a"),tt=i("CLIPFeatureExtractor"),Vn=i(" can be used to resize (or rescale) and normalize images for the model."),Zt=m(),z=s("p"),Sn=i("The "),fe=s("a"),Wn=i("CLIPTokenizer"),eo=i(" is used to encode the text. The "),G=s("a"),Bn=i("CLIPProcessor"),je=i(` wraps
`),Ve=s("a"),Rn=i("CLIPFeatureExtractor"),k=i(" and "),j=s("a"),Er=i("CLIPTokenizer"),to=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ot=s("a"),Fr=i("CLIPProcessor"),R=i(" and "),nt=s("a"),qr=i("CLIPModel"),Dr=i("."),Un=m(),b(Se.$$.fragment),Ee=m(),U=s("p"),Nr=i("This model was contributed by "),We=s("a"),st=i("valhalla"),Ar=i(". The original code can be found "),Be=s("a"),Kn=i("here"),Or=i("."),rt=m(),he=s("h2"),oo=s("a"),Oa=s("span"),b(Hn.$$.fragment),lc=m(),Va=s("span"),dc=i("CLIPConfig"),El=m(),J=s("div"),b(Gn.$$.fragment),cc=m(),Re=s("p"),Vr=s("a"),pc=i("CLIPConfig"),mc=i(" is the configuration class to store the configuration of a "),Sr=s("a"),fc=i("CLIPModel"),hc=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Jn=s("a"),gc=i("openai/clip-vit-base-patch32"),uc=i(" architecture."),_c=m(),at=s("p"),vc=i("Configuration objects inherit from "),Wr=s("a"),Pc=i("PretrainedConfig"),bc=i(` and can be used to control the model outputs. Read the
documentation from `),Br=s("a"),Ic=i("PretrainedConfig"),$c=i(" for more information."),yc=m(),b(no.$$.fragment),Cc=m(),so=s("div"),b(Xn.$$.fragment),Tc=m(),Yn=s("p"),Lc=i("Instantiate a "),Rr=s("a"),xc=i("CLIPConfig"),wc=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Fl=m(),it=s("h2"),ro=s("a"),Sa=s("span"),b(Qn.$$.fragment),kc=m(),Wa=s("span"),zc=i("CLIPTextConfig"),ql=m(),ie=s("div"),b(Zn.$$.fragment),Mc=m(),lt=s("p"),jc=i("This is the configuration class to store the configuration of a "),Ur=s("a"),Ec=i("CLIPModel"),Fc=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),es=s("a"),qc=i("openai/clip-vit-base-patch32"),Dc=i(" architecture."),Nc=m(),dt=s("p"),Ac=i("Configuration objects inherit from "),Kr=s("a"),Oc=i("PretrainedConfig"),Vc=i(` and can be used to control the model outputs. Read the
documentation from `),Hr=s("a"),Sc=i("PretrainedConfig"),Wc=i(" for more information."),Bc=m(),b(ao.$$.fragment),Dl=m(),ct=s("h2"),io=s("a"),Ba=s("span"),b(ts.$$.fragment),Rc=m(),Ra=s("span"),Uc=i("CLIPVisionConfig"),Nl=m(),le=s("div"),b(os.$$.fragment),Kc=m(),pt=s("p"),Hc=i("This is the configuration class to store the configuration of a "),Gr=s("a"),Gc=i("CLIPModel"),Jc=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ns=s("a"),Xc=i("openai/clip-vit-base-patch32"),Yc=i(" architecture."),Qc=m(),mt=s("p"),Zc=i("Configuration objects inherit from "),Jr=s("a"),ep=i("PretrainedConfig"),tp=i(` and can be used to control the model outputs. Read the
documentation from `),Xr=s("a"),op=i("PretrainedConfig"),np=i(" for more information."),sp=m(),b(lo.$$.fragment),Al=m(),ft=s("h2"),co=s("a"),Ua=s("span"),b(ss.$$.fragment),rp=m(),Ka=s("span"),ap=i("CLIPTokenizer"),Ol=m(),D=s("div"),b(rs.$$.fragment),ip=m(),Ha=s("p"),lp=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),dp=m(),as=s("p"),cp=i("This tokenizer inherits from "),Yr=s("a"),pp=i("PreTrainedTokenizer"),mp=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fp=m(),ge=s("div"),b(is.$$.fragment),hp=m(),Ga=s("p"),gp=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),up=m(),Ja=s("ul"),Qr=s("li"),_p=i("single sequence: "),Xa=s("code"),vp=i("<|startoftext|> X <|endoftext|>"),Pp=m(),Ya=s("p"),bp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Ip=m(),po=s("div"),b(ls.$$.fragment),$p=m(),ds=s("p"),yp=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qa=s("code"),Cp=i("prepare_for_model"),Tp=i(" method."),Lp=m(),mo=s("div"),b(cs.$$.fragment),xp=m(),Za=s("p"),wp=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),kp=m(),Zr=s("div"),b(ps.$$.fragment),Vl=m(),ht=s("h2"),fo=s("a"),ei=s("span"),b(ms.$$.fragment),zp=m(),ti=s("span"),Mp=i("CLIPTokenizerFast"),Sl=m(),X=s("div"),b(fs.$$.fragment),jp=m(),hs=s("p"),Ep=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),oi=s("em"),Fp=i("tokenizers"),qp=i(` library). Based on byte-level
Byte-Pair-Encoding.`),Dp=m(),gs=s("p"),Np=i("This tokenizer inherits from "),ea=s("a"),Ap=i("PreTrainedTokenizerFast"),Op=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vp=m(),ue=s("div"),b(us.$$.fragment),Sp=m(),ni=s("p"),Wp=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Bp=m(),si=s("ul"),ta=s("li"),Rp=i("single sequence: "),ri=s("code"),Up=i("<|startoftext|> X <|endoftext|>"),Kp=m(),ai=s("p"),Hp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Gp=m(),ho=s("div"),b(_s.$$.fragment),Jp=m(),ii=s("p"),Xp=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Wl=m(),gt=s("h2"),go=s("a"),li=s("span"),b(vs.$$.fragment),Yp=m(),di=s("span"),Qp=i("CLIPImageProcessor"),Bl=m(),Fe=s("div"),b(Ps.$$.fragment),Zp=m(),ci=s("p"),em=i("Constructs a CLIP image processor."),tm=m(),uo=s("div"),b(bs.$$.fragment),om=m(),pi=s("p"),nm=i("Preprocess an image or batch of images."),Rl=m(),ut=s("h2"),_o=s("a"),mi=s("span"),b(Is.$$.fragment),sm=m(),fi=s("span"),rm=i("CLIPFeatureExtractor"),Ul=m(),N=s("div"),b($s.$$.fragment),am=m(),hi=s("p"),im=i("Constructs a CLIP image processor."),lm=m(),vo=s("div"),b(ys.$$.fragment),dm=m(),Cs=s("p"),cm=i(`Center crop an image. If the image is too small to be cropped to the size given, it will be padded (so the
returned result will always be of size `),gi=s("code"),pm=i("size"),mm=i(")."),fm=m(),Po=s("div"),b(Ts.$$.fragment),hm=m(),ui=s("p"),gm=i("Normalize an image. image = (image - image_mean) / image_std."),um=m(),bo=s("div"),b(Ls.$$.fragment),_m=m(),_i=s("p"),vm=i("Preprocess an image or batch of images."),Pm=m(),Io=s("div"),b(xs.$$.fragment),bm=m(),vi=s("p"),Im=i("Rescale an image by a scale factor. image = image * scale."),$m=m(),$o=s("div"),b(ws.$$.fragment),ym=m(),Pi=s("p"),Cm=i(`Resize an image. The shortest edge of the image is resized to size[\u201Cshortest_edge\u201D], with the longest edge
resized to keep the input aspect ratio.`),Kl=m(),_t=s("h2"),yo=s("a"),bi=s("span"),b(ks.$$.fragment),Tm=m(),Ii=s("span"),Lm=i("CLIPProcessor"),Hl=m(),Y=s("div"),b(zs.$$.fragment),xm=m(),$i=s("p"),wm=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),km=m(),te=s("p"),oa=s("a"),zm=i("CLIPProcessor"),Mm=i(" offers all the functionalities of "),na=s("a"),jm=i("CLIPFeatureExtractor"),Em=i(" and "),sa=s("a"),Fm=i("CLIPTokenizerFast"),qm=i(`. See the
`),yi=s("code"),Dm=i("__call__()"),Nm=i(" and "),ra=s("a"),Am=i("decode()"),Om=i(" for more information."),Vm=m(),Co=s("div"),b(Ms.$$.fragment),Sm=m(),js=s("p"),Wm=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),aa=s("a"),Bm=i("batch_decode()"),Rm=i(`. Please
refer to the docstring of this method for more information.`),Um=m(),To=s("div"),b(Es.$$.fragment),Km=m(),Fs=s("p"),Hm=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),ia=s("a"),Gm=i("decode()"),Jm=i(`. Please refer to
the docstring of this method for more information.`),Gl=m(),vt=s("h2"),Lo=s("a"),Ci=s("span"),b(qs.$$.fragment),Xm=m(),Ti=s("span"),Ym=i("CLIPModel"),Jl=m(),Q=s("div"),b(Ds.$$.fragment),Qm=m(),Ns=s("p"),Zm=i("This model is a PyTorch "),As=s("a"),ef=i("torch.nn.Module"),tf=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),of=m(),_e=s("div"),b(Os.$$.fragment),nf=m(),Pt=s("p"),sf=i("The "),la=s("a"),rf=i("CLIPModel"),af=i(" forward method, overrides the "),Li=s("code"),lf=i("__call__"),df=i(" special method."),cf=m(),b(xo.$$.fragment),pf=m(),b(wo.$$.fragment),mf=m(),ve=s("div"),b(Vs.$$.fragment),ff=m(),bt=s("p"),hf=i("The "),da=s("a"),gf=i("CLIPModel"),uf=i(" forward method, overrides the "),xi=s("code"),_f=i("__call__"),vf=i(" special method."),Pf=m(),b(ko.$$.fragment),bf=m(),b(zo.$$.fragment),If=m(),Pe=s("div"),b(Ss.$$.fragment),$f=m(),It=s("p"),yf=i("The "),ca=s("a"),Cf=i("CLIPModel"),Tf=i(" forward method, overrides the "),wi=s("code"),Lf=i("__call__"),xf=i(" special method."),wf=m(),b(Mo.$$.fragment),kf=m(),b(jo.$$.fragment),Xl=m(),$t=s("h2"),Eo=s("a"),ki=s("span"),b(Ws.$$.fragment),zf=m(),zi=s("span"),Mf=i("CLIPTextModel"),Yl=m(),yt=s("div"),b(Bs.$$.fragment),jf=m(),be=s("div"),b(Rs.$$.fragment),Ef=m(),Ct=s("p"),Ff=i("The "),pa=s("a"),qf=i("CLIPTextModel"),Df=i(" forward method, overrides the "),Mi=s("code"),Nf=i("__call__"),Af=i(" special method."),Of=m(),b(Fo.$$.fragment),Vf=m(),b(qo.$$.fragment),Ql=m(),Tt=s("h2"),Do=s("a"),ji=s("span"),b(Us.$$.fragment),Sf=m(),Ei=s("span"),Wf=i("CLIPVisionModel"),Zl=m(),Lt=s("div"),b(Ks.$$.fragment),Bf=m(),Ie=s("div"),b(Hs.$$.fragment),Rf=m(),xt=s("p"),Uf=i("The "),ma=s("a"),Kf=i("CLIPVisionModel"),Hf=i(" forward method, overrides the "),Fi=s("code"),Gf=i("__call__"),Jf=i(" special method."),Xf=m(),b(No.$$.fragment),Yf=m(),b(Ao.$$.fragment),ed=m(),wt=s("h2"),Oo=s("a"),qi=s("span"),b(Gs.$$.fragment),Qf=m(),Di=s("span"),Zf=i("TFCLIPModel"),td=m(),A=s("div"),b(Js.$$.fragment),eh=m(),Xs=s("p"),th=i("This model inherits from "),fa=s("a"),oh=i("TFPreTrainedModel"),nh=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh=m(),Ys=s("p"),rh=i("This model is also a "),Qs=s("a"),ah=i("tf.keras.Model"),ih=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh=m(),b(Vo.$$.fragment),dh=m(),$e=s("div"),b(Zs.$$.fragment),ch=m(),kt=s("p"),ph=i("The "),ha=s("a"),mh=i("TFCLIPModel"),fh=i(" forward method, overrides the "),Ni=s("code"),hh=i("__call__"),gh=i(" special method."),uh=m(),b(So.$$.fragment),_h=m(),b(Wo.$$.fragment),vh=m(),ye=s("div"),b(er.$$.fragment),Ph=m(),zt=s("p"),bh=i("The "),ga=s("a"),Ih=i("TFCLIPModel"),$h=i(" forward method, overrides the "),Ai=s("code"),yh=i("__call__"),Ch=i(" special method."),Th=m(),b(Bo.$$.fragment),Lh=m(),b(Ro.$$.fragment),xh=m(),Ce=s("div"),b(tr.$$.fragment),wh=m(),Mt=s("p"),kh=i("The "),ua=s("a"),zh=i("TFCLIPModel"),Mh=i(" forward method, overrides the "),Oi=s("code"),jh=i("__call__"),Eh=i(" special method."),Fh=m(),b(Uo.$$.fragment),qh=m(),b(Ko.$$.fragment),od=m(),jt=s("h2"),Ho=s("a"),Vi=s("span"),b(or.$$.fragment),Dh=m(),Si=s("span"),Nh=i("TFCLIPTextModel"),nd=m(),Et=s("div"),b(nr.$$.fragment),Ah=m(),Te=s("div"),b(sr.$$.fragment),Oh=m(),Ft=s("p"),Vh=i("The "),_a=s("a"),Sh=i("TFCLIPTextModel"),Wh=i(" forward method, overrides the "),Wi=s("code"),Bh=i("__call__"),Rh=i(" special method."),Uh=m(),b(Go.$$.fragment),Kh=m(),b(Jo.$$.fragment),sd=m(),qt=s("h2"),Xo=s("a"),Bi=s("span"),b(rr.$$.fragment),Hh=m(),Ri=s("span"),Gh=i("TFCLIPVisionModel"),rd=m(),Dt=s("div"),b(ar.$$.fragment),Jh=m(),Le=s("div"),b(ir.$$.fragment),Xh=m(),Nt=s("p"),Yh=i("The "),va=s("a"),Qh=i("TFCLIPVisionModel"),Zh=i(" forward method, overrides the "),Ui=s("code"),eg=i("__call__"),tg=i(" special method."),og=m(),b(Yo.$$.fragment),ng=m(),b(Qo.$$.fragment),ad=m(),At=s("h2"),Zo=s("a"),Ki=s("span"),b(lr.$$.fragment),sg=m(),Hi=s("span"),rg=i("FlaxCLIPModel"),id=m(),E=s("div"),b(dr.$$.fragment),ag=m(),cr=s("p"),ig=i("This model inherits from "),Pa=s("a"),lg=i("FlaxPreTrainedModel"),dg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cg=m(),pr=s("p"),pg=i("This model is also a Flax Linen "),mr=s("a"),mg=i("flax.linen.Module"),fg=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hg=m(),Gi=s("p"),gg=i("Finally, this model supports inherent JAX features such as:"),ug=m(),qe=s("ul"),Ji=s("li"),fr=s("a"),_g=i("Just-In-Time (JIT) compilation"),vg=m(),Xi=s("li"),hr=s("a"),Pg=i("Automatic Differentiation"),bg=m(),Yi=s("li"),gr=s("a"),Ig=i("Vectorization"),$g=m(),Qi=s("li"),ur=s("a"),yg=i("Parallelization"),Cg=m(),xe=s("div"),b(_r.$$.fragment),Tg=m(),Ot=s("p"),Lg=i("The "),Zi=s("code"),xg=i("FlaxCLIPPreTrainedModel"),wg=i(" forward method, overrides the "),el=s("code"),kg=i("__call__"),zg=i(" special method."),Mg=m(),b(en.$$.fragment),jg=m(),b(tn.$$.fragment),Eg=m(),on=s("div"),b(vr.$$.fragment),Fg=m(),b(nn.$$.fragment),qg=m(),sn=s("div"),b(Pr.$$.fragment),Dg=m(),b(rn.$$.fragment),ld=m(),Vt=s("h2"),an=s("a"),tl=s("span"),b(br.$$.fragment),Ng=m(),ol=s("span"),Ag=i("FlaxCLIPTextModel"),dd=m(),St=s("div"),b(Ir.$$.fragment),Og=m(),we=s("div"),b($r.$$.fragment),Vg=m(),Wt=s("p"),Sg=i("The "),nl=s("code"),Wg=i("FlaxCLIPTextPreTrainedModel"),Bg=i(" forward method, overrides the "),sl=s("code"),Rg=i("__call__"),Ug=i(" special method."),Kg=m(),b(ln.$$.fragment),Hg=m(),b(dn.$$.fragment),cd=m(),Bt=s("h2"),cn=s("a"),rl=s("span"),b(yr.$$.fragment),Gg=m(),al=s("span"),Jg=i("FlaxCLIPVisionModel"),pd=m(),Rt=s("div"),b(Cr.$$.fragment),Xg=m(),ke=s("div"),b(Tr.$$.fragment),Yg=m(),Ut=s("p"),Qg=i("The "),il=s("code"),Zg=i("FlaxCLIPVisionPreTrainedModel"),eu=i(" forward method, overrides the "),ll=s("code"),tu=i("__call__"),ou=i(" special method."),nu=m(),b(pn.$$.fragment),su=m(),b(mn.$$.fragment),this.h()},l(t){const u=Av('[data-svelte="svelte-1phssyn"]',document.head);d=r(u,"META",{name:!0,content:!0}),u.forEach(o),P=f(t),g=r(t,"H1",{class:!0});var Lr=a(g);p=r(Lr,"A",{id:!0,class:!0,href:!0});var dl=a(p);_=r(dl,"SPAN",{});var cl=a(_);I(n.$$.fragment,cl),cl.forEach(o),dl.forEach(o),c=f(Lr),x=r(Lr,"SPAN",{});var pl=a(x);Mn=l(pl,"CLIP"),pl.forEach(o),Lr.forEach(o),Ht=f(t),H=r(t,"H2",{class:!0});var xr=a(H);de=r(xr,"A",{id:!0,class:!0,href:!0});var ml=a(de);Ne=r(ml,"SPAN",{});var fl=a(Ne);I(M.$$.fragment,fl),fl.forEach(o),ml.forEach(o),jn=f(xr),ze=r(xr,"SPAN",{});var hl=a(ze);En=l(hl,"Overview"),hl.forEach(o),xr.forEach(o),Gt=f(t),Z=r(t,"P",{});var wr=a(Z);Fn=l(wr,"The CLIP model was proposed in "),Me=r(wr,"A",{href:!0,rel:!0});var gl=a(Me);Je=l(gl,"Learning Transferable Visual Models From Natural Language Supervision"),gl.forEach(o),qn=l(wr,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),wr.forEach(o),Jt=f(t),ce=r(t,"P",{});var ul=a(ce);Dn=l(ul,"The abstract from the paper is the following:"),ul.forEach(o),Xt=f(t),pe=r(t,"P",{});var _l=a(pe);Xe=r(_l,"EM",{});var vl=a(Xe);Nn=l(vl,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
restricted form of supervision limits their generality and usability since additional labeled data is needed to specify
any other visual concept. Learning directly from raw text about images is a promising alternative which leverages a
much broader source of supervision. We demonstrate that the simple pre-training task of predicting which caption goes
with which image is an efficient and scalable way to learn SOTA image representations from scratch on a dataset of 400
million (image, text) pairs collected from the internet. After pre-training, natural language is used to reference
learned visual concepts (or describe new ones) enabling zero-shot transfer of the model to downstream tasks. We study
the performance of this approach by benchmarking on over 30 different existing computer vision datasets, spanning tasks
such as OCR, action recognition in videos, geo-localization, and many types of fine-grained object classification. The
model transfers non-trivially to most tasks and is often competitive with a fully supervised baseline without the need
for any dataset specific training. For instance, we match the accuracy of the original ResNet-50 on ImageNet zero-shot
without needing to use any of the 1.28 million training examples it was trained on. We release our code and pre-trained
model weights at this https URL.`),vl.forEach(o),_l.forEach(o),Ye=f(t),F=r(t,"H2",{class:!0});var kr=a(F);W=r(kr,"A",{id:!0,class:!0,href:!0});var Pl=a(W);Qe=r(Pl,"SPAN",{});var bl=a(Qe);I(ae.$$.fragment,bl),bl.forEach(o),Pl.forEach(o),An=f(kr),Ze=r(kr,"SPAN",{});var Il=a(Ze);et=l(Il,"Usage"),Il.forEach(o),kr.forEach(o),Yt=f(t),Ae=r(t,"P",{});var $l=a(Ae);me=l($l,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),$l.forEach(o),Qt=f(t),ee=r(t,"P",{});var zr=a(ee);On=l(zr,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Oe=r(zr,"A",{href:!0});var yl=a(Oe);tt=l(yl,"CLIPFeatureExtractor"),yl.forEach(o),Vn=l(zr," can be used to resize (or rescale) and normalize images for the model."),zr.forEach(o),Zt=f(t),z=r(t,"P",{});var B=a(z);Sn=l(B,"The "),fe=r(B,"A",{href:!0});var Cl=a(fe);Wn=l(Cl,"CLIPTokenizer"),Cl.forEach(o),eo=l(B," is used to encode the text. The "),G=r(B,"A",{href:!0});var Tl=a(G);Bn=l(Tl,"CLIPProcessor"),Tl.forEach(o),je=l(B,` wraps
`),Ve=r(B,"A",{href:!0});var Ll=a(Ve);Rn=l(Ll,"CLIPFeatureExtractor"),Ll.forEach(o),k=l(B," and "),j=r(B,"A",{href:!0});var xl=a(j);Er=l(xl,"CLIPTokenizer"),xl.forEach(o),to=l(B,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ot=r(B,"A",{href:!0});var wl=a(ot);Fr=l(wl,"CLIPProcessor"),wl.forEach(o),R=l(B," and "),nt=r(B,"A",{href:!0});var kl=a(nt);qr=l(kl,"CLIPModel"),kl.forEach(o),Dr=l(B,"."),B.forEach(o),Un=f(t),I(Se.$$.fragment,t),Ee=f(t),U=r(t,"P",{});var Kt=a(U);Nr=l(Kt,"This model was contributed by "),We=r(Kt,"A",{href:!0,rel:!0});var zl=a(We);st=l(zl,"valhalla"),zl.forEach(o),Ar=l(Kt,". The original code can be found "),Be=r(Kt,"A",{href:!0,rel:!0});var Ml=a(Be);Kn=l(Ml,"here"),Ml.forEach(o),Or=l(Kt,"."),Kt.forEach(o),rt=f(t),he=r(t,"H2",{class:!0});var Mr=a(he);oo=r(Mr,"A",{id:!0,class:!0,href:!0});var jl=a(oo);Oa=r(jl,"SPAN",{});var iu=a(Oa);I(Hn.$$.fragment,iu),iu.forEach(o),jl.forEach(o),lc=f(Mr),Va=r(Mr,"SPAN",{});var lu=a(Va);dc=l(lu,"CLIPConfig"),lu.forEach(o),Mr.forEach(o),El=f(t),J=r(t,"DIV",{class:!0});var Ue=a(J);I(Gn.$$.fragment,Ue),cc=f(Ue),Re=r(Ue,"P",{});var jr=a(Re);Vr=r(jr,"A",{href:!0});var du=a(Vr);pc=l(du,"CLIPConfig"),du.forEach(o),mc=l(jr," is the configuration class to store the configuration of a "),Sr=r(jr,"A",{href:!0});var cu=a(Sr);fc=l(cu,"CLIPModel"),cu.forEach(o),hc=l(jr,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Jn=r(jr,"A",{href:!0,rel:!0});var pu=a(Jn);gc=l(pu,"openai/clip-vit-base-patch32"),pu.forEach(o),uc=l(jr," architecture."),jr.forEach(o),_c=f(Ue),at=r(Ue,"P",{});var ba=a(at);vc=l(ba,"Configuration objects inherit from "),Wr=r(ba,"A",{href:!0});var mu=a(Wr);Pc=l(mu,"PretrainedConfig"),mu.forEach(o),bc=l(ba,` and can be used to control the model outputs. Read the
documentation from `),Br=r(ba,"A",{href:!0});var fu=a(Br);Ic=l(fu,"PretrainedConfig"),fu.forEach(o),$c=l(ba," for more information."),ba.forEach(o),yc=f(Ue),I(no.$$.fragment,Ue),Cc=f(Ue),so=r(Ue,"DIV",{class:!0});var fd=a(so);I(Xn.$$.fragment,fd),Tc=f(fd),Yn=r(fd,"P",{});var hd=a(Yn);Lc=l(hd,"Instantiate a "),Rr=r(hd,"A",{href:!0});var hu=a(Rr);xc=l(hu,"CLIPConfig"),hu.forEach(o),wc=l(hd,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),hd.forEach(o),fd.forEach(o),Ue.forEach(o),Fl=f(t),it=r(t,"H2",{class:!0});var gd=a(it);ro=r(gd,"A",{id:!0,class:!0,href:!0});var gu=a(ro);Sa=r(gu,"SPAN",{});var uu=a(Sa);I(Qn.$$.fragment,uu),uu.forEach(o),gu.forEach(o),kc=f(gd),Wa=r(gd,"SPAN",{});var _u=a(Wa);zc=l(_u,"CLIPTextConfig"),_u.forEach(o),gd.forEach(o),ql=f(t),ie=r(t,"DIV",{class:!0});var fn=a(ie);I(Zn.$$.fragment,fn),Mc=f(fn),lt=r(fn,"P",{});var Ia=a(lt);jc=l(Ia,"This is the configuration class to store the configuration of a "),Ur=r(Ia,"A",{href:!0});var vu=a(Ur);Ec=l(vu,"CLIPModel"),vu.forEach(o),Fc=l(Ia,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),es=r(Ia,"A",{href:!0,rel:!0});var Pu=a(es);qc=l(Pu,"openai/clip-vit-base-patch32"),Pu.forEach(o),Dc=l(Ia," architecture."),Ia.forEach(o),Nc=f(fn),dt=r(fn,"P",{});var $a=a(dt);Ac=l($a,"Configuration objects inherit from "),Kr=r($a,"A",{href:!0});var bu=a(Kr);Oc=l(bu,"PretrainedConfig"),bu.forEach(o),Vc=l($a,` and can be used to control the model outputs. Read the
documentation from `),Hr=r($a,"A",{href:!0});var Iu=a(Hr);Sc=l(Iu,"PretrainedConfig"),Iu.forEach(o),Wc=l($a," for more information."),$a.forEach(o),Bc=f(fn),I(ao.$$.fragment,fn),fn.forEach(o),Dl=f(t),ct=r(t,"H2",{class:!0});var ud=a(ct);io=r(ud,"A",{id:!0,class:!0,href:!0});var $u=a(io);Ba=r($u,"SPAN",{});var yu=a(Ba);I(ts.$$.fragment,yu),yu.forEach(o),$u.forEach(o),Rc=f(ud),Ra=r(ud,"SPAN",{});var Cu=a(Ra);Uc=l(Cu,"CLIPVisionConfig"),Cu.forEach(o),ud.forEach(o),Nl=f(t),le=r(t,"DIV",{class:!0});var hn=a(le);I(os.$$.fragment,hn),Kc=f(hn),pt=r(hn,"P",{});var ya=a(pt);Hc=l(ya,"This is the configuration class to store the configuration of a "),Gr=r(ya,"A",{href:!0});var Tu=a(Gr);Gc=l(Tu,"CLIPModel"),Tu.forEach(o),Jc=l(ya,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ns=r(ya,"A",{href:!0,rel:!0});var Lu=a(ns);Xc=l(Lu,"openai/clip-vit-base-patch32"),Lu.forEach(o),Yc=l(ya," architecture."),ya.forEach(o),Qc=f(hn),mt=r(hn,"P",{});var Ca=a(mt);Zc=l(Ca,"Configuration objects inherit from "),Jr=r(Ca,"A",{href:!0});var xu=a(Jr);ep=l(xu,"PretrainedConfig"),xu.forEach(o),tp=l(Ca,` and can be used to control the model outputs. Read the
documentation from `),Xr=r(Ca,"A",{href:!0});var wu=a(Xr);op=l(wu,"PretrainedConfig"),wu.forEach(o),np=l(Ca," for more information."),Ca.forEach(o),sp=f(hn),I(lo.$$.fragment,hn),hn.forEach(o),Al=f(t),ft=r(t,"H2",{class:!0});var _d=a(ft);co=r(_d,"A",{id:!0,class:!0,href:!0});var ku=a(co);Ua=r(ku,"SPAN",{});var zu=a(Ua);I(ss.$$.fragment,zu),zu.forEach(o),ku.forEach(o),rp=f(_d),Ka=r(_d,"SPAN",{});var Mu=a(Ka);ap=l(Mu,"CLIPTokenizer"),Mu.forEach(o),_d.forEach(o),Ol=f(t),D=r(t,"DIV",{class:!0});var oe=a(D);I(rs.$$.fragment,oe),ip=f(oe),Ha=r(oe,"P",{});var ju=a(Ha);lp=l(ju,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),ju.forEach(o),dp=f(oe),as=r(oe,"P",{});var vd=a(as);cp=l(vd,"This tokenizer inherits from "),Yr=r(vd,"A",{href:!0});var Eu=a(Yr);pp=l(Eu,"PreTrainedTokenizer"),Eu.forEach(o),mp=l(vd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vd.forEach(o),fp=f(oe),ge=r(oe,"DIV",{class:!0});var gn=a(ge);I(is.$$.fragment,gn),hp=f(gn),Ga=r(gn,"P",{});var Fu=a(Ga);gp=l(Fu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Fu.forEach(o),up=f(gn),Ja=r(gn,"UL",{});var qu=a(Ja);Qr=r(qu,"LI",{});var ru=a(Qr);_p=l(ru,"single sequence: "),Xa=r(ru,"CODE",{});var Du=a(Xa);vp=l(Du,"<|startoftext|> X <|endoftext|>"),Du.forEach(o),ru.forEach(o),qu.forEach(o),Pp=f(gn),Ya=r(gn,"P",{});var Nu=a(Ya);bp=l(Nu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Nu.forEach(o),gn.forEach(o),Ip=f(oe),po=r(oe,"DIV",{class:!0});var Pd=a(po);I(ls.$$.fragment,Pd),$p=f(Pd),ds=r(Pd,"P",{});var bd=a(ds);yp=l(bd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Qa=r(bd,"CODE",{});var Au=a(Qa);Cp=l(Au,"prepare_for_model"),Au.forEach(o),Tp=l(bd," method."),bd.forEach(o),Pd.forEach(o),Lp=f(oe),mo=r(oe,"DIV",{class:!0});var Id=a(mo);I(cs.$$.fragment,Id),xp=f(Id),Za=r(Id,"P",{});var Ou=a(Za);wp=l(Ou,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Ou.forEach(o),Id.forEach(o),kp=f(oe),Zr=r(oe,"DIV",{class:!0});var Vu=a(Zr);I(ps.$$.fragment,Vu),Vu.forEach(o),oe.forEach(o),Vl=f(t),ht=r(t,"H2",{class:!0});var $d=a(ht);fo=r($d,"A",{id:!0,class:!0,href:!0});var Su=a(fo);ei=r(Su,"SPAN",{});var Wu=a(ei);I(ms.$$.fragment,Wu),Wu.forEach(o),Su.forEach(o),zp=f($d),ti=r($d,"SPAN",{});var Bu=a(ti);Mp=l(Bu,"CLIPTokenizerFast"),Bu.forEach(o),$d.forEach(o),Sl=f(t),X=r(t,"DIV",{class:!0});var Ke=a(X);I(fs.$$.fragment,Ke),jp=f(Ke),hs=r(Ke,"P",{});var yd=a(hs);Ep=l(yd,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),oi=r(yd,"EM",{});var Ru=a(oi);Fp=l(Ru,"tokenizers"),Ru.forEach(o),qp=l(yd,` library). Based on byte-level
Byte-Pair-Encoding.`),yd.forEach(o),Dp=f(Ke),gs=r(Ke,"P",{});var Cd=a(gs);Np=l(Cd,"This tokenizer inherits from "),ea=r(Cd,"A",{href:!0});var Uu=a(ea);Ap=l(Uu,"PreTrainedTokenizerFast"),Uu.forEach(o),Op=l(Cd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Cd.forEach(o),Vp=f(Ke),ue=r(Ke,"DIV",{class:!0});var un=a(ue);I(us.$$.fragment,un),Sp=f(un),ni=r(un,"P",{});var Ku=a(ni);Wp=l(Ku,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Ku.forEach(o),Bp=f(un),si=r(un,"UL",{});var Hu=a(si);ta=r(Hu,"LI",{});var au=a(ta);Rp=l(au,"single sequence: "),ri=r(au,"CODE",{});var Gu=a(ri);Up=l(Gu,"<|startoftext|> X <|endoftext|>"),Gu.forEach(o),au.forEach(o),Hu.forEach(o),Kp=f(un),ai=r(un,"P",{});var Ju=a(ai);Hp=l(Ju,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Ju.forEach(o),un.forEach(o),Gp=f(Ke),ho=r(Ke,"DIV",{class:!0});var Td=a(ho);I(_s.$$.fragment,Td),Jp=f(Td),ii=r(Td,"P",{});var Xu=a(ii);Xp=l(Xu,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Xu.forEach(o),Td.forEach(o),Ke.forEach(o),Wl=f(t),gt=r(t,"H2",{class:!0});var Ld=a(gt);go=r(Ld,"A",{id:!0,class:!0,href:!0});var Yu=a(go);li=r(Yu,"SPAN",{});var Qu=a(li);I(vs.$$.fragment,Qu),Qu.forEach(o),Yu.forEach(o),Yp=f(Ld),di=r(Ld,"SPAN",{});var Zu=a(di);Qp=l(Zu,"CLIPImageProcessor"),Zu.forEach(o),Ld.forEach(o),Bl=f(t),Fe=r(t,"DIV",{class:!0});var Ta=a(Fe);I(Ps.$$.fragment,Ta),Zp=f(Ta),ci=r(Ta,"P",{});var e_=a(ci);em=l(e_,"Constructs a CLIP image processor."),e_.forEach(o),tm=f(Ta),uo=r(Ta,"DIV",{class:!0});var xd=a(uo);I(bs.$$.fragment,xd),om=f(xd),pi=r(xd,"P",{});var t_=a(pi);nm=l(t_,"Preprocess an image or batch of images."),t_.forEach(o),xd.forEach(o),Ta.forEach(o),Rl=f(t),ut=r(t,"H2",{class:!0});var wd=a(ut);_o=r(wd,"A",{id:!0,class:!0,href:!0});var o_=a(_o);mi=r(o_,"SPAN",{});var n_=a(mi);I(Is.$$.fragment,n_),n_.forEach(o),o_.forEach(o),sm=f(wd),fi=r(wd,"SPAN",{});var s_=a(fi);rm=l(s_,"CLIPFeatureExtractor"),s_.forEach(o),wd.forEach(o),Ul=f(t),N=r(t,"DIV",{class:!0});var ne=a(N);I($s.$$.fragment,ne),am=f(ne),hi=r(ne,"P",{});var r_=a(hi);im=l(r_,"Constructs a CLIP image processor."),r_.forEach(o),lm=f(ne),vo=r(ne,"DIV",{class:!0});var kd=a(vo);I(ys.$$.fragment,kd),dm=f(kd),Cs=r(kd,"P",{});var zd=a(Cs);cm=l(zd,`Center crop an image. If the image is too small to be cropped to the size given, it will be padded (so the
returned result will always be of size `),gi=r(zd,"CODE",{});var a_=a(gi);pm=l(a_,"size"),a_.forEach(o),mm=l(zd,")."),zd.forEach(o),kd.forEach(o),fm=f(ne),Po=r(ne,"DIV",{class:!0});var Md=a(Po);I(Ts.$$.fragment,Md),hm=f(Md),ui=r(Md,"P",{});var i_=a(ui);gm=l(i_,"Normalize an image. image = (image - image_mean) / image_std."),i_.forEach(o),Md.forEach(o),um=f(ne),bo=r(ne,"DIV",{class:!0});var jd=a(bo);I(Ls.$$.fragment,jd),_m=f(jd),_i=r(jd,"P",{});var l_=a(_i);vm=l(l_,"Preprocess an image or batch of images."),l_.forEach(o),jd.forEach(o),Pm=f(ne),Io=r(ne,"DIV",{class:!0});var Ed=a(Io);I(xs.$$.fragment,Ed),bm=f(Ed),vi=r(Ed,"P",{});var d_=a(vi);Im=l(d_,"Rescale an image by a scale factor. image = image * scale."),d_.forEach(o),Ed.forEach(o),$m=f(ne),$o=r(ne,"DIV",{class:!0});var Fd=a($o);I(ws.$$.fragment,Fd),ym=f(Fd),Pi=r(Fd,"P",{});var c_=a(Pi);Cm=l(c_,`Resize an image. The shortest edge of the image is resized to size[\u201Cshortest_edge\u201D], with the longest edge
resized to keep the input aspect ratio.`),c_.forEach(o),Fd.forEach(o),ne.forEach(o),Kl=f(t),_t=r(t,"H2",{class:!0});var qd=a(_t);yo=r(qd,"A",{id:!0,class:!0,href:!0});var p_=a(yo);bi=r(p_,"SPAN",{});var m_=a(bi);I(ks.$$.fragment,m_),m_.forEach(o),p_.forEach(o),Tm=f(qd),Ii=r(qd,"SPAN",{});var f_=a(Ii);Lm=l(f_,"CLIPProcessor"),f_.forEach(o),qd.forEach(o),Hl=f(t),Y=r(t,"DIV",{class:!0});var He=a(Y);I(zs.$$.fragment,He),xm=f(He),$i=r(He,"P",{});var h_=a($i);wm=l(h_,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),h_.forEach(o),km=f(He),te=r(He,"P",{});var De=a(te);oa=r(De,"A",{href:!0});var g_=a(oa);zm=l(g_,"CLIPProcessor"),g_.forEach(o),Mm=l(De," offers all the functionalities of "),na=r(De,"A",{href:!0});var u_=a(na);jm=l(u_,"CLIPFeatureExtractor"),u_.forEach(o),Em=l(De," and "),sa=r(De,"A",{href:!0});var __=a(sa);Fm=l(__,"CLIPTokenizerFast"),__.forEach(o),qm=l(De,`. See the
`),yi=r(De,"CODE",{});var v_=a(yi);Dm=l(v_,"__call__()"),v_.forEach(o),Nm=l(De," and "),ra=r(De,"A",{href:!0});var P_=a(ra);Am=l(P_,"decode()"),P_.forEach(o),Om=l(De," for more information."),De.forEach(o),Vm=f(He),Co=r(He,"DIV",{class:!0});var Dd=a(Co);I(Ms.$$.fragment,Dd),Sm=f(Dd),js=r(Dd,"P",{});var Nd=a(js);Wm=l(Nd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),aa=r(Nd,"A",{href:!0});var b_=a(aa);Bm=l(b_,"batch_decode()"),b_.forEach(o),Rm=l(Nd,`. Please
refer to the docstring of this method for more information.`),Nd.forEach(o),Dd.forEach(o),Um=f(He),To=r(He,"DIV",{class:!0});var Ad=a(To);I(Es.$$.fragment,Ad),Km=f(Ad),Fs=r(Ad,"P",{});var Od=a(Fs);Hm=l(Od,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),ia=r(Od,"A",{href:!0});var I_=a(ia);Gm=l(I_,"decode()"),I_.forEach(o),Jm=l(Od,`. Please refer to
the docstring of this method for more information.`),Od.forEach(o),Ad.forEach(o),He.forEach(o),Gl=f(t),vt=r(t,"H2",{class:!0});var Vd=a(vt);Lo=r(Vd,"A",{id:!0,class:!0,href:!0});var $_=a(Lo);Ci=r($_,"SPAN",{});var y_=a(Ci);I(qs.$$.fragment,y_),y_.forEach(o),$_.forEach(o),Xm=f(Vd),Ti=r(Vd,"SPAN",{});var C_=a(Ti);Ym=l(C_,"CLIPModel"),C_.forEach(o),Vd.forEach(o),Jl=f(t),Q=r(t,"DIV",{class:!0});var Ge=a(Q);I(Ds.$$.fragment,Ge),Qm=f(Ge),Ns=r(Ge,"P",{});var Sd=a(Ns);Zm=l(Sd,"This model is a PyTorch "),As=r(Sd,"A",{href:!0,rel:!0});var T_=a(As);ef=l(T_,"torch.nn.Module"),T_.forEach(o),tf=l(Sd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sd.forEach(o),of=f(Ge),_e=r(Ge,"DIV",{class:!0});var _n=a(_e);I(Os.$$.fragment,_n),nf=f(_n),Pt=r(_n,"P",{});var La=a(Pt);sf=l(La,"The "),la=r(La,"A",{href:!0});var L_=a(la);rf=l(L_,"CLIPModel"),L_.forEach(o),af=l(La," forward method, overrides the "),Li=r(La,"CODE",{});var x_=a(Li);lf=l(x_,"__call__"),x_.forEach(o),df=l(La," special method."),La.forEach(o),cf=f(_n),I(xo.$$.fragment,_n),pf=f(_n),I(wo.$$.fragment,_n),_n.forEach(o),mf=f(Ge),ve=r(Ge,"DIV",{class:!0});var vn=a(ve);I(Vs.$$.fragment,vn),ff=f(vn),bt=r(vn,"P",{});var xa=a(bt);hf=l(xa,"The "),da=r(xa,"A",{href:!0});var w_=a(da);gf=l(w_,"CLIPModel"),w_.forEach(o),uf=l(xa," forward method, overrides the "),xi=r(xa,"CODE",{});var k_=a(xi);_f=l(k_,"__call__"),k_.forEach(o),vf=l(xa," special method."),xa.forEach(o),Pf=f(vn),I(ko.$$.fragment,vn),bf=f(vn),I(zo.$$.fragment,vn),vn.forEach(o),If=f(Ge),Pe=r(Ge,"DIV",{class:!0});var Pn=a(Pe);I(Ss.$$.fragment,Pn),$f=f(Pn),It=r(Pn,"P",{});var wa=a(It);yf=l(wa,"The "),ca=r(wa,"A",{href:!0});var z_=a(ca);Cf=l(z_,"CLIPModel"),z_.forEach(o),Tf=l(wa," forward method, overrides the "),wi=r(wa,"CODE",{});var M_=a(wi);Lf=l(M_,"__call__"),M_.forEach(o),xf=l(wa," special method."),wa.forEach(o),wf=f(Pn),I(Mo.$$.fragment,Pn),kf=f(Pn),I(jo.$$.fragment,Pn),Pn.forEach(o),Ge.forEach(o),Xl=f(t),$t=r(t,"H2",{class:!0});var Wd=a($t);Eo=r(Wd,"A",{id:!0,class:!0,href:!0});var j_=a(Eo);ki=r(j_,"SPAN",{});var E_=a(ki);I(Ws.$$.fragment,E_),E_.forEach(o),j_.forEach(o),zf=f(Wd),zi=r(Wd,"SPAN",{});var F_=a(zi);Mf=l(F_,"CLIPTextModel"),F_.forEach(o),Wd.forEach(o),Yl=f(t),yt=r(t,"DIV",{class:!0});var Bd=a(yt);I(Bs.$$.fragment,Bd),jf=f(Bd),be=r(Bd,"DIV",{class:!0});var bn=a(be);I(Rs.$$.fragment,bn),Ef=f(bn),Ct=r(bn,"P",{});var ka=a(Ct);Ff=l(ka,"The "),pa=r(ka,"A",{href:!0});var q_=a(pa);qf=l(q_,"CLIPTextModel"),q_.forEach(o),Df=l(ka," forward method, overrides the "),Mi=r(ka,"CODE",{});var D_=a(Mi);Nf=l(D_,"__call__"),D_.forEach(o),Af=l(ka," special method."),ka.forEach(o),Of=f(bn),I(Fo.$$.fragment,bn),Vf=f(bn),I(qo.$$.fragment,bn),bn.forEach(o),Bd.forEach(o),Ql=f(t),Tt=r(t,"H2",{class:!0});var Rd=a(Tt);Do=r(Rd,"A",{id:!0,class:!0,href:!0});var N_=a(Do);ji=r(N_,"SPAN",{});var A_=a(ji);I(Us.$$.fragment,A_),A_.forEach(o),N_.forEach(o),Sf=f(Rd),Ei=r(Rd,"SPAN",{});var O_=a(Ei);Wf=l(O_,"CLIPVisionModel"),O_.forEach(o),Rd.forEach(o),Zl=f(t),Lt=r(t,"DIV",{class:!0});var Ud=a(Lt);I(Ks.$$.fragment,Ud),Bf=f(Ud),Ie=r(Ud,"DIV",{class:!0});var In=a(Ie);I(Hs.$$.fragment,In),Rf=f(In),xt=r(In,"P",{});var za=a(xt);Uf=l(za,"The "),ma=r(za,"A",{href:!0});var V_=a(ma);Kf=l(V_,"CLIPVisionModel"),V_.forEach(o),Hf=l(za," forward method, overrides the "),Fi=r(za,"CODE",{});var S_=a(Fi);Gf=l(S_,"__call__"),S_.forEach(o),Jf=l(za," special method."),za.forEach(o),Xf=f(In),I(No.$$.fragment,In),Yf=f(In),I(Ao.$$.fragment,In),In.forEach(o),Ud.forEach(o),ed=f(t),wt=r(t,"H2",{class:!0});var Kd=a(wt);Oo=r(Kd,"A",{id:!0,class:!0,href:!0});var W_=a(Oo);qi=r(W_,"SPAN",{});var B_=a(qi);I(Gs.$$.fragment,B_),B_.forEach(o),W_.forEach(o),Qf=f(Kd),Di=r(Kd,"SPAN",{});var R_=a(Di);Zf=l(R_,"TFCLIPModel"),R_.forEach(o),Kd.forEach(o),td=f(t),A=r(t,"DIV",{class:!0});var se=a(A);I(Js.$$.fragment,se),eh=f(se),Xs=r(se,"P",{});var Hd=a(Xs);th=l(Hd,"This model inherits from "),fa=r(Hd,"A",{href:!0});var U_=a(fa);oh=l(U_,"TFPreTrainedModel"),U_.forEach(o),nh=l(Hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hd.forEach(o),sh=f(se),Ys=r(se,"P",{});var Gd=a(Ys);rh=l(Gd,"This model is also a "),Qs=r(Gd,"A",{href:!0,rel:!0});var K_=a(Qs);ah=l(K_,"tf.keras.Model"),K_.forEach(o),ih=l(Gd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gd.forEach(o),lh=f(se),I(Vo.$$.fragment,se),dh=f(se),$e=r(se,"DIV",{class:!0});var $n=a($e);I(Zs.$$.fragment,$n),ch=f($n),kt=r($n,"P",{});var Ma=a(kt);ph=l(Ma,"The "),ha=r(Ma,"A",{href:!0});var H_=a(ha);mh=l(H_,"TFCLIPModel"),H_.forEach(o),fh=l(Ma," forward method, overrides the "),Ni=r(Ma,"CODE",{});var G_=a(Ni);hh=l(G_,"__call__"),G_.forEach(o),gh=l(Ma," special method."),Ma.forEach(o),uh=f($n),I(So.$$.fragment,$n),_h=f($n),I(Wo.$$.fragment,$n),$n.forEach(o),vh=f(se),ye=r(se,"DIV",{class:!0});var yn=a(ye);I(er.$$.fragment,yn),Ph=f(yn),zt=r(yn,"P",{});var ja=a(zt);bh=l(ja,"The "),ga=r(ja,"A",{href:!0});var J_=a(ga);Ih=l(J_,"TFCLIPModel"),J_.forEach(o),$h=l(ja," forward method, overrides the "),Ai=r(ja,"CODE",{});var X_=a(Ai);yh=l(X_,"__call__"),X_.forEach(o),Ch=l(ja," special method."),ja.forEach(o),Th=f(yn),I(Bo.$$.fragment,yn),Lh=f(yn),I(Ro.$$.fragment,yn),yn.forEach(o),xh=f(se),Ce=r(se,"DIV",{class:!0});var Cn=a(Ce);I(tr.$$.fragment,Cn),wh=f(Cn),Mt=r(Cn,"P",{});var Ea=a(Mt);kh=l(Ea,"The "),ua=r(Ea,"A",{href:!0});var Y_=a(ua);zh=l(Y_,"TFCLIPModel"),Y_.forEach(o),Mh=l(Ea," forward method, overrides the "),Oi=r(Ea,"CODE",{});var Q_=a(Oi);jh=l(Q_,"__call__"),Q_.forEach(o),Eh=l(Ea," special method."),Ea.forEach(o),Fh=f(Cn),I(Uo.$$.fragment,Cn),qh=f(Cn),I(Ko.$$.fragment,Cn),Cn.forEach(o),se.forEach(o),od=f(t),jt=r(t,"H2",{class:!0});var Jd=a(jt);Ho=r(Jd,"A",{id:!0,class:!0,href:!0});var Z_=a(Ho);Vi=r(Z_,"SPAN",{});var ev=a(Vi);I(or.$$.fragment,ev),ev.forEach(o),Z_.forEach(o),Dh=f(Jd),Si=r(Jd,"SPAN",{});var tv=a(Si);Nh=l(tv,"TFCLIPTextModel"),tv.forEach(o),Jd.forEach(o),nd=f(t),Et=r(t,"DIV",{class:!0});var Xd=a(Et);I(nr.$$.fragment,Xd),Ah=f(Xd),Te=r(Xd,"DIV",{class:!0});var Tn=a(Te);I(sr.$$.fragment,Tn),Oh=f(Tn),Ft=r(Tn,"P",{});var Fa=a(Ft);Vh=l(Fa,"The "),_a=r(Fa,"A",{href:!0});var ov=a(_a);Sh=l(ov,"TFCLIPTextModel"),ov.forEach(o),Wh=l(Fa," forward method, overrides the "),Wi=r(Fa,"CODE",{});var nv=a(Wi);Bh=l(nv,"__call__"),nv.forEach(o),Rh=l(Fa," special method."),Fa.forEach(o),Uh=f(Tn),I(Go.$$.fragment,Tn),Kh=f(Tn),I(Jo.$$.fragment,Tn),Tn.forEach(o),Xd.forEach(o),sd=f(t),qt=r(t,"H2",{class:!0});var Yd=a(qt);Xo=r(Yd,"A",{id:!0,class:!0,href:!0});var sv=a(Xo);Bi=r(sv,"SPAN",{});var rv=a(Bi);I(rr.$$.fragment,rv),rv.forEach(o),sv.forEach(o),Hh=f(Yd),Ri=r(Yd,"SPAN",{});var av=a(Ri);Gh=l(av,"TFCLIPVisionModel"),av.forEach(o),Yd.forEach(o),rd=f(t),Dt=r(t,"DIV",{class:!0});var Qd=a(Dt);I(ar.$$.fragment,Qd),Jh=f(Qd),Le=r(Qd,"DIV",{class:!0});var Ln=a(Le);I(ir.$$.fragment,Ln),Xh=f(Ln),Nt=r(Ln,"P",{});var qa=a(Nt);Yh=l(qa,"The "),va=r(qa,"A",{href:!0});var iv=a(va);Qh=l(iv,"TFCLIPVisionModel"),iv.forEach(o),Zh=l(qa," forward method, overrides the "),Ui=r(qa,"CODE",{});var lv=a(Ui);eg=l(lv,"__call__"),lv.forEach(o),tg=l(qa," special method."),qa.forEach(o),og=f(Ln),I(Yo.$$.fragment,Ln),ng=f(Ln),I(Qo.$$.fragment,Ln),Ln.forEach(o),Qd.forEach(o),ad=f(t),At=r(t,"H2",{class:!0});var Zd=a(At);Zo=r(Zd,"A",{id:!0,class:!0,href:!0});var dv=a(Zo);Ki=r(dv,"SPAN",{});var cv=a(Ki);I(lr.$$.fragment,cv),cv.forEach(o),dv.forEach(o),sg=f(Zd),Hi=r(Zd,"SPAN",{});var pv=a(Hi);rg=l(pv,"FlaxCLIPModel"),pv.forEach(o),Zd.forEach(o),id=f(t),E=r(t,"DIV",{class:!0});var K=a(E);I(dr.$$.fragment,K),ag=f(K),cr=r(K,"P",{});var ec=a(cr);ig=l(ec,"This model inherits from "),Pa=r(ec,"A",{href:!0});var mv=a(Pa);lg=l(mv,"FlaxPreTrainedModel"),mv.forEach(o),dg=l(ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ec.forEach(o),cg=f(K),pr=r(K,"P",{});var tc=a(pr);pg=l(tc,"This model is also a Flax Linen "),mr=r(tc,"A",{href:!0,rel:!0});var fv=a(mr);mg=l(fv,"flax.linen.Module"),fv.forEach(o),fg=l(tc,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tc.forEach(o),hg=f(K),Gi=r(K,"P",{});var hv=a(Gi);gg=l(hv,"Finally, this model supports inherent JAX features such as:"),hv.forEach(o),ug=f(K),qe=r(K,"UL",{});var xn=a(qe);Ji=r(xn,"LI",{});var gv=a(Ji);fr=r(gv,"A",{href:!0,rel:!0});var uv=a(fr);_g=l(uv,"Just-In-Time (JIT) compilation"),uv.forEach(o),gv.forEach(o),vg=f(xn),Xi=r(xn,"LI",{});var _v=a(Xi);hr=r(_v,"A",{href:!0,rel:!0});var vv=a(hr);Pg=l(vv,"Automatic Differentiation"),vv.forEach(o),_v.forEach(o),bg=f(xn),Yi=r(xn,"LI",{});var Pv=a(Yi);gr=r(Pv,"A",{href:!0,rel:!0});var bv=a(gr);Ig=l(bv,"Vectorization"),bv.forEach(o),Pv.forEach(o),$g=f(xn),Qi=r(xn,"LI",{});var Iv=a(Qi);ur=r(Iv,"A",{href:!0,rel:!0});var $v=a(ur);yg=l($v,"Parallelization"),$v.forEach(o),Iv.forEach(o),xn.forEach(o),Cg=f(K),xe=r(K,"DIV",{class:!0});var wn=a(xe);I(_r.$$.fragment,wn),Tg=f(wn),Ot=r(wn,"P",{});var Da=a(Ot);Lg=l(Da,"The "),Zi=r(Da,"CODE",{});var yv=a(Zi);xg=l(yv,"FlaxCLIPPreTrainedModel"),yv.forEach(o),wg=l(Da," forward method, overrides the "),el=r(Da,"CODE",{});var Cv=a(el);kg=l(Cv,"__call__"),Cv.forEach(o),zg=l(Da," special method."),Da.forEach(o),Mg=f(wn),I(en.$$.fragment,wn),jg=f(wn),I(tn.$$.fragment,wn),wn.forEach(o),Eg=f(K),on=r(K,"DIV",{class:!0});var oc=a(on);I(vr.$$.fragment,oc),Fg=f(oc),I(nn.$$.fragment,oc),oc.forEach(o),qg=f(K),sn=r(K,"DIV",{class:!0});var nc=a(sn);I(Pr.$$.fragment,nc),Dg=f(nc),I(rn.$$.fragment,nc),nc.forEach(o),K.forEach(o),ld=f(t),Vt=r(t,"H2",{class:!0});var sc=a(Vt);an=r(sc,"A",{id:!0,class:!0,href:!0});var Tv=a(an);tl=r(Tv,"SPAN",{});var Lv=a(tl);I(br.$$.fragment,Lv),Lv.forEach(o),Tv.forEach(o),Ng=f(sc),ol=r(sc,"SPAN",{});var xv=a(ol);Ag=l(xv,"FlaxCLIPTextModel"),xv.forEach(o),sc.forEach(o),dd=f(t),St=r(t,"DIV",{class:!0});var rc=a(St);I(Ir.$$.fragment,rc),Og=f(rc),we=r(rc,"DIV",{class:!0});var kn=a(we);I($r.$$.fragment,kn),Vg=f(kn),Wt=r(kn,"P",{});var Na=a(Wt);Sg=l(Na,"The "),nl=r(Na,"CODE",{});var wv=a(nl);Wg=l(wv,"FlaxCLIPTextPreTrainedModel"),wv.forEach(o),Bg=l(Na," forward method, overrides the "),sl=r(Na,"CODE",{});var kv=a(sl);Rg=l(kv,"__call__"),kv.forEach(o),Ug=l(Na," special method."),Na.forEach(o),Kg=f(kn),I(ln.$$.fragment,kn),Hg=f(kn),I(dn.$$.fragment,kn),kn.forEach(o),rc.forEach(o),cd=f(t),Bt=r(t,"H2",{class:!0});var ac=a(Bt);cn=r(ac,"A",{id:!0,class:!0,href:!0});var zv=a(cn);rl=r(zv,"SPAN",{});var Mv=a(rl);I(yr.$$.fragment,Mv),Mv.forEach(o),zv.forEach(o),Gg=f(ac),al=r(ac,"SPAN",{});var jv=a(al);Jg=l(jv,"FlaxCLIPVisionModel"),jv.forEach(o),ac.forEach(o),pd=f(t),Rt=r(t,"DIV",{class:!0});var ic=a(Rt);I(Cr.$$.fragment,ic),Xg=f(ic),ke=r(ic,"DIV",{class:!0});var zn=a(ke);I(Tr.$$.fragment,zn),Yg=f(zn),Ut=r(zn,"P",{});var Aa=a(Ut);Qg=l(Aa,"The "),il=r(Aa,"CODE",{});var Ev=a(il);Zg=l(Ev,"FlaxCLIPVisionPreTrainedModel"),Ev.forEach(o),eu=l(Aa," forward method, overrides the "),ll=r(Aa,"CODE",{});var Fv=a(ll);tu=l(Fv,"__call__"),Fv.forEach(o),ou=l(Aa," special method."),Aa.forEach(o),nu=f(zn),I(pn.$$.fragment,zn),su=f(zn),I(mn.$$.fragment,zn),zn.forEach(o),ic.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(PP)),h(p,"id","clip"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#clip"),h(g,"class","relative group"),h(de,"id","overview"),h(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(de,"href","#overview"),h(H,"class","relative group"),h(Me,"href","https://arxiv.org/abs/2103.00020"),h(Me,"rel","nofollow"),h(W,"id","usage"),h(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(W,"href","#usage"),h(F,"class","relative group"),h(Oe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor"),h(fe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(G,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(Ve,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor"),h(j,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(ot,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(nt,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(We,"href","https://huggingface.co/valhalla"),h(We,"rel","nofollow"),h(Be,"href","https://github.com/openai/CLIP"),h(Be,"rel","nofollow"),h(oo,"id","transformers.CLIPConfig"),h(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oo,"href","#transformers.CLIPConfig"),h(he,"class","relative group"),h(Vr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(Sr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Jn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Jn,"rel","nofollow"),h(Wr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Br,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Rr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ro,"id","transformers.CLIPTextConfig"),h(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ro,"href","#transformers.CLIPTextConfig"),h(it,"class","relative group"),h(Ur,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(es,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(es,"rel","nofollow"),h(Kr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Hr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(io,"id","transformers.CLIPVisionConfig"),h(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(io,"href","#transformers.CLIPVisionConfig"),h(ct,"class","relative group"),h(Gr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(ns,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(ns,"rel","nofollow"),h(Jr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Xr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(co,"id","transformers.CLIPTokenizer"),h(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(co,"href","#transformers.CLIPTokenizer"),h(ft,"class","relative group"),h(Yr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fo,"id","transformers.CLIPTokenizerFast"),h(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fo,"href","#transformers.CLIPTokenizerFast"),h(ht,"class","relative group"),h(ea,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(go,"id","transformers.CLIPImageProcessor"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.CLIPImageProcessor"),h(gt,"class","relative group"),h(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_o,"id","transformers.CLIPImageProcessor"),h(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_o,"href","#transformers.CLIPImageProcessor"),h(ut,"class","relative group"),h(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yo,"id","transformers.CLIPProcessor"),h(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yo,"href","#transformers.CLIPProcessor"),h(_t,"class","relative group"),h(oa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(na,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor"),h(sa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),h(ra,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),h(aa,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),h(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ia,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),h(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"id","transformers.CLIPModel"),h(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lo,"href","#transformers.CLIPModel"),h(vt,"class","relative group"),h(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(As,"rel","nofollow"),h(la,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(da,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ca,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Eo,"id","transformers.CLIPTextModel"),h(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Eo,"href","#transformers.CLIPTextModel"),h($t,"class","relative group"),h(pa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Do,"id","transformers.CLIPVisionModel"),h(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Do,"href","#transformers.CLIPVisionModel"),h(Tt,"class","relative group"),h(ma,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Oo,"id","transformers.TFCLIPModel"),h(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oo,"href","#transformers.TFCLIPModel"),h(wt,"class","relative group"),h(fa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Qs,"rel","nofollow"),h(ha,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ga,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ua,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ho,"id","transformers.TFCLIPTextModel"),h(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ho,"href","#transformers.TFCLIPTextModel"),h(jt,"class","relative group"),h(_a,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xo,"id","transformers.TFCLIPVisionModel"),h(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xo,"href","#transformers.TFCLIPVisionModel"),h(qt,"class","relative group"),h(va,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),h(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zo,"id","transformers.FlaxCLIPModel"),h(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zo,"href","#transformers.FlaxCLIPModel"),h(At,"class","relative group"),h(Pa,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(mr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(mr,"rel","nofollow"),h(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(fr,"rel","nofollow"),h(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(hr,"rel","nofollow"),h(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(gr,"rel","nofollow"),h(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(ur,"rel","nofollow"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(an,"id","transformers.FlaxCLIPTextModel"),h(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(an,"href","#transformers.FlaxCLIPTextModel"),h(Vt,"class","relative group"),h(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(cn,"id","transformers.FlaxCLIPVisionModel"),h(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(cn,"href","#transformers.FlaxCLIPVisionModel"),h(Bt,"class","relative group"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),v(t,P,u),v(t,g,u),e(g,p),e(p,_),$(n,_,null),e(g,c),e(g,x),e(x,Mn),v(t,Ht,u),v(t,H,u),e(H,de),e(de,Ne),$(M,Ne,null),e(H,jn),e(H,ze),e(ze,En),v(t,Gt,u),v(t,Z,u),e(Z,Fn),e(Z,Me),e(Me,Je),e(Z,qn),v(t,Jt,u),v(t,ce,u),e(ce,Dn),v(t,Xt,u),v(t,pe,u),e(pe,Xe),e(Xe,Nn),v(t,Ye,u),v(t,F,u),e(F,W),e(W,Qe),$(ae,Qe,null),e(F,An),e(F,Ze),e(Ze,et),v(t,Yt,u),v(t,Ae,u),e(Ae,me),v(t,Qt,u),v(t,ee,u),e(ee,On),e(ee,Oe),e(Oe,tt),e(ee,Vn),v(t,Zt,u),v(t,z,u),e(z,Sn),e(z,fe),e(fe,Wn),e(z,eo),e(z,G),e(G,Bn),e(z,je),e(z,Ve),e(Ve,Rn),e(z,k),e(z,j),e(j,Er),e(z,to),e(z,ot),e(ot,Fr),e(z,R),e(z,nt),e(nt,qr),e(z,Dr),v(t,Un,u),$(Se,t,u),v(t,Ee,u),v(t,U,u),e(U,Nr),e(U,We),e(We,st),e(U,Ar),e(U,Be),e(Be,Kn),e(U,Or),v(t,rt,u),v(t,he,u),e(he,oo),e(oo,Oa),$(Hn,Oa,null),e(he,lc),e(he,Va),e(Va,dc),v(t,El,u),v(t,J,u),$(Gn,J,null),e(J,cc),e(J,Re),e(Re,Vr),e(Vr,pc),e(Re,mc),e(Re,Sr),e(Sr,fc),e(Re,hc),e(Re,Jn),e(Jn,gc),e(Re,uc),e(J,_c),e(J,at),e(at,vc),e(at,Wr),e(Wr,Pc),e(at,bc),e(at,Br),e(Br,Ic),e(at,$c),e(J,yc),$(no,J,null),e(J,Cc),e(J,so),$(Xn,so,null),e(so,Tc),e(so,Yn),e(Yn,Lc),e(Yn,Rr),e(Rr,xc),e(Yn,wc),v(t,Fl,u),v(t,it,u),e(it,ro),e(ro,Sa),$(Qn,Sa,null),e(it,kc),e(it,Wa),e(Wa,zc),v(t,ql,u),v(t,ie,u),$(Zn,ie,null),e(ie,Mc),e(ie,lt),e(lt,jc),e(lt,Ur),e(Ur,Ec),e(lt,Fc),e(lt,es),e(es,qc),e(lt,Dc),e(ie,Nc),e(ie,dt),e(dt,Ac),e(dt,Kr),e(Kr,Oc),e(dt,Vc),e(dt,Hr),e(Hr,Sc),e(dt,Wc),e(ie,Bc),$(ao,ie,null),v(t,Dl,u),v(t,ct,u),e(ct,io),e(io,Ba),$(ts,Ba,null),e(ct,Rc),e(ct,Ra),e(Ra,Uc),v(t,Nl,u),v(t,le,u),$(os,le,null),e(le,Kc),e(le,pt),e(pt,Hc),e(pt,Gr),e(Gr,Gc),e(pt,Jc),e(pt,ns),e(ns,Xc),e(pt,Yc),e(le,Qc),e(le,mt),e(mt,Zc),e(mt,Jr),e(Jr,ep),e(mt,tp),e(mt,Xr),e(Xr,op),e(mt,np),e(le,sp),$(lo,le,null),v(t,Al,u),v(t,ft,u),e(ft,co),e(co,Ua),$(ss,Ua,null),e(ft,rp),e(ft,Ka),e(Ka,ap),v(t,Ol,u),v(t,D,u),$(rs,D,null),e(D,ip),e(D,Ha),e(Ha,lp),e(D,dp),e(D,as),e(as,cp),e(as,Yr),e(Yr,pp),e(as,mp),e(D,fp),e(D,ge),$(is,ge,null),e(ge,hp),e(ge,Ga),e(Ga,gp),e(ge,up),e(ge,Ja),e(Ja,Qr),e(Qr,_p),e(Qr,Xa),e(Xa,vp),e(ge,Pp),e(ge,Ya),e(Ya,bp),e(D,Ip),e(D,po),$(ls,po,null),e(po,$p),e(po,ds),e(ds,yp),e(ds,Qa),e(Qa,Cp),e(ds,Tp),e(D,Lp),e(D,mo),$(cs,mo,null),e(mo,xp),e(mo,Za),e(Za,wp),e(D,kp),e(D,Zr),$(ps,Zr,null),v(t,Vl,u),v(t,ht,u),e(ht,fo),e(fo,ei),$(ms,ei,null),e(ht,zp),e(ht,ti),e(ti,Mp),v(t,Sl,u),v(t,X,u),$(fs,X,null),e(X,jp),e(X,hs),e(hs,Ep),e(hs,oi),e(oi,Fp),e(hs,qp),e(X,Dp),e(X,gs),e(gs,Np),e(gs,ea),e(ea,Ap),e(gs,Op),e(X,Vp),e(X,ue),$(us,ue,null),e(ue,Sp),e(ue,ni),e(ni,Wp),e(ue,Bp),e(ue,si),e(si,ta),e(ta,Rp),e(ta,ri),e(ri,Up),e(ue,Kp),e(ue,ai),e(ai,Hp),e(X,Gp),e(X,ho),$(_s,ho,null),e(ho,Jp),e(ho,ii),e(ii,Xp),v(t,Wl,u),v(t,gt,u),e(gt,go),e(go,li),$(vs,li,null),e(gt,Yp),e(gt,di),e(di,Qp),v(t,Bl,u),v(t,Fe,u),$(Ps,Fe,null),e(Fe,Zp),e(Fe,ci),e(ci,em),e(Fe,tm),e(Fe,uo),$(bs,uo,null),e(uo,om),e(uo,pi),e(pi,nm),v(t,Rl,u),v(t,ut,u),e(ut,_o),e(_o,mi),$(Is,mi,null),e(ut,sm),e(ut,fi),e(fi,rm),v(t,Ul,u),v(t,N,u),$($s,N,null),e(N,am),e(N,hi),e(hi,im),e(N,lm),e(N,vo),$(ys,vo,null),e(vo,dm),e(vo,Cs),e(Cs,cm),e(Cs,gi),e(gi,pm),e(Cs,mm),e(N,fm),e(N,Po),$(Ts,Po,null),e(Po,hm),e(Po,ui),e(ui,gm),e(N,um),e(N,bo),$(Ls,bo,null),e(bo,_m),e(bo,_i),e(_i,vm),e(N,Pm),e(N,Io),$(xs,Io,null),e(Io,bm),e(Io,vi),e(vi,Im),e(N,$m),e(N,$o),$(ws,$o,null),e($o,ym),e($o,Pi),e(Pi,Cm),v(t,Kl,u),v(t,_t,u),e(_t,yo),e(yo,bi),$(ks,bi,null),e(_t,Tm),e(_t,Ii),e(Ii,Lm),v(t,Hl,u),v(t,Y,u),$(zs,Y,null),e(Y,xm),e(Y,$i),e($i,wm),e(Y,km),e(Y,te),e(te,oa),e(oa,zm),e(te,Mm),e(te,na),e(na,jm),e(te,Em),e(te,sa),e(sa,Fm),e(te,qm),e(te,yi),e(yi,Dm),e(te,Nm),e(te,ra),e(ra,Am),e(te,Om),e(Y,Vm),e(Y,Co),$(Ms,Co,null),e(Co,Sm),e(Co,js),e(js,Wm),e(js,aa),e(aa,Bm),e(js,Rm),e(Y,Um),e(Y,To),$(Es,To,null),e(To,Km),e(To,Fs),e(Fs,Hm),e(Fs,ia),e(ia,Gm),e(Fs,Jm),v(t,Gl,u),v(t,vt,u),e(vt,Lo),e(Lo,Ci),$(qs,Ci,null),e(vt,Xm),e(vt,Ti),e(Ti,Ym),v(t,Jl,u),v(t,Q,u),$(Ds,Q,null),e(Q,Qm),e(Q,Ns),e(Ns,Zm),e(Ns,As),e(As,ef),e(Ns,tf),e(Q,of),e(Q,_e),$(Os,_e,null),e(_e,nf),e(_e,Pt),e(Pt,sf),e(Pt,la),e(la,rf),e(Pt,af),e(Pt,Li),e(Li,lf),e(Pt,df),e(_e,cf),$(xo,_e,null),e(_e,pf),$(wo,_e,null),e(Q,mf),e(Q,ve),$(Vs,ve,null),e(ve,ff),e(ve,bt),e(bt,hf),e(bt,da),e(da,gf),e(bt,uf),e(bt,xi),e(xi,_f),e(bt,vf),e(ve,Pf),$(ko,ve,null),e(ve,bf),$(zo,ve,null),e(Q,If),e(Q,Pe),$(Ss,Pe,null),e(Pe,$f),e(Pe,It),e(It,yf),e(It,ca),e(ca,Cf),e(It,Tf),e(It,wi),e(wi,Lf),e(It,xf),e(Pe,wf),$(Mo,Pe,null),e(Pe,kf),$(jo,Pe,null),v(t,Xl,u),v(t,$t,u),e($t,Eo),e(Eo,ki),$(Ws,ki,null),e($t,zf),e($t,zi),e(zi,Mf),v(t,Yl,u),v(t,yt,u),$(Bs,yt,null),e(yt,jf),e(yt,be),$(Rs,be,null),e(be,Ef),e(be,Ct),e(Ct,Ff),e(Ct,pa),e(pa,qf),e(Ct,Df),e(Ct,Mi),e(Mi,Nf),e(Ct,Af),e(be,Of),$(Fo,be,null),e(be,Vf),$(qo,be,null),v(t,Ql,u),v(t,Tt,u),e(Tt,Do),e(Do,ji),$(Us,ji,null),e(Tt,Sf),e(Tt,Ei),e(Ei,Wf),v(t,Zl,u),v(t,Lt,u),$(Ks,Lt,null),e(Lt,Bf),e(Lt,Ie),$(Hs,Ie,null),e(Ie,Rf),e(Ie,xt),e(xt,Uf),e(xt,ma),e(ma,Kf),e(xt,Hf),e(xt,Fi),e(Fi,Gf),e(xt,Jf),e(Ie,Xf),$(No,Ie,null),e(Ie,Yf),$(Ao,Ie,null),v(t,ed,u),v(t,wt,u),e(wt,Oo),e(Oo,qi),$(Gs,qi,null),e(wt,Qf),e(wt,Di),e(Di,Zf),v(t,td,u),v(t,A,u),$(Js,A,null),e(A,eh),e(A,Xs),e(Xs,th),e(Xs,fa),e(fa,oh),e(Xs,nh),e(A,sh),e(A,Ys),e(Ys,rh),e(Ys,Qs),e(Qs,ah),e(Ys,ih),e(A,lh),$(Vo,A,null),e(A,dh),e(A,$e),$(Zs,$e,null),e($e,ch),e($e,kt),e(kt,ph),e(kt,ha),e(ha,mh),e(kt,fh),e(kt,Ni),e(Ni,hh),e(kt,gh),e($e,uh),$(So,$e,null),e($e,_h),$(Wo,$e,null),e(A,vh),e(A,ye),$(er,ye,null),e(ye,Ph),e(ye,zt),e(zt,bh),e(zt,ga),e(ga,Ih),e(zt,$h),e(zt,Ai),e(Ai,yh),e(zt,Ch),e(ye,Th),$(Bo,ye,null),e(ye,Lh),$(Ro,ye,null),e(A,xh),e(A,Ce),$(tr,Ce,null),e(Ce,wh),e(Ce,Mt),e(Mt,kh),e(Mt,ua),e(ua,zh),e(Mt,Mh),e(Mt,Oi),e(Oi,jh),e(Mt,Eh),e(Ce,Fh),$(Uo,Ce,null),e(Ce,qh),$(Ko,Ce,null),v(t,od,u),v(t,jt,u),e(jt,Ho),e(Ho,Vi),$(or,Vi,null),e(jt,Dh),e(jt,Si),e(Si,Nh),v(t,nd,u),v(t,Et,u),$(nr,Et,null),e(Et,Ah),e(Et,Te),$(sr,Te,null),e(Te,Oh),e(Te,Ft),e(Ft,Vh),e(Ft,_a),e(_a,Sh),e(Ft,Wh),e(Ft,Wi),e(Wi,Bh),e(Ft,Rh),e(Te,Uh),$(Go,Te,null),e(Te,Kh),$(Jo,Te,null),v(t,sd,u),v(t,qt,u),e(qt,Xo),e(Xo,Bi),$(rr,Bi,null),e(qt,Hh),e(qt,Ri),e(Ri,Gh),v(t,rd,u),v(t,Dt,u),$(ar,Dt,null),e(Dt,Jh),e(Dt,Le),$(ir,Le,null),e(Le,Xh),e(Le,Nt),e(Nt,Yh),e(Nt,va),e(va,Qh),e(Nt,Zh),e(Nt,Ui),e(Ui,eg),e(Nt,tg),e(Le,og),$(Yo,Le,null),e(Le,ng),$(Qo,Le,null),v(t,ad,u),v(t,At,u),e(At,Zo),e(Zo,Ki),$(lr,Ki,null),e(At,sg),e(At,Hi),e(Hi,rg),v(t,id,u),v(t,E,u),$(dr,E,null),e(E,ag),e(E,cr),e(cr,ig),e(cr,Pa),e(Pa,lg),e(cr,dg),e(E,cg),e(E,pr),e(pr,pg),e(pr,mr),e(mr,mg),e(pr,fg),e(E,hg),e(E,Gi),e(Gi,gg),e(E,ug),e(E,qe),e(qe,Ji),e(Ji,fr),e(fr,_g),e(qe,vg),e(qe,Xi),e(Xi,hr),e(hr,Pg),e(qe,bg),e(qe,Yi),e(Yi,gr),e(gr,Ig),e(qe,$g),e(qe,Qi),e(Qi,ur),e(ur,yg),e(E,Cg),e(E,xe),$(_r,xe,null),e(xe,Tg),e(xe,Ot),e(Ot,Lg),e(Ot,Zi),e(Zi,xg),e(Ot,wg),e(Ot,el),e(el,kg),e(Ot,zg),e(xe,Mg),$(en,xe,null),e(xe,jg),$(tn,xe,null),e(E,Eg),e(E,on),$(vr,on,null),e(on,Fg),$(nn,on,null),e(E,qg),e(E,sn),$(Pr,sn,null),e(sn,Dg),$(rn,sn,null),v(t,ld,u),v(t,Vt,u),e(Vt,an),e(an,tl),$(br,tl,null),e(Vt,Ng),e(Vt,ol),e(ol,Ag),v(t,dd,u),v(t,St,u),$(Ir,St,null),e(St,Og),e(St,we),$($r,we,null),e(we,Vg),e(we,Wt),e(Wt,Sg),e(Wt,nl),e(nl,Wg),e(Wt,Bg),e(Wt,sl),e(sl,Rg),e(Wt,Ug),e(we,Kg),$(ln,we,null),e(we,Hg),$(dn,we,null),v(t,cd,u),v(t,Bt,u),e(Bt,cn),e(cn,rl),$(yr,rl,null),e(Bt,Gg),e(Bt,al),e(al,Jg),v(t,pd,u),v(t,Rt,u),$(Cr,Rt,null),e(Rt,Xg),e(Rt,ke),$(Tr,ke,null),e(ke,Yg),e(ke,Ut),e(Ut,Qg),e(Ut,il),e(il,Zg),e(Ut,eu),e(Ut,ll),e(ll,tu),e(Ut,ou),e(ke,nu),$(pn,ke,null),e(ke,su),$(mn,ke,null),md=!0},p(t,[u]){const Lr={};u&2&&(Lr.$$scope={dirty:u,ctx:t}),no.$set(Lr);const dl={};u&2&&(dl.$$scope={dirty:u,ctx:t}),ao.$set(dl);const cl={};u&2&&(cl.$$scope={dirty:u,ctx:t}),lo.$set(cl);const pl={};u&2&&(pl.$$scope={dirty:u,ctx:t}),xo.$set(pl);const xr={};u&2&&(xr.$$scope={dirty:u,ctx:t}),wo.$set(xr);const ml={};u&2&&(ml.$$scope={dirty:u,ctx:t}),ko.$set(ml);const fl={};u&2&&(fl.$$scope={dirty:u,ctx:t}),zo.$set(fl);const hl={};u&2&&(hl.$$scope={dirty:u,ctx:t}),Mo.$set(hl);const wr={};u&2&&(wr.$$scope={dirty:u,ctx:t}),jo.$set(wr);const gl={};u&2&&(gl.$$scope={dirty:u,ctx:t}),Fo.$set(gl);const ul={};u&2&&(ul.$$scope={dirty:u,ctx:t}),qo.$set(ul);const _l={};u&2&&(_l.$$scope={dirty:u,ctx:t}),No.$set(_l);const vl={};u&2&&(vl.$$scope={dirty:u,ctx:t}),Ao.$set(vl);const kr={};u&2&&(kr.$$scope={dirty:u,ctx:t}),Vo.$set(kr);const Pl={};u&2&&(Pl.$$scope={dirty:u,ctx:t}),So.$set(Pl);const bl={};u&2&&(bl.$$scope={dirty:u,ctx:t}),Wo.$set(bl);const Il={};u&2&&(Il.$$scope={dirty:u,ctx:t}),Bo.$set(Il);const $l={};u&2&&($l.$$scope={dirty:u,ctx:t}),Ro.$set($l);const zr={};u&2&&(zr.$$scope={dirty:u,ctx:t}),Uo.$set(zr);const yl={};u&2&&(yl.$$scope={dirty:u,ctx:t}),Ko.$set(yl);const B={};u&2&&(B.$$scope={dirty:u,ctx:t}),Go.$set(B);const Cl={};u&2&&(Cl.$$scope={dirty:u,ctx:t}),Jo.$set(Cl);const Tl={};u&2&&(Tl.$$scope={dirty:u,ctx:t}),Yo.$set(Tl);const Ll={};u&2&&(Ll.$$scope={dirty:u,ctx:t}),Qo.$set(Ll);const xl={};u&2&&(xl.$$scope={dirty:u,ctx:t}),en.$set(xl);const wl={};u&2&&(wl.$$scope={dirty:u,ctx:t}),tn.$set(wl);const kl={};u&2&&(kl.$$scope={dirty:u,ctx:t}),nn.$set(kl);const Kt={};u&2&&(Kt.$$scope={dirty:u,ctx:t}),rn.$set(Kt);const zl={};u&2&&(zl.$$scope={dirty:u,ctx:t}),ln.$set(zl);const Ml={};u&2&&(Ml.$$scope={dirty:u,ctx:t}),dn.$set(Ml);const Mr={};u&2&&(Mr.$$scope={dirty:u,ctx:t}),pn.$set(Mr);const jl={};u&2&&(jl.$$scope={dirty:u,ctx:t}),mn.$set(jl)},i(t){md||(y(n.$$.fragment,t),y(M.$$.fragment,t),y(ae.$$.fragment,t),y(Se.$$.fragment,t),y(Hn.$$.fragment,t),y(Gn.$$.fragment,t),y(no.$$.fragment,t),y(Xn.$$.fragment,t),y(Qn.$$.fragment,t),y(Zn.$$.fragment,t),y(ao.$$.fragment,t),y(ts.$$.fragment,t),y(os.$$.fragment,t),y(lo.$$.fragment,t),y(ss.$$.fragment,t),y(rs.$$.fragment,t),y(is.$$.fragment,t),y(ls.$$.fragment,t),y(cs.$$.fragment,t),y(ps.$$.fragment,t),y(ms.$$.fragment,t),y(fs.$$.fragment,t),y(us.$$.fragment,t),y(_s.$$.fragment,t),y(vs.$$.fragment,t),y(Ps.$$.fragment,t),y(bs.$$.fragment,t),y(Is.$$.fragment,t),y($s.$$.fragment,t),y(ys.$$.fragment,t),y(Ts.$$.fragment,t),y(Ls.$$.fragment,t),y(xs.$$.fragment,t),y(ws.$$.fragment,t),y(ks.$$.fragment,t),y(zs.$$.fragment,t),y(Ms.$$.fragment,t),y(Es.$$.fragment,t),y(qs.$$.fragment,t),y(Ds.$$.fragment,t),y(Os.$$.fragment,t),y(xo.$$.fragment,t),y(wo.$$.fragment,t),y(Vs.$$.fragment,t),y(ko.$$.fragment,t),y(zo.$$.fragment,t),y(Ss.$$.fragment,t),y(Mo.$$.fragment,t),y(jo.$$.fragment,t),y(Ws.$$.fragment,t),y(Bs.$$.fragment,t),y(Rs.$$.fragment,t),y(Fo.$$.fragment,t),y(qo.$$.fragment,t),y(Us.$$.fragment,t),y(Ks.$$.fragment,t),y(Hs.$$.fragment,t),y(No.$$.fragment,t),y(Ao.$$.fragment,t),y(Gs.$$.fragment,t),y(Js.$$.fragment,t),y(Vo.$$.fragment,t),y(Zs.$$.fragment,t),y(So.$$.fragment,t),y(Wo.$$.fragment,t),y(er.$$.fragment,t),y(Bo.$$.fragment,t),y(Ro.$$.fragment,t),y(tr.$$.fragment,t),y(Uo.$$.fragment,t),y(Ko.$$.fragment,t),y(or.$$.fragment,t),y(nr.$$.fragment,t),y(sr.$$.fragment,t),y(Go.$$.fragment,t),y(Jo.$$.fragment,t),y(rr.$$.fragment,t),y(ar.$$.fragment,t),y(ir.$$.fragment,t),y(Yo.$$.fragment,t),y(Qo.$$.fragment,t),y(lr.$$.fragment,t),y(dr.$$.fragment,t),y(_r.$$.fragment,t),y(en.$$.fragment,t),y(tn.$$.fragment,t),y(vr.$$.fragment,t),y(nn.$$.fragment,t),y(Pr.$$.fragment,t),y(rn.$$.fragment,t),y(br.$$.fragment,t),y(Ir.$$.fragment,t),y($r.$$.fragment,t),y(ln.$$.fragment,t),y(dn.$$.fragment,t),y(yr.$$.fragment,t),y(Cr.$$.fragment,t),y(Tr.$$.fragment,t),y(pn.$$.fragment,t),y(mn.$$.fragment,t),md=!0)},o(t){C(n.$$.fragment,t),C(M.$$.fragment,t),C(ae.$$.fragment,t),C(Se.$$.fragment,t),C(Hn.$$.fragment,t),C(Gn.$$.fragment,t),C(no.$$.fragment,t),C(Xn.$$.fragment,t),C(Qn.$$.fragment,t),C(Zn.$$.fragment,t),C(ao.$$.fragment,t),C(ts.$$.fragment,t),C(os.$$.fragment,t),C(lo.$$.fragment,t),C(ss.$$.fragment,t),C(rs.$$.fragment,t),C(is.$$.fragment,t),C(ls.$$.fragment,t),C(cs.$$.fragment,t),C(ps.$$.fragment,t),C(ms.$$.fragment,t),C(fs.$$.fragment,t),C(us.$$.fragment,t),C(_s.$$.fragment,t),C(vs.$$.fragment,t),C(Ps.$$.fragment,t),C(bs.$$.fragment,t),C(Is.$$.fragment,t),C($s.$$.fragment,t),C(ys.$$.fragment,t),C(Ts.$$.fragment,t),C(Ls.$$.fragment,t),C(xs.$$.fragment,t),C(ws.$$.fragment,t),C(ks.$$.fragment,t),C(zs.$$.fragment,t),C(Ms.$$.fragment,t),C(Es.$$.fragment,t),C(qs.$$.fragment,t),C(Ds.$$.fragment,t),C(Os.$$.fragment,t),C(xo.$$.fragment,t),C(wo.$$.fragment,t),C(Vs.$$.fragment,t),C(ko.$$.fragment,t),C(zo.$$.fragment,t),C(Ss.$$.fragment,t),C(Mo.$$.fragment,t),C(jo.$$.fragment,t),C(Ws.$$.fragment,t),C(Bs.$$.fragment,t),C(Rs.$$.fragment,t),C(Fo.$$.fragment,t),C(qo.$$.fragment,t),C(Us.$$.fragment,t),C(Ks.$$.fragment,t),C(Hs.$$.fragment,t),C(No.$$.fragment,t),C(Ao.$$.fragment,t),C(Gs.$$.fragment,t),C(Js.$$.fragment,t),C(Vo.$$.fragment,t),C(Zs.$$.fragment,t),C(So.$$.fragment,t),C(Wo.$$.fragment,t),C(er.$$.fragment,t),C(Bo.$$.fragment,t),C(Ro.$$.fragment,t),C(tr.$$.fragment,t),C(Uo.$$.fragment,t),C(Ko.$$.fragment,t),C(or.$$.fragment,t),C(nr.$$.fragment,t),C(sr.$$.fragment,t),C(Go.$$.fragment,t),C(Jo.$$.fragment,t),C(rr.$$.fragment,t),C(ar.$$.fragment,t),C(ir.$$.fragment,t),C(Yo.$$.fragment,t),C(Qo.$$.fragment,t),C(lr.$$.fragment,t),C(dr.$$.fragment,t),C(_r.$$.fragment,t),C(en.$$.fragment,t),C(tn.$$.fragment,t),C(vr.$$.fragment,t),C(nn.$$.fragment,t),C(Pr.$$.fragment,t),C(rn.$$.fragment,t),C(br.$$.fragment,t),C(Ir.$$.fragment,t),C($r.$$.fragment,t),C(ln.$$.fragment,t),C(dn.$$.fragment,t),C(yr.$$.fragment,t),C(Cr.$$.fragment,t),C(Tr.$$.fragment,t),C(pn.$$.fragment,t),C(mn.$$.fragment,t),md=!1},d(t){o(d),t&&o(P),t&&o(g),T(n),t&&o(Ht),t&&o(H),T(M),t&&o(Gt),t&&o(Z),t&&o(Jt),t&&o(ce),t&&o(Xt),t&&o(pe),t&&o(Ye),t&&o(F),T(ae),t&&o(Yt),t&&o(Ae),t&&o(Qt),t&&o(ee),t&&o(Zt),t&&o(z),t&&o(Un),T(Se,t),t&&o(Ee),t&&o(U),t&&o(rt),t&&o(he),T(Hn),t&&o(El),t&&o(J),T(Gn),T(no),T(Xn),t&&o(Fl),t&&o(it),T(Qn),t&&o(ql),t&&o(ie),T(Zn),T(ao),t&&o(Dl),t&&o(ct),T(ts),t&&o(Nl),t&&o(le),T(os),T(lo),t&&o(Al),t&&o(ft),T(ss),t&&o(Ol),t&&o(D),T(rs),T(is),T(ls),T(cs),T(ps),t&&o(Vl),t&&o(ht),T(ms),t&&o(Sl),t&&o(X),T(fs),T(us),T(_s),t&&o(Wl),t&&o(gt),T(vs),t&&o(Bl),t&&o(Fe),T(Ps),T(bs),t&&o(Rl),t&&o(ut),T(Is),t&&o(Ul),t&&o(N),T($s),T(ys),T(Ts),T(Ls),T(xs),T(ws),t&&o(Kl),t&&o(_t),T(ks),t&&o(Hl),t&&o(Y),T(zs),T(Ms),T(Es),t&&o(Gl),t&&o(vt),T(qs),t&&o(Jl),t&&o(Q),T(Ds),T(Os),T(xo),T(wo),T(Vs),T(ko),T(zo),T(Ss),T(Mo),T(jo),t&&o(Xl),t&&o($t),T(Ws),t&&o(Yl),t&&o(yt),T(Bs),T(Rs),T(Fo),T(qo),t&&o(Ql),t&&o(Tt),T(Us),t&&o(Zl),t&&o(Lt),T(Ks),T(Hs),T(No),T(Ao),t&&o(ed),t&&o(wt),T(Gs),t&&o(td),t&&o(A),T(Js),T(Vo),T(Zs),T(So),T(Wo),T(er),T(Bo),T(Ro),T(tr),T(Uo),T(Ko),t&&o(od),t&&o(jt),T(or),t&&o(nd),t&&o(Et),T(nr),T(sr),T(Go),T(Jo),t&&o(sd),t&&o(qt),T(rr),t&&o(rd),t&&o(Dt),T(ar),T(ir),T(Yo),T(Qo),t&&o(ad),t&&o(At),T(lr),t&&o(id),t&&o(E),T(dr),T(_r),T(en),T(tn),T(vr),T(nn),T(Pr),T(rn),t&&o(ld),t&&o(Vt),T(br),t&&o(dd),t&&o(St),T(Ir),T($r),T(ln),T(dn),t&&o(cd),t&&o(Bt),T(yr),t&&o(pd),t&&o(Rt),T(Cr),T(Tr),T(pn),T(mn)}}}const PP={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPImageProcessor",title:"CLIPImageProcessor"},{local:"transformers.CLIPImageProcessor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function bP(L){return Ov(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xP extends qv{constructor(d){super();Dv(this,d,bP,vP,Nv,{})}}export{xP as default,PP as metadata};
