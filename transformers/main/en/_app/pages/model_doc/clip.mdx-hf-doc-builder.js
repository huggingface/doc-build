import{S as T_,i as L_,s as x_,e as s,k as m,w as P,t as i,M as w_,c as a,d as o,m as f,a as r,x as $,h as l,b as h,G as e,g as v,y as I,q as C,o as y,B as T,v as k_,L as N}from"../../chunks/vendor-hf-doc-builder.js";import{T as ne}from"../../chunks/Tip-hf-doc-builder.js";import{D as w}from"../../chunks/Docstring-hf-doc-builder.js";import{C as O}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as A}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as V}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function M_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPConfig, CLIPModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>config = CLIPConfig.from_text_vision_configs(config_text, config_vision)`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function j_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTextConfig, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function E_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPVisionConfig, CLIPVisionModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function z_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function q_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function D_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function A_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function V_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function S_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function B_(L){let d,b,u,p,_,n,c,x,$n,Ut,K,ie,qe,j,In,we,Cn,Rt,Q,yn,ke,He,Tn,Kt,le,Ln,Ht,de,Ge,xn,Je,F,S,Xe,se,wn,Ze,Qe,Gt,De,ce,Jt,Y,kn,Ae,Ye,Mn,Xt,M,jn,pe,En,Zt,H,zn,Me,Oe,Fn;return{c(){d=s("p"),b=i("TensorFlow models and layers in "),u=s("code"),p=i("transformers"),_=i(" accept two formats as input:"),n=m(),c=s("ul"),x=s("li"),$n=i("having all inputs as keyword arguments (like PyTorch models), or"),Ut=m(),K=s("li"),ie=i("having all inputs as a list, tuple or dict in the first positional argument."),qe=m(),j=s("p"),In=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),we=s("code"),Cn=i("model.fit()"),Rt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=s("code"),yn=i("model.fit()"),ke=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),He=s("code"),Tn=i("fit()"),Kt=i(" and "),le=s("code"),Ln=i("predict()"),Ht=i(`, such as when creating your own layers or models with
the Keras `),de=s("code"),Ge=i("Functional"),xn=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Je=m(),F=s("ul"),S=s("li"),Xe=i("a single Tensor with "),se=s("code"),wn=i("input_ids"),Ze=i(" only and nothing else: "),Qe=s("code"),Gt=i("model(input_ids)"),De=m(),ce=s("li"),Jt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s("code"),kn=i("model([input_ids, attention_mask])"),Ae=i(" or "),Ye=s("code"),Mn=i("model([input_ids, attention_mask, token_type_ids])"),Xt=m(),M=s("li"),jn=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=s("code"),En=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Zt=m(),H=s("p"),zn=i(`Note that when creating models and layers with
`),Me=s("a"),Oe=i("subclassing"),Fn=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=a(k,"P",{});var E=r(d);b=l(E,"TensorFlow models and layers in "),u=a(E,"CODE",{});var ua=r(u);p=l(ua,"transformers"),ua.forEach(o),_=l(E," accept two formats as input:"),E.forEach(o),n=f(k),c=a(k,"UL",{});var Qt=r(c);x=a(Qt,"LI",{});var et=r(x);$n=l(et,"having all inputs as keyword arguments (like PyTorch models), or"),et.forEach(o),Ut=f(Qt),K=a(Qt,"LI",{});var ga=r(K);ie=l(ga,"having all inputs as a list, tuple or dict in the first positional argument."),ga.forEach(o),Qt.forEach(o),qe=f(k),j=a(k,"P",{});var B=r(j);In=l(B,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),we=a(B,"CODE",{});var tt=r(we);Cn=l(tt,"model.fit()"),tt.forEach(o),Rt=l(B,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a(B,"CODE",{});var _a=r(Q);yn=l(_a,"model.fit()"),_a.forEach(o),ke=l(B,` supports! If, however, you want to use the second
format outside of Keras methods like `),He=a(B,"CODE",{});var va=r(He);Tn=l(va,"fit()"),va.forEach(o),Kt=l(B," and "),le=a(B,"CODE",{});var qn=r(le);Ln=l(qn,"predict()"),qn.forEach(o),Ht=l(B,`, such as when creating your own layers or models with
the Keras `),de=a(B,"CODE",{});var Ve=r(de);Ge=l(Ve,"Functional"),Ve.forEach(o),xn=l(B,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),B.forEach(o),Je=f(k),F=a(k,"UL",{});var je=r(F);S=a(je,"LI",{});var U=r(S);Xe=l(U,"a single Tensor with "),se=a(U,"CODE",{});var ba=r(se);wn=l(ba,"input_ids"),ba.forEach(o),Ze=l(U," only and nothing else: "),Qe=a(U,"CODE",{});var Ne=r(Qe);Gt=l(Ne,"model(input_ids)"),Ne.forEach(o),U.forEach(o),De=f(je),ce=a(je,"LI",{});var ot=r(ce);Jt=l(ot,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(ot,"CODE",{});var Pa=r(Y);kn=l(Pa,"model([input_ids, attention_mask])"),Pa.forEach(o),Ae=l(ot," or "),Ye=a(ot,"CODE",{});var Se=r(Ye);Mn=l(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(o),ot.forEach(o),Xt=f(je),M=a(je,"LI",{});var Dn=r(M);jn=l(Dn,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=a(Dn,"CODE",{});var $a=r(pe);En=l($a,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$a.forEach(o),Dn.forEach(o),je.forEach(o),Zt=f(k),H=a(k,"P",{});var nt=r(H);zn=l(nt,`Note that when creating models and layers with
`),Me=a(nt,"A",{href:!0,rel:!0});var me=r(Me);Oe=l(me,"subclassing"),me.forEach(o),Fn=l(nt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),nt.forEach(o),this.h()},h(){h(Me,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(Me,"rel","nofollow")},m(k,E){v(k,d,E),e(d,b),e(d,u),e(u,p),e(d,_),v(k,n,E),v(k,c,E),e(c,x),e(x,$n),e(c,Ut),e(c,K),e(K,ie),v(k,qe,E),v(k,j,E),e(j,In),e(j,we),e(we,Cn),e(j,Rt),e(j,Q),e(Q,yn),e(j,ke),e(j,He),e(He,Tn),e(j,Kt),e(j,le),e(le,Ln),e(j,Ht),e(j,de),e(de,Ge),e(j,xn),v(k,Je,E),v(k,F,E),e(F,S),e(S,Xe),e(S,se),e(se,wn),e(S,Ze),e(S,Qe),e(Qe,Gt),e(F,De),e(F,ce),e(ce,Jt),e(ce,Y),e(Y,kn),e(ce,Ae),e(ce,Ye),e(Ye,Mn),e(F,Xt),e(F,M),e(M,jn),e(M,pe),e(pe,En),v(k,Zt,E),v(k,H,E),e(H,zn),e(H,Me),e(Me,Oe),e(H,Fn)},d(k){k&&o(d),k&&o(n),k&&o(c),k&&o(qe),k&&o(j),k&&o(Je),k&&o(F),k&&o(Zt),k&&o(H)}}}function U_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function K_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function H_(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function G_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function X_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function Q_(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function ev(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function ov(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function nv(L){let d,b,u,p,_;return p=new O({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function sv(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function av(L){let d,b,u,p,_;return p=new O({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function rv(L){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(c,"CODE",{});var x=r(u);p=l(x,"Module"),x.forEach(o),_=l(c,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),T(p,n)}}}function lv(L){let d,b,u,p,_,n,c,x,$n,Ut,K,ie,qe,j,In,we,Cn,Rt,Q,yn,ke,He,Tn,Kt,le,Ln,Ht,de,Ge,xn,Je,F,S,Xe,se,wn,Ze,Qe,Gt,De,ce,Jt,Y,kn,Ae,Ye,Mn,Xt,M,jn,pe,En,Zt,H,zn,Me,Oe,Fn,k,E,ua,Qt,et,ga,B,tt,_a,va,qn,Ve,je,U,ba,Ne,ot,Pa,Se,Dn,$a,nt,me,Yt,Ir,An,xd,Cr,wd,il,G,On,kd,We,Ia,Md,jd,Ca,Ed,zd,Vn,Fd,qd,Dd,st,Ad,ya,Od,Vd,Ta,Nd,Sd,Wd,eo,Bd,to,Nn,Ud,Sn,Rd,La,Kd,Hd,ll,at,oo,yr,Wn,Gd,Tr,Jd,dl,ae,Bn,Xd,rt,Zd,xa,Qd,Yd,Un,ec,tc,oc,it,nc,wa,sc,ac,ka,rc,ic,lc,no,cl,lt,so,Lr,Rn,dc,xr,cc,pl,re,Kn,pc,dt,mc,Ma,fc,hc,Hn,uc,gc,_c,ct,vc,ja,bc,Pc,Ea,$c,Ic,Cc,ao,ml,pt,ro,wr,Gn,yc,kr,Tc,fl,q,Jn,Lc,Mr,xc,wc,Xn,kc,za,Mc,jc,Ec,fe,Zn,zc,jr,Fc,qc,Er,Fa,Dc,zr,Ac,Oc,Fr,Vc,Nc,io,Qn,Sc,Yn,Wc,qr,Bc,Uc,Rc,lo,es,Kc,Dr,Hc,Gc,qa,ts,hl,mt,co,Ar,os,Jc,Or,Xc,ul,J,ns,Zc,ss,Qc,Vr,Yc,ep,tp,as,op,Da,np,sp,ap,he,rs,rp,Nr,ip,lp,Sr,Aa,dp,Wr,cp,pp,Br,mp,fp,po,is,hp,Ur,up,gl,ft,mo,Rr,ls,gp,Kr,_p,_l,Ee,ds,vp,Hr,bp,Pp,cs,$p,Oa,Ip,Cp,vl,ht,fo,Gr,ps,yp,Jr,Tp,bl,X,ms,Lp,Xr,xp,wp,ee,Va,kp,Mp,Na,jp,Ep,Sa,zp,Fp,Zr,qp,Dp,Wa,Ap,Op,Vp,ho,fs,Np,hs,Sp,Ba,Wp,Bp,Up,uo,us,Rp,gs,Kp,Ua,Hp,Gp,Pl,ut,go,Qr,_s,Jp,Yr,Xp,$l,Z,vs,Zp,bs,Qp,Ps,Yp,em,tm,ue,$s,om,gt,nm,Ra,sm,am,ei,rm,im,lm,_o,dm,vo,cm,ge,Is,pm,_t,mm,Ka,fm,hm,ti,um,gm,_m,bo,vm,Po,bm,_e,Cs,Pm,vt,$m,Ha,Im,Cm,oi,ym,Tm,Lm,$o,xm,Io,Il,bt,Co,ni,ys,wm,si,km,Cl,Pt,Ts,Mm,ve,Ls,jm,$t,Em,Ga,zm,Fm,ai,qm,Dm,Am,yo,Om,To,yl,It,Lo,ri,xs,Vm,ii,Nm,Tl,Ct,ws,Sm,be,ks,Wm,yt,Bm,Ja,Um,Rm,li,Km,Hm,Gm,xo,Jm,wo,Ll,Tt,ko,di,Ms,Xm,ci,Zm,xl,D,js,Qm,Es,Ym,Xa,ef,tf,of,zs,nf,Fs,sf,af,rf,Mo,lf,Pe,qs,df,Lt,cf,Za,pf,mf,pi,ff,hf,uf,jo,gf,Eo,_f,$e,Ds,vf,xt,bf,Qa,Pf,$f,mi,If,Cf,yf,zo,Tf,Fo,Lf,Ie,As,xf,wt,wf,Ya,kf,Mf,fi,jf,Ef,zf,qo,Ff,Do,wl,kt,Ao,hi,Os,qf,ui,Df,kl,Mt,Vs,Af,Ce,Ns,Of,jt,Vf,er,Nf,Sf,gi,Wf,Bf,Uf,Oo,Rf,Vo,Ml,Et,No,_i,Ss,Kf,vi,Hf,jl,zt,Ws,Gf,ye,Bs,Jf,Ft,Xf,tr,Zf,Qf,bi,Yf,eh,th,So,oh,Wo,El,qt,Bo,Pi,Us,nh,$i,sh,zl,z,Rs,ah,Ks,rh,or,ih,lh,dh,Hs,ch,Gs,ph,mh,fh,Ii,hh,uh,ze,Ci,Js,gh,_h,yi,Xs,vh,bh,Ti,Zs,Ph,$h,Li,Qs,Ih,Ch,Te,Ys,yh,Dt,Th,xi,Lh,xh,wi,wh,kh,Mh,Uo,jh,Ro,Eh,Ko,ea,zh,Ho,Fh,Go,ta,qh,Jo,Fl,At,Xo,ki,oa,Dh,Mi,Ah,ql,Ot,na,Oh,Le,sa,Vh,Vt,Nh,ji,Sh,Wh,Ei,Bh,Uh,Rh,Zo,Kh,Qo,Dl,Nt,Yo,zi,aa,Hh,Fi,Gh,Al,St,ra,Jh,xe,ia,Xh,Wt,Zh,qi,Qh,Yh,Di,eu,tu,ou,en,nu,tn,Ol;return n=new A({}),j=new A({}),se=new A({}),Ve=new O({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),An=new A({}),On=new w({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config",val:" = None"},{name:"vision_config",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config",description:`<strong>text_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config"},{anchor:"transformers.CLIPConfig.vision_config",description:`<strong>vision_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L254"}}),eo=new V({props:{anchor:"transformers.CLIPConfig.example",$$slots:{default:[M_]},$$scope:{ctx:L}}}),Nn=new w({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L330",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),Wn=new A({}),Bn=new w({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L40"}}),no=new V({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[j_]},$$scope:{ctx:L}}}),Rn=new A({}),Kn=new w({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L148"}}),ao=new V({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[E_]},$$scope:{ctx:L}}}),Gn=new A({}),Jn=new w({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L260"}}),Zn=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L346",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new w({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L373",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),es=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L401",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new w({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L496"}}),os=new A({}),ns=new w({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),rs=new w({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),is=new w({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
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
Whether or not to convert <code>PIL.Image.Image</code> into <code>RGB</code> format`,name:"convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L32"}}),ps=new A({}),ms=new w({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22"}}),fs=new w({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),us=new w({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),_s=new A({}),vs=new w({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L854"}}),$s=new w({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),_o=new ne({props:{$$slots:{default:[z_]},$$scope:{ctx:L}}}),vo=new V({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[F_]},$$scope:{ctx:L}}}),Is=new w({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),bo=new ne({props:{$$slots:{default:[q_]},$$scope:{ctx:L}}}),Po=new V({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[D_]},$$scope:{ctx:L}}}),Cs=new w({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),$o=new ne({props:{$$slots:{default:[A_]},$$scope:{ctx:L}}}),Io=new V({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[O_]},$$scope:{ctx:L}}}),ys=new A({}),Ts=new w({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L688"}}),Ls=new w({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),yo=new ne({props:{$$slots:{default:[V_]},$$scope:{ctx:L}}}),To=new V({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[N_]},$$scope:{ctx:L}}}),xs=new A({}),ws=new w({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L801"}}),ks=new w({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),xo=new ne({props:{$$slots:{default:[S_]},$$scope:{ctx:L}}}),wo=new V({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[W_]},$$scope:{ctx:L}}}),Ms=new A({}),js=new w({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1229"}}),Mo=new ne({props:{$$slots:{default:[B_]},$$scope:{ctx:L}}}),qs=new w({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
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
`}}),jo=new ne({props:{$$slots:{default:[U_]},$$scope:{ctx:L}}}),Eo=new V({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[R_]},$$scope:{ctx:L}}}),Ds=new w({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),zo=new ne({props:{$$slots:{default:[K_]},$$scope:{ctx:L}}}),Fo=new V({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[H_]},$$scope:{ctx:L}}}),As=new w({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
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
`}}),qo=new ne({props:{$$slots:{default:[G_]},$$scope:{ctx:L}}}),Do=new V({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[J_]},$$scope:{ctx:L}}}),Os=new A({}),Vs=new w({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1056"}}),Ns=new w({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Oo=new ne({props:{$$slots:{default:[X_]},$$scope:{ctx:L}}}),Vo=new V({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[Z_]},$$scope:{ctx:L}}}),Ss=new A({}),Ws=new w({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1131"}}),Bs=new w({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
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
`}}),So=new ne({props:{$$slots:{default:[Q_]},$$scope:{ctx:L}}}),Wo=new V({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[Y_]},$$scope:{ctx:L}}}),Us=new A({}),Rs=new w({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),Ys=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),Uo=new ne({props:{$$slots:{default:[ev]},$$scope:{ctx:L}}}),Ro=new V({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[tv]},$$scope:{ctx:L}}}),ea=new w({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ho=new V({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[ov]},$$scope:{ctx:L}}}),ta=new w({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Jo=new V({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[nv]},$$scope:{ctx:L}}}),oa=new A({}),na=new w({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),sa=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Zo=new ne({props:{$$slots:{default:[sv]},$$scope:{ctx:L}}}),Qo=new V({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[av]},$$scope:{ctx:L}}}),aa=new A({}),ra=new w({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),ia=new w({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),en=new ne({props:{$$slots:{default:[rv]},$$scope:{ctx:L}}}),tn=new V({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[iv]},$$scope:{ctx:L}}}),{c(){d=s("meta"),b=m(),u=s("h1"),p=s("a"),_=s("span"),P(n.$$.fragment),c=m(),x=s("span"),$n=i("CLIP"),Ut=m(),K=s("h2"),ie=s("a"),qe=s("span"),P(j.$$.fragment),In=m(),we=s("span"),Cn=i("Overview"),Rt=m(),Q=s("p"),yn=i("The CLIP model was proposed in "),ke=s("a"),He=i("Learning Transferable Visual Models From Natural Language Supervision"),Tn=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
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
`),Oe=s("a"),Fn=i("CLIPFeatureExtractor"),k=i(" and "),E=s("a"),ua=i("CLIPTokenizer"),Qt=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),et=s("a"),ga=i("CLIPProcessor"),B=i(" and "),tt=s("a"),_a=i("CLIPModel"),va=i("."),qn=m(),P(Ve.$$.fragment),je=m(),U=s("p"),ba=i("This model was contributed by "),Ne=s("a"),ot=i("valhalla"),Pa=i(". The original code can be found "),Se=s("a"),Dn=i("here"),$a=i("."),nt=m(),me=s("h2"),Yt=s("a"),Ir=s("span"),P(An.$$.fragment),xd=m(),Cr=s("span"),wd=i("CLIPConfig"),il=m(),G=s("div"),P(On.$$.fragment),kd=m(),We=s("p"),Ia=s("a"),Md=i("CLIPConfig"),jd=i(" is the configuration class to store the configuration of a "),Ca=s("a"),Ed=i("CLIPModel"),zd=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Vn=s("a"),Fd=i("openai/clip-vit-base-patch32"),qd=i(" architecture."),Dd=m(),st=s("p"),Ad=i("Configuration objects inherit from "),ya=s("a"),Od=i("PretrainedConfig"),Vd=i(` and can be used to control the model outputs. Read the
documentation from `),Ta=s("a"),Nd=i("PretrainedConfig"),Sd=i(" for more information."),Wd=m(),P(eo.$$.fragment),Bd=m(),to=s("div"),P(Nn.$$.fragment),Ud=m(),Sn=s("p"),Rd=i("Instantiate a "),La=s("a"),Kd=i("CLIPConfig"),Hd=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),ll=m(),at=s("h2"),oo=s("a"),yr=s("span"),P(Wn.$$.fragment),Gd=m(),Tr=s("span"),Jd=i("CLIPTextConfig"),dl=m(),ae=s("div"),P(Bn.$$.fragment),Xd=m(),rt=s("p"),Zd=i("This is the configuration class to store the configuration of a "),xa=s("a"),Qd=i("CLIPModel"),Yd=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Un=s("a"),ec=i("openai/clip-vit-base-patch32"),tc=i(" architecture."),oc=m(),it=s("p"),nc=i("Configuration objects inherit from "),wa=s("a"),sc=i("PretrainedConfig"),ac=i(` and can be used to control the model outputs. Read the
documentation from `),ka=s("a"),rc=i("PretrainedConfig"),ic=i(" for more information."),lc=m(),P(no.$$.fragment),cl=m(),lt=s("h2"),so=s("a"),Lr=s("span"),P(Rn.$$.fragment),dc=m(),xr=s("span"),cc=i("CLIPVisionConfig"),pl=m(),re=s("div"),P(Kn.$$.fragment),pc=m(),dt=s("p"),mc=i("This is the configuration class to store the configuration of a "),Ma=s("a"),fc=i("CLIPModel"),hc=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Hn=s("a"),uc=i("openai/clip-vit-base-patch32"),gc=i(" architecture."),_c=m(),ct=s("p"),vc=i("Configuration objects inherit from "),ja=s("a"),bc=i("PretrainedConfig"),Pc=i(` and can be used to control the model outputs. Read the
documentation from `),Ea=s("a"),$c=i("PretrainedConfig"),Ic=i(" for more information."),Cc=m(),P(ao.$$.fragment),ml=m(),pt=s("h2"),ro=s("a"),wr=s("span"),P(Gn.$$.fragment),yc=m(),kr=s("span"),Tc=i("CLIPTokenizer"),fl=m(),q=s("div"),P(Jn.$$.fragment),Lc=m(),Mr=s("p"),xc=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),wc=m(),Xn=s("p"),kc=i("This tokenizer inherits from "),za=s("a"),Mc=i("PreTrainedTokenizer"),jc=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ec=m(),fe=s("div"),P(Zn.$$.fragment),zc=m(),jr=s("p"),Fc=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),qc=m(),Er=s("ul"),Fa=s("li"),Dc=i("single sequence: "),zr=s("code"),Ac=i("<|startoftext|> X <|endoftext|>"),Oc=m(),Fr=s("p"),Vc=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Nc=m(),io=s("div"),P(Qn.$$.fragment),Sc=m(),Yn=s("p"),Wc=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qr=s("code"),Bc=i("prepare_for_model"),Uc=i(" method."),Rc=m(),lo=s("div"),P(es.$$.fragment),Kc=m(),Dr=s("p"),Hc=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Gc=m(),qa=s("div"),P(ts.$$.fragment),hl=m(),mt=s("h2"),co=s("a"),Ar=s("span"),P(os.$$.fragment),Jc=m(),Or=s("span"),Xc=i("CLIPTokenizerFast"),ul=m(),J=s("div"),P(ns.$$.fragment),Zc=m(),ss=s("p"),Qc=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Vr=s("em"),Yc=i("tokenizers"),ep=i(` library). Based on byte-level
Byte-Pair-Encoding.`),tp=m(),as=s("p"),op=i("This tokenizer inherits from "),Da=s("a"),np=i("PreTrainedTokenizerFast"),sp=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ap=m(),he=s("div"),P(rs.$$.fragment),rp=m(),Nr=s("p"),ip=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),lp=m(),Sr=s("ul"),Aa=s("li"),dp=i("single sequence: "),Wr=s("code"),cp=i("<|startoftext|> X <|endoftext|>"),pp=m(),Br=s("p"),mp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),fp=m(),po=s("div"),P(is.$$.fragment),hp=m(),Ur=s("p"),up=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),gl=m(),ft=s("h2"),mo=s("a"),Rr=s("span"),P(ls.$$.fragment),gp=m(),Kr=s("span"),_p=i("CLIPFeatureExtractor"),_l=m(),Ee=s("div"),P(ds.$$.fragment),vp=m(),Hr=s("p"),bp=i("Constructs a CLIP feature extractor."),Pp=m(),cs=s("p"),$p=i("This feature extractor inherits from "),Oa=s("a"),Ip=i("FeatureExtractionMixin"),Cp=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),vl=m(),ht=s("h2"),fo=s("a"),Gr=s("span"),P(ps.$$.fragment),yp=m(),Jr=s("span"),Tp=i("CLIPProcessor"),bl=m(),X=s("div"),P(ms.$$.fragment),Lp=m(),Xr=s("p"),xp=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),wp=m(),ee=s("p"),Va=s("a"),kp=i("CLIPProcessor"),Mp=i(" offers all the functionalities of "),Na=s("a"),jp=i("CLIPFeatureExtractor"),Ep=i(" and "),Sa=s("a"),zp=i("CLIPTokenizerFast"),Fp=i(`. See the
`),Zr=s("code"),qp=i("__call__()"),Dp=i(" and "),Wa=s("a"),Ap=i("decode()"),Op=i(" for more information."),Vp=m(),ho=s("div"),P(fs.$$.fragment),Np=m(),hs=s("p"),Sp=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ba=s("a"),Wp=i("batch_decode()"),Bp=i(`. Please
refer to the docstring of this method for more information.`),Up=m(),uo=s("div"),P(us.$$.fragment),Rp=m(),gs=s("p"),Kp=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ua=s("a"),Hp=i("decode()"),Gp=i(`. Please refer to
the docstring of this method for more information.`),Pl=m(),ut=s("h2"),go=s("a"),Qr=s("span"),P(_s.$$.fragment),Jp=m(),Yr=s("span"),Xp=i("CLIPModel"),$l=m(),Z=s("div"),P(vs.$$.fragment),Zp=m(),bs=s("p"),Qp=i("This model is a PyTorch "),Ps=s("a"),Yp=i("torch.nn.Module"),em=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tm=m(),ue=s("div"),P($s.$$.fragment),om=m(),gt=s("p"),nm=i("The "),Ra=s("a"),sm=i("CLIPModel"),am=i(" forward method, overrides the "),ei=s("code"),rm=i("__call__"),im=i(" special method."),lm=m(),P(_o.$$.fragment),dm=m(),P(vo.$$.fragment),cm=m(),ge=s("div"),P(Is.$$.fragment),pm=m(),_t=s("p"),mm=i("The "),Ka=s("a"),fm=i("CLIPModel"),hm=i(" forward method, overrides the "),ti=s("code"),um=i("__call__"),gm=i(" special method."),_m=m(),P(bo.$$.fragment),vm=m(),P(Po.$$.fragment),bm=m(),_e=s("div"),P(Cs.$$.fragment),Pm=m(),vt=s("p"),$m=i("The "),Ha=s("a"),Im=i("CLIPModel"),Cm=i(" forward method, overrides the "),oi=s("code"),ym=i("__call__"),Tm=i(" special method."),Lm=m(),P($o.$$.fragment),xm=m(),P(Io.$$.fragment),Il=m(),bt=s("h2"),Co=s("a"),ni=s("span"),P(ys.$$.fragment),wm=m(),si=s("span"),km=i("CLIPTextModel"),Cl=m(),Pt=s("div"),P(Ts.$$.fragment),Mm=m(),ve=s("div"),P(Ls.$$.fragment),jm=m(),$t=s("p"),Em=i("The "),Ga=s("a"),zm=i("CLIPTextModel"),Fm=i(" forward method, overrides the "),ai=s("code"),qm=i("__call__"),Dm=i(" special method."),Am=m(),P(yo.$$.fragment),Om=m(),P(To.$$.fragment),yl=m(),It=s("h2"),Lo=s("a"),ri=s("span"),P(xs.$$.fragment),Vm=m(),ii=s("span"),Nm=i("CLIPVisionModel"),Tl=m(),Ct=s("div"),P(ws.$$.fragment),Sm=m(),be=s("div"),P(ks.$$.fragment),Wm=m(),yt=s("p"),Bm=i("The "),Ja=s("a"),Um=i("CLIPVisionModel"),Rm=i(" forward method, overrides the "),li=s("code"),Km=i("__call__"),Hm=i(" special method."),Gm=m(),P(xo.$$.fragment),Jm=m(),P(wo.$$.fragment),Ll=m(),Tt=s("h2"),ko=s("a"),di=s("span"),P(Ms.$$.fragment),Xm=m(),ci=s("span"),Zm=i("TFCLIPModel"),xl=m(),D=s("div"),P(js.$$.fragment),Qm=m(),Es=s("p"),Ym=i("This model inherits from "),Xa=s("a"),ef=i("TFPreTrainedModel"),tf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),of=m(),zs=s("p"),nf=i("This model is also a "),Fs=s("a"),sf=i("tf.keras.Model"),af=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rf=m(),P(Mo.$$.fragment),lf=m(),Pe=s("div"),P(qs.$$.fragment),df=m(),Lt=s("p"),cf=i("The "),Za=s("a"),pf=i("TFCLIPModel"),mf=i(" forward method, overrides the "),pi=s("code"),ff=i("__call__"),hf=i(" special method."),uf=m(),P(jo.$$.fragment),gf=m(),P(Eo.$$.fragment),_f=m(),$e=s("div"),P(Ds.$$.fragment),vf=m(),xt=s("p"),bf=i("The "),Qa=s("a"),Pf=i("TFCLIPModel"),$f=i(" forward method, overrides the "),mi=s("code"),If=i("__call__"),Cf=i(" special method."),yf=m(),P(zo.$$.fragment),Tf=m(),P(Fo.$$.fragment),Lf=m(),Ie=s("div"),P(As.$$.fragment),xf=m(),wt=s("p"),wf=i("The "),Ya=s("a"),kf=i("TFCLIPModel"),Mf=i(" forward method, overrides the "),fi=s("code"),jf=i("__call__"),Ef=i(" special method."),zf=m(),P(qo.$$.fragment),Ff=m(),P(Do.$$.fragment),wl=m(),kt=s("h2"),Ao=s("a"),hi=s("span"),P(Os.$$.fragment),qf=m(),ui=s("span"),Df=i("TFCLIPTextModel"),kl=m(),Mt=s("div"),P(Vs.$$.fragment),Af=m(),Ce=s("div"),P(Ns.$$.fragment),Of=m(),jt=s("p"),Vf=i("The "),er=s("a"),Nf=i("TFCLIPTextModel"),Sf=i(" forward method, overrides the "),gi=s("code"),Wf=i("__call__"),Bf=i(" special method."),Uf=m(),P(Oo.$$.fragment),Rf=m(),P(Vo.$$.fragment),Ml=m(),Et=s("h2"),No=s("a"),_i=s("span"),P(Ss.$$.fragment),Kf=m(),vi=s("span"),Hf=i("TFCLIPVisionModel"),jl=m(),zt=s("div"),P(Ws.$$.fragment),Gf=m(),ye=s("div"),P(Bs.$$.fragment),Jf=m(),Ft=s("p"),Xf=i("The "),tr=s("a"),Zf=i("TFCLIPVisionModel"),Qf=i(" forward method, overrides the "),bi=s("code"),Yf=i("__call__"),eh=i(" special method."),th=m(),P(So.$$.fragment),oh=m(),P(Wo.$$.fragment),El=m(),qt=s("h2"),Bo=s("a"),Pi=s("span"),P(Us.$$.fragment),nh=m(),$i=s("span"),sh=i("FlaxCLIPModel"),zl=m(),z=s("div"),P(Rs.$$.fragment),ah=m(),Ks=s("p"),rh=i("This model inherits from "),or=s("a"),ih=i("FlaxPreTrainedModel"),lh=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dh=m(),Hs=s("p"),ch=i("This model is also a Flax Linen "),Gs=s("a"),ph=i("flax.linen.Module"),mh=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fh=m(),Ii=s("p"),hh=i("Finally, this model supports inherent JAX features such as:"),uh=m(),ze=s("ul"),Ci=s("li"),Js=s("a"),gh=i("Just-In-Time (JIT) compilation"),_h=m(),yi=s("li"),Xs=s("a"),vh=i("Automatic Differentiation"),bh=m(),Ti=s("li"),Zs=s("a"),Ph=i("Vectorization"),$h=m(),Li=s("li"),Qs=s("a"),Ih=i("Parallelization"),Ch=m(),Te=s("div"),P(Ys.$$.fragment),yh=m(),Dt=s("p"),Th=i("The "),xi=s("code"),Lh=i("FlaxCLIPPreTrainedModel"),xh=i(" forward method, overrides the "),wi=s("code"),wh=i("__call__"),kh=i(" special method."),Mh=m(),P(Uo.$$.fragment),jh=m(),P(Ro.$$.fragment),Eh=m(),Ko=s("div"),P(ea.$$.fragment),zh=m(),P(Ho.$$.fragment),Fh=m(),Go=s("div"),P(ta.$$.fragment),qh=m(),P(Jo.$$.fragment),Fl=m(),At=s("h2"),Xo=s("a"),ki=s("span"),P(oa.$$.fragment),Dh=m(),Mi=s("span"),Ah=i("FlaxCLIPTextModel"),ql=m(),Ot=s("div"),P(na.$$.fragment),Oh=m(),Le=s("div"),P(sa.$$.fragment),Vh=m(),Vt=s("p"),Nh=i("The "),ji=s("code"),Sh=i("FlaxCLIPTextPreTrainedModel"),Wh=i(" forward method, overrides the "),Ei=s("code"),Bh=i("__call__"),Uh=i(" special method."),Rh=m(),P(Zo.$$.fragment),Kh=m(),P(Qo.$$.fragment),Dl=m(),Nt=s("h2"),Yo=s("a"),zi=s("span"),P(aa.$$.fragment),Hh=m(),Fi=s("span"),Gh=i("FlaxCLIPVisionModel"),Al=m(),St=s("div"),P(ra.$$.fragment),Jh=m(),xe=s("div"),P(ia.$$.fragment),Xh=m(),Wt=s("p"),Zh=i("The "),qi=s("code"),Qh=i("FlaxCLIPVisionPreTrainedModel"),Yh=i(" forward method, overrides the "),Di=s("code"),eu=i("__call__"),tu=i(" special method."),ou=m(),P(en.$$.fragment),nu=m(),P(tn.$$.fragment),this.h()},l(t){const g=w_('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(o),b=f(t),u=a(t,"H1",{class:!0});var la=r(u);p=a(la,"A",{id:!0,class:!0,href:!0});var Ai=r(p);_=a(Ai,"SPAN",{});var Oi=r(_);$(n.$$.fragment,Oi),Oi.forEach(o),Ai.forEach(o),c=f(la),x=a(la,"SPAN",{});var Vi=r(x);$n=l(Vi,"CLIP"),Vi.forEach(o),la.forEach(o),Ut=f(t),K=a(t,"H2",{class:!0});var da=r(K);ie=a(da,"A",{id:!0,class:!0,href:!0});var Ni=r(ie);qe=a(Ni,"SPAN",{});var Si=r(qe);$(j.$$.fragment,Si),Si.forEach(o),Ni.forEach(o),In=f(da),we=a(da,"SPAN",{});var Wi=r(we);Cn=l(Wi,"Overview"),Wi.forEach(o),da.forEach(o),Rt=f(t),Q=a(t,"P",{});var ca=r(Q);yn=l(ca,"The CLIP model was proposed in "),ke=a(ca,"A",{href:!0,rel:!0});var Bi=r(ke);He=l(Bi,"Learning Transferable Visual Models From Natural Language Supervision"),Bi.forEach(o),Tn=l(ca,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),ca.forEach(o),Kt=f(t),le=a(t,"P",{});var Ui=r(le);Ln=l(Ui,"The abstract from the paper is the following:"),Ui.forEach(o),Ht=f(t),de=a(t,"P",{});var Ri=r(de);Ge=a(Ri,"EM",{});var Ki=r(Ge);xn=l(Ki,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Ki.forEach(o),Ri.forEach(o),Je=f(t),F=a(t,"H2",{class:!0});var pa=r(F);S=a(pa,"A",{id:!0,class:!0,href:!0});var Hi=r(S);Xe=a(Hi,"SPAN",{});var Gi=r(Xe);$(se.$$.fragment,Gi),Gi.forEach(o),Hi.forEach(o),wn=f(pa),Ze=a(pa,"SPAN",{});var Ji=r(Ze);Qe=l(Ji,"Usage"),Ji.forEach(o),pa.forEach(o),Gt=f(t),De=a(t,"P",{});var Xi=r(De);ce=l(Xi,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Xi.forEach(o),Jt=f(t),Y=a(t,"P",{});var ma=r(Y);kn=l(ma,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Ae=a(ma,"A",{href:!0});var Zi=r(Ae);Ye=l(Zi,"CLIPFeatureExtractor"),Zi.forEach(o),Mn=l(ma," can be used to resize (or rescale) and normalize images for the model."),ma.forEach(o),Xt=f(t),M=a(t,"P",{});var W=r(M);jn=l(W,"The "),pe=a(W,"A",{href:!0});var Qi=r(pe);En=l(Qi,"CLIPTokenizer"),Qi.forEach(o),Zt=l(W," is used to encode the text. The "),H=a(W,"A",{href:!0});var Yi=r(H);zn=l(Yi,"CLIPProcessor"),Yi.forEach(o),Me=l(W,` wraps
`),Oe=a(W,"A",{href:!0});var el=r(Oe);Fn=l(el,"CLIPFeatureExtractor"),el.forEach(o),k=l(W," and "),E=a(W,"A",{href:!0});var tl=r(E);ua=l(tl,"CLIPTokenizer"),tl.forEach(o),Qt=l(W,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),et=a(W,"A",{href:!0});var ol=r(et);ga=l(ol,"CLIPProcessor"),ol.forEach(o),B=l(W," and "),tt=a(W,"A",{href:!0});var nl=r(tt);_a=l(nl,"CLIPModel"),nl.forEach(o),va=l(W,"."),W.forEach(o),qn=f(t),$(Ve.$$.fragment,t),je=f(t),U=a(t,"P",{});var Bt=r(U);ba=l(Bt,"This model was contributed by "),Ne=a(Bt,"A",{href:!0,rel:!0});var sl=r(Ne);ot=l(sl,"valhalla"),sl.forEach(o),Pa=l(Bt,". The original code can be found "),Se=a(Bt,"A",{href:!0,rel:!0});var al=r(Se);Dn=l(al,"here"),al.forEach(o),$a=l(Bt,"."),Bt.forEach(o),nt=f(t),me=a(t,"H2",{class:!0});var fa=r(me);Yt=a(fa,"A",{id:!0,class:!0,href:!0});var rl=r(Yt);Ir=a(rl,"SPAN",{});var ru=r(Ir);$(An.$$.fragment,ru),ru.forEach(o),rl.forEach(o),xd=f(fa),Cr=a(fa,"SPAN",{});var iu=r(Cr);wd=l(iu,"CLIPConfig"),iu.forEach(o),fa.forEach(o),il=f(t),G=a(t,"DIV",{class:!0});var Be=r(G);$(On.$$.fragment,Be),kd=f(Be),We=a(Be,"P",{});var ha=r(We);Ia=a(ha,"A",{href:!0});var lu=r(Ia);Md=l(lu,"CLIPConfig"),lu.forEach(o),jd=l(ha," is the configuration class to store the configuration of a "),Ca=a(ha,"A",{href:!0});var du=r(Ca);Ed=l(du,"CLIPModel"),du.forEach(o),zd=l(ha,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Vn=a(ha,"A",{href:!0,rel:!0});var cu=r(Vn);Fd=l(cu,"openai/clip-vit-base-patch32"),cu.forEach(o),qd=l(ha," architecture."),ha.forEach(o),Dd=f(Be),st=a(Be,"P",{});var nr=r(st);Ad=l(nr,"Configuration objects inherit from "),ya=a(nr,"A",{href:!0});var pu=r(ya);Od=l(pu,"PretrainedConfig"),pu.forEach(o),Vd=l(nr,` and can be used to control the model outputs. Read the
documentation from `),Ta=a(nr,"A",{href:!0});var mu=r(Ta);Nd=l(mu,"PretrainedConfig"),mu.forEach(o),Sd=l(nr," for more information."),nr.forEach(o),Wd=f(Be),$(eo.$$.fragment,Be),Bd=f(Be),to=a(Be,"DIV",{class:!0});var Vl=r(to);$(Nn.$$.fragment,Vl),Ud=f(Vl),Sn=a(Vl,"P",{});var Nl=r(Sn);Rd=l(Nl,"Instantiate a "),La=a(Nl,"A",{href:!0});var fu=r(La);Kd=l(fu,"CLIPConfig"),fu.forEach(o),Hd=l(Nl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Nl.forEach(o),Vl.forEach(o),Be.forEach(o),ll=f(t),at=a(t,"H2",{class:!0});var Sl=r(at);oo=a(Sl,"A",{id:!0,class:!0,href:!0});var hu=r(oo);yr=a(hu,"SPAN",{});var uu=r(yr);$(Wn.$$.fragment,uu),uu.forEach(o),hu.forEach(o),Gd=f(Sl),Tr=a(Sl,"SPAN",{});var gu=r(Tr);Jd=l(gu,"CLIPTextConfig"),gu.forEach(o),Sl.forEach(o),dl=f(t),ae=a(t,"DIV",{class:!0});var on=r(ae);$(Bn.$$.fragment,on),Xd=f(on),rt=a(on,"P",{});var sr=r(rt);Zd=l(sr,"This is the configuration class to store the configuration of a "),xa=a(sr,"A",{href:!0});var _u=r(xa);Qd=l(_u,"CLIPModel"),_u.forEach(o),Yd=l(sr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Un=a(sr,"A",{href:!0,rel:!0});var vu=r(Un);ec=l(vu,"openai/clip-vit-base-patch32"),vu.forEach(o),tc=l(sr," architecture."),sr.forEach(o),oc=f(on),it=a(on,"P",{});var ar=r(it);nc=l(ar,"Configuration objects inherit from "),wa=a(ar,"A",{href:!0});var bu=r(wa);sc=l(bu,"PretrainedConfig"),bu.forEach(o),ac=l(ar,` and can be used to control the model outputs. Read the
documentation from `),ka=a(ar,"A",{href:!0});var Pu=r(ka);rc=l(Pu,"PretrainedConfig"),Pu.forEach(o),ic=l(ar," for more information."),ar.forEach(o),lc=f(on),$(no.$$.fragment,on),on.forEach(o),cl=f(t),lt=a(t,"H2",{class:!0});var Wl=r(lt);so=a(Wl,"A",{id:!0,class:!0,href:!0});var $u=r(so);Lr=a($u,"SPAN",{});var Iu=r(Lr);$(Rn.$$.fragment,Iu),Iu.forEach(o),$u.forEach(o),dc=f(Wl),xr=a(Wl,"SPAN",{});var Cu=r(xr);cc=l(Cu,"CLIPVisionConfig"),Cu.forEach(o),Wl.forEach(o),pl=f(t),re=a(t,"DIV",{class:!0});var nn=r(re);$(Kn.$$.fragment,nn),pc=f(nn),dt=a(nn,"P",{});var rr=r(dt);mc=l(rr,"This is the configuration class to store the configuration of a "),Ma=a(rr,"A",{href:!0});var yu=r(Ma);fc=l(yu,"CLIPModel"),yu.forEach(o),hc=l(rr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Hn=a(rr,"A",{href:!0,rel:!0});var Tu=r(Hn);uc=l(Tu,"openai/clip-vit-base-patch32"),Tu.forEach(o),gc=l(rr," architecture."),rr.forEach(o),_c=f(nn),ct=a(nn,"P",{});var ir=r(ct);vc=l(ir,"Configuration objects inherit from "),ja=a(ir,"A",{href:!0});var Lu=r(ja);bc=l(Lu,"PretrainedConfig"),Lu.forEach(o),Pc=l(ir,` and can be used to control the model outputs. Read the
documentation from `),Ea=a(ir,"A",{href:!0});var xu=r(Ea);$c=l(xu,"PretrainedConfig"),xu.forEach(o),Ic=l(ir," for more information."),ir.forEach(o),Cc=f(nn),$(ao.$$.fragment,nn),nn.forEach(o),ml=f(t),pt=a(t,"H2",{class:!0});var Bl=r(pt);ro=a(Bl,"A",{id:!0,class:!0,href:!0});var wu=r(ro);wr=a(wu,"SPAN",{});var ku=r(wr);$(Gn.$$.fragment,ku),ku.forEach(o),wu.forEach(o),yc=f(Bl),kr=a(Bl,"SPAN",{});var Mu=r(kr);Tc=l(Mu,"CLIPTokenizer"),Mu.forEach(o),Bl.forEach(o),fl=f(t),q=a(t,"DIV",{class:!0});var te=r(q);$(Jn.$$.fragment,te),Lc=f(te),Mr=a(te,"P",{});var ju=r(Mr);xc=l(ju,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),ju.forEach(o),wc=f(te),Xn=a(te,"P",{});var Ul=r(Xn);kc=l(Ul,"This tokenizer inherits from "),za=a(Ul,"A",{href:!0});var Eu=r(za);Mc=l(Eu,"PreTrainedTokenizer"),Eu.forEach(o),jc=l(Ul,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ul.forEach(o),Ec=f(te),fe=a(te,"DIV",{class:!0});var sn=r(fe);$(Zn.$$.fragment,sn),zc=f(sn),jr=a(sn,"P",{});var zu=r(jr);Fc=l(zu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),zu.forEach(o),qc=f(sn),Er=a(sn,"UL",{});var Fu=r(Er);Fa=a(Fu,"LI",{});var su=r(Fa);Dc=l(su,"single sequence: "),zr=a(su,"CODE",{});var qu=r(zr);Ac=l(qu,"<|startoftext|> X <|endoftext|>"),qu.forEach(o),su.forEach(o),Fu.forEach(o),Oc=f(sn),Fr=a(sn,"P",{});var Du=r(Fr);Vc=l(Du,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Du.forEach(o),sn.forEach(o),Nc=f(te),io=a(te,"DIV",{class:!0});var Rl=r(io);$(Qn.$$.fragment,Rl),Sc=f(Rl),Yn=a(Rl,"P",{});var Kl=r(Yn);Wc=l(Kl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),qr=a(Kl,"CODE",{});var Au=r(qr);Bc=l(Au,"prepare_for_model"),Au.forEach(o),Uc=l(Kl," method."),Kl.forEach(o),Rl.forEach(o),Rc=f(te),lo=a(te,"DIV",{class:!0});var Hl=r(lo);$(es.$$.fragment,Hl),Kc=f(Hl),Dr=a(Hl,"P",{});var Ou=r(Dr);Hc=l(Ou,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Ou.forEach(o),Hl.forEach(o),Gc=f(te),qa=a(te,"DIV",{class:!0});var Vu=r(qa);$(ts.$$.fragment,Vu),Vu.forEach(o),te.forEach(o),hl=f(t),mt=a(t,"H2",{class:!0});var Gl=r(mt);co=a(Gl,"A",{id:!0,class:!0,href:!0});var Nu=r(co);Ar=a(Nu,"SPAN",{});var Su=r(Ar);$(os.$$.fragment,Su),Su.forEach(o),Nu.forEach(o),Jc=f(Gl),Or=a(Gl,"SPAN",{});var Wu=r(Or);Xc=l(Wu,"CLIPTokenizerFast"),Wu.forEach(o),Gl.forEach(o),ul=f(t),J=a(t,"DIV",{class:!0});var Ue=r(J);$(ns.$$.fragment,Ue),Zc=f(Ue),ss=a(Ue,"P",{});var Jl=r(ss);Qc=l(Jl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Vr=a(Jl,"EM",{});var Bu=r(Vr);Yc=l(Bu,"tokenizers"),Bu.forEach(o),ep=l(Jl,` library). Based on byte-level
Byte-Pair-Encoding.`),Jl.forEach(o),tp=f(Ue),as=a(Ue,"P",{});var Xl=r(as);op=l(Xl,"This tokenizer inherits from "),Da=a(Xl,"A",{href:!0});var Uu=r(Da);np=l(Uu,"PreTrainedTokenizerFast"),Uu.forEach(o),sp=l(Xl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xl.forEach(o),ap=f(Ue),he=a(Ue,"DIV",{class:!0});var an=r(he);$(rs.$$.fragment,an),rp=f(an),Nr=a(an,"P",{});var Ru=r(Nr);ip=l(Ru,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Ru.forEach(o),lp=f(an),Sr=a(an,"UL",{});var Ku=r(Sr);Aa=a(Ku,"LI",{});var au=r(Aa);dp=l(au,"single sequence: "),Wr=a(au,"CODE",{});var Hu=r(Wr);cp=l(Hu,"<|startoftext|> X <|endoftext|>"),Hu.forEach(o),au.forEach(o),Ku.forEach(o),pp=f(an),Br=a(an,"P",{});var Gu=r(Br);mp=l(Gu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Gu.forEach(o),an.forEach(o),fp=f(Ue),po=a(Ue,"DIV",{class:!0});var Zl=r(po);$(is.$$.fragment,Zl),hp=f(Zl),Ur=a(Zl,"P",{});var Ju=r(Ur);up=l(Ju,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Ju.forEach(o),Zl.forEach(o),Ue.forEach(o),gl=f(t),ft=a(t,"H2",{class:!0});var Ql=r(ft);mo=a(Ql,"A",{id:!0,class:!0,href:!0});var Xu=r(mo);Rr=a(Xu,"SPAN",{});var Zu=r(Rr);$(ls.$$.fragment,Zu),Zu.forEach(o),Xu.forEach(o),gp=f(Ql),Kr=a(Ql,"SPAN",{});var Qu=r(Kr);_p=l(Qu,"CLIPFeatureExtractor"),Qu.forEach(o),Ql.forEach(o),_l=f(t),Ee=a(t,"DIV",{class:!0});var lr=r(Ee);$(ds.$$.fragment,lr),vp=f(lr),Hr=a(lr,"P",{});var Yu=r(Hr);bp=l(Yu,"Constructs a CLIP feature extractor."),Yu.forEach(o),Pp=f(lr),cs=a(lr,"P",{});var Yl=r(cs);$p=l(Yl,"This feature extractor inherits from "),Oa=a(Yl,"A",{href:!0});var eg=r(Oa);Ip=l(eg,"FeatureExtractionMixin"),eg.forEach(o),Cp=l(Yl,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Yl.forEach(o),lr.forEach(o),vl=f(t),ht=a(t,"H2",{class:!0});var ed=r(ht);fo=a(ed,"A",{id:!0,class:!0,href:!0});var tg=r(fo);Gr=a(tg,"SPAN",{});var og=r(Gr);$(ps.$$.fragment,og),og.forEach(o),tg.forEach(o),yp=f(ed),Jr=a(ed,"SPAN",{});var ng=r(Jr);Tp=l(ng,"CLIPProcessor"),ng.forEach(o),ed.forEach(o),bl=f(t),X=a(t,"DIV",{class:!0});var Re=r(X);$(ms.$$.fragment,Re),Lp=f(Re),Xr=a(Re,"P",{});var sg=r(Xr);xp=l(sg,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),sg.forEach(o),wp=f(Re),ee=a(Re,"P",{});var Fe=r(ee);Va=a(Fe,"A",{href:!0});var ag=r(Va);kp=l(ag,"CLIPProcessor"),ag.forEach(o),Mp=l(Fe," offers all the functionalities of "),Na=a(Fe,"A",{href:!0});var rg=r(Na);jp=l(rg,"CLIPFeatureExtractor"),rg.forEach(o),Ep=l(Fe," and "),Sa=a(Fe,"A",{href:!0});var ig=r(Sa);zp=l(ig,"CLIPTokenizerFast"),ig.forEach(o),Fp=l(Fe,`. See the
`),Zr=a(Fe,"CODE",{});var lg=r(Zr);qp=l(lg,"__call__()"),lg.forEach(o),Dp=l(Fe," and "),Wa=a(Fe,"A",{href:!0});var dg=r(Wa);Ap=l(dg,"decode()"),dg.forEach(o),Op=l(Fe," for more information."),Fe.forEach(o),Vp=f(Re),ho=a(Re,"DIV",{class:!0});var td=r(ho);$(fs.$$.fragment,td),Np=f(td),hs=a(td,"P",{});var od=r(hs);Sp=l(od,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ba=a(od,"A",{href:!0});var cg=r(Ba);Wp=l(cg,"batch_decode()"),cg.forEach(o),Bp=l(od,`. Please
refer to the docstring of this method for more information.`),od.forEach(o),td.forEach(o),Up=f(Re),uo=a(Re,"DIV",{class:!0});var nd=r(uo);$(us.$$.fragment,nd),Rp=f(nd),gs=a(nd,"P",{});var sd=r(gs);Kp=l(sd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ua=a(sd,"A",{href:!0});var pg=r(Ua);Hp=l(pg,"decode()"),pg.forEach(o),Gp=l(sd,`. Please refer to
the docstring of this method for more information.`),sd.forEach(o),nd.forEach(o),Re.forEach(o),Pl=f(t),ut=a(t,"H2",{class:!0});var ad=r(ut);go=a(ad,"A",{id:!0,class:!0,href:!0});var mg=r(go);Qr=a(mg,"SPAN",{});var fg=r(Qr);$(_s.$$.fragment,fg),fg.forEach(o),mg.forEach(o),Jp=f(ad),Yr=a(ad,"SPAN",{});var hg=r(Yr);Xp=l(hg,"CLIPModel"),hg.forEach(o),ad.forEach(o),$l=f(t),Z=a(t,"DIV",{class:!0});var Ke=r(Z);$(vs.$$.fragment,Ke),Zp=f(Ke),bs=a(Ke,"P",{});var rd=r(bs);Qp=l(rd,"This model is a PyTorch "),Ps=a(rd,"A",{href:!0,rel:!0});var ug=r(Ps);Yp=l(ug,"torch.nn.Module"),ug.forEach(o),em=l(rd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rd.forEach(o),tm=f(Ke),ue=a(Ke,"DIV",{class:!0});var rn=r(ue);$($s.$$.fragment,rn),om=f(rn),gt=a(rn,"P",{});var dr=r(gt);nm=l(dr,"The "),Ra=a(dr,"A",{href:!0});var gg=r(Ra);sm=l(gg,"CLIPModel"),gg.forEach(o),am=l(dr," forward method, overrides the "),ei=a(dr,"CODE",{});var _g=r(ei);rm=l(_g,"__call__"),_g.forEach(o),im=l(dr," special method."),dr.forEach(o),lm=f(rn),$(_o.$$.fragment,rn),dm=f(rn),$(vo.$$.fragment,rn),rn.forEach(o),cm=f(Ke),ge=a(Ke,"DIV",{class:!0});var ln=r(ge);$(Is.$$.fragment,ln),pm=f(ln),_t=a(ln,"P",{});var cr=r(_t);mm=l(cr,"The "),Ka=a(cr,"A",{href:!0});var vg=r(Ka);fm=l(vg,"CLIPModel"),vg.forEach(o),hm=l(cr," forward method, overrides the "),ti=a(cr,"CODE",{});var bg=r(ti);um=l(bg,"__call__"),bg.forEach(o),gm=l(cr," special method."),cr.forEach(o),_m=f(ln),$(bo.$$.fragment,ln),vm=f(ln),$(Po.$$.fragment,ln),ln.forEach(o),bm=f(Ke),_e=a(Ke,"DIV",{class:!0});var dn=r(_e);$(Cs.$$.fragment,dn),Pm=f(dn),vt=a(dn,"P",{});var pr=r(vt);$m=l(pr,"The "),Ha=a(pr,"A",{href:!0});var Pg=r(Ha);Im=l(Pg,"CLIPModel"),Pg.forEach(o),Cm=l(pr," forward method, overrides the "),oi=a(pr,"CODE",{});var $g=r(oi);ym=l($g,"__call__"),$g.forEach(o),Tm=l(pr," special method."),pr.forEach(o),Lm=f(dn),$($o.$$.fragment,dn),xm=f(dn),$(Io.$$.fragment,dn),dn.forEach(o),Ke.forEach(o),Il=f(t),bt=a(t,"H2",{class:!0});var id=r(bt);Co=a(id,"A",{id:!0,class:!0,href:!0});var Ig=r(Co);ni=a(Ig,"SPAN",{});var Cg=r(ni);$(ys.$$.fragment,Cg),Cg.forEach(o),Ig.forEach(o),wm=f(id),si=a(id,"SPAN",{});var yg=r(si);km=l(yg,"CLIPTextModel"),yg.forEach(o),id.forEach(o),Cl=f(t),Pt=a(t,"DIV",{class:!0});var ld=r(Pt);$(Ts.$$.fragment,ld),Mm=f(ld),ve=a(ld,"DIV",{class:!0});var cn=r(ve);$(Ls.$$.fragment,cn),jm=f(cn),$t=a(cn,"P",{});var mr=r($t);Em=l(mr,"The "),Ga=a(mr,"A",{href:!0});var Tg=r(Ga);zm=l(Tg,"CLIPTextModel"),Tg.forEach(o),Fm=l(mr," forward method, overrides the "),ai=a(mr,"CODE",{});var Lg=r(ai);qm=l(Lg,"__call__"),Lg.forEach(o),Dm=l(mr," special method."),mr.forEach(o),Am=f(cn),$(yo.$$.fragment,cn),Om=f(cn),$(To.$$.fragment,cn),cn.forEach(o),ld.forEach(o),yl=f(t),It=a(t,"H2",{class:!0});var dd=r(It);Lo=a(dd,"A",{id:!0,class:!0,href:!0});var xg=r(Lo);ri=a(xg,"SPAN",{});var wg=r(ri);$(xs.$$.fragment,wg),wg.forEach(o),xg.forEach(o),Vm=f(dd),ii=a(dd,"SPAN",{});var kg=r(ii);Nm=l(kg,"CLIPVisionModel"),kg.forEach(o),dd.forEach(o),Tl=f(t),Ct=a(t,"DIV",{class:!0});var cd=r(Ct);$(ws.$$.fragment,cd),Sm=f(cd),be=a(cd,"DIV",{class:!0});var pn=r(be);$(ks.$$.fragment,pn),Wm=f(pn),yt=a(pn,"P",{});var fr=r(yt);Bm=l(fr,"The "),Ja=a(fr,"A",{href:!0});var Mg=r(Ja);Um=l(Mg,"CLIPVisionModel"),Mg.forEach(o),Rm=l(fr," forward method, overrides the "),li=a(fr,"CODE",{});var jg=r(li);Km=l(jg,"__call__"),jg.forEach(o),Hm=l(fr," special method."),fr.forEach(o),Gm=f(pn),$(xo.$$.fragment,pn),Jm=f(pn),$(wo.$$.fragment,pn),pn.forEach(o),cd.forEach(o),Ll=f(t),Tt=a(t,"H2",{class:!0});var pd=r(Tt);ko=a(pd,"A",{id:!0,class:!0,href:!0});var Eg=r(ko);di=a(Eg,"SPAN",{});var zg=r(di);$(Ms.$$.fragment,zg),zg.forEach(o),Eg.forEach(o),Xm=f(pd),ci=a(pd,"SPAN",{});var Fg=r(ci);Zm=l(Fg,"TFCLIPModel"),Fg.forEach(o),pd.forEach(o),xl=f(t),D=a(t,"DIV",{class:!0});var oe=r(D);$(js.$$.fragment,oe),Qm=f(oe),Es=a(oe,"P",{});var md=r(Es);Ym=l(md,"This model inherits from "),Xa=a(md,"A",{href:!0});var qg=r(Xa);ef=l(qg,"TFPreTrainedModel"),qg.forEach(o),tf=l(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(o),of=f(oe),zs=a(oe,"P",{});var fd=r(zs);nf=l(fd,"This model is also a "),Fs=a(fd,"A",{href:!0,rel:!0});var Dg=r(Fs);sf=l(Dg,"tf.keras.Model"),Dg.forEach(o),af=l(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(o),rf=f(oe),$(Mo.$$.fragment,oe),lf=f(oe),Pe=a(oe,"DIV",{class:!0});var mn=r(Pe);$(qs.$$.fragment,mn),df=f(mn),Lt=a(mn,"P",{});var hr=r(Lt);cf=l(hr,"The "),Za=a(hr,"A",{href:!0});var Ag=r(Za);pf=l(Ag,"TFCLIPModel"),Ag.forEach(o),mf=l(hr," forward method, overrides the "),pi=a(hr,"CODE",{});var Og=r(pi);ff=l(Og,"__call__"),Og.forEach(o),hf=l(hr," special method."),hr.forEach(o),uf=f(mn),$(jo.$$.fragment,mn),gf=f(mn),$(Eo.$$.fragment,mn),mn.forEach(o),_f=f(oe),$e=a(oe,"DIV",{class:!0});var fn=r($e);$(Ds.$$.fragment,fn),vf=f(fn),xt=a(fn,"P",{});var ur=r(xt);bf=l(ur,"The "),Qa=a(ur,"A",{href:!0});var Vg=r(Qa);Pf=l(Vg,"TFCLIPModel"),Vg.forEach(o),$f=l(ur," forward method, overrides the "),mi=a(ur,"CODE",{});var Ng=r(mi);If=l(Ng,"__call__"),Ng.forEach(o),Cf=l(ur," special method."),ur.forEach(o),yf=f(fn),$(zo.$$.fragment,fn),Tf=f(fn),$(Fo.$$.fragment,fn),fn.forEach(o),Lf=f(oe),Ie=a(oe,"DIV",{class:!0});var hn=r(Ie);$(As.$$.fragment,hn),xf=f(hn),wt=a(hn,"P",{});var gr=r(wt);wf=l(gr,"The "),Ya=a(gr,"A",{href:!0});var Sg=r(Ya);kf=l(Sg,"TFCLIPModel"),Sg.forEach(o),Mf=l(gr," forward method, overrides the "),fi=a(gr,"CODE",{});var Wg=r(fi);jf=l(Wg,"__call__"),Wg.forEach(o),Ef=l(gr," special method."),gr.forEach(o),zf=f(hn),$(qo.$$.fragment,hn),Ff=f(hn),$(Do.$$.fragment,hn),hn.forEach(o),oe.forEach(o),wl=f(t),kt=a(t,"H2",{class:!0});var hd=r(kt);Ao=a(hd,"A",{id:!0,class:!0,href:!0});var Bg=r(Ao);hi=a(Bg,"SPAN",{});var Ug=r(hi);$(Os.$$.fragment,Ug),Ug.forEach(o),Bg.forEach(o),qf=f(hd),ui=a(hd,"SPAN",{});var Rg=r(ui);Df=l(Rg,"TFCLIPTextModel"),Rg.forEach(o),hd.forEach(o),kl=f(t),Mt=a(t,"DIV",{class:!0});var ud=r(Mt);$(Vs.$$.fragment,ud),Af=f(ud),Ce=a(ud,"DIV",{class:!0});var un=r(Ce);$(Ns.$$.fragment,un),Of=f(un),jt=a(un,"P",{});var _r=r(jt);Vf=l(_r,"The "),er=a(_r,"A",{href:!0});var Kg=r(er);Nf=l(Kg,"TFCLIPTextModel"),Kg.forEach(o),Sf=l(_r," forward method, overrides the "),gi=a(_r,"CODE",{});var Hg=r(gi);Wf=l(Hg,"__call__"),Hg.forEach(o),Bf=l(_r," special method."),_r.forEach(o),Uf=f(un),$(Oo.$$.fragment,un),Rf=f(un),$(Vo.$$.fragment,un),un.forEach(o),ud.forEach(o),Ml=f(t),Et=a(t,"H2",{class:!0});var gd=r(Et);No=a(gd,"A",{id:!0,class:!0,href:!0});var Gg=r(No);_i=a(Gg,"SPAN",{});var Jg=r(_i);$(Ss.$$.fragment,Jg),Jg.forEach(o),Gg.forEach(o),Kf=f(gd),vi=a(gd,"SPAN",{});var Xg=r(vi);Hf=l(Xg,"TFCLIPVisionModel"),Xg.forEach(o),gd.forEach(o),jl=f(t),zt=a(t,"DIV",{class:!0});var _d=r(zt);$(Ws.$$.fragment,_d),Gf=f(_d),ye=a(_d,"DIV",{class:!0});var gn=r(ye);$(Bs.$$.fragment,gn),Jf=f(gn),Ft=a(gn,"P",{});var vr=r(Ft);Xf=l(vr,"The "),tr=a(vr,"A",{href:!0});var Zg=r(tr);Zf=l(Zg,"TFCLIPVisionModel"),Zg.forEach(o),Qf=l(vr," forward method, overrides the "),bi=a(vr,"CODE",{});var Qg=r(bi);Yf=l(Qg,"__call__"),Qg.forEach(o),eh=l(vr," special method."),vr.forEach(o),th=f(gn),$(So.$$.fragment,gn),oh=f(gn),$(Wo.$$.fragment,gn),gn.forEach(o),_d.forEach(o),El=f(t),qt=a(t,"H2",{class:!0});var vd=r(qt);Bo=a(vd,"A",{id:!0,class:!0,href:!0});var Yg=r(Bo);Pi=a(Yg,"SPAN",{});var e_=r(Pi);$(Us.$$.fragment,e_),e_.forEach(o),Yg.forEach(o),nh=f(vd),$i=a(vd,"SPAN",{});var t_=r($i);sh=l(t_,"FlaxCLIPModel"),t_.forEach(o),vd.forEach(o),zl=f(t),z=a(t,"DIV",{class:!0});var R=r(z);$(Rs.$$.fragment,R),ah=f(R),Ks=a(R,"P",{});var bd=r(Ks);rh=l(bd,"This model inherits from "),or=a(bd,"A",{href:!0});var o_=r(or);ih=l(o_,"FlaxPreTrainedModel"),o_.forEach(o),lh=l(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bd.forEach(o),dh=f(R),Hs=a(R,"P",{});var Pd=r(Hs);ch=l(Pd,"This model is also a Flax Linen "),Gs=a(Pd,"A",{href:!0,rel:!0});var n_=r(Gs);ph=l(n_,"flax.linen.Module"),n_.forEach(o),mh=l(Pd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pd.forEach(o),fh=f(R),Ii=a(R,"P",{});var s_=r(Ii);hh=l(s_,"Finally, this model supports inherent JAX features such as:"),s_.forEach(o),uh=f(R),ze=a(R,"UL",{});var _n=r(ze);Ci=a(_n,"LI",{});var a_=r(Ci);Js=a(a_,"A",{href:!0,rel:!0});var r_=r(Js);gh=l(r_,"Just-In-Time (JIT) compilation"),r_.forEach(o),a_.forEach(o),_h=f(_n),yi=a(_n,"LI",{});var i_=r(yi);Xs=a(i_,"A",{href:!0,rel:!0});var l_=r(Xs);vh=l(l_,"Automatic Differentiation"),l_.forEach(o),i_.forEach(o),bh=f(_n),Ti=a(_n,"LI",{});var d_=r(Ti);Zs=a(d_,"A",{href:!0,rel:!0});var c_=r(Zs);Ph=l(c_,"Vectorization"),c_.forEach(o),d_.forEach(o),$h=f(_n),Li=a(_n,"LI",{});var p_=r(Li);Qs=a(p_,"A",{href:!0,rel:!0});var m_=r(Qs);Ih=l(m_,"Parallelization"),m_.forEach(o),p_.forEach(o),_n.forEach(o),Ch=f(R),Te=a(R,"DIV",{class:!0});var vn=r(Te);$(Ys.$$.fragment,vn),yh=f(vn),Dt=a(vn,"P",{});var br=r(Dt);Th=l(br,"The "),xi=a(br,"CODE",{});var f_=r(xi);Lh=l(f_,"FlaxCLIPPreTrainedModel"),f_.forEach(o),xh=l(br," forward method, overrides the "),wi=a(br,"CODE",{});var h_=r(wi);wh=l(h_,"__call__"),h_.forEach(o),kh=l(br," special method."),br.forEach(o),Mh=f(vn),$(Uo.$$.fragment,vn),jh=f(vn),$(Ro.$$.fragment,vn),vn.forEach(o),Eh=f(R),Ko=a(R,"DIV",{class:!0});var $d=r(Ko);$(ea.$$.fragment,$d),zh=f($d),$(Ho.$$.fragment,$d),$d.forEach(o),Fh=f(R),Go=a(R,"DIV",{class:!0});var Id=r(Go);$(ta.$$.fragment,Id),qh=f(Id),$(Jo.$$.fragment,Id),Id.forEach(o),R.forEach(o),Fl=f(t),At=a(t,"H2",{class:!0});var Cd=r(At);Xo=a(Cd,"A",{id:!0,class:!0,href:!0});var u_=r(Xo);ki=a(u_,"SPAN",{});var g_=r(ki);$(oa.$$.fragment,g_),g_.forEach(o),u_.forEach(o),Dh=f(Cd),Mi=a(Cd,"SPAN",{});var __=r(Mi);Ah=l(__,"FlaxCLIPTextModel"),__.forEach(o),Cd.forEach(o),ql=f(t),Ot=a(t,"DIV",{class:!0});var yd=r(Ot);$(na.$$.fragment,yd),Oh=f(yd),Le=a(yd,"DIV",{class:!0});var bn=r(Le);$(sa.$$.fragment,bn),Vh=f(bn),Vt=a(bn,"P",{});var Pr=r(Vt);Nh=l(Pr,"The "),ji=a(Pr,"CODE",{});var v_=r(ji);Sh=l(v_,"FlaxCLIPTextPreTrainedModel"),v_.forEach(o),Wh=l(Pr," forward method, overrides the "),Ei=a(Pr,"CODE",{});var b_=r(Ei);Bh=l(b_,"__call__"),b_.forEach(o),Uh=l(Pr," special method."),Pr.forEach(o),Rh=f(bn),$(Zo.$$.fragment,bn),Kh=f(bn),$(Qo.$$.fragment,bn),bn.forEach(o),yd.forEach(o),Dl=f(t),Nt=a(t,"H2",{class:!0});var Td=r(Nt);Yo=a(Td,"A",{id:!0,class:!0,href:!0});var P_=r(Yo);zi=a(P_,"SPAN",{});var $_=r(zi);$(aa.$$.fragment,$_),$_.forEach(o),P_.forEach(o),Hh=f(Td),Fi=a(Td,"SPAN",{});var I_=r(Fi);Gh=l(I_,"FlaxCLIPVisionModel"),I_.forEach(o),Td.forEach(o),Al=f(t),St=a(t,"DIV",{class:!0});var Ld=r(St);$(ra.$$.fragment,Ld),Jh=f(Ld),xe=a(Ld,"DIV",{class:!0});var Pn=r(xe);$(ia.$$.fragment,Pn),Xh=f(Pn),Wt=a(Pn,"P",{});var $r=r(Wt);Zh=l($r,"The "),qi=a($r,"CODE",{});var C_=r(qi);Qh=l(C_,"FlaxCLIPVisionPreTrainedModel"),C_.forEach(o),Yh=l($r," forward method, overrides the "),Di=a($r,"CODE",{});var y_=r(Di);eu=l(y_,"__call__"),y_.forEach(o),tu=l($r," special method."),$r.forEach(o),ou=f(Pn),$(en.$$.fragment,Pn),nu=f(Pn),$(tn.$$.fragment,Pn),Pn.forEach(o),Ld.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(dv)),h(p,"id","clip"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#clip"),h(u,"class","relative group"),h(ie,"id","overview"),h(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ie,"href","#overview"),h(K,"class","relative group"),h(ke,"href","https://arxiv.org/abs/2103.00020"),h(ke,"rel","nofollow"),h(S,"id","usage"),h(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(S,"href","#usage"),h(F,"class","relative group"),h(Ae,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(pe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(H,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(Oe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(E,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(et,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(tt,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Ne,"href","https://huggingface.co/valhalla"),h(Ne,"rel","nofollow"),h(Se,"href","https://github.com/openai/CLIP"),h(Se,"rel","nofollow"),h(Yt,"id","transformers.CLIPConfig"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#transformers.CLIPConfig"),h(me,"class","relative group"),h(Ia,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(Ca,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Vn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Vn,"rel","nofollow"),h(ya,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ta,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(La,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oo,"id","transformers.CLIPTextConfig"),h(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oo,"href","#transformers.CLIPTextConfig"),h(at,"class","relative group"),h(xa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Un,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Un,"rel","nofollow"),h(wa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(ka,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(so,"id","transformers.CLIPVisionConfig"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.CLIPVisionConfig"),h(lt,"class","relative group"),h(Ma,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Hn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Hn,"rel","nofollow"),h(ja,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ea,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ro,"id","transformers.CLIPTokenizer"),h(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ro,"href","#transformers.CLIPTokenizer"),h(pt,"class","relative group"),h(za,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(co,"id","transformers.CLIPTokenizerFast"),h(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(co,"href","#transformers.CLIPTokenizerFast"),h(mt,"class","relative group"),h(Da,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mo,"id","transformers.CLIPFeatureExtractor"),h(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mo,"href","#transformers.CLIPFeatureExtractor"),h(ft,"class","relative group"),h(Oa,"href","/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin"),h(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fo,"id","transformers.CLIPProcessor"),h(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fo,"href","#transformers.CLIPProcessor"),h(ht,"class","relative group"),h(Va,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(Na,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(Sa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),h(Wa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),h(Ba,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),h(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ua,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),h(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(go,"id","transformers.CLIPModel"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.CLIPModel"),h(ut,"class","relative group"),h(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ps,"rel","nofollow"),h(Ra,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ka,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ha,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Co,"id","transformers.CLIPTextModel"),h(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Co,"href","#transformers.CLIPTextModel"),h(bt,"class","relative group"),h(Ga,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"id","transformers.CLIPVisionModel"),h(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lo,"href","#transformers.CLIPVisionModel"),h(It,"class","relative group"),h(Ja,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ko,"id","transformers.TFCLIPModel"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.TFCLIPModel"),h(Tt,"class","relative group"),h(Xa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Fs,"rel","nofollow"),h(Za,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qa,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ya,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ao,"id","transformers.TFCLIPTextModel"),h(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ao,"href","#transformers.TFCLIPTextModel"),h(kt,"class","relative group"),h(er,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),h(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(No,"id","transformers.TFCLIPVisionModel"),h(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(No,"href","#transformers.TFCLIPVisionModel"),h(Et,"class","relative group"),h(tr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bo,"id","transformers.FlaxCLIPModel"),h(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bo,"href","#transformers.FlaxCLIPModel"),h(qt,"class","relative group"),h(or,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Gs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Gs,"rel","nofollow"),h(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Js,"rel","nofollow"),h(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Xs,"rel","nofollow"),h(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Zs,"rel","nofollow"),h(Qs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Qs,"rel","nofollow"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xo,"id","transformers.FlaxCLIPTextModel"),h(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xo,"href","#transformers.FlaxCLIPTextModel"),h(At,"class","relative group"),h(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yo,"id","transformers.FlaxCLIPVisionModel"),h(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yo,"href","#transformers.FlaxCLIPVisionModel"),h(Nt,"class","relative group"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,b,g),v(t,u,g),e(u,p),e(p,_),I(n,_,null),e(u,c),e(u,x),e(x,$n),v(t,Ut,g),v(t,K,g),e(K,ie),e(ie,qe),I(j,qe,null),e(K,In),e(K,we),e(we,Cn),v(t,Rt,g),v(t,Q,g),e(Q,yn),e(Q,ke),e(ke,He),e(Q,Tn),v(t,Kt,g),v(t,le,g),e(le,Ln),v(t,Ht,g),v(t,de,g),e(de,Ge),e(Ge,xn),v(t,Je,g),v(t,F,g),e(F,S),e(S,Xe),I(se,Xe,null),e(F,wn),e(F,Ze),e(Ze,Qe),v(t,Gt,g),v(t,De,g),e(De,ce),v(t,Jt,g),v(t,Y,g),e(Y,kn),e(Y,Ae),e(Ae,Ye),e(Y,Mn),v(t,Xt,g),v(t,M,g),e(M,jn),e(M,pe),e(pe,En),e(M,Zt),e(M,H),e(H,zn),e(M,Me),e(M,Oe),e(Oe,Fn),e(M,k),e(M,E),e(E,ua),e(M,Qt),e(M,et),e(et,ga),e(M,B),e(M,tt),e(tt,_a),e(M,va),v(t,qn,g),I(Ve,t,g),v(t,je,g),v(t,U,g),e(U,ba),e(U,Ne),e(Ne,ot),e(U,Pa),e(U,Se),e(Se,Dn),e(U,$a),v(t,nt,g),v(t,me,g),e(me,Yt),e(Yt,Ir),I(An,Ir,null),e(me,xd),e(me,Cr),e(Cr,wd),v(t,il,g),v(t,G,g),I(On,G,null),e(G,kd),e(G,We),e(We,Ia),e(Ia,Md),e(We,jd),e(We,Ca),e(Ca,Ed),e(We,zd),e(We,Vn),e(Vn,Fd),e(We,qd),e(G,Dd),e(G,st),e(st,Ad),e(st,ya),e(ya,Od),e(st,Vd),e(st,Ta),e(Ta,Nd),e(st,Sd),e(G,Wd),I(eo,G,null),e(G,Bd),e(G,to),I(Nn,to,null),e(to,Ud),e(to,Sn),e(Sn,Rd),e(Sn,La),e(La,Kd),e(Sn,Hd),v(t,ll,g),v(t,at,g),e(at,oo),e(oo,yr),I(Wn,yr,null),e(at,Gd),e(at,Tr),e(Tr,Jd),v(t,dl,g),v(t,ae,g),I(Bn,ae,null),e(ae,Xd),e(ae,rt),e(rt,Zd),e(rt,xa),e(xa,Qd),e(rt,Yd),e(rt,Un),e(Un,ec),e(rt,tc),e(ae,oc),e(ae,it),e(it,nc),e(it,wa),e(wa,sc),e(it,ac),e(it,ka),e(ka,rc),e(it,ic),e(ae,lc),I(no,ae,null),v(t,cl,g),v(t,lt,g),e(lt,so),e(so,Lr),I(Rn,Lr,null),e(lt,dc),e(lt,xr),e(xr,cc),v(t,pl,g),v(t,re,g),I(Kn,re,null),e(re,pc),e(re,dt),e(dt,mc),e(dt,Ma),e(Ma,fc),e(dt,hc),e(dt,Hn),e(Hn,uc),e(dt,gc),e(re,_c),e(re,ct),e(ct,vc),e(ct,ja),e(ja,bc),e(ct,Pc),e(ct,Ea),e(Ea,$c),e(ct,Ic),e(re,Cc),I(ao,re,null),v(t,ml,g),v(t,pt,g),e(pt,ro),e(ro,wr),I(Gn,wr,null),e(pt,yc),e(pt,kr),e(kr,Tc),v(t,fl,g),v(t,q,g),I(Jn,q,null),e(q,Lc),e(q,Mr),e(Mr,xc),e(q,wc),e(q,Xn),e(Xn,kc),e(Xn,za),e(za,Mc),e(Xn,jc),e(q,Ec),e(q,fe),I(Zn,fe,null),e(fe,zc),e(fe,jr),e(jr,Fc),e(fe,qc),e(fe,Er),e(Er,Fa),e(Fa,Dc),e(Fa,zr),e(zr,Ac),e(fe,Oc),e(fe,Fr),e(Fr,Vc),e(q,Nc),e(q,io),I(Qn,io,null),e(io,Sc),e(io,Yn),e(Yn,Wc),e(Yn,qr),e(qr,Bc),e(Yn,Uc),e(q,Rc),e(q,lo),I(es,lo,null),e(lo,Kc),e(lo,Dr),e(Dr,Hc),e(q,Gc),e(q,qa),I(ts,qa,null),v(t,hl,g),v(t,mt,g),e(mt,co),e(co,Ar),I(os,Ar,null),e(mt,Jc),e(mt,Or),e(Or,Xc),v(t,ul,g),v(t,J,g),I(ns,J,null),e(J,Zc),e(J,ss),e(ss,Qc),e(ss,Vr),e(Vr,Yc),e(ss,ep),e(J,tp),e(J,as),e(as,op),e(as,Da),e(Da,np),e(as,sp),e(J,ap),e(J,he),I(rs,he,null),e(he,rp),e(he,Nr),e(Nr,ip),e(he,lp),e(he,Sr),e(Sr,Aa),e(Aa,dp),e(Aa,Wr),e(Wr,cp),e(he,pp),e(he,Br),e(Br,mp),e(J,fp),e(J,po),I(is,po,null),e(po,hp),e(po,Ur),e(Ur,up),v(t,gl,g),v(t,ft,g),e(ft,mo),e(mo,Rr),I(ls,Rr,null),e(ft,gp),e(ft,Kr),e(Kr,_p),v(t,_l,g),v(t,Ee,g),I(ds,Ee,null),e(Ee,vp),e(Ee,Hr),e(Hr,bp),e(Ee,Pp),e(Ee,cs),e(cs,$p),e(cs,Oa),e(Oa,Ip),e(cs,Cp),v(t,vl,g),v(t,ht,g),e(ht,fo),e(fo,Gr),I(ps,Gr,null),e(ht,yp),e(ht,Jr),e(Jr,Tp),v(t,bl,g),v(t,X,g),I(ms,X,null),e(X,Lp),e(X,Xr),e(Xr,xp),e(X,wp),e(X,ee),e(ee,Va),e(Va,kp),e(ee,Mp),e(ee,Na),e(Na,jp),e(ee,Ep),e(ee,Sa),e(Sa,zp),e(ee,Fp),e(ee,Zr),e(Zr,qp),e(ee,Dp),e(ee,Wa),e(Wa,Ap),e(ee,Op),e(X,Vp),e(X,ho),I(fs,ho,null),e(ho,Np),e(ho,hs),e(hs,Sp),e(hs,Ba),e(Ba,Wp),e(hs,Bp),e(X,Up),e(X,uo),I(us,uo,null),e(uo,Rp),e(uo,gs),e(gs,Kp),e(gs,Ua),e(Ua,Hp),e(gs,Gp),v(t,Pl,g),v(t,ut,g),e(ut,go),e(go,Qr),I(_s,Qr,null),e(ut,Jp),e(ut,Yr),e(Yr,Xp),v(t,$l,g),v(t,Z,g),I(vs,Z,null),e(Z,Zp),e(Z,bs),e(bs,Qp),e(bs,Ps),e(Ps,Yp),e(bs,em),e(Z,tm),e(Z,ue),I($s,ue,null),e(ue,om),e(ue,gt),e(gt,nm),e(gt,Ra),e(Ra,sm),e(gt,am),e(gt,ei),e(ei,rm),e(gt,im),e(ue,lm),I(_o,ue,null),e(ue,dm),I(vo,ue,null),e(Z,cm),e(Z,ge),I(Is,ge,null),e(ge,pm),e(ge,_t),e(_t,mm),e(_t,Ka),e(Ka,fm),e(_t,hm),e(_t,ti),e(ti,um),e(_t,gm),e(ge,_m),I(bo,ge,null),e(ge,vm),I(Po,ge,null),e(Z,bm),e(Z,_e),I(Cs,_e,null),e(_e,Pm),e(_e,vt),e(vt,$m),e(vt,Ha),e(Ha,Im),e(vt,Cm),e(vt,oi),e(oi,ym),e(vt,Tm),e(_e,Lm),I($o,_e,null),e(_e,xm),I(Io,_e,null),v(t,Il,g),v(t,bt,g),e(bt,Co),e(Co,ni),I(ys,ni,null),e(bt,wm),e(bt,si),e(si,km),v(t,Cl,g),v(t,Pt,g),I(Ts,Pt,null),e(Pt,Mm),e(Pt,ve),I(Ls,ve,null),e(ve,jm),e(ve,$t),e($t,Em),e($t,Ga),e(Ga,zm),e($t,Fm),e($t,ai),e(ai,qm),e($t,Dm),e(ve,Am),I(yo,ve,null),e(ve,Om),I(To,ve,null),v(t,yl,g),v(t,It,g),e(It,Lo),e(Lo,ri),I(xs,ri,null),e(It,Vm),e(It,ii),e(ii,Nm),v(t,Tl,g),v(t,Ct,g),I(ws,Ct,null),e(Ct,Sm),e(Ct,be),I(ks,be,null),e(be,Wm),e(be,yt),e(yt,Bm),e(yt,Ja),e(Ja,Um),e(yt,Rm),e(yt,li),e(li,Km),e(yt,Hm),e(be,Gm),I(xo,be,null),e(be,Jm),I(wo,be,null),v(t,Ll,g),v(t,Tt,g),e(Tt,ko),e(ko,di),I(Ms,di,null),e(Tt,Xm),e(Tt,ci),e(ci,Zm),v(t,xl,g),v(t,D,g),I(js,D,null),e(D,Qm),e(D,Es),e(Es,Ym),e(Es,Xa),e(Xa,ef),e(Es,tf),e(D,of),e(D,zs),e(zs,nf),e(zs,Fs),e(Fs,sf),e(zs,af),e(D,rf),I(Mo,D,null),e(D,lf),e(D,Pe),I(qs,Pe,null),e(Pe,df),e(Pe,Lt),e(Lt,cf),e(Lt,Za),e(Za,pf),e(Lt,mf),e(Lt,pi),e(pi,ff),e(Lt,hf),e(Pe,uf),I(jo,Pe,null),e(Pe,gf),I(Eo,Pe,null),e(D,_f),e(D,$e),I(Ds,$e,null),e($e,vf),e($e,xt),e(xt,bf),e(xt,Qa),e(Qa,Pf),e(xt,$f),e(xt,mi),e(mi,If),e(xt,Cf),e($e,yf),I(zo,$e,null),e($e,Tf),I(Fo,$e,null),e(D,Lf),e(D,Ie),I(As,Ie,null),e(Ie,xf),e(Ie,wt),e(wt,wf),e(wt,Ya),e(Ya,kf),e(wt,Mf),e(wt,fi),e(fi,jf),e(wt,Ef),e(Ie,zf),I(qo,Ie,null),e(Ie,Ff),I(Do,Ie,null),v(t,wl,g),v(t,kt,g),e(kt,Ao),e(Ao,hi),I(Os,hi,null),e(kt,qf),e(kt,ui),e(ui,Df),v(t,kl,g),v(t,Mt,g),I(Vs,Mt,null),e(Mt,Af),e(Mt,Ce),I(Ns,Ce,null),e(Ce,Of),e(Ce,jt),e(jt,Vf),e(jt,er),e(er,Nf),e(jt,Sf),e(jt,gi),e(gi,Wf),e(jt,Bf),e(Ce,Uf),I(Oo,Ce,null),e(Ce,Rf),I(Vo,Ce,null),v(t,Ml,g),v(t,Et,g),e(Et,No),e(No,_i),I(Ss,_i,null),e(Et,Kf),e(Et,vi),e(vi,Hf),v(t,jl,g),v(t,zt,g),I(Ws,zt,null),e(zt,Gf),e(zt,ye),I(Bs,ye,null),e(ye,Jf),e(ye,Ft),e(Ft,Xf),e(Ft,tr),e(tr,Zf),e(Ft,Qf),e(Ft,bi),e(bi,Yf),e(Ft,eh),e(ye,th),I(So,ye,null),e(ye,oh),I(Wo,ye,null),v(t,El,g),v(t,qt,g),e(qt,Bo),e(Bo,Pi),I(Us,Pi,null),e(qt,nh),e(qt,$i),e($i,sh),v(t,zl,g),v(t,z,g),I(Rs,z,null),e(z,ah),e(z,Ks),e(Ks,rh),e(Ks,or),e(or,ih),e(Ks,lh),e(z,dh),e(z,Hs),e(Hs,ch),e(Hs,Gs),e(Gs,ph),e(Hs,mh),e(z,fh),e(z,Ii),e(Ii,hh),e(z,uh),e(z,ze),e(ze,Ci),e(Ci,Js),e(Js,gh),e(ze,_h),e(ze,yi),e(yi,Xs),e(Xs,vh),e(ze,bh),e(ze,Ti),e(Ti,Zs),e(Zs,Ph),e(ze,$h),e(ze,Li),e(Li,Qs),e(Qs,Ih),e(z,Ch),e(z,Te),I(Ys,Te,null),e(Te,yh),e(Te,Dt),e(Dt,Th),e(Dt,xi),e(xi,Lh),e(Dt,xh),e(Dt,wi),e(wi,wh),e(Dt,kh),e(Te,Mh),I(Uo,Te,null),e(Te,jh),I(Ro,Te,null),e(z,Eh),e(z,Ko),I(ea,Ko,null),e(Ko,zh),I(Ho,Ko,null),e(z,Fh),e(z,Go),I(ta,Go,null),e(Go,qh),I(Jo,Go,null),v(t,Fl,g),v(t,At,g),e(At,Xo),e(Xo,ki),I(oa,ki,null),e(At,Dh),e(At,Mi),e(Mi,Ah),v(t,ql,g),v(t,Ot,g),I(na,Ot,null),e(Ot,Oh),e(Ot,Le),I(sa,Le,null),e(Le,Vh),e(Le,Vt),e(Vt,Nh),e(Vt,ji),e(ji,Sh),e(Vt,Wh),e(Vt,Ei),e(Ei,Bh),e(Vt,Uh),e(Le,Rh),I(Zo,Le,null),e(Le,Kh),I(Qo,Le,null),v(t,Dl,g),v(t,Nt,g),e(Nt,Yo),e(Yo,zi),I(aa,zi,null),e(Nt,Hh),e(Nt,Fi),e(Fi,Gh),v(t,Al,g),v(t,St,g),I(ra,St,null),e(St,Jh),e(St,xe),I(ia,xe,null),e(xe,Xh),e(xe,Wt),e(Wt,Zh),e(Wt,qi),e(qi,Qh),e(Wt,Yh),e(Wt,Di),e(Di,eu),e(Wt,tu),e(xe,ou),I(en,xe,null),e(xe,nu),I(tn,xe,null),Ol=!0},p(t,[g]){const la={};g&2&&(la.$$scope={dirty:g,ctx:t}),eo.$set(la);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:t}),no.$set(Ai);const Oi={};g&2&&(Oi.$$scope={dirty:g,ctx:t}),ao.$set(Oi);const Vi={};g&2&&(Vi.$$scope={dirty:g,ctx:t}),_o.$set(Vi);const da={};g&2&&(da.$$scope={dirty:g,ctx:t}),vo.$set(da);const Ni={};g&2&&(Ni.$$scope={dirty:g,ctx:t}),bo.$set(Ni);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:t}),Po.$set(Si);const Wi={};g&2&&(Wi.$$scope={dirty:g,ctx:t}),$o.$set(Wi);const ca={};g&2&&(ca.$$scope={dirty:g,ctx:t}),Io.$set(ca);const Bi={};g&2&&(Bi.$$scope={dirty:g,ctx:t}),yo.$set(Bi);const Ui={};g&2&&(Ui.$$scope={dirty:g,ctx:t}),To.$set(Ui);const Ri={};g&2&&(Ri.$$scope={dirty:g,ctx:t}),xo.$set(Ri);const Ki={};g&2&&(Ki.$$scope={dirty:g,ctx:t}),wo.$set(Ki);const pa={};g&2&&(pa.$$scope={dirty:g,ctx:t}),Mo.$set(pa);const Hi={};g&2&&(Hi.$$scope={dirty:g,ctx:t}),jo.$set(Hi);const Gi={};g&2&&(Gi.$$scope={dirty:g,ctx:t}),Eo.$set(Gi);const Ji={};g&2&&(Ji.$$scope={dirty:g,ctx:t}),zo.$set(Ji);const Xi={};g&2&&(Xi.$$scope={dirty:g,ctx:t}),Fo.$set(Xi);const ma={};g&2&&(ma.$$scope={dirty:g,ctx:t}),qo.$set(ma);const Zi={};g&2&&(Zi.$$scope={dirty:g,ctx:t}),Do.$set(Zi);const W={};g&2&&(W.$$scope={dirty:g,ctx:t}),Oo.$set(W);const Qi={};g&2&&(Qi.$$scope={dirty:g,ctx:t}),Vo.$set(Qi);const Yi={};g&2&&(Yi.$$scope={dirty:g,ctx:t}),So.$set(Yi);const el={};g&2&&(el.$$scope={dirty:g,ctx:t}),Wo.$set(el);const tl={};g&2&&(tl.$$scope={dirty:g,ctx:t}),Uo.$set(tl);const ol={};g&2&&(ol.$$scope={dirty:g,ctx:t}),Ro.$set(ol);const nl={};g&2&&(nl.$$scope={dirty:g,ctx:t}),Ho.$set(nl);const Bt={};g&2&&(Bt.$$scope={dirty:g,ctx:t}),Jo.$set(Bt);const sl={};g&2&&(sl.$$scope={dirty:g,ctx:t}),Zo.$set(sl);const al={};g&2&&(al.$$scope={dirty:g,ctx:t}),Qo.$set(al);const fa={};g&2&&(fa.$$scope={dirty:g,ctx:t}),en.$set(fa);const rl={};g&2&&(rl.$$scope={dirty:g,ctx:t}),tn.$set(rl)},i(t){Ol||(C(n.$$.fragment,t),C(j.$$.fragment,t),C(se.$$.fragment,t),C(Ve.$$.fragment,t),C(An.$$.fragment,t),C(On.$$.fragment,t),C(eo.$$.fragment,t),C(Nn.$$.fragment,t),C(Wn.$$.fragment,t),C(Bn.$$.fragment,t),C(no.$$.fragment,t),C(Rn.$$.fragment,t),C(Kn.$$.fragment,t),C(ao.$$.fragment,t),C(Gn.$$.fragment,t),C(Jn.$$.fragment,t),C(Zn.$$.fragment,t),C(Qn.$$.fragment,t),C(es.$$.fragment,t),C(ts.$$.fragment,t),C(os.$$.fragment,t),C(ns.$$.fragment,t),C(rs.$$.fragment,t),C(is.$$.fragment,t),C(ls.$$.fragment,t),C(ds.$$.fragment,t),C(ps.$$.fragment,t),C(ms.$$.fragment,t),C(fs.$$.fragment,t),C(us.$$.fragment,t),C(_s.$$.fragment,t),C(vs.$$.fragment,t),C($s.$$.fragment,t),C(_o.$$.fragment,t),C(vo.$$.fragment,t),C(Is.$$.fragment,t),C(bo.$$.fragment,t),C(Po.$$.fragment,t),C(Cs.$$.fragment,t),C($o.$$.fragment,t),C(Io.$$.fragment,t),C(ys.$$.fragment,t),C(Ts.$$.fragment,t),C(Ls.$$.fragment,t),C(yo.$$.fragment,t),C(To.$$.fragment,t),C(xs.$$.fragment,t),C(ws.$$.fragment,t),C(ks.$$.fragment,t),C(xo.$$.fragment,t),C(wo.$$.fragment,t),C(Ms.$$.fragment,t),C(js.$$.fragment,t),C(Mo.$$.fragment,t),C(qs.$$.fragment,t),C(jo.$$.fragment,t),C(Eo.$$.fragment,t),C(Ds.$$.fragment,t),C(zo.$$.fragment,t),C(Fo.$$.fragment,t),C(As.$$.fragment,t),C(qo.$$.fragment,t),C(Do.$$.fragment,t),C(Os.$$.fragment,t),C(Vs.$$.fragment,t),C(Ns.$$.fragment,t),C(Oo.$$.fragment,t),C(Vo.$$.fragment,t),C(Ss.$$.fragment,t),C(Ws.$$.fragment,t),C(Bs.$$.fragment,t),C(So.$$.fragment,t),C(Wo.$$.fragment,t),C(Us.$$.fragment,t),C(Rs.$$.fragment,t),C(Ys.$$.fragment,t),C(Uo.$$.fragment,t),C(Ro.$$.fragment,t),C(ea.$$.fragment,t),C(Ho.$$.fragment,t),C(ta.$$.fragment,t),C(Jo.$$.fragment,t),C(oa.$$.fragment,t),C(na.$$.fragment,t),C(sa.$$.fragment,t),C(Zo.$$.fragment,t),C(Qo.$$.fragment,t),C(aa.$$.fragment,t),C(ra.$$.fragment,t),C(ia.$$.fragment,t),C(en.$$.fragment,t),C(tn.$$.fragment,t),Ol=!0)},o(t){y(n.$$.fragment,t),y(j.$$.fragment,t),y(se.$$.fragment,t),y(Ve.$$.fragment,t),y(An.$$.fragment,t),y(On.$$.fragment,t),y(eo.$$.fragment,t),y(Nn.$$.fragment,t),y(Wn.$$.fragment,t),y(Bn.$$.fragment,t),y(no.$$.fragment,t),y(Rn.$$.fragment,t),y(Kn.$$.fragment,t),y(ao.$$.fragment,t),y(Gn.$$.fragment,t),y(Jn.$$.fragment,t),y(Zn.$$.fragment,t),y(Qn.$$.fragment,t),y(es.$$.fragment,t),y(ts.$$.fragment,t),y(os.$$.fragment,t),y(ns.$$.fragment,t),y(rs.$$.fragment,t),y(is.$$.fragment,t),y(ls.$$.fragment,t),y(ds.$$.fragment,t),y(ps.$$.fragment,t),y(ms.$$.fragment,t),y(fs.$$.fragment,t),y(us.$$.fragment,t),y(_s.$$.fragment,t),y(vs.$$.fragment,t),y($s.$$.fragment,t),y(_o.$$.fragment,t),y(vo.$$.fragment,t),y(Is.$$.fragment,t),y(bo.$$.fragment,t),y(Po.$$.fragment,t),y(Cs.$$.fragment,t),y($o.$$.fragment,t),y(Io.$$.fragment,t),y(ys.$$.fragment,t),y(Ts.$$.fragment,t),y(Ls.$$.fragment,t),y(yo.$$.fragment,t),y(To.$$.fragment,t),y(xs.$$.fragment,t),y(ws.$$.fragment,t),y(ks.$$.fragment,t),y(xo.$$.fragment,t),y(wo.$$.fragment,t),y(Ms.$$.fragment,t),y(js.$$.fragment,t),y(Mo.$$.fragment,t),y(qs.$$.fragment,t),y(jo.$$.fragment,t),y(Eo.$$.fragment,t),y(Ds.$$.fragment,t),y(zo.$$.fragment,t),y(Fo.$$.fragment,t),y(As.$$.fragment,t),y(qo.$$.fragment,t),y(Do.$$.fragment,t),y(Os.$$.fragment,t),y(Vs.$$.fragment,t),y(Ns.$$.fragment,t),y(Oo.$$.fragment,t),y(Vo.$$.fragment,t),y(Ss.$$.fragment,t),y(Ws.$$.fragment,t),y(Bs.$$.fragment,t),y(So.$$.fragment,t),y(Wo.$$.fragment,t),y(Us.$$.fragment,t),y(Rs.$$.fragment,t),y(Ys.$$.fragment,t),y(Uo.$$.fragment,t),y(Ro.$$.fragment,t),y(ea.$$.fragment,t),y(Ho.$$.fragment,t),y(ta.$$.fragment,t),y(Jo.$$.fragment,t),y(oa.$$.fragment,t),y(na.$$.fragment,t),y(sa.$$.fragment,t),y(Zo.$$.fragment,t),y(Qo.$$.fragment,t),y(aa.$$.fragment,t),y(ra.$$.fragment,t),y(ia.$$.fragment,t),y(en.$$.fragment,t),y(tn.$$.fragment,t),Ol=!1},d(t){o(d),t&&o(b),t&&o(u),T(n),t&&o(Ut),t&&o(K),T(j),t&&o(Rt),t&&o(Q),t&&o(Kt),t&&o(le),t&&o(Ht),t&&o(de),t&&o(Je),t&&o(F),T(se),t&&o(Gt),t&&o(De),t&&o(Jt),t&&o(Y),t&&o(Xt),t&&o(M),t&&o(qn),T(Ve,t),t&&o(je),t&&o(U),t&&o(nt),t&&o(me),T(An),t&&o(il),t&&o(G),T(On),T(eo),T(Nn),t&&o(ll),t&&o(at),T(Wn),t&&o(dl),t&&o(ae),T(Bn),T(no),t&&o(cl),t&&o(lt),T(Rn),t&&o(pl),t&&o(re),T(Kn),T(ao),t&&o(ml),t&&o(pt),T(Gn),t&&o(fl),t&&o(q),T(Jn),T(Zn),T(Qn),T(es),T(ts),t&&o(hl),t&&o(mt),T(os),t&&o(ul),t&&o(J),T(ns),T(rs),T(is),t&&o(gl),t&&o(ft),T(ls),t&&o(_l),t&&o(Ee),T(ds),t&&o(vl),t&&o(ht),T(ps),t&&o(bl),t&&o(X),T(ms),T(fs),T(us),t&&o(Pl),t&&o(ut),T(_s),t&&o($l),t&&o(Z),T(vs),T($s),T(_o),T(vo),T(Is),T(bo),T(Po),T(Cs),T($o),T(Io),t&&o(Il),t&&o(bt),T(ys),t&&o(Cl),t&&o(Pt),T(Ts),T(Ls),T(yo),T(To),t&&o(yl),t&&o(It),T(xs),t&&o(Tl),t&&o(Ct),T(ws),T(ks),T(xo),T(wo),t&&o(Ll),t&&o(Tt),T(Ms),t&&o(xl),t&&o(D),T(js),T(Mo),T(qs),T(jo),T(Eo),T(Ds),T(zo),T(Fo),T(As),T(qo),T(Do),t&&o(wl),t&&o(kt),T(Os),t&&o(kl),t&&o(Mt),T(Vs),T(Ns),T(Oo),T(Vo),t&&o(Ml),t&&o(Et),T(Ss),t&&o(jl),t&&o(zt),T(Ws),T(Bs),T(So),T(Wo),t&&o(El),t&&o(qt),T(Us),t&&o(zl),t&&o(z),T(Rs),T(Ys),T(Uo),T(Ro),T(ea),T(Ho),T(ta),T(Jo),t&&o(Fl),t&&o(At),T(oa),t&&o(ql),t&&o(Ot),T(na),T(sa),T(Zo),T(Qo),t&&o(Dl),t&&o(Nt),T(aa),t&&o(Al),t&&o(St),T(ra),T(ia),T(en),T(tn)}}}const dv={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function cv(L){return k_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _v extends T_{constructor(d){super();L_(this,d,cv,lv,x_,{})}}export{_v as default,dv as metadata};
