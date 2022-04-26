import{S as K_,i as G_,s as J_,e as s,k as m,w as P,t as i,M as X_,c as r,d as o,m as f,a,x as $,h as l,b as h,F as e,g as v,y as I,q as T,o as C,B as y,v as Z_,L as S}from"../../chunks/vendor-6b77c823.js";import{T as Z}from"../../chunks/Tip-39098574.js";import{D as k}from"../../chunks/Docstring-1088f2fb.js";import{C as A}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as D}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as N}from"../../chunks/ExampleCodeBlock-5212b321.js";function Q_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTextModel, CLIPTextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Y_(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPVisionModel, CLIPVisionConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function ev(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function tv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function ov(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function nv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPModel

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, CLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = CLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function sv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function rv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function av(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function iv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, CLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function lv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function dv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function cv(x){let d,b,u,p,_,n,c,L,fn,Re,z,se,Ce,ye,hn,xe,un,Dt,Q,Fe,Le,Ot,K,Y,qe,He,At,De,ke,gn,Vt,O,re,we,Me,_n,Ee,vn,Nt,ee,bn,Oe,ae;return{c(){d=s("p"),b=i("TF 2.0 models accepts two formats as inputs:"),u=m(),p=s("ul"),_=s("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),c=m(),L=s("li"),fn=i("having all inputs as a list, tuple or dict in the first positional arguments."),Re=m(),z=s("p"),se=i("This second option is useful when using "),Ce=s("code"),ye=i("tf.keras.Model.fit"),hn=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),xe=s("code"),un=i("model(inputs)"),Dt=i("."),Q=m(),Fe=s("p"),Le=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ot=m(),K=s("ul"),Y=s("li"),qe=i("a single Tensor with "),He=s("code"),At=i("input_ids"),De=i(" only and nothing else: "),ke=s("code"),gn=i("model(input_ids)"),Vt=m(),O=s("li"),re=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=s("code"),Me=i("model([input_ids, attention_mask])"),_n=i(" or "),Ee=s("code"),vn=i("model([input_ids, attention_mask, token_type_ids])"),Nt=m(),ee=s("li"),bn=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Oe=s("code"),ae=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=r(w,"P",{});var j=a(d);b=l(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(o),u=f(w),p=r(w,"UL",{});var St=a(p);_=r(St,"LI",{});var nr=a(_);n=l(nr,"having all inputs as keyword arguments (like PyTorch models), or"),nr.forEach(o),c=f(St),L=r(St,"LI",{});var Pn=a(L);fn=l(Pn,"having all inputs as a list, tuple or dict in the first positional arguments."),Pn.forEach(o),St.forEach(o),Re=f(w),z=r(w,"P",{});var M=a(z);se=l(M,"This second option is useful when using "),Ce=r(M,"CODE",{});var sr=a(Ce);ye=l(sr,"tf.keras.Model.fit"),sr.forEach(o),hn=l(M,` method which currently requires having all the
tensors in the first argument of the model call function: `),xe=r(M,"CODE",{});var Ke=a(xe);un=l(Ke,"model(inputs)"),Ke.forEach(o),Dt=l(M,"."),M.forEach(o),Q=f(w),Fe=r(w,"P",{});var rr=a(Fe);Le=l(rr,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),rr.forEach(o),Ot=f(w),K=r(w,"UL",{});var Ae=a(K);Y=r(Ae,"LI",{});var ie=a(Y);qe=l(ie,"a single Tensor with "),He=r(ie,"CODE",{});var ar=a(He);At=l(ar,"input_ids"),ar.forEach(o),De=l(ie," only and nothing else: "),ke=r(ie,"CODE",{});var ir=a(ke);gn=l(ir,"model(input_ids)"),ir.forEach(o),ie.forEach(o),Vt=f(Ae),O=r(Ae,"LI",{});var le=a(O);re=l(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),we=r(le,"CODE",{});var lr=a(we);Me=l(lr,"model([input_ids, attention_mask])"),lr.forEach(o),_n=l(le," or "),Ee=r(le,"CODE",{});var dr=a(Ee);vn=l(dr,"model([input_ids, attention_mask, token_type_ids])"),dr.forEach(o),le.forEach(o),Nt=f(Ae),ee=r(Ae,"LI",{});var Ve=a(ee);bn=l(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Oe=r(Ve,"CODE",{});var cr=a(Oe);ae=l(cr,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),cr.forEach(o),Ve.forEach(o),Ae.forEach(o)},m(w,j){v(w,d,j),e(d,b),v(w,u,j),v(w,p,j),e(p,_),e(_,n),e(p,c),e(p,L),e(L,fn),v(w,Re,j),v(w,z,j),e(z,se),e(z,Ce),e(Ce,ye),e(z,hn),e(z,xe),e(xe,un),e(z,Dt),v(w,Q,j),v(w,Fe,j),e(Fe,Le),v(w,Ot,j),v(w,K,j),e(K,Y),e(Y,qe),e(Y,He),e(He,At),e(Y,De),e(Y,ke),e(ke,gn),e(K,Vt),e(K,O),e(O,re),e(O,we),e(we,Me),e(O,_n),e(O,Ee),e(Ee,vn),e(K,Nt),e(K,ee),e(ee,bn),e(ee,Oe),e(Oe,ae)},d(w){w&&o(d),w&&o(u),w&&o(p),w&&o(Re),w&&o(z),w&&o(Q),w&&o(Fe),w&&o(Ot),w&&o(K)}}}function pv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function mv(x){let d,b,u,p,_;return p=new A({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function fv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function hv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPModel

model = TFCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function uv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function gv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function _v(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function vv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, TFCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function bv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Pv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function $v(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function Iv(x){let d,b,u,p,_;return p=new A({props:{code:`import jax
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Tv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPModel

model = FlaxCLIPModel.from_pretrained("openai/clip-vit-base-patch32")
tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-base-patch32")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="np")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, FlaxCLIPModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxCLIPModel.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/clip-vit-base-patch32&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Cv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=s("p"),b=i("Examples:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Examples:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function yv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function xv(x){let d,b,u,p,_;return p=new A({props:{code:`from transformers import CLIPTokenizer, FlaxCLIPTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function Lv(x){let d,b,u,p,_;return{c(){d=s("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(c,"CODE",{});var L=a(u);p=l(L,"Module"),L.forEach(o),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){v(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&o(d)}}}function kv(x){let d,b,u,p,_;return p=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooler_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=s("p"),b=i("Example:"),u=m(),P(p.$$.fragment)},l(n){d=r(n,"P",{});var c=a(d);b=l(c,"Example:"),c.forEach(o),u=f(n),$(p.$$.fragment,n)},m(n,c){v(n,d,c),e(d,b),v(n,u,c),I(p,n,c),_=!0},p:S,i(n){_||(T(p.$$.fragment,n),_=!0)},o(n){C(p.$$.fragment,n),_=!1},d(n){n&&o(d),n&&o(u),y(p,n)}}}function wv(x){let d,b,u,p,_,n,c,L,fn,Re,z,se,Ce,ye,hn,xe,un,Dt,Q,Fe,Le,Ot,K,Y,qe,He,At,De,ke,gn,Vt,O,re,we,Me,_n,Ee,vn,Nt,ee,bn,Oe,ae,w,j,St,nr,Pn,M,sr,Ke,rr,Ae,ie,ar,ir,le,lr,dr,Ve,cr,Ld,pr,kd,wd,mr,Md,Ed,tl,$n,ol,Ne,zd,In,jd,Fd,Tn,qd,Dd,nl,Ge,Wt,fa,Cn,Od,ha,Ad,sl,te,yn,Vd,Bt,fr,Nd,Sd,hr,Wd,Bd,Ud,Je,Rd,ur,Hd,Kd,gr,Gd,Jd,Xd,Ut,xn,Zd,Ln,Qd,_r,Yd,ec,rl,Xe,Rt,ua,kn,tc,ga,oc,al,oe,wn,nc,Ze,sc,vr,rc,ac,Mn,ic,lc,dc,Qe,cc,br,pc,mc,Pr,fc,hc,uc,Ht,il,Ye,Kt,_a,En,gc,va,_c,ll,ne,zn,vc,et,bc,$r,Pc,$c,jn,Ic,Tc,Cc,tt,yc,Ir,xc,Lc,Tr,kc,wc,Mc,Gt,dl,ot,Jt,ba,Fn,Ec,Pa,zc,cl,F,qn,jc,$a,Fc,qc,Dn,Dc,Cr,Oc,Ac,Vc,de,On,Nc,Ia,Sc,Wc,Ta,yr,Bc,Ca,Uc,Rc,ya,Hc,Kc,Xt,An,Gc,Vn,Jc,xa,Xc,Zc,Qc,Zt,Nn,Yc,La,ep,tp,xr,Sn,pl,nt,Qt,ka,Wn,op,wa,np,ml,B,Bn,sp,Un,rp,Ma,ap,ip,lp,Rn,dp,Lr,cp,pp,mp,ce,Hn,fp,Ea,hp,up,za,kr,gp,ja,_p,vp,Fa,bp,Pp,Yt,Kn,$p,qa,Ip,fl,st,eo,Da,Gn,Tp,Oa,Cp,hl,U,Jn,yp,Aa,xp,Lp,Xn,kp,wr,wp,Mp,Ep,to,Zn,zp,Qn,jp,Va,Fp,qp,Dp,oo,Yn,Op,rt,Ap,Na,Vp,Np,Sa,Sp,Wp,ul,at,no,Wa,es,Bp,Ba,Up,gl,R,ts,Rp,Ua,Hp,Kp,G,Mr,Gp,Jp,Er,Xp,Zp,zr,Qp,Yp,Ra,em,tm,jr,om,nm,sm,so,os,rm,ns,am,Fr,im,lm,dm,ro,ss,cm,rs,pm,qr,mm,fm,_l,it,ao,Ha,as,hm,Ka,um,vl,H,is,gm,ls,_m,ds,vm,bm,Pm,pe,cs,$m,lt,Im,Dr,Tm,Cm,Ga,ym,xm,Lm,io,km,lo,wm,me,ps,Mm,dt,Em,Or,zm,jm,Ja,Fm,qm,Dm,co,Om,po,Am,fe,ms,Vm,ct,Nm,Ar,Sm,Wm,Xa,Bm,Um,Rm,mo,Hm,fo,bl,pt,ho,Za,fs,Km,Qa,Gm,Pl,mt,hs,Jm,he,us,Xm,ft,Zm,Vr,Qm,Ym,Ya,ef,tf,of,uo,nf,go,$l,ht,_o,ei,gs,sf,ti,rf,Il,ut,_s,af,ue,vs,lf,gt,df,Nr,cf,pf,oi,mf,ff,hf,vo,uf,bo,Tl,_t,Po,ni,bs,gf,si,_f,Cl,q,Ps,vf,$s,bf,Sr,Pf,$f,If,Is,Tf,Ts,Cf,yf,xf,$o,Lf,ge,Cs,kf,vt,wf,Wr,Mf,Ef,ri,zf,jf,Ff,Io,qf,To,Df,_e,ys,Of,bt,Af,Br,Vf,Nf,ai,Sf,Wf,Bf,Co,Uf,yo,Rf,ve,xs,Hf,Pt,Kf,Ur,Gf,Jf,ii,Xf,Zf,Qf,xo,Yf,Lo,yl,$t,ko,li,Ls,eh,di,th,xl,It,ks,oh,be,ws,nh,Tt,sh,Rr,rh,ah,ci,ih,lh,dh,wo,ch,Mo,Ll,Ct,Eo,pi,Ms,ph,mi,mh,kl,yt,Es,fh,Pe,zs,hh,xt,uh,Hr,gh,_h,fi,vh,bh,Ph,zo,$h,jo,wl,Lt,Fo,hi,js,Ih,ui,Th,Ml,E,Fs,Ch,qs,yh,Kr,xh,Lh,kh,Ds,wh,Os,Mh,Eh,zh,gi,jh,Fh,ze,_i,As,qh,Dh,vi,Vs,Oh,Ah,bi,Ns,Vh,Nh,Pi,Ss,Sh,Wh,$e,Ws,Bh,kt,Uh,$i,Rh,Hh,Ii,Kh,Gh,Jh,qo,Xh,Do,Zh,Oo,Bs,Qh,Ao,Yh,Vo,Us,eu,No,El,wt,So,Ti,Rs,tu,Ci,ou,zl,Mt,Hs,nu,Ie,Ks,su,Et,ru,yi,au,iu,xi,lu,du,cu,Wo,pu,Bo,jl,zt,Uo,Li,Gs,mu,ki,fu,Fl,jt,Js,hu,Te,Xs,uu,Ft,gu,wi,_u,vu,Mi,bu,Pu,$u,Ro,Iu,Ho,ql;return n=new D({}),ye=new D({}),Me=new D({}),$n=new A({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),Cn=new D({}),yn=new k({props:{name:"class transformers.CLIPConfig",anchor:"transformers.CLIPConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 512"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextConfig">CLIPTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.CLIPConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionConfig">CLIPVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.CLIPConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.CLIPConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> paramter. Default is used as per the original CLIP implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.CLIPConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L245"}}),xn=new k({props:{name:"from_text_vision_configs",anchor:"transformers.CLIPConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": CLIPTextConfig"},{name:"vision_config",val:": CLIPVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L294",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"
>CLIPConfig</a></p>
`}}),kn=new D({}),wn=new k({props:{name:"class transformers.CLIPTextConfig",anchor:"transformers.CLIPTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 512"},{name:"intermediate_size",val:" = 2048"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 8"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L33"}}),Ht=new N({props:{anchor:"transformers.CLIPTextConfig.example",$$slots:{default:[Q_]},$$scope:{ctx:x}}}),En=new D({}),zn=new k({props:{name:"class transformers.CLIPVisionConfig",anchor:"transformers.CLIPVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"intermediate_size",val:" = 3072"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 32"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/configuration_clip.py#L141"}}),Gt=new N({props:{anchor:"transformers.CLIPVisionConfig.example",$$slots:{default:[Y_]},$$scope:{ctx:x}}}),Fn=new D({}),qn=new k({props:{name:"class transformers.CLIPTokenizer",anchor:"transformers.CLIPTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.CLIPTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L100"}}),On=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L186",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),An=new k({props:{name:"get_special_tokens_mask",anchor:"transformers.CLIPTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CLIPTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L213",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Nn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L241",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sn=new k({props:{name:"save_vocabulary",anchor:"transformers.CLIPTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip.py#L336"}}),Wn=new D({}),Bn=new k({props:{name:"class transformers.CLIPTokenizerFast",anchor:"transformers.CLIPTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = '<|endoftext|>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CLIPTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CLIPTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CLIPTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.CLIPTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L48"}}),Hn=new k({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L121",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Kn=new k({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CLIPTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/tokenization_clip_fast.py#L148",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new D({}),Jn=new k({props:{name:"class transformers.CLIPFeatureExtractor",anchor:"transformers.CLIPFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BICUBIC: 3>"},{name:"do_center_crop",val:" = True"},{name:"crop_size",val:" = 224"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L30"}}),Zn=new k({props:{name:"center_crop",anchor:"transformers.CLIPFeatureExtractor.center_crop",parameters:[{name:"image",val:""},{name:"size",val:""}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.center_crop.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.center_crop.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to which crop the image.`,name:"size"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L158"}}),Yn=new k({props:{name:"resize",anchor:"transformers.CLIPFeatureExtractor.resize",parameters:[{name:"image",val:""},{name:"size",val:""},{name:"resample",val:" = <Resampling.BICUBIC: 3>"}],parametersDescription:[{anchor:"transformers.CLIPFeatureExtractor.resize.image",description:`<strong>image</strong> (<code>PIL.Image.Image</code> or <code>np.ndarray</code> or <code>torch.Tensor</code>) &#x2014;
The image to resize.`,name:"image"},{anchor:"transformers.CLIPFeatureExtractor.resize.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple[int, int]</code>) &#x2014;
The size to use for resizing the image. If <code>int</code> it will be resized to match the shorter side`,name:"size"},{anchor:"transformers.CLIPFeatureExtractor.resize.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
The filter to user for resampling.`,name:"resample"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/feature_extraction_clip.py#L184"}}),es=new D({}),ts=new k({props:{name:"class transformers.CLIPProcessor",anchor:"transformers.CLIPProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.CLIPProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.CLIPProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast">CLIPTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L22"}}),os=new k({props:{name:"batch_decode",anchor:"transformers.CLIPProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L95"}}),ss=new k({props:{name:"decode",anchor:"transformers.CLIPProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/processing_clip.py#L102"}}),as=new D({}),is=new k({props:{name:"class transformers.CLIPModel",anchor:"transformers.CLIPModel",parameters:[{name:"config",val:": CLIPConfig"}],parametersDescription:[{anchor:"transformers.CLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L843"}}),cs=new k({props:{name:"forward",anchor:"transformers.CLIPModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L972",returnDescription:`
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
`}}),io=new Z({props:{$$slots:{default:[ev]},$$scope:{ctx:x}}}),lo=new N({props:{anchor:"transformers.CLIPModel.forward.example",$$slots:{default:[tv]},$$scope:{ctx:x}}}),ps=new k({props:{name:"get_text_features",anchor:"transformers.CLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L876",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"
>CLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),co=new Z({props:{$$slots:{default:[ov]},$$scope:{ctx:x}}}),po=new N({props:{anchor:"transformers.CLIPModel.get_text_features.example",$$slots:{default:[nv]},$$scope:{ctx:x}}}),ms=new k({props:{name:"get_image_features",anchor:"transformers.CLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L923",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"
>CLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),mo=new Z({props:{$$slots:{default:[sv]},$$scope:{ctx:x}}}),fo=new N({props:{anchor:"transformers.CLIPModel.get_image_features.example",$$slots:{default:[rv]},$$scope:{ctx:x}}}),fs=new D({}),hs=new k({props:{name:"class transformers.CLIPTextModel",anchor:"transformers.CLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L679"}}),us=new k({props:{name:"forward",anchor:"transformers.CLIPTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L694",returnDescription:`
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
`}}),uo=new Z({props:{$$slots:{default:[av]},$$scope:{ctx:x}}}),go=new N({props:{anchor:"transformers.CLIPTextModel.forward.example",$$slots:{default:[iv]},$$scope:{ctx:x}}}),gs=new D({}),_s=new k({props:{name:"class transformers.CLIPVisionModel",anchor:"transformers.CLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L790"}}),vs=new k({props:{name:"forward",anchor:"transformers.CLIPVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CLIPVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.CLIPVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CLIPVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CLIPVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_clip.py#L803",returnDescription:`
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
`}}),vo=new Z({props:{$$slots:{default:[lv]},$$scope:{ctx:x}}}),bo=new N({props:{anchor:"transformers.CLIPVisionModel.forward.example",$$slots:{default:[dv]},$$scope:{ctx:x}}}),bs=new D({}),Ps=new k({props:{name:"class transformers.TFCLIPModel",anchor:"transformers.TFCLIPModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1195"}}),$o=new Z({props:{$$slots:{default:[cv]},$$scope:{ctx:x}}}),Cs=new k({props:{name:"call",anchor:"transformers.TFCLIPModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1323",returnDescription:`
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
`}}),Io=new Z({props:{$$slots:{default:[pv]},$$scope:{ctx:x}}}),To=new N({props:{anchor:"transformers.TFCLIPModel.call.example",$$slots:{default:[mv]},$$scope:{ctx:x}}}),ys=new k({props:{name:"get_text_features",anchor:"transformers.TFCLIPModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1241",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"
>TFCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Co=new Z({props:{$$slots:{default:[fv]},$$scope:{ctx:x}}}),yo=new N({props:{anchor:"transformers.TFCLIPModel.get_text_features.example",$$slots:{default:[hv]},$$scope:{ctx:x}}}),xs=new k({props:{name:"get_image_features",anchor:"transformers.TFCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1281",returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"
>TFCLIPVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),xo=new Z({props:{$$slots:{default:[uv]},$$scope:{ctx:x}}}),Lo=new N({props:{anchor:"transformers.TFCLIPModel.get_image_features.example",$$slots:{default:[gv]},$$scope:{ctx:x}}}),Ls=new D({}),ks=new k({props:{name:"class transformers.TFCLIPTextModel",anchor:"transformers.TFCLIPTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1034"}}),ws=new k({props:{name:"call",anchor:"transformers.TFCLIPTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1042",returnDescription:`
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
`}}),wo=new Z({props:{$$slots:{default:[_v]},$$scope:{ctx:x}}}),Mo=new N({props:{anchor:"transformers.TFCLIPTextModel.call.example",$$slots:{default:[vv]},$$scope:{ctx:x}}}),Ms=new D({}),Es=new k({props:{name:"class transformers.TFCLIPVisionModel",anchor:"transformers.TFCLIPVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1097"}}),zs=new k({props:{name:"call",anchor:"transformers.TFCLIPVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCLIPVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_tf_clip.py#L1138",returnDescription:`
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
`}}),zo=new Z({props:{$$slots:{default:[bv]},$$scope:{ctx:x}}}),jo=new N({props:{anchor:"transformers.TFCLIPVisionModel.call.example",$$slots:{default:[Pv]},$$scope:{ctx:x}}}),js=new D({}),Fs=new k({props:{name:"class transformers.FlaxCLIPModel",anchor:"transformers.FlaxCLIPModel",parameters:[{name:"config",val:": CLIPConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig">CLIPConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxCLIPModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1147"}}),Ws=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPModel.__call__",parameters:[{name:"input_ids",val:""},{name:"pixel_values",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L776",returnDescription:`
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
`}}),qo=new Z({props:{$$slots:{default:[$v]},$$scope:{ctx:x}}}),Do=new N({props:{anchor:"transformers.FlaxCLIPModel.__call__.example",$$slots:{default:[Iv]},$$scope:{ctx:x}}}),Bs=new k({props:{name:"get_text_features",anchor:"transformers.FlaxCLIPModel.get_text_features",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L821",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPTextModel"
>FlaxCLIPTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Ao=new N({props:{anchor:"transformers.FlaxCLIPModel.get_text_features.example",$$slots:{default:[Tv]},$$scope:{ctx:x}}}),Us=new k({props:{name:"get_image_features",anchor:"transformers.FlaxCLIPModel.get_image_features",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:" = False"}],parametersDescription:[{anchor:"transformers.FlaxCLIPModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained
using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L888",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/clip#transformers.FlaxCLIPVisionModel"
>FlaxCLIPVisionModel</a></p>
`,returnType:`
<p>image_features (<code>jnp.ndarray</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),No=new N({props:{anchor:"transformers.FlaxCLIPModel.get_image_features.example",$$slots:{default:[Cv]},$$scope:{ctx:x}}}),Rs=new D({}),Hs=new k({props:{name:"class transformers.FlaxCLIPTextModel",anchor:"transformers.FlaxCLIPTextModel",parameters:[{name:"config",val:": CLIPTextConfig"},{name:"input_shape",val:" = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L968"}}),Ks=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPTextModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPTextModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L621",returnDescription:`
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
`}}),Wo=new Z({props:{$$slots:{default:[yv]},$$scope:{ctx:x}}}),Bo=new N({props:{anchor:"transformers.FlaxCLIPTextModel.__call__.example",$$slots:{default:[xv]},$$scope:{ctx:x}}}),Gs=new D({}),Js=new k({props:{name:"class transformers.FlaxCLIPVisionModel",anchor:"transformers.FlaxCLIPVisionModel",parameters:[{name:"config",val:": CLIPVisionConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L1021"}}),Xs=new k({props:{name:"__call__",anchor:"transformers.FlaxCLIPVisionModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxCLIPVisionModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxCLIPVisionModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/clip/modeling_flax_clip.py#L701",returnDescription:`
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
`}}),Ro=new Z({props:{$$slots:{default:[Lv]},$$scope:{ctx:x}}}),Ho=new N({props:{anchor:"transformers.FlaxCLIPVisionModel.__call__.example",$$slots:{default:[kv]},$$scope:{ctx:x}}}),{c(){d=s("meta"),b=m(),u=s("h1"),p=s("a"),_=s("span"),P(n.$$.fragment),c=m(),L=s("span"),fn=i("CLIP"),Re=m(),z=s("h2"),se=s("a"),Ce=s("span"),P(ye.$$.fragment),hn=m(),xe=s("span"),un=i("Overview"),Dt=m(),Q=s("p"),Fe=i("The CLIP model was proposed in "),Le=s("a"),Ot=i("Learning Transferable Visual Models From Natural Language Supervision"),K=i(` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Y=m(),qe=s("p"),He=i("The abstract from the paper is the following:"),At=m(),De=s("p"),ke=s("em"),gn=i(`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Vt=m(),O=s("h2"),re=s("a"),we=s("span"),P(Me.$$.fragment),_n=m(),Ee=s("span"),vn=i("Usage"),Nt=m(),ee=s("p"),bn=i(`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Oe=m(),ae=s("p"),w=i(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=s("a"),St=i("CLIPFeatureExtractor"),nr=i(" can be used to resize (or rescale) and normalize images for the model."),Pn=m(),M=s("p"),sr=i("The "),Ke=s("a"),rr=i("CLIPTokenizer"),Ae=i(" is used to encode the text. The "),ie=s("a"),ar=i("CLIPProcessor"),ir=i(` wraps
`),le=s("a"),lr=i("CLIPFeatureExtractor"),dr=i(" and "),Ve=s("a"),cr=i("CLIPTokenizer"),Ld=i(` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),pr=s("a"),kd=i("CLIPProcessor"),wd=i(" and "),mr=s("a"),Md=i("CLIPModel"),Ed=i("."),tl=m(),P($n.$$.fragment),ol=m(),Ne=s("p"),zd=i("This model was contributed by "),In=s("a"),jd=i("valhalla"),Fd=i(". The original code can be found "),Tn=s("a"),qd=i("here"),Dd=i("."),nl=m(),Ge=s("h2"),Wt=s("a"),fa=s("span"),P(Cn.$$.fragment),Od=m(),ha=s("span"),Ad=i("CLIPConfig"),sl=m(),te=s("div"),P(yn.$$.fragment),Vd=m(),Bt=s("p"),fr=s("a"),Nd=i("CLIPConfig"),Sd=i(" is the configuration class to store the configuration of a "),hr=s("a"),Wd=i("CLIPModel"),Bd=i(`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),Ud=m(),Je=s("p"),Rd=i("Configuration objects inherit from "),ur=s("a"),Hd=i("PretrainedConfig"),Kd=i(` and can be used to control the model outputs. Read the
documentation from `),gr=s("a"),Gd=i("PretrainedConfig"),Jd=i(" for more information."),Xd=m(),Ut=s("div"),P(xn.$$.fragment),Zd=m(),Ln=s("p"),Qd=i("Instantiate a "),_r=s("a"),Yd=i("CLIPConfig"),ec=i(` (or a derived class) from clip text model configuration and clip vision model
configuration.`),rl=m(),Xe=s("h2"),Rt=s("a"),ua=s("span"),P(kn.$$.fragment),tc=m(),ga=s("span"),oc=i("CLIPTextConfig"),al=m(),oe=s("div"),P(wn.$$.fragment),nc=m(),Ze=s("p"),sc=i("This is the configuration class to store the configuration of a "),vr=s("a"),rc=i("CLIPModel"),ac=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Mn=s("a"),ic=i("openai/clip-vit-base-patch32"),lc=i(" architecture."),dc=m(),Qe=s("p"),cc=i("Configuration objects inherit from "),br=s("a"),pc=i("PretrainedConfig"),mc=i(` and can be used to control the model outputs. Read the
documentation from `),Pr=s("a"),fc=i("PretrainedConfig"),hc=i(" for more information."),uc=m(),P(Ht.$$.fragment),il=m(),Ye=s("h2"),Kt=s("a"),_a=s("span"),P(En.$$.fragment),gc=m(),va=s("span"),_c=i("CLIPVisionConfig"),ll=m(),ne=s("div"),P(zn.$$.fragment),vc=m(),et=s("p"),bc=i("This is the configuration class to store the configuration of a "),$r=s("a"),Pc=i("CLIPModel"),$c=i(`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),jn=s("a"),Ic=i("openai/clip-vit-base-patch32"),Tc=i(" architecture."),Cc=m(),tt=s("p"),yc=i("Configuration objects inherit from "),Ir=s("a"),xc=i("PretrainedConfig"),Lc=i(` and can be used to control the model outputs. Read the
documentation from `),Tr=s("a"),kc=i("PretrainedConfig"),wc=i(" for more information."),Mc=m(),P(Gt.$$.fragment),dl=m(),ot=s("h2"),Jt=s("a"),ba=s("span"),P(Fn.$$.fragment),Ec=m(),Pa=s("span"),zc=i("CLIPTokenizer"),cl=m(),F=s("div"),P(qn.$$.fragment),jc=m(),$a=s("p"),Fc=i("Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),qc=m(),Dn=s("p"),Dc=i("This tokenizer inherits from "),Cr=s("a"),Oc=i("PreTrainedTokenizer"),Ac=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vc=m(),de=s("div"),P(On.$$.fragment),Nc=m(),Ia=s("p"),Sc=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Wc=m(),Ta=s("ul"),yr=s("li"),Bc=i("single sequence: "),Ca=s("code"),Uc=i("<|startoftext|> X <|endoftext|>"),Rc=m(),ya=s("p"),Hc=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Kc=m(),Xt=s("div"),P(An.$$.fragment),Gc=m(),Vn=s("p"),Jc=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xa=s("code"),Xc=i("prepare_for_model"),Zc=i(" method."),Qc=m(),Zt=s("div"),P(Nn.$$.fragment),Yc=m(),La=s("p"),ep=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),tp=m(),xr=s("div"),P(Sn.$$.fragment),pl=m(),nt=s("h2"),Qt=s("a"),ka=s("span"),P(Wn.$$.fragment),op=m(),wa=s("span"),np=i("CLIPTokenizerFast"),ml=m(),B=s("div"),P(Bn.$$.fragment),sp=m(),Un=s("p"),rp=i("Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ma=s("em"),ap=i("tokenizers"),ip=i(` library). Based on byte-level
Byte-Pair-Encoding.`),lp=m(),Rn=s("p"),dp=i("This tokenizer inherits from "),Lr=s("a"),cp=i("PreTrainedTokenizerFast"),pp=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),mp=m(),ce=s("div"),P(Hn.$$.fragment),fp=m(),Ea=s("p"),hp=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),up=m(),za=s("ul"),kr=s("li"),gp=i("single sequence: "),ja=s("code"),_p=i("<|startoftext|> X <|endoftext|>"),vp=m(),Fa=s("p"),bp=i("Pairs of sequences are not the expected use case, but they will be handled without a separator."),Pp=m(),Yt=s("div"),P(Kn.$$.fragment),$p=m(),qa=s("p"),Ip=i(`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),fl=m(),st=s("h2"),eo=s("a"),Da=s("span"),P(Gn.$$.fragment),Tp=m(),Oa=s("span"),Cp=i("CLIPFeatureExtractor"),hl=m(),U=s("div"),P(Jn.$$.fragment),yp=m(),Aa=s("p"),xp=i("Constructs a CLIP feature extractor."),Lp=m(),Xn=s("p"),kp=i("This feature extractor inherits from "),wr=s("a"),wp=i("FeatureExtractionMixin"),Mp=i(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ep=m(),to=s("div"),P(Zn.$$.fragment),zp=m(),Qn=s("p"),jp=i("Crops "),Va=s("code"),Fp=i("image"),qp=i(` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Dp=m(),oo=s("div"),P(Yn.$$.fragment),Op=m(),rt=s("p"),Ap=i("Resizes "),Na=s("code"),Vp=i("image"),Np=i(". Note that this will trigger a conversion of "),Sa=s("code"),Sp=i("image"),Wp=i(" to a PIL Image."),ul=m(),at=s("h2"),no=s("a"),Wa=s("span"),P(es.$$.fragment),Bp=m(),Ba=s("span"),Up=i("CLIPProcessor"),gl=m(),R=s("div"),P(ts.$$.fragment),Rp=m(),Ua=s("p"),Hp=i("Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),Kp=m(),G=s("p"),Mr=s("a"),Gp=i("CLIPProcessor"),Jp=i(" offers all the functionalities of "),Er=s("a"),Xp=i("CLIPFeatureExtractor"),Zp=i(" and "),zr=s("a"),Qp=i("CLIPTokenizerFast"),Yp=i(`. See the
`),Ra=s("code"),em=i("__call__()"),tm=i(" and "),jr=s("a"),om=i("decode()"),nm=i(" for more information."),sm=m(),so=s("div"),P(os.$$.fragment),rm=m(),ns=s("p"),am=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Fr=s("a"),im=i("batch_decode()"),lm=i(`. Please
refer to the docstring of this method for more information.`),dm=m(),ro=s("div"),P(ss.$$.fragment),cm=m(),rs=s("p"),pm=i("This method forwards all its arguments to CLIPTokenizerFast\u2019s "),qr=s("a"),mm=i("decode()"),fm=i(`. Please refer to
the docstring of this method for more information.`),_l=m(),it=s("h2"),ao=s("a"),Ha=s("span"),P(as.$$.fragment),hm=m(),Ka=s("span"),um=i("CLIPModel"),vl=m(),H=s("div"),P(is.$$.fragment),gm=m(),ls=s("p"),_m=i("This model is a PyTorch "),ds=s("a"),vm=i("torch.nn.Module"),bm=i(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pm=m(),pe=s("div"),P(cs.$$.fragment),$m=m(),lt=s("p"),Im=i("The "),Dr=s("a"),Tm=i("CLIPModel"),Cm=i(" forward method, overrides the "),Ga=s("code"),ym=i("__call__"),xm=i(" special method."),Lm=m(),P(io.$$.fragment),km=m(),P(lo.$$.fragment),wm=m(),me=s("div"),P(ps.$$.fragment),Mm=m(),dt=s("p"),Em=i("The "),Or=s("a"),zm=i("CLIPModel"),jm=i(" forward method, overrides the "),Ja=s("code"),Fm=i("__call__"),qm=i(" special method."),Dm=m(),P(co.$$.fragment),Om=m(),P(po.$$.fragment),Am=m(),fe=s("div"),P(ms.$$.fragment),Vm=m(),ct=s("p"),Nm=i("The "),Ar=s("a"),Sm=i("CLIPModel"),Wm=i(" forward method, overrides the "),Xa=s("code"),Bm=i("__call__"),Um=i(" special method."),Rm=m(),P(mo.$$.fragment),Hm=m(),P(fo.$$.fragment),bl=m(),pt=s("h2"),ho=s("a"),Za=s("span"),P(fs.$$.fragment),Km=m(),Qa=s("span"),Gm=i("CLIPTextModel"),Pl=m(),mt=s("div"),P(hs.$$.fragment),Jm=m(),he=s("div"),P(us.$$.fragment),Xm=m(),ft=s("p"),Zm=i("The "),Vr=s("a"),Qm=i("CLIPTextModel"),Ym=i(" forward method, overrides the "),Ya=s("code"),ef=i("__call__"),tf=i(" special method."),of=m(),P(uo.$$.fragment),nf=m(),P(go.$$.fragment),$l=m(),ht=s("h2"),_o=s("a"),ei=s("span"),P(gs.$$.fragment),sf=m(),ti=s("span"),rf=i("CLIPVisionModel"),Il=m(),ut=s("div"),P(_s.$$.fragment),af=m(),ue=s("div"),P(vs.$$.fragment),lf=m(),gt=s("p"),df=i("The "),Nr=s("a"),cf=i("CLIPVisionModel"),pf=i(" forward method, overrides the "),oi=s("code"),mf=i("__call__"),ff=i(" special method."),hf=m(),P(vo.$$.fragment),uf=m(),P(bo.$$.fragment),Tl=m(),_t=s("h2"),Po=s("a"),ni=s("span"),P(bs.$$.fragment),gf=m(),si=s("span"),_f=i("TFCLIPModel"),Cl=m(),q=s("div"),P(Ps.$$.fragment),vf=m(),$s=s("p"),bf=i("This model inherits from "),Sr=s("a"),Pf=i("TFPreTrainedModel"),$f=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),If=m(),Is=s("p"),Tf=i("This model is also a "),Ts=s("a"),Cf=i("tf.keras.Model"),yf=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xf=m(),P($o.$$.fragment),Lf=m(),ge=s("div"),P(Cs.$$.fragment),kf=m(),vt=s("p"),wf=i("The "),Wr=s("a"),Mf=i("TFCLIPModel"),Ef=i(" forward method, overrides the "),ri=s("code"),zf=i("__call__"),jf=i(" special method."),Ff=m(),P(Io.$$.fragment),qf=m(),P(To.$$.fragment),Df=m(),_e=s("div"),P(ys.$$.fragment),Of=m(),bt=s("p"),Af=i("The "),Br=s("a"),Vf=i("TFCLIPModel"),Nf=i(" forward method, overrides the "),ai=s("code"),Sf=i("__call__"),Wf=i(" special method."),Bf=m(),P(Co.$$.fragment),Uf=m(),P(yo.$$.fragment),Rf=m(),ve=s("div"),P(xs.$$.fragment),Hf=m(),Pt=s("p"),Kf=i("The "),Ur=s("a"),Gf=i("TFCLIPModel"),Jf=i(" forward method, overrides the "),ii=s("code"),Xf=i("__call__"),Zf=i(" special method."),Qf=m(),P(xo.$$.fragment),Yf=m(),P(Lo.$$.fragment),yl=m(),$t=s("h2"),ko=s("a"),li=s("span"),P(Ls.$$.fragment),eh=m(),di=s("span"),th=i("TFCLIPTextModel"),xl=m(),It=s("div"),P(ks.$$.fragment),oh=m(),be=s("div"),P(ws.$$.fragment),nh=m(),Tt=s("p"),sh=i("The "),Rr=s("a"),rh=i("TFCLIPTextModel"),ah=i(" forward method, overrides the "),ci=s("code"),ih=i("__call__"),lh=i(" special method."),dh=m(),P(wo.$$.fragment),ch=m(),P(Mo.$$.fragment),Ll=m(),Ct=s("h2"),Eo=s("a"),pi=s("span"),P(Ms.$$.fragment),ph=m(),mi=s("span"),mh=i("TFCLIPVisionModel"),kl=m(),yt=s("div"),P(Es.$$.fragment),fh=m(),Pe=s("div"),P(zs.$$.fragment),hh=m(),xt=s("p"),uh=i("The "),Hr=s("a"),gh=i("TFCLIPVisionModel"),_h=i(" forward method, overrides the "),fi=s("code"),vh=i("__call__"),bh=i(" special method."),Ph=m(),P(zo.$$.fragment),$h=m(),P(jo.$$.fragment),wl=m(),Lt=s("h2"),Fo=s("a"),hi=s("span"),P(js.$$.fragment),Ih=m(),ui=s("span"),Th=i("FlaxCLIPModel"),Ml=m(),E=s("div"),P(Fs.$$.fragment),Ch=m(),qs=s("p"),yh=i("This model inherits from "),Kr=s("a"),xh=i("FlaxPreTrainedModel"),Lh=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kh=m(),Ds=s("p"),wh=i("This model is also a Flax Linen "),Os=s("a"),Mh=i("flax.linen.Module"),Eh=i(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zh=m(),gi=s("p"),jh=i("Finally, this model supports inherent JAX features such as:"),Fh=m(),ze=s("ul"),_i=s("li"),As=s("a"),qh=i("Just-In-Time (JIT) compilation"),Dh=m(),vi=s("li"),Vs=s("a"),Oh=i("Automatic Differentiation"),Ah=m(),bi=s("li"),Ns=s("a"),Vh=i("Vectorization"),Nh=m(),Pi=s("li"),Ss=s("a"),Sh=i("Parallelization"),Wh=m(),$e=s("div"),P(Ws.$$.fragment),Bh=m(),kt=s("p"),Uh=i("The "),$i=s("code"),Rh=i("FlaxCLIPPreTrainedModel"),Hh=i(" forward method, overrides the "),Ii=s("code"),Kh=i("__call__"),Gh=i(" special method."),Jh=m(),P(qo.$$.fragment),Xh=m(),P(Do.$$.fragment),Zh=m(),Oo=s("div"),P(Bs.$$.fragment),Qh=m(),P(Ao.$$.fragment),Yh=m(),Vo=s("div"),P(Us.$$.fragment),eu=m(),P(No.$$.fragment),El=m(),wt=s("h2"),So=s("a"),Ti=s("span"),P(Rs.$$.fragment),tu=m(),Ci=s("span"),ou=i("FlaxCLIPTextModel"),zl=m(),Mt=s("div"),P(Hs.$$.fragment),nu=m(),Ie=s("div"),P(Ks.$$.fragment),su=m(),Et=s("p"),ru=i("The "),yi=s("code"),au=i("FlaxCLIPTextPreTrainedModel"),iu=i(" forward method, overrides the "),xi=s("code"),lu=i("__call__"),du=i(" special method."),cu=m(),P(Wo.$$.fragment),pu=m(),P(Bo.$$.fragment),jl=m(),zt=s("h2"),Uo=s("a"),Li=s("span"),P(Gs.$$.fragment),mu=m(),ki=s("span"),fu=i("FlaxCLIPVisionModel"),Fl=m(),jt=s("div"),P(Js.$$.fragment),hu=m(),Te=s("div"),P(Xs.$$.fragment),uu=m(),Ft=s("p"),gu=i("The "),wi=s("code"),_u=i("FlaxCLIPVisionPreTrainedModel"),vu=i(" forward method, overrides the "),Mi=s("code"),bu=i("__call__"),Pu=i(" special method."),$u=m(),P(Ro.$$.fragment),Iu=m(),P(Ho.$$.fragment),this.h()},l(t){const g=X_('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),b=f(t),u=r(t,"H1",{class:!0});var Zs=a(u);p=r(Zs,"A",{id:!0,class:!0,href:!0});var Ei=a(p);_=r(Ei,"SPAN",{});var zi=a(_);$(n.$$.fragment,zi),zi.forEach(o),Ei.forEach(o),c=f(Zs),L=r(Zs,"SPAN",{});var ji=a(L);fn=l(ji,"CLIP"),ji.forEach(o),Zs.forEach(o),Re=f(t),z=r(t,"H2",{class:!0});var Qs=a(z);se=r(Qs,"A",{id:!0,class:!0,href:!0});var Fi=a(se);Ce=r(Fi,"SPAN",{});var qi=a(Ce);$(ye.$$.fragment,qi),qi.forEach(o),Fi.forEach(o),hn=f(Qs),xe=r(Qs,"SPAN",{});var Di=a(xe);un=l(Di,"Overview"),Di.forEach(o),Qs.forEach(o),Dt=f(t),Q=r(t,"P",{});var Ys=a(Q);Fe=l(Ys,"The CLIP model was proposed in "),Le=r(Ys,"A",{href:!0,rel:!0});var Oi=a(Le);Ot=l(Oi,"Learning Transferable Visual Models From Natural Language Supervision"),Oi.forEach(o),K=l(Ys,` by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh,
Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. CLIP
(Contrastive Language-Image Pre-Training) is a neural network trained on a variety of (image, text) pairs. It can be
instructed in natural language to predict the most relevant text snippet, given an image, without directly optimizing
for the task, similarly to the zero-shot capabilities of GPT-2 and 3.`),Ys.forEach(o),Y=f(t),qe=r(t,"P",{});var Ai=a(qe);He=l(Ai,"The abstract from the paper is the following:"),Ai.forEach(o),At=f(t),De=r(t,"P",{});var Vi=a(De);ke=r(Vi,"EM",{});var Ni=a(ke);gn=l(Ni,`State-of-the-art computer vision systems are trained to predict a fixed set of predetermined object categories. This
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
model weights at this https URL.`),Ni.forEach(o),Vi.forEach(o),Vt=f(t),O=r(t,"H2",{class:!0});var er=a(O);re=r(er,"A",{id:!0,class:!0,href:!0});var Si=a(re);we=r(Si,"SPAN",{});var Wi=a(we);$(Me.$$.fragment,Wi),Wi.forEach(o),Si.forEach(o),_n=f(er),Ee=r(er,"SPAN",{});var Bi=a(Ee);vn=l(Bi,"Usage"),Bi.forEach(o),er.forEach(o),Nt=f(t),ee=r(t,"P",{});var Ui=a(ee);bn=l(Ui,`CLIP is a multi-modal vision and language model. It can be used for image-text similarity and for zero-shot image
classification. CLIP uses a ViT like transformer to get visual features and a causal language model to get the text
features. Both the text and visual features are then projected to a latent space with identical dimension. The dot
product between the projected image and text features is then used as a similar score.`),Ui.forEach(o),Oe=f(t),ae=r(t,"P",{});var tr=a(ae);w=l(tr,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image. The authors
also add absolute position embeddings, and feed the resulting sequence of vectors to a standard Transformer encoder.
The `),j=r(tr,"A",{href:!0});var Ri=a(j);St=l(Ri,"CLIPFeatureExtractor"),Ri.forEach(o),nr=l(tr," can be used to resize (or rescale) and normalize images for the model."),tr.forEach(o),Pn=f(t),M=r(t,"P",{});var V=a(M);sr=l(V,"The "),Ke=r(V,"A",{href:!0});var Hi=a(Ke);rr=l(Hi,"CLIPTokenizer"),Hi.forEach(o),Ae=l(V," is used to encode the text. The "),ie=r(V,"A",{href:!0});var Ki=a(ie);ar=l(Ki,"CLIPProcessor"),Ki.forEach(o),ir=l(V,` wraps
`),le=r(V,"A",{href:!0});var Gi=a(le);lr=l(Gi,"CLIPFeatureExtractor"),Gi.forEach(o),dr=l(V," and "),Ve=r(V,"A",{href:!0});var Ji=a(Ve);cr=l(Ji,"CLIPTokenizer"),Ji.forEach(o),Ld=l(V,` into a single instance to both
encode the text and prepare the images. The following example shows how to get the image-text similarity scores using
`),pr=r(V,"A",{href:!0});var Xi=a(pr);kd=l(Xi,"CLIPProcessor"),Xi.forEach(o),wd=l(V," and "),mr=r(V,"A",{href:!0});var Zi=a(mr);Md=l(Zi,"CLIPModel"),Zi.forEach(o),Ed=l(V,"."),V.forEach(o),tl=f(t),$($n.$$.fragment,t),ol=f(t),Ne=r(t,"P",{});var qt=a(Ne);zd=l(qt,"This model was contributed by "),In=r(qt,"A",{href:!0,rel:!0});var Qi=a(In);jd=l(Qi,"valhalla"),Qi.forEach(o),Fd=l(qt,". The original code can be found "),Tn=r(qt,"A",{href:!0,rel:!0});var Yi=a(Tn);qd=l(Yi,"here"),Yi.forEach(o),Dd=l(qt,"."),qt.forEach(o),nl=f(t),Ge=r(t,"H2",{class:!0});var or=a(Ge);Wt=r(or,"A",{id:!0,class:!0,href:!0});var yu=a(Wt);fa=r(yu,"SPAN",{});var xu=a(fa);$(Cn.$$.fragment,xu),xu.forEach(o),yu.forEach(o),Od=f(or),ha=r(or,"SPAN",{});var Lu=a(ha);Ad=l(Lu,"CLIPConfig"),Lu.forEach(o),or.forEach(o),sl=f(t),te=r(t,"DIV",{class:!0});var Ko=a(te);$(yn.$$.fragment,Ko),Vd=f(Ko),Bt=r(Ko,"P",{});var el=a(Bt);fr=r(el,"A",{href:!0});var ku=a(fr);Nd=l(ku,"CLIPConfig"),ku.forEach(o),Sd=l(el," is the configuration class to store the configuration of a "),hr=r(el,"A",{href:!0});var wu=a(hr);Wd=l(wu,"CLIPModel"),wu.forEach(o),Bd=l(el,`. It is used to instantiate
CLIP model according to the specified arguments, defining the text model and vision model configs.`),el.forEach(o),Ud=f(Ko),Je=r(Ko,"P",{});var Gr=a(Je);Rd=l(Gr,"Configuration objects inherit from "),ur=r(Gr,"A",{href:!0});var Mu=a(ur);Hd=l(Mu,"PretrainedConfig"),Mu.forEach(o),Kd=l(Gr,` and can be used to control the model outputs. Read the
documentation from `),gr=r(Gr,"A",{href:!0});var Eu=a(gr);Gd=l(Eu,"PretrainedConfig"),Eu.forEach(o),Jd=l(Gr," for more information."),Gr.forEach(o),Xd=f(Ko),Ut=r(Ko,"DIV",{class:!0});var Dl=a(Ut);$(xn.$$.fragment,Dl),Zd=f(Dl),Ln=r(Dl,"P",{});var Ol=a(Ln);Qd=l(Ol,"Instantiate a "),_r=r(Ol,"A",{href:!0});var zu=a(_r);Yd=l(zu,"CLIPConfig"),zu.forEach(o),ec=l(Ol,` (or a derived class) from clip text model configuration and clip vision model
configuration.`),Ol.forEach(o),Dl.forEach(o),Ko.forEach(o),rl=f(t),Xe=r(t,"H2",{class:!0});var Al=a(Xe);Rt=r(Al,"A",{id:!0,class:!0,href:!0});var ju=a(Rt);ua=r(ju,"SPAN",{});var Fu=a(ua);$(kn.$$.fragment,Fu),Fu.forEach(o),ju.forEach(o),tc=f(Al),ga=r(Al,"SPAN",{});var qu=a(ga);oc=l(qu,"CLIPTextConfig"),qu.forEach(o),Al.forEach(o),al=f(t),oe=r(t,"DIV",{class:!0});var Go=a(oe);$(wn.$$.fragment,Go),nc=f(Go),Ze=r(Go,"P",{});var Jr=a(Ze);sc=l(Jr,"This is the configuration class to store the configuration of a "),vr=r(Jr,"A",{href:!0});var Du=a(vr);rc=l(Du,"CLIPModel"),Du.forEach(o),ac=l(Jr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),Mn=r(Jr,"A",{href:!0,rel:!0});var Ou=a(Mn);ic=l(Ou,"openai/clip-vit-base-patch32"),Ou.forEach(o),lc=l(Jr," architecture."),Jr.forEach(o),dc=f(Go),Qe=r(Go,"P",{});var Xr=a(Qe);cc=l(Xr,"Configuration objects inherit from "),br=r(Xr,"A",{href:!0});var Au=a(br);pc=l(Au,"PretrainedConfig"),Au.forEach(o),mc=l(Xr,` and can be used to control the model outputs. Read the
documentation from `),Pr=r(Xr,"A",{href:!0});var Vu=a(Pr);fc=l(Vu,"PretrainedConfig"),Vu.forEach(o),hc=l(Xr," for more information."),Xr.forEach(o),uc=f(Go),$(Ht.$$.fragment,Go),Go.forEach(o),il=f(t),Ye=r(t,"H2",{class:!0});var Vl=a(Ye);Kt=r(Vl,"A",{id:!0,class:!0,href:!0});var Nu=a(Kt);_a=r(Nu,"SPAN",{});var Su=a(_a);$(En.$$.fragment,Su),Su.forEach(o),Nu.forEach(o),gc=f(Vl),va=r(Vl,"SPAN",{});var Wu=a(va);_c=l(Wu,"CLIPVisionConfig"),Wu.forEach(o),Vl.forEach(o),ll=f(t),ne=r(t,"DIV",{class:!0});var Jo=a(ne);$(zn.$$.fragment,Jo),vc=f(Jo),et=r(Jo,"P",{});var Zr=a(et);bc=l(Zr,"This is the configuration class to store the configuration of a "),$r=r(Zr,"A",{href:!0});var Bu=a($r);Pc=l(Bu,"CLIPModel"),Bu.forEach(o),$c=l(Zr,`. It is used to instantiate an CLIP
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the CLIP
`),jn=r(Zr,"A",{href:!0,rel:!0});var Uu=a(jn);Ic=l(Uu,"openai/clip-vit-base-patch32"),Uu.forEach(o),Tc=l(Zr," architecture."),Zr.forEach(o),Cc=f(Jo),tt=r(Jo,"P",{});var Qr=a(tt);yc=l(Qr,"Configuration objects inherit from "),Ir=r(Qr,"A",{href:!0});var Ru=a(Ir);xc=l(Ru,"PretrainedConfig"),Ru.forEach(o),Lc=l(Qr,` and can be used to control the model outputs. Read the
documentation from `),Tr=r(Qr,"A",{href:!0});var Hu=a(Tr);kc=l(Hu,"PretrainedConfig"),Hu.forEach(o),wc=l(Qr," for more information."),Qr.forEach(o),Mc=f(Jo),$(Gt.$$.fragment,Jo),Jo.forEach(o),dl=f(t),ot=r(t,"H2",{class:!0});var Nl=a(ot);Jt=r(Nl,"A",{id:!0,class:!0,href:!0});var Ku=a(Jt);ba=r(Ku,"SPAN",{});var Gu=a(ba);$(Fn.$$.fragment,Gu),Gu.forEach(o),Ku.forEach(o),Ec=f(Nl),Pa=r(Nl,"SPAN",{});var Ju=a(Pa);zc=l(Ju,"CLIPTokenizer"),Ju.forEach(o),Nl.forEach(o),cl=f(t),F=r(t,"DIV",{class:!0});var J=a(F);$(qn.$$.fragment,J),jc=f(J),$a=r(J,"P",{});var Xu=a($a);Fc=l(Xu,"Construct a CLIP tokenizer. Based on byte-level Byte-Pair-Encoding."),Xu.forEach(o),qc=f(J),Dn=r(J,"P",{});var Sl=a(Dn);Dc=l(Sl,"This tokenizer inherits from "),Cr=r(Sl,"A",{href:!0});var Zu=a(Cr);Oc=l(Zu,"PreTrainedTokenizer"),Zu.forEach(o),Ac=l(Sl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sl.forEach(o),Vc=f(J),de=r(J,"DIV",{class:!0});var Xo=a(de);$(On.$$.fragment,Xo),Nc=f(Xo),Ia=r(Xo,"P",{});var Qu=a(Ia);Sc=l(Qu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),Qu.forEach(o),Wc=f(Xo),Ta=r(Xo,"UL",{});var Yu=a(Ta);yr=r(Yu,"LI",{});var Tu=a(yr);Bc=l(Tu,"single sequence: "),Ca=r(Tu,"CODE",{});var eg=a(Ca);Uc=l(eg,"<|startoftext|> X <|endoftext|>"),eg.forEach(o),Tu.forEach(o),Yu.forEach(o),Rc=f(Xo),ya=r(Xo,"P",{});var tg=a(ya);Hc=l(tg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),tg.forEach(o),Xo.forEach(o),Kc=f(J),Xt=r(J,"DIV",{class:!0});var Wl=a(Xt);$(An.$$.fragment,Wl),Gc=f(Wl),Vn=r(Wl,"P",{});var Bl=a(Vn);Jc=l(Bl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xa=r(Bl,"CODE",{});var og=a(xa);Xc=l(og,"prepare_for_model"),og.forEach(o),Zc=l(Bl," method."),Bl.forEach(o),Wl.forEach(o),Qc=f(J),Zt=r(J,"DIV",{class:!0});var Ul=a(Zt);$(Nn.$$.fragment,Ul),Yc=f(Ul),La=r(Ul,"P",{});var ng=a(La);ep=l(ng,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),ng.forEach(o),Ul.forEach(o),tp=f(J),xr=r(J,"DIV",{class:!0});var sg=a(xr);$(Sn.$$.fragment,sg),sg.forEach(o),J.forEach(o),pl=f(t),nt=r(t,"H2",{class:!0});var Rl=a(nt);Qt=r(Rl,"A",{id:!0,class:!0,href:!0});var rg=a(Qt);ka=r(rg,"SPAN",{});var ag=a(ka);$(Wn.$$.fragment,ag),ag.forEach(o),rg.forEach(o),op=f(Rl),wa=r(Rl,"SPAN",{});var ig=a(wa);np=l(ig,"CLIPTokenizerFast"),ig.forEach(o),Rl.forEach(o),ml=f(t),B=r(t,"DIV",{class:!0});var Se=a(B);$(Bn.$$.fragment,Se),sp=f(Se),Un=r(Se,"P",{});var Hl=a(Un);rp=l(Hl,"Construct a \u201Cfast\u201D CLIP tokenizer (backed by HuggingFace\u2019s "),Ma=r(Hl,"EM",{});var lg=a(Ma);ap=l(lg,"tokenizers"),lg.forEach(o),ip=l(Hl,` library). Based on byte-level
Byte-Pair-Encoding.`),Hl.forEach(o),lp=f(Se),Rn=r(Se,"P",{});var Kl=a(Rn);dp=l(Kl,"This tokenizer inherits from "),Lr=r(Kl,"A",{href:!0});var dg=a(Lr);cp=l(dg,"PreTrainedTokenizerFast"),dg.forEach(o),pp=l(Kl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kl.forEach(o),mp=f(Se),ce=r(Se,"DIV",{class:!0});var Zo=a(ce);$(Hn.$$.fragment,Zo),fp=f(Zo),Ea=r(Zo,"P",{});var cg=a(Ea);hp=l(cg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A CLIP sequence has the following format:`),cg.forEach(o),up=f(Zo),za=r(Zo,"UL",{});var pg=a(za);kr=r(pg,"LI",{});var Cu=a(kr);gp=l(Cu,"single sequence: "),ja=r(Cu,"CODE",{});var mg=a(ja);_p=l(mg,"<|startoftext|> X <|endoftext|>"),mg.forEach(o),Cu.forEach(o),pg.forEach(o),vp=f(Zo),Fa=r(Zo,"P",{});var fg=a(Fa);bp=l(fg,"Pairs of sequences are not the expected use case, but they will be handled without a separator."),fg.forEach(o),Zo.forEach(o),Pp=f(Se),Yt=r(Se,"DIV",{class:!0});var Gl=a(Yt);$(Kn.$$.fragment,Gl),$p=f(Gl),qa=r(Gl,"P",{});var hg=a(qa);Ip=l(hg,`Create a mask from the two sequences passed. CLIP does not make use of token type ids, therefore a list of
zeros is returned.`),hg.forEach(o),Gl.forEach(o),Se.forEach(o),fl=f(t),st=r(t,"H2",{class:!0});var Jl=a(st);eo=r(Jl,"A",{id:!0,class:!0,href:!0});var ug=a(eo);Da=r(ug,"SPAN",{});var gg=a(Da);$(Gn.$$.fragment,gg),gg.forEach(o),ug.forEach(o),Tp=f(Jl),Oa=r(Jl,"SPAN",{});var _g=a(Oa);Cp=l(_g,"CLIPFeatureExtractor"),_g.forEach(o),Jl.forEach(o),hl=f(t),U=r(t,"DIV",{class:!0});var We=a(U);$(Jn.$$.fragment,We),yp=f(We),Aa=r(We,"P",{});var vg=a(Aa);xp=l(vg,"Constructs a CLIP feature extractor."),vg.forEach(o),Lp=f(We),Xn=r(We,"P",{});var Xl=a(Xn);kp=l(Xl,"This feature extractor inherits from "),wr=r(Xl,"A",{href:!0});var bg=a(wr);wp=l(bg,"FeatureExtractionMixin"),bg.forEach(o),Mp=l(Xl,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Xl.forEach(o),Ep=f(We),to=r(We,"DIV",{class:!0});var Zl=a(to);$(Zn.$$.fragment,Zl),zp=f(Zl),Qn=r(Zl,"P",{});var Ql=a(Qn);jp=l(Ql,"Crops "),Va=r(Ql,"CODE",{});var Pg=a(Va);Fp=l(Pg,"image"),Pg.forEach(o),qp=l(Ql,` to the given size using a center crop. Note that if the image is too small to be cropped to the
size is given, it will be padded (so the returned result has the size asked).`),Ql.forEach(o),Zl.forEach(o),Dp=f(We),oo=r(We,"DIV",{class:!0});var Yl=a(oo);$(Yn.$$.fragment,Yl),Op=f(Yl),rt=r(Yl,"P",{});var Yr=a(rt);Ap=l(Yr,"Resizes "),Na=r(Yr,"CODE",{});var $g=a(Na);Vp=l($g,"image"),$g.forEach(o),Np=l(Yr,". Note that this will trigger a conversion of "),Sa=r(Yr,"CODE",{});var Ig=a(Sa);Sp=l(Ig,"image"),Ig.forEach(o),Wp=l(Yr," to a PIL Image."),Yr.forEach(o),Yl.forEach(o),We.forEach(o),ul=f(t),at=r(t,"H2",{class:!0});var ed=a(at);no=r(ed,"A",{id:!0,class:!0,href:!0});var Tg=a(no);Wa=r(Tg,"SPAN",{});var Cg=a(Wa);$(es.$$.fragment,Cg),Cg.forEach(o),Tg.forEach(o),Bp=f(ed),Ba=r(ed,"SPAN",{});var yg=a(Ba);Up=l(yg,"CLIPProcessor"),yg.forEach(o),ed.forEach(o),gl=f(t),R=r(t,"DIV",{class:!0});var Be=a(R);$(ts.$$.fragment,Be),Rp=f(Be),Ua=r(Be,"P",{});var xg=a(Ua);Hp=l(xg,"Constructs a CLIP processor which wraps a CLIP feature extractor and a CLIP tokenizer into a single processor."),xg.forEach(o),Kp=f(Be),G=r(Be,"P",{});var je=a(G);Mr=r(je,"A",{href:!0});var Lg=a(Mr);Gp=l(Lg,"CLIPProcessor"),Lg.forEach(o),Jp=l(je," offers all the functionalities of "),Er=r(je,"A",{href:!0});var kg=a(Er);Xp=l(kg,"CLIPFeatureExtractor"),kg.forEach(o),Zp=l(je," and "),zr=r(je,"A",{href:!0});var wg=a(zr);Qp=l(wg,"CLIPTokenizerFast"),wg.forEach(o),Yp=l(je,`. See the
`),Ra=r(je,"CODE",{});var Mg=a(Ra);em=l(Mg,"__call__()"),Mg.forEach(o),tm=l(je," and "),jr=r(je,"A",{href:!0});var Eg=a(jr);om=l(Eg,"decode()"),Eg.forEach(o),nm=l(je," for more information."),je.forEach(o),sm=f(Be),so=r(Be,"DIV",{class:!0});var td=a(so);$(os.$$.fragment,td),rm=f(td),ns=r(td,"P",{});var od=a(ns);am=l(od,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),Fr=r(od,"A",{href:!0});var zg=a(Fr);im=l(zg,"batch_decode()"),zg.forEach(o),lm=l(od,`. Please
refer to the docstring of this method for more information.`),od.forEach(o),td.forEach(o),dm=f(Be),ro=r(Be,"DIV",{class:!0});var nd=a(ro);$(ss.$$.fragment,nd),cm=f(nd),rs=r(nd,"P",{});var sd=a(rs);pm=l(sd,"This method forwards all its arguments to CLIPTokenizerFast\u2019s "),qr=r(sd,"A",{href:!0});var jg=a(qr);mm=l(jg,"decode()"),jg.forEach(o),fm=l(sd,`. Please refer to
the docstring of this method for more information.`),sd.forEach(o),nd.forEach(o),Be.forEach(o),_l=f(t),it=r(t,"H2",{class:!0});var rd=a(it);ao=r(rd,"A",{id:!0,class:!0,href:!0});var Fg=a(ao);Ha=r(Fg,"SPAN",{});var qg=a(Ha);$(as.$$.fragment,qg),qg.forEach(o),Fg.forEach(o),hm=f(rd),Ka=r(rd,"SPAN",{});var Dg=a(Ka);um=l(Dg,"CLIPModel"),Dg.forEach(o),rd.forEach(o),vl=f(t),H=r(t,"DIV",{class:!0});var Ue=a(H);$(is.$$.fragment,Ue),gm=f(Ue),ls=r(Ue,"P",{});var ad=a(ls);_m=l(ad,"This model is a PyTorch "),ds=r(ad,"A",{href:!0,rel:!0});var Og=a(ds);vm=l(Og,"torch.nn.Module"),Og.forEach(o),bm=l(ad,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ad.forEach(o),Pm=f(Ue),pe=r(Ue,"DIV",{class:!0});var Qo=a(pe);$(cs.$$.fragment,Qo),$m=f(Qo),lt=r(Qo,"P",{});var ea=a(lt);Im=l(ea,"The "),Dr=r(ea,"A",{href:!0});var Ag=a(Dr);Tm=l(Ag,"CLIPModel"),Ag.forEach(o),Cm=l(ea," forward method, overrides the "),Ga=r(ea,"CODE",{});var Vg=a(Ga);ym=l(Vg,"__call__"),Vg.forEach(o),xm=l(ea," special method."),ea.forEach(o),Lm=f(Qo),$(io.$$.fragment,Qo),km=f(Qo),$(lo.$$.fragment,Qo),Qo.forEach(o),wm=f(Ue),me=r(Ue,"DIV",{class:!0});var Yo=a(me);$(ps.$$.fragment,Yo),Mm=f(Yo),dt=r(Yo,"P",{});var ta=a(dt);Em=l(ta,"The "),Or=r(ta,"A",{href:!0});var Ng=a(Or);zm=l(Ng,"CLIPModel"),Ng.forEach(o),jm=l(ta," forward method, overrides the "),Ja=r(ta,"CODE",{});var Sg=a(Ja);Fm=l(Sg,"__call__"),Sg.forEach(o),qm=l(ta," special method."),ta.forEach(o),Dm=f(Yo),$(co.$$.fragment,Yo),Om=f(Yo),$(po.$$.fragment,Yo),Yo.forEach(o),Am=f(Ue),fe=r(Ue,"DIV",{class:!0});var en=a(fe);$(ms.$$.fragment,en),Vm=f(en),ct=r(en,"P",{});var oa=a(ct);Nm=l(oa,"The "),Ar=r(oa,"A",{href:!0});var Wg=a(Ar);Sm=l(Wg,"CLIPModel"),Wg.forEach(o),Wm=l(oa," forward method, overrides the "),Xa=r(oa,"CODE",{});var Bg=a(Xa);Bm=l(Bg,"__call__"),Bg.forEach(o),Um=l(oa," special method."),oa.forEach(o),Rm=f(en),$(mo.$$.fragment,en),Hm=f(en),$(fo.$$.fragment,en),en.forEach(o),Ue.forEach(o),bl=f(t),pt=r(t,"H2",{class:!0});var id=a(pt);ho=r(id,"A",{id:!0,class:!0,href:!0});var Ug=a(ho);Za=r(Ug,"SPAN",{});var Rg=a(Za);$(fs.$$.fragment,Rg),Rg.forEach(o),Ug.forEach(o),Km=f(id),Qa=r(id,"SPAN",{});var Hg=a(Qa);Gm=l(Hg,"CLIPTextModel"),Hg.forEach(o),id.forEach(o),Pl=f(t),mt=r(t,"DIV",{class:!0});var ld=a(mt);$(hs.$$.fragment,ld),Jm=f(ld),he=r(ld,"DIV",{class:!0});var tn=a(he);$(us.$$.fragment,tn),Xm=f(tn),ft=r(tn,"P",{});var na=a(ft);Zm=l(na,"The "),Vr=r(na,"A",{href:!0});var Kg=a(Vr);Qm=l(Kg,"CLIPTextModel"),Kg.forEach(o),Ym=l(na," forward method, overrides the "),Ya=r(na,"CODE",{});var Gg=a(Ya);ef=l(Gg,"__call__"),Gg.forEach(o),tf=l(na," special method."),na.forEach(o),of=f(tn),$(uo.$$.fragment,tn),nf=f(tn),$(go.$$.fragment,tn),tn.forEach(o),ld.forEach(o),$l=f(t),ht=r(t,"H2",{class:!0});var dd=a(ht);_o=r(dd,"A",{id:!0,class:!0,href:!0});var Jg=a(_o);ei=r(Jg,"SPAN",{});var Xg=a(ei);$(gs.$$.fragment,Xg),Xg.forEach(o),Jg.forEach(o),sf=f(dd),ti=r(dd,"SPAN",{});var Zg=a(ti);rf=l(Zg,"CLIPVisionModel"),Zg.forEach(o),dd.forEach(o),Il=f(t),ut=r(t,"DIV",{class:!0});var cd=a(ut);$(_s.$$.fragment,cd),af=f(cd),ue=r(cd,"DIV",{class:!0});var on=a(ue);$(vs.$$.fragment,on),lf=f(on),gt=r(on,"P",{});var sa=a(gt);df=l(sa,"The "),Nr=r(sa,"A",{href:!0});var Qg=a(Nr);cf=l(Qg,"CLIPVisionModel"),Qg.forEach(o),pf=l(sa," forward method, overrides the "),oi=r(sa,"CODE",{});var Yg=a(oi);mf=l(Yg,"__call__"),Yg.forEach(o),ff=l(sa," special method."),sa.forEach(o),hf=f(on),$(vo.$$.fragment,on),uf=f(on),$(bo.$$.fragment,on),on.forEach(o),cd.forEach(o),Tl=f(t),_t=r(t,"H2",{class:!0});var pd=a(_t);Po=r(pd,"A",{id:!0,class:!0,href:!0});var e_=a(Po);ni=r(e_,"SPAN",{});var t_=a(ni);$(bs.$$.fragment,t_),t_.forEach(o),e_.forEach(o),gf=f(pd),si=r(pd,"SPAN",{});var o_=a(si);_f=l(o_,"TFCLIPModel"),o_.forEach(o),pd.forEach(o),Cl=f(t),q=r(t,"DIV",{class:!0});var X=a(q);$(Ps.$$.fragment,X),vf=f(X),$s=r(X,"P",{});var md=a($s);bf=l(md,"This model inherits from "),Sr=r(md,"A",{href:!0});var n_=a(Sr);Pf=l(n_,"TFPreTrainedModel"),n_.forEach(o),$f=l(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(o),If=f(X),Is=r(X,"P",{});var fd=a(Is);Tf=l(fd,"This model is also a "),Ts=r(fd,"A",{href:!0,rel:!0});var s_=a(Ts);Cf=l(s_,"tf.keras.Model"),s_.forEach(o),yf=l(fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fd.forEach(o),xf=f(X),$($o.$$.fragment,X),Lf=f(X),ge=r(X,"DIV",{class:!0});var nn=a(ge);$(Cs.$$.fragment,nn),kf=f(nn),vt=r(nn,"P",{});var ra=a(vt);wf=l(ra,"The "),Wr=r(ra,"A",{href:!0});var r_=a(Wr);Mf=l(r_,"TFCLIPModel"),r_.forEach(o),Ef=l(ra," forward method, overrides the "),ri=r(ra,"CODE",{});var a_=a(ri);zf=l(a_,"__call__"),a_.forEach(o),jf=l(ra," special method."),ra.forEach(o),Ff=f(nn),$(Io.$$.fragment,nn),qf=f(nn),$(To.$$.fragment,nn),nn.forEach(o),Df=f(X),_e=r(X,"DIV",{class:!0});var sn=a(_e);$(ys.$$.fragment,sn),Of=f(sn),bt=r(sn,"P",{});var aa=a(bt);Af=l(aa,"The "),Br=r(aa,"A",{href:!0});var i_=a(Br);Vf=l(i_,"TFCLIPModel"),i_.forEach(o),Nf=l(aa," forward method, overrides the "),ai=r(aa,"CODE",{});var l_=a(ai);Sf=l(l_,"__call__"),l_.forEach(o),Wf=l(aa," special method."),aa.forEach(o),Bf=f(sn),$(Co.$$.fragment,sn),Uf=f(sn),$(yo.$$.fragment,sn),sn.forEach(o),Rf=f(X),ve=r(X,"DIV",{class:!0});var rn=a(ve);$(xs.$$.fragment,rn),Hf=f(rn),Pt=r(rn,"P",{});var ia=a(Pt);Kf=l(ia,"The "),Ur=r(ia,"A",{href:!0});var d_=a(Ur);Gf=l(d_,"TFCLIPModel"),d_.forEach(o),Jf=l(ia," forward method, overrides the "),ii=r(ia,"CODE",{});var c_=a(ii);Xf=l(c_,"__call__"),c_.forEach(o),Zf=l(ia," special method."),ia.forEach(o),Qf=f(rn),$(xo.$$.fragment,rn),Yf=f(rn),$(Lo.$$.fragment,rn),rn.forEach(o),X.forEach(o),yl=f(t),$t=r(t,"H2",{class:!0});var hd=a($t);ko=r(hd,"A",{id:!0,class:!0,href:!0});var p_=a(ko);li=r(p_,"SPAN",{});var m_=a(li);$(Ls.$$.fragment,m_),m_.forEach(o),p_.forEach(o),eh=f(hd),di=r(hd,"SPAN",{});var f_=a(di);th=l(f_,"TFCLIPTextModel"),f_.forEach(o),hd.forEach(o),xl=f(t),It=r(t,"DIV",{class:!0});var ud=a(It);$(ks.$$.fragment,ud),oh=f(ud),be=r(ud,"DIV",{class:!0});var an=a(be);$(ws.$$.fragment,an),nh=f(an),Tt=r(an,"P",{});var la=a(Tt);sh=l(la,"The "),Rr=r(la,"A",{href:!0});var h_=a(Rr);rh=l(h_,"TFCLIPTextModel"),h_.forEach(o),ah=l(la," forward method, overrides the "),ci=r(la,"CODE",{});var u_=a(ci);ih=l(u_,"__call__"),u_.forEach(o),lh=l(la," special method."),la.forEach(o),dh=f(an),$(wo.$$.fragment,an),ch=f(an),$(Mo.$$.fragment,an),an.forEach(o),ud.forEach(o),Ll=f(t),Ct=r(t,"H2",{class:!0});var gd=a(Ct);Eo=r(gd,"A",{id:!0,class:!0,href:!0});var g_=a(Eo);pi=r(g_,"SPAN",{});var __=a(pi);$(Ms.$$.fragment,__),__.forEach(o),g_.forEach(o),ph=f(gd),mi=r(gd,"SPAN",{});var v_=a(mi);mh=l(v_,"TFCLIPVisionModel"),v_.forEach(o),gd.forEach(o),kl=f(t),yt=r(t,"DIV",{class:!0});var _d=a(yt);$(Es.$$.fragment,_d),fh=f(_d),Pe=r(_d,"DIV",{class:!0});var ln=a(Pe);$(zs.$$.fragment,ln),hh=f(ln),xt=r(ln,"P",{});var da=a(xt);uh=l(da,"The "),Hr=r(da,"A",{href:!0});var b_=a(Hr);gh=l(b_,"TFCLIPVisionModel"),b_.forEach(o),_h=l(da," forward method, overrides the "),fi=r(da,"CODE",{});var P_=a(fi);vh=l(P_,"__call__"),P_.forEach(o),bh=l(da," special method."),da.forEach(o),Ph=f(ln),$(zo.$$.fragment,ln),$h=f(ln),$(jo.$$.fragment,ln),ln.forEach(o),_d.forEach(o),wl=f(t),Lt=r(t,"H2",{class:!0});var vd=a(Lt);Fo=r(vd,"A",{id:!0,class:!0,href:!0});var $_=a(Fo);hi=r($_,"SPAN",{});var I_=a(hi);$(js.$$.fragment,I_),I_.forEach(o),$_.forEach(o),Ih=f(vd),ui=r(vd,"SPAN",{});var T_=a(ui);Th=l(T_,"FlaxCLIPModel"),T_.forEach(o),vd.forEach(o),Ml=f(t),E=r(t,"DIV",{class:!0});var W=a(E);$(Fs.$$.fragment,W),Ch=f(W),qs=r(W,"P",{});var bd=a(qs);yh=l(bd,"This model inherits from "),Kr=r(bd,"A",{href:!0});var C_=a(Kr);xh=l(C_,"FlaxPreTrainedModel"),C_.forEach(o),Lh=l(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bd.forEach(o),kh=f(W),Ds=r(W,"P",{});var Pd=a(Ds);wh=l(Pd,"This model is also a Flax Linen "),Os=r(Pd,"A",{href:!0,rel:!0});var y_=a(Os);Mh=l(y_,"flax.linen.Module"),y_.forEach(o),Eh=l(Pd,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pd.forEach(o),zh=f(W),gi=r(W,"P",{});var x_=a(gi);jh=l(x_,"Finally, this model supports inherent JAX features such as:"),x_.forEach(o),Fh=f(W),ze=r(W,"UL",{});var dn=a(ze);_i=r(dn,"LI",{});var L_=a(_i);As=r(L_,"A",{href:!0,rel:!0});var k_=a(As);qh=l(k_,"Just-In-Time (JIT) compilation"),k_.forEach(o),L_.forEach(o),Dh=f(dn),vi=r(dn,"LI",{});var w_=a(vi);Vs=r(w_,"A",{href:!0,rel:!0});var M_=a(Vs);Oh=l(M_,"Automatic Differentiation"),M_.forEach(o),w_.forEach(o),Ah=f(dn),bi=r(dn,"LI",{});var E_=a(bi);Ns=r(E_,"A",{href:!0,rel:!0});var z_=a(Ns);Vh=l(z_,"Vectorization"),z_.forEach(o),E_.forEach(o),Nh=f(dn),Pi=r(dn,"LI",{});var j_=a(Pi);Ss=r(j_,"A",{href:!0,rel:!0});var F_=a(Ss);Sh=l(F_,"Parallelization"),F_.forEach(o),j_.forEach(o),dn.forEach(o),Wh=f(W),$e=r(W,"DIV",{class:!0});var cn=a($e);$(Ws.$$.fragment,cn),Bh=f(cn),kt=r(cn,"P",{});var ca=a(kt);Uh=l(ca,"The "),$i=r(ca,"CODE",{});var q_=a($i);Rh=l(q_,"FlaxCLIPPreTrainedModel"),q_.forEach(o),Hh=l(ca," forward method, overrides the "),Ii=r(ca,"CODE",{});var D_=a(Ii);Kh=l(D_,"__call__"),D_.forEach(o),Gh=l(ca," special method."),ca.forEach(o),Jh=f(cn),$(qo.$$.fragment,cn),Xh=f(cn),$(Do.$$.fragment,cn),cn.forEach(o),Zh=f(W),Oo=r(W,"DIV",{class:!0});var $d=a(Oo);$(Bs.$$.fragment,$d),Qh=f($d),$(Ao.$$.fragment,$d),$d.forEach(o),Yh=f(W),Vo=r(W,"DIV",{class:!0});var Id=a(Vo);$(Us.$$.fragment,Id),eu=f(Id),$(No.$$.fragment,Id),Id.forEach(o),W.forEach(o),El=f(t),wt=r(t,"H2",{class:!0});var Td=a(wt);So=r(Td,"A",{id:!0,class:!0,href:!0});var O_=a(So);Ti=r(O_,"SPAN",{});var A_=a(Ti);$(Rs.$$.fragment,A_),A_.forEach(o),O_.forEach(o),tu=f(Td),Ci=r(Td,"SPAN",{});var V_=a(Ci);ou=l(V_,"FlaxCLIPTextModel"),V_.forEach(o),Td.forEach(o),zl=f(t),Mt=r(t,"DIV",{class:!0});var Cd=a(Mt);$(Hs.$$.fragment,Cd),nu=f(Cd),Ie=r(Cd,"DIV",{class:!0});var pn=a(Ie);$(Ks.$$.fragment,pn),su=f(pn),Et=r(pn,"P",{});var pa=a(Et);ru=l(pa,"The "),yi=r(pa,"CODE",{});var N_=a(yi);au=l(N_,"FlaxCLIPTextPreTrainedModel"),N_.forEach(o),iu=l(pa," forward method, overrides the "),xi=r(pa,"CODE",{});var S_=a(xi);lu=l(S_,"__call__"),S_.forEach(o),du=l(pa," special method."),pa.forEach(o),cu=f(pn),$(Wo.$$.fragment,pn),pu=f(pn),$(Bo.$$.fragment,pn),pn.forEach(o),Cd.forEach(o),jl=f(t),zt=r(t,"H2",{class:!0});var yd=a(zt);Uo=r(yd,"A",{id:!0,class:!0,href:!0});var W_=a(Uo);Li=r(W_,"SPAN",{});var B_=a(Li);$(Gs.$$.fragment,B_),B_.forEach(o),W_.forEach(o),mu=f(yd),ki=r(yd,"SPAN",{});var U_=a(ki);fu=l(U_,"FlaxCLIPVisionModel"),U_.forEach(o),yd.forEach(o),Fl=f(t),jt=r(t,"DIV",{class:!0});var xd=a(jt);$(Js.$$.fragment,xd),hu=f(xd),Te=r(xd,"DIV",{class:!0});var mn=a(Te);$(Xs.$$.fragment,mn),uu=f(mn),Ft=r(mn,"P",{});var ma=a(Ft);gu=l(ma,"The "),wi=r(ma,"CODE",{});var R_=a(wi);_u=l(R_,"FlaxCLIPVisionPreTrainedModel"),R_.forEach(o),vu=l(ma," forward method, overrides the "),Mi=r(ma,"CODE",{});var H_=a(Mi);bu=l(H_,"__call__"),H_.forEach(o),Pu=l(ma," special method."),ma.forEach(o),$u=f(mn),$(Ro.$$.fragment,mn),Iu=f(mn),$(Ho.$$.fragment,mn),mn.forEach(o),xd.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Mv)),h(p,"id","clip"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#clip"),h(u,"class","relative group"),h(se,"id","overview"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#overview"),h(z,"class","relative group"),h(Le,"href","https://arxiv.org/abs/2103.00020"),h(Le,"rel","nofollow"),h(re,"id","usage"),h(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(re,"href","#usage"),h(O,"class","relative group"),h(j,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(Ke,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(ie,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(le,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(Ve,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer"),h(pr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(mr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(In,"href","https://huggingface.co/valhalla"),h(In,"rel","nofollow"),h(Tn,"href","https://github.com/openai/CLIP"),h(Tn,"rel","nofollow"),h(Wt,"id","transformers.CLIPConfig"),h(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wt,"href","#transformers.CLIPConfig"),h(Ge,"class","relative group"),h(fr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(hr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(ur,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(gr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(_r,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPConfig"),h(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rt,"id","transformers.CLIPTextConfig"),h(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rt,"href","#transformers.CLIPTextConfig"),h(Xe,"class","relative group"),h(vr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(Mn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(Mn,"rel","nofollow"),h(br,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Pr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kt,"id","transformers.CLIPVisionConfig"),h(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Kt,"href","#transformers.CLIPVisionConfig"),h(Ye,"class","relative group"),h($r,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(jn,"href","https://huggingface.co/openai/clip-vit-base-patch32"),h(jn,"rel","nofollow"),h(Ir,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Tr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jt,"id","transformers.CLIPTokenizer"),h(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jt,"href","#transformers.CLIPTokenizer"),h(ot,"class","relative group"),h(Cr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qt,"id","transformers.CLIPTokenizerFast"),h(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qt,"href","#transformers.CLIPTokenizerFast"),h(nt,"class","relative group"),h(Lr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(eo,"id","transformers.CLIPFeatureExtractor"),h(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(eo,"href","#transformers.CLIPFeatureExtractor"),h(st,"class","relative group"),h(wr,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(no,"id","transformers.CLIPProcessor"),h(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(no,"href","#transformers.CLIPProcessor"),h(at,"class","relative group"),h(Mr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor"),h(Er,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor"),h(zr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizerFast"),h(jr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPProcessor.decode"),h(Fr,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),h(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qr,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),h(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ao,"id","transformers.CLIPModel"),h(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ao,"href","#transformers.CLIPModel"),h(it,"class","relative group"),h(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ds,"rel","nofollow"),h(Dr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Or,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ar,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPModel"),h(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ho,"id","transformers.CLIPTextModel"),h(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ho,"href","#transformers.CLIPTextModel"),h(pt,"class","relative group"),h(Vr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPTextModel"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_o,"id","transformers.CLIPVisionModel"),h(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_o,"href","#transformers.CLIPVisionModel"),h(ht,"class","relative group"),h(Nr,"href","/docs/transformers/main/en/model_doc/clip#transformers.CLIPVisionModel"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Po,"id","transformers.TFCLIPModel"),h(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Po,"href","#transformers.TFCLIPModel"),h(_t,"class","relative group"),h(Sr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ts,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ts,"rel","nofollow"),h(Wr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Br,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ur,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPModel"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ko,"id","transformers.TFCLIPTextModel"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.TFCLIPTextModel"),h($t,"class","relative group"),h(Rr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPTextModel"),h(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Eo,"id","transformers.TFCLIPVisionModel"),h(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Eo,"href","#transformers.TFCLIPVisionModel"),h(Ct,"class","relative group"),h(Hr,"href","/docs/transformers/main/en/model_doc/clip#transformers.TFCLIPVisionModel"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fo,"id","transformers.FlaxCLIPModel"),h(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fo,"href","#transformers.FlaxCLIPModel"),h(Lt,"class","relative group"),h(Kr,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Os,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Os,"rel","nofollow"),h(As,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(As,"rel","nofollow"),h(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Vs,"rel","nofollow"),h(Ns,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Ns,"rel","nofollow"),h(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Ss,"rel","nofollow"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(So,"id","transformers.FlaxCLIPTextModel"),h(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(So,"href","#transformers.FlaxCLIPTextModel"),h(wt,"class","relative group"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Uo,"id","transformers.FlaxCLIPVisionModel"),h(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Uo,"href","#transformers.FlaxCLIPVisionModel"),h(zt,"class","relative group"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),v(t,b,g),v(t,u,g),e(u,p),e(p,_),I(n,_,null),e(u,c),e(u,L),e(L,fn),v(t,Re,g),v(t,z,g),e(z,se),e(se,Ce),I(ye,Ce,null),e(z,hn),e(z,xe),e(xe,un),v(t,Dt,g),v(t,Q,g),e(Q,Fe),e(Q,Le),e(Le,Ot),e(Q,K),v(t,Y,g),v(t,qe,g),e(qe,He),v(t,At,g),v(t,De,g),e(De,ke),e(ke,gn),v(t,Vt,g),v(t,O,g),e(O,re),e(re,we),I(Me,we,null),e(O,_n),e(O,Ee),e(Ee,vn),v(t,Nt,g),v(t,ee,g),e(ee,bn),v(t,Oe,g),v(t,ae,g),e(ae,w),e(ae,j),e(j,St),e(ae,nr),v(t,Pn,g),v(t,M,g),e(M,sr),e(M,Ke),e(Ke,rr),e(M,Ae),e(M,ie),e(ie,ar),e(M,ir),e(M,le),e(le,lr),e(M,dr),e(M,Ve),e(Ve,cr),e(M,Ld),e(M,pr),e(pr,kd),e(M,wd),e(M,mr),e(mr,Md),e(M,Ed),v(t,tl,g),I($n,t,g),v(t,ol,g),v(t,Ne,g),e(Ne,zd),e(Ne,In),e(In,jd),e(Ne,Fd),e(Ne,Tn),e(Tn,qd),e(Ne,Dd),v(t,nl,g),v(t,Ge,g),e(Ge,Wt),e(Wt,fa),I(Cn,fa,null),e(Ge,Od),e(Ge,ha),e(ha,Ad),v(t,sl,g),v(t,te,g),I(yn,te,null),e(te,Vd),e(te,Bt),e(Bt,fr),e(fr,Nd),e(Bt,Sd),e(Bt,hr),e(hr,Wd),e(Bt,Bd),e(te,Ud),e(te,Je),e(Je,Rd),e(Je,ur),e(ur,Hd),e(Je,Kd),e(Je,gr),e(gr,Gd),e(Je,Jd),e(te,Xd),e(te,Ut),I(xn,Ut,null),e(Ut,Zd),e(Ut,Ln),e(Ln,Qd),e(Ln,_r),e(_r,Yd),e(Ln,ec),v(t,rl,g),v(t,Xe,g),e(Xe,Rt),e(Rt,ua),I(kn,ua,null),e(Xe,tc),e(Xe,ga),e(ga,oc),v(t,al,g),v(t,oe,g),I(wn,oe,null),e(oe,nc),e(oe,Ze),e(Ze,sc),e(Ze,vr),e(vr,rc),e(Ze,ac),e(Ze,Mn),e(Mn,ic),e(Ze,lc),e(oe,dc),e(oe,Qe),e(Qe,cc),e(Qe,br),e(br,pc),e(Qe,mc),e(Qe,Pr),e(Pr,fc),e(Qe,hc),e(oe,uc),I(Ht,oe,null),v(t,il,g),v(t,Ye,g),e(Ye,Kt),e(Kt,_a),I(En,_a,null),e(Ye,gc),e(Ye,va),e(va,_c),v(t,ll,g),v(t,ne,g),I(zn,ne,null),e(ne,vc),e(ne,et),e(et,bc),e(et,$r),e($r,Pc),e(et,$c),e(et,jn),e(jn,Ic),e(et,Tc),e(ne,Cc),e(ne,tt),e(tt,yc),e(tt,Ir),e(Ir,xc),e(tt,Lc),e(tt,Tr),e(Tr,kc),e(tt,wc),e(ne,Mc),I(Gt,ne,null),v(t,dl,g),v(t,ot,g),e(ot,Jt),e(Jt,ba),I(Fn,ba,null),e(ot,Ec),e(ot,Pa),e(Pa,zc),v(t,cl,g),v(t,F,g),I(qn,F,null),e(F,jc),e(F,$a),e($a,Fc),e(F,qc),e(F,Dn),e(Dn,Dc),e(Dn,Cr),e(Cr,Oc),e(Dn,Ac),e(F,Vc),e(F,de),I(On,de,null),e(de,Nc),e(de,Ia),e(Ia,Sc),e(de,Wc),e(de,Ta),e(Ta,yr),e(yr,Bc),e(yr,Ca),e(Ca,Uc),e(de,Rc),e(de,ya),e(ya,Hc),e(F,Kc),e(F,Xt),I(An,Xt,null),e(Xt,Gc),e(Xt,Vn),e(Vn,Jc),e(Vn,xa),e(xa,Xc),e(Vn,Zc),e(F,Qc),e(F,Zt),I(Nn,Zt,null),e(Zt,Yc),e(Zt,La),e(La,ep),e(F,tp),e(F,xr),I(Sn,xr,null),v(t,pl,g),v(t,nt,g),e(nt,Qt),e(Qt,ka),I(Wn,ka,null),e(nt,op),e(nt,wa),e(wa,np),v(t,ml,g),v(t,B,g),I(Bn,B,null),e(B,sp),e(B,Un),e(Un,rp),e(Un,Ma),e(Ma,ap),e(Un,ip),e(B,lp),e(B,Rn),e(Rn,dp),e(Rn,Lr),e(Lr,cp),e(Rn,pp),e(B,mp),e(B,ce),I(Hn,ce,null),e(ce,fp),e(ce,Ea),e(Ea,hp),e(ce,up),e(ce,za),e(za,kr),e(kr,gp),e(kr,ja),e(ja,_p),e(ce,vp),e(ce,Fa),e(Fa,bp),e(B,Pp),e(B,Yt),I(Kn,Yt,null),e(Yt,$p),e(Yt,qa),e(qa,Ip),v(t,fl,g),v(t,st,g),e(st,eo),e(eo,Da),I(Gn,Da,null),e(st,Tp),e(st,Oa),e(Oa,Cp),v(t,hl,g),v(t,U,g),I(Jn,U,null),e(U,yp),e(U,Aa),e(Aa,xp),e(U,Lp),e(U,Xn),e(Xn,kp),e(Xn,wr),e(wr,wp),e(Xn,Mp),e(U,Ep),e(U,to),I(Zn,to,null),e(to,zp),e(to,Qn),e(Qn,jp),e(Qn,Va),e(Va,Fp),e(Qn,qp),e(U,Dp),e(U,oo),I(Yn,oo,null),e(oo,Op),e(oo,rt),e(rt,Ap),e(rt,Na),e(Na,Vp),e(rt,Np),e(rt,Sa),e(Sa,Sp),e(rt,Wp),v(t,ul,g),v(t,at,g),e(at,no),e(no,Wa),I(es,Wa,null),e(at,Bp),e(at,Ba),e(Ba,Up),v(t,gl,g),v(t,R,g),I(ts,R,null),e(R,Rp),e(R,Ua),e(Ua,Hp),e(R,Kp),e(R,G),e(G,Mr),e(Mr,Gp),e(G,Jp),e(G,Er),e(Er,Xp),e(G,Zp),e(G,zr),e(zr,Qp),e(G,Yp),e(G,Ra),e(Ra,em),e(G,tm),e(G,jr),e(jr,om),e(G,nm),e(R,sm),e(R,so),I(os,so,null),e(so,rm),e(so,ns),e(ns,am),e(ns,Fr),e(Fr,im),e(ns,lm),e(R,dm),e(R,ro),I(ss,ro,null),e(ro,cm),e(ro,rs),e(rs,pm),e(rs,qr),e(qr,mm),e(rs,fm),v(t,_l,g),v(t,it,g),e(it,ao),e(ao,Ha),I(as,Ha,null),e(it,hm),e(it,Ka),e(Ka,um),v(t,vl,g),v(t,H,g),I(is,H,null),e(H,gm),e(H,ls),e(ls,_m),e(ls,ds),e(ds,vm),e(ls,bm),e(H,Pm),e(H,pe),I(cs,pe,null),e(pe,$m),e(pe,lt),e(lt,Im),e(lt,Dr),e(Dr,Tm),e(lt,Cm),e(lt,Ga),e(Ga,ym),e(lt,xm),e(pe,Lm),I(io,pe,null),e(pe,km),I(lo,pe,null),e(H,wm),e(H,me),I(ps,me,null),e(me,Mm),e(me,dt),e(dt,Em),e(dt,Or),e(Or,zm),e(dt,jm),e(dt,Ja),e(Ja,Fm),e(dt,qm),e(me,Dm),I(co,me,null),e(me,Om),I(po,me,null),e(H,Am),e(H,fe),I(ms,fe,null),e(fe,Vm),e(fe,ct),e(ct,Nm),e(ct,Ar),e(Ar,Sm),e(ct,Wm),e(ct,Xa),e(Xa,Bm),e(ct,Um),e(fe,Rm),I(mo,fe,null),e(fe,Hm),I(fo,fe,null),v(t,bl,g),v(t,pt,g),e(pt,ho),e(ho,Za),I(fs,Za,null),e(pt,Km),e(pt,Qa),e(Qa,Gm),v(t,Pl,g),v(t,mt,g),I(hs,mt,null),e(mt,Jm),e(mt,he),I(us,he,null),e(he,Xm),e(he,ft),e(ft,Zm),e(ft,Vr),e(Vr,Qm),e(ft,Ym),e(ft,Ya),e(Ya,ef),e(ft,tf),e(he,of),I(uo,he,null),e(he,nf),I(go,he,null),v(t,$l,g),v(t,ht,g),e(ht,_o),e(_o,ei),I(gs,ei,null),e(ht,sf),e(ht,ti),e(ti,rf),v(t,Il,g),v(t,ut,g),I(_s,ut,null),e(ut,af),e(ut,ue),I(vs,ue,null),e(ue,lf),e(ue,gt),e(gt,df),e(gt,Nr),e(Nr,cf),e(gt,pf),e(gt,oi),e(oi,mf),e(gt,ff),e(ue,hf),I(vo,ue,null),e(ue,uf),I(bo,ue,null),v(t,Tl,g),v(t,_t,g),e(_t,Po),e(Po,ni),I(bs,ni,null),e(_t,gf),e(_t,si),e(si,_f),v(t,Cl,g),v(t,q,g),I(Ps,q,null),e(q,vf),e(q,$s),e($s,bf),e($s,Sr),e(Sr,Pf),e($s,$f),e(q,If),e(q,Is),e(Is,Tf),e(Is,Ts),e(Ts,Cf),e(Is,yf),e(q,xf),I($o,q,null),e(q,Lf),e(q,ge),I(Cs,ge,null),e(ge,kf),e(ge,vt),e(vt,wf),e(vt,Wr),e(Wr,Mf),e(vt,Ef),e(vt,ri),e(ri,zf),e(vt,jf),e(ge,Ff),I(Io,ge,null),e(ge,qf),I(To,ge,null),e(q,Df),e(q,_e),I(ys,_e,null),e(_e,Of),e(_e,bt),e(bt,Af),e(bt,Br),e(Br,Vf),e(bt,Nf),e(bt,ai),e(ai,Sf),e(bt,Wf),e(_e,Bf),I(Co,_e,null),e(_e,Uf),I(yo,_e,null),e(q,Rf),e(q,ve),I(xs,ve,null),e(ve,Hf),e(ve,Pt),e(Pt,Kf),e(Pt,Ur),e(Ur,Gf),e(Pt,Jf),e(Pt,ii),e(ii,Xf),e(Pt,Zf),e(ve,Qf),I(xo,ve,null),e(ve,Yf),I(Lo,ve,null),v(t,yl,g),v(t,$t,g),e($t,ko),e(ko,li),I(Ls,li,null),e($t,eh),e($t,di),e(di,th),v(t,xl,g),v(t,It,g),I(ks,It,null),e(It,oh),e(It,be),I(ws,be,null),e(be,nh),e(be,Tt),e(Tt,sh),e(Tt,Rr),e(Rr,rh),e(Tt,ah),e(Tt,ci),e(ci,ih),e(Tt,lh),e(be,dh),I(wo,be,null),e(be,ch),I(Mo,be,null),v(t,Ll,g),v(t,Ct,g),e(Ct,Eo),e(Eo,pi),I(Ms,pi,null),e(Ct,ph),e(Ct,mi),e(mi,mh),v(t,kl,g),v(t,yt,g),I(Es,yt,null),e(yt,fh),e(yt,Pe),I(zs,Pe,null),e(Pe,hh),e(Pe,xt),e(xt,uh),e(xt,Hr),e(Hr,gh),e(xt,_h),e(xt,fi),e(fi,vh),e(xt,bh),e(Pe,Ph),I(zo,Pe,null),e(Pe,$h),I(jo,Pe,null),v(t,wl,g),v(t,Lt,g),e(Lt,Fo),e(Fo,hi),I(js,hi,null),e(Lt,Ih),e(Lt,ui),e(ui,Th),v(t,Ml,g),v(t,E,g),I(Fs,E,null),e(E,Ch),e(E,qs),e(qs,yh),e(qs,Kr),e(Kr,xh),e(qs,Lh),e(E,kh),e(E,Ds),e(Ds,wh),e(Ds,Os),e(Os,Mh),e(Ds,Eh),e(E,zh),e(E,gi),e(gi,jh),e(E,Fh),e(E,ze),e(ze,_i),e(_i,As),e(As,qh),e(ze,Dh),e(ze,vi),e(vi,Vs),e(Vs,Oh),e(ze,Ah),e(ze,bi),e(bi,Ns),e(Ns,Vh),e(ze,Nh),e(ze,Pi),e(Pi,Ss),e(Ss,Sh),e(E,Wh),e(E,$e),I(Ws,$e,null),e($e,Bh),e($e,kt),e(kt,Uh),e(kt,$i),e($i,Rh),e(kt,Hh),e(kt,Ii),e(Ii,Kh),e(kt,Gh),e($e,Jh),I(qo,$e,null),e($e,Xh),I(Do,$e,null),e(E,Zh),e(E,Oo),I(Bs,Oo,null),e(Oo,Qh),I(Ao,Oo,null),e(E,Yh),e(E,Vo),I(Us,Vo,null),e(Vo,eu),I(No,Vo,null),v(t,El,g),v(t,wt,g),e(wt,So),e(So,Ti),I(Rs,Ti,null),e(wt,tu),e(wt,Ci),e(Ci,ou),v(t,zl,g),v(t,Mt,g),I(Hs,Mt,null),e(Mt,nu),e(Mt,Ie),I(Ks,Ie,null),e(Ie,su),e(Ie,Et),e(Et,ru),e(Et,yi),e(yi,au),e(Et,iu),e(Et,xi),e(xi,lu),e(Et,du),e(Ie,cu),I(Wo,Ie,null),e(Ie,pu),I(Bo,Ie,null),v(t,jl,g),v(t,zt,g),e(zt,Uo),e(Uo,Li),I(Gs,Li,null),e(zt,mu),e(zt,ki),e(ki,fu),v(t,Fl,g),v(t,jt,g),I(Js,jt,null),e(jt,hu),e(jt,Te),I(Xs,Te,null),e(Te,uu),e(Te,Ft),e(Ft,gu),e(Ft,wi),e(wi,_u),e(Ft,vu),e(Ft,Mi),e(Mi,bu),e(Ft,Pu),e(Te,$u),I(Ro,Te,null),e(Te,Iu),I(Ho,Te,null),ql=!0},p(t,[g]){const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:t}),Ht.$set(Zs);const Ei={};g&2&&(Ei.$$scope={dirty:g,ctx:t}),Gt.$set(Ei);const zi={};g&2&&(zi.$$scope={dirty:g,ctx:t}),io.$set(zi);const ji={};g&2&&(ji.$$scope={dirty:g,ctx:t}),lo.$set(ji);const Qs={};g&2&&(Qs.$$scope={dirty:g,ctx:t}),co.$set(Qs);const Fi={};g&2&&(Fi.$$scope={dirty:g,ctx:t}),po.$set(Fi);const qi={};g&2&&(qi.$$scope={dirty:g,ctx:t}),mo.$set(qi);const Di={};g&2&&(Di.$$scope={dirty:g,ctx:t}),fo.$set(Di);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:t}),uo.$set(Ys);const Oi={};g&2&&(Oi.$$scope={dirty:g,ctx:t}),go.$set(Oi);const Ai={};g&2&&(Ai.$$scope={dirty:g,ctx:t}),vo.$set(Ai);const Vi={};g&2&&(Vi.$$scope={dirty:g,ctx:t}),bo.$set(Vi);const Ni={};g&2&&(Ni.$$scope={dirty:g,ctx:t}),$o.$set(Ni);const er={};g&2&&(er.$$scope={dirty:g,ctx:t}),Io.$set(er);const Si={};g&2&&(Si.$$scope={dirty:g,ctx:t}),To.$set(Si);const Wi={};g&2&&(Wi.$$scope={dirty:g,ctx:t}),Co.$set(Wi);const Bi={};g&2&&(Bi.$$scope={dirty:g,ctx:t}),yo.$set(Bi);const Ui={};g&2&&(Ui.$$scope={dirty:g,ctx:t}),xo.$set(Ui);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:t}),Lo.$set(tr);const Ri={};g&2&&(Ri.$$scope={dirty:g,ctx:t}),wo.$set(Ri);const V={};g&2&&(V.$$scope={dirty:g,ctx:t}),Mo.$set(V);const Hi={};g&2&&(Hi.$$scope={dirty:g,ctx:t}),zo.$set(Hi);const Ki={};g&2&&(Ki.$$scope={dirty:g,ctx:t}),jo.$set(Ki);const Gi={};g&2&&(Gi.$$scope={dirty:g,ctx:t}),qo.$set(Gi);const Ji={};g&2&&(Ji.$$scope={dirty:g,ctx:t}),Do.$set(Ji);const Xi={};g&2&&(Xi.$$scope={dirty:g,ctx:t}),Ao.$set(Xi);const Zi={};g&2&&(Zi.$$scope={dirty:g,ctx:t}),No.$set(Zi);const qt={};g&2&&(qt.$$scope={dirty:g,ctx:t}),Wo.$set(qt);const Qi={};g&2&&(Qi.$$scope={dirty:g,ctx:t}),Bo.$set(Qi);const Yi={};g&2&&(Yi.$$scope={dirty:g,ctx:t}),Ro.$set(Yi);const or={};g&2&&(or.$$scope={dirty:g,ctx:t}),Ho.$set(or)},i(t){ql||(T(n.$$.fragment,t),T(ye.$$.fragment,t),T(Me.$$.fragment,t),T($n.$$.fragment,t),T(Cn.$$.fragment,t),T(yn.$$.fragment,t),T(xn.$$.fragment,t),T(kn.$$.fragment,t),T(wn.$$.fragment,t),T(Ht.$$.fragment,t),T(En.$$.fragment,t),T(zn.$$.fragment,t),T(Gt.$$.fragment,t),T(Fn.$$.fragment,t),T(qn.$$.fragment,t),T(On.$$.fragment,t),T(An.$$.fragment,t),T(Nn.$$.fragment,t),T(Sn.$$.fragment,t),T(Wn.$$.fragment,t),T(Bn.$$.fragment,t),T(Hn.$$.fragment,t),T(Kn.$$.fragment,t),T(Gn.$$.fragment,t),T(Jn.$$.fragment,t),T(Zn.$$.fragment,t),T(Yn.$$.fragment,t),T(es.$$.fragment,t),T(ts.$$.fragment,t),T(os.$$.fragment,t),T(ss.$$.fragment,t),T(as.$$.fragment,t),T(is.$$.fragment,t),T(cs.$$.fragment,t),T(io.$$.fragment,t),T(lo.$$.fragment,t),T(ps.$$.fragment,t),T(co.$$.fragment,t),T(po.$$.fragment,t),T(ms.$$.fragment,t),T(mo.$$.fragment,t),T(fo.$$.fragment,t),T(fs.$$.fragment,t),T(hs.$$.fragment,t),T(us.$$.fragment,t),T(uo.$$.fragment,t),T(go.$$.fragment,t),T(gs.$$.fragment,t),T(_s.$$.fragment,t),T(vs.$$.fragment,t),T(vo.$$.fragment,t),T(bo.$$.fragment,t),T(bs.$$.fragment,t),T(Ps.$$.fragment,t),T($o.$$.fragment,t),T(Cs.$$.fragment,t),T(Io.$$.fragment,t),T(To.$$.fragment,t),T(ys.$$.fragment,t),T(Co.$$.fragment,t),T(yo.$$.fragment,t),T(xs.$$.fragment,t),T(xo.$$.fragment,t),T(Lo.$$.fragment,t),T(Ls.$$.fragment,t),T(ks.$$.fragment,t),T(ws.$$.fragment,t),T(wo.$$.fragment,t),T(Mo.$$.fragment,t),T(Ms.$$.fragment,t),T(Es.$$.fragment,t),T(zs.$$.fragment,t),T(zo.$$.fragment,t),T(jo.$$.fragment,t),T(js.$$.fragment,t),T(Fs.$$.fragment,t),T(Ws.$$.fragment,t),T(qo.$$.fragment,t),T(Do.$$.fragment,t),T(Bs.$$.fragment,t),T(Ao.$$.fragment,t),T(Us.$$.fragment,t),T(No.$$.fragment,t),T(Rs.$$.fragment,t),T(Hs.$$.fragment,t),T(Ks.$$.fragment,t),T(Wo.$$.fragment,t),T(Bo.$$.fragment,t),T(Gs.$$.fragment,t),T(Js.$$.fragment,t),T(Xs.$$.fragment,t),T(Ro.$$.fragment,t),T(Ho.$$.fragment,t),ql=!0)},o(t){C(n.$$.fragment,t),C(ye.$$.fragment,t),C(Me.$$.fragment,t),C($n.$$.fragment,t),C(Cn.$$.fragment,t),C(yn.$$.fragment,t),C(xn.$$.fragment,t),C(kn.$$.fragment,t),C(wn.$$.fragment,t),C(Ht.$$.fragment,t),C(En.$$.fragment,t),C(zn.$$.fragment,t),C(Gt.$$.fragment,t),C(Fn.$$.fragment,t),C(qn.$$.fragment,t),C(On.$$.fragment,t),C(An.$$.fragment,t),C(Nn.$$.fragment,t),C(Sn.$$.fragment,t),C(Wn.$$.fragment,t),C(Bn.$$.fragment,t),C(Hn.$$.fragment,t),C(Kn.$$.fragment,t),C(Gn.$$.fragment,t),C(Jn.$$.fragment,t),C(Zn.$$.fragment,t),C(Yn.$$.fragment,t),C(es.$$.fragment,t),C(ts.$$.fragment,t),C(os.$$.fragment,t),C(ss.$$.fragment,t),C(as.$$.fragment,t),C(is.$$.fragment,t),C(cs.$$.fragment,t),C(io.$$.fragment,t),C(lo.$$.fragment,t),C(ps.$$.fragment,t),C(co.$$.fragment,t),C(po.$$.fragment,t),C(ms.$$.fragment,t),C(mo.$$.fragment,t),C(fo.$$.fragment,t),C(fs.$$.fragment,t),C(hs.$$.fragment,t),C(us.$$.fragment,t),C(uo.$$.fragment,t),C(go.$$.fragment,t),C(gs.$$.fragment,t),C(_s.$$.fragment,t),C(vs.$$.fragment,t),C(vo.$$.fragment,t),C(bo.$$.fragment,t),C(bs.$$.fragment,t),C(Ps.$$.fragment,t),C($o.$$.fragment,t),C(Cs.$$.fragment,t),C(Io.$$.fragment,t),C(To.$$.fragment,t),C(ys.$$.fragment,t),C(Co.$$.fragment,t),C(yo.$$.fragment,t),C(xs.$$.fragment,t),C(xo.$$.fragment,t),C(Lo.$$.fragment,t),C(Ls.$$.fragment,t),C(ks.$$.fragment,t),C(ws.$$.fragment,t),C(wo.$$.fragment,t),C(Mo.$$.fragment,t),C(Ms.$$.fragment,t),C(Es.$$.fragment,t),C(zs.$$.fragment,t),C(zo.$$.fragment,t),C(jo.$$.fragment,t),C(js.$$.fragment,t),C(Fs.$$.fragment,t),C(Ws.$$.fragment,t),C(qo.$$.fragment,t),C(Do.$$.fragment,t),C(Bs.$$.fragment,t),C(Ao.$$.fragment,t),C(Us.$$.fragment,t),C(No.$$.fragment,t),C(Rs.$$.fragment,t),C(Hs.$$.fragment,t),C(Ks.$$.fragment,t),C(Wo.$$.fragment,t),C(Bo.$$.fragment,t),C(Gs.$$.fragment,t),C(Js.$$.fragment,t),C(Xs.$$.fragment,t),C(Ro.$$.fragment,t),C(Ho.$$.fragment,t),ql=!1},d(t){o(d),t&&o(b),t&&o(u),y(n),t&&o(Re),t&&o(z),y(ye),t&&o(Dt),t&&o(Q),t&&o(Y),t&&o(qe),t&&o(At),t&&o(De),t&&o(Vt),t&&o(O),y(Me),t&&o(Nt),t&&o(ee),t&&o(Oe),t&&o(ae),t&&o(Pn),t&&o(M),t&&o(tl),y($n,t),t&&o(ol),t&&o(Ne),t&&o(nl),t&&o(Ge),y(Cn),t&&o(sl),t&&o(te),y(yn),y(xn),t&&o(rl),t&&o(Xe),y(kn),t&&o(al),t&&o(oe),y(wn),y(Ht),t&&o(il),t&&o(Ye),y(En),t&&o(ll),t&&o(ne),y(zn),y(Gt),t&&o(dl),t&&o(ot),y(Fn),t&&o(cl),t&&o(F),y(qn),y(On),y(An),y(Nn),y(Sn),t&&o(pl),t&&o(nt),y(Wn),t&&o(ml),t&&o(B),y(Bn),y(Hn),y(Kn),t&&o(fl),t&&o(st),y(Gn),t&&o(hl),t&&o(U),y(Jn),y(Zn),y(Yn),t&&o(ul),t&&o(at),y(es),t&&o(gl),t&&o(R),y(ts),y(os),y(ss),t&&o(_l),t&&o(it),y(as),t&&o(vl),t&&o(H),y(is),y(cs),y(io),y(lo),y(ps),y(co),y(po),y(ms),y(mo),y(fo),t&&o(bl),t&&o(pt),y(fs),t&&o(Pl),t&&o(mt),y(hs),y(us),y(uo),y(go),t&&o($l),t&&o(ht),y(gs),t&&o(Il),t&&o(ut),y(_s),y(vs),y(vo),y(bo),t&&o(Tl),t&&o(_t),y(bs),t&&o(Cl),t&&o(q),y(Ps),y($o),y(Cs),y(Io),y(To),y(ys),y(Co),y(yo),y(xs),y(xo),y(Lo),t&&o(yl),t&&o($t),y(Ls),t&&o(xl),t&&o(It),y(ks),y(ws),y(wo),y(Mo),t&&o(Ll),t&&o(Ct),y(Ms),t&&o(kl),t&&o(yt),y(Es),y(zs),y(zo),y(jo),t&&o(wl),t&&o(Lt),y(js),t&&o(Ml),t&&o(E),y(Fs),y(Ws),y(qo),y(Do),y(Bs),y(Ao),y(Us),y(No),t&&o(El),t&&o(wt),y(Rs),t&&o(zl),t&&o(Mt),y(Hs),y(Ks),y(Wo),y(Bo),t&&o(jl),t&&o(zt),y(Gs),t&&o(Fl),t&&o(jt),y(Js),y(Xs),y(Ro),y(Ho)}}}const Mv={local:"clip",sections:[{local:"overview",title:"Overview"},{local:"usage",title:"Usage"},{local:"transformers.CLIPConfig",title:"CLIPConfig"},{local:"transformers.CLIPTextConfig",title:"CLIPTextConfig"},{local:"transformers.CLIPVisionConfig",title:"CLIPVisionConfig"},{local:"transformers.CLIPTokenizer",title:"CLIPTokenizer"},{local:"transformers.CLIPTokenizerFast",title:"CLIPTokenizerFast"},{local:"transformers.CLIPFeatureExtractor",title:"CLIPFeatureExtractor"},{local:"transformers.CLIPProcessor",title:"CLIPProcessor"},{local:"transformers.CLIPModel",title:"CLIPModel"},{local:"transformers.CLIPTextModel",title:"CLIPTextModel"},{local:"transformers.CLIPVisionModel",title:"CLIPVisionModel"},{local:"transformers.TFCLIPModel",title:"TFCLIPModel"},{local:"transformers.TFCLIPTextModel",title:"TFCLIPTextModel"},{local:"transformers.TFCLIPVisionModel",title:"TFCLIPVisionModel"},{local:"transformers.FlaxCLIPModel",title:"FlaxCLIPModel"},{local:"transformers.FlaxCLIPTextModel",title:"FlaxCLIPTextModel"},{local:"transformers.FlaxCLIPVisionModel",title:"FlaxCLIPVisionModel"}],title:"CLIP"};function Ev(x){return Z_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Av extends K_{constructor(d){super();G_(this,d,Ev,wv,J_,{})}}export{Av as default,Mv as metadata};
