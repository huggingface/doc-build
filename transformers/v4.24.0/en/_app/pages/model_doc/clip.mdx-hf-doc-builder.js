import{S as T_,i as L_,s as x_,e as s,k as m,w as P,t as i,M as w_,c as r,d as o,m as f,a,x as $,h as l,b as h,G as e,g as v,y as I,q as C,o as y,B as T,v as k_,L as N}from"../../chunks/vendor-hf-doc-builder.js";import{T as ne}from"../../chunks/Tip-hf-doc-builder.js";import{D as w}from"../../chunks/Docstring-hf-doc-builder.js";import{C as O}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as A}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as V}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function M_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPConfig, CLIPModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>config = CLIPConfig.from_text_vision_configs(config_text, config_vision)`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function j_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTextConfig, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function E_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPVisionConfig, CLIPVisionModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function z_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function F_(L){let d,b,u,p,_;return p=new O({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function q_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function D_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function A_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function O_(L){let d,b,u,p,_;return p=new O({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function V_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function N_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function S_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function W_(L){let d,b,u,p,_;return p=new O({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function B_(L){let d,b,u,p,_,n,c,x,$n,Ut,K,ie,qe,j,In,we,Cn,Rt,Q,yn,ke,He,Tn,Kt,le,Ln,Ht,de,Ge,xn,Je,F,S,Xe,se,wn,Ze,Qe,Gt,De,ce,Jt,Y,kn,Ae,Ye,Mn,Xt,M,jn,pe,En,Zt,H,zn,Me,Oe,Fn;return{c(){d=s("p"),b=i("TensorFlow models and layers in "),u=s("code"),p=i("transformers"),_=i(" accept two formats as input:"),n=m(),c=s("ul"),x=s("li"),$n=i("having all inputs as keyword arguments (like PyTorch models), or"),Ut=m(),K=s("li"),ie=i("having all inputs as a list, tuple or dict in the first positional argument."),qe=m(),j=s("p"),In=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),we=s("code"),Cn=i("model.fit()"),Rt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=s("code"),yn=i("model.fit()"),ke=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),He=s("code"),Tn=i("fit()"),Kt=i(" and "),le=s("code"),Ln=i("predict()"),Ht=i(`, such as when creating your own layers or models with
the Keras `),de=s("code"),Ge=i("Functional"),xn=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Je=m(),F=s("ul"),S=s("li"),Xe=i("a single Tensor with "),se=s("code"),wn=i("input_ids"),Ze=i(" only and nothing else: "),Qe=s("code"),Gt=i("model(input_ids)"),De=m(),ce=s("li"),Jt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s("code"),kn=i("model([input_ids, attention_mask])"),Ae=i(" or "),Ye=s("code"),Mn=i("model([input_ids, attention_mask, token_type_ids])"),Xt=m(),M=s("li"),jn=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=s("code"),En=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Zt=m(),H=s("p"),zn=i(`Note that when creating models and layers with
`),Me=s("a"),Oe=i("subclassing"),Fn=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var E=a(d);b=l(E,"TensorFlow models and layers in "),u=r(E,"CODE",{});var ur=a(u);p=l(ur,"transformers"),ur.forEach(o),_=l(E," accept two formats as input:"),E.forEach(o),n=f(k),c=r(k,"UL",{});var Qt=a(c);x=r(Qt,"LI",{});var et=a(x);$n=l(et,"having all inputs as keyword arguments (like PyTorch models), or"),et.forEach(o),Ut=f(Qt),K=r(Qt,"LI",{});var gr=a(K);ie=l(gr,"having all inputs as a list, tuple or dict in the first positional argument."),gr.forEach(o),Qt.forEach(o),qe=f(k),j=r(k,"P",{});var B=a(j);In=l(B,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),we=r(B,"CODE",{});var tt=a(we);Cn=l(tt,"model.fit()"),tt.forEach(o),Rt=l(B,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(B,"CODE",{});var _r=a(Q);yn=l(_r,"model.fit()"),_r.forEach(o),ke=l(B,` supports! If, however, you want to use the second
format outside of Keras methods like `),He=r(B,"CODE",{});var vr=a(He);Tn=l(vr,"fit()"),vr.forEach(o),Kt=l(B," and "),le=r(B,"CODE",{});var qn=a(le);Ln=l(qn,"predict()"),qn.forEach(o),Ht=l(B,`, such as when creating your own layers or models with
the Keras `),de=r(B,"CODE",{});var Ve=a(de);Ge=l(Ve,"Functional"),Ve.forEach(o),xn=l(B,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),B.forEach(o),Je=f(k),F=r(k,"UL",{});var je=a(F);S=r(je,"LI",{});var U=a(S);Xe=l(U,"a single Tensor with "),se=r(U,"CODE",{});var br=a(se);wn=l(br,"input_ids"),br.forEach(o),Ze=l(U," only and nothing else: "),Qe=r(U,"CODE",{});var Ne=a(Qe);Gt=l(Ne,"model(input_ids)"),Ne.forEach(o),U.forEach(o),De=f(je),ce=r(je,"LI",{});var ot=a(ce);Jt=l(ot,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=r(ot,"CODE",{});var Pr=a(Y);kn=l(Pr,"model([input_ids, attention_mask])"),Pr.forEach(o),Ae=l(ot," or "),Ye=r(ot,"CODE",{});var Se=a(Ye);Mn=l(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(o),ot.forEach(o),Xt=f(je),M=r(je,"LI",{});var Dn=a(M);jn=l(Dn,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=r(Dn,"CODE",{});var $r=a(pe);En=l($r,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$r.forEach(o),Dn.forEach(o),je.forEach(o),Zt=f(k),H=r(k,"P",{});var nt=a(H);zn=l(nt,`Note that when creating models and layers with
`),Me=r(nt,"A",{href:!0,rel:!0});var me=a(Me);Oe=l(me,"subclassing"),me.forEach(o),Fn=l(nt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),nt.forEach(o),this.h()},h(){h(Me,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(Me,"rel","nofollow")},m(k,E){v(k,d,E),e(d,b),e(d,u),e(u,p),e(d,_),v(k,n,E),v(k,c,E),e(c,x),e(x,$n),e(c,Ut),e(c,K),e(K,ie),v(k,qe,E),v(k,j,E),e(j,In),e(j,we),e(we,Cn),e(j,Rt),e(j,Q),e(Q,yn),e(j,ke),e(j,He),e(He,Tn),e(j,Kt),e(j,le),e(le,Ln),e(j,Ht),e(j,de),e(de,Ge),e(j,xn),v(k,Je,E),v(k,F,E),e(F,S),e(S,Xe),e(S,se),e(se,wn),e(S,Ze),e(S,Qe),e(Qe,Gt),e(F,De),e(F,ce),e(ce,Jt),e(ce,Y),e(Y,kn),e(ce,Ae),e(ce,Ye),e(Ye,Mn),e(F,Xt),e(F,M),e(M,jn),e(M,pe),e(pe,En),v(k,Zt,E),v(k,H,E),e(H,zn),e(H,Me),e(Me,Oe),e(H,Fn)},d(k){k&&o(d),k&&o(n),k&&o(c),k&&o(qe),k&&o(j),k&&o(Je),k&&o(F),k&&o(Zt),k&&o(H)}}}function U_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function R_(L){let d,b,u,p,_;return p=new O({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function K_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function H_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function G_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function J_(L){let d,b,u,p,_;return p=new O({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function X_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Z_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function Q_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Y_(L){let d,b,u,p,_;return p=new O({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function ev(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function tv(L){let d,b,u,p,_;return p=new O({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function ov(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function nv(L){let d,b,u,p,_;return p=new O({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function sv(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function rv(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function av(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var x=a(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function iv(L){let d,b,u,p,_;return p=new O({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function lv(L){let d,b,u,p,_,n,c,x,$n,Ut,K,ie,qe,j,In,we,Cn,Rt,Q,yn,ke,He,Tn,Kt,le,Ln,Ht,de,Ge,xn,Je,F,S,Xe,se,wn,Ze,Qe,Gt,De,ce,Jt,Y,kn,Ae,Ye,Mn,Xt,M,jn,pe,En,Zt,H,zn,Me,Oe,Fn,k,E,ur,Qt,et,gr,B,tt,_r,vr,qn,Ve,je,U,br,Ne,ot,Pr,Se,Dn,$r,nt,me,Yt,Ia,An,xd,Ca,wd,il,G,On,kd,We,Ir,Md,jd,Cr,Ed,zd,Vn,Fd,qd,Dd,st,Ad,yr,Od,Vd,Tr,Nd,Sd,Wd,eo,Bd,to,Nn,Ud,Sn,Rd,Lr,Kd,Hd,ll,rt,oo,ya,Wn,Gd,Ta,Jd,dl,re,Bn,Xd,at,Zd,xr,Qd,Yd,Un,ec,tc,oc,it,nc,wr,sc,rc,kr,ac,ic,lc,no,cl,lt,so,La,Rn,dc,xa,cc,pl,ae,Kn,pc,dt,mc,Mr,fc,hc,Hn,uc,gc,_c,ct,vc,jr,bc,Pc,Er,$c,Ic,Cc,ro,ml,pt,ao,wa,Gn,yc,ka,Tc,fl,q,Jn,Lc,Ma,xc,wc,Xn,kc,zr,Mc,jc,Ec,fe,Zn,zc,ja,Fc,qc,Ea,Fr,Dc,za,Ac,Oc,Fa,Vc,Nc,io,Qn,Sc,Yn,Wc,qa,Bc,Uc,Rc,lo,es,Kc,Da,Hc,Gc,qr,ts,hl,mt,co,Aa,os,Jc,Oa,Xc,ul,J,ns,Zc,ss,Qc,Va,Yc,ep,tp,rs,op,Dr,np,sp,rp,he,as,ap,Na,ip,lp,Sa,Ar,dp,Wa,cp,pp,Ba,mp,fp,po,is,hp,Ua,up,gl,ft,mo,Ra,ls,gp,Ka,_p,_l,Ee,ds,vp,Ha,bp,Pp,cs,$p,Or,Ip,Cp,vl,ht,fo,Ga,ps,yp,Ja,Tp,bl,X,ms,Lp,Xa,xp,wp,ee,Vr,kp,Mp,Nr,jp,Ep,Sr,zp,Fp,Za,qp,Dp,Wr,Ap,Op,Vp,ho,fs,Np,hs,Sp,Br,Wp,Bp,Up,uo,us,Rp,gs,Kp,Ur,Hp,Gp,Pl,ut,go,Qa,_s,Jp,Ya,Xp,$l,Z,vs,Zp,bs,Qp,Ps,Yp,em,tm,ue,$s,om,gt,nm,Rr,sm,rm,ei,am,im,lm,_o,dm,vo,cm,ge,Is,pm,_t,mm,Kr,fm,hm,ti,um,gm,_m,bo,vm,Po,bm,_e,Cs,Pm,vt,$m,Hr,Im,Cm,oi,ym,Tm,Lm,$o,xm,Io,Il,bt,Co,ni,ys,wm,si,km,Cl,Pt,Ts,Mm,ve,Ls,jm,$t,Em,Gr,zm,Fm,ri,qm,Dm,Am,yo,Om,To,yl,It,Lo,ai,xs,Vm,ii,Nm,Tl,Ct,ws,Sm,be,ks,Wm,yt,Bm,Jr,Um,Rm,li,Km,Hm,Gm,xo,Jm,wo,Ll,Tt,ko,di,Ms,Xm,ci,Zm,xl,D,js,Qm,Es,Ym,Xr,ef,tf,of,zs,nf,Fs,sf,rf,af,Mo,lf,Pe,qs,df,Lt,cf,Zr,pf,mf,pi,ff,hf,uf,jo,gf,Eo,_f,$e,Ds,vf,xt,bf,Qr,Pf,$f,mi,If,Cf,yf,zo,Tf,Fo,Lf,Ie,As,xf,wt,wf,Yr,kf,Mf,fi,jf,Ef,zf,qo,Ff,Do,wl,kt,Ao,hi,Os,qf,ui,Df,kl,Mt,Vs,Af,Ce,Ns,Of,jt,Vf,ea,Nf,Sf,gi,Wf,Bf,Uf,Oo,Rf,Vo,Ml,Et,No,_i,Ss,Kf,vi,Hf,jl,zt,Ws,Gf,ye,Bs,Jf,Ft,Xf,ta,Zf,Qf,bi,Yf,eh,th,So,oh,Wo,El,qt,Bo,Pi,Us,nh,$i,sh,zl,z,Rs,rh,Ks,ah,oa,ih,lh,dh,Hs,ch,Gs,ph,mh,fh,Ii,hh,uh,ze,Ci,Js,gh,_h,yi,Xs,vh,bh,Ti,Zs,Ph,$h,Li,Qs,Ih,Ch,Te,Ys,yh,Dt,Th,xi,Lh,xh,wi,wh,kh,Mh,Uo,jh,Ro,Eh,Ko,er,zh,Ho,Fh,Go,tr,qh,Jo,Fl,At,Xo,ki,or,Dh,Mi,Ah,ql,Ot,nr,Oh,Le,sr,Vh,Vt,Nh,ji,Sh,Wh,Ei,Bh,Uh,Rh,Zo,Kh,Qo,Dl,Nt,Yo,zi,rr,Hh,Fi,Gh,Al,St,ar,Jh,xe,ir,Xh,Wt,Zh,qi,Qh,Yh,Di,eu,tu,ou,en,nu,tn,Ol;return n=new A({}),j=new A({}),se=new A({}),Ve=new O({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),An=new A({}),On=new w({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/configuration_clip.py#L254"}}),eo=new V({props:{anchor:"transformers.CLIPConfig.example",$$slots:{default:[M_]},$$scope:{ctx:L}}}),Nn=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/configuration_clip.py#L327",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),Wn=new A({}),Bn=new w({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/configuration_clip.py#L40"}}),no=new V({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[j_]},$$scope:{ctx:L}}}),Rn=new A({}),Kn=new w({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/configuration_clip.py#L148"}}),ro=new V({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[E_]},$$scope:{ctx:L}}}),Gn=new A({}),Jn=new w({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/tokenization_clip.py#L260"}}),Zn=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/tokenization_clip.py#L346",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new w({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/tokenization_clip.py#L373",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),es=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/tokenization_clip.py#L401",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new w({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/tokenization_clip.py#L496"}}),os=new A({}),ns=new w({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),as=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),is=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new A({}),ds=new w({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"do_convert_rgb",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.CLIPFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.Resampling.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.Resampling.NEAREST</code>,
<code>PIL.Image.Resampling.BOX</code>, <code>PIL.Image.Resampling.BILINEAR</code>, <code>PIL.Image.Resampling.HAMMING</code>,
<code>PIL.Image.Resampling.BICUBIC</code> or <code>PIL.Image.Resampling.LANCZOS</code>. Only has an effect if <code>do_resize</code> is set
to <code>True</code>.`,name:"resample"},{anchor:"transformers.CLIPFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.CLIPFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.CLIPFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.CLIPFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.CLIPFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"},{anchor:"transformers.CLIPFeatureExtractor.convert_rgb",description:`<strong>convert_rgb</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether or not to convert <code>PIL.Image.Image</code> into <code>RGB</code> format`,name:"convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/feature_extraction_clip.py#L32"}}),ps=new A({}),ms=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/processing_clip.py#L22"}}),fs=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/processing_clip.py#L95"}}),us=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/processing_clip.py#L102"}}),_s=new A({}),vs=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_clip.py#L854"}}),$s=new w({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_clip.py#L985",returnDescription:`
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
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new ne({props:{$$slots:{default:[z_]},$$scope:{ctx:L}}}),vo=new V({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[F_]},$$scope:{ctx:L}}}),Is=new w({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_clip.py#L889",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),bo=new ne({props:{$$slots:{default:[q_]},$$scope:{ctx:L}}}),Po=new V({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[D_]},$$scope:{ctx:L}}}),Cs=new w({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_clip.py#L936",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),$o=new ne({props:{$$slots:{default:[A_]},$$scope:{ctx:L}}}),Io=new V({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[O_]},$$scope:{ctx:L}}}),ys=new A({}),Ts=new w({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_clip.py#L688"}}),Ls=new w({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_clip.py#L705",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new ne({props:{$$slots:{default:[V_]},$$scope:{ctx:L}}}),To=new V({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[N_]},$$scope:{ctx:L}}}),xs=new A({}),ws=new w({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_clip.py#L801"}}),ks=new w({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_clip.py#L814",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new ne({props:{$$slots:{default:[S_]},$$scope:{ctx:L}}}),wo=new V({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[W_]},$$scope:{ctx:L}}}),Ms=new A({}),js=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_tf_clip.py#L1229"}}),Mo=new ne({props:{$$slots:{default:[B_]},$$scope:{ctx:L}}}),qs=new w({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_tf_clip.py#L1357",returnDescription:`
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
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>~modeling_tf_utils.TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>~modeling_tf_utils.TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),jo=new ne({props:{$$slots:{default:[U_]},$$scope:{ctx:L}}}),Eo=new V({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[R_]},$$scope:{ctx:L}}}),Ds=new w({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_tf_clip.py#L1275",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),zo=new ne({props:{$$slots:{default:[K_]},$$scope:{ctx:L}}}),Fo=new V({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[H_]},$$scope:{ctx:L}}}),As=new w({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_tf_clip.py#L1315",returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),qo=new ne({props:{$$slots:{default:[G_]},$$scope:{ctx:L}}}),Do=new V({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[J_]},$$scope:{ctx:L}}}),Os=new A({}),Vs=new w({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_tf_clip.py#L1056"}}),Ns=new w({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_tf_clip.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Oo=new ne({props:{$$slots:{default:[X_]},$$scope:{ctx:L}}}),Vo=new V({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[Z_]},$$scope:{ctx:L}}}),Ss=new A({}),Ws=new w({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_tf_clip.py#L1131"}}),Bs=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_tf_clip.py#L1172",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),So=new ne({props:{$$slots:{default:[Q_]},$$scope:{ctx:L}}}),Wo=new V({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[Y_]},$$scope:{ctx:L}}}),Us=new A({}),Rs=new w({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),Ys=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_flax_clip.py#L777",returnDescription:`
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
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new ne({props:{$$slots:{default:[ev]},$$scope:{ctx:L}}}),Ro=new V({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[tv]},$$scope:{ctx:L}}}),er=new w({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_flax_clip.py#L822",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ho=new V({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[ov]},$$scope:{ctx:L}}}),tr=new w({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Jo=new V({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[nv]},$$scope:{ctx:L}}}),or=new A({}),nr=new w({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),sr=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_flax_clip.py#L622",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new ne({props:{$$slots:{default:[sv]},$$scope:{ctx:L}}}),Qo=new V({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[rv]},$$scope:{ctx:L}}}),rr=new A({}),ar=new w({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),ir=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/clip/modeling_flax_clip.py#L702",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new ne({props:{$$slots:{default:[av]},$$scope:{ctx:L}}}),tn=new V({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[iv]},$$scope:{ctx:L}}}),{c(){d=s("meta"),b=m(),u=s("h1"),p=s("a"),_=s("span"),P(n.$$.fragment),c=m(),x=s("span"),$n=i("CLIP"),Ut=m(),K=s("h2"),ie=s("a"),qe=s("span"),P(j.$$.fragment),In=m(),we=s("span"),Cn=i("Overview"),Rt=m(),Q=s("p"),yn=i("The CLIP model was proposed in "),ke=s("a"),He=i("Learning Transferable Visual Models From Natural Language Supervision"),Tn=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Kt=m(),le=s("p"),Ln=i("The abstract from the paper is the following:"),Ht=m(),de=s("p"),Ge=s("em"),xn=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Je=m(),F=s("h2"),S=s("a"),Xe=s("span"),P(se.$$.fragment),wn=m(),Ze=s("span"),Qe=i("Usage"),Gt=m(),De=s("p"),ce=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Jt=m(),Y=s("p"),kn=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Ae=s("a"),Ye=i("CLIPFeatureExtractor"),Mn=i(" can be used to resize (or rescale) and normalize images for the model."),Xt=m(),M=s("p"),jn=i("The "),pe=s("a"),En=i("CLIPTokenizer"),Zt=i(" is used to encode the text. The "),H=s("a"),zn=i("CLIPProcessor"),Me=i(` wraps
`),Oe=s("a"),Fn=i("CLIPFeatureExtractor"),k=i(" and "),E=s("a"),ur=i("CLIPTokenizer"),Qt=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),et=s("a"),gr=i("CLIPProcessor"),B=i(" and "),tt=s("a"),_r=i("CLIPModel"),vr=i("."),qn=m(),P(Ve.$$.fragment),je=m(),U=s("p"),br=i("This model was contributed by "),Ne=s("a"),ot=i("valhalla"),Pr=i(". The original code can be found "),Se=s("a"),Dn=i("here"),$r=i("."),nt=m(),me=s("h2"),Yt=s("a"),Ia=s("span"),P(An.$$.fragment),xd=m(),Ca=s("span"),wd=i("CLIPConfig"),il=m(),G=s("div"),P(On.$$.fragment),kd=m(),We=s("p"),Ir=s("a"),Md=i("CLIPConfig"),jd=i(" is the configuration class to store the configuration of a "),Cr=s("a"),Ed=i("CLIPModel"),zd=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Vn=s("a"),Fd=i("openai/clip-vit-base-patch32"),qd=i(" architecture."),Dd=m(),st=s("p"),Ad=i("Configuration objects inherit from "),yr=s("a"),Od=i("PretrainedConfig"),Vd=i(` and can be used to control the model outputs. Read the
documentation from `),Tr=s("a"),Nd=i("PretrainedConfig"),Sd=i(" for more information."),Wd=m(),P(eo.$$.fragment),Bd=m(),to=s("div"),P(Nn.$$.fragment),Ud=m(),Sn=s("p"),Rd=i("Instantiate a "),Lr=s("a"),Kd=i("CLIPConfig"),Hd=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),ll=m(),rt=s("h2"),oo=s("a"),ya=s("span"),P(Wn.$$.fragment),Gd=m(),Ta=s("span"),Jd=i("CLIPTextConfig"),dl=m(),re=s("div"),P(Bn.$$.fragment),Xd=m(),at=s("p"),Zd=i("This is the configuration class to store the configuration of a "),xr=s("a"),Qd=i("CLIPModel"),Yd=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Un=s("a"),ec=i("openai/clip-vit-base-patch32"),tc=i(" architecture."),oc=m(),it=s("p"),nc=i("Configuration objects inherit from "),wr=s("a"),sc=i("PretrainedConfig"),rc=i(` and can be used to control the model outputs. Read the
documentation from `),kr=s("a"),ac=i("PretrainedConfig"),ic=i(" for more information."),lc=m(),P(no.$$.fragment),cl=m(),lt=s("h2"),so=s("a"),La=s("span"),P(Rn.$$.fragment),dc=m(),xa=s("span"),cc=i("CLIPVisionConfig"),pl=m(),ae=s("div"),P(Kn.$$.fragment),pc=m(),dt=s("p"),mc=i("This is the configuration class to store the configuration of a "),Mr=s("a"),fc=i("CLIPModel"),hc=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Hn=s("a"),uc=i("openai/clip-vit-base-patch32"),gc=i(" architecture."),_c=m(),ct=s("p"),vc=i("Configuration objects inherit from "),jr=s("a"),bc=i("PretrainedConfig"),Pc=i(` and can be used to control the model outputs. Read the
documentation from `),Er=s("a"),$c=i("PretrainedConfig"),Ic=i(" for more information."),Cc=m(),P(ro.$$.fragment),ml=m(),pt=s("h2"),ao=s("a"),wa=s("span"),P(Gn.$$.fragment),yc=m(),ka=s("span"),Tc=i("CLIPTokenizer"),fl=m(),q=s("div"),P(Jn.$$.fragment),Lc=m(),Ma=s("p"),xc=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),wc=m(),Xn=s("p"),kc=i("This tokenizer inherits from "),zr=s("a"),Mc=i("PreTrainedTokenizer"),jc=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ec=m(),fe=s("div"),P(Zn.$$.fragment),zc=m(),ja=s("p"),Fc=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),qc=m(),Ea=s("ul"),Fr=s("li"),Dc=i("single sequence: "),za=s("code"),Ac=i("<|startoftext|> X <|endoftext|>"),Oc=m(),Fa=s("p"),Vc=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Nc=m(),io=s("div"),P(Qn.$$.fragment),Sc=m(),Yn=s("p"),Wc=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qa=s("code"),Bc=i("prepare_for_model"),Uc=i(" method."),Rc=m(),lo=s("div"),P(es.$$.fragment),Kc=m(),Da=s("p"),Hc=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Gc=m(),qr=s("div"),P(ts.$$.fragment),hl=m(),mt=s("h2"),co=s("a"),Aa=s("span"),P(os.$$.fragment),Jc=m(),Oa=s("span"),Xc=i("CLIPTokenizerFast"),ul=m(),J=s("div"),P(ns.$$.fragment),Zc=m(),ss=s("p"),Qc=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Va=s("em"),Yc=i("tokenizers"),ep=i(` library). Based on byte-level
Byte-Pair-Encoding.`),tp=m(),rs=s("p"),op=i("This tokenizer inherits from "),Dr=s("a"),np=i("PreTrainedTokenizerFast"),sp=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),rp=m(),he=s("div"),P(as.$$.fragment),ap=m(),Na=s("p"),ip=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),lp=m(),Sa=s("ul"),Ar=s("li"),dp=i("single sequence: "),Wa=s("code"),cp=i("<|startoftext|> X <|endoftext|>"),pp=m(),Ba=s("p"),mp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),fp=m(),po=s("div"),P(is.$$.fragment),hp=m(),Ua=s("p"),up=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),gl=m(),ft=s("h2"),mo=s("a"),Ra=s("span"),P(ls.$$.fragment),gp=m(),Ka=s("span"),_p=i("CLIPFeatureExtractor"),_l=m(),Ee=s("div"),P(ds.$$.fragment),vp=m(),Ha=s("p"),bp=i("Constructs a CLIP feature extractor."),Pp=m(),cs=s("p"),$p=i("This feature extractor inherits from "),Or=s("a"),Ip=i("FeatureExtractionMixin"),Cp=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),vl=m(),ht=s("h2"),fo=s("a"),Ga=s("span"),P(ps.$$.fragment),yp=m(),Ja=s("span"),Tp=i("CLIPProcessor"),bl=m(),X=s("div"),P(ms.$$.fragment),Lp=m(),Xa=s("p"),xp=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),wp=m(),ee=s("p"),Vr=s("a"),kp=i("CLIPProcessor"),Mp=i(" offers all the functionalities of "),Nr=s("a"),jp=i("CLIPFeatureExtractor"),Ep=i(" and "),Sr=s("a"),zp=i("CLIPTokenizerFast"),Fp=i(`. See the
`),Za=s("code"),qp=i("__call__()"),Dp=i(" and "),Wr=s("a"),Ap=i("decode()"),Op=i(" for more information."),Vp=m(),ho=s("div"),P(fs.$$.fragment),Np=m(),hs=s("p"),Sp=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Br=s("a"),Wp=i("batch_decode()"),Bp=i(`. Please
refer to the docstring of this method for more information.`),Up=m(),uo=s("div"),P(us.$$.fragment),Rp=m(),gs=s("p"),Kp=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ur=s("a"),Hp=i("decode()"),Gp=i(`. Please refer to
the docstring of this method for more information.`),Pl=m(),ut=s("h2"),go=s("a"),Qa=s("span"),P(_s.$$.fragment),Jp=m(),Ya=s("span"),Xp=i("CLIPModel"),$l=m(),Z=s("div"),P(vs.$$.fragment),Zp=m(),bs=s("p"),Qp=i("This model is a PyTorch "),Ps=s("a"),Yp=i("torch.nn.Module"),em=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tm=m(),ue=s("div"),P($s.$$.fragment),om=m(),gt=s("p"),nm=i("The "),Rr=s("a"),sm=i("CLIPModel"),rm=i(" forward method, overrides the "),ei=s("code"),am=i("__call__"),im=i(" special method."),lm=m(),P(_o.$$.fragment),dm=m(),P(vo.$$.fragment),cm=m(),ge=s("div"),P(Is.$$.fragment),pm=m(),_t=s("p"),mm=i("The "),Kr=s("a"),fm=i("CLIPModel"),hm=i(" forward method, overrides the "),ti=s("code"),um=i("__call__"),gm=i(" special method."),_m=m(),P(bo.$$.fragment),vm=m(),P(Po.$$.fragment),bm=m(),_e=s("div"),P(Cs.$$.fragment),Pm=m(),vt=s("p"),$m=i("The "),Hr=s("a"),Im=i("CLIPModel"),Cm=i(" forward method, overrides the "),oi=s("code"),ym=i("__call__"),Tm=i(" special method."),Lm=m(),P($o.$$.fragment),xm=m(),P(Io.$$.fragment),Il=m(),bt=s("h2"),Co=s("a"),ni=s("span"),P(ys.$$.fragment),wm=m(),si=s("span"),km=i("CLIPTextModel"),Cl=m(),Pt=s("div"),P(Ts.$$.fragment),Mm=m(),ve=s("div"),P(Ls.$$.fragment),jm=m(),$t=s("p"),Em=i("The "),Gr=s("a"),zm=i("CLIPTextModel"),Fm=i(" forward method, overrides the "),ri=s("code"),qm=i("__call__"),Dm=i(" special method."),Am=m(),P(yo.$$.fragment),Om=m(),P(To.$$.fragment),yl=m(),It=s("h2"),Lo=s("a"),ai=s("span"),P(xs.$$.fragment),Vm=m(),ii=s("span"),Nm=i("CLIPVisionModel"),Tl=m(),Ct=s("div"),P(ws.$$.fragment),Sm=m(),be=s("div"),P(ks.$$.fragment),Wm=m(),yt=s("p"),Bm=i("The "),Jr=s("a"),Um=i("CLIPVisionModel"),Rm=i(" forward method, overrides the "),li=s("code"),Km=i("__call__"),Hm=i(" special method."),Gm=m(),P(xo.$$.fragment),Jm=m(),P(wo.$$.fragment),Ll=m(),Tt=s("h2"),ko=s("a"),di=s("span"),P(Ms.$$.fragment),Xm=m(),ci=s("span"),Zm=i("TFCLIPModel"),xl=m(),D=s("div"),P(js.$$.fragment),Qm=m(),Es=s("p"),Ym=i("This model inherits from "),Xr=s("a"),ef=i("TFPreTrainedModel"),tf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),of=m(),zs=s("p"),nf=i("This model is also a "),Fs=s("a"),sf=i("tf.keras.Model"),rf=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),af=m(),P(Mo.$$.fragment),lf=m(),Pe=s("div"),P(qs.$$.fragment),df=m(),Lt=s("p"),cf=i("The "),Zr=s("a"),pf=i("TFCLIPModel"),mf=i(" forward method, overrides the "),pi=s("code"),ff=i("__call__"),hf=i(" special method."),uf=m(),P(jo.$$.fragment),gf=m(),P(Eo.$$.fragment),_f=m(),$e=s("div"),P(Ds.$$.fragment),vf=m(),xt=s("p"),bf=i("The "),Qr=s("a"),Pf=i("TFCLIPModel"),$f=i(" forward method, overrides the "),mi=s("code"),If=i("__call__"),Cf=i(" special method."),yf=m(),P(zo.$$.fragment),Tf=m(),P(Fo.$$.fragment),Lf=m(),Ie=s("div"),P(As.$$.fragment),xf=m(),wt=s("p"),wf=i("The "),Yr=s("a"),kf=i("TFCLIPModel"),Mf=i(" forward method, overrides the "),fi=s("code"),jf=i("__call__"),Ef=i(" special method."),zf=m(),P(qo.$$.fragment),Ff=m(),P(Do.$$.fragment),wl=m(),kt=s("h2"),Ao=s("a"),hi=s("span"),P(Os.$$.fragment),qf=m(),ui=s("span"),Df=i("TFCLIPTextModel"),kl=m(),Mt=s("div"),P(Vs.$$.fragment),Af=m(),Ce=s("div"),P(Ns.$$.fragment),Of=m(),jt=s("p"),Vf=i("The "),ea=s("a"),Nf=i("TFCLIPTextModel"),Sf=i(" forward method, overrides the "),gi=s("code"),Wf=i("__call__"),Bf=i(" special method."),Uf=m(),P(Oo.$$.fragment),Rf=m(),P(Vo.$$.fragment),Ml=m(),Et=s("h2"),No=s("a"),_i=s("span"),P(Ss.$$.fragment),Kf=m(),vi=s("span"),Hf=i("TFCLIPVisionModel"),jl=m(),zt=s("div"),P(Ws.$$.fragment),Gf=m(),ye=s("div"),P(Bs.$$.fragment),Jf=m(),Ft=s("p"),Xf=i("The "),ta=s("a"),Zf=i("TFCLIPVisionModel"),Qf=i(" forward method, overrides the "),bi=s("code"),Yf=i("__call__"),eh=i(" special method."),th=m(),P(So.$$.fragment),oh=m(),P(Wo.$$.fragment),El=m(),qt=s("h2"),Bo=s("a"),Pi=s("span"),P(Us.$$.fragment),nh=m(),$i=s("span"),sh=i("FlaxCLIPModel"),zl=m(),z=s("div"),P(Rs.$$.fragment),rh=m(),Ks=s("p"),ah=i("This model inherits from "),oa=s("a"),ih=i("FlaxPreTrainedModel"),lh=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dh=m(),Hs=s("p"),ch=i("This model is also a Flax Linen "),Gs=s("a"),ph=i("flax.linen.Module"),mh=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fh=m(),Ii=s("p"),hh=i("Finally, this model supports inherent JAX features such as:"),uh=m(),ze=s("ul"),Ci=s("li"),Js=s("a"),gh=i("Just-In-Time (JIT) compilation"),_h=m(),yi=s("li"),Xs=s("a"),vh=i("Automatic Differentiation"),bh=m(),Ti=s("li"),Zs=s("a"),Ph=i("Vectorization"),$h=m(),Li=s("li"),Qs=s("a"),Ih=i("Parallelization"),Ch=m(),Te=s("div"),P(Ys.$$.fragment),yh=m(),Dt=s("p"),Th=i("The "),xi=s("code"),Lh=i("FlaxCLIPPreTrainedModel"),xh=i(" forward method, overrides the "),wi=s("code"),wh=i("__call__"),kh=i(" special method."),Mh=m(),P(Uo.$$.fragment),jh=m(),P(Ro.$$.fragment),Eh=m(),Ko=s("div"),P(er.$$.fragment),zh=m(),P(Ho.$$.fragment),Fh=m(),Go=s("div"),P(tr.$$.fragment),qh=m(),P(Jo.$$.fragment),Fl=m(),At=s("h2"),Xo=s("a"),ki=s("span"),P(or.$$.fragment),Dh=m(),Mi=s("span"),Ah=i("FlaxCLIPTextModel"),ql=m(),Ot=s("div"),P(nr.$$.fragment),Oh=m(),Le=s("div"),P(sr.$$.fragment),Vh=m(),Vt=s("p"),Nh=i("The "),ji=s("code"),Sh=i("FlaxCLIPTextPreTrainedModel"),Wh=i(" forward method, overrides the "),Ei=s("code"),Bh=i("__call__"),Uh=i(" special method."),Rh=m(),P(Zo.$$.fragment),Kh=m(),P(Qo.$$.fragment),Dl=m(),Nt=s("h2"),Yo=s("a"),zi=s("span"),P(rr.$$.fragment),Hh=m(),Fi=s("span"),Gh=i("FlaxCLIPVisionModel"),Al=m(),St=s("div"),P(ar.$$.fragment),Jh=m(),xe=s("div"),P(ir.$$.fragment),Xh=m(),Wt=s("p"),Zh=i("The "),qi=s("code"),Qh=i("FlaxCLIPVisionPreTrainedModel"),Yh=i(" forward method, overrides the "),Di=s("code"),eu=i("__call__"),tu=i(" special method."),ou=m(),P(en.$$.fragment),nu=m(),P(tn.$$.fragment),this.h()},l(t){const g=w_('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),b=f(t),u=r(t,"H1",{class:!0});var lr=a(u);p=r(lr,"A",{id:!0,class:!0,href:!0});var Ai=a(p);_=r(Ai,"SPAN",{});var Oi=a(_);$(n.$$.fragment,Oi),Oi.forEach(o),Ai.forEach(o),c=f(lr),x=r(lr,"SPAN",{});var Vi=a(x);$n=l(Vi,"CLIP"),Vi.forEach(o),lr.forEach(o),Ut=f(t),K=r(t,"H2",{class:!0});var dr=a(K);ie=r(dr,"A",{id:!0,class:!0,href:!0});var Ni=a(ie);qe=r(Ni,"SPAN",{});var Si=a(qe);$(j.$$.fragment,Si),Si.forEach(o),Ni.forEach(o),In=f(dr),we=r(dr,"SPAN",{});var Wi=a(we);Cn=l(Wi,"Overview"),Wi.forEach(o),dr.forEach(o),Rt=f(t),Q=r(t,"P",{});var cr=a(Q);yn=l(cr,"The CLIP model was proposed in "),ke=r(cr,"A",{href:!0,rel:!0});var Bi=a(ke);He=l(Bi,"Learning Transferable Visual Models From Natural Language Supervision"),Bi.forEach(o),Tn=l(cr,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),cr.forEach(o),Kt=f(t),le=r(t,"P",{});var Ui=a(le);Ln=l(Ui,"The abstract from the paper is the following:"),Ui.forEach(o),Ht=f(t),de=r(t,"P",{});var Ri=a(de);Ge=r(Ri,"EM",{});var Ki=a(Ge);xn=l(Ki,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Ki.forEach(o),Ri.forEach(o),Je=f(t),F=r(t,"H2",{class:!0});var pr=a(F);S=r(pr,"A",{id:!0,class:!0,href:!0});var Hi=a(S);Xe=r(Hi,"SPAN",{});var Gi=a(Xe);$(se.$$.fragment,Gi),Gi.forEach(o),Hi.forEach(o),wn=f(pr),Ze=r(pr,"SPAN",{});var Ji=a(Ze);Qe=l(Ji,"Usage"),Ji.forEach(o),pr.forEach(o),Gt=f(t),De=r(t,"P",{});var Xi=a(De);ce=l(Xi,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Xi.forEach(o),Jt=f(t),Y=r(t,"P",{});var mr=a(Y);kn=l(mr,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Ae=r(mr,"A",{href:!0});var Zi=a(Ae);Ye=l(Zi,"CLIPFeatureExtractor"),Zi.forEach(o),Mn=l(mr," can be used to resize (or rescale) and normalize images for the model."),mr.forEach(o),Xt=f(t),M=r(t,"P",{});var W=a(M);jn=l(W,"The "),pe=r(W,"A",{href:!0});var Qi=a(pe);En=l(Qi,"CLIPTokenizer"),Qi.forEach(o),Zt=l(W," is used to encode the text. The "),H=r(W,"A",{href:!0});var Yi=a(H);zn=l(Yi,"CLIPProcessor"),Yi.forEach(o),Me=l(W,` wraps
`),Oe=r(W,"A",{href:!0});var el=a(Oe);Fn=l(el,"CLIPFeatureExtractor"),el.forEach(o),k=l(W," and "),E=r(W,"A",{href:!0});var tl=a(E);ur=l(tl,"CLIPTokenizer"),tl.forEach(o),Qt=l(W,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),et=r(W,"A",{href:!0});var ol=a(et);gr=l(ol,"CLIPProcessor"),ol.forEach(o),B=l(W," and "),tt=r(W,"A",{href:!0});var nl=a(tt);_r=l(nl,"CLIPModel"),nl.forEach(o),vr=l(W,"."),W.forEach(o),qn=f(t),$(Ve.$$.fragment,t),je=f(t),U=r(t,"P",{});var Bt=a(U);br=l(Bt,"This model was contributed by "),Ne=r(Bt,"A",{href:!0,rel:!0});var sl=a(Ne);ot=l(sl,"valhalla"),sl.forEach(o),Pr=l(Bt,". The original code can be found "),Se=r(Bt,"A",{href:!0,rel:!0});var rl=a(Se);Dn=l(rl,"here"),rl.forEach(o),$r=l(Bt,"."),Bt.forEach(o),nt=f(t),me=r(t,"H2",{class:!0});var fr=a(me);Yt=r(fr,"A",{id:!0,class:!0,href:!0});var al=a(Yt);Ia=r(al,"SPAN",{});var au=a(Ia);$(An.$$.fragment,au),au.forEach(o),al.forEach(o),xd=f(fr),Ca=r(fr,"SPAN",{});var iu=a(Ca);wd=l(iu,"CLIPConfig"),iu.forEach(o),fr.forEach(o),il=f(t),G=r(t,"DIV",{class:!0});var Be=a(G);$(On.$$.fragment,Be),kd=f(Be),We=r(Be,"P",{});var hr=a(We);Ir=r(hr,"A",{href:!0});var lu=a(Ir);Md=l(lu,"CLIPConfig"),lu.forEach(o),jd=l(hr," is the configuration class to store the configuration of a "),Cr=r(hr,"A",{href:!0});var du=a(Cr);Ed=l(du,"CLIPModel"),du.forEach(o),zd=l(hr,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Vn=r(hr,"A",{href:!0,rel:!0});var cu=a(Vn);Fd=l(cu,"openai/clip-vit-base-patch32"),cu.forEach(o),qd=l(hr," architecture."),hr.forEach(o),Dd=f(Be),st=r(Be,"P",{});var na=a(st);Ad=l(na,"Configuration objects inherit from "),yr=r(na,"A",{href:!0});var pu=a(yr);Od=l(pu,"PretrainedConfig"),pu.forEach(o),Vd=l(na,` and can be used to control the model outputs. Read the
documentation from `),Tr=r(na,"A",{href:!0});var mu=a(Tr);Nd=l(mu,"PretrainedConfig"),mu.forEach(o),Sd=l(na," for more information."),na.forEach(o),Wd=f(Be),$(eo.$$.fragment,Be),Bd=f(Be),to=r(Be,"DIV",{class:!0});var Vl=a(to);$(Nn.$$.fragment,Vl),Ud=f(Vl),Sn=r(Vl,"P",{});var Nl=a(Sn);Rd=l(Nl,"Instantiate a "),Lr=r(Nl,"A",{href:!0});var fu=a(Lr);Kd=l(fu,"CLIPConfig"),fu.forEach(o),Hd=l(Nl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Nl.forEach(o),Vl.forEach(o),Be.forEach(o),ll=f(t),rt=r(t,"H2",{class:!0});var Sl=a(rt);oo=r(Sl,"A",{id:!0,class:!0,href:!0});var hu=a(oo);ya=r(hu,"SPAN",{});var uu=a(ya);$(Wn.$$.fragment,uu),uu.forEach(o),hu.forEach(o),Gd=f(Sl),Ta=r(Sl,"SPAN",{});var gu=a(Ta);Jd=l(gu,"CLIPTextConfig"),gu.forEach(o),Sl.forEach(o),dl=f(t),re=r(t,"DIV",{class:!0});var on=a(re);$(Bn.$$.fragment,on),Xd=f(on),at=r(on,"P",{});var sa=a(at);Zd=l(sa,"This is the configuration class to store the configuration of a "),xr=r(sa,"A",{href:!0});var _u=a(xr);Qd=l(_u,"CLIPModel"),_u.forEach(o),Yd=l(sa,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Un=r(sa,"A",{href:!0,rel:!0});var vu=a(Un);ec=l(vu,"openai/clip-vit-base-patch32"),vu.forEach(o),tc=l(sa," architecture."),sa.forEach(o),oc=f(on),it=r(on,"P",{});var ra=a(it);nc=l(ra,"Configuration objects inherit from "),wr=r(ra,"A",{href:!0});var bu=a(wr);sc=l(bu,"PretrainedConfig"),bu.forEach(o),rc=l(ra,` and can be used to control the model outputs. Read the
documentation from `),kr=r(ra,"A",{href:!0});var Pu=a(kr);ac=l(Pu,"PretrainedConfig"),Pu.forEach(o),ic=l(ra," for more information."),ra.forEach(o),lc=f(on),$(no.$$.fragment,on),on.forEach(o),cl=f(t),lt=r(t,"H2",{class:!0});var Wl=a(lt);so=r(Wl,"A",{id:!0,class:!0,href:!0});var $u=a(so);La=r($u,"SPAN",{});var Iu=a(La);$(Rn.$$.fragment,Iu),Iu.forEach(o),$u.forEach(o),dc=f(Wl),xa=r(Wl,"SPAN",{});var Cu=a(xa);cc=l(Cu,"CLIPVisionConfig"),Cu.forEach(o),Wl.forEach(o),pl=f(t),ae=r(t,"DIV",{class:!0});var nn=a(ae);$(Kn.$$.fragment,nn),pc=f(nn),dt=r(nn,"P",{});var aa=a(dt);mc=l(aa,"This is the configuration class to store the configuration of a "),Mr=r(aa,"A",{href:!0});var yu=a(Mr);fc=l(yu,"CLIPModel"),yu.forEach(o),hc=l(aa,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Hn=r(aa,"A",{href:!0,rel:!0});var Tu=a(Hn);uc=l(Tu,"openai/clip-vit-base-patch32"),Tu.forEach(o),gc=l(aa," architecture."),aa.forEach(o),_c=f(nn),ct=r(nn,"P",{});var ia=a(ct);vc=l(ia,"Configuration objects inherit from "),jr=r(ia,"A",{href:!0});var Lu=a(jr);bc=l(Lu,"PretrainedConfig"),Lu.forEach(o),Pc=l(ia,` and can be used to control the model outputs. Read the
documentation from `),Er=r(ia,"A",{href:!0});var xu=a(Er);$c=l(xu,"PretrainedConfig"),xu.forEach(o),Ic=l(ia," for more information."),ia.forEach(o),Cc=f(nn),$(ro.$$.fragment,nn),nn.forEach(o),ml=f(t),pt=r(t,"H2",{class:!0});var Bl=a(pt);ao=r(Bl,"A",{id:!0,class:!0,href:!0});var wu=a(ao);wa=r(wu,"SPAN",{});var ku=a(wa);$(Gn.$$.fragment,ku),ku.forEach(o),wu.forEach(o),yc=f(Bl),ka=r(Bl,"SPAN",{});var Mu=a(ka);Tc=l(Mu,"CLIPTokenizer"),Mu.forEach(o),Bl.forEach(o),fl=f(t),q=r(t,"DIV",{class:!0});var te=a(q);$(Jn.$$.fragment,te),Lc=f(te),Ma=r(te,"P",{});var ju=a(Ma);xc=l(ju,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),ju.forEach(o),wc=f(te),Xn=r(te,"P",{});var Ul=a(Xn);kc=l(Ul,"This tokenizer inherits from "),zr=r(Ul,"A",{href:!0});var Eu=a(zr);Mc=l(Eu,"PreTrainedTokenizer"),Eu.forEach(o),jc=l(Ul,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ul.forEach(o),Ec=f(te),fe=r(te,"DIV",{class:!0});var sn=a(fe);$(Zn.$$.fragment,sn),zc=f(sn),ja=r(sn,"P",{});var zu=a(ja);Fc=l(zu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),zu.forEach(o),qc=f(sn),Ea=r(sn,"UL",{});var Fu=a(Ea);Fr=r(Fu,"LI",{});var su=a(Fr);Dc=l(su,"single sequence: "),za=r(su,"CODE",{});var qu=a(za);Ac=l(qu,"<|startoftext|> X <|endoftext|>"),qu.forEach(o),su.forEach(o),Fu.forEach(o),Oc=f(sn),Fa=r(sn,"P",{});var Du=a(Fa);Vc=l(Du,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Du.forEach(o),sn.forEach(o),Nc=f(te),io=r(te,"DIV",{class:!0});var Rl=a(io);$(Qn.$$.fragment,Rl),Sc=f(Rl),Yn=r(Rl,"P",{});var Kl=a(Yn);Wc=l(Kl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qa=r(Kl,"CODE",{});var Au=a(qa);Bc=l(Au,"prepare_for_model"),Au.forEach(o),Uc=l(Kl," method."),Kl.forEach(o),Rl.forEach(o),Rc=f(te),lo=r(te,"DIV",{class:!0});var Hl=a(lo);$(es.$$.fragment,Hl),Kc=f(Hl),Da=r(Hl,"P",{});var Ou=a(Da);Hc=l(Ou,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Ou.forEach(o),Hl.forEach(o),Gc=f(te),qr=r(te,"DIV",{class:!0});var Vu=a(qr);$(ts.$$.fragment,Vu),Vu.forEach(o),te.forEach(o),hl=f(t),mt=r(t,"H2",{class:!0});var Gl=a(mt);co=r(Gl,"A",{id:!0,class:!0,href:!0});var Nu=a(co);Aa=r(Nu,"SPAN",{});var Su=a(Aa);$(os.$$.fragment,Su),Su.forEach(o),Nu.forEach(o),Jc=f(Gl),Oa=r(Gl,"SPAN",{});var Wu=a(Oa);Xc=l(Wu,"CLIPTokenizerFast"),Wu.forEach(o),Gl.forEach(o),ul=f(t),J=r(t,"DIV",{class:!0});var Ue=a(J);$(ns.$$.fragment,Ue),Zc=f(Ue),ss=r(Ue,"P",{});var Jl=a(ss);Qc=l(Jl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Va=r(Jl,"EM",{});var Bu=a(Va);Yc=l(Bu,"tokenizers"),Bu.forEach(o),ep=l(Jl,` library). Based on byte-level
Byte-Pair-Encoding.`),Jl.forEach(o),tp=f(Ue),rs=r(Ue,"P",{});var Xl=a(rs);op=l(Xl,"This tokenizer inherits from "),Dr=r(Xl,"A",{href:!0});var Uu=a(Dr);np=l(Uu,"PreTrainedTokenizerFast"),Uu.forEach(o),sp=l(Xl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xl.forEach(o),rp=f(Ue),he=r(Ue,"DIV",{class:!0});var rn=a(he);$(as.$$.fragment,rn),ap=f(rn),Na=r(rn,"P",{});var Ru=a(Na);ip=l(Ru,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Ru.forEach(o),lp=f(rn),Sa=r(rn,"UL",{});var Ku=a(Sa);Ar=r(Ku,"LI",{});var ru=a(Ar);dp=l(ru,"single sequence: "),Wa=r(ru,"CODE",{});var Hu=a(Wa);cp=l(Hu,"<|startoftext|> X <|endoftext|>"),Hu.forEach(o),ru.forEach(o),Ku.forEach(o),pp=f(rn),Ba=r(rn,"P",{});var Gu=a(Ba);mp=l(Gu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Gu.forEach(o),rn.forEach(o),fp=f(Ue),po=r(Ue,"DIV",{class:!0});var Zl=a(po);$(is.$$.fragment,Zl),hp=f(Zl),Ua=r(Zl,"P",{});var Ju=a(Ua);up=l(Ju,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Ju.forEach(o),Zl.forEach(o),Ue.forEach(o),gl=f(t),ft=r(t,"H2",{class:!0});var Ql=a(ft);mo=r(Ql,"A",{id:!0,class:!0,href:!0});var Xu=a(mo);Ra=r(Xu,"SPAN",{});var Zu=a(Ra);$(ls.$$.fragment,Zu),Zu.forEach(o),Xu.forEach(o),gp=f(Ql),Ka=r(Ql,"SPAN",{});var Qu=a(Ka);_p=l(Qu,"CLIPFeatureExtractor"),Qu.forEach(o),Ql.forEach(o),_l=f(t),Ee=r(t,"DIV",{class:!0});var la=a(Ee);$(ds.$$.fragment,la),vp=f(la),Ha=r(la,"P",{});var Yu=a(Ha);bp=l(Yu,"Constructs a CLIP feature extractor."),Yu.forEach(o),Pp=f(la),cs=r(la,"P",{});var Yl=a(cs);$p=l(Yl,"This feature extractor inherits from "),Or=r(Yl,"A",{href:!0});var eg=a(Or);Ip=l(eg,"FeatureExtractionMixin"),eg.forEach(o),Cp=l(Yl,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Yl.forEach(o),la.forEach(o),vl=f(t),ht=r(t,"H2",{class:!0});var ed=a(ht);fo=r(ed,"A",{id:!0,class:!0,href:!0});var tg=a(fo);Ga=r(tg,"SPAN",{});var og=a(Ga);$(ps.$$.fragment,og),og.forEach(o),tg.forEach(o),yp=f(ed),Ja=r(ed,"SPAN",{});var ng=a(Ja);Tp=l(ng,"CLIPProcessor"),ng.forEach(o),ed.forEach(o),bl=f(t),X=r(t,"DIV",{class:!0});var Re=a(X);$(ms.$$.fragment,Re),Lp=f(Re),Xa=r(Re,"P",{});var sg=a(Xa);xp=l(sg,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),sg.forEach(o),wp=f(Re),ee=r(Re,"P",{});var Fe=a(ee);Vr=r(Fe,"A",{href:!0});var rg=a(Vr);kp=l(rg,"CLIPProcessor"),rg.forEach(o),Mp=l(Fe," offers all the functionalities of "),Nr=r(Fe,"A",{href:!0});var ag=a(Nr);jp=l(ag,"CLIPFeatureExtractor"),ag.forEach(o),Ep=l(Fe," and "),Sr=r(Fe,"A",{href:!0});var ig=a(Sr);zp=l(ig,"CLIPTokenizerFast"),ig.forEach(o),Fp=l(Fe,`. See the
`),Za=r(Fe,"CODE",{});var lg=a(Za);qp=l(lg,"__call__()"),lg.forEach(o),Dp=l(Fe," and "),Wr=r(Fe,"A",{href:!0});var dg=a(Wr);Ap=l(dg,"decode()"),dg.forEach(o),Op=l(Fe," for more information."),Fe.forEach(o),Vp=f(Re),ho=r(Re,"DIV",{class:!0});var td=a(ho);$(fs.$$.fragment,td),Np=f(td),hs=r(td,"P",{});var od=a(hs);Sp=l(od,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Br=r(od,"A",{href:!0});var cg=a(Br);Wp=l(cg,"batch_decode()"),cg.forEach(o),Bp=l(od,`. Please
refer to the docstring of this method for more information.`),od.forEach(o),td.forEach(o),Up=f(Re),uo=r(Re,"DIV",{class:!0});var nd=a(uo);$(us.$$.fragment,nd),Rp=f(nd),gs=r(nd,"P",{});var sd=a(gs);Kp=l(sd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ur=r(sd,"A",{href:!0});var pg=a(Ur);Hp=l(pg,"decode()"),pg.forEach(o),Gp=l(sd,`. Please refer to
the docstring of this method for more information.`),sd.forEach(o),nd.forEach(o),Re.forEach(o),Pl=f(t),ut=r(t,"H2",{class:!0});var rd=a(ut);go=r(rd,"A",{id:!0,class:!0,href:!0});var mg=a(go);Qa=r(mg,"SPAN",{});var fg=a(Qa);$(_s.$$.fragment,fg),fg.forEach(o),mg.forEach(o),Jp=f(rd),Ya=r(rd,"SPAN",{});var hg=a(Ya);Xp=l(hg,"CLIPModel"),hg.forEach(o),rd.forEach(o),$l=f(t),Z=r(t,"DIV",{class:!0});var Ke=a(Z);$(vs.$$.fragment,Ke),Zp=f(Ke),bs=r(Ke,"P",{});var ad=a(bs);Qp=l(ad,"This model is a PyTorch "),Ps=r(ad,"A",{href:!0,rel:!0});var ug=a(Ps);Yp=l(ug,"torch.nn.Module"),ug.forEach(o),em=l(ad,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ad.forEach(o),tm=f(Ke),ue=r(Ke,"DIV",{class:!0});var an=a(ue);$($s.$$.fragment,an),om=f(an),gt=r(an,"P",{});var da=a(gt);nm=l(da,"The "),Rr=r(da,"A",{href:!0});var gg=a(Rr);sm=l(gg,"CLIPModel"),gg.forEach(o),rm=l(da," forward method, overrides the "),ei=r(da,"CODE",{});var _g=a(ei);am=l(_g,"__call__"),_g.forEach(o),im=l(da," special method."),da.forEach(o),lm=f(an),$(_o.$$.fragment,an),dm=f(an),$(vo.$$.fragment,an),an.forEach(o),cm=f(Ke),ge=r(Ke,"DIV",{class:!0});var ln=a(ge);$(Is.$$.fragment,ln),pm=f(ln),_t=r(ln,"P",{});var ca=a(_t);mm=l(ca,"The "),Kr=r(ca,"A",{href:!0});var vg=a(Kr);fm=l(vg,"CLIPModel"),vg.forEach(o),hm=l(ca," forward method, overrides the "),ti=r(ca,"CODE",{});var bg=a(ti);um=l(bg,"__call__"),bg.forEach(o),gm=l(ca," special method."),ca.forEach(o),_m=f(ln),$(bo.$$.fragment,ln),vm=f(ln),$(Po.$$.fragment,ln),ln.forEach(o),bm=f(Ke),_e=r(Ke,"DIV",{class:!0});var dn=a(_e);$(Cs.$$.fragment,dn),Pm=f(dn),vt=r(dn,"P",{});var pa=a(vt);$m=l(pa,"The "),Hr=r(pa,"A",{href:!0});var Pg=a(Hr);Im=l(Pg,"CLIPModel"),Pg.forEach(o),Cm=l(pa," forward method, overrides the "),oi=r(pa,"CODE",{});var $g=a(oi);ym=l($g,"__call__"),$g.forEach(o),Tm=l(pa," special method."),pa.forEach(o),Lm=f(dn),$($o.$$.fragment,dn),xm=f(dn),$(Io.$$.fragment,dn),dn.forEach(o),Ke.forEach(o),Il=f(t),bt=r(t,"H2",{class:!0});var id=a(bt);Co=r(id,"A",{id:!0,class:!0,href:!0});var Ig=a(Co);ni=r(Ig,"SPAN",{});var Cg=a(ni);$(ys.$$.fragment,Cg),Cg.forEach(o),Ig.forEach(o),wm=f(id),si=r(id,"SPAN",{});var yg=a(si);km=l(yg,"CLIPTextModel"),yg.forEach(o),id.forEach(o),Cl=f(t),Pt=r(t,"DIV",{class:!0});var ld=a(Pt);$(Ts.$$.fragment,ld),Mm=f(ld),ve=r(ld,"DIV",{class:!0});var cn=a(ve);$(Ls.$$.fragment,cn),jm=f(cn),$t=r(cn,"P",{});var ma=a($t);Em=l(ma,"The "),Gr=r(ma,"A",{href:!0});var Tg=a(Gr);zm=l(Tg,"CLIPTextModel"),Tg.forEach(o),Fm=l(ma," forward method, overrides the "),ri=r(ma,"CODE",{});var Lg=a(ri);qm=l(Lg,"__call__"),Lg.forEach(o),Dm=l(ma," special method."),ma.forEach(o),Am=f(cn),$(yo.$$.fragment,cn),Om=f(cn),$(To.$$.fragment,cn),cn.forEach(o),ld.forEach(o),yl=f(t),It=r(t,"H2",{class:!0});var dd=a(It);Lo=r(dd,"A",{id:!0,class:!0,href:!0});var xg=a(Lo);ai=r(xg,"SPAN",{});var wg=a(ai);$(xs.$$.fragment,wg),wg.forEach(o),xg.forEach(o),Vm=f(dd),ii=r(dd,"SPAN",{});var kg=a(ii);Nm=l(kg,"CLIPVisionModel"),kg.forEach(o),dd.forEach(o),Tl=f(t),Ct=r(t,"DIV",{class:!0});var cd=a(Ct);$(ws.$$.fragment,cd),Sm=f(cd),be=r(cd,"DIV",{class:!0});var pn=a(be);$(ks.$$.fragment,pn),Wm=f(pn),yt=r(pn,"P",{});var fa=a(yt);Bm=l(fa,"The "),Jr=r(fa,"A",{href:!0});var Mg=a(Jr);Um=l(Mg,"CLIPVisionModel"),Mg.forEach(o),Rm=l(fa," forward method, overrides the "),li=r(fa,"CODE",{});var jg=a(li);Km=l(jg,"__call__"),jg.forEach(o),Hm=l(fa," special method."),fa.forEach(o),Gm=f(pn),$(xo.$$.fragment,pn),Jm=f(pn),$(wo.$$.fragment,pn),pn.forEach(o),cd.forEach(o),Ll=f(t),Tt=r(t,"H2",{class:!0});var pd=a(Tt);ko=r(pd,"A",{id:!0,class:!0,href:!0});var Eg=a(ko);di=r(Eg,"SPAN",{});var zg=a(di);$(Ms.$$.fragment,zg),zg.forEach(o),Eg.forEach(o),Xm=f(pd),ci=r(pd,"SPAN",{});var Fg=a(ci);Zm=l(Fg,"TFCLIPModel"),Fg.forEach(o),pd.forEach(o),xl=f(t),D=r(t,"DIV",{class:!0});var oe=a(D);$(js.$$.fragment,oe),Qm=f(oe),Es=r(oe,"P",{});var md=a(Es);Ym=l(md,"This model inherits from "),Xr=r(md,"A",{href:!0});var qg=a(Xr);ef=l(qg,"TFPreTrainedModel"),qg.forEach(o),tf=l(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(o),of=f(oe),zs=r(oe,"P",{});var fd=a(zs);nf=l(fd,"This model is also a "),Fs=r(fd,"A",{href:!0,rel:!0});var Dg=a(Fs);sf=l(Dg,"tf.keras.Model"),Dg.forEach(o),rf=l(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(o),af=f(oe),$(Mo.$$.fragment,oe),lf=f(oe),Pe=r(oe,"DIV",{class:!0});var mn=a(Pe);$(qs.$$.fragment,mn),df=f(mn),Lt=r(mn,"P",{});var ha=a(Lt);cf=l(ha,"The "),Zr=r(ha,"A",{href:!0});var Ag=a(Zr);pf=l(Ag,"TFCLIPModel"),Ag.forEach(o),mf=l(ha," forward method, overrides the "),pi=r(ha,"CODE",{});var Og=a(pi);ff=l(Og,"__call__"),Og.forEach(o),hf=l(ha," special method."),ha.forEach(o),uf=f(mn),$(jo.$$.fragment,mn),gf=f(mn),$(Eo.$$.fragment,mn),mn.forEach(o),_f=f(oe),$e=r(oe,"DIV",{class:!0});var fn=a($e);$(Ds.$$.fragment,fn),vf=f(fn),xt=r(fn,"P",{});var ua=a(xt);bf=l(ua,"The "),Qr=r(ua,"A",{href:!0});var Vg=a(Qr);Pf=l(Vg,"TFCLIPModel"),Vg.forEach(o),$f=l(ua," forward method, overrides the "),mi=r(ua,"CODE",{});var Ng=a(mi);If=l(Ng,"__call__"),Ng.forEach(o),Cf=l(ua," special method."),ua.forEach(o),yf=f(fn),$(zo.$$.fragment,fn),Tf=f(fn),$(Fo.$$.fragment,fn),fn.forEach(o),Lf=f(oe),Ie=r(oe,"DIV",{class:!0});var hn=a(Ie);$(As.$$.fragment,hn),xf=f(hn),wt=r(hn,"P",{});var ga=a(wt);wf=l(ga,"The "),Yr=r(ga,"A",{href:!0});var Sg=a(Yr);kf=l(Sg,"TFCLIPModel"),Sg.forEach(o),Mf=l(ga," forward method, overrides the "),fi=r(ga,"CODE",{});var Wg=a(fi);jf=l(Wg,"__call__"),Wg.forEach(o),Ef=l(ga," special method."),ga.forEach(o),zf=f(hn),$(qo.$$.fragment,hn),Ff=f(hn),$(Do.$$.fragment,hn),hn.forEach(o),oe.forEach(o),wl=f(t),kt=r(t,"H2",{class:!0});var hd=a(kt);Ao=r(hd,"A",{id:!0,class:!0,href:!0});var Bg=a(Ao);hi=r(Bg,"SPAN",{});var Ug=a(hi);$(Os.$$.fragment,Ug),Ug.forEach(o),Bg.forEach(o),qf=f(hd),ui=r(hd,"SPAN",{});var Rg=a(ui);Df=l(Rg,"TFCLIPTextModel"),Rg.forEach(o),hd.forEach(o),kl=f(t),Mt=r(t,"DIV",{class:!0});var ud=a(Mt);$(Vs.$$.fragment,ud),Af=f(ud),Ce=r(ud,"DIV",{class:!0});var un=a(Ce);$(Ns.$$.fragment,un),Of=f(un),jt=r(un,"P",{});var _a=a(jt);Vf=l(_a,"The "),ea=r(_a,"A",{href:!0});var Kg=a(ea);Nf=l(Kg,"TFCLIPTextModel"),Kg.forEach(o),Sf=l(_a," forward method, overrides the "),gi=r(_a,"CODE",{});var Hg=a(gi);Wf=l(Hg,"__call__"),Hg.forEach(o),Bf=l(_a," special method."),_a.forEach(o),Uf=f(un),$(Oo.$$.fragment,un),Rf=f(un),$(Vo.$$.fragment,un),un.forEach(o),ud.forEach(o),Ml=f(t),Et=r(t,"H2",{class:!0});var gd=a(Et);No=r(gd,"A",{id:!0,class:!0,href:!0});var Gg=a(No);_i=r(Gg,"SPAN",{});var Jg=a(_i);$(Ss.$$.fragment,Jg),Jg.forEach(o),Gg.forEach(o),Kf=f(gd),vi=r(gd,"SPAN",{});var Xg=a(vi);Hf=l(Xg,"TFCLIPVisionModel"),Xg.forEach(o),gd.forEach(o),jl=f(t),zt=r(t,"DIV",{class:!0});var _d=a(zt);$(Ws.$$.fragment,_d),Gf=f(_d),ye=r(_d,"DIV",{class:!0});var gn=a(ye);$(Bs.$$.fragment,gn),Jf=f(gn),Ft=r(gn,"P",{});var va=a(Ft);Xf=l(va,"The "),ta=r(va,"A",{href:!0});var Zg=a(ta);Zf=l(Zg,"TFCLIPVisionModel"),Zg.forEach(o),Qf=l(va," forward method, overrides the "),bi=r(va,"CODE",{});var Qg=a(bi);Yf=l(Qg,"__call__"),Qg.forEach(o),eh=l(va," special method."),va.forEach(o),th=f(gn),$(So.$$.fragment,gn),oh=f(gn),$(Wo.$$.fragment,gn),gn.forEach(o),_d.forEach(o),El=f(t),qt=r(t,"H2",{class:!0});var vd=a(qt);Bo=r(vd,"A",{id:!0,class:!0,href:!0});var Yg=a(Bo);Pi=r(Yg,"SPAN",{});var e_=a(Pi);$(Us.$$.fragment,e_),e_.forEach(o),Yg.forEach(o),nh=f(vd),$i=r(vd,"SPAN",{});var t_=a($i);sh=l(t_,"FlaxCLIPModel"),t_.forEach(o),vd.forEach(o),zl=f(t),z=r(t,"DIV",{class:!0});var R=a(z);$(Rs.$$.fragment,R),rh=f(R),Ks=r(R,"P",{});var bd=a(Ks);ah=l(bd,"This model inherits from "),oa=r(bd,"A",{href:!0});var o_=a(oa);ih=l(o_,"FlaxPreTrainedModel"),o_.forEach(o),lh=l(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bd.forEach(o),dh=f(R),Hs=r(R,"P",{});var Pd=a(Hs);ch=l(Pd,"This model is also a Flax Linen "),Gs=r(Pd,"A",{href:!0,rel:!0});var n_=a(Gs);ph=l(n_,"flax.linen.Module"),n_.forEach(o),mh=l(Pd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pd.forEach(o),fh=f(R),Ii=r(R,"P",{});var s_=a(Ii);hh=l(s_,"Finally, this model supports inherent JAX features such as:"),s_.forEach(o),uh=f(R),ze=r(R,"UL",{});var _n=a(ze);Ci=r(_n,"LI",{});var r_=a(Ci);Js=r(r_,"A",{href:!0,rel:!0});var a_=a(Js);gh=l(a_,"Just-In-Time (JIT) compilation"),a_.forEach(o),r_.forEach(o),_h=f(_n),yi=r(_n,"LI",{});var i_=a(yi);Xs=r(i_,"A",{href:!0,rel:!0});var l_=a(Xs);vh=l(l_,"Automatic Differentiation"),l_.forEach(o),i_.forEach(o),bh=f(_n),Ti=r(_n,"LI",{});var d_=a(Ti);Zs=r(d_,"A",{href:!0,rel:!0});var c_=a(Zs);Ph=l(c_,"Vectorization"),c_.forEach(o),d_.forEach(o),$h=f(_n),Li=r(_n,"LI",{});var p_=a(Li);Qs=r(p_,"A",{href:!0,rel:!0});var m_=a(Qs);Ih=l(m_,"Parallelization"),m_.forEach(o),p_.forEach(o),_n.forEach(o),Ch=f(R),Te=r(R,"DIV",{class:!0});var vn=a(Te);$(Ys.$$.fragment,vn),yh=f(vn),Dt=r(vn,"P",{});var ba=a(Dt);Th=l(ba,"The "),xi=r(ba,"CODE",{});var f_=a(xi);Lh=l(f_,"FlaxCLIPPreTrainedModel"),f_.forEach(o),xh=l(ba," forward method, overrides the "),wi=r(ba,"CODE",{});var h_=a(wi);wh=l(h_,"__call__"),h_.forEach(o),kh=l(ba," special method."),ba.forEach(o),Mh=f(vn),$(Uo.$$.fragment,vn),jh=f(vn),$(Ro.$$.fragment,vn),vn.forEach(o),Eh=f(R),Ko=r(R,"DIV",{class:!0});var $d=a(Ko);$(er.$$.fragment,$d),zh=f($d),$(Ho.$$.fragment,$d),$d.forEach(o),Fh=f(R),Go=r(R,"DIV",{class:!0});var Id=a(Go);$(tr.$$.fragment,Id),qh=f(Id),$(Jo.$$.fragment,Id),Id.forEach(o),R.forEach(o),Fl=f(t),At=r(t,"H2",{class:!0});var Cd=a(At);Xo=r(Cd,"A",{id:!0,class:!0,href:!0});var u_=a(Xo);ki=r(u_,"SPAN",{});var g_=a(ki);$(or.$$.fragment,g_),g_.forEach(o),u_.forEach(o),Dh=f(Cd),Mi=r(Cd,"SPAN",{});var __=a(Mi);Ah=l(__,"FlaxCLIPTextModel"),__.forEach(o),Cd.forEach(o),ql=f(t),Ot=r(t,"DIV",{class:!0});var yd=a(Ot);$(nr.$$.fragment,yd),Oh=f(yd),Le=r(yd,"DIV",{class:!0});var bn=a(Le);$(sr.$$.fragment,bn),Vh=f(bn),Vt=r(bn,"P",{});var Pa=a(Vt);Nh=l(Pa,"The "),ji=r(Pa,"CODE",{});var v_=a(ji);Sh=l(v_,"FlaxCLIPTextPreTrainedModel"),v_.forEach(o),Wh=l(Pa," forward method, overrides the "),Ei=r(Pa,"CODE",{});var b_=a(Ei);Bh=l(b_,"__call__"),b_.forEach(o),Uh=l(Pa," special method."),Pa.forEach(o),Rh=f(bn),$(Zo.$$.fragment,bn),Kh=f(bn),$(Qo.$$.fragment,bn),bn.forEach(o),yd.forEach(o),Dl=f(t),Nt=r(t,"H2",{class:!0});var Td=a(Nt);Yo=r(Td,"A",{id:!0,class:!0,href:!0});var P_=a(Yo);zi=r(P_,"SPAN",{});var $_=a(zi);$(rr.$$.fragment,$_),$_.forEach(o),P_.forEach(o),Hh=f(Td),Fi=r(Td,"SPAN",{});var I_=a(Fi);Gh=l(I_,"FlaxCLIPVisionModel"),I_.forEach(o),Td.forEach(o),Al=f(t),St=r(t,"DIV",{class:!0});var Ld=a(St);$(ar.$$.fragment,Ld),Jh=f(Ld),xe=r(Ld,"DIV",{class:!0});var Pn=a(xe);$(ir.$$.fragment,Pn),Xh=f(Pn),Wt=r(Pn,"P",{});var $a=a(Wt);Zh=l($a,"The "),qi=r($a,"CODE",{});var C_=a(qi);Qh=l(C_,"FlaxCLIPVisionPreTrainedModel"),C_.forEach(o),Yh=l($a," forward method, overrides the "),Di=r($a,"CODE",{});var y_=a(Di);eu=l(y_,"__call__"),y_.forEach(o),tu=l($a," special method."),$a.forEach(o),ou=f(Pn),$(en.$$.fragment,Pn),nu=f(Pn),$(tn.$$.fragment,Pn),Pn.forEach(o),Ld.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(dv)),h(p,"id","clip"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#clip"),h(u,"class","relative group"),h(ie,"id","overview"),h(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ie,"href","#overview"),h(K,"class","relative group"),h(ke,"href","https://arxiv.org/abs/2103.00020"),h(ke,"rel","nofollow"),h(S,"id","usage"),h(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(S,"href","#usage"),h(F,"class","relative group"),h(Ae,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(pe,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer"),h(H,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPProcessor"),h(Oe,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(E,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizer"),h(et,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPProcessor"),h(tt,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPModel"),h(Ne,"href","https://huggingface.co/valhalla"),h(Ne,"rel","nofollow"),h(Se,"href","https://github.com/openai/CLIP"),h(Se,"rel","nofollow"),h(Yt,"id","transformers.CLIPConfig"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#transformers.CLIPConfig"),h(me,"class","relative group"),h(Ir,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPConfig"),h(Cr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPModel"),h(Vn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Vn,"rel","nofollow"),h(yr,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(Tr,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(Lr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPConfig"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oo,"id","transformers.CLIPTextConfig"),h(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oo,"href","#transformers.CLIPTextConfig"),h(rt,"class","relative group"),h(xr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPModel"),h(Un,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Un,"rel","nofollow"),h(wr,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(kr,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(so,"id","transformers.CLIPVisionConfig"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.CLIPVisionConfig"),h(lt,"class","relative group"),h(Mr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPModel"),h(Hn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Hn,"rel","nofollow"),h(jr,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(Er,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ao,"id","transformers.CLIPTokenizer"),h(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ao,"href","#transformers.CLIPTokenizer"),h(pt,"class","relative group"),h(zr,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(co,"id","transformers.CLIPTokenizerFast"),h(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(co,"href","#transformers.CLIPTokenizerFast"),h(mt,"class","relative group"),h(Dr,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mo,"id","transformers.CLIPFeatureExtractor"),h(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mo,"href","#transformers.CLIPFeatureExtractor"),h(ft,"class","relative group"),h(Or,"href","/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin"),h(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fo,"id","transformers.CLIPProcessor"),h(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fo,"href","#transformers.CLIPProcessor"),h(ht,"class","relative group"),h(Vr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPProcessor"),h(Nr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(Sr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTokenizerFast"),h(Wr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPProcessor.decode"),h(Br,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),h(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ur,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),h(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(go,"id","transformers.CLIPModel"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.CLIPModel"),h(ut,"class","relative group"),h(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ps,"rel","nofollow"),h(Rr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPModel"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPModel"),h(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Hr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPModel"),h(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Co,"id","transformers.CLIPTextModel"),h(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Co,"href","#transformers.CLIPTextModel"),h(bt,"class","relative group"),h(Gr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPTextModel"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"id","transformers.CLIPVisionModel"),h(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lo,"href","#transformers.CLIPVisionModel"),h(It,"class","relative group"),h(Jr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.CLIPVisionModel"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ko,"id","transformers.TFCLIPModel"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.TFCLIPModel"),h(Tt,"class","relative group"),h(Xr,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Fs,"rel","nofollow"),h(Zr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPModel"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPModel"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yr,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPModel"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ao,"id","transformers.TFCLIPTextModel"),h(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ao,"href","#transformers.TFCLIPTextModel"),h(kt,"class","relative group"),h(ea,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPTextModel"),h(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(No,"id","transformers.TFCLIPVisionModel"),h(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(No,"href","#transformers.TFCLIPVisionModel"),h(Et,"class","relative group"),h(ta,"href","/docs/transformers/v4.24.0/en/model_doc/clip#transformers.TFCLIPVisionModel"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bo,"id","transformers.FlaxCLIPModel"),h(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bo,"href","#transformers.FlaxCLIPModel"),h(qt,"class","relative group"),h(oa,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Gs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Gs,"rel","nofollow"),h(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Js,"rel","nofollow"),h(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Xs,"rel","nofollow"),h(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Zs,"rel","nofollow"),h(Qs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Qs,"rel","nofollow"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xo,"id","transformers.FlaxCLIPTextModel"),h(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xo,"href","#transformers.FlaxCLIPTextModel"),h(At,"class","relative group"),h(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yo,"id","transformers.FlaxCLIPVisionModel"),h(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yo,"href","#transformers.FlaxCLIPVisionModel"),h(Nt,"class","relative group"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,b,g),v(t,u,g),e(u,p),e(p,_),I(n,_,null),e(u,c),e(u,x),e(x,$n),v(t,Ut,g),v(t,K,g),e(K,ie),e(ie,qe),I(j,qe,null),e(K,In),e(K,we),e(we,Cn),v(t,Rt,g),v(t,Q,g),e(Q,yn),e(Q,ke),e(ke,He),e(Q,Tn),v(t,Kt,g),v(t,le,g),e(le,Ln),v(t,Ht,g),v(t,de,g),e(de,Ge),e(Ge,xn),v(t,Je,g),v(t,F,g),e(F,S),e(S,Xe),I(se,Xe,null),e(F,wn),e(F,Ze),e(Ze,Qe),v(t,Gt,g),v(t,De,g),e(De,ce),v(t,Jt,g),v(t,Y,g),e(Y,kn),e(Y,Ae),e(Ae,Ye),e(Y,Mn),v(t,Xt,g),v(t,M,g),e(M,jn),e(M,pe),e(pe,En),e(M,Zt),e(M,H),e(H,zn),e(M,Me),e(M,Oe),e(Oe,Fn),e(M,k),e(M,E),e(E,ur),e(M,Qt),e(M,et),e(et,gr),e(M,B),e(M,tt),e(tt,_r),e(M,vr),v(t,qn,g),I(Ve,t,g),v(t,je,g),v(t,U,g),e(U,br),e(U,Ne),e(Ne,ot),e(U,Pr),e(U,Se),e(Se,Dn),e(U,$r),v(t,nt,g),v(t,me,g),e(me,Yt),e(Yt,Ia),I(An,Ia,null),e(me,xd),e(me,Ca),e(Ca,wd),v(t,il,g),v(t,G,g),I(On,G,null),e(G,kd),e(G,We),e(We,Ir),e(Ir,Md),e(We,jd),e(We,Cr),e(Cr,Ed),e(We,zd),e(We,Vn),e(Vn,Fd),e(We,qd),e(G,Dd),e(G,st),e(st,Ad),e(st,yr),e(yr,Od),e(st,Vd),e(st,Tr),e(Tr,Nd),e(st,Sd),e(G,Wd),I(eo,G,null),e(G,Bd),e(G,to),I(Nn,to,null),e(to,Ud),e(to,Sn),e(Sn,Rd),e(Sn,Lr),e(Lr,Kd),e(Sn,Hd),v(t,ll,g),v(t,rt,g),e(rt,oo),e(oo,ya),I(Wn,ya,null),e(rt,Gd),e(rt,Ta),e(Ta,Jd),v(t,dl,g),v(t,re,g),I(Bn,re,null),e(re,Xd),e(re,at),e(at,Zd),e(at,xr),e(xr,Qd),e(at,Yd),e(at,Un),e(Un,ec),e(at,tc),e(re,oc),e(re,it),e(it,nc),e(it,wr),e(wr,sc),e(it,rc),e(it,kr),e(kr,ac),e(it,ic),e(re,lc),I(no,re,null),v(t,cl,g),v(t,lt,g),e(lt,so),e(so,La),I(Rn,La,null),e(lt,dc),e(lt,xa),e(xa,cc),v(t,pl,g),v(t,ae,g),I(Kn,ae,null),e(ae,pc),e(ae,dt),e(dt,mc),e(dt,Mr),e(Mr,fc),e(dt,hc),e(dt,Hn),e(Hn,uc),e(dt,gc),e(ae,_c),e(ae,ct),e(ct,vc),e(ct,jr),e(jr,bc),e(ct,Pc),e(ct,Er),e(Er,$c),e(ct,Ic),e(ae,Cc),I(ro,ae,null),v(t,ml,g),v(t,pt,g),e(pt,ao),e(ao,wa),I(Gn,wa,null),e(pt,yc),e(pt,ka),e(ka,Tc),v(t,fl,g),v(t,q,g),I(Jn,q,null),e(q,Lc),e(q,Ma),e(Ma,xc),e(q,wc),e(q,Xn),e(Xn,kc),e(Xn,zr),e(zr,Mc),e(Xn,jc),e(q,Ec),e(q,fe),I(Zn,fe,null),e(fe,zc),e(fe,ja),e(ja,Fc),e(fe,qc),e(fe,Ea),e(Ea,Fr),e(Fr,Dc),e(Fr,za),e(za,Ac),e(fe,Oc),e(fe,Fa),e(Fa,Vc),e(q,Nc),e(q,io),I(Qn,io,null),e(io,Sc),e(io,Yn),e(Yn,Wc),e(Yn,qa),e(qa,Bc),e(Yn,Uc),e(q,Rc),e(q,lo),I(es,lo,null),e(lo,Kc),e(lo,Da),e(Da,Hc),e(q,Gc),e(q,qr),I(ts,qr,null),v(t,hl,g),v(t,mt,g),e(mt,co),e(co,Aa),I(os,Aa,null),e(mt,Jc),e(mt,Oa),e(Oa,Xc),v(t,ul,g),v(t,J,g),I(ns,J,null),e(J,Zc),e(J,ss),e(ss,Qc),e(ss,Va),e(Va,Yc),e(ss,ep),e(J,tp),e(J,rs),e(rs,op),e(rs,Dr),e(Dr,np),e(rs,sp),e(J,rp),e(J,he),I(as,he,null),e(he,ap),e(he,Na),e(Na,ip),e(he,lp),e(he,Sa),e(Sa,Ar),e(Ar,dp),e(Ar,Wa),e(Wa,cp),e(he,pp),e(he,Ba),e(Ba,mp),e(J,fp),e(J,po),I(is,po,null),e(po,hp),e(po,Ua),e(Ua,up),v(t,gl,g),v(t,ft,g),e(ft,mo),e(mo,Ra),I(ls,Ra,null),e(ft,gp),e(ft,Ka),e(Ka,_p),v(t,_l,g),v(t,Ee,g),I(ds,Ee,null),e(Ee,vp),e(Ee,Ha),e(Ha,bp),e(Ee,Pp),e(Ee,cs),e(cs,$p),e(cs,Or),e(Or,Ip),e(cs,Cp),v(t,vl,g),v(t,ht,g),e(ht,fo),e(fo,Ga),I(ps,Ga,null),e(ht,yp),e(ht,Ja),e(Ja,Tp),v(t,bl,g),v(t,X,g),I(ms,X,null),e(X,Lp),e(X,Xa),e(Xa,xp),e(X,wp),e(X,ee),e(ee,Vr),e(Vr,kp),e(ee,Mp),e(ee,Nr),e(Nr,jp),e(ee,Ep),e(ee,Sr),e(Sr,zp),e(ee,Fp),e(ee,Za),e(Za,qp),e(ee,Dp),e(ee,Wr),e(Wr,Ap),e(ee,Op),e(X,Vp),e(X,ho),I(fs,ho,null),e(ho,Np),e(ho,hs),e(hs,Sp),e(hs,Br),e(Br,Wp),e(hs,Bp),e(X,Up),e(X,uo),I(us,uo,null),e(uo,Rp),e(uo,gs),e(gs,Kp),e(gs,Ur),e(Ur,Hp),e(gs,Gp),v(t,Pl,g),v(t,ut,g),e(ut,go),e(go,Qa),I(_s,Qa,null),e(ut,Jp),e(ut,Ya),e(Ya,Xp),v(t,$l,g),v(t,Z,g),I(vs,Z,null),e(Z,Zp),e(Z,bs),e(bs,Qp),e(bs,Ps),e(Ps,Yp),e(bs,em),e(Z,tm),e(Z,ue),I($s,ue,null),e(ue,om),e(ue,gt),e(gt,nm),e(gt,Rr),e(Rr,sm),e(gt,rm),e(gt,ei),e(ei,am),e(gt,im),e(ue,lm),I(_o,ue,null),e(ue,dm),I(vo,ue,null),e(Z,cm),e(Z,ge),I(Is,ge,null),e(ge,pm),e(ge,_t),e(_t,mm),e(_t,Kr),e(Kr,fm),e(_t,hm),e(_t,ti),e(ti,um),e(_t,gm),e(ge,_m),I(bo,ge,null),e(ge,vm),I(Po,ge,null),e(Z,bm),e(Z,_e),I(Cs,_e,null),e(_e,Pm),e(_e,vt),e(vt,$m),e(vt,Hr),e(Hr,Im),e(vt,Cm),e(vt,oi),e(oi,ym),e(vt,Tm),e(_e,Lm),I($o,_e,null),e(_e,xm),I(Io,_e,null),v(t,Il,g),v(t,bt,g),e(bt,Co),e(Co,ni),I(ys,ni,null),e(bt,wm),e(bt,si),e(si,km),v(t,Cl,g),v(t,Pt,g),I(Ts,Pt,null),e(Pt,Mm),e(Pt,ve),I(Ls,ve,null),e(ve,jm),e(ve,$t),e($t,Em),e($t,Gr),e(Gr,zm),e($t,Fm),e($t,ri),e(ri,qm),e($t,Dm),e(ve,Am),I(yo,ve,null),e(ve,Om),I(To,ve,null),v(t,yl,g),v(t,It,g),e(It,Lo),e(Lo,ai),I(xs,ai,null),e(It,Vm),e(It,ii),e(ii,Nm),v(t,Tl,g),v(t,Ct,g),I(ws,Ct,null),e(Ct,Sm),e(Ct,be),I(ks,be,null),e(be,Wm),e(be,yt),e(yt,Bm),e(yt,Jr),e(Jr,Um),e(yt,Rm),e(yt,li),e(li,Km),e(yt,Hm),e(be,Gm),I(xo,be,null),e(be,Jm),I(wo,be,null),v(t,Ll,g),v(t,Tt,g),e(Tt,ko),e(ko,di),I(Ms,di,null),e(Tt,Xm),e(Tt,ci),e(ci,Zm),v(t,xl,g),v(t,D,g),I(js,D,null),e(D,Qm),e(D,Es),e(Es,Ym),e(Es,Xr),e(Xr,ef),e(Es,tf),e(D,of),e(D,zs),e(zs,nf),e(zs,Fs),e(Fs,sf),e(zs,rf),e(D,af),I(Mo,D,null),e(D,lf),e(D,Pe),I(qs,Pe,null),e(Pe,df),e(Pe,Lt),e(Lt,cf),e(Lt,Zr),e(Zr,pf),e(Lt,mf),e(Lt,pi),e(pi,ff),e(Lt,hf),e(Pe,uf),I(jo,Pe,null),e(Pe,gf),I(Eo,Pe,null),e(D,_f),e(D,$e),I(Ds,$e,null),e($e,vf),e($e,xt),e(xt,bf),e(xt,Qr),e(Qr,Pf),e(xt,$f),e(xt,mi),e(mi,If),e(xt,Cf),e($e,yf),I(zo,$e,null),e($e,Tf),I(Fo,$e,null),e(D,Lf),e(D,Ie),I(As,Ie,null),e(Ie,xf),e(Ie,wt),e(wt,wf),e(wt,Yr),e(Yr,kf),e(wt,Mf),e(wt,fi),e(fi,jf),e(wt,Ef),e(Ie,zf),I(qo,Ie,null),e(Ie,Ff),I(Do,Ie,null),v(t,wl,g),v(t,kt,g),e(kt,Ao),e(Ao,hi),I(Os,hi,null),e(kt,qf),e(kt,ui),e(ui,Df),v(t,kl,g),v(t,Mt,g),I(Vs,Mt,null),e(Mt,Af),e(Mt,Ce),I(Ns,Ce,null),e(Ce,Of),e(Ce,jt),e(jt,Vf),e(jt,ea),e(ea,Nf),e(jt,Sf),e(jt,gi),e(gi,Wf),e(jt,Bf),e(Ce,Uf),I(Oo,Ce,null),e(Ce,Rf),I(Vo,Ce,null),v(t,Ml,g),v(t,Et,g),e(Et,No),e(No,_i),I(Ss,_i,null),e(Et,Kf),e(Et,vi),e(vi,Hf),v(t,jl,g),v(t,zt,g),I(Ws,zt,null),e(zt,Gf),e(zt,ye),I(Bs,ye,null),e(ye,Jf),e(ye,Ft),e(Ft,Xf),e(Ft,ta),e(ta,Zf),e(Ft,Qf),e(Ft,bi),e(bi,Yf),e(Ft,eh),e(ye,th),I(So,ye,null),e(ye,oh),I(Wo,ye,null),v(t,El,g),v(t,qt,g),e(qt,Bo),e(Bo,Pi),I(Us,Pi,null),e(qt,nh),e(qt,$i),e($i,sh),v(t,zl,g),v(t,z,g),I(Rs,z,null),e(z,rh),e(z,Ks),e(Ks,ah),e(Ks,oa),e(oa,ih),e(Ks,lh),e(z,dh),e(z,Hs),e(Hs,ch),e(Hs,Gs),e(Gs,ph),e(Hs,mh),e(z,fh),e(z,Ii),e(Ii,hh),e(z,uh),e(z,ze),e(ze,Ci),e(Ci,Js),e(Js,gh),e(ze,_h),e(ze,yi),e(yi,Xs),e(Xs,vh),e(ze,bh),e(ze,Ti),e(Ti,Zs),e(Zs,Ph),e(ze,$h),e(ze,Li),e(Li,Qs),e(Qs,Ih),e(z,Ch),e(z,Te),I(Ys,Te,null),e(Te,yh),e(Te,Dt),e(Dt,Th),e(Dt,xi),e(xi,Lh),e(Dt,xh),e(Dt,wi),e(wi,wh),e(Dt,kh),e(Te,Mh),I(Uo,Te,null),e(Te,jh),I(Ro,Te,null),e(z,Eh),e(z,Ko),I(er,Ko,null),e(Ko,zh),I(Ho,Ko,null),e(z,Fh),e(z,Go),I(tr,Go,null),e(Go,qh),I(Jo,Go,null),v(t,Fl,g),v(t,At,g),e(At,Xo),e(Xo,ki),I(or,ki,null),e(At,Dh),e(At,Mi),e(Mi,Ah),v(t,ql,g),v(t,Ot,g),I(nr,Ot,null),e(Ot,Oh),e(Ot,Le),I(sr,Le,null),e(Le,Vh),e(Le,Vt),e(Vt,Nh),e(Vt,ji),e(ji,Sh),e(Vt,Wh),e(Vt,Ei),e(Ei,Bh),e(Vt,Uh),e(Le,Rh),I(Zo,Le,null),e(Le,Kh),I(Qo,Le,null),v(t,Dl,g),v(t,Nt,g),e(Nt,Yo),e(Yo,zi),I(rr,zi,null),e(Nt,Hh),e(Nt,Fi),e(Fi,Gh),v(t,Al,g),v(t,St,g),I(ar,St,null),e(St,Jh),e(St,xe),I(ir,xe,null),e(xe,Xh),e(xe,Wt),e(Wt,Zh),e(Wt,qi),e(qi,Qh),e(Wt,Yh),e(Wt,Di),e(Di,eu),e(Wt,tu),e(xe,ou),I(en,xe,null),e(xe,nu),I(tn,xe,null),Ol=!0},p(t,[g]){const lr={};g&2&&(lr.$$scope={dirty:g,ctx:t}),eo.$set(lr);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:t}),no.$set(Ai);const Oi={};g&2&&(Oi.$$scope={dirty:g,ctx:t}),ro.$set(Oi);const Vi={};g&2&&(Vi.$$scope={dirty:g,ctx:t}),_o.$set(Vi);const dr={};g&2&&(dr.$$scope={dirty:g,ctx:t}),vo.$set(dr);const Ni={};g&2&&(Ni.$$scope={dirty:g,ctx:t}),bo.$set(Ni);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:t}),Po.$set(Si);const Wi={};g&2&&(Wi.$$scope={dirty:g,ctx:t}),$o.$set(Wi);const cr={};g&2&&(cr.$$scope={dirty:g,ctx:t}),Io.$set(cr);const Bi={};g&2&&(Bi.$$scope={dirty:g,ctx:t}),yo.$set(Bi);const Ui={};g&2&&(Ui.$$scope={dirty:g,ctx:t}),To.$set(Ui);const Ri={};g&2&&(Ri.$$scope={dirty:g,ctx:t}),xo.$set(Ri);const Ki={};g&2&&(Ki.$$scope={dirty:g,ctx:t}),wo.$set(Ki);const pr={};g&2&&(pr.$$scope={dirty:g,ctx:t}),Mo.$set(pr);const Hi={};g&2&&(Hi.$$scope={dirty:g,ctx:t}),jo.$set(Hi);const Gi={};g&2&&(Gi.$$scope={dirty:g,ctx:t}),Eo.$set(Gi);const Ji={};g&2&&(Ji.$$scope={dirty:g,ctx:t}),zo.$set(Ji);const Xi={};g&2&&(Xi.$$scope={dirty:g,ctx:t}),Fo.$set(Xi);const mr={};g&2&&(mr.$$scope={dirty:g,ctx:t}),qo.$set(mr);const Zi={};g&2&&(Zi.$$scope={dirty:g,ctx:t}),Do.$set(Zi);const W={};g&2&&(W.$$scope={dirty:g,ctx:t}),Oo.$set(W);const Qi={};g&2&&(Qi.$$scope={dirty:g,ctx:t}),Vo.$set(Qi);const Yi={};g&2&&(Yi.$$scope={dirty:g,ctx:t}),So.$set(Yi);const el={};g&2&&(el.$$scope={dirty:g,ctx:t}),Wo.$set(el);const tl={};g&2&&(tl.$$scope={dirty:g,ctx:t}),Uo.$set(tl);const ol={};g&2&&(ol.$$scope={dirty:g,ctx:t}),Ro.$set(ol);const nl={};g&2&&(nl.$$scope={dirty:g,ctx:t}),Ho.$set(nl);const Bt={};g&2&&(Bt.$$scope={dirty:g,ctx:t}),Jo.$set(Bt);const sl={};g&2&&(sl.$$scope={dirty:g,ctx:t}),Zo.$set(sl);const rl={};g&2&&(rl.$$scope={dirty:g,ctx:t}),Qo.$set(rl);const fr={};g&2&&(fr.$$scope={dirty:g,ctx:t}),en.$set(fr);const al={};g&2&&(al.$$scope={dirty:g,ctx:t}),tn.$set(al)},i(t){Ol||(C(n.$$.fragment,t),C(j.$$.fragment,t),C(se.$$.fragment,t),C(Ve.$$.fragment,t),C(An.$$.fragment,t),C(On.$$.fragment,t),C(eo.$$.fragment,t),C(Nn.$$.fragment,t),C(Wn.$$.fragment,t),C(Bn.$$.fragment,t),C(no.$$.fragment,t),C(Rn.$$.fragment,t),C(Kn.$$.fragment,t),C(ro.$$.fragment,t),C(Gn.$$.fragment,t),C(Jn.$$.fragment,t),C(Zn.$$.fragment,t),C(Qn.$$.fragment,t),C(es.$$.fragment,t),C(ts.$$.fragment,t),C(os.$$.fragment,t),C(ns.$$.fragment,t),C(as.$$.fragment,t),C(is.$$.fragment,t),C(ls.$$.fragment,t),C(ds.$$.fragment,t),C(ps.$$.fragment,t),C(ms.$$.fragment,t),C(fs.$$.fragment,t),C(us.$$.fragment,t),C(_s.$$.fragment,t),C(vs.$$.fragment,t),C($s.$$.fragment,t),C(_o.$$.fragment,t),C(vo.$$.fragment,t),C(Is.$$.fragment,t),C(bo.$$.fragment,t),C(Po.$$.fragment,t),C(Cs.$$.fragment,t),C($o.$$.fragment,t),C(Io.$$.fragment,t),C(ys.$$.fragment,t),C(Ts.$$.fragment,t),C(Ls.$$.fragment,t),C(yo.$$.fragment,t),C(To.$$.fragment,t),C(xs.$$.fragment,t),C(ws.$$.fragment,t),C(ks.$$.fragment,t),C(xo.$$.fragment,t),C(wo.$$.fragment,t),C(Ms.$$.fragment,t),C(js.$$.fragment,t),C(Mo.$$.fragment,t),C(qs.$$.fragment,t),C(jo.$$.fragment,t),C(Eo.$$.fragment,t),C(Ds.$$.fragment,t),C(zo.$$.fragment,t),C(Fo.$$.fragment,t),C(As.$$.fragment,t),C(qo.$$.fragment,t),C(Do.$$.fragment,t),C(Os.$$.fragment,t),C(Vs.$$.fragment,t),C(Ns.$$.fragment,t),C(Oo.$$.fragment,t),C(Vo.$$.fragment,t),C(Ss.$$.fragment,t),C(Ws.$$.fragment,t),C(Bs.$$.fragment,t),C(So.$$.fragment,t),C(Wo.$$.fragment,t),C(Us.$$.fragment,t),C(Rs.$$.fragment,t),C(Ys.$$.fragment,t),C(Uo.$$.fragment,t),C(Ro.$$.fragment,t),C(er.$$.fragment,t),C(Ho.$$.fragment,t),C(tr.$$.fragment,t),C(Jo.$$.fragment,t),C(or.$$.fragment,t),C(nr.$$.fragment,t),C(sr.$$.fragment,t),C(Zo.$$.fragment,t),C(Qo.$$.fragment,t),C(rr.$$.fragment,t),C(ar.$$.fragment,t),C(ir.$$.fragment,t),C(en.$$.fragment,t),C(tn.$$.fragment,t),Ol=!0)},o(t){y(n.$$.fragment,t),y(j.$$.fragment,t),y(se.$$.fragment,t),y(Ve.$$.fragment,t),y(An.$$.fragment,t),y(On.$$.fragment,t),y(eo.$$.fragment,t),y(Nn.$$.fragment,t),y(Wn.$$.fragment,t),y(Bn.$$.fragment,t),y(no.$$.fragment,t),y(Rn.$$.fragment,t),y(Kn.$$.fragment,t),y(ro.$$.fragment,t),y(Gn.$$.fragment,t),y(Jn.$$.fragment,t),y(Zn.$$.fragment,t),y(Qn.$$.fragment,t),y(es.$$.fragment,t),y(ts.$$.fragment,t),y(os.$$.fragment,t),y(ns.$$.fragment,t),y(as.$$.fragment,t),y(is.$$.fragment,t),y(ls.$$.fragment,t),y(ds.$$.fragment,t),y(ps.$$.fragment,t),y(ms.$$.fragment,t),y(fs.$$.fragment,t),y(us.$$.fragment,t),y(_s.$$.fragment,t),y(vs.$$.fragment,t),y($s.$$.fragment,t),y(_o.$$.fragment,t),y(vo.$$.fragment,t),y(Is.$$.fragment,t),y(bo.$$.fragment,t),y(Po.$$.fragment,t),y(Cs.$$.fragment,t),y($o.$$.fragment,t),y(Io.$$.fragment,t),y(ys.$$.fragment,t),y(Ts.$$.fragment,t),y(Ls.$$.fragment,t),y(yo.$$.fragment,t),y(To.$$.fragment,t),y(xs.$$.fragment,t),y(ws.$$.fragment,t),y(ks.$$.fragment,t),y(xo.$$.fragment,t),y(wo.$$.fragment,t),y(Ms.$$.fragment,t),y(js.$$.fragment,t),y(Mo.$$.fragment,t),y(qs.$$.fragment,t),y(jo.$$.fragment,t),y(Eo.$$.fragment,t),y(Ds.$$.fragment,t),y(zo.$$.fragment,t),y(Fo.$$.fragment,t),y(As.$$.fragment,t),y(qo.$$.fragment,t),y(Do.$$.fragment,t),y(Os.$$.fragment,t),y(Vs.$$.fragment,t),y(Ns.$$.fragment,t),y(Oo.$$.fragment,t),y(Vo.$$.fragment,t),y(Ss.$$.fragment,t),y(Ws.$$.fragment,t),y(Bs.$$.fragment,t),y(So.$$.fragment,t),y(Wo.$$.fragment,t),y(Us.$$.fragment,t),y(Rs.$$.fragment,t),y(Ys.$$.fragment,t),y(Uo.$$.fragment,t),y(Ro.$$.fragment,t),y(er.$$.fragment,t),y(Ho.$$.fragment,t),y(tr.$$.fragment,t),y(Jo.$$.fragment,t),y(or.$$.fragment,t),y(nr.$$.fragment,t),y(sr.$$.fragment,t),y(Zo.$$.fragment,t),y(Qo.$$.fragment,t),y(rr.$$.fragment,t),y(ar.$$.fragment,t),y(ir.$$.fragment,t),y(en.$$.fragment,t),y(tn.$$.fragment,t),Ol=!1},d(t){o(d),t&&o(b),t&&o(u),T(n),t&&o(Ut),t&&o(K),T(j),t&&o(Rt),t&&o(Q),t&&o(Kt),t&&o(le),t&&o(Ht),t&&o(de),t&&o(Je),t&&o(F),T(se),t&&o(Gt),t&&o(De),t&&o(Jt),t&&o(Y),t&&o(Xt),t&&o(M),t&&o(qn),T(Ve,t),t&&o(je),t&&o(U),t&&o(nt),t&&o(me),T(An),t&&o(il),t&&o(G),T(On),T(eo),T(Nn),t&&o(ll),t&&o(rt),T(Wn),t&&o(dl),t&&o(re),T(Bn),T(no),t&&o(cl),t&&o(lt),T(Rn),t&&o(pl),t&&o(ae),T(Kn),T(ro),t&&o(ml),t&&o(pt),T(Gn),t&&o(fl),t&&o(q),T(Jn),T(Zn),T(Qn),T(es),T(ts),t&&o(hl),t&&o(mt),T(os),t&&o(ul),t&&o(J),T(ns),T(as),T(is),t&&o(gl),t&&o(ft),T(ls),t&&o(_l),t&&o(Ee),T(ds),t&&o(vl),t&&o(ht),T(ps),t&&o(bl),t&&o(X),T(ms),T(fs),T(us),t&&o(Pl),t&&o(ut),T(_s),t&&o($l),t&&o(Z),T(vs),T($s),T(_o),T(vo),T(Is),T(bo),T(Po),T(Cs),T($o),T(Io),t&&o(Il),t&&o(bt),T(ys),t&&o(Cl),t&&o(Pt),T(Ts),T(Ls),T(yo),T(To),t&&o(yl),t&&o(It),T(xs),t&&o(Tl),t&&o(Ct),T(ws),T(ks),T(xo),T(wo),t&&o(Ll),t&&o(Tt),T(Ms),t&&o(xl),t&&o(D),T(js),T(Mo),T(qs),T(jo),T(Eo),T(Ds),T(zo),T(Fo),T(As),T(qo),T(Do),t&&o(wl),t&&o(kt),T(Os),t&&o(kl),t&&o(Mt),T(Vs),T(Ns),T(Oo),T(Vo),t&&o(Ml),t&&o(Et),T(Ss),t&&o(jl),t&&o(zt),T(Ws),T(Bs),T(So),T(Wo),t&&o(El),t&&o(qt),T(Us),t&&o(zl),t&&o(z),T(Rs),T(Ys),T(Uo),T(Ro),T(er),T(Ho),T(tr),T(Jo),t&&o(Fl),t&&o(At),T(or),t&&o(ql),t&&o(Ot),T(nr),T(sr),T(Zo),T(Qo),t&&o(Dl),t&&o(Nt),T(rr),t&&o(Al),t&&o(St),T(ar),T(ir),T(en),T(tn)}}}const dv={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function cv(L){return k_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _v extends T_{constructor(d){super();L_(this,d,cv,lv,x_,{})}}export{_v as default,dv as metadata};
