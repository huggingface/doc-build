import{S as Xd,i as Qd,s as Zd,e as a,k as h,w as $,t as r,M as ep,c as i,d as o,m as g,a as d,x as y,h as s,b as m,G as e,g as v,y as b,q as w,o as V,B as x,v as tp,L as ae}from"../../chunks/vendor-hf-doc-builder.js";import{T as ue}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function op(k){let l,T,u,c,f;return c=new ie({props:{code:`from transformers import GroupViTTextConfig, GroupViTTextModel

# Initializing a GroupViTTextModel with nvidia/groupvit-gcc-yfcc style configuration
configuration = GroupViTTextConfig()

model = GroupViTTextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTTextConfig, GroupViTTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTTextModel with nvidia/groupvit-gcc-yfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),T=r("Example:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Example:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function np(k){let l,T,u,c,f;return c=new ie({props:{code:`from transformers import GroupViTVisionConfig, GroupViTVisionModel

# Initializing a GroupViTVisionModel with nvidia/groupvit-gcc-yfcc style configuration
configuration = GroupViTVisionConfig()

model = GroupViTVisionModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GroupViTVisionConfig, GroupViTVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GroupViTVisionModel with nvidia/groupvit-gcc-yfcc style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GroupViTVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),T=r("Example:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Example:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function rp(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function sp(k){let l,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function ap(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function ip(k){let l,T,u,c,f;return c=new ie({props:{code:`from transformers import CLIPTokenizer, GroupViTModel

model = GroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gcc-yfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="pt")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, GroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function lp(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function dp(k){let l,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function pp(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function cp(k){let l,T,u,c,f;return c=new ie({props:{code:`from transformers import CLIPTokenizer, GroupViTTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function up(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function mp(k){let l,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function fp(k){let l,T,u,c,f,n,p,G,ao,xe,j,H,le,de,io,pe,lo,lt,F,fe,ce,dt,L,I,po,ke,pt,he,Ge,ct,ge,D,co,_e,Te,uo,ve,K,S,$e,Me,Ee,mo;return{c(){l=a("p"),T=r("TF 2.0 models accepts two formats as inputs:"),u=h(),c=a("ul"),f=a("li"),n=r("having all inputs as keyword arguments (like PyTorch models), or"),p=h(),G=a("li"),ao=r("having all inputs as a list, tuple or dict in the first positional arguments."),xe=h(),j=a("p"),H=r("This second option is useful when using "),le=a("code"),de=r("tf.keras.Model.fit"),io=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),pe=a("code"),lo=r("model(inputs)"),lt=r("."),F=h(),fe=a("p"),ce=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),dt=h(),L=a("ul"),I=a("li"),po=r("a single Tensor with "),ke=a("code"),pt=r("input_ids"),he=r(" only and nothing else: "),Ge=a("code"),ct=r("model(input_ids)"),ge=h(),D=a("li"),co=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Te=r("model([input_ids, attention_mask])"),uo=r(" or "),ve=a("code"),K=r("model([input_ids, attention_mask, token_type_ids])"),S=h(),$e=a("li"),Me=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Ee=a("code"),mo=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(M){l=i(M,"P",{});var q=d(l);T=s(q,"TF 2.0 models accepts two formats as inputs:"),q.forEach(o),u=g(M),c=i(M,"UL",{});var ut=d(c);f=i(ut,"LI",{});var ln=d(f);n=s(ln,"having all inputs as keyword arguments (like PyTorch models), or"),ln.forEach(o),p=g(ut),G=i(ut,"LI",{});var R=d(G);ao=s(R,"having all inputs as a list, tuple or dict in the first positional arguments."),R.forEach(o),ut.forEach(o),xe=g(M),j=i(M,"P",{});var ye=d(j);H=s(ye,"This second option is useful when using "),le=i(ye,"CODE",{});var be=d(le);de=s(be,"tf.keras.Model.fit"),be.forEach(o),io=s(ye,` method which currently requires having all the
tensors in the first argument of the model call function: `),pe=i(ye,"CODE",{});var dn=d(pe);lo=s(dn,"model(inputs)"),dn.forEach(o),lt=s(ye,"."),ye.forEach(o),F=g(M),fe=i(M,"P",{});var pn=d(fe);ce=s(pn,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pn.forEach(o),dt=g(M),L=i(M,"UL",{});var O=d(L);I=i(O,"LI",{});var je=d(I);po=s(je,"a single Tensor with "),ke=i(je,"CODE",{});var cn=d(ke);pt=s(cn,"input_ids"),cn.forEach(o),he=s(je," only and nothing else: "),Ge=i(je,"CODE",{});var fo=d(Ge);ct=s(fo,"model(input_ids)"),fo.forEach(o),je.forEach(o),ge=g(O),D=i(O,"LI",{});var E=d(D);co=s(E,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=i(E,"CODE",{});var un=d(_e);Te=s(un,"model([input_ids, attention_mask])"),un.forEach(o),uo=s(E," or "),ve=i(E,"CODE",{});var we=d(ve);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(o),E.forEach(o),S=g(O),$e=i(O,"LI",{});var ho=d($e);Me=s(ho,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Ee=i(ho,"CODE",{});var mn=d(Ee);mo=s(mn,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),mn.forEach(o),ho.forEach(o),O.forEach(o)},m(M,q){v(M,l,q),e(l,T),v(M,u,q),v(M,c,q),e(c,f),e(f,n),e(c,p),e(c,G),e(G,ao),v(M,xe,q),v(M,j,q),e(j,H),e(j,le),e(le,de),e(j,io),e(j,pe),e(pe,lo),e(j,lt),v(M,F,q),v(M,fe,q),e(fe,ce),v(M,dt,q),v(M,L,q),e(L,I),e(I,po),e(I,ke),e(ke,pt),e(I,he),e(I,Ge),e(Ge,ct),e(L,ge),e(L,D),e(D,co),e(D,_e),e(_e,Te),e(D,uo),e(D,ve),e(ve,K),e(L,S),e(L,$e),e($e,Me),e($e,Ee),e(Ee,mo)},d(M){M&&o(l),M&&o(u),M&&o(c),M&&o(xe),M&&o(j),M&&o(F),M&&o(fe),M&&o(dt),M&&o(L)}}}function hp(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function gp(k){let l,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
import requests
from transformers import AutoProcessor, TFGroupViTModel

model = TFGroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
processor = AutoProcessor.from_pretrained("nvidia/groupvit-gcc-yfcc")

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

inputs = processor(
    text=["a photo of a cat", "a photo of a dog"], images=image, return_tensors="tf", padding=True
)

outputs = model(**inputs)
logits_per_image = outputs.logits_per_image  # this is the image-text similarity score
probs = logits_per_image.softmax(dim=1)  # we can take the softmax to get the label probabilities`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, TFGroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    text=[<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_per_image = outputs.logits_per_image  <span class="hljs-comment"># this is the image-text similarity score</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits_per_image.softmax(dim=<span class="hljs-number">1</span>)  <span class="hljs-comment"># we can take the softmax to get the label probabilities</span>`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function _p(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function Tp(k){let l,T,u,c,f;return c=new ie({props:{code:`from transformers import CLIPTokenizer, TFGroupViTModel

model = TFGroupViTModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
tokenizer = CLIPTokenizer.from_pretrained("nvidia/groupvit-gcc-yfcc")

inputs = tokenizer(["a photo of a cat", "a photo of a dog"], padding=True, return_tensors="tf")
text_features = model.get_text_features(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CLIPTokenizer, TFGroupViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGroupViTModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CLIPTokenizer.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;a photo of a cat&quot;</span>, <span class="hljs-string">&quot;a photo of a dog&quot;</span>], padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>text_features = model.get_text_features(**inputs)`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function vp(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function $p(k){let l,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
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

<span class="hljs-meta">&gt;&gt;&gt; </span>image_features = model.get_image_features(**inputs)`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function yp(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function bp(k){let l,T,u,c,f;return c=new ie({props:{code:`from transformers import CLIPTokenizer, TFGroupViTTextModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled (EOS token) states</span>`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function wp(k){let l,T,u,c,f;return{c(){l=a("p"),T=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),c=r("Module"),f=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=i(p,"CODE",{});var G=d(u);c=s(G,"Module"),G.forEach(o),f=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(o)},m(n,p){v(n,l,p),e(l,T),e(l,u),e(u,c),e(l,f)},d(n){n&&o(l)}}}function Vp(k){let l,T,u,c,f;return c=new ie({props:{code:`from PIL import Image
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output  <span class="hljs-comment"># pooled CLS states</span>`}}),{c(){l=a("p"),T=r("Examples:"),u=h(),$(c.$$.fragment)},l(n){l=i(n,"P",{});var p=d(l);T=s(p,"Examples:"),p.forEach(o),u=g(n),y(c.$$.fragment,n)},m(n,p){v(n,l,p),e(l,T),v(n,u,p),b(c,n,p),f=!0},p:ae,i(n){f||(w(c.$$.fragment,n),f=!0)},o(n){V(c.$$.fragment,n),f=!1},d(n){n&&o(l),n&&o(u),x(c,n)}}}function xp(k){let l,T,u,c,f,n,p,G,ao,xe,j,H,le,de,io,pe,lo,lt,F,fe,ce,dt,L,I,po,ke,pt,he,Ge,ct,ge,D,co,_e,Te,uo,ve,K,S,$e,Me,Ee,mo,M,q,ut,ln,R,ye,be,dn,pn,O,je,cn,fo,E,un,we,ho,mn,go,xs,ks,_o,Gs,Ms,To,Es,js,vo,Ps,zs,$o,Cs,qs,Sr,Pe,mt,Xn,yo,Fs,Qn,Is,Wr,W,bo,As,ft,fn,Ls,Ds,hn,Os,Ns,Ss,ze,Ws,gn,Bs,Us,_n,Hs,Ks,Rs,ht,wo,Js,Vo,Ys,Tn,Xs,Qs,Br,Ce,gt,Zn,xo,Zs,er,ea,Ur,B,ko,ta,qe,oa,vn,na,ra,Go,sa,aa,ia,Fe,la,$n,da,pa,yn,ca,ua,ma,_t,Hr,Ie,Tt,tr,Mo,fa,or,ha,Kr,U,Eo,ga,Ae,_a,bn,Ta,va,jo,$a,ya,ba,Le,wa,wn,Va,xa,Vn,ka,Ga,Ma,vt,Rr,De,$t,nr,Po,Ea,rr,ja,Jr,A,zo,Pa,Co,za,qo,Ca,qa,Fa,J,Fo,Ia,Oe,Aa,xn,La,Da,sr,Oa,Na,Sa,yt,Wa,bt,Ba,Y,Io,Ua,Ne,Ha,kn,Ka,Ra,ar,Ja,Ya,Xa,wt,Qa,Vt,Za,X,Ao,ei,Se,ti,Gn,oi,ni,ir,ri,si,ai,xt,ii,kt,Yr,We,Gt,lr,Lo,li,dr,di,Xr,Be,Do,pi,Q,Oo,ci,Ue,ui,Mn,mi,fi,pr,hi,gi,_i,Mt,Ti,Et,Qr,He,jt,cr,No,vi,ur,$i,Zr,Ke,So,yi,Z,Wo,bi,Re,wi,En,Vi,xi,mr,ki,Gi,Mi,Pt,Ei,zt,es,Je,Ct,fr,Bo,ji,hr,Pi,ts,z,Uo,zi,Ho,Ci,jn,qi,Fi,Ii,Ko,Ai,Ro,Li,Di,Oi,qt,Ni,ee,Jo,Si,Ye,Wi,Pn,Bi,Ui,gr,Hi,Ki,Ri,Ft,Ji,It,Yi,te,Yo,Xi,Xe,Qi,zn,Zi,el,_r,tl,ol,nl,At,rl,Lt,sl,oe,Xo,al,Qe,il,Cn,ll,dl,Tr,pl,cl,ul,Dt,ml,Ot,os,Ze,Nt,vr,Qo,fl,$r,hl,ns,et,Zo,gl,ne,en,_l,tt,Tl,qn,vl,$l,yr,yl,bl,wl,St,Vl,Wt,rs,ot,Bt,br,tn,xl,wr,kl,ss,nt,on,Gl,re,nn,Ml,rt,El,Fn,jl,Pl,Vr,zl,Cl,ql,Ut,Fl,Ht,as;return n=new me({}),de=new me({}),yo=new me({}),bo=new P({props:{name:"class transformers.GroupViTConfig",anchor:"transformers.GroupViTConfig",parameters:[{name:"text_config_dict",val:" = None"},{name:"vision_config_dict",val:" = None"},{name:"projection_dim",val:" = 256"},{name:"projection_intermediate_dim",val:" = 4096"},{name:"logit_scale_init_value",val:" = 2.6592"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTConfig.text_config_dict",description:`<strong>text_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextConfig">GroupViTTextConfig</a>.`,name:"text_config_dict"},{anchor:"transformers.GroupViTConfig.vision_config_dict",description:`<strong>vision_config_dict</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of configuration options used to initialize <a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionConfig">GroupViTVisionConfig</a>.`,name:"vision_config_dict"},{anchor:"transformers.GroupViTConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimentionality of text and vision projection layers.`,name:"projection_dim"},{anchor:"transformers.GroupViTConfig.projection_intermediate_dim",description:`<strong>projection_intermediate_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimentionality of intermediate layer of text and vision projection layers.`,name:"projection_intermediate_dim"},{anchor:"transformers.GroupViTConfig.logit_scale_init_value",description:`<strong>logit_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 2.6592) &#x2014;
The inital value of the <em>logit_scale</em> parameter. Default is used as per the original GroupViT
implementation.`,name:"logit_scale_init_value"},{anchor:"transformers.GroupViTConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L272"}}),wo=new P({props:{name:"from_text_vision_configs",anchor:"transformers.GroupViTConfig.from_text_vision_configs",parameters:[{name:"text_config",val:": GroupViTTextConfig"},{name:"vision_config",val:": GroupViTVisionConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L329",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig"
>GroupViTConfig</a></p>
`}}),xo=new me({}),ko=new P({props:{name:"class transformers.GroupViTTextConfig",anchor:"transformers.GroupViTTextConfig",parameters:[{name:"vocab_size",val:" = 49408"},{name:"hidden_size",val:" = 256"},{name:"intermediate_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 4"},{name:"max_position_embeddings",val:" = 77"},{name:"hidden_act",val:" = 'quick_gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 49408) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L39"}}),_t=new se({props:{anchor:"transformers.GroupViTTextConfig.example",$$slots:{default:[op]},$$scope:{ctx:k}}}),Mo=new me({}),Eo=new P({props:{name:"class transformers.GroupViTVisionConfig",anchor:"transformers.GroupViTVisionConfig",parameters:[{name:"hidden_size",val:" = 384"},{name:"intermediate_size",val:" = 1536"},{name:"depths",val:" = [6, 3, 3]"},{name:"num_hidden_layers",val:" = 12"},{name:"num_group_tokens",val:" = [64, 8, 0]"},{name:"num_output_groups",val:" = [64, 8, 8]"},{name:"num_attention_heads",val:" = 6"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"hidden_act",val:" = 'gelu'"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"initializer_factor",val:" = 1.0"},{name:"assign_eps",val:" = 1.0"},{name:"assign_mlp_ratio",val:" = [0.5, 4]"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GroupViTVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
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
testing).`,name:"initializer_factor"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/configuration_groupvit.py#L146"}}),vt=new se({props:{anchor:"transformers.GroupViTVisionConfig.example",$$slots:{default:[np]},$$scope:{ctx:k}}}),Po=new me({}),zo=new P({props:{name:"class transformers.GroupViTModel",anchor:"transformers.GroupViTModel",parameters:[{name:"config",val:": GroupViTConfig"}],parametersDescription:[{anchor:"transformers.GroupViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig">GroupViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1324"}}),Fo=new P({props:{name:"forward",anchor:"transformers.GroupViTModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_segmentation",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTModel.forward.return_loss",description:`<strong>return_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),yt=new ue({props:{$$slots:{default:[rp]},$$scope:{ctx:k}}}),bt=new se({props:{anchor:"transformers.GroupViTModel.forward.example",$$slots:{default:[sp]},$$scope:{ctx:k}}}),Io=new P({props:{name:"get_text_features",anchor:"transformers.GroupViTModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),wt=new ue({props:{$$slots:{default:[ap]},$$scope:{ctx:k}}}),Vt=new se({props:{anchor:"transformers.GroupViTModel.get_text_features.example",$$slots:{default:[ip]},$$scope:{ctx:k}}}),Ao=new P({props:{name:"get_image_features",anchor:"transformers.GroupViTModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),xt=new ue({props:{$$slots:{default:[lp]},$$scope:{ctx:k}}}),kt=new se({props:{anchor:"transformers.GroupViTModel.get_image_features.example",$$slots:{default:[dp]},$$scope:{ctx:k}}}),Lo=new me({}),Do=new P({props:{name:"class transformers.GroupViTTextModel",anchor:"transformers.GroupViTTextModel",parameters:[{name:"config",val:": GroupViTTextConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1160"}}),Oo=new P({props:{name:"forward",anchor:"transformers.GroupViTTextModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Mt=new ue({props:{$$slots:{default:[pp]},$$scope:{ctx:k}}}),Et=new se({props:{anchor:"transformers.GroupViTTextModel.forward.example",$$slots:{default:[cp]},$$scope:{ctx:k}}}),No=new me({}),So=new P({props:{name:"class transformers.GroupViTVisionModel",anchor:"transformers.GroupViTVisionModel",parameters:[{name:"config",val:": GroupViTVisionConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_groupvit.py#L1271"}}),Wo=new P({props:{name:"forward",anchor:"transformers.GroupViTVisionModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.GroupViTVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Padding will be ignored by default should you provide it. Pixel values can be obtained using
<a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See <code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.GroupViTVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),Pt=new ue({props:{$$slots:{default:[up]},$$scope:{ctx:k}}}),zt=new se({props:{anchor:"transformers.GroupViTVisionModel.forward.example",$$slots:{default:[mp]},$$scope:{ctx:k}}}),Bo=new me({}),Uo=new P({props:{name:"class transformers.TFGroupViTModel",anchor:"transformers.TFGroupViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGroupViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig">GroupViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1803"}}),qt=new ue({props:{$$slots:{default:[fp]},$$scope:{ctx:k}}}),Jo=new P({props:{name:"call",anchor:"transformers.TFGroupViTModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"return_loss",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_segmentation",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGroupViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFGroupViTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),Ft=new ue({props:{$$slots:{default:[hp]},$$scope:{ctx:k}}}),It=new se({props:{anchor:"transformers.TFGroupViTModel.call.example",$$slots:{default:[gp]},$$scope:{ctx:k}}}),Yo=new P({props:{name:"get_text_features",anchor:"transformers.TFGroupViTModel.get_text_features",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTModel.get_text_features.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),At=new ue({props:{$$slots:{default:[_p]},$$scope:{ctx:k}}}),Lt=new se({props:{anchor:"transformers.TFGroupViTModel.get_text_features.example",$$slots:{default:[Tp]},$$scope:{ctx:k}}}),Xo=new P({props:{name:"get_image_features",anchor:"transformers.TFGroupViTModel.get_image_features",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTModel.get_image_features.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code>, <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFGroupViTModel.get_image_features.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),Dt=new ue({props:{$$slots:{default:[vp]},$$scope:{ctx:k}}}),Ot=new se({props:{anchor:"transformers.TFGroupViTModel.get_image_features.example",$$slots:{default:[$p]},$$scope:{ctx:k}}}),Qo=new me({}),Zo=new P({props:{name:"class transformers.TFGroupViTTextModel",anchor:"transformers.TFGroupViTTextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1619"}}),en=new P({props:{name:"call",anchor:"transformers.TFGroupViTTextModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTTextModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),St=new ue({props:{$$slots:{default:[yp]},$$scope:{ctx:k}}}),Wt=new se({props:{anchor:"transformers.TFGroupViTTextModel.call.example",$$slots:{default:[bp]},$$scope:{ctx:k}}}),tn=new me({}),on=new P({props:{name:"class transformers.TFGroupViTVisionModel",anchor:"transformers.TFGroupViTVisionModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/groupvit/modeling_tf_groupvit.py#L1707"}}),nn=new P({props:{name:"call",anchor:"transformers.TFGroupViTVisionModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGroupViTVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code>, <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/clip#transformers.CLIPFeatureExtractor">CLIPFeatureExtractor</a>. See
<code>CLIPFeatureExtractor.__call__()</code> for details.`,name:"pixel_values"},{anchor:"transformers.TFGroupViTVisionModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
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
`}}),Ut=new ue({props:{$$slots:{default:[wp]},$$scope:{ctx:k}}}),Ht=new se({props:{anchor:"transformers.TFGroupViTVisionModel.call.example",$$slots:{default:[Vp]},$$scope:{ctx:k}}}),{c(){l=a("meta"),T=h(),u=a("h1"),c=a("a"),f=a("span"),$(n.$$.fragment),p=h(),G=a("span"),ao=r("GroupViT"),xe=h(),j=a("h2"),H=a("a"),le=a("span"),$(de.$$.fragment),io=h(),pe=a("span"),lo=r("Overview"),lt=h(),F=a("p"),fe=r("The GroupViT model was proposed in "),ce=a("a"),dt=r("GroupViT: Semantic Segmentation Emerges from Text Supervision"),L=r(` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),I=a("a"),po=r("CLIP"),ke=r(", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),pt=h(),he=a("p"),Ge=r("The abstract from the paper is the following:"),ct=h(),ge=a("p"),D=a("em"),co=r("Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),_e=h(),Te=a("p"),uo=r("Tips:"),ve=h(),K=a("ul"),S=a("li"),$e=r("You may specify "),Me=a("code"),Ee=r("output_segmentation=True"),mo=r(" in the forward of "),M=a("code"),q=r("GroupViTModel"),ut=r(" to get the segmentation logits of input texts."),ln=h(),R=a("li"),ye=r("The quickest way to get started with GroupViT is by checking the "),be=a("a"),dn=r("example notebooks"),pn=r(" (which showcase zero-shot segmentation inference). One can also check out the "),O=a("a"),je=r("HuggingFace Spaces demo"),cn=r(" to play with GroupViT."),fo=h(),E=a("p"),un=r("This model was contributed by "),we=a("a"),ho=r("xvjiarui"),mn=r(". The TensorFlow version was contributed by "),go=a("a"),xs=r("ariG23498"),ks=r(" with the help of "),_o=a("a"),Gs=r("Yih-Dar SHIEH"),Ms=r(", "),To=a("a"),Es=r("Amy Roberts"),js=r(", and "),vo=a("a"),Ps=r("Joao Gante"),zs=r(`.
The original code can be found `),$o=a("a"),Cs=r("here"),qs=r("."),Sr=h(),Pe=a("h2"),mt=a("a"),Xn=a("span"),$(yo.$$.fragment),Fs=h(),Qn=a("span"),Is=r("GroupViTConfig"),Wr=h(),W=a("div"),$(bo.$$.fragment),As=h(),ft=a("p"),fn=a("a"),Ls=r("GroupViTConfig"),Ds=r(" is the configuration class to store the configuration of a "),hn=a("a"),Os=r("GroupViTModel"),Ns=r(`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs.`),Ss=h(),ze=a("p"),Ws=r("Configuration objects inherit from "),gn=a("a"),Bs=r("PretrainedConfig"),Us=r(` and can be used to control the model outputs. Read the
documentation from `),_n=a("a"),Hs=r("PretrainedConfig"),Ks=r(" for more information."),Rs=h(),ht=a("div"),$(wo.$$.fragment),Js=h(),Vo=a("p"),Ys=r("Instantiate a "),Tn=a("a"),Xs=r("GroupViTConfig"),Qs=r(` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),Br=h(),Ce=a("h2"),gt=a("a"),Zn=a("span"),$(xo.$$.fragment),Zs=h(),er=a("span"),ea=r("GroupViTTextConfig"),Ur=h(),B=a("div"),$(ko.$$.fragment),ta=h(),qe=a("p"),oa=r("This is the configuration class to store the configuration of a "),vn=a("a"),na=r("GroupViTTextModel"),ra=r(`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Go=a("a"),sa=r("nvidia/groupvit-gcc-yfcc"),aa=r(" architecture."),ia=h(),Fe=a("p"),la=r("Configuration objects inherit from "),$n=a("a"),da=r("PretrainedConfig"),pa=r(` and can be used to control the model outputs. Read the
documentation from `),yn=a("a"),ca=r("PretrainedConfig"),ua=r(" for more information."),ma=h(),$(_t.$$.fragment),Hr=h(),Ie=a("h2"),Tt=a("a"),tr=a("span"),$(Mo.$$.fragment),fa=h(),or=a("span"),ha=r("GroupViTVisionConfig"),Kr=h(),U=a("div"),$(Eo.$$.fragment),ga=h(),Ae=a("p"),_a=r("This is the configuration class to store the configuration of a "),bn=a("a"),Ta=r("GroupViTVisionModel"),va=r(`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),jo=a("a"),$a=r("nvidia/groupvit-gcc-yfcc"),ya=r(" architecture."),ba=h(),Le=a("p"),wa=r("Configuration objects inherit from "),wn=a("a"),Va=r("PretrainedConfig"),xa=r(` and can be used to control the model outputs. Read the
documentation from `),Vn=a("a"),ka=r("PretrainedConfig"),Ga=r(" for more information."),Ma=h(),$(vt.$$.fragment),Rr=h(),De=a("h2"),$t=a("a"),nr=a("span"),$(Po.$$.fragment),Ea=h(),rr=a("span"),ja=r("GroupViTModel"),Jr=h(),A=a("div"),$(zo.$$.fragment),Pa=h(),Co=a("p"),za=r("This model is a PyTorch "),qo=a("a"),Ca=r("torch.nn.Module"),qa=r(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fa=h(),J=a("div"),$(Fo.$$.fragment),Ia=h(),Oe=a("p"),Aa=r("The "),xn=a("a"),La=r("GroupViTModel"),Da=r(" forward method, overrides the "),sr=a("code"),Oa=r("__call__"),Na=r(" special method."),Sa=h(),$(yt.$$.fragment),Wa=h(),$(bt.$$.fragment),Ba=h(),Y=a("div"),$(Io.$$.fragment),Ua=h(),Ne=a("p"),Ha=r("The "),kn=a("a"),Ka=r("GroupViTModel"),Ra=r(" forward method, overrides the "),ar=a("code"),Ja=r("__call__"),Ya=r(" special method."),Xa=h(),$(wt.$$.fragment),Qa=h(),$(Vt.$$.fragment),Za=h(),X=a("div"),$(Ao.$$.fragment),ei=h(),Se=a("p"),ti=r("The "),Gn=a("a"),oi=r("GroupViTModel"),ni=r(" forward method, overrides the "),ir=a("code"),ri=r("__call__"),si=r(" special method."),ai=h(),$(xt.$$.fragment),ii=h(),$(kt.$$.fragment),Yr=h(),We=a("h2"),Gt=a("a"),lr=a("span"),$(Lo.$$.fragment),li=h(),dr=a("span"),di=r("GroupViTTextModel"),Xr=h(),Be=a("div"),$(Do.$$.fragment),pi=h(),Q=a("div"),$(Oo.$$.fragment),ci=h(),Ue=a("p"),ui=r("The "),Mn=a("a"),mi=r("GroupViTTextModel"),fi=r(" forward method, overrides the "),pr=a("code"),hi=r("__call__"),gi=r(" special method."),_i=h(),$(Mt.$$.fragment),Ti=h(),$(Et.$$.fragment),Qr=h(),He=a("h2"),jt=a("a"),cr=a("span"),$(No.$$.fragment),vi=h(),ur=a("span"),$i=r("GroupViTVisionModel"),Zr=h(),Ke=a("div"),$(So.$$.fragment),yi=h(),Z=a("div"),$(Wo.$$.fragment),bi=h(),Re=a("p"),wi=r("The "),En=a("a"),Vi=r("GroupViTVisionModel"),xi=r(" forward method, overrides the "),mr=a("code"),ki=r("__call__"),Gi=r(" special method."),Mi=h(),$(Pt.$$.fragment),Ei=h(),$(zt.$$.fragment),es=h(),Je=a("h2"),Ct=a("a"),fr=a("span"),$(Bo.$$.fragment),ji=h(),hr=a("span"),Pi=r("TFGroupViTModel"),ts=h(),z=a("div"),$(Uo.$$.fragment),zi=h(),Ho=a("p"),Ci=r("This model inherits from "),jn=a("a"),qi=r("TFPreTrainedModel"),Fi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ii=h(),Ko=a("p"),Ai=r("This model is also a "),Ro=a("a"),Li=r("tf.keras.Model"),Di=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oi=h(),$(qt.$$.fragment),Ni=h(),ee=a("div"),$(Jo.$$.fragment),Si=h(),Ye=a("p"),Wi=r("The "),Pn=a("a"),Bi=r("TFGroupViTModel"),Ui=r(" forward method, overrides the "),gr=a("code"),Hi=r("__call__"),Ki=r(" special method."),Ri=h(),$(Ft.$$.fragment),Ji=h(),$(It.$$.fragment),Yi=h(),te=a("div"),$(Yo.$$.fragment),Xi=h(),Xe=a("p"),Qi=r("The "),zn=a("a"),Zi=r("TFGroupViTModel"),el=r(" forward method, overrides the "),_r=a("code"),tl=r("__call__"),ol=r(" special method."),nl=h(),$(At.$$.fragment),rl=h(),$(Lt.$$.fragment),sl=h(),oe=a("div"),$(Xo.$$.fragment),al=h(),Qe=a("p"),il=r("The "),Cn=a("a"),ll=r("TFGroupViTModel"),dl=r(" forward method, overrides the "),Tr=a("code"),pl=r("__call__"),cl=r(" special method."),ul=h(),$(Dt.$$.fragment),ml=h(),$(Ot.$$.fragment),os=h(),Ze=a("h2"),Nt=a("a"),vr=a("span"),$(Qo.$$.fragment),fl=h(),$r=a("span"),hl=r("TFGroupViTTextModel"),ns=h(),et=a("div"),$(Zo.$$.fragment),gl=h(),ne=a("div"),$(en.$$.fragment),_l=h(),tt=a("p"),Tl=r("The "),qn=a("a"),vl=r("TFGroupViTTextModel"),$l=r(" forward method, overrides the "),yr=a("code"),yl=r("__call__"),bl=r(" special method."),wl=h(),$(St.$$.fragment),Vl=h(),$(Wt.$$.fragment),rs=h(),ot=a("h2"),Bt=a("a"),br=a("span"),$(tn.$$.fragment),xl=h(),wr=a("span"),kl=r("TFGroupViTVisionModel"),ss=h(),nt=a("div"),$(on.$$.fragment),Gl=h(),re=a("div"),$(nn.$$.fragment),Ml=h(),rt=a("p"),El=r("The "),Fn=a("a"),jl=r("TFGroupViTVisionModel"),Pl=r(" forward method, overrides the "),Vr=a("code"),zl=r("__call__"),Cl=r(" special method."),ql=h(),$(Ut.$$.fragment),Fl=h(),$(Ht.$$.fragment),this.h()},l(t){const _=ep('[data-svelte="svelte-1phssyn"]',document.head);l=i(_,"META",{name:!0,content:!0}),_.forEach(o),T=g(t),u=i(t,"H1",{class:!0});var rn=d(u);c=i(rn,"A",{id:!0,class:!0,href:!0});var xr=d(c);f=i(xr,"SPAN",{});var kr=d(f);y(n.$$.fragment,kr),kr.forEach(o),xr.forEach(o),p=g(rn),G=i(rn,"SPAN",{});var Gr=d(G);ao=s(Gr,"GroupViT"),Gr.forEach(o),rn.forEach(o),xe=g(t),j=i(t,"H2",{class:!0});var sn=d(j);H=i(sn,"A",{id:!0,class:!0,href:!0});var Mr=d(H);le=i(Mr,"SPAN",{});var Er=d(le);y(de.$$.fragment,Er),Er.forEach(o),Mr.forEach(o),io=g(sn),pe=i(sn,"SPAN",{});var jr=d(pe);lo=s(jr,"Overview"),jr.forEach(o),sn.forEach(o),lt=g(t),F=i(t,"P",{});var st=d(F);fe=s(st,"The GroupViT model was proposed in "),ce=i(st,"A",{href:!0,rel:!0});var Pr=d(ce);dt=s(Pr,"GroupViT: Semantic Segmentation Emerges from Text Supervision"),Pr.forEach(o),L=s(st,` by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
Inspired by `),I=i(st,"A",{href:!0});var zr=d(I);po=s(zr,"CLIP"),zr.forEach(o),ke=s(st,", GroupViT is a vision-language model that can perform zero-shot semantic segmentation on any given vocabulary categories."),st.forEach(o),pt=g(t),he=i(t,"P",{});var Cr=d(he);Ge=s(Cr,"The abstract from the paper is the following:"),Cr.forEach(o),ct=g(t),ge=i(t,"P",{});var qr=d(ge);D=i(qr,"EM",{});var Fr=d(D);co=s(Fr,"Grouping and recognition are important components of visual scene understanding, e.g., for object detection and semantic segmentation. With end-to-end deep learning systems, grouping of image regions usually happens implicitly via top-down supervision from pixel-level recognition labels. Instead, in this paper, we propose to bring back the grouping mechanism into deep networks, which allows semantic segments to emerge automatically with only text supervision. We propose a hierarchical Grouping Vision Transformer (GroupViT), which goes beyond the regular grid structure representation and learns to group image regions into progressively larger arbitrary-shaped segments. We train GroupViT jointly with a text encoder on a large-scale image-text dataset via contrastive losses. With only text supervision and without any pixel-level annotations, GroupViT learns to group together semantic regions and successfully transfers to the task of semantic segmentation in a zero-shot manner, i.e., without any further fine-tuning. It achieves a zero-shot accuracy of 52.3% mIoU on the PASCAL VOC 2012 and 22.4% mIoU on PASCAL Context datasets, and performs competitively to state-of-the-art transfer-learning methods requiring greater levels of supervision."),Fr.forEach(o),qr.forEach(o),_e=g(t),Te=i(t,"P",{});var Ir=d(Te);uo=s(Ir,"Tips:"),Ir.forEach(o),ve=g(t),K=i(t,"UL",{});var an=d(K);S=i(an,"LI",{});var at=d(S);$e=s(at,"You may specify "),Me=i(at,"CODE",{});var Ar=d(Me);Ee=s(Ar,"output_segmentation=True"),Ar.forEach(o),mo=s(at," in the forward of "),M=i(at,"CODE",{});var Lr=d(M);q=s(Lr,"GroupViTModel"),Lr.forEach(o),ut=s(at," to get the segmentation logits of input texts."),at.forEach(o),ln=g(an),R=i(an,"LI",{});var it=d(R);ye=s(it,"The quickest way to get started with GroupViT is by checking the "),be=i(it,"A",{href:!0,rel:!0});var Dr=d(be);dn=s(Dr,"example notebooks"),Dr.forEach(o),pn=s(it," (which showcase zero-shot segmentation inference). One can also check out the "),O=i(it,"A",{href:!0,rel:!0});var Or=d(O);je=s(Or,"HuggingFace Spaces demo"),Or.forEach(o),cn=s(it," to play with GroupViT."),it.forEach(o),an.forEach(o),fo=g(t),E=i(t,"P",{});var C=d(E);un=s(C,"This model was contributed by "),we=i(C,"A",{href:!0,rel:!0});var Il=d(we);ho=s(Il,"xvjiarui"),Il.forEach(o),mn=s(C,". The TensorFlow version was contributed by "),go=i(C,"A",{href:!0,rel:!0});var Al=d(go);xs=s(Al,"ariG23498"),Al.forEach(o),ks=s(C," with the help of "),_o=i(C,"A",{href:!0,rel:!0});var Ll=d(_o);Gs=s(Ll,"Yih-Dar SHIEH"),Ll.forEach(o),Ms=s(C,", "),To=i(C,"A",{href:!0,rel:!0});var Dl=d(To);Es=s(Dl,"Amy Roberts"),Dl.forEach(o),js=s(C,", and "),vo=i(C,"A",{href:!0,rel:!0});var Ol=d(vo);Ps=s(Ol,"Joao Gante"),Ol.forEach(o),zs=s(C,`.
The original code can be found `),$o=i(C,"A",{href:!0,rel:!0});var Nl=d($o);Cs=s(Nl,"here"),Nl.forEach(o),qs=s(C,"."),C.forEach(o),Sr=g(t),Pe=i(t,"H2",{class:!0});var is=d(Pe);mt=i(is,"A",{id:!0,class:!0,href:!0});var Sl=d(mt);Xn=i(Sl,"SPAN",{});var Wl=d(Xn);y(yo.$$.fragment,Wl),Wl.forEach(o),Sl.forEach(o),Fs=g(is),Qn=i(is,"SPAN",{});var Bl=d(Qn);Is=s(Bl,"GroupViTConfig"),Bl.forEach(o),is.forEach(o),Wr=g(t),W=i(t,"DIV",{class:!0});var Kt=d(W);y(bo.$$.fragment,Kt),As=g(Kt),ft=i(Kt,"P",{});var Nr=d(ft);fn=i(Nr,"A",{href:!0});var Ul=d(fn);Ls=s(Ul,"GroupViTConfig"),Ul.forEach(o),Ds=s(Nr," is the configuration class to store the configuration of a "),hn=i(Nr,"A",{href:!0});var Hl=d(hn);Os=s(Hl,"GroupViTModel"),Hl.forEach(o),Ns=s(Nr,`. It is used to
instantiate a GroupViT model according to the specified arguments, defining the text model and vision model
configs.`),Nr.forEach(o),Ss=g(Kt),ze=i(Kt,"P",{});var In=d(ze);Ws=s(In,"Configuration objects inherit from "),gn=i(In,"A",{href:!0});var Kl=d(gn);Bs=s(Kl,"PretrainedConfig"),Kl.forEach(o),Us=s(In,` and can be used to control the model outputs. Read the
documentation from `),_n=i(In,"A",{href:!0});var Rl=d(_n);Hs=s(Rl,"PretrainedConfig"),Rl.forEach(o),Ks=s(In," for more information."),In.forEach(o),Rs=g(Kt),ht=i(Kt,"DIV",{class:!0});var ls=d(ht);y(wo.$$.fragment,ls),Js=g(ls),Vo=i(ls,"P",{});var ds=d(Vo);Ys=s(ds,"Instantiate a "),Tn=i(ds,"A",{href:!0});var Jl=d(Tn);Xs=s(Jl,"GroupViTConfig"),Jl.forEach(o),Qs=s(ds,` (or a derived class) from groupvit text model configuration and groupvit
vision model configuration.`),ds.forEach(o),ls.forEach(o),Kt.forEach(o),Br=g(t),Ce=i(t,"H2",{class:!0});var ps=d(Ce);gt=i(ps,"A",{id:!0,class:!0,href:!0});var Yl=d(gt);Zn=i(Yl,"SPAN",{});var Xl=d(Zn);y(xo.$$.fragment,Xl),Xl.forEach(o),Yl.forEach(o),Zs=g(ps),er=i(ps,"SPAN",{});var Ql=d(er);ea=s(Ql,"GroupViTTextConfig"),Ql.forEach(o),ps.forEach(o),Ur=g(t),B=i(t,"DIV",{class:!0});var Rt=d(B);y(ko.$$.fragment,Rt),ta=g(Rt),qe=i(Rt,"P",{});var An=d(qe);oa=s(An,"This is the configuration class to store the configuration of a "),vn=i(An,"A",{href:!0});var Zl=d(vn);na=s(Zl,"GroupViTTextModel"),Zl.forEach(o),ra=s(An,`. It is used to instantiate an
GroupViT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GroupViT
`),Go=i(An,"A",{href:!0,rel:!0});var ed=d(Go);sa=s(ed,"nvidia/groupvit-gcc-yfcc"),ed.forEach(o),aa=s(An," architecture."),An.forEach(o),ia=g(Rt),Fe=i(Rt,"P",{});var Ln=d(Fe);la=s(Ln,"Configuration objects inherit from "),$n=i(Ln,"A",{href:!0});var td=d($n);da=s(td,"PretrainedConfig"),td.forEach(o),pa=s(Ln,` and can be used to control the model outputs. Read the
documentation from `),yn=i(Ln,"A",{href:!0});var od=d(yn);ca=s(od,"PretrainedConfig"),od.forEach(o),ua=s(Ln," for more information."),Ln.forEach(o),ma=g(Rt),y(_t.$$.fragment,Rt),Rt.forEach(o),Hr=g(t),Ie=i(t,"H2",{class:!0});var cs=d(Ie);Tt=i(cs,"A",{id:!0,class:!0,href:!0});var nd=d(Tt);tr=i(nd,"SPAN",{});var rd=d(tr);y(Mo.$$.fragment,rd),rd.forEach(o),nd.forEach(o),fa=g(cs),or=i(cs,"SPAN",{});var sd=d(or);ha=s(sd,"GroupViTVisionConfig"),sd.forEach(o),cs.forEach(o),Kr=g(t),U=i(t,"DIV",{class:!0});var Jt=d(U);y(Eo.$$.fragment,Jt),ga=g(Jt),Ae=i(Jt,"P",{});var Dn=d(Ae);_a=s(Dn,"This is the configuration class to store the configuration of a "),bn=i(Dn,"A",{href:!0});var ad=d(bn);Ta=s(ad,"GroupViTVisionModel"),ad.forEach(o),va=s(Dn,`. It is used to instantiate
an GroupViT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GroupViT
`),jo=i(Dn,"A",{href:!0,rel:!0});var id=d(jo);$a=s(id,"nvidia/groupvit-gcc-yfcc"),id.forEach(o),ya=s(Dn," architecture."),Dn.forEach(o),ba=g(Jt),Le=i(Jt,"P",{});var On=d(Le);wa=s(On,"Configuration objects inherit from "),wn=i(On,"A",{href:!0});var ld=d(wn);Va=s(ld,"PretrainedConfig"),ld.forEach(o),xa=s(On,` and can be used to control the model outputs. Read the
documentation from `),Vn=i(On,"A",{href:!0});var dd=d(Vn);ka=s(dd,"PretrainedConfig"),dd.forEach(o),Ga=s(On," for more information."),On.forEach(o),Ma=g(Jt),y(vt.$$.fragment,Jt),Jt.forEach(o),Rr=g(t),De=i(t,"H2",{class:!0});var us=d(De);$t=i(us,"A",{id:!0,class:!0,href:!0});var pd=d($t);nr=i(pd,"SPAN",{});var cd=d(nr);y(Po.$$.fragment,cd),cd.forEach(o),pd.forEach(o),Ea=g(us),rr=i(us,"SPAN",{});var ud=d(rr);ja=s(ud,"GroupViTModel"),ud.forEach(o),us.forEach(o),Jr=g(t),A=i(t,"DIV",{class:!0});var Ve=d(A);y(zo.$$.fragment,Ve),Pa=g(Ve),Co=i(Ve,"P",{});var ms=d(Co);za=s(ms,"This model is a PyTorch "),qo=i(ms,"A",{href:!0,rel:!0});var md=d(qo);Ca=s(md,"torch.nn.Module"),md.forEach(o),qa=s(ms,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ms.forEach(o),Fa=g(Ve),J=i(Ve,"DIV",{class:!0});var Yt=d(J);y(Fo.$$.fragment,Yt),Ia=g(Yt),Oe=i(Yt,"P",{});var Nn=d(Oe);Aa=s(Nn,"The "),xn=i(Nn,"A",{href:!0});var fd=d(xn);La=s(fd,"GroupViTModel"),fd.forEach(o),Da=s(Nn," forward method, overrides the "),sr=i(Nn,"CODE",{});var hd=d(sr);Oa=s(hd,"__call__"),hd.forEach(o),Na=s(Nn," special method."),Nn.forEach(o),Sa=g(Yt),y(yt.$$.fragment,Yt),Wa=g(Yt),y(bt.$$.fragment,Yt),Yt.forEach(o),Ba=g(Ve),Y=i(Ve,"DIV",{class:!0});var Xt=d(Y);y(Io.$$.fragment,Xt),Ua=g(Xt),Ne=i(Xt,"P",{});var Sn=d(Ne);Ha=s(Sn,"The "),kn=i(Sn,"A",{href:!0});var gd=d(kn);Ka=s(gd,"GroupViTModel"),gd.forEach(o),Ra=s(Sn," forward method, overrides the "),ar=i(Sn,"CODE",{});var _d=d(ar);Ja=s(_d,"__call__"),_d.forEach(o),Ya=s(Sn," special method."),Sn.forEach(o),Xa=g(Xt),y(wt.$$.fragment,Xt),Qa=g(Xt),y(Vt.$$.fragment,Xt),Xt.forEach(o),Za=g(Ve),X=i(Ve,"DIV",{class:!0});var Qt=d(X);y(Ao.$$.fragment,Qt),ei=g(Qt),Se=i(Qt,"P",{});var Wn=d(Se);ti=s(Wn,"The "),Gn=i(Wn,"A",{href:!0});var Td=d(Gn);oi=s(Td,"GroupViTModel"),Td.forEach(o),ni=s(Wn," forward method, overrides the "),ir=i(Wn,"CODE",{});var vd=d(ir);ri=s(vd,"__call__"),vd.forEach(o),si=s(Wn," special method."),Wn.forEach(o),ai=g(Qt),y(xt.$$.fragment,Qt),ii=g(Qt),y(kt.$$.fragment,Qt),Qt.forEach(o),Ve.forEach(o),Yr=g(t),We=i(t,"H2",{class:!0});var fs=d(We);Gt=i(fs,"A",{id:!0,class:!0,href:!0});var $d=d(Gt);lr=i($d,"SPAN",{});var yd=d(lr);y(Lo.$$.fragment,yd),yd.forEach(o),$d.forEach(o),li=g(fs),dr=i(fs,"SPAN",{});var bd=d(dr);di=s(bd,"GroupViTTextModel"),bd.forEach(o),fs.forEach(o),Xr=g(t),Be=i(t,"DIV",{class:!0});var hs=d(Be);y(Do.$$.fragment,hs),pi=g(hs),Q=i(hs,"DIV",{class:!0});var Zt=d(Q);y(Oo.$$.fragment,Zt),ci=g(Zt),Ue=i(Zt,"P",{});var Bn=d(Ue);ui=s(Bn,"The "),Mn=i(Bn,"A",{href:!0});var wd=d(Mn);mi=s(wd,"GroupViTTextModel"),wd.forEach(o),fi=s(Bn," forward method, overrides the "),pr=i(Bn,"CODE",{});var Vd=d(pr);hi=s(Vd,"__call__"),Vd.forEach(o),gi=s(Bn," special method."),Bn.forEach(o),_i=g(Zt),y(Mt.$$.fragment,Zt),Ti=g(Zt),y(Et.$$.fragment,Zt),Zt.forEach(o),hs.forEach(o),Qr=g(t),He=i(t,"H2",{class:!0});var gs=d(He);jt=i(gs,"A",{id:!0,class:!0,href:!0});var xd=d(jt);cr=i(xd,"SPAN",{});var kd=d(cr);y(No.$$.fragment,kd),kd.forEach(o),xd.forEach(o),vi=g(gs),ur=i(gs,"SPAN",{});var Gd=d(ur);$i=s(Gd,"GroupViTVisionModel"),Gd.forEach(o),gs.forEach(o),Zr=g(t),Ke=i(t,"DIV",{class:!0});var _s=d(Ke);y(So.$$.fragment,_s),yi=g(_s),Z=i(_s,"DIV",{class:!0});var eo=d(Z);y(Wo.$$.fragment,eo),bi=g(eo),Re=i(eo,"P",{});var Un=d(Re);wi=s(Un,"The "),En=i(Un,"A",{href:!0});var Md=d(En);Vi=s(Md,"GroupViTVisionModel"),Md.forEach(o),xi=s(Un," forward method, overrides the "),mr=i(Un,"CODE",{});var Ed=d(mr);ki=s(Ed,"__call__"),Ed.forEach(o),Gi=s(Un," special method."),Un.forEach(o),Mi=g(eo),y(Pt.$$.fragment,eo),Ei=g(eo),y(zt.$$.fragment,eo),eo.forEach(o),_s.forEach(o),es=g(t),Je=i(t,"H2",{class:!0});var Ts=d(Je);Ct=i(Ts,"A",{id:!0,class:!0,href:!0});var jd=d(Ct);fr=i(jd,"SPAN",{});var Pd=d(fr);y(Bo.$$.fragment,Pd),Pd.forEach(o),jd.forEach(o),ji=g(Ts),hr=i(Ts,"SPAN",{});var zd=d(hr);Pi=s(zd,"TFGroupViTModel"),zd.forEach(o),Ts.forEach(o),ts=g(t),z=i(t,"DIV",{class:!0});var N=d(z);y(Uo.$$.fragment,N),zi=g(N),Ho=i(N,"P",{});var vs=d(Ho);Ci=s(vs,"This model inherits from "),jn=i(vs,"A",{href:!0});var Cd=d(jn);qi=s(Cd,"TFPreTrainedModel"),Cd.forEach(o),Fi=s(vs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vs.forEach(o),Ii=g(N),Ko=i(N,"P",{});var $s=d(Ko);Ai=s($s,"This model is also a "),Ro=i($s,"A",{href:!0,rel:!0});var qd=d(Ro);Li=s(qd,"tf.keras.Model"),qd.forEach(o),Di=s($s,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$s.forEach(o),Oi=g(N),y(qt.$$.fragment,N),Ni=g(N),ee=i(N,"DIV",{class:!0});var to=d(ee);y(Jo.$$.fragment,to),Si=g(to),Ye=i(to,"P",{});var Hn=d(Ye);Wi=s(Hn,"The "),Pn=i(Hn,"A",{href:!0});var Fd=d(Pn);Bi=s(Fd,"TFGroupViTModel"),Fd.forEach(o),Ui=s(Hn," forward method, overrides the "),gr=i(Hn,"CODE",{});var Id=d(gr);Hi=s(Id,"__call__"),Id.forEach(o),Ki=s(Hn," special method."),Hn.forEach(o),Ri=g(to),y(Ft.$$.fragment,to),Ji=g(to),y(It.$$.fragment,to),to.forEach(o),Yi=g(N),te=i(N,"DIV",{class:!0});var oo=d(te);y(Yo.$$.fragment,oo),Xi=g(oo),Xe=i(oo,"P",{});var Kn=d(Xe);Qi=s(Kn,"The "),zn=i(Kn,"A",{href:!0});var Ad=d(zn);Zi=s(Ad,"TFGroupViTModel"),Ad.forEach(o),el=s(Kn," forward method, overrides the "),_r=i(Kn,"CODE",{});var Ld=d(_r);tl=s(Ld,"__call__"),Ld.forEach(o),ol=s(Kn," special method."),Kn.forEach(o),nl=g(oo),y(At.$$.fragment,oo),rl=g(oo),y(Lt.$$.fragment,oo),oo.forEach(o),sl=g(N),oe=i(N,"DIV",{class:!0});var no=d(oe);y(Xo.$$.fragment,no),al=g(no),Qe=i(no,"P",{});var Rn=d(Qe);il=s(Rn,"The "),Cn=i(Rn,"A",{href:!0});var Dd=d(Cn);ll=s(Dd,"TFGroupViTModel"),Dd.forEach(o),dl=s(Rn," forward method, overrides the "),Tr=i(Rn,"CODE",{});var Od=d(Tr);pl=s(Od,"__call__"),Od.forEach(o),cl=s(Rn," special method."),Rn.forEach(o),ul=g(no),y(Dt.$$.fragment,no),ml=g(no),y(Ot.$$.fragment,no),no.forEach(o),N.forEach(o),os=g(t),Ze=i(t,"H2",{class:!0});var ys=d(Ze);Nt=i(ys,"A",{id:!0,class:!0,href:!0});var Nd=d(Nt);vr=i(Nd,"SPAN",{});var Sd=d(vr);y(Qo.$$.fragment,Sd),Sd.forEach(o),Nd.forEach(o),fl=g(ys),$r=i(ys,"SPAN",{});var Wd=d($r);hl=s(Wd,"TFGroupViTTextModel"),Wd.forEach(o),ys.forEach(o),ns=g(t),et=i(t,"DIV",{class:!0});var bs=d(et);y(Zo.$$.fragment,bs),gl=g(bs),ne=i(bs,"DIV",{class:!0});var ro=d(ne);y(en.$$.fragment,ro),_l=g(ro),tt=i(ro,"P",{});var Jn=d(tt);Tl=s(Jn,"The "),qn=i(Jn,"A",{href:!0});var Bd=d(qn);vl=s(Bd,"TFGroupViTTextModel"),Bd.forEach(o),$l=s(Jn," forward method, overrides the "),yr=i(Jn,"CODE",{});var Ud=d(yr);yl=s(Ud,"__call__"),Ud.forEach(o),bl=s(Jn," special method."),Jn.forEach(o),wl=g(ro),y(St.$$.fragment,ro),Vl=g(ro),y(Wt.$$.fragment,ro),ro.forEach(o),bs.forEach(o),rs=g(t),ot=i(t,"H2",{class:!0});var ws=d(ot);Bt=i(ws,"A",{id:!0,class:!0,href:!0});var Hd=d(Bt);br=i(Hd,"SPAN",{});var Kd=d(br);y(tn.$$.fragment,Kd),Kd.forEach(o),Hd.forEach(o),xl=g(ws),wr=i(ws,"SPAN",{});var Rd=d(wr);kl=s(Rd,"TFGroupViTVisionModel"),Rd.forEach(o),ws.forEach(o),ss=g(t),nt=i(t,"DIV",{class:!0});var Vs=d(nt);y(on.$$.fragment,Vs),Gl=g(Vs),re=i(Vs,"DIV",{class:!0});var so=d(re);y(nn.$$.fragment,so),Ml=g(so),rt=i(so,"P",{});var Yn=d(rt);El=s(Yn,"The "),Fn=i(Yn,"A",{href:!0});var Jd=d(Fn);jl=s(Jd,"TFGroupViTVisionModel"),Jd.forEach(o),Pl=s(Yn," forward method, overrides the "),Vr=i(Yn,"CODE",{});var Yd=d(Vr);zl=s(Yd,"__call__"),Yd.forEach(o),Cl=s(Yn," special method."),Yn.forEach(o),ql=g(so),y(Ut.$$.fragment,so),Fl=g(so),y(Ht.$$.fragment,so),so.forEach(o),Vs.forEach(o),this.h()},h(){m(l,"name","hf:doc:metadata"),m(l,"content",JSON.stringify(kp)),m(c,"id","groupvit"),m(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(c,"href","#groupvit"),m(u,"class","relative group"),m(H,"id","overview"),m(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(H,"href","#overview"),m(j,"class","relative group"),m(ce,"href","https://arxiv.org/abs/2202.11094"),m(ce,"rel","nofollow"),m(I,"href","clip"),m(be,"href","https://github.com/xvjiarui/GroupViT/blob/main/demo/GroupViT_hf_inference_notebook.ipynb"),m(be,"rel","nofollow"),m(O,"href","https://huggingface.co/spaces/xvjiarui/GroupViT"),m(O,"rel","nofollow"),m(we,"href","https://huggingface.co/xvjiarui"),m(we,"rel","nofollow"),m(go,"href","https://huggingface.co/ariG23498"),m(go,"rel","nofollow"),m(_o,"href","https://huggingface.co/ydshieh"),m(_o,"rel","nofollow"),m(To,"href","https://huggingface.co/amyeroberts"),m(To,"rel","nofollow"),m(vo,"href","https://huggingface.co/joaogante"),m(vo,"rel","nofollow"),m($o,"href","https://github.com/NVlabs/GroupViT"),m($o,"rel","nofollow"),m(mt,"id","transformers.GroupViTConfig"),m(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(mt,"href","#transformers.GroupViTConfig"),m(Pe,"class","relative group"),m(fn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig"),m(hn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),m(gn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(_n,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Tn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTConfig"),m(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gt,"id","transformers.GroupViTTextConfig"),m(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(gt,"href","#transformers.GroupViTTextConfig"),m(Ce,"class","relative group"),m(vn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"),m(Go,"href","https://huggingface.co/nvidia/groupvit-gcc-yfcc"),m(Go,"rel","nofollow"),m($n,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(yn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Tt,"id","transformers.GroupViTVisionConfig"),m(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Tt,"href","#transformers.GroupViTVisionConfig"),m(Ie,"class","relative group"),m(bn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"),m(jo,"href","https://huggingface.co/nvidia/groupvit-gcc-yfcc"),m(jo,"rel","nofollow"),m(wn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Vn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($t,"id","transformers.GroupViTModel"),m($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($t,"href","#transformers.GroupViTModel"),m(De,"class","relative group"),m(qo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qo,"rel","nofollow"),m(xn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTModel"),m(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gt,"id","transformers.GroupViTTextModel"),m(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Gt,"href","#transformers.GroupViTTextModel"),m(We,"class","relative group"),m(Mn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTTextModel"),m(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jt,"id","transformers.GroupViTVisionModel"),m(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(jt,"href","#transformers.GroupViTVisionModel"),m(He,"class","relative group"),m(En,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.GroupViTVisionModel"),m(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ct,"id","transformers.TFGroupViTModel"),m(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ct,"href","#transformers.TFGroupViTModel"),m(Je,"class","relative group"),m(jn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Ro,"rel","nofollow"),m(Pn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTModel"),m(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTModel"),m(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Cn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTModel"),m(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Nt,"id","transformers.TFGroupViTTextModel"),m(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Nt,"href","#transformers.TFGroupViTTextModel"),m(Ze,"class","relative group"),m(qn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTTextModel"),m(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bt,"id","transformers.TFGroupViTVisionModel"),m(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Bt,"href","#transformers.TFGroupViTVisionModel"),m(ot,"class","relative group"),m(Fn,"href","/docs/transformers/main/en/model_doc/groupvit#transformers.TFGroupViTVisionModel"),m(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,l),v(t,T,_),v(t,u,_),e(u,c),e(c,f),b(n,f,null),e(u,p),e(u,G),e(G,ao),v(t,xe,_),v(t,j,_),e(j,H),e(H,le),b(de,le,null),e(j,io),e(j,pe),e(pe,lo),v(t,lt,_),v(t,F,_),e(F,fe),e(F,ce),e(ce,dt),e(F,L),e(F,I),e(I,po),e(F,ke),v(t,pt,_),v(t,he,_),e(he,Ge),v(t,ct,_),v(t,ge,_),e(ge,D),e(D,co),v(t,_e,_),v(t,Te,_),e(Te,uo),v(t,ve,_),v(t,K,_),e(K,S),e(S,$e),e(S,Me),e(Me,Ee),e(S,mo),e(S,M),e(M,q),e(S,ut),e(K,ln),e(K,R),e(R,ye),e(R,be),e(be,dn),e(R,pn),e(R,O),e(O,je),e(R,cn),v(t,fo,_),v(t,E,_),e(E,un),e(E,we),e(we,ho),e(E,mn),e(E,go),e(go,xs),e(E,ks),e(E,_o),e(_o,Gs),e(E,Ms),e(E,To),e(To,Es),e(E,js),e(E,vo),e(vo,Ps),e(E,zs),e(E,$o),e($o,Cs),e(E,qs),v(t,Sr,_),v(t,Pe,_),e(Pe,mt),e(mt,Xn),b(yo,Xn,null),e(Pe,Fs),e(Pe,Qn),e(Qn,Is),v(t,Wr,_),v(t,W,_),b(bo,W,null),e(W,As),e(W,ft),e(ft,fn),e(fn,Ls),e(ft,Ds),e(ft,hn),e(hn,Os),e(ft,Ns),e(W,Ss),e(W,ze),e(ze,Ws),e(ze,gn),e(gn,Bs),e(ze,Us),e(ze,_n),e(_n,Hs),e(ze,Ks),e(W,Rs),e(W,ht),b(wo,ht,null),e(ht,Js),e(ht,Vo),e(Vo,Ys),e(Vo,Tn),e(Tn,Xs),e(Vo,Qs),v(t,Br,_),v(t,Ce,_),e(Ce,gt),e(gt,Zn),b(xo,Zn,null),e(Ce,Zs),e(Ce,er),e(er,ea),v(t,Ur,_),v(t,B,_),b(ko,B,null),e(B,ta),e(B,qe),e(qe,oa),e(qe,vn),e(vn,na),e(qe,ra),e(qe,Go),e(Go,sa),e(qe,aa),e(B,ia),e(B,Fe),e(Fe,la),e(Fe,$n),e($n,da),e(Fe,pa),e(Fe,yn),e(yn,ca),e(Fe,ua),e(B,ma),b(_t,B,null),v(t,Hr,_),v(t,Ie,_),e(Ie,Tt),e(Tt,tr),b(Mo,tr,null),e(Ie,fa),e(Ie,or),e(or,ha),v(t,Kr,_),v(t,U,_),b(Eo,U,null),e(U,ga),e(U,Ae),e(Ae,_a),e(Ae,bn),e(bn,Ta),e(Ae,va),e(Ae,jo),e(jo,$a),e(Ae,ya),e(U,ba),e(U,Le),e(Le,wa),e(Le,wn),e(wn,Va),e(Le,xa),e(Le,Vn),e(Vn,ka),e(Le,Ga),e(U,Ma),b(vt,U,null),v(t,Rr,_),v(t,De,_),e(De,$t),e($t,nr),b(Po,nr,null),e(De,Ea),e(De,rr),e(rr,ja),v(t,Jr,_),v(t,A,_),b(zo,A,null),e(A,Pa),e(A,Co),e(Co,za),e(Co,qo),e(qo,Ca),e(Co,qa),e(A,Fa),e(A,J),b(Fo,J,null),e(J,Ia),e(J,Oe),e(Oe,Aa),e(Oe,xn),e(xn,La),e(Oe,Da),e(Oe,sr),e(sr,Oa),e(Oe,Na),e(J,Sa),b(yt,J,null),e(J,Wa),b(bt,J,null),e(A,Ba),e(A,Y),b(Io,Y,null),e(Y,Ua),e(Y,Ne),e(Ne,Ha),e(Ne,kn),e(kn,Ka),e(Ne,Ra),e(Ne,ar),e(ar,Ja),e(Ne,Ya),e(Y,Xa),b(wt,Y,null),e(Y,Qa),b(Vt,Y,null),e(A,Za),e(A,X),b(Ao,X,null),e(X,ei),e(X,Se),e(Se,ti),e(Se,Gn),e(Gn,oi),e(Se,ni),e(Se,ir),e(ir,ri),e(Se,si),e(X,ai),b(xt,X,null),e(X,ii),b(kt,X,null),v(t,Yr,_),v(t,We,_),e(We,Gt),e(Gt,lr),b(Lo,lr,null),e(We,li),e(We,dr),e(dr,di),v(t,Xr,_),v(t,Be,_),b(Do,Be,null),e(Be,pi),e(Be,Q),b(Oo,Q,null),e(Q,ci),e(Q,Ue),e(Ue,ui),e(Ue,Mn),e(Mn,mi),e(Ue,fi),e(Ue,pr),e(pr,hi),e(Ue,gi),e(Q,_i),b(Mt,Q,null),e(Q,Ti),b(Et,Q,null),v(t,Qr,_),v(t,He,_),e(He,jt),e(jt,cr),b(No,cr,null),e(He,vi),e(He,ur),e(ur,$i),v(t,Zr,_),v(t,Ke,_),b(So,Ke,null),e(Ke,yi),e(Ke,Z),b(Wo,Z,null),e(Z,bi),e(Z,Re),e(Re,wi),e(Re,En),e(En,Vi),e(Re,xi),e(Re,mr),e(mr,ki),e(Re,Gi),e(Z,Mi),b(Pt,Z,null),e(Z,Ei),b(zt,Z,null),v(t,es,_),v(t,Je,_),e(Je,Ct),e(Ct,fr),b(Bo,fr,null),e(Je,ji),e(Je,hr),e(hr,Pi),v(t,ts,_),v(t,z,_),b(Uo,z,null),e(z,zi),e(z,Ho),e(Ho,Ci),e(Ho,jn),e(jn,qi),e(Ho,Fi),e(z,Ii),e(z,Ko),e(Ko,Ai),e(Ko,Ro),e(Ro,Li),e(Ko,Di),e(z,Oi),b(qt,z,null),e(z,Ni),e(z,ee),b(Jo,ee,null),e(ee,Si),e(ee,Ye),e(Ye,Wi),e(Ye,Pn),e(Pn,Bi),e(Ye,Ui),e(Ye,gr),e(gr,Hi),e(Ye,Ki),e(ee,Ri),b(Ft,ee,null),e(ee,Ji),b(It,ee,null),e(z,Yi),e(z,te),b(Yo,te,null),e(te,Xi),e(te,Xe),e(Xe,Qi),e(Xe,zn),e(zn,Zi),e(Xe,el),e(Xe,_r),e(_r,tl),e(Xe,ol),e(te,nl),b(At,te,null),e(te,rl),b(Lt,te,null),e(z,sl),e(z,oe),b(Xo,oe,null),e(oe,al),e(oe,Qe),e(Qe,il),e(Qe,Cn),e(Cn,ll),e(Qe,dl),e(Qe,Tr),e(Tr,pl),e(Qe,cl),e(oe,ul),b(Dt,oe,null),e(oe,ml),b(Ot,oe,null),v(t,os,_),v(t,Ze,_),e(Ze,Nt),e(Nt,vr),b(Qo,vr,null),e(Ze,fl),e(Ze,$r),e($r,hl),v(t,ns,_),v(t,et,_),b(Zo,et,null),e(et,gl),e(et,ne),b(en,ne,null),e(ne,_l),e(ne,tt),e(tt,Tl),e(tt,qn),e(qn,vl),e(tt,$l),e(tt,yr),e(yr,yl),e(tt,bl),e(ne,wl),b(St,ne,null),e(ne,Vl),b(Wt,ne,null),v(t,rs,_),v(t,ot,_),e(ot,Bt),e(Bt,br),b(tn,br,null),e(ot,xl),e(ot,wr),e(wr,kl),v(t,ss,_),v(t,nt,_),b(on,nt,null),e(nt,Gl),e(nt,re),b(nn,re,null),e(re,Ml),e(re,rt),e(rt,El),e(rt,Fn),e(Fn,jl),e(rt,Pl),e(rt,Vr),e(Vr,zl),e(rt,Cl),e(re,ql),b(Ut,re,null),e(re,Fl),b(Ht,re,null),as=!0},p(t,[_]){const rn={};_&2&&(rn.$$scope={dirty:_,ctx:t}),_t.$set(rn);const xr={};_&2&&(xr.$$scope={dirty:_,ctx:t}),vt.$set(xr);const kr={};_&2&&(kr.$$scope={dirty:_,ctx:t}),yt.$set(kr);const Gr={};_&2&&(Gr.$$scope={dirty:_,ctx:t}),bt.$set(Gr);const sn={};_&2&&(sn.$$scope={dirty:_,ctx:t}),wt.$set(sn);const Mr={};_&2&&(Mr.$$scope={dirty:_,ctx:t}),Vt.$set(Mr);const Er={};_&2&&(Er.$$scope={dirty:_,ctx:t}),xt.$set(Er);const jr={};_&2&&(jr.$$scope={dirty:_,ctx:t}),kt.$set(jr);const st={};_&2&&(st.$$scope={dirty:_,ctx:t}),Mt.$set(st);const Pr={};_&2&&(Pr.$$scope={dirty:_,ctx:t}),Et.$set(Pr);const zr={};_&2&&(zr.$$scope={dirty:_,ctx:t}),Pt.$set(zr);const Cr={};_&2&&(Cr.$$scope={dirty:_,ctx:t}),zt.$set(Cr);const qr={};_&2&&(qr.$$scope={dirty:_,ctx:t}),qt.$set(qr);const Fr={};_&2&&(Fr.$$scope={dirty:_,ctx:t}),Ft.$set(Fr);const Ir={};_&2&&(Ir.$$scope={dirty:_,ctx:t}),It.$set(Ir);const an={};_&2&&(an.$$scope={dirty:_,ctx:t}),At.$set(an);const at={};_&2&&(at.$$scope={dirty:_,ctx:t}),Lt.$set(at);const Ar={};_&2&&(Ar.$$scope={dirty:_,ctx:t}),Dt.$set(Ar);const Lr={};_&2&&(Lr.$$scope={dirty:_,ctx:t}),Ot.$set(Lr);const it={};_&2&&(it.$$scope={dirty:_,ctx:t}),St.$set(it);const Dr={};_&2&&(Dr.$$scope={dirty:_,ctx:t}),Wt.$set(Dr);const Or={};_&2&&(Or.$$scope={dirty:_,ctx:t}),Ut.$set(Or);const C={};_&2&&(C.$$scope={dirty:_,ctx:t}),Ht.$set(C)},i(t){as||(w(n.$$.fragment,t),w(de.$$.fragment,t),w(yo.$$.fragment,t),w(bo.$$.fragment,t),w(wo.$$.fragment,t),w(xo.$$.fragment,t),w(ko.$$.fragment,t),w(_t.$$.fragment,t),w(Mo.$$.fragment,t),w(Eo.$$.fragment,t),w(vt.$$.fragment,t),w(Po.$$.fragment,t),w(zo.$$.fragment,t),w(Fo.$$.fragment,t),w(yt.$$.fragment,t),w(bt.$$.fragment,t),w(Io.$$.fragment,t),w(wt.$$.fragment,t),w(Vt.$$.fragment,t),w(Ao.$$.fragment,t),w(xt.$$.fragment,t),w(kt.$$.fragment,t),w(Lo.$$.fragment,t),w(Do.$$.fragment,t),w(Oo.$$.fragment,t),w(Mt.$$.fragment,t),w(Et.$$.fragment,t),w(No.$$.fragment,t),w(So.$$.fragment,t),w(Wo.$$.fragment,t),w(Pt.$$.fragment,t),w(zt.$$.fragment,t),w(Bo.$$.fragment,t),w(Uo.$$.fragment,t),w(qt.$$.fragment,t),w(Jo.$$.fragment,t),w(Ft.$$.fragment,t),w(It.$$.fragment,t),w(Yo.$$.fragment,t),w(At.$$.fragment,t),w(Lt.$$.fragment,t),w(Xo.$$.fragment,t),w(Dt.$$.fragment,t),w(Ot.$$.fragment,t),w(Qo.$$.fragment,t),w(Zo.$$.fragment,t),w(en.$$.fragment,t),w(St.$$.fragment,t),w(Wt.$$.fragment,t),w(tn.$$.fragment,t),w(on.$$.fragment,t),w(nn.$$.fragment,t),w(Ut.$$.fragment,t),w(Ht.$$.fragment,t),as=!0)},o(t){V(n.$$.fragment,t),V(de.$$.fragment,t),V(yo.$$.fragment,t),V(bo.$$.fragment,t),V(wo.$$.fragment,t),V(xo.$$.fragment,t),V(ko.$$.fragment,t),V(_t.$$.fragment,t),V(Mo.$$.fragment,t),V(Eo.$$.fragment,t),V(vt.$$.fragment,t),V(Po.$$.fragment,t),V(zo.$$.fragment,t),V(Fo.$$.fragment,t),V(yt.$$.fragment,t),V(bt.$$.fragment,t),V(Io.$$.fragment,t),V(wt.$$.fragment,t),V(Vt.$$.fragment,t),V(Ao.$$.fragment,t),V(xt.$$.fragment,t),V(kt.$$.fragment,t),V(Lo.$$.fragment,t),V(Do.$$.fragment,t),V(Oo.$$.fragment,t),V(Mt.$$.fragment,t),V(Et.$$.fragment,t),V(No.$$.fragment,t),V(So.$$.fragment,t),V(Wo.$$.fragment,t),V(Pt.$$.fragment,t),V(zt.$$.fragment,t),V(Bo.$$.fragment,t),V(Uo.$$.fragment,t),V(qt.$$.fragment,t),V(Jo.$$.fragment,t),V(Ft.$$.fragment,t),V(It.$$.fragment,t),V(Yo.$$.fragment,t),V(At.$$.fragment,t),V(Lt.$$.fragment,t),V(Xo.$$.fragment,t),V(Dt.$$.fragment,t),V(Ot.$$.fragment,t),V(Qo.$$.fragment,t),V(Zo.$$.fragment,t),V(en.$$.fragment,t),V(St.$$.fragment,t),V(Wt.$$.fragment,t),V(tn.$$.fragment,t),V(on.$$.fragment,t),V(nn.$$.fragment,t),V(Ut.$$.fragment,t),V(Ht.$$.fragment,t),as=!1},d(t){o(l),t&&o(T),t&&o(u),x(n),t&&o(xe),t&&o(j),x(de),t&&o(lt),t&&o(F),t&&o(pt),t&&o(he),t&&o(ct),t&&o(ge),t&&o(_e),t&&o(Te),t&&o(ve),t&&o(K),t&&o(fo),t&&o(E),t&&o(Sr),t&&o(Pe),x(yo),t&&o(Wr),t&&o(W),x(bo),x(wo),t&&o(Br),t&&o(Ce),x(xo),t&&o(Ur),t&&o(B),x(ko),x(_t),t&&o(Hr),t&&o(Ie),x(Mo),t&&o(Kr),t&&o(U),x(Eo),x(vt),t&&o(Rr),t&&o(De),x(Po),t&&o(Jr),t&&o(A),x(zo),x(Fo),x(yt),x(bt),x(Io),x(wt),x(Vt),x(Ao),x(xt),x(kt),t&&o(Yr),t&&o(We),x(Lo),t&&o(Xr),t&&o(Be),x(Do),x(Oo),x(Mt),x(Et),t&&o(Qr),t&&o(He),x(No),t&&o(Zr),t&&o(Ke),x(So),x(Wo),x(Pt),x(zt),t&&o(es),t&&o(Je),x(Bo),t&&o(ts),t&&o(z),x(Uo),x(qt),x(Jo),x(Ft),x(It),x(Yo),x(At),x(Lt),x(Xo),x(Dt),x(Ot),t&&o(os),t&&o(Ze),x(Qo),t&&o(ns),t&&o(et),x(Zo),x(en),x(St),x(Wt),t&&o(rs),t&&o(ot),x(tn),t&&o(ss),t&&o(nt),x(on),x(nn),x(Ut),x(Ht)}}}const kp={local:"groupvit",sections:[{local:"overview",title:"Overview"},{local:"transformers.GroupViTConfig",title:"GroupViTConfig"},{local:"transformers.GroupViTTextConfig",title:"GroupViTTextConfig"},{local:"transformers.GroupViTVisionConfig",title:"GroupViTVisionConfig"},{local:"transformers.GroupViTModel",title:"GroupViTModel"},{local:"transformers.GroupViTTextModel",title:"GroupViTTextModel"},{local:"transformers.GroupViTVisionModel",title:"GroupViTVisionModel"},{local:"transformers.TFGroupViTModel",title:"TFGroupViTModel"},{local:"transformers.TFGroupViTTextModel",title:"TFGroupViTTextModel"},{local:"transformers.TFGroupViTVisionModel",title:"TFGroupViTVisionModel"}],title:"GroupViT"};function Gp(k){return tp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qp extends Xd{constructor(l){super();Qd(this,l,Gp,xp,Zd,{})}}export{qp as default,kp as metadata};
