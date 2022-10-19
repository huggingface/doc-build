import{S as $_,i as I_,s as C_,e as s,k as m,w as P,t as i,M as y_,c as a,d as o,m as f,a as r,x as $,h as l,b as u,G as e,g as v,y as I,q as C,o as y,B as T,v as T_,L as N}from"../../chunks/vendor-hf-doc-builder.js";import{T as ne}from"../../chunks/Tip-hf-doc-builder.js";import{D as k}from"../../chunks/Docstring-hf-doc-builder.js";import{C as A}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as O}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as V}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function L_(L){let d,b,h,p,_;return p=new A({props:{code:`from transformers import CLIPConfig, CLIPModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>config = CLIPConfig.from_text_vision_configs(config_text, config_vision)`}}),{c(){d=s("p"),b=i("Example:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function x_(L){let d,b,h,p,_;return p=new A({props:{code:`from transformers import CLIPTextConfig, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function k_(L){let d,b,h,p,_;return p=new A({props:{code:`from transformers import CLIPVisionConfig, CLIPVisionModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function w_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function M_(L){let d,b,h,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function j_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function E_(L){let d,b,h,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function z_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function F_(L){let d,b,h,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function q_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function D_(L){let d,b,h,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function O_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function A_(L){let d,b,h,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function V_(L){let d,b,h,p,_,n,c,x,$n,Bt,K,ie,qe,j,In,ke,Cn,Ut,Q,yn,we,Ke,Tn,Rt,le,Ln,Kt,de,He,xn,Ge,F,S,Je,se,kn,Xe,Ze,Ht,De,ce,Gt,Y,wn,Oe,Qe,Mn,Jt,M,jn,pe,En,Xt,H,zn,Me,Ae,Fn;return{c(){d=s("p"),b=i("TensorFlow models and layers in "),h=s("code"),p=i("transformers"),_=i(" accept two formats as input:"),n=m(),c=s("ul"),x=s("li"),$n=i("having all inputs as keyword arguments (like PyTorch models), or"),Bt=m(),K=s("li"),ie=i("having all inputs as a list, tuple or dict in the first positional argument."),qe=m(),j=s("p"),In=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ke=s("code"),Cn=i("model.fit()"),Ut=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=s("code"),yn=i("model.fit()"),we=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),Ke=s("code"),Tn=i("fit()"),Rt=i(" and "),le=s("code"),Ln=i("predict()"),Kt=i(`, such as when creating your own layers or models with
the Keras `),de=s("code"),He=i("Functional"),xn=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Ge=m(),F=s("ul"),S=s("li"),Je=i("a single Tensor with "),se=s("code"),kn=i("input_ids"),Xe=i(" only and nothing else: "),Ze=s("code"),Ht=i("model(input_ids)"),De=m(),ce=s("li"),Gt=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s("code"),wn=i("model([input_ids, attention_mask])"),Oe=i(" or "),Qe=s("code"),Mn=i("model([input_ids, attention_mask, token_type_ids])"),Jt=m(),M=s("li"),jn=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=s("code"),En=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xt=m(),H=s("p"),zn=i(`Note that when creating models and layers with
`),Me=s("a"),Ae=i("subclassing"),Fn=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){d=a(w,"P",{});var E=r(d);b=l(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var fa=r(h);p=l(fa,"transformers"),fa.forEach(o),_=l(E," accept two formats as input:"),E.forEach(o),n=f(w),c=a(w,"UL",{});var Zt=r(c);x=a(Zt,"LI",{});var Ye=r(x);$n=l(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(o),Bt=f(Zt),K=a(Zt,"LI",{});var ha=r(K);ie=l(ha,"having all inputs as a list, tuple or dict in the first positional argument."),ha.forEach(o),Zt.forEach(o),qe=f(w),j=a(w,"P",{});var B=r(j);In=l(B,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ke=a(B,"CODE",{});var et=r(ke);Cn=l(et,"model.fit()"),et.forEach(o),Ut=l(B,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a(B,"CODE",{});var ua=r(Q);yn=l(ua,"model.fit()"),ua.forEach(o),we=l(B,` supports! If, however, you want to use the second
format outside of Keras methods like `),Ke=a(B,"CODE",{});var ga=r(Ke);Tn=l(ga,"fit()"),ga.forEach(o),Rt=l(B," and "),le=a(B,"CODE",{});var qn=r(le);Ln=l(qn,"predict()"),qn.forEach(o),Kt=l(B,`, such as when creating your own layers or models with
the Keras `),de=a(B,"CODE",{});var Ve=r(de);He=l(Ve,"Functional"),Ve.forEach(o),xn=l(B,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),B.forEach(o),Ge=f(w),F=a(w,"UL",{});var je=r(F);S=a(je,"LI",{});var U=r(S);Je=l(U,"a single Tensor with "),se=a(U,"CODE",{});var _a=r(se);kn=l(_a,"input_ids"),_a.forEach(o),Xe=l(U," only and nothing else: "),Ze=a(U,"CODE",{});var Ne=r(Ze);Ht=l(Ne,"model(input_ids)"),Ne.forEach(o),U.forEach(o),De=f(je),ce=a(je,"LI",{});var tt=r(ce);Gt=l(tt,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=a(tt,"CODE",{});var va=r(Y);wn=l(va,"model([input_ids, attention_mask])"),va.forEach(o),Oe=l(tt," or "),Qe=a(tt,"CODE",{});var Se=r(Qe);Mn=l(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(o),tt.forEach(o),Jt=f(je),M=a(je,"LI",{});var Dn=r(M);jn=l(Dn,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=a(Dn,"CODE",{});var ba=r(pe);En=l(ba,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ba.forEach(o),Dn.forEach(o),je.forEach(o),Xt=f(w),H=a(w,"P",{});var ot=r(H);zn=l(ot,`Note that when creating models and layers with
`),Me=a(ot,"A",{href:!0,rel:!0});var me=r(Me);Ae=l(me,"subclassing"),me.forEach(o),Fn=l(ot,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ot.forEach(o),this.h()},h(){u(Me,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(Me,"rel","nofollow")},m(w,E){v(w,d,E),e(d,b),e(d,h),e(h,p),e(d,_),v(w,n,E),v(w,c,E),e(c,x),e(x,$n),e(c,Bt),e(c,K),e(K,ie),v(w,qe,E),v(w,j,E),e(j,In),e(j,ke),e(ke,Cn),e(j,Ut),e(j,Q),e(Q,yn),e(j,we),e(j,Ke),e(Ke,Tn),e(j,Rt),e(j,le),e(le,Ln),e(j,Kt),e(j,de),e(de,He),e(j,xn),v(w,Ge,E),v(w,F,E),e(F,S),e(S,Je),e(S,se),e(se,kn),e(S,Xe),e(S,Ze),e(Ze,Ht),e(F,De),e(F,ce),e(ce,Gt),e(ce,Y),e(Y,wn),e(ce,Oe),e(ce,Qe),e(Qe,Mn),e(F,Jt),e(F,M),e(M,jn),e(M,pe),e(pe,En),v(w,Xt,E),v(w,H,E),e(H,zn),e(H,Me),e(Me,Ae),e(H,Fn)},d(w){w&&o(d),w&&o(n),w&&o(c),w&&o(qe),w&&o(j),w&&o(Ge),w&&o(F),w&&o(Xt),w&&o(H)}}}function N_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function S_(L){let d,b,h,p,_;return p=new A({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function W_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function B_(L){let d,b,h,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function U_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function R_(L){let d,b,h,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function K_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function H_(L){let d,b,h,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function G_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function J_(L){let d,b,h,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function X_(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function Z_(L){let d,b,h,p,_;return p=new A({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Example:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function Q_(L){let d,b,h,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function Y_(L){let d,b,h,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function ev(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function tv(L){let d,b,h,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Example:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function ov(L){let d,b,h,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(c,"CODE",{});var x=r(h);p=l(x,"Module"),x.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,h),e(h,p),e(d,_)},d(n){n&&o(d)}}}function nv(L){let d,b,h,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Example:"),h=m(),P(p.$$.fragment)},l(n){d=a(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(o),h=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,h,c),I(p,n,c),_=!0},p:N,i(n){_||(C(p.$$.fragment,n),_=!0)},o(n){y(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(h),T(p,n)}}}function sv(L){let d,b,h,p,_,n,c,x,$n,Bt,K,ie,qe,j,In,ke,Cn,Ut,Q,yn,we,Ke,Tn,Rt,le,Ln,Kt,de,He,xn,Ge,F,S,Je,se,kn,Xe,Ze,Ht,De,ce,Gt,Y,wn,Oe,Qe,Mn,Jt,M,jn,pe,En,Xt,H,zn,Me,Ae,Fn,w,E,fa,Zt,Ye,ha,B,et,ua,ga,qn,Ve,je,U,_a,Ne,tt,va,Se,Dn,ba,ot,me,Qt,Pr,On,Ld,$r,xd,rl,G,An,kd,Yt,Pa,wd,Md,$a,jd,Ed,zd,nt,Fd,Ia,qd,Dd,Ca,Od,Ad,Vd,eo,Nd,to,Vn,Sd,Nn,Wd,ya,Bd,Ud,il,st,oo,Ir,Sn,Rd,Cr,Kd,ll,ae,Wn,Hd,at,Gd,Ta,Jd,Xd,Bn,Zd,Qd,Yd,rt,ec,La,tc,oc,xa,nc,sc,ac,no,dl,it,so,yr,Un,rc,Tr,ic,cl,re,Rn,lc,lt,dc,ka,cc,pc,Kn,mc,fc,hc,dt,uc,wa,gc,_c,Ma,vc,bc,Pc,ao,pl,ct,ro,Lr,Hn,$c,xr,Ic,ml,q,Gn,Cc,kr,yc,Tc,Jn,Lc,ja,xc,kc,wc,fe,Xn,Mc,wr,jc,Ec,Mr,Ea,zc,jr,Fc,qc,Er,Dc,Oc,io,Zn,Ac,Qn,Vc,zr,Nc,Sc,Wc,lo,Yn,Bc,Fr,Uc,Rc,za,es,fl,pt,co,qr,ts,Kc,Dr,Hc,hl,J,os,Gc,ns,Jc,Or,Xc,Zc,Qc,ss,Yc,Fa,ep,tp,op,he,as,np,Ar,sp,ap,Vr,qa,rp,Nr,ip,lp,Sr,dp,cp,po,rs,pp,Wr,mp,ul,mt,mo,Br,is,fp,Ur,hp,gl,Ee,ls,up,Rr,gp,_p,ds,vp,Da,bp,Pp,_l,ft,fo,Kr,cs,$p,Hr,Ip,vl,X,ps,Cp,Gr,yp,Tp,ee,Oa,Lp,xp,Aa,kp,wp,Va,Mp,jp,Jr,Ep,zp,Na,Fp,qp,Dp,ho,ms,Op,fs,Ap,Sa,Vp,Np,Sp,uo,hs,Wp,us,Bp,Wa,Up,Rp,bl,ht,go,Xr,gs,Kp,Zr,Hp,Pl,Z,_s,Gp,vs,Jp,bs,Xp,Zp,Qp,ue,Ps,Yp,ut,em,Ba,tm,om,Qr,nm,sm,am,_o,rm,vo,im,ge,$s,lm,gt,dm,Ua,cm,pm,Yr,mm,fm,hm,bo,um,Po,gm,_e,Is,_m,_t,vm,Ra,bm,Pm,ei,$m,Im,Cm,$o,ym,Io,$l,vt,Co,ti,Cs,Tm,oi,Lm,Il,bt,ys,xm,ve,Ts,km,Pt,wm,Ka,Mm,jm,ni,Em,zm,Fm,yo,qm,To,Cl,$t,Lo,si,Ls,Dm,ai,Om,yl,It,xs,Am,be,ks,Vm,Ct,Nm,Ha,Sm,Wm,ri,Bm,Um,Rm,xo,Km,ko,Tl,yt,wo,ii,ws,Hm,li,Gm,Ll,D,Ms,Jm,js,Xm,Ga,Zm,Qm,Ym,Es,ef,zs,tf,of,nf,Mo,sf,Pe,Fs,af,Tt,rf,Ja,lf,df,di,cf,pf,mf,jo,ff,Eo,hf,$e,qs,uf,Lt,gf,Xa,_f,vf,ci,bf,Pf,$f,zo,If,Fo,Cf,Ie,Ds,yf,xt,Tf,Za,Lf,xf,pi,kf,wf,Mf,qo,jf,Do,xl,kt,Oo,mi,Os,Ef,fi,zf,kl,wt,As,Ff,Ce,Vs,qf,Mt,Df,Qa,Of,Af,hi,Vf,Nf,Sf,Ao,Wf,Vo,wl,jt,No,ui,Ns,Bf,gi,Uf,Ml,Et,Ss,Rf,ye,Ws,Kf,zt,Hf,Ya,Gf,Jf,_i,Xf,Zf,Qf,So,Yf,Wo,jl,Ft,Bo,vi,Bs,eh,bi,th,El,z,Us,oh,Rs,nh,er,sh,ah,rh,Ks,ih,Hs,lh,dh,ch,Pi,ph,mh,ze,$i,Gs,fh,hh,Ii,Js,uh,gh,Ci,Xs,_h,vh,yi,Zs,bh,Ph,Te,Qs,$h,qt,Ih,Ti,Ch,yh,Li,Th,Lh,xh,Uo,kh,Ro,wh,Ko,Ys,Mh,Ho,jh,Go,ea,Eh,Jo,zl,Dt,Xo,xi,ta,zh,ki,Fh,Fl,Ot,oa,qh,Le,na,Dh,At,Oh,wi,Ah,Vh,Mi,Nh,Sh,Wh,Zo,Bh,Qo,ql,Vt,Yo,ji,sa,Uh,Ei,Rh,Dl,Nt,aa,Kh,xe,ra,Hh,St,Gh,zi,Jh,Xh,Fi,Zh,Qh,Yh,en,eu,tn,Ol;return n=new O({}),j=new O({}),se=new O({}),Ve=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),On=new O({}),An=new k({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L254"}}),eo=new V({props:{anchor:"transformers.CLIPConfig.example",$$slots:{default:[L_]},$$scope:{ctx:L}}}),Vn=new k({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L325",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),Sn=new O({}),Wn=new k({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L40"}}),no=new V({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[x_]},$$scope:{ctx:L}}}),Un=new O({}),Rn=new k({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L148"}}),ao=new V({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[k_]},$$scope:{ctx:L}}}),Hn=new O({}),Gn=new k({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L260"}}),Xn=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L346",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zn=new k({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L373",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L401",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),es=new k({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L496"}}),ts=new O({}),os=new k({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),as=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rs=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),is=new O({}),ls=new k({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"do_convert_rgb",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
Whether or not to convert <code>PIL.Image.Image</code> into <code>RGB</code> format`,name:"convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L32"}}),cs=new O({}),ps=new k({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22"}}),ms=new k({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),hs=new k({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),gs=new O({}),_s=new k({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L854"}}),Ps=new k({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),_o=new ne({props:{$$slots:{default:[w_]},$$scope:{ctx:L}}}),vo=new V({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[M_]},$$scope:{ctx:L}}}),$s=new k({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),bo=new ne({props:{$$slots:{default:[j_]},$$scope:{ctx:L}}}),Po=new V({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[E_]},$$scope:{ctx:L}}}),Is=new k({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),$o=new ne({props:{$$slots:{default:[z_]},$$scope:{ctx:L}}}),Io=new V({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[F_]},$$scope:{ctx:L}}}),Cs=new O({}),ys=new k({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L688"}}),Ts=new k({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),yo=new ne({props:{$$slots:{default:[q_]},$$scope:{ctx:L}}}),To=new V({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[D_]},$$scope:{ctx:L}}}),Ls=new O({}),xs=new k({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L801"}}),ks=new k({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),xo=new ne({props:{$$slots:{default:[O_]},$$scope:{ctx:L}}}),ko=new V({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[A_]},$$scope:{ctx:L}}}),ws=new O({}),Ms=new k({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1229"}}),Mo=new ne({props:{$$slots:{default:[V_]},$$scope:{ctx:L}}}),Fs=new k({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),jo=new ne({props:{$$slots:{default:[N_]},$$scope:{ctx:L}}}),Eo=new V({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[S_]},$$scope:{ctx:L}}}),qs=new k({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),zo=new ne({props:{$$slots:{default:[W_]},$$scope:{ctx:L}}}),Fo=new V({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[B_]},$$scope:{ctx:L}}}),Ds=new k({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),qo=new ne({props:{$$slots:{default:[U_]},$$scope:{ctx:L}}}),Do=new V({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[R_]},$$scope:{ctx:L}}}),Os=new O({}),As=new k({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1056"}}),Vs=new k({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ao=new ne({props:{$$slots:{default:[K_]},$$scope:{ctx:L}}}),Vo=new V({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[H_]},$$scope:{ctx:L}}}),Ns=new O({}),Ss=new k({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1131"}}),Ws=new k({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),So=new ne({props:{$$slots:{default:[G_]},$$scope:{ctx:L}}}),Wo=new V({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[J_]},$$scope:{ctx:L}}}),Bs=new O({}),Us=new k({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),Qs=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Uo=new ne({props:{$$slots:{default:[X_]},$$scope:{ctx:L}}}),Ro=new V({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[Z_]},$$scope:{ctx:L}}}),Ys=new k({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ho=new V({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[Q_]},$$scope:{ctx:L}}}),ea=new k({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Jo=new V({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[Y_]},$$scope:{ctx:L}}}),ta=new O({}),oa=new k({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),na=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Zo=new ne({props:{$$slots:{default:[ev]},$$scope:{ctx:L}}}),Qo=new V({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[tv]},$$scope:{ctx:L}}}),sa=new O({}),aa=new k({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),ra=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),en=new ne({props:{$$slots:{default:[ov]},$$scope:{ctx:L}}}),tn=new V({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[nv]},$$scope:{ctx:L}}}),{c(){d=s("meta"),b=m(),h=s("h1"),p=s("a"),_=s("span"),P(n.$$.fragment),c=m(),x=s("span"),$n=i("CLIP"),Bt=m(),K=s("h2"),ie=s("a"),qe=s("span"),P(j.$$.fragment),In=m(),ke=s("span"),Cn=i("Overview"),Ut=m(),Q=s("p"),yn=i("The CLIP model was proposed in "),we=s("a"),Ke=i("Learning Transferable Visual Models From Natural Language Supervision"),Tn=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Rt=m(),le=s("p"),Ln=i("The abstract from the paper is the following:"),Kt=m(),de=s("p"),He=s("em"),xn=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Ge=m(),F=s("h2"),S=s("a"),Je=s("span"),P(se.$$.fragment),kn=m(),Xe=s("span"),Ze=i("Usage"),Ht=m(),De=s("p"),ce=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Gt=m(),Y=s("p"),wn=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Oe=s("a"),Qe=i("CLIPFeatureExtractor"),Mn=i(" can be used to resize (or rescale) and normalize images for the model."),Jt=m(),M=s("p"),jn=i("The "),pe=s("a"),En=i("CLIPTokenizer"),Xt=i(" is used to encode the text. The "),H=s("a"),zn=i("CLIPProcessor"),Me=i(` wraps
`),Ae=s("a"),Fn=i("CLIPFeatureExtractor"),w=i(" and "),E=s("a"),fa=i("CLIPTokenizer"),Zt=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),Ye=s("a"),ha=i("CLIPProcessor"),B=i(" and "),et=s("a"),ua=i("CLIPModel"),ga=i("."),qn=m(),P(Ve.$$.fragment),je=m(),U=s("p"),_a=i("This model was contributed by "),Ne=s("a"),tt=i("valhalla"),va=i(". The original code can be found "),Se=s("a"),Dn=i("here"),ba=i("."),ot=m(),me=s("h2"),Qt=s("a"),Pr=s("span"),P(On.$$.fragment),Ld=m(),$r=s("span"),xd=i("CLIPConfig"),rl=m(),G=s("div"),P(An.$$.fragment),kd=m(),Yt=s("p"),Pa=s("a"),wd=i("CLIPConfig"),Md=i(" is the configuration class to store the configuration of a "),$a=s("a"),jd=i("CLIPModel"),Ed=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),zd=m(),nt=s("p"),Fd=i("Configuration objects inherit from "),Ia=s("a"),qd=i("PretrainedConfig"),Dd=i(` and can be used to control the model outputs. Read the
documentation from `),Ca=s("a"),Od=i("PretrainedConfig"),Ad=i(" for more information."),Vd=m(),P(eo.$$.fragment),Nd=m(),to=s("div"),P(Vn.$$.fragment),Sd=m(),Nn=s("p"),Wd=i("Instantiate a "),ya=s("a"),Bd=i("CLIPConfig"),Ud=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),il=m(),st=s("h2"),oo=s("a"),Ir=s("span"),P(Sn.$$.fragment),Rd=m(),Cr=s("span"),Kd=i("CLIPTextConfig"),ll=m(),ae=s("div"),P(Wn.$$.fragment),Hd=m(),at=s("p"),Gd=i("This is the configuration class to store the configuration of a "),Ta=s("a"),Jd=i("CLIPModel"),Xd=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Bn=s("a"),Zd=i("openai/clip-vit-base-patch32"),Qd=i(" architecture."),Yd=m(),rt=s("p"),ec=i("Configuration objects inherit from "),La=s("a"),tc=i("PretrainedConfig"),oc=i(` and can be used to control the model outputs. Read the
documentation from `),xa=s("a"),nc=i("PretrainedConfig"),sc=i(" for more information."),ac=m(),P(no.$$.fragment),dl=m(),it=s("h2"),so=s("a"),yr=s("span"),P(Un.$$.fragment),rc=m(),Tr=s("span"),ic=i("CLIPVisionConfig"),cl=m(),re=s("div"),P(Rn.$$.fragment),lc=m(),lt=s("p"),dc=i("This is the configuration class to store the configuration of a "),ka=s("a"),cc=i("CLIPModel"),pc=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Kn=s("a"),mc=i("openai/clip-vit-base-patch32"),fc=i(" architecture."),hc=m(),dt=s("p"),uc=i("Configuration objects inherit from "),wa=s("a"),gc=i("PretrainedConfig"),_c=i(` and can be used to control the model outputs. Read the
documentation from `),Ma=s("a"),vc=i("PretrainedConfig"),bc=i(" for more information."),Pc=m(),P(ao.$$.fragment),pl=m(),ct=s("h2"),ro=s("a"),Lr=s("span"),P(Hn.$$.fragment),$c=m(),xr=s("span"),Ic=i("CLIPTokenizer"),ml=m(),q=s("div"),P(Gn.$$.fragment),Cc=m(),kr=s("p"),yc=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Tc=m(),Jn=s("p"),Lc=i("This tokenizer inherits from "),ja=s("a"),xc=i("PreTrainedTokenizer"),kc=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wc=m(),fe=s("div"),P(Xn.$$.fragment),Mc=m(),wr=s("p"),jc=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Ec=m(),Mr=s("ul"),Ea=s("li"),zc=i("single sequence: "),jr=s("code"),Fc=i("<|startoftext|> X <|endoftext|>"),qc=m(),Er=s("p"),Dc=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Oc=m(),io=s("div"),P(Zn.$$.fragment),Ac=m(),Qn=s("p"),Vc=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),zr=s("code"),Nc=i("prepare_for_model"),Sc=i(" method."),Wc=m(),lo=s("div"),P(Yn.$$.fragment),Bc=m(),Fr=s("p"),Uc=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Rc=m(),za=s("div"),P(es.$$.fragment),fl=m(),pt=s("h2"),co=s("a"),qr=s("span"),P(ts.$$.fragment),Kc=m(),Dr=s("span"),Hc=i("CLIPTokenizerFast"),hl=m(),J=s("div"),P(os.$$.fragment),Gc=m(),ns=s("p"),Jc=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Or=s("em"),Xc=i("tokenizers"),Zc=i(` library). Based on byte-level
Byte-Pair-Encoding.`),Qc=m(),ss=s("p"),Yc=i("This tokenizer inherits from "),Fa=s("a"),ep=i("PreTrainedTokenizerFast"),tp=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),op=m(),he=s("div"),P(as.$$.fragment),np=m(),Ar=s("p"),sp=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),ap=m(),Vr=s("ul"),qa=s("li"),rp=i("single sequence: "),Nr=s("code"),ip=i("<|startoftext|> X <|endoftext|>"),lp=m(),Sr=s("p"),dp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),cp=m(),po=s("div"),P(rs.$$.fragment),pp=m(),Wr=s("p"),mp=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ul=m(),mt=s("h2"),mo=s("a"),Br=s("span"),P(is.$$.fragment),fp=m(),Ur=s("span"),hp=i("CLIPFeatureExtractor"),gl=m(),Ee=s("div"),P(ls.$$.fragment),up=m(),Rr=s("p"),gp=i("Constructs a CLIP feature extractor."),_p=m(),ds=s("p"),vp=i("This feature extractor inherits from "),Da=s("a"),bp=i("FeatureExtractionMixin"),Pp=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),_l=m(),ft=s("h2"),fo=s("a"),Kr=s("span"),P(cs.$$.fragment),$p=m(),Hr=s("span"),Ip=i("CLIPProcessor"),vl=m(),X=s("div"),P(ps.$$.fragment),Cp=m(),Gr=s("p"),yp=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Tp=m(),ee=s("p"),Oa=s("a"),Lp=i("CLIPProcessor"),xp=i(" offers all the functionalities of "),Aa=s("a"),kp=i("CLIPFeatureExtractor"),wp=i(" and "),Va=s("a"),Mp=i("CLIPTokenizerFast"),jp=i(`. See the
`),Jr=s("code"),Ep=i("__call__()"),zp=i(" and "),Na=s("a"),Fp=i("decode()"),qp=i(" for more information."),Dp=m(),ho=s("div"),P(ms.$$.fragment),Op=m(),fs=s("p"),Ap=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Sa=s("a"),Vp=i("batch_decode()"),Np=i(`. Please
refer to the docstring of this method for more information.`),Sp=m(),uo=s("div"),P(hs.$$.fragment),Wp=m(),us=s("p"),Bp=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Wa=s("a"),Up=i("decode()"),Rp=i(`. Please refer to
the docstring of this method for more information.`),bl=m(),ht=s("h2"),go=s("a"),Xr=s("span"),P(gs.$$.fragment),Kp=m(),Zr=s("span"),Hp=i("CLIPModel"),Pl=m(),Z=s("div"),P(_s.$$.fragment),Gp=m(),vs=s("p"),Jp=i("This model is a PyTorch "),bs=s("a"),Xp=i("torch.nn.Module"),Zp=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qp=m(),ue=s("div"),P(Ps.$$.fragment),Yp=m(),ut=s("p"),em=i("The "),Ba=s("a"),tm=i("CLIPModel"),om=i(" forward method, overrides the "),Qr=s("code"),nm=i("__call__"),sm=i(" special method."),am=m(),P(_o.$$.fragment),rm=m(),P(vo.$$.fragment),im=m(),ge=s("div"),P($s.$$.fragment),lm=m(),gt=s("p"),dm=i("The "),Ua=s("a"),cm=i("CLIPModel"),pm=i(" forward method, overrides the "),Yr=s("code"),mm=i("__call__"),fm=i(" special method."),hm=m(),P(bo.$$.fragment),um=m(),P(Po.$$.fragment),gm=m(),_e=s("div"),P(Is.$$.fragment),_m=m(),_t=s("p"),vm=i("The "),Ra=s("a"),bm=i("CLIPModel"),Pm=i(" forward method, overrides the "),ei=s("code"),$m=i("__call__"),Im=i(" special method."),Cm=m(),P($o.$$.fragment),ym=m(),P(Io.$$.fragment),$l=m(),vt=s("h2"),Co=s("a"),ti=s("span"),P(Cs.$$.fragment),Tm=m(),oi=s("span"),Lm=i("CLIPTextModel"),Il=m(),bt=s("div"),P(ys.$$.fragment),xm=m(),ve=s("div"),P(Ts.$$.fragment),km=m(),Pt=s("p"),wm=i("The "),Ka=s("a"),Mm=i("CLIPTextModel"),jm=i(" forward method, overrides the "),ni=s("code"),Em=i("__call__"),zm=i(" special method."),Fm=m(),P(yo.$$.fragment),qm=m(),P(To.$$.fragment),Cl=m(),$t=s("h2"),Lo=s("a"),si=s("span"),P(Ls.$$.fragment),Dm=m(),ai=s("span"),Om=i("CLIPVisionModel"),yl=m(),It=s("div"),P(xs.$$.fragment),Am=m(),be=s("div"),P(ks.$$.fragment),Vm=m(),Ct=s("p"),Nm=i("The "),Ha=s("a"),Sm=i("CLIPVisionModel"),Wm=i(" forward method, overrides the "),ri=s("code"),Bm=i("__call__"),Um=i(" special method."),Rm=m(),P(xo.$$.fragment),Km=m(),P(ko.$$.fragment),Tl=m(),yt=s("h2"),wo=s("a"),ii=s("span"),P(ws.$$.fragment),Hm=m(),li=s("span"),Gm=i("TFCLIPModel"),Ll=m(),D=s("div"),P(Ms.$$.fragment),Jm=m(),js=s("p"),Xm=i("This model inherits from "),Ga=s("a"),Zm=i("TFPreTrainedModel"),Qm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ym=m(),Es=s("p"),ef=i("This model is also a "),zs=s("a"),tf=i("tf.keras.Model"),of=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf=m(),P(Mo.$$.fragment),sf=m(),Pe=s("div"),P(Fs.$$.fragment),af=m(),Tt=s("p"),rf=i("The "),Ja=s("a"),lf=i("TFCLIPModel"),df=i(" forward method, overrides the "),di=s("code"),cf=i("__call__"),pf=i(" special method."),mf=m(),P(jo.$$.fragment),ff=m(),P(Eo.$$.fragment),hf=m(),$e=s("div"),P(qs.$$.fragment),uf=m(),Lt=s("p"),gf=i("The "),Xa=s("a"),_f=i("TFCLIPModel"),vf=i(" forward method, overrides the "),ci=s("code"),bf=i("__call__"),Pf=i(" special method."),$f=m(),P(zo.$$.fragment),If=m(),P(Fo.$$.fragment),Cf=m(),Ie=s("div"),P(Ds.$$.fragment),yf=m(),xt=s("p"),Tf=i("The "),Za=s("a"),Lf=i("TFCLIPModel"),xf=i(" forward method, overrides the "),pi=s("code"),kf=i("__call__"),wf=i(" special method."),Mf=m(),P(qo.$$.fragment),jf=m(),P(Do.$$.fragment),xl=m(),kt=s("h2"),Oo=s("a"),mi=s("span"),P(Os.$$.fragment),Ef=m(),fi=s("span"),zf=i("TFCLIPTextModel"),kl=m(),wt=s("div"),P(As.$$.fragment),Ff=m(),Ce=s("div"),P(Vs.$$.fragment),qf=m(),Mt=s("p"),Df=i("The "),Qa=s("a"),Of=i("TFCLIPTextModel"),Af=i(" forward method, overrides the "),hi=s("code"),Vf=i("__call__"),Nf=i(" special method."),Sf=m(),P(Ao.$$.fragment),Wf=m(),P(Vo.$$.fragment),wl=m(),jt=s("h2"),No=s("a"),ui=s("span"),P(Ns.$$.fragment),Bf=m(),gi=s("span"),Uf=i("TFCLIPVisionModel"),Ml=m(),Et=s("div"),P(Ss.$$.fragment),Rf=m(),ye=s("div"),P(Ws.$$.fragment),Kf=m(),zt=s("p"),Hf=i("The "),Ya=s("a"),Gf=i("TFCLIPVisionModel"),Jf=i(" forward method, overrides the "),_i=s("code"),Xf=i("__call__"),Zf=i(" special method."),Qf=m(),P(So.$$.fragment),Yf=m(),P(Wo.$$.fragment),jl=m(),Ft=s("h2"),Bo=s("a"),vi=s("span"),P(Bs.$$.fragment),eh=m(),bi=s("span"),th=i("FlaxCLIPModel"),El=m(),z=s("div"),P(Us.$$.fragment),oh=m(),Rs=s("p"),nh=i("This model inherits from "),er=s("a"),sh=i("FlaxPreTrainedModel"),ah=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rh=m(),Ks=s("p"),ih=i("This model is also a Flax Linen "),Hs=s("a"),lh=i("flax.linen.Module"),dh=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ch=m(),Pi=s("p"),ph=i("Finally, this model supports inherent JAX features such as:"),mh=m(),ze=s("ul"),$i=s("li"),Gs=s("a"),fh=i("Just-In-Time (JIT) compilation"),hh=m(),Ii=s("li"),Js=s("a"),uh=i("Automatic Differentiation"),gh=m(),Ci=s("li"),Xs=s("a"),_h=i("Vectorization"),vh=m(),yi=s("li"),Zs=s("a"),bh=i("Parallelization"),Ph=m(),Te=s("div"),P(Qs.$$.fragment),$h=m(),qt=s("p"),Ih=i("The "),Ti=s("code"),Ch=i("FlaxCLIPPreTrainedModel"),yh=i(" forward method, overrides the "),Li=s("code"),Th=i("__call__"),Lh=i(" special method."),xh=m(),P(Uo.$$.fragment),kh=m(),P(Ro.$$.fragment),wh=m(),Ko=s("div"),P(Ys.$$.fragment),Mh=m(),P(Ho.$$.fragment),jh=m(),Go=s("div"),P(ea.$$.fragment),Eh=m(),P(Jo.$$.fragment),zl=m(),Dt=s("h2"),Xo=s("a"),xi=s("span"),P(ta.$$.fragment),zh=m(),ki=s("span"),Fh=i("FlaxCLIPTextModel"),Fl=m(),Ot=s("div"),P(oa.$$.fragment),qh=m(),Le=s("div"),P(na.$$.fragment),Dh=m(),At=s("p"),Oh=i("The "),wi=s("code"),Ah=i("FlaxCLIPTextPreTrainedModel"),Vh=i(" forward method, overrides the "),Mi=s("code"),Nh=i("__call__"),Sh=i(" special method."),Wh=m(),P(Zo.$$.fragment),Bh=m(),P(Qo.$$.fragment),ql=m(),Vt=s("h2"),Yo=s("a"),ji=s("span"),P(sa.$$.fragment),Uh=m(),Ei=s("span"),Rh=i("FlaxCLIPVisionModel"),Dl=m(),Nt=s("div"),P(aa.$$.fragment),Kh=m(),xe=s("div"),P(ra.$$.fragment),Hh=m(),St=s("p"),Gh=i("The "),zi=s("code"),Jh=i("FlaxCLIPVisionPreTrainedModel"),Xh=i(" forward method, overrides the "),Fi=s("code"),Zh=i("__call__"),Qh=i(" special method."),Yh=m(),P(en.$$.fragment),eu=m(),P(tn.$$.fragment),this.h()},l(t){const g=y_('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(o),b=f(t),h=a(t,"H1",{class:!0});var ia=r(h);p=a(ia,"A",{id:!0,class:!0,href:!0});var qi=r(p);_=a(qi,"SPAN",{});var Di=r(_);$(n.$$.fragment,Di),Di.forEach(o),qi.forEach(o),c=f(ia),x=a(ia,"SPAN",{});var Oi=r(x);$n=l(Oi,"CLIP"),Oi.forEach(o),ia.forEach(o),Bt=f(t),K=a(t,"H2",{class:!0});var la=r(K);ie=a(la,"A",{id:!0,class:!0,href:!0});var Ai=r(ie);qe=a(Ai,"SPAN",{});var Vi=r(qe);$(j.$$.fragment,Vi),Vi.forEach(o),Ai.forEach(o),In=f(la),ke=a(la,"SPAN",{});var Ni=r(ke);Cn=l(Ni,"Overview"),Ni.forEach(o),la.forEach(o),Ut=f(t),Q=a(t,"P",{});var da=r(Q);yn=l(da,"The CLIP model was proposed in "),we=a(da,"A",{href:!0,rel:!0});var Si=r(we);Ke=l(Si,"Learning Transferable Visual Models From Natural Language Supervision"),Si.forEach(o),Tn=l(da,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),da.forEach(o),Rt=f(t),le=a(t,"P",{});var Wi=r(le);Ln=l(Wi,"The abstract from the paper is the following:"),Wi.forEach(o),Kt=f(t),de=a(t,"P",{});var Bi=r(de);He=a(Bi,"EM",{});var Ui=r(He);xn=l(Ui,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Ui.forEach(o),Bi.forEach(o),Ge=f(t),F=a(t,"H2",{class:!0});var ca=r(F);S=a(ca,"A",{id:!0,class:!0,href:!0});var Ri=r(S);Je=a(Ri,"SPAN",{});var Ki=r(Je);$(se.$$.fragment,Ki),Ki.forEach(o),Ri.forEach(o),kn=f(ca),Xe=a(ca,"SPAN",{});var Hi=r(Xe);Ze=l(Hi,"Usage"),Hi.forEach(o),ca.forEach(o),Ht=f(t),De=a(t,"P",{});var Gi=r(De);ce=l(Gi,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Gi.forEach(o),Gt=f(t),Y=a(t,"P",{});var pa=r(Y);wn=l(pa,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Oe=a(pa,"A",{href:!0});var Ji=r(Oe);Qe=l(Ji,"CLIPFeatureExtractor"),Ji.forEach(o),Mn=l(pa," can be used to resize (or rescale) and normalize images for the model."),pa.forEach(o),Jt=f(t),M=a(t,"P",{});var W=r(M);jn=l(W,"The "),pe=a(W,"A",{href:!0});var Xi=r(pe);En=l(Xi,"CLIPTokenizer"),Xi.forEach(o),Xt=l(W," is used to encode the text. The "),H=a(W,"A",{href:!0});var Zi=r(H);zn=l(Zi,"CLIPProcessor"),Zi.forEach(o),Me=l(W,` wraps
`),Ae=a(W,"A",{href:!0});var Qi=r(Ae);Fn=l(Qi,"CLIPFeatureExtractor"),Qi.forEach(o),w=l(W," and "),E=a(W,"A",{href:!0});var Yi=r(E);fa=l(Yi,"CLIPTokenizer"),Yi.forEach(o),Zt=l(W,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),Ye=a(W,"A",{href:!0});var el=r(Ye);ha=l(el,"CLIPProcessor"),el.forEach(o),B=l(W," and "),et=a(W,"A",{href:!0});var tl=r(et);ua=l(tl,"CLIPModel"),tl.forEach(o),ga=l(W,"."),W.forEach(o),qn=f(t),$(Ve.$$.fragment,t),je=f(t),U=a(t,"P",{});var Wt=r(U);_a=l(Wt,"This model was contributed by "),Ne=a(Wt,"A",{href:!0,rel:!0});var ol=r(Ne);tt=l(ol,"valhalla"),ol.forEach(o),va=l(Wt,". The original code can be found "),Se=a(Wt,"A",{href:!0,rel:!0});var nl=r(Se);Dn=l(nl,"here"),nl.forEach(o),ba=l(Wt,"."),Wt.forEach(o),ot=f(t),me=a(t,"H2",{class:!0});var ma=r(me);Qt=a(ma,"A",{id:!0,class:!0,href:!0});var sl=r(Qt);Pr=a(sl,"SPAN",{});var nu=r(Pr);$(On.$$.fragment,nu),nu.forEach(o),sl.forEach(o),Ld=f(ma),$r=a(ma,"SPAN",{});var su=r($r);xd=l(su,"CLIPConfig"),su.forEach(o),ma.forEach(o),rl=f(t),G=a(t,"DIV",{class:!0});var We=r(G);$(An.$$.fragment,We),kd=f(We),Yt=a(We,"P",{});var al=r(Yt);Pa=a(al,"A",{href:!0});var au=r(Pa);wd=l(au,"CLIPConfig"),au.forEach(o),Md=l(al," is the configuration class to store the configuration of a "),$a=a(al,"A",{href:!0});var ru=r($a);jd=l(ru,"CLIPModel"),ru.forEach(o),Ed=l(al,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),al.forEach(o),zd=f(We),nt=a(We,"P",{});var tr=r(nt);Fd=l(tr,"Configuration objects inherit from "),Ia=a(tr,"A",{href:!0});var iu=r(Ia);qd=l(iu,"PretrainedConfig"),iu.forEach(o),Dd=l(tr,` and can be used to control the model outputs. Read the
documentation from `),Ca=a(tr,"A",{href:!0});var lu=r(Ca);Od=l(lu,"PretrainedConfig"),lu.forEach(o),Ad=l(tr," for more information."),tr.forEach(o),Vd=f(We),$(eo.$$.fragment,We),Nd=f(We),to=a(We,"DIV",{class:!0});var Al=r(to);$(Vn.$$.fragment,Al),Sd=f(Al),Nn=a(Al,"P",{});var Vl=r(Nn);Wd=l(Vl,"Instantiate a "),ya=a(Vl,"A",{href:!0});var du=r(ya);Bd=l(du,"CLIPConfig"),du.forEach(o),Ud=l(Vl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Vl.forEach(o),Al.forEach(o),We.forEach(o),il=f(t),st=a(t,"H2",{class:!0});var Nl=r(st);oo=a(Nl,"A",{id:!0,class:!0,href:!0});var cu=r(oo);Ir=a(cu,"SPAN",{});var pu=r(Ir);$(Sn.$$.fragment,pu),pu.forEach(o),cu.forEach(o),Rd=f(Nl),Cr=a(Nl,"SPAN",{});var mu=r(Cr);Kd=l(mu,"CLIPTextConfig"),mu.forEach(o),Nl.forEach(o),ll=f(t),ae=a(t,"DIV",{class:!0});var on=r(ae);$(Wn.$$.fragment,on),Hd=f(on),at=a(on,"P",{});var or=r(at);Gd=l(or,"This is the configuration class to store the configuration of a "),Ta=a(or,"A",{href:!0});var fu=r(Ta);Jd=l(fu,"CLIPModel"),fu.forEach(o),Xd=l(or,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Bn=a(or,"A",{href:!0,rel:!0});var hu=r(Bn);Zd=l(hu,"openai/clip-vit-base-patch32"),hu.forEach(o),Qd=l(or," architecture."),or.forEach(o),Yd=f(on),rt=a(on,"P",{});var nr=r(rt);ec=l(nr,"Configuration objects inherit from "),La=a(nr,"A",{href:!0});var uu=r(La);tc=l(uu,"PretrainedConfig"),uu.forEach(o),oc=l(nr,` and can be used to control the model outputs. Read the
documentation from `),xa=a(nr,"A",{href:!0});var gu=r(xa);nc=l(gu,"PretrainedConfig"),gu.forEach(o),sc=l(nr," for more information."),nr.forEach(o),ac=f(on),$(no.$$.fragment,on),on.forEach(o),dl=f(t),it=a(t,"H2",{class:!0});var Sl=r(it);so=a(Sl,"A",{id:!0,class:!0,href:!0});var _u=r(so);yr=a(_u,"SPAN",{});var vu=r(yr);$(Un.$$.fragment,vu),vu.forEach(o),_u.forEach(o),rc=f(Sl),Tr=a(Sl,"SPAN",{});var bu=r(Tr);ic=l(bu,"CLIPVisionConfig"),bu.forEach(o),Sl.forEach(o),cl=f(t),re=a(t,"DIV",{class:!0});var nn=r(re);$(Rn.$$.fragment,nn),lc=f(nn),lt=a(nn,"P",{});var sr=r(lt);dc=l(sr,"This is the configuration class to store the configuration of a "),ka=a(sr,"A",{href:!0});var Pu=r(ka);cc=l(Pu,"CLIPModel"),Pu.forEach(o),pc=l(sr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Kn=a(sr,"A",{href:!0,rel:!0});var $u=r(Kn);mc=l($u,"openai/clip-vit-base-patch32"),$u.forEach(o),fc=l(sr," architecture."),sr.forEach(o),hc=f(nn),dt=a(nn,"P",{});var ar=r(dt);uc=l(ar,"Configuration objects inherit from "),wa=a(ar,"A",{href:!0});var Iu=r(wa);gc=l(Iu,"PretrainedConfig"),Iu.forEach(o),_c=l(ar,` and can be used to control the model outputs. Read the
documentation from `),Ma=a(ar,"A",{href:!0});var Cu=r(Ma);vc=l(Cu,"PretrainedConfig"),Cu.forEach(o),bc=l(ar," for more information."),ar.forEach(o),Pc=f(nn),$(ao.$$.fragment,nn),nn.forEach(o),pl=f(t),ct=a(t,"H2",{class:!0});var Wl=r(ct);ro=a(Wl,"A",{id:!0,class:!0,href:!0});var yu=r(ro);Lr=a(yu,"SPAN",{});var Tu=r(Lr);$(Hn.$$.fragment,Tu),Tu.forEach(o),yu.forEach(o),$c=f(Wl),xr=a(Wl,"SPAN",{});var Lu=r(xr);Ic=l(Lu,"CLIPTokenizer"),Lu.forEach(o),Wl.forEach(o),ml=f(t),q=a(t,"DIV",{class:!0});var te=r(q);$(Gn.$$.fragment,te),Cc=f(te),kr=a(te,"P",{});var xu=r(kr);yc=l(xu,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),xu.forEach(o),Tc=f(te),Jn=a(te,"P",{});var Bl=r(Jn);Lc=l(Bl,"This tokenizer inherits from "),ja=a(Bl,"A",{href:!0});var ku=r(ja);xc=l(ku,"PreTrainedTokenizer"),ku.forEach(o),kc=l(Bl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bl.forEach(o),wc=f(te),fe=a(te,"DIV",{class:!0});var sn=r(fe);$(Xn.$$.fragment,sn),Mc=f(sn),wr=a(sn,"P",{});var wu=r(wr);jc=l(wu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),wu.forEach(o),Ec=f(sn),Mr=a(sn,"UL",{});var Mu=r(Mr);Ea=a(Mu,"LI",{});var tu=r(Ea);zc=l(tu,"single sequence: "),jr=a(tu,"CODE",{});var ju=r(jr);Fc=l(ju,"<|startoftext|> X <|endoftext|>"),ju.forEach(o),tu.forEach(o),Mu.forEach(o),qc=f(sn),Er=a(sn,"P",{});var Eu=r(Er);Dc=l(Eu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Eu.forEach(o),sn.forEach(o),Oc=f(te),io=a(te,"DIV",{class:!0});var Ul=r(io);$(Zn.$$.fragment,Ul),Ac=f(Ul),Qn=a(Ul,"P",{});var Rl=r(Qn);Vc=l(Rl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),zr=a(Rl,"CODE",{});var zu=r(zr);Nc=l(zu,"prepare_for_model"),zu.forEach(o),Sc=l(Rl," method."),Rl.forEach(o),Ul.forEach(o),Wc=f(te),lo=a(te,"DIV",{class:!0});var Kl=r(lo);$(Yn.$$.fragment,Kl),Bc=f(Kl),Fr=a(Kl,"P",{});var Fu=r(Fr);Uc=l(Fu,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Fu.forEach(o),Kl.forEach(o),Rc=f(te),za=a(te,"DIV",{class:!0});var qu=r(za);$(es.$$.fragment,qu),qu.forEach(o),te.forEach(o),fl=f(t),pt=a(t,"H2",{class:!0});var Hl=r(pt);co=a(Hl,"A",{id:!0,class:!0,href:!0});var Du=r(co);qr=a(Du,"SPAN",{});var Ou=r(qr);$(ts.$$.fragment,Ou),Ou.forEach(o),Du.forEach(o),Kc=f(Hl),Dr=a(Hl,"SPAN",{});var Au=r(Dr);Hc=l(Au,"CLIPTokenizerFast"),Au.forEach(o),Hl.forEach(o),hl=f(t),J=a(t,"DIV",{class:!0});var Be=r(J);$(os.$$.fragment,Be),Gc=f(Be),ns=a(Be,"P",{});var Gl=r(ns);Jc=l(Gl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Or=a(Gl,"EM",{});var Vu=r(Or);Xc=l(Vu,"tokenizers"),Vu.forEach(o),Zc=l(Gl,` library). Based on byte-level
Byte-Pair-Encoding.`),Gl.forEach(o),Qc=f(Be),ss=a(Be,"P",{});var Jl=r(ss);Yc=l(Jl,"This tokenizer inherits from "),Fa=a(Jl,"A",{href:!0});var Nu=r(Fa);ep=l(Nu,"PreTrainedTokenizerFast"),Nu.forEach(o),tp=l(Jl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Jl.forEach(o),op=f(Be),he=a(Be,"DIV",{class:!0});var an=r(he);$(as.$$.fragment,an),np=f(an),Ar=a(an,"P",{});var Su=r(Ar);sp=l(Su,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Su.forEach(o),ap=f(an),Vr=a(an,"UL",{});var Wu=r(Vr);qa=a(Wu,"LI",{});var ou=r(qa);rp=l(ou,"single sequence: "),Nr=a(ou,"CODE",{});var Bu=r(Nr);ip=l(Bu,"<|startoftext|> X <|endoftext|>"),Bu.forEach(o),ou.forEach(o),Wu.forEach(o),lp=f(an),Sr=a(an,"P",{});var Uu=r(Sr);dp=l(Uu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Uu.forEach(o),an.forEach(o),cp=f(Be),po=a(Be,"DIV",{class:!0});var Xl=r(po);$(rs.$$.fragment,Xl),pp=f(Xl),Wr=a(Xl,"P",{});var Ru=r(Wr);mp=l(Ru,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Ru.forEach(o),Xl.forEach(o),Be.forEach(o),ul=f(t),mt=a(t,"H2",{class:!0});var Zl=r(mt);mo=a(Zl,"A",{id:!0,class:!0,href:!0});var Ku=r(mo);Br=a(Ku,"SPAN",{});var Hu=r(Br);$(is.$$.fragment,Hu),Hu.forEach(o),Ku.forEach(o),fp=f(Zl),Ur=a(Zl,"SPAN",{});var Gu=r(Ur);hp=l(Gu,"CLIPFeatureExtractor"),Gu.forEach(o),Zl.forEach(o),gl=f(t),Ee=a(t,"DIV",{class:!0});var rr=r(Ee);$(ls.$$.fragment,rr),up=f(rr),Rr=a(rr,"P",{});var Ju=r(Rr);gp=l(Ju,"Constructs a CLIP feature extractor."),Ju.forEach(o),_p=f(rr),ds=a(rr,"P",{});var Ql=r(ds);vp=l(Ql,"This feature extractor inherits from "),Da=a(Ql,"A",{href:!0});var Xu=r(Da);bp=l(Xu,"FeatureExtractionMixin"),Xu.forEach(o),Pp=l(Ql,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ql.forEach(o),rr.forEach(o),_l=f(t),ft=a(t,"H2",{class:!0});var Yl=r(ft);fo=a(Yl,"A",{id:!0,class:!0,href:!0});var Zu=r(fo);Kr=a(Zu,"SPAN",{});var Qu=r(Kr);$(cs.$$.fragment,Qu),Qu.forEach(o),Zu.forEach(o),$p=f(Yl),Hr=a(Yl,"SPAN",{});var Yu=r(Hr);Ip=l(Yu,"CLIPProcessor"),Yu.forEach(o),Yl.forEach(o),vl=f(t),X=a(t,"DIV",{class:!0});var Ue=r(X);$(ps.$$.fragment,Ue),Cp=f(Ue),Gr=a(Ue,"P",{});var eg=r(Gr);yp=l(eg,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),eg.forEach(o),Tp=f(Ue),ee=a(Ue,"P",{});var Fe=r(ee);Oa=a(Fe,"A",{href:!0});var tg=r(Oa);Lp=l(tg,"CLIPProcessor"),tg.forEach(o),xp=l(Fe," offers all the functionalities of "),Aa=a(Fe,"A",{href:!0});var og=r(Aa);kp=l(og,"CLIPFeatureExtractor"),og.forEach(o),wp=l(Fe," and "),Va=a(Fe,"A",{href:!0});var ng=r(Va);Mp=l(ng,"CLIPTokenizerFast"),ng.forEach(o),jp=l(Fe,`. See the
`),Jr=a(Fe,"CODE",{});var sg=r(Jr);Ep=l(sg,"__call__()"),sg.forEach(o),zp=l(Fe," and "),Na=a(Fe,"A",{href:!0});var ag=r(Na);Fp=l(ag,"decode()"),ag.forEach(o),qp=l(Fe," for more information."),Fe.forEach(o),Dp=f(Ue),ho=a(Ue,"DIV",{class:!0});var ed=r(ho);$(ms.$$.fragment,ed),Op=f(ed),fs=a(ed,"P",{});var td=r(fs);Ap=l(td,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Sa=a(td,"A",{href:!0});var rg=r(Sa);Vp=l(rg,"batch_decode()"),rg.forEach(o),Np=l(td,`. Please
refer to the docstring of this method for more information.`),td.forEach(o),ed.forEach(o),Sp=f(Ue),uo=a(Ue,"DIV",{class:!0});var od=r(uo);$(hs.$$.fragment,od),Wp=f(od),us=a(od,"P",{});var nd=r(us);Bp=l(nd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Wa=a(nd,"A",{href:!0});var ig=r(Wa);Up=l(ig,"decode()"),ig.forEach(o),Rp=l(nd,`. Please refer to
the docstring of this method for more information.`),nd.forEach(o),od.forEach(o),Ue.forEach(o),bl=f(t),ht=a(t,"H2",{class:!0});var sd=r(ht);go=a(sd,"A",{id:!0,class:!0,href:!0});var lg=r(go);Xr=a(lg,"SPAN",{});var dg=r(Xr);$(gs.$$.fragment,dg),dg.forEach(o),lg.forEach(o),Kp=f(sd),Zr=a(sd,"SPAN",{});var cg=r(Zr);Hp=l(cg,"CLIPModel"),cg.forEach(o),sd.forEach(o),Pl=f(t),Z=a(t,"DIV",{class:!0});var Re=r(Z);$(_s.$$.fragment,Re),Gp=f(Re),vs=a(Re,"P",{});var ad=r(vs);Jp=l(ad,"This model is a PyTorch "),bs=a(ad,"A",{href:!0,rel:!0});var pg=r(bs);Xp=l(pg,"torch.nn.Module"),pg.forEach(o),Zp=l(ad,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ad.forEach(o),Qp=f(Re),ue=a(Re,"DIV",{class:!0});var rn=r(ue);$(Ps.$$.fragment,rn),Yp=f(rn),ut=a(rn,"P",{});var ir=r(ut);em=l(ir,"The "),Ba=a(ir,"A",{href:!0});var mg=r(Ba);tm=l(mg,"CLIPModel"),mg.forEach(o),om=l(ir," forward method, overrides the "),Qr=a(ir,"CODE",{});var fg=r(Qr);nm=l(fg,"__call__"),fg.forEach(o),sm=l(ir," special method."),ir.forEach(o),am=f(rn),$(_o.$$.fragment,rn),rm=f(rn),$(vo.$$.fragment,rn),rn.forEach(o),im=f(Re),ge=a(Re,"DIV",{class:!0});var ln=r(ge);$($s.$$.fragment,ln),lm=f(ln),gt=a(ln,"P",{});var lr=r(gt);dm=l(lr,"The "),Ua=a(lr,"A",{href:!0});var hg=r(Ua);cm=l(hg,"CLIPModel"),hg.forEach(o),pm=l(lr," forward method, overrides the "),Yr=a(lr,"CODE",{});var ug=r(Yr);mm=l(ug,"__call__"),ug.forEach(o),fm=l(lr," special method."),lr.forEach(o),hm=f(ln),$(bo.$$.fragment,ln),um=f(ln),$(Po.$$.fragment,ln),ln.forEach(o),gm=f(Re),_e=a(Re,"DIV",{class:!0});var dn=r(_e);$(Is.$$.fragment,dn),_m=f(dn),_t=a(dn,"P",{});var dr=r(_t);vm=l(dr,"The "),Ra=a(dr,"A",{href:!0});var gg=r(Ra);bm=l(gg,"CLIPModel"),gg.forEach(o),Pm=l(dr," forward method, overrides the "),ei=a(dr,"CODE",{});var _g=r(ei);$m=l(_g,"__call__"),_g.forEach(o),Im=l(dr," special method."),dr.forEach(o),Cm=f(dn),$($o.$$.fragment,dn),ym=f(dn),$(Io.$$.fragment,dn),dn.forEach(o),Re.forEach(o),$l=f(t),vt=a(t,"H2",{class:!0});var rd=r(vt);Co=a(rd,"A",{id:!0,class:!0,href:!0});var vg=r(Co);ti=a(vg,"SPAN",{});var bg=r(ti);$(Cs.$$.fragment,bg),bg.forEach(o),vg.forEach(o),Tm=f(rd),oi=a(rd,"SPAN",{});var Pg=r(oi);Lm=l(Pg,"CLIPTextModel"),Pg.forEach(o),rd.forEach(o),Il=f(t),bt=a(t,"DIV",{class:!0});var id=r(bt);$(ys.$$.fragment,id),xm=f(id),ve=a(id,"DIV",{class:!0});var cn=r(ve);$(Ts.$$.fragment,cn),km=f(cn),Pt=a(cn,"P",{});var cr=r(Pt);wm=l(cr,"The "),Ka=a(cr,"A",{href:!0});var $g=r(Ka);Mm=l($g,"CLIPTextModel"),$g.forEach(o),jm=l(cr," forward method, overrides the "),ni=a(cr,"CODE",{});var Ig=r(ni);Em=l(Ig,"__call__"),Ig.forEach(o),zm=l(cr," special method."),cr.forEach(o),Fm=f(cn),$(yo.$$.fragment,cn),qm=f(cn),$(To.$$.fragment,cn),cn.forEach(o),id.forEach(o),Cl=f(t),$t=a(t,"H2",{class:!0});var ld=r($t);Lo=a(ld,"A",{id:!0,class:!0,href:!0});var Cg=r(Lo);si=a(Cg,"SPAN",{});var yg=r(si);$(Ls.$$.fragment,yg),yg.forEach(o),Cg.forEach(o),Dm=f(ld),ai=a(ld,"SPAN",{});var Tg=r(ai);Om=l(Tg,"CLIPVisionModel"),Tg.forEach(o),ld.forEach(o),yl=f(t),It=a(t,"DIV",{class:!0});var dd=r(It);$(xs.$$.fragment,dd),Am=f(dd),be=a(dd,"DIV",{class:!0});var pn=r(be);$(ks.$$.fragment,pn),Vm=f(pn),Ct=a(pn,"P",{});var pr=r(Ct);Nm=l(pr,"The "),Ha=a(pr,"A",{href:!0});var Lg=r(Ha);Sm=l(Lg,"CLIPVisionModel"),Lg.forEach(o),Wm=l(pr," forward method, overrides the "),ri=a(pr,"CODE",{});var xg=r(ri);Bm=l(xg,"__call__"),xg.forEach(o),Um=l(pr," special method."),pr.forEach(o),Rm=f(pn),$(xo.$$.fragment,pn),Km=f(pn),$(ko.$$.fragment,pn),pn.forEach(o),dd.forEach(o),Tl=f(t),yt=a(t,"H2",{class:!0});var cd=r(yt);wo=a(cd,"A",{id:!0,class:!0,href:!0});var kg=r(wo);ii=a(kg,"SPAN",{});var wg=r(ii);$(ws.$$.fragment,wg),wg.forEach(o),kg.forEach(o),Hm=f(cd),li=a(cd,"SPAN",{});var Mg=r(li);Gm=l(Mg,"TFCLIPModel"),Mg.forEach(o),cd.forEach(o),Ll=f(t),D=a(t,"DIV",{class:!0});var oe=r(D);$(Ms.$$.fragment,oe),Jm=f(oe),js=a(oe,"P",{});var pd=r(js);Xm=l(pd,"This model inherits from "),Ga=a(pd,"A",{href:!0});var jg=r(Ga);Zm=l(jg,"TFPreTrainedModel"),jg.forEach(o),Qm=l(pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd.forEach(o),Ym=f(oe),Es=a(oe,"P",{});var md=r(Es);ef=l(md,"This model is also a "),zs=a(md,"A",{href:!0,rel:!0});var Eg=r(zs);tf=l(Eg,"tf.keras.Model"),Eg.forEach(o),of=l(md,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),md.forEach(o),nf=f(oe),$(Mo.$$.fragment,oe),sf=f(oe),Pe=a(oe,"DIV",{class:!0});var mn=r(Pe);$(Fs.$$.fragment,mn),af=f(mn),Tt=a(mn,"P",{});var mr=r(Tt);rf=l(mr,"The "),Ja=a(mr,"A",{href:!0});var zg=r(Ja);lf=l(zg,"TFCLIPModel"),zg.forEach(o),df=l(mr," forward method, overrides the "),di=a(mr,"CODE",{});var Fg=r(di);cf=l(Fg,"__call__"),Fg.forEach(o),pf=l(mr," special method."),mr.forEach(o),mf=f(mn),$(jo.$$.fragment,mn),ff=f(mn),$(Eo.$$.fragment,mn),mn.forEach(o),hf=f(oe),$e=a(oe,"DIV",{class:!0});var fn=r($e);$(qs.$$.fragment,fn),uf=f(fn),Lt=a(fn,"P",{});var fr=r(Lt);gf=l(fr,"The "),Xa=a(fr,"A",{href:!0});var qg=r(Xa);_f=l(qg,"TFCLIPModel"),qg.forEach(o),vf=l(fr," forward method, overrides the "),ci=a(fr,"CODE",{});var Dg=r(ci);bf=l(Dg,"__call__"),Dg.forEach(o),Pf=l(fr," special method."),fr.forEach(o),$f=f(fn),$(zo.$$.fragment,fn),If=f(fn),$(Fo.$$.fragment,fn),fn.forEach(o),Cf=f(oe),Ie=a(oe,"DIV",{class:!0});var hn=r(Ie);$(Ds.$$.fragment,hn),yf=f(hn),xt=a(hn,"P",{});var hr=r(xt);Tf=l(hr,"The "),Za=a(hr,"A",{href:!0});var Og=r(Za);Lf=l(Og,"TFCLIPModel"),Og.forEach(o),xf=l(hr," forward method, overrides the "),pi=a(hr,"CODE",{});var Ag=r(pi);kf=l(Ag,"__call__"),Ag.forEach(o),wf=l(hr," special method."),hr.forEach(o),Mf=f(hn),$(qo.$$.fragment,hn),jf=f(hn),$(Do.$$.fragment,hn),hn.forEach(o),oe.forEach(o),xl=f(t),kt=a(t,"H2",{class:!0});var fd=r(kt);Oo=a(fd,"A",{id:!0,class:!0,href:!0});var Vg=r(Oo);mi=a(Vg,"SPAN",{});var Ng=r(mi);$(Os.$$.fragment,Ng),Ng.forEach(o),Vg.forEach(o),Ef=f(fd),fi=a(fd,"SPAN",{});var Sg=r(fi);zf=l(Sg,"TFCLIPTextModel"),Sg.forEach(o),fd.forEach(o),kl=f(t),wt=a(t,"DIV",{class:!0});var hd=r(wt);$(As.$$.fragment,hd),Ff=f(hd),Ce=a(hd,"DIV",{class:!0});var un=r(Ce);$(Vs.$$.fragment,un),qf=f(un),Mt=a(un,"P",{});var ur=r(Mt);Df=l(ur,"The "),Qa=a(ur,"A",{href:!0});var Wg=r(Qa);Of=l(Wg,"TFCLIPTextModel"),Wg.forEach(o),Af=l(ur," forward method, overrides the "),hi=a(ur,"CODE",{});var Bg=r(hi);Vf=l(Bg,"__call__"),Bg.forEach(o),Nf=l(ur," special method."),ur.forEach(o),Sf=f(un),$(Ao.$$.fragment,un),Wf=f(un),$(Vo.$$.fragment,un),un.forEach(o),hd.forEach(o),wl=f(t),jt=a(t,"H2",{class:!0});var ud=r(jt);No=a(ud,"A",{id:!0,class:!0,href:!0});var Ug=r(No);ui=a(Ug,"SPAN",{});var Rg=r(ui);$(Ns.$$.fragment,Rg),Rg.forEach(o),Ug.forEach(o),Bf=f(ud),gi=a(ud,"SPAN",{});var Kg=r(gi);Uf=l(Kg,"TFCLIPVisionModel"),Kg.forEach(o),ud.forEach(o),Ml=f(t),Et=a(t,"DIV",{class:!0});var gd=r(Et);$(Ss.$$.fragment,gd),Rf=f(gd),ye=a(gd,"DIV",{class:!0});var gn=r(ye);$(Ws.$$.fragment,gn),Kf=f(gn),zt=a(gn,"P",{});var gr=r(zt);Hf=l(gr,"The "),Ya=a(gr,"A",{href:!0});var Hg=r(Ya);Gf=l(Hg,"TFCLIPVisionModel"),Hg.forEach(o),Jf=l(gr," forward method, overrides the "),_i=a(gr,"CODE",{});var Gg=r(_i);Xf=l(Gg,"__call__"),Gg.forEach(o),Zf=l(gr," special method."),gr.forEach(o),Qf=f(gn),$(So.$$.fragment,gn),Yf=f(gn),$(Wo.$$.fragment,gn),gn.forEach(o),gd.forEach(o),jl=f(t),Ft=a(t,"H2",{class:!0});var _d=r(Ft);Bo=a(_d,"A",{id:!0,class:!0,href:!0});var Jg=r(Bo);vi=a(Jg,"SPAN",{});var Xg=r(vi);$(Bs.$$.fragment,Xg),Xg.forEach(o),Jg.forEach(o),eh=f(_d),bi=a(_d,"SPAN",{});var Zg=r(bi);th=l(Zg,"FlaxCLIPModel"),Zg.forEach(o),_d.forEach(o),El=f(t),z=a(t,"DIV",{class:!0});var R=r(z);$(Us.$$.fragment,R),oh=f(R),Rs=a(R,"P",{});var vd=r(Rs);nh=l(vd,"This model inherits from "),er=a(vd,"A",{href:!0});var Qg=r(er);sh=l(Qg,"FlaxPreTrainedModel"),Qg.forEach(o),ah=l(vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vd.forEach(o),rh=f(R),Ks=a(R,"P",{});var bd=r(Ks);ih=l(bd,"This model is also a Flax Linen "),Hs=a(bd,"A",{href:!0,rel:!0});var Yg=r(Hs);lh=l(Yg,"flax.linen.Module"),Yg.forEach(o),dh=l(bd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bd.forEach(o),ch=f(R),Pi=a(R,"P",{});var e_=r(Pi);ph=l(e_,"Finally, this model supports inherent JAX features such as:"),e_.forEach(o),mh=f(R),ze=a(R,"UL",{});var _n=r(ze);$i=a(_n,"LI",{});var t_=r($i);Gs=a(t_,"A",{href:!0,rel:!0});var o_=r(Gs);fh=l(o_,"Just-In-Time (JIT) compilation"),o_.forEach(o),t_.forEach(o),hh=f(_n),Ii=a(_n,"LI",{});var n_=r(Ii);Js=a(n_,"A",{href:!0,rel:!0});var s_=r(Js);uh=l(s_,"Automatic Differentiation"),s_.forEach(o),n_.forEach(o),gh=f(_n),Ci=a(_n,"LI",{});var a_=r(Ci);Xs=a(a_,"A",{href:!0,rel:!0});var r_=r(Xs);_h=l(r_,"Vectorization"),r_.forEach(o),a_.forEach(o),vh=f(_n),yi=a(_n,"LI",{});var i_=r(yi);Zs=a(i_,"A",{href:!0,rel:!0});var l_=r(Zs);bh=l(l_,"Parallelization"),l_.forEach(o),i_.forEach(o),_n.forEach(o),Ph=f(R),Te=a(R,"DIV",{class:!0});var vn=r(Te);$(Qs.$$.fragment,vn),$h=f(vn),qt=a(vn,"P",{});var _r=r(qt);Ih=l(_r,"The "),Ti=a(_r,"CODE",{});var d_=r(Ti);Ch=l(d_,"FlaxCLIPPreTrainedModel"),d_.forEach(o),yh=l(_r," forward method, overrides the "),Li=a(_r,"CODE",{});var c_=r(Li);Th=l(c_,"__call__"),c_.forEach(o),Lh=l(_r," special method."),_r.forEach(o),xh=f(vn),$(Uo.$$.fragment,vn),kh=f(vn),$(Ro.$$.fragment,vn),vn.forEach(o),wh=f(R),Ko=a(R,"DIV",{class:!0});var Pd=r(Ko);$(Ys.$$.fragment,Pd),Mh=f(Pd),$(Ho.$$.fragment,Pd),Pd.forEach(o),jh=f(R),Go=a(R,"DIV",{class:!0});var $d=r(Go);$(ea.$$.fragment,$d),Eh=f($d),$(Jo.$$.fragment,$d),$d.forEach(o),R.forEach(o),zl=f(t),Dt=a(t,"H2",{class:!0});var Id=r(Dt);Xo=a(Id,"A",{id:!0,class:!0,href:!0});var p_=r(Xo);xi=a(p_,"SPAN",{});var m_=r(xi);$(ta.$$.fragment,m_),m_.forEach(o),p_.forEach(o),zh=f(Id),ki=a(Id,"SPAN",{});var f_=r(ki);Fh=l(f_,"FlaxCLIPTextModel"),f_.forEach(o),Id.forEach(o),Fl=f(t),Ot=a(t,"DIV",{class:!0});var Cd=r(Ot);$(oa.$$.fragment,Cd),qh=f(Cd),Le=a(Cd,"DIV",{class:!0});var bn=r(Le);$(na.$$.fragment,bn),Dh=f(bn),At=a(bn,"P",{});var vr=r(At);Oh=l(vr,"The "),wi=a(vr,"CODE",{});var h_=r(wi);Ah=l(h_,"FlaxCLIPTextPreTrainedModel"),h_.forEach(o),Vh=l(vr," forward method, overrides the "),Mi=a(vr,"CODE",{});var u_=r(Mi);Nh=l(u_,"__call__"),u_.forEach(o),Sh=l(vr," special method."),vr.forEach(o),Wh=f(bn),$(Zo.$$.fragment,bn),Bh=f(bn),$(Qo.$$.fragment,bn),bn.forEach(o),Cd.forEach(o),ql=f(t),Vt=a(t,"H2",{class:!0});var yd=r(Vt);Yo=a(yd,"A",{id:!0,class:!0,href:!0});var g_=r(Yo);ji=a(g_,"SPAN",{});var __=r(ji);$(sa.$$.fragment,__),__.forEach(o),g_.forEach(o),Uh=f(yd),Ei=a(yd,"SPAN",{});var v_=r(Ei);Rh=l(v_,"FlaxCLIPVisionModel"),v_.forEach(o),yd.forEach(o),Dl=f(t),Nt=a(t,"DIV",{class:!0});var Td=r(Nt);$(aa.$$.fragment,Td),Kh=f(Td),xe=a(Td,"DIV",{class:!0});var Pn=r(xe);$(ra.$$.fragment,Pn),Hh=f(Pn),St=a(Pn,"P",{});var br=r(St);Gh=l(br,"The "),zi=a(br,"CODE",{});var b_=r(zi);Jh=l(b_,"FlaxCLIPVisionPreTrainedModel"),b_.forEach(o),Xh=l(br," forward method, overrides the "),Fi=a(br,"CODE",{});var P_=r(Fi);Zh=l(P_,"__call__"),P_.forEach(o),Qh=l(br," special method."),br.forEach(o),Yh=f(Pn),$(en.$$.fragment,Pn),eu=f(Pn),$(tn.$$.fragment,Pn),Pn.forEach(o),Td.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(av)),u(p,"id","clip"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#clip"),u(h,"class","relative group"),u(ie,"id","overview"),u(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ie,"href","#overview"),u(K,"class","relative group"),u(we,"href","https://arxiv.org/abs/2103.00020"),u(we,"rel","nofollow"),u(S,"id","usage"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#usage"),u(F,"class","relative group"),u(Oe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),u(pe,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),u(H,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),u(Ae,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),u(E,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),u(Ye,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),u(et,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),u(Ne,"href","https://huggingface.co/valhalla"),u(Ne,"rel","nofollow"),u(Se,"href","https://github.com/openai/CLIP"),u(Se,"rel","nofollow"),u(Qt,"id","transformers.CLIPConfig"),u(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qt,"href","#transformers.CLIPConfig"),u(me,"class","relative group"),u(Pa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),u($a,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),u(Ia,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ca,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ya,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"id","transformers.CLIPTextConfig"),u(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(oo,"href","#transformers.CLIPTextConfig"),u(st,"class","relative group"),u(Ta,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),u(Bn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),u(Bn,"rel","nofollow"),u(La,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(xa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"id","transformers.CLIPVisionConfig"),u(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(so,"href","#transformers.CLIPVisionConfig"),u(it,"class","relative group"),u(ka,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),u(Kn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),u(Kn,"rel","nofollow"),u(wa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ma,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ro,"id","transformers.CLIPTokenizer"),u(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ro,"href","#transformers.CLIPTokenizer"),u(ct,"class","relative group"),u(ja,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(za,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(co,"id","transformers.CLIPTokenizerFast"),u(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(co,"href","#transformers.CLIPTokenizerFast"),u(pt,"class","relative group"),u(Fa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"id","transformers.CLIPFeatureExtractor"),u(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mo,"href","#transformers.CLIPFeatureExtractor"),u(mt,"class","relative group"),u(Da,"href","/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin"),u(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"id","transformers.CLIPProcessor"),u(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fo,"href","#transformers.CLIPProcessor"),u(ft,"class","relative group"),u(Oa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),u(Aa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),u(Va,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),u(Na,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),u(Sa,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wa,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"id","transformers.CLIPModel"),u(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(go,"href","#transformers.CLIPModel"),u(ht,"class","relative group"),u(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(bs,"rel","nofollow"),u(Ba,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),u(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ua,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),u(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ra,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),u(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Co,"id","transformers.CLIPTextModel"),u(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Co,"href","#transformers.CLIPTextModel"),u(vt,"class","relative group"),u(Ka,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),u(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"id","transformers.CLIPVisionModel"),u(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lo,"href","#transformers.CLIPVisionModel"),u($t,"class","relative group"),u(Ha,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),u(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wo,"id","transformers.TFCLIPModel"),u(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wo,"href","#transformers.TFCLIPModel"),u(yt,"class","relative group"),u(Ga,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(zs,"rel","nofollow"),u(Ja,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xa,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),u($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Za,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"id","transformers.TFCLIPTextModel"),u(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Oo,"href","#transformers.TFCLIPTextModel"),u(kt,"class","relative group"),u(Qa,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"id","transformers.TFCLIPVisionModel"),u(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(No,"href","#transformers.TFCLIPVisionModel"),u(jt,"class","relative group"),u(Ya,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),u(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bo,"id","transformers.FlaxCLIPModel"),u(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bo,"href","#transformers.FlaxCLIPModel"),u(Ft,"class","relative group"),u(er,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Hs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Hs,"rel","nofollow"),u(Gs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gs,"rel","nofollow"),u(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Js,"rel","nofollow"),u(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Xs,"rel","nofollow"),u(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zs,"rel","nofollow"),u(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xo,"id","transformers.FlaxCLIPTextModel"),u(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xo,"href","#transformers.FlaxCLIPTextModel"),u(Dt,"class","relative group"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yo,"id","transformers.FlaxCLIPVisionModel"),u(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yo,"href","#transformers.FlaxCLIPVisionModel"),u(Vt,"class","relative group"),u(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,b,g),v(t,h,g),e(h,p),e(p,_),I(n,_,null),e(h,c),e(h,x),e(x,$n),v(t,Bt,g),v(t,K,g),e(K,ie),e(ie,qe),I(j,qe,null),e(K,In),e(K,ke),e(ke,Cn),v(t,Ut,g),v(t,Q,g),e(Q,yn),e(Q,we),e(we,Ke),e(Q,Tn),v(t,Rt,g),v(t,le,g),e(le,Ln),v(t,Kt,g),v(t,de,g),e(de,He),e(He,xn),v(t,Ge,g),v(t,F,g),e(F,S),e(S,Je),I(se,Je,null),e(F,kn),e(F,Xe),e(Xe,Ze),v(t,Ht,g),v(t,De,g),e(De,ce),v(t,Gt,g),v(t,Y,g),e(Y,wn),e(Y,Oe),e(Oe,Qe),e(Y,Mn),v(t,Jt,g),v(t,M,g),e(M,jn),e(M,pe),e(pe,En),e(M,Xt),e(M,H),e(H,zn),e(M,Me),e(M,Ae),e(Ae,Fn),e(M,w),e(M,E),e(E,fa),e(M,Zt),e(M,Ye),e(Ye,ha),e(M,B),e(M,et),e(et,ua),e(M,ga),v(t,qn,g),I(Ve,t,g),v(t,je,g),v(t,U,g),e(U,_a),e(U,Ne),e(Ne,tt),e(U,va),e(U,Se),e(Se,Dn),e(U,ba),v(t,ot,g),v(t,me,g),e(me,Qt),e(Qt,Pr),I(On,Pr,null),e(me,Ld),e(me,$r),e($r,xd),v(t,rl,g),v(t,G,g),I(An,G,null),e(G,kd),e(G,Yt),e(Yt,Pa),e(Pa,wd),e(Yt,Md),e(Yt,$a),e($a,jd),e(Yt,Ed),e(G,zd),e(G,nt),e(nt,Fd),e(nt,Ia),e(Ia,qd),e(nt,Dd),e(nt,Ca),e(Ca,Od),e(nt,Ad),e(G,Vd),I(eo,G,null),e(G,Nd),e(G,to),I(Vn,to,null),e(to,Sd),e(to,Nn),e(Nn,Wd),e(Nn,ya),e(ya,Bd),e(Nn,Ud),v(t,il,g),v(t,st,g),e(st,oo),e(oo,Ir),I(Sn,Ir,null),e(st,Rd),e(st,Cr),e(Cr,Kd),v(t,ll,g),v(t,ae,g),I(Wn,ae,null),e(ae,Hd),e(ae,at),e(at,Gd),e(at,Ta),e(Ta,Jd),e(at,Xd),e(at,Bn),e(Bn,Zd),e(at,Qd),e(ae,Yd),e(ae,rt),e(rt,ec),e(rt,La),e(La,tc),e(rt,oc),e(rt,xa),e(xa,nc),e(rt,sc),e(ae,ac),I(no,ae,null),v(t,dl,g),v(t,it,g),e(it,so),e(so,yr),I(Un,yr,null),e(it,rc),e(it,Tr),e(Tr,ic),v(t,cl,g),v(t,re,g),I(Rn,re,null),e(re,lc),e(re,lt),e(lt,dc),e(lt,ka),e(ka,cc),e(lt,pc),e(lt,Kn),e(Kn,mc),e(lt,fc),e(re,hc),e(re,dt),e(dt,uc),e(dt,wa),e(wa,gc),e(dt,_c),e(dt,Ma),e(Ma,vc),e(dt,bc),e(re,Pc),I(ao,re,null),v(t,pl,g),v(t,ct,g),e(ct,ro),e(ro,Lr),I(Hn,Lr,null),e(ct,$c),e(ct,xr),e(xr,Ic),v(t,ml,g),v(t,q,g),I(Gn,q,null),e(q,Cc),e(q,kr),e(kr,yc),e(q,Tc),e(q,Jn),e(Jn,Lc),e(Jn,ja),e(ja,xc),e(Jn,kc),e(q,wc),e(q,fe),I(Xn,fe,null),e(fe,Mc),e(fe,wr),e(wr,jc),e(fe,Ec),e(fe,Mr),e(Mr,Ea),e(Ea,zc),e(Ea,jr),e(jr,Fc),e(fe,qc),e(fe,Er),e(Er,Dc),e(q,Oc),e(q,io),I(Zn,io,null),e(io,Ac),e(io,Qn),e(Qn,Vc),e(Qn,zr),e(zr,Nc),e(Qn,Sc),e(q,Wc),e(q,lo),I(Yn,lo,null),e(lo,Bc),e(lo,Fr),e(Fr,Uc),e(q,Rc),e(q,za),I(es,za,null),v(t,fl,g),v(t,pt,g),e(pt,co),e(co,qr),I(ts,qr,null),e(pt,Kc),e(pt,Dr),e(Dr,Hc),v(t,hl,g),v(t,J,g),I(os,J,null),e(J,Gc),e(J,ns),e(ns,Jc),e(ns,Or),e(Or,Xc),e(ns,Zc),e(J,Qc),e(J,ss),e(ss,Yc),e(ss,Fa),e(Fa,ep),e(ss,tp),e(J,op),e(J,he),I(as,he,null),e(he,np),e(he,Ar),e(Ar,sp),e(he,ap),e(he,Vr),e(Vr,qa),e(qa,rp),e(qa,Nr),e(Nr,ip),e(he,lp),e(he,Sr),e(Sr,dp),e(J,cp),e(J,po),I(rs,po,null),e(po,pp),e(po,Wr),e(Wr,mp),v(t,ul,g),v(t,mt,g),e(mt,mo),e(mo,Br),I(is,Br,null),e(mt,fp),e(mt,Ur),e(Ur,hp),v(t,gl,g),v(t,Ee,g),I(ls,Ee,null),e(Ee,up),e(Ee,Rr),e(Rr,gp),e(Ee,_p),e(Ee,ds),e(ds,vp),e(ds,Da),e(Da,bp),e(ds,Pp),v(t,_l,g),v(t,ft,g),e(ft,fo),e(fo,Kr),I(cs,Kr,null),e(ft,$p),e(ft,Hr),e(Hr,Ip),v(t,vl,g),v(t,X,g),I(ps,X,null),e(X,Cp),e(X,Gr),e(Gr,yp),e(X,Tp),e(X,ee),e(ee,Oa),e(Oa,Lp),e(ee,xp),e(ee,Aa),e(Aa,kp),e(ee,wp),e(ee,Va),e(Va,Mp),e(ee,jp),e(ee,Jr),e(Jr,Ep),e(ee,zp),e(ee,Na),e(Na,Fp),e(ee,qp),e(X,Dp),e(X,ho),I(ms,ho,null),e(ho,Op),e(ho,fs),e(fs,Ap),e(fs,Sa),e(Sa,Vp),e(fs,Np),e(X,Sp),e(X,uo),I(hs,uo,null),e(uo,Wp),e(uo,us),e(us,Bp),e(us,Wa),e(Wa,Up),e(us,Rp),v(t,bl,g),v(t,ht,g),e(ht,go),e(go,Xr),I(gs,Xr,null),e(ht,Kp),e(ht,Zr),e(Zr,Hp),v(t,Pl,g),v(t,Z,g),I(_s,Z,null),e(Z,Gp),e(Z,vs),e(vs,Jp),e(vs,bs),e(bs,Xp),e(vs,Zp),e(Z,Qp),e(Z,ue),I(Ps,ue,null),e(ue,Yp),e(ue,ut),e(ut,em),e(ut,Ba),e(Ba,tm),e(ut,om),e(ut,Qr),e(Qr,nm),e(ut,sm),e(ue,am),I(_o,ue,null),e(ue,rm),I(vo,ue,null),e(Z,im),e(Z,ge),I($s,ge,null),e(ge,lm),e(ge,gt),e(gt,dm),e(gt,Ua),e(Ua,cm),e(gt,pm),e(gt,Yr),e(Yr,mm),e(gt,fm),e(ge,hm),I(bo,ge,null),e(ge,um),I(Po,ge,null),e(Z,gm),e(Z,_e),I(Is,_e,null),e(_e,_m),e(_e,_t),e(_t,vm),e(_t,Ra),e(Ra,bm),e(_t,Pm),e(_t,ei),e(ei,$m),e(_t,Im),e(_e,Cm),I($o,_e,null),e(_e,ym),I(Io,_e,null),v(t,$l,g),v(t,vt,g),e(vt,Co),e(Co,ti),I(Cs,ti,null),e(vt,Tm),e(vt,oi),e(oi,Lm),v(t,Il,g),v(t,bt,g),I(ys,bt,null),e(bt,xm),e(bt,ve),I(Ts,ve,null),e(ve,km),e(ve,Pt),e(Pt,wm),e(Pt,Ka),e(Ka,Mm),e(Pt,jm),e(Pt,ni),e(ni,Em),e(Pt,zm),e(ve,Fm),I(yo,ve,null),e(ve,qm),I(To,ve,null),v(t,Cl,g),v(t,$t,g),e($t,Lo),e(Lo,si),I(Ls,si,null),e($t,Dm),e($t,ai),e(ai,Om),v(t,yl,g),v(t,It,g),I(xs,It,null),e(It,Am),e(It,be),I(ks,be,null),e(be,Vm),e(be,Ct),e(Ct,Nm),e(Ct,Ha),e(Ha,Sm),e(Ct,Wm),e(Ct,ri),e(ri,Bm),e(Ct,Um),e(be,Rm),I(xo,be,null),e(be,Km),I(ko,be,null),v(t,Tl,g),v(t,yt,g),e(yt,wo),e(wo,ii),I(ws,ii,null),e(yt,Hm),e(yt,li),e(li,Gm),v(t,Ll,g),v(t,D,g),I(Ms,D,null),e(D,Jm),e(D,js),e(js,Xm),e(js,Ga),e(Ga,Zm),e(js,Qm),e(D,Ym),e(D,Es),e(Es,ef),e(Es,zs),e(zs,tf),e(Es,of),e(D,nf),I(Mo,D,null),e(D,sf),e(D,Pe),I(Fs,Pe,null),e(Pe,af),e(Pe,Tt),e(Tt,rf),e(Tt,Ja),e(Ja,lf),e(Tt,df),e(Tt,di),e(di,cf),e(Tt,pf),e(Pe,mf),I(jo,Pe,null),e(Pe,ff),I(Eo,Pe,null),e(D,hf),e(D,$e),I(qs,$e,null),e($e,uf),e($e,Lt),e(Lt,gf),e(Lt,Xa),e(Xa,_f),e(Lt,vf),e(Lt,ci),e(ci,bf),e(Lt,Pf),e($e,$f),I(zo,$e,null),e($e,If),I(Fo,$e,null),e(D,Cf),e(D,Ie),I(Ds,Ie,null),e(Ie,yf),e(Ie,xt),e(xt,Tf),e(xt,Za),e(Za,Lf),e(xt,xf),e(xt,pi),e(pi,kf),e(xt,wf),e(Ie,Mf),I(qo,Ie,null),e(Ie,jf),I(Do,Ie,null),v(t,xl,g),v(t,kt,g),e(kt,Oo),e(Oo,mi),I(Os,mi,null),e(kt,Ef),e(kt,fi),e(fi,zf),v(t,kl,g),v(t,wt,g),I(As,wt,null),e(wt,Ff),e(wt,Ce),I(Vs,Ce,null),e(Ce,qf),e(Ce,Mt),e(Mt,Df),e(Mt,Qa),e(Qa,Of),e(Mt,Af),e(Mt,hi),e(hi,Vf),e(Mt,Nf),e(Ce,Sf),I(Ao,Ce,null),e(Ce,Wf),I(Vo,Ce,null),v(t,wl,g),v(t,jt,g),e(jt,No),e(No,ui),I(Ns,ui,null),e(jt,Bf),e(jt,gi),e(gi,Uf),v(t,Ml,g),v(t,Et,g),I(Ss,Et,null),e(Et,Rf),e(Et,ye),I(Ws,ye,null),e(ye,Kf),e(ye,zt),e(zt,Hf),e(zt,Ya),e(Ya,Gf),e(zt,Jf),e(zt,_i),e(_i,Xf),e(zt,Zf),e(ye,Qf),I(So,ye,null),e(ye,Yf),I(Wo,ye,null),v(t,jl,g),v(t,Ft,g),e(Ft,Bo),e(Bo,vi),I(Bs,vi,null),e(Ft,eh),e(Ft,bi),e(bi,th),v(t,El,g),v(t,z,g),I(Us,z,null),e(z,oh),e(z,Rs),e(Rs,nh),e(Rs,er),e(er,sh),e(Rs,ah),e(z,rh),e(z,Ks),e(Ks,ih),e(Ks,Hs),e(Hs,lh),e(Ks,dh),e(z,ch),e(z,Pi),e(Pi,ph),e(z,mh),e(z,ze),e(ze,$i),e($i,Gs),e(Gs,fh),e(ze,hh),e(ze,Ii),e(Ii,Js),e(Js,uh),e(ze,gh),e(ze,Ci),e(Ci,Xs),e(Xs,_h),e(ze,vh),e(ze,yi),e(yi,Zs),e(Zs,bh),e(z,Ph),e(z,Te),I(Qs,Te,null),e(Te,$h),e(Te,qt),e(qt,Ih),e(qt,Ti),e(Ti,Ch),e(qt,yh),e(qt,Li),e(Li,Th),e(qt,Lh),e(Te,xh),I(Uo,Te,null),e(Te,kh),I(Ro,Te,null),e(z,wh),e(z,Ko),I(Ys,Ko,null),e(Ko,Mh),I(Ho,Ko,null),e(z,jh),e(z,Go),I(ea,Go,null),e(Go,Eh),I(Jo,Go,null),v(t,zl,g),v(t,Dt,g),e(Dt,Xo),e(Xo,xi),I(ta,xi,null),e(Dt,zh),e(Dt,ki),e(ki,Fh),v(t,Fl,g),v(t,Ot,g),I(oa,Ot,null),e(Ot,qh),e(Ot,Le),I(na,Le,null),e(Le,Dh),e(Le,At),e(At,Oh),e(At,wi),e(wi,Ah),e(At,Vh),e(At,Mi),e(Mi,Nh),e(At,Sh),e(Le,Wh),I(Zo,Le,null),e(Le,Bh),I(Qo,Le,null),v(t,ql,g),v(t,Vt,g),e(Vt,Yo),e(Yo,ji),I(sa,ji,null),e(Vt,Uh),e(Vt,Ei),e(Ei,Rh),v(t,Dl,g),v(t,Nt,g),I(aa,Nt,null),e(Nt,Kh),e(Nt,xe),I(ra,xe,null),e(xe,Hh),e(xe,St),e(St,Gh),e(St,zi),e(zi,Jh),e(St,Xh),e(St,Fi),e(Fi,Zh),e(St,Qh),e(xe,Yh),I(en,xe,null),e(xe,eu),I(tn,xe,null),Ol=!0},p(t,[g]){const ia={};g&2&&(ia.$$scope={dirty:g,ctx:t}),eo.$set(ia);const qi={};g&2&&(qi.$$scope={dirty:g,ctx:t}),no.$set(qi);const Di={};g&2&&(Di.$$scope={dirty:g,ctx:t}),ao.$set(Di);const Oi={};g&2&&(Oi.$$scope={dirty:g,ctx:t}),_o.$set(Oi);const la={};g&2&&(la.$$scope={dirty:g,ctx:t}),vo.$set(la);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:t}),bo.$set(Ai);const Vi={};g&2&&(Vi.$$scope={dirty:g,ctx:t}),Po.$set(Vi);const Ni={};g&2&&(Ni.$$scope={dirty:g,ctx:t}),$o.$set(Ni);const da={};g&2&&(da.$$scope={dirty:g,ctx:t}),Io.$set(da);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:t}),yo.$set(Si);const Wi={};g&2&&(Wi.$$scope={dirty:g,ctx:t}),To.$set(Wi);const Bi={};g&2&&(Bi.$$scope={dirty:g,ctx:t}),xo.$set(Bi);const Ui={};g&2&&(Ui.$$scope={dirty:g,ctx:t}),ko.$set(Ui);const ca={};g&2&&(ca.$$scope={dirty:g,ctx:t}),Mo.$set(ca);const Ri={};g&2&&(Ri.$$scope={dirty:g,ctx:t}),jo.$set(Ri);const Ki={};g&2&&(Ki.$$scope={dirty:g,ctx:t}),Eo.$set(Ki);const Hi={};g&2&&(Hi.$$scope={dirty:g,ctx:t}),zo.$set(Hi);const Gi={};g&2&&(Gi.$$scope={dirty:g,ctx:t}),Fo.$set(Gi);const pa={};g&2&&(pa.$$scope={dirty:g,ctx:t}),qo.$set(pa);const Ji={};g&2&&(Ji.$$scope={dirty:g,ctx:t}),Do.$set(Ji);const W={};g&2&&(W.$$scope={dirty:g,ctx:t}),Ao.$set(W);const Xi={};g&2&&(Xi.$$scope={dirty:g,ctx:t}),Vo.$set(Xi);const Zi={};g&2&&(Zi.$$scope={dirty:g,ctx:t}),So.$set(Zi);const Qi={};g&2&&(Qi.$$scope={dirty:g,ctx:t}),Wo.$set(Qi);const Yi={};g&2&&(Yi.$$scope={dirty:g,ctx:t}),Uo.$set(Yi);const el={};g&2&&(el.$$scope={dirty:g,ctx:t}),Ro.$set(el);const tl={};g&2&&(tl.$$scope={dirty:g,ctx:t}),Ho.$set(tl);const Wt={};g&2&&(Wt.$$scope={dirty:g,ctx:t}),Jo.$set(Wt);const ol={};g&2&&(ol.$$scope={dirty:g,ctx:t}),Zo.$set(ol);const nl={};g&2&&(nl.$$scope={dirty:g,ctx:t}),Qo.$set(nl);const ma={};g&2&&(ma.$$scope={dirty:g,ctx:t}),en.$set(ma);const sl={};g&2&&(sl.$$scope={dirty:g,ctx:t}),tn.$set(sl)},i(t){Ol||(C(n.$$.fragment,t),C(j.$$.fragment,t),C(se.$$.fragment,t),C(Ve.$$.fragment,t),C(On.$$.fragment,t),C(An.$$.fragment,t),C(eo.$$.fragment,t),C(Vn.$$.fragment,t),C(Sn.$$.fragment,t),C(Wn.$$.fragment,t),C(no.$$.fragment,t),C(Un.$$.fragment,t),C(Rn.$$.fragment,t),C(ao.$$.fragment,t),C(Hn.$$.fragment,t),C(Gn.$$.fragment,t),C(Xn.$$.fragment,t),C(Zn.$$.fragment,t),C(Yn.$$.fragment,t),C(es.$$.fragment,t),C(ts.$$.fragment,t),C(os.$$.fragment,t),C(as.$$.fragment,t),C(rs.$$.fragment,t),C(is.$$.fragment,t),C(ls.$$.fragment,t),C(cs.$$.fragment,t),C(ps.$$.fragment,t),C(ms.$$.fragment,t),C(hs.$$.fragment,t),C(gs.$$.fragment,t),C(_s.$$.fragment,t),C(Ps.$$.fragment,t),C(_o.$$.fragment,t),C(vo.$$.fragment,t),C($s.$$.fragment,t),C(bo.$$.fragment,t),C(Po.$$.fragment,t),C(Is.$$.fragment,t),C($o.$$.fragment,t),C(Io.$$.fragment,t),C(Cs.$$.fragment,t),C(ys.$$.fragment,t),C(Ts.$$.fragment,t),C(yo.$$.fragment,t),C(To.$$.fragment,t),C(Ls.$$.fragment,t),C(xs.$$.fragment,t),C(ks.$$.fragment,t),C(xo.$$.fragment,t),C(ko.$$.fragment,t),C(ws.$$.fragment,t),C(Ms.$$.fragment,t),C(Mo.$$.fragment,t),C(Fs.$$.fragment,t),C(jo.$$.fragment,t),C(Eo.$$.fragment,t),C(qs.$$.fragment,t),C(zo.$$.fragment,t),C(Fo.$$.fragment,t),C(Ds.$$.fragment,t),C(qo.$$.fragment,t),C(Do.$$.fragment,t),C(Os.$$.fragment,t),C(As.$$.fragment,t),C(Vs.$$.fragment,t),C(Ao.$$.fragment,t),C(Vo.$$.fragment,t),C(Ns.$$.fragment,t),C(Ss.$$.fragment,t),C(Ws.$$.fragment,t),C(So.$$.fragment,t),C(Wo.$$.fragment,t),C(Bs.$$.fragment,t),C(Us.$$.fragment,t),C(Qs.$$.fragment,t),C(Uo.$$.fragment,t),C(Ro.$$.fragment,t),C(Ys.$$.fragment,t),C(Ho.$$.fragment,t),C(ea.$$.fragment,t),C(Jo.$$.fragment,t),C(ta.$$.fragment,t),C(oa.$$.fragment,t),C(na.$$.fragment,t),C(Zo.$$.fragment,t),C(Qo.$$.fragment,t),C(sa.$$.fragment,t),C(aa.$$.fragment,t),C(ra.$$.fragment,t),C(en.$$.fragment,t),C(tn.$$.fragment,t),Ol=!0)},o(t){y(n.$$.fragment,t),y(j.$$.fragment,t),y(se.$$.fragment,t),y(Ve.$$.fragment,t),y(On.$$.fragment,t),y(An.$$.fragment,t),y(eo.$$.fragment,t),y(Vn.$$.fragment,t),y(Sn.$$.fragment,t),y(Wn.$$.fragment,t),y(no.$$.fragment,t),y(Un.$$.fragment,t),y(Rn.$$.fragment,t),y(ao.$$.fragment,t),y(Hn.$$.fragment,t),y(Gn.$$.fragment,t),y(Xn.$$.fragment,t),y(Zn.$$.fragment,t),y(Yn.$$.fragment,t),y(es.$$.fragment,t),y(ts.$$.fragment,t),y(os.$$.fragment,t),y(as.$$.fragment,t),y(rs.$$.fragment,t),y(is.$$.fragment,t),y(ls.$$.fragment,t),y(cs.$$.fragment,t),y(ps.$$.fragment,t),y(ms.$$.fragment,t),y(hs.$$.fragment,t),y(gs.$$.fragment,t),y(_s.$$.fragment,t),y(Ps.$$.fragment,t),y(_o.$$.fragment,t),y(vo.$$.fragment,t),y($s.$$.fragment,t),y(bo.$$.fragment,t),y(Po.$$.fragment,t),y(Is.$$.fragment,t),y($o.$$.fragment,t),y(Io.$$.fragment,t),y(Cs.$$.fragment,t),y(ys.$$.fragment,t),y(Ts.$$.fragment,t),y(yo.$$.fragment,t),y(To.$$.fragment,t),y(Ls.$$.fragment,t),y(xs.$$.fragment,t),y(ks.$$.fragment,t),y(xo.$$.fragment,t),y(ko.$$.fragment,t),y(ws.$$.fragment,t),y(Ms.$$.fragment,t),y(Mo.$$.fragment,t),y(Fs.$$.fragment,t),y(jo.$$.fragment,t),y(Eo.$$.fragment,t),y(qs.$$.fragment,t),y(zo.$$.fragment,t),y(Fo.$$.fragment,t),y(Ds.$$.fragment,t),y(qo.$$.fragment,t),y(Do.$$.fragment,t),y(Os.$$.fragment,t),y(As.$$.fragment,t),y(Vs.$$.fragment,t),y(Ao.$$.fragment,t),y(Vo.$$.fragment,t),y(Ns.$$.fragment,t),y(Ss.$$.fragment,t),y(Ws.$$.fragment,t),y(So.$$.fragment,t),y(Wo.$$.fragment,t),y(Bs.$$.fragment,t),y(Us.$$.fragment,t),y(Qs.$$.fragment,t),y(Uo.$$.fragment,t),y(Ro.$$.fragment,t),y(Ys.$$.fragment,t),y(Ho.$$.fragment,t),y(ea.$$.fragment,t),y(Jo.$$.fragment,t),y(ta.$$.fragment,t),y(oa.$$.fragment,t),y(na.$$.fragment,t),y(Zo.$$.fragment,t),y(Qo.$$.fragment,t),y(sa.$$.fragment,t),y(aa.$$.fragment,t),y(ra.$$.fragment,t),y(en.$$.fragment,t),y(tn.$$.fragment,t),Ol=!1},d(t){o(d),t&&o(b),t&&o(h),T(n),t&&o(Bt),t&&o(K),T(j),t&&o(Ut),t&&o(Q),t&&o(Rt),t&&o(le),t&&o(Kt),t&&o(de),t&&o(Ge),t&&o(F),T(se),t&&o(Ht),t&&o(De),t&&o(Gt),t&&o(Y),t&&o(Jt),t&&o(M),t&&o(qn),T(Ve,t),t&&o(je),t&&o(U),t&&o(ot),t&&o(me),T(On),t&&o(rl),t&&o(G),T(An),T(eo),T(Vn),t&&o(il),t&&o(st),T(Sn),t&&o(ll),t&&o(ae),T(Wn),T(no),t&&o(dl),t&&o(it),T(Un),t&&o(cl),t&&o(re),T(Rn),T(ao),t&&o(pl),t&&o(ct),T(Hn),t&&o(ml),t&&o(q),T(Gn),T(Xn),T(Zn),T(Yn),T(es),t&&o(fl),t&&o(pt),T(ts),t&&o(hl),t&&o(J),T(os),T(as),T(rs),t&&o(ul),t&&o(mt),T(is),t&&o(gl),t&&o(Ee),T(ls),t&&o(_l),t&&o(ft),T(cs),t&&o(vl),t&&o(X),T(ps),T(ms),T(hs),t&&o(bl),t&&o(ht),T(gs),t&&o(Pl),t&&o(Z),T(_s),T(Ps),T(_o),T(vo),T($s),T(bo),T(Po),T(Is),T($o),T(Io),t&&o($l),t&&o(vt),T(Cs),t&&o(Il),t&&o(bt),T(ys),T(Ts),T(yo),T(To),t&&o(Cl),t&&o($t),T(Ls),t&&o(yl),t&&o(It),T(xs),T(ks),T(xo),T(ko),t&&o(Tl),t&&o(yt),T(ws),t&&o(Ll),t&&o(D),T(Ms),T(Mo),T(Fs),T(jo),T(Eo),T(qs),T(zo),T(Fo),T(Ds),T(qo),T(Do),t&&o(xl),t&&o(kt),T(Os),t&&o(kl),t&&o(wt),T(As),T(Vs),T(Ao),T(Vo),t&&o(wl),t&&o(jt),T(Ns),t&&o(Ml),t&&o(Et),T(Ss),T(Ws),T(So),T(Wo),t&&o(jl),t&&o(Ft),T(Bs),t&&o(El),t&&o(z),T(Us),T(Qs),T(Uo),T(Ro),T(Ys),T(Ho),T(ea),T(Jo),t&&o(zl),t&&o(Dt),T(ta),t&&o(Fl),t&&o(Ot),T(oa),T(na),T(Zo),T(Qo),t&&o(ql),t&&o(Vt),T(sa),t&&o(Dl),t&&o(Nt),T(aa),T(ra),T(en),T(tn)}}}const av={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function rv(L){return T_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fv extends $_{constructor(d){super();I_(this,d,rv,sv,C_,{})}}export{fv as default,av as metadata};
