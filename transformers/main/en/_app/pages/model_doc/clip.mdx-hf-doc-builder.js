import{S as GI,i as XI,s as JI,e as s,k as p,w as b,t as i,M as YI,c as r,d as o,m,a,x as I,h as l,b as h,G as e,g as v,y as $,q as y,o as C,B as T,v as ZI,L as A}from"../../chunks/vendor-hf-doc-builder.js";import{T as G}from"../../chunks/Tip-hf-doc-builder.js";import{D as x}from"../../chunks/Docstring-hf-doc-builder.js";import{C as q}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as j}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as N}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as Yv}from"../../chunks/PipelineTag-hf-doc-builder.js";function QI(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPConfig, CLIPModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>config = CLIPConfig.from_text_vision_configs(config_text, config_vision)`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function e$(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPTextConfig, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function t$(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPVisionConfig, CLIPVisionModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function o$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function n$(L){let d,P,g,f,_;return f=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function s$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function r$(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function a$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function i$(L){let d,P,g,f,_;return f=new q({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function l$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function d$(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function c$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function p$(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPTokenizer, CLIPTextModelWithProjection

model = CLIPTextModelWithProjection.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
text_embeds = outputs.text_embeds`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPTextModelWithProjection

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModelWithProjection.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_embeds = outputs.text_embeds`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function m$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function f$(L){let d,P,g,f,_;return f=new q({props:{code:`from PIL import Image
import requests
from transformers import CLIPProcessor, CLIPVisionModelWithProjection

model = CLIPVisionModelWithProjection.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
image_embeds = outputs.image_embeds`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPProcessor, CLIPVisionModelWithProjection

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModelWithProjection.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = CLIPProcessor.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_embeds = outputs.image_embeds`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function h$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function g$(L){let d,P,g,f,_;return f=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function u$(L){let d,P,g,f,_,n,c,w,Qn,so,X,fe,Be,M,es,Ne,ts,ro,oe,os,Ae,nt,ns,ao,he,ss,io,ge,st,rs,rt,D,S,at,le,as,it,lt,lo,Ue,ue,co,ne,is,He,dt,ls,po,z,ds,_e,cs,mo,J,ps,Oe,Ke,ms;return{c(){d=s("p"),P=i("TensorFlow models and layers in "),g=s("code"),f=i("transformers"),_=i(" accept two formats as input:"),n=p(),c=s("ul"),w=s("li"),Qn=i("having all inputs as keyword arguments (like PyTorch models), or"),so=p(),X=s("li"),fe=i("having all inputs as a list, tuple or dict in the first positional argument."),Be=p(),M=s("p"),es=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Ne=s("code"),ts=i("model.fit()"),ro=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),oe=s("code"),os=i("model.fit()"),Ae=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),nt=s("code"),ns=i("fit()"),ao=i(" and "),he=s("code"),ss=i("predict()"),io=i(`, such as when creating your own layers or models with
the Keras `),ge=s("code"),st=i("Functional"),rs=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),rt=p(),D=s("ul"),S=s("li"),at=i("a single Tensor with "),le=s("code"),as=i("input_ids"),it=i(" only and nothing else: "),lt=s("code"),lo=i("model(input_ids)"),Ue=p(),ue=s("li"),co=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ne=s("code"),is=i("model([input_ids, attention_mask])"),He=i(" or "),dt=s("code"),ls=i("model([input_ids, attention_mask, token_type_ids])"),po=p(),z=s("li"),ds=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),_e=s("code"),cs=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),mo=p(),J=s("p"),ps=i(`Note that when creating models and layers with
`),Oe=s("a"),Ke=i("subclassing"),ms=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var E=a(d);P=l(E,"TensorFlow models and layers in "),g=r(E,"CODE",{});var Ta=a(g);f=l(Ta,"transformers"),Ta.forEach(o),_=l(E," accept two formats as input:"),E.forEach(o),n=m(k),c=r(k,"UL",{});var fo=a(c);w=r(fo,"LI",{});var ct=a(w);Qn=l(ct,"having all inputs as keyword arguments (like PyTorch models), or"),ct.forEach(o),so=m(fo),X=r(fo,"LI",{});var La=a(X);fe=l(La,"having all inputs as a list, tuple or dict in the first positional argument."),La.forEach(o),fo.forEach(o),Be=m(k),M=r(k,"P",{});var U=a(M);es=l(U,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Ne=r(U,"CODE",{});var pt=a(Ne);ts=l(pt,"model.fit()"),pt.forEach(o),ro=l(U,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),oe=r(U,"CODE",{});var wa=a(oe);os=l(wa,"model.fit()"),wa.forEach(o),Ae=l(U,` supports! If, however, you want to use the second
format outside of Keras methods like `),nt=r(U,"CODE",{});var xa=a(nt);ns=l(xa,"fit()"),xa.forEach(o),ao=l(U," and "),he=r(U,"CODE",{});var fs=a(he);ss=l(fs,"predict()"),fs.forEach(o),io=l(U,`, such as when creating your own layers or models with
the Keras `),ge=r(U,"CODE",{});var Ge=a(ge);st=l(Ge,"Functional"),Ge.forEach(o),rs=l(U,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),U.forEach(o),rt=m(k),D=r(k,"UL",{});var Ve=a(D);S=r(Ve,"LI",{});var H=a(S);at=l(H,"a single Tensor with "),le=r(H,"CODE",{});var ka=a(le);as=l(ka,"input_ids"),ka.forEach(o),it=l(H," only and nothing else: "),lt=r(H,"CODE",{});var Xe=a(lt);lo=l(Xe,"model(input_ids)"),Xe.forEach(o),H.forEach(o),Ue=m(Ve),ue=r(Ve,"LI",{});var mt=a(ue);co=l(mt,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ne=r(mt,"CODE",{});var za=a(ne);is=l(za,"model([input_ids, attention_mask])"),za.forEach(o),He=l(mt," or "),dt=r(mt,"CODE",{});var Je=a(dt);ls=l(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(o),mt.forEach(o),po=m(Ve),z=r(Ve,"LI",{});var hs=a(z);ds=l(hs,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),_e=r(hs,"CODE",{});var Ma=a(_e);cs=l(Ma,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ma.forEach(o),hs.forEach(o),Ve.forEach(o),mo=m(k),J=r(k,"P",{});var ft=a(J);ps=l(ft,`Note that when creating models and layers with
`),Oe=r(ft,"A",{href:!0,rel:!0});var ve=a(Oe);Ke=l(ve,"subclassing"),ve.forEach(o),ms=l(ft,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ft.forEach(o),this.h()},h(){h(Oe,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(Oe,"rel","nofollow")},m(k,E){v(k,d,E),e(d,P),e(d,g),e(g,f),e(d,_),v(k,n,E),v(k,c,E),e(c,w),e(w,Qn),e(c,so),e(c,X),e(X,fe),v(k,Be,E),v(k,M,E),e(M,es),e(M,Ne),e(Ne,ts),e(M,ro),e(M,oe),e(oe,os),e(M,Ae),e(M,nt),e(nt,ns),e(M,ao),e(M,he),e(he,ss),e(M,io),e(M,ge),e(ge,st),e(M,rs),v(k,rt,E),v(k,D,E),e(D,S),e(S,at),e(S,le),e(le,as),e(S,it),e(S,lt),e(lt,lo),e(D,Ue),e(D,ue),e(ue,co),e(ue,ne),e(ne,is),e(ue,He),e(ue,dt),e(dt,ls),e(D,po),e(D,z),e(z,ds),e(z,_e),e(_e,cs),v(k,mo,E),v(k,J,E),e(J,ps),e(J,Oe),e(Oe,Ke),e(J,ms)},d(k){k&&o(d),k&&o(n),k&&o(c),k&&o(Be),k&&o(M),k&&o(rt),k&&o(D),k&&o(mo),k&&o(J)}}}function _$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function v$(L){let d,P,g,f,_;return f=new q({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function P$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function b$(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function I$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function $$(L){let d,P,g,f,_;return f=new q({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function y$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function C$(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function T$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function L$(L){let d,P,g,f,_;return f=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function w$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function x$(L){let d,P,g,f,_;return f=new q({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function k$(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function z$(L){let d,P,g,f,_;return f=new q({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function M$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function j$(L){let d,P,g,f,_;return f=new q({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function E$(L){let d,P,g,f,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),f=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);f=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,f),e(d,_)},d(n){n&&o(d)}}}function F$(L){let d,P,g,f,_;return f=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(f.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(f.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(f,n,c),_=!0},p:A,i(n){_||(y(f.$$.fragment,n),_=!0)},o(n){C(f.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(f,n)}}}function q$(L){let d,P,g,f,_,n,c,w,Qn,so,X,fe,Be,M,es,Ne,ts,ro,oe,os,Ae,nt,ns,ao,he,ss,io,ge,st,rs,rt,D,S,at,le,as,it,lt,lo,Ue,ue,co,ne,is,He,dt,ls,po,z,ds,_e,cs,mo,J,ps,Oe,Ke,ms,k,E,Ta,fo,ct,La,U,pt,wa,xa,fs,Ge,Ve,H,ka,Xe,mt,za,Je,hs,Ma,ft,ve,ho,Wi,gs,Wp,Si,Sp,Gd,ja,Rp,Xd,us,Jd,_s,Yd,vs,Zd,ht,go,Ri,Ps,Bp,Bi,Up,Qd,Y,bs,Hp,Ye,Ea,Kp,Gp,Fa,Xp,Jp,Is,Yp,Zp,Qp,gt,em,qa,tm,om,Da,nm,sm,rm,uo,am,_o,$s,im,ys,lm,Na,dm,cm,ec,ut,vo,Ui,Cs,pm,Hi,mm,tc,de,Ts,fm,_t,hm,Aa,gm,um,Ls,_m,vm,Pm,vt,bm,Oa,Im,$m,Va,ym,Cm,Tm,Po,oc,Pt,bo,Ki,ws,Lm,Gi,wm,nc,ce,xs,xm,bt,km,Wa,zm,Mm,ks,jm,Em,Fm,It,qm,Sa,Dm,Nm,Ra,Am,Om,Vm,Io,sc,$t,$o,Xi,zs,Wm,Ji,Sm,rc,O,Ms,Rm,Yi,Bm,Um,js,Hm,Ba,Km,Gm,Xm,Pe,Es,Jm,Zi,Ym,Zm,Qi,Ua,Qm,el,ef,tf,tl,of,nf,yo,Fs,sf,qs,rf,ol,af,lf,df,Co,Ds,cf,nl,pf,mf,Ha,Ns,ac,yt,To,sl,As,ff,rl,hf,ic,Z,Os,gf,Vs,uf,al,_f,vf,Pf,Ws,bf,Ka,If,$f,yf,be,Ss,Cf,il,Tf,Lf,ll,Ga,wf,dl,xf,kf,cl,zf,Mf,Lo,Rs,jf,pl,Ef,lc,Ct,wo,ml,Bs,Ff,fl,qf,dc,We,Us,Df,hl,Nf,Af,xo,Hs,Of,gl,Vf,cc,Tt,ko,ul,Ks,Wf,_l,Sf,pc,V,Gs,Rf,vl,Bf,Uf,zo,Xs,Hf,Js,Kf,Pl,Gf,Xf,Jf,Mo,Ys,Yf,bl,Zf,Qf,jo,Zs,eh,Il,th,oh,Eo,Qs,nh,$l,sh,rh,Fo,er,ah,yl,ih,mc,Lt,qo,Cl,tr,lh,Tl,dh,fc,Q,or,ch,Ll,ph,mh,se,Xa,fh,hh,Ja,gh,uh,Ya,_h,vh,wl,Ph,bh,Za,Ih,$h,yh,Do,nr,Ch,sr,Th,Qa,Lh,wh,xh,No,rr,kh,ar,zh,ei,Mh,jh,hc,wt,Ao,xl,ir,Eh,kl,Fh,gc,R,lr,qh,dr,Dh,ti,Nh,Ah,Oh,cr,Vh,pr,Wh,Sh,Rh,Ie,mr,Bh,xt,Uh,oi,Hh,Kh,zl,Gh,Xh,Jh,Oo,Yh,Vo,Zh,$e,fr,Qh,kt,eg,ni,tg,og,Ml,ng,sg,rg,Wo,ag,So,ig,ye,hr,lg,zt,dg,si,cg,pg,jl,mg,fg,hg,Ro,gg,Bo,uc,Mt,Uo,El,gr,ug,Fl,_g,_c,pe,ur,vg,_r,Pg,ri,bg,Ig,$g,vr,yg,Pr,Cg,Tg,Lg,Ce,br,wg,jt,xg,ai,kg,zg,ql,Mg,jg,Eg,Ho,Fg,Ko,vc,Et,Go,Dl,Ir,qg,Nl,Dg,Pc,ee,$r,Ng,Al,Ag,Og,yr,Vg,ii,Wg,Sg,Rg,Cr,Bg,Tr,Ug,Hg,Kg,Te,Lr,Gg,Ft,Xg,li,Jg,Yg,Ol,Zg,Qg,eu,Xo,tu,Jo,bc,qt,Yo,Vl,wr,ou,Wl,nu,Ic,te,xr,su,Sl,ru,au,kr,iu,di,lu,du,cu,zr,pu,Mr,mu,fu,hu,Le,jr,gu,Dt,uu,ci,_u,vu,Rl,Pu,bu,Iu,Zo,$u,Qo,$c,Nt,en,Bl,Er,yu,Ul,Cu,yc,me,Fr,Tu,qr,Lu,pi,wu,xu,ku,Dr,zu,Nr,Mu,ju,Eu,we,Ar,Fu,At,qu,mi,Du,Nu,Hl,Au,Ou,Vu,tn,Wu,on,Cc,Ot,nn,Kl,Or,Su,Gl,Ru,Tc,W,Vr,Bu,Wr,Uu,fi,Hu,Ku,Gu,Sr,Xu,Rr,Ju,Yu,Zu,sn,Qu,xe,Br,e_,Vt,t_,hi,o_,n_,Xl,s_,r_,a_,rn,i_,an,l_,ke,Ur,d_,Wt,c_,gi,p_,m_,Jl,f_,h_,g_,ln,u_,dn,__,ze,Hr,v_,St,P_,ui,b_,I_,Yl,$_,y_,C_,cn,T_,pn,Lc,Rt,mn,Zl,Kr,L_,Ql,w_,wc,Bt,Gr,x_,Me,Xr,k_,Ut,z_,_i,M_,j_,ed,E_,F_,q_,fn,D_,hn,xc,Ht,gn,td,Jr,N_,od,A_,kc,Kt,Yr,O_,je,Zr,V_,Gt,W_,vi,S_,R_,nd,B_,U_,H_,un,K_,_n,zc,Xt,vn,sd,Qr,G_,rd,X_,Mc,F,ea,J_,ta,Y_,Pi,Z_,Q_,ev,oa,tv,na,ov,nv,sv,ad,rv,av,Se,id,sa,iv,lv,ld,ra,dv,cv,dd,aa,pv,mv,cd,ia,fv,hv,Ee,la,gv,Jt,uv,pd,_v,vv,md,Pv,bv,Iv,Pn,$v,bn,yv,In,da,Cv,$n,Tv,yn,ca,Lv,Cn,jc,Yt,Tn,fd,pa,wv,hd,xv,Ec,Zt,ma,kv,Fe,fa,zv,Qt,Mv,gd,jv,Ev,ud,Fv,qv,Dv,Ln,Nv,wn,Fc,eo,xn,_d,ha,Av,vd,Ov,qc,to,ga,Vv,qe,ua,Wv,oo,Sv,Pd,Rv,Bv,bd,Uv,Hv,Kv,kn,Gv,zn,Dc;return n=new j({}),M=new j({}),le=new j({}),Ge=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),gs=new j({}),us=new Yv({props:{pipeline:"text-to-image"}}),_s=new Yv({props:{pipeline:"image-to-text"}}),vs=new Yv({props:{pipeline:"zero-shot-classification"}}),Ps=new j({}),bs=new x({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config",val:" = None"},{name:"vision_config",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config",description:`<strong>text_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config"},{anchor:"transformers.CLIPConfig.vision_config",description:`<strong>vision_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L258"}}),uo=new N({props:{anchor:"transformers.CLIPConfig.example",$$slots:{default:[QI]},$$scope:{ctx:L}}}),$s=new x({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L334",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),Cs=new j({}),Ts=new x({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"projection_dim",val:" = 512"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L40"}}),Po=new N({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[e$]},$$scope:{ctx:L}}}),ws=new j({}),xs=new x({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"projection_dim",val:" = 512"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L150"}}),Io=new N({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[t$]},$$scope:{ctx:L}}}),zs=new j({}),Ms=new x({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|startoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L260"}}),Es=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L346",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fs=new x({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L373",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ds=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L401",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ns=new x({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L496"}}),As=new j({}),Os=new x({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|startoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),Ss=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rs=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bs=new j({}),Us=new x({props:{name:"class transformers.CLIPImageProcessor",anchor:"transformers.CLIPImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"do_convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L58"}}),Hs=new x({props:{name:"preprocess",anchor:"transformers.CLIPImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": int = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": typing.Optional[transformers.image_utils.ChannelDimension] = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
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
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L226"}}),Ks=new j({}),Gs=new x({props:{name:"class transformers.CLIPImageProcessor",anchor:"transformers.CLIPImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"do_convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L58"}}),Xs=new x({props:{name:"center_crop",anchor:"transformers.CLIPImageProcessor.center_crop",parameters:[{name:"image",val:": ndarray"},{name:"size",val:": typing.Dict[str, int]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.center_crop.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to center crop.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.center_crop.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>) &#x2014;
Size of the output image in the form of a dictionary with keys <code>height</code> and <code>width</code>.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.center_crop.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L159"}}),Ys=new x({props:{name:"normalize",anchor:"transformers.CLIPImageProcessor.normalize",parameters:[{name:"image",val:": ndarray"},{name:"mean",val:": typing.Union[float, typing.List[float]]"},{name:"std",val:": typing.Union[float, typing.List[float]]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.normalize.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to normalize.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.normalize.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>) &#x2014;
Image mean.`,name:"image_mean"},{anchor:"transformers.CLIPImageProcessor.normalize.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.CLIPImageProcessor.normalize.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L203"}}),Zs=new x({props:{name:"preprocess",anchor:"transformers.CLIPImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": int = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": typing.Optional[transformers.image_utils.ChannelDimension] = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
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
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L226"}}),Qs=new x({props:{name:"rescale",anchor:"transformers.CLIPImageProcessor.rescale",parameters:[{name:"image",val:": ndarray"},{name:"scale",val:": typing.Union[int, float]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.rescale.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to rescale.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.rescale.scale",description:`<strong>scale</strong> (<code>int</code> or <code>float</code>) &#x2014;
Scale to apply to the image.`,name:"scale"},{anchor:"transformers.CLIPImageProcessor.rescale.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L183"}}),er=new x({props:{name:"resize",anchor:"transformers.CLIPImageProcessor.resize",parameters:[{name:"image",val:": ndarray"},{name:"size",val:": typing.Dict[str, int]"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.resize.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to resize.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.resize.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>) &#x2014;
Size of the output image.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.resize.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use when resiizing the image.`,name:"resample"},{anchor:"transformers.CLIPImageProcessor.resize.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L131"}}),tr=new j({}),or=new x({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22"}}),nr=new x({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),rr=new x({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),ir=new j({}),lr=new x({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L938"}}),mr=new x({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L1069",returnDescription:`
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
`}}),Oo=new G({props:{$$slots:{default:[o$]},$$scope:{ctx:L}}}),Vo=new N({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[n$]},$$scope:{ctx:L}}}),fr=new x({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L973",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Wo=new G({props:{$$slots:{default:[s$]},$$scope:{ctx:L}}}),So=new N({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[r$]},$$scope:{ctx:L}}}),hr=new x({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L1020",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ro=new G({props:{$$slots:{default:[a$]},$$scope:{ctx:L}}}),Bo=new N({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[i$]},$$scope:{ctx:L}}}),gr=new j({}),ur=new x({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L764"}}),br=new x({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L781",returnDescription:`
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
`}}),Ho=new G({props:{$$slots:{default:[l$]},$$scope:{ctx:L}}}),Ko=new N({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[d$]},$$scope:{ctx:L}}}),Ir=new j({}),$r=new x({props:{name:"class transformers.CLIPTextModelWithProjection",anchor:"transformers.CLIPTextModelWithProjection",parameters:[{name:"config",val:": CLIPTextConfig"}],parametersDescription:[{anchor:"transformers.CLIPTextModelWithProjection.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L1169"}}),Lr=new x({props:{name:"forward",anchor:"transformers.CLIPTextModelWithProjection.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModelWithProjection.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CLIPTextModelWithProjection.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CLIPTextModelWithProjection.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CLIPTextModelWithProjection.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPTextModelWithProjection.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPTextModelWithProjection.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L1190",returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPTextModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPTextConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>text_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim)</code> <em>optional</em> returned when model is initialized with <code>with_projection=True</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooler_output.</p>
</li>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
<p><code>transformers.models.clip.modeling_clip.CLIPTextModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new G({props:{$$slots:{default:[c$]},$$scope:{ctx:L}}}),Jo=new N({props:{anchor:"transformers.CLIPTextModelWithProjection.forward.example",$$slots:{default:[p$]},$$scope:{ctx:L}}}),wr=new j({}),xr=new x({props:{name:"class transformers.CLIPVisionModelWithProjection",anchor:"transformers.CLIPVisionModelWithProjection",parameters:[{name:"config",val:": CLIPVisionConfig"}],parametersDescription:[{anchor:"transformers.CLIPVisionModelWithProjection.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L1250"}}),jr=new x({props:{name:"forward",anchor:"transformers.CLIPVisionModelWithProjection.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModelWithProjection.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModelWithProjection.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModelWithProjection.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModelWithProjection.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L1267",returnDescription:`
<p>A <code>transformers.models.clip.modeling_clip.CLIPVisionModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.clip.configuration_clip.CLIPVisionConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim)</code> <em>optional</em> returned when model is initialized with <code>with_projection=True</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooler_output.</p>
</li>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
<p><code>transformers.models.clip.modeling_clip.CLIPVisionModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new G({props:{$$slots:{default:[m$]},$$scope:{ctx:L}}}),Qo=new N({props:{anchor:"transformers.CLIPVisionModelWithProjection.forward.example",$$slots:{default:[f$]},$$scope:{ctx:L}}}),Er=new j({}),Fr=new x({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L883"}}),Ar=new x({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L896",returnDescription:`
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
`}}),tn=new G({props:{$$slots:{default:[h$]},$$scope:{ctx:L}}}),on=new N({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[g$]},$$scope:{ctx:L}}}),Or=new j({}),Vr=new x({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1229"}}),sn=new G({props:{$$slots:{default:[u$]},$$scope:{ctx:L}}}),Br=new x({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),rn=new G({props:{$$slots:{default:[_$]},$$scope:{ctx:L}}}),an=new N({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[v$]},$$scope:{ctx:L}}}),Ur=new x({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ln=new G({props:{$$slots:{default:[P$]},$$scope:{ctx:L}}}),dn=new N({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[b$]},$$scope:{ctx:L}}}),Hr=new x({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),cn=new G({props:{$$slots:{default:[I$]},$$scope:{ctx:L}}}),pn=new N({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[$$]},$$scope:{ctx:L}}}),Kr=new j({}),Gr=new x({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1056"}}),Xr=new x({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),fn=new G({props:{$$slots:{default:[y$]},$$scope:{ctx:L}}}),hn=new N({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[C$]},$$scope:{ctx:L}}}),Jr=new j({}),Yr=new x({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1131"}}),Zr=new x({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),un=new G({props:{$$slots:{default:[T$]},$$scope:{ctx:L}}}),_n=new N({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[L$]},$$scope:{ctx:L}}}),Qr=new j({}),ea=new x({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),la=new x({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Pn=new G({props:{$$slots:{default:[w$]},$$scope:{ctx:L}}}),bn=new N({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[x$]},$$scope:{ctx:L}}}),da=new x({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),$n=new N({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[k$]},$$scope:{ctx:L}}}),ca=new x({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Cn=new N({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[z$]},$$scope:{ctx:L}}}),pa=new j({}),ma=new x({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),fa=new x({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ln=new G({props:{$$slots:{default:[M$]},$$scope:{ctx:L}}}),wn=new N({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[j$]},$$scope:{ctx:L}}}),ha=new j({}),ga=new x({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),ua=new x({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),kn=new G({props:{$$slots:{default:[E$]},$$scope:{ctx:L}}}),zn=new N({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[F$]},$$scope:{ctx:L}}}),{c(){d=s("meta"),P=p(),g=s("h1"),f=s("a"),_=s("span"),b(n.$$.fragment),c=p(),w=s("span"),Qn=i("CLIP"),so=p(),X=s("h2"),fe=s("a"),Be=s("span"),b(M.$$.fragment),es=p(),Ne=s("span"),ts=i("Overview"),ro=p(),oe=s("p"),os=i("The CLIP model was proposed in "),Ae=s("a"),nt=i("Learning Transferable Visual Models From Natural Language Supervision"),ns=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),ao=p(),he=s("p"),ss=i("The abstract from the paper is the following:"),io=p(),ge=s("p"),st=s("em"),rs=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),rt=p(),D=s("h2"),S=s("a"),at=s("span"),b(le.$$.fragment),as=p(),it=s("span"),lt=i("Usage"),lo=p(),Ue=s("p"),ue=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),co=p(),ne=s("p"),is=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),He=s("a"),dt=i("CLIPFeatureExtractor"),ls=i(" can be used to resize (or rescale) and normalize images for the model."),po=p(),z=s("p"),ds=i("The "),_e=s("a"),cs=i("CLIPTokenizer"),mo=i(" is used to encode the text. The "),J=s("a"),ps=i("CLIPProcessor"),Oe=i(` wraps
`),Ke=s("a"),ms=i("CLIPFeatureExtractor"),k=i(" and "),E=s("a"),Ta=i("CLIPTokenizer"),fo=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ct=s("a"),La=i("CLIPProcessor"),U=i(" and "),pt=s("a"),wa=i("CLIPModel"),xa=i("."),fs=p(),b(Ge.$$.fragment),Ve=p(),H=s("p"),ka=i("This model was contributed by "),Xe=s("a"),mt=i("valhalla"),za=i(". The original code can be found "),Je=s("a"),hs=i("here"),Ma=i("."),ft=p(),ve=s("h2"),ho=s("a"),Wi=s("span"),b(gs.$$.fragment),Wp=p(),Si=s("span"),Sp=i("Resources"),Gd=p(),ja=s("p"),Rp=i(`A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with CLIP. If you\u2019re
interested in submitting a resource to be included here, please feel free to open a Pull Request and we will review it.
The resource should ideally demonstrate something new instead of duplicating an existing resource.`),Xd=p(),b(us.$$.fragment),Jd=i(`
- A blog post on [How to use CLIP to retrieve images from text](https://huggingface.co/blog/fine-tune-clip-rsicd).
- A blog bost on [How to use CLIP for Japanese text to image generation](https://huggingface.co/blog/japanese-stable-diffusion).
`),b(_s.$$.fragment),Yd=i(`
- A notebook showing [Video to text matching with CLIP for videos](https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/X-CLIP/Video_text_matching_with_X_CLIP.ipynb).
`),b(vs.$$.fragment),Zd=i(`
- A notebook showing [Zero shot video classification using CLIP for video](https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/X-CLIP/Zero_shot_classify_a_YouTube_video_with_X_CLIP.ipynb).
`),ht=s("h2"),go=s("a"),Ri=s("span"),b(Ps.$$.fragment),Bp=p(),Bi=s("span"),Up=i("CLIPConfig"),Qd=p(),Y=s("div"),b(bs.$$.fragment),Hp=p(),Ye=s("p"),Ea=s("a"),Kp=i("CLIPConfig"),Gp=i(" is the configuration class to store the configuration of a "),Fa=s("a"),Xp=i("CLIPModel"),Jp=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Is=s("a"),Yp=i("openai/clip-vit-base-patch32"),Zp=i(" architecture."),Qp=p(),gt=s("p"),em=i("Configuration objects inherit from "),qa=s("a"),tm=i("PretrainedConfig"),om=i(` and can be used to control the model outputs. Read the
documentation from `),Da=s("a"),nm=i("PretrainedConfig"),sm=i(" for more information."),rm=p(),b(uo.$$.fragment),am=p(),_o=s("div"),b($s.$$.fragment),im=p(),ys=s("p"),lm=i("Instantiate a "),Na=s("a"),dm=i("CLIPConfig"),cm=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),ec=p(),ut=s("h2"),vo=s("a"),Ui=s("span"),b(Cs.$$.fragment),pm=p(),Hi=s("span"),mm=i("CLIPTextConfig"),tc=p(),de=s("div"),b(Ts.$$.fragment),fm=p(),_t=s("p"),hm=i("This is the configuration class to store the configuration of a "),Aa=s("a"),gm=i("CLIPModel"),um=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Ls=s("a"),_m=i("openai/clip-vit-base-patch32"),vm=i(" architecture."),Pm=p(),vt=s("p"),bm=i("Configuration objects inherit from "),Oa=s("a"),Im=i("PretrainedConfig"),$m=i(` and can be used to control the model outputs. Read the
documentation from `),Va=s("a"),ym=i("PretrainedConfig"),Cm=i(" for more information."),Tm=p(),b(Po.$$.fragment),oc=p(),Pt=s("h2"),bo=s("a"),Ki=s("span"),b(ws.$$.fragment),Lm=p(),Gi=s("span"),wm=i("CLIPVisionConfig"),nc=p(),ce=s("div"),b(xs.$$.fragment),xm=p(),bt=s("p"),km=i("This is the configuration class to store the configuration of a "),Wa=s("a"),zm=i("CLIPModel"),Mm=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ks=s("a"),jm=i("openai/clip-vit-base-patch32"),Em=i(" architecture."),Fm=p(),It=s("p"),qm=i("Configuration objects inherit from "),Sa=s("a"),Dm=i("PretrainedConfig"),Nm=i(` and can be used to control the model outputs. Read the
documentation from `),Ra=s("a"),Am=i("PretrainedConfig"),Om=i(" for more information."),Vm=p(),b(Io.$$.fragment),sc=p(),$t=s("h2"),$o=s("a"),Xi=s("span"),b(zs.$$.fragment),Wm=p(),Ji=s("span"),Sm=i("CLIPTokenizer"),rc=p(),O=s("div"),b(Ms.$$.fragment),Rm=p(),Yi=s("p"),Bm=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Um=p(),js=s("p"),Hm=i("This tokenizer inherits from "),Ba=s("a"),Km=i("PreTrainedTokenizer"),Gm=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xm=p(),Pe=s("div"),b(Es.$$.fragment),Jm=p(),Zi=s("p"),Ym=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Zm=p(),Qi=s("ul"),Ua=s("li"),Qm=i("single sequence: "),el=s("code"),ef=i("<|startoftext|> X <|endoftext|>"),tf=p(),tl=s("p"),of=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),nf=p(),yo=s("div"),b(Fs.$$.fragment),sf=p(),qs=s("p"),rf=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ol=s("code"),af=i("prepare_for_model"),lf=i(" method."),df=p(),Co=s("div"),b(Ds.$$.fragment),cf=p(),nl=s("p"),pf=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),mf=p(),Ha=s("div"),b(Ns.$$.fragment),ac=p(),yt=s("h2"),To=s("a"),sl=s("span"),b(As.$$.fragment),ff=p(),rl=s("span"),hf=i("CLIPTokenizerFast"),ic=p(),Z=s("div"),b(Os.$$.fragment),gf=p(),Vs=s("p"),uf=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),al=s("em"),_f=i("tokenizers"),vf=i(` library). Based on byte-level
Byte-Pair-Encoding.`),Pf=p(),Ws=s("p"),bf=i("This tokenizer inherits from "),Ka=s("a"),If=i("PreTrainedTokenizerFast"),$f=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),yf=p(),be=s("div"),b(Ss.$$.fragment),Cf=p(),il=s("p"),Tf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Lf=p(),ll=s("ul"),Ga=s("li"),wf=i("single sequence: "),dl=s("code"),xf=i("<|startoftext|> X <|endoftext|>"),kf=p(),cl=s("p"),zf=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Mf=p(),Lo=s("div"),b(Rs.$$.fragment),jf=p(),pl=s("p"),Ef=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),lc=p(),Ct=s("h2"),wo=s("a"),ml=s("span"),b(Bs.$$.fragment),Ff=p(),fl=s("span"),qf=i("CLIPImageProcessor"),dc=p(),We=s("div"),b(Us.$$.fragment),Df=p(),hl=s("p"),Nf=i("Constructs a CLIP image processor."),Af=p(),xo=s("div"),b(Hs.$$.fragment),Of=p(),gl=s("p"),Vf=i("Preprocess an image or batch of images."),cc=p(),Tt=s("h2"),ko=s("a"),ul=s("span"),b(Ks.$$.fragment),Wf=p(),_l=s("span"),Sf=i("CLIPFeatureExtractor"),pc=p(),V=s("div"),b(Gs.$$.fragment),Rf=p(),vl=s("p"),Bf=i("Constructs a CLIP image processor."),Uf=p(),zo=s("div"),b(Xs.$$.fragment),Hf=p(),Js=s("p"),Kf=i(`Center crop an image. If the image is too small to be cropped to the size given, it will be padded (so the
returned result will always be of size `),Pl=s("code"),Gf=i("size"),Xf=i(")."),Jf=p(),Mo=s("div"),b(Ys.$$.fragment),Yf=p(),bl=s("p"),Zf=i("Normalize an image. image = (image - image_mean) / image_std."),Qf=p(),jo=s("div"),b(Zs.$$.fragment),eh=p(),Il=s("p"),th=i("Preprocess an image or batch of images."),oh=p(),Eo=s("div"),b(Qs.$$.fragment),nh=p(),$l=s("p"),sh=i("Rescale an image by a scale factor. image = image * scale."),rh=p(),Fo=s("div"),b(er.$$.fragment),ah=p(),yl=s("p"),ih=i(`Resize an image. The shortest edge of the image is resized to size[\u201Cshortest_edge\u201D], with the longest edge
resized to keep the input aspect ratio.`),mc=p(),Lt=s("h2"),qo=s("a"),Cl=s("span"),b(tr.$$.fragment),lh=p(),Tl=s("span"),dh=i("CLIPProcessor"),fc=p(),Q=s("div"),b(or.$$.fragment),ch=p(),Ll=s("p"),ph=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),mh=p(),se=s("p"),Xa=s("a"),fh=i("CLIPProcessor"),hh=i(" offers all the functionalities of "),Ja=s("a"),gh=i("CLIPFeatureExtractor"),uh=i(" and "),Ya=s("a"),_h=i("CLIPTokenizerFast"),vh=i(`. See the
`),wl=s("code"),Ph=i("__call__()"),bh=i(" and "),Za=s("a"),Ih=i("decode()"),$h=i(" for more information."),yh=p(),Do=s("div"),b(nr.$$.fragment),Ch=p(),sr=s("p"),Th=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Qa=s("a"),Lh=i("batch_decode()"),wh=i(`. Please
refer to the docstring of this method for more information.`),xh=p(),No=s("div"),b(rr.$$.fragment),kh=p(),ar=s("p"),zh=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),ei=s("a"),Mh=i("decode()"),jh=i(`. Please refer to
the docstring of this method for more information.`),hc=p(),wt=s("h2"),Ao=s("a"),xl=s("span"),b(ir.$$.fragment),Eh=p(),kl=s("span"),Fh=i("CLIPModel"),gc=p(),R=s("div"),b(lr.$$.fragment),qh=p(),dr=s("p"),Dh=i("This model inherits from "),ti=s("a"),Nh=i("PreTrainedModel"),Ah=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=p(),cr=s("p"),Vh=i("This model is also a PyTorch "),pr=s("a"),Wh=i("torch.nn.Module"),Sh=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rh=p(),Ie=s("div"),b(mr.$$.fragment),Bh=p(),xt=s("p"),Uh=i("The "),oi=s("a"),Hh=i("CLIPModel"),Kh=i(" forward method, overrides the "),zl=s("code"),Gh=i("__call__"),Xh=i(" special method."),Jh=p(),b(Oo.$$.fragment),Yh=p(),b(Vo.$$.fragment),Zh=p(),$e=s("div"),b(fr.$$.fragment),Qh=p(),kt=s("p"),eg=i("The "),ni=s("a"),tg=i("CLIPModel"),og=i(" forward method, overrides the "),Ml=s("code"),ng=i("__call__"),sg=i(" special method."),rg=p(),b(Wo.$$.fragment),ag=p(),b(So.$$.fragment),ig=p(),ye=s("div"),b(hr.$$.fragment),lg=p(),zt=s("p"),dg=i("The "),si=s("a"),cg=i("CLIPModel"),pg=i(" forward method, overrides the "),jl=s("code"),mg=i("__call__"),fg=i(" special method."),hg=p(),b(Ro.$$.fragment),gg=p(),b(Bo.$$.fragment),uc=p(),Mt=s("h2"),Uo=s("a"),El=s("span"),b(gr.$$.fragment),ug=p(),Fl=s("span"),_g=i("CLIPTextModel"),_c=p(),pe=s("div"),b(ur.$$.fragment),vg=p(),_r=s("p"),Pg=i(`The text model from CLIP without any head or projection on top.
This model inherits from `),ri=s("a"),bg=i("PreTrainedModel"),Ig=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$g=p(),vr=s("p"),yg=i("This model is also a PyTorch "),Pr=s("a"),Cg=i("torch.nn.Module"),Tg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lg=p(),Ce=s("div"),b(br.$$.fragment),wg=p(),jt=s("p"),xg=i("The "),ai=s("a"),kg=i("CLIPTextModel"),zg=i(" forward method, overrides the "),ql=s("code"),Mg=i("__call__"),jg=i(" special method."),Eg=p(),b(Ho.$$.fragment),Fg=p(),b(Ko.$$.fragment),vc=p(),Et=s("h2"),Go=s("a"),Dl=s("span"),b(Ir.$$.fragment),qg=p(),Nl=s("span"),Dg=i("CLIPTextModelWithProjection"),Pc=p(),ee=s("div"),b($r.$$.fragment),Ng=p(),Al=s("p"),Ag=i("CLIP Text Model with a projection layer on top (a linear layer on top of the pooled output)."),Og=p(),yr=s("p"),Vg=i("This model inherits from "),ii=s("a"),Wg=i("PreTrainedModel"),Sg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rg=p(),Cr=s("p"),Bg=i("This model is also a PyTorch "),Tr=s("a"),Ug=i("torch.nn.Module"),Hg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kg=p(),Te=s("div"),b(Lr.$$.fragment),Gg=p(),Ft=s("p"),Xg=i("The "),li=s("a"),Jg=i("CLIPTextModelWithProjection"),Yg=i(" forward method, overrides the "),Ol=s("code"),Zg=i("__call__"),Qg=i(" special method."),eu=p(),b(Xo.$$.fragment),tu=p(),b(Jo.$$.fragment),bc=p(),qt=s("h2"),Yo=s("a"),Vl=s("span"),b(wr.$$.fragment),ou=p(),Wl=s("span"),nu=i("CLIPVisionModelWithProjection"),Ic=p(),te=s("div"),b(xr.$$.fragment),su=p(),Sl=s("p"),ru=i("CLIP Vision Model with a projection layer on top (a linear layer on top of the pooled output)."),au=p(),kr=s("p"),iu=i("This model inherits from "),di=s("a"),lu=i("PreTrainedModel"),du=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu=p(),zr=s("p"),pu=i("This model is also a PyTorch "),Mr=s("a"),mu=i("torch.nn.Module"),fu=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hu=p(),Le=s("div"),b(jr.$$.fragment),gu=p(),Dt=s("p"),uu=i("The "),ci=s("a"),_u=i("CLIPVisionModelWithProjection"),vu=i(" forward method, overrides the "),Rl=s("code"),Pu=i("__call__"),bu=i(" special method."),Iu=p(),b(Zo.$$.fragment),$u=p(),b(Qo.$$.fragment),$c=p(),Nt=s("h2"),en=s("a"),Bl=s("span"),b(Er.$$.fragment),yu=p(),Ul=s("span"),Cu=i("CLIPVisionModel"),yc=p(),me=s("div"),b(Fr.$$.fragment),Tu=p(),qr=s("p"),Lu=i(`The vision model from CLIP without any head or projection on top.
This model inherits from `),pi=s("a"),wu=i("PreTrainedModel"),xu=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku=p(),Dr=s("p"),zu=i("This model is also a PyTorch "),Nr=s("a"),Mu=i("torch.nn.Module"),ju=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eu=p(),we=s("div"),b(Ar.$$.fragment),Fu=p(),At=s("p"),qu=i("The "),mi=s("a"),Du=i("CLIPVisionModel"),Nu=i(" forward method, overrides the "),Hl=s("code"),Au=i("__call__"),Ou=i(" special method."),Vu=p(),b(tn.$$.fragment),Wu=p(),b(on.$$.fragment),Cc=p(),Ot=s("h2"),nn=s("a"),Kl=s("span"),b(Or.$$.fragment),Su=p(),Gl=s("span"),Ru=i("TFCLIPModel"),Tc=p(),W=s("div"),b(Vr.$$.fragment),Bu=p(),Wr=s("p"),Uu=i("This model inherits from "),fi=s("a"),Hu=i("TFPreTrainedModel"),Ku=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu=p(),Sr=s("p"),Xu=i("This model is also a "),Rr=s("a"),Ju=i("tf.keras.Model"),Yu=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zu=p(),b(sn.$$.fragment),Qu=p(),xe=s("div"),b(Br.$$.fragment),e_=p(),Vt=s("p"),t_=i("The "),hi=s("a"),o_=i("TFCLIPModel"),n_=i(" forward method, overrides the "),Xl=s("code"),s_=i("__call__"),r_=i(" special method."),a_=p(),b(rn.$$.fragment),i_=p(),b(an.$$.fragment),l_=p(),ke=s("div"),b(Ur.$$.fragment),d_=p(),Wt=s("p"),c_=i("The "),gi=s("a"),p_=i("TFCLIPModel"),m_=i(" forward method, overrides the "),Jl=s("code"),f_=i("__call__"),h_=i(" special method."),g_=p(),b(ln.$$.fragment),u_=p(),b(dn.$$.fragment),__=p(),ze=s("div"),b(Hr.$$.fragment),v_=p(),St=s("p"),P_=i("The "),ui=s("a"),b_=i("TFCLIPModel"),I_=i(" forward method, overrides the "),Yl=s("code"),$_=i("__call__"),y_=i(" special method."),C_=p(),b(cn.$$.fragment),T_=p(),b(pn.$$.fragment),Lc=p(),Rt=s("h2"),mn=s("a"),Zl=s("span"),b(Kr.$$.fragment),L_=p(),Ql=s("span"),w_=i("TFCLIPTextModel"),wc=p(),Bt=s("div"),b(Gr.$$.fragment),x_=p(),Me=s("div"),b(Xr.$$.fragment),k_=p(),Ut=s("p"),z_=i("The "),_i=s("a"),M_=i("TFCLIPTextModel"),j_=i(" forward method, overrides the "),ed=s("code"),E_=i("__call__"),F_=i(" special method."),q_=p(),b(fn.$$.fragment),D_=p(),b(hn.$$.fragment),xc=p(),Ht=s("h2"),gn=s("a"),td=s("span"),b(Jr.$$.fragment),N_=p(),od=s("span"),A_=i("TFCLIPVisionModel"),kc=p(),Kt=s("div"),b(Yr.$$.fragment),O_=p(),je=s("div"),b(Zr.$$.fragment),V_=p(),Gt=s("p"),W_=i("The "),vi=s("a"),S_=i("TFCLIPVisionModel"),R_=i(" forward method, overrides the "),nd=s("code"),B_=i("__call__"),U_=i(" special method."),H_=p(),b(un.$$.fragment),K_=p(),b(_n.$$.fragment),zc=p(),Xt=s("h2"),vn=s("a"),sd=s("span"),b(Qr.$$.fragment),G_=p(),rd=s("span"),X_=i("FlaxCLIPModel"),Mc=p(),F=s("div"),b(ea.$$.fragment),J_=p(),ta=s("p"),Y_=i("This model inherits from "),Pi=s("a"),Z_=i("FlaxPreTrainedModel"),Q_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ev=p(),oa=s("p"),tv=i("This model is also a Flax Linen "),na=s("a"),ov=i("flax.linen.Module"),nv=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sv=p(),ad=s("p"),rv=i("Finally, this model supports inherent JAX features such as:"),av=p(),Se=s("ul"),id=s("li"),sa=s("a"),iv=i("Just-In-Time (JIT) compilation"),lv=p(),ld=s("li"),ra=s("a"),dv=i("Automatic Differentiation"),cv=p(),dd=s("li"),aa=s("a"),pv=i("Vectorization"),mv=p(),cd=s("li"),ia=s("a"),fv=i("Parallelization"),hv=p(),Ee=s("div"),b(la.$$.fragment),gv=p(),Jt=s("p"),uv=i("The "),pd=s("code"),_v=i("FlaxCLIPPreTrainedModel"),vv=i(" forward method, overrides the "),md=s("code"),Pv=i("__call__"),bv=i(" special method."),Iv=p(),b(Pn.$$.fragment),$v=p(),b(bn.$$.fragment),yv=p(),In=s("div"),b(da.$$.fragment),Cv=p(),b($n.$$.fragment),Tv=p(),yn=s("div"),b(ca.$$.fragment),Lv=p(),b(Cn.$$.fragment),jc=p(),Yt=s("h2"),Tn=s("a"),fd=s("span"),b(pa.$$.fragment),wv=p(),hd=s("span"),xv=i("FlaxCLIPTextModel"),Ec=p(),Zt=s("div"),b(ma.$$.fragment),kv=p(),Fe=s("div"),b(fa.$$.fragment),zv=p(),Qt=s("p"),Mv=i("The "),gd=s("code"),jv=i("FlaxCLIPTextPreTrainedModel"),Ev=i(" forward method, overrides the "),ud=s("code"),Fv=i("__call__"),qv=i(" special method."),Dv=p(),b(Ln.$$.fragment),Nv=p(),b(wn.$$.fragment),Fc=p(),eo=s("h2"),xn=s("a"),_d=s("span"),b(ha.$$.fragment),Av=p(),vd=s("span"),Ov=i("FlaxCLIPVisionModel"),qc=p(),to=s("div"),b(ga.$$.fragment),Vv=p(),qe=s("div"),b(ua.$$.fragment),Wv=p(),oo=s("p"),Sv=i("The "),Pd=s("code"),Rv=i("FlaxCLIPVisionPreTrainedModel"),Bv=i(" forward method, overrides the "),bd=s("code"),Uv=i("__call__"),Hv=i(" special method."),Kv=p(),b(kn.$$.fragment),Gv=p(),b(zn.$$.fragment),this.h()},l(t){const u=YI('[data-svelte="svelte-1phssyn"]',document.head);d=r(u,"META",{name:!0,content:!0}),u.forEach(o),P=m(t),g=r(t,"H1",{class:!0});var _a=a(g);f=r(_a,"A",{id:!0,class:!0,href:!0});var Id=a(f);_=r(Id,"SPAN",{});var $d=a(_);I(n.$$.fragment,$d),$d.forEach(o),Id.forEach(o),c=m(_a),w=r(_a,"SPAN",{});var yd=a(w);Qn=l(yd,"CLIP"),yd.forEach(o),_a.forEach(o),so=m(t),X=r(t,"H2",{class:!0});var va=a(X);fe=r(va,"A",{id:!0,class:!0,href:!0});var Cd=a(fe);Be=r(Cd,"SPAN",{});var Td=a(Be);I(M.$$.fragment,Td),Td.forEach(o),Cd.forEach(o),es=m(va),Ne=r(va,"SPAN",{});var Ld=a(Ne);ts=l(Ld,"Overview"),Ld.forEach(o),va.forEach(o),ro=m(t),oe=r(t,"P",{});var Pa=a(oe);os=l(Pa,"The CLIP model was proposed in "),Ae=r(Pa,"A",{href:!0,rel:!0});var wd=a(Ae);nt=l(wd,"Learning Transferable Visual Models From Natural Language Supervision"),wd.forEach(o),ns=l(Pa,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Pa.forEach(o),ao=m(t),he=r(t,"P",{});var xd=a(he);ss=l(xd,"The abstract from the paper is the following:"),xd.forEach(o),io=m(t),ge=r(t,"P",{});var kd=a(ge);st=r(kd,"EM",{});var zd=a(st);rs=l(zd,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),zd.forEach(o),kd.forEach(o),rt=m(t),D=r(t,"H2",{class:!0});var ba=a(D);S=r(ba,"A",{id:!0,class:!0,href:!0});var Md=a(S);at=r(Md,"SPAN",{});var jd=a(at);I(le.$$.fragment,jd),jd.forEach(o),Md.forEach(o),as=m(ba),it=r(ba,"SPAN",{});var Ed=a(it);lt=l(Ed,"Usage"),Ed.forEach(o),ba.forEach(o),lo=m(t),Ue=r(t,"P",{});var Fd=a(Ue);ue=l(Fd,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Fd.forEach(o),co=m(t),ne=r(t,"P",{});var Ia=a(ne);is=l(Ia,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),He=r(Ia,"A",{href:!0});var qd=a(He);dt=l(qd,"CLIPFeatureExtractor"),qd.forEach(o),ls=l(Ia," can be used to resize (or rescale) and normalize images for the model."),Ia.forEach(o),po=m(t),z=r(t,"P",{});var B=a(z);ds=l(B,"The "),_e=r(B,"A",{href:!0});var Dd=a(_e);cs=l(Dd,"CLIPTokenizer"),Dd.forEach(o),mo=l(B," is used to encode the text. The "),J=r(B,"A",{href:!0});var Nd=a(J);ps=l(Nd,"CLIPProcessor"),Nd.forEach(o),Oe=l(B,` wraps
`),Ke=r(B,"A",{href:!0});var Ad=a(Ke);ms=l(Ad,"CLIPFeatureExtractor"),Ad.forEach(o),k=l(B," and "),E=r(B,"A",{href:!0});var Od=a(E);Ta=l(Od,"CLIPTokenizer"),Od.forEach(o),fo=l(B,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),ct=r(B,"A",{href:!0});var Vd=a(ct);La=l(Vd,"CLIPProcessor"),Vd.forEach(o),U=l(B," and "),pt=r(B,"A",{href:!0});var Wd=a(pt);wa=l(Wd,"CLIPModel"),Wd.forEach(o),xa=l(B,"."),B.forEach(o),fs=m(t),I(Ge.$$.fragment,t),Ve=m(t),H=r(t,"P",{});var no=a(H);ka=l(no,"This model was contributed by "),Xe=r(no,"A",{href:!0,rel:!0});var Sd=a(Xe);mt=l(Sd,"valhalla"),Sd.forEach(o),za=l(no,". The original code can be found "),Je=r(no,"A",{href:!0,rel:!0});var Rd=a(Je);hs=l(Rd,"here"),Rd.forEach(o),Ma=l(no,"."),no.forEach(o),ft=m(t),ve=r(t,"H2",{class:!0});var $a=a(ve);ho=r($a,"A",{id:!0,class:!0,href:!0});var Bd=a(ho);Wi=r(Bd,"SPAN",{});var Ud=a(Wi);I(gs.$$.fragment,Ud),Ud.forEach(o),Bd.forEach(o),Wp=m($a),Si=r($a,"SPAN",{});var Hd=a(Si);Sp=l(Hd,"Resources"),Hd.forEach(o),$a.forEach(o),Gd=m(t),ja=r(t,"P",{});var Kd=a(ja);Rp=l(Kd,`A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with CLIP. If you\u2019re
interested in submitting a resource to be included here, please feel free to open a Pull Request and we will review it.
The resource should ideally demonstrate something new instead of duplicating an existing resource.`),Kd.forEach(o),Xd=m(t),I(us.$$.fragment,t),Jd=l(t,`
- A blog post on [How to use CLIP to retrieve images from text](https://huggingface.co/blog/fine-tune-clip-rsicd).
- A blog bost on [How to use CLIP for Japanese text to image generation](https://huggingface.co/blog/japanese-stable-diffusion).
`),I(_s.$$.fragment,t),Yd=l(t,`
- A notebook showing [Video to text matching with CLIP for videos](https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/X-CLIP/Video_text_matching_with_X_CLIP.ipynb).
`),I(vs.$$.fragment,t),Zd=l(t,`
- A notebook showing [Zero shot video classification using CLIP for video](https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/X-CLIP/Zero_shot_classify_a_YouTube_video_with_X_CLIP.ipynb).
`),ht=r(t,"H2",{class:!0});var ya=a(ht);go=r(ya,"A",{id:!0,class:!0,href:!0});var Zv=a(go);Ri=r(Zv,"SPAN",{});var Qv=a(Ri);I(Ps.$$.fragment,Qv),Qv.forEach(o),Zv.forEach(o),Bp=m(ya),Bi=r(ya,"SPAN",{});var eP=a(Bi);Up=l(eP,"CLIPConfig"),eP.forEach(o),ya.forEach(o),Qd=m(t),Y=r(t,"DIV",{class:!0});var Ze=a(Y);I(bs.$$.fragment,Ze),Hp=m(Ze),Ye=r(Ze,"P",{});var Ca=a(Ye);Ea=r(Ca,"A",{href:!0});var tP=a(Ea);Kp=l(tP,"CLIPConfig"),tP.forEach(o),Gp=l(Ca," is the configuration class to store the configuration of a "),Fa=r(Ca,"A",{href:!0});var oP=a(Fa);Xp=l(oP,"CLIPModel"),oP.forEach(o),Jp=l(Ca,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),Is=r(Ca,"A",{href:!0,rel:!0});var nP=a(Is);Yp=l(nP,"openai/clip-vit-base-patch32"),nP.forEach(o),Zp=l(Ca," architecture."),Ca.forEach(o),Qp=m(Ze),gt=r(Ze,"P",{});var bi=a(gt);em=l(bi,"Configuration objects inherit from "),qa=r(bi,"A",{href:!0});var sP=a(qa);tm=l(sP,"PretrainedConfig"),sP.forEach(o),om=l(bi,` and can be used to control the model outputs. Read the
documentation from `),Da=r(bi,"A",{href:!0});var rP=a(Da);nm=l(rP,"PretrainedConfig"),rP.forEach(o),sm=l(bi," for more information."),bi.forEach(o),rm=m(Ze),I(uo.$$.fragment,Ze),am=m(Ze),_o=r(Ze,"DIV",{class:!0});var Nc=a(_o);I($s.$$.fragment,Nc),im=m(Nc),ys=r(Nc,"P",{});var Ac=a(ys);lm=l(Ac,"Instantiate a "),Na=r(Ac,"A",{href:!0});var aP=a(Na);dm=l(aP,"CLIPConfig"),aP.forEach(o),cm=l(Ac,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Ac.forEach(o),Nc.forEach(o),Ze.forEach(o),ec=m(t),ut=r(t,"H2",{class:!0});var Oc=a(ut);vo=r(Oc,"A",{id:!0,class:!0,href:!0});var iP=a(vo);Ui=r(iP,"SPAN",{});var lP=a(Ui);I(Cs.$$.fragment,lP),lP.forEach(o),iP.forEach(o),pm=m(Oc),Hi=r(Oc,"SPAN",{});var dP=a(Hi);mm=l(dP,"CLIPTextConfig"),dP.forEach(o),Oc.forEach(o),tc=m(t),de=r(t,"DIV",{class:!0});var Mn=a(de);I(Ts.$$.fragment,Mn),fm=m(Mn),_t=r(Mn,"P",{});var Ii=a(_t);hm=l(Ii,"This is the configuration class to store the configuration of a "),Aa=r(Ii,"A",{href:!0});var cP=a(Aa);gm=l(cP,"CLIPModel"),cP.forEach(o),um=l(Ii,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Ls=r(Ii,"A",{href:!0,rel:!0});var pP=a(Ls);_m=l(pP,"openai/clip-vit-base-patch32"),pP.forEach(o),vm=l(Ii," architecture."),Ii.forEach(o),Pm=m(Mn),vt=r(Mn,"P",{});var $i=a(vt);bm=l($i,"Configuration objects inherit from "),Oa=r($i,"A",{href:!0});var mP=a(Oa);Im=l(mP,"PretrainedConfig"),mP.forEach(o),$m=l($i,` and can be used to control the model outputs. Read the
documentation from `),Va=r($i,"A",{href:!0});var fP=a(Va);ym=l(fP,"PretrainedConfig"),fP.forEach(o),Cm=l($i," for more information."),$i.forEach(o),Tm=m(Mn),I(Po.$$.fragment,Mn),Mn.forEach(o),oc=m(t),Pt=r(t,"H2",{class:!0});var Vc=a(Pt);bo=r(Vc,"A",{id:!0,class:!0,href:!0});var hP=a(bo);Ki=r(hP,"SPAN",{});var gP=a(Ki);I(ws.$$.fragment,gP),gP.forEach(o),hP.forEach(o),Lm=m(Vc),Gi=r(Vc,"SPAN",{});var uP=a(Gi);wm=l(uP,"CLIPVisionConfig"),uP.forEach(o),Vc.forEach(o),nc=m(t),ce=r(t,"DIV",{class:!0});var jn=a(ce);I(xs.$$.fragment,jn),xm=m(jn),bt=r(jn,"P",{});var yi=a(bt);km=l(yi,"This is the configuration class to store the configuration of a "),Wa=r(yi,"A",{href:!0});var _P=a(Wa);zm=l(_P,"CLIPModel"),_P.forEach(o),Mm=l(yi,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),ks=r(yi,"A",{href:!0,rel:!0});var vP=a(ks);jm=l(vP,"openai/clip-vit-base-patch32"),vP.forEach(o),Em=l(yi," architecture."),yi.forEach(o),Fm=m(jn),It=r(jn,"P",{});var Ci=a(It);qm=l(Ci,"Configuration objects inherit from "),Sa=r(Ci,"A",{href:!0});var PP=a(Sa);Dm=l(PP,"PretrainedConfig"),PP.forEach(o),Nm=l(Ci,` and can be used to control the model outputs. Read the
documentation from `),Ra=r(Ci,"A",{href:!0});var bP=a(Ra);Am=l(bP,"PretrainedConfig"),bP.forEach(o),Om=l(Ci," for more information."),Ci.forEach(o),Vm=m(jn),I(Io.$$.fragment,jn),jn.forEach(o),sc=m(t),$t=r(t,"H2",{class:!0});var Wc=a($t);$o=r(Wc,"A",{id:!0,class:!0,href:!0});var IP=a($o);Xi=r(IP,"SPAN",{});var $P=a(Xi);I(zs.$$.fragment,$P),$P.forEach(o),IP.forEach(o),Wm=m(Wc),Ji=r(Wc,"SPAN",{});var yP=a(Ji);Sm=l(yP,"CLIPTokenizer"),yP.forEach(o),Wc.forEach(o),rc=m(t),O=r(t,"DIV",{class:!0});var re=a(O);I(Ms.$$.fragment,re),Rm=m(re),Yi=r(re,"P",{});var CP=a(Yi);Bm=l(CP,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),CP.forEach(o),Um=m(re),js=r(re,"P",{});var Sc=a(js);Hm=l(Sc,"This tokenizer inherits from "),Ba=r(Sc,"A",{href:!0});var TP=a(Ba);Km=l(TP,"PreTrainedTokenizer"),TP.forEach(o),Gm=l(Sc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sc.forEach(o),Xm=m(re),Pe=r(re,"DIV",{class:!0});var En=a(Pe);I(Es.$$.fragment,En),Jm=m(En),Zi=r(En,"P",{});var LP=a(Zi);Ym=l(LP,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),LP.forEach(o),Zm=m(En),Qi=r(En,"UL",{});var wP=a(Qi);Ua=r(wP,"LI",{});var Xv=a(Ua);Qm=l(Xv,"single sequence: "),el=r(Xv,"CODE",{});var xP=a(el);ef=l(xP,"<|startoftext|> X <|endoftext|>"),xP.forEach(o),Xv.forEach(o),wP.forEach(o),tf=m(En),tl=r(En,"P",{});var kP=a(tl);of=l(kP,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),kP.forEach(o),En.forEach(o),nf=m(re),yo=r(re,"DIV",{class:!0});var Rc=a(yo);I(Fs.$$.fragment,Rc),sf=m(Rc),qs=r(Rc,"P",{});var Bc=a(qs);rf=l(Bc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ol=r(Bc,"CODE",{});var zP=a(ol);af=l(zP,"prepare_for_model"),zP.forEach(o),lf=l(Bc," method."),Bc.forEach(o),Rc.forEach(o),df=m(re),Co=r(re,"DIV",{class:!0});var Uc=a(Co);I(Ds.$$.fragment,Uc),cf=m(Uc),nl=r(Uc,"P",{});var MP=a(nl);pf=l(MP,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),MP.forEach(o),Uc.forEach(o),mf=m(re),Ha=r(re,"DIV",{class:!0});var jP=a(Ha);I(Ns.$$.fragment,jP),jP.forEach(o),re.forEach(o),ac=m(t),yt=r(t,"H2",{class:!0});var Hc=a(yt);To=r(Hc,"A",{id:!0,class:!0,href:!0});var EP=a(To);sl=r(EP,"SPAN",{});var FP=a(sl);I(As.$$.fragment,FP),FP.forEach(o),EP.forEach(o),ff=m(Hc),rl=r(Hc,"SPAN",{});var qP=a(rl);hf=l(qP,"CLIPTokenizerFast"),qP.forEach(o),Hc.forEach(o),ic=m(t),Z=r(t,"DIV",{class:!0});var Qe=a(Z);I(Os.$$.fragment,Qe),gf=m(Qe),Vs=r(Qe,"P",{});var Kc=a(Vs);uf=l(Kc,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),al=r(Kc,"EM",{});var DP=a(al);_f=l(DP,"tokenizers"),DP.forEach(o),vf=l(Kc,` library). Based on byte-level
Byte-Pair-Encoding.`),Kc.forEach(o),Pf=m(Qe),Ws=r(Qe,"P",{});var Gc=a(Ws);bf=l(Gc,"This tokenizer inherits from "),Ka=r(Gc,"A",{href:!0});var NP=a(Ka);If=l(NP,"PreTrainedTokenizerFast"),NP.forEach(o),$f=l(Gc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Gc.forEach(o),yf=m(Qe),be=r(Qe,"DIV",{class:!0});var Fn=a(be);I(Ss.$$.fragment,Fn),Cf=m(Fn),il=r(Fn,"P",{});var AP=a(il);Tf=l(AP,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),AP.forEach(o),Lf=m(Fn),ll=r(Fn,"UL",{});var OP=a(ll);Ga=r(OP,"LI",{});var Jv=a(Ga);wf=l(Jv,"single sequence: "),dl=r(Jv,"CODE",{});var VP=a(dl);xf=l(VP,"<|startoftext|> X <|endoftext|>"),VP.forEach(o),Jv.forEach(o),OP.forEach(o),kf=m(Fn),cl=r(Fn,"P",{});var WP=a(cl);zf=l(WP,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),WP.forEach(o),Fn.forEach(o),Mf=m(Qe),Lo=r(Qe,"DIV",{class:!0});var Xc=a(Lo);I(Rs.$$.fragment,Xc),jf=m(Xc),pl=r(Xc,"P",{});var SP=a(pl);Ef=l(SP,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),SP.forEach(o),Xc.forEach(o),Qe.forEach(o),lc=m(t),Ct=r(t,"H2",{class:!0});var Jc=a(Ct);wo=r(Jc,"A",{id:!0,class:!0,href:!0});var RP=a(wo);ml=r(RP,"SPAN",{});var BP=a(ml);I(Bs.$$.fragment,BP),BP.forEach(o),RP.forEach(o),Ff=m(Jc),fl=r(Jc,"SPAN",{});var UP=a(fl);qf=l(UP,"CLIPImageProcessor"),UP.forEach(o),Jc.forEach(o),dc=m(t),We=r(t,"DIV",{class:!0});var Ti=a(We);I(Us.$$.fragment,Ti),Df=m(Ti),hl=r(Ti,"P",{});var HP=a(hl);Nf=l(HP,"Constructs a CLIP image processor."),HP.forEach(o),Af=m(Ti),xo=r(Ti,"DIV",{class:!0});var Yc=a(xo);I(Hs.$$.fragment,Yc),Of=m(Yc),gl=r(Yc,"P",{});var KP=a(gl);Vf=l(KP,"Preprocess an image or batch of images."),KP.forEach(o),Yc.forEach(o),Ti.forEach(o),cc=m(t),Tt=r(t,"H2",{class:!0});var Zc=a(Tt);ko=r(Zc,"A",{id:!0,class:!0,href:!0});var GP=a(ko);ul=r(GP,"SPAN",{});var XP=a(ul);I(Ks.$$.fragment,XP),XP.forEach(o),GP.forEach(o),Wf=m(Zc),_l=r(Zc,"SPAN",{});var JP=a(_l);Sf=l(JP,"CLIPFeatureExtractor"),JP.forEach(o),Zc.forEach(o),pc=m(t),V=r(t,"DIV",{class:!0});var ae=a(V);I(Gs.$$.fragment,ae),Rf=m(ae),vl=r(ae,"P",{});var YP=a(vl);Bf=l(YP,"Constructs a CLIP image processor."),YP.forEach(o),Uf=m(ae),zo=r(ae,"DIV",{class:!0});var Qc=a(zo);I(Xs.$$.fragment,Qc),Hf=m(Qc),Js=r(Qc,"P",{});var ep=a(Js);Kf=l(ep,`Center crop an image. If the image is too small to be cropped to the size given, it will be padded (so the
returned result will always be of size `),Pl=r(ep,"CODE",{});var ZP=a(Pl);Gf=l(ZP,"size"),ZP.forEach(o),Xf=l(ep,")."),ep.forEach(o),Qc.forEach(o),Jf=m(ae),Mo=r(ae,"DIV",{class:!0});var tp=a(Mo);I(Ys.$$.fragment,tp),Yf=m(tp),bl=r(tp,"P",{});var QP=a(bl);Zf=l(QP,"Normalize an image. image = (image - image_mean) / image_std."),QP.forEach(o),tp.forEach(o),Qf=m(ae),jo=r(ae,"DIV",{class:!0});var op=a(jo);I(Zs.$$.fragment,op),eh=m(op),Il=r(op,"P",{});var eb=a(Il);th=l(eb,"Preprocess an image or batch of images."),eb.forEach(o),op.forEach(o),oh=m(ae),Eo=r(ae,"DIV",{class:!0});var np=a(Eo);I(Qs.$$.fragment,np),nh=m(np),$l=r(np,"P",{});var tb=a($l);sh=l(tb,"Rescale an image by a scale factor. image = image * scale."),tb.forEach(o),np.forEach(o),rh=m(ae),Fo=r(ae,"DIV",{class:!0});var sp=a(Fo);I(er.$$.fragment,sp),ah=m(sp),yl=r(sp,"P",{});var ob=a(yl);ih=l(ob,`Resize an image. The shortest edge of the image is resized to size[\u201Cshortest_edge\u201D], with the longest edge
resized to keep the input aspect ratio.`),ob.forEach(o),sp.forEach(o),ae.forEach(o),mc=m(t),Lt=r(t,"H2",{class:!0});var rp=a(Lt);qo=r(rp,"A",{id:!0,class:!0,href:!0});var nb=a(qo);Cl=r(nb,"SPAN",{});var sb=a(Cl);I(tr.$$.fragment,sb),sb.forEach(o),nb.forEach(o),lh=m(rp),Tl=r(rp,"SPAN",{});var rb=a(Tl);dh=l(rb,"CLIPProcessor"),rb.forEach(o),rp.forEach(o),fc=m(t),Q=r(t,"DIV",{class:!0});var et=a(Q);I(or.$$.fragment,et),ch=m(et),Ll=r(et,"P",{});var ab=a(Ll);ph=l(ab,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),ab.forEach(o),mh=m(et),se=r(et,"P",{});var Re=a(se);Xa=r(Re,"A",{href:!0});var ib=a(Xa);fh=l(ib,"CLIPProcessor"),ib.forEach(o),hh=l(Re," offers all the functionalities of "),Ja=r(Re,"A",{href:!0});var lb=a(Ja);gh=l(lb,"CLIPFeatureExtractor"),lb.forEach(o),uh=l(Re," and "),Ya=r(Re,"A",{href:!0});var db=a(Ya);_h=l(db,"CLIPTokenizerFast"),db.forEach(o),vh=l(Re,`. See the
`),wl=r(Re,"CODE",{});var cb=a(wl);Ph=l(cb,"__call__()"),cb.forEach(o),bh=l(Re," and "),Za=r(Re,"A",{href:!0});var pb=a(Za);Ih=l(pb,"decode()"),pb.forEach(o),$h=l(Re," for more information."),Re.forEach(o),yh=m(et),Do=r(et,"DIV",{class:!0});var ap=a(Do);I(nr.$$.fragment,ap),Ch=m(ap),sr=r(ap,"P",{});var ip=a(sr);Th=l(ip,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Qa=r(ip,"A",{href:!0});var mb=a(Qa);Lh=l(mb,"batch_decode()"),mb.forEach(o),wh=l(ip,`. Please
refer to the docstring of this method for more information.`),ip.forEach(o),ap.forEach(o),xh=m(et),No=r(et,"DIV",{class:!0});var lp=a(No);I(rr.$$.fragment,lp),kh=m(lp),ar=r(lp,"P",{});var dp=a(ar);zh=l(dp,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),ei=r(dp,"A",{href:!0});var fb=a(ei);Mh=l(fb,"decode()"),fb.forEach(o),jh=l(dp,`. Please refer to
the docstring of this method for more information.`),dp.forEach(o),lp.forEach(o),et.forEach(o),hc=m(t),wt=r(t,"H2",{class:!0});var cp=a(wt);Ao=r(cp,"A",{id:!0,class:!0,href:!0});var hb=a(Ao);xl=r(hb,"SPAN",{});var gb=a(xl);I(ir.$$.fragment,gb),gb.forEach(o),hb.forEach(o),Eh=m(cp),kl=r(cp,"SPAN",{});var ub=a(kl);Fh=l(ub,"CLIPModel"),ub.forEach(o),cp.forEach(o),gc=m(t),R=r(t,"DIV",{class:!0});var De=a(R);I(lr.$$.fragment,De),qh=m(De),dr=r(De,"P",{});var pp=a(dr);Dh=l(pp,"This model inherits from "),ti=r(pp,"A",{href:!0});var _b=a(ti);Nh=l(_b,"PreTrainedModel"),_b.forEach(o),Ah=l(pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp.forEach(o),Oh=m(De),cr=r(De,"P",{});var mp=a(cr);Vh=l(mp,"This model is also a PyTorch "),pr=r(mp,"A",{href:!0,rel:!0});var vb=a(pr);Wh=l(vb,"torch.nn.Module"),vb.forEach(o),Sh=l(mp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp.forEach(o),Rh=m(De),Ie=r(De,"DIV",{class:!0});var qn=a(Ie);I(mr.$$.fragment,qn),Bh=m(qn),xt=r(qn,"P",{});var Li=a(xt);Uh=l(Li,"The "),oi=r(Li,"A",{href:!0});var Pb=a(oi);Hh=l(Pb,"CLIPModel"),Pb.forEach(o),Kh=l(Li," forward method, overrides the "),zl=r(Li,"CODE",{});var bb=a(zl);Gh=l(bb,"__call__"),bb.forEach(o),Xh=l(Li," special method."),Li.forEach(o),Jh=m(qn),I(Oo.$$.fragment,qn),Yh=m(qn),I(Vo.$$.fragment,qn),qn.forEach(o),Zh=m(De),$e=r(De,"DIV",{class:!0});var Dn=a($e);I(fr.$$.fragment,Dn),Qh=m(Dn),kt=r(Dn,"P",{});var wi=a(kt);eg=l(wi,"The "),ni=r(wi,"A",{href:!0});var Ib=a(ni);tg=l(Ib,"CLIPModel"),Ib.forEach(o),og=l(wi," forward method, overrides the "),Ml=r(wi,"CODE",{});var $b=a(Ml);ng=l($b,"__call__"),$b.forEach(o),sg=l(wi," special method."),wi.forEach(o),rg=m(Dn),I(Wo.$$.fragment,Dn),ag=m(Dn),I(So.$$.fragment,Dn),Dn.forEach(o),ig=m(De),ye=r(De,"DIV",{class:!0});var Nn=a(ye);I(hr.$$.fragment,Nn),lg=m(Nn),zt=r(Nn,"P",{});var xi=a(zt);dg=l(xi,"The "),si=r(xi,"A",{href:!0});var yb=a(si);cg=l(yb,"CLIPModel"),yb.forEach(o),pg=l(xi," forward method, overrides the "),jl=r(xi,"CODE",{});var Cb=a(jl);mg=l(Cb,"__call__"),Cb.forEach(o),fg=l(xi," special method."),xi.forEach(o),hg=m(Nn),I(Ro.$$.fragment,Nn),gg=m(Nn),I(Bo.$$.fragment,Nn),Nn.forEach(o),De.forEach(o),uc=m(t),Mt=r(t,"H2",{class:!0});var fp=a(Mt);Uo=r(fp,"A",{id:!0,class:!0,href:!0});var Tb=a(Uo);El=r(Tb,"SPAN",{});var Lb=a(El);I(gr.$$.fragment,Lb),Lb.forEach(o),Tb.forEach(o),ug=m(fp),Fl=r(fp,"SPAN",{});var wb=a(Fl);_g=l(wb,"CLIPTextModel"),wb.forEach(o),fp.forEach(o),_c=m(t),pe=r(t,"DIV",{class:!0});var An=a(pe);I(ur.$$.fragment,An),vg=m(An),_r=r(An,"P",{});var hp=a(_r);Pg=l(hp,`The text model from CLIP without any head or projection on top.
This model inherits from `),ri=r(hp,"A",{href:!0});var xb=a(ri);bg=l(xb,"PreTrainedModel"),xb.forEach(o),Ig=l(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(o),$g=m(An),vr=r(An,"P",{});var gp=a(vr);yg=l(gp,"This model is also a PyTorch "),Pr=r(gp,"A",{href:!0,rel:!0});var kb=a(Pr);Cg=l(kb,"torch.nn.Module"),kb.forEach(o),Tg=l(gp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gp.forEach(o),Lg=m(An),Ce=r(An,"DIV",{class:!0});var On=a(Ce);I(br.$$.fragment,On),wg=m(On),jt=r(On,"P",{});var ki=a(jt);xg=l(ki,"The "),ai=r(ki,"A",{href:!0});var zb=a(ai);kg=l(zb,"CLIPTextModel"),zb.forEach(o),zg=l(ki," forward method, overrides the "),ql=r(ki,"CODE",{});var Mb=a(ql);Mg=l(Mb,"__call__"),Mb.forEach(o),jg=l(ki," special method."),ki.forEach(o),Eg=m(On),I(Ho.$$.fragment,On),Fg=m(On),I(Ko.$$.fragment,On),On.forEach(o),An.forEach(o),vc=m(t),Et=r(t,"H2",{class:!0});var up=a(Et);Go=r(up,"A",{id:!0,class:!0,href:!0});var jb=a(Go);Dl=r(jb,"SPAN",{});var Eb=a(Dl);I(Ir.$$.fragment,Eb),Eb.forEach(o),jb.forEach(o),qg=m(up),Nl=r(up,"SPAN",{});var Fb=a(Nl);Dg=l(Fb,"CLIPTextModelWithProjection"),Fb.forEach(o),up.forEach(o),Pc=m(t),ee=r(t,"DIV",{class:!0});var tt=a(ee);I($r.$$.fragment,tt),Ng=m(tt),Al=r(tt,"P",{});var qb=a(Al);Ag=l(qb,"CLIP Text Model with a projection layer on top (a linear layer on top of the pooled output)."),qb.forEach(o),Og=m(tt),yr=r(tt,"P",{});var _p=a(yr);Vg=l(_p,"This model inherits from "),ii=r(_p,"A",{href:!0});var Db=a(ii);Wg=l(Db,"PreTrainedModel"),Db.forEach(o),Sg=l(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(o),Rg=m(tt),Cr=r(tt,"P",{});var vp=a(Cr);Bg=l(vp,"This model is also a PyTorch "),Tr=r(vp,"A",{href:!0,rel:!0});var Nb=a(Tr);Ug=l(Nb,"torch.nn.Module"),Nb.forEach(o),Hg=l(vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp.forEach(o),Kg=m(tt),Te=r(tt,"DIV",{class:!0});var Vn=a(Te);I(Lr.$$.fragment,Vn),Gg=m(Vn),Ft=r(Vn,"P",{});var zi=a(Ft);Xg=l(zi,"The "),li=r(zi,"A",{href:!0});var Ab=a(li);Jg=l(Ab,"CLIPTextModelWithProjection"),Ab.forEach(o),Yg=l(zi," forward method, overrides the "),Ol=r(zi,"CODE",{});var Ob=a(Ol);Zg=l(Ob,"__call__"),Ob.forEach(o),Qg=l(zi," special method."),zi.forEach(o),eu=m(Vn),I(Xo.$$.fragment,Vn),tu=m(Vn),I(Jo.$$.fragment,Vn),Vn.forEach(o),tt.forEach(o),bc=m(t),qt=r(t,"H2",{class:!0});var Pp=a(qt);Yo=r(Pp,"A",{id:!0,class:!0,href:!0});var Vb=a(Yo);Vl=r(Vb,"SPAN",{});var Wb=a(Vl);I(wr.$$.fragment,Wb),Wb.forEach(o),Vb.forEach(o),ou=m(Pp),Wl=r(Pp,"SPAN",{});var Sb=a(Wl);nu=l(Sb,"CLIPVisionModelWithProjection"),Sb.forEach(o),Pp.forEach(o),Ic=m(t),te=r(t,"DIV",{class:!0});var ot=a(te);I(xr.$$.fragment,ot),su=m(ot),Sl=r(ot,"P",{});var Rb=a(Sl);ru=l(Rb,"CLIP Vision Model with a projection layer on top (a linear layer on top of the pooled output)."),Rb.forEach(o),au=m(ot),kr=r(ot,"P",{});var bp=a(kr);iu=l(bp,"This model inherits from "),di=r(bp,"A",{href:!0});var Bb=a(di);lu=l(Bb,"PreTrainedModel"),Bb.forEach(o),du=l(bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp.forEach(o),cu=m(ot),zr=r(ot,"P",{});var Ip=a(zr);pu=l(Ip,"This model is also a PyTorch "),Mr=r(Ip,"A",{href:!0,rel:!0});var Ub=a(Mr);mu=l(Ub,"torch.nn.Module"),Ub.forEach(o),fu=l(Ip,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ip.forEach(o),hu=m(ot),Le=r(ot,"DIV",{class:!0});var Wn=a(Le);I(jr.$$.fragment,Wn),gu=m(Wn),Dt=r(Wn,"P",{});var Mi=a(Dt);uu=l(Mi,"The "),ci=r(Mi,"A",{href:!0});var Hb=a(ci);_u=l(Hb,"CLIPVisionModelWithProjection"),Hb.forEach(o),vu=l(Mi," forward method, overrides the "),Rl=r(Mi,"CODE",{});var Kb=a(Rl);Pu=l(Kb,"__call__"),Kb.forEach(o),bu=l(Mi," special method."),Mi.forEach(o),Iu=m(Wn),I(Zo.$$.fragment,Wn),$u=m(Wn),I(Qo.$$.fragment,Wn),Wn.forEach(o),ot.forEach(o),$c=m(t),Nt=r(t,"H2",{class:!0});var $p=a(Nt);en=r($p,"A",{id:!0,class:!0,href:!0});var Gb=a(en);Bl=r(Gb,"SPAN",{});var Xb=a(Bl);I(Er.$$.fragment,Xb),Xb.forEach(o),Gb.forEach(o),yu=m($p),Ul=r($p,"SPAN",{});var Jb=a(Ul);Cu=l(Jb,"CLIPVisionModel"),Jb.forEach(o),$p.forEach(o),yc=m(t),me=r(t,"DIV",{class:!0});var Sn=a(me);I(Fr.$$.fragment,Sn),Tu=m(Sn),qr=r(Sn,"P",{});var yp=a(qr);Lu=l(yp,`The vision model from CLIP without any head or projection on top.
This model inherits from `),pi=r(yp,"A",{href:!0});var Yb=a(pi);wu=l(Yb,"PreTrainedModel"),Yb.forEach(o),xu=l(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(o),ku=m(Sn),Dr=r(Sn,"P",{});var Cp=a(Dr);zu=l(Cp,"This model is also a PyTorch "),Nr=r(Cp,"A",{href:!0,rel:!0});var Zb=a(Nr);Mu=l(Zb,"torch.nn.Module"),Zb.forEach(o),ju=l(Cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp.forEach(o),Eu=m(Sn),we=r(Sn,"DIV",{class:!0});var Rn=a(we);I(Ar.$$.fragment,Rn),Fu=m(Rn),At=r(Rn,"P",{});var ji=a(At);qu=l(ji,"The "),mi=r(ji,"A",{href:!0});var Qb=a(mi);Du=l(Qb,"CLIPVisionModel"),Qb.forEach(o),Nu=l(ji," forward method, overrides the "),Hl=r(ji,"CODE",{});var eI=a(Hl);Au=l(eI,"__call__"),eI.forEach(o),Ou=l(ji," special method."),ji.forEach(o),Vu=m(Rn),I(tn.$$.fragment,Rn),Wu=m(Rn),I(on.$$.fragment,Rn),Rn.forEach(o),Sn.forEach(o),Cc=m(t),Ot=r(t,"H2",{class:!0});var Tp=a(Ot);nn=r(Tp,"A",{id:!0,class:!0,href:!0});var tI=a(nn);Kl=r(tI,"SPAN",{});var oI=a(Kl);I(Or.$$.fragment,oI),oI.forEach(o),tI.forEach(o),Su=m(Tp),Gl=r(Tp,"SPAN",{});var nI=a(Gl);Ru=l(nI,"TFCLIPModel"),nI.forEach(o),Tp.forEach(o),Tc=m(t),W=r(t,"DIV",{class:!0});var ie=a(W);I(Vr.$$.fragment,ie),Bu=m(ie),Wr=r(ie,"P",{});var Lp=a(Wr);Uu=l(Lp,"This model inherits from "),fi=r(Lp,"A",{href:!0});var sI=a(fi);Hu=l(sI,"TFPreTrainedModel"),sI.forEach(o),Ku=l(Lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lp.forEach(o),Gu=m(ie),Sr=r(ie,"P",{});var wp=a(Sr);Xu=l(wp,"This model is also a "),Rr=r(wp,"A",{href:!0,rel:!0});var rI=a(Rr);Ju=l(rI,"tf.keras.Model"),rI.forEach(o),Yu=l(wp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wp.forEach(o),Zu=m(ie),I(sn.$$.fragment,ie),Qu=m(ie),xe=r(ie,"DIV",{class:!0});var Bn=a(xe);I(Br.$$.fragment,Bn),e_=m(Bn),Vt=r(Bn,"P",{});var Ei=a(Vt);t_=l(Ei,"The "),hi=r(Ei,"A",{href:!0});var aI=a(hi);o_=l(aI,"TFCLIPModel"),aI.forEach(o),n_=l(Ei," forward method, overrides the "),Xl=r(Ei,"CODE",{});var iI=a(Xl);s_=l(iI,"__call__"),iI.forEach(o),r_=l(Ei," special method."),Ei.forEach(o),a_=m(Bn),I(rn.$$.fragment,Bn),i_=m(Bn),I(an.$$.fragment,Bn),Bn.forEach(o),l_=m(ie),ke=r(ie,"DIV",{class:!0});var Un=a(ke);I(Ur.$$.fragment,Un),d_=m(Un),Wt=r(Un,"P",{});var Fi=a(Wt);c_=l(Fi,"The "),gi=r(Fi,"A",{href:!0});var lI=a(gi);p_=l(lI,"TFCLIPModel"),lI.forEach(o),m_=l(Fi," forward method, overrides the "),Jl=r(Fi,"CODE",{});var dI=a(Jl);f_=l(dI,"__call__"),dI.forEach(o),h_=l(Fi," special method."),Fi.forEach(o),g_=m(Un),I(ln.$$.fragment,Un),u_=m(Un),I(dn.$$.fragment,Un),Un.forEach(o),__=m(ie),ze=r(ie,"DIV",{class:!0});var Hn=a(ze);I(Hr.$$.fragment,Hn),v_=m(Hn),St=r(Hn,"P",{});var qi=a(St);P_=l(qi,"The "),ui=r(qi,"A",{href:!0});var cI=a(ui);b_=l(cI,"TFCLIPModel"),cI.forEach(o),I_=l(qi," forward method, overrides the "),Yl=r(qi,"CODE",{});var pI=a(Yl);$_=l(pI,"__call__"),pI.forEach(o),y_=l(qi," special method."),qi.forEach(o),C_=m(Hn),I(cn.$$.fragment,Hn),T_=m(Hn),I(pn.$$.fragment,Hn),Hn.forEach(o),ie.forEach(o),Lc=m(t),Rt=r(t,"H2",{class:!0});var xp=a(Rt);mn=r(xp,"A",{id:!0,class:!0,href:!0});var mI=a(mn);Zl=r(mI,"SPAN",{});var fI=a(Zl);I(Kr.$$.fragment,fI),fI.forEach(o),mI.forEach(o),L_=m(xp),Ql=r(xp,"SPAN",{});var hI=a(Ql);w_=l(hI,"TFCLIPTextModel"),hI.forEach(o),xp.forEach(o),wc=m(t),Bt=r(t,"DIV",{class:!0});var kp=a(Bt);I(Gr.$$.fragment,kp),x_=m(kp),Me=r(kp,"DIV",{class:!0});var Kn=a(Me);I(Xr.$$.fragment,Kn),k_=m(Kn),Ut=r(Kn,"P",{});var Di=a(Ut);z_=l(Di,"The "),_i=r(Di,"A",{href:!0});var gI=a(_i);M_=l(gI,"TFCLIPTextModel"),gI.forEach(o),j_=l(Di," forward method, overrides the "),ed=r(Di,"CODE",{});var uI=a(ed);E_=l(uI,"__call__"),uI.forEach(o),F_=l(Di," special method."),Di.forEach(o),q_=m(Kn),I(fn.$$.fragment,Kn),D_=m(Kn),I(hn.$$.fragment,Kn),Kn.forEach(o),kp.forEach(o),xc=m(t),Ht=r(t,"H2",{class:!0});var zp=a(Ht);gn=r(zp,"A",{id:!0,class:!0,href:!0});var _I=a(gn);td=r(_I,"SPAN",{});var vI=a(td);I(Jr.$$.fragment,vI),vI.forEach(o),_I.forEach(o),N_=m(zp),od=r(zp,"SPAN",{});var PI=a(od);A_=l(PI,"TFCLIPVisionModel"),PI.forEach(o),zp.forEach(o),kc=m(t),Kt=r(t,"DIV",{class:!0});var Mp=a(Kt);I(Yr.$$.fragment,Mp),O_=m(Mp),je=r(Mp,"DIV",{class:!0});var Gn=a(je);I(Zr.$$.fragment,Gn),V_=m(Gn),Gt=r(Gn,"P",{});var Ni=a(Gt);W_=l(Ni,"The "),vi=r(Ni,"A",{href:!0});var bI=a(vi);S_=l(bI,"TFCLIPVisionModel"),bI.forEach(o),R_=l(Ni," forward method, overrides the "),nd=r(Ni,"CODE",{});var II=a(nd);B_=l(II,"__call__"),II.forEach(o),U_=l(Ni," special method."),Ni.forEach(o),H_=m(Gn),I(un.$$.fragment,Gn),K_=m(Gn),I(_n.$$.fragment,Gn),Gn.forEach(o),Mp.forEach(o),zc=m(t),Xt=r(t,"H2",{class:!0});var jp=a(Xt);vn=r(jp,"A",{id:!0,class:!0,href:!0});var $I=a(vn);sd=r($I,"SPAN",{});var yI=a(sd);I(Qr.$$.fragment,yI),yI.forEach(o),$I.forEach(o),G_=m(jp),rd=r(jp,"SPAN",{});var CI=a(rd);X_=l(CI,"FlaxCLIPModel"),CI.forEach(o),jp.forEach(o),Mc=m(t),F=r(t,"DIV",{class:!0});var K=a(F);I(ea.$$.fragment,K),J_=m(K),ta=r(K,"P",{});var Ep=a(ta);Y_=l(Ep,"This model inherits from "),Pi=r(Ep,"A",{href:!0});var TI=a(Pi);Z_=l(TI,"FlaxPreTrainedModel"),TI.forEach(o),Q_=l(Ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ep.forEach(o),ev=m(K),oa=r(K,"P",{});var Fp=a(oa);tv=l(Fp,"This model is also a Flax Linen "),na=r(Fp,"A",{href:!0,rel:!0});var LI=a(na);ov=l(LI,"flax.linen.Module"),LI.forEach(o),nv=l(Fp,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fp.forEach(o),sv=m(K),ad=r(K,"P",{});var wI=a(ad);rv=l(wI,"Finally, this model supports inherent JAX features such as:"),wI.forEach(o),av=m(K),Se=r(K,"UL",{});var Xn=a(Se);id=r(Xn,"LI",{});var xI=a(id);sa=r(xI,"A",{href:!0,rel:!0});var kI=a(sa);iv=l(kI,"Just-In-Time (JIT) compilation"),kI.forEach(o),xI.forEach(o),lv=m(Xn),ld=r(Xn,"LI",{});var zI=a(ld);ra=r(zI,"A",{href:!0,rel:!0});var MI=a(ra);dv=l(MI,"Automatic Differentiation"),MI.forEach(o),zI.forEach(o),cv=m(Xn),dd=r(Xn,"LI",{});var jI=a(dd);aa=r(jI,"A",{href:!0,rel:!0});var EI=a(aa);pv=l(EI,"Vectorization"),EI.forEach(o),jI.forEach(o),mv=m(Xn),cd=r(Xn,"LI",{});var FI=a(cd);ia=r(FI,"A",{href:!0,rel:!0});var qI=a(ia);fv=l(qI,"Parallelization"),qI.forEach(o),FI.forEach(o),Xn.forEach(o),hv=m(K),Ee=r(K,"DIV",{class:!0});var Jn=a(Ee);I(la.$$.fragment,Jn),gv=m(Jn),Jt=r(Jn,"P",{});var Ai=a(Jt);uv=l(Ai,"The "),pd=r(Ai,"CODE",{});var DI=a(pd);_v=l(DI,"FlaxCLIPPreTrainedModel"),DI.forEach(o),vv=l(Ai," forward method, overrides the "),md=r(Ai,"CODE",{});var NI=a(md);Pv=l(NI,"__call__"),NI.forEach(o),bv=l(Ai," special method."),Ai.forEach(o),Iv=m(Jn),I(Pn.$$.fragment,Jn),$v=m(Jn),I(bn.$$.fragment,Jn),Jn.forEach(o),yv=m(K),In=r(K,"DIV",{class:!0});var qp=a(In);I(da.$$.fragment,qp),Cv=m(qp),I($n.$$.fragment,qp),qp.forEach(o),Tv=m(K),yn=r(K,"DIV",{class:!0});var Dp=a(yn);I(ca.$$.fragment,Dp),Lv=m(Dp),I(Cn.$$.fragment,Dp),Dp.forEach(o),K.forEach(o),jc=m(t),Yt=r(t,"H2",{class:!0});var Np=a(Yt);Tn=r(Np,"A",{id:!0,class:!0,href:!0});var AI=a(Tn);fd=r(AI,"SPAN",{});var OI=a(fd);I(pa.$$.fragment,OI),OI.forEach(o),AI.forEach(o),wv=m(Np),hd=r(Np,"SPAN",{});var VI=a(hd);xv=l(VI,"FlaxCLIPTextModel"),VI.forEach(o),Np.forEach(o),Ec=m(t),Zt=r(t,"DIV",{class:!0});var Ap=a(Zt);I(ma.$$.fragment,Ap),kv=m(Ap),Fe=r(Ap,"DIV",{class:!0});var Yn=a(Fe);I(fa.$$.fragment,Yn),zv=m(Yn),Qt=r(Yn,"P",{});var Oi=a(Qt);Mv=l(Oi,"The "),gd=r(Oi,"CODE",{});var WI=a(gd);jv=l(WI,"FlaxCLIPTextPreTrainedModel"),WI.forEach(o),Ev=l(Oi," forward method, overrides the "),ud=r(Oi,"CODE",{});var SI=a(ud);Fv=l(SI,"__call__"),SI.forEach(o),qv=l(Oi," special method."),Oi.forEach(o),Dv=m(Yn),I(Ln.$$.fragment,Yn),Nv=m(Yn),I(wn.$$.fragment,Yn),Yn.forEach(o),Ap.forEach(o),Fc=m(t),eo=r(t,"H2",{class:!0});var Op=a(eo);xn=r(Op,"A",{id:!0,class:!0,href:!0});var RI=a(xn);_d=r(RI,"SPAN",{});var BI=a(_d);I(ha.$$.fragment,BI),BI.forEach(o),RI.forEach(o),Av=m(Op),vd=r(Op,"SPAN",{});var UI=a(vd);Ov=l(UI,"FlaxCLIPVisionModel"),UI.forEach(o),Op.forEach(o),qc=m(t),to=r(t,"DIV",{class:!0});var Vp=a(to);I(ga.$$.fragment,Vp),Vv=m(Vp),qe=r(Vp,"DIV",{class:!0});var Zn=a(qe);I(ua.$$.fragment,Zn),Wv=m(Zn),oo=r(Zn,"P",{});var Vi=a(oo);Sv=l(Vi,"The "),Pd=r(Vi,"CODE",{});var HI=a(Pd);Rv=l(HI,"FlaxCLIPVisionPreTrainedModel"),HI.forEach(o),Bv=l(Vi," forward method, overrides the "),bd=r(Vi,"CODE",{});var KI=a(bd);Uv=l(KI,"__call__"),KI.forEach(o),Hv=l(Vi," special method."),Vi.forEach(o),Kv=m(Zn),I(kn.$$.fragment,Zn),Gv=m(Zn),I(zn.$$.fragment,Zn),Zn.forEach(o),Vp.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(D$)),h(f,"id","clip"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#clip"),h(g,"class","relative group"),h(fe,"id","overview"),h(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fe,"href","#overview"),h(X,"class","relative group"),h(Ae,"href","https://arxiv.org/abs/2103.00020"),h(Ae,"rel","nofollow"),h(S,"id","usage"),h(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(S,"href","#usage"),h(D,"class","relative group"),h(He,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor"),h(_e,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(J,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(Ke,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor"),h(E,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(ct,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(pt,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Xe,"href","https://huggingface.co/valhalla"),h(Xe,"rel","nofollow"),h(Je,"href","https://github.com/openai/CLIP"),h(Je,"rel","nofollow"),h(ho,"id","resources"),h(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ho,"href","#resources"),h(ve,"class","relative group"),h(go,"id","transformers.CLIPConfig"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.CLIPConfig"),h(ht,"class","relative group"),h(Ea,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(Fa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Is,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Is,"rel","nofollow"),h(qa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Da,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Na,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vo,"id","transformers.CLIPTextConfig"),h(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vo,"href","#transformers.CLIPTextConfig"),h(ut,"class","relative group"),h(Aa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Ls,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Ls,"rel","nofollow"),h(Oa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Va,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(bo,"id","transformers.CLIPVisionConfig"),h(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bo,"href","#transformers.CLIPVisionConfig"),h(Pt,"class","relative group"),h(Wa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(ks,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(ks,"rel","nofollow"),h(Sa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ra,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($o,"id","transformers.CLIPTokenizer"),h($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($o,"href","#transformers.CLIPTokenizer"),h($t,"class","relative group"),h(Ba,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ha,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(To,"id","transformers.CLIPTokenizerFast"),h(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(To,"href","#transformers.CLIPTokenizerFast"),h(yt,"class","relative group"),h(Ka,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wo,"id","transformers.CLIPImageProcessor"),h(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wo,"href","#transformers.CLIPImageProcessor"),h(Ct,"class","relative group"),h(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ko,"id","transformers.CLIPImageProcessor"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.CLIPImageProcessor"),h(Tt,"class","relative group"),h(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qo,"id","transformers.CLIPProcessor"),h(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qo,"href","#transformers.CLIPProcessor"),h(Lt,"class","relative group"),h(Xa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(Ja,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor"),h(Ya,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),h(Za,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),h(Qa,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),h(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ei,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),h(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ao,"id","transformers.CLIPModel"),h(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ao,"href","#transformers.CLIPModel"),h(wt,"class","relative group"),h(ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(pr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(pr,"rel","nofollow"),h(oi,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ni,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(si,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Uo,"id","transformers.CLIPTextModel"),h(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Uo,"href","#transformers.CLIPTextModel"),h(Mt,"class","relative group"),h(ri,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Pr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Pr,"rel","nofollow"),h(ai,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),h(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Go,"id","transformers.CLIPTextModelWithProjection"),h(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Go,"href","#transformers.CLIPTextModelWithProjection"),h(Et,"class","relative group"),h(ii,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Tr,"rel","nofollow"),h(li,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModelWithProjection"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yo,"id","transformers.CLIPVisionModelWithProjection"),h(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yo,"href","#transformers.CLIPVisionModelWithProjection"),h(qt,"class","relative group"),h(di,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Mr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Mr,"rel","nofollow"),h(ci,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModelWithProjection"),h(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(en,"id","transformers.CLIPVisionModel"),h(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(en,"href","#transformers.CLIPVisionModel"),h(Nt,"class","relative group"),h(pi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Nr,"rel","nofollow"),h(mi,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),h(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(nn,"id","transformers.TFCLIPModel"),h(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(nn,"href","#transformers.TFCLIPModel"),h(Ot,"class","relative group"),h(fi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Rr,"rel","nofollow"),h(hi,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gi,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ui,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mn,"id","transformers.TFCLIPTextModel"),h(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mn,"href","#transformers.TFCLIPTextModel"),h(Rt,"class","relative group"),h(_i,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),h(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gn,"id","transformers.TFCLIPVisionModel"),h(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gn,"href","#transformers.TFCLIPVisionModel"),h(Ht,"class","relative group"),h(vi,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),h(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vn,"id","transformers.FlaxCLIPModel"),h(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vn,"href","#transformers.FlaxCLIPModel"),h(Xt,"class","relative group"),h(Pi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(na,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(na,"rel","nofollow"),h(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(sa,"rel","nofollow"),h(ra,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(ra,"rel","nofollow"),h(aa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(aa,"rel","nofollow"),h(ia,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(ia,"rel","nofollow"),h(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(In,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Tn,"id","transformers.FlaxCLIPTextModel"),h(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Tn,"href","#transformers.FlaxCLIPTextModel"),h(Yt,"class","relative group"),h(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xn,"id","transformers.FlaxCLIPVisionModel"),h(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xn,"href","#transformers.FlaxCLIPVisionModel"),h(eo,"class","relative group"),h(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),v(t,P,u),v(t,g,u),e(g,f),e(f,_),$(n,_,null),e(g,c),e(g,w),e(w,Qn),v(t,so,u),v(t,X,u),e(X,fe),e(fe,Be),$(M,Be,null),e(X,es),e(X,Ne),e(Ne,ts),v(t,ro,u),v(t,oe,u),e(oe,os),e(oe,Ae),e(Ae,nt),e(oe,ns),v(t,ao,u),v(t,he,u),e(he,ss),v(t,io,u),v(t,ge,u),e(ge,st),e(st,rs),v(t,rt,u),v(t,D,u),e(D,S),e(S,at),$(le,at,null),e(D,as),e(D,it),e(it,lt),v(t,lo,u),v(t,Ue,u),e(Ue,ue),v(t,co,u),v(t,ne,u),e(ne,is),e(ne,He),e(He,dt),e(ne,ls),v(t,po,u),v(t,z,u),e(z,ds),e(z,_e),e(_e,cs),e(z,mo),e(z,J),e(J,ps),e(z,Oe),e(z,Ke),e(Ke,ms),e(z,k),e(z,E),e(E,Ta),e(z,fo),e(z,ct),e(ct,La),e(z,U),e(z,pt),e(pt,wa),e(z,xa),v(t,fs,u),$(Ge,t,u),v(t,Ve,u),v(t,H,u),e(H,ka),e(H,Xe),e(Xe,mt),e(H,za),e(H,Je),e(Je,hs),e(H,Ma),v(t,ft,u),v(t,ve,u),e(ve,ho),e(ho,Wi),$(gs,Wi,null),e(ve,Wp),e(ve,Si),e(Si,Sp),v(t,Gd,u),v(t,ja,u),e(ja,Rp),v(t,Xd,u),$(us,t,u),v(t,Jd,u),$(_s,t,u),v(t,Yd,u),$(vs,t,u),v(t,Zd,u),v(t,ht,u),e(ht,go),e(go,Ri),$(Ps,Ri,null),e(ht,Bp),e(ht,Bi),e(Bi,Up),v(t,Qd,u),v(t,Y,u),$(bs,Y,null),e(Y,Hp),e(Y,Ye),e(Ye,Ea),e(Ea,Kp),e(Ye,Gp),e(Ye,Fa),e(Fa,Xp),e(Ye,Jp),e(Ye,Is),e(Is,Yp),e(Ye,Zp),e(Y,Qp),e(Y,gt),e(gt,em),e(gt,qa),e(qa,tm),e(gt,om),e(gt,Da),e(Da,nm),e(gt,sm),e(Y,rm),$(uo,Y,null),e(Y,am),e(Y,_o),$($s,_o,null),e(_o,im),e(_o,ys),e(ys,lm),e(ys,Na),e(Na,dm),e(ys,cm),v(t,ec,u),v(t,ut,u),e(ut,vo),e(vo,Ui),$(Cs,Ui,null),e(ut,pm),e(ut,Hi),e(Hi,mm),v(t,tc,u),v(t,de,u),$(Ts,de,null),e(de,fm),e(de,_t),e(_t,hm),e(_t,Aa),e(Aa,gm),e(_t,um),e(_t,Ls),e(Ls,_m),e(_t,vm),e(de,Pm),e(de,vt),e(vt,bm),e(vt,Oa),e(Oa,Im),e(vt,$m),e(vt,Va),e(Va,ym),e(vt,Cm),e(de,Tm),$(Po,de,null),v(t,oc,u),v(t,Pt,u),e(Pt,bo),e(bo,Ki),$(ws,Ki,null),e(Pt,Lm),e(Pt,Gi),e(Gi,wm),v(t,nc,u),v(t,ce,u),$(xs,ce,null),e(ce,xm),e(ce,bt),e(bt,km),e(bt,Wa),e(Wa,zm),e(bt,Mm),e(bt,ks),e(ks,jm),e(bt,Em),e(ce,Fm),e(ce,It),e(It,qm),e(It,Sa),e(Sa,Dm),e(It,Nm),e(It,Ra),e(Ra,Am),e(It,Om),e(ce,Vm),$(Io,ce,null),v(t,sc,u),v(t,$t,u),e($t,$o),e($o,Xi),$(zs,Xi,null),e($t,Wm),e($t,Ji),e(Ji,Sm),v(t,rc,u),v(t,O,u),$(Ms,O,null),e(O,Rm),e(O,Yi),e(Yi,Bm),e(O,Um),e(O,js),e(js,Hm),e(js,Ba),e(Ba,Km),e(js,Gm),e(O,Xm),e(O,Pe),$(Es,Pe,null),e(Pe,Jm),e(Pe,Zi),e(Zi,Ym),e(Pe,Zm),e(Pe,Qi),e(Qi,Ua),e(Ua,Qm),e(Ua,el),e(el,ef),e(Pe,tf),e(Pe,tl),e(tl,of),e(O,nf),e(O,yo),$(Fs,yo,null),e(yo,sf),e(yo,qs),e(qs,rf),e(qs,ol),e(ol,af),e(qs,lf),e(O,df),e(O,Co),$(Ds,Co,null),e(Co,cf),e(Co,nl),e(nl,pf),e(O,mf),e(O,Ha),$(Ns,Ha,null),v(t,ac,u),v(t,yt,u),e(yt,To),e(To,sl),$(As,sl,null),e(yt,ff),e(yt,rl),e(rl,hf),v(t,ic,u),v(t,Z,u),$(Os,Z,null),e(Z,gf),e(Z,Vs),e(Vs,uf),e(Vs,al),e(al,_f),e(Vs,vf),e(Z,Pf),e(Z,Ws),e(Ws,bf),e(Ws,Ka),e(Ka,If),e(Ws,$f),e(Z,yf),e(Z,be),$(Ss,be,null),e(be,Cf),e(be,il),e(il,Tf),e(be,Lf),e(be,ll),e(ll,Ga),e(Ga,wf),e(Ga,dl),e(dl,xf),e(be,kf),e(be,cl),e(cl,zf),e(Z,Mf),e(Z,Lo),$(Rs,Lo,null),e(Lo,jf),e(Lo,pl),e(pl,Ef),v(t,lc,u),v(t,Ct,u),e(Ct,wo),e(wo,ml),$(Bs,ml,null),e(Ct,Ff),e(Ct,fl),e(fl,qf),v(t,dc,u),v(t,We,u),$(Us,We,null),e(We,Df),e(We,hl),e(hl,Nf),e(We,Af),e(We,xo),$(Hs,xo,null),e(xo,Of),e(xo,gl),e(gl,Vf),v(t,cc,u),v(t,Tt,u),e(Tt,ko),e(ko,ul),$(Ks,ul,null),e(Tt,Wf),e(Tt,_l),e(_l,Sf),v(t,pc,u),v(t,V,u),$(Gs,V,null),e(V,Rf),e(V,vl),e(vl,Bf),e(V,Uf),e(V,zo),$(Xs,zo,null),e(zo,Hf),e(zo,Js),e(Js,Kf),e(Js,Pl),e(Pl,Gf),e(Js,Xf),e(V,Jf),e(V,Mo),$(Ys,Mo,null),e(Mo,Yf),e(Mo,bl),e(bl,Zf),e(V,Qf),e(V,jo),$(Zs,jo,null),e(jo,eh),e(jo,Il),e(Il,th),e(V,oh),e(V,Eo),$(Qs,Eo,null),e(Eo,nh),e(Eo,$l),e($l,sh),e(V,rh),e(V,Fo),$(er,Fo,null),e(Fo,ah),e(Fo,yl),e(yl,ih),v(t,mc,u),v(t,Lt,u),e(Lt,qo),e(qo,Cl),$(tr,Cl,null),e(Lt,lh),e(Lt,Tl),e(Tl,dh),v(t,fc,u),v(t,Q,u),$(or,Q,null),e(Q,ch),e(Q,Ll),e(Ll,ph),e(Q,mh),e(Q,se),e(se,Xa),e(Xa,fh),e(se,hh),e(se,Ja),e(Ja,gh),e(se,uh),e(se,Ya),e(Ya,_h),e(se,vh),e(se,wl),e(wl,Ph),e(se,bh),e(se,Za),e(Za,Ih),e(se,$h),e(Q,yh),e(Q,Do),$(nr,Do,null),e(Do,Ch),e(Do,sr),e(sr,Th),e(sr,Qa),e(Qa,Lh),e(sr,wh),e(Q,xh),e(Q,No),$(rr,No,null),e(No,kh),e(No,ar),e(ar,zh),e(ar,ei),e(ei,Mh),e(ar,jh),v(t,hc,u),v(t,wt,u),e(wt,Ao),e(Ao,xl),$(ir,xl,null),e(wt,Eh),e(wt,kl),e(kl,Fh),v(t,gc,u),v(t,R,u),$(lr,R,null),e(R,qh),e(R,dr),e(dr,Dh),e(dr,ti),e(ti,Nh),e(dr,Ah),e(R,Oh),e(R,cr),e(cr,Vh),e(cr,pr),e(pr,Wh),e(cr,Sh),e(R,Rh),e(R,Ie),$(mr,Ie,null),e(Ie,Bh),e(Ie,xt),e(xt,Uh),e(xt,oi),e(oi,Hh),e(xt,Kh),e(xt,zl),e(zl,Gh),e(xt,Xh),e(Ie,Jh),$(Oo,Ie,null),e(Ie,Yh),$(Vo,Ie,null),e(R,Zh),e(R,$e),$(fr,$e,null),e($e,Qh),e($e,kt),e(kt,eg),e(kt,ni),e(ni,tg),e(kt,og),e(kt,Ml),e(Ml,ng),e(kt,sg),e($e,rg),$(Wo,$e,null),e($e,ag),$(So,$e,null),e(R,ig),e(R,ye),$(hr,ye,null),e(ye,lg),e(ye,zt),e(zt,dg),e(zt,si),e(si,cg),e(zt,pg),e(zt,jl),e(jl,mg),e(zt,fg),e(ye,hg),$(Ro,ye,null),e(ye,gg),$(Bo,ye,null),v(t,uc,u),v(t,Mt,u),e(Mt,Uo),e(Uo,El),$(gr,El,null),e(Mt,ug),e(Mt,Fl),e(Fl,_g),v(t,_c,u),v(t,pe,u),$(ur,pe,null),e(pe,vg),e(pe,_r),e(_r,Pg),e(_r,ri),e(ri,bg),e(_r,Ig),e(pe,$g),e(pe,vr),e(vr,yg),e(vr,Pr),e(Pr,Cg),e(vr,Tg),e(pe,Lg),e(pe,Ce),$(br,Ce,null),e(Ce,wg),e(Ce,jt),e(jt,xg),e(jt,ai),e(ai,kg),e(jt,zg),e(jt,ql),e(ql,Mg),e(jt,jg),e(Ce,Eg),$(Ho,Ce,null),e(Ce,Fg),$(Ko,Ce,null),v(t,vc,u),v(t,Et,u),e(Et,Go),e(Go,Dl),$(Ir,Dl,null),e(Et,qg),e(Et,Nl),e(Nl,Dg),v(t,Pc,u),v(t,ee,u),$($r,ee,null),e(ee,Ng),e(ee,Al),e(Al,Ag),e(ee,Og),e(ee,yr),e(yr,Vg),e(yr,ii),e(ii,Wg),e(yr,Sg),e(ee,Rg),e(ee,Cr),e(Cr,Bg),e(Cr,Tr),e(Tr,Ug),e(Cr,Hg),e(ee,Kg),e(ee,Te),$(Lr,Te,null),e(Te,Gg),e(Te,Ft),e(Ft,Xg),e(Ft,li),e(li,Jg),e(Ft,Yg),e(Ft,Ol),e(Ol,Zg),e(Ft,Qg),e(Te,eu),$(Xo,Te,null),e(Te,tu),$(Jo,Te,null),v(t,bc,u),v(t,qt,u),e(qt,Yo),e(Yo,Vl),$(wr,Vl,null),e(qt,ou),e(qt,Wl),e(Wl,nu),v(t,Ic,u),v(t,te,u),$(xr,te,null),e(te,su),e(te,Sl),e(Sl,ru),e(te,au),e(te,kr),e(kr,iu),e(kr,di),e(di,lu),e(kr,du),e(te,cu),e(te,zr),e(zr,pu),e(zr,Mr),e(Mr,mu),e(zr,fu),e(te,hu),e(te,Le),$(jr,Le,null),e(Le,gu),e(Le,Dt),e(Dt,uu),e(Dt,ci),e(ci,_u),e(Dt,vu),e(Dt,Rl),e(Rl,Pu),e(Dt,bu),e(Le,Iu),$(Zo,Le,null),e(Le,$u),$(Qo,Le,null),v(t,$c,u),v(t,Nt,u),e(Nt,en),e(en,Bl),$(Er,Bl,null),e(Nt,yu),e(Nt,Ul),e(Ul,Cu),v(t,yc,u),v(t,me,u),$(Fr,me,null),e(me,Tu),e(me,qr),e(qr,Lu),e(qr,pi),e(pi,wu),e(qr,xu),e(me,ku),e(me,Dr),e(Dr,zu),e(Dr,Nr),e(Nr,Mu),e(Dr,ju),e(me,Eu),e(me,we),$(Ar,we,null),e(we,Fu),e(we,At),e(At,qu),e(At,mi),e(mi,Du),e(At,Nu),e(At,Hl),e(Hl,Au),e(At,Ou),e(we,Vu),$(tn,we,null),e(we,Wu),$(on,we,null),v(t,Cc,u),v(t,Ot,u),e(Ot,nn),e(nn,Kl),$(Or,Kl,null),e(Ot,Su),e(Ot,Gl),e(Gl,Ru),v(t,Tc,u),v(t,W,u),$(Vr,W,null),e(W,Bu),e(W,Wr),e(Wr,Uu),e(Wr,fi),e(fi,Hu),e(Wr,Ku),e(W,Gu),e(W,Sr),e(Sr,Xu),e(Sr,Rr),e(Rr,Ju),e(Sr,Yu),e(W,Zu),$(sn,W,null),e(W,Qu),e(W,xe),$(Br,xe,null),e(xe,e_),e(xe,Vt),e(Vt,t_),e(Vt,hi),e(hi,o_),e(Vt,n_),e(Vt,Xl),e(Xl,s_),e(Vt,r_),e(xe,a_),$(rn,xe,null),e(xe,i_),$(an,xe,null),e(W,l_),e(W,ke),$(Ur,ke,null),e(ke,d_),e(ke,Wt),e(Wt,c_),e(Wt,gi),e(gi,p_),e(Wt,m_),e(Wt,Jl),e(Jl,f_),e(Wt,h_),e(ke,g_),$(ln,ke,null),e(ke,u_),$(dn,ke,null),e(W,__),e(W,ze),$(Hr,ze,null),e(ze,v_),e(ze,St),e(St,P_),e(St,ui),e(ui,b_),e(St,I_),e(St,Yl),e(Yl,$_),e(St,y_),e(ze,C_),$(cn,ze,null),e(ze,T_),$(pn,ze,null),v(t,Lc,u),v(t,Rt,u),e(Rt,mn),e(mn,Zl),$(Kr,Zl,null),e(Rt,L_),e(Rt,Ql),e(Ql,w_),v(t,wc,u),v(t,Bt,u),$(Gr,Bt,null),e(Bt,x_),e(Bt,Me),$(Xr,Me,null),e(Me,k_),e(Me,Ut),e(Ut,z_),e(Ut,_i),e(_i,M_),e(Ut,j_),e(Ut,ed),e(ed,E_),e(Ut,F_),e(Me,q_),$(fn,Me,null),e(Me,D_),$(hn,Me,null),v(t,xc,u),v(t,Ht,u),e(Ht,gn),e(gn,td),$(Jr,td,null),e(Ht,N_),e(Ht,od),e(od,A_),v(t,kc,u),v(t,Kt,u),$(Yr,Kt,null),e(Kt,O_),e(Kt,je),$(Zr,je,null),e(je,V_),e(je,Gt),e(Gt,W_),e(Gt,vi),e(vi,S_),e(Gt,R_),e(Gt,nd),e(nd,B_),e(Gt,U_),e(je,H_),$(un,je,null),e(je,K_),$(_n,je,null),v(t,zc,u),v(t,Xt,u),e(Xt,vn),e(vn,sd),$(Qr,sd,null),e(Xt,G_),e(Xt,rd),e(rd,X_),v(t,Mc,u),v(t,F,u),$(ea,F,null),e(F,J_),e(F,ta),e(ta,Y_),e(ta,Pi),e(Pi,Z_),e(ta,Q_),e(F,ev),e(F,oa),e(oa,tv),e(oa,na),e(na,ov),e(oa,nv),e(F,sv),e(F,ad),e(ad,rv),e(F,av),e(F,Se),e(Se,id),e(id,sa),e(sa,iv),e(Se,lv),e(Se,ld),e(ld,ra),e(ra,dv),e(Se,cv),e(Se,dd),e(dd,aa),e(aa,pv),e(Se,mv),e(Se,cd),e(cd,ia),e(ia,fv),e(F,hv),e(F,Ee),$(la,Ee,null),e(Ee,gv),e(Ee,Jt),e(Jt,uv),e(Jt,pd),e(pd,_v),e(Jt,vv),e(Jt,md),e(md,Pv),e(Jt,bv),e(Ee,Iv),$(Pn,Ee,null),e(Ee,$v),$(bn,Ee,null),e(F,yv),e(F,In),$(da,In,null),e(In,Cv),$($n,In,null),e(F,Tv),e(F,yn),$(ca,yn,null),e(yn,Lv),$(Cn,yn,null),v(t,jc,u),v(t,Yt,u),e(Yt,Tn),e(Tn,fd),$(pa,fd,null),e(Yt,wv),e(Yt,hd),e(hd,xv),v(t,Ec,u),v(t,Zt,u),$(ma,Zt,null),e(Zt,kv),e(Zt,Fe),$(fa,Fe,null),e(Fe,zv),e(Fe,Qt),e(Qt,Mv),e(Qt,gd),e(gd,jv),e(Qt,Ev),e(Qt,ud),e(ud,Fv),e(Qt,qv),e(Fe,Dv),$(Ln,Fe,null),e(Fe,Nv),$(wn,Fe,null),v(t,Fc,u),v(t,eo,u),e(eo,xn),e(xn,_d),$(ha,_d,null),e(eo,Av),e(eo,vd),e(vd,Ov),v(t,qc,u),v(t,to,u),$(ga,to,null),e(to,Vv),e(to,qe),$(ua,qe,null),e(qe,Wv),e(qe,oo),e(oo,Sv),e(oo,Pd),e(Pd,Rv),e(oo,Bv),e(oo,bd),e(bd,Uv),e(oo,Hv),e(qe,Kv),$(kn,qe,null),e(qe,Gv),$(zn,qe,null),Dc=!0},p(t,[u]){const _a={};u&2&&(_a.$$scope={dirty:u,ctx:t}),uo.$set(_a);const Id={};u&2&&(Id.$$scope={dirty:u,ctx:t}),Po.$set(Id);const $d={};u&2&&($d.$$scope={dirty:u,ctx:t}),Io.$set($d);const yd={};u&2&&(yd.$$scope={dirty:u,ctx:t}),Oo.$set(yd);const va={};u&2&&(va.$$scope={dirty:u,ctx:t}),Vo.$set(va);const Cd={};u&2&&(Cd.$$scope={dirty:u,ctx:t}),Wo.$set(Cd);const Td={};u&2&&(Td.$$scope={dirty:u,ctx:t}),So.$set(Td);const Ld={};u&2&&(Ld.$$scope={dirty:u,ctx:t}),Ro.$set(Ld);const Pa={};u&2&&(Pa.$$scope={dirty:u,ctx:t}),Bo.$set(Pa);const wd={};u&2&&(wd.$$scope={dirty:u,ctx:t}),Ho.$set(wd);const xd={};u&2&&(xd.$$scope={dirty:u,ctx:t}),Ko.$set(xd);const kd={};u&2&&(kd.$$scope={dirty:u,ctx:t}),Xo.$set(kd);const zd={};u&2&&(zd.$$scope={dirty:u,ctx:t}),Jo.$set(zd);const ba={};u&2&&(ba.$$scope={dirty:u,ctx:t}),Zo.$set(ba);const Md={};u&2&&(Md.$$scope={dirty:u,ctx:t}),Qo.$set(Md);const jd={};u&2&&(jd.$$scope={dirty:u,ctx:t}),tn.$set(jd);const Ed={};u&2&&(Ed.$$scope={dirty:u,ctx:t}),on.$set(Ed);const Fd={};u&2&&(Fd.$$scope={dirty:u,ctx:t}),sn.$set(Fd);const Ia={};u&2&&(Ia.$$scope={dirty:u,ctx:t}),rn.$set(Ia);const qd={};u&2&&(qd.$$scope={dirty:u,ctx:t}),an.$set(qd);const B={};u&2&&(B.$$scope={dirty:u,ctx:t}),ln.$set(B);const Dd={};u&2&&(Dd.$$scope={dirty:u,ctx:t}),dn.$set(Dd);const Nd={};u&2&&(Nd.$$scope={dirty:u,ctx:t}),cn.$set(Nd);const Ad={};u&2&&(Ad.$$scope={dirty:u,ctx:t}),pn.$set(Ad);const Od={};u&2&&(Od.$$scope={dirty:u,ctx:t}),fn.$set(Od);const Vd={};u&2&&(Vd.$$scope={dirty:u,ctx:t}),hn.$set(Vd);const Wd={};u&2&&(Wd.$$scope={dirty:u,ctx:t}),un.$set(Wd);const no={};u&2&&(no.$$scope={dirty:u,ctx:t}),_n.$set(no);const Sd={};u&2&&(Sd.$$scope={dirty:u,ctx:t}),Pn.$set(Sd);const Rd={};u&2&&(Rd.$$scope={dirty:u,ctx:t}),bn.$set(Rd);const $a={};u&2&&($a.$$scope={dirty:u,ctx:t}),$n.$set($a);const Bd={};u&2&&(Bd.$$scope={dirty:u,ctx:t}),Cn.$set(Bd);const Ud={};u&2&&(Ud.$$scope={dirty:u,ctx:t}),Ln.$set(Ud);const Hd={};u&2&&(Hd.$$scope={dirty:u,ctx:t}),wn.$set(Hd);const Kd={};u&2&&(Kd.$$scope={dirty:u,ctx:t}),kn.$set(Kd);const ya={};u&2&&(ya.$$scope={dirty:u,ctx:t}),zn.$set(ya)},i(t){Dc||(y(n.$$.fragment,t),y(M.$$.fragment,t),y(le.$$.fragment,t),y(Ge.$$.fragment,t),y(gs.$$.fragment,t),y(us.$$.fragment,t),y(_s.$$.fragment,t),y(vs.$$.fragment,t),y(Ps.$$.fragment,t),y(bs.$$.fragment,t),y(uo.$$.fragment,t),y($s.$$.fragment,t),y(Cs.$$.fragment,t),y(Ts.$$.fragment,t),y(Po.$$.fragment,t),y(ws.$$.fragment,t),y(xs.$$.fragment,t),y(Io.$$.fragment,t),y(zs.$$.fragment,t),y(Ms.$$.fragment,t),y(Es.$$.fragment,t),y(Fs.$$.fragment,t),y(Ds.$$.fragment,t),y(Ns.$$.fragment,t),y(As.$$.fragment,t),y(Os.$$.fragment,t),y(Ss.$$.fragment,t),y(Rs.$$.fragment,t),y(Bs.$$.fragment,t),y(Us.$$.fragment,t),y(Hs.$$.fragment,t),y(Ks.$$.fragment,t),y(Gs.$$.fragment,t),y(Xs.$$.fragment,t),y(Ys.$$.fragment,t),y(Zs.$$.fragment,t),y(Qs.$$.fragment,t),y(er.$$.fragment,t),y(tr.$$.fragment,t),y(or.$$.fragment,t),y(nr.$$.fragment,t),y(rr.$$.fragment,t),y(ir.$$.fragment,t),y(lr.$$.fragment,t),y(mr.$$.fragment,t),y(Oo.$$.fragment,t),y(Vo.$$.fragment,t),y(fr.$$.fragment,t),y(Wo.$$.fragment,t),y(So.$$.fragment,t),y(hr.$$.fragment,t),y(Ro.$$.fragment,t),y(Bo.$$.fragment,t),y(gr.$$.fragment,t),y(ur.$$.fragment,t),y(br.$$.fragment,t),y(Ho.$$.fragment,t),y(Ko.$$.fragment,t),y(Ir.$$.fragment,t),y($r.$$.fragment,t),y(Lr.$$.fragment,t),y(Xo.$$.fragment,t),y(Jo.$$.fragment,t),y(wr.$$.fragment,t),y(xr.$$.fragment,t),y(jr.$$.fragment,t),y(Zo.$$.fragment,t),y(Qo.$$.fragment,t),y(Er.$$.fragment,t),y(Fr.$$.fragment,t),y(Ar.$$.fragment,t),y(tn.$$.fragment,t),y(on.$$.fragment,t),y(Or.$$.fragment,t),y(Vr.$$.fragment,t),y(sn.$$.fragment,t),y(Br.$$.fragment,t),y(rn.$$.fragment,t),y(an.$$.fragment,t),y(Ur.$$.fragment,t),y(ln.$$.fragment,t),y(dn.$$.fragment,t),y(Hr.$$.fragment,t),y(cn.$$.fragment,t),y(pn.$$.fragment,t),y(Kr.$$.fragment,t),y(Gr.$$.fragment,t),y(Xr.$$.fragment,t),y(fn.$$.fragment,t),y(hn.$$.fragment,t),y(Jr.$$.fragment,t),y(Yr.$$.fragment,t),y(Zr.$$.fragment,t),y(un.$$.fragment,t),y(_n.$$.fragment,t),y(Qr.$$.fragment,t),y(ea.$$.fragment,t),y(la.$$.fragment,t),y(Pn.$$.fragment,t),y(bn.$$.fragment,t),y(da.$$.fragment,t),y($n.$$.fragment,t),y(ca.$$.fragment,t),y(Cn.$$.fragment,t),y(pa.$$.fragment,t),y(ma.$$.fragment,t),y(fa.$$.fragment,t),y(Ln.$$.fragment,t),y(wn.$$.fragment,t),y(ha.$$.fragment,t),y(ga.$$.fragment,t),y(ua.$$.fragment,t),y(kn.$$.fragment,t),y(zn.$$.fragment,t),Dc=!0)},o(t){C(n.$$.fragment,t),C(M.$$.fragment,t),C(le.$$.fragment,t),C(Ge.$$.fragment,t),C(gs.$$.fragment,t),C(us.$$.fragment,t),C(_s.$$.fragment,t),C(vs.$$.fragment,t),C(Ps.$$.fragment,t),C(bs.$$.fragment,t),C(uo.$$.fragment,t),C($s.$$.fragment,t),C(Cs.$$.fragment,t),C(Ts.$$.fragment,t),C(Po.$$.fragment,t),C(ws.$$.fragment,t),C(xs.$$.fragment,t),C(Io.$$.fragment,t),C(zs.$$.fragment,t),C(Ms.$$.fragment,t),C(Es.$$.fragment,t),C(Fs.$$.fragment,t),C(Ds.$$.fragment,t),C(Ns.$$.fragment,t),C(As.$$.fragment,t),C(Os.$$.fragment,t),C(Ss.$$.fragment,t),C(Rs.$$.fragment,t),C(Bs.$$.fragment,t),C(Us.$$.fragment,t),C(Hs.$$.fragment,t),C(Ks.$$.fragment,t),C(Gs.$$.fragment,t),C(Xs.$$.fragment,t),C(Ys.$$.fragment,t),C(Zs.$$.fragment,t),C(Qs.$$.fragment,t),C(er.$$.fragment,t),C(tr.$$.fragment,t),C(or.$$.fragment,t),C(nr.$$.fragment,t),C(rr.$$.fragment,t),C(ir.$$.fragment,t),C(lr.$$.fragment,t),C(mr.$$.fragment,t),C(Oo.$$.fragment,t),C(Vo.$$.fragment,t),C(fr.$$.fragment,t),C(Wo.$$.fragment,t),C(So.$$.fragment,t),C(hr.$$.fragment,t),C(Ro.$$.fragment,t),C(Bo.$$.fragment,t),C(gr.$$.fragment,t),C(ur.$$.fragment,t),C(br.$$.fragment,t),C(Ho.$$.fragment,t),C(Ko.$$.fragment,t),C(Ir.$$.fragment,t),C($r.$$.fragment,t),C(Lr.$$.fragment,t),C(Xo.$$.fragment,t),C(Jo.$$.fragment,t),C(wr.$$.fragment,t),C(xr.$$.fragment,t),C(jr.$$.fragment,t),C(Zo.$$.fragment,t),C(Qo.$$.fragment,t),C(Er.$$.fragment,t),C(Fr.$$.fragment,t),C(Ar.$$.fragment,t),C(tn.$$.fragment,t),C(on.$$.fragment,t),C(Or.$$.fragment,t),C(Vr.$$.fragment,t),C(sn.$$.fragment,t),C(Br.$$.fragment,t),C(rn.$$.fragment,t),C(an.$$.fragment,t),C(Ur.$$.fragment,t),C(ln.$$.fragment,t),C(dn.$$.fragment,t),C(Hr.$$.fragment,t),C(cn.$$.fragment,t),C(pn.$$.fragment,t),C(Kr.$$.fragment,t),C(Gr.$$.fragment,t),C(Xr.$$.fragment,t),C(fn.$$.fragment,t),C(hn.$$.fragment,t),C(Jr.$$.fragment,t),C(Yr.$$.fragment,t),C(Zr.$$.fragment,t),C(un.$$.fragment,t),C(_n.$$.fragment,t),C(Qr.$$.fragment,t),C(ea.$$.fragment,t),C(la.$$.fragment,t),C(Pn.$$.fragment,t),C(bn.$$.fragment,t),C(da.$$.fragment,t),C($n.$$.fragment,t),C(ca.$$.fragment,t),C(Cn.$$.fragment,t),C(pa.$$.fragment,t),C(ma.$$.fragment,t),C(fa.$$.fragment,t),C(Ln.$$.fragment,t),C(wn.$$.fragment,t),C(ha.$$.fragment,t),C(ga.$$.fragment,t),C(ua.$$.fragment,t),C(kn.$$.fragment,t),C(zn.$$.fragment,t),Dc=!1},d(t){o(d),t&&o(P),t&&o(g),T(n),t&&o(so),t&&o(X),T(M),t&&o(ro),t&&o(oe),t&&o(ao),t&&o(he),t&&o(io),t&&o(ge),t&&o(rt),t&&o(D),T(le),t&&o(lo),t&&o(Ue),t&&o(co),t&&o(ne),t&&o(po),t&&o(z),t&&o(fs),T(Ge,t),t&&o(Ve),t&&o(H),t&&o(ft),t&&o(ve),T(gs),t&&o(Gd),t&&o(ja),t&&o(Xd),T(us,t),t&&o(Jd),T(_s,t),t&&o(Yd),T(vs,t),t&&o(Zd),t&&o(ht),T(Ps),t&&o(Qd),t&&o(Y),T(bs),T(uo),T($s),t&&o(ec),t&&o(ut),T(Cs),t&&o(tc),t&&o(de),T(Ts),T(Po),t&&o(oc),t&&o(Pt),T(ws),t&&o(nc),t&&o(ce),T(xs),T(Io),t&&o(sc),t&&o($t),T(zs),t&&o(rc),t&&o(O),T(Ms),T(Es),T(Fs),T(Ds),T(Ns),t&&o(ac),t&&o(yt),T(As),t&&o(ic),t&&o(Z),T(Os),T(Ss),T(Rs),t&&o(lc),t&&o(Ct),T(Bs),t&&o(dc),t&&o(We),T(Us),T(Hs),t&&o(cc),t&&o(Tt),T(Ks),t&&o(pc),t&&o(V),T(Gs),T(Xs),T(Ys),T(Zs),T(Qs),T(er),t&&o(mc),t&&o(Lt),T(tr),t&&o(fc),t&&o(Q),T(or),T(nr),T(rr),t&&o(hc),t&&o(wt),T(ir),t&&o(gc),t&&o(R),T(lr),T(mr),T(Oo),T(Vo),T(fr),T(Wo),T(So),T(hr),T(Ro),T(Bo),t&&o(uc),t&&o(Mt),T(gr),t&&o(_c),t&&o(pe),T(ur),T(br),T(Ho),T(Ko),t&&o(vc),t&&o(Et),T(Ir),t&&o(Pc),t&&o(ee),T($r),T(Lr),T(Xo),T(Jo),t&&o(bc),t&&o(qt),T(wr),t&&o(Ic),t&&o(te),T(xr),T(jr),T(Zo),T(Qo),t&&o($c),t&&o(Nt),T(Er),t&&o(yc),t&&o(me),T(Fr),T(Ar),T(tn),T(on),t&&o(Cc),t&&o(Ot),T(Or),t&&o(Tc),t&&o(W),T(Vr),T(sn),T(Br),T(rn),T(an),T(Ur),T(ln),T(dn),T(Hr),T(cn),T(pn),t&&o(Lc),t&&o(Rt),T(Kr),t&&o(wc),t&&o(Bt),T(Gr),T(Xr),T(fn),T(hn),t&&o(xc),t&&o(Ht),T(Jr),t&&o(kc),t&&o(Kt),T(Yr),T(Zr),T(un),T(_n),t&&o(zc),t&&o(Xt),T(Qr),t&&o(Mc),t&&o(F),T(ea),T(la),T(Pn),T(bn),T(da),T($n),T(ca),T(Cn),t&&o(jc),t&&o(Yt),T(pa),t&&o(Ec),t&&o(Zt),T(ma),T(fa),T(Ln),T(wn),t&&o(Fc),t&&o(eo),T(ha),t&&o(qc),t&&o(to),T(ga),T(ua),T(kn),T(zn)}}}const D$={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"resources",title:"Resources"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPImageProcessor",title:"CLIPImageProcessor"},{local:"transformers.CLIPImageProcessor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPTextModelWithProjection",title:"CLIPTextModelWithProjection"},{local:"transformers.CLIPVisionModelWithProjection",title:"CLIPVisionModelWithProjection"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function N$(L){return ZI(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class U$ extends GI{constructor(d){super();XI(this,d,N$,q$,JI,{})}}export{U$ as default,D$ as metadata};
