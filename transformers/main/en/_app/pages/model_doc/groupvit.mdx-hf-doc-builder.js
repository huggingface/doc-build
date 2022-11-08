import{S as tp,i as op,s as np,e as a,k as h,w as y,t as r,M as rp,c as i,d as o,m as g,a as l,x as $,h as s,b as m,G as e,g as v,y as b,q as w,o as V,B as x,v as sp,L as ae}from"../../chunks/vendor-hf-doc-builder.js";import{T as ue}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ap(k){let d,T,u,c,f;return c=new ie({props:{code:`from transformers import GroupViTTextConfig, GroupViTTextModel

# Initializing a GroupViTTextModel with nvidia/groupvit-gcc-yfcc style configuration
configuration = GroupViTTextConfig()

model = GroupViTTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTTextConfig, GroupViTTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTTextModel with nvidia/groupvit-gcc-yfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),T=r("Example:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Example:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function ip(k){let d,T,u,c,f;return c=new ie({props:{code:`from transformers import GroupViTVisionConfig, GroupViTVisionModel

# Initializing a GroupViTVisionModel with nvidia/groupvit-gcc-yfcc style configuration
configuration = GroupViTVisionConfig()

model = GroupViTVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTVisionConfig, GroupViTVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTVisionModel with nvidia/groupvit-gcc-yfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),T=r("Example:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Example:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function lp(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function dp(k){let d,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
processor = AutoProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="pt", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function pp(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function cp(k){let d,T,u,c,f;return c=new ie({props:{code:`from transformers import CLIPTokenizer, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gcc-yfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function up(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function mp(k){let d,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
processor = AutoProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function fp(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function hp(k){let d,T,u,c,f;return c=new ie({props:{code:`from transformers import CLIPTokenizer, GroupViTTextModel

tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gcc-yfcc")
model = GroupViTTextModel.from_pretrained("nvidia/groupvit-gcc-yfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, GroupViTTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTTextModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function gp(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function _p(k){let d,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, GroupViTVisionModel

processor = AutoProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")
model = GroupViTVisionModel.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="pt")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, GroupViTVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTVisionModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function Tp(k){let d,T,u,c,f,n,p,G,ao,ke,E,H,le,de,io,pe,lo,dt,F,fe,ce,pt,A,I,po,Ge,ct,he,Me,ut,ge,D,co,_e,Te,uo,ve,K,S,ye,je,Ee,mo;return{c(){d=a("p"),T=r("TF 2.0 models accepts two formats as inputs:"),u=h(),c=a("ul"),f=a("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),p=h(),G=a("li"),ao=r("having all inputs as a list, tuple or dict in the first positional arguments."),ke=h(),E=a("p"),H=r("This second option is useful when using "),le=a("code"),de=r("tf.keras.Model.fit"),io=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),pe=a("code"),lo=r("model(inputs)"),dt=r("."),F=h(),fe=a("p"),ce=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pt=h(),A=a("ul"),I=a("li"),po=r("a single Tensor with "),Ge=a("code"),ct=r("input_ids"),he=r(" only and nothing else: "),Me=a("code"),ut=r("model(input_ids)"),ge=h(),D=a("li"),co=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Te=r("model([input_ids, attention_mask])"),uo=r(" or "),ve=a("code"),K=r("model([input_ids, attention_mask, token_type_ids])"),S=h(),ye=a("li"),je=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Ee=a("code"),mo=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(M){d=i(M,"P",{});var q=l(d);T=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),u=g(M),c=i(M,"UL",{});var mt=l(c);f=i(mt,"LI",{});var pn=l(f);n=s(pn,"having all inputs as keyword arguments (like PyTorch models), or"),pn.forEach(o),p=g(mt),G=i(mt,"LI",{});var R=l(G);ao=s(R,"having all inputs as a list, tuple or dict in the first positional arguments."),R.forEach(o),mt.forEach(o),ke=g(M),E=i(M,"P",{});var $e=l(E);H=s($e,"This second option is useful when using "),le=i($e,"CODE",{});var be=l(le);de=s(be,"tf.keras.Model.fit"),be.forEach(o),io=s($e,` method which currently requires having all the
tensors in the first argument of the model call function: `),pe=i($e,"CODE",{});var cn=l(pe);lo=s(cn,"model(inputs)"),cn.forEach(o),dt=s($e,"."),$e.forEach(o),F=g(M),fe=i(M,"P",{});var un=l(fe);ce=s(un,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),un.forEach(o),pt=g(M),A=i(M,"UL",{});var O=l(A);I=i(O,"LI",{});var Pe=l(I);po=s(Pe,"a single Tensor with "),Ge=i(Pe,"CODE",{});var mn=l(Ge);ct=s(mn,"input_ids"),mn.forEach(o),he=s(Pe," only and nothing else: "),Me=i(Pe,"CODE",{});var fo=l(Me);ut=s(fo,"model(input_ids)"),fo.forEach(o),Pe.forEach(o),ge=g(O),D=i(O,"LI",{});var j=l(D);co=s(j,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=i(j,"CODE",{});var fn=l(_e);Te=s(fn,"model([input_ids, attention_mask])"),fn.forEach(o),uo=s(j," or "),ve=i(j,"CODE",{});var we=l(ve);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(o),j.forEach(o),S=g(O),ye=i(O,"LI",{});var ho=l(ye);je=s(ho,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Ee=i(ho,"CODE",{});var hn=l(Ee);mo=s(hn,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),hn.forEach(o),ho.forEach(o),O.forEach(o)},m(M,q){v(M,d,q),e(d,T),v(M,u,q),v(M,c,q),e(c,f),e(f,n),e(c,p),e(c,G),e(G,ao),v(M,ke,q),v(M,E,q),e(E,H),e(E,le),e(le,de),e(E,io),e(E,pe),e(pe,lo),e(E,dt),v(M,F,q),v(M,fe,q),e(fe,ce),v(M,pt,q),v(M,A,q),e(A,I),e(I,po),e(I,Ge),e(Ge,ct),e(I,he),e(I,Me),e(Me,ut),e(A,ge),e(A,D),e(D,co),e(D,_e),e(_e,Te),e(D,uo),e(D,ve),e(ve,K),e(A,S),e(A,ye),e(ye,je),e(ye,Ee),e(Ee,mo)},d(M){M&&o(d),M&&o(u),M&&o(c),M&&o(ke),M&&o(E),M&&o(F),M&&o(fe),M&&o(pt),M&&o(A)}}}function vp(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function yp(k){let d,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, TFGroupViTModel
import tensorflow as tf

model = TFGroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
processor = AutoProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="tf", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = tf.math.softmax(logits_per_image, axis=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFGroupViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.math.softmax(logits_per_image, axis=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function $p(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function bp(k){let d,T,u,c,f;return c=new ie({props:{code:`from transformers import CLIPTokenizer, TFGroupViTModel

model = TFGroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gcc-yfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFGroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function wp(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function Vp(k){let d,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, TFGroupViTModel

model = TFGroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
processor = AutoProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

image_features = model.get_image_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFGroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function xp(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function kp(k){let d,T,u,c,f;return c=new ie({props:{code:`from transformers import CLIPTokenizer, TFGroupViTTextModel

tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gcc-yfcc")
model = TFGroupViTTextModel.from_pretrained("nvidia/groupvit-gcc-yfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled (EOS token) states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFGroupViTTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGroupViTTextModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function Gp(k){let d,T,u,c,f;return{c(){d=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=l(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,d,p),e(d,T),e(d,u),e(u,c),e(d,f)},d(n){n&&o(d)}}}function Mp(k){let d,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, TFGroupViTVisionModel

processor = AutoProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")
model = TFGroupViTVisionModel.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(images=image, return_tensors="tf")

outputs = model(**inputs)
last_hidden_state = outputs.last_hidden_state
pooled_output = outputs.pooler_output  # pooled CLS states`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFGroupViTVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGroupViTVisionModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){d=a("p"),T=r("Examples:"),u=h(),y(c.$$.fragment)},l(n){d=i(n,"P",{});var p=l(d);T=s(p,"Examples:"),p.forEach(o),u=g(n),$(c.$$.fragment,n)},m(n,p){v(n,d,p),e(d,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(d),n&&o(u),x(c,n)}}}function jp(k){let d,T,u,c,f,n,p,G,ao,ke,E,H,le,de,io,pe,lo,dt,F,fe,ce,pt,A,I,po,Ge,ct,he,Me,ut,ge,D,co,_e,Te,uo,ve,K,S,ye,je,Ee,mo,M,q,mt,pn,R,$e,be,cn,un,O,Pe,mn,fo,j,fn,we,ho,hn,go,ks,Gs,_o,Ms,js,To,Es,Ps,vo,zs,Cs,yo,qs,Fs,Wr,ze,ft,Zn,$o,Is,er,Ls,Br,W,bo,As,Ve,gn,Ds,Os,_n,Ns,Ss,wo,Ws,Bs,Us,Ce,Hs,Tn,Ks,Rs,vn,Js,Ys,Xs,ht,Vo,Qs,xo,Zs,yn,ea,ta,Ur,qe,gt,tr,ko,oa,or,na,Hr,B,Go,ra,Fe,sa,$n,aa,ia,Mo,la,da,pa,Ie,ca,bn,ua,ma,wn,fa,ha,ga,_t,Kr,Le,Tt,nr,jo,_a,rr,Ta,Rr,U,Eo,va,Ae,ya,Vn,$a,ba,Po,wa,Va,xa,De,ka,xn,Ga,Ma,kn,ja,Ea,Pa,vt,Jr,Oe,yt,sr,zo,za,ar,Ca,Yr,L,Co,qa,qo,Fa,Fo,Ia,La,Aa,J,Io,Da,Ne,Oa,Gn,Na,Sa,ir,Wa,Ba,Ua,$t,Ha,bt,Ka,Y,Lo,Ra,Se,Ja,Mn,Ya,Xa,lr,Qa,Za,ei,wt,ti,Vt,oi,X,Ao,ni,We,ri,jn,si,ai,dr,ii,li,di,xt,pi,kt,Xr,Be,Gt,pr,Do,ci,cr,ui,Qr,Ue,Oo,mi,Q,No,fi,He,hi,En,gi,_i,ur,Ti,vi,yi,Mt,$i,jt,Zr,Ke,Et,mr,So,bi,fr,wi,es,Re,Wo,Vi,Z,Bo,xi,Je,ki,Pn,Gi,Mi,hr,ji,Ei,Pi,Pt,zi,zt,ts,Ye,Ct,gr,Uo,Ci,_r,qi,os,z,Ho,Fi,Ko,Ii,zn,Li,Ai,Di,Ro,Oi,Jo,Ni,Si,Wi,qt,Bi,ee,Yo,Ui,Xe,Hi,Cn,Ki,Ri,Tr,Ji,Yi,Xi,Ft,Qi,It,Zi,te,Xo,el,Qe,tl,qn,ol,nl,vr,rl,sl,al,Lt,il,At,ll,oe,Qo,dl,Ze,pl,Fn,cl,ul,yr,ml,fl,hl,Dt,gl,Ot,ns,et,Nt,$r,Zo,_l,br,Tl,rs,tt,en,vl,ne,tn,yl,ot,$l,In,bl,wl,wr,Vl,xl,kl,St,Gl,Wt,ss,nt,Bt,Vr,on,Ml,xr,jl,as,rt,nn,El,re,rn,Pl,st,zl,Ln,Cl,ql,kr,Fl,Il,Ll,Ut,Al,Ht,is;return n=new me({}),de=new me({}),$o=new me({}),bo=new P({props:{name:"class transformers.GroupViTConfig",anchor:"transformers.GroupViTConfig",parameters:[{name:"text_config",val:" = None"},{name:"vision_config",val:" = None"},{name:"projection_dim",val:" = 256"},{name:"projection_intermediate_dim",val:" = 4096"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTConfig.text_config",description:`<strong>text_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextConfig">GroupViTTextConfig</a>.`,name:"text_config"},{anchor:"transformers.GroupViTConfig.vision_config",description:`<strong>vision_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionConfig">GroupViTVisionConfig</a>.`,name:"vision_config"},{anchor:"transformers.GroupViTConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.GroupViTConfig.projection_intermediate_dim",description:`<strong>projection_intermediate_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimentionality of intermediate layer of text and vision projection layers.`,name:"projection_intermediate_dim"},{anchor:"transformers.GroupViTConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> parameter. Default is used as per the original GroupViT
implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.GroupViTConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L272"}}),Vo=new P({props:{name:"from_text_vision_configs",anchor:"transformers.GroupViTConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": GroupViTTextConfig"},{name:"vision_config",val:": GroupViTVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L338",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig"
>GroupViTConfig</a></p>
`}}),ko=new me({}),Go=new P({props:{name:"class transformers.GroupViTTextConfig",anchor:"transformers.GroupViTTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 256"},{name:"intermediate_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
Vocabulary size of the GroupViT text model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel">GroupViTModel</a>.`,name:"vocab_size"},{anchor:"transformers.GroupViTTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GroupViTTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GroupViTTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GroupViTTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GroupViTTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 77) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GroupViTTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;quick_gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GroupViTTextConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GroupViTTextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GroupViTTextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.GroupViTTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GroupViTTextConfig.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L39"}}),_t=new se({props:{anchor:"transformers.GroupViTTextConfig.example",$$slots:{default:[ap]},$$scope:{ctx:k}}}),jo=new me({}),Eo=new P({props:{name:"class transformers.GroupViTVisionConfig",anchor:"transformers.GroupViTVisionConfig",parameters:[{name:"hidden_size",val:" = 384"},{name:"intermediate_size",val:" = 1536"},{name:"depths",val:" = [6, 3, 3]"},{name:"num_hidden_layers",val:" = 12"},{name:"num_group_tokens",val:" = [64, 8, 0]"},{name:"num_output_groups",val:" = [64, 8, 8]"},{name:"num_attention_heads",val:" = 6"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"hidden_act",val:" = 'gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"assign_eps",val:" = 1.0"},{name:"assign_mlp_ratio",val:" = [0.5, 4]"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GroupViTVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GroupViTVisionConfig.depths",description:`<strong>depths</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [6, 3, 3]) &#x2014;
The number of layers in each encoder block.`,name:"depths"},{anchor:"transformers.GroupViTVisionConfig.num_group_tokens",description:`<strong>num_group_tokens</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [64, 8, 0]) &#x2014;
The number of group tokens for each stage.`,name:"num_group_tokens"},{anchor:"transformers.GroupViTVisionConfig.num_output_groups",description:`<strong>num_output_groups</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [64, 8, 8]) &#x2014;
The number of output groups for each stage, 0 means no group.`,name:"num_output_groups"},{anchor:"transformers.GroupViTVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GroupViTVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.GroupViTVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.GroupViTVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> \`<code>&quot;quick_gelu&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GroupViTVisionConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GroupViTVisionConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.GroupViTVisionConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GroupViTVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GroupViTVisionConfig.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L146"}}),vt=new se({props:{anchor:"transformers.GroupViTVisionConfig.example",$$slots:{default:[ip]},$$scope:{ctx:k}}}),zo=new me({}),Co=new P({props:{name:"class transformers.GroupViTModel",anchor:"transformers.GroupViTModel",parameters:[{name:"config",val:": GroupViTConfig"}],parametersDescription:[{anchor:"transformers.GroupViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig">GroupViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1324"}}),Io=new P({props:{name:"forward",anchor:"transformers.GroupViTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_segmentation",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GroupViTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GroupViTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GroupViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.GroupViTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1466",returnDescription:`
<p>A <code>transformers.models.groupvit.modeling_groupvit.GroupViTModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</p>
</li>
<li>
<p><strong>logits_per_image</strong> (<code>torch.FloatTensor</code> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</p>
</li>
<li>
<p><strong>logits_per_text</strong> (<code>torch.FloatTensor</code> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</p>
</li>
<li>
<p><strong>segmentation_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>text_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
</li>
<li>
<p><strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
</li>
<li>
<p><strong>text_model_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
</li>
<li>
<p><strong>vision_model_output</strong> (<code>BaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.groupvit.modeling_groupvit.GroupViTModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$t=new ue({props:{$$slots:{default:[lp]},$$scope:{ctx:k}}}),bt=new se({props:{anchor:"transformers.GroupViTModel.forward.example",$$slots:{default:[dp]},$$scope:{ctx:k}}}),Lo=new P({props:{name:"get_text_features",anchor:"transformers.GroupViTModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GroupViTModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GroupViTModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GroupViTModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1370",returnDescription:`
<p>The text embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"
>GroupViTTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),wt=new ue({props:{$$slots:{default:[pp]},$$scope:{ctx:k}}}),Vt=new se({props:{anchor:"transformers.GroupViTModel.get_text_features.example",$$slots:{default:[cp]},$$scope:{ctx:k}}}),Ao=new P({props:{name:"get_image_features",anchor:"transformers.GroupViTModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1417",returnDescription:`
<p>The image embeddings obtained by
applying the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"
>GroupViTVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>torch.FloatTensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),xt=new ue({props:{$$slots:{default:[up]},$$scope:{ctx:k}}}),kt=new se({props:{anchor:"transformers.GroupViTModel.get_image_features.example",$$slots:{default:[mp]},$$scope:{ctx:k}}}),Do=new me({}),Oo=new P({props:{name:"class transformers.GroupViTTextModel",anchor:"transformers.GroupViTTextModel",parameters:[{name:"config",val:": GroupViTTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1160"}}),No=new P({props:{name:"forward",anchor:"transformers.GroupViTTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPTokenizer">CLIPTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GroupViTTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GroupViTTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GroupViTTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1175",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTTextConfig'&gt;</code>) and inputs.</p>
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
`}}),Mt=new ue({props:{$$slots:{default:[fp]},$$scope:{ctx:k}}}),jt=new se({props:{anchor:"transformers.GroupViTTextModel.forward.example",$$slots:{default:[hp]},$$scope:{ctx:k}}}),So=new me({}),Wo=new P({props:{name:"class transformers.GroupViTVisionModel",anchor:"transformers.GroupViTVisionModel",parameters:[{name:"config",val:": GroupViTVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1271"}}),Bo=new P({props:{name:"forward",anchor:"transformers.GroupViTVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GroupViTVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GroupViTVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1284",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTVisionConfig'&gt;</code>) and inputs.</p>
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
`}}),Pt=new ue({props:{$$slots:{default:[gp]},$$scope:{ctx:k}}}),zt=new se({props:{anchor:"transformers.GroupViTVisionModel.forward.example",$$slots:{default:[_p]},$$scope:{ctx:k}}}),Uo=new me({}),Ho=new P({props:{name:"class transformers.TFGroupViTModel",anchor:"transformers.TFGroupViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGroupViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig">GroupViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1803"}}),qt=new ue({props:{$$slots:{default:[Tp]},$$scope:{ctx:k}}}),Yo=new P({props:{name:"call",anchor:"transformers.TFGroupViTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_segmentation",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGroupViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFGroupViTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGroupViTModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGroupViTModel.call.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the contrastive loss.`,name:"return_loss"},{anchor:"transformers.TFGroupViTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGroupViTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGroupViTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGroupViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1933",returnDescription:`
<p>A <code>transformers.models.groupvit.modeling_tf_groupvit.TFGroupViTModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>return_loss</code> is <code>True</code>) \u2014 Contrastive loss for image-text similarity.</p>
</li>
<li>
<p><strong>logits_per_image</strong> (<code>tf.Tensor</code> of shape <code>(image_batch_size, text_batch_size)</code>) \u2014 The scaled dot product scores between <code>image_embeds</code> and <code>text_embeds</code>. This represents the image-text
similarity scores.</p>
</li>
<li>
<p><strong>logits_per_text</strong> (<code>tf.Tensor</code> of shape <code>(text_batch_size, image_batch_size)</code>) \u2014 The scaled dot product scores between <code>text_embeds</code> and <code>image_embeds</code>. This represents the text-image
similarity scores.</p>
</li>
<li>
<p><strong>segmentation_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) \u2014 Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>text_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>) \u2014 The text embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTTextModel"
>TFGroupViTTextModel</a>.</p>
</li>
<li>
<p><strong>image_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>) \u2014 The image embeddings obtained by applying the projection layer to the pooled output of
<a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTVisionModel"
>TFGroupViTVisionModel</a>.</p>
</li>
<li>
<p><strong>text_model_output</strong> (<code>TFBaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTTextModel"
>TFGroupViTTextModel</a>.</p>
</li>
<li>
<p><strong>vision_model_output</strong> (<code>TFBaseModelOutputWithPooling</code>) \u2014 The output of the <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTVisionModel"
>TFGroupViTVisionModel</a>.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.groupvit.modeling_tf_groupvit.TFGroupViTModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Ft=new ue({props:{$$slots:{default:[vp]},$$scope:{ctx:k}}}),It=new se({props:{anchor:"transformers.TFGroupViTModel.call.example",$$slots:{default:[yp]},$$scope:{ctx:k}}}),Xo=new P({props:{name:"get_text_features",anchor:"transformers.TFGroupViTModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGroupViTModel.get_text_features.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGroupViTModel.get_text_features.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGroupViTModel.get_text_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGroupViTModel.get_text_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGroupViTModel.get_text_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGroupViTModel.get_text_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1849",returnDescription:`
<p>The text embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTTextModel"
>TFGroupViTTextModel</a>.</p>
`,returnType:`
<p>text_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Lt=new ue({props:{$$slots:{default:[$p]},$$scope:{ctx:k}}}),At=new se({props:{anchor:"transformers.TFGroupViTModel.get_text_features.example",$$slots:{default:[bp]},$$scope:{ctx:k}}}),Qo=new P({props:{name:"get_image_features",anchor:"transformers.TFGroupViTModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code>, <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFGroupViTModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGroupViTModel.get_image_features.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGroupViTModel.get_image_features.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGroupViTModel.get_image_features.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1890",returnDescription:`
<p>The image embeddings obtained by applying
the projection layer to the pooled output of <a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTVisionModel"
>TFGroupViTVisionModel</a>.</p>
`,returnType:`
<p>image_features (<code>tf.Tensor</code> of shape <code>(batch_size, output_dim</code>)</p>
`}}),Dt=new ue({props:{$$slots:{default:[wp]},$$scope:{ctx:k}}}),Ot=new se({props:{anchor:"transformers.TFGroupViTModel.get_image_features.example",$$slots:{default:[Vp]},$$scope:{ctx:k}}}),Zo=new me({}),en=new P({props:{name:"class transformers.TFGroupViTTextModel",anchor:"transformers.TFGroupViTTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1619"}}),tn=new P({props:{name:"call",anchor:"transformers.TFGroupViTTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGroupViTTextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGroupViTTextModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGroupViTTextModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGroupViTTextModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGroupViTTextModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGroupViTTextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1652",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTTextConfig'&gt;</code>) and inputs.</p>
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
`}}),St=new ue({props:{$$slots:{default:[xp]},$$scope:{ctx:k}}}),Wt=new se({props:{anchor:"transformers.TFGroupViTTextModel.call.example",$$slots:{default:[kp]},$$scope:{ctx:k}}}),on=new me({}),nn=new P({props:{name:"class transformers.TFGroupViTVisionModel",anchor:"transformers.TFGroupViTVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1707"}}),rn=new P({props:{name:"call",anchor:"transformers.TFGroupViTVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code>, <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPImageProcessor">CLIPFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor.__call__">CLIPFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFGroupViTVisionModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGroupViTVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGroupViTVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGroupViTVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1748",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<code>&lt;class 'transformers.models.groupvit.configuration_groupvit.GroupViTVisionConfig'&gt;</code>) and inputs.</p>
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
`}}),Ut=new ue({props:{$$slots:{default:[Gp]},$$scope:{ctx:k}}}),Ht=new se({props:{anchor:"transformers.TFGroupViTVisionModel.call.example",$$slots:{default:[Mp]},$$scope:{ctx:k}}}),{c(){d=a("meta"),T=h(),u=a("h1"),c=a("a"),f=a("span"),y(n.$$.fragment),p=h(),G=a("span"),ao=r("GroupViT"),ke=h(),E=a("h2"),H=a("a"),le=a("span"),y(de.$$.fragment),io=h(),pe=a("span"),lo=r("Overview"),dt=h(),F=a("p"),fe=r("The GroupViT model was proposed in "),ce=a("a"),pt=r("GroupViT: Semantic Segmentation Emerges from Text Supervision"),A=r(` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),I=a("a"),po=r("CLIP"),Ge=r(", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),ct=h(),he=a("p"),Me=r("The abstract from the paper is the following:"),ut=h(),ge=a("p"),D=a("em"),co=r("Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),_e=h(),Te=a("p"),uo=r("Tips:"),ve=h(),K=a("ul"),S=a("li"),ye=r("You may specify "),je=a("code"),Ee=r("output_segmentation=True"),mo=r(" in the forward of "),M=a("code"),q=r("GroupViTModel"),mt=r(" to get the segmentation logits of input texts."),pn=h(),R=a("li"),$e=r("The quickest way to get started with GroupViT is by checking the "),be=a("a"),cn=r("example notebooks"),un=r(" (which showcase zero-shot segmentation inference). One can also check out the "),O=a("a"),Pe=r("HuggingFace Spaces demo"),mn=r(" to play with GroupViT."),fo=h(),j=a("p"),fn=r("This model was contributed by "),we=a("a"),ho=r("xvjiarui"),hn=r(". The TensorFlow version was contributed by "),go=a("a"),ks=r("ariG23498"),Gs=r(" with the help of "),_o=a("a"),Ms=r("Yih-Dar SHIEH"),js=r(", "),To=a("a"),Es=r("Amy Roberts"),Ps=r(", and "),vo=a("a"),zs=r("Joao Gante"),Cs=r(`.
The original code can be found `),yo=a("a"),qs=r("here"),Fs=r("."),Wr=h(),ze=a("h2"),ft=a("a"),Zn=a("span"),y($o.$$.fragment),Is=h(),er=a("span"),Ls=r("GroupViTConfig"),Br=h(),W=a("div"),y(bo.$$.fragment),As=h(),Ve=a("p"),gn=a("a"),Ds=r("GroupViTConfig"),Os=r(" is the configuration class to store the configuration of a "),_n=a("a"),Ns=r("GroupViTModel"),Ss=r(`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs. Instantiating a configuration with the defaults will yield a similar configuration to that of the GroupViT
`),wo=a("a"),Ws=r("nvidia/groupvit-gcc-yfcc"),Bs=r(" architecture."),Us=h(),Ce=a("p"),Hs=r("Configuration objects inherit from "),Tn=a("a"),Ks=r("PretrainedConfig"),Rs=r(` and can be used to control the model outputs. Read the
documentation from `),vn=a("a"),Js=r("PretrainedConfig"),Ys=r(" for more information."),Xs=h(),ht=a("div"),y(Vo.$$.fragment),Qs=h(),xo=a("p"),Zs=r("Instantiate a "),yn=a("a"),ea=r("GroupViTConfig"),ta=r(` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),Ur=h(),qe=a("h2"),gt=a("a"),tr=a("span"),y(ko.$$.fragment),oa=h(),or=a("span"),na=r("GroupViTTextConfig"),Hr=h(),B=a("div"),y(Go.$$.fragment),ra=h(),Fe=a("p"),sa=r("This is the configuration class to store the configuration of a "),$n=a("a"),aa=r("GroupViTTextModel"),ia=r(`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Mo=a("a"),la=r("nvidia/groupvit-gcc-yfcc"),da=r(" architecture."),pa=h(),Ie=a("p"),ca=r("Configuration objects inherit from "),bn=a("a"),ua=r("PretrainedConfig"),ma=r(` and can be used to control the model outputs. Read the
documentation from `),wn=a("a"),fa=r("PretrainedConfig"),ha=r(" for more information."),ga=h(),y(_t.$$.fragment),Kr=h(),Le=a("h2"),Tt=a("a"),nr=a("span"),y(jo.$$.fragment),_a=h(),rr=a("span"),Ta=r("GroupViTVisionConfig"),Rr=h(),U=a("div"),y(Eo.$$.fragment),va=h(),Ae=a("p"),ya=r("This is the configuration class to store the configuration of a "),Vn=a("a"),$a=r("GroupViTVisionModel"),ba=r(`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),Po=a("a"),wa=r("nvidia/groupvit-gcc-yfcc"),Va=r(" architecture."),xa=h(),De=a("p"),ka=r("Configuration objects inherit from "),xn=a("a"),Ga=r("PretrainedConfig"),Ma=r(` and can be used to control the model outputs. Read the
documentation from `),kn=a("a"),ja=r("PretrainedConfig"),Ea=r(" for more information."),Pa=h(),y(vt.$$.fragment),Jr=h(),Oe=a("h2"),yt=a("a"),sr=a("span"),y(zo.$$.fragment),za=h(),ar=a("span"),Ca=r("GroupViTModel"),Yr=h(),L=a("div"),y(Co.$$.fragment),qa=h(),qo=a("p"),Fa=r("This model is a PyTorch "),Fo=a("a"),Ia=r("torch.nn.Module"),La=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Aa=h(),J=a("div"),y(Io.$$.fragment),Da=h(),Ne=a("p"),Oa=r("The "),Gn=a("a"),Na=r("GroupViTModel"),Sa=r(" forward method, overrides the "),ir=a("code"),Wa=r("__call__"),Ba=r(" special method."),Ua=h(),y($t.$$.fragment),Ha=h(),y(bt.$$.fragment),Ka=h(),Y=a("div"),y(Lo.$$.fragment),Ra=h(),Se=a("p"),Ja=r("The "),Mn=a("a"),Ya=r("GroupViTModel"),Xa=r(" forward method, overrides the "),lr=a("code"),Qa=r("__call__"),Za=r(" special method."),ei=h(),y(wt.$$.fragment),ti=h(),y(Vt.$$.fragment),oi=h(),X=a("div"),y(Ao.$$.fragment),ni=h(),We=a("p"),ri=r("The "),jn=a("a"),si=r("GroupViTModel"),ai=r(" forward method, overrides the "),dr=a("code"),ii=r("__call__"),li=r(" special method."),di=h(),y(xt.$$.fragment),pi=h(),y(kt.$$.fragment),Xr=h(),Be=a("h2"),Gt=a("a"),pr=a("span"),y(Do.$$.fragment),ci=h(),cr=a("span"),ui=r("GroupViTTextModel"),Qr=h(),Ue=a("div"),y(Oo.$$.fragment),mi=h(),Q=a("div"),y(No.$$.fragment),fi=h(),He=a("p"),hi=r("The "),En=a("a"),gi=r("GroupViTTextModel"),_i=r(" forward method, overrides the "),ur=a("code"),Ti=r("__call__"),vi=r(" special method."),yi=h(),y(Mt.$$.fragment),$i=h(),y(jt.$$.fragment),Zr=h(),Ke=a("h2"),Et=a("a"),mr=a("span"),y(So.$$.fragment),bi=h(),fr=a("span"),wi=r("GroupViTVisionModel"),es=h(),Re=a("div"),y(Wo.$$.fragment),Vi=h(),Z=a("div"),y(Bo.$$.fragment),xi=h(),Je=a("p"),ki=r("The "),Pn=a("a"),Gi=r("GroupViTVisionModel"),Mi=r(" forward method, overrides the "),hr=a("code"),ji=r("__call__"),Ei=r(" special method."),Pi=h(),y(Pt.$$.fragment),zi=h(),y(zt.$$.fragment),ts=h(),Ye=a("h2"),Ct=a("a"),gr=a("span"),y(Uo.$$.fragment),Ci=h(),_r=a("span"),qi=r("TFGroupViTModel"),os=h(),z=a("div"),y(Ho.$$.fragment),Fi=h(),Ko=a("p"),Ii=r("This model inherits from "),zn=a("a"),Li=r("TFPreTrainedModel"),Ai=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Di=h(),Ro=a("p"),Oi=r("This model is also a "),Jo=a("a"),Ni=r("tf.keras.Model"),Si=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wi=h(),y(qt.$$.fragment),Bi=h(),ee=a("div"),y(Yo.$$.fragment),Ui=h(),Xe=a("p"),Hi=r("The "),Cn=a("a"),Ki=r("TFGroupViTModel"),Ri=r(" forward method, overrides the "),Tr=a("code"),Ji=r("__call__"),Yi=r(" special method."),Xi=h(),y(Ft.$$.fragment),Qi=h(),y(It.$$.fragment),Zi=h(),te=a("div"),y(Xo.$$.fragment),el=h(),Qe=a("p"),tl=r("The "),qn=a("a"),ol=r("TFGroupViTModel"),nl=r(" forward method, overrides the "),vr=a("code"),rl=r("__call__"),sl=r(" special method."),al=h(),y(Lt.$$.fragment),il=h(),y(At.$$.fragment),ll=h(),oe=a("div"),y(Qo.$$.fragment),dl=h(),Ze=a("p"),pl=r("The "),Fn=a("a"),cl=r("TFGroupViTModel"),ul=r(" forward method, overrides the "),yr=a("code"),ml=r("__call__"),fl=r(" special method."),hl=h(),y(Dt.$$.fragment),gl=h(),y(Ot.$$.fragment),ns=h(),et=a("h2"),Nt=a("a"),$r=a("span"),y(Zo.$$.fragment),_l=h(),br=a("span"),Tl=r("TFGroupViTTextModel"),rs=h(),tt=a("div"),y(en.$$.fragment),vl=h(),ne=a("div"),y(tn.$$.fragment),yl=h(),ot=a("p"),$l=r("The "),In=a("a"),bl=r("TFGroupViTTextModel"),wl=r(" forward method, overrides the "),wr=a("code"),Vl=r("__call__"),xl=r(" special method."),kl=h(),y(St.$$.fragment),Gl=h(),y(Wt.$$.fragment),ss=h(),nt=a("h2"),Bt=a("a"),Vr=a("span"),y(on.$$.fragment),Ml=h(),xr=a("span"),jl=r("TFGroupViTVisionModel"),as=h(),rt=a("div"),y(nn.$$.fragment),El=h(),re=a("div"),y(rn.$$.fragment),Pl=h(),st=a("p"),zl=r("The "),Ln=a("a"),Cl=r("TFGroupViTVisionModel"),ql=r(" forward method, overrides the "),kr=a("code"),Fl=r("__call__"),Il=r(" special method."),Ll=h(),y(Ut.$$.fragment),Al=h(),y(Ht.$$.fragment),this.h()},l(t){const _=rp('[data-svelte="svelte-1phssyn"]',document.head);d=i(_,"META",{name:!0,content:!0}),_.forEach(o),T=g(t),u=i(t,"H1",{class:!0});var sn=l(u);c=i(sn,"A",{id:!0,class:!0,href:!0});var Gr=l(c);f=i(Gr,"SPAN",{});var Mr=l(f);$(n.$$.fragment,Mr),Mr.forEach(o),Gr.forEach(o),p=g(sn),G=i(sn,"SPAN",{});var jr=l(G);ao=s(jr,"GroupViT"),jr.forEach(o),sn.forEach(o),ke=g(t),E=i(t,"H2",{class:!0});var an=l(E);H=i(an,"A",{id:!0,class:!0,href:!0});var Er=l(H);le=i(Er,"SPAN",{});var Pr=l(le);$(de.$$.fragment,Pr),Pr.forEach(o),Er.forEach(o),io=g(an),pe=i(an,"SPAN",{});var zr=l(pe);lo=s(zr,"Overview"),zr.forEach(o),an.forEach(o),dt=g(t),F=i(t,"P",{});var at=l(F);fe=s(at,"The GroupViT model was proposed in "),ce=i(at,"A",{href:!0,rel:!0});var Cr=l(ce);pt=s(Cr,"GroupViT: Semantic Segmentation Emerges from Text Supervision"),Cr.forEach(o),A=s(at,` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),I=i(at,"A",{href:!0});var qr=l(I);po=s(qr,"CLIP"),qr.forEach(o),Ge=s(at,", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),at.forEach(o),ct=g(t),he=i(t,"P",{});var Fr=l(he);Me=s(Fr,"The abstract from the paper is the following:"),Fr.forEach(o),ut=g(t),ge=i(t,"P",{});var Ir=l(ge);D=i(Ir,"EM",{});var Lr=l(D);co=s(Lr,"Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),Lr.forEach(o),Ir.forEach(o),_e=g(t),Te=i(t,"P",{});var Ar=l(Te);uo=s(Ar,"Tips:"),Ar.forEach(o),ve=g(t),K=i(t,"UL",{});var ln=l(K);S=i(ln,"LI",{});var it=l(S);ye=s(it,"You may specify "),je=i(it,"CODE",{});var Dr=l(je);Ee=s(Dr,"output_segmentation=True"),Dr.forEach(o),mo=s(it," in the forward of "),M=i(it,"CODE",{});var Or=l(M);q=s(Or,"GroupViTModel"),Or.forEach(o),mt=s(it," to get the segmentation logits of input texts."),it.forEach(o),pn=g(ln),R=i(ln,"LI",{});var lt=l(R);$e=s(lt,"The quickest way to get started with GroupViT is by checking the "),be=i(lt,"A",{href:!0,rel:!0});var Nr=l(be);cn=s(Nr,"example notebooks"),Nr.forEach(o),un=s(lt," (which showcase zero-shot segmentation inference). One can also check out the "),O=i(lt,"A",{href:!0,rel:!0});var Sr=l(O);Pe=s(Sr,"HuggingFace Spaces demo"),Sr.forEach(o),mn=s(lt," to play with GroupViT."),lt.forEach(o),ln.forEach(o),fo=g(t),j=i(t,"P",{});var C=l(j);fn=s(C,"This model was contributed by "),we=i(C,"A",{href:!0,rel:!0});var Dl=l(we);ho=s(Dl,"xvjiarui"),Dl.forEach(o),hn=s(C,". The TensorFlow version was contributed by "),go=i(C,"A",{href:!0,rel:!0});var Ol=l(go);ks=s(Ol,"ariG23498"),Ol.forEach(o),Gs=s(C," with the help of "),_o=i(C,"A",{href:!0,rel:!0});var Nl=l(_o);Ms=s(Nl,"Yih-Dar SHIEH"),Nl.forEach(o),js=s(C,", "),To=i(C,"A",{href:!0,rel:!0});var Sl=l(To);Es=s(Sl,"Amy Roberts"),Sl.forEach(o),Ps=s(C,", and "),vo=i(C,"A",{href:!0,rel:!0});var Wl=l(vo);zs=s(Wl,"Joao Gante"),Wl.forEach(o),Cs=s(C,`.
The original code can be found `),yo=i(C,"A",{href:!0,rel:!0});var Bl=l(yo);qs=s(Bl,"here"),Bl.forEach(o),Fs=s(C,"."),C.forEach(o),Wr=g(t),ze=i(t,"H2",{class:!0});var ls=l(ze);ft=i(ls,"A",{id:!0,class:!0,href:!0});var Ul=l(ft);Zn=i(Ul,"SPAN",{});var Hl=l(Zn);$($o.$$.fragment,Hl),Hl.forEach(o),Ul.forEach(o),Is=g(ls),er=i(ls,"SPAN",{});var Kl=l(er);Ls=s(Kl,"GroupViTConfig"),Kl.forEach(o),ls.forEach(o),Br=g(t),W=i(t,"DIV",{class:!0});var Kt=l(W);$(bo.$$.fragment,Kt),As=g(Kt),Ve=i(Kt,"P",{});var dn=l(Ve);gn=i(dn,"A",{href:!0});var Rl=l(gn);Ds=s(Rl,"GroupViTConfig"),Rl.forEach(o),Os=s(dn," is the configuration class to store the configuration of a "),_n=i(dn,"A",{href:!0});var Jl=l(_n);Ns=s(Jl,"GroupViTModel"),Jl.forEach(o),Ss=s(dn,`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs. Instantiating a configuration with the defaults will yield a similar configuration to that of the GroupViT
`),wo=i(dn,"A",{href:!0,rel:!0});var Yl=l(wo);Ws=s(Yl,"nvidia/groupvit-gcc-yfcc"),Yl.forEach(o),Bs=s(dn," architecture."),dn.forEach(o),Us=g(Kt),Ce=i(Kt,"P",{});var An=l(Ce);Hs=s(An,"Configuration objects inherit from "),Tn=i(An,"A",{href:!0});var Xl=l(Tn);Ks=s(Xl,"PretrainedConfig"),Xl.forEach(o),Rs=s(An,` and can be used to control the model outputs. Read the
documentation from `),vn=i(An,"A",{href:!0});var Ql=l(vn);Js=s(Ql,"PretrainedConfig"),Ql.forEach(o),Ys=s(An," for more information."),An.forEach(o),Xs=g(Kt),ht=i(Kt,"DIV",{class:!0});var ds=l(ht);$(Vo.$$.fragment,ds),Qs=g(ds),xo=i(ds,"P",{});var ps=l(xo);Zs=s(ps,"Instantiate a "),yn=i(ps,"A",{href:!0});var Zl=l(yn);ea=s(Zl,"GroupViTConfig"),Zl.forEach(o),ta=s(ps,` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),ps.forEach(o),ds.forEach(o),Kt.forEach(o),Ur=g(t),qe=i(t,"H2",{class:!0});var cs=l(qe);gt=i(cs,"A",{id:!0,class:!0,href:!0});var ed=l(gt);tr=i(ed,"SPAN",{});var td=l(tr);$(ko.$$.fragment,td),td.forEach(o),ed.forEach(o),oa=g(cs),or=i(cs,"SPAN",{});var od=l(or);na=s(od,"GroupViTTextConfig"),od.forEach(o),cs.forEach(o),Hr=g(t),B=i(t,"DIV",{class:!0});var Rt=l(B);$(Go.$$.fragment,Rt),ra=g(Rt),Fe=i(Rt,"P",{});var Dn=l(Fe);sa=s(Dn,"This is the configuration class to store the configuration of a "),$n=i(Dn,"A",{href:!0});var nd=l($n);aa=s(nd,"GroupViTTextModel"),nd.forEach(o),ia=s(Dn,`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Mo=i(Dn,"A",{href:!0,rel:!0});var rd=l(Mo);la=s(rd,"nvidia/groupvit-gcc-yfcc"),rd.forEach(o),da=s(Dn," architecture."),Dn.forEach(o),pa=g(Rt),Ie=i(Rt,"P",{});var On=l(Ie);ca=s(On,"Configuration objects inherit from "),bn=i(On,"A",{href:!0});var sd=l(bn);ua=s(sd,"PretrainedConfig"),sd.forEach(o),ma=s(On,` and can be used to control the model outputs. Read the
documentation from `),wn=i(On,"A",{href:!0});var ad=l(wn);fa=s(ad,"PretrainedConfig"),ad.forEach(o),ha=s(On," for more information."),On.forEach(o),ga=g(Rt),$(_t.$$.fragment,Rt),Rt.forEach(o),Kr=g(t),Le=i(t,"H2",{class:!0});var us=l(Le);Tt=i(us,"A",{id:!0,class:!0,href:!0});var id=l(Tt);nr=i(id,"SPAN",{});var ld=l(nr);$(jo.$$.fragment,ld),ld.forEach(o),id.forEach(o),_a=g(us),rr=i(us,"SPAN",{});var dd=l(rr);Ta=s(dd,"GroupViTVisionConfig"),dd.forEach(o),us.forEach(o),Rr=g(t),U=i(t,"DIV",{class:!0});var Jt=l(U);$(Eo.$$.fragment,Jt),va=g(Jt),Ae=i(Jt,"P",{});var Nn=l(Ae);ya=s(Nn,"This is the configuration class to store the configuration of a "),Vn=i(Nn,"A",{href:!0});var pd=l(Vn);$a=s(pd,"GroupViTVisionModel"),pd.forEach(o),ba=s(Nn,`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),Po=i(Nn,"A",{href:!0,rel:!0});var cd=l(Po);wa=s(cd,"nvidia/groupvit-gcc-yfcc"),cd.forEach(o),Va=s(Nn," architecture."),Nn.forEach(o),xa=g(Jt),De=i(Jt,"P",{});var Sn=l(De);ka=s(Sn,"Configuration objects inherit from "),xn=i(Sn,"A",{href:!0});var ud=l(xn);Ga=s(ud,"PretrainedConfig"),ud.forEach(o),Ma=s(Sn,` and can be used to control the model outputs. Read the
documentation from `),kn=i(Sn,"A",{href:!0});var md=l(kn);ja=s(md,"PretrainedConfig"),md.forEach(o),Ea=s(Sn," for more information."),Sn.forEach(o),Pa=g(Jt),$(vt.$$.fragment,Jt),Jt.forEach(o),Jr=g(t),Oe=i(t,"H2",{class:!0});var ms=l(Oe);yt=i(ms,"A",{id:!0,class:!0,href:!0});var fd=l(yt);sr=i(fd,"SPAN",{});var hd=l(sr);$(zo.$$.fragment,hd),hd.forEach(o),fd.forEach(o),za=g(ms),ar=i(ms,"SPAN",{});var gd=l(ar);Ca=s(gd,"GroupViTModel"),gd.forEach(o),ms.forEach(o),Yr=g(t),L=i(t,"DIV",{class:!0});var xe=l(L);$(Co.$$.fragment,xe),qa=g(xe),qo=i(xe,"P",{});var fs=l(qo);Fa=s(fs,"This model is a PyTorch "),Fo=i(fs,"A",{href:!0,rel:!0});var _d=l(Fo);Ia=s(_d,"torch.nn.Module"),_d.forEach(o),La=s(fs,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fs.forEach(o),Aa=g(xe),J=i(xe,"DIV",{class:!0});var Yt=l(J);$(Io.$$.fragment,Yt),Da=g(Yt),Ne=i(Yt,"P",{});var Wn=l(Ne);Oa=s(Wn,"The "),Gn=i(Wn,"A",{href:!0});var Td=l(Gn);Na=s(Td,"GroupViTModel"),Td.forEach(o),Sa=s(Wn," forward method, overrides the "),ir=i(Wn,"CODE",{});var vd=l(ir);Wa=s(vd,"__call__"),vd.forEach(o),Ba=s(Wn," special method."),Wn.forEach(o),Ua=g(Yt),$($t.$$.fragment,Yt),Ha=g(Yt),$(bt.$$.fragment,Yt),Yt.forEach(o),Ka=g(xe),Y=i(xe,"DIV",{class:!0});var Xt=l(Y);$(Lo.$$.fragment,Xt),Ra=g(Xt),Se=i(Xt,"P",{});var Bn=l(Se);Ja=s(Bn,"The "),Mn=i(Bn,"A",{href:!0});var yd=l(Mn);Ya=s(yd,"GroupViTModel"),yd.forEach(o),Xa=s(Bn," forward method, overrides the "),lr=i(Bn,"CODE",{});var $d=l(lr);Qa=s($d,"__call__"),$d.forEach(o),Za=s(Bn," special method."),Bn.forEach(o),ei=g(Xt),$(wt.$$.fragment,Xt),ti=g(Xt),$(Vt.$$.fragment,Xt),Xt.forEach(o),oi=g(xe),X=i(xe,"DIV",{class:!0});var Qt=l(X);$(Ao.$$.fragment,Qt),ni=g(Qt),We=i(Qt,"P",{});var Un=l(We);ri=s(Un,"The "),jn=i(Un,"A",{href:!0});var bd=l(jn);si=s(bd,"GroupViTModel"),bd.forEach(o),ai=s(Un," forward method, overrides the "),dr=i(Un,"CODE",{});var wd=l(dr);ii=s(wd,"__call__"),wd.forEach(o),li=s(Un," special method."),Un.forEach(o),di=g(Qt),$(xt.$$.fragment,Qt),pi=g(Qt),$(kt.$$.fragment,Qt),Qt.forEach(o),xe.forEach(o),Xr=g(t),Be=i(t,"H2",{class:!0});var hs=l(Be);Gt=i(hs,"A",{id:!0,class:!0,href:!0});var Vd=l(Gt);pr=i(Vd,"SPAN",{});var xd=l(pr);$(Do.$$.fragment,xd),xd.forEach(o),Vd.forEach(o),ci=g(hs),cr=i(hs,"SPAN",{});var kd=l(cr);ui=s(kd,"GroupViTTextModel"),kd.forEach(o),hs.forEach(o),Qr=g(t),Ue=i(t,"DIV",{class:!0});var gs=l(Ue);$(Oo.$$.fragment,gs),mi=g(gs),Q=i(gs,"DIV",{class:!0});var Zt=l(Q);$(No.$$.fragment,Zt),fi=g(Zt),He=i(Zt,"P",{});var Hn=l(He);hi=s(Hn,"The "),En=i(Hn,"A",{href:!0});var Gd=l(En);gi=s(Gd,"GroupViTTextModel"),Gd.forEach(o),_i=s(Hn," forward method, overrides the "),ur=i(Hn,"CODE",{});var Md=l(ur);Ti=s(Md,"__call__"),Md.forEach(o),vi=s(Hn," special method."),Hn.forEach(o),yi=g(Zt),$(Mt.$$.fragment,Zt),$i=g(Zt),$(jt.$$.fragment,Zt),Zt.forEach(o),gs.forEach(o),Zr=g(t),Ke=i(t,"H2",{class:!0});var _s=l(Ke);Et=i(_s,"A",{id:!0,class:!0,href:!0});var jd=l(Et);mr=i(jd,"SPAN",{});var Ed=l(mr);$(So.$$.fragment,Ed),Ed.forEach(o),jd.forEach(o),bi=g(_s),fr=i(_s,"SPAN",{});var Pd=l(fr);wi=s(Pd,"GroupViTVisionModel"),Pd.forEach(o),_s.forEach(o),es=g(t),Re=i(t,"DIV",{class:!0});var Ts=l(Re);$(Wo.$$.fragment,Ts),Vi=g(Ts),Z=i(Ts,"DIV",{class:!0});var eo=l(Z);$(Bo.$$.fragment,eo),xi=g(eo),Je=i(eo,"P",{});var Kn=l(Je);ki=s(Kn,"The "),Pn=i(Kn,"A",{href:!0});var zd=l(Pn);Gi=s(zd,"GroupViTVisionModel"),zd.forEach(o),Mi=s(Kn," forward method, overrides the "),hr=i(Kn,"CODE",{});var Cd=l(hr);ji=s(Cd,"__call__"),Cd.forEach(o),Ei=s(Kn," special method."),Kn.forEach(o),Pi=g(eo),$(Pt.$$.fragment,eo),zi=g(eo),$(zt.$$.fragment,eo),eo.forEach(o),Ts.forEach(o),ts=g(t),Ye=i(t,"H2",{class:!0});var vs=l(Ye);Ct=i(vs,"A",{id:!0,class:!0,href:!0});var qd=l(Ct);gr=i(qd,"SPAN",{});var Fd=l(gr);$(Uo.$$.fragment,Fd),Fd.forEach(o),qd.forEach(o),Ci=g(vs),_r=i(vs,"SPAN",{});var Id=l(_r);qi=s(Id,"TFGroupViTModel"),Id.forEach(o),vs.forEach(o),os=g(t),z=i(t,"DIV",{class:!0});var N=l(z);$(Ho.$$.fragment,N),Fi=g(N),Ko=i(N,"P",{});var ys=l(Ko);Ii=s(ys,"This model inherits from "),zn=i(ys,"A",{href:!0});var Ld=l(zn);Li=s(Ld,"TFPreTrainedModel"),Ld.forEach(o),Ai=s(ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ys.forEach(o),Di=g(N),Ro=i(N,"P",{});var $s=l(Ro);Oi=s($s,"This model is also a "),Jo=i($s,"A",{href:!0,rel:!0});var Ad=l(Jo);Ni=s(Ad,"tf.keras.Model"),Ad.forEach(o),Si=s($s,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$s.forEach(o),Wi=g(N),$(qt.$$.fragment,N),Bi=g(N),ee=i(N,"DIV",{class:!0});var to=l(ee);$(Yo.$$.fragment,to),Ui=g(to),Xe=i(to,"P",{});var Rn=l(Xe);Hi=s(Rn,"The "),Cn=i(Rn,"A",{href:!0});var Dd=l(Cn);Ki=s(Dd,"TFGroupViTModel"),Dd.forEach(o),Ri=s(Rn," forward method, overrides the "),Tr=i(Rn,"CODE",{});var Od=l(Tr);Ji=s(Od,"__call__"),Od.forEach(o),Yi=s(Rn," special method."),Rn.forEach(o),Xi=g(to),$(Ft.$$.fragment,to),Qi=g(to),$(It.$$.fragment,to),to.forEach(o),Zi=g(N),te=i(N,"DIV",{class:!0});var oo=l(te);$(Xo.$$.fragment,oo),el=g(oo),Qe=i(oo,"P",{});var Jn=l(Qe);tl=s(Jn,"The "),qn=i(Jn,"A",{href:!0});var Nd=l(qn);ol=s(Nd,"TFGroupViTModel"),Nd.forEach(o),nl=s(Jn," forward method, overrides the "),vr=i(Jn,"CODE",{});var Sd=l(vr);rl=s(Sd,"__call__"),Sd.forEach(o),sl=s(Jn," special method."),Jn.forEach(o),al=g(oo),$(Lt.$$.fragment,oo),il=g(oo),$(At.$$.fragment,oo),oo.forEach(o),ll=g(N),oe=i(N,"DIV",{class:!0});var no=l(oe);$(Qo.$$.fragment,no),dl=g(no),Ze=i(no,"P",{});var Yn=l(Ze);pl=s(Yn,"The "),Fn=i(Yn,"A",{href:!0});var Wd=l(Fn);cl=s(Wd,"TFGroupViTModel"),Wd.forEach(o),ul=s(Yn," forward method, overrides the "),yr=i(Yn,"CODE",{});var Bd=l(yr);ml=s(Bd,"__call__"),Bd.forEach(o),fl=s(Yn," special method."),Yn.forEach(o),hl=g(no),$(Dt.$$.fragment,no),gl=g(no),$(Ot.$$.fragment,no),no.forEach(o),N.forEach(o),ns=g(t),et=i(t,"H2",{class:!0});var bs=l(et);Nt=i(bs,"A",{id:!0,class:!0,href:!0});var Ud=l(Nt);$r=i(Ud,"SPAN",{});var Hd=l($r);$(Zo.$$.fragment,Hd),Hd.forEach(o),Ud.forEach(o),_l=g(bs),br=i(bs,"SPAN",{});var Kd=l(br);Tl=s(Kd,"TFGroupViTTextModel"),Kd.forEach(o),bs.forEach(o),rs=g(t),tt=i(t,"DIV",{class:!0});var ws=l(tt);$(en.$$.fragment,ws),vl=g(ws),ne=i(ws,"DIV",{class:!0});var ro=l(ne);$(tn.$$.fragment,ro),yl=g(ro),ot=i(ro,"P",{});var Xn=l(ot);$l=s(Xn,"The "),In=i(Xn,"A",{href:!0});var Rd=l(In);bl=s(Rd,"TFGroupViTTextModel"),Rd.forEach(o),wl=s(Xn," forward method, overrides the "),wr=i(Xn,"CODE",{});var Jd=l(wr);Vl=s(Jd,"__call__"),Jd.forEach(o),xl=s(Xn," special method."),Xn.forEach(o),kl=g(ro),$(St.$$.fragment,ro),Gl=g(ro),$(Wt.$$.fragment,ro),ro.forEach(o),ws.forEach(o),ss=g(t),nt=i(t,"H2",{class:!0});var Vs=l(nt);Bt=i(Vs,"A",{id:!0,class:!0,href:!0});var Yd=l(Bt);Vr=i(Yd,"SPAN",{});var Xd=l(Vr);$(on.$$.fragment,Xd),Xd.forEach(o),Yd.forEach(o),Ml=g(Vs),xr=i(Vs,"SPAN",{});var Qd=l(xr);jl=s(Qd,"TFGroupViTVisionModel"),Qd.forEach(o),Vs.forEach(o),as=g(t),rt=i(t,"DIV",{class:!0});var xs=l(rt);$(nn.$$.fragment,xs),El=g(xs),re=i(xs,"DIV",{class:!0});var so=l(re);$(rn.$$.fragment,so),Pl=g(so),st=i(so,"P",{});var Qn=l(st);zl=s(Qn,"The "),Ln=i(Qn,"A",{href:!0});var Zd=l(Ln);Cl=s(Zd,"TFGroupViTVisionModel"),Zd.forEach(o),ql=s(Qn," forward method, overrides the "),kr=i(Qn,"CODE",{});var ep=l(kr);Fl=s(ep,"__call__"),ep.forEach(o),Il=s(Qn," special method."),Qn.forEach(o),Ll=g(so),$(Ut.$$.fragment,so),Al=g(so),$(Ht.$$.fragment,so),so.forEach(o),xs.forEach(o),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(Ep)),m(c,"id","groupvit"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#groupvit"),m(u,"class","relative group"),m(H,"id","overview"),m(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(H,"href","#overview"),m(E,"class","relative group"),m(ce,"href","https://arxiv.org/abs/2202.11094"),m(ce,"rel","nofollow"),m(I,"href","clip"),m(be,"href","https://github.com/xvjiarui/GroupViT/blob/main/demo/GroupViT_hf_inference_notebook.ipynb"),m(be,"rel","nofollow"),m(O,"href","https://huggingface.co/spaces/xvjiarui/GroupViT"),m(O,"rel","nofollow"),m(we,"href","https://huggingface.co/xvjiarui"),m(we,"rel","nofollow"),m(go,"href","https://huggingface.co/ariG23498"),m(go,"rel","nofollow"),m(_o,"href","https://huggingface.co/ydshieh"),m(_o,"rel","nofollow"),m(To,"href","https://huggingface.co/amyeroberts"),m(To,"rel","nofollow"),m(vo,"href","https://huggingface.co/joaogante"),m(vo,"rel","nofollow"),m(yo,"href","https://github.com/NVlabs/GroupViT"),m(yo,"rel","nofollow"),m(ft,"id","transformers.GroupViTConfig"),m(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ft,"href","#transformers.GroupViTConfig"),m(ze,"class","relative group"),m(gn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig"),m(_n,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),m(wo,"href","https://huggingface.co/nvidia/groupvit-gcc-yfcc"),m(wo,"rel","nofollow"),m(Tn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(vn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(yn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig"),m(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gt,"id","transformers.GroupViTTextConfig"),m(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(gt,"href","#transformers.GroupViTTextConfig"),m(qe,"class","relative group"),m($n,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"),m(Mo,"href","https://huggingface.co/nvidia/groupvit-gcc-yfcc"),m(Mo,"rel","nofollow"),m(bn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(wn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Tt,"id","transformers.GroupViTVisionConfig"),m(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Tt,"href","#transformers.GroupViTVisionConfig"),m(Le,"class","relative group"),m(Vn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"),m(Po,"href","https://huggingface.co/nvidia/groupvit-gcc-yfcc"),m(Po,"rel","nofollow"),m(xn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(kn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(yt,"id","transformers.GroupViTModel"),m(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(yt,"href","#transformers.GroupViTModel"),m(Oe,"class","relative group"),m(Fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Fo,"rel","nofollow"),m(Gn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Mn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),m(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gt,"id","transformers.GroupViTTextModel"),m(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Gt,"href","#transformers.GroupViTTextModel"),m(Be,"class","relative group"),m(En,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Et,"id","transformers.GroupViTVisionModel"),m(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Et,"href","#transformers.GroupViTVisionModel"),m(Ke,"class","relative group"),m(Pn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"),m(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ct,"id","transformers.TFGroupViTModel"),m(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ct,"href","#transformers.TFGroupViTModel"),m(Ye,"class","relative group"),m(zn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Jo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Jo,"rel","nofollow"),m(Cn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTModel"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTModel"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTModel"),m(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Nt,"id","transformers.TFGroupViTTextModel"),m(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Nt,"href","#transformers.TFGroupViTTextModel"),m(et,"class","relative group"),m(In,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTTextModel"),m(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bt,"id","transformers.TFGroupViTVisionModel"),m(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Bt,"href","#transformers.TFGroupViTVisionModel"),m(nt,"class","relative group"),m(Ln,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTVisionModel"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,d),v(t,T,_),v(t,u,_),e(u,c),e(c,f),b(n,f,null),e(u,p),e(u,G),e(G,ao),v(t,ke,_),v(t,E,_),e(E,H),e(H,le),b(de,le,null),e(E,io),e(E,pe),e(pe,lo),v(t,dt,_),v(t,F,_),e(F,fe),e(F,ce),e(ce,pt),e(F,A),e(F,I),e(I,po),e(F,Ge),v(t,ct,_),v(t,he,_),e(he,Me),v(t,ut,_),v(t,ge,_),e(ge,D),e(D,co),v(t,_e,_),v(t,Te,_),e(Te,uo),v(t,ve,_),v(t,K,_),e(K,S),e(S,ye),e(S,je),e(je,Ee),e(S,mo),e(S,M),e(M,q),e(S,mt),e(K,pn),e(K,R),e(R,$e),e(R,be),e(be,cn),e(R,un),e(R,O),e(O,Pe),e(R,mn),v(t,fo,_),v(t,j,_),e(j,fn),e(j,we),e(we,ho),e(j,hn),e(j,go),e(go,ks),e(j,Gs),e(j,_o),e(_o,Ms),e(j,js),e(j,To),e(To,Es),e(j,Ps),e(j,vo),e(vo,zs),e(j,Cs),e(j,yo),e(yo,qs),e(j,Fs),v(t,Wr,_),v(t,ze,_),e(ze,ft),e(ft,Zn),b($o,Zn,null),e(ze,Is),e(ze,er),e(er,Ls),v(t,Br,_),v(t,W,_),b(bo,W,null),e(W,As),e(W,Ve),e(Ve,gn),e(gn,Ds),e(Ve,Os),e(Ve,_n),e(_n,Ns),e(Ve,Ss),e(Ve,wo),e(wo,Ws),e(Ve,Bs),e(W,Us),e(W,Ce),e(Ce,Hs),e(Ce,Tn),e(Tn,Ks),e(Ce,Rs),e(Ce,vn),e(vn,Js),e(Ce,Ys),e(W,Xs),e(W,ht),b(Vo,ht,null),e(ht,Qs),e(ht,xo),e(xo,Zs),e(xo,yn),e(yn,ea),e(xo,ta),v(t,Ur,_),v(t,qe,_),e(qe,gt),e(gt,tr),b(ko,tr,null),e(qe,oa),e(qe,or),e(or,na),v(t,Hr,_),v(t,B,_),b(Go,B,null),e(B,ra),e(B,Fe),e(Fe,sa),e(Fe,$n),e($n,aa),e(Fe,ia),e(Fe,Mo),e(Mo,la),e(Fe,da),e(B,pa),e(B,Ie),e(Ie,ca),e(Ie,bn),e(bn,ua),e(Ie,ma),e(Ie,wn),e(wn,fa),e(Ie,ha),e(B,ga),b(_t,B,null),v(t,Kr,_),v(t,Le,_),e(Le,Tt),e(Tt,nr),b(jo,nr,null),e(Le,_a),e(Le,rr),e(rr,Ta),v(t,Rr,_),v(t,U,_),b(Eo,U,null),e(U,va),e(U,Ae),e(Ae,ya),e(Ae,Vn),e(Vn,$a),e(Ae,ba),e(Ae,Po),e(Po,wa),e(Ae,Va),e(U,xa),e(U,De),e(De,ka),e(De,xn),e(xn,Ga),e(De,Ma),e(De,kn),e(kn,ja),e(De,Ea),e(U,Pa),b(vt,U,null),v(t,Jr,_),v(t,Oe,_),e(Oe,yt),e(yt,sr),b(zo,sr,null),e(Oe,za),e(Oe,ar),e(ar,Ca),v(t,Yr,_),v(t,L,_),b(Co,L,null),e(L,qa),e(L,qo),e(qo,Fa),e(qo,Fo),e(Fo,Ia),e(qo,La),e(L,Aa),e(L,J),b(Io,J,null),e(J,Da),e(J,Ne),e(Ne,Oa),e(Ne,Gn),e(Gn,Na),e(Ne,Sa),e(Ne,ir),e(ir,Wa),e(Ne,Ba),e(J,Ua),b($t,J,null),e(J,Ha),b(bt,J,null),e(L,Ka),e(L,Y),b(Lo,Y,null),e(Y,Ra),e(Y,Se),e(Se,Ja),e(Se,Mn),e(Mn,Ya),e(Se,Xa),e(Se,lr),e(lr,Qa),e(Se,Za),e(Y,ei),b(wt,Y,null),e(Y,ti),b(Vt,Y,null),e(L,oi),e(L,X),b(Ao,X,null),e(X,ni),e(X,We),e(We,ri),e(We,jn),e(jn,si),e(We,ai),e(We,dr),e(dr,ii),e(We,li),e(X,di),b(xt,X,null),e(X,pi),b(kt,X,null),v(t,Xr,_),v(t,Be,_),e(Be,Gt),e(Gt,pr),b(Do,pr,null),e(Be,ci),e(Be,cr),e(cr,ui),v(t,Qr,_),v(t,Ue,_),b(Oo,Ue,null),e(Ue,mi),e(Ue,Q),b(No,Q,null),e(Q,fi),e(Q,He),e(He,hi),e(He,En),e(En,gi),e(He,_i),e(He,ur),e(ur,Ti),e(He,vi),e(Q,yi),b(Mt,Q,null),e(Q,$i),b(jt,Q,null),v(t,Zr,_),v(t,Ke,_),e(Ke,Et),e(Et,mr),b(So,mr,null),e(Ke,bi),e(Ke,fr),e(fr,wi),v(t,es,_),v(t,Re,_),b(Wo,Re,null),e(Re,Vi),e(Re,Z),b(Bo,Z,null),e(Z,xi),e(Z,Je),e(Je,ki),e(Je,Pn),e(Pn,Gi),e(Je,Mi),e(Je,hr),e(hr,ji),e(Je,Ei),e(Z,Pi),b(Pt,Z,null),e(Z,zi),b(zt,Z,null),v(t,ts,_),v(t,Ye,_),e(Ye,Ct),e(Ct,gr),b(Uo,gr,null),e(Ye,Ci),e(Ye,_r),e(_r,qi),v(t,os,_),v(t,z,_),b(Ho,z,null),e(z,Fi),e(z,Ko),e(Ko,Ii),e(Ko,zn),e(zn,Li),e(Ko,Ai),e(z,Di),e(z,Ro),e(Ro,Oi),e(Ro,Jo),e(Jo,Ni),e(Ro,Si),e(z,Wi),b(qt,z,null),e(z,Bi),e(z,ee),b(Yo,ee,null),e(ee,Ui),e(ee,Xe),e(Xe,Hi),e(Xe,Cn),e(Cn,Ki),e(Xe,Ri),e(Xe,Tr),e(Tr,Ji),e(Xe,Yi),e(ee,Xi),b(Ft,ee,null),e(ee,Qi),b(It,ee,null),e(z,Zi),e(z,te),b(Xo,te,null),e(te,el),e(te,Qe),e(Qe,tl),e(Qe,qn),e(qn,ol),e(Qe,nl),e(Qe,vr),e(vr,rl),e(Qe,sl),e(te,al),b(Lt,te,null),e(te,il),b(At,te,null),e(z,ll),e(z,oe),b(Qo,oe,null),e(oe,dl),e(oe,Ze),e(Ze,pl),e(Ze,Fn),e(Fn,cl),e(Ze,ul),e(Ze,yr),e(yr,ml),e(Ze,fl),e(oe,hl),b(Dt,oe,null),e(oe,gl),b(Ot,oe,null),v(t,ns,_),v(t,et,_),e(et,Nt),e(Nt,$r),b(Zo,$r,null),e(et,_l),e(et,br),e(br,Tl),v(t,rs,_),v(t,tt,_),b(en,tt,null),e(tt,vl),e(tt,ne),b(tn,ne,null),e(ne,yl),e(ne,ot),e(ot,$l),e(ot,In),e(In,bl),e(ot,wl),e(ot,wr),e(wr,Vl),e(ot,xl),e(ne,kl),b(St,ne,null),e(ne,Gl),b(Wt,ne,null),v(t,ss,_),v(t,nt,_),e(nt,Bt),e(Bt,Vr),b(on,Vr,null),e(nt,Ml),e(nt,xr),e(xr,jl),v(t,as,_),v(t,rt,_),b(nn,rt,null),e(rt,El),e(rt,re),b(rn,re,null),e(re,Pl),e(re,st),e(st,zl),e(st,Ln),e(Ln,Cl),e(st,ql),e(st,kr),e(kr,Fl),e(st,Il),e(re,Ll),b(Ut,re,null),e(re,Al),b(Ht,re,null),is=!0},p(t,[_]){const sn={};_&2&&(sn.$$scope={dirty:_,ctx:t}),_t.$set(sn);const Gr={};_&2&&(Gr.$$scope={dirty:_,ctx:t}),vt.$set(Gr);const Mr={};_&2&&(Mr.$$scope={dirty:_,ctx:t}),$t.$set(Mr);const jr={};_&2&&(jr.$$scope={dirty:_,ctx:t}),bt.$set(jr);const an={};_&2&&(an.$$scope={dirty:_,ctx:t}),wt.$set(an);const Er={};_&2&&(Er.$$scope={dirty:_,ctx:t}),Vt.$set(Er);const Pr={};_&2&&(Pr.$$scope={dirty:_,ctx:t}),xt.$set(Pr);const zr={};_&2&&(zr.$$scope={dirty:_,ctx:t}),kt.$set(zr);const at={};_&2&&(at.$$scope={dirty:_,ctx:t}),Mt.$set(at);const Cr={};_&2&&(Cr.$$scope={dirty:_,ctx:t}),jt.$set(Cr);const qr={};_&2&&(qr.$$scope={dirty:_,ctx:t}),Pt.$set(qr);const Fr={};_&2&&(Fr.$$scope={dirty:_,ctx:t}),zt.$set(Fr);const Ir={};_&2&&(Ir.$$scope={dirty:_,ctx:t}),qt.$set(Ir);const Lr={};_&2&&(Lr.$$scope={dirty:_,ctx:t}),Ft.$set(Lr);const Ar={};_&2&&(Ar.$$scope={dirty:_,ctx:t}),It.$set(Ar);const ln={};_&2&&(ln.$$scope={dirty:_,ctx:t}),Lt.$set(ln);const it={};_&2&&(it.$$scope={dirty:_,ctx:t}),At.$set(it);const Dr={};_&2&&(Dr.$$scope={dirty:_,ctx:t}),Dt.$set(Dr);const Or={};_&2&&(Or.$$scope={dirty:_,ctx:t}),Ot.$set(Or);const lt={};_&2&&(lt.$$scope={dirty:_,ctx:t}),St.$set(lt);const Nr={};_&2&&(Nr.$$scope={dirty:_,ctx:t}),Wt.$set(Nr);const Sr={};_&2&&(Sr.$$scope={dirty:_,ctx:t}),Ut.$set(Sr);const C={};_&2&&(C.$$scope={dirty:_,ctx:t}),Ht.$set(C)},i(t){is||(w(n.$$.fragment,t),w(de.$$.fragment,t),w($o.$$.fragment,t),w(bo.$$.fragment,t),w(Vo.$$.fragment,t),w(ko.$$.fragment,t),w(Go.$$.fragment,t),w(_t.$$.fragment,t),w(jo.$$.fragment,t),w(Eo.$$.fragment,t),w(vt.$$.fragment,t),w(zo.$$.fragment,t),w(Co.$$.fragment,t),w(Io.$$.fragment,t),w($t.$$.fragment,t),w(bt.$$.fragment,t),w(Lo.$$.fragment,t),w(wt.$$.fragment,t),w(Vt.$$.fragment,t),w(Ao.$$.fragment,t),w(xt.$$.fragment,t),w(kt.$$.fragment,t),w(Do.$$.fragment,t),w(Oo.$$.fragment,t),w(No.$$.fragment,t),w(Mt.$$.fragment,t),w(jt.$$.fragment,t),w(So.$$.fragment,t),w(Wo.$$.fragment,t),w(Bo.$$.fragment,t),w(Pt.$$.fragment,t),w(zt.$$.fragment,t),w(Uo.$$.fragment,t),w(Ho.$$.fragment,t),w(qt.$$.fragment,t),w(Yo.$$.fragment,t),w(Ft.$$.fragment,t),w(It.$$.fragment,t),w(Xo.$$.fragment,t),w(Lt.$$.fragment,t),w(At.$$.fragment,t),w(Qo.$$.fragment,t),w(Dt.$$.fragment,t),w(Ot.$$.fragment,t),w(Zo.$$.fragment,t),w(en.$$.fragment,t),w(tn.$$.fragment,t),w(St.$$.fragment,t),w(Wt.$$.fragment,t),w(on.$$.fragment,t),w(nn.$$.fragment,t),w(rn.$$.fragment,t),w(Ut.$$.fragment,t),w(Ht.$$.fragment,t),is=!0)},o(t){V(n.$$.fragment,t),V(de.$$.fragment,t),V($o.$$.fragment,t),V(bo.$$.fragment,t),V(Vo.$$.fragment,t),V(ko.$$.fragment,t),V(Go.$$.fragment,t),V(_t.$$.fragment,t),V(jo.$$.fragment,t),V(Eo.$$.fragment,t),V(vt.$$.fragment,t),V(zo.$$.fragment,t),V(Co.$$.fragment,t),V(Io.$$.fragment,t),V($t.$$.fragment,t),V(bt.$$.fragment,t),V(Lo.$$.fragment,t),V(wt.$$.fragment,t),V(Vt.$$.fragment,t),V(Ao.$$.fragment,t),V(xt.$$.fragment,t),V(kt.$$.fragment,t),V(Do.$$.fragment,t),V(Oo.$$.fragment,t),V(No.$$.fragment,t),V(Mt.$$.fragment,t),V(jt.$$.fragment,t),V(So.$$.fragment,t),V(Wo.$$.fragment,t),V(Bo.$$.fragment,t),V(Pt.$$.fragment,t),V(zt.$$.fragment,t),V(Uo.$$.fragment,t),V(Ho.$$.fragment,t),V(qt.$$.fragment,t),V(Yo.$$.fragment,t),V(Ft.$$.fragment,t),V(It.$$.fragment,t),V(Xo.$$.fragment,t),V(Lt.$$.fragment,t),V(At.$$.fragment,t),V(Qo.$$.fragment,t),V(Dt.$$.fragment,t),V(Ot.$$.fragment,t),V(Zo.$$.fragment,t),V(en.$$.fragment,t),V(tn.$$.fragment,t),V(St.$$.fragment,t),V(Wt.$$.fragment,t),V(on.$$.fragment,t),V(nn.$$.fragment,t),V(rn.$$.fragment,t),V(Ut.$$.fragment,t),V(Ht.$$.fragment,t),is=!1},d(t){o(d),t&&o(T),t&&o(u),x(n),t&&o(ke),t&&o(E),x(de),t&&o(dt),t&&o(F),t&&o(ct),t&&o(he),t&&o(ut),t&&o(ge),t&&o(_e),t&&o(Te),t&&o(ve),t&&o(K),t&&o(fo),t&&o(j),t&&o(Wr),t&&o(ze),x($o),t&&o(Br),t&&o(W),x(bo),x(Vo),t&&o(Ur),t&&o(qe),x(ko),t&&o(Hr),t&&o(B),x(Go),x(_t),t&&o(Kr),t&&o(Le),x(jo),t&&o(Rr),t&&o(U),x(Eo),x(vt),t&&o(Jr),t&&o(Oe),x(zo),t&&o(Yr),t&&o(L),x(Co),x(Io),x($t),x(bt),x(Lo),x(wt),x(Vt),x(Ao),x(xt),x(kt),t&&o(Xr),t&&o(Be),x(Do),t&&o(Qr),t&&o(Ue),x(Oo),x(No),x(Mt),x(jt),t&&o(Zr),t&&o(Ke),x(So),t&&o(es),t&&o(Re),x(Wo),x(Bo),x(Pt),x(zt),t&&o(ts),t&&o(Ye),x(Uo),t&&o(os),t&&o(z),x(Ho),x(qt),x(Yo),x(Ft),x(It),x(Xo),x(Lt),x(At),x(Qo),x(Dt),x(Ot),t&&o(ns),t&&o(et),x(Zo),t&&o(rs),t&&o(tt),x(en),x(tn),x(St),x(Wt),t&&o(ss),t&&o(nt),x(on),t&&o(as),t&&o(rt),x(nn),x(rn),x(Ut),x(Ht)}}}const Ep={local:"groupvit",sections:[{local:"overview",title:"Overview"},{local:"transformers.GroupViTConfig",title:"GroupViTConfig"},{local:"transformers.GroupViTTextConfig",title:"GroupViTTextConfig"},{local:"transformers.GroupViTVisionConfig",title:"GroupViTVisionConfig"},{local:"transformers.GroupViTModel",title:"GroupViTModel"},{local:"transformers.GroupViTTextModel",title:"GroupViTTextModel"},{local:"transformers.GroupViTVisionModel",title:"GroupViTVisionModel"},{local:"transformers.TFGroupViTModel",title:"TFGroupViTModel"},{local:"transformers.TFGroupViTTextModel",title:"TFGroupViTTextModel"},{local:"transformers.TFGroupViTVisionModel",title:"TFGroupViTVisionModel"}],title:"GroupViT"};function Pp(k){return sp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ap extends tp{constructor(d){super();op(this,d,Pp,jp,np,{})}}export{Ap as default,Ep as metadata};
