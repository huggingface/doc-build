import{S as tf,i as of,s as af,e as n,k as h,w,t as a,M as sf,c as r,d as t,m as f,a as i,x as y,h as s,b as c,N as nf,G as e,g as _,y as $,q as x,o as E,B as k,v as rf,L as zo}from"../../chunks/vendor-hf-doc-builder.js";import{T as je}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as No}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ct}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as qo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function lf(V){let d,T,m,u,v;return u=new No({props:{code:`from transformers import ViTConfig, ViTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),T=a("Example:"),m=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),m=f(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,m,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),k(u,l)}}}function df(V){let d,T;return{c(){d=n("p"),T=a(`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`)},l(m){d=r(m,"P",{});var u=i(d);T=s(u,`NumPy arrays and PyTorch tensors are converted to PIL images when resizing, so the most efficient is to pass
PIL images.`),u.forEach(t)},m(m,u){_(m,d,u),e(d,T)},d(m){m&&t(d)}}}function cf(V){let d,T,m,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var F=i(m);u=s(F,"Module"),F.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function pf(V){let d,T,m,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, ViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),T=a("Example:"),m=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),m=f(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,m,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),k(u,l)}}}function hf(V){let d,T,m,u,v;return{c(){d=n("p"),T=a("Note that we provide a script to pre-train this model on custom data in our "),m=n("a"),u=a(`examples
directory`),v=a("."),this.h()},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Note that we provide a script to pre-train this model on custom data in our "),m=r(p,"A",{href:!0,rel:!0});var F=i(m);u=s(F,`examples
directory`),F.forEach(t),v=s(p,"."),p.forEach(t),this.h()},h(){c(m,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining"),c(m,"rel","nofollow")},m(l,p){_(l,d,p),e(d,T),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function ff(V){let d,T,m,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var F=i(m);u=s(F,"Module"),F.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function mf(V){let d,T,m,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, ViTForMaskedImageModeling
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
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`}}),{c(){d=n("p"),T=a("Examples:"),m=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Examples:"),p.forEach(t),m=f(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,m,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),k(u,l)}}}function uf(V){let d,T,m,u,v,l,p,F;return{c(){d=n("p"),T=a(`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),m=n("code"),u=a("interpolate_pos_encoding"),v=a(" to "),l=n("code"),p=a("True"),F=a(` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`)},l(z){d=r(z,"P",{});var C=i(d);T=s(C,`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),m=r(C,"CODE",{});var q=i(m);u=s(q,"interpolate_pos_encoding"),q.forEach(t),v=s(C," to "),l=r(C,"CODE",{});var D=i(l);p=s(D,"True"),D.forEach(t),F=s(C,` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`),C.forEach(t)},m(z,C){_(z,d,C),e(d,T),e(d,m),e(m,u),e(d,v),e(d,l),e(l,p),e(d,F)},d(z){z&&t(d)}}}function gf(V){let d,T,m,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var F=i(m);u=s(F,"Module"),F.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function _f(V){let d,T,m,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, ViTForImageClassification
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
Egyptian cat`}}),{c(){d=n("p"),T=a("Example:"),m=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),m=f(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,m,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),k(u,l)}}}function vf(V){let d,T,m,u,v,l,p,F,z,C,q,D,ne,I,Ue,Q,He,Ce,R,Ke,re,ie,Je,Pe,X,Ge,Ae,Z,Ee,Xe,ve,A,L,qe,P,le,Ze,H,Qe,Ye,O,ke,de,et,ce,pe,Te,tt,Y,ot,S,at,he,W,st,N,nt,rt;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),m=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=h(),p=n("ul"),F=n("li"),z=a("having all inputs as keyword arguments (like PyTorch models), or"),C=h(),q=n("li"),D=a("having all inputs as a list, tuple or dict in the first positional argument."),ne=h(),I=n("p"),Ue=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=n("code"),He=a("model.fit()"),Ce=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),R=n("code"),Ke=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),Je=a("fit()"),Pe=a(" and "),X=n("code"),Ge=a("predict()"),Ae=a(`, such as when creating your own layers or models with
the Keras `),Z=n("code"),Ee=a("Functional"),Xe=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=h(),A=n("ul"),L=n("li"),qe=a("a single Tensor with "),P=n("code"),le=a("pixel_values"),Ze=a(" only and nothing else: "),H=n("code"),Qe=a("model(pixel_values)"),Ye=h(),O=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),et=a("model([pixel_values, attention_mask])"),ce=a(" or "),pe=n("code"),Te=a("model([pixel_values, attention_mask, token_type_ids])"),tt=h(),Y=n("li"),ot=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),at=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),he=h(),W=n("p"),st=a(`Note that when creating models and layers with
`),N=n("a"),nt=a("subclassing"),rt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var M=i(d);T=s(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var ut=i(m);u=s(ut,"transformers"),ut.forEach(t),v=s(M," accept two formats as input:"),M.forEach(t),l=f(b),p=r(b,"UL",{});var ee=i(p);F=r(ee,"LI",{});var gt=i(F);z=s(gt,"having all inputs as keyword arguments (like PyTorch models), or"),gt.forEach(t),C=f(ee),q=r(ee,"LI",{});var _t=i(q);D=s(_t,"having all inputs as a list, tuple or dict in the first positional argument."),_t.forEach(t),ee.forEach(t),ne=f(b),I=r(b,"P",{});var j=i(I);Ue=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var vt=i(Q);He=s(vt,"model.fit()"),vt.forEach(t),Ce=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),R=r(j,"CODE",{});var Tt=i(R);Ke=s(Tt,"model.fit()"),Tt.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=r(j,"CODE",{});var bt=i(ie);Je=s(bt,"fit()"),bt.forEach(t),Pe=s(j," and "),X=r(j,"CODE",{});var fe=i(X);Ge=s(fe,"predict()"),fe.forEach(t),Ae=s(j,`, such as when creating your own layers or models with
the Keras `),Z=r(j,"CODE",{});var wt=i(Z);Ee=s(wt,"Functional"),wt.forEach(t),Xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ve=f(b),A=r(b,"UL",{});var B=i(A);L=r(B,"LI",{});var me=i(L);qe=s(me,"a single Tensor with "),P=r(me,"CODE",{});var yt=i(P);le=s(yt,"pixel_values"),yt.forEach(t),Ze=s(me," only and nothing else: "),H=r(me,"CODE",{});var Fe=i(H);Qe=s(Fe,"model(pixel_values)"),Fe.forEach(t),me.forEach(t),Ye=f(B),O=r(B,"LI",{});var ue=i(O);ke=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var $t=i(de);et=s($t,"model([pixel_values, attention_mask])"),$t.forEach(t),ce=s(ue," or "),pe=r(ue,"CODE",{});var xt=i(pe);Te=s(xt,"model([pixel_values, attention_mask, token_type_ids])"),xt.forEach(t),ue.forEach(t),tt=f(B),Y=r(B,"LI",{});var Ve=i(Y);ot=s(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ve,"CODE",{});var Et=i(S);at=s(Et,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),Et.forEach(t),Ve.forEach(t),B.forEach(t),he=f(b),W=r(b,"P",{});var be=i(W);st=s(be,`Note that when creating models and layers with
`),N=r(be,"A",{href:!0,rel:!0});var we=i(N);nt=s(we,"subclassing"),we.forEach(t),rt=s(be,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),be.forEach(t),this.h()},h(){c(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(N,"rel","nofollow")},m(b,M){_(b,d,M),e(d,T),e(d,m),e(m,u),e(d,v),_(b,l,M),_(b,p,M),e(p,F),e(F,z),e(p,C),e(p,q),e(q,D),_(b,ne,M),_(b,I,M),e(I,Ue),e(I,Q),e(Q,He),e(I,Ce),e(I,R),e(R,Ke),e(I,re),e(I,ie),e(ie,Je),e(I,Pe),e(I,X),e(X,Ge),e(I,Ae),e(I,Z),e(Z,Ee),e(I,Xe),_(b,ve,M),_(b,A,M),e(A,L),e(L,qe),e(L,P),e(P,le),e(L,Ze),e(L,H),e(H,Qe),e(A,Ye),e(A,O),e(O,ke),e(O,de),e(de,et),e(O,ce),e(O,pe),e(pe,Te),e(A,tt),e(A,Y),e(Y,ot),e(Y,S),e(S,at),_(b,he,M),_(b,W,M),e(W,st),e(W,N),e(N,nt),e(W,rt)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(ne),b&&t(I),b&&t(ve),b&&t(A),b&&t(he),b&&t(W)}}}function Tf(V){let d,T,m,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var F=i(m);u=s(F,"Module"),F.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function bf(V){let d,T,m,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, TFViTModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`}}),{c(){d=n("p"),T=a("Example:"),m=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),m=f(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,m,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),k(u,l)}}}function wf(V){let d,T,m,u,v,l,p,F;return{c(){d=n("p"),T=a(`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),m=n("code"),u=a("interpolate_pos_encoding"),v=a(" to "),l=n("code"),p=a("True"),F=a(` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`)},l(z){d=r(z,"P",{});var C=i(d);T=s(C,`Note that it\u2019s possible to fine-tune ViT on higher resolution images than the ones it has been trained on, by
setting `),m=r(C,"CODE",{});var q=i(m);u=s(q,"interpolate_pos_encoding"),q.forEach(t),v=s(C," to "),l=r(C,"CODE",{});var D=i(l);p=s(D,"True"),D.forEach(t),F=s(C,` in the forward of the model. This will interpolate the pre-trained
position embeddings to the higher resolution.`),C.forEach(t)},m(z,C){_(z,d,C),e(d,T),e(d,m),e(m,u),e(d,v),e(d,l),e(l,p),e(d,F)},d(z){z&&t(d)}}}function yf(V){let d,T,m,u,v,l,p,F,z,C,q,D,ne,I,Ue,Q,He,Ce,R,Ke,re,ie,Je,Pe,X,Ge,Ae,Z,Ee,Xe,ve,A,L,qe,P,le,Ze,H,Qe,Ye,O,ke,de,et,ce,pe,Te,tt,Y,ot,S,at,he,W,st,N,nt,rt;return{c(){d=n("p"),T=a("TensorFlow models and layers in "),m=n("code"),u=a("transformers"),v=a(" accept two formats as input:"),l=h(),p=n("ul"),F=n("li"),z=a("having all inputs as keyword arguments (like PyTorch models), or"),C=h(),q=n("li"),D=a("having all inputs as a list, tuple or dict in the first positional argument."),ne=h(),I=n("p"),Ue=a(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=n("code"),He=a("model.fit()"),Ce=a(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),R=n("code"),Ke=a("model.fit()"),re=a(` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=n("code"),Je=a("fit()"),Pe=a(" and "),X=n("code"),Ge=a("predict()"),Ae=a(`, such as when creating your own layers or models with
the Keras `),Z=n("code"),Ee=a("Functional"),Xe=a(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ve=h(),A=n("ul"),L=n("li"),qe=a("a single Tensor with "),P=n("code"),le=a("pixel_values"),Ze=a(" only and nothing else: "),H=n("code"),Qe=a("model(pixel_values)"),Ye=h(),O=n("li"),ke=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=n("code"),et=a("model([pixel_values, attention_mask])"),ce=a(" or "),pe=n("code"),Te=a("model([pixel_values, attention_mask, token_type_ids])"),tt=h(),Y=n("li"),ot=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=n("code"),at=a('model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),he=h(),W=n("p"),st=a(`Note that when creating models and layers with
`),N=n("a"),nt=a("subclassing"),rt=a(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var M=i(d);T=s(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var ut=i(m);u=s(ut,"transformers"),ut.forEach(t),v=s(M," accept two formats as input:"),M.forEach(t),l=f(b),p=r(b,"UL",{});var ee=i(p);F=r(ee,"LI",{});var gt=i(F);z=s(gt,"having all inputs as keyword arguments (like PyTorch models), or"),gt.forEach(t),C=f(ee),q=r(ee,"LI",{});var _t=i(q);D=s(_t,"having all inputs as a list, tuple or dict in the first positional argument."),_t.forEach(t),ee.forEach(t),ne=f(b),I=r(b,"P",{});var j=i(I);Ue=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(j,"CODE",{});var vt=i(Q);He=s(vt,"model.fit()"),vt.forEach(t),Ce=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),R=r(j,"CODE",{});var Tt=i(R);Ke=s(Tt,"model.fit()"),Tt.forEach(t),re=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),ie=r(j,"CODE",{});var bt=i(ie);Je=s(bt,"fit()"),bt.forEach(t),Pe=s(j," and "),X=r(j,"CODE",{});var fe=i(X);Ge=s(fe,"predict()"),fe.forEach(t),Ae=s(j,`, such as when creating your own layers or models with
the Keras `),Z=r(j,"CODE",{});var wt=i(Z);Ee=s(wt,"Functional"),wt.forEach(t),Xe=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ve=f(b),A=r(b,"UL",{});var B=i(A);L=r(B,"LI",{});var me=i(L);qe=s(me,"a single Tensor with "),P=r(me,"CODE",{});var yt=i(P);le=s(yt,"pixel_values"),yt.forEach(t),Ze=s(me," only and nothing else: "),H=r(me,"CODE",{});var Fe=i(H);Qe=s(Fe,"model(pixel_values)"),Fe.forEach(t),me.forEach(t),Ye=f(B),O=r(B,"LI",{});var ue=i(O);ke=s(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),de=r(ue,"CODE",{});var $t=i(de);et=s($t,"model([pixel_values, attention_mask])"),$t.forEach(t),ce=s(ue," or "),pe=r(ue,"CODE",{});var xt=i(pe);Te=s(xt,"model([pixel_values, attention_mask, token_type_ids])"),xt.forEach(t),ue.forEach(t),tt=f(B),Y=r(B,"LI",{});var Ve=i(Y);ot=s(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Ve,"CODE",{});var Et=i(S);at=s(Et,'model({"pixel_values": pixel_values, "token_type_ids": token_type_ids})'),Et.forEach(t),Ve.forEach(t),B.forEach(t),he=f(b),W=r(b,"P",{});var be=i(W);st=s(be,`Note that when creating models and layers with
`),N=r(be,"A",{href:!0,rel:!0});var we=i(N);nt=s(we,"subclassing"),we.forEach(t),rt=s(be,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),be.forEach(t),this.h()},h(){c(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),c(N,"rel","nofollow")},m(b,M){_(b,d,M),e(d,T),e(d,m),e(m,u),e(d,v),_(b,l,M),_(b,p,M),e(p,F),e(F,z),e(p,C),e(p,q),e(q,D),_(b,ne,M),_(b,I,M),e(I,Ue),e(I,Q),e(Q,He),e(I,Ce),e(I,R),e(R,Ke),e(I,re),e(I,ie),e(ie,Je),e(I,Pe),e(I,X),e(X,Ge),e(I,Ae),e(I,Z),e(Z,Ee),e(I,Xe),_(b,ve,M),_(b,A,M),e(A,L),e(L,qe),e(L,P),e(P,le),e(L,Ze),e(L,H),e(H,Qe),e(A,Ye),e(A,O),e(O,ke),e(O,de),e(de,et),e(O,ce),e(O,pe),e(pe,Te),e(A,tt),e(A,Y),e(Y,ot),e(Y,S),e(S,at),_(b,he,M),_(b,W,M),e(W,st),e(W,N),e(N,nt),e(W,rt)},d(b){b&&t(d),b&&t(l),b&&t(p),b&&t(ne),b&&t(I),b&&t(ve),b&&t(A),b&&t(he),b&&t(W)}}}function $f(V){let d,T,m,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var F=i(m);u=s(F,"Module"),F.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function xf(V){let d,T,m,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, TFViTForImageClassification
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
Egyptian cat`}}),{c(){d=n("p"),T=a("Example:"),m=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),m=f(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,m,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),k(u,l)}}}function Ef(V){let d,T,m,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var F=i(m);u=s(F,"Module"),F.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function kf(V){let d,T,m,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),T=a("Examples:"),m=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Examples:"),p.forEach(t),m=f(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,m,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),k(u,l)}}}function Ff(V){let d,T,m,u,v;return{c(){d=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(p,"CODE",{});var F=i(m);u=s(F,"Module"),F.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,T),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function Vf(V){let d,T,m,u,v;return u=new No({props:{code:`from transformers import ViTFeatureExtractor, FlaxViTForImageClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx.item()])`}}),{c(){d=n("p"),T=a("Example:"),m=h(),w(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);T=s(p,"Example:"),p.forEach(t),m=f(l),y(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,T),_(l,m,p),$(u,l,p),v=!0},p:zo,i(l){v||(x(u.$$.fragment,l),v=!0)},o(l){E(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),k(u,l)}}}function If(V){let d,T,m,u,v,l,p,F,z,C,q,D,ne,I,Ue,Q,He,Ce,R,Ke,re,ie,Je,Pe,X,Ge,Ae,Z,Ee,Xe,ve,A,L,qe,P,le,Ze,H,Qe,Ye,O,ke,de,et,ce,pe,Te,tt,Y,ot,S,at,he,W,st,N,nt,rt,b,M,ut,ee,gt,_t,j,vt,Tt,bt,fe,wt,B,me,yt,Fe,ue,$t,xt,Ve,Et,be,we,Qc,Kn,Do,Sr,Za,Wr,Jn,Qa,Br,Gn,ze,As,U,Ya,Rr,Ur,es,Hr,Kr,ts,Jr,Gr,qs,Xr,Zr,zs,Qr,Yr,Ns,ei,ti,Ds,oi,ai,os,si,ni,ri,Ls,as,ss,ii,li,di,Os,Lo,ci,Oo,pi,hi,fi,Ss,ns,rs,mi,ui,Xn,pt,gi,So,_i,vi,Wo,Ti,bi,Zn,Ut,wi,Bo,yi,$i,Qn,kt,Ht,Ws,Ro,xi,Bs,Ei,Yn,Ie,Uo,ki,Ft,Fi,is,Vi,Ii,Ho,Mi,ji,Ci,Vt,Pi,ls,Ai,qi,ds,zi,Ni,Di,Kt,er,It,Jt,Rs,Ko,Li,Us,Oi,tr,Me,Jo,Si,Hs,Wi,Bi,Go,Ri,cs,Ui,Hi,Ki,ht,Xo,Ji,Ks,Gi,Xi,Gt,or,Mt,Xt,Js,Zo,Zi,Gs,Qi,ar,it,Qo,Yi,Yo,el,ea,tl,ol,al,Ne,ta,sl,jt,nl,ps,rl,il,Xs,ll,dl,cl,Zt,pl,Qt,sr,Ct,Yt,Zs,oa,hl,Qs,fl,nr,ge,aa,ml,sa,ul,na,gl,_l,vl,eo,Tl,ra,bl,ia,wl,yl,$l,De,la,xl,Pt,El,hs,kl,Fl,Ys,Vl,Il,Ml,to,jl,oo,rr,At,ao,en,da,Cl,tn,Pl,ir,_e,ca,Al,on,ql,zl,so,Nl,pa,Dl,ha,Ll,Ol,Sl,Le,fa,Wl,qt,Bl,fs,Rl,Ul,an,Hl,Kl,Jl,no,Gl,ro,lr,zt,io,sn,ma,Xl,nn,Zl,dr,te,ua,Ql,rn,Yl,ed,ga,td,ms,od,ad,sd,_a,nd,va,rd,id,ld,lo,dd,Oe,Ta,cd,Nt,pd,us,hd,fd,ln,md,ud,gd,co,_d,po,cr,Dt,ho,dn,ba,vd,cn,Td,pr,K,wa,bd,pn,wd,yd,fo,$d,ya,xd,gs,Ed,kd,Fd,$a,Vd,xa,Id,Md,jd,mo,Cd,Se,Ea,Pd,Lt,Ad,_s,qd,zd,hn,Nd,Dd,Ld,uo,Od,go,hr,Ot,_o,fn,ka,Sd,mn,Wd,fr,J,Fa,Bd,un,Rd,Ud,Va,Hd,vs,Kd,Jd,Gd,Ia,Xd,Ma,Zd,Qd,Yd,gn,ec,tc,lt,_n,ja,oc,ac,vn,Ca,sc,nc,Tn,Pa,rc,ic,bn,Aa,lc,dc,We,qa,cc,St,pc,wn,hc,fc,yn,mc,uc,gc,vo,_c,To,mr,Wt,bo,$n,za,vc,xn,Tc,ur,G,Na,bc,En,wc,yc,Da,$c,Ts,xc,Ec,kc,La,Fc,Oa,Vc,Ic,Mc,kn,jc,Cc,dt,Fn,Sa,Pc,Ac,Vn,Wa,qc,zc,In,Ba,Nc,Dc,Mn,Ra,Lc,Oc,Be,Ua,Sc,Bt,Wc,jn,Bc,Rc,Cn,Uc,Hc,Kc,wo,Jc,yo,gr;return l=new ct({}),I=new ct({}),Ro=new ct({}),Uo=new se({props:{name:"class transformers.ViTConfig",anchor:"transformers.ViTConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"is_encoder_decoder",val:" = False"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"encoder_stride",val:" = 16"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/configuration_vit.py#L35"}}),Kt=new qo({props:{anchor:"transformers.ViTConfig.example",$$slots:{default:[lf]},$$scope:{ctx:V}}}),Ko=new ct({}),Jo=new se({props:{name:"class transformers.ViTFeatureExtractor",anchor:"transformers.ViTFeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"do_normalize",val:" = True"},{name:"image_mean",val:" = None"},{name:"image_std",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.ViTFeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.ViTFeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.Resampling.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.Resampling.NEAREST</code>,
<code>PIL.Image.Resampling.BOX</code>, <code>PIL.Image.Resampling.BILINEAR</code>, <code>PIL.Image.Resampling.HAMMING</code>,
<code>PIL.Image.Resampling.BICUBIC</code> or <code>PIL.Image.Resampling.LANCZOS</code>. Only has an effect if <code>do_resize</code> is set
to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViTFeatureExtractor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to normalize the input with mean and standard deviation.`,name:"do_normalize"},{anchor:"transformers.ViTFeatureExtractor.image_mean",description:`<strong>image_mean</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of means for each channel, to be used when normalizing images.`,name:"image_mean"},{anchor:"transformers.ViTFeatureExtractor.image_std",description:`<strong>image_std</strong> (<code>List[int]</code>, defaults to <code>[0.5, 0.5, 0.5]</code>) &#x2014;
The sequence of standard deviations for each channel, to be used when normalizing images.`,name:"image_std"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/feature_extraction_vit.py#L38"}}),Xo=new se({props:{name:"__call__",anchor:"transformers.ViTFeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[ForwardRef('PIL.Image.Image'), numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[ForwardRef('PIL.Image.Image')], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViTFeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.ViTFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.24.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/feature_extraction_vit.py#L85",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Gt=new je({props:{warning:!0,$$slots:{default:[df]},$$scope:{ctx:V}}}),Zo=new ct({}),Qo=new se({props:{name:"class transformers.ViTModel",anchor:"transformers.ViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_vit.py#L501"}}),ta=new se({props:{name:"forward",anchor:"transformers.ViTModel.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_vit.py#L526",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new je({props:{$$slots:{default:[cf]},$$scope:{ctx:V}}}),Qt=new qo({props:{anchor:"transformers.ViTModel.forward.example",$$slots:{default:[pf]},$$scope:{ctx:V}}}),oa=new ct({}),aa=new se({props:{name:"class transformers.ViTForMaskedImageModeling",anchor:"transformers.ViTForMaskedImageModeling",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_vit.py#L615"}}),eo=new je({props:{$$slots:{default:[hf]},$$scope:{ctx:V}}}),la=new se({props:{name:"forward",anchor:"transformers.ViTForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"bool_masked_pos",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_vit.py#L633",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new je({props:{$$slots:{default:[ff]},$$scope:{ctx:V}}}),oo=new qo({props:{anchor:"transformers.ViTForMaskedImageModeling.forward.example",$$slots:{default:[mf]},$$scope:{ctx:V}}}),da=new ct({}),ca=new se({props:{name:"class transformers.ViTForImageClassification",anchor:"transformers.ViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_vit.py#L737"}}),so=new je({props:{$$slots:{default:[uf]},$$scope:{ctx:V}}}),fa=new se({props:{name:"forward",anchor:"transformers.ViTForImageClassification.forward",parameters:[{name:"pixel_values",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ViTForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViTForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViTForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_vit.py#L750",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new je({props:{$$slots:{default:[gf]},$$scope:{ctx:V}}}),ro=new qo({props:{anchor:"transformers.ViTForImageClassification.forward.example",$$slots:{default:[_f]},$$scope:{ctx:V}}}),ma=new ct({}),ua=new se({props:{name:"class transformers.TFViTModel",anchor:"transformers.TFViTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_tf_vit.py#L664"}}),lo=new je({props:{$$slots:{default:[vf]},$$scope:{ctx:V}}}),Ta=new se({props:{name:"call",anchor:"transformers.TFViTModel.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFViTModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_tf_vit.py#L670",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new je({props:{$$slots:{default:[Tf]},$$scope:{ctx:V}}}),po=new qo({props:{anchor:"transformers.TFViTModel.call.example",$$slots:{default:[bf]},$$scope:{ctx:V}}}),ba=new ct({}),wa=new se({props:{name:"class transformers.TFViTForImageClassification",anchor:"transformers.TFViTForImageClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_tf_vit.py#L750"}}),fo=new je({props:{$$slots:{default:[wf]},$$scope:{ctx:V}}}),mo=new je({props:{$$slots:{default:[yf]},$$scope:{ctx:V}}}),Ea=new se({props:{name:"call",anchor:"transformers.TFViTForImageClassification.call",parameters:[{name:"pixel_values",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"interpolate_pos_encoding",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFViTForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See
<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFViTForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFViTForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFViTForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_tf_vit.py#L764",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new je({props:{$$slots:{default:[$f]},$$scope:{ctx:V}}}),go=new qo({props:{anchor:"transformers.TFViTForImageClassification.call.example",$$slots:{default:[xf]},$$scope:{ctx:V}}}),ka=new ct({}),Fa=new se({props:{name:"class transformers.FlaxViTModel",anchor:"transformers.FlaxViTModel",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_flax_vit.py#L558"}}),qa=new se({props:{name:"__call__",anchor:"transformers.FlaxViTModel.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_flax_vit.py#L473",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new je({props:{$$slots:{default:[Ef]},$$scope:{ctx:V}}}),To=new qo({props:{anchor:"transformers.FlaxViTModel.__call__.example",$$slots:{default:[kf]},$$scope:{ctx:V}}}),za=new ct({}),Na=new se({props:{name:"class transformers.FlaxViTForImageClassification",anchor:"transformers.FlaxViTForImageClassification",parameters:[{name:"config",val:": ViTConfig"},{name:"input_shape",val:" = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxViTForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTConfig">ViTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxViTForImageClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_flax_vit.py#L641"}}),Ua=new se({props:{name:"__call__",anchor:"transformers.FlaxViTForImageClassification.__call__",parameters:[{name:"pixel_values",val:""},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/vit/modeling_flax_vit.py#L473",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new je({props:{$$slots:{default:[Ff]},$$scope:{ctx:V}}}),yo=new qo({props:{anchor:"transformers.FlaxViTForImageClassification.__call__.example",$$slots:{default:[Vf]},$$scope:{ctx:V}}}),{c(){d=n("meta"),T=h(),m=n("h1"),u=n("a"),v=n("span"),w(l.$$.fragment),p=h(),F=n("span"),z=a("Vision Transformer (ViT)"),C=h(),q=n("h2"),D=n("a"),ne=n("span"),w(I.$$.fragment),Ue=h(),Q=n("span"),He=a("Overview"),Ce=h(),R=n("p"),Ke=a("The Vision Transformer (ViT) model was proposed in "),re=n("a"),ie=a(`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Je=a(` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Pe=h(),X=n("p"),Ge=a("The abstract from the paper is the following:"),Ae=h(),Z=n("p"),Ee=n("em"),Xe=a(`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),ve=h(),A=n("p"),L=a("Tips:"),qe=h(),P=n("ul"),le=n("li"),Ze=a("Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),H=n("a"),Qe=a("here"),Ye=a("."),O=h(),ke=n("li"),de=a(`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),et=h(),ce=n("li"),pe=a(`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Te=n("a"),tt=a("ViTFeatureExtractor"),Y=a(" to resize (or rescale) and normalize images for the model."),ot=h(),S=n("li"),at=a(`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),he=n("code"),W=a("google/vit-base-patch16-224"),st=a(` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),N=n("a"),nt=a("hub"),rt=a("."),b=h(),M=n("li"),ut=a("The available checkpoints are either (1) pre-trained on "),ee=n("a"),gt=a("ImageNet-21k"),_t=a(` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),j=n("a"),vt=a("ImageNet"),Tt=a(` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),bt=h(),fe=n("li"),wt=a(`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),B=n("a"),me=a("(Touvron et al., 2019)"),yt=a(", "),Fe=n("a"),ue=a(`(Kolesnikov
et al., 2020)`),$t=a(`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),xt=h(),Ve=n("li"),Et=a(`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),be=h(),we=n("img"),Kn=h(),Do=n("small"),Sr=a("ViT architecture. Taken from the "),Za=n("a"),Wr=a("original paper."),Jn=h(),Qa=n("p"),Br=a("Following the original Vision Transformer, some follow-up works have been made:"),Gn=h(),ze=n("ul"),As=n("li"),U=n("p"),Ya=n("a"),Rr=a("DeiT"),Ur=a(` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),es=n("a"),Hr=a("ViTModel"),Kr=a(` or
`),ts=n("a"),Jr=a("ViTForImageClassification"),Gr=a(". There are 4 variants available (in 3 different sizes): "),qs=n("em"),Xr=a("facebook/deit-tiny-patch16-224"),Zr=a(`,
`),zs=n("em"),Qr=a("facebook/deit-small-patch16-224"),Yr=a(", "),Ns=n("em"),ei=a("facebook/deit-base-patch16-224"),ti=a(" and "),Ds=n("em"),oi=a("facebook/deit-base-patch16-384"),ai=a(`. Note that one should
use `),os=n("a"),si=a("DeiTFeatureExtractor"),ni=a(" in order to prepare images for the model."),ri=h(),Ls=n("li"),as=n("p"),ss=n("a"),ii=a("BEiT"),li=a(` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),di=h(),Os=n("li"),Lo=n("p"),ci=a(`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Oo=n("a"),pi=a("hub"),hi=a("."),fi=h(),Ss=n("li"),ns=n("p"),rs=n("a"),mi=a("MAE"),ui=a(` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Xn=h(),pt=n("p"),gi=a("This model was contributed by "),So=n("a"),_i=a("nielsr"),vi=a(`. The original code (written in JAX) can be
found `),Wo=n("a"),Ti=a("here"),bi=a("."),Zn=h(),Ut=n("p"),wi=a("Note that we converted the weights from Ross Wightman\u2019s "),Bo=n("a"),yi=a("timm library"),$i=a(`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),Qn=h(),kt=n("h2"),Ht=n("a"),Ws=n("span"),w(Ro.$$.fragment),xi=h(),Bs=n("span"),Ei=a("ViTConfig"),Yn=h(),Ie=n("div"),w(Uo.$$.fragment),ki=h(),Ft=n("p"),Fi=a("This is the configuration class to store the configuration of a "),is=n("a"),Vi=a("ViTModel"),Ii=a(`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Ho=n("a"),Mi=a("google/vit-base-patch16-224"),ji=a(" architecture."),Ci=h(),Vt=n("p"),Pi=a("Configuration objects inherit from "),ls=n("a"),Ai=a("PretrainedConfig"),qi=a(` and can be used to control the model outputs. Read the
documentation from `),ds=n("a"),zi=a("PretrainedConfig"),Ni=a(" for more information."),Di=h(),w(Kt.$$.fragment),er=h(),It=n("h2"),Jt=n("a"),Rs=n("span"),w(Ko.$$.fragment),Li=h(),Us=n("span"),Oi=a("ViTFeatureExtractor"),tr=h(),Me=n("div"),w(Jo.$$.fragment),Si=h(),Hs=n("p"),Wi=a("Constructs a ViT feature extractor."),Bi=h(),Go=n("p"),Ri=a("This feature extractor inherits from "),cs=n("a"),Ui=a("FeatureExtractionMixin"),Hi=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ki=h(),ht=n("div"),w(Xo.$$.fragment),Ji=h(),Ks=n("p"),Gi=a("Main method to prepare for the model one or several image(s)."),Xi=h(),w(Gt.$$.fragment),or=h(),Mt=n("h2"),Xt=n("a"),Js=n("span"),w(Zo.$$.fragment),Zi=h(),Gs=n("span"),Qi=a("ViTModel"),ar=h(),it=n("div"),w(Qo.$$.fragment),Yi=h(),Yo=n("p"),el=a(`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ea=n("a"),tl=a("torch.nn.Module"),ol=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),al=h(),Ne=n("div"),w(ta.$$.fragment),sl=h(),jt=n("p"),nl=a("The "),ps=n("a"),rl=a("ViTModel"),il=a(" forward method, overrides the "),Xs=n("code"),ll=a("__call__"),dl=a(" special method."),cl=h(),w(Zt.$$.fragment),pl=h(),w(Qt.$$.fragment),sr=h(),Ct=n("h2"),Yt=n("a"),Zs=n("span"),w(oa.$$.fragment),hl=h(),Qs=n("span"),fl=a("ViTForMaskedImageModeling"),nr=h(),ge=n("div"),w(aa.$$.fragment),ml=h(),sa=n("p"),ul=a("ViT Model with a decoder on top for masked image modeling, as proposed in "),na=n("a"),gl=a("SimMIM"),_l=a("."),vl=h(),w(eo.$$.fragment),Tl=h(),ra=n("p"),bl=a("This model is a PyTorch "),ia=n("a"),wl=a("torch.nn.Module"),yl=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$l=h(),De=n("div"),w(la.$$.fragment),xl=h(),Pt=n("p"),El=a("The "),hs=n("a"),kl=a("ViTForMaskedImageModeling"),Fl=a(" forward method, overrides the "),Ys=n("code"),Vl=a("__call__"),Il=a(" special method."),Ml=h(),w(to.$$.fragment),jl=h(),w(oo.$$.fragment),rr=h(),At=n("h2"),ao=n("a"),en=n("span"),w(da.$$.fragment),Cl=h(),tn=n("span"),Pl=a("ViTForImageClassification"),ir=h(),_e=n("div"),w(ca.$$.fragment),Al=h(),on=n("p"),ql=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),zl=h(),w(so.$$.fragment),Nl=h(),pa=n("p"),Dl=a("This model is a PyTorch "),ha=n("a"),Ll=a("torch.nn.Module"),Ol=a(` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sl=h(),Le=n("div"),w(fa.$$.fragment),Wl=h(),qt=n("p"),Bl=a("The "),fs=n("a"),Rl=a("ViTForImageClassification"),Ul=a(" forward method, overrides the "),an=n("code"),Hl=a("__call__"),Kl=a(" special method."),Jl=h(),w(no.$$.fragment),Gl=h(),w(ro.$$.fragment),lr=h(),zt=n("h2"),io=n("a"),sn=n("span"),w(ma.$$.fragment),Xl=h(),nn=n("span"),Zl=a("TFViTModel"),dr=h(),te=n("div"),w(ua.$$.fragment),Ql=h(),rn=n("p"),Yl=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),ed=h(),ga=n("p"),td=a("This model inherits from "),ms=n("a"),od=a("TFPreTrainedModel"),ad=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd=h(),_a=n("p"),nd=a("This model is also a "),va=n("a"),rd=a("tf.keras.Model"),id=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld=h(),w(lo.$$.fragment),dd=h(),Oe=n("div"),w(Ta.$$.fragment),cd=h(),Nt=n("p"),pd=a("The "),us=n("a"),hd=a("TFViTModel"),fd=a(" forward method, overrides the "),ln=n("code"),md=a("__call__"),ud=a(" special method."),gd=h(),w(co.$$.fragment),_d=h(),w(po.$$.fragment),cr=h(),Dt=n("h2"),ho=n("a"),dn=n("span"),w(ba.$$.fragment),vd=h(),cn=n("span"),Td=a("TFViTForImageClassification"),pr=h(),K=n("div"),w(wa.$$.fragment),bd=h(),pn=n("p"),wd=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),yd=h(),w(fo.$$.fragment),$d=h(),ya=n("p"),xd=a("This model inherits from "),gs=n("a"),Ed=a("TFPreTrainedModel"),kd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fd=h(),$a=n("p"),Vd=a("This model is also a "),xa=n("a"),Id=a("tf.keras.Model"),Md=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jd=h(),w(mo.$$.fragment),Cd=h(),Se=n("div"),w(Ea.$$.fragment),Pd=h(),Lt=n("p"),Ad=a("The "),_s=n("a"),qd=a("TFViTForImageClassification"),zd=a(" forward method, overrides the "),hn=n("code"),Nd=a("__call__"),Dd=a(" special method."),Ld=h(),w(uo.$$.fragment),Od=h(),w(go.$$.fragment),hr=h(),Ot=n("h2"),_o=n("a"),fn=n("span"),w(ka.$$.fragment),Sd=h(),mn=n("span"),Wd=a("FlaxVitModel"),fr=h(),J=n("div"),w(Fa.$$.fragment),Bd=h(),un=n("p"),Rd=a("The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),Ud=h(),Va=n("p"),Hd=a("This model inherits from "),vs=n("a"),Kd=a("FlaxPreTrainedModel"),Jd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gd=h(),Ia=n("p"),Xd=a("This model is also a Flax Linen "),Ma=n("a"),Zd=a("flax.linen.Module"),Qd=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yd=h(),gn=n("p"),ec=a("Finally, this model supports inherent JAX features such as:"),tc=h(),lt=n("ul"),_n=n("li"),ja=n("a"),oc=a("Just-In-Time (JIT) compilation"),ac=h(),vn=n("li"),Ca=n("a"),sc=a("Automatic Differentiation"),nc=h(),Tn=n("li"),Pa=n("a"),rc=a("Vectorization"),ic=h(),bn=n("li"),Aa=n("a"),lc=a("Parallelization"),dc=h(),We=n("div"),w(qa.$$.fragment),cc=h(),St=n("p"),pc=a("The "),wn=n("code"),hc=a("FlaxViTPreTrainedModel"),fc=a(" forward method, overrides the "),yn=n("code"),mc=a("__call__"),uc=a(" special method."),gc=h(),w(vo.$$.fragment),_c=h(),w(To.$$.fragment),mr=h(),Wt=n("h2"),bo=n("a"),$n=n("span"),w(za.$$.fragment),vc=h(),xn=n("span"),Tc=a("FlaxViTForImageClassification"),ur=h(),G=n("div"),w(Na.$$.fragment),bc=h(),En=n("p"),wc=a(`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),yc=h(),Da=n("p"),$c=a("This model inherits from "),Ts=n("a"),xc=a("FlaxPreTrainedModel"),Ec=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kc=h(),La=n("p"),Fc=a("This model is also a Flax Linen "),Oa=n("a"),Vc=a("flax.linen.Module"),Ic=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mc=h(),kn=n("p"),jc=a("Finally, this model supports inherent JAX features such as:"),Cc=h(),dt=n("ul"),Fn=n("li"),Sa=n("a"),Pc=a("Just-In-Time (JIT) compilation"),Ac=h(),Vn=n("li"),Wa=n("a"),qc=a("Automatic Differentiation"),zc=h(),In=n("li"),Ba=n("a"),Nc=a("Vectorization"),Dc=h(),Mn=n("li"),Ra=n("a"),Lc=a("Parallelization"),Oc=h(),Be=n("div"),w(Ua.$$.fragment),Sc=h(),Bt=n("p"),Wc=a("The "),jn=n("code"),Bc=a("FlaxViTPreTrainedModel"),Rc=a(" forward method, overrides the "),Cn=n("code"),Uc=a("__call__"),Hc=a(" special method."),Kc=h(),w(wo.$$.fragment),Jc=h(),w(yo.$$.fragment),this.h()},l(o){const g=sf('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),T=f(o),m=r(o,"H1",{class:!0});var Ha=i(m);u=r(Ha,"A",{id:!0,class:!0,href:!0});var Pn=i(u);v=r(Pn,"SPAN",{});var An=i(v);y(l.$$.fragment,An),An.forEach(t),Pn.forEach(t),p=f(Ha),F=r(Ha,"SPAN",{});var qn=i(F);z=s(qn,"Vision Transformer (ViT)"),qn.forEach(t),Ha.forEach(t),C=f(o),q=r(o,"H2",{class:!0});var Ka=i(q);D=r(Ka,"A",{id:!0,class:!0,href:!0});var zn=i(D);ne=r(zn,"SPAN",{});var Nn=i(ne);y(I.$$.fragment,Nn),Nn.forEach(t),zn.forEach(t),Ue=f(Ka),Q=r(Ka,"SPAN",{});var Dn=i(Q);He=s(Dn,"Overview"),Dn.forEach(t),Ka.forEach(t),Ce=f(o),R=r(o,"P",{});var Ja=i(R);Ke=s(Ja,"The Vision Transformer (ViT) model was proposed in "),re=r(Ja,"A",{href:!0,rel:!0});var Ln=i(re);ie=s(Ln,`An Image is Worth 16x16 Words: Transformers for Image Recognition
at Scale`),Ln.forEach(t),Je=s(Ja,` by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk
Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob
Uszkoreit, Neil Houlsby. It\u2019s the first paper that successfully trains a Transformer encoder on ImageNet, attaining
very good results compared to familiar convolutional architectures.`),Ja.forEach(t),Pe=f(o),X=r(o,"P",{});var On=i(X);Ge=s(On,"The abstract from the paper is the following:"),On.forEach(t),Ae=f(o),Z=r(o,"P",{});var Sn=i(Z);Ee=r(Sn,"EM",{});var Wn=i(Ee);Xe=s(Wn,`While the Transformer architecture has become the de-facto standard for natural language processing tasks, its
applications to computer vision remain limited. In vision, attention is either applied in conjunction with
convolutional networks, or used to replace certain components of convolutional networks while keeping their overall
structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to
sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of
data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.),
Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring
substantially fewer computational resources to train.`),Wn.forEach(t),Sn.forEach(t),ve=f(o),A=r(o,"P",{});var Bn=i(A);L=s(Bn,"Tips:"),Bn.forEach(t),qe=f(o),P=r(o,"UL",{});var oe=i(P);le=r(oe,"LI",{});var Ga=i(le);Ze=s(Ga,"Demo notebooks regarding inference as well as fine-tuning ViT on custom data can be found "),H=r(Ga,"A",{href:!0,rel:!0});var Rn=i(H);Qe=s(Rn,"here"),Rn.forEach(t),Ye=s(Ga,"."),Ga.forEach(t),O=f(oe),ke=r(oe,"LI",{});var Un=i(ke);de=s(Un,`To feed images to the Transformer encoder, each image is split into a sequence of fixed-size non-overlapping patches,
which are then linearly embedded. A [CLS] token is added to serve as representation of an entire image, which can be
used for classification. The authors also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard Transformer encoder.`),Un.forEach(t),et=f(oe),ce=r(oe,"LI",{});var Xa=i(ce);pe=s(Xa,`As the Vision Transformer expects each image to be of the same size (resolution), one can use
`),Te=r(Xa,"A",{href:!0});var Hn=i(Te);tt=s(Hn,"ViTFeatureExtractor"),Hn.forEach(t),Y=s(Xa," to resize (or rescale) and normalize images for the model."),Xa.forEach(t),ot=f(oe),S=r(oe,"LI",{});var Rt=i(S);at=s(Rt,`Both the patch resolution and image resolution used during pre-training or fine-tuning are reflected in the name of
each checkpoint. For example, `),he=r(Rt,"CODE",{});var Yc=i(he);W=s(Yc,"google/vit-base-patch16-224"),Yc.forEach(t),st=s(Rt,` refers to a base-sized architecture with patch
resolution of 16x16 and fine-tuning resolution of 224x224. All checkpoints can be found on the `),N=r(Rt,"A",{href:!0,rel:!0});var ep=i(N);nt=s(ep,"hub"),ep.forEach(t),rt=s(Rt,"."),Rt.forEach(t),b=f(oe),M=r(oe,"LI",{});var bs=i(M);ut=s(bs,"The available checkpoints are either (1) pre-trained on "),ee=r(bs,"A",{href:!0,rel:!0});var tp=i(ee);gt=s(tp,"ImageNet-21k"),tp.forEach(t),_t=s(bs,` (a collection of
14 million images and 21k classes) only, or (2) also fine-tuned on `),j=r(bs,"A",{href:!0,rel:!0});var op=i(j);vt=s(op,"ImageNet"),op.forEach(t),Tt=s(bs,` (also referred to as ILSVRC 2012, a collection of 1.3 million
images and 1,000 classes).`),bs.forEach(t),bt=f(oe),fe=r(oe,"LI",{});var ws=i(fe);wt=s(ws,`The Vision Transformer was pre-trained using a resolution of 224x224. During fine-tuning, it is often beneficial to
use a higher resolution than pre-training `),B=r(ws,"A",{href:!0,rel:!0});var ap=i(B);me=s(ap,"(Touvron et al., 2019)"),ap.forEach(t),yt=s(ws,", "),Fe=r(ws,"A",{href:!0,rel:!0});var sp=i(Fe);ue=s(sp,`(Kolesnikov
et al., 2020)`),sp.forEach(t),$t=s(ws,`. In order to fine-tune at higher resolution, the authors perform
2D interpolation of the pre-trained position embeddings, according to their location in the original image.`),ws.forEach(t),xt=f(oe),Ve=r(oe,"LI",{});var np=i(Ve);Et=s(np,`The best results are obtained with supervised pre-training, which is not the case in NLP. The authors also performed
an experiment with a self-supervised pre-training objective, namely masked patched prediction (inspired by masked
language modeling). With this approach, the smaller ViT-B/16 model achieves 79.9% accuracy on ImageNet, a significant
improvement of 2% to training from scratch, but still 4% behind supervised pre-training.`),np.forEach(t),oe.forEach(t),be=f(o),we=r(o,"IMG",{src:!0,alt:!0,width:!0}),Kn=f(o),Do=r(o,"SMALL",{});var Gc=i(Do);Sr=s(Gc,"ViT architecture. Taken from the "),Za=r(Gc,"A",{href:!0});var rp=i(Za);Wr=s(rp,"original paper."),rp.forEach(t),Gc.forEach(t),Jn=f(o),Qa=r(o,"P",{});var ip=i(Qa);Br=s(ip,"Following the original Vision Transformer, some follow-up works have been made:"),ip.forEach(t),Gn=f(o),ze=r(o,"UL",{});var $o=i(ze);As=r($o,"LI",{});var lp=i(As);U=r(lp,"P",{});var ae=i(U);Ya=r(ae,"A",{href:!0});var dp=i(Ya);Rr=s(dp,"DeiT"),dp.forEach(t),Ur=s(ae,` (Data-efficient Image Transformers) by Facebook AI. DeiT models are distilled vision transformers.
The authors of DeiT also released more efficiently trained ViT models, which you can directly plug into `),es=r(ae,"A",{href:!0});var cp=i(es);Hr=s(cp,"ViTModel"),cp.forEach(t),Kr=s(ae,` or
`),ts=r(ae,"A",{href:!0});var pp=i(ts);Jr=s(pp,"ViTForImageClassification"),pp.forEach(t),Gr=s(ae,". There are 4 variants available (in 3 different sizes): "),qs=r(ae,"EM",{});var hp=i(qs);Xr=s(hp,"facebook/deit-tiny-patch16-224"),hp.forEach(t),Zr=s(ae,`,
`),zs=r(ae,"EM",{});var fp=i(zs);Qr=s(fp,"facebook/deit-small-patch16-224"),fp.forEach(t),Yr=s(ae,", "),Ns=r(ae,"EM",{});var mp=i(Ns);ei=s(mp,"facebook/deit-base-patch16-224"),mp.forEach(t),ti=s(ae," and "),Ds=r(ae,"EM",{});var up=i(Ds);oi=s(up,"facebook/deit-base-patch16-384"),up.forEach(t),ai=s(ae,`. Note that one should
use `),os=r(ae,"A",{href:!0});var gp=i(os);si=s(gp,"DeiTFeatureExtractor"),gp.forEach(t),ni=s(ae," in order to prepare images for the model."),ae.forEach(t),lp.forEach(t),ri=f($o),Ls=r($o,"LI",{});var _p=i(Ls);as=r(_p,"P",{});var Xc=i(as);ss=r(Xc,"A",{href:!0});var vp=i(ss);ii=s(vp,"BEiT"),vp.forEach(t),li=s(Xc,` (BERT pre-training of Image Transformers) by Microsoft Research. BEiT models outperform supervised pre-trained
vision transformers using a self-supervised method inspired by BERT (masked image modeling) and based on a VQ-VAE.`),Xc.forEach(t),_p.forEach(t),di=f($o),Os=r($o,"LI",{});var Tp=i(Os);Lo=r(Tp,"P",{});var _r=i(Lo);ci=s(_r,`DINO (a method for self-supervised training of Vision Transformers) by Facebook AI. Vision Transformers trained using
the DINO method show very interesting properties not seen with convolutional models. They are capable of segmenting
objects, without having ever been trained to do so. DINO checkpoints can be found on the `),Oo=r(_r,"A",{href:!0,rel:!0});var bp=i(Oo);pi=s(bp,"hub"),bp.forEach(t),hi=s(_r,"."),_r.forEach(t),Tp.forEach(t),fi=f($o),Ss=r($o,"LI",{});var wp=i(Ss);ns=r(wp,"P",{});var Zc=i(ns);rs=r(Zc,"A",{href:!0});var yp=i(rs);mi=s(yp,"MAE"),yp.forEach(t),ui=s(Zc,` (Masked Autoencoders) by Facebook AI. By pre-training Vision Transformers to reconstruct pixel values for a high portion
(75%) of masked patches (using an asymmetric encoder-decoder architecture), the authors show that this simple method outperforms
supervised pre-training after fine-tuning.`),Zc.forEach(t),wp.forEach(t),$o.forEach(t),Xn=f(o),pt=r(o,"P",{});var ys=i(pt);gi=s(ys,"This model was contributed by "),So=r(ys,"A",{href:!0,rel:!0});var $p=i(So);_i=s($p,"nielsr"),$p.forEach(t),vi=s(ys,`. The original code (written in JAX) can be
found `),Wo=r(ys,"A",{href:!0,rel:!0});var xp=i(Wo);Ti=s(xp,"here"),xp.forEach(t),bi=s(ys,"."),ys.forEach(t),Zn=f(o),Ut=r(o,"P",{});var vr=i(Ut);wi=s(vr,"Note that we converted the weights from Ross Wightman\u2019s "),Bo=r(vr,"A",{href:!0,rel:!0});var Ep=i(Bo);yi=s(Ep,"timm library"),Ep.forEach(t),$i=s(vr,`, who already converted the weights from JAX to PyTorch. Credits
go to him!`),vr.forEach(t),Qn=f(o),kt=r(o,"H2",{class:!0});var Tr=i(kt);Ht=r(Tr,"A",{id:!0,class:!0,href:!0});var kp=i(Ht);Ws=r(kp,"SPAN",{});var Fp=i(Ws);y(Ro.$$.fragment,Fp),Fp.forEach(t),kp.forEach(t),xi=f(Tr),Bs=r(Tr,"SPAN",{});var Vp=i(Bs);Ei=s(Vp,"ViTConfig"),Vp.forEach(t),Tr.forEach(t),Yn=f(o),Ie=r(o,"DIV",{class:!0});var xo=i(Ie);y(Uo.$$.fragment,xo),ki=f(xo),Ft=r(xo,"P",{});var $s=i(Ft);Fi=s($s,"This is the configuration class to store the configuration of a "),is=r($s,"A",{href:!0});var Ip=i(is);Vi=s(Ip,"ViTModel"),Ip.forEach(t),Ii=s($s,`. It is used to instantiate an ViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViT
`),Ho=r($s,"A",{href:!0,rel:!0});var Mp=i(Ho);Mi=s(Mp,"google/vit-base-patch16-224"),Mp.forEach(t),ji=s($s," architecture."),$s.forEach(t),Ci=f(xo),Vt=r(xo,"P",{});var xs=i(Vt);Pi=s(xs,"Configuration objects inherit from "),ls=r(xs,"A",{href:!0});var jp=i(ls);Ai=s(jp,"PretrainedConfig"),jp.forEach(t),qi=s(xs,` and can be used to control the model outputs. Read the
documentation from `),ds=r(xs,"A",{href:!0});var Cp=i(ds);zi=s(Cp,"PretrainedConfig"),Cp.forEach(t),Ni=s(xs," for more information."),xs.forEach(t),Di=f(xo),y(Kt.$$.fragment,xo),xo.forEach(t),er=f(o),It=r(o,"H2",{class:!0});var br=i(It);Jt=r(br,"A",{id:!0,class:!0,href:!0});var Pp=i(Jt);Rs=r(Pp,"SPAN",{});var Ap=i(Rs);y(Ko.$$.fragment,Ap),Ap.forEach(t),Pp.forEach(t),Li=f(br),Us=r(br,"SPAN",{});var qp=i(Us);Oi=s(qp,"ViTFeatureExtractor"),qp.forEach(t),br.forEach(t),tr=f(o),Me=r(o,"DIV",{class:!0});var Eo=i(Me);y(Jo.$$.fragment,Eo),Si=f(Eo),Hs=r(Eo,"P",{});var zp=i(Hs);Wi=s(zp,"Constructs a ViT feature extractor."),zp.forEach(t),Bi=f(Eo),Go=r(Eo,"P",{});var wr=i(Go);Ri=s(wr,"This feature extractor inherits from "),cs=r(wr,"A",{href:!0});var Np=i(cs);Ui=s(Np,"FeatureExtractionMixin"),Np.forEach(t),Hi=s(wr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),wr.forEach(t),Ki=f(Eo),ht=r(Eo,"DIV",{class:!0});var Es=i(ht);y(Xo.$$.fragment,Es),Ji=f(Es),Ks=r(Es,"P",{});var Dp=i(Ks);Gi=s(Dp,"Main method to prepare for the model one or several image(s)."),Dp.forEach(t),Xi=f(Es),y(Gt.$$.fragment,Es),Es.forEach(t),Eo.forEach(t),or=f(o),Mt=r(o,"H2",{class:!0});var yr=i(Mt);Xt=r(yr,"A",{id:!0,class:!0,href:!0});var Lp=i(Xt);Js=r(Lp,"SPAN",{});var Op=i(Js);y(Zo.$$.fragment,Op),Op.forEach(t),Lp.forEach(t),Zi=f(yr),Gs=r(yr,"SPAN",{});var Sp=i(Gs);Qi=s(Sp,"ViTModel"),Sp.forEach(t),yr.forEach(t),ar=f(o),it=r(o,"DIV",{class:!0});var ks=i(it);y(Qo.$$.fragment,ks),Yi=f(ks),Yo=r(ks,"P",{});var $r=i(Yo);el=s($r,`The bare ViT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ea=r($r,"A",{href:!0,rel:!0});var Wp=i(ea);tl=s(Wp,"torch.nn.Module"),Wp.forEach(t),ol=s($r,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$r.forEach(t),al=f(ks),Ne=r(ks,"DIV",{class:!0});var ko=i(Ne);y(ta.$$.fragment,ko),sl=f(ko),jt=r(ko,"P",{});var Fs=i(jt);nl=s(Fs,"The "),ps=r(Fs,"A",{href:!0});var Bp=i(ps);rl=s(Bp,"ViTModel"),Bp.forEach(t),il=s(Fs," forward method, overrides the "),Xs=r(Fs,"CODE",{});var Rp=i(Xs);ll=s(Rp,"__call__"),Rp.forEach(t),dl=s(Fs," special method."),Fs.forEach(t),cl=f(ko),y(Zt.$$.fragment,ko),pl=f(ko),y(Qt.$$.fragment,ko),ko.forEach(t),ks.forEach(t),sr=f(o),Ct=r(o,"H2",{class:!0});var xr=i(Ct);Yt=r(xr,"A",{id:!0,class:!0,href:!0});var Up=i(Yt);Zs=r(Up,"SPAN",{});var Hp=i(Zs);y(oa.$$.fragment,Hp),Hp.forEach(t),Up.forEach(t),hl=f(xr),Qs=r(xr,"SPAN",{});var Kp=i(Qs);fl=s(Kp,"ViTForMaskedImageModeling"),Kp.forEach(t),xr.forEach(t),nr=f(o),ge=r(o,"DIV",{class:!0});var ft=i(ge);y(aa.$$.fragment,ft),ml=f(ft),sa=r(ft,"P",{});var Er=i(sa);ul=s(Er,"ViT Model with a decoder on top for masked image modeling, as proposed in "),na=r(Er,"A",{href:!0,rel:!0});var Jp=i(na);gl=s(Jp,"SimMIM"),Jp.forEach(t),_l=s(Er,"."),Er.forEach(t),vl=f(ft),y(eo.$$.fragment,ft),Tl=f(ft),ra=r(ft,"P",{});var kr=i(ra);bl=s(kr,"This model is a PyTorch "),ia=r(kr,"A",{href:!0,rel:!0});var Gp=i(ia);wl=s(Gp,"torch.nn.Module"),Gp.forEach(t),yl=s(kr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr.forEach(t),$l=f(ft),De=r(ft,"DIV",{class:!0});var Fo=i(De);y(la.$$.fragment,Fo),xl=f(Fo),Pt=r(Fo,"P",{});var Vs=i(Pt);El=s(Vs,"The "),hs=r(Vs,"A",{href:!0});var Xp=i(hs);kl=s(Xp,"ViTForMaskedImageModeling"),Xp.forEach(t),Fl=s(Vs," forward method, overrides the "),Ys=r(Vs,"CODE",{});var Zp=i(Ys);Vl=s(Zp,"__call__"),Zp.forEach(t),Il=s(Vs," special method."),Vs.forEach(t),Ml=f(Fo),y(to.$$.fragment,Fo),jl=f(Fo),y(oo.$$.fragment,Fo),Fo.forEach(t),ft.forEach(t),rr=f(o),At=r(o,"H2",{class:!0});var Fr=i(At);ao=r(Fr,"A",{id:!0,class:!0,href:!0});var Qp=i(ao);en=r(Qp,"SPAN",{});var Yp=i(en);y(da.$$.fragment,Yp),Yp.forEach(t),Qp.forEach(t),Cl=f(Fr),tn=r(Fr,"SPAN",{});var eh=i(tn);Pl=s(eh,"ViTForImageClassification"),eh.forEach(t),Fr.forEach(t),ir=f(o),_e=r(o,"DIV",{class:!0});var mt=i(_e);y(ca.$$.fragment,mt),Al=f(mt),on=r(mt,"P",{});var th=i(on);ql=s(th,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),th.forEach(t),zl=f(mt),y(so.$$.fragment,mt),Nl=f(mt),pa=r(mt,"P",{});var Vr=i(pa);Dl=s(Vr,"This model is a PyTorch "),ha=r(Vr,"A",{href:!0,rel:!0});var oh=i(ha);Ll=s(oh,"torch.nn.Module"),oh.forEach(t),Ol=s(Vr,` subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vr.forEach(t),Sl=f(mt),Le=r(mt,"DIV",{class:!0});var Vo=i(Le);y(fa.$$.fragment,Vo),Wl=f(Vo),qt=r(Vo,"P",{});var Is=i(qt);Bl=s(Is,"The "),fs=r(Is,"A",{href:!0});var ah=i(fs);Rl=s(ah,"ViTForImageClassification"),ah.forEach(t),Ul=s(Is," forward method, overrides the "),an=r(Is,"CODE",{});var sh=i(an);Hl=s(sh,"__call__"),sh.forEach(t),Kl=s(Is," special method."),Is.forEach(t),Jl=f(Vo),y(no.$$.fragment,Vo),Gl=f(Vo),y(ro.$$.fragment,Vo),Vo.forEach(t),mt.forEach(t),lr=f(o),zt=r(o,"H2",{class:!0});var Ir=i(zt);io=r(Ir,"A",{id:!0,class:!0,href:!0});var nh=i(io);sn=r(nh,"SPAN",{});var rh=i(sn);y(ma.$$.fragment,rh),rh.forEach(t),nh.forEach(t),Xl=f(Ir),nn=r(Ir,"SPAN",{});var ih=i(nn);Zl=s(ih,"TFViTModel"),ih.forEach(t),Ir.forEach(t),dr=f(o),te=r(o,"DIV",{class:!0});var Re=i(te);y(ua.$$.fragment,Re),Ql=f(Re),rn=r(Re,"P",{});var lh=i(rn);Yl=s(lh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),lh.forEach(t),ed=f(Re),ga=r(Re,"P",{});var Mr=i(ga);td=s(Mr,"This model inherits from "),ms=r(Mr,"A",{href:!0});var dh=i(ms);od=s(dh,"TFPreTrainedModel"),dh.forEach(t),ad=s(Mr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr.forEach(t),sd=f(Re),_a=r(Re,"P",{});var jr=i(_a);nd=s(jr,"This model is also a "),va=r(jr,"A",{href:!0,rel:!0});var ch=i(va);rd=s(ch,"tf.keras.Model"),ch.forEach(t),id=s(jr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jr.forEach(t),ld=f(Re),y(lo.$$.fragment,Re),dd=f(Re),Oe=r(Re,"DIV",{class:!0});var Io=i(Oe);y(Ta.$$.fragment,Io),cd=f(Io),Nt=r(Io,"P",{});var Ms=i(Nt);pd=s(Ms,"The "),us=r(Ms,"A",{href:!0});var ph=i(us);hd=s(ph,"TFViTModel"),ph.forEach(t),fd=s(Ms," forward method, overrides the "),ln=r(Ms,"CODE",{});var hh=i(ln);md=s(hh,"__call__"),hh.forEach(t),ud=s(Ms," special method."),Ms.forEach(t),gd=f(Io),y(co.$$.fragment,Io),_d=f(Io),y(po.$$.fragment,Io),Io.forEach(t),Re.forEach(t),cr=f(o),Dt=r(o,"H2",{class:!0});var Cr=i(Dt);ho=r(Cr,"A",{id:!0,class:!0,href:!0});var fh=i(ho);dn=r(fh,"SPAN",{});var mh=i(dn);y(ba.$$.fragment,mh),mh.forEach(t),fh.forEach(t),vd=f(Cr),cn=r(Cr,"SPAN",{});var uh=i(cn);Td=s(uh,"TFViTForImageClassification"),uh.forEach(t),Cr.forEach(t),pr=f(o),K=r(o,"DIV",{class:!0});var ye=i(K);y(wa.$$.fragment,ye),bd=f(ye),pn=r(ye,"P",{});var gh=i(pn);wd=s(gh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),gh.forEach(t),yd=f(ye),y(fo.$$.fragment,ye),$d=f(ye),ya=r(ye,"P",{});var Pr=i(ya);xd=s(Pr,"This model inherits from "),gs=r(Pr,"A",{href:!0});var _h=i(gs);Ed=s(_h,"TFPreTrainedModel"),_h.forEach(t),kd=s(Pr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pr.forEach(t),Fd=f(ye),$a=r(ye,"P",{});var Ar=i($a);Vd=s(Ar,"This model is also a "),xa=r(Ar,"A",{href:!0,rel:!0});var vh=i(xa);Id=s(vh,"tf.keras.Model"),vh.forEach(t),Md=s(Ar,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ar.forEach(t),jd=f(ye),y(mo.$$.fragment,ye),Cd=f(ye),Se=r(ye,"DIV",{class:!0});var Mo=i(Se);y(Ea.$$.fragment,Mo),Pd=f(Mo),Lt=r(Mo,"P",{});var js=i(Lt);Ad=s(js,"The "),_s=r(js,"A",{href:!0});var Th=i(_s);qd=s(Th,"TFViTForImageClassification"),Th.forEach(t),zd=s(js," forward method, overrides the "),hn=r(js,"CODE",{});var bh=i(hn);Nd=s(bh,"__call__"),bh.forEach(t),Dd=s(js," special method."),js.forEach(t),Ld=f(Mo),y(uo.$$.fragment,Mo),Od=f(Mo),y(go.$$.fragment,Mo),Mo.forEach(t),ye.forEach(t),hr=f(o),Ot=r(o,"H2",{class:!0});var qr=i(Ot);_o=r(qr,"A",{id:!0,class:!0,href:!0});var wh=i(_o);fn=r(wh,"SPAN",{});var yh=i(fn);y(ka.$$.fragment,yh),yh.forEach(t),wh.forEach(t),Sd=f(qr),mn=r(qr,"SPAN",{});var $h=i(mn);Wd=s($h,"FlaxVitModel"),$h.forEach(t),qr.forEach(t),fr=f(o),J=r(o,"DIV",{class:!0});var $e=i(J);y(Fa.$$.fragment,$e),Bd=f($e),un=r($e,"P",{});var xh=i(un);Rd=s(xh,"The bare ViT Model transformer outputting raw hidden-states without any specific head on top."),xh.forEach(t),Ud=f($e),Va=r($e,"P",{});var zr=i(Va);Hd=s(zr,"This model inherits from "),vs=r(zr,"A",{href:!0});var Eh=i(vs);Kd=s(Eh,"FlaxPreTrainedModel"),Eh.forEach(t),Jd=s(zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zr.forEach(t),Gd=f($e),Ia=r($e,"P",{});var Nr=i(Ia);Xd=s(Nr,"This model is also a Flax Linen "),Ma=r(Nr,"A",{href:!0,rel:!0});var kh=i(Ma);Zd=s(kh,"flax.linen.Module"),kh.forEach(t),Qd=s(Nr,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Nr.forEach(t),Yd=f($e),gn=r($e,"P",{});var Fh=i(gn);ec=s(Fh,"Finally, this model supports inherent JAX features such as:"),Fh.forEach(t),tc=f($e),lt=r($e,"UL",{});var jo=i(lt);_n=r(jo,"LI",{});var Vh=i(_n);ja=r(Vh,"A",{href:!0,rel:!0});var Ih=i(ja);oc=s(Ih,"Just-In-Time (JIT) compilation"),Ih.forEach(t),Vh.forEach(t),ac=f(jo),vn=r(jo,"LI",{});var Mh=i(vn);Ca=r(Mh,"A",{href:!0,rel:!0});var jh=i(Ca);sc=s(jh,"Automatic Differentiation"),jh.forEach(t),Mh.forEach(t),nc=f(jo),Tn=r(jo,"LI",{});var Ch=i(Tn);Pa=r(Ch,"A",{href:!0,rel:!0});var Ph=i(Pa);rc=s(Ph,"Vectorization"),Ph.forEach(t),Ch.forEach(t),ic=f(jo),bn=r(jo,"LI",{});var Ah=i(bn);Aa=r(Ah,"A",{href:!0,rel:!0});var qh=i(Aa);lc=s(qh,"Parallelization"),qh.forEach(t),Ah.forEach(t),jo.forEach(t),dc=f($e),We=r($e,"DIV",{class:!0});var Co=i(We);y(qa.$$.fragment,Co),cc=f(Co),St=r(Co,"P",{});var Cs=i(St);pc=s(Cs,"The "),wn=r(Cs,"CODE",{});var zh=i(wn);hc=s(zh,"FlaxViTPreTrainedModel"),zh.forEach(t),fc=s(Cs," forward method, overrides the "),yn=r(Cs,"CODE",{});var Nh=i(yn);mc=s(Nh,"__call__"),Nh.forEach(t),uc=s(Cs," special method."),Cs.forEach(t),gc=f(Co),y(vo.$$.fragment,Co),_c=f(Co),y(To.$$.fragment,Co),Co.forEach(t),$e.forEach(t),mr=f(o),Wt=r(o,"H2",{class:!0});var Dr=i(Wt);bo=r(Dr,"A",{id:!0,class:!0,href:!0});var Dh=i(bo);$n=r(Dh,"SPAN",{});var Lh=i($n);y(za.$$.fragment,Lh),Lh.forEach(t),Dh.forEach(t),vc=f(Dr),xn=r(Dr,"SPAN",{});var Oh=i(xn);Tc=s(Oh,"FlaxViTForImageClassification"),Oh.forEach(t),Dr.forEach(t),ur=f(o),G=r(o,"DIV",{class:!0});var xe=i(G);y(Na.$$.fragment,xe),bc=f(xe),En=r(xe,"P",{});var Sh=i(En);wc=s(Sh,`ViT Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`),Sh.forEach(t),yc=f(xe),Da=r(xe,"P",{});var Lr=i(Da);$c=s(Lr,"This model inherits from "),Ts=r(Lr,"A",{href:!0});var Wh=i(Ts);xc=s(Wh,"FlaxPreTrainedModel"),Wh.forEach(t),Ec=s(Lr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lr.forEach(t),kc=f(xe),La=r(xe,"P",{});var Or=i(La);Fc=s(Or,"This model is also a Flax Linen "),Oa=r(Or,"A",{href:!0,rel:!0});var Bh=i(Oa);Vc=s(Bh,"flax.linen.Module"),Bh.forEach(t),Ic=s(Or,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Or.forEach(t),Mc=f(xe),kn=r(xe,"P",{});var Rh=i(kn);jc=s(Rh,"Finally, this model supports inherent JAX features such as:"),Rh.forEach(t),Cc=f(xe),dt=r(xe,"UL",{});var Po=i(dt);Fn=r(Po,"LI",{});var Uh=i(Fn);Sa=r(Uh,"A",{href:!0,rel:!0});var Hh=i(Sa);Pc=s(Hh,"Just-In-Time (JIT) compilation"),Hh.forEach(t),Uh.forEach(t),Ac=f(Po),Vn=r(Po,"LI",{});var Kh=i(Vn);Wa=r(Kh,"A",{href:!0,rel:!0});var Jh=i(Wa);qc=s(Jh,"Automatic Differentiation"),Jh.forEach(t),Kh.forEach(t),zc=f(Po),In=r(Po,"LI",{});var Gh=i(In);Ba=r(Gh,"A",{href:!0,rel:!0});var Xh=i(Ba);Nc=s(Xh,"Vectorization"),Xh.forEach(t),Gh.forEach(t),Dc=f(Po),Mn=r(Po,"LI",{});var Zh=i(Mn);Ra=r(Zh,"A",{href:!0,rel:!0});var Qh=i(Ra);Lc=s(Qh,"Parallelization"),Qh.forEach(t),Zh.forEach(t),Po.forEach(t),Oc=f(xe),Be=r(xe,"DIV",{class:!0});var Ao=i(Be);y(Ua.$$.fragment,Ao),Sc=f(Ao),Bt=r(Ao,"P",{});var Ps=i(Bt);Wc=s(Ps,"The "),jn=r(Ps,"CODE",{});var Yh=i(jn);Bc=s(Yh,"FlaxViTPreTrainedModel"),Yh.forEach(t),Rc=s(Ps," forward method, overrides the "),Cn=r(Ps,"CODE",{});var ef=i(Cn);Uc=s(ef,"__call__"),ef.forEach(t),Hc=s(Ps," special method."),Ps.forEach(t),Kc=f(Ao),y(wo.$$.fragment,Ao),Jc=f(Ao),y(yo.$$.fragment,Ao),Ao.forEach(t),xe.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Mf)),c(u,"id","vision-transformer-vit"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#vision-transformer-vit"),c(m,"class","relative group"),c(D,"id","overview"),c(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(D,"href","#overview"),c(q,"class","relative group"),c(re,"href","https://arxiv.org/abs/2010.11929"),c(re,"rel","nofollow"),c(H,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/VisionTransformer"),c(H,"rel","nofollow"),c(Te,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTFeatureExtractor"),c(N,"href","https://huggingface.co/models?search=vit"),c(N,"rel","nofollow"),c(ee,"href","http://www.image-net.org/"),c(ee,"rel","nofollow"),c(j,"href","http://www.image-net.org/challenges/LSVRC/2012/"),c(j,"rel","nofollow"),c(B,"href","https://arxiv.org/abs/1906.06423"),c(B,"rel","nofollow"),c(Fe,"href","https://arxiv.org/abs/1912.11370"),c(Fe,"rel","nofollow"),nf(we.src,Qc="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/vit_architecture.jpg")||c(we,"src",Qc),c(we,"alt","drawing"),c(we,"width","600"),c(Za,"href","https://arxiv.org/abs/2010.11929"),c(Ya,"href","deit"),c(es,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTModel"),c(ts,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTForImageClassification"),c(os,"href","/docs/transformers/v4.24.0/en/model_doc/deit#transformers.DeiTFeatureExtractor"),c(ss,"href","beit"),c(Oo,"href","https://huggingface.co/models?other=dino"),c(Oo,"rel","nofollow"),c(rs,"href","vit_mae"),c(So,"href","https://huggingface.co/nielsr"),c(So,"rel","nofollow"),c(Wo,"href","https://github.com/google-research/vision_transformer"),c(Wo,"rel","nofollow"),c(Bo,"href","https://github.com/rwightman/pytorch-image-models"),c(Bo,"rel","nofollow"),c(Ht,"id","transformers.ViTConfig"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.ViTConfig"),c(kt,"class","relative group"),c(is,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTModel"),c(Ho,"href","https://huggingface.co/google/vit-base-patch16-224"),c(Ho,"rel","nofollow"),c(ls,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ds,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jt,"id","transformers.ViTFeatureExtractor"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.ViTFeatureExtractor"),c(It,"class","relative group"),c(cs,"href","/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin"),c(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.ViTModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.ViTModel"),c(Mt,"class","relative group"),c(ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ea,"rel","nofollow"),c(ps,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTModel"),c(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Yt,"id","transformers.ViTForMaskedImageModeling"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.ViTForMaskedImageModeling"),c(Ct,"class","relative group"),c(na,"href","https://arxiv.org/abs/2111.09886"),c(na,"rel","nofollow"),c(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ia,"rel","nofollow"),c(hs,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTForMaskedImageModeling"),c(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.ViTForImageClassification"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.ViTForImageClassification"),c(At,"class","relative group"),c(ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ha,"rel","nofollow"),c(fs,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.ViTForImageClassification"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.TFViTModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFViTModel"),c(zt,"class","relative group"),c(ms,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(va,"rel","nofollow"),c(us,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.TFViTModel"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ho,"id","transformers.TFViTForImageClassification"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFViTForImageClassification"),c(Dt,"class","relative group"),c(gs,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(xa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(xa,"rel","nofollow"),c(_s,"href","/docs/transformers/v4.24.0/en/model_doc/vit#transformers.TFViTForImageClassification"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_o,"id","transformers.FlaxViTModel"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.FlaxViTModel"),c(Ot,"class","relative group"),c(vs,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ma,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ja,"rel","nofollow"),c(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ca,"rel","nofollow"),c(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Pa,"rel","nofollow"),c(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Aa,"rel","nofollow"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bo,"id","transformers.FlaxViTForImageClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.FlaxViTForImageClassification"),c(Wt,"class","relative group"),c(Ts,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Oa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Oa,"rel","nofollow"),c(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Sa,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Wa,"rel","nofollow"),c(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ba,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ra,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),_(o,T,g),_(o,m,g),e(m,u),e(u,v),$(l,v,null),e(m,p),e(m,F),e(F,z),_(o,C,g),_(o,q,g),e(q,D),e(D,ne),$(I,ne,null),e(q,Ue),e(q,Q),e(Q,He),_(o,Ce,g),_(o,R,g),e(R,Ke),e(R,re),e(re,ie),e(R,Je),_(o,Pe,g),_(o,X,g),e(X,Ge),_(o,Ae,g),_(o,Z,g),e(Z,Ee),e(Ee,Xe),_(o,ve,g),_(o,A,g),e(A,L),_(o,qe,g),_(o,P,g),e(P,le),e(le,Ze),e(le,H),e(H,Qe),e(le,Ye),e(P,O),e(P,ke),e(ke,de),e(P,et),e(P,ce),e(ce,pe),e(ce,Te),e(Te,tt),e(ce,Y),e(P,ot),e(P,S),e(S,at),e(S,he),e(he,W),e(S,st),e(S,N),e(N,nt),e(S,rt),e(P,b),e(P,M),e(M,ut),e(M,ee),e(ee,gt),e(M,_t),e(M,j),e(j,vt),e(M,Tt),e(P,bt),e(P,fe),e(fe,wt),e(fe,B),e(B,me),e(fe,yt),e(fe,Fe),e(Fe,ue),e(fe,$t),e(P,xt),e(P,Ve),e(Ve,Et),_(o,be,g),_(o,we,g),_(o,Kn,g),_(o,Do,g),e(Do,Sr),e(Do,Za),e(Za,Wr),_(o,Jn,g),_(o,Qa,g),e(Qa,Br),_(o,Gn,g),_(o,ze,g),e(ze,As),e(As,U),e(U,Ya),e(Ya,Rr),e(U,Ur),e(U,es),e(es,Hr),e(U,Kr),e(U,ts),e(ts,Jr),e(U,Gr),e(U,qs),e(qs,Xr),e(U,Zr),e(U,zs),e(zs,Qr),e(U,Yr),e(U,Ns),e(Ns,ei),e(U,ti),e(U,Ds),e(Ds,oi),e(U,ai),e(U,os),e(os,si),e(U,ni),e(ze,ri),e(ze,Ls),e(Ls,as),e(as,ss),e(ss,ii),e(as,li),e(ze,di),e(ze,Os),e(Os,Lo),e(Lo,ci),e(Lo,Oo),e(Oo,pi),e(Lo,hi),e(ze,fi),e(ze,Ss),e(Ss,ns),e(ns,rs),e(rs,mi),e(ns,ui),_(o,Xn,g),_(o,pt,g),e(pt,gi),e(pt,So),e(So,_i),e(pt,vi),e(pt,Wo),e(Wo,Ti),e(pt,bi),_(o,Zn,g),_(o,Ut,g),e(Ut,wi),e(Ut,Bo),e(Bo,yi),e(Ut,$i),_(o,Qn,g),_(o,kt,g),e(kt,Ht),e(Ht,Ws),$(Ro,Ws,null),e(kt,xi),e(kt,Bs),e(Bs,Ei),_(o,Yn,g),_(o,Ie,g),$(Uo,Ie,null),e(Ie,ki),e(Ie,Ft),e(Ft,Fi),e(Ft,is),e(is,Vi),e(Ft,Ii),e(Ft,Ho),e(Ho,Mi),e(Ft,ji),e(Ie,Ci),e(Ie,Vt),e(Vt,Pi),e(Vt,ls),e(ls,Ai),e(Vt,qi),e(Vt,ds),e(ds,zi),e(Vt,Ni),e(Ie,Di),$(Kt,Ie,null),_(o,er,g),_(o,It,g),e(It,Jt),e(Jt,Rs),$(Ko,Rs,null),e(It,Li),e(It,Us),e(Us,Oi),_(o,tr,g),_(o,Me,g),$(Jo,Me,null),e(Me,Si),e(Me,Hs),e(Hs,Wi),e(Me,Bi),e(Me,Go),e(Go,Ri),e(Go,cs),e(cs,Ui),e(Go,Hi),e(Me,Ki),e(Me,ht),$(Xo,ht,null),e(ht,Ji),e(ht,Ks),e(Ks,Gi),e(ht,Xi),$(Gt,ht,null),_(o,or,g),_(o,Mt,g),e(Mt,Xt),e(Xt,Js),$(Zo,Js,null),e(Mt,Zi),e(Mt,Gs),e(Gs,Qi),_(o,ar,g),_(o,it,g),$(Qo,it,null),e(it,Yi),e(it,Yo),e(Yo,el),e(Yo,ea),e(ea,tl),e(Yo,ol),e(it,al),e(it,Ne),$(ta,Ne,null),e(Ne,sl),e(Ne,jt),e(jt,nl),e(jt,ps),e(ps,rl),e(jt,il),e(jt,Xs),e(Xs,ll),e(jt,dl),e(Ne,cl),$(Zt,Ne,null),e(Ne,pl),$(Qt,Ne,null),_(o,sr,g),_(o,Ct,g),e(Ct,Yt),e(Yt,Zs),$(oa,Zs,null),e(Ct,hl),e(Ct,Qs),e(Qs,fl),_(o,nr,g),_(o,ge,g),$(aa,ge,null),e(ge,ml),e(ge,sa),e(sa,ul),e(sa,na),e(na,gl),e(sa,_l),e(ge,vl),$(eo,ge,null),e(ge,Tl),e(ge,ra),e(ra,bl),e(ra,ia),e(ia,wl),e(ra,yl),e(ge,$l),e(ge,De),$(la,De,null),e(De,xl),e(De,Pt),e(Pt,El),e(Pt,hs),e(hs,kl),e(Pt,Fl),e(Pt,Ys),e(Ys,Vl),e(Pt,Il),e(De,Ml),$(to,De,null),e(De,jl),$(oo,De,null),_(o,rr,g),_(o,At,g),e(At,ao),e(ao,en),$(da,en,null),e(At,Cl),e(At,tn),e(tn,Pl),_(o,ir,g),_(o,_e,g),$(ca,_e,null),e(_e,Al),e(_e,on),e(on,ql),e(_e,zl),$(so,_e,null),e(_e,Nl),e(_e,pa),e(pa,Dl),e(pa,ha),e(ha,Ll),e(pa,Ol),e(_e,Sl),e(_e,Le),$(fa,Le,null),e(Le,Wl),e(Le,qt),e(qt,Bl),e(qt,fs),e(fs,Rl),e(qt,Ul),e(qt,an),e(an,Hl),e(qt,Kl),e(Le,Jl),$(no,Le,null),e(Le,Gl),$(ro,Le,null),_(o,lr,g),_(o,zt,g),e(zt,io),e(io,sn),$(ma,sn,null),e(zt,Xl),e(zt,nn),e(nn,Zl),_(o,dr,g),_(o,te,g),$(ua,te,null),e(te,Ql),e(te,rn),e(rn,Yl),e(te,ed),e(te,ga),e(ga,td),e(ga,ms),e(ms,od),e(ga,ad),e(te,sd),e(te,_a),e(_a,nd),e(_a,va),e(va,rd),e(_a,id),e(te,ld),$(lo,te,null),e(te,dd),e(te,Oe),$(Ta,Oe,null),e(Oe,cd),e(Oe,Nt),e(Nt,pd),e(Nt,us),e(us,hd),e(Nt,fd),e(Nt,ln),e(ln,md),e(Nt,ud),e(Oe,gd),$(co,Oe,null),e(Oe,_d),$(po,Oe,null),_(o,cr,g),_(o,Dt,g),e(Dt,ho),e(ho,dn),$(ba,dn,null),e(Dt,vd),e(Dt,cn),e(cn,Td),_(o,pr,g),_(o,K,g),$(wa,K,null),e(K,bd),e(K,pn),e(pn,wd),e(K,yd),$(fo,K,null),e(K,$d),e(K,ya),e(ya,xd),e(ya,gs),e(gs,Ed),e(ya,kd),e(K,Fd),e(K,$a),e($a,Vd),e($a,xa),e(xa,Id),e($a,Md),e(K,jd),$(mo,K,null),e(K,Cd),e(K,Se),$(Ea,Se,null),e(Se,Pd),e(Se,Lt),e(Lt,Ad),e(Lt,_s),e(_s,qd),e(Lt,zd),e(Lt,hn),e(hn,Nd),e(Lt,Dd),e(Se,Ld),$(uo,Se,null),e(Se,Od),$(go,Se,null),_(o,hr,g),_(o,Ot,g),e(Ot,_o),e(_o,fn),$(ka,fn,null),e(Ot,Sd),e(Ot,mn),e(mn,Wd),_(o,fr,g),_(o,J,g),$(Fa,J,null),e(J,Bd),e(J,un),e(un,Rd),e(J,Ud),e(J,Va),e(Va,Hd),e(Va,vs),e(vs,Kd),e(Va,Jd),e(J,Gd),e(J,Ia),e(Ia,Xd),e(Ia,Ma),e(Ma,Zd),e(Ia,Qd),e(J,Yd),e(J,gn),e(gn,ec),e(J,tc),e(J,lt),e(lt,_n),e(_n,ja),e(ja,oc),e(lt,ac),e(lt,vn),e(vn,Ca),e(Ca,sc),e(lt,nc),e(lt,Tn),e(Tn,Pa),e(Pa,rc),e(lt,ic),e(lt,bn),e(bn,Aa),e(Aa,lc),e(J,dc),e(J,We),$(qa,We,null),e(We,cc),e(We,St),e(St,pc),e(St,wn),e(wn,hc),e(St,fc),e(St,yn),e(yn,mc),e(St,uc),e(We,gc),$(vo,We,null),e(We,_c),$(To,We,null),_(o,mr,g),_(o,Wt,g),e(Wt,bo),e(bo,$n),$(za,$n,null),e(Wt,vc),e(Wt,xn),e(xn,Tc),_(o,ur,g),_(o,G,g),$(Na,G,null),e(G,bc),e(G,En),e(En,wc),e(G,yc),e(G,Da),e(Da,$c),e(Da,Ts),e(Ts,xc),e(Da,Ec),e(G,kc),e(G,La),e(La,Fc),e(La,Oa),e(Oa,Vc),e(La,Ic),e(G,Mc),e(G,kn),e(kn,jc),e(G,Cc),e(G,dt),e(dt,Fn),e(Fn,Sa),e(Sa,Pc),e(dt,Ac),e(dt,Vn),e(Vn,Wa),e(Wa,qc),e(dt,zc),e(dt,In),e(In,Ba),e(Ba,Nc),e(dt,Dc),e(dt,Mn),e(Mn,Ra),e(Ra,Lc),e(G,Oc),e(G,Be),$(Ua,Be,null),e(Be,Sc),e(Be,Bt),e(Bt,Wc),e(Bt,jn),e(jn,Bc),e(Bt,Rc),e(Bt,Cn),e(Cn,Uc),e(Bt,Hc),e(Be,Kc),$(wo,Be,null),e(Be,Jc),$(yo,Be,null),gr=!0},p(o,[g]){const Ha={};g&2&&(Ha.$$scope={dirty:g,ctx:o}),Kt.$set(Ha);const Pn={};g&2&&(Pn.$$scope={dirty:g,ctx:o}),Gt.$set(Pn);const An={};g&2&&(An.$$scope={dirty:g,ctx:o}),Zt.$set(An);const qn={};g&2&&(qn.$$scope={dirty:g,ctx:o}),Qt.$set(qn);const Ka={};g&2&&(Ka.$$scope={dirty:g,ctx:o}),eo.$set(Ka);const zn={};g&2&&(zn.$$scope={dirty:g,ctx:o}),to.$set(zn);const Nn={};g&2&&(Nn.$$scope={dirty:g,ctx:o}),oo.$set(Nn);const Dn={};g&2&&(Dn.$$scope={dirty:g,ctx:o}),so.$set(Dn);const Ja={};g&2&&(Ja.$$scope={dirty:g,ctx:o}),no.$set(Ja);const Ln={};g&2&&(Ln.$$scope={dirty:g,ctx:o}),ro.$set(Ln);const On={};g&2&&(On.$$scope={dirty:g,ctx:o}),lo.$set(On);const Sn={};g&2&&(Sn.$$scope={dirty:g,ctx:o}),co.$set(Sn);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:o}),po.$set(Wn);const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:o}),fo.$set(Bn);const oe={};g&2&&(oe.$$scope={dirty:g,ctx:o}),mo.$set(oe);const Ga={};g&2&&(Ga.$$scope={dirty:g,ctx:o}),uo.$set(Ga);const Rn={};g&2&&(Rn.$$scope={dirty:g,ctx:o}),go.$set(Rn);const Un={};g&2&&(Un.$$scope={dirty:g,ctx:o}),vo.$set(Un);const Xa={};g&2&&(Xa.$$scope={dirty:g,ctx:o}),To.$set(Xa);const Hn={};g&2&&(Hn.$$scope={dirty:g,ctx:o}),wo.$set(Hn);const Rt={};g&2&&(Rt.$$scope={dirty:g,ctx:o}),yo.$set(Rt)},i(o){gr||(x(l.$$.fragment,o),x(I.$$.fragment,o),x(Ro.$$.fragment,o),x(Uo.$$.fragment,o),x(Kt.$$.fragment,o),x(Ko.$$.fragment,o),x(Jo.$$.fragment,o),x(Xo.$$.fragment,o),x(Gt.$$.fragment,o),x(Zo.$$.fragment,o),x(Qo.$$.fragment,o),x(ta.$$.fragment,o),x(Zt.$$.fragment,o),x(Qt.$$.fragment,o),x(oa.$$.fragment,o),x(aa.$$.fragment,o),x(eo.$$.fragment,o),x(la.$$.fragment,o),x(to.$$.fragment,o),x(oo.$$.fragment,o),x(da.$$.fragment,o),x(ca.$$.fragment,o),x(so.$$.fragment,o),x(fa.$$.fragment,o),x(no.$$.fragment,o),x(ro.$$.fragment,o),x(ma.$$.fragment,o),x(ua.$$.fragment,o),x(lo.$$.fragment,o),x(Ta.$$.fragment,o),x(co.$$.fragment,o),x(po.$$.fragment,o),x(ba.$$.fragment,o),x(wa.$$.fragment,o),x(fo.$$.fragment,o),x(mo.$$.fragment,o),x(Ea.$$.fragment,o),x(uo.$$.fragment,o),x(go.$$.fragment,o),x(ka.$$.fragment,o),x(Fa.$$.fragment,o),x(qa.$$.fragment,o),x(vo.$$.fragment,o),x(To.$$.fragment,o),x(za.$$.fragment,o),x(Na.$$.fragment,o),x(Ua.$$.fragment,o),x(wo.$$.fragment,o),x(yo.$$.fragment,o),gr=!0)},o(o){E(l.$$.fragment,o),E(I.$$.fragment,o),E(Ro.$$.fragment,o),E(Uo.$$.fragment,o),E(Kt.$$.fragment,o),E(Ko.$$.fragment,o),E(Jo.$$.fragment,o),E(Xo.$$.fragment,o),E(Gt.$$.fragment,o),E(Zo.$$.fragment,o),E(Qo.$$.fragment,o),E(ta.$$.fragment,o),E(Zt.$$.fragment,o),E(Qt.$$.fragment,o),E(oa.$$.fragment,o),E(aa.$$.fragment,o),E(eo.$$.fragment,o),E(la.$$.fragment,o),E(to.$$.fragment,o),E(oo.$$.fragment,o),E(da.$$.fragment,o),E(ca.$$.fragment,o),E(so.$$.fragment,o),E(fa.$$.fragment,o),E(no.$$.fragment,o),E(ro.$$.fragment,o),E(ma.$$.fragment,o),E(ua.$$.fragment,o),E(lo.$$.fragment,o),E(Ta.$$.fragment,o),E(co.$$.fragment,o),E(po.$$.fragment,o),E(ba.$$.fragment,o),E(wa.$$.fragment,o),E(fo.$$.fragment,o),E(mo.$$.fragment,o),E(Ea.$$.fragment,o),E(uo.$$.fragment,o),E(go.$$.fragment,o),E(ka.$$.fragment,o),E(Fa.$$.fragment,o),E(qa.$$.fragment,o),E(vo.$$.fragment,o),E(To.$$.fragment,o),E(za.$$.fragment,o),E(Na.$$.fragment,o),E(Ua.$$.fragment,o),E(wo.$$.fragment,o),E(yo.$$.fragment,o),gr=!1},d(o){t(d),o&&t(T),o&&t(m),k(l),o&&t(C),o&&t(q),k(I),o&&t(Ce),o&&t(R),o&&t(Pe),o&&t(X),o&&t(Ae),o&&t(Z),o&&t(ve),o&&t(A),o&&t(qe),o&&t(P),o&&t(be),o&&t(we),o&&t(Kn),o&&t(Do),o&&t(Jn),o&&t(Qa),o&&t(Gn),o&&t(ze),o&&t(Xn),o&&t(pt),o&&t(Zn),o&&t(Ut),o&&t(Qn),o&&t(kt),k(Ro),o&&t(Yn),o&&t(Ie),k(Uo),k(Kt),o&&t(er),o&&t(It),k(Ko),o&&t(tr),o&&t(Me),k(Jo),k(Xo),k(Gt),o&&t(or),o&&t(Mt),k(Zo),o&&t(ar),o&&t(it),k(Qo),k(ta),k(Zt),k(Qt),o&&t(sr),o&&t(Ct),k(oa),o&&t(nr),o&&t(ge),k(aa),k(eo),k(la),k(to),k(oo),o&&t(rr),o&&t(At),k(da),o&&t(ir),o&&t(_e),k(ca),k(so),k(fa),k(no),k(ro),o&&t(lr),o&&t(zt),k(ma),o&&t(dr),o&&t(te),k(ua),k(lo),k(Ta),k(co),k(po),o&&t(cr),o&&t(Dt),k(ba),o&&t(pr),o&&t(K),k(wa),k(fo),k(mo),k(Ea),k(uo),k(go),o&&t(hr),o&&t(Ot),k(ka),o&&t(fr),o&&t(J),k(Fa),k(qa),k(vo),k(To),o&&t(mr),o&&t(Wt),k(za),o&&t(ur),o&&t(G),k(Na),k(Ua),k(wo),k(yo)}}}const Mf={local:"vision-transformer-vit",sections:[{local:"overview",title:"Overview"},{local:"transformers.ViTConfig",title:"ViTConfig"},{local:"transformers.ViTFeatureExtractor",title:"ViTFeatureExtractor"},{local:"transformers.ViTModel",title:"ViTModel"},{local:"transformers.ViTForMaskedImageModeling",title:"ViTForMaskedImageModeling"},{local:"transformers.ViTForImageClassification",title:"ViTForImageClassification"},{local:"transformers.TFViTModel",title:"TFViTModel"},{local:"transformers.TFViTForImageClassification",title:"TFViTForImageClassification"},{local:"transformers.FlaxViTModel",title:"FlaxVitModel"},{local:"transformers.FlaxViTForImageClassification",title:"FlaxViTForImageClassification"}],title:"Vision Transformer (ViT)"};function jf(V){return rf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Df extends tf{constructor(d){super();of(this,d,jf,If,af,{})}}export{Df as default,Mf as metadata};
