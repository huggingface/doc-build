import{S as Nh,i as Lh,s as Dh,e as n,k as p,w,t as a,M as Oh,c as r,d as t,m as h,a as i,x as y,h as s,b as c,G as e,g as _,y as $,q as x,o as E,B as k,v as Sh,L as Co}from"../../chunks/vendor-hf-doc-builder.js";import{T as ct}from"../../chunks/Tip-hf-doc-builder.js";import{D as Y}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Po}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as pt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as jo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Wh(I){let d,T,f,u,v;return{c(){d=n("p"),T=a(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=n("a"),u=a("Github Issue"),v=a("."),this.h()},l(l){d=r(l,"P",{});var m=i(d);T=s(m,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix it in the future. If you see something strange, file a `),f=r(m,"A",{href:!0,rel:!0});var V=i(f);u=s(V,"Github Issue"),V.forEach(t),v=s(m,"."),m.forEach(t),this.h()},h(){c(f,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(f,"rel","nofollow")},m(l,m){_(l,d,m),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Bh(I){let d,T,f,u,v;return u=new Po({props:{code:`from transformers import ViTModel, ViTConfig

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTModel, ViTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),f=h(l),y(u.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,f,m),$(u,l,m),v=!0},p:Co,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function Uh(I){let d,T;return{c(){d=n("p"),T=a(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(f){d=r(f,"P",{});var u=i(d);T=s(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(t)},m(f,u){_(f,d,u),e(d,T)},d(f){f&&t(d)}}}function Rh(I){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Hh(I){let d,T,f,u,v;return u=new Po({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),f=h(l),y(u.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,f,m),$(u,l,m),v=!0},p:Co,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function Kh(I){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Jh(I){let d,T,f,u,v;return u=new Po({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
import torch
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = ViTForMaskedImageModeling.from_pretrained("google/vit-base-patch16-224-in21k")

num_patches = (model.config.image_size // model.config.patch_size) ** 2
pixel_values = feature_extractor(images=image, return_tensors="pt").pixel_values
# create random boolean mask of shape (batch_size, num_patches)
bool_masked_pos = torch.randint(low=0, high=2, size=(1, num_patches)).bool()

outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
loss, reconstructed_pixel_values = outputs.loss, outputs.logits
list(reconstructed_pixel_values.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=n("p"),T=a("Examples:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Examples:"),m.forEach(t),f=h(l),y(u.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,f,m),$(u,l,m),v=!0},p:Co,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function Gh(I){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Xh(I){let d,T,f,u,v;return u=new Po({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = ViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, ViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),f=h(l),y(u.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,f,m),$(u,l,m),v=!0},p:Co,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function Zh(I){let d,T,f,u,v,l,m,V,Ge,Pe,L,Ae,S,F,ye,W,Xe,$e,te,qe,ee,oe,ae,Ze,se,ze,_e,ne,Ne,ve,re,P,q,Te,ie,Le,C,B,Qe,le,z,Ye,de,xe,et,ce,pe,tt,D,ot,he,at,U,N,Ee,R,st,me;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=p(),m=n("ul"),V=n("li"),Ge=a("having all inputs as keyword arguments (like PyTorch models), or"),Pe=p(),L=n("li"),Ae=a("having all inputs as a list, tuple or dict in the first positional argument."),S=p(),F=n("p"),ye=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),W=n("code"),Xe=a("model.fit()"),$e=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),te=n("code"),qe=a("model.fit()"),ee=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),oe=n("code"),ae=a("fit()"),Ze=a(" and "),se=n("code"),ze=a("predict()"),_e=a(`, such as when creating your own layers or models with
the Keras `),ne=n("code"),Ne=a("Functional"),ve=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),re=p(),P=n("ul"),q=n("li"),Te=a("a single Tensor with "),ie=n("code"),Le=a("pixel_values"),C=a(" only and nothing else: "),B=n("code"),Qe=a("model(pixel_values)"),le=p(),z=n("li"),Ye=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),xe=a("model([pixel_values, attention_mask])"),et=a(" or "),ce=n("code"),pe=a("model([pixel_values, attention_mask, token_type_ids])"),tt=p(),D=n("li"),ot=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=n("code"),at=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),U=p(),N=n("p"),Ee=a(`Note that when creating models and layers with
`),R=n("a"),st=a("subclassing"),me=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var M=i(d);T=s(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var ft=i(f);u=s(ft,"transformers"),ft.forEach(t),v=s(M," accept two formats as input:"),M.forEach(t),l=h(b),m=r(b,"UL",{});var H=i(m);V=r(H,"LI",{});var ut=i(V);Ge=s(ut,"having all inputs as keyword arguments (like PyTorch models), or"),ut.forEach(t),Pe=h(H),L=r(H,"LI",{});var ke=i(L);Ae=s(ke,"having all inputs as a list, tuple or dict in the first positional argument."),ke.forEach(t),H.forEach(t),S=h(b),F=r(b,"P",{});var j=i(F);ye=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),W=r(j,"CODE",{});var gt=i(W);Xe=s(gt,"model.fit()"),gt.forEach(t),$e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),te=r(j,"CODE",{});var Fe=i(te);qe=s(Fe,"model.fit()"),Fe.forEach(t),ee=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),oe=r(j,"CODE",{});var _t=i(oe);ae=s(_t,"fit()"),_t.forEach(t),Ze=s(j," and "),se=r(j,"CODE",{});var vt=i(se);ze=s(vt,"predict()"),vt.forEach(t),_e=s(j,`, such as when creating your own layers or models with
the Keras `),ne=r(j,"CODE",{});var Tt=i(ne);Ne=s(Tt,"Functional"),Tt.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),re=h(b),P=r(b,"UL",{});var A=i(P);q=r(A,"LI",{});var fe=i(q);Te=s(fe,"a single Tensor with "),ie=r(fe,"CODE",{});var Ve=i(ie);Le=s(Ve,"pixel_values"),Ve.forEach(t),C=s(fe," only and nothing else: "),B=r(fe,"CODE",{});var bt=i(B);Qe=s(bt,"model(pixel_values)"),bt.forEach(t),fe.forEach(t),le=h(A),z=r(A,"LI",{});var ue=i(z);Ye=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var Ie=i(de);xe=s(Ie,"model([pixel_values, attention_mask])"),Ie.forEach(t),et=s(ue," or "),ce=r(ue,"CODE",{});var wt=i(ce);pe=s(wt,"model([pixel_values, attention_mask, token_type_ids])"),wt.forEach(t),ue.forEach(t),tt=h(A),D=r(A,"LI",{});var nt=i(D);ot=s(nt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=r(nt,"CODE",{});var yt=i(he);at=s(yt,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),yt.forEach(t),nt.forEach(t),A.forEach(t),U=h(b),N=r(b,"P",{});var ge=i(N);Ee=s(ge,`Note that when creating models and layers with
`),R=r(ge,"A",{href:!0,rel:!0});var $t=i(R);st=s($t,"subclassing"),$t.forEach(t),me=s(ge,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ge.forEach(t),this.h()},h(){c(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(R,"rel","nofollow")},m(b,M){_(b,d,M),e(d,T),e(d,f),e(f,u),e(d,v),_(b,l,M),_(b,m,M),e(m,V),e(V,Ge),e(m,Pe),e(m,L),e(L,Ae),_(b,S,M),_(b,F,M),e(F,ye),e(F,W),e(W,Xe),e(F,$e),e(F,te),e(te,qe),e(F,ee),e(F,oe),e(oe,ae),e(F,Ze),e(F,se),e(se,ze),e(F,_e),e(F,ne),e(ne,Ne),e(F,ve),_(b,re,M),_(b,P,M),e(P,q),e(q,Te),e(q,ie),e(ie,Le),e(q,C),e(q,B),e(B,Qe),e(P,le),e(P,z),e(z,Ye),e(z,de),e(de,xe),e(z,et),e(z,ce),e(ce,pe),e(P,tt),e(P,D),e(D,ot),e(D,he),e(he,at),_(b,U,M),_(b,N,M),e(N,Ee),e(N,R),e(R,st),e(N,me)},d(b){b&&t(d),b&&t(l),b&&t(m),b&&t(S),b&&t(F),b&&t(re),b&&t(P),b&&t(U),b&&t(N)}}}function Qh(I){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Yh(I){let d,T,f,u,v;return u=new Po({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = TFViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(image, return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),f=h(l),y(u.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,f,m),$(u,l,m),v=!0},p:Co,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function em(I){let d,T,f,u,v,l,m,V,Ge,Pe,L,Ae,S,F,ye,W,Xe,$e,te,qe,ee,oe,ae,Ze,se,ze,_e,ne,Ne,ve,re,P,q,Te,ie,Le,C,B,Qe,le,z,Ye,de,xe,et,ce,pe,tt,D,ot,he,at,U,N,Ee,R,st,me;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=p(),m=n("ul"),V=n("li"),Ge=a("having all inputs as keyword arguments (like PyTorch models), or"),Pe=p(),L=n("li"),Ae=a("having all inputs as a list, tuple or dict in the first positional argument."),S=p(),F=n("p"),ye=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),W=n("code"),Xe=a("model.fit()"),$e=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),te=n("code"),qe=a("model.fit()"),ee=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),oe=n("code"),ae=a("fit()"),Ze=a(" and "),se=n("code"),ze=a("predict()"),_e=a(`, such as when creating your own layers or models with
the Keras `),ne=n("code"),Ne=a("Functional"),ve=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),re=p(),P=n("ul"),q=n("li"),Te=a("a single Tensor with "),ie=n("code"),Le=a("pixel_values"),C=a(" only and nothing else: "),B=n("code"),Qe=a("model(pixel_values)"),le=p(),z=n("li"),Ye=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),xe=a("model([pixel_values, attention_mask])"),et=a(" or "),ce=n("code"),pe=a("model([pixel_values, attention_mask, token_type_ids])"),tt=p(),D=n("li"),ot=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=n("code"),at=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),U=p(),N=n("p"),Ee=a(`Note that when creating models and layers with
`),R=n("a"),st=a("subclassing"),me=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var M=i(d);T=s(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var ft=i(f);u=s(ft,"transformers"),ft.forEach(t),v=s(M," accept two formats as input:"),M.forEach(t),l=h(b),m=r(b,"UL",{});var H=i(m);V=r(H,"LI",{});var ut=i(V);Ge=s(ut,"having all inputs as keyword arguments (like PyTorch models), or"),ut.forEach(t),Pe=h(H),L=r(H,"LI",{});var ke=i(L);Ae=s(ke,"having all inputs as a list, tuple or dict in the first positional argument."),ke.forEach(t),H.forEach(t),S=h(b),F=r(b,"P",{});var j=i(F);ye=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),W=r(j,"CODE",{});var gt=i(W);Xe=s(gt,"model.fit()"),gt.forEach(t),$e=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),te=r(j,"CODE",{});var Fe=i(te);qe=s(Fe,"model.fit()"),Fe.forEach(t),ee=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),oe=r(j,"CODE",{});var _t=i(oe);ae=s(_t,"fit()"),_t.forEach(t),Ze=s(j," and "),se=r(j,"CODE",{});var vt=i(se);ze=s(vt,"predict()"),vt.forEach(t),_e=s(j,`, such as when creating your own layers or models with
the Keras `),ne=r(j,"CODE",{});var Tt=i(ne);Ne=s(Tt,"Functional"),Tt.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),re=h(b),P=r(b,"UL",{});var A=i(P);q=r(A,"LI",{});var fe=i(q);Te=s(fe,"a single Tensor with "),ie=r(fe,"CODE",{});var Ve=i(ie);Le=s(Ve,"pixel_values"),Ve.forEach(t),C=s(fe," only and nothing else: "),B=r(fe,"CODE",{});var bt=i(B);Qe=s(bt,"model(pixel_values)"),bt.forEach(t),fe.forEach(t),le=h(A),z=r(A,"LI",{});var ue=i(z);Ye=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var Ie=i(de);xe=s(Ie,"model([pixel_values, attention_mask])"),Ie.forEach(t),et=s(ue," or "),ce=r(ue,"CODE",{});var wt=i(ce);pe=s(wt,"model([pixel_values, attention_mask, token_type_ids])"),wt.forEach(t),ue.forEach(t),tt=h(A),D=r(A,"LI",{});var nt=i(D);ot=s(nt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),he=r(nt,"CODE",{});var yt=i(he);at=s(yt,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),yt.forEach(t),nt.forEach(t),A.forEach(t),U=h(b),N=r(b,"P",{});var ge=i(N);Ee=s(ge,`Note that when creating models and layers with
`),R=r(ge,"A",{href:!0,rel:!0});var $t=i(R);st=s($t,"subclassing"),$t.forEach(t),me=s(ge,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ge.forEach(t),this.h()},h(){c(R,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(R,"rel","nofollow")},m(b,M){_(b,d,M),e(d,T),e(d,f),e(f,u),e(d,v),_(b,l,M),_(b,m,M),e(m,V),e(V,Ge),e(m,Pe),e(m,L),e(L,Ae),_(b,S,M),_(b,F,M),e(F,ye),e(F,W),e(W,Xe),e(F,$e),e(F,te),e(te,qe),e(F,ee),e(F,oe),e(oe,ae),e(F,Ze),e(F,se),e(se,ze),e(F,_e),e(F,ne),e(ne,Ne),e(F,ve),_(b,re,M),_(b,P,M),e(P,q),e(q,Te),e(q,ie),e(ie,Le),e(q,C),e(q,B),e(B,Qe),e(P,le),e(P,z),e(z,Ye),e(z,de),e(de,xe),e(z,et),e(z,ce),e(ce,pe),e(P,tt),e(P,D),e(D,ot),e(D,he),e(he,at),_(b,U,M),_(b,N,M),e(N,Ee),e(N,R),e(R,st),e(N,me)},d(b){b&&t(d),b&&t(l),b&&t(m),b&&t(S),b&&t(F),b&&t(re),b&&t(P),b&&t(U),b&&t(N)}}}function tm(I){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function om(I){let d,T,f,u,v;return u=new Po({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
import tensorflow as tf
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = TFViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="tf")
logits = model(**inputs).logits

# model predicts one of the 1000 ImageNet classes
predicted_label = int(tf.math.argmax(logits, axis=-1))
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, TFViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),f=h(l),y(u.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,f,m),$(u,l,m),v=!0},p:Co,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function am(I){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function sm(I){let d,T,f,u,v;return u=new Po({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
model = FlaxViTModel.from_pretrained("google/vit-base-patch16-224-in21k")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTModel.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=a("Examples:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Examples:"),m.forEach(t),f=h(l),y(u.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,f,m),$(u,l,m),v=!0},p:Co,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function nm(I){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function rm(I){let d,T,f,u,v;return u=new Po({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
from PIL import Image
import jax
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = FlaxViTForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(images=image, return_tensors="np")
outputs = model(**inputs)
logits = outputs.logits

# model predicts one of the 1000 ImageNet classes
predicted_class_idx = jax.numpy.argmax(logits, axis=-1)
print("Predicted class:", model.config.id2label[predicted_class_idx.item()])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTFeatureExtractor, FlaxViTForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxViTForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = jax.numpy.argmax(logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){d=n("p"),T=a("Example:"),f=p(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);T=s(m,"Example:"),m.forEach(t),f=h(l),y(u.$$.fragment,l)},m(l,m){_(l,d,m),e(d,T),_(l,f,m),$(u,l,m),v=!0},p:Co,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),k(u,l)}}}function im(I){let d,T,f,u,v,l,m,V,Ge,Pe,L,Ae,S,F,ye,W,Xe,$e,te,qe,ee,oe,ae,Ze,se,ze,_e,ne,Ne,ve,re,P,q,Te,ie,Le,C,B,Qe,le,z,Ye,de,xe,et,ce,pe,tt,D,ot,he,at,U,N,Ee,R,st,me,b,M,ft,H,ut,ke,j,gt,Fe,_t,vt,Tt,A,fe,Ve,bt,ue,Ie,wt,nt,yt,ge,$t,Sn,Ua,Cr,Wn,De,Is,O,Ra,Pr,Ar,Ha,qr,zr,Ka,Nr,Lr,Ms,Dr,Or,js,Sr,Wr,Cs,Br,Ur,Ps,Rr,Hr,Ja,Kr,Jr,Gr,As,Ga,Xa,Xr,Zr,Qr,qs,Ao,Yr,qo,ei,ti,oi,zs,Za,Qa,ai,si,Bn,ht,ni,zo,ri,ii,No,li,di,Un,Bt,ci,Lo,pi,hi,Rn,xt,Ut,Ns,Do,mi,Ls,fi,Hn,Me,Oo,ui,Et,gi,Ya,_i,vi,So,Ti,bi,wi,kt,yi,es,$i,xi,ts,Ei,ki,Fi,Rt,Kn,Ft,Ht,Ds,Wo,Vi,Os,Ii,Jn,je,Bo,Mi,Ss,ji,Ci,Uo,Pi,os,Ai,qi,zi,mt,Ro,Ni,Ws,Li,Di,Kt,Gn,Vt,Jt,Bs,Ho,Oi,Us,Si,Xn,rt,Ko,Wi,Jo,Bi,Go,Ui,Ri,Hi,Oe,Xo,Ki,It,Ji,as,Gi,Xi,Rs,Zi,Qi,Yi,Gt,el,Xt,Zn,Mt,Zt,Hs,Zo,tl,Ks,ol,Qn,it,Qo,al,jt,sl,Yo,nl,rl,ea,il,ll,dl,Se,ta,cl,Ct,pl,ss,hl,ml,Js,fl,ul,gl,Qt,_l,Yt,Yn,Pt,eo,Gs,oa,vl,Xs,Tl,er,Ce,aa,bl,Zs,wl,yl,sa,$l,na,xl,El,kl,We,ra,Fl,At,Vl,ns,Il,Ml,Qs,jl,Cl,Pl,to,Al,oo,tr,qt,ao,Ys,ia,ql,en,zl,or,G,la,Nl,tn,Ll,Dl,da,Ol,rs,Sl,Wl,Bl,ca,Ul,pa,Rl,Hl,Kl,so,Jl,Be,ha,Gl,zt,Xl,is,Zl,Ql,on,Yl,ed,td,no,od,ro,ar,Nt,io,an,ma,ad,sn,sd,sr,X,fa,nd,nn,rd,id,ua,ld,ls,dd,cd,pd,ga,hd,_a,md,fd,ud,lo,gd,Ue,va,_d,Lt,vd,ds,Td,bd,rn,wd,yd,$d,co,xd,po,nr,Dt,ho,ln,Ta,Ed,dn,kd,rr,K,ba,Fd,cn,Vd,Id,wa,Md,cs,jd,Cd,Pd,ya,Ad,$a,qd,zd,Nd,pn,Ld,Dd,lt,hn,xa,Od,Sd,mn,Ea,Wd,Bd,fn,ka,Ud,Rd,un,Fa,Hd,Kd,Re,Va,Jd,Ot,Gd,gn,Xd,Zd,_n,Qd,Yd,ec,mo,tc,fo,ir,St,uo,vn,Ia,oc,Tn,ac,lr,J,Ma,sc,bn,nc,rc,ja,ic,ps,lc,dc,cc,Ca,pc,Pa,hc,mc,fc,wn,uc,gc,dt,yn,Aa,_c,vc,$n,qa,Tc,bc,xn,za,wc,yc,En,Na,$c,xc,He,La,Ec,Wt,kc,kn,Fc,Vc,Fn,Ic,Mc,jc,go,Cc,_o,dr;return l=new pt({}),L=new ct({props:{$$slots:{default:[Wh]},$$scope:{ctx:I}}}),W=new pt({}),Do=new pt({}),Oo=new Y({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViTConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViTConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViTConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViTConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViTConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViTConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>224</code>) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViTConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to <code>16</code>) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViTConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to <code>3</code>) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViTConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.ViTConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <code>optional</code>, defaults to 16) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/configuration_vit.py#L35"}}),Rt=new jo({props:{anchor:"transformers.ViTConfig.example",$$slots:{default:[Bh]},$$scope:{ctx:I}}}),Wo=new pt({}),Bo=new Y({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/feature_extraction_vit.py#L36"}}),Ro=new Y({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/feature_extraction_vit.py#L82",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Kt=new ct({props:{warning:!0,$$slots:{default:[Uh]},$$scope:{ctx:I}}}),Ho=new pt({}),Ko=new Y({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L497"}}),Xo=new Y({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTModel.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L522",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
`}}),Gt=new ct({props:{$$slots:{default:[Rh]},$$scope:{ctx:I}}}),Xt=new jo({props:{anchor:"transformers.ViTModel.forward.example",$$slots:{default:[Hh]},$$scope:{ctx:I}}}),Zo=new pt({}),Qo=new Y({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L604"}}),ta=new Y({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForMaskedImageModeling.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L622",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qt=new ct({props:{$$slots:{default:[Kh]},$$scope:{ctx:I}}}),Yt=new jo({props:{anchor:"transformers.ViTForMaskedImageModeling.forward.example",$$slots:{default:[Jh]},$$scope:{ctx:I}}}),oa=new pt({}),aa=new Y({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L718"}}),ra=new Y({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViTForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViTForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViTForImageClassification.forward.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.ViTForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L731",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states
(also called feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new ct({props:{$$slots:{default:[Gh]},$$scope:{ctx:I}}}),oo=new jo({props:{anchor:"transformers.ViTForImageClassification.forward.example",$$slots:{default:[Xh]},$$scope:{ctx:I}}}),ia=new pt({}),la=new Y({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L661"}}),so=new ct({props:{$$slots:{default:[Zh]},$$scope:{ctx:I}}}),ha=new Y({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTModel.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L667",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
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
`}}),no=new ct({props:{$$slots:{default:[Qh]},$$scope:{ctx:I}}}),ro=new jo({props:{anchor:"transformers.TFViTModel.call.example",$$slots:{default:[Yh]},$$scope:{ctx:I}}}),ma=new pt({}),fa=new Y({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L739"}}),lo=new ct({props:{$$slots:{default:[em]},$$scope:{ctx:I}}}),va=new Y({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFViTForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFViTForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFViTForImageClassification.call.interpolate_pos_encoding",description:`<strong>interpolate_pos_encoding</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to interpolate the pre-trained position encodings.`,name:"interpolate_pos_encoding"},{anchor:"transformers.TFViTForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L753",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig"
>ViTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new ct({props:{$$slots:{default:[tm]},$$scope:{ctx:I}}}),po=new jo({props:{anchor:"transformers.TFViTForImageClassification.call.example",$$slots:{default:[om]},$$scope:{ctx:I}}}),Ta=new pt({}),ba=new Y({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L536"}}),Va=new Y({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L451",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
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
`}}),mo=new ct({props:{$$slots:{default:[am]},$$scope:{ctx:I}}}),fo=new jo({props:{anchor:"transformers.FlaxViTModel.__call__.example",$$slots:{default:[sm]},$$scope:{ctx:I}}}),Ia=new pt({}),Ma=new Y({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L617"}}),La=new Y({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L451",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.vit.configuration_vit.ViTConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new ct({props:{$$slots:{default:[nm]},$$scope:{ctx:I}}}),_o=new jo({props:{anchor:"transformers.FlaxViTForImageClassification.__call__.example",$$slots:{default:[rm]},$$scope:{ctx:I}}}),{c(){d=n("meta"),T=p(),f=n("h1"),u=n("a"),v=n("span"),w(l.$$.fragment),m=p(),V=n("span"),Ge=a("Vision Transformer (ViT)"),Pe=p(),w(L.$$.fragment),Ae=p(),S=n("h2"),F=n("a"),ye=n("span"),w(W.$$.fragment),Xe=p(),$e=n("span"),te=a("Overview"),qe=p(),ee=n("p"),oe=a("The Vision Transformer (ViT) model was proposed in "),ae=n("a"),Ze=a(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),se=a(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),ze=p(),_e=n("p"),ne=a("The abstract from the paper is the following:"),Ne=p(),ve=n("p"),re=n("em"),P=a(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),q=p(),Te=n("p"),ie=a("Tips:"),Le=p(),C=n("ul"),B=n("li"),Qe=a("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),le=n("a"),z=a("here"),Ye=a("."),de=p(),xe=n("li"),et=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),ce=p(),pe=n("li"),tt=a(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),D=n("a"),ot=a("ViTFeatureExtractor"),he=a(" to resize (or rescale) and normalize images for the model."),at=p(),U=n("li"),N=a(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ee=n("code"),R=a("google/vit-base-patch16-224"),st=a(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),me=n("a"),b=a("hub"),M=a("."),ft=p(),H=n("li"),ut=a("The available checkpoints are either (1) pre-trained on "),ke=n("a"),j=a("ImageNet-21k"),gt=a(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),Fe=n("a"),_t=a("ImageNet"),vt=a(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Tt=p(),A=n("li"),fe=a(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Ve=n("a"),bt=a("(Touvron et al., 2019)"),ue=a(", "),Ie=n("a"),wt=a(`(Kolesnikov
et al., 2020)`),nt=a(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),yt=p(),ge=n("li"),$t=a(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Sn=p(),Ua=n("p"),Cr=a("Following the original Vision Transformer, some follow-up works have been made:"),Wn=p(),De=n("ul"),Is=n("li"),O=n("p"),Ra=n("a"),Pr=a("DeiT"),Ar=a(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Ha=n("a"),qr=a("ViTModel"),zr=a(` or
`),Ka=n("a"),Nr=a("ViTForImageClassification"),Lr=a(". There are 4 variants available (in 3 different sizes): "),Ms=n("em"),Dr=a("facebook/deit-tiny-patch16-224"),Or=a(`,
`),js=n("em"),Sr=a("facebook/deit-small-patch16-224"),Wr=a(", "),Cs=n("em"),Br=a("facebook/deit-base-patch16-224"),Ur=a(" and "),Ps=n("em"),Rr=a("facebook/deit-base-patch16-384"),Hr=a(`. Note that one should
use `),Ja=n("a"),Kr=a("DeiTFeatureExtractor"),Jr=a(" in order to prepare images for the model."),Gr=p(),As=n("li"),Ga=n("p"),Xa=n("a"),Xr=a("BEiT"),Zr=a(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Qr=p(),qs=n("li"),Ao=n("p"),Yr=a(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qo=n("a"),ei=a("hub"),ti=a("."),oi=p(),zs=n("li"),Za=n("p"),Qa=n("a"),ai=a("MAE"),si=a(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Bn=p(),ht=n("p"),ni=a("This model was contributed by "),zo=n("a"),ri=a("nielsr"),ii=a(`. The original code (written in JAX) can be
found `),No=n("a"),li=a("here"),di=a("."),Un=p(),Bt=n("p"),ci=a("Note that we converted the weights from Ross Wightman\u2019s "),Lo=n("a"),pi=a("timm library"),hi=a(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Rn=p(),xt=n("h2"),Ut=n("a"),Ns=n("span"),w(Do.$$.fragment),mi=p(),Ls=n("span"),fi=a("ViTConfig"),Hn=p(),Me=n("div"),w(Oo.$$.fragment),ui=p(),Et=n("p"),gi=a("This is the configuration class to store the configuration of a "),Ya=n("a"),_i=a("ViTModel"),vi=a(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),So=n("a"),Ti=a("google/vit-base-patch16-224"),bi=a(" architecture."),wi=p(),kt=n("p"),yi=a("Configuration objects inherit from "),es=n("a"),$i=a("PretrainedConfig"),xi=a(` and can be used to control the model outputs. Read the
documentation from `),ts=n("a"),Ei=a("PretrainedConfig"),ki=a(" for more information."),Fi=p(),w(Rt.$$.fragment),Kn=p(),Ft=n("h2"),Ht=n("a"),Ds=n("span"),w(Wo.$$.fragment),Vi=p(),Os=n("span"),Ii=a("ViTFeatureExtractor"),Jn=p(),je=n("div"),w(Bo.$$.fragment),Mi=p(),Ss=n("p"),ji=a("Constructs a ViT feature extractor."),Ci=p(),Uo=n("p"),Pi=a("This feature extractor inherits from "),os=n("a"),Ai=a("FeatureExtractionMixin"),qi=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),zi=p(),mt=n("div"),w(Ro.$$.fragment),Ni=p(),Ws=n("p"),Li=a("Main method to prepare for the model one or several image(s)."),Di=p(),w(Kt.$$.fragment),Gn=p(),Vt=n("h2"),Jt=n("a"),Bs=n("span"),w(Ho.$$.fragment),Oi=p(),Us=n("span"),Si=a("ViTModel"),Xn=p(),rt=n("div"),w(Ko.$$.fragment),Wi=p(),Jo=n("p"),Bi=a(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Go=n("a"),Ui=a("torch.nn.Module"),Ri=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hi=p(),Oe=n("div"),w(Xo.$$.fragment),Ki=p(),It=n("p"),Ji=a("The "),as=n("a"),Gi=a("ViTModel"),Xi=a(" forward method, overrides the "),Rs=n("code"),Zi=a("__call__"),Qi=a(" special method."),Yi=p(),w(Gt.$$.fragment),el=p(),w(Xt.$$.fragment),Zn=p(),Mt=n("h2"),Zt=n("a"),Hs=n("span"),w(Zo.$$.fragment),tl=p(),Ks=n("span"),ol=a("ViTForMaskedImageModeling"),Qn=p(),it=n("div"),w(Qo.$$.fragment),al=p(),jt=n("p"),sl=a("ViT Model with a decoder on top for masked image modeling, as proposed in "),Yo=n("a"),nl=a("SimMIM"),rl=a(`.
This model is a PyTorch `),ea=n("a"),il=a("torch.nn.Module"),ll=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl=p(),Se=n("div"),w(ta.$$.fragment),cl=p(),Ct=n("p"),pl=a("The "),ss=n("a"),hl=a("ViTForMaskedImageModeling"),ml=a(" forward method, overrides the "),Js=n("code"),fl=a("__call__"),ul=a(" special method."),gl=p(),w(Qt.$$.fragment),_l=p(),w(Yt.$$.fragment),Yn=p(),Pt=n("h2"),eo=n("a"),Gs=n("span"),w(oa.$$.fragment),vl=p(),Xs=n("span"),Tl=a("ViTForImageClassification"),er=p(),Ce=n("div"),w(aa.$$.fragment),bl=p(),Zs=n("p"),wl=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),yl=p(),sa=n("p"),$l=a("This model is a PyTorch "),na=n("a"),xl=a("torch.nn.Module"),El=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kl=p(),We=n("div"),w(ra.$$.fragment),Fl=p(),At=n("p"),Vl=a("The "),ns=n("a"),Il=a("ViTForImageClassification"),Ml=a(" forward method, overrides the "),Qs=n("code"),jl=a("__call__"),Cl=a(" special method."),Pl=p(),w(to.$$.fragment),Al=p(),w(oo.$$.fragment),tr=p(),qt=n("h2"),ao=n("a"),Ys=n("span"),w(ia.$$.fragment),ql=p(),en=n("span"),zl=a("TFViTModel"),or=p(),G=n("div"),w(la.$$.fragment),Nl=p(),tn=n("p"),Ll=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Dl=p(),da=n("p"),Ol=a("This model inherits from "),rs=n("a"),Sl=a("TFPreTrainedModel"),Wl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=p(),ca=n("p"),Ul=a("This model is also a "),pa=n("a"),Rl=a("tf.keras.Model"),Hl=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kl=p(),w(so.$$.fragment),Jl=p(),Be=n("div"),w(ha.$$.fragment),Gl=p(),zt=n("p"),Xl=a("The "),is=n("a"),Zl=a("TFViTModel"),Ql=a(" forward method, overrides the "),on=n("code"),Yl=a("__call__"),ed=a(" special method."),td=p(),w(no.$$.fragment),od=p(),w(ro.$$.fragment),ar=p(),Nt=n("h2"),io=n("a"),an=n("span"),w(ma.$$.fragment),ad=p(),sn=n("span"),sd=a("TFViTForImageClassification"),sr=p(),X=n("div"),w(fa.$$.fragment),nd=p(),nn=n("p"),rd=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),id=p(),ua=n("p"),ld=a("This model inherits from "),ls=n("a"),dd=a("TFPreTrainedModel"),cd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd=p(),ga=n("p"),hd=a("This model is also a "),_a=n("a"),md=a("tf.keras.Model"),fd=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ud=p(),w(lo.$$.fragment),gd=p(),Ue=n("div"),w(va.$$.fragment),_d=p(),Lt=n("p"),vd=a("The "),ds=n("a"),Td=a("TFViTForImageClassification"),bd=a(" forward method, overrides the "),rn=n("code"),wd=a("__call__"),yd=a(" special method."),$d=p(),w(co.$$.fragment),xd=p(),w(po.$$.fragment),nr=p(),Dt=n("h2"),ho=n("a"),ln=n("span"),w(Ta.$$.fragment),Ed=p(),dn=n("span"),kd=a("FlaxVitModel"),rr=p(),K=n("div"),w(ba.$$.fragment),Fd=p(),cn=n("p"),Vd=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Id=p(),wa=n("p"),Md=a("This model inherits from "),cs=n("a"),jd=a("FlaxPreTrainedModel"),Cd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pd=p(),ya=n("p"),Ad=a("This model is also a Flax Linen "),$a=n("a"),qd=a("flax.linen.Module"),zd=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Nd=p(),pn=n("p"),Ld=a("Finally, this model supports inherent JAX features such as:"),Dd=p(),lt=n("ul"),hn=n("li"),xa=n("a"),Od=a("Just-In-Time (JIT) compilation"),Sd=p(),mn=n("li"),Ea=n("a"),Wd=a("Automatic Differentiation"),Bd=p(),fn=n("li"),ka=n("a"),Ud=a("Vectorization"),Rd=p(),un=n("li"),Fa=n("a"),Hd=a("Parallelization"),Kd=p(),Re=n("div"),w(Va.$$.fragment),Jd=p(),Ot=n("p"),Gd=a("The "),gn=n("code"),Xd=a("FlaxViTPreTrainedModel"),Zd=a(" forward method, overrides the "),_n=n("code"),Qd=a("__call__"),Yd=a(" special method."),ec=p(),w(mo.$$.fragment),tc=p(),w(fo.$$.fragment),ir=p(),St=n("h2"),uo=n("a"),vn=n("span"),w(Ia.$$.fragment),oc=p(),Tn=n("span"),ac=a("FlaxViTForImageClassification"),lr=p(),J=n("div"),w(Ma.$$.fragment),sc=p(),bn=n("p"),nc=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),rc=p(),ja=n("p"),ic=a("This model inherits from "),ps=n("a"),lc=a("FlaxPreTrainedModel"),dc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cc=p(),Ca=n("p"),pc=a("This model is also a Flax Linen "),Pa=n("a"),hc=a("flax.linen.Module"),mc=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fc=p(),wn=n("p"),uc=a("Finally, this model supports inherent JAX features such as:"),gc=p(),dt=n("ul"),yn=n("li"),Aa=n("a"),_c=a("Just-In-Time (JIT) compilation"),vc=p(),$n=n("li"),qa=n("a"),Tc=a("Automatic Differentiation"),bc=p(),xn=n("li"),za=n("a"),wc=a("Vectorization"),yc=p(),En=n("li"),Na=n("a"),$c=a("Parallelization"),xc=p(),He=n("div"),w(La.$$.fragment),Ec=p(),Wt=n("p"),kc=a("The "),kn=n("code"),Fc=a("FlaxViTPreTrainedModel"),Vc=a(" forward method, overrides the "),Fn=n("code"),Ic=a("__call__"),Mc=a(" special method."),jc=p(),w(go.$$.fragment),Cc=p(),w(_o.$$.fragment),this.h()},l(o){const g=Oh('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),T=h(o),f=r(o,"H1",{class:!0});var Da=i(f);u=r(Da,"A",{id:!0,class:!0,href:!0});var Vn=i(u);v=r(Vn,"SPAN",{});var In=i(v);y(l.$$.fragment,In),In.forEach(t),Vn.forEach(t),m=h(Da),V=r(Da,"SPAN",{});var Mn=i(V);Ge=s(Mn,"Vision Transformer (ViT)"),Mn.forEach(t),Da.forEach(t),Pe=h(o),y(L.$$.fragment,o),Ae=h(o),S=r(o,"H2",{class:!0});var Oa=i(S);F=r(Oa,"A",{id:!0,class:!0,href:!0});var jn=i(F);ye=r(jn,"SPAN",{});var Cn=i(ye);y(W.$$.fragment,Cn),Cn.forEach(t),jn.forEach(t),Xe=h(Oa),$e=r(Oa,"SPAN",{});var Pn=i($e);te=s(Pn,"Overview"),Pn.forEach(t),Oa.forEach(t),qe=h(o),ee=r(o,"P",{});var Sa=i(ee);oe=s(Sa,"The Vision Transformer (ViT) model was proposed in "),ae=r(Sa,"A",{href:!0,rel:!0});var An=i(ae);Ze=s(An,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),An.forEach(t),se=s(Sa,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Sa.forEach(t),ze=h(o),_e=r(o,"P",{});var qn=i(_e);ne=s(qn,"The abstract from the paper is the following:"),qn.forEach(t),Ne=h(o),ve=r(o,"P",{});var zn=i(ve);re=r(zn,"EM",{});var Nn=i(re);P=s(Nn,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Nn.forEach(t),zn.forEach(t),q=h(o),Te=r(o,"P",{});var Ln=i(Te);ie=s(Ln,"Tips:"),Ln.forEach(t),Le=h(o),C=r(o,"UL",{});var Z=i(C);B=r(Z,"LI",{});var Wa=i(B);Qe=s(Wa,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),le=r(Wa,"A",{href:!0,rel:!0});var Dn=i(le);z=s(Dn,"here"),Dn.forEach(t),Ye=s(Wa,"."),Wa.forEach(t),de=h(Z),xe=r(Z,"LI",{});var On=i(xe);et=s(On,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),On.forEach(t),ce=h(Z),pe=r(Z,"LI",{});var Ba=i(pe);tt=s(Ba,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),D=r(Ba,"A",{href:!0});var qc=i(D);ot=s(qc,"ViTFeatureExtractor"),qc.forEach(t),he=s(Ba," to resize (or rescale) and normalize images for the model."),Ba.forEach(t),at=h(Z),U=r(Z,"LI",{});var hs=i(U);N=s(hs,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),Ee=r(hs,"CODE",{});var zc=i(Ee);R=s(zc,"google/vit-base-patch16-224"),zc.forEach(t),st=s(hs,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),me=r(hs,"A",{href:!0,rel:!0});var Nc=i(me);b=s(Nc,"hub"),Nc.forEach(t),M=s(hs,"."),hs.forEach(t),ft=h(Z),H=r(Z,"LI",{});var ms=i(H);ut=s(ms,"The available checkpoints are either (1) pre-trained on "),ke=r(ms,"A",{href:!0,rel:!0});var Lc=i(ke);j=s(Lc,"ImageNet-21k"),Lc.forEach(t),gt=s(ms,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),Fe=r(ms,"A",{href:!0,rel:!0});var Dc=i(Fe);_t=s(Dc,"ImageNet"),Dc.forEach(t),vt=s(ms,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),ms.forEach(t),Tt=h(Z),A=r(Z,"LI",{});var fs=i(A);fe=s(fs,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),Ve=r(fs,"A",{href:!0,rel:!0});var Oc=i(Ve);bt=s(Oc,"(Touvron et al., 2019)"),Oc.forEach(t),ue=s(fs,", "),Ie=r(fs,"A",{href:!0,rel:!0});var Sc=i(Ie);wt=s(Sc,`(Kolesnikov
et al., 2020)`),Sc.forEach(t),nt=s(fs,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),fs.forEach(t),yt=h(Z),ge=r(Z,"LI",{});var Wc=i(ge);$t=s(Wc,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Wc.forEach(t),Z.forEach(t),Sn=h(o),Ua=r(o,"P",{});var Bc=i(Ua);Cr=s(Bc,"Following the original Vision Transformer, some follow-up works have been made:"),Bc.forEach(t),Wn=h(o),De=r(o,"UL",{});var vo=i(De);Is=r(vo,"LI",{});var Uc=i(Is);O=r(Uc,"P",{});var Q=i(O);Ra=r(Q,"A",{href:!0});var Rc=i(Ra);Pr=s(Rc,"DeiT"),Rc.forEach(t),Ar=s(Q,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Ha=r(Q,"A",{href:!0});var Hc=i(Ha);qr=s(Hc,"ViTModel"),Hc.forEach(t),zr=s(Q,` or
`),Ka=r(Q,"A",{href:!0});var Kc=i(Ka);Nr=s(Kc,"ViTForImageClassification"),Kc.forEach(t),Lr=s(Q,". There are 4 variants available (in 3 different sizes): "),Ms=r(Q,"EM",{});var Jc=i(Ms);Dr=s(Jc,"facebook/deit-tiny-patch16-224"),Jc.forEach(t),Or=s(Q,`,
`),js=r(Q,"EM",{});var Gc=i(js);Sr=s(Gc,"facebook/deit-small-patch16-224"),Gc.forEach(t),Wr=s(Q,", "),Cs=r(Q,"EM",{});var Xc=i(Cs);Br=s(Xc,"facebook/deit-base-patch16-224"),Xc.forEach(t),Ur=s(Q," and "),Ps=r(Q,"EM",{});var Zc=i(Ps);Rr=s(Zc,"facebook/deit-base-patch16-384"),Zc.forEach(t),Hr=s(Q,`. Note that one should
use `),Ja=r(Q,"A",{href:!0});var Qc=i(Ja);Kr=s(Qc,"DeiTFeatureExtractor"),Qc.forEach(t),Jr=s(Q," in order to prepare images for the model."),Q.forEach(t),Uc.forEach(t),Gr=h(vo),As=r(vo,"LI",{});var Yc=i(As);Ga=r(Yc,"P",{});var Pc=i(Ga);Xa=r(Pc,"A",{href:!0});var ep=i(Xa);Xr=s(ep,"BEiT"),ep.forEach(t),Zr=s(Pc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Pc.forEach(t),Yc.forEach(t),Qr=h(vo),qs=r(vo,"LI",{});var tp=i(qs);Ao=r(tp,"P",{});var cr=i(Ao);Yr=s(cr,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),qo=r(cr,"A",{href:!0,rel:!0});var op=i(qo);ei=s(op,"hub"),op.forEach(t),ti=s(cr,"."),cr.forEach(t),tp.forEach(t),oi=h(vo),zs=r(vo,"LI",{});var ap=i(zs);Za=r(ap,"P",{});var Ac=i(Za);Qa=r(Ac,"A",{href:!0});var sp=i(Qa);ai=s(sp,"MAE"),sp.forEach(t),si=s(Ac,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Ac.forEach(t),ap.forEach(t),vo.forEach(t),Bn=h(o),ht=r(o,"P",{});var us=i(ht);ni=s(us,"This model was contributed by "),zo=r(us,"A",{href:!0,rel:!0});var np=i(zo);ri=s(np,"nielsr"),np.forEach(t),ii=s(us,`. The original code (written in JAX) can be
found `),No=r(us,"A",{href:!0,rel:!0});var rp=i(No);li=s(rp,"here"),rp.forEach(t),di=s(us,"."),us.forEach(t),Un=h(o),Bt=r(o,"P",{});var pr=i(Bt);ci=s(pr,"Note that we converted the weights from Ross Wightman\u2019s "),Lo=r(pr,"A",{href:!0,rel:!0});var ip=i(Lo);pi=s(ip,"timm library"),ip.forEach(t),hi=s(pr,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),pr.forEach(t),Rn=h(o),xt=r(o,"H2",{class:!0});var hr=i(xt);Ut=r(hr,"A",{id:!0,class:!0,href:!0});var lp=i(Ut);Ns=r(lp,"SPAN",{});var dp=i(Ns);y(Do.$$.fragment,dp),dp.forEach(t),lp.forEach(t),mi=h(hr),Ls=r(hr,"SPAN",{});var cp=i(Ls);fi=s(cp,"ViTConfig"),cp.forEach(t),hr.forEach(t),Hn=h(o),Me=r(o,"DIV",{class:!0});var To=i(Me);y(Oo.$$.fragment,To),ui=h(To),Et=r(To,"P",{});var gs=i(Et);gi=s(gs,"This is the configuration class to store the configuration of a "),Ya=r(gs,"A",{href:!0});var pp=i(Ya);_i=s(pp,"ViTModel"),pp.forEach(t),vi=s(gs,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),So=r(gs,"A",{href:!0,rel:!0});var hp=i(So);Ti=s(hp,"google/vit-base-patch16-224"),hp.forEach(t),bi=s(gs," architecture."),gs.forEach(t),wi=h(To),kt=r(To,"P",{});var _s=i(kt);yi=s(_s,"Configuration objects inherit from "),es=r(_s,"A",{href:!0});var mp=i(es);$i=s(mp,"PretrainedConfig"),mp.forEach(t),xi=s(_s,` and can be used to control the model outputs. Read the
documentation from `),ts=r(_s,"A",{href:!0});var fp=i(ts);Ei=s(fp,"PretrainedConfig"),fp.forEach(t),ki=s(_s," for more information."),_s.forEach(t),Fi=h(To),y(Rt.$$.fragment,To),To.forEach(t),Kn=h(o),Ft=r(o,"H2",{class:!0});var mr=i(Ft);Ht=r(mr,"A",{id:!0,class:!0,href:!0});var up=i(Ht);Ds=r(up,"SPAN",{});var gp=i(Ds);y(Wo.$$.fragment,gp),gp.forEach(t),up.forEach(t),Vi=h(mr),Os=r(mr,"SPAN",{});var _p=i(Os);Ii=s(_p,"ViTFeatureExtractor"),_p.forEach(t),mr.forEach(t),Jn=h(o),je=r(o,"DIV",{class:!0});var bo=i(je);y(Bo.$$.fragment,bo),Mi=h(bo),Ss=r(bo,"P",{});var vp=i(Ss);ji=s(vp,"Constructs a ViT feature extractor."),vp.forEach(t),Ci=h(bo),Uo=r(bo,"P",{});var fr=i(Uo);Pi=s(fr,"This feature extractor inherits from "),os=r(fr,"A",{href:!0});var Tp=i(os);Ai=s(Tp,"FeatureExtractionMixin"),Tp.forEach(t),qi=s(fr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),fr.forEach(t),zi=h(bo),mt=r(bo,"DIV",{class:!0});var vs=i(mt);y(Ro.$$.fragment,vs),Ni=h(vs),Ws=r(vs,"P",{});var bp=i(Ws);Li=s(bp,"Main method to prepare for the model one or several image(s)."),bp.forEach(t),Di=h(vs),y(Kt.$$.fragment,vs),vs.forEach(t),bo.forEach(t),Gn=h(o),Vt=r(o,"H2",{class:!0});var ur=i(Vt);Jt=r(ur,"A",{id:!0,class:!0,href:!0});var wp=i(Jt);Bs=r(wp,"SPAN",{});var yp=i(Bs);y(Ho.$$.fragment,yp),yp.forEach(t),wp.forEach(t),Oi=h(ur),Us=r(ur,"SPAN",{});var $p=i(Us);Si=s($p,"ViTModel"),$p.forEach(t),ur.forEach(t),Xn=h(o),rt=r(o,"DIV",{class:!0});var Ts=i(rt);y(Ko.$$.fragment,Ts),Wi=h(Ts),Jo=r(Ts,"P",{});var gr=i(Jo);Bi=s(gr,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Go=r(gr,"A",{href:!0,rel:!0});var xp=i(Go);Ui=s(xp,"torch.nn.Module"),xp.forEach(t),Ri=s(gr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gr.forEach(t),Hi=h(Ts),Oe=r(Ts,"DIV",{class:!0});var wo=i(Oe);y(Xo.$$.fragment,wo),Ki=h(wo),It=r(wo,"P",{});var bs=i(It);Ji=s(bs,"The "),as=r(bs,"A",{href:!0});var Ep=i(as);Gi=s(Ep,"ViTModel"),Ep.forEach(t),Xi=s(bs," forward method, overrides the "),Rs=r(bs,"CODE",{});var kp=i(Rs);Zi=s(kp,"__call__"),kp.forEach(t),Qi=s(bs," special method."),bs.forEach(t),Yi=h(wo),y(Gt.$$.fragment,wo),el=h(wo),y(Xt.$$.fragment,wo),wo.forEach(t),Ts.forEach(t),Zn=h(o),Mt=r(o,"H2",{class:!0});var _r=i(Mt);Zt=r(_r,"A",{id:!0,class:!0,href:!0});var Fp=i(Zt);Hs=r(Fp,"SPAN",{});var Vp=i(Hs);y(Zo.$$.fragment,Vp),Vp.forEach(t),Fp.forEach(t),tl=h(_r),Ks=r(_r,"SPAN",{});var Ip=i(Ks);ol=s(Ip,"ViTForMaskedImageModeling"),Ip.forEach(t),_r.forEach(t),Qn=h(o),it=r(o,"DIV",{class:!0});var ws=i(it);y(Qo.$$.fragment,ws),al=h(ws),jt=r(ws,"P",{});var ys=i(jt);sl=s(ys,"ViT Model with a decoder on top for masked image modeling, as proposed in "),Yo=r(ys,"A",{href:!0,rel:!0});var Mp=i(Yo);nl=s(Mp,"SimMIM"),Mp.forEach(t),rl=s(ys,`.
This model is a PyTorch `),ea=r(ys,"A",{href:!0,rel:!0});var jp=i(ea);il=s(jp,"torch.nn.Module"),jp.forEach(t),ll=s(ys,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ys.forEach(t),dl=h(ws),Se=r(ws,"DIV",{class:!0});var yo=i(Se);y(ta.$$.fragment,yo),cl=h(yo),Ct=r(yo,"P",{});var $s=i(Ct);pl=s($s,"The "),ss=r($s,"A",{href:!0});var Cp=i(ss);hl=s(Cp,"ViTForMaskedImageModeling"),Cp.forEach(t),ml=s($s," forward method, overrides the "),Js=r($s,"CODE",{});var Pp=i(Js);fl=s(Pp,"__call__"),Pp.forEach(t),ul=s($s," special method."),$s.forEach(t),gl=h(yo),y(Qt.$$.fragment,yo),_l=h(yo),y(Yt.$$.fragment,yo),yo.forEach(t),ws.forEach(t),Yn=h(o),Pt=r(o,"H2",{class:!0});var vr=i(Pt);eo=r(vr,"A",{id:!0,class:!0,href:!0});var Ap=i(eo);Gs=r(Ap,"SPAN",{});var qp=i(Gs);y(oa.$$.fragment,qp),qp.forEach(t),Ap.forEach(t),vl=h(vr),Xs=r(vr,"SPAN",{});var zp=i(Xs);Tl=s(zp,"ViTForImageClassification"),zp.forEach(t),vr.forEach(t),er=h(o),Ce=r(o,"DIV",{class:!0});var $o=i(Ce);y(aa.$$.fragment,$o),bl=h($o),Zs=r($o,"P",{});var Np=i(Zs);wl=s(Np,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Np.forEach(t),yl=h($o),sa=r($o,"P",{});var Tr=i(sa);$l=s(Tr,"This model is a PyTorch "),na=r(Tr,"A",{href:!0,rel:!0});var Lp=i(na);xl=s(Lp,"torch.nn.Module"),Lp.forEach(t),El=s(Tr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tr.forEach(t),kl=h($o),We=r($o,"DIV",{class:!0});var xo=i(We);y(ra.$$.fragment,xo),Fl=h(xo),At=r(xo,"P",{});var xs=i(At);Vl=s(xs,"The "),ns=r(xs,"A",{href:!0});var Dp=i(ns);Il=s(Dp,"ViTForImageClassification"),Dp.forEach(t),Ml=s(xs," forward method, overrides the "),Qs=r(xs,"CODE",{});var Op=i(Qs);jl=s(Op,"__call__"),Op.forEach(t),Cl=s(xs," special method."),xs.forEach(t),Pl=h(xo),y(to.$$.fragment,xo),Al=h(xo),y(oo.$$.fragment,xo),xo.forEach(t),$o.forEach(t),tr=h(o),qt=r(o,"H2",{class:!0});var br=i(qt);ao=r(br,"A",{id:!0,class:!0,href:!0});var Sp=i(ao);Ys=r(Sp,"SPAN",{});var Wp=i(Ys);y(ia.$$.fragment,Wp),Wp.forEach(t),Sp.forEach(t),ql=h(br),en=r(br,"SPAN",{});var Bp=i(en);zl=s(Bp,"TFViTModel"),Bp.forEach(t),br.forEach(t),or=h(o),G=r(o,"DIV",{class:!0});var Ke=i(G);y(la.$$.fragment,Ke),Nl=h(Ke),tn=r(Ke,"P",{});var Up=i(tn);Ll=s(Up,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Up.forEach(t),Dl=h(Ke),da=r(Ke,"P",{});var wr=i(da);Ol=s(wr,"This model inherits from "),rs=r(wr,"A",{href:!0});var Rp=i(rs);Sl=s(Rp,"TFPreTrainedModel"),Rp.forEach(t),Wl=s(wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr.forEach(t),Bl=h(Ke),ca=r(Ke,"P",{});var yr=i(ca);Ul=s(yr,"This model is also a "),pa=r(yr,"A",{href:!0,rel:!0});var Hp=i(pa);Rl=s(Hp,"tf.keras.Model"),Hp.forEach(t),Hl=s(yr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yr.forEach(t),Kl=h(Ke),y(so.$$.fragment,Ke),Jl=h(Ke),Be=r(Ke,"DIV",{class:!0});var Eo=i(Be);y(ha.$$.fragment,Eo),Gl=h(Eo),zt=r(Eo,"P",{});var Es=i(zt);Xl=s(Es,"The "),is=r(Es,"A",{href:!0});var Kp=i(is);Zl=s(Kp,"TFViTModel"),Kp.forEach(t),Ql=s(Es," forward method, overrides the "),on=r(Es,"CODE",{});var Jp=i(on);Yl=s(Jp,"__call__"),Jp.forEach(t),ed=s(Es," special method."),Es.forEach(t),td=h(Eo),y(no.$$.fragment,Eo),od=h(Eo),y(ro.$$.fragment,Eo),Eo.forEach(t),Ke.forEach(t),ar=h(o),Nt=r(o,"H2",{class:!0});var $r=i(Nt);io=r($r,"A",{id:!0,class:!0,href:!0});var Gp=i(io);an=r(Gp,"SPAN",{});var Xp=i(an);y(ma.$$.fragment,Xp),Xp.forEach(t),Gp.forEach(t),ad=h($r),sn=r($r,"SPAN",{});var Zp=i(sn);sd=s(Zp,"TFViTForImageClassification"),Zp.forEach(t),$r.forEach(t),sr=h(o),X=r(o,"DIV",{class:!0});var Je=i(X);y(fa.$$.fragment,Je),nd=h(Je),nn=r(Je,"P",{});var Qp=i(nn);rd=s(Qp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Qp.forEach(t),id=h(Je),ua=r(Je,"P",{});var xr=i(ua);ld=s(xr,"This model inherits from "),ls=r(xr,"A",{href:!0});var Yp=i(ls);dd=s(Yp,"TFPreTrainedModel"),Yp.forEach(t),cd=s(xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xr.forEach(t),pd=h(Je),ga=r(Je,"P",{});var Er=i(ga);hd=s(Er,"This model is also a "),_a=r(Er,"A",{href:!0,rel:!0});var eh=i(_a);md=s(eh,"tf.keras.Model"),eh.forEach(t),fd=s(Er,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Er.forEach(t),ud=h(Je),y(lo.$$.fragment,Je),gd=h(Je),Ue=r(Je,"DIV",{class:!0});var ko=i(Ue);y(va.$$.fragment,ko),_d=h(ko),Lt=r(ko,"P",{});var ks=i(Lt);vd=s(ks,"The "),ds=r(ks,"A",{href:!0});var th=i(ds);Td=s(th,"TFViTForImageClassification"),th.forEach(t),bd=s(ks," forward method, overrides the "),rn=r(ks,"CODE",{});var oh=i(rn);wd=s(oh,"__call__"),oh.forEach(t),yd=s(ks," special method."),ks.forEach(t),$d=h(ko),y(co.$$.fragment,ko),xd=h(ko),y(po.$$.fragment,ko),ko.forEach(t),Je.forEach(t),nr=h(o),Dt=r(o,"H2",{class:!0});var kr=i(Dt);ho=r(kr,"A",{id:!0,class:!0,href:!0});var ah=i(ho);ln=r(ah,"SPAN",{});var sh=i(ln);y(Ta.$$.fragment,sh),sh.forEach(t),ah.forEach(t),Ed=h(kr),dn=r(kr,"SPAN",{});var nh=i(dn);kd=s(nh,"FlaxVitModel"),nh.forEach(t),kr.forEach(t),rr=h(o),K=r(o,"DIV",{class:!0});var be=i(K);y(ba.$$.fragment,be),Fd=h(be),cn=r(be,"P",{});var rh=i(cn);Vd=s(rh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),rh.forEach(t),Id=h(be),wa=r(be,"P",{});var Fr=i(wa);Md=s(Fr,"This model inherits from "),cs=r(Fr,"A",{href:!0});var ih=i(cs);jd=s(ih,"FlaxPreTrainedModel"),ih.forEach(t),Cd=s(Fr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fr.forEach(t),Pd=h(be),ya=r(be,"P",{});var Vr=i(ya);Ad=s(Vr,"This model is also a Flax Linen "),$a=r(Vr,"A",{href:!0,rel:!0});var lh=i($a);qd=s(lh,"flax.linen.Module"),lh.forEach(t),zd=s(Vr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Vr.forEach(t),Nd=h(be),pn=r(be,"P",{});var dh=i(pn);Ld=s(dh,"Finally, this model supports inherent JAX features such as:"),dh.forEach(t),Dd=h(be),lt=r(be,"UL",{});var Fo=i(lt);hn=r(Fo,"LI",{});var ch=i(hn);xa=r(ch,"A",{href:!0,rel:!0});var ph=i(xa);Od=s(ph,"Just-In-Time (JIT) compilation"),ph.forEach(t),ch.forEach(t),Sd=h(Fo),mn=r(Fo,"LI",{});var hh=i(mn);Ea=r(hh,"A",{href:!0,rel:!0});var mh=i(Ea);Wd=s(mh,"Automatic Differentiation"),mh.forEach(t),hh.forEach(t),Bd=h(Fo),fn=r(Fo,"LI",{});var fh=i(fn);ka=r(fh,"A",{href:!0,rel:!0});var uh=i(ka);Ud=s(uh,"Vectorization"),uh.forEach(t),fh.forEach(t),Rd=h(Fo),un=r(Fo,"LI",{});var gh=i(un);Fa=r(gh,"A",{href:!0,rel:!0});var _h=i(Fa);Hd=s(_h,"Parallelization"),_h.forEach(t),gh.forEach(t),Fo.forEach(t),Kd=h(be),Re=r(be,"DIV",{class:!0});var Vo=i(Re);y(Va.$$.fragment,Vo),Jd=h(Vo),Ot=r(Vo,"P",{});var Fs=i(Ot);Gd=s(Fs,"The "),gn=r(Fs,"CODE",{});var vh=i(gn);Xd=s(vh,"FlaxViTPreTrainedModel"),vh.forEach(t),Zd=s(Fs," forward method, overrides the "),_n=r(Fs,"CODE",{});var Th=i(_n);Qd=s(Th,"__call__"),Th.forEach(t),Yd=s(Fs," special method."),Fs.forEach(t),ec=h(Vo),y(mo.$$.fragment,Vo),tc=h(Vo),y(fo.$$.fragment,Vo),Vo.forEach(t),be.forEach(t),ir=h(o),St=r(o,"H2",{class:!0});var Ir=i(St);uo=r(Ir,"A",{id:!0,class:!0,href:!0});var bh=i(uo);vn=r(bh,"SPAN",{});var wh=i(vn);y(Ia.$$.fragment,wh),wh.forEach(t),bh.forEach(t),oc=h(Ir),Tn=r(Ir,"SPAN",{});var yh=i(Tn);ac=s(yh,"FlaxViTForImageClassification"),yh.forEach(t),Ir.forEach(t),lr=h(o),J=r(o,"DIV",{class:!0});var we=i(J);y(Ma.$$.fragment,we),sc=h(we),bn=r(we,"P",{});var $h=i(bn);nc=s($h,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),$h.forEach(t),rc=h(we),ja=r(we,"P",{});var Mr=i(ja);ic=s(Mr,"This model inherits from "),ps=r(Mr,"A",{href:!0});var xh=i(ps);lc=s(xh,"FlaxPreTrainedModel"),xh.forEach(t),dc=s(Mr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Mr.forEach(t),cc=h(we),Ca=r(we,"P",{});var jr=i(Ca);pc=s(jr,"This model is also a Flax Linen "),Pa=r(jr,"A",{href:!0,rel:!0});var Eh=i(Pa);hc=s(Eh,"flax.linen.Module"),Eh.forEach(t),mc=s(jr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),jr.forEach(t),fc=h(we),wn=r(we,"P",{});var kh=i(wn);uc=s(kh,"Finally, this model supports inherent JAX features such as:"),kh.forEach(t),gc=h(we),dt=r(we,"UL",{});var Io=i(dt);yn=r(Io,"LI",{});var Fh=i(yn);Aa=r(Fh,"A",{href:!0,rel:!0});var Vh=i(Aa);_c=s(Vh,"Just-In-Time (JIT) compilation"),Vh.forEach(t),Fh.forEach(t),vc=h(Io),$n=r(Io,"LI",{});var Ih=i($n);qa=r(Ih,"A",{href:!0,rel:!0});var Mh=i(qa);Tc=s(Mh,"Automatic Differentiation"),Mh.forEach(t),Ih.forEach(t),bc=h(Io),xn=r(Io,"LI",{});var jh=i(xn);za=r(jh,"A",{href:!0,rel:!0});var Ch=i(za);wc=s(Ch,"Vectorization"),Ch.forEach(t),jh.forEach(t),yc=h(Io),En=r(Io,"LI",{});var Ph=i(En);Na=r(Ph,"A",{href:!0,rel:!0});var Ah=i(Na);$c=s(Ah,"Parallelization"),Ah.forEach(t),Ph.forEach(t),Io.forEach(t),xc=h(we),He=r(we,"DIV",{class:!0});var Mo=i(He);y(La.$$.fragment,Mo),Ec=h(Mo),Wt=r(Mo,"P",{});var Vs=i(Wt);kc=s(Vs,"The "),kn=r(Vs,"CODE",{});var qh=i(kn);Fc=s(qh,"FlaxViTPreTrainedModel"),qh.forEach(t),Vc=s(Vs," forward method, overrides the "),Fn=r(Vs,"CODE",{});var zh=i(Fn);Ic=s(zh,"__call__"),zh.forEach(t),Mc=s(Vs," special method."),Vs.forEach(t),jc=h(Mo),y(go.$$.fragment,Mo),Cc=h(Mo),y(_o.$$.fragment,Mo),Mo.forEach(t),we.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(lm)),c(u,"id","vision-transformer-vit"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#vision-transformer-vit"),c(f,"class","relative group"),c(F,"id","overview"),c(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(F,"href","#overview"),c(S,"class","relative group"),c(ae,"href","https://arxiv.org/abs/2010.11929"),c(ae,"rel","nofollow"),c(le,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),c(le,"rel","nofollow"),c(D,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTFeatureExtractor"),c(me,"href","https://huggingface.co/models?search=vit"),c(me,"rel","nofollow"),c(ke,"href","http://www.image-net.org/"),c(ke,"rel","nofollow"),c(Fe,"href","http://www.image-net.org/challenges/LSVRC/2012/"),c(Fe,"rel","nofollow"),c(Ve,"href","https://arxiv.org/abs/1906.06423"),c(Ve,"rel","nofollow"),c(Ie,"href","https://arxiv.org/abs/1912.11370"),c(Ie,"rel","nofollow"),c(Ra,"href","deit"),c(Ha,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(Ka,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(Ja,"href","/docs/transformers/main/en/model_doc/deit#transformers.DeiTFeatureExtractor"),c(Xa,"href","beit"),c(qo,"href","https://huggingface.co/models?other=dino"),c(qo,"rel","nofollow"),c(Qa,"href","vit_mae"),c(zo,"href","https://huggingface.co/nielsr"),c(zo,"rel","nofollow"),c(No,"href","https://github.com/google-research/vision_transformer"),c(No,"rel","nofollow"),c(Lo,"href","https://github.com/rwightman/pytorch-image-models"),c(Lo,"rel","nofollow"),c(Ut,"id","transformers.ViTConfig"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.ViTConfig"),c(xt,"class","relative group"),c(Ya,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(So,"href","https://huggingface.co/google/vit-base-patch16-224"),c(So,"rel","nofollow"),c(es,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ts,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ht,"id","transformers.ViTFeatureExtractor"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.ViTFeatureExtractor"),c(Ft,"class","relative group"),c(os,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jt,"id","transformers.ViTModel"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.ViTModel"),c(Vt,"class","relative group"),c(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Go,"rel","nofollow"),c(as,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"id","transformers.ViTForMaskedImageModeling"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.ViTForMaskedImageModeling"),c(Mt,"class","relative group"),c(Yo,"href","https://arxiv.org/abs/2111.09886"),c(Yo,"rel","nofollow"),c(ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ea,"rel","nofollow"),c(ss,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.ViTForImageClassification"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.ViTForImageClassification"),c(Pt,"class","relative group"),c(na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(na,"rel","nofollow"),c(ns,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.TFViTModel"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.TFViTModel"),c(qt,"class","relative group"),c(rs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(pa,"rel","nofollow"),c(is,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTModel"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.TFViTForImageClassification"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFViTForImageClassification"),c(Nt,"class","relative group"),c(ls,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(_a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(_a,"rel","nofollow"),c(ds,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTForImageClassification"),c(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ho,"id","transformers.FlaxViTModel"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.FlaxViTModel"),c(Dt,"class","relative group"),c(cs,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($a,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c($a,"rel","nofollow"),c(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(xa,"rel","nofollow"),c(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ea,"rel","nofollow"),c(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ka,"rel","nofollow"),c(Fa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Fa,"rel","nofollow"),c(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(uo,"id","transformers.FlaxViTForImageClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.FlaxViTForImageClassification"),c(St,"class","relative group"),c(ps,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Pa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Pa,"rel","nofollow"),c(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Aa,"rel","nofollow"),c(qa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(za,"rel","nofollow"),c(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Na,"rel","nofollow"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,T,g),_(o,f,g),e(f,u),e(u,v),$(l,v,null),e(f,m),e(f,V),e(V,Ge),_(o,Pe,g),$(L,o,g),_(o,Ae,g),_(o,S,g),e(S,F),e(F,ye),$(W,ye,null),e(S,Xe),e(S,$e),e($e,te),_(o,qe,g),_(o,ee,g),e(ee,oe),e(ee,ae),e(ae,Ze),e(ee,se),_(o,ze,g),_(o,_e,g),e(_e,ne),_(o,Ne,g),_(o,ve,g),e(ve,re),e(re,P),_(o,q,g),_(o,Te,g),e(Te,ie),_(o,Le,g),_(o,C,g),e(C,B),e(B,Qe),e(B,le),e(le,z),e(B,Ye),e(C,de),e(C,xe),e(xe,et),e(C,ce),e(C,pe),e(pe,tt),e(pe,D),e(D,ot),e(pe,he),e(C,at),e(C,U),e(U,N),e(U,Ee),e(Ee,R),e(U,st),e(U,me),e(me,b),e(U,M),e(C,ft),e(C,H),e(H,ut),e(H,ke),e(ke,j),e(H,gt),e(H,Fe),e(Fe,_t),e(H,vt),e(C,Tt),e(C,A),e(A,fe),e(A,Ve),e(Ve,bt),e(A,ue),e(A,Ie),e(Ie,wt),e(A,nt),e(C,yt),e(C,ge),e(ge,$t),_(o,Sn,g),_(o,Ua,g),e(Ua,Cr),_(o,Wn,g),_(o,De,g),e(De,Is),e(Is,O),e(O,Ra),e(Ra,Pr),e(O,Ar),e(O,Ha),e(Ha,qr),e(O,zr),e(O,Ka),e(Ka,Nr),e(O,Lr),e(O,Ms),e(Ms,Dr),e(O,Or),e(O,js),e(js,Sr),e(O,Wr),e(O,Cs),e(Cs,Br),e(O,Ur),e(O,Ps),e(Ps,Rr),e(O,Hr),e(O,Ja),e(Ja,Kr),e(O,Jr),e(De,Gr),e(De,As),e(As,Ga),e(Ga,Xa),e(Xa,Xr),e(Ga,Zr),e(De,Qr),e(De,qs),e(qs,Ao),e(Ao,Yr),e(Ao,qo),e(qo,ei),e(Ao,ti),e(De,oi),e(De,zs),e(zs,Za),e(Za,Qa),e(Qa,ai),e(Za,si),_(o,Bn,g),_(o,ht,g),e(ht,ni),e(ht,zo),e(zo,ri),e(ht,ii),e(ht,No),e(No,li),e(ht,di),_(o,Un,g),_(o,Bt,g),e(Bt,ci),e(Bt,Lo),e(Lo,pi),e(Bt,hi),_(o,Rn,g),_(o,xt,g),e(xt,Ut),e(Ut,Ns),$(Do,Ns,null),e(xt,mi),e(xt,Ls),e(Ls,fi),_(o,Hn,g),_(o,Me,g),$(Oo,Me,null),e(Me,ui),e(Me,Et),e(Et,gi),e(Et,Ya),e(Ya,_i),e(Et,vi),e(Et,So),e(So,Ti),e(Et,bi),e(Me,wi),e(Me,kt),e(kt,yi),e(kt,es),e(es,$i),e(kt,xi),e(kt,ts),e(ts,Ei),e(kt,ki),e(Me,Fi),$(Rt,Me,null),_(o,Kn,g),_(o,Ft,g),e(Ft,Ht),e(Ht,Ds),$(Wo,Ds,null),e(Ft,Vi),e(Ft,Os),e(Os,Ii),_(o,Jn,g),_(o,je,g),$(Bo,je,null),e(je,Mi),e(je,Ss),e(Ss,ji),e(je,Ci),e(je,Uo),e(Uo,Pi),e(Uo,os),e(os,Ai),e(Uo,qi),e(je,zi),e(je,mt),$(Ro,mt,null),e(mt,Ni),e(mt,Ws),e(Ws,Li),e(mt,Di),$(Kt,mt,null),_(o,Gn,g),_(o,Vt,g),e(Vt,Jt),e(Jt,Bs),$(Ho,Bs,null),e(Vt,Oi),e(Vt,Us),e(Us,Si),_(o,Xn,g),_(o,rt,g),$(Ko,rt,null),e(rt,Wi),e(rt,Jo),e(Jo,Bi),e(Jo,Go),e(Go,Ui),e(Jo,Ri),e(rt,Hi),e(rt,Oe),$(Xo,Oe,null),e(Oe,Ki),e(Oe,It),e(It,Ji),e(It,as),e(as,Gi),e(It,Xi),e(It,Rs),e(Rs,Zi),e(It,Qi),e(Oe,Yi),$(Gt,Oe,null),e(Oe,el),$(Xt,Oe,null),_(o,Zn,g),_(o,Mt,g),e(Mt,Zt),e(Zt,Hs),$(Zo,Hs,null),e(Mt,tl),e(Mt,Ks),e(Ks,ol),_(o,Qn,g),_(o,it,g),$(Qo,it,null),e(it,al),e(it,jt),e(jt,sl),e(jt,Yo),e(Yo,nl),e(jt,rl),e(jt,ea),e(ea,il),e(jt,ll),e(it,dl),e(it,Se),$(ta,Se,null),e(Se,cl),e(Se,Ct),e(Ct,pl),e(Ct,ss),e(ss,hl),e(Ct,ml),e(Ct,Js),e(Js,fl),e(Ct,ul),e(Se,gl),$(Qt,Se,null),e(Se,_l),$(Yt,Se,null),_(o,Yn,g),_(o,Pt,g),e(Pt,eo),e(eo,Gs),$(oa,Gs,null),e(Pt,vl),e(Pt,Xs),e(Xs,Tl),_(o,er,g),_(o,Ce,g),$(aa,Ce,null),e(Ce,bl),e(Ce,Zs),e(Zs,wl),e(Ce,yl),e(Ce,sa),e(sa,$l),e(sa,na),e(na,xl),e(sa,El),e(Ce,kl),e(Ce,We),$(ra,We,null),e(We,Fl),e(We,At),e(At,Vl),e(At,ns),e(ns,Il),e(At,Ml),e(At,Qs),e(Qs,jl),e(At,Cl),e(We,Pl),$(to,We,null),e(We,Al),$(oo,We,null),_(o,tr,g),_(o,qt,g),e(qt,ao),e(ao,Ys),$(ia,Ys,null),e(qt,ql),e(qt,en),e(en,zl),_(o,or,g),_(o,G,g),$(la,G,null),e(G,Nl),e(G,tn),e(tn,Ll),e(G,Dl),e(G,da),e(da,Ol),e(da,rs),e(rs,Sl),e(da,Wl),e(G,Bl),e(G,ca),e(ca,Ul),e(ca,pa),e(pa,Rl),e(ca,Hl),e(G,Kl),$(so,G,null),e(G,Jl),e(G,Be),$(ha,Be,null),e(Be,Gl),e(Be,zt),e(zt,Xl),e(zt,is),e(is,Zl),e(zt,Ql),e(zt,on),e(on,Yl),e(zt,ed),e(Be,td),$(no,Be,null),e(Be,od),$(ro,Be,null),_(o,ar,g),_(o,Nt,g),e(Nt,io),e(io,an),$(ma,an,null),e(Nt,ad),e(Nt,sn),e(sn,sd),_(o,sr,g),_(o,X,g),$(fa,X,null),e(X,nd),e(X,nn),e(nn,rd),e(X,id),e(X,ua),e(ua,ld),e(ua,ls),e(ls,dd),e(ua,cd),e(X,pd),e(X,ga),e(ga,hd),e(ga,_a),e(_a,md),e(ga,fd),e(X,ud),$(lo,X,null),e(X,gd),e(X,Ue),$(va,Ue,null),e(Ue,_d),e(Ue,Lt),e(Lt,vd),e(Lt,ds),e(ds,Td),e(Lt,bd),e(Lt,rn),e(rn,wd),e(Lt,yd),e(Ue,$d),$(co,Ue,null),e(Ue,xd),$(po,Ue,null),_(o,nr,g),_(o,Dt,g),e(Dt,ho),e(ho,ln),$(Ta,ln,null),e(Dt,Ed),e(Dt,dn),e(dn,kd),_(o,rr,g),_(o,K,g),$(ba,K,null),e(K,Fd),e(K,cn),e(cn,Vd),e(K,Id),e(K,wa),e(wa,Md),e(wa,cs),e(cs,jd),e(wa,Cd),e(K,Pd),e(K,ya),e(ya,Ad),e(ya,$a),e($a,qd),e(ya,zd),e(K,Nd),e(K,pn),e(pn,Ld),e(K,Dd),e(K,lt),e(lt,hn),e(hn,xa),e(xa,Od),e(lt,Sd),e(lt,mn),e(mn,Ea),e(Ea,Wd),e(lt,Bd),e(lt,fn),e(fn,ka),e(ka,Ud),e(lt,Rd),e(lt,un),e(un,Fa),e(Fa,Hd),e(K,Kd),e(K,Re),$(Va,Re,null),e(Re,Jd),e(Re,Ot),e(Ot,Gd),e(Ot,gn),e(gn,Xd),e(Ot,Zd),e(Ot,_n),e(_n,Qd),e(Ot,Yd),e(Re,ec),$(mo,Re,null),e(Re,tc),$(fo,Re,null),_(o,ir,g),_(o,St,g),e(St,uo),e(uo,vn),$(Ia,vn,null),e(St,oc),e(St,Tn),e(Tn,ac),_(o,lr,g),_(o,J,g),$(Ma,J,null),e(J,sc),e(J,bn),e(bn,nc),e(J,rc),e(J,ja),e(ja,ic),e(ja,ps),e(ps,lc),e(ja,dc),e(J,cc),e(J,Ca),e(Ca,pc),e(Ca,Pa),e(Pa,hc),e(Ca,mc),e(J,fc),e(J,wn),e(wn,uc),e(J,gc),e(J,dt),e(dt,yn),e(yn,Aa),e(Aa,_c),e(dt,vc),e(dt,$n),e($n,qa),e(qa,Tc),e(dt,bc),e(dt,xn),e(xn,za),e(za,wc),e(dt,yc),e(dt,En),e(En,Na),e(Na,$c),e(J,xc),e(J,He),$(La,He,null),e(He,Ec),e(He,Wt),e(Wt,kc),e(Wt,kn),e(kn,Fc),e(Wt,Vc),e(Wt,Fn),e(Fn,Ic),e(Wt,Mc),e(He,jc),$(go,He,null),e(He,Cc),$(_o,He,null),dr=!0},p(o,[g]){const Da={};g&2&&(Da.$$scope={dirty:g,ctx:o}),L.$set(Da);const Vn={};g&2&&(Vn.$$scope={dirty:g,ctx:o}),Rt.$set(Vn);const In={};g&2&&(In.$$scope={dirty:g,ctx:o}),Kt.$set(In);const Mn={};g&2&&(Mn.$$scope={dirty:g,ctx:o}),Gt.$set(Mn);const Oa={};g&2&&(Oa.$$scope={dirty:g,ctx:o}),Xt.$set(Oa);const jn={};g&2&&(jn.$$scope={dirty:g,ctx:o}),Qt.$set(jn);const Cn={};g&2&&(Cn.$$scope={dirty:g,ctx:o}),Yt.$set(Cn);const Pn={};g&2&&(Pn.$$scope={dirty:g,ctx:o}),to.$set(Pn);const Sa={};g&2&&(Sa.$$scope={dirty:g,ctx:o}),oo.$set(Sa);const An={};g&2&&(An.$$scope={dirty:g,ctx:o}),so.$set(An);const qn={};g&2&&(qn.$$scope={dirty:g,ctx:o}),no.$set(qn);const zn={};g&2&&(zn.$$scope={dirty:g,ctx:o}),ro.$set(zn);const Nn={};g&2&&(Nn.$$scope={dirty:g,ctx:o}),lo.$set(Nn);const Ln={};g&2&&(Ln.$$scope={dirty:g,ctx:o}),co.$set(Ln);const Z={};g&2&&(Z.$$scope={dirty:g,ctx:o}),po.$set(Z);const Wa={};g&2&&(Wa.$$scope={dirty:g,ctx:o}),mo.$set(Wa);const Dn={};g&2&&(Dn.$$scope={dirty:g,ctx:o}),fo.$set(Dn);const On={};g&2&&(On.$$scope={dirty:g,ctx:o}),go.$set(On);const Ba={};g&2&&(Ba.$$scope={dirty:g,ctx:o}),_o.$set(Ba)},i(o){dr||(x(l.$$.fragment,o),x(L.$$.fragment,o),x(W.$$.fragment,o),x(Do.$$.fragment,o),x(Oo.$$.fragment,o),x(Rt.$$.fragment,o),x(Wo.$$.fragment,o),x(Bo.$$.fragment,o),x(Ro.$$.fragment,o),x(Kt.$$.fragment,o),x(Ho.$$.fragment,o),x(Ko.$$.fragment,o),x(Xo.$$.fragment,o),x(Gt.$$.fragment,o),x(Xt.$$.fragment,o),x(Zo.$$.fragment,o),x(Qo.$$.fragment,o),x(ta.$$.fragment,o),x(Qt.$$.fragment,o),x(Yt.$$.fragment,o),x(oa.$$.fragment,o),x(aa.$$.fragment,o),x(ra.$$.fragment,o),x(to.$$.fragment,o),x(oo.$$.fragment,o),x(ia.$$.fragment,o),x(la.$$.fragment,o),x(so.$$.fragment,o),x(ha.$$.fragment,o),x(no.$$.fragment,o),x(ro.$$.fragment,o),x(ma.$$.fragment,o),x(fa.$$.fragment,o),x(lo.$$.fragment,o),x(va.$$.fragment,o),x(co.$$.fragment,o),x(po.$$.fragment,o),x(Ta.$$.fragment,o),x(ba.$$.fragment,o),x(Va.$$.fragment,o),x(mo.$$.fragment,o),x(fo.$$.fragment,o),x(Ia.$$.fragment,o),x(Ma.$$.fragment,o),x(La.$$.fragment,o),x(go.$$.fragment,o),x(_o.$$.fragment,o),dr=!0)},o(o){E(l.$$.fragment,o),E(L.$$.fragment,o),E(W.$$.fragment,o),E(Do.$$.fragment,o),E(Oo.$$.fragment,o),E(Rt.$$.fragment,o),E(Wo.$$.fragment,o),E(Bo.$$.fragment,o),E(Ro.$$.fragment,o),E(Kt.$$.fragment,o),E(Ho.$$.fragment,o),E(Ko.$$.fragment,o),E(Xo.$$.fragment,o),E(Gt.$$.fragment,o),E(Xt.$$.fragment,o),E(Zo.$$.fragment,o),E(Qo.$$.fragment,o),E(ta.$$.fragment,o),E(Qt.$$.fragment,o),E(Yt.$$.fragment,o),E(oa.$$.fragment,o),E(aa.$$.fragment,o),E(ra.$$.fragment,o),E(to.$$.fragment,o),E(oo.$$.fragment,o),E(ia.$$.fragment,o),E(la.$$.fragment,o),E(so.$$.fragment,o),E(ha.$$.fragment,o),E(no.$$.fragment,o),E(ro.$$.fragment,o),E(ma.$$.fragment,o),E(fa.$$.fragment,o),E(lo.$$.fragment,o),E(va.$$.fragment,o),E(co.$$.fragment,o),E(po.$$.fragment,o),E(Ta.$$.fragment,o),E(ba.$$.fragment,o),E(Va.$$.fragment,o),E(mo.$$.fragment,o),E(fo.$$.fragment,o),E(Ia.$$.fragment,o),E(Ma.$$.fragment,o),E(La.$$.fragment,o),E(go.$$.fragment,o),E(_o.$$.fragment,o),dr=!1},d(o){t(d),o&&t(T),o&&t(f),k(l),o&&t(Pe),k(L,o),o&&t(Ae),o&&t(S),k(W),o&&t(qe),o&&t(ee),o&&t(ze),o&&t(_e),o&&t(Ne),o&&t(ve),o&&t(q),o&&t(Te),o&&t(Le),o&&t(C),o&&t(Sn),o&&t(Ua),o&&t(Wn),o&&t(De),o&&t(Bn),o&&t(ht),o&&t(Un),o&&t(Bt),o&&t(Rn),o&&t(xt),k(Do),o&&t(Hn),o&&t(Me),k(Oo),k(Rt),o&&t(Kn),o&&t(Ft),k(Wo),o&&t(Jn),o&&t(je),k(Bo),k(Ro),k(Kt),o&&t(Gn),o&&t(Vt),k(Ho),o&&t(Xn),o&&t(rt),k(Ko),k(Xo),k(Gt),k(Xt),o&&t(Zn),o&&t(Mt),k(Zo),o&&t(Qn),o&&t(it),k(Qo),k(ta),k(Qt),k(Yt),o&&t(Yn),o&&t(Pt),k(oa),o&&t(er),o&&t(Ce),k(aa),k(ra),k(to),k(oo),o&&t(tr),o&&t(qt),k(ia),o&&t(or),o&&t(G),k(la),k(so),k(ha),k(no),k(ro),o&&t(ar),o&&t(Nt),k(ma),o&&t(sr),o&&t(X),k(fa),k(lo),k(va),k(co),k(po),o&&t(nr),o&&t(Dt),k(Ta),o&&t(rr),o&&t(K),k(ba),k(Va),k(mo),k(fo),o&&t(ir),o&&t(St),k(Ia),o&&t(lr),o&&t(J),k(Ma),k(La),k(go),k(_o)}}}const lm={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function dm(I){return Sh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gm extends Nh{constructor(d){super();Lh(this,d,dm,im,Dh,{})}}export{gm as default,lm as metadata};
