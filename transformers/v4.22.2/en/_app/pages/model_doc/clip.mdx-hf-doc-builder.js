import{S as b_,i as P_,s as $_,e as s,k as m,w as P,t as i,M as y_,c as r,d as o,m as f,a,x as $,h as l,b as h,G as e,g as v,y,q as T,o as I,B as C,v as T_,L as W}from"../../chunks/vendor-hf-doc-builder.js";import{T as oe}from"../../chunks/Tip-hf-doc-builder.js";import{D as k}from"../../chunks/Docstring-hf-doc-builder.js";import{C as A}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as O}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as S}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function I_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

# Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPTextConfig()

# Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration
model = CLIPTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTextModel, CLIPTextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPTextConfig from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function C_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

# Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration
configuration = CLIPVisionConfig()

# Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration
model = CLIPVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPVisionModel, CLIPVisionConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel with openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CLIPVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CLIPVisionModel model from the openai/clip-vit-base-patch32 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function x_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function L_(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function k_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function w_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function M_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function E_(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function j_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function z_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function F_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function q_(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function D_(x){let d,b,u,p,_,n,c,L,Pn,Wt,R,ie,qe,E,$n,ke,yn,Bt,Z,Tn,we,Ke,In,Ut,le,Cn,Kt,de,Re,xn,He,F,N,Ge,ne,Ln,Je,Xe,Rt,De,ce,Ht,Q,kn,Oe,Ze,wn,Gt,M,Mn,pe,En,Jt,H,jn,Me,Ae,zn;return{c(){d=s("p"),b=i("TensorFlow models and layers in "),u=s("code"),p=i("transformers"),_=i(" accept two formats as input:"),n=m(),c=s("ul"),L=s("li"),Pn=i("having all inputs as keyword arguments (like PyTorch models), or"),Wt=m(),R=s("li"),ie=i("having all inputs as a list, tuple or dict in the first positional argument."),qe=m(),E=s("p"),$n=i(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ke=s("code"),yn=i("model.fit()"),Bt=i(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Z=s("code"),Tn=i("model.fit()"),we=i(` supports! If, however, you want to use the second
format outside of Keras methods like `),Ke=s("code"),In=i("fit()"),Ut=i(" and "),le=s("code"),Cn=i("predict()"),Kt=i(`, such as when creating your own layers or models with
the Keras `),de=s("code"),Re=i("Functional"),xn=i(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),He=m(),F=s("ul"),N=s("li"),Ge=i("a single Tensor with "),ne=s("code"),Ln=i("input_ids"),Je=i(" only and nothing else: "),Xe=s("code"),Rt=i("model(input_ids)"),De=m(),ce=s("li"),Ht=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),kn=i("model([input_ids, attention_mask])"),Oe=i(" or "),Ze=s("code"),wn=i("model([input_ids, attention_mask, token_type_ids])"),Gt=m(),M=s("li"),Mn=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=s("code"),En=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Jt=m(),H=s("p"),jn=i(`Note that when creating models and layers with
`),Me=s("a"),Ae=i("subclassing"),zn=i(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){d=r(w,"P",{});var j=a(d);b=l(j,"TensorFlow models and layers in "),u=r(j,"CODE",{});var mr=a(u);p=l(mr,"transformers"),mr.forEach(o),_=l(j," accept two formats as input:"),j.forEach(o),n=f(w),c=r(w,"UL",{});var Xt=a(c);L=r(Xt,"LI",{});var Qe=a(L);Pn=l(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(o),Wt=f(Xt),R=r(Xt,"LI",{});var fr=a(R);ie=l(fr,"having all inputs as a list, tuple or dict in the first positional argument."),fr.forEach(o),Xt.forEach(o),qe=f(w),E=r(w,"P",{});var B=a(E);$n=l(B,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),ke=r(B,"CODE",{});var Ye=a(ke);yn=l(Ye,"model.fit()"),Ye.forEach(o),Bt=l(B,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Z=r(B,"CODE",{});var hr=a(Z);Tn=l(hr,"model.fit()"),hr.forEach(o),we=l(B,` supports! If, however, you want to use the second
format outside of Keras methods like `),Ke=r(B,"CODE",{});var ur=a(Ke);In=l(ur,"fit()"),ur.forEach(o),Ut=l(B," and "),le=r(B,"CODE",{});var Fn=a(le);Cn=l(Fn,"predict()"),Fn.forEach(o),Kt=l(B,`, such as when creating your own layers or models with
the Keras `),de=r(B,"CODE",{});var Ne=a(de);Re=l(Ne,"Functional"),Ne.forEach(o),xn=l(B,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),B.forEach(o),He=f(w),F=r(w,"UL",{});var Ee=a(F);N=r(Ee,"LI",{});var U=a(N);Ge=l(U,"a single Tensor with "),ne=r(U,"CODE",{});var gr=a(ne);Ln=l(gr,"input_ids"),gr.forEach(o),Je=l(U," only and nothing else: "),Xe=r(U,"CODE",{});var Ve=a(Xe);Rt=l(Ve,"model(input_ids)"),Ve.forEach(o),U.forEach(o),De=f(Ee),ce=r(Ee,"LI",{});var et=a(ce);Ht=l(et,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(et,"CODE",{});var _r=a(Q);kn=l(_r,"model([input_ids, attention_mask])"),_r.forEach(o),Oe=l(et," or "),Ze=r(et,"CODE",{});var Se=a(Ze);wn=l(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(o),et.forEach(o),Gt=f(Ee),M=r(Ee,"LI",{});var qn=a(M);Mn=l(qn,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),pe=r(qn,"CODE",{});var vr=a(pe);En=l(vr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),vr.forEach(o),qn.forEach(o),Ee.forEach(o),Jt=f(w),H=r(w,"P",{});var tt=a(H);jn=l(tt,`Note that when creating models and layers with
`),Me=r(tt,"A",{href:!0,rel:!0});var me=a(Me);Ae=l(me,"subclassing"),me.forEach(o),zn=l(tt,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),tt.forEach(o),this.h()},h(){h(Me,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(Me,"rel","nofollow")},m(w,j){v(w,d,j),e(d,b),e(d,u),e(u,p),e(d,_),v(w,n,j),v(w,c,j),e(c,L),e(L,Pn),e(c,Wt),e(c,R),e(R,ie),v(w,qe,j),v(w,E,j),e(E,$n),e(E,ke),e(ke,yn),e(E,Bt),e(E,Z),e(Z,Tn),e(E,we),e(E,Ke),e(Ke,In),e(E,Ut),e(E,le),e(le,Cn),e(E,Kt),e(E,de),e(de,Re),e(E,xn),v(w,He,j),v(w,F,j),e(F,N),e(N,Ge),e(N,ne),e(ne,Ln),e(N,Je),e(N,Xe),e(Xe,Rt),e(F,De),e(F,ce),e(ce,Ht),e(ce,Q),e(Q,kn),e(ce,Oe),e(ce,Ze),e(Ze,wn),e(F,Gt),e(F,M),e(M,Mn),e(M,pe),e(pe,En),v(w,Jt,j),v(w,H,j),e(H,jn),e(H,Me),e(Me,Ae),e(H,zn)},d(w){w&&o(d),w&&o(n),w&&o(c),w&&o(qe),w&&o(E),w&&o(He),w&&o(F),w&&o(Jt),w&&o(H)}}}function O_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function A_(x){let d,b,u,p,_;return p=new A({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function N_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function V_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function S_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function W_(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function B_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function U_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function K_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function R_(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function H_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function G_(x){let d,b,u,p,_;return p=new A({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function J_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function X_(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function Z_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Q_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function Y_(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function ev(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),y(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){I(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),C(p,n)}}}function tv(x){let d,b,u,p,_,n,c,L,Pn,Wt,R,ie,qe,E,$n,ke,yn,Bt,Z,Tn,we,Ke,In,Ut,le,Cn,Kt,de,Re,xn,He,F,N,Ge,ne,Ln,Je,Xe,Rt,De,ce,Ht,Q,kn,Oe,Ze,wn,Gt,M,Mn,pe,En,Jt,H,jn,Me,Ae,zn,w,j,mr,Xt,Qe,fr,B,Ye,hr,ur,Fn,Ne,Ee,U,gr,Ve,et,_r,Se,qn,vr,tt,me,Zt,ba,Dn,Id,Pa,Cd,sl,se,On,xd,Qt,br,Ld,kd,Pr,wd,Md,Ed,ot,jd,$r,zd,Fd,yr,qd,Dd,Od,Yt,An,Ad,Nn,Nd,Tr,Vd,Sd,rl,nt,eo,$a,Vn,Wd,ya,Bd,al,re,Sn,Ud,st,Kd,Ir,Rd,Hd,Wn,Gd,Jd,Xd,rt,Zd,Cr,Qd,Yd,xr,ec,tc,oc,to,il,at,oo,Ta,Bn,nc,Ia,sc,ll,ae,Un,rc,it,ac,Lr,ic,lc,Kn,dc,cc,pc,lt,mc,kr,fc,hc,wr,uc,gc,_c,no,dl,dt,so,Ca,Rn,vc,xa,bc,cl,q,Hn,Pc,La,$c,yc,Gn,Tc,Mr,Ic,Cc,xc,fe,Jn,Lc,ka,kc,wc,wa,Er,Mc,Ma,Ec,jc,Ea,zc,Fc,ro,Xn,qc,Zn,Dc,ja,Oc,Ac,Nc,ao,Qn,Vc,za,Sc,Wc,jr,Yn,pl,ct,io,Fa,es,Bc,qa,Uc,ml,G,ts,Kc,os,Rc,Da,Hc,Gc,Jc,ns,Xc,zr,Zc,Qc,Yc,he,ss,ep,Oa,tp,op,Aa,Fr,np,Na,sp,rp,Va,ap,ip,lo,rs,lp,Sa,dp,fl,pt,co,Wa,as,cp,Ba,pp,hl,je,is,mp,Ua,fp,hp,ls,up,qr,gp,_p,ul,mt,po,Ka,ds,vp,Ra,bp,gl,J,cs,Pp,Ha,$p,yp,Y,Dr,Tp,Ip,Or,Cp,xp,Ar,Lp,kp,Ga,wp,Mp,Nr,Ep,jp,zp,mo,ps,Fp,ms,qp,Vr,Dp,Op,Ap,fo,fs,Np,hs,Vp,Sr,Sp,Wp,_l,ft,ho,Ja,us,Bp,Xa,Up,vl,X,gs,Kp,_s,Rp,vs,Hp,Gp,Jp,ue,bs,Xp,ht,Zp,Wr,Qp,Yp,Za,em,tm,om,uo,nm,go,sm,ge,Ps,rm,ut,am,Br,im,lm,Qa,dm,cm,pm,_o,mm,vo,fm,_e,$s,hm,gt,um,Ur,gm,_m,Ya,vm,bm,Pm,bo,$m,Po,bl,_t,$o,ei,ys,ym,ti,Tm,Pl,vt,Ts,Im,ve,Is,Cm,bt,xm,Kr,Lm,km,oi,wm,Mm,Em,yo,jm,To,$l,Pt,Io,ni,Cs,zm,si,Fm,yl,$t,xs,qm,be,Ls,Dm,yt,Om,Rr,Am,Nm,ri,Vm,Sm,Wm,Co,Bm,xo,Tl,Tt,Lo,ai,ks,Um,ii,Km,Il,D,ws,Rm,Ms,Hm,Hr,Gm,Jm,Xm,Es,Zm,js,Qm,Ym,ef,ko,tf,Pe,zs,of,It,nf,Gr,sf,rf,li,af,lf,df,wo,cf,Mo,pf,$e,Fs,mf,Ct,ff,Jr,hf,uf,di,gf,_f,vf,Eo,bf,jo,Pf,ye,qs,$f,xt,yf,Xr,Tf,If,ci,Cf,xf,Lf,zo,kf,Fo,Cl,Lt,qo,pi,Ds,wf,mi,Mf,xl,kt,Os,Ef,Te,As,jf,wt,zf,Zr,Ff,qf,fi,Df,Of,Af,Do,Nf,Oo,Ll,Mt,Ao,hi,Ns,Vf,ui,Sf,kl,Et,Vs,Wf,Ie,Ss,Bf,jt,Uf,Qr,Kf,Rf,gi,Hf,Gf,Jf,No,Xf,Vo,wl,zt,So,_i,Ws,Zf,vi,Qf,Ml,z,Bs,Yf,Us,eh,Yr,th,oh,nh,Ks,sh,Rs,rh,ah,ih,bi,lh,dh,ze,Pi,Hs,ch,ph,$i,Gs,mh,fh,yi,Js,hh,uh,Ti,Xs,gh,_h,Ce,Zs,vh,Ft,bh,Ii,Ph,$h,Ci,yh,Th,Ih,Wo,Ch,Bo,xh,Uo,Qs,Lh,Ko,kh,Ro,Ys,wh,Ho,El,qt,Go,xi,er,Mh,Li,Eh,jl,Dt,tr,jh,xe,or,zh,Ot,Fh,ki,qh,Dh,wi,Oh,Ah,Nh,Jo,Vh,Xo,zl,At,Zo,Mi,nr,Sh,Ei,Wh,Fl,Nt,sr,Bh,Le,rr,Uh,Vt,Kh,ji,Rh,Hh,zi,Gh,Jh,Xh,Qo,Zh,Yo,ql;return n=new O({}),E=new O({}),ne=new O({}),Ne=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Dn=new O({}),On=new k({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/configuration_clip.py#L254"}}),An=new k({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/configuration_clip.py#L303",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),Vn=new O({}),Sn=new k({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the CLIP text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPModel">CLIPModel</a>.`,name:"vocab_size"},{anchor:"transformers.CLIPTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/configuration_clip.py#L40"}}),to=new S({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[I_]},$$scope:{ctx:x}}}),Bn=new O({}),Un=new k({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"num_channels",val:" = 3"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/configuration_clip.py#L148"}}),no=new S({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[C_]},$$scope:{ctx:x}}}),Rn=new O({}),Hn=new k({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/tokenization_clip.py#L100"}}),Jn=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/tokenization_clip.py#L186",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xn=new k({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/tokenization_clip.py#L213",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/tokenization_clip.py#L241",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yn=new k({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/tokenization_clip.py#L336"}}),es=new O({}),ts=new k({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),ss=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rs=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new O({}),is=new k({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"do_convert_rgb",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.CLIPFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BICUBIC</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.CLIPFeatureExtractor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to crop the input at the center. If the input size is smaller than <code>crop_size</code> along any edge, the
image is padded with 0&#x2019;s and then center cropped.`,name:"do_center_crop"},{anchor:"transformers.CLIPFeatureExtractor.crop_size",description:`<strong>crop_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
Desired output size when applying center-cropping. Only has an effect if <code>do_center_crop</code> is set to <code>True</code>.`,name:"crop_size"},{anchor:"transformers.CLIPFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with <code>image_mean</code> and <code>image_std</code>.`,name:"do_normalize"},{anchor:"transformers.CLIPFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.485, 0.456, 0.406]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.CLIPFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.229, 0.224, 0.225]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"},{anchor:"transformers.CLIPFeatureExtractor.convert_rgb",description:`<strong>convert_rgb</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether or not to convert <code>PIL.Image.Image</code> into <code>RGB</code> format`,name:"convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/feature_extraction_clip.py#L30"}}),ds=new O({}),cs=new k({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/processing_clip.py#L22"}}),ps=new k({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/processing_clip.py#L95"}}),fs=new k({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/processing_clip.py#L102"}}),us=new O({}),gs=new k({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_clip.py#L852"}}),bs=new k({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.CLIPModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_clip.py#L983",returnDescription:`
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
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>torch.FloatTensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>BaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_clip.CLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new oe({props:{$$slots:{default:[x_]},$$scope:{ctx:x}}}),go=new S({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[L_]},$$scope:{ctx:x}}}),Ps=new k({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_clip.py#L887",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),_o=new oe({props:{$$slots:{default:[k_]},$$scope:{ctx:x}}}),vo=new S({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[w_]},$$scope:{ctx:x}}}),$s=new k({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_clip.py#L934",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),bo=new oe({props:{$$slots:{default:[M_]},$$scope:{ctx:x}}}),Po=new S({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[E_]},$$scope:{ctx:x}}}),ys=new O({}),Ts=new k({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_clip.py#L688"}}),Is=new k({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_clip.py#L703",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new oe({props:{$$slots:{default:[j_]},$$scope:{ctx:x}}}),To=new S({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[z_]},$$scope:{ctx:x}}}),Cs=new O({}),xs=new k({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_clip.py#L799"}}),Ls=new k({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_clip.py#L812",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new oe({props:{$$slots:{default:[F_]},$$scope:{ctx:x}}}),xo=new S({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[q_]},$$scope:{ctx:x}}}),ks=new O({}),ws=new k({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_tf_clip.py#L1219"}}),ko=new oe({props:{$$slots:{default:[D_]},$$scope:{ctx:x}}}),zs=new k({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCLIPModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_tf_clip.py#L1347",returnDescription:`
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
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>tf.Tensor</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),wo=new oe({props:{$$slots:{default:[O_]},$$scope:{ctx:x}}}),Mo=new S({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[A_]},$$scope:{ctx:x}}}),Fs=new k({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_tf_clip.py#L1265",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Eo=new oe({props:{$$slots:{default:[N_]},$$scope:{ctx:x}}}),jo=new S({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[V_]},$$scope:{ctx:x}}}),qs=new k({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_tf_clip.py#L1305",returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),zo=new oe({props:{$$slots:{default:[S_]},$$scope:{ctx:x}}}),Fo=new S({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[W_]},$$scope:{ctx:x}}}),Ds=new O({}),Os=new k({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_tf_clip.py#L1046"}}),As=new k({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_tf_clip.py#L1054",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new oe({props:{$$slots:{default:[B_]},$$scope:{ctx:x}}}),Oo=new S({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[U_]},$$scope:{ctx:x}}}),Ns=new O({}),Vs=new k({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_tf_clip.py#L1121"}}),Ss=new k({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details. output_attentions (<code>bool</code>, <em>optional</em>): Whether or not to
return the attentions tensors of all attention layers. See <code>attentions</code> under returned tensors for more
detail. This argument can be used only in eager mode, in graph mode the value in the config will be used
instead.`,name:"pixel_values"},{anchor:"transformers.TFCLIPVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCLIPVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCLIPVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_tf_clip.py#L1162",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),No=new oe({props:{$$slots:{default:[K_]},$$scope:{ctx:x}}}),Vo=new S({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[R_]},$$scope:{ctx:x}}}),Ws=new O({}),Bs=new k({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),Zs=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_flax_clip.py#L777",returnDescription:`
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
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>image_embeds(<code>jnp.ndarray</code></strong> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
<li><strong>text_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>FlaxBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_flax_clip.FlaxCLIPOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new oe({props:{$$slots:{default:[H_]},$$scope:{ctx:x}}}),Bo=new S({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[G_]},$$scope:{ctx:x}}}),Qs=new k({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_flax_clip.py#L822",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ko=new S({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[J_]},$$scope:{ctx:x}}}),Ys=new k({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ho=new S({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[X_]},$$scope:{ctx:x}}}),er=new O({}),tr=new k({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),or=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_flax_clip.py#L622",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new oe({props:{$$slots:{default:[Z_]},$$scope:{ctx:x}}}),Xo=new S({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[Q_]},$$scope:{ctx:x}}}),nr=new O({}),sr=new k({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),rr=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/clip/modeling_flax_clip.py#L702",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qo=new oe({props:{$$slots:{default:[Y_]},$$scope:{ctx:x}}}),Yo=new S({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[ev]},$$scope:{ctx:x}}}),{c(){d=s("meta"),b=m(),u=s("h1"),p=s("a"),_=s("span"),P(n.$$.fragment),c=m(),L=s("span"),Pn=i("CLIP"),Wt=m(),R=s("h2"),ie=s("a"),qe=s("span"),P(E.$$.fragment),$n=m(),ke=s("span"),yn=i("Overview"),Bt=m(),Z=s("p"),Tn=i("The CLIP model was proposed in "),we=s("a"),Ke=i("Learning Transferable Visual Models From Natural Language Supervision"),In=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Ut=m(),le=s("p"),Cn=i("The abstract from the paper is the following:"),Kt=m(),de=s("p"),Re=s("em"),xn=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),He=m(),F=s("h2"),N=s("a"),Ge=s("span"),P(ne.$$.fragment),Ln=m(),Je=s("span"),Xe=i("Usage"),Rt=m(),De=s("p"),ce=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Ht=m(),Q=s("p"),kn=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Oe=s("a"),Ze=i("CLIPFeatureExtractor"),wn=i(" can be used to resize (or rescale) and normalize images for the model."),Gt=m(),M=s("p"),Mn=i("The "),pe=s("a"),En=i("CLIPTokenizer"),Jt=i(" is used to encode the text. The "),H=s("a"),jn=i("CLIPProcessor"),Me=i(` wraps
`),Ae=s("a"),zn=i("CLIPFeatureExtractor"),w=i(" and "),j=s("a"),mr=i("CLIPTokenizer"),Xt=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),Qe=s("a"),fr=i("CLIPProcessor"),B=i(" and "),Ye=s("a"),hr=i("CLIPModel"),ur=i("."),Fn=m(),P(Ne.$$.fragment),Ee=m(),U=s("p"),gr=i("This model was contributed by "),Ve=s("a"),et=i("valhalla"),_r=i(". The original code can be found "),Se=s("a"),qn=i("here"),vr=i("."),tt=m(),me=s("h2"),Zt=s("a"),ba=s("span"),P(Dn.$$.fragment),Id=m(),Pa=s("span"),Cd=i("CLIPConfig"),sl=m(),se=s("div"),P(On.$$.fragment),xd=m(),Qt=s("p"),br=s("a"),Ld=i("CLIPConfig"),kd=i(" is the configuration class to store the configuration of a "),Pr=s("a"),wd=i("CLIPModel"),Md=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Ed=m(),ot=s("p"),jd=i("Configuration objects inherit from "),$r=s("a"),zd=i("PretrainedConfig"),Fd=i(` and can be used to control the model outputs. Read the
documentation from `),yr=s("a"),qd=i("PretrainedConfig"),Dd=i(" for more information."),Od=m(),Yt=s("div"),P(An.$$.fragment),Ad=m(),Nn=s("p"),Nd=i("Instantiate a "),Tr=s("a"),Vd=i("CLIPConfig"),Sd=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),rl=m(),nt=s("h2"),eo=s("a"),$a=s("span"),P(Vn.$$.fragment),Wd=m(),ya=s("span"),Bd=i("CLIPTextConfig"),al=m(),re=s("div"),P(Sn.$$.fragment),Ud=m(),st=s("p"),Kd=i("This is the configuration class to store the configuration of a "),Ir=s("a"),Rd=i("CLIPModel"),Hd=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Wn=s("a"),Gd=i("openai/clip-vit-base-patch32"),Jd=i(" architecture."),Xd=m(),rt=s("p"),Zd=i("Configuration objects inherit from "),Cr=s("a"),Qd=i("PretrainedConfig"),Yd=i(` and can be used to control the model outputs. Read the
documentation from `),xr=s("a"),ec=i("PretrainedConfig"),tc=i(" for more information."),oc=m(),P(to.$$.fragment),il=m(),at=s("h2"),oo=s("a"),Ta=s("span"),P(Bn.$$.fragment),nc=m(),Ia=s("span"),sc=i("CLIPVisionConfig"),ll=m(),ae=s("div"),P(Un.$$.fragment),rc=m(),it=s("p"),ac=i("This is the configuration class to store the configuration of a "),Lr=s("a"),ic=i("CLIPModel"),lc=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Kn=s("a"),dc=i("openai/clip-vit-base-patch32"),cc=i(" architecture."),pc=m(),lt=s("p"),mc=i("Configuration objects inherit from "),kr=s("a"),fc=i("PretrainedConfig"),hc=i(` and can be used to control the model outputs. Read the
documentation from `),wr=s("a"),uc=i("PretrainedConfig"),gc=i(" for more information."),_c=m(),P(no.$$.fragment),dl=m(),dt=s("h2"),so=s("a"),Ca=s("span"),P(Rn.$$.fragment),vc=m(),xa=s("span"),bc=i("CLIPTokenizer"),cl=m(),q=s("div"),P(Hn.$$.fragment),Pc=m(),La=s("p"),$c=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),yc=m(),Gn=s("p"),Tc=i("This tokenizer inherits from "),Mr=s("a"),Ic=i("PreTrainedTokenizer"),Cc=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),xc=m(),fe=s("div"),P(Jn.$$.fragment),Lc=m(),ka=s("p"),kc=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),wc=m(),wa=s("ul"),Er=s("li"),Mc=i("single sequence: "),Ma=s("code"),Ec=i("<|startoftext|> X <|endoftext|>"),jc=m(),Ea=s("p"),zc=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Fc=m(),ro=s("div"),P(Xn.$$.fragment),qc=m(),Zn=s("p"),Dc=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ja=s("code"),Oc=i("prepare_for_model"),Ac=i(" method."),Nc=m(),ao=s("div"),P(Qn.$$.fragment),Vc=m(),za=s("p"),Sc=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Wc=m(),jr=s("div"),P(Yn.$$.fragment),pl=m(),ct=s("h2"),io=s("a"),Fa=s("span"),P(es.$$.fragment),Bc=m(),qa=s("span"),Uc=i("CLIPTokenizerFast"),ml=m(),G=s("div"),P(ts.$$.fragment),Kc=m(),os=s("p"),Rc=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Da=s("em"),Hc=i("tokenizers"),Gc=i(` library). Based on byte-level
Byte-Pair-Encoding.`),Jc=m(),ns=s("p"),Xc=i("This tokenizer inherits from "),zr=s("a"),Zc=i("PreTrainedTokenizerFast"),Qc=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yc=m(),he=s("div"),P(ss.$$.fragment),ep=m(),Oa=s("p"),tp=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),op=m(),Aa=s("ul"),Fr=s("li"),np=i("single sequence: "),Na=s("code"),sp=i("<|startoftext|> X <|endoftext|>"),rp=m(),Va=s("p"),ap=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),ip=m(),lo=s("div"),P(rs.$$.fragment),lp=m(),Sa=s("p"),dp=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),fl=m(),pt=s("h2"),co=s("a"),Wa=s("span"),P(as.$$.fragment),cp=m(),Ba=s("span"),pp=i("CLIPFeatureExtractor"),hl=m(),je=s("div"),P(is.$$.fragment),mp=m(),Ua=s("p"),fp=i("Constructs a CLIP feature extractor."),hp=m(),ls=s("p"),up=i("This feature extractor inherits from "),qr=s("a"),gp=i("FeatureExtractionMixin"),_p=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ul=m(),mt=s("h2"),po=s("a"),Ka=s("span"),P(ds.$$.fragment),vp=m(),Ra=s("span"),bp=i("CLIPProcessor"),gl=m(),J=s("div"),P(cs.$$.fragment),Pp=m(),Ha=s("p"),$p=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),yp=m(),Y=s("p"),Dr=s("a"),Tp=i("CLIPProcessor"),Ip=i(" offers all the functionalities of "),Or=s("a"),Cp=i("CLIPFeatureExtractor"),xp=i(" and "),Ar=s("a"),Lp=i("CLIPTokenizerFast"),kp=i(`. See the
`),Ga=s("code"),wp=i("__call__()"),Mp=i(" and "),Nr=s("a"),Ep=i("decode()"),jp=i(" for more information."),zp=m(),mo=s("div"),P(ps.$$.fragment),Fp=m(),ms=s("p"),qp=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Vr=s("a"),Dp=i("batch_decode()"),Op=i(`. Please
refer to the docstring of this method for more information.`),Ap=m(),fo=s("div"),P(fs.$$.fragment),Np=m(),hs=s("p"),Vp=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Sr=s("a"),Sp=i("decode()"),Wp=i(`. Please refer to
the docstring of this method for more information.`),_l=m(),ft=s("h2"),ho=s("a"),Ja=s("span"),P(us.$$.fragment),Bp=m(),Xa=s("span"),Up=i("CLIPModel"),vl=m(),X=s("div"),P(gs.$$.fragment),Kp=m(),_s=s("p"),Rp=i("This model is a PyTorch "),vs=s("a"),Hp=i("torch.nn.Module"),Gp=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jp=m(),ue=s("div"),P(bs.$$.fragment),Xp=m(),ht=s("p"),Zp=i("The "),Wr=s("a"),Qp=i("CLIPModel"),Yp=i(" forward method, overrides the "),Za=s("code"),em=i("__call__"),tm=i(" special method."),om=m(),P(uo.$$.fragment),nm=m(),P(go.$$.fragment),sm=m(),ge=s("div"),P(Ps.$$.fragment),rm=m(),ut=s("p"),am=i("The "),Br=s("a"),im=i("CLIPModel"),lm=i(" forward method, overrides the "),Qa=s("code"),dm=i("__call__"),cm=i(" special method."),pm=m(),P(_o.$$.fragment),mm=m(),P(vo.$$.fragment),fm=m(),_e=s("div"),P($s.$$.fragment),hm=m(),gt=s("p"),um=i("The "),Ur=s("a"),gm=i("CLIPModel"),_m=i(" forward method, overrides the "),Ya=s("code"),vm=i("__call__"),bm=i(" special method."),Pm=m(),P(bo.$$.fragment),$m=m(),P(Po.$$.fragment),bl=m(),_t=s("h2"),$o=s("a"),ei=s("span"),P(ys.$$.fragment),ym=m(),ti=s("span"),Tm=i("CLIPTextModel"),Pl=m(),vt=s("div"),P(Ts.$$.fragment),Im=m(),ve=s("div"),P(Is.$$.fragment),Cm=m(),bt=s("p"),xm=i("The "),Kr=s("a"),Lm=i("CLIPTextModel"),km=i(" forward method, overrides the "),oi=s("code"),wm=i("__call__"),Mm=i(" special method."),Em=m(),P(yo.$$.fragment),jm=m(),P(To.$$.fragment),$l=m(),Pt=s("h2"),Io=s("a"),ni=s("span"),P(Cs.$$.fragment),zm=m(),si=s("span"),Fm=i("CLIPVisionModel"),yl=m(),$t=s("div"),P(xs.$$.fragment),qm=m(),be=s("div"),P(Ls.$$.fragment),Dm=m(),yt=s("p"),Om=i("The "),Rr=s("a"),Am=i("CLIPVisionModel"),Nm=i(" forward method, overrides the "),ri=s("code"),Vm=i("__call__"),Sm=i(" special method."),Wm=m(),P(Co.$$.fragment),Bm=m(),P(xo.$$.fragment),Tl=m(),Tt=s("h2"),Lo=s("a"),ai=s("span"),P(ks.$$.fragment),Um=m(),ii=s("span"),Km=i("TFCLIPModel"),Il=m(),D=s("div"),P(ws.$$.fragment),Rm=m(),Ms=s("p"),Hm=i("This model inherits from "),Hr=s("a"),Gm=i("TFPreTrainedModel"),Jm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xm=m(),Es=s("p"),Zm=i("This model is also a "),js=s("a"),Qm=i("tf.keras.Model"),Ym=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ef=m(),P(ko.$$.fragment),tf=m(),Pe=s("div"),P(zs.$$.fragment),of=m(),It=s("p"),nf=i("The "),Gr=s("a"),sf=i("TFCLIPModel"),rf=i(" forward method, overrides the "),li=s("code"),af=i("__call__"),lf=i(" special method."),df=m(),P(wo.$$.fragment),cf=m(),P(Mo.$$.fragment),pf=m(),$e=s("div"),P(Fs.$$.fragment),mf=m(),Ct=s("p"),ff=i("The "),Jr=s("a"),hf=i("TFCLIPModel"),uf=i(" forward method, overrides the "),di=s("code"),gf=i("__call__"),_f=i(" special method."),vf=m(),P(Eo.$$.fragment),bf=m(),P(jo.$$.fragment),Pf=m(),ye=s("div"),P(qs.$$.fragment),$f=m(),xt=s("p"),yf=i("The "),Xr=s("a"),Tf=i("TFCLIPModel"),If=i(" forward method, overrides the "),ci=s("code"),Cf=i("__call__"),xf=i(" special method."),Lf=m(),P(zo.$$.fragment),kf=m(),P(Fo.$$.fragment),Cl=m(),Lt=s("h2"),qo=s("a"),pi=s("span"),P(Ds.$$.fragment),wf=m(),mi=s("span"),Mf=i("TFCLIPTextModel"),xl=m(),kt=s("div"),P(Os.$$.fragment),Ef=m(),Te=s("div"),P(As.$$.fragment),jf=m(),wt=s("p"),zf=i("The "),Zr=s("a"),Ff=i("TFCLIPTextModel"),qf=i(" forward method, overrides the "),fi=s("code"),Df=i("__call__"),Of=i(" special method."),Af=m(),P(Do.$$.fragment),Nf=m(),P(Oo.$$.fragment),Ll=m(),Mt=s("h2"),Ao=s("a"),hi=s("span"),P(Ns.$$.fragment),Vf=m(),ui=s("span"),Sf=i("TFCLIPVisionModel"),kl=m(),Et=s("div"),P(Vs.$$.fragment),Wf=m(),Ie=s("div"),P(Ss.$$.fragment),Bf=m(),jt=s("p"),Uf=i("The "),Qr=s("a"),Kf=i("TFCLIPVisionModel"),Rf=i(" forward method, overrides the "),gi=s("code"),Hf=i("__call__"),Gf=i(" special method."),Jf=m(),P(No.$$.fragment),Xf=m(),P(Vo.$$.fragment),wl=m(),zt=s("h2"),So=s("a"),_i=s("span"),P(Ws.$$.fragment),Zf=m(),vi=s("span"),Qf=i("FlaxCLIPModel"),Ml=m(),z=s("div"),P(Bs.$$.fragment),Yf=m(),Us=s("p"),eh=i("This model inherits from "),Yr=s("a"),th=i("FlaxPreTrainedModel"),oh=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nh=m(),Ks=s("p"),sh=i("This model is also a Flax Linen "),Rs=s("a"),rh=i("flax.linen.Module"),ah=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ih=m(),bi=s("p"),lh=i("Finally, this model supports inherent JAX features such as:"),dh=m(),ze=s("ul"),Pi=s("li"),Hs=s("a"),ch=i("Just-In-Time (JIT) compilation"),ph=m(),$i=s("li"),Gs=s("a"),mh=i("Automatic Differentiation"),fh=m(),yi=s("li"),Js=s("a"),hh=i("Vectorization"),uh=m(),Ti=s("li"),Xs=s("a"),gh=i("Parallelization"),_h=m(),Ce=s("div"),P(Zs.$$.fragment),vh=m(),Ft=s("p"),bh=i("The "),Ii=s("code"),Ph=i("FlaxCLIPPreTrainedModel"),$h=i(" forward method, overrides the "),Ci=s("code"),yh=i("__call__"),Th=i(" special method."),Ih=m(),P(Wo.$$.fragment),Ch=m(),P(Bo.$$.fragment),xh=m(),Uo=s("div"),P(Qs.$$.fragment),Lh=m(),P(Ko.$$.fragment),kh=m(),Ro=s("div"),P(Ys.$$.fragment),wh=m(),P(Ho.$$.fragment),El=m(),qt=s("h2"),Go=s("a"),xi=s("span"),P(er.$$.fragment),Mh=m(),Li=s("span"),Eh=i("FlaxCLIPTextModel"),jl=m(),Dt=s("div"),P(tr.$$.fragment),jh=m(),xe=s("div"),P(or.$$.fragment),zh=m(),Ot=s("p"),Fh=i("The "),ki=s("code"),qh=i("FlaxCLIPTextPreTrainedModel"),Dh=i(" forward method, overrides the "),wi=s("code"),Oh=i("__call__"),Ah=i(" special method."),Nh=m(),P(Jo.$$.fragment),Vh=m(),P(Xo.$$.fragment),zl=m(),At=s("h2"),Zo=s("a"),Mi=s("span"),P(nr.$$.fragment),Sh=m(),Ei=s("span"),Wh=i("FlaxCLIPVisionModel"),Fl=m(),Nt=s("div"),P(sr.$$.fragment),Bh=m(),Le=s("div"),P(rr.$$.fragment),Uh=m(),Vt=s("p"),Kh=i("The "),ji=s("code"),Rh=i("FlaxCLIPVisionPreTrainedModel"),Hh=i(" forward method, overrides the "),zi=s("code"),Gh=i("__call__"),Jh=i(" special method."),Xh=m(),P(Qo.$$.fragment),Zh=m(),P(Yo.$$.fragment),this.h()},l(t){const g=y_('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),b=f(t),u=r(t,"H1",{class:!0});var ar=a(u);p=r(ar,"A",{id:!0,class:!0,href:!0});var Fi=a(p);_=r(Fi,"SPAN",{});var qi=a(_);$(n.$$.fragment,qi),qi.forEach(o),Fi.forEach(o),c=f(ar),L=r(ar,"SPAN",{});var Di=a(L);Pn=l(Di,"CLIP"),Di.forEach(o),ar.forEach(o),Wt=f(t),R=r(t,"H2",{class:!0});var ir=a(R);ie=r(ir,"A",{id:!0,class:!0,href:!0});var Oi=a(ie);qe=r(Oi,"SPAN",{});var Ai=a(qe);$(E.$$.fragment,Ai),Ai.forEach(o),Oi.forEach(o),$n=f(ir),ke=r(ir,"SPAN",{});var Ni=a(ke);yn=l(Ni,"Overview"),Ni.forEach(o),ir.forEach(o),Bt=f(t),Z=r(t,"P",{});var lr=a(Z);Tn=l(lr,"The CLIP model was proposed in "),we=r(lr,"A",{href:!0,rel:!0});var Vi=a(we);Ke=l(Vi,"Learning Transferable Visual Models From Natural Language Supervision"),Vi.forEach(o),In=l(lr,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),lr.forEach(o),Ut=f(t),le=r(t,"P",{});var Si=a(le);Cn=l(Si,"The abstract from the paper is the following:"),Si.forEach(o),Kt=f(t),de=r(t,"P",{});var Wi=a(de);Re=r(Wi,"EM",{});var Bi=a(Re);xn=l(Bi,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Bi.forEach(o),Wi.forEach(o),He=f(t),F=r(t,"H2",{class:!0});var dr=a(F);N=r(dr,"A",{id:!0,class:!0,href:!0});var Ui=a(N);Ge=r(Ui,"SPAN",{});var Ki=a(Ge);$(ne.$$.fragment,Ki),Ki.forEach(o),Ui.forEach(o),Ln=f(dr),Je=r(dr,"SPAN",{});var Ri=a(Je);Xe=l(Ri,"Usage"),Ri.forEach(o),dr.forEach(o),Rt=f(t),De=r(t,"P",{});var Hi=a(De);ce=l(Hi,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Hi.forEach(o),Ht=f(t),Q=r(t,"P",{});var cr=a(Q);kn=l(cr,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),Oe=r(cr,"A",{href:!0});var Gi=a(Oe);Ze=l(Gi,"CLIPFeatureExtractor"),Gi.forEach(o),wn=l(cr," can be used to resize (or rescale) and normalize images for the model."),cr.forEach(o),Gt=f(t),M=r(t,"P",{});var V=a(M);Mn=l(V,"The "),pe=r(V,"A",{href:!0});var Ji=a(pe);En=l(Ji,"CLIPTokenizer"),Ji.forEach(o),Jt=l(V," is used to encode the text. The "),H=r(V,"A",{href:!0});var Xi=a(H);jn=l(Xi,"CLIPProcessor"),Xi.forEach(o),Me=l(V,` wraps
`),Ae=r(V,"A",{href:!0});var Zi=a(Ae);zn=l(Zi,"CLIPFeatureExtractor"),Zi.forEach(o),w=l(V," and "),j=r(V,"A",{href:!0});var Qi=a(j);mr=l(Qi,"CLIPTokenizer"),Qi.forEach(o),Xt=l(V,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),Qe=r(V,"A",{href:!0});var Yi=a(Qe);fr=l(Yi,"CLIPProcessor"),Yi.forEach(o),B=l(V," and "),Ye=r(V,"A",{href:!0});var el=a(Ye);hr=l(el,"CLIPModel"),el.forEach(o),ur=l(V,"."),V.forEach(o),Fn=f(t),$(Ne.$$.fragment,t),Ee=f(t),U=r(t,"P",{});var St=a(U);gr=l(St,"This model was contributed by "),Ve=r(St,"A",{href:!0,rel:!0});var tl=a(Ve);et=l(tl,"valhalla"),tl.forEach(o),_r=l(St,". The original code can be found "),Se=r(St,"A",{href:!0,rel:!0});var ol=a(Se);qn=l(ol,"here"),ol.forEach(o),vr=l(St,"."),St.forEach(o),tt=f(t),me=r(t,"H2",{class:!0});var pr=a(me);Zt=r(pr,"A",{id:!0,class:!0,href:!0});var eu=a(Zt);ba=r(eu,"SPAN",{});var tu=a(ba);$(Dn.$$.fragment,tu),tu.forEach(o),eu.forEach(o),Id=f(pr),Pa=r(pr,"SPAN",{});var ou=a(Pa);Cd=l(ou,"CLIPConfig"),ou.forEach(o),pr.forEach(o),sl=f(t),se=r(t,"DIV",{class:!0});var en=a(se);$(On.$$.fragment,en),xd=f(en),Qt=r(en,"P",{});var nl=a(Qt);br=r(nl,"A",{href:!0});var nu=a(br);Ld=l(nu,"CLIPConfig"),nu.forEach(o),kd=l(nl," is the configuration class to store the configuration of a "),Pr=r(nl,"A",{href:!0});var su=a(Pr);wd=l(su,"CLIPModel"),su.forEach(o),Md=l(nl,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),nl.forEach(o),Ed=f(en),ot=r(en,"P",{});var ea=a(ot);jd=l(ea,"Configuration objects inherit from "),$r=r(ea,"A",{href:!0});var ru=a($r);zd=l(ru,"PretrainedConfig"),ru.forEach(o),Fd=l(ea,` and can be used to control the model outputs. Read the
documentation from `),yr=r(ea,"A",{href:!0});var au=a(yr);qd=l(au,"PretrainedConfig"),au.forEach(o),Dd=l(ea," for more information."),ea.forEach(o),Od=f(en),Yt=r(en,"DIV",{class:!0});var Dl=a(Yt);$(An.$$.fragment,Dl),Ad=f(Dl),Nn=r(Dl,"P",{});var Ol=a(Nn);Nd=l(Ol,"Instantiate a "),Tr=r(Ol,"A",{href:!0});var iu=a(Tr);Vd=l(iu,"CLIPConfig"),iu.forEach(o),Sd=l(Ol,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Ol.forEach(o),Dl.forEach(o),en.forEach(o),rl=f(t),nt=r(t,"H2",{class:!0});var Al=a(nt);eo=r(Al,"A",{id:!0,class:!0,href:!0});var lu=a(eo);$a=r(lu,"SPAN",{});var du=a($a);$(Vn.$$.fragment,du),du.forEach(o),lu.forEach(o),Wd=f(Al),ya=r(Al,"SPAN",{});var cu=a(ya);Bd=l(cu,"CLIPTextConfig"),cu.forEach(o),Al.forEach(o),al=f(t),re=r(t,"DIV",{class:!0});var tn=a(re);$(Sn.$$.fragment,tn),Ud=f(tn),st=r(tn,"P",{});var ta=a(st);Kd=l(ta,"This is the configuration class to store the configuration of a "),Ir=r(ta,"A",{href:!0});var pu=a(Ir);Rd=l(pu,"CLIPModel"),pu.forEach(o),Hd=l(ta,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Wn=r(ta,"A",{href:!0,rel:!0});var mu=a(Wn);Gd=l(mu,"openai/clip-vit-base-patch32"),mu.forEach(o),Jd=l(ta," architecture."),ta.forEach(o),Xd=f(tn),rt=r(tn,"P",{});var oa=a(rt);Zd=l(oa,"Configuration objects inherit from "),Cr=r(oa,"A",{href:!0});var fu=a(Cr);Qd=l(fu,"PretrainedConfig"),fu.forEach(o),Yd=l(oa,` and can be used to control the model outputs. Read the
documentation from `),xr=r(oa,"A",{href:!0});var hu=a(xr);ec=l(hu,"PretrainedConfig"),hu.forEach(o),tc=l(oa," for more information."),oa.forEach(o),oc=f(tn),$(to.$$.fragment,tn),tn.forEach(o),il=f(t),at=r(t,"H2",{class:!0});var Nl=a(at);oo=r(Nl,"A",{id:!0,class:!0,href:!0});var uu=a(oo);Ta=r(uu,"SPAN",{});var gu=a(Ta);$(Bn.$$.fragment,gu),gu.forEach(o),uu.forEach(o),nc=f(Nl),Ia=r(Nl,"SPAN",{});var _u=a(Ia);sc=l(_u,"CLIPVisionConfig"),_u.forEach(o),Nl.forEach(o),ll=f(t),ae=r(t,"DIV",{class:!0});var on=a(ae);$(Un.$$.fragment,on),rc=f(on),it=r(on,"P",{});var na=a(it);ac=l(na,"This is the configuration class to store the configuration of a "),Lr=r(na,"A",{href:!0});var vu=a(Lr);ic=l(vu,"CLIPModel"),vu.forEach(o),lc=l(na,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Kn=r(na,"A",{href:!0,rel:!0});var bu=a(Kn);dc=l(bu,"openai/clip-vit-base-patch32"),bu.forEach(o),cc=l(na," architecture."),na.forEach(o),pc=f(on),lt=r(on,"P",{});var sa=a(lt);mc=l(sa,"Configuration objects inherit from "),kr=r(sa,"A",{href:!0});var Pu=a(kr);fc=l(Pu,"PretrainedConfig"),Pu.forEach(o),hc=l(sa,` and can be used to control the model outputs. Read the
documentation from `),wr=r(sa,"A",{href:!0});var $u=a(wr);uc=l($u,"PretrainedConfig"),$u.forEach(o),gc=l(sa," for more information."),sa.forEach(o),_c=f(on),$(no.$$.fragment,on),on.forEach(o),dl=f(t),dt=r(t,"H2",{class:!0});var Vl=a(dt);so=r(Vl,"A",{id:!0,class:!0,href:!0});var yu=a(so);Ca=r(yu,"SPAN",{});var Tu=a(Ca);$(Rn.$$.fragment,Tu),Tu.forEach(o),yu.forEach(o),vc=f(Vl),xa=r(Vl,"SPAN",{});var Iu=a(xa);bc=l(Iu,"CLIPTokenizer"),Iu.forEach(o),Vl.forEach(o),cl=f(t),q=r(t,"DIV",{class:!0});var ee=a(q);$(Hn.$$.fragment,ee),Pc=f(ee),La=r(ee,"P",{});var Cu=a(La);$c=l(Cu,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Cu.forEach(o),yc=f(ee),Gn=r(ee,"P",{});var Sl=a(Gn);Tc=l(Sl,"This tokenizer inherits from "),Mr=r(Sl,"A",{href:!0});var xu=a(Mr);Ic=l(xu,"PreTrainedTokenizer"),xu.forEach(o),Cc=l(Sl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sl.forEach(o),xc=f(ee),fe=r(ee,"DIV",{class:!0});var nn=a(fe);$(Jn.$$.fragment,nn),Lc=f(nn),ka=r(nn,"P",{});var Lu=a(ka);kc=l(Lu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Lu.forEach(o),wc=f(nn),wa=r(nn,"UL",{});var ku=a(wa);Er=r(ku,"LI",{});var Qh=a(Er);Mc=l(Qh,"single sequence: "),Ma=r(Qh,"CODE",{});var wu=a(Ma);Ec=l(wu,"<|startoftext|> X <|endoftext|>"),wu.forEach(o),Qh.forEach(o),ku.forEach(o),jc=f(nn),Ea=r(nn,"P",{});var Mu=a(Ea);zc=l(Mu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Mu.forEach(o),nn.forEach(o),Fc=f(ee),ro=r(ee,"DIV",{class:!0});var Wl=a(ro);$(Xn.$$.fragment,Wl),qc=f(Wl),Zn=r(Wl,"P",{});var Bl=a(Zn);Dc=l(Bl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ja=r(Bl,"CODE",{});var Eu=a(ja);Oc=l(Eu,"prepare_for_model"),Eu.forEach(o),Ac=l(Bl," method."),Bl.forEach(o),Wl.forEach(o),Nc=f(ee),ao=r(ee,"DIV",{class:!0});var Ul=a(ao);$(Qn.$$.fragment,Ul),Vc=f(Ul),za=r(Ul,"P",{});var ju=a(za);Sc=l(ju,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ju.forEach(o),Ul.forEach(o),Wc=f(ee),jr=r(ee,"DIV",{class:!0});var zu=a(jr);$(Yn.$$.fragment,zu),zu.forEach(o),ee.forEach(o),pl=f(t),ct=r(t,"H2",{class:!0});var Kl=a(ct);io=r(Kl,"A",{id:!0,class:!0,href:!0});var Fu=a(io);Fa=r(Fu,"SPAN",{});var qu=a(Fa);$(es.$$.fragment,qu),qu.forEach(o),Fu.forEach(o),Bc=f(Kl),qa=r(Kl,"SPAN",{});var Du=a(qa);Uc=l(Du,"CLIPTokenizerFast"),Du.forEach(o),Kl.forEach(o),ml=f(t),G=r(t,"DIV",{class:!0});var We=a(G);$(ts.$$.fragment,We),Kc=f(We),os=r(We,"P",{});var Rl=a(os);Rc=l(Rl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Da=r(Rl,"EM",{});var Ou=a(Da);Hc=l(Ou,"tokenizers"),Ou.forEach(o),Gc=l(Rl,` library). Based on byte-level
Byte-Pair-Encoding.`),Rl.forEach(o),Jc=f(We),ns=r(We,"P",{});var Hl=a(ns);Xc=l(Hl,"This tokenizer inherits from "),zr=r(Hl,"A",{href:!0});var Au=a(zr);Zc=l(Au,"PreTrainedTokenizerFast"),Au.forEach(o),Qc=l(Hl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hl.forEach(o),Yc=f(We),he=r(We,"DIV",{class:!0});var sn=a(he);$(ss.$$.fragment,sn),ep=f(sn),Oa=r(sn,"P",{});var Nu=a(Oa);tp=l(Nu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Nu.forEach(o),op=f(sn),Aa=r(sn,"UL",{});var Vu=a(Aa);Fr=r(Vu,"LI",{});var Yh=a(Fr);np=l(Yh,"single sequence: "),Na=r(Yh,"CODE",{});var Su=a(Na);sp=l(Su,"<|startoftext|> X <|endoftext|>"),Su.forEach(o),Yh.forEach(o),Vu.forEach(o),rp=f(sn),Va=r(sn,"P",{});var Wu=a(Va);ap=l(Wu,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Wu.forEach(o),sn.forEach(o),ip=f(We),lo=r(We,"DIV",{class:!0});var Gl=a(lo);$(rs.$$.fragment,Gl),lp=f(Gl),Sa=r(Gl,"P",{});var Bu=a(Sa);dp=l(Bu,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),Bu.forEach(o),Gl.forEach(o),We.forEach(o),fl=f(t),pt=r(t,"H2",{class:!0});var Jl=a(pt);co=r(Jl,"A",{id:!0,class:!0,href:!0});var Uu=a(co);Wa=r(Uu,"SPAN",{});var Ku=a(Wa);$(as.$$.fragment,Ku),Ku.forEach(o),Uu.forEach(o),cp=f(Jl),Ba=r(Jl,"SPAN",{});var Ru=a(Ba);pp=l(Ru,"CLIPFeatureExtractor"),Ru.forEach(o),Jl.forEach(o),hl=f(t),je=r(t,"DIV",{class:!0});var ra=a(je);$(is.$$.fragment,ra),mp=f(ra),Ua=r(ra,"P",{});var Hu=a(Ua);fp=l(Hu,"Constructs a CLIP feature extractor."),Hu.forEach(o),hp=f(ra),ls=r(ra,"P",{});var Xl=a(ls);up=l(Xl,"This feature extractor inherits from "),qr=r(Xl,"A",{href:!0});var Gu=a(qr);gp=l(Gu,"FeatureExtractionMixin"),Gu.forEach(o),_p=l(Xl,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Xl.forEach(o),ra.forEach(o),ul=f(t),mt=r(t,"H2",{class:!0});var Zl=a(mt);po=r(Zl,"A",{id:!0,class:!0,href:!0});var Ju=a(po);Ka=r(Ju,"SPAN",{});var Xu=a(Ka);$(ds.$$.fragment,Xu),Xu.forEach(o),Ju.forEach(o),vp=f(Zl),Ra=r(Zl,"SPAN",{});var Zu=a(Ra);bp=l(Zu,"CLIPProcessor"),Zu.forEach(o),Zl.forEach(o),gl=f(t),J=r(t,"DIV",{class:!0});var Be=a(J);$(cs.$$.fragment,Be),Pp=f(Be),Ha=r(Be,"P",{});var Qu=a(Ha);$p=l(Qu,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Qu.forEach(o),yp=f(Be),Y=r(Be,"P",{});var Fe=a(Y);Dr=r(Fe,"A",{href:!0});var Yu=a(Dr);Tp=l(Yu,"CLIPProcessor"),Yu.forEach(o),Ip=l(Fe," offers all the functionalities of "),Or=r(Fe,"A",{href:!0});var eg=a(Or);Cp=l(eg,"CLIPFeatureExtractor"),eg.forEach(o),xp=l(Fe," and "),Ar=r(Fe,"A",{href:!0});var tg=a(Ar);Lp=l(tg,"CLIPTokenizerFast"),tg.forEach(o),kp=l(Fe,`. See the
`),Ga=r(Fe,"CODE",{});var og=a(Ga);wp=l(og,"__call__()"),og.forEach(o),Mp=l(Fe," and "),Nr=r(Fe,"A",{href:!0});var ng=a(Nr);Ep=l(ng,"decode()"),ng.forEach(o),jp=l(Fe," for more information."),Fe.forEach(o),zp=f(Be),mo=r(Be,"DIV",{class:!0});var Ql=a(mo);$(ps.$$.fragment,Ql),Fp=f(Ql),ms=r(Ql,"P",{});var Yl=a(ms);qp=l(Yl,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Vr=r(Yl,"A",{href:!0});var sg=a(Vr);Dp=l(sg,"batch_decode()"),sg.forEach(o),Op=l(Yl,`. Please
refer to the docstring of this method for more information.`),Yl.forEach(o),Ql.forEach(o),Ap=f(Be),fo=r(Be,"DIV",{class:!0});var ed=a(fo);$(fs.$$.fragment,ed),Np=f(ed),hs=r(ed,"P",{});var td=a(hs);Vp=l(td,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Sr=r(td,"A",{href:!0});var rg=a(Sr);Sp=l(rg,"decode()"),rg.forEach(o),Wp=l(td,`. Please refer to
the docstring of this method for more information.`),td.forEach(o),ed.forEach(o),Be.forEach(o),_l=f(t),ft=r(t,"H2",{class:!0});var od=a(ft);ho=r(od,"A",{id:!0,class:!0,href:!0});var ag=a(ho);Ja=r(ag,"SPAN",{});var ig=a(Ja);$(us.$$.fragment,ig),ig.forEach(o),ag.forEach(o),Bp=f(od),Xa=r(od,"SPAN",{});var lg=a(Xa);Up=l(lg,"CLIPModel"),lg.forEach(o),od.forEach(o),vl=f(t),X=r(t,"DIV",{class:!0});var Ue=a(X);$(gs.$$.fragment,Ue),Kp=f(Ue),_s=r(Ue,"P",{});var nd=a(_s);Rp=l(nd,"This model is a PyTorch "),vs=r(nd,"A",{href:!0,rel:!0});var dg=a(vs);Hp=l(dg,"torch.nn.Module"),dg.forEach(o),Gp=l(nd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nd.forEach(o),Jp=f(Ue),ue=r(Ue,"DIV",{class:!0});var rn=a(ue);$(bs.$$.fragment,rn),Xp=f(rn),ht=r(rn,"P",{});var aa=a(ht);Zp=l(aa,"The "),Wr=r(aa,"A",{href:!0});var cg=a(Wr);Qp=l(cg,"CLIPModel"),cg.forEach(o),Yp=l(aa," forward method, overrides the "),Za=r(aa,"CODE",{});var pg=a(Za);em=l(pg,"__call__"),pg.forEach(o),tm=l(aa," special method."),aa.forEach(o),om=f(rn),$(uo.$$.fragment,rn),nm=f(rn),$(go.$$.fragment,rn),rn.forEach(o),sm=f(Ue),ge=r(Ue,"DIV",{class:!0});var an=a(ge);$(Ps.$$.fragment,an),rm=f(an),ut=r(an,"P",{});var ia=a(ut);am=l(ia,"The "),Br=r(ia,"A",{href:!0});var mg=a(Br);im=l(mg,"CLIPModel"),mg.forEach(o),lm=l(ia," forward method, overrides the "),Qa=r(ia,"CODE",{});var fg=a(Qa);dm=l(fg,"__call__"),fg.forEach(o),cm=l(ia," special method."),ia.forEach(o),pm=f(an),$(_o.$$.fragment,an),mm=f(an),$(vo.$$.fragment,an),an.forEach(o),fm=f(Ue),_e=r(Ue,"DIV",{class:!0});var ln=a(_e);$($s.$$.fragment,ln),hm=f(ln),gt=r(ln,"P",{});var la=a(gt);um=l(la,"The "),Ur=r(la,"A",{href:!0});var hg=a(Ur);gm=l(hg,"CLIPModel"),hg.forEach(o),_m=l(la," forward method, overrides the "),Ya=r(la,"CODE",{});var ug=a(Ya);vm=l(ug,"__call__"),ug.forEach(o),bm=l(la," special method."),la.forEach(o),Pm=f(ln),$(bo.$$.fragment,ln),$m=f(ln),$(Po.$$.fragment,ln),ln.forEach(o),Ue.forEach(o),bl=f(t),_t=r(t,"H2",{class:!0});var sd=a(_t);$o=r(sd,"A",{id:!0,class:!0,href:!0});var gg=a($o);ei=r(gg,"SPAN",{});var _g=a(ei);$(ys.$$.fragment,_g),_g.forEach(o),gg.forEach(o),ym=f(sd),ti=r(sd,"SPAN",{});var vg=a(ti);Tm=l(vg,"CLIPTextModel"),vg.forEach(o),sd.forEach(o),Pl=f(t),vt=r(t,"DIV",{class:!0});var rd=a(vt);$(Ts.$$.fragment,rd),Im=f(rd),ve=r(rd,"DIV",{class:!0});var dn=a(ve);$(Is.$$.fragment,dn),Cm=f(dn),bt=r(dn,"P",{});var da=a(bt);xm=l(da,"The "),Kr=r(da,"A",{href:!0});var bg=a(Kr);Lm=l(bg,"CLIPTextModel"),bg.forEach(o),km=l(da," forward method, overrides the "),oi=r(da,"CODE",{});var Pg=a(oi);wm=l(Pg,"__call__"),Pg.forEach(o),Mm=l(da," special method."),da.forEach(o),Em=f(dn),$(yo.$$.fragment,dn),jm=f(dn),$(To.$$.fragment,dn),dn.forEach(o),rd.forEach(o),$l=f(t),Pt=r(t,"H2",{class:!0});var ad=a(Pt);Io=r(ad,"A",{id:!0,class:!0,href:!0});var $g=a(Io);ni=r($g,"SPAN",{});var yg=a(ni);$(Cs.$$.fragment,yg),yg.forEach(o),$g.forEach(o),zm=f(ad),si=r(ad,"SPAN",{});var Tg=a(si);Fm=l(Tg,"CLIPVisionModel"),Tg.forEach(o),ad.forEach(o),yl=f(t),$t=r(t,"DIV",{class:!0});var id=a($t);$(xs.$$.fragment,id),qm=f(id),be=r(id,"DIV",{class:!0});var cn=a(be);$(Ls.$$.fragment,cn),Dm=f(cn),yt=r(cn,"P",{});var ca=a(yt);Om=l(ca,"The "),Rr=r(ca,"A",{href:!0});var Ig=a(Rr);Am=l(Ig,"CLIPVisionModel"),Ig.forEach(o),Nm=l(ca," forward method, overrides the "),ri=r(ca,"CODE",{});var Cg=a(ri);Vm=l(Cg,"__call__"),Cg.forEach(o),Sm=l(ca," special method."),ca.forEach(o),Wm=f(cn),$(Co.$$.fragment,cn),Bm=f(cn),$(xo.$$.fragment,cn),cn.forEach(o),id.forEach(o),Tl=f(t),Tt=r(t,"H2",{class:!0});var ld=a(Tt);Lo=r(ld,"A",{id:!0,class:!0,href:!0});var xg=a(Lo);ai=r(xg,"SPAN",{});var Lg=a(ai);$(ks.$$.fragment,Lg),Lg.forEach(o),xg.forEach(o),Um=f(ld),ii=r(ld,"SPAN",{});var kg=a(ii);Km=l(kg,"TFCLIPModel"),kg.forEach(o),ld.forEach(o),Il=f(t),D=r(t,"DIV",{class:!0});var te=a(D);$(ws.$$.fragment,te),Rm=f(te),Ms=r(te,"P",{});var dd=a(Ms);Hm=l(dd,"This model inherits from "),Hr=r(dd,"A",{href:!0});var wg=a(Hr);Gm=l(wg,"TFPreTrainedModel"),wg.forEach(o),Jm=l(dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dd.forEach(o),Xm=f(te),Es=r(te,"P",{});var cd=a(Es);Zm=l(cd,"This model is also a "),js=r(cd,"A",{href:!0,rel:!0});var Mg=a(js);Qm=l(Mg,"tf.keras.Model"),Mg.forEach(o),Ym=l(cd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cd.forEach(o),ef=f(te),$(ko.$$.fragment,te),tf=f(te),Pe=r(te,"DIV",{class:!0});var pn=a(Pe);$(zs.$$.fragment,pn),of=f(pn),It=r(pn,"P",{});var pa=a(It);nf=l(pa,"The "),Gr=r(pa,"A",{href:!0});var Eg=a(Gr);sf=l(Eg,"TFCLIPModel"),Eg.forEach(o),rf=l(pa," forward method, overrides the "),li=r(pa,"CODE",{});var jg=a(li);af=l(jg,"__call__"),jg.forEach(o),lf=l(pa," special method."),pa.forEach(o),df=f(pn),$(wo.$$.fragment,pn),cf=f(pn),$(Mo.$$.fragment,pn),pn.forEach(o),pf=f(te),$e=r(te,"DIV",{class:!0});var mn=a($e);$(Fs.$$.fragment,mn),mf=f(mn),Ct=r(mn,"P",{});var ma=a(Ct);ff=l(ma,"The "),Jr=r(ma,"A",{href:!0});var zg=a(Jr);hf=l(zg,"TFCLIPModel"),zg.forEach(o),uf=l(ma," forward method, overrides the "),di=r(ma,"CODE",{});var Fg=a(di);gf=l(Fg,"__call__"),Fg.forEach(o),_f=l(ma," special method."),ma.forEach(o),vf=f(mn),$(Eo.$$.fragment,mn),bf=f(mn),$(jo.$$.fragment,mn),mn.forEach(o),Pf=f(te),ye=r(te,"DIV",{class:!0});var fn=a(ye);$(qs.$$.fragment,fn),$f=f(fn),xt=r(fn,"P",{});var fa=a(xt);yf=l(fa,"The "),Xr=r(fa,"A",{href:!0});var qg=a(Xr);Tf=l(qg,"TFCLIPModel"),qg.forEach(o),If=l(fa," forward method, overrides the "),ci=r(fa,"CODE",{});var Dg=a(ci);Cf=l(Dg,"__call__"),Dg.forEach(o),xf=l(fa," special method."),fa.forEach(o),Lf=f(fn),$(zo.$$.fragment,fn),kf=f(fn),$(Fo.$$.fragment,fn),fn.forEach(o),te.forEach(o),Cl=f(t),Lt=r(t,"H2",{class:!0});var pd=a(Lt);qo=r(pd,"A",{id:!0,class:!0,href:!0});var Og=a(qo);pi=r(Og,"SPAN",{});var Ag=a(pi);$(Ds.$$.fragment,Ag),Ag.forEach(o),Og.forEach(o),wf=f(pd),mi=r(pd,"SPAN",{});var Ng=a(mi);Mf=l(Ng,"TFCLIPTextModel"),Ng.forEach(o),pd.forEach(o),xl=f(t),kt=r(t,"DIV",{class:!0});var md=a(kt);$(Os.$$.fragment,md),Ef=f(md),Te=r(md,"DIV",{class:!0});var hn=a(Te);$(As.$$.fragment,hn),jf=f(hn),wt=r(hn,"P",{});var ha=a(wt);zf=l(ha,"The "),Zr=r(ha,"A",{href:!0});var Vg=a(Zr);Ff=l(Vg,"TFCLIPTextModel"),Vg.forEach(o),qf=l(ha," forward method, overrides the "),fi=r(ha,"CODE",{});var Sg=a(fi);Df=l(Sg,"__call__"),Sg.forEach(o),Of=l(ha," special method."),ha.forEach(o),Af=f(hn),$(Do.$$.fragment,hn),Nf=f(hn),$(Oo.$$.fragment,hn),hn.forEach(o),md.forEach(o),Ll=f(t),Mt=r(t,"H2",{class:!0});var fd=a(Mt);Ao=r(fd,"A",{id:!0,class:!0,href:!0});var Wg=a(Ao);hi=r(Wg,"SPAN",{});var Bg=a(hi);$(Ns.$$.fragment,Bg),Bg.forEach(o),Wg.forEach(o),Vf=f(fd),ui=r(fd,"SPAN",{});var Ug=a(ui);Sf=l(Ug,"TFCLIPVisionModel"),Ug.forEach(o),fd.forEach(o),kl=f(t),Et=r(t,"DIV",{class:!0});var hd=a(Et);$(Vs.$$.fragment,hd),Wf=f(hd),Ie=r(hd,"DIV",{class:!0});var un=a(Ie);$(Ss.$$.fragment,un),Bf=f(un),jt=r(un,"P",{});var ua=a(jt);Uf=l(ua,"The "),Qr=r(ua,"A",{href:!0});var Kg=a(Qr);Kf=l(Kg,"TFCLIPVisionModel"),Kg.forEach(o),Rf=l(ua," forward method, overrides the "),gi=r(ua,"CODE",{});var Rg=a(gi);Hf=l(Rg,"__call__"),Rg.forEach(o),Gf=l(ua," special method."),ua.forEach(o),Jf=f(un),$(No.$$.fragment,un),Xf=f(un),$(Vo.$$.fragment,un),un.forEach(o),hd.forEach(o),wl=f(t),zt=r(t,"H2",{class:!0});var ud=a(zt);So=r(ud,"A",{id:!0,class:!0,href:!0});var Hg=a(So);_i=r(Hg,"SPAN",{});var Gg=a(_i);$(Ws.$$.fragment,Gg),Gg.forEach(o),Hg.forEach(o),Zf=f(ud),vi=r(ud,"SPAN",{});var Jg=a(vi);Qf=l(Jg,"FlaxCLIPModel"),Jg.forEach(o),ud.forEach(o),Ml=f(t),z=r(t,"DIV",{class:!0});var K=a(z);$(Bs.$$.fragment,K),Yf=f(K),Us=r(K,"P",{});var gd=a(Us);eh=l(gd,"This model inherits from "),Yr=r(gd,"A",{href:!0});var Xg=a(Yr);th=l(Xg,"FlaxPreTrainedModel"),Xg.forEach(o),oh=l(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gd.forEach(o),nh=f(K),Ks=r(K,"P",{});var _d=a(Ks);sh=l(_d,"This model is also a Flax Linen "),Rs=r(_d,"A",{href:!0,rel:!0});var Zg=a(Rs);rh=l(Zg,"flax.linen.Module"),Zg.forEach(o),ah=l(_d,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_d.forEach(o),ih=f(K),bi=r(K,"P",{});var Qg=a(bi);lh=l(Qg,"Finally, this model supports inherent JAX features such as:"),Qg.forEach(o),dh=f(K),ze=r(K,"UL",{});var gn=a(ze);Pi=r(gn,"LI",{});var Yg=a(Pi);Hs=r(Yg,"A",{href:!0,rel:!0});var e_=a(Hs);ch=l(e_,"Just-In-Time (JIT) compilation"),e_.forEach(o),Yg.forEach(o),ph=f(gn),$i=r(gn,"LI",{});var t_=a($i);Gs=r(t_,"A",{href:!0,rel:!0});var o_=a(Gs);mh=l(o_,"Automatic Differentiation"),o_.forEach(o),t_.forEach(o),fh=f(gn),yi=r(gn,"LI",{});var n_=a(yi);Js=r(n_,"A",{href:!0,rel:!0});var s_=a(Js);hh=l(s_,"Vectorization"),s_.forEach(o),n_.forEach(o),uh=f(gn),Ti=r(gn,"LI",{});var r_=a(Ti);Xs=r(r_,"A",{href:!0,rel:!0});var a_=a(Xs);gh=l(a_,"Parallelization"),a_.forEach(o),r_.forEach(o),gn.forEach(o),_h=f(K),Ce=r(K,"DIV",{class:!0});var _n=a(Ce);$(Zs.$$.fragment,_n),vh=f(_n),Ft=r(_n,"P",{});var ga=a(Ft);bh=l(ga,"The "),Ii=r(ga,"CODE",{});var i_=a(Ii);Ph=l(i_,"FlaxCLIPPreTrainedModel"),i_.forEach(o),$h=l(ga," forward method, overrides the "),Ci=r(ga,"CODE",{});var l_=a(Ci);yh=l(l_,"__call__"),l_.forEach(o),Th=l(ga," special method."),ga.forEach(o),Ih=f(_n),$(Wo.$$.fragment,_n),Ch=f(_n),$(Bo.$$.fragment,_n),_n.forEach(o),xh=f(K),Uo=r(K,"DIV",{class:!0});var vd=a(Uo);$(Qs.$$.fragment,vd),Lh=f(vd),$(Ko.$$.fragment,vd),vd.forEach(o),kh=f(K),Ro=r(K,"DIV",{class:!0});var bd=a(Ro);$(Ys.$$.fragment,bd),wh=f(bd),$(Ho.$$.fragment,bd),bd.forEach(o),K.forEach(o),El=f(t),qt=r(t,"H2",{class:!0});var Pd=a(qt);Go=r(Pd,"A",{id:!0,class:!0,href:!0});var d_=a(Go);xi=r(d_,"SPAN",{});var c_=a(xi);$(er.$$.fragment,c_),c_.forEach(o),d_.forEach(o),Mh=f(Pd),Li=r(Pd,"SPAN",{});var p_=a(Li);Eh=l(p_,"FlaxCLIPTextModel"),p_.forEach(o),Pd.forEach(o),jl=f(t),Dt=r(t,"DIV",{class:!0});var $d=a(Dt);$(tr.$$.fragment,$d),jh=f($d),xe=r($d,"DIV",{class:!0});var vn=a(xe);$(or.$$.fragment,vn),zh=f(vn),Ot=r(vn,"P",{});var _a=a(Ot);Fh=l(_a,"The "),ki=r(_a,"CODE",{});var m_=a(ki);qh=l(m_,"FlaxCLIPTextPreTrainedModel"),m_.forEach(o),Dh=l(_a," forward method, overrides the "),wi=r(_a,"CODE",{});var f_=a(wi);Oh=l(f_,"__call__"),f_.forEach(o),Ah=l(_a," special method."),_a.forEach(o),Nh=f(vn),$(Jo.$$.fragment,vn),Vh=f(vn),$(Xo.$$.fragment,vn),vn.forEach(o),$d.forEach(o),zl=f(t),At=r(t,"H2",{class:!0});var yd=a(At);Zo=r(yd,"A",{id:!0,class:!0,href:!0});var h_=a(Zo);Mi=r(h_,"SPAN",{});var u_=a(Mi);$(nr.$$.fragment,u_),u_.forEach(o),h_.forEach(o),Sh=f(yd),Ei=r(yd,"SPAN",{});var g_=a(Ei);Wh=l(g_,"FlaxCLIPVisionModel"),g_.forEach(o),yd.forEach(o),Fl=f(t),Nt=r(t,"DIV",{class:!0});var Td=a(Nt);$(sr.$$.fragment,Td),Bh=f(Td),Le=r(Td,"DIV",{class:!0});var bn=a(Le);$(rr.$$.fragment,bn),Uh=f(bn),Vt=r(bn,"P",{});var va=a(Vt);Kh=l(va,"The "),ji=r(va,"CODE",{});var __=a(ji);Rh=l(__,"FlaxCLIPVisionPreTrainedModel"),__.forEach(o),Hh=l(va," forward method, overrides the "),zi=r(va,"CODE",{});var v_=a(zi);Gh=l(v_,"__call__"),v_.forEach(o),Jh=l(va," special method."),va.forEach(o),Xh=f(bn),$(Qo.$$.fragment,bn),Zh=f(bn),$(Yo.$$.fragment,bn),bn.forEach(o),Td.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(ov)),h(p,"id","clip"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#clip"),h(u,"class","relative group"),h(ie,"id","overview"),h(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ie,"href","#overview"),h(R,"class","relative group"),h(we,"href","https://arxiv.org/abs/2103.00020"),h(we,"rel","nofollow"),h(N,"id","usage"),h(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(N,"href","#usage"),h(F,"class","relative group"),h(Oe,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(pe,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizer"),h(H,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPProcessor"),h(Ae,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(j,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizer"),h(Qe,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPProcessor"),h(Ye,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPModel"),h(Ve,"href","https://huggingface.co/valhalla"),h(Ve,"rel","nofollow"),h(Se,"href","https://github.com/openai/CLIP"),h(Se,"rel","nofollow"),h(Zt,"id","transformers.CLIPConfig"),h(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zt,"href","#transformers.CLIPConfig"),h(me,"class","relative group"),h(br,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPConfig"),h(Pr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPModel"),h($r,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(yr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(Tr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPConfig"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(eo,"id","transformers.CLIPTextConfig"),h(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(eo,"href","#transformers.CLIPTextConfig"),h(nt,"class","relative group"),h(Ir,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPModel"),h(Wn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Wn,"rel","nofollow"),h(Cr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(xr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oo,"id","transformers.CLIPVisionConfig"),h(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oo,"href","#transformers.CLIPVisionConfig"),h(at,"class","relative group"),h(Lr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPModel"),h(Kn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Kn,"rel","nofollow"),h(kr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(wr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(so,"id","transformers.CLIPTokenizer"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.CLIPTokenizer"),h(dt,"class","relative group"),h(Mr,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(io,"id","transformers.CLIPTokenizerFast"),h(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(io,"href","#transformers.CLIPTokenizerFast"),h(ct,"class","relative group"),h(zr,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(co,"id","transformers.CLIPFeatureExtractor"),h(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(co,"href","#transformers.CLIPFeatureExtractor"),h(pt,"class","relative group"),h(qr,"href","/docs/transformers/v4.22.2/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),h(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"id","transformers.CLIPProcessor"),h(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(po,"href","#transformers.CLIPProcessor"),h(mt,"class","relative group"),h(Dr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPProcessor"),h(Or,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(Ar,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTokenizerFast"),h(Nr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPProcessor.decode"),h(Vr,"href","/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),h(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Sr,"href","/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),h(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ho,"id","transformers.CLIPModel"),h(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ho,"href","#transformers.CLIPModel"),h(ft,"class","relative group"),h(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(vs,"rel","nofollow"),h(Wr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPModel"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Br,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPModel"),h(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ur,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPModel"),h(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($o,"id","transformers.CLIPTextModel"),h($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($o,"href","#transformers.CLIPTextModel"),h(_t,"class","relative group"),h(Kr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPTextModel"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Io,"id","transformers.CLIPVisionModel"),h(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Io,"href","#transformers.CLIPVisionModel"),h(Pt,"class","relative group"),h(Rr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.CLIPVisionModel"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"id","transformers.TFCLIPModel"),h(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lo,"href","#transformers.TFCLIPModel"),h(Tt,"class","relative group"),h(Hr,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(js,"rel","nofollow"),h(Gr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPModel"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPModel"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPModel"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qo,"id","transformers.TFCLIPTextModel"),h(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qo,"href","#transformers.TFCLIPTextModel"),h(Lt,"class","relative group"),h(Zr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPTextModel"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ao,"id","transformers.TFCLIPVisionModel"),h(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ao,"href","#transformers.TFCLIPVisionModel"),h(Mt,"class","relative group"),h(Qr,"href","/docs/transformers/v4.22.2/en/model_doc/clip#transformers.TFCLIPVisionModel"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(So,"id","transformers.FlaxCLIPModel"),h(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(So,"href","#transformers.FlaxCLIPModel"),h(zt,"class","relative group"),h(Yr,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Rs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Rs,"rel","nofollow"),h(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Hs,"rel","nofollow"),h(Gs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Gs,"rel","nofollow"),h(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Js,"rel","nofollow"),h(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Xs,"rel","nofollow"),h(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Go,"id","transformers.FlaxCLIPTextModel"),h(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Go,"href","#transformers.FlaxCLIPTextModel"),h(qt,"class","relative group"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zo,"id","transformers.FlaxCLIPVisionModel"),h(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zo,"href","#transformers.FlaxCLIPVisionModel"),h(At,"class","relative group"),h(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,b,g),v(t,u,g),e(u,p),e(p,_),y(n,_,null),e(u,c),e(u,L),e(L,Pn),v(t,Wt,g),v(t,R,g),e(R,ie),e(ie,qe),y(E,qe,null),e(R,$n),e(R,ke),e(ke,yn),v(t,Bt,g),v(t,Z,g),e(Z,Tn),e(Z,we),e(we,Ke),e(Z,In),v(t,Ut,g),v(t,le,g),e(le,Cn),v(t,Kt,g),v(t,de,g),e(de,Re),e(Re,xn),v(t,He,g),v(t,F,g),e(F,N),e(N,Ge),y(ne,Ge,null),e(F,Ln),e(F,Je),e(Je,Xe),v(t,Rt,g),v(t,De,g),e(De,ce),v(t,Ht,g),v(t,Q,g),e(Q,kn),e(Q,Oe),e(Oe,Ze),e(Q,wn),v(t,Gt,g),v(t,M,g),e(M,Mn),e(M,pe),e(pe,En),e(M,Jt),e(M,H),e(H,jn),e(M,Me),e(M,Ae),e(Ae,zn),e(M,w),e(M,j),e(j,mr),e(M,Xt),e(M,Qe),e(Qe,fr),e(M,B),e(M,Ye),e(Ye,hr),e(M,ur),v(t,Fn,g),y(Ne,t,g),v(t,Ee,g),v(t,U,g),e(U,gr),e(U,Ve),e(Ve,et),e(U,_r),e(U,Se),e(Se,qn),e(U,vr),v(t,tt,g),v(t,me,g),e(me,Zt),e(Zt,ba),y(Dn,ba,null),e(me,Id),e(me,Pa),e(Pa,Cd),v(t,sl,g),v(t,se,g),y(On,se,null),e(se,xd),e(se,Qt),e(Qt,br),e(br,Ld),e(Qt,kd),e(Qt,Pr),e(Pr,wd),e(Qt,Md),e(se,Ed),e(se,ot),e(ot,jd),e(ot,$r),e($r,zd),e(ot,Fd),e(ot,yr),e(yr,qd),e(ot,Dd),e(se,Od),e(se,Yt),y(An,Yt,null),e(Yt,Ad),e(Yt,Nn),e(Nn,Nd),e(Nn,Tr),e(Tr,Vd),e(Nn,Sd),v(t,rl,g),v(t,nt,g),e(nt,eo),e(eo,$a),y(Vn,$a,null),e(nt,Wd),e(nt,ya),e(ya,Bd),v(t,al,g),v(t,re,g),y(Sn,re,null),e(re,Ud),e(re,st),e(st,Kd),e(st,Ir),e(Ir,Rd),e(st,Hd),e(st,Wn),e(Wn,Gd),e(st,Jd),e(re,Xd),e(re,rt),e(rt,Zd),e(rt,Cr),e(Cr,Qd),e(rt,Yd),e(rt,xr),e(xr,ec),e(rt,tc),e(re,oc),y(to,re,null),v(t,il,g),v(t,at,g),e(at,oo),e(oo,Ta),y(Bn,Ta,null),e(at,nc),e(at,Ia),e(Ia,sc),v(t,ll,g),v(t,ae,g),y(Un,ae,null),e(ae,rc),e(ae,it),e(it,ac),e(it,Lr),e(Lr,ic),e(it,lc),e(it,Kn),e(Kn,dc),e(it,cc),e(ae,pc),e(ae,lt),e(lt,mc),e(lt,kr),e(kr,fc),e(lt,hc),e(lt,wr),e(wr,uc),e(lt,gc),e(ae,_c),y(no,ae,null),v(t,dl,g),v(t,dt,g),e(dt,so),e(so,Ca),y(Rn,Ca,null),e(dt,vc),e(dt,xa),e(xa,bc),v(t,cl,g),v(t,q,g),y(Hn,q,null),e(q,Pc),e(q,La),e(La,$c),e(q,yc),e(q,Gn),e(Gn,Tc),e(Gn,Mr),e(Mr,Ic),e(Gn,Cc),e(q,xc),e(q,fe),y(Jn,fe,null),e(fe,Lc),e(fe,ka),e(ka,kc),e(fe,wc),e(fe,wa),e(wa,Er),e(Er,Mc),e(Er,Ma),e(Ma,Ec),e(fe,jc),e(fe,Ea),e(Ea,zc),e(q,Fc),e(q,ro),y(Xn,ro,null),e(ro,qc),e(ro,Zn),e(Zn,Dc),e(Zn,ja),e(ja,Oc),e(Zn,Ac),e(q,Nc),e(q,ao),y(Qn,ao,null),e(ao,Vc),e(ao,za),e(za,Sc),e(q,Wc),e(q,jr),y(Yn,jr,null),v(t,pl,g),v(t,ct,g),e(ct,io),e(io,Fa),y(es,Fa,null),e(ct,Bc),e(ct,qa),e(qa,Uc),v(t,ml,g),v(t,G,g),y(ts,G,null),e(G,Kc),e(G,os),e(os,Rc),e(os,Da),e(Da,Hc),e(os,Gc),e(G,Jc),e(G,ns),e(ns,Xc),e(ns,zr),e(zr,Zc),e(ns,Qc),e(G,Yc),e(G,he),y(ss,he,null),e(he,ep),e(he,Oa),e(Oa,tp),e(he,op),e(he,Aa),e(Aa,Fr),e(Fr,np),e(Fr,Na),e(Na,sp),e(he,rp),e(he,Va),e(Va,ap),e(G,ip),e(G,lo),y(rs,lo,null),e(lo,lp),e(lo,Sa),e(Sa,dp),v(t,fl,g),v(t,pt,g),e(pt,co),e(co,Wa),y(as,Wa,null),e(pt,cp),e(pt,Ba),e(Ba,pp),v(t,hl,g),v(t,je,g),y(is,je,null),e(je,mp),e(je,Ua),e(Ua,fp),e(je,hp),e(je,ls),e(ls,up),e(ls,qr),e(qr,gp),e(ls,_p),v(t,ul,g),v(t,mt,g),e(mt,po),e(po,Ka),y(ds,Ka,null),e(mt,vp),e(mt,Ra),e(Ra,bp),v(t,gl,g),v(t,J,g),y(cs,J,null),e(J,Pp),e(J,Ha),e(Ha,$p),e(J,yp),e(J,Y),e(Y,Dr),e(Dr,Tp),e(Y,Ip),e(Y,Or),e(Or,Cp),e(Y,xp),e(Y,Ar),e(Ar,Lp),e(Y,kp),e(Y,Ga),e(Ga,wp),e(Y,Mp),e(Y,Nr),e(Nr,Ep),e(Y,jp),e(J,zp),e(J,mo),y(ps,mo,null),e(mo,Fp),e(mo,ms),e(ms,qp),e(ms,Vr),e(Vr,Dp),e(ms,Op),e(J,Ap),e(J,fo),y(fs,fo,null),e(fo,Np),e(fo,hs),e(hs,Vp),e(hs,Sr),e(Sr,Sp),e(hs,Wp),v(t,_l,g),v(t,ft,g),e(ft,ho),e(ho,Ja),y(us,Ja,null),e(ft,Bp),e(ft,Xa),e(Xa,Up),v(t,vl,g),v(t,X,g),y(gs,X,null),e(X,Kp),e(X,_s),e(_s,Rp),e(_s,vs),e(vs,Hp),e(_s,Gp),e(X,Jp),e(X,ue),y(bs,ue,null),e(ue,Xp),e(ue,ht),e(ht,Zp),e(ht,Wr),e(Wr,Qp),e(ht,Yp),e(ht,Za),e(Za,em),e(ht,tm),e(ue,om),y(uo,ue,null),e(ue,nm),y(go,ue,null),e(X,sm),e(X,ge),y(Ps,ge,null),e(ge,rm),e(ge,ut),e(ut,am),e(ut,Br),e(Br,im),e(ut,lm),e(ut,Qa),e(Qa,dm),e(ut,cm),e(ge,pm),y(_o,ge,null),e(ge,mm),y(vo,ge,null),e(X,fm),e(X,_e),y($s,_e,null),e(_e,hm),e(_e,gt),e(gt,um),e(gt,Ur),e(Ur,gm),e(gt,_m),e(gt,Ya),e(Ya,vm),e(gt,bm),e(_e,Pm),y(bo,_e,null),e(_e,$m),y(Po,_e,null),v(t,bl,g),v(t,_t,g),e(_t,$o),e($o,ei),y(ys,ei,null),e(_t,ym),e(_t,ti),e(ti,Tm),v(t,Pl,g),v(t,vt,g),y(Ts,vt,null),e(vt,Im),e(vt,ve),y(Is,ve,null),e(ve,Cm),e(ve,bt),e(bt,xm),e(bt,Kr),e(Kr,Lm),e(bt,km),e(bt,oi),e(oi,wm),e(bt,Mm),e(ve,Em),y(yo,ve,null),e(ve,jm),y(To,ve,null),v(t,$l,g),v(t,Pt,g),e(Pt,Io),e(Io,ni),y(Cs,ni,null),e(Pt,zm),e(Pt,si),e(si,Fm),v(t,yl,g),v(t,$t,g),y(xs,$t,null),e($t,qm),e($t,be),y(Ls,be,null),e(be,Dm),e(be,yt),e(yt,Om),e(yt,Rr),e(Rr,Am),e(yt,Nm),e(yt,ri),e(ri,Vm),e(yt,Sm),e(be,Wm),y(Co,be,null),e(be,Bm),y(xo,be,null),v(t,Tl,g),v(t,Tt,g),e(Tt,Lo),e(Lo,ai),y(ks,ai,null),e(Tt,Um),e(Tt,ii),e(ii,Km),v(t,Il,g),v(t,D,g),y(ws,D,null),e(D,Rm),e(D,Ms),e(Ms,Hm),e(Ms,Hr),e(Hr,Gm),e(Ms,Jm),e(D,Xm),e(D,Es),e(Es,Zm),e(Es,js),e(js,Qm),e(Es,Ym),e(D,ef),y(ko,D,null),e(D,tf),e(D,Pe),y(zs,Pe,null),e(Pe,of),e(Pe,It),e(It,nf),e(It,Gr),e(Gr,sf),e(It,rf),e(It,li),e(li,af),e(It,lf),e(Pe,df),y(wo,Pe,null),e(Pe,cf),y(Mo,Pe,null),e(D,pf),e(D,$e),y(Fs,$e,null),e($e,mf),e($e,Ct),e(Ct,ff),e(Ct,Jr),e(Jr,hf),e(Ct,uf),e(Ct,di),e(di,gf),e(Ct,_f),e($e,vf),y(Eo,$e,null),e($e,bf),y(jo,$e,null),e(D,Pf),e(D,ye),y(qs,ye,null),e(ye,$f),e(ye,xt),e(xt,yf),e(xt,Xr),e(Xr,Tf),e(xt,If),e(xt,ci),e(ci,Cf),e(xt,xf),e(ye,Lf),y(zo,ye,null),e(ye,kf),y(Fo,ye,null),v(t,Cl,g),v(t,Lt,g),e(Lt,qo),e(qo,pi),y(Ds,pi,null),e(Lt,wf),e(Lt,mi),e(mi,Mf),v(t,xl,g),v(t,kt,g),y(Os,kt,null),e(kt,Ef),e(kt,Te),y(As,Te,null),e(Te,jf),e(Te,wt),e(wt,zf),e(wt,Zr),e(Zr,Ff),e(wt,qf),e(wt,fi),e(fi,Df),e(wt,Of),e(Te,Af),y(Do,Te,null),e(Te,Nf),y(Oo,Te,null),v(t,Ll,g),v(t,Mt,g),e(Mt,Ao),e(Ao,hi),y(Ns,hi,null),e(Mt,Vf),e(Mt,ui),e(ui,Sf),v(t,kl,g),v(t,Et,g),y(Vs,Et,null),e(Et,Wf),e(Et,Ie),y(Ss,Ie,null),e(Ie,Bf),e(Ie,jt),e(jt,Uf),e(jt,Qr),e(Qr,Kf),e(jt,Rf),e(jt,gi),e(gi,Hf),e(jt,Gf),e(Ie,Jf),y(No,Ie,null),e(Ie,Xf),y(Vo,Ie,null),v(t,wl,g),v(t,zt,g),e(zt,So),e(So,_i),y(Ws,_i,null),e(zt,Zf),e(zt,vi),e(vi,Qf),v(t,Ml,g),v(t,z,g),y(Bs,z,null),e(z,Yf),e(z,Us),e(Us,eh),e(Us,Yr),e(Yr,th),e(Us,oh),e(z,nh),e(z,Ks),e(Ks,sh),e(Ks,Rs),e(Rs,rh),e(Ks,ah),e(z,ih),e(z,bi),e(bi,lh),e(z,dh),e(z,ze),e(ze,Pi),e(Pi,Hs),e(Hs,ch),e(ze,ph),e(ze,$i),e($i,Gs),e(Gs,mh),e(ze,fh),e(ze,yi),e(yi,Js),e(Js,hh),e(ze,uh),e(ze,Ti),e(Ti,Xs),e(Xs,gh),e(z,_h),e(z,Ce),y(Zs,Ce,null),e(Ce,vh),e(Ce,Ft),e(Ft,bh),e(Ft,Ii),e(Ii,Ph),e(Ft,$h),e(Ft,Ci),e(Ci,yh),e(Ft,Th),e(Ce,Ih),y(Wo,Ce,null),e(Ce,Ch),y(Bo,Ce,null),e(z,xh),e(z,Uo),y(Qs,Uo,null),e(Uo,Lh),y(Ko,Uo,null),e(z,kh),e(z,Ro),y(Ys,Ro,null),e(Ro,wh),y(Ho,Ro,null),v(t,El,g),v(t,qt,g),e(qt,Go),e(Go,xi),y(er,xi,null),e(qt,Mh),e(qt,Li),e(Li,Eh),v(t,jl,g),v(t,Dt,g),y(tr,Dt,null),e(Dt,jh),e(Dt,xe),y(or,xe,null),e(xe,zh),e(xe,Ot),e(Ot,Fh),e(Ot,ki),e(ki,qh),e(Ot,Dh),e(Ot,wi),e(wi,Oh),e(Ot,Ah),e(xe,Nh),y(Jo,xe,null),e(xe,Vh),y(Xo,xe,null),v(t,zl,g),v(t,At,g),e(At,Zo),e(Zo,Mi),y(nr,Mi,null),e(At,Sh),e(At,Ei),e(Ei,Wh),v(t,Fl,g),v(t,Nt,g),y(sr,Nt,null),e(Nt,Bh),e(Nt,Le),y(rr,Le,null),e(Le,Uh),e(Le,Vt),e(Vt,Kh),e(Vt,ji),e(ji,Rh),e(Vt,Hh),e(Vt,zi),e(zi,Gh),e(Vt,Jh),e(Le,Xh),y(Qo,Le,null),e(Le,Zh),y(Yo,Le,null),ql=!0},p(t,[g]){const ar={};g&2&&(ar.$$scope={dirty:g,ctx:t}),to.$set(ar);const Fi={};g&2&&(Fi.$$scope={dirty:g,ctx:t}),no.$set(Fi);const qi={};g&2&&(qi.$$scope={dirty:g,ctx:t}),uo.$set(qi);const Di={};g&2&&(Di.$$scope={dirty:g,ctx:t}),go.$set(Di);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:t}),_o.$set(ir);const Oi={};g&2&&(Oi.$$scope={dirty:g,ctx:t}),vo.$set(Oi);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:t}),bo.$set(Ai);const Ni={};g&2&&(Ni.$$scope={dirty:g,ctx:t}),Po.$set(Ni);const lr={};g&2&&(lr.$$scope={dirty:g,ctx:t}),yo.$set(lr);const Vi={};g&2&&(Vi.$$scope={dirty:g,ctx:t}),To.$set(Vi);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:t}),Co.$set(Si);const Wi={};g&2&&(Wi.$$scope={dirty:g,ctx:t}),xo.$set(Wi);const Bi={};g&2&&(Bi.$$scope={dirty:g,ctx:t}),ko.$set(Bi);const dr={};g&2&&(dr.$$scope={dirty:g,ctx:t}),wo.$set(dr);const Ui={};g&2&&(Ui.$$scope={dirty:g,ctx:t}),Mo.$set(Ui);const Ki={};g&2&&(Ki.$$scope={dirty:g,ctx:t}),Eo.$set(Ki);const Ri={};g&2&&(Ri.$$scope={dirty:g,ctx:t}),jo.$set(Ri);const Hi={};g&2&&(Hi.$$scope={dirty:g,ctx:t}),zo.$set(Hi);const cr={};g&2&&(cr.$$scope={dirty:g,ctx:t}),Fo.$set(cr);const Gi={};g&2&&(Gi.$$scope={dirty:g,ctx:t}),Do.$set(Gi);const V={};g&2&&(V.$$scope={dirty:g,ctx:t}),Oo.$set(V);const Ji={};g&2&&(Ji.$$scope={dirty:g,ctx:t}),No.$set(Ji);const Xi={};g&2&&(Xi.$$scope={dirty:g,ctx:t}),Vo.$set(Xi);const Zi={};g&2&&(Zi.$$scope={dirty:g,ctx:t}),Wo.$set(Zi);const Qi={};g&2&&(Qi.$$scope={dirty:g,ctx:t}),Bo.$set(Qi);const Yi={};g&2&&(Yi.$$scope={dirty:g,ctx:t}),Ko.$set(Yi);const el={};g&2&&(el.$$scope={dirty:g,ctx:t}),Ho.$set(el);const St={};g&2&&(St.$$scope={dirty:g,ctx:t}),Jo.$set(St);const tl={};g&2&&(tl.$$scope={dirty:g,ctx:t}),Xo.$set(tl);const ol={};g&2&&(ol.$$scope={dirty:g,ctx:t}),Qo.$set(ol);const pr={};g&2&&(pr.$$scope={dirty:g,ctx:t}),Yo.$set(pr)},i(t){ql||(T(n.$$.fragment,t),T(E.$$.fragment,t),T(ne.$$.fragment,t),T(Ne.$$.fragment,t),T(Dn.$$.fragment,t),T(On.$$.fragment,t),T(An.$$.fragment,t),T(Vn.$$.fragment,t),T(Sn.$$.fragment,t),T(to.$$.fragment,t),T(Bn.$$.fragment,t),T(Un.$$.fragment,t),T(no.$$.fragment,t),T(Rn.$$.fragment,t),T(Hn.$$.fragment,t),T(Jn.$$.fragment,t),T(Xn.$$.fragment,t),T(Qn.$$.fragment,t),T(Yn.$$.fragment,t),T(es.$$.fragment,t),T(ts.$$.fragment,t),T(ss.$$.fragment,t),T(rs.$$.fragment,t),T(as.$$.fragment,t),T(is.$$.fragment,t),T(ds.$$.fragment,t),T(cs.$$.fragment,t),T(ps.$$.fragment,t),T(fs.$$.fragment,t),T(us.$$.fragment,t),T(gs.$$.fragment,t),T(bs.$$.fragment,t),T(uo.$$.fragment,t),T(go.$$.fragment,t),T(Ps.$$.fragment,t),T(_o.$$.fragment,t),T(vo.$$.fragment,t),T($s.$$.fragment,t),T(bo.$$.fragment,t),T(Po.$$.fragment,t),T(ys.$$.fragment,t),T(Ts.$$.fragment,t),T(Is.$$.fragment,t),T(yo.$$.fragment,t),T(To.$$.fragment,t),T(Cs.$$.fragment,t),T(xs.$$.fragment,t),T(Ls.$$.fragment,t),T(Co.$$.fragment,t),T(xo.$$.fragment,t),T(ks.$$.fragment,t),T(ws.$$.fragment,t),T(ko.$$.fragment,t),T(zs.$$.fragment,t),T(wo.$$.fragment,t),T(Mo.$$.fragment,t),T(Fs.$$.fragment,t),T(Eo.$$.fragment,t),T(jo.$$.fragment,t),T(qs.$$.fragment,t),T(zo.$$.fragment,t),T(Fo.$$.fragment,t),T(Ds.$$.fragment,t),T(Os.$$.fragment,t),T(As.$$.fragment,t),T(Do.$$.fragment,t),T(Oo.$$.fragment,t),T(Ns.$$.fragment,t),T(Vs.$$.fragment,t),T(Ss.$$.fragment,t),T(No.$$.fragment,t),T(Vo.$$.fragment,t),T(Ws.$$.fragment,t),T(Bs.$$.fragment,t),T(Zs.$$.fragment,t),T(Wo.$$.fragment,t),T(Bo.$$.fragment,t),T(Qs.$$.fragment,t),T(Ko.$$.fragment,t),T(Ys.$$.fragment,t),T(Ho.$$.fragment,t),T(er.$$.fragment,t),T(tr.$$.fragment,t),T(or.$$.fragment,t),T(Jo.$$.fragment,t),T(Xo.$$.fragment,t),T(nr.$$.fragment,t),T(sr.$$.fragment,t),T(rr.$$.fragment,t),T(Qo.$$.fragment,t),T(Yo.$$.fragment,t),ql=!0)},o(t){I(n.$$.fragment,t),I(E.$$.fragment,t),I(ne.$$.fragment,t),I(Ne.$$.fragment,t),I(Dn.$$.fragment,t),I(On.$$.fragment,t),I(An.$$.fragment,t),I(Vn.$$.fragment,t),I(Sn.$$.fragment,t),I(to.$$.fragment,t),I(Bn.$$.fragment,t),I(Un.$$.fragment,t),I(no.$$.fragment,t),I(Rn.$$.fragment,t),I(Hn.$$.fragment,t),I(Jn.$$.fragment,t),I(Xn.$$.fragment,t),I(Qn.$$.fragment,t),I(Yn.$$.fragment,t),I(es.$$.fragment,t),I(ts.$$.fragment,t),I(ss.$$.fragment,t),I(rs.$$.fragment,t),I(as.$$.fragment,t),I(is.$$.fragment,t),I(ds.$$.fragment,t),I(cs.$$.fragment,t),I(ps.$$.fragment,t),I(fs.$$.fragment,t),I(us.$$.fragment,t),I(gs.$$.fragment,t),I(bs.$$.fragment,t),I(uo.$$.fragment,t),I(go.$$.fragment,t),I(Ps.$$.fragment,t),I(_o.$$.fragment,t),I(vo.$$.fragment,t),I($s.$$.fragment,t),I(bo.$$.fragment,t),I(Po.$$.fragment,t),I(ys.$$.fragment,t),I(Ts.$$.fragment,t),I(Is.$$.fragment,t),I(yo.$$.fragment,t),I(To.$$.fragment,t),I(Cs.$$.fragment,t),I(xs.$$.fragment,t),I(Ls.$$.fragment,t),I(Co.$$.fragment,t),I(xo.$$.fragment,t),I(ks.$$.fragment,t),I(ws.$$.fragment,t),I(ko.$$.fragment,t),I(zs.$$.fragment,t),I(wo.$$.fragment,t),I(Mo.$$.fragment,t),I(Fs.$$.fragment,t),I(Eo.$$.fragment,t),I(jo.$$.fragment,t),I(qs.$$.fragment,t),I(zo.$$.fragment,t),I(Fo.$$.fragment,t),I(Ds.$$.fragment,t),I(Os.$$.fragment,t),I(As.$$.fragment,t),I(Do.$$.fragment,t),I(Oo.$$.fragment,t),I(Ns.$$.fragment,t),I(Vs.$$.fragment,t),I(Ss.$$.fragment,t),I(No.$$.fragment,t),I(Vo.$$.fragment,t),I(Ws.$$.fragment,t),I(Bs.$$.fragment,t),I(Zs.$$.fragment,t),I(Wo.$$.fragment,t),I(Bo.$$.fragment,t),I(Qs.$$.fragment,t),I(Ko.$$.fragment,t),I(Ys.$$.fragment,t),I(Ho.$$.fragment,t),I(er.$$.fragment,t),I(tr.$$.fragment,t),I(or.$$.fragment,t),I(Jo.$$.fragment,t),I(Xo.$$.fragment,t),I(nr.$$.fragment,t),I(sr.$$.fragment,t),I(rr.$$.fragment,t),I(Qo.$$.fragment,t),I(Yo.$$.fragment,t),ql=!1},d(t){o(d),t&&o(b),t&&o(u),C(n),t&&o(Wt),t&&o(R),C(E),t&&o(Bt),t&&o(Z),t&&o(Ut),t&&o(le),t&&o(Kt),t&&o(de),t&&o(He),t&&o(F),C(ne),t&&o(Rt),t&&o(De),t&&o(Ht),t&&o(Q),t&&o(Gt),t&&o(M),t&&o(Fn),C(Ne,t),t&&o(Ee),t&&o(U),t&&o(tt),t&&o(me),C(Dn),t&&o(sl),t&&o(se),C(On),C(An),t&&o(rl),t&&o(nt),C(Vn),t&&o(al),t&&o(re),C(Sn),C(to),t&&o(il),t&&o(at),C(Bn),t&&o(ll),t&&o(ae),C(Un),C(no),t&&o(dl),t&&o(dt),C(Rn),t&&o(cl),t&&o(q),C(Hn),C(Jn),C(Xn),C(Qn),C(Yn),t&&o(pl),t&&o(ct),C(es),t&&o(ml),t&&o(G),C(ts),C(ss),C(rs),t&&o(fl),t&&o(pt),C(as),t&&o(hl),t&&o(je),C(is),t&&o(ul),t&&o(mt),C(ds),t&&o(gl),t&&o(J),C(cs),C(ps),C(fs),t&&o(_l),t&&o(ft),C(us),t&&o(vl),t&&o(X),C(gs),C(bs),C(uo),C(go),C(Ps),C(_o),C(vo),C($s),C(bo),C(Po),t&&o(bl),t&&o(_t),C(ys),t&&o(Pl),t&&o(vt),C(Ts),C(Is),C(yo),C(To),t&&o($l),t&&o(Pt),C(Cs),t&&o(yl),t&&o($t),C(xs),C(Ls),C(Co),C(xo),t&&o(Tl),t&&o(Tt),C(ks),t&&o(Il),t&&o(D),C(ws),C(ko),C(zs),C(wo),C(Mo),C(Fs),C(Eo),C(jo),C(qs),C(zo),C(Fo),t&&o(Cl),t&&o(Lt),C(Ds),t&&o(xl),t&&o(kt),C(Os),C(As),C(Do),C(Oo),t&&o(Ll),t&&o(Mt),C(Ns),t&&o(kl),t&&o(Et),C(Vs),C(Ss),C(No),C(Vo),t&&o(wl),t&&o(zt),C(Ws),t&&o(Ml),t&&o(z),C(Bs),C(Zs),C(Wo),C(Bo),C(Qs),C(Ko),C(Ys),C(Ho),t&&o(El),t&&o(qt),C(er),t&&o(jl),t&&o(Dt),C(tr),C(or),C(Jo),C(Xo),t&&o(zl),t&&o(At),C(nr),t&&o(Fl),t&&o(Nt),C(sr),C(rr),C(Qo),C(Yo)}}}const ov={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function nv(x){return T_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cv extends b_{constructor(d){super();P_(this,d,nv,tv,$_,{})}}export{cv as default,ov as metadata};
