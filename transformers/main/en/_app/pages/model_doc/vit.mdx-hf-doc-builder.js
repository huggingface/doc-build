import{S as Rh,i as Kh,s as Hh,e as n,k as h,w,t as a,M as Jh,c as r,d as t,m,a as i,x as y,h as s,b as c,N as Gh,G as e,g as _,y as $,q as x,o as k,B as E,v as Xh,L as Po}from"../../chunks/vendor-hf-doc-builder.js";import{T as Be}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ao}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ct}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Co}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Qh(F){let d,T,f,u,v;return u=new Ao({props:{code:`from transformers import ViTConfig, ViTModel

# Initializing a ViT vit-base-patch16-224 style configuration
configuration = ViTConfig()

# Initializing a model (with random weights) from the vit-base-patch16-224 style configuration
model = ViTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViTConfig, ViTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the vit-base-patch16-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:Po,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){k(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),E(u,l)}}}function Zh(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function Yh(F){let d,T,f,u,v;return u=new Ao({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:Po,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){k(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),E(u,l)}}}function em(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Note that we provide a script to pre-train this model on custom data in our "),f=n("a"),u=a(`examples
directory`),v=a("."),this.h()},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Note that we provide a script to pre-train this model on custom data in our "),f=r(p,"A",{href:!0,rel:!0});var V=i(f);u=s(V,`examples
directory`),V.forEach(t),v=s(p,"."),p.forEach(t),this.h()},h(){c(f,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),c(f,"rel","nofollow")},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function tm(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function om(F){let d,T,f,u,v;return u=new Ao({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=n("p"),T=a("Examples:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Examples:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:Po,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){k(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),E(u,l)}}}function am(F){let d,T,f,u,v,l,p,V;return{c(){d=n("p"),T=a(`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=n("code"),u=a("interpolate_pos_encoding"),v=a(" to "),l=n("code"),p=a("True"),V=a(` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`)},l(N){d=r(N,"P",{});var C=i(d);T=s(C,`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=r(C,"CODE",{});var q=i(f);u=s(q,"interpolate_pos_encoding"),q.forEach(t),v=s(C," to "),l=r(C,"CODE",{});var D=i(l);p=s(D,"True"),D.forEach(t),V=s(C,` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`),C.forEach(t)},m(N,C){_(N,d,C),e(d,T),e(d,f),e(f,u),e(d,v),e(d,l),e(l,p),e(d,V)},d(N){N&&t(d)}}}function sm(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function nm(F){let d,T,f,u,v;return u=new Ao({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
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
Egyptian cat`}}),{c(){d=n("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:Po,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){k(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),E(u,l)}}}function rm(F){let d,T,f,u,v,l,p,V,N,C,q,D,ne,M,Ue,Z,Re,Ie,U,Ke,re,ie,He,je,X,Je,Ce,Q,ke,Ge,ve,A,O,Pe,P,le,Xe,K,Qe,Ze,L,Ee,de,Ye,ce,pe,Te,et,Y,tt,S,ot,he,W,at,z,st,nt;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=h(),p=n("ul"),V=n("li"),N=a("having all inputs as keyword arguments (like PyTorch models), or"),C=h(),q=n("li"),D=a("having all inputs as a list, tuple or dict in the first positional argument."),ne=h(),M=n("p"),Ue=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=n("code"),Re=a("model.fit()"),Ie=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=n("code"),Ke=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),He=a("fit()"),je=a(" and "),X=n("code"),Je=a("predict()"),Ce=a(`, such as when creating your own layers or models with
the Keras `),Q=n("code"),ke=a("Functional"),Ge=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=h(),A=n("ul"),O=n("li"),Pe=a("a single Tensor with "),P=n("code"),le=a("pixel_values"),Xe=a(" only and nothing else: "),K=n("code"),Qe=a("model(pixel_values)"),Ze=h(),L=n("li"),Ee=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),Ye=a("model([pixel_values, attention_mask])"),ce=a(" or "),pe=n("code"),Te=a("model([pixel_values, attention_mask, token_type_ids])"),et=h(),Y=n("li"),tt=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),ot=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),he=h(),W=n("p"),at=a(`Note that when creating models and layers with
`),z=n("a"),st=a("subclassing"),nt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var I=i(d);T=s(I,"TensorFlow models and layers in "),f=r(I,"CODE",{});var ft=i(f);u=s(ft,"transformers"),ft.forEach(t),v=s(I," accept two formats as input:"),I.forEach(t),l=m(b),p=r(b,"UL",{});var ee=i(p);V=r(ee,"LI",{});var ut=i(V);N=s(ut,"having all inputs as keyword arguments (like PyTorch models), or"),ut.forEach(t),C=m(ee),q=r(ee,"LI",{});var gt=i(q);D=s(gt,"having all inputs as a list, tuple or dict in the first positional argument."),gt.forEach(t),ee.forEach(t),ne=m(b),M=r(b,"P",{});var j=i(M);Ue=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=r(j,"CODE",{});var _t=i(Z);Re=s(_t,"model.fit()"),_t.forEach(t),Ie=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var vt=i(U);Ke=s(vt,"model.fit()"),vt.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=r(j,"CODE",{});var Tt=i(ie);He=s(Tt,"fit()"),Tt.forEach(t),je=s(j," and "),X=r(j,"CODE",{});var me=i(X);Je=s(me,"predict()"),me.forEach(t),Ce=s(j,`, such as when creating your own layers or models with
the Keras `),Q=r(j,"CODE",{});var bt=i(Q);ke=s(bt,"Functional"),bt.forEach(t),Ge=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ve=m(b),A=r(b,"UL",{});var B=i(A);O=r(B,"LI",{});var fe=i(O);Pe=s(fe,"a single Tensor with "),P=r(fe,"CODE",{});var wt=i(P);le=s(wt,"pixel_values"),wt.forEach(t),Xe=s(fe," only and nothing else: "),K=r(fe,"CODE",{});var Ve=i(K);Qe=s(Ve,"model(pixel_values)"),Ve.forEach(t),fe.forEach(t),Ze=m(B),L=r(B,"LI",{});var ue=i(L);Ee=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var yt=i(de);Ye=s(yt,"model([pixel_values, attention_mask])"),yt.forEach(t),ce=s(ue," or "),pe=r(ue,"CODE",{});var $t=i(pe);Te=s($t,"model([pixel_values, attention_mask, token_type_ids])"),$t.forEach(t),ue.forEach(t),et=m(B),Y=r(B,"LI",{});var Fe=i(Y);tt=s(Fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Fe,"CODE",{});var xt=i(S);ot=s(xt,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),xt.forEach(t),Fe.forEach(t),B.forEach(t),he=m(b),W=r(b,"P",{});var be=i(W);at=s(be,`Note that when creating models and layers with
`),z=r(be,"A",{href:!0,rel:!0});var we=i(z);st=s(we,"subclassing"),we.forEach(t),nt=s(be,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),be.forEach(t),this.h()},h(){c(z,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(z,"rel","nofollow")},m(b,I){_(b,d,I),e(d,T),e(d,f),e(f,u),e(d,v),_(b,l,I),_(b,p,I),e(p,V),e(V,N),e(p,C),e(p,q),e(q,D),_(b,ne,I),_(b,M,I),e(M,Ue),e(M,Z),e(Z,Re),e(M,Ie),e(M,U),e(U,Ke),e(M,re),e(M,ie),e(ie,He),e(M,je),e(M,X),e(X,Je),e(M,Ce),e(M,Q),e(Q,ke),e(M,Ge),_(b,ve,I),_(b,A,I),e(A,O),e(O,Pe),e(O,P),e(P,le),e(O,Xe),e(O,K),e(K,Qe),e(A,Ze),e(A,L),e(L,Ee),e(L,de),e(de,Ye),e(L,ce),e(L,pe),e(pe,Te),e(A,et),e(A,Y),e(Y,tt),e(Y,S),e(S,ot),_(b,he,I),_(b,W,I),e(W,at),e(W,z),e(z,st),e(W,nt)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(ne),b&&t(M),b&&t(ve),b&&t(A),b&&t(he),b&&t(W)}}}function im(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function lm(F){let d,T,f,u,v;return u=new Ao({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:Po,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){k(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),E(u,l)}}}function dm(F){let d,T,f,u,v,l,p,V;return{c(){d=n("p"),T=a(`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=n("code"),u=a("interpolate_pos_encoding"),v=a(" to "),l=n("code"),p=a("True"),V=a(` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`)},l(N){d=r(N,"P",{});var C=i(d);T=s(C,`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),f=r(C,"CODE",{});var q=i(f);u=s(q,"interpolate_pos_encoding"),q.forEach(t),v=s(C," to "),l=r(C,"CODE",{});var D=i(l);p=s(D,"True"),D.forEach(t),V=s(C,` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`),C.forEach(t)},m(N,C){_(N,d,C),e(d,T),e(d,f),e(f,u),e(d,v),e(d,l),e(l,p),e(d,V)},d(N){N&&t(d)}}}function cm(F){let d,T,f,u,v,l,p,V,N,C,q,D,ne,M,Ue,Z,Re,Ie,U,Ke,re,ie,He,je,X,Je,Ce,Q,ke,Ge,ve,A,O,Pe,P,le,Xe,K,Qe,Ze,L,Ee,de,Ye,ce,pe,Te,et,Y,tt,S,ot,he,W,at,z,st,nt;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),f=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=h(),p=n("ul"),V=n("li"),N=a("having all inputs as keyword arguments (like PyTorch models), or"),C=h(),q=n("li"),D=a("having all inputs as a list, tuple or dict in the first positional argument."),ne=h(),M=n("p"),Ue=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=n("code"),Re=a("model.fit()"),Ie=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=n("code"),Ke=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),He=a("fit()"),je=a(" and "),X=n("code"),Je=a("predict()"),Ce=a(`, such as when creating your own layers or models with
the Keras `),Q=n("code"),ke=a("Functional"),Ge=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=h(),A=n("ul"),O=n("li"),Pe=a("a single Tensor with "),P=n("code"),le=a("pixel_values"),Xe=a(" only and nothing else: "),K=n("code"),Qe=a("model(pixel_values)"),Ze=h(),L=n("li"),Ee=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),Ye=a("model([pixel_values, attention_mask])"),ce=a(" or "),pe=n("code"),Te=a("model([pixel_values, attention_mask, token_type_ids])"),et=h(),Y=n("li"),tt=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),ot=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),he=h(),W=n("p"),at=a(`Note that when creating models and layers with
`),z=n("a"),st=a("subclassing"),nt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var I=i(d);T=s(I,"TensorFlow models and layers in "),f=r(I,"CODE",{});var ft=i(f);u=s(ft,"transformers"),ft.forEach(t),v=s(I," accept two formats as input:"),I.forEach(t),l=m(b),p=r(b,"UL",{});var ee=i(p);V=r(ee,"LI",{});var ut=i(V);N=s(ut,"having all inputs as keyword arguments (like PyTorch models), or"),ut.forEach(t),C=m(ee),q=r(ee,"LI",{});var gt=i(q);D=s(gt,"having all inputs as a list, tuple or dict in the first positional argument."),gt.forEach(t),ee.forEach(t),ne=m(b),M=r(b,"P",{});var j=i(M);Ue=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=r(j,"CODE",{});var _t=i(Z);Re=s(_t,"model.fit()"),_t.forEach(t),Ie=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(j,"CODE",{});var vt=i(U);Ke=s(vt,"model.fit()"),vt.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=r(j,"CODE",{});var Tt=i(ie);He=s(Tt,"fit()"),Tt.forEach(t),je=s(j," and "),X=r(j,"CODE",{});var me=i(X);Je=s(me,"predict()"),me.forEach(t),Ce=s(j,`, such as when creating your own layers or models with
the Keras `),Q=r(j,"CODE",{});var bt=i(Q);ke=s(bt,"Functional"),bt.forEach(t),Ge=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ve=m(b),A=r(b,"UL",{});var B=i(A);O=r(B,"LI",{});var fe=i(O);Pe=s(fe,"a single Tensor with "),P=r(fe,"CODE",{});var wt=i(P);le=s(wt,"pixel_values"),wt.forEach(t),Xe=s(fe," only and nothing else: "),K=r(fe,"CODE",{});var Ve=i(K);Qe=s(Ve,"model(pixel_values)"),Ve.forEach(t),fe.forEach(t),Ze=m(B),L=r(B,"LI",{});var ue=i(L);Ee=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var yt=i(de);Ye=s(yt,"model([pixel_values, attention_mask])"),yt.forEach(t),ce=s(ue," or "),pe=r(ue,"CODE",{});var $t=i(pe);Te=s($t,"model([pixel_values, attention_mask, token_type_ids])"),$t.forEach(t),ue.forEach(t),et=m(B),Y=r(B,"LI",{});var Fe=i(Y);tt=s(Fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Fe,"CODE",{});var xt=i(S);ot=s(xt,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),xt.forEach(t),Fe.forEach(t),B.forEach(t),he=m(b),W=r(b,"P",{});var be=i(W);at=s(be,`Note that when creating models and layers with
`),z=r(be,"A",{href:!0,rel:!0});var we=i(z);st=s(we,"subclassing"),we.forEach(t),nt=s(be,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),be.forEach(t),this.h()},h(){c(z,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(z,"rel","nofollow")},m(b,I){_(b,d,I),e(d,T),e(d,f),e(f,u),e(d,v),_(b,l,I),_(b,p,I),e(p,V),e(V,N),e(p,C),e(p,q),e(q,D),_(b,ne,I),_(b,M,I),e(M,Ue),e(M,Z),e(Z,Re),e(M,Ie),e(M,U),e(U,Ke),e(M,re),e(M,ie),e(ie,He),e(M,je),e(M,X),e(X,Je),e(M,Ce),e(M,Q),e(Q,ke),e(M,Ge),_(b,ve,I),_(b,A,I),e(A,O),e(O,Pe),e(O,P),e(P,le),e(O,Xe),e(O,K),e(K,Qe),e(A,Ze),e(A,L),e(L,Ee),e(L,de),e(de,Ye),e(L,ce),e(L,pe),e(pe,Te),e(A,et),e(A,Y),e(Y,tt),e(Y,S),e(S,ot),_(b,he,I),_(b,W,I),e(W,at),e(W,z),e(z,st),e(W,nt)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(ne),b&&t(M),b&&t(ve),b&&t(A),b&&t(he),b&&t(W)}}}function pm(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function hm(F){let d,T,f,u,v;return u=new Ao({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
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
Egyptian cat`}}),{c(){d=n("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:Po,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){k(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),E(u,l)}}}function mm(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function fm(F){let d,T,f,u,v;return u=new Ao({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=a("Examples:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Examples:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:Po,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){k(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),E(u,l)}}}function um(F){let d,T,f,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(p,"CODE",{});var V=i(f);u=s(V,"Module"),V.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,f),e(f,u),e(d,v)},d(l){l&&t(d)}}}function gm(F){let d,T,f,u,v;return u=new Ao({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){d=n("p"),T=a("Example:"),f=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),f=m(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,f,p),$(u,l,p),v=!0},p:Po,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){k(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(f),E(u,l)}}}function _m(F){let d,T,f,u,v,l,p,V,N,C,q,D,ne,M,Ue,Z,Re,Ie,U,Ke,re,ie,He,je,X,Je,Ce,Q,ke,Ge,ve,A,O,Pe,P,le,Xe,K,Qe,Ze,L,Ee,de,Ye,ce,pe,Te,et,Y,tt,S,ot,he,W,at,z,st,nt,b,I,ft,ee,ut,gt,j,_t,vt,Tt,me,bt,B,fe,wt,Ve,ue,yt,$t,Fe,xt,be,we,Bc,Bn,qo,zr,Ha,Dr,Un,Ja,Or,Rn,Ae,Is,R,Ga,Lr,Sr,Xa,Wr,Br,Qa,Ur,Rr,js,Kr,Hr,Cs,Jr,Gr,Ps,Xr,Qr,As,Zr,Yr,Za,ei,ti,oi,qs,Ya,es,ai,si,ni,Ns,No,ri,zo,ii,li,di,zs,ts,os,ci,pi,Kn,pt,hi,Do,mi,fi,Oo,ui,gi,Hn,Bt,_i,Lo,vi,Ti,Jn,kt,Ut,Ds,So,bi,Os,wi,Gn,Me,Wo,yi,Et,$i,as,xi,ki,Bo,Ei,Vi,Fi,Vt,Mi,ss,Ii,ji,ns,Ci,Pi,Ai,Rt,Xn,Ft,Kt,Ls,Uo,qi,Ss,Ni,Qn,rt,Ro,zi,Ws,Di,Oi,Ht,Ko,Li,Bs,Si,Zn,Mt,Jt,Us,Ho,Wi,Rs,Bi,Yn,it,Jo,Ui,Go,Ri,Xo,Ki,Hi,Ji,qe,Qo,Gi,It,Xi,rs,Qi,Zi,Ks,Yi,el,tl,Gt,ol,Xt,er,jt,Qt,Hs,Zo,al,Js,sl,tr,ge,Yo,nl,ea,rl,ta,il,ll,dl,Zt,cl,oa,pl,aa,hl,ml,fl,Ne,sa,ul,Ct,gl,is,_l,vl,Gs,Tl,bl,wl,Yt,yl,eo,or,Pt,to,Xs,na,$l,Qs,xl,ar,_e,ra,kl,Zs,El,Vl,oo,Fl,ia,Ml,la,Il,jl,Cl,ze,da,Pl,At,Al,ls,ql,Nl,Ys,zl,Dl,Ol,ao,Ll,so,sr,qt,no,en,ca,Sl,tn,Wl,nr,te,pa,Bl,on,Ul,Rl,ha,Kl,ds,Hl,Jl,Gl,ma,Xl,fa,Ql,Zl,Yl,ro,ed,De,ua,td,Nt,od,cs,ad,sd,an,nd,rd,id,io,ld,lo,rr,zt,co,sn,ga,dd,nn,cd,ir,H,_a,pd,rn,hd,md,po,fd,va,ud,ps,gd,_d,vd,Ta,Td,ba,bd,wd,yd,ho,$d,Oe,wa,xd,Dt,kd,hs,Ed,Vd,ln,Fd,Md,Id,mo,jd,fo,lr,Ot,uo,dn,ya,Cd,cn,Pd,dr,J,$a,Ad,pn,qd,Nd,xa,zd,ms,Dd,Od,Ld,ka,Sd,Ea,Wd,Bd,Ud,hn,Rd,Kd,lt,mn,Va,Hd,Jd,fn,Fa,Gd,Xd,un,Ma,Qd,Zd,gn,Ia,Yd,ec,Le,ja,tc,Lt,oc,_n,ac,sc,vn,nc,rc,ic,go,lc,_o,cr,St,vo,Tn,Ca,dc,bn,cc,pr,G,Pa,pc,wn,hc,mc,Aa,fc,fs,uc,gc,_c,qa,vc,Na,Tc,bc,wc,yn,yc,$c,dt,$n,za,xc,kc,xn,Da,Ec,Vc,kn,Oa,Fc,Mc,En,La,Ic,jc,Se,Sa,Cc,Wt,Pc,Vn,Ac,qc,Fn,Nc,zc,Dc,To,Oc,bo,hr;return l=new ct({}),M=new ct({}),So=new ct({}),Wo=new se({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/configuration_vit.py#L35"}}),Rt=new Co({props:{anchor:"transformers.ViTConfig.example",$$slots:{default:[Qh]},$$scope:{ctx:F}}}),Uo=new ct({}),Ro=new se({props:{name:"class transformers.models.vit.image_processing_vit.ViTImageProcessor",anchor:"transformers.models.vit.image_processing_vit.ViTImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": typing.Union[typing.Dict[str, int], NoneType] = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": typing.Union[int, float] = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"image_std",val:": typing.Union[float, typing.List[float], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.models.vit.image_processing_vit.ViTImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be overridden by the <code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.models.vit.image_processing_vit.ViTImageProcessor.size",description:`<strong>size</strong> (<code>dict</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the output image after resizing. Can be overridden by the <code>size</code> parameter in the <code>preprocess</code>
method.`,name:"size"},{anchor:"transformers.models.vit.image_processing_vit.ViTImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>PILImageResampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.models.vit.image_processing_vit.ViTImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.models.vit.image_processing_vit.ViTImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter in the
<code>preprocess</code> method.
do_normalize &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"rescale_factor"},{anchor:"transformers.models.vit.image_processing_vit.ViTImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.models.vit.image_processing_vit.ViTImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/image_processing_vit.py#L41"}}),Ko=new se({props:{name:"__call__",anchor:"transformers.models.vit.image_processing_vit.ViTImageProcessor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/image_processing_utils.py#L52"}}),Ho=new ct({}),Jo=new se({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L501"}}),Qo=new se({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L526",returnDescription:`
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
`}}),Gt=new Be({props:{$$slots:{default:[Zh]},$$scope:{ctx:F}}}),Xt=new Co({props:{anchor:"transformers.ViTModel.forward.example",$$slots:{default:[Yh]},$$scope:{ctx:F}}}),Zo=new ct({}),Yo=new se({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L615"}}),Zt=new Be({props:{$$slots:{default:[em]},$$scope:{ctx:F}}}),sa=new se({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L633",returnDescription:`
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
`}}),Yt=new Be({props:{$$slots:{default:[tm]},$$scope:{ctx:F}}}),eo=new Co({props:{anchor:"transformers.ViTForMaskedImageModeling.forward.example",$$slots:{default:[om]},$$scope:{ctx:F}}}),na=new ct({}),ra=new se({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L737"}}),oo=new Be({props:{$$slots:{default:[am]},$$scope:{ctx:F}}}),da=new se({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_vit.py#L750",returnDescription:`
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
`}}),ao=new Be({props:{$$slots:{default:[sm]},$$scope:{ctx:F}}}),so=new Co({props:{anchor:"transformers.ViTForImageClassification.forward.example",$$slots:{default:[nm]},$$scope:{ctx:F}}}),ca=new ct({}),pa=new se({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L664"}}),ro=new Be({props:{$$slots:{default:[rm]},$$scope:{ctx:F}}}),ua=new se({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L670",returnDescription:`
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
`}}),io=new Be({props:{$$slots:{default:[im]},$$scope:{ctx:F}}}),lo=new Co({props:{anchor:"transformers.TFViTModel.call.example",$$slots:{default:[lm]},$$scope:{ctx:F}}}),ga=new ct({}),_a=new se({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L750"}}),po=new Be({props:{$$slots:{default:[dm]},$$scope:{ctx:F}}}),ho=new Be({props:{$$slots:{default:[cm]},$$scope:{ctx:F}}}),wa=new se({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.models.layoutlmv2.image_processing_layoutlmv2.LayoutLMv2ImageProcessor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_tf_vit.py#L764",returnDescription:`
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
`}}),mo=new Be({props:{$$slots:{default:[pm]},$$scope:{ctx:F}}}),fo=new Co({props:{anchor:"transformers.TFViTForImageClassification.call.example",$$slots:{default:[hm]},$$scope:{ctx:F}}}),ya=new ct({}),$a=new se({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L558"}}),ja=new se({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L473",returnDescription:`
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
`}}),go=new Be({props:{$$slots:{default:[mm]},$$scope:{ctx:F}}}),_o=new Co({props:{anchor:"transformers.FlaxViTModel.__call__.example",$$slots:{default:[fm]},$$scope:{ctx:F}}}),Ca=new ct({}),Pa=new se({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L641"}}),Sa=new se({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/vit/modeling_flax_vit.py#L473",returnDescription:`
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
`}}),To=new Be({props:{$$slots:{default:[um]},$$scope:{ctx:F}}}),bo=new Co({props:{anchor:"transformers.FlaxViTForImageClassification.__call__.example",$$slots:{default:[gm]},$$scope:{ctx:F}}}),{c(){d=n("meta"),T=h(),f=n("h1"),u=n("a"),v=n("span"),w(l.$$.fragment),p=h(),V=n("span"),N=a("Vision Transformer (ViT)"),C=h(),q=n("h2"),D=n("a"),ne=n("span"),w(M.$$.fragment),Ue=h(),Z=n("span"),Re=a("Overview"),Ie=h(),U=n("p"),Ke=a("The Vision Transformer (ViT) model was proposed in "),re=n("a"),ie=a(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),He=a(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),je=h(),X=n("p"),Je=a("The abstract from the paper is the following:"),Ce=h(),Q=n("p"),ke=n("em"),Ge=a(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),ve=h(),A=n("p"),O=a("Tips:"),Pe=h(),P=n("ul"),le=n("li"),Xe=a("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),K=n("a"),Qe=a("here"),Ze=a("."),L=h(),Ee=n("li"),de=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),Ye=h(),ce=n("li"),pe=a(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Te=n("a"),et=a("ViTFeatureExtractor"),Y=a(" to resize (or rescale) and normalize images for the model."),tt=h(),S=n("li"),ot=a(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),he=n("code"),W=a("google/vit-base-patch16-224"),at=a(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),z=n("a"),st=a("hub"),nt=a("."),b=h(),I=n("li"),ft=a("The available checkpoints are either (1) pre-trained on "),ee=n("a"),ut=a("ImageNet-21k"),gt=a(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),j=n("a"),_t=a("ImageNet"),vt=a(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),Tt=h(),me=n("li"),bt=a(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),B=n("a"),fe=a("(Touvron et al., 2019)"),wt=a(", "),Ve=n("a"),ue=a(`(Kolesnikov
et al., 2020)`),yt=a(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),$t=h(),Fe=n("li"),xt=a(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),be=h(),we=n("img"),Bn=h(),qo=n("small"),zr=a("ViT architecture. Taken from the "),Ha=n("a"),Dr=a("original paper."),Un=h(),Ja=n("p"),Or=a("Following the original Vision Transformer, some follow-up works have been made:"),Rn=h(),Ae=n("ul"),Is=n("li"),R=n("p"),Ga=n("a"),Lr=a("DeiT"),Sr=a(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Xa=n("a"),Wr=a("ViTModel"),Br=a(` or
`),Qa=n("a"),Ur=a("ViTForImageClassification"),Rr=a(". There are 4 variants available (in 3 different sizes): "),js=n("em"),Kr=a("facebook/deit-tiny-patch16-224"),Hr=a(`,
`),Cs=n("em"),Jr=a("facebook/deit-small-patch16-224"),Gr=a(", "),Ps=n("em"),Xr=a("facebook/deit-base-patch16-224"),Qr=a(" and "),As=n("em"),Zr=a("facebook/deit-base-patch16-384"),Yr=a(`. Note that one should
use `),Za=n("a"),ei=a("DeiTFeatureExtractor"),ti=a(" in order to prepare images for the model."),oi=h(),qs=n("li"),Ya=n("p"),es=n("a"),ai=a("BEiT"),si=a(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),ni=h(),Ns=n("li"),No=n("p"),ri=a(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),zo=n("a"),ii=a("hub"),li=a("."),di=h(),zs=n("li"),ts=n("p"),os=n("a"),ci=a("MAE"),pi=a(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Kn=h(),pt=n("p"),hi=a("This model was contributed by "),Do=n("a"),mi=a("nielsr"),fi=a(`. The original code (written in JAX) can be
found `),Oo=n("a"),ui=a("here"),gi=a("."),Hn=h(),Bt=n("p"),_i=a("Note that we converted the weights from Ross Wightman\u2019s "),Lo=n("a"),vi=a("timm library"),Ti=a(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Jn=h(),kt=n("h2"),Ut=n("a"),Ds=n("span"),w(So.$$.fragment),bi=h(),Os=n("span"),wi=a("ViTConfig"),Gn=h(),Me=n("div"),w(Wo.$$.fragment),yi=h(),Et=n("p"),$i=a("This is the configuration class to store the configuration of a "),as=n("a"),xi=a("ViTModel"),ki=a(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Bo=n("a"),Ei=a("google/vit-base-patch16-224"),Vi=a(" architecture."),Fi=h(),Vt=n("p"),Mi=a("Configuration objects inherit from "),ss=n("a"),Ii=a("PretrainedConfig"),ji=a(` and can be used to control the model outputs. Read the
documentation from `),ns=n("a"),Ci=a("PretrainedConfig"),Pi=a(" for more information."),Ai=h(),w(Rt.$$.fragment),Xn=h(),Ft=n("h2"),Kt=n("a"),Ls=n("span"),w(Uo.$$.fragment),qi=h(),Ss=n("span"),Ni=a("ViTFeatureExtractor"),Qn=h(),rt=n("div"),w(Ro.$$.fragment),zi=h(),Ws=n("p"),Di=a("Constructs a ViT image processor."),Oi=h(),Ht=n("div"),w(Ko.$$.fragment),Li=h(),Bs=n("p"),Si=a("Preprocess an image or a batch of images."),Zn=h(),Mt=n("h2"),Jt=n("a"),Us=n("span"),w(Ho.$$.fragment),Wi=h(),Rs=n("span"),Bi=a("ViTModel"),Yn=h(),it=n("div"),w(Jo.$$.fragment),Ui=h(),Go=n("p"),Ri=a(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xo=n("a"),Ki=a("torch.nn.Module"),Hi=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ji=h(),qe=n("div"),w(Qo.$$.fragment),Gi=h(),It=n("p"),Xi=a("The "),rs=n("a"),Qi=a("ViTModel"),Zi=a(" forward method, overrides the "),Ks=n("code"),Yi=a("__call__"),el=a(" special method."),tl=h(),w(Gt.$$.fragment),ol=h(),w(Xt.$$.fragment),er=h(),jt=n("h2"),Qt=n("a"),Hs=n("span"),w(Zo.$$.fragment),al=h(),Js=n("span"),sl=a("ViTForMaskedImageModeling"),tr=h(),ge=n("div"),w(Yo.$$.fragment),nl=h(),ea=n("p"),rl=a("ViT Model with a decoder on top for masked image modeling, as proposed in "),ta=n("a"),il=a("SimMIM"),ll=a("."),dl=h(),w(Zt.$$.fragment),cl=h(),oa=n("p"),pl=a("This model is a PyTorch "),aa=n("a"),hl=a("torch.nn.Module"),ml=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fl=h(),Ne=n("div"),w(sa.$$.fragment),ul=h(),Ct=n("p"),gl=a("The "),is=n("a"),_l=a("ViTForMaskedImageModeling"),vl=a(" forward method, overrides the "),Gs=n("code"),Tl=a("__call__"),bl=a(" special method."),wl=h(),w(Yt.$$.fragment),yl=h(),w(eo.$$.fragment),or=h(),Pt=n("h2"),to=n("a"),Xs=n("span"),w(na.$$.fragment),$l=h(),Qs=n("span"),xl=a("ViTForImageClassification"),ar=h(),_e=n("div"),w(ra.$$.fragment),kl=h(),Zs=n("p"),El=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Vl=h(),w(oo.$$.fragment),Fl=h(),ia=n("p"),Ml=a("This model is a PyTorch "),la=n("a"),Il=a("torch.nn.Module"),jl=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=h(),ze=n("div"),w(da.$$.fragment),Pl=h(),At=n("p"),Al=a("The "),ls=n("a"),ql=a("ViTForImageClassification"),Nl=a(" forward method, overrides the "),Ys=n("code"),zl=a("__call__"),Dl=a(" special method."),Ol=h(),w(ao.$$.fragment),Ll=h(),w(so.$$.fragment),sr=h(),qt=n("h2"),no=n("a"),en=n("span"),w(ca.$$.fragment),Sl=h(),tn=n("span"),Wl=a("TFViTModel"),nr=h(),te=n("div"),w(pa.$$.fragment),Bl=h(),on=n("p"),Ul=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Rl=h(),ha=n("p"),Kl=a("This model inherits from "),ds=n("a"),Hl=a("TFPreTrainedModel"),Jl=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gl=h(),ma=n("p"),Xl=a("This model is also a "),fa=n("a"),Ql=a("tf.keras.Model"),Zl=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yl=h(),w(ro.$$.fragment),ed=h(),De=n("div"),w(ua.$$.fragment),td=h(),Nt=n("p"),od=a("The "),cs=n("a"),ad=a("TFViTModel"),sd=a(" forward method, overrides the "),an=n("code"),nd=a("__call__"),rd=a(" special method."),id=h(),w(io.$$.fragment),ld=h(),w(lo.$$.fragment),rr=h(),zt=n("h2"),co=n("a"),sn=n("span"),w(ga.$$.fragment),dd=h(),nn=n("span"),cd=a("TFViTForImageClassification"),ir=h(),H=n("div"),w(_a.$$.fragment),pd=h(),rn=n("p"),hd=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),md=h(),w(po.$$.fragment),fd=h(),va=n("p"),ud=a("This model inherits from "),ps=n("a"),gd=a("TFPreTrainedModel"),_d=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd=h(),Ta=n("p"),Td=a("This model is also a "),ba=n("a"),bd=a("tf.keras.Model"),wd=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yd=h(),w(ho.$$.fragment),$d=h(),Oe=n("div"),w(wa.$$.fragment),xd=h(),Dt=n("p"),kd=a("The "),hs=n("a"),Ed=a("TFViTForImageClassification"),Vd=a(" forward method, overrides the "),ln=n("code"),Fd=a("__call__"),Md=a(" special method."),Id=h(),w(mo.$$.fragment),jd=h(),w(fo.$$.fragment),lr=h(),Ot=n("h2"),uo=n("a"),dn=n("span"),w(ya.$$.fragment),Cd=h(),cn=n("span"),Pd=a("FlaxVitModel"),dr=h(),J=n("div"),w($a.$$.fragment),Ad=h(),pn=n("p"),qd=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Nd=h(),xa=n("p"),zd=a("This model inherits from "),ms=n("a"),Dd=a("FlaxPreTrainedModel"),Od=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ld=h(),ka=n("p"),Sd=a("This model is also a Flax Linen "),Ea=n("a"),Wd=a("flax.linen.Module"),Bd=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ud=h(),hn=n("p"),Rd=a("Finally, this model supports inherent JAX features such as:"),Kd=h(),lt=n("ul"),mn=n("li"),Va=n("a"),Hd=a("Just-In-Time (JIT) compilation"),Jd=h(),fn=n("li"),Fa=n("a"),Gd=a("Automatic Differentiation"),Xd=h(),un=n("li"),Ma=n("a"),Qd=a("Vectorization"),Zd=h(),gn=n("li"),Ia=n("a"),Yd=a("Parallelization"),ec=h(),Le=n("div"),w(ja.$$.fragment),tc=h(),Lt=n("p"),oc=a("The "),_n=n("code"),ac=a("FlaxViTPreTrainedModel"),sc=a(" forward method, overrides the "),vn=n("code"),nc=a("__call__"),rc=a(" special method."),ic=h(),w(go.$$.fragment),lc=h(),w(_o.$$.fragment),cr=h(),St=n("h2"),vo=n("a"),Tn=n("span"),w(Ca.$$.fragment),dc=h(),bn=n("span"),cc=a("FlaxViTForImageClassification"),pr=h(),G=n("div"),w(Pa.$$.fragment),pc=h(),wn=n("p"),hc=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),mc=h(),Aa=n("p"),fc=a("This model inherits from "),fs=n("a"),uc=a("FlaxPreTrainedModel"),gc=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_c=h(),qa=n("p"),vc=a("This model is also a Flax Linen "),Na=n("a"),Tc=a("flax.linen.Module"),bc=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wc=h(),yn=n("p"),yc=a("Finally, this model supports inherent JAX features such as:"),$c=h(),dt=n("ul"),$n=n("li"),za=n("a"),xc=a("Just-In-Time (JIT) compilation"),kc=h(),xn=n("li"),Da=n("a"),Ec=a("Automatic Differentiation"),Vc=h(),kn=n("li"),Oa=n("a"),Fc=a("Vectorization"),Mc=h(),En=n("li"),La=n("a"),Ic=a("Parallelization"),jc=h(),Se=n("div"),w(Sa.$$.fragment),Cc=h(),Wt=n("p"),Pc=a("The "),Vn=n("code"),Ac=a("FlaxViTPreTrainedModel"),qc=a(" forward method, overrides the "),Fn=n("code"),Nc=a("__call__"),zc=a(" special method."),Dc=h(),w(To.$$.fragment),Oc=h(),w(bo.$$.fragment),this.h()},l(o){const g=Jh('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),T=m(o),f=r(o,"H1",{class:!0});var Wa=i(f);u=r(Wa,"A",{id:!0,class:!0,href:!0});var Mn=i(u);v=r(Mn,"SPAN",{});var In=i(v);y(l.$$.fragment,In),In.forEach(t),Mn.forEach(t),p=m(Wa),V=r(Wa,"SPAN",{});var jn=i(V);N=s(jn,"Vision Transformer (ViT)"),jn.forEach(t),Wa.forEach(t),C=m(o),q=r(o,"H2",{class:!0});var Ba=i(q);D=r(Ba,"A",{id:!0,class:!0,href:!0});var Cn=i(D);ne=r(Cn,"SPAN",{});var Pn=i(ne);y(M.$$.fragment,Pn),Pn.forEach(t),Cn.forEach(t),Ue=m(Ba),Z=r(Ba,"SPAN",{});var An=i(Z);Re=s(An,"Overview"),An.forEach(t),Ba.forEach(t),Ie=m(o),U=r(o,"P",{});var Ua=i(U);Ke=s(Ua,"The Vision Transformer (ViT) model was proposed in "),re=r(Ua,"A",{href:!0,rel:!0});var qn=i(re);ie=s(qn,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),qn.forEach(t),He=s(Ua,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Ua.forEach(t),je=m(o),X=r(o,"P",{});var Nn=i(X);Je=s(Nn,"The abstract from the paper is the following:"),Nn.forEach(t),Ce=m(o),Q=r(o,"P",{});var zn=i(Q);ke=r(zn,"EM",{});var Dn=i(ke);Ge=s(Dn,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Dn.forEach(t),zn.forEach(t),ve=m(o),A=r(o,"P",{});var On=i(A);O=s(On,"Tips:"),On.forEach(t),Pe=m(o),P=r(o,"UL",{});var oe=i(P);le=r(oe,"LI",{});var Ra=i(le);Xe=s(Ra,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),K=r(Ra,"A",{href:!0,rel:!0});var Ln=i(K);Qe=s(Ln,"here"),Ln.forEach(t),Ze=s(Ra,"."),Ra.forEach(t),L=m(oe),Ee=r(oe,"LI",{});var Sn=i(Ee);de=s(Sn,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),Sn.forEach(t),Ye=m(oe),ce=r(oe,"LI",{});var Ka=i(ce);pe=s(Ka,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Te=r(Ka,"A",{href:!0});var Wn=i(Te);et=s(Wn,"ViTFeatureExtractor"),Wn.forEach(t),Y=s(Ka," to resize (or rescale) and normalize images for the model."),Ka.forEach(t),tt=m(oe),S=r(oe,"LI",{});var us=i(S);ot=s(us,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),he=r(us,"CODE",{});var Uc=i(he);W=s(Uc,"google/vit-base-patch16-224"),Uc.forEach(t),at=s(us,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),z=r(us,"A",{href:!0,rel:!0});var Rc=i(z);st=s(Rc,"hub"),Rc.forEach(t),nt=s(us,"."),us.forEach(t),b=m(oe),I=r(oe,"LI",{});var gs=i(I);ft=s(gs,"The available checkpoints are either (1) pre-trained on "),ee=r(gs,"A",{href:!0,rel:!0});var Kc=i(ee);ut=s(Kc,"ImageNet-21k"),Kc.forEach(t),gt=s(gs,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),j=r(gs,"A",{href:!0,rel:!0});var Hc=i(j);_t=s(Hc,"ImageNet"),Hc.forEach(t),vt=s(gs,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),gs.forEach(t),Tt=m(oe),me=r(oe,"LI",{});var _s=i(me);bt=s(_s,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),B=r(_s,"A",{href:!0,rel:!0});var Jc=i(B);fe=s(Jc,"(Touvron et al., 2019)"),Jc.forEach(t),wt=s(_s,", "),Ve=r(_s,"A",{href:!0,rel:!0});var Gc=i(Ve);ue=s(Gc,`(Kolesnikov
et al., 2020)`),Gc.forEach(t),yt=s(_s,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),_s.forEach(t),$t=m(oe),Fe=r(oe,"LI",{});var Xc=i(Fe);xt=s(Xc,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),Xc.forEach(t),oe.forEach(t),be=m(o),we=r(o,"IMG",{src:!0,alt:!0,width:!0}),Bn=m(o),qo=r(o,"SMALL",{});var Lc=i(qo);zr=s(Lc,"ViT architecture. Taken from the "),Ha=r(Lc,"A",{href:!0});var Qc=i(Ha);Dr=s(Qc,"original paper."),Qc.forEach(t),Lc.forEach(t),Un=m(o),Ja=r(o,"P",{});var Zc=i(Ja);Or=s(Zc,"Following the original Vision Transformer, some follow-up works have been made:"),Zc.forEach(t),Rn=m(o),Ae=r(o,"UL",{});var wo=i(Ae);Is=r(wo,"LI",{});var Yc=i(Is);R=r(Yc,"P",{});var ae=i(R);Ga=r(ae,"A",{href:!0});var ep=i(Ga);Lr=s(ep,"DeiT"),ep.forEach(t),Sr=s(ae,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),Xa=r(ae,"A",{href:!0});var tp=i(Xa);Wr=s(tp,"ViTModel"),tp.forEach(t),Br=s(ae,` or
`),Qa=r(ae,"A",{href:!0});var op=i(Qa);Ur=s(op,"ViTForImageClassification"),op.forEach(t),Rr=s(ae,". There are 4 variants available (in 3 different sizes): "),js=r(ae,"EM",{});var ap=i(js);Kr=s(ap,"facebook/deit-tiny-patch16-224"),ap.forEach(t),Hr=s(ae,`,
`),Cs=r(ae,"EM",{});var sp=i(Cs);Jr=s(sp,"facebook/deit-small-patch16-224"),sp.forEach(t),Gr=s(ae,", "),Ps=r(ae,"EM",{});var np=i(Ps);Xr=s(np,"facebook/deit-base-patch16-224"),np.forEach(t),Qr=s(ae," and "),As=r(ae,"EM",{});var rp=i(As);Zr=s(rp,"facebook/deit-base-patch16-384"),rp.forEach(t),Yr=s(ae,`. Note that one should
use `),Za=r(ae,"A",{href:!0});var ip=i(Za);ei=s(ip,"DeiTFeatureExtractor"),ip.forEach(t),ti=s(ae," in order to prepare images for the model."),ae.forEach(t),Yc.forEach(t),oi=m(wo),qs=r(wo,"LI",{});var lp=i(qs);Ya=r(lp,"P",{});var Sc=i(Ya);es=r(Sc,"A",{href:!0});var dp=i(es);ai=s(dp,"BEiT"),dp.forEach(t),si=s(Sc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Sc.forEach(t),lp.forEach(t),ni=m(wo),Ns=r(wo,"LI",{});var cp=i(Ns);No=r(cp,"P",{});var mr=i(No);ri=s(mr,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),zo=r(mr,"A",{href:!0,rel:!0});var pp=i(zo);ii=s(pp,"hub"),pp.forEach(t),li=s(mr,"."),mr.forEach(t),cp.forEach(t),di=m(wo),zs=r(wo,"LI",{});var hp=i(zs);ts=r(hp,"P",{});var Wc=i(ts);os=r(Wc,"A",{href:!0});var mp=i(os);ci=s(mp,"MAE"),mp.forEach(t),pi=s(Wc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Wc.forEach(t),hp.forEach(t),wo.forEach(t),Kn=m(o),pt=r(o,"P",{});var vs=i(pt);hi=s(vs,"This model was contributed by "),Do=r(vs,"A",{href:!0,rel:!0});var fp=i(Do);mi=s(fp,"nielsr"),fp.forEach(t),fi=s(vs,`. The original code (written in JAX) can be
found `),Oo=r(vs,"A",{href:!0,rel:!0});var up=i(Oo);ui=s(up,"here"),up.forEach(t),gi=s(vs,"."),vs.forEach(t),Hn=m(o),Bt=r(o,"P",{});var fr=i(Bt);_i=s(fr,"Note that we converted the weights from Ross Wightman\u2019s "),Lo=r(fr,"A",{href:!0,rel:!0});var gp=i(Lo);vi=s(gp,"timm library"),gp.forEach(t),Ti=s(fr,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),fr.forEach(t),Jn=m(o),kt=r(o,"H2",{class:!0});var ur=i(kt);Ut=r(ur,"A",{id:!0,class:!0,href:!0});var _p=i(Ut);Ds=r(_p,"SPAN",{});var vp=i(Ds);y(So.$$.fragment,vp),vp.forEach(t),_p.forEach(t),bi=m(ur),Os=r(ur,"SPAN",{});var Tp=i(Os);wi=s(Tp,"ViTConfig"),Tp.forEach(t),ur.forEach(t),Gn=m(o),Me=r(o,"DIV",{class:!0});var yo=i(Me);y(Wo.$$.fragment,yo),yi=m(yo),Et=r(yo,"P",{});var Ts=i(Et);$i=s(Ts,"This is the configuration class to store the configuration of a "),as=r(Ts,"A",{href:!0});var bp=i(as);xi=s(bp,"ViTModel"),bp.forEach(t),ki=s(Ts,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Bo=r(Ts,"A",{href:!0,rel:!0});var wp=i(Bo);Ei=s(wp,"google/vit-base-patch16-224"),wp.forEach(t),Vi=s(Ts," architecture."),Ts.forEach(t),Fi=m(yo),Vt=r(yo,"P",{});var bs=i(Vt);Mi=s(bs,"Configuration objects inherit from "),ss=r(bs,"A",{href:!0});var yp=i(ss);Ii=s(yp,"PretrainedConfig"),yp.forEach(t),ji=s(bs,` and can be used to control the model outputs. Read the
documentation from `),ns=r(bs,"A",{href:!0});var $p=i(ns);Ci=s($p,"PretrainedConfig"),$p.forEach(t),Pi=s(bs," for more information."),bs.forEach(t),Ai=m(yo),y(Rt.$$.fragment,yo),yo.forEach(t),Xn=m(o),Ft=r(o,"H2",{class:!0});var gr=i(Ft);Kt=r(gr,"A",{id:!0,class:!0,href:!0});var xp=i(Kt);Ls=r(xp,"SPAN",{});var kp=i(Ls);y(Uo.$$.fragment,kp),kp.forEach(t),xp.forEach(t),qi=m(gr),Ss=r(gr,"SPAN",{});var Ep=i(Ss);Ni=s(Ep,"ViTFeatureExtractor"),Ep.forEach(t),gr.forEach(t),Qn=m(o),rt=r(o,"DIV",{class:!0});var ws=i(rt);y(Ro.$$.fragment,ws),zi=m(ws),Ws=r(ws,"P",{});var Vp=i(Ws);Di=s(Vp,"Constructs a ViT image processor."),Vp.forEach(t),Oi=m(ws),Ht=r(ws,"DIV",{class:!0});var _r=i(Ht);y(Ko.$$.fragment,_r),Li=m(_r),Bs=r(_r,"P",{});var Fp=i(Bs);Si=s(Fp,"Preprocess an image or a batch of images."),Fp.forEach(t),_r.forEach(t),ws.forEach(t),Zn=m(o),Mt=r(o,"H2",{class:!0});var vr=i(Mt);Jt=r(vr,"A",{id:!0,class:!0,href:!0});var Mp=i(Jt);Us=r(Mp,"SPAN",{});var Ip=i(Us);y(Ho.$$.fragment,Ip),Ip.forEach(t),Mp.forEach(t),Wi=m(vr),Rs=r(vr,"SPAN",{});var jp=i(Rs);Bi=s(jp,"ViTModel"),jp.forEach(t),vr.forEach(t),Yn=m(o),it=r(o,"DIV",{class:!0});var ys=i(it);y(Jo.$$.fragment,ys),Ui=m(ys),Go=r(ys,"P",{});var Tr=i(Go);Ri=s(Tr,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Xo=r(Tr,"A",{href:!0,rel:!0});var Cp=i(Xo);Ki=s(Cp,"torch.nn.Module"),Cp.forEach(t),Hi=s(Tr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tr.forEach(t),Ji=m(ys),qe=r(ys,"DIV",{class:!0});var $o=i(qe);y(Qo.$$.fragment,$o),Gi=m($o),It=r($o,"P",{});var $s=i(It);Xi=s($s,"The "),rs=r($s,"A",{href:!0});var Pp=i(rs);Qi=s(Pp,"ViTModel"),Pp.forEach(t),Zi=s($s," forward method, overrides the "),Ks=r($s,"CODE",{});var Ap=i(Ks);Yi=s(Ap,"__call__"),Ap.forEach(t),el=s($s," special method."),$s.forEach(t),tl=m($o),y(Gt.$$.fragment,$o),ol=m($o),y(Xt.$$.fragment,$o),$o.forEach(t),ys.forEach(t),er=m(o),jt=r(o,"H2",{class:!0});var br=i(jt);Qt=r(br,"A",{id:!0,class:!0,href:!0});var qp=i(Qt);Hs=r(qp,"SPAN",{});var Np=i(Hs);y(Zo.$$.fragment,Np),Np.forEach(t),qp.forEach(t),al=m(br),Js=r(br,"SPAN",{});var zp=i(Js);sl=s(zp,"ViTForMaskedImageModeling"),zp.forEach(t),br.forEach(t),tr=m(o),ge=r(o,"DIV",{class:!0});var ht=i(ge);y(Yo.$$.fragment,ht),nl=m(ht),ea=r(ht,"P",{});var wr=i(ea);rl=s(wr,"ViT Model with a decoder on top for masked image modeling, as proposed in "),ta=r(wr,"A",{href:!0,rel:!0});var Dp=i(ta);il=s(Dp,"SimMIM"),Dp.forEach(t),ll=s(wr,"."),wr.forEach(t),dl=m(ht),y(Zt.$$.fragment,ht),cl=m(ht),oa=r(ht,"P",{});var yr=i(oa);pl=s(yr,"This model is a PyTorch "),aa=r(yr,"A",{href:!0,rel:!0});var Op=i(aa);hl=s(Op,"torch.nn.Module"),Op.forEach(t),ml=s(yr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yr.forEach(t),fl=m(ht),Ne=r(ht,"DIV",{class:!0});var xo=i(Ne);y(sa.$$.fragment,xo),ul=m(xo),Ct=r(xo,"P",{});var xs=i(Ct);gl=s(xs,"The "),is=r(xs,"A",{href:!0});var Lp=i(is);_l=s(Lp,"ViTForMaskedImageModeling"),Lp.forEach(t),vl=s(xs," forward method, overrides the "),Gs=r(xs,"CODE",{});var Sp=i(Gs);Tl=s(Sp,"__call__"),Sp.forEach(t),bl=s(xs," special method."),xs.forEach(t),wl=m(xo),y(Yt.$$.fragment,xo),yl=m(xo),y(eo.$$.fragment,xo),xo.forEach(t),ht.forEach(t),or=m(o),Pt=r(o,"H2",{class:!0});var $r=i(Pt);to=r($r,"A",{id:!0,class:!0,href:!0});var Wp=i(to);Xs=r(Wp,"SPAN",{});var Bp=i(Xs);y(na.$$.fragment,Bp),Bp.forEach(t),Wp.forEach(t),$l=m($r),Qs=r($r,"SPAN",{});var Up=i(Qs);xl=s(Up,"ViTForImageClassification"),Up.forEach(t),$r.forEach(t),ar=m(o),_e=r(o,"DIV",{class:!0});var mt=i(_e);y(ra.$$.fragment,mt),kl=m(mt),Zs=r(mt,"P",{});var Rp=i(Zs);El=s(Rp,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Rp.forEach(t),Vl=m(mt),y(oo.$$.fragment,mt),Fl=m(mt),ia=r(mt,"P",{});var xr=i(ia);Ml=s(xr,"This model is a PyTorch "),la=r(xr,"A",{href:!0,rel:!0});var Kp=i(la);Il=s(Kp,"torch.nn.Module"),Kp.forEach(t),jl=s(xr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xr.forEach(t),Cl=m(mt),ze=r(mt,"DIV",{class:!0});var ko=i(ze);y(da.$$.fragment,ko),Pl=m(ko),At=r(ko,"P",{});var ks=i(At);Al=s(ks,"The "),ls=r(ks,"A",{href:!0});var Hp=i(ls);ql=s(Hp,"ViTForImageClassification"),Hp.forEach(t),Nl=s(ks," forward method, overrides the "),Ys=r(ks,"CODE",{});var Jp=i(Ys);zl=s(Jp,"__call__"),Jp.forEach(t),Dl=s(ks," special method."),ks.forEach(t),Ol=m(ko),y(ao.$$.fragment,ko),Ll=m(ko),y(so.$$.fragment,ko),ko.forEach(t),mt.forEach(t),sr=m(o),qt=r(o,"H2",{class:!0});var kr=i(qt);no=r(kr,"A",{id:!0,class:!0,href:!0});var Gp=i(no);en=r(Gp,"SPAN",{});var Xp=i(en);y(ca.$$.fragment,Xp),Xp.forEach(t),Gp.forEach(t),Sl=m(kr),tn=r(kr,"SPAN",{});var Qp=i(tn);Wl=s(Qp,"TFViTModel"),Qp.forEach(t),kr.forEach(t),nr=m(o),te=r(o,"DIV",{class:!0});var We=i(te);y(pa.$$.fragment,We),Bl=m(We),on=r(We,"P",{});var Zp=i(on);Ul=s(Zp,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Zp.forEach(t),Rl=m(We),ha=r(We,"P",{});var Er=i(ha);Kl=s(Er,"This model inherits from "),ds=r(Er,"A",{href:!0});var Yp=i(ds);Hl=s(Yp,"TFPreTrainedModel"),Yp.forEach(t),Jl=s(Er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Er.forEach(t),Gl=m(We),ma=r(We,"P",{});var Vr=i(ma);Xl=s(Vr,"This model is also a "),fa=r(Vr,"A",{href:!0,rel:!0});var eh=i(fa);Ql=s(eh,"tf.keras.Model"),eh.forEach(t),Zl=s(Vr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vr.forEach(t),Yl=m(We),y(ro.$$.fragment,We),ed=m(We),De=r(We,"DIV",{class:!0});var Eo=i(De);y(ua.$$.fragment,Eo),td=m(Eo),Nt=r(Eo,"P",{});var Es=i(Nt);od=s(Es,"The "),cs=r(Es,"A",{href:!0});var th=i(cs);ad=s(th,"TFViTModel"),th.forEach(t),sd=s(Es," forward method, overrides the "),an=r(Es,"CODE",{});var oh=i(an);nd=s(oh,"__call__"),oh.forEach(t),rd=s(Es," special method."),Es.forEach(t),id=m(Eo),y(io.$$.fragment,Eo),ld=m(Eo),y(lo.$$.fragment,Eo),Eo.forEach(t),We.forEach(t),rr=m(o),zt=r(o,"H2",{class:!0});var Fr=i(zt);co=r(Fr,"A",{id:!0,class:!0,href:!0});var ah=i(co);sn=r(ah,"SPAN",{});var sh=i(sn);y(ga.$$.fragment,sh),sh.forEach(t),ah.forEach(t),dd=m(Fr),nn=r(Fr,"SPAN",{});var nh=i(nn);cd=s(nh,"TFViTForImageClassification"),nh.forEach(t),Fr.forEach(t),ir=m(o),H=r(o,"DIV",{class:!0});var ye=i(H);y(_a.$$.fragment,ye),pd=m(ye),rn=r(ye,"P",{});var rh=i(rn);hd=s(rh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),rh.forEach(t),md=m(ye),y(po.$$.fragment,ye),fd=m(ye),va=r(ye,"P",{});var Mr=i(va);ud=s(Mr,"This model inherits from "),ps=r(Mr,"A",{href:!0});var ih=i(ps);gd=s(ih,"TFPreTrainedModel"),ih.forEach(t),_d=s(Mr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr.forEach(t),vd=m(ye),Ta=r(ye,"P",{});var Ir=i(Ta);Td=s(Ir,"This model is also a "),ba=r(Ir,"A",{href:!0,rel:!0});var lh=i(ba);bd=s(lh,"tf.keras.Model"),lh.forEach(t),wd=s(Ir,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ir.forEach(t),yd=m(ye),y(ho.$$.fragment,ye),$d=m(ye),Oe=r(ye,"DIV",{class:!0});var Vo=i(Oe);y(wa.$$.fragment,Vo),xd=m(Vo),Dt=r(Vo,"P",{});var Vs=i(Dt);kd=s(Vs,"The "),hs=r(Vs,"A",{href:!0});var dh=i(hs);Ed=s(dh,"TFViTForImageClassification"),dh.forEach(t),Vd=s(Vs," forward method, overrides the "),ln=r(Vs,"CODE",{});var ch=i(ln);Fd=s(ch,"__call__"),ch.forEach(t),Md=s(Vs," special method."),Vs.forEach(t),Id=m(Vo),y(mo.$$.fragment,Vo),jd=m(Vo),y(fo.$$.fragment,Vo),Vo.forEach(t),ye.forEach(t),lr=m(o),Ot=r(o,"H2",{class:!0});var jr=i(Ot);uo=r(jr,"A",{id:!0,class:!0,href:!0});var ph=i(uo);dn=r(ph,"SPAN",{});var hh=i(dn);y(ya.$$.fragment,hh),hh.forEach(t),ph.forEach(t),Cd=m(jr),cn=r(jr,"SPAN",{});var mh=i(cn);Pd=s(mh,"FlaxVitModel"),mh.forEach(t),jr.forEach(t),dr=m(o),J=r(o,"DIV",{class:!0});var $e=i(J);y($a.$$.fragment,$e),Ad=m($e),pn=r($e,"P",{});var fh=i(pn);qd=s(fh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),fh.forEach(t),Nd=m($e),xa=r($e,"P",{});var Cr=i(xa);zd=s(Cr,"This model inherits from "),ms=r(Cr,"A",{href:!0});var uh=i(ms);Dd=s(uh,"FlaxPreTrainedModel"),uh.forEach(t),Od=s(Cr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cr.forEach(t),Ld=m($e),ka=r($e,"P",{});var Pr=i(ka);Sd=s(Pr,"This model is also a Flax Linen "),Ea=r(Pr,"A",{href:!0,rel:!0});var gh=i(Ea);Wd=s(gh,"flax.linen.Module"),gh.forEach(t),Bd=s(Pr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pr.forEach(t),Ud=m($e),hn=r($e,"P",{});var _h=i(hn);Rd=s(_h,"Finally, this model supports inherent JAX features such as:"),_h.forEach(t),Kd=m($e),lt=r($e,"UL",{});var Fo=i(lt);mn=r(Fo,"LI",{});var vh=i(mn);Va=r(vh,"A",{href:!0,rel:!0});var Th=i(Va);Hd=s(Th,"Just-In-Time (JIT) compilation"),Th.forEach(t),vh.forEach(t),Jd=m(Fo),fn=r(Fo,"LI",{});var bh=i(fn);Fa=r(bh,"A",{href:!0,rel:!0});var wh=i(Fa);Gd=s(wh,"Automatic Differentiation"),wh.forEach(t),bh.forEach(t),Xd=m(Fo),un=r(Fo,"LI",{});var yh=i(un);Ma=r(yh,"A",{href:!0,rel:!0});var $h=i(Ma);Qd=s($h,"Vectorization"),$h.forEach(t),yh.forEach(t),Zd=m(Fo),gn=r(Fo,"LI",{});var xh=i(gn);Ia=r(xh,"A",{href:!0,rel:!0});var kh=i(Ia);Yd=s(kh,"Parallelization"),kh.forEach(t),xh.forEach(t),Fo.forEach(t),ec=m($e),Le=r($e,"DIV",{class:!0});var Mo=i(Le);y(ja.$$.fragment,Mo),tc=m(Mo),Lt=r(Mo,"P",{});var Fs=i(Lt);oc=s(Fs,"The "),_n=r(Fs,"CODE",{});var Eh=i(_n);ac=s(Eh,"FlaxViTPreTrainedModel"),Eh.forEach(t),sc=s(Fs," forward method, overrides the "),vn=r(Fs,"CODE",{});var Vh=i(vn);nc=s(Vh,"__call__"),Vh.forEach(t),rc=s(Fs," special method."),Fs.forEach(t),ic=m(Mo),y(go.$$.fragment,Mo),lc=m(Mo),y(_o.$$.fragment,Mo),Mo.forEach(t),$e.forEach(t),cr=m(o),St=r(o,"H2",{class:!0});var Ar=i(St);vo=r(Ar,"A",{id:!0,class:!0,href:!0});var Fh=i(vo);Tn=r(Fh,"SPAN",{});var Mh=i(Tn);y(Ca.$$.fragment,Mh),Mh.forEach(t),Fh.forEach(t),dc=m(Ar),bn=r(Ar,"SPAN",{});var Ih=i(bn);cc=s(Ih,"FlaxViTForImageClassification"),Ih.forEach(t),Ar.forEach(t),pr=m(o),G=r(o,"DIV",{class:!0});var xe=i(G);y(Pa.$$.fragment,xe),pc=m(xe),wn=r(xe,"P",{});var jh=i(wn);hc=s(jh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),jh.forEach(t),mc=m(xe),Aa=r(xe,"P",{});var qr=i(Aa);fc=s(qr,"This model inherits from "),fs=r(qr,"A",{href:!0});var Ch=i(fs);uc=s(Ch,"FlaxPreTrainedModel"),Ch.forEach(t),gc=s(qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qr.forEach(t),_c=m(xe),qa=r(xe,"P",{});var Nr=i(qa);vc=s(Nr,"This model is also a Flax Linen "),Na=r(Nr,"A",{href:!0,rel:!0});var Ph=i(Na);Tc=s(Ph,"flax.linen.Module"),Ph.forEach(t),bc=s(Nr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Nr.forEach(t),wc=m(xe),yn=r(xe,"P",{});var Ah=i(yn);yc=s(Ah,"Finally, this model supports inherent JAX features such as:"),Ah.forEach(t),$c=m(xe),dt=r(xe,"UL",{});var Io=i(dt);$n=r(Io,"LI",{});var qh=i($n);za=r(qh,"A",{href:!0,rel:!0});var Nh=i(za);xc=s(Nh,"Just-In-Time (JIT) compilation"),Nh.forEach(t),qh.forEach(t),kc=m(Io),xn=r(Io,"LI",{});var zh=i(xn);Da=r(zh,"A",{href:!0,rel:!0});var Dh=i(Da);Ec=s(Dh,"Automatic Differentiation"),Dh.forEach(t),zh.forEach(t),Vc=m(Io),kn=r(Io,"LI",{});var Oh=i(kn);Oa=r(Oh,"A",{href:!0,rel:!0});var Lh=i(Oa);Fc=s(Lh,"Vectorization"),Lh.forEach(t),Oh.forEach(t),Mc=m(Io),En=r(Io,"LI",{});var Sh=i(En);La=r(Sh,"A",{href:!0,rel:!0});var Wh=i(La);Ic=s(Wh,"Parallelization"),Wh.forEach(t),Sh.forEach(t),Io.forEach(t),jc=m(xe),Se=r(xe,"DIV",{class:!0});var jo=i(Se);y(Sa.$$.fragment,jo),Cc=m(jo),Wt=r(jo,"P",{});var Ms=i(Wt);Pc=s(Ms,"The "),Vn=r(Ms,"CODE",{});var Bh=i(Vn);Ac=s(Bh,"FlaxViTPreTrainedModel"),Bh.forEach(t),qc=s(Ms," forward method, overrides the "),Fn=r(Ms,"CODE",{});var Uh=i(Fn);Nc=s(Uh,"__call__"),Uh.forEach(t),zc=s(Ms," special method."),Ms.forEach(t),Dc=m(jo),y(To.$$.fragment,jo),Oc=m(jo),y(bo.$$.fragment,jo),jo.forEach(t),xe.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(vm)),c(u,"id","vision-transformer-vit"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#vision-transformer-vit"),c(f,"class","relative group"),c(D,"id","overview"),c(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(D,"href","#overview"),c(q,"class","relative group"),c(re,"href","https://arxiv.org/abs/2010.11929"),c(re,"rel","nofollow"),c(K,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),c(K,"rel","nofollow"),c(Te,"href","/docs/transformers/main/en/model_doc/vit#transformers.models.vit.image_processing_vit.ViTImageProcessor"),c(z,"href","https://huggingface.co/models?search=vit"),c(z,"rel","nofollow"),c(ee,"href","http://www.image-net.org/"),c(ee,"rel","nofollow"),c(j,"href","http://www.image-net.org/challenges/LSVRC/2012/"),c(j,"rel","nofollow"),c(B,"href","https://arxiv.org/abs/1906.06423"),c(B,"rel","nofollow"),c(Ve,"href","https://arxiv.org/abs/1912.11370"),c(Ve,"rel","nofollow"),Gh(we.src,Bc="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/vit_architecture.jpg")||c(we,"src",Bc),c(we,"alt","drawing"),c(we,"width","600"),c(Ha,"href","https://arxiv.org/abs/2010.11929"),c(Ga,"href","deit"),c(Xa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(Qa,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(Za,"href","/docs/transformers/main/en/model_doc/deit#transformers.models.deit.image_processing_deit.DeiTImageProcessor"),c(es,"href","beit"),c(zo,"href","https://huggingface.co/models?other=dino"),c(zo,"rel","nofollow"),c(os,"href","vit_mae"),c(Do,"href","https://huggingface.co/nielsr"),c(Do,"rel","nofollow"),c(Oo,"href","https://github.com/google-research/vision_transformer"),c(Oo,"rel","nofollow"),c(Lo,"href","https://github.com/rwightman/pytorch-image-models"),c(Lo,"rel","nofollow"),c(Ut,"id","transformers.ViTConfig"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.ViTConfig"),c(kt,"class","relative group"),c(as,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(Bo,"href","https://huggingface.co/google/vit-base-patch16-224"),c(Bo,"rel","nofollow"),c(ss,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ns,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Kt,"id","transformers.models.vit.image_processing_vit.ViTImageProcessor"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.models.vit.image_processing_vit.ViTImageProcessor"),c(Ft,"class","relative group"),c(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jt,"id","transformers.ViTModel"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.ViTModel"),c(Mt,"class","relative group"),c(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xo,"rel","nofollow"),c(rs,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTModel"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qt,"id","transformers.ViTForMaskedImageModeling"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.ViTForMaskedImageModeling"),c(jt,"class","relative group"),c(ta,"href","https://arxiv.org/abs/2111.09886"),c(ta,"rel","nofollow"),c(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(aa,"rel","nofollow"),c(is,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.ViTForImageClassification"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.ViTForImageClassification"),c(Pt,"class","relative group"),c(la,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(la,"rel","nofollow"),c(ls,"href","/docs/transformers/main/en/model_doc/vit#transformers.ViTForImageClassification"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(no,"id","transformers.TFViTModel"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.TFViTModel"),c(qt,"class","relative group"),c(ds,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(fa,"rel","nofollow"),c(cs,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTModel"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(co,"id","transformers.TFViTForImageClassification"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.TFViTForImageClassification"),c(zt,"class","relative group"),c(ps,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ba,"rel","nofollow"),c(hs,"href","/docs/transformers/main/en/model_doc/vit#transformers.TFViTForImageClassification"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(uo,"id","transformers.FlaxViTModel"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.FlaxViTModel"),c(Ot,"class","relative group"),c(ms,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ea,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ea,"rel","nofollow"),c(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Va,"rel","nofollow"),c(Fa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Fa,"rel","nofollow"),c(Ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ma,"rel","nofollow"),c(Ia,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ia,"rel","nofollow"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vo,"id","transformers.FlaxViTForImageClassification"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.FlaxViTForImageClassification"),c(St,"class","relative group"),c(fs,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Na,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Na,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(za,"rel","nofollow"),c(Da,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Da,"rel","nofollow"),c(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Oa,"rel","nofollow"),c(La,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(La,"rel","nofollow"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,T,g),_(o,f,g),e(f,u),e(u,v),$(l,v,null),e(f,p),e(f,V),e(V,N),_(o,C,g),_(o,q,g),e(q,D),e(D,ne),$(M,ne,null),e(q,Ue),e(q,Z),e(Z,Re),_(o,Ie,g),_(o,U,g),e(U,Ke),e(U,re),e(re,ie),e(U,He),_(o,je,g),_(o,X,g),e(X,Je),_(o,Ce,g),_(o,Q,g),e(Q,ke),e(ke,Ge),_(o,ve,g),_(o,A,g),e(A,O),_(o,Pe,g),_(o,P,g),e(P,le),e(le,Xe),e(le,K),e(K,Qe),e(le,Ze),e(P,L),e(P,Ee),e(Ee,de),e(P,Ye),e(P,ce),e(ce,pe),e(ce,Te),e(Te,et),e(ce,Y),e(P,tt),e(P,S),e(S,ot),e(S,he),e(he,W),e(S,at),e(S,z),e(z,st),e(S,nt),e(P,b),e(P,I),e(I,ft),e(I,ee),e(ee,ut),e(I,gt),e(I,j),e(j,_t),e(I,vt),e(P,Tt),e(P,me),e(me,bt),e(me,B),e(B,fe),e(me,wt),e(me,Ve),e(Ve,ue),e(me,yt),e(P,$t),e(P,Fe),e(Fe,xt),_(o,be,g),_(o,we,g),_(o,Bn,g),_(o,qo,g),e(qo,zr),e(qo,Ha),e(Ha,Dr),_(o,Un,g),_(o,Ja,g),e(Ja,Or),_(o,Rn,g),_(o,Ae,g),e(Ae,Is),e(Is,R),e(R,Ga),e(Ga,Lr),e(R,Sr),e(R,Xa),e(Xa,Wr),e(R,Br),e(R,Qa),e(Qa,Ur),e(R,Rr),e(R,js),e(js,Kr),e(R,Hr),e(R,Cs),e(Cs,Jr),e(R,Gr),e(R,Ps),e(Ps,Xr),e(R,Qr),e(R,As),e(As,Zr),e(R,Yr),e(R,Za),e(Za,ei),e(R,ti),e(Ae,oi),e(Ae,qs),e(qs,Ya),e(Ya,es),e(es,ai),e(Ya,si),e(Ae,ni),e(Ae,Ns),e(Ns,No),e(No,ri),e(No,zo),e(zo,ii),e(No,li),e(Ae,di),e(Ae,zs),e(zs,ts),e(ts,os),e(os,ci),e(ts,pi),_(o,Kn,g),_(o,pt,g),e(pt,hi),e(pt,Do),e(Do,mi),e(pt,fi),e(pt,Oo),e(Oo,ui),e(pt,gi),_(o,Hn,g),_(o,Bt,g),e(Bt,_i),e(Bt,Lo),e(Lo,vi),e(Bt,Ti),_(o,Jn,g),_(o,kt,g),e(kt,Ut),e(Ut,Ds),$(So,Ds,null),e(kt,bi),e(kt,Os),e(Os,wi),_(o,Gn,g),_(o,Me,g),$(Wo,Me,null),e(Me,yi),e(Me,Et),e(Et,$i),e(Et,as),e(as,xi),e(Et,ki),e(Et,Bo),e(Bo,Ei),e(Et,Vi),e(Me,Fi),e(Me,Vt),e(Vt,Mi),e(Vt,ss),e(ss,Ii),e(Vt,ji),e(Vt,ns),e(ns,Ci),e(Vt,Pi),e(Me,Ai),$(Rt,Me,null),_(o,Xn,g),_(o,Ft,g),e(Ft,Kt),e(Kt,Ls),$(Uo,Ls,null),e(Ft,qi),e(Ft,Ss),e(Ss,Ni),_(o,Qn,g),_(o,rt,g),$(Ro,rt,null),e(rt,zi),e(rt,Ws),e(Ws,Di),e(rt,Oi),e(rt,Ht),$(Ko,Ht,null),e(Ht,Li),e(Ht,Bs),e(Bs,Si),_(o,Zn,g),_(o,Mt,g),e(Mt,Jt),e(Jt,Us),$(Ho,Us,null),e(Mt,Wi),e(Mt,Rs),e(Rs,Bi),_(o,Yn,g),_(o,it,g),$(Jo,it,null),e(it,Ui),e(it,Go),e(Go,Ri),e(Go,Xo),e(Xo,Ki),e(Go,Hi),e(it,Ji),e(it,qe),$(Qo,qe,null),e(qe,Gi),e(qe,It),e(It,Xi),e(It,rs),e(rs,Qi),e(It,Zi),e(It,Ks),e(Ks,Yi),e(It,el),e(qe,tl),$(Gt,qe,null),e(qe,ol),$(Xt,qe,null),_(o,er,g),_(o,jt,g),e(jt,Qt),e(Qt,Hs),$(Zo,Hs,null),e(jt,al),e(jt,Js),e(Js,sl),_(o,tr,g),_(o,ge,g),$(Yo,ge,null),e(ge,nl),e(ge,ea),e(ea,rl),e(ea,ta),e(ta,il),e(ea,ll),e(ge,dl),$(Zt,ge,null),e(ge,cl),e(ge,oa),e(oa,pl),e(oa,aa),e(aa,hl),e(oa,ml),e(ge,fl),e(ge,Ne),$(sa,Ne,null),e(Ne,ul),e(Ne,Ct),e(Ct,gl),e(Ct,is),e(is,_l),e(Ct,vl),e(Ct,Gs),e(Gs,Tl),e(Ct,bl),e(Ne,wl),$(Yt,Ne,null),e(Ne,yl),$(eo,Ne,null),_(o,or,g),_(o,Pt,g),e(Pt,to),e(to,Xs),$(na,Xs,null),e(Pt,$l),e(Pt,Qs),e(Qs,xl),_(o,ar,g),_(o,_e,g),$(ra,_e,null),e(_e,kl),e(_e,Zs),e(Zs,El),e(_e,Vl),$(oo,_e,null),e(_e,Fl),e(_e,ia),e(ia,Ml),e(ia,la),e(la,Il),e(ia,jl),e(_e,Cl),e(_e,ze),$(da,ze,null),e(ze,Pl),e(ze,At),e(At,Al),e(At,ls),e(ls,ql),e(At,Nl),e(At,Ys),e(Ys,zl),e(At,Dl),e(ze,Ol),$(ao,ze,null),e(ze,Ll),$(so,ze,null),_(o,sr,g),_(o,qt,g),e(qt,no),e(no,en),$(ca,en,null),e(qt,Sl),e(qt,tn),e(tn,Wl),_(o,nr,g),_(o,te,g),$(pa,te,null),e(te,Bl),e(te,on),e(on,Ul),e(te,Rl),e(te,ha),e(ha,Kl),e(ha,ds),e(ds,Hl),e(ha,Jl),e(te,Gl),e(te,ma),e(ma,Xl),e(ma,fa),e(fa,Ql),e(ma,Zl),e(te,Yl),$(ro,te,null),e(te,ed),e(te,De),$(ua,De,null),e(De,td),e(De,Nt),e(Nt,od),e(Nt,cs),e(cs,ad),e(Nt,sd),e(Nt,an),e(an,nd),e(Nt,rd),e(De,id),$(io,De,null),e(De,ld),$(lo,De,null),_(o,rr,g),_(o,zt,g),e(zt,co),e(co,sn),$(ga,sn,null),e(zt,dd),e(zt,nn),e(nn,cd),_(o,ir,g),_(o,H,g),$(_a,H,null),e(H,pd),e(H,rn),e(rn,hd),e(H,md),$(po,H,null),e(H,fd),e(H,va),e(va,ud),e(va,ps),e(ps,gd),e(va,_d),e(H,vd),e(H,Ta),e(Ta,Td),e(Ta,ba),e(ba,bd),e(Ta,wd),e(H,yd),$(ho,H,null),e(H,$d),e(H,Oe),$(wa,Oe,null),e(Oe,xd),e(Oe,Dt),e(Dt,kd),e(Dt,hs),e(hs,Ed),e(Dt,Vd),e(Dt,ln),e(ln,Fd),e(Dt,Md),e(Oe,Id),$(mo,Oe,null),e(Oe,jd),$(fo,Oe,null),_(o,lr,g),_(o,Ot,g),e(Ot,uo),e(uo,dn),$(ya,dn,null),e(Ot,Cd),e(Ot,cn),e(cn,Pd),_(o,dr,g),_(o,J,g),$($a,J,null),e(J,Ad),e(J,pn),e(pn,qd),e(J,Nd),e(J,xa),e(xa,zd),e(xa,ms),e(ms,Dd),e(xa,Od),e(J,Ld),e(J,ka),e(ka,Sd),e(ka,Ea),e(Ea,Wd),e(ka,Bd),e(J,Ud),e(J,hn),e(hn,Rd),e(J,Kd),e(J,lt),e(lt,mn),e(mn,Va),e(Va,Hd),e(lt,Jd),e(lt,fn),e(fn,Fa),e(Fa,Gd),e(lt,Xd),e(lt,un),e(un,Ma),e(Ma,Qd),e(lt,Zd),e(lt,gn),e(gn,Ia),e(Ia,Yd),e(J,ec),e(J,Le),$(ja,Le,null),e(Le,tc),e(Le,Lt),e(Lt,oc),e(Lt,_n),e(_n,ac),e(Lt,sc),e(Lt,vn),e(vn,nc),e(Lt,rc),e(Le,ic),$(go,Le,null),e(Le,lc),$(_o,Le,null),_(o,cr,g),_(o,St,g),e(St,vo),e(vo,Tn),$(Ca,Tn,null),e(St,dc),e(St,bn),e(bn,cc),_(o,pr,g),_(o,G,g),$(Pa,G,null),e(G,pc),e(G,wn),e(wn,hc),e(G,mc),e(G,Aa),e(Aa,fc),e(Aa,fs),e(fs,uc),e(Aa,gc),e(G,_c),e(G,qa),e(qa,vc),e(qa,Na),e(Na,Tc),e(qa,bc),e(G,wc),e(G,yn),e(yn,yc),e(G,$c),e(G,dt),e(dt,$n),e($n,za),e(za,xc),e(dt,kc),e(dt,xn),e(xn,Da),e(Da,Ec),e(dt,Vc),e(dt,kn),e(kn,Oa),e(Oa,Fc),e(dt,Mc),e(dt,En),e(En,La),e(La,Ic),e(G,jc),e(G,Se),$(Sa,Se,null),e(Se,Cc),e(Se,Wt),e(Wt,Pc),e(Wt,Vn),e(Vn,Ac),e(Wt,qc),e(Wt,Fn),e(Fn,Nc),e(Wt,zc),e(Se,Dc),$(To,Se,null),e(Se,Oc),$(bo,Se,null),hr=!0},p(o,[g]){const Wa={};g&2&&(Wa.$$scope={dirty:g,ctx:o}),Rt.$set(Wa);const Mn={};g&2&&(Mn.$$scope={dirty:g,ctx:o}),Gt.$set(Mn);const In={};g&2&&(In.$$scope={dirty:g,ctx:o}),Xt.$set(In);const jn={};g&2&&(jn.$$scope={dirty:g,ctx:o}),Zt.$set(jn);const Ba={};g&2&&(Ba.$$scope={dirty:g,ctx:o}),Yt.$set(Ba);const Cn={};g&2&&(Cn.$$scope={dirty:g,ctx:o}),eo.$set(Cn);const Pn={};g&2&&(Pn.$$scope={dirty:g,ctx:o}),oo.$set(Pn);const An={};g&2&&(An.$$scope={dirty:g,ctx:o}),ao.$set(An);const Ua={};g&2&&(Ua.$$scope={dirty:g,ctx:o}),so.$set(Ua);const qn={};g&2&&(qn.$$scope={dirty:g,ctx:o}),ro.$set(qn);const Nn={};g&2&&(Nn.$$scope={dirty:g,ctx:o}),io.$set(Nn);const zn={};g&2&&(zn.$$scope={dirty:g,ctx:o}),lo.$set(zn);const Dn={};g&2&&(Dn.$$scope={dirty:g,ctx:o}),po.$set(Dn);const On={};g&2&&(On.$$scope={dirty:g,ctx:o}),ho.$set(On);const oe={};g&2&&(oe.$$scope={dirty:g,ctx:o}),mo.$set(oe);const Ra={};g&2&&(Ra.$$scope={dirty:g,ctx:o}),fo.$set(Ra);const Ln={};g&2&&(Ln.$$scope={dirty:g,ctx:o}),go.$set(Ln);const Sn={};g&2&&(Sn.$$scope={dirty:g,ctx:o}),_o.$set(Sn);const Ka={};g&2&&(Ka.$$scope={dirty:g,ctx:o}),To.$set(Ka);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:o}),bo.$set(Wn)},i(o){hr||(x(l.$$.fragment,o),x(M.$$.fragment,o),x(So.$$.fragment,o),x(Wo.$$.fragment,o),x(Rt.$$.fragment,o),x(Uo.$$.fragment,o),x(Ro.$$.fragment,o),x(Ko.$$.fragment,o),x(Ho.$$.fragment,o),x(Jo.$$.fragment,o),x(Qo.$$.fragment,o),x(Gt.$$.fragment,o),x(Xt.$$.fragment,o),x(Zo.$$.fragment,o),x(Yo.$$.fragment,o),x(Zt.$$.fragment,o),x(sa.$$.fragment,o),x(Yt.$$.fragment,o),x(eo.$$.fragment,o),x(na.$$.fragment,o),x(ra.$$.fragment,o),x(oo.$$.fragment,o),x(da.$$.fragment,o),x(ao.$$.fragment,o),x(so.$$.fragment,o),x(ca.$$.fragment,o),x(pa.$$.fragment,o),x(ro.$$.fragment,o),x(ua.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(ga.$$.fragment,o),x(_a.$$.fragment,o),x(po.$$.fragment,o),x(ho.$$.fragment,o),x(wa.$$.fragment,o),x(mo.$$.fragment,o),x(fo.$$.fragment,o),x(ya.$$.fragment,o),x($a.$$.fragment,o),x(ja.$$.fragment,o),x(go.$$.fragment,o),x(_o.$$.fragment,o),x(Ca.$$.fragment,o),x(Pa.$$.fragment,o),x(Sa.$$.fragment,o),x(To.$$.fragment,o),x(bo.$$.fragment,o),hr=!0)},o(o){k(l.$$.fragment,o),k(M.$$.fragment,o),k(So.$$.fragment,o),k(Wo.$$.fragment,o),k(Rt.$$.fragment,o),k(Uo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ko.$$.fragment,o),k(Ho.$$.fragment,o),k(Jo.$$.fragment,o),k(Qo.$$.fragment,o),k(Gt.$$.fragment,o),k(Xt.$$.fragment,o),k(Zo.$$.fragment,o),k(Yo.$$.fragment,o),k(Zt.$$.fragment,o),k(sa.$$.fragment,o),k(Yt.$$.fragment,o),k(eo.$$.fragment,o),k(na.$$.fragment,o),k(ra.$$.fragment,o),k(oo.$$.fragment,o),k(da.$$.fragment,o),k(ao.$$.fragment,o),k(so.$$.fragment,o),k(ca.$$.fragment,o),k(pa.$$.fragment,o),k(ro.$$.fragment,o),k(ua.$$.fragment,o),k(io.$$.fragment,o),k(lo.$$.fragment,o),k(ga.$$.fragment,o),k(_a.$$.fragment,o),k(po.$$.fragment,o),k(ho.$$.fragment,o),k(wa.$$.fragment,o),k(mo.$$.fragment,o),k(fo.$$.fragment,o),k(ya.$$.fragment,o),k($a.$$.fragment,o),k(ja.$$.fragment,o),k(go.$$.fragment,o),k(_o.$$.fragment,o),k(Ca.$$.fragment,o),k(Pa.$$.fragment,o),k(Sa.$$.fragment,o),k(To.$$.fragment,o),k(bo.$$.fragment,o),hr=!1},d(o){t(d),o&&t(T),o&&t(f),E(l),o&&t(C),o&&t(q),E(M),o&&t(Ie),o&&t(U),o&&t(je),o&&t(X),o&&t(Ce),o&&t(Q),o&&t(ve),o&&t(A),o&&t(Pe),o&&t(P),o&&t(be),o&&t(we),o&&t(Bn),o&&t(qo),o&&t(Un),o&&t(Ja),o&&t(Rn),o&&t(Ae),o&&t(Kn),o&&t(pt),o&&t(Hn),o&&t(Bt),o&&t(Jn),o&&t(kt),E(So),o&&t(Gn),o&&t(Me),E(Wo),E(Rt),o&&t(Xn),o&&t(Ft),E(Uo),o&&t(Qn),o&&t(rt),E(Ro),E(Ko),o&&t(Zn),o&&t(Mt),E(Ho),o&&t(Yn),o&&t(it),E(Jo),E(Qo),E(Gt),E(Xt),o&&t(er),o&&t(jt),E(Zo),o&&t(tr),o&&t(ge),E(Yo),E(Zt),E(sa),E(Yt),E(eo),o&&t(or),o&&t(Pt),E(na),o&&t(ar),o&&t(_e),E(ra),E(oo),E(da),E(ao),E(so),o&&t(sr),o&&t(qt),E(ca),o&&t(nr),o&&t(te),E(pa),E(ro),E(ua),E(io),E(lo),o&&t(rr),o&&t(zt),E(ga),o&&t(ir),o&&t(H),E(_a),E(po),E(ho),E(wa),E(mo),E(fo),o&&t(lr),o&&t(Ot),E(ya),o&&t(dr),o&&t(J),E($a),E(ja),E(go),E(_o),o&&t(cr),o&&t(St),E(Ca),o&&t(pr),o&&t(G),E(Pa),E(Sa),E(To),E(bo)}}}const vm={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.models.vit.image_processing_vit.ViTImageProcessor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function Tm(F){return Xh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Em extends Rh{constructor(d){super();Kh(this,d,Tm,_m,Hh,{})}}export{Em as default,vm as metadata};
