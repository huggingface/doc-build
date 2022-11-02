import{S as iv,i as lv,s as dv,e as s,k as m,w as b,t as i,M as cv,c as r,d as o,m as f,a,x as $,h as l,b as h,G as e,g as v,y as I,q as y,o as C,B as T,v as pv,L as S}from"../../chunks/vendor-hf-doc-builder.js";import{T as re}from"../../chunks/Tip-hf-doc-builder.js";import{D as x}from"../../chunks/Docstring-hf-doc-builder.js";import{C as A}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as O}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as V}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function mv(L){let d,P,g,p,_;return p=new A({props:{code:`from transformers import CLIPConfig, CLIPModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>config = CLIPConfig.from_text_vision_configs(config_text, config_vision)`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function fv(L){let d,P,g,p,_;return p=new A({props:{code:`from transformers import CLIPTextConfig, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function hv(L){let d,P,g,p,_;return p=new A({props:{code:`from transformers import CLIPVisionConfig, CLIPVisionModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function gv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function uv(L){let d,P,g,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function _v(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function vv(L){let d,P,g,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Pv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function bv(L){let d,P,g,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function $v(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Iv(L){let d,P,g,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function yv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Cv(L){let d,P,g,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Tv(L){let d,P,g,p,_,n,c,w,wn,Ut,H,de,De,M,xn,ze,kn,Kt,Z,zn,Me,Ge,Mn,Ht,ce,jn,Gt,pe,Je,En,Xe,F,W,Ye,ae,Fn,Qe,Ze,Jt,Ne,me,Xt,ee,qn,Oe,et,Dn,Yt,z,Nn,fe,On,Qt,G,An,je,Ae,Vn;return{c(){d=s("p"),P=i("TensorFlow models and layers in "),g=s("code"),p=i("transformers"),_=i(" accept two formats as input:"),n=m(),c=s("ul"),w=s("li"),wn=i("having all inputs as keyword arguments (like PyTorch models), or"),Ut=m(),H=s("li"),de=i("having all inputs as a list, tuple or dict in the first positional argument."),De=m(),M=s("p"),xn=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ze=s("code"),kn=i("model.fit()"),Kt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Z=s("code"),zn=i("model.fit()"),Me=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),Ge=s("code"),Mn=i("fit()"),Ht=i(" and "),ce=s("code"),jn=i("predict()"),Gt=i(`, such as when creating your own layers or models with
the Keras `),pe=s("code"),Je=i("Functional"),En=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Xe=m(),F=s("ul"),W=s("li"),Ye=i("a single Tensor with "),ae=s("code"),Fn=i("input_ids"),Qe=i(" only and nothing else: "),Ze=s("code"),Jt=i("model(input_ids)"),Ne=m(),me=s("li"),Xt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s("code"),qn=i("model([input_ids, attention_mask])"),Oe=i(" or "),et=s("code"),Dn=i("model([input_ids, attention_mask, token_type_ids])"),Yt=m(),z=s("li"),Nn=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),fe=s("code"),On=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qt=m(),G=s("p"),An=i(`Note that when creating models and layers with
`),je=s("a"),Ae=i("subclassing"),Vn=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var j=a(d);P=l(j,"TensorFlow models and layers in "),g=r(j,"CODE",{});var Lr=a(g);p=l(Lr,"transformers"),Lr.forEach(o),_=l(j," accept two formats as input:"),j.forEach(o),n=f(k),c=r(k,"UL",{});var Zt=a(c);w=r(Zt,"LI",{});var tt=a(w);wn=l(tt,"having all inputs as keyword arguments (like PyTorch models), or"),tt.forEach(o),Ut=f(Zt),H=r(Zt,"LI",{});var wr=a(H);de=l(wr,"having all inputs as a list, tuple or dict in the first positional argument."),wr.forEach(o),Zt.forEach(o),De=f(k),M=r(k,"P",{});var R=a(M);xn=l(R,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ze=r(R,"CODE",{});var ot=a(ze);kn=l(ot,"model.fit()"),ot.forEach(o),Kt=l(R,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Z=r(R,"CODE",{});var xr=a(Z);zn=l(xr,"model.fit()"),xr.forEach(o),Me=l(R,` supports! If, however, you want to use the second
format outside of Keras methods like `),Ge=r(R,"CODE",{});var kr=a(Ge);Mn=l(kr,"fit()"),kr.forEach(o),Ht=l(R," and "),ce=r(R,"CODE",{});var Sn=a(ce);jn=l(Sn,"predict()"),Sn.forEach(o),Gt=l(R,`, such as when creating your own layers or models with
the Keras `),pe=r(R,"CODE",{});var Ve=a(pe);Je=l(Ve,"Functional"),Ve.forEach(o),En=l(R,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),R.forEach(o),Xe=f(k),F=r(k,"UL",{});var Ee=a(F);W=r(Ee,"LI",{});var U=a(W);Ye=l(U,"a single Tensor with "),ae=r(U,"CODE",{});var zr=a(ae);Fn=l(zr,"input_ids"),zr.forEach(o),Qe=l(U," only and nothing else: "),Ze=r(U,"CODE",{});var Se=a(Ze);Jt=l(Se,"model(input_ids)"),Se.forEach(o),U.forEach(o),Ne=f(Ee),me=r(Ee,"LI",{});var nt=a(me);Xt=l(nt,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(nt,"CODE",{});var Mr=a(ee);qn=l(Mr,"model([input_ids, attention_mask])"),Mr.forEach(o),Oe=l(nt," or "),et=r(nt,"CODE",{});var We=a(et);Dn=l(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(o),nt.forEach(o),Yt=f(Ee),z=r(Ee,"LI",{});var Wn=a(z);Nn=l(Wn,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),fe=r(Wn,"CODE",{});var jr=a(fe);On=l(jr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),jr.forEach(o),Wn.forEach(o),Ee.forEach(o),Qt=f(k),G=r(k,"P",{});var st=a(G);An=l(st,`Note that when creating models and layers with
`),je=r(st,"A",{href:!0,rel:!0});var he=a(je);Ae=l(he,"subclassing"),he.forEach(o),Vn=l(st,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),st.forEach(o),this.h()},h(){h(je,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(je,"rel","nofollow")},m(k,j){v(k,d,j),e(d,P),e(d,g),e(g,p),e(d,_),v(k,n,j),v(k,c,j),e(c,w),e(w,wn),e(c,Ut),e(c,H),e(H,de),v(k,De,j),v(k,M,j),e(M,xn),e(M,ze),e(ze,kn),e(M,Kt),e(M,Z),e(Z,zn),e(M,Me),e(M,Ge),e(Ge,Mn),e(M,Ht),e(M,ce),e(ce,jn),e(M,Gt),e(M,pe),e(pe,Je),e(M,En),v(k,Xe,j),v(k,F,j),e(F,W),e(W,Ye),e(W,ae),e(ae,Fn),e(W,Qe),e(W,Ze),e(Ze,Jt),e(F,Ne),e(F,me),e(me,Xt),e(me,ee),e(ee,qn),e(me,Oe),e(me,et),e(et,Dn),e(F,Yt),e(F,z),e(z,Nn),e(z,fe),e(fe,On),v(k,Qt,j),v(k,G,j),e(G,An),e(G,je),e(je,Ae),e(G,Vn)},d(k){k&&o(d),k&&o(n),k&&o(c),k&&o(De),k&&o(M),k&&o(Xe),k&&o(F),k&&o(Qt),k&&o(G)}}}function Lv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function wv(L){let d,P,g,p,_;return p=new A({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function xv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function kv(L){let d,P,g,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function zv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Mv(L){let d,P,g,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function jv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Ev(L){let d,P,g,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Fv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function qv(L){let d,P,g,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Dv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Nv(L){let d,P,g,p,_;return p=new A({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Ov(L){let d,P,g,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Av(L){let d,P,g,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Vv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Sv(L){let d,P,g,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Wv(L){let d,P,g,p,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);p=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,p),e(d,_)},d(n){n&&o(d)}}}function Bv(L){let d,P,g,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Example:"),g=m(),b(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),I(p,n,c),_=!0},p:S,i(n){_||(y(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(p,n)}}}function Rv(L){let d,P,g,p,_,n,c,w,wn,Ut,H,de,De,M,xn,ze,kn,Kt,Z,zn,Me,Ge,Mn,Ht,ce,jn,Gt,pe,Je,En,Xe,F,W,Ye,ae,Fn,Qe,Ze,Jt,Ne,me,Xt,ee,qn,Oe,et,Dn,Yt,z,Nn,fe,On,Qt,G,An,je,Ae,Vn,k,j,Lr,Zt,tt,wr,R,ot,xr,kr,Sn,Ve,Ee,U,zr,Se,nt,Mr,We,Wn,jr,st,he,eo,Ma,Bn,Kd,ja,Hd,$l,J,Rn,Gd,Be,Er,Jd,Xd,Fr,Yd,Qd,Un,Zd,ec,tc,rt,oc,qr,nc,sc,Dr,rc,ac,ic,to,lc,oo,Kn,dc,Hn,cc,Nr,pc,mc,Il,at,no,Ea,Gn,fc,Fa,hc,yl,ie,Jn,gc,it,uc,Or,_c,vc,Xn,Pc,bc,$c,lt,Ic,Ar,yc,Cc,Vr,Tc,Lc,wc,so,Cl,dt,ro,qa,Yn,xc,Da,kc,Tl,le,Qn,zc,ct,Mc,Sr,jc,Ec,Zn,Fc,qc,Dc,pt,Nc,Wr,Oc,Ac,Br,Vc,Sc,Wc,ao,Ll,mt,io,Na,es,Bc,Oa,Rc,wl,q,ts,Uc,Aa,Kc,Hc,os,Gc,Rr,Jc,Xc,Yc,ge,ns,Qc,Va,Zc,ep,Sa,Ur,tp,Wa,op,np,Ba,sp,rp,lo,ss,ap,rs,ip,Ra,lp,dp,cp,co,as,pp,Ua,mp,fp,Kr,is,xl,ft,po,Ka,ls,hp,Ha,gp,kl,X,ds,up,cs,_p,Ga,vp,Pp,bp,ps,$p,Hr,Ip,yp,Cp,ue,ms,Tp,Ja,Lp,wp,Xa,Gr,xp,Ya,kp,zp,Qa,Mp,jp,mo,fs,Ep,Za,Fp,zl,ht,fo,ei,hs,qp,ti,Dp,Ml,D,gs,Np,oi,Op,Ap,ho,us,Vp,_s,Sp,ni,Wp,Bp,Rp,go,vs,Up,si,Kp,Hp,uo,Ps,Gp,ri,Jp,Xp,_o,bs,Yp,ai,Qp,Zp,vo,$s,em,ii,tm,jl,gt,Po,li,Is,om,di,nm,El,Y,ys,sm,ci,rm,am,te,Jr,im,lm,Xr,dm,cm,Yr,pm,mm,pi,fm,hm,Qr,gm,um,_m,bo,Cs,vm,Ts,Pm,Zr,bm,$m,Im,$o,Ls,ym,ws,Cm,ea,Tm,Lm,Fl,ut,Io,mi,xs,wm,fi,xm,ql,Q,ks,km,zs,zm,Ms,Mm,jm,Em,_e,js,Fm,_t,qm,ta,Dm,Nm,hi,Om,Am,Vm,yo,Sm,Co,Wm,ve,Es,Bm,vt,Rm,oa,Um,Km,gi,Hm,Gm,Jm,To,Xm,Lo,Ym,Pe,Fs,Qm,Pt,Zm,na,ef,tf,ui,of,nf,sf,wo,rf,xo,Dl,bt,ko,_i,qs,af,vi,lf,Nl,$t,Ds,df,be,Ns,cf,It,pf,sa,mf,ff,Pi,hf,gf,uf,zo,_f,Mo,Ol,yt,jo,bi,Os,vf,$i,Pf,Al,Ct,As,bf,$e,Vs,$f,Tt,If,ra,yf,Cf,Ii,Tf,Lf,wf,Eo,xf,Fo,Vl,Lt,qo,yi,Ss,kf,Ci,zf,Sl,N,Ws,Mf,Bs,jf,aa,Ef,Ff,qf,Rs,Df,Us,Nf,Of,Af,Do,Vf,Ie,Ks,Sf,wt,Wf,ia,Bf,Rf,Ti,Uf,Kf,Hf,No,Gf,Oo,Jf,ye,Hs,Xf,xt,Yf,la,Qf,Zf,Li,eh,th,oh,Ao,nh,Vo,sh,Ce,Gs,rh,kt,ah,da,ih,lh,wi,dh,ch,ph,So,mh,Wo,Wl,zt,Bo,xi,Js,fh,ki,hh,Bl,Mt,Xs,gh,Te,Ys,uh,jt,_h,ca,vh,Ph,zi,bh,$h,Ih,Ro,yh,Uo,Rl,Et,Ko,Mi,Qs,Ch,ji,Th,Ul,Ft,Zs,Lh,Le,er,wh,qt,xh,pa,kh,zh,Ei,Mh,jh,Eh,Ho,Fh,Go,Kl,Dt,Jo,Fi,tr,qh,qi,Dh,Hl,E,or,Nh,nr,Oh,ma,Ah,Vh,Sh,sr,Wh,rr,Bh,Rh,Uh,Di,Kh,Hh,Fe,Ni,ar,Gh,Jh,Oi,ir,Xh,Yh,Ai,lr,Qh,Zh,Vi,dr,eg,tg,we,cr,og,Nt,ng,Si,sg,rg,Wi,ag,ig,lg,Xo,dg,Yo,cg,Qo,pr,pg,Zo,mg,en,mr,fg,tn,Gl,Ot,on,Bi,fr,hg,Ri,gg,Jl,At,hr,ug,xe,gr,_g,Vt,vg,Ui,Pg,bg,Ki,$g,Ig,yg,nn,Cg,sn,Xl,St,rn,Hi,ur,Tg,Gi,Lg,Yl,Wt,_r,wg,ke,vr,xg,Bt,kg,Ji,zg,Mg,Xi,jg,Eg,Fg,an,qg,ln,Ql;return n=new O({}),M=new O({}),ae=new O({}),Ve=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Bn=new O({}),Rn=new x({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config",val:" = None"},{name:"vision_config",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config",description:`<strong>text_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config"},{anchor:"transformers.CLIPConfig.vision_config",description:`<strong>vision_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L254"}}),to=new V({props:{anchor:"transformers.CLIPConfig.example",$$slots:{default:[mv]},$$scope:{ctx:L}}}),Kn=new x({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L330",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),Gn=new O({}),Jn=new x({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L40"}}),so=new V({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[fv]},$$scope:{ctx:L}}}),Yn=new O({}),Qn=new x({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L148"}}),ao=new V({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[hv]},$$scope:{ctx:L}}}),es=new O({}),ts=new x({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L260"}}),ns=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L346",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ss=new x({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L373",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L401",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),is=new x({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L496"}}),ls=new O({}),ds=new x({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),ms=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fs=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hs=new O({}),gs=new x({props:{name:"class transformers.models.clip.image_processing_clip.CLIPImageProcessor",anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by
<code>do_resize</code> in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 224}</code>):
Size of the image after resizing. The shortest edge of the image is resized to size[&#x201C;shortest_edge&#x201D;], with
the longest edge resized to keep the input aspect ratio. Can be overridden by <code>size</code> in the <code>preprocess</code>
method.`,name:"size"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by <code>resample</code> in the <code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image to the specified <code>crop_size</code>. Can be overridden by <code>do_center_crop</code> in the
<code>preprocess</code> method.`,name:"do_center_crop"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to 224) &#x2014;
Size of the output image after applying <code>center_crop</code>. Can be overridden by <code>crop_size</code> in the <code>preprocess</code>
method.`,name:"crop_size"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by <code>do_rescale</code> in
the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overridden by <code>rescale_factor</code> in the <code>preprocess</code>
method.
do_normalize &#x2014;
Whether to normalize the image. Can be overridden by <code>do_normalize</code> in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.do_convert_rgb",description:`<strong>do_convert_rgb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"do_convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L58"}}),us=new x({props:{name:"center_crop",anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.center_crop",parameters:[{name:"image",val:": ndarray"},{name:"size",val:": typing.Dict[str, int]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.center_crop.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to center crop.`,name:"image"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.center_crop.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>) &#x2014;
Size of the output image in the form of a dictionary with keys <code>height</code> and <code>width</code>.`,name:"size"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.center_crop.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L159"}}),vs=new x({props:{name:"normalize",anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.normalize",parameters:[{name:"image",val:": ndarray"},{name:"mean",val:": typing.Union[float, typing.List[float]]"},{name:"std",val:": typing.Union[float, typing.List[float]]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.normalize.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to normalize.`,name:"image"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.normalize.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>) &#x2014;
Image mean.`,name:"image_mean"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.normalize.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.normalize.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L201"}}),Ps=new x({props:{name:"preprocess",anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": int = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": typing.Optional[transformers.image_utils.ChannelDimension] = <ChannelDimension.FIRST: 'channels_first'>"}],parametersDescription:[{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Size of the image after resizing. Shortest edge of the image is resized to size[&#x201C;shortest_edge&#x201D;], with
the longest edge resized to keep the input aspect ratio.`,name:"size"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the enum <code>PILImageResampling</code>. Only
has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_center_crop</code>) &#x2014;
Whether to center crop the image.`,name:"do_center_crop"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.crop_size</code>) &#x2014;
Size of the center crop. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image.`,name:"do_rescale"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean to use for normalization. Only has an effect if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_mean"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation to use for normalization. Only has an effect if <code>do_normalize</code> is set to
<code>True</code>.`,name:"image_std"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.do_convert_rgb",description:`<strong>do_convert_rgb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_convert_rgb</code>) &#x2014;
Whether to convert the image to RGB.`,name:"do_convert_rgb"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
<li>Unset: defaults to the channel dimension format of the input image.</li>
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L224"}}),bs=new x({props:{name:"rescale",anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.rescale",parameters:[{name:"image",val:": ndarray"},{name:"scale",val:": typing.Union[int, float]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.rescale.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to rescale.`,name:"image"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.rescale.scale",description:`<strong>scale</strong> (<code>int</code> or <code>float</code>) &#x2014;
Scale to apply to the image.`,name:"scale"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.rescale.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L181"}}),$s=new x({props:{name:"resize",anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.resize",parameters:[{name:"image",val:": ndarray"},{name:"size",val:": typing.Dict[str, int]"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.resize.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to resize.`,name:"image"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.resize.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>) &#x2014;
Size of the output image.`,name:"size"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.resize.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use when resiizing the image.`,name:"resample"},{anchor:"transformers.models.clip.image_processing_clip.CLIPImageProcessor.resize.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L131"}}),Is=new O({}),ys=new x({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22"}}),Cs=new x({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),Ls=new x({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),xs=new O({}),ks=new x({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L854"}}),js=new x({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),yo=new re({props:{$$slots:{default:[gv]},$$scope:{ctx:L}}}),Co=new V({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[uv]},$$scope:{ctx:L}}}),Es=new x({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),To=new re({props:{$$slots:{default:[_v]},$$scope:{ctx:L}}}),Lo=new V({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[vv]},$$scope:{ctx:L}}}),Fs=new x({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),wo=new re({props:{$$slots:{default:[Pv]},$$scope:{ctx:L}}}),xo=new V({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[bv]},$$scope:{ctx:L}}}),qs=new O({}),Ds=new x({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L688"}}),Ns=new x({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),zo=new re({props:{$$slots:{default:[$v]},$$scope:{ctx:L}}}),Mo=new V({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[Iv]},$$scope:{ctx:L}}}),Os=new O({}),As=new x({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L801"}}),Vs=new x({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),Eo=new re({props:{$$slots:{default:[yv]},$$scope:{ctx:L}}}),Fo=new V({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[Cv]},$$scope:{ctx:L}}}),Ss=new O({}),Ws=new x({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1229"}}),Do=new re({props:{$$slots:{default:[Tv]},$$scope:{ctx:L}}}),Ks=new x({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),No=new re({props:{$$slots:{default:[Lv]},$$scope:{ctx:L}}}),Oo=new V({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[wv]},$$scope:{ctx:L}}}),Hs=new x({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ao=new re({props:{$$slots:{default:[xv]},$$scope:{ctx:L}}}),Vo=new V({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[kv]},$$scope:{ctx:L}}}),Gs=new x({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
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
`}}),So=new re({props:{$$slots:{default:[zv]},$$scope:{ctx:L}}}),Wo=new V({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[Mv]},$$scope:{ctx:L}}}),Js=new O({}),Xs=new x({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1056"}}),Ys=new x({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ro=new re({props:{$$slots:{default:[jv]},$$scope:{ctx:L}}}),Uo=new V({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[Ev]},$$scope:{ctx:L}}}),Qs=new O({}),Zs=new x({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1131"}}),er=new x({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
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
`}}),Ho=new re({props:{$$slots:{default:[Fv]},$$scope:{ctx:L}}}),Go=new V({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[qv]},$$scope:{ctx:L}}}),tr=new O({}),or=new x({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),cr=new x({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),Xo=new re({props:{$$slots:{default:[Dv]},$$scope:{ctx:L}}}),Yo=new V({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[Nv]},$$scope:{ctx:L}}}),pr=new x({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Zo=new V({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[Ov]},$$scope:{ctx:L}}}),mr=new x({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),tn=new V({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[Av]},$$scope:{ctx:L}}}),fr=new O({}),hr=new x({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),gr=new x({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),nn=new re({props:{$$slots:{default:[Vv]},$$scope:{ctx:L}}}),sn=new V({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[Sv]},$$scope:{ctx:L}}}),ur=new O({}),_r=new x({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),vr=new x({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),an=new re({props:{$$slots:{default:[Wv]},$$scope:{ctx:L}}}),ln=new V({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[Bv]},$$scope:{ctx:L}}}),{c(){d=s("meta"),P=m(),g=s("h1"),p=s("a"),_=s("span"),b(n.$$.fragment),c=m(),w=s("span"),wn=i("CLIP"),Ut=m(),H=s("h2"),de=s("a"),De=s("span"),b(M.$$.fragment),xn=m(),ze=s("span"),kn=i("Overview"),Kt=m(),Z=s("p"),zn=i("The CLIP model was proposed in "),Me=s("a"),Ge=i("Learning Transferable Visual Models From Natural Language Supervision"),Mn=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Ht=m(),ce=s("p"),jn=i("The abstract from the paper is the following:"),Gt=m(),pe=s("p"),Je=s("em"),En=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Xe=m(),F=s("h2"),W=s("a"),Ye=s("span"),b(ae.$$.fragment),Fn=m(),Qe=s("span"),Ze=i("Usage"),Jt=m(),Ne=s("p"),me=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Xt=m(),ee=s("p"),qn=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Oe=s("a"),et=i("CLIPFeatureExtractor"),Dn=i(" can be used to resize (or rescale) and normalize images for the model."),Yt=m(),z=s("p"),Nn=i("The "),fe=s("a"),On=i("CLIPTokenizer"),Qt=i(" is used to encode the text. The "),G=s("a"),An=i("CLIPProcessor"),je=i(` wraps
`),Ae=s("a"),Vn=i("CLIPFeatureExtractor"),k=i(" and "),j=s("a"),Lr=i("CLIPTokenizer"),Zt=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),tt=s("a"),wr=i("CLIPProcessor"),R=i(" and "),ot=s("a"),xr=i("CLIPModel"),kr=i("."),Sn=m(),b(Ve.$$.fragment),Ee=m(),U=s("p"),zr=i("This model was contributed by "),Se=s("a"),nt=i("valhalla"),Mr=i(". The original code can be found "),We=s("a"),Wn=i("here"),jr=i("."),st=m(),he=s("h2"),eo=s("a"),Ma=s("span"),b(Bn.$$.fragment),Kd=m(),ja=s("span"),Hd=i("CLIPConfig"),$l=m(),J=s("div"),b(Rn.$$.fragment),Gd=m(),Be=s("p"),Er=s("a"),Jd=i("CLIPConfig"),Xd=i(" is the configuration class to store the configuration of a "),Fr=s("a"),Yd=i("CLIPModel"),Qd=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Un=s("a"),Zd=i("openai/clip-vit-base-patch32"),ec=i(" architecture."),tc=m(),rt=s("p"),oc=i("Configuration objects inherit from "),qr=s("a"),nc=i("PretrainedConfig"),sc=i(` and can be used to control the model outputs. Read the
documentation from `),Dr=s("a"),rc=i("PretrainedConfig"),ac=i(" for more information."),ic=m(),b(to.$$.fragment),lc=m(),oo=s("div"),b(Kn.$$.fragment),dc=m(),Hn=s("p"),cc=i("Instantiate a "),Nr=s("a"),pc=i("CLIPConfig"),mc=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Il=m(),at=s("h2"),no=s("a"),Ea=s("span"),b(Gn.$$.fragment),fc=m(),Fa=s("span"),hc=i("CLIPTextConfig"),yl=m(),ie=s("div"),b(Jn.$$.fragment),gc=m(),it=s("p"),uc=i("This is the configuration class to store the configuration of a "),Or=s("a"),_c=i("CLIPModel"),vc=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Xn=s("a"),Pc=i("openai/clip-vit-base-patch32"),bc=i(" architecture."),$c=m(),lt=s("p"),Ic=i("Configuration objects inherit from "),Ar=s("a"),yc=i("PretrainedConfig"),Cc=i(` and can be used to control the model outputs. Read the
documentation from `),Vr=s("a"),Tc=i("PretrainedConfig"),Lc=i(" for more information."),wc=m(),b(so.$$.fragment),Cl=m(),dt=s("h2"),ro=s("a"),qa=s("span"),b(Yn.$$.fragment),xc=m(),Da=s("span"),kc=i("CLIPVisionConfig"),Tl=m(),le=s("div"),b(Qn.$$.fragment),zc=m(),ct=s("p"),Mc=i("This is the configuration class to store the configuration of a "),Sr=s("a"),jc=i("CLIPModel"),Ec=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Zn=s("a"),Fc=i("openai/clip-vit-base-patch32"),qc=i(" architecture."),Dc=m(),pt=s("p"),Nc=i("Configuration objects inherit from "),Wr=s("a"),Oc=i("PretrainedConfig"),Ac=i(` and can be used to control the model outputs. Read the
documentation from `),Br=s("a"),Vc=i("PretrainedConfig"),Sc=i(" for more information."),Wc=m(),b(ao.$$.fragment),Ll=m(),mt=s("h2"),io=s("a"),Na=s("span"),b(es.$$.fragment),Bc=m(),Oa=s("span"),Rc=i("CLIPTokenizer"),wl=m(),q=s("div"),b(ts.$$.fragment),Uc=m(),Aa=s("p"),Kc=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Hc=m(),os=s("p"),Gc=i("This tokenizer inherits from "),Rr=s("a"),Jc=i("PreTrainedTokenizer"),Xc=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Yc=m(),ge=s("div"),b(ns.$$.fragment),Qc=m(),Va=s("p"),Zc=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),ep=m(),Sa=s("ul"),Ur=s("li"),tp=i("single sequence: "),Wa=s("code"),op=i("<|startoftext|> X <|endoftext|>"),np=m(),Ba=s("p"),sp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),rp=m(),lo=s("div"),b(ss.$$.fragment),ap=m(),rs=s("p"),ip=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ra=s("code"),lp=i("prepare_for_model"),dp=i(" method."),cp=m(),co=s("div"),b(as.$$.fragment),pp=m(),Ua=s("p"),mp=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),fp=m(),Kr=s("div"),b(is.$$.fragment),xl=m(),ft=s("h2"),po=s("a"),Ka=s("span"),b(ls.$$.fragment),hp=m(),Ha=s("span"),gp=i("CLIPTokenizerFast"),kl=m(),X=s("div"),b(ds.$$.fragment),up=m(),cs=s("p"),_p=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ga=s("em"),vp=i("tokenizers"),Pp=i(` library). Based on byte-level
Byte-Pair-Encoding.`),bp=m(),ps=s("p"),$p=i("This tokenizer inherits from "),Hr=s("a"),Ip=i("PreTrainedTokenizerFast"),yp=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Cp=m(),ue=s("div"),b(ms.$$.fragment),Tp=m(),Ja=s("p"),Lp=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),wp=m(),Xa=s("ul"),Gr=s("li"),xp=i("single sequence: "),Ya=s("code"),kp=i("<|startoftext|> X <|endoftext|>"),zp=m(),Qa=s("p"),Mp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),jp=m(),mo=s("div"),b(fs.$$.fragment),Ep=m(),Za=s("p"),Fp=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),zl=m(),ht=s("h2"),fo=s("a"),ei=s("span"),b(hs.$$.fragment),qp=m(),ti=s("span"),Dp=i("CLIPFeatureExtractor"),Ml=m(),D=s("div"),b(gs.$$.fragment),Np=m(),oi=s("p"),Op=i("Constructs a CLIP image processor."),Ap=m(),ho=s("div"),b(us.$$.fragment),Vp=m(),_s=s("p"),Sp=i(`Center crop an image. If the image is too small to be cropped to the size given, it will be padded (so the
returned result will always be of size `),ni=s("code"),Wp=i("size"),Bp=i(")."),Rp=m(),go=s("div"),b(vs.$$.fragment),Up=m(),si=s("p"),Kp=i("Normalize an image. image = (image - image_mean) / image_std."),Hp=m(),uo=s("div"),b(Ps.$$.fragment),Gp=m(),ri=s("p"),Jp=i("Preprocess an image or batch of images."),Xp=m(),_o=s("div"),b(bs.$$.fragment),Yp=m(),ai=s("p"),Qp=i("Rescale an image by a scale factor. image = image * scale."),Zp=m(),vo=s("div"),b($s.$$.fragment),em=m(),ii=s("p"),tm=i(`Resize an image. The shortest edge of the image is resized to size[\u201Cshortest_edge\u201D], with the longest edge
resized to keep the input aspect ratio.`),jl=m(),gt=s("h2"),Po=s("a"),li=s("span"),b(Is.$$.fragment),om=m(),di=s("span"),nm=i("CLIPProcessor"),El=m(),Y=s("div"),b(ys.$$.fragment),sm=m(),ci=s("p"),rm=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),am=m(),te=s("p"),Jr=s("a"),im=i("CLIPProcessor"),lm=i(" offers all the functionalities of "),Xr=s("a"),dm=i("CLIPFeatureExtractor"),cm=i(" and "),Yr=s("a"),pm=i("CLIPTokenizerFast"),mm=i(`. See the
`),pi=s("code"),fm=i("__call__()"),hm=i(" and "),Qr=s("a"),gm=i("decode()"),um=i(" for more information."),_m=m(),bo=s("div"),b(Cs.$$.fragment),vm=m(),Ts=s("p"),Pm=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Zr=s("a"),bm=i("batch_decode()"),$m=i(`. Please
refer to the docstring of this method for more information.`),Im=m(),$o=s("div"),b(Ls.$$.fragment),ym=m(),ws=s("p"),Cm=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),ea=s("a"),Tm=i("decode()"),Lm=i(`. Please refer to
the docstring of this method for more information.`),Fl=m(),ut=s("h2"),Io=s("a"),mi=s("span"),b(xs.$$.fragment),wm=m(),fi=s("span"),xm=i("CLIPModel"),ql=m(),Q=s("div"),b(ks.$$.fragment),km=m(),zs=s("p"),zm=i("This model is a PyTorch "),Ms=s("a"),Mm=i("torch.nn.Module"),jm=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Em=m(),_e=s("div"),b(js.$$.fragment),Fm=m(),_t=s("p"),qm=i("The "),ta=s("a"),Dm=i("CLIPModel"),Nm=i(" forward method, overrides the "),hi=s("code"),Om=i("__call__"),Am=i(" special method."),Vm=m(),b(yo.$$.fragment),Sm=m(),b(Co.$$.fragment),Wm=m(),ve=s("div"),b(Es.$$.fragment),Bm=m(),vt=s("p"),Rm=i("The "),oa=s("a"),Um=i("CLIPModel"),Km=i(" forward method, overrides the "),gi=s("code"),Hm=i("__call__"),Gm=i(" special method."),Jm=m(),b(To.$$.fragment),Xm=m(),b(Lo.$$.fragment),Ym=m(),Pe=s("div"),b(Fs.$$.fragment),Qm=m(),Pt=s("p"),Zm=i("The "),na=s("a"),ef=i("CLIPModel"),tf=i(" forward method, overrides the "),ui=s("code"),of=i("__call__"),nf=i(" special method."),sf=m(),b(wo.$$.fragment),rf=m(),b(xo.$$.fragment),Dl=m(),bt=s("h2"),ko=s("a"),_i=s("span"),b(qs.$$.fragment),af=m(),vi=s("span"),lf=i("CLIPTextModel"),Nl=m(),$t=s("div"),b(Ds.$$.fragment),df=m(),be=s("div"),b(Ns.$$.fragment),cf=m(),It=s("p"),pf=i("The "),sa=s("a"),mf=i("CLIPTextModel"),ff=i(" forward method, overrides the "),Pi=s("code"),hf=i("__call__"),gf=i(" special method."),uf=m(),b(zo.$$.fragment),_f=m(),b(Mo.$$.fragment),Ol=m(),yt=s("h2"),jo=s("a"),bi=s("span"),b(Os.$$.fragment),vf=m(),$i=s("span"),Pf=i("CLIPVisionModel"),Al=m(),Ct=s("div"),b(As.$$.fragment),bf=m(),$e=s("div"),b(Vs.$$.fragment),$f=m(),Tt=s("p"),If=i("The "),ra=s("a"),yf=i("CLIPVisionModel"),Cf=i(" forward method, overrides the "),Ii=s("code"),Tf=i("__call__"),Lf=i(" special method."),wf=m(),b(Eo.$$.fragment),xf=m(),b(Fo.$$.fragment),Vl=m(),Lt=s("h2"),qo=s("a"),yi=s("span"),b(Ss.$$.fragment),kf=m(),Ci=s("span"),zf=i("TFCLIPModel"),Sl=m(),N=s("div"),b(Ws.$$.fragment),Mf=m(),Bs=s("p"),jf=i("This model inherits from "),aa=s("a"),Ef=i("TFPreTrainedModel"),Ff=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qf=m(),Rs=s("p"),Df=i("This model is also a "),Us=s("a"),Nf=i("tf.keras.Model"),Of=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Af=m(),b(Do.$$.fragment),Vf=m(),Ie=s("div"),b(Ks.$$.fragment),Sf=m(),wt=s("p"),Wf=i("The "),ia=s("a"),Bf=i("TFCLIPModel"),Rf=i(" forward method, overrides the "),Ti=s("code"),Uf=i("__call__"),Kf=i(" special method."),Hf=m(),b(No.$$.fragment),Gf=m(),b(Oo.$$.fragment),Jf=m(),ye=s("div"),b(Hs.$$.fragment),Xf=m(),xt=s("p"),Yf=i("The "),la=s("a"),Qf=i("TFCLIPModel"),Zf=i(" forward method, overrides the "),Li=s("code"),eh=i("__call__"),th=i(" special method."),oh=m(),b(Ao.$$.fragment),nh=m(),b(Vo.$$.fragment),sh=m(),Ce=s("div"),b(Gs.$$.fragment),rh=m(),kt=s("p"),ah=i("The "),da=s("a"),ih=i("TFCLIPModel"),lh=i(" forward method, overrides the "),wi=s("code"),dh=i("__call__"),ch=i(" special method."),ph=m(),b(So.$$.fragment),mh=m(),b(Wo.$$.fragment),Wl=m(),zt=s("h2"),Bo=s("a"),xi=s("span"),b(Js.$$.fragment),fh=m(),ki=s("span"),hh=i("TFCLIPTextModel"),Bl=m(),Mt=s("div"),b(Xs.$$.fragment),gh=m(),Te=s("div"),b(Ys.$$.fragment),uh=m(),jt=s("p"),_h=i("The "),ca=s("a"),vh=i("TFCLIPTextModel"),Ph=i(" forward method, overrides the "),zi=s("code"),bh=i("__call__"),$h=i(" special method."),Ih=m(),b(Ro.$$.fragment),yh=m(),b(Uo.$$.fragment),Rl=m(),Et=s("h2"),Ko=s("a"),Mi=s("span"),b(Qs.$$.fragment),Ch=m(),ji=s("span"),Th=i("TFCLIPVisionModel"),Ul=m(),Ft=s("div"),b(Zs.$$.fragment),Lh=m(),Le=s("div"),b(er.$$.fragment),wh=m(),qt=s("p"),xh=i("The "),pa=s("a"),kh=i("TFCLIPVisionModel"),zh=i(" forward method, overrides the "),Ei=s("code"),Mh=i("__call__"),jh=i(" special method."),Eh=m(),b(Ho.$$.fragment),Fh=m(),b(Go.$$.fragment),Kl=m(),Dt=s("h2"),Jo=s("a"),Fi=s("span"),b(tr.$$.fragment),qh=m(),qi=s("span"),Dh=i("FlaxCLIPModel"),Hl=m(),E=s("div"),b(or.$$.fragment),Nh=m(),nr=s("p"),Oh=i("This model inherits from "),ma=s("a"),Ah=i("FlaxPreTrainedModel"),Vh=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Sh=m(),sr=s("p"),Wh=i("This model is also a Flax Linen "),rr=s("a"),Bh=i("flax.linen.Module"),Rh=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Uh=m(),Di=s("p"),Kh=i("Finally, this model supports inherent JAX features such as:"),Hh=m(),Fe=s("ul"),Ni=s("li"),ar=s("a"),Gh=i("Just-In-Time (JIT) compilation"),Jh=m(),Oi=s("li"),ir=s("a"),Xh=i("Automatic Differentiation"),Yh=m(),Ai=s("li"),lr=s("a"),Qh=i("Vectorization"),Zh=m(),Vi=s("li"),dr=s("a"),eg=i("Parallelization"),tg=m(),we=s("div"),b(cr.$$.fragment),og=m(),Nt=s("p"),ng=i("The "),Si=s("code"),sg=i("FlaxCLIPPreTrainedModel"),rg=i(" forward method, overrides the "),Wi=s("code"),ag=i("__call__"),ig=i(" special method."),lg=m(),b(Xo.$$.fragment),dg=m(),b(Yo.$$.fragment),cg=m(),Qo=s("div"),b(pr.$$.fragment),pg=m(),b(Zo.$$.fragment),mg=m(),en=s("div"),b(mr.$$.fragment),fg=m(),b(tn.$$.fragment),Gl=m(),Ot=s("h2"),on=s("a"),Bi=s("span"),b(fr.$$.fragment),hg=m(),Ri=s("span"),gg=i("FlaxCLIPTextModel"),Jl=m(),At=s("div"),b(hr.$$.fragment),ug=m(),xe=s("div"),b(gr.$$.fragment),_g=m(),Vt=s("p"),vg=i("The "),Ui=s("code"),Pg=i("FlaxCLIPTextPreTrainedModel"),bg=i(" forward method, overrides the "),Ki=s("code"),$g=i("__call__"),Ig=i(" special method."),yg=m(),b(nn.$$.fragment),Cg=m(),b(sn.$$.fragment),Xl=m(),St=s("h2"),rn=s("a"),Hi=s("span"),b(ur.$$.fragment),Tg=m(),Gi=s("span"),Lg=i("FlaxCLIPVisionModel"),Yl=m(),Wt=s("div"),b(_r.$$.fragment),wg=m(),ke=s("div"),b(vr.$$.fragment),xg=m(),Bt=s("p"),kg=i("The "),Ji=s("code"),zg=i("FlaxCLIPVisionPreTrainedModel"),Mg=i(" forward method, overrides the "),Xi=s("code"),jg=i("__call__"),Eg=i(" special method."),Fg=m(),b(an.$$.fragment),qg=m(),b(ln.$$.fragment),this.h()},l(t){const u=cv('[data-svelte="svelte-1phssyn"]',document.head);d=r(u,"META",{name:!0,content:!0}),u.forEach(o),P=f(t),g=r(t,"H1",{class:!0});var Pr=a(g);p=r(Pr,"A",{id:!0,class:!0,href:!0});var Yi=a(p);_=r(Yi,"SPAN",{});var Qi=a(_);$(n.$$.fragment,Qi),Qi.forEach(o),Yi.forEach(o),c=f(Pr),w=r(Pr,"SPAN",{});var Zi=a(w);wn=l(Zi,"CLIP"),Zi.forEach(o),Pr.forEach(o),Ut=f(t),H=r(t,"H2",{class:!0});var br=a(H);de=r(br,"A",{id:!0,class:!0,href:!0});var el=a(de);De=r(el,"SPAN",{});var tl=a(De);$(M.$$.fragment,tl),tl.forEach(o),el.forEach(o),xn=f(br),ze=r(br,"SPAN",{});var ol=a(ze);kn=l(ol,"Overview"),ol.forEach(o),br.forEach(o),Kt=f(t),Z=r(t,"P",{});var $r=a(Z);zn=l($r,"The CLIP model was proposed in "),Me=r($r,"A",{href:!0,rel:!0});var nl=a(Me);Ge=l(nl,"Learning Transferable Visual Models From Natural Language Supervision"),nl.forEach(o),Mn=l($r,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),$r.forEach(o),Ht=f(t),ce=r(t,"P",{});var sl=a(ce);jn=l(sl,"The abstract from the paper is the following:"),sl.forEach(o),Gt=f(t),pe=r(t,"P",{});var rl=a(pe);Je=r(rl,"EM",{});var al=a(Je);En=l(al,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),al.forEach(o),rl.forEach(o),Xe=f(t),F=r(t,"H2",{class:!0});var Ir=a(F);W=r(Ir,"A",{id:!0,class:!0,href:!0});var il=a(W);Ye=r(il,"SPAN",{});var ll=a(Ye);$(ae.$$.fragment,ll),ll.forEach(o),il.forEach(o),Fn=f(Ir),Qe=r(Ir,"SPAN",{});var dl=a(Qe);Ze=l(dl,"Usage"),dl.forEach(o),Ir.forEach(o),Jt=f(t),Ne=r(t,"P",{});var cl=a(Ne);me=l(cl,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),cl.forEach(o),Xt=f(t),ee=r(t,"P",{});var yr=a(ee);qn=l(yr,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Oe=r(yr,"A",{href:!0});var pl=a(Oe);et=l(pl,"CLIPFeatureExtractor"),pl.forEach(o),Dn=l(yr," can be used to resize (or rescale) and normalize images for the model."),yr.forEach(o),Yt=f(t),z=r(t,"P",{});var B=a(z);Nn=l(B,"The "),fe=r(B,"A",{href:!0});var ml=a(fe);On=l(ml,"CLIPTokenizer"),ml.forEach(o),Qt=l(B," is used to encode the text. The "),G=r(B,"A",{href:!0});var fl=a(G);An=l(fl,"CLIPProcessor"),fl.forEach(o),je=l(B,` wraps
`),Ae=r(B,"A",{href:!0});var hl=a(Ae);Vn=l(hl,"CLIPFeatureExtractor"),hl.forEach(o),k=l(B," and "),j=r(B,"A",{href:!0});var gl=a(j);Lr=l(gl,"CLIPTokenizer"),gl.forEach(o),Zt=l(B,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),tt=r(B,"A",{href:!0});var ul=a(tt);wr=l(ul,"CLIPProcessor"),ul.forEach(o),R=l(B," and "),ot=r(B,"A",{href:!0});var _l=a(ot);xr=l(_l,"CLIPModel"),_l.forEach(o),kr=l(B,"."),B.forEach(o),Sn=f(t),$(Ve.$$.fragment,t),Ee=f(t),U=r(t,"P",{});var Rt=a(U);zr=l(Rt,"This model was contributed by "),Se=r(Rt,"A",{href:!0,rel:!0});var vl=a(Se);nt=l(vl,"valhalla"),vl.forEach(o),Mr=l(Rt,". The original code can be found "),We=r(Rt,"A",{href:!0,rel:!0});var Pl=a(We);Wn=l(Pl,"here"),Pl.forEach(o),jr=l(Rt,"."),Rt.forEach(o),st=f(t),he=r(t,"H2",{class:!0});var Cr=a(he);eo=r(Cr,"A",{id:!0,class:!0,href:!0});var bl=a(eo);Ma=r(bl,"SPAN",{});var Og=a(Ma);$(Bn.$$.fragment,Og),Og.forEach(o),bl.forEach(o),Kd=f(Cr),ja=r(Cr,"SPAN",{});var Ag=a(ja);Hd=l(Ag,"CLIPConfig"),Ag.forEach(o),Cr.forEach(o),$l=f(t),J=r(t,"DIV",{class:!0});var Re=a(J);$(Rn.$$.fragment,Re),Gd=f(Re),Be=r(Re,"P",{});var Tr=a(Be);Er=r(Tr,"A",{href:!0});var Vg=a(Er);Jd=l(Vg,"CLIPConfig"),Vg.forEach(o),Xd=l(Tr," is the configuration class to store the configuration of a "),Fr=r(Tr,"A",{href:!0});var Sg=a(Fr);Yd=l(Sg,"CLIPModel"),Sg.forEach(o),Qd=l(Tr,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Un=r(Tr,"A",{href:!0,rel:!0});var Wg=a(Un);Zd=l(Wg,"openai/clip-vit-base-patch32"),Wg.forEach(o),ec=l(Tr," architecture."),Tr.forEach(o),tc=f(Re),rt=r(Re,"P",{});var fa=a(rt);oc=l(fa,"Configuration objects inherit from "),qr=r(fa,"A",{href:!0});var Bg=a(qr);nc=l(Bg,"PretrainedConfig"),Bg.forEach(o),sc=l(fa,` and can be used to control the model outputs. Read the
documentation from `),Dr=r(fa,"A",{href:!0});var Rg=a(Dr);rc=l(Rg,"PretrainedConfig"),Rg.forEach(o),ac=l(fa," for more information."),fa.forEach(o),ic=f(Re),$(to.$$.fragment,Re),lc=f(Re),oo=r(Re,"DIV",{class:!0});var Zl=a(oo);$(Kn.$$.fragment,Zl),dc=f(Zl),Hn=r(Zl,"P",{});var ed=a(Hn);cc=l(ed,"Instantiate a "),Nr=r(ed,"A",{href:!0});var Ug=a(Nr);pc=l(Ug,"CLIPConfig"),Ug.forEach(o),mc=l(ed,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),ed.forEach(o),Zl.forEach(o),Re.forEach(o),Il=f(t),at=r(t,"H2",{class:!0});var td=a(at);no=r(td,"A",{id:!0,class:!0,href:!0});var Kg=a(no);Ea=r(Kg,"SPAN",{});var Hg=a(Ea);$(Gn.$$.fragment,Hg),Hg.forEach(o),Kg.forEach(o),fc=f(td),Fa=r(td,"SPAN",{});var Gg=a(Fa);hc=l(Gg,"CLIPTextConfig"),Gg.forEach(o),td.forEach(o),yl=f(t),ie=r(t,"DIV",{class:!0});var dn=a(ie);$(Jn.$$.fragment,dn),gc=f(dn),it=r(dn,"P",{});var ha=a(it);uc=l(ha,"This is the configuration class to store the configuration of a "),Or=r(ha,"A",{href:!0});var Jg=a(Or);_c=l(Jg,"CLIPModel"),Jg.forEach(o),vc=l(ha,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Xn=r(ha,"A",{href:!0,rel:!0});var Xg=a(Xn);Pc=l(Xg,"openai/clip-vit-base-patch32"),Xg.forEach(o),bc=l(ha," architecture."),ha.forEach(o),$c=f(dn),lt=r(dn,"P",{});var ga=a(lt);Ic=l(ga,"Configuration objects inherit from "),Ar=r(ga,"A",{href:!0});var Yg=a(Ar);yc=l(Yg,"PretrainedConfig"),Yg.forEach(o),Cc=l(ga,` and can be used to control the model outputs. Read the
documentation from `),Vr=r(ga,"A",{href:!0});var Qg=a(Vr);Tc=l(Qg,"PretrainedConfig"),Qg.forEach(o),Lc=l(ga," for more information."),ga.forEach(o),wc=f(dn),$(so.$$.fragment,dn),dn.forEach(o),Cl=f(t),dt=r(t,"H2",{class:!0});var od=a(dt);ro=r(od,"A",{id:!0,class:!0,href:!0});var Zg=a(ro);qa=r(Zg,"SPAN",{});var eu=a(qa);$(Yn.$$.fragment,eu),eu.forEach(o),Zg.forEach(o),xc=f(od),Da=r(od,"SPAN",{});var tu=a(Da);kc=l(tu,"CLIPVisionConfig"),tu.forEach(o),od.forEach(o),Tl=f(t),le=r(t,"DIV",{class:!0});var cn=a(le);$(Qn.$$.fragment,cn),zc=f(cn),ct=r(cn,"P",{});var ua=a(ct);Mc=l(ua,"This is the configuration class to store the configuration of a "),Sr=r(ua,"A",{href:!0});var ou=a(Sr);jc=l(ou,"CLIPModel"),ou.forEach(o),Ec=l(ua,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Zn=r(ua,"A",{href:!0,rel:!0});var nu=a(Zn);Fc=l(nu,"openai/clip-vit-base-patch32"),nu.forEach(o),qc=l(ua," architecture."),ua.forEach(o),Dc=f(cn),pt=r(cn,"P",{});var _a=a(pt);Nc=l(_a,"Configuration objects inherit from "),Wr=r(_a,"A",{href:!0});var su=a(Wr);Oc=l(su,"PretrainedConfig"),su.forEach(o),Ac=l(_a,` and can be used to control the model outputs. Read the
documentation from `),Br=r(_a,"A",{href:!0});var ru=a(Br);Vc=l(ru,"PretrainedConfig"),ru.forEach(o),Sc=l(_a," for more information."),_a.forEach(o),Wc=f(cn),$(ao.$$.fragment,cn),cn.forEach(o),Ll=f(t),mt=r(t,"H2",{class:!0});var nd=a(mt);io=r(nd,"A",{id:!0,class:!0,href:!0});var au=a(io);Na=r(au,"SPAN",{});var iu=a(Na);$(es.$$.fragment,iu),iu.forEach(o),au.forEach(o),Bc=f(nd),Oa=r(nd,"SPAN",{});var lu=a(Oa);Rc=l(lu,"CLIPTokenizer"),lu.forEach(o),nd.forEach(o),wl=f(t),q=r(t,"DIV",{class:!0});var oe=a(q);$(ts.$$.fragment,oe),Uc=f(oe),Aa=r(oe,"P",{});var du=a(Aa);Kc=l(du,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),du.forEach(o),Hc=f(oe),os=r(oe,"P",{});var sd=a(os);Gc=l(sd,"This tokenizer inherits from "),Rr=r(sd,"A",{href:!0});var cu=a(Rr);Jc=l(cu,"PreTrainedTokenizer"),cu.forEach(o),Xc=l(sd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),sd.forEach(o),Yc=f(oe),ge=r(oe,"DIV",{class:!0});var pn=a(ge);$(ns.$$.fragment,pn),Qc=f(pn),Va=r(pn,"P",{});var pu=a(Va);Zc=l(pu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),pu.forEach(o),ep=f(pn),Sa=r(pn,"UL",{});var mu=a(Sa);Ur=r(mu,"LI",{});var Dg=a(Ur);tp=l(Dg,"single sequence: "),Wa=r(Dg,"CODE",{});var fu=a(Wa);op=l(fu,"<|startoftext|> X <|endoftext|>"),fu.forEach(o),Dg.forEach(o),mu.forEach(o),np=f(pn),Ba=r(pn,"P",{});var hu=a(Ba);sp=l(hu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),hu.forEach(o),pn.forEach(o),rp=f(oe),lo=r(oe,"DIV",{class:!0});var rd=a(lo);$(ss.$$.fragment,rd),ap=f(rd),rs=r(rd,"P",{});var ad=a(rs);ip=l(ad,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ra=r(ad,"CODE",{});var gu=a(Ra);lp=l(gu,"prepare_for_model"),gu.forEach(o),dp=l(ad," method."),ad.forEach(o),rd.forEach(o),cp=f(oe),co=r(oe,"DIV",{class:!0});var id=a(co);$(as.$$.fragment,id),pp=f(id),Ua=r(id,"P",{});var uu=a(Ua);mp=l(uu,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),uu.forEach(o),id.forEach(o),fp=f(oe),Kr=r(oe,"DIV",{class:!0});var _u=a(Kr);$(is.$$.fragment,_u),_u.forEach(o),oe.forEach(o),xl=f(t),ft=r(t,"H2",{class:!0});var ld=a(ft);po=r(ld,"A",{id:!0,class:!0,href:!0});var vu=a(po);Ka=r(vu,"SPAN",{});var Pu=a(Ka);$(ls.$$.fragment,Pu),Pu.forEach(o),vu.forEach(o),hp=f(ld),Ha=r(ld,"SPAN",{});var bu=a(Ha);gp=l(bu,"CLIPTokenizerFast"),bu.forEach(o),ld.forEach(o),kl=f(t),X=r(t,"DIV",{class:!0});var Ue=a(X);$(ds.$$.fragment,Ue),up=f(Ue),cs=r(Ue,"P",{});var dd=a(cs);_p=l(dd,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ga=r(dd,"EM",{});var $u=a(Ga);vp=l($u,"tokenizers"),$u.forEach(o),Pp=l(dd,` library). Based on byte-level
Byte-Pair-Encoding.`),dd.forEach(o),bp=f(Ue),ps=r(Ue,"P",{});var cd=a(ps);$p=l(cd,"This tokenizer inherits from "),Hr=r(cd,"A",{href:!0});var Iu=a(Hr);Ip=l(Iu,"PreTrainedTokenizerFast"),Iu.forEach(o),yp=l(cd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),cd.forEach(o),Cp=f(Ue),ue=r(Ue,"DIV",{class:!0});var mn=a(ue);$(ms.$$.fragment,mn),Tp=f(mn),Ja=r(mn,"P",{});var yu=a(Ja);Lp=l(yu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),yu.forEach(o),wp=f(mn),Xa=r(mn,"UL",{});var Cu=a(Xa);Gr=r(Cu,"LI",{});var Ng=a(Gr);xp=l(Ng,"single sequence: "),Ya=r(Ng,"CODE",{});var Tu=a(Ya);kp=l(Tu,"<|startoftext|> X <|endoftext|>"),Tu.forEach(o),Ng.forEach(o),Cu.forEach(o),zp=f(mn),Qa=r(mn,"P",{});var Lu=a(Qa);Mp=l(Lu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Lu.forEach(o),mn.forEach(o),jp=f(Ue),mo=r(Ue,"DIV",{class:!0});var pd=a(mo);$(fs.$$.fragment,pd),Ep=f(pd),Za=r(pd,"P",{});var wu=a(Za);Fp=l(wu,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),wu.forEach(o),pd.forEach(o),Ue.forEach(o),zl=f(t),ht=r(t,"H2",{class:!0});var md=a(ht);fo=r(md,"A",{id:!0,class:!0,href:!0});var xu=a(fo);ei=r(xu,"SPAN",{});var ku=a(ei);$(hs.$$.fragment,ku),ku.forEach(o),xu.forEach(o),qp=f(md),ti=r(md,"SPAN",{});var zu=a(ti);Dp=l(zu,"CLIPFeatureExtractor"),zu.forEach(o),md.forEach(o),Ml=f(t),D=r(t,"DIV",{class:!0});var ne=a(D);$(gs.$$.fragment,ne),Np=f(ne),oi=r(ne,"P",{});var Mu=a(oi);Op=l(Mu,"Constructs a CLIP image processor."),Mu.forEach(o),Ap=f(ne),ho=r(ne,"DIV",{class:!0});var fd=a(ho);$(us.$$.fragment,fd),Vp=f(fd),_s=r(fd,"P",{});var hd=a(_s);Sp=l(hd,`Center crop an image. If the image is too small to be cropped to the size given, it will be padded (so the
returned result will always be of size `),ni=r(hd,"CODE",{});var ju=a(ni);Wp=l(ju,"size"),ju.forEach(o),Bp=l(hd,")."),hd.forEach(o),fd.forEach(o),Rp=f(ne),go=r(ne,"DIV",{class:!0});var gd=a(go);$(vs.$$.fragment,gd),Up=f(gd),si=r(gd,"P",{});var Eu=a(si);Kp=l(Eu,"Normalize an image. image = (image - image_mean) / image_std."),Eu.forEach(o),gd.forEach(o),Hp=f(ne),uo=r(ne,"DIV",{class:!0});var ud=a(uo);$(Ps.$$.fragment,ud),Gp=f(ud),ri=r(ud,"P",{});var Fu=a(ri);Jp=l(Fu,"Preprocess an image or batch of images."),Fu.forEach(o),ud.forEach(o),Xp=f(ne),_o=r(ne,"DIV",{class:!0});var _d=a(_o);$(bs.$$.fragment,_d),Yp=f(_d),ai=r(_d,"P",{});var qu=a(ai);Qp=l(qu,"Rescale an image by a scale factor. image = image * scale."),qu.forEach(o),_d.forEach(o),Zp=f(ne),vo=r(ne,"DIV",{class:!0});var vd=a(vo);$($s.$$.fragment,vd),em=f(vd),ii=r(vd,"P",{});var Du=a(ii);tm=l(Du,`Resize an image. The shortest edge of the image is resized to size[\u201Cshortest_edge\u201D], with the longest edge
resized to keep the input aspect ratio.`),Du.forEach(o),vd.forEach(o),ne.forEach(o),jl=f(t),gt=r(t,"H2",{class:!0});var Pd=a(gt);Po=r(Pd,"A",{id:!0,class:!0,href:!0});var Nu=a(Po);li=r(Nu,"SPAN",{});var Ou=a(li);$(Is.$$.fragment,Ou),Ou.forEach(o),Nu.forEach(o),om=f(Pd),di=r(Pd,"SPAN",{});var Au=a(di);nm=l(Au,"CLIPProcessor"),Au.forEach(o),Pd.forEach(o),El=f(t),Y=r(t,"DIV",{class:!0});var Ke=a(Y);$(ys.$$.fragment,Ke),sm=f(Ke),ci=r(Ke,"P",{});var Vu=a(ci);rm=l(Vu,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Vu.forEach(o),am=f(Ke),te=r(Ke,"P",{});var qe=a(te);Jr=r(qe,"A",{href:!0});var Su=a(Jr);im=l(Su,"CLIPProcessor"),Su.forEach(o),lm=l(qe," offers all the functionalities of "),Xr=r(qe,"A",{href:!0});var Wu=a(Xr);dm=l(Wu,"CLIPFeatureExtractor"),Wu.forEach(o),cm=l(qe," and "),Yr=r(qe,"A",{href:!0});var Bu=a(Yr);pm=l(Bu,"CLIPTokenizerFast"),Bu.forEach(o),mm=l(qe,`. See the
`),pi=r(qe,"CODE",{});var Ru=a(pi);fm=l(Ru,"__call__()"),Ru.forEach(o),hm=l(qe," and "),Qr=r(qe,"A",{href:!0});var Uu=a(Qr);gm=l(Uu,"decode()"),Uu.forEach(o),um=l(qe," for more information."),qe.forEach(o),_m=f(Ke),bo=r(Ke,"DIV",{class:!0});var bd=a(bo);$(Cs.$$.fragment,bd),vm=f(bd),Ts=r(bd,"P",{});var $d=a(Ts);Pm=l($d,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Zr=r($d,"A",{href:!0});var Ku=a(Zr);bm=l(Ku,"batch_decode()"),Ku.forEach(o),$m=l($d,`. Please
refer to the docstring of this method for more information.`),$d.forEach(o),bd.forEach(o),Im=f(Ke),$o=r(Ke,"DIV",{class:!0});var Id=a($o);$(Ls.$$.fragment,Id),ym=f(Id),ws=r(Id,"P",{});var yd=a(ws);Cm=l(yd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),ea=r(yd,"A",{href:!0});var Hu=a(ea);Tm=l(Hu,"decode()"),Hu.forEach(o),Lm=l(yd,`. Please refer to
the docstring of this method for more information.`),yd.forEach(o),Id.forEach(o),Ke.forEach(o),Fl=f(t),ut=r(t,"H2",{class:!0});var Cd=a(ut);Io=r(Cd,"A",{id:!0,class:!0,href:!0});var Gu=a(Io);mi=r(Gu,"SPAN",{});var Ju=a(mi);$(xs.$$.fragment,Ju),Ju.forEach(o),Gu.forEach(o),wm=f(Cd),fi=r(Cd,"SPAN",{});var Xu=a(fi);xm=l(Xu,"CLIPModel"),Xu.forEach(o),Cd.forEach(o),ql=f(t),Q=r(t,"DIV",{class:!0});var He=a(Q);$(ks.$$.fragment,He),km=f(He),zs=r(He,"P",{});var Td=a(zs);zm=l(Td,"This model is a PyTorch "),Ms=r(Td,"A",{href:!0,rel:!0});var Yu=a(Ms);Mm=l(Yu,"torch.nn.Module"),Yu.forEach(o),jm=l(Td,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Td.forEach(o),Em=f(He),_e=r(He,"DIV",{class:!0});var fn=a(_e);$(js.$$.fragment,fn),Fm=f(fn),_t=r(fn,"P",{});var va=a(_t);qm=l(va,"The "),ta=r(va,"A",{href:!0});var Qu=a(ta);Dm=l(Qu,"CLIPModel"),Qu.forEach(o),Nm=l(va," forward method, overrides the "),hi=r(va,"CODE",{});var Zu=a(hi);Om=l(Zu,"__call__"),Zu.forEach(o),Am=l(va," special method."),va.forEach(o),Vm=f(fn),$(yo.$$.fragment,fn),Sm=f(fn),$(Co.$$.fragment,fn),fn.forEach(o),Wm=f(He),ve=r(He,"DIV",{class:!0});var hn=a(ve);$(Es.$$.fragment,hn),Bm=f(hn),vt=r(hn,"P",{});var Pa=a(vt);Rm=l(Pa,"The "),oa=r(Pa,"A",{href:!0});var e_=a(oa);Um=l(e_,"CLIPModel"),e_.forEach(o),Km=l(Pa," forward method, overrides the "),gi=r(Pa,"CODE",{});var t_=a(gi);Hm=l(t_,"__call__"),t_.forEach(o),Gm=l(Pa," special method."),Pa.forEach(o),Jm=f(hn),$(To.$$.fragment,hn),Xm=f(hn),$(Lo.$$.fragment,hn),hn.forEach(o),Ym=f(He),Pe=r(He,"DIV",{class:!0});var gn=a(Pe);$(Fs.$$.fragment,gn),Qm=f(gn),Pt=r(gn,"P",{});var ba=a(Pt);Zm=l(ba,"The "),na=r(ba,"A",{href:!0});var o_=a(na);ef=l(o_,"CLIPModel"),o_.forEach(o),tf=l(ba," forward method, overrides the "),ui=r(ba,"CODE",{});var n_=a(ui);of=l(n_,"__call__"),n_.forEach(o),nf=l(ba," special method."),ba.forEach(o),sf=f(gn),$(wo.$$.fragment,gn),rf=f(gn),$(xo.$$.fragment,gn),gn.forEach(o),He.forEach(o),Dl=f(t),bt=r(t,"H2",{class:!0});var Ld=a(bt);ko=r(Ld,"A",{id:!0,class:!0,href:!0});var s_=a(ko);_i=r(s_,"SPAN",{});var r_=a(_i);$(qs.$$.fragment,r_),r_.forEach(o),s_.forEach(o),af=f(Ld),vi=r(Ld,"SPAN",{});var a_=a(vi);lf=l(a_,"CLIPTextModel"),a_.forEach(o),Ld.forEach(o),Nl=f(t),$t=r(t,"DIV",{class:!0});var wd=a($t);$(Ds.$$.fragment,wd),df=f(wd),be=r(wd,"DIV",{class:!0});var un=a(be);$(Ns.$$.fragment,un),cf=f(un),It=r(un,"P",{});var $a=a(It);pf=l($a,"The "),sa=r($a,"A",{href:!0});var i_=a(sa);mf=l(i_,"CLIPTextModel"),i_.forEach(o),ff=l($a," forward method, overrides the "),Pi=r($a,"CODE",{});var l_=a(Pi);hf=l(l_,"__call__"),l_.forEach(o),gf=l($a," special method."),$a.forEach(o),uf=f(un),$(zo.$$.fragment,un),_f=f(un),$(Mo.$$.fragment,un),un.forEach(o),wd.forEach(o),Ol=f(t),yt=r(t,"H2",{class:!0});var xd=a(yt);jo=r(xd,"A",{id:!0,class:!0,href:!0});var d_=a(jo);bi=r(d_,"SPAN",{});var c_=a(bi);$(Os.$$.fragment,c_),c_.forEach(o),d_.forEach(o),vf=f(xd),$i=r(xd,"SPAN",{});var p_=a($i);Pf=l(p_,"CLIPVisionModel"),p_.forEach(o),xd.forEach(o),Al=f(t),Ct=r(t,"DIV",{class:!0});var kd=a(Ct);$(As.$$.fragment,kd),bf=f(kd),$e=r(kd,"DIV",{class:!0});var _n=a($e);$(Vs.$$.fragment,_n),$f=f(_n),Tt=r(_n,"P",{});var Ia=a(Tt);If=l(Ia,"The "),ra=r(Ia,"A",{href:!0});var m_=a(ra);yf=l(m_,"CLIPVisionModel"),m_.forEach(o),Cf=l(Ia," forward method, overrides the "),Ii=r(Ia,"CODE",{});var f_=a(Ii);Tf=l(f_,"__call__"),f_.forEach(o),Lf=l(Ia," special method."),Ia.forEach(o),wf=f(_n),$(Eo.$$.fragment,_n),xf=f(_n),$(Fo.$$.fragment,_n),_n.forEach(o),kd.forEach(o),Vl=f(t),Lt=r(t,"H2",{class:!0});var zd=a(Lt);qo=r(zd,"A",{id:!0,class:!0,href:!0});var h_=a(qo);yi=r(h_,"SPAN",{});var g_=a(yi);$(Ss.$$.fragment,g_),g_.forEach(o),h_.forEach(o),kf=f(zd),Ci=r(zd,"SPAN",{});var u_=a(Ci);zf=l(u_,"TFCLIPModel"),u_.forEach(o),zd.forEach(o),Sl=f(t),N=r(t,"DIV",{class:!0});var se=a(N);$(Ws.$$.fragment,se),Mf=f(se),Bs=r(se,"P",{});var Md=a(Bs);jf=l(Md,"This model inherits from "),aa=r(Md,"A",{href:!0});var __=a(aa);Ef=l(__,"TFPreTrainedModel"),__.forEach(o),Ff=l(Md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Md.forEach(o),qf=f(se),Rs=r(se,"P",{});var jd=a(Rs);Df=l(jd,"This model is also a "),Us=r(jd,"A",{href:!0,rel:!0});var v_=a(Us);Nf=l(v_,"tf.keras.Model"),v_.forEach(o),Of=l(jd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jd.forEach(o),Af=f(se),$(Do.$$.fragment,se),Vf=f(se),Ie=r(se,"DIV",{class:!0});var vn=a(Ie);$(Ks.$$.fragment,vn),Sf=f(vn),wt=r(vn,"P",{});var ya=a(wt);Wf=l(ya,"The "),ia=r(ya,"A",{href:!0});var P_=a(ia);Bf=l(P_,"TFCLIPModel"),P_.forEach(o),Rf=l(ya," forward method, overrides the "),Ti=r(ya,"CODE",{});var b_=a(Ti);Uf=l(b_,"__call__"),b_.forEach(o),Kf=l(ya," special method."),ya.forEach(o),Hf=f(vn),$(No.$$.fragment,vn),Gf=f(vn),$(Oo.$$.fragment,vn),vn.forEach(o),Jf=f(se),ye=r(se,"DIV",{class:!0});var Pn=a(ye);$(Hs.$$.fragment,Pn),Xf=f(Pn),xt=r(Pn,"P",{});var Ca=a(xt);Yf=l(Ca,"The "),la=r(Ca,"A",{href:!0});var $_=a(la);Qf=l($_,"TFCLIPModel"),$_.forEach(o),Zf=l(Ca," forward method, overrides the "),Li=r(Ca,"CODE",{});var I_=a(Li);eh=l(I_,"__call__"),I_.forEach(o),th=l(Ca," special method."),Ca.forEach(o),oh=f(Pn),$(Ao.$$.fragment,Pn),nh=f(Pn),$(Vo.$$.fragment,Pn),Pn.forEach(o),sh=f(se),Ce=r(se,"DIV",{class:!0});var bn=a(Ce);$(Gs.$$.fragment,bn),rh=f(bn),kt=r(bn,"P",{});var Ta=a(kt);ah=l(Ta,"The "),da=r(Ta,"A",{href:!0});var y_=a(da);ih=l(y_,"TFCLIPModel"),y_.forEach(o),lh=l(Ta," forward method, overrides the "),wi=r(Ta,"CODE",{});var C_=a(wi);dh=l(C_,"__call__"),C_.forEach(o),ch=l(Ta," special method."),Ta.forEach(o),ph=f(bn),$(So.$$.fragment,bn),mh=f(bn),$(Wo.$$.fragment,bn),bn.forEach(o),se.forEach(o),Wl=f(t),zt=r(t,"H2",{class:!0});var Ed=a(zt);Bo=r(Ed,"A",{id:!0,class:!0,href:!0});var T_=a(Bo);xi=r(T_,"SPAN",{});var L_=a(xi);$(Js.$$.fragment,L_),L_.forEach(o),T_.forEach(o),fh=f(Ed),ki=r(Ed,"SPAN",{});var w_=a(ki);hh=l(w_,"TFCLIPTextModel"),w_.forEach(o),Ed.forEach(o),Bl=f(t),Mt=r(t,"DIV",{class:!0});var Fd=a(Mt);$(Xs.$$.fragment,Fd),gh=f(Fd),Te=r(Fd,"DIV",{class:!0});var $n=a(Te);$(Ys.$$.fragment,$n),uh=f($n),jt=r($n,"P",{});var La=a(jt);_h=l(La,"The "),ca=r(La,"A",{href:!0});var x_=a(ca);vh=l(x_,"TFCLIPTextModel"),x_.forEach(o),Ph=l(La," forward method, overrides the "),zi=r(La,"CODE",{});var k_=a(zi);bh=l(k_,"__call__"),k_.forEach(o),$h=l(La," special method."),La.forEach(o),Ih=f($n),$(Ro.$$.fragment,$n),yh=f($n),$(Uo.$$.fragment,$n),$n.forEach(o),Fd.forEach(o),Rl=f(t),Et=r(t,"H2",{class:!0});var qd=a(Et);Ko=r(qd,"A",{id:!0,class:!0,href:!0});var z_=a(Ko);Mi=r(z_,"SPAN",{});var M_=a(Mi);$(Qs.$$.fragment,M_),M_.forEach(o),z_.forEach(o),Ch=f(qd),ji=r(qd,"SPAN",{});var j_=a(ji);Th=l(j_,"TFCLIPVisionModel"),j_.forEach(o),qd.forEach(o),Ul=f(t),Ft=r(t,"DIV",{class:!0});var Dd=a(Ft);$(Zs.$$.fragment,Dd),Lh=f(Dd),Le=r(Dd,"DIV",{class:!0});var In=a(Le);$(er.$$.fragment,In),wh=f(In),qt=r(In,"P",{});var wa=a(qt);xh=l(wa,"The "),pa=r(wa,"A",{href:!0});var E_=a(pa);kh=l(E_,"TFCLIPVisionModel"),E_.forEach(o),zh=l(wa," forward method, overrides the "),Ei=r(wa,"CODE",{});var F_=a(Ei);Mh=l(F_,"__call__"),F_.forEach(o),jh=l(wa," special method."),wa.forEach(o),Eh=f(In),$(Ho.$$.fragment,In),Fh=f(In),$(Go.$$.fragment,In),In.forEach(o),Dd.forEach(o),Kl=f(t),Dt=r(t,"H2",{class:!0});var Nd=a(Dt);Jo=r(Nd,"A",{id:!0,class:!0,href:!0});var q_=a(Jo);Fi=r(q_,"SPAN",{});var D_=a(Fi);$(tr.$$.fragment,D_),D_.forEach(o),q_.forEach(o),qh=f(Nd),qi=r(Nd,"SPAN",{});var N_=a(qi);Dh=l(N_,"FlaxCLIPModel"),N_.forEach(o),Nd.forEach(o),Hl=f(t),E=r(t,"DIV",{class:!0});var K=a(E);$(or.$$.fragment,K),Nh=f(K),nr=r(K,"P",{});var Od=a(nr);Oh=l(Od,"This model inherits from "),ma=r(Od,"A",{href:!0});var O_=a(ma);Ah=l(O_,"FlaxPreTrainedModel"),O_.forEach(o),Vh=l(Od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Od.forEach(o),Sh=f(K),sr=r(K,"P",{});var Ad=a(sr);Wh=l(Ad,"This model is also a Flax Linen "),rr=r(Ad,"A",{href:!0,rel:!0});var A_=a(rr);Bh=l(A_,"flax.linen.Module"),A_.forEach(o),Rh=l(Ad,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ad.forEach(o),Uh=f(K),Di=r(K,"P",{});var V_=a(Di);Kh=l(V_,"Finally, this model supports inherent JAX features such as:"),V_.forEach(o),Hh=f(K),Fe=r(K,"UL",{});var yn=a(Fe);Ni=r(yn,"LI",{});var S_=a(Ni);ar=r(S_,"A",{href:!0,rel:!0});var W_=a(ar);Gh=l(W_,"Just-In-Time (JIT) compilation"),W_.forEach(o),S_.forEach(o),Jh=f(yn),Oi=r(yn,"LI",{});var B_=a(Oi);ir=r(B_,"A",{href:!0,rel:!0});var R_=a(ir);Xh=l(R_,"Automatic Differentiation"),R_.forEach(o),B_.forEach(o),Yh=f(yn),Ai=r(yn,"LI",{});var U_=a(Ai);lr=r(U_,"A",{href:!0,rel:!0});var K_=a(lr);Qh=l(K_,"Vectorization"),K_.forEach(o),U_.forEach(o),Zh=f(yn),Vi=r(yn,"LI",{});var H_=a(Vi);dr=r(H_,"A",{href:!0,rel:!0});var G_=a(dr);eg=l(G_,"Parallelization"),G_.forEach(o),H_.forEach(o),yn.forEach(o),tg=f(K),we=r(K,"DIV",{class:!0});var Cn=a(we);$(cr.$$.fragment,Cn),og=f(Cn),Nt=r(Cn,"P",{});var xa=a(Nt);ng=l(xa,"The "),Si=r(xa,"CODE",{});var J_=a(Si);sg=l(J_,"FlaxCLIPPreTrainedModel"),J_.forEach(o),rg=l(xa," forward method, overrides the "),Wi=r(xa,"CODE",{});var X_=a(Wi);ag=l(X_,"__call__"),X_.forEach(o),ig=l(xa," special method."),xa.forEach(o),lg=f(Cn),$(Xo.$$.fragment,Cn),dg=f(Cn),$(Yo.$$.fragment,Cn),Cn.forEach(o),cg=f(K),Qo=r(K,"DIV",{class:!0});var Vd=a(Qo);$(pr.$$.fragment,Vd),pg=f(Vd),$(Zo.$$.fragment,Vd),Vd.forEach(o),mg=f(K),en=r(K,"DIV",{class:!0});var Sd=a(en);$(mr.$$.fragment,Sd),fg=f(Sd),$(tn.$$.fragment,Sd),Sd.forEach(o),K.forEach(o),Gl=f(t),Ot=r(t,"H2",{class:!0});var Wd=a(Ot);on=r(Wd,"A",{id:!0,class:!0,href:!0});var Y_=a(on);Bi=r(Y_,"SPAN",{});var Q_=a(Bi);$(fr.$$.fragment,Q_),Q_.forEach(o),Y_.forEach(o),hg=f(Wd),Ri=r(Wd,"SPAN",{});var Z_=a(Ri);gg=l(Z_,"FlaxCLIPTextModel"),Z_.forEach(o),Wd.forEach(o),Jl=f(t),At=r(t,"DIV",{class:!0});var Bd=a(At);$(hr.$$.fragment,Bd),ug=f(Bd),xe=r(Bd,"DIV",{class:!0});var Tn=a(xe);$(gr.$$.fragment,Tn),_g=f(Tn),Vt=r(Tn,"P",{});var ka=a(Vt);vg=l(ka,"The "),Ui=r(ka,"CODE",{});var ev=a(Ui);Pg=l(ev,"FlaxCLIPTextPreTrainedModel"),ev.forEach(o),bg=l(ka," forward method, overrides the "),Ki=r(ka,"CODE",{});var tv=a(Ki);$g=l(tv,"__call__"),tv.forEach(o),Ig=l(ka," special method."),ka.forEach(o),yg=f(Tn),$(nn.$$.fragment,Tn),Cg=f(Tn),$(sn.$$.fragment,Tn),Tn.forEach(o),Bd.forEach(o),Xl=f(t),St=r(t,"H2",{class:!0});var Rd=a(St);rn=r(Rd,"A",{id:!0,class:!0,href:!0});var ov=a(rn);Hi=r(ov,"SPAN",{});var nv=a(Hi);$(ur.$$.fragment,nv),nv.forEach(o),ov.forEach(o),Tg=f(Rd),Gi=r(Rd,"SPAN",{});var sv=a(Gi);Lg=l(sv,"FlaxCLIPVisionModel"),sv.forEach(o),Rd.forEach(o),Yl=f(t),Wt=r(t,"DIV",{class:!0});var Ud=a(Wt);$(_r.$$.fragment,Ud),wg=f(Ud),ke=r(Ud,"DIV",{class:!0});var Ln=a(ke);$(vr.$$.fragment,Ln),xg=f(Ln),Bt=r(Ln,"P",{});var za=a(Bt);kg=l(za,"The "),Ji=r(za,"CODE",{});var rv=a(Ji);zg=l(rv,"FlaxCLIPVisionPreTrainedModel"),rv.forEach(o),Mg=l(za," forward method, overrides the "),Xi=r(za,"CODE",{});var av=a(Xi);jg=l(av,"__call__"),av.forEach(o),Eg=l(za," special method."),za.forEach(o),Fg=f(Ln),$(an.$$.fragment,Ln),qg=f(Ln),$(ln.$$.fragment,Ln),Ln.forEach(o),Ud.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Uv)),h(p,"id","clip"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#clip"),h(g,"class","relative group"),h(de,"id","overview"),h(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(de,"href","#overview"),h(H,"class","relative group"),h(Me,"href","https://arxiv.org/abs/2103.00020"),h(Me,"rel","nofollow"),h(W,"id","usage"),h(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(W,"href","#usage"),h(F,"class","relative group"),h(Oe,"href","/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor"),h(fe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(G,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(Ae,"href","/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor"),h(j,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(tt,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(ot,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Se,"href","https://huggingface.co/valhalla"),h(Se,"rel","nofollow"),h(We,"href","https://github.com/openai/CLIP"),h(We,"rel","nofollow"),h(eo,"id","transformers.CLIPConfig"),h(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(eo,"href","#transformers.CLIPConfig"),h(he,"class","relative group"),h(Er,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(Fr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Un,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Un,"rel","nofollow"),h(qr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Dr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Nr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(no,"id","transformers.CLIPTextConfig"),h(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(no,"href","#transformers.CLIPTextConfig"),h(at,"class","relative group"),h(Or,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Xn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Xn,"rel","nofollow"),h(Ar,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Vr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ro,"id","transformers.CLIPVisionConfig"),h(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ro,"href","#transformers.CLIPVisionConfig"),h(dt,"class","relative group"),h(Sr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Zn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Zn,"rel","nofollow"),h(Wr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Br,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(io,"id","transformers.CLIPTokenizer"),h(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(io,"href","#transformers.CLIPTokenizer"),h(mt,"class","relative group"),h(Rr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"id","transformers.CLIPTokenizerFast"),h(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(po,"href","#transformers.CLIPTokenizerFast"),h(ft,"class","relative group"),h(Hr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fo,"id","transformers.models.clip.image_processing_clip.CLIPImageProcessor"),h(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fo,"href","#transformers.models.clip.image_processing_clip.CLIPImageProcessor"),h(ht,"class","relative group"),h(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Po,"id","transformers.CLIPProcessor"),h(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Po,"href","#transformers.CLIPProcessor"),h(gt,"class","relative group"),h(Jr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(Xr,"href","/docs/transformers/main/en/model_doc/clip#transformers.models.clip.image_processing_clip.CLIPImageProcessor"),h(Yr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),h(Qr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),h(Zr,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),h(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ea,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),h($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Io,"id","transformers.CLIPModel"),h(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Io,"href","#transformers.CLIPModel"),h(ut,"class","relative group"),h(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ms,"rel","nofollow"),h(ta,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(na,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ko,"id","transformers.CLIPTextModel"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.CLIPTextModel"),h(bt,"class","relative group"),h(sa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jo,"id","transformers.CLIPVisionModel"),h(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jo,"href","#transformers.CLIPVisionModel"),h(yt,"class","relative group"),h(ra,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qo,"id","transformers.TFCLIPModel"),h(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qo,"href","#transformers.TFCLIPModel"),h(Lt,"class","relative group"),h(aa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Us,"rel","nofollow"),h(ia,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(la,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(da,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bo,"id","transformers.TFCLIPTextModel"),h(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bo,"href","#transformers.TFCLIPTextModel"),h(zt,"class","relative group"),h(ca,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ko,"id","transformers.TFCLIPVisionModel"),h(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ko,"href","#transformers.TFCLIPVisionModel"),h(Et,"class","relative group"),h(pa,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),h(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jo,"id","transformers.FlaxCLIPModel"),h(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jo,"href","#transformers.FlaxCLIPModel"),h(Dt,"class","relative group"),h(ma,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(rr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(rr,"rel","nofollow"),h(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(ar,"rel","nofollow"),h(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(ir,"rel","nofollow"),h(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(lr,"rel","nofollow"),h(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(dr,"rel","nofollow"),h(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(on,"id","transformers.FlaxCLIPTextModel"),h(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(on,"href","#transformers.FlaxCLIPTextModel"),h(Ot,"class","relative group"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(rn,"id","transformers.FlaxCLIPVisionModel"),h(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(rn,"href","#transformers.FlaxCLIPVisionModel"),h(St,"class","relative group"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),v(t,P,u),v(t,g,u),e(g,p),e(p,_),I(n,_,null),e(g,c),e(g,w),e(w,wn),v(t,Ut,u),v(t,H,u),e(H,de),e(de,De),I(M,De,null),e(H,xn),e(H,ze),e(ze,kn),v(t,Kt,u),v(t,Z,u),e(Z,zn),e(Z,Me),e(Me,Ge),e(Z,Mn),v(t,Ht,u),v(t,ce,u),e(ce,jn),v(t,Gt,u),v(t,pe,u),e(pe,Je),e(Je,En),v(t,Xe,u),v(t,F,u),e(F,W),e(W,Ye),I(ae,Ye,null),e(F,Fn),e(F,Qe),e(Qe,Ze),v(t,Jt,u),v(t,Ne,u),e(Ne,me),v(t,Xt,u),v(t,ee,u),e(ee,qn),e(ee,Oe),e(Oe,et),e(ee,Dn),v(t,Yt,u),v(t,z,u),e(z,Nn),e(z,fe),e(fe,On),e(z,Qt),e(z,G),e(G,An),e(z,je),e(z,Ae),e(Ae,Vn),e(z,k),e(z,j),e(j,Lr),e(z,Zt),e(z,tt),e(tt,wr),e(z,R),e(z,ot),e(ot,xr),e(z,kr),v(t,Sn,u),I(Ve,t,u),v(t,Ee,u),v(t,U,u),e(U,zr),e(U,Se),e(Se,nt),e(U,Mr),e(U,We),e(We,Wn),e(U,jr),v(t,st,u),v(t,he,u),e(he,eo),e(eo,Ma),I(Bn,Ma,null),e(he,Kd),e(he,ja),e(ja,Hd),v(t,$l,u),v(t,J,u),I(Rn,J,null),e(J,Gd),e(J,Be),e(Be,Er),e(Er,Jd),e(Be,Xd),e(Be,Fr),e(Fr,Yd),e(Be,Qd),e(Be,Un),e(Un,Zd),e(Be,ec),e(J,tc),e(J,rt),e(rt,oc),e(rt,qr),e(qr,nc),e(rt,sc),e(rt,Dr),e(Dr,rc),e(rt,ac),e(J,ic),I(to,J,null),e(J,lc),e(J,oo),I(Kn,oo,null),e(oo,dc),e(oo,Hn),e(Hn,cc),e(Hn,Nr),e(Nr,pc),e(Hn,mc),v(t,Il,u),v(t,at,u),e(at,no),e(no,Ea),I(Gn,Ea,null),e(at,fc),e(at,Fa),e(Fa,hc),v(t,yl,u),v(t,ie,u),I(Jn,ie,null),e(ie,gc),e(ie,it),e(it,uc),e(it,Or),e(Or,_c),e(it,vc),e(it,Xn),e(Xn,Pc),e(it,bc),e(ie,$c),e(ie,lt),e(lt,Ic),e(lt,Ar),e(Ar,yc),e(lt,Cc),e(lt,Vr),e(Vr,Tc),e(lt,Lc),e(ie,wc),I(so,ie,null),v(t,Cl,u),v(t,dt,u),e(dt,ro),e(ro,qa),I(Yn,qa,null),e(dt,xc),e(dt,Da),e(Da,kc),v(t,Tl,u),v(t,le,u),I(Qn,le,null),e(le,zc),e(le,ct),e(ct,Mc),e(ct,Sr),e(Sr,jc),e(ct,Ec),e(ct,Zn),e(Zn,Fc),e(ct,qc),e(le,Dc),e(le,pt),e(pt,Nc),e(pt,Wr),e(Wr,Oc),e(pt,Ac),e(pt,Br),e(Br,Vc),e(pt,Sc),e(le,Wc),I(ao,le,null),v(t,Ll,u),v(t,mt,u),e(mt,io),e(io,Na),I(es,Na,null),e(mt,Bc),e(mt,Oa),e(Oa,Rc),v(t,wl,u),v(t,q,u),I(ts,q,null),e(q,Uc),e(q,Aa),e(Aa,Kc),e(q,Hc),e(q,os),e(os,Gc),e(os,Rr),e(Rr,Jc),e(os,Xc),e(q,Yc),e(q,ge),I(ns,ge,null),e(ge,Qc),e(ge,Va),e(Va,Zc),e(ge,ep),e(ge,Sa),e(Sa,Ur),e(Ur,tp),e(Ur,Wa),e(Wa,op),e(ge,np),e(ge,Ba),e(Ba,sp),e(q,rp),e(q,lo),I(ss,lo,null),e(lo,ap),e(lo,rs),e(rs,ip),e(rs,Ra),e(Ra,lp),e(rs,dp),e(q,cp),e(q,co),I(as,co,null),e(co,pp),e(co,Ua),e(Ua,mp),e(q,fp),e(q,Kr),I(is,Kr,null),v(t,xl,u),v(t,ft,u),e(ft,po),e(po,Ka),I(ls,Ka,null),e(ft,hp),e(ft,Ha),e(Ha,gp),v(t,kl,u),v(t,X,u),I(ds,X,null),e(X,up),e(X,cs),e(cs,_p),e(cs,Ga),e(Ga,vp),e(cs,Pp),e(X,bp),e(X,ps),e(ps,$p),e(ps,Hr),e(Hr,Ip),e(ps,yp),e(X,Cp),e(X,ue),I(ms,ue,null),e(ue,Tp),e(ue,Ja),e(Ja,Lp),e(ue,wp),e(ue,Xa),e(Xa,Gr),e(Gr,xp),e(Gr,Ya),e(Ya,kp),e(ue,zp),e(ue,Qa),e(Qa,Mp),e(X,jp),e(X,mo),I(fs,mo,null),e(mo,Ep),e(mo,Za),e(Za,Fp),v(t,zl,u),v(t,ht,u),e(ht,fo),e(fo,ei),I(hs,ei,null),e(ht,qp),e(ht,ti),e(ti,Dp),v(t,Ml,u),v(t,D,u),I(gs,D,null),e(D,Np),e(D,oi),e(oi,Op),e(D,Ap),e(D,ho),I(us,ho,null),e(ho,Vp),e(ho,_s),e(_s,Sp),e(_s,ni),e(ni,Wp),e(_s,Bp),e(D,Rp),e(D,go),I(vs,go,null),e(go,Up),e(go,si),e(si,Kp),e(D,Hp),e(D,uo),I(Ps,uo,null),e(uo,Gp),e(uo,ri),e(ri,Jp),e(D,Xp),e(D,_o),I(bs,_o,null),e(_o,Yp),e(_o,ai),e(ai,Qp),e(D,Zp),e(D,vo),I($s,vo,null),e(vo,em),e(vo,ii),e(ii,tm),v(t,jl,u),v(t,gt,u),e(gt,Po),e(Po,li),I(Is,li,null),e(gt,om),e(gt,di),e(di,nm),v(t,El,u),v(t,Y,u),I(ys,Y,null),e(Y,sm),e(Y,ci),e(ci,rm),e(Y,am),e(Y,te),e(te,Jr),e(Jr,im),e(te,lm),e(te,Xr),e(Xr,dm),e(te,cm),e(te,Yr),e(Yr,pm),e(te,mm),e(te,pi),e(pi,fm),e(te,hm),e(te,Qr),e(Qr,gm),e(te,um),e(Y,_m),e(Y,bo),I(Cs,bo,null),e(bo,vm),e(bo,Ts),e(Ts,Pm),e(Ts,Zr),e(Zr,bm),e(Ts,$m),e(Y,Im),e(Y,$o),I(Ls,$o,null),e($o,ym),e($o,ws),e(ws,Cm),e(ws,ea),e(ea,Tm),e(ws,Lm),v(t,Fl,u),v(t,ut,u),e(ut,Io),e(Io,mi),I(xs,mi,null),e(ut,wm),e(ut,fi),e(fi,xm),v(t,ql,u),v(t,Q,u),I(ks,Q,null),e(Q,km),e(Q,zs),e(zs,zm),e(zs,Ms),e(Ms,Mm),e(zs,jm),e(Q,Em),e(Q,_e),I(js,_e,null),e(_e,Fm),e(_e,_t),e(_t,qm),e(_t,ta),e(ta,Dm),e(_t,Nm),e(_t,hi),e(hi,Om),e(_t,Am),e(_e,Vm),I(yo,_e,null),e(_e,Sm),I(Co,_e,null),e(Q,Wm),e(Q,ve),I(Es,ve,null),e(ve,Bm),e(ve,vt),e(vt,Rm),e(vt,oa),e(oa,Um),e(vt,Km),e(vt,gi),e(gi,Hm),e(vt,Gm),e(ve,Jm),I(To,ve,null),e(ve,Xm),I(Lo,ve,null),e(Q,Ym),e(Q,Pe),I(Fs,Pe,null),e(Pe,Qm),e(Pe,Pt),e(Pt,Zm),e(Pt,na),e(na,ef),e(Pt,tf),e(Pt,ui),e(ui,of),e(Pt,nf),e(Pe,sf),I(wo,Pe,null),e(Pe,rf),I(xo,Pe,null),v(t,Dl,u),v(t,bt,u),e(bt,ko),e(ko,_i),I(qs,_i,null),e(bt,af),e(bt,vi),e(vi,lf),v(t,Nl,u),v(t,$t,u),I(Ds,$t,null),e($t,df),e($t,be),I(Ns,be,null),e(be,cf),e(be,It),e(It,pf),e(It,sa),e(sa,mf),e(It,ff),e(It,Pi),e(Pi,hf),e(It,gf),e(be,uf),I(zo,be,null),e(be,_f),I(Mo,be,null),v(t,Ol,u),v(t,yt,u),e(yt,jo),e(jo,bi),I(Os,bi,null),e(yt,vf),e(yt,$i),e($i,Pf),v(t,Al,u),v(t,Ct,u),I(As,Ct,null),e(Ct,bf),e(Ct,$e),I(Vs,$e,null),e($e,$f),e($e,Tt),e(Tt,If),e(Tt,ra),e(ra,yf),e(Tt,Cf),e(Tt,Ii),e(Ii,Tf),e(Tt,Lf),e($e,wf),I(Eo,$e,null),e($e,xf),I(Fo,$e,null),v(t,Vl,u),v(t,Lt,u),e(Lt,qo),e(qo,yi),I(Ss,yi,null),e(Lt,kf),e(Lt,Ci),e(Ci,zf),v(t,Sl,u),v(t,N,u),I(Ws,N,null),e(N,Mf),e(N,Bs),e(Bs,jf),e(Bs,aa),e(aa,Ef),e(Bs,Ff),e(N,qf),e(N,Rs),e(Rs,Df),e(Rs,Us),e(Us,Nf),e(Rs,Of),e(N,Af),I(Do,N,null),e(N,Vf),e(N,Ie),I(Ks,Ie,null),e(Ie,Sf),e(Ie,wt),e(wt,Wf),e(wt,ia),e(ia,Bf),e(wt,Rf),e(wt,Ti),e(Ti,Uf),e(wt,Kf),e(Ie,Hf),I(No,Ie,null),e(Ie,Gf),I(Oo,Ie,null),e(N,Jf),e(N,ye),I(Hs,ye,null),e(ye,Xf),e(ye,xt),e(xt,Yf),e(xt,la),e(la,Qf),e(xt,Zf),e(xt,Li),e(Li,eh),e(xt,th),e(ye,oh),I(Ao,ye,null),e(ye,nh),I(Vo,ye,null),e(N,sh),e(N,Ce),I(Gs,Ce,null),e(Ce,rh),e(Ce,kt),e(kt,ah),e(kt,da),e(da,ih),e(kt,lh),e(kt,wi),e(wi,dh),e(kt,ch),e(Ce,ph),I(So,Ce,null),e(Ce,mh),I(Wo,Ce,null),v(t,Wl,u),v(t,zt,u),e(zt,Bo),e(Bo,xi),I(Js,xi,null),e(zt,fh),e(zt,ki),e(ki,hh),v(t,Bl,u),v(t,Mt,u),I(Xs,Mt,null),e(Mt,gh),e(Mt,Te),I(Ys,Te,null),e(Te,uh),e(Te,jt),e(jt,_h),e(jt,ca),e(ca,vh),e(jt,Ph),e(jt,zi),e(zi,bh),e(jt,$h),e(Te,Ih),I(Ro,Te,null),e(Te,yh),I(Uo,Te,null),v(t,Rl,u),v(t,Et,u),e(Et,Ko),e(Ko,Mi),I(Qs,Mi,null),e(Et,Ch),e(Et,ji),e(ji,Th),v(t,Ul,u),v(t,Ft,u),I(Zs,Ft,null),e(Ft,Lh),e(Ft,Le),I(er,Le,null),e(Le,wh),e(Le,qt),e(qt,xh),e(qt,pa),e(pa,kh),e(qt,zh),e(qt,Ei),e(Ei,Mh),e(qt,jh),e(Le,Eh),I(Ho,Le,null),e(Le,Fh),I(Go,Le,null),v(t,Kl,u),v(t,Dt,u),e(Dt,Jo),e(Jo,Fi),I(tr,Fi,null),e(Dt,qh),e(Dt,qi),e(qi,Dh),v(t,Hl,u),v(t,E,u),I(or,E,null),e(E,Nh),e(E,nr),e(nr,Oh),e(nr,ma),e(ma,Ah),e(nr,Vh),e(E,Sh),e(E,sr),e(sr,Wh),e(sr,rr),e(rr,Bh),e(sr,Rh),e(E,Uh),e(E,Di),e(Di,Kh),e(E,Hh),e(E,Fe),e(Fe,Ni),e(Ni,ar),e(ar,Gh),e(Fe,Jh),e(Fe,Oi),e(Oi,ir),e(ir,Xh),e(Fe,Yh),e(Fe,Ai),e(Ai,lr),e(lr,Qh),e(Fe,Zh),e(Fe,Vi),e(Vi,dr),e(dr,eg),e(E,tg),e(E,we),I(cr,we,null),e(we,og),e(we,Nt),e(Nt,ng),e(Nt,Si),e(Si,sg),e(Nt,rg),e(Nt,Wi),e(Wi,ag),e(Nt,ig),e(we,lg),I(Xo,we,null),e(we,dg),I(Yo,we,null),e(E,cg),e(E,Qo),I(pr,Qo,null),e(Qo,pg),I(Zo,Qo,null),e(E,mg),e(E,en),I(mr,en,null),e(en,fg),I(tn,en,null),v(t,Gl,u),v(t,Ot,u),e(Ot,on),e(on,Bi),I(fr,Bi,null),e(Ot,hg),e(Ot,Ri),e(Ri,gg),v(t,Jl,u),v(t,At,u),I(hr,At,null),e(At,ug),e(At,xe),I(gr,xe,null),e(xe,_g),e(xe,Vt),e(Vt,vg),e(Vt,Ui),e(Ui,Pg),e(Vt,bg),e(Vt,Ki),e(Ki,$g),e(Vt,Ig),e(xe,yg),I(nn,xe,null),e(xe,Cg),I(sn,xe,null),v(t,Xl,u),v(t,St,u),e(St,rn),e(rn,Hi),I(ur,Hi,null),e(St,Tg),e(St,Gi),e(Gi,Lg),v(t,Yl,u),v(t,Wt,u),I(_r,Wt,null),e(Wt,wg),e(Wt,ke),I(vr,ke,null),e(ke,xg),e(ke,Bt),e(Bt,kg),e(Bt,Ji),e(Ji,zg),e(Bt,Mg),e(Bt,Xi),e(Xi,jg),e(Bt,Eg),e(ke,Fg),I(an,ke,null),e(ke,qg),I(ln,ke,null),Ql=!0},p(t,[u]){const Pr={};u&2&&(Pr.$$scope={dirty:u,ctx:t}),to.$set(Pr);const Yi={};u&2&&(Yi.$$scope={dirty:u,ctx:t}),so.$set(Yi);const Qi={};u&2&&(Qi.$$scope={dirty:u,ctx:t}),ao.$set(Qi);const Zi={};u&2&&(Zi.$$scope={dirty:u,ctx:t}),yo.$set(Zi);const br={};u&2&&(br.$$scope={dirty:u,ctx:t}),Co.$set(br);const el={};u&2&&(el.$$scope={dirty:u,ctx:t}),To.$set(el);const tl={};u&2&&(tl.$$scope={dirty:u,ctx:t}),Lo.$set(tl);const ol={};u&2&&(ol.$$scope={dirty:u,ctx:t}),wo.$set(ol);const $r={};u&2&&($r.$$scope={dirty:u,ctx:t}),xo.$set($r);const nl={};u&2&&(nl.$$scope={dirty:u,ctx:t}),zo.$set(nl);const sl={};u&2&&(sl.$$scope={dirty:u,ctx:t}),Mo.$set(sl);const rl={};u&2&&(rl.$$scope={dirty:u,ctx:t}),Eo.$set(rl);const al={};u&2&&(al.$$scope={dirty:u,ctx:t}),Fo.$set(al);const Ir={};u&2&&(Ir.$$scope={dirty:u,ctx:t}),Do.$set(Ir);const il={};u&2&&(il.$$scope={dirty:u,ctx:t}),No.$set(il);const ll={};u&2&&(ll.$$scope={dirty:u,ctx:t}),Oo.$set(ll);const dl={};u&2&&(dl.$$scope={dirty:u,ctx:t}),Ao.$set(dl);const cl={};u&2&&(cl.$$scope={dirty:u,ctx:t}),Vo.$set(cl);const yr={};u&2&&(yr.$$scope={dirty:u,ctx:t}),So.$set(yr);const pl={};u&2&&(pl.$$scope={dirty:u,ctx:t}),Wo.$set(pl);const B={};u&2&&(B.$$scope={dirty:u,ctx:t}),Ro.$set(B);const ml={};u&2&&(ml.$$scope={dirty:u,ctx:t}),Uo.$set(ml);const fl={};u&2&&(fl.$$scope={dirty:u,ctx:t}),Ho.$set(fl);const hl={};u&2&&(hl.$$scope={dirty:u,ctx:t}),Go.$set(hl);const gl={};u&2&&(gl.$$scope={dirty:u,ctx:t}),Xo.$set(gl);const ul={};u&2&&(ul.$$scope={dirty:u,ctx:t}),Yo.$set(ul);const _l={};u&2&&(_l.$$scope={dirty:u,ctx:t}),Zo.$set(_l);const Rt={};u&2&&(Rt.$$scope={dirty:u,ctx:t}),tn.$set(Rt);const vl={};u&2&&(vl.$$scope={dirty:u,ctx:t}),nn.$set(vl);const Pl={};u&2&&(Pl.$$scope={dirty:u,ctx:t}),sn.$set(Pl);const Cr={};u&2&&(Cr.$$scope={dirty:u,ctx:t}),an.$set(Cr);const bl={};u&2&&(bl.$$scope={dirty:u,ctx:t}),ln.$set(bl)},i(t){Ql||(y(n.$$.fragment,t),y(M.$$.fragment,t),y(ae.$$.fragment,t),y(Ve.$$.fragment,t),y(Bn.$$.fragment,t),y(Rn.$$.fragment,t),y(to.$$.fragment,t),y(Kn.$$.fragment,t),y(Gn.$$.fragment,t),y(Jn.$$.fragment,t),y(so.$$.fragment,t),y(Yn.$$.fragment,t),y(Qn.$$.fragment,t),y(ao.$$.fragment,t),y(es.$$.fragment,t),y(ts.$$.fragment,t),y(ns.$$.fragment,t),y(ss.$$.fragment,t),y(as.$$.fragment,t),y(is.$$.fragment,t),y(ls.$$.fragment,t),y(ds.$$.fragment,t),y(ms.$$.fragment,t),y(fs.$$.fragment,t),y(hs.$$.fragment,t),y(gs.$$.fragment,t),y(us.$$.fragment,t),y(vs.$$.fragment,t),y(Ps.$$.fragment,t),y(bs.$$.fragment,t),y($s.$$.fragment,t),y(Is.$$.fragment,t),y(ys.$$.fragment,t),y(Cs.$$.fragment,t),y(Ls.$$.fragment,t),y(xs.$$.fragment,t),y(ks.$$.fragment,t),y(js.$$.fragment,t),y(yo.$$.fragment,t),y(Co.$$.fragment,t),y(Es.$$.fragment,t),y(To.$$.fragment,t),y(Lo.$$.fragment,t),y(Fs.$$.fragment,t),y(wo.$$.fragment,t),y(xo.$$.fragment,t),y(qs.$$.fragment,t),y(Ds.$$.fragment,t),y(Ns.$$.fragment,t),y(zo.$$.fragment,t),y(Mo.$$.fragment,t),y(Os.$$.fragment,t),y(As.$$.fragment,t),y(Vs.$$.fragment,t),y(Eo.$$.fragment,t),y(Fo.$$.fragment,t),y(Ss.$$.fragment,t),y(Ws.$$.fragment,t),y(Do.$$.fragment,t),y(Ks.$$.fragment,t),y(No.$$.fragment,t),y(Oo.$$.fragment,t),y(Hs.$$.fragment,t),y(Ao.$$.fragment,t),y(Vo.$$.fragment,t),y(Gs.$$.fragment,t),y(So.$$.fragment,t),y(Wo.$$.fragment,t),y(Js.$$.fragment,t),y(Xs.$$.fragment,t),y(Ys.$$.fragment,t),y(Ro.$$.fragment,t),y(Uo.$$.fragment,t),y(Qs.$$.fragment,t),y(Zs.$$.fragment,t),y(er.$$.fragment,t),y(Ho.$$.fragment,t),y(Go.$$.fragment,t),y(tr.$$.fragment,t),y(or.$$.fragment,t),y(cr.$$.fragment,t),y(Xo.$$.fragment,t),y(Yo.$$.fragment,t),y(pr.$$.fragment,t),y(Zo.$$.fragment,t),y(mr.$$.fragment,t),y(tn.$$.fragment,t),y(fr.$$.fragment,t),y(hr.$$.fragment,t),y(gr.$$.fragment,t),y(nn.$$.fragment,t),y(sn.$$.fragment,t),y(ur.$$.fragment,t),y(_r.$$.fragment,t),y(vr.$$.fragment,t),y(an.$$.fragment,t),y(ln.$$.fragment,t),Ql=!0)},o(t){C(n.$$.fragment,t),C(M.$$.fragment,t),C(ae.$$.fragment,t),C(Ve.$$.fragment,t),C(Bn.$$.fragment,t),C(Rn.$$.fragment,t),C(to.$$.fragment,t),C(Kn.$$.fragment,t),C(Gn.$$.fragment,t),C(Jn.$$.fragment,t),C(so.$$.fragment,t),C(Yn.$$.fragment,t),C(Qn.$$.fragment,t),C(ao.$$.fragment,t),C(es.$$.fragment,t),C(ts.$$.fragment,t),C(ns.$$.fragment,t),C(ss.$$.fragment,t),C(as.$$.fragment,t),C(is.$$.fragment,t),C(ls.$$.fragment,t),C(ds.$$.fragment,t),C(ms.$$.fragment,t),C(fs.$$.fragment,t),C(hs.$$.fragment,t),C(gs.$$.fragment,t),C(us.$$.fragment,t),C(vs.$$.fragment,t),C(Ps.$$.fragment,t),C(bs.$$.fragment,t),C($s.$$.fragment,t),C(Is.$$.fragment,t),C(ys.$$.fragment,t),C(Cs.$$.fragment,t),C(Ls.$$.fragment,t),C(xs.$$.fragment,t),C(ks.$$.fragment,t),C(js.$$.fragment,t),C(yo.$$.fragment,t),C(Co.$$.fragment,t),C(Es.$$.fragment,t),C(To.$$.fragment,t),C(Lo.$$.fragment,t),C(Fs.$$.fragment,t),C(wo.$$.fragment,t),C(xo.$$.fragment,t),C(qs.$$.fragment,t),C(Ds.$$.fragment,t),C(Ns.$$.fragment,t),C(zo.$$.fragment,t),C(Mo.$$.fragment,t),C(Os.$$.fragment,t),C(As.$$.fragment,t),C(Vs.$$.fragment,t),C(Eo.$$.fragment,t),C(Fo.$$.fragment,t),C(Ss.$$.fragment,t),C(Ws.$$.fragment,t),C(Do.$$.fragment,t),C(Ks.$$.fragment,t),C(No.$$.fragment,t),C(Oo.$$.fragment,t),C(Hs.$$.fragment,t),C(Ao.$$.fragment,t),C(Vo.$$.fragment,t),C(Gs.$$.fragment,t),C(So.$$.fragment,t),C(Wo.$$.fragment,t),C(Js.$$.fragment,t),C(Xs.$$.fragment,t),C(Ys.$$.fragment,t),C(Ro.$$.fragment,t),C(Uo.$$.fragment,t),C(Qs.$$.fragment,t),C(Zs.$$.fragment,t),C(er.$$.fragment,t),C(Ho.$$.fragment,t),C(Go.$$.fragment,t),C(tr.$$.fragment,t),C(or.$$.fragment,t),C(cr.$$.fragment,t),C(Xo.$$.fragment,t),C(Yo.$$.fragment,t),C(pr.$$.fragment,t),C(Zo.$$.fragment,t),C(mr.$$.fragment,t),C(tn.$$.fragment,t),C(fr.$$.fragment,t),C(hr.$$.fragment,t),C(gr.$$.fragment,t),C(nn.$$.fragment,t),C(sn.$$.fragment,t),C(ur.$$.fragment,t),C(_r.$$.fragment,t),C(vr.$$.fragment,t),C(an.$$.fragment,t),C(ln.$$.fragment,t),Ql=!1},d(t){o(d),t&&o(P),t&&o(g),T(n),t&&o(Ut),t&&o(H),T(M),t&&o(Kt),t&&o(Z),t&&o(Ht),t&&o(ce),t&&o(Gt),t&&o(pe),t&&o(Xe),t&&o(F),T(ae),t&&o(Jt),t&&o(Ne),t&&o(Xt),t&&o(ee),t&&o(Yt),t&&o(z),t&&o(Sn),T(Ve,t),t&&o(Ee),t&&o(U),t&&o(st),t&&o(he),T(Bn),t&&o($l),t&&o(J),T(Rn),T(to),T(Kn),t&&o(Il),t&&o(at),T(Gn),t&&o(yl),t&&o(ie),T(Jn),T(so),t&&o(Cl),t&&o(dt),T(Yn),t&&o(Tl),t&&o(le),T(Qn),T(ao),t&&o(Ll),t&&o(mt),T(es),t&&o(wl),t&&o(q),T(ts),T(ns),T(ss),T(as),T(is),t&&o(xl),t&&o(ft),T(ls),t&&o(kl),t&&o(X),T(ds),T(ms),T(fs),t&&o(zl),t&&o(ht),T(hs),t&&o(Ml),t&&o(D),T(gs),T(us),T(vs),T(Ps),T(bs),T($s),t&&o(jl),t&&o(gt),T(Is),t&&o(El),t&&o(Y),T(ys),T(Cs),T(Ls),t&&o(Fl),t&&o(ut),T(xs),t&&o(ql),t&&o(Q),T(ks),T(js),T(yo),T(Co),T(Es),T(To),T(Lo),T(Fs),T(wo),T(xo),t&&o(Dl),t&&o(bt),T(qs),t&&o(Nl),t&&o($t),T(Ds),T(Ns),T(zo),T(Mo),t&&o(Ol),t&&o(yt),T(Os),t&&o(Al),t&&o(Ct),T(As),T(Vs),T(Eo),T(Fo),t&&o(Vl),t&&o(Lt),T(Ss),t&&o(Sl),t&&o(N),T(Ws),T(Do),T(Ks),T(No),T(Oo),T(Hs),T(Ao),T(Vo),T(Gs),T(So),T(Wo),t&&o(Wl),t&&o(zt),T(Js),t&&o(Bl),t&&o(Mt),T(Xs),T(Ys),T(Ro),T(Uo),t&&o(Rl),t&&o(Et),T(Qs),t&&o(Ul),t&&o(Ft),T(Zs),T(er),T(Ho),T(Go),t&&o(Kl),t&&o(Dt),T(tr),t&&o(Hl),t&&o(E),T(or),T(cr),T(Xo),T(Yo),T(pr),T(Zo),T(mr),T(tn),t&&o(Gl),t&&o(Ot),T(fr),t&&o(Jl),t&&o(At),T(hr),T(gr),T(nn),T(sn),t&&o(Xl),t&&o(St),T(ur),t&&o(Yl),t&&o(Wt),T(_r),T(vr),T(an),T(ln)}}}const Uv={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.models.clip.image_processing_clip.CLIPImageProcessor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function Kv(L){return pv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zv extends iv{constructor(d){super();lv(this,d,Kv,Rv,dv,{})}}export{Zv as default,Uv as metadata};
