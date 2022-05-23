import{S as dv,i as cv,s as pv,e as s,k as m,w as P,t as i,M as mv,c as r,d as o,m as f,a,x as $,h as l,b as h,G as e,g as v,y as I,q as T,o as C,B as y,v as fv,L as W}from"../../chunks/vendor-316217a5.js";import{T as Z}from"../../chunks/Tip-27e9fea0.js";import{D as k}from"../../chunks/Docstring-1fe4a33a.js";import{C as A}from"../../chunks/CodeBlock-8418a95e.js";import{I as D}from"../../chunks/IconCopyLink-40460835.js";import{E as S}from"../../chunks/ExampleCodeBlock-32fc0037.js";function hv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function uv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function gv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function _v(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function vv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function bv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Pv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function $v(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Iv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Tv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Cv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function yv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function xv(x){let d,b,u,p,_,n,c,L,un,Re,z,se,ye,xe,gn,Le,_n,Ot,Q,qe,ke,At,K,Y,De,He,Nt,Oe,we,vn,Vt,O,re,Ee,Me,bn,ze,Pn,St,ee,$n,Ae,ae;return{c(){d=s("p"),b=i("TF 2.0 models accepts two formats as inputs:"),u=m(),p=s("ul"),_=s("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),c=m(),L=s("li"),un=i("having all inputs as a list, tuple or dict in the first positional arguments."),Re=m(),z=s("p"),se=i("This second option is useful when using "),ye=s("code"),xe=i("tf.keras.Model.fit"),gn=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),Le=s("code"),_n=i("model(inputs)"),Ot=i("."),Q=m(),qe=s("p"),ke=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),At=m(),K=s("ul"),Y=s("li"),De=i("a single Tensor with "),He=s("code"),Nt=i("input_ids"),Oe=i(" only and nothing else: "),we=s("code"),vn=i("model(input_ids)"),Vt=m(),O=s("li"),re=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ee=s("code"),Me=i("model([input_ids, attention_mask])"),bn=i(" or "),ze=s("code"),Pn=i("model([input_ids, attention_mask, token_type_ids])"),St=m(),ee=s("li"),$n=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Ae=s("code"),ae=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=r(w,"P",{});var j=a(d);b=l(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),u=f(w),p=r(w,"UL",{});var Wt=a(p);_=r(Wt,"LI",{});var ar=a(_);n=l(ar,"having all inputs as keyword arguments (like PyTorch models), or"),ar.forEach(o),c=f(Wt),L=r(Wt,"LI",{});var In=a(L);un=l(In,"having all inputs as a list, tuple or dict in the first positional arguments."),In.forEach(o),Wt.forEach(o),Re=f(w),z=r(w,"P",{});var E=a(z);se=l(E,"This second option is useful when using "),ye=r(E,"CODE",{});var ir=a(ye);xe=l(ir,"tf.keras.Model.fit"),ir.forEach(o),gn=l(E,` method which currently requires having all the
tensors in the first argument of the model call function: `),Le=r(E,"CODE",{});var Ke=a(Le);_n=l(Ke,"model(inputs)"),Ke.forEach(o),Ot=l(E,"."),E.forEach(o),Q=f(w),qe=r(w,"P",{});var lr=a(qe);ke=l(lr,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),lr.forEach(o),At=f(w),K=r(w,"UL",{});var Ne=a(K);Y=r(Ne,"LI",{});var ie=a(Y);De=l(ie,"a single Tensor with "),He=r(ie,"CODE",{});var dr=a(He);Nt=l(dr,"input_ids"),dr.forEach(o),Oe=l(ie," only and nothing else: "),we=r(ie,"CODE",{});var cr=a(we);vn=l(cr,"model(input_ids)"),cr.forEach(o),ie.forEach(o),Vt=f(Ne),O=r(Ne,"LI",{});var le=a(O);re=l(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Ee=r(le,"CODE",{});var pr=a(Ee);Me=l(pr,"model([input_ids, attention_mask])"),pr.forEach(o),bn=l(le," or "),ze=r(le,"CODE",{});var mr=a(ze);Pn=l(mr,"model([input_ids, attention_mask, token_type_ids])"),mr.forEach(o),le.forEach(o),St=f(Ne),ee=r(Ne,"LI",{});var Ve=a(ee);$n=l(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Ae=r(Ve,"CODE",{});var fr=a(Ae);ae=l(fr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),fr.forEach(o),Ve.forEach(o),Ne.forEach(o)},m(w,j){v(w,d,j),e(d,b),v(w,u,j),v(w,p,j),e(p,_),e(_,n),e(p,c),e(p,L),e(L,un),v(w,Re,j),v(w,z,j),e(z,se),e(z,ye),e(ye,xe),e(z,gn),e(z,Le),e(Le,_n),e(z,Ot),v(w,Q,j),v(w,qe,j),e(qe,ke),v(w,At,j),v(w,K,j),e(K,Y),e(Y,De),e(Y,He),e(He,Nt),e(Y,Oe),e(Y,we),e(we,vn),e(K,Vt),e(K,O),e(O,re),e(O,Ee),e(Ee,Me),e(O,bn),e(O,ze),e(ze,Pn),e(K,St),e(K,ee),e(ee,$n),e(ee,Ae),e(Ae,ae)},d(w){w&&o(d),w&&o(u),w&&o(p),w&&o(Re),w&&o(z),w&&o(Q),w&&o(qe),w&&o(At),w&&o(K)}}}function Lv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function kv(x){let d,b,u,p,_;return p=new A({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function wv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Ev(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Mv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function zv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function jv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Fv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function qv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Dv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Ov(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Av(x){let d,b,u,p,_;return p=new A({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Nv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Vv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Sv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Wv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Bv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Uv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:W,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Rv(x){let d,b,u,p,_,n,c,L,un,Re,z,se,ye,xe,gn,Le,_n,Ot,Q,qe,ke,At,K,Y,De,He,Nt,Oe,we,vn,Vt,O,re,Ee,Me,bn,ze,Pn,St,ee,$n,Ae,ae,w,j,Wt,ar,In,E,ir,Ke,lr,Ne,ie,dr,cr,le,pr,mr,Ve,fr,Fd,hr,qd,Dd,ur,Od,Ad,il,Tn,ll,Se,Nd,Cn,Vd,Sd,yn,Wd,Bd,dl,Ge,Bt,_a,xn,Ud,va,Rd,cl,te,Ln,Hd,Ut,gr,Kd,Gd,_r,Jd,Xd,Zd,Je,Qd,vr,Yd,ec,br,tc,oc,nc,Rt,kn,sc,wn,rc,Pr,ac,ic,pl,Xe,Ht,ba,En,lc,Pa,dc,ml,oe,Mn,cc,Ze,pc,$r,mc,fc,zn,hc,uc,gc,Qe,_c,Ir,vc,bc,Tr,Pc,$c,Ic,Kt,fl,Ye,Gt,$a,jn,Tc,Ia,Cc,hl,ne,Fn,yc,et,xc,Cr,Lc,kc,qn,wc,Ec,Mc,tt,zc,yr,jc,Fc,xr,qc,Dc,Oc,Jt,ul,ot,Xt,Ta,Dn,Ac,Ca,Nc,gl,F,On,Vc,ya,Sc,Wc,An,Bc,Lr,Uc,Rc,Hc,de,Nn,Kc,xa,Gc,Jc,La,kr,Xc,ka,Zc,Qc,wa,Yc,ep,Zt,Vn,tp,Sn,op,Ea,np,sp,rp,Qt,Wn,ap,Ma,ip,lp,wr,Bn,_l,nt,Yt,za,Un,dp,ja,cp,vl,U,Rn,pp,Hn,mp,Fa,fp,hp,up,Kn,gp,Er,_p,vp,bp,ce,Gn,Pp,qa,$p,Ip,Da,Mr,Tp,Oa,Cp,yp,Aa,xp,Lp,eo,Jn,kp,Na,wp,bl,st,to,Va,Xn,Ep,Sa,Mp,Pl,N,Zn,zp,Wa,jp,Fp,Qn,qp,zr,Dp,Op,Ap,oo,Yn,Np,es,Vp,Ba,Sp,Wp,Bp,no,ts,Up,rt,Rp,Ua,Hp,Kp,Ra,Gp,Jp,Xp,so,os,Zp,at,Qp,Ha,Yp,em,Ka,tm,om,$l,it,ro,Ga,ns,nm,Ja,sm,Il,R,ss,rm,Xa,am,im,G,jr,lm,dm,Fr,cm,pm,qr,mm,fm,Za,hm,um,Dr,gm,_m,vm,ao,rs,bm,as,Pm,Or,$m,Im,Tm,io,is,Cm,ls,ym,Ar,xm,Lm,Tl,lt,lo,Qa,ds,km,Ya,wm,Cl,H,cs,Em,ps,Mm,ms,zm,jm,Fm,pe,fs,qm,dt,Dm,Nr,Om,Am,ei,Nm,Vm,Sm,co,Wm,po,Bm,me,hs,Um,ct,Rm,Vr,Hm,Km,ti,Gm,Jm,Xm,mo,Zm,fo,Qm,fe,us,Ym,pt,ef,Sr,tf,of,oi,nf,sf,rf,ho,af,uo,yl,mt,go,ni,gs,lf,si,df,xl,ft,_s,cf,he,vs,pf,ht,mf,Wr,ff,hf,ri,uf,gf,_f,_o,vf,vo,Ll,ut,bo,ai,bs,bf,ii,Pf,kl,gt,Ps,$f,ue,$s,If,_t,Tf,Br,Cf,yf,li,xf,Lf,kf,Po,wf,$o,wl,vt,Io,di,Is,Ef,ci,Mf,El,q,Ts,zf,Cs,jf,Ur,Ff,qf,Df,ys,Of,xs,Af,Nf,Vf,To,Sf,ge,Ls,Wf,bt,Bf,Rr,Uf,Rf,pi,Hf,Kf,Gf,Co,Jf,yo,Xf,_e,ks,Zf,Pt,Qf,Hr,Yf,eh,mi,th,oh,nh,xo,sh,Lo,rh,ve,ws,ah,$t,ih,Kr,lh,dh,fi,ch,ph,mh,ko,fh,wo,Ml,It,Eo,hi,Es,hh,ui,uh,zl,Tt,Ms,gh,be,zs,_h,Ct,vh,Gr,bh,Ph,gi,$h,Ih,Th,Mo,Ch,zo,jl,yt,jo,_i,js,yh,vi,xh,Fl,xt,Fs,Lh,Pe,qs,kh,Lt,wh,Jr,Eh,Mh,bi,zh,jh,Fh,Fo,qh,qo,ql,kt,Do,Pi,Ds,Dh,$i,Oh,Dl,M,Os,Ah,As,Nh,Xr,Vh,Sh,Wh,Ns,Bh,Vs,Uh,Rh,Hh,Ii,Kh,Gh,je,Ti,Ss,Jh,Xh,Ci,Ws,Zh,Qh,yi,Bs,Yh,eu,xi,Us,tu,ou,$e,Rs,nu,wt,su,Li,ru,au,ki,iu,lu,du,Oo,cu,Ao,pu,No,Hs,mu,Vo,fu,So,Ks,hu,Wo,Ol,Et,Bo,wi,Gs,uu,Ei,gu,Al,Mt,Js,_u,Ie,Xs,vu,zt,bu,Mi,Pu,$u,zi,Iu,Tu,Cu,Uo,yu,Ro,Nl,jt,Ho,ji,Zs,xu,Fi,Lu,Vl,Ft,Qs,ku,Te,Ys,wu,qt,Eu,qi,Mu,zu,Di,ju,Fu,qu,Ko,Du,Go,Sl;return n=new D({}),xe=new D({}),Me=new D({}),Tn=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),xn=new D({}),Ln=new k({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L245"}}),kn=new k({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L294",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),En=new D({}),Mn=new k({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L33"}}),Kt=new S({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[hv]},$$scope:{ctx:x}}}),jn=new D({}),Fn=new k({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L141"}}),Jt=new S({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[uv]},$$scope:{ctx:x}}}),Dn=new D({}),On=new k({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L100"}}),Nn=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L186",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new k({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L213",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L241",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bn=new k({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L336"}}),Un=new D({}),Rn=new k({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L50"}}),Gn=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L123",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L150",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xn=new D({}),Zn=new k({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"do_convert_rgb",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
Whether or not to convert <code>PIL.Image.Image</code> into <code>RGB</code> format`,name:"convert_rgb"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L30"}}),Yn=new k({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L178"}}),ts=new k({props:{name:"convert_rgb",anchor:"transformers.CLIPFeatureExtractor.convert_rgb",parameters:[{name:"image",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.convert_rgb.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to convert.`,name:"image"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L164"}}),os=new k({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = <Resampling.BICUBIC: 3>"}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L204"}}),ns=new D({}),ss=new k({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22"}}),rs=new k({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),is=new k({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),ds=new D({}),cs=new k({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L847"}}),fs=new k({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L978",returnDescription:`
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
`}}),co=new Z({props:{$$slots:{default:[gv]},$$scope:{ctx:x}}}),po=new S({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[_v]},$$scope:{ctx:x}}}),hs=new k({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L882",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),mo=new Z({props:{$$slots:{default:[vv]},$$scope:{ctx:x}}}),fo=new S({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[bv]},$$scope:{ctx:x}}}),us=new k({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L929",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),ho=new Z({props:{$$slots:{default:[Pv]},$$scope:{ctx:x}}}),uo=new S({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[$v]},$$scope:{ctx:x}}}),gs=new D({}),_s=new k({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L683"}}),vs=new k({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L698",returnDescription:`
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
`}}),_o=new Z({props:{$$slots:{default:[Iv]},$$scope:{ctx:x}}}),vo=new S({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[Tv]},$$scope:{ctx:x}}}),bs=new D({}),Ps=new k({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L794"}}),$s=new k({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L807",returnDescription:`
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
`}}),Po=new Z({props:{$$slots:{default:[Cv]},$$scope:{ctx:x}}}),$o=new S({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[yv]},$$scope:{ctx:x}}}),Is=new D({}),Ts=new k({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1213"}}),To=new Z({props:{$$slots:{default:[xv]},$$scope:{ctx:x}}}),Ls=new k({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1341",returnDescription:`
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
<li><strong>text_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</li>
<li><strong>vision_model_output(<code>TFBaseModelOutputWithPooling</code>):</strong>
The output of the <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</li>
</ul>
`,returnType:`
<p><code>transformers.models.clip.modeling_tf_clip.TFCLIPOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Co=new Z({props:{$$slots:{default:[Lv]},$$scope:{ctx:x}}}),yo=new S({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[kv]},$$scope:{ctx:x}}}),ks=new k({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1259",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),xo=new Z({props:{$$slots:{default:[wv]},$$scope:{ctx:x}}}),Lo=new S({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[Ev]},$$scope:{ctx:x}}}),ws=new k({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1299",returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),ko=new Z({props:{$$slots:{default:[Mv]},$$scope:{ctx:x}}}),wo=new S({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[zv]},$$scope:{ctx:x}}}),Es=new D({}),Ms=new k({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1040"}}),zs=new k({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1048",returnDescription:`
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
`}}),Mo=new Z({props:{$$slots:{default:[jv]},$$scope:{ctx:x}}}),zo=new S({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[Fv]},$$scope:{ctx:x}}}),js=new D({}),Fs=new k({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1115"}}),qs=new k({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1156",returnDescription:`
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
`}}),Fo=new Z({props:{$$slots:{default:[qv]},$$scope:{ctx:x}}}),qo=new S({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[Dv]},$$scope:{ctx:x}}}),Ds=new D({}),Os=new k({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1148"}}),Rs=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Oo=new Z({props:{$$slots:{default:[Ov]},$$scope:{ctx:x}}}),Ao=new S({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[Av]},$$scope:{ctx:x}}}),Hs=new k({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L822",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Vo=new S({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[Nv]},$$scope:{ctx:x}}}),Ks=new k({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L889",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Wo=new S({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[Vv]},$$scope:{ctx:x}}}),Gs=new D({}),Js=new k({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L969"}}),Xs=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Uo=new Z({props:{$$slots:{default:[Sv]},$$scope:{ctx:x}}}),Ro=new S({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[Wv]},$$scope:{ctx:x}}}),Zs=new D({}),Qs=new k({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1022"}}),Ys=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
`}}),Ko=new Z({props:{$$slots:{default:[Bv]},$$scope:{ctx:x}}}),Go=new S({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[Uv]},$$scope:{ctx:x}}}),{c(){d=s("meta"),b=m(),u=s("h1"),p=s("a"),_=s("span"),P(n.$$.fragment),c=m(),L=s("span"),un=i("CLIP"),Re=m(),z=s("h2"),se=s("a"),ye=s("span"),P(xe.$$.fragment),gn=m(),Le=s("span"),_n=i("Overview"),Ot=m(),Q=s("p"),qe=i("The CLIP model was proposed in "),ke=s("a"),At=i("Learning Transferable Visual Models From Natural Language Supervision"),K=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Y=m(),De=s("p"),He=i("The abstract from the paper is the following:"),Nt=m(),Oe=s("p"),we=s("em"),vn=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Vt=m(),O=s("h2"),re=s("a"),Ee=s("span"),P(Me.$$.fragment),bn=m(),ze=s("span"),Pn=i("Usage"),St=m(),ee=s("p"),$n=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Ae=m(),ae=s("p"),w=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s("a"),Wt=i("CLIPFeatureExtractor"),ar=i(" can be used to resize (or rescale) and normalize images for the model."),In=m(),E=s("p"),ir=i("The "),Ke=s("a"),lr=i("CLIPTokenizer"),Ne=i(" is used to encode the text. The "),ie=s("a"),dr=i("CLIPProcessor"),cr=i(` wraps
`),le=s("a"),pr=i("CLIPFeatureExtractor"),mr=i(" and "),Ve=s("a"),fr=i("CLIPTokenizer"),Fd=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),hr=s("a"),qd=i("CLIPProcessor"),Dd=i(" and "),ur=s("a"),Od=i("CLIPModel"),Ad=i("."),il=m(),P(Tn.$$.fragment),ll=m(),Se=s("p"),Nd=i("This model was contributed by "),Cn=s("a"),Vd=i("valhalla"),Sd=i(". The original code can be found "),yn=s("a"),Wd=i("here"),Bd=i("."),dl=m(),Ge=s("h2"),Bt=s("a"),_a=s("span"),P(xn.$$.fragment),Ud=m(),va=s("span"),Rd=i("CLIPConfig"),cl=m(),te=s("div"),P(Ln.$$.fragment),Hd=m(),Ut=s("p"),gr=s("a"),Kd=i("CLIPConfig"),Gd=i(" is the configuration class to store the configuration of a "),_r=s("a"),Jd=i("CLIPModel"),Xd=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Zd=m(),Je=s("p"),Qd=i("Configuration objects inherit from "),vr=s("a"),Yd=i("PretrainedConfig"),ec=i(` and can be used to control the model outputs. Read the
documentation from `),br=s("a"),tc=i("PretrainedConfig"),oc=i(" for more information."),nc=m(),Rt=s("div"),P(kn.$$.fragment),sc=m(),wn=s("p"),rc=i("Instantiate a "),Pr=s("a"),ac=i("CLIPConfig"),ic=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),pl=m(),Xe=s("h2"),Ht=s("a"),ba=s("span"),P(En.$$.fragment),lc=m(),Pa=s("span"),dc=i("CLIPTextConfig"),ml=m(),oe=s("div"),P(Mn.$$.fragment),cc=m(),Ze=s("p"),pc=i("This is the configuration class to store the configuration of a "),$r=s("a"),mc=i("CLIPModel"),fc=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),zn=s("a"),hc=i("openai/clip-vit-base-patch32"),uc=i(" architecture."),gc=m(),Qe=s("p"),_c=i("Configuration objects inherit from "),Ir=s("a"),vc=i("PretrainedConfig"),bc=i(` and can be used to control the model outputs. Read the
documentation from `),Tr=s("a"),Pc=i("PretrainedConfig"),$c=i(" for more information."),Ic=m(),P(Kt.$$.fragment),fl=m(),Ye=s("h2"),Gt=s("a"),$a=s("span"),P(jn.$$.fragment),Tc=m(),Ia=s("span"),Cc=i("CLIPVisionConfig"),hl=m(),ne=s("div"),P(Fn.$$.fragment),yc=m(),et=s("p"),xc=i("This is the configuration class to store the configuration of a "),Cr=s("a"),Lc=i("CLIPModel"),kc=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),qn=s("a"),wc=i("openai/clip-vit-base-patch32"),Ec=i(" architecture."),Mc=m(),tt=s("p"),zc=i("Configuration objects inherit from "),yr=s("a"),jc=i("PretrainedConfig"),Fc=i(` and can be used to control the model outputs. Read the
documentation from `),xr=s("a"),qc=i("PretrainedConfig"),Dc=i(" for more information."),Oc=m(),P(Jt.$$.fragment),ul=m(),ot=s("h2"),Xt=s("a"),Ta=s("span"),P(Dn.$$.fragment),Ac=m(),Ca=s("span"),Nc=i("CLIPTokenizer"),gl=m(),F=s("div"),P(On.$$.fragment),Vc=m(),ya=s("p"),Sc=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Wc=m(),An=s("p"),Bc=i("This tokenizer inherits from "),Lr=s("a"),Uc=i("PreTrainedTokenizer"),Rc=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Hc=m(),de=s("div"),P(Nn.$$.fragment),Kc=m(),xa=s("p"),Gc=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Jc=m(),La=s("ul"),kr=s("li"),Xc=i("single sequence: "),ka=s("code"),Zc=i("<|startoftext|> X <|endoftext|>"),Qc=m(),wa=s("p"),Yc=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),ep=m(),Zt=s("div"),P(Vn.$$.fragment),tp=m(),Sn=s("p"),op=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ea=s("code"),np=i("prepare_for_model"),sp=i(" method."),rp=m(),Qt=s("div"),P(Wn.$$.fragment),ap=m(),Ma=s("p"),ip=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),lp=m(),wr=s("div"),P(Bn.$$.fragment),_l=m(),nt=s("h2"),Yt=s("a"),za=s("span"),P(Un.$$.fragment),dp=m(),ja=s("span"),cp=i("CLIPTokenizerFast"),vl=m(),U=s("div"),P(Rn.$$.fragment),pp=m(),Hn=s("p"),mp=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Fa=s("em"),fp=i("tokenizers"),hp=i(` library). Based on byte-level
Byte-Pair-Encoding.`),up=m(),Kn=s("p"),gp=i("This tokenizer inherits from "),Er=s("a"),_p=i("PreTrainedTokenizerFast"),vp=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),bp=m(),ce=s("div"),P(Gn.$$.fragment),Pp=m(),qa=s("p"),$p=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Ip=m(),Da=s("ul"),Mr=s("li"),Tp=i("single sequence: "),Oa=s("code"),Cp=i("<|startoftext|> X <|endoftext|>"),yp=m(),Aa=s("p"),xp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Lp=m(),eo=s("div"),P(Jn.$$.fragment),kp=m(),Na=s("p"),wp=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),bl=m(),st=s("h2"),to=s("a"),Va=s("span"),P(Xn.$$.fragment),Ep=m(),Sa=s("span"),Mp=i("CLIPFeatureExtractor"),Pl=m(),N=s("div"),P(Zn.$$.fragment),zp=m(),Wa=s("p"),jp=i("Constructs a CLIP feature extractor."),Fp=m(),Qn=s("p"),qp=i("This feature extractor inherits from "),zr=s("a"),Dp=i("FeatureExtractionMixin"),Op=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ap=m(),oo=s("div"),P(Yn.$$.fragment),Np=m(),es=s("p"),Vp=i("Crops "),Ba=s("code"),Sp=i("image"),Wp=i(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Bp=m(),no=s("div"),P(ts.$$.fragment),Up=m(),rt=s("p"),Rp=i("Converts "),Ua=s("code"),Hp=i("image"),Kp=i(" to RGB format. Note that this will trigger a conversion of "),Ra=s("code"),Gp=i("image"),Jp=i(" to a PIL Image."),Xp=m(),so=s("div"),P(os.$$.fragment),Zp=m(),at=s("p"),Qp=i("Resizes "),Ha=s("code"),Yp=i("image"),em=i(". Note that this will trigger a conversion of "),Ka=s("code"),tm=i("image"),om=i(" to a PIL Image."),$l=m(),it=s("h2"),ro=s("a"),Ga=s("span"),P(ns.$$.fragment),nm=m(),Ja=s("span"),sm=i("CLIPProcessor"),Il=m(),R=s("div"),P(ss.$$.fragment),rm=m(),Xa=s("p"),am=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),im=m(),G=s("p"),jr=s("a"),lm=i("CLIPProcessor"),dm=i(" offers all the functionalities of "),Fr=s("a"),cm=i("CLIPFeatureExtractor"),pm=i(" and "),qr=s("a"),mm=i("CLIPTokenizerFast"),fm=i(`. See the
`),Za=s("code"),hm=i("__call__()"),um=i(" and "),Dr=s("a"),gm=i("decode()"),_m=i(" for more information."),vm=m(),ao=s("div"),P(rs.$$.fragment),bm=m(),as=s("p"),Pm=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Or=s("a"),$m=i("batch_decode()"),Im=i(`. Please
refer to the docstring of this method for more information.`),Tm=m(),io=s("div"),P(is.$$.fragment),Cm=m(),ls=s("p"),ym=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ar=s("a"),xm=i("decode()"),Lm=i(`. Please refer to
the docstring of this method for more information.`),Tl=m(),lt=s("h2"),lo=s("a"),Qa=s("span"),P(ds.$$.fragment),km=m(),Ya=s("span"),wm=i("CLIPModel"),Cl=m(),H=s("div"),P(cs.$$.fragment),Em=m(),ps=s("p"),Mm=i("This model is a PyTorch "),ms=s("a"),zm=i("torch.nn.Module"),jm=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fm=m(),pe=s("div"),P(fs.$$.fragment),qm=m(),dt=s("p"),Dm=i("The "),Nr=s("a"),Om=i("CLIPModel"),Am=i(" forward method, overrides the "),ei=s("code"),Nm=i("__call__"),Vm=i(" special method."),Sm=m(),P(co.$$.fragment),Wm=m(),P(po.$$.fragment),Bm=m(),me=s("div"),P(hs.$$.fragment),Um=m(),ct=s("p"),Rm=i("The "),Vr=s("a"),Hm=i("CLIPModel"),Km=i(" forward method, overrides the "),ti=s("code"),Gm=i("__call__"),Jm=i(" special method."),Xm=m(),P(mo.$$.fragment),Zm=m(),P(fo.$$.fragment),Qm=m(),fe=s("div"),P(us.$$.fragment),Ym=m(),pt=s("p"),ef=i("The "),Sr=s("a"),tf=i("CLIPModel"),of=i(" forward method, overrides the "),oi=s("code"),nf=i("__call__"),sf=i(" special method."),rf=m(),P(ho.$$.fragment),af=m(),P(uo.$$.fragment),yl=m(),mt=s("h2"),go=s("a"),ni=s("span"),P(gs.$$.fragment),lf=m(),si=s("span"),df=i("CLIPTextModel"),xl=m(),ft=s("div"),P(_s.$$.fragment),cf=m(),he=s("div"),P(vs.$$.fragment),pf=m(),ht=s("p"),mf=i("The "),Wr=s("a"),ff=i("CLIPTextModel"),hf=i(" forward method, overrides the "),ri=s("code"),uf=i("__call__"),gf=i(" special method."),_f=m(),P(_o.$$.fragment),vf=m(),P(vo.$$.fragment),Ll=m(),ut=s("h2"),bo=s("a"),ai=s("span"),P(bs.$$.fragment),bf=m(),ii=s("span"),Pf=i("CLIPVisionModel"),kl=m(),gt=s("div"),P(Ps.$$.fragment),$f=m(),ue=s("div"),P($s.$$.fragment),If=m(),_t=s("p"),Tf=i("The "),Br=s("a"),Cf=i("CLIPVisionModel"),yf=i(" forward method, overrides the "),li=s("code"),xf=i("__call__"),Lf=i(" special method."),kf=m(),P(Po.$$.fragment),wf=m(),P($o.$$.fragment),wl=m(),vt=s("h2"),Io=s("a"),di=s("span"),P(Is.$$.fragment),Ef=m(),ci=s("span"),Mf=i("TFCLIPModel"),El=m(),q=s("div"),P(Ts.$$.fragment),zf=m(),Cs=s("p"),jf=i("This model inherits from "),Ur=s("a"),Ff=i("TFPreTrainedModel"),qf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Df=m(),ys=s("p"),Of=i("This model is also a "),xs=s("a"),Af=i("tf.keras.Model"),Nf=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vf=m(),P(To.$$.fragment),Sf=m(),ge=s("div"),P(Ls.$$.fragment),Wf=m(),bt=s("p"),Bf=i("The "),Rr=s("a"),Uf=i("TFCLIPModel"),Rf=i(" forward method, overrides the "),pi=s("code"),Hf=i("__call__"),Kf=i(" special method."),Gf=m(),P(Co.$$.fragment),Jf=m(),P(yo.$$.fragment),Xf=m(),_e=s("div"),P(ks.$$.fragment),Zf=m(),Pt=s("p"),Qf=i("The "),Hr=s("a"),Yf=i("TFCLIPModel"),eh=i(" forward method, overrides the "),mi=s("code"),th=i("__call__"),oh=i(" special method."),nh=m(),P(xo.$$.fragment),sh=m(),P(Lo.$$.fragment),rh=m(),ve=s("div"),P(ws.$$.fragment),ah=m(),$t=s("p"),ih=i("The "),Kr=s("a"),lh=i("TFCLIPModel"),dh=i(" forward method, overrides the "),fi=s("code"),ch=i("__call__"),ph=i(" special method."),mh=m(),P(ko.$$.fragment),fh=m(),P(wo.$$.fragment),Ml=m(),It=s("h2"),Eo=s("a"),hi=s("span"),P(Es.$$.fragment),hh=m(),ui=s("span"),uh=i("TFCLIPTextModel"),zl=m(),Tt=s("div"),P(Ms.$$.fragment),gh=m(),be=s("div"),P(zs.$$.fragment),_h=m(),Ct=s("p"),vh=i("The "),Gr=s("a"),bh=i("TFCLIPTextModel"),Ph=i(" forward method, overrides the "),gi=s("code"),$h=i("__call__"),Ih=i(" special method."),Th=m(),P(Mo.$$.fragment),Ch=m(),P(zo.$$.fragment),jl=m(),yt=s("h2"),jo=s("a"),_i=s("span"),P(js.$$.fragment),yh=m(),vi=s("span"),xh=i("TFCLIPVisionModel"),Fl=m(),xt=s("div"),P(Fs.$$.fragment),Lh=m(),Pe=s("div"),P(qs.$$.fragment),kh=m(),Lt=s("p"),wh=i("The "),Jr=s("a"),Eh=i("TFCLIPVisionModel"),Mh=i(" forward method, overrides the "),bi=s("code"),zh=i("__call__"),jh=i(" special method."),Fh=m(),P(Fo.$$.fragment),qh=m(),P(qo.$$.fragment),ql=m(),kt=s("h2"),Do=s("a"),Pi=s("span"),P(Ds.$$.fragment),Dh=m(),$i=s("span"),Oh=i("FlaxCLIPModel"),Dl=m(),M=s("div"),P(Os.$$.fragment),Ah=m(),As=s("p"),Nh=i("This model inherits from "),Xr=s("a"),Vh=i("FlaxPreTrainedModel"),Sh=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Wh=m(),Ns=s("p"),Bh=i("This model is also a Flax Linen "),Vs=s("a"),Uh=i("flax.linen.Module"),Rh=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Hh=m(),Ii=s("p"),Kh=i("Finally, this model supports inherent JAX features such as:"),Gh=m(),je=s("ul"),Ti=s("li"),Ss=s("a"),Jh=i("Just-In-Time (JIT) compilation"),Xh=m(),Ci=s("li"),Ws=s("a"),Zh=i("Automatic Differentiation"),Qh=m(),yi=s("li"),Bs=s("a"),Yh=i("Vectorization"),eu=m(),xi=s("li"),Us=s("a"),tu=i("Parallelization"),ou=m(),$e=s("div"),P(Rs.$$.fragment),nu=m(),wt=s("p"),su=i("The "),Li=s("code"),ru=i("FlaxCLIPPreTrainedModel"),au=i(" forward method, overrides the "),ki=s("code"),iu=i("__call__"),lu=i(" special method."),du=m(),P(Oo.$$.fragment),cu=m(),P(Ao.$$.fragment),pu=m(),No=s("div"),P(Hs.$$.fragment),mu=m(),P(Vo.$$.fragment),fu=m(),So=s("div"),P(Ks.$$.fragment),hu=m(),P(Wo.$$.fragment),Ol=m(),Et=s("h2"),Bo=s("a"),wi=s("span"),P(Gs.$$.fragment),uu=m(),Ei=s("span"),gu=i("FlaxCLIPTextModel"),Al=m(),Mt=s("div"),P(Js.$$.fragment),_u=m(),Ie=s("div"),P(Xs.$$.fragment),vu=m(),zt=s("p"),bu=i("The "),Mi=s("code"),Pu=i("FlaxCLIPTextPreTrainedModel"),$u=i(" forward method, overrides the "),zi=s("code"),Iu=i("__call__"),Tu=i(" special method."),Cu=m(),P(Uo.$$.fragment),yu=m(),P(Ro.$$.fragment),Nl=m(),jt=s("h2"),Ho=s("a"),ji=s("span"),P(Zs.$$.fragment),xu=m(),Fi=s("span"),Lu=i("FlaxCLIPVisionModel"),Vl=m(),Ft=s("div"),P(Qs.$$.fragment),ku=m(),Te=s("div"),P(Ys.$$.fragment),wu=m(),qt=s("p"),Eu=i("The "),qi=s("code"),Mu=i("FlaxCLIPVisionPreTrainedModel"),zu=i(" forward method, overrides the "),Di=s("code"),ju=i("__call__"),Fu=i(" special method."),qu=m(),P(Ko.$$.fragment),Du=m(),P(Go.$$.fragment),this.h()},l(t){const g=mv('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),b=f(t),u=r(t,"H1",{class:!0});var er=a(u);p=r(er,"A",{id:!0,class:!0,href:!0});var Oi=a(p);_=r(Oi,"SPAN",{});var Ai=a(_);$(n.$$.fragment,Ai),Ai.forEach(o),Oi.forEach(o),c=f(er),L=r(er,"SPAN",{});var Ni=a(L);un=l(Ni,"CLIP"),Ni.forEach(o),er.forEach(o),Re=f(t),z=r(t,"H2",{class:!0});var tr=a(z);se=r(tr,"A",{id:!0,class:!0,href:!0});var Vi=a(se);ye=r(Vi,"SPAN",{});var Si=a(ye);$(xe.$$.fragment,Si),Si.forEach(o),Vi.forEach(o),gn=f(tr),Le=r(tr,"SPAN",{});var Wi=a(Le);_n=l(Wi,"Overview"),Wi.forEach(o),tr.forEach(o),Ot=f(t),Q=r(t,"P",{});var or=a(Q);qe=l(or,"The CLIP model was proposed in "),ke=r(or,"A",{href:!0,rel:!0});var Bi=a(ke);At=l(Bi,"Learning Transferable Visual Models From Natural Language Supervision"),Bi.forEach(o),K=l(or,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),or.forEach(o),Y=f(t),De=r(t,"P",{});var Ui=a(De);He=l(Ui,"The abstract from the paper is the following:"),Ui.forEach(o),Nt=f(t),Oe=r(t,"P",{});var Ri=a(Oe);we=r(Ri,"EM",{});var Hi=a(we);vn=l(Hi,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Hi.forEach(o),Ri.forEach(o),Vt=f(t),O=r(t,"H2",{class:!0});var nr=a(O);re=r(nr,"A",{id:!0,class:!0,href:!0});var Ki=a(re);Ee=r(Ki,"SPAN",{});var Gi=a(Ee);$(Me.$$.fragment,Gi),Gi.forEach(o),Ki.forEach(o),bn=f(nr),ze=r(nr,"SPAN",{});var Ji=a(ze);Pn=l(Ji,"Usage"),Ji.forEach(o),nr.forEach(o),St=f(t),ee=r(t,"P",{});var Xi=a(ee);$n=l(Xi,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Xi.forEach(o),Ae=f(t),ae=r(t,"P",{});var sr=a(ae);w=l(sr,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=r(sr,"A",{href:!0});var Zi=a(j);Wt=l(Zi,"CLIPFeatureExtractor"),Zi.forEach(o),ar=l(sr," can be used to resize (or rescale) and normalize images for the model."),sr.forEach(o),In=f(t),E=r(t,"P",{});var V=a(E);ir=l(V,"The "),Ke=r(V,"A",{href:!0});var Qi=a(Ke);lr=l(Qi,"CLIPTokenizer"),Qi.forEach(o),Ne=l(V," is used to encode the text. The "),ie=r(V,"A",{href:!0});var Yi=a(ie);dr=l(Yi,"CLIPProcessor"),Yi.forEach(o),cr=l(V,` wraps
`),le=r(V,"A",{href:!0});var el=a(le);pr=l(el,"CLIPFeatureExtractor"),el.forEach(o),mr=l(V," and "),Ve=r(V,"A",{href:!0});var tl=a(Ve);fr=l(tl,"CLIPTokenizer"),tl.forEach(o),Fd=l(V,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),hr=r(V,"A",{href:!0});var ol=a(hr);qd=l(ol,"CLIPProcessor"),ol.forEach(o),Dd=l(V," and "),ur=r(V,"A",{href:!0});var nl=a(ur);Od=l(nl,"CLIPModel"),nl.forEach(o),Ad=l(V,"."),V.forEach(o),il=f(t),$(Tn.$$.fragment,t),ll=f(t),Se=r(t,"P",{});var Dt=a(Se);Nd=l(Dt,"This model was contributed by "),Cn=r(Dt,"A",{href:!0,rel:!0});var sl=a(Cn);Vd=l(sl,"valhalla"),sl.forEach(o),Sd=l(Dt,". The original code can be found "),yn=r(Dt,"A",{href:!0,rel:!0});var rl=a(yn);Wd=l(rl,"here"),rl.forEach(o),Bd=l(Dt,"."),Dt.forEach(o),dl=f(t),Ge=r(t,"H2",{class:!0});var rr=a(Ge);Bt=r(rr,"A",{id:!0,class:!0,href:!0});var Nu=a(Bt);_a=r(Nu,"SPAN",{});var Vu=a(_a);$(xn.$$.fragment,Vu),Vu.forEach(o),Nu.forEach(o),Ud=f(rr),va=r(rr,"SPAN",{});var Su=a(va);Rd=l(Su,"CLIPConfig"),Su.forEach(o),rr.forEach(o),cl=f(t),te=r(t,"DIV",{class:!0});var Jo=a(te);$(Ln.$$.fragment,Jo),Hd=f(Jo),Ut=r(Jo,"P",{});var al=a(Ut);gr=r(al,"A",{href:!0});var Wu=a(gr);Kd=l(Wu,"CLIPConfig"),Wu.forEach(o),Gd=l(al," is the configuration class to store the configuration of a "),_r=r(al,"A",{href:!0});var Bu=a(_r);Jd=l(Bu,"CLIPModel"),Bu.forEach(o),Xd=l(al,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),al.forEach(o),Zd=f(Jo),Je=r(Jo,"P",{});var Zr=a(Je);Qd=l(Zr,"Configuration objects inherit from "),vr=r(Zr,"A",{href:!0});var Uu=a(vr);Yd=l(Uu,"PretrainedConfig"),Uu.forEach(o),ec=l(Zr,` and can be used to control the model outputs. Read the
documentation from `),br=r(Zr,"A",{href:!0});var Ru=a(br);tc=l(Ru,"PretrainedConfig"),Ru.forEach(o),oc=l(Zr," for more information."),Zr.forEach(o),nc=f(Jo),Rt=r(Jo,"DIV",{class:!0});var Wl=a(Rt);$(kn.$$.fragment,Wl),sc=f(Wl),wn=r(Wl,"P",{});var Bl=a(wn);rc=l(Bl,"Instantiate a "),Pr=r(Bl,"A",{href:!0});var Hu=a(Pr);ac=l(Hu,"CLIPConfig"),Hu.forEach(o),ic=l(Bl,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Bl.forEach(o),Wl.forEach(o),Jo.forEach(o),pl=f(t),Xe=r(t,"H2",{class:!0});var Ul=a(Xe);Ht=r(Ul,"A",{id:!0,class:!0,href:!0});var Ku=a(Ht);ba=r(Ku,"SPAN",{});var Gu=a(ba);$(En.$$.fragment,Gu),Gu.forEach(o),Ku.forEach(o),lc=f(Ul),Pa=r(Ul,"SPAN",{});var Ju=a(Pa);dc=l(Ju,"CLIPTextConfig"),Ju.forEach(o),Ul.forEach(o),ml=f(t),oe=r(t,"DIV",{class:!0});var Xo=a(oe);$(Mn.$$.fragment,Xo),cc=f(Xo),Ze=r(Xo,"P",{});var Qr=a(Ze);pc=l(Qr,"This is the configuration class to store the configuration of a "),$r=r(Qr,"A",{href:!0});var Xu=a($r);mc=l(Xu,"CLIPModel"),Xu.forEach(o),fc=l(Qr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),zn=r(Qr,"A",{href:!0,rel:!0});var Zu=a(zn);hc=l(Zu,"openai/clip-vit-base-patch32"),Zu.forEach(o),uc=l(Qr," architecture."),Qr.forEach(o),gc=f(Xo),Qe=r(Xo,"P",{});var Yr=a(Qe);_c=l(Yr,"Configuration objects inherit from "),Ir=r(Yr,"A",{href:!0});var Qu=a(Ir);vc=l(Qu,"PretrainedConfig"),Qu.forEach(o),bc=l(Yr,` and can be used to control the model outputs. Read the
documentation from `),Tr=r(Yr,"A",{href:!0});var Yu=a(Tr);Pc=l(Yu,"PretrainedConfig"),Yu.forEach(o),$c=l(Yr," for more information."),Yr.forEach(o),Ic=f(Xo),$(Kt.$$.fragment,Xo),Xo.forEach(o),fl=f(t),Ye=r(t,"H2",{class:!0});var Rl=a(Ye);Gt=r(Rl,"A",{id:!0,class:!0,href:!0});var eg=a(Gt);$a=r(eg,"SPAN",{});var tg=a($a);$(jn.$$.fragment,tg),tg.forEach(o),eg.forEach(o),Tc=f(Rl),Ia=r(Rl,"SPAN",{});var og=a(Ia);Cc=l(og,"CLIPVisionConfig"),og.forEach(o),Rl.forEach(o),hl=f(t),ne=r(t,"DIV",{class:!0});var Zo=a(ne);$(Fn.$$.fragment,Zo),yc=f(Zo),et=r(Zo,"P",{});var ea=a(et);xc=l(ea,"This is the configuration class to store the configuration of a "),Cr=r(ea,"A",{href:!0});var ng=a(Cr);Lc=l(ng,"CLIPModel"),ng.forEach(o),kc=l(ea,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),qn=r(ea,"A",{href:!0,rel:!0});var sg=a(qn);wc=l(sg,"openai/clip-vit-base-patch32"),sg.forEach(o),Ec=l(ea," architecture."),ea.forEach(o),Mc=f(Zo),tt=r(Zo,"P",{});var ta=a(tt);zc=l(ta,"Configuration objects inherit from "),yr=r(ta,"A",{href:!0});var rg=a(yr);jc=l(rg,"PretrainedConfig"),rg.forEach(o),Fc=l(ta,` and can be used to control the model outputs. Read the
documentation from `),xr=r(ta,"A",{href:!0});var ag=a(xr);qc=l(ag,"PretrainedConfig"),ag.forEach(o),Dc=l(ta," for more information."),ta.forEach(o),Oc=f(Zo),$(Jt.$$.fragment,Zo),Zo.forEach(o),ul=f(t),ot=r(t,"H2",{class:!0});var Hl=a(ot);Xt=r(Hl,"A",{id:!0,class:!0,href:!0});var ig=a(Xt);Ta=r(ig,"SPAN",{});var lg=a(Ta);$(Dn.$$.fragment,lg),lg.forEach(o),ig.forEach(o),Ac=f(Hl),Ca=r(Hl,"SPAN",{});var dg=a(Ca);Nc=l(dg,"CLIPTokenizer"),dg.forEach(o),Hl.forEach(o),gl=f(t),F=r(t,"DIV",{class:!0});var J=a(F);$(On.$$.fragment,J),Vc=f(J),ya=r(J,"P",{});var cg=a(ya);Sc=l(cg,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),cg.forEach(o),Wc=f(J),An=r(J,"P",{});var Kl=a(An);Bc=l(Kl,"This tokenizer inherits from "),Lr=r(Kl,"A",{href:!0});var pg=a(Lr);Uc=l(pg,"PreTrainedTokenizer"),pg.forEach(o),Rc=l(Kl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Kl.forEach(o),Hc=f(J),de=r(J,"DIV",{class:!0});var Qo=a(de);$(Nn.$$.fragment,Qo),Kc=f(Qo),xa=r(Qo,"P",{});var mg=a(xa);Gc=l(mg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),mg.forEach(o),Jc=f(Qo),La=r(Qo,"UL",{});var fg=a(La);kr=r(fg,"LI",{});var Ou=a(kr);Xc=l(Ou,"single sequence: "),ka=r(Ou,"CODE",{});var hg=a(ka);Zc=l(hg,"<|startoftext|> X <|endoftext|>"),hg.forEach(o),Ou.forEach(o),fg.forEach(o),Qc=f(Qo),wa=r(Qo,"P",{});var ug=a(wa);Yc=l(ug,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),ug.forEach(o),Qo.forEach(o),ep=f(J),Zt=r(J,"DIV",{class:!0});var Gl=a(Zt);$(Vn.$$.fragment,Gl),tp=f(Gl),Sn=r(Gl,"P",{});var Jl=a(Sn);op=l(Jl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ea=r(Jl,"CODE",{});var gg=a(Ea);np=l(gg,"prepare_for_model"),gg.forEach(o),sp=l(Jl," method."),Jl.forEach(o),Gl.forEach(o),rp=f(J),Qt=r(J,"DIV",{class:!0});var Xl=a(Qt);$(Wn.$$.fragment,Xl),ap=f(Xl),Ma=r(Xl,"P",{});var _g=a(Ma);ip=l(_g,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),_g.forEach(o),Xl.forEach(o),lp=f(J),wr=r(J,"DIV",{class:!0});var vg=a(wr);$(Bn.$$.fragment,vg),vg.forEach(o),J.forEach(o),_l=f(t),nt=r(t,"H2",{class:!0});var Zl=a(nt);Yt=r(Zl,"A",{id:!0,class:!0,href:!0});var bg=a(Yt);za=r(bg,"SPAN",{});var Pg=a(za);$(Un.$$.fragment,Pg),Pg.forEach(o),bg.forEach(o),dp=f(Zl),ja=r(Zl,"SPAN",{});var $g=a(ja);cp=l($g,"CLIPTokenizerFast"),$g.forEach(o),Zl.forEach(o),vl=f(t),U=r(t,"DIV",{class:!0});var We=a(U);$(Rn.$$.fragment,We),pp=f(We),Hn=r(We,"P",{});var Ql=a(Hn);mp=l(Ql,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Fa=r(Ql,"EM",{});var Ig=a(Fa);fp=l(Ig,"tokenizers"),Ig.forEach(o),hp=l(Ql,` library). Based on byte-level
Byte-Pair-Encoding.`),Ql.forEach(o),up=f(We),Kn=r(We,"P",{});var Yl=a(Kn);gp=l(Yl,"This tokenizer inherits from "),Er=r(Yl,"A",{href:!0});var Tg=a(Er);_p=l(Tg,"PreTrainedTokenizerFast"),Tg.forEach(o),vp=l(Yl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Yl.forEach(o),bp=f(We),ce=r(We,"DIV",{class:!0});var Yo=a(ce);$(Gn.$$.fragment,Yo),Pp=f(Yo),qa=r(Yo,"P",{});var Cg=a(qa);$p=l(Cg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Cg.forEach(o),Ip=f(Yo),Da=r(Yo,"UL",{});var yg=a(Da);Mr=r(yg,"LI",{});var Au=a(Mr);Tp=l(Au,"single sequence: "),Oa=r(Au,"CODE",{});var xg=a(Oa);Cp=l(xg,"<|startoftext|> X <|endoftext|>"),xg.forEach(o),Au.forEach(o),yg.forEach(o),yp=f(Yo),Aa=r(Yo,"P",{});var Lg=a(Aa);xp=l(Lg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),Lg.forEach(o),Yo.forEach(o),Lp=f(We),eo=r(We,"DIV",{class:!0});var ed=a(eo);$(Jn.$$.fragment,ed),kp=f(ed),Na=r(ed,"P",{});var kg=a(Na);wp=l(kg,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),kg.forEach(o),ed.forEach(o),We.forEach(o),bl=f(t),st=r(t,"H2",{class:!0});var td=a(st);to=r(td,"A",{id:!0,class:!0,href:!0});var wg=a(to);Va=r(wg,"SPAN",{});var Eg=a(Va);$(Xn.$$.fragment,Eg),Eg.forEach(o),wg.forEach(o),Ep=f(td),Sa=r(td,"SPAN",{});var Mg=a(Sa);Mp=l(Mg,"CLIPFeatureExtractor"),Mg.forEach(o),td.forEach(o),Pl=f(t),N=r(t,"DIV",{class:!0});var Ce=a(N);$(Zn.$$.fragment,Ce),zp=f(Ce),Wa=r(Ce,"P",{});var zg=a(Wa);jp=l(zg,"Constructs a CLIP feature extractor."),zg.forEach(o),Fp=f(Ce),Qn=r(Ce,"P",{});var od=a(Qn);qp=l(od,"This feature extractor inherits from "),zr=r(od,"A",{href:!0});var jg=a(zr);Dp=l(jg,"FeatureExtractionMixin"),jg.forEach(o),Op=l(od,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),od.forEach(o),Ap=f(Ce),oo=r(Ce,"DIV",{class:!0});var nd=a(oo);$(Yn.$$.fragment,nd),Np=f(nd),es=r(nd,"P",{});var sd=a(es);Vp=l(sd,"Crops "),Ba=r(sd,"CODE",{});var Fg=a(Ba);Sp=l(Fg,"image"),Fg.forEach(o),Wp=l(sd,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),sd.forEach(o),nd.forEach(o),Bp=f(Ce),no=r(Ce,"DIV",{class:!0});var rd=a(no);$(ts.$$.fragment,rd),Up=f(rd),rt=r(rd,"P",{});var oa=a(rt);Rp=l(oa,"Converts "),Ua=r(oa,"CODE",{});var qg=a(Ua);Hp=l(qg,"image"),qg.forEach(o),Kp=l(oa," to RGB format. Note that this will trigger a conversion of "),Ra=r(oa,"CODE",{});var Dg=a(Ra);Gp=l(Dg,"image"),Dg.forEach(o),Jp=l(oa," to a PIL Image."),oa.forEach(o),rd.forEach(o),Xp=f(Ce),so=r(Ce,"DIV",{class:!0});var ad=a(so);$(os.$$.fragment,ad),Zp=f(ad),at=r(ad,"P",{});var na=a(at);Qp=l(na,"Resizes "),Ha=r(na,"CODE",{});var Og=a(Ha);Yp=l(Og,"image"),Og.forEach(o),em=l(na,". Note that this will trigger a conversion of "),Ka=r(na,"CODE",{});var Ag=a(Ka);tm=l(Ag,"image"),Ag.forEach(o),om=l(na," to a PIL Image."),na.forEach(o),ad.forEach(o),Ce.forEach(o),$l=f(t),it=r(t,"H2",{class:!0});var id=a(it);ro=r(id,"A",{id:!0,class:!0,href:!0});var Ng=a(ro);Ga=r(Ng,"SPAN",{});var Vg=a(Ga);$(ns.$$.fragment,Vg),Vg.forEach(o),Ng.forEach(o),nm=f(id),Ja=r(id,"SPAN",{});var Sg=a(Ja);sm=l(Sg,"CLIPProcessor"),Sg.forEach(o),id.forEach(o),Il=f(t),R=r(t,"DIV",{class:!0});var Be=a(R);$(ss.$$.fragment,Be),rm=f(Be),Xa=r(Be,"P",{});var Wg=a(Xa);am=l(Wg,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Wg.forEach(o),im=f(Be),G=r(Be,"P",{});var Fe=a(G);jr=r(Fe,"A",{href:!0});var Bg=a(jr);lm=l(Bg,"CLIPProcessor"),Bg.forEach(o),dm=l(Fe," offers all the functionalities of "),Fr=r(Fe,"A",{href:!0});var Ug=a(Fr);cm=l(Ug,"CLIPFeatureExtractor"),Ug.forEach(o),pm=l(Fe," and "),qr=r(Fe,"A",{href:!0});var Rg=a(qr);mm=l(Rg,"CLIPTokenizerFast"),Rg.forEach(o),fm=l(Fe,`. See the
`),Za=r(Fe,"CODE",{});var Hg=a(Za);hm=l(Hg,"__call__()"),Hg.forEach(o),um=l(Fe," and "),Dr=r(Fe,"A",{href:!0});var Kg=a(Dr);gm=l(Kg,"decode()"),Kg.forEach(o),_m=l(Fe," for more information."),Fe.forEach(o),vm=f(Be),ao=r(Be,"DIV",{class:!0});var ld=a(ao);$(rs.$$.fragment,ld),bm=f(ld),as=r(ld,"P",{});var dd=a(as);Pm=l(dd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Or=r(dd,"A",{href:!0});var Gg=a(Or);$m=l(Gg,"batch_decode()"),Gg.forEach(o),Im=l(dd,`. Please
refer to the docstring of this method for more information.`),dd.forEach(o),ld.forEach(o),Tm=f(Be),io=r(Be,"DIV",{class:!0});var cd=a(io);$(is.$$.fragment,cd),Cm=f(cd),ls=r(cd,"P",{});var pd=a(ls);ym=l(pd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Ar=r(pd,"A",{href:!0});var Jg=a(Ar);xm=l(Jg,"decode()"),Jg.forEach(o),Lm=l(pd,`. Please refer to
the docstring of this method for more information.`),pd.forEach(o),cd.forEach(o),Be.forEach(o),Tl=f(t),lt=r(t,"H2",{class:!0});var md=a(lt);lo=r(md,"A",{id:!0,class:!0,href:!0});var Xg=a(lo);Qa=r(Xg,"SPAN",{});var Zg=a(Qa);$(ds.$$.fragment,Zg),Zg.forEach(o),Xg.forEach(o),km=f(md),Ya=r(md,"SPAN",{});var Qg=a(Ya);wm=l(Qg,"CLIPModel"),Qg.forEach(o),md.forEach(o),Cl=f(t),H=r(t,"DIV",{class:!0});var Ue=a(H);$(cs.$$.fragment,Ue),Em=f(Ue),ps=r(Ue,"P",{});var fd=a(ps);Mm=l(fd,"This model is a PyTorch "),ms=r(fd,"A",{href:!0,rel:!0});var Yg=a(ms);zm=l(Yg,"torch.nn.Module"),Yg.forEach(o),jm=l(fd,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fd.forEach(o),Fm=f(Ue),pe=r(Ue,"DIV",{class:!0});var en=a(pe);$(fs.$$.fragment,en),qm=f(en),dt=r(en,"P",{});var sa=a(dt);Dm=l(sa,"The "),Nr=r(sa,"A",{href:!0});var e_=a(Nr);Om=l(e_,"CLIPModel"),e_.forEach(o),Am=l(sa," forward method, overrides the "),ei=r(sa,"CODE",{});var t_=a(ei);Nm=l(t_,"__call__"),t_.forEach(o),Vm=l(sa," special method."),sa.forEach(o),Sm=f(en),$(co.$$.fragment,en),Wm=f(en),$(po.$$.fragment,en),en.forEach(o),Bm=f(Ue),me=r(Ue,"DIV",{class:!0});var tn=a(me);$(hs.$$.fragment,tn),Um=f(tn),ct=r(tn,"P",{});var ra=a(ct);Rm=l(ra,"The "),Vr=r(ra,"A",{href:!0});var o_=a(Vr);Hm=l(o_,"CLIPModel"),o_.forEach(o),Km=l(ra," forward method, overrides the "),ti=r(ra,"CODE",{});var n_=a(ti);Gm=l(n_,"__call__"),n_.forEach(o),Jm=l(ra," special method."),ra.forEach(o),Xm=f(tn),$(mo.$$.fragment,tn),Zm=f(tn),$(fo.$$.fragment,tn),tn.forEach(o),Qm=f(Ue),fe=r(Ue,"DIV",{class:!0});var on=a(fe);$(us.$$.fragment,on),Ym=f(on),pt=r(on,"P",{});var aa=a(pt);ef=l(aa,"The "),Sr=r(aa,"A",{href:!0});var s_=a(Sr);tf=l(s_,"CLIPModel"),s_.forEach(o),of=l(aa," forward method, overrides the "),oi=r(aa,"CODE",{});var r_=a(oi);nf=l(r_,"__call__"),r_.forEach(o),sf=l(aa," special method."),aa.forEach(o),rf=f(on),$(ho.$$.fragment,on),af=f(on),$(uo.$$.fragment,on),on.forEach(o),Ue.forEach(o),yl=f(t),mt=r(t,"H2",{class:!0});var hd=a(mt);go=r(hd,"A",{id:!0,class:!0,href:!0});var a_=a(go);ni=r(a_,"SPAN",{});var i_=a(ni);$(gs.$$.fragment,i_),i_.forEach(o),a_.forEach(o),lf=f(hd),si=r(hd,"SPAN",{});var l_=a(si);df=l(l_,"CLIPTextModel"),l_.forEach(o),hd.forEach(o),xl=f(t),ft=r(t,"DIV",{class:!0});var ud=a(ft);$(_s.$$.fragment,ud),cf=f(ud),he=r(ud,"DIV",{class:!0});var nn=a(he);$(vs.$$.fragment,nn),pf=f(nn),ht=r(nn,"P",{});var ia=a(ht);mf=l(ia,"The "),Wr=r(ia,"A",{href:!0});var d_=a(Wr);ff=l(d_,"CLIPTextModel"),d_.forEach(o),hf=l(ia," forward method, overrides the "),ri=r(ia,"CODE",{});var c_=a(ri);uf=l(c_,"__call__"),c_.forEach(o),gf=l(ia," special method."),ia.forEach(o),_f=f(nn),$(_o.$$.fragment,nn),vf=f(nn),$(vo.$$.fragment,nn),nn.forEach(o),ud.forEach(o),Ll=f(t),ut=r(t,"H2",{class:!0});var gd=a(ut);bo=r(gd,"A",{id:!0,class:!0,href:!0});var p_=a(bo);ai=r(p_,"SPAN",{});var m_=a(ai);$(bs.$$.fragment,m_),m_.forEach(o),p_.forEach(o),bf=f(gd),ii=r(gd,"SPAN",{});var f_=a(ii);Pf=l(f_,"CLIPVisionModel"),f_.forEach(o),gd.forEach(o),kl=f(t),gt=r(t,"DIV",{class:!0});var _d=a(gt);$(Ps.$$.fragment,_d),$f=f(_d),ue=r(_d,"DIV",{class:!0});var sn=a(ue);$($s.$$.fragment,sn),If=f(sn),_t=r(sn,"P",{});var la=a(_t);Tf=l(la,"The "),Br=r(la,"A",{href:!0});var h_=a(Br);Cf=l(h_,"CLIPVisionModel"),h_.forEach(o),yf=l(la," forward method, overrides the "),li=r(la,"CODE",{});var u_=a(li);xf=l(u_,"__call__"),u_.forEach(o),Lf=l(la," special method."),la.forEach(o),kf=f(sn),$(Po.$$.fragment,sn),wf=f(sn),$($o.$$.fragment,sn),sn.forEach(o),_d.forEach(o),wl=f(t),vt=r(t,"H2",{class:!0});var vd=a(vt);Io=r(vd,"A",{id:!0,class:!0,href:!0});var g_=a(Io);di=r(g_,"SPAN",{});var __=a(di);$(Is.$$.fragment,__),__.forEach(o),g_.forEach(o),Ef=f(vd),ci=r(vd,"SPAN",{});var v_=a(ci);Mf=l(v_,"TFCLIPModel"),v_.forEach(o),vd.forEach(o),El=f(t),q=r(t,"DIV",{class:!0});var X=a(q);$(Ts.$$.fragment,X),zf=f(X),Cs=r(X,"P",{});var bd=a(Cs);jf=l(bd,"This model inherits from "),Ur=r(bd,"A",{href:!0});var b_=a(Ur);Ff=l(b_,"TFPreTrainedModel"),b_.forEach(o),qf=l(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bd.forEach(o),Df=f(X),ys=r(X,"P",{});var Pd=a(ys);Of=l(Pd,"This model is also a "),xs=r(Pd,"A",{href:!0,rel:!0});var P_=a(xs);Af=l(P_,"tf.keras.Model"),P_.forEach(o),Nf=l(Pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pd.forEach(o),Vf=f(X),$(To.$$.fragment,X),Sf=f(X),ge=r(X,"DIV",{class:!0});var rn=a(ge);$(Ls.$$.fragment,rn),Wf=f(rn),bt=r(rn,"P",{});var da=a(bt);Bf=l(da,"The "),Rr=r(da,"A",{href:!0});var $_=a(Rr);Uf=l($_,"TFCLIPModel"),$_.forEach(o),Rf=l(da," forward method, overrides the "),pi=r(da,"CODE",{});var I_=a(pi);Hf=l(I_,"__call__"),I_.forEach(o),Kf=l(da," special method."),da.forEach(o),Gf=f(rn),$(Co.$$.fragment,rn),Jf=f(rn),$(yo.$$.fragment,rn),rn.forEach(o),Xf=f(X),_e=r(X,"DIV",{class:!0});var an=a(_e);$(ks.$$.fragment,an),Zf=f(an),Pt=r(an,"P",{});var ca=a(Pt);Qf=l(ca,"The "),Hr=r(ca,"A",{href:!0});var T_=a(Hr);Yf=l(T_,"TFCLIPModel"),T_.forEach(o),eh=l(ca," forward method, overrides the "),mi=r(ca,"CODE",{});var C_=a(mi);th=l(C_,"__call__"),C_.forEach(o),oh=l(ca," special method."),ca.forEach(o),nh=f(an),$(xo.$$.fragment,an),sh=f(an),$(Lo.$$.fragment,an),an.forEach(o),rh=f(X),ve=r(X,"DIV",{class:!0});var ln=a(ve);$(ws.$$.fragment,ln),ah=f(ln),$t=r(ln,"P",{});var pa=a($t);ih=l(pa,"The "),Kr=r(pa,"A",{href:!0});var y_=a(Kr);lh=l(y_,"TFCLIPModel"),y_.forEach(o),dh=l(pa," forward method, overrides the "),fi=r(pa,"CODE",{});var x_=a(fi);ch=l(x_,"__call__"),x_.forEach(o),ph=l(pa," special method."),pa.forEach(o),mh=f(ln),$(ko.$$.fragment,ln),fh=f(ln),$(wo.$$.fragment,ln),ln.forEach(o),X.forEach(o),Ml=f(t),It=r(t,"H2",{class:!0});var $d=a(It);Eo=r($d,"A",{id:!0,class:!0,href:!0});var L_=a(Eo);hi=r(L_,"SPAN",{});var k_=a(hi);$(Es.$$.fragment,k_),k_.forEach(o),L_.forEach(o),hh=f($d),ui=r($d,"SPAN",{});var w_=a(ui);uh=l(w_,"TFCLIPTextModel"),w_.forEach(o),$d.forEach(o),zl=f(t),Tt=r(t,"DIV",{class:!0});var Id=a(Tt);$(Ms.$$.fragment,Id),gh=f(Id),be=r(Id,"DIV",{class:!0});var dn=a(be);$(zs.$$.fragment,dn),_h=f(dn),Ct=r(dn,"P",{});var ma=a(Ct);vh=l(ma,"The "),Gr=r(ma,"A",{href:!0});var E_=a(Gr);bh=l(E_,"TFCLIPTextModel"),E_.forEach(o),Ph=l(ma," forward method, overrides the "),gi=r(ma,"CODE",{});var M_=a(gi);$h=l(M_,"__call__"),M_.forEach(o),Ih=l(ma," special method."),ma.forEach(o),Th=f(dn),$(Mo.$$.fragment,dn),Ch=f(dn),$(zo.$$.fragment,dn),dn.forEach(o),Id.forEach(o),jl=f(t),yt=r(t,"H2",{class:!0});var Td=a(yt);jo=r(Td,"A",{id:!0,class:!0,href:!0});var z_=a(jo);_i=r(z_,"SPAN",{});var j_=a(_i);$(js.$$.fragment,j_),j_.forEach(o),z_.forEach(o),yh=f(Td),vi=r(Td,"SPAN",{});var F_=a(vi);xh=l(F_,"TFCLIPVisionModel"),F_.forEach(o),Td.forEach(o),Fl=f(t),xt=r(t,"DIV",{class:!0});var Cd=a(xt);$(Fs.$$.fragment,Cd),Lh=f(Cd),Pe=r(Cd,"DIV",{class:!0});var cn=a(Pe);$(qs.$$.fragment,cn),kh=f(cn),Lt=r(cn,"P",{});var fa=a(Lt);wh=l(fa,"The "),Jr=r(fa,"A",{href:!0});var q_=a(Jr);Eh=l(q_,"TFCLIPVisionModel"),q_.forEach(o),Mh=l(fa," forward method, overrides the "),bi=r(fa,"CODE",{});var D_=a(bi);zh=l(D_,"__call__"),D_.forEach(o),jh=l(fa," special method."),fa.forEach(o),Fh=f(cn),$(Fo.$$.fragment,cn),qh=f(cn),$(qo.$$.fragment,cn),cn.forEach(o),Cd.forEach(o),ql=f(t),kt=r(t,"H2",{class:!0});var yd=a(kt);Do=r(yd,"A",{id:!0,class:!0,href:!0});var O_=a(Do);Pi=r(O_,"SPAN",{});var A_=a(Pi);$(Ds.$$.fragment,A_),A_.forEach(o),O_.forEach(o),Dh=f(yd),$i=r(yd,"SPAN",{});var N_=a($i);Oh=l(N_,"FlaxCLIPModel"),N_.forEach(o),yd.forEach(o),Dl=f(t),M=r(t,"DIV",{class:!0});var B=a(M);$(Os.$$.fragment,B),Ah=f(B),As=r(B,"P",{});var xd=a(As);Nh=l(xd,"This model inherits from "),Xr=r(xd,"A",{href:!0});var V_=a(Xr);Vh=l(V_,"FlaxPreTrainedModel"),V_.forEach(o),Sh=l(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xd.forEach(o),Wh=f(B),Ns=r(B,"P",{});var Ld=a(Ns);Bh=l(Ld,"This model is also a Flax Linen "),Vs=r(Ld,"A",{href:!0,rel:!0});var S_=a(Vs);Uh=l(S_,"flax.linen.Module"),S_.forEach(o),Rh=l(Ld,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ld.forEach(o),Hh=f(B),Ii=r(B,"P",{});var W_=a(Ii);Kh=l(W_,"Finally, this model supports inherent JAX features such as:"),W_.forEach(o),Gh=f(B),je=r(B,"UL",{});var pn=a(je);Ti=r(pn,"LI",{});var B_=a(Ti);Ss=r(B_,"A",{href:!0,rel:!0});var U_=a(Ss);Jh=l(U_,"Just-In-Time (JIT) compilation"),U_.forEach(o),B_.forEach(o),Xh=f(pn),Ci=r(pn,"LI",{});var R_=a(Ci);Ws=r(R_,"A",{href:!0,rel:!0});var H_=a(Ws);Zh=l(H_,"Automatic Differentiation"),H_.forEach(o),R_.forEach(o),Qh=f(pn),yi=r(pn,"LI",{});var K_=a(yi);Bs=r(K_,"A",{href:!0,rel:!0});var G_=a(Bs);Yh=l(G_,"Vectorization"),G_.forEach(o),K_.forEach(o),eu=f(pn),xi=r(pn,"LI",{});var J_=a(xi);Us=r(J_,"A",{href:!0,rel:!0});var X_=a(Us);tu=l(X_,"Parallelization"),X_.forEach(o),J_.forEach(o),pn.forEach(o),ou=f(B),$e=r(B,"DIV",{class:!0});var mn=a($e);$(Rs.$$.fragment,mn),nu=f(mn),wt=r(mn,"P",{});var ha=a(wt);su=l(ha,"The "),Li=r(ha,"CODE",{});var Z_=a(Li);ru=l(Z_,"FlaxCLIPPreTrainedModel"),Z_.forEach(o),au=l(ha," forward method, overrides the "),ki=r(ha,"CODE",{});var Q_=a(ki);iu=l(Q_,"__call__"),Q_.forEach(o),lu=l(ha," special method."),ha.forEach(o),du=f(mn),$(Oo.$$.fragment,mn),cu=f(mn),$(Ao.$$.fragment,mn),mn.forEach(o),pu=f(B),No=r(B,"DIV",{class:!0});var kd=a(No);$(Hs.$$.fragment,kd),mu=f(kd),$(Vo.$$.fragment,kd),kd.forEach(o),fu=f(B),So=r(B,"DIV",{class:!0});var wd=a(So);$(Ks.$$.fragment,wd),hu=f(wd),$(Wo.$$.fragment,wd),wd.forEach(o),B.forEach(o),Ol=f(t),Et=r(t,"H2",{class:!0});var Ed=a(Et);Bo=r(Ed,"A",{id:!0,class:!0,href:!0});var Y_=a(Bo);wi=r(Y_,"SPAN",{});var ev=a(wi);$(Gs.$$.fragment,ev),ev.forEach(o),Y_.forEach(o),uu=f(Ed),Ei=r(Ed,"SPAN",{});var tv=a(Ei);gu=l(tv,"FlaxCLIPTextModel"),tv.forEach(o),Ed.forEach(o),Al=f(t),Mt=r(t,"DIV",{class:!0});var Md=a(Mt);$(Js.$$.fragment,Md),_u=f(Md),Ie=r(Md,"DIV",{class:!0});var fn=a(Ie);$(Xs.$$.fragment,fn),vu=f(fn),zt=r(fn,"P",{});var ua=a(zt);bu=l(ua,"The "),Mi=r(ua,"CODE",{});var ov=a(Mi);Pu=l(ov,"FlaxCLIPTextPreTrainedModel"),ov.forEach(o),$u=l(ua," forward method, overrides the "),zi=r(ua,"CODE",{});var nv=a(zi);Iu=l(nv,"__call__"),nv.forEach(o),Tu=l(ua," special method."),ua.forEach(o),Cu=f(fn),$(Uo.$$.fragment,fn),yu=f(fn),$(Ro.$$.fragment,fn),fn.forEach(o),Md.forEach(o),Nl=f(t),jt=r(t,"H2",{class:!0});var zd=a(jt);Ho=r(zd,"A",{id:!0,class:!0,href:!0});var sv=a(Ho);ji=r(sv,"SPAN",{});var rv=a(ji);$(Zs.$$.fragment,rv),rv.forEach(o),sv.forEach(o),xu=f(zd),Fi=r(zd,"SPAN",{});var av=a(Fi);Lu=l(av,"FlaxCLIPVisionModel"),av.forEach(o),zd.forEach(o),Vl=f(t),Ft=r(t,"DIV",{class:!0});var jd=a(Ft);$(Qs.$$.fragment,jd),ku=f(jd),Te=r(jd,"DIV",{class:!0});var hn=a(Te);$(Ys.$$.fragment,hn),wu=f(hn),qt=r(hn,"P",{});var ga=a(qt);Eu=l(ga,"The "),qi=r(ga,"CODE",{});var iv=a(qi);Mu=l(iv,"FlaxCLIPVisionPreTrainedModel"),iv.forEach(o),zu=l(ga," forward method, overrides the "),Di=r(ga,"CODE",{});var lv=a(Di);ju=l(lv,"__call__"),lv.forEach(o),Fu=l(ga," special method."),ga.forEach(o),qu=f(hn),$(Ko.$$.fragment,hn),Du=f(hn),$(Go.$$.fragment,hn),hn.forEach(o),jd.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Hv)),h(p,"id","clip"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#clip"),h(u,"class","relative group"),h(se,"id","overview"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#overview"),h(z,"class","relative group"),h(ke,"href","https://arxiv.org/abs/2103.00020"),h(ke,"rel","nofollow"),h(re,"id","usage"),h(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(re,"href","#usage"),h(O,"class","relative group"),h(j,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(Ke,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(ie,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(le,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(Ve,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(hr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(ur,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Cn,"href","https://huggingface.co/valhalla"),h(Cn,"rel","nofollow"),h(yn,"href","https://github.com/openai/CLIP"),h(yn,"rel","nofollow"),h(Bt,"id","transformers.CLIPConfig"),h(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bt,"href","#transformers.CLIPConfig"),h(Ge,"class","relative group"),h(gr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(_r,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(vr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(br,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Pr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ht,"id","transformers.CLIPTextConfig"),h(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ht,"href","#transformers.CLIPTextConfig"),h(Xe,"class","relative group"),h($r,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(zn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(zn,"rel","nofollow"),h(Ir,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Tr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Gt,"id","transformers.CLIPVisionConfig"),h(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gt,"href","#transformers.CLIPVisionConfig"),h(Ye,"class","relative group"),h(Cr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(qn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(qn,"rel","nofollow"),h(yr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(xr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xt,"id","transformers.CLIPTokenizer"),h(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xt,"href","#transformers.CLIPTokenizer"),h(ot,"class","relative group"),h(Lr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yt,"id","transformers.CLIPTokenizerFast"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#transformers.CLIPTokenizerFast"),h(nt,"class","relative group"),h(Er,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"id","transformers.CLIPFeatureExtractor"),h(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(to,"href","#transformers.CLIPFeatureExtractor"),h(st,"class","relative group"),h(zr,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),h(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ro,"id","transformers.CLIPProcessor"),h(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ro,"href","#transformers.CLIPProcessor"),h(it,"class","relative group"),h(jr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(Fr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(qr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),h(Dr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),h(Or,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),h(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ar,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),h(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"id","transformers.CLIPModel"),h(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(lo,"href","#transformers.CLIPModel"),h(lt,"class","relative group"),h(ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ms,"rel","nofollow"),h(Nr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Sr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(go,"id","transformers.CLIPTextModel"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.CLIPTextModel"),h(mt,"class","relative group"),h(Wr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(bo,"id","transformers.CLIPVisionModel"),h(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bo,"href","#transformers.CLIPVisionModel"),h(ut,"class","relative group"),h(Br,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Io,"id","transformers.TFCLIPModel"),h(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Io,"href","#transformers.TFCLIPModel"),h(vt,"class","relative group"),h(Ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(xs,"rel","nofollow"),h(Rr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Hr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Eo,"id","transformers.TFCLIPTextModel"),h(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Eo,"href","#transformers.TFCLIPTextModel"),h(It,"class","relative group"),h(Gr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jo,"id","transformers.TFCLIPVisionModel"),h(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jo,"href","#transformers.TFCLIPVisionModel"),h(yt,"class","relative group"),h(Jr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Do,"id","transformers.FlaxCLIPModel"),h(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Do,"href","#transformers.FlaxCLIPModel"),h(kt,"class","relative group"),h(Xr,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Vs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Vs,"rel","nofollow"),h(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Ss,"rel","nofollow"),h(Ws,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Ws,"rel","nofollow"),h(Bs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Bs,"rel","nofollow"),h(Us,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Us,"rel","nofollow"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bo,"id","transformers.FlaxCLIPTextModel"),h(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bo,"href","#transformers.FlaxCLIPTextModel"),h(Et,"class","relative group"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ho,"id","transformers.FlaxCLIPVisionModel"),h(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ho,"href","#transformers.FlaxCLIPVisionModel"),h(jt,"class","relative group"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,b,g),v(t,u,g),e(u,p),e(p,_),I(n,_,null),e(u,c),e(u,L),e(L,un),v(t,Re,g),v(t,z,g),e(z,se),e(se,ye),I(xe,ye,null),e(z,gn),e(z,Le),e(Le,_n),v(t,Ot,g),v(t,Q,g),e(Q,qe),e(Q,ke),e(ke,At),e(Q,K),v(t,Y,g),v(t,De,g),e(De,He),v(t,Nt,g),v(t,Oe,g),e(Oe,we),e(we,vn),v(t,Vt,g),v(t,O,g),e(O,re),e(re,Ee),I(Me,Ee,null),e(O,bn),e(O,ze),e(ze,Pn),v(t,St,g),v(t,ee,g),e(ee,$n),v(t,Ae,g),v(t,ae,g),e(ae,w),e(ae,j),e(j,Wt),e(ae,ar),v(t,In,g),v(t,E,g),e(E,ir),e(E,Ke),e(Ke,lr),e(E,Ne),e(E,ie),e(ie,dr),e(E,cr),e(E,le),e(le,pr),e(E,mr),e(E,Ve),e(Ve,fr),e(E,Fd),e(E,hr),e(hr,qd),e(E,Dd),e(E,ur),e(ur,Od),e(E,Ad),v(t,il,g),I(Tn,t,g),v(t,ll,g),v(t,Se,g),e(Se,Nd),e(Se,Cn),e(Cn,Vd),e(Se,Sd),e(Se,yn),e(yn,Wd),e(Se,Bd),v(t,dl,g),v(t,Ge,g),e(Ge,Bt),e(Bt,_a),I(xn,_a,null),e(Ge,Ud),e(Ge,va),e(va,Rd),v(t,cl,g),v(t,te,g),I(Ln,te,null),e(te,Hd),e(te,Ut),e(Ut,gr),e(gr,Kd),e(Ut,Gd),e(Ut,_r),e(_r,Jd),e(Ut,Xd),e(te,Zd),e(te,Je),e(Je,Qd),e(Je,vr),e(vr,Yd),e(Je,ec),e(Je,br),e(br,tc),e(Je,oc),e(te,nc),e(te,Rt),I(kn,Rt,null),e(Rt,sc),e(Rt,wn),e(wn,rc),e(wn,Pr),e(Pr,ac),e(wn,ic),v(t,pl,g),v(t,Xe,g),e(Xe,Ht),e(Ht,ba),I(En,ba,null),e(Xe,lc),e(Xe,Pa),e(Pa,dc),v(t,ml,g),v(t,oe,g),I(Mn,oe,null),e(oe,cc),e(oe,Ze),e(Ze,pc),e(Ze,$r),e($r,mc),e(Ze,fc),e(Ze,zn),e(zn,hc),e(Ze,uc),e(oe,gc),e(oe,Qe),e(Qe,_c),e(Qe,Ir),e(Ir,vc),e(Qe,bc),e(Qe,Tr),e(Tr,Pc),e(Qe,$c),e(oe,Ic),I(Kt,oe,null),v(t,fl,g),v(t,Ye,g),e(Ye,Gt),e(Gt,$a),I(jn,$a,null),e(Ye,Tc),e(Ye,Ia),e(Ia,Cc),v(t,hl,g),v(t,ne,g),I(Fn,ne,null),e(ne,yc),e(ne,et),e(et,xc),e(et,Cr),e(Cr,Lc),e(et,kc),e(et,qn),e(qn,wc),e(et,Ec),e(ne,Mc),e(ne,tt),e(tt,zc),e(tt,yr),e(yr,jc),e(tt,Fc),e(tt,xr),e(xr,qc),e(tt,Dc),e(ne,Oc),I(Jt,ne,null),v(t,ul,g),v(t,ot,g),e(ot,Xt),e(Xt,Ta),I(Dn,Ta,null),e(ot,Ac),e(ot,Ca),e(Ca,Nc),v(t,gl,g),v(t,F,g),I(On,F,null),e(F,Vc),e(F,ya),e(ya,Sc),e(F,Wc),e(F,An),e(An,Bc),e(An,Lr),e(Lr,Uc),e(An,Rc),e(F,Hc),e(F,de),I(Nn,de,null),e(de,Kc),e(de,xa),e(xa,Gc),e(de,Jc),e(de,La),e(La,kr),e(kr,Xc),e(kr,ka),e(ka,Zc),e(de,Qc),e(de,wa),e(wa,Yc),e(F,ep),e(F,Zt),I(Vn,Zt,null),e(Zt,tp),e(Zt,Sn),e(Sn,op),e(Sn,Ea),e(Ea,np),e(Sn,sp),e(F,rp),e(F,Qt),I(Wn,Qt,null),e(Qt,ap),e(Qt,Ma),e(Ma,ip),e(F,lp),e(F,wr),I(Bn,wr,null),v(t,_l,g),v(t,nt,g),e(nt,Yt),e(Yt,za),I(Un,za,null),e(nt,dp),e(nt,ja),e(ja,cp),v(t,vl,g),v(t,U,g),I(Rn,U,null),e(U,pp),e(U,Hn),e(Hn,mp),e(Hn,Fa),e(Fa,fp),e(Hn,hp),e(U,up),e(U,Kn),e(Kn,gp),e(Kn,Er),e(Er,_p),e(Kn,vp),e(U,bp),e(U,ce),I(Gn,ce,null),e(ce,Pp),e(ce,qa),e(qa,$p),e(ce,Ip),e(ce,Da),e(Da,Mr),e(Mr,Tp),e(Mr,Oa),e(Oa,Cp),e(ce,yp),e(ce,Aa),e(Aa,xp),e(U,Lp),e(U,eo),I(Jn,eo,null),e(eo,kp),e(eo,Na),e(Na,wp),v(t,bl,g),v(t,st,g),e(st,to),e(to,Va),I(Xn,Va,null),e(st,Ep),e(st,Sa),e(Sa,Mp),v(t,Pl,g),v(t,N,g),I(Zn,N,null),e(N,zp),e(N,Wa),e(Wa,jp),e(N,Fp),e(N,Qn),e(Qn,qp),e(Qn,zr),e(zr,Dp),e(Qn,Op),e(N,Ap),e(N,oo),I(Yn,oo,null),e(oo,Np),e(oo,es),e(es,Vp),e(es,Ba),e(Ba,Sp),e(es,Wp),e(N,Bp),e(N,no),I(ts,no,null),e(no,Up),e(no,rt),e(rt,Rp),e(rt,Ua),e(Ua,Hp),e(rt,Kp),e(rt,Ra),e(Ra,Gp),e(rt,Jp),e(N,Xp),e(N,so),I(os,so,null),e(so,Zp),e(so,at),e(at,Qp),e(at,Ha),e(Ha,Yp),e(at,em),e(at,Ka),e(Ka,tm),e(at,om),v(t,$l,g),v(t,it,g),e(it,ro),e(ro,Ga),I(ns,Ga,null),e(it,nm),e(it,Ja),e(Ja,sm),v(t,Il,g),v(t,R,g),I(ss,R,null),e(R,rm),e(R,Xa),e(Xa,am),e(R,im),e(R,G),e(G,jr),e(jr,lm),e(G,dm),e(G,Fr),e(Fr,cm),e(G,pm),e(G,qr),e(qr,mm),e(G,fm),e(G,Za),e(Za,hm),e(G,um),e(G,Dr),e(Dr,gm),e(G,_m),e(R,vm),e(R,ao),I(rs,ao,null),e(ao,bm),e(ao,as),e(as,Pm),e(as,Or),e(Or,$m),e(as,Im),e(R,Tm),e(R,io),I(is,io,null),e(io,Cm),e(io,ls),e(ls,ym),e(ls,Ar),e(Ar,xm),e(ls,Lm),v(t,Tl,g),v(t,lt,g),e(lt,lo),e(lo,Qa),I(ds,Qa,null),e(lt,km),e(lt,Ya),e(Ya,wm),v(t,Cl,g),v(t,H,g),I(cs,H,null),e(H,Em),e(H,ps),e(ps,Mm),e(ps,ms),e(ms,zm),e(ps,jm),e(H,Fm),e(H,pe),I(fs,pe,null),e(pe,qm),e(pe,dt),e(dt,Dm),e(dt,Nr),e(Nr,Om),e(dt,Am),e(dt,ei),e(ei,Nm),e(dt,Vm),e(pe,Sm),I(co,pe,null),e(pe,Wm),I(po,pe,null),e(H,Bm),e(H,me),I(hs,me,null),e(me,Um),e(me,ct),e(ct,Rm),e(ct,Vr),e(Vr,Hm),e(ct,Km),e(ct,ti),e(ti,Gm),e(ct,Jm),e(me,Xm),I(mo,me,null),e(me,Zm),I(fo,me,null),e(H,Qm),e(H,fe),I(us,fe,null),e(fe,Ym),e(fe,pt),e(pt,ef),e(pt,Sr),e(Sr,tf),e(pt,of),e(pt,oi),e(oi,nf),e(pt,sf),e(fe,rf),I(ho,fe,null),e(fe,af),I(uo,fe,null),v(t,yl,g),v(t,mt,g),e(mt,go),e(go,ni),I(gs,ni,null),e(mt,lf),e(mt,si),e(si,df),v(t,xl,g),v(t,ft,g),I(_s,ft,null),e(ft,cf),e(ft,he),I(vs,he,null),e(he,pf),e(he,ht),e(ht,mf),e(ht,Wr),e(Wr,ff),e(ht,hf),e(ht,ri),e(ri,uf),e(ht,gf),e(he,_f),I(_o,he,null),e(he,vf),I(vo,he,null),v(t,Ll,g),v(t,ut,g),e(ut,bo),e(bo,ai),I(bs,ai,null),e(ut,bf),e(ut,ii),e(ii,Pf),v(t,kl,g),v(t,gt,g),I(Ps,gt,null),e(gt,$f),e(gt,ue),I($s,ue,null),e(ue,If),e(ue,_t),e(_t,Tf),e(_t,Br),e(Br,Cf),e(_t,yf),e(_t,li),e(li,xf),e(_t,Lf),e(ue,kf),I(Po,ue,null),e(ue,wf),I($o,ue,null),v(t,wl,g),v(t,vt,g),e(vt,Io),e(Io,di),I(Is,di,null),e(vt,Ef),e(vt,ci),e(ci,Mf),v(t,El,g),v(t,q,g),I(Ts,q,null),e(q,zf),e(q,Cs),e(Cs,jf),e(Cs,Ur),e(Ur,Ff),e(Cs,qf),e(q,Df),e(q,ys),e(ys,Of),e(ys,xs),e(xs,Af),e(ys,Nf),e(q,Vf),I(To,q,null),e(q,Sf),e(q,ge),I(Ls,ge,null),e(ge,Wf),e(ge,bt),e(bt,Bf),e(bt,Rr),e(Rr,Uf),e(bt,Rf),e(bt,pi),e(pi,Hf),e(bt,Kf),e(ge,Gf),I(Co,ge,null),e(ge,Jf),I(yo,ge,null),e(q,Xf),e(q,_e),I(ks,_e,null),e(_e,Zf),e(_e,Pt),e(Pt,Qf),e(Pt,Hr),e(Hr,Yf),e(Pt,eh),e(Pt,mi),e(mi,th),e(Pt,oh),e(_e,nh),I(xo,_e,null),e(_e,sh),I(Lo,_e,null),e(q,rh),e(q,ve),I(ws,ve,null),e(ve,ah),e(ve,$t),e($t,ih),e($t,Kr),e(Kr,lh),e($t,dh),e($t,fi),e(fi,ch),e($t,ph),e(ve,mh),I(ko,ve,null),e(ve,fh),I(wo,ve,null),v(t,Ml,g),v(t,It,g),e(It,Eo),e(Eo,hi),I(Es,hi,null),e(It,hh),e(It,ui),e(ui,uh),v(t,zl,g),v(t,Tt,g),I(Ms,Tt,null),e(Tt,gh),e(Tt,be),I(zs,be,null),e(be,_h),e(be,Ct),e(Ct,vh),e(Ct,Gr),e(Gr,bh),e(Ct,Ph),e(Ct,gi),e(gi,$h),e(Ct,Ih),e(be,Th),I(Mo,be,null),e(be,Ch),I(zo,be,null),v(t,jl,g),v(t,yt,g),e(yt,jo),e(jo,_i),I(js,_i,null),e(yt,yh),e(yt,vi),e(vi,xh),v(t,Fl,g),v(t,xt,g),I(Fs,xt,null),e(xt,Lh),e(xt,Pe),I(qs,Pe,null),e(Pe,kh),e(Pe,Lt),e(Lt,wh),e(Lt,Jr),e(Jr,Eh),e(Lt,Mh),e(Lt,bi),e(bi,zh),e(Lt,jh),e(Pe,Fh),I(Fo,Pe,null),e(Pe,qh),I(qo,Pe,null),v(t,ql,g),v(t,kt,g),e(kt,Do),e(Do,Pi),I(Ds,Pi,null),e(kt,Dh),e(kt,$i),e($i,Oh),v(t,Dl,g),v(t,M,g),I(Os,M,null),e(M,Ah),e(M,As),e(As,Nh),e(As,Xr),e(Xr,Vh),e(As,Sh),e(M,Wh),e(M,Ns),e(Ns,Bh),e(Ns,Vs),e(Vs,Uh),e(Ns,Rh),e(M,Hh),e(M,Ii),e(Ii,Kh),e(M,Gh),e(M,je),e(je,Ti),e(Ti,Ss),e(Ss,Jh),e(je,Xh),e(je,Ci),e(Ci,Ws),e(Ws,Zh),e(je,Qh),e(je,yi),e(yi,Bs),e(Bs,Yh),e(je,eu),e(je,xi),e(xi,Us),e(Us,tu),e(M,ou),e(M,$e),I(Rs,$e,null),e($e,nu),e($e,wt),e(wt,su),e(wt,Li),e(Li,ru),e(wt,au),e(wt,ki),e(ki,iu),e(wt,lu),e($e,du),I(Oo,$e,null),e($e,cu),I(Ao,$e,null),e(M,pu),e(M,No),I(Hs,No,null),e(No,mu),I(Vo,No,null),e(M,fu),e(M,So),I(Ks,So,null),e(So,hu),I(Wo,So,null),v(t,Ol,g),v(t,Et,g),e(Et,Bo),e(Bo,wi),I(Gs,wi,null),e(Et,uu),e(Et,Ei),e(Ei,gu),v(t,Al,g),v(t,Mt,g),I(Js,Mt,null),e(Mt,_u),e(Mt,Ie),I(Xs,Ie,null),e(Ie,vu),e(Ie,zt),e(zt,bu),e(zt,Mi),e(Mi,Pu),e(zt,$u),e(zt,zi),e(zi,Iu),e(zt,Tu),e(Ie,Cu),I(Uo,Ie,null),e(Ie,yu),I(Ro,Ie,null),v(t,Nl,g),v(t,jt,g),e(jt,Ho),e(Ho,ji),I(Zs,ji,null),e(jt,xu),e(jt,Fi),e(Fi,Lu),v(t,Vl,g),v(t,Ft,g),I(Qs,Ft,null),e(Ft,ku),e(Ft,Te),I(Ys,Te,null),e(Te,wu),e(Te,qt),e(qt,Eu),e(qt,qi),e(qi,Mu),e(qt,zu),e(qt,Di),e(Di,ju),e(qt,Fu),e(Te,qu),I(Ko,Te,null),e(Te,Du),I(Go,Te,null),Sl=!0},p(t,[g]){const er={};g&2&&(er.$$scope={dirty:g,ctx:t}),Kt.$set(er);const Oi={};g&2&&(Oi.$$scope={dirty:g,ctx:t}),Jt.$set(Oi);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:t}),co.$set(Ai);const Ni={};g&2&&(Ni.$$scope={dirty:g,ctx:t}),po.$set(Ni);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:t}),mo.$set(tr);const Vi={};g&2&&(Vi.$$scope={dirty:g,ctx:t}),fo.$set(Vi);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:t}),ho.$set(Si);const Wi={};g&2&&(Wi.$$scope={dirty:g,ctx:t}),uo.$set(Wi);const or={};g&2&&(or.$$scope={dirty:g,ctx:t}),_o.$set(or);const Bi={};g&2&&(Bi.$$scope={dirty:g,ctx:t}),vo.$set(Bi);const Ui={};g&2&&(Ui.$$scope={dirty:g,ctx:t}),Po.$set(Ui);const Ri={};g&2&&(Ri.$$scope={dirty:g,ctx:t}),$o.$set(Ri);const Hi={};g&2&&(Hi.$$scope={dirty:g,ctx:t}),To.$set(Hi);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:t}),Co.$set(nr);const Ki={};g&2&&(Ki.$$scope={dirty:g,ctx:t}),yo.$set(Ki);const Gi={};g&2&&(Gi.$$scope={dirty:g,ctx:t}),xo.$set(Gi);const Ji={};g&2&&(Ji.$$scope={dirty:g,ctx:t}),Lo.$set(Ji);const Xi={};g&2&&(Xi.$$scope={dirty:g,ctx:t}),ko.$set(Xi);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:t}),wo.$set(sr);const Zi={};g&2&&(Zi.$$scope={dirty:g,ctx:t}),Mo.$set(Zi);const V={};g&2&&(V.$$scope={dirty:g,ctx:t}),zo.$set(V);const Qi={};g&2&&(Qi.$$scope={dirty:g,ctx:t}),Fo.$set(Qi);const Yi={};g&2&&(Yi.$$scope={dirty:g,ctx:t}),qo.$set(Yi);const el={};g&2&&(el.$$scope={dirty:g,ctx:t}),Oo.$set(el);const tl={};g&2&&(tl.$$scope={dirty:g,ctx:t}),Ao.$set(tl);const ol={};g&2&&(ol.$$scope={dirty:g,ctx:t}),Vo.$set(ol);const nl={};g&2&&(nl.$$scope={dirty:g,ctx:t}),Wo.$set(nl);const Dt={};g&2&&(Dt.$$scope={dirty:g,ctx:t}),Uo.$set(Dt);const sl={};g&2&&(sl.$$scope={dirty:g,ctx:t}),Ro.$set(sl);const rl={};g&2&&(rl.$$scope={dirty:g,ctx:t}),Ko.$set(rl);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:t}),Go.$set(rr)},i(t){Sl||(T(n.$$.fragment,t),T(xe.$$.fragment,t),T(Me.$$.fragment,t),T(Tn.$$.fragment,t),T(xn.$$.fragment,t),T(Ln.$$.fragment,t),T(kn.$$.fragment,t),T(En.$$.fragment,t),T(Mn.$$.fragment,t),T(Kt.$$.fragment,t),T(jn.$$.fragment,t),T(Fn.$$.fragment,t),T(Jt.$$.fragment,t),T(Dn.$$.fragment,t),T(On.$$.fragment,t),T(Nn.$$.fragment,t),T(Vn.$$.fragment,t),T(Wn.$$.fragment,t),T(Bn.$$.fragment,t),T(Un.$$.fragment,t),T(Rn.$$.fragment,t),T(Gn.$$.fragment,t),T(Jn.$$.fragment,t),T(Xn.$$.fragment,t),T(Zn.$$.fragment,t),T(Yn.$$.fragment,t),T(ts.$$.fragment,t),T(os.$$.fragment,t),T(ns.$$.fragment,t),T(ss.$$.fragment,t),T(rs.$$.fragment,t),T(is.$$.fragment,t),T(ds.$$.fragment,t),T(cs.$$.fragment,t),T(fs.$$.fragment,t),T(co.$$.fragment,t),T(po.$$.fragment,t),T(hs.$$.fragment,t),T(mo.$$.fragment,t),T(fo.$$.fragment,t),T(us.$$.fragment,t),T(ho.$$.fragment,t),T(uo.$$.fragment,t),T(gs.$$.fragment,t),T(_s.$$.fragment,t),T(vs.$$.fragment,t),T(_o.$$.fragment,t),T(vo.$$.fragment,t),T(bs.$$.fragment,t),T(Ps.$$.fragment,t),T($s.$$.fragment,t),T(Po.$$.fragment,t),T($o.$$.fragment,t),T(Is.$$.fragment,t),T(Ts.$$.fragment,t),T(To.$$.fragment,t),T(Ls.$$.fragment,t),T(Co.$$.fragment,t),T(yo.$$.fragment,t),T(ks.$$.fragment,t),T(xo.$$.fragment,t),T(Lo.$$.fragment,t),T(ws.$$.fragment,t),T(ko.$$.fragment,t),T(wo.$$.fragment,t),T(Es.$$.fragment,t),T(Ms.$$.fragment,t),T(zs.$$.fragment,t),T(Mo.$$.fragment,t),T(zo.$$.fragment,t),T(js.$$.fragment,t),T(Fs.$$.fragment,t),T(qs.$$.fragment,t),T(Fo.$$.fragment,t),T(qo.$$.fragment,t),T(Ds.$$.fragment,t),T(Os.$$.fragment,t),T(Rs.$$.fragment,t),T(Oo.$$.fragment,t),T(Ao.$$.fragment,t),T(Hs.$$.fragment,t),T(Vo.$$.fragment,t),T(Ks.$$.fragment,t),T(Wo.$$.fragment,t),T(Gs.$$.fragment,t),T(Js.$$.fragment,t),T(Xs.$$.fragment,t),T(Uo.$$.fragment,t),T(Ro.$$.fragment,t),T(Zs.$$.fragment,t),T(Qs.$$.fragment,t),T(Ys.$$.fragment,t),T(Ko.$$.fragment,t),T(Go.$$.fragment,t),Sl=!0)},o(t){C(n.$$.fragment,t),C(xe.$$.fragment,t),C(Me.$$.fragment,t),C(Tn.$$.fragment,t),C(xn.$$.fragment,t),C(Ln.$$.fragment,t),C(kn.$$.fragment,t),C(En.$$.fragment,t),C(Mn.$$.fragment,t),C(Kt.$$.fragment,t),C(jn.$$.fragment,t),C(Fn.$$.fragment,t),C(Jt.$$.fragment,t),C(Dn.$$.fragment,t),C(On.$$.fragment,t),C(Nn.$$.fragment,t),C(Vn.$$.fragment,t),C(Wn.$$.fragment,t),C(Bn.$$.fragment,t),C(Un.$$.fragment,t),C(Rn.$$.fragment,t),C(Gn.$$.fragment,t),C(Jn.$$.fragment,t),C(Xn.$$.fragment,t),C(Zn.$$.fragment,t),C(Yn.$$.fragment,t),C(ts.$$.fragment,t),C(os.$$.fragment,t),C(ns.$$.fragment,t),C(ss.$$.fragment,t),C(rs.$$.fragment,t),C(is.$$.fragment,t),C(ds.$$.fragment,t),C(cs.$$.fragment,t),C(fs.$$.fragment,t),C(co.$$.fragment,t),C(po.$$.fragment,t),C(hs.$$.fragment,t),C(mo.$$.fragment,t),C(fo.$$.fragment,t),C(us.$$.fragment,t),C(ho.$$.fragment,t),C(uo.$$.fragment,t),C(gs.$$.fragment,t),C(_s.$$.fragment,t),C(vs.$$.fragment,t),C(_o.$$.fragment,t),C(vo.$$.fragment,t),C(bs.$$.fragment,t),C(Ps.$$.fragment,t),C($s.$$.fragment,t),C(Po.$$.fragment,t),C($o.$$.fragment,t),C(Is.$$.fragment,t),C(Ts.$$.fragment,t),C(To.$$.fragment,t),C(Ls.$$.fragment,t),C(Co.$$.fragment,t),C(yo.$$.fragment,t),C(ks.$$.fragment,t),C(xo.$$.fragment,t),C(Lo.$$.fragment,t),C(ws.$$.fragment,t),C(ko.$$.fragment,t),C(wo.$$.fragment,t),C(Es.$$.fragment,t),C(Ms.$$.fragment,t),C(zs.$$.fragment,t),C(Mo.$$.fragment,t),C(zo.$$.fragment,t),C(js.$$.fragment,t),C(Fs.$$.fragment,t),C(qs.$$.fragment,t),C(Fo.$$.fragment,t),C(qo.$$.fragment,t),C(Ds.$$.fragment,t),C(Os.$$.fragment,t),C(Rs.$$.fragment,t),C(Oo.$$.fragment,t),C(Ao.$$.fragment,t),C(Hs.$$.fragment,t),C(Vo.$$.fragment,t),C(Ks.$$.fragment,t),C(Wo.$$.fragment,t),C(Gs.$$.fragment,t),C(Js.$$.fragment,t),C(Xs.$$.fragment,t),C(Uo.$$.fragment,t),C(Ro.$$.fragment,t),C(Zs.$$.fragment,t),C(Qs.$$.fragment,t),C(Ys.$$.fragment,t),C(Ko.$$.fragment,t),C(Go.$$.fragment,t),Sl=!1},d(t){o(d),t&&o(b),t&&o(u),y(n),t&&o(Re),t&&o(z),y(xe),t&&o(Ot),t&&o(Q),t&&o(Y),t&&o(De),t&&o(Nt),t&&o(Oe),t&&o(Vt),t&&o(O),y(Me),t&&o(St),t&&o(ee),t&&o(Ae),t&&o(ae),t&&o(In),t&&o(E),t&&o(il),y(Tn,t),t&&o(ll),t&&o(Se),t&&o(dl),t&&o(Ge),y(xn),t&&o(cl),t&&o(te),y(Ln),y(kn),t&&o(pl),t&&o(Xe),y(En),t&&o(ml),t&&o(oe),y(Mn),y(Kt),t&&o(fl),t&&o(Ye),y(jn),t&&o(hl),t&&o(ne),y(Fn),y(Jt),t&&o(ul),t&&o(ot),y(Dn),t&&o(gl),t&&o(F),y(On),y(Nn),y(Vn),y(Wn),y(Bn),t&&o(_l),t&&o(nt),y(Un),t&&o(vl),t&&o(U),y(Rn),y(Gn),y(Jn),t&&o(bl),t&&o(st),y(Xn),t&&o(Pl),t&&o(N),y(Zn),y(Yn),y(ts),y(os),t&&o($l),t&&o(it),y(ns),t&&o(Il),t&&o(R),y(ss),y(rs),y(is),t&&o(Tl),t&&o(lt),y(ds),t&&o(Cl),t&&o(H),y(cs),y(fs),y(co),y(po),y(hs),y(mo),y(fo),y(us),y(ho),y(uo),t&&o(yl),t&&o(mt),y(gs),t&&o(xl),t&&o(ft),y(_s),y(vs),y(_o),y(vo),t&&o(Ll),t&&o(ut),y(bs),t&&o(kl),t&&o(gt),y(Ps),y($s),y(Po),y($o),t&&o(wl),t&&o(vt),y(Is),t&&o(El),t&&o(q),y(Ts),y(To),y(Ls),y(Co),y(yo),y(ks),y(xo),y(Lo),y(ws),y(ko),y(wo),t&&o(Ml),t&&o(It),y(Es),t&&o(zl),t&&o(Tt),y(Ms),y(zs),y(Mo),y(zo),t&&o(jl),t&&o(yt),y(js),t&&o(Fl),t&&o(xt),y(Fs),y(qs),y(Fo),y(qo),t&&o(ql),t&&o(kt),y(Ds),t&&o(Dl),t&&o(M),y(Os),y(Rs),y(Oo),y(Ao),y(Hs),y(Vo),y(Ks),y(Wo),t&&o(Ol),t&&o(Et),y(Gs),t&&o(Al),t&&o(Mt),y(Js),y(Xs),y(Uo),y(Ro),t&&o(Nl),t&&o(jt),y(Zs),t&&o(Vl),t&&o(Ft),y(Qs),y(Ys),y(Ko),y(Go)}}}const Hv={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function Kv(x){return fv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class eb extends dv{constructor(d){super();cv(this,d,Kv,Rv,pv,{})}}export{eb as default,Hv as metadata};
