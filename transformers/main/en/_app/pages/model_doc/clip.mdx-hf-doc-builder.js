import{S as TI,i as LI,s as wI,e as s,k as p,w as b,t as i,M as xI,c as r,d as o,m,a,x as I,h as l,b as f,G as e,g as v,y as $,q as y,o as C,B as T,v as kI,L as A}from"../../chunks/vendor-hf-doc-builder.js";import{T as G}from"../../chunks/Tip-hf-doc-builder.js";import{D as x}from"../../chunks/Docstring-hf-doc-builder.js";import{C as q}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as j}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as N}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function zI(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPConfig, CLIPModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>config = CLIPConfig.from_text_vision_configs(config_text, config_vision)`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function MI(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPTextConfig, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function jI(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPVisionConfig, CLIPVisionModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function EI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function FI(L){let d,P,g,h,_;return h=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function qI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function DI(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function NI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function AI(L){let d,P,g,h,_;return h=new q({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function OI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function VI(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function WI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function SI(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPTokenizer, CLIPTextModelWithProjection

model = CLIPTextModelWithProjection.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
text_embeds = outputs.text_embeds`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPTextModelWithProjection

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModelWithProjection.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_embeds = outputs.text_embeds`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function BI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function RI(L){let d,P,g,h,_;return h=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>image_embeds = outputs.image_embeds`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function UI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function HI(L){let d,P,g,h,_;return h=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function KI(L){let d,P,g,h,_,n,c,w,Qn,so,J,fe,Ue,M,Zn,Ae,es,ro,oe,ts,Oe,st,os,ao,ge,ns,io,ue,rt,ss,at,D,S,it,le,rs,lt,dt,lo,He,_e,co,ne,as,Ke,ct,is,po,z,ls,ve,ds,mo,X,cs,Ve,Ge,ps;return{c(){d=s("p"),P=i("TensorFlow models and layers in "),g=s("code"),h=i("transformers"),_=i(" accept two formats as input:"),n=p(),c=s("ul"),w=s("li"),Qn=i("having all inputs as keyword arguments (like PyTorch models), or"),so=p(),J=s("li"),fe=i("having all inputs as a list, tuple or dict in the first positional argument."),Ue=p(),M=s("p"),Zn=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Ae=s("code"),es=i("model.fit()"),ro=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),oe=s("code"),ts=i("model.fit()"),Oe=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),st=s("code"),os=i("fit()"),ao=i(" and "),ge=s("code"),ns=i("predict()"),io=i(`, such as when creating your own layers or models with
the Keras `),ue=s("code"),rt=i("Functional"),ss=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),at=p(),D=s("ul"),S=s("li"),it=i("a single Tensor with "),le=s("code"),rs=i("input_ids"),lt=i(" only and nothing else: "),dt=s("code"),lo=i("model(input_ids)"),He=p(),_e=s("li"),co=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ne=s("code"),as=i("model([input_ids, attention_mask])"),Ke=i(" or "),ct=s("code"),is=i("model([input_ids, attention_mask, token_type_ids])"),po=p(),z=s("li"),ls=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=s("code"),ds=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),mo=p(),X=s("p"),cs=i(`Note that when creating models and layers with
`),Ve=s("a"),Ge=i("subclassing"),ps=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var E=a(d);P=l(E,"TensorFlow models and layers in "),g=r(E,"CODE",{});var va=a(g);h=l(va,"transformers"),va.forEach(o),_=l(E," accept two formats as input:"),E.forEach(o),n=m(k),c=r(k,"UL",{});var ho=a(c);w=r(ho,"LI",{});var pt=a(w);Qn=l(pt,"having all inputs as keyword arguments (like PyTorch models), or"),pt.forEach(o),so=m(ho),J=r(ho,"LI",{});var Pa=a(J);fe=l(Pa,"having all inputs as a list, tuple or dict in the first positional argument."),Pa.forEach(o),ho.forEach(o),Ue=m(k),M=r(k,"P",{});var U=a(M);Zn=l(U,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Ae=r(U,"CODE",{});var mt=a(Ae);es=l(mt,"model.fit()"),mt.forEach(o),ro=l(U,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),oe=r(U,"CODE",{});var ba=a(oe);ts=l(ba,"model.fit()"),ba.forEach(o),Oe=l(U,` supports! If, however, you want to use the second
format outside of Keras methods like `),st=r(U,"CODE",{});var Ia=a(st);os=l(Ia,"fit()"),Ia.forEach(o),ao=l(U," and "),ge=r(U,"CODE",{});var ms=a(ge);ns=l(ms,"predict()"),ms.forEach(o),io=l(U,`, such as when creating your own layers or models with
the Keras `),ue=r(U,"CODE",{});var Je=a(ue);rt=l(Je,"Functional"),Je.forEach(o),ss=l(U,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),U.forEach(o),at=m(k),D=r(k,"UL",{});var We=a(D);S=r(We,"LI",{});var H=a(S);it=l(H,"a single Tensor with "),le=r(H,"CODE",{});var $a=a(le);rs=l($a,"input_ids"),$a.forEach(o),lt=l(H," only and nothing else: "),dt=r(H,"CODE",{});var Xe=a(dt);lo=l(Xe,"model(input_ids)"),Xe.forEach(o),H.forEach(o),He=m(We),_e=r(We,"LI",{});var ht=a(_e);co=l(ht,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ne=r(ht,"CODE",{});var ya=a(ne);as=l(ya,"model([input_ids, attention_mask])"),ya.forEach(o),Ke=l(ht," or "),ct=r(ht,"CODE",{});var Ye=a(ct);is=l(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(o),ht.forEach(o),po=m(We),z=r(We,"LI",{});var hs=a(z);ls=l(hs,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ve=r(hs,"CODE",{});var Ca=a(ve);ds=l(Ca,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ca.forEach(o),hs.forEach(o),We.forEach(o),mo=m(k),X=r(k,"P",{});var ft=a(X);cs=l(ft,`Note that when creating models and layers with
`),Ve=r(ft,"A",{href:!0,rel:!0});var Pe=a(Ve);Ge=l(Pe,"subclassing"),Pe.forEach(o),ps=l(ft,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ft.forEach(o),this.h()},h(){f(Ve,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(Ve,"rel","nofollow")},m(k,E){v(k,d,E),e(d,P),e(d,g),e(g,h),e(d,_),v(k,n,E),v(k,c,E),e(c,w),e(w,Qn),e(c,so),e(c,J),e(J,fe),v(k,Ue,E),v(k,M,E),e(M,Zn),e(M,Ae),e(Ae,es),e(M,ro),e(M,oe),e(oe,ts),e(M,Oe),e(M,st),e(st,os),e(M,ao),e(M,ge),e(ge,ns),e(M,io),e(M,ue),e(ue,rt),e(M,ss),v(k,at,E),v(k,D,E),e(D,S),e(S,it),e(S,le),e(le,rs),e(S,lt),e(S,dt),e(dt,lo),e(D,He),e(D,_e),e(_e,co),e(_e,ne),e(ne,as),e(_e,Ke),e(_e,ct),e(ct,is),e(D,po),e(D,z),e(z,ls),e(z,ve),e(ve,ds),v(k,mo,E),v(k,X,E),e(X,cs),e(X,Ve),e(Ve,Ge),e(X,ps)},d(k){k&&o(d),k&&o(n),k&&o(c),k&&o(Ue),k&&o(M),k&&o(at),k&&o(D),k&&o(mo),k&&o(X)}}}function GI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function JI(L){let d,P,g,h,_;return h=new q({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function XI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function YI(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function QI(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function ZI(L){let d,P,g,h,_;return h=new q({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function e$(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function t$(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function o$(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function n$(L){let d,P,g,h,_;return h=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function s$(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function r$(L){let d,P,g,h,_;return h=new q({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function a$(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function i$(L){let d,P,g,h,_;return h=new q({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),P=i("Examples:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Examples:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function l$(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function d$(L){let d,P,g,h,_;return h=new q({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function c$(L){let d,P,g,h,_;return{c(){d=s("p"),P=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),h=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(c,"CODE",{});var w=a(g);h=l(w,"Module"),w.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,P),e(d,g),e(g,h),e(d,_)},d(n){n&&o(d)}}}function p$(L){let d,P,g,h,_;return h=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),P=i("Example:"),g=p(),b(h.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);P=l(c,"Example:"),c.forEach(o),g=m(n),I(h.$$.fragment,n)},m(n,c){v(n,d,c),e(d,P),v(n,g,c),$(h,n,c),_=!0},p:A,i(n){_||(y(h.$$.fragment,n),_=!0)},o(n){C(h.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(g),T(h,n)}}}function m$(L){let d,P,g,h,_,n,c,w,Qn,so,J,fe,Ue,M,Zn,Ae,es,ro,oe,ts,Oe,st,os,ao,ge,ns,io,ue,rt,ss,at,D,S,it,le,rs,lt,dt,lo,He,_e,co,ne,as,Ke,ct,is,po,z,ls,ve,ds,mo,X,cs,Ve,Ge,ps,k,E,va,ho,pt,Pa,U,mt,ba,Ia,ms,Je,We,H,$a,Xe,ht,ya,Ye,hs,Ca,ft,Pe,fo,Ei,fs,Tp,Fi,Lp,Nd,Y,gs,wp,Qe,Ta,xp,kp,La,zp,Mp,us,jp,Ep,Fp,gt,qp,wa,Dp,Np,xa,Ap,Op,Vp,go,Wp,uo,_s,Sp,vs,Bp,ka,Rp,Up,Ad,ut,_o,qi,Ps,Hp,Di,Kp,Od,de,bs,Gp,_t,Jp,za,Xp,Yp,Is,Qp,Zp,em,vt,tm,Ma,om,nm,ja,sm,rm,am,vo,Vd,Pt,Po,Ni,$s,im,Ai,lm,Wd,ce,ys,dm,bt,cm,Ea,pm,mm,Cs,hm,fm,gm,It,um,Fa,_m,vm,qa,Pm,bm,Im,bo,Sd,$t,Io,Oi,Ts,$m,Vi,ym,Bd,O,Ls,Cm,Wi,Tm,Lm,ws,wm,Da,xm,km,zm,be,xs,Mm,Si,jm,Em,Bi,Na,Fm,Ri,qm,Dm,Ui,Nm,Am,$o,ks,Om,zs,Vm,Hi,Wm,Sm,Bm,yo,Ms,Rm,Ki,Um,Hm,Aa,js,Rd,yt,Co,Gi,Es,Km,Ji,Gm,Ud,Q,Fs,Jm,qs,Xm,Xi,Ym,Qm,Zm,Ds,eh,Oa,th,oh,nh,Ie,Ns,sh,Yi,rh,ah,Qi,Va,ih,Zi,lh,dh,el,ch,ph,To,As,mh,tl,hh,Hd,Ct,Lo,ol,Os,fh,nl,gh,Kd,Se,Vs,uh,sl,_h,vh,wo,Ws,Ph,rl,bh,Gd,Tt,xo,al,Ss,Ih,il,$h,Jd,V,Bs,yh,ll,Ch,Th,ko,Rs,Lh,Us,wh,dl,xh,kh,zh,zo,Hs,Mh,cl,jh,Eh,Mo,Ks,Fh,pl,qh,Dh,jo,Gs,Nh,ml,Ah,Oh,Eo,Js,Vh,hl,Wh,Xd,Lt,Fo,fl,Xs,Sh,gl,Bh,Yd,Z,Ys,Rh,ul,Uh,Hh,se,Wa,Kh,Gh,Sa,Jh,Xh,Ba,Yh,Qh,_l,Zh,ef,Ra,tf,of,nf,qo,Qs,sf,Zs,rf,Ua,af,lf,df,Do,er,cf,tr,pf,Ha,mf,hf,Qd,wt,No,vl,or,ff,Pl,gf,Zd,B,nr,uf,sr,_f,Ka,vf,Pf,bf,rr,If,ar,$f,yf,Cf,$e,ir,Tf,xt,Lf,Ga,wf,xf,bl,kf,zf,Mf,Ao,jf,Oo,Ef,ye,lr,Ff,kt,qf,Ja,Df,Nf,Il,Af,Of,Vf,Vo,Wf,Wo,Sf,Ce,dr,Bf,zt,Rf,Xa,Uf,Hf,$l,Kf,Gf,Jf,So,Xf,Bo,ec,Mt,Ro,yl,cr,Yf,Cl,Qf,tc,pe,pr,Zf,mr,eg,Ya,tg,og,ng,hr,sg,fr,rg,ag,ig,Te,gr,lg,jt,dg,Qa,cg,pg,Tl,mg,hg,fg,Uo,gg,Ho,oc,Et,Ko,Ll,ur,ug,wl,_g,nc,ee,_r,vg,xl,Pg,bg,vr,Ig,Za,$g,yg,Cg,Pr,Tg,br,Lg,wg,xg,Le,Ir,kg,Ft,zg,ei,Mg,jg,kl,Eg,Fg,qg,Go,Dg,Jo,sc,qt,Xo,zl,$r,Ng,Ml,Ag,rc,te,yr,Og,jl,Vg,Wg,Cr,Sg,ti,Bg,Rg,Ug,Tr,Hg,Lr,Kg,Gg,Jg,we,wr,Xg,Dt,Yg,oi,Qg,Zg,El,eu,tu,ou,Yo,nu,Qo,ac,Nt,Zo,Fl,xr,su,ql,ru,ic,me,kr,au,zr,iu,ni,lu,du,cu,Mr,pu,jr,mu,hu,fu,xe,Er,gu,At,uu,si,_u,vu,Dl,Pu,bu,Iu,en,$u,tn,lc,Ot,on,Nl,Fr,yu,Al,Cu,dc,W,qr,Tu,Dr,Lu,ri,wu,xu,ku,Nr,zu,Ar,Mu,ju,Eu,nn,Fu,ke,Or,qu,Vt,Du,ai,Nu,Au,Ol,Ou,Vu,Wu,sn,Su,rn,Bu,ze,Vr,Ru,Wt,Uu,ii,Hu,Ku,Vl,Gu,Ju,Xu,an,Yu,ln,Qu,Me,Wr,Zu,St,e_,li,t_,o_,Wl,n_,s_,r_,dn,a_,cn,cc,Bt,pn,Sl,Sr,i_,Bl,l_,pc,Rt,Br,d_,je,Rr,c_,Ut,p_,di,m_,h_,Rl,f_,g_,u_,mn,__,hn,mc,Ht,fn,Ul,Ur,v_,Hl,P_,hc,Kt,Hr,b_,Ee,Kr,I_,Gt,$_,ci,y_,C_,Kl,T_,L_,w_,gn,x_,un,fc,Jt,_n,Gl,Gr,k_,Jl,z_,gc,F,Jr,M_,Xr,j_,pi,E_,F_,q_,Yr,D_,Qr,N_,A_,O_,Xl,V_,W_,Be,Yl,Zr,S_,B_,Ql,ea,R_,U_,Zl,ta,H_,K_,ed,oa,G_,J_,Fe,na,X_,Xt,Y_,td,Q_,Z_,od,ev,tv,ov,vn,nv,Pn,sv,bn,sa,rv,In,av,$n,ra,iv,yn,uc,Yt,Cn,nd,aa,lv,sd,dv,_c,Qt,ia,cv,qe,la,pv,Zt,mv,rd,hv,fv,ad,gv,uv,_v,Tn,vv,Ln,vc,eo,wn,id,da,Pv,ld,bv,Pc,to,ca,Iv,De,pa,$v,oo,yv,dd,Cv,Tv,cd,Lv,wv,xv,xn,kv,kn,bc;return n=new j({}),M=new j({}),le=new j({}),Je=new q({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),fs=new j({}),gs=new x({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config",val:" = None"},{name:"vision_config",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config",description:`<strong>text_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config"},{anchor:"transformers.CLIPConfig.vision_config",description:`<strong>vision_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L258"}}),go=new N({props:{anchor:"transformers.CLIPConfig.example",$$slots:{default:[zI]},$$scope:{ctx:L}}}),_s=new x({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L334",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),Ps=new j({}),bs=new x({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"projection_dim",val:" = 512"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L40"}}),vo=new N({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[MI]},$$scope:{ctx:L}}}),$s=new j({}),ys=new x({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"projection_dim",val:" = 512"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L150"}}),bo=new N({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[jI]},$$scope:{ctx:L}}}),Ts=new j({}),Ls=new x({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|startoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L260"}}),xs=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L346",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ks=new x({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L373",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ms=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L401",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),js=new x({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L496"}}),Es=new j({}),Fs=new x({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|startoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),Ns=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),As=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Os=new j({}),Vs=new x({props:{name:"class transformers.CLIPImageProcessor",anchor:"transformers.CLIPImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"do_convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L58"}}),Ws=new x({props:{name:"preprocess",anchor:"transformers.CLIPImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": int = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": typing.Optional[transformers.image_utils.ChannelDimension] = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
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
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L226"}}),Ss=new j({}),Bs=new x({props:{name:"class transformers.CLIPImageProcessor",anchor:"transformers.CLIPImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": typing.Dict[str, int] = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"do_convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L58"}}),Rs=new x({props:{name:"center_crop",anchor:"transformers.CLIPImageProcessor.center_crop",parameters:[{name:"image",val:": ndarray"},{name:"size",val:": typing.Dict[str, int]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.center_crop.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to center crop.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.center_crop.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>) &#x2014;
Size of the output image in the form of a dictionary with keys <code>height</code> and <code>width</code>.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.center_crop.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L159"}}),Hs=new x({props:{name:"normalize",anchor:"transformers.CLIPImageProcessor.normalize",parameters:[{name:"image",val:": ndarray"},{name:"mean",val:": typing.Union[float, typing.List[float]]"},{name:"std",val:": typing.Union[float, typing.List[float]]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.normalize.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to normalize.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.normalize.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>) &#x2014;
Image mean.`,name:"image_mean"},{anchor:"transformers.CLIPImageProcessor.normalize.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.CLIPImageProcessor.normalize.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L203"}}),Ks=new x({props:{name:"preprocess",anchor:"transformers.CLIPImageProcessor.preprocess",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"do_resize",val:": bool = None"},{name:"size",val:": typing.Dict[str, int] = None"},{name:"resample",val:": Resampling = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": int = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"do_convert_rgb",val:": bool = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"data_format",val:": typing.Optional[transformers.image_utils.ChannelDimension] = <ChannelDimension.FIRST: 'channels_first'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
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
</ul>`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L226"}}),Gs=new x({props:{name:"rescale",anchor:"transformers.CLIPImageProcessor.rescale",parameters:[{name:"image",val:": ndarray"},{name:"scale",val:": typing.Union[int, float]"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.rescale.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to rescale.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.rescale.scale",description:`<strong>scale</strong> (<code>int</code> or <code>float</code>) &#x2014;
Scale to apply to the image.`,name:"scale"},{anchor:"transformers.CLIPImageProcessor.rescale.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L183"}}),Js=new x({props:{name:"resize",anchor:"transformers.CLIPImageProcessor.resize",parameters:[{name:"image",val:": ndarray"},{name:"size",val:": typing.Dict[str, int]"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"data_format",val:": typing.Union[str, transformers.image_utils.ChannelDimension, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPImageProcessor.resize.image",description:`<strong>image</strong> (<code>np.ndarray</code>) &#x2014;
Image to resize.`,name:"image"},{anchor:"transformers.CLIPImageProcessor.resize.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>) &#x2014;
Size of the output image.`,name:"size"},{anchor:"transformers.CLIPImageProcessor.resize.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BICUBIC</code>) &#x2014;
Resampling filter to use when resiizing the image.`,name:"resample"},{anchor:"transformers.CLIPImageProcessor.resize.data_format",description:`<strong>data_format</strong> (<code>str</code> or <code>ChannelDimension</code>, <em>optional</em>) &#x2014;
The channel dimension format of the image. If not provided, it will be the same as the input image.`,name:"data_format"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/image_processing_clip.py#L131"}}),Xs=new j({}),Ys=new x({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22"}}),Qs=new x({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),er=new x({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),or=new j({}),nr=new x({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L938"}}),ir=new x({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ao=new G({props:{$$slots:{default:[EI]},$$scope:{ctx:L}}}),Oo=new N({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[FI]},$$scope:{ctx:L}}}),lr=new x({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Vo=new G({props:{$$slots:{default:[qI]},$$scope:{ctx:L}}}),Wo=new N({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[DI]},$$scope:{ctx:L}}}),dr=new x({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),So=new G({props:{$$slots:{default:[NI]},$$scope:{ctx:L}}}),Bo=new N({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[AI]},$$scope:{ctx:L}}}),cr=new j({}),pr=new x({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L764"}}),gr=new x({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Uo=new G({props:{$$slots:{default:[OI]},$$scope:{ctx:L}}}),Ho=new N({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[VI]},$$scope:{ctx:L}}}),ur=new j({}),_r=new x({props:{name:"class transformers.CLIPTextModelWithProjection",anchor:"transformers.CLIPTextModelWithProjection",parameters:[{name:"config",val:": CLIPTextConfig"}],parametersDescription:[{anchor:"transformers.CLIPTextModelWithProjection.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L1169"}}),Ir=new x({props:{name:"forward",anchor:"transformers.CLIPTextModelWithProjection.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModelWithProjection.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Go=new G({props:{$$slots:{default:[WI]},$$scope:{ctx:L}}}),Jo=new N({props:{anchor:"transformers.CLIPTextModelWithProjection.forward.example",$$slots:{default:[SI]},$$scope:{ctx:L}}}),$r=new j({}),yr=new x({props:{name:"class transformers.CLIPVisionModelWithProjection",anchor:"transformers.CLIPVisionModelWithProjection",parameters:[{name:"config",val:": CLIPVisionConfig"}],parametersDescription:[{anchor:"transformers.CLIPVisionModelWithProjection.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L1250"}}),wr=new x({props:{name:"forward",anchor:"transformers.CLIPVisionModelWithProjection.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModelWithProjection.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Yo=new G({props:{$$slots:{default:[BI]},$$scope:{ctx:L}}}),Qo=new N({props:{anchor:"transformers.CLIPVisionModelWithProjection.forward.example",$$slots:{default:[RI]},$$scope:{ctx:L}}}),xr=new j({}),kr=new x({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L883"}}),Er=new x({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),en=new G({props:{$$slots:{default:[UI]},$$scope:{ctx:L}}}),tn=new N({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[HI]},$$scope:{ctx:L}}}),Fr=new j({}),qr=new x({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1229"}}),nn=new G({props:{$$slots:{default:[KI]},$$scope:{ctx:L}}}),Or=new x({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),sn=new G({props:{$$slots:{default:[GI]},$$scope:{ctx:L}}}),rn=new N({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[JI]},$$scope:{ctx:L}}}),Vr=new x({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),an=new G({props:{$$slots:{default:[XI]},$$scope:{ctx:L}}}),ln=new N({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[YI]},$$scope:{ctx:L}}}),Wr=new x({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),dn=new G({props:{$$slots:{default:[QI]},$$scope:{ctx:L}}}),cn=new N({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[ZI]},$$scope:{ctx:L}}}),Sr=new j({}),Br=new x({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1056"}}),Rr=new x({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),mn=new G({props:{$$slots:{default:[e$]},$$scope:{ctx:L}}}),hn=new N({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[t$]},$$scope:{ctx:L}}}),Ur=new j({}),Hr=new x({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1131"}}),Kr=new x({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),gn=new G({props:{$$slots:{default:[o$]},$$scope:{ctx:L}}}),un=new N({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[n$]},$$scope:{ctx:L}}}),Gr=new j({}),Jr=new x({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),na=new x({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),vn=new G({props:{$$slots:{default:[s$]},$$scope:{ctx:L}}}),Pn=new N({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[r$]},$$scope:{ctx:L}}}),sa=new x({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),In=new N({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[a$]},$$scope:{ctx:L}}}),ra=new x({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),yn=new N({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[i$]},$$scope:{ctx:L}}}),aa=new j({}),ia=new x({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),la=new x({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Tn=new G({props:{$$slots:{default:[l$]},$$scope:{ctx:L}}}),Ln=new N({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[d$]},$$scope:{ctx:L}}}),da=new j({}),ca=new x({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),pa=new x({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),xn=new G({props:{$$slots:{default:[c$]},$$scope:{ctx:L}}}),kn=new N({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[p$]},$$scope:{ctx:L}}}),{c(){d=s("meta"),P=p(),g=s("h1"),h=s("a"),_=s("span"),b(n.$$.fragment),c=p(),w=s("span"),Qn=i("CLIP"),so=p(),J=s("h2"),fe=s("a"),Ue=s("span"),b(M.$$.fragment),Zn=p(),Ae=s("span"),es=i("Overview"),ro=p(),oe=s("p"),ts=i("The CLIP model was proposed in "),Oe=s("a"),st=i("Learning Transferable Visual Models From Natural Language Supervision"),os=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),ao=p(),ge=s("p"),ns=i("The abstract from the paper is the following:"),io=p(),ue=s("p"),rt=s("em"),ss=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),at=p(),D=s("h2"),S=s("a"),it=s("span"),b(le.$$.fragment),rs=p(),lt=s("span"),dt=i("Usage"),lo=p(),He=s("p"),_e=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),co=p(),ne=s("p"),as=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Ke=s("a"),ct=i("CLIPFeatureExtractor"),is=i(" can be used to resize (or rescale) and normalize images for the model."),po=p(),z=s("p"),ls=i("The "),ve=s("a"),ds=i("CLIPTokenizer"),mo=i(" is used to encode the text. The "),X=s("a"),cs=i("CLIPProcessor"),Ve=i(` wraps
`),Ge=s("a"),ps=i("CLIPFeatureExtractor"),k=i(" and "),E=s("a"),va=i("CLIPTokenizer"),ho=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),pt=s("a"),Pa=i("CLIPProcessor"),U=i(" and "),mt=s("a"),ba=i("CLIPModel"),Ia=i("."),ms=p(),b(Je.$$.fragment),We=p(),H=s("p"),$a=i("This model was contributed by "),Xe=s("a"),ht=i("valhalla"),ya=i(". The original code can be found "),Ye=s("a"),hs=i("here"),Ca=i("."),ft=p(),Pe=s("h2"),fo=s("a"),Ei=s("span"),b(fs.$$.fragment),Tp=p(),Fi=s("span"),Lp=i("CLIPConfig"),Nd=p(),Y=s("div"),b(gs.$$.fragment),wp=p(),Qe=s("p"),Ta=s("a"),xp=i("CLIPConfig"),kp=i(" is the configuration class to store the configuration of a "),La=s("a"),zp=i("CLIPModel"),Mp=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),us=s("a"),jp=i("openai/clip-vit-base-patch32"),Ep=i(" architecture."),Fp=p(),gt=s("p"),qp=i("Configuration objects inherit from "),wa=s("a"),Dp=i("PretrainedConfig"),Np=i(` and can be used to control the model outputs. Read the
documentation from `),xa=s("a"),Ap=i("PretrainedConfig"),Op=i(" for more information."),Vp=p(),b(go.$$.fragment),Wp=p(),uo=s("div"),b(_s.$$.fragment),Sp=p(),vs=s("p"),Bp=i("Instantiate a "),ka=s("a"),Rp=i("CLIPConfig"),Up=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Ad=p(),ut=s("h2"),_o=s("a"),qi=s("span"),b(Ps.$$.fragment),Hp=p(),Di=s("span"),Kp=i("CLIPTextConfig"),Od=p(),de=s("div"),b(bs.$$.fragment),Gp=p(),_t=s("p"),Jp=i("This is the configuration class to store the configuration of a "),za=s("a"),Xp=i("CLIPModel"),Yp=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Is=s("a"),Qp=i("openai/clip-vit-base-patch32"),Zp=i(" architecture."),em=p(),vt=s("p"),tm=i("Configuration objects inherit from "),Ma=s("a"),om=i("PretrainedConfig"),nm=i(` and can be used to control the model outputs. Read the
documentation from `),ja=s("a"),sm=i("PretrainedConfig"),rm=i(" for more information."),am=p(),b(vo.$$.fragment),Vd=p(),Pt=s("h2"),Po=s("a"),Ni=s("span"),b($s.$$.fragment),im=p(),Ai=s("span"),lm=i("CLIPVisionConfig"),Wd=p(),ce=s("div"),b(ys.$$.fragment),dm=p(),bt=s("p"),cm=i("This is the configuration class to store the configuration of a "),Ea=s("a"),pm=i("CLIPModel"),mm=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Cs=s("a"),hm=i("openai/clip-vit-base-patch32"),fm=i(" architecture."),gm=p(),It=s("p"),um=i("Configuration objects inherit from "),Fa=s("a"),_m=i("PretrainedConfig"),vm=i(` and can be used to control the model outputs. Read the
documentation from `),qa=s("a"),Pm=i("PretrainedConfig"),bm=i(" for more information."),Im=p(),b(bo.$$.fragment),Sd=p(),$t=s("h2"),Io=s("a"),Oi=s("span"),b(Ts.$$.fragment),$m=p(),Vi=s("span"),ym=i("CLIPTokenizer"),Bd=p(),O=s("div"),b(Ls.$$.fragment),Cm=p(),Wi=s("p"),Tm=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Lm=p(),ws=s("p"),wm=i("This tokenizer inherits from "),Da=s("a"),xm=i("PreTrainedTokenizer"),km=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),zm=p(),be=s("div"),b(xs.$$.fragment),Mm=p(),Si=s("p"),jm=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Em=p(),Bi=s("ul"),Na=s("li"),Fm=i("single sequence: "),Ri=s("code"),qm=i("<|startoftext|> X <|endoftext|>"),Dm=p(),Ui=s("p"),Nm=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Am=p(),$o=s("div"),b(ks.$$.fragment),Om=p(),zs=s("p"),Vm=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Hi=s("code"),Wm=i("prepare_for_model"),Sm=i(" method."),Bm=p(),yo=s("div"),b(Ms.$$.fragment),Rm=p(),Ki=s("p"),Um=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Hm=p(),Aa=s("div"),b(js.$$.fragment),Rd=p(),yt=s("h2"),Co=s("a"),Gi=s("span"),b(Es.$$.fragment),Km=p(),Ji=s("span"),Gm=i("CLIPTokenizerFast"),Ud=p(),Q=s("div"),b(Fs.$$.fragment),Jm=p(),qs=s("p"),Xm=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Xi=s("em"),Ym=i("tokenizers"),Qm=i(` library). Based on byte-level
Byte-Pair-Encoding.`),Zm=p(),Ds=s("p"),eh=i("This tokenizer inherits from "),Oa=s("a"),th=i("PreTrainedTokenizerFast"),oh=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),nh=p(),Ie=s("div"),b(Ns.$$.fragment),sh=p(),Yi=s("p"),rh=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),ah=p(),Qi=s("ul"),Va=s("li"),ih=i("single sequence: "),Zi=s("code"),lh=i("<|startoftext|> X <|endoftext|>"),dh=p(),el=s("p"),ch=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),ph=p(),To=s("div"),b(As.$$.fragment),mh=p(),tl=s("p"),hh=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Hd=p(),Ct=s("h2"),Lo=s("a"),ol=s("span"),b(Os.$$.fragment),fh=p(),nl=s("span"),gh=i("CLIPImageProcessor"),Kd=p(),Se=s("div"),b(Vs.$$.fragment),uh=p(),sl=s("p"),_h=i("Constructs a CLIP image processor."),vh=p(),wo=s("div"),b(Ws.$$.fragment),Ph=p(),rl=s("p"),bh=i("Preprocess an image or batch of images."),Gd=p(),Tt=s("h2"),xo=s("a"),al=s("span"),b(Ss.$$.fragment),Ih=p(),il=s("span"),$h=i("CLIPFeatureExtractor"),Jd=p(),V=s("div"),b(Bs.$$.fragment),yh=p(),ll=s("p"),Ch=i("Constructs a CLIP image processor."),Th=p(),ko=s("div"),b(Rs.$$.fragment),Lh=p(),Us=s("p"),wh=i(`Center crop an image. If the image is too small to be cropped to the size given, it will be padded (so the
returned result will always be of size `),dl=s("code"),xh=i("size"),kh=i(")."),zh=p(),zo=s("div"),b(Hs.$$.fragment),Mh=p(),cl=s("p"),jh=i("Normalize an image. image = (image - image_mean) / image_std."),Eh=p(),Mo=s("div"),b(Ks.$$.fragment),Fh=p(),pl=s("p"),qh=i("Preprocess an image or batch of images."),Dh=p(),jo=s("div"),b(Gs.$$.fragment),Nh=p(),ml=s("p"),Ah=i("Rescale an image by a scale factor. image = image * scale."),Oh=p(),Eo=s("div"),b(Js.$$.fragment),Vh=p(),hl=s("p"),Wh=i(`Resize an image. The shortest edge of the image is resized to size[\u201Cshortest_edge\u201D], with the longest edge
resized to keep the input aspect ratio.`),Xd=p(),Lt=s("h2"),Fo=s("a"),fl=s("span"),b(Xs.$$.fragment),Sh=p(),gl=s("span"),Bh=i("CLIPProcessor"),Yd=p(),Z=s("div"),b(Ys.$$.fragment),Rh=p(),ul=s("p"),Uh=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Hh=p(),se=s("p"),Wa=s("a"),Kh=i("CLIPProcessor"),Gh=i(" offers all the functionalities of "),Sa=s("a"),Jh=i("CLIPFeatureExtractor"),Xh=i(" and "),Ba=s("a"),Yh=i("CLIPTokenizerFast"),Qh=i(`. See the
`),_l=s("code"),Zh=i("__call__()"),ef=i(" and "),Ra=s("a"),tf=i("decode()"),of=i(" for more information."),nf=p(),qo=s("div"),b(Qs.$$.fragment),sf=p(),Zs=s("p"),rf=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ua=s("a"),af=i("batch_decode()"),lf=i(`. Please
refer to the docstring of this method for more information.`),df=p(),Do=s("div"),b(er.$$.fragment),cf=p(),tr=s("p"),pf=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ha=s("a"),mf=i("decode()"),hf=i(`. Please refer to
the docstring of this method for more information.`),Qd=p(),wt=s("h2"),No=s("a"),vl=s("span"),b(or.$$.fragment),ff=p(),Pl=s("span"),gf=i("CLIPModel"),Zd=p(),B=s("div"),b(nr.$$.fragment),uf=p(),sr=s("p"),_f=i("This model inherits from "),Ka=s("a"),vf=i("PreTrainedModel"),Pf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bf=p(),rr=s("p"),If=i("This model is also a PyTorch "),ar=s("a"),$f=i("torch.nn.Module"),yf=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cf=p(),$e=s("div"),b(ir.$$.fragment),Tf=p(),xt=s("p"),Lf=i("The "),Ga=s("a"),wf=i("CLIPModel"),xf=i(" forward method, overrides the "),bl=s("code"),kf=i("__call__"),zf=i(" special method."),Mf=p(),b(Ao.$$.fragment),jf=p(),b(Oo.$$.fragment),Ef=p(),ye=s("div"),b(lr.$$.fragment),Ff=p(),kt=s("p"),qf=i("The "),Ja=s("a"),Df=i("CLIPModel"),Nf=i(" forward method, overrides the "),Il=s("code"),Af=i("__call__"),Of=i(" special method."),Vf=p(),b(Vo.$$.fragment),Wf=p(),b(Wo.$$.fragment),Sf=p(),Ce=s("div"),b(dr.$$.fragment),Bf=p(),zt=s("p"),Rf=i("The "),Xa=s("a"),Uf=i("CLIPModel"),Hf=i(" forward method, overrides the "),$l=s("code"),Kf=i("__call__"),Gf=i(" special method."),Jf=p(),b(So.$$.fragment),Xf=p(),b(Bo.$$.fragment),ec=p(),Mt=s("h2"),Ro=s("a"),yl=s("span"),b(cr.$$.fragment),Yf=p(),Cl=s("span"),Qf=i("CLIPTextModel"),tc=p(),pe=s("div"),b(pr.$$.fragment),Zf=p(),mr=s("p"),eg=i(`The text model from CLIP without any head or projection on top.
This model inherits from `),Ya=s("a"),tg=i("PreTrainedModel"),og=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ng=p(),hr=s("p"),sg=i("This model is also a PyTorch "),fr=s("a"),rg=i("torch.nn.Module"),ag=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ig=p(),Te=s("div"),b(gr.$$.fragment),lg=p(),jt=s("p"),dg=i("The "),Qa=s("a"),cg=i("CLIPTextModel"),pg=i(" forward method, overrides the "),Tl=s("code"),mg=i("__call__"),hg=i(" special method."),fg=p(),b(Uo.$$.fragment),gg=p(),b(Ho.$$.fragment),oc=p(),Et=s("h2"),Ko=s("a"),Ll=s("span"),b(ur.$$.fragment),ug=p(),wl=s("span"),_g=i("CLIPTextModelWithProjection"),nc=p(),ee=s("div"),b(_r.$$.fragment),vg=p(),xl=s("p"),Pg=i("CLIP Text Model with a projection layer on top (a linear layer on top of the pooled output)."),bg=p(),vr=s("p"),Ig=i("This model inherits from "),Za=s("a"),$g=i("PreTrainedModel"),yg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cg=p(),Pr=s("p"),Tg=i("This model is also a PyTorch "),br=s("a"),Lg=i("torch.nn.Module"),wg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xg=p(),Le=s("div"),b(Ir.$$.fragment),kg=p(),Ft=s("p"),zg=i("The "),ei=s("a"),Mg=i("CLIPTextModelWithProjection"),jg=i(" forward method, overrides the "),kl=s("code"),Eg=i("__call__"),Fg=i(" special method."),qg=p(),b(Go.$$.fragment),Dg=p(),b(Jo.$$.fragment),sc=p(),qt=s("h2"),Xo=s("a"),zl=s("span"),b($r.$$.fragment),Ng=p(),Ml=s("span"),Ag=i("CLIPVisionModelWithProjection"),rc=p(),te=s("div"),b(yr.$$.fragment),Og=p(),jl=s("p"),Vg=i("CLIP Vision Model with a projection layer on top (a linear layer on top of the pooled output)."),Wg=p(),Cr=s("p"),Sg=i("This model inherits from "),ti=s("a"),Bg=i("PreTrainedModel"),Rg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ug=p(),Tr=s("p"),Hg=i("This model is also a PyTorch "),Lr=s("a"),Kg=i("torch.nn.Module"),Gg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jg=p(),we=s("div"),b(wr.$$.fragment),Xg=p(),Dt=s("p"),Yg=i("The "),oi=s("a"),Qg=i("CLIPVisionModelWithProjection"),Zg=i(" forward method, overrides the "),El=s("code"),eu=i("__call__"),tu=i(" special method."),ou=p(),b(Yo.$$.fragment),nu=p(),b(Qo.$$.fragment),ac=p(),Nt=s("h2"),Zo=s("a"),Fl=s("span"),b(xr.$$.fragment),su=p(),ql=s("span"),ru=i("CLIPVisionModel"),ic=p(),me=s("div"),b(kr.$$.fragment),au=p(),zr=s("p"),iu=i(`The vision model from CLIP without any head or projection on top.
This model inherits from `),ni=s("a"),lu=i("PreTrainedModel"),du=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu=p(),Mr=s("p"),pu=i("This model is also a PyTorch "),jr=s("a"),mu=i("torch.nn.Module"),hu=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu=p(),xe=s("div"),b(Er.$$.fragment),gu=p(),At=s("p"),uu=i("The "),si=s("a"),_u=i("CLIPVisionModel"),vu=i(" forward method, overrides the "),Dl=s("code"),Pu=i("__call__"),bu=i(" special method."),Iu=p(),b(en.$$.fragment),$u=p(),b(tn.$$.fragment),lc=p(),Ot=s("h2"),on=s("a"),Nl=s("span"),b(Fr.$$.fragment),yu=p(),Al=s("span"),Cu=i("TFCLIPModel"),dc=p(),W=s("div"),b(qr.$$.fragment),Tu=p(),Dr=s("p"),Lu=i("This model inherits from "),ri=s("a"),wu=i("TFPreTrainedModel"),xu=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku=p(),Nr=s("p"),zu=i("This model is also a "),Ar=s("a"),Mu=i("tf.keras.Model"),ju=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Eu=p(),b(nn.$$.fragment),Fu=p(),ke=s("div"),b(Or.$$.fragment),qu=p(),Vt=s("p"),Du=i("The "),ai=s("a"),Nu=i("TFCLIPModel"),Au=i(" forward method, overrides the "),Ol=s("code"),Ou=i("__call__"),Vu=i(" special method."),Wu=p(),b(sn.$$.fragment),Su=p(),b(rn.$$.fragment),Bu=p(),ze=s("div"),b(Vr.$$.fragment),Ru=p(),Wt=s("p"),Uu=i("The "),ii=s("a"),Hu=i("TFCLIPModel"),Ku=i(" forward method, overrides the "),Vl=s("code"),Gu=i("__call__"),Ju=i(" special method."),Xu=p(),b(an.$$.fragment),Yu=p(),b(ln.$$.fragment),Qu=p(),Me=s("div"),b(Wr.$$.fragment),Zu=p(),St=s("p"),e_=i("The "),li=s("a"),t_=i("TFCLIPModel"),o_=i(" forward method, overrides the "),Wl=s("code"),n_=i("__call__"),s_=i(" special method."),r_=p(),b(dn.$$.fragment),a_=p(),b(cn.$$.fragment),cc=p(),Bt=s("h2"),pn=s("a"),Sl=s("span"),b(Sr.$$.fragment),i_=p(),Bl=s("span"),l_=i("TFCLIPTextModel"),pc=p(),Rt=s("div"),b(Br.$$.fragment),d_=p(),je=s("div"),b(Rr.$$.fragment),c_=p(),Ut=s("p"),p_=i("The "),di=s("a"),m_=i("TFCLIPTextModel"),h_=i(" forward method, overrides the "),Rl=s("code"),f_=i("__call__"),g_=i(" special method."),u_=p(),b(mn.$$.fragment),__=p(),b(hn.$$.fragment),mc=p(),Ht=s("h2"),fn=s("a"),Ul=s("span"),b(Ur.$$.fragment),v_=p(),Hl=s("span"),P_=i("TFCLIPVisionModel"),hc=p(),Kt=s("div"),b(Hr.$$.fragment),b_=p(),Ee=s("div"),b(Kr.$$.fragment),I_=p(),Gt=s("p"),$_=i("The "),ci=s("a"),y_=i("TFCLIPVisionModel"),C_=i(" forward method, overrides the "),Kl=s("code"),T_=i("__call__"),L_=i(" special method."),w_=p(),b(gn.$$.fragment),x_=p(),b(un.$$.fragment),fc=p(),Jt=s("h2"),_n=s("a"),Gl=s("span"),b(Gr.$$.fragment),k_=p(),Jl=s("span"),z_=i("FlaxCLIPModel"),gc=p(),F=s("div"),b(Jr.$$.fragment),M_=p(),Xr=s("p"),j_=i("This model inherits from "),pi=s("a"),E_=i("FlaxPreTrainedModel"),F_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),q_=p(),Yr=s("p"),D_=i("This model is also a Flax Linen "),Qr=s("a"),N_=i("flax.linen.Module"),A_=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),O_=p(),Xl=s("p"),V_=i("Finally, this model supports inherent JAX features such as:"),W_=p(),Be=s("ul"),Yl=s("li"),Zr=s("a"),S_=i("Just-In-Time (JIT) compilation"),B_=p(),Ql=s("li"),ea=s("a"),R_=i("Automatic Differentiation"),U_=p(),Zl=s("li"),ta=s("a"),H_=i("Vectorization"),K_=p(),ed=s("li"),oa=s("a"),G_=i("Parallelization"),J_=p(),Fe=s("div"),b(na.$$.fragment),X_=p(),Xt=s("p"),Y_=i("The "),td=s("code"),Q_=i("FlaxCLIPPreTrainedModel"),Z_=i(" forward method, overrides the "),od=s("code"),ev=i("__call__"),tv=i(" special method."),ov=p(),b(vn.$$.fragment),nv=p(),b(Pn.$$.fragment),sv=p(),bn=s("div"),b(sa.$$.fragment),rv=p(),b(In.$$.fragment),av=p(),$n=s("div"),b(ra.$$.fragment),iv=p(),b(yn.$$.fragment),uc=p(),Yt=s("h2"),Cn=s("a"),nd=s("span"),b(aa.$$.fragment),lv=p(),sd=s("span"),dv=i("FlaxCLIPTextModel"),_c=p(),Qt=s("div"),b(ia.$$.fragment),cv=p(),qe=s("div"),b(la.$$.fragment),pv=p(),Zt=s("p"),mv=i("The "),rd=s("code"),hv=i("FlaxCLIPTextPreTrainedModel"),fv=i(" forward method, overrides the "),ad=s("code"),gv=i("__call__"),uv=i(" special method."),_v=p(),b(Tn.$$.fragment),vv=p(),b(Ln.$$.fragment),vc=p(),eo=s("h2"),wn=s("a"),id=s("span"),b(da.$$.fragment),Pv=p(),ld=s("span"),bv=i("FlaxCLIPVisionModel"),Pc=p(),to=s("div"),b(ca.$$.fragment),Iv=p(),De=s("div"),b(pa.$$.fragment),$v=p(),oo=s("p"),yv=i("The "),dd=s("code"),Cv=i("FlaxCLIPVisionPreTrainedModel"),Tv=i(" forward method, overrides the "),cd=s("code"),Lv=i("__call__"),wv=i(" special method."),xv=p(),b(xn.$$.fragment),kv=p(),b(kn.$$.fragment),this.h()},l(t){const u=xI('[data-svelte="svelte-1phssyn"]',document.head);d=r(u,"META",{name:!0,content:!0}),u.forEach(o),P=m(t),g=r(t,"H1",{class:!0});var ma=a(g);h=r(ma,"A",{id:!0,class:!0,href:!0});var pd=a(h);_=r(pd,"SPAN",{});var md=a(_);I(n.$$.fragment,md),md.forEach(o),pd.forEach(o),c=m(ma),w=r(ma,"SPAN",{});var hd=a(w);Qn=l(hd,"CLIP"),hd.forEach(o),ma.forEach(o),so=m(t),J=r(t,"H2",{class:!0});var ha=a(J);fe=r(ha,"A",{id:!0,class:!0,href:!0});var fd=a(fe);Ue=r(fd,"SPAN",{});var gd=a(Ue);I(M.$$.fragment,gd),gd.forEach(o),fd.forEach(o),Zn=m(ha),Ae=r(ha,"SPAN",{});var ud=a(Ae);es=l(ud,"Overview"),ud.forEach(o),ha.forEach(o),ro=m(t),oe=r(t,"P",{});var fa=a(oe);ts=l(fa,"The CLIP model was proposed in "),Oe=r(fa,"A",{href:!0,rel:!0});var _d=a(Oe);st=l(_d,"Learning Transferable Visual Models From Natural Language Supervision"),_d.forEach(o),os=l(fa,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),fa.forEach(o),ao=m(t),ge=r(t,"P",{});var vd=a(ge);ns=l(vd,"The abstract from the paper is the following:"),vd.forEach(o),io=m(t),ue=r(t,"P",{});var Pd=a(ue);rt=r(Pd,"EM",{});var bd=a(rt);ss=l(bd,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),bd.forEach(o),Pd.forEach(o),at=m(t),D=r(t,"H2",{class:!0});var ga=a(D);S=r(ga,"A",{id:!0,class:!0,href:!0});var Id=a(S);it=r(Id,"SPAN",{});var $d=a(it);I(le.$$.fragment,$d),$d.forEach(o),Id.forEach(o),rs=m(ga),lt=r(ga,"SPAN",{});var yd=a(lt);dt=l(yd,"Usage"),yd.forEach(o),ga.forEach(o),lo=m(t),He=r(t,"P",{});var Cd=a(He);_e=l(Cd,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Cd.forEach(o),co=m(t),ne=r(t,"P",{});var ua=a(ne);as=l(ua,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Ke=r(ua,"A",{href:!0});var Td=a(Ke);ct=l(Td,"CLIPFeatureExtractor"),Td.forEach(o),is=l(ua," can be used to resize (or rescale) and normalize images for the model."),ua.forEach(o),po=m(t),z=r(t,"P",{});var R=a(z);ls=l(R,"The "),ve=r(R,"A",{href:!0});var Ld=a(ve);ds=l(Ld,"CLIPTokenizer"),Ld.forEach(o),mo=l(R," is used to encode the text. The "),X=r(R,"A",{href:!0});var wd=a(X);cs=l(wd,"CLIPProcessor"),wd.forEach(o),Ve=l(R,` wraps
`),Ge=r(R,"A",{href:!0});var xd=a(Ge);ps=l(xd,"CLIPFeatureExtractor"),xd.forEach(o),k=l(R," and "),E=r(R,"A",{href:!0});var kd=a(E);va=l(kd,"CLIPTokenizer"),kd.forEach(o),ho=l(R,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),pt=r(R,"A",{href:!0});var zd=a(pt);Pa=l(zd,"CLIPProcessor"),zd.forEach(o),U=l(R," and "),mt=r(R,"A",{href:!0});var Md=a(mt);ba=l(Md,"CLIPModel"),Md.forEach(o),Ia=l(R,"."),R.forEach(o),ms=m(t),I(Je.$$.fragment,t),We=m(t),H=r(t,"P",{});var no=a(H);$a=l(no,"This model was contributed by "),Xe=r(no,"A",{href:!0,rel:!0});var jd=a(Xe);ht=l(jd,"valhalla"),jd.forEach(o),ya=l(no,". The original code can be found "),Ye=r(no,"A",{href:!0,rel:!0});var Ed=a(Ye);hs=l(Ed,"here"),Ed.forEach(o),Ca=l(no,"."),no.forEach(o),ft=m(t),Pe=r(t,"H2",{class:!0});var _a=a(Pe);fo=r(_a,"A",{id:!0,class:!0,href:!0});var Fd=a(fo);Ei=r(Fd,"SPAN",{});var qd=a(Ei);I(fs.$$.fragment,qd),qd.forEach(o),Fd.forEach(o),Tp=m(_a),Fi=r(_a,"SPAN",{});var Dd=a(Fi);Lp=l(Dd,"CLIPConfig"),Dd.forEach(o),_a.forEach(o),Nd=m(t),Y=r(t,"DIV",{class:!0});var he=a(Y);I(gs.$$.fragment,he),wp=m(he),Qe=r(he,"P",{});var Ze=a(Qe);Ta=r(Ze,"A",{href:!0});var jv=a(Ta);xp=l(jv,"CLIPConfig"),jv.forEach(o),kp=l(Ze," is the configuration class to store the configuration of a "),La=r(Ze,"A",{href:!0});var Ev=a(La);zp=l(Ev,"CLIPModel"),Ev.forEach(o),Mp=l(Ze,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs. Instantiating a
configuration with the defaults will yield a similar configuration to that of the CLIP
`),us=r(Ze,"A",{href:!0,rel:!0});var Fv=a(us);jp=l(Fv,"openai/clip-vit-base-patch32"),Fv.forEach(o),Ep=l(Ze," architecture."),Ze.forEach(o),Fp=m(he),gt=r(he,"P",{});var mi=a(gt);qp=l(mi,"Configuration objects inherit from "),wa=r(mi,"A",{href:!0});var qv=a(wa);Dp=l(qv,"PretrainedConfig"),qv.forEach(o),Np=l(mi,` and can be used to control the model outputs. Read the
documentation from `),xa=r(mi,"A",{href:!0});var Dv=a(xa);Ap=l(Dv,"PretrainedConfig"),Dv.forEach(o),Op=l(mi," for more information."),mi.forEach(o),Vp=m(he),I(go.$$.fragment,he),Wp=m(he),uo=r(he,"DIV",{class:!0});var Ic=a(uo);I(_s.$$.fragment,Ic),Sp=m(Ic),vs=r(Ic,"P",{});var $c=a(vs);Bp=l($c,"Instantiate a "),ka=r($c,"A",{href:!0});var Nv=a(ka);Rp=l(Nv,"CLIPConfig"),Nv.forEach(o),Up=l($c,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),$c.forEach(o),Ic.forEach(o),he.forEach(o),Ad=m(t),ut=r(t,"H2",{class:!0});var yc=a(ut);_o=r(yc,"A",{id:!0,class:!0,href:!0});var Av=a(_o);qi=r(Av,"SPAN",{});var Ov=a(qi);I(Ps.$$.fragment,Ov),Ov.forEach(o),Av.forEach(o),Hp=m(yc),Di=r(yc,"SPAN",{});var Vv=a(Di);Kp=l(Vv,"CLIPTextConfig"),Vv.forEach(o),yc.forEach(o),Od=m(t),de=r(t,"DIV",{class:!0});var zn=a(de);I(bs.$$.fragment,zn),Gp=m(zn),_t=r(zn,"P",{});var hi=a(_t);Jp=l(hi,"This is the configuration class to store the configuration of a "),za=r(hi,"A",{href:!0});var Wv=a(za);Xp=l(Wv,"CLIPModel"),Wv.forEach(o),Yp=l(hi,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Is=r(hi,"A",{href:!0,rel:!0});var Sv=a(Is);Qp=l(Sv,"openai/clip-vit-base-patch32"),Sv.forEach(o),Zp=l(hi," architecture."),hi.forEach(o),em=m(zn),vt=r(zn,"P",{});var fi=a(vt);tm=l(fi,"Configuration objects inherit from "),Ma=r(fi,"A",{href:!0});var Bv=a(Ma);om=l(Bv,"PretrainedConfig"),Bv.forEach(o),nm=l(fi,` and can be used to control the model outputs. Read the
documentation from `),ja=r(fi,"A",{href:!0});var Rv=a(ja);sm=l(Rv,"PretrainedConfig"),Rv.forEach(o),rm=l(fi," for more information."),fi.forEach(o),am=m(zn),I(vo.$$.fragment,zn),zn.forEach(o),Vd=m(t),Pt=r(t,"H2",{class:!0});var Cc=a(Pt);Po=r(Cc,"A",{id:!0,class:!0,href:!0});var Uv=a(Po);Ni=r(Uv,"SPAN",{});var Hv=a(Ni);I($s.$$.fragment,Hv),Hv.forEach(o),Uv.forEach(o),im=m(Cc),Ai=r(Cc,"SPAN",{});var Kv=a(Ai);lm=l(Kv,"CLIPVisionConfig"),Kv.forEach(o),Cc.forEach(o),Wd=m(t),ce=r(t,"DIV",{class:!0});var Mn=a(ce);I(ys.$$.fragment,Mn),dm=m(Mn),bt=r(Mn,"P",{});var gi=a(bt);cm=l(gi,"This is the configuration class to store the configuration of a "),Ea=r(gi,"A",{href:!0});var Gv=a(Ea);pm=l(Gv,"CLIPModel"),Gv.forEach(o),mm=l(gi,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Cs=r(gi,"A",{href:!0,rel:!0});var Jv=a(Cs);hm=l(Jv,"openai/clip-vit-base-patch32"),Jv.forEach(o),fm=l(gi," architecture."),gi.forEach(o),gm=m(Mn),It=r(Mn,"P",{});var ui=a(It);um=l(ui,"Configuration objects inherit from "),Fa=r(ui,"A",{href:!0});var Xv=a(Fa);_m=l(Xv,"PretrainedConfig"),Xv.forEach(o),vm=l(ui,` and can be used to control the model outputs. Read the
documentation from `),qa=r(ui,"A",{href:!0});var Yv=a(qa);Pm=l(Yv,"PretrainedConfig"),Yv.forEach(o),bm=l(ui," for more information."),ui.forEach(o),Im=m(Mn),I(bo.$$.fragment,Mn),Mn.forEach(o),Sd=m(t),$t=r(t,"H2",{class:!0});var Tc=a($t);Io=r(Tc,"A",{id:!0,class:!0,href:!0});var Qv=a(Io);Oi=r(Qv,"SPAN",{});var Zv=a(Oi);I(Ts.$$.fragment,Zv),Zv.forEach(o),Qv.forEach(o),$m=m(Tc),Vi=r(Tc,"SPAN",{});var eP=a(Vi);ym=l(eP,"CLIPTokenizer"),eP.forEach(o),Tc.forEach(o),Bd=m(t),O=r(t,"DIV",{class:!0});var re=a(O);I(Ls.$$.fragment,re),Cm=m(re),Wi=r(re,"P",{});var tP=a(Wi);Tm=l(tP,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),tP.forEach(o),Lm=m(re),ws=r(re,"P",{});var Lc=a(ws);wm=l(Lc,"This tokenizer inherits from "),Da=r(Lc,"A",{href:!0});var oP=a(Da);xm=l(oP,"PreTrainedTokenizer"),oP.forEach(o),km=l(Lc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Lc.forEach(o),zm=m(re),be=r(re,"DIV",{class:!0});var jn=a(be);I(xs.$$.fragment,jn),Mm=m(jn),Si=r(jn,"P",{});var nP=a(Si);jm=l(nP,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),nP.forEach(o),Em=m(jn),Bi=r(jn,"UL",{});var sP=a(Bi);Na=r(sP,"LI",{});var zv=a(Na);Fm=l(zv,"single sequence: "),Ri=r(zv,"CODE",{});var rP=a(Ri);qm=l(rP,"<|startoftext|> X <|endoftext|>"),rP.forEach(o),zv.forEach(o),sP.forEach(o),Dm=m(jn),Ui=r(jn,"P",{});var aP=a(Ui);Nm=l(aP,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),aP.forEach(o),jn.forEach(o),Am=m(re),$o=r(re,"DIV",{class:!0});var wc=a($o);I(ks.$$.fragment,wc),Om=m(wc),zs=r(wc,"P",{});var xc=a(zs);Vm=l(xc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Hi=r(xc,"CODE",{});var iP=a(Hi);Wm=l(iP,"prepare_for_model"),iP.forEach(o),Sm=l(xc," method."),xc.forEach(o),wc.forEach(o),Bm=m(re),yo=r(re,"DIV",{class:!0});var kc=a(yo);I(Ms.$$.fragment,kc),Rm=m(kc),Ki=r(kc,"P",{});var lP=a(Ki);Um=l(lP,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),lP.forEach(o),kc.forEach(o),Hm=m(re),Aa=r(re,"DIV",{class:!0});var dP=a(Aa);I(js.$$.fragment,dP),dP.forEach(o),re.forEach(o),Rd=m(t),yt=r(t,"H2",{class:!0});var zc=a(yt);Co=r(zc,"A",{id:!0,class:!0,href:!0});var cP=a(Co);Gi=r(cP,"SPAN",{});var pP=a(Gi);I(Es.$$.fragment,pP),pP.forEach(o),cP.forEach(o),Km=m(zc),Ji=r(zc,"SPAN",{});var mP=a(Ji);Gm=l(mP,"CLIPTokenizerFast"),mP.forEach(o),zc.forEach(o),Ud=m(t),Q=r(t,"DIV",{class:!0});var et=a(Q);I(Fs.$$.fragment,et),Jm=m(et),qs=r(et,"P",{});var Mc=a(qs);Xm=l(Mc,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Xi=r(Mc,"EM",{});var hP=a(Xi);Ym=l(hP,"tokenizers"),hP.forEach(o),Qm=l(Mc,` library). Based on byte-level
Byte-Pair-Encoding.`),Mc.forEach(o),Zm=m(et),Ds=r(et,"P",{});var jc=a(Ds);eh=l(jc,"This tokenizer inherits from "),Oa=r(jc,"A",{href:!0});var fP=a(Oa);th=l(fP,"PreTrainedTokenizerFast"),fP.forEach(o),oh=l(jc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),jc.forEach(o),nh=m(et),Ie=r(et,"DIV",{class:!0});var En=a(Ie);I(Ns.$$.fragment,En),sh=m(En),Yi=r(En,"P",{});var gP=a(Yi);rh=l(gP,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),gP.forEach(o),ah=m(En),Qi=r(En,"UL",{});var uP=a(Qi);Va=r(uP,"LI",{});var Mv=a(Va);ih=l(Mv,"single sequence: "),Zi=r(Mv,"CODE",{});var _P=a(Zi);lh=l(_P,"<|startoftext|> X <|endoftext|>"),_P.forEach(o),Mv.forEach(o),uP.forEach(o),dh=m(En),el=r(En,"P",{});var vP=a(el);ch=l(vP,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),vP.forEach(o),En.forEach(o),ph=m(et),To=r(et,"DIV",{class:!0});var Ec=a(To);I(As.$$.fragment,Ec),mh=m(Ec),tl=r(Ec,"P",{});var PP=a(tl);hh=l(PP,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),PP.forEach(o),Ec.forEach(o),et.forEach(o),Hd=m(t),Ct=r(t,"H2",{class:!0});var Fc=a(Ct);Lo=r(Fc,"A",{id:!0,class:!0,href:!0});var bP=a(Lo);ol=r(bP,"SPAN",{});var IP=a(ol);I(Os.$$.fragment,IP),IP.forEach(o),bP.forEach(o),fh=m(Fc),nl=r(Fc,"SPAN",{});var $P=a(nl);gh=l($P,"CLIPImageProcessor"),$P.forEach(o),Fc.forEach(o),Kd=m(t),Se=r(t,"DIV",{class:!0});var _i=a(Se);I(Vs.$$.fragment,_i),uh=m(_i),sl=r(_i,"P",{});var yP=a(sl);_h=l(yP,"Constructs a CLIP image processor."),yP.forEach(o),vh=m(_i),wo=r(_i,"DIV",{class:!0});var qc=a(wo);I(Ws.$$.fragment,qc),Ph=m(qc),rl=r(qc,"P",{});var CP=a(rl);bh=l(CP,"Preprocess an image or batch of images."),CP.forEach(o),qc.forEach(o),_i.forEach(o),Gd=m(t),Tt=r(t,"H2",{class:!0});var Dc=a(Tt);xo=r(Dc,"A",{id:!0,class:!0,href:!0});var TP=a(xo);al=r(TP,"SPAN",{});var LP=a(al);I(Ss.$$.fragment,LP),LP.forEach(o),TP.forEach(o),Ih=m(Dc),il=r(Dc,"SPAN",{});var wP=a(il);$h=l(wP,"CLIPFeatureExtractor"),wP.forEach(o),Dc.forEach(o),Jd=m(t),V=r(t,"DIV",{class:!0});var ae=a(V);I(Bs.$$.fragment,ae),yh=m(ae),ll=r(ae,"P",{});var xP=a(ll);Ch=l(xP,"Constructs a CLIP image processor."),xP.forEach(o),Th=m(ae),ko=r(ae,"DIV",{class:!0});var Nc=a(ko);I(Rs.$$.fragment,Nc),Lh=m(Nc),Us=r(Nc,"P",{});var Ac=a(Us);wh=l(Ac,`Center crop an image. If the image is too small to be cropped to the size given, it will be padded (so the
returned result will always be of size `),dl=r(Ac,"CODE",{});var kP=a(dl);xh=l(kP,"size"),kP.forEach(o),kh=l(Ac,")."),Ac.forEach(o),Nc.forEach(o),zh=m(ae),zo=r(ae,"DIV",{class:!0});var Oc=a(zo);I(Hs.$$.fragment,Oc),Mh=m(Oc),cl=r(Oc,"P",{});var zP=a(cl);jh=l(zP,"Normalize an image. image = (image - image_mean) / image_std."),zP.forEach(o),Oc.forEach(o),Eh=m(ae),Mo=r(ae,"DIV",{class:!0});var Vc=a(Mo);I(Ks.$$.fragment,Vc),Fh=m(Vc),pl=r(Vc,"P",{});var MP=a(pl);qh=l(MP,"Preprocess an image or batch of images."),MP.forEach(o),Vc.forEach(o),Dh=m(ae),jo=r(ae,"DIV",{class:!0});var Wc=a(jo);I(Gs.$$.fragment,Wc),Nh=m(Wc),ml=r(Wc,"P",{});var jP=a(ml);Ah=l(jP,"Rescale an image by a scale factor. image = image * scale."),jP.forEach(o),Wc.forEach(o),Oh=m(ae),Eo=r(ae,"DIV",{class:!0});var Sc=a(Eo);I(Js.$$.fragment,Sc),Vh=m(Sc),hl=r(Sc,"P",{});var EP=a(hl);Wh=l(EP,`Resize an image. The shortest edge of the image is resized to size[\u201Cshortest_edge\u201D], with the longest edge
resized to keep the input aspect ratio.`),EP.forEach(o),Sc.forEach(o),ae.forEach(o),Xd=m(t),Lt=r(t,"H2",{class:!0});var Bc=a(Lt);Fo=r(Bc,"A",{id:!0,class:!0,href:!0});var FP=a(Fo);fl=r(FP,"SPAN",{});var qP=a(fl);I(Xs.$$.fragment,qP),qP.forEach(o),FP.forEach(o),Sh=m(Bc),gl=r(Bc,"SPAN",{});var DP=a(gl);Bh=l(DP,"CLIPProcessor"),DP.forEach(o),Bc.forEach(o),Yd=m(t),Z=r(t,"DIV",{class:!0});var tt=a(Z);I(Ys.$$.fragment,tt),Rh=m(tt),ul=r(tt,"P",{});var NP=a(ul);Uh=l(NP,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),NP.forEach(o),Hh=m(tt),se=r(tt,"P",{});var Re=a(se);Wa=r(Re,"A",{href:!0});var AP=a(Wa);Kh=l(AP,"CLIPProcessor"),AP.forEach(o),Gh=l(Re," offers all the functionalities of "),Sa=r(Re,"A",{href:!0});var OP=a(Sa);Jh=l(OP,"CLIPFeatureExtractor"),OP.forEach(o),Xh=l(Re," and "),Ba=r(Re,"A",{href:!0});var VP=a(Ba);Yh=l(VP,"CLIPTokenizerFast"),VP.forEach(o),Qh=l(Re,`. See the
`),_l=r(Re,"CODE",{});var WP=a(_l);Zh=l(WP,"__call__()"),WP.forEach(o),ef=l(Re," and "),Ra=r(Re,"A",{href:!0});var SP=a(Ra);tf=l(SP,"decode()"),SP.forEach(o),of=l(Re," for more information."),Re.forEach(o),nf=m(tt),qo=r(tt,"DIV",{class:!0});var Rc=a(qo);I(Qs.$$.fragment,Rc),sf=m(Rc),Zs=r(Rc,"P",{});var Uc=a(Zs);rf=l(Uc,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ua=r(Uc,"A",{href:!0});var BP=a(Ua);af=l(BP,"batch_decode()"),BP.forEach(o),lf=l(Uc,`. Please
refer to the docstring of this method for more information.`),Uc.forEach(o),Rc.forEach(o),df=m(tt),Do=r(tt,"DIV",{class:!0});var Hc=a(Do);I(er.$$.fragment,Hc),cf=m(Hc),tr=r(Hc,"P",{});var Kc=a(tr);pf=l(Kc,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ha=r(Kc,"A",{href:!0});var RP=a(Ha);mf=l(RP,"decode()"),RP.forEach(o),hf=l(Kc,`. Please refer to
the docstring of this method for more information.`),Kc.forEach(o),Hc.forEach(o),tt.forEach(o),Qd=m(t),wt=r(t,"H2",{class:!0});var Gc=a(wt);No=r(Gc,"A",{id:!0,class:!0,href:!0});var UP=a(No);vl=r(UP,"SPAN",{});var HP=a(vl);I(or.$$.fragment,HP),HP.forEach(o),UP.forEach(o),ff=m(Gc),Pl=r(Gc,"SPAN",{});var KP=a(Pl);gf=l(KP,"CLIPModel"),KP.forEach(o),Gc.forEach(o),Zd=m(t),B=r(t,"DIV",{class:!0});var Ne=a(B);I(nr.$$.fragment,Ne),uf=m(Ne),sr=r(Ne,"P",{});var Jc=a(sr);_f=l(Jc,"This model inherits from "),Ka=r(Jc,"A",{href:!0});var GP=a(Ka);vf=l(GP,"PreTrainedModel"),GP.forEach(o),Pf=l(Jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc.forEach(o),bf=m(Ne),rr=r(Ne,"P",{});var Xc=a(rr);If=l(Xc,"This model is also a PyTorch "),ar=r(Xc,"A",{href:!0,rel:!0});var JP=a(ar);$f=l(JP,"torch.nn.Module"),JP.forEach(o),yf=l(Xc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc.forEach(o),Cf=m(Ne),$e=r(Ne,"DIV",{class:!0});var Fn=a($e);I(ir.$$.fragment,Fn),Tf=m(Fn),xt=r(Fn,"P",{});var vi=a(xt);Lf=l(vi,"The "),Ga=r(vi,"A",{href:!0});var XP=a(Ga);wf=l(XP,"CLIPModel"),XP.forEach(o),xf=l(vi," forward method, overrides the "),bl=r(vi,"CODE",{});var YP=a(bl);kf=l(YP,"__call__"),YP.forEach(o),zf=l(vi," special method."),vi.forEach(o),Mf=m(Fn),I(Ao.$$.fragment,Fn),jf=m(Fn),I(Oo.$$.fragment,Fn),Fn.forEach(o),Ef=m(Ne),ye=r(Ne,"DIV",{class:!0});var qn=a(ye);I(lr.$$.fragment,qn),Ff=m(qn),kt=r(qn,"P",{});var Pi=a(kt);qf=l(Pi,"The "),Ja=r(Pi,"A",{href:!0});var QP=a(Ja);Df=l(QP,"CLIPModel"),QP.forEach(o),Nf=l(Pi," forward method, overrides the "),Il=r(Pi,"CODE",{});var ZP=a(Il);Af=l(ZP,"__call__"),ZP.forEach(o),Of=l(Pi," special method."),Pi.forEach(o),Vf=m(qn),I(Vo.$$.fragment,qn),Wf=m(qn),I(Wo.$$.fragment,qn),qn.forEach(o),Sf=m(Ne),Ce=r(Ne,"DIV",{class:!0});var Dn=a(Ce);I(dr.$$.fragment,Dn),Bf=m(Dn),zt=r(Dn,"P",{});var bi=a(zt);Rf=l(bi,"The "),Xa=r(bi,"A",{href:!0});var eb=a(Xa);Uf=l(eb,"CLIPModel"),eb.forEach(o),Hf=l(bi," forward method, overrides the "),$l=r(bi,"CODE",{});var tb=a($l);Kf=l(tb,"__call__"),tb.forEach(o),Gf=l(bi," special method."),bi.forEach(o),Jf=m(Dn),I(So.$$.fragment,Dn),Xf=m(Dn),I(Bo.$$.fragment,Dn),Dn.forEach(o),Ne.forEach(o),ec=m(t),Mt=r(t,"H2",{class:!0});var Yc=a(Mt);Ro=r(Yc,"A",{id:!0,class:!0,href:!0});var ob=a(Ro);yl=r(ob,"SPAN",{});var nb=a(yl);I(cr.$$.fragment,nb),nb.forEach(o),ob.forEach(o),Yf=m(Yc),Cl=r(Yc,"SPAN",{});var sb=a(Cl);Qf=l(sb,"CLIPTextModel"),sb.forEach(o),Yc.forEach(o),tc=m(t),pe=r(t,"DIV",{class:!0});var Nn=a(pe);I(pr.$$.fragment,Nn),Zf=m(Nn),mr=r(Nn,"P",{});var Qc=a(mr);eg=l(Qc,`The text model from CLIP without any head or projection on top.
This model inherits from `),Ya=r(Qc,"A",{href:!0});var rb=a(Ya);tg=l(rb,"PreTrainedModel"),rb.forEach(o),og=l(Qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qc.forEach(o),ng=m(Nn),hr=r(Nn,"P",{});var Zc=a(hr);sg=l(Zc,"This model is also a PyTorch "),fr=r(Zc,"A",{href:!0,rel:!0});var ab=a(fr);rg=l(ab,"torch.nn.Module"),ab.forEach(o),ag=l(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(o),ig=m(Nn),Te=r(Nn,"DIV",{class:!0});var An=a(Te);I(gr.$$.fragment,An),lg=m(An),jt=r(An,"P",{});var Ii=a(jt);dg=l(Ii,"The "),Qa=r(Ii,"A",{href:!0});var ib=a(Qa);cg=l(ib,"CLIPTextModel"),ib.forEach(o),pg=l(Ii," forward method, overrides the "),Tl=r(Ii,"CODE",{});var lb=a(Tl);mg=l(lb,"__call__"),lb.forEach(o),hg=l(Ii," special method."),Ii.forEach(o),fg=m(An),I(Uo.$$.fragment,An),gg=m(An),I(Ho.$$.fragment,An),An.forEach(o),Nn.forEach(o),oc=m(t),Et=r(t,"H2",{class:!0});var ep=a(Et);Ko=r(ep,"A",{id:!0,class:!0,href:!0});var db=a(Ko);Ll=r(db,"SPAN",{});var cb=a(Ll);I(ur.$$.fragment,cb),cb.forEach(o),db.forEach(o),ug=m(ep),wl=r(ep,"SPAN",{});var pb=a(wl);_g=l(pb,"CLIPTextModelWithProjection"),pb.forEach(o),ep.forEach(o),nc=m(t),ee=r(t,"DIV",{class:!0});var ot=a(ee);I(_r.$$.fragment,ot),vg=m(ot),xl=r(ot,"P",{});var mb=a(xl);Pg=l(mb,"CLIP Text Model with a projection layer on top (a linear layer on top of the pooled output)."),mb.forEach(o),bg=m(ot),vr=r(ot,"P",{});var tp=a(vr);Ig=l(tp,"This model inherits from "),Za=r(tp,"A",{href:!0});var hb=a(Za);$g=l(hb,"PreTrainedModel"),hb.forEach(o),yg=l(tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp.forEach(o),Cg=m(ot),Pr=r(ot,"P",{});var op=a(Pr);Tg=l(op,"This model is also a PyTorch "),br=r(op,"A",{href:!0,rel:!0});var fb=a(br);Lg=l(fb,"torch.nn.Module"),fb.forEach(o),wg=l(op,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),op.forEach(o),xg=m(ot),Le=r(ot,"DIV",{class:!0});var On=a(Le);I(Ir.$$.fragment,On),kg=m(On),Ft=r(On,"P",{});var $i=a(Ft);zg=l($i,"The "),ei=r($i,"A",{href:!0});var gb=a(ei);Mg=l(gb,"CLIPTextModelWithProjection"),gb.forEach(o),jg=l($i," forward method, overrides the "),kl=r($i,"CODE",{});var ub=a(kl);Eg=l(ub,"__call__"),ub.forEach(o),Fg=l($i," special method."),$i.forEach(o),qg=m(On),I(Go.$$.fragment,On),Dg=m(On),I(Jo.$$.fragment,On),On.forEach(o),ot.forEach(o),sc=m(t),qt=r(t,"H2",{class:!0});var np=a(qt);Xo=r(np,"A",{id:!0,class:!0,href:!0});var _b=a(Xo);zl=r(_b,"SPAN",{});var vb=a(zl);I($r.$$.fragment,vb),vb.forEach(o),_b.forEach(o),Ng=m(np),Ml=r(np,"SPAN",{});var Pb=a(Ml);Ag=l(Pb,"CLIPVisionModelWithProjection"),Pb.forEach(o),np.forEach(o),rc=m(t),te=r(t,"DIV",{class:!0});var nt=a(te);I(yr.$$.fragment,nt),Og=m(nt),jl=r(nt,"P",{});var bb=a(jl);Vg=l(bb,"CLIP Vision Model with a projection layer on top (a linear layer on top of the pooled output)."),bb.forEach(o),Wg=m(nt),Cr=r(nt,"P",{});var sp=a(Cr);Sg=l(sp,"This model inherits from "),ti=r(sp,"A",{href:!0});var Ib=a(ti);Bg=l(Ib,"PreTrainedModel"),Ib.forEach(o),Rg=l(sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sp.forEach(o),Ug=m(nt),Tr=r(nt,"P",{});var rp=a(Tr);Hg=l(rp,"This model is also a PyTorch "),Lr=r(rp,"A",{href:!0,rel:!0});var $b=a(Lr);Kg=l($b,"torch.nn.Module"),$b.forEach(o),Gg=l(rp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rp.forEach(o),Jg=m(nt),we=r(nt,"DIV",{class:!0});var Vn=a(we);I(wr.$$.fragment,Vn),Xg=m(Vn),Dt=r(Vn,"P",{});var yi=a(Dt);Yg=l(yi,"The "),oi=r(yi,"A",{href:!0});var yb=a(oi);Qg=l(yb,"CLIPVisionModelWithProjection"),yb.forEach(o),Zg=l(yi," forward method, overrides the "),El=r(yi,"CODE",{});var Cb=a(El);eu=l(Cb,"__call__"),Cb.forEach(o),tu=l(yi," special method."),yi.forEach(o),ou=m(Vn),I(Yo.$$.fragment,Vn),nu=m(Vn),I(Qo.$$.fragment,Vn),Vn.forEach(o),nt.forEach(o),ac=m(t),Nt=r(t,"H2",{class:!0});var ap=a(Nt);Zo=r(ap,"A",{id:!0,class:!0,href:!0});var Tb=a(Zo);Fl=r(Tb,"SPAN",{});var Lb=a(Fl);I(xr.$$.fragment,Lb),Lb.forEach(o),Tb.forEach(o),su=m(ap),ql=r(ap,"SPAN",{});var wb=a(ql);ru=l(wb,"CLIPVisionModel"),wb.forEach(o),ap.forEach(o),ic=m(t),me=r(t,"DIV",{class:!0});var Wn=a(me);I(kr.$$.fragment,Wn),au=m(Wn),zr=r(Wn,"P",{});var ip=a(zr);iu=l(ip,`The vision model from CLIP without any head or projection on top.
This model inherits from `),ni=r(ip,"A",{href:!0});var xb=a(ni);lu=l(xb,"PreTrainedModel"),xb.forEach(o),du=l(ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ip.forEach(o),cu=m(Wn),Mr=r(Wn,"P",{});var lp=a(Mr);pu=l(lp,"This model is also a PyTorch "),jr=r(lp,"A",{href:!0,rel:!0});var kb=a(jr);mu=l(kb,"torch.nn.Module"),kb.forEach(o),hu=l(lp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lp.forEach(o),fu=m(Wn),xe=r(Wn,"DIV",{class:!0});var Sn=a(xe);I(Er.$$.fragment,Sn),gu=m(Sn),At=r(Sn,"P",{});var Ci=a(At);uu=l(Ci,"The "),si=r(Ci,"A",{href:!0});var zb=a(si);_u=l(zb,"CLIPVisionModel"),zb.forEach(o),vu=l(Ci," forward method, overrides the "),Dl=r(Ci,"CODE",{});var Mb=a(Dl);Pu=l(Mb,"__call__"),Mb.forEach(o),bu=l(Ci," special method."),Ci.forEach(o),Iu=m(Sn),I(en.$$.fragment,Sn),$u=m(Sn),I(tn.$$.fragment,Sn),Sn.forEach(o),Wn.forEach(o),lc=m(t),Ot=r(t,"H2",{class:!0});var dp=a(Ot);on=r(dp,"A",{id:!0,class:!0,href:!0});var jb=a(on);Nl=r(jb,"SPAN",{});var Eb=a(Nl);I(Fr.$$.fragment,Eb),Eb.forEach(o),jb.forEach(o),yu=m(dp),Al=r(dp,"SPAN",{});var Fb=a(Al);Cu=l(Fb,"TFCLIPModel"),Fb.forEach(o),dp.forEach(o),dc=m(t),W=r(t,"DIV",{class:!0});var ie=a(W);I(qr.$$.fragment,ie),Tu=m(ie),Dr=r(ie,"P",{});var cp=a(Dr);Lu=l(cp,"This model inherits from "),ri=r(cp,"A",{href:!0});var qb=a(ri);wu=l(qb,"TFPreTrainedModel"),qb.forEach(o),xu=l(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(o),ku=m(ie),Nr=r(ie,"P",{});var pp=a(Nr);zu=l(pp,"This model is also a "),Ar=r(pp,"A",{href:!0,rel:!0});var Db=a(Ar);Mu=l(Db,"tf.keras.Model"),Db.forEach(o),ju=l(pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pp.forEach(o),Eu=m(ie),I(nn.$$.fragment,ie),Fu=m(ie),ke=r(ie,"DIV",{class:!0});var Bn=a(ke);I(Or.$$.fragment,Bn),qu=m(Bn),Vt=r(Bn,"P",{});var Ti=a(Vt);Du=l(Ti,"The "),ai=r(Ti,"A",{href:!0});var Nb=a(ai);Nu=l(Nb,"TFCLIPModel"),Nb.forEach(o),Au=l(Ti," forward method, overrides the "),Ol=r(Ti,"CODE",{});var Ab=a(Ol);Ou=l(Ab,"__call__"),Ab.forEach(o),Vu=l(Ti," special method."),Ti.forEach(o),Wu=m(Bn),I(sn.$$.fragment,Bn),Su=m(Bn),I(rn.$$.fragment,Bn),Bn.forEach(o),Bu=m(ie),ze=r(ie,"DIV",{class:!0});var Rn=a(ze);I(Vr.$$.fragment,Rn),Ru=m(Rn),Wt=r(Rn,"P",{});var Li=a(Wt);Uu=l(Li,"The "),ii=r(Li,"A",{href:!0});var Ob=a(ii);Hu=l(Ob,"TFCLIPModel"),Ob.forEach(o),Ku=l(Li," forward method, overrides the "),Vl=r(Li,"CODE",{});var Vb=a(Vl);Gu=l(Vb,"__call__"),Vb.forEach(o),Ju=l(Li," special method."),Li.forEach(o),Xu=m(Rn),I(an.$$.fragment,Rn),Yu=m(Rn),I(ln.$$.fragment,Rn),Rn.forEach(o),Qu=m(ie),Me=r(ie,"DIV",{class:!0});var Un=a(Me);I(Wr.$$.fragment,Un),Zu=m(Un),St=r(Un,"P",{});var wi=a(St);e_=l(wi,"The "),li=r(wi,"A",{href:!0});var Wb=a(li);t_=l(Wb,"TFCLIPModel"),Wb.forEach(o),o_=l(wi," forward method, overrides the "),Wl=r(wi,"CODE",{});var Sb=a(Wl);n_=l(Sb,"__call__"),Sb.forEach(o),s_=l(wi," special method."),wi.forEach(o),r_=m(Un),I(dn.$$.fragment,Un),a_=m(Un),I(cn.$$.fragment,Un),Un.forEach(o),ie.forEach(o),cc=m(t),Bt=r(t,"H2",{class:!0});var mp=a(Bt);pn=r(mp,"A",{id:!0,class:!0,href:!0});var Bb=a(pn);Sl=r(Bb,"SPAN",{});var Rb=a(Sl);I(Sr.$$.fragment,Rb),Rb.forEach(o),Bb.forEach(o),i_=m(mp),Bl=r(mp,"SPAN",{});var Ub=a(Bl);l_=l(Ub,"TFCLIPTextModel"),Ub.forEach(o),mp.forEach(o),pc=m(t),Rt=r(t,"DIV",{class:!0});var hp=a(Rt);I(Br.$$.fragment,hp),d_=m(hp),je=r(hp,"DIV",{class:!0});var Hn=a(je);I(Rr.$$.fragment,Hn),c_=m(Hn),Ut=r(Hn,"P",{});var xi=a(Ut);p_=l(xi,"The "),di=r(xi,"A",{href:!0});var Hb=a(di);m_=l(Hb,"TFCLIPTextModel"),Hb.forEach(o),h_=l(xi," forward method, overrides the "),Rl=r(xi,"CODE",{});var Kb=a(Rl);f_=l(Kb,"__call__"),Kb.forEach(o),g_=l(xi," special method."),xi.forEach(o),u_=m(Hn),I(mn.$$.fragment,Hn),__=m(Hn),I(hn.$$.fragment,Hn),Hn.forEach(o),hp.forEach(o),mc=m(t),Ht=r(t,"H2",{class:!0});var fp=a(Ht);fn=r(fp,"A",{id:!0,class:!0,href:!0});var Gb=a(fn);Ul=r(Gb,"SPAN",{});var Jb=a(Ul);I(Ur.$$.fragment,Jb),Jb.forEach(o),Gb.forEach(o),v_=m(fp),Hl=r(fp,"SPAN",{});var Xb=a(Hl);P_=l(Xb,"TFCLIPVisionModel"),Xb.forEach(o),fp.forEach(o),hc=m(t),Kt=r(t,"DIV",{class:!0});var gp=a(Kt);I(Hr.$$.fragment,gp),b_=m(gp),Ee=r(gp,"DIV",{class:!0});var Kn=a(Ee);I(Kr.$$.fragment,Kn),I_=m(Kn),Gt=r(Kn,"P",{});var ki=a(Gt);$_=l(ki,"The "),ci=r(ki,"A",{href:!0});var Yb=a(ci);y_=l(Yb,"TFCLIPVisionModel"),Yb.forEach(o),C_=l(ki," forward method, overrides the "),Kl=r(ki,"CODE",{});var Qb=a(Kl);T_=l(Qb,"__call__"),Qb.forEach(o),L_=l(ki," special method."),ki.forEach(o),w_=m(Kn),I(gn.$$.fragment,Kn),x_=m(Kn),I(un.$$.fragment,Kn),Kn.forEach(o),gp.forEach(o),fc=m(t),Jt=r(t,"H2",{class:!0});var up=a(Jt);_n=r(up,"A",{id:!0,class:!0,href:!0});var Zb=a(_n);Gl=r(Zb,"SPAN",{});var eI=a(Gl);I(Gr.$$.fragment,eI),eI.forEach(o),Zb.forEach(o),k_=m(up),Jl=r(up,"SPAN",{});var tI=a(Jl);z_=l(tI,"FlaxCLIPModel"),tI.forEach(o),up.forEach(o),gc=m(t),F=r(t,"DIV",{class:!0});var K=a(F);I(Jr.$$.fragment,K),M_=m(K),Xr=r(K,"P",{});var _p=a(Xr);j_=l(_p,"This model inherits from "),pi=r(_p,"A",{href:!0});var oI=a(pi);E_=l(oI,"FlaxPreTrainedModel"),oI.forEach(o),F_=l(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_p.forEach(o),q_=m(K),Yr=r(K,"P",{});var vp=a(Yr);D_=l(vp,"This model is also a Flax Linen "),Qr=r(vp,"A",{href:!0,rel:!0});var nI=a(Qr);N_=l(nI,"flax.linen.Module"),nI.forEach(o),A_=l(vp,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vp.forEach(o),O_=m(K),Xl=r(K,"P",{});var sI=a(Xl);V_=l(sI,"Finally, this model supports inherent JAX features such as:"),sI.forEach(o),W_=m(K),Be=r(K,"UL",{});var Gn=a(Be);Yl=r(Gn,"LI",{});var rI=a(Yl);Zr=r(rI,"A",{href:!0,rel:!0});var aI=a(Zr);S_=l(aI,"Just-In-Time (JIT) compilation"),aI.forEach(o),rI.forEach(o),B_=m(Gn),Ql=r(Gn,"LI",{});var iI=a(Ql);ea=r(iI,"A",{href:!0,rel:!0});var lI=a(ea);R_=l(lI,"Automatic Differentiation"),lI.forEach(o),iI.forEach(o),U_=m(Gn),Zl=r(Gn,"LI",{});var dI=a(Zl);ta=r(dI,"A",{href:!0,rel:!0});var cI=a(ta);H_=l(cI,"Vectorization"),cI.forEach(o),dI.forEach(o),K_=m(Gn),ed=r(Gn,"LI",{});var pI=a(ed);oa=r(pI,"A",{href:!0,rel:!0});var mI=a(oa);G_=l(mI,"Parallelization"),mI.forEach(o),pI.forEach(o),Gn.forEach(o),J_=m(K),Fe=r(K,"DIV",{class:!0});var Jn=a(Fe);I(na.$$.fragment,Jn),X_=m(Jn),Xt=r(Jn,"P",{});var zi=a(Xt);Y_=l(zi,"The "),td=r(zi,"CODE",{});var hI=a(td);Q_=l(hI,"FlaxCLIPPreTrainedModel"),hI.forEach(o),Z_=l(zi," forward method, overrides the "),od=r(zi,"CODE",{});var fI=a(od);ev=l(fI,"__call__"),fI.forEach(o),tv=l(zi," special method."),zi.forEach(o),ov=m(Jn),I(vn.$$.fragment,Jn),nv=m(Jn),I(Pn.$$.fragment,Jn),Jn.forEach(o),sv=m(K),bn=r(K,"DIV",{class:!0});var Pp=a(bn);I(sa.$$.fragment,Pp),rv=m(Pp),I(In.$$.fragment,Pp),Pp.forEach(o),av=m(K),$n=r(K,"DIV",{class:!0});var bp=a($n);I(ra.$$.fragment,bp),iv=m(bp),I(yn.$$.fragment,bp),bp.forEach(o),K.forEach(o),uc=m(t),Yt=r(t,"H2",{class:!0});var Ip=a(Yt);Cn=r(Ip,"A",{id:!0,class:!0,href:!0});var gI=a(Cn);nd=r(gI,"SPAN",{});var uI=a(nd);I(aa.$$.fragment,uI),uI.forEach(o),gI.forEach(o),lv=m(Ip),sd=r(Ip,"SPAN",{});var _I=a(sd);dv=l(_I,"FlaxCLIPTextModel"),_I.forEach(o),Ip.forEach(o),_c=m(t),Qt=r(t,"DIV",{class:!0});var $p=a(Qt);I(ia.$$.fragment,$p),cv=m($p),qe=r($p,"DIV",{class:!0});var Xn=a(qe);I(la.$$.fragment,Xn),pv=m(Xn),Zt=r(Xn,"P",{});var Mi=a(Zt);mv=l(Mi,"The "),rd=r(Mi,"CODE",{});var vI=a(rd);hv=l(vI,"FlaxCLIPTextPreTrainedModel"),vI.forEach(o),fv=l(Mi," forward method, overrides the "),ad=r(Mi,"CODE",{});var PI=a(ad);gv=l(PI,"__call__"),PI.forEach(o),uv=l(Mi," special method."),Mi.forEach(o),_v=m(Xn),I(Tn.$$.fragment,Xn),vv=m(Xn),I(Ln.$$.fragment,Xn),Xn.forEach(o),$p.forEach(o),vc=m(t),eo=r(t,"H2",{class:!0});var yp=a(eo);wn=r(yp,"A",{id:!0,class:!0,href:!0});var bI=a(wn);id=r(bI,"SPAN",{});var II=a(id);I(da.$$.fragment,II),II.forEach(o),bI.forEach(o),Pv=m(yp),ld=r(yp,"SPAN",{});var $I=a(ld);bv=l($I,"FlaxCLIPVisionModel"),$I.forEach(o),yp.forEach(o),Pc=m(t),to=r(t,"DIV",{class:!0});var Cp=a(to);I(ca.$$.fragment,Cp),Iv=m(Cp),De=r(Cp,"DIV",{class:!0});var Yn=a(De);I(pa.$$.fragment,Yn),$v=m(Yn),oo=r(Yn,"P",{});var ji=a(oo);yv=l(ji,"The "),dd=r(ji,"CODE",{});var yI=a(dd);Cv=l(yI,"FlaxCLIPVisionPreTrainedModel"),yI.forEach(o),Tv=l(ji," forward method, overrides the "),cd=r(ji,"CODE",{});var CI=a(cd);Lv=l(CI,"__call__"),CI.forEach(o),wv=l(ji," special method."),ji.forEach(o),xv=m(Yn),I(xn.$$.fragment,Yn),kv=m(Yn),I(kn.$$.fragment,Yn),Yn.forEach(o),Cp.forEach(o),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(h$)),f(h,"id","clip"),f(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(h,"href","#clip"),f(g,"class","relative group"),f(fe,"id","overview"),f(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fe,"href","#overview"),f(J,"class","relative group"),f(Oe,"href","https://arxiv.org/abs/2103.00020"),f(Oe,"rel","nofollow"),f(S,"id","usage"),f(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(S,"href","#usage"),f(D,"class","relative group"),f(Ke,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor"),f(ve,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),f(X,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),f(Ge,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor"),f(E,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),f(pt,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),f(mt,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),f(Xe,"href","https://huggingface.co/valhalla"),f(Xe,"rel","nofollow"),f(Ye,"href","https://github.com/openai/CLIP"),f(Ye,"rel","nofollow"),f(fo,"id","transformers.CLIPConfig"),f(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fo,"href","#transformers.CLIPConfig"),f(Pe,"class","relative group"),f(Ta,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),f(La,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),f(us,"href","https://huggingface.co/openai/clip-vit-base-patch32"),f(us,"rel","nofollow"),f(wa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(xa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(ka,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),f(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_o,"id","transformers.CLIPTextConfig"),f(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_o,"href","#transformers.CLIPTextConfig"),f(ut,"class","relative group"),f(za,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),f(Is,"href","https://huggingface.co/openai/clip-vit-base-patch32"),f(Is,"rel","nofollow"),f(Ma,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(ja,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"id","transformers.CLIPVisionConfig"),f(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Po,"href","#transformers.CLIPVisionConfig"),f(Pt,"class","relative group"),f(Ea,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),f(Cs,"href","https://huggingface.co/openai/clip-vit-base-patch32"),f(Cs,"rel","nofollow"),f(Fa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(qa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"id","transformers.CLIPTokenizer"),f(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Io,"href","#transformers.CLIPTokenizer"),f($t,"class","relative group"),f(Da,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Aa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"id","transformers.CLIPTokenizerFast"),f(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Co,"href","#transformers.CLIPTokenizerFast"),f(yt,"class","relative group"),f(Oa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"id","transformers.CLIPImageProcessor"),f(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Lo,"href","#transformers.CLIPImageProcessor"),f(Ct,"class","relative group"),f(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xo,"id","transformers.CLIPImageProcessor"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#transformers.CLIPImageProcessor"),f(Tt,"class","relative group"),f(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fo,"id","transformers.CLIPProcessor"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.CLIPProcessor"),f(Lt,"class","relative group"),f(Wa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),f(Sa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor"),f(Ba,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),f(Ra,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),f(Ua,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),f(qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ha,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),f(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"id","transformers.CLIPModel"),f(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(No,"href","#transformers.CLIPModel"),f(wt,"class","relative group"),f(Ka,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ar,"rel","nofollow"),f(Ga,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ja,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),f(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ro,"id","transformers.CLIPTextModel"),f(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ro,"href","#transformers.CLIPTextModel"),f(Mt,"class","relative group"),f(Ya,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(fr,"rel","nofollow"),f(Qa,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),f(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ko,"id","transformers.CLIPTextModelWithProjection"),f(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ko,"href","#transformers.CLIPTextModelWithProjection"),f(Et,"class","relative group"),f(Za,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(br,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(br,"rel","nofollow"),f(ei,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModelWithProjection"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xo,"id","transformers.CLIPVisionModelWithProjection"),f(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xo,"href","#transformers.CLIPVisionModelWithProjection"),f(qt,"class","relative group"),f(ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Lr,"rel","nofollow"),f(oi,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModelWithProjection"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zo,"id","transformers.CLIPVisionModel"),f(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Zo,"href","#transformers.CLIPVisionModel"),f(Nt,"class","relative group"),f(ni,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(jr,"rel","nofollow"),f(si,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.TFCLIPModel"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.TFCLIPModel"),f(Ot,"class","relative group"),f(ri,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ar,"rel","nofollow"),f(ai,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),f(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ii,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),f(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(li,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pn,"id","transformers.TFCLIPTextModel"),f(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pn,"href","#transformers.TFCLIPTextModel"),f(Bt,"class","relative group"),f(di,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"id","transformers.TFCLIPVisionModel"),f(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fn,"href","#transformers.TFCLIPVisionModel"),f(Ht,"class","relative group"),f(ci,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_n,"id","transformers.FlaxCLIPModel"),f(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_n,"href","#transformers.FlaxCLIPModel"),f(Jt,"class","relative group"),f(pi,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Qr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Qr,"rel","nofollow"),f(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Zr,"rel","nofollow"),f(ea,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ea,"rel","nofollow"),f(ta,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ta,"rel","nofollow"),f(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(oa,"rel","nofollow"),f(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cn,"id","transformers.FlaxCLIPTextModel"),f(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cn,"href","#transformers.FlaxCLIPTextModel"),f(Yt,"class","relative group"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wn,"id","transformers.FlaxCLIPVisionModel"),f(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wn,"href","#transformers.FlaxCLIPVisionModel"),f(eo,"class","relative group"),f(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,d),v(t,P,u),v(t,g,u),e(g,h),e(h,_),$(n,_,null),e(g,c),e(g,w),e(w,Qn),v(t,so,u),v(t,J,u),e(J,fe),e(fe,Ue),$(M,Ue,null),e(J,Zn),e(J,Ae),e(Ae,es),v(t,ro,u),v(t,oe,u),e(oe,ts),e(oe,Oe),e(Oe,st),e(oe,os),v(t,ao,u),v(t,ge,u),e(ge,ns),v(t,io,u),v(t,ue,u),e(ue,rt),e(rt,ss),v(t,at,u),v(t,D,u),e(D,S),e(S,it),$(le,it,null),e(D,rs),e(D,lt),e(lt,dt),v(t,lo,u),v(t,He,u),e(He,_e),v(t,co,u),v(t,ne,u),e(ne,as),e(ne,Ke),e(Ke,ct),e(ne,is),v(t,po,u),v(t,z,u),e(z,ls),e(z,ve),e(ve,ds),e(z,mo),e(z,X),e(X,cs),e(z,Ve),e(z,Ge),e(Ge,ps),e(z,k),e(z,E),e(E,va),e(z,ho),e(z,pt),e(pt,Pa),e(z,U),e(z,mt),e(mt,ba),e(z,Ia),v(t,ms,u),$(Je,t,u),v(t,We,u),v(t,H,u),e(H,$a),e(H,Xe),e(Xe,ht),e(H,ya),e(H,Ye),e(Ye,hs),e(H,Ca),v(t,ft,u),v(t,Pe,u),e(Pe,fo),e(fo,Ei),$(fs,Ei,null),e(Pe,Tp),e(Pe,Fi),e(Fi,Lp),v(t,Nd,u),v(t,Y,u),$(gs,Y,null),e(Y,wp),e(Y,Qe),e(Qe,Ta),e(Ta,xp),e(Qe,kp),e(Qe,La),e(La,zp),e(Qe,Mp),e(Qe,us),e(us,jp),e(Qe,Ep),e(Y,Fp),e(Y,gt),e(gt,qp),e(gt,wa),e(wa,Dp),e(gt,Np),e(gt,xa),e(xa,Ap),e(gt,Op),e(Y,Vp),$(go,Y,null),e(Y,Wp),e(Y,uo),$(_s,uo,null),e(uo,Sp),e(uo,vs),e(vs,Bp),e(vs,ka),e(ka,Rp),e(vs,Up),v(t,Ad,u),v(t,ut,u),e(ut,_o),e(_o,qi),$(Ps,qi,null),e(ut,Hp),e(ut,Di),e(Di,Kp),v(t,Od,u),v(t,de,u),$(bs,de,null),e(de,Gp),e(de,_t),e(_t,Jp),e(_t,za),e(za,Xp),e(_t,Yp),e(_t,Is),e(Is,Qp),e(_t,Zp),e(de,em),e(de,vt),e(vt,tm),e(vt,Ma),e(Ma,om),e(vt,nm),e(vt,ja),e(ja,sm),e(vt,rm),e(de,am),$(vo,de,null),v(t,Vd,u),v(t,Pt,u),e(Pt,Po),e(Po,Ni),$($s,Ni,null),e(Pt,im),e(Pt,Ai),e(Ai,lm),v(t,Wd,u),v(t,ce,u),$(ys,ce,null),e(ce,dm),e(ce,bt),e(bt,cm),e(bt,Ea),e(Ea,pm),e(bt,mm),e(bt,Cs),e(Cs,hm),e(bt,fm),e(ce,gm),e(ce,It),e(It,um),e(It,Fa),e(Fa,_m),e(It,vm),e(It,qa),e(qa,Pm),e(It,bm),e(ce,Im),$(bo,ce,null),v(t,Sd,u),v(t,$t,u),e($t,Io),e(Io,Oi),$(Ts,Oi,null),e($t,$m),e($t,Vi),e(Vi,ym),v(t,Bd,u),v(t,O,u),$(Ls,O,null),e(O,Cm),e(O,Wi),e(Wi,Tm),e(O,Lm),e(O,ws),e(ws,wm),e(ws,Da),e(Da,xm),e(ws,km),e(O,zm),e(O,be),$(xs,be,null),e(be,Mm),e(be,Si),e(Si,jm),e(be,Em),e(be,Bi),e(Bi,Na),e(Na,Fm),e(Na,Ri),e(Ri,qm),e(be,Dm),e(be,Ui),e(Ui,Nm),e(O,Am),e(O,$o),$(ks,$o,null),e($o,Om),e($o,zs),e(zs,Vm),e(zs,Hi),e(Hi,Wm),e(zs,Sm),e(O,Bm),e(O,yo),$(Ms,yo,null),e(yo,Rm),e(yo,Ki),e(Ki,Um),e(O,Hm),e(O,Aa),$(js,Aa,null),v(t,Rd,u),v(t,yt,u),e(yt,Co),e(Co,Gi),$(Es,Gi,null),e(yt,Km),e(yt,Ji),e(Ji,Gm),v(t,Ud,u),v(t,Q,u),$(Fs,Q,null),e(Q,Jm),e(Q,qs),e(qs,Xm),e(qs,Xi),e(Xi,Ym),e(qs,Qm),e(Q,Zm),e(Q,Ds),e(Ds,eh),e(Ds,Oa),e(Oa,th),e(Ds,oh),e(Q,nh),e(Q,Ie),$(Ns,Ie,null),e(Ie,sh),e(Ie,Yi),e(Yi,rh),e(Ie,ah),e(Ie,Qi),e(Qi,Va),e(Va,ih),e(Va,Zi),e(Zi,lh),e(Ie,dh),e(Ie,el),e(el,ch),e(Q,ph),e(Q,To),$(As,To,null),e(To,mh),e(To,tl),e(tl,hh),v(t,Hd,u),v(t,Ct,u),e(Ct,Lo),e(Lo,ol),$(Os,ol,null),e(Ct,fh),e(Ct,nl),e(nl,gh),v(t,Kd,u),v(t,Se,u),$(Vs,Se,null),e(Se,uh),e(Se,sl),e(sl,_h),e(Se,vh),e(Se,wo),$(Ws,wo,null),e(wo,Ph),e(wo,rl),e(rl,bh),v(t,Gd,u),v(t,Tt,u),e(Tt,xo),e(xo,al),$(Ss,al,null),e(Tt,Ih),e(Tt,il),e(il,$h),v(t,Jd,u),v(t,V,u),$(Bs,V,null),e(V,yh),e(V,ll),e(ll,Ch),e(V,Th),e(V,ko),$(Rs,ko,null),e(ko,Lh),e(ko,Us),e(Us,wh),e(Us,dl),e(dl,xh),e(Us,kh),e(V,zh),e(V,zo),$(Hs,zo,null),e(zo,Mh),e(zo,cl),e(cl,jh),e(V,Eh),e(V,Mo),$(Ks,Mo,null),e(Mo,Fh),e(Mo,pl),e(pl,qh),e(V,Dh),e(V,jo),$(Gs,jo,null),e(jo,Nh),e(jo,ml),e(ml,Ah),e(V,Oh),e(V,Eo),$(Js,Eo,null),e(Eo,Vh),e(Eo,hl),e(hl,Wh),v(t,Xd,u),v(t,Lt,u),e(Lt,Fo),e(Fo,fl),$(Xs,fl,null),e(Lt,Sh),e(Lt,gl),e(gl,Bh),v(t,Yd,u),v(t,Z,u),$(Ys,Z,null),e(Z,Rh),e(Z,ul),e(ul,Uh),e(Z,Hh),e(Z,se),e(se,Wa),e(Wa,Kh),e(se,Gh),e(se,Sa),e(Sa,Jh),e(se,Xh),e(se,Ba),e(Ba,Yh),e(se,Qh),e(se,_l),e(_l,Zh),e(se,ef),e(se,Ra),e(Ra,tf),e(se,of),e(Z,nf),e(Z,qo),$(Qs,qo,null),e(qo,sf),e(qo,Zs),e(Zs,rf),e(Zs,Ua),e(Ua,af),e(Zs,lf),e(Z,df),e(Z,Do),$(er,Do,null),e(Do,cf),e(Do,tr),e(tr,pf),e(tr,Ha),e(Ha,mf),e(tr,hf),v(t,Qd,u),v(t,wt,u),e(wt,No),e(No,vl),$(or,vl,null),e(wt,ff),e(wt,Pl),e(Pl,gf),v(t,Zd,u),v(t,B,u),$(nr,B,null),e(B,uf),e(B,sr),e(sr,_f),e(sr,Ka),e(Ka,vf),e(sr,Pf),e(B,bf),e(B,rr),e(rr,If),e(rr,ar),e(ar,$f),e(rr,yf),e(B,Cf),e(B,$e),$(ir,$e,null),e($e,Tf),e($e,xt),e(xt,Lf),e(xt,Ga),e(Ga,wf),e(xt,xf),e(xt,bl),e(bl,kf),e(xt,zf),e($e,Mf),$(Ao,$e,null),e($e,jf),$(Oo,$e,null),e(B,Ef),e(B,ye),$(lr,ye,null),e(ye,Ff),e(ye,kt),e(kt,qf),e(kt,Ja),e(Ja,Df),e(kt,Nf),e(kt,Il),e(Il,Af),e(kt,Of),e(ye,Vf),$(Vo,ye,null),e(ye,Wf),$(Wo,ye,null),e(B,Sf),e(B,Ce),$(dr,Ce,null),e(Ce,Bf),e(Ce,zt),e(zt,Rf),e(zt,Xa),e(Xa,Uf),e(zt,Hf),e(zt,$l),e($l,Kf),e(zt,Gf),e(Ce,Jf),$(So,Ce,null),e(Ce,Xf),$(Bo,Ce,null),v(t,ec,u),v(t,Mt,u),e(Mt,Ro),e(Ro,yl),$(cr,yl,null),e(Mt,Yf),e(Mt,Cl),e(Cl,Qf),v(t,tc,u),v(t,pe,u),$(pr,pe,null),e(pe,Zf),e(pe,mr),e(mr,eg),e(mr,Ya),e(Ya,tg),e(mr,og),e(pe,ng),e(pe,hr),e(hr,sg),e(hr,fr),e(fr,rg),e(hr,ag),e(pe,ig),e(pe,Te),$(gr,Te,null),e(Te,lg),e(Te,jt),e(jt,dg),e(jt,Qa),e(Qa,cg),e(jt,pg),e(jt,Tl),e(Tl,mg),e(jt,hg),e(Te,fg),$(Uo,Te,null),e(Te,gg),$(Ho,Te,null),v(t,oc,u),v(t,Et,u),e(Et,Ko),e(Ko,Ll),$(ur,Ll,null),e(Et,ug),e(Et,wl),e(wl,_g),v(t,nc,u),v(t,ee,u),$(_r,ee,null),e(ee,vg),e(ee,xl),e(xl,Pg),e(ee,bg),e(ee,vr),e(vr,Ig),e(vr,Za),e(Za,$g),e(vr,yg),e(ee,Cg),e(ee,Pr),e(Pr,Tg),e(Pr,br),e(br,Lg),e(Pr,wg),e(ee,xg),e(ee,Le),$(Ir,Le,null),e(Le,kg),e(Le,Ft),e(Ft,zg),e(Ft,ei),e(ei,Mg),e(Ft,jg),e(Ft,kl),e(kl,Eg),e(Ft,Fg),e(Le,qg),$(Go,Le,null),e(Le,Dg),$(Jo,Le,null),v(t,sc,u),v(t,qt,u),e(qt,Xo),e(Xo,zl),$($r,zl,null),e(qt,Ng),e(qt,Ml),e(Ml,Ag),v(t,rc,u),v(t,te,u),$(yr,te,null),e(te,Og),e(te,jl),e(jl,Vg),e(te,Wg),e(te,Cr),e(Cr,Sg),e(Cr,ti),e(ti,Bg),e(Cr,Rg),e(te,Ug),e(te,Tr),e(Tr,Hg),e(Tr,Lr),e(Lr,Kg),e(Tr,Gg),e(te,Jg),e(te,we),$(wr,we,null),e(we,Xg),e(we,Dt),e(Dt,Yg),e(Dt,oi),e(oi,Qg),e(Dt,Zg),e(Dt,El),e(El,eu),e(Dt,tu),e(we,ou),$(Yo,we,null),e(we,nu),$(Qo,we,null),v(t,ac,u),v(t,Nt,u),e(Nt,Zo),e(Zo,Fl),$(xr,Fl,null),e(Nt,su),e(Nt,ql),e(ql,ru),v(t,ic,u),v(t,me,u),$(kr,me,null),e(me,au),e(me,zr),e(zr,iu),e(zr,ni),e(ni,lu),e(zr,du),e(me,cu),e(me,Mr),e(Mr,pu),e(Mr,jr),e(jr,mu),e(Mr,hu),e(me,fu),e(me,xe),$(Er,xe,null),e(xe,gu),e(xe,At),e(At,uu),e(At,si),e(si,_u),e(At,vu),e(At,Dl),e(Dl,Pu),e(At,bu),e(xe,Iu),$(en,xe,null),e(xe,$u),$(tn,xe,null),v(t,lc,u),v(t,Ot,u),e(Ot,on),e(on,Nl),$(Fr,Nl,null),e(Ot,yu),e(Ot,Al),e(Al,Cu),v(t,dc,u),v(t,W,u),$(qr,W,null),e(W,Tu),e(W,Dr),e(Dr,Lu),e(Dr,ri),e(ri,wu),e(Dr,xu),e(W,ku),e(W,Nr),e(Nr,zu),e(Nr,Ar),e(Ar,Mu),e(Nr,ju),e(W,Eu),$(nn,W,null),e(W,Fu),e(W,ke),$(Or,ke,null),e(ke,qu),e(ke,Vt),e(Vt,Du),e(Vt,ai),e(ai,Nu),e(Vt,Au),e(Vt,Ol),e(Ol,Ou),e(Vt,Vu),e(ke,Wu),$(sn,ke,null),e(ke,Su),$(rn,ke,null),e(W,Bu),e(W,ze),$(Vr,ze,null),e(ze,Ru),e(ze,Wt),e(Wt,Uu),e(Wt,ii),e(ii,Hu),e(Wt,Ku),e(Wt,Vl),e(Vl,Gu),e(Wt,Ju),e(ze,Xu),$(an,ze,null),e(ze,Yu),$(ln,ze,null),e(W,Qu),e(W,Me),$(Wr,Me,null),e(Me,Zu),e(Me,St),e(St,e_),e(St,li),e(li,t_),e(St,o_),e(St,Wl),e(Wl,n_),e(St,s_),e(Me,r_),$(dn,Me,null),e(Me,a_),$(cn,Me,null),v(t,cc,u),v(t,Bt,u),e(Bt,pn),e(pn,Sl),$(Sr,Sl,null),e(Bt,i_),e(Bt,Bl),e(Bl,l_),v(t,pc,u),v(t,Rt,u),$(Br,Rt,null),e(Rt,d_),e(Rt,je),$(Rr,je,null),e(je,c_),e(je,Ut),e(Ut,p_),e(Ut,di),e(di,m_),e(Ut,h_),e(Ut,Rl),e(Rl,f_),e(Ut,g_),e(je,u_),$(mn,je,null),e(je,__),$(hn,je,null),v(t,mc,u),v(t,Ht,u),e(Ht,fn),e(fn,Ul),$(Ur,Ul,null),e(Ht,v_),e(Ht,Hl),e(Hl,P_),v(t,hc,u),v(t,Kt,u),$(Hr,Kt,null),e(Kt,b_),e(Kt,Ee),$(Kr,Ee,null),e(Ee,I_),e(Ee,Gt),e(Gt,$_),e(Gt,ci),e(ci,y_),e(Gt,C_),e(Gt,Kl),e(Kl,T_),e(Gt,L_),e(Ee,w_),$(gn,Ee,null),e(Ee,x_),$(un,Ee,null),v(t,fc,u),v(t,Jt,u),e(Jt,_n),e(_n,Gl),$(Gr,Gl,null),e(Jt,k_),e(Jt,Jl),e(Jl,z_),v(t,gc,u),v(t,F,u),$(Jr,F,null),e(F,M_),e(F,Xr),e(Xr,j_),e(Xr,pi),e(pi,E_),e(Xr,F_),e(F,q_),e(F,Yr),e(Yr,D_),e(Yr,Qr),e(Qr,N_),e(Yr,A_),e(F,O_),e(F,Xl),e(Xl,V_),e(F,W_),e(F,Be),e(Be,Yl),e(Yl,Zr),e(Zr,S_),e(Be,B_),e(Be,Ql),e(Ql,ea),e(ea,R_),e(Be,U_),e(Be,Zl),e(Zl,ta),e(ta,H_),e(Be,K_),e(Be,ed),e(ed,oa),e(oa,G_),e(F,J_),e(F,Fe),$(na,Fe,null),e(Fe,X_),e(Fe,Xt),e(Xt,Y_),e(Xt,td),e(td,Q_),e(Xt,Z_),e(Xt,od),e(od,ev),e(Xt,tv),e(Fe,ov),$(vn,Fe,null),e(Fe,nv),$(Pn,Fe,null),e(F,sv),e(F,bn),$(sa,bn,null),e(bn,rv),$(In,bn,null),e(F,av),e(F,$n),$(ra,$n,null),e($n,iv),$(yn,$n,null),v(t,uc,u),v(t,Yt,u),e(Yt,Cn),e(Cn,nd),$(aa,nd,null),e(Yt,lv),e(Yt,sd),e(sd,dv),v(t,_c,u),v(t,Qt,u),$(ia,Qt,null),e(Qt,cv),e(Qt,qe),$(la,qe,null),e(qe,pv),e(qe,Zt),e(Zt,mv),e(Zt,rd),e(rd,hv),e(Zt,fv),e(Zt,ad),e(ad,gv),e(Zt,uv),e(qe,_v),$(Tn,qe,null),e(qe,vv),$(Ln,qe,null),v(t,vc,u),v(t,eo,u),e(eo,wn),e(wn,id),$(da,id,null),e(eo,Pv),e(eo,ld),e(ld,bv),v(t,Pc,u),v(t,to,u),$(ca,to,null),e(to,Iv),e(to,De),$(pa,De,null),e(De,$v),e(De,oo),e(oo,yv),e(oo,dd),e(dd,Cv),e(oo,Tv),e(oo,cd),e(cd,Lv),e(oo,wv),e(De,xv),$(xn,De,null),e(De,kv),$(kn,De,null),bc=!0},p(t,[u]){const ma={};u&2&&(ma.$$scope={dirty:u,ctx:t}),go.$set(ma);const pd={};u&2&&(pd.$$scope={dirty:u,ctx:t}),vo.$set(pd);const md={};u&2&&(md.$$scope={dirty:u,ctx:t}),bo.$set(md);const hd={};u&2&&(hd.$$scope={dirty:u,ctx:t}),Ao.$set(hd);const ha={};u&2&&(ha.$$scope={dirty:u,ctx:t}),Oo.$set(ha);const fd={};u&2&&(fd.$$scope={dirty:u,ctx:t}),Vo.$set(fd);const gd={};u&2&&(gd.$$scope={dirty:u,ctx:t}),Wo.$set(gd);const ud={};u&2&&(ud.$$scope={dirty:u,ctx:t}),So.$set(ud);const fa={};u&2&&(fa.$$scope={dirty:u,ctx:t}),Bo.$set(fa);const _d={};u&2&&(_d.$$scope={dirty:u,ctx:t}),Uo.$set(_d);const vd={};u&2&&(vd.$$scope={dirty:u,ctx:t}),Ho.$set(vd);const Pd={};u&2&&(Pd.$$scope={dirty:u,ctx:t}),Go.$set(Pd);const bd={};u&2&&(bd.$$scope={dirty:u,ctx:t}),Jo.$set(bd);const ga={};u&2&&(ga.$$scope={dirty:u,ctx:t}),Yo.$set(ga);const Id={};u&2&&(Id.$$scope={dirty:u,ctx:t}),Qo.$set(Id);const $d={};u&2&&($d.$$scope={dirty:u,ctx:t}),en.$set($d);const yd={};u&2&&(yd.$$scope={dirty:u,ctx:t}),tn.$set(yd);const Cd={};u&2&&(Cd.$$scope={dirty:u,ctx:t}),nn.$set(Cd);const ua={};u&2&&(ua.$$scope={dirty:u,ctx:t}),sn.$set(ua);const Td={};u&2&&(Td.$$scope={dirty:u,ctx:t}),rn.$set(Td);const R={};u&2&&(R.$$scope={dirty:u,ctx:t}),an.$set(R);const Ld={};u&2&&(Ld.$$scope={dirty:u,ctx:t}),ln.$set(Ld);const wd={};u&2&&(wd.$$scope={dirty:u,ctx:t}),dn.$set(wd);const xd={};u&2&&(xd.$$scope={dirty:u,ctx:t}),cn.$set(xd);const kd={};u&2&&(kd.$$scope={dirty:u,ctx:t}),mn.$set(kd);const zd={};u&2&&(zd.$$scope={dirty:u,ctx:t}),hn.$set(zd);const Md={};u&2&&(Md.$$scope={dirty:u,ctx:t}),gn.$set(Md);const no={};u&2&&(no.$$scope={dirty:u,ctx:t}),un.$set(no);const jd={};u&2&&(jd.$$scope={dirty:u,ctx:t}),vn.$set(jd);const Ed={};u&2&&(Ed.$$scope={dirty:u,ctx:t}),Pn.$set(Ed);const _a={};u&2&&(_a.$$scope={dirty:u,ctx:t}),In.$set(_a);const Fd={};u&2&&(Fd.$$scope={dirty:u,ctx:t}),yn.$set(Fd);const qd={};u&2&&(qd.$$scope={dirty:u,ctx:t}),Tn.$set(qd);const Dd={};u&2&&(Dd.$$scope={dirty:u,ctx:t}),Ln.$set(Dd);const he={};u&2&&(he.$$scope={dirty:u,ctx:t}),xn.$set(he);const Ze={};u&2&&(Ze.$$scope={dirty:u,ctx:t}),kn.$set(Ze)},i(t){bc||(y(n.$$.fragment,t),y(M.$$.fragment,t),y(le.$$.fragment,t),y(Je.$$.fragment,t),y(fs.$$.fragment,t),y(gs.$$.fragment,t),y(go.$$.fragment,t),y(_s.$$.fragment,t),y(Ps.$$.fragment,t),y(bs.$$.fragment,t),y(vo.$$.fragment,t),y($s.$$.fragment,t),y(ys.$$.fragment,t),y(bo.$$.fragment,t),y(Ts.$$.fragment,t),y(Ls.$$.fragment,t),y(xs.$$.fragment,t),y(ks.$$.fragment,t),y(Ms.$$.fragment,t),y(js.$$.fragment,t),y(Es.$$.fragment,t),y(Fs.$$.fragment,t),y(Ns.$$.fragment,t),y(As.$$.fragment,t),y(Os.$$.fragment,t),y(Vs.$$.fragment,t),y(Ws.$$.fragment,t),y(Ss.$$.fragment,t),y(Bs.$$.fragment,t),y(Rs.$$.fragment,t),y(Hs.$$.fragment,t),y(Ks.$$.fragment,t),y(Gs.$$.fragment,t),y(Js.$$.fragment,t),y(Xs.$$.fragment,t),y(Ys.$$.fragment,t),y(Qs.$$.fragment,t),y(er.$$.fragment,t),y(or.$$.fragment,t),y(nr.$$.fragment,t),y(ir.$$.fragment,t),y(Ao.$$.fragment,t),y(Oo.$$.fragment,t),y(lr.$$.fragment,t),y(Vo.$$.fragment,t),y(Wo.$$.fragment,t),y(dr.$$.fragment,t),y(So.$$.fragment,t),y(Bo.$$.fragment,t),y(cr.$$.fragment,t),y(pr.$$.fragment,t),y(gr.$$.fragment,t),y(Uo.$$.fragment,t),y(Ho.$$.fragment,t),y(ur.$$.fragment,t),y(_r.$$.fragment,t),y(Ir.$$.fragment,t),y(Go.$$.fragment,t),y(Jo.$$.fragment,t),y($r.$$.fragment,t),y(yr.$$.fragment,t),y(wr.$$.fragment,t),y(Yo.$$.fragment,t),y(Qo.$$.fragment,t),y(xr.$$.fragment,t),y(kr.$$.fragment,t),y(Er.$$.fragment,t),y(en.$$.fragment,t),y(tn.$$.fragment,t),y(Fr.$$.fragment,t),y(qr.$$.fragment,t),y(nn.$$.fragment,t),y(Or.$$.fragment,t),y(sn.$$.fragment,t),y(rn.$$.fragment,t),y(Vr.$$.fragment,t),y(an.$$.fragment,t),y(ln.$$.fragment,t),y(Wr.$$.fragment,t),y(dn.$$.fragment,t),y(cn.$$.fragment,t),y(Sr.$$.fragment,t),y(Br.$$.fragment,t),y(Rr.$$.fragment,t),y(mn.$$.fragment,t),y(hn.$$.fragment,t),y(Ur.$$.fragment,t),y(Hr.$$.fragment,t),y(Kr.$$.fragment,t),y(gn.$$.fragment,t),y(un.$$.fragment,t),y(Gr.$$.fragment,t),y(Jr.$$.fragment,t),y(na.$$.fragment,t),y(vn.$$.fragment,t),y(Pn.$$.fragment,t),y(sa.$$.fragment,t),y(In.$$.fragment,t),y(ra.$$.fragment,t),y(yn.$$.fragment,t),y(aa.$$.fragment,t),y(ia.$$.fragment,t),y(la.$$.fragment,t),y(Tn.$$.fragment,t),y(Ln.$$.fragment,t),y(da.$$.fragment,t),y(ca.$$.fragment,t),y(pa.$$.fragment,t),y(xn.$$.fragment,t),y(kn.$$.fragment,t),bc=!0)},o(t){C(n.$$.fragment,t),C(M.$$.fragment,t),C(le.$$.fragment,t),C(Je.$$.fragment,t),C(fs.$$.fragment,t),C(gs.$$.fragment,t),C(go.$$.fragment,t),C(_s.$$.fragment,t),C(Ps.$$.fragment,t),C(bs.$$.fragment,t),C(vo.$$.fragment,t),C($s.$$.fragment,t),C(ys.$$.fragment,t),C(bo.$$.fragment,t),C(Ts.$$.fragment,t),C(Ls.$$.fragment,t),C(xs.$$.fragment,t),C(ks.$$.fragment,t),C(Ms.$$.fragment,t),C(js.$$.fragment,t),C(Es.$$.fragment,t),C(Fs.$$.fragment,t),C(Ns.$$.fragment,t),C(As.$$.fragment,t),C(Os.$$.fragment,t),C(Vs.$$.fragment,t),C(Ws.$$.fragment,t),C(Ss.$$.fragment,t),C(Bs.$$.fragment,t),C(Rs.$$.fragment,t),C(Hs.$$.fragment,t),C(Ks.$$.fragment,t),C(Gs.$$.fragment,t),C(Js.$$.fragment,t),C(Xs.$$.fragment,t),C(Ys.$$.fragment,t),C(Qs.$$.fragment,t),C(er.$$.fragment,t),C(or.$$.fragment,t),C(nr.$$.fragment,t),C(ir.$$.fragment,t),C(Ao.$$.fragment,t),C(Oo.$$.fragment,t),C(lr.$$.fragment,t),C(Vo.$$.fragment,t),C(Wo.$$.fragment,t),C(dr.$$.fragment,t),C(So.$$.fragment,t),C(Bo.$$.fragment,t),C(cr.$$.fragment,t),C(pr.$$.fragment,t),C(gr.$$.fragment,t),C(Uo.$$.fragment,t),C(Ho.$$.fragment,t),C(ur.$$.fragment,t),C(_r.$$.fragment,t),C(Ir.$$.fragment,t),C(Go.$$.fragment,t),C(Jo.$$.fragment,t),C($r.$$.fragment,t),C(yr.$$.fragment,t),C(wr.$$.fragment,t),C(Yo.$$.fragment,t),C(Qo.$$.fragment,t),C(xr.$$.fragment,t),C(kr.$$.fragment,t),C(Er.$$.fragment,t),C(en.$$.fragment,t),C(tn.$$.fragment,t),C(Fr.$$.fragment,t),C(qr.$$.fragment,t),C(nn.$$.fragment,t),C(Or.$$.fragment,t),C(sn.$$.fragment,t),C(rn.$$.fragment,t),C(Vr.$$.fragment,t),C(an.$$.fragment,t),C(ln.$$.fragment,t),C(Wr.$$.fragment,t),C(dn.$$.fragment,t),C(cn.$$.fragment,t),C(Sr.$$.fragment,t),C(Br.$$.fragment,t),C(Rr.$$.fragment,t),C(mn.$$.fragment,t),C(hn.$$.fragment,t),C(Ur.$$.fragment,t),C(Hr.$$.fragment,t),C(Kr.$$.fragment,t),C(gn.$$.fragment,t),C(un.$$.fragment,t),C(Gr.$$.fragment,t),C(Jr.$$.fragment,t),C(na.$$.fragment,t),C(vn.$$.fragment,t),C(Pn.$$.fragment,t),C(sa.$$.fragment,t),C(In.$$.fragment,t),C(ra.$$.fragment,t),C(yn.$$.fragment,t),C(aa.$$.fragment,t),C(ia.$$.fragment,t),C(la.$$.fragment,t),C(Tn.$$.fragment,t),C(Ln.$$.fragment,t),C(da.$$.fragment,t),C(ca.$$.fragment,t),C(pa.$$.fragment,t),C(xn.$$.fragment,t),C(kn.$$.fragment,t),bc=!1},d(t){o(d),t&&o(P),t&&o(g),T(n),t&&o(so),t&&o(J),T(M),t&&o(ro),t&&o(oe),t&&o(ao),t&&o(ge),t&&o(io),t&&o(ue),t&&o(at),t&&o(D),T(le),t&&o(lo),t&&o(He),t&&o(co),t&&o(ne),t&&o(po),t&&o(z),t&&o(ms),T(Je,t),t&&o(We),t&&o(H),t&&o(ft),t&&o(Pe),T(fs),t&&o(Nd),t&&o(Y),T(gs),T(go),T(_s),t&&o(Ad),t&&o(ut),T(Ps),t&&o(Od),t&&o(de),T(bs),T(vo),t&&o(Vd),t&&o(Pt),T($s),t&&o(Wd),t&&o(ce),T(ys),T(bo),t&&o(Sd),t&&o($t),T(Ts),t&&o(Bd),t&&o(O),T(Ls),T(xs),T(ks),T(Ms),T(js),t&&o(Rd),t&&o(yt),T(Es),t&&o(Ud),t&&o(Q),T(Fs),T(Ns),T(As),t&&o(Hd),t&&o(Ct),T(Os),t&&o(Kd),t&&o(Se),T(Vs),T(Ws),t&&o(Gd),t&&o(Tt),T(Ss),t&&o(Jd),t&&o(V),T(Bs),T(Rs),T(Hs),T(Ks),T(Gs),T(Js),t&&o(Xd),t&&o(Lt),T(Xs),t&&o(Yd),t&&o(Z),T(Ys),T(Qs),T(er),t&&o(Qd),t&&o(wt),T(or),t&&o(Zd),t&&o(B),T(nr),T(ir),T(Ao),T(Oo),T(lr),T(Vo),T(Wo),T(dr),T(So),T(Bo),t&&o(ec),t&&o(Mt),T(cr),t&&o(tc),t&&o(pe),T(pr),T(gr),T(Uo),T(Ho),t&&o(oc),t&&o(Et),T(ur),t&&o(nc),t&&o(ee),T(_r),T(Ir),T(Go),T(Jo),t&&o(sc),t&&o(qt),T($r),t&&o(rc),t&&o(te),T(yr),T(wr),T(Yo),T(Qo),t&&o(ac),t&&o(Nt),T(xr),t&&o(ic),t&&o(me),T(kr),T(Er),T(en),T(tn),t&&o(lc),t&&o(Ot),T(Fr),t&&o(dc),t&&o(W),T(qr),T(nn),T(Or),T(sn),T(rn),T(Vr),T(an),T(ln),T(Wr),T(dn),T(cn),t&&o(cc),t&&o(Bt),T(Sr),t&&o(pc),t&&o(Rt),T(Br),T(Rr),T(mn),T(hn),t&&o(mc),t&&o(Ht),T(Ur),t&&o(hc),t&&o(Kt),T(Hr),T(Kr),T(gn),T(un),t&&o(fc),t&&o(Jt),T(Gr),t&&o(gc),t&&o(F),T(Jr),T(na),T(vn),T(Pn),T(sa),T(In),T(ra),T(yn),t&&o(uc),t&&o(Yt),T(aa),t&&o(_c),t&&o(Qt),T(ia),T(la),T(Tn),T(Ln),t&&o(vc),t&&o(eo),T(da),t&&o(Pc),t&&o(to),T(ca),T(pa),T(xn),T(kn)}}}const h$={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPImageProcessor",title:"CLIPImageProcessor"},{local:"transformers.CLIPImageProcessor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPTextModelWithProjection",title:"CLIPTextModelWithProjection"},{local:"transformers.CLIPVisionModelWithProjection",title:"CLIPVisionModelWithProjection"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function f$(L){return kI(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class I$ extends TI{constructor(d){super();LI(this,d,f$,m$,wI,{})}}export{I$ as default,h$ as metadata};
